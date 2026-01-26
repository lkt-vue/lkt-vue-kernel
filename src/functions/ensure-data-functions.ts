import {ButtonConfig} from "../config/ButtonConfig.ts";
import {FieldConfig} from "../config/FieldConfig.ts";

export const ensureButtonConfig = (buttonConfig: Partial<ButtonConfig>|undefined|false, settingsConfig: Partial<ButtonConfig>, mode: 'combine'|'override' = 'override') => {
    if (typeof buttonConfig === 'undefined' || !buttonConfig) return settingsConfig;
    let r = {
        ...settingsConfig,
        ...buttonConfig,
    }

    if (mode === 'combine') {
        if (buttonConfig.class && settingsConfig.class) {
            r.class = [buttonConfig.class, settingsConfig.class].join(' ');
        }
    }

    return r;
}

export const ensureFieldConfig = (config: Partial<FieldConfig>|undefined, settingsConfig: Partial<FieldConfig>) => {
    if (typeof config === 'undefined') return settingsConfig;
    return {
        ...settingsConfig,
        ...config,
    }
}