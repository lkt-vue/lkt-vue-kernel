import {LktObject} from "../interfaces/LktObject.ts";

export interface ImageConfig {
    src?: string
    alt?: string
    text?: string
    class?: string
    imageStyle?: string|LktObject
}