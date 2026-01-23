import {ValidAnchorTo} from "../../types/ValidAnchorTo.ts";
import {ClickEventArgs} from "../../arguments/ClickEventArgs.ts";

export interface ButtonHooks {
    onSuccessRedirectTo?: ValidAnchorTo | ((data: ClickEventArgs) => ValidAnchorTo)
    onSuccessRedirectBack?: boolean | ((data: ClickEventArgs) => boolean)
    redirectType?: 'replace' | 'push'
    onSuccessReload?: boolean | ((data: ClickEventArgs) => boolean)
    onSuccessRefreshI18n?: boolean | ((data: ClickEventArgs) => boolean)
    onSuccessRefreshSetup?: boolean | ((data: ClickEventArgs) => boolean)
}