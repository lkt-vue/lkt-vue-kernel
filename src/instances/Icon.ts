import {LktItem} from "./LktItem.ts";
import {IconConfig} from "../config/IconConfig.ts";
import {ValidTextValue} from "../types/ValidTextValue.ts";
import {IconType} from "../enums/IconType.ts";

export class Icon extends LktItem implements IconConfig {

    static lktAllowUndefinedProps: string[] = [
        'onClick',
    ];

    static lktDefaultValues: (keyof IconConfig)[] = [
        'icon',
        'text',
        'class',
        'pack',
        'type',
        'onClick',
    ];

    icon?: ValidTextValue = '';
    text?: ValidTextValue = '';
    class?: ValidTextValue = '';
    pack?: ValidTextValue = '';
    type?: IconType = IconType.NotDefined;

    // Event management
    onClick?: Function|undefined

    constructor(data: Partial<IconConfig> = {}) {
        super();
        this.feed(data);
    }
}