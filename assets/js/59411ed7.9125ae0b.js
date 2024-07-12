"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71777],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>u});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=r.createContext({}),s=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(g.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,g=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),y=a,u=d["".concat(g,".").concat(y)]||d[y]||m[y]||i;return n?r.createElement(u,l(l({ref:t},p),{},{components:n})):r.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},42749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const i={description:"Grove - \u91d1\u5c5e\u6c27\u5316\u7269\u534a\u5bfc\u4f53\u573a\u6548\u5e94\u6676\u4f53\u7ba1",title:"Grove - \u91d1\u5c5e\u6c27\u5316\u7269\u534a\u5bfc\u4f53\u573a\u6548\u5e94\u6676\u4f53\u7ba1",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-MOSFET",last_update:{date:"03/21/2024",author:"WuFeifei"}},l=void 0,o={unversionedId:"zh-CN/Sensor/Grove/Grove_Accessories/Current/cn-Grove-MOSFET",id:"zh-CN/Sensor/Grove/Grove_Accessories/Current/cn-Grove-MOSFET",title:"Grove - \u91d1\u5c5e\u6c27\u5316\u7269\u534a\u5bfc\u4f53\u573a\u6548\u5e94\u6676\u4f53\u7ba1",description:"Grove - \u91d1\u5c5e\u6c27\u5316\u7269\u534a\u5bfc\u4f53\u573a\u6548\u5e94\u6676\u4f53\u7ba1",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Accessories/Current/cn-Grove-MOSFET.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Accessories/Current",slug:"/cn/Grove-MOSFET",permalink:"/cn/Grove-MOSFET",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Accessories/Current/cn-Grove-MOSFET.md",tags:[],version:"current",lastUpdatedBy:"WuFeifei",lastUpdatedAt:1710979200,formattedLastUpdatedAt:"Mar 21, 2024",frontMatter:{description:"Grove - \u91d1\u5c5e\u6c27\u5316\u7269\u534a\u5bfc\u4f53\u573a\u6548\u5e94\u6676\u4f53\u7ba1",title:"Grove - \u91d1\u5c5e\u6c27\u5316\u7269\u534a\u5bfc\u4f53\u573a\u6548\u5e94\u6676\u4f53\u7ba1",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-MOSFET",last_update:{date:"03/21/2024",author:"WuFeifei"}}},g={},s=[{value:"\u7248\u672c",id:"\u7248\u672c",level:2},{value:"<strong>\u89c4\u683c</strong>",id:"\u89c4\u683c",level:2},{value:"\u652f\u6301\u7684\u5e73\u53f0",id:"\u652f\u6301\u7684\u5e73\u53f0",level:2},{value:"<strong>\u5165\u95e8\u6307\u5357</strong>",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"<strong>\u4f7f\u7528Arduino\u8fdb\u884c\u64cd\u4f5c</strong>",id:"\u4f7f\u7528arduino\u8fdb\u884c\u64cd\u4f5c",level:3},{value:"<strong>\u6f14\u793a</strong>",id:"\u6f14\u793a",level:4},{value:"<strong>\u786c\u4ef6</strong>",id:"\u786c\u4ef6",level:4},{value:"<strong>\u8f6f\u4ef6</strong>",id:"\u8f6f\u4ef6",level:4},{value:"<strong>\u4f7f\u7528\u6811\u8393\u6d3e\u8fdb\u884c\u64cd\u4f5c</strong>",id:"\u4f7f\u7528\u6811\u8393\u6d3e\u8fdb\u884c\u64cd\u4f5c",level:3},{value:"<strong>\u786c\u4ef6</strong>",id:"\u786c\u4ef6-1",level:4},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6-1",level:4},{value:"<strong>\u8d44\u6e90</strong>",id:"\u8d44\u6e90",level:2},{value:"<strong>\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba</strong>",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_01.jpg"})),(0,a.yg)("p",null,"Grove \u2013 MOSFET \u6a21\u5757\u4f7f\u60a8\u80fd\u591f\u4f7f\u7528\u4f4e\u7535\u538b\uff08\u4f8b\u5982 5V\uff09\u7684\u5fae\u63a7\u5236\u5668\u6765\u63a7\u5236\u9ad8\u7535\u538b\u9879\u76ee\uff0c\u6bd4\u5982 15V DC\u3002MOSFET \u4e5f\u662f\u4e00\u79cd\u5f00\u5173\uff0c\u4f46\u5176\u5f00\u5173\u9891\u7387\u53ef\u4ee5\u9ad8\u8fbe 5MHz\uff0c\u8fdc\u5feb\u4e8e\u666e\u901a\u7684\u673a\u68b0\u7ee7\u7535\u5668\u3002\u677f\u4e0a\u8bbe\u6709\u4e24\u4e2a\u87ba\u4e1d\u63a5\u7ebf\u7aef\u5b50\uff0c\u4e00\u4e2a\u7528\u4e8e\u5916\u90e8\u7535\u6e90\uff0c\u53e6\u4e00\u4e2a\u7528\u4e8e\u60a8\u60f3\u8981\u63a7\u5236\u7684\u8bbe\u5907\u3002\u5f53 Grove \u2013 MOSFET \u95ed\u5408\u65f6\uff0c\u5b83\u4f1a\u5c06\u7535\u6e90\u4ece\u4e00\u7aef\u4f20\u9012\u5230\u53e6\u4e00\u7aef\u3002\u4f46\u662f\uff0c\u5982\u679c\u5916\u90e8\u7535\u6e90\u7f3a\u5931\uff0c\u60a8\u7684\u8bbe\u5907\u4ecd\u7136\u53ef\u4ee5\u901a\u8fc7 Grove \u63a5\u53e3\u4ece\u5fae\u63a7\u5236\u5668\u83b7\u53d6\u7535\u6e90\u3002"),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("a",{href:"https://www.seeedstudio.com/Grove-MOSFET-p-1594.html",target:"_blank"},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",width:"210",height:"41",border:"0"}))),(0,a.yg)("h2",{id:"\u7248\u672c"},"\u7248\u672c"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"\u4ea7\u54c1\u7248\u672c"),(0,a.yg)("th",{parentName:"tr",align:null},"\u53d8\u66f4\u5185\u5bb9"),(0,a.yg)("th",{parentName:"tr",align:null},"\u53d1\u5e03\u65e5\u671f"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Grove - MOSFET V1.0"),(0,a.yg)("td",{parentName:"tr",align:null},"\u521d\u59cb\u7248"),(0,a.yg)("td",{parentName:"tr",align:null},"2015\u5e7410\u6708")))),(0,a.yg)("h2",{id:"\u89c4\u683c"},(0,a.yg)("strong",{parentName:"h2"},"\u89c4\u683c")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"th"},"\u53c2\u6570")),(0,a.yg)("th",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"th"},"\u503c/\u8303\u56f4")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"\u5de5\u4f5c\u7535\u538b")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"5V"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"Vin")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"5 ~ 15V"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"MOSFET \u578b\u53f7")),(0,a.yg)("td",{parentName:"tr",align:"left"},(0,a.yg)("strong",{parentName:"td"},"CJQ4435"))))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},":::\u63d0\u793a"),"\n",(0,a.yg)("strong",{parentName:"p"},"\u66f4\u591a\u5173\u4e8eGrove\u6a21\u5757\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,a.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove\u7cfb\u7edf")),"](",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"https://wiki.seeedstudio.com/Grove_System/"),"\n",(0,a.yg)("strong",{parentName:"p"},":::")),(0,a.yg)("h2",{id:"\u652f\u6301\u7684\u5e73\u53f0"},"\u652f\u6301\u7684\u5e73\u53f0"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,a.yg)("th",{parentName:"tr",align:null},"\u6811\u8393\u6d3e"),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}),(0,a.yg)("th",{parentName:"tr",align:null}))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,a.yg)("p",null,":::\u8b66\u544a"),(0,a.yg)("p",null,"\u4e0a\u8ff0\u63d0\u53ca\u7684\u652f\u6301\u5e73\u53f0\u662f\u6a21\u5757\u8f6f\u4ef6\u6216\u7406\u8bba\u517c\u5bb9\u6027\u7684\u4e00\u4e2a\u6307\u793a\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ea\u63d0\u4f9b\u9002\u7528\u4e8eArduino\u5e73\u53f0\u7684\u8f6f\u4ef6\u5e93\u6216\u4ee3\u7801\u793a\u4f8b\u3002\u6211\u4eec\u65e0\u6cd5\u4e3a\u6240\u6709\u53ef\u80fd\u7684MCU\u5e73\u53f0\u63d0\u4f9b\u8f6f\u4ef6\u5e93/\u793a\u4f8b\u4ee3\u7801\u3002\u56e0\u6b64\uff0c\u7528\u6237\u9700\u8981\u7f16\u5199\u81ea\u5df1\u7684\u8f6f\u4ef6\u5e93\u3002"),(0,a.yg)("p",null,":::"),(0,a.yg)("h2",{id:"\u5165\u95e8\u6307\u5357"},(0,a.yg)("strong",{parentName:"h2"},"\u5165\u95e8\u6307\u5357")),(0,a.yg)("p",null,":::\u63d0\u793a\n\u5982\u679c\u4f60\u662f\u7b2c\u4e00\u6b21\u4f7f\u7528Arduino\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u4f60\u5728\u5f00\u59cb\u524d\u5148\u67e5\u770b",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Arduino\u5165\u95e8\u6307\u5357"),"\u3002\n:::"),(0,a.yg)("h3",{id:"\u4f7f\u7528arduino\u8fdb\u884c\u64cd\u4f5c"},(0,a.yg)("strong",{parentName:"h3"},"\u4f7f\u7528Arduino\u8fdb\u884c\u64cd\u4f5c")),(0,a.yg)("h4",{id:"\u6f14\u793a"},(0,a.yg)("strong",{parentName:"h4"},"\u6f14\u793a")),(0,a.yg)("p",null,"\u8fd9\u91cc\u6211\u4eec\u6f14\u793a\u5982\u4f55\u4f7f\u7528Grove - MOSFET\u6765\u63a7\u5236\u4e00\u4e2a\u7535\u673a\u3002\u6211\u4eec\u4f7f\u7528\u5916\u90e8\u7535\u6e90\u4e3a\u5176\u4f9b\u7535\uff0c\u4f46\u5982\u679c\u4f60\u7684\u88ab\u63a7\u8bbe\u5907\u9700\u8981\u7684\u7535\u6d41\u5c0f\u4e8e300mA\uff0c\u90a3\u4e48Seeeduino\u5b8c\u5168\u53ef\u4ee5\u652f\u6301\u5b83\uff0c\u65e0\u9700\u989d\u5916\u7684\u7535\u6e90\u3002"),(0,a.yg)("h4",{id:"\u786c\u4ef6"},(0,a.yg)("strong",{parentName:"h4"},"\u786c\u4ef6")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b65\u3002\u51c6\u5907\u4ee5\u4e0b\u7269\u54c1\uff1a")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Seeeduino V4.2")),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"\u57fa\u7840\u6269\u5c55\u677f")),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Grove - MOSFET")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg"})))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg"})))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg"}))))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"\u7acb\u5373\u83b7\u53d6")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"\u7acb\u5373\u83b7\u53d6")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-MOSFET-p-1594.html"},"\u7acb\u5373\u83b7\u53d6"))))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 2"),". \u5c06Grove - MOSFET \u6a21\u5757\u8fde\u63a5\u5230Grove\u57fa\u7840\u6269\u5c55\u677f\u7684D6\u7aef\u53e3\u4e0a"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 3.")," \u5c06Grove\u57fa\u7840\u6269\u5c55\u677f\u63d2\u5165Seeeduino\u4e2d"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 4.")," \u901a\u8fc7USB\u7ebf\u5c06Seeeduino\u8fde\u63a5\u5230\u7535\u8111\u4e0a")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/2.jpg"})),(0,a.yg)("p",null,":::\u6ce8\u610f\n\u5982\u679c\u6211\u4eec\u6ca1\u6709Grove\u57fa\u7840\u6269\u5c55\u677f\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c06Grove_MOSFET\u8fde\u63a5\u5230Seeeduino\u4e0a\uff0c\u5982\u4e0b\u6240\u793a\n:::"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Seeeduino")),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Grove_MOSFET")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"5V"),(0,a.yg)("td",{parentName:"tr",align:null},"\u7ea2\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"GND"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ed1\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Not Conencted"),(0,a.yg)("td",{parentName:"tr",align:null},"\u767d\u8272")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"D6"),(0,a.yg)("td",{parentName:"tr",align:null},"\u9ec4\u8272")))),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/MOSFET_Interface_Function.jpg"})),(0,a.yg)("p",null,"\u63a5\u53d75V~15V\u7684\u7535\u6e90\uff0c\u7535\u6d41\u5c0f\u4e8e2A\u3002"),(0,a.yg)("p",null,"Vout\uff1a\u5728\u6b64\u5904\u8fde\u63a5\u6267\u884c\u5668\u3002"),(0,a.yg)("h4",{id:"\u8f6f\u4ef6"},(0,a.yg)("strong",{parentName:"h4"},"\u8f6f\u4ef6")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u5c06\u4ee3\u7801\u590d\u5236\u5230Arduino IDE\u5e76\u4e0a\u4f20\u3002\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u5982\u4f55\u4e0a\u4f20\u4ee3\u7801\uff0c\u8bf7\u67e5\u770b",(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"\u5982\u4f55\u4e0a\u4f20\u4ee3\u7801"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-c"},'// demo of Grove - MOSFET\n// use  pwm pin 6 to control a motor\n\nint motorPin = 6;\n\nvoid setup()\n{\n    Serial.begin(38400);\n    pinMode(motorPin, OUTPUT);\n    Serial.println("Grove - MOSFET Test Demo!");\n}\n\nvoid loop()\n{\n    motorOnThenOffWithSpeed();\n    motorAcceleration();\n}\n\nvoid motorOnThenOffWithSpeed()\n{\n    int onSpeed  = 200;                         // a number between 0 (stopped) and 255 (full speed)\n    int onTime   = 2500;\n    int offSpeed = 50;                          // a number between 0 (stopped) and 255 (full speed)\n    int offTime  = 1000;\n    analogWrite(motorPin, onSpeed);\n    delay(onTime);\n    analogWrite(motorPin, offSpeed);\n    delay(offTime);\n}\n\nvoid motorAcceleration()\n{\n    int delayTime = 50;\n    for(int i=0; i<256; i++)\n    {\n        analogWrite(motorPin, i);\n        delay(delayTime);\n    }\n\n    for(int i=255; i>=0; i--)\n    {\n        analogWrite(motorPin, i);\n        delay(delayTime);\n    }\n}\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 2.")," \u89c2\u5bdf\u7535\u673a\u7684\u72b6\u6001")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("img",{parentName:"strong",src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Static_image.gif",alt:null}))),(0,a.yg)("h3",{id:"\u4f7f\u7528\u6811\u8393\u6d3e\u8fdb\u884c\u64cd\u4f5c"},(0,a.yg)("strong",{parentName:"h3"},"\u4f7f\u7528\u6811\u8393\u6d3e\u8fdb\u884c\u64cd\u4f5c")),(0,a.yg)("h4",{id:"\u786c\u4ef6-1"},(0,a.yg)("strong",{parentName:"h4"},"\u786c\u4ef6")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," \u51c6\u5907\u4ee5\u4e0b\u7269\u54c1\uff1a")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:"right"},(0,a.yg)("strong",{parentName:"th"},"\u6811\u8393\u6d3e")),(0,a.yg)("th",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"th"},"GrovePi_Plus")),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Grove - MOSFET")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"right"},(0,a.yg)("strong",{parentName:"td"},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"})))),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("strong",{parentName:"td"},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg"})))),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg"}))))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:"right"},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"\u7acb\u5373\u83b7\u53d6")),(0,a.yg)("td",{parentName:"tr",align:"center"},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"\u7acb\u5373\u83b7\u53d6")),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-MOSFET-p-1594.html"},"\u7acb\u5373\u83b7\u53d6"))))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 2.")," \u5c06GrovePi_Plus\u63d2\u5165\u6811\u8393\u6d3e\u4e2d"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 3.")," \u5c06Grove-MOSFET\u6a21\u5757\u8fde\u63a5\u5230GrovePi_Plus\u7684D6\u7aef\u53e3\u4e0a\u3002"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 4.")," \u901a\u8fc7USB\u7ebf\u5c06\u6811\u8393\u6d3e\u8fde\u63a5\u5230\u7535\u8111\u4e0a")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/1.jpg"})),(0,a.yg)("h4",{id:"\u8f6f\u4ef6-1"},"\u8f6f\u4ef6"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 1.")," Navigate to the demos' directory:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"cd yourpath/GrovePi/Software/Python/\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 2."),"  To see the code")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},'nano grove_mosfet.py   # "Ctrl+x" to exit #\n')),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'import time\nimport grovepi\n\n# Connect the Grove MOSFET to digital port D6\n# SIG,NC,VCC,GND\nmosfet = 6\n\ngrovepi.pinMode(mosfet,"OUTPUT")\ntime.sleep(1)\n\nwhile True:\n    try:\n        # Full speed\n        grovepi.analogWrite(mosfet,255)\n        print "full speed"\n        time.sleep(2)\n\n        # Half speed\n        grovepi.analogWrite(mosfet,128)\n        print "half speed"\n        time.sleep(2)\n\n        # Off\n        grovepi.analogWrite(mosfet,0)\n        print "off"\n        time.sleep(2)\n\n    except KeyboardInterrupt:\n        grovepi.analogWrite(mosfet,0)\n        break\n    except IOError:\n        print "Error"\n')),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 3.")," Run the demo.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sudo python grove_mosfet.py\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"\u6b65\u9aa4 4.")," We will see the output display on terminal as below.")),(0,a.yg)("div",null,(0,a.yg)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/pi_result.png"})),"**|**",(0,a.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.yg)("h2",{id:"\u8d44\u6e90"},(0,a.yg)("strong",{parentName:"h2"},"\u8d44\u6e90")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"[Eagle][Grove - MOSFET \u539f\u7406\u56fe\u6587\u4ef6]","(",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip"},"https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip"),")"),(0,a.yg)("li",{parentName:"ul"},"[PDF][Grove - MOSFET \u539f\u7406\u56fe PDF]","(",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove%20-%20MOSFET%20.pdf"},"https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove%20-%20MOSFET%20.pdf"),")"),(0,a.yg)("li",{parentName:"ul"},"[Datasheet][CJQ4435 \u6570\u636e\u624b\u518c]","(",(0,a.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-MOSFET/res/CJQ4435.pdf"},"https://files.seeedstudio.com/wiki/Grove-MOSFET/res/CJQ4435.pdf"),")"),(0,a.yg)("li",{parentName:"ul"},"[WIKI][MOSFET \u7ef4\u57fa\u767e\u79d1]","(",(0,a.yg)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/MOSFET"},"https://en.wikipedia.org/wiki/MOSFET"),")")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"})),(0,a.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},(0,a.yg)("strong",{parentName:"h2"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba")),(0,a.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u591a\u79cd\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u65f6\u80fd\u591f\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);