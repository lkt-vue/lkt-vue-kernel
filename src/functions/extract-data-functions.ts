import {LktObject} from "../interfaces/LktObject.ts";
import {ValidScanPropTarget} from "../types/ValidScanPropTarget.ts";

export const extractPropValue = (needle: ValidScanPropTarget, haystack: LktObject): ValidScanPropTarget => {
    if (typeof needle === 'string' && needle.startsWith('prop:')) {
        return haystack[needle.substring(5)];
    }
    return needle;
}