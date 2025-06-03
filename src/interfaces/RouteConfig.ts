import {LktObject} from "./LktObject.ts";

export interface RouteConfig {
    path?: string
    name?: string
    hash?: string
    params?: LktObject
    query?: LktObject
    replace?: boolean
}