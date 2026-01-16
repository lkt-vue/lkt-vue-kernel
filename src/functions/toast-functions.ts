import {ToastConfig} from "../config/ToastConfig.ts";
import {ToastController} from "../controllers/toast-controller/ToastController.ts";


export const openToast = (config: ToastConfig) => {
    if (!ToastController.canvas) {
        console.warn('ToastCanvas not defined');
        return;
    }
    ToastController.open(config);
    //@ts-ignore
    ToastController.canvas.refresh();
};

export const closeToast = (zIndex: number) => {
    if (!ToastController.canvas) {
        console.warn('ToastCanvas not defined');
        return;
    }
    ToastController.close(zIndex);
    //@ts-ignore
    ToastController.canvas.refresh();
};