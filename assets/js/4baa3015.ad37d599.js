"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38640],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>m});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),g=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=g(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=g(r),c=i,m=u["".concat(l,".").concat(c)]||u[c]||d[c]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var g=2;g<a;g++)o[g]=r[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},33439:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>g});var n=r(58168),i=(r(96540),r(15680));const a={description:"Grove - Fingerprint Sensor",title:"Grove - Fingerprint Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Fingerprint_Sensor",last_update:{date:"1/6/2023",author:"jianjing Huang"}},o=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Biometric/Grove-Fingerprint_Sensor",id:"Sensor/Grove/Grove_Sensors/Biometric/Grove-Fingerprint_Sensor",title:"Grove - Fingerprint Sensor",description:"Grove - Fingerprint Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-Fingerprint_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Biometric",slug:"/Grove-Fingerprint_Sensor",permalink:"/Grove-Fingerprint_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-Fingerprint_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{description:"Grove - Fingerprint Sensor",title:"Grove - Fingerprint Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Fingerprint_Sensor",last_update:{date:"1/6/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Capacitive Fingerprint Scanner/Sensor",permalink:"/Grove-Capacitive-Fingerprint-Sensor"},next:{title:"Grove - GSR Sensor",permalink:"/Grove-GSR_Sensor"}},l={},g=[{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:g},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.yg)(u,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Print_Sensor.jpg"})),(0,i.yg)("p",null,"The Finger Print Sensor is one optical fingerprint sensor which will make fingerprint detection and verification adding super simple.There's a high powered DSP chip AS601 that does the image rendering, calculation, feature-finding and searching. You can also enroll new fingers directly - up to 162 finger prints can be stored in the onboard FLASH memory. There's a red LED in the lens which will light up during taking photos so that you know its working condition. It is easy to use and by far the best fingerprint sensor you can get."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("a",{href:"https://www.seeedstudio.com/Grove-Fingerprint-Sensor-p-1424.html",target:"_blank"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png"}))),(0,i.yg)("h2",{id:"specifications"},"Specifications"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Supply voltage: 3.6~6.0 V"),(0,i.yg)("li",{parentName:"ul"},"Operating current(Max)\xa0: 120 mA"),(0,i.yg)("li",{parentName:"ul"},"Fingerprint imaging time: 1.0 S"),(0,i.yg)("li",{parentName:"ul"},"Match Mode: Compare Mode 1:1"),(0,i.yg)("li",{parentName:"ul"},"Search Mode: 1:N"),(0,i.yg)("li",{parentName:"ul"},"Storage capacity: 162 templates"),(0,i.yg)("li",{parentName:"ul"},"False Acceptance Rate\xa0: 0.001% (Security level 3)"),(0,i.yg)("li",{parentName:"ul"},"False Reject Rate \uff1a1.0% (Security level 3)"),(0,i.yg)("li",{parentName:"ul"},"Baud rate \uff1a9600, 19200, 28800, 38400, 57600bps (default is 57600)"),(0,i.yg)("li",{parentName:"ul"},"Interface\uff1aTTL Serial"),(0,i.yg)("li",{parentName:"ul"},"Work Temperature\uff1a-20 ~ +50 \u2103"),(0,i.yg)("li",{parentName:"ul"},"Interface")),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Pin Number"),(0,i.yg)("th",{parentName:"tr",align:null},"Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Type"),(0,i.yg)("th",{parentName:"tr",align:null},"Function Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"1"),(0,i.yg)("td",{parentName:"tr",align:null},"Vin"),(0,i.yg)("td",{parentName:"tr",align:null},"in"),(0,i.yg)("td",{parentName:"tr",align:null},"Positive Power Supply Input Terminal(Line color:Red)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"2"),(0,i.yg)("td",{parentName:"tr",align:null},"TD"),(0,i.yg)("td",{parentName:"tr",align:null},"out"),(0,i.yg)("td",{parentName:"tr",align:null},"Serial data output, TTL logic levels(Line color: Yellow)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"3"),(0,i.yg)("td",{parentName:"tr",align:null},"RD"),(0,i.yg)("td",{parentName:"tr",align:null},"in"),(0,i.yg)("td",{parentName:"tr",align:null},"Serial data input, TTL logic levels(Line color: White)")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"4"),(0,i.yg)("td",{parentName:"tr",align:null},"GND"),(0,i.yg)("td",{parentName:"tr",align:null},"-"),(0,i.yg)("td",{parentName:"tr",align:null},"Signal ground(Line color: Black)")))),(0,i.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,i.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.yg)("th",{parentName:"tr",align:null}),(0,i.yg)("th",{parentName:"tr",align:null}),(0,i.yg)("th",{parentName:"tr",align:null}))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,i.yg)("admonition",{type:"caution"},(0,i.yg)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,i.yg)("h2",{id:"getting-started"},"Getting Started"),(0,i.yg)("p",null,"The Finger Print Sensor module is typically used in safes - there's a high powered DSP chip that does the image rendering, calculation, feature-finding and searching. Connect to any microcontroller or system with TTL serial, and send packets of data to take photos, detect prints, hash and search. You can also enroll new fingers directly - up to 162 finger prints that can be stored in the onboard FLASH memory. There's a red LED in the lens which will light up during taking photos so that you know its working condition."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Connect the Sensor to the Digital Port 2 of the Grove - Base Shield."),(0,i.yg)("li",{parentName:"ul"},"Plug the Grove - Base Shield into Arduino and connect Arduino to PC by using a USB cable.")),(0,i.yg)("p",null,"When you plug in the power, you can see the red LED blink which indicates the sensor is working."),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/FingerPrint_Sensor1.jpg"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Download the ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/Fingerprint_library.rar"},"Finger Print Sensor Library")," and Unzip it into the libraries file of Arduino IDE by the path: ..","\\","arduino-1.0.1","\\","libraries.")),(0,i.yg)("p",null,"The library can enroll and search so its perfect for any project. It can help you get running in under 10 minutes. There are basically two requirements for using the optical fingerprint sensor. First one, you'll need to enroll fingerprints - that means assigning ID ","#","'s to each print so you can query them later. Once you've enrolled all your prints, you can easily 'search' the sensor, asking it to identify which ID (if any) has currently been photographed."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Open the enroll code directly by the path: ",(0,i.yg)("strong",{parentName:"li"},"File->Example->FingerPrint->Enroll"),"."),(0,i.yg)("li",{parentName:"ul"},"Upload the code into Arduino."),(0,i.yg)("li",{parentName:"ul"},"Start up Serial Tool and Select the ComNum and BaudRate used by the Arduino."),(0,i.yg)("li",{parentName:"ul"},'Select the "SendNew" option. Send the ID ',"#"," you want to use. You can use up to 162 ID numbers. And it will ask you to press the finger to the sensor. At the moment, you should see the red LED blink.")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/FingerPrint_Sensor3.jpg"})),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger1.jpg"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If your press is OK, you could see the following message. You will then have to repeat the process, to get a second clean print. Use the same finger! On success you will see the message.")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger2.jpg"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If there's a problem such as a bad print or image, you'll have to do it again.")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger_Print_Score_2.jpg"})),(0,i.yg)("p",null,"Once you have the finger enrolled, it's a good idea to do a quick test to make sure it can be found in the database."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Open the demo code:fingerprint and upload it."),(0,i.yg)("li",{parentName:"ul"},"When prompted, press a different/same finger to the sensor. If it is the same finger, you should get a match with the ID ","#"," as show below.")),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/img/Finger_Print_Score_3.jpg"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"If it is not a finger in the database, This serial port will output nothing.")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"[Library]")," ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/Fingerprint_library.rar"},"Finger Print Sensor Library File")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"[Datasheet]")," ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/ZFM206%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8CV2.1.pdf"},"ZhianTec ZFM-206 Series Datasheet (for this version, but in Simplified Chinese)")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"[Datasheet]")," ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Fingerprint_Sensor/res/ZFM-user-manualV15.pdf"},"ZhianTec ZFM-20 Series Datasheet (for older series, but in English)"))),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);