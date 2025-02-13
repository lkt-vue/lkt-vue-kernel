import {LktObject} from "../interfaces/LktObject.ts";
import {ModalCallbackAction} from "../enums/ModalCallbackAction.ts";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";

export interface ModalCallbackConfig {
    modalName: ValidModalName
    modalKey?: ValidModalKey
    action: ModalCallbackAction
    method?: string
    args?: LktObject
}