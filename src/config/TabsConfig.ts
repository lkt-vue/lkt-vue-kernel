import {LktObject} from "../interfaces/LktObject.ts";

export interface TabsConfig {
    modelValue: string|number
    id?: string
    useSession?: boolean
    cacheLifetime?: number
    contentPad?: string
    titles?: LktObject
}