import {TooltipSettings} from "../interfaces/TooltipSettings.ts";

export class TooltipSettingsController {
    static data: TooltipSettings = {};

    static configure(config: TooltipSettings) {
        TooltipSettingsController.data = config;
        return TooltipSettingsController;
    }
}