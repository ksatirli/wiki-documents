"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26774],{15680:(e,t,i)=>{i.d(t,{xA:()=>p,yg:()=>g});var o=i(96540);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(i),m=n,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return i?o.createElement(g,r(r({ref:t},p),{},{components:i})):o.createElement(g,r({ref:t},p))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,r[1]=l;for(var d=2;d<a;d++)r[d]=i[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},14264:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=i(58168),n=(i(96540),i(15680));const a={description:"Xadow - Edison Kit",title:"Xadow - Edison Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Edison_Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},r=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Edison_Kit",id:"Seeed_Elderly/Xadow/Xadow_Edison_Kit",title:"Xadow - Edison Kit",description:"Xadow - Edison Kit",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Edison_Kit.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Edison_Kit",permalink:"/Xadow_Edison_Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Edison_Kit.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - Edison Kit",title:"Xadow - Edison Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Edison_Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Compass",permalink:"/Xadow_Compass"},next:{title:"Xadow - GPS",permalink:"/Xadow_GPS"}},s={},d=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Block Diagram",id:"block-diagram",level:2},{value:"Installing Edison Arduino IDE",id:"installing-edison-arduino-ide",level:2},{value:"Install required drivers",id:"install-required-drivers",level:2},{value:"Example",id:"example",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,n.yg)(c,(0,o.A)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/110040001%201.jpg",alt:null})),(0,n.yg)("p",null,"The Xadow - Edison Kit is based on the Intel\xae Edison which is designed to lower the barriers to entry for anyone prototyping and producing IoT and wearable computing products. It features high performance and low power consumption, which makes your project small and portable, especially suitable for wearable projects. Xadow - Edison Kit includes a Xadow - Edison main board which contains two Xadow-compatible interfaces, one SD interface, one Programmer interface and one Battery interface, a Xadow - Edison Programmer, Xadow - Edison SD. With Xadow - Edison you will be able to use many Xadow modules via standard Xadow interface."),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Edison-Kit-p-2444.html"},(0,n.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.yg)("h2",{id:"feature"},"Feature"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Design for Intel\xae Edison."),(0,n.yg)("li",{parentName:"ul"},"USB power supply(4.75~5.25V)."),(0,n.yg)("li",{parentName:"ul"},"Xadow-compatible interfaces."),(0,n.yg)("li",{parentName:"ul"},"SD card connector."),(0,n.yg)("li",{parentName:"ul"},"USB to device UART bridge with USB micro Type-B connector."),(0,n.yg)("li",{parentName:"ul"},"USB OTG with USB Micro Type-AB connector."),(0,n.yg)("li",{parentName:"ul"},"Battery charger."),(0,n.yg)("li",{parentName:"ul"},"Power/sleep/Firmware recovery button input")),(0,n.yg)("h2",{id:"specification"},"Specification"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"USB Power supply: 4.75V ~ 5.25V"),(0,n.yg)("li",{parentName:"ul"},"2 standard Xadow interface"),(0,n.yg)("li",{parentName:"ul"},"1 SD card connector."),(0,n.yg)("li",{parentName:"ul"},"1 USB micro Type-B connector"),(0,n.yg)("li",{parentName:"ul"},"1 USB Micro Type-AB connector"),(0,n.yg)("li",{parentName:"ul"},"1 Battery interface"),(0,n.yg)("li",{parentName:"ul"},"1 button for Power/sleep; 1 button for Firmware recovery"),(0,n.yg)("li",{parentName:"ul"},"Dimensions 30.0 \xd7 40.0 \xd7 7.0 mm"),(0,n.yg)("li",{parentName:"ul"},"Operating temperature 32 to 104\xb0F (0 to 40\xb0C)")),(0,n.yg)("h2",{id:"block-diagram"},"Block Diagram"),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Using FFC Cables making the following connections:"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Connection.png",alt:null})),(0,n.yg)("admonition",{type:"note"},(0,n.yg)("pre",{parentName:"admonition"},(0,n.yg)("code",{parentName:"pre"},"When connecting other Xadow modules to Xadow - Edison, you should concern about the connection direction. The connection method is that the unfilled corner of one xadow module need to connect to the right angle of another module(see four corners of each xadow module).\n"))),(0,n.yg)("h2",{id:"installing-edison-arduino-ide"},"Installing Edison Arduino IDE"),(0,n.yg)("hr",null),(0,n.yg)("p",null,"Refer to Intel Edison offical site: Edison ",(0,n.yg)("a",{parentName:"p",href:"https://software.intel.com/en-us/get-started-edison-windows"},"Getting Started Guide")),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Download the Edison Arduino IDE.(Note: Select your OS.)")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Navigate to the folder where you downloaded the .zip Edison Arduino IDE")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Right click on the .7z file,highlight \u201c7-zip\u201d, and select \u201cExtract to \u201carduino-\u2026\u201d"))),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/IndoorKit_Extract_7z.png",alt:null})),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Click through the folder that was created until you see the IDE \u201carduino.exe\u201d file.Double-click this file and this window should open.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/IndoorKit_ArduinoIDE.png",alt:null})),(0,n.yg)("h2",{id:"install-required-drivers"},"Install required drivers"),(0,n.yg)("hr",null),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Download ",(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/CDM%20v2.10.00%20WHQL%20Certified.exe"},"FTDI drivers"),"."),(0,n.yg)("li",{parentName:"ol"},"Right-click the .exe file you downloaded, which should be called \u201cCDM\u2026\u201d and select \u201cRun as administrator\u201d.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver.jpg",alt:null})),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Click \u201cExtract\u201d.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver_Install.jpg",alt:null})),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Click \u201cNext\u201d."),(0,n.yg)("li",{parentName:"ol"},"Click \u201cFinish\u201d when you see this screen.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Edison_FTDI_Driver_Install_ok.jpg",alt:null})),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},"Download ",(0,n.yg)("a",{parentName:"li",href:"https://downloadcenter.intel.com/product/83267"},"Intel Edison Drivers")," to install the required RNDIS, CDC, and DFU drivers."),(0,n.yg)("li",{parentName:"ol"},"Double-click the .exe file to begin the install.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Intel_Edison_Driver.jpg",alt:null})),(0,n.yg)("h2",{id:"example"},"Example"),(0,n.yg)("hr",null),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Open the web site: ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Xadow_Edison_Demos"},"Xadow_Edison_Demos")," to download the whole project.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Github_Xadow_Edison_Demos.png",alt:null})),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Click Tools > Serial Port and select the Com # that the Intel Edison is connected to")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Import_Indoor_Kit_Demo.png",alt:null})),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Click Sketch>Import Library\u2026>Add Library and import the library downloaded at step 1")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Add_Library.png",alt:null})),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},"Click File > Examples > Xadow_Edison_Demos > Edison_Pedometer_with_OLED and select the demo")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Select_Pedometer_Demo.png",alt:null})),(0,n.yg)("ol",{start:5},(0,n.yg)("li",{parentName:"ol"},"Using FFC Cables making the following connections:")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_Pedometer.jpg",alt:null})),(0,n.yg)("ol",{start:6},(0,n.yg)("li",{parentName:"ol"},"Click upload icon.")),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/img/Xadow-Edison_upload.png",alt:null})),(0,n.yg)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.yg)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.yg)("h2",{id:"resource"},"Resource"),(0,n.yg)("hr",null),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://software.intel.com/en-us/get-started-edison-windows"},"Edison Getting Started Guide")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Xadow_Edison_Demos"},"Xadow_Edison_Demos")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow-Edison_sch_v1.0.pdf"},"Xadow-Edison_sch_v1.0.pdf")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow-Edison_v1.0_sch%26pcb.zip"},"Xadow - Edison Design Files v1.0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_sch_v1.0.pdf"},"Xadow - Edision Programmer sch v1.0.pdf")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edision_Programmer_v1.0_sch%26pcb.zip"},"Xadow - Edision Programmer Design Files v1.0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edison_SD_sch_v1.0.pdf"},"Xadow - Edison_SD_sch_v1.0.pdf")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Edison_Kit/res/Xadow_-_Edison_SD_v1.0_sch%26pcb.zip"},"Xadow - Edison_SD Design Files v1.0"))),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);