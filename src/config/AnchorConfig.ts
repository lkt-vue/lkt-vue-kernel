import {AnchorType} from "../enums/AnchorType.ts";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";
import {ModalConfig} from "./ModalConfig.ts";
import {EventsConfig} from "./EventsConfig.ts";
import {ValidTextValue} from "../types/ValidTextValue.ts";
import {IconConfig} from "./IconConfig.ts";
import {ValidAnchorTo} from "../types/ValidAnchorTo.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export interface AnchorConfig {
    type?: AnchorType
    to?: ValidAnchorTo
    class?: string
    isActive?: boolean
    downloadFileName?: string
    disabled?: boolean
    confirmModal?: ValidModalName
    confirmModalKey?: ValidModalKey
    confirmData?: ModalConfig
    imposter?: boolean
    external?: boolean
    text?: ValidTextValue
    icon?: IconConfig|string

    // Events
    events?: EventsConfig|undefined

    // Extract data
    prop?: LktObject

    // Deprecated:
    onClick?: Function | undefined
}