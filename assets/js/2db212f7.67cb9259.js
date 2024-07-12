"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12657],{15680:(e,t,r)=>{r.d(t,{xA:()=>d,yg:()=>m});var i=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=o,m=u["".concat(l,".").concat(g)]||u[g]||c[g]||n;return r?i.createElement(m,a(a({ref:t},d),{},{components:r})):i.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<n;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},47299:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=r(58168),o=(r(96540),r(15680));const n={description:"Renbotics_ServoShield_Rev",title:"Renbotics Servo Shield Rev",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Renbotics_ServoShield_Rev",last_update:{date:"02/02/2023",author:"Eico"},no_comments:!1},a=void 0,s={unversionedId:"Top_Brand/Arduino/shield/Renbotics_ServoShield_Rev",id:"Top_Brand/Arduino/shield/Renbotics_ServoShield_Rev",title:"Renbotics Servo Shield Rev",description:"Renbotics_ServoShield_Rev",source:"@site/docs/Top_Brand/Arduino/shield/Renbotics_ServoShield_Rev.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Renbotics_ServoShield_Rev",permalink:"/Renbotics_ServoShield_Rev",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Renbotics_ServoShield_Rev.md",tags:[],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1675296e3,formattedLastUpdatedAt:"Feb 2, 2023",frontMatter:{description:"Renbotics_ServoShield_Rev",title:"Renbotics Servo Shield Rev",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Renbotics_ServoShield_Rev",last_update:{date:"02/02/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"RGBW Stripe WireLess Shield V1.0",permalink:"/RGBW_Stripe_WireLess_Shield_V1.0"},next:{title:"WireLess Gate Shield V1.0",permalink:"/WireLess_Gate_Shield_V1.0"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Programming",id:"programming",level:3},{value:"Bill of Materials (BOM) /parts list",id:"bill-of-materials-bom-parts-list",level:2},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,i.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/h/t/httpsstatics3.seeedstudio.comimagesproductservoshieldkitlarge.jpg",alt:"pir",width:600,height:"auto"})),(0,o.yg)("p",null,"The Renbotics ServoShield is an Arduino-compatible shield that uses two 4017 decade counters to drive up to 16 servos using only 4 pins (digital pins 6 to 9) and as little as one 8bit timer (Timer 2) in standard mode or two 16/8bit timers (Timer 1 and Timer 2 for Duemilanove or Timer 3 for Mega) in high accuracy mode. It also includes a 196 point breadboard style prototyping area."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("a",{href:"https://www.seeedstudio.com/Renbotics-ServoShield-V2.0-p-1299.html",target:"_blank"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,o.yg)("h2",{id:"features"},"Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"16 Servo Channels")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Convenient screw terminal for servo power supply")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"196 Point breadboard style prototyping area")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Compatible with Arduino Duemilanove and Arduino Mega")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Easy to use API"))),(0,o.yg)("h2",{id:"application-ideas"},"Application Ideas"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Robotics")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Animatronics")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Mechatronic Art"))),(0,o.yg)("h2",{id:"usage"},"Usage"),(0,o.yg)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,o.yg)("p",null,"Accembled View:"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"http://bz.seeedstudio.com/depot/images/product/StackedLarge.jpg",alt:"pir",width:600,height:"auto"})),(0,o.yg)("h3",{id:"programming"},"Programming"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Sample 1: Simple servo sweeper")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"#include <ServoShield.h>\nServoShield servos; //Create a ServoShield object\nvoid setup()\n{\n    for (int servo = 0; servo < 16; servo++)//Initialize all 16 servos\n    {\n        servos.setbounds(servo, 1000, 2000); //Set the minimum and maximum pulse duration\n        servos.setposition(servo, 1500); //Set the initial position of the servo\n    }\n    servos.start(); //Start the servo shield\n}\nvoid loop()\n{\n    for(int pos = 1000; pos < 2000; pos++) //Move the servos from 0 degrees to 180 degrees\n    { //in steps of 1 degree\n        for (int i = 0; i < 16; i++) //for all 16 servos\n        servos.setposition(i, pos); //Tell servo to go to position in variable 'pos'\n        delay(1);\n    }\n    for(int pos = 2000; pos >= 1000; pos--)//Move the servos from 180 degrees to 0 degrees\n    {\n        for (int i = 0; i < 16; i++) //all 16 servos\n        servos.setposition(i, pos); //Tell servo to go to position in variable 'pos'\n        delay(1);\n    }\n}\n")),(0,o.yg)("h2",{id:"bill-of-materials-bom-parts-list"},"Bill of Materials (BOM) /parts list"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"2 x 4017 Decade Counter DIP16")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"2 x 10nf Capacitors")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"2 x 6 pin Female Shield Stacking Headers")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"2 x 8 pin Female Shield Stacking Headers")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"1 x 2 pin Screw Terminal")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"3 x 16 pin Male Breakaway Headers"))),(0,o.yg)("h2",{id:"version-tracker"},"Version Tracker"),(0,o.yg)("table",null,(0,o.yg)("tr",null,(0,o.yg)("th",null," Revision"),(0,o.yg)("th",null," Descriptions"),(0,o.yg)("th",null," Release")),(0,o.yg)("tr",null,(0,o.yg)("td",{width:"300px"}," v1.1"),(0,o.yg)("td",{width:"500px"}," Initial public release"),(0,o.yg)("td",{width:"200px"}," Aug 23, 2009"))),(0,o.yg)("h2",{id:"resources"},"Resources"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/datasheet/RenboticsServoShield1.5.pdf"},"Manual Rev 1.5"))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/images/product/ServoShield.zip"},"Arduino Library Rev 1.3 (Updated 07-09-2009)")))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);