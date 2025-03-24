import {LktItem} from "./LktItem.ts";
import {DocPageConfig} from "../config/DocPageConfig.ts";
import {DocPageSize} from "../enums/DocPageSize.ts";

export class DocPage extends LktItem implements DocPageConfig {

    static lktDefaultValues: (keyof DocPageConfig)[] = [
        'id',
        'size',
        'skipPageNumber',
        'frontPage',
        'title',
        'img',
        'icon',
    ];


    id?: string = '';
    size?: DocPageSize = DocPageSize.A4;
    skipPageNumber?: boolean = false;
    frontPage?: boolean = false;
    title?: string = '';
    img?: string = '';
    icon?: string = '';

    constructor(data: Partial<DocPageConfig> = {}) {
        super();
        this.feed(data);
    }
}