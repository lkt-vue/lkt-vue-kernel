import {LktItem} from "./LktItem.ts";
import {TagConfig} from "../config/TagConfig.ts";
import {TagType} from "../enums/TagType.ts";

export class Tag extends LktItem implements TagConfig {

    static lktAllowUndefinedProps: string[] = [
        'onClick',
    ];

    static lktDefaultValues: (keyof TagConfig)[] = [
        'class',
        'text',
        'featuredText',
        'icon',
        'iconAtEnd',
        'featuredAtStart',
        'type',
    ];

    class?: string = '';
    text?: string = '';
    featuredText?: string = '';
    icon?: string = '';
    iconAtEnd?: boolean = false;
    featuredAtStart?: boolean = false;
    type?: TagType = TagType.NotDefined;

    constructor(data: Partial<TagConfig> = {}) {
        super();
        this.feed(data);
    }
}