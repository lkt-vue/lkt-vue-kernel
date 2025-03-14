import {ValidTextValue} from "../types/ValidTextValue.ts";
import {IconType} from "../enums/IconType.ts";
import {EventsConfig} from "./EventsConfig.ts";
import {IconPosition} from "../enums/IconPosition.ts";

export interface IconConfig {
    icon?: ValidTextValue
    text?: ValidTextValue
    class?: ValidTextValue
    type?: IconType

    // Positioning (mostly used by components using this element)
    position?: IconPosition

    // Event management
    events?: EventsConfig|undefined
}