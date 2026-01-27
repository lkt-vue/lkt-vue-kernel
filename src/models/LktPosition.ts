import {PositionDetectorArgs} from "../arguments/PositionDetectorArgs.ts";
import {getScrollbarWidth} from "../dom/dom-functions.ts";
import {TooltipLocation} from "../enums/TooltipLocation.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export class LktPosition {

    top?: number = undefined;
    bottom?: number = undefined;
    left?: number = undefined;
    right?: number = undefined;
    width?: number = undefined;
    position?: 'fixed' | 'absolute' | '' = '';

    constructor(data: LktObject) {
        //@ts-ignore
        for (let k in data) this[k] = data[k];
    }

    assign(data: LktObject|LktPosition) {
        this.top = undefined;
        this.bottom = undefined;
        this.left = undefined;
        this.right = undefined;
        this.width = undefined;
        this.position = '';

        //@ts-ignore
        for (let k in data) this[k] = data[k];
    }

    getStyles() {
        let r: LktObject = {};
        if (this.position) r.position = this.position;
        if (this.top) r.top = this.top + 'px';
        if (this.bottom) r.bottom = this.bottom + 'px';
        if (this.left) r.left = this.left + 'px';
        if (this.right) r.right = this.right + 'px';
        if (this.width) r.width = this.width + 'px';
        return r;
    }
}