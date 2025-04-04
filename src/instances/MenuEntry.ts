import {LktItem} from "./LktItem.ts";
import {MenuEntryConfig} from "../config/MenuEntryConfig.ts";
import {EventsConfig} from "../config/EventsConfig.ts";
import {MenuEntryType} from "../enums/MenuEntryType.ts";
import {AnchorConfig} from "../config/AnchorConfig.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";

export class MenuEntry extends LktItem implements MenuEntryConfig {

    static lktDefaultValues: (keyof MenuEntryConfig)[] = [
        'key',
        'type',
        'icon',
        'isActiveChecker',
        'isOpened',
        'isActive',
        'parent',
        'children',
        'events',
    ];

    key?: string = '';
    type?: MenuEntryType = MenuEntryType.Anchor;
    class?: string = '';

    // Icon
    icon?: string = '';

    // Anchor config
    anchor?: AnchorConfig = {};

    // Button config
    button?: ButtonConfig = {};

    isActiveChecker?: Function|undefined = undefined;

    isOpened?: boolean = false;
    isActive?: boolean = false;
    keepOpenOnChildClick?: boolean = false;
    parent?: MenuEntryConfig|undefined = undefined;

    children?: MenuEntryConfig[]

    // Events
    events?: EventsConfig|undefined = {};

    constructor(data: Partial<MenuEntryConfig> = {}) {
        super();
        this.feed(data);
    }

    doClose() {
        // if (this.parent) this.parent.doClose();
        this.isOpened = false;
    }
}