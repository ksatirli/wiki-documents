"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89579],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>g});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(g,i(i({ref:t},l),{},{components:r})):n.createElement(g,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},50043:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(58168),o=(r(96540),r(15680));const a={description:"This article mainly introduces how to perform functional testing of bacnet MS/TP protocol on reComputer R1000.",title:"reComputer R1000 use bacnet MS/TP",keywords:["Edge","reComputer R1000","Modbus RTU","rs485"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_r1000_use_bacnet_mstp",last_update:{date:"07/8/2024",author:"ShuishengPeng"}},i=void 0,s={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/recomputer_r1000_use_bacnet_mstp",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/recomputer_r1000_use_bacnet_mstp",title:"reComputer R1000 use bacnet MS/TP",description:"This article mainly introduces how to perform functional testing of bacnet MS/TP protocol on reComputer R1000.",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/recomputer_r1000_use_bacnet_mstp.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000",slug:"/reComputer_r1000_use_bacnet_mstp",permalink:"/reComputer_r1000_use_bacnet_mstp",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/recomputer_r1000_use_bacnet_mstp.md",tags:[],version:"current",lastUpdatedBy:"ShuishengPeng",lastUpdatedAt:1720396800,formattedLastUpdatedAt:"Jul 8, 2024",frontMatter:{description:"This article mainly introduces how to perform functional testing of bacnet MS/TP protocol on reComputer R1000.",title:"reComputer R1000 use bacnet MS/TP",keywords:["Edge","reComputer R1000","Modbus RTU","rs485"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_r1000_use_bacnet_mstp",last_update:{date:"07/8/2024",author:"ShuishengPeng"}},sidebar:"ProductSidebar",previous:{title:"How to use rs485 and modbus rtu with reComputer R1000",permalink:"/reComputer_r1000_use_rs485_modbus_rtu"},next:{title:"FAQs for reComputer R1000 series",permalink:"/reComputer_R1000_FAQ"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Software",id:"software",level:3},{value:"Hardware Configuration",id:"hardware-configuration",level:3},{value:"Steps to test bacnet mstp communication function",id:"steps-to-test-bacnet-mstp-communication-function",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"BACnet MS/TP (Master-Slave/Token Passing) is a communication protocol for building automation and control networks. It is part of the BACnet (Building Automation and Control Networks) protocol suite. MS/TP usually uses the RS-485 physical layer and bus topology. All devices are connected to the same twisted pair cable. There are master stations and slave stations in the MS/TP network. The master is responsible for generating and delivering the token, while the slave only responds when a request is received. The master device determines which device can send data by passing the token. The token passing mechanism ensures that communication on the bus is orderly and conflict-free"),(0,o.yg)("p",null,"This article mainly introduces how to perform functional testing of bacnet MS/TP protocol on reComputer R1000.We simulated a bacnet MS/TP server on reComputer R1000, and then used YABE on the W10 PC to check whether the device is present. If the device we simulated can be found normally, it means that the bacnet MS/TP communication is normal."),(0,o.yg)("h2",{id:"getting-start"},"Getting Start"),(0,o.yg)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,o.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{class:"table-nobg"},(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("th",{class:"table-trnobg"},"reComputer R1000")),(0,o.yg)("tr",{class:"table-trnobg"}),(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("td",{class:"table-trnobg"},(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",style:{width:300,height:"auto"}})))),(0,o.yg)("tr",{class:"table-trnobg"}),(0,o.yg)("tr",{class:"table-trnobg"},(0,o.yg)("td",{class:"table-trnobg"},(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("h3",{id:"software"},"Software"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Since bacnet MS/TP uses the RS485 physical layer, you can refer to this ",(0,o.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_r1000_use_rs485_modbus_rtu/"},"wiki")," on how to use the RS485 function on reComputer R1000 normally."),(0,o.yg)("li",{parentName:"ul"},"We simulate a server with the help of the ",(0,o.yg)("inlineCode",{parentName:"li"},"bacnet-stack")," library application, so you need to enter the following command to download it:",(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/bacnet-stack/bacnet-stack.git\ncd bacnet-stack\n"))),(0,o.yg)("li",{parentName:"ul"},"Please go to this ",(0,o.yg)("a",{parentName:"li",href:"https://sourceforge.net/projects/yetanotherbacnetexplorer/"},"link")," and download YABE (Yet Another BACnet Explorer)."),(0,o.yg)("li",{parentName:"ul"},"Please go to this ",(0,o.yg)("a",{parentName:"li",href:"https://www.wireshark.org/"},"link")," and download wireshark.")),(0,o.yg)("h3",{id:"hardware-configuration"},"Hardware Configuration"),(0,o.yg)("p",null,"This test uses an RS485 to USB module to connect reComputer R1000 and W10 PC."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/hardwareconnection.png",alt:"pir",width:"700",height:"auto"})),(0,o.yg)("h2",{id:"steps-to-test-bacnet-mstp-communication-function"},"Steps to test bacnet mstp communication function"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 1"),": Download ",(0,o.yg)("inlineCode",{parentName:"p"},"bacnet-stack"),"."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/downloadbacnet-stack.gif"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 2"),": The default serial port number of ",(0,o.yg)("inlineCode",{parentName:"p"},"bacnet-stack")," is ",(0,o.yg)("inlineCode",{parentName:"p"},"/dev/ttyUSB0"),". If the port number you actually use is not it, communication will not be possible, so you need to modify the port number. The file name that needs to be modified is ",(0,o.yg)("inlineCode",{parentName:"p"},"ports/ linux/rs485.c"),". Change this to the port number you need to use. I changed it to ",(0,o.yg)("inlineCode",{parentName:"p"},"/dev/ttyAMA30"),"."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/change_serial_port.gif"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 3"),": Enter the following instructions to compile. The compilation results can be seen in the bin directory."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"make clean\nmake mstp\n# wait\ncd bin/\n")),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/build_bacnet_stack.gif"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 4"),": Run ",(0,o.yg)("inlineCode",{parentName:"p"},"bacserv")," and use ",(0,o.yg)("inlineCode",{parentName:"p"},"YABE")," to search for simulated devices.You can see that the device we simulated was successfully searched."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/mstp_connection.gif"})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Step 5"),": Use wireshark to view bacnet MS/TP messages.You can see that the device we simulated passes the token. Since there are no other devices on my bus, it keeps passing the token."),(0,o.yg)("center",null,(0,o.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/RS485_fix/Wirshark_capture.gif"})),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);