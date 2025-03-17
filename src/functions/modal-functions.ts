import {ModalConfig} from "../config/ModalConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {ModalController} from "../controllers/ModalController.ts";
import {ModalRegister} from "../controllers/config/ModalRegister.ts";

export const addModal = (config: ModalRegister) => {
    ModalController.addModal(config);
}

export const openModal = (modalConfig: ModalConfig, componentProps: LktObject) => {
    ModalController.open(modalConfig, componentProps);
    ModalController.canvas?.refresh();
}

export const closeModal = (modalConfig: ModalConfig) => {
    ModalController.close(modalConfig);
    ModalController.canvas?.refresh();
}