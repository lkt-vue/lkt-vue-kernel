import { VueElement } from 'vue';
import { RouteLocationRaw } from 'vue-router';

interface LktObject {
    [key: string | number]: any;
}

declare enum FieldType {
    Text = "text",
    Email = "email",
    Tel = "tel",
    Password = "password",
    Search = "search",
    Number = "number",
    Color = "color",
    Range = "range",
    Textarea = "textarea",
    Html = "html",
    Date = "date",
    File = "file",
    Image = "image",
    Select = "select",
    Check = "check",
    Switch = "switch",
    Calc = "calc",
    Card = "card",
    Elements = "elements"
}

type ValidOptionValue = string | number | undefined;

interface OptionConfig {
    value: ValidOptionValue;
    label: string;
    data?: LktObject;
    disabled?: boolean;
    group?: string;
    icon?: string;
    modal?: string | Function;
}

declare class LktItem implements LktObject {
    static lktAllowUndefinedProps: string[];
    static lktExcludedProps: string[];
    static lktDateProps: string[];
    static lktStrictItem: boolean;
    static lktDefaultValues: (keyof LktObject)[];
    constructor(data?: LktObject);
    feed(data?: LktObject, target?: this): void;
    assignProp(key: string, value: any): void;
}

type ValidModalName = string | Function | undefined;

declare class Option extends LktItem implements OptionConfig {
    value: ValidOptionValue;
    label: string;
    data: LktObject;
    disabled: boolean;
    group: string;
    icon: string;
    modal: ValidModalName;
    constructor(data?: Partial<OptionConfig>);
}

type ValidFieldValue = string | number | boolean | LktObject | Option[];

declare enum MultipleOptionsDisplay {
    List = "list",
    Inline = "inline",
    Count = "count"
}

type ValidTabIndex = string | number | undefined;

declare enum FieldAutoValidationTrigger {
    None = "",
    Focus = "focus",
    Blur = "blur",
    Always = "always"
}

type ValidFieldMinMax = number | string | undefined;

interface FieldConfig {
    modelValue?: ValidFieldValue;
    type?: FieldType;
    valid?: boolean | undefined;
    placeholder?: string;
    searchPlaceholder?: string;
    label?: string;
    labelIcon?: string;
    labelIconAtEnd?: boolean;
    name?: string;
    autocomplete?: boolean;
    disabled?: boolean | Function;
    readonly?: boolean;
    readMode?: boolean;
    allowReadModeSwitch?: boolean;
    tabindex?: ValidTabIndex;
    mandatory?: boolean;
    showPassword?: boolean;
    canClear?: boolean;
    canUndo?: boolean;
    canI18n?: boolean;
    canStep?: boolean;
    canTag?: boolean;
    mandatoryMessage?: string;
    infoMessage?: string;
    errorMessage?: string;
    min?: ValidFieldMinMax;
    max?: ValidFieldMinMax;
    step?: number | string;
    enableAutoNumberFix?: boolean;
    emptyValueSlot?: string;
    optionSlot?: string | undefined;
    valueSlot?: string | undefined;
    editSlot?: string | undefined;
    slotData?: LktObject;
    resource?: string;
    resourceData?: LktObject;
    validationResource?: string;
    validationResourceData?: LktObject;
    autoValidation?: boolean;
    autoValidationType?: FieldAutoValidationTrigger;
    validationStack?: string;
    minNumbers?: ValidFieldMinMax;
    maxNumbers?: ValidFieldMinMax;
    minChars?: ValidFieldMinMax;
    maxChars?: ValidFieldMinMax;
    minUpperChars?: ValidFieldMinMax;
    maxUpperChars?: ValidFieldMinMax;
    minLowerChars?: ValidFieldMinMax;
    maxLowerChars?: ValidFieldMinMax;
    minSpecialChars?: ValidFieldMinMax;
    maxSpecialChars?: ValidFieldMinMax;
    checkEqualTo?: ValidFieldMinMax;
    featuredButton?: string;
    infoButtonEllipsis?: boolean;
    fileName?: string;
    customButtonText?: string;
    customButtonClass?: string;
    options?: string | Option[];
    multiple?: boolean;
    multipleDisplay?: MultipleOptionsDisplay;
    multipleDisplayEdition?: MultipleOptionsDisplay;
    searchable?: boolean;
    autoloadOptionsResource?: boolean | 'feed';
    optionsDownload?: string | Function;
    optionsModal?: string | Function;
    optionsModalData?: LktObject | Function;
    optionsIcon?: string | Function;
    optionsLabelFormatter?: Function | undefined;
    optionsResource?: string;
    optionsResourceData?: LktObject;
    icon?: string | Function;
    download?: string | Function;
    modal?: string | Function;
    modalKey?: string | number | Function;
    modalData?: LktObject;
    itemType?: string;
    optionValueType?: string;
    prop?: LktObject;
}

