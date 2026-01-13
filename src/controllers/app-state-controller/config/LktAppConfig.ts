import {AppRoutingConfig} from "./partials/AppRoutingConfig";
import {AppSetupConfig} from "./partials/AppSetupConfig";
import {Menu} from "../../../instances/Menu.ts";
import {HeaderConfig} from "../../../config/HeaderConfig.ts";
import {LktObject} from "../../../interfaces/LktObject.ts";
import {RouteLocationNormalizedLoaded, Router} from "vue-router";

export interface LktAppConfig {
    routing?: AppRoutingConfig
    setup?: AppSetupConfig
    appSetupChangedCallback?: (args: {
        setup: LktObject,
        route: RouteLocationNormalizedLoaded,
        router: Router,
    }) => void

    mainMenu?: Menu
    bottomBar?: Menu

    hasMainMenu?: boolean | (() => boolean)
    hasBottomBar?: boolean | (() => boolean)
    hasMainHeader?: boolean | (() => boolean)
    replaceMainMenuButtonWithBack?: boolean | (() => boolean)

    mainHeader?: HeaderConfig
}