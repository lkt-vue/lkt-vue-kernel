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
import {ValidAnchorTo} from "../types/ValidAnchorTo.ts";
import {DotConfig} from "../config/DotConfig.ts";

export class Dot extends LktItem implements AnchorConfig {

    static lktAllowUndefinedProps: string[] = [];

    static lktDefaultValues: (keyof DotConfig)[] = [
        'text',
        'class',
    ];
    text?: ValidTextValue = '';
    class: string = '';

    constructor(data: Partial<DotConfig> = {}) {
        super();
        this.feed(data);
    }
}