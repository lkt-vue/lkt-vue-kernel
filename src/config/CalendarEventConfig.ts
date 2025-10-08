import {LktObject} from "../interfaces/LktObject.ts";
import {DotConfig} from "./DotConfig.ts";

export interface CalendarEventConfig {
    date: Date,
    data?: LktObject
    dot?: DotConfig
}