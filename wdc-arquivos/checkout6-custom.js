/* Ton-Maeztra - 05/11/2021 16:31:12 GMT */
var Checkout={paymentSystem:201,ajaxFindSku:[],validandoProductsAll:false,run:function(){Checkout.verifyPage()},init:function(){Checkout.initCookieJQ();Checkout.setActionsWindowProposal();Checkout.redirectCart();setTimeout(function(){Checkout.loadingData();Checkout.loadingValues();Checkout.initAfterLoadOrderForm();Checkout.changeLinks()},1e3);Checkout.verifyPage()},initAfterLoadOrderForm:function(){var _this=this;vtexjs.checkout.getOrderForm().done(function(orderForm){Checkout.__sendProductsData(orderForm);Checkout.verifyOrderFormProposal(orderForm);Checkout.initPaymentSystem(orderForm);Checkout.addCompanyData();Checkout.redirectCartAfterOrderForm();Checkout.__fillCorporate(orderForm);_API.getClient(function(r){localStorage.setItem("razao_social",r.corporateName!==null?r.corporateName:"");localStorage.setItem("user_cnpj",r.corporateDocument!==null?r.corporateDocument:"")});Checkout.addFields();Checkout.makeSelect();Checkout.__shpInfo();Checkout.forceAddressLocalStorage(function(){Checkout.loadingData(true);Checkout.loadingValues(true)});setTimeout(function(){Checkout.verifyItemsProductsAll(orderForm)},2e3)})},verifyOrderFormProposal:function(orderForm){$.ajax({url:"/api/dataentities/OP/search?_fields=orderFormId,name&_where=orderFormId="+orderForm.orderFormId}).done(function(res){if(res.length){$(".wrapProposta").remove();$("header").prepend($('                <div class="header-to-header" style="width: 100%;height: 37px;display: flex;align-items: center;justify-content: center;color: #454545;background: #ffe699;">                    Você está navegando na proposta &nbsp;<b>'+res[0].name+'</b>. &nbsp;                    <a onclick="Checkout.clearCookie()" style="cursor:pointer;color: #08c; text-decoration: underline;">Clique aqui </a>                    &nbsp;para desconectar da proposta.                </div>'))}})},hashChange:function(){Checkout.redirectCart();Checkout.verifyPage()},ajaxStop:function(){Checkout.changeLinks();Checkout.ajustShippingData();Checkout.verifyPage();$(".Discounts").remove();$(".Items").remove()},windowOnload:function(){Checkout.loadingData(true);Checkout.loadingValues(true);Checkout.verifyPage()},verifyPage:function(){if($(".unavailable-items").length){$(".unavailable-actions button").on("click",function(e){location.href="/cart"})}if($(".cart-template").length){$(".cart-template").css({display:"none"});if($(".cart-template").hasClass("active")){$(".cart-template").removeClass("active");$(".cart-template").addClass("inactive");$(".orderform-template ").addClass("active")}}},verifyItemsProductsAll:function(orderForm){if(typeof vtexjs==undefined)return;if(orderForm){verify(orderForm)}else{vtexjs.checkout.getOrderForm().done(function(orderForm){verify(orderForm)})}function verify(orderForm){var customData=orderForm.customData;var items=orderForm.items;if(customData!=null&&items.length){var customApps=customData.customApps;var index_products_all=_API.__findIndexArray(customApps,"id","products");var index_commission=_API.__findIndexArray(customApps,"id","commission");if(index_products_all>-1){var productsAll=JSON.parse(customApps[index_products_all].fields.products_all);if(productsAll.length!=items.length){Checkout.__sendProductsData(orderForm)}else{productsAll.forEach(function(e,i){var index_product=_API.__findIndexArray(items,"id",e.skuId);if(index_product<0){Checkout.__sendProductsData(orderForm);return false}else{var product=items[index_product];var price=Number(e.price.preco.replace(/,/g,".")).toFixed(2).replace(/\./g,"");if(index_commission>=0){var commission=JSON.parse(customApps[index_commission].fields.jsonCommission);var indexProductCommission=_API.__findIndexArray(commission,"id",e.skuId);if(indexProductCommission>=0){price=price*1+commission[indexProductCommission].value*1;if(price!=product.manualPrice){Checkout.__sendProductsData(orderForm);return false}}else{if(price!=product.manualPrice){Checkout.__sendProductsData(orderForm);return false}}}else{if(price!=product.manualPrice){Checkout.__sendProductsData(orderForm);return false}}}})}}else{Checkout.__sendProductsData(orderForm)}}}},initPaymentSystem:function(orderForm){Checkout.loadingData();$("#payment-group-custom201PaymentGroupPaymentGroup").trigger("click");if(orderForm.paymentData.payments.length){if(Checkout.paymentSystem==orderForm.paymentData.payments[0].paymentSystem){Checkout.applyInterest()}else{setTimeout(function(){Checkout.initPaymentSystem(vtexjs.checkout.orderForm)},500)}}else{}},forceAddressLocalStorage:function(callback){var shippingData=JSON.parse(localStorage.shippingData);callback()},loadingData:function(close){if($(".loadingData").length>0||close){setTimeout(function(){$(".loadingData").removeClass("loadingData")},2e3)}else{$("#payment-data").addClass("loadingData");$("#client-profile-data").addClass("loadingData");$("#shipping-data").addClass("loadingData")}},initCookieJQ:function(){var script=document.createElement("script");script.src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js";document.getElementsByTagName("head")[0].appendChild(script);var script2=document.createElement("script");script2.src="https://cdn.quatrodigital.com/wdc-arquivos-developments/JS.wdc.buc.functions.api.min.js";document.getElementsByTagName("head")[0].appendChild(script2);var script3=document.createElement("script");script3.src="https://cdn.quatrodigital.com/wdc-arquivos-developments/JS.wdc.buc.functions.proposal.min.js";document.getElementsByTagName("head")[0].appendChild(script3)},__getUser:function(email){},applyConditionFirstOrder:function(){$("body").addClass("firstOrder");$('.payment-group-item:not("#payment-group-custom201PaymentGroupPaymentGroup")').remove()},__fillCorporate:function(orderForm){var social=document.querySelector("#client-company-name");var ie=document.querySelector("#client-company-ie");var cnpj=document.querySelector("#client-company-document");var fantasia=document.querySelector("#client-company-nickname");var nome=document.querySelector("#client-first-name");var sobrenome=document.querySelector("#client-last-name");var cpf=document.querySelector("#client-document");var email=orderForm.clientProfileData.email;try{if(social===null||email===undefined){setTimeout(function(){Checkout.__fillCorporate(orderForm)},2e3);return}_API.getClient(function(result){var customApps=vtexjs.checkout.orderForm.customData.customApps;indexClient=_API.__findIndexArray(customApps,"id","client");if(indexClient>-1){_API.getClientFatDireto(customApps[indexClient].fields.id,function(res){if(res.primeiroPedido=="S")Checkout.applyConditionFirstOrder()})}else{if(result.primeiroPedido=="S")Checkout.applyConditionFirstOrder()}social.value=result.corporateName!==null?result.corporateName:"";ie.value=result.stateRegistration!==null?result.stateRegistration:"";cnpj.value=result.corporateDocument!==null?result.corporateDocument:"";fantasia.value=result.tradeName!==null?result.tradeName:"";nome.value=result.firstName!==null?result.firstName:"";sobrenome.value=result.lastName!==null?result.lastName:"";cpf.value=result.document!==null?result.document:"";localStorage.setItem("razao_social",social.value);localStorage.setItem("user_cnpj",cnpj.value);var evt=document.createEvent("HTMLEvents");evt.initEvent("change",false,true);setTimeout(function(){social.dispatchEvent(evt);ie.dispatchEvent(evt);cnpj.dispatchEvent(evt);fantasia.dispatchEvent(evt);nome.dispatchEvent(evt);sobrenome.dispatchEvent(evt);cpf.dispatchEvent(evt);document.querySelector("#go-to-shipping").click()},1e3)})}catch(e){setTimeout(function(){Checkout.__fillCorporate(orderForm)},2e3)}},__shpInfo:function(){var shp=localStorage.getItem("shp");document.documentElement.style.setProperty("--content-shp",'"Frete: '+shp+'" ')},redirectCart:function(){if(location.hash=="#/cart"||location.hash=="#/shipping"){location.hash="/payment"}},redirectCartAfterOrderForm:function(){if(vtexjs.checkout.orderForm.shippingData==null)redirect("/cart");if(vtexjs.checkout.orderForm.shippingData.address==null)redirect("/cart");if(vtexjs.checkout.orderForm.shippingData.address.number==""||vtexjs.checkout.orderForm.shippingData.address.number==null)redirect("/cart");if(vtexjs.checkout.orderForm.clientProfileData==null)redirect("/");function redirect(url){location.href=url}},changeLinks:function(){$("#orderform-minicart-to-cart").on("click",function(e){e.preventDefault();location.href="/cart"});$(".link-box-edit.btn.btn-small#edit-profile-data").remove();$(".link-box-edit.btn.btn-small#edit-shipping-data").remove();$(".link-logout-container").remove()},ajustShippingData:function(){if(typeof vtexjs=="undefined")setTimeout(function(){Checkout.ajustShippingData()},1e3);else if(typeof vtexjs.checkout.orderForm=="undefined")setTimeout(function(){Checkout.ajustShippingData()},1e3);else if(typeof vtexjs.checkout.orderForm.shippingData=="undefined")setTimeout(function(){Checkout.ajustShippingData()},1e3);else{}},makeSelect:function(){if(!$(".payment-group-list-btn").is(":visible")){setTimeout(function(){Checkout.makeSelect();return},100)}const templateBtn='<a href="#" class="payment-group-item faturado-btn" id="faturado-wrap">                                <span class="payment-group-item-text">Faturado</span>                            </a>';const templateSelectWrap='<fieldset class="box-payment-group-faturado box-payment-option" style="display: none">                                        <select name="faturado-select" id="faturado-select">                                            <option value="">Selecione a opção de faturamento</option>                                        </select>                                    </fieldset>';const paymentGroup=["payment-group-custom202PaymentGroupPaymentGroup","payment-group-custom203PaymentGroupPaymentGroup","payment-group-custom204PaymentGroupPaymentGroup","payment-group-custom205PaymentGroupPaymentGroup","payment-group-custom206PaymentGroupPaymentGroup","payment-group-custom207PaymentGroupPaymentGroup","payment-group-custom208PaymentGroupPaymentGroup","payment-group-custom209PaymentGroupPaymentGroup","payment-group-custom210PaymentGroupPaymentGroup"];if($(".payment-group-list-btn").is(":visible")){$(".payment-group-list-btn").prepend(templateBtn);$(".steps-view").prepend(templateSelectWrap);$(".payment-group-list-btn a").each(function(i){let classInfo=$(this).attr("class");let idInfo=$(this).attr("id");if(classInfo.indexOf("faturado")>=0&&idInfo.indexOf("custom201")==-1){let idInfo,textInfo,makeOption,selected=false,paymentSystem=vtexjs.checkout.orderForm.paymentData.payments[0].paymentSystem;idInfo=$(this).attr("id");textInfo=$(this).find(".payment-group-item-text").text();if("payment-group-custom"+paymentSystem+"PaymentGroupPaymentGroup"==textInfo)selected=true;makeOption='<option value="'+idInfo+'">'+textInfo+"</option>";if(selected)$("#faturado-select").val(idInfo);$("#faturado-select").append(makeOption)}if($('.payment-group-list-btn a[id!="payment-group-creditCardPaymentGroup"]').length-1==i){setTimeout(function(){actionBtn();selectActions()},500)}});$('#faturado-select option[value="faturado-wrap"]').remove();paymentGroup.map(function(idPayment,i){$("#"+idPayment).hide()})}function actionBtn(){$(".payment-group-item").on("click",function(evt){let classClick=$(this).attr("class");let returnValidation=paymentGroup.some(validatePaymentGroup);if($(this).hasClass("faturado-btn")){evt.preventDefault();$(".steps-view fieldset").hide();$(".payment-group-item").removeClass("active");$(this).addClass("active");$("#faturado-select option:first-child").attr("selected",true);$(".steps-view .box-payment-group-faturado").show()}else{$(".steps-view .box-payment-group-faturado").hide();$(".faturado-btn").removeClass("active")}if(returnValidation){$(".steps-view .box-payment-group-faturado").show();$(".faturado-btn").addClass("active")}if(classClick.indexOf("faturado")<0){$(".steps-view .box-payment-group-faturado").hide();$(".faturado-btn").removeClass("active")}})}function validatePaymentGroup(idPayment){let itemSelected=$("#faturado-select option:selected").val();if($(".faturado-btn").hasClass("active")){return idPayment===itemSelected}else{return false}}function selectActions(){$("a#payment-group-custom201PaymentGroupPaymentGroup").on("click",function(){$("#faturado-select").hide();$("#iframe-placeholder-creditCardPaymentGroup").hide();$(".payment-group-item.faturado-btn").removeClass("active");$("fieldset.custom201PaymentGroupPaymentGroup").show();Checkout.paymentSystem=201;setTimeout(function(){Checkout.loadingValues();setTimeout(function(){updateValues()},500)},100)});$("a#payment-group-creditCardPaymentGroup").on("click",function(){$("#faturado-select").hide();$("fieldset.custom201PaymentGroupPaymentGroup").hide();$("#iframe-placeholder-creditCardPaymentGroup").show();Checkout.paymentSystem=2;setTimeout(function(){Checkout.loadingValues();setTimeout(function(){updateValues()},500)},100)});$("a.payment-group-item.faturado-btn").on("click",function(){$("#faturado-select").show();$("#iframe-placeholder-creditCardPaymentGroup").hide()});$("a#payment-group-creditCardPaymentGroup").on("click",function(){});$("#faturado-select").on("change",function(){if($("#faturado-select option:selected").val()=="")return;let idBtn;idBtn="#"+$("#faturado-select option:selected").val();Checkout.paymentSystem=$("#faturado-select option:selected").val().replace("payment-group-custom","").replace("PaymentGroupPaymentGroup","");$(idBtn).trigger("click");setTimeout(function(){Checkout.loadingValues();setTimeout(function(){updateValues()},500)},100)})}function updateValues(){if(Checkout.paymentSystem==vtexjs.checkout.orderForm.paymentData.payments[0].paymentSystem){Checkout.applyInterest()}else{setTimeout(function(){updateValues()},500)}}},addFields:function(){var customApps=vtexjs.checkout.orderForm.customData.customApps;var indexClient=Checkout.__findIndexArray(customApps,"id","client");const templateAnexo='<div class="wrapAnexo">                <p class="titleAnexo">                    Anexo de documentos                </p>                <a href="/" class="link-to-anexo">                    Clique aqui para adicionar OC                </a>                <input id="order-document" type="file"/>            </div>';const templateProposta='<div class="wrapProposta">                <p class="titleProposta">                    Nome da proposta                </p>                <input type="text" name="prop-name" id="nameProposta">                <p class="titleProposta" style="display: '+(indexClient>-1?"none":"block")+'">                    Empresa da Proposta                </p>                <input type="text" name="empresa" style="display: '+(indexClient>-1?"none":"block")+'" id="empresaProposta">                <p class="titleProposta">                    Email para proposta                </p>                <input type="email" name="email" id="emailProposta">                <button class="sendemail">Salvar proposta</button>            </div>';$("#payment-data-submit").before(templateAnexo);$(".payment-confirmation-wrap").after(templateProposta);setTimeout(function(){$("a.link-to-anexo").on("click",function(e){e.preventDefault();$("#order-document:hidden").trigger("click")});$("#order-document:hidden").on("change",function(){var val=$("input#order-document").val().replace(/C:|fakepath|\\/g,"");$("a.link-to-anexo").html("..."+val);setTimeout(function(){sendAttachmentOrderForm(JSON.stringify({orderFormId:vtexjs.checkout.orderForm.orderFormId}))},1e3)});$(".wrapProposta .sendemail").on("click",function(){var txt;var name=$(".wrapProposta #nameProposta").val();var email=$(".wrapProposta #emailProposta").val();var _this=this;if(name.length&&email.length){$(_this).addClass("loadingProposta");vtexjs.checkout.getOrderForm().done(function(orderForm){var data={orderFormId:vtexjs.checkout.orderForm.orderFormId,email:$("#emailProposta").val(),name:$("#nameProposta").val(),empresa:indexClient>-1?customApps[indexClient].fields.corporateName:$("#empresaProposta").val(),userId:vtexjs.checkout.orderForm.userProfileId,corporateDocument:vtexjs.checkout.orderForm.clientProfileData.corporateDocument,idProposal:(new Date).getTime()};$.ajax({url:"/api/dataentities/OP/documents",type:"POST",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"},data:JSON.stringify(data)}).done(function(res){Proposal.jsonProposal.NomeProjeto=$("#nameProposta").val();Proposal.createNewProposal(res.DocumentId,true)})})}else{if(!name.length&&email.length){$(".wrapProposta #nameProposta").addClass("is--error");$(".wrapProposta #emailProposta").removeClass("is--error")}else{$(".wrapProposta #nameProposta").addClass("is--error");$(".wrapProposta #emailProposta").addClass("is--error")}}})},500);function sendAttachmentOrderForm(jsonValues){$.ajax({url:"/api/dataentities/OA/search?_fields=id&orderFormId="+vtexjs.checkout.orderForm.orderFormId+"&"+(new Date).getTime(),type:"GET",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"}}).done(function(res){if(res.length>0)$.ajax({url:"/api/dataentities/OA/documents/"+res[0].id,type:"DELETE",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"}})}).then(function(){$.ajax({headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json"},url:"/api/dataentities/OA/documents",type:"POST",data:jsonValues}).done(function(res){var id=res.DocumentId;var formData=new FormData;formData.append("attachment",$("input#order-document")[0].files[0]);$.ajax({url:"/api/dataentities/OA/documents/"+id+"/attachment/attachments",type:"POST",crossDomain:true,data:formData,processData:false,contentType:false,mimeType:"multipart/form-data",headers:{Accept:"application/vnd.vtex.ds.v10+json"}}).done(function(data){})})})}},__toggleModalProps:function(email,name){var modal=document.querySelector("#mz-footer-props");if(modal.classList.contains("is--active")){modal.classList.remove("is--active")}else{modal.classList.add("is--active");document.querySelectorAll(".mz-props-email").forEach(function(el){el.innerHTML=email});document.querySelectorAll(".mz-props-name").forEach(function(el){el.innerHTML=name})}},__sendProps:function(){var email=$(".wrapProposta #emailProposta").val();var name=$(".wrapProposta #nameProposta").val();var data={orderFormId:vtexjs.checkout.orderForm.orderFormId,email:email,name:name,userId:vtexjs.checkout.orderForm.userProfileId};const opts={url:"/api/dataentities/OP/documents",type:"POST",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"},data:JSON.stringify(data)};$.ajax(opts).done(function(orderForm){_API.accountName;$.removeCookie("checkout.vtex.com",{domain:"."+_API.accountName+".myvtex.com",path:"/"});$.removeCookie("checkout.vtex.com",{domain:_API.accountName+".vtexcommercestable.com.br",path:"/"});$.removeCookie("checkout.vtex.com",{domain:".www.wdcnet.store",path:"/"});$.cookie("checkout.vtex.com","",{domain:_API.accountName+".vtexcommercestable.com.br",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:"."+_API.accountName+".myvtex.com",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:".www.wdcnet.store",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});location.href="/";document.querySelector(".mz-footer--props--success").classList.add("is--active");document.querySelector(".mz-footer--props--confirm").classList.add("is--active")})},clearCookie:function(){$.removeCookie("checkout.vtex.com",{domain:"."+_API.accountName+".myvtex.com",path:"/"});$.removeCookie("checkout.vtex.com",{domain:_API.accountName+".vtexcommercestable.com.br",path:"/"});$.removeCookie("checkout.vtex.com",{domain:".www.wdcnet.store",path:"/"});$.cookie("checkout.vtex.com","",{domain:_API.accountName+".vtexcommercestable.com.br",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:"."+_API.accountName+".myvtex.com",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:".www.wdcnet.store",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});setTimeout(function(){location.href="/"},100)},applyInterest:function(){$("#paymentError").remove();_API.priceChange(function(){vtexjs.checkout.getOrderForm().done(function(res){Checkout.verifyItemsProductsAll(res);setTimeout(function(){if(Checkout.paymentSystem!="201")if($(".box-payment-option:not(.custom201PaymentGroupPaymentGroup) .installments p span").length)$(".box-payment-option:not(.custom201PaymentGroupPaymentGroup) .installments p span").html($(".box-payment-option:not(.custom201PaymentGroupPaymentGroup) .installments p span").html().replace("Pagamento à vista - ",""));Checkout.loadingValues(true)},500)})})},__sendProductsData:function(orderForm){if(Checkout.validandoProductsAll)return;Checkout.validandoProductsAll=true;var productsJson=[];addProductInJson(orderForm.items,0);function addProductInJson(items,index){if(index>items.length-1){_API.setProductsInfo(vtexjs.checkout.orderForm.orderFormId,{products_all:JSON.stringify(productsJson)},function(res){Checkout.validandoProductsAll=false})}else{var ean=items[index].ean.split("-")[0];var cd=items[index].ean.split("-")[1];var skuId=items[index].id;_API.getPriceSKU(ean,cd,function(res){productsJson.push({price:res,skuId:skuId,ean:ean,warehouseId:cd});addProductInJson(items,index+1)},true,_API.getCPag())}}},loadingValues:function(action){if($(".loadingPayment").length||action){$(".loadingPayment").removeClass("loadingPayment");setTimeout(function(){$("#BLOCK_CLICK_PAGE").remove()},1e3)}else{$('fieldset.box-payment-group2.box-payment-option[style="display: block;"] .installments').addClass("loadingPayment");$(".totalizers .table tfoot .monetary").addClass("loadingPayment");$(".cart-items").addClass("loadingPayment");$('<div id="BLOCK_CLICK_PAGE" style=" position: fixed; top: 0; left: 0; width: 100%; height: 100vh;"></div>').insertAfter(".container-main")}},__findIndexArray:function(array,position,find){function findArray(array){return array[position]==this}return array.indexOf(array.find(findArray,find))},addCompanyData:function(){if($(".client-profile-data .accordion-toggle > span").length==0){setTimeout(function(){Checkout.addCompanyData()},1e3);return}var customApps=vtexjs.checkout.orderForm.customData.customApps;var type=customApps[Checkout.__findIndexArray(customApps,"id","typeoperation")].fields.operation;var name=type=="faturamento direto"?customApps[Checkout.__findIndexArray(customApps,"id","client")].fields.nomefantasia:vtexjs.checkout.orderForm.clientProfileData.tradeName;var tel=type=="faturamento direto"?customApps[Checkout.__findIndexArray(customApps,"id","client")].fields.telcomercial:vtexjs.checkout.orderForm.clientProfileData.corporatePhone;$('<div style="margin-left: 8px;">Dados da Empresa</div>').insertAfter($(".client-profile-data .accordion-toggle > span"));$(' <div class="box-info">                <p>'+name+"</p>                <p>Telefone: "+tel+"</p>            </div>").insertAfter($(".client-profile-data .box-info"));$(".client-profile-data").show()},setActionsWindowProposal:function(){$(".mz-proposal form").on("submit",function(e){e.preventDefault()});$(".sendemail").on("click",function(){})},clearCookie:function(){$.removeCookie("checkout.vtex.com",{domain:"."+_API.accountName+".myvtex.com",path:"/"});$.removeCookie("checkout.vtex.com",{domain:_API.accountName+".vtexcommercestable.com.br",path:"/"});$.cookie("checkout.vtex.com","",{domain:_API.accountName+".vtexcommercestable.com.br",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:"."+_API.accountName+".myvtex.com",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});location.href="/"}};$(function(){var body=$(document.body);if(location.pathname.includes("/checkout"))Checkout.init();$(window).load(Checkout.windowOnload());body.addClass("jsFullLoaded")});$(document).ajaxStop(Checkout.ajaxStop());Checkout.run();$(window).on("hashchange",function(e){Checkout.hashChange()});function qd_number_format(number,decimals,dec_point,thousands_sep){number=(number+"").replace(/[^0-9+\-Ee.]/g,"");var n=!isFinite(+number)?0:+number,prec=!isFinite(+decimals)?0:Math.abs(decimals),sep=typeof thousands_sep==="undefined"?",":thousands_sep,dec=typeof dec_point==="undefined"?".":dec_point,s="",toFixedFix=function(n,prec){var k=Math.pow(10,prec);return""+Math.round(n*k)/k};s=(prec?toFixedFix(n,prec):""+Math.round(n)).split(".");if(s[0].length>3){s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,sep)}if((s[1]||"").length<prec){s[1]=s[1]||"";s[1]+=new Array(prec-s[1].length+1).join("0")}return s.join(dec)}