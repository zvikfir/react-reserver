(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return d})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return m})),t.d(n,"default",(function(){return h}));var r=t(2),a=t(0),o=t.n(a),i=t(112),s=t(113),c=t(47),l=t.n(c);function u(e){const{bars:n,isEditing:t,setIsEditing:a,addBar:i,setBars:c}=Object(s.l)(s.j,[]);return o.a.createElement(s.f,{mouseDownCell:e=>{const n=Object(s.e)(e.dimension,e.cell);i(n),a(!0)},mouseEnterCell:e=>{if(t){const t=Object(s.k)(n,e);c(t)}},mouseUpCell:()=>{const e=Object(s.h)(n);c(e),a(!1)},cellClassName:l.a.row_cell},()=>n.map(e=>o.a.createElement(s.a,Object(r.a)({key:e.id},e,{style:{...e.style,...Object(s.i)(e.row,e.column,e.dimension)}}))))}const d={id:"basic",title:"Basic",sidebar_label:"Basic"},p={unversionedId:"basic",id:"basic",isDocsHomePage:!1,title:"Basic",description:"This is the most basic example.",source:"@site/docs\\basic.md",permalink:"/react-reserver/docs/basic",sidebar_label:"Basic",sidebar:"docs",previous:{title:"Getting Started",permalink:"/react-reserver/docs/"},next:{title:"Basic++",permalink:"/react-reserver/docs/basicplusplus"}},m=[{value:"The code",id:"the-code",children:[]}],b={rightToc:m};function h({components:e,...n}){return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This is the most basic example.\nA grid, 500px wide and 500px high is created, since those are the default props."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Click and drag on any square in the grid to create a new bar"))),Object(i.b)(u,{mdxType:"Basic"}),Object(i.b)("h3",{id:"the-code"},"The code"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport 'react-reserver/dist/index.css'\nimport Reserver, \n{ Bar, \nuseReserver,\nreserverReducer,\ncreateBar, \ngetPosition, \nresizeBars } from 'react-reserver'\n\nexport default function Basic(props) {\n    const { bars, addBar, setBars } = useReserver(reserverReducer, [])    \n    return <Reserver \n    cellClassName={styles.row_cell}\n        mouseDownCell={(props) => {\n            const newbar = createBar(props.dimension, props.cell);\n            addBar(newbar)\n        }}\n        mouseEnterCell={(props) => {\n            const nBars = resizeBar(bars, props)\n            setBars(nBars)\n        }}\n        mouseUpCell={() => {  \n            const dBars = bars.map((bar) => {\n                if (bar.editing) {\n                    return { ...bar, editing: false }\n                }\n                return bar;\n            })\n            setBars(dBars)\n        }}\n    >\n        {\n            bars.map((bar) => {\n            return <Bar \n            key={bar.id}\n             {...bar} \n            style={{ ...getPosition(bar.row, bar.column, bar.dimension) }} /> })\n        }\n    </Reserver>\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-css"}),".row_cell {\n    border: 1px solid #eaeaea;\n    color: hsl(0, 0%, 0%);\n    box-sizing: border-box;\n    cursor: pointer;\n    display: inline-block;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    background: white;\n}\n")),Object(i.b)("p",null,"So whats going on here?\nIn order to allow you to control the state of Reserver we use a reducer"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"})," const { bars, addBar, setBars } = useReserver(reserverReducer, [])   \n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"useReserver")," is a the hook.\n",Object(i.b)("strong",{parentName:"p"},"reserverReducer")," is the reducer. "),Object(i.b)("p",null,"The hook returns:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"bars")," which is an array of objects representing the bars "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"addBar")," a function which takes a single object to add to the array "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"setBars")," a function which sets all the bars")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"There are more functions returned from the hook. We will start with these.")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"mouseDownCell={(props) => {\n            const newbar = createBar(props.dimension, props.cell);\n            addBar(newbar)\n        }}\n")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reserver#mousedowncell"}),"mouseDownCell")," is the onMouseDown for all each cell.\nThe prop parameter receives the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reserver#dimension"}),"dimension")," of the cell and the location in the object cell"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),"cell: { row: r, column: c }\n \n\n")),Object(i.b)("p",null,"The objects dimension and cell get passed to the function ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/helpers#createbar"}),"createBar")),Object(i.b)("p",null,"createBar is a helper function that takes dimension and cell as arguments and returns an object containing\na new id, the dimension, editing as a boolean set to true, the location which is the cell.\nAll these get passed as props into the bar and are necessary as basic properties for the bars array. "),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"addBar")," is a function that takes an object representing bar and adds it to the array bars."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"    mouseEnterCell={(props) => {\n            const nBars = resizeBar(bars, props)\n            setBars(nBars)\n        }}\n")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reserver#mouseentercell"}),"mouseEnterCell")," takes a function that runs when the mouse enters a cell"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/helpers#resizebars"}),"resizeBar")," is a function that takes all bars and the props and calculates the new size of the bars that have the property editing = true. "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"   mouseUpCell={() => {  \n            const dBars = bars.map((bar) => {\n                if (bar.editing) {\n                    return { ...bar, editing: false }\n                }\n                return bar;\n            })\n            setBars(dBars)\n        }}\n")),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reserver#mouseupcell"}),"mouseUpCell")," takes a function that runs on mouse up on a cell\nHere, the bars are mapped over and all the edited bars that have true on ",Object(i.b)("strong",{parentName:"p"},"editing")," becomes false.\nThe other option is to just use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/helpers#finisheditingbars"}),"finishEditingBars")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"     {\n            bars.map((bar) => {\n            return <Bar \n            key={bar.id}\n             {...bar} \n            style={{ ...getPosition(bar.row, bar.column, bar.dimension) }} /> })\n        }\n")),Object(i.b)("p",null,"The children of the Reserver component are an array of the component Bar."),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/helpers#getposition"}),"getPosition")," is a helper function that takes the row, column and dimension and calculates the absolute position (top and left) of the bar and passes it into style. "),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/reserver#cellclassname"}),"cellClassName")," is the className that is passed to all cells. by default it is empty so if you dont add a style it will be invisible"),Object(i.b)("p",null,"Thats it! Thats the most basic code that allows you to run the example. "),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This is not the best way to use Reserver. Its only an example to simplify the process of getting started. "))),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Go to Basic++ to see a more robust example of how to use Reserver"))))}h.isMDXComponent=!0},112:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(t),m=r,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?a.a.createElement(b,s(s({ref:n},l),{},{components:t})):a.a.createElement(b,s({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},113:function(e,n,t){"use strict";t.d(n,"a",(function(){return x})),t.d(n,"b",(function(){return S})),t.d(n,"c",(function(){return P})),t.d(n,"d",(function(){return h})),t.d(n,"e",(function(){return A})),t.d(n,"g",(function(){return b})),t.d(n,"h",(function(){return m})),t.d(n,"i",(function(){return l})),t.d(n,"j",(function(){return E})),t.d(n,"k",(function(){return p})),t.d(n,"l",(function(){return C}));var r=t(0),a=t.n(r);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var a=Object(r.useState)(),o=a[0],i=a[1];return Object(r.useEffect)((function(){if("function"!=typeof n[0])throw new Error("useFunction takes first argument as a function");var e=n.splice(0,1);i(e[0].apply(e,n))}),[JSON.stringify(n)]),o}var s=function(e,n,t){return t>=e&&n>=t};function c(e){return isNaN(e)?e:{width:e,height:e}}function l(e,n,t,r,a){return void 0===r&&(r=0),void 0===a&&(a=0),{left:r+n*(t=c(t)).width,top:e*t.height+a}}function u(e,n,t){return e=c(e),Math.floor((n-t)/e.width)}function d(e,n){return e=c(e),Math.floor(n/e.height)}function p(e,n,t){return e.map((function(e){if(e.editing){var r=b(e,n.cell);return"function"==typeof t&&(r=t(r)),r}return e}))}function m(e){return e.map((function(e){return e.editing?o({},e,{editing:!1}):e}))}function b(e,n){return e.column>n.column||"right"===e.stick&&e.length>1?(e.stick="right",o({},e,{row:e.row,column:n.column,length:e.column-n.column+e.length})):(e.stick="left",o({},e,{row:e.row,column:e.column,length:n.column-e.column+1}))}function h(e){var n=[].concat(e);return e.filter((function(e){return e.editing})).forEach((function(e){var t=function(e,n){var t=o({},n);return[e.flatMap((function(e){if(e.id===n.id)return[];if(t.row===e.row){var r=e.column+1,a=t.column+1,o=e.column+e.length,i=t.column+t.length;if(s(r,o,a)||s(r,o,i)||s(a,i,o)||s(a,i,r)){var c=f(e,t),l=c[0],u=c[1];return t=u,l}var d=v(e,t),p=d[0],m=d[1];return t=m,p}var b=v(e,t),h=b[0],g=b[1];return t=g,h})),t]}(n,e),r=t[0],a=t[1];r.push(a),n=r})),n}var f=function(e,n){return(e=g(e)).collisions[n.id]="",(n=g(n)).collisions[e.id]="",[e,n]},g=function(e){return e.collisions||(e.collisions={}),e},v=function(e,n){return delete(e=g(e)).collisions[n.id],delete(n=g(n)).collisions[e.id],[e,n]},O="ADD",j="EDIT",y="DELETE",w="SET_BARS",N="SET_IS_EDITING";function E(e,n){switch(n.type){case w:return o({},e,{bars:n.payload});case j:var t=[].concat(e.bars),r=t.findIndex((function(e){return n.payload.id===e.id}));return t[r]=n.payload,o({},e,{bars:t});case O:var a=[].concat(e.bars);return a.push(n.payload),o({},e,{bars:a});case y:var i=[].concat(e.bars),s=i.findIndex((function(e){return n.payload.id===e.id}));return i.splice(s,1),o({},e,{bars:i});case N:return o({},e,{isEditing:n.payload})}}function C(e,n){var t=Object(r.useReducer)(e,{bars:n,isEditing:!1}),a=t[0],o=a.bars,i=a.isEditing,s=t[1];return{isEditing:i,setIsEditing:function(e){return s({payload:e,type:N})},bars:o,addBar:function(e){return s({payload:e,type:O})},editBar:function(e){return s({payload:e,type:j})},deleteBar:function(e){return s({payload:e,type:y})},setBars:function(e){return s({payload:e,type:w})}}}function M(e){return"object"==typeof e&&!Array.isArray(e)&&null!==e}function T(e,n,t){if(void 0===n&&(n=0),void 0===t&&(t=4),n!==t)return Array.isArray(e)?e.map((function(e){return T(e,n+1)})):M(e)?Object.keys(e).map((function(t){return t+" : "+T(e[t],n+1)})):"function"==typeof e?e.name+"function":"string"==typeof e||"number"==typeof e?e:JSON.stringify(e)}function B(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var a=Object(r.useState)({}),o=a[0],i=a[1];return Object(r.useEffect)((function(){if(M(n[0]))i(n[0]);else if("function"==typeof n[0]){var e=n.splice(0,1);i(e[0].apply(e,n))}}),[JSON.stringify(T(n))]),o}function x(e){var n=B(e.content,e.length);return a.a.createElement("div",{id:e.id,role:"listitem",onDragStart:function(n){e.onDragStart(n,e)},onDragEnd:function(n){e.onDragEnd(n,e)},onClick:function(n){e.onClick(n,e)},onMouseOver:function(n){e.onMouseOver(n,e)},onContextMenu:function(n){e.onContextMenu(n,e)},onMouseEnter:function(n){e.onMouseEnter(n,e)},onMouseLeave:function(n){e.onMouseLeave(n,e)},onMouseMove:function(n){e.onMouseMove(n,e)},onMouseDown:function(n){e.onMouseDown(n,e)},onMouseUp:function(n){e.onMouseUp(n,e)},draggable:e.draggable,style:o({},e.style,{pointerEvents:e.style.pointerEvents||"none",background:e.style.background||"#0E6BA8",display:e.style.display||"flex",position:e.style.position||"absolute",zIndex:e.style.zIndex||"100"}),className:e.className},[].concat(Array(e.length)).map((function(t,r){var i=function(e,n,t,r,o){return 0===e?r||t[e]||a.a.createElement("div",null):n-1===e?o||t[n-1]||a.a.createElement("div",null):t[e]||a.a.createElement("div",null)}(r,e.length,n,e.firstContent,e.lastContent),s=Object.assign({width:e.dimension.width,height:e.dimension.height,pointerEvents:e.style.pointerEvents||"none"},i.props.style||{});return a.a.createElement(a.a.Fragment,{key:r},a.a.cloneElement(i,o({},i.props,{style:s}),i.props.children))})),e.children)}function D(e){return a.a.createElement("div",{role:"gridcell","aria-colindex":e.column,onDragStart:function(e){e.preventDefault()},onDragOver:function(n){n.preventDefault(),e.onDragOver({cell:{row:e.row,column:e.column}},n)},className:e.className,onMouseOver:function(n){e.onMouseOver({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseEnter:function(n){e.onMouseEnter({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseDown:function(n){e.onMouseDown({dimension:e.dimension,cell:{row:e.row,column:e.column}},n)},onMouseUp:function(n){e.onMouseUp({cell:{row:e.row,column:e.column}},n)},onDrop:function(n){e.onDrop({cell:{row:e.row,column:e.column}},n)},style:o({overflow:"hidden",width:e.dimension.width,height:e.dimension.height},e.style)},e.children)}function k(e){return a.a.createElement("div",{role:"columnheader",className:e.rowTitleClassName,style:{display:e.isVisible?"flex":"none",height:e.dimension.height}},"ltr"===e.dir&&a.a.createElement(D,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton),e.columnTitles.map((function(n,t){return a.a.createElement(D,{"aria-colindex":t,key:t,onMouseOver:e.onMouseOverCell,dimension:e.dimension,column:t,row:-1,className:e.columnTitleClassName},n)})),"rtl"===e.dir&&a.a.createElement(D,{dimension:{height:e.dimension.height,width:e.rowTitleWidth},className:e.cantonClassName},e.canton))}function S(e){return a.a.createElement("div",{className:e.className,style:Object.assign({userSelect:"none",pointerEvents:"none",alignItems:"center",height:"100%",width:"100%",display:"flex",fontSize:"10px",background:"green"},e.style)},e.children)}function P(e){return a.a.createElement("div",{style:Object.assign({textAlign:"center",position:"absolute",whiteSpace:"nowrap",top:"0px",overflow:"hidden",userSelect:"none",lineHeight:1,height:"100%"},e.style),className:e.className},e.children)}function R(e){void 0===e&&(e=15);for(var n="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<e;r++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}function A(e,n,t){return o({id:R(),length:1,dimension:e,editing:!0},n,t)}function z(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var a=Object(r.useState)([]),o=a[0],i=a[1];return Object(r.useEffect)((function(){if(M(n[0])){var e=n[0].func;"function"==typeof e&&(n.splice(0,1),i(e.apply(void 0,n)))}else if("function"==typeof n[0]){var t=n.splice(0,1);i(t[0].apply(t,n))}else Array.isArray(n[0])&&i(n[0])}),[JSON.stringify(n)]),o}x.defaultProps={style:{},dimension:{width:20,height:20},onClick:function(){},onMouseOver:function(){},onDragStart:function(){},onDragEnd:function(){},onContextMenu:function(){},onMouseDown:function(){},onMouseUp:function(){},onMouseEnter:function(){},onMouseLeave:function(){},onMouseMove:function(){},length:1,content:{}},D.defaultProps={onMouseEnter:function(){},onMouseDown:function(){},onMouseUp:function(){},onMouseOver:function(){},onDrop:function(){}},k.defaultProps={onMouseOverCell:function(){}};var I=a.a.forwardRef((function(e,n){var t=i(d,e.dimension,e.height),s=i(u,e.dimension,e.width,e.rowTitleWidth),c=z(e.rowTitles,t),l=z(e.columnTitles,s),p=B(e.content,s,t),m=function(e){var n=Object(r.useState)({width:0,height:0}),t=n[0],a=n[1];return Object(r.useEffect)((function(){isNaN(e)?M(e)?a(e):a({width:-1,height:-1}):a({width:e,height:e})}),[JSON.stringify(e)]),t}(e.dimension);return a.a.createElement("div",{ref:n,id:e.id,className:e.className,role:"grid",onMouseLeave:e.mouseLeaveGrid,onMouseMove:e.mouseMoveGrid,style:o({},e.style,{position:"relative"})},a.a.createElement(k,{columnTitles:l,columnCount:s,height:e.columnTitleHeight,rowTitleWidth:e.rowTitleWidth,dimension:m,isVisible:l.length>0,columnTitleClassName:e.columnTitleClassName,dir:e.dir,onMouseOverCell:e.mouseOverCellHead,cantonClassName:e.cantonClassName}),[].concat(Array(t)).map((function(n,t){return a.a.createElement("div",{role:"rowgroup",key:t,style:{height:m.height,display:"flex"}},"ltr"===e.dir&&a.a.createElement(D,{style:{display:c.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},c[t]),[].concat(Array(s)).map((function(n,r){return a.a.createElement(D,{key:"r"+t+"c"+r,onMouseDown:e.mouseDownCell,onMouseEnter:e.mouseEnterCell,onMouseUp:e.mouseUpCell,onDrop:e.mouseDropCell,onDragOver:e.mouseDragOverCell,dimension:m,className:e.cellClassName,column:r,row:t},p["r"+t+"c"+r])})),"rtl"===e.dir&&a.a.createElement(D,{style:{display:c.length>0?"initial":"none"},dimension:{height:m.height,width:e.rowTitleWidth},className:e.rowTitleClassName},c[t]))})),a.a.createElement("div",{role:"list"},"function"==typeof e.children&&e.children({rowCount:t,columnCount:s,rowTitleWidth:e.rowTitleWidth,dimension:m,columnTitleHeight:l.length>0?e.columnTitleHeight>0?e.columnTitleHeight:m.height:0}),Array.isArray(e.children)&&e.children))}));I.defaultProps={columnTitles:[],rowTitles:[],content:{},dimension:20,width:500,height:500,rowTitleWidth:0,columnTitleHeight:0,dir:"ltr",mouseEnterCell:function(){},mouseDownCell:function(){},mouseUpCell:function(){},mouseDragOverCell:function(){},mouseDropCell:function(){},mouseLeaveGrid:function(){},mouseMoveGrid:function(){}},n.f=I}}]);