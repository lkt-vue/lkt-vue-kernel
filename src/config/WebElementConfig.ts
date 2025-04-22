import {WebElementType} from "../enums/WebElementType.ts";
import {WebElementPropsConfig} from "./WebElementPropsConfig.ts";
import {WebElementLayoutConfig} from "./WebElementLayoutConfig.ts";
import {WebElementConfiguration} from "./WebElementConfiguration.ts";

export interface WebElementConfig {
    id?: number|string|undefined,
    type: WebElementType
    component?: string
    props: WebElementPropsConfig
    children?: WebElementConfig[]
    layout: WebElementLayoutConfig
    config: WebElementConfiguration
    subElements: WebElementConfig[]
}