import {ClickEventArgs} from "../../arguments/ClickEventArgs.ts";
import {LktObject} from "../../interfaces/LktObject.ts";
import {TableType} from "../../enums/TableType.ts";

export interface TableEvents {
    parseResults?: (data: LktObject[]) => void|undefined|LktObject[],
    viewChanged?: (view: TableType) => void
}