import {LktItem} from "./LktItem.ts";
import {AnchorConfig} from "../config/AnchorConfig.ts";
import {AnchorType} from "../enums/AnchorType.ts";
import {RouteLocationRaw} from "vue-router";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export class Anchor extends LktItem implements AnchorConfig {

    static lktAllowUndefinedProps: string[] = [
        'onClick',
    ];

    static lktDefaultValues: (keyof AnchorConfig)[] = [
        'type',
        'to',
        'class',
        'isActive',
        'downloadFileName',
        'disabled',
        'onClick',
        'confirmModal',
        'confirmModalKey',
        'confirmData',
        'imposter',
    ];

    type: AnchorType = AnchorType.RouterLink;
    to?: RouteLocationRaw | string = '';
    class: string = '';
    isActive: boolean = false;
    downloadFileName: string = '';
    disabled: boolean = false;
    onClick: Function | undefined = undefined;
    confirmModal: ValidModalName = '';
    confirmModalKey: ValidModalKey = '_';
    confirmData: LktObject = {};
    imposter: boolean = false;

    constructor(data: Partial<AnchorConfig> = {}) {
        super();
        this.feed(data);
    }

    getHref() {
        let href = '';
        if (typeof this.to === 'string') href = this.to;

        if (AnchorType.Mail === this.type) return `mailto:${href}`;
        if (AnchorType.Tel === this.type) return `tel:${href}`;

        if ([
            AnchorType.Href,
            AnchorType.Mail,
            AnchorType.Tel,
            AnchorType.Tab,
            AnchorType.Download,
        ].includes(this.type)) {
            return href;
        }

        if (typeof this.to === 'string' && this.to !== '') return this.to;
        return '';
    }
}