import {LktItem} from "./LktItem.ts";
import {TabsConfig} from "../config/TabsConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export class Tabs extends LktItem implements TabsConfig {

    static lktDefaultValues: (keyof TabsConfig)[] = [
        'modelValue',
        'id',
        'useSession',
        'cacheLifetime',
        'contentPad',
        'titles',
    ];

    modelValue: string|number = '';
    id?: string = '';
    useSession?: boolean = false;
    cacheLifetime?: number = 5;
    contentPad?: string
    titles?: LktObject

    constructor(data: Partial<TabsConfig> = {}) {
        super();
        this.feed(data);
    }
}