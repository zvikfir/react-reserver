(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return j}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,j=d["".concat(s,".").concat(m)]||d[m]||f[m]||i;return t?o.a.createElement(j,a(a({ref:n},c),{},{components:t})):o.a.createElement(j,a({ref:n},c))}));function j(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},109:function(e,n,t){"use strict";t.d(n,"a",(function(){return N})),t.d(n,"b",(function(){return P})),t.d(n,"c",(function(){return A})),t.d(n,"d",(function(){return y})),t.d(n,"e",(function(){return I})),t.d(n,"g",(function(){return b})),t.d(n,"h",(function(){return j})),t.d(n,"i",(function(){return x})),t.d(n,"j",(function(){return h})),t.d(n,"k",(function(){return _}));var r=t(0),o=t.n(r);function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)([]),i=o[0],s=o[1];return Object(r.useEffect)((function(){if(Array.isArray(n[0]))s(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);s(e[0].apply(e,n))}}),[JSON.stringify(n)]),i}function s(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)(),i=o[0],s=o[1];return Object(r.useEffect)((function(){if("function"!=typeof n[0])throw new Error("useFunction takes first argument as a function");var e=n.splice(0,1);s(e[0].apply(e,n))}),[JSON.stringify(n)]),i}var a="_style__row_cell__3TtXw",l="_style__row_cell_invisible__2fzm0",c="_style__row__32f2G",u="_style__row_invisible__kbpmo",d="_style__tag_content__2nfh4";function f(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}var m=function(e,n,t){return t>=e&&n>=t};function j(e,n,t,r,o){return void 0===r&&(r=0),void 0===o&&(o=0),{left:r+n*t,top:e*t+o}}function g(e,n,t){return Math.floor((n-t)/e)}function p(e,n){return Math.floor(n/e)}function h(e,n,t){return e.map((function(e){if(e.editing){var r=function(e,n){if(e.column>n.column||"right"===e.stick&&e.length>1){e.stick="right";var t={row:e.row,column:n.column,length:e.column-n.column+e.length};return Object.assign({},e,t)}e.stick="left";var r={row:e.row,column:e.column,length:n.column-e.column+1};return Object.assign({},e,r)}(e,n.cell);return"function"==typeof t&&(r=t(r)),r}return e}))}function b(e){return e.map((function(e){return e.editing?Object.assign({},e,{editing:!1}):e}))}function y(e){var n=[].concat(e);return e.filter((function(e){return e.editing})).forEach((function(e){var t=function(e,n){var t=Object.assign({},n);return[e.flatMap((function(e){if(e.id===n.id)return[];if(t.row===e.row){var r=e.column+1,o=t.column+1,i=e.column+e.length,s=t.column+t.length;if(m(r,i,o)||m(r,i,s)||m(o,s,i)||m(o,s,r)){var a=v(e,t),l=a[0],c=a[1];return t=c,l}var u=O(e,t),d=u[0],f=u[1];return t=f,d}var j=O(e,t),g=j[0],p=j[1];return t=p,g})),t]}(n,e),r=t[0],o=t[1];r.push(o),n=r})),n}var v=function(e,n){return(e=w(e)).collisions[n.id]="",(n=w(n)).collisions[e.id]="",[e,n]},w=function(e){return e.collisions||(e.collisions={}),e},O=function(e,n){return delete(e=w(e)).collisions[n.id],delete(n=w(n)).collisions[e.id],[e,n]},E="ADD",k="EDIT",D="DELETE",M="SET_BARS",C="SET_IS_EDITING";function x(e,n){switch(n.type){case M:return Object.assign({},e,{bars:n.payload});case k:var t=[].concat(e.bars),r=t.findIndex((function(e){return n.payload.id===e.id}));return t[r]=n.payload,Object.assign({},e,{bars:t});case E:var o=[].concat(e.bars);return o.push(n.payload),Object.assign({},e,{bars:o});case D:var i=[].concat(e.bars),s=i.findIndex((function(e){return n.payload.id===e.id}));return i.splice(s,1),Object.assign({},e,{bars:i});case C:return Object.assign({},e,{isEditing:n.payload})}}function T(e){return o.a.createElement("div",{className:e.isVisible?a:l,style:{width:e.width,height:e.dimension+"px",overflow:"hidden"}},e.children)}function _(e,n){var t=Object(r.useReducer)(e,{bars:n,isEditing:!1}),o=t[0],i=o.bars,s=o.isEditing,a=t[1];return{isEditing:s,setIsEditing:function(e){return a({payload:e,type:C})},bars:i,addBar:function(e){return a({payload:e,type:E})},editBar:function(e){return a({payload:e,type:k})},deleteBar:function(e){return a({payload:e,type:D})},setBars:function(e){return a({payload:e,type:M})}}}function N(e){return o.a.createElement("div",{role:"listitem",onDragStart:function(n){e.onDragStart(n,e)},onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},draggable:e.draggable,style:Object.assign({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:"flex",position:"absolute",zIndex:e.zIndex||"100"}),className:e.className},[].concat(Array(e.length)).map((function(n,t){var r=function(e,n,t,r,i){return 0===e?r||t[e]||o.a.createElement("div",null):n-1===e?i||t[n-1]||o.a.createElement("div",null):t[e]||o.a.createElement("div",null)}(t,e.length,e.content,e.firstContent,e.lastContent),i=Object.assign({width:e.dimension,height:e.dimension,pointerEvents:e.style.pointerEvents||"none"},r.props.style||{});return o.a.createElement(o.a.Fragment,{key:t},o.a.cloneElement(r,Object.assign({},r.props,{style:i}),r.props.children))})),e.children)}function S(e){return o.a.createElement("div",{role:"columnheader",className:e.columnTitles.length>0?c:u,style:{height:e.dimension}},"ltr"===e.dir&&o.a.createElement(T,{isVisible:e.showCanton,width:e.rowTitleWidth,dimension:e.dimension}),e.columnTitles.map((function(n,t){return o.a.createElement("div",{"aria-colindex":t,key:t,style:{width:e.dimension+"px",height:e.dimension+"px"},className:a},n)})),"rtl"===e.dir&&o.a.createElement(T,{isVisible:e.showCanton,width:e.rowTitleWidth,dimension:e.dimension}))}function z(e){return o.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:function(e){e.preventDefault()},onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className||a,onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:{overflow:"hidden",width:e.dimension+"px",height:e.dimension+"px"}},e.children)}function P(e){return o.a.createElement("div",{style:e.style},e.children)}function A(e){return o.a.createElement("span",{style:e.style,className:d},e.children)}function L(e){var n=s(p,e.dimension,e.height),t=s(g,e.dimension,e.width,e.rowTitleWidth),r=i(e.rowTitles),a=i(e.columnTitles,t);return o.a.createElement("div",{id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,style:Object.assign({},e.style,{position:"relative"})},o.a.createElement(S,{columnTitles:a,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,showCanton:r.length>0,dir:e.dir}),[].concat(Array(n)).map((function(n,i){return o.a.createElement("div",{role:"rowgroup",className:c,key:i,style:{height:e.dimension,display:"flex"}},"ltr"===e.dir&&o.a.createElement(T,{isVisible:r.length>0,width:e.rowTitleWidth,dimension:e.dimension},r[i]),[].concat(Array(t)).map((function(n,t){return o.a.createElement(z,{key:"r"+i+"c"+t,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:e.dimension,className:e.cellClassName,column:t,row:i},e.content["r"+i+"c"+t])})),"rtl"===e.dir&&o.a.createElement(T,{isVisible:r.length>0,width:e.rowTitleWidth,dimension:e.dimension},r[i]))})),o.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:n,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,columnTitleHeight:a.length>0?e.dimension:0}),Array.isArray(e.children)&&e.children))}function I(e,n){return Object.assign({id:f(),length:1,dimension:e,editing:!0},n)}N.defaultProps={style:{},dimension:20,onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onContextMenu:function(){},onMouseEnter:function(){},onMouseLeave:function(){},length:1,content:{}},P.defaultProps={style:{userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"}},L.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,dir:"ltr",mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){}},n.f=L},244:function(e,n,t){"use strict";t.d(n,"a",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"g",(function(){return a})),t.d(n,"f",(function(){return l})),t.d(n,"i",(function(){return c})),t.d(n,"e",(function(){return u})),t.d(n,"h",(function(){return d})),t.d(n,"b",(function(){return f})),t.d(n,"d",(function(){return m}));var r=t(107),o=t.n(r);function i(e,n,t,r="D"){return[...Array(n)].map((n,o)=>a(e,o,t,r))}function s(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e))+e}function a(e,n,t,r){return o()(e).add(n,t).format(r)}function l(e,n,t="DD-MM-YYYY"){var r=o()(e,t).startOf("day");return o()(n,t).startOf("day").diff(r,"days")}function c(e,n){return e[n].row}function u(e,n,t="unit",r="DD-MM-YYYY"){return e.start=n.clone().add(e.column,t).format(r),e.end=n.clone().add(e.column+e.length,t).format(r),e}function d(e,n,t="DD-MM-YYYY"){var r=o()(e,t).startOf("day");return o()(n,t).startOf("day").diff(r,"days")}function f(){for(var e="#",n=0;n<6;n++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function m(e){for(var n in e)return!1;return!0}},247:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"d",(function(){return o})),t.d(n,"e",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"b",(function(){return a}));var r=[{draggable:!0,id:"xx",length:13,row:2,column:8,className:"default-bar",children:"This is a tag"},{id:"xy",length:4,row:5,column:12,style:{background:"red"}}],o=[{id:1,start:"29-07-2020",end:"04-08-2020",guestName:"Trevor Mathis",roomId:4},{id:3,start:"03-08-2020",end:"11-08-2020",guestName:"Nell McKinney",roomId:10},{id:4,start:"30-07-2020",end:"01-09-2020",guestName:"Max Lindsey",roomId:11},{id:2,start:"15-08-2020",end:"02-09-2020",guestName:"Ollie Sherman",roomId:10}],i={4:{id:4,name:"Deluxe",hosts:"4 People",row:3},10:{id:10,name:"Basic",hosts:"2 People",row:8},11:{id:11,name:"Basic",hosts:"2 People",row:6}},s=["Max Lindsey","Jesus Myers","Julian Norton","Nell McKinney","Trevor Mathis","Virginia Parsons","Ollie Sherman","Beulah McBride","Sylvia Griffin","Jordan Holland","Elsie Schwartz","Leon Harrington","Jorge Vega","Lina Lucas","George Daniel","Douglas Simmons","Mary Willis","Jacob Stone","James Greer","Luke Foster","Nell Dunn","Lily Wallace","Leonard Glover","Francis Hodges","Clifford Campbell"],a=["\u05d0\u05d1\u05d2\u05d9\u05dc","\u05d0\u05d1\u05d9\u05d0\u05d5\u05e8","\u05d0\u05d1\u05d9\u05d0\u05dc","\u05d0\u05dc\u05d9\u05e2\u05d3","\u05d0\u05dc\u05d9\u05d0\u05dc"]},248:function(e,n,t){var r={"./af":111,"./af.js":111,"./ar":112,"./ar-dz":113,"./ar-dz.js":113,"./ar-kw":114,"./ar-kw.js":114,"./ar-ly":115,"./ar-ly.js":115,"./ar-ma":116,"./ar-ma.js":116,"./ar-sa":117,"./ar-sa.js":117,"./ar-tn":118,"./ar-tn.js":118,"./ar.js":112,"./az":119,"./az.js":119,"./be":120,"./be.js":120,"./bg":121,"./bg.js":121,"./bm":122,"./bm.js":122,"./bn":123,"./bn.js":123,"./bo":124,"./bo.js":124,"./br":125,"./br.js":125,"./bs":126,"./bs.js":126,"./ca":127,"./ca.js":127,"./cs":128,"./cs.js":128,"./cv":129,"./cv.js":129,"./cy":130,"./cy.js":130,"./da":131,"./da.js":131,"./de":132,"./de-at":133,"./de-at.js":133,"./de-ch":134,"./de-ch.js":134,"./de.js":132,"./dv":135,"./dv.js":135,"./el":136,"./el.js":136,"./en-au":137,"./en-au.js":137,"./en-ca":138,"./en-ca.js":138,"./en-gb":139,"./en-gb.js":139,"./en-ie":140,"./en-ie.js":140,"./en-il":141,"./en-il.js":141,"./en-in":142,"./en-in.js":142,"./en-nz":143,"./en-nz.js":143,"./en-sg":144,"./en-sg.js":144,"./eo":145,"./eo.js":145,"./es":146,"./es-do":147,"./es-do.js":147,"./es-us":148,"./es-us.js":148,"./es.js":146,"./et":149,"./et.js":149,"./eu":150,"./eu.js":150,"./fa":151,"./fa.js":151,"./fi":152,"./fi.js":152,"./fil":153,"./fil.js":153,"./fo":154,"./fo.js":154,"./fr":155,"./fr-ca":156,"./fr-ca.js":156,"./fr-ch":157,"./fr-ch.js":157,"./fr.js":155,"./fy":158,"./fy.js":158,"./ga":159,"./ga.js":159,"./gd":160,"./gd.js":160,"./gl":161,"./gl.js":161,"./gom-deva":162,"./gom-deva.js":162,"./gom-latn":163,"./gom-latn.js":163,"./gu":164,"./gu.js":164,"./he":165,"./he.js":165,"./hi":166,"./hi.js":166,"./hr":167,"./hr.js":167,"./hu":168,"./hu.js":168,"./hy-am":169,"./hy-am.js":169,"./id":170,"./id.js":170,"./is":171,"./is.js":171,"./it":172,"./it-ch":173,"./it-ch.js":173,"./it.js":172,"./ja":174,"./ja.js":174,"./jv":175,"./jv.js":175,"./ka":176,"./ka.js":176,"./kk":177,"./kk.js":177,"./km":178,"./km.js":178,"./kn":179,"./kn.js":179,"./ko":180,"./ko.js":180,"./ku":181,"./ku.js":181,"./ky":182,"./ky.js":182,"./lb":183,"./lb.js":183,"./lo":184,"./lo.js":184,"./lt":185,"./lt.js":185,"./lv":186,"./lv.js":186,"./me":187,"./me.js":187,"./mi":188,"./mi.js":188,"./mk":189,"./mk.js":189,"./ml":190,"./ml.js":190,"./mn":191,"./mn.js":191,"./mr":192,"./mr.js":192,"./ms":193,"./ms-my":194,"./ms-my.js":194,"./ms.js":193,"./mt":195,"./mt.js":195,"./my":196,"./my.js":196,"./nb":197,"./nb.js":197,"./ne":198,"./ne.js":198,"./nl":199,"./nl-be":200,"./nl-be.js":200,"./nl.js":199,"./nn":201,"./nn.js":201,"./oc-lnc":202,"./oc-lnc.js":202,"./pa-in":203,"./pa-in.js":203,"./pl":204,"./pl.js":204,"./pt":205,"./pt-br":206,"./pt-br.js":206,"./pt.js":205,"./ro":207,"./ro.js":207,"./ru":208,"./ru.js":208,"./sd":209,"./sd.js":209,"./se":210,"./se.js":210,"./si":211,"./si.js":211,"./sk":212,"./sk.js":212,"./sl":213,"./sl.js":213,"./sq":214,"./sq.js":214,"./sr":215,"./sr-cyrl":216,"./sr-cyrl.js":216,"./sr.js":215,"./ss":217,"./ss.js":217,"./sv":218,"./sv.js":218,"./sw":219,"./sw.js":219,"./ta":220,"./ta.js":220,"./te":221,"./te.js":221,"./tet":222,"./tet.js":222,"./tg":223,"./tg.js":223,"./th":224,"./th.js":224,"./tk":225,"./tk.js":225,"./tl-ph":226,"./tl-ph.js":226,"./tlh":227,"./tlh.js":227,"./tr":228,"./tr.js":228,"./tzl":229,"./tzl.js":229,"./tzm":230,"./tzm-latn":231,"./tzm-latn.js":231,"./tzm.js":230,"./ug-cn":232,"./ug-cn.js":232,"./uk":233,"./uk.js":233,"./ur":234,"./ur.js":234,"./uz":235,"./uz-latn":236,"./uz-latn.js":236,"./uz.js":235,"./vi":237,"./vi.js":237,"./x-pseudo":238,"./x-pseudo.js":238,"./yo":239,"./yo.js":239,"./zh-cn":240,"./zh-cn.js":240,"./zh-hk":241,"./zh-hk.js":241,"./zh-mo":242,"./zh-mo.js":242,"./zh-tw":243,"./zh-tw.js":243};function o(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=i,e.exports=o,o.id=248},251:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}));var r=t(0),o=t.n(r);function i(e){return o.a.createElement("div",{className:e.className,style:{display:e.visible?"block":"none",position:"absolute",left:e.left,top:e.top,zIndex:e.zIndex||1e4}},o.a.createElement("ul",null," ",e.children))}const s=e=>o.a.createElement("li",{onClick:e.onClick},e.children);i.defaultProps={visible:!1,left:0,top:0}},96:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return f})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return g}));var r=t(2),o=t(0),i=t.n(o),s=t(108),a=t(109),l=t(247),c=(t(244),t(251));t(48);function u(e){var n=Object(o.useState)({r0c0:i.a.createElement("span",{style:{background:"green",width:"20px",height:"20px",display:"block"}}),r2c1:i.a.createElement("span",{style:{fontSize:"10px"}},"150")}),t=n[0],s=(n[1],Object(o.useState)(["Golf Cart 1",null,"Golf Cart 2"])),u=s[0],d=s[1],f=Object(a.k)(a.i,l.a),m=f.addBar,j=f.editBar,g=(f.isEditing,f.deleteBar),p=f.bars,h=f.setBars,b=Object(o.useState)({}),y=b[0],v=b[1],w=Object(o.useState)({visibile:!1,top:0,left:0}),O=w[0],E=w[1],k=Object(o.useState)(80)[0],D=Object(o.useState)(500)[0],M=Object(o.useState)(25)[0];return console.log(p),i.a.createElement("div",null,i.a.createElement(a.f,{style:{display:"inline-block"},rowTitles:function(){return u.map((function(e,n){return null===e?null:i.a.createElement("button",{onClick:function(){var e=[].concat(u);e.push("asd"),d(e)},style:{background:"orange"}},n+1,e)}))},rowTitleWidth:k,columnTitles:function(e){console.log();for(var n=[],t=new Date,r=0;r<e;r++){var o=t.getDate();n.push(o),t.setDate(o+1)}return n},mouseLeaveGrid:function(){},mouseUpCell:function(e){var n=p.map((function(e){return e.editing?Object.assign({},e,{editing:!1}):e}));h(n)},mouseEnterCell:function(e){console.log(p);var n=Object(a.j)(p,e);console.log(n),h(n)},mouseDownCell:function(e){console.log(e);var n=Object(a.e)(e.dimension,e.cell);m(n)},width:"undefined"!=typeof window&&document.documentElement.clientWidth,mouseDropCell:function(e){var n,t;n=e.cell,t=p.filter((function(e){return e.editing})),console.log(t),t.forEach((function(e){console.log("move",n);var t=Object.assign({},e,n,{editing:!1});console.log("n",t),j(t)}))},mouseDragOverCell:function(e){var n;n=e.cell,p.filter((function(e){return e.dragging})).forEach((function(e){var t=Object.assign({},e,n,{editing:!1});j(t)}))},height:D,content:t,dimension:M},(function(e){var n=e.rowCount,t=e.rowTitleWidth,o=e.dimension;return p.map((function(e){return n>e.row&&i.a.createElement(a.a,Object(r.a)({key:e.id},e,{dimension:o,onDragStart:function(){j(Object.assign({},e,{dragging:!0}))},onContextMenu:function(n){n.preventDefault(),v(e),E({visible:!0,top:n.clientY,left:n.clientX})},onMouseOver:function(){},style:Object.assign({},e.style,Object(a.h)(e.row,e.column,o,t))}),i.a.createElement("span",{style:{position:"absolute"}},e.children,e.collisions&&Object.keys(e.collisions).length>0&&i.a.createElement("span",null,"Collision detected")))}))})),i.a.createElement(c.b,Object(r.a)({className:"cmenu"},O),i.a.createElement(c.a,{onClick:function(){j(Object.assign({},y,{draggable:!y.draggable})),E({visibile:!1})}},y.draggable?"Disable":"Enable"," Drag"),i.a.createElement(c.a,{onClick:function(){g(y),E({visibile:!1})}},"Delete")))}const d={id:"full",title:"Containes All Features",sidebar_label:"Full"},f={unversionedId:"full",id:"full",isDocsHomePage:!1,title:"Containes All Features",description:"This is the most basic example.",source:"@site/docs\\full.md",permalink:"/react-reserver/docs/full",sidebar_label:"Full",sidebar:"docs",previous:{title:"Right To Left",permalink:"/react-reserver/docs/righttoleft"},next:{title:"Reserver",permalink:"/react-reserver/docs/reserver"}},m=[],j={rightToc:m};function g({components:e,...n}){return Object(s.b)("wrapper",Object(r.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(s.b)("p",null,"This is the most basic example.\nA grid, 500px wide and 500px high is created, since those are the default props.\nClick and drag on any square in the grid to create a new bar."),Object(s.b)(u,{mdxType:"Full"}))}g.isMDXComponent=!0}}]);