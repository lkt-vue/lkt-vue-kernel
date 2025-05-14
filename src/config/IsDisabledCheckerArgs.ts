import {DataState} from "lkt-data-state";
import {LktObject} from "../interfaces/LktObject.ts";

export interface IsDisabledCheckerArgs {
    value?: any,
    dataState?: DataState,
    prop?: LktObject,
}