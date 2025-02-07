/**
 * Export common interfaces
 */
export {LktObject} from './interfaces/LktObject.ts';

/**
 * Export config interfaces
 */
export {FieldConfig} from './config/FieldConfig.ts';
export {OptionConfig} from './config/OptionConfig.ts';
export {ModalConfig} from './config/ModalConfig.ts';
export {TooltipConfig} from './config/TooltipConfig.ts';
export {AnchorConfig} from './config/AnchorConfig.ts';
export {DragConfig} from './config/DragConfig.ts';
export {ButtonConfig} from './config/ButtonConfig.ts';
export {ColumnConfig} from './config/ColumnConfig.ts';
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
export {Table} from './instances/Table.ts';

/**
 * Export enums
 */
export {AnchorType} from './enums/AnchorType.ts';
export {ButtonType} from './enums/ButtonType.ts';
export {ColumnType} from './enums/ColumnType.ts';
export {FieldAutoValidationTrigger} from './enums/FieldAutoValidationTrigger.ts';
export {FieldType} from './enums/FieldType.ts';
export {ModalType} from './enums/ModalType.ts';
export {MultipleOptionsDisplay} from './enums/MultipleOptionsDisplay.ts';
export {SortDirection} from './enums/SortDirection.ts';
export {TableType} from './enums/TableType.ts';
export {TablePermission} from './enums/TablePermission.ts';
export {ToggleMode} from './enums/ToggleMode.ts';
export {TooltipLocationY} from './enums/TooltipLocationY.ts';
export {TooltipLocationX} from './enums/TooltipLocationX.ts';
export {TooltipPositionEngine} from './enums/TooltipPositionEngine.ts';

/**
 * Export types
 */
export {EmptyModalKey} from './types/EmptyModalKey.ts';
export {ValidFieldValue} from './types/ValidFieldValue.ts';
export {ValidModalKey} from './types/ValidModalKey.ts';
export {ValidModalName} from './types/ValidModalName.ts';
export {ValidOptionValue} from './types/ValidOptionValue.ts';
export {ValidColSpan} from './types/ValidColSpan.ts';
export {ValidFieldMinMax} from './types/ValidFieldMinMax.ts';
export {ValidTabIndex} from './types/ValidTabIndex.ts';
export {ValidSafeStringValue} from './types/ValidSafeStringValue.ts';

/**
 * Export value objects
 */
export {SafeString} from './value-objects/SafeString.ts';

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