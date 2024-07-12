"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21151],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var i=n(96540);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),g=d(n),h=l,y=g["".concat(s,".").concat(h)]||g[h]||p[h]||r;return n?i.createElement(y,o(o({ref:t},u),{},{components:n})):i.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=h;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[g]="string"==typeof e?e:l,o[1]=a;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},77397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(58168),l=(n(96540),n(15680));const r={description:"Shield Bot V1.1",title:"Shield Bot V1.1",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Shield_Bot_V1.1",last_update:{date:"2/16/2023",author:"jianjing Huang"}},o=void 0,a={unversionedId:"Top_Brand/Arduino/shield/Shield_Bot_V1.1",id:"Top_Brand/Arduino/shield/Shield_Bot_V1.1",title:"Shield Bot V1.1",description:"Shield Bot V1.1",source:"@site/docs/Top_Brand/Arduino/shield/Shield_Bot_V1.1.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Shield_Bot_V1.1",permalink:"/Shield_Bot_V1.1",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Shield_Bot_V1.1.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{description:"Shield Bot V1.1",title:"Shield Bot V1.1",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Shield_Bot_V1.1",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Wifi Shield V2.0",permalink:"/Wifi_Shield_V2.0"},next:{title:"Shield Bot V1.2",permalink:"/Shield_Bot_V1.2"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Charging Specification",id:"charging-specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Status Lights",id:"status-lights",level:2},{value:"Structure",id:"structure",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"The Preparatory Work",id:"the-preparatory-work",level:3},{value:"Install the battery",id:"install-the-battery",level:3},{value:"Demo 1: Drive motors to run",id:"demo-1-drive-motors-to-run",level:3},{value:"Demo 2: Following Black Line Run",id:"demo-2-following-black-line-run",level:3},{value:"Appatation Instances",id:"appatation-instances",level:3},{value:"Reference",id:"reference",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:d},g="wrapper";function p(e){let{components:t,...n}=e;return(0,l.yg)(g,(0,i.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/shield%20bot.jpg",alt:null})),(0,l.yg)("p",null,"Compared with the  previous version, The Shield Bot V1.1 can use the usb port of PC to charge battery. And the charging efficiency is greatly improved after we optimize the circuit. And you can use the Arduino/Seeeduino Vin pin to fast charge."),(0,l.yg)("p",null,"Note: Compatible Arduino Board not included, try the ",(0,l.yg)("a",{parentName:"p",href:"/Seeeduino",title:"Seeeduino"},"Seeeduino"),"."),(0,l.yg)("p",null,(0,l.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Shield-Bot-p-1380.html"},(0,l.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,l.yg)("h2",{id:"features"},"Features"),(0,l.yg)("hr",null),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Easy to start")," - The Shieldbot is plug and play and can be running out of the box in minutes")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Expandable for imagination"),"- solderless grove expansion ports enable easy attachment of more sensors and actuators, and shield headers allow the use of additional Arduino shields")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Open source")," -  Its designed to be hacked, adapted and transformed into whatever you want it to be!")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Arduino Based")," - the Shieldbot is an Arduino shield, so the extensive Arduino community and shield ecosystem can be used for endless expansion!")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Charging efficiency")," - Can quickly fully charged, And has a high efficienty."))),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"New version updates output Hi Voltage from Approx. over 4.0V change to Approx over 4.5V.")),(0,l.yg)("h2",{id:"specification"},"Specification"),(0,l.yg)("hr",null),(0,l.yg)("table",null,(0,l.yg)("tr",null,(0,l.yg)("th",null," Item "),(0,l.yg)("th",null," Parameter")),(0,l.yg)("tr",null,(0,l.yg)("td",{width:"200"}," Sensor "),(0,l.yg)("td",{width:"300"}," 5x IR reflectance sensors for line and edge following")),(0,l.yg)("tr",null,(0,l.yg)("td",null," Li-ion rechargeable battery "),(0,l.yg)("td",null," 900 mAh")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"Gearmotor "),(0,l.yg)("td",null," Two durable 160:1 micro metal gearmotors")),(0,l.yg)("tr",null,(0,l.yg)("td",null," Grove Port "),(0,l.yg)("td",null," 6x Grove expansion ports")),(0,l.yg)("tr",null,(0,l.yg)("td",null,"Shield header "),(0,l.yg)("td",null," Arduino Shield Expansion Headers"))),(0,l.yg)("h2",{id:"charging-specification"},"Charging Specification"),(0,l.yg)("hr",null),(0,l.yg)("font",{color:"red"},"Charge mode and charge efficiency as the following table:"),(0,l.yg)("table",null,(0,l.yg)("tr",null,(0,l.yg)("th",null," Mode "),(0,l.yg)("th",null," Charge Current(A) "),(0,l.yg)("th",null," the input power(W) "),(0,l.yg)("th",null,"Charge power(W) "),(0,l.yg)("th",null," Charge Efficiency(%) "),(0,l.yg)("th",null,"Charge time(h)")),(0,l.yg)("tr",null,(0,l.yg)("td",{width:"200"}," USB Charge  "),(0,l.yg)("td",{width:"200"}," 0.396 "),(0,l.yg)("td",{width:"200"}," 3.94  "),(0,l.yg)("td",{width:"200"}," 3.56 "),(0,l.yg)("td",{width:"200"}," 90.36 "),(0,l.yg)("td",{width:"200"}," 2.50")),(0,l.yg)("tr",null,(0,l.yg)("td",null," Vin Charge  "),(0,l.yg)("td",null,"  0.7 "),(0,l.yg)("td",null,"   6.78   "),(0,l.yg)("td",null,"  6.30"),(0,l.yg)("td",null,"  92.92 "),(0,l.yg)("td",null,"   1.41"))),(0,l.yg)("h2",{id:"interface-function"},"Interface Function"),(0,l.yg)("hr",null),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_Bot_V1.2_Foto_1.JPG",alt:null})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Power Switch"),": When ShieldBot is off, The shield bot can not run. But you can use the ",(0,l.yg)("strong",{parentName:"p"},"USB Charge Port")," to charge for battery.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"USB Charge Port:")," USB mini-B, used for charging for battery.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Grove Ports:")," Grove ports access pins D0, D1, D2, D3, D4, D5, A4, A5.can connect Grove modules to these Grove ports.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"IR Line Finder Potentiometer"),": Used for adjusting the Line Finders Sensitivity. Clockwise adjustment, the Sensitivity increases; Counterclockwise adjustment,the Sensitivity decreases.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"IR Line Finders:")," S1 to S5. Blue if non reflective surface is detected (ex Black tape line)")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Enable Switch:"),' Turn switch towards "ON" to connect line finders to I/O pins(Occupied pins are A0,A1,A2,A3,D4) of Arduino. The LineFollowingSimple demo in library is used line finders output signal to control Shield Bot run. If switch is toward "OFF", Seeeduino/Arduino cannot control Shield Bot through line finders output signal.')),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("strong",{parentName:"p"},"Arduino Shield Expansion Headers"),": Shield Bot can truly stack other shields."))),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"1)  If S5 is enabled you can\x92t use grove ports j14 and j13."),(0,l.yg)("li",{parentName:"ul"},"2) You may only use ONE of the arduino\x92s serial line, uart grove port or j11 as they all share the D1/TX line."))),(0,l.yg)("h2",{id:"status-lights"},"Status Lights"),(0,l.yg)("hr",null),(0,l.yg)("p",null,"The Shield Bot has lots of LEDs to show you whats going on!"),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_bot_1.2_LEDs.JPG",alt:null})),(0,l.yg)("table",null,(0,l.yg)("tr",null,(0,l.yg)("th",null," Light Numbers "),(0,l.yg)("th",null," Function "),(0,l.yg)("th",null," Status")),(0,l.yg)("tr",null,(0,l.yg)("td",{width:"200"}," D22 "),(0,l.yg)("td",null," Power"),(0,l.yg)("td",null," Green when Shieldbot is on. When ShieldBot is off, ShieldBot can only charge for battery.")),(0,l.yg)("tr",null,(0,l.yg)("td",null," D23 and D24  "),(0,l.yg)("td",null," Charging status"),(0,l.yg)("td",null," Red means charging, green means done charging.")),(0,l.yg)("tr",null,(0,l.yg)("td",null," D18 "),(0,l.yg)("td",null," Reset"),(0,l.yg)("td",null," Red if reset button is pressed.")),(0,l.yg)("tr",null,(0,l.yg)("td",null," D11 and D12  "),(0,l.yg)("td",null," Right Motor Indicators "),(0,l.yg)("td",null," Green means forwards, red means backwards, both means stopped.")),(0,l.yg)("tr",null,(0,l.yg)("td",null," D13 and D15   "),(0,l.yg)("td",null," Left Motor Indicators  "),(0,l.yg)("td",null," Green means forwards, red means backwards, both means stopped.")),(0,l.yg)("tr",null,(0,l.yg)("td",null," D5 D10 D14 D17 D19  "),(0,l.yg)("td",null," Light Sensor Indicators  "),(0,l.yg)("td",null," Blue if non reflective surface is detected (ex Black tape line)."))),(0,l.yg)("h2",{id:"structure"},"Structure"),(0,l.yg)("hr",null),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Position_for_seeeduino.jpg",alt:null})),(0,l.yg)("p",null,"The Part 1,Part 2 and Part 3 are made by our 3D printer. The two hubs are the same. Print Diagram as show below. Very magical!"),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Print_diagram_1.JPG",alt:null})," ",(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/P1018898.JPG",alt:null})),(0,l.yg)("h2",{id:"getting-started"},"Getting Started"),(0,l.yg)("hr",null),(0,l.yg)("p",null,"Getting the Shieldbot setup is quick and easy! Follow these steps to get your robotic companion up and running."),(0,l.yg)("h3",{id:"the-preparatory-work"},"The Preparatory Work"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"First you need plug Arduino into the buttom of Shield Bot and connect it to PC using a USB cable .")),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/ShieldBot_Programming2.JPG",alt:null})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"You would better turn Enable Switch towards ",(0,l.yg)("em",{parentName:"li"},"OFF")," before upload the code. Otherwise, It runs when you are not attention and may scare you.")),(0,l.yg)("p",null,"We've built a nice library for the Shield Bot with useful functions to control your Shield Bot and a number of examples so you can get it up and running in no time!"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Download the library from ",(0,l.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Library.zip"},"here")," and Unzip. Please open the Note.txt file before using our Library."),(0,l.yg)("li",{parentName:"ul"},"Put ShieldBot file  into the libraries file of Arduino IDE by the path: ..\\arduino-1.0.1\\libraries.")),(0,l.yg)("h3",{id:"install-the-battery"},"Install the battery"),(0,l.yg)("p",null,"The battery is needed when you want to make Shield Bot run on the ground."),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("ul",{parentName:"admonition"},(0,l.yg)("li",{parentName:"ul"},"1) Once the battery is installed, you can charge  battery with a mini-b USB cable. When the battery is charging, a red LED will be on. When it is done charging, a green LED will be lit."),(0,l.yg)("li",{parentName:"ul"},"2) When upload the code, you need connect the usb port of your seeeduino to your PC. The usb port on the shield bot is used for charging for battery."))),(0,l.yg)("admonition",{type:"note"},(0,l.yg)("p",{parentName:"admonition"},"Because we change the driver pins for shield bot v1.1. So make sure you have modified the .cpp file to match your Shield Bot version before use the Shieldbot Library file. The modify step is described in Note.txt.")),(0,l.yg)("h3",{id:"demo-1-drive-motors-to-run"},"Demo 1: Drive motors to run"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Open the Arduino environment and go to File-",">","Examples-",">","Shieldbot-",">","drive to load the first Shield Bot example. Make sure you select the correct Arduino Board and Serial Port."),(0,l.yg)("li",{parentName:"ul"},'Then upload code onto the Arduino. Once the upload is complete, the console should show "Done Uploading".'),(0,l.yg)("li",{parentName:"ul"},"You can unplug the usb cable after completing the upload."),(0,l.yg)("li",{parentName:"ul"},"Then put the Shield Bot on a spacious place and turn the power switch turn '",(0,l.yg)("strong",{parentName:"li"},"ON'"),"."),(0,l.yg)("li",{parentName:"ul"},"Now the Shield Bot will run at a certain speed.")),(0,l.yg)("h3",{id:"demo-2-following-black-line-run"},"Demo 2: Following Black Line Run"),(0,l.yg)("p",null,"The Shield Bot can detect reflective surface based on the Line finder sensors (s1,s2,s3,s4,s5). The blue indictors will lit if non reflective surface is detected (ex Black tape line). Now let us use it to make the run following the black line.",(0,l.yg)("br",null),"\n",(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("font",{color:"red"},"Note: Make sure the dip switches are turned ON, and none of your shields are using pins A0,A1,A2,A3 or D4.  "))),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"Reupload the new demo:LineFollowingSimple after connect Seeeduino to PC using the USB cable.")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},"After complete the upload. Put the Shield Bot in the Pre-build black runway. Then the fine screen will appear:"))),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Shield_Bot_Line_Finder.jpg",alt:null})),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"You can adjust the IR Line Finder Potentiometer to change the Line Finders Sensitivity. When Clockwise adjustment, the Sensitivity increases, Counterclockwise adjustment,the Sensitivity decreases. Have a try!")),(0,l.yg)("h3",{id:"appatation-instances"},"Appatation Instances"),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"1. Clock")),(0,l.yg)("p",null,"This is a  incredibly simple, working clock. The wheels turn one forward and one reverse, spinning the reflectance sensors around the wheel indicating the minutes. Upon the hour mark the bot drives forward and advances the linear slide to indicate hours. Extra credit for the free linear rails made out of laser cut scrap and cellophane tape!"),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team1_2.jpg",alt:null})),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"2. Shot.Bot")),(0,l.yg)("p",null,"It was a really gorgeous device that many people in the event remarked they'd like to buy. The line following robot would take orders then drive the track to the dispenser where it would use a servo to actuate an amount of either of 3 beverages, before driving back to the patron"),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team7_2.jpg",alt:null})),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"3. Simon")),(0,l.yg)("p",null,"There has a a beautifully designed, though not quite finished, 2 player heads up simon clone. The bot plays out a tune with lights and you use the laser cut puck, complete with braille so even the sight impaired could play, to mark the tones on the whiteboard. The Shieldbot then drives forward and uses the sensors to see if you've marked correctly. You want to get more right answers than your opponent so the bot drives towards their goal!"),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team6_2.jpg",alt:null})),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},"4. HackPHX-Plotter")),(0,l.yg)("p",null,"The device is very close to knocking off the Der Kritzler 2d drawing machine which is a vertical x,y table with makerslide and had the ingenious idea of bolting the tires of the Shield bot down such that when it was put in reverse, it lifted the pen off the drawing surface :) They even worked with the designer to come up with a PC side user interface!"),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/Team8.jpg",alt:null})),(0,l.yg)("h2",{id:"reference"},"Reference"),(0,l.yg)("hr",null),(0,l.yg)("p",null,"To use the Shield Bot library simply add the Shield Bot library and declare a Shieldbot object at the top of your Arduino code before your void setup()"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"#include <Shieldbot.h> //includes the Shield Bot Library\nShieldbot shieldbot = Shieldbot(); //decares a Shieldbot object\n")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null," setMaxSpeed(int both)"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: set max speed of two motors."),(0,l.yg)("dd",null,"_both_:  between 0(basically off) and 255(full speed)")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"setMaxSpeed(int left, int right)"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: Write a max speed to the left and right motor."),(0,l.yg)("dd",null,"_left,right_: Left is the speed of the left motor. right is the speed of the right motor. between 0(basically off) and 255(full speed)")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"rightMotor(char mag)"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: Enables the right motor, negative for backwards, positive for forwards. If you make one motor drive slower, it will turn in that direction. If you make the motors turn in opposite direction it will spin."),(0,l.yg)("dd",null,"_mag_: the direction to spin the right motor; -128: backwards all the way, 0: donot move, 127: forwards all the way")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"leftMotor(char mag)"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: Enables the left motor, negative for backwards, positive for forwards."),(0,l.yg)("dd",null,"_mag_: the direction to spin the left motor; -128: backwards all the way, 0: donot move, 127: forwards all the way")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"forward()"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: Enables the motors to send the bot straight forward at the setSpeed().")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"backward()"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: Enables the motors to send the bot straight backward at the setSpeed().")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"drive(char left, char right)"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: All purpose drive call. Calls leftMotor and rightMotor directly."),(0,l.yg)("dd",null,"_left_: between -128 (left motor backwards 100% of max speed), 0 (standing still), and 127 (left motor forwards 100% of max speed) :_right_: between -128 (right motor backwards 100% of max speed), 0 (standing still), and 127 (right motor forwards 100% of max speed)")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"stop()"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: Disables the motors. You may also use drive(0,0).")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"stopLeft()"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: Disables the left motor. You may also use drive(0,X).")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"stopRight()"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: Disables the right motor. You may also use drive(X,0).")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"fastStop()"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: Disables the right motor. You may also use drive(X,0).")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"fastStopLeft()"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: Disables the left motor quicker. This is considered possibly bad for the motor chip so use at your discretion")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"fastStopRight()"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_:  Disables the right motor quicker. This is considered possibly bad for the motor chip so use at your discretion")),(0,l.yg)("p",null,(0,l.yg)("strong",{parentName:"p"},(0,l.yg)("u",null,"readS1(), readS2(), readS3(), readS4(), readS5()"))),(0,l.yg)("dl",null,(0,l.yg)("dd",null,"_Description_: Reads any of the 5 light sensors on board. NOTE you NEED to connect the sensors to the arduino ports using the dip switch block (switches TOWARDS the numbers and ON text) These switches would otherwise allow you to use those pins for other things if you didn't want to use your light sensors"),(0,l.yg)("dd",null,"_Returns_: LOW if the surface reflects (ex. white) and HIGH if the surface doesn't reflect anything (ex BLACK)")),(0,l.yg)("p",null,(0,l.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/img/ShieldBot_driveLibrary.png",alt:null})),(0,l.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,l.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Eagle_Files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,l.yg)("h2",{id:"resources"},"Resources"),(0,l.yg)("hr",null),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Library.zip"},"Shield Bot Library"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/Shield_Bot_Eagle_Files.zip"},"Shield Bot Eagle Files"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/ShieldBotv0.9b_Schematic.pdf"},"ShieldBot Schematic"))),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/RPR-220.pdf"},"RPR-220 Datasheet")," IR Reflectance Sensor")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/ISL97516.pdf"},"ISL97516 Datasheet")," Step up regulator")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/BQ2057.pdf"},"BQ2057 Datasheet")," Li-ion charger")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.1/res/L298.pdf"},"L298 Datasheet")," H-Bridge Motor Driver")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("p",{parentName:"li"},(0,l.yg)("a",{parentName:"p",href:"http://www.ti.com/product/lmv358"},"358 Datasheet")," Op-Amp as a comparator for reflectance sensors"))),(0,l.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,l.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,l.yg)("div",{class:"button_tech_support_container"},(0,l.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,l.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,l.yg)("div",{class:"button_tech_support_container"},(0,l.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,l.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);