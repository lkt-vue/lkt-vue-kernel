import {LktObject} from "../interfaces/LktObject.ts";
import {MultiLangValue} from "./MultiLangValue.ts";

export interface WebElementPropsConfig extends LktObject {
    class?: string,
    icon?: string,
    header?: MultiLangValue
    text?: MultiLangValue
}