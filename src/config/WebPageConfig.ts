import {WebElement} from "../instances/WebElement.ts";
import {MultiLangValue} from "./MultiLangValue.ts";
import {WebPageStatus} from "../enums/WebPageStatus.ts";

export interface WebPageConfig {
    id: number|string|undefined
    name: string
    slug?: string
    status?: WebPageStatus
    scheduledDate?: Date
    nameData?: MultiLangValue
    webElements: Array<WebElement>
}