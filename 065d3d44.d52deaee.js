(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{108:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var r=t(0),i=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),u=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=r,p=d["".concat(a,".").concat(f)]||d[f]||m[f]||o;return t?i.a.createElement(p,s(s({ref:n},c),{},{components:t})):i.a.createElement(p,s({ref:n},c))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},109:function(e,n,t){"use strict";t.d(n,"a",(function(){return _})),t.d(n,"b",(function(){return W})),t.d(n,"c",(function(){return P})),t.d(n,"d",(function(){return w})),t.d(n,"e",(function(){return R})),t.d(n,"g",(function(){return v})),t.d(n,"h",(function(){return p})),t.d(n,"i",(function(){return k})),t.d(n,"j",(function(){return b})),t.d(n,"k",(function(){return D}));var r=t(0),i=t.n(r);function o(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var i=Object(r.useState)([]),o=i[0],a=i[1];return Object(r.useEffect)((function(){if(Array.isArray(n[0]))a(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);a(e[0].apply(e,n))}}),[JSON.stringify(n)]),o}function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var i=Object(r.useState)(),o=i[0],a=i[1];return Object(r.useEffect)((function(){if("function"!=typeof n[0])throw new Error("useFunction takes first argument as a function");var e=n.splice(0,1);a(e[0].apply(e,n))}),[JSON.stringify(n)]),o}var s="_style__row_cell__3TtXw",l="_style__row_cell_invisible__2fzm0",c="_style__row__32f2G",u="_style__row_invisible__kbpmo",d="_style__tag_content__2nfh4";function m(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}var f=function(e,n,t){return t>=e&&n>=t};function p(e,n,t,r,i){return void 0===r&&(r=0),void 0===i&&(i=0),{left:r+n*t,top:e*t+i}}function g(e,n,t){return Math.floor((n-t)/e)}function h(e,n){return Math.floor(n/e)}function b(e,n,t){return e.map((function(e){if(e.editing){var r=function(e,n){if(e.column>n.column||"right"===e.stick&&e.length>1){e.stick="right";var t={row:e.row,column:n.column,length:e.column-n.column+e.length};return Object.assign({},e,t)}e.stick="left";var r={row:e.row,column:e.column,length:n.column-e.column+1};return Object.assign({},e,r)}(e,n.cell);return"function"==typeof t&&(r=t(r)),r}return e}))}function v(e){return e.map((function(e){return e.editing?Object.assign({},e,{editing:!1}):e}))}function w(e){var n=[].concat(e);return e.filter((function(e){return e.editing})).forEach((function(e){var t=function(e,n){var t=Object.assign({},n);return[e.flatMap((function(e){if(e.id===n.id)return[];if(t.row===e.row){var r=e.column+1,i=t.column+1,o=e.column+e.length,a=t.column+t.length;if(f(r,o,i)||f(r,o,a)||f(i,a,o)||f(i,a,r)){var s=y(e,t),l=s[0],c=s[1];return t=c,l}var u=E(e,t),d=u[0],m=u[1];return t=m,d}var p=E(e,t),g=p[0],h=p[1];return t=h,g})),t]}(n,e),r=t[0],i=t[1];r.push(i),n=r})),n}var y=function(e,n){return(e=O(e)).collisions[n.id]="",(n=O(n)).collisions[e.id]="",[e,n]},O=function(e){return e.collisions||(e.collisions={}),e},E=function(e,n){return delete(e=O(e)).collisions[n.id],delete(n=O(n)).collisions[e.id],[e,n]},j="ADD",T="EDIT",C="DELETE",x="SET_BARS",N="SET_IS_EDITING";function k(e,n){switch(n.type){case x:return Object.assign({},e,{bars:n.payload});case T:var t=[].concat(e.bars),r=t.findIndex((function(e){return n.payload.id===e.id}));return t[r]=n.payload,Object.assign({},e,{bars:t});case j:var i=[].concat(e.bars);return i.push(n.payload),Object.assign({},e,{bars:i});case C:var o=[].concat(e.bars),a=o.findIndex((function(e){return n.payload.id===e.id}));return o.splice(a,1),Object.assign({},e,{bars:o});case N:return Object.assign({},e,{isEditing:n.payload})}}function M(e){return i.a.createElement("div",{className:e.isVisible?s:l,style:{width:e.width,height:e.dimension+"px",overflow:"hidden"}},e.children)}function D(e,n){var t=Object(r.useReducer)(e,{bars:n,isEditing:!1}),i=t[0],o=i.bars,a=i.isEditing,s=t[1];return{isEditing:a,setIsEditing:function(e){return s({payload:e,type:N})},bars:o,addBar:function(e){return s({payload:e,type:j})},editBar:function(e){return s({payload:e,type:T})},deleteBar:function(e){return s({payload:e,type:C})},setBars:function(e){return s({payload:e,type:x})}}}function _(e){return i.a.createElement("div",{role:"listitem",onDragStart:function(n){e.onDragStart(n,e)},onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},draggable:e.draggable,style:Object.assign({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:"flex",position:"absolute",zIndex:e.zIndex||"100"}),className:e.className},[].concat(Array(e.length)).map((function(n,t){var r=function(e,n,t,r,o){return 0===e?r||t[e]||i.a.createElement("div",null):n-1===e?o||t[n-1]||i.a.createElement("div",null):t[e]||i.a.createElement("div",null)}(t,e.length,e.content,e.firstContent,e.lastContent),o=Object.assign({width:e.dimension,height:e.dimension,pointerEvents:e.style.pointerEvents||"none"},r.props.style||{});return i.a.createElement(i.a.Fragment,{key:t},i.a.cloneElement(r,Object.assign({},r.props,{style:o}),r.props.children))})),e.children)}function S(e){return i.a.createElement("div",{role:"columnheader",className:e.columnTitles.length>0?c:u,style:{height:e.dimension}},"ltr"===e.dir&&i.a.createElement(M,{isVisible:e.showCanton,width:e.rowTitleWidth,dimension:e.dimension}),e.columnTitles.map((function(n,t){return i.a.createElement("div",{"aria-colindex":t,key:t,style:{width:e.dimension+"px",height:e.dimension+"px"},className:s},n)})),"rtl"===e.dir&&i.a.createElement(M,{isVisible:e.showCanton,width:e.rowTitleWidth,dimension:e.dimension}))}function B(e){return i.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:function(e){e.preventDefault()},onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className||s,onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:{overflow:"hidden",width:e.dimension+"px",height:e.dimension+"px"}},e.children)}function W(e){return i.a.createElement("div",{style:e.style},e.children)}function P(e){return i.a.createElement("span",{style:e.style,className:d},e.children)}function I(e){var n=a(h,e.dimension,e.height),t=a(g,e.dimension,e.width,e.rowTitleWidth),r=o(e.rowTitles),s=o(e.columnTitles,t);return i.a.createElement("div",{id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,style:Object.assign({},e.style,{position:"relative"})},i.a.createElement(S,{columnTitles:s,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,showCanton:r.length>0,dir:e.dir}),[].concat(Array(n)).map((function(n,o){return i.a.createElement("div",{role:"rowgroup",className:c,key:o,style:{height:e.dimension,display:"flex"}},"ltr"===e.dir&&i.a.createElement(M,{isVisible:r.length>0,width:e.rowTitleWidth,dimension:e.dimension},r[o]),[].concat(Array(t)).map((function(n,t){return i.a.createElement(B,{key:"r"+o+"c"+t,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:e.dimension,className:e.cellClassName,column:t,row:o},e.content["r"+o+"c"+t])})),"rtl"===e.dir&&i.a.createElement(M,{isVisible:r.length>0,width:e.rowTitleWidth,dimension:e.dimension},r[o]))})),i.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:n,columnCount:t,rowTitleWidth:e.rowTitleWidth,dimension:e.dimension,columnTitleHeight:s.length>0?e.dimension:0}),Array.isArray(e.children)&&e.children))}function R(e,n){return Object.assign({id:m(),length:1,dimension:e,editing:!0},n)}_.defaultProps={style:{},dimension:20,onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onContextMenu:function(){},onMouseEnter:function(){},onMouseLeave:function(){},length:1,content:{}},W.defaultProps={style:{userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"}},I.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,dir:"ltr",mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){}},n.f=I},247:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"d",(function(){return i})),t.d(n,"e",(function(){return o})),t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return s}));var r=[{draggable:!0,id:"xx",length:13,row:2,column:8,className:"default-bar",children:"This is a tag"},{id:"xy",length:4,row:5,column:12,style:{background:"red"}}],i=[{id:1,start:"29-07-2020",end:"04-08-2020",guestName:"Trevor Mathis",roomId:4},{id:3,start:"03-08-2020",end:"11-08-2020",guestName:"Nell McKinney",roomId:10},{id:4,start:"30-07-2020",end:"01-09-2020",guestName:"Max Lindsey",roomId:11},{id:2,start:"15-08-2020",end:"02-09-2020",guestName:"Ollie Sherman",roomId:10}],o={4:{id:4,name:"Deluxe",hosts:"4 People",row:3},10:{id:10,name:"Basic",hosts:"2 People",row:8},11:{id:11,name:"Basic",hosts:"2 People",row:6}},a=["Max Lindsey","Jesus Myers","Julian Norton","Nell McKinney","Trevor Mathis","Virginia Parsons","Ollie Sherman","Beulah McBride","Sylvia Griffin","Jordan Holland","Elsie Schwartz","Leon Harrington","Jorge Vega","Lina Lucas","George Daniel","Douglas Simmons","Mary Willis","Jacob Stone","James Greer","Luke Foster","Nell Dunn","Lily Wallace","Leonard Glover","Francis Hodges","Clifford Campbell"],s=["\u05d0\u05d1\u05d2\u05d9\u05dc","\u05d0\u05d1\u05d9\u05d0\u05d5\u05e8","\u05d0\u05d1\u05d9\u05d0\u05dc","\u05d0\u05dc\u05d9\u05e2\u05d3","\u05d0\u05dc\u05d9\u05d0\u05dc"]},92:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return d})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return p}));var r=t(2),i=t(0),o=t.n(i),a=t(108),s=t(109),l=(t(47),t(247));function c(e){var n=Object(s.k)(s.i,[]),t=n.bars,a=n.isEditing,c=n.setIsEditing,u=n.addBar,d=n.setBars,m=Object(i.useState)(""),f=m[0],p=m[1];return o.a.createElement(o.a.Fragment,null,""!==f&&o.a.createElement("div",{className:"alert alert--success",role:"alert"},o.a.createElement("strong",null,f,"'s")," Card"),o.a.createElement(s.f,{rowTitles:function(){return l.c.map((function(e,n){return o.a.createElement("div",{key:n,style:{background:"#12D3CF",height:"100%",textAlign:"center"},onClick:function(){p(e)}},e)}))},rowTitleWidth:140,mouseDownCell:function(e){var n=Object(s.e)(e.dimension,e.cell);u(n),c(!0)},mouseEnterCell:function(e){if(a){var n=Object(s.j)(t,e);d(n)}},mouseUpCell:function(){var e=t.map((function(e){return e.editing?Object.assign({},e,{editing:!1,style:Object.assign({},e.style,{pointerEvents:"auto"})}):e}));d(e),c(!1)}},(function(e){var n=e.columnTitleHeight,i=e.rowTitleWidth;return t.map((function(e){return o.a.createElement(s.a,Object(r.a)({key:e.id},e,{style:Object.assign({},e.style,Object(s.h)(e.row,e.column,e.dimension,i,n))}))}))})))}const u={id:"rowtitle",title:"Row Title",sidebar_label:"Row Title"},d={unversionedId:"rowtitle",id:"rowtitle",isDocsHomePage:!1,title:"Row Title",description:"How about giving each row a title?",source:"@site/docs\\rowtitle.md",permalink:"/react-reserver/docs/rowtitle",sidebar_label:"Row Title",sidebar:"docs",previous:{title:"Column Title",permalink:"/react-reserver/docs/columntitle"},next:{title:"Bar Basics",permalink:"/react-reserver/docs/basicbar"}},m=[],f={rightToc:m};function p({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},f,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"How about giving each row a title?\nMaybe it represents a room, a vehicle or person.\nSo here we are going to create a list of people so we can assign their work times"),Object(a.b)("p",null,"Click on a title to see what happens!"),Object(a.b)(c,{mdxType:"RowTitle"}),Object(a.b)("p",null,"We are going to use the prop rowTitles which takes an array or a function that returns an array. "),Object(a.b)("p",null,"In order to control the width of the row title we use the prop rowTitleWidth"),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Notice the width of the row titles are taken into account when calculating the width of Reserver.\nSo if you pass ",Object(a.b)("em",{parentName:"p"},"500")," as the width prop of the component and ",Object(a.b)("em",{parentName:"p"},"140")," to rowTitleWidth the number of columns will be smaller\nthan if you did not have row titles"))),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{29-45,47} file=../src/examples/RowTitle.js","{29-45,47}":!0,file:"../src/examples/RowTitle.js"}),"import React, { useState } from 'react'\nimport Reserver, {\n  Bar,\n  useReserver,\n  reserverReducer,\n  createBar,\n  getPosition,\n  resizeBars\n} from 'react-reserver'\nimport 'react-reserver/dist/index.css'\nimport { names } from './testdata'\n\nexport default function RowTitle(props) {\n  const { bars, isEditing, setIsEditing, addBar, setBars } = useReserver(\n    reserverReducer,\n    []\n  )\n\n  const [selectedWorker, setSelectedWorker] = useState('')\n  return (\n    <>\n      {selectedWorker !== '' && (\n        <div className='alert alert--success' role='alert'>\n          <strong>{selectedWorker}'s</strong> Card\n        </div>\n      )}\n      <Reserver\n        rowTitles={() => {\n          return names.map((val, index) => {\n            return (\n              <div\n                key={index}\n                style={{\n                  background: '#12D3CF',\n                  height: '100%',\n                  textAlign: 'center'\n                }}\n                onClick={() => {\n                  setSelectedWorker(val)\n                }}\n              >\n                {val}\n              </div>\n            )\n          })\n        }}\n        rowTitleWidth={140}\n        mouseDownCell={(props) => {\n          const newbar = createBar(props.dimension, props.cell)\n          addBar(newbar)\n          setIsEditing(true)\n        }}\n        mouseEnterCell={(props) => {\n          if (isEditing) {\n            const nBars = resizeBars(bars, props)\n            setBars(nBars)\n          }\n        }}\n        mouseUpCell={() => {\n          const dBars = bars.map((bar) => {\n            if (bar.editing) {\n              return {\n                ...bar,\n                editing: false,\n                style: { ...bar.style, pointerEvents: 'auto' }\n              }\n            }\n            return bar\n          })\n\n          setBars(dBars)\n          setIsEditing(false)\n        }}\n      >\n        {({ columnTitleHeight, rowTitleWidth }) => {\n          return bars.map((bar) => {\n            return (\n              <Bar\n                key={bar.id}\n                {...bar}\n                style={{\n                  ...bar.style,\n                  ...getPosition(\n                    bar.row,\n                    bar.column,\n                    bar.dimension,\n                    rowTitleWidth,\n                    columnTitleHeight\n                  )\n                }}\n              />\n            )\n          })\n        }}\n      </Reserver>\n    </>\n  )\n}\n")))}p.isMDXComponent=!0}}]);