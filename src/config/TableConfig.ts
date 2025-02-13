import {TableType} from "../enums/TableType.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {Column} from "../instances/Column.ts";
import {ValidTablePermission} from "../types/ValidTablePermission.ts";
import {HeaderConfig} from "./HeaderConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {ValidTableRowTypeValue} from "../types/ValidTableRowTypeValue.ts";

export interface TableConfig {

    // Data
    modelValue: LktObject[]
    type?: TableType,
    columns: Column[]
    resource?: string
    noResultsText?: string
    filters?: LktObject[]

    // Data visualization
    hideEmptyColumns?: boolean
    itemDisplayChecker?: Function
    rowDisplayType?: ValidTableRowTypeValue // Replaced with diferent 'type' values

    // State
    loading?: boolean
    page?: number
    perms?: ValidTablePermission[]
    editMode?: boolean
    dataStateConfig?: LktObject

    // Sort
    sortable?: boolean
    sorter?: Function
    initialSorting?: boolean

    // Drag (Old)
    draggableChecker?: Function
    checkValidDrag?: Function
    renderDrag?: boolean|Function
    disabledDrag?: boolean|Function
    draggableItemKey?: string

    // New proposed prop: header
    header?: HeaderConfig

    // Replaces:
    title?: string
    titleTag?: string
    titleIcon?: string
    headerClass?: string


    // New proposed prop: saveButton
    saveButton?: ButtonConfig
    createButton?: ButtonConfig
    dropButton?: ButtonConfig


    wrapContentTag?: string
    wrapContentClass?: string
    itemsContainerClass?: string
    hiddenSave?: boolean
    saveDisabled?: boolean
    saveValidator?: Function
    saveConfirm?: string
    confirmData?: LktObject
    saveResource?: string
    saveResourceData?: LktObject
    saveTooltipEngine?: string
    splitSave?: boolean
    saveText?: string
    createText?: string
    createIcon?: string
    createRoute?: string
    dropText?: string
    dropIcon?: string
    editText?: string
    editIcon?: string
    editLink?: string
    editModeText?: string
    switchEditionEnabled?: boolean
    createDisabled?: boolean
    dropConfirm?: string
    dropResource?: string
    addNavigation?: boolean
    createEnabledValidator?: Function
    newValueGenerator?: Function
    requiredItemsForTopCreate?: number
    requiredItemsForBottomCreate?: number

    slotItemVar?: string
    modal?: string
    modalData?: LktObject


    // Old and deprecated props (to be removed)
    itemMode?: boolean // Replaced with diferent 'type' values
}





