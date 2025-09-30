import {TabConfig} from "./TabConfig.ts";
import {ValidTabKey} from "../types/ValidTabKey.ts";
import {ButtonConfig} from "./ButtonConfig.ts";
import {PolymorphicElementConfig} from "./PolymorphicElementConfig.ts";

export interface TabsConfig {
    modelValue?: ValidTabKey
    id?: string
    class?: string
    contentClass?: string
    useSession?: boolean
    cacheLifetime?: number

    // Tabs
    tabs: Array<TabConfig>
    navStartButtons?: Array<ButtonConfig>
    navEndButtons?: Array<ButtonConfig>
    navPostEndButtonsElements?: Array<PolymorphicElementConfig>
}