import {CalendarItemConfig} from "../CalendarItemConfig.ts";

export interface CalendarEvents {
    dayPicked?: ((args: {
        pickedDate: Date,
        items: Array<CalendarItemConfig>
    }) => void)
    visibleMonthChanged?: ((args: {
        visibleDate: Date
    }) => void)
}