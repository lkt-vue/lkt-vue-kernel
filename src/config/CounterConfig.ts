import {CounterType} from "../enums/CounterType.ts";

export interface CounterConfig {
    type?: CounterType
    from?: Date|number
    to?: Date|number
    step?: number
    timeout?: number
    dateFormat?: string
    seconds?: number
}