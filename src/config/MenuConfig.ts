import {MenuEntryConfig} from "./MenuEntryConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export interface MenuConfig {
    modelValue?: MenuEntryConfig[]
    resource?: string
    resourceData: LktObject
}