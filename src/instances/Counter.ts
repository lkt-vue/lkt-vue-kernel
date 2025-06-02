import {LktItem} from "./LktItem.ts";
import {CounterConfig} from "../config/CounterConfig.ts";
import {CounterType} from "../enums/CounterType.ts";

export class Counter extends LktItem implements CounterConfig {

    static lktDefaultValues: (keyof CounterConfig)[] = [
        'type',
        'from',
        'to',
        'step',
        'timeout',
        'dateFormat',
    ];

    type?: CounterType = CounterType.Number;
    from?: Date|number = undefined;
    to?: Date|number = undefined;
    step?: number = 1;
    timeout?: number = 1000;
    dateFormat?: string = ':dd :hh :mm :ss';
    seconds?: number = 60

    constructor(data: Partial<CounterConfig> = {}) {
        super();
        this.feed(data);
    }
}