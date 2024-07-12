"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80838],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>h});var i=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(58168),r=(n(96540),n(15680));const o={description:"Weather Prediction with BME280",title:"Weather Prediction with BME280",keywords:["Wio_terminal","Embedded_ML","Projects_based_TensorFlow_Lite"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-TFLM-2",last_update:{date:"1/30/2023",author:"jianjing Huang"}},a="Wio Terminal Tensorflow Lite Micro Intelligent meteostation with BME280",l={unversionedId:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-TinyML-TFLM-2",id:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-TinyML-TFLM-2",title:"Weather Prediction with BME280",description:"Weather Prediction with BME280",source:"@site/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-TinyML-TFLM-2.md",sourceDirName:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite",slug:"/Wio-Terminal-TinyML-TFLM-2",permalink:"/Wio-Terminal-TinyML-TFLM-2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-TinyML-TFLM-2.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Weather Prediction with BME280",title:"Weather Prediction with BME280",keywords:["Wio_terminal","Embedded_ML","Projects_based_TensorFlow_Lite"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-TFLM-2",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"TensorFlow Lite Micro Getting Started",permalink:"/Wio-Terminal-TinyML-TFLM-1"},next:{title:"Speech Recognition and Speech-to-Intent",permalink:"/Wio-Terminal-TinyML-TFLM-3"}},s={},d=[{value:"Understanding the data",id:"understanding-the-data",level:2},{value:"Building a machine learning model",id:"building-a-machine-learning-model",level:2},{value:"Deploying to Wio Terminal",id:"deploying-to-wio-terminal",level:2},{value:"LVGL Interface and WiFi",id:"lvgl-interface-and-wifi",level:2},{value:"Reference",id:"reference",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,i.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"wio-terminal-tensorflow-lite-micro-intelligent-meteostation-with-bme280"},"Wio Terminal Tensorflow Lite Micro Intelligent meteostation with BME280"),(0,r.yg)("p",null,"In this project we\u2019re going to use Wio Terminal and Tensorflow Lite for Microcontrollers to create an intelligent meteostation, able to predict the weather and precipitation for next 24 hours based on local data from BME280 environmental sensor."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/image_R7SKj3UKX6.jpeg"})),(0,r.yg)("p",null,"For more details and visuals, watch the corresponding video!"),(0,r.yg)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/qbpVltzvL6Q",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.yg)("p",null,"You will learn how to apply model optimization techniques, that will allow not only to run medium-sized Convolutional neural network, but also to have this sleeky GUI and WiFi connection all running at the same time for days and month at the time!"),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/result.gif"})),(0,r.yg)("p",null,"This is the end result, you can see there are current temperature,  humidity and atmospheric  pressure values displayed on the screen,  together with city name,  predicted weather type and predicted  precipitation chance \u2013 and in the bottom of the screen there is a log output field, which you can easily re-purpose for displaying extreme weather information or other relevant information.  While it looks good and useful as it is, there is a lot of things you  can add yourself \u2013 for example above mentioned news/tweets output on  the  screen or using deep sleep mode to conserve energy and make it  battery  powered and so on.\nIn this project we will be dealing with time series data, as we did multiple times before - the only big difference this time is that the time period is much larger for weather prediction. We are going to take a measurement every hour and perform prediction on 24 hours of data. Also since we're going to predict the average weather type for next 24 hours, additionally we will predict a precipitation chance for next 24 hours, with the same model. In order to do that we will utilize Keras Functional API and multi-output model."),(0,r.yg)("p",null,'Within multi-output model there is going to be "a stem", common for both outputs, which going to "branch out" to two different outputs. Main benefit of using multi-output model as compared to two independent models here is that the data and learned features used for predicting weather type and precipitation chance are highly related.'),(0,r.yg)("p",null,"If you are making this project on Windows, first thing you\u2019ll need to do is to download nightly version of Arduino IDE, since current stable version 1.18.3 will not compile sketches with a lot of   library dependencies (the issue is that linker command during  compilation exceeds maximum length on Windows).\nSecond, you need to make sure you have 1.8.2 version of Seeed SAMD board definitions in Arduino IDE.\nFinally,  since we\u2019re using a Convolutional neural  network and build it with Keras API, it contains an operation not  supported by current stable  version of Tensorflow Micro. Browsing  Tensorflow issues on Github I found that there is a pull request for adding this op (EXPAND_DIMS) to  list of available ops, but it was not merged into master at the time of making this video. You can git clone the Tensorflow repository,  switch to PR branch and compile Arduino library by  executing./tensorflow/lite/micro/tools/ci_build/test_arduino.sh on   Linux machine \u2013 the resulting library can be found in   tensorflow/lite/micro/tools/make/gen/arduino_x86_64/prj/tensorflow_lite.zip.   Alternatively, you can download already compiled  library from this project Github repository and place it into  your  Arduino sketches libraries folder \u2013 just make sure you only have  one  Tensorflow lite library at the time!"),(0,r.yg)("h2",{id:"understanding-the-data"},"Understanding the data"),(0,r.yg)("p",null,"It all starts with data of course. For this tutorial we will use a readily available weather dataset from Kaggle, Historical Hourly Weather Data 2012-2017.  Seeed EDU headquarters are located in Shenzhen, a city in Southern China \u2013 and that city is absent from the dataset, so we picked a city that is located on the similar  latitude and also has a subtropical climate \u2013 Miami."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/Capture1-1030x717.jpeg"})),(0,r.yg)("p",null,"You\u2019ll need to pick a city that at least resembles the climate where you  live \u2013 it goes without saying that the model trained on data from Miami and then deployed in Chicago in winter is not going to output correct predictions."),(0,r.yg)("h2",{id:"building-a-machine-learning-model"},"Building a machine learning model"),(0,r.yg)("p",null,"For data processing and model training step, let\u2019s open Jupyter Notebook you can find in course materials. The easiest way to run this notebook is to upload it to Google Colab, since it already has all the packages installed and ready to run."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/colab.png"})),(0,r.yg)("p",null,"Alternatively you can execute the notebook locally - to do that first install all the required dependencies in the virtual environment by running"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"pip install -r requirements.txt\n")),(0,r.yg)("p",null,"with ml virtual environment you have created before activated. Then run jupyter notebook command in the same environment, which will open notebook server in your default browser.\nJupyter Notebooks are great way to explore and present data, since they allow having both text and   executable code in the same environment. The general workflow is explained in the Notebook text sections."),(0,r.yg)("h2",{id:"deploying-to-wio-terminal"},"Deploying to Wio Terminal"),(0,r.yg)("p",null,"The model you have trained in the last step was converted to a byte array, which contains model structure and wights and can now be loaded to Wio Terminal together with C++ code."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/arduino1.png"})),(0,r.yg)("p",null,"Tensorflow Lite for Microcontrollers includes model Interpreter, which is designed to be lean and fast. The interpreter uses a static graph ordering and a custom (less-dynamic) memory allocator to ensure minimal load, initialization, and execution latency. The data placed in input buffers is fed to the model graph and then after inference is finished results are placed in the output buffer.\nIn order to reduce the size of the model and decrease inference time, we perform two important optimizations:\n\u2022 Perform full-integer quantization, changing model weights, inputs and outputs from floating point 32 numbers (each one occupying 32 bits of memory) to integer 8 numbers (each occupying only 8 bits), thus reducing size by factor of 4."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/inference.png"})),(0,r.yg)("p",null,"\u2022 Use micro_mutable_op_resolver and specify operations that we have in neural network, to compile our code only with the operations needed to run the model, as opposed to using all_ops_resolver, which includes all operations supported by current Tensorflow Lite for Microcontrollers interpreter."),(0,r.yg)("p",null,"Once the model training is finished, create an empty sketch and save it. Then copy the model you trained to the sketch folder and re-open the sketch.  Change the variable name of model and model length to something shorter.  Then use the code from wio_terminal_tfmicro_weather_prediction_static.ino, which you can find in course materials for testing."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/arduino2.png"})),(0,r.yg)("p",null,"Let\u2019s go over the main steps we have in C++ code\nWe include the headers for Tensorflow library and the file with model flatbuffer"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'#include <TensorFlowLite.h>\n//#include "tensorflow/lite/micro/micro_mutable_op_resolver.h"\n#include "tensorflow/lite/micro/all_ops_resolver.h"\n#include "tensorflow/lite/micro/micro_error_reporter.h"\n#include "tensorflow/lite/micro/system_setup.h"\n#include "tensorflow/lite/micro/micro_interpreter.h"\n#include "tensorflow/lite/schema/schema_generated.h"\n#include "model_Conv1D.h"\n')),(0,r.yg)("p",null,"Notice how I have micro_mutable_op_resolver.h commented out and all_ops_resolver.h enabled \u2013 all_ops_resolver.h header compiles all the operations currently present in Tensorflow Micro and convenient for   testing, but once you finished testing it is much better to switch to   micro_mutable_op_resolver.h to save devices memory \u2013 it does make a big difference.\nNext we define the pointers for error reporter, model, input and output tensors and interpreter. Notice how our model has two outputs \u2013  one for  precipitation amount and another one for weather type. We also define  tensor arena, which you can think of as a scratch board, holding  input,  output, and intermediate arrays \u2013 size required will depend on  the  model you are using, and may need to be determined by  experimentation."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"// Globals, used for compatibility with Arduino-style sketches.\nnamespace {\ntflite::ErrorReporter* error_reporter = nullptr;\nconst tflite::Model* model = nullptr;\ntflite::MicroInterpreter* interpreter = nullptr;\nTfLiteTensor* input = nullptr;\nTfLiteTensor* output_type = nullptr;\nTfLiteTensor* output_precip = nullptr;\nconstexpr int kTensorArenaSize = 1024*25;\nuint8_t tensor_arena[kTensorArenaSize];\n}  // namespace\n")),(0,r.yg)("p",null,"Then in setup function, there is more boilerplate stuff, such as instantiating error reporter, op resolver, interpreter, mapping the model, allocating tensors and finally checking the tensor shapes after allocation. Here is when code might throw an error during runtime, if some of model operations are not supported by current version of Tensorflow Micro library. In case you have unsupported operations, you   can either changed the model architecture or add the support for the operator yourself, usually by porting it from Tensorflow Lite."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n  Serial.begin(115200);\n  while (!Serial) {delay(10);}\n  \n  // Set up logging. Google style is to avoid globals or statics because of\n  // lifetime uncertainty, but since this has a trivial destructor it\'s okay.\n  // NOLINTNEXTLINE(runtime-global-variables)\n  static tflite::MicroErrorReporter micro_error_reporter;\n  error_reporter = &micro_error_reporter;\n  // Map the model into a usable data structure. This doesn\'t involve any\n  // copying or parsing, it\'s a very lightweight operation.\n  model = tflite::GetModel(Conv1D_tflite);\n  if (model->version() != TFLITE_SCHEMA_VERSION) {\n    TF_LITE_REPORT_ERROR(error_reporter,\n                         "Model provided is schema version %d not equal "\n                         "to supported version %d.",\n                         model->version(), TFLITE_SCHEMA_VERSION);\n    return;\n  }\n  // This pulls in all the operation implementations we need.\n  // NOLINTNEXTLINE(runtime-global-variables)\n  //static tflite::MicroMutableOpResolver<1> resolver;\n  static tflite::AllOpsResolver resolver;\n  // Build an interpreter to run the model with.\n  static tflite::MicroInterpreter static_interpreter(model, resolver, tensor_arena, kTensorArenaSize, error_reporter);\n  interpreter = &static_interpreter;\n  // Allocate memory from the tensor_arena for the model\'s tensors.\n  TfLiteStatus allocate_status = interpreter->AllocateTensors();\n  if (allocate_status != kTfLiteOk) {\n    TF_LITE_REPORT_ERROR(error_reporter, "AllocateTensors() failed");\n    return;\n  }\n  // Obtain pointers to the model\'s input and output tensors.\n  input = interpreter->input(0);\n  output_type = interpreter->output(1);\n  output_precip = interpreter->output(0);\n  \n  Serial.println(input->dims->size);\n  Serial.println(input->dims->data[1]);\n  Serial.println(input->dims->data[2]);\n  Serial.println(input->type);\n  Serial.println(output_type->dims->size);\n  Serial.println(output_type->dims->data[1]);\n  Serial.println(output_type->type);\n  Serial.println(output_precip->dims->size);\n  Serial.println(output_precip->dims->data[1]);\n  Serial.println(output_precip->type);\n}\n')),(0,r.yg)("p",null,"Finally in the loop function we define a placeholder for quantized  INT8 values  and an array with float values, which you can copy paste  from Colab  notebook for comparison of model inference on device vs. in  Colab."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n  int8_t x_quantized[72];\n  float x[72] = {0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n       0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,\n       0, 0, 0, 0, 0, 0};\n")),(0,r.yg)("p",null,"We quantize the float values to INT8 in for loop and place them in the input tensor one by one:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},"for (byte i = 0; i < 72; i = i + 1) {\n        input->data.int8[i] = x[i] / input->params.scale + input->params.zero_point;\n  }\n")),(0,r.yg)("p",null,"Then  inference is performed by Tensorflow Micro interpreter and if no errors are reported, values are placed in the output tensors."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'// Run inference, and report any error\n  TfLiteStatus invoke_status = interpreter->Invoke();\n  \n  if (invoke_status != kTfLiteOk) {\n    TF_LITE_REPORT_ERROR(error_reporter, "Invoke failed");\n    return;\n  }\n')),(0,r.yg)("p",null,"Similar to input, the output of the model is also quantized, so we  need to perform the reverse operation and convert it from INT8 to float."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-cpp"},'// Obtain the quantized output from model\'s output tensor\n  float y_type[4];\n  // Dequantize the output from integer to floating-point\n  int8_t y_precip_q = output_precip->data.int8[0];\n  Serial.println(y_precip_q);\n  float y_precip = (y_precip_q - output_precip->params.zero_point) * output_precip->params.scale;  \n  Serial.print("Precip: ");\n  Serial.print(y_precip);\n  Serial.print("\\t");\n  Serial.print("Type: ");\n  for (byte i = 0; i < 4; i = i + 1) {\n    y_type[i] = (output_type->data.int8[i] - output_type->params.zero_point) * output_type->params.scale;\n    Serial.print(y_type[i]);\n    Serial.print(" ");\n  }\n  Serial.print("\\n");\n}\n')),(0,r.yg)("p",null,"Check  and compare the values for the same data point, they should be the same  for quantized Tensorflow Lite model in Colab notebook and Tensorflow Micro model running on your Wio Terminal."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/array.png"})),(0,r.yg)("h2",{id:"lvgl-interface-and-wifi"},"LVGL Interface and WiFi"),(0,r.yg)("p",null,"Now the next step  is to make it from a demo into actually useful project. Open the sketch wio_terminal_tfmicro_weather_prediction_static.ino from course materials and have a look at its content."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/IMG_9575.JPG"})),(0,r.yg)("p",null,"The code is divided into main sketch, get_historical_data and GUI  parts. Since our model requires the data for past 24 hours we would need to wait 24 hours to perform the first inference, which is a lot \u2013  to solve this problem we get the weather for past 24 hours from openweathermap.com API and can perform the first inference immediately after device boots up and then replace the values in the circular buffer with temperature, humidity and pressure from BME280 sensor connected to  Wio Terminal I2C Grove socket. For GUI we used LVGL, a Little and Versatile Graphics Library."),(0,r.yg)("div",{align:"center"},(0,r.yg)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-2/lvgl.jpeg"})),(0,r.yg)("p",null,"Compile and upload the code, make sure you change WiFi credentials, your location and openweathermap.com API key in sketch before uploading. After upload the device will connect to the Internet, get the data for last 24 hours for your location and perform the first inference. Then it will wait for 1 hour before getting the values from BME280 sensor connected to Wio Terminal - if no sensor connected, the program will not initialize."),(0,r.yg)("h2",{id:"reference"},"Reference"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_TinyML_4_Weather_Prediction/weather_prediction_final.ipynb"},"Colab notebook"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_4_Weather_Prediction"},"Project Github")))))}c.isMDXComponent=!0}}]);