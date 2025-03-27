import {ButtonConfig} from "../config/ButtonConfig.ts";
import {FieldConfig} from "../config/FieldConfig.ts";

export const ensureButtonConfig = (buttonConfig: Partial<ButtonConfig>|undefined|false, settingsConfig: Partial<ButtonConfig>) => {
    if (typeof buttonConfig === 'undefined' || !buttonConfig) return settingsConfig;
    return {
        ...settingsConfig,
        ...buttonConfig,
    }
}

export const ensureFieldConfig = (config: Partial<FieldConfig>|undefined, settingsConfig: Partial<FieldConfig>) => {
    if (typeof config === 'undefined') return settingsConfig;
    return {
        ...settingsConfig,
        ...config,
    }
}