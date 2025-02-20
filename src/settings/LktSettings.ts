import {ButtonConfig} from "../config/ButtonConfig.ts";
import {ButtonType} from "../enums/ButtonType.ts";
import {ensureButtonConfig} from "../functions/ensure-data-functions.ts";

export class LktSettings {
    static debugEnabled = false;

    static debugMode(enabled: boolean = true) {
        LktSettings.debugEnabled = enabled;
        return LktSettings;
    }

    static defaultConfirmButton: Partial<ButtonConfig> = {
        text: 'Confirm',
    };
    static setDefaultConfirmButton(button: Partial<ButtonConfig>, override: boolean = true) {
        if (override) {
            LktSettings.defaultConfirmButton = button;
        } else {
            LktSettings.defaultConfirmButton = ensureButtonConfig(button, LktSettings.defaultConfirmButton);
        }
        return LktSettings;
    }


    static defaultCancelButton: Partial<ButtonConfig> = {
        text: 'Cancel',
    };
    static setDefaultCancelButton(button: Partial<ButtonConfig>, override: boolean = true) {
        if (override) {
            LktSettings.defaultCancelButton = button;
        } else {
            LktSettings.defaultCancelButton = ensureButtonConfig(button, LktSettings.defaultCancelButton);
        }
        return LktSettings;
    }

    static defaultCreateButton: Partial<ButtonConfig> = {
        text: 'Create',
    };
    static setDefaultCreateButton(button: Partial<ButtonConfig>, override: boolean = true) {
        if (override) {
            LktSettings.defaultCreateButton = button;
        } else {
            LktSettings.defaultCreateButton = ensureButtonConfig(button, LktSettings.defaultCreateButton);
        }
        return LktSettings;
    }

    static defaultUpdateButton: Partial<ButtonConfig> = {
        text: 'Update',
    };
    static setDefaultUpdateButton(button: Partial<ButtonConfig>, override: boolean = true) {
        if (override) {
            LktSettings.defaultUpdateButton = button;
        } else {
            LktSettings.defaultUpdateButton = ensureButtonConfig(button, LktSettings.defaultUpdateButton);
        }
        return LktSettings;
    }

    static defaultDropButton: Partial<ButtonConfig> = {
        text: 'Drop',
    };
    static setDefaultDropButton(button: Partial<ButtonConfig>, override: boolean = true) {
        if (override) {
            LktSettings.defaultDropButton = button;
        } else {
            LktSettings.defaultDropButton = ensureButtonConfig(button, LktSettings.defaultDropButton);
        }
        return LktSettings;
    }

    static defaultEditModeButton: Partial<ButtonConfig> = {
        text: 'Edit mode',
        type: ButtonType.Switch,
    };
    static setDefaultEditModeButton(button: Partial<ButtonConfig>, override: boolean = true) {
        if (override) {
            LktSettings.defaultEditModeButton = button;
        } else {
            LktSettings.defaultEditModeButton = ensureButtonConfig(button, LktSettings.defaultEditModeButton);
        }
        return LktSettings;
    }
}