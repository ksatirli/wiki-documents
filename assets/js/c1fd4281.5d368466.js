"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4510],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=d(n),c=o,y=g["".concat(s,".").concat(c)]||g[c]||p[c]||r;return n?i.createElement(y,a(a({ref:t},u),{},{components:n})):i.createElement(y,a({ref:t},u))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},86859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(58168),o=(n(96540),n(15680));const r={title:"Quectel L76K",description:"Get Started with L76K GNSS Module for XIAO",keywords:["XIAO","Quectel L76K","GNSS"],image:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg",slug:"/get_start_l76k_gnss",sidebar_position:0,last_update:{date:new Date("2024-01-16T11:25:12.268Z"),author:"Spencer"}},a="Getting Started with L76K GNSS Module for SeeedStudio XIAO",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/GPS_Module_For_XIAO/L76K_GNSS_Module",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/GPS_Module_For_XIAO/L76K_GNSS_Module",title:"Quectel L76K",description:"Get Started with L76K GNSS Module for XIAO",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/GPS_Module_For_XIAO/L76K_GNSS_Module.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/GPS_Module_For_XIAO",slug:"/get_start_l76k_gnss",permalink:"/get_start_l76k_gnss",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/GPS_Module_For_XIAO/L76K_GNSS_Module.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1705404312.268,formattedLastUpdatedAt:"Jan 16, 2024",sidebarPosition:0,frontMatter:{title:"Quectel L76K",description:"Get Started with L76K GNSS Module for XIAO",keywords:["XIAO","Quectel L76K","GNSS"],image:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg",slug:"/get_start_l76k_gnss",sidebar_position:0,last_update:{date:"2024-01-16T11:25:12.268Z",author:"Spencer"}},sidebar:"ProductSidebar",previous:{title:"Using LVGL and TFT for all XIAO Series",permalink:"/using_lvgl_and_tft_on_round_display"},next:{title:"L76K Path Tracking on Ubidots",permalink:"/L76K_Path_Tracking_on_Ubidots"}},s={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:3},{value:"Specification",id:"specification",level:3},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Step 1. Download and Install the stable version of Arduino IDE according to your operating system.",id:"step-1-download-and-install-the-stable-version-of-arduino-ide-according-to-your-operating-system",level:4},{value:"Step 2. Launch the Arduino application.",id:"step-2-launch-the-arduino-application",level:4},{value:"Step 3. Configure the Arduino IDE for the XIAO you are using.",id:"step-3-configure-the-arduino-ide-for-the-xiao-you-are-using",level:4},{value:"Step 4. Add the TinyGPSPlus library to Arduino.",id:"step-4-add-the-tinygpsplus-library-to-arduino",level:4},{value:"L76K GNSS Module Example",id:"l76k-gnss-module-example",level:2},{value:"Change the behaviour of LED",id:"change-the-behaviour-of-led",level:5},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d},g="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,i.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"getting-started-with-l76k-gnss-module-for-seeedstudio-xiao"},"Getting Started with L76K GNSS Module for SeeedStudio XIAO"),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/1-L76K-GNSS-Module-for-Seeed-Studio-XIAO-45font.jpg",style:{width:600,height:"auto"}})),(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/L76K-GNSS-Module-for-Seeed-Studio-XIAO-p-5864.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"L76K GNSS Module for SeeedStudio XIAO is a Multi-GNSS (Global Navigation Satellite System) module compatible with all XIAO development boards, supports GPS, BeiDou (BDS), GLONASS and QZSS systems, allows multi-system combined or single-system independent positioning. It also supports AGNSS function, built-in low-noise amplifier and sound surface filter, and provides a good positioning experience of fast, accurate, high-performance."),(0,o.yg)("p",null,"The module comes with a high-performance active GNSS antenna intended to cover GPS L1 C/A, BeiDou B1 and GLONASS L1 bands. The design also has a tiny bright green LED for indicating the 1PPS output on fix."),(0,o.yg)("h3",{id:"features"},"Features"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Enhanced Reception:")," Built-in Low Noise Amplifier and Surface Acoustic Wave Filter for improved sensitivity and noise reduction"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"High Precision:")," 32/72 channels, -162dBm tracking, -160dBm re-acquisition sensitivity"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Energy Efficiency"),": 41mA tracking/acquisition, 360\xb5A standby"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Multi-GNSS Systems"),": Powered by Quectel L76K, supporting GPS, BeiDou, GLONASS and QZSS"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Ceramic Antenna:")," Enhanced signal reception, superior to traditional antennas.")),(0,o.yg)("h3",{id:"specification"},"Specification"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"Item"),(0,o.yg)("th",null,"Detail")),(0,o.yg)("tr",null,(0,o.yg)("th",null,"GNSS bands"),(0,o.yg)("td",null,"GPS L1 C/A: 1575.42MHz",(0,o.yg)("br",null)," GLONASS L1: 1602MHz",(0,o.yg)("br",null)," BeiDou B1: 1561.098MHz")),(0,o.yg)("tr",null,(0,o.yg)("th",null,"Channels"),(0,o.yg)("td",null,"32 tracking ch/72 acquisition ch")),(0,o.yg)("tr",null,(0,o.yg)("th",null,"TTFF (Time To First Fix)"),(0,o.yg)("td",null,"Cold Starts: 30s(w/o AGNSS), 5.5s(w/ GNSS)",(0,o.yg)("br",null)," Hot Starts: 5.5s(w/o AGNSS), 2s(w/ AGNSS)")),(0,o.yg)("tr",null,(0,o.yg)("th",null,"Sensitivity"),(0,o.yg)("td",null,"Auto-aquisition: -148dBm",(0,o.yg)("br",null)," Tracking: -162dBm",(0,o.yg)("br",null)," Re-acquisition: -160dBm")),(0,o.yg)("tr",null,(0,o.yg)("th",null,"Accuracy"),(0,o.yg)("td",null,"Position: 2.0m CEP",(0,o.yg)("br",null)," Velocity: 0.1m/s",(0,o.yg)("br",null)," Acceleration: 0.1m/s\xb2",(0,o.yg)("br",null)," Timing: 30ns")),(0,o.yg)("tr",null,(0,o.yg)("th",null,"UART Interface"),(0,o.yg)("td",null,"Baud Rate: 9600~115200bps(9600bps default)",(0,o.yg)("br",null)," Update Rate: 1Hz(default), 5Hz(Max.)",(0,o.yg)("br",null)," Protocol: NMEA 0183, CASIC proprietary protocol ")),(0,o.yg)("tr",null,(0,o.yg)("th",null,"Antenna"),(0,o.yg)("td",null,"Type: Active Antenna",(0,o.yg)("br",null)," Operating Frequency: 1559\u20131606MHz",(0,o.yg)("br",null)," Coaxial Cable: RF1.13 Length=10cm",(0,o.yg)("br",null)," Cable Connector: U.FL Plug RA ")),(0,o.yg)("tr",null,(0,o.yg)("th",null,"Current consumption(w/ active antenna)"),(0,o.yg)("td",null,"Auto-aquisition: 41mA",(0,o.yg)("br",null)," Tracking: 41mA",(0,o.yg)("br",null)," Standby: 360uA ")),(0,o.yg)("tr",null,(0,o.yg)("th",null,"Dimension"),(0,o.yg)("td",null,"18mm x 21mm")))),(0,o.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,o.yg)("p",null,"Before we start, we can refer to the following pictures to understand the pin design of the L76K GNSS Module for SeeedStudio XIAO to facilitate our understanding of the function of the module."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-pinout.png",style:{width:800,height:"auto"}})),(0,o.yg)("h2",{id:"getting-started"},"Getting Started"),(0,o.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,o.yg)("p",null,"To fully experience the capabilities of the L76K GNSS Module, we recommend pairing it with a motherboard from our XIAO series. ",(0,o.yg)("em",{parentName:"p"},"Any of the following XIAO models")," would be compatible for use with the L76K GNSS Module."),(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"Seeed Studio XIAO SAMD21"),(0,o.yg)("th",null,"Seeed Studio XIAO RP2040"),(0,o.yg)("th",null,"Seeed Studio XIAO nRF52840 (Sense)"),(0,o.yg)("th",null,"Seeed Studio XIAO ESP32C3"),(0,o.yg)("th",null,"Seeed Studio XIAO ESP32S3 (Sense)")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-preview-1.jpg",style:{width:400,height:"auto"}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg",style:{width:500,height:"auto"}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoblesense.jpg",style:{width:500,height:"auto"}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/round_display_for_xiao/xiaoesp32c3.jpg",style:{width:450,height:"auto"}}))),(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3.jpg",style:{width:500,height:"auto"}})))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-RP2040-v1-0-p-5026.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/seeed-xiao-esp32c3-p-5431.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))))),(0,o.yg)("p",null,"Before using this module on a XIAO motherboard, you need to install the header sockets on the module and plug the active GNSS antenna onto the module. When connecting to the XIAO, please pay special attention to the installation direction of the module, please do not plug it in backwards, otherwise it is likely to burn the module or the XIAO."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-xiao-assembled.png",style:{width:500,height:"auto"}})),(0,o.yg)("admonition",{type:"caution"},(0,o.yg)("p",{parentName:"admonition"},"Please pay special attention to the installation direction of the module, please do not plug it in backwards, otherwise it is likely to burn the module or the XIAO.")),(0,o.yg)("h3",{id:"software-preparation"},"Software Preparation"),(0,o.yg)("p",null,"To use the L76K GNSS Module for SeeedStudio XIAO, we need to program the XIAO series. The recommended programming tool is the Arduino IDE, and you need to configure the Arduino environment for the XIAO and add the on-board package."),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino"),".")),(0,o.yg)("h4",{id:"step-1-download-and-install-the-stable-version-of-arduino-ide-according-to-your-operating-system"},"Step 1. Download and Install the stable version of Arduino IDE according to your operating system."),(0,o.yg)("div",{class:"download_arduino_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"download_arduino_item",href:"https://www.arduino.cc/en/software"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"},"Download Arduino IDE"))))),(0,o.yg)("h4",{id:"step-2-launch-the-arduino-application"},"Step 2. Launch the Arduino application."),(0,o.yg)("h4",{id:"step-3-configure-the-arduino-ide-for-the-xiao-you-are-using"},"Step 3. Configure the Arduino IDE for the XIAO you are using."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If you want to use ",(0,o.yg)("strong",{parentName:"p"},"Seeed Studio XIAO SAMD21")," for the later routines, please refer to ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO/#software"},"this tutorial"))," to finish adding.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If you want to use ",(0,o.yg)("strong",{parentName:"p"},"Seeed Studio XIAO RP2040")," for the later routines, please refer to ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/XIAO-RP2040-with-Arduino/#software-setup"},"this tutorial"))," to finish adding.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If you want to use ",(0,o.yg)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840")," for the later routines, please refer to ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/XIAO_BLE/#software-setup"},"this tutorial"))," to finish adding.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If you want to use ",(0,o.yg)("strong",{parentName:"p"},"Seeed Studio XIAO ESP32C3")," for the later routines, please refer to ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/XIAO_ESP32C3_Getting_Started#software-setup"},"this tutorial"))," to finish adding.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"If you want to use ",(0,o.yg)("strong",{parentName:"p"},"Seeed Studio XIAO ESP32S3")," for the later routines, please refer to ",(0,o.yg)("strong",{parentName:"p"},(0,o.yg)("a",{parentName:"strong",href:"http://wiki.seeedstudio.com/xiao_esp32s3_getting_started#software-preparation"},"this tutorial"))," to finish adding."))),(0,o.yg)("h4",{id:"step-4-add-the-tinygpsplus-library-to-arduino"},"Step 4. Add the TinyGPSPlus library to Arduino."),(0,o.yg)("p",null,"First, you need to search and download the latest version ",(0,o.yg)("strong",{parentName:"p"},"TinyGPSPlus")," library in the Arduino IDE."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/installing-tinygpsplus.png",style:{width:800,height:"auto"}})),(0,o.yg)("h2",{id:"l76k-gnss-module-example"},"L76K GNSS Module Example"),(0,o.yg)("p",null,"Once the hardware and software are ready, we start uploading our first example program. The L76K GNSS Module prints the GNSS information via the serial port every 1 second after powering up. In this example, we will use ",(0,o.yg)("strong",{parentName:"p"},"TinyGPSPlus")," library to parse the NMEA sentences received from the module and print the results including atitude, longitude and time to the Arduino IDE's Serial Monitor."),(0,o.yg)("p",null,"Here is the source code:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <TinyGPSPlus.h>\n#include <SoftwareSerial.h>\n/*\n   This sample sketch demonstrates how to use L76K GNSS Module on SeeedStudio XIAO.\n*/\nstatic const int RXPin = D7, TXPin = D6;\nstatic const uint32_t GPSBaud = 9600;\n\n// The TinyGPSPlus object\nTinyGPSPlus gps;\n\n// The serial connection to the GNSS module\nSoftwareSerial ss(RXPin, TXPin);\n\nvoid setup() {\n  Serial.begin(115200);\n  ss.begin(GPSBaud);\n\n  Serial.println(F("DeviceExample.ino"));\n  Serial.println(F("A simple demonstration of TinyGPSPlus with L76K GNSS Module"));\n  Serial.print(F("Testing TinyGPSPlus library v. "));\n  Serial.println(TinyGPSPlus::libraryVersion());\n  Serial.println(F("by Mikal Hart"));\n  Serial.println();\n}\n\nvoid loop() {\n  // This sketch displays information every time a new sentence is correctly encoded.\n  while (ss.available() > 0)\n    if (gps.encode(ss.read()))\n      displayInfo();\n\n  if (millis() > 5000 && gps.charsProcessed() < 10) {\n    Serial.println(F("No GPS detected: check wiring."));\n    while (true);\n  }\n}\n\nvoid displayInfo() {\n  Serial.print(F("Location: "));\n  if (gps.location.isValid()) {\n    Serial.print(gps.location.lat(), 6);\n    Serial.print(F(","));\n    Serial.print(gps.location.lng(), 6);\n  } else {\n    Serial.print(F("INVALID"));\n  }\n\n  Serial.print(F("  Date/Time: "));\n  if (gps.date.isValid()) {\n    Serial.print(gps.date.month());\n    Serial.print(F("/"));\n    Serial.print(gps.date.day());\n    Serial.print(F("/"));\n    Serial.print(gps.date.year());\n  } else {\n    Serial.print(F("INVALID"));\n  }\n\n  Serial.print(F(" "));\n  if (gps.time.isValid()) {\n    if (gps.time.hour() < 10) Serial.print(F("0"));\n    Serial.print(gps.time.hour());\n    Serial.print(F(":"));\n    if (gps.time.minute() < 10) Serial.print(F("0"));\n    Serial.print(gps.time.minute());\n    Serial.print(F(":"));\n    if (gps.time.second() < 10) Serial.print(F("0"));\n    Serial.print(gps.time.second());\n    Serial.print(F("."));\n    if (gps.time.centisecond() < 10) Serial.print(F("0"));\n    Serial.print(gps.time.centisecond());\n  } else {\n    Serial.print(F("INVALID"));\n  }\n\n  Serial.println();\n}\n')),(0,o.yg)("p",null,"Just select the XIAO you are using and the port number where the XIAO is located, compile and upload it."),(0,o.yg)("p",null,"Make sure that the L76K GNSS Module is placed outdoor where good GNSS signals can be received. Upload the code to your XIAO and wait a few minutes, you should see the information displayed on the serial monitor."),(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/GPS_Module/L76K/gnss-output.png",style:{width:800,height:"auto"}})),(0,o.yg)("h5",{id:"change-the-behaviour-of-led"},"Change the behaviour of LED"),(0,o.yg)("p",null,"This section demonstrates how to control a green LED using Arduino by sending specific hexadecimal commands through serial communication. The example provided below will show you how to turn off the LED and then return it to its normal blinking state."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"static const int RXPin = D7, TXPin = D6;\nstatic const uint32_t GPSBaud = 9600;\nSoftwareSerial SerialGNSS(RXPin, TXPin);\nvoid setup() {\n  SerialGNSS.begin(GPSBaud);\n\n  // Define the byte array to turn the LED off\n  byte OffState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, \n                     0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, \n                     // highlight-start\n                     0x00, \n                     // highlight-end\n                     0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00, \n                     // highlight-start\n                     0xF0, \n                    // highlight-end\n                     0xC8, 0x17, 0x08};\n\n  // Define the byte array to recover the LED blinking state\n  byte RecoverState[] = {0xBA, 0xCE, 0x10, 0x00, 0x06, 0x03, 0x40, \n                         0x42, 0x0F, 0x00, 0xA0, 0x86, 0x01, 0x00, \n                         // highlight-start\n                         0x03, \n                         // highlight-end\n                         0x00, 0x01, 0x05, 0x00, 0x00, 0x00, 0x00,\n                         // highlight-start\n                         0xF3, \n                         // highlight-end\n                         0xC8, 0x17, 0x08};\n\n  // Send the command to turn off the LED.\n  SerialGNSS.write(OffState, sizeof(OffState));\n  // Wait for 5 seconds.\n  delay(5000);\n  // Send the command to return the LED to blinking.\n  SerialGNSS.write(RecoverState, sizeof(RecoverState));\n}\n\nvoid loop() {\n  // Do nothing.\n}\n\n")),(0,o.yg)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Can the rechargeable cell power XIAO?"),"No, the rechargeable cell in this context is used solely for the Real-Time Clock (RTC) and maintaining a warm start state in the L76K GNSS Module. It cannot be used as a primary power source for the XIAO or for the GNSS module's general operations."),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Why doesn't the GNSS information display on the serial monitor?"),(0,o.yg)("p",null,"Make sure that the L76K GNSS Module is placed outdoor where good GNSS signals can be received.")),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Why does the device's green light stay on constantly when plugged into the XIAO RP2040?"),"To address this issue, you need to pull D0 and D10 high. The constant illumination of the fix green light indicates that the device has entered an abnormal working state.",(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"pinMode(D10,OUTPUT);\ndigitalWrite(D10,1);\npinMode(D0,OUTPUT);\ndigitalWrite(D0,1);\n"))),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);