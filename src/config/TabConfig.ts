import {ButtonConfig} from "./ButtonConfig.ts";
import {PolymorphicElementConfig} from "./PolymorphicElementConfig.ts";
import {ValidTabKey} from "../types/ValidTabKey.ts";

export interface TabConfig {
    key: ValidTabKey
    hash?: string
    class?: string
    button: ButtonConfig
    content: Array<PolymorphicElementConfig>
}