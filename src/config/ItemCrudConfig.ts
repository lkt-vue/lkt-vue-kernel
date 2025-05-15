import {LktObject} from "../interfaces/LktObject.ts";
import {ModalConfig} from "./ModalConfig.ts";
import {ItemCrudView} from "../enums/ItemCrudView.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {ItemCrudMode} from "../enums/ItemCrudMode.ts";
import {ItemCrudButtonNavPosition} from "../enums/ItemCrudButtonNavPosition.ts";
import {ItemCrudButtonNavVisibility} from "../enums/ItemCrudButtonNavVisibility.ts";
import {SaveConfig} from "./SaveConfig.ts";
import {DataStateConfig} from "lkt-data-state";
import {NotificationType} from "../enums/NotificationType.ts";
import {ValidTablePermission} from "../types/ValidTablePermission.ts";
import {ClickEventArgs} from "../arguments/ClickEventArgs.ts";
import {FormConfig} from "./FormConfig.ts";
import {ModificationView} from "../enums/ModificationView.ts";
import {TableConfig} from "./TableConfig.ts";
import {TableConfigReturnFunction} from "../return-functions-types/TableConfigReturnFunction.ts";
import {FormUiConfig} from "./FormUiConfig.ts";

export interface ItemCrudConfig {
    modelValue?: LktObject
    modifications?: LktObject
    editing?: boolean
    perms?: ValidTablePermission[]
    customData?: LktObject
    form?: FormConfig
    formUiConfig?: Partial<FormUiConfig>

    // Global config
    mode?: ItemCrudMode
    view?: ItemCrudView
    visibleView?: ModificationView
    modificationViews?: boolean | Array<ModificationView>

    // Buttons
    editModeButton?: ButtonConfig|false
    dropButton?: ButtonConfig|false
    createButton?: ButtonConfig|false
    updateButton?: ButtonConfig|false
    groupButton?: ButtonConfig|boolean
    groupButtonAsModalActions?: boolean

    // Nav
    buttonNavPosition?: ItemCrudButtonNavPosition
    buttonNavVisibility?: ItemCrudButtonNavVisibility

    // Config if view === modal
    modalConfig?: ModalConfig

    // Save config
    saveConfig?: SaveConfig

    // State
    dataStateConfig?: DataStateConfig

    // Fetch data
    readResource?: string
    readData?: LktObject

    // Title (only if view === inline)
    title?: string

    // Events
    beforeEmitUpdate?: Function | undefined

    // Notifications
    notificationType?: NotificationType

    enabledSaveWithoutChanges?: boolean

    redirectOnCreate?: string | ((id: number|string) => string)
    redirectOnDrop?: string | (() => string)

    differencesTableConfig?: TableConfig | TableConfigReturnFunction

    events?: {
        httpStart?: undefined | Function,
        httpEnd?: (data: ClickEventArgs) => void|undefined,
    }
}