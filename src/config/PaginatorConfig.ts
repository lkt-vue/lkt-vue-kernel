import {LktObject} from "../interfaces/LktObject.ts";
import {PaginatorType} from "../enums/PaginatorType.ts";
import {PaginatorEvents} from "./events/PaginatorEvents.ts";

export interface PaginatorConfig {
    type?: PaginatorType
    modelValue?: number
    class?: string
    resource?: string
    resourceData?: LktObject
    readOnly?: boolean
    loading?: boolean
    dateKey?: string
    timelineOldestDate?: Date|undefined
    timelineNewestDate?: Date|undefined
    timelineVisibleDate?: Date|undefined
    events?: PaginatorEvents
}