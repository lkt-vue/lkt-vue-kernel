import {LktItem} from "./LktItem.ts";
import {ImageConfig} from "../config/ImageConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export class Image extends LktItem implements ImageConfig {

    static lktAllowUndefinedProps: string[] = [
        'onClick',
    ];

    static lktDefaultValues: (keyof ImageConfig)[] = [
        'src',
        'alt',
        'text',
        'class',
        'imageStyle',
    ];

    src?: string = '';
    alt?: string = '';
    text?: string = '';
    class?: string = '';
    imageStyle?: string|LktObject = '';

    constructor(data: Partial<ImageConfig> = {}) {
        super();
        this.feed(data);
    }
}