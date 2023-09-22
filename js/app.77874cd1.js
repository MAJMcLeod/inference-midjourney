(function(){var e={1993:function(){},3856:function(e,t,a){"use strict";var i=a(3017),n=(a(9773),a(8727)),l=a(3447),r=a(8600),o=a(9242),s=a(2483),d=a(3396),g=a.p+"img/logo.0ec957c4.svg";const u=e=>((0,d.dD)("data-v-67e538b4"),e=e(),(0,d.Cn)(),e),c={class:"home"},m=u((()=>(0,d._)("img",{id:"logo",alt:"logo",src:g},null,-1))),p={class:"d-flex"},f=u((()=>(0,d._)("div",{class:"d-flex flex-column justify-center align-end"},[(0,d._)("span",{class:"text-body-1"},"Ben Aldrich"),(0,d._)("span",{class:"text-caption yellow"},"cain&abelDDB")],-1)));function h(e,t,a,i,n,l){const r=(0,d.up)("v-spacer"),o=(0,d.up)("v-img"),s=(0,d.up)("v-avatar"),g=(0,d.up)("v-toolbar"),u=(0,d.up)("ImageEditor");return(0,d.wg)(),(0,d.iD)("div",c,[(0,d.Wm)(g,{style:{position:"fixed","z-index":"20"},border:"",color:"#262626",class:"d-flex align-center justify-space-between px-8"},{default:(0,d.w5)((()=>[m,(0,d.Wm)(r),(0,d._)("div",p,[f,(0,d.Wm)(s,{class:"ml-2"},{default:(0,d.w5)((()=>[(0,d.Wm)(o,{src:n.userImage,alt:"Ben"},null,8,["src"])])),_:1})])])),_:1}),(0,d.Wm)(u,{"generated-image":n.generatedImage,onSubmitImagePrompt:l.postImageData},null,8,["generated-image","onSubmitImagePrompt"])])}var v=a(7139);const b=(0,d.uE)('<div class="hero"><div class="cube"></div><div class="cube"></div><div class="cube"></div><div class="cube"></div><div class="cube"></div><div class="cube"></div></div>',1),w={class:"pa-4 fill-height d-flex align-center"},y={id:"imageContainer",class:"d-flex align-center justify-center w-100 h-100"},I=(0,d._)("div",{class:"text-h6"},"Base Settings",-1),D=(0,d._)("div",{class:"text-h6"},"Advanced Settings",-1);function W(e,t,a,i,n,l){const r=(0,d.up)("GeneratedImage"),o=(0,d.up)("v-card"),s=(0,d.up)("v-col"),g=(0,d.up)("v-divider"),u=(0,d.up)("v-list-item"),c=(0,d.up)("v-text-field"),m=(0,d.up)("v-row"),p=(0,d.up)("v-select"),f=(0,d.up)("v-slider"),h=(0,d.up)("v-btn"),W=(0,d.up)("v-list"),V=(0,d.up)("v-container");return(0,d.wg)(),(0,d.iD)(d.HY,null,[b,(0,d._)("section",w,[(0,d.Wm)(V,{class:"fill-height",style:{"max-height":"85vh"}},{default:(0,d.w5)((()=>[(0,d.Wm)(m,{class:"fill-height",style:{"max-width":"100%"}},{default:(0,d.w5)((()=>[(0,d.Wm)(s,{cols:"8",class:"fill-height"},{default:(0,d.w5)((()=>[(0,d.Wm)(o,{elevation:"2",class:"d-flex flex-column align-center fill-height"},{default:(0,d.w5)((()=>[(0,d._)("div",y,[(0,d.Wm)(r,{imageData:{aspectRatio:l.aspectRatio,generatedImageUrl:n.generatedImageUrl,progress:n.progress,generating:n.generating,generatedImageUrls:n.generatedImageUrls,currentDialogue:n.currentDialogue}},null,8,["imageData"])])])),_:1})])),_:1}),(0,d.Wm)(s,{cols:"4"},{default:(0,d.w5)((()=>[(0,d.Wm)(o,null,{default:(0,d.w5)((()=>[(0,d.Wm)(W,{class:"text-left"},{default:(0,d.w5)((()=>[(0,d.Wm)(u,null,{default:(0,d.w5)((()=>[I,(0,d.Wm)(g,{class:"my-2 pb-2"})])),_:1}),(0,d.Wm)(u,null,{default:(0,d.w5)((()=>[(0,d.Wm)(c,{label:"Prompt",modelValue:n.imagePrompt,"onUpdate:modelValue":t[0]||(t[0]=e=>n.imagePrompt=e),disabled:!!n.generating},null,8,["modelValue","disabled"])])),_:1}),(0,d.Wm)(u,null,{default:(0,d.w5)((()=>[(0,d.Wm)(m,null,{default:(0,d.w5)((()=>[(0,d.Wm)(s,{cols:"6"},{default:(0,d.w5)((()=>[(0,d.Wm)(c,{label:"Aspect Width",modelValue:n.imageWidth,"onUpdate:modelValue":t[1]||(t[1]=e=>n.imageWidth=e),disabled:!!n.generating},null,8,["modelValue","disabled"])])),_:1}),(0,d.Wm)(s,{cols:"6"},{default:(0,d.w5)((()=>[(0,d.Wm)(c,{label:"Aspect Height",modelValue:n.imageHeight,"onUpdate:modelValue":t[2]||(t[2]=e=>n.imageHeight=e),disabled:!!n.generating},null,8,["modelValue","disabled"])])),_:1})])),_:1})])),_:1}),(0,d.Wm)(u,null,{default:(0,d.w5)((()=>[D,(0,d.Wm)(g,{class:"my-2 pb-2"})])),_:1}),(0,d.Wm)(u,null,{default:(0,d.w5)((()=>[(0,d.Wm)(c,{label:"Negative Prompt",modelValue:n.negativePrompt,"onUpdate:modelValue":t[3]||(t[3]=e=>n.negativePrompt=e),disabled:!!n.generating},null,8,["modelValue","disabled"])])),_:1}),(0,d.Wm)(u,null,{default:(0,d.w5)((()=>[(0,d.Wm)(m,null,{default:(0,d.w5)((()=>[(0,d.Wm)(s,{cols:"6"},{default:(0,d.w5)((()=>[(0,d.Wm)(p,{label:"Model",items:[{title:"Midjourney",value:1},{title:"Niji",value:2}],disabled:!!n.generating,modelValue:n.selectedModel,"onUpdate:modelValue":t[4]||(t[4]=e=>n.selectedModel=e)},null,8,["disabled","modelValue"])])),_:1}),(0,d.Wm)(s,{cols:"6"},{default:(0,d.w5)((()=>[1===n.selectedModel?((0,d.wg)(),(0,d.j4)(p,{key:0,label:"Version",items:["5.2","5.1","5","4"],disabled:!!n.generating,modelValue:n.midjourneyVersion,"onUpdate:modelValue":t[5]||(t[5]=e=>n.midjourneyVersion=e)},null,8,["disabled","modelValue"])):(0,d.kq)("",!0),2===n.selectedModel?((0,d.wg)(),(0,d.j4)(p,{key:1,label:"Style",items:["default","cute","expressive","original","scenic"],disabled:!!n.generating,modelValue:n.nijiVersion,"onUpdate:modelValue":t[6]||(t[6]=e=>n.nijiVersion=e)},null,8,["disabled","modelValue"])):(0,d.kq)("",!0)])),_:1})])),_:1})])),_:1}),(0,d.Wm)(u,null,{default:(0,d.w5)((()=>[(0,d.Wm)(f,{label:"Chaos",min:0,max:100,step:1,"thumb-label":"",modelValue:n.chaosValue,"onUpdate:modelValue":t[7]||(t[7]=e=>n.chaosValue=e)},null,8,["modelValue"])])),_:1}),(0,d.Wm)(u,null,{default:(0,d.w5)((()=>[(0,d.Wm)(f,{style:{"z-index":"10"},label:"Weird",min:0,max:100,step:1,"thumb-label":"",modelValue:n.weirdValue,"onUpdate:modelValue":t[8]||(t[8]=e=>n.weirdValue=e)},null,8,["modelValue"])])),_:1}),(0,d.Wm)(u,null,{default:(0,d.w5)((()=>[(0,d.Wm)(h,{variant:"tonal",disabled:!!n.generating,onClick:l.generateImage},{default:(0,d.w5)((()=>[(0,d.Uk)((0,v.zw)(n.generating?"Generating...":"Generate"),1)])),_:1},8,["disabled","onClick"])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])],64)}const V=e=>((0,d.dD)("data-v-5aa2a6fa"),e=e(),(0,d.Cn)(),e),_={key:0,class:"empty-container"},j=V((()=>(0,d._)("p",null,"Create a prompt and hit generate to start the process",-1))),U={key:1,class:"img-container d-flex"},x={key:1,class:"status-text"},k={key:2,class:"status-text"},P={key:2,class:"preview-container d-flex align-center justify-center"},R=["src","data-source"];function O(e,t,a,i,n,l){const r=(0,d.up)("v-img"),o=(0,d.up)("v-progress-circular"),s=(0,d.Q2)("viewer");return(0,d.wg)(),(0,d.iD)(d.HY,null,[a.imageData.generatedImageUrls||a.imageData.generating?(0,d.kq)("",!0):((0,d.wg)(),(0,d.iD)("div",_,[(0,d.Wm)(r,{style:{"max-width":"200px","min-width":"200px",filter:"invert(1)"},src:n.placeHolder},null,8,["src"]),j])),!a.imageData.generatedImageUrls&&a.imageData.generating?((0,d.wg)(),(0,d.iD)("div",U,[(0,d.Wm)(r,{src:a.imageData.generatedImageUrl?a.imageData.generatedImageUrl:null,style:(0,v.j5)({"aspect-ratio":a.imageData.aspectRatio})},null,8,["src","style"]),a.imageData.generating&&a.imageData.generatedImageUrl?((0,d.wg)(),(0,d.j4)(o,{key:0,class:"image-progress",rotate:360,size:100,width:8,"model-value":a.imageData.progress,color:"amber"},{default:(0,d.w5)((()=>[(0,d.Uk)((0,v.zw)(a.imageData.progress)+"% ",1)])),_:1},8,["model-value"])):(0,d.kq)("",!0),a.imageData.generating&&!a.imageData.generatedImageUrl?((0,d.wg)(),(0,d.iD)("p",x,(0,v.zw)(a.imageData.currentDialogue),1)):(0,d.kq)("",!0),a.imageData.generating&&a.imageData.generatedImageUrl?((0,d.wg)(),(0,d.iD)("p",k,"Generating...")):(0,d.kq)("",!0),a.imageData.generating&&!a.imageData.generatedImageUrl?((0,d.wg)(),(0,d.j4)(o,{key:3,class:"image-progress",size:100,width:8,indeterminate:"",color:"amber"})):(0,d.kq)("",!0)])):(0,d.kq)("",!0),a.imageData.generatedImageUrls?((0,d.wg)(),(0,d.iD)("div",P,[(0,d.wy)(((0,d.wg)(),(0,d.iD)("div",{style:(0,v.j5)({"aspect-ratio":a.imageData.aspectRatio}),ref:"el",class:"images clearfix lightbox h-100"},[((0,d.wg)(!0),(0,d.iD)(d.HY,null,(0,d.Ko)(a.imageData.generatedImageUrls,(e=>((0,d.wg)(),(0,d.iD)("img",{key:e,class:"image",src:e,"data-source":e},null,8,R)))),128))],4)),[[s,{toolbar:!0,url:"data-source"}]])])):(0,d.kq)("",!0)],64)}var S=a.p+"img/placeholder.6228678a.jpg",T={name:"GeneratedImage",props:["imageData"],data(){return{placeHolder:S}},methods:{}},C=a(89);const M=(0,C.Z)(T,[["render",O],["__scopeId","data-v-5aa2a6fa"]]);var q=M,H={name:"ImageEditor",components:{GeneratedImage:q},data(){return{dialogue:["Sending Request to Midjourney","Propogating the swoof...","Prepping seed...","Loading core libraries...","Fetching latest user data...","Loading..."],currentDialogue:"Initializing...",chaosValue:0,weirdValue:0,nijiVersion:"default",midjourneyVersion:"5.2",generating:!1,progress:0,generatedImageUrl:null,generatedImageUrls:null,selectedModel:1,imagePrompt:"",negativePrompt:"",imageWidth:16,imageHeight:9,valid:!1,headers:{Authorization:"Bearer 558ee60b-af70-42a5-b27a-46215f74d0d2","Content-Type":"application/json"}}},methods:{updateLoadingDialogue(){for(const e of this.dialogue)setTimeout((()=>{this.currentDialogue=e}),Math.floor(15001*Math.random())+5e3)},createPrompt(){this.currentDialogue="Initializing...",this.updateLoadingDialogue();let e=this.imagePrompt+" --ar "+this.aspectRatioReq+" --c "+this.chaosValue+" --w "+this.weirdValue;return 1===this.selectedModel?e+=" --v "+this.midjourneyVersion:2===this.selectedModel&&("default"!==this.nijiVersion?e+=" --niji 5 --style "+this.nijiVersion:e+=" --niji 5 "),""!==this.negativePrompt&&(e+=" --no "+this.negativePrompt),e},async generateImage(){this.generatedImageUrls=null,this.generatedImageUrl=null,this.generating=!0,this.progress=0;const e=JSON.stringify({msg:this.createPrompt(),ref:"",webhookOverride:"",ignorePrefilter:"false"});console.log(this.createPrompt());try{const{data:t}=await this.$http.post("https://api.thenextleg.io/v2/imagine",e,{headers:this.headers});console.log("Request Sent => ",t.messageId),this.getImageStatus(t.messageId)}catch(t){console.error("ERROR AT PROMPT => ",t)}},async getImageStatus(e){try{console.log("Starting job for",e);const t=setInterval((async()=>{if(100!==this.progress){console.log("The progress is below 100");try{const a=await this.$http.get(`https://api.thenextleg.io/v2/message/${e}?expireMins=2`,{headers:this.headers});console.log("Progress Recieved for",e," =>",a),this.progress=a.data.progress,a.data.progressImageUrl&&(console.log(a.data.progressImageUrl),this.generatedImageUrl=a.data.progressImageUrl),100===a.data.progress&&(console.log("The progress is above 100"),console.log("Progress Complete for",e,"! =>",a.data.response.imageUrl),this.generating=!1,this.generatedImageUrl=a.data.response.imageUrl,this.generatedImageUrls=a.data.response.imageUrls,console.log("Generated img URLS => ",this.generatedImageUrls),clearInterval(t))}catch(a){console.error("ERROR AT STATUS CHECK =>",a)}}}),2e3)}catch(t){console.error(t)}},emitImagePrompt(){const e={prompt:this.imagePrompt};this.$emit("submitImagePrompt",e)}},computed:{aspectRatio(){return this.imageWidth+"/"+this.imageHeight},aspectRatioReq(){return this.imageWidth+":"+this.imageHeight}}};const A=(0,C.Z)(H,[["render",W]]);var E=A,z=a.p+"img/user.f7401a0a.jpeg",L={name:"HomeView",components:{ImageEditor:E},data(){return{message:"Hello",userImage:z,generatedImage:null}},created(){this.getImageData()},methods:{async getImageData(){try{const{data:e}=await this.$http.get("/api/get-last-image-prompt");this.message=e,console.log(this.message)}catch(e){console.error(e)}},async postImageData(e){try{const{data:t}=await this.$http.post("/api/create-image",e);console.log(t)}catch(t){console.error(t)}}}};const G=(0,C.Z)(L,[["render",h],["__scopeId","data-v-67e538b4"]]);var $=G;const B=[{path:"/",name:"home",component:$},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,833))}],N=(0,s.p7)({history:(0,s.PO)("/inference-midjourney/"),routes:B});var Z=N,F=a(65),Y=(0,F.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),K=a(4161);const J=()=>"tbd",Q=K.Z.create({baseURL:J(),headers:{"Content-Type":"application/json"}});Q.defaults.timeout=15e3;var X=Q;function ee(e,t,a,i,n,l){const r=(0,d.up)("router-view"),o=(0,d.up)("v-app");return(0,d.wg)(),(0,d.j4)(o,{class:"fill-height"},{default:(0,d.w5)((()=>[(0,d.Wm)(r,{class:"fill-height"})])),_:1})}var te=a(1993),ae=a.n(te);const ie=(0,C.Z)(ae(),[["render",ee]]);var ne=ie;const le=(0,o.ri)(ne);le.config.globalProperties.$http=X,le.mixin({methods:{_getPathAPI:J}});const re=(0,n.Rd)({theme:{defaultTheme:"dark"},components:l,directives:r});le.use(Y).use(re).use(Z).use(i.ZP).mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var l=t[i]={exports:{}};return e[i].call(l.exports,l,l.exports,a),l.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,l){if(!i){var r=1/0;for(g=0;g<e.length;g++){i=e[g][0],n=e[g][1],l=e[g][2];for(var o=!0,s=0;s<i.length;s++)(!1&l||r>=l)&&Object.keys(a.O).every((function(e){return a.O[e](i[s])}))?i.splice(s--,1):(o=!1,l<r&&(r=l));if(o){e.splice(g--,1);var d=n();void 0!==d&&(t=d)}}return t}l=l||0;for(var g=e.length;g>0&&e[g-1][2]>l;g--)e[g]=e[g-1];e[g]=[i,n,l]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,i){return a.f[i](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/about.0390f2fb.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="client:";a.l=function(i,n,l,r){if(e[i])e[i].push(n);else{var o,s;if(void 0!==l)for(var d=document.getElementsByTagName("script"),g=0;g<d.length;g++){var u=d[g];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==t+l){o=u;break}}o||(s=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,a.nc&&o.setAttribute("nonce",a.nc),o.setAttribute("data-webpack",t+l),o.src=i),e[i]=[n];var c=function(t,a){o.onerror=o.onload=null,clearTimeout(m);var n=e[i];if(delete e[i],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(e){return e(a)})),t)return t(a)},m=setTimeout(c.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=c.bind(null,o.onerror),o.onload=c.bind(null,o.onload),s&&document.head.appendChild(o)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/inference-midjourney/"}(),function(){var e={143:0};a.f.j=function(t,i){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var l=new Promise((function(a,i){n=e[t]=[a,i]}));i.push(n[2]=l);var r=a.p+a.u(t),o=new Error,s=function(i){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var l=i&&("load"===i.type?"missing":i.type),r=i&&i.target&&i.target.src;o.message="Loading chunk "+t+" failed.\n("+l+": "+r+")",o.name="ChunkLoadError",o.type=l,o.request=r,n[1](o)}};a.l(r,s,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,l,r=i[0],o=i[1],s=i[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(s)var g=s(a)}for(t&&t(i);d<r.length;d++)l=r[d],a.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return a.O(g)},i=self["webpackChunkclient"]=self["webpackChunkclient"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(3856)}));i=a.O(i)})();
//# sourceMappingURL=app.77874cd1.js.map