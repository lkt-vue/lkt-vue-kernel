import {ButtonConfig} from "./ButtonConfig.ts";
import {StepRenderType} from "../enums/StepRenderType.ts";

export interface StepProcessStepConfig {
    key: string,
    renderType?: StepRenderType

    prevKey?: string|(() => string)
    nextKey?: string|(() => string)

    nextButton?: ButtonConfig|false,
    nextHidden?: boolean | ((currentStep: StepProcessStepConfig, steps: StepProcessStepConfig[]) => boolean),

    prevButton?: ButtonConfig|false,
    prevHidden?: boolean | ((currentStep: StepProcessStepConfig, steps: StepProcessStepConfig[]) => boolean),

    excludedFromTotalCount?: boolean|(() => boolean)
}