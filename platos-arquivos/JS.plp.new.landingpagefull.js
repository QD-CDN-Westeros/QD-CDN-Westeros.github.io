/* MEWTWO - 11/09/2020 16:57:07 GMT */
"use strict";(function(){try{var FullLP={init:function init(){FullLP.bringDataLP();FullLP.appendTitleShelf();FullLP.videoConfig();FullLP.removeBgOverlay()},bgOverlay:"mz-modal-on",appendTitleShelf:function appendTitleShelf(){var wrapper=$(".mz-shelf__wrapper");var target=wrapper.find(".n1colunas > h2");target.prependTo(wrapper.parent())},changeWidthImages:function changeWidthImages(){setTimeout(function(){var regex=/-[0-9]{3}-[0-9]{3}/g;$("li[layout] .image-link img").each(function(){var $t=$(this);var newUrl=$t.attr("src").replace(regex,"-255-255");$t.attr("src",newUrl)})},3e3)},bringDataLP:function bringDataLP(){var bodyClass=$(document.body).attr("class").replace("mz-geolocation-on","");var regex=/mz-[\w|-]+/i;var thisLP=bodyClass.match(regex)[0];var brandCoockie=$.cookie("marcaOrigem");var nameBrand=".mz-marca-".concat(brandCoockie);var urlTarget;var entity;var libery={adminlpfullhtmlang:"anhanguera",adminlpfullhtmlund:"uniderp",fam:"fama",lfg:"lfg",pit:"pitagoras",unc:"unic",uni:"unime",uno:"unopar"};for(var l in libery){if(libery[l]==brandCoockie){entity=l}}if(nameBrand==".mz-marca-undefined"){urlTarget="/api/dataentities/adminlpfullhtml/search?_schema=mz-body&landingpage=".concat(thisLP,"&an=portalpos2")}else if(nameBrand!=".mz-marca-undefined"){urlTarget="/api/dataentities/".concat(entity,"/search?_schema=mz-body&landingpage=").concat(thisLP,"&an=portalpos2")}$(".mz-loder-content").show("fast");$.ajax({type:"GET",method:"GET",url:"/api/dataentities/adminlpfulllayout/search?_schema=mz-body&landingpage=".concat(thisLP,"&an=portalpos2"),dataType:"json",headers:{"Content-Type":"application/json"}}).done(function(responseLayout){if(!responseLayout.length){console.log("Nenhum layout foi definido para essa lp: ",thisLP);$(".mz-lf__form, .mz-lp__banner, .mz-lf__video, .mz-lf__tipbar, .mz-lf__banner, .mz-lf__podcast").hide();return}FullLP.buildLayout(responseLayout);$.ajax({type:"GET",method:"GET",url:urlTarget,dataType:"json",headers:{"Content-Type":"application/json"}}).done(function(responseData){if(!responseData.length){console.log("Nenhum dado retornado na LP: ",thisLP);return}FullLP.putContentByLP(responseData);$(".mz-loder-content").hide("fast")})})},buildLayout:function buildLayout(layout){var list=layout[0];for(var field in list){if(field=="blocoseodois"&&list[field]==""){$(".mz-lf__video").hide()}if(field=="blocotipbar"&&list[field]==""){$(".mz-lf__tipbar").hide()}if(field=="blocoebook"&&list[field]==""){$(".mz-lf__banner").hide()}if(field=="blocopodcast"&&list[field]==""){$(".mz-lf__podcast").hide()}}},putContentByLP:function putContentByLP(content){var tagTitle=$("head title");var tagMeta=$('<meta name="description">');if(content[0].tagtitle!=""&&content[0].tagtitle!=null){tagTitle.text(content[0].tagtitle)}if(content[0].tagmetadescription!=""&&content[0].tagmetadescription!=null){tagMeta.attr("content",content[0].tagmetadescription)}var bnDesktop=$(".mz-lp__banner--block.desktop img");var bnMobile=$(".mz-lp__banner--block.mobile img");if(content[0].urlbannerdesktop!=""&&content[0].urlbannerdesktop!=null){bnDesktop.attr("src",content[0].urlbannerdesktop)}if(content[0].urlbannermobile!=""&&content[0].urlbannermobile!=null){bnMobile.attr("src",content[0].urlbannermobile)}var formTitle=$(".mz-lp__form--text");var seoOne=$(".mz-lf__form--text");if(content[0].titleform!=""&&content[0].titleform!=null){formTitle.html(content[0].titleform)}if(content[0].blocoseoum!=""&&content[0].blocoseoum!=null){seoOne.html(content[0].blocoseoum)}var video=$(".mz-modallpfull__video video");var seoTwo=$(".mz-lf__video--text");video.attr("src",content[0].blocoseodoisvideo);seoTwo.html(content[0].blocoseodois);var tipbar=$(".mz-lf__tipbar--wrapper");tipbar.html(content[0].blocotipbar);tipbar.find("h2").insertBefore(tipbar);if(content[0].blocoebook){var ebook=$(".mz-lf__banner--ebook a");ebook.attr("href",content[0].blocoebook)}if(content[0].blocopodcast){var podcast=$(".mz-lf__podcast--audio");podcast.html(content[0].blocopodcast)}},videoConfig:function videoConfig(){$(".mz-lf__video--iframe a").on("click",function(){$(document.body).addClass("mz-modal-on")})},removeBgOverlay:function removeBgOverlay(){$(".mz-modal__close button, .mz-bgoverlay").click(function(){$(document.body).removeClass(FullLP.bgOverlay)})}};FullLP.init()}catch(e){console.log("Erro na instancia de [FullLP]: ",e)}})();