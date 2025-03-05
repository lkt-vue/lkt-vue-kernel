import {FieldValidationConfig} from "../config/FieldValidationConfig.ts";
import {HTTPResponse} from "lkt-http-client";

export interface FieldValidationEndEventArgs {
    config: FieldValidationConfig,
    httpResponse: HTTPResponse,
}