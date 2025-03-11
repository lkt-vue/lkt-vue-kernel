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
import {ValidIsDisabledValue} from "../types/ValidIsDisabledValue.ts";
import {ModalCallbackConfig} from "../config/ModalCallbackConfig.ts";
import {TooltipConfig} from "../config/TooltipConfig.ts";
import {ValidButtonDot} from "../types/ValidButtonDot.ts";
import {ValidTextValue} from "../types/ValidTextValue.ts";
import {EventsConfig} from "../config/EventsConfig.ts";

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
        'class',
        'containerClass',
        'value',
        'disabled',
        'loading',
        'wrapContent',
        'splitIcon',
        'resource',
        'resourceData',
        'modal',
        'modalKey',
        'modalData',
        'confirmModal',
        'confirmModalKey',
        'confirmData',
        'modalCallbacks',
        'text',
        'textOn',
        'textOff',
        'icon',
        'iconOn',
        'iconOff',
        'iconEndOn',
        'iconEndOff',
        'dot',
        'iconEnd',
        'img',
        'showTooltipOnHoverDelay',
        'tooltip',
        'checked',
        'clickRef',
        'openTooltip',
        'tabindex',
        'anchor',
        'showTooltipOnHover',
        'hideTooltipOnLeave',
        'splitClass',
        'prop',
        'events',
    ];

    type: ButtonType = ButtonType.Button;
    name: string = generateRandomString(10);
    class: string = '';
    containerClass: string = '';
    value: string = '';
    disabled: ValidIsDisabledValue = false;
    loading: boolean = false;
    wrapContent: boolean = false;
    splitIcon: string = '';
    resource: string = '';
    resourceData: LktObject = {};
    modal: ValidModalName = '';
    modalKey: ValidModalKey = '_';
    modalData: Partial<ModalConfig> | Function = {};
    confirmModal: ValidModalName = '';
    confirmModalKey: ValidModalKey = '_';
    confirmData: Partial<ModalConfig> = {};
    modalCallbacks?: Array<ModalCallbackConfig> = [];
    text: ValidTextValue = '';
    textOn: ValidTextValue = undefined;
    textOff: ValidTextValue = undefined;
    iconOn: ValidTextValue = undefined;
    iconOff: ValidTextValue = undefined;
    iconEndOn: ValidTextValue = undefined;
    iconEndOff: ValidTextValue = undefined;
    icon: string = '';
    dot: ValidButtonDot = false;
    iconEnd: string = '';
    img: string = '';
    showTooltipOnHoverDelay: number = 0;
    checked: boolean = false;
    clickRef?: Element | VueElement = undefined;
    openTooltip: boolean = false;
    tabindex: ValidTabIndex = undefined;
    anchor?:AnchorConfig|Anchor = undefined;

    showTooltipOnHover?: boolean = undefined;
    hideTooltipOnLeave?: boolean = undefined;
    splitClass?: string = '';
    tooltip?: TooltipConfig = {};

    prop?: LktObject = {};

    // Event management
    events?: EventsConfig|undefined = {};

    constructor(data: Partial<ButtonConfig> = {}) {
        super();
        this.feed(data);
        this.anchor = new Anchor(data.anchor);
    }

    isDisabled() {
        if (typeof this.disabled === 'function') return this.disabled();
        return this.disabled;
    }
}