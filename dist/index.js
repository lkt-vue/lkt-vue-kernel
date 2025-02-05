// src/instances/LktItem.ts
var skipDataProps = [
  "lktDateProps",
  "lktStrictItem",
  "lktExcludedProps"
];
var LktItem = class {
  lktAllowUndefinedProps = [];
  lktExcludedProps = [];
  lktDateProps = [];
  lktStrictItem = false;
  constructor(data) {
  }
  feed(data = {}, target = this) {
    if (typeof data !== "object") return;
    for (const [key, value] of Object.entries(data)) target.assignProp(key, value);
  }
  assignProp(key, value) {
    if (skipDataProps.includes(key) || this.lktExcludedProps.includes(key)) return;
    if (this.lktStrictItem && !this.hasOwnProperty(key)) return;
    if (this.lktDateProps.includes(key)) {
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
  lktAllowUndefinedProps = [
    "onClick"
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
  constructor(data = {}) {
    super();
    this.feed(data);
  }
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
  type = "button" /* Button */;
  name = generateRandomString2(10);
  palette = "";
  onClickTo = "";
  onClickToExternal = false;
  class = "";
  containerClass = "";
  value = "";
  disabled = false;
  loading = false;
  wrapContent = false;
  split = false;
  splitIcon = "";
  isAnchor = false;
  resource = "";
  resourceData = () => ({});
  modal = "";
  modalKey = "_";
  modalData = () => ({});
  confirmModal = "";
  confirmModalKey = "_";
  confirmData = () => ({});
  text = "";
  icon = "";
  iconDot = false;
  iconEnd = "";
  img = "";
  newTab = false;
  download = false;
  downloadFileName = "";
  tooltip = false;
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
  constructor(data) {
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

// src/enums/TableType.ts
var TableType = /* @__PURE__ */ ((TableType2) => {
  TableType2["Table"] = "table";
  TableType2["Item"] = "item";
  TableType2["Ul"] = "ul";
  TableType2["Ol"] = "ol";
  return TableType2;
})(TableType || {});

// src/enums/ToggleMode.ts
var ToggleMode = /* @__PURE__ */ ((ToggleMode2) => {
  ToggleMode2["Lazy"] = "lazy";
  ToggleMode2["Ever"] = "ever";
  return ToggleMode2;
})(ToggleMode || {});

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

// src/index.ts
function getDefaultValues(cls) {
  const instance = new cls();
  return instance;
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
  LktStrictItem,
  ModalType,
  MultipleOptionsDisplay,
  Option,
  SafeString,
  SortDirection,
  TableType,
  ToggleMode,
  TooltipLocationX,
  TooltipLocationY,
  TooltipPositionEngine,
  getDefaultValues
};
