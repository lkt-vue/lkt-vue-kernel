import {DataState} from 'lkt-data-state';
import {FormConfig} from "../config/FormConfig.ts";
import {LktObject} from "../interfaces/LktObject.ts";
import {FieldType} from "../enums/FieldType.ts";
import {MultipleOptionsDisplay} from "../enums/MultipleOptionsDisplay.ts";
import {TableType} from "../enums/TableType.ts";
import {LktSettings} from "../settings/LktSettings.ts";
import {ButtonType} from "../enums/ButtonType.ts";
import {AnchorType} from "../enums/AnchorType.ts";
import {ColumnType} from "../enums/ColumnType.ts";
import {FieldConfig} from "../config/FieldConfig.ts";

export const getFormDataState = (value: LktObject, modifications: LktObject, form: FormConfig) => {
    let r = new DataState(JSON.parse(JSON.stringify(value)), {
        onlyProps: getFormFieldsKeys(form),
        recursiveOnlyProps: false,
    });
    r.increment(JSON.parse(JSON.stringify(modifications)));
    return r;
};

export const getFormFieldsKeys = (form: FormConfig): string[] => {
    if (form.items === undefined) return [];
    if (form.items.length === 0) return [];

    let r: string[] = [];

    for (let i in form.items) {
        let item = form.items[i];
        switch (item.type) {
            case 'field':
                if (item.key !== undefined) {
                    r.push(item.key);
                }
                break;

            case 'form':
                if (item.form) {
                    r = [...r, ...getFormFieldsKeys(item.form)];
                }
                break;
        }
    }
    return r;
};

export const getFormSlotKeys = (form: FormConfig): string[] => {
    if (form.items === undefined) return [];
    if (form.items.length === 0) return [];
    let r = <Array<string>>[];
    for (let i in form.items) {
        let item = form.items[i];
        switch (item.type) {
            case 'slot':
                if (item.key !== undefined) {
                    r.push(item.key);
                }
                break;

            case 'form':
                if (item.form) {
                    r = [...r, ...getFormSlotKeys(item.form)];
                }
                break;
        }

    }
    return r;
}

export const getFieldConfigForWebItemTableOfContents = (
    args: {
        component: string,
        parentComponent: string,
        optionsProperty: string,
        parentId: number
        parentIdProperty: string,
        optResource?: string
        icon?: string
        dragEnabled?: boolean
    }
) => {
    return <FieldConfig>{
        type: args.optResource ? FieldType.Select : FieldType.Table,
        multiple: true,
        options: `prop:${args.optionsProperty}`,
        optionValueType: 'option',
        searchable: true,
        multipleDisplay: MultipleOptionsDisplay.Table,
        multipleDisplayEdition: MultipleOptionsDisplay.Table,
        tooltipConfig: {
            compensateGlobalContainers: false
        },
        optionsConfig: {
            icon: args.icon,
            anchor: {
                to: `/admin/web-items/${args.component}/feed{value}`,
            },
            zeroMeansEmpty: true,
            http: {
                resource: args.optResource
            },
            table: {
                type: TableType.Table,
                editMode: true,
                perms: ['create'],
                drag: {
                    enabled: args.dragEnabled === true,
                    isDraggable: true,
                    isValid: true,
                    isDisabled: false,
                    canRender: true,
                    dragKey: 'drag-indicator'
                },
                requiredItemsForTopCreate: 999,
                createButton: {
                    ...LktSettings.defaultInlineCreateButton,
                    type: ButtonType.Anchor,
                    anchor: {
                        type: AnchorType.RouterLink,
                        to: {
                            path: `/admin/web-items/${args.component}/new`,
                            query: {
                                [args.parentIdProperty]: args.parentId,
                                onCreateTo: `/admin/web-items/${args.parentComponent}/${args.parentId}`
                            }
                        }
                    },
                },
                columns: [
                    {
                        key: 'label',
                        label: 'Item',
                        type: ColumnType.Field,
                    },
                    {
                        key: 'details',
                        label: 'Details',
                        type: ColumnType.Button,
                        button: {
                            type: ButtonType.Anchor,
                            text: '__:buttons.details',
                            class: 'lkt-button--info',
                            icon: 'lkt-icn-expand',
                            anchor: {
                                to: `/admin/web-items/${args.component}/feed{value}`
                            }
                        }
                    }
                ]
            }
        },
    }
}