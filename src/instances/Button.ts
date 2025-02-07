import {LktItem} from "./LktItem.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {ButtonType} from "../enums/ButtonType.ts";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";
import {ModalConfig} from "../config/ModalConfig.ts";
import {ValidTabIndex} from "../types/ValidTabIndex.ts";
import {generateRandomString} from "lkt-string-tools";
import {VueElement} from "vue";
import {AnchorConfig} from "../config/AnchorConfig.ts";
import {Anchor} from "./Anchor.ts";
import {TooltipPositionEngine} from "../enums/TooltipPositionEngine.ts";

export class Button extends LktItem implements ButtonConfig {

    lktAllowUndefinedProps: string[] = [
        'clickRef',
        'tabindex',
        'anchor',
        'showTooltipOnHover',
        'hideTooltipOnLeave',
    ];

    static lktDefaultValues: (keyof ButtonConfig)[] = [
        'type',
        'name',
        'palette',
        'class',
        'containerClass',
        'value',
        'disabled',
        'loading',
        'wrapContent',
        'split',
        'splitIcon',
        'resource',
        'resourceData',
        'modal',
        'modalKey',
        'modalData',
        'confirmModal',
        'confirmModalKey',
        'confirmData',
        'text',
        'icon',
        'iconDot',
        'iconEnd',
        'img',
        'tooltip',
        'showTooltipOnHoverDelay',
        'tooltipWindowMargin',
        'tooltipReferrerMargin',
        'tooltipLocationY',
        'tooltipLocationX',
        'checked',
        'clickRef',
        'openTooltip',
        'tabindex',
        'anchor',
        'tooltipEngine',
        'showTooltipOnHover',
        'hideTooltipOnLeave',
        'tooltipClass',
        'splitClass',
    ];

    type: ButtonType = ButtonType.Button;
    name: string = generateRandomString(10);
    palette: string = '';
    class: string = '';
    containerClass: string = '';
    value: string = '';
    disabled: boolean = false;
    loading: boolean = false;
    wrapContent: boolean = false;
    split: boolean = false;
    splitIcon: string = '';
    resource: string = '';
    resourceData: LktObject = {};
    modal: ValidModalName = '';
    modalKey: ValidModalKey = '_';
    modalData: ModalConfig = {};
    confirmModal: ValidModalName = '';
    confirmModalKey: ValidModalKey = '_';
    confirmData: ModalConfig = {};
    text: string = '';
    icon: string = '';
    iconDot: boolean = false;
    iconEnd: string = '';
    img: string = '';
    tooltip: boolean = false;
    showTooltipOnHoverDelay: number = 0;
    tooltipWindowMargin: number = 0;
    tooltipReferrerMargin: number = 0;
    tooltipLocationY: string = 'bottom';
    tooltipLocationX: string = 'left-corner';
    checked: boolean = false;
    clickRef?: Element | VueElement = undefined;
    openTooltip: boolean = false;
    tabindex: ValidTabIndex = undefined;
    anchor?:AnchorConfig|Anchor = undefined;

    tooltipEngine?: TooltipPositionEngine = TooltipPositionEngine.Fixed;
    showTooltipOnHover?: boolean = undefined;
    hideTooltipOnLeave?: boolean = undefined;
    tooltipClass?: string = '';
    splitClass?: string = '';

    constructor(data: Partial<ButtonConfig> = {}) {
        super();
        this.feed(data);
        this.anchor = new Anchor(data.anchor);
    }
}