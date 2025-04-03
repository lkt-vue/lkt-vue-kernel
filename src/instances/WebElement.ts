import {LktItem} from "./LktItem.ts";
import {WebElementConfig} from "../config/WebElementConfig.ts";
import {WebElementType} from "../enums/WebElementType.ts";
import {WebElementPropsConfig} from "../config/WebElementPropsConfig.ts";
import {WebElementLayoutConfig} from "../config/WebElementLayoutConfig.ts";
import {WebElementLayoutType} from "../enums/WebElementLayoutType.ts";

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
    config = {
        hasHeader: true,
        hasIcon: true
    }

    constructor(data: Partial<WebElementConfig> = {}) {
        super();
        this.feed(data);

        if (!this.props) this.props = {text: {}};
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
    }
}