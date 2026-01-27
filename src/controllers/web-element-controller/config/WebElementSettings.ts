import {TableConfig} from "../../../config/TableConfig.ts";
import {Component} from "vue";
import {LktObject} from "../../../interfaces/LktObject.ts";

export interface WebElementSettings {
    id: number
    label?: string
    type: 'component' | 'index'
    icon?: string
    component?: string|Component
    componentProps?: LktObject

    options?: {
        textEditor?: boolean
    }

    tableConfig?: TableConfig
}