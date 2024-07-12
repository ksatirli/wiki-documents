"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[14152],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),g=u(n),c=o,m=g["".concat(i,".").concat(c)]||g[c]||p[c]||l;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[g]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(58168),o=(n(96540),n(15680));const l={description:"Adding more Grove modules into the Builder",title:"Adding more Grove modules into the Builder",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/list_of_supported_grove_n_adding_more",last_update:{date:"11/24/2023",author:"Matthew"}},a="Overview",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Sensor_Builder/list_of_seeed_grove_for_builder",id:"Sensor/SenseCAP/SenseCAP_Sensor_Builder/list_of_seeed_grove_for_builder",title:"Adding more Grove modules into the Builder",description:"Adding more Grove modules into the Builder",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Sensor_Builder/list_of_seeed_grove_for_builder.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Sensor_Builder",slug:"/list_of_supported_grove_n_adding_more",permalink:"/list_of_supported_grove_n_adding_more",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Sensor_Builder/list_of_seeed_grove_for_builder.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1700784e3,formattedLastUpdatedAt:"Nov 24, 2023",frontMatter:{description:"Adding more Grove modules into the Builder",title:"Adding more Grove modules into the Builder",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/list_of_supported_grove_n_adding_more",last_update:{date:"11/24/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"Build LoRaWAN Sensors with SenseCAP Data Logger",permalink:"/SenseCAP_Builder_build_LoRaWAN_Sensors"},next:{title:"SenseCAP Data Logger",permalink:"/SenseCAP_Data_Logger_Intro"}},i={},u=[{value:"Add Grove - \xb15A DC/AC Current Sensor (ACS70331) to the builder and applying",id:"add-grove---5a-dcac-current-sensor-acs70331-to-the-builder-and-applying",level:2},{value:"1. Build new libraries using GitHub source code",id:"1-build-new-libraries-using-github-source-code",level:3},{value:"2. Knowledge of Modbus Register Table",id:"2-knowledge-of-modbus-register-table",level:3},{value:"3. Knowledge of Hardware Connection",id:"3-knowledge-of-hardware-connection",level:3},{value:"4. From steps above, we can have the library for Grove AC sensor:",id:"4-from-steps-above-we-can-have-the-library-for-grove-ac-sensor",level:3},{value:"5. Using Arduino to program to test first",id:"5-using-arduino-to-program-to-test-first",level:3},{value:"6. Get Calibration value",id:"6-get-calibration-value",level:3},{value:"Reference",id:"reference",level:3},{value:"The list of supported Grove modules for SenseCAP S2110 Sensor Builder",id:"the-list-of-supported-grove-modules-for-sensecap-s2110-sensor-builder",level:2},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:u},g="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(g,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"overview"},"Overview"),(0,o.yg)("p",null,"In this wiki, we are introducing how to add more Grove modules in to SenseCAP S2110 Sensor Builder and list all the supported ones."),(0,o.yg)("h2",{id:"add-grove---5a-dcac-current-sensor-acs70331-to-the-builder-and-applying"},"Add Grove - \xb15A DC/AC Current Sensor (ACS70331) to the builder and applying"),(0,o.yg)("h3",{id:"1-build-new-libraries-using-github-source-code"},"1. Build new libraries using GitHub source code"),(0,o.yg)("p",null,"The contents here are on the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_S2110"},"GitHub")," where we maintain the code."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 1:")," Add a ",(0,o.yg)("inlineCode",{parentName:"p"},"sensorNew.hpp")," file to the ",(0,o.yg)("inlineCode",{parentName:"p"},"src\\sensor")," folder for the new sensor.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 2:")," Define the sensor class and implement the ",(0,o.yg)("inlineCode",{parentName:"p"},"init()")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"sample()")," functions."),(0,o.yg)("p",{parentName:"li"},"The sensor class should inherits from the ",(0,o.yg)("inlineCode",{parentName:"p"},"sensorClass")," class, and implement the ",(0,o.yg)("inlineCode",{parentName:"p"},"init()")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"sample()")," functions.\nThe ",(0,o.yg)("inlineCode",{parentName:"p"},"init()")," function is used to initialize the sensor, and than returns a register offset value for Modbus communication.\nThe ",(0,o.yg)("inlineCode",{parentName:"p"},"sample()")," function is used to read the sensor data, returns true when the data is valid, and returns false when the data is invalid.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},(0,o.yg)("strong",{parentName:"p"},"Step 3:")," Include the ",(0,o.yg)("inlineCode",{parentName:"p"},"sensorNEW.hpp")," file and call it."),(0,o.yg)("p",{parentName:"li"},"Add line ",(0,o.yg)("inlineCode",{parentName:"p"},'#include "sensorNew.hpp"')," to the ",(0,o.yg)("inlineCode",{parentName:"p"},"src\\sensor\\sensorBuilder.hpp")," file.\nIn the ",(0,o.yg)("inlineCode",{parentName:"p"},"setup()")," function of the ",(0,o.yg)("inlineCode",{parentName:"p"},"sensorBuilder.ino")," file, create the new sensor class object and call the ",(0,o.yg)("inlineCode",{parentName:"p"},"SensorBuilder.addSensor()")," function with it as an argument. "))),(0,o.yg)("p",null,"Refer to the following code :"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"void setup()\n{\n  Serial.begin(9600);\n  SensorBuilder.check_grove();\n \n  /* sensor list */\n  sensorUltrasonic *ultrasonic = new sensorUltrasonic();\n  SensorBuilder.addSensor(ultrasonic);\n  \n  // add new sensor to sensor list\n  sensorNew *newSensor = new sensorNew();\n  SensorBuilder.addSensor(newSensor);\n\n  SensorBuilder.begin();\n}\n")),(0,o.yg)("admonition",{type:"note"},(0,o.yg)("p",{parentName:"admonition"},"The Modbus register address for the new sensor will start from ",(0,o.yg)("inlineCode",{parentName:"p"},"0x0034"),", the register bit width for each measurement value is 32, so the register address offset between two adjacent measurement values is 2.")),(0,o.yg)("h3",{id:"2-knowledge-of-modbus-register-table"},"2. Knowledge of Modbus Register Table"),(0,o.yg)("p",null,"Modbus register addresses 0x0000 to 0x0003 are reserved for storing module system information, where 0x0000 is the modbus address with a default value of 1 and a maximum value of 247, 0x0001 is the serial port baud rate with a default value of 96 (corresponding to 9600), and 0x0002 to 0x0003 are for software version."),(0,o.yg)("table",null,(0,o.yg)("thead",null,(0,o.yg)("tr",null,(0,o.yg)("th",null,"Grove Sensor Name"),(0,o.yg)("th",null,"Register Name"),(0,o.yg)("th",null,"Register Address",(0,o.yg)("br",null),"(Hexadecimal)"),(0,o.yg)("th",null,"Register Address",(0,o.yg)("br",null),"(Decimal)"))),(0,o.yg)("tbody",null,(0,o.yg)("tr",null,(0,o.yg)("td",{rowSpan:3},"Grove - CO2 & Temperature & Humidity Sensor (SCD41)"),(0,o.yg)("td",null,"Temperature"),(0,o.yg)("td",null,"0x0004"),(0,o.yg)("td",null,"04")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Humidity"),(0,o.yg)("td",null,"0x0006"),(0,o.yg)("td",null,"06")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"CO2"),(0,o.yg)("td",null,"0x0008"),(0,o.yg)("td",null,"08")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Grove - Light Sensor v1.2"),(0,o.yg)("td",null,"Light"),(0,o.yg)("td",null,"0x000A"),(0,o.yg)("td",null,"10")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Grove - Flame Sensor"),(0,o.yg)("td",null,"Flame"),(0,o.yg)("td",null,"0x000C"),(0,o.yg)("td",null,"12")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Grove - Oxygen Sensor (MIX8410)"),(0,o.yg)("td",null,"Oxygen"),(0,o.yg)("td",null,"0x000E"),(0,o.yg)("td",null,"14")),(0,o.yg)("tr",null,(0,o.yg)("td",{rowSpan:3},"Grove - Sunlight sensor (SI1151)"),(0,o.yg)("td",null,"Light Intensity"),(0,o.yg)("td",null,"0x0010"),(0,o.yg)("td",null,"16")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Visible Light"),(0,o.yg)("td",null,"0x0012"),(0,o.yg)("td",null,"18")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"UV"),(0,o.yg)("td",null,"0x0014"),(0,o.yg)("td",null,"20")),(0,o.yg)("tr",null,(0,o.yg)("td",{rowSpan:3},"Grove Temperature and Barometer Sensor (BMP280)"),(0,o.yg)("td",null,"Barometric Temperature"),(0,o.yg)("td",null,"0x0016"),(0,o.yg)("td",null,"22")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Atmospheric Pressure"),(0,o.yg)("td",null,"0x0018"),(0,o.yg)("td",null,"24")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Height"),(0,o.yg)("td",null,"0x001A"),(0,o.yg)("td",null,"26")),(0,o.yg)("tr",null,(0,o.yg)("td",{rowSpan:4},"Grove - Temperature Humidity Pressure Gas Sensor(BME680)"),(0,o.yg)("td",null,"Temperature"),(0,o.yg)("td",null,"0x001C"),(0,o.yg)("td",null,"28")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Atmospheric Pressure"),(0,o.yg)("td",null,"0x001E"),(0,o.yg)("td",null,"30")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Humidity"),(0,o.yg)("td",null,"0x0020"),(0,o.yg)("td",null,"32")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Air Quality(VOC)"),(0,o.yg)("td",null,"0x0022"),(0,o.yg)("td",null,"34")),(0,o.yg)("tr",null,(0,o.yg)("td",{rowSpan:4},"Grove - Gas Sensor V2(Multichannel)"),(0,o.yg)("td",null,"N02"),(0,o.yg)("td",null,"0x0024"),(0,o.yg)("td",null,"36")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"C2H50H"),(0,o.yg)("td",null,"0x0026"),(0,o.yg)("td",null,"38")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"VOC"),(0,o.yg)("td",null,"0x0028"),(0,o.yg)("td",null,"40")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"CO"),(0,o.yg)("td",null,"0x002A"),(0,o.yg)("td",null,"42")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Grove - UV Sensor"),(0,o.yg)("td",null,"UV Intensity"),(0,o.yg)("td",null,"0x002C"),(0,o.yg)("td",null,"44")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Grove - Turbidity Sensor Meter V1.0"),(0,o.yg)("td",null,"Turbidity"),(0,o.yg)("td",null,"0x002E"),(0,o.yg)("td",null,"46")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Grove - TDS Sensor"),(0,o.yg)("td",null,"TDS"),(0,o.yg)("td",null,"0x0030"),(0,o.yg)("td",null,"48")),(0,o.yg)("tr",null,(0,o.yg)("td",null,"Grove - Ultrasonic Ranger"),(0,o.yg)("td",null,"Distance"),(0,o.yg)("td",null,"0x0032"),(0,o.yg)("td",null,"50")))),(0,o.yg)("h3",{id:"3-knowledge-of-hardware-connection"},"3. Knowledge of Hardware Connection"),(0,o.yg)("p",null,"Connect the SIG (signal) pin of the sensor to one of the analog pins of the any microcontroller, supply 5V-3.3V to VCC and GND to Ground of the microcontroller.  "),(0,o.yg)("p",null,"The Grove sensor comes with a potentiometer mounted on it, that allows the user to fine tune with the gain, making adjustable to fit different input voltages. Its helps change sensor's sensitivity."),(0,o.yg)("div",{align:"center"},(0,o.yg)("img",{width:600,src:"https://media-cdn.seeedstudio.com/media/wysiwyg/__16696942484712.png"})),(0,o.yg)("h3",{id:"4-from-steps-above-we-can-have-the-library-for-grove-ac-sensor"},"4. From steps above, we can have the library for Grove AC sensor:"),(0,o.yg)("p",null,"Stick to the steps above, we have the library for applying Grove AC sensor."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'#ifndef _SENSOR_AC_H\n#define _SENSOR_AC_H\n\n#include "sensorClass.hpp"\n\n#define AC_ADC_PIN A2\n#define ADC_BITS 12\n#define ADC_COUNTS (1<<ADC_BITS)\n\nclass sensorAC : public sensorClass\n{\n  public:\n  sensorAC(): sensorClass("AC"){};\n  ~sensorAC(){};\n\n  uint16_t init(uint16_t reg, bool i2c_available);\n  bool connected();\n  bool sample();\n\n  enum\n  {\n    AC = 0,\n    MAX\n  };\n  private:\n    double voltCal = 523.56;\n    double phaseCal = 1.7;\n    unsigned int cycles = 20;\n    unsigned int timeout = 2000;\n    int SupplyVoltage = 3300;\n    int sampleV;\n    double lastFilteredV,filteredV;\n    double offsetV = ADC_COUNTS >> 1;\n    double phaseShiftedV;\n    double sqV,sumV;\n    int startV;\n    boolean lastVCross,checkVCross;\n};\n\nuint16_t sensorAC::init(uint16_t reg, bool i2c_available){\n  uint16_t t_reg = reg; \n\n  for (uint16_t i = 0; i < sensorAC::MAX; i++)\n    {\n        sensorClass::reg_t value;\n        value.addr = t_reg;\n        value.type = sensorClass::regType_t::REG_TYPE_S32_ABCD;\n        value.value.s32 = 0;\n        t_reg += sensorClass::valueLength(value.type);\n        m_valueVector.emplace_back(value);\n    }\n\n    _connected = i2c_available ? false : true;\n    //_connected = true;\n    return t_reg - reg;\n}\n\nbool sensorAC::sample()\n{\n    \n  GROVE_SWITCH_ADC;\n  pinMode(AC_ADC_PIN, INPUT);\n  \n  unsigned int crossCount = 0;\n  unsigned int numberOfSamples = 0;\n  \n  unsigned long start = millis();\n  \n  while(1){\n    int startV = analogRead(AC_ADC_PIN);\n    if((startV<(ADC_COUNTS*0.51)) && (startV>(ADC_COUNTS*0.49)))\n        break;\n    if((millis()-start)>timeout)    \n        break;\n  }\n  \n  start = millis();\n  \n  while((crossCount<cycles) && ((millis()-start)<timeout))\n  {\n    numberOfSamples++;\n    lastFilteredV = filteredV;\n    \n    sampleV = analogRead(AC_ADC_PIN);\n    offsetV = offsetV + ((sampleV - offsetV)/ADC_COUNTS);\n    filteredV = sampleV - offsetV;\n    \n    sqV = filteredV * filteredV;\n    sumV += sqV;\n    \n    phaseShiftedV = lastFilteredV + phaseCal * (filteredV - lastFilteredV);\n    \n    lastVCross = checkVCross;\n    if(sampleV>startV)\n        checkVCross = true;\n    else \n        checkVCross = false;\n    if(numberOfSamples == 1)\n        lastVCross = checkVCross;\n    if(lastVCross !=checkVCross)\n        crossCount++;\n  }\n  \n  double V_RATIO = voltCal * ((SupplyVoltage/1000.0)/(ADC_COUNTS));\n  float value = V_RATIO * sqrt(sumV/numberOfSamples);\n  m_valueVector[AC].value.s32 = value * SCALE;\n  //Serial.println(value);\n  sumV = 0; \n  \n  return true;\n}\n\nbool sensorAC::connected()\n{\n  return _connected;\n}\n\n#endif\n')),(0,o.yg)("h3",{id:"5-using-arduino-to-program-to-test-first"},"5. Using Arduino to program to test first"),(0,o.yg)("p",null,"The program takes a few parameters, that need to be initialized before running the program. This ensure that the program is running correctly with the sensor and to get accurate values."),(0,o.yg)("p",null,"First flash the program into the microcontroller, then calibrate the parameters to fit the readings."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"#define AC_ADC_PIN A2               //here pin A2 is used\n#define ADC_BITS 12                 //depends on microcontroller to microcontroller\n#define Calibration_Value 523.56    //depends on the calibration result\n#define Phase_Shift 1.7             //depends on the calibration result\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(AC_ADC_PIN, INPUT);\n}\n\nint ADC_COUNTS = (1<<ADC_BITS);\ndouble voltCal = Calibration_Value;\ndouble phaseCal = Phase_Shift;\nunsigned int cycles = 10;           //Number of AC Cycles you want to measure\nunsigned int timeout = 500;         //Timeout \nint SupplyVoltage = 3300;\nint sampleV;\ndouble lastFilteredV,filteredV;\ndouble offsetV = ADC_COUNTS >> 1;\ndouble phaseShiftedV;\ndouble sqV,sumV;\nint startV;\nboolean lastVCross,checkVCross;\n\nvoid loop() {\n  unsigned int crossCount = 0;\n  unsigned int numberOfSamples = 0;\n  \n  unsigned long start = millis();\n  \n  while(1){\n  int startV = analogRead(AC_ADC_PIN);\n  if((startV<(ADC_COUNTS*0.51)) && (startV>(ADC_COUNTS*0.49)))\n    break;\n  if((millis()-start)>timeout)  \n    break;\n  }\n  \n  start = millis();\n  \n  while((crossCount<cycles) && ((millis()-start)<timeout))\n  {\n    numberOfSamples++;\n    lastFilteredV = filteredV;\n    \n    sampleV = analogRead(AC_ADC_PIN);\n    offsetV = offsetV + ((sampleV - offsetV)/ADC_COUNTS);\n    filteredV = sampleV - offsetV;\n    \n    sqV = filteredV * filteredV;\n    sumV += sqV;\n    \n    phaseShiftedV = lastFilteredV + phaseCal * (filteredV - lastFilteredV);\n    \n    lastVCross = checkVCross;\n    if(sampleV>startV)\n      checkVCross = true;\n    else \n      checkVCross = false;\n    if(numberOfSamples == 1)\n      lastVCross = checkVCross;\n    if(lastVCross !=checkVCross)\n      crossCount++;\n  }\n  \n  double V_RATIO = voltCal * ((SupplyVoltage/1000.0)/(ADC_COUNTS));\n  float value = V_RATIO * sqrt(sumV/numberOfSamples);\n  Serial.println(value);\n  sumV = 0; \n\n}\n")),(0,o.yg)("h3",{id:"6-get-calibration-value"},"6. Get Calibration value"),(0,o.yg)("p",null,"Initially the Analog pin is set to the A2 pin, could be changed according to your requirement, using AC_ADC_PIN parameter.\nCalibration_Value and Phase_Shift value, need to be changed every time you change the voltage source as the AC voltage varies from country to country or sometimes even socket to socket."),(0,o.yg)("p",null,"The program outputs the sensor value onto the serial monitor. One can also open the serial plotter to view the voltage vs time graph."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Step 1: Take the multimeter and measure the AC voltage and note it down."),(0,o.yg)("li",{parentName:"ul"},"Step 2: Similarly note the voltage shown in the serial monitor.")),(0,o.yg)("p",null,"Here in my case, the reading from the multimeter is 220V RMS voltage, while the sensor shows 718.87V on the serial monitor, in order to get an accurate calibration value, we need to do simple math, using the following formula."),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://s0.wp.com/latex.php?latex=+%5Cdfrac%7BMains+Voltage%7D%7Bx%7D+%3D+%5Cdfrac%7BSensor+voltage%7D%7BInitail+Calibration%7D&bg=ffffff&fg=000&s=0&201002",alt:" \\dfrac{Mains Voltage}{x} = \\dfrac{Sensor voltage}{Initail Calibration}"})),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Step 3: Find the value of x and replace it with Calibration_Value in the program and flash the program to the microcontroller.")),(0,o.yg)("p",null,(0,o.yg)("img",{parentName:"p",src:"https://s0.wp.com/latex.php?latex=+x+%3D+%5Cdfrac%7Bmains+voltage+%5Ctimes+initial+calibration%7D%7BSensor+voltage%7D&bg=ffffff&fg=000&s=0&c=20201002",alt:" x = \\dfrac{mains voltage \\times initial calibration}{Sensor voltage}"}),"\nYou can change the other parameters like Phase_Shift, Number of AC cycles and timeout according to your configuration or keep it default."),(0,o.yg)("h3",{id:"reference"},"Reference"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"You can refer the ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/mcmchris/mcm-grove-voltage-sensor"},"Grove AC-Voltage Sensor Library")," for more information."),(0,o.yg)("li",{parentName:"ul"},"More details on the calculation can be found ",(0,o.yg)("a",{parentName:"li",href:"https://bestengineeringprojects.com/how-to-ac-voltage-measurement-using-arduino-without-transformer/"},"here"))),(0,o.yg)("h2",{id:"the-list-of-supported-grove-modules-for-sensecap-s2110-sensor-builder"},"The list of supported Grove modules for SenseCAP S2110 Sensor Builder"),(0,o.yg)("p",null,"Currently, SenseCAP S2110 Sensor Builder supports the following Grove modules out-of-the-box to communicate with SenseCAP Data Logger and send the sensor data to the SenseCAP platform via LoRa."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Barometer-Sensor-BMP280.html"},"Grove - Temperature and Barometer Sensor (BMP280)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Oxygen-Sensor-MIX8410-p-4697.html"},"Grove - Oxygen Sensor (MIX8410)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD41-p-5025.html"},"Grove - CO2 & Temperature & Humidity Sensor - SCD41")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Sunlight-Sensor.html"},"Grove - Sunlight Sensor - SI1151")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html"},"Grove - Light Sensor v1.2 - LS06-S phototransistor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Flame-Sensor.html"},"Grove - Flame Sensor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Pressure-and-Gas-Sensor-for-Arduino-BME680.html"},"Grove - Gas Sensor(BME680)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html?queryID=e92bca5d79e17a6d5bf1447be36e2ee2&objectID=4569&indexName=bazaar_retailer_products"},"Grove - Multichannel Gas Sensor v2")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-TDS-Sensor-p-4400.html?queryID=9f138cfc508f141092493577c1ca83bb&objectID=4400&indexName=bazaar_retailer_products"},"Grove - TDS Sensor/Meter For Water Quality (Total Dissolved Solids)")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-UV-Sensor.html?queryID=07ecb93f63b4035df7dfa9aea8b1e498&objectID=1345&indexName=bazaar_retailer_products"},"Grove - UV Sensor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Ultrasonic-Distance-Sensor.html?queryID=ebe18a5e13611be3b60f176e7bfabde7&objectID=2281&indexName=bazaar_retailer_products"},"Grove - Ultrasonic Distance Sensor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Turbidity-Sensor-p-4399.html?queryID=42f9c89339bce9fbff617e5c8a0328eb&objectID=4399&indexName=bazaar_retailer_products"},"Grove - Turbidity Sensor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.hackster.io/jojang2u/use-the-as3935-to-detect-lightning-to-predict-the-weather-9170e7"},"Grove - Lightning Sensor")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-5A-DC-AC-Current-Sensor-ACS70331-p-2928.html"},"Grove - \xb15A DC/AC Current Sensor (ACS70331)"))),(0,o.yg)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"This project is supported by the Seeed Studio ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"Contributor Project"),"."),(0,o.yg)("li",{parentName:"ul"},"Thanks ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=34120904"},"Mohammed Adnan Khan's efforts")," and your work will be ",(0,o.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"exhibited"),".")),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);