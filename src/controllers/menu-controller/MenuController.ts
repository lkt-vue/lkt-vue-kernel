import {LktObject} from "../../interfaces/LktObject.ts";
import {ValidModalKey} from "../../types/ValidModalKey.ts";
import {ref, Ref} from "vue";

export class MenuController {
    static config: LktObject = {};

    static addMenu(key: ValidModalKey, initialStatus: Ref<boolean>) {
        let k = typeof key === 'function' ? key() : key;
        MenuController.config[k] = ref(initialStatus);
        return MenuController;
    }

    static toggleMenu(key: ValidModalKey) {
        let k = typeof key === 'function' ? key() : key;
        if (typeof MenuController.config[k] === 'undefined') return undefined;

        MenuController.config[k].value = !MenuController.config[k].value;
        return MenuController.config[k];
    }

    static closeMenu(key: ValidModalKey) {
        let k = typeof key === 'function' ? key() : key;
        if (typeof MenuController.config[k] === 'undefined') return undefined;

        MenuController.config[k].value = false;
        return MenuController.config[k];
    }

    static openMenu(key: ValidModalKey) {
        let k = typeof key === 'function' ? key() : key;
        if (typeof MenuController.config[k] === 'undefined') return undefined;

        MenuController.config[k].value = true;
        return MenuController.config[k];
    }

    static getMenuStatus(key: ValidModalKey) {
        let k = typeof key === 'function' ? key() : key;
        if (typeof MenuController.config[k] === 'undefined') return undefined;

        console.log('getMenuStatus: ', MenuController.config[k].value)

        return MenuController.config[k].value;
    }
}