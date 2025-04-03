import {FileEntityType} from "../enums/FileEntityType.ts";

export interface FileEntityConfig {
    id?: number|string|undefined
    type: FileEntityType
    name: string
    children?: FileEntityConfig[]
}