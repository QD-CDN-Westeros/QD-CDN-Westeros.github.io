/* Anonymouswill - 15/06/2021 11:42:03 GMT */
$(document).ready(function(){$(function(){var items="";var alreadySetted=false;$(window).on("hashchange",function(){if(window.location.href.indexOf("/shipping")>-1){if(!alreadySetted){items=vtexjs.checkout.orderForm.items;if(items!=""){for(var i=0;i<items.length;i++){var detail=items[i].detailUrl;if(detail){fetch(`https://hcorie.vtexcommercestable.com.br/api/catalog_system/pub/products/search${detail}`,{method:"GET"}).then(response=>response.json()).then(response=>{var itemSemMaterialDitatico=response[0]["Sem envio de material didático"];if(itemSemMaterialDitatico){addDeliveryInfo(response[0].productName,detail,items.length)}}).catch(err=>console.error(err))}}}}}})});function addDeliveryInfo(produto,detail,itensTotais){var spanInfoMaterial=`<p class="courseware-info"><b>Atenção:</b> O produto ${produto} <b>não conterá material didático físico para envio</b>.</p>`;var urlProdApi=`http://hcorie.vtexcommercestable.com.br${detail}`;var itemsOnMiniCart=$(".mini-cart .cart-items li.hproduct.item");$("#shipping-data .accordion-heading").append(spanInfoMaterial);itemsOnMiniCart.each(function(){var url=$(this).find("a.url").attr("href");if(url.indexOf(urlProdApi)){$(this).find(".shipping-date").remove()}});if(itensTotais===itemsOnMiniCart.length){$(".vtex-omnishipping-1-x-deliveryGroup, .vtex-omnishipping-1-x-addressSummary").css("display","none")}alreadySetted=true}});