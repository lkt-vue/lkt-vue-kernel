import {TablePermission} from "../enums/TablePermission.ts";

export interface ConditionalColumnArgs {
    perms: Array<TablePermission>
}