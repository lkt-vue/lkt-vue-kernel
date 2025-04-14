import {FileEntityType} from "../enums/FileEntityType.ts";
import {FileEntity} from "../instances/FileEntity.ts";

export interface FileEntityConfig {
    id?: number|string|undefined
    type: FileEntityType
    name: string
    src: string
    children?: FileEntityConfig[]
    parent?:number|string|undefined
}