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
    noResultsText?: string

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
    editModeButton?: ButtonConfig
    saveButton?: ButtonConfig
    createButton?: ButtonConfig
    dropButton?: ButtonConfig
    editButton?: ButtonConfig
    hiddenSave?: boolean


    wrapContentTag?: string
    wrapContentClass?: string
    itemsContainerClass?: string
    addNavigation?: boolean
    newValueGenerator?: Function
    requiredItemsForTopCreate?: number
    requiredItemsForBottomCreate?: number

    slotItemVar?: string

    // Deprecated props:
    createEnabledValidator?: Function
}





