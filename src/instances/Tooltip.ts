import {FieldConfig} from "../config/FieldConfig.ts";
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
    ];

    modelValue: boolean = false;
    alwaysOpen: boolean = false;
    class: string = '';
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

    constructor(data: FieldConfig = {}) {
        super();
        this.feed(data);
    }
}