import {ModalConfig} from "../config/ModalConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {ModalController} from "../controllers/ModalController.ts";
import {ModalRegister} from "../controllers/config/ModalRegister.ts";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ModalCallbackConfig} from "../config/ModalCallbackConfig.ts";

export const getConfirmModalName = (name?: ValidModalName) => {
    if (typeof name === 'string' && name.indexOf('confirm__') === 0) {
        name = name.substring(9);
        return 'confirm__'+name;
    }
    return name;
}

export const addModal = (config: ModalRegister) => {
    ModalController.addModal(config);
}

export const addConfirm = (modalConfig: ModalRegister) => {
    addModal({
        ...modalConfig,
        name: getConfirmModalName(modalConfig.name),
    });
};

export const openModal = (modalConfig: ModalConfig, componentProps: LktObject) => {
    ModalController.open(modalConfig, componentProps);
    ModalController.canvas?.refresh();
}

export const closeModal = (modalConfig: ModalConfig) => {
    ModalController.close(modalConfig);
    ModalController.canvas?.refresh();
}

export const setModalCanvas = (canvas: any) => {
    ModalController.canvas = canvas;
}


export const openConfirm = (modalConfig: ModalConfig, componentProps: LktObject) => {
    let name = getConfirmModalName(modalConfig.modalName);
    openModal({
        ...modalConfig,
        modalName: getConfirmModalName(modalConfig.modalName),
    }, componentProps);
};


export const closeConfirm = (modalConfig: ModalConfig) => {
    closeModal({
        ...modalConfig,
        modalName: getConfirmModalName(modalConfig.modalName),
    });
};

export const runModalCallback = (cfg: ModalCallbackConfig) => {
    ModalController.runModalCallback(cfg);
}