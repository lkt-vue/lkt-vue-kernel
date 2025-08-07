import {LktItem} from "./LktItem.ts";
import {StepProcessConfig} from "../config/StepProcessConfig.ts";
import {StepProcessStepConfig} from "../config/StepProcessStepConfig.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {ItemCrudButtonNavPosition} from "../enums/ItemCrudButtonNavPosition.ts";
import {ItemCrudButtonNavVisibility} from "../enums/ItemCrudButtonNavVisibility.ts";

export class StepProcess extends LktItem implements StepProcessConfig {

    static lktDefaultValues: (keyof StepProcessConfig)[] = [
        'modelValue',
        'loading',
        'steps',
        'header',
        'nextButton',
        'prevButton',
        'buttonNavPosition',
        'buttonNavVisibility',
    ];


    modelValue?: string|number = '';
    loading?: boolean = false;

    steps?: Array<StepProcessStepConfig> = [];

    header?: HeaderConfig = {};
    nextButton?: ButtonConfig = {};
    prevButton?: ButtonConfig = {};

    // Nav
    buttonNavPosition?: ItemCrudButtonNavPosition = ItemCrudButtonNavPosition.Top;
    buttonNavVisibility?: ItemCrudButtonNavVisibility = ItemCrudButtonNavVisibility.Always;

    constructor(data: Partial<StepProcessConfig> = {}) {
        super();
        this.feed(data);
    }
}