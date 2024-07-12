"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28440],{15680:(e,t,n)=>{n.d(t,{xA:()=>s,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=o,m=c["".concat(p,".").concat(d)]||c[d]||g[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(58168),o=(n(96540),n(15680));const i={description:"LinkIt ONE Tutorial - Analog Interface",title:"LinkIt ONE Tutorial - Analog Interface",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Analog_Interface",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Analog_Interface",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Analog_Interface",title:"LinkIt ONE Tutorial - Analog Interface",description:"LinkIt ONE Tutorial - Analog Interface",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Analog_Interface.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE_Tutorial-Analog_Interface",permalink:"/LinkIt_ONE_Tutorial-Analog_Interface",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Analog_Interface.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"LinkIt ONE Tutorial - Analog Interface",title:"LinkIt ONE Tutorial - Analog Interface",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Analog_Interface",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE",permalink:"/LinkIt_ONE"},next:{title:"LinkIt ONE Tutorial - Colorful World",permalink:"/LinkIt_ONE_Tutorial-Colorful_World"}},p={},u=[{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],s={toc:u},c="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(c,(0,r.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"What We're Doing")),(0,o.yg)("p",null,"In the previous sections, we learned how to control the circuit's input and output using digital interface. In this section, we will learn how to vary the output using an analog device called a potentiometer (also known as a variable resistor). A potentiometer is used to vary the voltage in the range of 0 ~ 5V. The MPU reads the voltage value in the range of 0-1023.This can be used to control the brightness of the LED (PWM simulation output interface). If the potentiometer is turned clockwise, the LED brightens gradually. If it is rotated anticlockwise, the luminosity fades."),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Things you need")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"LinkIt One x 1")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Break board x 1")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Resistors 330\u03a9,10k\u03a9,1k\u03a9 x 1")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"5mm LED x 1")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Slide Potentiometer 10k\u03a9 x 1")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Transistor\uff082N3904\uff09 x 1"))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Schematic")),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/LinkItONE_Kit_6_1.jpg",alt:null})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Connection")),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/LinkItONE_Kit_6_2.jpg",alt:null})),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Code")),(0,o.yg)("p",null,"Please click on the button below to download the code for the kit:"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt"},(0,o.yg)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Analog_Interface/img/Code_sidekick_linkit.png",alt:null}))),(0,o.yg)("p",null,"You can unzip the file to the ",(0,o.yg)("strong",{parentName:"p"},"Examples")," folder of your Arduino IDE."),(0,o.yg)("p",null,"To access the demo code open:"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Basic -",">"," L6_Analog_Ctrl_LED")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"const int led = 3;\nconst int pot = A0;\n\nvoid setup()\n{\n    // nothing to initialize\n}\n\nvoid loop()\n{\n    int val = analogRead(pot);              // get value from potentiometer\n    val = map(val, 0, 1023, 0, 255);        // make the value to 0~255\n    analogWrite(led, val);                  // set the pwm of led\n    delay(10);\n}\n")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Troubleshooting")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Pin Interfacing problem\uff1f"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"If you have connected the input to digital pin instead of analog pin the circuit might not work properly."))),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Not Working\uff1f"),(0,o.yg)("ul",{parentName:"li"},(0,o.yg)("li",{parentName:"ul"},"Potentiometer has three pins in it . Check whether you have connected the middle pin to the analog interface or else the circuit might not work properly.")))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Making it better")),(0,o.yg)("p",null,"To control flickering frequency of the LED with a potentiometer upload the following code\nTo Open the demo code:"),(0,o.yg)("p",null,"To open the demo code\uff1a"),(0,o.yg)("p",null,(0,o.yg)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Extend_Lesson \u2013",">"," L6_Flashing_LED")),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"More ideas")),(0,o.yg)("p",null,"What else can do with the Potentiometer of the return value?"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"Reference")),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);