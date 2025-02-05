import {AnchorType} from "../enums/AnchorType.ts";
import {RouteLocationRaw} from "vue-router";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";
import {ModalConfig} from "./ModalConfig.ts";

export interface AnchorConfig {
    type?: AnchorType
    to?: RouteLocationRaw | string
    class?: string
    isActive?: boolean
    downloadFileName?: string
    disabled?: boolean
    onClick?: Function | undefined
    confirmModal?: ValidModalName
    confirmModalKey?: ValidModalKey
    confirmData?: ModalConfig
    imposter?: boolean
}