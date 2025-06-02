import {LktObject} from "../interfaces/LktObject.ts";
import {TablePermission} from "../enums/TablePermission.ts";

export interface ItemSlotComponentConfig {
    item?: LktObject
    editing?: boolean
    index?: number
    perms?: Array<TablePermission>
    data?: LktObject
}