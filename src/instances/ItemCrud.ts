import {LktItem} from "./LktItem.ts";
import {ItemCrudConfig} from "../config/ItemCrudConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {ItemCrudMode} from "../enums/ItemCrudMode.ts";
import {ItemCrudView} from "../enums/ItemCrudView.ts";
import {ButtonConfig} from "../config/ButtonConfig.ts";
import {ModalConfig} from "../config/ModalConfig.ts";
import {SaveConfig} from "../config/SaveConfig.ts";
import {ItemCrudButtonNavPosition} from "../enums/ItemCrudButtonNavPosition.ts";
import {ItemCrudButtonNavVisibility} from "../enums/ItemCrudButtonNavVisibility.ts";
import {SaveType} from "../enums/SaveType.ts";
import {DataStateConfig} from "lkt-data-state";
import {NotificationType} from "../enums/NotificationType.ts";
import {ValidTablePermission} from "../types/ValidTablePermission.ts";
import {FormConfig} from "../config/FormConfig.ts";
import {ModificationView} from "../enums/ModificationView.ts";

export class ItemCrud extends LktItem implements ItemCrudConfig {

    static lktDefaultValues: (keyof ItemCrudConfig)[] = [
        'modelValue',
        'modifications',
        'editing',
        'perms',
        'customData',
        'mode',
        'view',
        'modificationView',
        'editModeButton',
        'dropButton',
        'createButton',
        'updateButton',
        'groupButton',
        'groupButtonAsModalActions',
        'modalConfig',
        'saveConfig',
        'title',
        'readResource',
        'readData',
        'beforeEmitUpdate',
        'dataStateConfig',
        'buttonNavPosition',
        'buttonNavVisibility',
        'notificationType',
        'enabledSaveWithoutChanges',
        'redirectOnCreate',
        'redirectOnDrop',
        'events',
    ];


    modelValue: LktObject = {};
    modifications: LktObject = {};
    editing: boolean = false;
    perms: ValidTablePermission[] = [];
    customData?: LktObject = {};
    form?: FormConfig = {};

    // Global config
    mode: ItemCrudMode = ItemCrudMode.Read;
    view: ItemCrudView = ItemCrudView.Inline;
    modificationView?: boolean | Array<ModificationView> = true;

    // Buttons
    editModeButton: ButtonConfig|false = {}; // Not sure, should test
    dropButton: ButtonConfig|false = {};
    createButton: ButtonConfig|false = {};
    updateButton: ButtonConfig|false = {};
    groupButton: ButtonConfig|boolean = false;
    groupButtonAsModalActions: boolean = false;

    // Config if type === modal
    modalConfig: ModalConfig = {};

    // Save config
    saveConfig: SaveConfig = {
        type: SaveType.Manual,
    };


    title: string = '';
    readResource: string = '';
    readData: LktObject = {};
    beforeEmitUpdate: Function | undefined = undefined;
    dataStateConfig: DataStateConfig = {};
    buttonNavPosition?: ItemCrudButtonNavPosition = ItemCrudButtonNavPosition.Top;
    buttonNavVisibility?: ItemCrudButtonNavVisibility = ItemCrudButtonNavVisibility.Always;

    // Notifications
    notificationType?: NotificationType = NotificationType.Toast;

    enabledSaveWithoutChanges: boolean = false;

    redirectOnCreate?: string | ((id: number|string) => string) = undefined;
    redirectOnDrop?: string | (() => string) = undefined;
    events: LktObject = {}

    constructor(data: Partial<ItemCrudConfig> = {}) {
        super();
        this.feed(data);
    }
}