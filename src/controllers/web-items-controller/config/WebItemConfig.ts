import {TableConfig} from "../../../config/TableConfig.ts";
import {ItemCrudConfig} from "../../../config/ItemCrudConfig.ts";
import {LktObject} from "../../../interfaces/LktObject.ts";

export interface WebItemConfig {
    code: string
    icon?: string
    labelSingle: string
    labelMany: string
    many: TableConfig|false
    single: ItemCrudConfig
    itemGenerator?: ((data: LktObject) => LktObject)
}