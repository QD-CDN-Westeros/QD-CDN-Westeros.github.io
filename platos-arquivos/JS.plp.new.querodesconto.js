/* PC-QUARTO - 05/10/2020 16:00:50 GMT */
"use strict";(function(){try{var QueroDesconto={init:function init(){QueroDesconto.getLandingPageData()},getLandingPageData:function getLandingPageData(){var brand=$.cookie("marcaOrigem");if(brand!="anhanguera"&&brand!="lfg"){brand="portalpos"}$.ajax({headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"},url:"https://www.portalpos.com.br/api/dataentities/admincontquerodesconto/search?marca=".concat(brand,"&_schema=mz-body"),type:"GET",dataType:"json",contentType:"application/json"}).done(function(data){if(!data){return}var $data=data[0];$(".mz-lpqd-textabove__h1").html($data.titulopagina);$(".mz-lpqd-textabove__h2").html($data.subtitulopagina);$(".mz-lpqd-textabove__text").html($data.textoacimaicones);$(".mz-lpqd-textbelow__text").html($data.textoabaixoicones);$(".mz-lpqd-textasterisks__text").html($data.textoastericos);$(".mz-lpqd-textasterisks__priceinfo").html($data.infopreco);$(".mz-lpqd-banner--desktop").html('<img src="'.concat($data.bannerdesktop,'" title="Banner desktop" alt="Banner desktop" />'));$(".mz-lpqd-banner--mobile").html('<img src="'.concat($data.bannermobile,'" title="Banner Mobile" alt="Banner Mobile">'));$(".mz-lpqd-textbelow__img").html('<img src="'.concat($data.imagemabaixoicones,'" title="Banner abaixo dos icones" alt="Banner abaixo dos icones"/>'));$(document.body).addClass("mz-lpqd-on")})}};$(document).ready(QueroDesconto.init)}catch(e){console.log("Erro na instancia [QueroDesconto]: ",e)}})();