import {LktObject} from "../../interfaces/LktObject.ts";
import {ValidModalName} from "../../types/ValidModalName.ts";
import {RenderModalConfig} from "./config/RenderModalConfig.ts";
import {ModalRegister} from "./config/ModalRegister.ts";
import {ModalConfig} from "../../config/ModalConfig.ts";
import {ModalCanvasInterface} from "./controller-canvas/ModalCanvasInterface.ts";
import {ValidModalKey} from "../../types/ValidModalKey.ts";
import {ModalCallbackConfig} from "../../config/ModalCallbackConfig.ts";
import {ModalCallbackAction} from "../../enums/ModalCallbackAction.ts";
import {nextTick} from "vue";

export class ModalController {
    private static config: Array<ModalRegister> = [];
    private static components: LktObject = [];
    private static zIndex: number = 500;

    static canvas?: ModalCanvasInterface|undefined = undefined;

    static addModal(modalConfig: ModalRegister) {
        ModalController.config.push(modalConfig);
        return ModalController;
    }

    private static findConfig(name: ValidModalName): ModalRegister | undefined {
        return ModalController.config.find((z: ModalRegister) => z.name === name);
    }

    private static getInstanceIndex(modalConfig: ModalConfig) {
        return `${modalConfig.modalName}_${modalConfig.modalKey}`;
    }

    private static getModalInfo(modalConfig: ModalConfig, componentProps: LktObject = {}, modalRegister: ModalRegister): RenderModalConfig {
        const index = ModalController.getInstanceIndex(modalConfig);

        modalConfig = {
            ...modalRegister.config,
            ...modalConfig,
            zIndex: (() => ModalController.zIndex)(),
        }

        return {
            componentProps,
            modalConfig,
            modalRegister,
            index,

            legacy: false,
            legacyData: {
                props: {
                    ...modalConfig,
                    modalConfig,
                    ...componentProps,
                },
            }
        };
    }

    private static focus(info: RenderModalConfig) {
        ModalController.components[info.index] = info;
        return ModalController.components[info.index];
    }

    static open(modalConfig: ModalConfig, componentProps: LktObject = {}, legacy: boolean = false) {

        if (componentProps.modalKey) modalConfig.modalKey = componentProps.modalKey;

        const modalRegister = ModalController.findConfig(modalConfig.modalName);

        if (legacy) {
            if (componentProps.size) {
                modalConfig.size = componentProps.size;
                delete componentProps.size;
            }
            if (componentProps.preTitle) {
                modalConfig.preTitle = componentProps.preTitle;
                delete componentProps.preTitle;
            }
            if (componentProps.preTitleIcon) {
                modalConfig.preTitleIcon = componentProps.preTitleIcon;
                delete componentProps.preTitleIcon;
            }
            if (componentProps.title) {
                modalConfig.title = componentProps.title;
                delete componentProps.title;
            }
            if (componentProps.closeIcon) {
                modalConfig.closeIcon = componentProps.closeIcon;
                delete componentProps.closeIcon;
            }
            if (componentProps.closeConfirm) {
                modalConfig.closeConfirm = componentProps.closeConfirm;
                delete componentProps.closeConfirm;
            }
            if (componentProps.closeConfirmKey) {
                modalConfig.closeConfirmKey = componentProps.closeConfirmKey;
                delete componentProps.closeConfirmKey;
            }
            if (componentProps.showClose) {
                modalConfig.showClose = componentProps.showClose;
                delete componentProps.showClose;
            }
            if (componentProps.disabledClose) {
                modalConfig.disabledClose = componentProps.disabledClose;
                delete componentProps.disabledClose;
            }
            if (componentProps.disabledVeilClick) {
                modalConfig.disabledVeilClick = componentProps.disabledVeilClick;
                delete componentProps.disabledVeilClick;
            }
            if (componentProps.hiddenFooter) {
                modalConfig.hiddenFooter = componentProps.hiddenFooter;
                delete componentProps.hiddenFooter;
            }
            if (componentProps.modalName) {
                modalConfig.modalName = componentProps.modalName;
                delete componentProps.modalName;
            }
            if (componentProps.modalKey) {
                modalConfig.modalKey = componentProps.modalKey;
                delete componentProps.modalKey;
            }
            if (componentProps.beforeClose) {
                modalConfig.beforeClose = componentProps.beforeClose;
                delete componentProps.beforeClose;
            }
            if (componentProps.item) {
                modalConfig.item = componentProps.item;
                delete componentProps.item;
            }
            if (componentProps.confirmButton) {
                modalConfig.confirmButton = componentProps.confirmButton;
                delete componentProps.confirmButton;
            }
            if (componentProps.cancelButton) {
                modalConfig.cancelButton = componentProps.cancelButton;
                delete componentProps.cancelButton;
            }
            if (componentProps.type) {
                modalConfig.type = componentProps.type;
                delete componentProps.type;
            }
        }
        if (modalRegister) {
            ++ModalController.zIndex;
            const info = this.getModalInfo(modalConfig, componentProps, modalRegister);
            info.legacy = legacy;
            if (ModalController.components[info.index]) {
                return ModalController.focus(info);
            }
            ModalController.components[info.index] = info;
            ModalController.canvas?.refresh();
            return ModalController.components[info.index];
        }
        return undefined;
    }

