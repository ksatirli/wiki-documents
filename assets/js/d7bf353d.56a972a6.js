"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30789],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>y});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,y=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(y,i(i({ref:t},g),{},{components:r})):a.createElement(y,i({ref:t},g))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(58168),n=(r(96540),r(15680));const o={description:"Grove - Barometer Sensor (BMP180)",title:"Grove - Barometer Sensor (BMP180)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Barometer_Sensor-BMP180",last_update:{date:"1/4/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BMP180",id:"Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BMP180",title:"Grove - Barometer Sensor (BMP180)",description:"Grove - Barometer Sensor (BMP180)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BMP180.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Barometer",slug:"/Grove-Barometer_Sensor-BMP180",permalink:"/Grove-Barometer_Sensor-BMP180",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BMP180.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Grove - Barometer Sensor (BMP180)",title:"Grove - Barometer Sensor (BMP180)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Barometer_Sensor-BMP180",last_update:{date:"1/4/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Barometer Sensor(BME280)",permalink:"/Grove-Barometer_Sensor-BME280"},next:{title:"Grove - Barometer Sensor (BMP280)",permalink:"/Grove-Barometer_Sensor-BMP280"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],g={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer-BMP180-.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("p",null,"This is a Grove module for the Bosch BMP180 high-precision, low-power digital barometer. The BMP180 offers a pressure measuring range of 300 to 1100 hPa with an accuracy down to 0.02 hPa in advanced resolution mode. It\u2019s based on piezo-resistive technology for high accuracy, ruggedness and long term stability. The chip only accepts 1.8V to 3.6V input voltage. However, with outer circuit added, this module becomes compatible with 3.3V and 5V. Therefore, it can be used on Arduino/Seeeduino or Seeeduino Stalker without modification. It is designed to be connected directly to a micro-controller via the I2C bus."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html"},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Digital two wire (I2C) interface"),(0,n.yg)("li",{parentName:"ul"},"Wide barometric pressure range"),(0,n.yg)("li",{parentName:"ul"},"Flexible supply voltage range"),(0,n.yg)("li",{parentName:"ul"},"Ultra-low power consumption"),(0,n.yg)("li",{parentName:"ul"},"Low noise measurement"),(0,n.yg)("li",{parentName:"ul"},"Factory-calibrated"),(0,n.yg)("li",{parentName:"ul"},"-40 to +85\xb0C operational range, \xb12\xb0C temperature accuracy"),(0,n.yg)("li",{parentName:"ul"},"I2C address: 0x77")),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"If you want to use multiplue I2C devices, please refer to [Software I2C](https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).\n"))),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.yg)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Enhancement of GPS navigation"),(0,n.yg)("li",{parentName:"ul"},"Indoor and outdoor navigation"),(0,n.yg)("li",{parentName:"ul"},"Leisure and sports"),(0,n.yg)("li",{parentName:"ul"},"Weather forecast"),(0,n.yg)("li",{parentName:"ul"},"Vertical velocity indication (rise/sink speed)")),(0,n.yg)("h2",{id:"specifications"},"Specifications"),(0,n.yg)("table",{border:"1",cellspacing:"0",width:"80%"},(0,n.yg)("tr",null,(0,n.yg)("th",{scope:"col"},"Item"),(0,n.yg)("th",{scope:"col"},"Min"),(0,n.yg)("th",{scope:"col"},"Typical"),(0,n.yg)("th",{scope:"col"},"Max"),(0,n.yg)("th",{scope:"col"},"Unit")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Voltage"),(0,n.yg)("td",null,"3"),(0,n.yg)("td",null,"5"),(0,n.yg)("td",null,"5.5"),(0,n.yg)("td",null,"VDC")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Current"),(0,n.yg)("td",null,"1.1"),(0,n.yg)("td",null,"/"),(0,n.yg)("td",null,"20"),(0,n.yg)("td",null,"uA")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Pressure Range"),(0,n.yg)("td",null,"300"),(0,n.yg)("td",null,"/"),(0,n.yg)("td",null,"1100"),(0,n.yg)("td",null,"hPa")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Faster I2C data transfer"),(0,n.yg)("td",null,"/"),(0,n.yg)("td",null,"/"),(0,n.yg)("td",null,"3.4"),(0,n.yg)("td",null,"MHZ")),(0,n.yg)("tr",{align:"center"},(0,n.yg)("th",{scope:"row"},"Dimension"),(0,n.yg)("td",{colspan:"3"},"40.1*20.2*9.7"),(0,n.yg)("td",null,"mm"))),(0,n.yg)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,n.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.yg)("admonition",{type:"caution"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.yg)("h2",{id:"getting-started"},"Getting started"),(0,n.yg)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,n.yg)("h4",{id:"hardware"},"Hardware"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.yg)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove-Barometer_Sensor-BMP180"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/45d_small.jpg",alt:"pir",width:500,height:"auto"})))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html"},"Get One Now"))))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Connect Grove-Barometer_Sensor-BMP180 to port ",(0,n.yg)("strong",{parentName:"li"},"I2C")," of Grove-Base Shield."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_ardu.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"    If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.\n"))),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Seeeduino_v4"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove-Barometer_Sensor-BMP180"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"5V"),(0,n.yg)("td",{parentName:"tr",align:null},"VCC")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"GND"),(0,n.yg)("td",{parentName:"tr",align:null},"GND")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"SDA"),(0,n.yg)("td",{parentName:"tr",align:null},"SDA")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"SCL"),(0,n.yg)("td",{parentName:"tr",align:null},"SCL")))),(0,n.yg)("h4",{id:"software"},"Software"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Barometer_Sensor"},"the library")," from Github."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 2.")," Refer ",(0,n.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Step 3.")," Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->Barometer_Sensor->Barometer_Sensor."),(0,n.yg)("p",null,"Here is the code"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-c++"},'    #include "Barometer.h"\n    #include <Wire.h>\n    float temperature;\n    float pressure;\n    float atm;\n    float altitude;\n    Barometer myBarometer;\n    void setup(){\n      Serial.begin(9600);\n      myBarometer.init();\n\n    }\n\n    void loop()\n    {\n       temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //Get the temperature, bmp085ReadUT MUST be called first\n       pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//Get the temperature\n       altitude = myBarometer.calcAltitude(pressure); //Uncompensated calculation - in Meters\n       atm = pressure / 101325;\n\n      Serial.print("Temperature: ");\n      Serial.print(temperature, 2); //display 2 decimal places\n      Serial.println("deg C");\n\n      Serial.print("Pressure: ");\n      Serial.print(pressure, 0); //whole number only.\n      Serial.println(" Pa");\n\n      Serial.print("Ralated Atmosphere: ");\n      Serial.println(atm, 4); //display 4 decimal places\n\n      Serial.print("Altitude: ");\n      Serial.print(altitude, 2); //display 2 decimal places\n      Serial.println(" m");\n\n      Serial.println();\n\n      delay(1000); //wait a second and get values again.\n    }\n')),(0,n.yg)("p",null," ",(0,n.yg)("strong",{parentName:"p"},"Step 4.")," Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, relative atmosphere pressure and altitude."),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Barometer_Sensor.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,n.yg)("h4",{id:"hardware-1"},"Hardware"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.yg)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,n.yg)("th",{parentName:"tr",align:null},"Grove-Barometer_Sensor-BMP180"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("p",null,(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/45d_small.jpg",alt:"pir",width:500,height:"auto"})))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Barometer-Sensor-(BMP180)-p-1840.html"},"Get One Now"))))),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Connect Grove-Barometer_Sensor-BMP180  to ",(0,n.yg)("strong",{parentName:"li"},"I2C")," port of GrovePi_Plus."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/with_rpi.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("h4",{id:"software-1"},"Software"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,n.yg)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 2.")," Git clone the Github repository.")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 3.")," Excute below commands to use this sensor")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"cd ~/GrovePi/Software/Python/grove_barometer_sensors/barometric_sensor_bmp180\npython grove_i2c_barometic_sensor_example.py\n")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/python\nimport time\nimport smbus\nimport RPi.GPIO as GPIO\n#import grovepi\nfrom grove_i2c_barometic_sensor_BMP180 import BMP085\n\n# ===========================================================================\n# Example Code\n# ===========================================================================\n\n# Initialise the BMP085 and use STANDARD mode (default value)\n# bmp = BMP085(0x77, debug=True)\nbmp = BMP085(0x77, 1)\n\n# To specify a different operating mode, uncomment one of the following:\n# bmp = BMP085(0x77, 0)  # ULTRALOWPOWER Mode\n# bmp = BMP085(0x77, 1)  # STANDARD Mode\n# bmp = BMP085(0x77, 2)  # HIRES Mode\n# bmp = BMP085(0x77, 3)  # ULTRAHIRES Mode\n\nrev = GPIO.RPI_REVISION\nif rev == 2 or rev == 3:\n  bus = smbus.SMBus(1)\nelse:\n  bus = smbus.SMBus(0)\n\nwhile True :\n  temp = bmp.readTemperature()\n\n# Read the current barometric pressure level\n  pressure = bmp.readPressure()\n\n# To calculate altitude based on an estimated mean sea level pressure\n# (1013.25 hPa) call the function as follows, but this won\'t be very accurate\n# altitude = bmp.readAltitude()\n\n# To specify a more accurate altitude, enter the correct mean sea level\n# pressure level.  For example, if the current pressure level is 1023.50 hPa\n# enter 102350 since we include two decimal places in the integer value\n  altitude = bmp.readAltitude(101560)\n\n  print("Temperature: %.2f C" % temp)\n  print("Pressure:    %.2f hPa" % (pressure / 100.0))\n  print("Altitude:    %.2f m" % altitude)\n  time.sleep(.1)\n\n')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Step 4.")," Here is the result:",(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Grovepi_barometer_sensor_00.png",alt:"pir",width:600,height:"auto"})))),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/Barometer_Sensor-BMP180-Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resources"},"Resources"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Eagle]"),"  ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/Barometer_Sensor-BMP180-Eagle_File.zip"},"Grove - Barometer Sensor(BMP180) Eagle File")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Library]"),"  ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Barometer_Sensor"},"Barometer","_","Sensor Library")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Datasheet]"),"  ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/res/BMP180.pdf"},"BMP180 datasheet")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"[Altitude Vs. Pressure]")," The following is a reference graph plotting out the relationship between altitude above sea level and barometric pressure.")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP180/img/Pressure_and_Altitude.jpg",alt:"pir",width:600,height:"auto"})),(0,n.yg)("h2",{id:"projects"},"Projects"),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Weather and Security Station with Blynk"),": Monitor weather and security remotely with Blynk and the CC32000 LaunchPad!"),(0,n.yg)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/rei-vilo/weather-and-security-station-with-blynk-74608b/embed",width:"350"}),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})),(0,n.yg)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.yg)("p",null,"With the SenseCAP ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.yg)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,n.yg)("div",{align:"center"},(0,n.yg)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,n.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}d.isMDXComponent=!0}}]);