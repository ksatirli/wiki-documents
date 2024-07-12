"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43132],{15680:(e,t,i)=>{i.d(t,{xA:()=>c,yg:()=>m});var n=i(96540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),g=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=g(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=g(i),u=r,m=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return i?n.createElement(m,o(o({ref:t},c),{},{components:i})):n.createElement(m,o({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var g=2;g<a;g++)o[g]=i[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},72960:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>g});var n=i(58168),r=(i(96540),i(15680));const a={description:"Getting started of NEQTO Engine for Linux on reTerminal",title:"Getting started of NEQTO Engine for Linux on reTerminal",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/neqto_engine_for_linux_reTerminal",last_update:{date:"04/17/2024",author:"Kazuhiro Ozuchi"}},o=void 0,l={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal/Application/Managed_Services/neqto_engine_for_linux_reTerminal",id:"Edge/Raspberry_Pi_Devices/reTerminal/Application/Managed_Services/neqto_engine_for_linux_reTerminal",title:"Getting started of NEQTO Engine for Linux on reTerminal",description:"Getting started of NEQTO Engine for Linux on reTerminal",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal/Application/Managed_Services/neqto_engine_for_linux_reTerminal.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal/Application/Managed_Services",slug:"/neqto_engine_for_linux_reTerminal",permalink:"/neqto_engine_for_linux_reTerminal",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal/Application/Managed_Services/neqto_engine_for_linux_reTerminal.md",tags:[],version:"current",lastUpdatedBy:"Kazuhiro Ozuchi",lastUpdatedAt:1713312e3,formattedLastUpdatedAt:"Apr 17, 2024",frontMatter:{description:"Getting started of NEQTO Engine for Linux on reTerminal",title:"Getting started of NEQTO Engine for Linux on reTerminal",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/neqto_engine_for_linux_reTerminal",last_update:{date:"04/17/2024",author:"Kazuhiro Ozuchi"}},sidebar:"ProductSidebar",previous:{title:"Object detection with Edge Impulse and reTerminal",permalink:"/reTerminal_ML_Edgeimpulse"},next:{title:"Mender Client on reTerminal",permalink:"/Mender-Client-reTerminal"}},s={},g=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware supported",id:"hardware-supported",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Connection",id:"hardware-connection",level:3},{value:"Sign Up for a NEQTO Account:",id:"sign-up-for-a-neqto-account",level:3},{value:"Installation of NEQTO Linux",id:"installation-of-neqto-linux",level:3},{value:"Hello World",id:"hello-world",level:3},{value:"What&#39;s More / Trouble Shooting",id:"whats-more--trouble-shooting",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],c={toc:g},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.yg)(p,(0,n.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"introduction"},"Introduction"),(0,r.yg)("p",null,"NEQTO is a lightweight and secure software package allowing companies to remotely install and configure their software on edge devices. NEQTO enables companies to provide improved software services to end users through turnkey platform connectors and built-in software lifecycle management."),(0,r.yg)("p",null,"Devices installed with NEQTO can be managed through API or the ready-to-use NEQTO Console, which includes optional services for data storage, alerts, and watchdog monitoring. Businesses can enable AIoT with near-instant installation on any Linux device and seamless data integration with any on-premise or cloud servers."),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/header-img_2x.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.yg)("h3",{id:"hardware-supported"},"Hardware supported"),(0,r.yg)("div",{class:"table-center"},(0,r.yg)("table",{class:"table-nobg"},(0,r.yg)("tr",{class:"table-trnobg"},(0,r.yg)("th",{class:"table-trnobg"},"reTerminal")),(0,r.yg)("tr",{class:"table-trnobg"}),(0,r.yg)("tr",{class:"table-trnobg"},(0,r.yg)("td",{class:"table-trnobg"},(0,r.yg)("div",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png",style:{width:300,height:"auto"}})))),(0,r.yg)("tr",{class:"table-trnobg"}),(0,r.yg)("tr",{class:"table-trnobg"},(0,r.yg)("td",{class:"table-trnobg"},(0,r.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products"},(0,r.yg)("strong",null,(0,r.yg)("span",null,(0,r.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"(Any Linux machine)")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"Supported Architectures: armv6l(32bit), armv7l(32bit), aarch64(64bit), x86_64(64bit)"),(0,r.yg)("li",{parentName:"ul"},"Required disk space: \u2265 32 MB"),(0,r.yg)("li",{parentName:"ul"},"Required RAM space: \u2265 4MB (In default settings)"),(0,r.yg)("li",{parentName:"ul"},"Network Communication Interfaces: A physical network adapter must be on board."),(0,r.yg)("li",{parentName:"ul"},"Monitor, keyboard, mouse (optional)"))),(0,r.yg)("h2",{id:"getting-started"},"Getting Started"),(0,r.yg)("h3",{id:"hardware-connection"},"Hardware Connection"),(0,r.yg)("p",null,"Please refer to Getting Started with reTerminal (",(0,r.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal/"},"https://wiki.seeedstudio.com/reTerminal/"),")"),(0,r.yg)("h3",{id:"sign-up-for-a-neqto-account"},"Sign Up for a NEQTO Account:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Step 1. Visit this page (",(0,r.yg)("a",{parentName:"li",href:"https://console.neqto.com/register"},"https://console.neqto.com/register"),") to sign up for a NEQTO account"),(0,r.yg)("li",{parentName:"ul"},"Step 2. Enter your email address, create a password, and proceed"),(0,r.yg)("li",{parentName:"ul"},"Step 3. Verify the account from the activation email you receive ")),(0,r.yg)("h3",{id:"installation-of-neqto-linux"},"Installation of NEQTO Linux"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Select ",(0,r.yg)("inlineCode",{parentName:"li"},"Manage API Keys for Linux-based Device")," from")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65eee22eccae06004c6d9459.png",alt:"pir",width:20,height:"auto"})),(0,r.yg)("p",null,"in NEQTO Console"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65effd1accae06004c6d94a0.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Click ",(0,r.yg)("inlineCode",{parentName:"li"},"CREATE API KEY"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65efff89ccae06004c6d94a6.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"And then the API Key will be displayed"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65efff33ccae06004c6d94a5.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Download ",(0,r.yg)("inlineCode",{parentName:"p"},"NEQTO Engine Linux Installer")," by curl or wget."),(0,r.yg)("p",{parentName:"li"},"This time, use the wget command."))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/65eeeaa3ccae06004c6d945d.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"Copy the ",(0,r.yg)("inlineCode",{parentName:"p"},"Download link")," of ",(0,r.yg)("inlineCode",{parentName:"p"},"Installer of NEQTO Engine for Linux"),' and paste it after "wget ".'),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbce4ccae06004c6d9812.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"Installer downloads successfully"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd0cccae06004c6d9813.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Change the execution permissions of the downloaded installer (",(0,r.yg)("inlineCode",{parentName:"li"},"neqto-daemon-install.latest.sh"),") with the chmod command before running the installation of NEQTO Engine for Linux.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd27ccae06004c6d9814.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Copy the ",(0,r.yg)("inlineCode",{parentName:"li"},"API Key")," from ",(0,r.yg)("inlineCode",{parentName:"li"},"API Keys for NEQTO Engine for Linux")," in the NEQTO Console and paste it after ",(0,r.yg)("inlineCode",{parentName:"li"},"sudo ./neqto-daemon-install.latest.sh -k "),".")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd4dccae06004c6d9815.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},'Just after execution, important notes will be displayed. Please check it and enter "agree" if you agree. Thereafter, device registration will be executed, and software installation will continue.')),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd63ccae06004c6d9816.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"Please wait until the final status ",(0,r.yg)("inlineCode",{parentName:"li"},"Installation completed successfully!")," is displayed.")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd7accae06004c6d9817.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"Confirmation that the device has been registered on the NEQTO Console"),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbd9cccae06004c6d9819.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("h3",{id:"hello-world"},"Hello World"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Click on ",(0,r.yg)("inlineCode",{parentName:"li"},"ADD GROUP")," under ",(0,r.yg)("inlineCode",{parentName:"li"},"GROUPS"),".")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9d61ccae06004c6d97b9.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Enter ",(0,r.yg)("inlineCode",{parentName:"li"},"reTerminal")," in ",(0,r.yg)("inlineCode",{parentName:"li"},"Name")," and click ",(0,r.yg)("inlineCode",{parentName:"li"},"SAVE"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9e99ccae06004c6d97bd.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660f9ebbccae06004c6d97bf.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Select the ",(0,r.yg)("inlineCode",{parentName:"li"},"reTerminal")," you created and click ",(0,r.yg)("inlineCode",{parentName:"li"},"SCRIPTS"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbde5ccae06004c6d981a.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"Click ",(0,r.yg)("inlineCode",{parentName:"li"},"ADD SCRIPT"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe00ccae06004c6d981b.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:5},(0,r.yg)("li",{parentName:"ol"},"Enter ",(0,r.yg)("inlineCode",{parentName:"li"},"Hello World")," in the ",(0,r.yg)("inlineCode",{parentName:"li"},"Name")," field and click ",(0,r.yg)("inlineCode",{parentName:"li"},"SAVE"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe19ccae06004c6d981c.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:6},(0,r.yg)("li",{parentName:"ol"},"Copy and paste the ",(0,r.yg)("a",{parentName:"li",href:"https://docs.neqto.com/docs/en/getting-started/tutorial-step1#sample-code"},"sample code")," from ",(0,r.yg)("inlineCode",{parentName:"li"},"Getting Started")," into the NEQTO Console script editor and then click ",(0,r.yg)("inlineCode",{parentName:"li"},"Save"),".")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe2bccae06004c6d981d.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:7},(0,r.yg)("li",{parentName:"ol"},"Click on ",(0,r.yg)("inlineCode",{parentName:"li"},"TEMPLATES"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe46ccae06004c6d981e.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"And then click on ",(0,r.yg)("inlineCode",{parentName:"p"},"ADD TEMPLATE")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe5dccae06004c6d981f.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:8},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set ",(0,r.yg)("inlineCode",{parentName:"p"},"DEVICE INFORMATION")," as follows"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Enter ",(0,r.yg)("inlineCode",{parentName:"p"},"reTerminal Template")," for ",(0,r.yg)("inlineCode",{parentName:"p"},"Name")," field")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Select ",(0,r.yg)("inlineCode",{parentName:"p"},"Linux-based device")," for ",(0,r.yg)("inlineCode",{parentName:"p"},"Firmware Type")," field")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Select the latest version for ",(0,r.yg)("inlineCode",{parentName:"p"},"Firmware Version")," field"))))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe7cccae06004c6d9820.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:9},(0,r.yg)("li",{parentName:"ol"},"For ",(0,r.yg)("inlineCode",{parentName:"li"},"OPTIONS"),", select ",(0,r.yg)("inlineCode",{parentName:"li"},"Hello World")," in ",(0,r.yg)("inlineCode",{parentName:"li"},"Script")," field and click ",(0,r.yg)("inlineCode",{parentName:"li"},"SAVE"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbe98ccae06004c6d9821.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:10},(0,r.yg)("li",{parentName:"ol"},"Click on ",(0,r.yg)("inlineCode",{parentName:"li"},"NODES"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbea7ccae06004c6d9823.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",null,"And then click on ",(0,r.yg)("inlineCode",{parentName:"p"},"ADD NODE")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbeb4ccae06004c6d9824.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:11},(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"Set ",(0,r.yg)("inlineCode",{parentName:"p"},"META DATA")," as follows"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Set ",(0,r.yg)("inlineCode",{parentName:"p"},"Name")," field to ",(0,r.yg)("inlineCode",{parentName:"p"},"reTerminal"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Set ",(0,r.yg)("inlineCode",{parentName:"p"},"Template")," field to ",(0,r.yg)("inlineCode",{parentName:"p"},"reTerminal Template")))))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbec5ccae06004c6d9825.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:12},(0,r.yg)("li",{parentName:"ol"},"Select the device you just registered in ",(0,r.yg)("inlineCode",{parentName:"li"},"DEVICE INFORMATION")," and click ",(0,r.yg)("inlineCode",{parentName:"li"},"SAVE"))),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fca55ccae06004c6d982a.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fca62ccae06004c6d982b.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:13},(0,r.yg)("li",{parentName:"ol"},"Type ",(0,r.yg)("inlineCode",{parentName:"li"},"tail -F /tmp/neqto/log/neqto.log")," on the terminal on reTerminal ")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbef2ccae06004c6d9826.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("ol",{start:14},(0,r.yg)("li",{parentName:"ol"},"After running ",(0,r.yg)("inlineCode",{parentName:"li"},"Reload Script")," on NEQTO Console, you can see ",(0,r.yg)("inlineCode",{parentName:"li"},"Hello World!!!")," on the terminal of reTerminal ")),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fbf0dccae06004c6d9828.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/neqto_engine_for_linux_reTerminal/660fa3e0ccae06004c6d97e8.png",alt:"pir",width:600,height:"auto"})),(0,r.yg)("h2",{id:"whats-more--trouble-shooting"},"What's More / Trouble Shooting"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://support.neqto.com/hc/en-us"},"NEQTO Support")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.neqto.com/docs/en/neqto/support-guidelines"},"Support Guidelines"))),(0,r.yg)("h2",{id:"resource"},"Resource"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.neqto.com/docs/en/linux/software/requirements"},"NEQTO Resource Center"))),(0,r.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.yg)("div",{class:"button_tech_support_container"},(0,r.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);