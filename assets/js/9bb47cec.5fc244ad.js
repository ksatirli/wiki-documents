"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91338],{15680:(e,t,r)=>{r.d(t,{xA:()=>l,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(c,".").concat(d)]||u[d]||g[d]||i;return r?n.createElement(f,a(a({ref:t},l),{},{components:r})):n.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},75692:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(58168),o=(r(96540),r(15680));const i={description:"Configure_the_Parameters_of_Wio_Tracker_1110",title:"Parameters  Configuration",keywords:["Tracker","Wio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/configure_param_for_wio_tracker",last_update:{date:"9/14/2023",author:"Jessie"}},a=void 0,s={unversionedId:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Configure_the_parameters",id:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Configure_the_parameters",title:"Parameters  Configuration",description:"Configure_the_Parameters_of_Wio_Tracker_1110",source:"@site/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Configure_the_parameters.md",sourceDirName:"Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board",slug:"/configure_param_for_wio_tracker",permalink:"/configure_param_for_wio_tracker",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Tracker_1110_Dev_Board/Configure_the_parameters.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1694649600,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{description:"Configure_the_Parameters_of_Wio_Tracker_1110",title:"Parameters  Configuration",keywords:["Tracker","Wio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/configure_param_for_wio_tracker",last_update:{date:"9/14/2023",author:"Jessie"}}},c={},p=[{value:"Region configuration",id:"region-configuration",level:3},{value:"Triad Info configuration",id:"triad-info-configuration",level:3}],l={toc:p},u="wrapper";function g(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Before starting, please check ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/setup_toolchain_for_wio_tracker"},"Setup your toolchain")," first."),(0,o.yg)("h3",{id:"region-configuration"},"Region configuration"),(0,o.yg)("p",null,"The default region of the factory firmware is EU868, to configure the region, to meet the frequency requirements of different regions, you can follow the steps below to change the region."),(0,o.yg)("p",null,"Replace the 'Region' part in the LoRaWAN example."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"REGION = SMTC_MODEM_REGION_'Region'\n")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/set-region.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"Then click ",(0,o.yg)("inlineCode",{parentName:"p"},"Upload")," to upload the program."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/program.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"You can also use the ",(0,o.yg)("inlineCode",{parentName:"p"},"Serial Monitor")," button in the upper right corner to check the logs."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/port-monitor.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("h3",{id:"triad-info-configuration"},"Triad Info configuration"),(0,o.yg)("p",null,"Wio Tracker 1110 Dev board allows users to set the DevEUI, AppEUI, and AppKey, this is required when registering to other network servers."),(0,o.yg)("p",null,"Open the ",(0,o.yg)("inlineCode",{parentName:"p"},"LoRaWAN/TTN Example"),", define the triad info and click ",(0,o.yg)("inlineCode",{parentName:"p"},"Upload"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"static const uint8_t DEV_EUI[8]  = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };\nstatic const uint8_t JOIN_EUI[8] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };\nstatic const uint8_t APP_KEY[16] = { 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 };\n")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/wio_tracker/change-3-codes.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("details",null,(0,o.yg)("summary",null,"Info"),(0,o.yg)("p",null,"Or you can just get the triad information generated by the network server, then fill into the ",(0,o.yg)("inlineCode",{parentName:"p"},"Constants")," part and run it on your board."),(0,o.yg)("p",null,"example: from TTS."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Wio-WM1110%20Dev%20Kit/register_device3.png",alt:"pir",width:800,height:"auto"}))))}g.isMDXComponent=!0}}]);