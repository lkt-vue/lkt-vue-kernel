import {RouteLocationRaw} from "vue-router";
import {LktObject} from "../interfaces/LktObject.ts";
import {RouteConfig} from "../interfaces/RouteConfig.ts";

export type ValidAnchorTo = RouteConfig | string | ((data: LktObject) => RouteConfig | string)