"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68873],{15680:(e,t,i)=>{i.d(t,{xA:()=>c,yg:()=>m});var n=i(96540);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(i),d=r,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return i?n.createElement(m,a(a({ref:t},c),{},{components:i})):n.createElement(m,a({ref:t},c))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=i[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},71211:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=i(58168),r=(i(96540),i(15680));const o={description:"Getting started with TensorFlow Lite",title:"Getting started with TensorFlow Lite",keywords:["Edge","reTerminal Application","Embedded_ML"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_ML_TFLite",last_update:{date:"2/1/2023",author:"jianjing Huang"}},a="Getting Started with TensorFlow Lite on reTerminal",l={unversionedId:"Edge/Raspberry_Pi_Devices/reTerminal/Application/Embedded_ML/reTerminal_ML_TFLite",id:"Edge/Raspberry_Pi_Devices/reTerminal/Application/Embedded_ML/reTerminal_ML_TFLite",title:"Getting started with TensorFlow Lite",description:"Getting started with TensorFlow Lite",source:"@site/docs/Edge/Raspberry_Pi_Devices/reTerminal/Application/Embedded_ML/reTerminal_ML_TFLite.md",sourceDirName:"Edge/Raspberry_Pi_Devices/reTerminal/Application/Embedded_ML",slug:"/reTerminal_ML_TFLite",permalink:"/reTerminal_ML_TFLite",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Raspberry_Pi_Devices/reTerminal/Application/Embedded_ML/reTerminal_ML_TFLite.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"Getting started with TensorFlow Lite",title:"Getting started with TensorFlow Lite",keywords:["Edge","reTerminal Application","Embedded_ML"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_ML_TFLite",last_update:{date:"2/1/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Getting started with Google MediaPipe",permalink:"/reTerminal_ML_MediaPipe"},next:{title:"Object detection with Edge Impulse and reTerminal",permalink:"/reTerminal_ML_Edgeimpulse"}},s={},p=[{value:"TensorFlow Lite Runtime Package Installation",id:"tensorflow-lite-runtime-package-installation",level:2},{value:"Latest stable version (official builds)",id:"latest-stable-version-official-builds",level:4},{value:"Performance optimized package for 64-bit OS with XNNPACK enabled",id:"performance-optimized-package-for-64-bit-os-with-xnnpack-enabled",level:4},{value:"Examples",id:"examples",level:2},{value:"Further optimization",id:"further-optimization",level:2},{value:"F.A.Q",id:"faq",level:2},{value:"Q1: My company&#39;s policy doesn&#39;t allow us to use 3rd party binaries",id:"q1-my-companys-policy-doesnt-allow-us-to-use-3rd-party-binaries",level:4},{value:"Resources",id:"resources",level:2}],c={toc:p},g="wrapper";function u(e){let{components:t,...i}=e;return(0,r.yg)(g,(0,n.A)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"getting-started-with-tensorflow-lite-on-reterminal"},"Getting Started with TensorFlow Lite on reTerminal"),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{alt:"Light",src:"https://www.tensorflow.org/site-assets/images/project-logos/tensorflow-lite-logo-social.png",width:"45%"}),"\xa0 \xa0",(0,r.yg)("img",{alt:"Dark",src:"https://raw.githubusercontent.com/lakshanthad/Image/master/CM4_wiki/wiki_thumb.png",width:"45%"})),(0,r.yg)("p",null,"TensorFlow Lite is a set of tools that enables on-device machine learning by helping developers run their models on mobile, embedded, and IoT devices.\nThe key features of TensorFlow Lite are optimized for on-device machine learning, with a focus on latency, privacy, connectivity, size, and power consumption. The framework is built to provide support for multiple platforms, including Android and iOS devices, embedded Linux, and microcontrollers. It also has built-in support for a variety of languages, such as Java, Swift, Objective-C, C++, and Python, and it has high performance with hardware acceleration and model optimization. It provides end-to-end examples for common machine learning tasks, such as image classification, object detection, pose estimation, question answering, and text classification, on multiple platforms."),(0,r.yg)("h2",{id:"tensorflow-lite-runtime-package-installation"},"TensorFlow Lite Runtime Package Installation"),(0,r.yg)("p",null,"The tflite_runtime package is a smaller, simplified Python package that includes the bare minimum code required to run inference with TensorFlow Lite. This package is ideal when all you want to do is execute .tflite models and avoid wasting disk space with the large TensorFlow library."),(0,r.yg)("p",null,"For best performance it is recommended to use 64bit OS and corresponding TFLite package, with optimized XNNPACK\ndelegate enabled. These can be compiled from source by yourself or installed with pre-built binaries provided by Seeed studio. Alternatively, you can install latest stable version with pip"),(0,r.yg)("h4",{id:"latest-stable-version-official-builds"},"Latest stable version (official builds)"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"pip3 install --index-url https://google-coral.github.io/py-repo/ tflite_runtime\n\n")),(0,r.yg)("h4",{id:"performance-optimized-package-for-64-bit-os-with-xnnpack-enabled"},"Performance optimized package for 64-bit OS with XNNPACK enabled"),(0,r.yg)("p",null,"Official pre-built wheels for Python 3.7 64bit OS with XNNPACK optimizations were not available at the moment of writing of this article, so we compiled and shared them ourselves."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"wget www.files.seeedstudio.com/ml/TFLite/tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl\npip3 install tflite_runtime-2.6.0-cp37-cp37m-linux_aarch64.whl\n")),(0,r.yg)("p",null,"After installation is complete, try importing tflite package:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'pi@raspberrypi:~ $ python3\nPython 3.7.3 (default, Jul 25 2020, 13:03:44) \n[GCC 8.3.0] on linux\nType "help", "copyright", "credits" or "license" for more information.\n>>> import tflite_runtime\n>>> tflite_runtime.__version__\n\'2.6.0\'\n')),(0,r.yg)("h2",{id:"examples"},"Examples"),(0,r.yg)("p",null,"It is possible to use TFLite Converter to convert any Tensorflow model into .tflite format, provided it only consists of operations supported by TFLite Runtime. The following is list of demos currently tested on reTerminal, that will be expanded and completed in future:"),(0,r.yg)("table",{style:{tableLayout:"fixed",width:743}},(0,r.yg)("colgroup",null,(0,r.yg)("col",{style:{width:146}}),(0,r.yg)("col",{style:{width:198}}),(0,r.yg)("col",{style:{width:399}})),(0,r.yg)("thead",null,(0,r.yg)("tr",null,(0,r.yg)("th",null,"Model"),(0,r.yg)("th",null,"Result"),(0,r.yg)("th",null,"Comments"))),(0,r.yg)("tbody",null,(0,r.yg)("tr",null,(0,r.yg)("td",null,"Object Detection"),(0,r.yg)("td",null," ",(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminal_ML/000402.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.yg)("td",null,"Demo: Vehicle Detection ",(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_multi_stage.ipynb",target:"_top"},"Jupyter Notebook"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/detector",target:"_top"},"Example scripts")," ",(0,r.yg)("br",null),"alpha 0.25 224x224 66.7 FPS (15 ms.)",(0,r.yg)("br",null),"alpha 0.5 224x224 40 FPS (25 ms.)",(0,r.yg)("br",null),"alpha 0.75 320x320 14.9 FPS (67 ms.)",(0,r.yg)("br",null),"alpha 1.0 320x320 10.4 FPS (96 ms.)",(0,r.yg)("br",null))),(0,r.yg)("tr",null,(0,r.yg)("td",null,"Image Classification"),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminal_ML/belt.png",alt:"pir",width:600,height:"auto"}))," "),(0,r.yg)("td",null,"Demo: Industrial Conveyor Rip Identification",(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_conveyor_belt_rip_recognition.ipynb",target:"_top"},"Jupyter Notebook"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier",target:"_top"},"Example scripts"))),(0,r.yg)("tr",null,(0,r.yg)("td",null,"Semantic segmentation"),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminal_ML/CHNCXR_0331_1.png",alt:"pir",width:600,height:"auto"}))),(0,r.yg)("td",null,"Demo: Lung segmentation ",(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_lung_segmentation.ipynb",target:"_top"},"Jupyter Notebook"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/segnet",target:"_top"},"Example scripts"))),(0,r.yg)("tr",null,(0,r.yg)("td",null,"Face age/gender recognition"),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminal_ML/output.gif",alt:"pir",width:600,height:"auto"}))),(0,r.yg)("td",null,"Demo: Multi-stage inference: MobileNet YOLOv3 alpha 0.25 -> MobileFaceNet ",(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/AIWintermuteAI/edge_ml_age_gender_recognition/tree/master",target:"_top"},"Github repository"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_age_gender",target:"_top"},"Example scripts")," ",(0,r.yg)("br",null),"~16-20 FPS (with ",(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_age-gender",target:"_top"},"ARM NN"),")")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"Face expression recognition"),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/ml/emotion/emotions.gif",alt:"pir",width:600,height:"auto"}))),(0,r.yg)("td",null,"Demo: Multi-stage inference: MobileNet YOLOv3 alpha 0.25 -> MobileFaceNet ",(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/AIWintermuteAI/edge_ml_emotion_recognition/tree/master",target:"_top"},"Github repository"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/tensorflow_lite/multi_stage_inference_emotion",target:"_top"},"Example scripts")," ",(0,r.yg)("br",null),"~11 FPS")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"Face anti-spoofing"),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/ml/face_anti-spoofing/face_anti-spoofing.gif",alt:"pir",width:600,height:"auto"}))),(0,r.yg)("td",null,"Demo: Multi-stage inference: MobileNet YOLOv3 alpha 0.25 -> MobileNet v1 alpha 0.25",(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/blob/main/jupyter_notebooks/aXeleRate_face_anti_spoofing.ipynb",target:"_top"},"Jupyter Notebook"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/AIWintermuteAI/aXeleRate/tree/master/example_scripts/tensorflow_lite/classifier",target:"_top"},"Example scripts"),"  ",(0,r.yg)("br",null),"~23 FPS (ARM NN)")),(0,r.yg)("tr",null,(0,r.yg)("td",null,"Face Recognition"),(0,r.yg)("td",null,(0,r.yg)("p",{style:{textAlign:"center"}},(0,r.yg)("img",{src:"https://files.seeedstudio.com/wiki/reTerminal_ML/face_recognition.gif",alt:"pir",width:600,height:"auto"}))),(0,r.yg)("td",null,"Demo: Multi-stage inference: Ultra Light Face Detector with Landmark Detection -> MobileFaceNet",(0,r.yg)("br",null),(0,r.yg)("a",null,"Jupyter Notebook"),(0,r.yg)("br",null),(0,r.yg)("a",{href:"https://github.com/Seeed-Studio/Seeed_Python_MachineLearning/tree/main/examples/armnn/face_recognition",target:"_top"},"Example scripts"),"  ",(0,r.yg)("br",null),"~15 FPS (ARM NN)")))),(0,r.yg)("h2",{id:"further-optimization"},"Further optimization"),(0,r.yg)("p",null,"The FPS and inference results in the Example table are given for INT8 quantized models inference in Tensorflow Lite, unless stated otherwise. ",(0,r.yg)("br",null),"\nSince reTerminal is Raspberry Pi 4 based, it has no additional hardware accelerators for neural network inference, thus only standard optimization methods for CPU inference can be applied.\nThe video overview of this topic is presented here:"),(0,r.yg)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/BEDEscDQFxk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.yg)("p",null,"Below is the brief overview of CPU inference optimization methods:"),(0,r.yg)("p",null,"1) ",(0,r.yg)("strong",{parentName:"p"},"Designing smaller networks"),". If the goal is simple enough (image classification of < 100 classes or object detection of < 10 classes or similar), a smaller network can achieve acceptable accuracy and run very fast. For example, MobileNet v1 alpha 0.25 YOLOv2 network trained to detect only one class of objects (human faces) achieves 62.5 FPS without any further optimization."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Vanilla Tensorflow Lite FP32 inference:"),"\nMobileNetv1(alpha 0.25) YOLOv2 1 class 0.89 MB 62.5 FPS\nMobileNetv1(alpha 1.0) YOLOv3 20 class 13.1 MB  7 FPS"),(0,r.yg)("p",null,"2) ",(0,r.yg)("strong",{parentName:"p"},"Quantization"),". Quantization is process of reducing precision for NN network weights, usually from FP32 to INT8. It reduces the size by 4x and latency by ~60-80% using default Tensorflow Lite kernels. Accuracy loss can be minimized by using QAT - quantization-aware training, which is the process of fine-tuning network with quantization nodes inserted."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Vanilla Tensorflow Lite INT8 inference:"),"\nMobileNetv1(alpha 0.25) YOLOv2 1 class 0.89 MB 77 FPS\nMobileNetv1(alpha 1.0) YOLOv3 20 class 13.1 MB  11.5 FPS"),(0,r.yg)("p",null,"3) Using ",(0,r.yg)("strong",{parentName:"p"},"optimized kernels"),". Inference speed can be improved by utilizing frameworks that have CNN kernels optimized for specific CPU instructions set, e.g. NEON SIMD instructions for ARM. Examples of such networks include ARM NN and XNNPACK."),(0,r.yg)("p",null,"Arm NN SDK is a set of open-source software and tools that enables machine learning workloads on power-efficient devices.\nThe description and provided benchmarks look promising, but the installation procedure on latest Raspberry Pi OS is painful at the moment - the only proper way to install latest version of ARM NN currently is cross-compiling from source. There are binaries available for Debian Bullseye, but Raspberry Pi OS is still at Debian Buster. The inference test results with benchmark scripts were mixed, for a single model it showed worse performance than even vanilla Tensorflow Lite, but it turned out to be faster in multi-model inference, possibly due to more efficient multi-processing utilization."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"ARM NN FP32 inference:"),"\nMobileNetv1(alpha 0.25) YOLOv2 1 class 0.89 MB 83 FPS\nMobileNetv1(alpha 1.0) YOLOv3 20 class 13.1 MB 7.2 FPS"),(0,r.yg)("p",null,"XNNPACK is a library for accelerating neural network inference for ARM, x86, and WebAssembly architectures in Android, iOS, Windows, Linux, macOS environments. It is integrated in Tensorflow Lite as a delegate, which is enabled by default for Android build, but for other environments needs to be enabled manually - thus if you\u2019d like to use XNNPACK on Raspberry Pi 4, you\u2019ll need either to build TensorFlow Lite Interpreter package from source or download one of the third-party binaries, such as the one we provide above."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"XNNPACK delegate Tensorflow Lite FP32 inference:"),"\nMobileNetv1(alpha 0.25) YOLOv2 1 class 0.89 MB 83 FPS\nMobileNetv1(alpha 1.0) YOLOv3 20 class 13.1 MB 7.2 FPS"),(0,r.yg)("p",null,"Main problem with optimized kernels is the uneven support of different architectures/NN operators/precision types in different frameworks. For example INT8 optimized kernels are work-in-progress both in ARM NN and XNNPACK. The support for INT8 optimized kernels in XNNPACK was added very recently and seems to bring modest performance improvement, of about ~30%, depending on operators used in the model.\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/google/XNNPACK/issues/999#issuecomment-870791779"},"https://github.com/google/XNNPACK/issues/999#issuecomment-870791779")),(0,r.yg)("p",null,"Another promising lead is optimized kernels for dynamically quantized models, see the conversation with developer here:\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/tensorflow/tensorflow/pull/48751#issuecomment-869111116"},"https://github.com/tensorflow/tensorflow/pull/48751#issuecomment-869111116")),(0,r.yg)("p",null,"The developer claims 3-4x latency improvement, but currently it is only limited to very specific set of models. A PR to allow more convenient usage is in development."),(0,r.yg)("p",null,"4) ",(0,r.yg)("strong",{parentName:"p"},"Pruning and sparse inference"),". Pruning is a process of fine-tuning trained neural network to find weights, that do not contribute to correct predictions. This allows for reducing both size and latency of the models - the accuracy reduction depends on sparsity settings. Experimentally it is possible to achieve up to 80% sparsity with negligible impact on accuracy. See details here\n",(0,r.yg)("a",{parentName:"p",href:"https://ai.googleblog.com/2021/03/accelerating-neural-networks-on-mobile.html"},"https://ai.googleblog.com/2021/03/accelerating-neural-networks-on-mobile.html"),"\nand a guide to pruning with tensorflow here\n",(0,r.yg)("a",{parentName:"p",href:"https://www.tensorflow.org/model_optimization/guide/pruning/pruning_for_on_device_inference"},"https://www.tensorflow.org/model_optimization/guide/pruning/pruning_for_on_device_inference"),"\nUnfortunately in current form, only very limited set of models support pruning and sparse inference with XNNPACK."),(0,r.yg)("h2",{id:"faq"},"F.A.Q"),(0,r.yg)("h4",{id:"q1-my-companys-policy-doesnt-allow-us-to-use-3rd-party-binaries"},"Q1: My company's policy doesn't allow us to use 3rd party binaries"),(0,r.yg)("p",null,"You can use official TFLite interpreter package or alternatively compile it from source  by following instructions ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/PINTO0309/TensorflowLite-bin#2-tensorflow-v230-version-or-later"},"here"),"."),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Web Page]")," ",(0,r.yg)("a",{parentName:"p",href:"https://www.tensorflow.org/lite"},"TensorFlow Lite Official Webpage"))),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"[Web Page]")," ",(0,r.yg)("a",{parentName:"p",href:"https://www.tensorflow.org/lite/guide"},"TensorFlow Lite Official Documentation")))))}u.isMDXComponent=!0}}]);