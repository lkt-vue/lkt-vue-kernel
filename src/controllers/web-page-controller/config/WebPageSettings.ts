import {LktObject} from "../../../interfaces/LktObject.ts";
import {HeaderConfig} from "../../../config/HeaderConfig.ts";

export interface WebPageSettings {
    id: string
    code: string
    label?: string
    icon?: string
    labelSingle?: string
    labelMany?: string
    appHeaderSingle?: HeaderConfig | ((data: LktObject) => HeaderConfig)
    appHeaderMany?: HeaderConfig
    itemGenerator?: ((data: LktObject) => LktObject)
}