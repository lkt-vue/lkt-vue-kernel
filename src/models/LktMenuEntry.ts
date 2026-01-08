import {LktItem} from "../instances/LktItem.ts";
import {HeaderConfig} from "../config/HeaderConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export class LktMenuEntry extends LktItem {

    static lktAllowUndefinedProps: string[] = [
    ];

    static lktDefaultValues: (keyof LktObject)[] = [
        'id',
        'nameData',
        'type',
        'accessLevel',
        'url',
        'component',
    ];

    id: number = 0;
    nameData: LktObject = {};
    type: number = 1;
    accessLevel: number = 1;
    url: string = '';
    component: string = '';

    constructor(data: Partial<HeaderConfig> = {}) {
        super();
        this.feed(data);
    }
}