import{o,c as i,r as $,a as T,F as g,b as f,d as e,e as b,n as x,u as a,w as A,i as w,t as _,f as u,v as k,g as m,h as p,j as r,k as P,l as K,m as M,p as O}from "./index-bc5cd541.js";const D="/tokita/images/logo-bookmark.svg",C="/tokita/images/logo-bookmark-white.svg",S=[{id:1,name:"Simple Bookmaring",details:{imageUrl:"/images/illustration-features-tab-1.svg",title:"Bookmark in one click",description:"Organize your bookmarks however you like. Our simple drag-n-drop interface gives you complete control over how you manage your favorite websites.",link:"#"}},{id:2,name:"Speedy Searching",details:{imageUrl:"/images/illustration-features-tab-2.svg",title:"Intelligent search",description:"Get quick results with our intelligent search feature. Find your bookmarks effortlessly and save time navigating through your favorite websites.",link:"#"}},{id:3,name:"Speedy Sharing",details:{imageUrl:"/images/illustration-features-tab-3.svg",title:"Easy sharing",description:"Share your bookmarks seamlessly with others. Our intuitive sharing options allow you to collaborate and spread the word about your favorite websites.",link:"#"}}],j=["href"],L=["href"],y={__name:"LinkButton",props:{btnType:String,link:String,class:{type:String,default:"text-sm sm:text-md md:text-base"}},setup(c){return(s, n)=>(o(),i(g,null,[c.btnType==="primary"?(o(),i("a",{key:0,href:c.link,class:"font-theme-heading font-medium bg-theme-primary px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-primary hover:text-theme-primary cursor-pointer transition duration-200"},[$(s.$slots,"default")],8,j)):T("",!0),c.btnType==="muted"?(o(),i("a",{key:1,href:c.link,class:"font-theme-heading font-medium bg-gray-100 text-gray-500 px-6 py-2 rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-grayish-blue hover:text-theme-grayish-blue cursor-pointer transition duration-200"},[$(s.$slots,"default")],8,L)):T("",!0)],64))}},V={id:"features",class:"container mx-auto px-5"},z={class:"py-16"},I=e("div",{class:"w-4/5 md:w-3/5 mx-auto"},[e("h2",{class:"text-3xl md:text-4xl font-semibold font-theme-heading text-center"},"Features"),e("p",{class:"text-theme-grayish-blue text-center mt-7 font-theme-content text-lg"}," Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go. ")],-1),U={class:"mt-10"},B={class:"flex flex-col items-center md:flex-row justify-center font-theme-heading"},N=["onClick"],F={class:"mt-16"},W={class:"relative"},R=["src"],E=e("div",{class:"-z-10 bg-theme-primary h-52 w-96 sm:h-80 sm:w-full rounded-r-full absolute -left-56 -bottom-16"},null,-1),G={class:"font-theme-heading text-2xl md:text-3xl font-medium text-center lg:text-left"},H={class:"mt-7 font-theme-content text-lg text-theme-grayish-blue text-center lg:text-left"},q={class:"flex justify-center lg:justify-start mt-7"},Y=r("More Info"),Q={__name:"FeatureSection",setup(c){let s=f(1);return(n, h)=>(o(),i("div",V,[e("section",z,[I,e("div",U,[e("ul",B,[(o(!0),i(g,null,b(a(S), t=>(o(),i("li",{key:t.id,class:x([a(s)===t.id?"md:border-b-4 md:border-theme-secondary":"","w-full md:w-56 cursor-pointer hover:text-theme-secondary transition duration-200 border-b-2 border-t-2 md:border-t-0 flex justify-center"])},[e("a",{href:"#",class:x([a(s)===t.id?" border-theme-secondary":"","py-5 md:border-b-0 border-b-4"]),onClick:A(d=>w(s)?s.value=t.id:s=t.id,["prevent"])},_(t.name),11,N)],2))),128))])]),e("div",F,[(o(!0),i(g,null,b(a(S), t=>u((o(),i("div",{key:t.id,class:"grid gap-32 lg:grid-cols-2 items-center"},[e("div",W,[e("img",{class:"z-10 w-full",src:t.details.imageUrl},null,8,R),E]),e("div",null,[e("h3",G,_(t.details.title),1),e("p",H,_(t.details.description),1),e("div",q,[m(y,{"btn-type":"primary",link:t.details.link},{default:p(()=>[Y]),_:2},1032,["link"])])])],512)),[[k,a(s)===t.id]])),128))])])]))}},Z="/tokita/images/illustration-hero.svg",J={class:"container mx-auto px-0 overflow-x-hidden lg:overflow-x-visible"},X={class:"grid grid-cols-none lg:grid-cols-2 pb-16 pt-8 items-center"},ee={class:"lg:w-5/6 order-2 lg:order-none"},te=e("h1",{class:"text-4xl xl:text-5xl font-bold font-theme-heading text-center lg:text-left"}," A Simple Bookmark Manager ",-1),se=e("p",{class:"lg:text-xl mt-10 font-theme-content text-theme-grayish-blue text-center lg:text-left"}," A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free. ",-1),oe={class:"flex justify-center lg:justify-start mt-10 space-x-4"},ie=r("Masuk Member"),ae=r("Daftar Member"),ne=e("div",{class:"relative order-1 lg:order-none mb-20 lg:mt-0 lg:mb-0 lg:-mr-10"},[e("img",{class:"z-10 w-full",src:Z}),e("div",{class:"-z-10 bg-theme-primary h-52 w-full sm:h-80 sm:w-full rounded-l-full absolute -right-28 md:-right-48 -bottom-8"})],-1),re=P({__name:"HeroSection",setup(c){return(s, n)=>(o(),i("div",J,[e("section",X,[e("div",ee,[te,se,e("div",oe,[m(y,{"btn-type":"primary",class:"text-sm sm:text-md md:text-base",link:"/auth/signin"},{default:p(()=>[ie]),_:1}),m(y,{"btn-type":"muted",class:"text-sm sm:text-md md:text-base",link:"/auth/signup"},{default:p(()=>[ae]),_:1})])]),ne])]))}}),le=[{id:1,title:"What is bookmark?",description:"A bookmark is a feature that allows users to save the URL of a webpage for quick access later. It acts as a shortcut to the webpage, allowing you to navigate back to it without having to remember or search for the URL. Bookmarks are handy for keeping track of your favorite websites, important articles, or resources that you frequently visit. They help you organize your online content and improve your browsing experience."},{id:2,title:"How can I request a new browser?",description:"To request a new browser, you can visit our official website and navigate to the 'Feedback' or 'Contact Us' section. There, you can submit your request for a new browser version or feature. Additionally, you can participate in our community forums or reach out to our support team with your suggestions. We value user feedback and use it to enhance our products, so your input is essential in shaping the future of our browser."},{id:3,title:"Is there a mobile app available?",description:"Yes, we offer a mobile app for both Android and iOS platforms. You can download our mobile app from the respective app stores (Google Play Store for Android and the App Store for iOS). The mobile app allows you to sync your bookmarks, browsing history, and other settings across all your devices. You can access your bookmarks on the go, and it provides a seamless browsing experience across your mobile and desktop devices."},{id:4,title:"What about other Chromium browsers?",description:"Our bookmarking feature is compatible with various Chromium-based browsers, including popular ones like Google Chrome, Microsoft Edge, Brave, Vivaldi, and others. As long as you are using a version of these browsers that is 62 or higher, you can enjoy the benefits of our bookmarking tool. The integration is seamless and allows you to manage your bookmarks efficiently, regardless of the Chromium browser you prefer."}],ce={id:"faq",class:"container mx-auto px-5 md:w-4/5"},de={class:"py-16 pt-18"},ue=e("div",{class:"w-4/5 md:w-3/5 mx-auto"},[e("h2",{class:"text-3xl md:text-4xl font-theme-heading font-medium text-center"},"Frequently Asked Questions"),e("p",{class:"text-theme-grayish-blue text-center mt-7 font-theme-content text-lg"}," Here are some of out FAQs. If you have any other quesitons you'd like answered please feel free to email us. ")],-1),he={class:"mt-10 w-full lg:w-3/5 mx-auto"},me={class:"shadow-lg"},_e=["onClick"],ge=e("path",{fill:"none",stroke:"currentColor","stroke-width":"3",d:"M1 1l8 8 8-8"},null,-1),pe=[ge],fe={class:"flex justify-center mt-10"},be=r("More FAQs"),xe={__name:"FaqSection",setup(c){let s=f(1);return(n, h)=>(o(),i("div",ce,[e("section",de,[ue,e("div",he,[e("ul",me,[(o(!0),i(g,null,b(a(le), t=>(o(),i(g,{key:t.id},[e("li",{class:x([a(s)===t.id?"text-theme-secondary":"","font-theme-content font-medium text-xl cursor-pointer hover:text-theme-secondary py-5 flex justify-between items-center transition duration-200 bg-slate-100 px-6"]),onClick: d=>w(s)?s.value=t.id:s=t.id},[r(_(t.title)+" ",1),(o(),i("svg",{class:x([a(s)===t.id?"rotate-180 text-theme-secondary":"rotate-0 text-theme-primary","transform"]),xmlns:"http://www.w3.org/2000/svg",width:"18",height:"12"},pe,2))],10,_e),u(e("p",{class:"bg-slate-50 px-6 font-theme-content text-md lg:text-lg py-5 text-gray-500 text-justify"},_(t.description),513),[[k,a(s)===t.id]])],64))),128))]),e("div",fe,[m(y,{"btn-type":"primary",link:"#",class:"text-sm"},{default:p(()=>[be]),_:1})])])])]))}},ye="/tokita/images/bg-dots.svg",ve=[{id:1,title:"GRATIS",subTitle:"Gratis untuk kamu yang ingin mencoba pengalaman belajar di AYOCPNS.",pricing:"Rp0",features:["✅ Akses Try Out Gratis","✅ Try Out Premium SKD Sistem CAT","✅ Kunci dan Pembahasan Try Out Lengkap","✅ Latihan Soal SKD / Mini Try Out (TWK, TIU dan TKP)","✅ Materi SKD Terupdate","✅ Ranking Try Out Nasional dan Daerah","✅ Try Out Exclusive Platinum SKD Sistem CAT dengan Pembahasan Video","❌ Analisa Waktu Pengerjaan Try Out (Manajemen Waktu)","❌ Sebaran Data Nilai Try Out Pengguna Lain (Pesaing)","❌ Video Materi SKD (TWK, TIU dan TKP)","❌ Kalkulator TIU","❌ Video Series SKD"],link:"#"},{id:2,title:"PREMIUM",subTitle:"Gratis untuk kamu yang ingin mencoba pengalaman belajar di AYOCPNS.",pricing:"Rp100.000",features:["✅ Akses Try Out Gratis","✅ Try Out Premium SKD Sistem CAT","✅ Kunci dan Pembahasan Try Out Lengkap","✅ Latihan Soal SKD / Mini Try Out (TWK, TIU dan TKP)","✅ Materi SKD Terupdate","✅ Ranking Try Out Nasional dan Daerah","✅ Try Out Exclusive Platinum SKD Sistem CAT dengan Pembahasan Video","✅ Analisa Waktu Pengerjaan Try Out (Manajemen Waktu)","✅ Sebaran Data Nilai Try Out Pengguna Lain (Pesaing)","✅ Video Materi SKD (TWK, TIU dan TKP)","❌ Kalkulator TIU","❌ Video Series SKD"],link:"#"},{id:3,title:"PLATINUM",subTitle:"Gratis untuk kamu yang ingin mencoba pengalaman belajar di AYOCPNS.",pricing:"Rp250.000",features:["✅ Akses Try Out Gratis","✅ Try Out Premium SKD Sistem CAT","✅ Kunci dan Pembahasan Try Out Lengkap","✅ Latihan Soal SKD / Mini Try Out (TWK, TIU dan TKP)","✅ Materi SKD Terupdate","✅ Ranking Try Out Nasional dan Daerah","✅ Try Out Exclusive Platinum SKD Sistem CAT dengan Pembahasan Video","✅ Analisa Waktu Pengerjaan Try Out (Manajemen Waktu)","✅ Sebaran Data Nilai Try Out Pengguna Lain (Pesaing)","✅ Video Materi SKD (TWK, TIU dan TKP)","✅ Kalkulator TIU","✅ Video Series SKD"],link:"#"}],we={id:"pricing",class:"container mx-auto px-3 md:w-4/5"},ke={class:"py-16 pt-18"},$e=e("div",{class:"w-4/5 md:w-3/5 mx-auto"},[e("h2",{class:"text-3xl md:text-4xl font-theme-heading font-medium text-center"},"Paket Belajar"),e("p",{class:"text-theme-grayish-blue text-center text-lg font-theme-content mt-7"}," Pilih paket yang paling sesuai untuk mendukung proses belajar kamu! ")],-1),Te={class:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"},Se={class:"text-xl font-bold font-theme-heading text-center mt-6"},Ae={class:"text-4xl font-extrabold font-theme-content text-red-500 text-center mt-3"},Pe=e("div",{class:"my-4"},[e("img",{class:"w-full px-3",src:ye,alt:"Dot Backaground"})],-1),Oe={class:"text-md p-2 text-center"},Ce={class:"flex mb-8 my-4"},Ke={class:"flex justify-center content-center mb-8"},Me=r("Ambil Paket"),De={__name:"PricingSection",setup(c){return(s, n)=>(o(),i("div",we,[e("section",ke,[$e,e("div",Te,[(o(!0),i(g,null,b(a(ve),(h, t)=>(o(),i("div",{key:t,class:x([[t===0?"lg:mb-10":"",t===1?"lg:mt-10":"",t===2?"lg:mt-20 lg:-mb-10":""],"shadow-lg rounded-lg"])},[e("h3",Se,_(h.title),1),e("p",Ae,_(h.pricing),1),Pe,e("p",Oe,_(h.subTitle),1),e("div",Ce,[e("ul",null,[(o(!0),i(g,null,b(h.features,(d, l)=>(o(),i("li",{key:l,class:"font-bold m-4"},_(d),1))),128))])]),e("div",Ke,[m(y,{"btn-type":"primary",link:h.link,class:"text-sm"},{default:p(()=>[Me]),_:2},1032,["link"])])],2))),128))])])]))}},je="/tokita/images/icon-error.svg",Le=["type"],Ve={__name:"Button",props:{btnType:String,type:{type:String,default:"button"}},setup(c){return(s, n)=>c.btnType==="secondary"?(o(),i("button",{key:0,type:c.type,class:"font-theme-heading bg-theme-secondary px-6 py-2 text-white rounded shadow-md hover:bg-white border-2 border-transparent hover:border-theme-secondary hover:text-theme-secondary cursor-pointer transition duration-200 w-full lg:w-auto mt-4 lg:mt-0 focus:outline-none"},[$(s.$slots,"default")],8,Le)):T("",!0)}},ze={id:"subscribe",class:"bg-theme-primary mt-10"},Ie={class:"container w-full lg:w-2/5 mx-auto px-5"},Ue={class:"py-16"},Be=e("h4",{class:"text-sm tracking-widest uppercase text-center text-white font-theme-heading"}," 35,000+ Already Joined ",-1),Ne=e("h2",{class:"text-3xl md:text-4xl font-medium text-center text-white mt-9 mb-10 font-theme-heading"}," Stay up-to-date with what we'r doing ",-1),Fe={class:"relative flex flex-col items-center lg:flex-row justify-center lg:space-x-3"},We={class:"relative w-full lg:mb-0 font-theme-content"},Re=e("img",{class:"absolute right-3 top-3",src:je,alt:"Error Icon"},null,-1),Ee=e("div",{class:"absolute w-full text-xs italic px-2 py-1 bg-theme-secondary text-white rounded"}," Whosps, make sure it's an email ",-1),Ge=[Re,Ee],He=r("Subscribe"),qe={__name:"SubscribeSection",setup(c){let s=f(""),n=f(!1);const h=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;let t=()=>{!s.value||!h.test(s.value)?n.value=!0:console.log(h.test(s.value))};return(d, l)=>(o(),i("div",ze,[e("div",Ie,[e("section",Ue,[Be,Ne,e("form",{onSubmit:l[2]||(l[2]=A(v=>a(t)(),["prevent"]))},[e("div",Fe,[e("div",We,[u(e("input",{"onUpdate:modelValue":l[0]||(l[0]= v=>w(s)?s.value=v:s=v),class:"w-full py-3 px-5 text-sm text-gray-600 border-0 shadow-md rounded focus:ring-4 focus:ring-blue-300",type:"text",name:"newsletter_email",placeholder:"Enter your email address",onInput:l[1]||(l[1]= v=>w(n)?n.value=!1:n=!1)},null,544),[[K,a(s)]]),u(e("div",null,Ge,512),[[k,a(n)]])]),m(Ve,{type:"submit","btn-type":"secondary"},{default:p(()=>[He]),_:1})])],32)])])]))}},Ye={class:"container mx-auto px-5 align-center"},Qe={class:"flex justify-between py-12 items-center"},Ze=e("div",null,[e("a",{href:"/"},[e("img",{src:D,alt:"Site Logo"})])],-1),Je={class:"flex justify-end flex-col md:flex-row"},Xe=e("svg",{viewBox:"0 0 24 24",class:"h-6 w-6 fill-current"},[e("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})],-1),et=[Xe],tt={class:"space-x-10 font-theme-heading font-medium items-center hidden md:flex flex-col space-y-7 md:space-y-0 md:flex-row"},st={class:"uppercase hover:text-theme-secondary transition duration-200"},ot={href:"#features"},it=r("Features"),at=[it],nt={class:"uppercase hover:text-theme-secondary transition duration-200"},rt={href:"#pricing"},lt=r("Pricing"),ct=[lt],dt={class:"uppercase hover:text-theme-secondary transition duration-200"},ut={href:"#faq"},ht=r("FAQ"),mt=[ht],_t={class:"uppercase hover:text-theme-secondary transition duration-200"},gt={href:"#subscribe"},pt=r("Subscribe"),ft=[pt],bt={class:"absolute px-5 py-12 block z-30 top-0 left-0 w-full h-full bg-gradient-to-b from-theme-dark-blue via-theme-dark-blue-tp to-theme-dark-blue"},xt={class:"flex justify-between items-center"},yt=e("img",{src:C,alt:"Logo"},null,-1),vt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-x text-white",viewBox:"0 0 16 16"},[e("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})],-1),wt=[vt],kt={class:"uppercase text-white text-md tracking-widest items-center flex flex-col mt-14"},$t={class:"hover:text-theme-secondary transition duration-200 py-4 border-t border-b border-theme-grayish-blue w-full text-center"},Tt={class:"hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-full text-center"},St={class:"hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-full text-center"},At={class:"hover:text-theme-secondary transition duration-200 py-4 border-b border-theme-grayish-blue w-full text-center"},Pt=O('<div class="flex justify-center items-end h-52"><ul class="flex space-x-8"><li><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-facebook text-white hover:text-theme-secondary transition duration-200 cursor-pointer" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg></li><li><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-twitter text-white hover:text-theme-secondary transition duration-200 cursor-pointer" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></li></ul></div>',1),Ot={class:"bg-theme-dark-blue py-10"},Ct={class:"container mx-auto px-5"},Kt={class:"grid md:grid-cols-2"},Mt={class:"flex flex-col md:flex-row md:space-x-12 items-center"},Dt=e("div",{class:"mb-10 md:mb-0"},[e("img",{src:C,alt:"Logo"})],-1),jt={class:"flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-8 text-xs text-center md:text-left font-theme-heading"},Lt={class:"uppercase text-white hover:text-theme-secondary transition duration-200"},Vt={href:"#features"},zt=r("Features"),It=[zt],Ut={class:"uppercase text-white hover:text-theme-secondary transition duration-200"},Bt={href:"#pricing"},Nt=r("Pricing"),Ft=[Nt],Wt={class:"uppercase text-white hover:text-theme-secondary transition duration-200"},Rt={href:"#faq"},Et=r("FAQ"),Gt=[Et],Ht={class:"uppercase text-white hover:text-theme-secondary transition duration-200"},qt={href:"#subscribe"},Yt=r("Subscribe"),Qt=[Yt],Zt=O('<div class="md:place-self-end place-self-center mt-10 md:mt-0"><ul class="flex space-x-8 items-center"><li><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-facebook text-white hover:text-theme-secondary transition duration-200 cursor-pointer" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path></svg></li><li><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-twitter text-white hover:text-theme-secondary transition duration-200 cursor-pointer" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path></svg></li></ul></div>',1),Xt=P({__name:"Landing",setup(c){const s=f(!1);let n=()=>{s.value=!s.value};return(h, t)=>{const d=M("smooth-scroll");return o(),i(g,null,[e("div",Ye,[e("header",Qe,[Ze,e("nav",Je,[e("button",{type:"button",class:"flex md:hidden focus:outline-none",onClick:t[0]||(t[0]= l=>a(n)())},et),e("ul",tt,[e("li",st,[u((o(),i("a",ot,at)),[[d]])]),e("li",nt,[u((o(),i("a",rt,ct)),[[d]])]),e("li",dt,[u((o(),i("a",ut,mt)),[[d]])]),e("li",_t,[u((o(),i("a",gt,ft)),[[d]])])])])]),u(e("div",null,[e("div",bt,[e("div",xt,[yt,e("button",{type:"button",class:"focus:outline-none",onClick:t[1]||(t[1]= l=>a(n)())},wt)]),e("ul",kt,[e("li",$t,[e("a",{href:"#features",onClick:t[2]||(t[2]= l=>a(n)())},"Features")]),e("li",Tt,[e("a",{href:"#pricing",onClick:t[3]||(t[3]= l=>a(n)())},"Pricing")]),e("li",St,[e("a",{href:"#faq",onClick:t[4]||(t[4]= l=>a(n)())},"FAQ")]),e("li",At,[e("a",{href:"#subscribe",onClick:t[5]||(t[5]= l=>a(n)())},"Subscribe")])]),Pt])],512),[[k,s.value]])]),m(re),m(Q),m(De),m(xe),m(qe),e("footer",Ot,[e("div",Ct,[e("div",Kt,[e("div",Mt,[Dt,e("ul",jt,[e("li",Lt,[u((o(),i("a",Vt,It)),[[d]])]),e("li",Ut,[u((o(),i("a",Bt,Ft)),[[d]])]),e("li",Wt,[u((o(),i("a",Rt,Gt)),[[d]])]),e("li",Ht,[u((o(),i("a",qt,Qt)),[[d]])])])]),Zt])])])],64)}}});export{Xt as default};