type EmptyModalKey = '_';

type ValidModalKey = string | Function | EmptyModalKey;

type BeforeCloseModalData = {
    modalName: ValidModalKey;
    modalKey: ValidModalKey;
    item?: LktObject;
};

type ValidBeforeCloseModal = Function | undefined | ((data: BeforeCloseModalData) => void);

declare enum ModalType {
    Modal = "modal",
    Confirm = "confirm"
}

declare const enum ButtonType {
    Button = "button",// Default
    Submit = "submit",// Form submit
    Reset = "reset",
    Anchor = "anchor",// Turns on anchor mode
    Content = "content",// No click event
    Switch = "switch",// Has a visible boolean state
    HiddenSwitch = "hidden-switch",// Has a hidden boolean state
    Split = "split",// Split button, content always generated
    SplitLazy = "split-lazy",// Split button, contents generated after first open
    SplitEver = "split-ever",// Split button, contents generated each time it's clicked
    Tooltip = "tooltip",// Tooltip button, content always generated
    TooltipLazy = "tooltip-lazy",// Tooltip button, contents generated after first open
    TooltipEver = "tooltip-ever"
}

declare enum ToggleMode {
    Lazy = "lazy",
    Ever = "ever"
}

declare enum AnchorType {
    Href = "href",// Vanilla JS+HTML anchor
    RouterLink = "router-link",// For vue-router integration
    RouterLinkBack = "router-link-back",// For vue-router back navigation
    Mail = "mail",// Triggers OS mail integration
    Tel = "tel",// Triggers OS phone integration
    Tab = "tab",// New tab, similar to target="_blank"
    Download = "download",// Download link
    Action = "action",// Performs an action, without route changes
    Legacy = ""
}

interface AnchorConfig {
    type?: AnchorType;
    to?: RouteLocationRaw | string;
    class?: string;
    isActive?: boolean;
    downloadFileName?: string;
    disabled?: boolean;
    onClick?: Function | undefined;
    confirmModal?: ValidModalName;
    confirmModalKey?: ValidModalKey;
    confirmData?: ModalConfig;
    imposter?: boolean;
    external?: boolean;
}

declare class Anchor extends LktItem implements AnchorConfig {
    static lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof AnchorConfig)[];
    type: AnchorType;
    to?: RouteLocationRaw | string;
    class: string;
    isActive: boolean;
    downloadFileName: string;
    disabled: boolean;
    onClick: Function | undefined;
    confirmModal: ValidModalName;
    confirmModalKey: ValidModalKey;
    confirmData: LktObject;
    imposter: boolean;
    external: boolean;
    getHref(): string;
    constructor(data?: Partial<AnchorConfig>);
}

declare enum TooltipPositionEngine {
    Fixed = "fixed",
    Absolute = "absolute"
}

interface ButtonConfig {
    type?: ButtonType;
    checked?: boolean;
    openTooltip?: boolean;
    name?: string;
    text?: string | number;
    icon?: string;
    class?: string;
    containerClass?: string;
    palette?: string;
    value?: string;
    disabled?: boolean;
    loading?: boolean;
    wrapContent?: boolean;
    anchor?: AnchorConfig | Anchor;
    resource?: string;
    resourceData?: LktObject;
    modal?: ValidModalName;
    modalKey?: ValidModalKey;
    modalData?: Partial<ModalConfig>;
    confirmModal?: ValidModalName;
    confirmModalKey?: ValidModalKey;
    confirmData?: Partial<ModalConfig>;
    iconDot?: boolean | string | number;
    iconEnd?: string;
    img?: string;
    split?: boolean | ToggleMode;
    splitIcon?: string;
    tooltip?: boolean | ToggleMode;
    tooltipEngine?: TooltipPositionEngine;
    showTooltipOnHover?: boolean;
    showTooltipOnHoverDelay?: number;
    hideTooltipOnLeave?: boolean;
    tooltipWindowMargin?: number;
    tooltipReferrerMargin?: number;
    tooltipClass?: string;
    tooltipLocationY?: string;
    tooltipLocationX?: string;
    splitClass?: string;
    clickRef?: Element | VueElement;
    tabindex?: ValidTabIndex;
    prop?: LktObject;
    onClick?: Function | undefined;
}

