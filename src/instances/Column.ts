import {ColumnType} from "../enums/ColumnType.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {LktItem} from "./LktItem.ts";
import {ValidColSpan} from "../types/ValidColSpan.ts";
import {ColumnConfig} from "../config/ColumnConfig.ts";
import {FieldConfig} from "../config/FieldConfig.ts";
import {AnchorConfig} from "../config/AnchorConfig.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {ConditionalColumnArgs} from "../arguments/ConditionalColumnArgs.ts";

export class Column extends LktItem implements ColumnConfig{
    lktExcludedProps = ['field', 'anchor', 'button'];

    lktAllowUndefinedProps: string[] = [
        'formatter',
        'checkEmpty',
        'colspan',
        'field',
        'anchor',
        'button',
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
        'isForAccordionHeader',
        'extractTitleFromColumn',
        'slotData',
        'field',
        'anchor',
        'button',
    ];

    type: ColumnType = ColumnType.None;
    key: string = '';
    label: string = '';
    sortable: boolean = true;
    hidden: boolean | ((data: ConditionalColumnArgs) => boolean) = false
    editable: boolean = false;
    formatter: Function|undefined = undefined;
    checkEmpty: Function|undefined = undefined;
    colspan: ValidColSpan = undefined;
    preferSlot: Function | boolean = true;
    isForRowKey: boolean = false;
    isForAccordionHeader: boolean = false;
    extractTitleFromColumn: string = '';
    slotData: LktObject = {};

    field: FieldConfig|undefined = undefined;
    anchor: AnchorConfig|undefined = undefined;
    button: ButtonConfig|undefined = undefined;

    constructor(data: Partial<ColumnConfig> = {}) {
        super();
        this.feed(data);
    }
}