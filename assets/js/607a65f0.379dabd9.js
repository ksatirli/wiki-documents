"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32052],{15680:(e,i,t)=>{t.d(i,{xA:()=>p,yg:()=>m});var n=t(96540);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function a(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function l(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),d=function(e){var i=n.useContext(s),t=i;return e&&(t="function"==typeof e?e(i):o(o({},i),e)),t},p=function(e){var i=d(e.components);return n.createElement(s.Provider,{value:i},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},g=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),g=r,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||a;return t?n.createElement(m,o(o({ref:i},p),{},{components:t})):n.createElement(m,o({ref:i},p))}));function m(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var s in i)hasOwnProperty.call(i,s)&&(l[s]=i[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},82317:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(58168),r=(t(96540),t(15680));const a={description:"Wifi Shield V1.1",title:"Wifi Shield V1.1",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wifi_Shield_V1.1",last_update:{date:"2/16/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Top_Brand/Arduino/shield/Wifi_Shield_V1.1",id:"Top_Brand/Arduino/shield/Wifi_Shield_V1.1",title:"Wifi Shield V1.1",description:"Wifi Shield V1.1",source:"@site/docs/Top_Brand/Arduino/shield/Wifi_Shield_V1.1.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Wifi_Shield_V1.1",permalink:"/Wifi_Shield_V1.1",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Wifi_Shield_V1.1.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{description:"Wifi Shield V1.1",title:"Wifi Shield V1.1",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wifi_Shield_V1.1",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Wifi Shield V1.0",permalink:"/Wifi_Shield_V1.0"},next:{title:"Wifi Shield V1.2",permalink:"/Wifi_Shield_V1.2"}},s={},d=[{value:"Specification",id:"specification",level:2},{value:"Get started",id:"get-started",level:2},{value:"Demo: Wifly_Test",id:"demo-wifly_test",level:3},{value:"Demo for Others",id:"demo-for-others",level:3},{value:"Touble Shooting",id:"touble-shooting",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},u="wrapper";function c(e){let{components:i,...t}=e;return(0,r.yg)(u,(0,n.A)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This Wifi Shield utilizes a RN171 wifi module to provide your Arduino/Seeeduino with serial Ethernet's function. It only takes two pins to hook your device up to 802.11b/g wireless networks with this shield. It features an independent antenna which can cover a wider range and transmit stronger signals. With supports for common TCP, UDP and FTP communication protocols, this Wifi Shield can meet needs of most wireless network projects, like smart home networks, robot controls or personal weather stations,etc. We prepared an easy and convenient command set for this shield so that you can use neat and concise code to run the function."),(0,r.yg)("h2",{id:"specification"},"Specification"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Voltage\uff1a3.3~5.5 V")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Current\uff1a25~400mA")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Transmit power\uff1a0-10 dBm")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Frequency\uff1a2402~2480 MHz")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Channal\uff1a0~13")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Network rate\uff1a1-11 Mbps for 802.11b/6-54Mbps for 802.11g")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Dimension\uff1a60X56X19 mm")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Net Weight\uff1a24\xb11 g")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Secure WiFi authentication\uff1aWEP-128, WPA-PSK (TKIP), WPA2-PSK (AES)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Built-in networking applications\uff1aDHCP client, DNS client, ARP, ICMP ping, FTP, TELNET, HTTP, UDP, TCP"))),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/WIFI_Shield_Interface_Function.jpg",alt:null})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"RN-171\uff1a"),"WIFLY GSX 802.11 b/g Wireless LAN Module.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Software Serial Port Configuration Area:"),"\xa0Choose the digital pins you would like to use as RX and TX of RN171.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Reset button:")," Reset the Wifi Shield.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Status indicators illustration:"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Two LEDs(D1,D5) will blink alternately when no connection exists.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"After connected to router, the Association to AP status Indicator(D1) will blink.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"After connected to router and TCP Sever, the AP status Indicator(D1) will always be on."))),(0,r.yg)("h2",{id:"get-started"},"Get started"),(0,r.yg)("h3",{id:"demo-wifly_test"},"Demo: Wifly_Test"),(0,r.yg)("p",null,"Download the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/WiFi_Shield"},"Wifi Shield Library")," on github, unzip it into the libraries folder of Arduino."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c++"},'\n#include <Arduino.h>\n#include <SoftwareSerial.h>\n#include "WiFly.h"\n\n#define SSID      "YourAP"\n#define KEY       "password"\n#define AUTH      WIFLY_AUTH_WPA2_PSK     // or WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN\n\n// Pins\' connection\n// Arduino       WiFly\n//  2    <----\x3e    TX\n//  3    <----\x3e    RX\nSoftwareSerial uart(2, 3);\nWiFly wifly(&uart);\n//WiFly wifly(&Serial1);     // for leonardo, use hardware serial - Serial1\n\nvoid setup() {\n  uart.begin(9600);\n\n  Serial.begin(9600);\n  Serial.println("--------- WIFLY TEST --------");\n\n  // wait for initilization of wifly\n  delay(3000);\n\n  uart.begin(9600);     // WiFly UART Baud Rate: 9600\n\n  wifly.reset();\n\n  Serial.println("Join " SSID );\n  if (wifly.join(SSID, KEY, AUTH)) {\n    Serial.println("OK");\n  } else {\n    Serial.println("Failed");\n  }\n\n  // get WiFly params\n  wifly.sendCommand("get everthing\\r");\n  char c;\n  while (wifly.receive((uint8_t *)&c, 1, 300) > 0) {\n    Serial.print((char)c);\n  }\n\n  if (wifly.commandMode()) {\n    Serial.println("Enter command mode. Send \\"exit\\"(with \\\\r) to exit command mode");\n  }\n}\n\nvoid loop() {\n  while (wifly.available()) {\n    Serial.write(wifly.read());\n  }\n\n  while (Serial.available()) {\n    wifly.write(Serial.read());\n  }\n}\n\n')),(0,r.yg)("p",null,"1.Connect D2(RX) and D3(TX) of software serial port with TX and RX of WiFi shield."),(0,r.yg)("p",null,(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/WIFI_Shield_UART.jpg",alt:null})),(0,r.yg)("p",null,"2.Change the code to update your access point info"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'\n#define SSID      "YourAP"\n#define KEY       "password"\n#define AUTH      WIFLY_AUTH_WPA2_PSK     // or WIFLY_AUTH_WPA1, WIFLY_AUTH_WEP, WIFLY_AUTH_OPEN\n\n')),(0,r.yg)("p",null,"3.Download the sketch to Arduino, open Serial Monitor, set baud rate to 9600, set enter key to Carriage return. WiFi Shield will output some messages and enter command mode. In command mode, you can enter some commands to interact:"),(0,r.yg)("p",null,"  ",(0,r.yg)("strong",{parentName:"p"},"get wlan")," - get wlan info"),(0,r.yg)("p",null,"  ",(0,r.yg)("strong",{parentName:"p"},"join")," - join a network"),(0,r.yg)("p",null," ",(0,r.yg)("strong",{parentName:"p"},"ping")," seeedstudio.com - ping seeed!"),(0,r.yg)("p",null,"  For more command, please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-UM.pdf"},"WiFi Module User Manual")),(0,r.yg)("p",null,"  ",(0,r.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/img/Wi-Fi_Info.png",alt:null})),(0,r.yg)("p",null,"4.For further usage, please try other examples of the WiFi shield library."),(0,r.yg)("h3",{id:"demo-for-others"},"Demo for Others"),(0,r.yg)("h2",{id:"touble-shooting"},"Touble Shooting"),(0,r.yg)("p",null,"If the Wifi Shield doesn't response any commands, try to do factory reset following ",(0,r.yg)("a",{parentName:"p",href:"https://seeeddoc.github.io/Wifly_171_troubleshooting/"},"the guide")),(0,r.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WIFI_Shield_Eagle_Files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.yg)("h2",{id:"resource"},"Resource"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Eagle]")," ",(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WIFI_Shield_Eagle_Files.zip"},"WiFi Shield Eagle Files")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[PDF]"),(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/wifi%20Shield%20V1.1.pdf"},"wifi Shield V1.1 PCB")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[PDF]"),(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/wifi%20Shield%20V1.1%20SCH.pdf"},"wifi Shield V1.1 SCH")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Datasheet]"),(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-171.pdf"},"RN-171 Datasheet")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Library]"),(0,r.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/WiFi_Shield"},"Wifi Shield Library")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"[Manual]"),(0,r.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wifi_Shield_V1.1/res/WiFly-RN-UM.pdf"},"WiFi Module User Manual"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);