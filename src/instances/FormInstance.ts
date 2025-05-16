import {LktItem} from "./LktItem.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {FormConfig} from "../config/FormConfig.ts";
import {FormItemConfig} from "../config/FormItemConfig.ts";
import {PolymorphicElementConfig} from "../config/PolymorphicElementConfig.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";
import {FormUiConfig} from "../config/FormUiConfig.ts";

export class FormInstance extends LktItem implements FormConfig {

    static lktDefaultValues: (keyof FormConfig)[] = [
        'items',
        'submitButton',
        'container',
        'header',
        'uiConfig',
    ];

    items: Array<FormItemConfig> = [];
    submitButton: ButtonConfig|false = false;
    container?: PolymorphicElementConfig = {};
    header?: HeaderConfig = {};
    uiConfig?: Partial<FormUiConfig> = {};

    constructor(data: Partial<FormConfig> = {}) {
        super();
        this.feed(data);

        this.items = this.items.map((item) => {
            if (item.type === 'field' && typeof item.modificationsField === 'undefined') {
                item.modificationsField = {options: []};
            }
            return item;
        })
    }
}