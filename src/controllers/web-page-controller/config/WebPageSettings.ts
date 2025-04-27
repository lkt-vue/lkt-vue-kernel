import {TableConfig} from "../../../config/TableConfig.ts";
import {Component} from "vue";
import {LktObject} from "../../../interfaces/LktObject.ts";

export interface WebPageSettings {
    id: string
    code: string
    label?: string
    icon?: string
}