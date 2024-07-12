"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9087],{15680:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>m});var r=o(96540);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},d=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(o),h=i,m=c["".concat(u,".").concat(h)]||c[h]||p[h]||a;return o?r.createElement(m,n(n({ref:t},d),{},{components:o})):r.createElement(m,n({ref:t},d))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,n=new Array(a);n[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:i,n[1]=s;for(var l=2;l<a;l++)n[l]=o[l];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},62492:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=o(58168),i=(o(96540),o(15680));const a={description:"Xadow - GSM Breakout",title:"Xadow - GSM Breakout",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_GSM_Breakout",last_update:{date:"1/13/2023",author:"shuxu hu"}},n=void 0,s={unversionedId:"Seeed_Elderly/Xadow/Xadow_GSM_Breakout",id:"Seeed_Elderly/Xadow/Xadow_GSM_Breakout",title:"Xadow - GSM Breakout",description:"Xadow - GSM Breakout",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_GSM_Breakout.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_GSM_Breakout",permalink:"/Xadow_GSM_Breakout",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_GSM_Breakout.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - GSM Breakout",title:"Xadow - GSM Breakout",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_GSM_Breakout",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Duino",permalink:"/Xadow_Duino"},next:{title:"Xadow - GSM&#43;BLE",permalink:"/Xadow_GSMPlusBLE"}},u={},l=[{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"How to use it",id:"how-to-use-it",level:2},{value:"Pin Definitions",id:"pin-definitions",level:2},{value:"Notice",id:"notice",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:l},c="wrapper";function p(e){let{components:t,...o}=e;return(0,i.yg)(c,(0,r.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/img/Xadow_GSM_Breakout.JPG",alt:null}),"\nThe Xadow GSM Breakout draws out 30 pins from the 35 pin Xadow connector to five rows of 0.1 spaced holes with 0.1 spacing between adjacent rows. If you solder wires or through-hole pin headers directly to the breakout pads, you can easily access:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Up to 16 General Purpose Inputs/outputs (GPIOs)"),(0,i.yg)("li",{parentName:"ul"},"Interfaces like SPI, I2C, UART, etc."),(0,i.yg)("li",{parentName:"ul"},"Pinout related to peripheral devices like speaker, audio headphone and microphones")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-GSM-Breakout-p-2559.html"},(0,i.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Wio_Link/image/300px-Get_One_Now_Banner.png",alt:null}))),(0,i.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.yg)("hr",null),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/img/Xadow_GSM_Breakout_Overview.png",alt:null})),(0,i.yg)("h2",{id:"how-to-use-it"},"How to use it"),(0,i.yg)("hr",null),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/img/Xadow_GSM_Breakout_Usage.png",alt:null})),(0,i.yg)("h2",{id:"pin-definitions"},"Pin Definitions"),(0,i.yg)("hr",null),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/img/GSM_Breakout_for_Arduino_IDE.png",alt:null}),"\n",(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/img/GSM_Breakout_for_Eclipse_IDE.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'If your project is built with Arduino IDE, please refer to the "Pin Definitions for Arduino IDE".'),(0,i.yg)("li",{parentName:"ul"},'If your project is built with Eclipse IDE, please refer to the "Pin Definitions for Eclipse IDE".')),(0,i.yg)("h2",{id:"notice"},"Notice"),(0,i.yg)("hr",null),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Some pinout might be occupied if the corresponding module is operative in the system. Please check the availability of the pinout of the Xadow GSM Breakout before using it."),(0,i.yg)("li",{parentName:"ul"},"And also, do make sure you know exactly about the voltage level at each pinout (2.8V or 1.8V), irreversible damages might occur if you mismatch it with a system working at a higher voltage level.")),(0,i.yg)("h2",{id:"rephone-community"},"RePhone Community"),(0,i.yg)("hr",null),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/img/300px-RePhone_Community-2.png",alt:null})),(0,i.yg)("p",null,"We\u2019ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the ",(0,i.yg)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"."),(0,i.yg)("p",null,"Now join us in the ",(0,i.yg)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"! Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,i.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/res/Xadow_GSM_Breakout.rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("hr",null),(0,i.yg)("p",null,"The schematic diagram of Xadow GSM Breakout is provided in the following link:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_GSM_Breakout/res/Xadow_GSM_Breakout.rar"},"Xadow_GSM+BLE eagle files"))),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);