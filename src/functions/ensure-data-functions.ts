import {ButtonConfig} from "../config/ButtonConfig.ts";

export const ensureButtonConfig = (buttonConfig: Partial<ButtonConfig>|undefined, settingsConfig: Partial<ButtonConfig>) => {
    if (typeof buttonConfig === 'undefined') return settingsConfig;
    return {
        ...settingsConfig,
        ...buttonConfig,
    }
}