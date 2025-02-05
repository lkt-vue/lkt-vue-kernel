import { RouteLocationRaw } from 'vue-router';
import { VueElement } from 'vue';

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
    lktAllowUndefinedProps: string[];
    lktExcludedProps: string[];
    lktDateProps: string[];
    lktStrictItem: boolean;
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
    constructor(data?: LktObject);
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
    prop?: LktObject;
    itemType?: string;
    optionValueType?: string;
}

type EmptyModalKey = '_';

type ValidModalKey = string | Function | EmptyModalKey;

interface ModalConfig extends LktObject {
    size?: string;
    preTitle?: string;
    preTitleIcon?: string;
    title?: string;
    closeIcon?: string;
    closeConfirm?: string;
    closeConfirmKey?: string;
    showClose?: boolean;
    disabledClose?: boolean;
    disabledVeilClick?: boolean;
    hiddenFooter?: boolean;
    modalName?: string;
    modalKey?: ValidModalKey;
    zIndex?: number;
    beforeClose?: Function;
    item?: LktObject;
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
    referrer: HTMLElement;
    locationY?: TooltipLocationY;
    locationX?: TooltipLocationX;
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
}

interface DragConfig {
    isDraggable?: boolean | Function;
    isValid?: Function;
    canRender?: boolean | Function;
    dragKey?: string;
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

declare class Anchor extends LktItem implements AnchorConfig {
    lktAllowUndefinedProps: string[];
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
    constructor(data?: Partial<AnchorConfig>);
    getHref(): string;
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
    modalData?: ModalConfig;
    confirmModal?: ValidModalName;
    confirmModalKey?: ValidModalKey;
    confirmData?: ModalConfig;
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
    isAnchor?: boolean;
    onClickTo?: string;
    onClickToExternal?: boolean;
    download?: boolean;
    downloadFileName?: string;
    newTab?: boolean;
    showSwitch?: boolean;
    hiddenSwitch?: boolean;
}

declare class LktStrictItem extends LktItem {
    lktStrictItem: boolean;
}

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
    constructor(data?: FieldConfig);
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

type ValidSafeStringValue = string | ((...args: any[]) => string) | undefined | SafeString;

declare class SafeString {
    private readonly value;
    constructor(input: ValidSafeStringValue);
    getValue(...args: any[]): string;
}

type ValidColSpan = Function | boolean | number | undefined;

declare class Button extends LktItem implements ButtonConfig {
    lktAllowUndefinedProps: string[];
    type: ButtonType;
    name: string;
    palette: string;
    onClickTo: string;
    onClickToExternal: boolean;
    class: string;
    containerClass: string;
    value: string;
    disabled: boolean;
    loading: boolean;
    wrapContent: boolean;
    split: boolean;
    splitIcon: string;
    isAnchor: boolean;
    resource: string;
    resourceData: LktObject;
    modal: ValidModalName;
    modalKey: ValidModalKey;
    modalData: ModalConfig;
    confirmModal: ValidModalName;
    confirmModalKey: ValidModalKey;
    confirmData: ModalConfig;
    text: string;
    icon: string;
    iconDot: boolean;
    iconEnd: string;
    img: string;
    newTab: boolean;
    download: boolean;
    downloadFileName: string;
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
    constructor(data?: ButtonConfig);
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

declare class Column extends LktItem implements ColumnConfig {
    lktExcludedProps: string[];
    lktAllowUndefinedProps: string[];
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
    constructor(data: ColumnConfig);
    getHref(item: LktObject): string;
    doAction(item: LktObject): any;
}

declare enum ModalType {
    Modal = "modal",
    Confirm = "confirm"
}

declare enum SortDirection {
    Asc = "asc",
    Desc = "desc"
}

declare enum TableType {
    Table = "table",
    Item = "item",
    Ul = "ul",
    Ol = "ol"
}

/**
 * Export common interfaces
 */

declare function getDefaultValues<T>(cls: new () => T): T;

export { Anchor, type AnchorConfig, AnchorType, Button, type ButtonConfig, ButtonType, Column, ColumnType, type DragConfig, type EmptyModalKey, Field, FieldAutoValidationTrigger, type FieldConfig, FieldType, LktItem, type LktObject, LktStrictItem, type ModalConfig, ModalType, MultipleOptionsDisplay, Option, type OptionConfig, SafeString, SortDirection, TableType, ToggleMode, type TooltipConfig, TooltipLocationX, TooltipLocationY, TooltipPositionEngine, type ValidColSpan, type ValidFieldMinMax, type ValidFieldValue, type ValidModalKey, type ValidModalName, type ValidOptionValue, type ValidSafeStringValue, type ValidTabIndex, getDefaultValues };
