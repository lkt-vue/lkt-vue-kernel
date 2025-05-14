import {ColumnType} from "../enums/ColumnType.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {ValidColSpan} from "../types/ValidColSpan.ts";
import {FieldConfig} from "./FieldConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {AnchorConfig} from "./AnchorConfig.ts";
import {ConditionalColumnArgs} from "../arguments/ConditionalColumnArgs.ts";

export interface ColumnConfig {
    type: ColumnType
    key: string
    label?: string
    class?: string
    sortable?: boolean
    hidden?: boolean | ((data: ConditionalColumnArgs) => boolean)
    editable?: boolean
    ensureFieldLabel?: boolean
    formatter?: Function | undefined
    checkEmpty?: Function | undefined
    colspan?: ValidColSpan
    preferSlot?: Function | boolean
    isForRowKey?: boolean
    isForAccordionHeader?: boolean
    extractTitleFromColumn?: string
    slotData?: LktObject

    field?: FieldConfig | undefined
    anchor?: AnchorConfig | undefined
    button?: ButtonConfig | undefined
}