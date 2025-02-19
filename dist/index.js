// src/settings/LktSettings.ts
var LktSettings = class _LktSettings {
  static debug = false;
  static version = "0.0.1";
  static defaultConfirmButton = {
    text: "Confirm"
  };
  static defaultCancelButton = {
    text: "Cancel"
  };
  static setDefaultConfirmButton(button) {
    _LktSettings.defaultConfirmButton = button;
    return _LktSettings;
  }
  static setDefaultCancelButton(button) {
    _LktSettings.defaultCancelButton = button;
    return _LktSettings;
  }
};

// src/instances/LktItem.ts
var skipDataProps = [
  "lktDateProps",
  "lktStrictItem",
  "lktExcludedProps"
];
var LktItem = class _LktItem {
  static lktAllowUndefinedProps = [];
  static lktExcludedProps = [];
  static lktDateProps = [];
  static lktStrictItem = false;
  static lktDefaultValues = [];
  constructor(data) {
  }
  feed(data = {}, target = this) {
    if (typeof data !== "object") return;
    for (const [key, value] of Object.entries(data)) target.assignProp(key, value);
  }
  assignProp(key, value) {
    if (skipDataProps.includes(key) || _LktItem.lktExcludedProps.includes(key)) return;
    if (_LktItem.lktStrictItem && !this.hasOwnProperty(key)) return;
    if (_LktItem.lktDateProps.includes(key)) {
      this[key] = new Date(value);
      return;
    }
    this[key] = value;
  }
};

// src/instances/LktStrictItem.ts
var LktStrictItem = class extends LktItem {
  lktStrictItem = true;
};

// src/instances/Option.ts
var Option = class extends LktItem {
  value = void 0;
  label = "";
  data = {};
  disabled = false;
  group = "";
  icon = "";
  modal = "";
  constructor(data = {}) {
    super();
    this.feed(data);
  }
};

// src/enums/FieldType.ts
var FieldType = /* @__PURE__ */ ((FieldType2) => {
  FieldType2["Text"] = "text";
  FieldType2["Email"] = "email";
  FieldType2["Tel"] = "tel";
  FieldType2["Password"] = "password";
  FieldType2["Search"] = "search";
  FieldType2["Number"] = "number";
  FieldType2["Color"] = "color";
  FieldType2["Range"] = "range";
  FieldType2["Textarea"] = "textarea";
  FieldType2["Html"] = "html";
  FieldType2["Date"] = "date";
  FieldType2["File"] = "file";
  FieldType2["Image"] = "image";
  FieldType2["Select"] = "select";
  FieldType2["Check"] = "check";
  FieldType2["Switch"] = "switch";
  FieldType2["Calc"] = "calc";
  FieldType2["Card"] = "card";
  FieldType2["Elements"] = "elements";
  return FieldType2;
})(FieldType || {});

// src/instances/Field.ts
import { generateRandomString } from "lkt-string-tools";

// src/enums/MultipleOptionsDisplay.ts
var MultipleOptionsDisplay = /* @__PURE__ */ ((MultipleOptionsDisplay2) => {
  MultipleOptionsDisplay2["List"] = "list";
  MultipleOptionsDisplay2["Inline"] = "inline";
  MultipleOptionsDisplay2["Count"] = "count";
  return MultipleOptionsDisplay2;
})(MultipleOptionsDisplay || {});

// src/enums/FieldAutoValidationTrigger.ts
var FieldAutoValidationTrigger = /* @__PURE__ */ ((FieldAutoValidationTrigger2) => {
  FieldAutoValidationTrigger2["None"] = "";
  FieldAutoValidationTrigger2["Focus"] = "focus";
  FieldAutoValidationTrigger2["Blur"] = "blur";
  FieldAutoValidationTrigger2["Always"] = "always";
  return FieldAutoValidationTrigger2;
})(FieldAutoValidationTrigger || {});

