(this["webpackJsonphacktj-2021"]=this["webpackJsonphacktj-2021"]||[]).push([[9],{167:function(e,t,n){"use strict";n.r(t);var a=n(2),o=n(38),s=n(10),r={weekday:"long",month:"long",day:"numeric"},c=o.a.startDate.toLocaleDateString("en-US",r),i=o.a.endDate.toLocaleDateString("en-US",r),l=[{question:"What is HackTJ?",answer:Object(a.jsx)("p",{children:"HackTJ is a student-run hackathon where you will have 24 hours to learn how to code and/or work with your friends to make your idea come to life."})},{question:"When is HackTJ?",answer:Object(a.jsxs)("span",{children:["HackTJ will start on ",c," and run until ",i,"."]})},{question:"Who can attend?",answer:Object(a.jsx)("span",{children:"HackTJ is open to any and all current high school students. If you're not a high school student but would like to attend, consider coming as a judge, mentor, or volunteer."})},{question:"Is there any cost?",answer:Object(a.jsx)("span",{children:"Nope! Thanks to our sponsors, HackTJ is completely free!"})},{question:"Is there a deadline?",answer:Object(a.jsx)("span",{children:"Registration for participants, judges, mentors, and volunteers opens on September 25 at 8 p.m. Registration for participants closes on October 16\u2014this is a hard deadline; we do not accept submissions after 8 p.m. Judges, mentors, and volunteers will be able to register until the start of the event."})},{question:"Do you have a code of conduct?",answer:Object(a.jsxs)("span",{children:["Yes, good question! We have adopted the"," ",Object(a.jsx)(s.b,{to:"conduct.pdf",target:"_blank",rel:"noopener noreferrer",children:"MLH code of conduct"}),", which all attendees will be required to adhere to."]})},{question:"Isn't hacking illegal?",answer:Object(a.jsx)("span",{children:'In the context of a hackathon, "hacking" is to build a real application over the length of the event. It\'s important to not confuse this with illegal hacking, which is gaining unauthorized access to a computer.'})},{question:"Do I need a team?",answer:Object(a.jsx)("span",{children:"If you already have a team of 2-4 people you want to work with, that's awesome! If not don't worry because we'll have an opportunity for people to join a team if they need one."})},{question:"What if I don't know how to code?",answer:Object(a.jsx)("span",{children:"Come to HackTJ! Coding is fun, creative, and an important skill, and HackTJ is the perfect way to learn. We'll have workshops and mentors to help guide you."})},{question:"What prizes can I win?",answer:Object(a.jsx)("span",{children:"HackTJ hosts prizes for the best projects in the following categories: Overall Hack, Web App, Mobile App,Design, Social Impact Hack, and Beginner Hack (first-year coder teams). Major League Hacking and some of our partners also host their own Sponsored Prizes, which you can explore when the 7.5 Devpost goes live."})},{question:"How do I register?",answer:Object(a.jsxs)("ol",{children:[Object(a.jsx)("li",{children:"At 8 p.m. on September 25, a button will appear at the top of this site. Click this."}),Object(a.jsx)("li",{children:"You will be redirected to a page where you can click the appropriate form."}),Object(a.jsxs)("li",{children:["Fill out the questions. Near the end, there will be a few questions where you can upload your forms.",Object(a.jsx)("ul",{children:Object(a.jsx)("li",{children:"In order to speed up the registration process, print out these forms, fill them out, and scan them beforehand."})})]})]})},{question:"How are tickets decisions made?",answer:Object(a.jsx)("span",{children:"Tickets decisisons are made based on a variety of factors, including the registration time. Sign up quickly to increase the chance that you are given a HackTJ 8.0 ticket!"})}],h=n(9),d=n(0),u=n(64),p=n.n(u),j=function(e){var t=e.question,n=e.answer,o=e.collapsed,s=Object(d.useState)(0),r=Object(h.a)(s,2),c=r[0],i=r[1],l=Object(d.useRef)(null),u=Object(d.useCallback)((function(){l.current.style.height="".concat(o?0:c,"px")}),[o,c]);return Object(d.useEffect)((function(){i(l.current.scrollHeight),u()}),[u]),Object(d.useEffect)((function(){u()}),[u,o]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:p.a.header,children:t}),Object(a.jsx)("div",{className:p.a.content,ref:l,children:Object(a.jsx)("div",{children:n})})]})},f=Object(d.memo)(j),b=n(65),w=n.n(b),m=function(e){var t=e.data,n=Object(d.useState)(-1),o=Object(h.a)(n,2),s=o[0],r=o[1];return Object(a.jsx)("div",{className:"".concat(w.a.wrapper),children:t.map((function(e,t){return Object(a.jsx)("div",{className:"".concat(w.a.container," ").concat(s===t?w.a.selected:""," ").concat(s-1===t?w.a.roundBottom:""),onClick:function(){r(s===t?-1:t)},children:Object(a.jsx)(f,{question:e.question,answer:e.answer,collapsed:s!==t})},t)}))})},g=Object(d.memo)(m);n(66),t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("a",{className:"anchor",id:"faq",href:"#faq",children:"FAQ"}),Object(a.jsxs)("section",{className:"green faq",children:[Object(a.jsx)("h1",{className:"section-title",children:"FAQ"}),Object(a.jsxs)("div",{className:"faq-wrapper",children:[Object(a.jsx)(g,{data:l.slice(0,l.length/2)}),Object(a.jsx)(g,{data:l.slice(l.length/2)})]}),Object(a.jsxs)("p",{className:"large bottom-question",children:["If your question is not answered here, just ask us:"," ",Object(a.jsx)("a",{href:"mailto:hello@hacktj.org",target:"_blank",rel:"noopener noreferrer",children:"hello@hacktj.org"}),"."]})]})]})}},38:function(e,t,n){"use strict";var a={startDate:new Date("2021-04-10"),endDate:new Date("2021-04-11")};Object.freeze(a),t.a=a},64:function(e,t,n){e.exports={header:"card_header__2jCQN",content:"card_content__JhgOj",faq:"card_faq__wftL1",wrapper:"card_wrapper__3Xr5A",container:"card_container__1SuQf",selected:"card_selected__1AbNP"}},65:function(e,t,n){e.exports={wrapper:"faquestion_wrapper__2wjbW",container:"faquestion_container__1ySUe",roundBottom:"faquestion_roundBottom__31-OX",selected:"faquestion_selected__2FPFd"}},66:function(e,t,n){}}]);
//# sourceMappingURL=9.60b3d002.chunk.js.map