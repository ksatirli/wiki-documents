"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80111],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>c});var o=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,c=d["".concat(s,".").concat(m)]||d[m]||h[m]||a;return n?o.createElement(c,i(i({ref:t},u),{},{components:n})):o.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79299:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(58168),r=(n(96540),n(15680));const a={description:"Retro Phone Kit",title:"Retro Phone Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Retro Phone Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/rePhone/Retro Phone Kit",id:"Seeed_Elderly/rePhone/Retro Phone Kit",title:"Retro Phone Kit",description:"Retro Phone Kit",source:"@site/docs/Seeed_Elderly/rePhone/Retro Phone Kit.md",sourceDirName:"Seeed_Elderly/rePhone",slug:"/Retro Phone Kit",permalink:"/Retro Phone Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/rePhone/Retro Phone Kit.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Retro Phone Kit",title:"Retro Phone Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Retro Phone Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Rephone Core 2G-AtmelSAMD21",permalink:"/Rephone_core_2G-AtmelSAMD21"},next:{title:"Arduino IDE for RePhone Kit",permalink:"/Arduino_IDE_for_RePhone_Kit"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Module Connection",id:"module-connection",level:2},{value:"Run a test code",id:"run-a-test-code",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"RePhone core 2G Atmel32u4 Schematic Online Viewer",id:"rephone-core-2g-atmel32u4-schematic-online-viewer",level:2},{value:"Xadow - Key Board Schematic Online Viewer",id:"xadow---key-board-schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,o.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Retro%20Phone%20Kit.jpg",alt:null})),(0,r.yg)("p",null,"The Retro Phone Kit is an open-source hardware phone that is compatible with Arduino. Remember RePhone\uff1fThe world first open-source and modular phone, with which you can hack things around you with cellular connection. The Retro Phone can be considered as RePhone with push button that can bring you back to those old days when mobile phone is simply a tool to make phone call. The kit is very easy to use, so you can make a mobile phone in minutes."),(0,r.yg)("p",null,"The main board of this kit is Xadow-Key Board, which contains a screen and a push button panel. The most important part is the RePhone Core 2G-Atmel32u4, which is a new RePhone Core board that was just brought to the market. It uses Atmel32u4 MCU and supports quad-band 850/900/1800/1900MHz that covers GSM network all over the world. We also let it keeps a 3.5mm headphone jack so that you can use a headphone to make phone call. We did not include any shell for the phone, so you are free to DIY any shell you like."),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Retro-Phone-Kit-p-2797.html"},(0,r.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("hr",null),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Arduino-Compatible")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Support Analog Audio")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"2G Nano SIM only")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"PTCRB Certied")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"LCD 128*64")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"3.5mm headphone jack(with Mic) which support OMTP")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Power Supply:3.4-4.2V(BAT) 5V(USB)"))),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Rephone Core 2G-Atmel32u4")),(0,r.yg)("p",null,"For more info about this module please check on ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/RePhone_core_2G-Atmel32u4/"},"Rephone Core 2G-Atmel32u4")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Item"),(0,r.yg)("th",{parentName:"tr",align:null},"Value"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Microcontroller"),(0,r.yg)("td",{parentName:"tr",align:null},"Atmega32U4")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,r.yg)("td",{parentName:"tr",align:null},"3.3V")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"DC Current per I/O Pin"),(0,r.yg)("td",{parentName:"tr",align:null},"50")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Flash Memory"),(0,r.yg)("td",{parentName:"tr",align:null},"32 KB of which 4KB used by bootloader")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"SRAM"),(0,r.yg)("td",{parentName:"tr",align:null},"2.5 KB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"EEPROM"),(0,r.yg)("td",{parentName:"tr",align:null},"1KB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Clock Speed"),(0,r.yg)("td",{parentName:"tr",align:null},"16 MHz")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Lenght"),(0,r.yg)("td",{parentName:"tr",align:null},"68 mm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Width"),(0,r.yg)("td",{parentName:"tr",align:null},"30 mm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Weight"),(0,r.yg)("td",{parentName:"tr",align:null},"12 gr")))),(0,r.yg)("h2",{id:"module-connection"},"Module Connection"),(0,r.yg)("p",null,"The Rephone Core 2G-Atmel32u4  integrates a Xadow 36 Pin connector and a Xadow 11 Pin connector, similar as Xadow - GSM\uff0bBLE. In this case, the module connection is very easy,"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Connect the Xadow Key Board  to the RePhon core board via 36 pin connector, Do bear in mind that the cable has to be inserted firmly and flat, and most importantly, keep the \u2018TOP\u2019 side upwards.")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Insert the antenna")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Insert a nano 2G SIM card")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Connect the Lipo battery to the Rephone core board via the battery interface."))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/IMG_2275.JPG",alt:null})),(0,r.yg)("h2",{id:"run-a-test-code"},"Run a test code"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"RePhone_Menu_GSM")),(0,r.yg)("p",null,"Step1. Install the Rephone Core 2G-Atmel32u4, please click ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/RePhone_core_2G-Atmel32u4/#arduino-ide"},"here")," to see the full instruction ."),(0,r.yg)("p",null,"Step2. Find the example and upload to your board"),(0,r.yg)("p",null,"Once you have installed the Rephone Core 2G-Atmel32u4 in Arduino IDE, the basic examples would also be included and you can find them in the example section."),(0,r.yg)("p",null,"The examples include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Atmel32u4_gprs.h"),(0,r.yg)("li",{parentName:"ul"},"TimerOne.h"),(0,r.yg)("li",{parentName:"ul"},"Rephone_lcm.h"),(0,r.yg)("li",{parentName:"ul"},"Rephone_button.h"),(0,r.yg)("li",{parentName:"ul"},"Rephone_menu_gsm")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Example%20code.png",alt:null})),(0,r.yg)("p",null,"Step3.  Make a phone call to yourself"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"If the example is uploaded successfully, the screen will be on and you can see the main menu as below.")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Main%20Manu.JPG",alt:null})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Click the right button to select the phone call interface")),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Call.JPG",alt:null})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'Del your number and then click the right button to choose "Go"')),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/img/Del.JPG",alt:null})),(0,r.yg)("p",null,"Then you wil receive a phone call from the Retro Phone."),(0,r.yg)("h2",{id:"rephone-community"},"RePhone Community"),(0,r.yg)("hr",null),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4"},(0,r.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/RePhone_Lumi_Kit/img/RePhone_Community-2.png",alt:null}))),(0,r.yg)("p",null,"We\u2019ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the RePhone Community."),(0,r.yg)("p",null,"Now join us in the ",(0,r.yg)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4"},"RePhone Community"),"! Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,r.yg)("h2",{id:"rephone-core-2g-atmel32u4-schematic-online-viewer"},"RePhone core 2G Atmel32u4 Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"xadow---key-board-schematic-online-viewer"},"Xadow - Key Board Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0.pdf"},"RePhone core 2G Atmel32u4 Schematic in PDF")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20v1.0_Eagle.zip"},"RePhone core 2G Atmel32u4 Schematic in Eagle")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/Xadow%20-%20Key%20Board%20v1.0.pdf"},"Xaodw - Key Board Schematic in PDF")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/202001232_PCBA%3BXadow%20-%20Key%20Board_Eagle.zip"},"Xadow - Key Board Schematic in Eagle")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/RePhone%20core%202G-Atmel32u4%20driver.zip"},"Driver for RePhone core 2G Atmel32u4")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/ETA6003.pdf"},"Datasheet of ETA6003")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Retro_Phone_Kit/res/SIM800_AT.pdf"},"AT Command of SIM800"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}h.isMDXComponent=!0}}]);