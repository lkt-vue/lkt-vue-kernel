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

export class ItemCrud extends LktItem implements ItemCrudConfig {

    // static lktAllowUndefinedProps: string[] = [
    // ];
    //
    static lktDefaultValues: (keyof ItemCrudConfig)[] = [
        'modelValue',
        'editing',
        'perms',
        'mode',
        'view',
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
    ];


    modelValue: LktObject = {};
    editing: boolean = false;
    perms: ValidTablePermission[] = [];

    // Global config
    mode: ItemCrudMode = ItemCrudMode.Read;
    view: ItemCrudView = ItemCrudView.Inline;

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
    constructor(data: Partial<ItemCrudConfig> = {}) {
        super();
        this.feed(data);
    }
}