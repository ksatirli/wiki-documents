"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21563],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>g});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return r?a.createElement(g,i(i({ref:t},p),{},{components:r})):a.createElement(g,i({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>i});var a=r(96540),n=r(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:r,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.A)(l.tabItem,i),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>S});var a=r(58168),n=r(96540),l=r(20053),i=r(23104),o=r(56347),u=r(57485),s=r(31682),p=r(89466);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,u.aZ)(l),(0,n.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,l=d(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[u,s]=g({queryString:r,groupId:a}),[c,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:a}),f=(()=>{const e=u??c;return m({value:e,tabValues:l})?e:null})();(0,n.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),y(e)}),[s,y,l]),tabValues:l}}var f=r(92303);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:r,selectedValue:o,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),a=s[r].value;a!==o&&(c(t),u(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:i}=e;return n.createElement("li",(0,a.A)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},i,{className:(0,l.A)("tabs__item",h.tabItem,i?.className,{"tabs__item--active":o===t})}),r??t)})))}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=y(e);return n.createElement("div",{className:(0,l.A)("tabs-container",h.tabList)},n.createElement(b,(0,a.A)({},e,t)),n.createElement(v,(0,a.A)({},e,t)))}function S(e){const t=(0,f.A)();return n.createElement(w,(0,a.A)({key:String(t)},e))}},48617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(58168),n=(r(96540),r(15680)),l=r(11470),i=r(19365);const o={description:"Getting Started with ReSpeaker Lite",title:"Getting Started with ReSpeaker Lite",keywords:["ReSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reSpeaker_lite_introduction",last_update:{date:"6/28/2024",author:"Jessie"}},u=void 0,s={unversionedId:"Sensor/ReSpeaker_Lite/reSpeaker_lite_introduction",id:"Sensor/ReSpeaker_Lite/reSpeaker_lite_introduction",title:"Getting Started with ReSpeaker Lite",description:"Getting Started with ReSpeaker Lite",source:"@site/docs/Sensor/ReSpeaker_Lite/reSpeaker_lite_introduction.md",sourceDirName:"Sensor/ReSpeaker_Lite",slug:"/reSpeaker_lite_introduction",permalink:"/reSpeaker_lite_introduction",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/ReSpeaker_Lite/reSpeaker_lite_introduction.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1719532800,formattedLastUpdatedAt:"Jun 28, 2024",frontMatter:{description:"Getting Started with ReSpeaker Lite",title:"Getting Started with ReSpeaker Lite",keywords:["ReSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reSpeaker_lite_introduction",last_update:{date:"6/28/2024",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Accessing to GitHub using Wio Terminal",permalink:"/Wio-Terminal-Reading-Github"},next:{title:"Integrated with XIAO ESP32S3",permalink:"/xiao_respeaker"}},p={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Update firmware",id:"update-firmware",level:3},{value:"Install DFU Util",id:"install-dfu-util",level:4},{value:"Flash Firmware",id:"flash-firmware",level:4}],d={toc:c},m="wrapper";function g(e){let{components:t,...r}=e;return(0,n.yg)(m,(0,a.A)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"introduction"},"Introduction"),(0,n.yg)("p",null,"ReSpeaker Lite is a plug-and-play modular voice interface to hack things around you. Let you interact with your home appliances, your plant, your office, your internet-equipped devices, or any other things in your daily life, all by your voice. The ReSpeaker project provides hardware components and software libraries to build voice-enabled device."),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"USB Plug-and-Play Convenience"),"\uff1a Support UAC 2.0")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Audio Versatility"),": Supports both 5W speaker and 3.5mm audio jack")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Intuitive Privacy Controls"),": Take control of your privacy with the accessible MUTE and USER buttons")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Smart Home Ready"),": Fully compatible with Home Assistant through the XIAO controller")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},(0,n.yg)("strong",{parentName:"p"},"Built-in audio processing algorithms"),":\nSpeech algorithms and features",(0,n.yg)("br",null),"\nVoice Activity Detection",(0,n.yg)("br",null),"\nNoise Suppression",(0,n.yg)("br",null),"\nDe-reverberation",(0,n.yg)("br",null),"\nAcoustic Echo Cancellation",(0,n.yg)("br",null)))),(0,n.yg)("h2",{id:"specification"},"Specification"),(0,n.yg)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/hardware.png",alt:"pir",width:500,height:"auto"})),(0,n.yg)("h2",{id:"get-started"},"Get Started"),(0,n.yg)("h3",{id:"update-firmware"},"Update firmware"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/ffva_ua_v2.0.3.bin"},"Firmware Download"))),(0,n.yg)("h4",{id:"install-dfu-util"},"Install DFU Util"),(0,n.yg)("p",null,(0,n.yg)("a",{parentName:"p",href:"http://dfu-util.sourceforge.net/"},"dfu-util")," is a command line tool for Device Firmware Upgrade via USB port."),(0,n.yg)(l.A,{mdxType:"Tabs"},(0,n.yg)(i.A,{value:"win",label:"Windows",mdxType:"TabItem"},(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Download the latest version of ",(0,n.yg)("a",{parentName:"p",href:"http://dfu-util.sourceforge.net/releases"},"dfu-util")," to your local system, e.g., under ",(0,n.yg)("inlineCode",{parentName:"p"},"D:\\dfu-util"),".")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Install ",(0,n.yg)("inlineCode",{parentName:"p"},"dfu-util.exe"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Append the path of the ",(0,n.yg)("inlineCode",{parentName:"p"},"dfu-util.exe")," to the system environment variable ",(0,n.yg)("inlineCode",{parentName:"p"},"Path"),': "My Computer" > "Properties" > "Advanced" > "Environment Variables" > "Path". '))),(0,n.yg)("p",null,"Please note that paths in the variable ",(0,n.yg)("inlineCode",{parentName:"p"},"Path")," are seperated by semicolon ",(0,n.yg)("inlineCode",{parentName:"p"},";"),". This will allow dfu-util to be executed globally in command prompt."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Install the ",(0,n.yg)("a",{parentName:"li",href:"https://zadig.akeo.ie/"},"driver")))),(0,n.yg)(i.A,{value:"mac",label:"MacOS",mdxType:"TabItem"},(0,n.yg)("p",null,'Use "brew" to install or follow the instructions from ',(0,n.yg)("a",{parentName:"p",href:"http://dfu-util.sourceforge.net/"},"the official website"),"."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Install ",(0,n.yg)("a",{parentName:"li",href:"http://brew.sh/"},"brew")," or start the Terminal to install it directly:")),(0,n.yg)("p",null,'ruby -e "$(curl -fsSL ',(0,n.yg)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Homebrew/install/master/install)%22"},'https://raw.githubusercontent.com/Homebrew/install/master/install)"')),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"In the Teminal, type this command to install the dfu-util:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"brew install dfu-util\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Add the path of ",(0,n.yg)("inlineCode",{parentName:"li"},"dfu-util")," to ",(0,n.yg)("inlineCode",{parentName:"li"},"PATH"),":")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"export PATH=$PATH:PATH_TO_DFU_UTIL\n")),(0,n.yg)("p",null,"This will allow dfu-util to be executed globally in command prompt.")),(0,n.yg)(i.A,{value:"lin",label:"Linux",mdxType:"TabItem"},(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Download the ",(0,n.yg)("a",{parentName:"li",href:"http://dfu-util.sourceforge.net/releases/dfu-util-0.8-binaries/linux-i386/"},"dfu-util")," or use the package manager of your distribution to get the latest version:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"$ sudo apt-get install dfu-util\n")),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Add UDEV rule:")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"sudo nano /etc/udev/rules.d/77-mm-usb-device-blacklist.rules\n")),(0,n.yg)("p",null,"Simply add this single line:"),(0,n.yg)("p",null,'ATTRS{idProduct}=="d058", ATTRS{idVendor}=="2b04", MODE="664", GROUP="plugdev"'),(0,n.yg)("p",null,'If it prompts "Cannot open DFU device", just reboot to try again.'))),(0,n.yg)("h4",{id:"flash-firmware"},"Flash Firmware"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Connect the ReSpeaker board to your PC.")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"Run the following command:"))),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"dfu-util -e -a 1 -D ffva_ua_v2.0.3.bin\n")),(0,n.yg)("p",{style:{textAlign:"center"}},(0,n.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/respeaker/flash-done.png",alt:"pir",width:500,height:"auto"})),(0,n.yg)("admonition",{type:"tip"},(0,n.yg)("p",{parentName:"admonition"},"After flashing is completed, please restart the board.")))}g.isMDXComponent=!0}}]);