interface ModalConfig extends LktObject {
    type?: ModalType;
    size?: string;
    preTitle?: string;
    preTitleIcon?: string;
    title?: string;
    closeIcon?: string;
    closeConfirm?: ValidModalName;
    closeConfirmKey?: ValidModalKey;
    showClose?: boolean;
    disabledClose?: boolean;
    disabledVeilClick?: boolean;
    hiddenFooter?: boolean;
    modalName?: ValidModalName;
    modalKey?: ValidModalKey;
    zIndex?: number;
    beforeClose?: ValidBeforeCloseModal;
    item?: LktObject;
    confirmButton?: Partial<ButtonConfig>;
    cancelButton?: Partial<ButtonConfig>;
}

declare enum TooltipLocationY {
    Top = "top",
    Bottom = "bottom",
    Center = "center",
    ReferrerCenter = "referrer-center"
}

declare enum TooltipLocationX {
    Left = "left",
    Right = "right",
    Center = "center",
    LeftCorner = "left-corner",
    RightCorner = "right-corner"
}

interface TooltipConfig {
    modelValue?: boolean;
    alwaysOpen?: boolean;
    class?: string;
    text?: string;
    icon?: string;
    iconAtEnd?: boolean;
    engine?: TooltipPositionEngine;
    referrerMargin?: number | string;
    windowMargin?: number | string;
    referrerWidth?: boolean;
    referrer?: HTMLElement | undefined;
    locationY?: TooltipLocationY;
    locationX?: TooltipLocationX;
}

type ValidDrag = boolean | ((item: LktObject) => boolean);

interface DragConfig {
    isDraggable?: ValidDrag;
    isValid?: ValidDrag;
    canRender?: boolean | Function;
    dragKey?: string;
}

declare enum ColumnType {
    None = "",
    Field = "field",
    Button = "button",
    Anchor = "anchor",
    Text = "text",
    Number = "number",
    Check = "check",
    Switch = "switch",
    Select = "select",
    Email = "email",
    Tel = "tel",
    File = "file",
    Link = "link",
    Action = "action",
    Integer = "int",
    Float = "float"
}

type ValidColSpan = Function | boolean | number | undefined;

declare class SafeString {
    private readonly value;
    constructor(input: ValidSafeStringValue);
    getValue(...args: any[]): string;
}

type ValidSafeStringValue = string | ((...args: any[]) => string) | undefined | SafeString;

