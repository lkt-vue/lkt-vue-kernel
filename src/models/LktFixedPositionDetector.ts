import {PositionDetectorArgs} from "../arguments/PositionDetectorArgs.ts";
import {getScrollbarWidth} from "../dom/dom-functions.ts";
import {TooltipLocation} from "../enums/TooltipLocation.ts";
import {LktPosition} from "./LktPosition.ts";
import {TooltipPositionEngine} from "../enums/TooltipPositionEngine.ts";

export class LktFixedPositionDetector {

    protected data: PositionDetectorArgs = {};

    constructor(data: Partial<PositionDetectorArgs> = {}) {
        this.data = data;
    }

    detect() {

        console.log('begin detect: ', this.data);

        if (!this.data.positionReferenceElement) return undefined;
        if (typeof this.data.location === 'undefined') return undefined;

        // Data preparation
        let compensationX = this.data.compensation?.x ?? 0;
        let compensationY = this.data.compensation?.y ?? 0;
        let referrerMargin = this.data.offset?.referrer ?? 0;
        let windowMargin = this.data.offset?.window ?? 0;

        if (isNaN(compensationY)) compensationY = 0;
        if (isNaN(compensationX)) compensationX = 0;
        if (isNaN(referrerMargin)) referrerMargin = 0;
        if (isNaN(windowMargin)) windowMargin = 0;

        const referenceElementRect = this.data.positionReferenceElement.getBoundingClientRect(),
            referrerHeight = referenceElementRect.height,
            referrerWidth = referenceElementRect.width,
            sizerElementWidth = this.data.contentElement?.offsetWidth ?? 0,
            sizerElementHeight = this.data.contentElement?.offsetHeight ?? 0,
            scrollBarWidth = getScrollbarWidth(),
            windowWidth = window.innerWidth;

        let top = undefined,
            right = undefined,
            bottom = undefined,
            left = undefined;

        // ---
        // Top detection
        // ------
        if ([
            TooltipLocation.BeginsTopLeft,
            TooltipLocation.BeginsTopCenter,
            TooltipLocation.BeginsTopRight,
            TooltipLocation.EndsTopLeft,
            TooltipLocation.EndsTopCenter,
            TooltipLocation.EndsTopRight,
        ].includes(this.data.location)) {
            top = referenceElementRect.top - referrerHeight - referrerMargin - compensationY;
        }

        else if ([
            TooltipLocation.BeginsBottomLeft,
            TooltipLocation.BeginsBottomCenter,
            TooltipLocation.BeginsBottomRight,
            TooltipLocation.EndsBottomLeft,
            TooltipLocation.EndsBottomCenter,
            TooltipLocation.EndsBottomRight,
        ].includes(this.data.location)) {
            top = referenceElementRect.top + referrerHeight + referrerMargin - compensationY;
        }

        else if ([
            TooltipLocation.BeginsCenterLeft,
            TooltipLocation.BeginsCenterRight,
            TooltipLocation.EndsCenterLeft,
            TooltipLocation.EndsCenterRight,
        ].includes(this.data.location)) {
            top = referenceElementRect.top + referrerMargin;
        }

        // ---
        // Left detection
        // ------
        if ([
            TooltipLocation.BeginsTopLeft,
            TooltipLocation.BeginsCenterLeft,
            TooltipLocation.BeginsBottomLeft,
        ].includes(this.data.location)) {
            left = referenceElementRect.left - referrerWidth - compensationX;
        }
        else if ([
            TooltipLocation.BeginsTopRight,
            TooltipLocation.BeginsCenterRight,
            TooltipLocation.BeginsBottomRight,
            TooltipLocation.EndsTopRight,
            TooltipLocation.EndsCenterRight,
            TooltipLocation.EndsBottomRight,
        ].includes(this.data.location)) {
            left = referenceElementRect.left + referrerWidth + referrerMargin - compensationX;
        }
        else if ([
            TooltipLocation.BeginsTopCenter,
            TooltipLocation.BeginsBottomCenter,
        ].includes(this.data.location)) {
            left = referenceElementRect.left + referrerMargin - compensationX;
        }
        else if ([
            TooltipLocation.EndsTopLeft,
            TooltipLocation.EndsCenterLeft,
            TooltipLocation.EndsBottomLeft,
        ].includes(this.data.location)) {
            right = referenceElementRect.left;
            left = right - sizerElementWidth - referrerMargin - compensationX;
        }
        else if ([
            TooltipLocation.EndsTopCenter,
            TooltipLocation.EndsBottomCenter,
        ].includes(this.data.location)) {
            right = referenceElementRect.right;
            left = right - sizerElementWidth;
        }

        if (typeof left === 'undefined') return undefined;
        if (typeof top === 'undefined') return undefined;

        // ---
        // Adjust style if content is bigger than window size
        // ------
        if (typeof right === 'undefined') {
            let wLastPixel = left + sizerElementWidth + scrollBarWidth;
            if (wLastPixel > (windowWidth - windowMargin - scrollBarWidth)) {
                let diff = wLastPixel - windowWidth;

                let newLeft = left - diff;
                if (newLeft <= 0 && windowMargin) {
                    newLeft = windowMargin;
                }

                left = newLeft;

                if (left !== 0) {
                    if (windowMargin) {
                        right = windowMargin + scrollBarWidth;
                    } else if (left > 0) {
                        right = scrollBarWidth;
                    }
                }
            } else {
                right = undefined;
            }
        } else {
            right = undefined;
        }

        let hLastPixel = top + sizerElementHeight + scrollBarWidth;
        if (hLastPixel > (window.innerHeight - windowMargin - scrollBarWidth)) {

            let diff = hLastPixel - window.innerHeight;

            let newTop = top - diff - windowMargin - scrollBarWidth;
            if (newTop < 0) newTop = windowMargin;
            top = newTop;

            if (windowMargin) {
                bottom = windowMargin;
            } else {
                bottom = 0;
            }
        } else {
            bottom = undefined;
        }

        // ---
        // Return Position object
        // ------
        let r = new LktPosition({
            position: TooltipPositionEngine.Fixed,
            top,
            left,
            right,
            bottom,
            width: this.data.adjustToReferrerWidth ? referrerWidth : undefined,
        });

        console.log('detected position: ', r);

        return r;
    }
}