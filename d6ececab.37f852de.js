(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return O})),n.d(t,"metadata",(function(){return M})),n.d(t,"rightToc",(function(){return x})),n.d(t,"default",(function(){return C}));var o=n(2),r=n(6),i=n(0),s=n.n(i),l=n(113),a=n(114),c=n(112),u=n.n(c),d=n(250),m=n(249);function f(e){const t=document.createDocumentFragment();return e.forEach(e=>{t.appendChild(function(e){const t=document.createElementNS("http://www.w3.org/2000/svg",e.type);Object.keys(e).forEach(n=>{"type"!==n&&"children"!==n&&t.setAttribute(n,e[n])}),Array.isArray(e.children)&&(console.log(e.children),t.appendChild(f(e.children)));return t}(e))}),t}function h(e){return s.a.createElement("div",{style:{width:e.width,display:"inline-block",color:"#adb3b8",paddingLeft:"10px",borderLeft:"1px solid #d2d2d2"}},e.children," ")}function p(e){return Object(m.a)(e.date,e.columnCount,"days").map((t,n)=>s.a.createElement("div",{key:t,style:{background:e.titleRange[n]?"#1ca3f9":"#fff",height:"100%",width:"100%",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",fontWeight:500},onMouseOver:()=>e.setPointerLocation(w(n,e.cellDimesions.width,e.rowTitleWidth,e.columnTitleHeight)),onClick:()=>{console.log(isDragging)}},s.a.createElement("div",null,t)))}function g(e){return`M ${e.start.x} ${e.start.y} C  ${e.centerA.x} ${e.centerA.y}, ${e.centerB.x} ${e.centerB.y} ,${e.center.x} ${e.center.y}  S ${e.endA.x} ${e.endA.y}, ${e.end.x} ${e.end.y}`}function y(e,t,n){return{centerA:{x:e.x+100,y:e.y},centerB:{x:e.x+100,y:t.y},endA:{x:n.x-150,y:n.y}}}function j(e){return s.a.createElement("div",{style:{pointerEvents:"none",zIndex:"999",position:"absolute",...e.dimensions}},s.a.createElement("svg",{viewBox:`0 0 ${e.dimensions.width} ${e.dimensions.height}`,xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("defs",null,s.a.createElement("marker",{id:"arrow",viewBox:"0 -5 10 10",refX:"8",refY:"0",markerWidth:"10",markerHeight:"10",orient:"auto"},s.a.createElement("path",{d:"M0,-5L10,0L0,5"}))),e.bars.flatMap((t,n)=>{if(e.exceptions["from"+t.id])return[];if(t.moving)return[];if(t.to){const n=e.bars.findIndex(e=>e.id===t.to),o=function(e,t,n,o){const r=v(e.column+e.length,e.dimension.width,o,e.row,e.dimension.height,n),i=v(t.column,t.dimension.width,o,t.row,t.dimension.height,n),s=b(r,i);return{start:r,center:s,...y(r,s,i),end:i}}(t,e.bars[n],e.rowTitleWidth,e.columnTitleHeight);return s.a.createElement("path",{key:e.bars[n].id+"=>"+t.id,d:g(o),stroke:"black",fill:"transparent",markerEnd:"url(#arrow)"})}return[]}),s.a.createElement("circle",{cx:e.pointerLocation.x,cy:e.pointerLocation.y,r:"5",fill:"#13aaf5"}),s.a.createElement("line",{x1:e.pointerLocation.x,y1:e.pointerLocation.y,x2:e.pointerLocation.x,y2:e.dimensions.height,stroke:"#13aaf5"})))}function w(e,t,n,o){return{x:e*t+t/2+n,y:o}}function b(e,t){return{x:(e.x-t.x)/2+t.x,y:(t.y-e.y)/2+e.y}}function v(e,t,n,o,r,i){return{x:e*t+i,y:(o+.5)*r+n}}function E(e){const{bars:t,isEditing:n,setIsEditing:r,addBar:l,setBars:c,editBar:E}=Object(a.l)(a.j,[]),[O,M]=Object(i.useState)([]),x=Object(i.useRef)(),k=u()("26/04/2019","DD/MM/YYYY"),C={width:80,height:40},[T,D]=Object(i.useState)(0),[P,N]=Object(i.useState)({width:0,height:0}),[S,L]=Object(i.useState)({width:0,height:0}),A=function(e,t){if("undefined"==typeof window||"undefined"==typeof document)return()=>{};const n=Object(i.useRef)(document.createElementNS("http://www.w3.org/2000/svg","svg"));return Object(i.useEffect)(()=>{Object.keys(e).forEach(t=>{let o=e[t];if("style"===t){let t="";Object.keys(o).forEach(n=>{let r=o[n];"number"==typeof e[n]&&(r+="px"),t+=`${n}:${r};`}),o=t}n.current.setAttribute(t,o)});const o=document.querySelector("body");if(o.appendChild(n.current),t){const e=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=f(t);e.appendChild(o),n.current.appendChild(e)}return()=>{o.removeChild(n.current)}},[JSON.stringify(e),JSON.stringify(t)]),e=>{n.current.innerHTML="";const t=f(e);n.current.appendChild(t)}}(S),[I,z]=Object(i.useState)({x:50,y:50}),[B,$]=Object(i.useState)(!1),[R,W]=Object(i.useState)({}),[H,Y]=Object(i.useState)({}),U=Object(i.useRef)(),F=function(e,t,n,o=0){const[r,l]=Object(i.useState)([]);let a=t.format("MMMM"),c=0;return Object(i.useEffect)(()=>{const o=[];[...Array(e)].forEach((e,r)=>{const i=t.clone().add(r,"days").format("MMMM");a!==i&&c>0&&(o.push(s.a.createElement(h,{key:a,width:c},a)),c=0,a=i),c+=n}),c>0&&o.push(s.a.createElement(h,{key:a,width:c},a)),l(o)},[e,t.format("MMMM"),n]),r}(T,k,C.width,200),J=function(){if("undefined"==typeof window||"undefined"==typeof document)return()=>{};const e=Object(i.useRef)(document.createElement("style"));return Object(i.useEffect)(()=>{e.current.type="text/css";document.querySelector("head").appendChild(e.current)},[]),t=>{e.current.innerHTML=t}}();return Object(i.useEffect)(()=>{const e=x.current.getBoundingClientRect(),{width:t,height:n}=U.current.getBoundingClientRect();N({width:t,height:n,winWidth:e.width}),z(w(0,C.width,200,30))},[U.current]),Object(i.useEffect)(()=>{const{width:e,height:t}=U.current.getBoundingClientRect();L({width:e,height:t,style:{"pointer-events":"none",position:"absolute",top:U.current.offsetTop,left:U.current.offsetLeft}})},[U.current,F]),Object(i.useEffect)(()=>{const e=d.e.map(e=>(e.dimension=C,e.start&&e.end&&(e.length=Object(m.g)(e.start,e.end)),e.start&&e.end&&(e.column=Object(m.g)(k,e.start)),e.roomId&&(e.row=Object(m.h)(rooms,e.roomId)),e));c(e)},[]),s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"}},s.a.createElement("div",{style:{width:P.width-200,marginLeft:200,marginBottom:"5px"}},F),s.a.createElement("div",{ref:x,style:{display:"flex",flexDirection:"column",justifyContent:"center"}},s.a.createElement(j,{exceptions:O,bars:t,rowTitleWidth:200,dimensions:P,columnTitleHeight:30,pointerLocation:I}),s.a.createElement(a.f,{ref:U,width:P.winWidth,columnTitleHeight:30,dimension:C,rowTitleWidth:200,rowTitles:()=>[{name:"Foundational",rows:6},{name:"Travel + lodging",rows:1}].flatMap(e=>[...Array(e.rows)].map((t,n)=>0===n?s.a.createElement("div",null,s.a.createElement("div",{style:{padding:"10px"}},e.name)):s.a.createElement("div",null))),columnTitles:{func:e=>(D(e),p({date:k,columnCount:e,titleRange:H,setPointerLocation:z,cellDimesions:C,rowTitleWidth:200,columnTitleHeight:30})),titleRange:H},content:(e,t)=>{const n={};return[...Array(t)].forEach((t,o)=>{[...Array(e)].forEach((e,t)=>{n[`r${o}c${t}`]=s.a.createElement(a.b,{style:{background:t%2==0?"#EDF1F2":"#F6F8F9"}})})}),n},mouseDownCell:e=>{const t=Object(a.e)(e.dimension,e.cell),n={};[...Array(t.length)].forEach((e,o)=>{n[o+t.column]=!0}),Y(n),l(t),W(t),r(!0)},mouseMoveGrid:e=>{if(B){const t=[];if(R.to){e.pageX,e.pageY;const n=e.currentTarget.getBoundingClientRect(),o=e.pageX-n.left,r=e.pageY-n.top,i=O.to,s={x:o+O.barEnd.x,y:r+O.barEnd.y},l=b(s,i),a=y(s,l,i);t.push({type:"path",d:g({...a,start:s,center:l,end:i}),stroke:"black",fill:"transparent","marker-end":"url(#arrow)"})}if(R.from){const n=e.currentTarget.getBoundingClientRect(),o=e.pageX-n.left,r=e.pageY-n.top,i={x:o-O.barStart.x,y:r-O.barStart.y},s=O.from,l=b(s,i),a=y(s,l,i);t.push({type:"path",d:g({...a,start:s,center:l,end:i}),stroke:"black",fill:"transparent","marker-end":"url(#arrow)"})}A(t),J(`.reserver-drag{transform: translate(${e.pageX-R.draggingLeft}px,${e.pageY-R.draggingTop}px)}`)}},mouseEnterCell:e=>{if(B&&!n){const t={};[...Array(R.length)].forEach((n,o)=>{t[o+e.cell.column-R.selectedCell]=!0}),Y(t)}if(n){const t=Object(a.g)(R,e.cell);console.log(t.length);const n={};[...Array(t.length)].forEach((e,o)=>{n[o+t.column]=!0}),Y(n),W(t),E(t)}},mouseUpCell:({cell:e})=>{if(B){const t={...R,row:e.row,column:e.column-R.selectedCell,moving:!1};E(t),A([]),M({}),J(".reserver-drag{transform: translate(0px,0px)}"),Y({}),$(!1)}if(n){const e=Object(a.h)(t);c(e),Y({}),r(!1)}}},({columnTitleHeight:e,rowTitleWidth:i})=>t.map(l=>s.a.createElement(a.a,Object(o.a)({draggable:!0},l,{onDragStart:(o,r)=>{if(n)return void o.preventDefault();const s=o.currentTarget.getBoundingClientRect(),l=o.pageX-s.left,a=o.pageY-s.top,c=parseInt(l/r.dimension.width),u={...r,selectedCell:c,moving:!0,draggingLeft:o.pageX,draggingTop:o.pageY},d={};if(d.barEnd={x:r.dimension.width*r.length-l,y:r.dimension.height-.5*r.dimension.height-a},d.barStart={x:l,y:a-.5*r.dimension.height},r.to){const n=t.findIndex(e=>e.id===r.to),o=t[n];n>-1&&(console.log(t),console.log("toColumn",o.column),d.to=v(o.column,o.dimension.width,e,o.row,o.dimension.height,i))}if(r.from){const n=t.findIndex(e=>e.id===r.from),o=t[n];if(d["from"+o.id]=o.id,n>-1){const t=v(o.column,o.dimension.width,e,o.row,o.dimension.height,i);d.from={x:o.dimension.width*o.length+t.x,y:t.y}}}M(d),E(u),W(u),$(!0)},key:l.id,className:l.moving?"reserver-drag":"",lastContent:s.a.createElement("div",{style:{zIndex:1e4}},s.a.createElement("img",{style:{float:"right"},onMouseDown:()=>{const e={...l,stick:"left",editing:!0};E(e),W(e),r(!0)},src:"/react-reserver/resources/images/dragicon.png"})),style:{...l.style,borderRadius:"6px",pointerEvents:l.editing||l.moving?"none":"auto",zIndex:1e3,...Object(a.i)(l.row,l.column,l.dimension,i,e)}}),s.a.createElement(a.c,{style:{display:"flex",alignItems:"center"}},s.a.createElement("div",{style:{margin:"5px",width:25}},s.a.createElement("img",{style:{borderRadius:"100%"},src:"/react-reserver/resources/images/"+(l.img||"default.jpg")})),s.a.createElement("div",{style:{width:l.length*l.dimension.width-40,overflow:"hidden",color:"#fff"}},l.text))))))))}var O={id:"projecttimeline",title:"Project Timeline",sidebar_label:"Project Timeline"},M={unversionedId:"projecttimeline",id:"projecttimeline",isDocsHomePage:!1,title:"Project Timeline",description:"This is a work in progress but I wanted to see if I could replicate the Asana Timeline",source:"@site/docs\\projecttimeline.md",slug:"/projecttimeline",permalink:"/react-reserver/docs/projecttimeline",version:"current",sidebar_label:"Project Timeline",sidebar:"docs",previous:{title:"Right To Left",permalink:"/react-reserver/docs/righttoleft"},next:{title:"Hotel Reservation",permalink:"/react-reserver/docs/hotelreservation"}},x=[],k={rightToc:x};function C(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},k,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This is a work in progress but I wanted to see if I could replicate the ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://luna1.co/330812.png"}),"Asana Timeline"),"\nI need to improve the SVG curves between the bars. But it works\nFeel free to drag the bars around and see how everything moves."),Object(l.b)(E,{mdxType:"ProjectTimeline"}))}C.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),r=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),u=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,h=d["".concat(s,".").concat(f)]||d[f]||m[f]||i;return n?r.a.createElement(h,l(l({ref:t},c),{},{components:n})):r.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return N})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return h})),n.d(t,"e",(function(){return A})),n.d(t,"g",(function(){return f})),n.d(t,"h",(function(){return m})),n.d(t,"i",(function(){return a})),n.d(t,"j",(function(){return O})),n.d(t,"k",(function(){return d})),n.d(t,"l",(function(){return M}));var o=n(0),r=n.n(o);function i(...e){const[t,n]=Object(o.useState)();return Object(o.useEffect)(()=>{if("function"!=typeof e[0])throw new Error("useFunction takes first argument as a function");{const t=e.splice(0,1);n(t[0](...e))}},[JSON.stringify(e)]),t}const s=(e,t,n)=>n>=e&&t>=n;function l(e){return isNaN(e)?e:{width:e,height:e}}function a(e,t,n,o=0,r=0){return{left:o+t*(n=l(n)).width,top:e*n.height+r}}function c(e,t,n){return e=l(e),Math.floor((t-n)/e.width)}function u(e,t){return e=l(e),Math.floor(t/e.height)}function d(e,t,n){return e.map(e=>{if(e.editing){let o=f(e,t.cell);return"function"==typeof n&&(o=n(o)),o}return e})}function m(e){return e.map(e=>e.editing?{...e,editing:!1}:e)}function f(e,t){if(e.column>t.column||"right"===e.stick&&e.length>1){e.stick="right";const n={row:e.row,column:t.column,length:e.column-t.column+e.length};return{...e,...n}}e.stick="left";const n={row:e.row,column:e.column,length:t.column-e.column+1};return{...e,...n}}function h(e){let t=[...e];return e.filter(e=>e.editing).forEach(e=>{const[n,o]=function(e,t){let n={...t};return[e.flatMap(e=>{if(e.id===t.id)return[];if(n.row===e.row){const t=e.column+1,o=n.column+1,r=e.column+e.length,i=n.column+n.length;if(s(t,r,o)||s(t,r,i)||s(o,i,r)||s(o,i,t)){const[t,o]=p(e,n);return n=o,t}{const[t,o]=y(e,n);return n=o,t}}{const[t,o]=y(e,n);return n=o,t}}),n]}(t,e);n.push(o),t=n}),t}const p=(e,t)=>((e=g(e)).collisions[t.id]="",(t=g(t)).collisions[e.id]="",[e,t]),g=e=>(e.collisions||(e.collisions={}),e),y=(e,t)=>(delete(e=g(e)).collisions[t.id],delete(t=g(t)).collisions[e.id],[e,t]),j="ADD",w="EDIT",b="DELETE",v="SET_BARS",E="SET_IS_EDITING";function O(e,t){switch(t.type){case v:return{...e,bars:t.payload};case w:{const n=[...e.bars],o=n.findIndex(e=>t.payload.id===e.id);return n[o]=t.payload,{...e,bars:n}}case j:{const n=[...e.bars];return n.push(t.payload),{...e,bars:n}}case b:{const n=[...e.bars],o=n.findIndex(e=>t.payload.id===e.id);return n.splice(o,1),{...e,bars:n}}case E:return{...e,isEditing:t.payload}}}function M(e,t){const[{bars:n,isEditing:r},i]=Object(o.useReducer)(e,{bars:t,isEditing:!1});return{isEditing:r,setIsEditing:e=>i({payload:e,type:E}),bars:n,addBar:e=>i({payload:e,type:j}),editBar:e=>i({payload:e,type:w}),deleteBar:e=>i({payload:e,type:b}),setBars:e=>i({payload:e,type:v})}}function x(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}function k(e,t=0,n=4){if(t!==n)return Array.isArray(e)?e.map(e=>k(e,t+1)):x(e)?Object.keys(e).map(n=>n+" : "+k(e[n],t+1)):"function"==typeof e?e.name+"function":"string"==typeof e||"number"==typeof e?e:JSON.stringify(e)}function C(...e){const[t,n]=Object(o.useState)({});return Object(o.useEffect)(()=>{if(x(e[0]))n(e[0]);else if("function"==typeof e[0]){const t=e.splice(0,1);n(t[0](...e))}},[JSON.stringify(k(e))]),t}function T(e){const t=C(e.content,e.length);return r.a.createElement("div",{id:e.id,role:"listitem",onDragStart:t=>{e.onDragStart(t,e)},onDragEnd:t=>{e.onDragEnd(t,e)},onClick:t=>{e.onClick(t,e)},onMouseOver:t=>{e.onMouseOver(t,e)},onContextMenu:t=>{e.onContextMenu(t,e)},onMouseEnter:t=>{e.onMouseEnter(t,e)},onMouseLeave:t=>{e.onMouseLeave(t,e)},onMouseMove:t=>{e.onMouseMove(t,e)},onMouseDown:t=>{e.onMouseDown(t,e)},onMouseUp:t=>{e.onMouseUp(t,e)},onPointerDown:t=>{"function"==typeof e.onPointerDown&&e.onPointerDown(t,e)},draggable:e.draggable,style:{...e.style,pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:e.style.display||"flex",position:e.style.position||"absolute",zIndex:e.style.zIndex||"100"},className:e.className},[...Array(e.length)].map((n,o)=>{const i=function(e,t,n,o,i){return 0===e?o||n[e]||r.a.createElement("div",null):t-1===e?i||n[t-1]||r.a.createElement("div",null):n[e]||r.a.createElement("div",null)}(o,e.length,t,e.firstContent,e.lastContent),s=Object.assign({width:e.dimension.width,height:e.dimension.height,pointerEvents:e.style.pointerEvents||"none"},i.props.style||{});return r.a.createElement(r.a.Fragment,{key:o},r.a.cloneElement(i,{...i.props,style:s},i.props.children))}),e.children)}function D(e){return r.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:e=>{e.preventDefault()},onDragOver:t=>{t.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},t)},className:e.className,onMouseOver:t=>{e.onMouseOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onMouseEnter:t=>{"function"==typeof e.onMouseEnter&&e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onPointerEnter:t=>{"function"==typeof e.onPointerEnter&&e.onPointerEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onPointerLeave:t=>{"function"==typeof e.onPointerLeave&&e.onPointerLeave({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onPointerMove:t=>{"function"==typeof e.onPointerMove&&e.onPointerMove({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onPointerOut:t=>{"function"==typeof e.onPointerOut&&e.onPointerOut({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onPointerOver:t=>{"function"==typeof e.onPointerOver&&e.onPointerOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onMouseDown:t=>{"function"==typeof e.onMouseDown&&e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onPointerDown:t=>{"function"==typeof e.onPointerDown&&e.onPointerDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onPointerUp:t=>{"function"==typeof e.onPointerUp&&e.onPointerUp({dimension:e.dimension,cell:{row:e.row,column:e.column}},t)},onMouseUp:t=>{e.onMouseUp({cell:{row:e.row,column:e.column}},t)},onDrop:t=>{e.onDrop({cell:{row:e.row,column:e.column}},t)},style:{overflow:"hidden",width:e.dimension.width,height:e.dimension.height,...e.style}},e.children)}function P(e){return r.a.createElement("div",{role:"columnheader",className:e.rowTitleClassName,style:{display:e.isVisible?"flex":"none",height:e.dimension.height}},"ltr"===e.dir&&r.a.createElement(D,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton),e.columnTitles.map((t,n)=>r.a.createElement(D,{"aria-colindex":n,key:n,onMouseOver:e.onMouseOverCell,dimension:e.dimension,column:n,row:-1,className:e.columnTitleClassName},t)),"rtl"===e.dir&&r.a.createElement(D,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton))}function N(e){return r.a.createElement("div",{className:e.className,style:Object.assign({userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"},e.style)},e.children)}function S(e){return r.a.createElement("div",{style:Object.assign({textAlign:"center",position:"absolute",whiteSpace:"nowrap",top:"0px",overflow:"hidden",userSelect:"none",lineHeight:1,height:"100%"},e.style),className:e.className},e.children)}function L(e=15){let t="";const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}function A(e,t,n){return{id:L(),length:1,dimension:e,editing:!0,...t,...n}}function I(...e){const[t,n]=Object(o.useState)([]);return Object(o.useEffect)(()=>{if(x(e[0])){const t=e[0].func;"function"==typeof t&&(e.splice(0,1),n(t(...e)))}else if("function"==typeof e[0]){const t=e.splice(0,1);n(t[0](...e))}else Array.isArray(e[0])&&n(e[0])},[JSON.stringify(e)]),t}T.defaultProps={style:{},dimension:{width:20,height:20},onClick:()=>{},onMouseOver:()=>{},onDragStart:()=>{},onDragEnd:()=>{},onContextMenu:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{},onMouseMove:()=>{},length:1,content:{}},D.defaultProps={onMouseEnter:()=>{},onMouseDown:()=>{},onMouseUp:()=>{},onMouseOver:()=>{},onDrop:()=>{}},P.defaultProps={onMouseOverCell:()=>{}};const z=r.a.forwardRef((e,t)=>{const n=i(u,e.dimension,e.height),s=i(c,e.dimension,e.width,e.rowTitleWidth),l=I(e.rowTitles,n),a=I(e.columnTitles,s),d=C(e.content,s,n),m=function(e){const[t,n]=Object(o.useState)({width:0,height:0});return Object(o.useEffect)(()=>{isNaN(e)?x(e)?n(e):n({width:-1,height:-1}):n({width:e,height:e})},[JSON.stringify(e)]),t}(e.dimension);return r.a.createElement("div",{ref:t,id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,onMouseMove:e.mouseMoveGrid,onPointerMove:e.pointerMoveGrid,onPointerCancel:e.pointerCancelGrid,style:{...e.style,position:"relative"}},r.a.createElement(P,{columnTitles:a,columnCount:s,height:e.columnTitleHeight,rowTitleWidth:e.rowTitleWidth,dimension:m,isVisible:a.length>0,columnTitleClassName:e.columnTitleClassName,dir:e.dir,onMouseOverCell:e.mouseOverCellHead,cantonClassName:e.cantonClassName}),[...Array(n)].map((t,n)=>r.a.createElement("div",{role:"rowgroup",key:n,style:{height:m.height,display:"flex"}},"ltr"===e.dir&&r.a.createElement(D,{style:{display:l.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},l[n]),[...Array(s)].map((t,o)=>r.a.createElement(D,{key:`r${n}c${o}`,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,onPointerDown:e.pointerDownCell,onPointerMove:e.pointerMoveCell,onPointerEnter:e.pointerEnterCell,onPointerLeave:e.pointerLeaveCell,onPointerUp:e.pointerUpCell,onPointerOver:e.pointerOverCell,dimension:m,className:e.cellClassName,column:o,row:n},d[`r${n}c${o}`])),"rtl"===e.dir&&r.a.createElement(D,{style:{display:l.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},l[n]))),r.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:n,columnCount:s,rowTitleWidth:e.rowTitleWidth,dimension:m,columnTitleHeight:a.length>0?e.columnTitleHeight>0?e.columnTitleHeight:m.height:0}),Array.isArray(e.children)&&e.children))});z.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,columnTitleHeight:0,dir:"ltr",mouseEnterCell:()=>{},mouseDownCell:()=>{},mouseUpCell:()=>{},mouseDragOverCell:()=>{},mouseDropCell:()=>{},mouseLeaveGrid:()=>{},mouseMoveGrid:()=>{},pointerDownCell:()=>{},pointerEnterCell:()=>{}},t.f=z},249:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return s})),n.d(t,"f",(function(){return l})),n.d(t,"g",(function(){return a})),n.d(t,"h",(function(){return c})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return m}));var o=n(112),r=n.n(o);function i(e,t,n,o="D"){return[...Array(t)].map((t,r)=>l(e,r,n,o))}function s(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}function l(e,t,n,o){return r()(e).add(t,n).format(o)}function a(e,t,n="DD-MM-YYYY"){const o=r()(e,n).startOf("day");return r()(t,n).startOf("day").diff(o,"days")}function c(e,t){return e[t].row}function u(e,t,n="unit",o="DD-MM-YYYY"){return e.start=t.clone().add(e.column,n).format(o),e.end=t.clone().add(e.column+e.length,n).format(o),e}function d(){let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e}function m(e){for(const t in e)return!1;return!0}},250:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return a}));const o=[{id:1,start:"29-07-2020",end:"04-08-2020",guestName:"Trevor Mathis",roomId:4},{id:3,start:"03-08-2020",end:"11-08-2020",guestName:"Nell McKinney",roomId:10},{id:4,start:"30-07-2020",end:"01-09-2020",guestName:"Max Lindsey",roomId:11},{id:2,start:"15-08-2020",end:"02-09-2020",guestName:"Ollie Sherman",roomId:10}],r=[{id:1,type:"full",to:2,from:4,start:"26-04-2019",end:"28-04-2019",img:"32.jpg",text:"Reach out to potention guest speakers",row:3},{id:2,type:"empty",from:1,start:"28-04-2019",end:"30-04-2019",img:"46.jpg",title:"Propose 3 conference keynotes",subtitle:"Due Today",row:5},{id:4,type:"empty",to:1,start:"27-04-2019",end:"01-05-2019",img:"46.jpg",title:"Propose 3 conference keynotes",subtitle:"Due Today",row:8}],i=[{id:563,start:"26-04-2019",end:"28-04-2019",name:"Jorge Vega",row:3},{id:9901,start:"28-04-2019",end:"30-04-2019",name:"Trevor Mathis",row:5},{id:1234,start:"27-04-2019",end:"01-05-2019",name:"Clifford Campbell",row:8}],s={4:{id:4,name:"Deluxe",hosts:"4 People",row:3},10:{id:10,name:"Basic",hosts:"2 People",row:8},11:{id:11,name:"Basic",hosts:"2 People",row:6}},l=["Max Lindsey","Jesus Myers","Julian Norton","Nell McKinney","Trevor Mathis","Virginia Parsons","Ollie Sherman","Beulah McBride","Sylvia Griffin","Jordan Holland","Elsie Schwartz","Leon Harrington","Jorge Vega","Lina Lucas","George Daniel","Douglas Simmons","Mary Willis","Jacob Stone","James Greer","Luke Foster","Nell Dunn","Lily Wallace","Leonard Glover","Francis Hodges","Clifford Campbell"],a=["\u05d0\u05d1\u05d2\u05d9\u05dc","\u05d0\u05d1\u05d9\u05d0\u05d5\u05e8","\u05d0\u05d1\u05d9\u05d0\u05dc","\u05d0\u05dc\u05d9\u05e2\u05d3","\u05d0\u05dc\u05d9\u05d0\u05dc"]},253:function(e,t,n){var o={"./af":115,"./af.js":115,"./ar":116,"./ar-dz":117,"./ar-dz.js":117,"./ar-kw":118,"./ar-kw.js":118,"./ar-ly":119,"./ar-ly.js":119,"./ar-ma":120,"./ar-ma.js":120,"./ar-sa":121,"./ar-sa.js":121,"./ar-tn":122,"./ar-tn.js":122,"./ar.js":116,"./az":123,"./az.js":123,"./be":124,"./be.js":124,"./bg":125,"./bg.js":125,"./bm":126,"./bm.js":126,"./bn":127,"./bn.js":127,"./bo":128,"./bo.js":128,"./br":129,"./br.js":129,"./bs":130,"./bs.js":130,"./ca":131,"./ca.js":131,"./cs":132,"./cs.js":132,"./cv":133,"./cv.js":133,"./cy":134,"./cy.js":134,"./da":135,"./da.js":135,"./de":136,"./de-at":137,"./de-at.js":137,"./de-ch":138,"./de-ch.js":138,"./de.js":136,"./dv":139,"./dv.js":139,"./el":140,"./el.js":140,"./en-au":141,"./en-au.js":141,"./en-ca":142,"./en-ca.js":142,"./en-gb":143,"./en-gb.js":143,"./en-ie":144,"./en-ie.js":144,"./en-il":145,"./en-il.js":145,"./en-in":146,"./en-in.js":146,"./en-nz":147,"./en-nz.js":147,"./en-sg":148,"./en-sg.js":148,"./eo":149,"./eo.js":149,"./es":150,"./es-do":151,"./es-do.js":151,"./es-us":152,"./es-us.js":152,"./es.js":150,"./et":153,"./et.js":153,"./eu":154,"./eu.js":154,"./fa":155,"./fa.js":155,"./fi":156,"./fi.js":156,"./fil":157,"./fil.js":157,"./fo":158,"./fo.js":158,"./fr":159,"./fr-ca":160,"./fr-ca.js":160,"./fr-ch":161,"./fr-ch.js":161,"./fr.js":159,"./fy":162,"./fy.js":162,"./ga":163,"./ga.js":163,"./gd":164,"./gd.js":164,"./gl":165,"./gl.js":165,"./gom-deva":166,"./gom-deva.js":166,"./gom-latn":167,"./gom-latn.js":167,"./gu":168,"./gu.js":168,"./he":169,"./he.js":169,"./hi":170,"./hi.js":170,"./hr":171,"./hr.js":171,"./hu":172,"./hu.js":172,"./hy-am":173,"./hy-am.js":173,"./id":174,"./id.js":174,"./is":175,"./is.js":175,"./it":176,"./it-ch":177,"./it-ch.js":177,"./it.js":176,"./ja":178,"./ja.js":178,"./jv":179,"./jv.js":179,"./ka":180,"./ka.js":180,"./kk":181,"./kk.js":181,"./km":182,"./km.js":182,"./kn":183,"./kn.js":183,"./ko":184,"./ko.js":184,"./ku":185,"./ku.js":185,"./ky":186,"./ky.js":186,"./lb":187,"./lb.js":187,"./lo":188,"./lo.js":188,"./lt":189,"./lt.js":189,"./lv":190,"./lv.js":190,"./me":191,"./me.js":191,"./mi":192,"./mi.js":192,"./mk":193,"./mk.js":193,"./ml":194,"./ml.js":194,"./mn":195,"./mn.js":195,"./mr":196,"./mr.js":196,"./ms":197,"./ms-my":198,"./ms-my.js":198,"./ms.js":197,"./mt":199,"./mt.js":199,"./my":200,"./my.js":200,"./nb":201,"./nb.js":201,"./ne":202,"./ne.js":202,"./nl":203,"./nl-be":204,"./nl-be.js":204,"./nl.js":203,"./nn":205,"./nn.js":205,"./oc-lnc":206,"./oc-lnc.js":206,"./pa-in":207,"./pa-in.js":207,"./pl":208,"./pl.js":208,"./pt":209,"./pt-br":210,"./pt-br.js":210,"./pt.js":209,"./ro":211,"./ro.js":211,"./ru":212,"./ru.js":212,"./sd":213,"./sd.js":213,"./se":214,"./se.js":214,"./si":215,"./si.js":215,"./sk":216,"./sk.js":216,"./sl":217,"./sl.js":217,"./sq":218,"./sq.js":218,"./sr":219,"./sr-cyrl":220,"./sr-cyrl.js":220,"./sr.js":219,"./ss":221,"./ss.js":221,"./sv":222,"./sv.js":222,"./sw":223,"./sw.js":223,"./ta":224,"./ta.js":224,"./te":225,"./te.js":225,"./tet":226,"./tet.js":226,"./tg":227,"./tg.js":227,"./th":228,"./th.js":228,"./tk":229,"./tk.js":229,"./tl-ph":230,"./tl-ph.js":230,"./tlh":231,"./tlh.js":231,"./tr":232,"./tr.js":232,"./tzl":233,"./tzl.js":233,"./tzm":234,"./tzm-latn":235,"./tzm-latn.js":235,"./tzm.js":234,"./ug-cn":236,"./ug-cn.js":236,"./uk":237,"./uk.js":237,"./ur":238,"./ur.js":238,"./uz":239,"./uz-latn":240,"./uz-latn.js":240,"./uz.js":239,"./vi":241,"./vi.js":241,"./x-pseudo":242,"./x-pseudo.js":242,"./yo":243,"./yo.js":243,"./zh-cn":244,"./zh-cn.js":244,"./zh-hk":245,"./zh-hk.js":245,"./zh-mo":246,"./zh-mo.js":246,"./zh-tw":247,"./zh-tw.js":247};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=253}}]);