interface LktObject {
    [key: string]: any;
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
    lktDateProps: string[];
    lktStrictItem: boolean;
    feed(data?: LktObject): void;
    assignProp(key: string, value: any): void;
}

declare class Option extends LktItem implements OptionConfig {
    value: ValidOptionValue;
    label: string;
    data?: LktObject;
    disabled?: boolean;
    group?: string;
    icon?: string;
    modal?: string | Function;
}

type ValidFieldValue = string | number | boolean | LktObject | Option[];

interface FieldConfig {
    modelValue: ValidFieldValue;
    type?: FieldType;
    valid?: boolean;
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
    tabindex?: number;
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
    min?: number | string | undefined;
    max?: number | string | undefined;
    step?: number | string;
    enableAutoNumberFix?: boolean;
    emptyValueSlot?: string;
    optionSlot?: string;
    valueSlot?: string;
    editSlot?: string;
    slotData?: LktObject;
    resource?: string;
    resourceData?: LktObject;
    validationResource?: string;
    validationResourceData?: LktObject;
    autoValidation?: boolean;
    autoValidationType?: 'focus' | 'blur' | 'always';
    validationStack?: string;
    minNumbers?: number | string | undefined;
    maxNumbers?: number | string | undefined;
    minChars?: number | string | undefined;
    maxChars?: number | string | undefined;
    minUpperChars?: number | string | undefined;
    maxUpperChars?: number | string | undefined;
    minLowerChars?: number | string | undefined;
    maxLowerChars?: number | string | undefined;
    minSpecialChars?: number | string | undefined;
    maxSpecialChars?: number | string | undefined;
    checkEqualTo?: number | string | undefined;
    featuredButton?: string;
    infoButtonEllipsis?: boolean;
    fileName?: string;
    customButtonText?: string;
    customButtonClass?: string;
    options?: string | Option[];
    multiple?: boolean;
    multipleDisplay?: LktObject;
    multipleDisplayEdition?: LktObject;
    searchable?: boolean;
    autoloadOptionsResource?: boolean | 'feed';
    optionsDownload?: string | Function;
    optionsModal?: string | Function;
    optionsModalData?: LktObject | Function;
    optionsIcon?: string | Function;
    optionsLabelFormatter?: Function;
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

declare class LktStrictItem extends LktItem {
    lktStrictItem: boolean;
}

declare const enum ButtonType {
    Button = "button",
    Submit = "submit",
    Reset = "reset",
    Content = "content",
    Switch = "switch",
    HiddenSwitch = "hidden-switch"
}

export { ButtonType, type FieldConfig, FieldType, LktItem, type LktObject, LktStrictItem, Option, type OptionConfig, type TooltipConfig, TooltipLocationX, TooltipLocationY, TooltipPositionEngine, type ValidFieldValue, type ValidOptionValue };
