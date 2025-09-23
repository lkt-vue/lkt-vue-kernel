import {LktItem} from "./LktItem.ts";
import {AnchorConfig} from "../config/AnchorConfig.ts";
import {ValidTextValue} from "../types/ValidTextValue.ts";
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