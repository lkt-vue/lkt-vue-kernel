import {DocPageSize} from "../enums/DocPageSize.ts";

export interface DocPageConfig {
    id?: string
    size?: DocPageSize
    skipPageNumber?: boolean
    frontPage?: boolean
    title?: string
    img?: string
    icon?: string
}