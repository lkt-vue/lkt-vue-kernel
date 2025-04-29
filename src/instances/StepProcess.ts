import {LktItem} from "./LktItem.ts";
import {StepProcessConfig} from "../config/StepProcessConfig.ts";
import {StepProcessStepConfig} from "../config/StepProcessStepConfig.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";

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

    constructor(data: Partial<StepProcessConfig> = {}) {
        super();
        this.feed(data);
    }
}