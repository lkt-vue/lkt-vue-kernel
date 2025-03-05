import {LktObject} from './../interfaces/LktObject.ts';
import {FieldType} from './../enums/FieldType.ts';
import {ValidFieldValue} from './../types/ValidFieldValue.ts';
import {Option} from '../instances/Option.ts';
import {MultipleOptionsDisplay} from "../enums/MultipleOptionsDisplay.ts";
import {ValidTabIndex} from "../types/ValidTabIndex.ts";
import {ValidFieldMinMax} from "../types/ValidFieldMinMax.ts";
import {FieldValidationConfig} from "./FieldValidationConfig.ts";
import {FieldValidationEndEventArgs} from "../arguments/FieldValidationEndEventArgs.ts";

export interface FieldConfig {
    modelValue?: ValidFieldValue
    type?: FieldType
    valid?: boolean | undefined
    placeholder?: string
    searchPlaceholder?: string
    label?: string
    labelIcon?: string
    labelIconAtEnd?: boolean
    name?: string
    autocomplete?: boolean
    disabled?: boolean | Function
    readonly?: boolean
    readMode?: boolean
    allowReadModeSwitch?: boolean
    tabindex?: ValidTabIndex
    mandatory?: boolean
    showPassword?: boolean
    canClear?: boolean
    canUndo?: boolean
    canI18n?: boolean
    canStep?: boolean
    canTag?: boolean
    mandatoryMessage?: string
    infoMessage?: string
    errorMessage?: string
    min?: ValidFieldMinMax
    max?: ValidFieldMinMax
    step?: number | string
    enableAutoNumberFix?: boolean
    emptyValueSlot?: string
    optionSlot?: string | undefined
    valueSlot?: string | undefined
    editSlot?: string | undefined
    slotData?: LktObject
    resource?: string
    resourceData?: LktObject
    featuredButton?: string
    infoButtonEllipsis?: boolean
    fileName?: string
    options?: string | Option[]
    multiple?: boolean
    multipleDisplay?: MultipleOptionsDisplay
    multipleDisplayEdition?: MultipleOptionsDisplay
    searchable?: boolean
    autoloadOptionsResource?: boolean | 'feed'
    optionsDownload?: string | Function
    optionsModal?: string | Function
    optionsModalData?: LktObject | Function
    optionsText?: string | Function
    optionsIcon?: string | Function
    optionsClass?: string | Function
    optionsLabelFormatter?: Function | undefined
    optionsResource?: string
    optionsResourceData?: LktObject
    icon?: string | Function
    download?: string | Function
    modal?: string | Function
    modalKey?: string | number | Function
    modalData?: LktObject
    itemType?: string
    optionValueType?: string

    // Extract data
    prop?: LktObject

    // Validation
    validation?: FieldValidationConfig

    // Custom button

    // Deprecated: Custom button
    customButtonText?: string
    customButtonClass?: string

    // Events
    events?: {
        validationStart?: undefined | Function
        validationEnd?: undefined | ((data: FieldValidationEndEventArgs) => boolean)
    }
}