import {LktItem} from "./LktItem.ts";
import {MenuConfig} from "../config/MenuConfig.ts";
import {MenuEntryConfig} from "../config/MenuEntryConfig.ts";
import {HttpCallConfig} from "../config/HttpCallConfig.ts";
import {MenuType} from "../enums/MenuType.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";

export class Menu extends LktItem implements MenuConfig {

    static lktDefaultValues: (keyof MenuConfig)[] = [
        'modelValue',
        'http',
        'type',
        'menuKey',
        'hiddenPosition',
        'closeOnClickOutside',
    ];

    modelValue?: MenuEntryConfig[] = [];
    type?: MenuType = MenuType.Always;
    menuKey?: ValidModalKey = '_';
    http?: HttpCallConfig = {};
    closeOnClickOutside?: boolean = true;
    hiddenPosition?: 'left' | 'right' = 'left';

    constructor(data: Partial<MenuConfig> = {}) {
        super();
        this.feed(data);
    }
}