"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38696],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var i=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=d(n),c=o,y=g["".concat(s,".").concat(c)]||g[c]||u[c]||r;return n?i.createElement(y,a(a({ref:t},p),{},{components:n})):i.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<r;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},34902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(58168),o=(n(96540),n(15680));const r={description:"Seeed Studio XIAO RP2040 with Arduino",title:"Arduino",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg",slug:"/XIAO-RP2040-with-Arduino",last_update:{date:"1/24/2023",author:"Spencer"}},a="**Seeed Studio XIAO RP2040 with Arduino**",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-Arduino",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-Arduino",title:"Arduino",description:"Seeed Studio XIAO RP2040 with Arduino",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-Arduino.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040",slug:"/XIAO-RP2040-with-Arduino",permalink:"/XIAO-RP2040-with-Arduino",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_RP2040/XIAO-RP2040-with-Arduino.md",tags:[],version:"current",lastUpdatedBy:"Spencer",lastUpdatedAt:1674518400,formattedLastUpdatedAt:"Jan 24, 2023",frontMatter:{description:"Seeed Studio XIAO RP2040 with Arduino",title:"Arduino",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/102010428_Preview-07.jpg",slug:"/XIAO-RP2040-with-Arduino",last_update:{date:"1/24/2023",author:"Spencer"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with Seeed Studio XIAO RP2040",permalink:"/XIAO-RP2040"},next:{title:"MicroPython",permalink:"/XIAO-RP2040-with-MicroPython"}},s={},d=[{value:"<strong>Getting Started</strong>",id:"getting-started",level:2},{value:"<strong>Hardware Setup</strong>",id:"hardware-setup",level:3},{value:"<strong>Software Setup</strong>",id:"software-setup",level:3},{value:"<strong>Pin Multuiplexing on the Seeed Studio XIAO RP2040</strong>",id:"pin-multuiplexing-on-the-seeed-studio-xiao-rp2040",level:2},{value:"<strong>Digital</strong>",id:"digital",level:3},{value:"<strong>Analog</strong>",id:"analog",level:3},{value:"<strong>Serial</strong>",id:"serial",level:3},{value:"<strong>RGB LED</strong>",id:"rgb-led",level:3},{value:"<strong>I2C</strong>",id:"i2c",level:3},{value:"<strong>SPI</strong>",id:"spi",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},g="wrapper";function u(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"seeed-studio-xiao-rp2040-with-arduino"},(0,o.yg)("strong",{parentName:"h1"},"Seeed Studio XIAO RP2040 with Arduino")),(0,o.yg)("p",null,"This is the page that we are going to connect the Seeed Studio XIAO RP2040 and program with Arduino. There will be several projects about Pin Multiplexing as well."),(0,o.yg)("h2",{id:"getting-started"},(0,o.yg)("strong",{parentName:"h2"},"Getting Started")),(0,o.yg)("p",null,"First, we are going to connect the Seeed Studio XIAO RP2040 to the computer and upload a simple code from Arduino to check whether the board is functioning well."),(0,o.yg)("h3",{id:"hardware-setup"},(0,o.yg)("strong",{parentName:"h3"},"Hardware Setup")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Materials required:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Seeed Studio XIAO RP2040 x1"),(0,o.yg)("li",{parentName:"ul"},"The PC x1"),(0,o.yg)("li",{parentName:"ul"},"USB Type-C cable x1")),(0,o.yg)("admonition",{type:"tip"},(0,o.yg)("p",{parentName:"admonition"},"Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"},"seeed USB type C support USB 3.1"),".")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Hardware Connection:")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Step 1. Press and hold the BOOT button and then connect the Seeed Studio XIAO RP2040 to the PC.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/xinfront.jpg"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},'Step 2. If the "RPI-RP2" disk is shown on the PC and the Power LED on the Seeed Studio XIAO RP2040 is turned on, the connnection is complete.')),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/desk.png"})),(0,o.yg)("h3",{id:"software-setup"},(0,o.yg)("strong",{parentName:"h3"},"Software Setup")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 1.")," Download and Install the latest version of Arduino IDE according to your operating system")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("a",{href:"https://www.arduino.cc/en/software",target:"_blank"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/Download_IDE.png"}))),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 2.")," Launch the Arduino application.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 3."),"  Add Seeed Studio XIAO RP2040 board package to your Arduino IDE"))),(0,o.yg)("p",null,"Navigate to ",(0,o.yg)("strong",{parentName:"p"},"File")," > ",(0,o.yg)("strong",{parentName:"p"},"Preferences"),", and fill ",(0,o.yg)("strong",{parentName:"p"},"Additional Boards Manager URLs")," with the url below:"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"https://github.com/earlephilhower/arduino-pico/releases/download/global/package_rp2040_index.json")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"700",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/5.png"})),(0,o.yg)("p",null,"Navigate to ",(0,o.yg)("strong",{parentName:"p"},"Tools-> Board-> Boards Manager..."),', type the keyword "',(0,o.yg)("strong",{parentName:"p"},"RP2040"),'" in the searching blank. Select the lastest version of "Raspberry Pi Pico/RP2040" and install it.'),(0,o.yg)("admonition",{title:"Attention",type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The on-board package named ",(0,o.yg)("strong",{parentName:"p"},"Seeed XIAO RP2040 is no longer available"),", please do not download and use it!"),(0,o.yg)("p",{parentName:"admonition"},'Install the "Raspberry Pi Pico/RP2040" package, which includes the "Seeed XIAO RP2040" board.'),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"600",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/3.png"}))),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"700",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/2.png"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 4.")," Select your board and port.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 5.")," Open the Blink example by navigating ",(0,o.yg)("strong",{parentName:"p"},'"File --\x3e Examples ---\x3e01.Basics --\x3e Blink"')))),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"550",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/select_blink.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Board")),(0,o.yg)("p",null,"After installing the board package, navigate to ",(0,o.yg)("strong",{parentName:"p"},"Tools-> Board"),', find "',(0,o.yg)("strong",{parentName:"p"},"Seeed Studio XIAO RP2040"),'" and select it. Now we have finished setting up the Seeed Studio XIAO RP2040 for Arduino IDE.'),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"800",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/4.png"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Port")),(0,o.yg)("p",null,"Navigate to Tools > Port and select the serial port name of the connected Seeed Studio XIAO RP2040. This is likely to be COM3 or higher (",(0,o.yg)("strong",{parentName:"p"},"COM1")," and ",(0,o.yg)("strong",{parentName:"p"},"COM2"),' are usually reserved for hardware serial ports). The serial port of the connected Seeed Studio XIAO RP2040 usually contains parentheses that are written "Seeed Studio XIAO RP2040".'),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"600",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 6.")," Click the ",(0,o.yg)("strong",{parentName:"li"},"Upload")," button to upload the Blink example code to the board.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:"500",src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl5.png"})),(0,o.yg)("p",null,"Once uploaded, you should be able to see the pin 25 Green (USER) LED on the board blinks once a second. If it does, congratulations! This means the connection is successful and now you can explore more projects with the Seeed Studio XIAO RP2040!"),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},'If uploading the Arduino program fails, try holding down the "BOOT" button and then clicking the "RUN" button. At this point, Seeed Studio XIAO RP2040 will enter boot mode (your computer will load a removable disk), and you will be able to upload the Arduino program again.')),(0,o.yg)("h2",{id:"pin-multuiplexing-on-the-seeed-studio-xiao-rp2040"},(0,o.yg)("strong",{parentName:"h2"},"Pin Multuiplexing on the Seeed Studio XIAO RP2040")),(0,o.yg)("p",null,"The Seeed Studio XIAO RP2040 contains 11 digital pins, 4 analog pins, 11 PWM Pins,1 I2C interface, 1 UART interface, 1 SPI interface, 1 SWD Bonding pad interface. We are going to provide the tutorials about these interfaces to make it helpful for your projects."),(0,o.yg)("h3",{id:"digital"},(0,o.yg)("strong",{parentName:"h3"},"Digital")),(0,o.yg)("p",null,"Connect a pushbutton to Pin D0 and an LED to Pin 25. Then upload the following code to control the ON/OFF of LED using the pushbutton."),(0,o.yg)("admonition",{type:"warning"},(0,o.yg)("p",{parentName:"admonition"},"Please note that the operating voltage of the Seeed Studio XIAO RP2040 is 3.3V, if you connect the sensor to 5V incorrectly, the motherboard may not work properly.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c++"},"const int buttonPin = D0;     // the number of the pushbutton pin\nconst int ledPin =  25;      // the number of the LED pin\n \nint buttonState = 0;         // variable for reading the pushbutton status\n \nvoid setup() {\n  // initialize the LED pin as an output:\n  pinMode(ledPin, OUTPUT);\n  // initialize the pushbutton pin as an input:\n  pinMode(buttonPin, INPUT);\n}\n \nvoid loop() {\n  // read the state of the pushbutton value:\n  buttonState = digitalRead(buttonPin);\n \n  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:\n  if (buttonState == HIGH) {\n    // turn LED off:\n    digitalWrite(ledPin, HIGH);\n  } else {\n    // turn LED on:\n    digitalWrite(ledPin, LOW);\n  }\n}\n")),(0,o.yg)("h3",{id:"analog"},(0,o.yg)("strong",{parentName:"h3"},"Analog")),(0,o.yg)("p",null,"Connect a potentiometer to Pin A0 and an LED to Pin 25. Then upload the following code to control the blinking interval of the LED by rotating the potentiometer knob."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c++"},"const int sensorPin = A0;\nconst int ledPin =  25; \nvoid setup() {\n  // declare the ledPin as an OUTPUT:\n  pinMode(sensorPin, INPUT);\n  pinMode(ledPin, OUTPUT);\n}\n \nvoid loop() {\n  // read the value from the sensor:\nint sensorValue = analogRead(sensorPin);\n  // turn the ledPin on\n  digitalWrite(ledPin, HIGH);\n  // stop the program for <sensorValue> milliseconds:\n  delay(sensorValue);\n  // turn the ledPin off:\n  digitalWrite(ledPin, LOW);\n  // stop the program for for <sensorValue> milliseconds:\n  delay(sensorValue);\n}\n")),(0,o.yg)("h3",{id:"serial"},(0,o.yg)("strong",{parentName:"h3"},"Serial")),(0,o.yg)("p",null,'Use pin D6 as the TX pin of UART and pin D7 as RX pin of UART to send the "Hello World!" message'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c++"},'void setup() {\n    Serial.begin(115200);\n    while (!Serial);\n}\n\nvoid loop() {\n    Serial.println("Hello,World");\n    delay(1000);\n}\n')),(0,o.yg)("h3",{id:"rgb-led"},(0,o.yg)("strong",{parentName:"h3"},"RGB LED")),(0,o.yg)("p",null,"Pin 11 is the enable pin of RGB LED. You can light up the RGB LED by setting the Pin 11 high. Here we are going to make it go flash. First, we need to add a third-party library."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 1.")," Open Arduino IDE, navigate to ",(0,o.yg)("inlineCode",{parentName:"li"},"Sketch > Include Library > Manage Libraries...")," to search the library.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"})),(0,o.yg)("p",null,'Type the keyword "Adafruit_NeoPixel" library in Ardunio library Manager and install the lastest version.'),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl6.png"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 2.")," Copy the codes to Arduino and click the ",(0,o.yg)("strong",{parentName:"li"},"Upload")," button to upload.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c++"},"#include <Adafruit_NeoPixel.h>\n\nint Power = 11;\nint PIN  = 12;\n#define NUMPIXELS 1\n\nAdafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\n\nvoid setup() {\n  pixels.begin();\n  pinMode(Power,OUTPUT);\n  digitalWrite(Power, HIGH);\n\n}\n\nvoid loop() { \n  pixels.clear();\n  pixels.setPixelColor(0, pixels.Color(15, 25, 205));\n  delay(400);\n  pixels.show();\n  pixels.clear();\n  pixels.setPixelColor(0, pixels.Color(103, 25, 205));\n  delay(400);\n  pixels.show();\n  pixels.clear();\n  pixels.setPixelColor(0, pixels.Color(233, 242, 205));\n  delay(400);\n  pixels.show();\n  pixels.clear();\n  pixels.setPixelColor(0, pixels.Color(233, 23, 23));\n  delay(400);\n  pixels.show();\n  pixels.clear();\n  pixels.setPixelColor(0, pixels.Color(12, 66, 101));\n  delay(400);\n  pixels.show();\n  delay(500);\n\n}\n")),(0,o.yg)("p",null,"The RGB LED will display rainbow color."),(0,o.yg)("h3",{id:"i2c"},(0,o.yg)("strong",{parentName:"h3"},"I2C")),(0,o.yg)("p",null,"Here we are going to connect the Seeed Studio XIAO RP2040 with ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-OLED-Display-0-96-SSD1315-p-4294.html"},'Grove - OLED Display 0.96" (SSD1315)'),' through IIC and display "Hello world".'),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Connection"),":"),(0,o.yg)("p",null,"We are going use PIN 5 as the SCL pin and PIN 4 as the SDA pin."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:550,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/micropython/board_15.png"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 1.")," Open Arduino IDE, navigate to ",(0,o.yg)("inlineCode",{parentName:"li"},"Sketch > Include Library > Manage Libraries...")," to search the library.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"})),(0,o.yg)("p",null,'Type the keyword "U8G2" library in Ardunio library Manager and install the lastest version.'),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/boardurl7.png"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 2.")," Copy the codes to Arduino and click the ",(0,o.yg)("strong",{parentName:"li"},"Upload")," button to upload.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c++"},'#include <Arduino.h>\n#include <U8g2lib.h>\n \n#ifdef U8X8_HAVE_HW_SPI\n#include <SPI.h>\n#endif\n#ifdef U8X8_HAVE_HW_I2C\n#include <Wire.h>\n#endif\n\nU8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);\n \nvoid setup(void) {\n  u8g2.begin();\n}\n \nvoid loop(void) {\n  u8g2.clearBuffer();                   // clear the internal memory\n  u8g2.setFont(u8g2_font_ncenB08_tr);   // choose a suitable font\n  u8g2.drawStr(0,10,"Hello Wrold!");    // write something to the internal memory\n  u8g2.drawStr(0,30,"Hello Werold!"); \n  u8g2.drawStr(0,50,"Hello Wrrrold!"); \n  u8g2.sendBuffer();                    // transfer internal memory to the display\n  delay(1000);  \n}\n')),(0,o.yg)("p",null,"Results are shown as:"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl8.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("h3",{id:"spi"},(0,o.yg)("strong",{parentName:"h3"},"SPI")),(0,o.yg)("p",null,"Here we are going to connect ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-OLED-Yellow-Blue-Display-0-96-SSD1315-V1-0-p-5010.html"},"Grove - OLED Yellow&Blue Display 0.96 (SSD1315)"),' through SPI and display "Hello World". The OLED display supports both IIC and SPI communication and yet the default communication mode is IIC. It is essential to ',(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com//Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0/"},"change the IIC function to the SPI function")," before strarting."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Connection"),":"),(0,o.yg)("p",null,"We are going use PIN 8 as the SCK pin, PIN 9 as the MISO pin and PIN10 as the MOSI pin."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl9.png"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 1.")," Open Arduino IDE, navigate to ",(0,o.yg)("inlineCode",{parentName:"li"},"Sketch > Include Library > Manage Libraries...")," to search the library.")),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl4.png"})),(0,o.yg)("p",null,'Type the keyword "Adafruit_GFX" library in Ardunio library Manager and install the lastest version.'),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/board10.png"})),(0,o.yg)("p",null,'Type the keyword "Adafruit_SSD1306" library in Ardunio library Manager and install the lastest version.'),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:780,src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl11.png"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"Step 2.")," Copy the codes to Arduino and click the ",(0,o.yg)("strong",{parentName:"li"},"Upload")," button to upload.")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c++"},'#include <SPI.h>\n#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>\n\n#define SCREEN_WIDTH 128 // OLED display width, in pixels\n#define SCREEN_HEIGHT 64 // OLED display height, in pixels\n\n// Declaration for SSD1306 display connected using software SPI (default case):\n#define OLED_MOSI  MOSI   //Connect SSD1315 D1\n#define OLED_CLK  SCK     //Connect SSD1315 D0\n#define OLED_DC  D4      //Connect SSD1315 D/C\n#define OLED_CS  SS      //Connect SSD1315 CS\n#define OLED_RESET  D5   //Connect SSD1315 RES\nAdafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT,\n  OLED_MOSI, OLED_CLK, OLED_DC, OLED_RESET, OLED_CS);\n\nvoid setup() {\n  Serial.begin(9600);\n  if(!display.begin(SSD1306_SWITCHCAPVCC)) {\n    Serial.println(F("SSD1306 allocation failed"));\n    for(;;); // Don\'t proceed, loop forever\n  }\n}\n\nvoid loop() {\n  display.clearDisplay();\n  display.setTextSize(1);             // Normal 1:1 pixel scale\n  display.setTextColor(SSD1306_WHITE);        // Draw white text\n  display.setCursor(0,3);             // Start at top-left corner\n  display.println(F("Hello"));\n  display.setTextSize(2); \n  display.setCursor(0,16);  \n  display.println(F("Hello"));\n  display.setTextSize(3); \n  display.setCursor(0,38);  \n  display.println(F("Hello"));\n  display.display();\n  delay(2000);\n}\n')),(0,o.yg)("p",null,"Results are shown as below:"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-RP2040/img/boardurl12.png",alt:"pir",width:600,height:"auto"})),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);