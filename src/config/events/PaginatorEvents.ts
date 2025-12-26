import {ClickEventArgs} from "../../arguments/ClickEventArgs.ts";
import {LktObject} from "../../interfaces/LktObject.ts";

export interface PaginatorEvents {
    httpStart?: undefined | Function,
    httpEnd?: (data: ClickEventArgs) => void|undefined|any,
    parseResults?: (data: LktObject[]) => void|undefined|any,
}