import {LktObject} from "../interfaces/LktObject.ts";
import {ValidScanPropTarget} from "../types/ValidScanPropTarget.ts";
import {__} from 'lkt-i18n';

export const extractPropValue = (needle: ValidScanPropTarget, haystack: LktObject): ValidScanPropTarget => {
    if (typeof needle === 'string' && needle.startsWith('prop:')) {
        return haystack[needle.substring(5)];
    }
    return needle;
}

export const extractI18nValue = (needle: string) => {

    if (needle.startsWith('__:')) {
        return __(needle.substring(3));
    }
    return needle;
}