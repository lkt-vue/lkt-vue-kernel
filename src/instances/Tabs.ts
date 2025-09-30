import {LktItem} from "./LktItem.ts";
import {TabsConfig} from "../config/TabsConfig.ts";
import {TabConfig} from "../config/TabConfig.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {PolymorphicElementConfig} from "../config/PolymorphicElementConfig.ts";

export class Tabs extends LktItem implements TabsConfig {

    static lktDefaultValues: (keyof TabsConfig)[] = [
        'modelValue',
        'id',
        'class',
        'contentClass',
        'useSession',
        'cacheLifetime',
        'tabs',
        'navStartButtons',
        'navEndButtons',
        'navPostEndButtonsElements',
    ];

    modelValue: string|number = '';
    id?: string = '';
    class?: string = '';
    contentClass?: string = '';
    useSession?: boolean = false;
    cacheLifetime?: number = 5;

    // Tabs
    tabs: Array<TabConfig> = [];
    navStartButtons?: Array<ButtonConfig> = [];
    navEndButtons?: Array<ButtonConfig> = [];
    navPostEndButtonsElements?: Array<PolymorphicElementConfig> = [];

    constructor(data: Partial<TabsConfig> = {}) {
        super();
        this.feed(data);
    }
}