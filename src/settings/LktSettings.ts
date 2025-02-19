import {ButtonConfig} from "../config/ButtonConfig.ts";

export class LktSettings {
    static debugEnabled = false;

    static debugMode(enabled: boolean = true) {
        LktSettings.debugEnabled = enabled;
        return LktSettings;
    }

    static defaultConfirmButton: Partial<ButtonConfig> = {
        text: 'Confirm',
    };
    static setDefaultConfirmButton(button: Partial<ButtonConfig>) {
        LktSettings.defaultConfirmButton = button;
        return LktSettings;
    }


    static defaultCancelButton: Partial<ButtonConfig> = {
        text: 'Cancel',
    };
    static setDefaultCancelButton(button: Partial<ButtonConfig>) {
        LktSettings.defaultCancelButton = button;
        return LktSettings;
    }
}