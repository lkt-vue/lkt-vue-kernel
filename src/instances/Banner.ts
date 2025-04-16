import {LktItem} from "./LktItem.ts";
import {BannerConfig} from "../config/BannerConfig.ts";
import {BannerType} from "../enums/BannerType.ts";
import {PolymorphicElementConfig} from "../config/PolymorphicElementConfig.ts";
import {ImageConfig} from "../config/ImageConfig.ts";

export class Banner extends LktItem implements BannerConfig {

    static lktDefaultValues: (keyof BannerConfig)[] = [
        'type',
        'header',
        'subHeader',
        'art',
        'opacity',
    ];

    type: BannerType = BannerType.Static;
    header?: PolymorphicElementConfig = undefined;
    subHeader?: PolymorphicElementConfig = undefined;
    art?: ImageConfig = undefined;
    media?: ImageConfig = undefined;
    opacity?: string|number = undefined;

    constructor(data: Partial<BannerConfig> = {}) {
        super();
        this.feed(data);
    }
}