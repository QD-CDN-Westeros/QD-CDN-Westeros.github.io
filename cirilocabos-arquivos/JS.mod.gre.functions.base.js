/* davids - 19/01/2021 09:54:38 GMT-0200 */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});try{var Common={run:function(){},init:function(){Common.vtexBindQuickViewDestroy();Common.applyAmazingMenu()},ready:function(){},ajaxStop:function(){},windowOnload:function(){Common.username()},vtexBindQuickViewDestroy:function(){window.bindQuickView=function(){}},applyAmazingMenu:function(){$(".mz-amazing-menu , .mz-amazing-menu-btn , .mz-amazing-menu-mobile").QD_amazingMenu();$(".mz-amazing-menu-mobile>ul>li>a").on("click",function(evt){evt.preventDefault();$(this).parent().find(">ul").toggleClass("d-block");$(this).parent().toggleClass("upArrow")});$(".mz-amazing-menu-mobile").on("click",function(evt){if(evt.target.classList[0]=="mz-amazing-menu-mobile"){$(".mz-amazing-menu-mobile").toggleClass("d-ul-block");$("body").toggleClass("overFlowHidden")}})},username:function(){if($(".welcome").length==0)return;var emailReceived=$(".welcome").text();var nameUser=emailReceived.match(/([^{0-9}|.|@|-]+)/).pop().replace("Olá, ","");$(".welcome").html('<p class="logout"><span class="name-user">Olá, '+nameUser+'</span> <a id="logout" href="/no-cache/user/logout">Sair</a></p>');$(".welcome").fadeIn()}};var Home={init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Search={init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Product={run:function(){},init:function(){Product.setAvailableBodyClass()},ajaxStop:function(){},windowOnload:function(){},setAvailableBodyClass:function(){function checkVisibleNotify(available){if(available)$(document.body).addClass("qd-product-available").removeClass("qd-product-unavailable");else $(document.body).addClass("qd-product-unavailable").removeClass("qd-product-available")}$(document).on("skuSelected.vtex",function(e,id,sku){checkVisibleNotify(sku.available)});checkVisibleNotify(skuJson.available)}};var List={run:function(){},init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Institutional={init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Orders={init:function(){Orders.bootstrapCssFix()},ajaxStop:function(){},windowOnload:function(){},bootstrapCssFix:function(){var styleSheets=document.styleSheets;for(var i=0;i<styleSheets.length;i++){if((styleSheets[i].href||"").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css")>-1||(styleSheets[i].href||"").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css")>-1){styleSheets[i].disabled=true}}}}}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&console.error("Houve um erro nos objetos. Detalhes: "+e.message)}try{(function(){var body,ajaxStop,windowLoad;windowLoad=function(){Common.windowOnload();if(body.is(".home"))Home.windowOnload();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.windowOnload();else if(body.is(".produto"))Product.windowOnload();else if(body.is(".listas, .giftlist"))List.windowOnload();else if(body.is(".institucional"))Institutional.windowOnload();else if(body.is(".orders"))Orders.windowOnload()};ajaxStop=function(){Common.ajaxStop();if(body.is(".home"))Home.ajaxStop();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.ajaxStop();else if(body.is(".produto"))Product.ajaxStop();else if(body.is(".listas, .giftlist"))List.ajaxStop();else if(body.is(".institucional"))Institutional.ajaxStop();else if(body.is(".orders"))Orders.ajaxStop()};$(function(){body=$(document.body);Common.init();if(body.is(".home"))Home.init();else if(body.is(".resultado-busca, .departamento, .categoria")){Search.isSearch=$(document.body).is(".resultado-busca");Search.isDepartament=$(document.body).is(".departamento");Search.isCategory=$(document.body).is(".categoria");Search.init()}else if(body.is(".produto"))Product.init();else if(body.is(".listas, .giftlist"))List.init();else if(body.is(".institucional"))Institutional.init();else if(body.is(".orders"))Orders.init();$(document).ajaxStop(ajaxStop);$(window).load(windowLoad);body.addClass("jsFullLoaded");Common.ready()});Common.run();if(location.pathname.substr(location.pathname.length-2,2).toLowerCase()=="/p")Product.run();else if(location.pathname.search(/^(\/giftlist|\/list\/)/)==0)List.run()})()}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&$("body").addClass("jsFullLoaded jsFullLoadedError")&&console.error("Houve um erro ao iniciar os objetos. Detalhes: "+e.message)}"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});(function(a){a.fn.getParent=a.fn.closest})(jQuery);(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);var _0x1845=[".qd_am_code","add",".qd-am-collection","fromCharCode","parent","insertBefore","qd-am-banner-wrapper","cf%253A%252F%252Fpvevybpnobf%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe%252F","qd-am-elem-","attr","img[alt='","qd-am-last","ite","find","QD_amazingMenu","qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82","warn","callback","7rNiUkW","qd-am-dropdown-menu","Não foi possível obter os dados do menu. A url '","392grwZyr","356rjuunJ","clone","106391KAUmBI","qd-am-level-","2311EfKOgW","qd-am-li-","hide","replace","function","data-qdam-value","apply","-li","UL do menu não encontrada","url","[QD Amazing Menu]\n",".box-banner","955gPpgXI","645637PKYQky","li >ul","3SmcdAs","' falho.","addClass","QuatroDigital.am.callback","j%25C2%25A8pvevybpnobf%25C2%25A8pbz%25C2%25A8oe","qd-am-content-loaded","705VomVoP","first",".qd-am-banner","unshift","19975kIftnT","info","qd-am-first","qd-amazing-menu","qd-am-column","ul[itemscope]","187BVdcLM","undefined","erc","1UzJUIA","qdAmAddNdx","error","replaceSpecialChars","trim","object","871663VURWZt","toLowerCase","filter","getParent","trigger","call","qd-am-","join",":not(ul)","html","aviso","qd-am-has-ul",">li","indexOf","ajaxCallback","alerta","---","qd-am-collection-wrapper","charCodeAt","each","length","QuatroDigital.am.ajaxCallback","children"];var _0x1f05=function(_0x46a27e,_0x350288){_0x46a27e=_0x46a27e-160;var _0x184597=_0x1845[_0x46a27e];return _0x184597};(function(_0x10060d,_0x138f31){var _0x143d6f=_0x1f05;while(!![]){try{var _0x45e570=-parseInt(_0x143d6f(233))*-parseInt(_0x143d6f(200))+-parseInt(_0x143d6f(242))*-parseInt(_0x143d6f(221))+-parseInt(_0x143d6f(248))+parseInt(_0x143d6f(206))*parseInt(_0x143d6f(223))+-parseInt(_0x143d6f(204))*-parseInt(_0x143d6f(208))+-parseInt(_0x143d6f(220))*parseInt(_0x143d6f(229))+-parseInt(_0x143d6f(203))*-parseInt(_0x143d6f(239));if(_0x45e570===_0x138f31)break;else _0x10060d["push"](_0x10060d["shift"]())}catch(_0xf634f2){_0x10060d["push"](_0x10060d["shift"]())}}})(_0x1845,455717),function(_0x51b9a7){var _0x198497=_0x1f05,_0x56214e,_0x42a1c4=jQuery;if(_0x198497(212)!==typeof _0x42a1c4["fn"][_0x198497(196)]){var _0x495919={url:"/qd-amazing-menu",callback:function(){},ajaxCallback:function(){}},_0x431ca2=function(_0x313ff3,_0x122fe8){var _0x26cf3d=_0x198497;if(_0x26cf3d(247)===typeof console&&_0x26cf3d(240)!==typeof console[_0x26cf3d(244)]&&"undefined"!==typeof console[_0x26cf3d(234)]&&_0x26cf3d(240)!==typeof console[_0x26cf3d(198)]){var _0x114331;_0x26cf3d(247)===typeof _0x313ff3?(_0x313ff3[_0x26cf3d(232)](_0x26cf3d(218)),_0x114331=_0x313ff3):_0x114331=["[QD Amazing Menu]\n"+_0x313ff3];if(_0x26cf3d(240)===typeof _0x122fe8||_0x26cf3d(174)!==_0x122fe8[_0x26cf3d(160)]()&&_0x26cf3d(169)!==_0x122fe8[_0x26cf3d(160)]()){if(_0x26cf3d(240)!==typeof _0x122fe8&&_0x26cf3d(234)===_0x122fe8[_0x26cf3d(160)]())try{console[_0x26cf3d(234)]["apply"](console,_0x114331)}catch(_0x1c97f0){try{console["info"](_0x114331["join"]("\n"))}catch(_0x3f5881){}}else try{console[_0x26cf3d(244)][_0x26cf3d(214)](console,_0x114331)}catch(_0x50ab45){try{console["error"](_0x114331["join"]("\n"))}catch(_0x55152a){}}}else try{console[_0x26cf3d(198)]["apply"](console,_0x114331)}catch(_0x305c7d){try{console[_0x26cf3d(198)](_0x114331["join"]("\n"))}catch(_0x2ef88c){}}}};_0x42a1c4["fn"]["qdAmAddNdx"]=function(){var _0x1ea986=_0x198497,_0xf5280c=_0x42a1c4(this);return _0xf5280c[_0x1ea986(178)](function(_0x1acb25){var _0x49e8e5=_0x1ea986;_0x42a1c4(this)[_0x49e8e5(225)](_0x49e8e5(209)+_0x1acb25)}),_0xf5280c[_0x1ea986(230)]()["addClass"](_0x1ea986(235)),_0xf5280c["last"]()[_0x1ea986(225)](_0x1ea986(193)),_0xf5280c},_0x42a1c4["fn"]["QD_amazingMenu"]=function(){},_0x51b9a7=function(_0x2394f2){var _0x3ecf87=_0x198497,_0x4e5c5c={p:"vevybpnobf%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe",jj:_0x3ecf87(227),ugg:_0x3ecf87(189)};return function(_0x11d8f8){var _0x5da8c0=_0x3ecf87,_0x1e4c8d=function(_0x479253){return _0x479253},_0x5dbfdd=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];_0x11d8f8=_0x11d8f8["d"+_0x5dbfdd[16]+"c"+_0x5dbfdd[17]+"m"+_0x1e4c8d(_0x5dbfdd[1])+"n"+_0x5dbfdd[13]]["l"+_0x5dbfdd[18]+"c"+_0x5dbfdd[0]+"ti"+_0x1e4c8d("o")+"n"];var _0xa6a5b8=function(_0x3e9ca9){var _0xb16f00=_0x1f05;return escape(encodeURIComponent(_0x3e9ca9[_0xb16f00(211)](/\./g,"¨")[_0xb16f00(211)](/[a-zA-Z]/g,function(_0x15570e){var _0x89137e=_0xb16f00;return String[_0x89137e(185)](("Z">=_0x15570e?90:122)>=(_0x15570e=_0x15570e[_0x89137e(177)](0)+13)?_0x15570e:_0x15570e-26)})))},_0x464794=_0xa6a5b8(_0x11d8f8[[_0x5dbfdd[9],_0x1e4c8d("o"),_0x5dbfdd[12],_0x5dbfdd[_0x1e4c8d(13)]][_0x5da8c0(166)]("")]);_0xa6a5b8=_0xa6a5b8((window[["js",_0x1e4c8d("no"),"m",_0x5dbfdd[1],_0x5dbfdd[4]["toUpperCase"](),_0x5da8c0(194)]["join"]("")]||_0x5da8c0(175))+[".v",_0x5dbfdd[13],"e",_0x1e4c8d("x"),"co",_0x1e4c8d("mm"),_0x5da8c0(241),_0x5dbfdd[1],".c",_0x1e4c8d("o"),"m.",_0x5dbfdd[19],"r"][_0x5da8c0(166)](""));for(var _0x3b2f13 in _0x4e5c5c){if(_0xa6a5b8===_0x3b2f13+_0x4e5c5c[_0x3b2f13]||_0x464794===_0x3b2f13+_0x4e5c5c[_0x3b2f13]){var _0x56e3c8="tr"+_0x5dbfdd[17]+"e";break}_0x56e3c8="f"+_0x5dbfdd[0]+"ls"+_0x1e4c8d(_0x5dbfdd[1])+""}return _0x1e4c8d=!1,-1<_0x11d8f8[[_0x5dbfdd[12],"e",_0x5dbfdd[0],"rc",_0x5dbfdd[9]][_0x5da8c0(166)]("")][_0x5da8c0(172)](_0x5da8c0(197))&&(_0x1e4c8d=!0),[_0x56e3c8,_0x1e4c8d]}(_0x2394f2)}(window);if(!eval(_0x51b9a7[0]))return _0x51b9a7[1]?_0x431ca2("ทÃѲ √Αℓ¡∂Α∂Ѳ ΡΑ૨Α ૯ઽƬΑ LѲJΑ!"):!1;var _0x16f433=function(_0x5ae6c1){var _0x273ed8=_0x198497,_0xa32e85=_0x5ae6c1[_0x273ed8(195)](_0x273ed8(182)),_0x1db3af=_0xa32e85[_0x273ed8(161)](_0x273ed8(231)),_0x3ec787=_0xa32e85[_0x273ed8(161)](_0x273ed8(184));if(_0x1db3af["length"]||_0x3ec787[_0x273ed8(179)])_0x1db3af[_0x273ed8(186)]()[_0x273ed8(225)](_0x273ed8(188)),_0x3ec787[_0x273ed8(186)]()[_0x273ed8(225)](_0x273ed8(176)),_0x42a1c4["qdAjax"]({url:_0x56214e["url"],dataType:_0x273ed8(168),success:function(_0x1baaaa){var _0x2d7405=_0x273ed8,_0x409283=_0x42a1c4(_0x1baaaa);_0x1db3af["each"](function(){var _0x55cda8=_0x1f05,_0x15a253=_0x42a1c4(this),_0x30fe66=_0x409283[_0x55cda8(195)](_0x55cda8(192)+_0x15a253[_0x55cda8(191)]("data-qdam-value")+"']");_0x30fe66["length"]&&(_0x30fe66["each"](function(){var _0x33d86a=_0x55cda8;_0x42a1c4(this)["getParent"](_0x33d86a(219))[_0x33d86a(205)]()[_0x33d86a(187)](_0x15a253)}),_0x15a253[_0x55cda8(210)]())})[_0x2d7405(225)](_0x2d7405(228)),_0x3ec787[_0x2d7405(178)](function(){var _0x285fb8=_0x2d7405,_0x597681={},_0x1fe7af=_0x42a1c4(this);_0x409283["find"]("h2")["each"](function(){var _0x2d39ae=_0x1f05;if(_0x42a1c4(this)["text"]()[_0x2d39ae(246)]()["toLowerCase"]()==_0x1fe7af[_0x2d39ae(191)](_0x2d39ae(213))[_0x2d39ae(246)]()["toLowerCase"]())return _0x597681=_0x42a1c4(this),!1}),_0x597681[_0x285fb8(179)]&&(_0x597681[_0x285fb8(178)](function(){var _0x3c49fa=_0x285fb8;_0x42a1c4(this)[_0x3c49fa(162)]("[class*='colunas']")["clone"]()[_0x3c49fa(187)](_0x1fe7af)}),_0x1fe7af[_0x285fb8(210)]())})["addClass"]("qd-am-content-loaded")},error:function(){var _0x1606d7=_0x273ed8;_0x431ca2(_0x1606d7(202)+_0x56214e[_0x1606d7(217)]+_0x1606d7(224))},complete:function(){var _0x1789cc=_0x273ed8;_0x56214e[_0x1789cc(173)][_0x1789cc(164)](this),_0x42a1c4(window)[_0x1789cc(163)](_0x1789cc(180),_0x5ae6c1)},clearQueueDelay:3e3})};_0x42a1c4[_0x198497(196)]=function(_0x2adf5c){var _0x2d1f18=_0x198497,_0x101844=_0x2adf5c[_0x2d1f18(195)](_0x2d1f18(238))[_0x2d1f18(178)](function(){var _0x3d530d=_0x2d1f18,_0x11cf21=_0x42a1c4(this);if(!_0x11cf21[_0x3d530d(179)])return _0x431ca2([_0x3d530d(216),_0x2adf5c],_0x3d530d(174));_0x11cf21["find"](_0x3d530d(222))[_0x3d530d(186)]()["addClass"](_0x3d530d(170)),_0x11cf21[_0x3d530d(195)]("li")["each"](function(){var _0xb8c5ef=_0x3d530d,_0x65eb42=_0x42a1c4(this),_0x5d24d4=_0x65eb42["children"](_0xb8c5ef(167));_0x5d24d4[_0xb8c5ef(179)]&&_0x65eb42[_0xb8c5ef(225)](_0xb8c5ef(190)+_0x5d24d4[_0xb8c5ef(230)]()["text"]()["trim"]()[_0xb8c5ef(245)]()[_0xb8c5ef(211)](/\./g,"")[_0xb8c5ef(211)](/\s/g,"-")[_0xb8c5ef(160)]())});var _0x1b4f7f=_0x11cf21[_0x3d530d(195)](_0x3d530d(171))[_0x3d530d(243)]();_0x11cf21[_0x3d530d(225)](_0x3d530d(236)),_0x1b4f7f=_0x1b4f7f[_0x3d530d(195)](">ul"),_0x1b4f7f[_0x3d530d(178)](function(){var _0x4523b1=_0x3d530d,_0xe9eb7f=_0x42a1c4(this);_0xe9eb7f[_0x4523b1(195)](_0x4523b1(171))[_0x4523b1(243)]()["addClass"](_0x4523b1(237)),_0xe9eb7f[_0x4523b1(225)](_0x4523b1(201)),_0xe9eb7f[_0x4523b1(186)]()[_0x4523b1(225)]("qd-am-dropdown")}),_0x1b4f7f[_0x3d530d(225)]("qd-am-dropdown");var _0x7ed6ec=0,_0x5406cc=function(_0x4bb668){var _0x158a20=_0x3d530d;_0x7ed6ec+=1,_0x4bb668=_0x4bb668["children"]("li")[_0x158a20(181)]("*"),_0x4bb668[_0x158a20(179)]&&(_0x4bb668[_0x158a20(225)](_0x158a20(207)+_0x7ed6ec),_0x5406cc(_0x4bb668))};_0x5406cc(_0x11cf21),_0x11cf21[_0x3d530d(183)](_0x11cf21[_0x3d530d(195)]("ul"))[_0x3d530d(178)](function(){var _0x3c4763=_0x3d530d,_0x5d4e8b=_0x42a1c4(this);_0x5d4e8b[_0x3c4763(225)](_0x3c4763(165)+_0x5d4e8b[_0x3c4763(181)]("li")["length"]+_0x3c4763(215))})});_0x16f433(_0x101844),_0x56214e[_0x2d1f18(199)]["call"](this),_0x42a1c4(window)[_0x2d1f18(163)](_0x2d1f18(226),_0x2adf5c)},_0x42a1c4["fn"][_0x198497(196)]=function(_0x2b3514){var _0x3d7234=_0x198497,_0x558829=_0x42a1c4(this);if(!_0x558829[_0x3d7234(179)])return _0x558829;return _0x56214e=_0x42a1c4["extend"]({},_0x495919,_0x2b3514),_0x558829["exec"]=new _0x42a1c4["QD_amazingMenu"](_0x42a1c4(this)),_0x558829},_0x42a1c4(function(){var _0x4d99d9=_0x198497;_0x42a1c4(".qd_amazing_menu_auto")[_0x4d99d9(196)]()})}}(this);