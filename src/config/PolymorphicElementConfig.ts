import {LktObject} from "../interfaces/LktObject.ts";
import {Component} from "vue";

export interface PolymorphicElementConfig {
    tag?: string|Component
    class?: string
    text?: string
    title?: string
    props?: LktObject
}