import {ClickEventArgs} from "../../arguments/ClickEventArgs.ts";
import {LktObject} from "../../interfaces/LktObject.ts";

export interface PaginatorEvents {
    httpStart?: undefined | Function,
    httpEnd?: (data: ClickEventArgs) => void|undefined,
    parseResults?: (data: LktObject[]) => void|undefined,
}