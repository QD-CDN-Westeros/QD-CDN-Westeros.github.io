/* Snorlax - 05/09/2019 17:00:59 GMT */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});try{var Common={run:function(){},init:function(){Common.applyAmazingMenu();Common.setDataScrollToggle();Common.insertDotInAmazingMenu()},ready:function(){},ajaxStop:function(){},windowOnload:function(){},applyAmazingMenu:function(){$(".header-qd-v1-am").each(function(){var mWrapper=$(this);mWrapper.QD_amazingMenu({callback:function(){var dropDown=mWrapper.find("ul.qd-am-dropdown");dropDown.each(function(){$(this).wrapInner('<li class="qd-am-container clearfix"><ul class="clearfix"></ul></li>')});mWrapper.find("li.qd-am-has-ul.qd-am-dropdown").mouseenter(function(e){try{var $t=$(this);$t.find(".qd-am-container").css("padding-left",$t.offset().left+"px")}catch(e){if(typeof console!=="undefined"&&typeof console.info==="function")console.info("Problemas no Common. Detalhes: ",e.message)}});var lastH=0;dropDown.each(function(){var myDropDown=$(this);myDropDown.find("li").each(function(){var $t=$(this);var ul=$t.children("ul");if(!ul.length)return;$t.mouseleave(function(){myDropDown.height("auto");lastH=myDropDown.height()});$t.mouseenter(function(){try{var curH=ul.height()+$t.position().top;if(curH>lastH){lastH=curH;myDropDown.height(curH)}}catch(e){if(typeof console!=="undefined"&&typeof console.info==="function")console.info("Problemas no Common. Detalhes: ",e.message)}})})})}})})},setDataScrollToggle:function(){$(document.body).attr("data-qd-scroll-limit","200, 800, 1300")},insertDotInAmazingMenu:function(){var wrapper=$(".header-qd-v1-wrapper");wrapper.find(".header-qd-v1-am > ul").append('<span class="x-header__navigation--circle"></span>')}};var Home={init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Search={init:function(){Search.returnToTop();Search.hideProductFiction()},ajaxStop:function(){},windowOnload:function(){},returnToTop:function(){$(".returnToTop-qd-v1").click(function(e){e.preventDefault();$("html, body").stop().animate({scrollTop:$("body").offset().top-100},900,"swing")})},hideProductFiction:function(){$(".x-products__list").find('.x-vitrine__name a[title*="PRODUTO FICTICIO"]').closest("li[layout]").hide()}};var Product={run:function(){},init:function(){Product.setAvailableBodyClass();Product.applyCarouselShelf();Product.skuName()},ajaxStop:function(){},windowOnload:function(){},setAvailableBodyClass:function(){function checkVisibleNotify(available){if(available)$(document.body).addClass("qd-product-available").removeClass("qd-product-unavailable");else $(document.body).addClass("qd-product-unavailable").removeClass("qd-product-available")}$(document).on("skuSelected.vtex",function(e,id,sku){checkVisibleNotify(sku.available)});checkVisibleNotify(skuJson.available)},applyCarouselShelf:function(){var wrapper=$(".x-product__vitrine--list-content .prateleira").not(".slick-initialized");if(!wrapper.length)return false;wrapper.has("h2").each(function(){var $t=$(this);$t.find("h2").insertBefore($t)});wrapper.slick({slidesToShow:5,slidesToScroll:1,infinite:true,draggable:false,speed:500,responsive:[{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3}}]})},skuName:function(){$(".x-product__infos--buy-title-product").text(skuJson.name)}};var List={run:function(){},init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Institutional={init:function(){},ajaxStop:function(){},windowOnload:function(){}};var Orders={init:function(){Orders.bootstrapCssFix()},ajaxStop:function(){},windowOnload:function(){},bootstrapCssFix:function(){var styleSheets=document.styleSheets;for(var i=0;i<styleSheets.length;i++){if((styleSheets[i].href||"").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css")>-1||(styleSheets[i].href||"").indexOf("io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css")>-1){styleSheets[i].disabled=true}}}}}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&console.error("Houve um erro nos objetos. Detalhes: "+e.message)}try{(function(){var body,ajaxStop,windowLoad;windowLoad=function(){Common.windowOnload();if(body.is(".home"))Home.windowOnload();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.windowOnload();else if(body.is(".produto"))Product.windowOnload();else if(body.is(".listas, .giftlist"))List.windowOnload();else if(body.is(".institucional"))Institutional.windowOnload();else if(body.is(".orders"))Orders.windowOnload()};ajaxStop=function(){Common.ajaxStop();if(body.is(".home"))Home.ajaxStop();else if(body.is(".resultado-busca, .departamento, .categoria"))Search.ajaxStop();else if(body.is(".produto"))Product.ajaxStop();else if(body.is(".listas, .giftlist"))List.ajaxStop();else if(body.is(".institucional"))Institutional.ajaxStop();else if(body.is(".orders"))Orders.ajaxStop()};$(function(){body=$(document.body);Common.init();if(body.is(".home"))Home.init();else if(body.is(".resultado-busca, .departamento, .categoria")){Search.isSearch=$(document.body).is(".resultado-busca");Search.isDepartament=$(document.body).is(".departamento");Search.isCategory=$(document.body).is(".categoria");Search.init()}else if(body.is(".produto"))Product.init();else if(body.is(".listas, .giftlist"))List.init();else if(body.is(".institucional"))Institutional.init();else if(body.is(".orders"))Orders.init();$(document).ajaxStop(ajaxStop);$(window).load(windowLoad);body.addClass("jsFullLoaded");Common.ready()});Common.run();if(location.pathname.substr(location.pathname.length-2,2).toLowerCase()=="/p")Product.run();else if(location.pathname.search(/^(\/giftlist|\/list\/)/)==0)List.run()})()}catch(e){typeof console!=="undefined"&&typeof console.error==="function"&&$("body").addClass("jsFullLoaded jsFullLoadedError")&&console.error("Houve um erro ao iniciar os objetos. Detalhes: "+e.message)}"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});(function(a){a.fn.getParent=a.fn.closest})(jQuery);(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);var _0x5e1d=["length","parent","qd-am-banner-wrapper","qd-am-collection-wrapper","qdAjax","img[alt='","attr","data-qdam-value","getParent",".box-banner","clone","insertBefore","qd-am-content-loaded","text","trim","[class*='colunas']","Não foi possível obter os dados do menu. A url '","url","' falho.","ajaxCallback","call","trigger","QuatroDigital.am.ajaxCallback","ul[itemscope]","UL do menu não encontrada","qd-am-has-ul","children",":not(ul)","replaceSpecialChars",">li",">ul","qd-am-dropdown","qd-am-level-","add","qd-am-","-li","callback","QuatroDigital.am.callback","extend","exec",".qd_amazing_menu_auto","function","QD_amazingMenu","undefined","error","warn","object","unshift","[QD Amazing Menu]\n","alerta","toLowerCase","aviso","info","apply","join","qdAmAddNdx","each","addClass","qd-am-li-","first","qd-am-first","last","qd-am-last","baprvgbr%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe","j%25C2%25A8pbaprvgbr%25C2%25A8pbz%25C2%25A8oe","replace","fromCharCode","charCodeAt","ite","---","indexOf","qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82","find",".qd_am_code","filter",".qd-am-banner"];(function(_0xdf3743,_0x284e8d){var _0x1f600c=function(_0x5520ef){while(--_0x5520ef){_0xdf3743["push"](_0xdf3743["shift"]())}};_0x1f600c(++_0x284e8d)})(_0x5e1d,193);var _0x4536=function(_0xf3797e,_0x32e474){_0xf3797e=_0xf3797e-0;var _0x58f1a5=_0x5e1d[_0xf3797e];return _0x58f1a5};(function(_0xc67881){var _0x36b883;var _0x56e6f7=jQuery;if(_0x4536("0x0")!==typeof _0x56e6f7["fn"][_0x4536("0x1")]){var _0x4e82be={url:"/qd-amazing-menu",callback:function(){},ajaxCallback:function(){}};var _0x499d5d=function(_0x56e6f7,_0x271a09){if("object"===typeof console&&_0x4536("0x2")!==typeof console[_0x4536("0x3")]&&_0x4536("0x2")!==typeof console["info"]&&"undefined"!==typeof console[_0x4536("0x4")]){var _0x51be9c;_0x4536("0x5")===typeof _0x56e6f7?(_0x56e6f7[_0x4536("0x6")](_0x4536("0x7")),_0x51be9c=_0x56e6f7):_0x51be9c=[_0x4536("0x7")+_0x56e6f7];if(_0x4536("0x2")===typeof _0x271a09||_0x4536("0x8")!==_0x271a09[_0x4536("0x9")]()&&_0x4536("0xa")!==_0x271a09[_0x4536("0x9")]())if(_0x4536("0x2")!==typeof _0x271a09&&_0x4536("0xb")===_0x271a09[_0x4536("0x9")]())try{console[_0x4536("0xb")][_0x4536("0xc")](console,_0x51be9c)}catch(_0x4dd74f){try{console[_0x4536("0xb")](_0x51be9c[_0x4536("0xd")]("\n"))}catch(_0x2b5b6d){}}else try{console[_0x4536("0x3")][_0x4536("0xc")](console,_0x51be9c)}catch(_0x5ef1fe){try{console["error"](_0x51be9c["join"]("\n"))}catch(_0x5d7186){}}else try{console["warn"][_0x4536("0xc")](console,_0x51be9c)}catch(_0x5bdeb6){try{console["warn"](_0x51be9c[_0x4536("0xd")]("\n"))}catch(_0x3a98c5){}}}};_0x56e6f7["fn"][_0x4536("0xe")]=function(){var _0x42e1b3=_0x56e6f7(this);_0x42e1b3[_0x4536("0xf")](function(_0x4faeeb){_0x56e6f7(this)[_0x4536("0x10")](_0x4536("0x11")+_0x4faeeb)});_0x42e1b3[_0x4536("0x12")]()[_0x4536("0x10")](_0x4536("0x13"));_0x42e1b3[_0x4536("0x14")]()[_0x4536("0x10")](_0x4536("0x15"));return _0x42e1b3};_0x56e6f7["fn"]["QD_amazingMenu"]=function(){};_0xc67881=function(_0x56e6f7){var _0x52c3d4={p:_0x4536("0x16"),jj:_0x4536("0x17")};return function(_0x56e6f7){var _0x3ddfb4=function(_0x56e6f7){return _0x56e6f7};var _0x318116=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];_0x56e6f7=_0x56e6f7["d"+_0x318116[16]+"c"+_0x318116[17]+"m"+_0x3ddfb4(_0x318116[1])+"n"+_0x318116[13]]["l"+_0x318116[18]+"c"+_0x318116[0]+"ti"+_0x3ddfb4("o")+"n"];var _0x1738f9=function(_0x56e6f7){return escape(encodeURIComponent(_0x56e6f7[_0x4536("0x18")](/\./g,"¨")[_0x4536("0x18")](/[a-zA-Z]/g,function(_0x56e6f7){return String[_0x4536("0x19")](("Z">=_0x56e6f7?90:122)>=(_0x56e6f7=_0x56e6f7[_0x4536("0x1a")](0)+13)?_0x56e6f7:_0x56e6f7-26)})))};var _0x52201d=_0x1738f9(_0x56e6f7[[_0x318116[9],_0x3ddfb4("o"),_0x318116[12],_0x318116[_0x3ddfb4(13)]]["join"]("")]);_0x1738f9=_0x1738f9((window[["js",_0x3ddfb4("no"),"m",_0x318116[1],_0x318116[4]["toUpperCase"](),_0x4536("0x1b")]["join"]("")]||_0x4536("0x1c"))+[".v",_0x318116[13],"e",_0x3ddfb4("x"),"co",_0x3ddfb4("mm"),"erc",_0x318116[1],".c",_0x3ddfb4("o"),"m.",_0x318116[19],"r"]["join"](""));for(var _0x374481 in _0x52c3d4){if(_0x1738f9===_0x374481+_0x52c3d4[_0x374481]||_0x52201d===_0x374481+_0x52c3d4[_0x374481]){var _0x22c861="tr"+_0x318116[17]+"e";break}_0x22c861="f"+_0x318116[0]+"ls"+_0x3ddfb4(_0x318116[1])+""}_0x3ddfb4=!1;-1<_0x56e6f7[[_0x318116[12],"e",_0x318116[0],"rc",_0x318116[9]][_0x4536("0xd")]("")][_0x4536("0x1d")](_0x4536("0x1e"))&&(_0x3ddfb4=!0);return[_0x22c861,_0x3ddfb4]}(_0x56e6f7)}(window);if(!eval(_0xc67881[0]))return _0xc67881[1]?_0x499d5d("ทÃѲ √Αℓ¡∂Α∂Ѳ ΡΑ૨Α ૯ઽƬΑ LѲJΑ!"):!1;var _0x42aa88=function(_0x2eb6a8){var _0x12ddc3=_0x2eb6a8[_0x4536("0x1f")](_0x4536("0x20"));var _0xf6db95=_0x12ddc3[_0x4536("0x21")](_0x4536("0x22"));var _0x2e7e45=_0x12ddc3[_0x4536("0x21")](".qd-am-collection");if(_0xf6db95["length"]||_0x2e7e45[_0x4536("0x23")])_0xf6db95[_0x4536("0x24")]()["addClass"](_0x4536("0x25")),_0x2e7e45[_0x4536("0x24")]()["addClass"](_0x4536("0x26")),_0x56e6f7[_0x4536("0x27")]({url:_0x36b883["url"],dataType:"html",success:function(_0x221a98){var _0x12ddc3=_0x56e6f7(_0x221a98);_0xf6db95[_0x4536("0xf")](function(){var _0x221a98=_0x56e6f7(this);var _0xf6db95=_0x12ddc3[_0x4536("0x1f")](_0x4536("0x28")+_0x221a98[_0x4536("0x29")](_0x4536("0x2a"))+"']");_0xf6db95["length"]&&(_0xf6db95[_0x4536("0xf")](function(){_0x56e6f7(this)[_0x4536("0x2b")](_0x4536("0x2c"))[_0x4536("0x2d")]()[_0x4536("0x2e")](_0x221a98)}),_0x221a98["hide"]())})[_0x4536("0x10")](_0x4536("0x2f"));_0x2e7e45[_0x4536("0xf")](function(){var _0x221a98={};var _0xf6db95=_0x56e6f7(this);_0x12ddc3[_0x4536("0x1f")]("h2")[_0x4536("0xf")](function(){if(_0x56e6f7(this)[_0x4536("0x30")]()[_0x4536("0x31")]()[_0x4536("0x9")]()==_0xf6db95[_0x4536("0x29")](_0x4536("0x2a"))[_0x4536("0x31")]()[_0x4536("0x9")]())return _0x221a98=_0x56e6f7(this),!1});_0x221a98["length"]&&(_0x221a98[_0x4536("0xf")](function(){_0x56e6f7(this)["getParent"](_0x4536("0x32"))["clone"]()[_0x4536("0x2e")](_0xf6db95)}),_0xf6db95["hide"]())})["addClass"](_0x4536("0x2f"))},error:function(){_0x499d5d(_0x4536("0x33")+_0x36b883[_0x4536("0x34")]+_0x4536("0x35"))},complete:function(){_0x36b883[_0x4536("0x36")][_0x4536("0x37")](this);_0x56e6f7(window)[_0x4536("0x38")](_0x4536("0x39"),_0x2eb6a8)},clearQueueDelay:3e3})};_0x56e6f7[_0x4536("0x1")]=function(_0x537dd6){var _0x1d5ff9=_0x537dd6[_0x4536("0x1f")](_0x4536("0x3a"))[_0x4536("0xf")](function(){var _0xb94d16=_0x56e6f7(this);if(!_0xb94d16["length"])return _0x499d5d([_0x4536("0x3b"),_0x537dd6],_0x4536("0x8"));_0xb94d16[_0x4536("0x1f")]("li >ul")[_0x4536("0x24")]()[_0x4536("0x10")](_0x4536("0x3c"));_0xb94d16[_0x4536("0x1f")]("li")[_0x4536("0xf")](function(){var _0x4ec056=_0x56e6f7(this);var _0xb94d16=_0x4ec056[_0x4536("0x3d")](_0x4536("0x3e"));_0xb94d16[_0x4536("0x23")]&&_0x4ec056[_0x4536("0x10")]("qd-am-elem-"+_0xb94d16[_0x4536("0x12")]()[_0x4536("0x30")]()[_0x4536("0x31")]()[_0x4536("0x3f")]()[_0x4536("0x18")](/\./g,"")[_0x4536("0x18")](/\s/g,"-")[_0x4536("0x9")]())});var _0x1d5ff9=_0xb94d16[_0x4536("0x1f")](_0x4536("0x40"))["qdAmAddNdx"]();_0xb94d16[_0x4536("0x10")]("qd-amazing-menu");_0x1d5ff9=_0x1d5ff9["find"](_0x4536("0x41"));_0x1d5ff9[_0x4536("0xf")](function(){var _0xe00111=_0x56e6f7(this);_0xe00111[_0x4536("0x1f")](_0x4536("0x40"))["qdAmAddNdx"]()[_0x4536("0x10")]("qd-am-column");_0xe00111[_0x4536("0x10")]("qd-am-dropdown-menu");_0xe00111["parent"]()[_0x4536("0x10")](_0x4536("0x42"))});_0x1d5ff9[_0x4536("0x10")](_0x4536("0x42"));var _0x51bd6e=0,_0xc67881=function(_0x56e6f7){_0x51bd6e+=1;_0x56e6f7=_0x56e6f7["children"]("li")[_0x4536("0x3d")]("*");_0x56e6f7[_0x4536("0x23")]&&(_0x56e6f7[_0x4536("0x10")](_0x4536("0x43")+_0x51bd6e),_0xc67881(_0x56e6f7))};_0xc67881(_0xb94d16);_0xb94d16[_0x4536("0x44")](_0xb94d16[_0x4536("0x1f")]("ul"))[_0x4536("0xf")](function(){var _0x51bd6e=_0x56e6f7(this);_0x51bd6e[_0x4536("0x10")](_0x4536("0x45")+_0x51bd6e[_0x4536("0x3d")]("li")[_0x4536("0x23")]+_0x4536("0x46"))})});_0x42aa88(_0x1d5ff9);_0x36b883[_0x4536("0x47")][_0x4536("0x37")](this);_0x56e6f7(window)[_0x4536("0x38")](_0x4536("0x48"),_0x537dd6)};_0x56e6f7["fn"][_0x4536("0x1")]=function(_0xee094d){var _0x11aae7=_0x56e6f7(this);if(!_0x11aae7[_0x4536("0x23")])return _0x11aae7;_0x36b883=_0x56e6f7[_0x4536("0x49")]({},_0x4e82be,_0xee094d);_0x11aae7[_0x4536("0x4a")]=new(_0x56e6f7[_0x4536("0x1")])(_0x56e6f7(this));return _0x11aae7};_0x56e6f7(function(){_0x56e6f7(_0x4536("0x4b"))["QD_amazingMenu"]()})}})(this);(function(){var c=jQuery,d=function(a,c){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[QD Scroll Toggle]\n"),b=a):b=["[QD Scroll Toggle]\n"+a];if("undefined"===typeof c||"alerta"!==c.toLowerCase()&&"aviso"!==c.toLowerCase())if("undefined"!==typeof c&&"info"===c.toLowerCase())try{console.info.apply(console,b)}catch(e){try{console.info(b.join("\n"))}catch(g){}}else try{console.error.apply(console,b)}catch(e){try{console.error(b.join("\n"))}catch(g){}}else try{console.warn.apply(console,b)}catch(e){try{console.warn(b.join("\n"))}catch(g){}}}};"function"!==typeof c.QD_scrollToggle&&(c.QD_scrollToggle=function(a){var f=[];if("string"!==typeof a&&"number"!==typeof a||"auto"===a)if("auto"===a)f.push(c(window).height());else return d("Não foi informado o limite de scroll necessário para adicionar o atributo.");else{var b=a.split(","),e;for(e in b)"function"!==typeof b[e]&&(a=parseInt(b[e].trim()),isNaN(a)||f.push(a))}if(!f.length)return d("Aaeeeeeeee irmão! Não consegui encontrar nenhum valor para calcular o scroll");if(!document||!document.body||"undefined"===typeof document.body.setAttribute)return d('"document.body.setAttribute" Não é uma função :(');if(!document||!document.body||"undefined"===typeof document.body.removeAttribute)return d('"document.body.removeAttribute" Não é uma função :(');if(!document||!document.body||"undefined"===typeof document.body.getAttribute)return d('"document.body.getAttribute" Não é uma função :(');if(!c(window).scrollTop||isNaN(parseInt(c(window).scrollTop())))return d('"$(window).scrollTop" não esta retornando um número inteiro :(');try{document.body.setAttribute("data-qd-scroll",1),document.body.getAttribute("data-qd-scroll"),document.body.removeAttribute("data-qd-scroll"),document.body.getAttribute("data-qd-scroll")}catch(h){d("Não foi possível fazer o passo a passo de consultar, adicionar e remover um atributo",h.message)}var g=c(window).scrollTop();c(window).scroll(function(){for(var a=c(window).scrollTop(),b=0;b<f.length;b++)a>f[b]?document.body.getAttribute("data-qd-scroll-"+b)||document.body.setAttribute("data-qd-scroll-"+b,1):document.body.getAttribute("data-qd-scroll-"+b)&&document.body.removeAttribute("data-qd-scroll-"+b);a<g?(document.body.removeAttribute("data-qd-scroll-down"),document.body.setAttribute("data-qd-scroll-up",1)):(document.body.removeAttribute("data-qd-scroll-up"),document.body.setAttribute("data-qd-scroll-down",1));g=a})},c(function(){var a=c("body[data-qd-scroll-limit]");a.length&&c.QD_scrollToggle(a.attr("data-qd-scroll-limit"))}))})();