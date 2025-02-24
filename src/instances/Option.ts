import {LktObject} from './../interfaces/LktObject.ts';
import {OptionConfig} from './../config/OptionConfig.ts';
import {ValidOptionValue} from './../types/ValidOptionValue.ts';
import {LktItem} from './../instances/LktItem.ts';
import {ValidModalName} from "../types/ValidModalName.ts";

export class Option extends LktItem implements OptionConfig {
    value: ValidOptionValue = undefined;
    label: string = '';
    data?: LktObject = {};
    disabled?: boolean = false;
    group?: string = '';
    icon?: string = '';
    modal?: ValidModalName = '';

    constructor(data: Partial<OptionConfig> = {}) {
        super();
        this.feed(data);
    }
}