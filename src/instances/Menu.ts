import {LktItem} from "./LktItem.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {MenuConfig} from "../config/MenuConfig.ts";
import {MenuEntryConfig} from "../config/MenuEntryConfig.ts";
import {MenuEntry} from "./MenuEntry.ts";

export class Menu extends LktItem implements MenuConfig {

    static lktDefaultValues: (keyof MenuConfig)[] = [
        'modelValue',
        'resource',
        'resourceData',
    ];

    modelValue?: MenuEntryConfig[] = [];
    resource?: string = '';
    resourceData: LktObject = {};

    constructor(data: Partial<MenuConfig> = {}) {
        super();
        this.feed(data);

        this.modelValue = this.modelValue?.map(entry => new MenuEntry(entry)) || [];
    }
}