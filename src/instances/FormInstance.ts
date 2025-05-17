import {LktItem} from "./LktItem.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {FormConfig} from "../config/FormConfig.ts";
import {FormItemConfig} from "../config/FormItemConfig.ts";
import {PolymorphicElementConfig} from "../config/PolymorphicElementConfig.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";
import {FormUiConfig} from "../config/FormUiConfig.ts";
import {FieldConfig} from "../config/FieldConfig.ts";
import {RenderAndDisplayProps} from "../interfaces/RenderAndDisplayProps.ts";
import {FormComponentConfig} from "../config/FormComponentConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";

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

    static mkFieldItemConfig(key: string, field: FieldConfig, modificationsField: FieldConfig = {}, displayConfig: RenderAndDisplayProps = {}) {
        return <FormItemConfig>{
            type: 'field',
            key,
            field,
            modificationsField,
            ...displayConfig
        }
    }

    static mkFormItemConfig(form: FormConfig, displayConfig: RenderAndDisplayProps = {}) {
        return <FormItemConfig>{
            type: 'form',
            form,
            ...displayConfig
        }
    }

    static mkComponentItemConfig(component: FormComponentConfig, displayConfig: RenderAndDisplayProps = {}) {
        return <FormItemConfig>{
            type: 'component',
            component,
            ...displayConfig
        }
    }

    static mkSlotItemConfig(key: string, slotData: LktObject = {}) {
        return <FormItemConfig>{
            type: 'slot',
            key,
            slotData,
        }
    }
}