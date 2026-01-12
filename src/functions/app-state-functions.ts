import {AppStateController} from "../controllers/app-state-controller/AppStateController.ts";
import {Ref} from "vue";
import {DataState} from "lkt-data-state";
import {HeaderConfig} from "../config/HeaderConfig.ts";
import {ThemeModeConfig} from "../enums/ThemeModeConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {AppSize} from "../enums/AppSize.ts";
import {AppResourceStatus} from "../enums/AppResourceStatus.ts";

export const setLktAppReady = (state: boolean) => {
    AppStateController.lktAppReady.value = state;
}

export const getLktAppReady = (): Ref<boolean> => {
    return AppStateController.lktAppReady;
}

export const setLktAppLoading = (state: boolean) => {
    AppStateController.lktAppLoading.value = state;
}

export const getLktAppLoading = (): Ref<boolean> => {
    return AppStateController.lktAppLoading;
}

export const updateMainHeader = (config: HeaderConfig): void => {
    if (typeof AppStateController.mainHeader.value === 'undefined'){
        AppStateController.mainHeader.value = config;
        return;
    }

    let dataState = new DataState(AppStateController.mainHeader.value);
    dataState.increment(config);
    AppStateController.mainHeader.value = dataState.getData();
}

export const setLktAppThemeModeConfig = (cfg: ThemeModeConfig) => {
    AppStateController.lktAppThemeModeConfig.value =  cfg;
}

export const setLktAppSize = (size: AppSize) => {
    AppStateController.lktAppSize.value = size;
}

export const getLktAppSize = (): Ref<AppSize> => {
    return AppStateController.lktAppSize;
}

export const setLktAdminEnabled = (state: boolean) => {
    AppStateController.lktAdminEnabled.value = state;
}

export const getLktAdminEnabled = (): Ref<boolean> => {
    return AppStateController.lktAdminEnabled;
}

export const getLktAppSetup = (): Ref<LktObject> => {
    return AppStateController.lktAppSetup;
}

export const refreshAppI18n = () => {
    AppStateController.i18nStatus.value = AppResourceStatus.RequiredRefresh;
}

export const refreshAppSetup = () => {
    AppStateController.setupStatus.value = AppResourceStatus.RequiredRefresh;
}