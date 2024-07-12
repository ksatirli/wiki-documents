"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19333],{15680:(e,t,r)=>{r.d(t,{xA:()=>p,yg:()=>h});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),m=o,h=l["".concat(c,".").concat(m)]||l[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},71170:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(58168),o=(r(96540),r(15680));const a={description:"Project Eight - Thermostat",title:"Project Eight - Thermostat",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Eight-Thermostat",last_update:{date:"2/15/2023",author:"jianjing Huang"}},i=void 0,s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat",title:"Project Eight - Thermostat",description:"Project Eight - Thermostat",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Project_Eight-Thermostat",permalink:"/Project_Eight-Thermostat",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Project Eight - Thermostat",title:"Project Eight - Thermostat",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Eight-Thermostat",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Project Seven - Temperature",permalink:"/Project_Seven-Temperature"},next:{title:"MicroPython for Arduino-supported Boards",permalink:"/Compiling_MicroPython_for_embedded_devices"}},c={},u=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:u},l="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(l,(0,n.A)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"The final project in our series may seem complex, but is quite simple. We use the potentiometer to allow user input of a temperature value, and using the temperature sensor \u2013 if the ambient temperature rises above the value set via the potentiometer the relay is activated."),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Connect the Temperature Sensor to the Analog A0/A1 input jack, like it was in Project 7.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The Grove produces an analog voltage on its D1 output, which is connected to Arduino A0 analog input on the A0/A1 input jack.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"Connect the Potentiometer to the Analog A4/A5 input jack.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The Potentiometer produces an analog voltage on its D1 output, which is connected to Arduino A4 analog input on the A4/A5 input jack.\nConnect the Relay to the D2/D3 input jack.")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"The Arduino's D2 pin sends a signal to the Relay on the D1 connector. The Relay's red light indicates whether the relay is on or off, and the relay makes a clicking sound when it switches."),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Project_Eight-Thermostat/img/Conn-eight.jpg",alt:null})),(0,o.yg)("p",{parentName:"li"},(0,o.yg)("em",{parentName:"p"},(0,o.yg)("strong",{parentName:"em"},"Now upload the following Arduino sketch:"))))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-c++"},"// Project Eight - Thermostat\n//\n\nint a,c,d;\nint z=3975;\nint relaypin=2;\nfloat b, q, resistance, temperature;\n\nvoid setup()\n{\n  pinMode(relaypin, OUTPUT);\n}\n\nvoid loop()\n{\n  a=analogRead(4);\n  b=0.0488*a;\n  c=int(b);\n  q=analogRead(0);\n  resistance=(float)(1023-q)*10000/q;\n  temperature=1/(log(resistance/10000)/z+1/298.15)-273.15;\n  d=int(temperature);\n  if (d&gt;=c)\n  {\n    digitalWrite(relaypin, HIGH);\n    delay(500);\n  }\n  if (d&lt;c)\n  {\n    digitalWrite(relaypin, LOW);\n    delay(500);\n  }\n}\n")),(0,o.yg)("p",null,"Try turning the potentiometer to the right and left and see if the relay turns on or off."),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);