// src/instances/Field.ts
var Field = class extends LktItem {
  modelValue = "";
  type = "text" /* Text */;
  valid = void 0;
  placeholder = "";
  searchPlaceholder = "";
  label = "";
  labelIcon = "";
  labelIconAtEnd = false;
  name = generateRandomString(16);
  autocomplete = false;
  disabled = false;
  readonly = false;
  readMode = false;
  allowReadModeSwitch = false;
  tabindex = void 0;
  mandatory = false;
  showPassword = false;
  canClear = false;
  canUndo = false;
  canI18n = false;
  canStep = true;
  mandatoryMessage = "";
  infoMessage = "";
  errorMessage = "";
  min = void 0;
  max = void 0;
  step = 1;
  enableAutoNumberFix = true;
  emptyValueSlot = "";
  optionSlot = void 0;
  valueSlot = void 0;
  editSlot = void 0;
  slotData = {};
  resource = "";
  resourceData = {};
  validationResource = "";
  validationResourceData = {};
  autoValidation = false;
  autoValidationType = "blur" /* Blur */;
  validationStack = "default";
  minNumbers = void 0;
  maxNumbers = void 0;
  minChars = void 0;
  maxChars = void 0;
  minUpperChars = void 0;
  maxUpperChars = void 0;
  minLowerChars = void 0;
  maxLowerChars = void 0;
  minSpecialChars = void 0;
  maxSpecialChars = void 0;
  checkEqualTo = void 0;
  featuredButton = "";
  infoButtonEllipsis = false;
  fileName = "";
  customButtonText = "";
  customButtonClass = "";
  options = [];
  multiple = false;
  multipleDisplay = "list" /* List */;
  multipleDisplayEdition = "inline" /* Inline */;
  searchable = false;
  autoloadOptionsResource = false;
  optionsDownload = "";
  optionsModal = "";
  optionsModalData = {};
  optionsIcon = "";
  optionsLabelFormatter = void 0;
  optionsResource = "";
  optionsResourceData = {};
  icon = "";
  download = "";
  modal = "";
  modalKey = "";
  modalData = {};
  data = {};
  constructor(data = {}) {
    super();
    this.feed(data);
  }
};

// src/enums/ColumnType.ts
var ColumnType = /* @__PURE__ */ ((ColumnType2) => {
  ColumnType2["None"] = "";
  ColumnType2["Field"] = "field";
  ColumnType2["Button"] = "button";
  ColumnType2["Anchor"] = "anchor";
  ColumnType2["Text"] = "text";
  ColumnType2["Number"] = "number";
  ColumnType2["Check"] = "check";
  ColumnType2["Switch"] = "switch";
  ColumnType2["Select"] = "select";
  ColumnType2["Email"] = "email";
  ColumnType2["Tel"] = "tel";
  ColumnType2["File"] = "file";
  ColumnType2["Link"] = "link";
  ColumnType2["Action"] = "action";
  ColumnType2["Integer"] = "int";
  ColumnType2["Float"] = "float";
  return ColumnType2;
})(ColumnType || {});

// src/value-objects/SafeString.ts
var SafeString = class _SafeString {
  value;
  constructor(input) {
    this.value = input;
  }
  getValue(...args) {
    if (typeof this.value === "function") {
      return this.value(...args);
    } else if (typeof this.value === "object" && typeof this.value === typeof _SafeString) {
      return this.value.getValue(...args);
    } else if (typeof this.value === "string") {
      return this.value;
    }
    return "";
  }
};

// src/enums/AnchorType.ts
var AnchorType = /* @__PURE__ */ ((AnchorType2) => {
  AnchorType2["Href"] = "href";
  AnchorType2["RouterLink"] = "router-link";
  AnchorType2["RouterLinkBack"] = "router-link-back";
  AnchorType2["Mail"] = "mail";
  AnchorType2["Tel"] = "tel";
  AnchorType2["Tab"] = "tab";
  AnchorType2["Download"] = "download";
  AnchorType2["Action"] = "action";
  AnchorType2["Legacy"] = "";
  return AnchorType2;
})(AnchorType || {});

