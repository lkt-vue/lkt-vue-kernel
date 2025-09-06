import {LktItem} from "./LktItem.ts";
import {ProgressConfig} from "../config/ProgressConfig.ts";
import {ProgressAnimation} from "../enums/ProgressAnimation.ts";
import {ProgressValueFormat} from "../enums/ProgressValueFormat.ts";
import {ProgressType} from "../enums/ProgressType.ts";
import {CircleConfig} from "../config/CircleConfig.ts";
import {UnitConfig} from "../config/UnitConfig.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";

export class Progress extends LktItem implements ProgressConfig {

    static lktAllowUndefinedProps: string[] = [
        'circle',
        'unit',
    ];

    static lktDefaultValues: (keyof ProgressConfig)[] = [
        'modelValue',
        'animation',
        'type',
        'duration',
        'pauseOnHover',
        'header',
        'valueFormat',
        'circle',
        'unit',
    ];

    // Main value (current percentage)
    modelValue?: number = 0;

    // Percentage control (increment and decrement)
    animation?: ProgressAnimation = ProgressAnimation.None;
    type?: ProgressType = ProgressType.Bar;
    duration?: number = 4000;
    pauseOnHover?: boolean = false;
    unit?: UnitConfig = undefined;

    // Content
    header?: HeaderConfig = {};
    valueFormat?: ProgressValueFormat = ProgressValueFormat.Auto;

    // Circle
    circle?: CircleConfig = undefined;

    constructor(data: Partial<ProgressConfig> = {}) {
        super();
        this.feed(data);
    }
}