"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95191],{15680:(e,i,t)=>{t.d(i,{xA:()=>c,yg:()=>m});var r=t(96540);function a(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);i&&(r=r.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){a(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function n(e,i){if(null==e)return{};var t,r,a=function(e,i){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],i.indexOf(t)>=0||(a[t]=e[t]);return a}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){var i=r.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):s(s({},i),e)),t},c=function(e){var i=d(e.components);return r.createElement(l.Provider,{value:i},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var i=e.children;return r.createElement(r.Fragment,{},i)}},g=r.forwardRef((function(e,i){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=n(e,["components","mdxType","originalType","parentName"]),u=d(t),g=a,m=u["".concat(l,".").concat(g)]||u[g]||p[g]||o;return t?r.createElement(m,s(s({ref:i},c),{},{components:t})):r.createElement(m,s({ref:i},c))}));function m(e,i){var t=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=g;var n={};for(var l in i)hasOwnProperty.call(i,l)&&(n[l]=i[l]);n.originalType=e,n[u]="string"==typeof e?e:a,s[1]=n;for(var d=2;d<o;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},29193:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>d});var r=t(58168),a=(t(96540),t(15680));const o={title:"LCD API Examples",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-APIs/",slug:"/Wio-Terminal-LCD-APIs",last_update:{date:"01/11/2022",author:"gunengyu"}},s="TFT LCD API Examples",n={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-APIs",id:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-APIs",title:"LCD API Examples",description:"This repo provides some gifs for the TFT LCD library examples, all the examples can be found under File->Example->SeeedArduinoLCD -> 320 x 240.  You can use these examples to implement in your design.",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-APIs.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/Wio-Terminal-LCD-APIs",permalink:"/Wio-Terminal-LCD-APIs",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-APIs.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"LCD API Examples",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-APIs/",slug:"/Wio-Terminal-LCD-APIs",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Histogram",permalink:"/Wio-Terminal-LCD-Histogram"},next:{title:"How to use LvGL Graphics Library",permalink:"/Wio-Terminal-LVGL"}},l={},d=[{value:"Useful Graphics",id:"useful-graphics",level:2},{value:"TFT_Pie_Chart",id:"tft_pie_chart",level:3},{value:"TFT_ArcFill",id:"tft_arcfill",level:3},{value:"TFT_ArcFillSpiral",id:"tft_arcfillspiral",level:3},{value:"Displaying Data",id:"displaying-data",level:2},{value:"TFT_Clock",id:"tft_clock",level:3},{value:"TFT_Clock_Digital",id:"tft_clock_digital",level:3},{value:"TFT_Terminal",id:"tft_terminal",level:3},{value:"Fonts",id:"fonts",level:2},{value:"AII_Free_Fonts_Demo",id:"aii_free_fonts_demo",level:3},{value:"RLE_Font_test",id:"rle_font_test",level:3},{value:"Displaying as Background",id:"displaying-as-background",level:2},{value:"TFT_Starfield",id:"tft_starfield",level:3},{value:"TFT_Matrix",id:"tft_matrix",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:d},u="wrapper";function p(e){let{components:i,...t}=e;return(0,a.yg)(u,(0,r.A)({},c,t,{components:i,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"tft-lcd-api-examples"},"TFT LCD API Examples"),(0,a.yg)("p",null,"This repo provides some gifs for the TFT LCD library examples, all the examples can be found under ",(0,a.yg)("inlineCode",{parentName:"p"},"File"),"->",(0,a.yg)("inlineCode",{parentName:"p"},"Example"),"->",(0,a.yg)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD")," -> ",(0,a.yg)("inlineCode",{parentName:"p"},"320 x 240"),".  You can use these examples to implement in your design."),(0,a.yg)("p",null,"For more information about the TFT LCD screen, please visit ",(0,a.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Basic/"},"Basics of the TFT LCD Screen"),"."),(0,a.yg)("h2",{id:"useful-graphics"},"Useful Graphics"),(0,a.yg)("h3",{id:"tft_pie_chart"},"TFT_Pie_Chart"),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0129.2019-12-03%2014_10_15.gif"})),(0,a.yg)("h3",{id:"tft_arcfill"},"TFT_ArcFill"),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0131.2019-12-03%2014_18_05.gif"})),(0,a.yg)("h3",{id:"tft_arcfillspiral"},"TFT_ArcFillSpiral"),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0132.2019-12-03%2014_27_24.gif"})),(0,a.yg)("h2",{id:"displaying-data"},"Displaying Data"),(0,a.yg)("h3",{id:"tft_clock"},"TFT_Clock"),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0133.2019-12-03%2014_37_47.gif"})),(0,a.yg)("h3",{id:"tft_clock_digital"},"TFT_Clock_Digital"),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0138.2019-12-03%2014_48_38.gif"})),(0,a.yg)("h3",{id:"tft_terminal"},"TFT_Terminal"),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0136.2019-12-03%2014_45_13.gif"})),(0,a.yg)("h2",{id:"fonts"},"Fonts"),(0,a.yg)("h3",{id:"aii_free_fonts_demo"},"AII_Free_Fonts_Demo"),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0143.2019-12-03%2015_15_06.gif"})),(0,a.yg)("h3",{id:"rle_font_test"},"RLE_Font_test"),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0145.2019-12-03%2015_17_11.gif"})),(0,a.yg)("h2",{id:"displaying-as-background"},"Displaying as Background"),(0,a.yg)("h3",{id:"tft_starfield"},"TFT_Starfield"),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0147.2019-12-03%2016_59_07.gif"})),(0,a.yg)("h3",{id:"tft_matrix"},"TFT_Matrix"),(0,a.yg)("div",{align:"left"},(0,a.yg)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0141.2019-12-03%2014_57_30.gif"})),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);