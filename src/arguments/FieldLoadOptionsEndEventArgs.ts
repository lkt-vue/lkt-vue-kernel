import {HTTPResponse} from "lkt-http-client";
import {OptionConfig} from "../config/OptionConfig.ts";

export interface FieldLoadOptionsEndEventArgs {
    options: Array<OptionConfig>
    httpResponse: HTTPResponse
}