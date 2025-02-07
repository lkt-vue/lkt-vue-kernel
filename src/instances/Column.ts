import {ColumnType} from "../enums/ColumnType.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {Field} from "./Field.ts";
import {LktItem} from "./LktItem.ts";
import {SafeString} from "../value-objects/SafeString.ts";
import {ValidColSpan} from "../types/ValidColSpan.ts";
import {ColumnConfig} from "../config/ColumnConfig.ts";
import {Anchor} from "./Anchor.ts";
import {Button} from "./Button.ts";
import {ValidSafeStringValue} from "../types/ValidSafeStringValue.ts";
import {FieldConfig} from "../config/FieldConfig.ts";
import {AnchorConfig} from "../config/AnchorConfig.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";

export class Column extends LktItem implements ColumnConfig{
    lktExcludedProps = ['link', 'field', 'anchor', 'button'];

    lktAllowUndefinedProps: string[] = [
        'formatter',
        'checkEmpty',
        'colspan',
        'field',
        'anchor',
        'button',
        'link',
        'action',
    ];

    static lktDefaultValues: (keyof ColumnConfig)[] = [
        'type',
        'key',
        'label',
        'sortable',
        'hidden',
        'editable',
        'formatter',
        'checkEmpty',
        'colspan',
        'preferSlot',
        'isForRowKey',
        'extractTitleFromColumn',
        'slotData',
        'field',
        'anchor',
        'button',
        'link',
        'action',
    ];

    type: ColumnType = ColumnType.None;
    key: string = '';
    label: string = '';
    sortable: boolean = true;
    hidden: boolean = false
    editable: boolean = false;
    formatter: Function|undefined = undefined;
    checkEmpty: Function|undefined = undefined;
    colspan: ValidColSpan = undefined;
    preferSlot: Function | boolean = true;
    isForRowKey: boolean = false;
    extractTitleFromColumn: string = '';
    slotData: LktObject = {};

    field: Field|FieldConfig|undefined = undefined;
    anchor: Anchor|AnchorConfig|undefined = undefined;
    button: Button|ButtonConfig|undefined = undefined;
    link: ValidSafeStringValue|SafeString|undefined = undefined;
    action?: Function = undefined;

    constructor(data: Partial<ColumnConfig> = {}) {
        super();
        this.feed(data);

        switch (this.type) {
            case ColumnType.Field:
                this.field = new Field(data.field);
                break;

            case ColumnType.Anchor:
                this.anchor = new Anchor(data.anchor);
                break;

            case ColumnType.Button:
                this.button = new Button(data.button);
                break;
        }

        this.link = new SafeString(data.link);
    }

    getHref(item: LktObject) {
        if (typeof this.link !== 'object') return '';
        return this.link.getValue(item);
    }

    doAction(item: LktObject) {
        if (typeof this.action === 'function') {
            return this.action(item);
        }
        console.warn('No action defined');
    }
}