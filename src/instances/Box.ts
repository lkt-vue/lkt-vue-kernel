import {LktItem} from "./LktItem.ts";
import {BoxConfig} from "../config/BoxConfig.ts";
import {IconConfig} from "../config/IconConfig.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";

export class Box extends LktItem implements BoxConfig {

    static lktDefaultValues: (keyof BoxConfig)[] = [
        'title',
        'iconAtEnd',
        'style',
        'class',
        'contentClass',
        'icon',
        'header',
    ];

    style: string = '';
    class: string = '';
    contentClass?: string

    // Icon
    icon: IconConfig|string = '';

    // Header
    header?: HeaderConfig

    // Deprecated
    title?: string = '';
    iconAtEnd: boolean = false;


    constructor(data: Partial<BoxConfig> = {}) {
        super();
        this.feed(data);
    }
}