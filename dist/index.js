var G=(m=>(m.Button="button",m.Submit="submit",m.Reset="reset",m.Anchor="anchor",m.Content="content",m.Switch="switch",m.HiddenSwitch="hidden-switch",m.Split="split",m.SplitLazy="split-lazy",m.SplitEver="split-ever",m.Tooltip="tooltip",m.TooltipLazy="tooltip-lazy",m.TooltipEver="tooltip-ever",m.FileUpload="file-upload",m.ImageUpload="image-upload",m))(G||{});var d=(e,t)=>typeof e>"u"||!e?t:{...t,...e},b=(e,t)=>typeof e>"u"?t:{...t,...e};var C=class e{static debugEnabled=!1;static debugMode(t=!0){return e.debugEnabled=t,e}static defaultCreateErrorText="Creation failed";static defaultCreateErrorDetails="An error occurred while creating the item. Please try again.";static defaultCreateErrorIcon="";static setDefaultCreateError(t){e.defaultCreateErrorText=t.text??e.defaultCreateErrorText,e.defaultCreateErrorDetails=t.details??e.defaultCreateErrorDetails,e.defaultCreateErrorIcon=t.icon??e.defaultCreateErrorIcon}static defaultUpdateErrorText="Update failed";static defaultUpdateErrorDetails="An error occurred while updating the item. Please try again.";static defaultUpdateErrorIcon="";static setDefaultUpdateError(t){e.defaultUpdateErrorText=t.text??e.defaultUpdateErrorText,e.defaultUpdateErrorDetails=t.details??e.defaultUpdateErrorDetails,e.defaultUpdateErrorIcon=t.icon??e.defaultUpdateErrorIcon}static defaultDropErrorText="Drop failed";static defaultDropErrorDetails="An error occurred while removing the item. Please try again.";static defaultDropErrorIcon="";static setDefaultDropError(t){e.defaultDropErrorText=t.text??e.defaultDropErrorText,e.defaultDropErrorDetails=t.details??e.defaultDropErrorDetails,e.defaultDropErrorIcon=t.icon??e.defaultDropErrorIcon}static defaultCreateSuccessText="Item created";static defaultCreateSuccessDetails="";static defaultCreateSuccessIcon="";static setDefaultCreateSuccess(t){e.defaultCreateSuccessText=t.text??e.defaultCreateSuccessText,e.defaultCreateSuccessDetails=t.details??e.defaultCreateSuccessDetails,e.defaultCreateSuccessIcon=t.icon??e.defaultCreateSuccessIcon}static defaultUpdateSuccessText="Item updated";static defaultUpdateSuccessDetails="";static defaultUpdateSuccessIcon="";static setDefaultUpdateSuccess(t){e.defaultUpdateSuccessText=t.text??e.defaultUpdateSuccessText,e.defaultUpdateSuccessDetails=t.details??e.defaultUpdateSuccessDetails,e.defaultUpdateSuccessIcon=t.icon??e.defaultUpdateSuccessIcon}static defaultDropSuccessText="Item removed";static defaultDropSuccessDetails="";static defaultDropSuccessIcon="";static setDefaultDropSuccess(t){e.defaultDropSuccessText=t.text??e.defaultDropSuccessText,e.defaultDropSuccessDetails=t.details??e.defaultDropSuccessDetails,e.defaultDropSuccessIcon=t.icon??e.defaultDropSuccessIcon}static defaultUploadSuccessText="Upload success";static defaultUploadSuccessDetails="";static defaultUploadSuccessIcon="";static setDefaultUploadSuccess(t){e.defaultUploadSuccessText=t.text??e.defaultUploadSuccessText,e.defaultUploadSuccessDetails=t.details??e.defaultUploadSuccessDetails,e.defaultUploadSuccessIcon=t.icon??e.defaultUploadSuccessIcon}static defaultUploadErrorText="Upload error";static defaultUploadErrorDetails="";static defaultUploadErrorIcon="";static setDefaultUploadError(t){e.defaultUploadErrorText=t.text??e.defaultUploadErrorText,e.defaultUploadErrorDetails=t.details??e.defaultUploadErrorDetails,e.defaultUploadErrorIcon=t.icon??e.defaultUploadErrorIcon}static defaultSaveButton={text:"Save",icon:"lkt-icn-save"};static setDefaultSaveButton(t,o=!0){return o?e.defaultSaveButton=t:e.defaultSaveButton=d(t,e.defaultSaveButton),e}static defaultConfirmButton={text:"Confirm"};static setDefaultConfirmButton(t,o=!0){return o?e.defaultConfirmButton=t:e.defaultConfirmButton=d(t,e.defaultConfirmButton),e}static defaultCancelButton={text:"Cancel"};static setDefaultCancelButton(t,o=!0){return o?e.defaultCancelButton=t:e.defaultCancelButton=d(t,e.defaultCancelButton),e}static defaultCreateButton={text:"Create",icon:"lkt-icn-save"};static setDefaultCreateButton(t,o=!0){return o?e.defaultCreateButton=t:e.defaultCreateButton=d(t,e.defaultCreateButton),e}static defaultUpdateButton={text:"Update",icon:"lkt-icn-save"};static setDefaultUpdateButton(t,o=!0){return o?e.defaultUpdateButton=t:e.defaultUpdateButton=d(t,e.defaultUpdateButton),e}static defaultDropButton={text:"Drop"};static setDefaultDropButton(t,o=!0){return o?e.defaultDropButton=t:e.defaultDropButton=d(t,e.defaultDropButton),e}static defaultEditModeButton={text:"Edit mode",type:"switch"};static setDefaultEditModeButton(t,o=!0){return o?e.defaultEditModeButton=t:e.defaultEditModeButton=d(t,e.defaultEditModeButton),e}static defaultGroupButton={text:"Actions",type:"split",icon:"lkt-icn-settings-cogs"};static setDefaultGroupButton(t,o=!0){return o?e.defaultGroupButton=t:e.defaultGroupButton=d(t,e.defaultGroupButton),e}static defaultToggleButton={text:"Toggle",textOn:"Close",textOff:"Show more",type:"hidden-switch"};static setDefaultToggleButton(t,o=!0){return o?e.defaultToggleButton=t:e.defaultToggleButton=d(t,e.defaultToggleButton),e}static defaultLoadMoreButton={text:"Load more",type:"hidden-switch"};static setDefaultLoadMoreButton(t,o=!0){return o?e.defaultLoadMoreButton=t:e.defaultLoadMoreButton=d(t,e.defaultLoadMoreButton),e}static defaultCloseModalIcon="lkt-icn-cancel";static setDefaultCloseModalIcon(t){return e.defaultCloseModalIcon=t,e}static defaultCloseToastIcon="lkt-icn-cancel";static setDefaultCloseToastIcon(t){return e.defaultCloseToastIcon=t,e}static defaultTableSortAscIcon="lkt-icn-arrow-bottom";static defaultTableSortDescIcon="lkt-icn-arrow-top";static setDefaultTableSortAscIcon(t){return e.defaultTableSortAscIcon=t,e}static setDefaultTableSortDescIcon(t){return e.defaultTableSortDescIcon=t,e}static defaultPaginatorFirstButton={text:"",icon:"lkt-icn-angle-double-left"};static defaultPaginatorPrevButton={text:"",icon:"lkt-icn-angle-left"};static defaultPaginatorNextButton={text:"",iconEnd:"lkt-icn-angle-right"};static defaultPaginatorLastButton={text:"",iconEnd:"lkt-icn-angle-double-right"};static setDefaultPaginatorFirstButton(t,o=!0){return o?e.defaultPaginatorFirstButton=t:e.defaultPaginatorFirstButton=d(t,e.defaultPaginatorFirstButton),e}static setDefaultPaginatorPrevButton(t,o=!0){return o?e.defaultPaginatorPrevButton=t:e.defaultPaginatorPrevButton=d(t,e.defaultPaginatorPrevButton),e}static setDefaultPaginatorNextButton(t,o=!0){return o?e.defaultPaginatorNextButton=t:e.defaultPaginatorNextButton=d(t,e.defaultPaginatorNextButton),e}static setDefaultPaginatorLastButton(t,o=!0){return o?e.defaultPaginatorLastButton=t:e.defaultPaginatorLastButton=d(t,e.defaultPaginatorLastButton),e}static defaultFieldElementCustomClassField={label:"Appearance",multiple:!1};static defaultFieldLktAccordionElementCustomClassField={};static defaultFieldLktBoxElementCustomClassField={};static defaultFieldLktIconElementCustomClassField={};static defaultFieldLktImageElementCustomClassField={};static setDefaultFieldLktAccordionElementCustomClassField(t,o=!0){return o?e.defaultFieldLktAccordionElementCustomClassField=t:e.defaultFieldLktAccordionElementCustomClassField=b(t,e.defaultFieldLktAccordionElementCustomClassField),e}static setDefaultFieldLktBoxElementCustomClassField(t,o=!0){return o?e.defaultFieldLktBoxElementCustomClassField=t:e.defaultFieldLktBoxElementCustomClassField=b(t,e.defaultFieldLktBoxElementCustomClassField),e}static setDefaultFieldLktIconElementCustomClassField(t,o=!0){return o?e.defaultFieldLktIconElementCustomClassField=t:e.defaultFieldLktIconElementCustomClassField=b(t,e.defaultFieldLktIconElementCustomClassField),e}static setDefaultFieldLktImageElementCustomClassField(t,o=!0){return o?e.defaultFieldLktImageElementCustomClassField=t:e.defaultFieldLktImageElementCustomClassField=b(t,e.defaultFieldLktImageElementCustomClassField),e}static i18nOptionsFormatter={};static setI18nOptionsFormatter(t,o){return e.i18nOptionsFormatter[t]=o,e}};var $=(f=>(f.Text="text",f.Email="email",f.Tel="tel",f.Password="password",f.Search="search",f.Number="number",f.Color="color",f.Range="range",f.Textarea="textarea",f.Html="html",f.Date="date",f.File="file",f.Image="image",f.Select="select",f.Check="check",f.Switch="switch",f.Calc="calc",f.Card="card",f.Elements="elements",f))($||{});var wt=["text","search","select"],Ft=["switch","check"],At=["switch","check"],Pt=["text","search"],Ut=["switch","check"],Nt=["select","color","card"],Ht=["text","email","password"];var Rt=["lktDateProps","lktStrictItem","lktExcludedProps"],a=class e{static lktAllowUndefinedProps=[];static lktExcludedProps=[];static lktDateProps=[];static lktStrictItem=!1;static lktDefaultValues=[];constructor(t){}feed(t={},o=this){if(typeof t=="object")for(let[r,n]of Object.entries(t))o.assignProp(r,n)}assignProp(t,o){if(!(Rt.includes(t)||e.lktExcludedProps.includes(t))&&!(e.lktStrictItem&&!this.hasOwnProperty(t))){if(e.lktDateProps.includes(t)){this[t]=new Date(o);return}this[t]=o}}};var k=class extends a{lktStrictItem=!0};var L=class e extends k{r=0;g=0;b=0;a=255;constructor(t){super(),this.feed(t)}static fromHexColor(t){let o=parseInt(+("0x"+t.substring(1,3)),10),r=parseInt(+("0x"+t.substring(3,5)),10),n=parseInt(+("0x"+t.substring(5,7)),10),i=255;return t.length===9&&(i=parseInt(+("0x"+t.substring(5,7)),10)),new e({r:o,g:r,b:n,a:i})}toString(){let t=parseInt(this.r).toString(16).padStart(2,"0").toUpperCase(),o=parseInt(this.g).toString(16).padStart(2,"0").toUpperCase(),r=parseInt(this.b).toString(16).padStart(2,"0").toUpperCase(),n="#"+t+o+r;if(this.a==255)return n;let i=parseInt(this.a).toString(16).padStart(2,"0").toUpperCase();return n+i}getContrastFontColor(){return(.299*this.r+.587*this.g+.114*this.b)/this.a>.5?"#000000":"#ffffff"}};var X=(n=>(n.Auto="auto",n.Always="always",n.Lazy="lazy",n.Ever="ever",n))(X||{});var Q=(r=>(r.Transform="transform",r.Height="height",r.Display="display",r))(Q||{});var M=class extends a{static lktAllowUndefinedProps=["onClick"];static lktDefaultValues=["modelValue","type","toggleMode","actionButton","toggleButton","toggleOnClickIntro","toggleTimeout","title","icon","class","contentClass","iconRotation","minHeight","iconAtEnd","toggleIconAtEnd"];modelValue=!1;type="auto";toggleMode="height";actionButton={};toggleButton={};toggleOnClickIntro=!1;toggleTimeout=0;title="";icon="";class="";contentClass="";iconRotation="90";minHeight=void 0;iconAtEnd=!1;toggleIconAtEnd=!1;constructor(t={}){super(),this.feed(t)}};var Y=(s=>(s.Href="href",s.RouterLink="router-link",s.RouterLinkBack="router-link-back",s.Mail="mail",s.Tel="tel",s.Tab="tab",s.Download="download",s.Action="action",s.Legacy="",s))(Y||{});var S=e=>{let t="";if(typeof e.to=="string"&&(t=e.to),typeof e.type<"u")switch(e.type){case"mail":return`mailto:${t}`;case"tel":return`tel:${t}`;case"href":case"tab":case"download":return t}return t};var x=class extends a{static lktAllowUndefinedProps=[];static lktDefaultValues=["type","to","class","isActive","downloadFileName","disabled","onClick","confirmModal","confirmModalKey","confirmData","imposter","external","events","text"];type="router-link";to="";class="";isActive=!1;downloadFileName="";disabled=!1;onClick=void 0;confirmModal="";confirmModalKey="_";confirmData={};imposter=!1;external=!1;text;events={};getHref(){return S(this)}constructor(t={}){super(),this.feed(t)}};var B=class extends a{static lktDefaultValues=["title","iconAtEnd","style","class","icon"];title="";iconAtEnd=!1;style="";class="";icon="";constructor(t={}){super(),this.feed(t)}};import{generateRandomString as Kt}from"lkt-string-tools";var I=class extends a{lktAllowUndefinedProps=["clickRef","tabindex","anchor","showTooltipOnHover","hideTooltipOnLeave"];static lktDefaultValues=["type","name","class","containerClass","value","disabled","loading","wrapContent","splitIcon","resource","resourceData","modal","modalKey","modalData","confirmModal","confirmModalKey","confirmData","modalCallbacks","text","textOn","textOff","icon","iconOn","iconOff","iconEndOn","iconEndOff","dot","iconEnd","img","showTooltipOnHoverDelay","tooltip","checked","clickRef","openTooltip","tabindex","anchor","showTooltipOnHover","hideTooltipOnLeave","splitClass","prop","events"];type="button";name=Kt(10);class="";containerClass="";value="";disabled=!1;loading=!1;wrapContent=!1;splitIcon="lkt-icn-angle-bottom";resource="";resourceData={};modal="";modalKey="_";modalData={};confirmModal="";confirmModalKey="_";confirmData={};modalCallbacks=[];text="";textOn=void 0;textOff=void 0;iconOn=void 0;iconOff=void 0;iconEndOn=void 0;iconEndOff=void 0;icon="";dot=!1;iconEnd="";img="";showTooltipOnHoverDelay=0;checked=!1;clickRef=void 0;openTooltip=!1;tabindex=void 0;anchor=void 0;showTooltipOnHover=void 0;hideTooltipOnLeave=void 0;splitClass="";tooltip={};prop={};events={};constructor(t={}){super(),this.feed(t),this.anchor=new x(t.anchor)}isDisabled(){return typeof this.disabled=="function"?this.disabled():this.disabled}};var J=(n=>(n.None="",n.Field="field",n.Button="button",n.Anchor="anchor",n))(J||{});var V=class extends a{lktExcludedProps=["field","anchor","button"];lktAllowUndefinedProps=["formatter","checkEmpty","colspan","field","anchor","button"];static lktDefaultValues=["type","key","label","sortable","hidden","editable","formatter","checkEmpty","colspan","preferSlot","isForRowKey","extractTitleFromColumn","slotData","field","anchor","button"];type="";key="";label="";sortable=!0;hidden=!1;editable=!1;formatter=void 0;checkEmpty=void 0;colspan=void 0;preferSlot=!0;isForRowKey=!1;extractTitleFromColumn="";slotData={};field=void 0;anchor=void 0;button=void 0;constructor(t={}){super(),this.feed(t)}};var Z=(l=>(l.A0="a0",l.A1="a1",l.A2="a2",l.A3="a3",l.A4="a4",l.A5="a5",l.A6="a6",l.A7="a7",l.A8="a8",l.A9="a9",l))(Z||{});var T=class extends a{static lktDefaultValues=["id","size","skipPageNumber","frontPage","title","img","icon"];id="";size="a4";skipPageNumber=!1;frontPage=!1;title="";img="";icon="";constructor(t={}){super(),this.feed(t)}};import{generateRandomString as jt}from"lkt-string-tools";var _=(r=>(r.List="list",r.Inline="inline",r.Count="count",r))(_||{});var v=class extends a{static lktDefaultValues=["modelValue","type","valid","placeholder","searchPlaceholder","label","labelIcon","labelIconAtEnd","name","autocomplete","disabled","readonly","hidden","readMode","allowReadModeSwitch","tabindex","mandatory","showPassword","canClear","canUndo","canI18n","canStep","canTag","mandatoryMessage","infoMessage","errorMessage","min","max","step","enableAutoNumberFix","emptyValueSlot","optionSlot","valueSlot","editSlot","slotData","featuredButton","infoButtonEllipsis","fileName","customButtonText","customButtonClass","options","multiple","multipleDisplay","multipleDisplayEdition","searchable","icon","download","modal","modalKey","modalData","validation","prop","optionValueType","optionsConfig","fileUploadHttp","tooltipConfig","readModeConfig","configOn","configOff"];modelValue="";type="text";valid=void 0;placeholder="";searchPlaceholder="";label="";labelIcon="";labelIconAtEnd=!1;name=jt(16);autocomplete=!1;disabled=!1;readonly=!1;hidden=!1;tabindex=void 0;mandatory=!1;showPassword=!1;canClear=!1;canUndo=!1;canI18n=!1;canStep=!0;canTag=!0;mandatoryMessage="";infoMessage="";errorMessage="";min=void 0;max=void 0;step=1;enableAutoNumberFix=!0;emptyValueSlot="";optionSlot=void 0;valueSlot=void 0;editSlot=void 0;slotData={};featuredButton="";infoButtonEllipsis=!1;fileName="";customButtonText="";customButtonClass="";options=[];multiple=!1;multipleDisplay="list";multipleDisplayEdition="inline";searchable=!1;icon="";download="";modal="";modalKey="";modalData={};validation={};configOn={};configOff={};readMode;allowReadModeSwitch=!1;readModeConfig;prop={};optionValueType="value";optionsConfig={};fileUploadHttp={};fileUploadButton={};tooltipConfig={};constructor(t={}){super(),this.feed(t)}};var tt=(u=>(u.MinStringLength="min-str",u.MinNumber="min-num",u.MaxStringLength="max-str",u.MaxNumber="max-num",u.Email="email",u.Empty="empty",u.EqualTo="equal-to",u.MinNumbers="min-numbers",u.MaxNumbers="max-numbers",u.MinChars="min-chars",u.MaxChars="max-chars",u.MinUpperChars="min-upper-chars",u.MaxUpperChars="max-upper-chars",u.MinLowerChars="min-lower-chars",u.MaxLowerChars="max-lower-chars",u.MinSpecialChars="min-special-chars",u.MaxSpecialChars="max-special-chars",u))(tt||{});var et=(r=>(r.Ok="ok",r.Ko="ko",r.Info="info",r))(et||{});var O=class e{code=void 0;status="info";min=0;max=0;equalToValue=void 0;constructor(t,o){this.code=t,this.status=o}setMin(t){return this.min=t,this}setMax(t){return this.max=t,this}setEqualToValue(t){return this.equalToValue=t,this}static createEmpty(t="ko"){return new e("empty",t)}static createEmail(t="ko"){return new e("email",t)}static createMinStr(t,o="ko"){return new e("min-str",o).setMin(t)}static createMaxStr(t,o="ko"){return new e("max-str",o).setMax(t)}static createMinNum(t,o="ko"){return new e("min-num",o).setMin(t)}static createMaxNum(t,o="ko"){return new e("max-num",o).setMax(t)}static createNumBetween(t,o,r="ko"){return new e("max-num",r).setMin(t).setMax(o)}static createMinNumbers(t,o="ko"){return new e("min-numbers",o).setMin(t)}static createMaxNumbers(t,o="ko"){return new e("max-numbers",o).setMax(t)}static createMinUpperChars(t,o="ko"){return new e("min-upper-chars",o).setMin(t)}static createMaxUpperChars(t,o="ko"){return new e("max-upper-chars",o).setMax(t)}static createMinLowerChars(t,o="ko"){return new e("min-lower-chars",o).setMin(t)}static createMaxLowerChars(t,o="ko"){return new e("max-lower-chars",o).setMax(t)}static createMinSpecialChars(t,o="ko"){return new e("min-special-chars",o).setMin(t)}static createMaxSpecialChars(t,o="ko"){return new e("max-special-chars",o).setMax(t)}static createMinChars(t,o="ko"){return new e("min-chars",o).setMin(t)}static createMaxChars(t,o="ko"){return new e("max-chars",o).setMax(t)}static createEqualTo(t,o="ko"){return new e("equal-to",o).setEqualToValue(t)}};var ot=(c=>(c.H1="h1",c.H2="h2",c.H3="h3",c.H4="h4",c.H5="h5",c.H6="h6",c))(ot||{});var D=class extends a{static lktAllowUndefinedProps=["onClick"];static lktDefaultValues=["tag","class","text","icon"];tag="h2";class="";text="";icon="";constructor(t={}){super(),this.feed(t)}};var rt=(o=>(o.NotDefined="",o.Button="button",o))(rt||{});var at=(o=>(o.Start="start",o.End="end",o))(at||{});var y=class extends a{static lktDefaultValues=["icon","text","class","type","position","events"];icon="";text="";class="";type="";position="start";events={};constructor(t={}){super(),this.feed(t)}};var E=class extends a{static lktAllowUndefinedProps=["onClick"];static lktDefaultValues=["src","alt","text","class","imageStyle"];src="";alt="";text="";class="";imageStyle="";constructor(t={}){super(),this.feed(t)}};var nt=(r=>(r.Create="create",r.Update="update",r.Read="read",r))(nt||{});var it=(o=>(o.Inline="inline",o.Modal="modal",o))(it||{});var lt=(o=>(o.Top="top",o.Bottom="bottom",o))(lt||{});var st=(r=>(r.Changed="changed",r.Always="always",r.Never="never",r))(st||{});var ft=(r=>(r.Manual="manual",r.Auto="auto",r.Delay="delay",r))(ft||{});var ut=(o=>(o.Toast="toast",o.Inline="inline",o))(ut||{});var w=class extends a{static lktDefaultValues=["modelValue","editing","perms","mode","view","editModeButton","dropButton","createButton","updateButton","groupButton","modalConfig","saveConfig","title","readResource","readData","beforeEmitUpdate","dataStateConfig","buttonNavPosition","buttonNavVisibility","notificationType"];modelValue={};editing=!1;perms=[];mode="read";view="inline";editModeButton={};dropButton={};createButton={};updateButton={};groupButton=!1;modalConfig={};saveConfig={type:"manual"};title="";readResource="";readData={};beforeEmitUpdate=void 0;dataStateConfig={};buttonNavPosition="top";buttonNavVisibility="always";notificationType="toast";constructor(t={}){super(),this.feed(t)}};var F=class extends a{static lktDefaultValues=["modelValue","http"];modelValue=[];http={};constructor(t={}){super(),this.feed(t)}};var dt=(r=>(r.Anchor="anchor",r.Button="button",r.Entry="entry",r))(dt||{});var A=class extends a{static lktDefaultValues=["key","type","icon","isActiveChecker","isOpened","isActive","parent","children","events","onClick"];key="";type="anchor";class="";icon="";anchor={};button={};isActiveChecker=void 0;isOpened=!1;isActive=!1;parent=void 0;children;events={};onClick=void 0;constructor(t={}){super(),this.feed(t)}doClose(){this.isOpened=!1}};var mt=(o=>(o.Modal="modal",o.Confirm="confirm",o))(mt||{});var P=class extends a{static lktDefaultValues=["size","preTitle","preTitleIcon","title","closeIcon","closeConfirm","closeConfirmKey","showClose","disabledClose","disabledVeilClick","hiddenFooter","modalName","modalKey","zIndex","beforeClose","item","type"];size="";preTitle="";preTitleIcon="";title="";closeIcon=C.defaultCloseModalIcon;closeConfirm="";closeConfirmKey="_";showClose=!0;disabledClose=!1;disabledVeilClick=!1;hiddenFooter=!1;modalName="";modalKey="_";zIndex=500;beforeClose=void 0;item={};confirmButton={};cancelButton={};type="modal";constructor(t={}){super(),this.feed(t)}};var U=class extends a{value=void 0;label="";data={};disabled=!1;group="";icon="";modal="";tags=[];constructor(t={}){super(),this.feed(t)}};var ct=(c=>(c.Pages="pages",c.PrevNext="prev-next",c.PagesPrevNext="pages-prev-next",c.PagesPrevNextFirstLast="pages-prev-next-first-last",c.LoadMore="load-more",c.Infinite="infinite",c))(ct||{});var N=class extends a{static lktAllowUndefinedProps=[];static lktDefaultValues=["type","modelValue","class","resource","readOnly","loading","resourceData"];type="pages-prev-next";modelValue=1;class="";resource="";readOnly=!1;loading=!1;resourceData={};constructor(t={}){super(),this.feed(t)}};var pt=(r=>(r.None="",r.Incremental="incremental",r.Decremental="decremental",r))(pt||{});var gt=(i=>(i.NotDefined="",i.Hidden="hidden",i.Integer="integer",i.Decimal="decimal",i.Auto="auto",i))(gt||{});var H=class extends a{static lktAllowUndefinedProps=[];static lktDefaultValues=["modelValue","type","duration","pauseOnHover","header","valueFormat","palette"];modelValue=0;type="";duration=4e3;pauseOnHover=!1;header="";valueFormat="auto";palette="";constructor(t={}){super(),this.feed(t)}};var Ct=(i=>(i.Table="table",i.Item="item",i.Ul="ul",i.Ol="ol",i.Carousel="carousel",i))(Ct||{});var xt=(n=>(n[n.Auto=0]="Auto",n[n.PreferItem=1]="PreferItem",n[n.PreferCustomItem=2]="PreferCustomItem",n[n.PreferColumns=3]="PreferColumns",n))(xt||{});var R=class extends a{static lktDefaultValues=["modelValue","type","columns","noResultsText","hideEmptyColumns","itemDisplayChecker","loading","page","perms","editMode","dataStateConfig","sortable","sorter","initialSorting","drag","paginator","header","title","titleTag","titleIcon","headerClass","editModeButton","saveButton","createButton","dropButton","editButton","wrapContentTag","wrapContentClass","itemsContainerClass","hiddenSave","addNavigation","createEnabledValidator","newValueGenerator","requiredItemsForTopCreate","requiredItemsForBottomCreate","slotItemVar","carousel","hideTableHeader"];modelValue=[];type="table";columns=[];noResultsText="";hideTableHeader=!1;hideEmptyColumns=!1;itemDisplayChecker=void 0;rowDisplayType=0;loading=!1;page=1;perms=[];editMode=!1;dataStateConfig={};sortable=!1;sorter=void 0;initialSorting=!1;drag=void 0;paginator=void 0;carousel={};header;title="";titleTag="h2";titleIcon="";headerClass="";editModeButton={};saveButton={};createButton={};dropButton={};editButton={};hiddenSave=!1;wrapContentTag="div";wrapContentClass="";itemsContainerClass="";addNavigation=!1;createEnabledValidator=void 0;newValueGenerator=void 0;requiredItemsForTopCreate=0;requiredItemsForBottomCreate=0;slotItemVar="item";constructor(t={}){super(),this.feed(t)}};var K=class extends a{static lktDefaultValues=["modelValue","id","useSession","cacheLifetime","contentPad","titles"];modelValue="";id="";useSession=!1;cacheLifetime=5;contentPad;titles;constructor(t={}){super(),this.feed(t)}};var bt=(o=>(o.NotDefined="",o.ActionIcon="action-icon",o))(bt||{});var j=class extends a{static lktDefaultValues=["class","text","featuredText","icon","iconAtEnd","featuredAtStart","type"];class="";text="";featuredText="";icon="";iconAtEnd=!1;featuredAtStart=!1;type="";constructor(t={}){super(),this.feed(t)}};var ht=(o=>(o.Message="message",o.Button="button",o))(ht||{});var kt=(r=>(r.Left="left",r.Center="center",r.Right="right",r))(kt||{});var z=class extends a{static lktDefaultValues=["type","text","details","icon","positionX","duration","buttonConfig","zIndex"];type="message";text="";details="";icon="";positionX="right";duration=void 0;buttonConfig=void 0;zIndex=1e3;constructor(t={}){super(),this.feed(t)}};var Mt=(o=>(o.Fixed="fixed",o.Absolute="absolute",o))(Mt||{});var Bt=(n=>(n.Top="top",n.Bottom="bottom",n.Center="center",n.ReferrerCenter="referrer-center",n))(Bt||{});var It=(i=>(i.Left="left",i.Right="right",i.Center="center",i.LeftCorner="left-corner",i.RightCorner="right-corner",i))(It||{});var W=class extends a{static lktDefaultValues=["modelValue","alwaysOpen","class","text","icon","iconAtEnd","engine","referrerWidth","referrerMargin","windowMargin","referrer","locationY","locationX","showOnReferrerHover","showOnReferrerHoverDelay","hideOnReferrerLeave","hideOnReferrerLeaveDelay"];modelValue=!1;alwaysOpen=!1;class="";text="";icon="";iconAtEnd=!1;engine="fixed";referrerWidth=!1;referrerMargin=0;windowMargin=0;referrer=void 0;locationY="bottom";locationX="left-corner";showOnReferrerHover=!1;showOnReferrerHoverDelay=0;hideOnReferrerLeave=!1;hideOnReferrerLeaveDelay=0;constructor(t={}){super(),this.feed(t)}};var Vt=(n=>(n.None="",n.Focus="focus",n.Blur="blur",n.Always="always",n))(Vt||{});var Dt=(s=>(s.LktAnchor="lkt-anchor",s.LktAccordion="lkt-accordion",s.LktBox="lkt-box",s.LktButton="lkt-button",s.LktLayout="lkt-layout",s.LktHeader="lkt-header",s.LktIcon="lkt-icon",s.LktImage="lkt-image",s.Text="text",s))(Dt||{});var yt=(r=>(r.Auto="auto",r.Local="local",r.Remote="remote",r))(yt||{});var Et=(i=>(i.Refresh="refresh",i.Close="close",i.ReOpen="reOpen",i.Exec="exec",i.Open="open",i))(Et||{});var Lt=(o=>(o.Asc="asc",o.Desc="desc",o))(Lt||{});var St=(l=>(l.Create="create",l.Update="update",l.Edit="edit",l.Drop="drop",l.Sort="sort",l.SwitchEditMode="switch-edit-mode",l.InlineEdit="inline-edit",l.InlineCreate="inline-create",l.ModalCreate="modal-create",l.InlineCreateEver="inline-create-ever",l))(St||{});var Tt=(o=>(o.Lazy="lazy",o.Ever="ever",o))(Tt||{});var q=class e{value;constructor(t){this.value=t}getValue(...t){return typeof this.value=="function"?this.value(...t):typeof this.value=="object"&&typeof this.value==typeof e?this.value.getValue(...t):typeof this.value=="string"?this.value:""}};import{__ as zt}from"lkt-i18n";var vt=(e,t)=>typeof e=="string"&&e.startsWith("prop:")?t[e.substring(5)]:e,Wt=e=>{if(typeof e=="string"&&e.startsWith("__:")){let t=String(e);return t.startsWith("__:")?zt(t.substring(3)):t}return e},qt=(e,t)=>{if(!e)return{};let o={};for(let r in e)o[r]=vt(e[r],t);return o};var h=(e="Time to create")=>({type:"text",text:e}),Gt=()=>({type:"lkt-anchor",props:{...g(x),text:"Anchor text"},config:{hasHeader:!0,hasIcon:!0},children:[h("Anchor text")]}),$t=()=>({type:"lkt-button",props:{...g(I),text:"Button text"},config:{hasHeader:!0,hasIcon:!0},children:[h("Button text")]}),Xt=()=>({type:"lkt-layout",props:{},config:{},children:[h("Content goes here")],layout:{type:"grid",amountOfItems:[]}}),Qt=()=>({type:"lkt-box",props:{...g(B),header:"Title goes here",text:"Content goes here"},config:{hasHeader:!0,hasIcon:!0},children:[h("Content goes here")],layout:{type:"grid",amountOfItems:[]}}),Yt=()=>({type:"lkt-accordion",props:{...g(M),header:"Title goes here",text:"Content goes here"},config:{hasHeader:!0,hasIcon:!0},children:[h("Content goes here")],layout:{type:"grid",amountOfItems:[]}}),Jt=()=>({type:"lkt-header",props:{...g(D),text:"Content goes here"},config:{hasHeader:!0,hasIcon:!0}}),Zt=()=>({type:"lkt-icon",props:{...g(y),text:"Content goes here"},config:{hasHeader:!0,hasIcon:!0}}),_t=()=>({type:"lkt-image",props:{...g(E),text:"Image description goes here"},config:{hasHeader:!0,hasIcon:!0}});var te=(e,...t)=>{C.debugEnabled&&console.info("::lkt::",`[${e}] `,...t)};var p=class e{static config=[];static components=[];static zIndex=500;static canvas=void 0;static addModal(t){return e.config.push(t),e}static findConfig(t){return e.config.find(o=>o.name===t)}static getInstanceIndex(t){return`${t.modalName}_${t.modalKey}`}static getModalInfo(t,o={},r){let n=e.getInstanceIndex(t);return t={...r.config,...t,zIndex:e.zIndex},{componentProps:o,modalConfig:t,modalRegister:r,index:n,legacy:!1,legacyData:{props:{...t,modalConfig:t,...o}}}}static focus(t){return e.components[t.index]=t,e.components[t.index]}static open(t,o={},r=!1){o.modalKey&&(t.modalKey=o.modalKey);let n=e.findConfig(t.modalName);if(r&&(o.size&&(t.size=o.size,delete o.size),o.preTitle&&(t.preTitle=o.preTitle,delete o.preTitle),o.preTitleIcon&&(t.preTitleIcon=o.preTitleIcon,delete o.preTitleIcon),o.title&&(t.title=o.title,delete o.title),o.closeIcon&&(t.closeIcon=o.closeIcon,delete o.closeIcon),o.closeConfirm&&(t.closeConfirm=o.closeConfirm,delete o.closeConfirm),o.closeConfirmKey&&(t.closeConfirmKey=o.closeConfirmKey,delete o.closeConfirmKey),o.showClose&&(t.showClose=o.showClose,delete o.showClose),o.disabledClose&&(t.disabledClose=o.disabledClose,delete o.disabledClose),o.disabledVeilClick&&(t.disabledVeilClick=o.disabledVeilClick,delete o.disabledVeilClick),o.hiddenFooter&&(t.hiddenFooter=o.hiddenFooter,delete o.hiddenFooter),o.modalName&&(t.modalName=o.modalName,delete o.modalName),o.modalKey&&(t.modalKey=o.modalKey,delete o.modalKey),o.beforeClose&&(t.beforeClose=o.beforeClose,delete o.beforeClose),o.item&&(t.item=o.item,delete o.item),o.confirmButton&&(t.confirmButton=o.confirmButton,delete o.confirmButton),o.cancelButton&&(t.cancelButton=o.cancelButton,delete o.cancelButton),o.type&&(t.type=o.type,delete o.type)),n){++e.zIndex;let i=this.getModalInfo(t,o,n);return i.legacy=r,e.components[i.index]?e.focus(i):(e.components[i.index]=i,e.canvas?.refresh(),e.components[i.index])}}static close(t){if(e.findConfig(t.modalName)){--e.zIndex;let r=e.getInstanceIndex(t);delete e.components[r],Object.keys(e.components).length===0&&(e.zIndex=500),e.canvas?.refresh()}}};var ee=e=>{p.addModal(e)},oe=(e,t)=>{p.open(e,t),p.canvas?.refresh()},re=e=>{p.close(e),p.canvas?.refresh()};var ae=e=>new V(e);var Ot=(o=>(o.Quick="quick",o.Full="full",o))(Ot||{});function g(e){let t=new e,o={};if(!Array.isArray(e.lktDefaultValues))throw new Error("lktDefaultValues must be a keys array.");for(let r of e.lktDefaultValues)r in t&&(o[r]=t[r]);return o}export{M as Accordion,Q as AccordionToggleMode,X as AccordionType,x as Anchor,Y as AnchorType,B as Box,I as Button,G as ButtonType,V as Column,J as ColumnType,T as DocPage,Z as DocPageSize,v as Field,Vt as FieldAutoValidationTrigger,Dt as FieldElementType,$ as FieldType,O as FieldValidation,yt as FieldValidationType,D as Header,ot as HeaderTag,y as Icon,at as IconPosition,rt as IconType,E as Image,w as ItemCrud,lt as ItemCrudButtonNavPosition,st as ItemCrudButtonNavVisibility,nt as ItemCrudMode,it as ItemCrudView,L as LktColor,a as LktItem,C as LktSettings,k as LktStrictItem,F as Menu,A as MenuEntry,dt as MenuEntryType,P as Modal,Et as ModalCallbackAction,p as ModalController,Ot as ModalRegisterType,mt as ModalType,_ as MultipleOptionsDisplay,ut as NotificationType,U as Option,N as Paginator,ct as PaginatorType,H as Progress,pt as ProgressType,gt as ProgressValueFormat,q as SafeString,ft as SaveType,Lt as SortDirection,R as Table,St as TablePermission,xt as TableRowType,Ct as TableType,K as Tabs,j as Tag,bt as TagType,z as Toast,kt as ToastPositionX,ht as ToastType,Tt as ToggleMode,W as Tooltip,It as TooltipLocationX,Bt as TooltipLocationY,Mt as TooltipPositionEngine,tt as ValidationCode,et as ValidationStatus,ee as addModal,Ut as booleanFieldTypes,re as closeModal,ae as createColumn,d as ensureButtonConfig,b as ensureFieldConfig,Wt as extractI18nValue,vt as extractPropValue,wt as fieldTypesWithOptions,Ft as fieldTypesWithoutClear,At as fieldTypesWithoutUndo,Nt as fieldsWithMultipleMode,S as getAnchorHref,Yt as getDefaultLktAccordionElement,Gt as getDefaultLktAnchorElement,Qt as getDefaultLktBoxElement,$t as getDefaultLktButtonElement,Jt as getDefaultLktHeaderElement,Zt as getDefaultLktIconElement,_t as getDefaultLktImageElement,Xt as getDefaultLktLayoutElement,h as getDefaultTextElement,g as getDefaultValues,te as lktDebug,oe as openModal,qt as prepareResourceData,Ht as textFieldTypes,Pt as textFieldTypesWithOptions};
