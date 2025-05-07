import {FieldConfig} from "./FieldConfig.ts";
import {FormComponentConfig} from "./FormComponentConfig.ts";
import {FormConfig} from "./FormConfig.ts";

export interface FormItemConfig {
    key?: string
    type?: 'field'|'component'|'form'
    field?: FieldConfig
    form?: FormConfig
    component?: FormComponentConfig
}