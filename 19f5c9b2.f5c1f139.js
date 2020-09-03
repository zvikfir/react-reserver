(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{112:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),u=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},p=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(r),p=n,h=b["".concat(o,".").concat(p)]||b[p]||d[p]||a;return r?i.a.createElement(h,c(c({ref:t},s),{},{components:r})):i.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},65:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(2),i=(r(0),r(112));const a={id:"helpers",title:"Helpers",sidebar_label:"Helpers"},o={unversionedId:"helpers",id:"helpers",isDocsHomePage:!1,title:"Helpers",description:"Tag",source:"@site/docs\\helpers.md",permalink:"/react-reserver/docs/helpers",sidebar_label:"Helpers",sidebar:"docs",previous:{title:"Bar",permalink:"/react-reserver/docs/bar"},next:{title:"Reducer",permalink:"/react-reserver/docs/reducer"}},c=[{value:"Tag",id:"tag",children:[]},{value:"Peg",id:"peg",children:[]},{value:"createBar",id:"createbar",children:[]},{value:"getPosition",id:"getposition",children:[]},{value:"evaluatePosition",id:"evaluateposition",children:[]},{value:"resizeBars",id:"resizebars",children:[]},{value:"finishEditingBars",id:"finisheditingbars",children:[]},{value:"checkCollisions",id:"checkcollisions",children:[]}],l={rightToc:c};function s({components:e,...t}){return Object(i.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"tag"},"Tag"),Object(i.b)("h4",{id:"component"},"component"),Object(i.b)("p",null,"A styled div which helps position items within ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/bar"}),"Bar")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Bar><Tag> I am a bar </Tag></Bar>\n")),Object(i.b)("h2",{id:"peg"},"Peg"),Object(i.b)("h4",{id:"component-1"},"component"),Object(i.b)("p",null,"A styled div which helps position items within a cell"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'content={{\n    "r0c0":<Peg>300</Peg>\n}}\n')),Object(i.b)("h2",{id:"createbar"},"createBar"),Object(i.b)("h4",{id:"function"},"function"),Object(i.b)("p",null,"takes dimension,startlocation which is a cell, and props and creates an object with the properties id, length (default 1), editing (default true), and expands the props onto the object"),Object(i.b)("h2",{id:"getposition"},"getPosition"),Object(i.b)("h4",{id:"function-1"},"function"),Object(i.b)("p",null,"Takes the row, column, dimension, rowTitleWidth (default 0), columnTitleHeight (default 0), calculates the position in the grid and returns left and top."),Object(i.b)("h2",{id:"evaluateposition"},"evaluatePosition"),Object(i.b)("h4",{id:"function-2"},"function"),Object(i.b)("p",null,"Takes the bar object and the newlocation cell and figures out the position and length of the bar. "),Object(i.b)("h2",{id:"resizebars"},"resizeBars"),Object(i.b)("h4",{id:"function-3"},"function"),Object(i.b)("p",null,"Takes the bars array, newLocation cell and a function called resolver.\nIt goes through the list of bars and if a bar has the property editing = true it resizes the bar to the cell.\nreturns the changed bars array. "),Object(i.b)("h2",{id:"finisheditingbars"},"finishEditingBars"),Object(i.b)("h4",{id:"function-4"},"function"),Object(i.b)("p",null,"Takes the bars array and if one of the bars property editing = true sets it to false\nreturn the changed bars array. "),Object(i.b)("h2",{id:"checkcollisions"},"checkCollisions"),Object(i.b)("h4",{id:"function-5"},"function"),Object(i.b)("p",null,"Takes the bars array, filters out the objects where editing = true compares the rest of the bars and checks if they are overlapping\nit creates an array under they collisions which lists all ids it collides with/\nreturn the changed bars array. "))}s.isMDXComponent=!0}}]);