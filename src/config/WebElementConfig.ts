import {WebElementType} from "../enums/WebElementType.ts";
import {FieldElementPropsConfig} from "./FieldElementPropsConfig.ts";

export interface WebElementConfig {
    id: number,
    type: WebElementType|string
    component?: string
    props: FieldElementPropsConfig
    children?: WebElementConfig[]
    config: {
        hasHeader?: boolean
        hasIcon?: boolean
    },
    layout?: {
        type?: 'grid',
        amountOfItems?: [],
    }
}