import {StepProcessStepConfig} from "./StepProcessStepConfig.ts";
import {HeaderConfig} from "./HeaderConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {ItemCrudButtonNavPosition} from "../enums/ItemCrudButtonNavPosition.ts";
import {ItemCrudButtonNavVisibility} from "../enums/ItemCrudButtonNavVisibility.ts";

export interface StepProcessConfig {
    modelValue?: string|number
    loading?: boolean

    steps?: Array<StepProcessStepConfig>

    header?: HeaderConfig
    nextButton?: ButtonConfig,
    prevButton?: ButtonConfig,

    // Nav
    buttonNavPosition?: ItemCrudButtonNavPosition
    buttonNavVisibility?: ItemCrudButtonNavVisibility
}