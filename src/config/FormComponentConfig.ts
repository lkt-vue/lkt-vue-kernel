import {PolymorphicElementConfig} from "./PolymorphicElementConfig.ts";
import {FormConfig} from "./FormConfig.ts";

export interface FormComponentConfig extends PolymorphicElementConfig {
    form?: FormConfig
}