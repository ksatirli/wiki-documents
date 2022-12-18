"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7506],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(r),h=n,u=d["".concat(l,".").concat(h)]||d[h]||c[h]||i;return r?a.createElement(u,o(o({ref:t},m),{},{components:r})):a.createElement(u,o({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},683:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const i={description:"Create a doc page with rich content.",title:"Hardware Layout for reComputer",tags:["Demo","Getting started"],keywords:["docs","docusaurus"],image:"https://avatars.githubusercontent.com/u/10758833",last_update:{date:"11/23/2022",author:"mouseart"}},o=void 0,p={unversionedId:"reComputer_Jetson_Series_Hardware_Layout",id:"reComputer_Jetson_Series_Hardware_Layout",title:"Hardware Layout for reComputer",description:"Create a doc page with rich content.",source:"@site/docs/reComputer_Jetson_Series_Hardware_Layout.md",sourceDirName:".",slug:"/reComputer_Jetson_Series_Hardware_Layout",permalink:"/wiki-documents/zh-CN/reComputer_Jetson_Series_Hardware_Layout",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/edit/docusaurus-version/docs/reComputer_Jetson_Series_Hardware_Layout.md",tags:[{label:"Demo",permalink:"/wiki-documents/zh-CN/tags/demo"},{label:"Getting started",permalink:"/wiki-documents/zh-CN/tags/getting-started"}],version:"current",lastUpdatedBy:"mouseart",lastUpdatedAt:1669161600,formattedLastUpdatedAt:"2022\u5e7411\u670823\u65e5",frontMatter:{description:"Create a doc page with rich content.",title:"Hardware Layout for reComputer",tags:["Demo","Getting started"],keywords:["docs","docusaurus"],image:"https://avatars.githubusercontent.com/u/10758833",last_update:{date:"11/23/2022",author:"mouseart"}},sidebar:"tutorialSidebar",previous:{title:"Contents & Framework",permalink:"/wiki-documents/zh-CN/Industrial_IoT/SenseCAP_The_Sensor_Prototype_Kit/K1100_Getting_Started"},next:{title:"A Comparison of Different Grove Temperature Sensors",permalink:"/wiki-documents/zh-CN/A_Comparison_of_Different_Grove_Temperature_Sensors"}},l={},s=[{value:"reComputer Series Placement",id:"recomputer-series-placement",level:2},{value:"reComputer Series Top Cover",id:"recomputer-series-top-cover",level:2},{value:"Remove the Core Board from the Carrier Board",id:"remove-the-core-board-from-the-carrier-board",level:2}],m={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian.png",alt:"pir",width:600,height:"auto"})),"You will get the basic idea of the reComputer for Jetson Series hardware layout here. Meanwhile, you will know how to remove and install the core board from the carrier board, how to install the camera, M.2 Wi-Fi module or hard disk, etc.",(0,n.kt)("h2",{id:"recomputer-series-placement"},"reComputer Series Placement"),(0,n.kt)("p",null,"  When facing the backplane of the reComputer interface, there are 4 anti-skid pads on the right side of the chassis for easy standing, as shown in the figure below."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian1.png",alt:"pir",width:600,height:"auto"})),"The bottom of the reComputer chassis is a suspended structure, and the chassis can be fixed on some inconvenient structures with binding tapes. The chassis bottom plate has 4 fixing holes to facilitate fixing on the facade or slope.",(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/Jetsonbackspec2.png",alt:"pir",width:800,height:"auto"})),(0,n.kt)("h2",{id:"recomputer-series-top-cover"},"reComputer Series Top Cover"),(0,n.kt)("p",null,"  When facing the backplane of the reComputer interface, there are 4 anti-skid pads on the right side of the chassis, where a metal button can be seen, as shown in the following figure:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly.jpg",alt:"pir",width:500,height:"auto"})),"Push the button up to lift the top cover of the case, and then you can lift it open to remove the top cover.",(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly1.jpg",alt:"pir",width:500,height:"auto"})),(0,n.kt)("h2",{id:"remove-the-core-board-from-the-carrier-board"},"Remove the Core Board from the Carrier Board"),(0,n.kt)("p",null,"  After opening the chassis, you can see the module inserted on the carrier board, as shown in the following figure. The module can be removed from the carrier board by following the steps below."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1"),". Before removing the core version, first you must confirm whether the fan power supply is connected. If it is, you need to unplug the fan power supply from the plug (For Jetson Nano there may not be a fan and you can skip this step).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2"),". Remove the screws that hold the core plate with a cross screwdriver."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg",alt:"pir",width:500,height:"auto"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3"),". Open the clamp on the carrier plate outward, and the core plate will spring up automatically."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly3.jpg",alt:"pir",width:500,height:"auto"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4"),". Remove the core board diagonally upwards."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly4.jpg",alt:"pir",width:500,height:"auto"})),(0,n.kt)("h2",{parentName:"li",id:"mount-the-module-on-the-carrier-coard"},"Mount the Module on the Carrier Coard")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1"),". Find the corresponding Jetson SODIMM connector fingers on the carrier board and the connector on the module."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion.jpg",alt:"pir",width:500,height:"auto"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2"),". Insert the module diagonally about 20 degrees into the slot of the carrier plate. Press down and it will be fixed on the carrier board."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion2.jpg",alt:"pir",width:500,height:"auto"})),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"You may find that under the correct installation there are a few connector fingers shown at the interface. It will be unstable once many connector fingers are exposed."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerreinstalltion3.jpg",alt:"pir",width:800,height:"auto"})))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3"),". Use a cross screwdriver to tighten the screws."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/reComputerdisassembly2.jpg",alt:"pir",width:500,height:"auto"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4"),". If the module includes a cooling fan, plug the fan's power plug into the power socket on the carrier board."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian2.jpg",alt:"pir",width:600,height:"auto"})),":::",(0,n.kt)("h2",{parentName:"li",id:"remove-carrier-coard-from-the-recomputer-chassis"},"Remove Carrier Coard from the reComputer Chassis"),(0,n.kt)("p",{parentName:"li"},"When we want to install the M.2 module or CSI camera and other operations, we will need to remove the carrier board from the reComputer chassis for more easier operation. The carrier board is fixed to the chassis base with 4 screws, as shown in the following figure:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian5.jpg",alt:"pir",width:600,height:"auto"})),"Remove the 4 fixing screws as shown below:",(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian6.jpg",alt:"pir",width:600,height:"auto"})),"Take the carrier board together with the module out of the chassis:",(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian7.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{parentName:"li",id:"equip-the-recomputer-with-a-camera-module"},"Equip the reComputer with a Camera Module"),(0,n.kt)("p",{parentName:"li"},"Both reComputer carrier boards have two CSI interfaces. The interfaces are usually used to connect a camera for some identification projects. Here we take the J1010 carrier board as an example to guide you to equip and use the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html"},"Raspberry Pi Camera Module V2")," on the reComputer.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1"),". Mount the camera module on the carrier board"),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Before installation, please turn off the reComputer, unplug the power supply, and open the top cover of the chassis.\nFor the convenience of demonstration below, we removed the carrier board from the chassis and the module. The actual operation only needs to open the top cover.")),(0,n.kt)("p",{parentName:"li"},"Select the CSI connector you want to use, then gently flip up the black retention slots on both sides."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/chai.jpg"})),"Make sure to set the black slot aside before inserting the cable into the slot.",(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/cha.jpg"})),"Watch out the direction of the cable. You can see that the side of the cable pin is facing the carrier board, and the blue side is facing out.",(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/que.JPG"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2"),". Power on and start reComputer."),(0,n.kt)("p",{parentName:"li"},"After plugging in the camera cable, make sure that the module, carrier board and peripherals are all installed in place. And then power on.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3"),". Check if the camera is recognized.\nEnter the following command in the command line window to see if a camera device is currently available."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ ls /dev/video0 \n")),(0,n.kt)("p",{parentName:"li"},"If the output shows as below, it means that the camera has been successfully detected."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/50.jpg"})),"If you don't see the device file, check whether your ribbon is oriented correctly and make sure your Raspberry Pi camera is V2 version as the V1 version is not recognized."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4"),". Apply the Camera\nYou can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"sensor_mode")," attribute with the GStreamer nvarguscamerasrc element to specify which camera. Valid values \u200b\u200bare 0 or 1 (defaults to 0 if not specified), i.e."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# Simple Test\n# Ctrl^C to exit\n# sensor_id selects the camera: 0 or 1 on Jetson Nano B01\n$ gst-launch-1.0 nvarguscamerasrc sensor_id=0 ! nvoverlaysink\n")),(0,n.kt)("p",{parentName:"li"},"You can use the following commands in the command line window to test the usage of the camera.\nAfter running this command, reComputer will display the screen captured by the camera in full screen until you press ",(0,n.kt)("inlineCode",{parentName:"p"},"Ctrl+C"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/51.jpg"})),(0,n.kt)("p",{parentName:"li"},"If you have more camera usage needs, you can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/JetsonHacksNano/CSI-Camera"},"CSI-Camera project")," to explore and learn by yourself."),(0,n.kt)("h2",{parentName:"li",id:"equip-the-wireless-module-for-the-recomputer"},"Equip the Wireless Module for the reComputer"),(0,n.kt)("p",{parentName:"li"},"Here we will show you how to install an M.2 Key E wireless module on the reComputer.\nEquipment and accessories required:")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"reComputer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.intel.cn/content/www/cn/zh/products/sku/123742/intel-dual-band-wirelessac-8265-desktop-kit/specifications.html"},"Intel\xae Dual Band Wireless-AC 8265 wireless module"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2 x IPEX to SMA Female External Antenna Adapter and SMA Male Antenna for WIFI Module")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Phillips screwdriver and screws"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian8.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Installing the wireless module of the M.2 Key E requires additional antennas. Because the module is in the chassis, it may even be pressed between the module and the carrier board. Without antennas, the signal strength will be greatly affected."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1"),". Detach the carrier board from the reComputer chassis\nBefore installing the wireless module, detach the carrier board from the reComputer chassis as shown below:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian9.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2"),". Remove the case silicone plug\nThere are 4 reserved antenna openings in the chassis, where are plugged with silicone plugs, as shown in the figure below."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian10.jpg",alt:"pir",width:600,height:"auto"})),"Select the two outer holes, squeeze the silicone plug from the outside of the chassis to the inside of the chassis, and then pull out the silicone plug from the inside to expose the antenna hole.",(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian11.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3"),". Install the SAM header\nAs shown in the figure below, install the nut and nut of the SAM head to the wifi hole, paying attention to place the cable end in the chassis."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian12.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4"),". Insert the wireless module into the M.2 Key E port"),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The M.2 Key E interface is on the bottom or top of the carrier board. For different carriers, please refer to Carrier Board Hardware Layout. Before installation, you may want to remove the core board from the carrier board.")),(0,n.kt)("p",{parentName:"li"},"As shown in the figure below, find the M.2 Key E interface on the carrier board, and insert the wireless module into the interface slot."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian13.jpg",alt:"pir",width:600,height:"auto"})),"After the wireless module is firmly inserted, fix it with screws.",(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian14.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5"),". Insert 2 IPEX plugs into the corresponding sockets of the wireless module, the connection is a button connection, as shown in the figure below. Simply press it and no more operations are required."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian15.jpg",alt:"pir",width:600,height:"auto"})),"The installation should be like the figure shown below. At this time, be careful not to break the wire between the wireless module and the SAM antenna base.",(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian16.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 6"),". Install the module to the chassis\nPlace carefully the carrier board into the reComputer chassis and then install the screws."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian17.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 7"),". Equip antennas\nInstall two SAM male antennas to the SAM female sockets and tighten. That will be all the hardware installation."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian18.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 8"),". Power on the reComputer and connect to the wireless network\nConnect the peripherals to the reComputer and then power on. Enter the system and open the network option in the upper right corner of the screen. After checking the ",(0,n.kt)("strong",{parentName:"p"},"Enable Wi-Fi")," option, you will see the nearby wireless network. Select the available wireless network connection."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/reyingjian19.jpg",alt:"pir",width:800,height:"auto"})),"Congratulations, you have successfully installed the wireless module and connected to the network.",(0,n.kt)("h2",{parentName:"li",id:"hardware-layout"},"Hardware Layout"),(0,n.kt)("h3",{parentName:"li",id:"j101-carrier-board"},(0,n.kt)("strong",{parentName:"h3"},"J101 carrier board")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Top View")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer/reComputerJ101v2.png",alt:"pir",width:750,height:"auto"})),(0,n.kt)("h3",{parentName:"li",id:"j202-carrier-board"},(0,n.kt)("strong",{parentName:"h3"},"J202 carrier board")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Top View")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/products/102991695/J202%20FRONT.png",alt:"pir",width:750,height:"auto"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Bottom View")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/products/102991695/J202%20BACK.png",alt:"pir",width:750,height:"auto"})),(0,n.kt)("h3",{parentName:"li",id:"jetson-a206-carrier-boardequipped-with-jetson-nano"},(0,n.kt)("strong",{parentName:"h3"},"Jetson A206 carrier board(equipped with Jetson Nano)")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Click ",(0,n.kt)("a",{parentName:"em",href:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf"},"here")," to check out the pins of Jetson A206 carrier board(equipped with Jetson Nano) to the operating interfaces.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Top View")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboard.jpg",alt:"pir",width:750,height:"auto"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Bottom View")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh01carriedboards.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h3",{parentName:"li",id:"jetson-a206-carrier-board-equipped-with-jetson-xavier-nx"},(0,n.kt)("strong",{parentName:"h3"},"Jetson A206 carrier board (equipped with Jetson Xavier NX)")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Click ",(0,n.kt)("a",{parentName:"em",href:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/A206-carrier-board.pdf"},"here")," to check out the pins of Jetson A206 carrier board(equipped with Jetson Nano) to the operating interfaces.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Top View")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboard.jpg",alt:"pir",width:750,height:"auto"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Bottom View")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputer-Jetson-20-1-H1/Jetsonh02carriedboards.jpg",alt:"pir",width:720,height:"auto"})),(0,n.kt)("h2",{parentName:"li",id:"detailed-comparison"},"Detailed Comparison"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Product"),(0,n.kt)("th",{parentName:"tr",align:"center"},"reComputer J1010"),(0,n.kt)("th",{parentName:"tr",align:"center"},"reComputer J1020"),(0,n.kt)("th",{parentName:"tr",align:"center"},"reComputer J2011"),(0,n.kt)("th",{parentName:"tr",align:"center"},"reComputer J2012"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Module"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Nano"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Nano"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Xavier NX"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Xavier NX 16GB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"AI Perf"),(0,n.kt)("td",{parentName:"tr",align:"center"},"472 GFLOPS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"472 GFLOPS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"21 TOPS"),(0,n.kt)("td",{parentName:"tr",align:"center"},"21 TOPS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"GPU"),(0,n.kt)("td",{parentName:"tr",align:"center"},"128-core NVIDIA Maxwell\u2122"),(0,n.kt)("td",{parentName:"tr",align:"center"},"128-core NVIDIA Maxwell\u2122"),(0,n.kt)("td",{parentName:"tr",align:"center"},"384-core NVIDIA Volta\u2122 GPU"),(0,n.kt)("td",{parentName:"tr",align:"center"},"384-core NVIDIA Volta\u2122 GPU")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CPU"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quad-core ARM A57 @ 1.43 GHz"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quad-core ARM A57 @ 1.43 GHz"),(0,n.kt)("td",{parentName:"tr",align:"center"},"6-core NVIDIA Carmel ARM\xaev8.2 64-bit CPU 6 MB L2 + 4 MB L3"),(0,n.kt)("td",{parentName:"tr",align:"center"},"6-core NVIDIA Carmel ARM\xaev8.2 64-bit CPU 6 MB L2 + 4 MB L3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Memory"),(0,n.kt)("td",{parentName:"tr",align:"center"},"4GB 64-bit LPDDR4 25.6GB/s"),(0,n.kt)("td",{parentName:"tr",align:"center"},"4GB 64-bit LPDDR4 25.6GB/s"),(0,n.kt)("td",{parentName:"tr",align:"center"},"8 GB 128-bit LPDDR4x 59.7GB/s"),(0,n.kt)("td",{parentName:"tr",align:"center"},"8 GB 128-bit LPDDR4x 59.7GB/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Storage"),(0,n.kt)("td",{parentName:"tr",align:"center"},"16 GB eMMC"),(0,n.kt)("td",{parentName:"tr",align:"center"},"16 GB eMMC"),(0,n.kt)("td",{parentName:"tr",align:"center"},"16 GB eMMC"),(0,n.kt)("td",{parentName:"tr",align:"center"},"16 GB eMMC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VIDEO ENCODER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"4K30 ","|"," 2x1080p60 ","|"," 4x1080p30 ","|","  4x720p60 ","|"," 9x720p30 (H.265 ","&"," H.264)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"4K30 ","|"," 2x1080p60 ","|"," 4x1080p30 ","|","  4x720p60 ","|"," 9x720p30 (H.265 ","&"," H.264)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2x 4K60 ","|"," 4x 4K30 ","|"," 10x 1080p60 ","|"," 22x 1080p30 (H.265)  2x 4K60 ","|"," 4x 4K30 ","|"," 10x 1080p60 ","|"," 20x 108p30 (H.264)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2x 4K60 ","|"," 4x 4K30 ","|"," 10x 1080p60 ","|"," 22x 1080p30 (H.265)  2x 4K60 ","|"," 4x 4K30 ","|"," 10x 1080p60 ","|"," 20x 108p30 (H.264)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"VIDEO DECODER"),(0,n.kt)("td",{parentName:"tr",align:"center"},"4K60 ","|"," 2x 4K30 ","|"," 4x 1080p60 ","|"," 8x 1080p30 ","|"," 9x 720p60 (H.265 ","&"," H.264)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"4K60 ","|"," 2x 4K30 ","|"," 4x 1080p60 ","|"," 8x 1080p30 ","|"," 9x 720p60 (H.265 ","&"," H.264)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2x 8K30 ","|"," 6x 4K60 ","|"," 12x 4K30 ","|"," 22x 1080p60 ","|"," 44x 1080p30 (H.265)  2x 4K60 ","|"," 6x 4K30 ","|"," 10x 1080p60 ","|"," 22x 1080p30 (H.264)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2x 8K30 ","|"," 6x 4K60 ","|"," 12x 4K30 ","|"," 22x 1080p60 ","|"," 44x 1080p30 (H.265)  2x 4K60 ","|"," 6x 4K30 ","|"," 10x 1080p60 ","|"," 22x 1080p30 (H.264)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Gigabit Ethernet"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x RJ45 Gigabit Ethernet Connector (10/100/1000)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x RJ45 Gigabit Ethernet Connector (10/100/1000)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x RJ45 Gigabit Ethernet Connector (10/100/1000)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x RJ45 Gigabit Ethernet Connector (10/100/1000)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"USB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1 x  USB 3.0 Type A Connector;  2 x  USB 2.0 Type A Connector; 1 x  USB Type C for Device mode; 1 x  USB Type C for 5V power input"),(0,n.kt)("td",{parentName:"tr",align:"center"},"4 x  USB 3.0 Type A Connector\uff1b 1 x  Micro-USB port for Device mode;"),(0,n.kt)("td",{parentName:"tr",align:"center"},"4 x  USB 3.0 Type A Connector\uff1b 1 x  Micro-USB port for Device mode;"),(0,n.kt)("td",{parentName:"tr",align:"center"},"4 x  USB 3.0 Type A Connector\uff1b 1 x  Micro-USB port for Device mode;")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"CSI Camera Connect"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Display"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x HDMI Type A"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1xHDMI Type A; 1xDP"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1xHDMI Type A; 1xDP"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1xHDMI Type A; 1xDP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"FAN"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x  FAN(5V PWM)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x  FAN(5V PWM)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x  FAN(5V PWM)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x  FAN(5V PWM)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"M.2 KEY E"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x M.2 Key E"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x M.2 Key E\uff08Disabled\uff09"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x M.2 Key E"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x M.2 Key E")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"M.2 KEY M"),(0,n.kt)("td",{parentName:"tr",align:"center"},"-"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x M.2 Key M"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x M.2 Key M"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x M.2 Key M")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"RTC"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x RTC Socket"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x RTC socket"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x RTC Socket"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x RTC Socket")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Multifunctional port"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x  40-Pin header"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x  40-Pin header"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x  40-Pin header"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1x  40-Pin header")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Power"),(0,n.kt)("td",{parentName:"tr",align:"center"},"USB-Type C 5V\u23933A\uff1b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DC Jack 12V/2A"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DC Jack 19V/4.74A (MAX 90W) MAX"),(0,n.kt)("td",{parentName:"tr",align:"center"},"DC Jack 19V/4.74A (MAX 90W) MAX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Mechanical"),(0,n.kt)("td",{parentName:"tr",align:"center"},"130 mm x 120 mm x 50 mm"),(0,n.kt)("td",{parentName:"tr",align:"center"},"130mm x120mm x 50mm"),(0,n.kt)("td",{parentName:"tr",align:"center"},"130mm x120mm x 50mm"),(0,n.kt)("td",{parentName:"tr",align:"center"},"130mm x120mm x 50mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"})))),(0,n.kt)("h2",{parentName:"li",id:"carrier-board-technical-specification"},"Carrier Board Technical Specification"),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Connector"),(0,n.kt)("th",{parentName:"tr",align:null},"J1010 Carrier Board"),(0,n.kt)("th",{parentName:"tr",align:null},"Jetson A206 Carrier Board"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Jetson module connector"),(0,n.kt)("td",{parentName:"tr",align:null},"1x Jetson SODIMM connector, 260-pin"),(0,n.kt)("td",{parentName:"tr",align:null},"1x Jetson SODIMM connector, 260-pin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USB Type A"),(0,n.kt)("td",{parentName:"tr",align:null},"1x USB 3.0 Type-A Connector 2x USB 2.0 Type A connectors"),(0,n.kt)("td",{parentName:"tr",align:null},"4x USB 3.0 Type-A Connectors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USB Micro Type B"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"1x USB Micro B, RA Female")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USB Type C"),(0,n.kt)("td",{parentName:"tr",align:null},"2x Type C connector"),(0,n.kt)("td",{parentName:"tr",align:null},"-")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ethernet Port"),(0,n.kt)("td",{parentName:"tr",align:null},"1x RJ45 Gigabit Ethernet Connector (10/100/1000)"),(0,n.kt)("td",{parentName:"tr",align:null},"1x RJ45 Gigabit Ethernet Connector (10/100/1000)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Port"),(0,n.kt)("td",{parentName:"tr",align:null},"1xHDMI type A"),(0,n.kt)("td",{parentName:"tr",align:null},"1xHDMI type A and 1xDP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CSI Camera Connector"),(0,n.kt)("td",{parentName:"tr",align:null},"2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )"),(0,n.kt)("td",{parentName:"tr",align:null},"2x CSI Camera (15 pos, 1mm pitch, MIPI CSI-2 )")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"M.2 Key E"),(0,n.kt)("td",{parentName:"tr",align:null},"1x M.2 Key E Slot (75-pin) 2230"),(0,n.kt)("td",{parentName:"tr",align:null},"1x M.2 Key E Slot (75-pin) 2230")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"M.2 Key M"),(0,n.kt)("td",{parentName:"tr",align:null},"-"),(0,n.kt)("td",{parentName:"tr",align:null},"1x M.2 Key M Slot (75-pin) NVME 2280")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Multifunctional Port"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0 Pitch 40 PIN"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0 Pitch 40 PIN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Button Header"),(0,n.kt)("td",{parentName:"tr",align:null},"1x Button Header (1x12, 2.54mm pitch, RA)"),(0,n.kt)("td",{parentName:"tr",align:null},"1x Button Header (1x12, 2.54mm pitch, RA)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FAN Connector"),(0,n.kt)("td",{parentName:"tr",align:null},"1x Picoblade Header"),(0,n.kt)("td",{parentName:"tr",align:null},"1x Picoblade Header")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CAN"),(0,n.kt)("td",{parentName:"tr",align:null},"Diasabled"),(0,n.kt)("td",{parentName:"tr",align:null},"1x CAN Bus Header (1x4, 2.54mm pitch, RA)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RTC"),(0,n.kt)("td",{parentName:"tr",align:null},"1x RTC Back-up Coin Cell Socket (CR1220)"),(0,n.kt)("td",{parentName:"tr",align:null},"1x RTC Back-up Coin Cell Socket (CR1225)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Power"),(0,n.kt)("td",{parentName:"tr",align:null},"1x Type C connector"),(0,n.kt)("td",{parentName:"tr",align:null},"1x DC Input Power TE Connector")))))))}c.isMDXComponent=!0}}]);