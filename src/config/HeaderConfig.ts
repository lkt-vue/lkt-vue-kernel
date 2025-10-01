import {HeaderTag} from "../enums/HeaderTag.ts";
import {IconConfig} from "./IconConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {PolymorphicElementConfig} from "./PolymorphicElementConfig.ts";

export interface HeaderConfig {
    tag?: HeaderTag
    class?: string
    text?: string
    icon?: string|IconConfig

    topStartButtons?: Array<ButtonConfig>
    topStartContent?: Array<PolymorphicElementConfig>
    topEndButtons?: Array<ButtonConfig>
    topEndContent?: Array<PolymorphicElementConfig>
    bottomButtons?: Array<ButtonConfig>
}