// src/instances/Anchor.ts
var Anchor = class extends LktItem {
  static lktAllowUndefinedProps = [
    "onClick"
  ];
  static lktDefaultValues = [
    "type",
    "to",
    "class",
    "isActive",
    "downloadFileName",
    "disabled",
    "onClick",
    "confirmModal",
    "confirmModalKey",
    "confirmData",
    "imposter",
    "external"
  ];
  type = "router-link" /* RouterLink */;
  to = "";
  class = "";
  isActive = false;
  downloadFileName = "";
  disabled = false;
  onClick = void 0;
  confirmModal = "";
  confirmModalKey = "_";
  confirmData = {};
  imposter = false;
  external = false;
  getHref() {
    let href = "";
    if (typeof this.to === "string") href = this.to;
    if ("mail" /* Mail */ === this.type) return `mailto:${href}`;
    if ("tel" /* Tel */ === this.type) return `tel:${href}`;
    if ([
      "href" /* Href */,
      "mail" /* Mail */,
      "tel" /* Tel */,
      "tab" /* Tab */,
      "download" /* Download */
    ].includes(this.type)) {
      return href;
    }
    if (typeof this.to === "string" && this.to !== "") return this.to;
    return "";
  }
  constructor(data = {}) {
    super();
    this.feed(data);
  }
};

// src/enums/ButtonType.ts
var ButtonType = /* @__PURE__ */ ((ButtonType2) => {
  ButtonType2["Button"] = "button";
  ButtonType2["Submit"] = "submit";
  ButtonType2["Reset"] = "reset";
  ButtonType2["Anchor"] = "anchor";
  ButtonType2["Content"] = "content";
  ButtonType2["Switch"] = "switch";
  ButtonType2["HiddenSwitch"] = "hidden-switch";
  ButtonType2["Split"] = "split";
  ButtonType2["SplitLazy"] = "split-lazy";
  ButtonType2["SplitEver"] = "split-ever";
  ButtonType2["Tooltip"] = "tooltip";
  ButtonType2["TooltipLazy"] = "tooltip-lazy";
  ButtonType2["TooltipEver"] = "tooltip-ever";
  return ButtonType2;
})(ButtonType || {});

// src/instances/Button.ts
import { generateRandomString as generateRandomString2 } from "lkt-string-tools";

// src/enums/TooltipPositionEngine.ts
var TooltipPositionEngine = /* @__PURE__ */ ((TooltipPositionEngine2) => {
  TooltipPositionEngine2["Fixed"] = "fixed";
  TooltipPositionEngine2["Absolute"] = "absolute";
  return TooltipPositionEngine2;
})(TooltipPositionEngine || {});

// src/instances/Button.ts
var Button = class extends LktItem {
  lktAllowUndefinedProps = [
    "clickRef",
    "tabindex",
    "anchor",
    "showTooltipOnHover",
    "hideTooltipOnLeave"
  ];
  static lktDefaultValues = [
    "type",
    "name",
    "palette",
    "class",
    "containerClass",
    "value",
    "disabled",
    "loading",
    "wrapContent",
    "splitIcon",
    "resource",
    "resourceData",
    "modal",
    "modalKey",
    "modalData",
    "confirmModal",
    "confirmModalKey",
    "confirmData",
    "text",
    "icon",
    "iconDot",
    "iconEnd",
    "img",
    "showTooltipOnHoverDelay",
    "tooltipWindowMargin",
    "tooltipReferrerMargin",
    "tooltipLocationY",
    "tooltipLocationX",
    "checked",
    "clickRef",
    "openTooltip",
    "tabindex",
    "anchor",
    "tooltipEngine",
    "showTooltipOnHover",
    "hideTooltipOnLeave",
    "tooltipClass",
    "splitClass",
    "prop",
    "onClick",
    "onConfirm"
  ];
  type = "button" /* Button */;
  name = generateRandomString2(10);
  palette = "";
  class = "";
  containerClass = "";
  value = "";
  disabled = false;
  loading = false;
  wrapContent = false;
  splitIcon = "";
  resource = "";
  resourceData = {};
  modal = "";
  modalKey = "_";
  modalData = {};
  confirmModal = "";
  confirmModalKey = "_";
  confirmData = {};
  text = "";
  icon = "";
  iconDot = false;
  iconEnd = "";
  img = "";
  showTooltipOnHoverDelay = 0;
  tooltipWindowMargin = 0;
  tooltipReferrerMargin = 0;
  tooltipLocationY = "bottom";
  tooltipLocationX = "left-corner";
  checked = false;
  clickRef = void 0;
  openTooltip = false;
  tabindex = void 0;
  anchor = void 0;
  tooltipEngine = "fixed" /* Fixed */;
  showTooltipOnHover = void 0;
  hideTooltipOnLeave = void 0;
  tooltipClass = "";
  splitClass = "";
  prop = {};
  // Event management
  onClick = void 0;
  onConfirm = void 0;
  constructor(data = {}) {
    super();
    this.feed(data);
    this.anchor = new Anchor(data.anchor);
  }
};

