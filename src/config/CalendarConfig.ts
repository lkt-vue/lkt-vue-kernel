import {CalendarItemConfig} from "./CalendarItemConfig.ts";
import {CalendarDisabledConfig} from "./CalendarDisabledConfig.ts";
import {CalendarNavigationConfig} from "./CalendarNavigationConfig.ts";
import {CalendarEvents} from "./events/CalendarEvents.ts";

export interface CalendarConfig {
    modelValue?: Date | undefined
    items?: Array<CalendarItemConfig>
    disabled?: boolean | CalendarDisabledConfig
    navigation?: CalendarNavigationConfig
    events?: CalendarEvents
}