(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),u=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,p=d["".concat(a,".").concat(f)]||d[f]||m[f]||o;return t?i.a.createElement(p,s(s({ref:n},c),{},{components:t})):i.a.createElement(p,s({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},109:function(e,n,t){"use strict";t.d(n,"a",(function(){return M})),t.d(n,"b",(function(){return S})),t.d(n,"c",(function(){return I})),t.d(n,"d",(function(){return w})),t.d(n,"e",(function(){return W})),t.d(n,"g",(function(){return y})),t.d(n,"h",(function(){return p})),t.d(n,"i",(function(){return T})),t.d(n,"j",(function(){return h})),t.d(n,"k",(function(){return _}));var r=t(0),i=t.n(r);function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var i=Object(r.useState)([]),o=i[0],a=i[1];return Object(r.useEffect)((function(){if(Array.isArray(n[0]))a(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);a(e[0].apply(e,n))}}),[JSON.stringify(n)]),o}function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var i=Object(r.useState)(),o=i[0],a=i[1];return Object(r.useEffect)((function(){if("function"!=typeof n[0])throw new Error("useFunction takes first argument as a function");var e=n.splice(0,1);a(e[0].apply(e,n))}),[JSON.stringify(n)]),o}var s="_style__row_cell__3TtXw",l="_style__row_cell_invisible__2fzm0",c="_style__row__32f2G",u="_style__row_invisible__kbpmo",d="_style__tag_content__2nfh4";function m(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}var f=function(e,n,t){return t>=e&&n>=t};function p(e,n,t,r,i){return void 0===r&&(r=0),void 0===i&&(i=0),{left:r+n*t,top:e*t+i}}function b(e,n,t){return Math.floor((n-t)/e)}function g(e,n){return Math.floor(n/e)}function h(e,n,t){return e.map((function(e){if(e.editing){var r=function(e,n){if(e.column>n.column||"right"===e.stick&&e.length>1){e.stick="right";var t={row:e.row,column:n.column,length:e.column-n.column+e.length};return Object.assign({},e,t)}e.stick="left";var r={row:e.row,column:e.column,length:n.column-e.column+1};return Object.assign({},e,r)}(e,n.cell);return"function"==typeof t&&(r=t(r)),r}return e}))}function y(e){return e.map((function(e){return e.editing?Object.assign({},e,{editing:!1}):e}))}function w(e){var n=[].concat(e);return e.filter((function(e){return e.editing})).forEach((function(e){var t=function(e,n){var t=Object.assign({},n);return[e.flatMap((function(e){if(e.id===n.id)return[];if(t.row===e.row){var r=e.column+1,i=t.column+1,o=e.column+e.length,a=t.column+t.length;if(f(r,o,i)||f(r,o,a)||f(i,a,o)||f(i,a,r)){var s=v(e,t),l=s[0],c=s[1];return t=c,l}var u=E(e,t),d=u[0],m=u[1];return t=m,d}var p=E(e,t),b=p[0],g=p[1];return t=g,b})),t]}(n,e),r=t[0],i=t[1];r.push(i),n=r})),n}var v=function(e,n){return(e=O(e)).collisions[n.id]="",(n=O(n)).collisions[e.id]="",[e,n]},O=function(e){return e.collisions||(e.collisions={}),e},E=function(e,n){return delete(e=O(e)).collisions[n.id],delete(n=O(n)).collisions[e.id],[e,n]},j="ADD",x="EDIT",B="DELETE",C="SET_BARS",D="SET_IS_EDITING";function T(e,n){switch(n.type){case C:return Object.assign({},e,{bars:n.payload});case x:var t=[].concat(e.bars),r=t.findIndex((function(e){return n.payload.id===e.id}));return t[r]=n.payload,Object.assign({},e,{bars:t});case j:var i=[].concat(e.bars);return i.push(n.payload),Object.assign({},e,{bars:i});case B:var o=[].concat(e.bars),a=o.findIndex((function(e){return n.payload.id===e.id}));return o.splice(a,1),Object.assign({},e,{bars:o});case D:return Object.assign({},e,{isEditing:n.payload})}}function k(e){return i.a.createElement("div",{className:e.isVisible?s:l,style:{width:e.width,height:e.dimension+"px",overflow:"hidden"}},e.children)}function _(e,n){var t=Object(r.useReducer)(e,{bars:n,isEditing:!1}),i=t[0],o=i.bars,a=i.isEditing,s=t[1];return{isEditing:a,setIsEditing:function(e){return s({payload:e,type:D})},bars:o,addBar:function(e){return s({payload:e,type:j})},editBar:function(e){return s({payload:e,type:x})},deleteBar:function(e){return s({payload:e,type:B})},setBars:function(e){return s({payload:e,type:C})}}}function M(e){return i.a.createElement("div",{role:"listitem",onDragStart:function(n){e.onDragStart(n,e)},onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},draggable:e.draggable,style:Object.assign({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:"flex",position:"absolute",zIndex:e.zIndex||"100"}),className:e.className},[].concat(Array(e.length)).map((function(n,t){var r=function(e,n,t,r,o){return 0===e?r||t[e]||i.a.createElement("div",null):n-1===e?o||t[n-1]||i.a.createElement("div",null):t[e]||i.a.createElement("div",null)}(t,e.length,e.content,e.firstContent,e.lastContent),o=Object.assign({width:e.dimension,height:e.dimension,pointerEvents:e.style.pointerEvents||"none"},r.props.style||{});return i.a.createElement(i.a.Fragment,{key:t},i.a.cloneElement(r,Object.assign({},r.props,{style:o}),r.props.children))})),e.children)}function N(e){return i.a.createElement("div",{role:"columnheader",className:e.columnTitles.length>0?c:u,style:{height:e.dimension}},"ltr"===e.dir&&i.a.createElement(k,{isVisible:e.showCanton,width:e.rowTitleWidth,dimension:e.dimension}),e.columnTitles.map((function(n,t){return i.a.createElement("div",{"aria-colindex":t,key:t,style:{width:e.dimension+"px",height:e.dimension+"px"},className:s},n)})),"rtl"===e.dir&&i.a.createElement(k,{isVisible:e.showCanton,width:e.rowTitleWidth,dimension:e.dimension}))}function P(e){return i.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:function(e){e.preventDefault()},onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className||s,onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:{overflow:"hidden",width:e.dimension+"px",height:e.dimension+"px"}},e.children)}function S(e){return i.a.createElement("div",{style:e.style},e.children)}function I(e){return i.a.createElement("span",{style:e.style,className:d},e.children)}function A(e){var n=a(g,e.dimension,e.height),t=a(b,e.dimension,e.width,e.rowTitleWidth),r=o(e.rowTitles),s=o(e.columnTitles,t);return i.a.createElement("div",{id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,style:Object.assign({},e.style,{position:"relative"})},i.a.createElement(N,{columnTitles:s,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,showCanton:r.length>0,dir:e.dir}),[].concat(Array(n)).map((function(n,o){return i.a.createElement("div",{role:"rowgroup",className:c,key:o,style:{height:e.dimension,display:"flex"}},"ltr"===e.dir&&i.a.createElement(k,{isVisible:r.length>0,width:e.rowTitleWidth,dimension:e.dimension},r[o]),[].concat(Array(t)).map((function(n,t){return i.a.createElement(P,{key:"r"+o+"c"+t,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:e.dimension,className:e.cellClassName,column:t,row:o},e.content["r"+o+"c"+t])})),"rtl"===e.dir&&i.a.createElement(k,{isVisible:r.length>0,width:e.rowTitleWidth,dimension:e.dimension},r[o]))})),i.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:n,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,columnTitleHeight:s.length>0?e.dimension:0}),Array.isArray(e.children)&&e.children))}function W(e,n){return Object.assign({id:m(),length:1,dimension:e,editing:!0},n)}M.defaultProps={style:{},dimension:20,onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onContextMenu:function(){},onMouseEnter:function(){},onMouseLeave:function(){},length:1,content:{}},S.defaultProps={style:{userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"}},A.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,dir:"ltr",mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){}},n.f=A},97:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return u})),t.d(n,"rightToc",(function(){return d})),t.d(n,"default",(function(){return f}));var r=t(2),i=t(0),o=t.n(i),a=t(108),s=t(109);t(47);function l(e){var n=Object(s.k)(s.i,[]),t=n.bars,i=n.isEditing,a=n.setIsEditing,l=n.addBar,c=n.setBars;return o.a.createElement(s.f,{mouseDownCell:function(e){var n=Object(s.e)(e.dimension,e.cell);l(n),a(!0)},mouseEnterCell:function(e){if(i){var n=Object(s.j)(t,e);c(n)}},mouseUpCell:function(){var e=Object(s.g)(t);c(e),a(!1)}},(function(){return t.map((function(e){return o.a.createElement(s.a,Object(r.a)({key:e.id},e,{style:Object.assign({},e.style,Object(s.h)(e.row,e.column,e.dimension))}))}))}))}const c={id:"basicplusplus",title:"Basic++",sidebar_label:"Basic++"},u={unversionedId:"basicplusplus",id:"basicplusplus",isDocsHomePage:!1,title:"Basic++",description:"Ok so you ran the basic example and you want to see more.",source:"@site/docs\\basicplusplus.md",permalink:"/react-reserver/docs/basicplusplus",sidebar_label:"Basic++",sidebar:"docs",previous:{title:"Basic",permalink:"/react-reserver/docs/basic"},next:{title:"Column Title",permalink:"/react-reserver/docs/columntitle"}},d=[],m={rightToc:d};function f({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},m,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Ok so you ran the basic example and you want to see more."),Object(a.b)("p",null,"Here it is "),Object(a.b)(l,{mdxType:"BasicPlusPlus"}),Object(a.b)("p",null,"You are probably thinking hey wait this looks exactly the same!"),Object(a.b)("p",null,"so lets look at the code"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{5,10,15,31} file=../src/examples/BasicPlusPlus.js","{5,10,15,31}":!0,file:"../src/examples/BasicPlusPlus.js"}),"import React from 'react'\nimport Reserver, {\n  Bar,\n  useReserver,\n  reserverReducer,\n  createBar,\n  getPosition,\n  resizeBars,\n  finishEditingBars\n} from 'react-reserver'\nimport 'react-reserver/dist/index.css'\nexport default function BasicPlusPlus(props) {\n  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(\n    reserverReducer,\n    []\n  )\n  return (\n    <Reserver\n      mouseDownCell={(props) => {\n        const newbar = createBar(props.dimension, props.cell)\n        addBar(newbar)\n        setIsEditing(true)\n      }}\n      mouseEnterCell={(props) => {\n        if (isEditing) {\n          const nBars = resizeBars(bars, props)\n          setBars(nBars)\n        }\n      }}\n      mouseUpCell={() => {\n        const dBars = finishEditingBars(bars)\n        setBars(dBars)\n        setIsEditing(false)\n      }}\n    >\n      {() => {\n        return bars.map((bar) => {\n          return (\n            <Bar\n              key={bar.id}\n              {...bar}\n              style={{\n                ...bar.style,\n                ...getPosition(bar.row, bar.column, bar.dimension)\n              }}\n            />\n          )\n        })\n      }}\n    </Reserver>\n  )\n}\n")),Object(a.b)("p",null,"First we are adding ",Object(a.b)("strong",{parentName:"p"},"editing")," and ",Object(a.b)("strong",{parentName:"p"},"setIsEditing"),".\nWhy do we need this? since otherwise every time we hover over a cell it runs ",Object(a.b)("strong",{parentName:"p"},"resizeBar")," and ",Object(a.b)("strong",{parentName:"p"},"setBars"),".\nSo we make sure that we actually started editing before we run the functions."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{1}","{1}":!0})," {() => {\n\n            return bars.map((bar) => {\n                return <Bar key={bar.id} {...bar} style={{ ...bar.style, ...getPosition(bar.row, bar.column, bar.dimension) }} />\n            })\n        }\n")),Object(a.b)("p",null,"Here we are passing in a function instead of an array of the objects as children. We will need this later when the component will pass arguments into the function.\nWe also pass bar.style back into the style prop, we didnt do it before because we werent styling the component but now we should take it into consideration. "),Object(a.b)("p",null,"Next we will see how we can give titles to our columns"))}f.isMDXComponent=!0}}]);