/* RAYQUAZA-PC - 09/03/2021 15:13:40 GMT */
"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}!function(t){("object"!=(typeof exports==="undefined"?"undefined":_typeof(exports))||"undefined"==typeof module)&&"function"==typeof define&&define.amd?define(t):t()}(function(){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(){return!!(window.hasOwnProperty("vtexjs")&&"undefined"!=typeof vtexjs&&vtexjs.checkout&&void 0!==vtexjs.checkout&&vtexjs.checkout.orderForm&&void 0!==vtexjs.checkout.orderForm)}g=G={exports:{}},v="object"==_typeof(t)?t:"object"==(typeof window==="undefined"?"undefined":_typeof(window))?window:"object"==(typeof self==="undefined"?"undefined":_typeof(self))?self:t,R=Object.prototype,S=R.hasOwnProperty,_="function"==typeof Symbol?Symbol:{},O=_.iterator||"@@iterator",P=_.asyncIterator||"@@asyncIterator",A=_.toStringTag||"@@toStringTag",(F=v.regeneratorRuntime)?g.exports=F:((F=v.regeneratorRuntime=g.exports).wrap=i,m="suspendedStart",b="suspendedYield",w="executing",x="completed",k={},(C={})[O]=function(){return this},(j=(L=Object.getPrototypeOf)&&L(L(l([]))))&&j!==R&&S.call(j,O)&&(C=j),E=e.prototype=h.prototype=Object.create(C),(n.prototype=E.constructor=e).constructor=n,e[A]=n.displayName="GeneratorFunction",F.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===n||"GeneratorFunction"===(e.displayName||e.name))},F.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,e):(t.__proto__=e,A in t||(t[A]="GeneratorFunction")),t.prototype=Object.create(E),t},F.awrap=function(t){return{__await:t}},a(c.prototype),c.prototype[P]=function(){return this},F.AsyncIterator=c,F.async=function(t,e,n,r){var o=new c(i(t,e,n,r));return F.isGeneratorFunction(e)?o:o.next().then(function(t){return t.done?t.value:o.next()})},a(E),E[A]="Generator",E[O]=function(){return this},E.toString=function(){return"[object Generator]"},F.keys=function(n){var r=[];for(var t in n){r.push(t)}return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},F.values=l,p.prototype={constructor:p,reset:function reset(t){if(this.prev=0,this.next=0,this.sent=this._sent=y,this.done=!1,this.delegate=null,this.method="next",this.arg=y,this.tryEntries.forEach(u),!t)for(var e in this){"t"===e.charAt(0)&&S.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=y)}},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(n){if(this.done)throw n;var r=this;function t(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=y),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=S.call(o,"catchLoc"),c=S.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&S.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,k):this.complete(i)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),k},finish:function finish(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),u(n),k}},catch:function _catch(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r,o=n.completion;return"throw"===o.type&&(r=o.arg,u(n)),r}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(t,e,n){return this.delegate={iterator:l(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=y),k}});function i(t,e,n,r){var i,a,c,s,o=e&&e.prototype instanceof h?e:h,u=Object.create(o.prototype),l=new p(r||[]);return u._invoke=(i=t,a=n,c=l,s=m,function(t,e){if(s===w)throw new Error("Generator is already running");if(s===x){if("throw"===t)throw e;return d()}for(c.method=t,c.arg=e;;){var n=c.delegate;if(n){var r=function t(e,n){var r=e.iterator[n.method];if(r===y){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=y,t(e,n),"throw"===n.method))return k;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return k}var o=f(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,k;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=y),n.delegate=null,k):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,k)}(n,c);if(r){if(r===k)continue;return r}}if("next"===c.method)c.sent=c._sent=c.arg;else if("throw"===c.method){if(s===m)throw s=x,c.arg;c.dispatchException(c.arg)}else"return"===c.method&&c.abrupt("return",c.arg);s=w;var o=f(i,a,c);if("normal"===o.type){if(s=c.done?x:b,o.arg===k)continue;return{value:o.arg,done:c.done}}"throw"===o.type&&(s=x,c.method="throw",c.arg=o.arg)}}),u}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function h(){}function n(){}function e(){}function a(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(c){function s(t,e,n,r){var o=f(c[t],c,e);if("throw"!==o.type){var i=o.arg,a=i.value;return a&&"object"==_typeof(a)&&S.call(a,"__await")?Promise.resolve(a.__await).then(function(t){s("next",t,n,r)},function(t){s("throw",t,n,r)}):Promise.resolve(a).then(function(t){i.value=t,n(i)},r)}r(o.arg)}var e;"object"==_typeof(v.process)&&v.process.domain&&(s=v.process.domain.bind(s)),this._invoke=function(n,r){function t(){return new Promise(function(t,e){s(n,r,t,e)})}return e=e?e.then(t,t):t()}}function s(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function u(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function p(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(s,this),this.reset(!0)}function l(e){if(e){var t=e[O];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;){if(S.call(e,n))return t.value=e[n],t.done=!1,t}return t.value=y,t.done=!0,t};return r.next=r}}return{next:d}}function d(){return{value:y,done:!0}}var g,v,y,m,b,w,x,k,C,L,j,E,R,S,_,O,P,A,F;var G,N=function N(t){console.info("%c %c %c BlueLog|Checkout: %s %c %c ","background:#0277BD;padding:2px 0;","background:#3492ca; padding:2px 0;","background:#001725; color:#99c8e4;padding:2px 0;",t,"background:#3492ca;padding:2px 0;","background:#0277BD;padding:2px 0;")};function T(t){var e=$(".bf-steps__icon");e.removeClass("bf-steps__icon--active");for(var n=0;n<=t;n++){e.eq(n).addClass("bf-steps__icon--active")}$("#bf-steps").removeClass("bf-steps--0 bf-steps--1 bf-steps--2 bf-steps--3 bf-steps--4").addClass("bf-steps--".concat(t))}function I(t){var e={"#/cart":function cart(){return T(0)},"#/email":function email(){return T(1)},"#/profile":function profile(){return T(1)},"#/shipping":function shipping(){return T(2)},"#/payment":function payment(){return T(3)},default:function _default(){return null}};return(e[t]||e["default"])()}function B(t,e){r(this,B),this.bind=function(t){return $(window).on("hashchange",function(){return I(location.hash)})},this.loop=function(t){$(".add-service").each(function(){"Adicionar Embalagem para Presente: GrÃ¡tis"==$(this).text()&&$(this).text("Embalagem para Presente: GrÃ¡tis")})},I(location.hash)}new function t(){var n=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};r(this,t),this.setup=function(t){var e={uiCorporate:".corporate-info-box",startInterval:setInterval(function(){o()&&n.start()},200)};Object.assign(n,Object.assign(e,t))},this.javaScriptLoad=function(t,e,n){var r,o=document.createElement("script");o.setAttribute("id",e),o.setAttribute("src",t),n&&(o.onreadystatechange=o.onload=function(){r||n(),r=!0}),document.getElementsByTagName("head")[0].appendChild(o)},this.start=function(){var r=n;clearInterval(n.startInterval),N("start"),n.javaScriptLoad("https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js?2735","getSelo"),n.AllRoutes=new B,n.bind(),n.interval=setInterval(function(){o()&&n.hashCheck()},1e3),window.ComponentFreeShippingReload=n.freeShippingReload,$(window).on("orderFormUpdated.vtex",function(t,e){var n=e.paymentData.giftCards.filter(function(t){return"Assinatura Mahogany"===t.name})[0];n&&n.inUse&&setTimeout(function(){$("body").find(".gift-card-provider-group-programa-de-fidelidade").parents(".gift-card-section").css({marginBottom:-3}).after('<div id="valor-restante" class="gift-card-section hide inlet-border"><div class="inlet-border--content"><span>Valor restante</span><span class="inlet-border--value">R$ '+r.formatReal(e.value-n.value)+"</span></div></div>"),$("#valor-restante").slideDown()},500)}),$(document).ajaxSuccess(function(t,e,n){n.url.includes("/checkout/pub/orderForm/")&&(n.url.includes("/items/update")||n.url.includes("/attachments/shippingData"))&&r.freeShippingReload()})},this.formatReal=function(t){var e="".concat(t).replace(/([0-9]{2})$/g,",$1");return 6<e.length&&(e=e.replace(/([0-9]{3}),([0-9]{2}$)/g,".$1,$2")),e},this.handleClassLoops=function(t){return void 0!==t&&t.loop&&t.loop(n)},this.allCheck=function(){return n.handleClassLoops(n.AllRoutes)},this.cartCheck=function(){return n.handleClassLoops(n.CartRoute)},this.emailCheck=function(){return n.handleClassLoops(n.EmailRoute)},this.profileCheck=function(){return n.handleClassLoops(n.ProfileRoute)},this.shippingCheck=function(){return n.handleClassLoops(n.ShippingRoute)},this.paymentCheck=function(){return n.handleClassLoops(n.PaymentRoute)},this.freeShippingReload=function(){"#/cart"===location.hash&&($("tr.retire-loja").remove(),n.freeShipping())},this.freeShipping=function(){document.querySelectorAll("ul.shipping-sla-options > li").forEach(function(t){return $("tr.retire-loja").length?null:void(-1===t.className.indexOf("Retirada")&&$("tbody.totalizers-list").append('<tr class="retire-loja"><td colspan="2"><img src="/arquivos/free-shipping@2x.png" id="retire-loja-banner" class="retire-loja-banner"/></td></tr>'))})},this.cartCheck=function(){n.freeShipping()},this.hashCheck=function(){switch(n.allCheck(),$("body").attr("class",function(t,e){return e.replace(/(^|\s)bf-\S+/g,"")}),$(".checkout-promotion-qd-v2").remove(),location.hash){case"#/cart":$("body").addClass("bf-cart"),n.cartCheck();break;case"#/email":$("body").addClass("bf-email"),n.emailCheck();break;case"#/profile":$("body").addClass("bf-profile"),n.profileCheck();break;case"#/shipping":$("body").addClass("bf-shipping"),n.shippingCheck();break;case"#/payment":$("body").addClass("bf-payment"),n.paymentCheck()}},this.bind=function(){function t(t){return void 0!==t&&t.bind&&t.bind(n)}t(n.CartRoute),t(n.EmailRoute),t(n.ProfileRoute),t(n.ShippingRoute),t(n.PaymentRoute),t(n.AllRoutes)},$('link[href*="checkout-custom.css"]').remove(),N("init"),this.setup(e)}});