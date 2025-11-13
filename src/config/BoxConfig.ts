import {IconConfig} from "./IconConfig.ts";
import {HeaderConfig} from "./HeaderConfig.ts";

export interface BoxConfig {

    // lkt-box
    style?: string
    class?: string
    contentClass?: string

    // Icon
    icon?: IconConfig|string

    // Header
    header?: HeaderConfig

    // Deprecated
    title?: string
    iconAtEnd?: boolean
}