import {TableType} from "../enums/TableType.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {ValidTablePermission} from "../types/ValidTablePermission.ts";
import {HeaderConfig} from "./HeaderConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {ValidTableRowTypeValue} from "../types/ValidTableRowTypeValue.ts";
import {ValidDragConfig} from "../types/ValidDragConfig.ts";
import {ValidPaginatorConfig} from "../types/ValidPaginatorConfig.ts";
import {CarouselConfig} from "./CarouselConfig.ts";
import {ColumnConfig} from "./ColumnConfig.ts";
import {AccordionConfig} from "./AccordionConfig.ts";
import {Component} from "vue";
import {TableTypeSwitchButtonsConfig} from "./TableTypeSwitchButtonsConfig.ts";
import {CalendarConfig} from "./CalendarConfig.ts";
import {CalendarGroupsConfig} from "./CalendarGroupsConfig.ts";
import {FormConfig} from "./FormConfig.ts";

export interface TableConfig {

    // Data
    modelValue?: LktObject[]
    type?: TableType,
    columns?: Array<ColumnConfig>
    noResultsText?: string

    // Data visualization
    hideEmptyColumns?: boolean
    hideTableHeader?: boolean
    itemDisplayChecker?: Function
    customItemSlotName?: Function
    rowDisplayType?: ValidTableRowTypeValue
    slotItemVar?: string
    itemSlotComponent?: string | Function | Component
    itemSlotData?: LktObject | Function
    itemSlotEvents?: LktObject | Function

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
    paginator?: ValidPaginatorConfig

    // Carousel
    carousel?: CarouselConfig

    // Calendar
    calendar?: CalendarConfig
    calendarGroups?: CalendarGroupsConfig

    // Accordion
    accordion?: AccordionConfig

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
    hiddenSave?: boolean
    groupButton?: ButtonConfig|boolean
    requiredItemsForTopCreate?: number
    requiredItemsForBottomCreate?: number
    addNavigation?: boolean
    newValueGenerator?: Function

    // Content
    wrapContentTag?: string
    wrapContentClass?: string
    itemsContainerClass?: string
    itemContainerClass?: string|Function
    itemContainerStyle?: string|Function

    skipTableItemsContainer?: boolean

    // Deprecated props (use saveButton.disabled):
    createEnabledValidator?: Function

    // Switch between table types
    switchableTypes?: Array<TableType>
    switchableTypesButtons?: TableTypeSwitchButtonsConfig

    useItemSlot?: boolean | ((args: {item: LktObject, index: number}) => boolean)

    filtersForm?: FormConfig

    events?: {
        parseResults?: (data: LktObject[]) => void|undefined|LktObject[],
        viewChanged?: (view: TableType) => void
    }
}





