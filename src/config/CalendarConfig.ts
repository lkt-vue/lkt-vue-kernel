import {CalendarEventConfig} from "./CalendarEventConfig.ts";
import {CalendarDisabledConfig} from "./CalendarDisabledConfig.ts";
import {CalendarNavigationConfig} from "./CalendarNavigationConfig.ts";

export interface CalendarConfig {
    modelValue?: Date | undefined
    events?: Array<CalendarEventConfig>
    disabled?: boolean | CalendarDisabledConfig
    navigation?: CalendarNavigationConfig
}