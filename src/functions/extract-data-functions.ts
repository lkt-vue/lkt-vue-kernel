import {LktObject} from "../interfaces/LktObject.ts";
import {ValidScanPropTarget} from "../types/ValidScanPropTarget.ts";
import {__} from 'lkt-i18n';

export const extractPropValue = (needle: ValidScanPropTarget, haystack: LktObject): ValidScanPropTarget => {
    if (typeof needle === 'string' && needle.startsWith('prop:')) {
        return haystack[needle.substring(5)];
    }
    return needle;
}

export const extractI18nValue = (needle: string|number) => {
    let txt = String(needle);
    if (txt.startsWith('__:')) {
        return __(txt.substring(3));
    }
    return txt;
}