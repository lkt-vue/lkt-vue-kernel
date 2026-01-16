import {ButtonType} from "../enums/ButtonType.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {VueElement} from "vue";
import {AnchorConfig} from "./AnchorConfig.ts";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";
import {ModalConfig} from "./ModalConfig.ts";
import {ValidTabIndex} from "../types/ValidTabIndex.ts";
import {ValidIsDisabledValue} from "../types/ValidIsDisabledValue.ts";
import {ModalCallbackConfig} from "./ModalCallbackConfig.ts";
import {TooltipConfig} from "./TooltipConfig.ts";
import {ValidIconDot} from "../types/ValidIconDot.ts";
import {ValidTextValue} from "../types/ValidTextValue.ts";
import {IconConfig} from "./IconConfig.ts";
import {AriaConfig} from "./AriaConfig.ts";
import {ButtonEvents} from "./events/ButtonEvents.ts";
import {ButtonHooks} from "./hooks/ButtonHooks.ts";

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
    wrapButton?: boolean

    // Content
    text?: ValidTextValue
    icon?: IconConfig|string
    iconEnd?: IconConfig|string
    img?: string

    // Check button
    checked?: boolean
    textOn?: ValidTextValue
    textOff?: ValidTextValue
    iconOn?: IconConfig|ValidTextValue
    iconOff?: IconConfig|ValidTextValue
    iconEndOn?: IconConfig|ValidTextValue
    iconEndOff?: IconConfig|ValidTextValue

    // Dot config
    // @deprecated use icon config instead
    dot?: ValidIconDot

    // Anchor integration
    anchor?: AnchorConfig

    // HTTP integration
    resource?: string
    resourceData?: LktObject

    // Modal integration
    modal?: ValidModalName
    modalKey?: ValidModalKey
    modalData?: Partial<ModalConfig> | Function
    confirmModal?: ValidModalName
    confirmModalKey?: ValidModalKey
    confirmData?: Partial<ModalConfig>
    modalCallbacks?: Array<ModalCallbackConfig>

    // Menu integration
    menuKey?: ValidModalKey

    // Tooltip and split
    tooltip?: TooltipConfig
    splitIcon?: string
    showTooltipOnHover?: boolean
    showTooltipOnHoverDelay?: number
    hideTooltipOnLeave?: boolean
    splitClass?: string
    splitButtons?: Array<ButtonConfig>

    // Accessibility
    tabindex?: ValidTabIndex

    // Extract data
    prop?: LktObject

    //Accessibility
    aria?: AriaConfig

    // Event management (custom events handling)
    clickRef?: Element | VueElement
    events?: ButtonEvents
    preventDefault?: boolean
    stopPropagation?: boolean
    dispatchHttpNotifications?: boolean

    // Hooks management (Predefined events)
    hooks?: ButtonHooks
}