import {CalendarConfigSetup} from "../controllers/calendar-controller/config/CalendarConfigSetup.ts";
import {CalendarController} from "../controllers/calendar-controller/CalendarController.ts";

export const setupCalendarConfig = (cfg: CalendarConfigSetup) => {
    CalendarController.setup(cfg);
}