// src/instances/Column.ts
var Column = class extends LktItem {
  lktExcludedProps = ["link", "field", "anchor", "button"];
  lktAllowUndefinedProps = [
    "formatter",
    "checkEmpty",
    "colspan",
    "field",
    "anchor",
    "button",
    "link",
    "action"
  ];
  static lktDefaultValues = [
    "type",
    "key",
    "label",
    "sortable",
    "hidden",
    "editable",
    "formatter",
    "checkEmpty",
    "colspan",
    "preferSlot",
    "isForRowKey",
    "extractTitleFromColumn",
    "slotData",
    "field",
    "anchor",
    "button",
    "link",
    "action"
  ];
  type = "" /* None */;
  key = "";
  label = "";
  sortable = true;
  hidden = false;
  editable = false;
  formatter = void 0;
  checkEmpty = void 0;
  colspan = void 0;
  preferSlot = true;
  isForRowKey = false;
  extractTitleFromColumn = "";
  slotData = {};
  field = void 0;
  anchor = void 0;
  button = void 0;
  link = void 0;
  action = void 0;
  constructor(data = {}) {
    super();
    this.feed(data);
    switch (this.type) {
      case "field" /* Field */:
        this.field = new Field(data.field);
        break;
      case "anchor" /* Anchor */:
        this.anchor = new Anchor(data.anchor);
        break;
      case "button" /* Button */:
        this.button = new Button(data.button);
        break;
    }
    this.link = new SafeString(data.link);
  }
  getHref(item) {
    if (typeof this.link !== "object") return "";
    return this.link.getValue(item);
  }
  doAction(item) {
    if (typeof this.action === "function") {
      return this.action(item);
    }
    console.warn("No action defined");
  }
};

// src/enums/TooltipLocationY.ts
var TooltipLocationY = /* @__PURE__ */ ((TooltipLocationY2) => {
  TooltipLocationY2["Top"] = "top";
  TooltipLocationY2["Bottom"] = "bottom";
  TooltipLocationY2["Center"] = "center";
  TooltipLocationY2["ReferrerCenter"] = "referrer-center";
  return TooltipLocationY2;
})(TooltipLocationY || {});

// src/enums/TooltipLocationX.ts
var TooltipLocationX = /* @__PURE__ */ ((TooltipLocationX2) => {
  TooltipLocationX2["Left"] = "left";
  TooltipLocationX2["Right"] = "right";
  TooltipLocationX2["Center"] = "center";
  TooltipLocationX2["LeftCorner"] = "left-corner";
  TooltipLocationX2["RightCorner"] = "right-corner";
  return TooltipLocationX2;
})(TooltipLocationX || {});

// src/instances/Tooltip.ts
var Tooltip = class extends LktItem {
  static lktDefaultValues = [
    "modelValue",
    "alwaysOpen",
    "class",
    "text",
    "icon",
    "iconAtEnd",
    "engine",
    "referrerWidth",
    "referrerMargin",
    "windowMargin",
    "referrer",
    "locationY",
    "locationX"
  ];
  modelValue = false;
  alwaysOpen = false;
  class = "";
  text = "";
  icon = "";
  iconAtEnd = false;
  engine = "fixed" /* Fixed */;
  referrerWidth = false;
  referrerMargin = 0;
  windowMargin = 0;
  referrer = void 0;
  locationY = "bottom" /* Bottom */;
  locationX = "left-corner" /* LeftCorner */;
  constructor(data = {}) {
    super();
    this.feed(data);
  }
};

// src/instances/Modal.ts
var Modal = class extends LktItem {
  static lktDefaultValues = [
    "size",
    "preTitle",
    "preTitleIcon",
    "title",
    "closeIcon",
    "closeConfirm",
    "closeConfirmKey",
    "showClose",
    "disabledClose",
    "disabledVeilClick",
    "hiddenFooter",
    "modalName",
    "modalKey",
    "zIndex",
    "beforeClose",
    "item"
  ];
  size = "";
  preTitle = "";
  preTitleIcon = "";
  title = "";
  closeIcon = "";
  closeConfirm = "";
  closeConfirmKey = "_";
  showClose = true;
  disabledClose = false;
  disabledVeilClick = false;
  hiddenFooter = false;
  modalName = "";
  modalKey = "_";
  zIndex = 500;
  beforeClose = void 0;
  item = {};
  confirmButton = {};
  cancelButton = {};
  constructor(data = {}) {
    super();
    this.feed(data);
  }
};

