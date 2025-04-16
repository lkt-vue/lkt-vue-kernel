import {LktItem} from "./LktItem.ts";
import {WebElementConfig} from "../config/WebElementConfig.ts";
import {WebElementType} from "../enums/WebElementType.ts";
import {WebElementPropsConfig} from "../config/WebElementPropsConfig.ts";
import {WebElementLayoutConfig} from "../config/WebElementLayoutConfig.ts";
import {WebElementLayoutType} from "../enums/WebElementLayoutType.ts";
import {BannerType} from "../enums/BannerType.ts";
import {WebElementConfiguration} from "../config/WebElementConfiguration.ts";

export class WebElement extends LktItem implements WebElementConfig {

    static lktDefaultValues: (keyof WebElementConfig)[] = [
        'id',
        'type',
        'component',
        'props',
        'children',
        'layout',
        'config',
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
    children?: WebElementConfig[] = [];
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
        if (!this.props.text) this.props.text = {};

        if (this.type === WebElementType.LktTextBanner) {
            if (!this.props.subHeader) this.props.subHeader = {};
            if (!this.props.art) this.props.art = {
                src: '',
            };
            if (!this.props.media) this.props.media = {
                src: ''
            };
            if (!this.props.opacity) this.props.opacity = 0;
            if (!this.props.type) this.props.type = BannerType.Static;
        }

        if (Array.isArray(this.config.callToActions) && this.config.callToActions?.length > 0) {
            this.config.callToActions = this.config.callToActions.map(cfg => new WebElement(cfg));
        }
    }
}