import {LktSettings} from "../settings/LktSettings.ts";

export const lktDebug = (component: string, ...args: any[]) => {
    if (LktSettings.debugEnabled) console.info('::lkt::', `[${component}] `, ...args);
}