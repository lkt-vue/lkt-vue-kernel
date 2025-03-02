import {ButtonConfig} from "../config/ButtonConfig.ts";
import {ButtonType} from "../enums/ButtonType.ts";
import {ensureButtonConfig} from "../functions/ensure-data-functions.ts";

export class LktSettings {
    static debugEnabled = false;

    static debugMode(enabled: boolean = true) {
        LktSettings.debugEnabled = enabled;
        return LktSettings;
    }

    static defaultCreateErrorText = 'Creation failed';
    static defaultCreateErrorDetails = 'An error occurred while creating the item. Please try again.';
    static defaultCreateErrorIcon = '';

    static setDefaultCreateError(config: { text?: string, details?: string, icon?: string }) {
        LktSettings.defaultCreateErrorText = config.text ?? LktSettings.defaultCreateErrorText;
        LktSettings.defaultCreateErrorDetails = config.details ?? LktSettings.defaultCreateErrorDetails;
        LktSettings.defaultCreateErrorIcon = config.icon ?? LktSettings.defaultCreateErrorIcon;
    }

    static defaultUpdateErrorText = 'Update failed';
    static defaultUpdateErrorDetails = 'An error occurred while updating the item. Please try again.';
    static defaultUpdateErrorIcon = '';

    static setDefaultUpdateError(config: { text?: string, details?: string, icon?: string }) {
        LktSettings.defaultUpdateErrorText = config.text ?? LktSettings.defaultUpdateErrorText;
        LktSettings.defaultUpdateErrorDetails = config.details ?? LktSettings.defaultUpdateErrorDetails;
        LktSettings.defaultUpdateErrorIcon = config.icon ?? LktSettings.defaultUpdateErrorIcon;
    }

    static defaultDropErrorText = 'Drop failed';
    static defaultDropErrorDetails = 'An error occurred while removing the item. Please try again.';
    static defaultDropErrorIcon = '';

    static setDefaultDropError(config: { text?: string, details?: string, icon?: string }) {
        LktSettings.defaultDropErrorText = config.text ?? LktSettings.defaultDropErrorText;
        LktSettings.defaultDropErrorDetails = config.details ?? LktSettings.defaultDropErrorDetails;
        LktSettings.defaultDropErrorIcon = config.icon ?? LktSettings.defaultDropErrorIcon;
    }

    static defaultCreateSuccessText = 'Item created';
    static defaultCreateSuccessDetails = '';
    static defaultCreateSuccessIcon = '';

    static setDefaultCreateSuccess(config: { text?: string, details?: string, icon?: string }) {
        LktSettings.defaultCreateSuccessText = config.text ?? LktSettings.defaultCreateSuccessText;
        LktSettings.defaultCreateSuccessDetails = config.details ?? LktSettings.defaultCreateSuccessDetails;
        LktSettings.defaultCreateSuccessIcon = config.icon ?? LktSettings.defaultCreateSuccessIcon;
    }

    static defaultUpdateSuccessText = 'Item updated';
    static defaultUpdateSuccessDetails = '';
    static defaultUpdateSuccessIcon = '';

    static setDefaultUpdateSuccess(config: { text?: string, details?: string, icon?: string }) {
        LktSettings.defaultUpdateSuccessText = config.text ?? LktSettings.defaultUpdateSuccessText;
        LktSettings.defaultUpdateSuccessDetails = config.details ?? LktSettings.defaultUpdateSuccessDetails;
        LktSettings.defaultUpdateSuccessIcon = config.icon ?? LktSettings.defaultUpdateSuccessIcon;
    }

    static defaultDropSuccessText = 'Item removed';
    static defaultDropSuccessDetails = '';
    static defaultDropSuccessIcon = '';

    static setDefaultDropSuccess(config: { text?: string, details?: string, icon?: string }) {
        LktSettings.defaultDropSuccessText = config.text ?? LktSettings.defaultDropSuccessText;
        LktSettings.defaultDropSuccessDetails = config.details ?? LktSettings.defaultDropSuccessDetails;
        LktSettings.defaultDropSuccessIcon = config.icon ?? LktSettings.defaultDropSuccessIcon;
    }

    static defaultSaveButton: Partial<ButtonConfig> = {
        text: 'Save',
    };

    static setDefaultSaveButton(button: Partial<ButtonConfig>, override: boolean = true) {
        if (override) {
            LktSettings.defaultSaveButton = button;
        } else {
            LktSettings.defaultSaveButton = ensureButtonConfig(button, LktSettings.defaultSaveButton);
        }
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

    static defaultToggleButton: Partial<ButtonConfig> = {
        text: 'Toggle',
        textOn: 'Close',
        textOff: 'Show more',
        type: ButtonType.HiddenSwitch,
    };

    static setDefaultToggleButton(button: Partial<ButtonConfig>, override: boolean = true) {
        if (override) {
            LktSettings.defaultToggleButton = button;
        } else {
            LktSettings.defaultToggleButton = ensureButtonConfig(button, LktSettings.defaultToggleButton);
        }
        return LktSettings;
    }

    static defaultLoadMoreButton: Partial<ButtonConfig> = {
        text: 'Load more',
        type: ButtonType.HiddenSwitch,
    };

    static setDefaultLoadMoreButton(button: Partial<ButtonConfig>, override: boolean = true) {
        if (override) {
            LktSettings.defaultLoadMoreButton = button;
        } else {
            LktSettings.defaultLoadMoreButton = ensureButtonConfig(button, LktSettings.defaultLoadMoreButton);
        }
        return LktSettings;
    }

    static defaultCloseModalIcon: string = 'lkt-icn-cancel';

    static setDefaultCloseModalIcon(icon: string) {
        LktSettings.defaultCloseModalIcon = icon;
        return LktSettings;
    }

    static defaultCloseToastIcon: string = 'lkt-icn-cancel';

    static setDefaultCloseToastIcon(icon: string) {
        LktSettings.defaultCloseToastIcon = icon;
        return LktSettings;
    }

    static defaultTableSortAscIcon: string = 'lkt-icn-arrow-bottom';
    static defaultTableSortDescIcon: string = 'lkt-icn-arrow-top';

    static setDefaultTableSortAscIcon(icon: string) {
        LktSettings.defaultTableSortAscIcon = icon;
        return LktSettings;
    }

    static setDefaultTableSortDescIcon(icon: string) {
        LktSettings.defaultTableSortDescIcon = icon;
        return LktSettings;
    }
}