/**
 * Export common interfaces
 */
export {LktObject} from './interfaces/LktObject.ts';

/**
 * Export settings
 */
export {LktSettings} from './settings/LktSettings.ts';

/**
 * Export config interfaces
 */
export {FieldConfig} from './config/FieldConfig.ts';
export {OptionConfig} from './config/OptionConfig.ts';
export {IsDisabledCheckerArgs} from './config/IsDisabledCheckerArgs.ts';
export {ItemCrudConfig} from './config/ItemCrudConfig.ts';
export {ModalCallbackConfig} from './config/ModalCallbackConfig.ts';
export {ModalConfig} from './config/ModalConfig.ts';
export {PaginatorConfig} from './config/PaginatorConfig.ts';
export {TooltipConfig} from './config/TooltipConfig.ts';
export {AnchorConfig} from './config/AnchorConfig.ts';
export {DragConfig} from './config/DragConfig.ts';
export {ButtonConfig} from './config/ButtonConfig.ts';
export {ColumnConfig} from './config/ColumnConfig.ts';
export {SaveConfig} from './config/SaveConfig.ts';
export {TableConfig} from './config/TableConfig.ts';

/**
 * Export instances
 */
export {LktItem} from './instances/LktItem.ts';
export {LktStrictItem} from './instances/LktStrictItem.ts';
export {Option} from './instances/Option.ts';
export {Field} from './instances/Field.ts';
export {Column} from './instances/Column.ts';
export {Anchor} from './instances/Anchor.ts';
export {Button} from './instances/Button.ts';
export {Tooltip} from './instances/Tooltip.ts';
export {Modal} from './instances/Modal.ts';
export {Paginator} from './instances/Paginator.ts';
export {Table} from './instances/Table.ts';

/**
 * Export enums
 */
export {AnchorType} from './enums/AnchorType.ts';
export {ButtonType} from './enums/ButtonType.ts';
export {ColumnType} from './enums/ColumnType.ts';
export {FieldAutoValidationTrigger} from './enums/FieldAutoValidationTrigger.ts';
export {FieldType} from './enums/FieldType.ts';
export {ItemCrudButtonNavPosition} from './enums/ItemCrudButtonNavPosition.ts';
export {ItemCrudButtonNavVisibility} from './enums/ItemCrudButtonNavVisibility.ts';
export {ItemCrudType} from './enums/ItemCrudType.ts';
export {ItemCrudView} from './enums/ItemCrudView.ts';
export {ModalCallbackAction} from './enums/ModalCallbackAction.ts';
export {ModalType} from './enums/ModalType.ts';
export {MultipleOptionsDisplay} from './enums/MultipleOptionsDisplay.ts';
export {PaginatorType} from './enums/PaginatorType.ts';
export {SaveType} from './enums/SaveType.ts';
export {SortDirection} from './enums/SortDirection.ts';
export {TableType} from './enums/TableType.ts';
export {TablePermission} from './enums/TablePermission.ts';
export {TableRowType} from './enums/TableRowType.ts';
export {ToggleMode} from './enums/ToggleMode.ts';
export {TooltipLocationY} from './enums/TooltipLocationY.ts';
export {TooltipLocationX} from './enums/TooltipLocationX.ts';
export {TooltipPositionEngine} from './enums/TooltipPositionEngine.ts';

/**
 * Export types
 */
export {BeforeCloseModalData} from './types/BeforeCloseModalData.ts';
export {ScanPropTarget} from './types/ScanPropTarget.ts';
export {EmptyModalKey} from './types/EmptyModalKey.ts';
export {IsDisabledChecker} from './types/IsDisabledChecker.ts';
export {ValidBeforeCloseModal} from './types/ValidBeforeCloseModal.ts';
export {ValidCustomSlot} from './types/ValidCustomSlot.ts';
export {ValidDragConfig} from './types/ValidDragConfig.ts';
export {ValidFieldValue} from './types/ValidFieldValue.ts';
export {ValidIsDisabledValue} from './types/ValidIsDisabledValue.ts';
export {ValidModalKey} from './types/ValidModalKey.ts';
export {ValidModalName} from './types/ValidModalName.ts';
export {ValidOptionValue} from './types/ValidOptionValue.ts';
export {ValidPaginatorConfig} from './types/ValidPaginatorConfig.ts';
export {ValidColSpan} from './types/ValidColSpan.ts';
export {ValidFieldMinMax} from './types/ValidFieldMinMax.ts';
export {ValidSafeStringValue} from './types/ValidSafeStringValue.ts';
export {ValidScanPropTarget} from './types/ValidScanPropTarget.ts';
export {ValidTabIndex} from './types/ValidTabIndex.ts';
export {ValidTablePermission} from './types/ValidTablePermission.ts';
export {ValidTableRowTypeValue} from './types/ValidTableRowTypeValue.ts';

/**
 * Export value objects
 */
export {SafeString} from './value-objects/SafeString.ts';

/**
 * Export functions
 */
export {extractPropValue, extractI18nValue} from "./functions/extract-data-functions.ts";



// export function getDefaultValues<T>(cls: new () => T): T {
//     const instance = new cls();
//     return instance as T;
// }

// export function getDefaultValues<T, U>(cls: new () => T, interfaceType: U): Partial<U> {
//     const instance = new cls();
//     const result: Partial<U> = {};
//
//     // Recorremos las claves de la interfaz y extraemos los valores por defecto solo para las propiedades que están en la interfaz
//     //@ts-ignore
//     for (const key of Object.keys(instance)) {
//         if (!key.startsWith('lkt')) {
//             //@ts-ignore
//             if (key in interfaceType) {
//                 result[key as keyof U] = (instance as any)[key];
//             }
//         }
//     }
//
//     return result;
// }

// export function getDefaultValues<T>(cls: { new (): T; lktDefaultValues: (keyof T)[] }): Partial<T> {
//     const instance = new cls();
//     const result: Partial<T> = {};
//
//     // Filtrar solo las propiedades que están en lktDefaultValues
//     for (const key of cls.lktDefaultValues) {
//         // @ts-ignore
//         if (key in instance) {
//             result[key] = instance[key];
//         }
//     }
//
//     return result;
// }

export function getDefaultValues<T>(cls: { new (): T; lktDefaultValues: (keyof T)[] }): Partial<T> {
    const instance = new cls();
    const result: Partial<T> = {};

    // Verifica que `lktDefaultValues` sea iterable
    if (!Array.isArray(cls.lktDefaultValues)) {
        throw new Error("lktDefaultValues must be a keys array.");
    }

    // Filtrar solo las propiedades que están en lktDefaultValues
    for (const key of cls.lktDefaultValues) {
        //@ts-ignore
        if (key in instance) {
            result[key] = instance[key];
        }
    }

    return result;
}