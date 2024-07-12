"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24990],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>d});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=s(n),y=a,d=g["".concat(l,".").concat(y)]||g[y]||u[y]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=y;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[g]="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},26880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(58168),a=(n(96540),n(15680));const o={description:"OpenWrt-FAQ",title:"How to change default gateway IP in OpenWrt?",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/change_default_gateway_IP",last_update:{date:"6/21/2023",author:"Seraphina"}},i=void 0,p={unversionedId:"FAQ/OpenWrt/change_default_gateway_IP",id:"FAQ/OpenWrt/change_default_gateway_IP",title:"How to change default gateway IP in OpenWrt?",description:"OpenWrt-FAQ",source:"@site/docs/FAQ/OpenWrt/change_default_gateway_IP.md",sourceDirName:"FAQ/OpenWrt",slug:"/change_default_gateway_IP",permalink:"/change_default_gateway_IP",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/FAQ/OpenWrt/change_default_gateway_IP.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1687305600,formattedLastUpdatedAt:"Jun 21, 2023",frontMatter:{description:"OpenWrt-FAQ",title:"How to change default gateway IP in OpenWrt?",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/change_default_gateway_IP",last_update:{date:"6/21/2023",author:"Seraphina"}}},l={},s=[],c={toc:s},g="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Seeed OpenWrt image comes preconfigured with the necessary network settings. You might only need to change one network setting for the scenario which involves the Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 connecting to your existing router, and the router has the default gateway IP set to 192.168.2.1 which is the same as the default gateway IP for OpenWrt. In this scenario, you need to change the default IP of LAN interface on OpenWrt as follows:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 1.")," Open a web browser and log in to the OpenWrt portal by typing ",(0,a.yg)("strong",{parentName:"p"},"192.168.2.1"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 2.")," Navigate to ",(0,a.yg)("strong",{parentName:"p"},"System > TTYD Terminal")," and login with ",(0,a.yg)("strong",{parentName:"p"},"root")," as the username")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},(0,a.yg)("strong",{parentName:"p"},"Step 3.")," Open the following file"))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"vi /etc/config/network\n")),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 4.")," Change the static IP address on the LAN interface as follows")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"config interface 'lan'\n        option type 'bridge'\n        option ifname 'eth0'\n        option proto 'static'\n        option ipaddr '192.168.3.1'\n        option netmask '255.255.255.0'\n        option ip6assign '60'\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note:")," Here the static IP is changhed to ",(0,a.yg)("strong",{parentName:"p"},"192.168.3.1"),". However, you can type any IP address of your choice"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Step 4.")," Reboot the router")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"reboot\n")))}u.isMDXComponent=!0}}]);