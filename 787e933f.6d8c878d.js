(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return j}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,j=d["".concat(s,".").concat(m)]||d[m]||f[m]||i;return t?o.a.createElement(j,a(a({ref:n},l),{},{components:t})):o.a.createElement(j,a({ref:n},l))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=t[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},109:function(e,n,t){"use strict";t.d(n,"a",(function(){return S})),t.d(n,"b",(function(){return B})),t.d(n,"c",(function(){return P})),t.d(n,"d",(function(){return b})),t.d(n,"e",(function(){return Y})),t.d(n,"g",(function(){return y})),t.d(n,"h",(function(){return h})),t.d(n,"i",(function(){return T})),t.d(n,"j",(function(){return v})),t.d(n,"k",(function(){return z}));var r=t(0),o=t.n(r);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)([]),i=o[0],s=o[1];return Object(r.useEffect)((function(){if(Array.isArray(n[0]))s(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);s(e[0].apply(e,n))}}),[JSON.stringify(n)]),i}function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)(),i=o[0],s=o[1];return Object(r.useEffect)((function(){if("function"!=typeof n[0])throw new Error("useFunction takes first argument as a function");var e=n.splice(0,1);s(e[0].apply(e,n))}),[JSON.stringify(n)]),i}var c="_3TtXw",l="_2fzm0",u="_32f2G",d="_kbpmo",f="_2nfh4";function m(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}var j=function(e,n,t){return t>=e&&n>=t};function h(e,n,t,r,o){return void 0===r&&(r=0),void 0===o&&(o=0),{left:r+n*t,top:e*t+o}}function p(e,n,t){return Math.floor((n-t)/e)}function g(e,n){return Math.floor(n/e)}function v(e,n,t){return e.map((function(e){if(e.editing){var r=function(e,n){if(e.column>n.column||"right"===e.stick&&e.length>1){e.stick="right";var t={row:e.row,column:n.column,length:e.column-n.column+e.length};return i({},e,t)}e.stick="left";var r={row:e.row,column:e.column,length:n.column-e.column+1};return i({},e,r)}(e,n.cell);return"function"==typeof t&&(r=t(r)),r}return e}))}function y(e){return e.map((function(e){return e.editing?i({},e,{editing:!1}):e}))}function b(e){var n=[].concat(e);return e.filter((function(e){return e.editing})).forEach((function(e){var t=function(e,n){var t=i({},n);return[e.flatMap((function(e){if(e.id===n.id)return[];if(t.row===e.row){var r=e.column+1,o=t.column+1,i=e.column+e.length,s=t.column+t.length;if(j(r,i,o)||j(r,i,s)||j(o,s,i)||j(o,s,r)){var a=w(e,t),c=a[0],l=a[1];return t=l,c}var u=O(e,t),d=u[0],f=u[1];return t=f,d}var m=O(e,t),h=m[0],p=m[1];return t=p,h})),t]}(n,e),r=t[0],o=t[1];r.push(o),n=r})),n}var w=function(e,n){return(e=E(e)).collisions[n.id]="",(n=E(n)).collisions[e.id]="",[e,n]},E=function(e){return e.collisions||(e.collisions={}),e},O=function(e,n){return delete(e=E(e)).collisions[n.id],delete(n=E(n)).collisions[e.id],[e,n]},k="ADD",M="EDIT",D="DELETE",x="SET_BARS",C="SET_IS_EDITING";function T(e,n){switch(n.type){case x:return i({},e,{bars:n.payload});case M:var t=[].concat(e.bars),r=t.findIndex((function(e){return n.payload.id===e.id}));return t[r]=n.payload,i({},e,{bars:t});case k:var o=[].concat(e.bars);return o.push(n.payload),i({},e,{bars:o});case D:var s=[].concat(e.bars),a=s.findIndex((function(e){return n.payload.id===e.id}));return s.splice(a,1),i({},e,{bars:s});case C:return i({},e,{isEditing:n.payload})}}function N(e){return o.a.createElement("div",{className:e.isVisible?c:l,style:{width:e.width,height:e.dimension+"px",overflow:"hidden"}},e.children)}function z(e,n){var t=Object(r.useReducer)(e,{bars:n,isEditing:!1}),o=t[0],i=o.bars,s=o.isEditing,a=t[1];return{isEditing:s,setIsEditing:function(e){return a({payload:e,type:C})},bars:i,addBar:function(e){return a({payload:e,type:k})},editBar:function(e){return a({payload:e,type:M})},deleteBar:function(e){return a({payload:e,type:D})},setBars:function(e){return a({payload:e,type:x})}}}function S(e){return o.a.createElement("div",{role:"listitem",onDragStart:function(n){e.onDragStart(n,e)},onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},draggable:e.draggable,style:i({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:"flex",position:"absolute",zIndex:e.zIndex||"100"}),className:e.className},[].concat(Array(e.length)).map((function(n,t){var r=function(e,n,t,r,i){return 0===e?r||t[e]||o.a.createElement("div",null):n-1===e?i||t[n-1]||o.a.createElement("div",null):t[e]||o.a.createElement("div",null)}(t,e.length,e.content,e.firstContent,e.lastContent),s=Object.assign({width:e.dimension,height:e.dimension,pointerEvents:e.style.pointerEvents||"none"},r.props.style||{});return o.a.createElement(o.a.Fragment,{key:t},o.a.cloneElement(r,i({},r.props,{style:s}),r.props.children))})),e.children)}function I(e){return o.a.createElement("div",{role:"columnheader",className:e.columnTitles.length>0?u:d,style:{height:e.dimension}},"ltr"===e.dir&&o.a.createElement(N,{isVisible:e.showCanton,width:e.rowTitleWidth,dimension:e.dimension}),e.columnTitles.map((function(n,t){return o.a.createElement("div",{"aria-colindex":t,key:t,style:{width:e.dimension+"px",height:e.dimension+"px"},className:c},n)})),"rtl"===e.dir&&o.a.createElement(N,{isVisible:e.showCanton,width:e.rowTitleWidth,dimension:e.dimension}))}function A(e){return o.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:function(e){e.preventDefault()},onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className||c,onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:{overflow:"hidden",width:e.dimension+"px",height:e.dimension+"px"}},e.children)}function B(e){return o.a.createElement("div",{style:e.style},e.children)}function P(e){return o.a.createElement("span",{style:e.style,className:f},e.children)}function L(e){var n=a(g,e.dimension,e.height),t=a(p,e.dimension,e.width,e.rowTitleWidth),r=s(e.rowTitles),c=s(e.columnTitles,t);return o.a.createElement("div",{id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,style:i({},e.style,{position:"relative"})},o.a.createElement(I,{columnTitles:c,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,showCanton:r.length>0,dir:e.dir}),[].concat(Array(n)).map((function(n,i){return o.a.createElement("div",{role:"rowgroup",className:u,key:i,style:{height:e.dimension,display:"flex"}},"ltr"===e.dir&&o.a.createElement(N,{isVisible:r.length>0,width:e.rowTitleWidth,dimension:e.dimension},r[i]),[].concat(Array(t)).map((function(n,t){return o.a.createElement(A,{key:"r"+i+"c"+t,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:e.dimension,className:e.cellClassName,column:t,row:i},e.content["r"+i+"c"+t])})),"rtl"===e.dir&&o.a.createElement(N,{isVisible:r.length>0,width:e.rowTitleWidth,dimension:e.dimension},r[i]))})),o.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:n,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,columnTitleHeight:c.length>0?e.dimension:0}),Array.isArray(e.children)&&e.children))}function Y(e,n){return i({id:m(),length:1,dimension:e,editing:!0},n)}S.defaultProps={style:{},dimension:20,onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onContextMenu:function(){},onMouseEnter:function(){},onMouseLeave:function(){},length:1,content:{}},B.defaultProps={style:{userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"}},L.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,dir:"ltr",mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){}},n.f=L},244:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"g",(function(){return a})),t.d(n,"f",(function(){return c})),t.d(n,"i",(function(){return l})),t.d(n,"e",(function(){return u})),t.d(n,"h",(function(){return d})),t.d(n,"b",(function(){return f})),t.d(n,"d",(function(){return m}));var r=t(107),o=t.n(r);function i(e,n,t,r){return void 0===r&&(r="D"),[].concat(Array(n)).map((function(n,o){return a(e,o,t,r)}))}function s(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e}function a(e,n,t,r){return o()(e).add(n,t).format(r)}function c(e,n,t){void 0===t&&(t="DD-MM-YYYY");var r=o()(e,t).startOf("day");return o()(n,t).startOf("day").diff(r,"days")}function l(e,n){return e[n].row}function u(e,n,t,r){return void 0===t&&(t="unit"),void 0===r&&(r="DD-MM-YYYY"),e.start=n.clone().add(e.column,t).format(r),e.end=n.clone().add(e.column+e.length,t).format(r),e}function d(e,n,t){void 0===t&&(t="DD-MM-YYYY");var r=o()(e,t).startOf("day");return o()(n,t).startOf("day").diff(r,"days")}function f(){for(var e="#",n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function m(e){for(var n in e)return!1;return!0}},247:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"d",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"b",(function(){return a}));var r=[{draggable:!0,id:"xx",length:13,row:2,column:8,className:"default-bar",children:"This is a tag"},{id:"xy",length:4,row:5,column:12,style:{background:"red"}}],o=[{id:1,start:"29-07-2020",end:"04-08-2020",guestName:"Trevor Mathis",roomId:4},{id:3,start:"03-08-2020",end:"11-08-2020",guestName:"Nell McKinney",roomId:10},{id:4,start:"30-07-2020",end:"01-09-2020",guestName:"Max Lindsey",roomId:11},{id:2,start:"15-08-2020",end:"02-09-2020",guestName:"Ollie Sherman",roomId:10}],i={4:{id:4,name:"Deluxe",hosts:"4 People",row:3},10:{id:10,name:"Basic",hosts:"2 People",row:8},11:{id:11,name:"Basic",hosts:"2 People",row:6}},s=["Max Lindsey","Jesus Myers","Julian Norton","Nell McKinney","Trevor Mathis","Virginia Parsons","Ollie Sherman","Beulah McBride","Sylvia Griffin","Jordan Holland","Elsie Schwartz","Leon Harrington","Jorge Vega","Lina Lucas","George Daniel","Douglas Simmons","Mary Willis","Jacob Stone","James Greer","Luke Foster","Nell Dunn","Lily Wallace","Leonard Glover","Francis Hodges","Clifford Campbell"],a=["\u05d0\u05d1\u05d2\u05d9\u05dc","\u05d0\u05d1\u05d9\u05d0\u05d5\u05e8","\u05d0\u05d1\u05d9\u05d0\u05dc","\u05d0\u05dc\u05d9\u05e2\u05d3","\u05d0\u05dc\u05d9\u05d0\u05dc"]},248:function(e,n,t){var r={"./af":111,"./af.js":111,"./ar":112,"./ar-dz":113,"./ar-dz.js":113,"./ar-kw":114,"./ar-kw.js":114,"./ar-ly":115,"./ar-ly.js":115,"./ar-ma":116,"./ar-ma.js":116,"./ar-sa":117,"./ar-sa.js":117,"./ar-tn":118,"./ar-tn.js":118,"./ar.js":112,"./az":119,"./az.js":119,"./be":120,"./be.js":120,"./bg":121,"./bg.js":121,"./bm":122,"./bm.js":122,"./bn":123,"./bn.js":123,"./bo":124,"./bo.js":124,"./br":125,"./br.js":125,"./bs":126,"./bs.js":126,"./ca":127,"./ca.js":127,"./cs":128,"./cs.js":128,"./cv":129,"./cv.js":129,"./cy":130,"./cy.js":130,"./da":131,"./da.js":131,"./de":132,"./de-at":133,"./de-at.js":133,"./de-ch":134,"./de-ch.js":134,"./de.js":132,"./dv":135,"./dv.js":135,"./el":136,"./el.js":136,"./en-au":137,"./en-au.js":137,"./en-ca":138,"./en-ca.js":138,"./en-gb":139,"./en-gb.js":139,"./en-ie":140,"./en-ie.js":140,"./en-il":141,"./en-il.js":141,"./en-in":142,"./en-in.js":142,"./en-nz":143,"./en-nz.js":143,"./en-sg":144,"./en-sg.js":144,"./eo":145,"./eo.js":145,"./es":146,"./es-do":147,"./es-do.js":147,"./es-us":148,"./es-us.js":148,"./es.js":146,"./et":149,"./et.js":149,"./eu":150,"./eu.js":150,"./fa":151,"./fa.js":151,"./fi":152,"./fi.js":152,"./fil":153,"./fil.js":153,"./fo":154,"./fo.js":154,"./fr":155,"./fr-ca":156,"./fr-ca.js":156,"./fr-ch":157,"./fr-ch.js":157,"./fr.js":155,"./fy":158,"./fy.js":158,"./ga":159,"./ga.js":159,"./gd":160,"./gd.js":160,"./gl":161,"./gl.js":161,"./gom-deva":162,"./gom-deva.js":162,"./gom-latn":163,"./gom-latn.js":163,"./gu":164,"./gu.js":164,"./he":165,"./he.js":165,"./hi":166,"./hi.js":166,"./hr":167,"./hr.js":167,"./hu":168,"./hu.js":168,"./hy-am":169,"./hy-am.js":169,"./id":170,"./id.js":170,"./is":171,"./is.js":171,"./it":172,"./it-ch":173,"./it-ch.js":173,"./it.js":172,"./ja":174,"./ja.js":174,"./jv":175,"./jv.js":175,"./ka":176,"./ka.js":176,"./kk":177,"./kk.js":177,"./km":178,"./km.js":178,"./kn":179,"./kn.js":179,"./ko":180,"./ko.js":180,"./ku":181,"./ku.js":181,"./ky":182,"./ky.js":182,"./lb":183,"./lb.js":183,"./lo":184,"./lo.js":184,"./lt":185,"./lt.js":185,"./lv":186,"./lv.js":186,"./me":187,"./me.js":187,"./mi":188,"./mi.js":188,"./mk":189,"./mk.js":189,"./ml":190,"./ml.js":190,"./mn":191,"./mn.js":191,"./mr":192,"./mr.js":192,"./ms":193,"./ms-my":194,"./ms-my.js":194,"./ms.js":193,"./mt":195,"./mt.js":195,"./my":196,"./my.js":196,"./nb":197,"./nb.js":197,"./ne":198,"./ne.js":198,"./nl":199,"./nl-be":200,"./nl-be.js":200,"./nl.js":199,"./nn":201,"./nn.js":201,"./oc-lnc":202,"./oc-lnc.js":202,"./pa-in":203,"./pa-in.js":203,"./pl":204,"./pl.js":204,"./pt":205,"./pt-br":206,"./pt-br.js":206,"./pt.js":205,"./ro":207,"./ro.js":207,"./ru":208,"./ru.js":208,"./sd":209,"./sd.js":209,"./se":210,"./se.js":210,"./si":211,"./si.js":211,"./sk":212,"./sk.js":212,"./sl":213,"./sl.js":213,"./sq":214,"./sq.js":214,"./sr":215,"./sr-cyrl":216,"./sr-cyrl.js":216,"./sr.js":215,"./ss":217,"./ss.js":217,"./sv":218,"./sv.js":218,"./sw":219,"./sw.js":219,"./ta":220,"./ta.js":220,"./te":221,"./te.js":221,"./tet":222,"./tet.js":222,"./tg":223,"./tg.js":223,"./th":224,"./th.js":224,"./tk":225,"./tk.js":225,"./tl-ph":226,"./tl-ph.js":226,"./tlh":227,"./tlh.js":227,"./tr":228,"./tr.js":228,"./tzl":229,"./tzl.js":229,"./tzm":230,"./tzm-latn":231,"./tzm-latn.js":231,"./tzm.js":230,"./ug-cn":232,"./ug-cn.js":232,"./uk":233,"./uk.js":233,"./ur":234,"./ur.js":234,"./uz":235,"./uz-latn":236,"./uz-latn.js":236,"./uz.js":235,"./vi":237,"./vi.js":237,"./x-pseudo":238,"./x-pseudo.js":238,"./yo":239,"./yo.js":239,"./zh-cn":240,"./zh-cn.js":240,"./zh-hk":241,"./zh-hk.js":241,"./zh-mo":242,"./zh-mo.js":242,"./zh-tw":243,"./zh-tw.js":243};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=248},98:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return h})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return g})),t.d(n,"default",(function(){return y}));var r=t(2),o=t(6),i=t(0),s=t.n(i),a=t(108),c=t(109),l=(t(47),t(244)),u=t(247),d=t(107),f=t.n(d),m=(t(49),function(e){return s.a.createElement("div",{onMouseDown:function(){e.editBar(Object.assign({},e.bar,{stick:"right",editing:!0})),e.setIsEditing(!0)},className:"first_cell",style:Object.assign({borderLeft:"3px solid red",zIndex:"100000"},e.style)}," ")});function j(e){var n=Object(c.k)(c.i,[]),t=n.bars,o=n.isEditing,a=n.setIsEditing,d=n.addBar,j=n.setBars,h=n.editBar,p=Object(i.useState)(f()("01-08-2020","DD-MM-YYYY"))[0];return Object(i.useEffect)((function(){var e=u.d.map((function(e){return e.start&&e.end&&(e.length=Object(l.h)(e.start,e.end)),e.start&&e.end&&(e.column=Object(l.f)(p,e.start)),e.roomId&&(e.row=Object(l.i)(u.e,e.roomId)),e}));j(e)}),[u.d]),s.a.createElement(c.f,{mouseDownCell:function(e){var n=Object(c.e)(e.dimension,e.cell);d(n),a(!0)},mouseEnterCell:function(e){if(o){var n=Object(c.j)(t,e,(function(e){return Object(l.e)(e,p)}));n=Object(c.d)(n),j(n)}},mouseUpCell:function(){var e=Object(c.g)(t);j(e),a(!1)}},(function(e){var n=e.dimension,o=e.columnCount;return t.map((function(e){return e.column<0&&(e.leftOverflow=!0,e.length=e.length+e.column,e.column=0),o<e.column+e.length&&(e.rightOverflow=!0,e.length=o-e.column),s.a.createElement(c.a,Object(r.a)({key:e.id},e,{style:Object.assign({overflow:"hidden",pointerEvents:e.editing?"none":"auto"},e.style,Object(c.h)(e.row,e.column,n)),firstContent:s.a.createElement(m,{bar:e,setIsEditing:a,editBar:h}),lastContent:e.rightOverflow?s.a.createElement("div",{style:{background:"purple"}}):s.a.createElement("div",{style:{background:"#F2545B"}}),content:{3:s.a.createElement("div",{onClick:function(){console.log("you clicked the red one")},style:{background:"red",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center"}},"\xa9")}}),s.a.createElement(c.c,{style:{pointerEvents:"none",color:"#fff",width:n*e.length}},e.guestName," ",e.collisions&&Object.keys(e.collisions).length>0&&s.a.createElement("span",null,"Collision detected")))}))}))}var h={id:"baradvanced",title:"Bar Advanced",sidebar_label:"Bar Advanced"},p={unversionedId:"baradvanced",id:"baradvanced",isDocsHomePage:!1,title:"Bar Advanced",description:"This is the most basic example.",source:"@site/docs\\baradvanced.md",permalink:"/react-reserver/docs/baradvanced",sidebar_label:"Bar Advanced",sidebar:"docs",previous:{title:"Date Overflow",permalink:"/react-reserver/docs/dateoverflow"},next:{title:"Grid Content",permalink:"/react-reserver/docs/content"}},g=[],v={rightToc:g};function y(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},v,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This is the most basic example.\nA grid, 500px wide and 500px high is created, since those are the default props.\nClick and drag on any square in the grid to create a new bar."),Object(a.b)(j,{mdxType:"AdvancedBars"}))}y.isMDXComponent=!0}}]);