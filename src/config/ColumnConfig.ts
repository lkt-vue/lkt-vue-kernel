import {ColumnType} from "../enums/ColumnType.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {ValidColSpan} from "../types/ValidColSpan.ts";
import {FieldConfig} from "./FieldConfig.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {AnchorConfig} from "./AnchorConfig.ts";
import {ValidSafeStringValue} from "../types/ValidSafeStringValue.ts";
import {Field} from "../instances/Field.ts";
import {Anchor} from "../instances/Anchor.ts";
import {Button} from "../instances/Button.ts";
import {SafeString} from "../value-objects/SafeString.ts";

export interface ColumnConfig {
    type: ColumnType;
    key: string;
    label: string;
    sortable: boolean;
    hidden: boolean;
    editable: boolean;
    formatter?: Function | undefined;
    checkEmpty?: Function | undefined;
    colspan?: ValidColSpan;
    preferSlot?: Function | boolean;
    isForRowKey?: boolean;
    extractTitleFromColumn?: string;
    slotData?: LktObject;

    field?: Field|FieldConfig | undefined;
    anchor?: Anchor|AnchorConfig | undefined;
    button?: Button|ButtonConfig | undefined;

    // Old props (To Be Removed)
    link?: ValidSafeStringValue|SafeString; // Replaced with anchor integration
    action?: Function; // Replaced with button integration
}