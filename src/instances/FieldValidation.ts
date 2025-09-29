import { ValidationCode } from '../enums/ValidationCode';
import { ValidationStatus } from '../enums/ValidationStatus';
import {HTTPResponse} from "lkt-http-client";
import {LktItem} from "./LktItem.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {IconConfig} from "../config/IconConfig.ts";
import {PolymorphicElementConfig} from "../config/PolymorphicElementConfig.ts";

export class FieldValidation extends LktItem {
    code?: ValidationCode|string = undefined;
    status: ValidationStatus = ValidationStatus.Info;

    icon?: IconConfig|string|false = undefined;
    min: number = 0;
    max: number = 0;
    equalToValue: number|string|undefined = undefined;
    httpResponse?: HTTPResponse = undefined;

    element?: PolymorphicElementConfig = undefined;

    constructor(data: LktObject) {
        super();
        this.feed(data);
    }

    setMin(n: number) {
        this.min = n;
        return this;
    }

    setMax(n: number) {
        this.max = n;
        return this;
    }

    setEqualToValue(val: number|string) {
        this.equalToValue = val;
        return this;
    }

    setHTTPResponse(val: HTTPResponse) {
        this.httpResponse = val;
        return this;
    }

    static createEmpty(status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.Empty, status});
    }

    static createEmail(status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.Email, status});
    }

    static createMinStr(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MinStringLength, status}).setMin(min);
    }

    static createMaxStr(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MaxStringLength, status}).setMax(max);
    }

    static createMinNum(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MinNumber, status}).setMin(min);
    }

    static createMaxNum(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MaxNumber, status}).setMax(max);
    }

    static createNumBetween(min: number, max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MaxNumber, status}).setMin(min).setMax(max);
    }

    static createMinNumbers(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MinNumbers, status}).setMin(min);
    }

    static createMaxNumbers(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MaxNumbers, status}).setMax(max);
    }

    static createMinUpperChars(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MinUpperChars, status}).setMin(min);
    }

    static createMaxUpperChars(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MaxUpperChars, status}).setMax(max);
    }

    static createMinLowerChars(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MinLowerChars, status}).setMin(min);
    }

    static createMaxLowerChars(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MaxLowerChars, status}).setMax(max);
    }

    static createMinSpecialChars(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MinSpecialChars, status}).setMin(min);
    }

    static createMaxSpecialChars(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MaxSpecialChars, status}).setMax(max);
    }

    static createMinChars(min: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MinChars, status}).setMin(min);
    }

    static createMaxChars(max: number, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.MaxChars, status}).setMax(max);
    }

    static createEqualTo(value: number|string, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.EqualTo, status}).setEqualToValue(value);
    }

    static createRemoteResponse(httpResponse: HTTPResponse, status: ValidationStatus = ValidationStatus.Ko) {
        return new FieldValidation({code: ValidationCode.HTTPResponse, status}).setHTTPResponse(httpResponse);
    }
}