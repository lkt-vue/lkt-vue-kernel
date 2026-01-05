import {ItemCrudMode} from "../enums/ItemCrudMode.ts";
import {ModificationView} from "../enums/ModificationView.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {FormConfig} from "../config/FormConfig.ts";

export type ItemCrudFormConfigGetter = (data: {
    mode?: ItemCrudMode,
    view?: ModificationView,
    item?: LktObject,
    modifications?: LktObject,
    editing?: boolean
}) => FormConfig;