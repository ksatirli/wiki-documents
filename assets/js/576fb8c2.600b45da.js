"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14614],{15680:(e,a,n)=>{n.d(a,{xA:()=>m,yg:()=>g});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=t.createContext({}),u=function(e){var a=t.useContext(i),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},m=function(e){var a=u(e.components);return t.createElement(i.Provider,{value:a},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,g=c["".concat(i,".").concat(d)]||c[d]||p[d]||o;return n?t.createElement(g,l(l({ref:a},m),{},{components:n})):t.createElement(g,l({ref:a},m))}));function g(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19365:(e,a,n)=>{n.d(a,{A:()=>l});var t=n(96540),r=n(20053);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:a,hidden:n,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,l),hidden:n},a)}},11470:(e,a,n)=>{n.d(a,{A:()=>N});var t=n(9668),r=n(96540),o=n(20053),l=n(23104),s=n(56347),i=n(57485),u=n(31682),m=n(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:n,attributes:t,default:r}}=e;return{value:a,label:n,attributes:t,default:r}}))}function p(e){const{values:a,children:n}=e;return(0,r.useMemo)((()=>{const e=a??c(n);return function(e){const a=(0,u.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,n])}function d(e){let{value:a,tabValues:n}=e;return n.some((e=>e.value===a))}function g(e){let{queryString:a=!1,groupId:n}=e;const t=(0,s.W6)(),o=function(e){let{queryString:a=!1,groupId:n}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:a,groupId:n});return[(0,i.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const a=new URLSearchParams(t.location.search);a.set(o,e),t.replace({...t.location,search:a.toString()})}),[o,t])]}function y(e){const{defaultValue:a,queryString:n=!1,groupId:t}=e,o=p(e),[l,s]=(0,r.useState)((()=>function(e){let{defaultValue:a,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!d({value:a,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:a,tabValues:o}))),[i,u]=g({queryString:n,groupId:t}),[c,y]=function(e){let{groupId:a}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(a),[t,o]=(0,m.Dv)(n);return[t,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:t}),b=(()=>{const e=i??c;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&s(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var b=n(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:a,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),p=e=>{const a=e.currentTarget,n=m.indexOf(a),t=u[n].value;t!==s&&(c(a),i(t))},d=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=m.indexOf(e.currentTarget)+1;a=m[n]??m[0];break}case"ArrowLeft":{const n=m.indexOf(e.currentTarget)-1;a=m[n]??m[m.length-1];break}}a?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},a)},u.map((e=>{let{value:a,label:n,attributes:l}=e;return r.createElement("li",(0,t.A)({role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,key:a,ref:e=>m.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.A)("tabs__item",h.tabItem,l?.className,{"tabs__item--active":s===a})}),n??a)})))}function A(e){let{lazy:a,children:n,selectedValue:t}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=o.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==t}))))}function T(e){const a=y(e);return r.createElement("div",{className:(0,o.A)("tabs-container",h.tabList)},r.createElement(f,(0,t.A)({},e,a)),r.createElement(A,(0,t.A)({},e,a)))}function N(e){const a=(0,b.A)();return r.createElement(T,(0,t.A)({key:String(a)},e))}},33056:(e,a,n)=>{n.r(a),n.d(a,{Highlight:()=>c,assets:()=>m,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var t=n(9668),r=(n(96540),n(15680)),o=n(11470),l=n(19365);const s={},i=void 0,u={unversionedId:"feature",id:"feature",title:"feature",description:"MDX and React",source:"@site/docs/feature.md",sourceDirName:".",slug:"/feature",permalink:"/feature",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/feature.md",tags:[],version:"current",lastUpdatedBy:"Citric Lee",lastUpdatedAt:1726641801,formattedLastUpdatedAt:"Sep 18, 2024",frontMatter:{}},m={},c=e=>{let{children:a,color:n}=e;return(0,r.yg)("span",{style:{backgroundColor:n,borderRadius:"2px",color:"#fff",padding:"0.2rem"}},a)},p=[{value:"MDX and React",id:"mdx-and-react",level:2},{value:"Using JSX in Markdown",id:"using-jsx-in-markdown",level:3},{value:"Importing components",id:"importing-components",level:3},{value:"Tabs",id:"tabs",level:2},{value:"Admonitions",id:"admonitions",level:2},{value:"Admonitions with MDX",id:"admonitions-with-mdx",level:3},{value:"Assets",id:"assets",level:2},{value:"Images",id:"images",level:3},{value:"Files",id:"files",level:3},{value:"Math",id:"math",level:2},{value:"test2",id:"test2",level:3},{value:"test 5",id:"test-5",level:4},{value:"6666",id:"6666",level:5}],d={Highlight:c,toc:p},g="wrapper";function y(e){let{components:a,...s}=e;return(0,r.yg)(g,(0,t.A)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"mdx-and-react"},"MDX and React"),(0,r.yg)("h3",{id:"using-jsx-in-markdown"},"Using JSX in Markdown"),(0,r.yg)(c,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",(0,r.yg)(c,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",(0,r.yg)("p",null,"I can write ",(0,r.yg)("strong",{parentName:"p"},"Markdown")," alongside my ",(0,r.yg)("em",{parentName:"p"},"JSX"),"!"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"export const Highlight = ({children, color}) => (\n  <span\n    style={{\n      backgroundColor: color,\n      borderRadius: '2px',\n      color: '#fff',\n      padding: '0.2rem',\n    }}>\n    {children}\n  </span>\n);\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html"},"/* Instead of this: */\n<span style=\"background-color: red\">Foo</span>\n/* Use this: */\n<span style={{backgroundColor: 'red'}}>Foo</span>\n")),(0,r.yg)("h3",{id:"importing-components"},"Importing components"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-javascript"},"\x3c!-- Docusaurus theme component --\x3e\nimport TOCInline from '@theme/TOCInline';\n\x3c!-- External component --\x3e\nimport Button from '@mui/material/Button';\n\x3c!-- Custom component --\x3e\nimport BrowserWindow from '@site/src/components/BrowserWindow';\n")),(0,r.yg)("h2",{id:"tabs"},"Tabs"),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"apple",label:"Apple",default:!0,mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,r.yg)(l.A,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,r.yg)(l.A,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-html",metastring:'title="TABS"',title:'"TABS"'},'import Tabs from \'@theme/Tabs\';\nimport TabItem from \'@theme/TabItem\';\n\n<Tabs>\n  <TabItem value="apple" label="Apple" default>\n    This is an apple \ud83c\udf4e\n  </TabItem>\n  <TabItem value="orange" label="Orange">\n    This is an orange \ud83c\udf4a\n  </TabItem>\n  <TabItem value="banana" label="Banana">\n    This is a banana \ud83c\udf4c\n  </TabItem>\n</Tabs>\n')),(0,r.yg)("h2",{id:"admonitions"},"Admonitions"),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Some ",(0,r.yg)("strong",{parentName:"p"},"content")," with ",(0,r.yg)("em",{parentName:"p"},"Markdown")," ",(0,r.yg)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.yg)("a",{parentName:"p",href:"#"},"this ",(0,r.yg)("inlineCode",{parentName:"a"},"api")),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown"},":::note\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n:::\n")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Some ",(0,r.yg)("strong",{parentName:"p"},"content")," with ",(0,r.yg)("em",{parentName:"p"},"Markdown")," ",(0,r.yg)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.yg)("a",{parentName:"p",href:"#"},"this ",(0,r.yg)("inlineCode",{parentName:"a"},"api")),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown"},":::tip\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n")),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Some ",(0,r.yg)("strong",{parentName:"p"},"content")," with ",(0,r.yg)("em",{parentName:"p"},"Markdown")," ",(0,r.yg)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.yg)("a",{parentName:"p",href:"#"},"this ",(0,r.yg)("inlineCode",{parentName:"a"},"api")),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown"},":::info\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"Some ",(0,r.yg)("strong",{parentName:"p"},"content")," with ",(0,r.yg)("em",{parentName:"p"},"Markdown")," ",(0,r.yg)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.yg)("a",{parentName:"p",href:"#"},"this ",(0,r.yg)("inlineCode",{parentName:"a"},"api")),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown"},":::caution\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n")),(0,r.yg)("admonition",{type:"danger"},(0,r.yg)("p",{parentName:"admonition"},"Some ",(0,r.yg)("strong",{parentName:"p"},"content")," with ",(0,r.yg)("em",{parentName:"p"},"Markdown")," ",(0,r.yg)("inlineCode",{parentName:"p"},"syntax"),". Check ",(0,r.yg)("a",{parentName:"p",href:"#"},"this ",(0,r.yg)("inlineCode",{parentName:"a"},"api")),".")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown"},":::danger\n\nSome **content** with _Markdown_ `syntax`. Check [this `api`](#).\n\n:::\n")),(0,r.yg)("h3",{id:"admonitions-with-mdx"},"Admonitions with MDX"),(0,r.yg)("admonition",{title:"Use tabs in admonitions",type:"tip"},(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"apple",label:"Apple",mdxType:"TabItem"},"This is an apple \ud83c\udf4e"),(0,r.yg)(l.A,{value:"orange",label:"Orange",mdxType:"TabItem"},"This is an orange \ud83c\udf4a"),(0,r.yg)(l.A,{value:"banana",label:"Banana",mdxType:"TabItem"},"This is a banana \ud83c\udf4c"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown"},'\nimport Tabs from \'@theme/Tabs\';\n\nimport TabItem from \'@theme/TabItem\';\n\n:::tip Use tabs in admonitions\n\n<Tabs>\n  <TabItem value="apple" label="Apple">This is an apple \ud83c\udf4e</TabItem>\n  <TabItem value="orange" label="Orange">This is an orange \ud83c\udf4a</TabItem>\n  <TabItem value="banana" label="Banana">This is a banana \ud83c\udf4c</TabItem>\n</Tabs>\n\n:::\n')),(0,r.yg)("h2",{id:"assets"},"Assets"),(0,r.yg)("h3",{id:"images"},"Images"),(0,r.yg)("img",{src:n(68437).A,alt:"Example banner"}),(0,r.yg)(o.A,{mdxType:"Tabs"},(0,r.yg)(l.A,{value:"apple",label:"Markdown syntax",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-txt"},"![Example banner](../assets/docusaurus.png)\n"))),(0,r.yg)(l.A,{value:"orange",label:"CommonJS require",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-js"},"<img\nsrc={require('../assets/docusaurus.png').default}\nalt=\"Example banner\"\n/>\n"))),(0,r.yg)(l.A,{value:"banana",label:"Import statement",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-ts"},"import myImageUrl from '../assets/docusaurus.png';\n<img src={myImageUrl} alt=\"Example banner\" />;\n")))),(0,r.yg)("h3",{id:"files"},"Files"),(0,r.yg)("h1",{id:"my-markdown-page"},"My Markdown page"),(0,r.yg)("a",{target:"\\_blank",href:n(68437).A}," Download this docx "),(0,r.yg)("p",null,"or"),(0,r.yg)("p",null,(0,r.yg)("a",{target:"_blank",href:n(81828).A},"Download this docx using Markdown")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown"},"<a target=\"\\_blank\" href={require('../assets/docusaurus.png').default}> Download this docx </a>\n\nor\n\n[Download this docx using Markdown](../assets/docusaurus.png)\n")),(0,r.yg)("h2",{id:"math"},"Math"),(0,r.yg)("p",null,"Let $f\\colon","[a,b]","\\to\\R$ be Riemann integrable. Let $F\\colon","[a,b]","\\to\\R$ be\n$F(x)=\\int_{a}^{x} f(t)\\,dt$. Then $F$ is continuous, and at all $x$ such that\n$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown"},"Let $f\\colon[a,b]\\to\\R$ be Riemann integrable. Let $F\\colon[a,b]\\to\\R$ be\n$F(x)=\\int_{a}^{x} f(t)\\,dt$. Then $F$ is continuous, and at all $x$ such that\n$f$ is continuous at $x$, $F$ is differentiable at $x$ with $F'(x)=f(x)$.\n")),(0,r.yg)("p",null,"$$\nI = \\int_0^{2\\pi} \\sin(x)\\,dx\n$$"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-markdown"},"$$\nI = \\int_0^{2\\pi} \\sin(x)\\,dx\n$$\n")),(0,r.yg)("h3",{id:"test2"},"test2"),(0,r.yg)("p",null,"asdasd"),(0,r.yg)("h4",{id:"test-5"},"test 5"),(0,r.yg)("p",null,"asdasd"),(0,r.yg)("h5",{id:"6666"},"6666"),(0,r.yg)("p",null,"asdas"))}y.isMDXComponent=!0},81828:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/files/docusaurus-e8e4adf44ac06f25e961f7a71a6d0f90.png"},68437:(e,a,n)=>{n.d(a,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAT3UlEQVR42u1dCVQVV5pWXNt2N0czykl33KImZ7IgKgqIghq3KCDK+qowCek2c2K0Mx3idBxakzYxJnZiq3Gf6Bg7UdN2R51MxnTSia3gew9Rwccm7oqiiIK4sPxTt1hEHo9XvPVW1fed852Dr+67UNb/1f3/+9/731atAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8i2CxGjDUJXzMGmcSZnmoHAF7B6GMJvYPNwq5gk1AmMS/YJMbaahtkNsRLbeghmoU4d7cDAO+NCEbhQCMjrZbe5q81bhdyVOwuXbtqZdDSZ+yau9oBgNcgGeIvmzDQJkUy1ix8ZKMtsWvuagcAXsNYs/iyLSNlIgk2GebLQjKJQ6R/32+mbcWYI8KTrm6HJwR4170yCV80Y6T1I4kklH122lFNG9e2wxMC3Ao/U1KnQLPgF2SK/xeri5TiIxlikX1DBXVANpoXSy/DzGCjYfdYs2FRiFkcxWxEu/GF0RAm3fT1Bv8JJyV+LLlV08ccnNuFCQeGAdrheWkkXxaSGueruZFDurlrzfn4QSbDGRgAqJD3JK4NMcU8oo3RIz1hOB4q6AZeCzKK0aoXCIs58DBBt9Esfip5Ke3UPkN1Eg8TdB8N+5grr+JRxPAJHiLoTgaZhf97MiuqvVqTgNPxEEEPcK0qBTIyNa6rnWw1CLooJjHMUZc6KMWnNs9xDg8Q9ACLQtMMvbhfeFi7tuoLZMhBz1NczaUw2H4OFizhAYFe5l0uM+61m53wgMAWM+C7aBr425Ey2c8umPpdxmO+oxQPWz8cvnOmTGf7Gf1DDHXs25lYxMrIfmafOdnvOe4WONZsk4XhaD7nkJpAPQN96w2a/cw+c7S/QYsC6vuq46D/CHD+7zQaRvDmYsXVbG6CEWmZQ5YGWRk0+8zR/phb1bg/9pkLgvVk/twso+EViETbfPw1PyuDHrDQ36n4o6GL1eHRn7skDhlrEnZyuvbKMN/TIglKM9AzmyfLbzL2sBjZz89sniJfg2G7Nvbwad+m3qB9OrQh/z0RTschzK1yXZAu8zi/CxQ9NJL4fT6d+kwdQG27drB6q9WxXbcO1GfaAPL78wswcBfx6Y2T6ZHxv5DJfuY1acj5Kl55JHHPtOCBaOozZQC18mltUxhWlNoyobjwDQVyng/hVhyBaYbBrEKhW0aNL2Y85LO2lB37daHhX86AAemAPC4z6R5sEt9j6nWXONr8vJ3D4qhj287tIRIIxMP7PmrKd151p1vV3MjRtmt7eiT0F+QbN4z6xQ6T/eO2XdrbbP8z3y5wtyAQT+VAxAh336wcczQVhPfsKM+ANJWsYp+xRFS7Hh2b/C6LSWBIEIgnsuh73T1b1VRA3ql/dxq5d5bd74/4OlJu21TgjtktCMT9uwbdFJDXjx5TBzQ5cigRR71I/hZJ7bpbTwf3mT4QxgSBuHtbrSHcnUlAlstwxXqdgcmjmsyTIJkIgag2SGcZ8qYCckcWyAUdTpBnsBr398yWKTAoCESd07xD3rFeHMdmqxztj81uNe5v6B+CYVAQiAeD9qPiIOkP/NIVN9l//nArg/ZNeNLh/nzjn7Tqr//rw2FQEIg6M+lN7RcY/LvR3PQHupdh6S9R+LH5ZMh8i17NfoeS81bSO6fX0cfn/ps2X/wL7bzyv/TNtYP0z5KjdLw0hwrKL1DR/Rt0r+q+Plys0d/HyMtDGib4nNlx5ur+QPcZuLPQTSa9bjk0oyuM2dX9adm4Zx57jeIzk+lXliX0Ru4KSjm1hlac/S/69MKXtP3yXvrr1b/Td8WplHbzOGWV5dPZO5fo+v0Slxi4ZgTiiUw66BoD/32BPQO/zI2Ba0cgbs6kg9aMPfFbWn5mM/258H80a+CaEYi7M+ngA7JR4ERpHgFqEogbM+lgDSelv0LfFx+B1SNIBxtzWsarlH27ABavZoF4YsOUHhliEuX4AlCOwsJC2rVrF7+JwjHGuU8Em4X9MHDn+afzOzRtzGVlZbR69WqKjY2lqKgoev/996m4uNihvqqrqyklJYU6dKhf3Kq/Pel6izuKK246bYQXLlygvXv30ldffUWZmZlO9cX6CAwMpI4dO1Lbtm3pueeeo61btzrUV1ZWFj3++ONWKxseffRRMpvNLe7vzTffrClF5ONDEydOhIuldb53ZqNTxpyfn08RERFWBsiM2mQytbi/+fPn29zCnJSU1KK+ioqKyNe3poTpU089RRs3bqTt27dTQEBAvUiuXr2quL8ff/xRFgYT7e7duxGk64E/FBsdFsfhw4epR48eNTsvO3WioKAgmjRpEvXu3Vv+rHPnzvTTTz8p7u/dd9+tqXwouS/Lly+nS5cuUUlJCa1fv17ui11j7pFSTJs2Tf4O+7tu3bpV//ndu3fr3v40Y8YMRX1VVFTQkCFD5O8sW7YMmXS98MLdQofEYbFYqFu3brLBsBGEBa11KC0tpcTERPkaa8NGGXs4ePCg/HZu06YN7du3z+r6/v3769/e6enpdvvbs2dPTeHrnj1l968xLl68SN2712yR/vbbb+3299lnn8ltn3jiCbp37x4y6XphedWdFouDBbiDBw+WDWb27NlUWVlp1aaqqooiIyPlNsOHD3/IqBrj9u3bNGjQILnt4sWLbbZbuHCh3Mbf37/J31kH9rvq+mPBuS2w0Yi18fPzk4NvW2C/iwmDtd22bRsy6RAINWvM48aNq48z2L9tgblH/fv3l9suWLDAZrt58+bJbZ5++ulmhcRGpscee8yu4a9YsUJuM2zYMNk1soXy8nLq16+f3Hbnzp0227EJAtZm4MCBVv0hkw4XS8aNGzdkV4S9bZmxMMM6f/683e+lpaVR+/Y1W5A//PBDq+vr1q2Tr7E2GRkZil2nrl27Um5ubpOTBuwaa/PNN9/Y7a/u97MRgsUmjcE+Y8JgbbZs2YJMut6oZGnJ6NGjHz5bQzKYggLlWXf2BmbxA/suC+LZbNKOHTsoLi6OWrduLXPz5s2K+2P5DNYXC5rz8h6sGbt8+bI8qrFrrI3S4JuNNOw7ycnJVtfffvvtZkcjTPNqnMtOb7BrRGPGjJFnlpiRfPDBB826VbbABNGrVy/rii/t2tGqVata7OY9++yz8ve7dOkiC41NAdfNng0dOlR2x5TCaDTKfwf77tKlS2UhsJiEuXFs0oCJ+9ChQ+pYauKOPel65sT0JJckCpXmJVhgzLLZM2fOpEWLFj00ArR0oqCp/AuLj9hI0lIwkbKRrG7mqy42YVyyZIl61mJhqYnruercdtUuI2HTzZs2baK1a9fSkSPOrURm8U1droOxb9++tGHDBixWxGJFkVJLjmEFYoMcCYuxmpsBQ5Cuu+Xu8+hk2SmoQ63L3ZFJ90w8cuD6YVi9KgWCTLrHuDB3uVwep5qqoQC1CASZdM8z+sQb9P6ZTbSjcD+KNnAvEGTSUfYHAkGQDoGhcBymeUGUHkUmHdS6wG5VlmFPOgjq/gAdEMQRbCCoZYEgkw5CIMikgxAIMukgBIJMOgiBIEgHIRBM84KgegSCTDoIgSCTzvcWXbNAv7bE0/oL0fSPG1F0+k4k3aoMp4rqmUSkL8LFAus563gCbb88h4ruR+hOCKoQCIJ07/CFDAP9rWg23a+GILgVCDLp3uGSghi6WREOMXAvEGTSPcrxUpzxtTRqQAQqEQgCck9WNzFQasksCEBVAkEm3WMjB8SBIB20QbhVmOYFbXBpQazLDYjlR25XhetGIJOyXuw5JntuF2TSNVd61EAlLpytqpa4sjCWJmSLMtdcidG2QKhV67CcxHVh2WJVLVcik65zjmVZ9QyRxmcKFHpSJMkoaGqOSHGnDPTGuXj53w1pLIvSnECk+yoPzRZPh2Un/r3x/YZZEifBxdLrcpOMB6JQyt3Fc7QokOb4OoJ0vdEs0LgTLRNGHQ/cnE07JZEcLo2SXTCtC2RCdmJ8aI64MNSSOI25YMik64COiqMxPy6M0cMI0oDCGmTSdeBWuUIcYbWBe6kGZrdacM/VIafF7sikazggb2nMYU8gJZURehJIVUhO0iPIpGt29HCdOBj/qDMXS3ohfIogXctLUDJd516xaeCvb8yhMv24WGekQP2VsFNJ3TDNq1G60r2qY4IkFLWLpIX3fMojIkEm3QsV0LMFlwuEcfS/P0N+ft29ypdf/qWnBEJhFiEJmXQIRDH7RQ2uP5fcW+zbt6PHBDIhJ/EluFhwsRRxzsl4OmgeTyZTiFdZXDzVUwLJd6uLhSBdO0H63huzdRWkM9fKreJAJl07SULGjy7H6iuTbhHXI5Ou8URhGBKFHCcKEZB7fxQ5iqUm/C41QSadk8WKrhHJJ4X6crFCLeKfkEnXiavl7HL31LJZutgPUrfcPSxXmIoNU3rcMGURsGGKpw1TyKTzKZTxmWJtnkT6OSOBxhyYRX6fPW9lML0C+3k9KdgUR47s4dSWW4kF3Gy5RSbdtXTUMEaM6NG84bVuRUNSAiThSCNNlkCDk/25FAfjqFE9XVO0IVtcW1uwoTLMInyEsj86FohSllaGU7mOyv5MPR7bIyRrXmcUjoNAQFR3h0BAVHeHQEBUdwchEFR3ByEQVHdHkA6BQCCY5oVAIBBk0tUrEH//Htwm/jyZSedWIMikc55JVxFdkkmHiwWBgAjSIRAQmXQQAkEmHYRAkEkHeRDIP0ujaOG5eJqWK8j8jfQzOyQHAkEmXfcC2XA12uaOuk1F0RAIgnRtC4Qd4XyifBZZ7kRaHefMRg5722wbjySsD9YX61MLx0OH5cwNnJwX1xXTvDoTyF3JeD8pjKHncx4Y+xTp51VXYuRrrM3CJk6ybUx22u2D/mLlPuquTc4RavqrVv2e9LthOcKqgPNRP0MmXQcCqZAMdsFZ28b/unTNf1QvGpceZ1cg48xx5NPOh4Z/PsVmG79tz1Prtj5q3ZPekD/4mZLaIZOu9dpXx+1XKBl3XFlFk9BMAw1+a4Tddo8Zhqkyk95EQbz5cLG0Xsk9S3TLUQfN8ddnErRS9seMIF3rZ4FYPC+QF3IFrQjkFjLpOAvE5UwsMGhFIBZk0rV+FsgJweMC+Vilp95a34uwBpl0rdffNXtWIKzS+9Hbs2hlYSwZThnkqWA2onx+LZr7KeDGFdxDsw3jwnIS18mnSWWLd9iIEmpJfMvtU8DIpHtwBMny/Ahii/8mBe88JxRb8BJIc3tCEUG6Nt0re/zgcozqBVLrfm3GNK+aC1Ef408cjBM5Po2qhfdS6dZTppBJd2/cEWoRuRQIY8/RfdWQSbfP3LlhSoPuxSGpcb7IpMO1UsIe/n1UkUm3OxrmCsF2jTs09aU+0kO5zQwcLhYHTBe5Fgdb1HirMlwLLtbdSVkv9lSS01ha93CCzMpP4UGQzve5g+7iHzk+z7CF97JWadIvr8EDqmJZcmTSvUSzd5aWKOX8swn1y+tVLpCD001JnezHHkdE/yYe1B17IkEm3U3BeTq/o8faK9Hy0nvVn3JrET5SvAxeeii/sfGwqqSY5DVk0j3sXh3jd/Rgm7V43+Ou8F7uSyyT+P1EizjdnkC+sDPk7x+TPrcvMukemr3K5DtA532PuyP3EZojvtvc9G6mggd3LcgoLAg49PD6FQTp7li5K6hGIE3tcVejQGSRWBKn2RpBLrXgAbK2vws0zu2PaV7t7P1whnV73NUuEHZstC2B3HFwtuVIkEn8cKxRiJFGkn8NyZgbGGw07IaROzmCZKtLIGyPu6oz6fY2VkkP5R4MEwJxlCGmOG4y6ferw525l5u2BHIdhsmRQOBiOUy2gNLhGCRb/M6ZIB3U8PZaZ5haNosbgRTcjXT8XnKFqbZGkK9gmDxtjlKPOLZwNs37j1uzHbwXYWlzOwMXwTCRKFSaKJyeK8huFU8jh5K6xNaJQqGUuVU2R476aVqzOAqGiaUmSnjmXiTXy0xePZOgLN7ISxymfL06pfhID+YcjJMTgXAah7xymu9CclfuR8jFJhTcy1EHSvgYlsE41VVq1NPccX0O1wJhFVcU3UuOmNzyfeWpcb7Ih/C1YYqnfAirsnijkt8l7iz/EZ1vUJQMnJif0NvRQnBrYZw8bZriRyDbrvE9euwpnqOs1E+OsNjhogsBh17sKT2YIhgnLxunRC7WZc3OF6ic4w1SN6WRLTJP0ehxOSRrXmfn6lwZxWgYJ8r+NKywmMbhdG5DLrkYp+ReqsbnGCa7qij1pzBOVDdh3HqN7zMN/3pjttLA/D9dVt8q6suoNmNNwl9gnPreRPV76c1czbE4WKJyUo6il8euFErxcWkROD9TUqdgk2EfjJOf3IgnRfLepViqrOY37mCbtKbmKhLH1pDvU9q6pVIi29SOmS19zWxNqC3MUM25W6Vg5KhmhRlaUavWHjgoxzAHs1scBe4ZclUOl4sjJt9AxrIoboVRUhmuNCA/F2ZJnOTRs0BC0wy9gk3iamyr5ad2lquCd1alZM2VGG6PNGBJQJbnCM+ze7+sSslKr56RPj7D0K92WQrWbnEiFLYsxZG1W2zEYMszeC0herUiQv77FGTIz7EDcRSVEPUYKMUnyGgYIY0qyVIAuVN6WMdrdyZiuYqXgvixRwX5KOjxmTWLHdnORLZchfnrEdLb9+XTCZKLEiv78GfvRXA0QsykmxXhlF8eST8UR9G6i9H0q7x4Cm10H2HZQoUkhmsSj0/IFnZOyBFeDctNGNoKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsI3/BxVeQNnL1kBuAAAAAElFTkSuQmCC"}}]);