/** Version 2.0 - Mateus Pugliezi */
function updateValueMinicart(t) {
	t > 0 ? ($("#mx-minicart_id .mx-minicart-content.x-group-products footer").fadeIn(), $("#mx-minicart_id .mx-minicart-content.x-group-products header").fadeIn(), $(".mx-minicart-content").removeClass("mx-empty_mn")) : ($(".mx-minicart-content").addClass("mx-empty_mn"), $(".mx-miniCart-box-wrapper .mx-content-minicart").html('<div class="mx-cart-empty">Seu carrinho estÃ¡ vazio!</div>'))
}
floatToCurrency = function(t) {
		for (var e = t.toString().replace(",", "").split("."), a = e[1] || "", n = e[0].split(""), r = [], i = n.length, o = 0; 0 != i; i--, o++) o % 3 == 0 && 0 != o && (r[r.length] = "."), r[r.length] = n[i - 1];
		return 1 == a.length ? a += "0" : 0 == a.length ? a = "00" : a.length > 2 && (a = Math.floor(parseInt(a, 10) / Math.pow(10, a.length - 2)).toString()), "R$ " + r.reverse().join("") + "," + a
	},
	function() {
		var t = function(t) {
			var e = jQuery.extend({
					container: ".mx-miniCart-box-wrapper .mx-content-minicart",
					items: ".mx-amount-itens",
					list: ".cart-list",
					price_label: "R$ ",
					total_price_currency: "",
					total_price_container: ".mx-sub ul li.mx-value",
					total_price_label: "",
					cart_conclude: null,
					remove_btn: !1,
					finish_order_btn: ".finish-order-btn",
					finish_order_btn_link: "/Site/Carrinho.aspx",
					finish_order_btn_text: "Finalizar compra",
					empty_cart_message: "Carrinho vazio",
					items_text: ["nenhum item", "item", "itens"],
					hover: ".tpl-cart",
					callback: null,
					cart_empty_cb: null,
					quantity: !0,
					total_price_class: ".mx-sub",
					total_price_label_class: ".total-price-label",
					dropdown: !0,
					show_images: !0
				}, t),
				a = {
					checkoutURL: "/api/checkout/pub/orderForm/",
					temp: null,
					total_itens: 0,
					total: "0,00",
					empty_cart: null,
					itens: 0,
					data: null,
					init: function(t) {
						a.get.cart.update(t)
					},
					checkoutUpdateURL: function() {
						return a.checkoutURL + a.orderFormId + "/items/update/"
					},
					get: {
						cart: {
							update: function(t) {
								var n, r = {
									expectedOrderFormSections: ["items", "paymentData", "totalizers"]
								};
								t ? ($.extend(r, t), n = a.checkoutUpdateURL()) : n = a.checkoutURL, $.ajax({
									url: n,
									data: JSON.stringify(r),
									dataType: "json",
									contentType: "application/json; charset=utf-8",
									type: "POST",
									success: function(t) {
										a.total_itens = t.items.length, $(".menu-entrar .item .qty").text(t.items.length), a.total_itens > 0 ? (a.orderFormId = t.orderFormId, a.data = t.items, a.set.cart.items(), a.total = _.intAsCurrency(t.value), $(".menu-entrar .valor .vl").text(_.intAsCurrency(t.value)), a.set.cart.total(), e.dropdown && a.mount.cart.dropdown()) : a.set.cart.empty(), updateValueMinicart(a.total_itens)
									}
								})
							},
							text: function() {
								var t = e.items_text.length - 1,
									n = e.items_text.length - 1 == 2 ? 1 : 0,
									r = void 0 === e.items_text[t] ? "" : " ",
									i = void 0 === e.items_text[n] ? "" : " ";
								return parseInt(a.total_itens) > 1 ? a.total_itens + r + e.items_text[t] : 0 == a.total_itens ? e.items_text[0] : a.total_itens + i + e.items_text[n]
							}
						}
					},
					mount: {
						cart: {
							dropdown: function() {
								var t, n, r, i, o = 0,
									c = e.list.split(".")[1] || "",
									d = jQuery("<ul/>").addClass(c);
								for (var s in a.data) {
									if ("function" == typeof a.data[s]) break;
									var l = a.data[s].productId,
										u = a.data[s].productCategories;
									for (var _ in u) {
										var m = u[_].replace("ÃƒÆ’Ã‚Â§", "c").toLowerCase();
										break
									}
									var p = jQuery("<li>").addClass("row").addClass("row-" + o).attr("sku", l).addClass(m);
									t = jQuery("<div>").addClass("col").addClass("col-0"), _span_img = jQuery("<div>").addClass("_qc-img").addClass("_qc-img-" + o).attr("sku", l), _span_product = jQuery("<div>").addClass("_qc-product").addClass("_qc-product-" + o), jQuery(_span_product).text(a.data[s].name), jQuery(t).append(_span_img.html('<img src="' + a.data[s].imageUrl + '" />')), e.show_images && jQuery(t).append(_span_product), n = jQuery("<div>").addClass("col").addClass("col-1"), productLinkItem = jQuery("<a>").attr("href", a.data[s].detailUrl), t = productLinkItem.append(t);
									var v = a.data[s].quantity,
										y = jQuery('<input type="text" value="' + v + '" maxlength="2" />').attr("ndx", o).addClass("_qty").addClass("_qty-" + o).attr("sku", l),
										h = jQuery("<a>", {
											ndx: o
										}).addClass("_add").addClass("_add-" + o).text("+"),
										f = jQuery("<a>", {
											ndx: o
										}).addClass("_remove").addClass("_remove-" + o).text("-");
									jQuery(n).append(y).append(h).append(f);
									var x = (a.data[s].sellingPrice / 100).toFixed(2).toString().replace(/\./, ","),
										j = floatToCurrency(x.replace(",", "."));
									r = jQuery("<div>").addClass("col").addClass("col-2").html(j);
									var Q = a.data[s].id;
									_remove_btn = jQuery("<a>").addClass("remove-link").addClass("remove-link-" + o).attr({
										sku: Q,
										index: o
									}).html("x"), i = jQuery("<div>").addClass("col").addClass("col-3"), jQuery(i).append(_remove_btn), jQuery(p).append(t).append(n).append(r).append(i), jQuery(d).append(p), o++
								}
								jQuery(e.container).html(d), a.set.events(), a.set.cart.conclusion(), a.set.cart.active(), e.show_images
							}
						}
					},
					set: {
						cart: {
							items: function() {
								var t = a.get.cart.text();
								jQuery(e.items).html(t)
							},
							total: function() {
								var t = e.total_price_currency + a.total;
								jQuery(e.total_price_container).html(t)
							},
							empty: function() {
								jQuery(e.hover).unbind().removeClass("active").addClass("empty");
								var t = a.get.cart.text();
								a.set.cart.items(t), jQuery(e.container).length > 0 && jQuery(e.container).html(""), "function" == typeof e.cart_empty_cb && e.cart_empty_cb()
							},
							conclusion: function() {
								t = jQuery("<div/>").addClass("cart_conclude");
								if (jQuery(e.cart_conclude).length > 0) var t = jQuery(e.cart_conclude);
								var n = e.finish_order_btn.substring(1) || "",
									r = jQuery("<a/>").addClass(n).attr("href", e.finish_order_btn_link).html(e.finish_order_btn_text);
								jQuery(t).append(r);
								var i = e.total_price_currency + a.total;
								$('<div class="mx-finish"><div class="mx-total"><div class="mx-valorTotal">' + i + '</div><div class="mx-actions"><div class="mx-tocart"><a href="/checkout/#/cart">Finalizar compra</a></div></div></div></div>').appendTo("#quickCartDropdown")
							},
							active: function() {
								jQuery(e.hover).removeClass("empty").addClass("available"), "function" == typeof e.callback && e.callback()
							}
						},
						events: function() {
							var t = function(t) {
									a.init({
										orderItems: [{
											index: t,
											quantity: 0
										}]
									})
								},
								n = function(t, n) {
									jQuery(e.container).find("._qty,._add,._remove").removeClass("active").removeClass("keydown_binding"), jQuery(e.container).find("._qty").attr("readonly", !0), a.init({
										orderItems: [{
											index: t,
											quantity: n
										}]
									})
								};
							(function() {
								jQuery(e.hover).hover(function() {
									jQuery(this).addClass("active")
								}, function() {
									jQuery(e.hover).removeClass("active")
								})
							})(),
							function() {
								jQuery(e.container).find(".remove-link").click(function() {
									t($(this).attr("index"))
								})
							}(),
							function() {
								jQuery(e.container).find('._qty:not(".keydown_binding")').addClass("keydown_binding").keydown(function(t) {
									var e = t.charCode || t.keyCode || 0;
									return 8 == e || 9 == e || 46 == e || e >= 37 && 40 >= e || e >= 48 && 57 >= e || e >= 96 && 105 >= e
								})
							}(),
							function() {
								jQuery(e.container).find('._add:not(".active")').addClass("active").click(function() {
									_ndx = jQuery(this).attr("ndx"), _val = parseInt(jQuery("._qty-" + _ndx).val()), _val = _val >= 99 ? 99 : _val + 1, jQuery("._qty-" + _ndx).val(_val).change()
								}), jQuery(e.container).find('._remove:not(".active")').addClass("active").click(function() {
									_ndx = jQuery(this).attr("ndx"), _val = parseInt(jQuery("._qty-" + _ndx).val()), _val = 1 >= _val ? 1 : _val - 1, jQuery("._qty-" + _ndx).val(_val).change()
								}), jQuery(e.container).find('._qty:not(".active")').addClass("active").keyup(function() {
									jQuery(this).val() < 1 ? jQuery(this).val(1) : jQuery(this).val() > 99 && jQuery(this).val(99)
								}).change(function() {
									n(jQuery(this).attr("ndx"), jQuery(this).val())
								})
							}()
						}
					},
					refresh: function() {
						a.init()
					}
				};
			a.init();
			return function() {
				return {
					refresh: a.refresh
				}
			}()
		};
		jQuery.vtex_quick_cart = function(e) {
			return new t(e)
		}
	}(jQuery);
var optionsMiniCart = {
	items_text: ['<em class="mx-amount-itens_">0</em>', "", ""],
	callback: function() {
		vtexjs.checkout.getOrderForm().done(function(t) {
			updateValueMinicart(t.items.length)
		})
	}
};
jQuery.vtex_quick_cart(optionsMiniCart), $(document).ajaxStop(function() {});