// src/enums/PaginatorType.ts
var PaginatorType = /* @__PURE__ */ ((PaginatorType2) => {
  PaginatorType2["Pages"] = "pages";
  PaginatorType2["PrevNext"] = "prev-next";
  PaginatorType2["PagesPrevNext"] = "pages-prev-next";
  PaginatorType2["PagesPrevNextFirstLast"] = "pages-prev-next-first-last";
  PaginatorType2["LoadMore"] = "load-more";
  PaginatorType2["Infinite"] = "infinite";
  return PaginatorType2;
})(PaginatorType || {});

// src/instances/Paginator.ts
var Paginator = class extends LktItem {
  static lktAllowUndefinedProps = [];
  static lktDefaultValues = [
    "type",
    "modelValue",
    "class",
    "resource",
    "readOnly",
    "loading",
    "filters"
  ];
  type = "pages-prev-next" /* PagesPrevNext */;
  modelValue = 1;
  class = "";
  resource = "";
  readOnly = false;
  loading = false;
  filters = {};
  constructor(data = {}) {
    super();
    this.feed(data);
  }
};

// src/enums/TableType.ts
var TableType = /* @__PURE__ */ ((TableType2) => {
  TableType2["Table"] = "table";
  TableType2["Item"] = "item";
  TableType2["Ul"] = "ul";
  TableType2["Ol"] = "ol";
  return TableType2;
})(TableType || {});

// src/enums/TableRowType.ts
var TableRowType = /* @__PURE__ */ ((TableRowType2) => {
  TableRowType2[TableRowType2["Auto"] = 0] = "Auto";
  TableRowType2[TableRowType2["PreferItem"] = 1] = "PreferItem";
  TableRowType2[TableRowType2["PreferCustomItem"] = 2] = "PreferCustomItem";
  TableRowType2[TableRowType2["PreferColumns"] = 3] = "PreferColumns";
  return TableRowType2;
})(TableRowType || {});

// src/instances/Table.ts
var Table = class extends LktItem {
  static lktDefaultValues = [
    "modelValue",
    "type",
    "columns",
    "resource",
    "noResultsText",
    "filters",
    "hideEmptyColumns",
    "itemDisplayChecker",
    "loading",
    "page",
    "perms",
    "editMode",
    "dataStateConfig",
    "sortable",
    "sorter",
    "initialSorting",
    "drag",
    "paginator",
    "header",
    "title",
    "titleTag",
    "titleIcon",
    "headerClass",
    "saveButton",
    "createButton",
    "dropButton",
    "wrapContentTag",
    "wrapContentClass",
    "itemsContainerClass",
    "hiddenSave",
    "createText",
    "createIcon",
    "createRoute",
    "dropText",
    "dropIcon",
    "editText",
    "editIcon",
    "editLink",
    "editModeText",
    "switchEditionEnabled",
    "createDisabled",
    "dropConfirm",
    "dropResource",
    "addNavigation",
    "createEnabledValidator",
    "newValueGenerator",
    "requiredItemsForTopCreate",
    "requiredItemsForBottomCreate",
    "slotItemVar"
  ];
  // Data
  modelValue = [];
  type = "table" /* Table */;
  columns = [];
  resource = "";
  noResultsText = "";
  filters = [];
  // Data visualization
  hideEmptyColumns = false;
  itemDisplayChecker = void 0;
  rowDisplayType = 0 /* Auto */;
  // State
  loading = false;
  page = 1;
  perms = [];
  editMode = false;
  dataStateConfig = {};
  // Sort
  sortable = false;
  sorter = void 0;
  initialSorting = false;
  // Drag
  drag = void 0;
  // Pagination
  paginator = void 0;
  // New proposed prop: header
  header;
  // Replaces:
  title = "";
  titleTag = "h2";
  titleIcon = "";
  headerClass = "";
  // Buttons
  saveButton = {};
  createButton = {};
  dropButton = {};
  hiddenSave = false;
  wrapContentTag = "div";
  wrapContentClass = "";
  itemsContainerClass = "";
  createText = "";
  createIcon = "";
  createRoute = "";
  dropText = "";
  dropIcon = "";
  editText = "";
  editIcon = "";
  editLink = "";
  editModeText = "";
  switchEditionEnabled = false;
  createDisabled = false;
  dropConfirm = "";
  dropResource = "";
  addNavigation = false;
  createEnabledValidator = void 0;
  newValueGenerator = void 0;
  requiredItemsForTopCreate = 0;
  requiredItemsForBottomCreate = 0;
  slotItemVar = "item";
  constructor(data = {}) {
    super();
    this.feed(data);
  }
};