declare class Field extends LktItem implements FieldConfig {
    modelValue: ValidFieldValue;
    type: FieldType;
    valid: boolean | undefined;
    placeholder: string;
    searchPlaceholder: string;
    label: string;
    labelIcon: string;
    labelIconAtEnd: boolean;
    name: string;
    autocomplete: boolean;
    disabled: boolean;
    readonly: boolean;
    readMode: boolean;
    allowReadModeSwitch: boolean;
    tabindex: ValidTabIndex;
    mandatory: boolean;
    showPassword: boolean;
    canClear: boolean;
    canUndo: boolean;
    canI18n: boolean;
    canStep: boolean;
    mandatoryMessage: string;
    infoMessage: string;
    errorMessage: string;
    min: ValidFieldMinMax;
    max: ValidFieldMinMax;
    step: number | string;
    enableAutoNumberFix: boolean;
    emptyValueSlot: string;
    optionSlot: undefined;
    valueSlot: undefined;
    editSlot: undefined;
    slotData: LktObject;
    resource: string;
    resourceData: LktObject;
    validationResource: string;
    validationResourceData: LktObject;
    autoValidation: boolean;
    autoValidationType: FieldAutoValidationTrigger;
    validationStack: string;
    minNumbers: ValidFieldMinMax;
    maxNumbers: ValidFieldMinMax;
    minChars: ValidFieldMinMax;
    maxChars: ValidFieldMinMax;
    minUpperChars: ValidFieldMinMax;
    maxUpperChars: ValidFieldMinMax;
    minLowerChars: ValidFieldMinMax;
    maxLowerChars: ValidFieldMinMax;
    minSpecialChars: ValidFieldMinMax;
    maxSpecialChars: ValidFieldMinMax;
    checkEqualTo: ValidFieldMinMax;
    featuredButton: string;
    infoButtonEllipsis: boolean;
    fileName: string;
    customButtonText: string;
    customButtonClass: string;
    options: string | Option[];
    multiple: boolean;
    multipleDisplay: MultipleOptionsDisplay;
    multipleDisplayEdition: MultipleOptionsDisplay;
    searchable: boolean;
    autoloadOptionsResource: boolean | 'feed';
    optionsDownload: string | Function;
    optionsModal: string | Function;
    optionsModalData: LktObject | Function;
    optionsIcon: string | Function;
    optionsLabelFormatter: undefined;
    optionsResource: string;
    optionsResourceData: LktObject;
    icon: string | Function;
    download: string | Function;
    modal: string | Function;
    modalKey: string | number | Function;
    modalData: LktObject;
    data: LktObject;
    constructor(data?: Partial<FieldConfig>);
}

declare class Button extends LktItem implements ButtonConfig {
    lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof ButtonConfig)[];
    type: ButtonType;
    name: string;
    palette: string;
    class: string;
    containerClass: string;
    value: string;
    disabled: boolean;
    loading: boolean;
    wrapContent: boolean;
    split: boolean;
    splitIcon: string;
    resource: string;
    resourceData: LktObject;
    modal: ValidModalName;
    modalKey: ValidModalKey;
    modalData: Partial<ModalConfig>;
    confirmModal: ValidModalName;
    confirmModalKey: ValidModalKey;
    confirmData: Partial<ModalConfig>;
    text: string;
    icon: string;
    iconDot: boolean;
    iconEnd: string;
    img: string;
    tooltip: boolean;
    showTooltipOnHoverDelay: number;
    tooltipWindowMargin: number;
    tooltipReferrerMargin: number;
    tooltipLocationY: string;
    tooltipLocationX: string;
    checked: boolean;
    clickRef?: Element | VueElement;
    openTooltip: boolean;
    tabindex: ValidTabIndex;
    anchor?: AnchorConfig | Anchor;
    tooltipEngine?: TooltipPositionEngine;
    showTooltipOnHover?: boolean;
    hideTooltipOnLeave?: boolean;
    tooltipClass?: string;
    splitClass?: string;
    prop?: LktObject;
    onClick?: Function | undefined;
    constructor(data?: Partial<ButtonConfig>);
}

interface ColumnConfig {
    type: ColumnType;
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    editable: boolean;
    formatter?: Function | undefined;
    checkEmpty?: Function | undefined;
    colspan?: ValidColSpan;
    preferSlot?: Function | boolean;
    isForRowKey?: boolean;
    extractTitleFromColumn?: string;
    slotData?: LktObject;
    field?: Field | FieldConfig | undefined;
    anchor?: Anchor | AnchorConfig | undefined;
    button?: Button | ButtonConfig | undefined;
    link?: ValidSafeStringValue | SafeString;
    action?: Function;
}

declare enum TableType {
    Table = "table",
    Item = "item",
    Ul = "ul",
    Ol = "ol"
}

declare class Column extends LktItem implements ColumnConfig {
    lktExcludedProps: string[];
    lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof ColumnConfig)[];
    type: ColumnType;
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    editable: boolean;
    formatter: Function | undefined;
    checkEmpty: Function | undefined;
    colspan: ValidColSpan;
    preferSlot: Function | boolean;
    isForRowKey: boolean;
    extractTitleFromColumn: string;
    slotData: LktObject;
    field: Field | FieldConfig | undefined;
    anchor: Anchor | AnchorConfig | undefined;
    button: Button | ButtonConfig | undefined;
    link: ValidSafeStringValue | SafeString | undefined;
    action?: Function;
    constructor(data?: Partial<ColumnConfig>);
    getHref(item: LktObject): string;
    doAction(item: LktObject): any;
}

