import {ClickEventArgs} from "../../arguments/ClickEventArgs.ts";

export interface ButtonEvents {
    click?: (data: ClickEventArgs) => void|undefined|any,
    httpStart?: undefined | Function,
    httpEnd?: (data: ClickEventArgs) => void|undefined|any,
}