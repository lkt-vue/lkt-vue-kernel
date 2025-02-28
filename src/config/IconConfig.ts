import {ValidTextValue} from "../types/ValidTextValue.ts";
import {IconType} from "../enums/IconType.ts";
import {EventsConfig} from "./EventsConfig.ts";

export interface IconConfig {
    icon?: ValidTextValue
    text?: ValidTextValue
    class?: ValidTextValue
    type?: IconType

    // Event management
    events?: EventsConfig|undefined
}