import {ButtonConfig} from "./ButtonConfig.ts";
import {PolymorphicElementConfig} from "./PolymorphicElementConfig.ts";
import {ValidTabKey} from "../types/ValidTabKey.ts";
import {TabType} from "../enums/TabType.ts";

export interface TabConfig {
    key: ValidTabKey
    type?: TabType
    hash?: string
    class?: string
    containerClass?: string
    button: ButtonConfig
    content: Array<PolymorphicElementConfig>
}