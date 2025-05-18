import {LktItem} from "./LktItem.ts";
import {WebPageConfig} from "../config/WebPageConfig.ts";
import {generateRandomString, getUrlSlug} from "lkt-string-tools";
import {time} from "lkt-date-tools";
import {WebElement} from "./WebElement.ts";
import {MultiLangValue} from "../config/MultiLangValue.ts";
import {ItemCrudConfig} from "../config/ItemCrudConfig.ts";
import {WebPageStatus} from "../enums/WebPageStatus.ts";

export class WebPage extends LktItem implements WebPageConfig {

    static lktDefaultValues: (keyof WebPageConfig)[] = [
        'id',
        'name',
        'slug',
        'status',
        'scheduledDate',
        'nameData',
        'webElements',
    ];
    keyMoment: string = '';

    id: number|string|undefined = 0;
    name: string = '';
    slug: string = '';
    status?: WebPageStatus = WebPageStatus.Draft;
    scheduledDate?: Date = undefined;
    nameData?: MultiLangValue = {};
    webElements: Array<WebElement> = [];

    crudConfig: ItemCrudConfig = {};

    constructor(data: Partial<WebPageConfig> = {}) {
        super();
        this.feed(data);

        this.keyMoment = generateRandomString(4) + this.id + time();

        if (this.name && this.name !== '' && !this.slug) {
            this.updateSlug();
        }
    }

    updateKeyMoment() {
        this.keyMoment = generateRandomString(4) + this.id + time();
    }

    updateSlug() {
        this.slug = getUrlSlug(this.name);
    }
}