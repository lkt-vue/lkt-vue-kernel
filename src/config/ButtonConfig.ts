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
import {ValidButtonDot} from "../types/ValidButtonDot.ts";

export interface ButtonConfig {

    // Main config
    type?: ButtonType
    name?: string
    value?: string

    // State
    disabled?: ValidIsDisabledValue
    openTooltip?: boolean
    loading?: boolean

    // Styling
    class?: string
    containerClass?: string
    wrapContent?: boolean

    // Content
    text?: string | number
    icon?: string
    iconEnd?: string
    img?: string

    // Check button
    checked?: boolean
    textOn?: string | number | undefined
    textOff?: string | number | undefined
    iconOn?: string | number | undefined
    iconOff?: string | number | undefined
    iconEndOn?: string | number | undefined
    iconEndOff?: string | number | undefined

    // Dot config
    dot?: ValidButtonDot

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

    // Tooltip and split
    tooltip?: TooltipConfig
    splitIcon?: string
    showTooltipOnHover?: boolean
    showTooltipOnHoverDelay?: number
    hideTooltipOnLeave?: boolean
    splitClass?: string

    // Accessibility
    tabindex?: ValidTabIndex

    // Extract data
    prop?: LktObject

    // Event management
    clickRef?: Element | VueElement
    onClick?: Function|undefined
}