/* PC-QUARTO - 10/09/2020 18:45:19 GMT */
"use strict";(function(){try{var BringBrands={init:function init(){BringBrands.bringData()},bringData:function bringData(){if(!Cookies){return}var wrapper=$(".mz-promotionbrands");var urlGeneral="/mz-campanhamarcas";var brandCoockie=Cookies.get("marcaOrigem");var nameBrand=".mz-marca-".concat(brandCoockie);if(nameBrand.length){if(nameBrand==".mz-marca-undefined"){nameBrand=".mz-marca-portal"}try{$.ajax({type:"GET",method:"GET",url:urlGeneral,dataType:"html"}).done(function(data){var $data=$(data);if($data.find(".mz-marca-todos").length){var brandDefault=$data.find(".mz-marca-todos");wrapper.append(brandDefault);$(".mz-countdown").closest("section").hide();console.log("Promoção/Marca pra todos.");if($(document.body).is(".produto")){console.log("Promoção/Marca - Página de Produto");wrapper.css("display","none");setTimeout(function(){var bgcolor=$(".mz-promotionbrands > div").attr("style");var desc=$(".mz-promotionbrands .banner-text").children().clone();$(".mz-marca-produto .banner-text").append(desc);var code=$(".mz-promotionbrands .voucher-coupon").text();$(".mz-marca-produto .voucher-coupon").text(code);$(".mz-marca-produto").appendTo($(".mz-product__asidebox"));$(".mz-marca-produto").removeAttr("style");$(".mz-marca-produto").attr("style",bgcolor)},5e3)}else{wrapper.css("display","block")}}else if(!$data.find(".mz-marca-todos").length){var block=$data.find(nameBrand);if(block.length==0){console.log("Promoção/Marca desativada.");return}if(!$(document.body).is(".produto")){console.log("Promoção/Marca - Ativada: ".concat(brandCoockie));wrapper.append(block);wrapper.css("display","block");$(".mz-countdown").closest("section").hide();var bgcolor=$(".mz-promotionbrands > div").attr("style");var title=$(".mz-promotionbrands h3").text();var text=$(".mz-promotionbrands p").text();var code=$(".mz-promotionbrands .voucher-coupon").text();$(".mz-promotionbrands-mobile h3").text(title);$(".mz-promotionbrands-mobile p").text(text);$(".mz-promotionbrands-mobile .voucher-coupon").text(code);$(".mz-promotionbrands-mobile > div").removeAttr("style");$(".mz-promotionbrands-mobile > div").attr("style",bgcolor)}else if($(document.body).is(".produto")){console.log("Promoção/Marca PG Produto - Ativada: ".concat(brandCoockie));wrapper.append(block);wrapper.css("display","none");setTimeout(function(){var bgcolor=$(".mz-promotionbrands > div").attr("style");var desc=$(".mz-promotionbrands .banner-text").children().clone();$(".mz-marca-produto .banner-text").append(desc);var code=$(".mz-promotionbrands .voucher-coupon").text();$(".mz-marca-produto .voucher-coupon").text(code);$(".mz-marca-produto").appendTo($(".mz-product__asidebox"));$(".mz-marca-produto").removeAttr("style");$(".mz-marca-produto").attr("style",bgcolor)},5e3)}}else{console.log("Nenhuma campanha cadastrada.");return}})}catch(e){console.log("Erro na request de Campanha por Marcas: ",e)}}}};BringBrands.init()}catch(e){console.log(e)}})();