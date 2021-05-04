/* DESKTOP-KOITY - 04/05/2021 14:27:41 GMT */
"use strict";!function(a){a.isScrollToFixed=function(b){return!!a(b).data("ScrollToFixed")},a.ScrollToFixed=function(d,i){var m=this;m.$el=a(d),m.el=d,m.$el.data("ScrollToFixed",m);var I,F,e,z,c=!1,H=m.$el,E=0,r=0,j=-1,f=-1,u=null;function o(){var J=m.options.limit;return J?"function"==typeof J?J.apply(H):J:0}function q(){return"fixed"===I}function y(){return"absolute"===I}function h(){return!(q()||y())}function x(){var J;q()||(J=H[0].getBoundingClientRect(),u.css({display:H.css("display"),width:J.width,height:J.height,float:H.css("float")}),cssOptions={"z-index":m.options.zIndex,position:"fixed",top:-1==m.options.bottom?t():"",bottom:-1==m.options.bottom?"":m.options.bottom,"margin-left":"0px"},m.options.dontSetWidth||(cssOptions.width=H.css("width")),H.css(cssOptions),H.addClass(m.options.baseClassName),m.options.className&&H.addClass(m.options.className),I="fixed")}function b(){var K=o(),J=r;m.options.removeOffsets&&(J="",K-=E),cssOptions={position:"absolute",top:K,left:J,"margin-left":"0px",bottom:""},m.options.dontSetWidth||(cssOptions.width=H.css("width")),H.css(cssOptions),I="absolute"}function l(){h()||(f=-1,u.css("display","none"),H.css({"z-index":z,width:"",position:F,left:"",top:e,"margin-left":""}),H.removeClass("scroll-to-fixed-fixed"),m.options.className&&H.removeClass(m.options.className),I=null)}function w(J){J!=f&&(H.css("left",r-J),f=J)}function t(){var J=m.options.marginTop;return J?"function"==typeof J?J.apply(H):J:0}function B(){var M,L,J,N,K;a.isScrollToFixed(H)&&!H.is(":hidden")&&(L=h(),(M=c)?h()&&(E=H.offset().top,r=H.offset().left):(H.trigger("preUnfixed.ScrollToFixed"),l(),H.trigger("unfixed.ScrollToFixed"),f=-1,E=H.offset().top,r=H.offset().left,m.options.offsets&&(r+=H.offset().left-H.position().left),-1==j&&(j=r),I=H.css("position"),c=!0,-1!=m.options.bottom&&(H.trigger("preFixed.ScrollToFixed"),x(),H.trigger("fixed.ScrollToFixed"))),J=a(window).scrollLeft(),N=a(window).scrollTop(),K=o(),m.options.minWidth&&a(window).width()<m.options.minWidth||m.options.maxWidth&&a(window).width()>m.options.maxWidth?h()&&M||(p(),H.trigger("preUnfixed.ScrollToFixed"),l(),H.trigger("unfixed.ScrollToFixed")):-1==m.options.bottom?0<K&&N>=K-t()?L||y()&&M||(p(),H.trigger("preAbsolute.ScrollToFixed"),b(),H.trigger("unfixed.ScrollToFixed")):N>=E-t()?(q()&&M||(p(),H.trigger("preFixed.ScrollToFixed"),x(),f=-1,H.trigger("fixed.ScrollToFixed")),w(J)):h()&&M||(p(),H.trigger("preUnfixed.ScrollToFixed"),l(),H.trigger("unfixed.ScrollToFixed")):0<K?N+a(window).height()-H.outerHeight(!0)>=K-(t()||-(m.options.bottom||0))?q()&&(p(),H.trigger("preUnfixed.ScrollToFixed"),("absolute"===F?b:l)(),H.trigger("unfixed.ScrollToFixed")):(q()||(p(),H.trigger("preFixed.ScrollToFixed"),x()),w(J),H.trigger("fixed.ScrollToFixed")):w(J))}function p(){var J=H.css("position");"absolute"==J?H.trigger("postAbsolute.ScrollToFixed"):"fixed"==J?H.trigger("postFixed.ScrollToFixed"):H.trigger("postUnfixed.ScrollToFixed")}function D(J){H.is(":visible")?(c=!1,B()):l()}function G(J){window.requestAnimationFrame?requestAnimationFrame(B):B()}m.init=function(){m.options=a.extend({},a.ScrollToFixed.defaultOptions,i),z=H.css("z-index"),m.$el.css("z-index",m.options.zIndex),u=a("<div />"),I=H.css("position"),F=H.css("position"),H.css("float"),e=H.css("top"),h()&&m.$el.after(u),a(window).bind("resize.ScrollToFixed",D),a(window).bind("scroll.ScrollToFixed",G),"ontouchmove"in window&&a(window).bind("touchmove.ScrollToFixed",B),m.options.preFixed&&H.bind("preFixed.ScrollToFixed",m.options.preFixed),m.options.postFixed&&H.bind("postFixed.ScrollToFixed",m.options.postFixed),m.options.preUnfixed&&H.bind("preUnfixed.ScrollToFixed",m.options.preUnfixed),m.options.postUnfixed&&H.bind("postUnfixed.ScrollToFixed",m.options.postUnfixed),m.options.preAbsolute&&H.bind("preAbsolute.ScrollToFixed",m.options.preAbsolute),m.options.postAbsolute&&H.bind("postAbsolute.ScrollToFixed",m.options.postAbsolute),m.options.fixed&&H.bind("fixed.ScrollToFixed",m.options.fixed),m.options.unfixed&&H.bind("unfixed.ScrollToFixed",m.options.unfixed),m.options.spacerClass&&u.addClass(m.options.spacerClass),H.bind("resize.ScrollToFixed",function(){u.height(H.height())}),H.bind("scroll.ScrollToFixed",function(){H.trigger("preUnfixed.ScrollToFixed"),l(),H.trigger("unfixed.ScrollToFixed"),B()}),H.bind("detach.ScrollToFixed",function(J){!function(J){(J=J||window.event).preventDefault&&J.preventDefault(),J.returnValue=!1}(J),H.trigger("preUnfixed.ScrollToFixed"),l(),H.trigger("unfixed.ScrollToFixed"),a(window).unbind("resize.ScrollToFixed",D),a(window).unbind("scroll.ScrollToFixed",G),H.unbind(".ScrollToFixed"),u.remove(),m.$el.removeData("ScrollToFixed")}),D()},m.init()},a.ScrollToFixed.defaultOptions={marginTop:0,limit:0,bottom:-1,zIndex:1e3,baseClassName:"scroll-to-fixed-fixed"},a.fn.scrollToFixed=function(b){return this.each(function(){new a.ScrollToFixed(this,b)})}}(jQuery);