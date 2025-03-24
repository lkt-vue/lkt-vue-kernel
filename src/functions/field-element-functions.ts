import {FieldElementType} from "../enums/FieldElementType.ts";
import {FieldElementConfig} from "../config/FieldElementConfig.ts";
import {
    Accordion,
    AccordionConfig, Anchor, AnchorConfig,
    Box,
    BoxConfig, Button, ButtonConfig,
    getDefaultValues,
    Icon,
    IconConfig,
    Image,
    ImageConfig
} from "../index.ts";

export const getDefaultTextElement = (text: string = 'Time to create'): FieldElementConfig => {
    return {
        type: FieldElementType.Text,
        text,
    };
}

export const getDefaultLktAnchorElement = (): FieldElementConfig => {
    return {
        type: FieldElementType.LktAnchor,
        props: {
            ...getDefaultValues(Anchor),
            ...<AnchorConfig>{
                text: 'Anchor text',
            },
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
        children: [
            getDefaultTextElement('Anchor text'),
        ],
    };
}

export const getDefaultLktButtonElement = (): FieldElementConfig => {
    return {
        type: FieldElementType.LktButton,
        props: {
            ...getDefaultValues(Button),
            ...<ButtonConfig>{
                text: 'Button text',
            },
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
        children: [
            getDefaultTextElement('Button text'),
        ],
    };
}

export const getDefaultLktLayoutElement = (): FieldElementConfig => {
    return {
        type: FieldElementType.LktLayout,
        props: {},
        config: {},
        children: [
            getDefaultTextElement('Content goes here'),
        ],
        layout: {
            type: 'grid',
            amountOfItems: [],
        },
    };
}

export const getDefaultLktBoxElement = (): FieldElementConfig => {
    return {
        type: FieldElementType.LktBox,
        props: {
            ...getDefaultValues(Box),
            ...<BoxConfig>{
                header: 'Title goes here',
                text: 'Content goes here',
            },
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
        children: [
            getDefaultTextElement('Content goes here'),
        ],
        layout: {
            type: 'grid',
            amountOfItems: [],
        }
    };
}

export const getDefaultLktAccordionElement = (): FieldElementConfig => {
    return {
        type: FieldElementType.LktAccordion,
        props: {
            ...getDefaultValues(Accordion),
            ...<AccordionConfig>{
                header: 'Title goes here',
                text: 'Content goes here',
            },
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
        children: [
            getDefaultTextElement('Content goes here'),
        ],
        layout: {
            type: 'grid',
            amountOfItems: [],
        }
    }
}

export const getDefaultLktIconElement = (): FieldElementConfig => {
    return {
        type: FieldElementType.LktIcon,
        props: {
            ...getDefaultValues(Icon),
            ...<IconConfig>{
                text: 'Content goes here',
            },
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
    }
}

export const getDefaultLktImageElement = (): FieldElementConfig => {
    return {
        type: FieldElementType.LktImage,
        props: {
            ...getDefaultValues(Image),
            ...<ImageConfig>{
                text: 'Image description goes here',
            },
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
    }
}