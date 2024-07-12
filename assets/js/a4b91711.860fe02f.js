"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27049],{15680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>m});var n=t(96540);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),g=i,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return t?n.createElement(m,a(a({ref:r},d),{},{components:t})):n.createElement(m,a({ref:r},d))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=g;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},44556:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(58168),i=(t(96540),t(15680));const o={title:"Grove - \u7535\u81f4\u53d1\u5149\u9a71\u52a8\u5668",description:"Grove - \u7535\u81f4\u53d1\u5149\u9a71\u52a8\u5668",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-EL_Driver/",slug:"/cn/Grove-EL_Driver",last_update:{date:"03/20/2024",author:"WuFeifei"}},a=void 0,l={unversionedId:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-EL_Driver",id:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-EL_Driver",title:"Grove - \u7535\u81f4\u53d1\u5149\u9a71\u52a8\u5668",description:"Grove - \u7535\u81f4\u53d1\u5149\u9a71\u52a8\u5668",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-EL_Driver.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Accessories/Actuator",slug:"/cn/Grove-EL_Driver",permalink:"/cn/Grove-EL_Driver",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Accessories/Actuator/cn-Grove-EL_Driver.md",tags:[],version:"current",lastUpdatedBy:"WuFeifei",lastUpdatedAt:1710892800,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{title:"Grove - \u7535\u81f4\u53d1\u5149\u9a71\u52a8\u5668",description:"Grove - \u7535\u81f4\u53d1\u5149\u9a71\u52a8\u5668",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-EL_Driver/",slug:"/cn/Grove-EL_Driver",last_update:{date:"03/20/2024",author:"WuFeifei"}}},s={},p=[{value:"\u7248\u672c\u8ffd\u8e2a",id:"\u7248\u672c\u8ffd\u8e2a",level:2},{value:"<strong>\u652f\u6301\u7684EL\u7ebf\uff1a</strong>",id:"\u652f\u6301\u7684el\u7ebf",level:4},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u4f7f\u7528\u8bf4\u660e",id:"\u4f7f\u7528\u8bf4\u660e",level:2},{value:"\u4e0eArduino\u914d\u5408\u4f7f\u7528",id:"\u4e0earduino\u914d\u5408\u4f7f\u7528",level:3},{value:"\u4f7f\u7528Codecraft\u7f16\u7a0b",id:"\u4f7f\u7528codecraft\u7f16\u7a0b",level:3},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:4},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6",level:4},{value:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],d={toc:p},u="wrapper";function c(e){let{components:r,...t}=e;return(0,i.yg)(u,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver.jpg",alt:null})),(0,i.yg)("p",null,"Grove - EL\u9a71\u52a8\u5668\u4e13\u4e3a\u9a71\u52a8EL\u7ebf\u8bbe\u8ba1\u3002\u5b83\u96c6\u6210\u4e86\u4e00\u4e2a\u975e\u5e38\u5c0f\u7684\u9006\u53d8\u5668\u6765\u9a71\u52a8EL\u7ebf\uff0c\u56e0\u6b64\u60a8\u53ea\u9700\u4f7f\u7528\u4e00\u6839Grove\u7ebf\u7f06\u5c31\u53ef\u4ee5\u8f7b\u677e\u70b9\u4eaeEL\u7ebf\u3002"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-EL-Driver-p-2269.html"},(0,i.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,i.yg)("h2",{id:"\u7248\u672c\u8ffd\u8e2a"},"\u7248\u672c\u8ffd\u8e2a"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"\u7248\u672c\u53f7"),(0,i.yg)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,i.yg)("th",{parentName:"tr",align:null},"\u53d1\u5e03\u65e5\u671f"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"v1.0"),(0,i.yg)("td",{parentName:"tr",align:null},"\u521d\u59cb\u516c\u5f00\u53d1\u884c\u7248\u672c"),(0,i.yg)("td",{parentName:"tr",align:null},"2014\u5e7412\u670811\u65e5")))),(0,i.yg)("h4",{id:"\u652f\u6301\u7684el\u7ebf"},(0,i.yg)("strong",{parentName:"h4"},"\u652f\u6301\u7684EL\u7ebf\uff1a")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/EL-WireGreen-3m-p-1102.html"},"EL Wire-\u7eff\u8272 3m")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/EL-WireRed-3m-p-1129.html"},"EL Wire-\u7ea2\u8272 3m")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/EL-WireBlue-3m-p-1128.html"},"EL Wire-\u84dd\u8272 3m")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/EL-WireYellow-3m-p-1127.html"},"EL Wire-\u9ec4\u8272 3m")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/EL-WireWhite-3m-p-1130.html"},"EL Wire-\u767d\u8272 3m"))),(0,i.yg)("h2",{id:"\u7279\u6027"},"\u7279\u6027"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Grove\u517c\u5bb9\u63a5\u53e3"),(0,i.yg)("li",{parentName:"ul"},"3.3V/5V\u517c\u5bb9"),(0,i.yg)("li",{parentName:"ul"},"\u96c6\u6210\u9006\u53d8\u5668\u53d8\u538b\u5668"),(0,i.yg)("li",{parentName:"ul"},"\u8f93\u5165\u7535\u6d41\uff1a\u6700\u5927300mA\uff08\u6839\u636e\u8d1f\u8f7d\u800c\u5b9a\uff09"),(0,i.yg)("li",{parentName:"ul"},"\u652f\u6301\u7684\u6700\u5927EL\u7535\u5bb9\uff1a15nF")),(0,i.yg)("p",null,":::\u63d0\u793a\n\u66f4\u591a\u5173\u4e8eGrove\u6a21\u5757\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove\u7cfb\u7edf"),"\n:::"),(0,i.yg)("h2",{id:"\u4f7f\u7528\u8bf4\u660e"},"\u4f7f\u7528\u8bf4\u660e"),(0,i.yg)("h3",{id:"\u4e0earduino\u914d\u5408\u4f7f\u7528"},"\u4e0eArduino\u914d\u5408\u4f7f\u7528"),(0,i.yg)("p",null,"\u8fd9\u91cc\u6211\u4eec\u5c55\u793a\u5982\u4f55\u4f7f\u7528Arduino\u6765\u63a7\u5236LED\u7684\u72b6\u6001\u3002"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u4f7f\u75284pin Grove\u7ebf\u7f06\u5c06Grove - EL\u9a71\u52a8\u5668\u8fde\u63a5\u5230Base Shield\u7684",(0,i.yg)("strong",{parentName:"p"},"\u6570\u5b57\u7aef\u53e32"),"\u3002\u5f53\u7136\uff0c\u5982\u679c\u6709\u5fc5\u8981\uff0c\u60a8\u53ef\u4ee5\u66f4\u6539\u4e3a\u5176\u4ed6\u6709\u6548\u7684\u6570\u5b57\u7aef\u53e3\uff0c\u5e76\u5e94\u76f8\u5e94\u5730\u66f4\u6539\u7aef\u53e3\u5b9a\u4e49\u3002\u4f7f\u7528\u4ea7\u54c1\u5305\u88c5\u4e2d\u63d0\u4f9b\u7684\u7ebf\u7f06\u5c06EL\u7ebf\u8fde\u63a5\u5230EL\u9a71\u52a8\u5668\u7684",(0,i.yg)("strong",{parentName:"p"},"J1"),"\u7aef\u53e3\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5c06\u5176\u63d2\u5165Arduino/Seeeduino\u3002\u4f7f\u7528USB\u7ebf\u7f06\u5c06\u677f\u8fde\u63a5\u5230PC\u3002")),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"\u5c06\u793a\u4f8b\u4ee3\u7801\u590d\u5236\u5230\u60a8\u7684\u8349\u56fe\u4e2d\uff0c\u7136\u540e\u4e0a\u4f20\u5230Arduino\u6216Seeeduino\u677f\u3002\u60a8\u5c06\u770b\u5230EL\u7ebf\u6bcf\u79d2\u95ea\u70c1\u4e00\u6b21\u3002"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"/*************************   2014 Seeedstudio   **************************\n* File Name         \xa0: GroveELDriverDemoCode.ino\n* Author            \xa0: Seeedteam\n* Version           \xa0: V1.0\n* Date              \xa0: 11/12/2014\n* Description       \xa0: Demo code for Grove - EL Driver\n*************************************************************************/\n\xa0\n#define ELPin 2 //connect EL Driver to digital pin2\nvoid setup() {                \n  // initialize the digital pin2 as an output.\n  pinMode(ELPin, OUTPUT);     \n}\n\xa0\nvoid loop() {\n  digitalWrite(ELPin, HIGH);   // set the EL Wire on\n  delay(500);               // for 500ms\n  digitalWrite(ELPin, LOW);   // set the EL Wire off\n  delay(500);\n}\n")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/Grove-EL_Driver_usage.jpg",alt:null})),(0,i.yg)("h3",{id:"\u4f7f\u7528codecraft\u7f16\u7a0b"},"\u4f7f\u7528Codecraft\u7f16\u7a0b"),(0,i.yg)("h4",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1.")," \u5c06Grove - EL\u9a71\u52a8\u5668\u8fde\u63a5\u5230Base Shield\u7684D2\u7aef\u53e3\u3002"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u5c06Base Shield\u63d2\u5165\u60a8\u7684Seeeduino/Arduino\u3002"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 3.")," \u901a\u8fc7USB\u7ebf\u7f06\u5c06Seeeduino/Arduino\u8fde\u63a5\u5230\u60a8\u7684PC\u3002"),(0,i.yg)("h4",{id:"\u8f6f\u4ef6"},"\u8f6f\u4ef6"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 1.")," \u6253\u5f00",(0,i.yg)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),"\uff0c\u6dfb\u52a0Arduino\u652f\u6301\uff0c\u5e76\u5c06\u4e00\u4e2a\u4e3b\u7a0b\u5e8f\u62d6\u653e\u5230\u5de5\u4f5c\u533a\u57df\u3002"),(0,i.yg)("p",null,":::\u6ce8\u610f\n\u5982\u679c\u60a8\u662f\u7b2c\u4e00\u6b21\u4f7f\u7528Codecraft\uff0c\u4e5f\u8bf7\u53c2\u9605",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/"},"\u4f7f\u7528Arduino\u7684Codecraft\u6307\u5357"),"\u3002\n:::"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"\u6b65\u9aa4 2.")," \u6309\u7167\u4e0b\u9762\u7684\u56fe\u7247\u62d6\u62fd\u6a21\u5757\uff0c\u6216\u8005\u6253\u5f00\u53ef\u4ee5\u5728\u672c\u9875\u9762\u672b\u5c3e\u4e0b\u8f7d\u7684cdc\u6587\u4ef6\u3002"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-EL_Driver/img/EL_Driver.png",alt:null})),(0,i.yg)("p",null,"\u5c06\u7a0b\u5e8f\u4e0a\u4f20\u5230\u60a8\u7684Arduino/Seeeduino\u3002"),(0,i.yg)("p",null,":::\u63d0\u793a\n\u5f53\u4ee3\u7801\u4e0a\u4f20\u5b8c\u6210\u540e\uff0c\u60a8\u5c06\u770b\u5230EL\u7ebf\u5f00\u59cb\u95ea\u70c1\u3002\n:::"),(0,i.yg)("h2",{id:"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"},"\u5728\u7ebf\u539f\u7406\u56fe\u67e5\u770b\u5668"),(0,i.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.yg)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.zip"},"\u539f\u7406\u56fe_\u7535\u8def\u677f_eagle")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/Grove-EL_Driver_v1.0.pdf"},"\u539f\u7406\u56fe_pdf")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-EL_Driver/res/EL%20Driver.zip"},"CodeCraft \u5e93"))),(0,i.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"),(0,i.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u6b64\u4e3a\u60a8\u63d0\u4f9b\u5168\u65b9\u4f4d\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u5728\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u65f6\u80fd\u591f\u83b7\u5f97\u6700\u987a\u7545\u7684\u4f53\u9a8c\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u60a8\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);