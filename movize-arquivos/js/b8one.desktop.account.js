(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1:function(e,t,n){n("2JCs"),e.exports=n("m+ZX")},"2JCs":function(e,t,n){"use strict";n.r(t);n("pNMO"),n("4Brf"),n("0oug"),n("ma9I"),n("TeQF"),n("QWBl"),n("pjDv"),n("yq1k"),n("4mDm"),n("oVuX"),n("2B1R"),n("Junv"),n("+2oP"),n("sMBO"),n("T63A"),n("07d7"),n("5s+n"),n("rB9j"),n("JfAA"),n("PKPk"),n("UxlC"),n("EnZy"),n("FZtP"),n("3bBZ"),n("ls82");function u(e,t,n,r,o,a,c){try{var i=e[a](c),u=i.value}catch(e){return void n(e)}i.done?t(u):Promise.resolve(u).then(r,o)}function c(i){return function(){var e=this,c=arguments;return new Promise(function(t,n){var r=i.apply(e,c);function o(e){u(r,t,n,o,a,"next",e)}function a(e){u(r,t,n,o,a,"throw",e)}o(void 0)})}}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(e,t)||d(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||d(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l={"Preparando Entrega":"Pedido Recebido","Pagamento Aprovado":"Pagamento Aprovado","Preparando Pedido":"Pedido Confirmado.","Cancelamento Solicitado":"Cancelado"},o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.changePageTitle(),this.setHandledsToWindow(),this.userOrders=[],this.setHandled(),"#/orders"===location.hash&&this.fetchUserOrdersAndUpdateTheOrderElements()}var t,n,r,o;return t=e,(n=[{key:"setPageTitle",value:function(e){document.querySelector(".vtex-account__page .vtex-pageHeader__title").textContent=e}},{key:"changePageTitle",value:function(){"#/orders"===location.hash&&this.setPageTitle("Minhas mudanças")}},{key:"setHandledsToWindow",value:function(){var t=this;window.addEventListener("hashchange",function(e){return t.changePageTitle()})}},{key:"observeCallback",value:function(e,t,n){var r,o=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=d(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw a}}}}(e);try{for(o.s();!(r=o.n()).done;){var a=r.value;"childList"===a.type&&n(a,t)}}catch(e){o.e(e)}finally{o.f()}}},{key:"observeOrderSection",value:function(e,n){var r=this,t=document.querySelector(e);new MutationObserver(function(e,t){return r.observeCallback(e,t,n)}).observe(t,{childList:!0,subtree:!0})}},{key:"createOrderProduct",value:function(e){var t=e.productName,n=e.productId,r=e.quantity;return'\n      <div class="myo-order-product w-100 pb2 pt2 overflow-y-hidden" data-product-id="'.concat(n,'">\n        <div class="v-top dib w-20 h-auto">\n          <img \n            src="/arquivos/ids/155403-50-50"\n            alt="Item de 0,1 m³ sem caixa" \n            crossorigin="anonymous"\n          />\n        </div>\n        \n        <div class="dib w-80 pl3 c-on-base f6 fw4 lh-copy">\n          <h4 class="db mb1 mt0">\n            <a \n              href="/custom-item-1/p"\n              class="c-link hover-c-link c-link--visited fw4 f6 f5-l link"\n              target="_blank" \n              rel="noopener"\n            >\n              ').concat(t,'\n            </a>\n          </h4>\n          \n          <span class="db mt0 mb2 f6 fw6">\n            ').concat(r," un.\n          </span>\n        </div>\n      </div>\n    ")}},{key:"addOrderProducts",value:function(e,t){var n,r,o=this,a=document.querySelector(".myo-order-card:nth-child(".concat(t,") .myo-order-product")).parentElement;e.customData&&(n=e.customData.customApps.filter(function(e){return"selecteditems"===e.id})[0],r=JSON.parse(n.fields.products_data),a.innerHTML+=r.filter(function(e){return e.isCustom}).map(function(e){var t=e.quantity,n=e.customAttributes,r=e.productId;return o.createOrderProduct({quantity:t,productId:r,productName:n["product-name"]})}).join(""))}},{key:"hideCustomProducts",value:function(){var e=i(document.querySelectorAll(".myo-order-product")),n=["Item de 0,1 m³ sem caixa","Item de 0,1 m³ com caixa"];e.filter(function(e){var t=e.querySelector('h4 a[href$="/p"]');return n.includes(t.textContent)}).forEach(function(e){return e.classList.add("hidden")})}},{key:"createTotal",value:function(e,t){var n=document.createElement("div");return n.setAttribute("class","fr fl-ns w-50"),n.innerHTML='\n      <div class="db w-100 f7 f6-xl fw4 c-muted-1 ttu tr tl-ns">\n        <span>'.concat(e,'</span>\n      </div>\n      \n      <div class="db w-100 f6 fw5 c-muted-1 tr tl-ns f5-l">\n        <span>').concat(t,'</span>\n        <div class="absolute dn dib-ns ml3 mt2"></div>\n      </div>\n    '),n}},{key:"addTotals",value:function(e,t){var n,r,o,a,c,i,u=document.querySelector(".myo-order-card:nth-child(".concat(t,") .myo-order-header"));e.customData&&(n=e.customData.customApps.filter(function(e){return"selectedcourier"===e.id})[0],r=e.customData.customApps.filter(function(e){return"insurance"===e.id})[0],o=JSON.parse(n.fields.courier_data).deliveryTypeSelected.priceFormatted,a=r.fields.total,c=this.createTotal("Total Segurado",a||"R$ 0,00"),i=this.createTotal("Total Mudança",o),u.insertBefore(c,u.children[1]),u.insertBefore(i,u.children[1]))}},{key:"addIDToProducts",value:function(r,e){document.querySelectorAll(".myo-order-card:nth-child(".concat(e,") .myo-order-product")).forEach(function(e){var t=e.querySelector('h4 a[href$="/p"]'),n=r.items.filter(function(e){return e.name===t.textContent})[0];e.setAttribute("data-product-id",n.productId),e.setAttribute("data-product-sku",n.id)})}},{key:"showOrders",value:function(){document.querySelectorAll(".myo-order-card").forEach(function(e){return e.classList.add("myo-order-card--show")})}},{key:"addInsuranceInfo",value:function(e,t){var n,r,d=document.querySelector(".myo-order-card:nth-child(".concat(t,")"));!e.customData||"skipped"!==(n=e.customData.customApps.filter(function(e){return"insurance"===e.id})[0]).fields.items&&"none"!==n.fields.items&&(r=JSON.parse(n.fields.items),Object.entries(r).forEach(function(e){var t=s(e,2),n=t[0],r=t[1],o=d.querySelector('[data-product-id="'.concat(n,'"]')),a=document.createElement("span");a.setAttribute("class","myo-order-product-insured"),a.textContent="Asegurado";var c,i,u=document.createElement("span");u.setAttribute("class","db mt0 mb2 f6 fw6"),u.textContent="Asegurado por ".concat(r.totalInsuranceFormatted),o&&(i=(c=o.querySelector("h4")).parentElement,c.appendChild(a),i.appendChild(u))}))}},{key:"addDateOfDelivery",value:function(e,t){var n,r=document.querySelector(".myo-order-card:nth-child(".concat(t,") .bg-base > div:nth-child(2)"));e.customData&&(n=e.customData.customApps.filter(function(e){return"orderinfo"===e.id})[0].fields.moving_date,r.innerHTML+="\n      <div>\n        <p>\n          Data da mudança: ".concat(n.split("/").reverse().join("/"),"\n        </p>\n      </div>\n    "))}},{key:"fetchUserOrdersAndUpdateTheOrderElements",value:(o=c(regeneratorRuntime.mark(function e(){var a=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.observeOrderSection(".vtex-account",function(){var n=c(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i(t.addedNodes).filter(function(e){return e instanceof Element}).filter(function(e){return e.matches("section.ph0")})[0])return document.querySelectorAll(".myo-seller-order-id + div span").forEach(function(e){l.hasOwnProperty(e.textContent)?e.textContent=l[e.textContent]:e.parentElement.parentElement.parentElement.style.display="none"}),a.hideCustomProducts(),r=i(document.querySelectorAll(".myo-order-card .myo-order-id")),e.next=8,Promise.all(r.map(function(){var t=c(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.textContent.replace(/(\#|\s)+/,""),e.next=3,fetch("/api/oms/user/orders/".concat(n));case 3:return e.next=5,e.sent.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}()));e.next=12;break;case 8:o=e.sent,(a.userOrders=o).forEach(function(e,t){a.addIDToProducts(e,t+1),a.addDateOfDelivery(e,t+1),a.addOrderProducts(e,t+1),a.addInsuranceInfo(e,t+1),a.addTotals(e,t+1)}),a.showOrders();case 12:case"end":return e.stop()}},e)}));return function(e,t){return n.apply(this,arguments)}}());case 1:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)})},{key:"setHandled",value:function(){var t=this;document.querySelector('.vtex-account_menu-link[href="#/orders"]').addEventListener("click",function(e){return t.fetchUserOrdersAndUpdateTheOrderElements()})}}])&&a(t.prototype,n),r&&a(t,r),e}();document.addEventListener("DOMContentLoaded",function(){new o})},"m+ZX":function(e,t){}},[[1,0,1]]]);
//# sourceMappingURL=b8one.desktop.account.js.map