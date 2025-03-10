var U=(u=>(u.Button="button",u.Submit="submit",u.Reset="reset",u.Anchor="anchor",u.Content="content",u.Switch="switch",u.HiddenSwitch="hidden-switch",u.Split="split",u.SplitLazy="split-lazy",u.SplitEver="split-ever",u.Tooltip="tooltip",u.TooltipLazy="tooltip-lazy",u.TooltipEver="tooltip-ever",u))(U||{});var f=(e,t)=>typeof e>"u"?t:{...t,...e};var c=class e{static debugEnabled=!1;static debugMode(t=!0){return e.debugEnabled=t,e}static defaultCreateErrorText="Creation failed";static defaultCreateErrorDetails="An error occurred while creating the item. Please try again.";static defaultCreateErrorIcon="";static setDefaultCreateError(t){e.defaultCreateErrorText=t.text??e.defaultCreateErrorText,e.defaultCreateErrorDetails=t.details??e.defaultCreateErrorDetails,e.defaultCreateErrorIcon=t.icon??e.defaultCreateErrorIcon}static defaultUpdateErrorText="Update failed";static defaultUpdateErrorDetails="An error occurred while updating the item. Please try again.";static defaultUpdateErrorIcon="";static setDefaultUpdateError(t){e.defaultUpdateErrorText=t.text??e.defaultUpdateErrorText,e.defaultUpdateErrorDetails=t.details??e.defaultUpdateErrorDetails,e.defaultUpdateErrorIcon=t.icon??e.defaultUpdateErrorIcon}static defaultDropErrorText="Drop failed";static defaultDropErrorDetails="An error occurred while removing the item. Please try again.";static defaultDropErrorIcon="";static setDefaultDropError(t){e.defaultDropErrorText=t.text??e.defaultDropErrorText,e.defaultDropErrorDetails=t.details??e.defaultDropErrorDetails,e.defaultDropErrorIcon=t.icon??e.defaultDropErrorIcon}static defaultCreateSuccessText="Item created";static defaultCreateSuccessDetails="";static defaultCreateSuccessIcon="";static setDefaultCreateSuccess(t){e.defaultCreateSuccessText=t.text??e.defaultCreateSuccessText,e.defaultCreateSuccessDetails=t.details??e.defaultCreateSuccessDetails,e.defaultCreateSuccessIcon=t.icon??e.defaultCreateSuccessIcon}static defaultUpdateSuccessText="Item updated";static defaultUpdateSuccessDetails="";static defaultUpdateSuccessIcon="";static setDefaultUpdateSuccess(t){e.defaultUpdateSuccessText=t.text??e.defaultUpdateSuccessText,e.defaultUpdateSuccessDetails=t.details??e.defaultUpdateSuccessDetails,e.defaultUpdateSuccessIcon=t.icon??e.defaultUpdateSuccessIcon}static defaultDropSuccessText="Item removed";static defaultDropSuccessDetails="";static defaultDropSuccessIcon="";static setDefaultDropSuccess(t){e.defaultDropSuccessText=t.text??e.defaultDropSuccessText,e.defaultDropSuccessDetails=t.details??e.defaultDropSuccessDetails,e.defaultDropSuccessIcon=t.icon??e.defaultDropSuccessIcon}static defaultSaveButton={text:"Save",icon:"lkt-icn-save"};static setDefaultSaveButton(t,o=!0){return o?e.defaultSaveButton=t:e.defaultSaveButton=f(t,e.defaultSaveButton),e}static defaultConfirmButton={text:"Confirm"};static setDefaultConfirmButton(t,o=!0){return o?e.defaultConfirmButton=t:e.defaultConfirmButton=f(t,e.defaultConfirmButton),e}static defaultCancelButton={text:"Cancel"};static setDefaultCancelButton(t,o=!0){return o?e.defaultCancelButton=t:e.defaultCancelButton=f(t,e.defaultCancelButton),e}static defaultCreateButton={text:"Create",icon:"lkt-icn-save"};static setDefaultCreateButton(t,o=!0){return o?e.defaultCreateButton=t:e.defaultCreateButton=f(t,e.defaultCreateButton),e}static defaultUpdateButton={text:"Update",icon:"lkt-icn-save"};static setDefaultUpdateButton(t,o=!0){return o?e.defaultUpdateButton=t:e.defaultUpdateButton=f(t,e.defaultUpdateButton),e}static defaultDropButton={text:"Drop"};static setDefaultDropButton(t,o=!0){return o?e.defaultDropButton=t:e.defaultDropButton=f(t,e.defaultDropButton),e}static defaultEditModeButton={text:"Edit mode",type:"switch"};static setDefaultEditModeButton(t,o=!0){return o?e.defaultEditModeButton=t:e.defaultEditModeButton=f(t,e.defaultEditModeButton),e}static defaultToggleButton={text:"Toggle",textOn:"Close",textOff:"Show more",type:"hidden-switch"};static setDefaultToggleButton(t,o=!0){return o?e.defaultToggleButton=t:e.defaultToggleButton=f(t,e.defaultToggleButton),e}static defaultLoadMoreButton={text:"Load more",type:"hidden-switch"};static setDefaultLoadMoreButton(t,o=!0){return o?e.defaultLoadMoreButton=t:e.defaultLoadMoreButton=f(t,e.defaultLoadMoreButton),e}static defaultCloseModalIcon="lkt-icn-cancel";static setDefaultCloseModalIcon(t){return e.defaultCloseModalIcon=t,e}static defaultCloseToastIcon="lkt-icn-cancel";static setDefaultCloseToastIcon(t){return e.defaultCloseToastIcon=t,e}static defaultTableSortAscIcon="lkt-icn-arrow-bottom";static defaultTableSortDescIcon="lkt-icn-arrow-top";static setDefaultTableSortAscIcon(t){return e.defaultTableSortAscIcon=t,e}static setDefaultTableSortDescIcon(t){return e.defaultTableSortDescIcon=t,e}static defaultPaginatorFirstButton={text:"",icon:"lkt-icn-angle-double-left"};static defaultPaginatorPrevButton={text:"",icon:"lkt-icn-angle-left"};static defaultPaginatorNextButton={text:"",iconEnd:"lkt-icn-angle-right"};static defaultPaginatorLastButton={text:"",iconEnd:"lkt-icn-angle-double-right"};static setDefaultPaginatorFirstButton(t,o=!0){return o?e.defaultPaginatorFirstButton=t:e.defaultPaginatorFirstButton=f(t,e.defaultPaginatorFirstButton),e}static setDefaultPaginatorPrevButton(t,o=!0){return o?e.defaultPaginatorPrevButton=t:e.defaultPaginatorPrevButton=f(t,e.defaultPaginatorPrevButton),e}static setDefaultPaginatorNextButton(t,o=!0){return o?e.defaultPaginatorNextButton=t:e.defaultPaginatorNextButton=f(t,e.defaultPaginatorNextButton),e}static setDefaultPaginatorLastButton(t,o=!0){return o?e.defaultPaginatorLastButton=t:e.defaultPaginatorLastButton=f(t,e.defaultPaginatorLastButton),e}};var F=(l=>(l.Text="text",l.Email="email",l.Tel="tel",l.Password="password",l.Search="search",l.Number="number",l.Color="color",l.Range="range",l.Textarea="textarea",l.Html="html",l.Date="date",l.File="file",l.Image="image",l.Select="select",l.Check="check",l.Switch="switch",l.Calc="calc",l.Card="card",l.Elements="elements",l))(F||{});var bt=["text","search","select"],ht=["switch","check"],Vt=["switch","check"],kt=["text","search"],Mt=["switch","check"],Bt=["select","color","card"],Dt=["text","email","password"];var St=["lktDateProps","lktStrictItem","lktExcludedProps"],n=class e{static lktAllowUndefinedProps=[];static lktExcludedProps=[];static lktDateProps=[];static lktStrictItem=!1;static lktDefaultValues=[];constructor(t){}feed(t={},o=this){if(typeof t=="object")for(let[r,a]of Object.entries(t))o.assignProp(r,a)}assignProp(t,o){if(!(St.includes(t)||e.lktExcludedProps.includes(t))&&!(e.lktStrictItem&&!this.hasOwnProperty(t))){if(e.lktDateProps.includes(t)){this[t]=new Date(o);return}this[t]=o}}};var k=class extends n{lktStrictItem=!0};var j=(a=>(a.Auto="auto",a.Always="always",a.Lazy="lazy",a.Ever="ever",a))(j||{});var K=(r=>(r.Transform="transform",r.Height="height",r.Display="display",r))(K||{});var M=class extends n{static lktAllowUndefinedProps=["onClick"];static lktDefaultValues=["modelValue","type","toggleMode","actionButton","toggleButton","toggleOnClickIntro","toggleTimeout","title","icon","class","contentClass","iconRotation","minHeight","iconAtEnd","toggleIconAtEnd"];modelValue=!1;type="auto";toggleMode="height";actionButton={};toggleButton={};toggleOnClickIntro=!1;toggleTimeout=0;title="";icon="";class="";contentClass="";iconRotation="90";minHeight=void 0;iconAtEnd=!1;toggleIconAtEnd=!1;constructor(t={}){super(),this.feed(t)}};var R=(m=>(m.Href="href",m.RouterLink="router-link",m.RouterLinkBack="router-link-back",m.Mail="mail",m.Tel="tel",m.Tab="tab",m.Download="download",m.Action="action",m.Legacy="",m))(R||{});var p=class extends n{static lktAllowUndefinedProps=[];static lktDefaultValues=["type","to","class","isActive","downloadFileName","disabled","onClick","confirmModal","confirmModalKey","confirmData","imposter","external","events"];type="router-link";to="";class="";isActive=!1;downloadFileName="";disabled=!1;onClick=void 0;confirmModal="";confirmModalKey="_";confirmData={};imposter=!1;external=!1;events={};getHref(){let t="";return typeof this.to=="string"&&(t=this.to),"mail"===this.type?`mailto:${t}`:"tel"===this.type?`tel:${t}`:["href","mail","tel","tab","download"].includes(this.type)?t:typeof this.to=="string"&&this.to!==""?this.to:""}constructor(t={}){super(),this.feed(t)}};import{generateRandomString as yt}from"lkt-string-tools";var C=class extends n{lktAllowUndefinedProps=["clickRef","tabindex","anchor","showTooltipOnHover","hideTooltipOnLeave"];static lktDefaultValues=["type","name","class","containerClass","value","disabled","loading","wrapContent","splitIcon","resource","resourceData","modal","modalKey","modalData","confirmModal","confirmModalKey","confirmData","modalCallbacks","text","textOn","textOff","icon","iconOn","iconOff","iconEndOn","iconEndOff","dot","iconEnd","img","showTooltipOnHoverDelay","tooltip","checked","clickRef","openTooltip","tabindex","anchor","showTooltipOnHover","hideTooltipOnLeave","splitClass","prop","events"];type="button";name=yt(10);class="";containerClass="";value="";disabled=!1;loading=!1;wrapContent=!1;splitIcon="";resource="";resourceData={};modal="";modalKey="_";modalData={};confirmModal="";confirmModalKey="_";confirmData={};modalCallbacks=[];text="";textOn=void 0;textOff=void 0;iconOn=void 0;iconOff=void 0;iconEndOn=void 0;iconEndOff=void 0;icon="";dot=!1;iconEnd="";img="";showTooltipOnHoverDelay=0;checked=!1;clickRef=void 0;openTooltip=!1;tabindex=void 0;anchor=void 0;showTooltipOnHover=void 0;hideTooltipOnLeave=void 0;splitClass="";tooltip={};prop={};events={};constructor(t={}){super(),this.feed(t),this.anchor=new p(t.anchor)}isDisabled(){return typeof this.disabled=="function"?this.disabled():this.disabled}};var H=(a=>(a.None="",a.Field="field",a.Button="button",a.Anchor="anchor",a))(H||{});import{generateRandomString as It}from"lkt-string-tools";var W=(r=>(r.List="list",r.Inline="inline",r.Count="count",r))(W||{});var x=class extends n{static lktDefaultValues=["modelValue","type","valid","placeholder","searchPlaceholder","label","labelIcon","labelIconAtEnd","name","autocomplete","disabled","readonly","readMode","allowReadModeSwitch","tabindex","mandatory","showPassword","canClear","canUndo","canI18n","canStep","canTag","mandatoryMessage","infoMessage","errorMessage","min","max","step","enableAutoNumberFix","emptyValueSlot","optionSlot","valueSlot","editSlot","slotData","featuredButton","infoButtonEllipsis","fileName","customButtonText","customButtonClass","options","multiple","multipleDisplay","multipleDisplayEdition","searchable","icon","download","modal","modalKey","modalData","validation","prop","optionValueType","optionsConfig","fileUploadHttp","tooltipConfig"];modelValue="";type="text";valid=void 0;placeholder="";searchPlaceholder="";label="";labelIcon="";labelIconAtEnd=!1;name=It(16);autocomplete=!1;disabled=!1;readonly=!1;readMode=!1;allowReadModeSwitch=!1;tabindex=void 0;mandatory=!1;showPassword=!1;canClear=!1;canUndo=!1;canI18n=!1;canStep=!0;canTag=!0;mandatoryMessage="";infoMessage="";errorMessage="";min=void 0;max=void 0;step=1;enableAutoNumberFix=!0;emptyValueSlot="";optionSlot=void 0;valueSlot=void 0;editSlot=void 0;slotData={};featuredButton="";infoButtonEllipsis=!1;fileName="";customButtonText="";customButtonClass="";options=[];multiple=!1;multipleDisplay="list";multipleDisplayEdition="inline";searchable=!1;icon="";download="";modal="";modalKey="";modalData={};validation={};prop={};optionValueType="value";optionsConfig={};fileUploadHttp={};tooltipConfig={};constructor(t={}){super(),this.feed(t)}};var b=class e{value;constructor(t){this.value=t}getValue(...t){return typeof this.value=="function"?this.value(...t):typeof this.value=="object"&&typeof this.value==typeof e?this.value.getValue(...t):typeof this.value=="string"?this.value:""}};var h=class extends n{lktExcludedProps=["link","field","anchor","button"];lktAllowUndefinedProps=["formatter","checkEmpty","colspan","field","anchor","button","link","action"];static lktDefaultValues=["type","key","label","sortable","hidden","editable","formatter","checkEmpty","colspan","preferSlot","isForRowKey","extractTitleFromColumn","slotData","field","anchor","button","link","action"];type="";key="";label="";sortable=!0;hidden=!1;editable=!1;formatter=void 0;checkEmpty=void 0;colspan=void 0;preferSlot=!0;isForRowKey=!1;extractTitleFromColumn="";slotData={};field=void 0;anchor=void 0;button=void 0;link=void 0;action=void 0;constructor(t={}){switch(super(),this.feed(t),this.type){case"field":this.field=new x(t.field);break;case"anchor":this.anchor=new p(t.anchor);break;case"button":this.button=new C(t.button);break}this.link=new b(t.link)}getHref(t){return typeof this.link!="object"?"":this.link.getValue(t)}doAction(t){if(typeof this.action=="function")return this.action(t);console.warn("No action defined")}};var z=(s=>(s.MinStringLength="min-str",s.MinNumber="min-num",s.MaxStringLength="max-str",s.MaxNumber="max-num",s.Email="email",s.Empty="empty",s.EqualTo="equal-to",s.MinNumbers="min-numbers",s.MaxNumbers="max-numbers",s.MinChars="min-chars",s.MaxChars="max-chars",s.MinUpperChars="min-upper-chars",s.MaxUpperChars="max-upper-chars",s.MinLowerChars="min-lower-chars",s.MaxLowerChars="max-lower-chars",s.MinSpecialChars="min-special-chars",s.MaxSpecialChars="max-special-chars",s))(z||{});var q=(r=>(r.Ok="ok",r.Ko="ko",r.Info="info",r))(q||{});var B=class e{code=void 0;status="info";min=0;max=0;equalToValue=void 0;constructor(t,o){this.code=t,this.status=o}setMin(t){return this.min=t,this}setMax(t){return this.max=t,this}setEqualToValue(t){return this.equalToValue=t,this}static createEmpty(t="ko"){return new e("empty",t)}static createEmail(t="ko"){return new e("email",t)}static createMinStr(t,o="ko"){return new e("min-str",o).setMin(t)}static createMaxStr(t,o="ko"){return new e("max-str",o).setMax(t)}static createMinNum(t,o="ko"){return new e("min-num",o).setMin(t)}static createMaxNum(t,o="ko"){return new e("max-num",o).setMax(t)}static createNumBetween(t,o,r="ko"){return new e("max-num",r).setMin(t).setMax(o)}static createMinNumbers(t,o="ko"){return new e("min-numbers",o).setMin(t)}static createMaxNumbers(t,o="ko"){return new e("max-numbers",o).setMax(t)}static createMinUpperChars(t,o="ko"){return new e("min-upper-chars",o).setMin(t)}static createMaxUpperChars(t,o="ko"){return new e("max-upper-chars",o).setMax(t)}static createMinLowerChars(t,o="ko"){return new e("min-lower-chars",o).setMin(t)}static createMaxLowerChars(t,o="ko"){return new e("max-lower-chars",o).setMax(t)}static createMinSpecialChars(t,o="ko"){return new e("min-special-chars",o).setMin(t)}static createMaxSpecialChars(t,o="ko"){return new e("max-special-chars",o).setMax(t)}static createMinChars(t,o="ko"){return new e("min-chars",o).setMin(t)}static createMaxChars(t,o="ko"){return new e("max-chars",o).setMax(t)}static createEqualTo(t,o="ko"){return new e("equal-to",o).setEqualToValue(t)}};var $=(o=>(o.NotDefined="",o.Button="button",o))($||{});var D=class extends n{static lktDefaultValues=["icon","text","class","type","events"];icon="";text="";class="";type="";events={};constructor(t={}){super(),this.feed(t)}};var S=class extends n{static lktAllowUndefinedProps=["onClick"];static lktDefaultValues=["src","alt","text","class","imageStyle"];src="";alt="";text="";class="";imageStyle="";constructor(t={}){super(),this.feed(t)}};var G=(r=>(r.Create="create",r.Update="update",r.Read="read",r))(G||{});var X=(o=>(o.Inline="inline",o.Modal="modal",o))(X||{});var Y=(o=>(o.Top="top",o.Bottom="bottom",o))(Y||{});var J=(r=>(r.Changed="changed",r.Always="always",r.Never="never",r))(J||{});var Q=(r=>(r.Manual="manual",r.Auto="auto",r.Delay="delay",r))(Q||{});var Z=(o=>(o.Toast="toast",o.Inline="inline",o))(Z||{});var y=class extends n{static lktDefaultValues=["modelValue","editing","mode","view","editModeButton","dropButton","createButton","updateButton","modalConfig","saveConfig","title","readResource","readData","beforeEmitUpdate","dataStateConfig","buttonNavPosition","buttonNavVisibility","notificationType"];modelValue={};editing=!1;mode="read";view="inline";editModeButton={};dropButton={};createButton={};updateButton={};modalConfig={};saveConfig={type:"manual"};title="";readResource="";readData={};beforeEmitUpdate=void 0;dataStateConfig={};buttonNavPosition="top";buttonNavVisibility="always";notificationType="toast";constructor(t={}){super(),this.feed(t)}};var V=class extends n{static lktDefaultValues=["key","href","label","icon","isActiveChecker","isOpened","isActive","parent","children","events","onClick"];key="";href="";label="";icon="";isActiveChecker=void 0;isOpened=!1;isActive=!1;parent=void 0;children;events={};onClick=void 0;constructor(t={}){super(),this.feed(t)}setChildren(t){return t.forEach(o=>o.parent=this),this.children=t,this}setOnClick(t){return this.onClick=t,this}setIsActiveChecker(t){return this.isActiveChecker=t,this}setIsActive(t=!0){return this.isActive=t,this}setLabel(t){return this.label=t,this}setIcon(t){return this.icon=t,this}doClose(){this.isOpened=!1}};var I=class extends n{static lktDefaultValues=["modelValue","resource","resourceData"];modelValue=[];resource="";resourceData={};constructor(t={}){super(),this.feed(t),this.modelValue=this.modelValue?.map(o=>new V(o))||[]}};var P=class extends n{static lktDefaultValues=["size","preTitle","preTitleIcon","title","closeIcon","closeConfirm","closeConfirmKey","showClose","disabledClose","disabledVeilClick","hiddenFooter","modalName","modalKey","zIndex","beforeClose","item"];size="";preTitle="";preTitleIcon="";title="";closeIcon=c.defaultCloseModalIcon;closeConfirm="";closeConfirmKey="_";showClose=!0;disabledClose=!1;disabledVeilClick=!1;hiddenFooter=!1;modalName="";modalKey="_";zIndex=500;beforeClose=void 0;item={};confirmButton={};cancelButton={};constructor(t={}){super(),this.feed(t)}};var E=class extends n{value=void 0;label="";data={};disabled=!1;group="";icon="";modal="";tags=[];constructor(t={}){super(),this.feed(t)}};var _=(g=>(g.Pages="pages",g.PrevNext="prev-next",g.PagesPrevNext="pages-prev-next",g.PagesPrevNextFirstLast="pages-prev-next-first-last",g.LoadMore="load-more",g.Infinite="infinite",g))(_||{});var w=class extends n{static lktAllowUndefinedProps=[];static lktDefaultValues=["type","modelValue","class","resource","readOnly","loading","resourceData"];type="pages-prev-next";modelValue=1;class="";resource="";readOnly=!1;loading=!1;resourceData={};constructor(t={}){super(),this.feed(t)}};var tt=(r=>(r.None="",r.Incremental="incremental",r.Decremental="decremental",r))(tt||{});var et=(i=>(i.NotDefined="",i.Hidden="hidden",i.Integer="integer",i.Decimal="decimal",i.Auto="auto",i))(et||{});var T=class extends n{static lktAllowUndefinedProps=[];static lktDefaultValues=["modelValue","type","duration","pauseOnHover","header","valueFormat","palette"];modelValue=0;type="";duration=4e3;pauseOnHover=!1;header="";valueFormat="auto";palette="";constructor(t={}){super(),this.feed(t)}};var ot=(i=>(i.Table="table",i.Item="item",i.Ul="ul",i.Ol="ol",i.Carousel="carousel",i))(ot||{});var rt=(a=>(a[a.Auto=0]="Auto",a[a.PreferItem=1]="PreferItem",a[a.PreferCustomItem=2]="PreferCustomItem",a[a.PreferColumns=3]="PreferColumns",a))(rt||{});var v=class extends n{static lktDefaultValues=["modelValue","type","columns","noResultsText","hideEmptyColumns","itemDisplayChecker","loading","page","perms","editMode","dataStateConfig","sortable","sorter","initialSorting","drag","paginator","header","title","titleTag","titleIcon","headerClass","editModeButton","saveButton","createButton","dropButton","editButton","wrapContentTag","wrapContentClass","itemsContainerClass","hiddenSave","addNavigation","createEnabledValidator","newValueGenerator","requiredItemsForTopCreate","requiredItemsForBottomCreate","slotItemVar","carousel"];modelValue=[];type="table";columns=[];noResultsText="";hideEmptyColumns=!1;itemDisplayChecker=void 0;rowDisplayType=0;loading=!1;page=1;perms=[];editMode=!1;dataStateConfig={};sortable=!1;sorter=void 0;initialSorting=!1;drag=void 0;paginator=void 0;carousel={};header;title="";titleTag="h2";titleIcon="";headerClass="";editModeButton={};saveButton={};createButton={};dropButton={};editButton={};hiddenSave=!1;wrapContentTag="div";wrapContentClass="";itemsContainerClass="";addNavigation=!1;createEnabledValidator=void 0;newValueGenerator=void 0;requiredItemsForTopCreate=0;requiredItemsForBottomCreate=0;slotItemVar="item";constructor(t={}){super(),this.feed(t)}};var L=class extends n{static lktDefaultValues=["modelValue","id","useSession","cacheLifetime","contentPad","titles"];modelValue="";id="";useSession=!1;cacheLifetime=5;contentPad;titles;constructor(t={}){super(),this.feed(t)}};var nt=(o=>(o.NotDefined="",o.ActionIcon="action-icon",o))(nt||{});var O=class extends n{static lktDefaultValues=["class","text","featuredText","icon","iconAtEnd","featuredAtStart","type"];class="";text="";featuredText="";icon="";iconAtEnd=!1;featuredAtStart=!1;type="";constructor(t={}){super(),this.feed(t)}};var at=(o=>(o.Message="message",o.Button="button",o))(at||{});var it=(r=>(r.Left="left",r.Center="center",r.Right="right",r))(it||{});var A=class extends n{static lktDefaultValues=["type","text","details","icon","positionX","duration","buttonConfig","zIndex"];type="message";text="";details="";icon="";positionX="right";duration=void 0;buttonConfig=void 0;zIndex=1e3;constructor(t={}){super(),this.feed(t)}};var lt=(o=>(o.Fixed="fixed",o.Absolute="absolute",o))(lt||{});var st=(a=>(a.Top="top",a.Bottom="bottom",a.Center="center",a.ReferrerCenter="referrer-center",a))(st||{});var ft=(i=>(i.Left="left",i.Right="right",i.Center="center",i.LeftCorner="left-corner",i.RightCorner="right-corner",i))(ft||{});var N=class extends n{static lktDefaultValues=["modelValue","alwaysOpen","class","text","icon","iconAtEnd","engine","referrerWidth","referrerMargin","windowMargin","referrer","locationY","locationX"];modelValue=!1;alwaysOpen=!1;class="";text="";icon="";iconAtEnd=!1;engine="fixed";referrerWidth=!1;referrerMargin=0;windowMargin=0;referrer=void 0;locationY="bottom";locationX="left-corner";showOnReferrerHover=!1;showOnReferrerHoverDelay=0;hideOnReferrerLeave=!1;constructor(t={}){super(),this.feed(t)}};var ut=(a=>(a.None="",a.Focus="focus",a.Blur="blur",a.Always="always",a))(ut||{});var dt=(r=>(r.Auto="auto",r.Local="local",r.Remote="remote",r))(dt||{});var mt=(i=>(i.Refresh="refresh",i.Close="close",i.ReOpen="reOpen",i.Exec="exec",i.Open="open",i))(mt||{});var ct=(o=>(o.Modal="modal",o.Confirm="confirm",o))(ct||{});var pt=(o=>(o.Asc="asc",o.Desc="desc",o))(pt||{});var gt=(d=>(d.Create="create",d.Update="update",d.Edit="edit",d.Drop="drop",d.Sort="sort",d.SwitchEditMode="switch-edit-mode",d.InlineEdit="inline-edit",d.InlineCreate="inline-create",d.ModalCreate="modal-create",d.InlineCreateEver="inline-create-ever",d))(gt||{});var Ct=(o=>(o.Lazy="lazy",o.Ever="ever",o))(Ct||{});import{__ as Pt}from"lkt-i18n";var xt=(e,t)=>typeof e=="string"&&e.startsWith("prop:")?t[e.substring(5)]:e,Et=e=>{if(typeof e=="string"&&e.startsWith("__:")){let t=String(e);return t.startsWith("__:")?Pt(t.substring(3)):t}return e},wt=(e,t)=>{if(!e)return{};let o={};for(let r in e)o[r]=xt(e[r],t);return o};var Tt=(e,...t)=>{c.debugEnabled&&console.info("::lkt::",`[${e}] `,...t)};var vt=e=>new h(e);function Mo(e){let t=new e,o={};if(!Array.isArray(e.lktDefaultValues))throw new Error("lktDefaultValues must be a keys array.");for(let r of e.lktDefaultValues)r in t&&(o[r]=t[r]);return o}export{M as Accordion,K as AccordionToggleMode,j as AccordionType,p as Anchor,R as AnchorType,C as Button,U as ButtonType,h as Column,H as ColumnType,x as Field,ut as FieldAutoValidationTrigger,F as FieldType,B as FieldValidation,dt as FieldValidationType,D as Icon,$ as IconType,S as Image,y as ItemCrud,Y as ItemCrudButtonNavPosition,J as ItemCrudButtonNavVisibility,G as ItemCrudMode,X as ItemCrudView,n as LktItem,c as LktSettings,k as LktStrictItem,I as Menu,V as MenuEntry,P as Modal,mt as ModalCallbackAction,ct as ModalType,W as MultipleOptionsDisplay,Z as NotificationType,E as Option,w as Paginator,_ as PaginatorType,T as Progress,tt as ProgressType,et as ProgressValueFormat,b as SafeString,Q as SaveType,pt as SortDirection,v as Table,gt as TablePermission,rt as TableRowType,ot as TableType,L as Tabs,O as Tag,nt as TagType,A as Toast,it as ToastPositionX,at as ToastType,Ct as ToggleMode,N as Tooltip,ft as TooltipLocationX,st as TooltipLocationY,lt as TooltipPositionEngine,z as ValidationCode,q as ValidationStatus,Mt as booleanFieldTypes,vt as createColumn,f as ensureButtonConfig,Et as extractI18nValue,xt as extractPropValue,bt as fieldTypesWithOptions,ht as fieldTypesWithoutClear,Vt as fieldTypesWithoutUndo,Bt as fieldsWithMultipleMode,Mo as getDefaultValues,Tt as lktDebug,wt as prepareResourceData,Dt as textFieldTypes,kt as textFieldTypesWithOptions};