    static close(modalConfig: ModalConfig) {
        const modalRegister = ModalController.findConfig(modalConfig.modalName);
        if (modalRegister) {
            --ModalController.zIndex;
            const index = ModalController.getInstanceIndex(modalConfig);
            delete ModalController.components[index];

            if (Object.keys(ModalController.components).length === 0) {
                ModalController.zIndex = 500;
            }

            ModalController.canvas?.refresh();
        }
    }

    static reOpen (config: ModalConfig, componentProps: LktObject = {}, legacy: boolean = false) {
        if (!ModalController.canvas) {
            console.warn('ModalCanvas not defined');
            return;
        }
        ModalController.close(config);
        ModalController.canvas?.refresh();
        nextTick(() => {
            ModalController.open(config, componentProps, legacy);
            //@ts-ignore
            ModalController.canvas?.refresh();
        });
    };

    static execModal (config: ModalConfig, method: string, componentProps: LktObject = {}) {
        if (!ModalController.canvas) {
            console.warn('ModalCanvas not defined');
            return;
        }
        ModalController.canvas?.execModal(config.modalName, config.modalKey, method, componentProps);
        ModalController.canvas?.refresh();
    }

    static refresh (config: ModalConfig, componentProps: LktObject = {}) {
        if (!ModalController.canvas) {
            console.warn('ModalCanvas not defined');
            return;
        }
        ModalController.canvas?.refreshModal(config.modalName, config.modalKey, componentProps);
        ModalController.canvas?.refresh();
    }

    static runModalCallback (cfg: ModalCallbackConfig) {
        let modalKey = cfg.modalKey ? cfg.modalKey : '_',
            args = cfg.args ? cfg.args : {};

        let config = {
            modalName: cfg.modalName,
            modalKey,
        }

        switch (cfg.action) {
            case ModalCallbackAction.ReOpen:
                return ModalController.reOpen(config, args);

            case ModalCallbackAction.Open:
                return ModalController.open(config, args);

            case ModalCallbackAction.Close:
                return ModalController.close(config);

            case ModalCallbackAction.Refresh:
                return ModalController.refresh(config, args);

            case ModalCallbackAction.Exec:
                let method = cfg.method;
                if (!method) return;
                return ModalController.execModal(config, method, args);

        }
    }

    static updateModalKey(modalConfig: ModalConfig, newKey: ValidModalKey) {
        if (!ModalController.canvas) {
            console.warn('ModalCanvas not defined');
            return;
        }

        let oldIndex = ModalController.getInstanceIndex(modalConfig);
        let newIndex = ModalController.getInstanceIndex({
            modalName: modalConfig.modalName,
            modalKey: newKey,
        });
        ModalController.components[newIndex] = ModalController.components[oldIndex];
        ModalController.components[newIndex].modalConfig.modalKey = newKey;
        ModalController.components[newIndex].legacyData.props.modalConfig.modalKey = newKey;
        ModalController.components[newIndex].legacyData.props.modalKey = newKey;
        delete ModalController.components[oldIndex];
        ModalController.canvas?.refresh();
        return ModalController;
    }
}