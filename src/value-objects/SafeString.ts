import {ValidSafeStringValue} from "../types/ValidSafeStringValue.ts";

export class SafeString {
    private readonly value: ValidSafeStringValue;

    constructor(input: ValidSafeStringValue) {
        this.value = input;
    }

    getValue(...args: any[]): string {
        if (typeof this.value === 'function') {
            return this.value(...args);

        } else if (typeof this.value === 'object' && typeof this.value === typeof SafeString) {
            return this.value.getValue(...args);

        } else if (typeof this.value === 'string') {
            return this.value;
        }
        return '';
    }
}