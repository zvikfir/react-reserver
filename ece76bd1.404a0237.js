(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{109:function(e,n,t){"use strict";t.d(n,"a",(function(){return S})),t.d(n,"b",(function(){return A})),t.d(n,"c",(function(){return I})),t.d(n,"d",(function(){return b})),t.d(n,"e",(function(){return B})),t.d(n,"g",(function(){return v})),t.d(n,"h",(function(){return h})),t.d(n,"i",(function(){return z})),t.d(n,"k",(function(){return y})),t.d(n,"l",(function(){return T}));var r=t(0),o=t.n(r);function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)([]),s=o[0],i=o[1];return Object(r.useEffect)((function(){if(Array.isArray(n[0]))i(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);i(e[0].apply(e,n))}}),[JSON.stringify(n)]),s}function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)(),s=o[0],i=o[1];return Object(r.useEffect)((function(){if("function"!=typeof n[0])throw new Error("useFunction takes first argument as a function");var e=n.splice(0,1);i(e[0].apply(e,n))}),[JSON.stringify(n)]),s}var l="_3TtXw",c="_2fzm0",u="_32f2G",d="_kbpmo",m="_2nfh4";function f(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}var j=function(e,n,t){return t>=e&&n>=t};function h(e,n,t,r,o){return void 0===r&&(r=0),void 0===o&&(o=0),{left:r+n*t,top:e*t+o}}function g(e,n,t){return Math.floor((n-t)/e)}function p(e,n){return Math.floor(n/e)}function y(e,n,t){return e.map((function(e){if(e.editing){var r=function(e,n){if(e.column>n.column||"right"===e.stick&&e.length>1){e.stick="right";var t={row:e.row,column:n.column,length:e.column-n.column+e.length};return s({},e,t)}e.stick="left";var r={row:e.row,column:e.column,length:n.column-e.column+1};return s({},e,r)}(e,n.cell);return"function"==typeof t&&(r=t(r)),r}return e}))}function v(e){return e.map((function(e){return e.editing?s({},e,{editing:!1}):e}))}function b(e){var n=[].concat(e);return e.filter((function(e){return e.editing})).forEach((function(e){var t=function(e,n){var t=s({},n);return[e.flatMap((function(e){if(e.id===n.id)return[];if(t.row===e.row){var r=e.column+1,o=t.column+1,s=e.column+e.length,i=t.column+t.length;if(j(r,s,o)||j(r,s,i)||j(o,i,s)||j(o,i,r)){var a=w(e,t),l=a[0],c=a[1];return t=c,l}var u=k(e,t),d=u[0],m=u[1];return t=m,d}var f=k(e,t),h=f[0],g=f[1];return t=g,h})),t]}(n,e),r=t[0],o=t[1];r.push(o),n=r})),n}var w=function(e,n){return(e=E(e)).collisions[n.id]="",(n=E(n)).collisions[e.id]="",[e,n]},E=function(e){return e.collisions||(e.collisions={}),e},k=function(e,n){return delete(e=E(e)).collisions[n.id],delete(n=E(n)).collisions[e.id],[e,n]},D="ADD",M="EDIT",O="DELETE",C="SET_BARS",N="SET_IS_EDITING";function z(e,n){switch(n.type){case C:return s({},e,{bars:n.payload});case M:var t=[].concat(e.bars),r=t.findIndex((function(e){return n.payload.id===e.id}));return t[r]=n.payload,s({},e,{bars:t});case D:var o=[].concat(e.bars);return o.push(n.payload),s({},e,{bars:o});case O:var i=[].concat(e.bars),a=i.findIndex((function(e){return n.payload.id===e.id}));return i.splice(a,1),s({},e,{bars:i});case N:return s({},e,{isEditing:n.payload})}}function x(e){return o.a.createElement("div",{className:e.isVisible?l:c,style:{width:e.width,height:e.dimension+"px",overflow:"hidden"}},e.children)}function T(e,n){var t=Object(r.useReducer)(e,{bars:n,isEditing:!1}),o=t[0],s=o.bars,i=o.isEditing,a=t[1];return{isEditing:i,setIsEditing:function(e){return a({payload:e,type:N})},bars:s,addBar:function(e){return a({payload:e,type:D})},editBar:function(e){return a({payload:e,type:M})},deleteBar:function(e){return a({payload:e,type:O})},setBars:function(e){return a({payload:e,type:C})}}}function S(e){return o.a.createElement("div",{role:"listitem",onDragStart:function(n){e.onDragStart(n,e)},onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},draggable:e.draggable,style:s({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:"flex",position:"absolute",zIndex:e.zIndex||"100"}),className:e.className},[].concat(Array(e.length)).map((function(n,t){var r=function(e,n,t,r,s){return 0===e?r||t[e]||o.a.createElement("div",null):n-1===e?s||t[n-1]||o.a.createElement("div",null):t[e]||o.a.createElement("div",null)}(t,e.length,e.content,e.firstContent,e.lastContent),i=Object.assign({width:e.dimension,height:e.dimension,pointerEvents:e.style.pointerEvents||"none"},r.props.style||{});return o.a.createElement(o.a.Fragment,{key:t},o.a.cloneElement(r,s({},r.props,{style:i}),r.props.children))})),e.children)}function Y(e){return o.a.createElement("div",{role:"columnheader",className:e.columnTitles.length>0?u:d,style:{height:e.dimension}},"ltr"===e.dir&&o.a.createElement(x,{isVisible:e.showCanton,width:e.rowTitleWidth,dimension:e.dimension}),e.columnTitles.map((function(n,t){return o.a.createElement("div",{"aria-colindex":t,key:t,style:{width:e.dimension+"px",height:e.dimension+"px"},className:l},n)})),"rtl"===e.dir&&o.a.createElement(x,{isVisible:e.showCanton,width:e.rowTitleWidth,dimension:e.dimension}))}function _(e){return o.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:function(e){e.preventDefault()},onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className||l,onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:{overflow:"hidden",width:e.dimension+"px",height:e.dimension+"px"}},e.children)}function A(e){return o.a.createElement("div",{style:e.style},e.children)}function I(e){return o.a.createElement("span",{style:e.style,className:m},e.children)}function U(e){var n=a(p,e.dimension,e.height),t=a(g,e.dimension,e.width,e.rowTitleWidth),r=i(e.rowTitles),l=i(e.columnTitles,t);return o.a.createElement("div",{id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,style:s({},e.style,{position:"relative"})},o.a.createElement(Y,{columnTitles:l,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,showCanton:r.length>0,dir:e.dir}),[].concat(Array(n)).map((function(n,s){return o.a.createElement("div",{role:"rowgroup",className:u,key:s,style:{height:e.dimension,display:"flex"}},"ltr"===e.dir&&o.a.createElement(x,{isVisible:r.length>0,width:e.rowTitleWidth,dimension:e.dimension},r[s]),[].concat(Array(t)).map((function(n,t){return o.a.createElement(_,{key:"r"+s+"c"+t,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:e.dimension,className:e.cellClassName,column:t,row:s},e.content["r"+s+"c"+t])})),"rtl"===e.dir&&o.a.createElement(x,{isVisible:r.length>0,width:e.rowTitleWidth,dimension:e.dimension},r[s]))})),o.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:n,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,columnTitleHeight:l.length>0?e.dimension:0}),Array.isArray(e.children)&&e.children))}function B(e,n){return s({id:f(),length:1,dimension:e,editing:!0},n)}S.defaultProps={style:{},dimension:20,onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onContextMenu:function(){},onMouseEnter:function(){},onMouseLeave:function(){},length:1,content:{}},A.defaultProps={style:{userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"}},U.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,dir:"ltr",mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){}},n.f=U},244:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"c",(function(){return i})),t.d(n,"g",(function(){return a})),t.d(n,"f",(function(){return l})),t.d(n,"i",(function(){return c})),t.d(n,"e",(function(){return u})),t.d(n,"h",(function(){return d})),t.d(n,"b",(function(){return m})),t.d(n,"d",(function(){return f}));var r=t(107),o=t.n(r);function s(e,n,t,r="D"){return[...Array(n)].map((n,o)=>a(e,o,t,r))}function i(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e}function a(e,n,t,r){return o()(e).add(n,t).format(r)}function l(e,n,t="DD-MM-YYYY"){var r=o()(e,t).startOf("day");return o()(n,t).startOf("day").diff(r,"days")}function c(e,n){return e[n].row}function u(e,n,t="unit",r="DD-MM-YYYY"){return e.start=n.clone().add(e.column,t).format(r),e.end=n.clone().add(e.column+e.length,t).format(r),e}function d(e,n,t="DD-MM-YYYY"){var r=o()(e,t).startOf("day");return o()(n,t).startOf("day").diff(r,"days")}function m(){for(var e="#",n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function f(e){for(var n in e)return!1;return!0}},248:function(e,n,t){var r={"./af":111,"./af.js":111,"./ar":112,"./ar-dz":113,"./ar-dz.js":113,"./ar-kw":114,"./ar-kw.js":114,"./ar-ly":115,"./ar-ly.js":115,"./ar-ma":116,"./ar-ma.js":116,"./ar-sa":117,"./ar-sa.js":117,"./ar-tn":118,"./ar-tn.js":118,"./ar.js":112,"./az":119,"./az.js":119,"./be":120,"./be.js":120,"./bg":121,"./bg.js":121,"./bm":122,"./bm.js":122,"./bn":123,"./bn.js":123,"./bo":124,"./bo.js":124,"./br":125,"./br.js":125,"./bs":126,"./bs.js":126,"./ca":127,"./ca.js":127,"./cs":128,"./cs.js":128,"./cv":129,"./cv.js":129,"./cy":130,"./cy.js":130,"./da":131,"./da.js":131,"./de":132,"./de-at":133,"./de-at.js":133,"./de-ch":134,"./de-ch.js":134,"./de.js":132,"./dv":135,"./dv.js":135,"./el":136,"./el.js":136,"./en-au":137,"./en-au.js":137,"./en-ca":138,"./en-ca.js":138,"./en-gb":139,"./en-gb.js":139,"./en-ie":140,"./en-ie.js":140,"./en-il":141,"./en-il.js":141,"./en-in":142,"./en-in.js":142,"./en-nz":143,"./en-nz.js":143,"./en-sg":144,"./en-sg.js":144,"./eo":145,"./eo.js":145,"./es":146,"./es-do":147,"./es-do.js":147,"./es-us":148,"./es-us.js":148,"./es.js":146,"./et":149,"./et.js":149,"./eu":150,"./eu.js":150,"./fa":151,"./fa.js":151,"./fi":152,"./fi.js":152,"./fil":153,"./fil.js":153,"./fo":154,"./fo.js":154,"./fr":155,"./fr-ca":156,"./fr-ca.js":156,"./fr-ch":157,"./fr-ch.js":157,"./fr.js":155,"./fy":158,"./fy.js":158,"./ga":159,"./ga.js":159,"./gd":160,"./gd.js":160,"./gl":161,"./gl.js":161,"./gom-deva":162,"./gom-deva.js":162,"./gom-latn":163,"./gom-latn.js":163,"./gu":164,"./gu.js":164,"./he":165,"./he.js":165,"./hi":166,"./hi.js":166,"./hr":167,"./hr.js":167,"./hu":168,"./hu.js":168,"./hy-am":169,"./hy-am.js":169,"./id":170,"./id.js":170,"./is":171,"./is.js":171,"./it":172,"./it-ch":173,"./it-ch.js":173,"./it.js":172,"./ja":174,"./ja.js":174,"./jv":175,"./jv.js":175,"./ka":176,"./ka.js":176,"./kk":177,"./kk.js":177,"./km":178,"./km.js":178,"./kn":179,"./kn.js":179,"./ko":180,"./ko.js":180,"./ku":181,"./ku.js":181,"./ky":182,"./ky.js":182,"./lb":183,"./lb.js":183,"./lo":184,"./lo.js":184,"./lt":185,"./lt.js":185,"./lv":186,"./lv.js":186,"./me":187,"./me.js":187,"./mi":188,"./mi.js":188,"./mk":189,"./mk.js":189,"./ml":190,"./ml.js":190,"./mn":191,"./mn.js":191,"./mr":192,"./mr.js":192,"./ms":193,"./ms-my":194,"./ms-my.js":194,"./ms.js":193,"./mt":195,"./mt.js":195,"./my":196,"./my.js":196,"./nb":197,"./nb.js":197,"./ne":198,"./ne.js":198,"./nl":199,"./nl-be":200,"./nl-be.js":200,"./nl.js":199,"./nn":201,"./nn.js":201,"./oc-lnc":202,"./oc-lnc.js":202,"./pa-in":203,"./pa-in.js":203,"./pl":204,"./pl.js":204,"./pt":205,"./pt-br":206,"./pt-br.js":206,"./pt.js":205,"./ro":207,"./ro.js":207,"./ru":208,"./ru.js":208,"./sd":209,"./sd.js":209,"./se":210,"./se.js":210,"./si":211,"./si.js":211,"./sk":212,"./sk.js":212,"./sl":213,"./sl.js":213,"./sq":214,"./sq.js":214,"./sr":215,"./sr-cyrl":216,"./sr-cyrl.js":216,"./sr.js":215,"./ss":217,"./ss.js":217,"./sv":218,"./sv.js":218,"./sw":219,"./sw.js":219,"./ta":220,"./ta.js":220,"./te":221,"./te.js":221,"./tet":222,"./tet.js":222,"./tg":223,"./tg.js":223,"./th":224,"./th.js":224,"./tk":225,"./tk.js":225,"./tl-ph":226,"./tl-ph.js":226,"./tlh":227,"./tlh.js":227,"./tr":228,"./tr.js":228,"./tzl":229,"./tzl.js":229,"./tzm":230,"./tzm-latn":231,"./tzm-latn.js":231,"./tzm.js":230,"./ug-cn":232,"./ug-cn.js":232,"./uk":233,"./uk.js":233,"./ur":234,"./ur.js":234,"./uz":235,"./uz-latn":236,"./uz-latn.js":236,"./uz.js":235,"./vi":237,"./vi.js":237,"./x-pseudo":238,"./x-pseudo.js":238,"./yo":239,"./yo.js":239,"./zh-cn":240,"./zh-cn.js":240,"./zh-hk":241,"./zh-hk.js":241,"./zh-mo":242,"./zh-mo.js":242,"./zh-tw":243,"./zh-tw.js":243};function o(e){var n=s(e);return t(n)}function s(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=s,e.exports=o,o.id=248},261:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(2),o=t(0),s=t.n(o),i=t(109),a=(t(47),t(244));function l(e){const{bars:n,isEditing:t,setIsEditing:l,addBar:c,setBars:u}=Object(i.l)(i.i,[]),[d,m]=Object(o.useState)("");return s.a.createElement(s.a.Fragment,null,""!==d&&s.a.createElement("div",{className:"alert alert--success",role:"alert"},"You selected ",s.a.createElement("strong",null,d)),s.a.createElement(i.f,{columnTitles:e=>Object(a.a)(new Date,e,"days").map((e,n)=>s.a.createElement("div",{key:e,style:{background:"#12D3CF",height:"100%",textAlign:"center"},onClick:()=>{m(Object(a.g)(new Date,n,"days","dddd, MMMM Do YYYY, h:mm:ss a"))}},e)),mouseDownCell:e=>{const n=Object(i.e)(e.dimension,e.cell);c(n),l(!0)},mouseEnterCell:e=>{if(t){const t=Object(i.k)(n,e);u(t)}},mouseUpCell:()=>{const e=Object(i.g)(n);u(e),l(!1)}},({columnTitleHeight:e})=>n.map(n=>s.a.createElement(i.a,Object(r.a)({key:n.id},n,{style:{...n.style,...Object(i.h)(n.row,n.column,n.dimension,0,e)}})))))}},88:function(e,n,t){"use strict";t.r(n);var r=t(2),o=t(0),s=t.n(o),i=t(246),a=t(250),l=t(245),c=t(110),u=t(249),d=t(89),m=t.n(d),f=t(261);const j=[{title:s.a.createElement(s.a.Fragment,null,"Easy to Use"),imageUrl:"img/undraw_docusaurus_mountain.svg",description:s.a.createElement(s.a.Fragment,null,"Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly.")},{title:s.a.createElement(s.a.Fragment,null,"Powered by React"),imageUrl:"img/undraw_docusaurus_react.svg",description:s.a.createElement(s.a.Fragment,null,"Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer.")}];function h({imageUrl:e,title:n,description:t}){const r=Object(u.a)(e);return s.a.createElement("div",{className:Object(i.a)("col col--4",m.a.feature)},r&&s.a.createElement("div",{className:"text--center"},s.a.createElement("img",{className:m.a.featureImage,src:r,alt:n})),s.a.createElement("h3",null,n),s.a.createElement("p",null,t))}n.default=function(){const e=Object(c.a)(),{siteConfig:n={}}=e;return console.log(m.a),s.a.createElement(a.a,{title:"Docs for "+n.title,description:"Description will go into a meta tag in <head />"},s.a.createElement("header",{className:Object(i.a)("hero hero--primary",m.a.heroBanner)},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"hero__title"},n.title),s.a.createElement("p",{className:"hero__subtitle"},s.a.createElement("span",{style:{background:"red",padding:"10px",borderRadius:"10px"}},n.tagline)),s.a.createElement("div",{className:m.a.buttons},s.a.createElement(l.a,{className:Object(i.a)("button button--outline  button--lg",m.a.getStartedButton),to:Object(u.a)("docs/")},"Get Started")))),s.a.createElement("main",null,j&&j.length>0&&s.a.createElement("section",{className:m.a.features},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},j.map((e,n)=>s.a.createElement(h,Object(r.a)({key:n},e)))))),s.a.createElement(f.a,null)))}}}]);