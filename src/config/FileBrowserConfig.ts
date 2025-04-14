import {HttpCallConfig} from "./HttpCallConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {TableConfig} from "./TableConfig.ts";

export interface FileBrowserConfig {
    http?: HttpCallConfig
    // entityUpload?: HttpCallConfig
    // entitySave?: HttpCallConfig
    entityCreateButton?: ButtonConfig
    entityUpdateButton?: ButtonConfig
    entityDropButton?: ButtonConfig

    listConfig?: TableConfig
}