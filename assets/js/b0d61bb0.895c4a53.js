"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60360],{15680:(e,t,i)=>{i.d(t,{xA:()=>g,yg:()=>c});var n=i(96540);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},g=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,g=a(e,["components","mdxType","originalType","parentName"]),u=d(i),p=o,c=u["".concat(l,".").concat(p)]||u[p]||h[p]||s;return i?n.createElement(c,r(r({ref:t},g),{},{components:i})):n.createElement(c,r({ref:t},g))}));function c(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=i.length,r=new Array(s);r[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:o,r[1]=a;for(var d=2;d<s;d++)r[d]=i[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},14682:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=i(58168),o=(i(96540),i(15680));const s={description:"Speech Recognition based on Edge Impulse",title:"Speech Recognition based on Edge Impulse",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-PDM-EI",last_update:{date:"10/12/2023",author:"Bruno Santos (Feiticeir0)"}},r="Speech Recognition based on Edge Impulse using XIAO nRF52840",a={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/XIAO-BLE-PDM-EI",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/XIAO-BLE-PDM-EI",title:"Speech Recognition based on Edge Impulse",description:"Speech Recognition based on Edge Impulse",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/XIAO-BLE-PDM-EI.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML",slug:"/XIAO-BLE-PDM-EI",permalink:"/XIAO-BLE-PDM-EI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/XIAO-BLE-PDM-EI.md",tags:[],version:"current",lastUpdatedBy:"Bruno Santos (Feiticeir0)",lastUpdatedAt:1697068800,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{description:"Speech Recognition based on Edge Impulse",title:"Speech Recognition based on Edge Impulse",image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-PDM-EI",last_update:{date:"10/12/2023",author:"Bruno Santos (Feiticeir0)"}},sidebar:"ProductSidebar",previous:{title:"Motion Recognition based on Edge Impulse",permalink:"/XIAOEI"},next:{title:"Getting Started with TensorFlow Lite on Seeed Studio XIAO nRF52840 Sense",permalink:"/XIAO-BLE-Sense-TFLite-Getting-Started"}},l={},d=[{value:"Knowledge before project",id:"knowledge-before-project",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Preparation",id:"hardware-preparation",level:3},{value:"Here&#39;s the hardware pinout for XIAO nRF52840 Sense",id:"heres-the-hardware-pinout-for-xiao-nrf52840-sense",level:4},{value:"Software Preparation",id:"software-preparation",level:2},{value:"Dataset",id:"dataset",level:3},{value:"Getting Started",id:"getting-started-1",level:2},{value:"Step 1 - Open the Edge Impulse",id:"step-1---open-the-edge-impulse",level:3},{value:"Step 2 - Add data",id:"step-2---add-data",level:3},{value:"Step 3 - Select training method",id:"step-3---select-training-method",level:3},{value:"Step 4 - Generate the features",id:"step-4---generate-the-features",level:3},{value:"Step 5 - Classifier",id:"step-5---classifier",level:3},{value:"Step 6 - Deployment and get the Arduino library",id:"step-6---deployment-and-get-the-arduino-library",level:3},{value:"Deployment Options",id:"deployment-options",level:4},{value:"Step 7 - Add the library to the Arduino IDE",id:"step-7---add-the-library-to-the-arduino-ide",level:3},{value:"Step 8 - Voice control the RGB lights on the XIAO nRF52840 Sense",id:"step-8---voice-control-the-rgb-lights-on-the-xiao-nrf52840-sense",level:3},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],g={toc:d},u="wrapper";function h(e){let{components:t,...i}=e;return(0,o.yg)(u,(0,n.A)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"speech-recognition-based-on-edge-impulse-using-xiao-nrf52840"},"Speech Recognition based on Edge Impulse using XIAO nRF52840"),(0,o.yg)("p",null,"In this wiki, I will show how to use Edge Impulse with the ML capabilities of the Seeed Studio XIAO nRF52840 for Speech Recognition. We will use the Microphone which is already on the XIAO nRF52840 Sense."),(0,o.yg)("h2",{id:"knowledge-before-project"},"Knowledge before project"),(0,o.yg)("p",null,"The XIAO nRF52840 is not officially supported by Edge Impulse and it's not present as a device to collect data from, but I'm just going to demonstrate how can we use it to run inference using the device microphone."),(0,o.yg)("h2",{id:"getting-started"},"Getting Started"),(0,o.yg)("p",null,"To follow this tutorial , you need the following hardware"),(0,o.yg)("div",{class:"table-center"},(0,o.yg)("table",{align:"center"},(0,o.yg)("tr",null,(0,o.yg)("th",null,"Seeed Studio XIAO nRF52840-Sense")),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg",style:{width:250,height:"auto"}})))),(0,o.yg)("tr",null,(0,o.yg)("td",null,(0,o.yg)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.yg)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},(0,o.yg)("strong",null,(0,o.yg)("span",null,(0,o.yg)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,o.yg)("h3",{id:"hardware-preparation"},"Hardware Preparation"),(0,o.yg)("p",null,"We don't need any hardware preparation. The XIAO nRF52840 already has everything we need to this project. We just need the PDM microphone. "),(0,o.yg)("h4",{id:"heres-the-hardware-pinout-for-xiao-nrf52840-sense"},"Here's the hardware pinout for XIAO nRF52840 Sense"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/XIAO_nrf82840_hardware.png",alt:"XIAO nrf82840 hardware",width:600,height:"auto"})),(0,o.yg)("p",{style:{textAlign:"center"}}),(0,o.yg)("h2",{id:"software-preparation"},"Software Preparation"),(0,o.yg)("p",null,"To try this, we just need three things:"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},"Google Speech commands dataset(check below)"),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://edgeimpulse.com/"},"Edge Impulse Account")),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("a",{parentName:"li",href:"https://www.arduino.cc/"},"Arduino IDE"))),(0,o.yg)("h3",{id:"dataset"},"Dataset"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"I'm going to use the Google speech command dataset. Not the all dataset, just some words from it."),(0,o.yg)("li",{parentName:"ul"},"For now, download the dataset and unzip it. The complete dataset is 2.3GB."),(0,o.yg)("li",{parentName:"ul"},"This ",(0,o.yg)("a",{href:"https://www.tensorflow.org/lite/microcontrollers",target:"_blank"},"Google Speech commands dataset")," is used by Google in their micro speech example for TensorFlow Lite for MicroControllers."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{href:"https://github.com/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb",target:"_blank"}," You can find the code here."))),(0,o.yg)("p",null,"We can download the dataset from the first link above and it will be extracted as:"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/dataset_extracted.png",alt:"Dataset extracted",alt:"Speech commands dataset",width:600,height:"auto"})),(0,o.yg)("h2",{id:"getting-started-1"},"Getting Started"),(0,o.yg)("p",null,"Now Let us get started using Edge Impulse to create an ML model based on the dataset."),(0,o.yg)("h3",{id:"step-1---open-the-edge-impulse"},"Step 1 - Open the Edge Impulse"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Edge Impulse is a machine learning (ML) development platform that enables developers to create and deploy custom ML models to edge devices, such as microcontrollers and smartphones. "),(0,o.yg)("li",{parentName:"ul"},"It provides a variety of tools and resources to help build and optimize ML models for specific tasks, such as keyword spotting, anomaly detection, and classification.")),(0,o.yg)("p",null,"Let's create a new project. Give it a name."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge1.png",alt:"Edge Impulse New project",width:600,height:"auto"})),(0,o.yg)("p",null,"After creating a new project, go to the data acquisition page."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge2.png",alt:"Edge Impulse Data Aquisition",width:"{600}",height:"auto"})),(0,o.yg)("h3",{id:"step-2---add-data"},"Step 2 - Add data"),(0,o.yg)("p",null,'Because we\'re going to use the Google speech commands dataset, choose "Add existing data".\xa0\nNext, choose "Upload data"'),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge3.png",alt:"Edge Impulse upload data",width:600,height:"auto"})),(0,o.yg)("p",null,"Next, we get to select the data\u200a-\u200aLet's choose one of the folders from the speech dataset."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge4.png",alt:"Edge Impulse upload data screen",width:600,height:"auto"})),(0,o.yg)("p",null,'The dataset has a lot of words to train with. Let\'s choose 3 folders (our labels) to train and the background noise. We\'re getting 4 labels.\xa0\nPress the button "Browse".\nThe first one is "go". Choose the folder\u200a-\u200ayou can see all the\xa0.wav files\u200a-\u200aand press "Upload".'),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge5.png",alt:"Files to upload",width:600,height:"auto"})),(0,o.yg)("p",null,'Next, let\'s keep the default options for the category. Let Edge Impulse split the data.\xa0\nFor the label, write the label yourself. After all this, press "Upload data".'),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge6.png",alt:"Edge Impulse upload data screen",width:600,height:"auto"})),(0,o.yg)("p",null,"On the right side, you'll see the files being uploaded. It can take a while, because they're many."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge7.png",alt:"Files upload progress",width:600,height:"auto"})),(0,o.yg)("p",null,"After a while, it completes and shows a small resume of the files uploaded."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge8.png",alt:"Files upload resume",width:600,height:"auto"})),(0,o.yg)("p",null,"After this, this is the screen"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge9.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,o.yg)("p",null,'To upload more data, press the small upload button on the right side, above the files list.\xa0\nRepeat this 3 more times\u200a-\u200a2 more labels and the background noise.\xa0\nI\'m going to choose happy, bird and the "background noise" folder with the label "noise".\nIn the end, this are all the labels we have'),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge10.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,o.yg)("p",null,"Next, let's create the network to learn our words. Click on Impulse design to create the impulse"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge11.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,o.yg)("h3",{id:"step-3---select-training-method"},"Step 3 - Select training method"),(0,o.yg)("p",null,"Because the clips are 1 second each and 16Khz, let's keep the window size the same and the frequency. Now, let's add a processing block."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge12.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,o.yg)("p",null,'Edge Impulse helps us a lot here too. Click on "Add a processing block" and choose Audio (MFCC).'),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge13.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,o.yg)("p",null,'Next, click on the "Add learning block" and choose Classification.'),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge14.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,o.yg)("p",null,'By now, our last column\u200a-\u200aOutput features\u200a-\u200ahas our 4 labels (bird, go, happy, noise).\xa0\nPress "Save Impulse" to save our work so far.'),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge15.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,o.yg)("h3",{id:"step-4---generate-the-features"},"Step 4 - Generate the features"),(0,o.yg)("p",null,'Now, let\'s a take a look at the MFCC parameters. If you want, you can change the values.\xa0\nFor now, let\'s keep the default values. Click "Save Parameters".\xa0\nAfter you save the parameters, we get a new window to "Generate features".'),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge16.png",alt:"Edge Impulse dataset screen",width:600,height:"auto"})),(0,o.yg)("p",null,"After clicking, Edge Impulse will start generating the features."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge17.png",alt:"Generate features",width:600,height:"auto"})),(0,o.yg)("p",null,"After a while, we get our features generated and we can visualize them"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge18.png",alt:"Feature explorer",width:600,height:"auto"})),(0,o.yg)("p",null,'Now we get to train our network with the chosen parameters. Click on "Classifier".'),(0,o.yg)("h3",{id:"step-5---classifier"},"Step 5 - Classifier"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge19.png",alt:"Classifier",width:600,height:"auto"})),(0,o.yg)("p",null,"Here we can tweak our network settings, like training cycles, if we want data augmentation and so on.\xa0\nEdge Impulse provides a simple but effective neural network architecture for keyword spotting. The architecture consists of the following layers:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("b",null,"Input layer:")," The input layer takes the MFCC features as input."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("b",null,"Hidden layers:")," The hidden layers learn to extract higher-level features from the MFCC features. Edge Impulse supports a variety of hidden layer types, such as convolutional layers and recurrent layers."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("b",null,"Output layer:")," The output layer predicts the probability that the audio input contains a keyword.")),(0,o.yg)("p",null,'We can change the default parameters, but the defaults are enough. Click on "Start Training".'),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge20.png",alt:"Network architecture",width:600,height:"auto"})),(0,o.yg)("p",null,"After start training, on the right side of the screen we get the watch the progress of the training."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge21.png",alt:"Training progress",width:600,height:"auto"})),(0,o.yg)("p",null,"We can change the Target device to nRF52840\u200a-\u200alike our XIAO nRF52840 Sense\u200a-\u200aso we can see performance calculations and optimizations."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge22.png",alt:"Target device",width:600,height:"auto"})),(0,o.yg)("p",null,"After the training is complete, we get the Confusion matrix and data explorer"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge23.png",alt:"Confusion Matrix",width:600,height:"auto"})),(0,o.yg)("p",null,"Now with the network ready, let's try some samples and do some live classification.\xa0\nIf you go to live classification, we can choose a sample and the the classification result. Here, for a bird example, we get bird in the result. That's great. The model is working."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge24.png",alt:"Live classification",width:600,height:"auto"})),(0,o.yg)("p",null,"Now, let's go to model testing.\xa0\nLet's test the model by using the split samples for testing. Click \"Classify all\"."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge25.png",alt:"Test data",width:600,height:"auto"})),(0,o.yg)("p",null,"We get almost 90% accuracy."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge26.png",alt:"Accuracy",width:600,height:"auto"})),(0,o.yg)("h3",{id:"step-6---deployment-and-get-the-arduino-library"},"Step 6 - Deployment and get the Arduino library"),(0,o.yg)("p",null,"Now, let's go to deployment to get the files for our microcontroller."),(0,o.yg)("h4",{id:"deployment-options"},"Deployment Options"),(0,o.yg)("p",null,"Let's choose Arduino"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge27.png",alt:"Accuracy",width:600,height:"auto"})),(0,o.yg)("p",null,'Next, let\'s keep the Quantized(int8) selected and click "Build" to download the files to use with the Arduino IDE\nWe can play a bit with the optimizations. If you realized that the accuracy is low, try to turn off the EON compiler and try again.'),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge28.png",alt:"Accuracy",width:600,height:"auto"})),(0,o.yg)("p",null,"After a while, the files will be downloaded automatically."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge29.png",alt:"Arduino Files download",width:600,height:"auto"})),(0,o.yg)("h3",{id:"step-7---add-the-library-to-the-arduino-ide"},"Step 7 - Add the library to the Arduino IDE"),(0,o.yg)("p",null,"In Arduino IDE, let's add the newly downloaded files.\xa0\nGo to Sketch > Include Library > Add\xa0.ZIP Library"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge30.png",alt:"Arduino IDE Add library",width:600,height:"auto"})),(0,o.yg)("p",null,"Choose the downloaded file. After a while, a message will appear on the output window saying that the Library is installed."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge31.png",alt:"Library installed",width:600,height:"auto"})),(0,o.yg)("h3",{id:"step-8---voice-control-the-rgb-lights-on-the-xiao-nrf52840-sense"},"Step 8 - Voice control the RGB lights on the XIAO nRF52840 Sense"),(0,o.yg)("p",null,"Let's open an examples\nGo to Examples > <your_files_names> > nano_ble33_sense > nano_ble33_sense_microphone"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge32.png",alt:"Library installed",width:600,height:"auto"})),(0,o.yg)("p",null,"Why the Arduino BLE 33 Sense\xa0? They use the same library\u200a-\u200aPDM (pulse-density modulation) \u200a-\u200ato control the microphone. Arduino Nano BLE 33 Sense has a MP34DT05 and the XIAO nRF52840 Sense has the MSM261D3526H1CPM.\xa0\nWith the sketch opened, let's compile it and see if we don't have any errors."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge33.png",alt:"Sketch open",width:600,height:"auto"})),(0,o.yg)("p",null,"After a while, the sketch gets compiled and no error reported."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge34.png",alt:"Sketch open",width:600,height:"auto"})),(0,o.yg)("p",null,"Now, connect the XIAO nRF52840 Sense (if you haven't done it so) and upload the code  to the board."),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge35.png",alt:"Sketch open",width:600,height:"auto"})),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge36.png",alt:"Compile result",width:600,height:"auto"})),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge37.png",alt:"Upload",width:600,height:"auto"})),(0,o.yg)("p",null,"Now, open the serial port (Ctrl+Shitf+M) and check the inference results (the board already started recording, doing inferencing and predictions)"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge38.png",alt:"Serial Monitor",width:600,height:"auto"})),(0,o.yg)("p",null,"Try to say one of the words chosen. I've said go"),(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge39.png",alt:"Serial Monitor",width:600,height:"auto"})),(0,o.yg)("p",null,"If it detects the word correctly, the more probable world will have a result closest to 1.0 and the others a closer value to 0.0\nNow, let's have a bit of fun and change the code a bit.\xa0\nThe XIAO nRF52840 Sense has a built-in LED that has 3 colors:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Red\u200a-\u200aLED_BUILTIN or LED_RED",(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge40.gif",alt:"Red LED",width:600,height:"auto"}))),(0,o.yg)("li",{parentName:"ul"},"Green\u200a-\u200aLED_GREEN",(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge41.gif",alt:"Green LED",width:600,height:"auto"}))),(0,o.yg)("li",{parentName:"ul"},"Blue\u200a-\u200aLED_BLUE",(0,o.yg)("p",{style:{textAlign:"center"}},(0,o.yg)("img",{src:"https://files.seeedstudio.com/wiki/wiki-ranger/Contributions/BLE-PDM-TinyML/edge42.gif",alt:"Blue LED",width:600,height:"auto"})))),(0,o.yg)("p",null,"Since we have 3 words, let's assign a color to each one and light the respective color for the word.\xa0"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Red will be for bird"),(0,o.yg)("li",{parentName:"ul"},"Green for Go"),(0,o.yg)("li",{parentName:"ul"},"Blue for happy")),(0,o.yg)("p",null,"Because it will be easier, I've check the board PIN definitions and the following PINs are signed to the LED color:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"RED\u200a-\u200aPin 11"),(0,o.yg)("li",{parentName:"ul"},"GREEN\u200a-\u200aPin 13"),(0,o.yg)("li",{parentName:"ul"},"BLUE\u200a-\u200aPin 12")),(0,o.yg)("p",null,"First, we need to define a threshold. We know that the predictions go from 0.0 to 1.0\xa0. The closer to 1.0, the certain we are of the classification of the word. This value can be tweaked later on. I'm going to set it at 0.7."),(0,o.yg)("p",null,"First, define some variables. I've define these right after the included libraries:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-C"},"/* threshold for predictions */\nfloat threshold = 0.7;\n\n/** \n  LABELS INDEX:\n  0 - bird\n  1 - go\n  2 - happy\n  3 - noise\n*/\n// LED pin (defines color) to light up\n/**\n PIN 11 - RED\n PIN 12 - BLUE\n PIN 13 - GREEN\n*/\nint LED = 0;\nint oldLED;\n")),(0,o.yg)("i",null,"int oldLED")," will define the previous LED light up so we can turn it off when there's no prediction or the prediction changes.\xa0",(0,o.yg)("i",null,"int LED")," is the current LED that we will turn on.",(0,o.yg)("p",null,"Next, in the loop() function, inside the for loop instruction, where we loop thought the CLASSIFIER_LABEL_COUNT (around line 129\u200a-\u200aalready with the lines above):"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-C"},"for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n")),(0,o.yg)("p",null,"We use a if instruction to check for the classification value\xa0. If it's above the defined threshold, we check which word has been recorded using a switch instruction."),(0,o.yg)("p",null,"The complete for loop, with our additions, is:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-C"},'for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("    %s: %.5f\\n", result.classification[ix].label, result.classification[ix].value);\n        //lets light up some LEDS\n\n        if (result.classification[ix].value > threshold) {\n          //now let\'s see what label were in\n          switch (ix) {\n            case 0: LED = 11; break;\n            case 1: LED = 13; break;\n            case 2: LED = 12; break;\n            default: LED = 0;\n          }\n          //in Sense, LOW will light up the LED\n          if (LED != 0) {\n            digitalWrite (oldLED, HIGH); //if we enter a word right next to previous - we turn off the previous LED\n            digitalWrite (LED, LOW);            \n            oldLED = LED;\n          }\n          else //turn off LED\n            digitalWrite (oldLED, HIGH);\n        }\n    }\n')),(0,o.yg)("p",null,"After the changes, just upload the code to your microcontroller and try to say the words trained and see the LED turning on according to the word."),(0,o.yg)("p",null,"And this is it. Although not directly supported, we can now use the XIAO nRF52840 Sense to run some ML models using Edge Impulse"),(0,o.yg)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"This project is supported by the Seeed Studio ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"Contributor Project"),"."),(0,o.yg)("li",{parentName:"ul"},"Thanks ",(0,o.yg)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=35979237"},"Bruno's efforts")," and your work will be ",(0,o.yg)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"exhibited"),".")),(0,o.yg)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,o.yg)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.yg)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.yg)("div",{class:"button_tech_support_container"},(0,o.yg)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.yg)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}h.isMDXComponent=!0}}]);