"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77765],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>c});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=g(n),u=a,c=p["".concat(s,".").concat(u)]||p[u]||y[u]||o;return n?r.createElement(c,l(l({ref:t},d),{},{components:n})):r.createElement(c,l({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var g=2;g<o;g++)l[g]=n[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>g});var r=n(58168),a=(n(96540),n(15680));const o={description:"Configure the 12V RS485 Sensor",title:"Configure the 12V RS485 Sensor",keywords:["SenseCAP data logger"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"4/12/2023",author:"Yvonne"}},l="Getting S2100 started with 12V RS485 Sensor",i={unversionedId:"Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger",id:"Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger",title:"Configure the 12V RS485 Sensor",description:"Configure the 12V RS485 Sensor",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial",slug:"/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger",permalink:"/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1681257600,formattedLastUpdatedAt:"Apr 12, 2023",frontMatter:{description:"Configure the 12V RS485 Sensor",title:"Configure the 12V RS485 Sensor",keywords:["SenseCAP data logger"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S.png",last_update:{date:"4/12/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP S2100 LoRaWAN Data Logger",permalink:"/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger"},next:{title:"Configure the Analog Sensor",permalink:"/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger"}},s={},g=[{value:"Get these items ready",id:"get-these-items-ready",level:2},{value:"Disassemble the Data Logger",id:"disassemble-the-data-logger",level:2},{value:"Power supply options of sensor",id:"power-supply-options-of-sensor",level:2},{value:"Connect to the junction box",id:"connect-to-the-junction-box",level:2},{value:"Connect to the Sensor",id:"connect-to-the-sensor-1",level:2},{value:"Connect to Sensor through App",id:"connect-to-sensor-through-app",level:2},{value:"Configure basic parameters through App",id:"configure-basic-parameters-through-app",level:2},{value:"Select the Platform and Frequency",id:"select-the-platform-and-frequency",level:3},{value:"Set the Interval",id:"set-the-interval",level:3},{value:"Set the Packet Policy",id:"set-the-packet-policy",level:3},{value:"Restore Factory Setting",id:"restore-factory-setting",level:3},{value:"Configure RS485 Modbus-RTU Sensor via App",id:"configure-rs485-modbus-rtu-sensor-via-app",level:2},{value:"Bind Sensor to SenseCAP Portal",id:"bind-sensor-to-sensecap-portal",level:2},{value:"Check Data on SenseCAP Portal",id:"check-data-on-sensecap-portal",level:2}],d={toc:g},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"getting-s2100-started-with-12v-rs485-sensor"},"Getting S2100 started with 12V RS485 Sensor"),(0,a.yg)("p",null,"Let's get started on learning how to use the S2100 with a 12V RS485 sensor. Once we've got that down, we'll move on to the basics of S2100's application. This will give you a good idea of how to connect your own customized sensor in the future. "),(0,a.yg)("h2",{id:"get-these-items-ready"},"Get these items ready"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Data Logger"),(0,a.yg)("li",{parentName:"ul"},"ONE Compact Weather Station Sensor(as an example)"),(0,a.yg)("li",{parentName:"ul"},"Junction box"),(0,a.yg)("li",{parentName:"ul"},"M12 cable"),(0,a.yg)("li",{parentName:"ul"},"8 pin wire(40cm)"),(0,a.yg)("li",{parentName:"ul"},"Cross screwdriver(Cross recess No.2)"),(0,a.yg)("li",{parentName:"ul"},"SenseCAP Mate APP",(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/2.png"})))),(0,a.yg)("h1",{id:"connect-to-the-sensor"},"Connect to the Sensor"),(0,a.yg)("p",null,"First, we need to do the wiring. Please follow the below steps."),(0,a.yg)("h2",{id:"disassemble-the-data-logger"},"Disassemble the Data Logger"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Unscrew three screws.")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png"})),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Take down the cover.")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png"})),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Remove the threaded cap and pass it through the cable of the sensor, pass it through the bottom cover, and connect it to the wiring terminal.")),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png"})),"## Wiring terminal description |**No.**|**Pin**|**Description**| | - | - | - | |1|12V|",(0,a.yg)("p",null,"External 12V input voltage. The Data Logger can be powered by an external 12V DC power supply."),(0,a.yg)("p",null,"When using 12V power supply, the battery will serve as backup power supply."),"| |2|5V|5V output voltage, providing 5V voltage to the sensor.| |3|3V|3V output voltage, providing 3V voltage to the sensor.| |4|IO|Acquisition level or pulse input| |5|V1|The voltage input of 0 to 10V is collected| |6|V2|The voltage input of 0 to 10V is collected| |7|A|RS485 A/+| |8|B|RS485 B/-| |9|I1|Collect the current input from 4 to 20mA| |10|I2|Collect the current input from 4 to 20mA| |11|GND|Ground pin| |12|GND|Ground pin|",(0,a.yg)("h2",{id:"power-supply-options-of-sensor"},"Power supply options of sensor"),(0,a.yg)("p",null,"Data Logger supports two power supply modes, we choose the External 12V DC mode here:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Mode")),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Description")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Built-in Battery"),(0,a.yg)("td",{parentName:"tr",align:null},"The Data Logger and sensors are powered by batteries. In this case, the Data Logger can be connected to a 5V sensor.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"External 12V DC"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,"Supply power to Data Logger and sensor through external 12V power supply. When the external 12V is disconnected, the system switches to battery power. "),(0,a.yg)("p",null,"When using external 12V power supply, use it together with the junction box to ensure the waterproof performance of the device."))))),(0,a.yg)("h2",{id:"connect-to-the-junction-box"},"Connect to the junction box"),(0,a.yg)("p",null,"Wire sequence of M12 cable:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/6.png"})),(0,a.yg)("p",null,"When your sensor needs 12V power, the battery will not be able to drive the sensor. Therefore, an external 12V power supply is required."),(0,a.yg)("p",null,"1) Prepare the following items: 12V DC adapter, Junction box, and 8-pin wire(we only need 4 pins here).\n2) Wire to the terminal of the Data Logger."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/7.png"})),(0,a.yg)("p",null,"Connect the cover, rubber ring and screw cap in turn."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/8.png"})),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/9.png"})),(0,a.yg)("p",null,"3) Wire to the terminal of the junction box."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/10.png"})),(0,a.yg)("p",null,"4) Connect the M12 sensor wire to the junction box."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/11.png"})),(0,a.yg)("p",null,"5) Connect the 12V DC adapter to the power supply."),(0,a.yg)("h2",{id:"connect-to-the-sensor-1"},"Connect to the Sensor"),(0,a.yg)("p",null,"Now we'll move on to connecting the sensor after successfully connecting the transfer box to the S2100 in the previous process.\nFirst, we need to learn about the wire sequence of ONE Compact Weather Station Sensor:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/12.png"})),(0,a.yg)("p",null,"The device adopts an M12 8-pin connector, the different colored pins provide power and data communication (as shown in the above diagram)."),(0,a.yg)("p",null,"When working with the RS-485, you can connect only 4 wires (not using a heating function), and the rest can be individually wrapped with tape to prevent short circuit."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/13.png"})),(0,a.yg)("p",null,"The holes of the cable and the pins of the device connector ",(0,a.yg)("strong",{parentName:"p"},"must be aligned")," when the cable is plugged in."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/14.png"})),(0,a.yg)("p",null,"Plugin the cable and tighten it clockwise"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/15.png"})),(0,a.yg)("p",null,"To complete the assembly."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/16.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Tighten the screws and screw caps")," ",(0,a.yg)("strong",{parentName:"p"},"to check the waterproofing"),". If the wire diameter is too thin, add waterproof tape for winding."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/17.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"*","Note:")," When assembling the device, it is necessary to install the waterproof pad of the Data Logger and the adapter box, and tighten the screw cap and screw, otherwise the waterproof effect of the device may be affected!"),(0,a.yg)("p",null,"If the wire diameter is too small, it can be wrapped with waterproof tape, as shown below:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/18.png"})),(0,a.yg)("p",null," We've finished the wiring at this point. Now, let's set up the S2100 and configure it on our APP."),(0,a.yg)("h1",{id:"setup-the-s2100"},"Setup the S2100"),(0,a.yg)("h2",{id:"connect-to-sensor-through-app"},"Connect to Sensor through App"),(0,a.yg)("p",null,"1) Press button and hold for ",(0,a.yg)("strong",{parentName:"p"},"3 seconds"),", the LED will flash at 1s frequency. Please use the App to connect the sensor within 1 minute; otherwise, the device will power off or reboot."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/19.png"})),(0,a.yg)("p",null,"2) Please select \u201cS2100 Data Logger\u201d."),(0,a.yg)("p",null,"Please click the \u201cSetup\u201d button to turn on Bluetooth and click \u201cScan\u201d to start scanning the sensor's Bluetooth."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/20.png"})),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/21.png"})),(0,a.yg)("p",null,"3) Select the Sensor by S/N (S/N is on the front label of the sensor). Then, the basic information of the sensor will be displayed after entering."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/22.png"})),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/23.png"})),(0,a.yg)("p",null,"4) Enter configuration mode after Bluetooth connection is successful: LED flashes at 2s frequency."),(0,a.yg)("h2",{id:"configure-basic-parameters-through-app"},"Configure basic parameters through App"),(0,a.yg)("h3",{id:"select-the-platform-and-frequency"},"Select the Platform and Frequency"),(0,a.yg)("p",null,"S210x Sensors are manufactured to support universal frequency plan from 863MHz ~928MHz in one SKU. That is to say, every single device can support 7 frequency plans."),(0,a.yg)("p",null,"Here we select the \u201cSenseCAP for Helium\u201d or \u201cSenseCAP for TTN\u201d. The Frequency Plan is based on your actual situation."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"*","Note:")," Data Logger can upload data when there is a Helium network around the user. It runs on SenseCAP private Helium Console. Users do not need to create a device on the Helium Console;"),(0,a.yg)("p",null,"SenseCAP for TTN platform needs to be used with SenseCAP LoRaWAN outdoor gateway(",(0,a.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html"},"https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html"),")"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/25.png"})),(0,a.yg)("h3",{id:"set-the-interval"},"Set the Interval"),(0,a.yg)("p",null,"The working mode of device: wake up the device every interval and collect measurement values and upload them through LoRa.  "),(0,a.yg)("p",null,"For example, the device collects and uploads data ",(0,a.yg)("strong",{parentName:"p"},"every 60 minutes by default"),"."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/26.png"})),(0,a.yg)("h3",{id:"set-the-packet-policy"},"Set the Packet Policy"),(0,a.yg)("p",null,"The sensor uplink packet strategy has three modes, we select 1N here or you can according to your own requirement."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/27.png"})),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Parameter")),(0,a.yg)("th",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"th"},"Description")))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"2C+1N (default)"),(0,a.yg)("td",{parentName:"tr",align:null},"2C+1N (2 confirm packets and 1 none-confirm) is the best strategy, the mode can minimize the packet loss rate, however the device will consume the most data packet in TTN, or date credits in Helium network.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1C"),(0,a.yg)("td",{parentName:"tr",align:null},"1C (1 confirm) the device will sleep after get 1 received confirm packet from server.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"1N"),(0,a.yg)("td",{parentName:"tr",align:null},"1N (1 none-confirm) the device only send packet and then start to sleep, no matter the server received the data or not.")))),(0,a.yg)("h3",{id:"restore-factory-setting"},"Restore Factory Setting"),(0,a.yg)("p",null,"When selecting the SenseCAP platform, you must use the fixed EUI/App EUI/App Key. Therefore, you need to restore the factory Settings before switching back to the SenseCAP platform from other platforms."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/28.png"})),(0,a.yg)("p",null,"When we make a mistake or want to reset everything, we can click the button. The device will be restored to the factory's default configuration."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"*","Note:")," The \u201cRestore Factory\u201d function can only reset the Basic Setting."),(0,a.yg)("h2",{id:"configure-rs485-modbus-rtu-sensor-via-app"},"Configure RS485 Modbus-RTU Sensor via App"),(0,a.yg)("p",null,"Select the \u201cProtocol\u201d as \u201cRS485 Modbus RTU\u201d. Then set the following parameters in turn."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/29.png"})),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Baud Rate"),(0,a.yg)("th",{parentName:"tr",align:null},"Baud rate of communication with the sensor. Select ",(0,a.yg)("strong",{parentName:"th"},"9600")," here."))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Modbus Address"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,"The default address is 10 for Five in ONE, 20 for Seven in ONE, 38 for Nine in ONE, and 43 for Ten in ONE."),(0,a.yg)("p",null,"Slave address of the sensor. The range is 1 to 247. Enter ",(0,a.yg)("strong",{parentName:"td"},"20")," here."))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Power Type"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,"Periodic power: Power the sensor before data collection, and power off the sensor after data collection. This mode reduces power consumption and increases battery life."),(0,a.yg)("p",null,"Select ",(0,a.yg)("strong",{parentName:"td"},"Always on"),"."))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Power Voltage"),(0,a.yg)("td",{parentName:"tr",align:null},"Select the supply ",(0,a.yg)("strong",{parentName:"td"},"12V")," voltage to the sensor.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Sensor Warm-up Time"),(0,a.yg)("td",{parentName:"tr",align:null},"The warm-up time denotes the amount of time it takes for the sensor to attain its highest accuracy or performance level once the voltage supply has been applied. Enter ",(0,a.yg)("strong",{parentName:"td"},"200ms")," generally.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Response Timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"After Data Logger initiates a data read request to the sensor, it waits for the timeout time for a response. If this time is exceeded, the command will be resent; ",(0,a.yg)("strong",{parentName:"td"},"5(","*","100ms)")," would be ok.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Startup Time"),(0,a.yg)("td",{parentName:"tr",align:null},"The length of time the sensor can communicate from powered -on to communicating with Modbus. Range of ",(0,a.yg)("strong",{parentName:"td"},"10","*","(100ms)")," would be ok.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Measurement Number"),(0,a.yg)("td",{parentName:"tr",align:null},"Collect 0 to 10 measurements in RS485 mode. Since the sensor has seven kinds of sensor registers. We select ",(0,a.yg)("strong",{parentName:"td"},"7")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Work Mode"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"Periodic collect")," mode: Periodically collect and upload data.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Measurement Setting"),(0,a.yg)("td",{parentName:"tr",align:null},"Set the register of the measurement value and other configurations.")))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Measurement Setting")),(0,a.yg)("p",null,"Set each measurement in turn. Measurement1 (",(0,a.yg)("strong",{parentName:"p"},"Air temperature"),")"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Register Address"),(0,a.yg)("th",{parentName:"tr",align:null},"The register address of the measured value in the sensor, which is an integer. The Air temperature register address is 0.Enter ",(0,a.yg)("strong",{parentName:"th"},"0")," here."))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Function Code"),(0,a.yg)("td",{parentName:"tr",align:null},"Modbus function code, select ",(0,a.yg)("strong",{parentName:"td"},"03")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Data Type"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,"The data type determines the number of registers read from the sensor and how the data should parse the value. "),(0,a.yg)("p",null,"Select ",(0,a.yg)("strong",{parentName:"td"},"Signed 32bit integer, 0xABCD")," here."))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Precision"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,"Precision of the value. You can choose the decimal place of the measurement value. If 1 is selected, one decimal place is reserved."),(0,a.yg)("p",null,"Select ",(0,a.yg)("strong",{parentName:"td"},"2, #.##")," here."))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Y= Ax + B"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,"\u201cY\u201d: It is the value of Data Logger will upload. "),(0,a.yg)("p",null,"\u201cx\u201d: It is the original current value. "),(0,a.yg)("p",null,"Factory A: Custom values that can be scaled up or down by multiples of the \u201cx\u201d. "),(0,a.yg)("p",null,"Factory B: A custom value that increments or diminishes the value of the \u201cx\u201d."),(0,a.yg)("p",null,"By setting the values of A and B, you can calculate the desired value. If only raw values are uploaded, set A=1 and B=0."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"td"},"Factory A is 0.001 and Factory B is 0.")))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Write Strategy"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("p",null,"This function is enabled only for some special sensors and is generally disabled by default"),(0,a.yg)("p",null,"After reading the value of the register, special instructions can be issued to the sensor, such as the instruction to empty the register after reading register 0."),(0,a.yg)("p",null,"None: Off by default."),(0,a.yg)("p",null,"After Read: Send the RS485 command to sensor after reading the register."),(0,a.yg)("p",null,"On New Data: Send the RS485 command to sensor every 24 hours."),(0,a.yg)("p",null,"We don\u2019t need to write strategy so we select ",(0,a.yg)("strong",{parentName:"td"},"None")," here."))))),(0,a.yg)("p",null,"Measurement2 (",(0,a.yg)("strong",{parentName:"p"},"Air humidity"),")"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Register Address"),(0,a.yg)("th",{parentName:"tr",align:null},"Enter ",(0,a.yg)("strong",{parentName:"th"},"2")," here."))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Function Code"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"03")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Data Type"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"Signed 32bit integer, 0xABCD")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Precision"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"2, #.##")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Y= Ax + B"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Factory A is 0.001 and Factory B is 0."))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Write Strategy"),(0,a.yg)("td",{parentName:"tr",align:null},"We don\u2019t need to write strategy so we select ",(0,a.yg)("strong",{parentName:"td"},"None")," here.")))),(0,a.yg)("p",null,"Measurement3 (",(0,a.yg)("strong",{parentName:"p"},"Barometric pressure"),")"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Register Address"),(0,a.yg)("th",{parentName:"tr",align:null},"Enter ",(0,a.yg)("strong",{parentName:"th"},"4")," here."))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Function Code"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"03")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Data Type"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"Signed 32bit integer, 0xABCD")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Precision"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"0, #")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Y= Ax + B"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Factory A is 0.001 and Factory B is 0."))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Write Strategy"),(0,a.yg)("td",{parentName:"tr",align:null},"We don\u2019t need to write strategy so we select ",(0,a.yg)("strong",{parentName:"td"},"None")," here.")))),(0,a.yg)("p",null,"Measurement4 (",(0,a.yg)("strong",{parentName:"p"},"Light intensity"),")"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Register Address"),(0,a.yg)("th",{parentName:"tr",align:null},"Enter ",(0,a.yg)("strong",{parentName:"th"},"6")," here."))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Function Code"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"03")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Data Type"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"Signed 32bit integer, 0xABCD")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Precision"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"0, #")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Y= Ax + B"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Factory A is 0.001 and Factory B is 0."))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Write Strategy"),(0,a.yg)("td",{parentName:"tr",align:null},"We don\u2019t need to write strategy so we select ",(0,a.yg)("strong",{parentName:"td"},"None")," here.")))),(0,a.yg)("p",null,"Measurement5 (",(0,a.yg)("strong",{parentName:"p"},"Average wind direction"),")"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Register Address"),(0,a.yg)("th",{parentName:"tr",align:null},"Enter ",(0,a.yg)("strong",{parentName:"th"},"12")," here."))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Function Code"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"03")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Data Type"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"Signed 32bit integer, 0xABCD")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Precision"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"1, #.#")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Y= Ax + B"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Factory A is 0.001 and Factory B is 0."))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Write Strategy"),(0,a.yg)("td",{parentName:"tr",align:null},"We don\u2019t need to write strategy so we select ",(0,a.yg)("strong",{parentName:"td"},"None")," here.")))),(0,a.yg)("p",null,"Measurement6 (",(0,a.yg)("strong",{parentName:"p"},"Average wind speed"),")"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Register Address"),(0,a.yg)("th",{parentName:"tr",align:null},"Enter ",(0,a.yg)("strong",{parentName:"th"},"18")," here."))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Function Code"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"03")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Data Type"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"Signed 32bit integer, 0xABCD")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Precision"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"1, #.#")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Y= Ax + B"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Factory A is 0.001 and Factory B is 0."))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Write Strategy"),(0,a.yg)("td",{parentName:"tr",align:null},"We don\u2019t need to write strategy so we select ",(0,a.yg)("strong",{parentName:"td"},"None")," here.")))),(0,a.yg)("p",null,"Measurement7 (",(0,a.yg)("strong",{parentName:"p"},"Rain intensity"),")"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Register Address"),(0,a.yg)("th",{parentName:"tr",align:null},"Enter ",(0,a.yg)("strong",{parentName:"th"},"24")," here."))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Function Code"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"03")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Data Type"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"Signed 32bit integer, 0xABCD")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Precision"),(0,a.yg)("td",{parentName:"tr",align:null},"Select ",(0,a.yg)("strong",{parentName:"td"},"1, #.#")," here.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Y= Ax + B"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("strong",{parentName:"td"},"Factory A is 0.001 and Factory B is 0."))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Write Strategy"),(0,a.yg)("td",{parentName:"tr",align:null},"We don\u2019t need to write strategy so we select ",(0,a.yg)("strong",{parentName:"td"},"None")," here.")))),(0,a.yg)("p",null,'After the configuration information is completed, click "Back to Home" (at this time, the node and the APP Bluetooth will be automatically disconnected), and the Data Logger will try to connect to the network (the LED indicator flashes red slowly when trying to connect to the network, and flashes green quickly after the network is successfully connected);'),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/30.png"})),(0,a.yg)("h1",{id:"check-data-on-the-sensecap-portal"},"Check data on the SenseCAP Portal"),(0,a.yg)("h2",{id:"bind-sensor-to-sensecap-portal"},"Bind Sensor to SenseCAP Portal"),(0,a.yg)("p",null,"Please open SenseCAP Mate App."),(0,a.yg)("p",null,"1) ",(0,a.yg)("strong",{parentName:"p"},"Scan QR Code"),"\n2) Click \u201cAdd device\u201d on the upper-right corner of device page to enter the device binding page."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/31.png"})),(0,a.yg)("p",null,"3) Scan the QR code on the device to bind the device to your account. If you do not set it to a designated group, the device will be put into the \u201cdefault\u201d group."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/32.png"})),(0,a.yg)("p",null,"4) ",(0,a.yg)("strong",{parentName:"p"},"Manually fill in the EUI")),(0,a.yg)("p",null,"If the QR code sticker is damaged, you can manually fill in the EUI of the device to bind the device to your account. Please make sure you put in the EUI in the format suggested by the system and then click \u201cconfirm\u201d."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/33.png"})),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/34.png"})),(0,a.yg)("h2",{id:"check-data-on-sensecap-portal"},"Check Data on SenseCAP Portal"),(0,a.yg)("p",null,"Finally, On the SenseCAP App or the website ",(0,a.yg)("a",{parentName:"p",href:"http://sensecap.seeed.cc/"},"http://sensecap.seeed.cc/")," , you can check the device's online status and the latest data. In the list for each Sensor, you can check its online status and the time of its last data upload."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/35.png"})),(0,a.yg)("p",null,"Also, you can check the date on SenseCAP Mate APP."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/36.png"})),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/1.png"})))}y.isMDXComponent=!0}}]);