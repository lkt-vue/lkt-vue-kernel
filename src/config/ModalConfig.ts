import {LktObject} from "../interfaces/LktObject.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ValidBeforeCloseModal} from "../types/ValidBeforeCloseModal.ts";
import {ModalType} from "../enums/ModalType.ts";
import {ButtonConfig} from "./ButtonConfig.ts";

export interface ModalConfig extends LktObject {
    type?: ModalType
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
    beforeClose?: ValidBeforeCloseModal
    item?: LktObject
    confirmButton?: Partial<ButtonConfig>
    cancelButton?: Partial<ButtonConfig>


    // hiddenButtons?: boolean // Equals to hidden footer
    // onConfirm?: Function|undefined
    // cancelText: string
    // confirmText: string
    // cancelPalette: string
    // confirmPalette: string
}