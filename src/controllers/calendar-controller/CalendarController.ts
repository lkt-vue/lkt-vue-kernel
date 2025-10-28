import {ref, Ref} from "vue";
import {DayOfWeek} from "../../enums/DayOfWeek.ts";
import {CalendarConfigSetup} from "./config/CalendarConfigSetup.ts";

export class CalendarController {
    static firstDayOfWeek: Ref<DayOfWeek> = ref(DayOfWeek.Sunday);

    static days: Array<string> = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    static months: Array<string> = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    static smDays: Array<string> = ['Sun','Mon','Tu','Wed','Th','Fri','Sat'];
    static smMonths: Array<string> = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    static setup(cfg: CalendarConfigSetup) {
        if (cfg.firstDayOfWeek) CalendarController.firstDayOfWeek.value = cfg.firstDayOfWeek;
        if (cfg.days) CalendarController.days = cfg.days;
        if (cfg.months) CalendarController.months = cfg.months;
        if (cfg.smDays) CalendarController.smDays = cfg.smDays;
        if (cfg.smMonths) CalendarController.smMonths = cfg.smMonths;
    }
}