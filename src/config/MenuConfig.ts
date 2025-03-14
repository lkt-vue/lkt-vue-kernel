import {MenuEntryConfig} from "./MenuEntryConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {HttpCallConfig} from "./HttpCallConfig.ts";

export interface MenuConfig {
    modelValue?: MenuEntryConfig[]

    // Http config
    http?: HttpCallConfig

    // Deprecated HTTP config
    resource?: string
    resourceData: LktObject
}