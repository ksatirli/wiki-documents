"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29113],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>h});var i=t(96540);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(t),u=r,h=p["".concat(o,".").concat(u)]||p[u]||g[u]||a;return t?i.createElement(h,l(l({ref:n},c),{},{components:t})):i.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d[p]="string"==typeof e?e:r,l[1]=d;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},40042:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var i=t(58168),r=(t(96540),t(15680));const a={description:"For Seeed nRF52 mbed-enabled Boards Boards",title:"Seeed nRF52 mbed-enabled \u84dd\u7259\u5e93",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-BLE-Sense-Bluetooth-Usage",last_update:{date:"10/11/2023",author:"\u8d75\u6842\u83b9"}},l="\u57fa\u4e8e Seeed nRF52 mbed-enabled \u7684\u84dd\u7259\u4f7f\u7528",d={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries/CN_XIAO-BLE-Sense-Bluetooth-Usage",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries/CN_XIAO-BLE-Sense-Bluetooth-Usage",title:"Seeed nRF52 mbed-enabled \u84dd\u7259\u5e93",description:"For Seeed nRF52 mbed-enabled Boards Boards",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries/CN_XIAO-BLE-Sense-Bluetooth-Usage.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries",slug:"/cn/XIAO-BLE-Sense-Bluetooth-Usage",permalink:"/cn/XIAO-BLE-Sense-Bluetooth-Usage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries/CN_XIAO-BLE-Sense-Bluetooth-Usage.md",tags:[],version:"current",lastUpdatedBy:"\u8d75\u6842\u83b9",lastUpdatedAt:1696982400,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{description:"For Seeed nRF52 mbed-enabled Boards Boards",title:"Seeed nRF52 mbed-enabled \u84dd\u7259\u5e93",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/XIAO-BLE-Sense-Bluetooth-Usage",last_update:{date:"10/11/2023",author:"\u8d75\u6842\u83b9"}},sidebar:"CNSidebar",previous:{title:"Seeed nRF52 Boards \u84dd\u7259\u5e93",permalink:"/cn/XIAO-BLE-Sense-Bluetooth_Usage"},next:{title:"\u57fa\u4e8e Edge Impulse \u7684\u8fd0\u52a8\u8bc6\u522b",permalink:"/cn/XIAOEI"}},o={},s=[{value:"\u5f00\u59cb",id:"\u5f00\u59cb",level:2},{value:"\u786c\u4ef6\u88c5\u5907",id:"\u786c\u4ef6\u88c5\u5907",level:3},{value:"\u8f6f\u4ef6\u51c6\u5907",id:"\u8f6f\u4ef6\u51c6\u5907",level:3},{value:"Arduino\u5e93\u6982\u8ff0",id:"arduino\u5e93\u6982\u8ff0",level:2},{value:"\u529f\u80fd",id:"\u529f\u80fd",level:3},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u5e94\u7528\u5b9e\u4f8b",id:"\u5e94\u7528\u5b9e\u4f8b",level:2},{value:"1 \u4f7f\u7528\u667a\u80fd\u624b\u673a\u63a7\u5236\u5185\u7f6eLED",id:"1-\u4f7f\u7528\u667a\u80fd\u624b\u673a\u63a7\u5236\u5185\u7f6eled",level:3},{value:"2 \u4f7f\u7528\u5c0fBLE\u901a\u8fc7BLE\u83b7\u53d624GHz\u7761\u7720\u68c0\u6d4b\u6a21\u5757\u7684\u6570\u636e",id:"2-\u4f7f\u7528\u5c0fble\u901a\u8fc7ble\u83b7\u53d624ghz\u7761\u7720\u68c0\u6d4b\u6a21\u5757\u7684\u6570\u636e",level:3},{value:"3 \u4e24\u4e2aXIAO nRF52840\u63a7\u5236LED\u901a\u8fc7\u84dd\u7259\u901a\u4fe1",id:"3-\u4e24\u4e2axiao-nrf52840\u63a7\u5236led\u901a\u8fc7\u84dd\u7259\u901a\u4fe1",level:3},{value:"\u53e6\u5916",id:"\u53e6\u5916",level:2},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],c={toc:s},p="wrapper";function g(e){let{components:n,...t}=e;return(0,r.yg)(p,(0,i.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"\u57fa\u4e8e-seeed-nrf52-mbed-enabled-\u7684\u84dd\u7259\u4f7f\u7528"},"\u57fa\u4e8e Seeed nRF52 mbed-enabled \u7684\u84dd\u7259\u4f7f\u7528"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840"),"\u548c",(0,r.yg)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840 Sense"),"\u90fd\u652f\u6301\u84dd\u7259\u8fde\u63a5\u3002\u672cwiki\u5c06\u4ecb\u7ecd\u57fa\u672c\u7684\u84dd\u7259\u529f\u80fd\uff0c\u5e76\u63d0\u4f9b\u4e00\u4e2a24GHz\u547c\u5438\u7761\u7720\u68c0\u6d4b\u6a21\u5757\u7684\u6f14\u793a\uff0c\u7531\u201cSeeed nrf52 mbed-enabled Boards Library\u201d\u4f7f\u7528\u3002"),(0,r.yg)("h2",{id:"\u5f00\u59cb"},"\u5f00\u59cb"),(0,r.yg)("h3",{id:"\u786c\u4ef6\u88c5\u5907"},"\u786c\u4ef6\u88c5\u5907"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"1 x ",(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"},"Seeed Studio XIAO nRF52840")," \u6216\u8005 ",(0,r.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},"Seeed Studio XIAO nRF52840 Sense")),(0,r.yg)("li",{parentName:"ul"},"1 x \u667a\u80fd\u624b\u673a/PC\u4e0e\u84dd\u7259\u8fde\u63a5"),(0,r.yg)("li",{parentName:"ul"},"1 x USB Type-C cable")),(0,r.yg)("h3",{id:"\u8f6f\u4ef6\u51c6\u5907"},"\u8f6f\u4ef6\u51c6\u5907"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp"},"nRF Connect for Mobile (Android)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://apps.apple.com/us/app/lightblue/id557428110"},"LightBlue App (Apple)"))),(0,r.yg)("h2",{id:"arduino\u5e93\u6982\u8ff0"},"Arduino\u5e93\u6982\u8ff0"),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"\u5982\u679c\u8fd9\u662f\u60a8\u7b2c\u4e00\u6b21\u4f7f\u7528Arduino\uff0c\u6211\u4eec\u5f3a\u70c8\u5efa\u8bae\u60a8\u53c2\u8003 ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino"),".")),(0,r.yg)("p",null,"\u8981\u4f7f\u7528Seeed Studio XIAO nRF52840\u7684\u84dd\u7259\u529f\u80fd\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528\u5b98\u65b9\u7684Arduino BLE\u5e93\u3002"),(0,r.yg)("div",null,(0,r.yg)("p",{style:{}},(0,r.yg)("a",{href:"https://github.com/arduino-libraries/ArduinoBLE",target:"_blank"})),(0,r.yg)("div",{align:"center"},(0,r.yg)("a",{href:"https://github.com/arduino-libraries/ArduinoBLE",target:"_blank"},(0,r.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,r.yg)("p",null)),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u5e94\u7528\u4e0e24GHz\u7761\u7720\u547c\u5438\u96f7\u8fbe\u7684\u6f14\u793a\uff0c\u60a8\u53ef\u80fd\u8fd8\u9700\u8981\u4e0b\u8f7d\u652f\u6301\u7684\u5e93\u3002"),(0,r.yg)("div",null,(0,r.yg)("p",{style:{}},(0,r.yg)("a",{href:"https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar_BLE",target:"_blank"})),(0,r.yg)("div",{align:"center"},(0,r.yg)("a",{href:"https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar_BLE",target:"_blank"},(0,r.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,r.yg)("p",null)),(0,r.yg)("h3",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,r.yg)("p",null,"\u6709\u5173ArduinoBLE\u4ee3\u7801\u5e93\u7684\u529f\u80fd\u548c\u4f7f\u7528\u4ecb\u7ecd\uff0c\u8bf7\u53c2\u9605",(0,r.yg)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/libraries/arduinoble/"},"Arduino website"),"."),(0,r.yg)("p",null,"\u6709\u5173\u529f\u80fd\u4ecb\u7ecd\u548c\u4ee3\u7801\u5e93\u7684\u4f7f\u7528\u89c124GHz\u7761\u7720\u547c\u5438\u96f7\u8fbeBLE\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Radar_MR24BSD1/#function"},"Wiki"),"."),(0,r.yg)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u65b9\u6cd5\u4e00")," (\u8be5\u65b9\u6cd5\u5728\u4e0a\u8ff0\u4e24\u4e2a\u4ee3\u7801\u5e93\u4e2d\u90fd\u53ef\u7528)")),(0,r.yg)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u4e0b\u8f7d\u4e86zip\u5e93\uff0c\u90a3\u4e48\u6253\u5f00\u4f60\u7684Arduino IDE\uff0c\u70b9\u51fb",(0,r.yg)("strong",{parentName:"p"},"Sketch > Include Library > Add . zip Library"),"\u3002\u9009\u62e9\u4f60\u521a\u4e0b\u8f7d\u7684zip\u6587\u4ef6\uff0c\u5982\u679c\u5e93\u5b89\u88c5\u6b63\u786e\uff0c\u4f60\u5c06\u5728\u901a\u77e5\u7a97\u53e3\u4e2d\u770b\u5230",(0,r.yg)("strong",{parentName:"p"},"\u5e93\u88ab\u6dfb\u52a0\u5230\u4f60\u7684\u5e93\u4e2d"),"\u3002\u8fd9\u610f\u5473\u7740\u5e93\u5b89\u88c5\u6210\u529f"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"\u65b9\u6cd5\u4e8c")," (\u53ea\u80fd\u5b89\u88c5ArduinoBLE\u5e93)")),(0,r.yg)("p",null,"\u4eceArduino IDE 1.5\u53ca\u4ee5\u4e0a\u7248\u672c(1.6.x)\u5f00\u59cb\u6dfb\u52a0\u5e93\u7ba1\u7406\u5668\u3002\u5b83\u53ef\u4ee5\u5728",(0,r.yg)("inlineCode",{parentName:"p"},"Sketch"),"\u83dc\u5355\u4e0b\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"Include Library"),"\u3001",(0,r.yg)("inlineCode",{parentName:"p"}," Manage Libraries\u2026"),"\u4e2d\u627e\u5230\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg"})),(0,r.yg)("p",null,"\u5f53\u4f60\u6253\u5f00\u5e93\u7ba1\u7406\u5668\u65f6\uff0c\u4f60\u4f1a\u53d1\u73b0\u4e00\u4e2a\u4e00\u952e\u5b89\u88c5\u7684\u5e93\u5217\u8868\u3002\u8981\u4e3a\u4f60\u7684\u4ea7\u54c1\u627e\u5230\u4e00\u4e2a\u5e93\uff0c\u641c\u7d22\u4ea7\u54c1\u540d\u79f0\u6216\u5173\u952e\u5b57\uff0c\u5982",(0,r.yg)("inlineCode",{parentName:"p"},"k type"),"\u6216",(0,r.yg)("inlineCode",{parentName:"p"},"digitizer"),"\uff0c\u4f60\u60f3\u8981\u7684\u5e93\u5e94\u8be5\u4f1a\u663e\u793a\u51fa\u6765\u3002\u70b9\u51fb\u6240\u9700\u7684\u5e93\uff0c",(0,r.yg)("inlineCode",{parentName:"p"},"Install"),"\u6309\u94ae\u5c31\u4f1a\u51fa\u73b0\u3002\u5355\u51fb\u8be5\u6309\u94ae\uff0c\u5e93\u5e94\u8be5\u4f1a\u81ea\u52a8\u5b89\u88c5\u3002\u5b89\u88c5\u5b8c\u6210\u540e\uff0c\u5173\u95ed\u5e93\u7ba1\u7406\u5668\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"})),(0,r.yg)("h2",{id:"\u5e94\u7528\u5b9e\u4f8b"},"\u5e94\u7528\u5b9e\u4f8b"),(0,r.yg)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u5b89\u88c5\u4e86\u5e93\uff0c\u5e76\u4e86\u89e3\u4e86\u57fa\u672c\u51fd\u6570\uff0c\u8ba9\u6211\u4eec\u4e3aSeeed Studio XIAO nRF52840\u8fd0\u884c\u4e00\u4e9b\u793a\u4f8b\uff0c\u770b\u770b\u5b83\u7684\u884c\u4e3a\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 1.")," \u542f\u52a8Arduino\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"})),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Step 2.")," \u9009\u62e9\u60a8\u7684\u5f00\u53d1\u677f\u6a21\u578b\u5e76\u5c06\u5176\u6dfb\u52a0\u5230Arduino IDE\u4e2d\u3002\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u4f7f\u7528\u201cSeeed nrf52 mbed-enabled Boards Library\u201d\u3002"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6709\u5173\u677f\u5e93\u7684\u5b89\u88c5\uff0c\u8bf7\u53c2\u9605 ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO_BLE/#software-setup"},"\u672c\u6559\u7a0b")," \u5b8c\u6210\u5b89\u88c5\u3002")),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528404.png"})),(0,r.yg)("h3",{id:"1-\u4f7f\u7528\u667a\u80fd\u624b\u673a\u63a7\u5236\u5185\u7f6eled"},"1 \u4f7f\u7528\u667a\u80fd\u624b\u673a\u63a7\u5236\u5185\u7f6eLED"),(0,r.yg)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u84dd\u7259\u8fde\u63a5Seeed Studio XIAO nF52840 (Sense)\u548c\u667a\u80fd\u624b\u673a\uff0c\u5e76\u4ece\u624b\u673a\u53d1\u9001\u6d88\u606f\uff0c\u4ee5\u6253\u5f00/\u5173\u95edSeeed Studio XIAO nRF52840 (Sense)\u4e0a\u5185\u7f6e\u7684\u7ea2\u8272LED\u3002 "),(0,r.yg)("p",null,"\u8bf7\u5c06\u4e0b\u9762\u7684\u4ee3\u7801\u7c98\u8d34\u5230Arduino IDE\u4e2d\uff0c\u5e76\u5c06\u5176\u4e0a\u4f20\u5230Seeed Studio XIAO nRF52840\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c++"},'#include <ArduinoBLE.h>\n\nBLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Bluetooth\xae Low Energy LED Service\n\n// Bluetooth\xae Low Energy LED Switch Characteristic - custom 128-bit UUID, read and writable by central\nBLEByteCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);\n\nconst int ledPin = LED_BUILTIN; // pin to use for the LED\n\nvoid setup() {\n  Serial.begin(9600);\n  while (!Serial);\n\n  // set LED pin to output mode\n  pinMode(ledPin, OUTPUT);\n\n  // begin initialization\n  if (!BLE.begin()) {\n    Serial.println("starting Bluetooth\xae Low Energy module failed!");\n\n    while (1);\n  }\n\n  // set advertised local name and service UUID:\n  BLE.setLocalName("LED");\n  BLE.setAdvertisedService(ledService);\n\n  // add the characteristic to the service\n  ledService.addCharacteristic(switchCharacteristic);\n\n  // add service\n  BLE.addService(ledService);\n\n  // set the initial value for the characeristic:\n  switchCharacteristic.writeValue(0);\n\n  // start advertising\n  BLE.advertise();\n\n  Serial.println("BLE LED Peripheral");\n}\n\nvoid loop() {\n  // listen for Bluetooth\xae Low Energy peripherals to connect:\n  BLEDevice central = BLE.central();\n\n  // if a central is connected to peripheral:\n  if (central) {\n    Serial.print("Connected to central: ");\n    // print the central\'s MAC address:\n    Serial.println(central.address());\n\n    // while the central is still connected to peripheral:\n  while (central.connected()) {\n        if (switchCharacteristic.written()) {\n          if (switchCharacteristic.value()) {   \n            Serial.println("LED on");\n            digitalWrite(ledPin, LOW); // changed from HIGH to LOW       \n          } else {                              \n            Serial.println(F("LED off"));\n            digitalWrite(ledPin, HIGH); // changed from LOW to HIGH     \n          }\n        }\n      }\n\n    // when the central disconnects, print it out:\n    Serial.print(F("Disconnected from central: "));\n    Serial.println(central.address());\n  }\n}\n')),(0,r.yg)("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u5b9e\u73b0\u7684\u5173\u952e\u662f\u4e0b\u9762\u7684\u6bb5\u843d\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c++"},'  while (central.connected()) {\n        if (switchCharacteristic.written()) {\n          if (switchCharacteristic.value()) {   \n            Serial.println("LED on");\n            digitalWrite(ledPin, LOW); // changed from HIGH to LOW       \n          } else {                              \n            Serial.println(F("LED off"));\n            digitalWrite(ledPin, HIGH); // changed from LOW to HIGH     \n          }\n        }\n      }\n')),(0,r.yg)("p",null,"\u5f53\u770b\u5230Studio XIAO nRF52840\u901a\u8fc7\u84dd\u7259\u8bbe\u5907",(0,r.yg)("inlineCode",{parentName:"p"},"central.connected()"),"\u8fde\u63a5\u5e76\u4ece\u84dd\u7259\u8bbe\u5907",(0,r.yg)("inlineCode",{parentName:"p"}," switchcharacteristics .written()"),"\u63a5\u6536\u5185\u5bb9\u65f6\uff0c\u6b64\u4ee3\u7801\u7684\u76ee\u7684\u662f\u8f93\u5165\u5224\u65ad\u3002\u5982\u679c\u5224\u65ad\u503c\u662f\u975e\u96f6\u7684",(0,r.yg)("inlineCode",{parentName:"p"}," switchcharacteristics .value()"),"\uff0c\u5219\u706f\u4eae\uff0c\u5982\u679c\u5224\u65ad\u503c\u4e3a0\uff0c\u5219\u706f\u4eae\u3002 "),(0,r.yg)("p",null,"\u6253\u5f00\u4e32\u884c\u663e\u793a\u5668\u52309600\u6ce2\u7279\u7387\u548cled\u5e94\u6253\u5f00\u6216\u5173\u95ed\u3002\u8f93\u51fa\u5e94\u8be5\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/2.png"})),(0,r.yg)("p",null,"\u6b64\u65f6\uff0c\u4f7f\u7528\u624b\u673aapp\u901a\u8fc7\u84dd\u7259\u5c31\u53ef\u4ee5\u5b8c\u6210\u5bf9Seeed Studio XIAO nRF52840\u706f\u5149\u7684\u63a7\u5236\uff0c\u5982\u4e0b\u6240\u8ff0\u3002"),(0,r.yg)("table",{align:"center"},(0,r.yg)("tr",null,(0,r.yg)("th",{align:"center"},"iPhone"),(0,r.yg)("th",{align:"center"},"Android"),(0,r.yg)("th",{align:"center"},"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone1.jpg"})),(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and1.jpeg"})),(0,r.yg)("td",{align:"center"},"\u6253\u5f00\u8f6f\u4ef6\uff0c\u641c\u7d22\u4e00\u4e2a\u84dd\u7259\u8bbe\u5907\u53eb ",(0,r.yg)("strong",null,"LED")," \u7136\u540e\u70b9\u51fb\u8fde\u63a5\u3002\u6709\u4e9b\u8bbe\u5907\u53ef\u80fd\u663e\u793a\u4e3a ",(0,r.yg)("strong",null,"Arduino"),".")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone2.jpg"})),(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and2.jpeg"})),(0,r.yg)("td",{align:"center"},"\u8fdb\u5165Seeed Studio XIAO nRF52840\u84dd\u7259\u63a5\u53e3\uff0c\u70b9\u51fb\u8bbe\u5907\u5373\u53ef\u663e\u793a\u8bbe\u5907\u8be6\u7ec6\u4fe1\u606f.")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone4.jpg"})),(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and3.jpeg"})),(0,r.yg)("td",{align:"center"},"\u586b\u5199\u8981\u53d1\u9001\u5230Seeed Studio XIAO nRF52840\u7684\u6570\u636e\uff0c\u53d1\u90011\u5f00\u706f\uff0c\u53d1\u90010\u5173\u706f.")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone5.jpg"})),(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and4.jpeg"})),(0,r.yg)("td",{align:"center"},"\u56de\u5230\u84dd\u7259\u63a7\u5236\u754c\u9762\uff0c\u60a8\u53ef\u4ee5\u770b\u5230\u8be5\u503c\u5df2\u66f4\u6539\uff0cSeeed Studio XIAO nRF52840\u7ea2\u706f\u4eae(\u6216\u5173).")),(0,r.yg)("tr",null,(0,r.yg)("td",{colspan:"3"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/3.png"})))),(0,r.yg)("h3",{id:"2-\u4f7f\u7528\u5c0fble\u901a\u8fc7ble\u83b7\u53d624ghz\u7761\u7720\u68c0\u6d4b\u6a21\u5757\u7684\u6570\u636e"},"2 \u4f7f\u7528\u5c0fBLE\u901a\u8fc7BLE\u83b7\u53d624GHz\u7761\u7720\u68c0\u6d4b\u6a21\u5757\u7684\u6570\u636e"),(0,r.yg)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u63cf\u8ff0\u5982\u4f55\u83b7\u53d6\u4f20\u611f\u5668\u7684\u503c\uff0c\u5e76\u4f7f\u7528Seeed Studio XIAO nRF52840\u901a\u8fc7\u84dd\u7259\u5c06\u4f20\u611f\u5668\u68c0\u6d4b\u5230\u7684\u6570\u636e\u4fe1\u606f\u53d1\u9001\u5230\u79fb\u52a8\u8bbe\u5907\u3002 "),(0,r.yg)("p",null,"\u6309\u7167\u4e0b\u56fe\u8fde\u63a5seed Studio XIAO nRF52840\u677f\u548c24GHz\u547c\u5438\u7761\u7720\u68c0\u6d4b\u6a21\u5757\u3002\u60f3\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u70b9\u51fb ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Radar_MR24BSD1"},"\u8fd9\u91cc"),"."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/60GHzradar/20.png"})),(0,r.yg)("p",null,"\u8bf7\u6253\u5f00\u5e93\u4e2d\u7684\u793a\u4f8b\u4ee3\u7801\u5e76\u4e0a\u4f20\u81f3Seeed Studio XIAO nRF52840\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/6.png"})),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c++"},'//Radar_with_XIAOBLE_example\n\n#include <ArduinoBLE.h>\n#include <sleepbreathingradarBLE.h>\n\nSleepBreathingRadarBLE radar;\nBLEService radarService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Bluetooth\xae Low Energy LED Service\n\n// Bluetooth\xae Low Energy LED Switch Characteristic - custom 128-bit UUID, read and writable by central\nBLEStringCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLENotify, 20);\n\nint last_val = 0;\n\nvoid setup() {\n  Serial.begin(9600);\n  radar.SerialInit();\n  while (!Serial);\n\n  // begin initialization\n  if (!BLE.begin()) {\n    Serial.println("starting Seeed Studio XIAO nRF52840 with 60GHz radar sensor demo failed!");\n    while (1);\n  }\n\n  // set advertised local name and service UUID:\n  BLE.setLocalName("Seeed Studio XIAO nRF52840");\n  BLE.setAdvertisedService(radarService);\n\n  // add the characteristic to the service\n  radarService.addCharacteristic(switchCharacteristic);\n\n  // add service\n  BLE.addService(radarService);\n\n  // start advertising\n  BLE.advertise();\n\n  Serial.println("Seeed Studio XIAO nRF52840 active, waiting for connections...");\n}\n\nvoid loop() {\n  // listen for Bluetooth\xae Low Energy peripherals to connect:\n  BLEDevice central = BLE.central();\n\n  // if a central is connected to peripheral:\n  if (central) {\n    Serial.print("Connected to central: ");\n    // print the central\'s MAC address:\n    Serial.println(central.address());\n\n    // while the central is still connected to peripheral:\n    while (central.connected()){\n       radar.recvRadarBytes();                       //Receive radar data and start processing\n       if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]\n          byte dataMsg[radar.dataLen+3] = {0x00};\n          dataMsg[0] = 0x53;                         //Add the header frame as the first element of the array\n          for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer\n          dataMsg[radar.dataLen+1] = 0x54;\n          dataMsg[radar.dataLen+2] = 0x43;\n          radar.newData = false;                     //A complete set of data frames is saved\n          int new_val = radar.Sleep_inf(dataMsg);    //Use radar built-in algorithm to output human motion status\n          if(new_val != last_val){\n            radar.OutputAssignment(new_val);\n            switchCharacteristic.setValue(radar.str);\n            last_val = new_val;\n          }\n        }\n    }\n\n    // when the central disconnects, print it out:\n      Serial.print(F("Disconnected from central: "));\n      Serial.println(central.address());\n    }\n}\n')),(0,r.yg)("p",null,"\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u5411\u79fb\u52a8\u8bbe\u5907\u53d1\u9001\u6570\u636e\u7684\u51fd\u6570\u662f",(0,r.yg)("inlineCode",{parentName:"p"},"setValue()"),"\u3002\u5982\u679c\u4f60\u60f3\u5b9e\u65f6\u663e\u793a\u6570\u636e\uff0c\u4f60\u9700\u8981\u5c06",(0,r.yg)("inlineCode",{parentName:"p"},"BLENotify"),"\u6dfb\u52a0\u5230\u4e0b\u9762\u7684\u4ee3\u7801\u4e2d\u3002\u6700\u540e\u4e00\u4e2a\u53c2\u657020\u8868\u793a\u53ef\u4ee5\u53d1\u9001\u7684\u6570\u636e\u7684\u6700\u5927\u957f\u5ea6\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c++"},'BLEStringCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLENotify, 20);\n')),(0,r.yg)("p",null,"\u6253\u5f00\u4e32\u884c\u663e\u793a\u5668\uff0c\u5c06\u6ce2\u7279\u7387\u8c03\u52309600\uff0c\u5e94\u8be5\u53ef\u4ee5\u663e\u793a\u4f20\u611f\u5668\u548c\u5b83\u6307\u5411\u7684\u7269\u4f53\u4e4b\u95f4\u7684\u8ddd\u79bb\uff0c\u5355\u4f4d\u662f\u6beb\u7c73\u548c\u82f1\u5c3a\u3002\u8f93\u51fa\u5e94\u8be5\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/4.png"})),(0,r.yg)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u6b65\u9aa4\u83b7\u53d6\u84dd\u7259\u53d1\u9001\u7684\u5b9e\u65f6\u6570\u636e\u3002"),(0,r.yg)("table",{align:"center"},(0,r.yg)("tr",null,(0,r.yg)("th",{align:"center"},"iPhone"),(0,r.yg)("th",{align:"center"},"Android"),(0,r.yg)("th",{align:"center"},"Description")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone1.jpg"})),(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and5.jpeg"})),(0,r.yg)("td",{align:"center"},"\u6253\u5f00\u8f6f\u4ef6\uff0c\u641c\u7d22\u4e00\u4e2a\u84dd\u7259\u8bbe\u5907\u53eb ",(0,r.yg)("strong",null,"Seeed Studio XIAO nRF52840")," \u7136\u540e\u70b9\u51fb\u8fde\u63a5\u3002\u6709\u4e9b\u8bbe\u5907\u53ef\u80fd\u663e\u793a\u4e3a ",(0,r.yg)("strong",null,"Arduino"),".")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"=",(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone2.jpg"})),(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and2.jpeg"})),(0,r.yg)("td",{align:"center"},"\u8fdb\u5165Seeed Studio XIAO nRF52840\u84dd\u7259\u63a5\u53e3\uff0c\u70b9\u51fb\u8bbe\u5907\u5373\u53ef\u663e\u793a\u8bbe\u5907\u8be6\u7ec6\u4fe1\u606f.")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone8.jpg"})),(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and6.jpeg"})),(0,r.yg)("td",{align:"center"},"\u6253\u5f00\u8f6f\u4ef6\u7684\u5b9e\u65f6\u66f4\u65b0\u6570\u636e.")),(0,r.yg)("tr",null,(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone7.jpg"})),(0,r.yg)("td",null,(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and7.jpeg"})),(0,r.yg)("td",{align:"center"},"\u63a5\u4e0b\u6765\uff0c\u53ea\u8981\u96f7\u8fbe\u68c0\u6d4b\u5230\u7761\u7720\u4fe1\u606f\uff0c\u5b83\u5c31\u4f1a\u901a\u8fc7Seeed Studio XIAO nRF52840\u7684\u84dd\u7259\u53d1\u9001\u5230\u624b\u673a.")),(0,r.yg)("tr",null,(0,r.yg)("td",{colspan:"3"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/5.png"})))),(0,r.yg)("h3",{id:"3-\u4e24\u4e2axiao-nrf52840\u63a7\u5236led\u901a\u8fc7\u84dd\u7259\u901a\u4fe1"},"3 \u4e24\u4e2aXIAO nRF52840\u63a7\u5236LED\u901a\u8fc7\u84dd\u7259\u901a\u4fe1"),(0,r.yg)("p",null,"\u5728\u672c\u4f8b\u4e2d\uff0c\u6211\u4eec\u5c06\u4f7f\u75282\u4e2aXIAO nRF52840\uff0c\u5229\u7528\u5b83\u4eec\u7684\u84dd\u7259\u529f\u80fd\u8fdb\u884c\u901a\u4fe1\u3002\u5176\u4e2d1\u4e2a\u8fde\u63a5\u5230XIAO Expansion board\u4e0a\uff0c\u901a\u8fc7Expansion board\u4e0a\u7684\u6309\u94ae\u53d1\u9001\u63a7\u5236\u547d\u4ee4\u3002\u53e6\u4e00\u4e2a\u5145\u5f53\u4ece\u52a8\u88c5\u7f6e\u3002 "),(0,r.yg)("p",null,"\u5728\u5f00\u59cb\u4e4b\u524d\uff0c\u8bf7\u505a\u597d\u4ee5\u4e0b\u51c6\u5907\u3002"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"}),(0,r.yg)("th",{parentName:"tr",align:"center"}))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("img",{width:210,src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"})),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("img",{width:210,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"}))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},(0,r.yg)("strong",{parentName:"a"},"Seeed Studio XIAO Expansion board"))),(0,r.yg)("td",{parentName:"tr",align:"center"},"2 x ",(0,r.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products"},(0,r.yg)("strong",{parentName:"a"},"Seeed XIAO BLE nRF52840 Sense")))))),(0,r.yg)("p",null,"\u8bf7\u9009\u62e9\u4e00\u4e2a\u4e0d\u9700\u8981\u8fde\u63a5\u4efb\u4f55\u8bbe\u5907\u7684XIAO nRF52840\uff0c\u76f4\u63a5\u4e0a\u4f20\u4e0b\u9762\u7684\u7a0b\u5e8f\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c++"},'#include <ArduinoBLE.h>\n\nBLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Bluetooth\xae Low Energy LED Service\n\n// Bluetooth\xae Low Energy LED Switch Characteristic - custom 128-bit UUID, read and writable by central\nBLEByteCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);\n\nconst int ledPin = LED_BUILTIN; // pin to use for the LED\n\nvoid setup() {\n  Serial.begin(9600);\n  while (!Serial);\n\n  // set LED pin to output mode\n  pinMode(ledPin, OUTPUT);\n\n  // begin initialization\n  if (!BLE.begin()) {\n    Serial.println("starting Bluetooth\xae Low Energy module failed!");\n\n    while (1);\n  }\n\n  // set advertised local name and service UUID:\n  BLE.setLocalName("XIAO");\n  BLE.setAdvertisedService(ledService);\n\n  // add the characteristic to the service\n  ledService.addCharacteristic(switchCharacteristic);\n\n  // add service\n  BLE.addService(ledService);\n\n  // set the initial value for the characeristic:\n  switchCharacteristic.writeValue(0);\n\n  // start advertising\n  BLE.advertise();\n\n  // print address\n  Serial.print("Address: ");\n  Serial.println(BLE.address());\n\n  Serial.println("XIAO nRF52840 Peripheral");\n}\n\nvoid loop() {\n  // listen for Bluetooth\xae Low Energy peripherals to connect:\n  BLEDevice central = BLE.central();\n\n  // if a central is connected to peripheral:\n  if (central) {\n    Serial.print("Connected to central: ");\n    // print the central\'s MAC address:\n    Serial.println(central.address());\n\n    // while the central is still connected to peripheral:\n    while (central.connected()) {\n      // if the remote device wrote to the characteristic,\n      // use the value to control the LED:\n      if (switchCharacteristic.written()) {\n        if (switchCharacteristic.value()) {   // any value other than 0\n          Serial.println("LED on");\n          digitalWrite(ledPin, HIGH);         // will turn the LED on\n        } else {                              // a 0 value\n          Serial.println(F("LED off"));\n          digitalWrite(ledPin, LOW);          // will turn the LED off\n        }\n      }\n    }\n\n    // when the central disconnects, print it out:\n    Serial.print(F("Disconnected from central: "));\n    Serial.println(central.address());\n  }\n}\n')),(0,r.yg)("p",null,"\u8fd9\u4e2a\u7a0b\u5e8f\u7684\u4e3b\u8981\u76ee\u7684\u662f\u8ba9XIAO\u6210\u4e3a\u4e00\u4e2a\u53ef\u4ee5\u88ab\u5176\u4ed6\u84dd\u7259\u8bbe\u5907\u641c\u7d22\u548c\u8fde\u63a5\u7684\u540d\u4e3a\u201cXIAO\u201d\u7684\u84dd\u7259\u8bbe\u5907\u3002\u8fde\u63a5\u540e\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u53d1\u90010\u62161\u6765\u63a7\u5236\u8096\u4e0a\u7684led\u5206\u522b\u5173\u95ed\u6216\u6253\u5f00\u3002 "),(0,r.yg)("p",null,"\u628a Seeed Studio XIAO nRF52840\u653e\u5728\u6269\u5c55\u677f\u4e0a\u3002"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png"})),(0,r.yg)("p",null,"\u4e3a\u6b64\u76ee\u7684\uff0c\u4e0e\u6269\u5c55\u677f\u8fde\u63a5\u7684XIAO\u4e0a\u4f20\u4ee5\u4e0b\u7a0b\u5e8f\u3002"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-c++"},'#include <ArduinoBLE.h>\n#include <U8x8lib.h>\n#include <Wire.h>\n\n// variables for button\nconst int buttonPin = D1;\nint oldButtonState = LOW;\n\nvoid setup() {\n  Serial.begin(9600);\n  while (!Serial);\n\n  // configure the button pin as input\n  pinMode(buttonPin, INPUT_PULLUP);\n\n  // initialize the Bluetooth\xae Low Energy hardware\n  BLE.begin();\n\n  Serial.println("Bluetooth\xae Low Energy Central - LED control");\n\n  // start scanning for peripherals\n  BLE.scanForName("XIAO");\n}\n\nvoid loop() {\n  // check if a peripheral has been discovered\n  BLEDevice peripheral = BLE.available();\n  if (peripheral) {\n    // discovered a peripheral, print out address, local name, and advertised service\n    Serial.print("Found ");\n    Serial.print(peripheral.address());\n    Serial.print(" \'");\n    Serial.print(peripheral.localName());\n    Serial.print("\' ");\n    Serial.print(peripheral.advertisedServiceUuid());\n    Serial.println();\n\n    if (peripheral.localName() != "XIAO") {\n      return;\n    }\n\n    // stop scanning\n    BLE.stopScan();\n\n    system_control(peripheral);\n\n    // peripheral disconnected, start scanning again\n    BLE.scanForName("XIAO");\n  }\n  delay(100);\n}\n\nvoid system_control(BLEDevice peripheral) {\n  // connect to the peripheral\n  Serial.println("Connecting ...");\n\n  if (peripheral.connect()) {\n    Serial.println("Connected");\n  } else {\n    Serial.println("Failed to connect!");\n    return;\n  }\n\n  // discover peripheral attributes\n  Serial.println("Discovering attributes ...");\n  if (peripheral.discoverAttributes()) {\n    Serial.println("Attributes discovered");\n  } else {\n    Serial.println("Attribute discovery failed!");\n    peripheral.disconnect();\n    return;\n  }\n\n  // retrieve the LED characteristic\n  BLECharacteristic ledCharacteristic = peripheral.characteristic("19b10001-e8f2-537e-4f6c-d104768a1214");\n\n  if (!ledCharacteristic) {\n    Serial.println("Peripheral does not have LED characteristic!");\n    peripheral.disconnect();\n    return;\n  } else if (!ledCharacteristic.canWrite()) {\n    Serial.println("Peripheral does not have a writable LED characteristic!");\n    peripheral.disconnect();\n    return;\n  }\n\n  while (peripheral.connected()) {\n    // while the peripheral is connected\n    // read the button pin\n    int buttonState = digitalRead(buttonPin);\n\n    if (oldButtonState != buttonState) {\n      // button changed\n      oldButtonState = buttonState;\n\n      if (buttonState) {\n        Serial.println("button pressed");\n\n        // button is pressed, write 0x01 to turn the LED on\n        ledCharacteristic.writeValue((byte)0x01);\n      } else {\n        Serial.println("button released");\n\n        // button is released, write 0x00 to turn the LED off\n        ledCharacteristic.writeValue((byte)0x00);\n      }\n    }\n  }\n\n  Serial.println("Peripheral disconnected");\n}\n')),(0,r.yg)("p",null,"\u4e0a\u4f20\u7a0b\u5e8f\u540e\uff0c\u6253\u5f00\u4e32\u884c\u76d1\u89c6\u5668\uff0c\u7a0b\u5e8f\u5c06\u5f00\u59cb\u641c\u7d22\u9644\u8fd1\u7684\u672c\u5730\u540d\u79f0\u4e3a\u201cXIAO\u201d\u7684\u84dd\u7259\u8bbe\u5907\u5e76\u8fde\u63a5(\u9700\u8981\u7b49\u5f851\u81f33\u5206\u949f)\u3002 "),(0,r.yg)("p",null,"\u5f53\u4e32\u53e3\u663e\u793a\u5668\u663e\u793a\u8fde\u63a5\u6210\u529f\u7684\u6d88\u606f\u540e\uff0c\u901a\u8fc7\u7ea7\u8054\u677fD1\u952e\u63a7\u5236\u53e6\u4e00\u4fa7\u8096nRF52840 LED\u7684\u5207\u6362\u3002 "),(0,r.yg)("p",null,"\u5f53\u7136\uff0c\u5982\u679c\u4f60\u6ca1\u6709\u6269\u5c55\u677f\uff0c\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u7684\u6309\u94ae\u6216\u5176\u4ed6\u8bbe\u5907\u3002"),(0,r.yg)("h2",{id:"\u53e6\u5916"},"\u53e6\u5916"),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u5c1d\u8bd5\u66f4\u591a\u793a\u4f8b\uff0c\u60a8\u53ef\u4ee5\u5bfc\u822a\u5230\u201cFile > examples > INCOMPATIBLE > ArduinoBLE\u201d\uff0c\u5e76\u67e5\u770b",(0,r.yg)("strong",{parentName:"p"},"ArduinoBLE"),"\u4e0b\u7684\u6240\u6709\u793a\u4f8b"),(0,r.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,r.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1!\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u5229\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u559c\u597d\u548c\u9700\u6c42\u3002"),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);