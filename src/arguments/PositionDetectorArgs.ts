import {TooltipLocation} from "../enums/TooltipLocation.ts";

export interface PositionDetectorArgs {
    positionReferenceElement?: HTMLElement
    contentElement?: HTMLElement
    location?: TooltipLocation
    adjustToReferrerWidth?: boolean
    offset?: {
        window?: number
        referrer?: number
    },
    compensation?: {
        x?: number
        y?: number
    }
}