import {ButtonConfig} from "./ButtonConfig.ts";

export interface StepProcessStepConfig {
    key: string,

    nextButton?: ButtonConfig,
    nextHidden?: boolean | ((currentStep: StepProcessStepConfig, steps: StepProcessStepConfig[]) => boolean),

    prevButton?: ButtonConfig,
    prevHidden?: boolean | ((currentStep: StepProcessStepConfig, steps: StepProcessStepConfig[]) => boolean),
}