import {TrackConfig} from "./TrackConfig.ts";

export interface CircleConfig {
    radius: number
    track?: TrackConfig
    ball?: CircleConfig
}