import {WebElementSettings} from "./config/WebElementSettings.ts";

export class WebElementController {
    private static elements: Array<WebElementSettings> = [];

    static addWebElement(element: WebElementSettings) {
        WebElementController.elements.push(element);
    }

    static getElements() {
        return WebElementController.elements;
    }

    static getCustomWebElementSettings(needle: string) {
        let type = needle.startsWith('custom:') ? needle.split(':')[1] : needle;
        return WebElementController.elements.find(element => element.id === type);
    }
}