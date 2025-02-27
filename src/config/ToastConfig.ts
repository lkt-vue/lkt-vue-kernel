import {ValidTextValue} from "../types/ValidTextValue.ts";
import {ToastType} from "../enums/ToastType.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {ToastPositionX} from "../enums/ToastPositionX.ts";

export interface ToastConfig {
    type?: ToastType
    text?: ValidTextValue
    icon?: ValidTextValue
    positionX?: ToastPositionX
    duration?: number

    // Button mode
    buttonConfig?: ButtonConfig

    // Programmatically used by canvas
    zIndex?: number
}