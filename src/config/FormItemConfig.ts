import {FieldConfig} from "./FieldConfig.ts";
import {FormComponentConfig} from "./FormComponentConfig.ts";
import {FormConfig} from "./FormConfig.ts";
import {ModificationView} from "../enums/ModificationView.ts";
import {RenderAndDisplayProps} from "../interfaces/RenderAndDisplayProps.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export interface FormItemConfig extends RenderAndDisplayProps{
    key?: string
    type?: 'field'|'component'|'form'|'slot'
    field?: FieldConfig
    modificationsField?: FieldConfig
    form?: FormConfig
    component?: FormComponentConfig
    supportedModifications?: boolean | ModificationView[]
    slotData?: LktObject
}