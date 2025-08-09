import {HeaderTag} from "../enums/HeaderTag.ts";
import {IconConfig} from "./IconConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";

export interface HeaderConfig {
    tag?: HeaderTag
    class?: string
    text?: string
    icon?: string|IconConfig

    topStartButtons?: Array<ButtonConfig>
    topEndButtons?: Array<ButtonConfig>
    bottomButtons?: Array<ButtonConfig>
}