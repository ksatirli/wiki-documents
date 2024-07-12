"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52183],{15680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>m});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(o),g=n,m=c["".concat(d,".").concat(g)]||c[g]||p[g]||a;return o?r.createElement(m,i(i({ref:t},u),{},{components:o})):r.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},53635:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(58168),n=(o(96540),o(15680));const a={description:"Xadow - Motor Driver",title:"Xadow - Motor Driver",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Motor_Driver",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Motor_Driver",id:"Seeed_Elderly/Xadow/Xadow_Motor_Driver",title:"Xadow - Motor Driver",description:"Xadow - Motor Driver",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Motor_Driver.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Motor_Driver",permalink:"/Xadow_Motor_Driver",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Motor_Driver.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - Motor Driver",title:"Xadow - Motor Driver",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Motor_Driver",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow Wearable Kit For Edison",permalink:"/Xadow_Wearable_Kit_For_Edison"},next:{title:"Rainbowduino v3.0",permalink:"/Rainbowduino_v3.0"}},d={},s=[{value:"Specification",id:"specification",level:2},{value:"Product View",id:"product-view",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Reference",id:"reference",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:s},c="wrapper";function p(e){let{components:t,...o}=e;return(0,n.yg)(c,(0,r.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/img/x%20motor.jpg",alt:null})),(0,n.yg)("p",null,"Xadow Motor can be used to control DC Motors. Its heart is a low-saturation two-channel bidirectional motor drive chip LB1836M, controlled by ATmega168 which handles the I2C communication with Xadow Main Board. Xadow Motor features a changeable I2C address. And it needs a separate low power to drive motors."),(0,n.yg)("h2",{id:"specification"},"Specification"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Motor Driver: LB1836M"),(0,n.yg)("li",{parentName:"ul"},"Battery Voltage: 2.5V ~ 9V"),(0,n.yg)("li",{parentName:"ul"},"Output Current per channel(Max): 300mA"),(0,n.yg)("li",{parentName:"ul"},"Communication Mode: I2C"),(0,n.yg)("li",{parentName:"ul"},"I2C Address is changeable"),(0,n.yg)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,n.yg)("h2",{id:"product-view"},"Product View"),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/img/Xadow_Motor_Black_View.png",alt:null})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"\u2460: LB1836 IC, a low-saturation two-channel bidirectional motor driver."),(0,n.yg)("li",{parentName:"ul"},"\u2461\uff1a Motors Power Supply Connection."),(0,n.yg)("li",{parentName:"ul"},"\u2462,\u2463: DC Motors Connection."),(0,n.yg)("li",{parentName:"ul"},'\u2464,\u2465: used to set the IIC address. A0 and A1 are shipped connected to H. You can change them to "L" by a little modification on the board. Find details in the Reference.'),(0,n.yg)("li",{parentName:"ul"},"\u2466: SPI Interface, used to upload firmware for Atmega168."),(0,n.yg)("li",{parentName:"ul"},"\u2467: Microcontroller Atmega168."),(0,n.yg)("li",{parentName:"ul"},"\u2468: used to select power supply for Atmega168 IC. In default mode, DVCC is connected to VOUT which means the power comes from Motor power supply. When DVCC is connected to 3.3V, Xadow Main Board supplies power for Atmega168.")),(0,n.yg)("h2",{id:"demonstration"},"Demonstration"),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Xadow Motor can drive two DC motors simultaneously. Based on our available library, it is more easily to make motors run. Now let's get started."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"The library is not available for controlling stepper motor.\n"))),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Hardware Installation: ")),(0,n.yg)("p",null,"1.Connect DC Motors to J5,J6 interface. You can use the solder iron for soldering to make sure the connection are fixed. We configure a 3.7V lithium battery for you. So you cannot drive high - power motors using the battery."),(0,n.yg)("p",null,"2.Connect battery to Battery Interface of Xadow Motor. Without battery, Motors would not rotate."),(0,n.yg)("p",null,"3.Connect Xadow Motor to Xadow Main Board. Do not forget to install Xadow Driver."),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"When connect Xadow 3-Axis Accelerometer to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one xadow module need to connect to the right angle of another module(see four corners of each xadow module).\n"))),(0,n.yg)("p",null,"Upload Code:"),(0,n.yg)("p",null,"4.Download ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Xadow_Motor_Driver"},"Xadow Motor Library")," and install it to Arduino Library."),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"Open the code directly by the path:File -> Example ->xadow_motor->motorCtrl.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'/*\nthere are four motor state you can use:\n\n-MSTOP                -> stop\n-MFOR                        -> go forward\n-MREV                        -> go reverse\n-MHOLD                -> hold the recent state\n**NOTE:\nthere are four addresses you can choose, it\'s up to the hardware,\nfor more information, refer to www.seeedstudio.com\n-MOTORADDRESS0 0x40 // A0 LOW, A1 LOW\n-MOTORADDRESS1 0x41 // A0 HIGH, A1 LOW\n-MOTORADDRESS2 0x42 // A0 LOW, A1 HIGH\n-MOTORADDRESS3 0x43 // A0 HIGH, A1 HIGH\nuse this function: setMotorRun(unsigned char sMotorA, unsigned char sMotorB);\nyou can contrl the both motor.\n*/\n\n#include <Wire.h>\n\n#include "XadowMotor.h"\n\nvoid setup()\n{\n    Serial.begin(38400);\n    xadowMotor.begin(MOTORADDRESS3);\n}\n\nvoid loop()\n{\n\n    Serial.print("bat vol :");\n    Serial.println(xadowMotor.getBatVol());\n\n    xadowMotor.setMotorRun(MFOR, MFOR);\n\n    delay(2000);\n\n    xadowMotor.setMotorRun(MSTOP, MSTOP);\n\n    delay(500);\n\n    xadowMotor.setMotorRun(MREV, MREV);\n\n    delay(2000);\n\n    xadowMotor.setPwrDown();\n    delay(1000);\n    xadowMotor.setWakeUp();\n\n}\n')),(0,n.yg)("p",null,'In this code, the function xadowMotor.begin(MOTORADDRESS3) is used to set Xadow Motor I2C Address. You need to change the parameter"MOTORADDRESS3" when you change the connection of A0 pin and A1 pin. Find details in the Reference.'),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},"Upload the Code. Remeber to select Seeeduino Xadow from the Tools | Board menu of the Arduino environment, and select the correct serial port Xadow Main Board is using.")),(0,n.yg)("p",null,"Now you can see your motors will run forward or backward at regular intervals. By opening the serial monitor, you can observe your battery voltage."),(0,n.yg)("h2",{id:"reference"},"Reference"),(0,n.yg)("hr",null),(0,n.yg)("p",null,"The Xadow Motor has four I2C address which is decided by A0 pin and A1 pin. A0 and A1 are connected to H inside the board as default. But you can change it. For example, use a solder iron to break the connection between H and A0, then solder up ADR0 and L, so you make the value of A0 as L. You can find the relationship of hardware I2C address and the values of A0 and A1 in the following table."),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"I2C Address"),(0,n.yg)("th",{parentName:"tr",align:"center"},"A0  inputs state"),(0,n.yg)("th",{parentName:"tr",align:"center"},"A1 inputs state"),(0,n.yg)("th",{parentName:"tr",align:null},"the corresponding parameter in code"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"0x40"),(0,n.yg)("td",{parentName:"tr",align:"center"},"L"),(0,n.yg)("td",{parentName:"tr",align:"center"},"L"),(0,n.yg)("td",{parentName:"tr",align:null},"MOTORADDRESS0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"0x41"),(0,n.yg)("td",{parentName:"tr",align:"center"},"L"),(0,n.yg)("td",{parentName:"tr",align:"center"},"H"),(0,n.yg)("td",{parentName:"tr",align:null},"MOTORADDRESS1")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"0x42"),(0,n.yg)("td",{parentName:"tr",align:"center"},"H"),(0,n.yg)("td",{parentName:"tr",align:"center"},"L"),(0,n.yg)("td",{parentName:"tr",align:null},"MOTORADDRESS2")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"0x43"),(0,n.yg)("td",{parentName:"tr",align:"center"},"H"),(0,n.yg)("td",{parentName:"tr",align:"center"},"H"),(0,n.yg)("td",{parentName:"tr",align:null},"MOTORADDRESS3")))),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Eagle_File.zip"},"Xadow Motor Eagle File")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/Xadow_Motor_Schematic_in_PDF.pdf"},"Xadow Motor Schematic in PDF")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Xadow_Motor_Driver"},"Xadow Motor library")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Motor_Driver/res/LB1836M.PDF"},"LB1836 datasheet"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);