import {FormConfig} from "./FormConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {ModificationView} from "../enums/ModificationView.ts";
import {DataState} from "lkt-data-state";
import {TableConfig} from "./TableConfig.ts";
import {TableConfigReturnFunction} from "../return-functions-types/TableConfigReturnFunction.ts";

export interface FormUiConfig {
    modelValue: LktObject
    modifications?: LktObject
    form: FormConfig
    valid?: boolean
    disabled?: boolean
    visibleView?: ModificationView
    editableViews?: ModificationView[]
    modificationDataState?: DataState
    differencesTableConfig?: TableConfig | TableConfigReturnFunction
}