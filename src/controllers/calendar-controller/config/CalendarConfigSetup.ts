import {DayOfWeek} from "../../../enums/DayOfWeek.ts";

export interface CalendarConfigSetup {
    firstDayOfWeek?: DayOfWeek
    days?: Array<string>
    months?: Array<string>
    smDays?: Array<string>
    smMonths?: Array<string>
}