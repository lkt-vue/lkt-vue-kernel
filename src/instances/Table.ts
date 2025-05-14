import {LktItem} from "./LktItem.ts";
import {TableConfig} from "../config/TableConfig.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {TableType} from "../enums/TableType.ts";
import {ValidTablePermission} from "../types/ValidTablePermission.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {ValidTableRowTypeValue} from "../types/ValidTableRowTypeValue.ts";
import {TableRowType} from "../enums/TableRowType.ts";
import {ValidDragConfig} from "../types/ValidDragConfig.ts";
import {ValidPaginatorConfig} from "../types/ValidPaginatorConfig.ts";
import {CarouselConfig} from "../config/CarouselConfig.ts";
import {ColumnConfig} from "../config/ColumnConfig.ts";
import {AccordionConfig} from "../config/AccordionConfig.ts";

export class Table extends LktItem implements TableConfig {

    static lktDefaultValues: (keyof TableConfig)[] = [
        'modelValue',
        'type',
        'columns',
        'noResultsText',
        'hideEmptyColumns',
        'itemDisplayChecker',
        'loading',
        'page',
        'perms',
        'editMode',
        'dataStateConfig',
        'sortable',
        'sorter',
        'initialSorting',
        'drag',
        'paginator',
        'header',
        'title',
        'titleTag',
        'titleIcon',
        'headerClass',
        'editModeButton',
        'saveButton',
        'createButton',
        'groupButton',
        'wrapContentTag',
        'wrapContentClass',
        'itemsContainerClass',
        'itemContainerClass',
        'hiddenSave',
        'addNavigation',
        'createEnabledValidator',
        'newValueGenerator',
        'requiredItemsForTopCreate',
        'requiredItemsForBottomCreate',
        'slotItemVar',
        'carousel',
        'accordion',
        'hideTableHeader',
        'skipTableItemsContainer',
    ];

    // Data
    modelValue: LktObject[] = [];
    type?: TableType = TableType.Table;
    columns: ColumnConfig[] = [];
    noResultsText?: string = '';

    // Data visualization
    hideTableHeader?: boolean = false;
    hideEmptyColumns?: boolean = false;
    itemDisplayChecker?: Function = undefined;
    rowDisplayType?: ValidTableRowTypeValue = TableRowType.Auto;

    // State
    loading?: boolean = false;
    page?: number = 1;
    perms?: ValidTablePermission[] = [];
    editMode?: boolean = false;
    dataStateConfig?: LktObject = {};

    // Sort
    sortable?: boolean = false;
    sorter?: Function = undefined;
    initialSorting?: boolean = false;

    // Drag
    drag?: ValidDragConfig = undefined;

    // Pagination
    paginator?: ValidPaginatorConfig = undefined;
    carousel?: CarouselConfig = {};

    // Accordion
    accordion?: AccordionConfig = {};

    // New proposed prop: header
    header?: HeaderConfig

    // Replaces:
    title?: string = '';
    titleTag?: string = 'h2'
    titleIcon?: string = '';
    headerClass?: string = '';

    // Buttons
    editModeButton?: ButtonConfig = {};
    saveButton?: ButtonConfig = {};
    createButton?: ButtonConfig = {};
    hiddenSave?: boolean = false;
    groupButton?: ButtonConfig|boolean = false;


    wrapContentTag?: string = 'div';
    wrapContentClass?: string = '';
    itemsContainerClass?: string = '';
    itemContainerClass?: string|Function

    skipTableItemsContainer?: boolean

    addNavigation?: boolean = false;
    createEnabledValidator?: Function = undefined;
    newValueGenerator?: Function = undefined;
    requiredItemsForTopCreate?: number = 0;
    requiredItemsForBottomCreate?: number = 0;

    slotItemVar?: string = 'item';


    constructor(data: Partial<TableConfig> = {}) {
        super();
        this.feed(data);
    }
}