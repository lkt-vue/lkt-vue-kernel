import {WebElementSettings} from "./config/WebElementSettings.ts";
import {LktObject} from "../../interfaces/LktObject.ts";
import {WebElementAppearanceSettings} from "./config/WebElementAppearanceSettings.ts";

export class WebElementController {
    private static elements: Array<WebElementSettings> = [];
    private static customAppearance: LktObject = {};

    static addWebElement(element: WebElementSettings) {
        WebElementController.elements.push(element);
        return WebElementController;
    }

    static getElements() {
        return WebElementController.elements;
    }

    static getCustomWebElementSettings(needle: string) {
        let type = needle.startsWith('custom:') ? needle.split(':')[1] : needle;
        return WebElementController.elements.find(element => element.id === type);
    }

    static setCustomAppearance(config: WebElementAppearanceSettings) {
        if (typeof config.key === 'string') {
            WebElementController.customAppearance[config.key] = config;
        } else {
            config.key.forEach(key => {
                WebElementController.customAppearance[key] = config;
            })
        }
        return WebElementController;
    }

    static getCustomAppearance(component: string) {
        return WebElementController.customAppearance[component];
    }
}