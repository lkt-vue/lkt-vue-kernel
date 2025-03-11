import {ColumnType} from "../enums/ColumnType.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {ValidColSpan} from "../types/ValidColSpan.ts";
import {FieldConfig} from "./FieldConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {AnchorConfig} from "./AnchorConfig.ts";

export interface ColumnConfig {
    type: ColumnType
    key: string
    label?: string
    sortable?: boolean
    hidden?: boolean
    editable?: boolean
    formatter?: Function | undefined
    checkEmpty?: Function | undefined
    colspan?: ValidColSpan
    preferSlot?: Function | boolean
    isForRowKey?: boolean
    extractTitleFromColumn?: string
    slotData?: LktObject

    field?: FieldConfig | undefined
    anchor?: AnchorConfig | undefined
    button?: ButtonConfig | undefined
}