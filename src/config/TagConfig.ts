import {TagType} from "../enums/TagType.ts";
import {ValidTextValue} from "../types/ValidTextValue.ts";

export interface TagConfig {
    class?: string
    text?: ValidTextValue
    featuredText?: ValidTextValue
    icon?: string
    iconAtEnd?: boolean
    featuredAtStart?: boolean
    type?: TagType
}