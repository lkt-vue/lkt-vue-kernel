import {WebElement} from "../instances/WebElement.ts";

export interface WebElementConfiguration {
    hasHeader?: boolean
    hasSubHeader?: boolean
    hasIcon?: boolean
    amountOfCallToActions?: number
    callToActions?: Array<WebElement>
}