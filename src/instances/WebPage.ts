import {LktItem} from "./LktItem.ts";
import {WebPageConfig} from "../config/WebPageConfig.ts";
import {generateRandomString} from "lkt-string-tools";
import {time} from "lkt-date-tools";
import {WebElement} from "./WebElement.ts";
import {MultiLangValue} from "../config/MultiLangValue.ts";
import {ItemCrudConfig} from "../config/ItemCrudConfig.ts";

export class WebPage extends LktItem implements WebPageConfig {

    static lktDefaultValues: (keyof WebPageConfig)[] = [
        'id',
        'webElements',
    ];
    keyMoment: string = '';

    id: number|string|undefined = 0;
    name: string = '';
    nameData?: MultiLangValue = {};
    webElements: Array<WebElement> = [];

    crudConfig: ItemCrudConfig = {};

    constructor(data: Partial<WebPageConfig> = {}) {
        super();
        this.feed(data);

        this.keyMoment = generateRandomString(4) + this.id + time();
    }

    updateKeyMoment() {
        this.keyMoment = generateRandomString(4) + this.id + time();
    }
}