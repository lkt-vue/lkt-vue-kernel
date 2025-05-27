import {LktObject} from "../interfaces/LktObject.ts";
import {ValidScanPropTarget} from "../types/ValidScanPropTarget.ts";
import {__} from 'lkt-i18n';
import {ValidTextValue} from "../types/ValidTextValue.ts";

export const extractPropValue = (needle: ValidScanPropTarget, haystack: LktObject): ValidScanPropTarget => {
    if (typeof needle === 'string') {
        if (needle === 'prop:') return haystack;

        if (needle.startsWith('prop:')) {
            return haystack[needle.substring(5)];
        }

        if (needle.includes('feed{')) {
            const regex = /\bfeed{(.*?)}/g;
            const result = needle.replace(regex, (_, key) => {
                return haystack[key.trim()] || '';
            });
            console.log('result: ', result);
            return result;
        }
    }
    return needle;
}

export const extractI18nValue = (needle: ValidTextValue) => {
    if (typeof needle === 'string' && needle.startsWith('__:')) {
        let txt = String(needle);
        if (txt.startsWith('__:')) {
            return __(txt.substring(3));
        }
        return txt;
    }
    return needle;
}

export const prepareResourceData = (resourceData: LktObject|undefined, haystack: LktObject) => {
    if (!resourceData) return {};

    let r: LktObject = {}
    for (let k in resourceData) {
        r[k] = extractPropValue(resourceData[k], haystack);
    }
    return r;
}