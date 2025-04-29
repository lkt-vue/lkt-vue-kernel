import {LktItem} from "./LktItem.ts";
import {StepProcessConfig} from "../config/StepProcessConfig.ts";
import {StepProcessStepConfig} from "../config/StepProcessStepConfig.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";

export class StepProcess extends LktItem implements StepProcessConfig {

    static lktDefaultValues: (keyof StepProcessConfig)[] = [
        'modelValue',
        'loading',
        'steps',
        'header',
    ];


    modelValue?: string|number = '';
    loading?: boolean = false;

    steps?: Array<StepProcessStepConfig> = [];

    header?: HeaderConfig = {};
    nextButton?: ButtonConfig = {};
    prevButton?: ButtonConfig = {};

    constructor(data: Partial<StepProcessConfig> = {}) {
        super();
        this.feed(data);
    }
}