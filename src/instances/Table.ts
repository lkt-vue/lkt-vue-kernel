import {LktItem} from "./LktItem.ts";
import {TableConfig} from "../config/TableConfig.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {TableType} from "../enums/TableType.ts";
import {Column} from "./Column.ts";
import {ValidTablePermission} from "../types/ValidTablePermission.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {TooltipPositionEngine} from "../enums/TooltipPositionEngine.ts";

export class Table extends LktItem implements TableConfig {

    static lktDefaultValues: (keyof TableConfig)[] = [
        'modelValue',
        'type',
        'columns',
        'resource',
        'noResultsText',
        'filters',
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
        'draggableChecker',
        'checkValidDrag',
        'renderDrag',
        'disabledDrag',
        'draggableItemKey',
        'header',
        'title',
        'titleTag',
        'titleIcon',
        'headerClass',
        'saveButton',
        'createButton',
        'dropButton',
        'wrapContentTag',
        'wrapContentClass',
        'itemsContainerClass',
        'hiddenSave',
        'saveDisabled',
        'saveValidator',
        'saveConfirm',
        'confirmData',
        'saveResource',
        'saveResourceData',
        'saveTooltipEngine',
        'splitSave',
        'saveText',
        'createText',
        'createIcon',
        'createRoute',
        'dropText',
        'dropIcon',
        'editText',
        'editIcon',
        'editLink',
        'editModeText',
        'switchEditionEnabled',
        'createDisabled',
        'dropConfirm',
        'dropResource',
        'addNavigation',
        'createEnabledValidator',
        'newValueGenerator',
        'requiredItemsForTopCreate',
        'requiredItemsForBottomCreate',
        'slotItemVar',
        'modal',
        'modalData',
    ];

    // Data
    modelValue: LktObject[] = [];
    type?: TableType = TableType.Table;
    columns: Column[] = [];
    resource?: string = '';
    noResultsText?: string = '';
    filters?: LktObject[] = [];

    // Data visualization
    hideEmptyColumns?: boolean = false;
    itemDisplayChecker?: Function = undefined;

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

    // Drag (Old)
    draggableChecker?: Function
    checkValidDrag?: Function
    renderDrag?: boolean | Function
    disabledDrag?: boolean | Function
    draggableItemKey?: string

    // New proposed prop: header
    header?: HeaderConfig

    // Replaces:
    title?: string = '';
    titleTag?: string = 'h2'
    titleIcon?: string = '';
    headerClass?: string = '';


    // New proposed prop: saveButton
    saveButton?: ButtonConfig = {};
    createButton?: ButtonConfig = {};
    dropButton?: ButtonConfig = {};


    wrapContentTag?: string = 'div';
    wrapContentClass?: string = '';
    itemsContainerClass?: string = '';
    hiddenSave?: boolean = false;
    saveDisabled?: boolean = false;
    saveValidator?: Function = undefined;
    saveConfirm?: string = '';
    confirmData?: LktObject = {};
    saveResource?: string = '';
    saveResourceData?: LktObject = {};
    saveTooltipEngine?: string = TooltipPositionEngine.Absolute;
    splitSave?: boolean = false;
    saveText?: string = '';
    createText?: string = '';
    createIcon?: string = '';
    createRoute?: string = '';
    dropText?: string = '';
    dropIcon?: string = '';
    editText?: string = '';
    editIcon?: string = '';
    editLink?: string = '';
    editModeText?: string = '';
    switchEditionEnabled?: boolean = false;
    createDisabled?: boolean = false;
    dropConfirm?: string = '';
    dropResource?: string = '';
    addNavigation?: boolean = false;
    createEnabledValidator?: Function = undefined;
    newValueGenerator?: Function = undefined;
    requiredItemsForTopCreate?: number = 0;
    requiredItemsForBottomCreate?: number = 0;

    slotItemVar?: string = 'item';
    modal?: string = '';
    modalData?: LktObject = {};


    constructor(data: Partial<TableConfig> = {}) {
        super();
        this.feed(data);
    }
}