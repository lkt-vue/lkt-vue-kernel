/**
 * Export common interfaces
 */
export {LktObject} from './interfaces/LktObject.ts';

/**
 * Export settings
 */
export {LktSettings} from './settings/LktSettings.ts';

/**
 * Export constants
 */
export {
    booleanFieldTypes,
    fieldTypesWithOptions,
    fieldTypesWithoutClear,
    fieldTypesWithoutUndo,
    fieldsWithMultipleMode,
    textFieldTypes,
    textFieldTypesWithOptions
} from './constants/field-constants.ts';

/**
 * Export config interfaces
 */
export {AccordionConfig} from './config/AccordionConfig.ts';
export {AnchorConfig} from './config/AnchorConfig.ts';
export {BooleanFieldConfig} from './config/BooleanFieldConfig.ts';
export {BoxConfig} from './config/BoxConfig.ts';
export {ButtonConfig} from './config/ButtonConfig.ts';
export {ColumnConfig} from './config/ColumnConfig.ts';
export {DragConfig} from './config/DragConfig.ts';
export {EventsConfig} from './config/EventsConfig.ts';
export {FieldConfig} from './config/FieldConfig.ts';
export {FieldReadModeConfig} from './config/FieldReadModeConfig.ts';
export {FieldValidationConfig} from './config/FieldValidationConfig.ts';
export {HttpCallConfig} from './config/HttpCallConfig.ts';
export {IconConfig} from './config/IconConfig.ts';
export {ImageConfig} from './config/ImageConfig.ts';
export {IsDisabledCheckerArgs} from './config/IsDisabledCheckerArgs.ts';
export {ItemCrudConfig} from './config/ItemCrudConfig.ts';
export {MenuConfig} from './config/MenuConfig.ts';
export {MenuEntryConfig} from './config/MenuEntryConfig.ts';
export {ModalCallbackConfig} from './config/ModalCallbackConfig.ts';
export {ModalConfig} from './config/ModalConfig.ts';
export {OptionConfig} from './config/OptionConfig.ts';
export {OptionsConfig} from './config/OptionsConfig.ts';
export {PaginatorConfig} from './config/PaginatorConfig.ts';
export {ProgressConfig} from './config/ProgressConfig.ts';
export {SaveConfig} from './config/SaveConfig.ts';
export {TableConfig} from './config/TableConfig.ts';
export {TabsConfig} from './config/TabsConfig.ts';
export {TagConfig} from './config/TagConfig.ts';
export {ToastConfig} from './config/ToastConfig.ts';
export {TooltipConfig} from './config/TooltipConfig.ts';

/**
 * Export instances
 */
export {LktItem} from './instances/LktItem.ts';
export {LktStrictItem} from './instances/LktStrictItem.ts';
export {LktColor} from './instances/LktColor.ts';
export {Accordion} from './instances/Accordion.ts';
export {Anchor} from './instances/Anchor.ts';
export {Box} from './instances/Box.ts';
export {Button} from './instances/Button.ts';
export {Column} from './instances/Column.ts';
export {Field} from './instances/Field.ts';
export {FieldValidation} from './instances/FieldValidation.ts';
export {Icon} from './instances/Icon.ts';
export {Image} from './instances/Image.ts';
export {ItemCrud} from './instances/ItemCrud.ts';
export {Menu} from './instances/Menu.ts';
export {MenuEntry} from './instances/MenuEntry.ts';
export {Modal} from './instances/Modal.ts';
export {Option} from './instances/Option.ts';
export {Paginator} from './instances/Paginator.ts';
export {Progress} from './instances/Progress.ts';
export {Table} from './instances/Table.ts';
export {Tabs} from './instances/Tabs.ts';
export {Tag} from './instances/Tag.ts';
export {Toast} from './instances/Toast.ts';
export {Tooltip} from './instances/Tooltip.ts';

/**
 * Export enums
 */
