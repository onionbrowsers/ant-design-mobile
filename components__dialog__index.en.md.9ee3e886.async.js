(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[39],{"0m3q":function(e,t,a){"use strict";a("ahKI")},"2Pr/":function(e,t,a){},"60ow":function(e,t,a){},"9kvl":function(e,t,a){"use strict";var l=a("FfOG");a.d(t,"a",(function(){return l["b"]}));a("bCY9")},Bjia:function(e,t,a){"use strict";var l=a("mn0l"),n=a("iojd"),c=a("ahKI"),r=a.n(c),o=a("vumQ"),i=a("17ds");a("Qf6j"),a("60ow");t["a"]=e=>{var t=e.code,a=e.lang,c=e.showCopy,m=void 0===c||c,d=Object(i["useCopy"])(),u=Object(n["a"])(d,2),s=u[0],E=u[1];return r.a.createElement("div",{className:"__dumi-default-code-block"},r.a.createElement(o["a"],Object(l["a"])({},o["b"],{code:t,language:a,theme:void 0}),(e=>{var a=e.className,l=e.style,n=e.tokens,c=e.getLineProps,o=e.getTokenProps;return r.a.createElement("pre",{className:a,style:l},m&&r.a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:()=>s(t)}),n.map(((e,t)=>r.a.createElement("div",c({line:e,key:t}),e.map(((e,t)=>r.a.createElement("span",o({token:e,key:t}))))))))})))}},DgDr:function(e,t,a){"use strict";a("mn0l"),a("ahKI"),a("2Pr/")},"Kc+1":function(e,t,a){"use strict";a.r(t);var l=a("ahKI"),n=a.n(l),c=a("17ds"),r=(a("N0lm"),a("TAbJ"),a("DgDr"),a("mVOg"),a("ekZX")),o=(a("gKi5"),a("Bjia")),i=(a("0m3q"),a("hPU5")),m=n.a.memo((e=>{var t=e.demos,a=t["dialog-demo1"].component,l=t["dialog-demo2"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"dialog"},n.a.createElement(c["AnchorLink"],{to:"#dialog","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog"),n.a.createElement("p",null,"It is used for notification of important information or feedback of operation, with a small number of options for users to operate."),n.a.createElement("h2",{id:"when-to-use"},n.a.createElement(c["AnchorLink"],{to:"#when-to-use","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"When to Use"),n.a.createElement("p",null,"When users need to process transactions, but do not want to jump to pages to interrupt the workflow, you can use Modal to open a floating layer in the middle of the current page to carry the corresponding operations."),n.a.createElement("h2",{id:"demos"},n.a.createElement(c["AnchorLink"],{to:"#demos","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Demos")),n.a.createElement(r["default"],t["dialog-demo1"].previewerProps,n.a.createElement(a,null)),n.a.createElement(r["default"],t["dialog-demo2"].previewerProps,n.a.createElement(l,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"dialog-1"},n.a.createElement(c["AnchorLink"],{to:"#dialog-1","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog"),n.a.createElement("h3",{id:"props"},n.a.createElement(c["AnchorLink"],{to:"#props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Props"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"actions"),n.a.createElement("td",null,"The list of the operation button, a secondary array can be passed in to realize multiple buttons side by side in the same row"),n.a.createElement("td",null,n.a.createElement("code",null,"(Action | Action[])[]")),n.a.createElement("td",null,n.a.createElement("code",null,"[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"afterClose"),n.a.createElement("td",null,"Callback after ",n.a.createElement("code",null,"Dialog")," is completely closed"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"afterShow"),n.a.createElement("td",null,"Triggered after fully displayed"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"bodyClassName"),n.a.createElement("td",null,n.a.createElement("code",null,"Dialog")," content class name"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"bodyStyle"),n.a.createElement("td",null,n.a.createElement("code",null,"Dialog")," content style"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"closeOnAction"),n.a.createElement("td",null,"Whether to close after clicking the operation button"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"closeOnMaskClick"),n.a.createElement("td",null,"Whether to support clicking the mask to close the dialog box"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"content"),n.a.createElement("td",null,"The content of the Dialog"),n.a.createElement("td",null,n.a.createElement("code",null,"React.ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"destroyOnClose"),n.a.createElement("td",null,"Destroy ",n.a.createElement("code",null,"dom")," when not visible"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"disableBodyScroll"),n.a.createElement("td",null,"Whether to disable ",n.a.createElement("code",null,"body")," scrolling"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"forceRender"),n.a.createElement("td",null,"Whether to render the ",n.a.createElement("code",null,"DOM")," structure when hidden"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"getContainer"),n.a.createElement("td",null,"The parent container of the custom dialog"),n.a.createElement("td",null,n.a.createElement("code",null,"HTMLElement | (() => HTMLElement) | null")),n.a.createElement("td",null,n.a.createElement("code",null,"null"))),n.a.createElement("tr",null,n.a.createElement("td",null,"header"),n.a.createElement("td",null,"The top area"),n.a.createElement("td",null,n.a.createElement("code",null,"React.ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"image"),n.a.createElement("td",null,"The ",n.a.createElement("code",null,"url")," of the picture"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"maskClassName"),n.a.createElement("td",null,n.a.createElement("code",null,"Dialog")," mask class name"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"maskStyle"),n.a.createElement("td",null,n.a.createElement("code",null,"Dialog")," mask style"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onAction"),n.a.createElement("td",null,"Triggered when the action button is clicked"),n.a.createElement("td",null,n.a.createElement("code",null,"(action: Action, index: number) => void | Promise<void>")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onClose"),n.a.createElement("td",null,"Triggered when closed"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"stopPropagation"),n.a.createElement("td",null,"Stop the propagation of some events."),n.a.createElement("td",null,n.a.createElement("code",null,"PropagationEvent[]")),n.a.createElement("td",null,n.a.createElement("code",null,"['click']"))),n.a.createElement("tr",null,n.a.createElement("td",null,"title"),n.a.createElement("td",null,"The title of the Dialog"),n.a.createElement("td",null,n.a.createElement("code",null,"React.ReactNode")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"visible"),n.a.createElement("td",null,"To show or hide"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))))),n.a.createElement("h3",{id:"action"},n.a.createElement(c["AnchorLink"],{to:"#action","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Action"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"bold"),n.a.createElement("td",null,"Whether the text is bold"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"className"),n.a.createElement("td",null,"Class name of the action button"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"danger"),n.a.createElement("td",null,"Whether in dangerous state or not"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"Whether disabled state or not"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"key"),n.a.createElement("td",null,"The unique mark"),n.a.createElement("td",null,n.a.createElement("code",null,"string | number")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onClick"),n.a.createElement("td",null,"Triggered on click"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void | Promise<void>")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"style"),n.a.createElement("td",null,"Style of the action button"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"text"),n.a.createElement("td",null,"The title"),n.a.createElement("td",null,n.a.createElement("code",null,"React.ReactNode")),n.a.createElement("td",null,"-")))),n.a.createElement("h2",{id:"imperative"},n.a.createElement(c["AnchorLink"],{to:"#imperative","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Imperative"),n.a.createElement("p",null,"You can use ",n.a.createElement("code",null,"Dialog")," in an imperative way:"),n.a.createElement("h3",{id:"dialogshow"},n.a.createElement(c["AnchorLink"],{to:"#dialogshow","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog.show"),n.a.createElement(o["a"],{code:"const handler = Dialog.show(props)",lang:"ts"}),n.a.createElement("p",null,"You can directly open the dialog box by calling the ",n.a.createElement("code",null,"show")," method on the ",n.a.createElement("code",null,"Dialog"),". The type of the ",n.a.createElement("code",null,"props")," parameter is the same as the above table, but the ",n.a.createElement("code",null,"visible")," prop is not supported."),n.a.createElement("p",null,"When the dialog box is closed, the component instance would be automatically destroyed."),n.a.createElement("p",null,"The return value of the ",n.a.createElement("code",null,"show")," method is a component controller, which contains the following properties:"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"close"),n.a.createElement("td",null,"To close the dialog"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"-")))),n.a.createElement("p",null,n.a.createElement("code",null,"show")," is just a very basic method. In actual business, the following ",n.a.createElement("code",null,"alert")," and ",n.a.createElement("code",null,"confirm")," methods are more commonly used:"),n.a.createElement("h3",{id:"dialogalert"},n.a.createElement(c["AnchorLink"],{to:"#dialogalert","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog.alert"),n.a.createElement("p",null,n.a.createElement("code",null,"alert")," accepts the same parameters as ",n.a.createElement("code",null,"show"),", but does not support the ",n.a.createElement("code",null,"closeOnAction")," ",n.a.createElement("code",null,"actions")," prop. Its return value is not a controller object, but ",n.a.createElement("code",null,"Promise<void>"),"."),n.a.createElement("p",null,"In addition, it supports the following props:"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"confirmText"),n.a.createElement("td",null,"The content of the confirm button"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,n.a.createElement("code",null,"'Ok'"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onConfirm"),n.a.createElement("td",null,"Triggered when the confirm button is clicked"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void | Promise<void>")),n.a.createElement("td",null,"-")))),n.a.createElement("h3",{id:"dialogconfirm"},n.a.createElement(c["AnchorLink"],{to:"#dialogconfirm","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog.confirm"),n.a.createElement("p",null,n.a.createElement("code",null,"confirm")," accepts the same parameters as ",n.a.createElement("code",null,"show"),", but does not support the ",n.a.createElement("code",null,"closeOnAction")," ",n.a.createElement("code",null,"actions")," prop. Its return value is not a controller object, but ",n.a.createElement("code",null,"Promise<boolean>"),"."),n.a.createElement("p",null,"In addition, it supports the following props:"),n.a.createElement(i["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Type"),n.a.createElement("th",null,"Default"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"cancelText"),n.a.createElement("td",null,"The content of the cancel button"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,n.a.createElement("code",null,"'Cancel'"))),n.a.createElement("tr",null,n.a.createElement("td",null,"confirmText"),n.a.createElement("td",null,"The content of the confirm button"),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode")),n.a.createElement("td",null,n.a.createElement("code",null,"'Ok'"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onCancel"),n.a.createElement("td",null,"Triggered when the cancel button is clicked"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void | Promise<void>")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"onConfirm"),n.a.createElement("td",null,"Triggered when the confirm button is clicked"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void | Promise<void>")),n.a.createElement("td",null,"-")))),n.a.createElement("p",null,"It should be noted that for the Dialog created by ",n.a.createElement("strong",null,"instructive"),", ** will not perceive the re-rendering of the parent component and the update of the state in it**, so the following writing is completely wrong:"),n.a.createElement(o["a"],{code:'export default function App() {\n  const [captcha, setCaptcha] = useState<string>("");\n  const showCaptcha = () => {\n    return Dialog.confirm({\n      title: "SMS verification",\n      content: (\n        <div>\n          <Input\n            placeholder="Please enter verification code"\n            value={captcha} // Updates to the captcha state in App will not be passed to the Dialog\n            onChange={(v) => {\n              setCaptcha(v)\n            }}\n          />\n        </div>\n      )\n    });\n  };\n  return (\n    <div>\n      <Button onClick={showCaptcha}>Show</Button>\n    </div>\n  );\n}',lang:"tsx"}),n.a.createElement("p",null,"If you need to include a lot of complex states and logic in Dialog, you can use declarative syntax, or consider encapsulating the internal state and logic as a separate component, see ",n.a.createElement(c["Link"],{to:"https://github.com/ant-design/ant-design-mobile/issues/4762"},"#4762"),"."),n.a.createElement("h3",{id:"dialogclear"},n.a.createElement(c["AnchorLink"],{to:"#dialogclear","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Dialog.clear"),n.a.createElement("p",null,"You can directly close all dialogs by calling the ",n.a.createElement("code",null,"clear")," method on ",n.a.createElement("code",null,"Dialog"),". Usually, you can use it in router change event to close all dialogs automatically without using dialog reference to close."))))}));t["default"]=e=>{var t=n.a.useContext(c["context"]),a=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&c["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(m,{demos:a})}},N0lm:function(e,t,a){"use strict";var l=a("mn0l"),n=a("ahKI"),c=a.n(n);a("tCeM");t["a"]=e=>c.a.createElement("div",Object(l["a"])({className:"__dumi-default-alert"},e))},TAbJ:function(e,t,a){"use strict"},YWOM:function(e,t,a){},ekZX:function(e,t,a){"use strict";a.r(t),a.d(t,"ACTIVE_MSG_TYPE",(function(){return O}));var l=a("ahKI"),n=a.n(l),c=a("iojd"),r=a("/7QA"),o=a("9kvl"),i=a("17ds"),m=a("wQXD"),d=a.n(m),u="https://codesandbox.io/api/v1/sandboxes/define";function s(e){return d.a.compressToBase64(JSON.stringify(e)).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}function E(e){var t=Boolean(e.sources._.tsx),a=t?".tsx":".jsx",l={},n={},r=Object.values(e.dependencies).filter((e=>e.css)),o="app".concat(a),i="index".concat(a);Object.entries(e.dependencies).forEach((e=>{var t=Object(c["a"])(e,2),a=t[0],l=t[1].version;n[a]=l})),n["react-dom"]||(n["react-dom"]=n.react||"latest"),l["sandbox.config.json"]={content:JSON.stringify({template:t?"create-react-app-typescript":"create-react-app"},null,2)},l["index.html"]={content:'<div id="root"></div>'},l[i]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n".concat(r.map((e=>{var t=e.css;return"import '".concat(t,"';")})).join("\n"),"\nimport App from './app';\n\nReactDOM.render(\n  <App />,\n  document.getElementById('root'),\n);")};var m=!1;return Object.entries(e.sources).forEach((e=>{var t=Object(c["a"])(e,2),a=t[0],n=t[1],r=n.tsx,i=n.jsx,d=n.content,u={content:r||i||d};l["_"===a?o:a]=u,m=m||u.content.includes("from 'demos'"),u.content=u.content.replace("from 'demos'","from './demos-util'")})),m&&(n["lorem-ipsum"]="^2.0.8",l["demos-util.tsx"]={content:"/**\n* This is an auto-generated demo by dumi\n* if you think it is not working as expected,\n* please report the issue at\n* https://github.com/umijs/dumi/issues\n**/\n\nimport React from 'react'\nimport { LoremIpsum } from 'lorem-ipsum'\n\nexport const lorem = new LoremIpsum({\n  sentencesPerParagraph: {\n    max: 8,\n    min: 4,\n  },\n  wordsPerSentence: {\n    max: 16,\n    min: 4,\n  },\n})\n\nexport const DemoBlock = ({ title, children }) => (\n  <div style={{ padding: 16 }}>\n    <h3>{title}</h3>\n    {children}\n  </div>\n);\n\nexport const DemoDescription = ({ children }) => <div style={{ opacity: 0.5 }}>{children}</div>;\n\nexport const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))\n"}),l["package.json"]={content:JSON.stringify({name:e.title,main:i,dependencies:n,devDependencies:t?{typescript:"^3"}:{}},null,2)},s({files:l})}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:u,a=Object(l["useState"])(),n=Object(c["a"])(a,2),r=n[0],o=n[1];return Object(l["useEffect"])((()=>{if(e){var a=document.createElement("form"),l=E(e);function n(e,t){var l=document.createElement("input");a.appendChild(l),l.name=e,l.value=t}return a.method="POST",a.target="_blank",a.style.display="none",a.action=t,n("parameters",l),n("query","file=/app.tsx&resolutionWidth=375&resolutionHeight=700"),a.setAttribute("data-demo",e.title||""),document.body.appendChild(a),o((()=>()=>a.submit())),()=>a.remove()}}),[e]),r}var p=a("Bjia");a("YWOM");function f(e,t){var a,l=null===(a=e.match(/\.(\w+)$/))||void 0===a?void 0:a[1];return l||(l=t.tsx?"tsx":"jsx"),l}var v=e=>{var t,a=Object(l["useRef"])(null),m=Object(l["useContext"])(i["context"]),d=m.locale,u=Object(i["useLocaleProps"])(d,e),s=(null===o["a"]||void 0===o["a"]?void 0:o["a"].location.hash)==="#".concat(u.identifier),E=1===Object.keys(u.sources).length,v=h(null!==(t=u.hideActions)&&void 0!==t&&t.includes("CSB")?null:u),b=Object(i["useMotions"])(u.motions||[],a.current),g=Object(c["a"])(b,2),y=g[0],w=g[1],k=Object(i["useCopy"])(),x=Object(c["a"])(k,2),O=x[0],j=x[1],N=Object(l["useState"])("_"),_=Object(c["a"])(N,2),C=_[0],T=_[1],D=Object(l["useState"])(f(C,u.sources[C])),A=Object(c["a"])(D,2),S=A[0],I=A[1],L=u.sources[C][S]||u.sources[C].content,P=Object(i["useTSPlaygroundUrl"])(d,L),M=Object(i["usePrefersColor"])(),R=Object(c["a"])(M,1);R[0];function Z(e){T(e),I(f(e,u.sources[e]))}return n.a.createElement("div",{style:u.style,className:[u.className,"__dumi-default-previewer",s?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:u.identifier,"data-debug":u.debug||void 0},n.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":u.title},u.title&&n.a.createElement(i["AnchorLink"],{to:"#".concat(u.identifier)},u.title),u.description&&n.a.createElement("div",{dangerouslySetInnerHTML:{__html:u.description}})),n.a.createElement("div",{className:"__dumi-default-previewer-actions"},u.debug&&n.a.createElement("span",{className:"debug-badge"},"Debug Only"),v&&n.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:v}),u.motions&&n.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:w,onClick:()=>y()}),n.a.createElement("div",{className:"spacer"}),n.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":j,onClick:()=>O(L)}),"tsx"===S&&n.a.createElement(i["Link"],{target:"_blank",to:P},n.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"}))),n.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!E&&n.a.createElement(r["Tabs"],{className:"__dumi-default-previewer-source-tab",stretch:!1,defaultActiveKey:C,onChange:Z},Object.keys(u.sources).map((e=>n.a.createElement(r["Tabs"].Tab,{title:"_"===e?"index.".concat(f(e,u.sources[e])):e,key:e})))),n.a.createElement("div",{className:"__dumi-default-previewer-source"},n.a.createElement(p["a"],{code:L,lang:S,showCopy:!1}))))},b=v,g=(a("oeoJ"),a("NEWu")),y=(a("q9vG"),e=>{var t=e.url,a=Object(l["useState"])(Math.random()),o=Object(c["a"])(a,2),m=o[0],d=o[1],u=Object(i["usePrefersColor"])(),s=Object(c["a"])(u,1),E=s[0],h=Object(l["useContext"])(i["context"]),p=h.config.mode;return Object(l["useEffect"])((()=>{d(Math.random())}),[E]),Object(l["useEffect"])((()=>{var e=["light","dark"].map((e=>window.matchMedia("(prefers-color-scheme: ".concat(e,")")))),t=()=>{d(Math.random())};e.forEach((e=>e.addEventListener("change",t)))}),[]),n.a.createElement("div",{className:"adm-doc-device","data-device-type":"iOS","data-mode":p},n.a.createElement("iframe",{title:"dumi-previewer",src:t,key:m}),n.a.createElement("div",{className:"adm-doc-device-action"},n.a.createElement("a",{onClick:()=>d(Math.random())},w),n.a.createElement(r["Popover"],{content:n.a.createElement(g["a"],{value:t,size:96}),trigger:"click"},n.a.createElement("a",null,k)),n.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer"},x)))}),w=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M17.875 8.313V4.374l-1.284 1.284a7.87 7.87 0 0 0-6.567-3.535 7.876 7.876 0 1 0 7.299 10.839.675.675 0 0 0-1.25-.508A6.528 6.528 0 0 1 3.497 10a6.526 6.526 0 0 1 12.116-3.364l-1.677 1.676h3.938Z",fill:"currentColor",fillRule:"nonzero"})),k=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M11.875 15.556v1.319h2.986a.14.14 0 0 1 .139.139v.764a.139.139 0 0 1-.139.139h-3.889a.139.139 0 0 1-.139-.14v-2.221a.14.14 0 0 1 .14-.14h.763a.14.14 0 0 1 .139.14Zm5.89.099c.084 0 .152.068.152.15v1.96a.15.15 0 0 1-.151.152h-.83a.15.15 0 0 1-.15-.151v-1.96c0-.083.068-.151.15-.151h.83Zm-2.515-1.072c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.166-.166v-.917c0-.092.075-.167.166-.167h.917Zm.028-3.75c.076 0 .139.067.139.148v.815c0 .082-.063.148-.14.148h-3.402v1.112l-.903 1.11c-.076 0-.139-.066-.139-.147V10.98c0-.081.063-.148.14-.148h4.305Zm2.496 2.084c.078 0 .143.075.143.166V14c0 .08-.05.148-.114.163l-.03.004H15.56c-.07 0-.127-.057-.14-.133L15.417 14v-.917c0-.091.064-.166.143-.166h2.214Zm-3.774 0c.092 0 .167.075.167.166V14a.167.167 0 0 1-.167.167h-3a.167.167 0 0 1-.167-.167v-.917c0-.091.075-.166.167-.166h3Zm3.75-2.084c.092 0 .167.075.167.167v.917c0 .08-.057.147-.133.163l-.034.003h-.917a.167.167 0 0 1-.163-.133l-.003-.033V11c0-.092.075-.167.166-.167h.917Zm-2.485 0c.083 0 .152.075.152.167v.917c0 .092-.068.166-.152.166h-3.863c-.084 0-.152-.074-.152-.166V11c0-.092.068-.167.152-.167h3.863ZM9.167 3.575v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm8.75 0v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492ZM7.564 3.333H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm8.75 0h-3.878a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002ZM6.23 4.723c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378H6.23Zm2.937 7.602v4.1c0 .824-.668 1.492-1.492 1.492h-4.1a1.491 1.491 0 0 1-1.492-1.492v-4.1c0-.824.668-1.492 1.492-1.492h4.1c.824 0 1.492.668 1.492 1.492Zm-1.603-.242H3.686a.353.353 0 0 0-.35.312l-.003.04v3.88c0 .178.134.328.312.35l.04.002h3.88c.178 0 .328-.134.35-.312l.002-.04v-3.88a.353.353 0 0 0-.312-.35l-.04-.002Zm-1.334 1.39c.208 0 .377.168.377.376v1.131a.377.377 0 0 1-.377.377H5.1a.377.377 0 0 1-.378-.377v-1.13c0-.209.169-.378.377-.378H6.23Zm8.75-8.75c.208 0 .377.168.377.376V6.23a.377.377 0 0 1-.377.377h-1.13a.377.377 0 0 1-.378-.377V5.1c0-.209.169-.378.377-.378h1.131Z",fill:"currentColor",fillRule:"nonzero"})),x=n.a.createElement("svg",{width:20,height:20,xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("path",{d:"M10.417 1.833v.917a.167.167 0 0 1-.167.166H4.167c-.666 0-1.21.521-1.248 1.177l-.002.074v11.666c0 .666.52 1.21 1.176 1.248l.074.002h11.666c.666 0 1.21-.52 1.248-1.176l.002-.074V9.75c0-.092.075-.167.167-.167h.917a.167.167 0 0 0 .166-.166V7.25a.167.167 0 0 0-.166-.167h-.917a.167.167 0 0 1-.167-.166V3.714L11.069 9.73a.167.167 0 0 1-.236 0l-.648-.648a.167.167 0 0 1 0-.236l5.928-5.928h-3.03a.167.167 0 0 1-.166-.167v-.917c0-.092.074-.166.166-.166h4.625c.346 0 .625.28.625.625v13.541a2.5 2.5 0 0 1-2.5 2.5H4.167a2.5 2.5 0 0 1-2.5-2.5V4.167a2.5 2.5 0 0 1 2.5-2.5h6.083c.092 0 .167.074.167.166Z",fill:"currentColor",fillRule:"nonzero"})),O="dumi:scroll-into-demo";t["default"]=e=>{var t,a=Object(i["useDemoUrl"])(e.identifier);return n.a.createElement("div",{className:"adm-doc-previewer","data-debug":e.debug||void 0},n.a.createElement("div",{className:"adm-doc-previewer-source"},n.a.createElement(b,e)),n.a.createElement("div",{className:"adm-doc-previewer-device"},n.a.createElement(y,{url:null!==(t=e.demoUrl)&&void 0!==t?t:a})))}},eqKt:function(e,t,a){e.exports={card:"card___2rQs3",content:"content___2Zybx",title:"title___m0XDq",description:"description___Lth8e"}},gKi5:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),c=a("eqKt"),r=a.n(c),o=e=>n.a.createElement("a",{className:r.a.card,href:e.link,target:"_blank"},e.image&&n.a.createElement("img",{src:e.image,alt:e.title}),n.a.createElement("div",{className:r.a.content},n.a.createElement("div",{className:r.a.title},e.title),n.a.createElement("div",{className:r.a.description},e.description)));t["a"]=o},hPU5:function(e,t,a){"use strict";var l=a("ahKI"),n=a.n(l),c=a("bIC1"),r=a.n(c);a("nxnQ");function o(e,t){return s(e)||u(e,t)||m(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,l=new Array(t);a<t;a++)l[a]=e[a];return l}function u(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var l,n,c=[],r=!0,o=!1;try{for(a=a.call(e);!(r=(l=a.next()).done);r=!0)if(c.push(l.value),t&&c.length===t)break}catch(i){o=!0,n=i}finally{try{r||null==a["return"]||a["return"]()}finally{if(o)throw n}}return c}}function s(e){if(Array.isArray(e))return e}var E=function(e){var t=e.children,a=Object(l["useRef"])(),c=Object(l["useState"])(!1),i=o(c,2),m=i[0],d=i[1],u=Object(l["useState"])(!1),s=o(u,2),E=s[0],h=s[1];return Object(l["useEffect"])((function(){var e=a.current,t=r()((function(){d(e.scrollLeft>0),h(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":m||void 0,"data-right-folded":E||void 0},n.a.createElement("table",null,t)))};t["a"]=E},mVOg:function(e,t,a){"use strict";var l=a("iojd"),n=a("ahKI"),c=a.n(n),r=a("17ds"),o=a("/7QA");t["a"]=()=>{var e=Object(n["useContext"])(r["context"]),t=e.locale,a=Object(n["useState"])(!1),i=Object(l["a"])(a,2),m=i[0],d=i[1];return c.a.createElement("a",{href:("zh"===t?"/zh":"")+"/guide/what-is-experimental",onMouseEnter:()=>{d(!0)},onMouseLeave:()=>{d(!1)},style:{verticalAlign:"-0.125em"}},c.a.createElement(o["Popover"],{content:"zh"===t?"\u8bd5\u9a8c\u6027":"Experimental",visible:m,mode:"dark"},c.a.createElement("svg",{viewBox:"64 64 896 896",focusable:"false","data-icon":"experiment",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},c.a.createElement("path",{d:"M512 472a40 40 0 1080 0 40 40 0 10-80 0zm367 352.9L696.3 352V178H768v-68H256v68h71.7v174L145 824.9c-2.8 7.4-4.3 15.2-4.3 23.1 0 35.3 28.7 64 64 64h614.6c7.9 0 15.7-1.5 23.1-4.3 33-12.7 49.4-49.8 36.6-82.8zM395.7 364.7V180h232.6v184.7L719.2 600c-20.7-5.3-42.1-8-63.9-8-61.2 0-119.2 21.5-165.3 60a188.78 188.78 0 01-121.3 43.9c-32.7 0-64.1-8.3-91.8-23.7l118.8-307.5zM210.5 844l41.7-107.8c35.7 18.1 75.4 27.8 116.6 27.8 61.2 0 119.2-21.5 165.3-60 33.9-28.2 76.3-43.9 121.3-43.9 35 0 68.4 9.5 97.6 27.1L813.5 844h-603z"}))))}},nxnQ:function(e,t,a){},oeoJ:function(e,t,a){},q9vG:function(e,t,a){},tCeM:function(e,t,a){}}]);