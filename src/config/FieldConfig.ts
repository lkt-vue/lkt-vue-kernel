import {LktObject} from './../interfaces/LktObject.ts';
import {FieldType} from './../enums/FieldType.ts';
import {ValidFieldValue} from './../types/ValidFieldValue.ts';
import {Option} from '../instances/Option.ts';
import {MultipleOptionsDisplay} from "../enums/MultipleOptionsDisplay.ts";
import {ValidTabIndex} from "../types/ValidTabIndex.ts";
import {ValidFieldMinMax} from "../types/ValidFieldMinMax.ts";
import {FieldValidationConfig} from "./FieldValidationConfig.ts";
import {FieldValidationEndEventArgs} from "../arguments/FieldValidationEndEventArgs.ts";
import {HttpCallConfig} from "./HttpCallConfig.ts";
import {OptionsConfig} from "./OptionsConfig.ts";
import {TooltipConfig} from "./TooltipConfig.ts";
import {FieldReadModeConfig} from "./FieldReadModeConfig.ts";
import {BooleanFieldConfig} from "./BooleanFieldConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {OptionConfig} from "./OptionConfig.ts";
import {FileBrowserConfig} from "./FileBrowserConfig.ts";
import {RenderAndDisplayProps} from "../interfaces/RenderAndDisplayProps.ts";

export interface FieldConfig extends RenderAndDisplayProps{
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
    hidden?: boolean
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
    featuredButton?: string
    infoButtonEllipsis?: boolean
    fileName?: string
    options?: string | Option[] | OptionConfig[]
    multiple?: boolean
    multipleDisplay?: MultipleOptionsDisplay
    multipleDisplayEdition?: MultipleOptionsDisplay
    searchable?: boolean

    icon?: string | Function
    download?: string | Function
    modal?: string | Function
    modalKey?: string | number | Function
    modalData?: LktObject | Function
    itemType?: string
    optionValueType?: string

    // Boolean field mode
    configOn?: BooleanFieldConfig
    configOff?: BooleanFieldConfig

    // Read mode API
    readMode?: boolean | (() => boolean)
    allowReadModeSwitch?: boolean
    readModeConfig?: FieldReadModeConfig

    // Extract data
    prop?: LktObject

    // Validation
    validation?: FieldValidationConfig

    // Options API
    optionsConfig?: OptionsConfig

    // File upload config
    fileUploadHttp?: HttpCallConfig

    // File upload button (For Select if it's being used as file list - old lkt-field-file-select mode)
    fileUploadButton?: ButtonConfig

    // Tooltip API
    tooltipConfig?: TooltipConfig

    // File Browser Config
    fileBrowserConfig?: FileBrowserConfig

    // Custom button

    // Deprecated: Custom button
    customButtonText?: string
    customButtonClass?: string

    // Events
    events?: {
        validationStart?: undefined | Function
        validationEnd?: undefined | ((data: FieldValidationEndEventArgs) => boolean)
        updatedOptions?: ((data: {options: Array<OptionConfig>}) => void)
    }
}