"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8423],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var a=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),u=o,h=c["".concat(s,".").concat(u)]||c[u]||g[u]||i;return r?a.createElement(h,n(n({ref:t},p),{},{components:r})):a.createElement(h,n({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var d=2;d<i;d++)n[d]=r[d];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},82183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(58168),o=(r(96540),r(15680));const i={description:"SD Card Shield V3.0",title:"SD Card Shield V3.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SD_Card_Shield_V3.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},n=void 0,l={unversionedId:"Top_Brand/Arduino/shield/SD_Card_Shield_V3.0",id:"Top_Brand/Arduino/shield/SD_Card_Shield_V3.0",title:"SD Card Shield V3.0",description:"SD Card Shield V3.0",source:"@site/docs/Top_Brand/Arduino/shield/SD_Card_Shield_V3.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/SD_Card_Shield_V3.0",permalink:"/SD_Card_Shield_V3.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/SD_Card_Shield_V3.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{description:"SD Card Shield V3.0",title:"SD Card Shield V3.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SD_Card_Shield_V3.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"SD Card Shield",permalink:"/SD_Card_Shield"},next:{title:"Small e-Paper Shield",permalink:"/Small_e-Paper_Shield"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Software",id:"software",level:3},{value:"FAQ",id:"faq",level:2},{value:"Version Tracker",id:"version-tracker",level:2},{value:"SD Card Shield v3.1 Schematic Online Viewer",id:"sd-card-shield-v31-schematic-online-viewer",level:2},{value:"SD Card Shield v3.0 Schematic Online Viewer",id:"sd-card-shield-v30-schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},c="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(c,(0,a.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null," ",(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_card_shield.jpg",alt:null})),(0,o.yg)("p",null,'The SD card v3.0 shield adds storage to your Arduino project. It supports SD, SDHC, or MicroSD TF cards. Use the on-board toggle switch to select the SD card type. The card supports use of one and only one format of SD card, either SD/SDHC, or MicroSD. Before using an SD or MicroSD card, please set the shields "SELECT" switch to the proper setting: toward the SD/SDHC slot, or the MicroSD slot.'),(0,o.yg)("p",null,"The SD Card shield v3.0 uses only the the SPI ports of Arduino. The shield is also stackable, so additional shields can go on top. There are Grove compatible sockets for the I2C and UART ports on board."),(0,o.yg)("p",null,"The SD Card shield v3.0 makes use of pin 10 as a chip select. Please be sure other stacked shields do not make use of that same pin. See v4.0 of this shield for a version that uses pin 4."),(0,o.yg)("p",null,"These next lines were user added: This shield works fine for the Arduino Mega 2560, you just have to make the appropriate connections. 4or10 -",">","53, 11-",">","51, 12 -",">","50, and 13 -",">","52. This arrangement works fine so long as you make sure not to assign anything else to those pins."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Model: ",(0,o.yg)("a",{parentName:"strong",href:"https://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109"},"INT106D1P"))),(0,o.yg)("h2",{id:"features"},"Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Arduino/Seeeduino compatible",(0,o.yg)("font",{color:"red"},"( Do not compatible with Mega)"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Grove compatible")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"SD card, Micro SD card and SDHC card supportable")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"3.3v and 5v logical voltage compatible")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"2.6~3.6v DC power supply"))),(0,o.yg)("h2",{id:"specification"},"Specification"),(0,o.yg)("table",{cellspacing:"0",width:"100%"},(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"col"}," Item"),(0,o.yg)("th",{scope:"col"}," Min"),(0,o.yg)("th",{scope:"col"}," Typical"),(0,o.yg)("th",{scope:"col"}," Max"),(0,o.yg)("th",{scope:"col"}," Unit")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Voltage"),(0,o.yg)("td",null," 2.7"),(0,o.yg)("td",null," 3.3"),(0,o.yg)("td",null," 3.6"),(0,o.yg)("td",null," V")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Current"),(0,o.yg)("td",null," 0.159"),(0,o.yg)("td",null," 40"),(0,o.yg)("td",null," 200"),(0,o.yg)("td",null," mA")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Supported Card Type"),(0,o.yg)("td",{colspan:"3"}," SD card(<=2G); Micro SD card(<=2G); SDHC card(<=16G)"),(0,o.yg)("td",null," /")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Dimension"),(0,o.yg)("td",{colspan:"3"}," 57.15x44.70x19.00"),(0,o.yg)("td",null," mm")),(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"row"}," Net Weight"),(0,o.yg)("td",{colspan:"3"}," 16.6"),(0,o.yg)("td",null," g"))),(0,o.yg)("h2",{id:"interface-function"},"Interface Function"),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_Card_interface.png",alt:null}),"\n",(0,o.yg)("strong",{parentName:"p"},"D10")," \u2013 Used for CS of SPI\n",(0,o.yg)("strong",{parentName:"p"},"D11")," \u2013 Used for MOSI of SPI\n",(0,o.yg)("strong",{parentName:"p"},"D12")," \u2013 Used for MISO of SPI\n",(0,o.yg)("strong",{parentName:"p"},"D13")," \u2013 Used for SCK of SPI\n",(0,o.yg)("strong",{parentName:"p"},"Grove connectors")," - One for Uart serial port, and the other one for I2C port."),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,o.yg)("p",null,"Plug the SD Card Shield onto the Arduino; Insert your SD card into the socket and make sure the card selector pointing to the right way (Standard card or micro).And then connect the Arduino to PC with USB cable.\n",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("font",{color:"red"},"Warning: Don't insert SD card and microSD card into the shield at the same time.")),"\n",(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_shield_hardware.jpg",alt:null})),(0,o.yg)("h3",{id:"software"},"Software"),(0,o.yg)("p",null,"First you have to get an ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/sandisk-microsd%C3%82%E2%84%A2-card-2gb-p-546.html?cPath=178_182"},"SD card or micro SD card"),", and then format the SD card as FAT16 or FAT32 if it is necessary.\nFormat the SD card as the screenshots below:\n",(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/Format.jpg",alt:null})," ",(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/Format2.jpg",alt:null})),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Download the latest version of ",(0,o.yg)("strong",{parentName:"p"},"SdFat for Arduino"),".")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Uncompress this package and put it in Arduino-1.0 program: ..\\arduino-1.0\\libraries.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Select the corresponding Arduino board, like Arduino UNO or Duemilanove or others, and the COM port you are using.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Upload the sketch ",(0,o.yg)("em",{parentName:"p"},(0,o.yg)("strong",{parentName:"em"},"Sdinfo")),".The following image is the result from the serial monitor. Of course you can upload other sketches.\n",(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/img/SD_card_software.jpg",alt:null}))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"If an error occurs, please recheck all the steps, and make sure the SD card is working. If none of that fixes the problem, try replacing the SD card.\nWith that done, you can take a look at the other library examples for reading, writing, and sample logging with a GPS or real time clock. Enjoy!"))),(0,o.yg)("h2",{id:"faq"},"FAQ"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"SD card can't be\xa0initialized .")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Please reformat SD card to FAT/FTA32 .If it still can't work ,suggest to download the ",(0,o.yg)("a",{parentName:"p",href:"https://www.sdcard.org/downloads/formatter_3/"},"SD Formatter")," and reformat SD card by this software."))),(0,o.yg)("h2",{id:"version-tracker"},"Version Tracker"),(0,o.yg)("table",{cellspacing:"0",width:"85%"},(0,o.yg)("tr",null,(0,o.yg)("th",{scope:"col"}," Revision"),(0,o.yg)("th",{scope:"col"}," Descriptions"),(0,o.yg)("th",{scope:"col"}," Release")),(0,o.yg)("tr",null,(0,o.yg)("td",null," v3.0"),(0,o.yg)("td",null," V3.0 Release"),(0,o.yg)("td",null," 2012/3/29")),(0,o.yg)("tr",null,(0,o.yg)("td",null," v3.1"),(0,o.yg)("td",null," Voltage regulator upgraded to MIC5205"),(0,o.yg)("td",null," 2012/5/10"))),(0,o.yg)("h2",{id:"sd-card-shield-v31-schematic-online-viewer"},"SD Card Shield v3.1 Schematic Online Viewer"),(0,o.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/Eagle_file_for_SD_card_shiled.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.yg)("h2",{id:"sd-card-shield-v30-schematic-online-viewer"},"SD Card Shield v3.0 Schematic Online Viewer"),(0,o.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://wiki.seeedstudio.com/images/0/09/Eagle_file_of_SD_Card_Shield_v3.0.ZIP",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.yg)("h2",{id:"resources"},"Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"[Eagle]"),"  ",(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/Eagle_file_for_SD_card_shiled.zip"},"Eagle file of SD Card Shield v3.1"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"[PDF]"),(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/SD%20Card%20Shield.pdf"},"SD Card Shield pdf"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"[PDF]"),"   ",(0,o.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SD_Card_Shield_V3.0/res/SD_Card_Shield.pdf"},"PDF file of SD Card Sheild v3.1"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"[Eagle]"),"   ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/images/0/09/Eagle_file_of_SD_Card_Shield_v3.0.ZIP"},"Eagle file of SD Card Shield v3.0"),"."))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);