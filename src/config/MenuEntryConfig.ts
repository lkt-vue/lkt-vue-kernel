import {EventsConfig} from "./EventsConfig.ts";
import {MenuEntryType} from "../enums/MenuEntryType.ts";
import {AnchorConfig} from "./AnchorConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";

export interface MenuEntryConfig {
    // Core config
    key?: string
    type?: MenuEntryType
    class?: string

    // Icon
    icon?: string

    // Anchor config
    anchor?: AnchorConfig

    // Button config
    button?: ButtonConfig

    // State control
    isActiveChecker?: Function|undefined
    isOpened?: boolean
    isActive?: boolean

    // Related entries
    parent?: MenuEntryConfig|undefined
    children?: MenuEntryConfig[]

    // Events
    events?: EventsConfig|undefined

    // Deprecated
    onClick?: Function|undefined
}