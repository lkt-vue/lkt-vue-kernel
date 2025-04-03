import {WebElementType} from "../enums/WebElementType.ts";
import {WebElementPropsConfig} from "./WebElementPropsConfig.ts";
import {WebElementLayoutConfig} from "./WebElementLayoutConfig.ts";

export interface WebElementConfig {
    id?: number|string|undefined,
    type: WebElementType
    component?: string
    props: WebElementPropsConfig
    children?: WebElementConfig[]
    layout: WebElementLayoutConfig
    config: {
        hasHeader?: boolean
        hasIcon?: boolean
    }
}