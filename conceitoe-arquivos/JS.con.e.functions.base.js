"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});

/**Funções base */
try {
	/* COMMON */
	
	var Common = {
    run: function() {},
    init: function() {
        Common.applyAmazingMenu();
    },
    ready: function() {},
    ajaxStop: function() {},
    windowOnload: function() {},
    applyAmazingMenu: function () {
        $('.header-qd-v1-am').QD_amazingMenu();
    }    
};
	
	/* HOME */
	var Home = {
    init: function() {},
    ajaxStop: function() {},
    windowOnload: function() {}
};	
	
	/* SEARCH */
	var Search = {
    init: function() {},
    ajaxStop: function() {},
    windowOnload: function() {}
};
	
	/* PRODUCT */
	var Product = {
    run: function() {},
    init: function() {
        Product.setAvailableBodyClass();
    },
    ajaxStop: function() {},
    windowOnload: function() {},
    setAvailableBodyClass: function() {
        function checkVisibleNotify(available) {
            if (available)
                $(document.body).addClass('qd-product-available').removeClass('qd-product-unavailable');
            else
                $(document.body).addClass('qd-product-unavailable').removeClass('qd-product-available');
        }

        $(document).on("skuSelected.vtex", function(e, id, sku) {
            checkVisibleNotify(sku.available);
        });

        checkVisibleNotify(skuJson.available);
    }
};
	
	/* LIST */
	var List = {
    run: function() {},
    init: function() {},
    ajaxStop: function() {},
    windowOnload: function() {}
};
	
	/* INSTITUCIONAL */
	var Institutional = {
    init: function() {},
    ajaxStop: function() {},
    windowOnload: function() {}
};
	
	/* ORDERS */
	var Orders = {
    init: function() {
        Orders.bootstrapCssFix();
    },
    ajaxStop: function() {},
    windowOnload: function() {},
    bootstrapCssFix: function() {
        var styleSheets = document.styleSheets;
        for (var i = 0; i < styleSheets.length; i++) {
            if ((styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css') > -1 || (styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css') > -1) {
                styleSheets[i].disabled = true;
            }
        }
    }
};
}
catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Houve um erro nos objetos. Detalhes: " + e.message)); }

try {
	(function() {
		var body, ajaxStop, windowLoad;

		windowLoad = function() {
			Common.windowOnload();
			if (body.is(".home")) Home.windowOnload();
			else if (body.is(".resultado-busca, .departamento, .categoria")) Search.windowOnload();
			else if (body.is(".produto")) Product.windowOnload();
			else if (body.is(".listas, .giftlist")) List.windowOnload();
			else if (body.is(".institucional")) Institutional.windowOnload();
			else if (body.is(".orders")) Orders.windowOnload();
		};

		ajaxStop = function() {
			Common.ajaxStop();
			if (body.is(".home")) Home.ajaxStop();
			else if (body.is(".resultado-busca, .departamento, .categoria")) Search.ajaxStop();
			else if (body.is(".produto")) Product.ajaxStop();
			else if (body.is(".listas, .giftlist")) List.ajaxStop();
			else if (body.is(".institucional")) Institutional.ajaxStop();
			else if (body.is(".orders")) Orders.ajaxStop();
		};

		$(function() {
			body = $(document.body);
			Common.init();
			if (body.is(".home")) Home.init();
			else if (body.is(".resultado-busca, .departamento, .categoria")){
				Search.isSearch = $(document.body).is('.resultado-busca');
				Search.isDepartament = $(document.body).is('.departamento');
				Search.isCategory = $(document.body).is('.categoria');
				Search.init();
			}
			else if (body.is(".produto")) Product.init();
			else if (body.is(".listas, .giftlist")) List.init();
			else if (body.is(".institucional")) Institutional.init();
			else if (body.is(".orders")) Orders.init();
			$(document).ajaxStop(ajaxStop);
			$(window).load(windowLoad);
			body.addClass('jsFullLoaded');
			Common.ready();
		});

		Common.run();
		if (location.pathname.substr(location.pathname.length - 2, 2).toLowerCase() == "/p")
			Product.run();
		else if (location.pathname.search(/^(\/giftlist|\/list\/)/) == 0)
			List.run();
	})();
}
catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && $("body").addClass('jsFullLoaded jsFullLoadedError') && console.error("Houve um erro ao iniciar os objetos. Detalhes: " + e.message)); }

