import { VueElement, Component } from 'vue';
import { RouteLocationRaw } from 'vue-router';
import { DataState, DataStateConfig } from 'lkt-data-state';

interface LktObject {
    [key: string | number]: any;
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

type ValidModalName = string | Function | undefined;

type EmptyModalKey = '_';

type ValidModalKey = string | number | Function | EmptyModalKey;

type BeforeCloseModalData = {
    modalName: ValidModalKey;
    modalKey: ValidModalKey;
    item?: LktObject;
    itemCreated?: boolean;
};

type ValidBeforeCloseModal = Function | undefined | ((data: BeforeCloseModalData) => void);

declare enum ModalType {
    Modal = "modal",
    Confirm = "confirm"
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

type ValidTabIndex = string | number | undefined;

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

interface IsDisabledCheckerArgs {
    value?: any;
    dataState?: DataState;
}

type IsDisabledChecker = ((args?: IsDisabledCheckerArgs) => boolean);

type ValidIsDisabledValue = boolean | undefined | IsDisabledChecker;

declare enum ModalCallbackAction {
    Refresh = "refresh",
    Close = "close",
    ReOpen = "reOpen",
    Exec = "exec",
    Open = "open"
}

interface ModalCallbackConfig {
    modalName: ValidModalName;
    modalKey?: ValidModalKey;
    action: ModalCallbackAction;
    method?: string;
    args?: LktObject;
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

declare enum TooltipPositionEngine {
    Fixed = "fixed",
    Absolute = "absolute"
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

type ValidButtonDot = boolean | string | number;

type ValidTextValue = string | number | undefined;

interface ButtonConfig {
    type?: ButtonType;
    name?: string;
    value?: string;
    disabled?: ValidIsDisabledValue;
    openTooltip?: boolean;
    loading?: boolean;
    class?: string;
    containerClass?: string;
    wrapContent?: boolean;
    text?: ValidTextValue;
    icon?: string;
    iconEnd?: string;
    img?: string;
    checked?: boolean;
    textOn?: string | number | undefined;
    textOff?: string | number | undefined;
    iconOn?: string | number | undefined;
    iconOff?: string | number | undefined;
    iconEndOn?: string | number | undefined;
    iconEndOff?: string | number | undefined;
    dot?: ValidButtonDot;
    anchor?: AnchorConfig | Anchor;
    resource?: string;
    resourceData?: LktObject;
    modal?: ValidModalName;
    modalKey?: ValidModalKey;
    modalData?: Partial<ModalConfig>;
    confirmModal?: ValidModalName;
    confirmModalKey?: ValidModalKey;
    confirmData?: Partial<ModalConfig>;
    modalCallbacks?: Array<ModalCallbackConfig>;
    tooltip?: TooltipConfig;
    splitIcon?: string;
    showTooltipOnHover?: boolean;
    showTooltipOnHoverDelay?: number;
    hideTooltipOnLeave?: boolean;
    splitClass?: string;
    tabindex?: ValidTabIndex;
    prop?: LktObject;
    clickRef?: Element | VueElement;
    onClick?: Function | undefined;
}

declare class LktSettings {
    static debugEnabled: boolean;
    static debugMode(enabled?: boolean): typeof LktSettings;
    static defaultCreateErrorText: string;
    static defaultCreateErrorDetails: string;
    static defaultCreateErrorIcon: string;
    static setDefaultCreateError(config: {
        text?: string;
        details?: string;
        icon?: string;
    }): void;
    static defaultUpdateErrorText: string;
    static defaultUpdateErrorDetails: string;
    static defaultUpdateErrorIcon: string;
    static setDefaultUpdateError(config: {
        text?: string;
        details?: string;
        icon?: string;
    }): void;
    static defaultDropErrorText: string;
    static defaultDropErrorDetails: string;
    static defaultDropErrorIcon: string;
    static setDefaultDropError(config: {
        text?: string;
        details?: string;
        icon?: string;
    }): void;
    static defaultSaveButton: Partial<ButtonConfig>;
    static setDefaultSaveButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static defaultConfirmButton: Partial<ButtonConfig>;
    static setDefaultConfirmButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static defaultCancelButton: Partial<ButtonConfig>;
    static setDefaultCancelButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static defaultCreateButton: Partial<ButtonConfig>;
    static setDefaultCreateButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static defaultUpdateButton: Partial<ButtonConfig>;
    static setDefaultUpdateButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static defaultDropButton: Partial<ButtonConfig>;
    static setDefaultDropButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static defaultEditModeButton: Partial<ButtonConfig>;
    static setDefaultEditModeButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static defaultToggleButton: Partial<ButtonConfig>;
    static setDefaultToggleButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
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

declare const fieldTypesWithOptions: FieldType[];
declare const fieldTypesWithoutClear: FieldType[];
declare const fieldTypesWithoutUndo: FieldType[];
declare const textFieldTypesWithOptions: FieldType[];
declare const booleanFieldTypes: FieldType[];
declare const fieldsWithMultipleMode: FieldType[];
declare const textFieldTypes: FieldType[];

declare enum AccordionToggleMode {
    Transform = "transform",
    Height = "height",
    Display = "display"
}

declare enum AccordionType {
    Auto = "auto",// Default accordion flow
    Always = "always",// Always opened
    Lazy = "lazy",// Lazy content, only after fist open
    Ever = "ever"
}

interface AccordionConfig {
    modelValue?: boolean;
    type?: AccordionType;
    toggleMode?: AccordionToggleMode;
    actionButton?: ButtonConfig;
    toggleButton?: ButtonConfig;
    toggleOnClickIntro?: boolean;
    toggleTimeout?: number;
    title?: string;
    icon?: string;
    class?: string;
    contentClass?: string;
    iconRotation?: '90' | '180' | '-90' | '-180';
    minHeight?: number | undefined;
    iconAtEnd?: boolean;
    toggleIconAtEnd?: boolean;
}

declare enum ColumnType {
    None = "",
    Field = "field",
    Button = "button",
    Anchor = "anchor"
}

type ValidColSpan = Function | boolean | number | undefined;

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

declare class Option extends LktItem implements OptionConfig {
    value: ValidOptionValue;
    label: string;
    data?: LktObject;
    disabled?: boolean;
    group?: string;
    icon?: string;
    modal?: ValidModalName;
    constructor(data?: Partial<OptionConfig>);
}

type ValidFieldValue = string | number | boolean | LktObject | Option[];

declare enum MultipleOptionsDisplay {
    List = "list",
    Inline = "inline",
    Count = "count"
}

declare enum FieldAutoValidationTrigger {
    None = "",
    Focus = "focus",
    Blur = "blur",
    Always = "always"
}

type ValidFieldMinMax = number | string | undefined;

declare enum FieldValidationType {
    Auto = "auto",
    Remote = "remote"
}

interface FieldValidationConfig {
    type?: FieldValidationType;
    trigger?: FieldAutoValidationTrigger;
    stack?: string;
    resource?: string;
    resourceData?: LktObject;
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
}

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
    featuredButton?: string;
    infoButtonEllipsis?: boolean;
    fileName?: string;
    options?: string | Option[];
    multiple?: boolean;
    multipleDisplay?: MultipleOptionsDisplay;
    multipleDisplayEdition?: MultipleOptionsDisplay;
    searchable?: boolean;
    autoloadOptionsResource?: boolean | 'feed';
    optionsDownload?: string | Function;
    optionsModal?: string | Function;
    optionsModalData?: LktObject | Function;
    optionsText?: string | Function;
    optionsIcon?: string | Function;
    optionsClass?: string | Function;
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
    validation?: FieldValidationConfig;
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
    customButtonText?: string;
    customButtonClass?: string;
}

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
    canTag: boolean;
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
    optionsText: string | Function;
    optionsIcon: string | Function;
    optionsClass: string | Function;
    optionsLabelFormatter: undefined;
    optionsResource: string;
    optionsResourceData: LktObject;
    icon: string | Function;
    download: string | Function;
    modal: string | Function;
    modalKey: string | number | Function;
    modalData: LktObject;
    data: LktObject;
    validation: FieldValidationConfig;
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
    disabled: ValidIsDisabledValue;
    loading: boolean;
    wrapContent: boolean;
    splitIcon: string;
    resource: string;
    resourceData: LktObject;
    modal: ValidModalName;
    modalKey: ValidModalKey;
    modalData: Partial<ModalConfig>;
    confirmModal: ValidModalName;
    confirmModalKey: ValidModalKey;
    confirmData: Partial<ModalConfig>;
    modalCallbacks?: Array<ModalCallbackConfig>;
    text: ValidTextValue;
    textOn: string | number | undefined;
    textOff: string | number | undefined;
    iconOn: string | number | undefined;
    iconOff: string | number | undefined;
    iconEndOn: string | number | undefined;
    iconEndOff: string | number | undefined;
    icon: string;
    dot: ValidButtonDot;
    iconEnd: string;
    img: string;
    showTooltipOnHoverDelay: number;
    checked: boolean;
    clickRef?: Element | VueElement;
    openTooltip: boolean;
    tabindex: ValidTabIndex;
    anchor?: AnchorConfig | Anchor;
    showTooltipOnHover?: boolean;
    hideTooltipOnLeave?: boolean;
    splitClass?: string;
    tooltip?: TooltipConfig;
    prop?: LktObject;
    onClick?: Function | undefined;
    constructor(data?: Partial<ButtonConfig>);
    isDisabled(): boolean | undefined;
}

interface ColumnConfig {
    type: ColumnType;
    key: string;
    label?: string;
    sortable?: boolean;
    hidden?: boolean;
    editable?: boolean;
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

type ValidDrag = boolean | ((item: LktObject) => boolean);

interface DragConfig {
    enabled: boolean;
    isDraggable?: ValidDrag;
    isValid?: ValidDrag;
    isDisabled?: boolean | Function;
    canRender?: boolean | Function;
    dragKey?: string;
}

interface IconConfig {
    icon?: ValidTextValue;
    text?: ValidTextValue;
    class?: ValidTextValue;
    pack?: ValidTextValue;
    type?: string;
}

declare enum ItemCrudView {
    Inline = "inline",
    Modal = "modal"
}

declare enum ItemCrudMode {
    Create = "create",
    Update = "update",
    Read = "read"
}

declare enum ItemCrudButtonNavPosition {
    Top = "top",
    Bottom = "bottom"
}

declare enum ItemCrudButtonNavVisibility {
    Changed = "changed",
    Always = "always",
    Never = "never"
}

declare enum SaveType {
    Manual = "manual",
    Auto = "auto",
    Delay = "delay"
}

interface SaveConfig {
    type?: SaveType;
    delay?: number;
}

declare enum NotificationType {
    Toast = "toast",
    Inline = "inline"
}

interface ItemCrudConfig {
    modelValue?: LktObject;
    editing?: boolean;
    mode?: ItemCrudMode;
    view?: ItemCrudView;
    editModeButton?: ButtonConfig;
    dropButton?: ButtonConfig;
    createButton?: ButtonConfig;
    updateButton?: ButtonConfig;
    buttonNavPosition?: ItemCrudButtonNavPosition;
    buttonNavVisibility?: ItemCrudButtonNavVisibility;
    modalConfig?: ModalConfig;
    saveConfig?: SaveConfig;
    dataStateConfig?: DataStateConfig;
    readResource?: string;
    readData?: LktObject;
    title?: string;
    beforeEmitUpdate?: Function | undefined;
    notificationType?: NotificationType;
}

declare enum PaginatorType {
    Pages = "pages",
    PrevNext = "prev-next",
    PagesPrevNext = "pages-prev-next",
    PagesPrevNextFirstLast = "pages-prev-next-first-last",
    LoadMore = "load-more",
    Infinite = "infinite"
}

interface PaginatorConfig {
    type?: PaginatorType;
    modelValue?: number;
    class?: string;
    resource?: string;
    readOnly?: boolean;
    loading?: boolean;
    filters?: LktObject;
}

declare enum ProgressType {
    None = "",
    Incremental = "incremental",
    Decremental = "decremental"
}

declare enum ProgressValueFormat {
    NotDefined = "",
    Hidden = "hidden",
    Integer = "integer",
    Decimal = "decimal",
    Auto = "auto"
}

interface ProgressConfig {
    modelValue?: number;
    type?: ProgressType;
    duration?: number;
    pauseOnHover?: boolean;
    header?: string;
    valueFormat?: ProgressValueFormat;
    palette?: string;
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
    SwitchEditMode = "switch-edit-mode",
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

type ValidDragConfig = DragConfig | undefined;

type ValidPaginatorConfig = PaginatorConfig | undefined;

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
    drag?: ValidDragConfig;
    paginator?: ValidPaginatorConfig;
    header?: HeaderConfig;
    title?: string;
    titleTag?: string;
    titleIcon?: string;
    headerClass?: string;
    saveButton?: ButtonConfig;
    createButton?: ButtonConfig;
    dropButton?: ButtonConfig;
    hiddenSave?: boolean;
    wrapContentTag?: string;
    wrapContentClass?: string;
    itemsContainerClass?: string;
    createText?: string;
    createIcon?: string;
    createRoute?: string;
    createDisabled?: boolean;
    createEnabledValidator?: Function;
    dropText?: string;
    dropIcon?: string;
    dropConfirm?: string;
    dropResource?: string;
    editText?: string;
    editIcon?: string;
    editLink?: string;
    editModeText?: string;
    switchEditionEnabled?: boolean;
    addNavigation?: boolean;
    newValueGenerator?: Function;
    requiredItemsForTopCreate?: number;
    requiredItemsForBottomCreate?: number;
    slotItemVar?: string;
}

declare enum ToastType {
    Message = "message",
    Button = "button"
}

declare enum ToastPositionX {
    Left = "left",
    Center = "center",
    Right = "right"
}

interface ToastConfig {
    type?: ToastType;
    text?: ValidTextValue;
    details?: ValidTextValue;
    icon?: ValidTextValue;
    positionX?: ToastPositionX;
    duration?: number;
    buttonConfig?: ButtonConfig | undefined;
    zIndex?: number | undefined;
}

declare class LktStrictItem extends LktItem {
    lktStrictItem: boolean;
}

declare enum ValidationCode {
    MinStringLength = "min-str",
    MinNumber = "min-num",
    MaxStringLength = "max-str",
    MaxNumber = "max-num",
    Email = "email",
    Empty = "empty",
    EqualTo = "equal-to",
    MinNumbers = "min-numbers",
    MaxNumbers = "max-numbers",
    MinChars = "min-chars",
    MaxChars = "max-chars",
    MinUpperChars = "min-upper-chars",
    MaxUpperChars = "max-upper-chars",
    MinLowerChars = "min-lower-chars",
    MaxLowerChars = "max-lower-chars",
    MinSpecialChars = "min-special-chars",
    MaxSpecialChars = "max-special-chars"
}

declare enum ValidationStatus {
    Ok = "ok",
    Ko = "ko",
    Info = "info"
}

declare class FieldValidation {
    code?: ValidationCode | string;
    status: ValidationStatus;
    min: number;
    max: number;
    equalToValue: number | string | undefined;
    constructor(code: ValidationCode, status: ValidationStatus);
    setMin(n: number): this;
    setMax(n: number): this;
    setEqualToValue(val: number | string): this;
    static createEmpty(status?: ValidationStatus): FieldValidation;
    static createEmail(status?: ValidationStatus): FieldValidation;
    static createMinStr(min: number, status?: ValidationStatus): FieldValidation;
    static createMaxStr(max: number, status?: ValidationStatus): FieldValidation;
    static createMinNum(min: number, status?: ValidationStatus): FieldValidation;
    static createMaxNum(max: number, status?: ValidationStatus): FieldValidation;
    static createNumBetween(min: number, max: number, status?: ValidationStatus): FieldValidation;
    static createMinNumbers(min: number, status?: ValidationStatus): FieldValidation;
    static createMaxNumbers(max: number, status?: ValidationStatus): FieldValidation;
    static createMinUpperChars(min: number, status?: ValidationStatus): FieldValidation;
    static createMaxUpperChars(max: number, status?: ValidationStatus): FieldValidation;
    static createMinLowerChars(min: number, status?: ValidationStatus): FieldValidation;
    static createMaxLowerChars(max: number, status?: ValidationStatus): FieldValidation;
    static createMinSpecialChars(min: number, status?: ValidationStatus): FieldValidation;
    static createMaxSpecialChars(max: number, status?: ValidationStatus): FieldValidation;
    static createMinChars(min: number, status?: ValidationStatus): FieldValidation;
    static createMaxChars(max: number, status?: ValidationStatus): FieldValidation;
    static createEqualTo(value: number | string, status?: ValidationStatus): FieldValidation;
}

declare class Accordion extends LktItem implements AccordionConfig {
    static lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof AccordionConfig)[];
    modelValue?: boolean;
    type?: AccordionType;
    toggleMode?: AccordionToggleMode;
    actionButton?: ButtonConfig;
    toggleButton?: ButtonConfig;
    toggleOnClickIntro?: boolean;
    toggleTimeout?: number;
    title?: string;
    icon?: string;
    class?: string;
    contentClass?: string;
    iconRotation?: '90' | '180' | '-90' | '-180';
    minHeight?: number | undefined;
    iconAtEnd?: boolean;
    toggleIconAtEnd?: boolean;
    constructor(data?: Partial<AnchorConfig>);
}

declare class Toast extends LktItem implements ToastConfig {
    static lktDefaultValues: (keyof ToastConfig)[];
    type?: ToastType;
    text?: ValidTextValue;
    details?: ValidTextValue;
    icon?: ValidTextValue;
    positionX?: ToastPositionX;
    duration?: number | undefined;
    buttonConfig?: ButtonConfig | undefined;
    zIndex?: number;
    constructor(data?: Partial<ToastConfig>);
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

declare class ItemCrud extends LktItem implements ItemCrudConfig {
    static lktDefaultValues: (keyof ItemCrudConfig)[];
    modelValue: LktObject;
    editing: boolean;
    mode: ItemCrudMode;
    view: ItemCrudView;
    editModeButton: ButtonConfig;
    dropButton: ButtonConfig;
    createButton: ButtonConfig;
    updateButton: ButtonConfig;
    modalConfig: ModalConfig;
    saveConfig: SaveConfig;
    title: string;
    readResource: string;
    readData: LktObject;
    beforeEmitUpdate: Function | undefined;
    dataStateConfig: DataStateConfig;
    buttonNavPosition?: ItemCrudButtonNavPosition;
    buttonNavVisibility?: ItemCrudButtonNavVisibility;
    notificationType?: NotificationType;
    constructor(data?: Partial<ItemCrudConfig>);
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

declare class Paginator extends LktItem implements PaginatorConfig {
    static lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof PaginatorConfig)[];
    type?: PaginatorType;
    modelValue?: number;
    class?: string;
    resource?: string;
    readOnly?: boolean;
    loading?: boolean;
    filters?: LktObject;
    constructor(data?: Partial<PaginatorConfig>);
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
    drag?: ValidDragConfig;
    paginator?: ValidPaginatorConfig;
    header?: HeaderConfig;
    title?: string;
    titleTag?: string;
    titleIcon?: string;
    headerClass?: string;
    saveButton?: ButtonConfig;
    createButton?: ButtonConfig;
    dropButton?: ButtonConfig;
    hiddenSave?: boolean;
    wrapContentTag?: string;
    wrapContentClass?: string;
    itemsContainerClass?: string;
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
    constructor(data?: Partial<TableConfig>);
}

declare enum SortDirection {
    Asc = "asc",
    Desc = "desc"
}

declare enum ToggleMode {
    Lazy = "lazy",
    Ever = "ever"
}

type ScanPropTarget = string | number | undefined | Function;

type ValidCustomSlot = string | Component | undefined;

type ValidScanPropTarget = ScanPropTarget | ((...args: any[]) => ScanPropTarget);

declare const extractPropValue: (needle: ValidScanPropTarget, haystack: LktObject) => ValidScanPropTarget;
declare const extractI18nValue: (needle: ValidTextValue) => any;

declare const ensureButtonConfig: (buttonConfig: Partial<ButtonConfig> | undefined, settingsConfig: Partial<ButtonConfig>) => Partial<ButtonConfig>;

declare const lktDebug: (component: string, ...args: any[]) => void;

declare const createColumn: (data: ColumnConfig) => Column;

/**
 * Export common interfaces
 */

declare function getDefaultValues<T>(cls: {
    new (): T;
    lktDefaultValues: (keyof T)[];
}): Partial<T>;

export { Accordion, type AccordionConfig, AccordionToggleMode, AccordionType, Anchor, type AnchorConfig, AnchorType, type BeforeCloseModalData, Button, type ButtonConfig, ButtonType, Column, type ColumnConfig, ColumnType, type DragConfig, type EmptyModalKey, Field, FieldAutoValidationTrigger, type FieldConfig, FieldType, FieldValidation, type FieldValidationConfig, type IconConfig, type IsDisabledChecker, type IsDisabledCheckerArgs, ItemCrud, ItemCrudButtonNavPosition, ItemCrudButtonNavVisibility, type ItemCrudConfig, ItemCrudMode, ItemCrudView, LktItem, type LktObject, LktSettings, LktStrictItem, Modal, ModalCallbackAction, type ModalCallbackConfig, type ModalConfig, ModalType, MultipleOptionsDisplay, NotificationType, Option, type OptionConfig, Paginator, type PaginatorConfig, PaginatorType, type ProgressConfig, ProgressType, ProgressValueFormat, SafeString, type SaveConfig, SaveType, type ScanPropTarget, SortDirection, Table, type TableConfig, TablePermission, TableRowType, TableType, Toast, type ToastConfig, ToastPositionX, ToastType, ToggleMode, Tooltip, type TooltipConfig, TooltipLocationX, TooltipLocationY, TooltipPositionEngine, type ValidBeforeCloseModal, type ValidButtonDot, type ValidColSpan, type ValidCustomSlot, type ValidDragConfig, type ValidFieldMinMax, type ValidFieldValue, type ValidIsDisabledValue, type ValidModalKey, type ValidModalName, type ValidOptionValue, type ValidPaginatorConfig, type ValidSafeStringValue, type ValidScanPropTarget, type ValidTabIndex, type ValidTablePermission, type ValidTableRowTypeValue, type ValidTextValue, ValidationCode, ValidationStatus, booleanFieldTypes, createColumn, ensureButtonConfig, extractI18nValue, extractPropValue, fieldTypesWithOptions, fieldTypesWithoutClear, fieldTypesWithoutUndo, fieldsWithMultipleMode, getDefaultValues, lktDebug, textFieldTypes, textFieldTypesWithOptions };
