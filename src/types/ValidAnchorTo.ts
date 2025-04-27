import {RouteLocationRaw} from "vue-router";
import {LktObject} from "../interfaces/LktObject.ts";

export type ValidAnchorTo = RouteLocationRaw | string | ((data: LktObject) => RouteLocationRaw | string)