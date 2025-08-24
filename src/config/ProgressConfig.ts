import {ProgressType} from "../enums/ProgressType.ts";
import {ProgressValueFormat} from "../enums/ProgressValueFormat.ts";
import {ProgressInterface} from "../enums/ProgressInterface.ts";
import {CircleConfig} from "./CircleConfig.ts";

export interface ProgressConfig {
    // Main value (current percentage)
    modelValue?: number

    // Percentage control (increment and decrement)
    type?: ProgressType
    interface?: ProgressInterface
    duration?: number
    pauseOnHover?: boolean

    // Content
    header?: string
    valueFormat?: ProgressValueFormat

    // Circle
    circle?: CircleConfig,

    // Styles
    palette?: string
}