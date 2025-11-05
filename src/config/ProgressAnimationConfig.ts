import {ProgressAnimation} from "../enums/ProgressAnimation.ts";

export interface ProgressAnimationConfig {
    type: ProgressAnimation,
    autoplay?: boolean,
    externalControl?: boolean,
    from?: number
    to?: number
}