import {LktObject} from './../interfaces/LktObject.ts';

const skipDataProps: string[] = [
    'lktDateProps',
    'lktStrictItem',
    'lktExcludedProps'
];

export class LktItem implements LktObject {

    static lktAllowUndefinedProps: string[] = [];
    static lktExcludedProps: string[] = [];
    static lktDateProps: string[] = [];
    static lktStrictItem: boolean = false;
    static lktDefaultValues: (keyof LktObject)[] = [];

    constructor(data?: LktObject) {
    }

    feed(data: LktObject = {}, target = this) {
        if (typeof data !== 'object') return;
        for (const [key, value] of Object.entries(data)) target.assignProp(key, value);
    }

    assignProp(key: string, value: any) {
        if (skipDataProps.includes(key) || LktItem.lktExcludedProps.includes(key)) return;
        // if (typeof value === 'undefined') {
        //     if (!this.lktAllowUndefinedProps.includes(key)) return;
        // }
        if (LktItem.lktStrictItem && !this.hasOwnProperty(key)) return;

        if (LktItem.lktDateProps.includes(key)) {
            (this as any)[key] = new Date(value);
            return;
        }

        (this as any)[key] = value;
    }
}