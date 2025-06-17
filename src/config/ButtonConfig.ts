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
import {EventsConfig} from "./EventsConfig.ts";
import {ClickEventArgs} from "../arguments/ClickEventArgs.ts";
import {HTTPResponse} from "lkt-http-client";

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
    text?: ValidTextValue
    icon?: string
    iconEnd?: string
    img?: string

    // Check button
    checked?: boolean
    textOn?: ValidTextValue
    textOff?: ValidTextValue
    iconOn?: ValidTextValue
    iconOff?: ValidTextValue
    iconEndOn?: ValidTextValue
    iconEndOff?: ValidTextValue

    // Dot config
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

    // Event management
    clickRef?: Element | VueElement
    events?: {
        click?: (data: ClickEventArgs) => void|undefined,
        httpStart?: undefined | Function,
        httpEnd?: (data: ClickEventArgs) => void|undefined,
    }
}