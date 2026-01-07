import {ValidAnchorTo} from "../../types/ValidAnchorTo.ts";
import {ClickEventArgs} from "../../arguments/ClickEventArgs.ts";

export interface ButtonHooks {
    onSuccessRedirectTo?: ValidAnchorTo | ((data: ClickEventArgs) => ValidAnchorTo)
    redirectType?: 'replace' | 'push'
    onSuccessReload?: boolean | ((data: ClickEventArgs) => boolean)
}