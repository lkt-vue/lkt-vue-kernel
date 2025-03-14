import {LktItem} from "./LktItem.ts";
import {IconConfig} from "../config/IconConfig.ts";
import {ValidTextValue} from "../types/ValidTextValue.ts";
import {IconType} from "../enums/IconType.ts";
import {EventsConfig} from "../config/EventsConfig.ts";
import {IconPosition} from "../enums/IconPosition.ts";

export class Icon extends LktItem implements IconConfig {

    static lktDefaultValues: (keyof IconConfig)[] = [
        'icon',
        'text',
        'class',
        'type',
        'position',
        'events',
    ];

    icon?: ValidTextValue = '';
    text?: ValidTextValue = '';
    class?: ValidTextValue = '';
    type?: IconType = IconType.NotDefined;

    // Positioning (mostly used by components using this element)
    position?: IconPosition = IconPosition.Start;

    // Event management
    events?: EventsConfig|undefined = {};

    constructor(data: Partial<IconConfig> = {}) {
        super();
        this.feed(data);
    }
}