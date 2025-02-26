import {LktItem} from "./LktItem.ts";
import {AnchorConfig} from "../config/AnchorConfig.ts";
import {AccordionConfig} from "../config/AccordionConfig.ts";
import {AccordionType} from "../enums/AccordionType.ts";
import {AccordionToggleMode} from "../enums/AccordionToggleMode.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";

export class Accordion extends LktItem implements AccordionConfig {

    static lktAllowUndefinedProps: string[] = [
        'onClick',
    ];

    static lktDefaultValues: (keyof AccordionConfig)[] = [
        'modelValue',
        'type',
        'toggleMode',
        'actionButton',
        'toggleButton',
        'toggleOnClickIntro',
        'toggleTimeout',
        'title',
        'icon',
        'class',
        'contentClass',
        'iconRotation',
        'minHeight',
        'iconAtEnd',
        'toggleIconAtEnd',
    ];

    // Main config
    modelValue?: boolean = false;
    type?: AccordionType = AccordionType.Auto;
    toggleMode?: AccordionToggleMode = AccordionToggleMode.Height;

    // Buttons config
    actionButton?: ButtonConfig = {};
    toggleButton?: ButtonConfig = {};

    // Toggle config
    toggleOnClickIntro?: boolean = false;
    toggleTimeout?: number = 0;

    // Visuals
    title?: string = '';
    icon?: string = '';
    class?: string = '';
    contentClass?: string = '';
    iconRotation?: '90' | '180' | '-90' | '-180' = '90';
    minHeight?: number | undefined = undefined;
    iconAtEnd?: boolean = false;
    toggleIconAtEnd?: boolean = false;

    constructor(data: Partial<AnchorConfig> = {}) {
        super();
        this.feed(data);
    }
}