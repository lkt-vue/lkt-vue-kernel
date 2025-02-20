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

export class ItemCrud extends LktItem implements ItemCrudConfig {

    // static lktAllowUndefinedProps: string[] = [
    // ];
    //
    static lktDefaultValues: (keyof ItemCrudConfig)[] = [
        'modelValue',
        'editing',
        'mode',
        'view',
        'editModeButton',
        'dropButton',
        'createButton',
        'updateButton',
        'modalConfig',
        'saveConfig',
        'title',
        'readResource',
        'readData',
        'saveValidator',
        'beforeEmitUpdate',
        'dataStateConfig',
        'buttonNavPosition',
        'buttonNavVisibility',
    ];


    modelValue: LktObject = {};
    editing: boolean = false;

    // Global config
    mode: ItemCrudMode = ItemCrudMode.Read;
    view: ItemCrudView = ItemCrudView.Inline;

    // Buttons
    editModeButton: ButtonConfig = {}; // Not sure, should test
    dropButton: ButtonConfig = {};
    createButton: ButtonConfig = {};
    updateButton: ButtonConfig = {};

    // Config if type === modal
    modalConfig: ModalConfig = {};

    // Save config
    saveConfig: SaveConfig = {
        type: SaveType.Manual,
    };


    title: string = '';
    readResource: string = '';
    readData: LktObject = {};
    saveValidator: Function = () => true;
    beforeEmitUpdate: Function | undefined = undefined;
    dataStateConfig: DataStateConfig = {};
    buttonNavPosition?: ItemCrudButtonNavPosition = ItemCrudButtonNavPosition.Top;
    buttonNavVisibility?: ItemCrudButtonNavVisibility = ItemCrudButtonNavVisibility.Always;

    constructor(data: Partial<ItemCrudConfig> = {}) {
        super();
        this.feed(data);
    }
}