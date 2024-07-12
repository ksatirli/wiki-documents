"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63903],{15680:(e,t,a)=>{a.d(t,{xA:()=>h,yg:()=>u});var n=a(96540);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=l(a),g=i,u=p["".concat(c,".").concat(g)]||p[g]||d[g]||o;return a?n.createElement(u,r(r({ref:t},h),{},{components:a})):n.createElement(u,r({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(58168),i=(a(96540),a(15680));const o={description:"Provides an in-depth look at the various applications and use cases for Watcher, showcasing its versatility and potential in different monitoring scenarios.",title:"5# What does Watcher do",image:"https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg",slug:"/what_does_watcher_do",sidebar_position:6,last_update:{date:"07/08/2024",author:"Citric"}},r="What does SenseCAP Watcher do",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Watcher/Getting_Started/sensecap_watcher_what_does_watcher_do",id:"Sensor/SenseCAP/SenseCAP_Watcher/Getting_Started/sensecap_watcher_what_does_watcher_do",title:"5# What does Watcher do",description:"Provides an in-depth look at the various applications and use cases for Watcher, showcasing its versatility and potential in different monitoring scenarios.",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Watcher/Getting_Started/sensecap_watcher_what_does_watcher_do.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Watcher/Getting_Started",slug:"/what_does_watcher_do",permalink:"/what_does_watcher_do",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Watcher/Getting_Started/sensecap_watcher_what_does_watcher_do.md",tags:[],version:"current",lastUpdatedBy:"Citric",lastUpdatedAt:1720396800,formattedLastUpdatedAt:"Jul 8, 2024",sidebarPosition:6,frontMatter:{description:"Provides an in-depth look at the various applications and use cases for Watcher, showcasing its versatility and potential in different monitoring scenarios.",title:"5# What does Watcher do",image:"https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg",slug:"/what_does_watcher_do",sidebar_position:6,last_update:{date:"07/08/2024",author:"Citric"}},sidebar:"ProductSidebar",previous:{title:"2# Watcher Looks & SenseCraft Tools",permalink:"/getting_started_with_watcher_look_tool"},next:{title:"Applications",permalink:"/applications_with_watcher_main_page"}},c={},l=[{value:"Demo 1. Giving Directions to Visitors",id:"demo-1-giving-directions-to-visitors",level:2},{value:"Step 1. Placement of the First Watcher",id:"step-1-placement-of-the-first-watcher",level:3},{value:"Step 2. Placement of the Second Watcher",id:"step-2-placement-of-the-second-watcher",level:3},{value:"Step 3. Configuring Commands for the First Watcher",id:"step-3-configuring-commands-for-the-first-watcher",level:3},{value:"Step 4. Configuring Commands for the Second Watcher",id:"step-4-configuring-commands-for-the-second-watcher",level:3},{value:"Demo 2. The Virtual Cashier for Your Flower Shop",id:"demo-2-the-virtual-cashier-for-your-flower-shop",level:2},{value:"Step 1. Generating a Payment QR Code",id:"step-1-generating-a-payment-qr-code",level:3},{value:"Step 2. Uploading the QR Code to Watcher via SenseCraft APP",id:"step-2-uploading-the-qr-code-to-watcher-via-sensecraft-app",level:3},{value:"Step 3. Mounting Watcher on a Tripod",id:"step-3-mounting-watcher-on-a-tripod",level:3},{value:"Step 4. Positioning Watcher at the Checkout Counter",id:"step-4-positioning-watcher-at-the-checkout-counter",level:3},{value:"Step 5. Configuring Watcher&#39;s Task through SenseCraft APP",id:"step-5-configuring-watchers-task-through-sensecraft-app",level:3},{value:"Step 6. Implementing the Self-Checkout Process",id:"step-6-implementing-the-self-checkout-process",level:3},{value:"Demo 3. Your All-In-One Sensor -- fall detection, pet monitoring and lost property alert",id:"demo-3-your-all-in-one-sensor----fall-detection-pet-monitoring-and-lost-property-alert",level:2},{value:"Scenario 1: Lost Property Alert in the Conference Room",id:"scenario-1-lost-property-alert-in-the-conference-room",level:3},{value:"Scenario 2: Pet Monitoring and Deterrence",id:"scenario-2-pet-monitoring-and-deterrence",level:3},{value:"Scenario 3: Fall Detection at Parents&#39; Home",id:"scenario-3-fall-detection-at-parents-home",level:3},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],h={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.yg)(p,(0,n.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"what-does-sensecap-watcher-do"},"What does SenseCAP Watcher do"),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/50.jpg",style:{width:800,height:"auto"}})),(0,i.yg)("p",null,"Prepare to embark on a journey that will redefine your perception of intelligent spaces. Watcher, a groundbreaking physical AI agent, seamlessly integrates into your environment, transforming the way you interact with and experience the world around you. By harnessing the power of advanced technologies like facial recognition, object detection, and multi-scenario sensing, Watcher creates smarter, more intuitive, and highly adaptable spaces."),(0,i.yg)("p",null,"In this wiki, we will explore three transformative applications that showcase the vast potential of Watcher as a physical AI agent. These applications will not only demonstrate Watcher's capabilities but also inspire you to envision and develop your own innovative solutions."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"#watcher-application-1-giving-directions-to-visitors"},"Watcher Application #1: Giving Directions to Visitors")),": Witness how Watcher revolutionizes the visitor experience by serving as an intelligent guide. With its facial recognition capabilities, Watcher can identify visitors and provide them with personalized directions and assistance, enhancing the efficiency and accessibility of your space.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"#watcher-application-2-the-virtual-cashier-for-your-flower-shop"},"Watcher Application #2: The Virtual Cashier for Your Flower Shop")),": Discover how Watcher can transform the retail landscape by acting as a virtual cashier in unmanned flower shops. By detecting when customers are ready to make a purchase, Watcher can promptly display QR codes for seamless self-checkout, ensuring a smooth and secure transaction process while optimizing store operations.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},(0,i.yg)("a",{parentName:"strong",href:"#watcher-application-3-your-all-in-one-sensor----fall-detection-pet-monitoring-and-lost-property-alert"},"Watcher Application #3: Your All-In-One Sensor - Fall Detection, Pet Monitoring, and Lost Property Alert")),": Unlock the versatility of Watcher as an all-in-one sensor solution. From detecting falls to monitoring pets and alerting you of lost property, Watcher adapts to various long-tail scenarios, creating safer, more secure, and highly responsive environments."))),(0,i.yg)("p",null,"As you delve into these applications, you will gain a deeper understanding of how Watcher, as a physical AI agent, can reshape and optimize the spaces we inhabit. Whether you're an innovator, a business owner, or simply someone passionate about the future of technology, this wiki will equip you with the knowledge and inspiration needed to leverage Watcher's capabilities and create smarter, more adaptable spaces."),(0,i.yg)("p",null,"Join us on this transformative journey as we redefine the boundaries of intelligent environments with Watcher!"),(0,i.yg)("h2",{id:"demo-1-giving-directions-to-visitors"},"Demo 1. Giving Directions to Visitors"),(0,i.yg)("p",null,"In this application, we will explore how Watcher can be utilized to enhance the visitor experience, particularly in the context of guiding delivery personnel in a villa setting. By strategically placing two Watcher devices and configuring them with specific commands, we can create a seamless and efficient process for directing visitors and ensuring accurate package delivery."),(0,i.yg)("h3",{id:"step-1-placement-of-the-first-watcher"},"Step 1. Placement of the First Watcher"),(0,i.yg)("p",null,"The first Watcher should be installed at the entrance of the villa, in a location that is easily visible to delivery personnel. This Watcher will serve as the initial point of contact, recognizing the presence of visitors carrying packages and providing them with clear instructions on where to deposit their deliveries."),(0,i.yg)("h3",{id:"step-2-placement-of-the-second-watcher"},"Step 2. Placement of the Second Watcher"),(0,i.yg)("p",null,"The second Watcher should be positioned at the designated package storage area within the villa. This Watcher will be responsible for confirming the accurate placement of the packages and expressing gratitude to the delivery personnel for their service."),(0,i.yg)("h3",{id:"step-3-configuring-commands-for-the-first-watcher"},"Step 3. Configuring Commands for the First Watcher"),(0,i.yg)("p",null,"Using the SenseCraft APP, issue the following command to the first Watcher:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},'If someone is holding a parcel, please say, "Hello, courier parcels please take them to the table on the right, 3 metres straight ahead, thank you."')),(0,i.yg)("p",null,"This command ensures that the Watcher provides clear and concise directions to the delivery personnel, guiding them to the appropriate package storage area."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/51.png",style:{width:600,height:"auto"}})),(0,i.yg)("h3",{id:"step-4-configuring-commands-for-the-second-watcher"},"Step 4. Configuring Commands for the Second Watcher"),(0,i.yg)("p",null,"Using the SenseCraft APP, issue the following command to the second Watcher:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},'If someone puts a parcel on the table, say "thank you".')),(0,i.yg)("p",null,"This command enables the second Watcher to acknowledge the successful placement of the package and express appreciation to the delivery personnel for their effort."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/52.png",style:{width:600,height:"auto"}})),(0,i.yg)("p",null,"Watcher Application #1 demonstrates how the strategic deployment of Watcher devices, combined with carefully crafted commands, can significantly enhance the visitor experience and streamline the package delivery process in a villa setting."),(0,i.yg)("p",null,"This application serves as a testament to the versatility and potential of Watcher as a physical AI agent, showcasing its ability to transform and optimize various aspects of our daily lives and interactions within intelligent spaces."),(0,i.yg)("h2",{id:"demo-2-the-virtual-cashier-for-your-flower-shop"},"Demo 2. The Virtual Cashier for Your Flower Shop"),(0,i.yg)("p",null,"In this application, we will explore how Watcher can revolutionize the shopping experience in a flower shop by acting as a virtual cashier. By leveraging Watcher's object detection capabilities and the SenseCraft APP, we can create a seamless and efficient self-checkout process, enhancing customer experience and streamlining store operations."),(0,i.yg)("h3",{id:"step-1-generating-a-payment-qr-code"},"Step 1. Generating a Payment QR Code"),(0,i.yg)("p",null,"Begin by generating a payment QR code using a platform like PayPal or other preferred payment providers. This QR code will serve as the key element in the self-checkout process, allowing customers to easily make payments for their flower purchases."),(0,i.yg)("h3",{id:"step-2-uploading-the-qr-code-to-watcher-via-sensecraft-app"},"Step 2. Uploading the QR Code to Watcher via SenseCraft APP"),(0,i.yg)("p",null,"Access the SenseCraft APP and navigate to the ",(0,i.yg)("strong",{parentName:"p"},"Animation")," section. Locate the ",(0,i.yg)("strong",{parentName:"p"},"Watching Space")," and replace the existing animation with the generated payment QR code. This step ensures that Watcher will display the QR code when triggered, enabling a smooth self-checkout process."),(0,i.yg)("h3",{id:"step-3-mounting-watcher-on-a-tripod"},"Step 3. Mounting Watcher on a Tripod"),(0,i.yg)("p",null,"To ensure optimal performance and stability, mount Watcher on a tripod using a 1/4 Thread Tripod Bracket. This setup allows for easy adjustment of Watcher's position and angle, ensuring clear visibility of the checkout area."),(0,i.yg)("h3",{id:"step-4-positioning-watcher-at-the-checkout-counter"},"Step 4. Positioning Watcher at the Checkout Counter"),(0,i.yg)("p",null,"Place the tripod-mounted Watcher at the checkout counter, facing the area where customers are expected to approach for payment. Ensure that Watcher has a clear view of the counter and can easily detect customers holding flowers."),(0,i.yg)("h3",{id:"step-5-configuring-watchers-task-through-sensecraft-app"},"Step 5. Configuring Watcher's Task through SenseCraft APP"),(0,i.yg)("p",null,"Using the SenseCraft APP, issue the following command to Watcher:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},'When you detect a person holding flowers and facing you, say "Please scan the QR code to complete your purchase."')),(0,i.yg)("p",null,"This command instructs Watcher to monitor for customers holding flowers, display the uploaded payment QR code, and prompt them to initiate the self-checkout process by scanning the code."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/53.png",style:{width:600,height:"auto"}})),(0,i.yg)("h3",{id:"step-6-implementing-the-self-checkout-process"},"Step 6. Implementing the Self-Checkout Process"),(0,i.yg)("p",null,"Upon detecting a customer holding flowers, Watcher will automatically display the payment QR code and trigger the pre-configured voice prompt, guiding the customer to scan the code for payment."),(0,i.yg)("p",null,"Once the customer scans the QR code, they will be directed to a mobile payment interface where they can complete the transaction using their preferred payment method."),(0,i.yg)("p",null,"Watcher Application #2 showcases the transformative potential of Watcher as a virtual cashier in a flower shop setting. By combining Watcher's object detection capabilities with the SenseCraft APP, flower shop owners can create a seamless and efficient self-checkout experience, enhancing customer satisfaction and optimizing store operations."),(0,i.yg)("p",null,"This application demonstrates Watcher's versatility and adaptability, highlighting its potential to revolutionize various retail environments. As a physical AI agent, Watcher can be customized and configured to meet the specific needs of different businesses, driving innovation and improving the overall shopping experience."),(0,i.yg)("h2",{id:"demo-3-your-all-in-one-sensor----fall-detection-pet-monitoring-and-lost-property-alert"},"Demo 3. Your All-In-One Sensor -- fall detection, pet monitoring and lost property alert"),(0,i.yg)("p",null,"In this application, we will explore the versatility and adaptability of Watcher as an all-in-one sensor solution, capable of handling a wide range of long-tail scenarios. By strategically placing multiple Watcher devices in different locations and configuring them to address specific situations, we can demonstrate Watcher's potential to enhance safety, security, and convenience in various settings."),(0,i.yg)("h3",{id:"scenario-1-lost-property-alert-in-the-conference-room"},"Scenario 1: Lost Property Alert in the Conference Room"),(0,i.yg)("p",null,"Step 1: Mount the first Watcher on the conference room wall using a 360\xb0 Rotate Bracket, ensuring optimal coverage of the entire room."),(0,i.yg)("p",null,"Step 2: Using the SenseCraft APP, issue the following command to Watcher:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"When you detect that the conference room is empty and there is a computer on the table, send a notification to the app.")),(0,i.yg)("p",null,"This task enables Watcher to monitor the conference room and alert users through the app if any valuable property, such as a computer, is left unattended."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/54.png",style:{width:600,height:"auto"}})),(0,i.yg)("h3",{id:"scenario-2-pet-monitoring-and-deterrence"},"Scenario 2: Pet Monitoring and Deterrence"),(0,i.yg)("p",null,"Step 1: Install the second Watcher on a tripod using a 1/4 Thread Tripod Bracket, and position it near a vase or any area where cats are prone to cause damage."),(0,i.yg)("p",null,"Step 2: Configure the following task using the SenseCraft APP:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},'If you detect a cat, play the audio message "Danger, please stay away"')),(0,i.yg)("p",null,"to deter the cat from approaching."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/55.png",style:{width:600,height:"auto"}})),(0,i.yg)("p",null,"Step 3: Adjust Watcher's volume to the highest setting to effectively startle and discourage the cat from entering the restricted area."),(0,i.yg)("h3",{id:"scenario-3-fall-detection-at-parents-home"},"Scenario 3: Fall Detection at Parents' Home"),(0,i.yg)("p",null,"Step 1: Install the third Watcher on the wall at the parents' home, ensuring it has a clear view of the main living areas."),(0,i.yg)("p",null,"Step 2: Assign the following task through the SenseCraft APP:"),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"If you detect a person lying on the ground, please notify me immediately.")),(0,i.yg)("p",null,"This setup allows Watcher to monitor for potential falls or accidents and promptly alert the user, ensuring quick response and assistance when needed."),(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/watcher_getting_started/56.png",style:{width:600,height:"auto"}})),(0,i.yg)("p",null,"Watcher Application #3 showcases the incredible versatility and adaptability of Watcher as an all-in-one sensor solution. By addressing a wide range of long-tail scenarios, such as fall detection, pet monitoring, and lost property alerts, Watcher demonstrates its potential to revolutionize safety, security, and convenience in various settings."),(0,i.yg)("p",null,"This application highlights Watcher's ability to be customized and configured to meet specific needs, making it an invaluable tool for individuals, families, and businesses alike. As a physical AI agent, Watcher seamlessly integrates into different environments, providing proactive monitoring, real-time alerts, and peace of mind to its users."),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}d.isMDXComponent=!0}}]);