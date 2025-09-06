import {ProgressAnimation} from "../enums/ProgressAnimation.ts";
import {ProgressValueFormat} from "../enums/ProgressValueFormat.ts";
import {ProgressType} from "../enums/ProgressType.ts";
import {CircleConfig} from "./CircleConfig.ts";
import {UnitConfig} from "./UnitConfig.ts";

export interface ProgressConfig {
    // Main value (current percentage)
    modelValue?: number

    // Percentage control (increment and decrement)
    type?: ProgressType
    animation?: ProgressAnimation
    duration?: number
    direction?: 'right' | 'left'
    pauseOnHover?: boolean
    unit?: string | UnitConfig

    // Content
    header?: string
    valueFormat?: ProgressValueFormat

    // Circle
    circle?: CircleConfig
}