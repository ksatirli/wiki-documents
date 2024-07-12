"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77846],{15680:(e,t,o)=>{o.d(t,{xA:()=>d,yg:()=>h});var r=o(96540);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(o),g=a,h=p["".concat(s,".").concat(g)]||p[g]||c[g]||n;return o?r.createElement(h,i(i({ref:t},d),{},{components:o})):r.createElement(h,i({ref:t},d))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,i=new Array(n);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},36242:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var r=o(58168),a=(o(96540),o(15680));const n={description:"BeagleBone\xae Introduction",title:"BeagleBone\xae Introduction",keywords:["Beagle_Bone"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/BeagleBone",last_update:{date:"1/10/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Edge/Beagle_Bone/BeagleBone",id:"Edge/Beagle_Bone/BeagleBone",title:"BeagleBone\xae Introduction",description:"BeagleBone\xae Introduction",source:"@site/docs/Edge/Beagle_Bone/BeagleBone.md",sourceDirName:"Edge/Beagle_Bone",slug:"/BeagleBone",permalink:"/BeagleBone",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Beagle_Bone/BeagleBone.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673308800,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{description:"BeagleBone\xae Introduction",title:"BeagleBone\xae Introduction",keywords:["Beagle_Bone"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/BeagleBone",last_update:{date:"1/10/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"EdgeBox-ESP-100 Getting Start with Arduino",permalink:"/Edgebox-ESP-100-Arduino"},next:{title:"BeagleBone\xae Blue",permalink:"/BeagleBone_Blue"}},s={},u=[{value:"Product  List",id:"product--list",level:2},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...o}=e;return(0,a.yg)(p,(0,r.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("hr",null),(0,a.yg)("p",null,"BeagleBone\xaes are relatively a late comer in the microcontroller world, but the high performance and lower power consumption make it become one of the three popular platforms in the open-hardware world. Beagles mean big functionality in small packages because these little PCs can be used for all kinds of applications you've been tinkering with... and can handle many of the same tasks as your desktop PC. Similar to Arduino and Raspberry Pi, BeagleBone\xae boards are used by artists, designers and hobbyists to realize their projects."),(0,a.yg)("p",null,"BeagleBone\xae boards are wonderful boards, but people on planet Seeed are not satisfied with the current BeagleBone\xae and want to make some differences. Just as what we have done with Seeeduino, we spoke to BeagleBone.org about our thoughts and finally got the chance to create a whole new board together with them, this is how we created Seeed Studio's own BeagleBone\xae, the BeagleBone\xae Green(Short as BBG)."),(0,a.yg)("p",null,"BeagleBone\xae Green is derived from BeagleBone\xae Black(Short as BBB), if you ever know about BBB , you would know that BBB is like the star board in the beagleboard family, it inherits the tiny size of BeagleBone\xae and adds many good features while the price is much lower. When we were designing BBG, we decided to keep almost all the good features of BBB such as the tiny size, abundant interface and strong expansibility, while at the same time replaced the HDMI interface with 2 Seeed grove connector, to make it compatible with the large family of grove sensers."),(0,a.yg)("p",null,"Not lone afte that, we released another BeagleBone\xae named BeagleBone\xae Green Wireless(Short as BBGW), In addition to grove connectors, BBGW has included a high-performance flexible WiFi/Bluetooth interface, makes it become the first WiFi/Bluetooth board of the BeagleBone\xae family."),(0,a.yg)("h2",{id:"product--list"},"Product  List"),(0,a.yg)("hr",null),(0,a.yg)("p",null,"Here is the list of the BeagleBone\xae Boards you can find in the Seeed WiKi. The list will be constantly updated."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS/"},"Beagle Bone Green and Grove IoT Starter Kit Powered by AWS")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/BeagleBone_Blue/"},"BeagleBone Blue")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Beaglebone_Case/"},"BeagleBone Case")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/BeagleBone_Green/"},"BeagleBone Green")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/BeagleBone_Green_HDMI_Cape/"},"BeagleBone Green HDMI Cape")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/BeagleBone_Green_Wireless/"},"BeagleBone Green Wireless")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Cape_for_BeagleBone_v2/"},"Grove Base Cape for BeagleBone v2")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Cape_for_BeagleBone_Series/"},"Grove Cape for BeagleBone Series")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Starter_Kit_for_BeagleBone_Green/"},"Grove Starter Kit for BeagleBone Green")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Motor_Bridge_Cape_v1.0/"},"Motor Bridge Cape v1.0")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Skeleton_box_for_Beaglebone/"},"Skeleton box for Beaglebone"))),(0,a.yg)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"We have a task list for updating this page, which is categorized under our ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"contributor project"),", as we are dedicated to enhancing the user experience and providing better support through the development of our wiki platform."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963312"},"Your contribution to this page")," is essential to us! We really value your input and would greatly appreciate your assistance in generating ideas.")),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);