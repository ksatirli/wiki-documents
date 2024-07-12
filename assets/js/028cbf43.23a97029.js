"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10737],{15680:(e,t,o)=>{o.d(t,{xA:()=>l,yg:()=>y});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(o),d=n,y=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return o?r.createElement(y,a(a({ref:t},l),{},{components:o})):r.createElement(y,a({ref:t},l))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},17760:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(58168),n=(o(96540),o(15680));const i={title:"Connecting the Wio Terminal to Microsoft Azure IoT",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-Azure-IOT/",slug:"/Wio-Terminal-Azure-IOT",last_update:{date:"01/11/2022",author:"gunengyu"}},a="Connecting the Wio Terminal to Microsoft Azure IoT",s={unversionedId:"Sensor/Wio_Terminal/Application/Easy_IoT/Wio-Terminal-Azure-IOT",id:"Sensor/Wio_Terminal/Application/Easy_IoT/Wio-Terminal-Azure-IOT",title:"Connecting the Wio Terminal to Microsoft Azure IoT",description:"This is a document written by @Benjamin Cab\xe9. Thank you Benjamin for the great work! You may also find Benjamin's work here.",source:"@site/docs/Sensor/Wio_Terminal/Application/Easy_IoT/Wio-Terminal-Azure-IOT.md",sourceDirName:"Sensor/Wio_Terminal/Application/Easy_IoT",slug:"/Wio-Terminal-Azure-IOT",permalink:"/Wio-Terminal-Azure-IOT",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Application/Easy_IoT/Wio-Terminal-Azure-IOT.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Connecting the Wio Terminal to Microsoft Azure IoT",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-Azure-IOT/",slug:"/Wio-Terminal-Azure-IOT",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Connect Wio Terminal to Microsoft Azure IoT Central",permalink:"/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central"},next:{title:"Connect Wio Terminal to Google Cloud IoT Core",permalink:"/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core"}},u={},c=[{value:"Connecting to MQTT Server",id:"connecting-to-mqtt-server",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],l={toc:c},p="wrapper";function m(e){let{components:t,...o}=e;return(0,n.yg)(p,(0,r.A)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"connecting-the-wio-terminal-to-microsoft-azure-iot"},"Connecting the Wio Terminal to Microsoft Azure IoT"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Azure-IOT/Wio-terminal-azureiot.jpeg"})),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"This is a document written by ",(0,n.yg)("a",{parentName:"p",href:"https://twitter.com/kartben"},(0,n.yg)("strong",{parentName:"a"},"@Benjamin Cab\xe9")),". Thank you Benjamin for the great work! You may also find ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/kartben"},"Benjamin's work")," here.")),(0,n.yg)("p",null,"This sample application shows you how to connect your ",(0,n.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")," to ",(0,n.yg)("a",{parentName:"p",href:"https://azure.microsoft.com/services/iot-hub"},"Azure IoT Hub"),". It is built on top of the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/Azure/azure-sdk-for-c"},"Azure SDK for Embedded C"),", a small footprint, easy-to-port library for communicating with Azure services."),(0,n.yg)("p",null,"To connect with Microsoft Azure IoT with Wio Terminal, please see the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/kartben/wioterminal-azureiothub-sample"},(0,n.yg)("strong",{parentName:"a"},"Benjamin's Guide")),"."),(0,n.yg)("h2",{id:"connecting-to-mqtt-server"},"Connecting to MQTT Server"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Azure-IOT/MQTT.png"})),(0,n.yg)("p",null,"If you want to connect Wio Terminal to MQTT servers(such as Microsoft Azure IoT), you may also check ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/kartben/wioterminal-mqtts-sample"},(0,n.yg)("strong",{parentName:"a"},"Benjamin's Guide for MQTT on Wio Terminal")),"!"),(0,n.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,n.yg)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.yg)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),".\nThank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.yg)("div",{class:"button_tech_support_container"},(0,n.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);