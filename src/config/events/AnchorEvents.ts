import {ClickEventArgs} from "../../arguments/ClickEventArgs.ts";

export interface AnchorEvents {
    click?: (data: ClickEventArgs) => void|undefined|any
}