(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{4:function(e,t,n){n("svEX"),e.exports=n("DdVk")},"5jWd":function(e,t,n){"use strict";n("pNMO"),n("4Brf"),n("0oug"),n("ma9I"),n("4mDm"),n("NBAS"),n("07d7"),n("5s+n"),n("SuFq"),n("rB9j"),n("JfAA"),n("PKPk"),n("EnZy"),n("3bBZ"),n("ls82"),n("QWBl"),n("pjDv"),n("+2oP"),n("sMBO"),n("FZtP");var o=n("jmbs");var a=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props={language:navigator.language||navigator.userLanguage,currency:"BRL",currencyLocale:"pt-br",minimumFractionDigits:2,storeId:"autosuperstore"}};n("hByQ"),n("8/Qm");n("RDzO");function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.app_=new a,this.logger_=new o.c,this.ensure_=o.a,this.props=this.app_.props}var t,n,r;return t=e,(n=[{key:"render",value:function(e,t){var n=document.querySelector(String(e));n?n.innerHTML=String(t):this.logger_.info("element '".concat(e,"' not found on page!"))}},{key:"getElement",value:function(e){var t=0<arguments.length&&void 0!==e?e:"";return document.querySelector(String(t))}},{key:"getElements",value:function(e){var n=[];return i(0<arguments.length&&void 0!==e?e:[]).forEach(function(e){var t=document.querySelector(String(e));t&&n.push(t)}),n}},{key:"getAllElements",value:function(e){var t=0<arguments.length&&void 0!==e?e:"";return document.querySelectorAll(String(t))}}])&&u(t.prototype,n),r&&u(t,r),e}(),s=n("EVdn"),l=n.n(s);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(a){var i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var e,t,n,r,o=v(a);return t=i?(e=v(this).constructor,Reflect.construct(o,arguments,e)):o.apply(this,arguments),n=this,!(r=t)||"object"!==f(r)&&"function"!=typeof r?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(n):r}}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=function(){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(a,c);var e,t,n,u,r,o=m(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=o.call(this)).VTEX_LOGOUT_URL="/no-cache/user/logout",e.VTEX_ACCOUNT_URL="/_secure/account#/profile",e.VTEX_ORDERS_URL="/_secure/account#/orders",e.LOGOUT_LABEL="Sair",e.isUserDefined=!1,e.isMobile=window.innerWidth<1024,e.loginContainerSelector=".js-login--container",e.loginActionSelector=".js-login--action",e}return e=a,(t=[{key:"load",value:function(){this.render(),this.eventHandlerBinds()}},{key:"render",value:(u=regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.getElement(this.loginContainerSelector))return e.next=4,l.a.get("/no-cache/profileSystem/getProfile");e.next=9;break;case 4:n=e.sent,r=t.querySelector(this.loginActionSelector),this.isUserDefined=n.IsUserDefined,console.log(this.isUserDefined),this.isUserDefined&&(console.log("loginActionElement",r),r&&(console.log("loginButtonElement",t),this.isMobile||(r.innerHTML=n.FirstName?"Olá, ".concat(n.FirstName):"Olá"),t.insertAdjacentHTML("beforeend",'\n            <ul class="User__Dropdown">  \n              <li class="User__Item" ><a class="User__Link" href="'.concat(this.VTEX_ACCOUNT_URL,'">Minha Conta</a></li>\n              <li class="User__Item" ><a class="User__Link" href="').concat(this.VTEX_ORDERS_URL,'">Minhas mudanças</a></li>\n              <li class="User__Item" ><a class="User__Link" href="').concat(this.VTEX_LOGOUT_URL,'">Sair</a></li>\n            </ul>\n          ')),this.isMobile||(t.href=this.VTEX_ACCOUNT_URL)));case 9:case"end":return e.stop()}},e,this)}),r=function(){var e=this,i=arguments;return new Promise(function(t,n){var r=u.apply(e,i);function o(e){p(r,t,n,o,a,"next",e)}function a(e){p(r,t,n,o,a,"throw",e)}o(void 0)})},function(){return r.apply(this,arguments)})},{key:"userLogin",value:function(){vtexid.start({locale:this.props.language,forceReload:!0})}},{key:"getUserDisplayName",value:function(e){return Ensure.isUndefined(e.FirstName)?e.Email.split("@")[0].split(".")[0]:e.FirstName}},{key:"eventHandlerBinds",value:function(){var t=this,n=this,e=this.getElement(this.loginContainerSelector);e&&e.addEventListener("click",function(e){t.isUserDefined||n.userLogin()},!1)}}])&&d(e.prototype,t),n&&d(e,n),a}();t.a=y},"8/Qm":function(e,t,n){"use strict";n("ma9I"),n("07d7"),n("5s+n"),n("ls82");var u=n("x9ji");function c(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function s(u){return function(){var e=this,i=arguments;return new Promise(function(t,n){var r=u.apply(e,i);function o(e){c(r,t,n,o,a,"next",e)}function a(e){c(r,t,n,o,a,"throw",e)}o(void 0)})}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);this.entityCode_=e,this.httpClient_=new u.a,this._VTEX_MASTERDATA_ENDPOINT="/api/dataentities/".concat(e)}var e,n,r,o,a,i;return e=t,(n=[{key:"add",value:function(e){var t="".concat(this._VTEX_MASTERDATA_ENDPOINT,"/documents");return this.httpClient_.put(t,e).then(function(e){return e},function(e){return e})}},{key:"update",value:function(e){var t="".concat(this._VTEX_MASTERDATA_ENDPOINT,"/documents");return this.httpClient_.patch(t,e).then(function(e){return e},function(e){return e})}},{key:"search",value:function(e){var t="".concat(this._VTEX_MASTERDATA_ENDPOINT,"/search?").concat(e);return this.httpClient_.get(t).then(function(e){return e})}},{key:"getByDocumentId",value:(i=s(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(this._VTEX_MASTERDATA_ENDPOINT,"/documents/").concat(t),e.next=3,this.httpClient_.get(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)})},{key:"getByDocumentIdWithFields",value:(a=s(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this._VTEX_MASTERDATA_ENDPOINT,"/documents/").concat(t,"?_fields=").concat(n),e.next=3,this.httpClient_.get(r);case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}},e,this)})),function(e,t){return a.apply(this,arguments)})},{key:"delete",value:function(e){var t="".concat(this._VTEX_MASTERDATA_ENDPOINT,"/documents/").concat(e);return this.httpClient_.delete(t).then(function(e){return e})}},{key:"getAttachmentUrl",value:function(e,t,n){var r=0<arguments.length&&void 0!==e?e:"",o=1<arguments.length&&void 0!==t?t:"",a=2<arguments.length&&void 0!==n?n:"";return"".concat(this._VTEX_MASTERDATA_ENDPOINT,"/documents/").concat(r,"/").concat(o,"/attachments/").concat(a)}},{key:"getAttachment",value:(o=s(regeneratorRuntime.mark(function e(){var t,n,r,o,a,i=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<i.length&&void 0!==i[0]?i[0]:"",n=1<i.length&&void 0!==i[1]?i[1]:"",r=2<i.length&&void 0!==i[2]?i[2]:"",o=this.getAttachmentUrl(t,n,r),e.next=6,this.httpClient_.get(o);case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)})}])&&l(e.prototype,n),r&&l(e,r),t}();t.a=r},DdVk:function(e,t){},RDzO:function(e,t,n){"use strict";n("pNMO"),n("4Brf"),n("0oug"),n("QWBl"),n("pjDv"),n("4mDm"),n("+2oP"),n("sMBO"),n("07d7"),n("JfAA"),n("PKPk"),n("FZtP"),n("3bBZ");function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"isUndefined",value:function(e){var t=0<arguments.length&&void 0!==e?e:void 0;return null==t||""===t||t==={}||t===[]}},{key:"isInputValid",value:function(e){return!this.isUndefined(e)&&e.checkValidity()}},{key:"hasProps",value:function(e,t){return this.getMissingProps(e,t).length<=0}},{key:"getMissingProps",value:function(t,e){var n=[];return o(e).forEach(function(e){e in t||n.push(e)}),n}}],(n=null)&&a(t.prototype,n),r&&a(t,r),e}();t.a=i},jmbs:function(e,t,n){"use strict";n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return u});var r=n("RDzO");n("ma9I"),n("TeQF"),n("yq1k"),n("oVuX"),n("sMBO"),n("toAj"),n("07d7"),n("TWNs"),n("rB9j"),n("JfAA"),n("JTJg"),n("UxlC"),n("EnZy");function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._logger=new u("Ensure"),this.props=e||{language:navigator.language||navigator.userLanguage,currency:"BRL",currencyLocale:"pt-br",minimumFractionDigits:2}}var e,n,r;return e=t,r=[{key:"getParents",value:function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n});for(var n=[];e&&e!==document;e=e.parentNode)(!t||e.matches(t))&&n.push(e);return n}},{key:"serializeForm",value:function(e){for(var t=[],n=0;n<e.elements.length;n++){var r=e.elements[n];if(r.name&&!r.disabled&&"file"!==r.type&&"reset"!==r.type&&"submit"!==r.type&&"button"!==r.type)if("select-multiple"===r.type)for(var o=0;o<r.options.length;o++)r.options[o].selected&&t.push(encodeURIComponent(r.name)+"="+encodeURIComponent(r.options[o].value));else("checkbox"!==r.type&&"radio"!==r.type||r.checked)&&t.push(encodeURIComponent(r.name)+"="+encodeURIComponent(r.value))}return t.join("&")}},{key:"getFormData",value:function(e){for(var t={},n=0;n<e.elements.length;n++){var r=e.elements[n];if(r.name&&!r.disabled&&"file"!==r.type&&"reset"!==r.type&&"submit"!==r.type&&"button"!==r.type)if("select-multiple"===r.type)for(var o=0;o<r.options.length;o++)r.options[o].selected&&(t[r.name]=r.options[o].value);else("checkbox"!==r.type&&"radio"!==r.type||r.checked)&&(t[r.name]=r.value)}return t}},{key:"getRandomID",value:function(){return"_"+Math.random().toString(36).substr(2,9)}},{key:"setCookie",value:function(e,t,n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var o="expires="+r.toUTCString();document.cookie="".concat(e,"=").concat(t,";").concat(o,";path=/")}},{key:"getCookie",value:function(t){return decodeURIComponent(document.cookie).split(";").filter(function(e){return e.includes(t)})[0]||""}},{key:"isInViewport",value:function(e){var t=window.innerHeight||document.documentElement.clientHeight,n=window.innerWidth||document.documentElement.clientWidth,r=e.getBoundingClientRect(),o=r.top,a=r.right,i=r.bottom,u=r.left;return 0<=o&&0<=u&&i<=t&&a<=n}},{key:"removeAccents",value:function(e){var t={a:"á|à|ã|â|À|Á|Ã|Â",e:"é|è|ê|É|È|Ê",i:"í|ì|î|Í|Ì|Î",o:"ó|ò|ô|õ|Ó|Ò|Ô|Õ",u:"ú|ù|û|ü|Ú|Ù|Û|Ü",c:"ç|Ç",n:"ñ|Ñ"};for(var n in t)e=e.replace(new RegExp(t[n],"g"),n);return e}}],(n=[{key:"formatPrice",value:function(e){return e=(+(e/=100)).toFixed(Math.max(0,~~this.props.minimumFractionDigits)),new Intl.NumberFormat(this.props.currencyLocale,{style:"currency",currency:this.props.currency,minimumFractionDigits:this.props.minimumFractionDigits}).format(e)}}])&&o(e.prototype,n),r&&o(e,r),t}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"B8ONE Logger Component";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.logName=e}var e,n,r;return e=t,(n=[{key:"error",value:function(e,t){var n=0<arguments.length&&void 0!==e?e:"",r=1<arguments.length&&void 0!==t?t:{};console.error(n,r)}},{key:"info",value:function(e){var t=0<arguments.length&&void 0!==e?e:"";console.info(t)}},{key:"warning",value:function(e){var t=0<arguments.length&&void 0!==e?e:"";console.warn(this.logName,t)}},{key:"log",value:function(e){var t=0<arguments.length&&void 0!==e?e:"";console.log(t)}},{key:"log",value:function(e,t){var n=0<arguments.length&&void 0!==e?e:"",r=1<arguments.length&&void 0!==t?t:{};console.log(n,r)}}])&&i(e.prototype,n),r&&i(e,r),t}()},rdEv:function(e,t,n){"use strict";n("pNMO"),n("4Brf"),n("0oug"),n("ma9I"),n("TeQF"),n("x0AG"),n("QWBl"),n("pjDv"),n("yq1k"),n("4mDm"),n("2B1R"),n("E9XD"),n("+2oP"),n("sMBO"),n("5DmW"),n("27RR"),n("tkto"),n("07d7"),n("B6y2"),n("5s+n"),n("JfAA"),n("JTJg"),n("PKPk"),n("FZtP"),n("3bBZ"),n("ls82");var b=n("jmbs"),k=n("x9ji");function r(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function w(o){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach(function(e){var t,n,r;t=o,r=a[n=e],n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(a,e))})}return o}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw a}}return n}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function c(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function I(u){return function(){var e=this,i=arguments;return new Promise(function(t,n){var r=u.apply(e,i);function o(e){c(r,t,n,o,a,"next",e)}function a(e){c(r,t,n,o,a,"throw",e)}o(void 0)})}}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._VTEX_API_ENDPOINT="/api/checkout/pub/orderForm",this._logger=new b.c("Cart service"),this._httpClient=new k.a}var t,n,r,o,a,i,u,c,s,l,f,p,d,h,m,v,y,g;return t=e,(n=[{key:"getCurrent",value:(g=I(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._httpClient.get(this._VTEX_API_ENDPOINT);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),function(){return g.apply(this,arguments)})},{key:"add",value:(y=I(regeneratorRuntime.mark(function e(t,n){var r,o,a,i,u,c=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=2<c.length&&void 0!==c[2]?c[2]:1,b.a.isUndefined(t)){e.next=10;break}return e.next=4,this.getCurrent();case 4:return o=e.sent,-1<(a=o.items.findIndex(function(e){return e.id===t}))&&(n=parseInt(n)+parseInt(o.items[a].quantity)),i="".concat(this._VTEX_API_ENDPOINT,"/").concat(o.orderFormId,"/items"),u={orderItems:[{seller:r.toString(),quantity:parseInt(n),id:t.toString()}]},e.abrupt("return",this._httpClient.patch(i,u));case 10:case"end":return e.stop()}},e,this)})),function(e,t){return y.apply(this,arguments)})},{key:"checkoutCRUD",value:(v=I(regeneratorRuntime.mark(function e(t){var n,a,r,o,i,u,c,s,l,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.vtexjs.checkout.getOrderForm();case 2:if(n=e.sent,a=n.items,r=this.getCustomProducts(t),t=t.filter(function(e){return!e.isCustom}),t=[].concat(x(t),x(r)),o=[19,698,25,26],0<(i=a.reduce(function(e,t,n){return[25,26].includes(parseInt(t.id))?[].concat(x(e),[n]):e},[])).length)return e.next=12,this.removeMoreProducts(i);e.next=14;break;case 12:(u=e.sent)&&(a=u.items);case 14:if(c=t.filter(function(e){return 0<e.quantity}).filter(function(t){return-1===a.findIndex(function(e){return parseInt(e.productId)===parseInt(t.productId)})&&0<t.quantity}).map(function(e){return{quantity:e.quantity,seller:1,id:e.skuId||e.id}}),console.log("productsToAdd",c),s=t.filter(function(e){return 0<e.quantity}).filter(function(e){var t=e.skuId||e.id,n=a.findIndex(function(e){return parseInt(e.id)===parseInt(t)});if(-1===n)return!1;var r=parseInt(a[n].id)===parseInt(e.id),o=parseInt(a[n].quantity)!==parseInt(e.quantity);return r&&o&&0<e.quantity}).map(function(e){var t=e.skuId||e.id;return{index:a.findIndex(function(e){return parseInt(e.id)===parseInt(t)}),quantity:e.quantity}}),console.log("productsToUpdate",s),l=t.filter(function(e){return 0<e.quantity&&!o.includes(parseInt(e.skuId||e.id))}).filter(function(t){var e=a.findIndex(function(e){return parseInt(e.productId)===parseInt(t.productId)});return-1!==e&&parseInt(a[e].id)!==parseInt(t.skuId)}).map(function(t){return[{index:a.findIndex(function(e){return parseInt(e.productId)===parseInt(t.productId)}),seller:1,quantity:0},{seller:1,id:t.skuId,quantity:t.quantity}]}).reduce(function(e,t){var n=E(t,2),r=n[0],o=n[1];return[].concat(x(e),[r,o])},[]),console.log("productsToReplaceSKU",l),f=t.filter(function(e){return e.quantity<1}).filter(function(e){var t=e.skuId||e.id;return-1!==a.findIndex(function(e){return parseInt(e.id)===parseInt(t)})&&0==e.quantity}).map(function(e){var t=e.skuId||e.id;return{index:a.findIndex(function(e){return parseInt(e.id)===parseInt(t)}),quantity:0}}),console.log("productsToRemove",f),s[0])return e.next=25,window.vtexjs.checkout.updateItems(s,null,!1);e.next=25;break;case 25:if(l[0])return e.next=28,window.vtexjs.checkout.replaceSKU(l);e.next=28;break;case 28:if(f[0])return e.next=31,window.vtexjs.checkout.removeItems(f);e.next=31;break;case 31:if(c[0])return e.next=34,window.vtexjs.checkout.addToCart(c,null);e.next=34;break;case 34:case"end":return e.stop()}},e,this)})),function(e){return v.apply(this,arguments)})},{key:"getCustomProducts",value:function(e){var u={};return e.filter(function(e){return!0===e.isCustom}).forEach(function(e){var t,n=e.skuId,r=e.quantity,o=e.customProductItem,a=u[n],i=parseInt(o.quantity)*parseInt(r);a=a?(t=parseInt(a.quantity)+i,w(w({},a),{},{quantity:t})):w(w({},o),{},{quantity:i,isCustom:!0}),u[n]=a}),Object.values(u)}},{key:"getProductIndexInOrderForm",value:(m=I(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:if(n=e.sent,r=n.items,-1!==(o=r.findIndex(function(e){return e.productId==t})))return e.abrupt("return",o);e.next=7;break;case 7:return e.abrupt("return");case 8:case"end":return e.stop()}},e,this)})),function(e){return m.apply(this,arguments)})},{key:"remove",value:(h=I(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:return n=e.sent,r="".concat(this._VTEX_API_ENDPOINT,"/").concat(n.orderFormId,"/items"),o={orderItems:[{index:t,quantity:0}],expectedOrderFormSections:["items"],noSplitItem:!0},e.next=7,this._httpClient.patch(r,o);case 7:case"end":return e.stop()}},e,this)})),function(e){return h.apply(this,arguments)})},{key:"removeMoreProducts",value:(d=I(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:return n=e.sent,r="".concat(this._VTEX_API_ENDPOINT,"/").concat(n.orderFormId,"/items"),o={orderItems:t.map(function(e){return{index:e,quantity:0}}),expectedOrderFormSections:["items"],noSplitItem:!0},e.next=7,this._httpClient.patch(r,o);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)})),function(e){return d.apply(this,arguments)})},{key:"updateProduct",value:(p=I(regeneratorRuntime.mark(function e(t,n){var r,o=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={seller:2<o.length&&void 0!==o[2]?o[2]:1,quantity:n,id:t},e.next=4,this.updateProducts([r]);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)})),function(e,t){return p.apply(this,arguments)})},{key:"updateProducts",value:(f=I(regeneratorRuntime.mark(function e(t){var n,a,r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:if(n=e.sent,a=n.items,r=n.orderFormId,0<(t=t.map(function(e){var t=e.id,n=e.quantity,r=e.seller,o=a.findIndex(function(e){return parseInt(e.id)===parseInt(t)});return{id:t,index:o,quantity:n,seller:r||1}}).filter(function(e){return-1!==e.index})).length)return o={orderItems:t},e.next=10,this._httpClient.patch("/api/checkout/pub/orderForm/".concat(r,"/items"),o);e.next=11;break;case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}},e,this)})),function(e){return f.apply(this,arguments)})},{key:"simulateOrderForm",value:(l=I(regeneratorRuntime.mark(function e(t){var n,r,o=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=1<o.length&&void 0!==o[1]?o[1]:"BRA",e.prev=1,e.next=4,vtexjs.checkout.getOrderForm();case 4:return e.next=6,vtexjs.checkout.calculateShipping({postalCode:t,country:n});case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(1),console.error("Error in simulateOrderForm",e.t0);case 13:case"end":return e.stop()}},e,null,[[1,10]])})),function(e){return l.apply(this,arguments)})},{key:"simulateShipping",value:(s=I(regeneratorRuntime.mark(function e(t,n){var r,o,a=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=2<a.length&&void 0!==a[2]?a[2]:"BRA",e.next=3,vtexjs.checkout.simulateShipping(t,n,r);case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}},e)})),function(e,t){return s.apply(this,arguments)})},{key:"updateCheckoutTransporterSLA",value:(c=I(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,vtexjs.checkout.getOrderForm();case 2:return(n=vtexjs.checkout.orderForm.shippingData).logisticsInfo=t,e.next=6,vtexjs.checkout.sendAttachment("shippingData",n);case 6:case"end":return e.stop()}},e)})),function(e){return c.apply(this,arguments)})},{key:"updateCheckoutAddress",value:(u=I(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,vtexjs.checkout.getOrderForm();case 3:return(n=vtexjs.checkout.orderForm.shippingData).availableAddresses=[w(w({},n.address),t)],n.selectedAddresses=[w(w({},n.address),t)],n.address=w(w({},n.address),t),e.next=9,vtexjs.checkout.sendAttachment("shippingData",n);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}},e)})),function(e){return u.apply(this,arguments)})},{key:"setMultipleCustomDataFields",value:(i=I(regeneratorRuntime.mark(function e(t,n){var r,o,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:return r=e.sent,o=r.orderFormId,a="/api/checkout/pub/orderForm/".concat(o,"/customData/").concat(t),e.prev=5,e.next=8,this._httpClient.put(a,n);case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(5),console.error("setMultipleCustomDataFields",e.t0);case 14:return e.abrupt("return");case 15:case"end":return e.stop()}},e,this,[[5,11]])})),function(e,t){return i.apply(this,arguments)})},{key:"setSingleCustomDataField",value:(a=I(regeneratorRuntime.mark(function e(t,n,r){var o,a,i,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:return o=e.sent,a=o.orderFormId,i="/api/checkout/pub/orderForm/".concat(a,"/customData/").concat(t,"/").concat(n),u={value:r},e.prev=6,e.next=9,this._httpClient.put(i,u);case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e.catch(6),console.error("setSingleCustomDataField",e.t0);case 15:return e.abrupt("return");case 16:case"end":return e.stop()}},e,this,[[6,12]])})),function(e,t,n){return a.apply(this,arguments)})},{key:"removeSingleCustomDataField",value:(o=I(regeneratorRuntime.mark(function e(t,n){var r,o,a,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:return r=e.sent,o=r.orderFormId,a="/api/checkout/pub/orderForm/".concat(o,"/customData/").concat(t,"/").concat(n),i={value:null},e.prev=6,e.next=9,this._httpClient.delete(a,i);case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e.catch(6),console.error("removeSingleCustomDataField",e.t0);case 15:return e.abrupt("return");case 16:case"end":return e.stop()}},e,this,[[6,12]])})),function(e,t){return o.apply(this,arguments)})},{key:"_payloadFactory",value:function(e,t,n){return{id:e,quantity:t,seller:2<arguments.length&&void 0!==n?n:1}}}])&&S(t.prototype,n),r&&S(t,r),e}();t.a=i},svEX:function(e,t,n){"use strict";n.r(t);n("rB9j"),n("UxlC"),n("QWBl"),n("+2oP"),n("FZtP"),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach(function(e){e.hasOwnProperty("append")||Object.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),n=document.createDocumentFragment();e.forEach(function(e){var t=e instanceof Node;n.appendChild(t?e:document.createTextNode(String(e)))}),this.appendChild(n)}})}),function(){if("function"==typeof window.CustomEvent)return;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.Event=e}(),n("07d7"),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var n,r;if(null==this)throw new TypeError("this is null or not defined");var o,a=Object(this),i=a.length>>>0;if("[object Function]"!=={}.toString.call(e))throw new TypeError(e+" is not a function");for(2<=arguments.length&&(n=t),r=0;r<i;)r in a&&(o=a[r],e.call(n,o,r,a)),r++}),n("TWNs"),n("JfAA"),n("EnZy"),i.prototype={add:function(){a(arguments,function(e){this.contains(e)||(this.element.className=r(this.element.className+" "+e))},this)},remove:function(){a(arguments,function(e){this.element.className=r(this.element.className.replace(o(e)," "))},this)},toggle:function(e){return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)},contains:function(e){return o(e).test(this.element.className)},item:function(e){return this.element.className.split(/\s+/)[e]||null},replace:function(e,t){this.remove(e),this.add(t)}},"classList"in Element.prototype||Object.defineProperty(Element.prototype,"classList",{get:function(){return new i(this)}}),window.DOMTokenList&&!DOMTokenList.prototype.replace&&(DOMTokenList.prototype.replace=i.prototype.replace);function r(e){return e.replace(/^\s+|\s+$/g,"")}function o(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)")}function a(e,t,n){for(var r=0;r<e.length;r++)t.call(n,e[r])}function i(e){this.element=e}[Element.prototype,CharacterData.prototype,DocumentType.prototype].forEach(function(e){e.hasOwnProperty("remove")||Object.defineProperty(e,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){null!==this.parentNode&&this.parentNode.removeChild(this)}})}),[Element.prototype,Document.prototype,DocumentFragment.prototype].forEach(function(e){e.hasOwnProperty("prepend")||Object.defineProperty(e,"prepend",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=Array.prototype.slice.call(arguments),n=document.createDocumentFragment();e.forEach(function(e){var t=e instanceof Node;n.appendChild(t?e:document.createTextNode(String(e)))}),this.insertBefore(n,this.firstChild)}})});var u=n("5jWd"),c=n("rdEv");function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.login_=new u.a,this.cartService=new c.a,this.eventHandlerBinds()}var t,n,r;return t=e,(n=[{key:"eventHandlerBinds",value:function(){var t=this;document.addEventListener("DOMContentLoaded",function(e){t.componentBuilder(),t.setHandledButtonPageBackClick(),t.headerSticky(),t.setHandledInitSaveCustomDataEvent(),t.setHandledEndSaveCustomDataEvent()})}},{key:"componentBuilder",value:function(){this.login_.load(),this.createInitSaveCustomDataEvent(),this.createEndSaveCustomDataEvent()}},{key:"handledButtonPageBackClick",value:function(){var e=window.location.pathname.replace("/","");window.location.assign({"empresa-de-mudanca":"/mudanca",endereco:"/empresa-de-mudanca","seguro-info":"/endereco",seguro:"/seguro-info",resumo:"/seguro"}[e])}},{key:"setHandledButtonPageBackClick",value:function(){var t=this,e=document.querySelector(".js-button-page-back");e&&e.addEventListener("click",function(e){return t.handledButtonPageBackClick()})}},{key:"headerSticky",value:function(){var t=document.querySelector(".header");window.addEventListener("scroll",function(e){20<=(document.scrollingElement||document.documentElement).scrollTop?t.classList.add("header--sticky"):t.classList.remove("header--sticky")},!0)}},{key:"createInitSaveCustomDataEvent",value:function(){var e=document.createEvent("Event");e.initEvent("initSaveCustomData",!0,!0),window.initSaveCustomDataEvent=e}},{key:"createEndSaveCustomDataEvent",value:function(){var e=document.createEvent("Event");e.initEvent("endSaveCustomData",!0,!0),window.endSaveCustomDataEvent=e}},{key:"handledInitSaveCustomDataEvent",value:function(){var e=document.querySelector(".button.button--flat"),t=e.querySelector(".button__text"),n=e.querySelector(".button__icon");e&&(n.classList.add("fa-pulse"),n.classList.replace("fa-save","fa-spinner-third"),t.textContent="SALVANDO OS DADOS")}},{key:"handledEndSaveCustomDataEvent",value:function(){var e=document.querySelector(".button.button--flat"),t=e.querySelector(".button__text"),n=e.querySelector(".button__icon");e&&(n.classList.remove("fa-pulse"),e.classList.add("button--success"),n.classList.replace("fa-spinner-third","fa-check-circle"),t.textContent="SALVOU COM SUCCESO",setTimeout(function(){e.classList.remove("button--success"),n.classList.replace("fa-check-circle","fa-save"),t.textContent="SALVAR PARA DEPOIS"},1e3))}},{key:"setHandledInitSaveCustomDataEvent",value:function(){document.addEventListener("initSaveCustomData",this.handledInitSaveCustomDataEvent)}},{key:"setHandledEndSaveCustomDataEvent",value:function(){document.addEventListener("endSaveCustomData",this.handledEndSaveCustomDataEvent)}}])&&s(t.prototype,n),r&&s(t,r),e}())},x9ji:function(e,t,n){"use strict";n("07d7"),n("5s+n"),n("ls82");var a=n("m/Gl"),i=n("jmbs");function c(e,t,n,r,o,a,i){try{var u=e[a](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,o)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._logger=new i.c("httpClient")}var t,n,r,u,o;return t=e,(n=[{key:"get",value:function(e){if(!i.a.isUndefined(e))return this._execute(e,"GET")}},{key:"delete",value:function(e){if(!i.a.isUndefined(e))return this._execute(e,"DELETE")}},{key:"post",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:{};if(!i.a.isUndefined(e))return this._execute(e,"POST",n)}},{key:"put",value:function(e,t){if(!i.a.isUndefined(e)&&!i.a.isUndefined(t))return this._execute(e,"PUT",t)}},{key:"patch",value:function(e,t){if(!i.a.isUndefined(e)&&!i.a.isUndefined(t))return this._execute(e,"PATCH",t)}},{key:"_execute",value:function(e,t,n){var r=this,o={method:t,headers:{accept:"application/vnd.vtex.masterdata.v10+json","content-type":"application/json; charset=utf-8"}};return n&&(o.body=JSON.stringify(n)),Object(a.a)(e,o).then(this.validateResponse).then(this.parseResponseToJson).then(function(e){return e}).catch(function(e){return r._logger.log("Request succeeded with JSON response",e),e})}},{key:"parseResponseToJson",value:(u=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,t.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}),o=function(){var e=this,i=arguments;return new Promise(function(t,n){var r=u.apply(e,i);function o(e){c(r,t,n,o,a,"next",e)}function a(e){c(r,t,n,o,a,"throw",e)}o(void 0)})},function(e){return o.apply(this,arguments)})},{key:"validateResponse",value:function(e){return e.ok?Promise.resolve(e):Promise.reject(new Error(e.statusText))}}])&&s(t.prototype,n),r&&s(t,r),e}();t.a=r}},[[4,0,1]]]);
//# sourceMappingURL=b8one.desktop.general.js.map