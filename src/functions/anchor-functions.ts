import {AnchorConfig} from "../config/AnchorConfig.ts";
import {AnchorType} from "../enums/AnchorType.ts";
import {extractPropValue} from "./extract-data-functions.ts";

export const getAnchorHref = (anchor: AnchorConfig) => {
    let r = '';
    if (typeof anchor.to === 'string') r = anchor.to;

    //@ts-ignore
    if (typeof anchor.to === 'function') r = anchor.to(anchor.prop ?? {});
    //@ts-ignore
    if (typeof anchor.to === 'string') r = extractPropValue(anchor.to, anchor.prop ?? {});

    if (typeof anchor.type !== 'undefined') {
        switch (anchor.type) {
            case AnchorType.Mail:
                return `mailto:${r}`;

            case AnchorType.Tel:
                return `tel:${r}`;

            case AnchorType.Href:
            case AnchorType.Tab:
            case AnchorType.Download:
                return r;
        }
    }

    return r;
}