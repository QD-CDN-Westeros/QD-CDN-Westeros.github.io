(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{3:function(n,e,t){t("SNn1"),n.exports=t("B1/B")},"B1/B":function(n,e){},SNn1:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return o});t("QWBl"),t("FZtP");function c(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var o=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.accordionHead=".accordion__head",this.componentBuilder()}var e,t,o;return e=n,(t=[{key:"handleAccordionClick",value:function(){var e=document.querySelectorAll(this.accordionHead);e.forEach(function(n){n.addEventListener("click",function(){e.forEach(function(n){return n.parentNode.classList.remove("accordion__item--active")}),n.parentNode.classList.add("accordion__item--active")})})}},{key:"componentBuilder",value:function(){var e=this;document.addEventListener("DOMContentLoaded",function(n){e.handleAccordionClick(),e.setHandledContactButtonClick()})}},{key:"setHandledContactButtonClick",value:function(){document.querySelector(".contact__button").addEventListener("click",function(n){n.preventDefault();var e,t=document.querySelector("#jivo-label-buttons .chat_2j");t&&(e=new Event("click",{bubbles:!0}),t.dispatchEvent(e))})}}])&&c(e.prototype,t),o&&c(e,o),n}();new o}},[[3,0,1]]]);
//# sourceMappingURL=b8one.desktop.faq.js.map