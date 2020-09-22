/* PC-QUARTO - 22/09/2020 20:25:50 GMT */
"use strict";(function(){try{var Wishlist={init:function init(){Wishlist.onReady();Wishlist.setLoading(true);Wishlist.getUser(function(profile){Wishlist.data.profile=profile;if(profile.IsUserDefined){Wishlist.getProductsFromMasterData(function(products){Wishlist.setProducts(products);Wishlist.triggerIsReady();Wishlist.posLoginVerification();Wishlist.addWishlistedProducts()})}else{Wishlist.setLoading(false);Wishlist.triggerIsReady()}});Wishlist.addToWishlist()},addToWishlist:function addToWishlist(){$(document).on("click",".mz-storefront__wishlist",function(){var $t=$(this);var productId=$t.closest(".mz-storefront").find(".mz-storefront__productid").val();$t.toggleClass("mz-on");$t.addClass("mz-animate");setTimeout(function(){$t.removeClass("mz-animate")},1e3);if(!productId){return}$.ajax({url:"/api/catalog_system/pub/products/search?fq=productId:".concat(productId),type:"GET",headers:{Accept:"application/json","Content-Type":"application/json"},success:function success(data){if(!data.length){return}var productReference=data[0].productReference;Wishlist.toggleProducts(productReference,productId)}})})},posLoginVerification:function posLoginVerification(){if(~window.location.pathname.indexOf("/account")){var posLoginProductReference=sessionStorage.getItem("posLoginProductReference");sessionStorage.removeItem("productReferenceToFav");if(posLoginProductReference&&!Wishlist.isFavorited(posLoginProductReference)){Wishlist.toggleProducts(posLoginProductReference)}}},setProducts:function setProducts(products){Wishlist.data.products=products;Wishlist.triggerUpdateProducts()},getProducts:function getProducts(){return Wishlist.data.products},triggerUpdateProducts:function triggerUpdateProducts(){setTimeout(function(){$(window).trigger("mz.favorites-updated",[Wishlist.getProducts()])},200);Wishlist.setLoading(false)},triggerIsReady:function triggerIsReady(){$(window).trigger("mz.favorites-is-ready")},onReady:function onReady(){return new Promise(function(resolve,reject){if(Wishlist.data.isReady){resolve()}$(window).on("mz.favorites-is-ready",function(){Wishlist.data.isReady=true;resolve()});setTimeout(function(){reject()},2e4)})},setLoading:function setLoading(loadingStatus){Wishlist.data.isLoading=loadingStatus;var eventName=loadingStatus?"mz.favorites-load-start":"mz.favorites-load-end";$(window).trigger(eventName)},toggleProducts:function toggleProducts(productReference,productId){if(Wishlist.data.isLoading){return}Wishlist.setLoading(true);if(Wishlist.isLogged()){if(Wishlist.isFavorited(productReference)){Wishlist.removeProduct(productReference)}else{Wishlist.addProduct(productReference,productId)}}else{swal({title:"Você precisa logar para adicionar um curso aos favoritos.",icon:"https://portalpos2.vteximg.com.br/arquivos/portalpos2.alert-icon.png",className:"swal-wishlist",buttons:["Cancelar","Logar"]}).then(function(goToWishlist){if(goToWishlist){sessionStorage.setItem("posLoginProductReference",productReference);if(~window.location.href.lastIndexOf("busca.")||~window.location.href.lastIndexOf(".neemu.com")){window.location.href="https://www.portalpos.com.br/login?ReturnUrl=/_secure/account/favorites"}else{window.location.href="/login?ReturnUrl=/_secure/account/favorites"}}});Wishlist.setLoading(false)}},getProductsFromMasterData:function getProductsFromMasterData(fn){$.ajax({url:"/api/dataentities/FV/documents/".concat(Wishlist.data.profile.UserId,"?_fields=id,products&an=").concat(window.storeConfig.accountName),type:"GET",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json"},success:function success(data){if(data&&data.products){fn(JSON.parse(data.products))}else{fn([])}}})},getUser:function getUser(fn){$.ajax({url:"/no-cache/profileSystem/getProfile",type:"GET",success:fn})},isLogged:function isLogged(){var profile=Wishlist.data.profile;if(profile){return profile.IsUserDefined}return false},isFavorited:function isFavorited(productReference){return Wishlist.getProducts().filter(function(product){if(product.productReference==productReference){return product}}).length>0},removeProduct:function removeProduct(productReference){var newProducts=Wishlist.getProducts().filter(function(product){return product.productReference!=productReference});Wishlist.updateList(newProducts)},addProduct:function addProduct(productReference,productId){var newProducts=Wishlist.getProducts();newProducts.push({sc:jssalesChannel,productReference:productReference,productId:productId||""});Wishlist.updateList(newProducts)},updateList:function updateList(newProducts){$.ajax({url:"/api/dataentities/FV/documents?an=".concat(window.storeConfig.accountName),type:"PATCH",data:JSON.stringify({id:Wishlist.data.profile.UserId,products:JSON.stringify(newProducts)}),headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json"},success:function success(data){Wishlist.setProducts(newProducts)},error:function error(_error){swal({type:"error",text:"Ocorreu um erro ao atualizar a lista"})}})},addWishlistedProducts:function addWishlistedProducts(){var products=Wishlist.getProducts();if(!products){return}for(var i=0;i<products.length;i++){var productId=products[i].productId;if(!productId){continue}var wrapper=$(".mz-storefront__wishlist[data-id=".concat(productId,"]"));if(wrapper&&wrapper.length){wrapper.addClass("mz-on")}}},data:{profile:null,products:[],isLoading:true,isReady:false}};$(document).ready(Wishlist.init);$(window).on("mz.favorites-updated",function(evt,products){console.warn(products)});$(window).on("QuatroDigital.sr_shelfCallback",Wishlist.addWishlistedProducts);$(window).on("QuatroDigital.is_Callback",Wishlist.addWishlistedProducts);$(window).on("mz.favorites-load-start",function(evt,products){console.warn("mz.favorites-load-start")});$(window).on("mz.favorites-load-end",function(evt,products){console.warn("mz.favorites-load-end")})}catch(e){console.log("Erro na instancia [Wishlist]: ",e)}})();