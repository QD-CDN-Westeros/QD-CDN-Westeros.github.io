/* Wartodle - 01/02/2019 15:29:59 GMT-0200 */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});try{var Common={run:function(){},init:function(){Common.applyAmazingMenu();Common.setDataScrollToggle()},ready:function(){},ajaxStop:function(){},windowOnload:function(){},applyAmazingMenu:function(){$(".header-qd-v1-am").QD_amazingMenu({callback:function(){$("ul.qd-am-dropdown-menu").each(function(){$(this).wrapInner('<li class="qd-am-container clearfix"><ul class="clearfix"></ul></li>')});$("li.qd-am-has-ul.qd-am-dropdown").mouseenter(function(e){var $t=$(this);$t.find(".qd-am-container").css("padding-left",$t.offset().left+"px");$t.find(".qd-am-dropdown-menu").height($t.find(".qd-am-container").outerHeight()+20)});$("li.qd-am-has-ul.qd-am-column").mouseenter(function(e){var $t=$(this);if(!$t.find("ul.qd-am-level-2").length)return;var heightLevel1=$t.closest(".qd-am-container").outerHeight();var offsetLevel1=Math.abs($(document).scrollTop()-$t.closest(".qd-am-container").offset().top);var heightLevel2=$t.find("ul.qd-am-level-2").outerHeight();var offsetLevel2=Math.abs($(document).scrollTop()-$t.find("ul.qd-am-level-2").offset().top);var offsetTotal=heightLevel2+Math.abs(offsetLevel1-offsetLevel2)+25;if(heightLevel1>offsetTotal)return;$t.closest(".qd-am-dropdown-menu").height(offsetTotal)})}})},setDataScrollToggle:function(){$(document.body).attr("data-qd-scroll-limit","200, 800, 1300")}};var Home={init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Search={init:function(){Search.returnToTop()},ajaxStop:function(){},windowOnload:function(){},returnToTop:function(){$(".returnToTop-qd-v1").click(function(e){e.preventDefault();$("html, body").stop().animate({scrollTop:$("body").offset().top-100},900,"swing")})}};var Product={run:function(){},init:function(){Product.setAvailableBodyClass()},ajaxStop:function(){},windowOnload:function(){},setAvailableBodyClass:function(){function checkVisibleNotify(available){if(available)$(document.body).addClass("qd-product-available").removeClass("qd-product-unavailable");else $(document.body).addClass("qd-product-unavailable").removeClass("qd-product-available")}$(document).on("skuSelected.vtex",function(e,id,sku){checkVisibleNotify(sku.available)});checkVisibleNotify(skuJson.available)}};var List={run:function(){},init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Institutional={init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Orders={init:function(){Orders.bootstrapCssFix()},ajaxStop:function(){},windowOnload:function(){},bootstrapCssFix:function(){var styleSheets=document.styleSheets;for(var i=0;i<styleSheets.length;i++){if((styleSheets[i].href||"").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css")>-1||(styleSheets[i].href||"").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css")>-1){styleSheets[i].disabled=true}}}}}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&console.error("Houve um erro nos objetos. Detalhes: "+e.message)}try{(function(){var body,ajaxStop,windowLoad;windowLoad=function(){Common.windowOnload();if(body.is(".home"))Home.windowOnload();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.windowOnload();else if(body.is(".produto"))Product.windowOnload();else if(body.is(".listas, .giftlist"))List.windowOnload();else if(body.is(".institucional"))Institutional.windowOnload();else if(body.is(".orders"))Orders.windowOnload()};ajaxStop=function(){Common.ajaxStop();if(body.is(".home"))Home.ajaxStop();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.ajaxStop();else if(body.is(".produto"))Product.ajaxStop();else if(body.is(".listas, .giftlist"))List.ajaxStop();else if(body.is(".institucional"))Institutional.ajaxStop();else if(body.is(".orders"))Orders.ajaxStop()};$(function(){body=$(document.body);Common.init();if(body.is(".home"))Home.init();else if(body.is(".resultado-busca, .departamento, .categoria")){Search.isSearch=$(document.body).is(".resultado-busca");Search.isDepartament=$(document.body).is(".departamento");Search.isCategory=$(document.body).is(".categoria");Search.init()}else if(body.is(".produto"))Product.init();else if(body.is(".listas, .giftlist"))List.init();else if(body.is(".institucional"))Institutional.init();else if(body.is(".orders"))Orders.init();$(document).ajaxStop(ajaxStop);$(window).load(windowLoad);body.addClass("jsFullLoaded");Common.ready()});Common.run();if(location.pathname.substr(location.pathname.length-2,2).toLowerCase()=="/p")Product.run();else if(location.pathname.search(/^(\/giftlist|\/list\/)/)==0)List.run()})()}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&$("body").addClass("jsFullLoaded jsFullLoadedError")&&console.error("Houve um erro ao iniciar os objetos. Detalhes: "+e.message)}"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});(function(a){a.fn.getParent=a.fn.closest})(jQuery);(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);var _0x35d8=["qdAmAddNdx","addClass","qd-am-li-","qd-am-first","last","qd-am-last","baprvgbr%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe","j%25C2%25A8pbaprvgbr%25C2%25A8pbz%25C2%25A8oe","replace","charCodeAt","toUpperCase","---","indexOf","qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82","find",".qd_am_code","filter",".qd-am-banner","parent","qd-am-banner-wrapper","qdAjax","url","html","each","img[alt='","attr","data-qdam-value","length","getParent",".box-banner","clone","hide","text","trim","[class*='colunas']","insertBefore","qd-am-content-loaded","Não foi possível obter os dados do menu. A url '","' falho.","call","trigger","QuatroDigital.am.ajaxCallback","QD_amazingMenu","ul[itemscope]","li >ul","qd-am-has-ul","children",":not(ul)","qd-am-elem-","first","replaceSpecialChars",">li","qd-amazing-menu","qd-am-dropdown-menu","qd-am-dropdown","qd-am-level-","add","qd-am-","-li","callback","extend","exec",".qd_amazing_menu_auto","function","/qd-amazing-menu","undefined","error","info","warn","[QD Amazing Menu]\n","alerta","toLowerCase","apply","join"];(function(_0x54ae1d,_0x55382){var _0x9b868f=function(_0x3df81d){while(--_0x3df81d){_0x54ae1d["push"](_0x54ae1d["shift"]())}};_0x9b868f(++_0x55382)})(_0x35d8,211);var _0x3bdd=function(_0xbc6bf8,_0x527166){_0xbc6bf8=_0xbc6bf8-0;var _0x549ca8=_0x35d8[_0xbc6bf8];return _0x549ca8};(function(_0x1da383){var _0x19ee7;var _0x389582=jQuery;if(_0x3bdd("0x0")!==typeof _0x389582["fn"]["QD_amazingMenu"]){var _0x41c9e7={url:_0x3bdd("0x1"),callback:function(){},ajaxCallback:function(){}};var _0x5df417=function(_0x389582,_0x18cf26){if("object"===typeof console&&_0x3bdd("0x2")!==typeof console[_0x3bdd("0x3")]&&_0x3bdd("0x2")!==typeof console[_0x3bdd("0x4")]&&_0x3bdd("0x2")!==typeof console[_0x3bdd("0x5")]){var _0x555f86;"object"===typeof _0x389582?(_0x389582["unshift"](_0x3bdd("0x6")),_0x555f86=_0x389582):_0x555f86=["[QD Amazing Menu]\n"+_0x389582];if(_0x3bdd("0x2")===typeof _0x18cf26||_0x3bdd("0x7")!==_0x18cf26[_0x3bdd("0x8")]()&&"aviso"!==_0x18cf26[_0x3bdd("0x8")]())if(_0x3bdd("0x2")!==typeof _0x18cf26&&_0x3bdd("0x4")===_0x18cf26["toLowerCase"]())try{console["info"][_0x3bdd("0x9")](console,_0x555f86)}catch(_0x5ce746){try{console[_0x3bdd("0x4")](_0x555f86[_0x3bdd("0xa")]("\n"))}catch(_0x12d891){}}else try{console[_0x3bdd("0x3")][_0x3bdd("0x9")](console,_0x555f86)}catch(_0x702a15){try{console[_0x3bdd("0x3")](_0x555f86[_0x3bdd("0xa")]("\n"))}catch(_0x16dbef){}}else try{console["warn"]["apply"](console,_0x555f86)}catch(_0x38ed4c){try{console[_0x3bdd("0x5")](_0x555f86[_0x3bdd("0xa")]("\n"))}catch(_0x36af4c){}}}};_0x389582["fn"][_0x3bdd("0xb")]=function(){var _0x133641=_0x389582(this);_0x133641["each"](function(_0x1b77af){_0x389582(this)[_0x3bdd("0xc")](_0x3bdd("0xd")+_0x1b77af)});_0x133641["first"]()[_0x3bdd("0xc")](_0x3bdd("0xe"));_0x133641[_0x3bdd("0xf")]()[_0x3bdd("0xc")](_0x3bdd("0x10"));return _0x133641};_0x389582["fn"]["QD_amazingMenu"]=function(){};_0x1da383=function(_0x389582){var _0x3a274a={p:_0x3bdd("0x11"),jj:_0x3bdd("0x12")};return function(_0x389582){var _0x3b6206=function(_0x389582){return _0x389582};var _0x111c46=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];_0x389582=_0x389582["d"+_0x111c46[16]+"c"+_0x111c46[17]+"m"+_0x3b6206(_0x111c46[1])+"n"+_0x111c46[13]]["l"+_0x111c46[18]+"c"+_0x111c46[0]+"ti"+_0x3b6206("o")+"n"];var _0x1c0aa0=function(_0x389582){return escape(encodeURIComponent(_0x389582[_0x3bdd("0x13")](/\./g,"¨")[_0x3bdd("0x13")](/[a-zA-Z]/g,function(_0x389582){return String["fromCharCode"](("Z">=_0x389582?90:122)>=(_0x389582=_0x389582[_0x3bdd("0x14")](0)+13)?_0x389582:_0x389582-26)})))};var _0x3c4d8f=_0x1c0aa0(_0x389582[[_0x111c46[9],_0x3b6206("o"),_0x111c46[12],_0x111c46[_0x3b6206(13)]]["join"]("")]);_0x1c0aa0=_0x1c0aa0((window[["js",_0x3b6206("no"),"m",_0x111c46[1],_0x111c46[4][_0x3bdd("0x15")](),"ite"]["join"]("")]||_0x3bdd("0x16"))+[".v",_0x111c46[13],"e",_0x3b6206("x"),"co",_0x3b6206("mm"),"erc",_0x111c46[1],".c",_0x3b6206("o"),"m.",_0x111c46[19],"r"][_0x3bdd("0xa")](""));for(var _0x543da4 in _0x3a274a){if(_0x1c0aa0===_0x543da4+_0x3a274a[_0x543da4]||_0x3c4d8f===_0x543da4+_0x3a274a[_0x543da4]){var _0x2d67ae="tr"+_0x111c46[17]+"e";break}_0x2d67ae="f"+_0x111c46[0]+"ls"+_0x3b6206(_0x111c46[1])+""}_0x3b6206=!1;-1<_0x389582[[_0x111c46[12],"e",_0x111c46[0],"rc",_0x111c46[9]][_0x3bdd("0xa")]("")][_0x3bdd("0x17")](_0x3bdd("0x18"))&&(_0x3b6206=!0);return[_0x2d67ae,_0x3b6206]}(_0x389582)}(window);if(!eval(_0x1da383[0]))return _0x1da383[1]?_0x5df417("ทÃѲ √Αℓ¡∂Α∂Ѳ ΡΑ૨Α ૯ઽƬΑ LѲJΑ!"):!1;var _0x7d897d=function(_0x9a90f6){var _0x4f436d=_0x9a90f6[_0x3bdd("0x19")](_0x3bdd("0x1a"));var _0x3875cf=_0x4f436d[_0x3bdd("0x1b")](_0x3bdd("0x1c"));var _0x3787f9=_0x4f436d[_0x3bdd("0x1b")](".qd-am-collection");if(_0x3875cf["length"]||_0x3787f9["length"])_0x3875cf[_0x3bdd("0x1d")]()[_0x3bdd("0xc")](_0x3bdd("0x1e")),_0x3787f9[_0x3bdd("0x1d")]()[_0x3bdd("0xc")]("qd-am-collection-wrapper"),_0x389582[_0x3bdd("0x1f")]({url:_0x19ee7[_0x3bdd("0x20")],dataType:_0x3bdd("0x21"),success:function(_0x469b6f){var _0x4f436d=_0x389582(_0x469b6f);_0x3875cf[_0x3bdd("0x22")](function(){var _0x469b6f=_0x389582(this);var _0x3875cf=_0x4f436d[_0x3bdd("0x19")](_0x3bdd("0x23")+_0x469b6f[_0x3bdd("0x24")](_0x3bdd("0x25"))+"']");_0x3875cf[_0x3bdd("0x26")]&&(_0x3875cf[_0x3bdd("0x22")](function(){_0x389582(this)[_0x3bdd("0x27")](_0x3bdd("0x28"))[_0x3bdd("0x29")]()["insertBefore"](_0x469b6f)}),_0x469b6f[_0x3bdd("0x2a")]())})[_0x3bdd("0xc")]("qd-am-content-loaded");_0x3787f9[_0x3bdd("0x22")](function(){var _0x469b6f={};var _0x3875cf=_0x389582(this);_0x4f436d[_0x3bdd("0x19")]("h2")[_0x3bdd("0x22")](function(){if(_0x389582(this)[_0x3bdd("0x2b")]()[_0x3bdd("0x2c")]()[_0x3bdd("0x8")]()==_0x3875cf[_0x3bdd("0x24")](_0x3bdd("0x25"))[_0x3bdd("0x2c")]()["toLowerCase"]())return _0x469b6f=_0x389582(this),!1});_0x469b6f["length"]&&(_0x469b6f[_0x3bdd("0x22")](function(){_0x389582(this)[_0x3bdd("0x27")](_0x3bdd("0x2d"))[_0x3bdd("0x29")]()[_0x3bdd("0x2e")](_0x3875cf)}),_0x3875cf[_0x3bdd("0x2a")]())})[_0x3bdd("0xc")](_0x3bdd("0x2f"))},error:function(){_0x5df417(_0x3bdd("0x30")+_0x19ee7["url"]+_0x3bdd("0x31"))},complete:function(){_0x19ee7["ajaxCallback"][_0x3bdd("0x32")](this);_0x389582(window)[_0x3bdd("0x33")](_0x3bdd("0x34"),_0x9a90f6)},clearQueueDelay:3e3})};_0x389582[_0x3bdd("0x35")]=function(_0x2c4fa5){var _0x4c1ca3=_0x2c4fa5["find"](_0x3bdd("0x36"))[_0x3bdd("0x22")](function(){var _0x13f8f3=_0x389582(this);if(!_0x13f8f3[_0x3bdd("0x26")])return _0x5df417(["UL do menu não encontrada",_0x2c4fa5],_0x3bdd("0x7"));_0x13f8f3["find"](_0x3bdd("0x37"))[_0x3bdd("0x1d")]()[_0x3bdd("0xc")](_0x3bdd("0x38"));_0x13f8f3[_0x3bdd("0x19")]("li")["each"](function(){var _0x64ecdd=_0x389582(this);var _0x13f8f3=_0x64ecdd[_0x3bdd("0x39")](_0x3bdd("0x3a"));_0x13f8f3[_0x3bdd("0x26")]&&_0x64ecdd[_0x3bdd("0xc")](_0x3bdd("0x3b")+_0x13f8f3[_0x3bdd("0x3c")]()[_0x3bdd("0x2b")]()[_0x3bdd("0x2c")]()[_0x3bdd("0x3d")]()[_0x3bdd("0x13")](/\./g,"")["replace"](/\s/g,"-")[_0x3bdd("0x8")]())});var _0x4c1ca3=_0x13f8f3[_0x3bdd("0x19")](_0x3bdd("0x3e"))[_0x3bdd("0xb")]();_0x13f8f3[_0x3bdd("0xc")](_0x3bdd("0x3f"));_0x4c1ca3=_0x4c1ca3[_0x3bdd("0x19")](">ul");_0x4c1ca3[_0x3bdd("0x22")](function(){var _0x38729a=_0x389582(this);_0x38729a[_0x3bdd("0x19")](_0x3bdd("0x3e"))[_0x3bdd("0xb")]()["addClass"]("qd-am-column");_0x38729a["addClass"](_0x3bdd("0x40"));_0x38729a[_0x3bdd("0x1d")]()[_0x3bdd("0xc")](_0x3bdd("0x41"))});_0x4c1ca3["addClass"](_0x3bdd("0x41"));var _0x2a38c8=0,_0x1da383=function(_0x389582){_0x2a38c8+=1;_0x389582=_0x389582[_0x3bdd("0x39")]("li")[_0x3bdd("0x39")]("*");_0x389582[_0x3bdd("0x26")]&&(_0x389582["addClass"](_0x3bdd("0x42")+_0x2a38c8),_0x1da383(_0x389582))};_0x1da383(_0x13f8f3);_0x13f8f3[_0x3bdd("0x43")](_0x13f8f3["find"]("ul"))[_0x3bdd("0x22")](function(){var _0x2a38c8=_0x389582(this);_0x2a38c8[_0x3bdd("0xc")](_0x3bdd("0x44")+_0x2a38c8[_0x3bdd("0x39")]("li")[_0x3bdd("0x26")]+_0x3bdd("0x45"))})});_0x7d897d(_0x4c1ca3);_0x19ee7[_0x3bdd("0x46")][_0x3bdd("0x32")](this);_0x389582(window)["trigger"]("QuatroDigital.am.callback",_0x2c4fa5)};_0x389582["fn"][_0x3bdd("0x35")]=function(_0x372825){var _0x2e595e=_0x389582(this);if(!_0x2e595e[_0x3bdd("0x26")])return _0x2e595e;_0x19ee7=_0x389582[_0x3bdd("0x47")]({},_0x41c9e7,_0x372825);_0x2e595e[_0x3bdd("0x48")]=new(_0x389582[_0x3bdd("0x35")])(_0x389582(this));return _0x2e595e};_0x389582(function(){_0x389582(_0x3bdd("0x49"))[_0x3bdd("0x35")]()})}})(this);(function(){var c=jQuery,e=function(a,d){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[QD Scroll Toggle]\n"),b=a):b=["[QD Scroll Toggle]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,b)}catch(c){try{console.info(b.join("\n"))}catch(e){}}else try{console.error.apply(console,b)}catch(h){try{console.error(b.join("\n"))}catch(k){}}else try{console.warn.apply(console,b)}catch(l){try{console.warn(b.join("\n"))}catch(m){}}}};"function"!==typeof c.QD_scrollToggle&&(c.QD_scrollToggle=function(a){var d=[];if("string"!==typeof a&&"number"!==typeof a||"auto"===a)if("auto"===a)d.push(c(window).height());else return e("Não foi informado o limite de scroll necessário para adicionar o atributo.");else{var b=a.split(","),f;for(f in b)"function"!==typeof b[f]&&(a=parseInt(b[f].trim()),isNaN(a)||d.push(a))}if(!d.length)return e("Aaeeeeeeee irmão! Não consegui encontrar nenhum valor para calcular o scroll");if(!document||!document.body||"undefined"===typeof document.body.setAttribute)return e('"document.body.setAttribute" Não é uma função :(');if(!document||!document.body||"undefined"===typeof document.body.removeAttribute)return e('"document.body.removeAttribute" Não é uma função :(');if(!document||!document.body||"undefined"===typeof document.body.getAttribute)return e('"document.body.getAttribute" Não é uma função :(');if(!c(window).scrollTop||isNaN(parseInt(c(window).scrollTop())))return e('"$(window).scrollTop" não esta retornando um número inteiro :(');try{document.body.setAttribute("data-qd-scroll",1),document.body.getAttribute("data-qd-scroll"),document.body.removeAttribute("data-qd-scroll"),document.body.getAttribute("data-qd-scroll")}catch(g){e("Não foi possível fazer o passo a passo de consultar, adicionar e remover um atributo",g.message)}c(window).scroll(function(){for(var a=0;a<d.length;a++)c(window).scrollTop()>d[a]?document.body.getAttribute("data-qd-scroll-"+a)||document.body.setAttribute("data-qd-scroll-"+a,1):document.body.getAttribute("data-qd-scroll-"+a)&&document.body.removeAttribute("data-qd-scroll-"+a)})},c(function(){var a=c("body[data-qd-scroll-limit]");a.length&&c.QD_scrollToggle(a.attr("data-qd-scroll-limit"))}))})();