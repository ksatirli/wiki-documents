"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89853],{15680:(e,a,n)=>{n.d(a,{xA:()=>u,yg:()=>c});var t=n(96540);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function o(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},u=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),g=p(n),m=i,c=g["".concat(s,".").concat(m)]||g[m]||d[m]||r;return n?t.createElement(c,l(l({ref:a},u),{},{components:n})):t.createElement(c,l({ref:a},u))}));function c(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[g]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51027:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var t=n(58168),i=(n(96540),n(15680));const r={description:"Grafana for reTerminal",title:"Grafana for reTerminal",keywords:["Edge","reTerminal Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/weather-dashboard-with-Grafana-reTerminal",last_update:{date:"2/1/2023",author:"jianjing Huang"}},l="Build Your Own Weather Dashboard Using Grafana",o={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal/Application/UI_design/weather-dashboard-with-Grafana-reTerminal",id:"Edge/Raspberry_Pi_Devices/reTerminal/Application/UI_design/weather-dashboard-with-Grafana-reTerminal",title:"Grafana for reTerminal",description:"Grafana for reTerminal",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal/Application/UI_design/weather-dashboard-with-Grafana-reTerminal.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal/Application/UI_design",slug:"/weather-dashboard-with-Grafana-reTerminal",permalink:"/weather-dashboard-with-Grafana-reTerminal",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal/Application/UI_design/weather-dashboard-with-Grafana-reTerminal.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"Grafana for reTerminal",title:"Grafana for reTerminal",keywords:["Edge","reTerminal Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/weather-dashboard-with-Grafana-reTerminal",last_update:{date:"2/1/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"LVGL for reTerminal",permalink:"/reTerminal-build-UI-using-LVGL"},next:{title:"Getting start with reTerminal and Pi camera with OpenCV",permalink:"/reTerminal_DM_opencv"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Materials Required",id:"materials-required",level:2},{value:"Azure and InflexDB Setup",id:"azure-and-inflexdb-setup",level:2},{value:"ESP32 Setup",id:"esp32-setup",level:2},{value:"Install and Set Up Grafana On The reTerminal",id:"install-and-set-up-grafana-on-the-reterminal",level:2},{value:"Configure Grafana to use Flux",id:"configure-grafana-to-use-flux",level:2}],u={toc:p},g="wrapper";function d(e){let{components:a,...n}=e;return(0,i.yg)(g,(0,t.A)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"build-your-own-weather-dashboard-using-grafana"},"Build Your Own Weather Dashboard Using Grafana"),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png",alt:"image-20220124151124558"})),(0,i.yg)("h2",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,"We here will introduce you how to make your own weather dashboard on your reTerminal using Grafana, which is given credit to ",(0,i.yg)("a",{parentName:"p",href:"https://www.the-diy-life.com/grafana-weather-dashboard-on-the-reterminal-by-seeed-studio/"},"Michaelm Klementsk"),"."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.influxdata.com/"},"InflexDB"),"  is an ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open-source_software"},"open-source")," ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Time_series_database"},"time-series database")," (TSDB) developed by the company InfluxData. It is written in the ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Go_(programming_language)"},"Go programming language")," for storage and retrieval of ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Time_series"},"time series")," data in fields such as operations monitoring, application metrics, ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Internet_of_Things"},"Internet of Things")," sensor data, and real-time analytics. It also has support for processing data from ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Graphite_(software)"},"Graphite"),"."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," is a ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multi-platform"},"multi-platform")," ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open_source"},"open source")," analytics and ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Interactive_visualization"},"interactive visualization")," web application. It provides charts, graphs, and alerts for the web when connected to supported data sources. A licensed Grafana Enterprise version with additional capabilities is also available as a self-hosted installation or an account on the Grafana Labs cloud service. It is expandable through a ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Plug-in_(computing)"},"plug-in system"),". End users can create complex monitoring dashboards using interactive query builders. Grafana is divided into a ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Front_end_and_back_end"},"front end and back end"),", written in ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/TypeScript"},"TypeScript")," and ",(0,i.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Go_(programming_language)"},"Go"),", respectively."),(0,i.yg)("p",null,"We are going to use an ESP32 to collect temperature, humidity and pressure readings. These will then be posted to a time-series database in ",(0,i.yg)("a",{parentName:"p",href:"https://www.influxdata.com/products/influxdb-cloud/"},"InfluxDB"),". InfluxDB can be run locally on a Raspberry Pi or on their cloud server, we\u2019re going to be using their cloud server. We\u2019re then going to be using an analytics and visualisation application called ",(0,i.yg)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," to display the information that has been stored in the database. Grafana can also be run locally on our Raspberry Pi (or reTerminal in this case) or on their cloud server. We\u2019re going to be installing and running it locally on our reTerminal. You don\u2019t need to use a separate Pi for InfluxDB and Grafana, you could run both locally on your reTerminal if you\u2019d like to \u2013 I just don\u2019t want to have to leave the reTerminal running all the time in order to collect the data."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://www.the-diy-life.com/wp-content/uploads/2021/12/Data-Processing-Between-ESP32-and-Grafana-1024x576.jpg",alt:"Data Processing Between ESP32 and Grafana"})),(0,i.yg)("h2",{id:"materials-required"},"Materials Required"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html"},"reTerminal")),(0,i.yg)("li",{parentName:"ul"},"Power Supply"),(0,i.yg)("li",{parentName:"ul"},"ESP32"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Arduino-Sensor-Kit-Base-p-4743.html"},"Grove Sensor\u2019s From Beginner Kit")),(0,i.yg)("li",{parentName:"ul"},"Breadboard"),(0,i.yg)("li",{parentName:"ul"},"Breadboard Jumpers")),(0,i.yg)("h2",{id:"azure-and-inflexdb-setup"},"Azure and InflexDB Setup"),(0,i.yg)("p",null,"We need to create a virtual machine first."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1.")," Open the following page and log in to your ",(0,i.yg)("a",{parentName:"li",href:"https://portal.azure.com/#home"},"Microsoft Azure")," services. Click the ",(0,i.yg)("inlineCode",{parentName:"li"},"Virtual machines")," and click ",(0,i.yg)("inlineCode",{parentName:"li"},"Create"),".")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124131855082.png",alt:"image-20220124131855082"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2.")," Select Ubuntu 18.04 system as default system in the virtual machine. Click ",(0,i.yg)("inlineCode",{parentName:"li"},"Review + create")," and go to the next page.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132225793.png",alt:"image-20220124132225793"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," All the configurations are selected, click ",(0,i.yg)("inlineCode",{parentName:"li"},"Create"),".")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132800871.png",alt:"image-20220124132800871"})),(0,i.yg)("p",null,"The progess will take a while, when it is complete, click the ",(0,i.yg)("inlineCode",{parentName:"p"},"Go to resource")," button."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133101855.png",alt:"image-20220124133101855"})),(0,i.yg)("p",null,"Then it will move to the below page. Click the ",(0,i.yg)("inlineCode",{parentName:"p"},"Networking"),", choose ",(0,i.yg)("inlineCode",{parentName:"p"},"Add inbound port rule")," and add ",(0,i.yg)("inlineCode",{parentName:"p"},"8086")," port with any destination."),(0,i.yg)("img",{src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133706479.png",alt:"image-20220124133706479"}),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 4.")," Copy these commands to install the docker and enable it.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"sudo apt udpate\nsudo apt install docker docker-compose -y\nsudo systemctl enable --now docker && sudo systemctl start docker\nsudo systemctl status docker\n")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134313484.png",alt:"image-20220124134313484"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 5.")," Use the command to pull the InfluxDB image down.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"sudo docker pull influxdb:2.1.1\n")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134409253.png",alt:"image-20220124134409253"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 6.")," Apply the command to run the InfluxDB background.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"sudo docker run -d --name influxdb -p 8086:8086 influxdb:2.1.1\n")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135326814.png",alt:"image-20220124135326814"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 7.")," Open your browser and then input ",(0,i.yg)("inlineCode",{parentName:"li"},"http://yourip:8086"),'(Your IP). Click "Get Started" to use it.')),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135533274.png",alt:"image-20220124135533274"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 8.")," Record your ",(0,i.yg)("inlineCode",{parentName:"li"},"Organization Name"),"  and ",(0,i.yg)("inlineCode",{parentName:"li"},"Bucket Name"),' and then click "Continue"')),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135632177.png",alt:"image-20220124135632177"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 9.")," Click ",(0,i.yg)("inlineCode",{parentName:"li"},"Data > API Tokens"))),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140028985.png",alt:"image-20220124140028985"})),(0,i.yg)("p",null,"Azure and InflexDB now will be set up, next we will move to the ESP32."),(0,i.yg)("h2",{id:"esp32-setup"},"ESP32 Setup"),(0,i.yg)("p",null,"To collect the weather data, we are going to be using an ESP32 with a DHT11 sensor connected to pin 4 and a BMP280 pressure sensor connected to the I2C interface (pins 21 and 22). The example here is using two Grove sensor modules from the ",(0,i.yg)("a",{parentName:"p",href:"https://amzn.to/31my42U"},"beginner kit")," as it already has all of the required electronics built into them (additional resistors etc.)."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://www.the-diy-life.com/wp-content/uploads/2021/12/ESP32-Circuit-Diagram-1024x576.jpg",alt:"ESP32 Circuit Diagram"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1.")," Open the ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Arduino IDE")," and ",(0,i.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"install the libraries"),". Here we provide two installations.")),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Use Library Manager")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"1. Open the Arduino IDE and click to the \"Sketch\" menu and then Include Library > Manage Libraries.\n2. Type 'influxdb' in the search box\n3. Install the 'InfluxDBClient for Arduino' library\n")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Manual Installation")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"1. cd <arduino-sketch-location>/library.\n2. git clone https://github.com/tobiasschuerg/InfluxDB-Client-for-Arduino\n3. Restart the Arduino IDE\n")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2.")," Copy the following codes in the skecth.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-c++"},'#include <Wire.h>                                                   //Import the required libraries\n#include "DHT.h"\n#include "Seeed_BMP280.h"\n#include <WiFiMulti.h>\nWiFiMulti wifiMulti;\n#define DEVICE "ESP32"\n\n#include <InfluxDbClient.h>\n#include <InfluxDbCloud.h>\n\n#define WIFI_SSID "xxxxxxxx"                                            //Network Name\n#define WIFI_PASSWORD "xxxxxxxxxx"                                        //Network Password\n#define INFLUXDB_URL "http://xxxxxxxx:8086"                                                 //InfluxDB v2 server url, e.g. https://eu-central-1-1.aws.cloud2.influxdata.com (Use: InfluxDB UI -> Load Data -> Client Libraries)\n#define INFLUXDB_TOKEN "xxxxxxxxx"                                                                                             //InfluxDB v2 server or cloud API token (Use: InfluxDB UI -> Data -> API Tokens -> <select token>)\n#define INFLUXDB_ORG "xxxxxxx"                                                                                               //InfluxDB v2 organization id (Use: InfluxDB UI -> User -> About -> Common Ids )\n#define INFLUXDB_BUCKET "xxxxxxx"                                                                                            //InfluxDB v2 bucket name (Use: InfluxDB UI ->  Data -> Buckets)\n#define TZ_INFO "JST-9"                                                                                                //InfluxDB v2 timezone\n\nDHT dht(4,DHT11);                                                   //DHT and BMP sensor parameters\nBMP280 bmp280;\n\nint temp = 0;                                                       //Variables to store sensor readings\nint humid = 0;\nint pressure = 0;\n\n//InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN, InfluxDbCloud2CACert);                 //InfluxDB client instance with preconfigured InfluxCloud certificate\nInfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN); \n\nPoint sensor("weather");                                            //Data point\n\nvoid setup() \n{\n  Serial.begin(115200);                                             //Start serial communication\n  \n  dht.begin();                                                      //Connect to the DHT Sensor\n  if(!bmp280.init())                                                //Connect to pressure sensor\n    Serial.println("bmp280 init error!");\n\n  WiFi.mode(WIFI_STA);                                              //Setup wifi connection\n  wifiMulti.addAP(WIFI_SSID, WIFI_PASSWORD);\n\n  Serial.print("Connecting to wifi");                               //Connect to WiFi\n  while (wifiMulti.run() != WL_CONNECTED) \n  {\n    Serial.print(".");\n    delay(100);\n  }\n  Serial.println();\n\n  sensor.addTag("device", DEVICE);                                   //Add tag(s) - repeat as required\n  sensor.addTag("SSID", WIFI_SSID);\n\n  timeSync(TZ_INFO, "pool.ntp.org", "time.nis.gov");                 //Accurate time is necessary for certificate validation and writing in batches\n\n  if (client.validateConnection())                                   //Check server connection\n  {\n    Serial.print("Connected to InfluxDB: ");\n    Serial.println(client.getServerUrl());\n  } \n  else \n  {\n    Serial.print("InfluxDB connection failed: ");\n    Serial.println(client.getLastErrorMessage());\n  }\n}\n\nvoid loop()                                                          //Loop function\n{\n  temp = dht.readTemperature();                                      //Record temperature\n  humid = dht.readHumidity();                                        //Record temperature\n  pressure = bmp280.getPressure()/100;                               //Record pressure\n\n  sensor.clearFields();                                              //Clear fields for reusing the point. Tags will remain untouched\n\n  sensor.addField("temperature", temp);                              // Store measured value into point\n  sensor.addField("humidity", humid);                                // Store measured value into point\n  sensor.addField("pressure", pressure);                             // Store measured value into point\n\n    \n  if (wifiMulti.run() != WL_CONNECTED)                               //Check WiFi connection and reconnect if needed\n    Serial.println("Wifi connection lost");\n\n  if (!client.writePoint(sensor))                                    //Write data point\n  {\n    Serial.print("InfluxDB write failed: ");\n    Serial.println(client.getLastErrorMessage());\n  }\n  \n  Serial.print("Temp: ");                                            //Display readings on serial monitor\n  Serial.println(temp);\n  Serial.print("Humidity: ");\n  Serial.println(humid);\n  Serial.print("Pressure: ");\n  Serial.println(pressure);\n  delay(1000);                                                      //Wait 60 seconds\n}\n')),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Note:")," The codes are not finished. If you set up your API token and bucket, the generated code on the Arduino interface page accessed from your InfluxDB dashboard will already contain the correct setup information, so you only need to copy it into your code."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://www.the-diy-life.com/wp-content/uploads/2021/12/InfluxDB-Arduino-Interface-Instructions-1024x576.jpg",alt:"InfluxDB Arduino Interface Instructions"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3.")," Upload the codes and check the results.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140133524.png",alt:"image-20220124140133524"})),(0,i.yg)("p",null,"After a while, we can see that the information is now available in our InfluxDB database, so we know that our ESP32 is working correctly. Now we can move on to installing Grafana on our reTerminal and setting it up to display the information in our database."),(0,i.yg)("h2",{id:"install-and-set-up-grafana-on-the-reterminal"},"Install and Set Up Grafana On The reTerminal"),(0,i.yg)("p",null,"Next, we are going to install Grafan by following the terminal instructions outlined on their website for an ",(0,i.yg)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/installation/debian/"},"installation on Debian or Ubuntu"),". Then we just need to start Grafana and set it to re-start on bootup."),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://www.the-diy-life.com/wp-content/uploads/2021/12/Installing-Grafana-1024x542.jpg",alt:"Installing Grafana"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 1."),"  Access the Grafana web interface by opening up a new tab in the browser, pointing to localhost, port 3000. You can open your browser on your reTerminal and type ",(0,i.yg)("inlineCode",{parentName:"li"},"http://localhost:3000"))),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://www.the-diy-life.com/wp-content/uploads/2021/12/Grafana-Web-Interface-Localhost3000-1024x534.jpg",alt:"Grafana Web Interface Localhost3000"})),(0,i.yg)("p",null,"We then need to configure it to read in the data from InfluxDB by entering the sever and authentication information. This can all be found through your InfluxDB web interface and is quite similar to the information your ESP32 is publishing data to."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2."),"  Click the ",(0,i.yg)("inlineCode",{parentName:"li"},"Setting")," button and choose ",(0,i.yg)("inlineCode",{parentName:"li"},"Data sources"),".")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144300849.png",alt:"image-20220124144300849"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3."),"  Type the ",(0,i.yg)("inlineCode",{parentName:"li"},"InfluxDB")," in the filter and choose ",(0,i.yg)("inlineCode",{parentName:"li"},"InfluxDB"),".")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144322352.png",alt:"image-20220124144322352"})),(0,i.yg)("p",null,"Now we have installed and set Up Grafana On The reTerminal"),(0,i.yg)("h2",{id:"configure-grafana-to-use-flux"},(0,i.yg)("a",{parentName:"h2",href:"https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#configure-grafana-to-use-flux"},"Configure Grafana to use Flux")),(0,i.yg)("p",null,"With ",(0,i.yg)("strong",{parentName:"p"},"Flux")," selected as the query language in your InfluxDB data source, we will configure the InfluxDB connection:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Step 1."),"  Set the ",(0,i.yg)("strong",{parentName:"p"},"Connection")," and click ",(0,i.yg)("strong",{parentName:"p"},"Save & Test"),". The information respectively are:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"URL"),": Your ",(0,i.yg)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.0/reference/urls/"},"InfluxDB URL"),"."),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"http://yourip:8086/\n")),(0,i.yg)("p",{parentName:"li"}," ",(0,i.yg)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#"},"Change InfluxDB URL"))),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Organization"),": Your InfluxDB ",(0,i.yg)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.0/organizations/view-orgs/"},"organization name ",(0,i.yg)("strong",{parentName:"a"},"or")," ID"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Token"),": Your InfluxDB ",(0,i.yg)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.0/security/tokens/"},"API token"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Default Bucket"),": The default ",(0,i.yg)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.0/organizations/buckets/"},"bucket")," to use in Flux queries.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Min time interval"),": The ",(0,i.yg)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/features/datasources/influxdb/#min-time-interval"},"Grafana minimum time interval"),"."))))),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://docs.influxdata.com/img/influxdb/2-0-tools-grafana.png",alt:"img"})),(0,i.yg)("p",null,"Grafana should connect to the InfluxDB 2.0 datasource and returns the results of the test."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 2."),"  Add panel here.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143542830.png",alt:"image-20220124143542830"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 3."),"  Back to the ",(0,i.yg)("inlineCode",{parentName:"li"},"InfluxDB"),", follow the instrucions below and then create script.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143752559.png",alt:"image-20220124143752559"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 4."),"  Copy the scripts and paste them into the reTerminal.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143812005.png",alt:"image-20220124143812005"})),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151052928.png",alt:"image-20220124151052928"})),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Step 5.")," Check the results on the reTerminal and the information should be shown as below.")),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png",alt:"image-20220124164221791"})),(0,i.yg)("p",null,(0,i.yg)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png",alt:"image-20220124151124558"})))}d.isMDXComponent=!0}}]);