"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[94546],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>h});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,h=d["".concat(i,".").concat(c)]||d[c]||g[c]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},19365:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(96540),a=r(20053);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,s),hidden:r},t)}},11470:(e,t,r)=>{r.d(t,{A:()=>_});var n=r(58168),a=r(96540),o=r(20053),s=r(23104),l=r(56347),i=r(57485),p=r(31682),u=r(89466);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function g(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??d(r);return function(e){const t=(0,p.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function y(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=g(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,p]=h({queryString:r,groupId:n}),[d,y]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Dv)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),m=(()=>{const e=i??d;return c({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!c({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),y(e)}),[p,y,o]),tabValues:o}}var m=r(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),g=e=>{const t=e.currentTarget,r=u.indexOf(t),n=p[r].value;n!==l&&(d(t),i(n))},c=e=>{let t=null;switch(e.key){case"Enter":g(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":r},t)},p.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.A)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:c,onClick:g},s,{className:(0,o.A)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":l===t})}),r??t)})))}function N(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=y(e);return a.createElement("div",{className:(0,o.A)("tabs-container",f.tabList)},a.createElement(v,(0,n.A)({},e,t)),a.createElement(N,(0,n.A)({},e,t)))}function _(e){const t=(0,m.A)();return a.createElement(w,(0,n.A)({key:String(t)},e))}},63860:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=r(58168),a=(r(96540),r(15680)),o=r(11470),s=r(19365);const l={description:"A607 Carrier Board",title:"A607 Carrier Board",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_A607_Flash_System",last_update:{date:"04/17/2023",author:"Lakshantha"}},i="Flash JetPack OS to A607 Carrier Board (NVIDIA Jetson Orin NX/Nano supported)",p={unversionedId:"Edge/NVIDIA_Jetson/Carrier_Boards/A607/A607_Flash_JetPack",id:"Edge/NVIDIA_Jetson/Carrier_Boards/A607/A607_Flash_JetPack",title:"A607 Carrier Board",description:"A607 Carrier Board",source:"@site/docs/Edge/NVIDIA_Jetson/Carrier_Boards/A607/A607_Flash_JetPack.md",sourceDirName:"Edge/NVIDIA_Jetson/Carrier_Boards/A607",slug:"/reComputer_A607_Flash_System",permalink:"/reComputer_A607_Flash_System",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/Carrier_Boards/A607/A607_Flash_JetPack.md",tags:[],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1681689600,formattedLastUpdatedAt:"Apr 17, 2023",frontMatter:{description:"A607 Carrier Board",title:"A607 Carrier Board",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_A607_Flash_System",last_update:{date:"04/17/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"A603 Carrier Board",permalink:"/reComputer_A603_Flash_System"},next:{title:"A608 Carrier Board",permalink:"/reComputer_A608_Flash_System"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enter Force Recovery Mode",id:"enter-force-recovery-mode",level:2},{value:"Download the peripheral drivers",id:"download-the-peripheral-drivers",level:2},{value:"Flash to Jetson",id:"flash-to-jetson",level:2},{value:"Jetson Orin NX",id:"jetson-orin-nx",level:3},{value:"NVMe SSD",id:"nvme-ssd",level:4},{value:"USB Flash drive",id:"usb-flash-drive",level:4},{value:"Jetson Orin Nano",id:"jetson-orin-nano",level:3},{value:"NVMe SSD",id:"nvme-ssd-1",level:4},{value:"USB Flash drive",id:"usb-flash-drive-1",level:4},{value:"Configure WiFi and Bluetooth",id:"configure-wifi-and-bluetooth",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:d},c="wrapper";function h(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"flash-jetpack-os-to-a607-carrier-board-nvidia-jetson-orin-nxnano-supported"},"Flash JetPack OS to A607 Carrier Board (NVIDIA Jetson Orin NX/Nano supported)"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/A607/1.png"})),(0,a.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/A607-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5634.html"},(0,a.yg)("strong",null,(0,a.yg)("span",null,(0,a.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.yg)("p",null,"In this wiki, we will show you how to flash ",(0,a.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetpack"},"Jetpack")," to an NVMe SSD connected to the A607 Carrier Board which supports both NVIDIA Jetson Orin NX module and NVIDIA Jetson Orin Nano module"),(0,a.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Ubuntu Host PC (native or VM using VMware Workstation Player)"),(0,a.yg)("li",{parentName:"ul"},"A607 Carrier Board with Jetson Orin NX or Jetson Orin Nano module"),(0,a.yg)("li",{parentName:"ul"},"USB Type-C data transmission cable")),(0,a.yg)("h2",{id:"enter-force-recovery-mode"},"Enter Force Recovery Mode"),(0,a.yg)("p",null,"Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1.")," Connect a USB cable between the Type-C connector on the board and the Linux host PC"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/A607/3.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2.")," Press the RECOVERY button and while holding down that button, connect power adapter to the DC JACK on the board to power on the board"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/A607/2.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3.")," On the Linux host PC, open a Terminal window and enter the command ",(0,a.yg)("inlineCode",{parentName:"p"},"lsusb"),". If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"For Orin NX 16GB: ",(0,a.yg)("strong",{parentName:"li"},"0955:7323 NVidia Corp")),(0,a.yg)("li",{parentName:"ul"},"For Orin NX 8GB: ",(0,a.yg)("strong",{parentName:"li"},"0955:7423 NVidia Corp")),(0,a.yg)("li",{parentName:"ul"},"For Orin Nano 8GB: ",(0,a.yg)("strong",{parentName:"li"},"0955:7523 NVidia Corp")),(0,a.yg)("li",{parentName:"ul"},"For Orin Nano 4GB: ",(0,a.yg)("strong",{parentName:"li"},"0955:7623 NVidia Corp"))),(0,a.yg)("p",null,"The below image is for Orin NX 16GB"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:"{700}",src:"https://files.seeedstudio.com/wiki/A607/4.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4.")," Remove the jumper wire"),(0,a.yg)("h2",{id:"download-the-peripheral-drivers"},"Download the peripheral drivers"),(0,a.yg)("p",null,"First of all, you need to install the peripheral drivers for this board. These are needed for some hardware peripherals to function on the board. Click the below links to download the drivers according to the Jetson module."),(0,a.yg)("div",{class:"table-center"},(0,a.yg)("table",{style:{textAlign:"center"}},(0,a.yg)("thead",null,(0,a.yg)("tr",null,(0,a.yg)("th",null,"Jetson Module"),(0,a.yg)("th",null,"JetPack Version"),(0,a.yg)("th",null,"L4T Version"),(0,a.yg)("th",null,"Download Link"))),(0,a.yg)("tbody",null,(0,a.yg)("tr",null,(0,a.yg)("td",{rowSpan:3},"Jetson Orin NX 8GB/ 16GB"),(0,a.yg)("td",null,"5.1"),(0,a.yg)("td",null,"35.2.1"),(0,a.yg)("td",null,(0,a.yg)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"5.1.1"),(0,a.yg)("td",null,"35.3.1"),(0,a.yg)("td",null,(0,a.yg)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.1.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"6.0"),(0,a.yg)("td",null,"36.3"),(0,a.yg)("td",null,(0,a.yg)("a",{href:"https://nv-jetson-images.oss-us-west-1.aliyuncs.com/A607/A607-JP6.0.zip?OSSAccessKeyId=LTAI5tKm7UD2hmuFW85cz42T&Expires=4719368326&Signature=8UuuH0SNAMXiKXcxdS9zy9eieYE%3D",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,a.yg)("tr",null,(0,a.yg)("td",{rowSpan:2},"Jetson Orin Nano 4GB"),(0,a.yg)("td",null,"5.1.1"),(0,a.yg)("td",null,"35.3.1"),(0,a.yg)("td",null,(0,a.yg)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-4GB-JP5.1.1.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"6.0"),(0,a.yg)("td",null,"36.3"),(0,a.yg)("td",null,(0,a.yg)("a",{href:"https://nv-jetson-images.oss-us-west-1.aliyuncs.com/A607/A607-JP6.0.zip?OSSAccessKeyId=LTAI5tKm7UD2hmuFW85cz42T&Expires=4719368326&Signature=8UuuH0SNAMXiKXcxdS9zy9eieYE%3D",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,a.yg)("tr",null,(0,a.yg)("td",{rowSpan:2},"Jetson Orin Nano 8GB"),(0,a.yg)("td",null,"5.1.1"),(0,a.yg)("td",null,"35.3.1"),(0,a.yg)("td",null,(0,a.yg)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-8GB-JP5.1.1.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,a.yg)("tr",null,(0,a.yg)("td",null,"6.0"),(0,a.yg)("td",null,"36.3"),(0,a.yg)("td",null,(0,a.yg)("a",{href:"https://nv-jetson-images.oss-us-west-1.aliyuncs.com/A607/A607-JP6.0.zip?OSSAccessKeyId=LTAI5tKm7UD2hmuFW85cz42T&Expires=4719368326&Signature=8UuuH0SNAMXiKXcxdS9zy9eieYE%3D",target:"_blank",rel:"noopener noreferrer"},"Download")))))),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Note:")," Currently we provide the above drivers. We will keep updating the drivers in the future with the release of new JetPack versions."),(0,a.yg)("h2",{id:"flash-to-jetson"},"Flash to Jetson"),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"}," Before moving onto flashing, it should be noted that Jetson Orin NX module only supports JetPack 5.1 and above, while Jetson Orin Nano module only supports JetPack 5.1.1 and above.")),(0,a.yg)(o.A,{mdxType:"Tabs"},(0,a.yg)(s.A,{value:"JP5.1/JP5.1.1",label:"JP5.1/JP5.1.1",mdxType:"TabItem"},(0,a.yg)("h3",{id:"jetson-orin-nx"},"Jetson Orin NX"),(0,a.yg)("p",null,"Here we will use NVIDIA L4T ",(0,a.yg)("strong",{parentName:"p"},"35.3.1")," to install ",(0,a.yg)("strong",{parentName:"p"},"Jetpack 5.1.1")," on the A607 Carrier Board with Jetson Orin NX module"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1:")," ",(0,a.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r3531"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2:")," Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/A607/5.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3:")," Extract ",(0,a.yg)("strong",{parentName:"p"},"Jetson_Linux_R35.3.1_aarch64.tbz2")," and ",(0,a.yg)("strong",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2")," by navigating to the folder containing these files, apply the changes and install the necessary prerequisites"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"tar xf Jetson_Linux_R35.3.1_aarch64.tbz2\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4:")," Extract ",(0,a.yg)("strong",{parentName:"p"},"A607-Orin-NX-JP5.1.1.zip"),". Here we additionally install the ",(0,a.yg)("strong",{parentName:"p"},"unzip")," package which is needed to decompress the .zip file"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd ..\nsudo apt install unzip \nunzip A607-Orin-NX-JP5.1.1.zip\n")),(0,a.yg)("p",null,"Here it will ask whether to replace the files. Type ",(0,a.yg)("strong",{parentName:"p"},"A")," and press ",(0,a.yg)("strong",{parentName:"p"},"ENTER")," to replace the necessary files"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/A607/7.jpg"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 5:")," Configure your username, password & hostname so that you do not need to enter the Ubuntu installation wizard after the device finishes booting"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license\n")),(0,a.yg)("p",null,'For example (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 6:")," Flash the system to either NVMe SSD or USB Flash drive"),(0,a.yg)("h4",{id:"nvme-ssd"},"NVMe SSD"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 p3509-a02+p3767-0000 internal\n')),(0,a.yg)("h4",{id:"usb-flash-drive"},"USB Flash drive"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 p3509-a02+p3767-0000 internal\n')),(0,a.yg)("p",null,"You will see the following output if the flashing process is successful"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/A603/10.jpg"})),(0,a.yg)("h3",{id:"jetson-orin-nano"},"Jetson Orin Nano"),(0,a.yg)("p",null,"Here we will use NVIDIA L4T ",(0,a.yg)("strong",{parentName:"p"},"35.3.1")," to install ",(0,a.yg)("strong",{parentName:"p"},"Jetpack 5.1.1")," on the A607 Carrier Board with Jetson Orin Nano module. Note that 4GB and 8GB Orin Nano modules use different driver files and the instructions are a little different."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1:")," ",(0,a.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r3531"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2:")," Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/A607/8.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3:")," Extract ",(0,a.yg)("strong",{parentName:"p"},"Jetson_Linux_R35.3.1_aarch64.tbz2")," and ",(0,a.yg)("strong",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2")," by navigating to the folder containing these files, apply the changes and install the necessary prerequisites"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"tar xf Jetson_Linux_R35.3.1_aarch64.tbz2\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4:")," Extract ",(0,a.yg)("strong",{parentName:"p"},"A607-Orin-Nano-8GB-JP5.1.1.zip")," for 8GB version and ",(0,a.yg)("strong",{parentName:"p"},"A607-Orin-Nano-4GB-JP5.1.1.zip")," for 4GB version. Here we additionally install the ",(0,a.yg)("strong",{parentName:"p"},"unzip")," package which is needed to decompress the .zip file."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd ..\nsudo apt install unzip \n# for 8GB version\nunzip A607-Orin-Nano-8GB-JP5.1.1.zip\n# for 4GB version\nunzip A607-Orin-Nano-4GB-JP5.1.1.zip\n")),(0,a.yg)("p",null,"Here it will ask whether to replace the files. Type ",(0,a.yg)("strong",{parentName:"p"},"A")," and press ",(0,a.yg)("strong",{parentName:"p"},"ENTER")," to replace the necessary files"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/A607/10.jpg"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 5:")," Configure your username, password & hostname so that you do not need to enter the Ubuntu installation wizard after the device finishes booting"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license\n")),(0,a.yg)("p",null,'For example (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):'),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 6:")," Flash the system to either NVMe SSD or USB Flash drive"),(0,a.yg)("h4",{id:"nvme-ssd-1"},"NVMe SSD"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 jetson-orin-nano-devkit internal\n')),(0,a.yg)("h4",{id:"usb-flash-drive-1"},"USB Flash drive"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 jetson-orin-nano-devkit internal\n')),(0,a.yg)("p",null,"You will see the following output if the flashing process is successful"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/A603/10.jpg"}))),(0,a.yg)(s.A,{value:"JP6.0",label:"JP6.0",mdxType:"TabItem"},(0,a.yg)("p",null,"Here we will use NVIDIA L4T ",(0,a.yg)("strong",{parentName:"p"},"36.3")," to install ",(0,a.yg)("strong",{parentName:"p"},"Jetpack 6.0")," on the A607 Carrier Board with Jetson Orin NX module."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1:")," ",(0,a.yg)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r363"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2:")," Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder."),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/compressed_files.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3:")," Extract ",(0,a.yg)("strong",{parentName:"p"},"Jetson_Linux_R36.3.0_aarch64.tbz2")," and ",(0,a.yg)("strong",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2")," by navigating to the folder containing these files, apply the changes and install the necessary prerequisites"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"tar xf Jetson_Linux_R36.3.0_aarch64.tbz2\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R36.3.0_aarch64.tbz2 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4:")," Extract ",(0,a.yg)("strong",{parentName:"p"},"A607-JP6.0.zip"),". Here we additionally install the ",(0,a.yg)("strong",{parentName:"p"},"unzip")," package which is needed to decompress the .zip file"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd ..\nsudo apt install unzip \nsudo unzip A607-JP6.0.zip\n")),(0,a.yg)("p",null,"Here it will ask whether to replace the files. Type ",(0,a.yg)("strong",{parentName:"p"},"A")," and press ",(0,a.yg)("strong",{parentName:"p"},"ENTER")," to replace the necessary files:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson/A607/replace_files.png"})),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 5:")," Flash the system to either NVMe SSD:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 -c tools/kernel_flash/flash_l4t_t234_nvme.xml -p "-c bootloader/generic/cfg/flash_t234_qspi.xml" --showlogs --network usb0 jetson-orin-nano-devkit internal\n')),(0,a.yg)("p",null,"You will see the following output if the flashing process is successful:"),(0,a.yg)("div",{align:"center"},(0,a.yg)("img",{width:800,src:"https://files.seeedstudio.com/wiki/A603/10.jpg"})))),(0,a.yg)("h2",{id:"configure-wifi-and-bluetooth"},"Configure WiFi and Bluetooth"),(0,a.yg)("p",null,"After flashing is successful, the Jetson will boot into the OS. Now you need to additionally configure WiFi and Bluetooth."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 1:")," Visit ",(0,a.yg)("a",{parentName:"p",href:"https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/WiFi-BT-Driver"},"this page")," and click on ",(0,a.yg)("strong",{parentName:"p"},"8723du.ko")," to download the WiFi/ Bluetooth driver file needed and copy them to the device"),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 2:")," Create a new directory for the driver"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/\nsudo mkdir rtl8723du\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 3:")," Copy the previously downloaded ",(0,a.yg)("strong",{parentName:"p"},"8723du.ko")," file to the newly created directory"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"cd ~\nsudo cp 8723du.ko /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 4:")," Enable the driver"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"sudo modprobe cfg80211\nsudo insmod /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du/8723du.ko\nsudo depmod -a\nsudo modprobe 8723du\nsudo echo 8723du >> /etc/modules\n")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Step 5:")," Reboot the device "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,a.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,a.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.yg)("div",{class:"button_tech_support_container"},(0,a.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}h.isMDXComponent=!0}}]);