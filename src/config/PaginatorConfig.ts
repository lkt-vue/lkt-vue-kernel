import {LktObject} from "../interfaces/LktObject.ts";
import {PaginatorType} from "../enums/PaginatorType.ts";

export interface PaginatorConfig {
    type?: PaginatorType
    modelValue?: number
    class?: string
    resource?: string
    resourceData?: LktObject
    readOnly?: boolean
    loading?: boolean
}