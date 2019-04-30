/*!
 * @project        Papillon Ads Holland
 * @name           3-modern.b776.js
 * @author         MTS
 * @build          Tue, Apr 30, 2019 11:21 PM ET
 * @release        86c504b67d5b455bc9f8ca977b9b0fb7ef700739 [master]
 * @copyright      Copyright (c) 2019 MTS
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{117:function(e,n,a){"use strict";a.r(n);var t=a(2),s=a.n(t),r=a(75),o=a.n(r),c=a(30),l=a(76),i=a(43),u=a(32),p=a(3);const m={className:p.string,location:p.object.isRequired},d=e=>{let n=e.className,a=e.location;const t=o()(n);return s.a.createElement("div",{className:t},s.a.createElement("h3",null,"No match for ",s.a.createElement("code",null,a.pathname)))};d.defaultProps={className:""},d.propTypes=m;var f=d;const g={className:p.string,page:p.object.isRequired,location:p.object.isRequired},v=e=>{let n=e.className,a=e.page,t=e.location;const r=o()(n);return s.a.createElement("div",{className:r},s.a.createElement("h2",null,a.name),s.a.createElement(f,{location:t}),s.a.createElement(i.b,{to:u.a}," Back to Home Page"))};v.defaultProps={className:""},v.propTypes=g;var h=v;const N={className:p.string,location:p.object.isRequired},b=e=>{let n=e.className,a=e.location;const t=o()(n);return s.a.createElement("div",{className:t},s.a.createElement(c.b,{query:l.a},e=>{let n=e.data;return n.pages&&n.pages.pages?s.a.createElement(h,{page:n.pages.pages.find(e=>"not-found"===e.id),location:a}):null}))};b.defaultProps={className:""},b.propTypes=N;n.default=b},75:function(e,n,a){var t;
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
!function(){"use strict";var a={}.hasOwnProperty;function s(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var r=typeof t;if("string"===r||"number"===r)e.push(t);else if(Array.isArray(t)&&t.length){var o=s.apply(null,t);o&&e.push(o)}else if("object"===r)for(var c in t)a.call(t,c)&&t[c]&&e.push(c)}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(t=function(){return s}.apply(n,[]))||(e.exports=t)}()},76:function(e,n,a){"use strict";a.d(n,"a",function(){return c});var t=a(28),s=a.n(t),r=a(29);function o(){const e=s()(["\n  query GetPages {\n    pages(pageSize: 10) {\n      pages {\n        id\n        name\n        header {\n          navigationBar {\n            links {\n              text\n            }\n          }\n          searchBar {\n            searchFieldsetAdvanced {\n              categories {\n                value\n                label\n              }\n              distances {\n                value\n                label\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return o=function(){return e},e}const c=a.n(r)()(o())}}]);
//# sourceMappingURL=3-modern.b776.js.map