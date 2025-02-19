import {ButtonConfig} from "../config/ButtonConfig.ts";

export class LktSettings {
    static debug = false;

    static defaultConfirmButton: Partial<ButtonConfig> = {
        text: 'Confirm',
    };
    static defaultCancelButton: Partial<ButtonConfig> = {
        text: 'Cancel',
    };

    static setDefaultConfirmButton(button: Partial<ButtonConfig>) {
        LktSettings.defaultConfirmButton = button;
        return LktSettings;
    }

    static setDefaultCancelButton(button: Partial<ButtonConfig>) {
        LktSettings.defaultCancelButton = button;
        return LktSettings;
    }
}