(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{14:function(e,t,n){n("p8Pd"),e.exports=n("ENTs")},"5jWd":function(e,t,n){"use strict";n("pNMO"),n("4Brf"),n("0oug"),n("ma9I"),n("4mDm"),n("NBAS"),n("07d7"),n("5s+n"),n("rB9j"),n("PKPk"),n("EnZy"),n("3bBZ"),n("ls82"),n("QWBl"),n("pjDv"),n("JfAA"),n("FZtP");var a=n("jmbs");var o=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.props={language:navigator.language||navigator.userLanguage,currency:"BRL",currencyLocale:"pt-br",minimumFractionDigits:2,storeId:"autosuperstore"}};n("hByQ"),n("8/Qm");n("RDzO");function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.app_=new o,this.logger_=new a.c,this.ensure_=a.a,this.props=this.app_.props}var t,n,r;return t=e,(n=[{key:"render",value:function(e,t){var n=document.querySelector(String(e));n?n.innerHTML=String(t):this.logger_.info("element '".concat(e,"' not found on page!"))}},{key:"getElement",value:function(e){var t=0<arguments.length&&void 0!==e?e:"";return document.querySelector(String(t))}},{key:"getElements",value:function(e){var n=[];return i(0<arguments.length&&void 0!==e?e:[]).forEach(function(e){var t=document.querySelector(String(e));t&&n.push(t)}),n}},{key:"getAllElements",value:function(e){var t=0<arguments.length&&void 0!==e?e:"";return document.querySelectorAll(String(t))}}])&&u(t.prototype,n),r&&u(t,r),e}(),r=n("EVdn"),s=n.n(r);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0!==e)return e;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=p(this,v(t).call(this))).VTEX_LOGOUT_URL="/no-cache/user/logout",e.VTEX_ACCOUNT_URL="/_secure/account#/profile",e.VTEX_ORDERS_URL="/_secure/account#/orders",e.LOGOUT_LABEL="Sair",e.isUserDefined=!1,e.isMobile=window.innerWidth<1024,e.loginContainerSelector=".js-login--container",e.loginActionSelector=".js-login--action",e}var e,n,r,u,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,c),e=t,(n=[{key:"load",value:function(){this.render(),this.eventHandlerBinds()}},{key:"render",value:(u=regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.getElement(this.loginContainerSelector))return e.next=4,s.a.get("/no-cache/profileSystem/getProfile");e.next=9;break;case 4:n=e.sent,r=t.querySelector(this.loginActionSelector),this.isUserDefined=n.IsUserDefined,console.log(this.isUserDefined),this.isUserDefined&&(console.log("loginActionElement",r),r&&(console.log("loginButtonElement",t),this.isMobile||(r.innerHTML=n.FirstName?"Olá, ".concat(n.FirstName):"Olá"),t.insertAdjacentHTML("beforeend",'\n            <ul class="User__Dropdown">  \n              <li class="User__Item" ><a class="User__Link" href="'.concat(this.VTEX_ACCOUNT_URL,'">Minha Conta</a></li>\n              <li class="User__Item" ><a class="User__Link" href="').concat(this.VTEX_ORDERS_URL,'">Minhas mudanças</a></li>\n              <li class="User__Item" ><a class="User__Link" href="').concat(this.VTEX_LOGOUT_URL,'">Sair</a></li>\n            </ul>\n          ')),this.isMobile||(t.href=this.VTEX_ACCOUNT_URL)));case 9:case"end":return e.stop()}},e,this)}),a=function(){var e=this,i=arguments;return new Promise(function(t,n){var r=u.apply(e,i);function a(e){d(r,t,n,a,o,"next",e)}function o(e){d(r,t,n,a,o,"throw",e)}a(void 0)})},function(){return a.apply(this,arguments)})},{key:"userLogin",value:function(){vtexid.start({locale:this.props.language,forceReload:!0})}},{key:"getUserDisplayName",value:function(e){return Ensure.isUndefined(e.FirstName)?e.Email.split("@")[0].split(".")[0]:e.FirstName}},{key:"eventHandlerBinds",value:function(){var t=this,n=this,e=this.getElement(this.loginContainerSelector);e&&e.addEventListener("click",function(e){t.isUserDefined||n.userLogin()},!1)}}])&&f(e.prototype,n),r&&f(e,r),t}();t.a=m},"8/Qm":function(e,t,n){"use strict";n("ma9I"),n("07d7"),n("5s+n"),n("ls82");var u=n("x9ji");function c(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function s(u){return function(){var e=this,i=arguments;return new Promise(function(t,n){var r=u.apply(e,i);function a(e){c(r,t,n,a,o,"next",e)}function o(e){c(r,t,n,a,o,"throw",e)}a(void 0)})}}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);this.entityCode_=e,this.httpClient_=new u.a,this._VTEX_MASTERDATA_ENDPOINT="/api/dataentities/".concat(e)}var e,n,r,a,o,i;return e=t,(n=[{key:"add",value:function(e){var t="".concat(this._VTEX_MASTERDATA_ENDPOINT,"/documents");return this.httpClient_.put(t,e).then(function(e){return e},function(e){return e})}},{key:"update",value:function(e){var t="".concat(this._VTEX_MASTERDATA_ENDPOINT,"/documents");return this.httpClient_.patch(t,e).then(function(e){return e},function(e){return e})}},{key:"search",value:function(e){var t="".concat(this._VTEX_MASTERDATA_ENDPOINT,"/search?").concat(e);return this.httpClient_.get(t).then(function(e){return e})}},{key:"getByDocumentId",value:(i=s(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(this._VTEX_MASTERDATA_ENDPOINT,"/documents/").concat(t),e.next=3,this.httpClient_.get(n);case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}},e,this)})),function(e){return i.apply(this,arguments)})},{key:"getByDocumentIdWithFields",value:(o=s(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(this._VTEX_MASTERDATA_ENDPOINT,"/documents/").concat(t,"?_fields=").concat(n),e.next=3,this.httpClient_.get(r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e,this)})),function(e,t){return o.apply(this,arguments)})},{key:"delete",value:function(e){var t="".concat(this._VTEX_MASTERDATA_ENDPOINT,"/documents/").concat(e);return this.httpClient_.delete(t).then(function(e){return e})}},{key:"getAttachmentUrl",value:function(e,t,n){var r=0<arguments.length&&void 0!==e?e:"",a=1<arguments.length&&void 0!==t?t:"",o=2<arguments.length&&void 0!==n?n:"";return"".concat(this._VTEX_MASTERDATA_ENDPOINT,"/documents/").concat(r,"/").concat(a,"/attachments/").concat(o)}},{key:"getAttachment",value:(a=s(regeneratorRuntime.mark(function e(){var t,n,r,a,o,i=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=0<i.length&&void 0!==i[0]?i[0]:"",n=1<i.length&&void 0!==i[1]?i[1]:"",r=2<i.length&&void 0!==i[2]?i[2]:"",a=this.getAttachmentUrl(t,n,r),e.next=6,this.httpClient_.get(a);case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}},e,this)})),function(){return a.apply(this,arguments)})}])&&l(e.prototype,n),r&&l(e,r),t}();t.a=r},ENTs:function(e,t){},RDzO:function(e,t,n){"use strict";n("pNMO"),n("4Brf"),n("0oug"),n("QWBl"),n("pjDv"),n("4mDm"),n("07d7"),n("JfAA"),n("PKPk"),n("FZtP"),n("3bBZ");function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"isUndefined",value:function(e){var t=0<arguments.length&&void 0!==e?e:void 0;return null==t||""===t||t==={}||t===[]}},{key:"isInputValid",value:function(e){return!this.isUndefined(e)&&e.checkValidity()}},{key:"hasProps",value:function(e,t){return this.getMissingProps(e,t).length<=0}},{key:"getMissingProps",value:function(t,e){var n=[];return a(e).forEach(function(e){e in t||n.push(e)}),n}}],(n=null)&&o(t.prototype,n),r&&o(t,r),e}();t.a=r},jmbs:function(e,t,n){"use strict";n.d(t,"a",function(){return r.a}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return u});var r=n("RDzO");n("ma9I"),n("TeQF"),n("yq1k"),n("oVuX"),n("sMBO"),n("toAj"),n("07d7"),n("TWNs"),n("rB9j"),n("JfAA"),n("JTJg"),n("UxlC"),n("EnZy");function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._logger=new u("Ensure"),this.props=e||{language:navigator.language||navigator.userLanguage,currency:"BRL",currencyLocale:"pt-br",minimumFractionDigits:2}}var e,n,r;return e=t,r=[{key:"getParents",value:function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;0<=--n&&t.item(n)!==this;);return-1<n});for(var n=[];e&&e!==document;e=e.parentNode)(!t||e.matches(t))&&n.push(e);return n}},{key:"serializeForm",value:function(e){for(var t=[],n=0;n<e.elements.length;n++){var r=e.elements[n];if(r.name&&!r.disabled&&"file"!==r.type&&"reset"!==r.type&&"submit"!==r.type&&"button"!==r.type)if("select-multiple"===r.type)for(var a=0;a<r.options.length;a++)r.options[a].selected&&t.push(encodeURIComponent(r.name)+"="+encodeURIComponent(r.options[a].value));else("checkbox"!==r.type&&"radio"!==r.type||r.checked)&&t.push(encodeURIComponent(r.name)+"="+encodeURIComponent(r.value))}return t.join("&")}},{key:"getFormData",value:function(e){for(var t={},n=0;n<e.elements.length;n++){var r=e.elements[n];if(r.name&&!r.disabled&&"file"!==r.type&&"reset"!==r.type&&"submit"!==r.type&&"button"!==r.type)if("select-multiple"===r.type)for(var a=0;a<r.options.length;a++)r.options[a].selected&&(t[r.name]=r.options[a].value);else("checkbox"!==r.type&&"radio"!==r.type||r.checked)&&(t[r.name]=r.value)}return t}},{key:"getRandomID",value:function(){return"_"+Math.random().toString(36).substr(2,9)}},{key:"setCookie",value:function(e,t,n){var r=new Date;r.setTime(r.getTime()+24*n*60*60*1e3);var a="expires="+r.toUTCString();document.cookie="".concat(e,"=").concat(t,";").concat(a,";path=/")}},{key:"getCookie",value:function(t){return decodeURIComponent(document.cookie).split(";").filter(function(e){return e.includes(t)})[0]||""}},{key:"isInViewport",value:function(e){var t=window.innerHeight||document.documentElement.clientHeight,n=window.innerWidth||document.documentElement.clientWidth,r=e.getBoundingClientRect(),a=r.top,o=r.right,i=r.bottom,u=r.left;return 0<=a&&0<=u&&i<=t&&o<=n}},{key:"removeAccents",value:function(e){var t={a:"á|à|ã|â|À|Á|Ã|Â",e:"é|è|ê|É|È|Ê",i:"í|ì|î|Í|Ì|Î",o:"ó|ò|ô|õ|Ó|Ò|Ô|Õ",u:"ú|ù|û|ü|Ú|Ù|Û|Ü",c:"ç|Ç",n:"ñ|Ñ"};for(var n in t)e=e.replace(new RegExp(t[n],"g"),n);return e}}],(n=[{key:"formatPrice",value:function(e){return e=(+(e/=100)).toFixed(Math.max(0,~~this.props.minimumFractionDigits)),new Intl.NumberFormat(this.props.currencyLocale,{style:"currency",currency:this.props.currency,minimumFractionDigits:this.props.minimumFractionDigits}).format(e)}}])&&a(e.prototype,n),r&&a(e,r),t}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function t(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"B8ONE Logger Component";!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.logName=e}var e,n,r;return e=t,(n=[{key:"error",value:function(e,t){var n=0<arguments.length&&void 0!==e?e:"",r=1<arguments.length&&void 0!==t?t:{};console.error(n,r)}},{key:"info",value:function(e){var t=0<arguments.length&&void 0!==e?e:"";console.info(t)}},{key:"warning",value:function(e){var t=0<arguments.length&&void 0!==e?e:"";console.warn(this.logName,t)}},{key:"log",value:function(e){var t=0<arguments.length&&void 0!==e?e:"";console.log(t)}},{key:"log",value:function(e,t){var n=0<arguments.length&&void 0!==e?e:"",r=1<arguments.length&&void 0!==t?t:{};console.log(n,r)}}])&&i(e.prototype,n),r&&i(e,r),t}()},p8Pd:function(e,t,n){"use strict";n.r(t);n("pNMO"),n("4Brf"),n("0oug"),n("QWBl"),n("pjDv"),n("4mDm"),n("07d7"),n("rB9j"),n("JfAA"),n("PKPk"),n("UxlC"),n("FZtP"),n("3bBZ"),n("2B1R");function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.navDadClass=".js-nav-dad",this.navItemClass=".js-nav-item",this.navContentElement=".js-nav-content",this.navBackDadElement=".js-nav-dad-back",this.navBackElement=".js-nav-back",this.activeNaModal=""}var t,n,r;return t=e,(n=[{key:"handlerNavDad",value:function(){var n=this;a(document.querySelectorAll(this.navDadClass)).map(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=e.target;n._activeNavModal(t)})})}},{key:"handlerItem",value:function(){var n=this;a(document.querySelectorAll(this.navItemClass)).map(function(e){e.addEventListener("click",function(e){e.preventDefault();var t=e.target.dataset.navName;n.activeNaModal=t,n._changeAllActivities(t)})})}},{key:"_activeNavModal",value:function(e){var t=e.parentElement,n=e.classList[0],r=t.parentElement.classList[0];this._setActiveClass(e,n),this._setActiveClass(t.parentElement,r)}},{key:"_changeAllActivities",value:function(e){var t=document.querySelector('[data-nav-name="'.concat(e,'"]')),n=document.querySelector('[data-nav-content="'.concat(e,'"]')),r=t.classList[0],a=n.classList[0];this._setActiveClass(t,r),this._setActiveClass(n,a)}},{key:"_setActiveClass",value:function(e,t){e.classList.toggle("".concat(t,"--active"))}},{key:"backHandler",value:function(){var t=this,e=document.querySelectorAll(this.navBackElement),n=document.querySelectorAll(this.navBackDadElement);a(e).map(function(e){e.addEventListener("click",function(e){e.preventDefault(),t._changeAllActivities(t.activeNaModal)})}),a(n).map(function(e){e.addEventListener("click",function(e){var t=e.target.parentElement.parentElement.parentElement.parentElement,n=t.classList[1],r=e.target.parentElement.parentElement.previousElementSibling,a=r.classList[2];r.classList.remove(a),t.classList.remove(n)})})}},{key:"load",value:function(){this.handlerNavDad(),this.handlerItem(),this.backHandler()}}])&&o(t.prototype,n),r&&o(t,r),e}(),u=n("5jWd"),c=n("rdEv");function s(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.nav_=new i,this.login_=new u.a,this.cartService=new c.a,this.eventHandlerBinds()}var t,n,r;return t=e,(n=[{key:"loadscreen",value:function(){var e=document.querySelector(".js-loadscreen"),t=document.querySelector(".js-bar-status"),n=1,r=setInterval(function(){100<=n?(clearInterval(r),e.classList.add("loadscreen--disabled")):(n++,t.style.width=n+"%")},25)}},{key:"accordion",value:function(){$(".js-footer-expand").click(function(e){$(this).next().slideToggle()})}},{key:"eventHandlerBinds",value:function(){var t=this;document.addEventListener("DOMContentLoaded",function(e){t.headerSticky(),t.componentBuilder(),t.setHandledButtonPageBackClick(),t.menuActions(),t.addCSSPropertyVH(),t.setHandledWindowResize(),t.cancelAction(),t.setHandledInitSaveCustomDataEvent(),t.setHandledEndSaveCustomDataEvent()})}},{key:"componentBuilder",value:function(){this.login_.load(),this.nav_.load(),this.createInitSaveCustomDataEvent(),this.createEndSaveCustomDataEvent()}},{key:"handledButtonPageBackClick",value:function(){var e=window.location.pathname.replace("/","");window.location.assign({"empresa-de-mudanca":"/mudanca",endereco:"/empresa-de-mudanca","seguro-info":"/endereco",seguro:"/seguro-info",resumo:"/seguro"}[e])}},{key:"setHandledButtonPageBackClick",value:function(){var t=this,e=document.querySelector(".js-button-page-back");e&&e.addEventListener("click",function(e){return t.handledButtonPageBackClick()})}},{key:"menuActions",value:function(){function t(){var e=n.children[0];e.classList.contains("fa-bars")?(e.classList.replace("fa-bars","fa-times"),document.body.classList.add("without-scroll"),r.classList.add("header__wrapper--menu-show")):(e.classList.replace("fa-times","fa-bars"),document.body.classList.remove("without-scroll"),r.classList.remove("header__wrapper--menu-show"))}var n=document.querySelector(".header__button-menu"),r=document.querySelector(".header__wrapper--menu");n.addEventListener("click",t),s(document.querySelectorAll(".navigation__list > .navigation__link")).forEach(function(e){e.addEventListener("click",function(e){t()})}),s(document.querySelectorAll(".navigation__list .list__item")).forEach(function(e){var t=e.querySelector(".navigation__sublist");e.querySelector(".navigation__link").addEventListener("click",function(e){e.target;t&&t.classList.add("navigation__sublist--show")}),t.querySelector(".header__button-back").addEventListener("click",function(e){t&&t.classList.remove("navigation__sublist--show")})})}},{key:"cancelAction",value:function(){var e=document.querySelector("button.tooltip");e&&e.addEventListener("click",function(e){e.preventDefault()})}},{key:"addCSSPropertyVH",value:function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))}},{key:"setHandledWindowResize",value:function(){var t=this;window.addEventListener("resize",function(e){t.addCSSPropertyVH()})}},{key:"headerSticky",value:function(){var t=document.querySelector(".header");window.addEventListener("scroll",function(e){20<=(document.scrollingElement||document.documentElement).scrollTop?t.classList.add("header--sticky"):t.classList.remove("header--sticky")},!0)}},{key:"createInitSaveCustomDataEvent",value:function(){var e=document.createEvent("Event");e.initEvent("initSaveCustomData",!0,!0),window.initSaveCustomDataEvent=e}},{key:"createEndSaveCustomDataEvent",value:function(){var e=document.createEvent("Event");e.initEvent("endSaveCustomData",!0,!0),window.endSaveCustomDataEvent=e}},{key:"handledInitSaveCustomDataEvent",value:function(){var e=document.querySelector(".js-button-save");e&&(e.classList.add("fa-pulse"),e.classList.replace("fa-save","fa-spinner-third"))}},{key:"handledEndSaveCustomDataEvent",value:function(){var e=document.querySelector(".js-button-save");e&&(e.classList.remove("fa-pulse"),e.classList.replace("fa-spinner-third","fa-check-circle"),setTimeout(function(){e.classList.remove("button--success"),e.classList.replace("fa-check-circle","fa-save")},1e3))}},{key:"setHandledInitSaveCustomDataEvent",value:function(){document.addEventListener("initSaveCustomData",this.handledInitSaveCustomDataEvent)}},{key:"setHandledEndSaveCustomDataEvent",value:function(){document.addEventListener("endSaveCustomData",this.handledEndSaveCustomDataEvent)}}])&&l(t.prototype,n),r&&l(t,r),e}())},rdEv:function(e,t,n){"use strict";n("pNMO"),n("4Brf"),n("0oug"),n("ma9I"),n("TeQF"),n("x0AG"),n("QWBl"),n("pjDv"),n("yq1k"),n("4mDm"),n("2B1R"),n("E9XD"),n("5DmW"),n("27RR"),n("tkto"),n("07d7"),n("B6y2"),n("5s+n"),n("JfAA"),n("JTJg"),n("PKPk"),n("FZtP"),n("3bBZ"),n("ls82");var k=n("jmbs"),b=n("x9ji");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function w(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){a(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function _(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function c(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function I(u){return function(){var e=this,i=arguments;return new Promise(function(t,n){var r=u.apply(e,i);function a(e){c(r,t,n,a,o,"next",e)}function o(e){c(r,t,n,a,o,"throw",e)}a(void 0)})}}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._VTEX_API_ENDPOINT="/api/checkout/pub/orderForm",this._logger=new k.c("Cart service"),this._httpClient=new b.a}var t,n,r,a,o,i,u,c,s,l,d,f,p,v,h,m,y,g;return t=e,(n=[{key:"getCurrent",value:(g=I(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._httpClient.get(this._VTEX_API_ENDPOINT);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e,this)})),function(){return g.apply(this,arguments)})},{key:"add",value:(y=I(regeneratorRuntime.mark(function e(t,n){var r,a,o,i,u,c=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r=2<c.length&&void 0!==c[2]?c[2]:1,k.a.isUndefined(t)){e.next=10;break}return e.next=4,this.getCurrent();case 4:return a=e.sent,-1<(o=a.items.findIndex(function(e){return e.id===t}))&&(n=parseInt(n)+parseInt(a.items[o].quantity)),i="".concat(this._VTEX_API_ENDPOINT,"/").concat(a.orderFormId,"/items"),u={orderItems:[{seller:r.toString(),quantity:parseInt(n),id:t.toString()}]},e.abrupt("return",this._httpClient.patch(i,u));case 10:case"end":return e.stop()}},e,this)})),function(e,t){return y.apply(this,arguments)})},{key:"checkoutCRUD",value:(m=I(regeneratorRuntime.mark(function e(t){var n,o,r,a,i,u,c,s,l,d;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.vtexjs.checkout.getOrderForm();case 2:if(n=e.sent,o=n.items,r=this.getCustomProducts(t),t=t.filter(function(e){return!e.isCustom}),t=[].concat(_(t),_(r)),a=[19,698,25,26],0<(i=o.reduce(function(e,t,n){return[25,26].includes(parseInt(t.id))?[].concat(_(e),[n]):e},[])).length)return e.next=12,this.removeMoreProducts(i);e.next=14;break;case 12:(u=e.sent)&&(o=u.items);case 14:if(c=t.filter(function(e){return 0<e.quantity}).filter(function(t){return-1===o.findIndex(function(e){return parseInt(e.productId)===parseInt(t.productId)})&&0<t.quantity}).map(function(e){return{quantity:e.quantity,seller:1,id:e.skuId||e.id}}),console.log("productsToAdd",c),s=t.filter(function(e){return 0<e.quantity}).filter(function(e){var t=e.skuId||e.id,n=o.findIndex(function(e){return parseInt(e.id)===parseInt(t)});if(-1===n)return!1;var r=parseInt(o[n].id)===parseInt(e.id),a=parseInt(o[n].quantity)!==parseInt(e.quantity);return r&&a&&0<e.quantity}).map(function(e){var t=e.skuId||e.id;return{index:o.findIndex(function(e){return parseInt(e.id)===parseInt(t)}),quantity:e.quantity}}),console.log("productsToUpdate",s),l=t.filter(function(e){return 0<e.quantity&&!a.includes(parseInt(e.skuId||e.id))}).filter(function(t){var e=o.findIndex(function(e){return parseInt(e.productId)===parseInt(t.productId)});return-1!==e&&parseInt(o[e].id)!==parseInt(t.skuId)}).map(function(t){return[{index:o.findIndex(function(e){return parseInt(e.productId)===parseInt(t.productId)}),seller:1,quantity:0},{seller:1,id:t.skuId,quantity:t.quantity}]}).reduce(function(e,t){var n=E(t,2),r=n[0],a=n[1];return[].concat(_(e),[r,a])},[]),console.log("productsToReplaceSKU",l),d=t.filter(function(e){return e.quantity<1}).filter(function(e){var t=e.skuId||e.id;return-1!==o.findIndex(function(e){return parseInt(e.id)===parseInt(t)})&&0==e.quantity}).map(function(e){var t=e.skuId||e.id;return{index:o.findIndex(function(e){return parseInt(e.id)===parseInt(t)}),quantity:0}}),console.log("productsToRemove",d),s[0])return e.next=25,window.vtexjs.checkout.updateItems(s,null,!1);e.next=25;break;case 25:if(l[0])return e.next=28,window.vtexjs.checkout.replaceSKU(l);e.next=28;break;case 28:if(d[0])return e.next=31,window.vtexjs.checkout.removeItems(d);e.next=31;break;case 31:if(c[0])return e.next=34,window.vtexjs.checkout.addToCart(c,null);e.next=34;break;case 34:case"end":return e.stop()}},e,this)})),function(e){return m.apply(this,arguments)})},{key:"getCustomProducts",value:function(e){var i={};return e.filter(function(e){return!0===e.isCustom}).forEach(function(e){var t=e.skuId,n=e.quantity,r=e.customProductItem,a=i[t],o=parseInt(r.quantity)*parseInt(n);a?a=w({},a,{quantity:parseInt(a.quantity)+o}):a=w({},r,{quantity:o,isCustom:!0});i[t]=a}),Object.values(i)}},{key:"getProductIndexInOrderForm",value:(h=I(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:if(n=e.sent,r=n.items,-1!==(a=r.findIndex(function(e){return e.productId==t})))return e.abrupt("return",a);e.next=7;break;case 7:return e.abrupt("return");case 8:case"end":return e.stop()}},e,this)})),function(e){return h.apply(this,arguments)})},{key:"remove",value:(v=I(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:return n=e.sent,r="".concat(this._VTEX_API_ENDPOINT,"/").concat(n.orderFormId,"/items"),a={orderItems:[{index:t,quantity:0}],expectedOrderFormSections:["items"],noSplitItem:!0},e.next=7,this._httpClient.patch(r,a);case 7:case"end":return e.stop()}},e,this)})),function(e){return v.apply(this,arguments)})},{key:"removeMoreProducts",value:(p=I(regeneratorRuntime.mark(function e(t){var n,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:return n=e.sent,r="".concat(this._VTEX_API_ENDPOINT,"/").concat(n.orderFormId,"/items"),a={orderItems:t.map(function(e){return{index:e,quantity:0}}),expectedOrderFormSections:["items"],noSplitItem:!0},e.next=7,this._httpClient.patch(r,a);case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)})),function(e){return p.apply(this,arguments)})},{key:"updateProduct",value:(f=I(regeneratorRuntime.mark(function e(t,n){var r,a=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={seller:2<a.length&&void 0!==a[2]?a[2]:1,quantity:n,id:t},e.next=4,this.updateProducts([r]);case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e,this)})),function(e,t){return f.apply(this,arguments)})},{key:"updateProducts",value:(d=I(regeneratorRuntime.mark(function e(t){var n,o,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:if(n=e.sent,o=n.items,r=n.orderFormId,0<(t=t.map(function(e){var t=e.id,n=e.quantity,r=e.seller,a=o.findIndex(function(e){return parseInt(e.id)===parseInt(t)});return{id:t,index:a,quantity:n,seller:r||1}}).filter(function(e){return-1!==e.index})).length)return a={orderItems:t},e.next=10,this._httpClient.patch("/api/checkout/pub/orderForm/".concat(r,"/items"),a);e.next=11;break;case 10:return e.abrupt("return",e.sent);case 11:case"end":return e.stop()}},e,this)})),function(e){return d.apply(this,arguments)})},{key:"simulateOrderForm",value:(l=I(regeneratorRuntime.mark(function e(t){var n,r,a=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=1<a.length&&void 0!==a[1]?a[1]:"BRA",e.prev=1,e.next=4,vtexjs.checkout.getOrderForm();case 4:return e.next=6,vtexjs.checkout.calculateShipping({postalCode:t,country:n});case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(1),console.error("Error in simulateOrderForm",e.t0);case 13:case"end":return e.stop()}},e,null,[[1,10]])})),function(e){return l.apply(this,arguments)})},{key:"simulateShipping",value:(s=I(regeneratorRuntime.mark(function e(t,n){var r,a,o=arguments;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=2<o.length&&void 0!==o[2]?o[2]:"BRA",e.next=3,vtexjs.checkout.simulateShipping(t,n,r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}},e)})),function(e,t){return s.apply(this,arguments)})},{key:"updateCheckoutTransporterSLA",value:(c=I(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,vtexjs.checkout.getOrderForm();case 2:return(n=vtexjs.checkout.orderForm.shippingData).logisticsInfo=t,e.next=6,vtexjs.checkout.sendAttachment("shippingData",n);case 6:case"end":return e.stop()}},e)})),function(e){return c.apply(this,arguments)})},{key:"updateCheckoutAddress",value:(u=I(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,vtexjs.checkout.getOrderForm();case 3:return(n=vtexjs.checkout.orderForm.shippingData).availableAddresses=[w({},n.address,{},t)],n.selectedAddresses=[w({},n.address,{},t)],n.address=w({},n.address,{},t),e.next=9,vtexjs.checkout.sendAttachment("shippingData",n);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}},e)})),function(e){return u.apply(this,arguments)})},{key:"setMultipleCustomDataFields",value:(i=I(regeneratorRuntime.mark(function e(t,n){var r,a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:return r=e.sent,a=r.orderFormId,o="/api/checkout/pub/orderForm/".concat(a,"/customData/").concat(t),e.prev=5,e.next=8,this._httpClient.put(o,n);case 8:return e.abrupt("return",e.sent);case 11:e.prev=11,e.t0=e.catch(5),console.error("setMultipleCustomDataFields",e.t0);case 14:return e.abrupt("return");case 15:case"end":return e.stop()}},e,this,[[5,11]])})),function(e,t){return i.apply(this,arguments)})},{key:"setSingleCustomDataField",value:(o=I(regeneratorRuntime.mark(function e(t,n,r){var a,o,i,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:return a=e.sent,o=a.orderFormId,i="/api/checkout/pub/orderForm/".concat(o,"/customData/").concat(t,"/").concat(n),u={value:r},e.prev=6,e.next=9,this._httpClient.put(i,u);case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e.catch(6),console.error("setSingleCustomDataField",e.t0);case 15:return e.abrupt("return");case 16:case"end":return e.stop()}},e,this,[[6,12]])})),function(e,t,n){return o.apply(this,arguments)})},{key:"removeSingleCustomDataField",value:(a=I(regeneratorRuntime.mark(function e(t,n){var r,a,o,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getCurrent();case 2:return r=e.sent,a=r.orderFormId,o="/api/checkout/pub/orderForm/".concat(a,"/customData/").concat(t,"/").concat(n),i={value:null},e.prev=6,e.next=9,this._httpClient.delete(o,i);case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e.catch(6),console.error("removeSingleCustomDataField",e.t0);case 15:return e.abrupt("return");case 16:case"end":return e.stop()}},e,this,[[6,12]])})),function(e,t){return a.apply(this,arguments)})},{key:"_payloadFactory",value:function(e,t,n){return{id:e,quantity:t,seller:2<arguments.length&&void 0!==n?n:1}}}])&&x(t.prototype,n),r&&x(t,r),e}();t.a=o},x9ji:function(e,t,n){"use strict";n("07d7"),n("5s+n"),n("ls82");var o=n("m/Gl"),i=n("jmbs");function c(e,t,n,r,a,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(r,a)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._logger=new i.c("httpClient")}var t,n,r,u,a;return t=e,(n=[{key:"get",value:function(e){if(!i.a.isUndefined(e))return this._execute(e,"GET")}},{key:"delete",value:function(e){if(!i.a.isUndefined(e))return this._execute(e,"DELETE")}},{key:"post",value:function(e,t){var n=1<arguments.length&&void 0!==t?t:{};if(!i.a.isUndefined(e))return this._execute(e,"POST",n)}},{key:"put",value:function(e,t){if(!i.a.isUndefined(e)&&!i.a.isUndefined(t))return this._execute(e,"PUT",t)}},{key:"patch",value:function(e,t){if(!i.a.isUndefined(e)&&!i.a.isUndefined(t))return this._execute(e,"PATCH",t)}},{key:"_execute",value:function(e,t,n){var r=this,a={method:t,headers:{accept:"application/vnd.vtex.masterdata.v10+json","content-type":"application/json; charset=utf-8"}};return n&&(a.body=JSON.stringify(n)),Object(o.a)(e,a).then(this.validateResponse).then(this.parseResponseToJson).then(function(e){return e}).catch(function(e){return r._logger.log("Request succeeded with JSON response",e),e})}},{key:"parseResponseToJson",value:(u=regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.ok){e.next=2;break}return e.abrupt("return",t);case 2:return e.next=4,t.json();case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}},e)}),a=function(){var e=this,i=arguments;return new Promise(function(t,n){var r=u.apply(e,i);function a(e){c(r,t,n,a,o,"next",e)}function o(e){c(r,t,n,a,o,"throw",e)}a(void 0)})},function(e){return a.apply(this,arguments)})},{key:"validateResponse",value:function(e){return e.ok?Promise.resolve(e):Promise.reject(new Error(e.statusText))}}])&&s(t.prototype,n),r&&s(t,r),e}();t.a=r}},[[14,0,2]]]);
//# sourceMappingURL=b8one.mobile.general.js.map