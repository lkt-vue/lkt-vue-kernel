import {LktItem} from "./LktItem.ts";
import {AnchorConfig} from "../config/AnchorConfig.ts";
import {AnchorType} from "../enums/AnchorType.ts";
import {RouteLocationRaw} from "vue-router";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {EventsConfig} from "../config/EventsConfig.ts";
import {getAnchorHref} from "../functions/anchor-functions.ts";
import {ValidTextValue} from "../types/ValidTextValue.ts";
import {IconConfig} from "../config/IconConfig.ts";

export class Anchor extends LktItem implements AnchorConfig {

    static lktAllowUndefinedProps: string[] = [];

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
        'external',
        'events',
        'text',
        'icon',
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
    external: boolean = false;
    text?: ValidTextValue = '';
    icon?: IconConfig|string = '';

    // Event management
    events?: EventsConfig|undefined = {};

    getHref() {
        return getAnchorHref(this);
    }

    constructor(data: Partial<AnchorConfig> = {}) {
        super();
        this.feed(data);
    }
}