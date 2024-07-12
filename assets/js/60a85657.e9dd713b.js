"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87867],{15680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>y});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=d(a),m=n,y=g["".concat(p,".").concat(m)]||g[m]||u[m]||o;return a?r.createElement(y,i(i({ref:t},s),{},{components:a})):r.createElement(y,i({ref:t},s))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},39396:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(58168),n=(a(96540),a(15680));const o={title:"Grove-Doppler-Radar",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Doppler-Radar/",slug:"/Grove-Doppler-Radar",last_update:{date:"01/04/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Proximity/Grove-Doppler-Radar",id:"Sensor/Grove/Grove_Sensors/Proximity/Grove-Doppler-Radar",title:"Grove-Doppler-Radar",description:"How would you build a system that could calculate the distance towards an object or detect whether there is motion present? Normally you would use an Ultrasonic or LiDAR Sensor for distance measurement and PIR Motion Sensor for motion detection. What if we told you there is an all-in-one module that could do all these functions more precisely and also perform functions such as velocity detection of moving objects and angle detection of objects. Would you believe it? We were tired of using these traditional modules for motion-sensing applications and wanted to deliver you a better solution, integrating new technologies. Well\u2026For the first time in the history of Grove, we are very excited to bring you a Grove Module based on Radar Technology!",source:"@site/docs/Sensor/Grove/Grove_Sensors/Proximity/Grove-Doppler-Radar.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Proximity",slug:"/Grove-Doppler-Radar",permalink:"/Grove-Doppler-Radar",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Proximity/Grove-Doppler-Radar.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641254400,formattedLastUpdatedAt:"Jan 4, 2022",frontMatter:{title:"Grove-Doppler-Radar",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Doppler-Radar/",slug:"/Grove-Doppler-Radar",last_update:{date:"01/04/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - TF Mini LiDAR",permalink:"/Grove-TF_Mini_LiDAR"},next:{title:"Grove - Time of Flight Distance Sensor VL53L0X",permalink:"/Grove-Time_of_Flight_Distance_Sensor-VL53L0X"}},p={},d=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"How Does Doppler Radar Technology Work in This Module?",id:"how-does-doppler-radar-technology-work-in-this-module",level:3},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Materials Requied",id:"materials-requied",level:4},{value:"Hardware Overview",id:"hardware-overview",level:4},{value:"External headers-pin description",id:"external-headers-pin-description",level:4},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"Software Code",id:"software-code",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],s={toc:d},g="wrapper";function u(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/01.png",alt:null})),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("a",{href:"https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html",target:"_blank"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",border:0}))),(0,n.yg)("p",null,"How would you build a system that could calculate the distance towards an object or detect whether there is motion present? Normally you would use an Ultrasonic or LiDAR Sensor for distance measurement and PIR Motion Sensor for motion detection. What if we told you there is an all-in-one module that could do all these functions more precisely and also perform functions such as velocity detection of moving objects and angle detection of objects. Would you believe it? We were tired of using these traditional modules for motion-sensing applications and wanted to deliver you a better solution, integrating new technologies. Well\u2026For the first time in the history of Grove, we are very excited to bring you a Grove Module based on Radar Technology!"),(0,n.yg)("p",null,"This is the Grove \u2013 Doppler Radar."),(0,n.yg)("p",null,"The Grove \u2013 Doppler Radar is based on the BGT24LTR11 Silicon Germanium MMIC which is a 24GHz radar transceiver. It is driven by an XMC1302 MCU based on Arm\xae Cortex\xae-M0. This comes in a compact package and runs on very low power, providing high-precision measurements.The high frequency of this module allows for high penetration though objects and therefore this module does not need to be exposed outside when deploying, but rather behind an object. This, in turn, is extremely useful in security systems. Also, this is able to operate in harsh weather conditions such as high temperatures, dust, and rain."),(0,n.yg)("h2",{id:"feature"},"Feature"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"The first radar-based sensor in the Grove Family"),(0,n.yg)("li",{parentName:"ul"},"Compact size for easy deployment"),(0,n.yg)("li",{parentName:"ul"},"Light-weight design, suitable for UAV applications"),(0,n.yg)("li",{parentName:"ul"},"Low power consumption for prolonged usage"),(0,n.yg)("li",{parentName:"ul"},"24GHz Transceiver MMIC for high-precision measurements"),(0,n.yg)("li",{parentName:"ul"},"Fast response using electromagnetic waves"),(0,n.yg)("li",{parentName:"ul"},"ESD protection to avoid system failures caused by ESD strikes"),(0,n.yg)("li",{parentName:"ul"},"High penetration which allows it to be deployed behind an object"),(0,n.yg)("li",{parentName:"ul"},"Maintains operation through harsh weather conditions (temperature, light, dust, rain)")),(0,n.yg)("h2",{id:"specification"},"Specification"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Item"),(0,n.yg)("th",{parentName:"tr",align:null},"Value"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"MMIC"),(0,n.yg)("td",{parentName:"tr",align:null},"BGT24LTR11")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"MCU"),(0,n.yg)("td",{parentName:"tr",align:null},"XMC1302 Arm\xae Cortex\xae-M0")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Transmission Frequency"),(0,n.yg)("td",{parentName:"tr",align:null},"Min: 24GHz")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Typical"),(0,n.yg)("td",{parentName:"tr",align:null},"21.125GHz")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Max"),(0,n.yg)("td",{parentName:"tr",align:null},"24.25GHz")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Output Power (EIRP)"),(0,n.yg)("td",{parentName:"tr",align:null},"7dBm @ 25\xb0C")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Update Time"),(0,n.yg)("td",{parentName:"tr",align:null},"300ms")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Communication Interface"),(0,n.yg)("td",{parentName:"tr",align:null},"UART (115200)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Detection Distance"),(0,n.yg)("td",{parentName:"tr",align:null},"10m @ 0dBsm")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Standard Detection Field"),(0,n.yg)("td",{parentName:"tr",align:null},"65\xb0 / horizontal (-6dB); 22\xb0 / vertical (-6dB)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Supply Voltage"),(0,n.yg)("td",{parentName:"tr",align:null},"3.3-5V")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Weight"),(0,n.yg)("td",{parentName:"tr",align:null},"5g")))),(0,n.yg)("h2",{id:"applications"},"Applications"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Smart Home"),(0,n.yg)("li",{parentName:"ul"},"Smart Building"),(0,n.yg)("li",{parentName:"ul"},"Automatic Door"),(0,n.yg)("li",{parentName:"ul"},"Lighting Control"),(0,n.yg)("li",{parentName:"ul"},"Industrial Robotics"),(0,n.yg)("li",{parentName:"ul"},"Intruder Alarm Systems"),(0,n.yg)("li",{parentName:"ul"},"UAV")),(0,n.yg)("h3",{id:"how-does-doppler-radar-technology-work-in-this-module"},"How Does Doppler Radar Technology Work in This Module?"),(0,n.yg)("p",null,"Doppler radar works by sending a beam of electromagnetic radiation waves from the transmitter (TX Antenna), with a precise frequency, at a moving object. Once the electromagnetic radiation wave comes in contact with an object, it travels back towards the receiver (RX Antenna). However, when the wave got reflected from the moving object, the wave now has a different frequency compared to the original frequency, it emitted. Then the change in this frequency can be used to calculate the velocity of the moving object."),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/DIAGRAM-1.png",alt:null})),(0,n.yg)("h2",{id:"platform-supported"},"Platform Supported"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,n.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}),(0,n.yg)("th",{parentName:"tr",align:null}))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,n.yg)("h2",{id:"getting-started"},"Getting Started"),(0,n.yg)("h4",{id:"materials-requied"},"Materials Requied"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Seeeduino XIAO"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove-Doppler-Radar"),(0,n.yg)("th",{parentName:"tr",align:null},"XIAO Expansion Board"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg",alt:"enter image description here"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png",alt:"enter image description here"})),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/06.png",alt:"enter image description here"}))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Get ONE Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html"},"Get ONE Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/"},"Coming SOON"))))),(0,n.yg)("h4",{id:"hardware-overview"},"Hardware Overview"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png",alt:null})),(0,n.yg)("h4",{id:"external-headers-pin-description"},"External headers-pin description"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Pin number"),(0,n.yg)("th",{parentName:"tr",align:null},"Signal name"),(0,n.yg)("th",{parentName:"tr",align:null},"Pin description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"1"),(0,n.yg)("td",{parentName:"tr",align:null},"DIV_OUT"),(0,n.yg)("td",{parentName:"tr",align:null},"Frequency divider output from the BGT24LTR11")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"2"),(0,n.yg)("td",{parentName:"tr",align:null},"GND"),(0,n.yg)("td",{parentName:"tr",align:null},"Ground")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"3"),(0,n.yg)("td",{parentName:"tr",align:null},"VCC_5V_EXT"),(0,n.yg)("td",{parentName:"tr",align:null},"External+5.0V input power supply pin(maximum=5.5V)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"4"),(0,n.yg)("td",{parentName:"tr",align:null},"VTUNE"),(0,n.yg)("td",{parentName:"tr",align:null},"VCO frequency tuning voltage")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"5"),(0,n.yg)("td",{parentName:"tr",align:null},"IFQ_HG"),(0,n.yg)("td",{parentName:"tr",align:null},"BGT24LTR11 Q-channel-analog signal output-second gain stage")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"6"),(0,n.yg)("td",{parentName:"tr",align:null},"IFI_HG"),(0,n.yg)("td",{parentName:"tr",align:null},"BGT24LTR11 I-channel-analog signal output-second gain stage")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"7"),(0,n.yg)("td",{parentName:"tr",align:null},"PWM_OUT"),(0,n.yg)("td",{parentName:"tr",align:null},"External user-configurable GPIO with CCU4")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"8"),(0,n.yg)("td",{parentName:"tr",align:null},"OUT1"),(0,n.yg)("td",{parentName:"tr",align:null},"External GPIO pin (user configurable)")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"9"),(0,n.yg)("td",{parentName:"tr",align:null},"OUT2"),(0,n.yg)("td",{parentName:"tr",align:null},"External GPIO pin (user configurable)")))),(0,n.yg)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg",alt:null})),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"Please plug the USB cable\uff0c Doppler Radar Interface into Seeeduino XIAO expansion board Interface gently, otherwise you may damage the port.\n")),(0,n.yg)("ul",{parentName:"admonition"},(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 1.")," Plug Doppler Radar into Seeeduino XIAO expansion board with a Grove Cable.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 2.")," Connect Seeeduino XIAO to PC via a USB cable.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 3.")," Download the code, please refer to the software part.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 4.")," Run the code and the outcome will display on the screen of ",(0,n.yg)("strong",{parentName:"p"},"Serial Monitor")," in your Arduino IDE .")))),(0,n.yg)("h4",{id:"software"},"Software"),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip"},"Demo code"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 2.")," Copy the whole ",(0,n.yg)("strong",{parentName:"p"},"Seeed_Arduino_DopplerRadar")," file and paste it into your Arduino IDE library file.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 3.")," Open the ",(0,n.yg)("strong",{parentName:"p"},"BGT24LTR11_DETECTION_TARGET")," file with your Arduino IDE.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),"."))),(0,n.yg)("h4",{id:"software-code"},"Software Code"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-C++"},'#include "GBT24LTR11.h"\n\n#ifdef __AVR__\n    #include <SoftwareSerial.h>\n    SoftwareSerial SSerial(2, 3); // RX, TX\n    #define COMSerial SSerial\n    #define ShowSerial Serial\n\n    GBT24LTR11<SoftwareSerial> GBT;\n#endif\n\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n    #define COMSerial Serial1\n    #define ShowSerial SerialUSB\n\n    GBT24LTR11<Uart> GBT;\n#endif\n\n#ifdef ARDUINO_ARCH_STM32F4\n    #define COMSerial Serial\n    #define ShowSerial SerialUSB\n\n    GBT24LTR11<HardwareSerial> GBT;\n#endif\n\nvoid setup() {\n    // put your setup code here, to run once:\n    ShowSerial.begin(9600);\n    COMSerial.begin(115200);\n    GBT.init(COMSerial);\n    while (!ShowSerial)\n        ;\n    while (!COMSerial)\n        ;\n    /*\n        MODE 0 --\x3edetection target mode\n        MODE 1 --\x3eI/Q ADC mode\n    */\n    while (!GBT.setMode(0))\n        ;\n}\n\nvoid loop() {\n    // put your main code here, to run repeatedly:\n    uint16_t state = 0;\n    ShowSerial.print("target speed:");\n    ShowSerial.println(GBT.getSpeed());\n    state = GBT.getTargetState();\n    //2 --\x3e target approach\n    //1 --\x3e target leave\n    //0 --\x3e Not Found target\n    if (state == 2) {\n        ShowSerial.println("target approach");\n    } else if (state == 1) {\n        ShowSerial.println("target leave");\n    }\n    delay(200);\n}\n')),(0,n.yg)("admonition",{type:"success"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"    If everything goes well, you can go to **Serial Monitor** to see an outcome as following:\n"))),(0,n.yg)("div",{align:"center"},(0,n.yg)("figure",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png",alt:"Grove-Doppler-Radar'' OUTCOME",title:"demo"}),(0,n.yg)("figcaption",null,(0,n.yg)("b",null,"Figure 3"),". ",(0,n.yg)("i",null," No object approaching")))),(0,n.yg)("p",null,"And if there's an object approaching the radar or passing by, the outcome will alter as below:"),(0,n.yg)("div",{align:"center"},(0,n.yg)("figure",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png",alt:"Grove-Doppler-Radar'' OUTCOME",title:"demo"}),(0,n.yg)("figcaption",null,(0,n.yg)("b",null,"Figure 3"),". ",(0,n.yg)("i",null,"Object approaching")))),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"The minimum speed accuracy that the sensor is capable of detecting is 52cm/s, which equals to 0.52m/s, 3.6km/h and 2.23mph. Additionally, the results returned by function getSpeed() are multiples of 52cm/s and are absolute values accordingly.\n"))),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[ZIP]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip"},"Demo Code library")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf"},"Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.yg)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);