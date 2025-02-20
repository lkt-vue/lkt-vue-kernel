import {ButtonConfig} from "../config/ButtonConfig.ts";
import {ButtonType} from "../enums/ButtonType.ts";

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

    static defaultCreateButton: Partial<ButtonConfig> = {
        text: 'Create',
    };
    static setDefaultCreateButton(button: Partial<ButtonConfig>) {
        LktSettings.defaultCreateButton = button;
        return LktSettings;
    }

    static defaultUpdateButton: Partial<ButtonConfig> = {
        text: 'Update',
    };
    static setDefaultUpdateButton(button: Partial<ButtonConfig>) {
        LktSettings.defaultUpdateButton = button;
        return LktSettings;
    }

    static defaultDropButton: Partial<ButtonConfig> = {
        text: 'Drop',
    };
    static setDefaultDropButton(button: Partial<ButtonConfig>) {
        LktSettings.defaultDropButton = button;
        return LktSettings;
    }

    static defaultEditModeButton: Partial<ButtonConfig> = {
        text: 'Edit mode',
        type: ButtonType.Switch,
    };
    static setDefaultEditModeButton(button: Partial<ButtonConfig>) {
        LktSettings.defaultEditModeButton = button;
        return LktSettings;
    }
}