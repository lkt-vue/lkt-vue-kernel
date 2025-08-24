import {LktItem} from "./LktItem.ts";
import {BannerConfig} from "../config/BannerConfig.ts";
import {BannerType} from "../enums/BannerType.ts";
import {ImageConfig} from "../config/ImageConfig.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";

export class Banner extends LktItem implements BannerConfig {

    static lktDefaultValues: (keyof BannerConfig)[] = [
        'type',
        'header',
        'subHeader',
        'art',
        'opacity',
        'globalButton',
        'navButtons',
    ];

    type: BannerType = BannerType.Static;
    header?: HeaderConfig = undefined;
    subHeader?: HeaderConfig = undefined;
    art?: ImageConfig = undefined;
    media?: ImageConfig = undefined;
    opacity?: string|number = undefined;
    globalButton?: ButtonConfig|undefined = undefined;
    navButtons?: Array<ButtonConfig> = [];

    constructor(data: Partial<BannerConfig> = {}) {
        super();
        this.feed(data);
    }
}