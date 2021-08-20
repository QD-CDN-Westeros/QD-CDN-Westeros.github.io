// qd-include ../qd-quatro-lib-plugins/String Extender/StringExtender.min.js
// qd-include ../qd-quatro-lib-plugins/Array Extender/ArrayExtender.min.js
// qd-include ../qd-quatro-lib-plugins/Tabs/qd-smartTabs.min.js
// qd-include ../qd-quatro-lib-plugins/_assets/QD-jQueryXSSFix.js

/**Funções base */
try {

	/* COMMON */
	// qd-include ./web/JS/components/JS.ffa.functions.common.js

	/* HOME */
	// qd-include ./web/JS/components/JS.ffa.functions.home.js

	/* SEARCH */
	// qd-include ./web/JS/components/JS.ffa.functions.search.js

	/* PRODUCT*/
	// qd-include ./web/JS/components/JS.ffa.functions.product.js

} catch (e) {
	typeof console !== "undefined" && typeof console.error === "function" && console.error("Houve um erro nos objetos. Detalhes: " + e.message);
}

try {
	(function () {
		var body, ajaxStop, windowLoad;

		windowLoad = function () {
			Common.windowOnload();
			if (body.is(".home")) Home.windowOnload();
			else if (body.is(".resultado-busca, .departamento, .categoria"))
				Search.windowOnload();
			else if (body.is(".produto")) Product.windowOnload();
			else if (body.is(".listas, .giftlist")) List.windowOnload();
			else if (body.is(".institucional")) Institutional.windowOnload();
			else if (body.is(".orders")) Orders.windowOnload();
		};

		ajaxStop = function () {
			Common.ajaxStop();
			if (body.is(".home")) Home.ajaxStop();
			else if (body.is(".resultado-busca, .departamento, .categoria"))
				Search.ajaxStop();
			else if (body.is(".produto")) Product.ajaxStop();
			else if (body.is(".listas, .giftlist")) List.ajaxStop();
			else if (body.is(".institucional")) Institutional.ajaxStop();
			else if (body.is(".orders")) Orders.ajaxStop();
		};

		$(function () {
			body = $(document.body);
			Common.init();
			if (body.is(".home")) Home.init();
			else if (body.is(".resultado-busca, .departamento, .categoria")) {
				Search.isSearch = $(document.body).is(".resultado-busca");
				Search.isDepartament = $(document.body).is(".departamento");
				Search.isCategory = $(document.body).is(".categoria");
				Search.init();
			}
			else if (body.is(".produto")) Product.init();
			else if (body.is(".listas, .giftlist")) List.init();
			else if (body.is(".institucional")) Institutional.init();
			else if (body.is(".orders")) Orders.init();
			$(document).ajaxStop(ajaxStop);
			$(window).load(windowLoad);
			body.addClass("jsFullLoaded");
			// Common.ready();
		});

		//Common.run();
		if (location.pathname.substr(location.pathname.length - 2, 2).toLowerCase() == "/p")
			Product.run();
		else if (location.pathname.search(/^(\/giftlist|\/list\/)/) == 0)
			List.run();
	})();
} catch (e) {
	typeof console !== "undefined" && typeof console.error === "function" && $("body").addClass("jsFullLoaded jsFullLoadedError") && console.error("Houve um erro ao iniciar os objetos. Detalhes: " + e.message);
}

// qd-include web/JS/JS.jquery.slick.min.js
// qd-include ../qd-amazing-menu/VTEX/QD_amazingMenu.js
// qd-include ../qd-simple-cart/SimpleCart.min.js
// qd-include ../qd-smart-cart/QD_smartCart.min.js
// qd-include ../qd-smart-buy-button/QD_buyButton.min.js
// qd-include ../qd-product-thumbs/QD_productThumbs.min.js
// qd-include ../qd-quatro-lib-plugins/Facebook Comments/autoFaceComments.min.js
// qd-include ../qd-quatro-lib-plugins/Smart Photo Carousel/QD_smartPhotoCarousel.min.js
// qd-include ../qd-quatro-lib-plugins/Smart Quantity/QD_smartQuantity.min.js
// qd-include ../qd-quatro-lib-plugins/Scroll Toggle/QD_scrollToggle.min.js
// qd-include ../qd-quatro-lib-plugins/_assets/jquery.mask.min.js
// qd-include ../qd-quatro-lib-plugins/_assets/jquery.validate.min.js
// qd-include ../qd-quatro-lib-plugins/_assets/jquery.serializeObject.min.js
