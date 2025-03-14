import {EventsConfig} from "./EventsConfig.ts";
import {MenuEntryType} from "../enums/MenuEntryType.ts";
import {AnchorConfig} from "./AnchorConfig.ts";

export interface MenuEntryConfig {
    // Core config
    key?: string
    type?: MenuEntryType

    // Icon
    icon?: string

    // Anchor config
    anchor?: AnchorConfig

    // Deprecated anchor config
    href?: string
    label?: string

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