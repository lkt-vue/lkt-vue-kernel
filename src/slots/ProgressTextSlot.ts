import {UnitConfig} from "../config/UnitConfig.ts";

export interface ProgressTextSlot {
    text: string
    progress: number
    unit?: UnitConfig
}