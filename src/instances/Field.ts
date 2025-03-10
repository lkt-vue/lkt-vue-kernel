import {ValidFieldValue} from '../types/ValidFieldValue';
import {FieldType} from '../enums/FieldType'
import {Option} from './Option';
import {generateRandomString} from 'lkt-string-tools';
import {FieldConfig} from "../config/FieldConfig.ts";
import {LktItem} from "./LktItem.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {MultipleOptionsDisplay} from "../enums/MultipleOptionsDisplay.ts";
import {ValidTabIndex} from "../types/ValidTabIndex.ts";
import {ValidFieldMinMax} from "../types/ValidFieldMinMax.ts";
import {FieldValidationConfig} from "../config/FieldValidationConfig.ts";
import {OptionsConfig} from "../config/OptionsConfig.ts";
import {HttpCallConfig} from "../config/HttpCallConfig.ts";
import {TooltipConfig} from "../config/TooltipConfig.ts";

export class Field extends LktItem implements FieldConfig {

    static lktDefaultValues: (keyof FieldConfig)[] = [
        'modelValue',
        'type',
        'valid',
        'placeholder',
        'searchPlaceholder',
        'label',
        'labelIcon',
        'labelIconAtEnd',
        'name',
        'autocomplete',
        'disabled',
        'readonly',
        'readMode',
        'allowReadModeSwitch',
        'tabindex',
        'mandatory',
        'showPassword',
        'canClear',
        'canUndo',
        'canI18n',
        'canStep',
        'canTag',
        'mandatoryMessage',
        'infoMessage',
        'errorMessage',
        'min',
        'max',
        'step',
        'enableAutoNumberFix',
        'emptyValueSlot',
        'optionSlot',
        'valueSlot',
        'editSlot',
        'slotData',
        'featuredButton',
        'infoButtonEllipsis',
        'fileName',
        'customButtonText',
        'customButtonClass',
        'options',
        'multiple',
        'multipleDisplay',
        'multipleDisplayEdition',
        'searchable',
        'icon',
        'download',
        'modal',
        'modalKey',
        'modalData',
        'validation',
        'prop',
        'optionValueType',
        'optionsConfig',
        'fileUploadHttp',
        'tooltipConfig',
    ];

    modelValue: ValidFieldValue = '';
    type: FieldType = FieldType.Text;
    valid: boolean|undefined = undefined;
    placeholder: string = '';
    searchPlaceholder: string = '';
    label: string = '';
    labelIcon: string = '';
    labelIconAtEnd: boolean = false;
    name: string = generateRandomString(16);
    autocomplete: boolean = false;
    disabled: boolean = false;
    readonly: boolean = false;
    readMode: boolean = false;
    allowReadModeSwitch: boolean = false;
    tabindex: ValidTabIndex = undefined;
    mandatory: boolean = false;
    showPassword: boolean = false;
    canClear: boolean = false;
    canUndo: boolean = false;
    canI18n: boolean = false;
    canStep: boolean = true;
    canTag: boolean = true;
    mandatoryMessage: string = '';
    infoMessage: string = '';
    errorMessage: string = '';
    min: ValidFieldMinMax = undefined;
    max: ValidFieldMinMax = undefined;
    step: number | string = 1;
    enableAutoNumberFix: boolean = true;
    emptyValueSlot: string = '';
    optionSlot = undefined;
    valueSlot = undefined;
    editSlot = undefined;
    slotData: LktObject = {};
    featuredButton: string = '';
    infoButtonEllipsis: boolean = false
    fileName: string = '';
    customButtonText: string = '';
    customButtonClass: string = '';
    options: string | Option[] = [];
    multiple: boolean = false;
    multipleDisplay: MultipleOptionsDisplay = MultipleOptionsDisplay.List;
    multipleDisplayEdition: MultipleOptionsDisplay = MultipleOptionsDisplay.Inline;
    searchable: boolean = false;
    icon: string | Function = '';
    download: string | Function = '';
    modal: string | Function = '';
    modalKey: string | number | Function = '';
    modalData: LktObject = {};
    validation: FieldValidationConfig = {};

    prop?: LktObject = {};
    optionValueType: string = 'value';

    // Options API
    optionsConfig?: OptionsConfig = {};

    // File upload config
    fileUploadHttp?: HttpCallConfig = {};

    // Tooltip API
    tooltipConfig?: TooltipConfig = {};

    constructor(data: Partial<FieldConfig> = {}) {
        super();
        this.feed(data);
    }
}