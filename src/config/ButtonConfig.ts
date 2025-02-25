import {ButtonType} from "../enums/ButtonType.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {VueElement} from "vue";
import {AnchorConfig} from "./AnchorConfig.ts";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";
import {ModalConfig} from "./ModalConfig.ts";
import {ValidTabIndex} from "../types/ValidTabIndex.ts";
import {Anchor} from "../instances/Anchor.ts";
import {ValidIsDisabledValue} from "../types/ValidIsDisabledValue.ts";
import {ModalCallbackConfig} from "./ModalCallbackConfig.ts";
import {TooltipConfig} from "./TooltipConfig.ts";

export interface ButtonConfig {
    type?: ButtonType
    openTooltip?: boolean
    name?: string
    text?: string | number
    icon?: string
    class?: string
    containerClass?: string
    palette?: string
    value?: string
    disabled?: ValidIsDisabledValue
    loading?: boolean
    wrapContent?: boolean

    // Check button
    checked?: boolean
    textOn?: string | number | undefined
    textOff?: string | number | undefined
    iconOn?: string | number | undefined
    iconOff?: string | number | undefined

    // Anchor integration
    anchor?: AnchorConfig|Anchor

    // HTTP integration
    resource?: string
    resourceData?: LktObject

    // Modal integration
    modal?: ValidModalName
    modalKey?: ValidModalKey
    modalData?: Partial<ModalConfig>
    confirmModal?: ValidModalName
    confirmModalKey?: ValidModalKey
    confirmData?: Partial<ModalConfig>
    modalCallbacks?: Array<ModalCallbackConfig>

    // Icon and img
    iconDot?: boolean | string | number
    iconEnd?: string
    img?: string

    // Tooltip and split
    splitIcon?: string
    showTooltipOnHover?: boolean
    showTooltipOnHoverDelay?: number
    hideTooltipOnLeave?: boolean
    tooltip?: TooltipConfig
    splitClass?: string
    clickRef?: Element | VueElement
    tabindex?: ValidTabIndex

    // Extract data
    prop?: LktObject

    // Event management
    onClick?: Function|undefined
    onConfirm?: Function|undefined
}