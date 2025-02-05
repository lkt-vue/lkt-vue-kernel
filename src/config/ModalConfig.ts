import {LktObject} from "../interfaces/LktObject.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";

export interface ModalConfig extends LktObject {
    size?: string
    preTitle?: string
    preTitleIcon?: string
    title?: string
    closeIcon?: string
    closeConfirm?: string
    closeConfirmKey?: string
    showClose?: boolean
    disabledClose?: boolean
    disabledVeilClick?: boolean
    hiddenFooter?: boolean
    modalName?: string
    modalKey?: ValidModalKey
    zIndex?: number
    beforeClose?: Function
    item?: LktObject
}