import {TooltipLocationY} from '../enums/TooltipLocationY.ts';
import {TooltipLocationX} from '../enums/TooltipLocationX.ts';
import {TooltipPositionEngine} from '../enums/TooltipPositionEngine.ts';

export interface TooltipConfig {
    modelValue?: boolean
    alwaysOpen?: boolean
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
    locationY?: TooltipLocationY
    locationX?: TooltipLocationX
    showOnReferrerHover?: boolean
    showOnReferrerHoverDelay?: number
    hideOnReferrerLeave?: boolean
    hideOnReferrerLeaveDelay?: number
    compensationX?: number
    compensationY?: number
    compensateGlobalContainers?: boolean
    remoteControl?: boolean
}

