import {LktObject} from "../interfaces/LktObject.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";
import {ValidModalName} from "../types/ValidModalName.ts";

export interface ModalConfig extends LktObject {
    size?: string
    preTitle?: string
    preTitleIcon?: string
    title?: string
    closeIcon?: string
    closeConfirm?: ValidModalName
    closeConfirmKey?: ValidModalKey
    showClose?: boolean
    disabledClose?: boolean
    disabledVeilClick?: boolean
    hiddenFooter?: boolean
    modalName?: ValidModalName
    modalKey?: ValidModalKey
    zIndex?: number
    beforeClose?: Function | undefined
    item?: LktObject
}