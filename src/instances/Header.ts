import {LktItem} from "./LktItem.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";
import {HeaderTag} from "../enums/HeaderTag.ts";
import {IconConfig} from "../config/IconConfig.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";

export class Header extends LktItem implements HeaderConfig {

    static lktAllowUndefinedProps: string[] = [
        'onClick',
    ];

    static lktDefaultValues: (keyof HeaderConfig)[] = [
        'tag',
        'class',
        'text',
        'icon',
        'topStartButtons',
        'topEndButtons',
        'bottomButtons',
    ];

    tag?: HeaderTag = HeaderTag.H2;
    class?: string = '';
    text?: string = '';
    icon?: string|IconConfig = '';

    topStartButtons?: Array<ButtonConfig> = [];
    topEndButtons?: Array<ButtonConfig> = [];
    bottomButtons?: Array<ButtonConfig> = [];

    constructor(data: Partial<HeaderConfig> = {}) {
        super();
        this.feed(data);
    }
}