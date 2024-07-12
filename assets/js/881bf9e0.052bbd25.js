"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77518],{15680:(e,t,o)=>{o.d(t,{xA:()=>u,yg:()=>y});var r=o(96540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(o),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return o?r.createElement(y,n(n({ref:t},u),{},{components:o})):r.createElement(y,n({ref:t},u))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,n=new Array(i);n[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,n[1]=l;for(var s=2;s<i;s++)n[s]=o[s];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},91497:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=o(58168),a=(o(96540),o(15680));const i={description:"Xadow Tutorial - Acceleration Detector",title:"Xadow Tutorial - Acceleration Detector",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Tutorial_Acceleration_Detector",last_update:{date:"1/13/2023",author:"shuxu hu"}},n=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Tutorial_Acceleration_Detector",id:"Seeed_Elderly/Xadow/Xadow_Tutorial_Acceleration_Detector",title:"Xadow Tutorial - Acceleration Detector",description:"Xadow Tutorial - Acceleration Detector",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Tutorial_Acceleration_Detector.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Tutorial_Acceleration_Detector",permalink:"/Xadow_Tutorial_Acceleration_Detector",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Tutorial_Acceleration_Detector.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow Tutorial - Acceleration Detector",title:"Xadow Tutorial - Acceleration Detector",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Tutorial_Acceleration_Detector",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Q Touch Sensor",permalink:"/Xadow_Q_Touch_Sensor"},next:{title:"Xadow Tutorial - Communicate via BLE",permalink:"/Xadow_Tutorial_Communicate_via_BLE"}},c={},s=[{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],u={toc:s},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.yg)(d,(0,r.A)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"We have made an acceleration detector, it detects the acceleration and reminds users by vibrating. When the acceleration changes, the Xadow Vibration will vibrate and the Oled will display the accelerometer value. You can also see the current battery voltage on the OLED display."),(0,a.yg)("p",null,"This demo required:"),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/img/Untitled2.jpg",alt:null})),(0,a.yg)("p",null,"To complete the demo, you need to:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Connect Xadow Main Board,Xadow OLED, Xadow Vibrator and Xadow Accelerometer at the same direction with FFC cables.")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},'When you see "Now, you can program and use the Xadow as you use other Arduino boards", it means you have finished the preparations.')),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Downloading ",(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/AccelerationDetector.zip"},"the file: acceleDetector Library")," and directly open acceleDetector INO file."))),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("pre",{parentName:"admonition"},(0,a.yg)("code",{parentName:"pre"},"Before compiling, you should make sure that there are [the library:OLED_Display12864](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/OLED_Display12864.zip) and [sleep_FromArduino](https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/Sleep_FromArduino.zip) in Arduino Library. If not, please download them and put them on the libraries file of Arduino IDE in the path: ..\\arduino-1.0.1\\libraries after unzip._\n"))),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Compile code and upload it to xadow board. You need to select Seeed Xadow from the Tools | Board menu of the Arduino environment."),(0,a.yg)("li",{parentName:"ul"},"Then you can see the following picture:")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/img/Demo_1_effect_picture.jpg",alt:null})),(0,a.yg)("p",null,"Change the acceleration value by shaking the sensor,you will see the sensor value on the OLED module"),(0,a.yg)("h2",{id:"resources"},"Resources"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Tutorial_Acceleration_Detector/res/AccelerationDetector.zip"},"Demo1 acceleDetectoe Code")),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);