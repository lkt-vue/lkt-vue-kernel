import {LktItem} from "./LktItem.ts";
import {TagConfig} from "../config/TagConfig.ts";
import {TagType} from "../enums/TagType.ts";
import {ValidTextValue} from "../types/ValidTextValue.ts";

export class Tag extends LktItem implements TagConfig {

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
    text?: ValidTextValue = '';
    featuredText?: ValidTextValue = '';
    icon?: string = '';
    iconAtEnd?: boolean = false;
    featuredAtStart?: boolean = false;
    type?: TagType = TagType.NotDefined;

    constructor(data: Partial<TagConfig> = {}) {
        super();
        this.feed(data);
    }
}