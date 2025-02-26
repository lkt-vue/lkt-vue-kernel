import {AccordionToggleMode} from "../enums/AccordionToggleMode.ts";
import {AccordionType} from "../enums/AccordionType.ts";
import {ButtonConfig} from "./ButtonConfig.ts";

export interface AccordionConfig {
    // Main config
    modelValue?: boolean
    type?: AccordionType
    toggleMode?: AccordionToggleMode

    // Buttons config
    actionButton?: ButtonConfig
    toggleButton?: ButtonConfig

    // Toggle config
    toggleOnClickIntro?: boolean
    toggleTimeout?: number

    // Visuals
    title?: string
    icon?: string
    class?: string
    contentClass?: string
    iconRotation?: '90' | '180' | '-90' | '-180'
    minHeight?: number | undefined
    iconAtEnd?: boolean
}