import {ButtonConfig} from "./ButtonConfig.ts";

export interface StepProcessStepConfig {
    key: string,

    nextButton?: ButtonConfig|false,
    nextHidden?: boolean | ((currentStep: StepProcessStepConfig, steps: StepProcessStepConfig[]) => boolean),

    prevButton?: ButtonConfig|false,
    prevHidden?: boolean | ((currentStep: StepProcessStepConfig, steps: StepProcessStepConfig[]) => boolean),
}