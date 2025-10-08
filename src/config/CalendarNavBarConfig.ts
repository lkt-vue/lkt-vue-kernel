import {LktObject} from "../interfaces/LktObject.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {FieldConfig} from "./FieldConfig.ts";

export interface CalendarNavBarConfig extends LktObject {
    prev?: ButtonConfig
    next?: ButtonConfig
    datePicker?: FieldConfig
    goToCurrent?: ButtonConfig
}