import {LktItem} from "./LktItem.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";
import {HeaderTag} from "../enums/HeaderTag.ts";

export class Header extends LktItem implements HeaderConfig {

    static lktAllowUndefinedProps: string[] = [
        'onClick',
    ];

    static lktDefaultValues: (keyof HeaderConfig)[] = [
        'tag',
        'class',
        'text',
        'icon',
    ];

    tag?: HeaderTag = HeaderTag.H2;
    class?: string = '';
    text?: string = '';
    icon?: string = '';

    constructor(data: Partial<HeaderConfig> = {}) {
        super();
        this.feed(data);
    }
}