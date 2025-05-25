import {TableConfig} from "../../../config/TableConfig.ts";
import {ItemCrudConfig} from "../../../config/ItemCrudConfig.ts";

export interface WebItemConfig {
    code: string
    icon?: string
    labelSingle: string
    labelMany: string
    many: TableConfig
    single: ItemCrudConfig
}