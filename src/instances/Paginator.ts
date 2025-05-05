import {LktItem} from "./LktItem.ts";
import {PaginatorConfig} from "../config/PaginatorConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {PaginatorType} from "../enums/PaginatorType.ts";
import {ClickEventArgs} from "../arguments/ClickEventArgs.ts";

export class Paginator extends LktItem implements PaginatorConfig {

    static lktAllowUndefinedProps: string[] = [
    ];

    static lktDefaultValues: (keyof PaginatorConfig)[] = [
        'type',
        'modelValue',
        'class',
        'resource',
        'readOnly',
        'loading',
        'resourceData',
        'events',
    ];

    type?: PaginatorType = PaginatorType.PagesPrevNext;
    modelValue?: number = 1;
    class?: string = '';
    resource?: string = '';
    readOnly?: boolean = false;
    loading?: boolean = false;
    resourceData?: LktObject = {};
    events: LktObject = {}

    constructor(data: Partial<PaginatorConfig> = {}) {
        super();
        this.feed(data);
    }
}