import {LktObject} from "../interfaces/LktObject.ts";
import {PaginatorType} from "../enums/PaginatorType.ts";
import {ClickEventArgs} from "../arguments/ClickEventArgs.ts";

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
    events?: {
        httpStart?: undefined | Function,
        httpEnd?: (data: ClickEventArgs) => void|undefined,
        parseResults?: (data: LktObject[]) => void|undefined,
    }
}