import {CounterType} from "../enums/CounterType.ts";
import {ProgressConfig} from "./ProgressConfig.ts";
import {CounterView} from "../enums/CounterView.ts";
import {CounterEvents} from "./events/CounterEvents.ts";

export interface CounterConfig {
    type?: CounterType
    from?: Date|number
    to?: Date|number
    step?: number
    timeout?: number
    dateFormat?: string
    seconds?: number
    view?: CounterView
    progress?: ProgressConfig
    events?: CounterEvents
}