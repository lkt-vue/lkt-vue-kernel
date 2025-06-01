import {LktItem} from "./LktItem.ts";
import {WebPageConfig} from "../config/WebPageConfig.ts";
import {generateRandomString, getUrlSlug} from "lkt-string-tools";
import {time} from "lkt-date-tools";
import {WebElement} from "./WebElement.ts";
import {MultiLangValue} from "../config/MultiLangValue.ts";
import {ItemCrudConfig} from "../config/ItemCrudConfig.ts";
import {WebPageStatus} from "../enums/WebPageStatus.ts";
import {getAvailableLanguages, getCurrentLanguage} from "lkt-i18n";

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
    nameData: MultiLangValue = {};
    slug: string = '';
    slugData: MultiLangValue = {};
    status?: WebPageStatus = WebPageStatus.Draft;
    scheduledDate?: Date = undefined;
    webElements: Array<WebElement> = [];

    crudConfig: ItemCrudConfig = {};

    constructor(data: Partial<WebPageConfig> = {}) {
        super();
        this.feed(data);

        this.keyMoment = generateRandomString(4) + this.id + time();

        if (Array.isArray(this.slugData)) {
            this.slugData = {};
            this.updateSlug();
        }

        if (!this.slugData) {
            this.updateSlug();
        }
    }

    updateKeyMoment() {
        this.keyMoment = generateRandomString(4) + this.id + time();
    }

    updateSlug() {
        this.slug = getUrlSlug(this.name);

        let languages = getAvailableLanguages();
        for (let i in languages) {
            let lang = languages[i];
            //@ts-ignore
            this.slugData[lang] = getUrlSlug(String(this.nameData[lang]));
        }
    }
}