import {EventsConfig} from "./EventsConfig.ts";

export interface MenuEntryConfig {
    key?: string
    href?: string
    label?: string
    icon?: string

    isActiveChecker?: Function|undefined

    isOpened?: boolean
    isActive?: boolean
    parent?: MenuEntryConfig|undefined

    children?: MenuEntryConfig[]

    // Events
    events?: EventsConfig|undefined

    // Deprecated
    onClick?: Function|undefined
}