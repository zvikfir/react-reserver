(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{113:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=o.a.createContext({}),u=function(e){var n=o.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return o.a.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,p=d["".concat(a,".").concat(m)]||d[m]||f[m]||i;return t?o.a.createElement(p,s(s({ref:n},c),{},{components:t})):o.a.createElement(p,s({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},114:function(e,n,t){"use strict";t.d(n,"a",(function(){return x})),t.d(n,"b",(function(){return P})),t.d(n,"c",(function(){return S})),t.d(n,"d",(function(){return h})),t.d(n,"e",(function(){return I})),t.d(n,"g",(function(){return p})),t.d(n,"h",(function(){return m})),t.d(n,"i",(function(){return c})),t.d(n,"j",(function(){return M})),t.d(n,"k",(function(){return f})),t.d(n,"l",(function(){return N}));var r=t(0),o=t.n(r);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)(),i=o[0],a=o[1];return Object(r.useEffect)((function(){if("function"!=typeof n[0])throw new Error("useFunction takes first argument as a function");var e=n.splice(0,1);a(e[0].apply(e,n))}),[JSON.stringify(n)]),i}var s=function(e,n,t){return t>=e&&n>=t};function l(e){return isNaN(e)?e:{width:e,height:e}}function c(e,n,t,r,o){return void 0===r&&(r=0),void 0===o&&(o=0),{left:r+n*(t=l(t)).width,top:e*t.height+o}}function u(e,n,t){return e=l(e),Math.floor((n-t)/e.width)}function d(e,n){return e=l(e),Math.floor(n/e.height)}function f(e,n,t){return e.map((function(e){if(e.editing){var r=p(e,n.cell);return"function"==typeof t&&(r=t(r)),r}return e}))}function m(e){return e.map((function(e){return e.editing?i({},e,{editing:!1}):e}))}function p(e,n){return e.column>n.column||"right"===e.stick&&e.length>1?(e.stick="right",i({},e,{row:e.row,column:n.column,length:e.column-n.column+e.length})):(e.stick="left",i({},e,{row:e.row,column:e.column,length:n.column-e.column+1}))}function h(e){var n=[].concat(e);return e.filter((function(e){return e.editing})).forEach((function(e){var t=function(e,n){var t=i({},n);return[e.flatMap((function(e){if(e.id===n.id)return[];if(t.row===e.row){var r=e.column+1,o=t.column+1,i=e.column+e.length,a=t.column+t.length;if(s(r,i,o)||s(r,i,a)||s(o,a,i)||s(o,a,r)){var l=g(e,t),c=l[0],u=l[1];return t=u,c}var d=y(e,t),f=d[0],m=d[1];return t=m,f}var p=y(e,t),h=p[0],b=p[1];return t=b,h})),t]}(n,e),r=t[0],o=t[1];r.push(o),n=r})),n}var g=function(e,n){return(e=b(e)).collisions[n.id]="",(n=b(n)).collisions[e.id]="",[e,n]},b=function(e){return e.collisions||(e.collisions={}),e},y=function(e,n){return delete(e=b(e)).collisions[n.id],delete(n=b(n)).collisions[e.id],[e,n]},v="ADD",w="EDIT",O="DELETE",E="SET_BARS",j="SET_IS_EDITING";function M(e,n){switch(n.type){case E:return i({},e,{bars:n.payload});case w:var t=[].concat(e.bars),r=t.findIndex((function(e){return n.payload.id===e.id}));return t[r]=n.payload,i({},e,{bars:t});case v:var o=[].concat(e.bars);return o.push(n.payload),i({},e,{bars:o});case O:var a=[].concat(e.bars),s=a.findIndex((function(e){return n.payload.id===e.id}));return a.splice(s,1),i({},e,{bars:a});case j:return i({},e,{isEditing:n.payload})}}function N(e,n){var t=Object(r.useReducer)(e,{bars:n,isEditing:!1}),o=t[0],i=o.bars,a=o.isEditing,s=t[1];return{isEditing:a,setIsEditing:function(e){return s({payload:e,type:j})},bars:i,addBar:function(e){return s({payload:e,type:v})},editBar:function(e){return s({payload:e,type:w})},deleteBar:function(e){return s({payload:e,type:O})},setBars:function(e){return s({payload:e,type:E})}}}function C(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}function D(e,n,t){if(void 0===n&&(n=0),void 0===t&&(t=4),n!==t)return Array.isArray(e)?e.map((function(e){return D(e,n+1)})):C(e)?Object.keys(e).map((function(t){return t+" : "+D(e[t],n+1)})):"function"==typeof e?e.name+"function":"string"==typeof e||"number"==typeof e?e:JSON.stringify(e)}function T(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)({}),i=o[0],a=o[1];return Object(r.useEffect)((function(){if(C(n[0]))a(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);a(e[0].apply(e,n))}}),[JSON.stringify(D(n))]),i}function x(e){var n=T(e.content,e.length);return o.a.createElement("div",{id:e.id,role:"listitem",onDragStart:function(n){e.onDragStart(n,e)},onDragEnd:function(n){e.onDragEnd(n,e)},onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},onMouseMove:function(n){e.onMouseMove(n,e)},onMouseDown:function(n){e.onMouseDown(n,e)},onMouseUp:function(n){e.onMouseUp(n,e)},draggable:e.draggable,style:i({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:e.style.display||"flex",position:e.style.position||"absolute",zIndex:e.style.zIndex||"100"}),className:e.className},[].concat(Array(e.length)).map((function(t,r){var a=function(e,n,t,r,i){return 0===e?r||t[e]||o.a.createElement("div",null):n-1===e?i||t[n-1]||o.a.createElement("div",null):t[e]||o.a.createElement("div",null)}(r,e.length,n,e.firstContent,e.lastContent),s=Object.assign({width:e.dimension.width,height:e.dimension.height,pointerEvents:e.style.pointerEvents||"none"},a.props.style||{});return o.a.createElement(o.a.Fragment,{key:r},o.a.cloneElement(a,i({},a.props,{style:s}),a.props.children))})),e.children)}function B(e){return o.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:function(e){e.preventDefault()},onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className,onMouseOver:function(n){e.onMouseOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:i({overflow:"hidden",width:e.dimension.width,height:e.dimension.height},e.style)},e.children)}function k(e){return o.a.createElement("div",{role:"columnheader",className:e.rowTitleClassName,style:{display:e.isVisible?"flex":"none",height:e.dimension.height}},"ltr"===e.dir&&o.a.createElement(B,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton),e.columnTitles.map((function(n,t){return o.a.createElement(B,{"aria-colindex":t,key:t,onMouseOver:e.onMouseOverCell,dimension:e.dimension,column:t,row:-1,className:e.columnTitleClassName},n)})),"rtl"===e.dir&&o.a.createElement(B,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton))}function P(e){return o.a.createElement("div",{className:e.className,style:Object.assign({userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"},e.style)},e.children)}function S(e){return o.a.createElement("div",{style:Object.assign({textAlign:"center",position:"absolute",whiteSpace:"nowrap",top:"0px",overflow:"hidden",userSelect:"none",lineHeight:1,height:"100%"},e.style),className:e.className},e.children)}function A(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function I(e,n,t){return i({id:A(),length:1,dimension:e,editing:!0},n,t)}function W(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var o=Object(r.useState)([]),i=o[0],a=o[1];return Object(r.useEffect)((function(){if(C(n[0])){var e=n[0].func;"function"==typeof e&&(n.splice(0,1),a(e.apply(void 0,n)))}else if("function"==typeof n[0]){var t=n.splice(0,1);a(t[0].apply(t,n))}else Array.isArray(n[0])&&a(n[0])}),[JSON.stringify(n)]),i}x.defaultProps={style:{},dimension:{width:20,height:20},onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onDragEnd:function(){},onContextMenu:function(){},onMouseDown:function(){},onMouseUp:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onMouseMove:function(){},length:1,content:{}},B.defaultProps={onMouseEnter:function(){},onMouseDown:function(){},onMouseUp:function(){},onMouseOver:function(){},onDrop:function(){}},k.defaultProps={onMouseOverCell:function(){}};var R=o.a.forwardRef((function(e,n){var t=a(d,e.dimension,e.height),s=a(u,e.dimension,e.width,e.rowTitleWidth),l=W(e.rowTitles,t),c=W(e.columnTitles,s),f=T(e.content,s,t),m=function(e){var n=Object(r.useState)({width:0,height:0}),t=n[0],o=n[1];return Object(r.useEffect)((function(){isNaN(e)?C(e)?o(e):o({width:-1,height:-1}):o({width:e,height:e})}),[JSON.stringify(e)]),t}(e.dimension);return o.a.createElement("div",{ref:n,id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,onMouseMove:e.mouseMoveGrid,style:i({},e.style,{position:"relative"})},o.a.createElement(k,{columnTitles:c,columnCount:s,height:e.columnTitleHeight,rowTitleWidth:e.rowTitleWidth,dimension:m,isVisible:c.length>0,columnTitleClassName:e.columnTitleClassName,dir:e.dir,onMouseOverCell:e.mouseOverCellHead,cantonClassName:e.cantonClassName}),[].concat(Array(t)).map((function(n,t){return o.a.createElement("div",{role:"rowgroup",key:t,style:{height:m.height,display:"flex"}},"ltr"===e.dir&&o.a.createElement(B,{style:{display:l.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},l[t]),[].concat(Array(s)).map((function(n,r){return o.a.createElement(B,{key:"r"+t+"c"+r,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:m,className:e.cellClassName,column:r,row:t},f["r"+t+"c"+r])})),"rtl"===e.dir&&o.a.createElement(B,{style:{display:l.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},l[t]))})),o.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:t,columnCount:s,rowTitleWidth:e.rowTitleWidth,dimension:m,columnTitleHeight:c.length>0?e.columnTitleHeight>0?e.columnTitleHeight:m.height:0}),Array.isArray(e.children)&&e.children))}));R.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,columnTitleHeight:0,dir:"ltr",mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){},mouseMoveGrid:function(){}},n.f=R},99:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return f})),t.d(n,"metadata",(function(){return m})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return g}));var r=t(2),o=t(6),i=t(0),a=t.n(i),s=t(113),l=t(114),c=t(47),u=t.n(c);function d(e){var n=Object(l.l)(l.j,[]),t=n.bars,o=n.isEditing,i=n.setIsEditing,s=n.addBar,c=n.setBars;return a.a.createElement(l.f,{cellClassName:u.a.row_cell,mouseDownCell:function(e){var n=Object(l.e)(e.dimension,e.cell);s(n),i(!0)},mouseEnterCell:function(e){if(o){var n=Object(l.k)(t,e);c(n)}},mouseUpCell:function(){var e=Object(l.h)(t);c(e),i(!1)}},(function(){return t.map((function(e){return a.a.createElement(l.a,Object(r.a)({key:e.id},e,{style:Object.assign({},e.style,Object(l.i)(e.row,e.column,e.dimension))}))}))}))}var f={id:"basicplusplus",title:"Basic++",sidebar_label:"Basic++"},m={unversionedId:"basicplusplus",id:"basicplusplus",isDocsHomePage:!1,title:"Basic++",description:"Ok so you ran the basic example and you want to see more.",source:"@site/docs\\basicplusplus.md",slug:"/basicplusplus",permalink:"/react-reserver/docs/basicplusplus",version:"current",sidebar_label:"Basic++",sidebar:"docs",previous:{title:"Basic",permalink:"/react-reserver/docs/basic"},next:{title:"Column Title",permalink:"/react-reserver/docs/columntitle"}},p=[],h={rightToc:p};function g(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},h,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Ok so you ran the basic example and you want to see more."),Object(s.b)("p",null,"Here it is "),Object(s.b)(d,{mdxType:"BasicPlusPlus"}),Object(s.b)("p",null,"You are probably thinking hey wait this looks exactly the same!"),Object(s.b)("p",null,"so lets look at the code"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"file=../src/examples/BasicPlusPlus.js",file:"../src/examples/BasicPlusPlus.js"}),"import React from 'react'\nimport Reserver, {\n  Bar,\n  useReserver,\n  reserverReducer,\n  createBar,\n  getPosition,\n  resizeBars,\n  finishEditingBars\n} from 'react-reserver'\nimport styles from './basicexamples.module.css'\nexport default function BasicPlusPlus(props) {\n  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(\n    reserverReducer,\n    []\n  )\n  return (\n    <Reserver\n      cellClassName={styles.row_cell}\n      mouseDownCell={(props) => {\n        const newbar = createBar(props.dimension, props.cell)\n        addBar(newbar)\n        setIsEditing(true)\n      }}\n      mouseEnterCell={(props) => {\n        if (isEditing) {\n          const nBars = resizeBars(bars, props)\n          setBars(nBars)\n        }\n      }}\n      mouseUpCell={() => {\n        const dBars = finishEditingBars(bars)\n        setBars(dBars)\n        setIsEditing(false)\n      }}\n    >\n      {() => {\n        return bars.map((bar) => {\n          return (\n            <Bar\n              key={bar.id}\n              {...bar}\n              style={{\n                ...bar.style,\n                ...getPosition(bar.row, bar.column, bar.dimension)\n              }}\n            />\n          )\n        })\n      }}\n    </Reserver>\n  )\n}\n")),Object(s.b)("p",null,"First we are adding ",Object(s.b)("strong",{parentName:"p"},"editing")," and ",Object(s.b)("strong",{parentName:"p"},"setIsEditing"),".\nWhy do we need this? since otherwise every time we hover over a cell it runs ",Object(s.b)("strong",{parentName:"p"},"resizeBar")," and ",Object(s.b)("strong",{parentName:"p"},"setBars"),".\nSo we make sure that we actually started editing before we run the functions."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"})," {() => {\n\n            return bars.map((bar) => {\n                return <Bar key={bar.id} {...bar} style={{ ...bar.style, ...getPosition(bar.row, bar.column, bar.dimension) }} />\n            })\n        }\n")),Object(s.b)("p",null,"Here we are passing in a function instead of an array of the objects as children. We will need this later when the component will pass arguments into the function.\nWe also pass bar.style back into the style prop, we didnt do it before because we werent styling the component but now we should take it into consideration. "),Object(s.b)("p",null,"Next we will see how we can give titles to our columns"))}g.isMDXComponent=!0}}]);