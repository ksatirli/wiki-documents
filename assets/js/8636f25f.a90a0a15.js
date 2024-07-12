"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90355],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var r=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,y=c["".concat(s,".").concat(d)]||c[d]||g[d]||n;return a?r.createElement(y,l(l({ref:t},u),{},{components:a})):r.createElement(y,l({ref:t},u))}));function y(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},846:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(58168),i=(a(96540),a(15680));const n={description:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",title:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/High_Accuracy_Pi_RTC-DS3231",last_update:{date:"1/11/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Top_Brand/Raspberry_Pi/Pi_HAT/High_Accuracy_Pi_RTC-DS3231",id:"Top_Brand/Raspberry_Pi/Pi_HAT/High_Accuracy_Pi_RTC-DS3231",title:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",description:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",source:"@site/docs/Top_Brand/Raspberry_Pi/Pi_HAT/High_Accuracy_Pi_RTC-DS3231.md",sourceDirName:"Top_Brand/Raspberry_Pi/Pi_HAT",slug:"/High_Accuracy_Pi_RTC-DS3231",permalink:"/High_Accuracy_Pi_RTC-DS3231",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Pi_HAT/High_Accuracy_Pi_RTC-DS3231.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",title:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/High_Accuracy_Pi_RTC-DS3231",last_update:{date:"1/11/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"DS1307 RTC (Real Time Clock) for Raspberry Pi",permalink:"/Pi_RTC-DS1307"},next:{title:"Raspberry Pi RS232 Board v1.0",permalink:"/Raspberry_Pi_R232_Board_v1.0"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical applications",id:"typical-applications",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Platforms Supported",id:"platforms-supported",level:3},{value:"Materials required",id:"materials-required",level:3},{value:"Pin Out",id:"pin-out",level:3},{value:"Install",id:"install",level:3},{value:"Usage",id:"usage",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:p},c="wrapper";function g(e){let{components:t,...a}=e;return(0,i.yg)(c,(0,r.A)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/main.jpg"})),(0,i.yg)("p",null,"The High Accuracy Pi RTC is based on the clock chip DS3231. The DS3231 is a low-cost, extremely accurate I2C realtime clock (RTC). It provides an RTC for Raspberry Pi via the I2C interface. With the clock source from the TCXO(temperature compensated crystal oscillator), the RTC maintains seconds, minutes, hours, day, date, month, and year information. The date at the end of the month is automatically adjusted for months with fewer than 31 days, including corrections for leap year. The clock operates in either the 24-hour or 12-hour format with an AM/PM indicator. The clock provides two programmable time-of-day alarms and programmable square-wave output. The INT/SQW pin either generates an interrupt due to alarm condition or outputs a square-wave signal and the selection is controlled by the bit INTCN."),(0,i.yg)("p",null,"If you want to retain the time infomation even when the Raspberry Pi is powered off, you need to insert a 3V CR1225 lithium cell into the battery holder. And if you are looking for an RTC for your Arduino project, please also take a look at our blog  Arduino RTC Tutorial: Using DS1307 RTC with Arduino to easily get started."),(0,i.yg)("p",{style:{textAlign:"center"}},(0,i.yg)("a",{href:"https://www.seeedstudio.com/High-Accuracy-Pi-RTC-%28DS3231%29-p-3214.html",target:"_blank"},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",border:"0"}))),(0,i.yg)("h2",{id:"version"},"Version"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Product Version"),(0,i.yg)("th",{parentName:"tr",align:null},"Changes"),(0,i.yg)("th",{parentName:"tr",align:null},"Released Date"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"High Accuracy Pi RTC (DS3231)"),(0,i.yg)("td",{parentName:"tr",align:null},"Initial"),(0,i.yg)("td",{parentName:"tr",align:null},"Sep 2018")))),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("pre",{parentName:"admonition"},(0,i.yg)("code",{parentName:"pre"},"    The battery is not included.\n"))),(0,i.yg)("h2",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Support Raspberry Pi 2/ 3 B/B+/4/Zero"),(0,i.yg)("li",{parentName:"ul"},"Suport seconds,minuutes,hours,day of week,month, year"),(0,i.yg)("li",{parentName:"ul"},"Support 24-hour or 12-hour format with AM/PM indicator"),(0,i.yg)("li",{parentName:"ul"},"Low-Power Consumption"),(0,i.yg)("li",{parentName:"ul"},"Two Time-of-Day Alarms"),(0,i.yg)("li",{parentName:"ul"},"Fast (400kHz) I2C Interface")),(0,i.yg)("h2",{id:"specification"},"Specification"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Item"),(0,i.yg)("th",{parentName:"tr",align:null},"Value"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,i.yg)("td",{parentName:"tr",align:null},"3.3V")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,i.yg)("td",{parentName:"tr",align:null},"0\u2103 to +70\u2103")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Accuracy"),(0,i.yg)("td",{parentName:"tr",align:null},"\xb12ppm from 0\xb0C to +40\xb0C")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Interface"),(0,i.yg)("td",{parentName:"tr",align:null},"I2C")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"I2C Address"),(0,i.yg)("td",{parentName:"tr",align:null},"0x68")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Size"),(0,i.yg)("td",{parentName:"tr",align:null},"L: 25mm W: 25mm H: 8mm")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Weight"),(0,i.yg)("td",{parentName:"tr",align:null},"4.2g")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Package size"),(0,i.yg)("td",{parentName:"tr",align:null},"L: 85mm W: 75mm H: 25mm")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Gross Weight"),(0,i.yg)("td",{parentName:"tr",align:null},"15g")))),(0,i.yg)("h2",{id:"typical-applications"},"Typical applications"),(0,i.yg)("p",null,"Any applications need Real Time on Raspberry."),(0,i.yg)("h2",{id:"get-started"},"Get Started"),(0,i.yg)("h3",{id:"platforms-supported"},"Platforms Supported"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Arduino"),(0,i.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.yg)("th",{parentName:"tr",align:null}),(0,i.yg)("th",{parentName:"tr",align:null}),(0,i.yg)("th",{parentName:"tr",align:null}))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("div",{align:"center"},(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,i.yg)("h3",{id:"materials-required"},"Materials required"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.yg)("th",{parentName:"tr",align:null},"High Accuracy Pi RTC(DS3231)"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:null})),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/thumbnail.jpg",alt:null}))),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html",target:"_blank"},"Get One Now")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{href:"https://www.seeedstudio.com/High-Accuracy-Pi-RTC-DS3231.html",target:"_blank"},"Get One Now"))))),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy.")),(0,i.yg)("h3",{id:"pin-out"},"Pin Out"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/pin_out.jpg",alt:null})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"The chip itself supports the alarm function, we also reserved the relevant hardware interface, but our software library does not include this function(S/INT pin), you need to carry out related software development.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"RX/TX is not used in this module, but the 6x2 header takes up the RX/TX pin of the Raspberry Pi, so we bring the RX/TX out and come with a 2pin header.")))),(0,i.yg)("h3",{id:"install"},"Install"),(0,i.yg)("p",null,"The driver we provide only applied for Raspbian Jessie/Stretch."),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"If you do not know how to use a raspberry pi, please check ",(0,i.yg)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/"},"here")," before start.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1. Driver Installation"))),(0,i.yg)("p",null,"Tap the following command in your terminal"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"git clone https://github.com/Seeed-Studio/pi-hats.git\n")),(0,i.yg)("p",null,"When the download finish, tap the following command in your terminal"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"cd pi-hats\nsudo ./install.sh -u rtc_ds3231\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2. Power off Raspberry Pi"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"sudo shutdown -h now\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3. Insert the HAT to Raspberry Pi"))),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/connect.jpg",alt:null})),(0,i.yg)("p",null,"Please make sure plug the pin 1 of this hat into the pin 1 of raspberry GPIO, just like the picture above."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 4. Power up Raspberry Pi"))),(0,i.yg)("h2",{id:"usage"},"Usage"),(0,i.yg)("p",null,"Now you can use the command to check whether the driver is installed successfully."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"./install.sh -l\n")),(0,i.yg)("p",null,"If you want to uninstall the driver you can use the command below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"sudo ./install.sh -u\n")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Now let's see what the RTC module can do:")),(0,i.yg)("p",null,"Read hardware clock and print result"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"sudo hwclock -r\n")),(0,i.yg)("p",null,"Set the system time from the hardware clock"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"sudo hwclock -s\n")),(0,i.yg)("p",null,"Set the hardware clock from the current system time"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"sudo hwclock -w\n")),(0,i.yg)("p",null,"More usage"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"hwclock --help\n")),(0,i.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.yg)("h2",{id:"resources"},"Resources"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[Zip]")," ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip"},"High Accuracy Pi RTC(DS3231) Eagle Files"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"[PDF]")," ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/datasheet.pdf"},"Datasheet DS3231")))),(0,i.yg)("h2",{id:"project"},"Project"),(0,i.yg)("p",null,"This is the introduction Video of this product"),(0,i.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);