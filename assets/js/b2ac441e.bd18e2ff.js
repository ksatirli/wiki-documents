"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40409],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,y=u["".concat(l,".").concat(c)]||u[c]||g[c]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(58168),a=(n(96540),n(15680));const o={description:"NFC Usage for XIAO nRF52840 (Sense)",title:"NFC Usage for both versions",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-NFC-Usage",last_update:{date:"05/31/2023",author:"Matthew"}},i="NFC Usage on Seeed Studio XIAO nRF52840 (Sense)",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-NFC-Usage",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-NFC-Usage",title:"NFC Usage for both versions",description:"NFC Usage for XIAO nRF52840 (Sense)",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-NFC-Usage.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense",slug:"/XIAO-BLE-Sense-NFC-Usage",permalink:"/XIAO-BLE-Sense-NFC-Usage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-NFC-Usage.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1685491200,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{description:"NFC Usage for XIAO nRF52840 (Sense)",title:"NFC Usage for both versions",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-NFC-Usage",last_update:{date:"05/31/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"Pin Multiplexing for both versions",permalink:"/XIAO-BLE-Sense-Pin-Multiplexing"},next:{title:"For Seeed nRF52 Boards Library",permalink:"/XIAO-BLE-Sense-Bluetooth_Usage"}},l={},d=[{value:"Preparatory work",id:"preparatory-work",level:2},{value:"Hardware required",id:"hardware-required",level:2},{value:"Software required",id:"software-required",level:2},{value:"Hardware connection",id:"hardware-connection",level:2},{value:"Send text string with NFC",id:"send-text-string-with-nfc",level:2}],p={toc:d},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"nfc-usage-on-seeed-studio-xiao-nrf52840-sense"},"NFC Usage on Seeed Studio XIAO nRF52840 (Sense)"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},"The Seeed nRF52 Boards version 1.1.3 and Seeed nRF52 mbed-enabled Boards version 2.9.2 have been tested and approved.")),(0,a.yg)("p",null,"Both the ",(0,a.yg)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840")," and ",(0,a.yg)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840 Sense")," are equipped with an ",(0,a.yg)("strong",{parentName:"p"},"NFC (Near Field Communication) module"),". This wiki will help you get started with using NFC on these boards. Here we will demonstrate a basic example where we send a text string from the board to the phone after placing the phone on the NFC antenna."),(0,a.yg)("h2",{id:"preparatory-work"},"Preparatory work"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},'The NFC function will perform well when we use the "Seeed nRF52 mbed-enabled Boards Library".')),(0,a.yg)("p",null,"For the board libraries installation, please refer to ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO_BLE/#software-setup"},"this tutorial")," to finish installation. If you have already installed, we can move on and process the project."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png"})),(0,a.yg)("h2",{id:"hardware-required"},"Hardware required"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"1 x ",(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"},"Seeed Studio XIAO nRF52840")," or ",(0,a.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},"Seeed Studio XIAO nRF52840 Sense")),(0,a.yg)("li",{parentName:"ul"},"1 x NFC antenna"),(0,a.yg)("li",{parentName:"ul"},"1 x USB Type-C cable"),(0,a.yg)("li",{parentName:"ul"},"1 x Smartphone")),(0,a.yg)("h2",{id:"software-required"},"Software required"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=com.nxp.taginfolite&hl=en&gl=US"},"NFC TagInfo App (Android)")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://apps.apple.com/us/app/nfc-taginfo-by-nxp/id1246143596"},"NFC TagInfo App (Apple)"))),(0,a.yg)("h2",{id:"hardware-connection"},"Hardware connection"),(0,a.yg)("p",null,"Solder the NFC antenna to the Seeed Studio XIAO nRF52840 (Sense) as follows:"),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/NFC-antenna-3.png",alt:"pir",width:550,height:"auto"})),(0,a.yg)("h2",{id:"send-text-string-with-nfc"},"Send text string with NFC"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 1.")," Open Arduino IDE and upload the following codes")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <NFCT.h>\n\nvoid setup() { \n  // set the NFC message as first parameter and the language code as second\n  NFC.setTXTmessage("Hello World!", "en");\n  // start the NFC module\n  NFC.start();\n}\n\nvoid loop() {\n}\n\n')),(0,a.yg)("p",null,'Here we simply send the text string "Hello World!" '),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 2."),' Open "NFC TagInfo" mobile app and click ',(0,a.yg)("strong",{parentName:"li"},"Scan & Launch"))),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect3.jpg",alt:"pir",width:300,height:"auto"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 3.")," Place the NFC antenna close to the phone and you will see the following output")),(0,a.yg)("p",{style:{textAlign:"center"}},(0,a.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/NFCconnect2.png",alt:"pir",width:850,height:"auto"})))}g.isMDXComponent=!0}}]);