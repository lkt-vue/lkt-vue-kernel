import {LktObject} from "../interfaces/LktObject.ts";

export interface HttpCallConfig {
    resource?: string,
    data?: LktObject,
    events?: {
        onStart?: Function|undefined,
        onEnd?: Function|undefined,
    }
}