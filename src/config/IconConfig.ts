import {ValidTextValue} from "../types/ValidTextValue.ts";
import {IconType} from "../enums/IconType.ts";
import {EventsConfig} from "./EventsConfig.ts";
import {IconPosition} from "../enums/IconPosition.ts";
import {ValidIconDot} from "../types/ValidIconDot.ts";

export interface IconConfig {
    icon?: ValidTextValue | (() => string)
    iconText?: ValidTextValue | (() => string)
    text?: ValidTextValue
    class?: ValidTextValue
    type?: IconType

    // Dot config
    dot?: ValidIconDot

    // Positioning (mostly used by components using this element)
    position?: IconPosition

    // Event management
    events?: EventsConfig|undefined
}