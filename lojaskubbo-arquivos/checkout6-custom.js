/* DESKTOP-NA07EK9 - 12/10/2020 13:39:08 GMT */
$(function(){$("body").on("click",".add-service.btn.btn-mini",function(event){event.preventDefault();setTimeout(function(){$("table .item-service .bundle-item-name").append('<p class="add-service-container"><a href="javascript:void(0);" class="remove-present active">Adicionar Embalagem para presente: R$ 1,00</a></p>');$(".table .item-service .bundle-item-name > span").html("Produto é um presente")},1500)});$("body").on("click",".add-service-container .remove-present",function(event){event.preventDefault();console.log("funciona");$(".table .item-service .item-remove .item-link-remove").trigger("click")});setTimeout(function(){if($(".table .item-service").length>0){$(".table .item-service .bundle-item-name").append('<p class="add-service-container"><a href="javascript:void(0);" class="remove-present active">Adicionar Embalagem para presente: R$ 1,00</a></p>');$(".table .item-service .bundle-item-name > span").html("Produto é um presente")}},4e3)});