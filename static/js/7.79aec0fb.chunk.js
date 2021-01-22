/*! For license information please see 7.79aec0fb.chunk.js.LICENSE.txt */
(this["webpackJsonphacktj-2021"]=this["webpackJsonphacktj-2021"]||[]).push([[7],{174:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(34),i=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("a",{className:"anchor",id:"notfound",href:"#notfound",children:"Page Not Found"}),Object(a.jsx)("section",{id:"notfound",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"animation-container vertical top right extra-right extra-height",children:Object(a.jsx)("div",{className:"animated"})}),Object(a.jsx)("h1",{className:"section-title",style:{marginTop:"20vh"},children:"Error 404"}),Object(a.jsx)("p",{className:"large",style:{textAlign:"center"},children:"We couldn't find that page, sorry."})]})})]})};e.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(r.a,{}),Object(a.jsx)(i,{})]})}},29:function(t,e,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var a=arguments[e];if(a){var i=typeof a;if("string"===i||"number"===i)t.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&t.push(o)}else if("object"===i)for(var c in a)n.call(a,c)&&a[c]&&t.push(c)}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(a=function(){return r}.apply(e,[]))||(t.exports=a)}()},30:function(t,e,n){"use strict";n.d(e,"f",(function(){return o})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"j",(function(){return f})),n.d(e,"i",(function(){return d})),n.d(e,"d",(function(){return p})),n.d(e,"c",(function(){return b})),n.d(e,"b",(function(){return j})),n.d(e,"e",(function(){return y}));var a,r=n(7),i=n.n(r);function o(t,e){return void 0===t&&(t=""),void 0===e&&(e=a),e?t.split(" ").map((function(t){return e[t]||t})).join(" "):t}function c(t,e){var n={};return Object.keys(t).forEach((function(a){-1===e.indexOf(a)&&(n[a]=t[a])})),n}function s(t,e){for(var n,a=Array.isArray(e)?e:[e],r=a.length,i={};r>0;)i[n=a[r-=1]]=t[n];return i}var l="object"===typeof window&&window.Element||function(){};function u(t,e,n){if(!(t[e]instanceof l))return new Error("Invalid prop `"+e+"` supplied to `"+n+"`. Expected prop to be an instance of Element. Validation failed.")}var f=i.a.oneOfType([i.a.string,i.a.func,u,i.a.shape({current:i.a.any})]),d=i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func}),i.a.arrayOf(i.a.oneOfType([i.a.func,i.a.string,i.a.shape({$$typeof:i.a.symbol,render:i.a.func})]))]),p={Fade:150,Collapse:350,Modal:300,Carousel:600},b=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],j=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],h=!("undefined"===typeof window||!window.document||!window.document.createElement);function v(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function g(t){var e=typeof t;return null!=t&&("object"===e||"function"===e)}function m(t){if(function(t){return!(!t||"object"!==typeof t)&&"current"in t}(t))return t.current;if(function(t){if(!g(t))return!1;var e=v(t);return"[object Function]"===e||"[object AsyncFunction]"===e||"[object GeneratorFunction]"===e||"[object Proxy]"===e}(t))return t();if("string"===typeof t&&h){var e=document.querySelectorAll(t);if(e.length||(e=document.querySelectorAll("#"+t)),!e.length)throw new Error("The target '"+t+"' could not be identified in the dom, tip: check spelling");return e}return t}function x(t){return null!==t&&(Array.isArray(t)||h&&"number"===typeof t.length)}function y(t,e){var n=m(t);return e?x(n)?n:null===n?[]:[n]:x(n)?n[0]:n}},31:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,"a",(function(){return a}))},32:function(t,e,n){"use strict";function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}n.d(e,"a",(function(){return a}))},34:function(t,e,n){"use strict";var a=n(1),r=n(37),i=n(38),o=n(39),c=n(40);n(35);e.a=function(){return Object(a.jsx)(r.a,{sticky:"top",className:"navcontainer",style:{position:"sticky",top:"0px",display:"flex",flexDirection:"row",zIndex:1e3,marginBottom:"100px"},children:Object(a.jsxs)(i.a,{className:"nav justify-content-center",children:[Object(a.jsx)(o.a,{children:Object(a.jsx)(c.a,{href:"#intro",children:"Intro"})}),Object(a.jsx)(o.a,{children:Object(a.jsx)(c.a,{href:"#faq",children:"FAQ"})}),Object(a.jsx)(o.a,{children:Object(a.jsx)(c.a,{href:"#sponsor",children:"Sponsors"})}),Object(a.jsx)(o.a,{children:Object(a.jsx)(c.a,{href:"#schedule",children:"Schedule"})}),Object(a.jsx)(o.a,{children:Object(a.jsx)(c.a,{href:"#team",children:"Team"})})]})})}},35:function(t,e,n){},37:function(t,e,n){"use strict";var a=n(4),r=n(31),i=n(0),o=n.n(i),c=n(7),s=n.n(c),l=n(29),u=n.n(l),f=n(30),d={light:s.a.bool,dark:s.a.bool,full:s.a.bool,fixed:s.a.string,sticky:s.a.string,color:s.a.string,role:s.a.string,tag:f.i,className:s.a.string,cssModule:s.a.object,expand:s.a.oneOfType([s.a.bool,s.a.string])},p=function(t){var e,n=t.expand,i=t.className,c=t.cssModule,s=t.light,l=t.dark,d=t.fixed,p=t.sticky,b=t.color,j=t.tag,h=Object(r.a)(t,["expand","className","cssModule","light","dark","fixed","sticky","color","tag"]),v=Object(f.f)(u()(i,"navbar",function(t){return!1!==t&&(!0===t||"xs"===t?"navbar-expand":"navbar-expand-"+t)}(n),((e={"navbar-light":s,"navbar-dark":l})["bg-"+b]=b,e["fixed-"+d]=d,e["sticky-"+p]=p,e)),c);return o.a.createElement(j,Object(a.a)({},h,{className:v}))};p.propTypes=d,p.defaultProps={tag:"nav",expand:!1},e.a=p},38:function(t,e,n){"use strict";var a=n(4),r=n(31),i=n(0),o=n.n(i),c=n(7),s=n.n(c),l=n(29),u=n.n(l),f=n(30),d={tabs:s.a.bool,pills:s.a.bool,vertical:s.a.oneOfType([s.a.bool,s.a.string]),horizontal:s.a.string,justified:s.a.bool,fill:s.a.bool,navbar:s.a.bool,card:s.a.bool,tag:f.i,className:s.a.string,cssModule:s.a.object},p=function(t){var e=t.className,n=t.cssModule,i=t.tabs,c=t.pills,s=t.vertical,l=t.horizontal,d=t.justified,p=t.fill,b=t.navbar,j=t.card,h=t.tag,v=Object(r.a)(t,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),g=Object(f.f)(u()(e,b?"navbar-nav":"nav",!!l&&"justify-content-"+l,function(t){return!1!==t&&(!0===t||"xs"===t?"flex-column":"flex-"+t+"-column")}(s),{"nav-tabs":i,"card-header-tabs":j&&i,"nav-pills":c,"card-header-pills":j&&c,"nav-justified":d,"nav-fill":p}),n);return o.a.createElement(h,Object(a.a)({},v,{className:g}))};p.propTypes=d,p.defaultProps={tag:"ul",vertical:!1},e.a=p},39:function(t,e,n){"use strict";var a=n(4),r=n(31),i=n(0),o=n.n(i),c=n(7),s=n.n(c),l=n(29),u=n.n(l),f=n(30),d={tag:f.i,active:s.a.bool,className:s.a.string,cssModule:s.a.object},p=function(t){var e=t.className,n=t.cssModule,i=t.active,c=t.tag,s=Object(r.a)(t,["className","cssModule","active","tag"]),l=Object(f.f)(u()(e,"nav-item",!!i&&"active"),n);return o.a.createElement(c,Object(a.a)({},s,{className:l}))};p.propTypes=d,p.defaultProps={tag:"li"},e.a=p},40:function(t,e,n){"use strict";var a=n(4),r=n(31),i=n(32),o=n(8),c=n(0),s=n.n(c),l=n(7),u=n.n(l),f=n(29),d=n.n(f),p=n(30),b={tag:p.i,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),disabled:u.a.bool,active:u.a.bool,className:u.a.string,cssModule:u.a.object,onClick:u.a.func,href:u.a.any},j=function(t){function e(e){var n;return(n=t.call(this,e)||this).onClick=n.onClick.bind(Object(i.a)(n)),n}Object(o.a)(e,t);var n=e.prototype;return n.onClick=function(t){this.props.disabled?t.preventDefault():("#"===this.props.href&&t.preventDefault(),this.props.onClick&&this.props.onClick(t))},n.render=function(){var t=this.props,e=t.className,n=t.cssModule,i=t.active,o=t.tag,c=t.innerRef,l=Object(r.a)(t,["className","cssModule","active","tag","innerRef"]),u=Object(p.f)(d()(e,"nav-link",{disabled:l.disabled,active:i}),n);return s.a.createElement(o,Object(a.a)({},l,{ref:c,onClick:this.onClick,className:u}))},e}(s.a.Component);j.propTypes=b,j.defaultProps={tag:"a"},e.a=j}}]);
//# sourceMappingURL=7.79aec0fb.chunk.js.map