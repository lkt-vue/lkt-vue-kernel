import {TableRowType} from "../enums/TableRowType.ts";

export type ValidTableRowTypeValue = TableRowType | ((...args: any[]) => TableRowType) | undefined;