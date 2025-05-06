import {LktItem} from "./LktItem.ts";
import {AnchorConfig} from "../config/AnchorConfig.ts";
import {AccordionConfig} from "../config/AccordionConfig.ts";
import {AccordionType} from "../enums/AccordionType.ts";
import {AccordionToggleMode} from "../enums/AccordionToggleMode.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {FormConfig} from "../config/FormConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {FormFieldConfig} from "../config/FormFieldConfig.ts";
import {PolymorphicElementConfig} from "../config/PolymorphicElementConfig.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";

export class FormInstance extends LktItem implements FormConfig {

    static lktDefaultValues: (keyof FormConfig)[] = [
        'modelValue',
        'fields',
        'forms',
        'submitButton',
        'container',
        'header',
    ];

    modelValue: LktObject = {};
    fields: Array<FormFieldConfig> = [];
    forms: Array<FormConfig> = [];
    submitButton: ButtonConfig = {};
    container?: PolymorphicElementConfig = {};
    header?: HeaderConfig = {};

    constructor(data: Partial<FormConfig> = {}) {
        super();
        this.feed(data);
    }
}