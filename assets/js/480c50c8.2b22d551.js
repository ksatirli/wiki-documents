"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49682],{15680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>y});var i=t(96540);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=i.createContext({}),s=function(e){var r=i.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return i.createElement(u.Provider,{value:r},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=n,y=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return t?i.createElement(y,o(o({ref:r},p),{},{components:t})):i.createElement(y,o({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78543:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=t(58168),n=(t(96540),t(15680));const a={description:"Overview",title:"Overview",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBCLIENT-Overview",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Overview",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Overview",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Overview",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Overview.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/Wio-Terminal-USBCLIENT-Overview",permalink:"/Wio-Terminal-USBCLIENT-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Overview.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBCLIENT-Overview",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Xbox",permalink:"/Wio-Terminal-USBH-Xbox"},next:{title:"Keyboard",permalink:"/Wio-Terminal-USBCLIENT-Keyboard"}},u={},s=[{value:"Installing the Adafruit TinyUSB Library for Arduino",id:"installing-the-adafruit-tinyusb-library-for-arduino",level:2}],p={toc:s},d="wrapper";function c(e){let{components:r,...t}=e;return(0,n.yg)(d,(0,i.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"overview"},"Overview"),(0,n.yg)("p",null,"This repo introduce how to use the Wio Terminal as USB-Client, including using it for Human Interface Device(HID) such as keyboard, mouse and etc. It also supports Musical Instrument Digital Interface(MIDI)."),(0,n.yg)("p",null,"This functionality is dependent on ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_TinyUSB_Arduino"},"Adafruit TinyUSB Library for Arduino"),". The library has been tested with Wio Terminal(SAMD51) and working properly."),(0,n.yg)("h2",{id:"installing-the-adafruit-tinyusb-library-for-arduino"},"Installing the Adafruit TinyUSB Library for Arduino"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Visit the ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_TinyUSB_Arduino"},"Adafruit TinyUSB Library for Arduino")," repositories and download the entire repo to your local drive.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,n.yg)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,n.yg)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,n.yg)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,n.yg)("inlineCode",{parentName:"p"},"Adafruit_TinyUSB_Arduino")," file that you've have just downloaded."))),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})))}c.isMDXComponent=!0}}]);