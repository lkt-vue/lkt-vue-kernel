import {SafeString} from "../value-objects/SafeString.ts";

export type ValidSafeStringValue = string | ((...args: any[]) => string) | undefined | SafeString;