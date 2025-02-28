import {TagType} from "../enums/TagType.ts";

export interface TagConfig {
    class?: string
    text?: string
    featuredText?: string
    icon?: string
    iconAtEnd?: boolean
    featuredAtStart?: boolean
    type?: TagType
}