import {FieldElementType} from "../enums/FieldElementType.ts";

export interface FieldElementConfig {
    type: FieldElementType|string
    component?: string
    props?: Record<string, any>
    text?: string
    children?: FieldElementConfig[],
    config?: {
        hasHeader?: boolean
        hasIcon?: boolean
    },
    layout?: {
        type?: 'grid',
        amountOfItems?: [],
    }
}