export {AccordionToggleMode} from './enums/AccordionToggleMode.ts';
export {AccordionType} from './enums/AccordionType.ts';
export {AnchorType} from './enums/AnchorType.ts';
export {ButtonType} from './enums/ButtonType.ts';
export {ColumnType} from './enums/ColumnType.ts';
export {FieldAutoValidationTrigger} from './enums/FieldAutoValidationTrigger.ts';
export {FieldType} from './enums/FieldType.ts';
export {FieldValidationType} from './enums/FieldValidationType.ts';
export {IconPosition} from './enums/IconPosition.ts';
export {IconType} from './enums/IconType.ts';
export {ItemCrudButtonNavPosition} from './enums/ItemCrudButtonNavPosition.ts';
export {ItemCrudButtonNavVisibility} from './enums/ItemCrudButtonNavVisibility.ts';
export {ItemCrudMode} from './enums/ItemCrudMode.ts';
export {ItemCrudView} from './enums/ItemCrudView.ts';
export {MenuEntryType} from './enums/MenuEntryType.ts';
export {ModalCallbackAction} from './enums/ModalCallbackAction.ts';
export {ModalType} from './enums/ModalType.ts';
export {MultipleOptionsDisplay} from './enums/MultipleOptionsDisplay.ts';
export {NotificationType} from './enums/NotificationType.ts';
export {PaginatorType} from './enums/PaginatorType.ts';
export {ProgressType} from './enums/ProgressType.ts';
export {ProgressValueFormat} from './enums/ProgressValueFormat.ts';
export {SaveType} from './enums/SaveType.ts';
export {SortDirection} from './enums/SortDirection.ts';
export {TablePermission} from './enums/TablePermission.ts';
export {TableRowType} from './enums/TableRowType.ts';
export {TableType} from './enums/TableType.ts';
export {TagType} from './enums/TagType.ts';
export {ToastPositionX} from './enums/ToastPositionX.ts';
export {ToastType} from './enums/ToastType.ts';
export {ToggleMode} from './enums/ToggleMode.ts';
export {TooltipLocationY} from './enums/TooltipLocationY.ts';
export {TooltipLocationX} from './enums/TooltipLocationX.ts';
export {TooltipPositionEngine} from './enums/TooltipPositionEngine.ts';
export {ValidationCode} from './enums/ValidationCode.ts';
export {ValidationStatus} from './enums/ValidationStatus.ts';

/**
 * Export types
 */
export {BeforeCloseModalData} from './types/BeforeCloseModalData.ts';
export {ScanPropTarget} from './types/ScanPropTarget.ts';
export {EmptyModalKey} from './types/EmptyModalKey.ts';
export {IsDisabledChecker} from './types/IsDisabledChecker.ts';
export {ValidBeforeCloseModal} from './types/ValidBeforeCloseModal.ts';
export {ValidButtonDot} from './types/ValidButtonDot.ts';
export {ValidCustomSlot} from './types/ValidCustomSlot.ts';
export {ValidDragConfig} from './types/ValidDragConfig.ts';
export {ValidFieldValue} from './types/ValidFieldValue.ts';
export {ValidIsDisabledValue} from './types/ValidIsDisabledValue.ts';
export {ValidModalComponent} from './types/ValidModalComponent.ts';
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
export {ValidTextValue} from './types/ValidTextValue.ts';

/**
 * Export value objects
 */
export {SafeString} from './value-objects/SafeString.ts';

/**
 * Export functions
 */
export {getAnchorHref} from "./functions/anchor-functions.ts";
export {extractPropValue, extractI18nValue, prepareResourceData} from "./functions/extract-data-functions.ts";
export {ensureButtonConfig, ensureFieldConfig} from "./functions/ensure-data-functions.ts";
export {lktDebug} from "./functions/debug-functions.ts";
export {addModal, closeModal, openModal} from "./functions/modal-functions.ts";
export {createColumn} from "./functions/table-functions.ts";

/**
 * Export controllers
 */
export {ModalController} from "./controllers/ModalController.ts";
export {RenderModalConfig} from "./controllers/config/RenderModalConfig.ts";
export {ModalRegister} from "./controllers/config/ModalRegister.ts";
export {ModalRegisterType} from "./controllers/enums/ModalRegisterType.ts";

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