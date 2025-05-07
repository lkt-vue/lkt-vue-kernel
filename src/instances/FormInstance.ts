import {LktItem} from "./LktItem.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {FormConfig} from "../config/FormConfig.ts";
import {FormItemConfig} from "../config/FormItemConfig.ts";
import {PolymorphicElementConfig} from "../config/PolymorphicElementConfig.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";

export class FormInstance extends LktItem implements FormConfig {

    static lktDefaultValues: (keyof FormConfig)[] = [
        'items',
        'submitButton',
        'container',
        'header',
    ];

    items: Array<FormItemConfig> = [];
    submitButton: ButtonConfig|false = false;
    container?: PolymorphicElementConfig = {};
    header?: HeaderConfig = {};

    constructor(data: Partial<FormConfig> = {}) {
        super();
        this.feed(data);
    }
}