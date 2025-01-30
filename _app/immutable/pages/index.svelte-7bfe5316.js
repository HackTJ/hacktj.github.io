import{S as ke,i as Se,s as Te,l as g,a as S,u as E,m as p,p as d,c as T,v as I,h as c,q as a,Q as ue,b as H,K as o,w as Ye,n as O,R as bt,T as Xr,U as ea,e as Ze,f as J,g as at,t as V,d as st,L as rt,y as ce,z as ye,A as fe,D as he,o as ta,E as ir,M as Z,N as X,O as Cr,B as ra,P as jr,x as Jr,V as aa,r as sa}from"../chunks/index-a8d9dc73.js";import{b as y}from"../chunks/paths-b9644fda.js";import{F as la}from"../chunks/Footer-02a4a4a9.js";import{C as Mr,M as oa,a as na}from"../chunks/Modal-054c3d4f.js";import{r as Br,e as or,l as nr}from"../chunks/index-d1717e59.js";import"../chunks/dayjs.min-1fadea94.js";function ia(n){let e,r,t,s,i,l,f,h,m,M;return{c(){e=g("div"),r=g("img"),i=S(),l=g("h1"),f=E(n[0]),h=S(),m=g("p"),M=E(n[1]),this.h()},l(v){e=p(v,"DIV",{class:!0});var b=d(e);r=p(b,"IMG",{class:!0,alt:!0,src:!0}),i=T(b),l=p(b,"H1",{class:!0});var _=d(l);f=I(_,n[0]),_.forEach(c),h=T(b),m=p(b,"P",{class:!0});var k=d(m);M=I(k,n[1]),k.forEach(c),b.forEach(c),this.h()},h(){a(r,"class","rounded-2xl w-48 h-48 object-cover bg-center"),a(r,"alt",t="Portrait of "+n[0]),ue(r.src,s=n[2])||a(r,"src",s),a(l,"class","text-2xl font-bold mt-4"),a(m,"class","mt-1"),a(e,"class","")},m(v,b){H(v,e,b),o(e,r),o(e,i),o(e,l),o(l,f),o(e,h),o(e,m),o(m,M)},p(v,[b]){b&1&&t!==(t="Portrait of "+v[0])&&a(r,"alt",t),b&4&&!ue(r.src,s=v[2])&&a(r,"src",s),b&1&&Ye(f,v[0]),b&2&&Ye(M,v[1])},i:O,o:O,d(v){v&&c(e)}}}function ca(n,e,r){let{name:t}=e,{description:s}=e,{portraitSrc:i}=e;return n.$$set=l=>{"name"in l&&r(0,t=l.name),"description"in l&&r(1,s=l.description),"portraitSrc"in l&&r(2,i=l.portraitSrc)},[t,s,i]}class fa extends ke{constructor(e){super(),Se(this,e,ca,ia,Te,{name:0,description:1,portraitSrc:2})}}function ha(n){let e,r,t,s,i,l,f,h,m,M,v,b;return{c(){e=g("div"),r=g("img"),s=S(),i=g("div"),l=g("h4"),f=E(n[0]),h=S(),m=g("button"),M=E("+"),this.h()},l(_){e=p(_,"DIV",{class:!0});var k=d(e);r=p(k,"IMG",{class:!0,src:!0,alt:!0}),s=T(k),i=p(k,"DIV",{class:!0});var P=d(i);l=p(P,"H4",{class:!0});var R=d(l);f=I(R,n[0]),R.forEach(c),h=T(P),m=p(P,"BUTTON",{class:!0});var A=d(m);M=I(A,"+"),A.forEach(c),P.forEach(c),k.forEach(c),this.h()},h(){a(r,"class","max-h-[256px] w-full object-center object-cover rounded-2xl hover:brightness-75 cursor-pointer transition-all duration-100 ease-in-out"),ue(r.src,t=n[1])||a(r,"src",t),a(r,"alt","A team member"),a(l,"class","text font-medium font-mono"),a(m,"class","about-me-conic-color flex text-center items-center justify-center h-12 w-12 bg-blueberry-200 hover:bg-blueberry-300 text-blueberry-800 text-2xl font-bold rounded-2xl"),a(i,"class","flex flex-row h-16 items-center justify-between mt-2"),a(e,"class",n[2])},m(_,k){H(_,e,k),o(e,r),o(e,s),o(e,i),o(i,l),o(l,f),o(i,h),o(i,m),o(m,M),v||(b=[bt(r,"click",n[3]),bt(m,"click",n[3])],v=!0)},p(_,[k]){k&2&&!ue(r.src,t=_[1])&&a(r,"src",t),k&1&&Ye(f,_[0]),k&4&&a(e,"class",_[2])},i:O,o:O,d(_){_&&c(e),v=!1,Xr(b)}}}function ua(n,e,r){let{name:t}=e,{portraitSrc:s}=e,{description:i}=e,{class:l=""}=e;const{open:f}=ea("simple-modal"),h=()=>f(fa,{name:t,portraitSrc:s,description:i});return console.log(s),n.$$set=m=>{"name"in m&&r(0,t=m.name),"portraitSrc"in m&&r(1,s=m.portraitSrc),"description"in m&&r(4,i=m.description),"class"in m&&r(2,l=m.class)},[t,s,l,h,i]}class da extends ke{constructor(e){super(),Se(this,e,ua,ha,Te,{name:0,portraitSrc:1,description:4,class:2})}}function ma(n){let e,r,t;return{c(){e=g("a"),r=g("img"),this.h()},l(s){e=p(s,"A",{href:!0,target:!0,rel:!0,class:!0});var i=d(e);r=p(i,"IMG",{alt:!0,src:!0,class:!0}),i.forEach(c),this.h()},h(){a(r,"alt",n[0]),ue(r.src,t=n[1])||a(r,"src",t),a(r,"class","w-full h-full object-contain"),a(e,"href",n[2]),a(e,"target","_blank"),a(e,"rel","noopener"),a(e,"class","w-[225px] h-[125px] flex items-center flex-row mt-2 bg-black p-8 rounded-2xl shrink-0 hover:brightness-75")},m(s,i){H(s,e,i),o(e,r)},p(s,[i]){i&1&&a(r,"alt",s[0]),i&2&&!ue(r.src,t=s[1])&&a(r,"src",t),i&4&&a(e,"href",s[2])},i:O,o:O,d(s){s&&c(e)}}}function ga(n,e,r){let{alt:t}=e,{srcLogo:s}=e,{href:i}=e;return n.$$set=l=>{"alt"in l&&r(0,t=l.alt),"srcLogo"in l&&r(1,s=l.srcLogo),"href"in l&&r(2,i=l.href)},[t,s,i]}class pa extends ke{constructor(e){super(),Se(this,e,ga,ma,Te,{alt:0,srcLogo:1,href:2})}}function $r(n,e,r){const t=n.slice();return t[3]=e[r].src,t[4]=e[r].alt,t[5]=e[r].href,t}function Vr(n){let e,r,t,s,i,l,f,h=n[0],m=[];for(let v=0;v<h.length;v+=1)m[v]=Fr($r(n,h,v));const M=v=>V(m[v],1,1,()=>{m[v]=null});return{c(){e=g("div"),r=g("h3"),t=E(n[1]),s=S(),i=g("div");for(let v=0;v<m.length;v+=1)m[v].c();this.h()},l(v){e=p(v,"DIV",{class:!0});var b=d(e);r=p(b,"H3",{class:!0});var _=d(r);t=I(_,n[1]),_.forEach(c),s=T(b),i=p(b,"DIV",{class:!0});var k=d(i);for(let P=0;P<m.length;P+=1)m[P].l(k);k.forEach(c),b.forEach(c),this.h()},h(){a(r,"class","font-bold text-2xl text-black opacity-50 pl-8"),a(i,"class","flex w-full space-x-4 px-8 pb-8 md:pb-12 overflow-auto scrollbar-thin scrollbar-thumb-blueberry-200 scrollbar-track-blackberry-500"),a(e,"class",l=n[2]+" w-full pt-8 md:pt-12")},m(v,b){H(v,e,b),o(e,r),o(r,t),o(e,s),o(e,i);for(let _=0;_<m.length;_+=1)m[_]&&m[_].m(i,null);f=!0},p(v,b){if((!f||b&2)&&Ye(t,v[1]),b&1){h=v[0];let _;for(_=0;_<h.length;_+=1){const k=$r(v,h,_);m[_]?(m[_].p(k,b),J(m[_],1)):(m[_]=Fr(k),m[_].c(),J(m[_],1),m[_].m(i,null))}for(at(),_=h.length;_<m.length;_+=1)M(_);st()}(!f||b&4&&l!==(l=v[2]+" w-full pt-8 md:pt-12"))&&a(e,"class",l)},i(v){if(!f){for(let b=0;b<h.length;b+=1)J(m[b]);f=!0}},o(v){m=m.filter(Boolean);for(let b=0;b<m.length;b+=1)V(m[b]);f=!1},d(v){v&&c(e),rt(m,v)}}}function Fr(n){let e,r;return e=new pa({props:{srcLogo:n[3],alt:n[4],href:n[5]}}),{c(){ce(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,s){fe(e,t,s),r=!0},p(t,s){const i={};s&1&&(i.srcLogo=t[3]),s&1&&(i.alt=t[4]),s&1&&(i.href=t[5]),e.$set(i)},i(t){r||(J(e.$$.fragment,t),r=!0)},o(t){V(e.$$.fragment,t),r=!1},d(t){he(e,t)}}}function va(n){let e,r,t=n[0]&&n[0].length&&Vr(n);return{c(){t&&t.c(),e=Ze()},l(s){t&&t.l(s),e=Ze()},m(s,i){t&&t.m(s,i),H(s,e,i),r=!0},p(s,[i]){s[0]&&s[0].length?t?(t.p(s,i),i&1&&J(t,1)):(t=Vr(s),t.c(),J(t,1),t.m(e.parentNode,e)):t&&(at(),V(t,1,1,()=>{t=null}),st())},i(s){r||(J(t),r=!0)},o(s){V(t),r=!1},d(s){t&&t.d(s),s&&c(e)}}}function ba(n,e,r){let{title:t=""}=e,{cardsData:s=[]}=e,{bg:i}=e;return n.$$set=l=>{"title"in l&&r(1,t=l.title),"cardsData"in l&&r(0,s=l.cardsData),"bg"in l&&r(2,i=l.bg)},n.$$.update=()=>{if(n.$$.dirty&1){let l=s.length,f;for(;l!==0;)f=Math.floor(Math.random()*l),l--,r(0,[s[l],s[f]]=[s[f],s[l]],s)}},[s,t,i]}class xa extends ke{constructor(e){super(),Se(this,e,ba,va,Te,{title:1,cardsData:0,bg:2})}}function _a(n){let e;return{c(){e=g("div"),this.h()},l(r){e=p(r,"DIV",{class:!0,id:!0}),d(e).forEach(c),this.h()},h(){a(e,"class","w-full h-[400px] rounded-2xl"),a(e,"id","map-canvas")},m(r,t){H(r,e,t)},p:O,i:O,o:O,d(r){r&&c(e)}}}function wa(n,e,r){let{zoom:t=18}=e,{latlng:s={lat:38.92208058473404,lng:-77.23336741553179}}=e,i;return ta(async()=>{i=window.google;const l=document.getElementById("map-canvas"),f=new i.maps.Map(l,{zoom:t,center:s});new i.maps.Marker({map:f,position:s,animation:i.maps.Animation.DROP})}),n.$$set=l=>{"zoom"in l&&r(0,t=l.zoom),"latlng"in l&&r(1,s=l.latlng)},[t,s]}class ya extends ke{constructor(e){super(),Se(this,e,wa,_a,Te,{zoom:0,latlng:1})}}function ka(n){let e,r,t=[n[0],{fill:"currentColor"},{viewBox:"0 0 512 512"}],s={};for(let i=0;i<t.length;i+=1)s=ir(s,t[i]);return{c(){e=Z("svg"),r=Z("path"),this.h()},l(i){e=X(i,"svg",{fill:!0,viewBox:!0});var l=d(e);r=X(l,"path",{fill:!0,stroke:!0,"stroke-linecap":!0,"stroke-miterlimit":!0,"stroke-width":!0,d:!0}),d(r).forEach(c),l.forEach(c),this.h()},h(){a(r,"fill","none"),a(r,"stroke","currentColor"),a(r,"stroke-linecap","round"),a(r,"stroke-miterlimit","10"),a(r,"stroke-width","48"),a(r,"d","M88 152h336M88 256h336M88 360h336"),Cr(e,s)},m(i,l){H(i,e,l),o(e,r)},p(i,[l]){Cr(e,s=ra(t,[l&1&&i[0],{fill:"currentColor"},{viewBox:"0 0 512 512"}]))},i:O,o:O,d(i){i&&c(e)}}}function Sa(n,e,r){return n.$$set=t=>{r(0,e=ir(ir({},e),jr(t)))},e=jr(e),[e]}class Pr extends ke{constructor(e){super(),Se(this,e,Sa,ka,Te,{})}}function Lr(n,e,r){const t=n.slice();return t[4]=e[r].href,t[5]=e[r].text,t[6]=e[r].button,t}function Or(n,e,r){const t=n.slice();return t[4]=e[r].href,t[5]=e[r].text,t[6]=e[r].button,t}function Rr(n){let e,r=n[5]+"",t,s,i,l;return{c(){e=g("a"),t=E(r),this.h()},l(f){e=p(f,"A",{href:!0,class:!0});var h=d(e);t=I(h,r),h.forEach(c),this.h()},h(){a(e,"href",s=n[4]),a(e,"class","hover:text-theme-100")},m(f,h){H(f,e,h),o(e,t),i||(l=bt(e,"click",n[3]),i=!0)},p(f,h){h&1&&r!==(r=f[5]+"")&&Ye(t,r),h&1&&s!==(s=f[4])&&a(e,"href",s)},d(f){f&&c(e),i=!1,l()}}}function Nr(n){let e,r=!n[6]&&Rr(n);return{c(){r&&r.c(),e=Ze()},l(t){r&&r.l(t),e=Ze()},m(t,s){r&&r.m(t,s),H(t,e,s)},p(t,s){t[6]?r&&(r.d(1),r=null):r?r.p(t,s):(r=Rr(t),r.c(),r.m(e.parentNode,e))},d(t){r&&r.d(t),t&&c(e)}}}function zr(n){let e,r=n[5]+"",t,s,i;return{c(){e=g("a"),t=E(r),this.h()},l(l){e=p(l,"A",{href:!0,class:!0});var f=d(e);t=I(f,r),f.forEach(c),this.h()},h(){a(e,"href",s=n[4]),a(e,"class",i="block text-center py-2 px-6 text-blueberry-800 font-bold rounded-2xl w-full lg:w-auto "+n[6].class)},m(l,f){H(l,e,f),o(e,t)},p(l,f){f&1&&r!==(r=l[5]+"")&&Ye(t,r),f&1&&s!==(s=l[4])&&a(e,"href",s),f&1&&i!==(i="block text-center py-2 px-6 text-blueberry-800 font-bold rounded-2xl w-full lg:w-auto "+l[6].class)&&a(e,"class",i)},d(l){l&&c(e)}}}function Gr(n){let e,r=n[6]&&zr(n);return{c(){r&&r.c(),e=Ze()},l(t){r&&r.l(t),e=Ze()},m(t,s){r&&r.m(t,s),H(t,e,s)},p(t,s){t[6]?r?r.p(t,s):(r=zr(t),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null)},d(t){r&&r.d(t),t&&c(e)}}}function Ta(n){let e,r,t,s,i,l,f,h,m,M,v,b,_;var k=n[1]?Mr:Pr;function P(w){return{props:{width:"32px",class:"static lg:hidden text-white hover:text-theme-100"}}}k&&(t=Jr(k,P()));let R=n[0],A=[];for(let w=0;w<R.length;w+=1)A[w]=Nr(Or(n,R,w));let F=n[0],C=[];for(let w=0;w<F.length;w+=1)C[w]=Gr(Lr(n,F,w));return{c(){e=g("nav"),r=g("div"),t&&ce(t.$$.fragment),s=S(),i=g("div"),l=g("div");for(let w=0;w<A.length;w+=1)A[w].c();f=S(),h=g("div");for(let w=0;w<C.length;w+=1)C[w].c();this.h()},l(w){e=p(w,"NAV",{class:!0});var $=d(e);r=p($,"DIV",{});var x=d(r);t&&ye(t.$$.fragment,x),x.forEach(c),s=T($),i=p($,"DIV",{class:!0});var L=d(i);l=p(L,"DIV",{class:!0});var $e=d(l);for(let W=0;W<A.length;W+=1)A[W].l($e);$e.forEach(c),f=T(L),h=p(L,"DIV",{class:!0});var U=d(h);for(let W=0;W<C.length;W+=1)C[W].l(U);U.forEach(c),L.forEach(c),$.forEach(c),this.h()},h(){a(l,"class","flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 space-x-0 lg:space-x-8"),a(h,"class","flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 w-full"),a(i,"class",m="justify-start flex lg:flex flex-col lg:flex-row items-center mt-8 lg:mt-0 space-y-8 lg:space-y-0 space-x-0 lg:space-x-8 "+(n[1]?"":"hidden")),a(e,"class",M="lg:h-24 px-8 lg:px-12 py-8 text-white text-lg font-black bg-blackberry-800 lg:bg-transparent w-full h-full z-10 lg:static "+(n[1]?"fixed":"static"))},m(w,$){H(w,e,$),o(e,r),t&&fe(t,r,null),o(e,s),o(e,i),o(i,l);for(let x=0;x<A.length;x+=1)A[x]&&A[x].m(l,null);o(i,f),o(i,h);for(let x=0;x<C.length;x+=1)C[x]&&C[x].m(h,null);v=!0,b||(_=bt(r,"click",n[2]),b=!0)},p(w,[$]){if($&2&&k!==(k=w[1]?Mr:Pr)){if(t){at();const x=t;V(x.$$.fragment,1,0,()=>{he(x,1)}),st()}k?(t=Jr(k,P()),ce(t.$$.fragment),J(t.$$.fragment,1),fe(t,r,null)):t=null}if($&9){R=w[0];let x;for(x=0;x<R.length;x+=1){const L=Or(w,R,x);A[x]?A[x].p(L,$):(A[x]=Nr(L),A[x].c(),A[x].m(l,null))}for(;x<A.length;x+=1)A[x].d(1);A.length=R.length}if($&1){F=w[0];let x;for(x=0;x<F.length;x+=1){const L=Lr(w,F,x);C[x]?C[x].p(L,$):(C[x]=Gr(L),C[x].c(),C[x].m(h,null))}for(;x<C.length;x+=1)C[x].d(1);C.length=F.length}(!v||$&2&&m!==(m="justify-start flex lg:flex flex-col lg:flex-row items-center mt-8 lg:mt-0 space-y-8 lg:space-y-0 space-x-0 lg:space-x-8 "+(w[1]?"":"hidden")))&&a(i,"class",m),(!v||$&2&&M!==(M="lg:h-24 px-8 lg:px-12 py-8 text-white text-lg font-black bg-blackberry-800 lg:bg-transparent w-full h-full z-10 lg:static "+(w[1]?"fixed":"static")))&&a(e,"class",M)},i(w){v||(t&&J(t.$$.fragment,w),v=!0)},o(w){t&&V(t.$$.fragment,w),v=!1},d(w){w&&c(e),t&&he(t),rt(A,w),rt(C,w),b=!1,_()}}}function Ea(n,e,r){let{navItems:t=[]}=e,s=!1;function i(){r(1,s=!s)}function l(f){f.preventDefault(),r(1,s=!1);const h=f.currentTarget,m=new URL(h.href).hash.replace("#",""),M=document.getElementById(m);window.scrollTo({top:M.offsetTop,behavior:"smooth"})}return n.$$set=f=>{"navItems"in f&&r(0,t=f.navItems)},[t,s,i,l]}class Ia extends ke{constructor(e){super(),Se(this,e,Ea,Ta,Te,{navItems:0})}}const Xe={platinum:[],gold:[{src:`${y}/sponsorlogos/eduavenues.png`,alt:"Eduavenues Logo",href:"https://www.eduavenues.com/"}],silver:[{src:`${y}/sponsorlogos/janestreet.png`,alt:"Jane Street Logo",href:"https://www.janestreet.com/"}],bronze:[{src:`${y}/sponsorlogos/collegeramp.png`,alt:"College Ramp Logo",href:"https://www.collegeramp.org/"},{src:`${y}/sponsorlogos/teoco.png`,alt:"TEOCO Logo",href:"https://www.teoco.com/"}],prize:[{src:`${y}/sponsorlogos/quantinuum.png`,alt:"Quantinuum Logo",href:"https://www.quantinuum.com"},{src:`${y}/sponsorlogos/venturecamp.png`,alt:"Venture Camp Logo",href:""}],partners:[{src:`${y}/sponsorlogos/cvent.png`,alt:"Cvent Logo",href:"https://www.cvent.com/"},{src:`${y}/sponsorlogos/tjpartnership.png`,alt:"TJ Partnership Fund Logo",href:"https://www.tjpartnershipfund.org/"}]},Da={title:"PLATINUM TIER",bg:"bg-[#C9D4E5]",cards:Xe.platinum},Ha={title:"GOLD TIER",bg:"bg-[#D6B570]",cards:Xe.gold},Aa={title:"SILVER TIER",bg:"bg-zinc-400",cards:Xe.silver},Ca={title:"BRONZE TIER",bg:"bg-[#AF7A6D]",cards:Xe.bronze},ja={title:"PRIZE TIER",bg:"bg-[#DEDBD2]",cards:Xe.prize},Ja={title:"PARTNERS",bg:"bg-spruce-200",cards:Xe.partners},qr=[Da,Ha,Aa,Ca,ja,Ja];let xt=[{name:"Samvrit Rao",class:"2025",years:3,director:!0,description:"Samvrit is a senior at TJHSST and this is his third year on the HackTJ team and he joined after competing in freshman year. He is passionate about the intersection of computer science and biology and likes to pursue translational projects related to infectious and neurological diseases. Along with Hack TJ, he is an avid member of clubs such as TSA, TJ Speech, and German Honor Society.Outside of school he runs a summer stem program for elementary and middle school kids. In his free time, he likes to read, play basketball, and listen to the newest rap album.",portraitSrc:`${y}/teamportraits/Samvrit.jpg`,order:1},{name:"Saanvi Indukuri",class:"2025",years:3,director:!0,description:"Saanvi is a senior at TJHSST, and she\u2019s excited for her third year on the team. She loves seeing how computer science brings to life so many ideas and ties together to other fields she loves such as biology and astronomy. Other than HackTJ, Saanvi is also involved in Astronomy Club, FPS, Red Cross YTF, and she plays field hockey and lacrosse for TJ.  Outside of school, she loves to read, watch lots and lots of TV, and cook.",portraitSrc:`${y}/teamportraits/Saanvi.JPG`,order:2},{name:"Avni Garg",class:"2025",years:3,director:!1,description:"Avni is a senior at TJHSST, and this is her third year on the team after competing freshman year in HackTJ 9.0! She hopes to make HackTJ a memorable experience for everyone. Avni enjoys math and computer science, especially in the fields of AI and ML. Aside from HackTJ, she is also part of the Varsity Math Team and Computer Team. In her free time, she likes to bike, read, and play card games.",portraitSrc:`${y}/teamportraits/Avni.jpg`,order:3},{name:"Pratyasa Sinha",class:"2025",years:2,director:!1,description:"Pratyasa is a senior at TJHSST, and this is her second year on the team after competing in sophomore year! She loves how computer science can be used to innovate and solve problems in different fields, such as medicine and biology. Outside of HackTJ, Pratyasa is involved in FPS and Red Cross YTF. In her free time, she loves to read, bake (especially cookies), and listen to music.",portraitSrc:`${y}/teamportraits/Pratyasa.JPG`,order:4},{name:"Leah Zhang",class:"2025",years:1,director:!1,description:"Leah, a senior at TJHSST, is pumped for her first year on the team after competing on HackTJ 11.0. She loves applying computer science for real-world applications, particularly in creating assistive technology. In her free time, she\u2019s either drawing or doom-scrolling reels.",portraitSrc:`${y}/teamportraits/Leah.jpg`,order:5},{name:"Megan Sawant",class:"2025",years:1,director:!1,description:"Megan is a senior at TJHSST and this is her first year on the team after competing in HackTJ 11.0. She\u2019s fascinated with bioastronautics, the study of advancing human life in space, along with space policy. Outside of HackTJ, she serves as Student Representative to the Fairfax County School Board and is actively involved in TSA and Techstravaganza. In her free time, you can find her with her dog, spending time with her friends, or watching a comfort show on Netflix.",portraitSrc:`${y}/teamportraits/Megan.jpeg`,order:6},{name:"Chinmayee Yerraguntla",class:"2025",years:1,director:!1,description:"",portraitSrc:`${y}/teamportraits/Chinmayee.jpg`,order:7},{name:"Aanya Gupta",class:"2026",years:2,director:!1,description:"Aanya is a junior at TJHSST, and this is her second year on the team after competing in HackTJ 10.0! She enjoys finding ways to bridge gaps between computer science and biology, solving problems that impact social good. Outside of HackTJ, she is an active participant in Teknos and Coding Lady Colonials! In her free time, she enjoys baking for her friends, listening to music, and rock climbing.",portraitSrc:`${y}/teamportraits/Aanya.jpg`,order:8},{name:"Medhansh Verma",class:"2026",years:1,director:!1,description:"",portraitSrc:`${y}/teamportraits/Medhansh.jpg`,order:9},{name:"Hashmita Nittala",class:"2026",years:1,director:!1,description:"Hashmita is a junior at TJHSST, and she is excited for her first year on the team. She enjoys using her computer science knowledge to solve competitive programming problems and create apps that can help tackle real-world issues. Outside of HackTJ, she is involved in TSA and the Computer Team. In her free time, she enjoys playing basketball, baking, watching TV (especially Suits), and listening to music.",portraitSrc:`${y}/teamportraits/Hashmita.jpg`,order:10},{name:"Shaurya Bisht",class:"2027",years:1,director:!1,description:"Shaurya is a sophomore at TJHSST, and he is excited for his first year on the team after competing in HackTJ 11.0. He is interested in the application of machine learning and gen AI in creating solutions for human flourishing, as well as competitive programming and math. Outside of HackTJ, he is a dedicated member of Varsity Math Team and Computer Team. In his free time, he enjoys playing cricket with friends, spending time with family, and biking.",portraitSrc:`${y}/teamportraits/Shaurya.jpg`,order:11},{name:"Sanya Bhalla",class:"2027",years:1,director:!1,description:"Sanya is a sophomore at TJHSST, and she is excited for her first year on the team after competing in HackTJ 11.0. She is fascinated by the intersection of computer science, particularly artificial intelligence, and its transformative applications in business and engineering. Outside of HackTJ, she is a dedicated member of TSA and Namaste Club. In her free time, she enjoys watching TV, going to the gym, listening to music, and flying planes.",portraitSrc:`${y}/teamportraits/Sanya.jpg`,order:12},{name:"Sidh Jaddu",class:"2027",years:1,director:!1,description:"Sidh is a sophomore at TJHSST and is thrilled for his first year on the team after competing in HackTJ 11.0. He is interested in the applications of machine learning, particularly generative AI, in combating pressing real-world problems like climate change. Outside of HackTJ, he is a member of the Science Olympiad team and an officer and lecturer at Computer Vision club. In his free time, he enjoys hiking on scenic trails all throughout Virginia and exploring the outdoors.",portraitSrc:`${y}/teamportraits/Sidh.jpg`,order:13},{name:"Dhanvinkumar Ganeshkumar",class:"2027",years:1,director:!1,description:"",portraitSrc:`${y}/teamportraits/Dhanvin.jpg`,order:14},{name:"Mr. Hannum",class:"sponsor",years:0,director:!1,description:"",portraitSrc:`${y}/teamportraits/MrHannum.JPG`,order:15},{name:"Mr. Kosek",class:"sponsor",years:0,director:!1,description:"",portraitSrc:`${y}/teamportraits/MrKosek.JPG`,order:16}];xt=xt.filter(n=>!n.hidden);xt.sort((n,e)=>n.order-e.order);const Ur=xt,Ma="AIzaSyDmX0JhnwxUOSSKLjfxMxoFbwljPsSMi7Y";function Wr(n,e,r){const t=n.slice();return t[1]=e[r].description,t[2]=e[r].portraitSrc,t[3]=e[r].name,t}function Kr(n,e,r){const t=n.slice();return t[6]=e[r].bg,t[7]=e[r].cards,t[8]=e[r].title,t}function Ba(n){let e,r;return{c(){e=g("a"),r=E("\u2003Register\u2003"),this.h()},l(t){e=p(t,"A",{href:!0,class:!0});var s=d(e);r=I(s,"\u2003Register\u2003"),s.forEach(c),this.h()},h(){a(e,"href",y+"/register"),a(e,"class","block text-center py-3 bg-[#83BDEC] hover:bg-theme-200 text-blueberry-800 text-xl font-bold rounded-2xl px-8")},m(t,s){H(t,e,s),o(e,r)},p:O,d(t){t&&c(e)}}}function Qr(n){let e,r;return e=new xa({props:{bg:n[6],cardsData:n[7],title:n[8]}}),{c(){ce(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,s){fe(e,t,s),r=!0},p:O,i(t){r||(J(e.$$.fragment,t),r=!0)},o(t){V(e.$$.fragment,t),r=!1},d(t){he(e,t)}}}function Yr(n){let e,r;return e=new da({props:{description:n[1],portraitSrc:n[2],name:n[3]}}),{c(){ce(e.$$.fragment)},l(t){ye(e.$$.fragment,t)},m(t,s){fe(e,t,s),r=!0},p:O,i(t){r||(J(e.$$.fragment,t),r=!0)},o(t){V(e.$$.fragment,t),r=!1},d(t){he(e,t)}}}function $a(n){let e,r,t=Ur,s=[];for(let l=0;l<t.length;l+=1)s[l]=Yr(Wr(n,t,l));const i=l=>V(s[l],1,1,()=>{s[l]=null});return{c(){e=g("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=p(l,"DIV",{class:!0});var f=d(e);for(let h=0;h<s.length;h+=1)s[h].l(f);f.forEach(c),this.h()},h(){a(e,"class","mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8")},m(l,f){H(l,e,f);for(let h=0;h<s.length;h+=1)s[h]&&s[h].m(e,null);r=!0},p(l,f){if(f&0){t=Ur;let h;for(h=0;h<t.length;h+=1){const m=Wr(l,t,h);s[h]?(s[h].p(m,f),J(s[h],1)):(s[h]=Yr(m),s[h].c(),J(s[h],1),s[h].m(e,null))}for(at(),h=t.length;h<s.length;h+=1)i(h);st()}},i(l){if(!r){for(let f=0;f<t.length;f+=1)J(s[f]);r=!0}},o(l){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)V(s[f]);r=!1},d(l){l&&c(e),rt(s,l)}}}function Va(n){let e,r,t,s,i,l,f,h,m,M,v,b,_,k,P=or.iteration+"",R,A,F,C,w,$,x,L,$e,U,W,Ee,_t,wt,Ie,cr,yt,Ve,de,Q,ee,Fe,kt,N,te,re,ae,se,lt,z,De,St,Pe,Tt,Et,me,Le,It,Dt,Oe,Ht,At,ge,He,Ct,jt,Ae,Jt,ot,K,pe,Re,Mt,Bt,Y,$t,le,fr=or.iteration+"",Vt,Ft,Pt,Ce,Lt,Ot,Rt,nt,G,Ne,Nt,zt,ze,Gt,qt,ve,it,be,xe,q,Ge,Ut,Wt,qe,hr=nr.name+"",Kt,Qt,Ue,ur=nr.address+"",Yt,Zt,oe,Xt,er,je,ct,Je,ft;s=new Ia({props:{navItems:n[0]}});let ne=Br.isOpen&&Ba(),Me=qr,j=[];for(let u=0;u<Me.length;u+=1)j[u]=Qr(Kr(n,Me,u));const Zr=u=>V(j[u],1,1,()=>{j[u]=null});return ve=new oa({props:{unstyled:!0,classBg:"fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-blackberry-800/[0.8] z-10",classWindowWrap:"relative m-4 max-h-full",classWindow:"rounded-2xl bg-[#A7D0F1] text-black p-6 md:p-8 max-w-xl max-h-full m-auto relative",closeButton:na,$$slots:{default:[$a]},$$scope:{ctx:n}}}),je=new ya({}),Je=new la({props:{class:"mt-8"}}),{c(){e=g("script"),t=S(),ce(s.$$.fragment),i=S(),l=g("div"),f=g("div"),h=g("div"),m=g("img"),v=S(),b=g("div"),_=E(`HackTJ
				
				`),k=g("sup"),R=E(P),A=S(),F=g("h3"),C=g("span"),w=E("March 8-9, Cvent"),$=S(),x=g("br"),L=E(`
				Build the next greatest thing - oh, and bring your friends along too.`),$e=S(),U=g("div"),ne&&ne.c(),W=S(),Ee=g("a"),_t=E("Schedule"),wt=S(),Ie=g("img"),yt=S(),Ve=g("div"),de=g("div"),Q=Z("svg"),ee=Z("rect"),Fe=Z("path"),kt=S(),N=Z("svg"),te=Z("rect"),re=Z("rect"),ae=Z("rect"),se=Z("rect"),lt=S(),z=g("section"),De=g("h1"),St=E("Welcome to the Future Generation of "),Pe=g("span"),Tt=E("Coders"),Et=S(),me=g("div"),Le=g("p"),It=E(`Do you get excited watching your ideas come to life? Ever wanted to build the next Snapchat or
			create an Amazon Alexa skill? Program a drone? Create programs using the latest machine
			learning or virtual reality technology? Come to HackTJ to make new friends, build mind-blowing
			projects, attend workshops to learn new tricks, and have a fantastic time!`),Dt=S(),Oe=g("p"),Ht=E(`HackTJ is a student-run hackathon where you will have 24 hours to learn how to code and/or
			work with your friends to make your idea come to life. HackTJ is open to any and all current
			high school students. If you're not a high school student but would like to attend, consider
			coming as a judge, mentor, or volunteer.`),At=S(),ge=g("div"),He=g("a"),Ct=E("FAQ"),jt=S(),Ae=g("a"),Jt=E("Beginner Resources"),ot=S(),K=g("section"),pe=g("div"),Re=g("h1"),Mt=E("Sponsors"),Bt=S(),Y=g("h3"),$t=E("Interested in sponsoring? Check out our "),le=g("a"),Vt=E(fr),Ft=E(" sponsorship packet"),Pt=E(`
			or email us at
			`),Ce=g("a"),Lt=E("sponsor@hacktj.org"),Ot=E(" if you're interested or have any questions!"),Rt=S();for(let u=0;u<j.length;u+=1)j[u].c();nt=S(),G=g("section"),Ne=g("h1"),Nt=E("Meet The Team"),zt=S(),ze=g("h3"),Gt=E("Hello, us!"),qt=S(),ce(ve.$$.fragment),it=S(),be=g("section"),xe=g("div"),q=g("div"),Ge=g("h1"),Ut=E("Location"),Wt=S(),qe=g("h3"),Kt=E(hr),Qt=S(),Ue=g("h3"),Yt=E(ur),Zt=S(),oe=g("a"),Xt=E("Open in Google Maps"),er=S(),ce(je.$$.fragment),ct=S(),ce(Je.$$.fragment),this.h()},l(u){const D=aa("svelte-15xtez0",document.head);e=p(D,"SCRIPT",{src:!0});var ie=d(e);ie.forEach(c),D.forEach(c),t=T(u),ye(s.$$.fragment,u),i=T(u),l=p(u,"DIV",{class:!0});var B=d(l);f=p(B,"DIV",{class:!0});var Be=d(f);h=p(Be,"DIV",{class:!0});var _e=d(h);m=p(_e,"IMG",{alt:!0,src:!0,class:!0}),v=T(_e),b=p(_e,"DIV",{class:!0});var tr=d(b);_=I(tr,`HackTJ
				
				`),k=p(tr,"SUP",{class:!0,style:!0});var dr=d(k);R=I(dr,P),dr.forEach(c),tr.forEach(c),A=T(_e),F=p(_e,"H3",{class:!0});var et=d(F);C=p(et,"SPAN",{class:!0});var mr=d(C);w=I(mr,"March 8-9, Cvent"),mr.forEach(c),$=T(et),x=p(et,"BR",{}),L=I(et,`
				Build the next greatest thing - oh, and bring your friends along too.`),et.forEach(c),$e=T(_e),U=p(_e,"DIV",{class:!0});var ht=d(U);ne&&ne.l(ht),W=T(ht),Ee=p(ht,"A",{href:!0,class:!0});var gr=d(Ee);_t=I(gr,"Schedule"),gr.forEach(c),ht.forEach(c),_e.forEach(c),wt=T(Be),Ie=p(Be,"IMG",{alt:!0,src:!0,class:!0}),Be.forEach(c),yt=T(B),Ve=p(B,"DIV",{class:!0});var pr=d(Ve);de=p(pr,"DIV",{class:!0});var ut=d(de);Q=X(ut,"svg",{class:!0,viewBox:!0,fill:!0,xmlns:!0});var rr=d(Q);ee=X(rr,"rect",{x:!0,width:!0,height:!0,rx:!0,fill:!0}),d(ee).forEach(c),Fe=X(rr,"path",{d:!0,fill:!0}),d(Fe).forEach(c),rr.forEach(c),kt=T(ut),N=X(ut,"svg",{class:!0,viewBox:!0,fill:!0,xmlns:!0});var tt=d(N);te=X(tt,"rect",{x:!0,width:!0,height:!0,rx:!0,fill:!0}),d(te).forEach(c),re=X(tt,"rect",{x:!0,width:!0,height:!0,rx:!0,fill:!0}),d(re).forEach(c),ae=X(tt,"rect",{x:!0,width:!0,height:!0,rx:!0,fill:!0}),d(ae).forEach(c),se=X(tt,"rect",{x:!0,width:!0,height:!0,rx:!0,fill:!0}),d(se).forEach(c),tt.forEach(c),ut.forEach(c),pr.forEach(c),B.forEach(c),lt=T(u),z=p(u,"SECTION",{class:!0,id:!0});var We=d(z);De=p(We,"H1",{class:!0});var ar=d(De);St=I(ar,"Welcome to the Future Generation of "),Pe=p(ar,"SPAN",{class:!0});var vr=d(Pe);Tt=I(vr,"Coders"),vr.forEach(c),ar.forEach(c),Et=T(We),me=p(We,"DIV",{class:!0});var dt=d(me);Le=p(dt,"P",{class:!0});var br=d(Le);It=I(br,`Do you get excited watching your ideas come to life? Ever wanted to build the next Snapchat or
			create an Amazon Alexa skill? Program a drone? Create programs using the latest machine
			learning or virtual reality technology? Come to HackTJ to make new friends, build mind-blowing
			projects, attend workshops to learn new tricks, and have a fantastic time!`),br.forEach(c),Dt=T(dt),Oe=p(dt,"P",{class:!0});var xr=d(Oe);Ht=I(xr,`HackTJ is a student-run hackathon where you will have 24 hours to learn how to code and/or
			work with your friends to make your idea come to life. HackTJ is open to any and all current
			high school students. If you're not a high school student but would like to attend, consider
			coming as a judge, mentor, or volunteer.`),xr.forEach(c),dt.forEach(c),At=T(We),ge=p(We,"DIV",{class:!0});var mt=d(ge);He=p(mt,"A",{href:!0,class:!0});var _r=d(He);Ct=I(_r,"FAQ"),_r.forEach(c),jt=T(mt),Ae=p(mt,"A",{href:!0,class:!0});var wr=d(Ae);Jt=I(wr,"Beginner Resources"),wr.forEach(c),mt.forEach(c),We.forEach(c),ot=T(u),K=p(u,"SECTION",{class:!0,id:!0});var gt=d(K);pe=p(gt,"DIV",{class:!0});var pt=d(pe);Re=p(pt,"H1",{class:!0});var yr=d(Re);Mt=I(yr,"Sponsors"),yr.forEach(c),Bt=T(pt),Y=p(pt,"H3",{class:!0});var Ke=d(Y);$t=I(Ke,"Interested in sponsoring? Check out our "),le=p(Ke,"A",{class:!0,href:!0,target:!0});var sr=d(le);Vt=I(sr,fr),Ft=I(sr," sponsorship packet"),sr.forEach(c),Pt=I(Ke,`
			or email us at
			`),Ce=p(Ke,"A",{class:!0,href:!0});var kr=d(Ce);Lt=I(kr,"sponsor@hacktj.org"),kr.forEach(c),Ot=I(Ke," if you're interested or have any questions!"),Ke.forEach(c),pt.forEach(c),Rt=T(gt);for(let lr=0;lr<j.length;lr+=1)j[lr].l(gt);gt.forEach(c),nt=T(u),G=p(u,"SECTION",{class:!0,id:!0});var Qe=d(G);Ne=p(Qe,"H1",{class:!0});var Sr=d(Ne);Nt=I(Sr,"Meet The Team"),Sr.forEach(c),zt=T(Qe),ze=p(Qe,"H3",{class:!0});var Tr=d(ze);Gt=I(Tr,"Hello, us!"),Tr.forEach(c),qt=T(Qe),ye(ve.$$.fragment,Qe),Qe.forEach(c),it=T(u),be=p(u,"SECTION",{class:!0,id:!0});var Er=d(be);xe=p(Er,"DIV",{class:!0});var vt=d(xe);q=p(vt,"DIV",{class:!0});var we=d(q);Ge=p(we,"H1",{class:!0});var Ir=d(Ge);Ut=I(Ir,"Location"),Ir.forEach(c),Wt=T(we),qe=p(we,"H3",{class:!0});var Dr=d(qe);Kt=I(Dr,hr),Dr.forEach(c),Qt=T(we),Ue=p(we,"H3",{class:!0});var Hr=d(Ue);Yt=I(Hr,ur),Hr.forEach(c),Zt=T(we),oe=p(we,"A",{href:!0,target:!0,rel:!0,class:!0});var Ar=d(oe);Xt=I(Ar,"Open in Google Maps"),Ar.forEach(c),we.forEach(c),er=T(vt),ye(je.$$.fragment,vt),vt.forEach(c),Er.forEach(c),ct=T(u),ye(Je.$$.fragment,u),this.h()},h(){e.defer=!0,e.async=!0,ue(e.src,r="https://maps.googleapis.com/maps/api/js?key="+Ma)||a(e,"src",r),a(m,"alt","TJHSST Dome"),ue(m.src,M=y+"/dome.svg")||a(m,"src",M),a(m,"class","block lg:hidden mb-3 w-24 h-24"),a(k,"class","text-3xl md:text-4xl font-mono align-super"),sa(k,"color","rgba(161,206,241,255)"),a(b,"class","text-white font-bold text-6xl md:text-8xl"),a(C,"class","text-[#A7D0F1] font-bold"),a(F,"class","text-white font-medium text-xl md:text-2xl w-3/4"),a(Ee,"href",y+"/schedule"),a(Ee,"class","block text-center py-3 bg-[rgba(161,206,241,255)] hover:bg-[#83BDEC] text-blueberry-800 text-xl font-bold rounded-2xl px-8"),a(U,"class","flex flex-col md:flex-row mt-6 space-y-3 md:space-y-0 space-x-0 md:space-x-3"),a(h,"class","flex flex-col"),a(Ie,"alt","TJHSST Dome"),ue(Ie.src,cr=y+"/dome.svg")||a(Ie,"src",cr),a(Ie,"class","hidden lg:flex self-end max-h-full"),a(f,"class","flex justify-start lg:justify-around items-center mt-18 px-8 md:px-12 h-[calc(100%_-_8rem)]"),a(ee,"x","-326"),a(ee,"width","599"),a(ee,"height","61"),a(ee,"rx","30.5"),a(ee,"fill","#B8F1EF"),a(Fe,"d","M321 30.5C321 13.6553 334.655 0 351.5 0H1441V61H351.5C334.655 61 321 47.3447 321 30.5V30.5Z"),a(Fe,"fill","#a2cef1"),a(Q,"class","-mt-1 mb-2 md:mb-6"),a(Q,"viewBox","0 0 1440 61"),a(Q,"fill","none"),a(Q,"xmlns","http://www.w3.org/2000/svg"),a(te,"x","-323"),a(te,"width","470"),a(te,"height","61"),a(te,"rx","30.5"),a(te,"fill","#F3F7F0"),a(re,"x","195"),a(re,"width","271"),a(re,"height","61"),a(re,"rx","30.5"),a(re,"fill","#B8DBD9"),a(ae,"x","514"),a(ae,"width","458"),a(ae,"height","61"),a(ae,"rx","30.5"),a(ae,"fill","#6AB4B0"),a(se,"x","1020"),a(se,"width","599"),a(se,"height","61"),a(se,"rx","30.5"),a(se,"fill","#799bb6"),a(N,"class","mb-6"),a(N,"viewBox","0 0 1440 61"),a(N,"fill","none"),a(N,"xmlns","http://www.w3.org/2000/svg"),a(de,"class","hidden lg:block"),a(Ve,"class","w-full absolute bottom-0 lg:w-auto lg:relative"),a(l,"class","h-[calc(100vh_-_8rem)] min-h-[512px]"),a(Pe,"class","text-[#A7D0F1]"),a(De,"class","text-4xl md:text-6xl lg:text-7xl font-black"),a(Le,"class","flex-1"),a(Oe,"class","flex-1"),a(me,"class","flex flex-col lg:flex-row mt-4 text-lg space-y-8 lg:space-y-0 lg:space-x-8"),a(He,"href",y+"/faq"),a(He,"class","block text-center py-3 bg-[#A7D0F1] hover:bg-[#83BDEC] text-blueberry-800 text-xl font-bold rounded-2xl px-8"),a(Ae,"href",y+"/resources"),a(Ae,"class","block text-center py-3 bg-blueberry-200 text-blueberry-800 text-xl font-bold rounded-2xl px-8 hover:bg-blueberry-300"),a(ge,"class","flex flex-col md:flex-row mt-6 space-y-3 md:space-y-0 space-x-0 md:space-x-3"),a(z,"class","mt-8 p-8 md:p-12 text-blueberry-200"),a(z,"id","about"),a(Re,"class","text-4xl md:text-6xl font-black text-white"),a(le,"class","underline text-[#A7D0F1] hover:text-[#83BDEC]"),a(le,"href",y+"/"+or.sponsorshipPacket),a(le,"target","_blank"),a(Ce,"class","underline text-[#A7D0F1] hover:text-[#83BDEC]"),a(Ce,"href","mailto:sponsor@hacktj.org"),a(Y,"class","mt-2 text-xl md:text-2xl font-bold text-blueberry-200"),a(pe,"class","p-8 md:p-12"),a(K,"class","mt-6 text-blueberry-200"),a(K,"id","sponsors"),a(Ne,"class","text-4xl md:text-6xl font-black text-white"),a(ze,"class","mt-2 text-xl md:text-2xl font-bold text-blueberry-200"),a(G,"class","mt-6 text-blueberry-200 p-8 md:p-12"),a(G,"id","team"),a(Ge,"class","text-5xl md:text-7xl font-black text-white"),a(qe,"class","text-xl font-black text-white mt-3"),a(Ue,"class","font-medium text-white mt-1"),a(oe,"href",nr.mapsLink),a(oe,"target","_blank"),a(oe,"rel","noopener noreferred"),a(oe,"class","block mt-4 text-center py-3 bg-[#A7D0F1] hover:bg-[#83BDEC] text-blueberry-800 text-xl font-bold rounded-2xl"),a(q,"class","w-full lg:w-2/3"),a(xe,"class","flex flex-col lg:flex-row items-center justify-center lg:space-x-32 space-y-6 lg:space-y-0 m-auto"),a(be,"class","mt-6 text-blueberry-200 p-8 md:p-12"),a(be,"id","location")},m(u,D){o(document.head,e),H(u,t,D),fe(s,u,D),H(u,i,D),H(u,l,D),o(l,f),o(f,h),o(h,m),o(h,v),o(h,b),o(b,_),o(b,k),o(k,R),o(h,A),o(h,F),o(F,C),o(C,w),o(F,$),o(F,x),o(F,L),o(h,$e),o(h,U),ne&&ne.m(U,null),o(U,W),o(U,Ee),o(Ee,_t),o(f,wt),o(f,Ie),o(l,yt),o(l,Ve),o(Ve,de),o(de,Q),o(Q,ee),o(Q,Fe),o(de,kt),o(de,N),o(N,te),o(N,re),o(N,ae),o(N,se),H(u,lt,D),H(u,z,D),o(z,De),o(De,St),o(De,Pe),o(Pe,Tt),o(z,Et),o(z,me),o(me,Le),o(Le,It),o(me,Dt),o(me,Oe),o(Oe,Ht),o(z,At),o(z,ge),o(ge,He),o(He,Ct),o(ge,jt),o(ge,Ae),o(Ae,Jt),H(u,ot,D),H(u,K,D),o(K,pe),o(pe,Re),o(Re,Mt),o(pe,Bt),o(pe,Y),o(Y,$t),o(Y,le),o(le,Vt),o(le,Ft),o(Y,Pt),o(Y,Ce),o(Ce,Lt),o(Y,Ot),o(K,Rt);for(let ie=0;ie<j.length;ie+=1)j[ie]&&j[ie].m(K,null);H(u,nt,D),H(u,G,D),o(G,Ne),o(Ne,Nt),o(G,zt),o(G,ze),o(ze,Gt),o(G,qt),fe(ve,G,null),H(u,it,D),H(u,be,D),o(be,xe),o(xe,q),o(q,Ge),o(Ge,Ut),o(q,Wt),o(q,qe),o(qe,Kt),o(q,Qt),o(q,Ue),o(Ue,Yt),o(q,Zt),o(q,oe),o(oe,Xt),o(xe,er),fe(je,xe,null),H(u,ct,D),fe(Je,u,D),ft=!0},p(u,[D]){if(Br.isOpen&&ne.p(u,D),D&0){Me=qr;let B;for(B=0;B<Me.length;B+=1){const Be=Kr(u,Me,B);j[B]?(j[B].p(Be,D),J(j[B],1)):(j[B]=Qr(Be),j[B].c(),J(j[B],1),j[B].m(K,null))}for(at(),B=Me.length;B<j.length;B+=1)Zr(B);st()}const ie={};D&2048&&(ie.$$scope={dirty:D,ctx:u}),ve.$set(ie)},i(u){if(!ft){J(s.$$.fragment,u);for(let D=0;D<Me.length;D+=1)J(j[D]);J(ve.$$.fragment,u),J(je.$$.fragment,u),J(Je.$$.fragment,u),ft=!0}},o(u){V(s.$$.fragment,u),j=j.filter(Boolean);for(let D=0;D<j.length;D+=1)V(j[D]);V(ve.$$.fragment,u),V(je.$$.fragment,u),V(Je.$$.fragment,u),ft=!1},d(u){c(e),u&&c(t),he(s,u),u&&c(i),u&&c(l),ne&&ne.d(),u&&c(lt),u&&c(z),u&&c(ot),u&&c(K),rt(j,u),u&&c(nt),u&&c(G),he(ve),u&&c(it),u&&c(be),he(je),u&&c(ct),he(Je,u)}}}function Fa(n){return[[{text:"About",href:"#about"},{text:"Sponsors",href:"#sponsors"},{text:"Team",href:"#team"},{text:"Location",href:"#location"},{text:"FAQ",href:`${y}/faq`,button:{class:"bg-[#A2CEF1] hover:bg-[#83BDEC]"}},{text:"Schedule",href:`${y}/schedule`,button:{class:"bg-[#8EADF6] hover:bg-[#6892F3]"}},{text:"Resources",href:`${y}/resources`,button:{class:"bg-blueberry-200 hover:bg-blueberry-300"}},{text:"Past Winners",href:`${y}/winners`,button:{class:"bg-spruce-200 hover:bg-spruce-300"}}]]}class Ga extends ke{constructor(e){super(),Se(this,e,Fa,Va,Te,{})}}export{Ga as default};
