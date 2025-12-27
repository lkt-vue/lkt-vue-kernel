import {LktTranslationType} from "../enums/LktTranslationType.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export interface LktTranslationConfig {
    property: string
    type: LktTranslationType
    value: string,
    parentId: number,
    valueData: LktObject,
    children: Array<LktTranslationConfig>,
}