// src/enums/ModalCallbackAction.ts
var ModalCallbackAction = /* @__PURE__ */ ((ModalCallbackAction2) => {
  ModalCallbackAction2["Refresh"] = "refresh";
  ModalCallbackAction2["Close"] = "close";
  ModalCallbackAction2["ReOpen"] = "reOpen";
  ModalCallbackAction2["Exec"] = "exec";
  ModalCallbackAction2["Open"] = "open";
  return ModalCallbackAction2;
})(ModalCallbackAction || {});

// src/enums/ModalType.ts
var ModalType = /* @__PURE__ */ ((ModalType2) => {
  ModalType2["Modal"] = "modal";
  ModalType2["Confirm"] = "confirm";
  return ModalType2;
})(ModalType || {});

// src/enums/SortDirection.ts
var SortDirection = /* @__PURE__ */ ((SortDirection2) => {
  SortDirection2["Asc"] = "asc";
  SortDirection2["Desc"] = "desc";
  return SortDirection2;
})(SortDirection || {});

// src/enums/TablePermission.ts
var TablePermission = /* @__PURE__ */ ((TablePermission2) => {
  TablePermission2["Create"] = "create";
  TablePermission2["Update"] = "update";
  TablePermission2["Edit"] = "edit";
  TablePermission2["Drop"] = "drop";
  TablePermission2["Sort"] = "sort";
  TablePermission2["InlineEdit"] = "inline-edit";
  TablePermission2["InlineCreate"] = "inline-create";
  TablePermission2["ModalCreate"] = "modal-create";
  TablePermission2["InlineCreateEver"] = "inline-create-ever";
  return TablePermission2;
})(TablePermission || {});

// src/enums/ToggleMode.ts
var ToggleMode = /* @__PURE__ */ ((ToggleMode2) => {
  ToggleMode2["Lazy"] = "lazy";
  ToggleMode2["Ever"] = "ever";
  return ToggleMode2;
})(ToggleMode || {});

// src/functions/extract-data-functions.ts
import { __ } from "lkt-i18n";
var extractPropValue = (needle, haystack) => {
  if (typeof needle === "string" && needle.startsWith("prop:")) {
    return haystack[needle.substring(5)];
  }
  return needle;
};
var extractI18nValue = (needle) => {
  let txt = String(needle);
  if (txt.startsWith("__:")) {
    return __(txt.substring(3));
  }
  return txt;
};

// src/index.ts
function getDefaultValues(cls) {
  const instance = new cls();
  const result = {};
  if (!Array.isArray(cls.lktDefaultValues)) {
    throw new Error("lktDefaultValues must be a keys array.");
  }
  for (const key of cls.lktDefaultValues) {
    if (key in instance) {
      result[key] = instance[key];
    }
  }
  return result;
}
export {
  Anchor,
  AnchorType,
  Button,
  ButtonType,
  Column,
  ColumnType,
  Field,
  FieldAutoValidationTrigger,
  FieldType,
  LktItem,
  LktSettings,
  LktStrictItem,
  Modal,
  ModalCallbackAction,
  ModalType,
  MultipleOptionsDisplay,
  Option,
  Paginator,
  PaginatorType,
  SafeString,
  SortDirection,
  Table,
  TablePermission,
  TableRowType,
  TableType,
  ToggleMode,
  Tooltip,
  TooltipLocationX,
  TooltipLocationY,
  TooltipPositionEngine,
  extractI18nValue,
  extractPropValue,
  getDefaultValues
};