declare enum TablePermission {
    Create = "create",
    Update = "update",// Save changes
    Edit = "edit",// Displays edit button
    Drop = "drop",// Displays drop button
    Sort = "sort",// Sort
    InlineEdit = "inline-edit",// Be able to edit columns inside the table
    InlineCreate = "inline-create",// Be able to append a new editable row (needs InlineEdit in order to be editable)
    ModalCreate = "modal-create",// Be able to append a new row after save a modal form
    InlineCreateEver = "inline-create-ever"
}

type ValidTablePermission = TablePermission | string;

interface HeaderConfig {
    tag?: string;
    class?: string;
    text?: string;
    icon?: string;
}

declare enum TableRowType {
    Auto = 0,
    PreferItem = 1,
    PreferCustomItem = 2,
    PreferColumns = 3
}

type ValidTableRowTypeValue = TableRowType | ((...args: any[]) => TableRowType) | undefined;

interface TableConfig {
    modelValue: LktObject[];
    type?: TableType;
    columns: Column[];
    resource?: string;
    noResultsText?: string;
    filters?: LktObject[];
    hideEmptyColumns?: boolean;
    itemDisplayChecker?: Function;
    rowDisplayType?: ValidTableRowTypeValue;
    loading?: boolean;
    page?: number;
    perms?: ValidTablePermission[];
    editMode?: boolean;
    dataStateConfig?: LktObject;
    sortable?: boolean;
    sorter?: Function;
    initialSorting?: boolean;
    draggableChecker?: Function;
    checkValidDrag?: Function;
    renderDrag?: boolean | Function;
    disabledDrag?: boolean | Function;
    draggableItemKey?: string;
    header?: HeaderConfig;
    title?: string;
    titleTag?: string;
    titleIcon?: string;
    headerClass?: string;
    saveButton?: ButtonConfig;
    createButton?: ButtonConfig;
    dropButton?: ButtonConfig;
    wrapContentTag?: string;
    wrapContentClass?: string;
    itemsContainerClass?: string;
    hiddenSave?: boolean;
    saveDisabled?: boolean;
    saveValidator?: Function;
    saveConfirm?: string;
    confirmData?: LktObject;
    saveResource?: string;
    saveResourceData?: LktObject;
    saveTooltipEngine?: string;
    splitSave?: boolean;
    saveText?: string;
    createText?: string;
    createIcon?: string;
    createRoute?: string;
    dropText?: string;
    dropIcon?: string;
    editText?: string;
    editIcon?: string;
    editLink?: string;
    editModeText?: string;
    switchEditionEnabled?: boolean;
    createDisabled?: boolean;
    dropConfirm?: string;
    dropResource?: string;
    addNavigation?: boolean;
    createEnabledValidator?: Function;
    newValueGenerator?: Function;
    requiredItemsForTopCreate?: number;
    requiredItemsForBottomCreate?: number;
    slotItemVar?: string;
    modal?: string;
    modalData?: LktObject;
    itemMode?: boolean;
}

declare class LktStrictItem extends LktItem {
    lktStrictItem: boolean;
}

declare class Tooltip extends LktItem implements TooltipConfig {
    static lktDefaultValues: (keyof TooltipConfig)[];
    modelValue: boolean;
    alwaysOpen: boolean;
    class: string;
    text: string;
    icon: string;
    iconAtEnd: boolean;
    engine: TooltipPositionEngine;
    referrerWidth: boolean;
    referrerMargin: number | string;
    windowMargin: number | string;
    referrer: HTMLElement | undefined;
    locationY: TooltipLocationY;
    locationX: TooltipLocationX;
    constructor(data?: Partial<TooltipConfig>);
}

