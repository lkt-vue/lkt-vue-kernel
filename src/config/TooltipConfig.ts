import {TooltipLocationY} from '../enums/TooltipLocationY.ts';
import {TooltipLocationX} from '../enums/TooltipLocationX.ts';
import {TooltipPositionEngine} from '../enums/TooltipPositionEngine.ts';
import {PolymorphicElementConfig} from "./PolymorphicElementConfig.ts";
import {TooltipType} from "../enums/TooltipType.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {TooltipLocation} from "../enums/TooltipLocation.ts";

export interface TooltipConfig {
    modelValue?: boolean
    type?: TooltipType
    alwaysOpen?: boolean
    indicator?: boolean
    class?: string
    contentClass?: string
    text?: string
    icon?: string
    iconAtEnd?: boolean
    engine?: TooltipPositionEngine
    referrerMargin?: number | string
    windowMargin?: number | string
    referrerWidth?: boolean
    referrer?: HTMLElement|undefined
    location?: TooltipLocation
    showOnReferrerHover?: boolean
    showOnReferrerHoverDelay?: number
    hideOnReferrerLeave?: boolean
    hideOnReferrerLeaveDelay?: number
    compensationX?: number
    compensationY?: number
    compensateGlobalContainers?: boolean
    remoteControl?: boolean
    teleport?: string
    content?: Array<PolymorphicElementConfig>
    closeButton?: false|ButtonConfig

    // Deprecated
    locationY?: TooltipLocationY
    locationX?: TooltipLocationX
}

