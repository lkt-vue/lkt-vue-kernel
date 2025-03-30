var $=(d=>(d.Button="button",d.Submit="submit",d.Reset="reset",d.Anchor="anchor",d.Content="content",d.Switch="switch",d.HiddenSwitch="hidden-switch",d.Split="split",d.SplitLazy="split-lazy",d.SplitEver="split-ever",d.Tooltip="tooltip",d.TooltipLazy="tooltip-lazy",d.TooltipEver="tooltip-ever",d.FileUpload="file-upload",d.ImageUpload="image-upload",d))($||{});var u=(e,t)=>typeof e>"u"||!e?t:{...t,...e},b=(e,t)=>typeof e>"u"?t:{...t,...e};var x=class e{static debugEnabled=!1;static debugMode(t=!0){return e.debugEnabled=t,e}static defaultCreateErrorText="Creation failed";static defaultCreateErrorDetails="An error occurred while creating the item. Please try again.";static defaultCreateErrorIcon="";static setDefaultCreateError(t){e.defaultCreateErrorText=t.text??e.defaultCreateErrorText,e.defaultCreateErrorDetails=t.details??e.defaultCreateErrorDetails,e.defaultCreateErrorIcon=t.icon??e.defaultCreateErrorIcon}static defaultUpdateErrorText="Update failed";static defaultUpdateErrorDetails="An error occurred while updating the item. Please try again.";static defaultUpdateErrorIcon="";static setDefaultUpdateError(t){e.defaultUpdateErrorText=t.text??e.defaultUpdateErrorText,e.defaultUpdateErrorDetails=t.details??e.defaultUpdateErrorDetails,e.defaultUpdateErrorIcon=t.icon??e.defaultUpdateErrorIcon}static defaultDropErrorText="Drop failed";static defaultDropErrorDetails="An error occurred while removing the item. Please try again.";static defaultDropErrorIcon="";static setDefaultDropError(t){e.defaultDropErrorText=t.text??e.defaultDropErrorText,e.defaultDropErrorDetails=t.details??e.defaultDropErrorDetails,e.defaultDropErrorIcon=t.icon??e.defaultDropErrorIcon}static defaultCreateSuccessText="Item created";static defaultCreateSuccessDetails="";static defaultCreateSuccessIcon="";static setDefaultCreateSuccess(t){e.defaultCreateSuccessText=t.text??e.defaultCreateSuccessText,e.defaultCreateSuccessDetails=t.details??e.defaultCreateSuccessDetails,e.defaultCreateSuccessIcon=t.icon??e.defaultCreateSuccessIcon}static defaultUpdateSuccessText="Item updated";static defaultUpdateSuccessDetails="";static defaultUpdateSuccessIcon="";static setDefaultUpdateSuccess(t){e.defaultUpdateSuccessText=t.text??e.defaultUpdateSuccessText,e.defaultUpdateSuccessDetails=t.details??e.defaultUpdateSuccessDetails,e.defaultUpdateSuccessIcon=t.icon??e.defaultUpdateSuccessIcon}static defaultDropSuccessText="Item removed";static defaultDropSuccessDetails="";static defaultDropSuccessIcon="";static setDefaultDropSuccess(t){e.defaultDropSuccessText=t.text??e.defaultDropSuccessText,e.defaultDropSuccessDetails=t.details??e.defaultDropSuccessDetails,e.defaultDropSuccessIcon=t.icon??e.defaultDropSuccessIcon}static defaultUploadSuccessText="Upload success";static defaultUploadSuccessDetails="";static defaultUploadSuccessIcon="";static setDefaultUploadSuccess(t){e.defaultUploadSuccessText=t.text??e.defaultUploadSuccessText,e.defaultUploadSuccessDetails=t.details??e.defaultUploadSuccessDetails,e.defaultUploadSuccessIcon=t.icon??e.defaultUploadSuccessIcon}static defaultUploadErrorText="Upload error";static defaultUploadErrorDetails="";static defaultUploadErrorIcon="";static setDefaultUploadError(t){e.defaultUploadErrorText=t.text??e.defaultUploadErrorText,e.defaultUploadErrorDetails=t.details??e.defaultUploadErrorDetails,e.defaultUploadErrorIcon=t.icon??e.defaultUploadErrorIcon}static defaultSaveButton={text:"Save",icon:"lkt-icn-save"};static setDefaultSaveButton(t,o=!0){return o?e.defaultSaveButton=t:e.defaultSaveButton=u(t,e.defaultSaveButton),e}static defaultConfirmButton={text:"Confirm"};static setDefaultConfirmButton(t,o=!0){return o?e.defaultConfirmButton=t:e.defaultConfirmButton=u(t,e.defaultConfirmButton),e}static defaultCancelButton={text:"Cancel"};static setDefaultCancelButton(t,o=!0){return o?e.defaultCancelButton=t:e.defaultCancelButton=u(t,e.defaultCancelButton),e}static defaultCreateButton={text:"Create",icon:"lkt-icn-save"};static setDefaultCreateButton(t,o=!0){return o?e.defaultCreateButton=t:e.defaultCreateButton=u(t,e.defaultCreateButton),e}static defaultUpdateButton={text:"Update",icon:"lkt-icn-save"};static setDefaultUpdateButton(t,o=!0){return o?e.defaultUpdateButton=t:e.defaultUpdateButton=u(t,e.defaultUpdateButton),e}static defaultDropButton={text:"Drop"};static setDefaultDropButton(t,o=!0){return o?e.defaultDropButton=t:e.defaultDropButton=u(t,e.defaultDropButton),e}static defaultEditModeButton={text:"Edit mode",type:"switch"};static setDefaultEditModeButton(t,o=!0){return o?e.defaultEditModeButton=t:e.defaultEditModeButton=u(t,e.defaultEditModeButton),e}static defaultGroupButton={text:"Actions",type:"split",icon:"lkt-icn-settings-cogs"};static setDefaultGroupButton(t,o=!0){return o?e.defaultGroupButton=t:e.defaultGroupButton=u(t,e.defaultGroupButton),e}static defaultToggleButton={text:"Toggle",textOn:"Close",textOff:"Show more",type:"hidden-switch"};static setDefaultToggleButton(t,o=!0){return o?e.defaultToggleButton=t:e.defaultToggleButton=u(t,e.defaultToggleButton),e}static defaultLoadMoreButton={text:"Load more",type:"hidden-switch"};static setDefaultLoadMoreButton(t,o=!0){return o?e.defaultLoadMoreButton=t:e.defaultLoadMoreButton=u(t,e.defaultLoadMoreButton),e}static defaultCloseModalIcon="lkt-icn-cancel";static setDefaultCloseModalIcon(t){return e.defaultCloseModalIcon=t,e}static defaultCloseToastIcon="lkt-icn-cancel";static setDefaultCloseToastIcon(t){return e.defaultCloseToastIcon=t,e}static defaultTableSortAscIcon="lkt-icn-arrow-bottom";static defaultTableSortDescIcon="lkt-icn-arrow-top";static setDefaultTableSortAscIcon(t){return e.defaultTableSortAscIcon=t,e}static setDefaultTableSortDescIcon(t){return e.defaultTableSortDescIcon=t,e}static defaultPaginatorFirstButton={text:"",icon:"lkt-icn-angle-double-left"};static defaultPaginatorPrevButton={text:"",icon:"lkt-icn-angle-left"};static defaultPaginatorNextButton={text:"",iconEnd:"lkt-icn-angle-right"};static defaultPaginatorLastButton={text:"",iconEnd:"lkt-icn-angle-double-right"};static setDefaultPaginatorFirstButton(t,o=!0){return o?e.defaultPaginatorFirstButton=t:e.defaultPaginatorFirstButton=u(t,e.defaultPaginatorFirstButton),e}static setDefaultPaginatorPrevButton(t,o=!0){return o?e.defaultPaginatorPrevButton=t:e.defaultPaginatorPrevButton=u(t,e.defaultPaginatorPrevButton),e}static setDefaultPaginatorNextButton(t,o=!0){return o?e.defaultPaginatorNextButton=t:e.defaultPaginatorNextButton=u(t,e.defaultPaginatorNextButton),e}static setDefaultPaginatorLastButton(t,o=!0){return o?e.defaultPaginatorLastButton=t:e.defaultPaginatorLastButton=u(t,e.defaultPaginatorLastButton),e}static defaultFieldElementCustomClassField={label:"Appearance",multiple:!1};static defaultFieldLktAccordionElementCustomClassField={};static defaultFieldLktBoxElementCustomClassField={};static defaultFieldLktIconElementCustomClassField={};static defaultFieldLktImageElementCustomClassField={};static setDefaultFieldLktAccordionElementCustomClassField(t,o=!0){return o?e.defaultFieldLktAccordionElementCustomClassField=t:e.defaultFieldLktAccordionElementCustomClassField=b(t,e.defaultFieldLktAccordionElementCustomClassField),e}static setDefaultFieldLktBoxElementCustomClassField(t,o=!0){return o?e.defaultFieldLktBoxElementCustomClassField=t:e.defaultFieldLktBoxElementCustomClassField=b(t,e.defaultFieldLktBoxElementCustomClassField),e}static setDefaultFieldLktIconElementCustomClassField(t,o=!0){return o?e.defaultFieldLktIconElementCustomClassField=t:e.defaultFieldLktIconElementCustomClassField=b(t,e.defaultFieldLktIconElementCustomClassField),e}static setDefaultFieldLktImageElementCustomClassField(t,o=!0){return o?e.defaultFieldLktImageElementCustomClassField=t:e.defaultFieldLktImageElementCustomClassField=b(t,e.defaultFieldLktImageElementCustomClassField),e}static i18nOptionsFormatter={};static setI18nOptionsFormatter(t,o){return e.i18nOptionsFormatter[t]=o,e}};var X=(s=>(s.Text="text",s.Email="email",s.Tel="tel",s.Password="password",s.Search="search",s.Number="number",s.Color="color",s.Range="range",s.Textarea="textarea",s.Html="html",s.Date="date",s.File="file",s.Image="image",s.Select="select",s.Check="check",s.Switch="switch",s.Calc="calc",s.Card="card",s.Elements="elements",s))(X||{});var Ft=["text","search","select"],At=["switch","check"],Pt=["switch","check"],Ut=["text","search"],Nt=["switch","check"],jt=["select","color","card"],Ht=["text","email","password"];var Rt=["lktDateProps","lktStrictItem","lktExcludedProps"],a=class e{static lktAllowUndefinedProps=[];static lktExcludedProps=[];static lktDateProps=[];static lktStrictItem=!1;static lktDefaultValues=[];constructor(t){}feed(t={},o=this){if(typeof t=="object")for(let[r,i]of Object.entries(t))o.assignProp(r,i)}assignProp(t,o){if(!(Rt.includes(t)||e.lktExcludedProps.includes(t))&&!(e.lktStrictItem&&!this.hasOwnProperty(t))){if(e.lktDateProps.includes(t)){this[t]=new Date(o);return}this[t]=o}}};var h=class extends a{lktStrictItem=!0};var M=class e extends h{r=0;g=0;b=0;a=255;constructor(t){super(),this.feed(t)}static fromHexColor(t){let o=parseInt(+("0x"+t.substring(1,3)),10),r=parseInt(+("0x"+t.substring(3,5)),10),i=parseInt(+("0x"+t.substring(5,7)),10),n=255;return t.length===9&&(n=parseInt(+("0x"+t.substring(5,7)),10)),new e({r:o,g:r,b:i,a:n})}toString(){let t=parseInt(this.r).toString(16).padStart(2,"0").toUpperCase(),o=parseInt(this.g).toString(16).padStart(2,"0").toUpperCase(),r=parseInt(this.b).toString(16).padStart(2,"0").toUpperCase(),i="#"+t+o+r;if(this.a==255)return i;let n=parseInt(this.a).toString(16).padStart(2,"0").toUpperCase();return i+n}getContrastFontColor(){return(.299*this.r+.587*this.g+.114*this.b)/this.a>.5?"#000000":"#ffffff"}};var Q=(i=>(i.Auto="auto",i.Always="always",i.Lazy="lazy",i.Ever="ever",i))(Q||{});var Y=(r=>(r.Transform="transform",r.Height="height",r.Display="display",r))(Y||{});var B=class extends a{static lktAllowUndefinedProps=["onClick"];static lktDefaultValues=["modelValue","type","toggleMode","actionButton","toggleButton","toggleOnClickIntro","toggleTimeout","title","icon","class","contentClass","iconRotation","minHeight","iconAtEnd","toggleIconAtEnd"];modelValue=!1;type="auto";toggleMode="height";actionButton={};toggleButton={};toggleOnClickIntro=!1;toggleTimeout=0;title="";icon="";class="";contentClass="";iconRotation="90";minHeight=void 0;iconAtEnd=!1;toggleIconAtEnd=!1;constructor(t={}){super(),this.feed(t)}};var J=(g=>(g.Href="href",g.RouterLink="router-link",g.RouterLinkBack="router-link-back",g.Mail="mail",g.Tel="tel",g.Tab="tab",g.Download="download",g.Action="action",g.Legacy="",g))(J||{});var I=e=>{let t="";if(typeof e.to=="string"&&(t=e.to),typeof e.type<"u")switch(e.type){case"mail":return`mailto:${t}`;case"tel":return`tel:${t}`;case"href":case"tab":case"download":return t}return t};var V=class extends a{static lktAllowUndefinedProps=[];static lktDefaultValues=["type","to","class","isActive","downloadFileName","disabled","onClick","confirmModal","confirmModalKey","confirmData","imposter","external","events","text"];type="router-link";to="";class="";isActive=!1;downloadFileName="";disabled=!1;onClick=void 0;confirmModal="";confirmModalKey="_";confirmData={};imposter=!1;external=!1;text;events={};getHref(){return I(this)}constructor(t={}){super(),this.feed(t)}};var y=class extends a{static lktDefaultValues=["title","iconAtEnd","style","class","icon"];title="";iconAtEnd=!1;style="";class="";icon="";constructor(t={}){super(),this.feed(t)}};import{generateRandomString as Kt}from"lkt-string-tools";var E=class extends a{lktAllowUndefinedProps=["clickRef","tabindex","anchor","showTooltipOnHover","hideTooltipOnLeave"];static lktDefaultValues=["type","name","class","containerClass","value","disabled","loading","wrapContent","splitIcon","resource","resourceData","modal","modalKey","modalData","confirmModal","confirmModalKey","confirmData","modalCallbacks","text","textOn","textOff","icon","iconOn","iconOff","iconEndOn","iconEndOff","dot","iconEnd","img","showTooltipOnHoverDelay","tooltip","checked","clickRef","openTooltip","tabindex","anchor","showTooltipOnHover","hideTooltipOnLeave","splitClass","prop","events"];type="button";name=Kt(10);class="";containerClass="";value="";disabled=!1;loading=!1;wrapContent=!1;splitIcon="lkt-icn-angle-bottom";resource="";resourceData={};modal="";modalKey="_";modalData={};confirmModal="";confirmModalKey="_";confirmData={};modalCallbacks=[];text="";textOn=void 0;textOff=void 0;iconOn=void 0;iconOff=void 0;iconEndOn=void 0;iconEndOff=void 0;icon="";dot=!1;iconEnd="";img="";showTooltipOnHoverDelay=0;checked=!1;clickRef=void 0;openTooltip=!1;tabindex=void 0;anchor=void 0;showTooltipOnHover=void 0;hideTooltipOnLeave=void 0;splitClass="";tooltip={};prop={};events={};constructor(t={}){super(),this.feed(t)}isDisabled(){return typeof this.disabled=="function"?this.disabled():this.disabled}};var Z=(i=>(i.None="",i.Field="field",i.Button="button",i.Anchor="anchor",i))(Z||{});var k=class extends a{lktExcludedProps=["field","anchor","button"];lktAllowUndefinedProps=["formatter","checkEmpty","colspan","field","anchor","button"];static lktDefaultValues=["type","key","label","sortable","hidden","editable","formatter","checkEmpty","colspan","preferSlot","isForRowKey","extractTitleFromColumn","slotData","field","anchor","button"];type="";key="";label="";sortable=!0;hidden=!1;editable=!1;formatter=void 0;checkEmpty=void 0;colspan=void 0;preferSlot=!0;isForRowKey=!1;extractTitleFromColumn="";slotData={};field=void 0;anchor=void 0;button=void 0;constructor(t={}){super(),this.feed(t)}};var _=(l=>(l.A0="a0",l.A1="a1",l.A2="a2",l.A3="a3",l.A4="a4",l.A5="a5",l.A6="a6",l.A7="a7",l.A8="a8",l.A9="a9",l))(_||{});var D=class extends a{static lktDefaultValues=["id","size","skipPageNumber","frontPage","title","img","icon"];id="";size="a4";skipPageNumber=!1;frontPage=!1;title="";img="";icon="";constructor(t={}){super(),this.feed(t)}};import{generateRandomString as Wt}from"lkt-string-tools";var tt=(r=>(r.List="list",r.Inline="inline",r.Count="count",r))(tt||{});var S=class extends a{static lktDefaultValues=["modelValue","type","valid","placeholder","searchPlaceholder","label","labelIcon","labelIconAtEnd","name","autocomplete","disabled","readonly","hidden","readMode","allowReadModeSwitch","tabindex","mandatory","showPassword","canClear","canUndo","canI18n","canStep","canTag","mandatoryMessage","infoMessage","errorMessage","min","max","step","enableAutoNumberFix","emptyValueSlot","optionSlot","valueSlot","editSlot","slotData","featuredButton","infoButtonEllipsis","fileName","customButtonText","customButtonClass","options","multiple","multipleDisplay","multipleDisplayEdition","searchable","icon","download","modal","modalKey","modalData","validation","prop","optionValueType","optionsConfig","fileUploadHttp","tooltipConfig","readModeConfig","configOn","configOff"];modelValue="";type="text";valid=void 0;placeholder="";searchPlaceholder="";label="";labelIcon="";labelIconAtEnd=!1;name=Wt(16);autocomplete=!1;disabled=!1;readonly=!1;hidden=!1;tabindex=void 0;mandatory=!1;showPassword=!1;canClear=!1;canUndo=!1;canI18n=!1;canStep=!0;canTag=!0;mandatoryMessage="";infoMessage="";errorMessage="";min=void 0;max=void 0;step=1;enableAutoNumberFix=!0;emptyValueSlot="";optionSlot=void 0;valueSlot=void 0;editSlot=void 0;slotData={};featuredButton="";infoButtonEllipsis=!1;fileName="";customButtonText="";customButtonClass="";options=[];multiple=!1;multipleDisplay="list";multipleDisplayEdition="inline";searchable=!1;icon="";download="";modal="";modalKey="";modalData={};validation={};configOn={};configOff={};readMode;allowReadModeSwitch=!1;readModeConfig;prop={};optionValueType="value";optionsConfig={};fileUploadHttp={};fileUploadButton={};tooltipConfig={};constructor(t={}){super(),this.feed(t)}};var et=(f=>(f.MinStringLength="min-str",f.MinNumber="min-num",f.MaxStringLength="max-str",f.MaxNumber="max-num",f.Email="email",f.Empty="empty",f.EqualTo="equal-to",f.MinNumbers="min-numbers",f.MaxNumbers="max-numbers",f.MinChars="min-chars",f.MaxChars="max-chars",f.MinUpperChars="min-upper-chars",f.MaxUpperChars="max-upper-chars",f.MinLowerChars="min-lower-chars",f.MaxLowerChars="max-lower-chars",f.MinSpecialChars="min-special-chars",f.MaxSpecialChars="max-special-chars",f))(et||{});var ot=(r=>(r.Ok="ok",r.Ko="ko",r.Info="info",r))(ot||{});var v=class e{code=void 0;status="info";min=0;max=0;equalToValue=void 0;constructor(t,o){this.code=t,this.status=o}setMin(t){return this.min=t,this}setMax(t){return this.max=t,this}setEqualToValue(t){return this.equalToValue=t,this}static createEmpty(t="ko"){return new e("empty",t)}static createEmail(t="ko"){return new e("email",t)}static createMinStr(t,o="ko"){return new e("min-str",o).setMin(t)}static createMaxStr(t,o="ko"){return new e("max-str",o).setMax(t)}static createMinNum(t,o="ko"){return new e("min-num",o).setMin(t)}static createMaxNum(t,o="ko"){return new e("max-num",o).setMax(t)}static createNumBetween(t,o,r="ko"){return new e("max-num",r).setMin(t).setMax(o)}static createMinNumbers(t,o="ko"){return new e("min-numbers",o).setMin(t)}static createMaxNumbers(t,o="ko"){return new e("max-numbers",o).setMax(t)}static createMinUpperChars(t,o="ko"){return new e("min-upper-chars",o).setMin(t)}static createMaxUpperChars(t,o="ko"){return new e("max-upper-chars",o).setMax(t)}static createMinLowerChars(t,o="ko"){return new e("min-lower-chars",o).setMin(t)}static createMaxLowerChars(t,o="ko"){return new e("max-lower-chars",o).setMax(t)}static createMinSpecialChars(t,o="ko"){return new e("min-special-chars",o).setMin(t)}static createMaxSpecialChars(t,o="ko"){return new e("max-special-chars",o).setMax(t)}static createMinChars(t,o="ko"){return new e("min-chars",o).setMin(t)}static createMaxChars(t,o="ko"){return new e("max-chars",o).setMax(t)}static createEqualTo(t,o="ko"){return new e("equal-to",o).setEqualToValue(t)}};var rt=(m=>(m.H1="h1",m.H2="h2",m.H3="h3",m.H4="h4",m.H5="h5",m.H6="h6",m))(rt||{});var T=class extends a{static lktAllowUndefinedProps=["onClick"];static lktDefaultValues=["tag","class","text","icon"];tag="h2";class="";text="";icon="";constructor(t={}){super(),this.feed(t)}};var at=(o=>(o.NotDefined="",o.Button="button",o))(at||{});var it=(o=>(o.Start="start",o.End="end",o))(it||{});var O=class extends a{static lktDefaultValues=["icon","text","class","type","position","events"];icon="";text="";class="";type="";position="start";events={};constructor(t={}){super(),this.feed(t)}};var w=class extends a{static lktAllowUndefinedProps=["onClick"];static lktDefaultValues=["src","alt","text","class","imageStyle"];src="";alt="";text="";class="";imageStyle="";constructor(t={}){super(),this.feed(t)}};var nt=(r=>(r.Create="create",r.Update="update",r.Read="read",r))(nt||{});var lt=(o=>(o.Inline="inline",o.Modal="modal",o))(lt||{});var st=(o=>(o.Top="top",o.Bottom="bottom",o))(st||{});var ft=(r=>(r.Changed="changed",r.Always="always",r.Never="never",r))(ft||{});var ut=(r=>(r.Manual="manual",r.Auto="auto",r.Delay="delay",r))(ut||{});var dt=(o=>(o.Toast="toast",o.Inline="inline",o))(dt||{});var F=class extends a{static lktDefaultValues=["modelValue","editing","perms","mode","view","editModeButton","dropButton","createButton","updateButton","groupButton","modalConfig","saveConfig","title","readResource","readData","beforeEmitUpdate","dataStateConfig","buttonNavPosition","buttonNavVisibility","notificationType"];modelValue={};editing=!1;perms=[];mode="read";view="inline";editModeButton={};dropButton={};createButton={};updateButton={};groupButton=!1;modalConfig={};saveConfig={type:"manual"};title="";readResource="";readData={};beforeEmitUpdate=void 0;dataStateConfig={};buttonNavPosition="top";buttonNavVisibility="always";notificationType="toast";constructor(t={}){super(),this.feed(t)}};var A=class extends a{static lktDefaultValues=["modelValue","http"];modelValue=[];http={};constructor(t={}){super(),this.feed(t)}};var mt=(r=>(r.Anchor="anchor",r.Button="button",r.Entry="entry",r))(mt||{});var P=class extends a{static lktDefaultValues=["key","type","icon","isActiveChecker","isOpened","isActive","parent","children","events","onClick"];key="";type="anchor";class="";icon="";anchor={};button={};isActiveChecker=void 0;isOpened=!1;isActive=!1;parent=void 0;children;events={};onClick=void 0;constructor(t={}){super(),this.feed(t)}doClose(){this.isOpened=!1}};var ct=(o=>(o.Modal="modal",o.Confirm="confirm",o))(ct||{});var U=class extends a{static lktDefaultValues=["size","preTitle","preTitleIcon","title","closeIcon","closeConfirm","closeConfirmKey","showClose","disabledClose","disabledVeilClick","hiddenFooter","modalName","modalKey","zIndex","beforeClose","item","type"];size="";preTitle="";preTitleIcon="";title="";closeIcon=x.defaultCloseModalIcon;closeConfirm="";closeConfirmKey="_";showClose=!0;disabledClose=!1;disabledVeilClick=!1;hiddenFooter=!1;modalName="";modalKey="_";zIndex=500;beforeClose=void 0;item={};confirmButton={};cancelButton={};type="modal";constructor(t={}){super(),this.feed(t)}};var N=class extends a{value=void 0;label="";data={};disabled=!1;group="";icon="";modal="";tags=[];constructor(t={}){super(),this.feed(t)}};var pt=(m=>(m.Pages="pages",m.PrevNext="prev-next",m.PagesPrevNext="pages-prev-next",m.PagesPrevNextFirstLast="pages-prev-next-first-last",m.LoadMore="load-more",m.Infinite="infinite",m))(pt||{});var j=class extends a{static lktAllowUndefinedProps=[];static lktDefaultValues=["type","modelValue","class","resource","readOnly","loading","resourceData"];type="pages-prev-next";modelValue=1;class="";resource="";readOnly=!1;loading=!1;resourceData={};constructor(t={}){super(),this.feed(t)}};var gt=(r=>(r.None="",r.Incremental="incremental",r.Decremental="decremental",r))(gt||{});var Ct=(n=>(n.NotDefined="",n.Hidden="hidden",n.Integer="integer",n.Decimal="decimal",n.Auto="auto",n))(Ct||{});var H=class extends a{static lktAllowUndefinedProps=[];static lktDefaultValues=["modelValue","type","duration","pauseOnHover","header","valueFormat","palette"];modelValue=0;type="";duration=4e3;pauseOnHover=!1;header="";valueFormat="auto";palette="";constructor(t={}){super(),this.feed(t)}};var xt=(n=>(n.Table="table",n.Item="item",n.Ul="ul",n.Ol="ol",n.Carousel="carousel",n))(xt||{});var bt=(i=>(i[i.Auto=0]="Auto",i[i.PreferItem=1]="PreferItem",i[i.PreferCustomItem=2]="PreferCustomItem",i[i.PreferColumns=3]="PreferColumns",i))(bt||{});var R=class extends a{static lktDefaultValues=["modelValue","type","columns","noResultsText","hideEmptyColumns","itemDisplayChecker","loading","page","perms","editMode","dataStateConfig","sortable","sorter","initialSorting","drag","paginator","header","title","titleTag","titleIcon","headerClass","editModeButton","saveButton","createButton","dropButton","editButton","wrapContentTag","wrapContentClass","itemsContainerClass","hiddenSave","addNavigation","createEnabledValidator","newValueGenerator","requiredItemsForTopCreate","requiredItemsForBottomCreate","slotItemVar","carousel","hideTableHeader"];modelValue=[];type="table";columns=[];noResultsText="";hideTableHeader=!1;hideEmptyColumns=!1;itemDisplayChecker=void 0;rowDisplayType=0;loading=!1;page=1;perms=[];editMode=!1;dataStateConfig={};sortable=!1;sorter=void 0;initialSorting=!1;drag=void 0;paginator=void 0;carousel={};header;title="";titleTag="h2";titleIcon="";headerClass="";editModeButton={};saveButton={};createButton={};dropButton={};editButton={};hiddenSave=!1;wrapContentTag="div";wrapContentClass="";itemsContainerClass="";addNavigation=!1;createEnabledValidator=void 0;newValueGenerator=void 0;requiredItemsForTopCreate=0;requiredItemsForBottomCreate=0;slotItemVar="item";constructor(t={}){super(),this.feed(t)}};var K=class extends a{static lktDefaultValues=["modelValue","id","useSession","cacheLifetime","contentPad","titles"];modelValue="";id="";useSession=!1;cacheLifetime=5;contentPad;titles;constructor(t={}){super(),this.feed(t)}};var ht=(o=>(o.NotDefined="",o.ActionIcon="action-icon",o))(ht||{});var W=class extends a{static lktDefaultValues=["class","text","featuredText","icon","iconAtEnd","featuredAtStart","type"];class="";text="";featuredText="";icon="";iconAtEnd=!1;featuredAtStart=!1;type="";constructor(t={}){super(),this.feed(t)}};var kt=(o=>(o.Message="message",o.Button="button",o))(kt||{});var Lt=(r=>(r.Left="left",r.Center="center",r.Right="right",r))(Lt||{});var z=class extends a{static lktDefaultValues=["type","text","details","icon","positionX","duration","buttonConfig","zIndex"];type="message";text="";details="";icon="";positionX="right";duration=void 0;buttonConfig=void 0;zIndex=1e3;constructor(t={}){super(),this.feed(t)}};var Mt=(o=>(o.Fixed="fixed",o.Absolute="absolute",o))(Mt||{});var Bt=(i=>(i.Top="top",i.Bottom="bottom",i.Center="center",i.ReferrerCenter="referrer-center",i))(Bt||{});var It=(n=>(n.Left="left",n.Right="right",n.Center="center",n.LeftCorner="left-corner",n.RightCorner="right-corner",n))(It||{});var q=class extends a{static lktDefaultValues=["modelValue","alwaysOpen","class","text","icon","iconAtEnd","engine","referrerWidth","referrerMargin","windowMargin","referrer","locationY","locationX","showOnReferrerHover","showOnReferrerHoverDelay","hideOnReferrerLeave","hideOnReferrerLeaveDelay"];modelValue=!1;alwaysOpen=!1;class="";text="";icon="";iconAtEnd=!1;engine="fixed";referrerWidth=!1;referrerMargin=0;windowMargin=0;referrer=void 0;locationY="bottom";locationX="left-corner";showOnReferrerHover=!1;showOnReferrerHoverDelay=0;hideOnReferrerLeave=!1;hideOnReferrerLeaveDelay=0;constructor(t={}){super(),this.feed(t)}};var Vt=(i=>(i.None="",i.Focus="focus",i.Blur="blur",i.Always="always",i))(Vt||{});var yt=(c=>(c.LktAnchor="lkt-anchor",c.LktLayoutAccordion="lkt-layout-accordion",c.LktTextAccordion="lkt-text-accordion",c.LktLayoutBox="lkt-layout-box",c.LktTextBox="lkt-text-box",c.LktButton="lkt-button",c.LktLayout="lkt-layout",c.LktHeader="lkt-header",c.LktIcon="lkt-icon",c.LktImage="lkt-image",c.LktText="lkt-text",c))(yt||{});var Et=(r=>(r.Auto="auto",r.Local="local",r.Remote="remote",r))(Et||{});var Dt=(n=>(n.Refresh="refresh",n.Close="close",n.ReOpen="reOpen",n.Exec="exec",n.Open="open",n))(Dt||{});var St=(o=>(o.Asc="asc",o.Desc="desc",o))(St||{});var vt=(l=>(l.Create="create",l.Update="update",l.Edit="edit",l.Drop="drop",l.Sort="sort",l.SwitchEditMode="switch-edit-mode",l.InlineEdit="inline-edit",l.InlineCreate="inline-create",l.ModalCreate="modal-create",l.InlineCreateEver="inline-create-ever",l))(vt||{});var Tt=(o=>(o.Lazy="lazy",o.Ever="ever",o))(Tt||{});var G=class e{value;constructor(t){this.value=t}getValue(...t){return typeof this.value=="function"?this.value(...t):typeof this.value=="object"&&typeof this.value==typeof e?this.value.getValue(...t):typeof this.value=="string"?this.value:""}};import{__ as zt}from"lkt-i18n";var Ot=(e,t)=>typeof e=="string"&&e.startsWith("prop:")?t[e.substring(5)]:e,qt=e=>{if(typeof e=="string"&&e.startsWith("__:")){let t=String(e);return t.startsWith("__:")?zt(t.substring(3)):t}return e},Gt=(e,t)=>{if(!e)return{};let o={};for(let r in e)o[r]=Ot(e[r],t);return o};import{getAvailableLanguages as p}from"lkt-i18n";var L=(e="Time to create")=>{let t={};return p().forEach(r=>{t[r]=e}),{id:0,type:"lkt-text",props:{text:t},config:{}}},$t=()=>{let e={};return p().forEach(o=>{e[o]="Title goes here"}),{id:0,type:"lkt-anchor",props:{text:e},config:{hasHeader:!0,hasIcon:!0}}},Xt=()=>{let e={};return p().forEach(o=>{e[o]="Title goes here"}),{id:0,type:"lkt-button",props:{text:e},config:{hasHeader:!0,hasIcon:!0},children:[L("Button text")]}},Qt=()=>({id:0,type:"lkt-layout",props:{},config:{},children:[L("Content goes here")],layout:{type:"grid",amountOfItems:[]}}),Yt=()=>{let e={},t={};return p().forEach(r=>{e[r]="Title goes here",t[r]="Content goes here"}),{id:0,type:"lkt-text-box",props:{header:e,text:t},config:{hasHeader:!0,hasIcon:!0},children:[],layout:{type:"grid",amountOfItems:[]}}},Jt=()=>{let e={};return p().forEach(o=>{e[o]="Title goes here"}),{id:0,type:"lkt-layout-box",props:{header:e},config:{hasHeader:!0,hasIcon:!0},children:[L("Content goes here")],layout:{type:"grid",amountOfItems:[]}}},Zt=()=>{let e={};return p().forEach(o=>{e[o]="Title goes here"}),{id:0,type:"lkt-layout-accordion",props:{header:e},config:{hasHeader:!0,hasIcon:!0},children:[L("Content goes here")],layout:{type:"grid",amountOfItems:[]}}},_t=()=>{let e={},t={};return p().forEach(r=>{e[r]="Title goes here",t[r]="Content goes here"}),{id:0,type:"lkt-text-accordion",props:{header:e,text:t},config:{hasHeader:!0,hasIcon:!0},children:[],layout:{type:"grid",amountOfItems:[]}}},te=()=>{let e={};return p().forEach(o=>{e[o]="Title goes here"}),{id:0,type:"lkt-header",props:{text:e},config:{hasHeader:!0,hasIcon:!0}}},ee=()=>{let e={};return p().forEach(o=>{e[o]="Content goes here"}),{id:0,type:"lkt-icon",props:{text:e},config:{hasHeader:!0,hasIcon:!0}}},oe=()=>{let e={};return p().forEach(o=>{e[o]="Image description goes here"}),{id:0,type:"lkt-image",props:{text:e},config:{hasHeader:!0,hasIcon:!0}}};var re=(e,...t)=>{x.debugEnabled&&console.info("::lkt::",`[${e}] `,...t)};var C=class e{static config=[];static components=[];static zIndex=500;static canvas=void 0;static addModal(t){return e.config.push(t),e}static findConfig(t){return e.config.find(o=>o.name===t)}static getInstanceIndex(t){return`${t.modalName}_${t.modalKey}`}static getModalInfo(t,o={},r){let i=e.getInstanceIndex(t);return t={...r.config,...t,zIndex:e.zIndex},{componentProps:o,modalConfig:t,modalRegister:r,index:i,legacy:!1,legacyData:{props:{...t,modalConfig:t,...o}}}}static focus(t){return e.components[t.index]=t,e.components[t.index]}static open(t,o={},r=!1){o.modalKey&&(t.modalKey=o.modalKey);let i=e.findConfig(t.modalName);if(r&&(o.size&&(t.size=o.size,delete o.size),o.preTitle&&(t.preTitle=o.preTitle,delete o.preTitle),o.preTitleIcon&&(t.preTitleIcon=o.preTitleIcon,delete o.preTitleIcon),o.title&&(t.title=o.title,delete o.title),o.closeIcon&&(t.closeIcon=o.closeIcon,delete o.closeIcon),o.closeConfirm&&(t.closeConfirm=o.closeConfirm,delete o.closeConfirm),o.closeConfirmKey&&(t.closeConfirmKey=o.closeConfirmKey,delete o.closeConfirmKey),o.showClose&&(t.showClose=o.showClose,delete o.showClose),o.disabledClose&&(t.disabledClose=o.disabledClose,delete o.disabledClose),o.disabledVeilClick&&(t.disabledVeilClick=o.disabledVeilClick,delete o.disabledVeilClick),o.hiddenFooter&&(t.hiddenFooter=o.hiddenFooter,delete o.hiddenFooter),o.modalName&&(t.modalName=o.modalName,delete o.modalName),o.modalKey&&(t.modalKey=o.modalKey,delete o.modalKey),o.beforeClose&&(t.beforeClose=o.beforeClose,delete o.beforeClose),o.item&&(t.item=o.item,delete o.item),o.confirmButton&&(t.confirmButton=o.confirmButton,delete o.confirmButton),o.cancelButton&&(t.cancelButton=o.cancelButton,delete o.cancelButton),o.type&&(t.type=o.type,delete o.type)),i){++e.zIndex;let n=this.getModalInfo(t,o,i);return n.legacy=r,e.components[n.index]?e.focus(n):(e.components[n.index]=n,e.canvas?.refresh(),e.components[n.index])}}static close(t){if(e.findConfig(t.modalName)){--e.zIndex;let r=e.getInstanceIndex(t);delete e.components[r],Object.keys(e.components).length===0&&(e.zIndex=500),e.canvas?.refresh()}}};var ae=e=>{C.addModal(e)},ie=(e,t)=>{C.open(e,t),C.canvas?.refresh()},ne=e=>{C.close(e),C.canvas?.refresh()};var le=e=>new k(e);var wt=(o=>(o.Quick="quick",o.Full="full",o))(wt||{});function mr(e){let t=new e,o={};if(!Array.isArray(e.lktDefaultValues))throw new Error("lktDefaultValues must be a keys array.");for(let r of e.lktDefaultValues)r in t&&(o[r]=t[r]);return o}export{B as Accordion,Y as AccordionToggleMode,Q as AccordionType,V as Anchor,J as AnchorType,y as Box,E as Button,$ as ButtonType,k as Column,Z as ColumnType,D as DocPage,_ as DocPageSize,S as Field,Vt as FieldAutoValidationTrigger,X as FieldType,v as FieldValidation,Et as FieldValidationType,T as Header,rt as HeaderTag,O as Icon,it as IconPosition,at as IconType,w as Image,F as ItemCrud,st as ItemCrudButtonNavPosition,ft as ItemCrudButtonNavVisibility,nt as ItemCrudMode,lt as ItemCrudView,M as LktColor,a as LktItem,x as LktSettings,h as LktStrictItem,A as Menu,P as MenuEntry,mt as MenuEntryType,U as Modal,Dt as ModalCallbackAction,C as ModalController,wt as ModalRegisterType,ct as ModalType,tt as MultipleOptionsDisplay,dt as NotificationType,N as Option,j as Paginator,pt as PaginatorType,H as Progress,gt as ProgressType,Ct as ProgressValueFormat,G as SafeString,ut as SaveType,St as SortDirection,R as Table,vt as TablePermission,bt as TableRowType,xt as TableType,K as Tabs,W as Tag,ht as TagType,z as Toast,Lt as ToastPositionX,kt as ToastType,Tt as ToggleMode,q as Tooltip,It as TooltipLocationX,Bt as TooltipLocationY,Mt as TooltipPositionEngine,et as ValidationCode,ot as ValidationStatus,yt as WebElementType,ae as addModal,Nt as booleanFieldTypes,ne as closeModal,le as createColumn,u as ensureButtonConfig,b as ensureFieldConfig,qt as extractI18nValue,Ot as extractPropValue,Ft as fieldTypesWithOptions,At as fieldTypesWithoutClear,Pt as fieldTypesWithoutUndo,jt as fieldsWithMultipleMode,I as getAnchorHref,$t as getDefaultLktAnchorWebElement,Xt as getDefaultLktButtonWebElement,te as getDefaultLktHeaderWebElement,ee as getDefaultLktIconWebElement,oe as getDefaultLktImageWebElement,Zt as getDefaultLktLayoutAccordionWebElement,Jt as getDefaultLktLayoutBoxWebElement,Qt as getDefaultLktLayoutWebElement,_t as getDefaultLktTextAccordionWebElement,Yt as getDefaultLktTextBoxWebElement,L as getDefaultLktTextWebElement,mr as getDefaultValues,re as lktDebug,ie as openModal,Gt as prepareResourceData,Ht as textFieldTypes,Ut as textFieldTypesWithOptions};
