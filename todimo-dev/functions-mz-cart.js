!function(){const t={formatReal:function(t){return null===t?"":(0!=t&&(t/=100),t.toLocaleString("pt-BR",{style:"currency",currency:"BRL",minimumFractionDigits:2}).replace(".",","))},formatEstimate:function(t,e){return t.indexOf("bd")>0&&t.indexOf("1bd")<0?t.replace("bd"," dias"):0===t.indexOf("1bd")?t.replace("bd"," dia"):t.indexOf("h")>0?t.replace("h"," horas"):0===t.indexOf("0")?0!==e.length?"disponível somente para retirada":"indisponível":void 0},formatStoreName:function(t){if(t.indexOf("-")>0)return t.replace(/[^a-zA-Z0-9\.]+/g," ")},changeLocalStorage:function(t){localStorage.setItem("activeDeliveryChannel",t),localStorage.setItem("aditionalShippingData",JSON.stringify({activeTab:t,isScheduledDeliveryActive:!0,originComponent:"omnishipping",selectedLeanShippingOption:"CHEAPEST"}))},getMainLogistic:function(t,e){try{return t.shippingData.logisticsInfo.map((({itemIndex:t,slas:n})=>{const i=n.find((t=>t.pickupPointId==(e||null))),a=e?"pickup-in-point":"delivery";return{itemIndex:t,selectedSla:i.id,selectedDeliveryChannel:a}}))}catch{return null}},getLogisticSpecific:function(t,e,n){try{return t.shippingData.logisticsInfo.map((({itemIndex:t,slas:i})=>{if(t===e){const e=i.find((t=>t.id==(n||null))),a=n?"delivery":"pickup-in-point";return{itemIndex:t,selectedSla:e.id,selectedDeliveryChannel:a}}}))}catch{return null}},changeToPickup:function(e,n){let i=vtexjs.checkout.orderForm.shippingData.address.postalCode;vtexjs.checkout.sendAttachment("shippingData",{address:{country:"BRA",postalCode:i,addressType:"residential"}}).done((function(a){const o=a.shippingData.logisticsInfo.map((({itemIndex:t,slas:i})=>{if(t===parseInt(e)){const e=i.find((t=>t.pickupPointId==n));return{itemIndex:t,addressId:(-1*(new Date).getTime()).toString(),selectedSla:e.id,selectedDeliveryChannel:"pickup-in-point"}}})).filter((function(t){if(void 0!==t)return t}));vtexjs.checkout.sendAttachment("shippingData",{address:{country:"BRA",postalCode:i,addressType:""},logisticsInfo:o},null).done((function(){t.changeLocalStorage("pickup-in-point"),location.reload()}))}))},changeToDelivery:function(e,n){return vtexjs.checkout.getOrderForm().then((i=>{const a=t.getLogisticSpecific(i,parseInt(e),n).filter((function(t){if(void 0!==t)return t}));vtexjs.checkout.sendAttachment("shippingData",{address:{country:"BRA",postalCode:vtexjs.checkout.orderForm.shippingData.address.postalCode,addressType:"residential"},logisticsInfo:a},null).done((function(){t.changeLocalStorage("delivery"),location.reload()}))}))},verifyLimit:function(t){let e=$.ajax({url:"/api/catalog_system/pub/products/search?fq=productId:"+t,method:"GET",async:!1});return JSON.parse(e.responseText)[0].items[0].sellers[0].commertialOffer.AvailableQuantity}},e={init:function(){e.bringInfo()},bringInfo:function(){vtexjs.checkout.getOrderForm().done((function(t){const n=vtexjs.checkout.orderForm.items,i=vtexjs.checkout.orderForm.shippingData.logisticsInfo,a=$(".cart-loading"),o=$(".cart"),r=$(".cart-empty");n.length>0?(e.buildCart(n,i),o.addClass("display-cart"),r.removeClass("display-empty-cart"),a.hide()):(o.removeClass("display-cart"),r.addClass("display-empty-cart"),a.hide())}))},buildCart:function(t,i){let a,o,r=[];t.map((function(t,e){const n=i.filter((function(t){if(t.itemIndex===e)return t}));n[0].slas.length>0?(a=n[0].slas.filter((function(t){if("pickup-in-point"===t.deliveryChannel)return t})),o=n[0].slas.filter((function(t){if("delivery"===t.deliveryChannel)return t}))):(a=[],o=[]);const s=n[0].slas.filter((function(t){if(t.id===n[0].selectedSla)return t}));let d;d=s.length>0?s[0].shippingEstimate:"0",r.push({index:n[0].itemIndex,productID:t.productId,skuid:t.id,refid:t.productRefId,name:t.name,link:t.detailUrl,image:t.imageUrl,price:t.price,qtd:t.quantity,hasPickup:a.length,hasDelivery:o.length,selectedDelivery:n[0].selectedDeliveryChannel,selectedSla:n[0].selectedSla,slas:n[0].slas,estimate:d,measure:t.measurementUnit,unit:t.unitMultiplier})})),e.addHTML(r),n.init()},addHTML:function(n){const i=$(".mz-cart .cart__table table");i.html(""),i.append("\n        <tr>\n          <th>Produto</th>\n          <th>Entrega</th>\n          <th>Qtd.</th>\n          <th>Valor</th>\n          <th></th>\n        </tr>\n      "),n.map((function(n,a){i.append(`\n        <tr data-index="${a}" data-productid="${n.productID}">\n          <td>\n            <div class="cart__table--name">\n              <a href="${n.link}" target="_top"><img src="${n.image}" /></a>\n              <h2><a href="${n.link}" target="_top">${n.name}</a></h2>\n            </div>\n          </td>\n          <td>\n            <p>${t.formatEstimate(n.estimate,n.slas)}</p>\n          </td>\n          <td>\n            <div class="cart__table--qtd">\n              <span class="btn-qtd minus">-</span>\n              <input type="text" name="qtd" value="${n.qtd}" />\n              <span class="btn-qtd plus">+</span>\n            </div>\n            ${e.returnMeasure(n)}\n          </td>\n          <td>\n            <p><strong>${t.formatReal(n.price)}</strong></p>\n          </td>\n          <td>\n            <button data-index="${a}" class="cart__table--remove"></button>\n          </td>\n        </tr>\n        <tr data-index="${a}" class="cart__table--entrega ${"0"===n.estimate&&0===n.slas.length?"indisponivel":""}">\n          <td colspan="5">\n            <h4>Opções de entrega</h4>\n            <div class="cart__table--entrega--options">\n              <ul>\n                ${e.returnLogistInfo(n)}\n              </ul>\n            </div>\n          </td>\n        </tr>\n        `)}))},returnMeasure:function(t){return"un"!==t.measure?`\n        <div class="cart__table--medida" data-unit="${t.unit}">\n          <p>${parseFloat((t.unit*t.qtd).toFixed(2))+" "+t.measure}</p>\n        </div>\n        `:""},returnLogistInfo:function(e){let i=[];if(0!==e.hasPickup&&0!==e.hasDelivery?i.push({id:"delivery"},{id:"pickup-in-point"}):0!==e.hasPickup&&0===e.hasDelivery?i.push({id:"pickup-in-point"}):i.push({id:"delivery"}),e.slas.length>0){const o=e.slas.filter((function(t){if("pickup-in-point"===t.deliveryChannel)return t})),r=e.slas.filter((function(t){if("delivery"===t.deliveryChannel)return t})),s=e.slas.filter((function(t){if(t.id===e.selectedSla)return t}));return n.changeDelivery(o,r,e.index),1===e.slas.length&&"pickup-in-point"===e.slas[0].deliveryChannel?`\n            <li data-info="pickup-in-point">\n              <label>\n                <input type="radio" name="select-sla-${e.index}" data-itemid="${e.productID}" data-itemindex="${e.index}" ${"pickup-in-point"===e.selectedDelivery?'checked="checked"':""} />\n                <span class="checkmark"></span>\n              </label>\n              <div class="description">\n                <p><strong>Retirar na loja</strong></p>\n                <p class="prazo"><strong>Prazo: </strong>${t.formatEstimate(e.estimate,e.slas)} após o pagamento</p>\n                ${a("pickup-in-point")}\n              </div>\n            </li>\n            `:i.map((function(n){let i,d;return i="delivery"===n.id?"Receber em casa":"Retirar na loja",d="delivery"===n.id?"pickup-in-point"!==s[0].deliveryChannel?s[0].shippingEstimate:r[0].shippingEstimate:s.length>0?"delivery"!==s[0].deliveryChannel?s[0].shippingEstimate:o[0].shippingEstimate:"0",`\n          <li data-info="${n.id}">\n            <label>\n              <input type="radio" name="select-sla-${e.index}" data-itemid="${e.productID}" data-itemindex="${e.index}" ${e.selectedDelivery===n.id?'checked="checked"':""} />\n              <span class="checkmark"></span>\n            </label>\n            <div class="description">\n              <p><strong>${i}</strong></p>\n              <p class="prazo"><strong>Prazo: </strong>${t.formatEstimate(d,e.slas)} após o pagamento</p>\n              ${a(n.id)}\n            </div>\n          </li>\n          `})).join("");function a(i){if(n.openModal(e.slas,e,e.index),"pickup-in-point"===i){if(o.length>1){let n,i,a,r,d,c;return s.length>0&&"pickup-in-point"===s[0].deliveryChannel?(n=s[0].pickupStoreInfo.address.addressId,i=s[0].pickupStoreInfo.address.street,a=s[0].pickupStoreInfo.address.number,r=s[0].pickupStoreInfo.address.neighborhood,d=s[0].pickupStoreInfo.address.city,c=s[0].pickupStoreInfo.address.state):(n=o[0].pickupStoreInfo.address.addressId,i=o[0].pickupStoreInfo.address.street,a=o[0].pickupStoreInfo.address.number,r=o[0].pickupStoreInfo.address.neighborhood,d=o[0].pickupStoreInfo.address.city,c=o[0].pickupStoreInfo.address.state),`\n              <div class="local">\n                <p><strong>${t.formatStoreName(n)}</strong></p>\n                <p>${i} - nº ${a} - ${r}, ${d} - ${c}</p>\n              </div>\n              <div class="more">\n                <a id="pickup-in-point_${e.index}">Ver outras opções de retirada</a>\n              </div>\n              `}return`\n              <div class="local">\n                <p><strong>${t.formatStoreName(o[0].pickupStoreInfo.address.addressId)}</strong></p>\n                <p>${o[0].pickupStoreInfo.address.street} - nº ${o[0].pickupStoreInfo.address.number} - ${o[0].pickupStoreInfo.address.neighborhood}, ${o[0].pickupStoreInfo.address.city} - ${o[0].pickupStoreInfo.address.state}</p>\n              </div>\n              `}return r.length>1?`\n              <div class="more">\n                <a id="delivery_${e.index}">Ver outras opções de entrega</a>\n              </div>\n              `:""}}return'\n        <li data-info="indisponivel">\n          <i class="fa fa-exclamation-triangle"></i>\n          <span>Este produto não está disponível para esse endereço</span>\n        </li>\n        '}};$(document).ready((function(){e.init()}));const n={init:function(){n.cart(),n.productTimeout(),n.closeOrder()},productTimeout:function(){window.productUpdate={}},cart:function(){$(".cart__table table tr:not(.cart__table--entrega)").each((function(){n.removeItem($(this)),n.addQtd($(this)),n.removeQtd($(this)),n.changeQtd($(this))}))},removeItem:function(t){t.find(".cart__table--remove").on("click",(function(){$(".cart-loading").show();let n=t.attr("data-index");vtexjs.checkout.getOrderForm().then((function(t){let e=[{index:parseInt(n),quantity:0}];return vtexjs.checkout.removeItems(e)})).done((function(t){e.bringInfo(),i.buildSummary(t.totalizers,t.value),$(".cart-loading").hide()}))}))},addQtd:function(t){t.find(".cart__table--qtd .btn-qtd.plus").on("click",(function(){let e=t.closest("tr").find(".cart__table--medida").attr("data-unit"),i=t.closest("tr").find(".cart__table--medida p"),a=t.closest("tr").attr("data-index"),o=t.find('input[name="qtd"]'),r=parseInt(o.val());r++,e&&i.text(parseFloat(Number(e)*r).toFixed(2)+" m²"),o.val(r),n.updateQtd(t,a,r,o)}))},removeQtd:function(t){t.find(".cart__table--qtd .btn-qtd.minus").on("click",(function(){let e=t.closest("tr").find(".cart__table--medida").attr("data-unit"),i=t.closest("tr").find(".cart__table--medida p"),a=t.closest("tr").attr("data-index"),o=t.find('input[name="qtd"]'),r=parseInt(o.val());r--,0!==r?(e&&i.text(parseFloat(Number(e)*r).toFixed(2)+" m²"),o.val(r),n.updateQtd(t,a,r,o)):t.find(".cart__table--remove").trigger("click")}))},changeQtd:function(t){const e=t.find('.cart__table--qtd input[name="qtd"]');e.on("change",(function(){$(".cart-loading").show();let i=t.closest("tr").find(".cart__table--medida").attr("data-unit"),a=t.closest("tr").find(".cart__table--medida p"),o=t.closest("tr").attr("data-index");var r=parseInt($(this).val());i&&a.text(parseFloat(Number(i)*r).toFixed(2)+" m²"),n.updateQtd(t,o,r,e)}))},updateQtd:function(e,n,a,o){clearTimeout(window.productUpdate[n]),window.productUpdate[n]=setTimeout((function(){let r=t.verifyLimit(e.closest("tr").attr("data-productid"));a>r&&(a=r),vtexjs.checkout.getOrderForm().then((function(t){let e=[{index:parseInt(n),quantity:a}];return vtexjs.checkout.updateItems(e,null,!1)})).done((function(t){o.val(a),i.buildSummary(t.totalizers,t.value),$(".cart-loading").hide()}))}),1e3)},changeDelivery:function(e,n,i){setTimeout((function(){$('input[name="select-sla-'+i+'"]').on("change",(function(){"pickup-in-point"===$(this).closest("li").attr("data-info")?($(".cart-loading").show(),t.changeToPickup(i,e[0].pickupPointId)):($(".cart-loading").show(),t.changeToDelivery(i,n[0].id))}))}),1e3)},openModal:function(e,i,a){const o=$("#modal-opcoes"),r=$(".mais-opcoes__header--close"),s=$(".mask-modal"),d=$(".mais-opcoes__header--title"),c=$(".mais-opcoes__product--title"),l=$(".mais-opcoes__product--ref"),p=$(".mais-opcoes__listagem ul");setTimeout((function(){r.on("click",(function(){o.removeClass("active"),s.hide()})),$("#pickup-in-point_"+a).on("click",(function(){d.text("Lojas disponíveis para retirada"),c.text(i.name),l.find("span").text(i.refid),o.addClass("active"),s.show(),n.changeDeliveryFromModal();const a=e.filter((function(t){if("pickup-in-point"===t.deliveryChannel)return t}));p.html(""),a.map((function(e){p.append(`\n            <li>\n              <div class="mais-opcoes__listagem--item">\n                <i class="fa fa-box-open"></i>\n                <div class="info">\n                  <h5>${t.formatStoreName(e.pickupStoreInfo.address.addressId)}</h5>\n                  <p>${e.pickupStoreInfo.address.street} - nº ${e.pickupStoreInfo.address.number} - ${e.pickupStoreInfo.address.neighborhood}, ${e.pickupStoreInfo.address.city} - ${e.pickupStoreInfo.address.state}</p>\n\n                  <div class="estimate">\n                    <p>\n                      <strong>Frete</strong>\n                      ${0===e.price?"Grátis":t.formatReal(e.price)}\n                    </p>\n\n                    <p>\n                      <strong>Prazo</strong>\n                      ${t.formatEstimate(e.shippingEstimate)} após o pagamento\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <button data-type="${e.deliveryChannel}" data-index="${i.index}" data-id="${e.pickupPointId}">Retirar na loja</button>\n            </li>\n            `)}))})),$("#delivery_"+a).on("click",(function(){d.text("Lojas disponíveis para entrega"),c.text(i.name),l.find("span").text(i.refid),o.addClass("active"),s.show(),n.changeDeliveryFromModal();const a=e.filter((function(t){if("delivery"===t.deliveryChannel)return t}));p.html(""),a.map((function(e){p.append(`\n            <li>\n              <div class="mais-opcoes__listagem--item">\n                <i class="fa fa-truck"></i>\n                <div class="info">\n                  <h5>${e.deliveryIds[0].courierName} - ${e.id}</h5>\n                  <div class="estimate">\n                    <p>\n                      <strong>Frete</strong>\n                      ${0===e.price?"Grátis":t.formatReal(e.price)}\n                    </p>\n\n                    <p>\n                      <strong>Prazo</strong>\n                      ${t.formatEstimate(e.shippingEstimate)} após o pagamento\n                    </p>\n                  </div>\n                </div>\n              </div>\n              <button data-type="${e.deliveryChannel}" data-index="${i.index}" data-id="${e.id}">Receber em casa</button>\n            </li>\n            `)}))}))}),1e3)},changeDeliveryFromModal:function(){setTimeout((function(){$(".mais-opcoes__listagem ul li").each((function(){$(this).find("button").on("click",(function(){const e=$(this).attr("data-type"),n=$(this).attr("data-index"),i=$(this).attr("data-id");"pickup-in-point"===e?($(".cart-loading").show(),t.changeToPickup(n,i)):($(".cart-loading").show(),t.changeToDelivery(n,i))}))}))}),1e3)},closeOrder:function(){$(".cart__final--close-order").on("click",(function(){window.parent.location.href="/checkout/#/email",parent.location.reload()}))}},i={init:function(){i.bringInfos(),i.sendCodeSeller(),i.sendCoupon(),i.changeCEP()},bringInfos:function(){vtexjs.checkout.getOrderForm().done((function(t){const e=t.shippingData.address.postalCode;i.bringCEP(e);const n=t.totalizers,a=t.value;i.buildSummary(n,a)}))},sendCodeSeller:function(){const t=localStorage.getItem("codeSeller"),e=$('.cart__summary--seller-code input[name="seller-code"]');vtexjs.checkout.getOrderForm().then((function(t){if(t.marketingData){if(""!==t.marketingData.utmiCampaign){let e=t.marketingData.utmiCampaign;return localStorage.setItem("codeSeller",e),vtexjs.checkout.sendAttachment("openTextField",{value:e})}return localStorage.removeItem("codeSeller",code),vtexjs.checkout.sendAttachment("openTextField",{value:""})}})),t&&"null"!==t?e.val(t):e.val("")},sendCoupon:function(){const t=localStorage.getItem("cupom"),e=$('.cart__summary--coupon input[name="discount-coupon"]'),n=$('.cart__summary--coupon input[name="discount-coupon-ok"]'),a=$('.cart__summary--coupon input[name="discount-coupon-remove"]');let o;t?(n.hide(),a.show(),e.val(t)):a.hide(),e.on("change",(function(){o=$(this).val()})),n.on("click",(function(){if($(".cart-loading").show(),void 0===o)return alert("Insira um cupom de desconto!"),void $(".cart-loading").hide();vtexjs.checkout.getOrderForm().then((function(){let t=o;return vtexjs.checkout.addDiscountCoupon(t)})).then((function(t){n.hide(),a.show(),e.val(o),localStorage.setItem("cupom",o),i.buildSummary(t.totalizers,t.value),$(".cart-loading").hide()}))})),a.on("click",(function(){$(".cart-loading").show(),vtexjs.checkout.getOrderForm().then((function(){return vtexjs.checkout.removeDiscountCoupon()})).then((function(t){n.show(),a.hide(),e.val(""),localStorage.removeItem("cupom"),i.buildSummary(t.totalizers,t.value),$(".cart-loading").hide()}))}))},bringCEP:function(t){const e=$(".cart__summary--frete-fixo .destaque"),n=$('.cart__summary--frete--box input[name="frete"]');e.text(t),n.val(t)},changeCEP:function(){const e=$(".cart__summary--frete-alterar"),n=$(".calcular-cep"),i=$(".info-cep"),a=$('.cart__summary--frete--box input[name="frete"]'),o=$('.cart__summary--frete--box input[name="frete-ok"]');e.on("click",(function(){i.hide(),a.val(""),n.show()})),o.on("click",(function(){if($(".cart-loading").show(),""!==a.val()){let e=a.val().replace(/\D/g,"");/^[0-9]{8}$/.test(e)?$.getJSON("https://viacep.com.br/ws/"+e+"/json/?callback=?",(function(n){if(!n.erro)return vtexjs.checkout.getOrderForm().then((n=>{let i=t.getMainLogistic(n);return vtexjs.checkout.sendAttachment("shippingData",{address:{country:"BRA",postalCode:e,addressType:"residential"},logisticsInfo:i}).done((t=>{location.reload()}))}));alert("Insira um CEP válido!"),$(".cart-loading").hide()})):(alert("Insira um CEP válido!"),$(".cart-loading").hide())}else alert("Preencha com um CEP válido!"),$(".cart-loading").hide()}))},buildSummary:function(e,n){const i=$(".cart__summary--subtotal table");i.html(""),e.map((function(e){let n;n="Items"===e.id?"Subtotal":"Discounts"===e.id?"Desconto":"Shipping"===e.id?"Frete":"",i.append(`\n        <tr data-info="${e.id}">\n          <td>${n}</td>\n          <td class="valor">${0!==e.value?t.formatReal(e.value):"Grátis"}</td>\n        </tr>\n        `)})),i.append(`\n      <tr data-info="total">\n        <td>Total</td>\n        <td class="valor">${t.formatReal(n)}</td>\n      </tr>\n      `)}};$(document).ready((function(){$('.cart__summary--frete--box input[name="frete"]').mask("99999-999"),i.init()}))}();