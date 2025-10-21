import {TableConfig} from "../../../config/TableConfig.ts";
import {ItemCrudConfig} from "../../../config/ItemCrudConfig.ts";
import {LktObject} from "../../../interfaces/LktObject.ts";
import {HeaderConfig} from "../../../config/HeaderConfig.ts";

export interface WebItemConfig {
    code: string
    icon?: string
    labelSingle: string
    labelMany: string
    many: TableConfig|false
    single: ItemCrudConfig
    appHeaderSingle?: HeaderConfig | ((data: LktObject) => HeaderConfig)
    appHeaderMany?: HeaderConfig
    itemGenerator?: ((data: LktObject) => LktObject)
}