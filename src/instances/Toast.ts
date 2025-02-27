import {LktItem} from "./LktItem.ts";
import {ToastConfig} from "../config/ToastConfig.ts";
import {ToastType} from "../enums/ToastType.ts";
import {ValidTextValue} from "../types/ValidTextValue.ts";
import {ToastPositionX} from "../enums/ToastPositionX.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";

export class Toast extends LktItem implements ToastConfig {

    static lktDefaultValues: (keyof ToastConfig)[] = [
        'type',
        'text',
        'icon',
        'positionX',
        'duration',
        'buttonConfig',
        'zIndex',
    ];

    type?: ToastType = ToastType.Message;
    text?: ValidTextValue = '';
    icon?: ValidTextValue = '';
    positionX?: ToastPositionX = ToastPositionX.Right;
    duration?: number|undefined = undefined;

    // Button mode
    buttonConfig?: ButtonConfig|undefined = undefined;

    // Programmatically used by canvas
    zIndex?: number = 1000;

    constructor(data: Partial<ToastConfig> = {}) {
        super();
        this.feed(data);
    }
}