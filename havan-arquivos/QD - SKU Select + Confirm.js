/*QD - SKU Select + Confirm*/
(function() {
	$(function() {
		try {
			if (typeof skuJson == "undefined")
				return;

			function shake(div){
				var interval = 100;
				var distance = 10;
				var times = 4;
				$(div).css('position', 'relative');
				for(var iter = 0; iter < (times+1); iter++){
					if(iter == 0)
						div.stop(true, true);

					div.animate({
						left:((iter%2==0 ? distance : distance*-1))
					},interval);
				}
				div.animate({ left: 0},interval);
			}

			var modal = $('<div class="modal fade select-sku-qd-v1-modal" tabindex="-1" role="dialog" style="display:none"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <h4 class="modal-title">Selecione uma variação disponível</h4> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><i class="fa fa-times-circle"></i></button> </div> <div class="modal-body"> <div class="row"> <div class="col-xs-3"> <div class="select-sku-qd-v1-image"></div> </div> <div class="col-xs-9"> <div class="select-sku-qd-v1-name"> <h3 class="productName"></h3></div> <div class="select-sku-qd-v1-selector"></div> <div class="select-sku-qd-v1-price"></div> <div class="select-sku-qd-v1-buy-button"><a href="" class="buy-button">Comprar</a></div> <div class="select-sku-qd-v1-notify-me"></div> </div> </div> </div> </div> </div> </div> </div>');
			modal.find('.close').on('click', function(){
				modal.modal('hide');
			});

			modal.find(".select-sku-qd-v1-price").price(skuJson.productId);

			if (window.notifyMeOptions)
				modal.find(".select-sku-qd-v1-notify-me").notifyMe(skuJson.productId, {strings: window.notifyMeOptions.strings});

			var selector = modal.find(".select-sku-qd-v1-selector");
			selector.skuSelector(skuJson_0, {selectSingleDimensionsOnOpening: 'true'});

			var buyButton = modal.find(".select-sku-qd-v1-buy-button a");
			buyButton.buyButton(skuJson.productId, {salesChannel: jssalesChannel}, {});
			buyButton.click(function() {
				if($(this).attr("href") != "#"){
					modal.modal('hide');
					return;
				}

				shake(selector);
				return false;
			});

			// Obtendo o preço do primeiro SKU disponível
			skuData = {};
			var idSkuShipping = parseInt($("div[skuCorrente]:first").attr("skuCorrente"), 10);
			if (idSkuShipping) {
				for (var l = 0; l < skuJson.skus.length; l++) {
					if(skuJson.skus[l].sku == idSkuShipping){
						skuData = skuJson.skus[l];
						break;
					}
				}
			}
			else {
				var skuLowerPrice = 99999999999999;
				for (var i = 0; i < skuJson.skus.length; i++) {
					if (!skuJson.skus[i].available)
						continue;

					if(skuJson.skus[i].bestPrice < skuLowerPrice){
						skuLowerPrice = skuJson.skus[i].bestPrice;
						skuData = skuJson.skus[i];
					}
				}
			}

			var img = modal.find(".select-sku-qd-v1-image");
			$(document).on("skuSelected.vtex", function(e, prod, sku) {
				img.html('<img src="' + sku.image + '" alt="' + sku.skuname + '"/>');

				selector.find("input").each(function() {
					var $t = $(this);
					$t.attr("id", $t.attr("id") + "_qd");
					$t.next("label").attr("for", $t.attr("id"));
				});
			});

			var clicked = false;
			$("a.buy-button").click(function() {
				if(($(this).attr("href") || "").toLowerCase().indexOf("selecione o modelo desejado") < 0)
					return;

				if(!clicked){
					$(document.body).trigger("skuSelected.vtex", [skuJson.productId, skuData]);
					$(":not(li[layout]) a.buy-button").attr("href", "javascript:alert('Por favor, selecione o modelo desejado.');");
					buyButton.attr("href", "#");
				}

				clicked = true;

				modal.modal();
				return false;
			});

			modal.appendTo(document.body);
		}
		catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: ", e)); }
	});

	$(function() {
		try {
			if (typeof skuJson == "undefined")
				return;

			var modal = $('<div class="modal fade confirm-sku-qd-v1-modal" tabindex="-1" role="dialog" style="display:none"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-body"> <h4>VOCÊ SELECIONOU O PRODUTO</h4> <p class="confirm-sku-qd-v1-name"></p> <div class="confirm-sku-qd-v1-cancel"><a href="">&lt; Cancelar</a></div> <div class="confirm-sku-qd-v1-buy-button"><a href="">Comprar &gt;</a></div> </div> </div> </div> </div>');
			var name = modal.find(".confirm-sku-qd-v1-name");

			var buyButton = modal.find(".confirm-sku-qd-v1-buy-button a");
			buyButton.buyButton(skuJson.productId, {salesChannel: jssalesChannel}, {});

			modal.find(".confirm-sku-qd-v1-cancel a").click(function() {
				modal.modal('hide');
				return false;
			});

			$("a.buy-button").not(buyButton).click(function() {
				if(typeof skuJson.dimensionsMap['Escolha a Voltagem'] == 'undefined' || ($(this).attr("href") || "").indexOf("/checkout/cart/add") < 0)
					return;

				modal.modal();
				return false;
			});

			$(document).on("skuSelected.vtex", function(e, prod, sku) {
				try {
					name.html(sku.dimensions['Escolha a Voltagem']);
				}
				catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: ", e)); }
			});

			modal.appendTo(document.body);
		}
		catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: ", e)); }
	});
})();