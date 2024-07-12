"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80257],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var o=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=i,m=p["".concat(l,".").concat(c)]||p[c]||g[c]||r;return n?o.createElement(m,a(a({ref:t},d),{},{components:n})):o.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(58168),i=(n(96540),n(15680));const r={description:"Learn how to integrate N3uron with MQTT and Modbus for seamless data acquisition and publish to AWS cloud. This guide covers setup, configuration, and data preprocessing to optimize your industrial automation projects",title:"Publishing Industrial Data to AWS Cloud Using N3uron, MQTT, and Modbus",keywords:["reComputer R1000","MQTT","IIoT","Industrial","N3uron","Modbus","AWS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/recomputer_r1000_n3uron_modbus_mqtt_aws",last_update:{date:"7/12/2024",author:"Kasun Thushara"}},a=void 0,s={unversionedId:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/n3uron/recomputer_r1000_n3uron_modbus_mqtt",id:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/n3uron/recomputer_r1000_n3uron_modbus_mqtt",title:"Publishing Industrial Data to AWS Cloud Using N3uron, MQTT, and Modbus",description:"Learn how to integrate N3uron with MQTT and Modbus for seamless data acquisition and publish to AWS cloud. This guide covers setup, configuration, and data preprocessing to optimize your industrial automation projects",source:"@site/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/n3uron/recomputer_r1000_n3uron_modbus_mqtt.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/n3uron",slug:"/recomputer_r1000_n3uron_modbus_mqtt_aws",permalink:"/recomputer_r1000_n3uron_modbus_mqtt_aws",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reComputer_R1000/Applications/n3uron/recomputer_r1000_n3uron_modbus_mqtt.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1720742400,formattedLastUpdatedAt:"Jul 12, 2024",frontMatter:{description:"Learn how to integrate N3uron with MQTT and Modbus for seamless data acquisition and publish to AWS cloud. This guide covers setup, configuration, and data preprocessing to optimize your industrial automation projects",title:"Publishing Industrial Data to AWS Cloud Using N3uron, MQTT, and Modbus",keywords:["reComputer R1000","MQTT","IIoT","Industrial","N3uron","Modbus","AWS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/recomputer_r1000_n3uron_modbus_mqtt_aws",last_update:{date:"7/12/2024",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Connect N3uron with BACnet on reComputer R1000",permalink:"/recomputer_r1000_n3uron_bacnet"},next:{title:"reComputer R1000 with balena",permalink:"/reComputer_r1000_balena"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Configure Ethernet settings for Modbus TCP/IP",id:"configure-ethernet-settings-for-modbus-tcpip",level:3},{value:"Modbus Module Create and Configuration",id:"modbus-module-create-and-configuration",level:2},{value:"Channel Creation and Configuration",id:"channel-creation-and-configuration",level:3},{value:"Tag Configuration",id:"tag-configuration",level:2},{value:"Create a MQTT Module Instance Within N3uron\u2019s WebUI Interface",id:"create-a-mqtt-module-instance-within-n3urons-webui-interface",level:2},{value:"Configure N3uron\u2019s MQTT Module",id:"configure-n3urons-mqtt-module",level:2},{value:"Subscribe to a Topic Using N3uron\u2019s MQTT Module",id:"subscribe-to-a-topic-using-n3urons-mqtt-module",level:2},{value:"Create a Tag",id:"create-a-tag",level:2},{value:"Bonus : Lets Publish Status of Factory with AWS",id:"bonus--lets-publish-status-of-factory-with-aws",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,o.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"In industrial automation, Modbus stands out as one of the most common protocols. MQTT has emerged as the leading protocol for IoT in industrial automation due to many characteristics. Its lightweight design, efficiency, scalability, and support for asynchronous messaging are notable. In MQTT, devices communicate only when there's a reportable event, contrasting with constant update checks. This event-driven approach, coupled with reporting by exception\u2014sending data only when it deviates from norms or on specific triggers\u2014conserves bandwidth and resources, optimizing data transmission for critical IoT applications."),(0,i.yg)("p",null,"The potent pairing of reComputer R1000 and ",(0,i.yg)("a",{parentName:"p",href:"https://n3uron.com/"},"N3uron")," Duo facilitates efficient plant management by providing robust connectivity and data manipulation capabilities. This Wiki emphasizes the significance of Modbus TCP in industrial settings, highlighting the seamless integration of MQTT devices to further enhance connectivity."),(0,i.yg)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.yg)("h3",{id:"hardware"},"Hardware"),(0,i.yg)("div",{class:"table-center"},(0,i.yg)("table",{class:"table-nobg"},(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("th",{class:"table-trnobg"},"reComputer R1000")),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{style:{textAlign:"center"}},(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-R1000/recomputer_r_images/01.png",style:{width:300,height:"auto"}})))),(0,i.yg)("tr",{class:"table-trnobg"}),(0,i.yg)("tr",{class:"table-trnobg"},(0,i.yg)("td",{class:"table-trnobg"},(0,i.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reComputer-R1025-10-p-5895.html"},(0,i.yg)("strong",null,(0,i.yg)("span",null,(0,i.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,i.yg)("h3",{id:"software"},"Software"),(0,i.yg)("p",null,"We highly recommend studying the ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/recomputer_r1000_n3uron/"},"Getting Started with N3uron")," guide. It provides essential insights into navigating the N3uron web interface, understanding concepts such as the Web UI and Web Vision module, grasping the concept of tags, and creating basic dashboards. If you haven't explored these fundamentals yet, it's advisable to do so before proceeding further. You can access the guide through the provided link."),(0,i.yg)("h3",{id:"configure-ethernet-settings-for-modbus-tcpip"},"Configure Ethernet settings for Modbus TCP/IP"),(0,i.yg)("p",null,"Since your PLC/Device IP domain is different from your wireless settings, you may have to change the IP configuration manually. For that,"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 01"),": Run the following command if you are running ",(0,i.yg)("strong",{parentName:"li"},"Bullseye"),":")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"sudo nano /etc/dhcpcd.conf\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 02"),": Then configure the Ethernet port settings according to your PLC/Device network domain and set priorities using the ",(0,i.yg)("strong",{parentName:"li"},"metric")," command. The lowest metric has the highest priority.")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/ipconfig.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 01"),": If you are running ",(0,i.yg)("strong",{parentName:"li"},"Bookworm OS"),', you can use the GUI to click the network icon. Under the advanced options, choose "Edit Connections."')),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network1.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 02"),': Choose "Wired Connection 2" (ETH 1) and add the address, netmask, and gateway under the IPv4 settings.')),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/nodered/network2.PNG"})),(0,i.yg)("h2",{id:"modbus-module-create-and-configuration"},"Modbus Module Create and Configuration"),(0,i.yg)("p",null,"Create a Module Instance Within N3uron\u2019s WebUI Interface"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 01: In the Navigation panel, select ",(0,i.yg)("strong",{parentName:"li"},"Config"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 02: In the Explorer panel, select ",(0,i.yg)("strong",{parentName:"li"},"Modules"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 03: Click on the Model menu and select ",(0,i.yg)("strong",{parentName:"li"},"New Module"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/modbusmodule.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 04: The instance can be given any name but for the example, we will use ",(0,i.yg)("strong",{parentName:"li"},"ModbusClient"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 05: Set the Module Type property to ",(0,i.yg)("strong",{parentName:"li"},"ModbusClient"),". Leave the rest of the properties as their default values and click ",(0,i.yg)("strong",{parentName:"li"},"Save"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/modbusmodule2.PNG"})),(0,i.yg)("h3",{id:"channel-creation-and-configuration"},"Channel Creation and Configuration"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 01: Under the created Modbus Client and Model, select ",(0,i.yg)("strong",{parentName:"li"},"New Channel"),". Give the channel name as ",(0,i.yg)("strong",{parentName:"li"},"Client"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newmodbuschannel.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 02: Now, we are going to communicate with the PLC using Modbus TCP. Please provide the ",(0,i.yg)("strong",{parentName:"li"},"IP address")," for the PLC and the ",(0,i.yg)("strong",{parentName:"li"},"port address"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/clientconfig.PNG"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"}," If you are using Modbus RTU, there are various configurations to consider. To do that, you need to provide details such as the COM port, baud rate, etc. For more information on configuring both Modbus RTU and TCP protocols on N3uron, refer to the provided ",(0,i.yg)("a",{parentName:"p",href:"https://docs.n3uron.com/docs/modbus-client-configuration"},"guide"),".")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 03: Add a device: Each channel can have one or more devices. Set a ",(0,i.yg)("strong",{parentName:"li"},"name")," for the device and proceed with the configuration. In this case, the device name is ",(0,i.yg)("strong",{parentName:"li"},"PLC"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/adddevice.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 04: There are a few settings that you can adjust through this interface. You can find more details from this link. However, for this case, we'll keep them as they are.")),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/deviceconfig.PNG"})),(0,i.yg)("h2",{id:"tag-configuration"},"Tag Configuration"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 01: Go to the ",(0,i.yg)("strong",{parentName:"li"},"WebUI"),", select ",(0,i.yg)("strong",{parentName:"li"},"Config"),", and then click on ",(0,i.yg)("strong",{parentName:"li"},"Tag"),". In the Model section, click on the menu and choose ",(0,i.yg)("strong",{parentName:"li"},"New Tag"),". Name it Q1. Normally Q is used to indicate the output coil. ")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/addtag.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 02: Then you need to do the following configurations. ",(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"- Source : Enabled/Yes\n- Module Type : ModbusClient \n- ModuleName: ModbusClient\n- Config: Device: Client/PLC\n- Modbus address: 008931\n- Data type: Boolean \n")),"and ",(0,i.yg)("strong",{parentName:"li"},"Save")," it.")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/tagconfig.PNG"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"}," It is advisable to refer to the PLC or device manufacturer's datasheet regarding Modbus addresses. There, you will find details about input, output, and holding addresses. According to these specifications, adjustments should be made in the Modbus address line in the tag configuration. For instance, if the manufacturer notates the output coil Q1 as 8193, the address should be configured as 008193. Similarly, if the network input is denoted as 1 and it is a coil type, the address should be set as 000001.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 03: Real-time simulation ")),(0,i.yg)("p",null,"Once connected to the system, you can view the real-time status of output coils and input coils."),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/realtimeview.PNG"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"}," Interaction with the PLC via the N3uron interface requires appropriate access permissions, including both read and write capabilities.")),(0,i.yg)("h2",{id:"create-a-mqtt-module-instance-within-n3urons-webui-interface"},"Create a MQTT Module Instance Within N3uron\u2019s WebUI Interface"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 01: In the Navigation panel, select ",(0,i.yg)("strong",{parentName:"li"},"Config"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 02: In the Explorer panel, select ",(0,i.yg)("strong",{parentName:"li"},"Modules"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 03: Click on the Model menu and select ",(0,i.yg)("strong",{parentName:"li"},"New Module"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqqtmodule.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 04: The instance can be given any name but for the example, we will use ",(0,i.yg)("strong",{parentName:"li"},"MQTT"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 05: Set the Module Type property to ",(0,i.yg)("strong",{parentName:"li"},"MqttClient"),". Leave the rest of the properties as their default values and click ",(0,i.yg)("strong",{parentName:"li"},"Save"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqqtmodule2.PNG"})),(0,i.yg)("h2",{id:"configure-n3urons-mqtt-module"},"Configure N3uron\u2019s MQTT Module"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 01: In the Explorer panel, select the MQTT instance you have just created.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 02: Click on the Model menu button and select New Connection.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 03: Give the New connection a name. In this example, it has been named ",(0,i.yg)("strong",{parentName:"p"},"MqttClient"),":"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"- Destination broker : Custom \n- Authentication mode: Password\n- Username : Your Broker Username\n- Password: Your Broker Password\n- Protocol:MQTT\n- Broker URL:Broker ip\n")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Save")," configurations "))),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqttchannelconfig.PNG"})),(0,i.yg)("h2",{id:"subscribe-to-a-topic-using-n3urons-mqtt-module"},"Subscribe to a Topic Using N3uron\u2019s MQTT Module"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 01: In the Model panel, right-click on the AWS Connection, select New Subscriber, and give it a name. In this example, we will simply use Subscriber.")),(0,i.yg)("center",null,(0,i.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqttconnection.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 02: Click on it and add a name in the Topic field. In this example, we have used device/data.")),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"},"For testing and hands-on experience, we have provided you with an ",(0,i.yg)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Edge_Box/N3uron-mqtt-modbus/MQTT_N3uron.ino"},"Arduino code")," that can be run on XIAO. Additionally, you will need to input your own credentials into this code before uploading it.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 03: Set the following properties using the values shown below, leaving the rest of them as their default values:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"- Qos: Qos 0.\n- Encoding: UTF8\n- Compression: None\n- Serialization: JSON\n- Data parser/Type: MqttClient JSON\n")),(0,i.yg)("p",{parentName:"li"},"And ",(0,i.yg)("strong",{parentName:"p"},"Save")," it."))),(0,i.yg)("center",null,(0,i.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/subscriberconfig.PNG"})),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"}," Here, we utilize a data parser configured for MQTTClient JSON format. The XIAO device publishes data to the broker in this format. If your device does not publish data in this specific format, you will need to identify the format it uses and create a custom JavaScript code snippet to handle the devices accordingly. For further guidance, please refer to the provided ",(0,i.yg)("a",{parentName:"p",href:"https://docs.n3uron.com/docs/mqtt-client-custom-parser"},"guidelines"),".")),(0,i.yg)("h2",{id:"create-a-tag"},"Create a Tag"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 01: Within the Explorer panel, select ",(0,i.yg)("strong",{parentName:"li"},"Tags"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 02: In the Model menu, right-click on the folder icon, select ",(0,i.yg)("strong",{parentName:"li"},"New Tag"),", and give it a name. In this example, we will use ",(0,i.yg)("strong",{parentName:"li"},"test"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqtttag.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 03: In the Configuration panel, set the following properties using the values shown below, leaving the rest of them as their default values:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"- Type: Number.\n- Source/Enabled: Yes\n- Module Type: MqttClient\n- Module name: MQTT\n- Config/Subscriber: MqttClient/Subscriber\n")),(0,i.yg)("p",{parentName:"li"},"Click on ",(0,i.yg)("strong",{parentName:"p"},"Save"),"."))),(0,i.yg)("center",null,(0,i.yg)("img",{width:500,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/mqtttagconfig.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 04: Real-time simulation\nOnce connected to the system, you can view the real-time status of output from the MQTT Broker.")),(0,i.yg)("center",null,(0,i.yg)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/realtimeview2.PNG"})),(0,i.yg)("h2",{id:"bonus--lets-publish-status-of-factory-with-aws"},"Bonus : Lets Publish Status of Factory with AWS"),(0,i.yg)("admonition",{type:"note"},(0,i.yg)("p",{parentName:"admonition"}," We have provided step-by-step instructions on how to connect ",(0,i.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/recomputer_r1000_n3uron_aws/"},"AWS cloud to your reComputer R1000 device"),". If you are new to this wiki, please refer to this link.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 01: In the Explorer panel, select the ",(0,i.yg)("strong",{parentName:"li"},"MQTT")," instance you have just created."),(0,i.yg)("li",{parentName:"ul"},"Step 02: Click on the Model menu button and select ",(0,i.yg)("strong",{parentName:"li"},"New Connection"),"."),(0,i.yg)("li",{parentName:"ul"},"Step 03: Give the New connection a name. In this example, it has been named ",(0,i.yg)("strong",{parentName:"li"},"MqttPublisher"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:400,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newpublisher.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 04: Configure the connection properties:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"A: Select ",(0,i.yg)("strong",{parentName:"li"},"Amazon Web Services")," from the ",(0,i.yg)("strong",{parentName:"li"},"Destination Broker")," drop down menu. ",(0,i.yg)("strong",{parentName:"li"},"Authentication mode")," will be ",(0,i.yg)("strong",{parentName:"li"},"Certificate"),". Also ",(0,i.yg)("strong",{parentName:"li"},"Client Id")," is ",(0,i.yg)("strong",{parentName:"li"},"N3uron")," in this example."),(0,i.yg)("li",{parentName:"ul"},"B: Load the ",(0,i.yg)("strong",{parentName:"li"},"Certificate, Private key and CA certificate")," you downloaded and saved when you created the Thing in the AWS IoT Console."),(0,i.yg)("li",{parentName:"ul"},"C: In the AWS IoT console, in the left-hand menu, go to ",(0,i.yg)("strong",{parentName:"li"},"Settings")," and copy your ",(0,i.yg)("strong",{parentName:"li"},"Device Data Endpoint"),". Go back to N3uron and paste it in the ",(0,i.yg)("strong",{parentName:"li"},"Broker URL")," field."),(0,i.yg)("li",{parentName:"ul"},"D: Leave the rest of the properties as their default values and click on ",(0,i.yg)("strong",{parentName:"li"},"Save"),".")))),(0,i.yg)("center",null,(0,i.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/publisherconfig.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 05: Within the Model panel, right-click on the ",(0,i.yg)("strong",{parentName:"li"},"MqttPublisher")," Connection you have just configured, select ",(0,i.yg)("strong",{parentName:"li"},"New Publisher"),", and give it a name. In this example, we will simply use ",(0,i.yg)("strong",{parentName:"li"},"AWS"),".")),(0,i.yg)("center",null,(0,i.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/newpublisheraws.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 06: Click on it and add a name in the ",(0,i.yg)("strong",{parentName:"p"},"Topic")," field. In this example, we have used ",(0,i.yg)("strong",{parentName:"p"},"N3uron"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},"Step 07: Click on the ",(0,i.yg)("strong",{parentName:"p"},"Tag Filter")," button, select ",(0,i.yg)("strong",{parentName:"p"},"New Tag Filter"),", and change the default name. In this example we have used ",(0,i.yg)("strong",{parentName:"p"},"TagFilter"),". Leave Mode, Path, and Regex pattern as their default values. With this configuration, every tag configured in N3uron will be published to our AWS Broker."))),(0,i.yg)("center",null,(0,i.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/awssettings.PNG"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Step 08: Go to the AWS IoT console and in the left-hand menu, select ",(0,i.yg)("strong",{parentName:"li"},"MQTT test client"),".Click on the ",(0,i.yg)("strong",{parentName:"li"},"Subscribe to a topic")," tab, enter ",(0,i.yg)("strong",{parentName:"li"},"N3uron")," in the Topic filter to subscribe to everything, and click on ",(0,i.yg)("strong",{parentName:"li"},"Subscribe"),". ")),(0,i.yg)("center",null,(0,i.yg)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reComputer-R1000/N3uron-mqtt-modbus/awsend.PNG"})),(0,i.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.yg)("div",{class:"button_tech_support_container"},(0,i.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}g.isMDXComponent=!0}}]);