import {ModalConfig} from "../config/ModalConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {ModalController} from "../controllers/modal-controller/ModalController.ts";
import {ModalRegister} from "../controllers/modal-controller/config/ModalRegister.ts";
import {ValidModalName} from "../types/ValidModalName.ts";
import {ModalCallbackConfig} from "../config/ModalCallbackConfig.ts";
import {ModalCanvasInterface} from "../controllers/modal-controller/controller-canvas/ModalCanvasInterface.ts";

export const getConfirmModalName = (name?: ValidModalName) => {
    if (typeof name === 'string' && name.indexOf('confirm__') === 0) {
        name = name.substring(9);
    }
    return 'confirm__' + name;
}

export const addModal = (config: ModalRegister) => {
    ModalController.addModal(config);
}

export const addConfirm = (modalConfig: ModalRegister) => {
    ModalController.addModal({
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

export const setModalCanvas = (canvas: ModalCanvasInterface) => {
    ModalController.canvas = canvas;
}


export const openConfirm = (modalConfig: ModalConfig, componentProps: LktObject) => {
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