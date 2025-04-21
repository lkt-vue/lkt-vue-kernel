import {WebElement} from "../instances/WebElement.ts";
import {MultiLangValue} from "./MultiLangValue.ts";

export interface WebPageConfig {
    id: number|string|undefined
    name: string
    nameData?: MultiLangValue
    webElements: Array<WebElement>
}