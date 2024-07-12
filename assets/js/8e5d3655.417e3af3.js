"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9380],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>y});var o=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),d=s(r),c=n,y=d["".concat(u,".").concat(c)]||d[c]||p[c]||l;return r?o.createElement(y,i(i({ref:t},g),{},{components:r})):o.createElement(y,i({ref:t},g))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:n,i[1]=a;for(var s=2;s<l;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8e4:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var o=r(58168),n=(r(96540),r(15680));const l={description:"Seeeduino Arch V1.0",title:"Seeeduino Arch V1.0",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Arch_V1.0",last_update:{date:"1/31/2023",author:"shuxu hu"}},i=void 0,a={unversionedId:"Sensor/Seeeduino Series/Seeeduino_Arch_V1.0",id:"Sensor/Seeeduino Series/Seeeduino_Arch_V1.0",title:"Seeeduino Arch V1.0",description:"Seeeduino Arch V1.0",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino_Arch_V1.0.md",sourceDirName:"Sensor/Seeeduino Series",slug:"/Seeeduino_Arch_V1.0",permalink:"/Seeeduino_Arch_V1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino_Arch_V1.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Seeeduino Arch V1.0",title:"Seeeduino Arch V1.0",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Arch_V1.0",last_update:{date:"1/31/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino Arch",permalink:"/Seeeduino_Arch"},next:{title:"Driver for Seeeduino",permalink:"/Driver_for_Seeeduino"}},u={},s=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Pinout",id:"pinout",level:2},{value:"Compare Seeeduino Arch  with Arduino",id:"compare-seeeduino-arch--with-arduino",level:2},{value:"Usage",id:"usage",level:2},{value:"Demo: Water Lights",id:"demo-water-lights",level:3},{value:"Applications",id:"applications",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:s},d="wrapper";function p(e){let{components:t,...r}=e;return(0,n.yg)(d,(0,o.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/Arch_01.jpg",alt:"enter image description here"})),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Seeeduino Arch")," is a ",(0,n.yg)("a",{parentName:"p",href:"http://mbed.org/handbook/mbed-SDK"},"mbed")," enabled development board which combines the advantages of mbed SDK and Arduino formfactor. With Seeeduino Arch, you can use mbed C/C++ SDK, libraries and optimizing online development tools to rapidly build a prototype.\nSeeeduino Arch has standard Arduino appearance and Grove connectors. It\u2019s convenient to connect existing Shields and Grove products to Seeeduino Arch."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/seeeduino-arch-p-1561.html"},(0,n.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:"enter image description here"}))),(0,n.yg)("h2",{id:"feature"},"Feature"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"mbed enabled")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"1.online development tools\n\n2.easy to use C/C++ SDK\n\n3.lots of published libraries, projects\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Stardard Arduino Appearance, two Grove connectors")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"1.available with 3.3V compatible shields\n\n2.a large number of grove modules\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Drag-n-drop programming")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"NXP LPC11U24 MCU"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"1.Low power ARM Cortex-M0 Core\n\n2.48MHz, 32KB Flash, 8KB RAM, 4KB EEPROM\n\n3.USB Device, 2xSPI, UART, I2C\n")),(0,n.yg)("h2",{id:"specification"},"Specification"),(0,n.yg)("hr",null),(0,n.yg)("table",{cellspacing:"0",width:"80%"},(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"col"}," Item"),(0,n.yg)("th",{scope:"col"}," Typical")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," Work Voltage"),(0,n.yg)("td",null," 7 ~ 9V")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," Microcontroller"),(0,n.yg)("td",null," LPC11U24")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," Flash Momery"),(0,n.yg)("td",null," 32kB")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," EEPROM"),(0,n.yg)("td",null," 4kB")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," RAM"),(0,n.yg)("td",null," 8kB")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," UART"),(0,n.yg)("td",null," 1")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," I2C"),(0,n.yg)("td",null," 1")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," ADC Channels"),(0,n.yg)("td",null," 8")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," I/O pins"),(0,n.yg)("td",null,"40"))),(0,n.yg)("h2",{id:"pinout"},"Pinout"),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/Arch_Pinout.png",alt:"enter image description here"})),(0,n.yg)("h2",{id:"compare-seeeduino-arch--with-arduino"},"Compare Seeeduino Arch  with Arduino"),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Both Seeedduino and Arduino are platforms used for creating rapid prototyping. However, there are still differences between them. We can get more information about them by comparing from the following form."),(0,n.yg)("table",{cellspacing:"0",width:"100%"},(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"col"}," Item"),(0,n.yg)("th",{scope:"col"}," Seeeduino Arch"),(0,n.yg)("th",{scope:"col"}," Arduino")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," Microcontroller"),(0,n.yg)("td",null," ARM Cortex-M series MCU"),(0,n.yg)("td",null," Mainly AVR 8-bit MCU, using the new Due Cortex-M3 MCU family.")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," Hardware specification"),(0,n.yg)("td",null," Standardized size and pin for easy modular build prototypes"),(0,n.yg)("td",null," Standardized size and pin for easy modular build prototypes")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  Development Environment"),(0,n.yg)("td",null," Online development tool for collaborating and sharing easily, can export project to local for development and debugging. Powerful, yet also simple."),(0,n.yg)("td",null," Arduino IDE, easy to use, simple but functional.")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," Develop and debug"),(0,n.yg)("td",null," Support library import, export projects, version control, debugging and other functions."),(0,n.yg)("td",null," Libraries and application code are separate, suitable for writing simple code, without debugging function."))),"The Seeeduino Arch is compatibility with Arduino in hardware. Now we share their pins destribution.",(0,n.yg)("table",{cellspacing:"0",width:"100%"},(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"col"}," Arduino"),(0,n.yg)("th",{scope:"col"}," Seeeduino Arch"),(0,n.yg)("th",{scope:"col"}," Description")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," D0"),(0,n.yg)("td",null," P0_18"),(0,n.yg)("td",{rowspan:"14"}," Digital I/O")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," D1"),(0,n.yg)("td",null," P0_19")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  D2"),(0,n.yg)("td",null," P0_17")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  D3"),(0,n.yg)("td",null," P1_17")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," D4"),(0,n.yg)("td",null," P1_18")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  D5"),(0,n.yg)("td",null," P1_24")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  D6"),(0,n.yg)("td",null," P1_25")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  D7"),(0,n.yg)("td",null," P1_5")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," D8"),(0,n.yg)("td",null," P1_26")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  D9"),(0,n.yg)("td",null," P1_27")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  D10"),(0,n.yg)("td",null," P0_2")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," D11"),(0,n.yg)("td",null," P1_29")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  D12"),(0,n.yg)("td",null," P0_8")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  D13"),(0,n.yg)("td",null," P0_9")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  SDA"),(0,n.yg)("td",null," P0_5"),(0,n.yg)("td",{rowspan:"2"}," I2C")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," SCL"),(0,n.yg)("td",null," P0_4")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," A0"),(0,n.yg)("td",null," P0_11"),(0,n.yg)("td",{rowspan:"7"}," Analog")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  A1"),(0,n.yg)("td",null," P0_12")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  A2"),(0,n.yg)("td",null," P0_13")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," A3"),(0,n.yg)("td",null," P0_14")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  A4"),(0,n.yg)("td",null," P0_16")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  A5"),(0,n.yg)("td",null," P0_22")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  A6"),(0,n.yg)("td",null," P0_23")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  1-MISO1"),(0,n.yg)("td",null," P1_21"),(0,n.yg)("td",{rowspan:"6"}," SPI1")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," 2-SCK"),(0,n.yg)("td",null," P1_20")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," 3-RESET"),(0,n.yg)("td",null," P1_23")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," 4-GND"),(0,n.yg)("td",null," /")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  5-MOSI"),(0,n.yg)("td",null," P1_22")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  6-VCC"),(0,n.yg)("td",null," /")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," 1-SWDIO"),(0,n.yg)("td",null," P0_15"),(0,n.yg)("td",{rowspan:"6"}," 2X3 SWD Interface")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," 2-VCC"),(0,n.yg)("td",null," /")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," 3-SWCLK"),(0,n.yg)("td",null," P0_10")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," 4-"),(0,n.yg)("td",null," P1_4")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  5-nRET"),(0,n.yg)("td",null," P0_0")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  6-GND"),(0,n.yg)("td",null," /")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," D+"),(0,n.yg)("td",null," USB_DP"),(0,n.yg)("td",{rowspan:"5"}," USB&ISP")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," D-"),(0,n.yg)("td",null," USB_DM")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," VBUS"),(0,n.yg)("td",null," P0_3")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  CONNECT"),(0,n.yg)("td",null," P0_6")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"}," ISP"),(0,n.yg)("td",null," P0_1")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"  RX"),(0,n.yg)("td",null," P1_14"),(0,n.yg)("td",{rowspan:"2"}," UART Grove")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"TX"),(0,n.yg)("td",null," P1_13")),(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"row"},"AREF"),(0,n.yg)("td",null," P0_7"),(0,n.yg)("td",null," /"))),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("hr",null),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Seeeduino Arch")," is compatible with ",(0,n.yg)("strong",{parentName:"p"},"mbed")," in software. You can use the comprehensive firmware library and plenty of sample code which is offered by mbed SDK. If you are not familiar with ",(0,n.yg)("strong",{parentName:"p"},"mbed")," platform and ",(0,n.yg)("strong",{parentName:"p"},"mbed")," SDK, please click ",(0,n.yg)("a",{parentName:"p",href:"https://mbed.org/handbook/mbed-NXP-LPC11U24-Getting-Started"},"here")," to have a good understanding."),(0,n.yg)("p",null,"The ",(0,n.yg)("strong",{parentName:"p"},"Seeeduino Arch")," can use the free online IDE and C++ compiler from mbed. This compiler is built on optimizing ARMCC compiler engine which. This helps you get your program up and running quickly, and no software installation is required. Downloading programs is as simple as using a USB flash drive (no external programmer is necessary).  "),(0,n.yg)("p",null,"In addition to online IDE and compiler, users can make use of many offline compiler/IDE available for ARM Cortex M micro-controllers ARM Embedded GCC, Keil MDK ARM IAR Embedded Workbench, etc.."),(0,n.yg)("p",null,"In addition, Writing a library is not a difficult task for beginners. You can click ",(0,n.yg)("a",{parentName:"p",href:"http://mbed.org/cookbook/Writing-a-Library"},"here")," to learn how to write an mbed Library."),(0,n.yg)("p",null,"Here we show you an easy demo: ",(0,n.yg)("strong",{parentName:"p"},"water lights")," using Seeeduino Arch to get you started."),(0,n.yg)("h3",{id:"demo-water-lights"},"Demo: Water Lights"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'Click the "mbed Enabled" logo to register an account for Seeeduino Arch.\n',(0,n.yg)("a",{parentName:"li",href:"https://mbed.org/account/login/?next=/start?auth=104000000000000000000002F7F0F640e640d504b45e111da24094a9d300da46&firmware=999999"},(0,n.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/Mbedenabled.jpg",alt:"enter image description here"})))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Open ",(0,n.yg)("a",{parentName:"li",href:"https://mbed.org/compiler/"},"https://mbed.org/compiler/")," and you will get mbed online IDE. Before programming, you'd better read mbed Complier Getting started.\n",(0,n.yg)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/Open_Compiler.jpg",alt:"enter image description here"}))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},'Click "New" to creat new program and select the device "mbed NXP LPC11U24". I believe that this picture explains better.\n',(0,n.yg)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/Compiler.jpg",alt:"enter image description here"}))),(0,n.yg)("p",null,"The below is my code to control the four leds of seeeduino arch."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},'#include "mbed.h"\n\nDigitalOut  led1(LED1);\nDigitalOut  led2(LED2);\nDigitalOut  led3(LED3);\nDigitalOut  led4(LED4);\n\nint main() {\n    while(1) {\n        led1 = !led1;\n        wait(0.5);\n        led2 = !led2;\n        wait(0.5);\n        led3 = !led3;\n        wait(0.5);\n        led4 = !led4;\n        wait(0.5);\n\n    }\n}\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Now you can compile the code. If the code has errors, it will prompt you and give you help. And you may find the helps are just what you need.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/Error_prompt.jpg",alt:"enter image description here"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"After successfully compiling the code, save the bin file.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Now you need long press the reset button, it will automatically appear as a USB driver named CRP DISABLD."))),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/img/A_usb_device.jpg",alt:"enter image description here"})),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Go to the CRP DISABLD. Now you need delete the firmware file and add the waterLights_LPC11U24 bin file to CRP DISABLD. Remember to reset the Microcontroller to start it running after you download a new program , now the seeeduino arch will run the waterLight program. You can have a try.")),(0,n.yg)("p",null,"The mbed C/C++ SDK provides the software platform and ",(0,n.yg)("a",{parentName:"p",href:"http://mbed.org/cookbook/Homepage"},"libraries")," which also can apply to seeeduino Arch. So you can use this available resource to build your applications. And we are looking forward to sharing your more programs combining Seeeduino arch,Shiled and Grove modules."),(0,n.yg)("h2",{id:"applications"},"Applications"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/"},"Use Seeeduino Arch as a debug adapter to debug another Seeeduino Arch"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://mbed.org/users/yihui/notebook/sense-environment/"},"Sense environment"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://mbed.org/cookbook/seeed-grove-RTC"},"Play with Grove RTC"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger"},"Play with Grove - Ultrasonic ranger")))),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/res/Seeeduino_Arch_Eagle_files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resource"},"Resource"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/res/Seeeduino_Arch_Eagle_files.zip"},"Seeeduino Arch Eagle files"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_Arch_V1.0/res/LPC11U2x_datasheet.pdf"},"LPC11U2x datasheet")))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);