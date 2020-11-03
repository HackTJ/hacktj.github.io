/*! For license information please see 8.daa33a9a.chunk.js.LICENSE.txt */
(this["webpackJsonphacktj-2020v2"]=this["webpackJsonphacktj-2020v2"]||[]).push([[8,10,12],{179:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),c=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{className:"anchor",id:"notfound",href:"#notfound"},"Page Not Found"),r.a.createElement("section",{id:"notfound"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"animation-container vertical top right extra-right extra-height"},r.a.createElement("div",{className:"animated"})),r.a.createElement("h1",{className:"section-title",style:{marginTop:"20vh"}},"Error 404"),r.a.createElement("p",{className:"large",style:{textAlign:"center"}},"We couldn't find that page, sorry."))))},i=n(37);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.default,null),r.a.createElement(c,null),r.a.createElement(i.default,null))}},26:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},27:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},28:function(e,t,n){"use strict";n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return l})),n.d(t,"a",(function(){return u})),n.d(t,"k",(function(){return f})),n.d(t,"j",(function(){return d})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return b})),n.d(t,"f",(function(){return v})),n.d(t,"e",(function(){return j}));var a,r=n(3),o=n.n(r);function c(e,t){return void 0===e&&(e=""),void 0===t&&(t=a),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function i(e,t){var n={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(n[a]=e[a])})),n}function l(e,t){for(var n,a=Array.isArray(t)?t:[t],r=a.length,o={};r>0;)o[n=a[r-=1]]=e[n];return o}var s="object"===typeof window&&window.Element||function(){};function u(e,t,n){if(!(e[t]instanceof s))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var f=o.a.oneOfType([o.a.string,o.a.func,u,o.a.shape({current:o.a.any})]),d=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},m=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],b=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],g=!("undefined"===typeof window||!window.document||!window.document.createElement);function h(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function v(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function y(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!v(e))return!1;var t=h(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&g){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function E(e){return null!==e&&(Array.isArray(e)||g&&"number"===typeof e.length)}function j(e,t){var n=y(e);return t?E(n)?n:null===n?[]:[n]:E(n)?n[0]:n}},29:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},30:function(e,t,n){"use strict";function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return a}))},31:function(e,t,n){"use strict";function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return a}))},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(26),c=n(29),i=n(3),l=n.n(i),s=n(27),u=n.n(s),f=n(28),d={light:l.a.bool,dark:l.a.bool,full:l.a.bool,fixed:l.a.string,sticky:l.a.string,color:l.a.string,role:l.a.string,tag:f.j,className:l.a.string,cssModule:l.a.object,expand:l.a.oneOfType([l.a.bool,l.a.string])},p=function(e){var t,n=e.expand,a=e.className,i=e.cssModule,l=e.light,s=e.dark,d=e.fixed,p=e.sticky,m=e.color,b=e.tag,g=Object(c.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),h=Object(f.g)(u()(a,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(n),((t={"navbar-light":l,"navbar-dark":s})["bg-"+m]=m,t["fixed-"+d]=d,t["sticky-"+p]=p,t)),i);return r.a.createElement(b,Object(o.a)({},g,{className:h}))};p.propTypes=d,p.defaultProps={tag:"nav",expand:!1};var m=p,b={tabs:l.a.bool,pills:l.a.bool,vertical:l.a.oneOfType([l.a.bool,l.a.string]),horizontal:l.a.string,justified:l.a.bool,fill:l.a.bool,navbar:l.a.bool,card:l.a.bool,tag:f.j,className:l.a.string,cssModule:l.a.object},g=function(e){var t=e.className,n=e.cssModule,a=e.tabs,i=e.pills,l=e.vertical,s=e.horizontal,d=e.justified,p=e.fill,m=e.navbar,b=e.card,g=e.tag,h=Object(c.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),v=Object(f.g)(u()(t,m?"navbar-nav":"nav",!!s&&"justify-content-"+s,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(l),{"nav-tabs":a,"card-header-tabs":b&&a,"nav-pills":i,"card-header-pills":b&&i,"nav-justified":d,"nav-fill":p}),n);return r.a.createElement(g,Object(o.a)({},h,{className:v}))};g.propTypes=b,g.defaultProps={tag:"ul",vertical:!1};var h=g,v={tag:f.j,active:l.a.bool,className:l.a.string,cssModule:l.a.object},y=function(e){var t=e.className,n=e.cssModule,a=e.active,i=e.tag,l=Object(c.a)(e,["className","cssModule","active","tag"]),s=Object(f.g)(u()(t,"nav-item",!!a&&"active"),n);return r.a.createElement(i,Object(o.a)({},l,{className:s}))};y.propTypes=v,y.defaultProps={tag:"li"};var E=y,j=n(30),k=n(31),x={tag:f.j,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),disabled:l.a.bool,active:l.a.bool,className:l.a.string,cssModule:l.a.object,onClick:l.a.func,href:l.a.any},O=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(j.a)(n)),n}Object(k.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,a=e.active,i=e.tag,l=e.innerRef,s=Object(c.a)(e,["className","cssModule","active","tag","innerRef"]),d=Object(f.g)(u()(t,"nav-link",{disabled:s.disabled,active:a}),n);return r.a.createElement(i,Object(o.a)({},s,{ref:l,onClick:this.onClick,className:d}))},t}(r.a.Component);O.propTypes=x,O.defaultProps={tag:"a"};var N=O;n(33),t.default=function(){return a.createElement(m,{sticky:"top",className:"navcontainer",bg:"#64d861",style:{position:"sticky",top:"0px",display:"flex",flexDirection:"row",zIndex:1e3}},a.createElement(h,{className:"nav justify-content-center",navbar:!0},a.createElement(E,null,a.createElement(N,{href:"#intro"},"Intro")),a.createElement(E,null,a.createElement(N,{href:"#faq"},"FAQ")),a.createElement(E,null,a.createElement(N,{href:"#sponsor"},"Sponsors")),a.createElement(E,null,a.createElement(N,{href:"#schedule"},"Schedule")),a.createElement(E,null,a.createElement(N,{href:"#team"},"Team"))))}},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=(n(34),function(e){return a.createElement("span",{style:{visibility:"hidden"}},e)}),o=a.createElement("a",{className:"social pe-so-twitter",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/HackTJOfficial"},r("Twitter")),c=a.createElement("a",{className:"social pe-so-facebook empty",target:"_blank",rel:"noopener noreferrer",href:"https://facebook.com/HackTJOfficial"},r("Facebook")),i=a.createElement("a",{className:"social pe-so-instagram empty",target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/hacktjofficial"},r("Instagram")),l=function(){return a.createElement("div",{className:"social-links"},o,c,i)},s=function(){return a.createElement("a",{id:"mlh-trust-badge",href:"https://mlh.io/seasons/na-2021/events?utm_source=na-hacktahon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white",target:"_blank",rel:"noopener noreferrer",style:{display:"block",maxWidth:"100px",minWidth:"60px",position:"fixed",right:"50px",top:0,width:"10%",zIndex:1e4}},a.createElement("img",{src:"https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg",alt:"Major League Hacking 2021 Hackathon Season",style:{width:"100%"}}))};n(35),t.default=function(){return a.createElement(a.Fragment,null,a.createElement("section",{className:"green register footer"},a.createElement("div",{className:"container"},a.createElement("div",{className:"register-button-block-old bottom"},a.createElement("div",{className:"register-text"},"Be sure to follow our Social Media pages for updates!")),a.createElement(l,null))),a.createElement(s,null))}}}]);
//# sourceMappingURL=8.daa33a9a.chunk.js.map