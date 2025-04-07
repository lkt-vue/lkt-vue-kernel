import {LktItem} from "./LktItem.ts";
import {LoginConfig} from "../config/LoginConfig.ts";
import {FormConfig} from "../config/FormConfig.ts";

export class Login extends LktItem implements LoginConfig {

    static lktDefaultValues: (keyof LoginConfig)[] = [
        'loginForm',
        'singUpForm',
    ];

    loginForm?: FormConfig = undefined;
    singUpForm?: FormConfig = undefined;

    constructor(data: Partial<LoginConfig> = {}) {
        super();
        this.feed(data);
    }
}