import {LktItem} from "./LktItem.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";
import {HeaderTag} from "../enums/HeaderTag.ts";
import {IconConfig} from "../config/IconConfig.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {PolymorphicElementConfig} from "../config/PolymorphicElementConfig.ts";
import {ImageConfig} from "../config/ImageConfig.ts";

export class Header extends LktItem implements HeaderConfig {

    static lktAllowUndefinedProps: string[] = [
        'onClick',
    ];

    static lktDefaultValues: (keyof HeaderConfig)[] = [
        'tag',
        'class',
        'text',
        'icon',
        'image',
        'topStartButtons',
        'topStartContent',
        'topEndButtons',
        'topEndContent',
        'bottomButtons',
    ];

    tag?: HeaderTag = HeaderTag.H2;
    class?: string = '';
    text?: string = '';
    icon?: string|IconConfig = '';
    image?: ImageConfig = undefined;

    topStartButtons?: Array<ButtonConfig> = [];
    topStartContent?: Array<PolymorphicElementConfig> = [];

    topEndButtons?: Array<ButtonConfig> = [];
    topEndContent?: Array<PolymorphicElementConfig> = [];

    bottomButtons?: Array<ButtonConfig> = [];

    constructor(data: Partial<HeaderConfig> = {}) {
        super();
        this.feed(data);
    }
}