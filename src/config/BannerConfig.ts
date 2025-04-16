import {PolymorphicElementConfig} from "./PolymorphicElementConfig.ts";
import {ImageConfig} from "./ImageConfig.ts";
import {BannerType} from "../enums/BannerType.ts";

export interface BannerConfig {
    type?: BannerType
    header?: PolymorphicElementConfig
    subHeader?: PolymorphicElementConfig
    art?: ImageConfig
    opacity?: string|number
}