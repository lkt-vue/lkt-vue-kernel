import {StepProcessStepConfig} from "./StepProcessStepConfig.ts";
import {HeaderConfig} from "./HeaderConfig.ts";

export interface StepProcessConfig {
    modelValue?: string|number
    loading?: boolean

    steps?: Array<StepProcessStepConfig>

    header?: HeaderConfig
}