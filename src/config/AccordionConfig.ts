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
    toggleIconAtEnd?: boolean
    iconAtEnd?: boolean

    // // Deprecated props:
    // alwaysOpen?: boolean
    //
    // showActionButton?: boolean
    // actionButtonClass?: string
    // actionButtonText?: string
    // actionButtonIcon?: string
    // actionButtonResource?: string
    // actionButtonConfirm?: string
    // actionButtonConfirmData?: LktObject
    // actionButtonData?: LktObject
    //
    // buttonIconClass?: string
    // buttonIconOn?: string
    // buttonIconOff?: string
    // buttonTextOn?: string
    // buttonTextOff?: string
}