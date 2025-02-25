import {ValidFieldMinMax} from "../types/ValidFieldMinMax.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {FieldAutoValidationTrigger} from "../enums/FieldAutoValidationTrigger.ts";
import {FieldValidationType} from "../enums/FieldValidationType.ts";

export interface FieldValidationConfig {
    type?: FieldValidationType
    trigger?: FieldAutoValidationTrigger
    stack?: string

    resource?: string
    resourceData?: LktObject

    minNumbers?: ValidFieldMinMax
    maxNumbers?: ValidFieldMinMax
    minChars?: ValidFieldMinMax
    maxChars?: ValidFieldMinMax
    minUpperChars?: ValidFieldMinMax
    maxUpperChars?: ValidFieldMinMax
    minLowerChars?: ValidFieldMinMax
    maxLowerChars?: ValidFieldMinMax
    minSpecialChars?: ValidFieldMinMax
    maxSpecialChars?: ValidFieldMinMax

    checkEqualTo?: ValidFieldMinMax
}