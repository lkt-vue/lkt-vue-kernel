import {ImageConfig} from "./ImageConfig.ts";
import {BannerType} from "../enums/BannerType.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {HeaderConfig} from "./HeaderConfig.ts";

export interface BannerConfig {
    type?: BannerType
    header?: HeaderConfig
    subHeader?: HeaderConfig
    art?: ImageConfig
    media?: ImageConfig
    opacity?: string|number
    globalButton?: ButtonConfig|undefined
    navButtons?: Array<ButtonConfig>
}