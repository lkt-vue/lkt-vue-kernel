import {LktItem} from "./LktItem.ts";
import {TabsConfig} from "../config/TabsConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {TabConfig} from "../config/TabConfig.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";

export class Tabs extends LktItem implements TabsConfig {

    static lktDefaultValues: (keyof TabsConfig)[] = [
        'modelValue',
        'id',
        'useSession',
        'cacheLifetime',
        'tabs',
        'navStartButtons',
        'navEndButtons',
    ];

    modelValue: string|number = '';
    id?: string = '';
    useSession?: boolean = false;
    cacheLifetime?: number = 5;

    // Tabs
    tabs: Array<TabConfig> = [];
    navStartButtons?: Array<ButtonConfig> = [];
    navEndButtons?: Array<ButtonConfig> = [];

    constructor(data: Partial<TabsConfig> = {}) {
        super();
        this.feed(data);
    }
}