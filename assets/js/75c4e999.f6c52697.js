"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5930],{15680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>m});var n=o(96540);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(o),c=i,m=d["".concat(l,".").concat(c)]||d[c]||g[c]||r;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<r;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},3962:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=o(58168),i=(o(96540),o(15680));const r={title:"Wio RP2040 mini Dev Board with Arduino",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-RP2040-with-Arduino-WIFI/",slug:"/Wio-RP2040-with-Arduino-WIFI",last_update:{date:"01/11/2022",author:"gunengyu"}},a="**Wio RP2040 mini Dev Board with Arduino**",s={unversionedId:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Wio-RP2040-with-Arduino-WIFI",id:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Wio-RP2040-with-Arduino-WIFI",title:"Wio RP2040 mini Dev Board with Arduino",description:"Here we gonna use Wio RP2040 mini Dev Board to transmit data through MQTT and Socket with Arduino.",source:"@site/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Wio-RP2040-with-Arduino-WIFI.md",sourceDirName:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board",slug:"/Wio-RP2040-with-Arduino-WIFI",permalink:"/Wio-RP2040-with-Arduino-WIFI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Wio-RP2040-with-Arduino-WIFI.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Wio RP2040 mini Dev Board with Arduino",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-RP2040-with-Arduino-WIFI/",slug:"/Wio-RP2040-with-Arduino-WIFI",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Get Started with Wio RP2040 mini Dev Board",permalink:"/Wio_RP2040_mini_Dev_Board-Onboard_Wifi"},next:{title:"LAN_Communications",permalink:"/LAN_Communications"}},l={},p=[{value:"<strong>Hardware</strong>",id:"hardware",level:2},{value:"<strong>Software</strong>",id:"software",level:2},{value:"<strong>Communicate with MQTT</strong>",id:"communicate-with-mqtt",level:3},{value:"<strong>Configure the MQTT server</strong>",id:"configure-the-mqtt-server",level:4},{value:"<strong>Arduino code with MQTT</strong>",id:"arduino-code-with-mqtt",level:4},{value:"<strong>Communicate with Socket</strong>",id:"communicate-with-socket",level:3},{value:"<strong>Configure the TCP server</strong>",id:"configure-the-tcp-server",level:4},{value:"<strong>Arduino code with Socket</strong>",id:"arduino-code-with-socket",level:4},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},d="wrapper";function g(e){let{components:t,...o}=e;return(0,i.yg)(d,(0,n.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"wio-rp2040-mini-dev-board-with-arduino"},(0,i.yg)("strong",{parentName:"h1"},"Wio RP2040 mini Dev Board with Arduino")),(0,i.yg)("p",null,"Here we gonna use Wio RP2040 mini Dev Board to transmit data through MQTT and Socket with Arduino. "),(0,i.yg)("h2",{id:"hardware"},(0,i.yg)("strong",{parentName:"h2"},"Hardware")),(0,i.yg)("p",null,"Materials required"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html"},"Wio RP2040 mini Dev Board")," x1"),(0,i.yg)("li",{parentName:"ul"},"Computer x1"),(0,i.yg)("li",{parentName:"ul"},"USB typc C cable x1")),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre"},"Some USB cables can only supply power and cannot transfer data. If you don't have a USB cable or don't know if your USB cable can transmit data, you can check [seeed USB type C support USB 3.1](https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html).\n"))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 1. Prepare a Wio RP2040 mini Dev Board and a Type-C cable."),(0,i.yg)("li",{parentName:"ul"},"Step 2. ",(0,i.yg)("strong",{parentName:"li"},"Press and hold")," the 'boot' button while you are going to connect the board to computer. ")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 3. Connect and check if a disk appears on the computer.")),(0,i.yg)("p",null,"If all goes well, the red power LED on Wio RP2040 mini Dev Board should be turn on and a disk should appear on the computer."),(0,i.yg)("h2",{id:"software"},(0,i.yg)("strong",{parentName:"h2"},"Software")),(0,i.yg)("p",null,"Before we start to upload the code and transmit data, you may want to set up the server first."),(0,i.yg)("h3",{id:"communicate-with-mqtt"},(0,i.yg)("strong",{parentName:"h3"},"Communicate with MQTT")),(0,i.yg)("p",null,"MQTT is a Client-Server publish/subscribe messaging transport protocol. Clients can use it as a publisher, a subscriber, or both."),(0,i.yg)("h4",{id:"configure-the-mqtt-server"},(0,i.yg)("strong",{parentName:"h4"},"Configure the MQTT server")),(0,i.yg)("p",null,"Download the ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/emqx/MQTTX/"},"MQTTX server software")," and install it on the computer, and then configure the MQTT server. If you can not download the server through the website in your country/region, please prepare the MQTT server by yourself."),(0,i.yg)("hr",null),(0,i.yg)("p",null,'We will use the free server of "mqtt.p2hp.com" in this project.'),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Online server")," "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Address: mqtt.p2hp.com"),(0,i.yg)("li",{parentName:"ul"},"Ports: 1883 (TCP), 8083 (WebSocket)"),(0,i.yg)("li",{parentName:"ul"},"Type: EMQ"),(0,i.yg)("li",{parentName:"ul"},"MQTT V3.1.1/V5.0 compatible")),(0,i.yg)("hr",null),(0,i.yg)("p",null,'Enter the MQTTX software to create a new connection, fill in the name, server, port, subject, and then click "Connect" to connect to the server.'),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png",alt:"image.png"})),(0,i.yg)("p",null,"After the connection is successful, there will be a pop-up in the upper right corner of the software."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_13.png",alt:"image.png"})),(0,i.yg)("p",null,"Then set the topic and message below. In this project, we use MQTT to receive or send the messages with Wio RP2040 mini Dev Board. "),(0,i.yg)("p",null,"Fill in the 'topic' as \"temperature\"."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre"},"The 'topic' we wirte here is very improtant. Publisher or subscriber can not transmit data unless the 'topics' between them are the same. You will find out more when you upload the code.\n"))),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window5.png",alt:null})),(0,i.yg)("p",null,"Preparations have been completed and the MQTT server is set up. Now we are going to upload the code."),(0,i.yg)("h4",{id:"arduino-code-with-mqtt"},(0,i.yg)("strong",{parentName:"h4"},"Arduino code with MQTT")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre"},"If this is your first time using Arduino, we highly recommend you to refer to [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/).\n"))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1. Install an Arduino Software"))),(0,i.yg)("p",{style:{}},(0,i.yg)("a",{href:"https://www.arduino.cc/en/software",target:"_blank"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png"}))),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Launch the Arduino application")),(0,i.yg)("p",null,"Double-click the Arduino application (arduino.exe) you have previously downloaded."),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre"},"If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.\n"))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2. Download and open the MQTT example"))),(0,i.yg)("p",null,"You can download ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/MQTT.ino"},"MQTT.ino")," here and open it. "),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3. Add Wio RP2040 mini Dev Board to your Arduino IDE"))),(0,i.yg)("p",null,"Click on ",(0,i.yg)("strong",{parentName:"p"},"File > Preference"),", and fill Additional Boards Manager URLs with the URL below: "),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json"},"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window2.png",alt:null})),(0,i.yg)("p",null,"Click ",(0,i.yg)("strong",{parentName:"p"},"Tools-> Board-> Boards Manager..."),', and write the keyword "',(0,i.yg)("strong",{parentName:"p"},"XIAO RP2040"),'" in the searching blank. Find the "Seeed XIAO RP2040" and install it.'),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl2.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 4. Select the corresponding board"))),(0,i.yg)("p",null,"After installing the board, click ",(0,i.yg)("strong",{parentName:"p"},"Tools-> Board"),', find "',(0,i.yg)("strong",{parentName:"p"},"Wio RP2040 Mini Dev Board"),'" and select it.'),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window3.png",alt:null})),(0,i.yg)("p",null,"Once the board is connected to the computer, there is ",(0,i.yg)("strong",{parentName:"p"},"no need")," to select a port. Because the computer will write a ",(0,i.yg)("strong",{parentName:"p"},".uf2 file")," to the board at the first uploading, after that it will automatically select the port."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 5. Upload the program"),"\nYou can now upload the code and open MQTTX to see the results.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window6.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Furthermore"))),(0,i.yg)("p",null,"If you send some messages through MQTT, you may see it on Serial Monitor in Arduino, as long as the 'topics' between them are the same."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window16.png",alt:null})),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window8.png",alt:null})),(0,i.yg)("h3",{id:"communicate-with-socket"},(0,i.yg)("strong",{parentName:"h3"},"Communicate with Socket")),(0,i.yg)("p",null,"Now we try using a computer to build a TCP server to send or receive messages through Socket. The software we used here is ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/NetAssist.exe"},"NetAssist"),"."),(0,i.yg)("h4",{id:"configure-the-tcp-server"},(0,i.yg)("strong",{parentName:"h4"},"Configure the TCP server")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Double click the downloaded '.exe' file and open NetAssist.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Select 'TCP Server' in the upper left corner to set the 'Protocol'.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Fill in the 'Local host addr' and 'Local host port' below.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Once all is set up, click 'Open' to enter the Server."))),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre"},"The **'Local host addr'** and **'Local host port'** here are improtant as well as the **'topic'** in MQTT. You wouldn't get the message unless these parameters are the same as the code.\n"))),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window14.png",alt:null})),(0,i.yg)("p",null,"Preparations have been completed and the MQTT server is set up. Now we are going to upload the code."),(0,i.yg)("h4",{id:"arduino-code-with-socket"},(0,i.yg)("strong",{parentName:"h4"},"Arduino code with Socket")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1. Download and open the Socket example"))),(0,i.yg)("p",null,"You can download ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Socket.ino"},"Socket.ino")," here and open it. "),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window10.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2. Select the corresponding board"))),(0,i.yg)("p",null,"After installing the board, click ",(0,i.yg)("strong",{parentName:"p"},"Tools-> Board"),', find "',(0,i.yg)("strong",{parentName:"p"},"Wio RP2040 Mini Dev Board"),'" and select it.'),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window3.png",alt:null})),(0,i.yg)("p",null,"Once the board is connected to the computer, there is ",(0,i.yg)("strong",{parentName:"p"},"no need")," to select a port. Because the computer will write ",(0,i.yg)("strong",{parentName:"p"},".uf2 file")," to the board at the first uploading, after that it will automatically select the port."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3. Upload the program"),"\nYou can now upload the code and open NetAssist to see the results.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window13.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Furthermore"))),(0,i.yg)("p",null,"If you send some messages through NetAssist, you may see it on NetAssist, as long as the 'Local Host Addr' and 'Local Host Port' between them are the same."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window15.png",alt:null})),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/window11.png",alt:null})),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null," if you have any technical issue.  submit the issue into our ",(0,i.yg)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),".\nThank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);