import {Notification} from "lkt-http-client";
import {openToast} from "./toast-functions.ts";
import {ToastConfig} from "../config/ToastConfig.ts";
import {ToastPositionX} from "../enums/ToastPositionX.ts";

export const dispatchHttpNotifications = (items: Array<Notification>) => {
    items?.forEach(notification => {
        if (notification.category === 'toast'){
            openToast(<ToastConfig>{
                positionX: ToastPositionX.Right,
                ...notification.payload,
            });
        }
    })
}