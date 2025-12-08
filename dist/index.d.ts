import { Component, VueElement, Ref } from 'vue';
import { HTTPResponse } from 'lkt-http-client';
import { DataState, DataStateConfig } from 'lkt-data-state';
import { Router, RouterHistory, RouteRecordRaw, RouteLocationNormalizedLoaded } from 'vue-router';

interface LktObject {
    [key: string | number]: any;
}

interface RenderAndDisplayProps {
    canRender?: boolean | (() => boolean);
    canDisplay?: boolean | (() => boolean);
}

interface RouteConfig {
    path?: string;
    name?: string;
    hash?: string;
    params?: LktObject;
    query?: LktObject;
    replace?: boolean;
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
    TooltipEver = "tooltip-ever",// Tooltip button, contents generated each time it's clicked
    FileUpload = "file-upload",// File upload mode. Enables HTTP upload by lkt-field
    ImageUpload = "image-upload",// Image upload mode. Enables HTTP upload by lkt-field
    InvisibleWrapper = "invisible-wrapper",// Able to wrap another element without styles
    Menu = "menu",// Toggles menu state
    Tab = "tab"
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

type ValidModalKey = string | number | Function | EmptyModalKey | undefined;

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

declare enum HeaderTag {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6"
}

type ValidTextValue = string | number | undefined;

declare enum IconType {
    NotDefined = "",
    Button = "button"
}

interface ClickEventArgs {
    event?: Event | undefined;
    httpResponse?: HTTPResponse | undefined;
}

interface EventsConfig {
    click?: (data: ClickEventArgs) => void | undefined;
}

declare enum IconPosition {
    Start = "start",
    End = "end"
}

type ValidIconDot = boolean | string | number;

interface IconConfig {
    icon?: ValidTextValue | (() => string);
    iconText?: ValidTextValue | (() => string);
    text?: ValidTextValue;
    class?: ValidTextValue;
    type?: IconType;
    dot?: ValidIconDot;
    position?: IconPosition;
    events?: EventsConfig | undefined;
}

interface PolymorphicElementConfig {
    tag?: string | Component;
    class?: string;
    text?: string;
    title?: string;
    props?: LktObject;
    vModels?: LktObject;
    content?: Array<PolymorphicElementConfig>;
}

interface ImageConfig {
    src?: string;
    alt?: string;
    text?: string;
    class?: string;
    imageStyle?: string | LktObject;
}

interface HeaderConfig {
    tag?: HeaderTag;
    class?: string;
    text?: string;
    icon?: string | IconConfig;
    image?: ImageConfig;
    topStartButtons?: Array<ButtonConfig>;
    topStartContent?: Array<PolymorphicElementConfig>;
    topEndButtons?: Array<ButtonConfig>;
    topEndContent?: Array<PolymorphicElementConfig>;
    bottomButtons?: Array<ButtonConfig>;
}

interface ModalConfig extends LktObject {
    modalName?: ValidModalName;
    modalKey?: ValidModalKey;
    zIndex?: number;
    type?: ModalType;
    size?: string;
    header?: HeaderConfig;
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
    beforeClose?: ValidBeforeCloseModal;
    item?: LktObject;
    confirmButton?: Partial<ButtonConfig> | false;
    cancelButton?: Partial<ButtonConfig> | false;
    headerActionsButton?: Partial<ButtonConfig> | false;
}

type ValidAnchorTo = RouteConfig | string | ((data: LktObject) => RouteConfig | string);

interface AnchorEvents {
    click?: (data: ClickEventArgs) => void | undefined;
}

interface AnchorConfig {
    type?: AnchorType;
    to?: ValidAnchorTo;
    class?: string;
    isActive?: boolean;
    downloadFileName?: string;
    disabled?: boolean;
    confirmModal?: ValidModalName;
    confirmModalKey?: ValidModalKey;
    confirmData?: ModalConfig;
    imposter?: boolean;
    external?: boolean;
    text?: ValidTextValue;
    icon?: IconConfig | string;
    events?: AnchorEvents | undefined;
    prop?: LktObject;
    onClick?: Function | undefined;
}

type ValidTabIndex = string | number | undefined;

interface IsDisabledCheckerArgs {
    value?: any;
    dataState?: DataState;
    prop?: LktObject;
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
    indicator?: boolean;
    class?: string;
    contentClass?: string;
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
    showOnReferrerHover?: boolean;
    showOnReferrerHoverDelay?: number;
    hideOnReferrerLeave?: boolean;
    hideOnReferrerLeaveDelay?: number;
    compensationX?: number;
    compensationY?: number;
    compensateGlobalContainers?: boolean;
    remoteControl?: boolean;
    teleport?: string;
    content?: Array<PolymorphicElementConfig>;
}

interface AriaConfig {
    controls?: string;
    selected?: boolean;
}

interface ButtonEvents {
    click?: (data: ClickEventArgs) => void | undefined;
    httpStart?: undefined | Function;
    httpEnd?: (data: ClickEventArgs) => void | undefined;
}

interface ButtonConfig {
    type?: ButtonType;
    name?: string;
    value?: string;
    disabled?: ValidIsDisabledValue;
    openTooltip?: boolean;
    loading?: boolean;
    class?: string;
    containerClass?: string;
    wrapButton?: boolean;
    text?: ValidTextValue;
    icon?: IconConfig | string;
    iconEnd?: IconConfig | string;
    img?: string;
    checked?: boolean;
    textOn?: ValidTextValue;
    textOff?: ValidTextValue;
    iconOn?: IconConfig | ValidTextValue;
    iconOff?: IconConfig | ValidTextValue;
    iconEndOn?: IconConfig | ValidTextValue;
    iconEndOff?: IconConfig | ValidTextValue;
    dot?: ValidIconDot;
    anchor?: AnchorConfig;
    resource?: string;
    resourceData?: LktObject;
    modal?: ValidModalName;
    modalKey?: ValidModalKey;
    modalData?: Partial<ModalConfig> | Function;
    confirmModal?: ValidModalName;
    confirmModalKey?: ValidModalKey;
    confirmData?: Partial<ModalConfig>;
    modalCallbacks?: Array<ModalCallbackConfig>;
    menuKey?: ValidModalKey;
    tooltip?: TooltipConfig;
    splitIcon?: string;
    showTooltipOnHover?: boolean;
    showTooltipOnHoverDelay?: number;
    hideTooltipOnLeave?: boolean;
    splitClass?: string;
    splitButtons?: Array<ButtonConfig>;
    tabindex?: ValidTabIndex;
    prop?: LktObject;
    aria?: AriaConfig;
    clickRef?: Element | VueElement;
    events?: ButtonEvents;
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
    Time = "time",
    DateTime = "datetime",
    File = "file",
    Image = "image",
    Select = "select",
    Check = "check",
    Switch = "switch",
    Calc = "calc",
    Card = "card",
    Table = "table",
    Radio = "radio",
    ToggleButtonGroup = "toggle-button-group",
    DayOfWeek = "day-of-week"
}

type ValidOptionValue = string | number | undefined;

declare enum TagType {
    NotDefined = "",
    ActionIcon = "action-icon"
}

interface TagConfig {
    class?: string;
    text?: ValidTextValue;
    featuredText?: ValidTextValue;
    icon?: string;
    iconAtEnd?: boolean;
    featuredAtStart?: boolean;
    type?: TagType;
}

interface OptionConfig {
    value: ValidOptionValue;
    label: string;
    data?: LktObject;
    disabled?: boolean;
    group?: string;
    icon?: string;
    modal?: string | Function;
    tags?: TagConfig[] | ((opt: OptionConfig) => TagConfig[]) | undefined;
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

declare class Option extends LktItem implements OptionConfig {
    value: ValidOptionValue;
    label: string;
    data?: LktObject;
    disabled?: boolean;
    group?: string;
    icon?: string;
    modal?: ValidModalName;
    tags?: OptionConfig[];
    constructor(data?: Partial<OptionConfig>);
}

type ValidFieldValue = string | number | boolean | LktObject | Option[];

declare enum MultipleOptionsDisplay {
    List = "list",
    Inline = "inline",
    Count = "count",
    Table = "table"
}

type ValidFieldMinMax = number | string | undefined;

declare enum FieldAutoValidationTrigger {
    None = "",
    Focus = "focus",
    Blur = "blur",
    Always = "always"
}

declare enum FieldValidationType {
    Auto = "auto",
    Local = "local",
    Remote = "remote",
    External = "external"
}

declare enum FieldReportType {
    Message = "message",
    Inline = "inline"
}

declare enum ValidationCode {
    HTTPResponse = "http-response",
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

declare class FieldValidation extends LktItem {
    code?: ValidationCode | string;
    status: ValidationStatus;
    text?: string;
    icon?: IconConfig | string | false;
    min: number;
    max: number;
    equalToValue: number | string | undefined;
    httpResponse?: HTTPResponse;
    element?: PolymorphicElementConfig;
    constructor(data: LktObject);
    setMin(n: number): this;
    setMax(n: number): this;
    setEqualToValue(val: number | string): this;
    setHTTPResponse(val: HTTPResponse): this;
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
    static createRemoteResponse(httpResponse: HTTPResponse, status?: ValidationStatus): FieldValidation;
}

declare enum FieldReportLevel {
    Error = "error",
    Errors = "errors",
    All = "all"
}

interface FieldValidationConfig {
    type?: FieldValidationType;
    trigger?: FieldAutoValidationTrigger | false;
    report?: FieldReportType | false;
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
    checkEqualTo?: ValidFieldMinMax | Function;
    defaultValue?: FieldValidation[];
    defaultValueOverrides?: ValidationCode[];
    reportLevel?: FieldReportLevel;
    groupConstraints?: boolean;
    groupConstraintsButton?: ButtonConfig;
}

interface HttpCallEvents {
    onStart?: Function | undefined;
    onEnd?: Function | undefined;
}

interface HttpCallConfig {
    resource?: string;
    data?: LktObject;
    events?: HttpCallEvents;
}

declare enum TableType {
    Table = "table",
    Item = "item",
    Ul = "ul",
    Ol = "ol",
    Carousel = "carousel",
    Accordion = "accordion",
    Calendar = "calendar"
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

declare enum TableRowType {
    Auto = 0,
    PreferItem = 1,
    PreferCustomItem = 2,
    PreferColumns = 3
}

type ValidTableRowTypeValue = TableRowType | ((...args: any[]) => TableRowType) | undefined;

type ValidDrag = boolean | ((item: LktObject) => boolean);

interface DragConfig {
    enabled: boolean;
    isDraggable?: ValidDrag;
    isValid?: ValidDrag;
    isDisabled?: boolean | Function;
    canRender?: boolean | Function;
    dragKey?: string;
}

type ValidDragConfig = DragConfig | undefined;

declare enum PaginatorType {
    Pages = "pages",
    PrevNext = "prev-next",
    PagesPrevNext = "pages-prev-next",
    PagesPrevNextFirstLast = "pages-prev-next-first-last",
    LoadMore = "load-more",
    Infinite = "infinite",
    TimelineAsc = "timeline-asc",
    TimelineDesc = "timeline-desc",
    TimelineAscDesc = "timeline-asc-desc"
}

interface PaginatorEvents {
    httpStart?: undefined | Function;
    httpEnd?: (data: ClickEventArgs) => void | undefined;
    parseResults?: (data: LktObject[]) => void | undefined;
}

interface PaginatorConfig {
    type?: PaginatorType;
    modelValue?: number;
    class?: string;
    resource?: string;
    resourceData?: LktObject;
    readOnly?: boolean;
    loading?: boolean;
    dateKey?: string;
    timelineOldestDate?: Date | undefined;
    timelineNewestDate?: Date | undefined;
    timelineVisibleDate?: Date | undefined;
    events?: PaginatorEvents;
    timeline?: {
        accumulative?: boolean;
    };
}

type ValidPaginatorConfig = PaginatorConfig | undefined;

interface CarouselConfig {
    currentSlide?: number;
    itemsToShow?: number;
    itemsToScroll?: number;
    autoplay?: number;
    infinite?: boolean;
    mouseDrag?: boolean;
    touchDrag?: boolean;
    pauseAutoplayOnHover?: boolean;
    dir?: 'ltr' | 'rtl';
    snapAlign?: 'start' | 'end' | 'center' | 'center-odd' | 'center-even';
}

declare enum ColumnType {
    None = "",
    Field = "field",
    Button = "button",
    Anchor = "anchor",
    InlineDrop = "inline-drop",
    ColumnIndex = "column-index"
}

type ValidColSpan = Function | boolean | number | undefined;

interface ConditionalColumnArgs {
    perms: Array<TablePermission>;
}

interface ColumnConfig {
    type: ColumnType;
    key: string;
    label?: string;
    class?: string;
    sortable?: boolean;
    hidden?: boolean | ((data: ConditionalColumnArgs) => boolean);
    ensureFieldLabel?: boolean;
    formatter?: Function | undefined;
    checkEmpty?: Function | undefined;
    colspan?: ValidColSpan;
    preferSlot?: Function | boolean;
    isForRowKey?: boolean;
    isForAccordionHeader?: boolean;
    isCalendarDate?: boolean;
    isCalendarGroup?: boolean;
    extractTitleFromColumn?: string;
    slotData?: LktObject;
    field?: FieldConfig | undefined;
    anchor?: AnchorConfig | undefined;
    button?: ButtonConfig | undefined;
}

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

interface TableTypeSwitchButtonsConfig {
    table?: ButtonConfig;
    item?: ButtonConfig;
    ul?: ButtonConfig;
    ol?: ButtonConfig;
    carousel?: ButtonConfig;
    calendar?: ButtonConfig;
    accordion?: ButtonConfig;
}

interface DotConfig {
    text?: ValidTextValue;
    class?: string;
}

interface CalendarItemConfig {
    date: Date;
    data?: LktObject;
    dot?: DotConfig;
}

interface IntervalConfig {
    from: Date;
    to: Date;
}

interface CalendarDisabledConfig {
    dates?: Array<Date>;
    intervals?: Array<IntervalConfig>;
    days?: Array<number>;
    daysOfWeek?: Array<number>;
}

declare enum CalendarNavBarElements {
    PrevButton = "prev",
    NextButton = "next",
    DatePicker = "datePicker",
    GoToCurrent = "goToCurrent"
}

interface CalendarNavBarConfig extends LktObject {
    prev?: ButtonConfig;
    next?: ButtonConfig;
    datePicker?: FieldConfig;
    goToCurrent?: ButtonConfig;
}

interface CalendarNavigationConfig {
    minDate?: Date;
    maxDate?: Date;
    navBar?: Array<CalendarNavBarElements>;
    navBarConfig?: CalendarNavBarConfig;
    hidePrevPreview?: boolean;
    hideNextPreview?: boolean;
}

interface CalendarEvents {
    dayPicked?: ((args: {
        pickedDate: Date;
        items: Array<CalendarItemConfig>;
    }) => void);
    visibleMonthChanged?: ((args: {
        visibleDate: Date;
    }) => void);
}

interface CalendarConfig {
    modelValue?: Date | undefined;
    items?: Array<CalendarItemConfig>;
    disabled?: boolean | CalendarDisabledConfig;
    navigation?: CalendarNavigationConfig;
    events?: CalendarEvents;
}

interface CalendarGroupsConfig {
    [key: string | number]: DotConfig;
}

interface FormComponentConfig extends PolymorphicElementConfig {
    form?: FormConfig;
}

declare enum ModificationView {
    Current = "current",
    Modifications = "modifications",
    SplitView = "split-view",
    Differences = "differences"
}

interface FormItemConfig extends RenderAndDisplayProps {
    key?: string;
    type?: 'field' | 'component' | 'form' | 'slot';
    field?: FieldConfig;
    modificationsField?: FieldConfig;
    form?: FormConfig;
    component?: FormComponentConfig;
    supportedModifications?: boolean | ModificationView[];
    slotData?: LktObject;
}

type TableConfigReturnFunction = (config: TableConfig) => TableConfig;

interface FormUiConfig {
    modelValue: LktObject;
    modifications?: LktObject;
    form: FormConfig;
    valid?: boolean;
    disabled?: boolean;
    changed?: boolean;
    class?: string;
    formClass?: string;
    visibleView?: ModificationView;
    editableViews?: ModificationView[];
    modificationDataState?: DataState;
    differencesTableConfig?: TableConfig | TableConfigReturnFunction;
    dataStateConfig?: DataStateConfig;
}

interface FormConfig {
    items?: Array<FormItemConfig>;
    submitButton?: ButtonConfig | false;
    container?: PolymorphicElementConfig;
    header?: HeaderConfig;
    uiConfig?: Partial<FormUiConfig>;
    postSubmitButtonContent?: Array<PolymorphicElementConfig>;
}

interface TableEvents {
    parseResults?: (data: LktObject[]) => void | undefined | LktObject[];
    viewChanged?: (view: TableType) => void;
}

interface TableConfig {
    modelValue?: LktObject[];
    type?: TableType;
    columns?: Array<ColumnConfig>;
    noResultsText?: string;
    hideEmptyColumns?: boolean;
    hideTableHeader?: boolean;
    itemDisplayChecker?: Function;
    customItemSlotName?: Function;
    rowDisplayType?: ValidTableRowTypeValue;
    slotItemVar?: string;
    itemSlotComponent?: string | Function | Component;
    itemSlotData?: LktObject | Function;
    itemSlotEvents?: LktObject | Function;
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
    carousel?: CarouselConfig;
    calendar?: CalendarConfig;
    calendarGroups?: CalendarGroupsConfig;
    accordion?: AccordionConfig;
    header?: HeaderConfig;
    title?: string;
    titleTag?: string;
    titleIcon?: string;
    headerClass?: string;
    editModeButton?: ButtonConfig;
    saveButton?: ButtonConfig;
    createButton?: ButtonConfig;
    hiddenSave?: boolean;
    groupButton?: ButtonConfig | boolean;
    requiredItemsForTopCreate?: number;
    requiredItemsForBottomCreate?: number;
    addNavigation?: boolean;
    newValueGenerator?: Function;
    wrapContentTag?: string;
    wrapContentClass?: string;
    itemsContainerClass?: string;
    itemContainerClass?: string | Function;
    itemContainerStyle?: string | Function;
    skipTableItemsContainer?: boolean;
    createEnabledValidator?: Function;
    switchableTypes?: Array<TableType>;
    switchableTypesButtons?: TableTypeSwitchButtonsConfig;
    useItemSlot?: boolean | ((args: {
        item: LktObject;
        index: number;
    }) => boolean);
    filtersForm?: FormConfig;
    events?: TableEvents;
}

interface OptionsConfig {
    autoloadResource?: boolean | 'feed';
    download?: string | Function;
    anchor?: AnchorConfig | Function;
    modal?: string | Function;
    modalData?: LktObject | Function;
    text?: string | Function;
    icon?: string | Function;
    class?: string | Function;
    filter?: Function;
    labelFormatter?: Function | undefined;
    http?: HttpCallConfig;
    autoPickFirstOptionIfEmpty?: boolean;
    closeDropdownOnOptionClick?: boolean;
    zeroMeansEmpty?: boolean;
    typeCasting?: false | 'int';
    table?: TableConfig;
    canRenderDropdown?: boolean;
    extendedContentSlotComponent?: string | Function | Component;
    extendedContentSlotData?: LktObject | Function;
    extendedContentSlotEvents?: LktObject | Function;
}

interface FieldReadModeConfig {
    textMaxLength?: number;
}

interface BooleanFieldConfig {
    label?: ValidTextValue;
    icon?: ValidTextValue;
    labelIcon?: ValidTextValue;
}

interface FileBrowserConfig {
    http?: HttpCallConfig;
    entityCreateButton?: ButtonConfig;
    entityUpdateButton?: ButtonConfig;
    entityDropButton?: ButtonConfig;
    listConfig?: TableConfig;
}

interface FieldValidationEndEventArgs {
    config: FieldValidationConfig;
    httpResponse: HTTPResponse;
}

interface FieldLoadOptionsEndEventArgs {
    options: Array<OptionConfig>;
    httpResponse: HTTPResponse;
}

interface FieldEvents {
    validationStart?: undefined | Function;
    validationEnd?: undefined | ((data: FieldValidationEndEventArgs) => boolean);
    loadOptionsStart?: undefined | Function;
    loadOptionsEnd?: undefined | ((data: FieldLoadOptionsEndEventArgs) => void);
    updatedOptions?: ((data: {
        options: Array<OptionConfig>;
    }) => void);
    clickOption?: ((data: {
        option: OptionConfig;
    }) => void);
    itemCreated?: undefined | Function;
    changed?: undefined | Function;
}

interface FieldConfig extends RenderAndDisplayProps {
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
    hidden?: boolean;
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
    featuredButton?: string;
    infoButtonEllipsis?: boolean;
    fileName?: string;
    options?: string | Option[] | OptionConfig[];
    multiple?: boolean;
    multipleDisplay?: MultipleOptionsDisplay;
    multipleDisplayEdition?: MultipleOptionsDisplay;
    searchable?: boolean;
    icon?: string | Function | IconConfig;
    download?: string | Function;
    modal?: string | Function;
    modalKey?: string | number | Function;
    modalData?: LktObject | Function;
    itemType?: string;
    optionValueType?: string;
    configOn?: BooleanFieldConfig;
    configOff?: BooleanFieldConfig;
    readMode?: boolean | (() => boolean);
    allowReadModeSwitch?: boolean;
    readModeConfig?: FieldReadModeConfig;
    prop?: LktObject;
    validation?: FieldValidationConfig;
    optionsConfig?: OptionsConfig;
    fileUploadHttp?: HttpCallConfig;
    fileUploadButton?: ButtonConfig;
    tooltipConfig?: TooltipConfig;
    fileBrowserConfig?: FileBrowserConfig;
    customButtonText?: string;
    customButtonClass?: string;
    createButton?: ButtonConfig | false;
    callToActionButton?: ButtonConfig | false;
    events?: FieldEvents;
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
    static defaultCreateSuccessText: string;
    static defaultCreateSuccessDetails: string;
    static defaultCreateSuccessIcon: string;
    static setDefaultCreateSuccess(config: {
        text?: string;
        details?: string;
        icon?: string;
    }): void;
    static defaultUpdateSuccessText: string;
    static defaultUpdateSuccessDetails: string;
    static defaultUpdateSuccessIcon: string;
    static setDefaultUpdateSuccess(config: {
        text?: string;
        details?: string;
        icon?: string;
    }): void;
    static defaultDropSuccessText: string;
    static defaultDropSuccessDetails: string;
    static defaultDropSuccessIcon: string;
    static setDefaultDropSuccess(config: {
        text?: string;
        details?: string;
        icon?: string;
    }): void;
    static defaultUploadSuccessText: string;
    static defaultUploadSuccessDetails: string;
    static defaultUploadSuccessIcon: string;
    static setDefaultUploadSuccess(config: {
        text?: string;
        details?: string;
        icon?: string;
    }): void;
    static defaultUploadErrorText: string;
    static defaultUploadErrorDetails: string;
    static defaultUploadErrorIcon: string;
    static setDefaultUploadError(config: {
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
    static defaultGroupButton: Partial<ButtonConfig>;
    static setDefaultGroupButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static defaultToggleButton: Partial<ButtonConfig>;
    static setDefaultToggleButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static defaultLoadMoreButton: Partial<ButtonConfig>;
    static setDefaultLoadMoreButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static defaultCloseModalIcon: string;
    static setDefaultCloseModalIcon(icon: string): typeof LktSettings;
    static defaultCloseToastIcon: string;
    static setDefaultCloseToastIcon(icon: string): typeof LktSettings;
    static defaultTableSortAscIcon: string;
    static defaultTableSortDescIcon: string;
    static setDefaultTableSortAscIcon(icon: string): typeof LktSettings;
    static setDefaultTableSortDescIcon(icon: string): typeof LktSettings;
    static defaultPaginatorFirstButton: Partial<ButtonConfig>;
    static defaultPaginatorPrevButton: Partial<ButtonConfig>;
    static defaultPaginatorNextButton: Partial<ButtonConfig>;
    static defaultPaginatorLastButton: Partial<ButtonConfig>;
    static setDefaultPaginatorFirstButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static setDefaultPaginatorPrevButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static setDefaultPaginatorNextButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static setDefaultPaginatorLastButton(button: Partial<ButtonConfig>, override?: boolean): typeof LktSettings;
    static defaultFieldElementCustomClassField: Partial<FieldConfig>;
    static defaultFieldLktAccordionElementCustomClassField: Partial<FieldConfig>;
    static defaultFieldLktBoxElementCustomClassField: Partial<FieldConfig>;
    static defaultFieldLktIconElementCustomClassField: Partial<FieldConfig>;
    static defaultFieldLktImageElementCustomClassField: Partial<FieldConfig>;
    static setDefaultFieldLktAccordionElementCustomClassField(field: Partial<FieldConfig>, override?: boolean): typeof LktSettings;
    static setDefaultFieldLktBoxElementCustomClassField(field: Partial<FieldConfig>, override?: boolean): typeof LktSettings;
    static setDefaultFieldLktIconElementCustomClassField(field: Partial<FieldConfig>, override?: boolean): typeof LktSettings;
    static setDefaultFieldLktImageElementCustomClassField(field: Partial<FieldConfig>, override?: boolean): typeof LktSettings;
    static i18nOptionsFormatter: LktObject;
    static setI18nOptionsFormatter(key: string, formatter: Function): typeof LktSettings;
}

interface TooltipSettings {
    globalContainersAffectingPositioning?: Array<HTMLElement>;
}

declare class TooltipSettingsController {
    static data: TooltipSettings;
    static configure(config: TooltipSettings): typeof TooltipSettingsController;
}

declare const fieldTypesWithOptions: FieldType[];
declare const fieldTypesWithoutClear: FieldType[];
declare const fieldTypesWithoutUndo: FieldType[];
declare const textFieldTypesWithOptions: FieldType[];
declare const booleanFieldTypes: FieldType[];
declare const fieldsWithMultipleMode: FieldType[];
declare const textFieldTypes: FieldType[];

declare enum BannerType {
    Static = "static",
    Parallax = "parallax"
}

interface BannerConfig {
    type?: BannerType;
    header?: HeaderConfig;
    subHeader?: HeaderConfig;
    art?: ImageConfig;
    media?: ImageConfig;
    opacity?: string | number;
    globalButton?: ButtonConfig | undefined;
    navButtons?: Array<ButtonConfig>;
}

interface BoxConfig {
    style?: string;
    class?: string;
    contentClass?: string;
    icon?: IconConfig | string;
    header?: HeaderConfig;
    title?: string;
    iconAtEnd?: boolean;
}

interface TrackConfig {
    borderWidth?: number;
    width?: number;
}

interface CircleConfig {
    radius: number;
    track?: TrackConfig;
    ball?: CircleConfig;
}

declare enum CounterType {
    Date = "date",
    Number = "number",
    Timer = "timer",
    Chrono = "chrono"
}

declare enum ProgressAnimation {
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

declare enum ProgressType {
    Bar = "bar",
    Circle = "circle"
}

interface UnitConfig {
    text: string;
    position: 'start' | 'end';
}

interface ProgressAnimationConfig {
    type: ProgressAnimation;
    autoplay?: boolean;
    externalControl?: boolean;
    from?: number;
    to?: number;
}

interface ProgressEvents {
    onEnd?: Function;
    updatedVisibleProgress?: Function;
}

interface ProgressConfig {
    modelValue?: number;
    type?: ProgressType;
    animation?: ProgressAnimation | ProgressAnimationConfig;
    duration?: number;
    direction?: 'right' | 'left';
    pauseOnHover?: boolean;
    unit?: string | UnitConfig;
    header?: HeaderConfig;
    valueFormat?: ProgressValueFormat;
    text?: string | Function;
    circle?: CircleConfig;
    events?: ProgressEvents;
}

declare enum CounterView {
    Auto = "auto",
    Progress = "progress"
}

interface CounterEvents {
    onChange?: (value: number | string) => void;
    onEnd?: () => void;
}

interface CounterConfig {
    type?: CounterType;
    from?: Date | number;
    to?: Date | number;
    step?: number;
    timeout?: number;
    dateFormat?: string;
    seconds?: number;
    view?: CounterView;
    progress?: ProgressConfig;
    events?: CounterEvents;
}

declare enum DocPageSize {
    A0 = "a0",
    A1 = "a1",
    A2 = "a2",
    A3 = "a3",
    A4 = "a4",
    A5 = "a5",
    A6 = "a6",
    A7 = "a7",
    A8 = "a8",
    A9 = "a9"
}

interface DocPageConfig {
    id?: string;
    size?: DocPageSize;
    skipPageNumber?: boolean;
    frontPage?: boolean;
    title?: string;
    img?: string;
    icon?: string;
}

interface MultiLangValue {
    en?: string;
    es?: string;
    de?: string;
    it?: string;
    fr?: string;
    pt?: string;
    ch?: string;
    jp?: string;
    nl?: string;
}

interface WebElementPropsConfig extends LktObject {
    class?: string;
    icon?: string;
    header?: MultiLangValue;
    subHeader?: MultiLangValue;
    text?: MultiLangValue;
}

declare enum FileEntityType {
    StorageUnit = "unit",
    Directory = "dir",
    Image = "img",
    Video = "vid",
    File = "file"
}

interface FileEntityConfig {
    id?: number | string | undefined;
    type: FileEntityType;
    name: string;
    src: string;
    children?: FileEntityConfig[];
    parent?: number | string | undefined;
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
    Bottom = "bottom",
    Hidden = "hidden"
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
    Inline = "inline",
    Silent = "silent"
}

interface ItemCrudEvents {
    httpStart?: undefined | Function;
    httpEnd?: (data: ClickEventArgs) => void | undefined;
}

interface ItemCrudSaveConfig {
    executionMode?: 'blocking' | 'parallel';
}

interface ItemCrudConfig {
    modelValue?: LktObject;
    modifications?: LktObject;
    editing?: boolean;
    perms?: ValidTablePermission[];
    customData?: LktObject;
    form?: FormConfig | Function;
    formUiConfig?: Partial<FormUiConfig>;
    mode?: ItemCrudMode;
    view?: ItemCrudView;
    visibleView?: ModificationView;
    modificationViews?: boolean | Array<ModificationView>;
    editModeButton?: ButtonConfig | false;
    dropButton?: ButtonConfig | false;
    createButton?: ButtonConfig | false;
    createAndNewButton?: ButtonConfig | false;
    updateButton?: ButtonConfig | false;
    groupButton?: ButtonConfig | boolean;
    groupButtonAsModalActions?: boolean;
    buttonNavPosition?: ItemCrudButtonNavPosition;
    buttonNavVisibility?: ItemCrudButtonNavVisibility;
    modalConfig?: ModalConfig;
    saveConfig?: SaveConfig;
    dataStateConfig?: DataStateConfig;
    readResource?: string;
    readData?: LktObject;
    title?: string;
    header?: HeaderConfig;
    beforeEmitUpdate?: Function | undefined;
    notificationType?: NotificationType;
    enabledSaveWithoutChanges?: boolean;
    redirectOnCreate?: string | ((id: number | string) => string);
    redirectOnDrop?: string | (() => string);
    differencesTableConfig?: TableConfig | TableConfigReturnFunction;
    navStartButtons?: Array<ButtonConfig>;
    navStartButtonsEditing?: Array<ButtonConfig>;
    navEndButtons?: Array<ButtonConfig>;
    navEndButtonsEditing?: Array<ButtonConfig>;
    events?: ItemCrudEvents;
    updateConfig?: ItemCrudSaveConfig;
}

interface ItemSlotComponentConfig {
    item?: LktObject;
    editing?: boolean;
    index?: number;
    perms?: Array<TablePermission>;
    data?: LktObject;
    events?: LktObject;
}

interface LoginConfig {
    loginForm?: FormConfig;
    singUpForm?: FormConfig;
}

declare enum MenuEntryType {
    Anchor = "anchor",
    Button = "button",
    Header = "header",
    Entry = "entry"
}

interface MenuEntryConfig {
    key?: string;
    type?: MenuEntryType;
    class?: string;
    icon?: string;
    anchor?: AnchorConfig;
    button?: ButtonConfig;
    header?: HeaderConfig;
    isActiveChecker?: Function | undefined;
    isOpened?: boolean;
    isActive?: boolean;
    keepOpenOnChildClick?: boolean;
    parent?: MenuEntryConfig | undefined;
    children?: MenuEntryConfig[];
    events?: EventsConfig | undefined;
}

declare enum MenuType {
    Hidden = "hidden",
    Always = "always",
    TabList = "tablist"
}

interface MenuConfig {
    modelValue?: MenuEntryConfig[];
    type?: MenuType;
    menuKey?: ValidModalKey;
    hiddenPosition?: 'left' | 'right' | 'bottom' | 'top';
    closeOnClickOutside?: boolean;
    http?: HttpCallConfig;
}

interface StepProcessStepConfig {
    key: string;
    nextButton?: ButtonConfig | false;
    nextHidden?: boolean | ((currentStep: StepProcessStepConfig, steps: StepProcessStepConfig[]) => boolean);
    prevButton?: ButtonConfig | false;
    prevHidden?: boolean | ((currentStep: StepProcessStepConfig, steps: StepProcessStepConfig[]) => boolean);
}

interface StepProcessConfig {
    modelValue?: string | number;
    loading?: boolean;
    steps?: Array<StepProcessStepConfig>;
    header?: HeaderConfig;
    nextButton?: ButtonConfig;
    prevButton?: ButtonConfig;
    buttonNavPosition?: ItemCrudButtonNavPosition;
    buttonNavVisibility?: ItemCrudButtonNavVisibility;
    dots?: boolean;
    dotsNumbers?: boolean;
}

type ValidTabKey = string | number;

declare enum TabType {
    Always = "always",
    Lazy = "lazy",
    Ever = "ever"
}

interface TabConfig {
    key: ValidTabKey;
    type?: TabType;
    hash?: string;
    class?: string;
    containerClass?: string;
    button: ButtonConfig;
    content: Array<PolymorphicElementConfig>;
}

interface TabsConfig {
    modelValue?: ValidTabKey;
    id?: string;
    class?: string;
    contentClass?: string;
    useSession?: boolean;
    cacheLifetime?: number;
    tabs: Array<TabConfig>;
    navStartButtons?: Array<ButtonConfig>;
    navEndButtons?: Array<ButtonConfig>;
    navPostEndButtonsElements?: Array<PolymorphicElementConfig>;
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

declare enum WebElementType {
    LktAnchor = "lkt-anchor",
    LktLayoutAccordion = "lkt-layout-accordion",
    LktTextAccordion = "lkt-text-accordion",
    LktLayoutBox = "lkt-layout-box",
    LktTextBox = "lkt-text-box",
    LktLayoutBanner = "lkt-layout-banner",
    LktTextBanner = "lkt-text-banner",
    LktButton = "lkt-button",
    LktLayout = "lkt-layout",
    LktHeader = "lkt-header",
    LktIcon = "lkt-icon",
    LktIcons = "lkt-icons",
    LktImage = "lkt-image",
    LktText = "lkt-text"
}

declare enum WebElementLayoutType {
    Grid = "grid",
    FlexRow = "flex-row",
    FlexRows = "flex-rows",
    FlexColumn = "flex-column"
}

interface WebElementLayoutConfig {
    type?: WebElementLayoutType;
    amountOfItems?: [];
    alignItems?: [];
    justifyContent?: [];
    columns: [];
    alignSelf: [];
    justifySelf: [];
}

declare class WebElement extends LktItem implements WebElementConfig {
    static lktDefaultValues: (keyof WebElementConfig)[];
    id?: number | string | undefined;
    type: WebElementType;
    component?: string;
    props: WebElementPropsConfig;
    children: WebElement[];
    subElements: WebElement[];
    layout: WebElementLayoutConfig;
    config: WebElementConfiguration;
    keyMoment: string;
    uid: string;
    constructor(data?: Partial<WebElementConfig>);
    updateKeyMoment(): void;
    addChild(child: WebElement, index?: number | undefined): this;
    getClone(): WebElement;
    static createByType(type: WebElementType): WebElement;
    addSubElement(): this;
    isCustom(): boolean;
    getCustomSettings(): WebElementSettings | undefined;
}

interface WebElementConfiguration {
    hasHeader?: boolean;
    hasSubHeader?: boolean;
    hasIcon?: boolean;
    amountOfCallToActions?: number;
    callToActions?: Array<WebElement>;
}

interface WebElementConfig {
    id?: number | string | undefined;
    type: WebElementType;
    component?: string;
    props: WebElementPropsConfig;
    children?: WebElementConfig[];
    layout: WebElementLayoutConfig;
    config: WebElementConfiguration;
    subElements: WebElementConfig[];
}

declare enum WebPageStatus {
    Draft = "draft",
    Public = "public",
    Scheduled = "scheduled"
}

interface WebPageConfig {
    id: number | string | undefined;
    name: string;
    slug?: string;
    status?: WebPageStatus;
    scheduledDate?: Date;
    nameData?: MultiLangValue;
    webElements: Array<WebElement>;
}

declare class LktStrictItem extends LktItem {
    lktStrictItem: boolean;
}

declare class LktColor extends LktStrictItem {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(data: LktObject);
    static fromHexColor(color: string): LktColor;
    toString(): string;
    getContrastFontColor(): "#000000" | "#ffffff";
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

declare class Anchor extends LktItem implements AnchorConfig {
    static lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof AnchorConfig)[];
    type: AnchorType;
    to?: ValidAnchorTo;
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
    text?: ValidTextValue;
    icon?: IconConfig | string;
    prop: LktObject;
    events?: AnchorEvents | undefined;
    getHref(): string;
    constructor(data?: Partial<AnchorConfig>);
}

declare class Banner extends LktItem implements BannerConfig {
    static lktDefaultValues: (keyof BannerConfig)[];
    type: BannerType;
    header?: HeaderConfig;
    subHeader?: HeaderConfig;
    art?: ImageConfig;
    media?: ImageConfig;
    opacity?: string | number;
    globalButton?: ButtonConfig | undefined;
    navButtons?: Array<ButtonConfig>;
    constructor(data?: Partial<BannerConfig>);
}

declare class Box extends LktItem implements BoxConfig {
    static lktDefaultValues: (keyof BoxConfig)[];
    style: string;
    class: string;
    contentClass?: string;
    icon: IconConfig | string;
    header?: HeaderConfig;
    title?: string;
    iconAtEnd: boolean;
    constructor(data?: Partial<BoxConfig>);
}

declare class Button extends LktItem implements ButtonConfig {
    lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof ButtonConfig)[];
    type: ButtonType;
    name: string;
    class: string;
    containerClass: string;
    value: string;
    disabled: ValidIsDisabledValue;
    loading: boolean;
    wrapButton: boolean;
    splitIcon: string;
    resource: string;
    resourceData: LktObject;
    modal: ValidModalName;
    modalKey: ValidModalKey;
    modalData: Partial<ModalConfig> | Function;
    confirmModal: ValidModalName;
    confirmModalKey: ValidModalKey;
    confirmData: Partial<ModalConfig>;
    modalCallbacks?: Array<ModalCallbackConfig>;
    menuKey?: ValidModalKey;
    text: ValidTextValue;
    textOn: ValidTextValue;
    textOff: ValidTextValue;
    iconOn: ValidTextValue;
    iconOff: ValidTextValue;
    iconEndOn: ValidTextValue;
    iconEndOff: ValidTextValue;
    icon: string;
    dot: ValidIconDot;
    iconEnd: string;
    img: string;
    showTooltipOnHoverDelay: number;
    checked: boolean;
    clickRef?: Element | VueElement;
    openTooltip: boolean;
    tabindex: ValidTabIndex;
    anchor?: AnchorConfig;
    showTooltipOnHover?: boolean;
    hideTooltipOnLeave?: boolean;
    splitClass?: string;
    splitButtons?: Array<ButtonConfig>;
    tooltip?: TooltipConfig;
    prop?: LktObject;
    events?: ButtonEvents | undefined;
    constructor(data?: Partial<ButtonConfig>);
    isDisabled(): boolean | undefined;
}

declare class Column extends LktItem implements ColumnConfig {
    lktExcludedProps: string[];
    lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof ColumnConfig)[];
    type: ColumnType;
    key: string;
    label: string;
    class: string;
    sortable: boolean;
    ensureFieldLabel: boolean;
    hidden: boolean | ((data: ConditionalColumnArgs) => boolean);
    formatter: Function | undefined;
    checkEmpty: Function | undefined;
    colspan: ValidColSpan;
    preferSlot: Function | boolean;
    isForRowKey: boolean;
    isForAccordionHeader: boolean;
    isCalendarDate?: boolean;
    isCalendarGroup?: boolean;
    extractTitleFromColumn: string;
    slotData: LktObject;
    field: FieldConfig | undefined;
    anchor: AnchorConfig | undefined;
    button: ButtonConfig | undefined;
    constructor(data?: Partial<ColumnConfig>);
}

declare class Counter extends LktItem implements CounterConfig {
    static lktDefaultValues: (keyof CounterConfig)[];
    type?: CounterType;
    from?: Date | number;
    to?: Date | number;
    step?: number;
    timeout?: number;
    dateFormat?: string;
    seconds?: number;
    view?: CounterView;
    progress?: ProgressConfig;
    events?: CounterEvents;
    constructor(data?: Partial<CounterConfig>);
}

declare class DocPage extends LktItem implements DocPageConfig {
    static lktDefaultValues: (keyof DocPageConfig)[];
    id?: string;
    size?: DocPageSize;
    skipPageNumber?: boolean;
    frontPage?: boolean;
    title?: string;
    img?: string;
    icon?: string;
    constructor(data?: Partial<DocPageConfig>);
}

declare class Dot extends LktItem implements AnchorConfig {
    static lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof DotConfig)[];
    text?: ValidTextValue;
    class: string;
    constructor(data?: Partial<DotConfig>);
}

declare class Field extends LktItem implements FieldConfig {
    static lktDefaultValues: (keyof FieldConfig)[];
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
    hidden: boolean;
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
    featuredButton: string;
    infoButtonEllipsis: boolean;
    fileName: string;
    customButtonText: string;
    customButtonClass: string;
    options: string | Option[] | OptionConfig[];
    multiple: boolean;
    multipleDisplay: MultipleOptionsDisplay;
    multipleDisplayEdition: MultipleOptionsDisplay;
    searchable: boolean;
    icon: string | Function | IconConfig;
    download: string | Function;
    modal: string | Function;
    modalKey: string | number | Function;
    modalData: LktObject | Function;
    validation: FieldValidationConfig;
    configOn?: BooleanFieldConfig;
    configOff?: BooleanFieldConfig;
    readMode?: boolean | (() => boolean);
    allowReadModeSwitch: boolean;
    readModeConfig?: FieldReadModeConfig;
    prop?: LktObject;
    optionValueType: string;
    optionsConfig?: OptionsConfig;
    fileUploadHttp?: HttpCallConfig;
    fileUploadButton: ButtonConfig;
    createButton?: ButtonConfig | false;
    callToActionButton?: ButtonConfig | false;
    tooltipConfig?: TooltipConfig;
    fileBrowserConfig?: FileBrowserConfig;
    canRender: boolean;
    canDisplay: boolean;
    events?: FieldEvents;
    constructor(data?: Partial<FieldConfig>);
}

declare class FormInstance extends LktItem implements FormConfig {
    static lktDefaultValues: (keyof FormConfig)[];
    items: Array<FormItemConfig>;
    submitButton: ButtonConfig | false;
    container?: PolymorphicElementConfig;
    header?: HeaderConfig;
    uiConfig?: Partial<FormUiConfig>;
    postSubmitButtonContent?: Array<PolymorphicElementConfig>;
    constructor(data?: Partial<FormConfig>);
    static mkFieldItemConfig(key: string, field: FieldConfig, modificationsField?: FieldConfig, displayConfig?: RenderAndDisplayProps): FormItemConfig;
    static mkFormItemConfig(form: FormConfig, displayConfig?: RenderAndDisplayProps): FormItemConfig;
    static mkComponentItemConfig(component: FormComponentConfig, displayConfig?: RenderAndDisplayProps): FormItemConfig;
    static mkSlotItemConfig(key: string, slotData?: LktObject): FormItemConfig;
}

declare class FileEntity extends LktItem implements FileEntityConfig {
    static lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof FileEntityConfig)[];
    id?: number | string | undefined;
    type: FileEntityType;
    name: string;
    src: string;
    children: FileEntity[];
    isPicked: boolean;
    parent?: number | string | undefined;
    constructor(data?: Partial<FileEntityConfig>);
}

declare class Header extends LktItem implements HeaderConfig {
    static lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof HeaderConfig)[];
    tag?: HeaderTag;
    class?: string;
    text?: string;
    icon?: string | IconConfig;
    image?: ImageConfig;
    topStartButtons?: Array<ButtonConfig>;
    topStartContent?: Array<PolymorphicElementConfig>;
    topEndButtons?: Array<ButtonConfig>;
    topEndContent?: Array<PolymorphicElementConfig>;
    bottomButtons?: Array<ButtonConfig>;
    constructor(data?: Partial<HeaderConfig>);
}

declare class Icon extends LktItem implements IconConfig {
    static lktDefaultValues: (keyof IconConfig)[];
    icon?: ValidTextValue;
    text?: ValidTextValue;
    class?: ValidTextValue;
    type?: IconType;
    position?: IconPosition;
    events?: EventsConfig | undefined;
    constructor(data?: Partial<IconConfig>);
}

declare class Image extends LktItem implements ImageConfig {
    static lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof ImageConfig)[];
    src?: string;
    alt?: string;
    text?: string;
    class?: string;
    imageStyle?: string | LktObject;
    constructor(data?: Partial<ImageConfig>);
}

declare class ItemCrud extends LktItem implements ItemCrudConfig {
    static lktDefaultValues: (keyof ItemCrudConfig)[];
    modelValue: LktObject;
    modifications: LktObject;
    editing: boolean;
    perms: ValidTablePermission[];
    customData?: LktObject;
    form?: FormConfig | Function;
    formUiConfig?: Partial<FormUiConfig>;
    mode: ItemCrudMode;
    view: ItemCrudView;
    visibleView?: ModificationView;
    modificationViews?: boolean | Array<ModificationView>;
    editModeButton: ButtonConfig | false;
    dropButton: ButtonConfig | false;
    createButton: ButtonConfig | false;
    createAndNewButton: ButtonConfig | false;
    updateButton: ButtonConfig | false;
    groupButton: ButtonConfig | boolean;
    groupButtonAsModalActions: boolean;
    modalConfig: ModalConfig;
    saveConfig: SaveConfig;
    title: string;
    header?: HeaderConfig;
    readResource: string;
    readData: LktObject;
    beforeEmitUpdate: Function | undefined;
    dataStateConfig: DataStateConfig;
    buttonNavPosition?: ItemCrudButtonNavPosition;
    buttonNavVisibility?: ItemCrudButtonNavVisibility;
    notificationType?: NotificationType;
    enabledSaveWithoutChanges: boolean;
    redirectOnCreate?: string | ((id: number | string) => string);
    redirectOnDrop?: string | (() => string);
    differencesTableConfig?: TableConfig | TableConfigReturnFunction;
    navStartButtons?: Array<ButtonConfig>;
    navStartButtonsEditing?: Array<ButtonConfig>;
    navEndButtons?: Array<ButtonConfig>;
    navEndButtonsEditing?: Array<ButtonConfig>;
    events: LktObject;
    updateConfig?: ItemCrudSaveConfig;
    constructor(data?: Partial<ItemCrudConfig>);
}

declare class Login extends LktItem implements LoginConfig {
    static lktDefaultValues: (keyof LoginConfig)[];
    loginForm?: FormConfig;
    singUpForm?: FormConfig;
    constructor(data?: Partial<LoginConfig>);
}

declare class Menu extends LktItem implements MenuConfig {
    static lktDefaultValues: (keyof MenuConfig)[];
    modelValue?: MenuEntryConfig[];
    type?: MenuType;
    menuKey?: ValidModalKey;
    http?: HttpCallConfig;
    closeOnClickOutside?: boolean;
    hiddenPosition?: 'left' | 'right' | 'bottom' | 'top';
    constructor(data?: Partial<MenuConfig>);
}

declare class MenuEntry extends LktItem implements MenuEntryConfig {
    static lktDefaultValues: (keyof MenuEntryConfig)[];
    key?: string;
    type?: MenuEntryType;
    class?: string;
    icon?: string;
    anchor?: AnchorConfig;
    button?: ButtonConfig;
    header?: HeaderConfig;
    isActiveChecker?: Function | undefined;
    isOpened?: boolean;
    isActive?: boolean;
    keepOpenOnChildClick?: boolean;
    parent?: MenuEntryConfig | undefined;
    children?: MenuEntryConfig[];
    events?: EventsConfig | undefined;
    constructor(data?: Partial<MenuEntryConfig>);
    doClose(): void;
}

declare class Modal extends LktItem implements ModalConfig {
    static lktDefaultValues: (keyof ModalConfig)[];
    size: string;
    header?: HeaderConfig;
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
    headerActionsButton?: Partial<ButtonConfig>;
    type: ModalType;
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
    resourceData?: LktObject;
    dateKey?: string;
    events?: PaginatorEvents;
    constructor(data?: Partial<PaginatorConfig>);
}

declare class Progress extends LktItem implements ProgressConfig {
    static lktAllowUndefinedProps: string[];
    static lktDefaultValues: (keyof ProgressConfig)[];
    modelValue?: number;
    animation?: ProgressAnimation;
    type?: ProgressType;
    duration?: number;
    pauseOnHover?: boolean;
    unit?: UnitConfig;
    header?: HeaderConfig;
    valueFormat?: ProgressValueFormat;
    text?: string | Function;
    circle?: CircleConfig;
    events?: ProgressEvents;
    constructor(data?: Partial<ProgressConfig>);
}

declare class StepProcess extends LktItem implements StepProcessConfig {
    static lktDefaultValues: (keyof StepProcessConfig)[];
    modelValue?: string | number;
    loading?: boolean;
    steps?: Array<StepProcessStepConfig>;
    header?: HeaderConfig;
    nextButton?: ButtonConfig;
    prevButton?: ButtonConfig;
    buttonNavPosition?: ItemCrudButtonNavPosition;
    buttonNavVisibility?: ItemCrudButtonNavVisibility;
    constructor(data?: Partial<StepProcessConfig>);
}

declare class Table extends LktItem implements TableConfig {
    static lktDefaultValues: (keyof TableConfig)[];
    modelValue: LktObject[];
    type?: TableType;
    columns: ColumnConfig[];
    noResultsText?: string;
    hideTableHeader?: boolean;
    hideEmptyColumns?: boolean;
    itemDisplayChecker?: Function;
    customItemSlotName?: Function;
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
    carousel?: CarouselConfig;
    calendar?: CalendarConfig;
    calendarGroups?: CalendarGroupsConfig;
    accordion?: AccordionConfig;
    header?: HeaderConfig;
    title?: string;
    titleTag?: string;
    titleIcon?: string;
    headerClass?: string;
    editModeButton?: ButtonConfig;
    saveButton?: ButtonConfig;
    createButton?: ButtonConfig;
    hiddenSave?: boolean;
    groupButton?: ButtonConfig | boolean;
    wrapContentTag?: string;
    wrapContentClass?: string;
    itemsContainerClass?: string;
    itemContainerClass?: string | Function;
    itemContainerStyle?: string | Function;
    skipTableItemsContainer?: boolean;
    addNavigation?: boolean;
    createEnabledValidator?: Function;
    newValueGenerator?: Function;
    requiredItemsForTopCreate?: number;
    requiredItemsForBottomCreate?: number;
    slotItemVar?: string;
    itemSlotComponent?: string | Function | Component;
    itemSlotData?: LktObject | Function;
    itemSlotEvents?: LktObject | Function;
    events?: TableEvents;
    switchableTypes?: Array<TableType>;
    switchableTypesButtons?: TableTypeSwitchButtonsConfig;
    useItemSlot: boolean;
    filtersForm?: FormConfig;
    constructor(data?: Partial<TableConfig>);
}

declare class Tabs extends LktItem implements TabsConfig {
    static lktDefaultValues: (keyof TabsConfig)[];
    modelValue: string | number;
    id?: string;
    class?: string;
    contentClass?: string;
    useSession?: boolean;
    cacheLifetime?: number;
    tabs: Array<TabConfig>;
    navStartButtons?: Array<ButtonConfig>;
    navEndButtons?: Array<ButtonConfig>;
    navPostEndButtonsElements?: Array<PolymorphicElementConfig>;
    constructor(data?: Partial<TabsConfig>);
}

declare class Tag extends LktItem implements TagConfig {
    static lktDefaultValues: (keyof TagConfig)[];
    class?: string;
    text?: ValidTextValue;
    featuredText?: ValidTextValue;
    icon?: string;
    iconAtEnd?: boolean;
    featuredAtStart?: boolean;
    type?: TagType;
    constructor(data?: Partial<TagConfig>);
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
    indicator: boolean;
    class: string;
    contentClass: string;
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
    showOnReferrerHover: boolean;
    showOnReferrerHoverDelay: number;
    hideOnReferrerLeave: boolean;
    hideOnReferrerLeaveDelay: number;
    compensationX: number;
    compensationY: number;
    compensateGlobalContainers: boolean;
    remoteControl: boolean;
    teleport: string;
    content?: Array<PolymorphicElementConfig>;
    constructor(data?: Partial<TooltipConfig>);
}

declare class WebPage extends LktItem implements WebPageConfig {
    static lktDefaultValues: (keyof WebPageConfig)[];
    keyMoment: string;
    id: number | string | undefined;
    name: string;
    nameData: MultiLangValue;
    slug: string;
    slugData: MultiLangValue;
    status?: WebPageStatus;
    scheduledDate?: Date;
    webElements: Array<WebElement>;
    crudConfig: ItemCrudConfig;
    constructor(data?: Partial<WebPageConfig>);
    updateKeyMoment(): void;
    updateSlug(): void;
}

declare enum AppSize {
    XXS = 1,// Tiny devices
    XS = 2,// Small phones
    SM = 3,// Large Phones
    MD = 4,// Tablets
    LG = 5,// Large laptops
    XL = 6,//  Desktop
    XXL = 7
}

declare enum DayOfWeek {
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6
}

declare enum SortDirection {
    Asc = "asc",
    Desc = "desc"
}

declare enum ToggleMode {
    Lazy = "lazy",
    Ever = "ever"
}

declare enum WebParentType {
    Page = "page",
    Element = "element"
}

type ScanPropTarget = string | number | undefined | Function | LktObject;

type ValidCustomSlot = string | Component | undefined;

type ValidModalComponent = string | VueElement | Component;

declare class SafeString {
    private readonly value;
    constructor(input: ValidSafeStringValue);
    getValue(...args: any[]): string;
}

type ValidSafeStringValue = string | ((...args: any[]) => string) | undefined | SafeString;

type ValidScanPropTarget = ScanPropTarget | ((...args: any[]) => ScanPropTarget);

interface ProgressTextSlot {
    text: string;
    progress: number;
    unit?: UnitConfig;
}

declare const getAdminMenuEntries: (data: {
    menuStatus: Ref<boolean>;
}) => MenuEntryConfig[];

declare const getAnchorHref: (anchor: AnchorConfig) => string;

declare const setLktAppReady: (state: boolean) => void;
declare const getLktAppReady: () => Ref<boolean>;
declare const setLktAppLoading: (state: boolean) => void;
declare const getLktAppLoading: () => Ref<boolean>;
declare const updateMainHeader: (config: HeaderConfig) => void;

interface CalendarConfigSetup {
    firstDayOfWeek?: DayOfWeek;
    days?: Array<string>;
    months?: Array<string>;
    smDays?: Array<string>;
    smMonths?: Array<string>;
}

declare const setupCalendarConfig: (cfg: CalendarConfigSetup) => void;

declare const extractPropValue: (needle: ValidScanPropTarget, haystack: LktObject) => ValidScanPropTarget;
declare const extractI18nValue: (needle: ValidTextValue) => any;
declare const prepareResourceData: (resourceData: LktObject | undefined, haystack: LktObject) => LktObject;

declare const getDefaultLktTextWebElement: (text?: string) => WebElement;
declare const getDefaultLktAnchorWebElement: () => WebElement;
declare const getDefaultLktButtonWebElement: () => WebElement;
declare const getDefaultLktLayoutWebElement: () => WebElement;
declare const getDefaultLktTextBoxWebElement: () => WebElement;
declare const getDefaultLktLayoutBoxWebElement: () => WebElement;
declare const getDefaultLktLayoutAccordionWebElement: () => WebElement;
declare const getDefaultLktTextAccordionWebElement: () => WebElement;
declare const getDefaultLktHeaderWebElement: () => WebElement;
declare const getDefaultLktIconWebElement: () => WebElement;
declare const getDefaultLktImageWebElement: () => WebElement;
declare const getDefaultLktTextBannerWebElement: () => WebElement;

declare const ensureButtonConfig: (buttonConfig: Partial<ButtonConfig> | undefined | false, settingsConfig: Partial<ButtonConfig>) => Partial<ButtonConfig>;
declare const ensureFieldConfig: (config: Partial<FieldConfig> | undefined, settingsConfig: Partial<FieldConfig>) => Partial<FieldConfig>;

declare const lktDebug: (component: string, ...args: any[]) => void;

declare const getFormDataState: (value: LktObject, modifications: LktObject, form: FormConfig) => DataState;
declare const getFormFieldsKeys: (form: FormConfig) => string[];
declare const getFormSlotKeys: (form: FormConfig) => string[];

declare enum ModalRegisterType {
    Quick = "quick",
    Full = "full"
}

interface ModalRegister {
    name: ValidModalName;
    type: ModalRegisterType;
    component: ValidModalComponent;
    config?: Partial<ModalConfig>;
}

interface ModalCanvasInterface {
    refresh: Function;
    refreshModal: Function;
    execModal: Function;
}

declare const addModal: (config: ModalRegister) => void;
declare const addConfirm: (modalConfig: ModalRegister) => void;
declare const openModal: (modalConfig: ModalConfig, componentProps: LktObject) => void;
declare const closeModal: (modalConfig: ModalConfig) => void;
declare const setModalCanvas: (canvas: ModalCanvasInterface) => void;
declare const openConfirm: (modalConfig: ModalConfig, componentProps: LktObject) => void;
declare const closeConfirm: (modalConfig: ModalConfig) => void;
declare const runModalCallback: (cfg: ModalCallbackConfig) => void;

declare const createColumn: (data: ColumnConfig) => Column;

declare const applyTextFormat: (command: string) => void;
declare const applyTextAlignment: (alignment: string) => void;
declare const changeTextColor: (color: string) => void;
declare const changeBackgroundColor: (color: string) => void;
declare const changeFontFamily: (event: Event, fontFamily: string) => void;

declare class MenuController {
    static config: LktObject;
    static addMenu(key: ValidModalKey, initialStatus: Ref<boolean>): typeof MenuController;
    static toggleMenu(key: ValidModalKey): any;
    static closeMenu(key: ValidModalKey): any;
    static openMenu(key: ValidModalKey): any;
    static getMenuStatus(key: ValidModalKey): any;
}

declare class ModalController {
    private static config;
    private static components;
    private static zIndex;
    static canvas?: ModalCanvasInterface | undefined;
    static addModal(modalConfig: ModalRegister): typeof ModalController;
    private static findConfig;
    private static getInstanceIndex;
    private static getModalInfo;
    private static focus;
    static open(modalConfig: ModalConfig, componentProps?: LktObject, legacy?: boolean): any;
    static close(modalConfig: ModalConfig): void;
    static reOpen(config: ModalConfig, componentProps?: LktObject, legacy?: boolean): void;
    static execModal(config: ModalConfig, method: string, componentProps?: LktObject): void;
    static refresh(config: ModalConfig, componentProps?: LktObject): void;
    static runModalCallback(cfg: ModalCallbackConfig): any;
    static updateModalKey(modalConfig: ModalConfig, newKey: ValidModalKey): typeof ModalController | undefined;
}

interface RenderModalConfig {
    componentProps: LktObject;
    modalConfig: ModalConfig;
    modalRegister: ModalRegister;
    index: string;
    legacy: boolean;
    legacyData?: {
        props?: LktObject;
    };
}

interface WebElementSettings {
    id: string;
    label?: string;
    type: 'component' | 'index';
    icon?: string;
    component?: string | Component;
    componentProps?: LktObject;
    options?: {
        textEditor?: boolean;
    };
    tableConfig?: TableConfig;
}

interface WebElementAppearanceSettings {
    key: string | Array<string>;
    options: Array<OptionConfig>;
}

declare class WebElementController {
    private static elements;
    private static customAppearance;
    static addWebElement(element: WebElementSettings): typeof WebElementController;
    static getElements(): WebElementSettings[];
    static getCustomWebElementSettings(needle: string): WebElementSettings | undefined;
    static setCustomAppearance(config: WebElementAppearanceSettings): typeof WebElementController;
    static getCustomAppearance(component: string): any;
}

interface WebPageSettings {
    id: string;
    code: string;
    label?: string;
    icon?: string;
}

declare class WebPageController {
    private static pages;
    private static defaultPageEnabled;
    static setDefaultPageEnabled(status: boolean): typeof WebPageController;
    static hasDefaultPageEnabled(): boolean;
    static addWebPage(element: WebPageSettings): typeof WebPageController;
    static getPages(): WebPageSettings[];
    static getCustomWebPageSettings(needle: string): WebPageSettings | undefined;
}

interface WebItemConfig {
    code: string;
    icon?: string;
    labelSingle: string;
    labelMany: string;
    many: TableConfig | false;
    single: ItemCrudConfig;
    appHeaderSingle?: HeaderConfig | ((data: LktObject) => HeaderConfig);
    appHeaderMany?: HeaderConfig;
    itemGenerator?: ((data: LktObject) => LktObject);
}

interface WebItemsStack {
    [key: string]: WebItemConfig;
}

declare class WebItemsController {
    static stack: WebItemsStack;
    static setWebItemConfig(config: WebItemConfig): typeof WebItemsController;
    static getItems(): WebItemConfig[];
    static getWebItemSettings(needle: string): WebItemConfig;
}

declare class CalendarController {
    static firstDayOfWeek: Ref<DayOfWeek>;
    static days: Array<string>;
    static months: Array<string>;
    static smDays: Array<string>;
    static smMonths: Array<string>;
    static setup(cfg: CalendarConfigSetup): void;
    static getDaysAsOptions(): OptionConfig[];
}

interface AppRoutingConfig {
    router?: Router;
    history?: RouterHistory;
    routes?: Array<RouteRecordRaw>;
    beforeEachRouteCallback?: Function;
}

interface AppSetupConfig {
    i18nResource?: string;
    setupResource?: string;
}

interface LktAppConfig {
    routing?: AppRoutingConfig;
    setup?: AppSetupConfig;
    mainMenu?: Menu;
    bottomBar?: Menu;
    hasMainMenu?: boolean | (() => boolean);
    hasBottomBar?: boolean | (() => boolean);
    hasMainHeader?: boolean | (() => boolean);
    replaceMainMenuButtonWithBack?: boolean | (() => boolean);
    mainHeader?: HeaderConfig;
}

declare class AppStateController {
    static lktAppSize: Ref<AppSize>;
    static lktAdminEnabled: Ref<boolean>;
    static lktAppLoading: Ref<boolean>;
    static lktAppReady: Ref<boolean>;
    static lktAppSetup: Ref<LktObject>;
    static lktMainMenu?: Menu;
    static lktBottomBar?: Menu;
    static hasMainHeader?: boolean | ((args: {
        route: RouteLocationNormalizedLoaded;
    }) => boolean);
    static hasMainMenu?: boolean | ((args: {
        route: RouteLocationNormalizedLoaded;
    }) => boolean);
    static hasBottomBar?: boolean | ((args: {
        route: RouteLocationNormalizedLoaded;
    }) => boolean);
    static replaceMainMenuButtonWithBack?: boolean | ((args: {
        route: RouteLocationNormalizedLoaded;
    }) => boolean);
    static setup?: AppSetupConfig;
    static mainHeader: Ref<HeaderConfig | undefined>;
}

/**
 * Export common interfaces
 */

declare function getDefaultValues<T>(cls: {
    new (): T;
    lktDefaultValues: (keyof T)[];
}): Partial<T>;

export { Accordion, type AccordionConfig, AccordionToggleMode, AccordionType, Anchor, type AnchorConfig, type AnchorEvents, AnchorType, AppSize, AppStateController, type AriaConfig, Banner, type BannerConfig, BannerType, type BeforeCloseModalData, type BooleanFieldConfig, Box, type BoxConfig, Button, type ButtonConfig, type ButtonEvents, ButtonType, type CalendarConfig, type CalendarConfigSetup, CalendarController, type CalendarDisabledConfig, type CalendarEvents, type CalendarGroupsConfig, type CalendarItemConfig, type CalendarNavBarConfig, CalendarNavBarElements, type CalendarNavigationConfig, type CircleConfig, type ClickEventArgs, Column, type ColumnConfig, ColumnType, type ConditionalColumnArgs, Counter, type CounterConfig, type CounterEvents, CounterType, CounterView, DayOfWeek, DocPage, type DocPageConfig, DocPageSize, Dot, type DotConfig, type DragConfig, type EmptyModalKey, type EventsConfig, Field, FieldAutoValidationTrigger, type FieldConfig, type FieldEvents, type FieldLoadOptionsEndEventArgs, type FieldReadModeConfig, FieldReportLevel, FieldReportType, FieldType, FieldValidation, type FieldValidationConfig, type FieldValidationEndEventArgs, FieldValidationType, type FileBrowserConfig, FileEntity, type FileEntityConfig, FileEntityType, type FormComponentConfig, type FormConfig, FormInstance, type FormItemConfig, type FormUiConfig, Header, type HeaderConfig, HeaderTag, type HttpCallConfig, type HttpCallEvents, Icon, type IconConfig, IconPosition, IconType, Image, type ImageConfig, type IntervalConfig, type IsDisabledChecker, type IsDisabledCheckerArgs, ItemCrud, ItemCrudButtonNavPosition, ItemCrudButtonNavVisibility, type ItemCrudConfig, type ItemCrudEvents, ItemCrudMode, type ItemCrudSaveConfig, ItemCrudView, type ItemSlotComponentConfig, type LktAppConfig, LktColor, LktItem, type LktObject, LktSettings, LktStrictItem, Login, type LoginConfig, Menu, type MenuConfig, MenuController, MenuEntry, type MenuEntryConfig, MenuEntryType, MenuType, Modal, ModalCallbackAction, type ModalCallbackConfig, type ModalConfig, ModalController, type ModalRegister, ModalRegisterType, ModalType, ModificationView, type MultiLangValue, MultipleOptionsDisplay, NotificationType, Option, type OptionConfig, type OptionsConfig, Paginator, type PaginatorConfig, type PaginatorEvents, PaginatorType, type PolymorphicElementConfig, Progress, ProgressAnimation, type ProgressAnimationConfig, type ProgressConfig, type ProgressEvents, type ProgressTextSlot, ProgressType, ProgressValueFormat, type RenderAndDisplayProps, type RenderModalConfig, type RouteConfig, SafeString, type SaveConfig, SaveType, type ScanPropTarget, SortDirection, StepProcess, type StepProcessConfig, type StepProcessStepConfig, type TabConfig, TabType, Table, type TableConfig, type TableEvents, TablePermission, TableRowType, TableType, type TableTypeSwitchButtonsConfig, Tabs, type TabsConfig, Tag, type TagConfig, TagType, Toast, type ToastConfig, ToastPositionX, ToastType, ToggleMode, Tooltip, type TooltipConfig, TooltipLocationX, TooltipLocationY, TooltipPositionEngine, type TooltipSettings, TooltipSettingsController, type TrackConfig, type UnitConfig, type ValidBeforeCloseModal, type ValidColSpan, type ValidCustomSlot, type ValidDragConfig, type ValidFieldMinMax, type ValidFieldValue, type ValidIconDot, type ValidIsDisabledValue, type ValidModalComponent, type ValidModalKey, type ValidModalName, type ValidOptionValue, type ValidPaginatorConfig, type ValidSafeStringValue, type ValidScanPropTarget, type ValidTabIndex, type ValidTabKey, type ValidTablePermission, type ValidTableRowTypeValue, type ValidTextValue, ValidationCode, ValidationStatus, WebElement, type WebElementConfig, WebElementController, WebElementLayoutType, type WebElementPropsConfig, type WebElementSettings, WebElementType, type WebItemConfig, WebItemsController, WebPage, type WebPageConfig, WebPageController, type WebPageSettings, WebPageStatus, WebParentType, addConfirm, addModal, applyTextAlignment, applyTextFormat, booleanFieldTypes, changeBackgroundColor, changeFontFamily, changeTextColor, closeConfirm, closeModal, createColumn, ensureButtonConfig, ensureFieldConfig, extractI18nValue, extractPropValue, fieldTypesWithOptions, fieldTypesWithoutClear, fieldTypesWithoutUndo, fieldsWithMultipleMode, getAdminMenuEntries, getAnchorHref, getDefaultLktAnchorWebElement, getDefaultLktButtonWebElement, getDefaultLktHeaderWebElement, getDefaultLktIconWebElement, getDefaultLktImageWebElement, getDefaultLktLayoutAccordionWebElement, getDefaultLktLayoutBoxWebElement, getDefaultLktLayoutWebElement, getDefaultLktTextAccordionWebElement, getDefaultLktTextBannerWebElement, getDefaultLktTextBoxWebElement, getDefaultLktTextWebElement, getDefaultValues, getFormDataState, getFormFieldsKeys, getFormSlotKeys, getLktAppLoading, getLktAppReady, lktDebug, openConfirm, openModal, prepareResourceData, runModalCallback, setLktAppLoading, setLktAppReady, setModalCanvas, setupCalendarConfig, textFieldTypes, textFieldTypesWithOptions, updateMainHeader };
