import {ColumnConfig} from "../config/ColumnConfig.ts";
import {Column} from "../instances/Column.ts";

export const createColumn = (data: ColumnConfig): Column => {
    return new Column(data);
}