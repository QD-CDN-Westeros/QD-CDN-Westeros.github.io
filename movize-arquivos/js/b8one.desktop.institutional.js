(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{2:function(n,e,t){t("SuMk"),n.exports=t("c8d2")},JbUL:function(n,e,t){"use strict";function o(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}t.d(e,"a",function(){return a});var a=function(){function a(n){var e=n.modal,t=n.modalShowCLass,o=n.openModalCallback,n=n.closeModalCallback;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),this.isOpen=!1,this.modalShowCLass=t||"show",this.openCallback=o||new Function,this.closeCallback=n||new Function,this.modal=e instanceof Element?e:document.querySelector(e)}var n,e,t;return n=a,(e=[{key:"show",value:function(){this.isOpen||this.modal.classList.add(this.modalShowCLass),this.isOpen=!0,this.openCallback(this)}},{key:"close",value:function(){this.isOpen&&this.modal.classList.remove(this.modalShowCLass),this.isOpen=!1,this.closeCallback(this)}}])&&o(n.prototype,e),t&&o(n,t),a}()},SuMk:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return o});var a=t("JbUL");function i(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var o=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.modalComponent_=new a.a,this.componentBuilder()}var e,t,o;return e=n,(t=[{key:"componentBuilder",value:function(){var e=this;document.addEventListener("DOMContentLoaded",function(n){document.querySelector(".videoHighlights__wrapper");e.modalComponent_.load()})}}])&&i(e.prototype,t),o&&i(e,o),n}();new o},c8d2:function(n,e){}},[[2,0,1]]]);
//# sourceMappingURL=b8one.desktop.institutional.js.map