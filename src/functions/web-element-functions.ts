import {WebElementType} from "../enums/WebElementType.ts";
import {WebElementConfig} from "../config/WebElementConfig.ts";
import {AccordionType, LktObject, MultiLangValue, WebElementLayoutType} from "../index.ts";
import {getAvailableLanguages} from "lkt-i18n";

export const getDefaultLktTextWebElement = (text: string = 'Time to create'): WebElementConfig => {
    let translations: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        translations[lang] = text;
    })

    return {
        id: 0,
        type: WebElementType.LktText,
        props: {
            text: translations
        },
        config: {},
        layout: {
            columns: [],
            alignSelf: [],
            justifySelf: [],
        }
    };
}

export const getDefaultLktAnchorWebElement = (): WebElementConfig => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Title goes here';
    })

    return <WebElementConfig>{
        id: 0,
        type: WebElementType.LktAnchor,
        props: {
            text,
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
    };
}

export const getDefaultLktButtonWebElement = (): WebElementConfig => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Title goes here';
    })

    return <WebElementConfig>{
        id: 0,
        type: WebElementType.LktButton,
        props: {
            text,
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
        children: [
            getDefaultLktTextWebElement('Button text'),
        ],
        layout: {
            columns: [],
            alignSelf: [],
            justifySelf: [],
        }
    };
}

export const getDefaultLktLayoutWebElement = (): WebElementConfig => {
    return <WebElementConfig>{
        id: 0,
        type: WebElementType.LktLayout,
        props: {},
        config: {},
        children: [
            getDefaultLktTextWebElement('Content goes here'),
        ],
        layout: {
            type: WebElementLayoutType.Grid,
            amountOfItems: [],
            alignItems: [],
            justifyContent: [],
            columns: [],
            alignSelf: [],
            justifySelf: [],
        },
    };
}

export const getDefaultLktTextBoxWebElement = (): WebElementConfig => {

    let header: MultiLangValue = {},
        text: MultiLangValue = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        //@ts-ignore
        header[lang] = 'Title goes here';
        // @ts-ignore
        text[lang] = 'Content goes here';
    })

    return <WebElementConfig>{
        id: 0,
        type: WebElementType.LktTextBox,
        props: {
            header,
            text,
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
        children: [],
        layout: {
            columns: [],
            alignSelf: [],
            justifySelf: [],
        }
    };
}

export const getDefaultLktLayoutBoxWebElement = (): WebElementConfig => {

    let header: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        header[lang] = 'Title goes here';
    })

    return <WebElementConfig>{
        id: 0,
        type: WebElementType.LktLayoutBox,
        props: {
            header,
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
        children: [
            getDefaultLktTextWebElement('Content goes here'),
        ],
        layout: {
            type: WebElementLayoutType.Grid,
            amountOfItems: [],
            alignItems: [],
            justifyContent: [],
            columns: [],
            alignSelf: [],
            justifySelf: [],
        }
    };
}

export const getDefaultLktLayoutAccordionWebElement = (): WebElementConfig => {

    let header: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        header[lang] = 'Title goes here';
    })

    return <WebElementConfig>{
        id: 0,
        type: WebElementType.LktLayoutAccordion,
        props: {
            header,
            type: AccordionType.Auto
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
        children: [
            getDefaultLktTextWebElement('Content goes here'),
        ],
        layout: {
            type: WebElementLayoutType.Grid,
            amountOfItems: [],
            alignItems: [],
            justifyContent: [],
            columns: [],
            alignSelf: [],
            justifySelf: [],
        }
    }
}

export const getDefaultLktTextAccordionWebElement = (): WebElementConfig => {

    let header: LktObject = {},
        text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        header[lang] = 'Title goes here';
        text[lang] = 'Content goes here';
    })

    return <WebElementConfig>{
        id: 0,
        type: WebElementType.LktTextAccordion,
        props: {
            header,
            text,
            type: AccordionType.Auto
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
        children: [],
        layout: {
            columns: [],
            alignSelf: [],
            justifySelf: [],
        }
    }
}

export const getDefaultLktHeaderWebElement = (): WebElementConfig => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Title goes here';
    })

    return <WebElementConfig>{
        id: 0,
        type: WebElementType.LktHeader,
        props: {
            text
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
        layout: {
            columns: [],
            alignSelf: [],
            justifySelf: [],
        }
    }
}

export const getDefaultLktIconWebElement = (): WebElementConfig => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Content goes here';
    })

    return <WebElementConfig>{
        id: 0,
        type: WebElementType.LktIcon,
        props: {
            text
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
        layout: {
            columns: [],
            alignSelf: [],
            justifySelf: [],
        }
    }
}

export const getDefaultLktImageWebElement = (): WebElementConfig => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Image description goes here';
    })

    return <WebElementConfig>{
        id: 0,
        type: WebElementType.LktImage,
        props: {
            text,
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
        layout: {
            columns: [],
            alignSelf: [],
            justifySelf: [],
        }
    }
}