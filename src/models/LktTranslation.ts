import {LktItem} from "../instances/LktItem.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {LktTranslationConfig} from "../models-config/LktTranslationConfig.ts";
import {LktTranslationType} from "../enums/LktTranslationType.ts";

export class LktTranslation extends LktItem implements LktTranslationConfig{

    static lktAllowUndefinedProps: string[] = [
    ];

    static lktDefaultValues: (keyof LktTranslationConfig)[] = [
        'id',
        'parentId',
        'property',
        'type',
        'value',
        'valueData',
        'children',
    ];

    id: number = 0;
    property: string = '';
    type: LktTranslationType = LktTranslationType.Text;
    value: string = '';
    parentId: number = 0;
    valueData: LktObject = {};
    children: Array<LktTranslationConfig> = [];

    constructor(data: Partial<LktTranslationConfig> = {}) {
        super();
        this.feed(data);

        this.children = this.children.map(z => new LktTranslation(z));
    }

    static createDictionary(data: Partial<LktTranslationConfig> = {}) {
        return new LktTranslation({
            ...data,
            type: LktTranslationType.Many,
        })
    }
}