import {FieldValidationConfig} from "../config/FieldValidationConfig.ts";
import {HTTPResponse} from "lkt-http-client";

export interface ClickEventArgs {
    event?: Event|undefined
    httpResponse?: HTTPResponse|undefined
}