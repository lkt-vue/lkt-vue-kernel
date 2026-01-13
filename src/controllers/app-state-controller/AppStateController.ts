import {ref, Ref} from "vue";
import {AppSetupConfig} from "./config/partials/AppSetupConfig.ts";
import {RouteLocationNormalizedLoaded, Router} from "vue-router";
import {AppSize} from "../../enums/AppSize.ts";
import {Menu} from "../../instances/Menu.ts";
import {LktObject} from "../../interfaces/LktObject.ts";
import {HeaderConfig} from "../../config/HeaderConfig.ts";
import {ThemeModeConfig} from "../../enums/ThemeModeConfig.ts";
import {AppResourceStatus} from "../../enums/AppResourceStatus.ts";
import {ThemeMode} from "../../types/ThemeMode.ts";

export class AppStateController {

    static lktAppSize: Ref<AppSize> = ref(AppSize.MD);
    static lktAdminEnabled: Ref<boolean> = ref(true);
    static lktAppLoading: Ref<boolean> = ref(true);
    static lktAppReady: Ref<boolean> = ref(false);
    static lktAppSetup: Ref<LktObject> = ref({});
    static appSetupChangedCallback?: (args: {
        setup: LktObject,
        route: RouteLocationNormalizedLoaded,
        router: Router,
    }) => void = undefined;

    static lktMainMenu?: Menu = undefined;
    static lktBottomBar?: Menu = undefined;

    static hasMainHeader?: boolean | ((args: { route: RouteLocationNormalizedLoaded}) => boolean) = true;
    static hasMainMenu?: boolean | ((args: { route: RouteLocationNormalizedLoaded}) => boolean) = true;
    static hasBottomBar?: boolean | ((args: { route: RouteLocationNormalizedLoaded}) => boolean) = true;
    static replaceMainMenuButtonWithBack?: boolean | ((args: { route: RouteLocationNormalizedLoaded}) => boolean) = false;

    static setup?: AppSetupConfig = undefined;

    static i18nStatus: Ref<AppResourceStatus> = ref(AppResourceStatus.NeverLoaded);
    static setupStatus: Ref<AppResourceStatus> = ref(AppResourceStatus.NeverLoaded);

    static mainHeader: Ref<HeaderConfig|undefined> = ref(undefined);

    static lktAppThemeModeConfig: Ref<ThemeModeConfig> = ref(ThemeModeConfig.Auto);
    static lktAppThemeModeDetected: Ref<ThemeMode> = ref('light');
    static lktAppThemeMode: Ref<ThemeMode> = ref('light');
}