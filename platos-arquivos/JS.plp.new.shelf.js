/* PC-QUARTO - 15/10/2020 18:35:56 GMT */
"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}(function(){try{var Shelf={init:function init(){Shelf.changeShelfName();Shelf.changeModalityIcon();Shelf.showBrandImage();Shelf.applyImageLoad()},showBrandImage:function showBrandImage(){var wrapper=$(".mz-storefront .mz-storefront__brand");wrapper.each(function(){var $this=$(this);if($this.is(".mz-on")){return}var brand=$this.find(".brand").text();if(brand=="lfg"){$this.find("img").attr("src","https://portalpos2.vteximg.com.br/arquivos/portalpos-logo-".concat(brand,"-dark-2.png"));$this.find("img").addClass("mz-lfg")}else{$this.find("img").attr("src","https://portalpos2.vteximg.com.br/arquivos/portalpos-logo-".concat(brand,"-dark.png"))}$this.addClass("mz-on loaded")})},applyImageLoad:function applyImageLoad(){if(!$.fn.QD_smartImageLoad){return}$(".mz-storefront").QD_smartImageLoad({sizes:{width:"285",height:"190"}})},changeShelfName:function changeShelfName(){var wrapper=$(".mz-storefront .mz-storefront__name a");wrapper.each(function(){var $this=$(this);if($this.is(".mz-on")){return}var name=$this.text().split("|")[0];$this.text(name);$this.attr("title",name);$this.parent().addClass("mz-on loaded")})},changeModalityIcon:function changeModalityIcon(){var wrapper=$(".mz-storefront .mz-storefront__category");wrapper.each(function(){var $this=$(this);if($this.is(".mz-on")){return}var name=$this.find("li").text().trim()||"";var icon=Shelf.data.icons[name]||"";if(!icon.length){$this.addClass("mz-on");return}$this.find("> span").removeClass("icon-stocks");$this.find("> span").addClass(icon);$this.addClass("mz-on")})},data:{icons:{Direito:"icon-direito","Educação":"icon-educacao","Negócios/MBA":"icon-negocios","Saúde, Esporte e Estética":"icon-saude","Ciências sociais, Serviços e Outros":"icon-servicos","Ciências, Exatas e Tecnologia":"icon-tecnologia"}}};$(document).ready(Shelf.init)}catch(e){console.log("Erro na instancia [Shelf]: ",e)}})();var _0xae42=["src","addClass","attr","bottom","clone","apply","sizes","QD_smartImageLoad","info","trigger","erc","find",".qd_sil_img_wrapper","charCodeAt","not","scroll","length","body","first","aviso","ทÃѲ √Αℓ¡∂Α∂Ѳ ΡΑ૨Α ૯ઽƬΑ LѲJΑ!","height","img:visible","QD_SIL_individualChildRender","scrollTop","push","error","warn","replace","%25C2%25A8cbegnycbf%25C2%25A8pbz%25C2%25A8oe","---","closest","QD_SIL_scroll","unshift","top","join","object","nycbfdn%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe","documentElement","fromCharCode","qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82","load","[Quatro Digital - Smart Image Load]\n","300","undefined","Problemas :( . Detalhes: ","qd-sil-image-loaded","qd-sil-image","extend","width","imageWrapper","QD_SIL_scrollRange","function","qd-sil-on"];(function(_0x2c8409,_0xae42d){var _0x2fa2ee=function _0x2fa2ee(_0x2e7fe6){while(--_0x2e7fe6){_0x2c8409["push"](_0x2c8409["shift"]())}};_0x2fa2ee(++_0xae42d)})(_0xae42,287);var _0x2fa2=function _0x2fa2(_0x2c8409,_0xae42d){_0x2c8409=_0x2c8409-0;var _0x2fa2ee=_0xae42[_0x2c8409];return _0x2fa2ee};(function(_0x33c015){var _0x4b83ce=jQuery;if(_0x2fa2("0x23")!==_typeof(_0x4b83ce["fn"]["QD_smartImageLoad"])){_0x4b83ce["fn"][_0x2fa2("0x2c")]=function(){},_0x33c015=function(_0x4ab958){var _0x2bad4f={c:"begnycbf2%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe",cb:"egnycbfdn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe",jjj:_0x2fa2("0xc"),cbeg:_0x2fa2("0x14")};return function(_0x524326){var _0x2c7e3f=function _0x2c7e3f(_0x546711){return _0x546711},_0x290d92=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];_0x524326=_0x524326["d"+_0x290d92[16]+"c"+_0x290d92[17]+"m"+_0x2c7e3f(_0x290d92[1])+"n"+_0x290d92[13]]["l"+_0x290d92[18]+"c"+_0x290d92[0]+"ti"+_0x2c7e3f("o")+"n"];var _0x2efb4a=function _0x2efb4a(_0x5d010f){return escape(encodeURIComponent(_0x5d010f[_0x2fa2("0xb")](/\./g,"¨")[_0x2fa2("0xb")](/[a-zA-Z]/g,function(_0x52b784){return String[_0x2fa2("0x16")](("Z">=_0x52b784?90:122)>=(_0x52b784=_0x52b784[_0x2fa2("0x32")](0)+13)?_0x52b784:_0x52b784-26)})))},_0x89eb90=_0x2efb4a(_0x524326[[_0x290d92[9],_0x2c7e3f("o"),_0x290d92[12],_0x290d92[_0x2c7e3f(13)]][_0x2fa2("0x12")]("")]);_0x2efb4a=_0x2efb4a((window[["js",_0x2c7e3f("no"),"m",_0x290d92[1],_0x290d92[4]["toUpperCase"](),"ite"][_0x2fa2("0x12")]("")]||_0x2fa2("0xd"))+[".v",_0x290d92[13],"e",_0x2c7e3f("x"),"co",_0x2c7e3f("mm"),_0x2fa2("0x2f"),_0x290d92[1],".c",_0x2c7e3f("o"),"m.",_0x290d92[19],"r"][_0x2fa2("0x12")](""));for(var _0x1ff0c8 in _0x2bad4f){if(_0x2efb4a===_0x1ff0c8+_0x2bad4f[_0x1ff0c8]||_0x89eb90===_0x1ff0c8+_0x2bad4f[_0x1ff0c8]){var _0xe8318e="tr"+_0x290d92[17]+"e";break}_0xe8318e="f"+_0x290d92[0]+"ls"+_0x2c7e3f(_0x290d92[1])}return _0x2c7e3f=!1,-1<_0x524326[[_0x290d92[12],"e",_0x290d92[0],"rc",_0x290d92[9]]["join"]("")]["indexOf"](_0x2fa2("0x17"))&&(_0x2c7e3f=!0),[_0xe8318e,_0x2c7e3f]}(_0x4ab958)}(window);if(!eval(_0x33c015[0]))return _0x33c015[1]?_0x26e522(_0x2fa2("0x3")):!1;var _0x26e522=function _0x26e522(_0x5680ae,_0x471d9c){if(_0x2fa2("0x13")===(typeof console==="undefined"?"undefined":_typeof(console))&&_0x2fa2("0x1b")!==_typeof(console["error"])&&"undefined"!==typeof console["info"]&&"undefined"!==typeof console[_0x2fa2("0xa")]){if(_0x2fa2("0x13")==_typeof(_0x5680ae)&&_0x2fa2("0x23")==_typeof(_0x5680ae["unshift"])){_0x5680ae[_0x2fa2("0x10")](_0x2fa2("0x19"));var _0x2a6547=_0x5680ae}else _0x2a6547=["[Quatro Digital - Smart Image Load]\n",_0x5680ae];if(_0x2fa2("0x1b")==_typeof(_0x471d9c)||"alerta"!==_0x471d9c["toLowerCase"]()&&_0x2fa2("0x2")!==_0x471d9c["toLowerCase"]()){if(_0x2fa2("0x1b")!=_typeof(_0x471d9c)&&_0x2fa2("0x2d")==_0x471d9c["toLowerCase"]())try{console[_0x2fa2("0x2d")][_0x2fa2("0x2a")](console,_0x2a6547)}catch(_0xbd5443){try{console[_0x2fa2("0x2d")](_0x2a6547[_0x2fa2("0x12")]("\n"))}catch(_0x24f475){}}else try{console[_0x2fa2("0x9")]["apply"](console,_0x2a6547)}catch(_0x35c877){try{console[_0x2fa2("0x9")](_0x2a6547["join"]("\n"))}catch(_0x5593c0){}}}else try{console[_0x2fa2("0xa")][_0x2fa2("0x2a")](console,_0x2a6547)}catch(_0x3504a0){try{console[_0x2fa2("0xa")](_0x2a6547[_0x2fa2("0x12")]("\n"))}catch(_0x157917){}}}},_0x46c5de=/(ids\/[0-9]+-)[0-9-]+/i,_0x4195a5={imageWrapper:_0x2fa2("0x31"),sizes:{width:"300",height:_0x2fa2("0x1a")}},_0x13e80b=function _0x13e80b(_0xeeb508,_0x13c1a2){function _0x430087(_0x45e6bd){try{var _0x438272=_0x45e6bd[_0x2fa2("0x30")](_0x13c1a2[_0x2fa2("0x21")])[_0x2fa2("0x33")](".qd-sil-on")[_0x2fa2("0x30")](_0x2fa2("0x5"));if(_0x438272[_0x2fa2("0x35")]){var _0x57e843=_0x4b83ce(window),_0x173f5d=_0x57e843[_0x2fa2("0x7")](),_0x2febfd=_0x173f5d+_0x57e843["height"](),_0xb1751e=_0x438272[_0x2fa2("0x1")]()[_0x2fa2("0x4")]();_0x45e6bd=[];for(_0x57e843=0;_0x57e843<_0x438272["length"];_0x57e843++){var _0x9ae3b0=_0x4b83ce(_0x438272[_0x57e843])["offset"]();_0x9ae3b0[_0x2fa2("0x28")]=_0x9ae3b0[_0x2fa2("0x11")]+_0xb1751e,_0x2febfd<_0x9ae3b0[_0x2fa2("0x11")]||_0x173f5d>_0x9ae3b0[_0x2fa2("0x28")]||_0x45e6bd[_0x2fa2("0x8")](_0x438272[_0x57e843])}for(_0x438272=0;_0x438272<_0x45e6bd["length"];_0x438272++){_0x178309(_0x4b83ce(_0x45e6bd[_0x438272]))}}}catch(_0x3b82fe){_0x2fa2("0x1b")!==(typeof console==="undefined"?"undefined":_typeof(console))&&_0x2fa2("0x23")===_typeof(console[_0x2fa2("0x9")])&&console["error"](_0x2fa2("0x1c"),_0x3b82fe)}}function _0x178309(_0x2d6c3d){var _0x172b76=_0x2d6c3d[_0x2fa2("0x29")]();_0x172b76["on"](_0x2fa2("0x18"),function(){_0x4b83ce(this)[_0x2fa2("0x26")](_0x2fa2("0x1d"))}),_0x172b76[_0x2fa2("0x27")]({src:_0x172b76[0][_0x2fa2("0x25")][_0x2fa2("0xb")](_0x46c5de,"$1"+_0x13c1a2["sizes"][_0x2fa2("0x20")]+"-"+_0x13c1a2[_0x2fa2("0x2b")][_0x2fa2("0x4")]),width:_0x13c1a2[_0x2fa2("0x2b")][_0x2fa2("0x20")],height:_0x13c1a2["sizes"][_0x2fa2("0x4")]}),_0x172b76[_0x2fa2("0x26")](_0x2fa2("0x1e"))["insertAfter"](_0x2d6c3d),_0x172b76[_0x2fa2("0xe")](_0x13c1a2[_0x2fa2("0x21")])[_0x2fa2("0x26")](_0x2fa2("0x24"))}_0x430087(_0xeeb508),_0x4b83ce(window)["on"]("QD_SIL_scroll QuatroDigital.is_Callback",function(){_0x430087(_0xeeb508)}),_0x4b83ce(window)["on"](_0x2fa2("0x6"),function(_0x2a0fa2,_0x39f164){var _0x312791=_0xeeb508[_0x2fa2("0x30")](_0x39f164);_0x312791[_0x2fa2("0x35")]&&_0x430087(_0x312791)})};_0x4b83ce["fn"][_0x2fa2("0x2c")]=function(_0xfa8de0){var _0xcefecd=_0x4b83ce(this);if(!_0xcefecd["length"])return _0xcefecd;return _0xcefecd["each"](function(){var _0x4b843e=_0x4b83ce(this);_0x4b843e["QD_smartImageLoad"]=new _0x13e80b(_0x4b843e,_0x4b83ce[_0x2fa2("0x1f")]({},_0x4195a5,_0xfa8de0))}),_0xcefecd},window[_0x2fa2("0x22")]=40;var _0x1cd17f=QD_SIL_scrollRange,_0x3798cf=0;_0x4b83ce(window)["on"](_0x2fa2("0x34"),function(){var _0x11d6d1=document[_0x2fa2("0x15")]["scrollTop"]||document[_0x2fa2("0x0")]["scrollTop"];if(_0x11d6d1>_0x3798cf+_0x1cd17f||_0x11d6d1<_0x3798cf-_0x1cd17f)_0x4b83ce(window)[_0x2fa2("0x2e")](_0x2fa2("0xf")),_0x3798cf=_0x11d6d1})}})(void 0);