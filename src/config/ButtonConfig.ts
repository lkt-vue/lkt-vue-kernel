import {ButtonType} from "../enums/ButtonType.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {VueElement} from "vue";
import {ToggleMode} from "../enums/ToggleMode.ts";
import {AnchorConfig} from "./AnchorConfig.ts";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";
import {ModalConfig} from "./ModalConfig.ts";
import {ValidTabIndex} from "../types/ValidTabIndex.ts";
import {Anchor} from "../instances/Anchor.ts";
import {TooltipPositionEngine} from "../enums/TooltipPositionEngine.ts";

export interface ButtonConfig {
    type?: ButtonType
    checked?: boolean
    openTooltip?: boolean
    name?: string
    text?: string | number
    icon?: string
    class?: string
    containerClass?: string
    palette?: string
    value?: string
    disabled?: boolean
    loading?: boolean
    wrapContent?: boolean

    // Anchor integration
    anchor?: AnchorConfig|Anchor

    // HTTP integration
    resource?: string
    resourceData?: LktObject

    // Modal integration
    modal?: ValidModalName
    modalKey?: ValidModalKey
    modalData?: ModalConfig
    confirmModal?: ValidModalName
    confirmModalKey?: ValidModalKey
    confirmData?: ModalConfig

    // Icon and img
    iconDot?: boolean | string | number
    iconEnd?: string
    img?: string

    // Tooltip and split
    split?: boolean | ToggleMode
    splitIcon?: string
    tooltip?: boolean | ToggleMode
    tooltipEngine?: TooltipPositionEngine
    showTooltipOnHover?: boolean
    showTooltipOnHoverDelay?: number
    hideTooltipOnLeave?: boolean
    tooltipWindowMargin?: number
    tooltipReferrerMargin?: number
    tooltipClass?: string
    tooltipLocationY?: string
    tooltipLocationX?: string
    splitClass?: string
    clickRef?: Element | VueElement
    tabindex?: ValidTabIndex

    // Old anchor mode (To Be Removed)
    isAnchor?: boolean
    onClickTo?: string
    onClickToExternal?: boolean
    download?: boolean
    downloadFileName?: string
    newTab?: boolean

    // Old switch mode (To Be Removed)
    showSwitch?: boolean
    hiddenSwitch?: boolean
}