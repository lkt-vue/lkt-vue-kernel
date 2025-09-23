import {MenuEntryConfig} from "./MenuEntryConfig.ts";
import {HttpCallConfig} from "./HttpCallConfig.ts";
import {MenuType} from "../enums/MenuType.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";

export interface MenuConfig {
    modelValue?: MenuEntryConfig[]
    type?: MenuType
    menuKey?: ValidModalKey

    // Http config
    http?: HttpCallConfig
}