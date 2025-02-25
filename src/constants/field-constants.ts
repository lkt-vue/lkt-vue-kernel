import {FieldType} from "../enums/FieldType.ts";

export const fieldTypesWithOptions = [
    FieldType.Text, FieldType.Search, FieldType.Select
];

export const fieldTypesWithoutClear = [
    FieldType.Switch, FieldType.Check
];

export const fieldTypesWithoutUndo = [
    FieldType.Switch, FieldType.Check
];

export const textFieldTypesWithOptions = [
    FieldType.Text, FieldType.Search
];

export const booleanFieldTypes = [
    FieldType.Switch, FieldType.Check
];

export const fieldsWithMultipleMode = [
    FieldType.Select,
    FieldType.Color,
    FieldType.Card,
];

export const textFieldTypes = [
    FieldType.Text,
    FieldType.Email,
    FieldType.Password,
];