"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53886],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>v});var o=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?o.createElement(v,n(n({ref:t},p),{},{components:r})):o.createElement(v,n({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,n=new Array(a);n[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,n[1]=s;for(var c=2;c<a;c++)n[c]=r[c];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(58168),i=(r(96540),r(15680));const a={description:"Getting Started with Grove Vision AI V2.",title:"\u53ef\u652f\u6301\u7684\u6444\u50cf\u5934",keywords:["vision ai"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/Grove-vision-ai-v2-camera-supported",last_update:{date:"3/12/2024",author:"guiyingzhao"}},n="\u5916\u90e8\u6444\u50cf\u5934\u652f\u6301\u6982\u8ff0",s={unversionedId:"zh-CN/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/cn-Grove-vision-ai-v2-camera-supported",id:"zh-CN/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/cn-Grove-vision-ai-v2-camera-supported",title:"\u53ef\u652f\u6301\u7684\u6444\u50cf\u5934",description:"Getting Started with Grove Vision AI V2.",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/cn-Grove-vision-ai-v2-camera-supported.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2",slug:"/cn/Grove-vision-ai-v2-camera-supported",permalink:"/cn/Grove-vision-ai-v2-camera-supported",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Sensors/AI-powered/Grove-vision-ai-v2/cn-Grove-vision-ai-v2-camera-supported.md",tags:[],version:"current",lastUpdatedBy:"guiyingzhao",lastUpdatedAt:1710201600,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{description:"Getting Started with Grove Vision AI V2.",title:"\u53ef\u652f\u6301\u7684\u6444\u50cf\u5934",keywords:["vision ai"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/Grove-vision-ai-v2-camera-supported",last_update:{date:"3/12/2024",author:"guiyingzhao"}},sidebar:"CNSidebar",previous:{title:"\u8fde\u63a5 Grove - Vision AI V2\u6a21\u5757\u4eba\u5de5\u667a\u80fd \u5230 Home Assistant",permalink:"/cn/connect_vision_ai_v2_to_ha"},next:{title:"\u4f7f\u7528 Himax SDK \u7f16\u8bd1\u6a21\u5757",permalink:"/cn/grove_vision_ai_v2_himax_sdk"}},l={},c=[{value:"\u5f3a\u70c8\u63a8\u8350",id:"\u5f3a\u70c8\u63a8\u8350",level:2},{value:"\u66f4\u591a\u652f\u6301",id:"\u66f4\u591a\u652f\u6301",level:2},{value:"\u5176\u4ed6CSI\u6444\u50cf\u5934",id:"\u5176\u4ed6csi\u6444\u50cf\u5934",level:2},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.yg)(d,(0,o.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u5916\u90e8\u6444\u50cf\u5934\u652f\u6301\u6982\u8ff0"},"\u5916\u90e8\u6444\u50cf\u5934\u652f\u6301\u6982\u8ff0"),(0,i.yg)("p",null,"Grove Vision AI V2\u5177\u6709\u6807\u51c6\u7684CSI\u63a5\u53e3\uff0c\u5e76\u4e0e\u6811\u8393\u6d3e\u6444\u50cf\u5934\u517c\u5bb9\u3002\u8fde\u63a5\u65f6\uff0c\u8bf7\u6ce8\u610f\u6392\u9488\u7684\u65b9\u5411\uff0c\u4e0d\u8981\u63d2\u53cd\u3002"),(0,i.yg)("h2",{id:"\u5f3a\u70c8\u63a8\u8350"},"\u5f3a\u70c8\u63a8\u8350"),(0,i.yg)("p",null,"\u4e3a\u4e86\u5145\u5206\u53d1\u6325Grove Vision AI V2\u7684\u6f5c\u529b\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u5355\u72ec\u8d2d\u4e70\u4e00\u4e2aCSI\u6444\u50cf\u5934\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html"},(0,i.yg)("strong",{parentName:"a"},"OV5647-62 FOV\u6811\u8393\u6d3e\u6444\u50cf\u5934\u6a21\u5757")),"\u3002"),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110127-ov5647-69.1-fov-camera-module-for-raspberry-pi-3b_4b-font.jpg",style:{width:300,height:"auto"}})),(0,i.yg)("h2",{id:"\u66f4\u591a\u652f\u6301"},"\u66f4\u591a\u652f\u6301"),(0,i.yg)("p",null,"\u76ee\u524d\u6211\u4eec\u5df2\u4e3aOV5642\u7cfb\u5217\u6444\u50cf\u5934\u7f16\u5199\u4e86\u9a71\u52a8\u7a0b\u5e8f\uff0c\u56e0\u6b64Grove Vision AI V2\u652f\u6301\u5168\u7cfb\u5217\u6811\u8393\u6d3eOV5647\u6444\u50cf\u5934\uff0c\u4f8b\u5982\uff0c",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/OV5647-75-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5483.html"},"OV5647-67"),"\uff0c\u548c",(0,i.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/OV5647-160-FOV-IR-Camera-module-for-Raspberry-Pi-3B-4B-p-5485.html"},"OV5647-160"),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,i.yg)("div",{style:{textAlign:"center"}}," ",(0,i.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110129-ov5647-75-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg",style:{width:300,height:"auto"}})," ",(0,i.yg)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/114110130-ov5647-160-fov--ir-camera-module-for-raspberry-pi-3b_4b-45-font.jpg",style:{width:300,height:"auto"}})," "),(0,i.yg)("h2",{id:"\u5176\u4ed6csi\u6444\u50cf\u5934"},"\u5176\u4ed6CSI\u6444\u50cf\u5934"),(0,i.yg)("p",null,"\u7406\u8bba\u4e0a\uff0c\u5176\u4ed6CSI\u6444\u50cf\u5934\u4e5f\u662f\u652f\u6301\u7684\uff0c\u4f46\u7531\u4e8e\u5176\u4e2d\u4e00\u4e9b\u6444\u50cf\u5934\u6ca1\u6709\u4e3a\u5b83\u4eec\u7f16\u5199\u9a71\u52a8\u7a0b\u5e8f\uff0c\u6216\u8005\u5b83\u4eec\u672c\u8eab\u6ca1\u6709\u5f69\u8272\u5904\u7406\u5355\u5143\uff0c\u56e0\u6b64\u53ef\u80fd\u4f1a\u51fa\u73b0\u989c\u8272\u4ec5\u4e3a\u7eff\u8272\u7684\u95ee\u9898\uff0c\u800c\u5168\u5f69\u8272\u7684\u4e22\u5931\u53ef\u80fd\u4f1a\u5bf9\u8bc6\u522b\u7684\u51c6\u786e\u6027\u4ea7\u751f\u5f71\u54cd\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html"},"\u6811\u8393\u6d3e\u6444\u50cf\u5934\u6a21\u5757V1")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html"},"\u6811\u8393\u6d3e\u6444\u50cf\u5934\u6a21\u5757V2")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/IMX390-2-12MP-118-H-FOV-4-lane-MIPI-CSI-Camera-p-5708.html"},"IMX390 2.12MP 118\xb0(H) FOV 4-lane MIPI CSI\u6444\u50cf\u5934")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/IMX-219-CMOS-camera-module-M12-and-CS-camera-available-p-5372.html"},"IMX219 M12/CS\u63a5\u53e3CMOS\u6444\u50cf\u5934\u6a21\u5757"))),(0,i.yg)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"[PDF]")," ",(0,i.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf"},"\u6570\u636e\u624b\u518c")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"[GitHub]")," ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2"},"Seeed Grove Vision AI Module V2 SDK"))),(0,i.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,i.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5c06\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4e0e\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}u.isMDXComponent=!0}}]);