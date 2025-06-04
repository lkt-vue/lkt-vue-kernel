import {LktObject} from "../interfaces/LktObject.ts";
import {HttpCallConfig} from "./HttpCallConfig.ts";
import {AnchorConfig} from "./AnchorConfig.ts";
import {TableConfig} from "./TableConfig.ts";

export interface OptionsConfig {
    autoloadResource?: boolean | 'feed'
    download?: string | Function
    anchor?: AnchorConfig | Function
    modal?: string | Function
    modalData?: LktObject | Function
    text?: string | Function
    icon?: string | Function
    class?: string | Function
    filter?: Function
    labelFormatter?: Function|undefined
    http?: HttpCallConfig
    autoPickFirstOptionIfEmpty?: boolean
    zeroMeansEmpty?: boolean
    table?: TableConfig
}