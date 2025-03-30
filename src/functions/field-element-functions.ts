import {FieldElementType} from "../enums/FieldElementType.ts";
import {FieldElementConfig} from "../config/FieldElementConfig.ts";
import {LktObject} from "../index.ts";
import {getAvailableLanguages} from "lkt-i18n";

export const getDefaultTextElement = (text: string = 'Time to create'): FieldElementConfig => {
    let translations: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        translations[lang] = text;
    })

    return {
        id: 0,
        type: FieldElementType.Text,
        props: {
            text: translations
        },
        config: {}
    };
}

export const getDefaultLktAnchorElement = (): FieldElementConfig => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Title goes here';
    })

    return <FieldElementConfig>{
        id: 0,
        type: FieldElementType.LktAnchor,
        props: {
            text,
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
    };
}

export const getDefaultLktButtonElement = (): FieldElementConfig => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Title goes here';
    })

    return <FieldElementConfig>{
        id: 0,
        type: FieldElementType.LktButton,
        props: {
            text,
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
        id: 0,
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
        id: 0,
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

    let header: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        header[lang] = 'Title goes here';
    })

    return <FieldElementConfig>{
        id: 0,
        type: FieldElementType.LktAccordion,
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
    }
}

export const getDefaultLktHeaderElement = (): FieldElementConfig => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Title goes here';
    })

    return <FieldElementConfig>{
        id: 0,
        type: FieldElementType.LktHeader,
        props: {
            text
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
    }
}

export const getDefaultLktIconElement = (): FieldElementConfig => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Content goes here';
    })

    return <FieldElementConfig>{
        id: 0,
        type: FieldElementType.LktIcon,
        props: {
            text
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
    }
}

export const getDefaultLktImageElement = (): FieldElementConfig => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Image description goes here';
    })

    return <FieldElementConfig>{
        id: 0,
        type: FieldElementType.LktImage,
        props: {
            text,
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
    }
}