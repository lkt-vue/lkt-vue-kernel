import {LktItem} from "./LktItem.ts";
import {ProgressConfig} from "../config/ProgressConfig.ts";
import {ProgressType} from "../enums/ProgressType.ts";
import {ProgressValueFormat} from "../enums/ProgressValueFormat.ts";

export class Progress extends LktItem implements ProgressConfig {

    static lktAllowUndefinedProps: string[] = [
    ];

    static lktDefaultValues: (keyof ProgressConfig)[] = [
        'modelValue',
        'type',
        'duration',
        'pauseOnHover',
        'header',
        'valueFormat',
        'palette',
    ];

    // Main value (current percentage)
    modelValue?: number = 0;

    // Percentage control (increment and decrement)
    type?: ProgressType = ProgressType.None;
    duration?: number = 4000;
    pauseOnHover?: boolean = false;

    // Content
    header?: string = '';
    valueFormat?: ProgressValueFormat = ProgressValueFormat.Auto;

    // Styles
    palette?: string = '';

    constructor(data: Partial<ProgressConfig> = {}) {
        super();
        this.feed(data);
    }
}