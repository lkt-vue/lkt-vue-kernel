import {FieldElementType} from "../enums/FieldElementType.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export interface FieldElementConfig {
    id: number,
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
    },
    translations?: LktObject
}