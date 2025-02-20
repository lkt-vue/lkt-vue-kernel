import {ValidModalKey} from "./ValidModalKey.ts";
import {LktObject} from "../interfaces/LktObject.ts";

export type BeforeCloseModalData = {
    modalName: ValidModalKey,
    modalKey: ValidModalKey,
    item?: LktObject
    itemCreated?: boolean
}