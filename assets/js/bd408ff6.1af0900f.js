"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86067],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>c});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,c=d["".concat(s,".").concat(m)]||d[m]||g[m]||o;return n?r.createElement(c,i(i({ref:t},u),{},{components:n})):r.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(58168),a=(n(96540),n(15680));const o={description:"Seeeduino Crypto (ATmega4809 ECC608)",title:"Seeeduino Crypto (ATmega4809 ECC608)",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino-Crypto-ATmega4809-ECC608",last_update:{date:"1/31/2023",author:"shuxu hu"}},i=void 0,p={unversionedId:"Sensor/Seeeduino Series/Seeeduino-Crypto-ATmega4809-ECC608",id:"Sensor/Seeeduino Series/Seeeduino-Crypto-ATmega4809-ECC608",title:"Seeeduino Crypto (ATmega4809 ECC608)",description:"Seeeduino Crypto (ATmega4809 ECC608)",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino-Crypto-ATmega4809-ECC608.md",sourceDirName:"Sensor/Seeeduino Series",slug:"/Seeeduino-Crypto-ATmega4809-ECC608",permalink:"/Seeeduino-Crypto-ATmega4809-ECC608",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino-Crypto-ATmega4809-ECC608.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Seeeduino Crypto (ATmega4809 ECC608)",title:"Seeeduino Crypto (ATmega4809 ECC608)",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino-Crypto-ATmega4809-ECC608",last_update:{date:"1/31/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"SeeedStudio GD32 RISC-V Dev Board",permalink:"/SeeedStudio-GD32-RISC-V-Dev-Board"},next:{title:"Seeeduino Arch",permalink:"/Seeeduino_Arch"}},s={},l=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware\xa0Overview",id:"hardwareoverview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:l},d="wrapper";function g(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/Seeed-Crypto-ATmega4809-ECC608-wiki.jpg",alt:"enter image description here"})),(0,a.yg)("p",null,"Seeeduino Crypto is made for encryption. It is based on the high performance ATmega4809 and microchip ECC608 encryption chip.With the help of ECC608 encryption chip, you can experience I2C encryption and other encrypted communication."),(0,a.yg)("p",null,"In addition to encryption, Seeeduino Crypto has the same functions as Seeeduino V4.2 / Arduino Uno Rev3. It has rich interface resources, including 6 analog input pins, 14 digital I/ o-5s for PWM output, with 2 Grove I2C ports and 1 Grove UART port. Just plug it in and use hundreds of sensors and actuators."),(0,a.yg)("p",null,"The control solution Seeeduino Crypto is the same as ARDUINO UNO WIFI REV2. The difference is that Seeeduino Crypto does not have onboard WIFI. You can add an Arduino wifi module if necessary. Correspondingly, the price of Seeeduino Crypto is less than half of ARDUINO UNO WIFI REV2."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"This product allows users to experience the encryption mode of I2C communication with great plasticity.\n"))),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608-p-4369.html"},(0,a.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:"enter image description here"}))),(0,a.yg)("h2",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"High-performance ATmega4809 microcontroller ")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"High-securitycryptographic Chip ECC608, supports SHA-256 & HMAC Hash / AES-128")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"2 Grove I2C + 1 Grove UART, easy to prototype")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Type C power supply + data transmit"))),(0,a.yg)("h2",{id:"specification"},"Specification"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Item"),(0,a.yg)("th",{parentName:"tr",align:null},"Detail"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Chip"),(0,a.yg)("td",{parentName:"tr",align:null},"Microcontroller: ATMEGA4809-AFR   / Encryption: ECC608")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Clock Speed"),(0,a.yg)("td",{parentName:"tr",align:null},"16Mhz")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"I/O Resource"),(0,a.yg)("td",{parentName:"tr",align:null},"Analog Input Channels: 6  /Digital I/O Pins: 14 / PWM Channels: 5")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Peripheral Interface"),(0,a.yg)("td",{parentName:"tr",align:null},"2 Grove I2C Port / 1 Grove UART Port / 1 ICSP Interface /1 USB Type C data port")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,a.yg)("td",{parentName:"tr",align:null},"5V")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Power Supply"),(0,a.yg)("td",{parentName:"tr",align:null},"5V USB Type C / 8 -15 V DC Jack Input")))),(0,a.yg)("h2",{id:"hardwareoverview"},"Hardware\xa0Overview"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/Hardware-figure.jpg",alt:"enter image description here"})),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Type C")," It is the board Type C interface, connected to the PC end, used as power supply and download.  ")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"LED RX / LED TX")," Serial communication indicator LEDS TX,RX, Convenient for users to know the receiving and receiving status of serial communication.  ")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"DC Power Jack")," The input voltage is 8v-15v.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Reset Button and Reset LED")," Used to reset the board, when reset, the reset lamp will flicker.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Power LED")," The system power indicator.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"ATMEGA32U4-MU Chip")," The chip used as a USB to UPDI download is connected to the master MCU atmega4809-afr to burn the program to the master MCU.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"ATECC608 Encryption Chip")," An encryption chip for I2C communication.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"ATMEGA4809-AFR Chip")," Onboard MCU, as the main control chip of the system.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Grove Connectors")," Contains two I2C and a UART standard Grove interface"))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"When using serial port to communicate the output data, there should be a certain delay of more than 25ms, otherwise the serial port may be stuck.\n"))),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"This part is based on Arduino 1.8.10 under Windows 10.\n"))),(0,a.yg)("p",null,"First of all, you need to Install an Arduino Software."),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},(0,a.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png",alt:"enter image description here"}))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Launch the Arduino application")),(0,a.yg)("p",null,"Double-click the Arduino application (arduino.exe) you have previously downloaded."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.\n"))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Open the Blink example")),(0,a.yg)("p",null,"Open the LED blink example sketch: ",(0,a.yg)("strong",{parentName:"p"},"File > Examples >01.Basics > Blink"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/select-blink.png",alt:"enter image description here"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Add Seeeduino to your Arduino IDE")),(0,a.yg)("p",null,"Click on ",(0,a.yg)("strong",{parentName:"p"},"Tools > Board > Boards Manager"),", you can tap the keyword 'MegaAVR' at the search bar , find\xa0",(0,a.yg)("strong",{parentName:"p"},"Arduino\xa0MegaAVR"),",\xa0and\xa0Install\xa0it."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/install.png",alt:"enter image description here"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Select your board")),(0,a.yg)("p",null,"You'll need to select the entry in the ",(0,a.yg)("strong",{parentName:"p"},"Tools > Board")," menu that corresponds to your Arduino.\nSelecting a ",(0,a.yg)("strong",{parentName:"p"},"Arduino Uon WIFI Rev2"),"."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/board.png",alt:"enter image description here"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Select your serial port")),(0,a.yg)("p",null,"Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (",(0,a.yg)("strong",{parentName:"p"},"COM1")," and ",(0,a.yg)("strong",{parentName:"p"},"COM2")," are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port."),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/img/port.png",alt:"enter image description here"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Upload the program")),(0,a.yg)("p",null,'Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.'),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png",alt:"enter image description here"})),(0,a.yg)("p",null,"A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions."),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Schematic"),"    "),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/Seeeduino-Crypto-(ATmega4809%26ECC608).zip"},"Seeeduino Crypto Schematic Diagram"),"  ")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Data Sheet")),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATECC608A-MAHDA-S-datasheet.pdf"},"ATECC608A-MAHDA-S Datasheet")),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATMEGA32U4-MU-datasheet.pdf"},"ATMEGA32U4-MU Datasheet")),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino-Crypto-ATmega4809-ECC608-/res/ATMEGA4809-AFR-datasheet.pdf"},"ATMEGA4809-AFR Datasheet"),"  ")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"References")),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("a",{parentName:"p",href:"https://www.arduino.cc/en/Guide/HomePage"},"Getting Started with Arduino")),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("a",{parentName:"p",href:"https://www.arduino.cc/en/Reference/HomePage"},"Arduino Language Reference")),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},"Download the Arduino Software(IDE)")),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/FAQ"},"Arduino FAQ")),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("a",{parentName:"p",href:"https://www.arduino.cc/en/guide/introduction"},"Arduino Introduction")),(0,a.yg)("p",{parentName:"li"}," ",(0,a.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Arduino"},"Wikipedia page for Arduino")))),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);