import {WebPageSettings} from "./config/WebPageSettings.ts";

export class WebPageController {
    private static pages: Array<WebPageSettings> = [];

    static addWebPage(element: WebPageSettings) {
        WebPageController.pages.push(element);
        return WebPageController;
    }

    static getPages() {
        return WebPageController.pages;
    }

    static getCustomWebPageSettings(needle: string) {
        return WebPageController.pages.find(
            element => element.id === needle || element.code === needle
        );
    }
}