import {WebElementType} from "../enums/WebElementType.ts";
import {AccordionType, BannerType, LktObject, MultiLangValue, WebElement, WebElementLayoutType} from "../index.ts";
import {getAvailableLanguages} from "lkt-i18n";

export const getDefaultLktTextWebElement = (text: string = 'Time to create'): WebElement => {
    let translations: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        translations[lang] = text;
    })
    return new WebElement({
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
    });
}

export const getDefaultLktAnchorWebElement = (): WebElement => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Title goes here';
    })
    return new WebElement({
        id: 0,
        type: WebElementType.LktAnchor,
        props: {
            text,
        },
        config: {
            hasHeader: true,
            hasIcon: true,
        },
    });
}

export const getDefaultLktButtonWebElement = (): WebElement => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Title goes here';
    })
    return new WebElement({
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
    });
}

export const getDefaultLktLayoutWebElement = (): WebElement => {
    return new WebElement({
        id: 0,
        type: WebElementType.LktLayout,
        props: {},
        config: {},
        children: [],
        layout: {
            type: WebElementLayoutType.Grid,
            amountOfItems: [],
            alignItems: [],
            justifyContent: [],
            columns: [],
            alignSelf: [],
            justifySelf: [],
        },
    });
}

export const getDefaultLktTextBoxWebElement = (): WebElement => {

    let header: MultiLangValue = {},
        text: MultiLangValue = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        //@ts-ignore
        header[lang] = 'Title goes here';
        // @ts-ignore
        text[lang] = 'Content goes here';
    })
    return new WebElement({
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
    });
}

export const getDefaultLktLayoutBoxWebElement = (): WebElement => {

    let header: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        header[lang] = 'Title goes here';
    })
    return new WebElement({
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
    });
}

export const getDefaultLktLayoutAccordionWebElement = (): WebElement => {

    let header: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        header[lang] = 'Title goes here';
    })
    return new WebElement({
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
    })
}

export const getDefaultLktTextAccordionWebElement = (): WebElement => {

    let header: LktObject = {},
        text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        header[lang] = 'Title goes here';
        text[lang] = 'Content goes here';
    })
    return new WebElement({
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
    })
}

export const getDefaultLktHeaderWebElement = (): WebElement => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Title goes here';
    })
    return new WebElement({
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
    })
}

export const getDefaultLktIconWebElement = (): WebElement => {

    let text: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Content goes here';
    })
    return new WebElement({
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
    })
}

export const getDefaultLktImageWebElement = (): WebElement => {

    let text: LktObject = {},
        alt: LktObject = {},
        title: LktObject = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        text[lang] = 'Image description goes here';
        alt[lang] = '';
        title[lang] = '';
    })

    return new WebElement({
        id: 0,
        type: WebElementType.LktImage,
        props: {
            text,
            alt,
            title,
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
    })
}

export const getDefaultLktTextBannerWebElement = (): WebElement => {

    let header: MultiLangValue = {},
        subHeader: MultiLangValue = {},
        text: MultiLangValue = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        //@ts-ignore
        header[lang] = 'Title goes here';
        //@ts-ignore
        subHeader[lang] = 'Subtitle goes here';
        // @ts-ignore
        text[lang] = 'Content goes here';
    })

    return new WebElement({
        id: 0,
        type: WebElementType.LktTextBanner,
        props: {
            header,
            subHeader,
            text,
            art: {},
            media: {},
            opacity: 0,
            type: BannerType.Static
        },
        config: {
            hasHeader: true,
            hasSubHeader: true,
            hasIcon: true,
            amountOfCallToActions: 0,
            callToActions: [],
        },
        children: [],
        layout: {
            columns: [],
            alignSelf: [],
            justifySelf: [],
        }
    });
}

export const getDefaultLktIconsWebElement = (): WebElement => {

    let header: MultiLangValue = {},
        subHeader: MultiLangValue = {},
        text: MultiLangValue = {};

    const availableLanguages = getAvailableLanguages();

    availableLanguages.forEach(lang => {
        //@ts-ignore
        header[lang] = 'Title goes here';
        //@ts-ignore
        subHeader[lang] = 'Subtitle goes here';
        // @ts-ignore
        text[lang] = 'Content goes here';
    })

    return new WebElement({
        id: 0,
        type: WebElementType.LktIcons,
        props: {
            header,
            subHeader,
            text,
        },
        config: {
            hasHeader: true,
            hasSubHeader: true,
            hasIcon: true,
            amountOfCallToActions: 0,
            callToActions: [],
        },
        subElements: [
            getDefaultLktIconWebElement(),
        ],
        layout: {
            type: WebElementLayoutType.FlexRows,
            columns: [],
            alignSelf: [],
            justifySelf: [],
        }
    });
}