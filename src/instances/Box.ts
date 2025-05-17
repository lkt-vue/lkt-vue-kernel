import {LktItem} from "./LktItem.ts";
import {BoxConfig} from "../config/BoxConfig.ts";
import {IconConfig} from "../config/IconConfig.ts";

export class Box extends LktItem implements BoxConfig {

    static lktDefaultValues: (keyof BoxConfig)[] = [
        'title',
        'iconAtEnd',
        'style',
        'class',
        'contentClass',
        'icon',
    ];

    title: string = '';
    iconAtEnd: boolean = false;
    style: string = '';
    class: string = '';
    contentClass?: string

    // Icon
    icon: IconConfig|string = '';

    constructor(data: Partial<BoxConfig> = {}) {
        super();
        this.feed(data);
    }
}