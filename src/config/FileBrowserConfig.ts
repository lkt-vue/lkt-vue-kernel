import {HttpCallConfig} from "./HttpCallConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";

export interface FileBrowserConfig {
    http?: HttpCallConfig
    // entityUpload?: HttpCallConfig
    // entitySave?: HttpCallConfig
    entityCreateButton?: ButtonConfig
    entityUpdateButton?: ButtonConfig
    entityDropButton?: ButtonConfig
}