import {EventsConfig} from "./EventsConfig.ts";
import {MenuEntryType} from "../enums/MenuEntryType.ts";
import {AnchorConfig} from "./AnchorConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {HeaderConfig} from "./HeaderConfig.ts";

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

    // Header config
    header?: HeaderConfig

    // State control
    isActiveChecker?: Function|undefined
    isOpened?: boolean
    isActive?: boolean
    keepOpenOnChildClick?: boolean

    // Related entries
    parent?: MenuEntryConfig|undefined
    children?: MenuEntryConfig[]

    // Events
    events?: EventsConfig|undefined
}