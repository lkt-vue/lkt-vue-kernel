import {ValidModalName} from "../../../types/ValidModalName.ts";
import {ModalConfig} from "../../../config/ModalConfig.ts";
import {ModalRegisterType} from "../enums/ModalRegisterType.ts";
import {ValidModalComponent} from "../../../types/ValidModalComponent.ts";

export interface ModalRegister {
    name: ValidModalName
    type: ModalRegisterType
    component: ValidModalComponent
    config?: Partial<ModalConfig>
}