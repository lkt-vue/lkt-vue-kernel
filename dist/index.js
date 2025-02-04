// src/instances/LktItem.ts
var skipDataProps = [
  "lktDateProps",
  "lktStrictItem"
];
var LktItem = class {
  lktDateProps = [];
  lktStrictItem = false;
  feed(data = {}) {
    for (const [key, value] of Object.entries(data)) this.assignProp(key, value);
  }
  assignProp(key, value) {
    if (skipDataProps.includes(key)) return;
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
};

// src/enums/ButtonType.ts
var ButtonType = /* @__PURE__ */ ((ButtonType2) => {
  ButtonType2["Button"] = "button";
  ButtonType2["Submit"] = "submit";
  ButtonType2["Reset"] = "reset";
  ButtonType2["Content"] = "content";
  ButtonType2["Switch"] = "switch";
  ButtonType2["HiddenSwitch"] = "hidden-switch";
  return ButtonType2;
})(ButtonType || {});

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

// src/enums/TooltipPositionEngine.ts
var TooltipPositionEngine = /* @__PURE__ */ ((TooltipPositionEngine2) => {
  TooltipPositionEngine2["Fixed"] = "fixed";
  TooltipPositionEngine2["Absolute"] = "absolute";
  return TooltipPositionEngine2;
})(TooltipPositionEngine || {});
export {
  ButtonType,
  FieldType,
  LktItem,
  LktStrictItem,
  Option,
  TooltipLocationX,
  TooltipLocationY,
  TooltipPositionEngine
};
