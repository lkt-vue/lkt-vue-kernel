import {LktObject} from "../interfaces/LktObject.ts";
import {ModalConfig} from "./ModalConfig.ts";
import {ItemCrudView} from "../enums/ItemCrudView.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {ModalCallbackConfig} from "./ModalCallbackConfig.ts";
import {ItemCrudType} from "../enums/ItemCrudType.ts";
import {ItemCrudButtonNavPosition} from "../enums/ItemCrudButtonNavPosition.ts";
import {ItemCrudButtonNavVisibility} from "../enums/ItemCrudButtonNavVisibility.ts";
import {SaveConfig} from "./SaveConfig.ts";

export interface ItemCrudConfig {
    modelValue: LktObject
    editing: boolean

    // Global config
    type: ItemCrudType
    view: ItemCrudView

    // Buttons
    editButton: ButtonConfig // Not sure, should test
    dropButton: ButtonConfig
    createButton: ButtonConfig
    updateButton: ButtonConfig

    // Config if type === modal
    modalConfig: ModalConfig

    // Save config
    saveConfig: SaveConfig,


    title: string
    hiddenSave: boolean
    hiddenDrop: boolean
    hiddenButtons: boolean
    hideSwitchEdition: boolean
    readResource: string
    readData: LktObject
    saveValidator: Function
    beforeEmitUpdate: Function | undefined
    dataStateConfig: LktObject
    buttonNavPosition?: ItemCrudButtonNavPosition
    buttonNavVisibility?: ItemCrudButtonNavVisibility


    // Deprecated props (replaced with type based arch):
    insideModal: boolean

    // Deprecated props (replaced with button config objects)
    saveText: string
    saveIcon: string
    dropText: string
    dropIcon: string
    createResource: string
    updateResource: string
    dropResource: string
    createConfirm: string
    updateConfirm: string
    dropConfirm: string
    createConfirmData: LktObject
    updateConfirmData: LktObject
    dropConfirmData: LktObject
    createDisabled: boolean
    updateDisabled: boolean
    dropDisabled: boolean
    createData: LktObject
    updateData: LktObject
    dropData: LktObject

    // Possible deprecated props with button config
    editModeText: string

    // Posible deprecated with button onClick option:
    onCreate: Function | undefined
    onUpdate: Function | undefined

    // Posible deprecated with a better lkt-button implementation (native support)
    onCreateModalCallbacks: ModalCallbackConfig[]
    onUpdateModalCallbacks: ModalCallbackConfig[]
    onDropModalCallbacks: ModalCallbackConfig[]

    // Deprecated with type prop:
    isCreate: boolean

    // Deprecated props (replaced with modal config object)
    size: string
    preTitle: string
    showClose: boolean
    disabledClose: boolean
    disabledVeilClick: boolean
    modalName: string
    modalKey: string
    zIndex: number
    editedCloseConfirm: string
    editedCloseConfirmKey: string | number
    beforeClose: Function | undefined
}