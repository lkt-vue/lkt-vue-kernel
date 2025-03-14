import {LktItem} from "./LktItem.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {MenuConfig} from "../config/MenuConfig.ts";
import {MenuEntryConfig} from "../config/MenuEntryConfig.ts";
import {HttpCallConfig} from "../config/HttpCallConfig.ts";

export class Menu extends LktItem implements MenuConfig {

    static lktDefaultValues: (keyof MenuConfig)[] = [
        'modelValue',
        'http',
    ];

    modelValue?: MenuEntryConfig[] = [];
    http?: HttpCallConfig = {};

    constructor(data: Partial<MenuConfig> = {}) {
        super();
        this.feed(data);
    }
}