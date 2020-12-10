/*! For license information please see 8.2d245b23.chunk.js.LICENSE.txt */
(this["webpackJsonphacktj-2020v2"]=this["webpackJsonphacktj-2020v2"]||[]).push([[8,10,11],{159:function(e,t,n){"use strict";n.r(t);var r=n(2),a=(n(0),n(37)),o=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("a",{className:"anchor",id:"notfound",href:"#notfound",children:"Page Not Found"}),Object(r.jsx)("section",{id:"notfound",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"animation-container vertical top right extra-right extra-height",children:Object(r.jsx)("div",{className:"animated"})}),Object(r.jsx)("h1",{className:"section-title",style:{marginTop:"20vh"},children:"Error 404"}),Object(r.jsx)("p",{className:"large",style:{textAlign:"center"},children:"We couldn't find that page, sorry."})]})})]})},c=n(38);t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(a.default,{}),Object(r.jsx)(o,{}),Object(r.jsx)(c.default,{})]})}},28:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var c=a.apply(null,r);c&&e.push(c)}else if("object"===o)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},29:function(e,t,n){"use strict";n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return i})),n.d(t,"i",(function(){return s})),n.d(t,"a",(function(){return u})),n.d(t,"k",(function(){return d})),n.d(t,"j",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"b",(function(){return j})),n.d(t,"f",(function(){return m})),n.d(t,"e",(function(){return O}));var r,a=n(6),o=n.n(a);function c(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function i(e,t){var n={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(n[r]=e[r])})),n}function s(e,t){for(var n,r=Array.isArray(t)?t:[t],a=r.length,o={};a>0;)o[n=r[a-=1]]=e[n];return o}var l="object"===typeof window&&window.Element||function(){};function u(e,t,n){if(!(e[t]instanceof l))return new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var d=o.a.oneOfType([o.a.string,o.a.func,u,o.a.shape({current:o.a.any})]),f=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},b=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],h=!("undefined"===typeof window||!window.document||!window.document.createElement);function g(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function m(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function v(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!m(e))return!1;var t=g(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&h){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function x(e){return null!==e&&(Array.isArray(e)||h&&"number"===typeof e.length)}function O(e,t){var n=v(e);return t?x(n)?n:null===n?[]:[n]:x(n)?n[0]:n}},30:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))},31:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},32:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(0),o=n.n(a),c=n(4),i=n(30),s=n(6),l=n.n(s),u=n(28),d=n.n(u),f=n(29),p={light:l.a.bool,dark:l.a.bool,full:l.a.bool,fixed:l.a.string,sticky:l.a.string,color:l.a.string,role:l.a.string,tag:f.j,className:l.a.string,cssModule:l.a.object,expand:l.a.oneOfType([l.a.bool,l.a.string])},b=function(e){var t,n=e.expand,r=e.className,a=e.cssModule,s=e.light,l=e.dark,u=e.fixed,p=e.sticky,b=e.color,j=e.tag,h=Object(i.a)(e,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),g=Object(f.g)(d()(r,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(n),((t={"navbar-light":s,"navbar-dark":l})["bg-"+b]=b,t["fixed-"+u]=u,t["sticky-"+p]=p,t)),a);return o.a.createElement(j,Object(c.a)({},h,{className:g}))};b.propTypes=p,b.defaultProps={tag:"nav",expand:!1};var j=b,h={tabs:l.a.bool,pills:l.a.bool,vertical:l.a.oneOfType([l.a.bool,l.a.string]),horizontal:l.a.string,justified:l.a.bool,fill:l.a.bool,navbar:l.a.bool,card:l.a.bool,tag:f.j,className:l.a.string,cssModule:l.a.object},g=function(e){var t=e.className,n=e.cssModule,r=e.tabs,a=e.pills,s=e.vertical,l=e.horizontal,u=e.justified,p=e.fill,b=e.navbar,j=e.card,h=e.tag,g=Object(i.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),m=Object(f.g)(d()(t,b?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(s),{"nav-tabs":r,"card-header-tabs":j&&r,"nav-pills":a,"card-header-pills":j&&a,"nav-justified":u,"nav-fill":p}),n);return o.a.createElement(h,Object(c.a)({},g,{className:m}))};g.propTypes=h,g.defaultProps={tag:"ul",vertical:!1};var m=g,v={tag:f.j,active:l.a.bool,className:l.a.string,cssModule:l.a.object},x=function(e){var t=e.className,n=e.cssModule,r=e.active,a=e.tag,s=Object(i.a)(e,["className","cssModule","active","tag"]),l=Object(f.g)(d()(t,"nav-item",!!r&&"active"),n);return o.a.createElement(a,Object(c.a)({},s,{className:l}))};x.propTypes=v,x.defaultProps={tag:"li"};var O=x,y=n(31),k=n(32),N={tag:f.j,innerRef:l.a.oneOfType([l.a.object,l.a.func,l.a.string]),disabled:l.a.bool,active:l.a.bool,className:l.a.string,cssModule:l.a.object,onClick:l.a.func,href:l.a.any},w=function(e){function t(t){var n;return(n=e.call(this,t)||this).onClick=n.onClick.bind(Object(y.a)(n)),n}Object(k.a)(t,e);var n=t.prototype;return n.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},n.render=function(){var e=this.props,t=e.className,n=e.cssModule,r=e.active,a=e.tag,s=e.innerRef,l=Object(i.a)(e,["className","cssModule","active","tag","innerRef"]),u=Object(f.g)(d()(t,"nav-link",{disabled:l.disabled,active:r}),n);return o.a.createElement(a,Object(c.a)({},l,{ref:s,onClick:this.onClick,className:u}))},t}(o.a.Component);w.propTypes=N,w.defaultProps={tag:"a"};var E=w;n(34),t.default=function(){return Object(r.jsx)(j,{sticky:"top",className:"navcontainer",bg:"#64d861",style:{position:"sticky",top:"0px",display:"flex",flexDirection:"row",zIndex:1e3},children:Object(r.jsxs)(m,{className:"nav justify-content-center",navbar:!0,children:[Object(r.jsx)(O,{children:Object(r.jsx)(E,{href:"#intro",children:"Intro"})}),Object(r.jsx)(O,{children:Object(r.jsx)(E,{href:"#faq",children:"FAQ"})}),Object(r.jsx)(O,{children:Object(r.jsx)(E,{href:"#sponsor",children:"Sponsors"})}),Object(r.jsx)(O,{children:Object(r.jsx)(E,{href:"#schedule",children:"Schedule"})}),Object(r.jsx)(O,{children:Object(r.jsx)(E,{href:"#team",children:"Team"})})]})})}},38:function(e,t,n){"use strict";n.r(t);var r=n(2),a=(n(0),n(35),function(e){return Object(r.jsx)("span",{style:{visibility:"hidden"},children:e})}),o=Object(r.jsx)("a",{className:"social pe-so-twitter",target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/HackTJOfficial",children:a("Twitter")}),c=Object(r.jsx)("a",{className:"social pe-so-facebook empty",target:"_blank",rel:"noopener noreferrer",href:"https://facebook.com/HackTJOfficial",children:a("Facebook")}),i=Object(r.jsx)("a",{className:"social pe-so-instagram empty",target:"_blank",rel:"noopener noreferrer",href:"https://instagram.com/hacktjofficial",children:a("Instagram")}),s=function(){return Object(r.jsxs)("div",{className:"social-links",children:[o,c,i]})},l=function(){return Object(r.jsx)("a",{id:"mlh-trust-badge",href:"https://mlh.io/seasons/na-2021/events?utm_source=na-hacktahon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white",target:"_blank",rel:"noopener noreferrer",style:{display:"block",maxWidth:"100px",minWidth:"60px",position:"fixed",right:"50px",top:0,width:"10%",zIndex:1e4},children:Object(r.jsx)("img",{src:"https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg",alt:"Major League Hacking 2021 Hackathon Season",style:{width:"100%"}})})};n(36),t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("section",{className:"green register footer",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("div",{className:"register-button-block-old bottom",children:Object(r.jsx)("div",{className:"register-text",children:"Be sure to follow our Social Media pages for updates!"})}),Object(r.jsx)(s,{})]})}),Object(r.jsx)(l,{})]})}}}]);
//# sourceMappingURL=8.2d245b23.chunk.js.map