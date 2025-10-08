import {CalendarNavBarElements} from "../enums/CalendarNavBarElements.ts";
import {CalendarNavBarConfig} from "./CalendarNavBarConfig.ts";

export interface CalendarNavigationConfig {
    minDate?: Date
    maxDate?: Date

    navBar?: Array<CalendarNavBarElements>
    navBarConfig?: CalendarNavBarConfig

    hidePrevPreview?: boolean
    hideNextPreview?: boolean
}