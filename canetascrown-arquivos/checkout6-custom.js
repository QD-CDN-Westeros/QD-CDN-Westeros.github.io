/* Anonymouswill - 10/02/2021 14:36:55 GMT */
var intToReal=function(int){var tmp=int+"";tmp=tmp.replace(/([0-9]{2})$/g,",$1");if(tmp.length>6)tmp=tmp.replace(/([0-9]{3}),([0-9]{2}$)/g,".$1,$2");return tmp};var pairar;$(document).ajaxStop(function(){$(".item-attachments-item-fields").find("input").attr("readonly","readonly")});$(document).ready(function(){});$(window).load(function(){$("#item-attachment-0-personalizacao-texto").attr("pattern","[A-Za-z áàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ 0-9]+$");document.oncontextmenu=document.body.oncontextmenu=function(){return false};$(".item-attachment input").bind("cut copy paste",function(event){event.preventDefault()});$(window).on("orderFormUpdated.vtex",function(e,orderForm){var $_itemService=$(".item-service");$(".product-item").each(function(index,$el){var $_that=$(this);var $_quantity=$_that.find(".quantity");var _auxQuantity=parseInt($_quantity.find("input").val());var $_serviceRow=$_that.next();var _quantity=orderForm.items[index].quantity;$_quantity.find(".item-quantity-change, input").off();$_quantity.find(".item-quantity-change").on("click",function(){var $_thisElQuantity=$(this);var _quantity=_auxQuantity;if($_thisElQuantity.hasClass("item-quantity-change-decrement")&&_quantity>1){_quantity--}if($_thisElQuantity.hasClass("item-quantity-change-increment")){_quantity++}var item={quantity:_quantity,index:index};vtexjs.checkout.updateItems([item],null,false)});$_quantity.find("input").on("change",function(){var $_thisElQuantity=$(this);var _quantity=parseInt($_quantity.find("input").val());if(_quantity==0){_quantity=_auxQuantity}var item={quantity:_quantity,index:index};vtexjs.checkout.updateItems([item],null,false)});if($_serviceRow.hasClass("item-service")){var $_unPrice=$_serviceRow.find(".product-price");var $_totalPrice=$_serviceRow.find(".new-product-price");var _servicePice=null;if(orderForm.items[index].bundleItems.length){_unPrice=orderForm.items[index].bundleItems[0].price;$_unPrice.text($_totalPrice.text());$_totalPrice.text("R$"+intToReal(_unPrice*_quantity))}}})});vtexjs.checkout.getOrderForm()});window.onload=function(){setTimeout(function(){vtexjs.checkout.getOrderForm().done(function(orderForm){console.log(orderForm.items.length);var itemsQ=orderForm.items.length;if(itemsQ==0){$(".clearfix.pull-right.cart-links.cart-links-bottom.hide").remove()}})},500);$(window).on("orderFormUpdated.vtex",function(evt,orderForm){var itemsQ=orderForm.items.length;if(itemsQ==0){$(".clearfix.pull-right.cart-links.cart-links-bottom.hide").remove()}});$("#cart-shipping-calculate").click(function(){console.log("click");setTimeout(function(){if($(".monetary #shipping-calculate-link.shipping-calculate-link")!=="CalcularCalcular"){$(".btn-group.shipping-sla-selector").addClass("open")}},700)})};$(document).ready(function($){var getPrice=function getPrice(price){try{if(isNaN(price)){price=parseFloat(price.replace("R$","").replace(".","").replace(",","."));return parseFloat(price)}else{var strPrice=price.toFixed(2);strPrice=strPrice.replace(".",",");return strPrice}}catch(error){return 0}}});