declare class Modal extends LktItem implements ModalConfig {
    static lktDefaultValues: (keyof ModalConfig)[];
    size: string;
    preTitle: string;
    preTitleIcon: string;
    title: string;
    closeIcon: string;
    closeConfirm: ValidModalName;
    closeConfirmKey: ValidModalKey;
    showClose: boolean;
    disabledClose: boolean;
    disabledVeilClick: boolean;
    hiddenFooter: boolean;
    modalName: ValidModalName;
    modalKey: ValidModalKey;
    zIndex: number;
    beforeClose: ValidBeforeCloseModal;
    item: LktObject;
    confirmButton?: Partial<ButtonConfig>;
    cancelButton?: Partial<ButtonConfig>;
    constructor(data?: Partial<ModalConfig>);
}

declare class Table extends LktItem implements TableConfig {
    static lktDefaultValues: (keyof TableConfig)[];
    modelValue: LktObject[];
    type?: TableType;
    columns: Column[];
    resource?: string;
    noResultsText?: string;
    filters?: LktObject[];
    hideEmptyColumns?: boolean;
    itemDisplayChecker?: Function;
    rowDisplayType?: ValidTableRowTypeValue;
    loading?: boolean;
    page?: number;
    perms?: ValidTablePermission[];
    editMode?: boolean;
    dataStateConfig?: LktObject;
    sortable?: boolean;
    sorter?: Function;
    initialSorting?: boolean;
    draggableChecker?: Function;
    checkValidDrag?: Function;
    renderDrag?: boolean | Function;
    disabledDrag?: boolean | Function;
    draggableItemKey?: string;
    header?: HeaderConfig;
    title?: string;
    titleTag?: string;
    titleIcon?: string;
    headerClass?: string;
    saveButton?: ButtonConfig;
    createButton?: ButtonConfig;
    dropButton?: ButtonConfig;
    wrapContentTag?: string;
    wrapContentClass?: string;
    itemsContainerClass?: string;
    hiddenSave?: boolean;
    saveDisabled?: boolean;
    saveValidator?: Function;
    saveConfirm?: string;
    confirmData?: LktObject;
    saveResource?: string;
    saveResourceData?: LktObject;
    saveTooltipEngine?: string;
    splitSave?: boolean;
    saveText?: string;
    createText?: string;
    createIcon?: string;
    createRoute?: string;
    dropText?: string;
    dropIcon?: string;
    editText?: string;
    editIcon?: string;
    editLink?: string;
    editModeText?: string;
    switchEditionEnabled?: boolean;
    createDisabled?: boolean;
    dropConfirm?: string;
    dropResource?: string;
    addNavigation?: boolean;
    createEnabledValidator?: Function;
    newValueGenerator?: Function;
    requiredItemsForTopCreate?: number;
    requiredItemsForBottomCreate?: number;
    slotItemVar?: string;
    modal?: string;
    modalData?: LktObject;
    constructor(data?: Partial<TableConfig>);
}

declare enum SortDirection {
    Asc = "asc",
    Desc = "desc"
}

type ScanPropTarget = string | number | undefined | Function;

type ValidScanPropTarget = ScanPropTarget | ((...args: any[]) => ScanPropTarget);

declare const extractPropValue: (needle: ValidScanPropTarget, haystack: LktObject) => ValidScanPropTarget;

/**
 * Export common interfaces
 */

declare function getDefaultValues<T>(cls: {
    new (): T;
    lktDefaultValues: (keyof T)[];
}): Partial<T>;

export { Anchor, type AnchorConfig, AnchorType, type BeforeCloseModalData, Button, type ButtonConfig, ButtonType, Column, type ColumnConfig, ColumnType, type DragConfig, type EmptyModalKey, Field, FieldAutoValidationTrigger, type FieldConfig, FieldType, LktItem, type LktObject, LktStrictItem, Modal, type ModalConfig, ModalType, MultipleOptionsDisplay, Option, type OptionConfig, SafeString, type ScanPropTarget, SortDirection, Table, type TableConfig, TablePermission, TableRowType, TableType, ToggleMode, Tooltip, type TooltipConfig, TooltipLocationX, TooltipLocationY, TooltipPositionEngine, type ValidBeforeCloseModal, type ValidColSpan, type ValidFieldMinMax, type ValidFieldValue, type ValidModalKey, type ValidModalName, type ValidOptionValue, type ValidSafeStringValue, type ValidScanPropTarget, type ValidTabIndex, type ValidTablePermission, type ValidTableRowTypeValue, extractPropValue, getDefaultValues };
