import {FormItemConfig} from "./FormItemConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {PolymorphicElementConfig} from "./PolymorphicElementConfig.ts";
import {HeaderConfig} from "./HeaderConfig.ts";
import {FormUiConfig} from "./FormUiConfig.ts";

export interface FormConfig {
    items?: Array<FormItemConfig>
    submitButton?: ButtonConfig|false
    container?: PolymorphicElementConfig
    header?: HeaderConfig
    uiConfig?: Partial<FormUiConfig>
}