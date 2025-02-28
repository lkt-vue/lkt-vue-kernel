import {LktItem} from "./LktItem.ts";
import {IconConfig} from "../config/IconConfig.ts";
import {ValidTextValue} from "../types/ValidTextValue.ts";
import {IconType} from "../enums/IconType.ts";
import {EventsConfig} from "../config/EventsConfig.ts";

export class Icon extends LktItem implements IconConfig {

    static lktDefaultValues: (keyof IconConfig)[] = [
        'icon',
        'text',
        'class',
        'type',
        'events',
    ];

    icon?: ValidTextValue = '';
    text?: ValidTextValue = '';
    class?: ValidTextValue = '';
    type?: IconType = IconType.NotDefined;

    // Event management
    events?: EventsConfig|undefined = {};

    constructor(data: Partial<IconConfig> = {}) {
        super();
        this.feed(data);
    }
}