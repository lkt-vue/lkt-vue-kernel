import {AppStateController} from "../controllers/app-state-controller/AppStateController.ts";
import {Ref} from "vue";
import {DataState} from "lkt-data-state";
import {HeaderConfig} from "../config/HeaderConfig.ts";

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