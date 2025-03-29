import {FieldElementType} from "../enums/FieldElementType.ts";
import {FieldElementConfig} from "../config/FieldElementConfig.ts";
import {
    Accordion,
    AccordionConfig, Anchor, AnchorConfig,
    Box,
    BoxConfig, Button, ButtonConfig,
    getDefaultValues, Header, HeaderConfig,
    Icon,
    IconConfig,
    Image,
    ImageConfig, LktObject
} from "../index.ts";
import {getAvailableLanguages} from "lkt-i18n";

export const getDefaultTextElement = (text: string = 'Time to create'): FieldElementConfig => {
    let translations: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        translations[lang] = text;
    })

    return {
        type: FieldElementType.Text,
        props: {
            text: translations
        }
    };
}

export const getDefaultLktAnchorElement = (): FieldElementConfig => {
    return <FieldElementConfig>{
        type: FieldElementType.LktAnchor,
        props: {},
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
    return <FieldElementConfig>{
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
    return <FieldElementConfig>{
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

    let header: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        header[lang] = 'Title goes here';
    })

    return <FieldElementConfig>{
        type: FieldElementType.LktBox,
        props: {
            header,
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
    return <FieldElementConfig>{
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

export const getDefaultLktHeaderElement = (): FieldElementConfig => {
    return <FieldElementConfig>{
        type: FieldElementType.LktHeader,
        props: {
            ...getDefaultValues(Header),
            ...<HeaderConfig>{
                text: 'Content goes here',
            },
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
    }
}

export const getDefaultLktIconElement = (): FieldElementConfig => {
    return <FieldElementConfig>{
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
    return <FieldElementConfig>{
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