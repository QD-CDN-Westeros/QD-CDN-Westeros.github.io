/* PORYGONZ - 14/10/2019 19:53:28 GMT */
function onWishListEmpty(){$("body").addClass("x-active"),$(".x-wishlist-list").empty(),$(".x-wrap-center-content__message").show()}function wishlist(){$("body").on("click",".js--shelf-add-to-wish",function(){var s=$(this).data("id");return!!s&&($(this).addClass("x-loading"),saveOnWishlist($(this),s),!1)}),$(".x-add-wishlist, .js--add-to-wish").on("click",function(){return!!skuJson&&($(this).addClass("x-loading"),saveOnWishlist($(this),skuJson.productId),!1)})}function saveOnWishlist(s,e){var i=s,t=e;$.ajax({type:"GET",url:"/no-cache/profileSystem/getProfile",success:function(s){var e=s.Email;if(0==s.IsUserDefined)vtexid.start({returnUrl:"",userEmail:"",locale:"pt-BR",forceReload:!1});else if(1==s.IsUserDefined&&null==s.FirstName)$("#x-userEmail").val(e),$("#x-cadastro-user").show();else{if(addProductWishlist.apply(i,[t,e]),null==$.cookie("wishlist")||"undefined"==$.cookie("wishlist"))$.cookie("wishlist",t,{path:"/",expires:1});else{var o=$.cookie("wishlist").split(/,/);if(-1!=o.indexOf(t))var a=$.cookie("wishlist")+","+t;else{a=o.remove(t);a="".concat(a)}$.cookie("wishlist",a,{path:"/",expires:1})}wishlistSelectedsCookie()}},error:function(s){console.log(s),console.log("Ops, ocorreu um erro.")}})}function addProductWishlist(s,e){$(this).each(function(){var i=$(this),t=!0,o={userId:e,productsList:""},a="",n="";$.ajax({headers:headers,type:"GET",url:"/api/dataentities/CL/search?_where=email="+e+"&_fields=id",success:function(e){$(e).length&&(a=e[0].id,$.ajax({headers:headers,type:"GET",url:"/api/dataentities/WL/search?_where=userId="+a+"&_fields=id,productsList",success:function(e){if(e[0]){var a=e[0].productsList;a&&-1!=a.indexOf(",")&&(a=a.split(/,/)),n=e[0].id}var r;a?-1==a.indexOf(s.toString())?o.productsList=a+","+s:(Array.isArray(a)?(a.remove(s.toString()),o.productsList="".concat(a)):o.productsList="",t=!1):o.productsList=s,r="/api/dataentities/WL/documents/"+n,console.log(o),$.ajax({headers:headers,data:JSON.stringify(o),type:"PATCH",url:r,success:function(s){console.log("Produto adicionado a wishlist!"),i.removeClass("x-loading"),t?i.addClass("x-active"):i.removeClass("x-active"),wishlistSelecteds()},error:function(s){console.log(s),console.log("Ops, ocorreu um erro.")}})}}))},error:function(s){console.log(s)}})})}function wishlistSelecteds(){$.ajax({type:"GET",url:"/no-cache/profileSystem/getProfile",success:function(s){var e=s.Email;1==s.IsUserDefined&&(null==s.FirstName&&isWishListPage?($("body").addClass("x-active"),$("#x-userEmail").val(e),$("#x-cadastro-user").show()):1==s.IsUserDefined&&null!=s.FirstName&&$.ajax({headers:headers,type:"GET",url:"/api/dataentities/CL/search?_where=email="+e+"&_fields=id",success:function(s){if($(s).length){var e=s[0].id;documentClientId=s[0].id,$.ajax({headers:headers,type:"GET",url:"/api/dataentities/WL/search?_where=userId="+e+"&_fields=id,productsList",success:function(s){if($(s).length&&s[0].productsList){var e=s[0].productsList.split(/,/g);if(e[0]){var i=e.length,t=e.filter(function(s){return $.trim(s)}).map(function(s){return"fq=productId:"+s}).join("&");if(isWishListPage){var o=$(window).width()>1e3?"37a38486-2baa-4df1-9b0e-02f96f08fa73":"3191b2bb-666e-47ff-abdc-ea018e36640a";$.ajax("/buscapagina?"+t+"&PS="+i+"&sl="+o+"&cc=100&sm=0&PageNumber=1",{async:!1}).done(function(s){$(".x-wishlist-list").html(s),$("body").addClass("x-active")}).fail(function(){onWishListEmpty()})}setTimeout(function(){for(var s=0;s<e.length;s++)setWishedProducts(e[s])},100)}else onWishListEmpty()}else onWishListEmpty()},error:function(s){console.log(s)}})}},error:function(s){console.log(s)}}))},error:function(s){console.log(s),console.log("Ops, ocorreu um erro.")}})}function wishlistSelectedsCookie(){if(null!=$.cookie("wishlist"))for(var s=$.cookie("wishlist").split(","),e=0;e<s.length;e++){setWishedProducts(s[e])}}function setWishedProducts(s){$(".js--shelf-add-to-wish").each(function(){$(this).data("id")==s&&$(this).addClass("x-active")}),$(".x-add-wishlist, .js--add-to-wish").each(function(){skuJson_0.productId==s&&$(this).addClass("x-active")})}function deleteItemWishlist(){$("body").on("click",".x-wishlist-delete",function(s){var e=$(this).closest("li"),i=e.data("document"),t=e.data("id").toString();return $.ajax({headers:headers,type:"GET",url:"/api/dataentities/WL/search?_where=id="+i+"&_fields=userId,productsList",success:function(s){var o=s[0].productsList.split(/,/g),a=o.indexOf(t);o.splice(a,1);var n={productsList:o=o.length&&o[0]?o.join(","):","},r="/api/dataentities/WL/documents/"+i;$.ajax({headers:headers,data:JSON.stringify(n),type:"PATCH",url:r,success:function(s){$(e).slideUp(300,function(){e.remove()}),$.cookie("wishlist","")},error:function(s){console.log(s),console.log("Ops, ocorreu um erro.")}})},error:function(s){console.log(s)}}),!1})}function formSaveUserActions(){$("div.x-cadastro-user").on("click",".x-close, .x-not",function(){$("#x-cadastro-user").hide()})}function saveUserWishlist(){$("div.x-cadastro-user div.x-form form").on("submit",function(){var s=$(this);$(this).find("input.x-next").val("adicionando...");var e={email:$("#x-userEmail").val(),firstName:$("#x-userName").val(),lastName:$("#x-userLastName").val(),document:$("#x-userDocument").val(),homePhone:"+55"+$("#x-ddd-cel").val()+$("#x-number-cel").val()};return $.ajax({headers:headers,data:JSON.stringify(e),type:"PATCH",url:"/api/dataentities/CL/documents/",success:function(s){$("#x-cadastro-user .x-form").html('<div class="x-sucesso">Cadastro feito com sucesso, escolha seus produtos.</div>'),setTimeout(function(){$("#x-cadastro-user").hide()},3e3)},error:function(e){s.find("input.x-next").val("Ops! tente novamente")}}),!1})}var headers={Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json"},isWishListPage=$("body").hasClass("wishlist"),documentClientId="",wishlistStoreName="thenorthface";closeLogin=function(){$("button.close").removeClass("ng-hide"),$("button.close").on("click",function(){window.location.href="/"})},$(document).ready(function(){wishlist(),wishlistSelecteds(),wishlistSelectedsCookie(),formSaveUserActions(),saveUserWishlist(),deleteItemWishlist(),setTimeout(function(){closeLogin()},3e3)});