/*!
 * @project        Papillon Ads Holland
 * @name           3-modern.07a8.js
 * @author         MTS
 * @build          Mon, Apr 29, 2019 4:02 PM ET
 * @release        9eabc6b6efb488bf8822f65642de9fcf71cfd45c [master]
 * @copyright      Copyright (c) 2019 MTS
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{117:function(e,a,t){"use strict";t.r(a);var n=t(2),s=t.n(n),r=t(3),o=t(75),c=t.n(o),l=t(30),i=t(76),u=t(43),p=t(32);const m=e=>{let a=e.className,t=e.location;const n=c()(a);return s.a.createElement("div",{className:n},s.a.createElement("h3",null,"No match for ",s.a.createElement("code",null,t.pathname)))};m.defaultProps={className:""},m.propTypes={className:r.string,location:r.object.isRequired};var f=m;const d=e=>{let a=e.className,t=e.page,n=e.location;const r=c()(a);return s.a.createElement("div",{className:r},s.a.createElement("h2",null,t.name),s.a.createElement(f,{location:n}),s.a.createElement(u.b,{to:p.a}," Back to Home Page"))};d.defaultProps={className:""},d.propTypes={className:r.string,page:r.object.isRequired,location:r.object.isRequired};var g=d;const v=e=>{let a=e.className,t=e.location;const n=c()(a);return s.a.createElement("div",{className:n},s.a.createElement(l.b,{query:i.a},e=>{let a=e.data;return a.pages&&a.pages.pages?s.a.createElement(g,{page:a.pages.pages.find(e=>"not-found"===e.id),location:t}):null}))};v.defaultProps={className:""},v.propTypes={className:r.string,location:r.object.isRequired};a.default=v},75:function(e,a,t){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var o=s.apply(null,n);o&&e.push(o)}else if("object"===r)for(var c in n)t.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(a,[]))||(e.exports=n)}()},76:function(e,a,t){"use strict";t.d(a,"a",function(){return c});var n=t(28),s=t.n(n),r=t(29);function o(){const e=s()(["\n  query GetPages {\n    pages(pageSize: 10) {\n      pages {\n        id\n        name\n      }\n    }\n  }\n"]);return o=function(){return e},e}const c=t.n(r)()(o())}}]);
//# sourceMappingURL=3-modern.07a8.js.map