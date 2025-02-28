import {ValidTextValue} from "../types/ValidTextValue.ts";
import {IconType} from "../enums/IconType.ts";

export interface IconConfig {
    icon?: ValidTextValue
    text?: ValidTextValue
    class?: ValidTextValue
    pack?: ValidTextValue
    type?: IconType

    // Event management
    onClick?: Function|undefined
}