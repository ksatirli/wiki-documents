"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31017],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>y});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,y=u["".concat(s,".").concat(c)]||u[c]||g[c]||r;return n?a.createElement(y,l(l({ref:t},d),{},{components:n})):a.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},65456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(58168),i=(n(96540),n(15680));const r={description:"SenseCraft Model Assistant Getting Start with Seeed Studio XIAO ESP32S3.",title:"SenseCraft \u6a21\u578b\u52a9\u624b\u90e8\u7f72",keywords:["esp32s3","xiao","tinyml"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/xiao_esp32s3_edgelab",last_update:{date:"11/09/2023",author:"Chen Lei"}},l="\u5c06 SenseCraft \u6a21\u578b\u52a9\u624b\u90e8\u7f72\u5728 XIAO ESP32S3 (Sense)",o={unversionedId:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/CN_XIAO_ESP32S3_EdgeLab",id:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/CN_XIAO_ESP32S3_EdgeLab",title:"SenseCraft \u6a21\u578b\u52a9\u624b\u90e8\u7f72",description:"SenseCraft Model Assistant Getting Start with Seeed Studio XIAO ESP32S3.",source:"@site/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/CN_XIAO_ESP32S3_EdgeLab.md",sourceDirName:"zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3",slug:"/cn/xiao_esp32s3_edgelab",permalink:"/cn/xiao_esp32s3_edgelab",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/CN_XIAO_ESP32S3_EdgeLab.md",tags:[],version:"current",lastUpdatedBy:"Chen Lei",lastUpdatedAt:1699488e3,formattedLastUpdatedAt:"Nov 9, 2023",frontMatter:{description:"SenseCraft Model Assistant Getting Start with Seeed Studio XIAO ESP32S3.",title:"SenseCraft \u6a21\u578b\u52a9\u624b\u90e8\u7f72",keywords:["esp32s3","xiao","tinyml"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/xiao_esp32s3_edgelab",last_update:{date:"11/09/2023",author:"Chen Lei"}},sidebar:"CNSidebar",previous:{title:"SD \u5361\u69fd\u4f7f\u7528\u548c\u6587\u4ef6\u7cfb\u7edf",permalink:"/cn/xiao_esp32s3_sense_filesystem"},next:{title:"\u57fa\u4e8e XIAO ESP32S3 \u7684\u5730\u7406\u5b9a\u4f4d\u8ffd\u8e2a\u5668",permalink:"/cn/geolocation_tracker_with_XIAO_ESP32S3"}},s={},p=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u6240\u9700\u786c\u4ef6",id:"\u6240\u9700\u786c\u4ef6",level:2},{value:"\u6240\u9700\u8f6f\u4ef6",id:"\u6240\u9700\u8f6f\u4ef6",level:2},{value:"\u5982\u4f55\u5b89\u88c5",id:"\u5982\u4f55\u5b89\u88c5",level:2},{value:"\u5b89\u88c5ESP IDF",id:"\u5b89\u88c5esp-idf",level:3},{value:"\u83b7\u53d6\u5b50\u6a21\u5757",id:"\u83b7\u53d6\u5b50\u6a21\u5757",level:3},{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",level:2},{value:"\u6784\u5efa\u793a\u4f8b",id:"\u6784\u5efa\u793a\u4f8b",level:3},{value:"\u52a0\u8f7d\u5e76\u8fd0\u884c\u793a\u4f8b",id:"\u52a0\u8f7d\u5e76\u8fd0\u884c\u793a\u4f8b",level:3},{value:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba",level:2}],d={toc:p},u="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"\u5c06-sensecraft-\u6a21\u578b\u52a9\u624b\u90e8\u7f72\u5728-xiao-esp32s3-sense"},"\u5c06 SenseCraft \u6a21\u578b\u52a9\u624b\u90e8\u7f72\u5728 XIAO ESP32S3 (Sense)"),(0,i.yg)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://edgelab.readthedocs.io/en/latest/"},"SenseCraft\u6a21\u578b\u52a9\u624b"),"\u662f\u4e00\u4e2a\u4e13\u6ce8\u4e8e\u5d4c\u5165\u5f0f\u4eba\u5de5\u667a\u80fd\u7684\u5f00\u6e90\u9879\u76ee\u3002\u6211\u4eec\u9488\u5bf9\u73b0\u5b9e\u4e16\u754c\u573a\u666f\u4f18\u5316\u4e86OpenMMLab\u7684\u4f18\u79c0\u7b97\u6cd5\uff0c\u5e76\u4f7f\u5b9e\u73b0\u66f4\u52a0\u7528\u6237\u53cb\u597d\uff0c\u5728\u5d4c\u5165\u5f0f\u8bbe\u5907\u4e0a\u5b9e\u73b0\u66f4\u5feb\u3001\u66f4\u51c6\u786e\u7684\u63a8\u7406\u3002"),(0,i.yg)("h2",{id:"\u6240\u9700\u786c\u4ef6"},"\u6240\u9700\u786c\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},"Seeed Studio XIAO ESP32S3 Sense")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html"},"Seeed Studio Round Display for XIAO")),(0,i.yg)("li",{parentName:"ul"},"Type-C Cable")),(0,i.yg)("h2",{id:"\u6240\u9700\u8f6f\u4ef6"},"\u6240\u9700\u8f6f\u4ef6"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"ESP-IDF v4.4"),(0,i.yg)("li",{parentName:"ul"},"SenseCraft Model Assistant v0.1.0"),(0,i.yg)("li",{parentName:"ul"},"\u793a\u4f8b\u4ee3\u7801\uff1a ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/edgelab-example-esp32"},"SenseCraft\u6a21\u578b\u52a9\u624b\u793a\u4f8b-esp32"))),(0,i.yg)("h2",{id:"\u5982\u4f55\u5b89\u88c5"},"\u5982\u4f55\u5b89\u88c5"),(0,i.yg)("h3",{id:"\u5b89\u88c5esp-idf"},"\u5b89\u88c5ESP IDF"),(0,i.yg)("p",null,"\u8bf7\u6309\u7167\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html"},"ESP-IDF\u5165\u95e8\u6307\u5357"),"\n\u4ee5\u8bbe\u7f6e\u5de5\u5177\u94fe\u548cESP-IDF\u672c\u8eab\u3002"),(0,i.yg)("p",null,"\u63a5\u4e0b\u6765\u7684\u6b65\u9aa4\u5047\u8bbe\u6b64\u5b89\u88c5\u6210\u529f\u5e76\u4e14\n",(0,i.yg)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables"},"\u8bbe\u7f6eIDF\u73af\u5883\u53d8\u91cf"),"\u3002"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"the ",(0,i.yg)("inlineCode",{parentName:"li"},"IDF_PATH")," environment variable is set"),(0,i.yg)("li",{parentName:"ul"},"the ",(0,i.yg)("inlineCode",{parentName:"li"},"idf.py")," and Xtensa-esp32 tools (e.g., ",(0,i.yg)("inlineCode",{parentName:"li"},"xtensa-esp32-elf-gcc"),") are in ",(0,i.yg)("inlineCode",{parentName:"li"},"$PATH"))),(0,i.yg)("h3",{id:"\u83b7\u53d6\u5b50\u6a21\u5757"},"\u83b7\u53d6\u5b50\u6a21\u5757"),(0,i.yg)("p",null,"cd\u5230\u9879\u76ee\u7684\u6839\u76ee\u5f55\uff0c\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u83b7\u53d6\u5b50\u6a21\u5757\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"git clone https://github.com/Seeed-Studio/edgelab-example-esp32 && cd edgelab-example-esp32\ngit submodule init\ngit submodule update\n")),(0,i.yg)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,i.yg)("h3",{id:"\u6784\u5efa\u793a\u4f8b"},"\u6784\u5efa\u793a\u4f8b"),(0,i.yg)("p",null,"\u8f6c\u5230\u793a\u4f8b\u76ee\u5f55(",(0,i.yg)("inlineCode",{parentName:"p"},"examples/<example_name>"),") \u5e76\u6784\u5efa\u793a\u4f8b\u3002"),(0,i.yg)("p",null,"\u8bbe\u7f6eIDF_TARGET\uff08(\u5bf9\u4e8eESP32-S3\u76ee\u6807\uff0c\u9700\u8981IDF\u7248\u672c ",(0,i.yg)("inlineCode",{parentName:"p"},"release/v4.4"),")"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"idf.py set-target esp32s3\n")),(0,i.yg)("p",null,"\u914d\u7f6e\u793a\u4f8b"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"idf.py menuconfig\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"\u5728\u4e2d\u9009\u62e9\u6444\u50cf\u5934\u6a21\u5757 ",(0,i.yg)("inlineCode",{parentName:"li"},"Component config")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"SenseCraft Model Assistant Configuration")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"Camera Configuration")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"Select Camera Pinout"),(0,i.yg)("img",{parentName:"li",src:"https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-camera.png",alt:"img"})),(0,i.yg)("li",{parentName:"ul"},"\u5728\u4e2d\u9009\u62e9LCD\u6a21\u5757",(0,i.yg)("inlineCode",{parentName:"li"},"Component config")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"SenseCraft Model Assistant Configuration")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"LCD Configuration")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"Select LCD Pinout"),(0,i.yg)("img",{parentName:"li",src:"https://raw.githubusercontent.com/Seeed-Studio/sscma-example-esp32/1.0.0/docs/_static/esp32/images/esp32s3-xiao-lcd.png",alt:"img"}))),(0,i.yg)("p",null,"\u82e5\u8981\u751f\u6210\u6b64\uff0c\u8bf7\u8fd0\u884c\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"idf.py build\n")),(0,i.yg)("h3",{id:"\u52a0\u8f7d\u5e76\u8fd0\u884c\u793a\u4f8b"},"\u52a0\u8f7d\u5e76\u8fd0\u884c\u793a\u4f8b"),(0,i.yg)("p",null,"T\u8981\u95ea\u5b58\uff08",(0,i.yg)("inlineCode",{parentName:"p"},"/dev/ttyUSB0"),"\u66ff\u6362\u4e3a\u8bbe\u5907\u4e32\u884c\u7aef\u53e3\uff09\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"idf.py --port /dev/ttyUSB0 flash\n")),(0,i.yg)("p",null,"\u76d1\u63a7\u4e32\u884c\u8f93\u51fa\uff1a"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"idf.py --port /dev/ttyUSB0 monitor\n")),(0,i.yg)("h2",{id:"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"},"\u6280\u672f\u652f\u6301\u548c\u4ea7\u54c1\u8ba8\u8bba"),(0,i.yg)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u4e3a\u60a8\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u5229\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);