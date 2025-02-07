import {LktItem} from "./LktItem.ts";
import {ModalConfig} from "../config/ModalConfig.ts";
import {ValidModalKey} from "../types/ValidModalKey.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {ValidModalName} from "../types/ValidModalName.ts";

export class Modal extends LktItem implements ModalConfig {

    static lktDefaultValues: (keyof ModalConfig)[] = [
        'size',
        'preTitle',
        'preTitleIcon',
        'title',
        'closeIcon',
        'closeConfirm',
        'closeConfirmKey',
        'showClose',
        'disabledClose',
        'disabledVeilClick',
        'hiddenFooter',
        'modalName',
        'modalKey',
        'zIndex',
        'beforeClose',
        'item',
    ];

    size: string = '';
    preTitle: string = '';
    preTitleIcon: string = '';
    title: string = '';
    closeIcon: string = '';
    closeConfirm: ValidModalName = '';
    closeConfirmKey: ValidModalKey = '_';
    showClose: boolean = true;
    disabledClose: boolean = false;
    disabledVeilClick: boolean = false;
    hiddenFooter: boolean = false;
    modalName: ValidModalName = '';
    modalKey: ValidModalKey = '_';
    zIndex: number = 500;
    beforeClose: Function | undefined = undefined;
    item: LktObject = {};

    constructor(data: Partial<ModalConfig> = {}) {
        super();
        this.feed(data);
    }
}