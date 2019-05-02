/*!
 * @project        Papillon Ads Holland
 * @name           3-modern.ccd3.js
 * @author         MTS
 * @build          Thu, May 2, 2019 5:25 PM ET
 * @release        5c5d14fa0f2146b9f4d0652a75156d54b24d00ef [master]
 * @copyright      Copyright (c) 2019 MTS
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{118:function(e,n,a){"use strict";a.r(n);var t=a(2),r=a.n(t),s=a(75),o=a.n(s),c=a(30),l=a(76),i=a(43),u=a(32),p=a(3);const m={className:p.string,location:p.object.isRequired},d=e=>{let n=e.className,a=e.location;const t=o()(n);return r.a.createElement("div",{className:t},r.a.createElement("h3",null,"No match for ",r.a.createElement("code",null,a.pathname)))};d.defaultProps={className:""},d.propTypes=m;var f=d;const g={className:p.string,page:p.object.isRequired,location:p.object.isRequired},h=e=>{let n=e.className,a=e.page,t=e.location;const s=o()(n);return r.a.createElement("div",{className:s},r.a.createElement("h2",null,a.name),r.a.createElement(f,{location:t}),r.a.createElement(i.b,{to:u.a}," Back to Home Page"))};h.defaultProps={className:""},h.propTypes=g;var v=h;const N={className:p.string,location:p.object.isRequired},b=e=>{let n=e.className,a=e.location;const t=o()(n);return r.a.createElement("div",{className:t},r.a.createElement(c.b,{query:l.a},e=>{let n=e.data;return n.pages&&n.pages.pages?r.a.createElement(v,{page:n.pages.pages.find(e=>"not-found"===e.id),location:a}):null}))};b.defaultProps={className:""},b.propTypes=N;n.default=b},75:function(e,n,a){var t;
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
!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var s=typeof t;if("string"===s||"number"===s)e.push(t);else if(Array.isArray(t)&&t.length){var o=r.apply(null,t);o&&e.push(o)}else if("object"===s)for(var c in t)a.call(t,c)&&t[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(t=function(){return r}.apply(n,[]))||(e.exports=t)}()},76:function(e,n,a){"use strict";a.d(n,"a",function(){return c});var t=a(28),r=a.n(t),s=a(29);function o(){const e=r()(["\n  query GetPages {\n    pages(pageSize: 10) {\n      pages {\n        id\n        name\n        header {\n          navigationBar {\n            links {\n              text\n            }\n          }\n          searchBar {\n            searchFieldsetAdvanced {\n              categories {\n                value\n                label\n              }\n              distances {\n                value\n                label\n              }\n            }\n          }\n        }\n        content {\n          topBanner {\n            resources {\n              url\n              maxWidth\n              height\n            }\n          }\n          marketingBanner {\n            resources {\n              url\n              maxWidth\n              height\n            }\n          }\n        }\n      }\n    }\n  }\n"]);return o=function(){return e},e}const c=a.n(s)()(o())}}]);
//# sourceMappingURL=3-modern.ccd3.js.map