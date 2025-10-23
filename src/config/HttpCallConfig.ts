import {LktObject} from "../interfaces/LktObject.ts";
import {HttpCallEvents} from "./events/HttpCallEvents.ts";

export interface HttpCallConfig {
    resource?: string,
    data?: LktObject,
    events?: HttpCallEvents
}