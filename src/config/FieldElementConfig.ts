import {LktObject} from "../interfaces/LktObject.ts";
import {FieldElementType} from "../enums/FieldElementType.ts";

export interface FieldElementConfig {
    type: FieldElementType|string
    component?: string
    props?: Record<string, any>
    text?: string
    config?: LktObject
    children?: FieldElementConfig[],
    layout?: {
        type?: 'grid',
        amountOfItems?: [],
    }
}