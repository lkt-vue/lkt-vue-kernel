import {ButtonConfig} from "./ButtonConfig.ts";

export interface StepProcessStepConfig {
    key: string,

    nextButton?: ButtonConfig,
    nextHidden?: boolean,

    prevButton?: ButtonConfig,
    prevHidden?: boolean,
}