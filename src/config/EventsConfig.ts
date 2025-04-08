import {ClickEventArgs} from "../arguments/ClickEventArgs.ts";

export interface EventsConfig {
    click?: (data: ClickEventArgs) => void|undefined
}