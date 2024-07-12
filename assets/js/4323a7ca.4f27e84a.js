"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88101],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),g=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=g(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=g(n),y=r,u=c["".concat(s,".").concat(y)]||c[y]||p[y]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var g=2;g<o;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},28907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var a=n(58168),r=(n(96540),n(15680));const o={description:"SenseCAP_Tracker_T1000-A/B_Bluetooth_Beacon",title:"E5 Bluetooth Beacon",keywords:["BLE","Positioning"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/bluetooth_beacon_for_SenseCAP_Traker",last_update:{date:"10/19/2023",author:"Jessie"}},i=void 0,l={unversionedId:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/E5_Bluetooth_Location_Beacon",id:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/E5_Bluetooth_Location_Beacon",title:"E5 Bluetooth Beacon",description:"SenseCAP_Tracker_T1000-A/B_Bluetooth_Beacon",source:"@site/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/E5_Bluetooth_Location_Beacon.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide",slug:"/bluetooth_beacon_for_SenseCAP_Traker",permalink:"/bluetooth_beacon_for_SenseCAP_Traker",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/User_Guide/E5_Bluetooth_Location_Beacon.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1697673600,formattedLastUpdatedAt:"Oct 19, 2023",frontMatter:{description:"SenseCAP_Tracker_T1000-A/B_Bluetooth_Beacon",title:"E5 Bluetooth Beacon",keywords:["BLE","Positioning"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/bluetooth_beacon_for_SenseCAP_Traker",last_update:{date:"10/19/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"How to get location via Wi-Fi",permalink:"/Tracker_WiFi_Geolocation"},next:{title:"SenseCAP T1000 Indoor Positioning System Guide",permalink:"/IPS_For_SenseCAP_T1000_Traker"}},s={},g=[{value:"Bluetooth Indoor Positioning System",id:"bluetooth-indoor-positioning-system",level:3},{value:"Features",id:"features",level:3},{value:"Button Function",id:"button-function",level:3},{value:"Deployment guidelines",id:"deployment-guidelines",level:2},{value:"Magnet Adsorption Installation Instructions",id:"magnet-adsorption-installation-instructions",level:3},{value:"Installation conditions",id:"installation-conditions",level:4},{value:"Installation steps",id:"installation-steps",level:4},{value:"3M glue/nail-free glue installation instructions",id:"3m-gluenail-free-glue-installation-instructions",level:3},{value:"Installation conditions",id:"installation-conditions-1",level:4},{value:"Installation steps",id:"installation-steps-1",level:4},{value:"Specification",id:"specification",level:3},{value:"Configuration",id:"configuration",level:2}],d={toc:g},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"A BLE (Bluetooth Low Energy) Location Beacon is a small wireless device that transmits Bluetooth signals at regular intervals. These signals can be detected by Bluetooth-enabled devices, such as SenseCAP T1000 Tracker, allowing them to determine their proximity to the beacon\uff0c building a location-based solution for indoor positioning, asset tracking and other applications."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_169626_-1Pgt7bfhzJ786G5_1693376261?w=1400&h=1050&type=image/jpeg",alt:"pir",width:800,height:"auto"})),(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now "))))),(0,r.yg)("h3",{id:"bluetooth-indoor-positioning-system"},"Bluetooth Indoor Positioning System"),(0,r.yg)("p",null,"GPS has proven its ability to locate outdoors. Now, we also tend to move to indoor positioning, and Bluetooth beacons make indoor precise positioning possible. Combine with SenseCAP T1000 Tracker to build an indoor positioning solution."),(0,r.yg)("p",null,"Deploy Bluetooth beacons in your target area, the tracker receives the signal sent by the beacon, and the positioning accuracy is at the meter level (2-3 meters). It can realize functions such as asset tracking, route planning, reverse car search, etc., and can be integrated into applets and APPs."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEwNA_594585_HptIoexn6zqh4-oS_1692694140?w=1424&h=328&type=image/png",alt:"pir",width:800,height:"auto"})),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Check ",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/IPS_For_SenseCAP_T1000_Traker"},"Indoor Positioning System")," for more details.")),(0,r.yg)("h3",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Bluetooth\xae LE 5.0")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Long battery life"),": Replaceable lithium battery, more than 5 years (0dBm/500ms in default configuration)."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Long-distance transmission"),": Up to 120 meters in open areas."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"High compatibility"),": Compatible with iOS 7.0+ and Android 4.3+ systems")),(0,r.yg)("h3",{id:"button-function"},"Button Function"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"Power on"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Power off"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Open the back cover of the product, press and hold the button for 3 seconds, and the blue LED will light up for 5 seconds, then the boot is successful."),(0,r.yg)("td",{parentName:"tr",align:"center"},"In the power-on state, open the back cover of the product, press and hold the button for 3 seconds, and the blue LED flashes 5 times to indicate a successful shutdown.")))),(0,r.yg)("h2",{id:"deployment-guidelines"},"Deployment guidelines"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Bluetooth beacons are typically positioned 2.5-3m above ground level, with a horizontal spacing of 5-10m. These beacons can be deployed either in column formations or evenly distributed in triangular patterns, depending on the environment.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble1.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Deployment strategies vary across scenarios. For instance, indoor settings might involve central (narrow) placement or triangular grid distribution (sparse). In indoor corridors, options include centerline deployment (for corridors around 3m wide) or dual-column arrangement (wider corridors). Avoid ceiling mounting in high-rise buildings (floor height > 4m). Opt instead for wall or low-level installation, approximately 5m apart. Outdoors, use a triangular grid pattern for open spaces.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ble2.png",alt:"pir",width:700,height:"auto"})),(0,r.yg)("center",null,(0,r.yg)("i",null,"The red ones are wrong examples and the blue ones are correct ones.")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"In humid environments, factor in the product's waterproof rating during deployment to prevent prolonged water exposure. ")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Maintain a distance from metallic, glass, or other obstructing elements when situating the product, should not be close to the corner."))),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"The deployment guidelines are for reference only. Actual deployment should be customized based on customer positioning algorithms, product installation surroundings, and testing conditions.")),(0,r.yg)("h3",{id:"magnet-adsorption-installation-instructions"},"Magnet Adsorption Installation Instructions"),(0,r.yg)("h4",{id:"installation-conditions"},"Installation conditions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The tool or platform material table for product installation should be the surface of equipment or brackets that can be attracted by magnets; "),(0,r.yg)("li",{parentName:"ul"},"Recommended installation temperature range: 20~40\xb0C;"),(0,r.yg)("li",{parentName:"ul"},"When installing the product, try to keep it away from corners, other surrounding magnetic fields and large obstacles.")),(0,r.yg)("h4",{id:"installation-steps"},"Installation steps"),(0,r.yg)("p",null,"The magnetic contact surface of the product can be directly adsorbed to the surface of the bracket or equipment to be installed."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"Because the volume of magnetic products is heavier than that of general products (without magnet absorption), it is recommended not to install such products on surfaces such as ceilings to avoid the risk of falling.")),(0,r.yg)("h3",{id:"3m-gluenail-free-glue-installation-instructions"},"3M glue/nail-free glue installation instructions"),(0,r.yg)("h4",{id:"installation-conditions-1"},"Installation conditions"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The surface of the platform material on which the product is installed should be a flat, dry surface such as ceramics, glass/epoxy resin, acrylic, PBT, ABS, PC, and rigid PVC. Due to the differences in the viscosity and installability of different double-sided adhesive models, it is not recommended to use the default double-sided adhesive on walls with gray texture, incomplete drying, aging, and humidity (such as cement, gypsum board, etc.). There is a risk of shedding;"),(0,r.yg)("li",{parentName:"ul"},"Recommended installation temperature range: 20~40\u2103; "),(0,r.yg)("li",{parentName:"ul"},"The product should be installed away from metal, glass shielding or other obstructions; the product should not be deployed close to the corner.")),(0,r.yg)("h4",{id:"installation-steps-1"},"Installation steps"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Before installation: clean the surface of the application platform or tool to be pasted, and ensure that the pasted surface is dry and dust-free;"),(0,r.yg)("li",{parentName:"ul"},"When pasting, stick the double-sided tape to the device with your hands or tools and press it for 1-2 seconds. Repeat the pressing several times to make the double-sided tape or nail-free glue of the product and the application paste surface better bonded.")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"If you need to install the product in a low temperature environment or in a harsh environment, it is recommended to use double-sided adhesive + strong nail-free adhesive to install the product for the best effect. Please contact our sales staff for more information on nail-free glue.")),(0,r.yg)("h3",{id:"specification"},"Specification"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"General Specification")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},"UUID"),(0,r.yg)("th",{parentName:"tr",align:"center"},"PC"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Color"),(0,r.yg)("td",{parentName:"tr",align:"center"},"White")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"IP rate"),(0,r.yg)("td",{parentName:"tr",align:"center"},"None")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Dimension(L","*","W","*","H)"),(0,r.yg)("td",{parentName:"tr",align:"center"},"\u03a650","*","20.5mm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Weight"),(0,r.yg)("td",{parentName:"tr",align:"center"},"39g(include battery)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Battery"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Lithium battery, 2400mAh")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Chip"),(0,r.yg)("td",{parentName:"tr",align:"center"},"nRF52 series")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Bluetooth Version"),(0,r.yg)("td",{parentName:"tr",align:"center"},"BLE 5.0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Bluetooth Protocol"),(0,r.yg)("td",{parentName:"tr",align:"center"},"iBeacon")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Sensors"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Support accelerometer")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"LED"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Included")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"APP"),(0,r.yg)("td",{parentName:"tr",align:"center"},"BeaconSET")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Working temperature"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-30~60\xb0C")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Battery life"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"More than 5 years"),(0,r.yg)("p",null,"(0dBm/500ms in default configuration)."),(0,r.yg)("p",null))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Default broadcast parameters")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"th"},"Parameters")),(0,r.yg)("th",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"th"},"Default Value")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"UUID"),(0,r.yg)("td",{parentName:"tr",align:"center"},"FDA50693-A4E2-4FB1-AFCF-C6EB07647825")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Major"),(0,r.yg)("td",{parentName:"tr",align:"center"},"10001")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Minor"),(0,r.yg)("td",{parentName:"tr",align:"center"},"19641")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Measured power"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-59dBm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Tx Power"),(0,r.yg)("td",{parentName:"tr",align:"center"},"-30 - +4dBm, default 0dBm")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Adv Interval"),(0,r.yg)("td",{parentName:"tr",align:"center"},"100ms~10s,default 500ms")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Password"),(0,r.yg)("td",{parentName:"tr",align:"center"},"minew123 \uff08Letters and numbers\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Serial ID"),(0,r.yg)("td",{parentName:"tr",align:"center"},"None")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Device Name"),(0,r.yg)("td",{parentName:"tr",align:"center"},"E5 (1-7 characters)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Connection Mode"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Yes/No")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Soft Reboot"),(0,r.yg)("td",{parentName:"tr",align:"center"},"minew123 \uff08same with the password\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Battery Service"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"Battery icon display, real-time detection"),(0,r.yg)("p",null,"full grid is 100%"))))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Compatibility information")),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"th"},"System")),(0,r.yg)("th",{parentName:"tr",align:"center"},(0,r.yg)("strong",{parentName:"th"},"Devices")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"BLE"),(0,r.yg)("td",{parentName:"tr",align:"center"},"BLE 4.2+")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"IOS 7.0+"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"iPhone 4S,iPhone 5/5C/5S, "),(0,r.yg)("p",null,"iPhone 6/6Plus/6S/6SPlus,iPhone 7/7Plus, "),(0,r.yg)("p",null,"iPad mini/mini2/4/Air/Pro,etc."),(0,r.yg)("p",null))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"center"},"Android 4.3+"),(0,r.yg)("td",{parentName:"tr",align:"center"},(0,r.yg)("p",null,"Samsung\uff0cXIAOMI\uff0cHUAWEI\uff0cONEPLUS\uff0cViVO\uff0cOPPO ,etc."),(0,r.yg)("p",null))))),(0,r.yg)("h2",{id:"configuration"},"Configuration"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 1"),": Download ",(0,r.yg)("inlineCode",{parentName:"li"},"Beaconset")," APP")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 2"),": Connect the beacon, you can distinguish them by the MAC address which is also attached to the beacon label.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/set-beacon2.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Step 3"),": Settings")),(0,r.yg)("p",null,"Modify the param according to your need, and then click ",(0,r.yg)("inlineCode",{parentName:"p"},"Save"),"."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/setting-beacon.png",alt:"pir",width:600,height:"auto"})))}p.isMDXComponent=!0}}]);