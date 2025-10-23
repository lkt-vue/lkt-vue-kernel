import {ClickEventArgs} from "../../arguments/ClickEventArgs.ts";
import {FieldValidationEndEventArgs} from "../../arguments/FieldValidationEndEventArgs.ts";
import {FieldLoadOptionsEndEventArgs} from "../../arguments/FieldLoadOptionsEndEventArgs.ts";
import {OptionConfig} from "../OptionConfig.ts";

export interface FieldEvents {
    validationStart?: undefined | Function
    validationEnd?: undefined | ((data: FieldValidationEndEventArgs) => boolean)
    loadOptionsStart?: undefined | Function
    loadOptionsEnd?: undefined | ((data: FieldLoadOptionsEndEventArgs) => void)
    updatedOptions?: ((data: {options: Array<OptionConfig>}) => void)
    clickOption?: ((data: {option: OptionConfig}) => void)
    itemCreated?: undefined | Function
    changed?: undefined | Function
}