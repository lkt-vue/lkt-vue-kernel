import {IconConfig} from "./IconConfig.ts";

export interface BoxConfig {

    // lkt-box
    title?: string
    iconAtEnd?: boolean
    style?: string
    class?: string

    // Icon
    icon?: IconConfig|string

    // // lkt-banner-box
    // label?: string,
    // labelTag?: string,
    // subLabel?: string,
    // subLabelTag?: string,
    // imgSrc?: string,
    // isParallax?: boolean,
    // opacity?: string|number,
    //
    // // lkt-iconic-box
    // label?: string,
    // labelTag?: string,
    // labelContainerTag?: string,
    // subLabel?: string,
    // subLabelTag?: string,
    // extraLabel?: string,
    // extraLabelTag?: string,
    // icon?: string,
    // imgSrc?: string,
}