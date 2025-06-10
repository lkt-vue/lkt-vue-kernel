import {LktItem} from "./LktItem.ts";
import {TooltipConfig} from "../config/TooltipConfig.ts";
import {TooltipPositionEngine} from "../enums/TooltipPositionEngine.ts";
import {TooltipLocationY} from "../enums/TooltipLocationY.ts";
import {TooltipLocationX} from "../enums/TooltipLocationX.ts";

export class Tooltip extends LktItem implements TooltipConfig {

    static lktDefaultValues: (keyof TooltipConfig)[] = [
        'modelValue',
        'alwaysOpen',
        'class',
        'contentClass',
        'text',
        'icon',
        'iconAtEnd',
        'engine',
        'referrerWidth',
        'referrerMargin',
        'windowMargin',
        'referrer',
        'locationY',
        'locationX',
        'showOnReferrerHover',
        'showOnReferrerHoverDelay',
        'hideOnReferrerLeave',
        'hideOnReferrerLeaveDelay',
        'compensationX',
        'compensationY',
        'compensateGlobalContainers',
    ];

    modelValue: boolean = false;
    alwaysOpen: boolean = false;
    class: string = '';
    contentClass: string = '';
    text: string = '';
    icon: string = '';
    iconAtEnd: boolean = false;
    engine: TooltipPositionEngine = TooltipPositionEngine.Fixed;
    referrerWidth: boolean = false;
    referrerMargin: number | string = 0;
    windowMargin: number | string = 0;
    referrer: HTMLElement|undefined = undefined;
    locationY: TooltipLocationY = TooltipLocationY.Bottom;
    locationX: TooltipLocationX = TooltipLocationX.LeftCorner;
    showOnReferrerHover: boolean = false;
    showOnReferrerHoverDelay: number = 0;
    hideOnReferrerLeave: boolean = false;
    hideOnReferrerLeaveDelay: number = 0;
    compensationX: number = 0;
    compensationY: number = 0;
    compensateGlobalContainers: boolean = true;

    constructor(data: Partial<TooltipConfig> = {}) {
        super();
        this.feed(data);
    }
}