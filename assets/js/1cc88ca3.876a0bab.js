"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49093],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var a=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=l(n),u=o,h=g["".concat(d,".").concat(u)]||g[u]||p[u]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[g]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19614:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(58168),o=(n(96540),n(15680));const r={description:"SenseCAP_T1000_tracker_and_Ubidots_Integrated",title:"Ubidots Integrated(via TTS)",keywords:["SenseCAP_T1000_tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_T1000_tracker_Ubidots_TTS",last_update:{date:"8/16/2023",author:"Jessie"}},i=void 0,s={unversionedId:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/Ubidots_Integrated",id:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/Ubidots_Integrated",title:"Ubidots Integrated(via TTS)",description:"SenseCAP_T1000_tracker_and_Ubidots_Integrated",source:"@site/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/Ubidots_Integrated.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard",slug:"/SenseCAP_T1000_tracker_Ubidots_TTS",permalink:"/SenseCAP_T1000_tracker_Ubidots_TTS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/Ubidots_Integrated.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1692144e3,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{description:"SenseCAP_T1000_tracker_and_Ubidots_Integrated",title:"Ubidots Integrated(via TTS)",keywords:["SenseCAP_T1000_tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_T1000_tracker_Ubidots_TTS",last_update:{date:"8/16/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Datacake Integrated(via TTS)",permalink:"/SenseCAP_T1000_tracker_Datacake_TTS"},next:{title:"Ubidots Integrated(via Helium)",permalink:"/SenseCAP_T1000_tracker_Ubidots_Helium"}},d={},l=[{value:"Configure Ubidots",id:"configure-ubidots",level:2},{value:"Ubidots Plugins",id:"ubidots-plugins",level:3},{value:"Configure the Decoder",id:"configure-the-decoder",level:3},{value:"Configure The Things Stack",id:"configure-the-things-stack",level:2},{value:"Monitor Your Data",id:"monitor-your-data",level:2}],c={toc:l},g="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://ubidots.com/?_gl=1%2a89g1t2%2a_ga%2aMzUzMzM3MDY5LjE2NjE5MzcyMTI.%2a_ga_VEME7QQ5EZ%2aMTY2MzY0Mzc4NS44LjEuMTY2MzY0NTI3MC4wLjAuMA.."},"Ubidots")," is a low-code IoT application development platform that enabled rapidly assembling and launching IoT applications without having to write code or hire a software development team. Nowadays, over 40,000+ applications already connect the dots with Ubidots. "),(0,o.yg)("p",null,"To meet the growing need for building IoT applications, we\u2019ve been cooperating with Ubidots and supporting the community to add ",(0,o.yg)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html"},"SenseCAP T1000 Tracker")," easily to Ubidots through The Things Network.  "),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://www.sensecapmx.com/wp-content/uploads/2022/09/%E5%8D%9A%E5%AE%A2%E6%8F%92%E5%9B%BE.jpg",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"Before starting the setup, please check ",(0,o.yg)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/SenseCAP_T1000_tracker_TTN"},"Connect SenseCAP T1000 to TTS")," to connect your SenseCAP T1000 Tracker to TTS first."),(0,o.yg)("h2",{id:"configure-ubidots"},"Configure Ubidots"),(0,o.yg)("p",null,"To get started, create an account with ",(0,o.yg)("a",{parentName:"p",href:"https://stem.ubidots.com/accounts/signin/"},"Ubidots"),". "),(0,o.yg)("p",null,"Log in to your Ubidots account and find the Devices tab in the upper part of your dashboard. In its drop-down list, choose Plugins."),(0,o.yg)("h3",{id:"ubidots-plugins"},"Ubidots Plugins"),(0,o.yg)("p",null,"Click on the ",(0,o.yg)("strong",{parentName:"p"},"+")," or on the ",(0,o.yg)("strong",{parentName:"p"},"Create Data Plugin")," button to create a new plugin."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/plugins.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"When you are presented with available plugins, select ",(0,o.yg)("strong",{parentName:"p"},"The Things Stack")," plugin."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/addtts.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"Next, you need to select a Ubidots token. You can use the ",(0,o.yg)("strong",{parentName:"p"},"Default token"),", also can create a new token."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/default_token.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"To create a new token, first click on your avatar in the upper right corner and select ",(0,o.yg)("strong",{parentName:"p"},"API Credentials"),". Then select ",(0,o.yg)("strong",{parentName:"p"},"More")," below the Default token and add a new token within the API Credentials page."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/new_toekn.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"Select ",(0,o.yg)("strong",{parentName:"p"},">")," to continue and then hit the checkmark to finish."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/name-description.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("h3",{id:"configure-the-decoder"},"Configure the Decoder"),(0,o.yg)("p",null,"Once created the plugin, go to the decoder section, delete all the code and replace it for the following:"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/decoding_function.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'const HOTSPOT_INFO = false;\n\nfunction handleErrorIfExists(data){\n    const error = \'error\' in data;\n    if (error) {\n        const errorMsg = { "error": { "value": data.errorCode, "context" : { "reason": data.error } } };\n        return errorMsg;\n    }\n    return false;\n}\n\nfunction addLat(lat, ubidotsPayload){\n    ubidotsPayload.position.context.lat = lat;\n}\n\nfunction addLng(lng, ubidotsPayload){\n    ubidotsPayload.position.context.lng = lng;\n}\n\nconst coordinateActions = {\n    "Longitude": addLng,\n    "Latitude": addLat,\n}\n\nconst assignPayloadKeys = (data, ubidotsPayload) => {\n    const { type, measurementValue } = data;\n\n    if (type === "Longitude" || type === "Latitude") {\n        if (!ubidotsPayload.position) {\n            ubidotsPayload.position = { "value": 1, "context": { "lat": undefined, "lng": undefined } };\n        }\n        coordinateActions[type](measurementValue, ubidotsPayload);\n    }\n    else if (data.type === "Timestamp") {\n        ubidotsPayload.timestamp = data.measurementValue;\n    }\n    else {\n        ubidotsPayload[type] = measurementValue;\n    }\n};\n\nfunction buildUbidotsPayload(data){\n    const ubidotsPayload = {};\n    data.forEach(innerData => {\n        innerData.forEach(innerInnerData => {\n            assignPayloadKeys(innerInnerData, ubidotsPayload);\n        });\n    });\n    return ubidotsPayload;\n}\n\nasync function formatPayload(args){\n\n    const data = args.uplink_message.decoded_payload.messages;\n    let ubidotsPayload = {};\n\n    const error = handleErrorIfExists(data[0][0]);\n    if (error) return error;\n\n    if (HOTSPOT_INFO) {\n        const { hotspots, port, fcnt } = args;\n        const { snr, rssi } = hotspots[0];\n        Object.assign(ubidotsPayload, { SNR: snr, RSSI: rssi, port, \'Frame Counter\': fcnt });\n    }\n    ubidotsPayload = buildUbidotsPayload(data);\n    console.log(ubidotsPayload);\n    return ubidotsPayload;\n};\n\nmodule.exports = { formatPayload };\n')),(0,o.yg)("h2",{id:"configure-the-things-stack"},"Configure The Things Stack"),(0,o.yg)("p",null,"When you have prepared the setup on Ubidots, then you need to create a Webhook integration on The Things Stack by using the Ubidots Webhook template."),(0,o.yg)("p",null,"On The Things Stack, navigate to ",(0,o.yg)("strong",{parentName:"p"},"Integrations")," \u2192 ",(0,o.yg)("strong",{parentName:"p"},"Webhooks"),", and click ",(0,o.yg)("strong",{parentName:"p"},"Add Webhook"),"."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add_webhook1.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"Choose the Ubidots Webhook template. "),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/tts-ubidots.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("p",null,"Name your integration by filling in the Webhook ID, and paste the Plugin ID and Ubidots token values."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ubi_web.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"To find the plugin ID, click on your newly created plugin and navigate to the Decoder tab on the left. The plugin ID is available as part of the HTTPs Endpoint URL (as highlighted on the image below).")),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/ids.png",alt:"pir",width:800,height:"auto"})),(0,o.yg)("h2",{id:"monitor-your-data"},"Monitor Your Data"),(0,o.yg)("p",null,"After you have completed the integration, navigate to ",(0,o.yg)("strong",{parentName:"p"},"Devices")," menu. You will see your end device appearing in the end devices list as soon as it sends an uplink message."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check_data_ubi.png",alt:"pir",width:800,height:"auto"})))}p.isMDXComponent=!0}}]);