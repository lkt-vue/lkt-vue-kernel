import {IntervalConfig} from "./IntervalConfig.ts";

export interface CalendarDisabledConfig {
    dates?: Array<Date>
    intervals?: Array<IntervalConfig>
    days?: Array<number>
    daysOfWeek: Array<number>
}