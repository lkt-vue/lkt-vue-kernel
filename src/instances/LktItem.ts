import {LktObject} from './../interfaces/LktObject.ts';

const skipDataProps: string[] = [
    'lktDateProps',
    'lktStrictItem',
    'lktExcludedProps'
];

export class LktItem implements LktObject {

    lktAllowUndefinedProps: string[] = [];
    lktExcludedProps: string[] = [];
    lktDateProps: string[] = [];
    lktStrictItem: boolean = false;

    constructor(data?: LktObject) {
    }

    feed(data: LktObject = {}, target = this) {
        if (typeof data !== 'object') return;
        for (const [key, value] of Object.entries(data)) target.assignProp(key, value);
    }

    assignProp(key: string, value: any) {
        if (skipDataProps.includes(key) || this.lktExcludedProps.includes(key)) return;
        // if (typeof value === 'undefined') {
        //     if (!this.lktAllowUndefinedProps.includes(key)) return;
        // }
        if (this.lktStrictItem && !this.hasOwnProperty(key)) return;

        if (this.lktDateProps.includes(key)) {
            (this as any)[key] = new Date(value);
            return;
        }

        (this as any)[key] = value;
    }
}