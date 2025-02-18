import {TableType} from "../enums/TableType.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {Column} from "../instances/Column.ts";
import {ValidTablePermission} from "../types/ValidTablePermission.ts";
import {HeaderConfig} from "./HeaderConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {ValidTableRowTypeValue} from "../types/ValidTableRowTypeValue.ts";
import {ValidDragConfig} from "../types/ValidDragConfig.ts";
import {ValidPaginatorConfig} from "../types/ValidPaginatorConfig.ts";

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
    rowDisplayType?: ValidTableRowTypeValue

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

    // Drag
    drag?: ValidDragConfig

    // Pagination
    paginator?: ValidPaginatorConfig;

    // New proposed prop: header
    header?: HeaderConfig

    // Replaces:
    title?: string
    titleTag?: string
    titleIcon?: string
    headerClass?: string

    // Buttons
    saveButton?: ButtonConfig
    createButton?: ButtonConfig
    dropButton?: ButtonConfig
    hiddenSave?: boolean


    wrapContentTag?: string
    wrapContentClass?: string
    itemsContainerClass?: string
    createText?: string
    createIcon?: string
    createRoute?: string
    createDisabled?: boolean
    createEnabledValidator?: Function
    dropText?: string
    dropIcon?: string
    dropConfirm?: string
    dropResource?: string
    editText?: string
    editIcon?: string
    editLink?: string
    editModeText?: string
    switchEditionEnabled?: boolean
    addNavigation?: boolean
    newValueGenerator?: Function
    requiredItemsForTopCreate?: number
    requiredItemsForBottomCreate?: number

    slotItemVar?: string
}





