import {LktItem} from "./LktItem.ts";
import {MenuEntryConfig} from "../config/MenuEntryConfig.ts";
import {EventsConfig} from "../config/EventsConfig.ts";

export class MenuEntry extends LktItem implements MenuEntryConfig {

    static lktDefaultValues: (keyof MenuEntryConfig)[] = [
        'key',
        'href',
        'label',
        'icon',
        'isActiveChecker',
        'isOpened',
        'isActive',
        'parent',
        'children',
        'events',
        'onClick',
    ];

    key?: string = '';
    href?: string = '';
    label?: string = '';
    icon?: string = '';

    isActiveChecker?: Function|undefined = undefined;

    isOpened?: boolean = false;
    isActive?: boolean = false;
    parent?: MenuEntryConfig|undefined = undefined;

    children?: MenuEntryConfig[]

    // Events
    events?: EventsConfig|undefined = {};

    // Deprecated
    onClick?: Function|undefined = undefined;

    constructor(data: Partial<MenuEntryConfig> = {}) {
        super();
        this.feed(data);
    }

    setChildren(children: MenuEntry[]) {
        children.forEach(c => c.parent = this);
        this.children = children;
        return this;
    }

    setOnClick(fn: Function) {
        this.onClick = fn;
        return this;
    }

    setIsActiveChecker(fn: Function) {
        this.isActiveChecker = fn;
        return this;
    }

    setIsActive(enabled: boolean = true) {
        this.isActive = enabled;
        return this;
    }

    setLabel(str: string) {
        this.label = str;
        return this;
    }

    setIcon(str: string) {
        this.icon = str;
        return this;
    }

    doClose() {
        // if (this.parent) this.parent.doClose();
        this.isOpened = false;
    }
}