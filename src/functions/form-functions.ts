import { DataState } from 'lkt-data-state';
import {FormConfig} from "../config/FormConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export const getFormDataState = (value: LktObject, modifications: LktObject, form: FormConfig) => {
    let r = new DataState(JSON.parse(JSON.stringify(value)), {
        onlyProps: getFormFieldsKeys(form),
        recursiveOnlyProps: false,
    });
    r.increment(JSON.parse(JSON.stringify(modifications)));
    return r;
};

export const getFormFieldsKeys = (form: FormConfig): string[] => {
    if (form.items === undefined) return [];
    if (form.items.length === 0) return [];

    let r: string[] = [];

    for (let i in form.items) {
        let item = form.items[i];
        switch (item.type) {
            case 'field':
                if (item.key !== undefined) {
                    r.push(item.key);
                }
                break;

            case 'form':
                if (item.form) {
                    r = [...r, ...getFormFieldsKeys(item.form)];
                }
                break;
        }
    }
    return r;
};

export const getFormSlotKeys = (form: FormConfig): string[] => {
    if (form.items === undefined) return [];
    if (form.items.length === 0) return [];
    let r = <Array<string>>[];
    for (let i in form.items) {
        let item = form.items[i];
        switch (item.type) {
            case 'slot':
                if (item.key !== undefined) {
                    r.push(item.key);
                }
                break;

            case 'form':
                if (item.form) {
                    r = [...r, ...getFormSlotKeys(item.form)];
                }
                break;
        }

    }
    return r;
}