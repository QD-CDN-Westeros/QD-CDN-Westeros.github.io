(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{11:function(e,t,n){n("AQog"),e.exports=n("5YeU")},"5YeU":function(e,t){},AQog:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return o});n("pNMO"),n("4Brf"),n("0oug"),n("QWBl"),n("pjDv"),n("4mDm"),n("07d7"),n("rB9j"),n("JfAA"),n("PKPk"),n("UxlC"),n("FZtP"),n("3bBZ");var r=n("L+tW");function i(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sliderContainer=".stripeArea__wrapper",this.componentBuilder()}var t,n,o;return t=e,(n=[{key:"menuActions",value:function(){function t(){var e=n.children[0];e.classList.contains("fa-bars")?e.classList.replace("fa-bars","fa-times"):e.classList.replace("fa-times","fa-bars"),document.body.classList.toggle("without-scroll"),o.classList.toggle("header__wrapper--menu-show")}var n=document.querySelector(".header__button-menu"),o=document.querySelector(".header__wrapper--menu");n.addEventListener("click",t),i(document.querySelectorAll(".navigation__list > .navigation__link")).forEach(function(e){e.addEventListener("click",function(e){t()})}),i(document.querySelectorAll(".navigation__list .list__item")).forEach(function(e){var t=e.querySelector(".navigation__sublist");e.querySelector(".navigation__link").addEventListener("click",function(e){e.target;t&&t.classList.add("navigation__sublist--show")}),t.querySelector(".header__button-back").addEventListener("click",function(e){t&&t.classList.remove("navigation__sublist--show")})})}},{key:"headerSticky",value:function(){var n=document.querySelector(".header"),o=document.querySelector(".hero-image");document.body.addEventListener("scroll",function(e){var t=document.body.scrollTop;document.documentElement.scrollTop;20<=t?(n.classList.add("header--sticky"),o.style.paddingTop="".concat(n.offsetHeight,"px")):(n.classList.remove("header--sticky"),o.style.paddingTop=0)},!0)}},{key:"initSlider",value:function(){console.log($(this.sliderContainer)),Object(r.a)({container:"".concat(this.sliderContainer),items:1,nav:!1,loop:!1,speed:500,controls:!1,rewind:!1,gutter:16,touch:!0,slideBy:1,autoWidth:!0,autoplay:!1})}},{key:"componentBuilder",value:function(){var t=this;document.addEventListener("DOMContentLoaded",function(e){t.headerSticky(),t.menuActions(),t.initSlider()})}}])&&a(t.prototype,n),o&&a(t,o),e}();new o}},[[11,0,2]]]);
//# sourceMappingURL=b8one.mobile.institutional.js.map