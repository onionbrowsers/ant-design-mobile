(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[69],{"0m3q":function(e,t,n){"use strict";n("ahKI")},"2Pr/":function(e,t,n){},"60ow":function(e,t,n){},"9kvl":function(e,t,n){"use strict";var a=n("FfOG");n.d(t,"a",(function(){return a["b"]}));n("bCY9")},Bjia:function(e,t,n){"use strict";var a=n("mn0l"),l=n("iojd"),c=n("ahKI"),o=n.n(c),r=n("vumQ"),i=n("17ds");n("Qf6j"),n("60ow");t["a"]=e=>{var t=e.code,n=e.lang,c=e.showCopy,s=void 0===c||c,d=Object(i["useCopy"])(),m=Object(l["a"])(d,2),u=m[0],h=m[1];return o.a.createElement("div",{className:"__dumi-default-code-block"},o.a.createElement(r["a"],Object(a["a"])({},r["b"],{code:t,language:n,theme:void 0}),(e=>{var n=e.className,a=e.style,l=e.tokens,c=e.getLineProps,r=e.getTokenProps;return o.a.createElement("pre",{className:n,style:a},s&&o.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":h,onClick:()=>u(t)}),l.map(((e,t)=>o.a.createElement("div",c({line:e,key:t}),e.map(((e,t)=>o.a.createElement("span",r({token:e,key:t}))))))))})))}},DgDr:function(e,t,n){"use strict";n("mn0l"),n("ahKI"),n("2Pr/")},N0lm:function(e,t,n){"use strict";var a=n("mn0l"),l=n("ahKI"),c=n.n(l);n("tCeM");t["a"]=e=>c.a.createElement("div",Object(a["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,n){"use strict"},YWOM:function(e,t,n){},ekZX:function(e,t,n){"use strict";n.r(t),n.d(t,"ACTIVE_MSG_TYPE",(function(){return j}));var a=n("ahKI"),l=n.n(a),c=n("iojd"),o=n("/7QA"),r=n("9kvl"),i=n("17ds"),s=n("wQXD"),d=n.n(s),m="https://codesandbox.io/api/v1/sandboxes/define";function u(e){return d.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function h(e){var t=Boolean(e.sources._.tsx),n=t?".tsx":".jsx",a={},l={},o=Object.values(e.dependencies).filter((e=>e.css)),r="app".concat(n),i="index".concat(n);Object.entries(e.dependencies).forEach((e=>{var t=Object(c["a"])(e,2),n=t[0],a=t[1].version;l[n]=a})),l["react-dom"]||(l["react-dom"]=l.react||"latest"),a["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},a["index.html"]={content:'<div id="root"></div>'},a[i]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(o.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var s=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(c["a"])(e,2),n=t[0],l=t[1],o=l.tsx,i=l.jsx,d=l.content,m={content:o||i||d};a["_"===n?r:n]=m,s=s||m.content.includes("from 'demos'"),m.content=m.content.replace("from 'demos'","from './demos-util'")})),s&&(l["lorem-ipsum"]="^2.0.8",a["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),a["package.json"]={content:JSON.stringify({name:e.title,main:i,dependencies:l,devDependencies:t?{typescript:"^3"}:{}},null,2)},u({files:a})}function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=Object(a["useState"])(),l=Object(c["a"])(n,2),o=l[0],r=l[1];return Object(a["useEffect"])((()=>{if(e){var n=document.createElement("form"),a=h(e);function l(e,t){var a=document.createElement("input");n.appendChild(a),a.name=e,a.value=t}return n.method="POST",n.target="_blank",n.style.display="none",n.action=t,l("parameters",a),l("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),n.setAttribute("data-demo",e.title||""),document.body.appendChild(n),r((()=>()=>n.submit())),()=>n.remove()}}),[e]),o}var f=n("Bjia");n("YWOM");function E(e,t){var n,a=null===(n=e.match(/\.(\w+)$/))||void 0===n?void 0:n[1];return a||(a=t.tsx?"tsx":"jsx"),a}var v=e=>{var t,n=Object(a["useRef"])(null),s=Object(a["useContext"])(i["context"]),d=s.locale,m=Object(i["useLocaleProps"])(d,e),u=(null===r["a"]||void 0===r["a"]?void 0:r["a"].location.hash)==="#".concat(m.identifier),h=1===Object.keys(m.sources).length,v=p(null!==(t=m.hideActions)&&void 0!==t&&t.includes("CSB")?null:m),b=Object(i["useMotions"])(m.motions||[],n.current),w=Object(c["a"])(b,2),g=w[0],y=w[1],k=Object(i["useCopy"])(),x=Object(c["a"])(k,2),j=x[0],O=x[1],_=Object(a["useState"])("_"),N=Object(c["a"])(_,2),T=N[0],I=N[1],S=Object(a["useState"])(E(T,m.sources[T])),M=Object(c["a"])(S,2),A=M[0],L=M[1],C=m.sources[T][A]||m.sources[T].content,P=Object(i["useTSPlaygroundUrl"])(d,C),R=Object(i["usePrefersColor"])(),z=Object(c["a"])(R,1);z[0];function Z(e){I(e),L(E(e,m.sources[e]))}return l.a.createElement("div",{style:m.style,className:[m.className,"__dumi-default-previewer",u?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:m.identifier,"data-debug":m.debug||void 0},l.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":m.title},m.title&&l.a.createElement(i["AnchorLink"],{to:"#".concat(m.identifier)},m.title),m.description&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:m.description}})),l.a.createElement("div",{className:"__dumi-default-previewer-actions"},m.debug&&l.a.createElement("span",{className:"debug-badge"},"Debug Only"),v&&l.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:v}),m.motions&&l.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:y,onClick:()=>g()}),l.a.createElement("div",{className:"spacer"}),l.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":O,onClick:()=>j(C)}),"tsx"===A&&l.a.createElement(i["Link"],{target:"_blank",to:P},l.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),l.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!h&&l.a.createElement(o["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:T,onChange:Z},Object.keys(m.sources).map((e=>l.a.createElement(o["Tabs"].Tab,{title:"_"===e?"index.".concat(E(e,m.sources[e])):e,key:e})))),l.a.createElement("div",{className:"__dumi-default-previewer-source"},l.a.createElement(f["a"],{code:C,lang:A,showCopy:!1}))))},b=v,w=(n("oeoJ"),n("NEWu")),g=(n("q9vG"),e=>{var t=e.url,n=Object(a["useState"])(Math.random()),r=Object(c["a"])(n,2),s=r[0],d=r[1],m=Object(i["usePrefersColor"])(),u=Object(c["a"])(m,1),h=u[0],p=Object(a["useContext"])(i["context"]),f=p.config.mode;return Object(a["useEffect"])((()=>{d(Math.random())}),[h]),Object(a["useEffect"])((()=>{var e=["light","dark"].map((e=>window.matchMedia("(prefers-color-scheme: ".concat(e,")")))),t=()=>{d(Math.random())};e.forEach((e=>e.addEventListener("change",t)))}),[]),l.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":f},l.a.createElement("iframe",{title:"dumi-previewer",src:t,key:s}),l.a.createElement("div",{className:"adm-doc-device-action"},l.a.createElement("a",{onClick:()=>d(Math.random())},y),l.a.createElement(o["Popover"],{content:l.a.createElement(w["a"],{value:t,size:96}),trigger:"click"},l.a.createElement("a",null,k)),l.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},x)))}),y=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),k=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),x=l.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),j="dumi:scroll-into-demo";t["default"]=e=>{var t,n=Object(i["useDemoUrl"])(e.identifier);return l.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},l.a.createElement("div",{className:"adm-doc-previewer-source"},l.a.createElement(b,e)),l.a.createElement("div",{className:"adm-doc-previewer-device"},l.a.createElement(g,{url:null!==(t=e.demoUrl)&&void 0!==t?t:n})))}},eqKt:function(e,t,n){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,n){"use strict";var a=n("ahKI"),l=n.n(a),c=n("eqKt"),o=n.n(c),r=e=>l.a.createElement("a",{className:o.a.card,href:e.link,target:"_blank"},e.image&&l.a.createElement("img",{src:e.image,alt:e.title}),l.a.createElement("div",{className:o.a.content},l.a.createElement("div",{className:o.a.title},e.title),l.a.createElement("div",{className:o.a.description},e.description)));t["a"]=r},hPU5:function(e,t,n){"use strict";var a=n("ahKI"),l=n.n(a),c=n("bIC1"),o=n.n(c);n("nxnQ");function r(e,t){return u(e)||m(e,t)||s(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,c=[],o=!0,r=!1;try{for(n=n.call(e);!(o=(a=n.next()).done);o=!0)if(c.push(a.value),t&&c.length===t)break}catch(i){r=!0,l=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(r)throw l}}return c}}function u(e){if(Array.isArray(e))return e}var h=function(e){var t=e.children,n=Object(a["useRef"])(),c=Object(a["useState"])(!1),i=r(c,2),s=i[0],d=i[1],m=Object(a["useState"])(!1),u=r(m,2),h=u[0],p=u[1];return Object(a["useEffect"])((function(){var e=n.current,t=o()((function(){d(e.scrollLeft>0),p(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":s||void 0,"data-right-folded":h||void 0},l.a.createElement("table",null,t)))};t["a"]=h},mVOg:function(e,t,n){"use strict";var a=n("iojd"),l=n("ahKI"),c=n.n(l),o=n("17ds"),r=n("/7QA");t["a"]=()=>{var e=Object(l["useContext"])(o["context"]),t=e.locale,n=Object(l["useState"])(!1),i=Object(a["a"])(n,2),s=i[0],d=i[1];return c.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},style:{verticalAlign:"-0.125em"}},c.a.createElement(r["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:s,mode:"dark"},c.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},nxnQ:function(e,t,n){},oeoJ:function(e,t,n){},q9vG:function(e,t,n){},rJe4:function(e,t,n){"use strict";n.r(t);var a=n("ahKI"),l=n.n(a),c=n("17ds"),o=(n("N0lm"),n("TAbJ"),n("DgDr"),n("mVOg"),n("ekZX")),r=(n("gKi5"),n("Bjia")),i=(n("0m3q"),n("hPU5")),s=l.a.memo((e=>{var t=e.demos,n=t["infinite-scroll-demo1"].component,a=t["infinite-scroll-content"].component,s=t["infinite-scroll-demo3"].component,d=t["infinite-scroll-demo2"].component,m=t["infinite-scroll-demo4"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"infinitescroll"},l.a.createElement(c["AnchorLink"],{to:"#infinitescroll","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"InfiniteScroll"),l.a.createElement("p",null,"Scrolling to the bottom of the list automatically loads more data."),l.a.createElement("h2",{id:"when-to-use"},l.a.createElement(c["AnchorLink"],{to:"#when-to-use","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"When to Use"),l.a.createElement("p",null,"When users want to see new data, they can slide up the page to automatically load the data."),l.a.createElement("p",null,"When the ",l.a.createElement("code",null,"hasMore")," prop is ",l.a.createElement("code",null,"true"),", the infinite scroll component will call the defined ",l.a.createElement("code",null,"loadMore")," function when the user page scrolls to the bottom ",l.a.createElement("code",null,"threshold")," (default is 250px)."),l.a.createElement("h2",{id:"demos"},l.a.createElement(c["AnchorLink"],{to:"#demos","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Demos")),l.a.createElement(o["default"],t["infinite-scroll-demo1"].previewerProps,l.a.createElement(n,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"infinitescroll-1"},l.a.createElement(c["AnchorLink"],{to:"#infinitescroll-1","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"InfiniteScroll"),l.a.createElement("h3",{id:"props"},l.a.createElement(c["AnchorLink"],{to:"#props","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Props"),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Description"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Default"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"children"),l.a.createElement("td",null,"Rendering custom guide content"),l.a.createElement("td",null,l.a.createElement("code",null,"React.ReactNode | ((hasMore: boolean, failed: boolean, retry: () => void) => React.ReactNode)")),l.a.createElement("td",null,"Default guidance tips")),l.a.createElement("tr",null,l.a.createElement("td",null,"hasMore"),l.a.createElement("td",null,"Whether there is more content or not"),l.a.createElement("td",null,l.a.createElement("code",null,"boolean")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"loadMore"),l.a.createElement("td",null,"Callback to load more"),l.a.createElement("td",null,l.a.createElement("code",null,"(isRetry: boolean) => Promise<void>")),l.a.createElement("td",null,"-")),l.a.createElement("tr",null,l.a.createElement("td",null,"threshold"),l.a.createElement("td",null,"The threshold of the scroll bottoming distance that triggers the loading event, in pixels"),l.a.createElement("td",null,l.a.createElement("code",null,"number")),l.a.createElement("td",null,l.a.createElement("code",null,"250"))))),l.a.createElement("p",null,"InfiniteScroll will automatically lock the ",l.a.createElement("code",null,"loadMore")," function to avoid repeated requests, but the premise is that the ",l.a.createElement("code",null,"loadMore")," function needs to return a correct Promise. The following are examples of correct and incorrect usage:"),l.a.createElement(r["a"],{code:"function loadMore() { // wrong\n  doRequest()\n}\n\nasync function loadMore() { // wrong\n  doRequest()\n}\n\nasync function loadMore() { // ok\n  await doRequest()\n}\n\nfunction loadMore() { // ok\n  return doRequest()\n}",lang:"js"}),l.a.createElement("h3",{id:"customized-content"},l.a.createElement(c["AnchorLink"],{to:"#customized-content","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Customized Content"),l.a.createElement("p",null,"If necessary, ",l.a.createElement("code",null,"InfiniteScroll")," allows custom display content, this content can contain any element, including svg and elements with css animation.")),l.a.createElement(o["default"],t["infinite-scroll-content"].previewerProps,l.a.createElement(a,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"use-with-search"},l.a.createElement(c["AnchorLink"],{to:"#use-with-search","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Use with search")),l.a.createElement(o["default"],t["infinite-scroll-demo3"].previewerProps,l.a.createElement(s,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"infinite-virtualized-list"},l.a.createElement(c["AnchorLink"],{to:"#infinite-virtualized-list","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Infinite virtualized List"),l.a.createElement("p",null,"An example of infinite virtualized list via using ",l.a.createElement(c["Link"],{to:"https://github.com/bvaughn/react-virtualized"},"react-virtualized"))),l.a.createElement(o["default"],t["infinite-scroll-demo2"].previewerProps,l.a.createElement(d,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"support-click-to-retry-when-the-request-fails"},l.a.createElement(c["AnchorLink"],{to:"#support-click-to-retry-when-the-request-fails","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Support click to retry when the request fails")),l.a.createElement(o["default"],t["infinite-scroll-demo4"].previewerProps,l.a.createElement(m,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"faq"},l.a.createElement(c["AnchorLink"],{to:"#faq","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"FAQ"),l.a.createElement("h3",{id:"does-it-support-pulling-down"},l.a.createElement(c["AnchorLink"],{to:"#does-it-support-pulling-down","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Does it support pulling down?"),l.a.createElement("p",null,"Pulling down is another component: ",l.a.createElement(c["Link"],{to:"/components/pull-to-refresh"},"PullToRefresh"),"."),l.a.createElement("h3",{id:"why-do-i-get-an-error-when-used-with-ahooks-usedebouncefn-or-usethrottlefn"},l.a.createElement(c["AnchorLink"],{to:"#why-do-i-get-an-error-when-used-with-ahooks-usedebouncefn-or-usethrottlefn","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Why do I get an error when used with ahooks' ",l.a.createElement("code",null,"useDebounceFn")," or ",l.a.createElement("code",null,"useThrottleFn"),"?"),l.a.createElement("p",null,"InfiniteScroll itself already contains the logic to prevent concurrent repeated requests, so please do not use it with ",l.a.createElement("code",null,"useDebounceFn")," or ",l.a.createElement("code",null,"useThrottleFn"),", there will be logical conflicts between them."),l.a.createElement("h3",{id:"why-does-infinitescroll-keep-loading-when-switching-from-hide-to-display"},l.a.createElement(c["AnchorLink"],{to:"#why-does-infinitescroll-keep-loading-when-switching-from-hide-to-display","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"Why does ",l.a.createElement("code",null,"InfiniteScroll")," keep loading when switching from hide to display?"),l.a.createElement("p",null,"When using the ",l.a.createElement("code",null,"InfiniteScroll")," component, it internally detects whether the component is visible. ",l.a.createElement("strong",null,"When visible, ",l.a.createElement("code",null,"loadMore")," will be called to load data"),"; ",l.a.createElement("strong",null,"when invisible, ",l.a.createElement("code",null,"loadMore"))," will not be called (this is necessary to avoid unnecessary data requests). And, ",l.a.createElement("strong",null,"this checking mechanism, will happen on the first render of the component and every time it is re-rendered")," to ensure that the data is loaded correctly."),l.a.createElement("p",null,"But in some scenarios (for example, when used with the ",l.a.createElement("code",null,"Tabs")," component), you may encounter the situation where the ",l.a.createElement("code",null,"InfiniteScroll")," component keeps loading and no data is loaded, such as the following example:"),l.a.createElement(r["a"],{code:"<Tabs>\n  <Tabs.Tab title='\u6c34\u679c' key='fruits'>\u83e0\u841d</Tabs.Tab>\n  <Tabs.Tab title='\u852c\u83dc' key='vegetables' forceRender>\n    <InfiniteScroll\n      hasMore={true}\n      loadMore={() => {\n        // When switching to this Tab, this function does not execute\n      }}\n    />\n  </Tabs.Tab>\n</Tabs>",lang:"tsx"}),l.a.createElement("p",null,"Problem description: The ",l.a.createElement("code",null,"Tabs")," component displays the content of the first ",l.a.createElement("code",null,"Tab")," item by default, so the content of the second ",l.a.createElement("code",null,"Tab")," item ",l.a.createElement("code",null,"InfiniteScroll")," is not visible. But the second ",l.a.createElement("code",null,"Tab")," has a ",l.a.createElement("code",null,"forceRender")," property added, so its content is rendered even if it is not visible. When the ",l.a.createElement("code",null,"InfiniteScroll")," component is rendered this time, since the component is not visible, the ",l.a.createElement("code",null,"loadMore")," function will not be called, which is normal and as expected."),l.a.createElement("p",null,l.a.createElement("em",null,"However, when we switch to the second ",l.a.createElement("code",null,"Tab")," to display the ",l.a.createElement("code",null,"InfiniteScroll")," component, we find that the ",l.a.createElement("code",null,"InfiniteScroll")," component does not call the ",l.a.createElement("code",null,"loadMore")," function, which is different from what we expected. We hope that the ",l.a.createElement("code",null,"loadMore")," function will be called at this time"),"."),l.a.createElement("p",null,"Reason: When you click to switch the ",l.a.createElement("code",null,"Tab")," item of the ",l.a.createElement("code",null,"Tabs")," component, the highlight state of the ",l.a.createElement("code",null,"Tabs")," component will be modified. At this time, the ",l.a.createElement("code",null,"Tabs")," component will be re-rendered. However, it should be noted that ",l.a.createElement("strong",null,"only the content of the ",l.a.createElement("code",null,"Tabs")," component itself will be re-rendered, and the ",l.a.createElement("code",null,"InfiniteScroll")," component is outside the ",l.a.createElement("code",null,"Tabs")," component, not the ",l.a.createElement("code",null,"Tabs")," component's own content"),". So, when switching ",l.a.createElement("code",null,"Tab"),", the ",l.a.createElement("code",null,"InfiniteScroll")," component does not re-render, and it does not trigger its checking mechanism again."),l.a.createElement("p",null,"Solution:"),l.a.createElement("ul",null,l.a.createElement("li",null,"1: Remove the ",l.a.createElement("code",null,"forceRender")," of the Tab where the ",l.a.createElement("code",null,"InfiniteScroll")," component is located (the ",l.a.createElement("code",null,"InfiniteScroll")," component is only rendered when the Tab is activated and displayed. At this time, the component is visible and ",l.a.createElement("code",null,"loadMore")," will be called correctly to load data)"),l.a.createElement("li",null,"2: Use the ",l.a.createElement("code",null,"Tabs")," component through the controlled component mode (when switching ",l.a.createElement("code",null,"Tab"),", ",l.a.createElement("strong",null,"update the state of the component where the ",l.a.createElement("code",null,"InfiniteScroll")," component is located"),", at this time, the ",l.a.createElement("code",null,"InfiniteScroll")," component will be re-rendered, and then trigger the check mechanism again. Since the component is now visible, ",l.a.createElement("code",null,"loadMore")," is called correctly to load the data), for example:")),l.a.createElement(r["a"],{code:"const [activeKey, setActiveKey] = useState('fruits')\n\n<Tabs activeKey={activeKey} onChange={setActiveKey}>\n  ...\n</Tabs>",lang:"jsx"}))))}));t["default"]=e=>{var t=l.a.useContext(c["context"]),n=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(s,{demos:n})}},tCeM:function(e,t,n){}}]);