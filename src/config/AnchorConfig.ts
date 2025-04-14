import {AnchorType} from "../enums/AnchorType.ts";
import {RouteLocationRaw} from "vue-router";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";
import {ModalConfig} from "./ModalConfig.ts";
import {EventsConfig} from "./EventsConfig.ts";
import {ValidTextValue} from "../types/ValidTextValue.ts";
import {IconConfig} from "./IconConfig.ts";

export interface AnchorConfig {
    type?: AnchorType
    to?: RouteLocationRaw | string
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

    // Deprecated:
    onClick?: Function | undefined
}