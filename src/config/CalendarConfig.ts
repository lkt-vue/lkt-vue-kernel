import {CalendarItemConfig} from "./CalendarItemConfig.ts";
import {CalendarDisabledConfig} from "./CalendarDisabledConfig.ts";
import {CalendarNavigationConfig} from "./CalendarNavigationConfig.ts";

export interface CalendarConfig {
    modelValue?: Date | undefined
    items?: Array<CalendarItemConfig>
    disabled?: boolean | CalendarDisabledConfig
    navigation?: CalendarNavigationConfig
    events?: {
        dayPicked?: ((args: {
            pickedDate: Date,
            items: Array<CalendarItemConfig>
        }) => void)
        visibleMonthChanged?: ((args: {
            visibleDate: Date
        }) => void)
    }
}