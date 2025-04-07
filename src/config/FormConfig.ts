import {FormFieldConfig} from "./FormFieldConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {PolymorphicElementConfig} from "./PolymorphicElementConfig.ts";
import {HeaderConfig} from "./HeaderConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export interface FormConfig {
    modelValue: LktObject
    fields: Array<FormFieldConfig>
    submitButton: ButtonConfig
    container?: PolymorphicElementConfig
    header?: HeaderConfig
}