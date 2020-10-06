// qd-include ../qd-quatro-lib-plugins/String Extender/StringExtender.min.js
// qd-include ../qd-quatro-lib-plugins/Array Extender/ArrayExtender.min.js

/**Funções base */
try {
	/* COMMON */
	// qd-include ./web/JS/components/JS.con.e.mbl.functions.common-dev.js
		
	/* HOME */
	// qd-include ./web/JS/components/JS.con.e.mbl.functions.home-dev.js	
	
	/* SEARCH */
	// qd-include ./web/JS/components/JS.con.e.mbl.functions.search-dev.js
		
	/* PRODUCT */
	// qd-include ./web/JS/components/JS.con.e.mbl.functions.product-dev.js
	
	/* LIST */
	// qd-include ./web/JS/components/JS.con.e.mbl.functions.list-dev.js
	
	/* INSTITUCIONAL */
	// qd-include ./web/JS/components/JS.con.e.mbl.functions.institucional-dev.js
	
	/* ORDERS */
	// qd-include ./web/JS/components/JS.con.e.mbl.functions.orders-dev.js
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

// qd-include web/JS/JS.jquery.slick.min.js
// qd-include ../qd-amazing-menu/VTEX/QD_amazingMenu.min.js
// qd-include ../qd-quatro-lib-plugins/Scroll Toggle/QD_scrollToggle.min.js