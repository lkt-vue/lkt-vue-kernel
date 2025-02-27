import {ProgressType} from "../enums/ProgressType.ts";
import {ProgressValueFormat} from "../enums/ProgressValueFormat.ts";

export interface ProgressConfig {
    // Main value (current percentage)
    modelValue?: number

    // Percentage control (increment and decrement)
    type?: ProgressType
    duration?: number
    pauseOnHover?: boolean

    // Content
    header?: string
    valueFormat?: ProgressValueFormat

    // Styles
    palette?: string
}