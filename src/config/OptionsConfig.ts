import {LktObject} from "../interfaces/LktObject.ts";

export interface OptionsConfig {
    autoloadResource?: boolean | 'feed'
    download?: string | Function
    modal?: string | Function
    modalData?: LktObject | Function
    text?: string | Function
    icon?: string | Function
    class?: string | Function
    labelFormatter?: Function|undefined
    resource?: string
    resourceData?: LktObject
}