/* Quatro Digital Amazing Menu // 2.13 // Carlos Vinicius // Todos os direitos reservados */

/* FUNÇÕES AUXILIARES */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);

var _0x826a=['hide','qd-am-content-loaded','each','trim','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27','\x27\x20falho.','ajaxCallback','trigger','QuatroDigital.am.ajaxCallback','ul[itemscope]','qd-am-has-ul','children',':not(ul)','qd-am-elem-','text','replaceSpecialChars','>li','qdAmAddNdx','qd-amazing-menu','>ul','qd-am-column','qd-am-dropdown','qd-am-level-','call','QuatroDigital.am.callback','QD_amazingMenu','/qd-amazing-menu','undefined','error','info','object','unshift','[QD\x20Amazing\x20Menu]\x0a','alerta','toLowerCase','apply','join','warn','addClass','qd-am-li-','first','qd-am-first','last','baprvgbr%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','j%25C2%25A8pbaprvgbr%25C2%25A8pbz%25C2%25A8oe','replace','toUpperCase','ite','---','erc','indexOf','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','find','filter','.qd-am-collection','length','parent','qd-am-banner-wrapper','qdAjax','url','img[alt=\x27','attr','data-qdam-value','getParent','.box-banner'];(function(_0x20bc10,_0x4c4c4f){var _0x1d2eb5=function(_0x24c39e){while(--_0x24c39e){_0x20bc10['push'](_0x20bc10['shift']());}};_0x1d2eb5(++_0x4c4c4f);}(_0x826a,0xdc));var _0xc147=function(_0x2a283a,_0x26c3cb){_0x2a283a=_0x2a283a-0x0;var _0x1f8394=_0x826a[_0x2a283a];return _0x1f8394;};(function(_0x1a3980){var _0x37e5fa;var _0x172b2c=jQuery;if('function'!==typeof _0x172b2c['fn'][_0xc147('0x0')]){var _0x56eb53={'url':_0xc147('0x1'),'callback':function(){},'ajaxCallback':function(){}};var _0x5e1056=function(_0x172b2c,_0x59cb55){if('object'===typeof console&&_0xc147('0x2')!==typeof console[_0xc147('0x3')]&&_0xc147('0x2')!==typeof console[_0xc147('0x4')]&&_0xc147('0x2')!==typeof console['warn']){var _0x7d881c;_0xc147('0x5')===typeof _0x172b2c?(_0x172b2c[_0xc147('0x6')]('[QD\x20Amazing\x20Menu]\x0a'),_0x7d881c=_0x172b2c):_0x7d881c=[_0xc147('0x7')+_0x172b2c];if('undefined'===typeof _0x59cb55||_0xc147('0x8')!==_0x59cb55[_0xc147('0x9')]()&&'aviso'!==_0x59cb55[_0xc147('0x9')]())if(_0xc147('0x2')!==typeof _0x59cb55&&_0xc147('0x4')===_0x59cb55[_0xc147('0x9')]())try{console['info'][_0xc147('0xa')](console,_0x7d881c);}catch(_0x53e204){try{console['info'](_0x7d881c[_0xc147('0xb')]('\x0a'));}catch(_0x434514){}}else try{console[_0xc147('0x3')][_0xc147('0xa')](console,_0x7d881c);}catch(_0x2a65a6){try{console[_0xc147('0x3')](_0x7d881c['join']('\x0a'));}catch(_0xbc1147){}}else try{console[_0xc147('0xc')][_0xc147('0xa')](console,_0x7d881c);}catch(_0xe9318e){try{console[_0xc147('0xc')](_0x7d881c['join']('\x0a'));}catch(_0x30bfa2){}}}};_0x172b2c['fn']['qdAmAddNdx']=function(){var _0x157a05=_0x172b2c(this);_0x157a05['each'](function(_0x3a91e7){_0x172b2c(this)[_0xc147('0xd')](_0xc147('0xe')+_0x3a91e7);});_0x157a05[_0xc147('0xf')]()['addClass'](_0xc147('0x10'));_0x157a05[_0xc147('0x11')]()[_0xc147('0xd')]('qd-am-last');return _0x157a05;};_0x172b2c['fn'][_0xc147('0x0')]=function(){};_0x1a3980=function(_0x172b2c){var _0x3f4b7f={'p':_0xc147('0x12'),'jj':_0xc147('0x13')};return function(_0x172b2c){var _0x2e6637=function(_0x172b2c){return _0x172b2c;};var _0x5214bd=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x172b2c=_0x172b2c['d'+_0x5214bd[0x10]+'c'+_0x5214bd[0x11]+'m'+_0x2e6637(_0x5214bd[0x1])+'n'+_0x5214bd[0xd]]['l'+_0x5214bd[0x12]+'c'+_0x5214bd[0x0]+'ti'+_0x2e6637('o')+'n'];var _0x2dfd5f=function(_0x172b2c){return escape(encodeURIComponent(_0x172b2c[_0xc147('0x14')](/\./g,'¨')[_0xc147('0x14')](/[a-zA-Z]/g,function(_0x172b2c){return String['fromCharCode'](('Z'>=_0x172b2c?0x5a:0x7a)>=(_0x172b2c=_0x172b2c['charCodeAt'](0x0)+0xd)?_0x172b2c:_0x172b2c-0x1a);})));};var _0x37e1e9=_0x2dfd5f(_0x172b2c[[_0x5214bd[0x9],_0x2e6637('o'),_0x5214bd[0xc],_0x5214bd[_0x2e6637(0xd)]]['join']('')]);_0x2dfd5f=_0x2dfd5f((window[['js',_0x2e6637('no'),'m',_0x5214bd[0x1],_0x5214bd[0x4][_0xc147('0x15')](),_0xc147('0x16')]['join']('')]||_0xc147('0x17'))+['.v',_0x5214bd[0xd],'e',_0x2e6637('x'),'co',_0x2e6637('mm'),_0xc147('0x18'),_0x5214bd[0x1],'.c',_0x2e6637('o'),'m.',_0x5214bd[0x13],'r'][_0xc147('0xb')](''));for(var _0xe26019 in _0x3f4b7f){if(_0x2dfd5f===_0xe26019+_0x3f4b7f[_0xe26019]||_0x37e1e9===_0xe26019+_0x3f4b7f[_0xe26019]){var _0x1f5bc3='tr'+_0x5214bd[0x11]+'e';break;}_0x1f5bc3='f'+_0x5214bd[0x0]+'ls'+_0x2e6637(_0x5214bd[0x1])+'';}_0x2e6637=!0x1;-0x1<_0x172b2c[[_0x5214bd[0xc],'e',_0x5214bd[0x0],'rc',_0x5214bd[0x9]][_0xc147('0xb')]('')][_0xc147('0x19')](_0xc147('0x1a'))&&(_0x2e6637=!0x0);return[_0x1f5bc3,_0x2e6637];}(_0x172b2c);}(window);if(!eval(_0x1a3980[0x0]))return _0x1a3980[0x1]?_0x5e1056('ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!'):!0x1;var _0x592750=function(_0x3dd923){var _0x4e217e=_0x3dd923[_0xc147('0x1b')]('.qd_am_code');var _0x5aed01=_0x4e217e[_0xc147('0x1c')]('.qd-am-banner');var _0x108a3b=_0x4e217e['filter'](_0xc147('0x1d'));if(_0x5aed01[_0xc147('0x1e')]||_0x108a3b['length'])_0x5aed01[_0xc147('0x1f')]()['addClass'](_0xc147('0x20')),_0x108a3b[_0xc147('0x1f')]()[_0xc147('0xd')]('qd-am-collection-wrapper'),_0x172b2c[_0xc147('0x21')]({'url':_0x37e5fa[_0xc147('0x22')],'dataType':'html','success':function(_0xdb6adf){var _0x4e217e=_0x172b2c(_0xdb6adf);_0x5aed01['each'](function(){var _0xdb6adf=_0x172b2c(this);var _0x5aed01=_0x4e217e['find'](_0xc147('0x23')+_0xdb6adf[_0xc147('0x24')](_0xc147('0x25'))+'\x27]');_0x5aed01[_0xc147('0x1e')]&&(_0x5aed01['each'](function(){_0x172b2c(this)[_0xc147('0x26')](_0xc147('0x27'))['clone']()['insertBefore'](_0xdb6adf);}),_0xdb6adf[_0xc147('0x28')]());})[_0xc147('0xd')](_0xc147('0x29'));_0x108a3b[_0xc147('0x2a')](function(){var _0xdb6adf={};var _0x5aed01=_0x172b2c(this);_0x4e217e[_0xc147('0x1b')]('h2')[_0xc147('0x2a')](function(){if(_0x172b2c(this)['text']()[_0xc147('0x2b')]()[_0xc147('0x9')]()==_0x5aed01['attr'](_0xc147('0x25'))['trim']()[_0xc147('0x9')]())return _0xdb6adf=_0x172b2c(this),!0x1;});_0xdb6adf[_0xc147('0x1e')]&&(_0xdb6adf[_0xc147('0x2a')](function(){_0x172b2c(this)[_0xc147('0x26')]('[class*=\x27colunas\x27]')['clone']()['insertBefore'](_0x5aed01);}),_0x5aed01['hide']());})[_0xc147('0xd')](_0xc147('0x29'));},'error':function(){_0x5e1056(_0xc147('0x2c')+_0x37e5fa[_0xc147('0x22')]+_0xc147('0x2d'));},'complete':function(){_0x37e5fa[_0xc147('0x2e')]['call'](this);_0x172b2c(window)[_0xc147('0x2f')](_0xc147('0x30'),_0x3dd923);},'clearQueueDelay':0xbb8});};_0x172b2c[_0xc147('0x0')]=function(_0x4e3d72){var _0x18bc3e=_0x4e3d72[_0xc147('0x1b')](_0xc147('0x31'))[_0xc147('0x2a')](function(){var _0x458dc6=_0x172b2c(this);if(!_0x458dc6[_0xc147('0x1e')])return _0x5e1056(['UL\x20do\x20menu\x20não\x20encontrada',_0x4e3d72],_0xc147('0x8'));_0x458dc6[_0xc147('0x1b')]('li\x20>ul')['parent']()[_0xc147('0xd')](_0xc147('0x32'));_0x458dc6[_0xc147('0x1b')]('li')[_0xc147('0x2a')](function(){var _0x4eb77d=_0x172b2c(this);var _0x458dc6=_0x4eb77d[_0xc147('0x33')](_0xc147('0x34'));_0x458dc6['length']&&_0x4eb77d['addClass'](_0xc147('0x35')+_0x458dc6[_0xc147('0xf')]()[_0xc147('0x36')]()[_0xc147('0x2b')]()[_0xc147('0x37')]()['replace'](/\./g,'')['replace'](/\s/g,'-')['toLowerCase']());});var _0x18bc3e=_0x458dc6[_0xc147('0x1b')](_0xc147('0x38'))[_0xc147('0x39')]();_0x458dc6['addClass'](_0xc147('0x3a'));_0x18bc3e=_0x18bc3e[_0xc147('0x1b')](_0xc147('0x3b'));_0x18bc3e[_0xc147('0x2a')](function(){var _0x3dfddd=_0x172b2c(this);_0x3dfddd[_0xc147('0x1b')]('>li')[_0xc147('0x39')]()[_0xc147('0xd')](_0xc147('0x3c'));_0x3dfddd['addClass']('qd-am-dropdown-menu');_0x3dfddd[_0xc147('0x1f')]()[_0xc147('0xd')](_0xc147('0x3d'));});_0x18bc3e['addClass'](_0xc147('0x3d'));var _0x554d95=0x0,_0x1a3980=function(_0x172b2c){_0x554d95+=0x1;_0x172b2c=_0x172b2c[_0xc147('0x33')]('li')[_0xc147('0x33')]('*');_0x172b2c[_0xc147('0x1e')]&&(_0x172b2c[_0xc147('0xd')](_0xc147('0x3e')+_0x554d95),_0x1a3980(_0x172b2c));};_0x1a3980(_0x458dc6);_0x458dc6['add'](_0x458dc6['find']('ul'))[_0xc147('0x2a')](function(){var _0x554d95=_0x172b2c(this);_0x554d95[_0xc147('0xd')]('qd-am-'+_0x554d95[_0xc147('0x33')]('li')[_0xc147('0x1e')]+'-li');});});_0x592750(_0x18bc3e);_0x37e5fa['callback'][_0xc147('0x3f')](this);_0x172b2c(window)['trigger'](_0xc147('0x40'),_0x4e3d72);};_0x172b2c['fn'][_0xc147('0x0')]=function(_0x3e5027){var _0x41c117=_0x172b2c(this);if(!_0x41c117[_0xc147('0x1e')])return _0x41c117;_0x37e5fa=_0x172b2c['extend']({},_0x56eb53,_0x3e5027);_0x41c117['exec']=new _0x172b2c[(_0xc147('0x0'))](_0x172b2c(this));return _0x41c117;};_0x172b2c(function(){_0x172b2c('.qd_amazing_menu_auto')[_0xc147('0x0')]();});}}(this));