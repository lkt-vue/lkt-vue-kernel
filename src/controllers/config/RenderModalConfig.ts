import {LktObject} from "../../interfaces/LktObject.ts";
import {ModalConfig} from "../../config/ModalConfig.ts";
import {ModalRegister} from "./ModalRegister.ts";

export interface RenderModalConfig {
    componentProps: LktObject
    modalConfig: ModalConfig
    modalRegister: ModalRegister
    index: string

    // Legacy mode (lkt-modal v1 support)
    legacy: boolean
    legacyData?: {
        props?: LktObject
    }
}