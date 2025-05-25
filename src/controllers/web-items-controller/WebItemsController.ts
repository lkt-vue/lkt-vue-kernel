import {WebItemsStack} from "./config/WebItemsStack.ts";
import {WebItemConfig} from "./config/WebItemConfig.ts";

export class WebItemsController {
    static stack: WebItemsStack = {};

    static setWebItemConfig(config: WebItemConfig) {
        WebItemsController.stack[config.code] = config;
        return WebItemsController;
    }

    static getItems() {
        return Object.values(WebItemsController.stack);
    }

    static getWebItemSettings(needle: string):WebItemConfig {
        return WebItemsController.stack[needle]
    }
}