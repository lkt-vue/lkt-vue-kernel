import {AppRoutingConfig} from "./partials/AppRoutingConfig";
import {AppSetupConfig} from "./partials/AppSetupConfig";
import {Menu} from "../../../instances/Menu.ts";
import {HeaderConfig} from "../../../config/HeaderConfig.ts";

export interface LktAppConfig {
    routing?: AppRoutingConfig,
    setup?: AppSetupConfig,

    mainMenu?: Menu,
    bottomBar?: Menu

    hasMainMenu?: boolean | (() => boolean)
    hasBottomBar?: boolean | (() => boolean)
    hasMainHeader?: boolean | (() => boolean)
    replaceMainMenuButtonWithBack?: boolean | (() => boolean)

    mainHeader?: HeaderConfig
}