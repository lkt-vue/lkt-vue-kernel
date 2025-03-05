import {LktObject} from "../interfaces/LktObject.ts";

export interface HttpConfig {
    resource?: string,
    data?: LktObject,
    events?: {
        onStart?: Function|undefined,
        onEnd?: Function|undefined,
    }
}