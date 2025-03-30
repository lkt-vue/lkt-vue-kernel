import {FieldElementType} from "../enums/FieldElementType.ts";
import {FieldElementPropsConfig} from "./FieldElementPropsConfig.ts";

export interface FieldElementConfig {
    id: number,
    type: FieldElementType|string
    component?: string
    props: FieldElementPropsConfig
    children?: FieldElementConfig[]
    config: {
        hasHeader?: boolean
        hasIcon?: boolean
    },
    layout?: {
        type?: 'grid',
        amountOfItems?: [],
    }
}