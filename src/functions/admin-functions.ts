import {MenuEntryConfig} from "../config/MenuEntryConfig.ts";
import {WebPageController} from "../controllers/web-page-controller/WebPageController.ts";
import {MenuEntryType} from "../enums/MenuEntryType.ts";
import {Ref} from "vue";
import {WebItemsController} from "../controllers/web-items-controller/WebItemsController.ts";
import {WebItemConfig} from "../controllers/web-items-controller/config/WebItemConfig.ts";

export const getAdminMenuEntries = (data: {
    menuStatus: Ref<boolean>
}):MenuEntryConfig[] => {
    let r = <Array<MenuEntryConfig>>[];

    if (WebPageController.hasDefaultPageEnabled()) {
        r.push({
            key: 'web-pages',
            type: MenuEntryType.Entry,
            icon: 'lkt-icn-webpage',
            anchor: {
                to: '/admin/web-pages/0',
                text: 'Pages',
                events: {
                    click: () => {
                        data.menuStatus.value = false;
                    }
                }
            }
        })
    }

    WebPageController.getPages().forEach(page => {
        r.push({
            key: page.code,
            type: MenuEntryType.Entry,
            icon: 'lkt-icn-webpage',
            anchor: {
                to: `/admin/web-pages/${page.id}`,
                text: page.label,
                events: {
                    click: () => {
                        data.menuStatus.value = false;
                    }
                }
            }
        })
    })

    WebItemsController.getItems().forEach((webItem: WebItemConfig) => {
        if (webItem.many !== false) {
            r.push({
                key: webItem.code,
                type: MenuEntryType.Entry,
                icon: webItem.icon,
                anchor: {
                    to: `/admin/web-items/${webItem.code}`,
                    text: webItem.labelMany,
                    events: {
                        click: () => {
                            data.menuStatus.value = false;
                        }
                    }
                }
            })
        }
    })

    r.push(
        {
            key: 'translations',
            type: MenuEntryType.Entry,
            icon: 'lkt-icn-lang-picker',
            anchor: {
                to: '/admin/i18n',
                text: 'Translations',
                events: {
                    click: () => {
                        data.menuStatus.value = false;
                    }
                }
            }
        })

    return r;
}