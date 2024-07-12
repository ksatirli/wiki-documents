"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95184],{15680:(e,t,o)=>{o.d(t,{xA:()=>g,yg:()=>h});var n=o(96540);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},g=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,g=r(e,["components","mdxType","originalType","parentName"]),u=p(o),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||s;return o?n.createElement(h,a(a({ref:t},g),{},{components:o})):n.createElement(h,a({ref:t},g))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=o.length,a=new Array(s);a[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,a[1]=r;for(var p=2;p<s;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},15607:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var n=o(58168),i=(o(96540),o(15680));const s={description:"SenseCAP M2 Light Gateway Quick Start",title:"SenseCAP M2 Light Gateway Quick Start",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"03/23/2023",author:"Yvonne"}},a=void 0,r={unversionedId:"Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Quick_Start",id:"Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Quick_Start",title:"SenseCAP M2 Light Gateway Quick Start",description:"SenseCAP M2 Light Gateway Quick Start",source:"@site/docs/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Quick_Start.md",sourceDirName:"Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light",slug:"/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Quick_Start",permalink:"/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Quick_Start",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAPMX_Hotspot/Helium_Gateway/SenseCAP_M2_Light/Quick_Start.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1679529600,formattedLastUpdatedAt:"Mar 23, 2023",frontMatter:{description:"SenseCAP M2 Light Gateway Quick Start",title:"SenseCAP M2 Light Gateway Quick Start",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"03/23/2023",author:"Yvonne"}}},l={},p=[{value:"<strong>Step 1: Connect the SenseCAP M2</strong>",id:"step-1-connect-the-sensecap-m2",level:2},{value:"<strong>Step 2: Connect SenseCAP M2 to the APP</strong>",id:"step-2-connect-sensecap-m2-to-the-app",level:2},{value:"<strong>Step 3: Add SenseCAP M2 to the Blockchain</strong>",id:"step-3-add-sensecap-m2-to-the-blockchain",level:2},{value:"<strong>Step 4:\xa0Activate the SenseCAP M2 Light Hotspot</strong>",id:"step-4activate-the-sensecap-m2-light-hotspot",level:2},{value:"<strong>Purchase SenseCAP M2 Light Hotspot License</strong>\xa0",id:"purchase-sensecap-m2-light-hotspot-license",level:4}],g={toc:p},u="wrapper";function c(e){let{components:t,...o}=e;return(0,i.yg)(u,(0,n.A)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"step-1-connect-the-sensecap-m2"},(0,i.yg)("strong",{parentName:"h2"},"Step 1: Connect the SenseCAP M2")),(0,i.yg)("p",null,"Connect the antenna, power adaptor, and ethernet cable (not necessary ) to the hotspot and power it up."),(0,i.yg)("p",null,"The\xa0",(0,i.yg)("strong",{parentName:"p"},"power LED will"),"\xa0show in\xa0",(0,i.yg)("strong",{parentName:"p"},"red"),", and in about 15s (if you use PoE to power, this waiting time will be a little longer), the indicator on the top will flash\xa0",(0,i.yg)("strong",{parentName:"p"},"green"),", indicating that the hotspot is booting."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image1.png",alt:null})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"PoE Connection")),(0,i.yg)("p",null,"SenseCAP M2 supports PoE (Power on Ethernet) and is compatible with IEEE 802.3 af standard. You will need to have an extra PoE switch that provides 40V-57V DC power as a PSE (Power Sourcing Equipment) if your modem/router does not support PoE."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image2.png",alt:null})),(0,i.yg)("h2",{id:"step-2-connect-sensecap-m2-to-the-app"},(0,i.yg)("strong",{parentName:"h2"},"Step 2: Connect SenseCAP M2 to the APP")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Install Helium\xa0",(0,i.yg)("a",{parentName:"li",href:"https://docs.helium.com/wallets/helium-wallet-app"},"Wallet App"),"\xa0and SenseCAP Hotspot App")),(0,i.yg)("p",null,"Create an account for your\xa0SenseCAP Hotspot App."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image3.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Choose \u201cHelium\u201d\xa0\xa0and link your Helium Wallet to the SenseCAP Hotspot App.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image4.png",alt:null}),(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image5.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Click Onboard New Hotspot on the Wallet page and select \u201cSenseCAP M2\u201d to onboard")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image6.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Press the button of M2 for 5s until the blue indicator flashes slowly to enter configuration mode and follow the instruction in App to connect the SenseCAP M2.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image7.png",alt:null}),(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image8.png",alt:null})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE"),": Please choose \u201c",(0,i.yg)("strong",{parentName:"p"},"SenseCAP M2\u2033"),"\xa0for SenseCAP M2 Light Hotspot. If you have more than one hotspot around, you could identify the hotspot with the 6-figure MAC address under the hotspot name."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Set up the Wi-Fi Connection")),(0,i.yg)("p",null,"Click \u201cScan Networks\u201d, select the Wi-Fi, and enter the password; or click \u201cUse Ethernet Instead\u201d if you already use an ethernet cable or SIM card(for the 4G version)."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image9.png",alt:null})),(0,i.yg)("h2",{id:"step-3-add-sensecap-m2-to-the-blockchain"},(0,i.yg)("strong",{parentName:"h2"},"Step 3: Add SenseCAP M2 to the Blockchain")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Set and confirm the location of your hotspot, then add your hotspot to the blockchain.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE:"),"\xa0\xa0The SenseCAP M2 Light Hotspot has covered the $40 Helium network activation fee and the first location assert fee of $10 (worth $50 in total) in the purchase price. You could set up the location and change to another location if needed, but you will need to pay the $10 location assert fee again every time you move your hotspot to a new location."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image10.png",alt:null}),(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image11.png",alt:null}),(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image12.png",alt:null})),(0,i.yg)("p",null,"Now you have added your SenseCAP M2 to the blockchain(the indicator will flash white), but your device still\xa0",(0,i.yg)("strong",{parentName:"p"},"can\u2019t provide Helium coverage"),", please check step 4 to activate your hotspot."),(0,i.yg)("h2",{id:"step-4activate-the-sensecap-m2-light-hotspot"},(0,i.yg)("strong",{parentName:"h2"},"Step 4:\xa0Activate the SenseCAP M2 Light Hotspot")),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=D59QTtMUKdM"},(0,i.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/redeem.png",alt:"how to redeem SenseCAP License Card"}))),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Login\xa0",(0,i.yg)("a",{parentName:"li",href:"https://status.sensecapmx.cloud/#/login?redirect=/dashboard"},"SenseCAP Dashboard"),"\xa0with your SenseCAP Hotspot App\u2019s account")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image13.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Click\xa0",(0,i.yg)("strong",{parentName:"li"},"Redeem License"),"\xa0and enter the redeem code on your redeem card.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"NOTE"),": Please don\u2019t share your redeem code with others."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image14.png",alt:null}),"\n",(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image15.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Click Confirm button, then you will receive a license.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image16.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Click\xa0",(0,i.yg)("strong",{parentName:"li"},"Apply"),"\xa0and select the hotspot you want to activate.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image17.png",alt:null})," ",(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image18.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Then your hotspot will start to\xa0provide Helium LoRaWAN coverage now, and the indicator on the device will be green.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image19.png",alt:null})),(0,i.yg)("h4",{id:"purchase-sensecap-m2-light-hotspot-license"},(0,i.yg)("strong",{parentName:"h4"},"Purchase SenseCAP M2 Light Hotspot License"),"\xa0"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://youtu.be/efkWlmRGWmU"},(0,i.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/purchase.png",alt:"how to purchase SenseCAP License"}))),(0,i.yg)("p",null,"Once the license has expired,\xa0you can purchase it directly from the\xa0",(0,i.yg)("a",{parentName:"p",href:"https://status.sensecapmx.cloud/#/login?redirect=/dashboard"},"SenseCAP Hotspot Dashboard"),"\xa0and apply it to your device without purchasing the redeem card again."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Visit License page and click\xa0",(0,i.yg)("strong",{parentName:"li"},"Purchase\xa0License"),"\xa0button")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image20.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Select the licenses plan and Qty, then click the Checkout button")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image21.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Confirm your order and pay with PayPal")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image22.png",alt:null}),(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image23.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Then you can check your license on the\xa0",(0,i.yg)("strong",{parentName:"li"},"License"),"\xa0list")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image24.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Click\xa0",(0,i.yg)("strong",{parentName:"li"},"Apply"),"\xa0and select the hotspot you want to activate.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image25.png",alt:null}),"\n",(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image26.png",alt:null})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Then your hotspot will start to\xa0provide Helium LoRaWAN coverage now, and the indicator on the device will be green.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki-platform/sensor_network/M2_Light_Hotspot/image27.png",alt:null})))}c.isMDXComponent=!0}}]);