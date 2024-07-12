"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2294],{15680:(e,i,t)=>{t.d(i,{xA:()=>s,yg:()=>c});var r=t(96540);function l(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function n(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?n(Object(t),!0).forEach((function(i){l(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function o(e,i){if(null==e)return{};var t,r,l=function(e,i){if(null==e)return{};var t,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],i.indexOf(t)>=0||(l[t]=e[t]);return l}(e,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var y=r.createContext({}),d=function(e){var i=r.useContext(y),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},s=function(e){var i=d(e.components);return r.createElement(y.Provider,{value:i},e.children)},w="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},k=r.forwardRef((function(e,i){var t=e.components,l=e.mdxType,n=e.originalType,y=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),w=d(t),k=l,c=w["".concat(y,".").concat(k)]||w[k]||p[k]||n;return t?r.createElement(c,a(a({ref:i},s),{},{components:t})):r.createElement(c,a({ref:i},s))}));function c(e,i){var t=arguments,l=i&&i.mdxType;if("string"==typeof e||l){var n=t.length,a=new Array(n);a[0]=k;var o={};for(var y in i)hasOwnProperty.call(i,y)&&(o[y]=i[y]);o.originalType=e,o[w]="string"==typeof e?e:l,a[1]=o;for(var d=2;d<n;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},49200:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>y,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var r=t(58168),l=(t(96540),t(15680));const n={description:"Weekly Wiki",title:"Weekly Wiki",keywords:["weeely wiki"],image:"https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg",last_update:{date:"06/19/2023",author:"Matthew"}},a=void 0,o={unversionedId:"Seeed_Elderly/weekly_wiki/wiki619",id:"Seeed_Elderly/weekly_wiki/wiki619",title:"Weekly Wiki",description:"Weekly Wiki",source:"@site/docs/Seeed_Elderly/weekly_wiki/wiki619.md",sourceDirName:"Seeed_Elderly/weekly_wiki",slug:"/Seeed_Elderly/weekly_wiki/wiki619",permalink:"/Seeed_Elderly/weekly_wiki/wiki619",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/weekly_wiki/wiki619.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1687132800,formattedLastUpdatedAt:"Jun 19, 2023",frontMatter:{description:"Weekly Wiki",title:"Weekly Wiki",keywords:["weeely wiki"],image:"https://files.seeedstudio.com/wiki/IndexWiki/logo_image.jpg",last_update:{date:"06/19/2023",author:"Matthew"}}},y={},d=[{value:"Greetings",id:"greetings",level:2},{value:"Latest Wiki Launched",id:"latest-wiki-launched",level:2},{value:"Geolocation Tracker with XIAO ESP32S3",id:"geolocation-tracker-with-xiao-esp32s3",level:3},{value:"Grove 1.2-inch IPS Display",id:"grove-12-inch-ips-display",level:3},{value:"Past Weekly wiki",id:"past-weekly-wiki",level:2}],s={toc:d},w="wrapper";function p(e){let{components:i,...t}=e;return(0,l.yg)(w,(0,r.A)({},s,t,{components:i,mdxType:"MDXLayout"}),(0,l.yg)("div",{align:"center"},(0,l.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/IndexWiki/logo.png"})),(0,l.yg)("h2",{id:"greetings"},"Greetings"),(0,l.yg)("p",null,"This is Matthew in Seeed Studio and welcome to the Seeed Studio weekly wiki! Each Monday, I will introduce you our latest wiki, including the ones related to our new products, the interesting projects published by Seeed Studio, and the tutorials, introductions, etc... You name it."),(0,l.yg)("p",null,"Today is June 19th and a brand new week has begun! Check out what Seeed did last week!"),(0,l.yg)("h2",{id:"latest-wiki-launched"},"Latest Wiki Launched"),(0,l.yg)("h3",{id:"geolocation-tracker-with-xiao-esp32s3"},(0,l.yg)("a",{parentName:"h3",href:"/geolocation_tracker_with_XIAO_ESP32S3"},"Geolocation Tracker with XIAO ESP32S3")),(0,l.yg)("p",null,"In this tutorial we'll explore two of the more popular ways to deploy XIAO (without the GPS module) to create a surprising tracker. One is to obtain location information from the IP address of the network to which XIAO is connected, to achieve positioning. The other is by using the Wi-Fi positioning system (commonly known as WiPS or WFPS)."),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-ESP32S3-Geolocation/main.jpg",alt:"pir",width:500,height:"auto"})),(0,l.yg)("h3",{id:"grove-12-inch-ips-display"},(0,l.yg)("a",{parentName:"h3",href:"/grove_1.2inch_ips_display"},"Grove 1.2-inch IPS Display")),(0,l.yg)("p",null,"The Grove-1.2 Inch IPS Display is a meticulously crafted 1.2-inch serial liquid crystal display brought to you by Seeed Studio. Offering a superior resolution of 240x240, this display provides crystal clear, colorful image representation. The design rationale behind this display is to present a simple, high-quality display solution to meet the needs of various DIY or Internet of Things (IoT) projects."),(0,l.yg)("p",{style:{textAlign:"center"}},(0,l.yg)("img",{src:"https://files.seeedstudio.com/wiki/Grove-1.2inch-ips-display/2-Grove-1.2-Inch-IPS-Display-font.jpg",alt:"pir",width:500,height:"auto"})),(0,l.yg)("h2",{id:"past-weekly-wiki"},"Past Weekly wiki"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki227"},"weekly wiki on 2.27th")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki306"},"weekly wiki on 3.06th")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki313"},"weekly wiki on 3.13th")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki320"},"weekly wiki on 3.20th")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki327"},"weekly wiki on 3.27th")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki403"},"weekly wiki on 4.03rd")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki410"},"weekly wiki on 4.10th")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki417"},"weekly wiki on 4.17th")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki424"},"weekly wiki on 4.24th")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki515"},"weekly wiki on 5.15th")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki522"},"weekly wiki on 5.22nd")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki529"},"weekly wiki on 5.29th")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki605"},"weekly wiki on 6.05th")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/Seeed_Elderly/weekly_wiki/wiki612"},"weekly wiki on 6.12th"))))}p.isMDXComponent=!0}}]);