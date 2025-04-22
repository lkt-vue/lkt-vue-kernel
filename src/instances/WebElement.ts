import {LktItem} from "./LktItem.ts";
import {WebElementConfig} from "../config/WebElementConfig.ts";
import {WebElementType} from "../enums/WebElementType.ts";
import {WebElementPropsConfig} from "../config/WebElementPropsConfig.ts";
import {WebElementLayoutConfig} from "../config/WebElementLayoutConfig.ts";
import {WebElementLayoutType} from "../enums/WebElementLayoutType.ts";
import {BannerType} from "../enums/BannerType.ts";
import {WebElementConfiguration} from "../config/WebElementConfiguration.ts";
import {
    getDefaultLktAnchorWebElement,
    getDefaultLktButtonWebElement,
    getDefaultLktHeaderWebElement,
    getDefaultLktIconsWebElement,
    getDefaultLktIconWebElement,
    getDefaultLktImageWebElement,
    getDefaultLktLayoutAccordionWebElement,
    getDefaultLktLayoutBoxWebElement,
    getDefaultLktLayoutWebElement,
    getDefaultLktTextAccordionWebElement,
    getDefaultLktTextBannerWebElement,
    getDefaultLktTextBoxWebElement,
    getDefaultLktTextWebElement
} from "../functions/web-element-functions.ts";
import {cloneObject} from "lkt-object-tools";

export class WebElement extends LktItem implements WebElementConfig {

    static lktDefaultValues: (keyof WebElementConfig)[] = [
        'id',
        'type',
        'component',
        'props',
        'children',
        'layout',
        'config',
        'subElements',
    ];

    id?: number|string|undefined = 0;
    type: WebElementType = WebElementType.LktText;
    component?: string = '';
    props: WebElementPropsConfig = {
        class: '',
        icon: '',
        header: {},
        subHeader: {},
        text: {},
    }
    children: WebElement[] = [];
    subElements: WebElement[] = [];
    layout: WebElementLayoutConfig = {
        type: WebElementLayoutType.Grid,
        amountOfItems: [],
        alignItems: [],
        justifyContent: [],
        columns: [],
        alignSelf: [],
        justifySelf: [],
    }
    config: WebElementConfiguration = {
        hasHeader: true,
        hasSubHeader: true,
        hasIcon: true,
        amountOfCallToActions: 0,
        callToActions: [],
    }

    // keyMoment: string = '';
    // uid: string = '';

    constructor(data: Partial<WebElementConfig> = {}) {
        super();
        this.feed(data);

        if (!this.props) this.props = {
            text: {},
        };

        if (!this.layout) this.layout = {
            amountOfItems: [],
            columns: [],
            alignSelf: [],
            alignItems: [],
            justifySelf: [],
            justifyContent: [],
        };
        if (!this.layout.columns) this.layout.columns = [];
        if (!this.layout.alignSelf) this.layout.alignSelf = [];
        if (!this.layout.alignItems) this.layout.alignItems = [];
        if (!this.layout.justifySelf) this.layout.justifySelf = [];
        if (!this.layout.justifyContent) this.layout.justifyContent = [];

        if (!this.props.header) this.props.header = {};
        if (!this.props.text || typeof this.props.text !== 'object') this.props.text = {};

        if (this.type === WebElementType.LktTextBanner) {
            if (!this.props.subHeader) this.props.subHeader = {};
            if (!this.props.art || typeof this.props.art !== 'object' || Object.keys(this.props.art).length === 0) {
                this.props.art = {
                    src: '',
                };
            }
            if (!this.props.media || typeof this.props.media !== 'object' || Object.keys(this.props.media).length === 0) {
                this.props.media = {
                    src: ''
                };
            }
            if (!this.props.opacity) this.props.opacity = 0;
            if (!this.props.type) this.props.type = BannerType.Static;
        }

        if (this.type === WebElementType.LktImage) {
            if (!this.props.alt) this.props.alt = {};
            if (!this.props.title) this.props.title = {};
            if (!this.props.text) this.props.text = {};
        }

        if (Array.isArray(this.config.callToActions) && this.config.callToActions?.length > 0) {
            this.config.callToActions = this.config.callToActions.map(cfg => new WebElement(cfg));
        }

        if (!Array.isArray(this.children)){
            this.children = [];
        }
        this.children = this.children.map(child => new WebElement(child));
        this.subElements = this.subElements.map(child => new WebElement(child));
    }

    addChild(child: WebElement, index: number|undefined = undefined) {
        if (!Array.isArray(this.children)){
            this.children = [];
        }

        if (typeof index === 'number' && index >= 0 && index < this.children.length) {
            this.children.splice(index, 0, child)
            return this;
        }

        this.children.push(child);
        return this;
    }

    getClone(): WebElement {

        const resetCloneId = (clone: WebElement) => {
            clone.id = 0;
            clone.children?.forEach(child => resetCloneId(child));
            return clone;
        }

        return new WebElement(resetCloneId(<WebElement>cloneObject(this)));
    }

    static createByType(type: WebElementType): WebElement {
        switch (type) {
            case WebElementType.LktLayoutBox:
                return getDefaultLktLayoutBoxWebElement();

            case WebElementType.LktTextBox:
                return getDefaultLktTextBoxWebElement();

            case WebElementType.LktLayoutAccordion:
                return getDefaultLktLayoutAccordionWebElement();

            case WebElementType.LktTextAccordion:
                return getDefaultLktTextAccordionWebElement();

            case WebElementType.LktIcon:
                return getDefaultLktIconWebElement();

            case WebElementType.LktIcons:
                return getDefaultLktIconsWebElement();

            case WebElementType.LktImage:
                return getDefaultLktImageWebElement();

            case WebElementType.LktAnchor:
                return getDefaultLktAnchorWebElement();

            case WebElementType.LktButton:
                return getDefaultLktButtonWebElement();

            case WebElementType.LktLayout:
                return getDefaultLktLayoutWebElement();

            case WebElementType.LktHeader:
                return getDefaultLktHeaderWebElement();

            case WebElementType.LktText:
                return getDefaultLktTextWebElement();

            case WebElementType.LktTextBanner:
                return getDefaultLktTextBannerWebElement();
        }

        return new WebElement();
    }

    addSubElement() {
        switch (this.type) {
            case WebElementType.LktIcons:
                this.subElements.push(getDefaultLktIconWebElement());
                break;
        }

        return this;
    }
}