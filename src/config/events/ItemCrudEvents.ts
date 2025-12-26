import {ClickEventArgs} from "../../arguments/ClickEventArgs.ts";
import {LktObject} from "../../interfaces/LktObject.ts";

export interface ItemCrudEvents {
    httpStart?: undefined | Function,
    httpEnd?: (data: ClickEventArgs) => void|undefined|any,
}