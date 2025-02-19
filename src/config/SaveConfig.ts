import {SaveType} from "../enums/SaveType.ts";

export interface SaveConfig {
    type?: SaveType
    delay?: number
}