/* DESKTOP-TON - 29/05/2021 13:04:00 GMT */
var Checkout={paymentSystem:201,ajaxFindSku:[],run:function(){},init:function(){Checkout.setActionsWindowProposal();Checkout.redirectCart();setTimeout(function(){Checkout.loadingData();Checkout.loadingValues();Checkout.initAfterLoadOrderForm();Checkout.changeLinks()},1e3)},initAfterLoadOrderForm:function(){var _this=this;vtexjs.checkout.getOrderForm().done(function(orderForm){Checkout.verifyOrderFormProposal(orderForm);Checkout.initPaymentSystem(orderForm);Checkout.addCompanyData();Checkout.redirectCartAfterOrderForm();Checkout.__fillCorporate(orderForm);Checkout.__getUser(orderForm.clientProfileData.email).then(function(r){localStorage.setItem("razao_social",r[0].corporateName!==null?r[0].corporateName:"");localStorage.setItem("user_cnpj",r[0].corporateDocument!==null?r[0].corporateDocument:"")});Checkout.addFields();Checkout.makeSelect();Checkout.__shpInfo();Checkout.forceAddressLocalStorage(function(){Checkout.loadingData(true);Checkout.loadingValues(true)})})},verifyOrderFormProposal:function(orderForm){$.ajax({url:"/api/dataentities/OP/search?_fields=orderFormId,name&_where=orderFormId="+orderForm.orderFormId}).done(function(res){if(res.length){$(".wrapProposta").remove();$("header").prepend($('                <div style="width: 100%;height: 37px;display: flex;align-items: center;justify-content: center;color: #454545;background: #ffe699;">                    Você está navegando na proposta &nbsp;<b>'+res[0].name+'</b>. &nbsp;                    <a onclick="Checkout.clearCookie()" style="cursor:pointer;color: #08c; text-decoration: underline;">Clique aqui </a>                    &nbsp;para desconectar da proposta.                </div>'))}})},hashChange:function(){Checkout.redirectCart()},ajaxStop:function(){Checkout.changeLinks();Checkout.ajustShippingData();$(".Discounts").remove();$(".Items").remove()},windowOnload:function(){Checkout.initCookieJQ();Checkout.loadingData(true);Checkout.loadingValues(true)},initPaymentSystem:function(orderForm){Checkout.loadingData();$("#payment-group-custom201PaymentGroupPaymentGroup").trigger("click");if(Checkout.paymentSystem==orderForm.paymentData.payments[0].paymentSystem){Checkout.applyInterest()}else{setTimeout(function(){Checkout.initPaymentSystem(vtexjs.checkout.orderForm)},500)}},forceAddressLocalStorage:function(callback){var shippingData=JSON.parse(localStorage.shippingData);vtexjs.checkout.sendAttachment("shippingData",shippingData).done(function(o){console.log(o);callback()})},loadingData:function(close){if($(".loadingData").length>0||close){setTimeout(function(){$(".loadingData").removeClass("loadingData")},2e3)}else{$("#payment-data").addClass("loadingData");$("#client-profile-data").addClass("loadingData");$("#shipping-data").addClass("loadingData")}},initCookieJQ:function(){var script=document.createElement("script");script.src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js";document.getElementsByTagName("head")[0].appendChild(script);var script2=document.createElement("script");script2.src="https://cdn.quatrodigital.com/wdc-arquivos/JS.wdc.buc.functions.api.min.js";document.getElementsByTagName("head")[0].appendChild(script2)},__getUser:function(email){const opts={url:"/api/dataentities/CL/search?_fields=_all&email="+email+"&_v="+(new Date).getTime(),type:"GET",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"}};return new Promise(function(resolve){resolve($.ajax(opts))})},applyConditionFirstOrder:function(){$("body").addClass("firstOrder");$('.payment-group-item:not("#payment-group-custom201PaymentGroupPaymentGroup")').remove()},__fillCorporate:function(orderForm){var social=document.querySelector("#client-company-name");var ie=document.querySelector("#client-company-ie");var cnpj=document.querySelector("#client-company-document");var fantasia=document.querySelector("#client-company-nickname");var nome=document.querySelector("#client-first-name");var sobrenome=document.querySelector("#client-last-name");var cpf=document.querySelector("#client-document");try{var email=orderForm.clientProfileData.email;if(social===null||email===undefined){setTimeout(function(){Checkout.__fillCorporate(orderForm)},2e3);return}Checkout.__getUser(email).then(function(result){console.log(result,true,email);if(result[0].primeiroPedido=="S")Checkout.applyConditionFirstOrder();social.value=result[0].corporateName!==null?result[0].corporateName:"";ie.value=result[0].stateRegistration!==null?result[0].stateRegistration:"";cnpj.value=result[0].corporateDocument!==null?result[0].corporateDocument:"";fantasia.value=result[0].tradeName!==null?result[0].tradeName:"";nome.value=result[0].firstName!==null?result[0].firstName:"";sobrenome.value=result[0].lastName!==null?result[0].lastName:"";cpf.value=result[0].document!==null?result[0].document:"";localStorage.setItem("razao_social",social.value);localStorage.setItem("user_cnpj",cnpj.value);var evt=document.createEvent("HTMLEvents");evt.initEvent("change",false,true);setTimeout(function(){social.dispatchEvent(evt);ie.dispatchEvent(evt);cnpj.dispatchEvent(evt);fantasia.dispatchEvent(evt);nome.dispatchEvent(evt);sobrenome.dispatchEvent(evt);cpf.dispatchEvent(evt);document.querySelector("#go-to-shipping").click()},1e3)})}catch(e){setTimeout(function(){Checkout.__fillCorporate(orderForm)},2e3)}},__shpInfo:function(){var shp=localStorage.getItem("shp");document.documentElement.style.setProperty("--content-shp",'"Frete: '+shp+'" ')},redirectCart:function(){if(location.hash=="#/cart"||location.hash=="#/shipping"){location.hash="/payment"}},redirectCartAfterOrderForm:function(){if(vtexjs.checkout.orderForm.shippingData==null)redirect("/cart");if(vtexjs.checkout.orderForm.shippingData.address==null)redirect("/cart");if(vtexjs.checkout.orderForm.shippingData.address.number==""||vtexjs.checkout.orderForm.shippingData.address.number==null)redirect("/cart");if(vtexjs.checkout.orderForm.clientProfileData==null)redirect("/");function redirect(url){location.href=url}},changeLinks:function(){$("#orderform-minicart-to-cart").on("click",function(e){e.preventDefault();location.href="/cart"});$(".link-box-edit.btn.btn-small#edit-profile-data").remove();$(".link-box-edit.btn.btn-small#edit-shipping-data").remove();$(".link-logout-container").remove()},ajustShippingData:function(){if(typeof vtexjs=="undefined")setTimeout(function(){Checkout.ajustShippingData()},1e3);else if(typeof vtexjs.checkout.orderForm=="undefined")setTimeout(function(){Checkout.ajustShippingData()},1e3);else if(typeof vtexjs.checkout.orderForm.shippingData=="undefined")setTimeout(function(){Checkout.ajustShippingData()},1e3);else{if(JSON.stringify(vtexjs.checkout.orderForm.shippingData)!=localStorage.getItem("shippingData"))vtexjs.checkout.sendAttachment("shippingData",JSON.parse(localStorage.getItem("shippingData"))).done(function(){console.log(1)})}},makeSelect:function(){const templateBtn='<a href="#" class="payment-group-item faturado-btn" id="faturado-wrap">                                <span class="payment-group-item-text">Faturado</span>                            </a>';const templateSelectWrap='<fieldset class="box-payment-group-faturado box-payment-option" style="display: none">                                        <select name="faturado-select" id="faturado-select">                                            <option value="">Selecione a opção de faturamento</option>                                        </select>                                    </fieldset>';const paymentGroup=["payment-group-custom202PaymentGroupPaymentGroup","payment-group-custom203PaymentGroupPaymentGroup","payment-group-custom204PaymentGroupPaymentGroup","payment-group-custom205PaymentGroupPaymentGroup","payment-group-custom206PaymentGroupPaymentGroup","payment-group-custom207PaymentGroupPaymentGroup","payment-group-custom208PaymentGroupPaymentGroup","payment-group-custom209PaymentGroupPaymentGroup","payment-group-custom210PaymentGroupPaymentGroup"];let verifyBtn=setInterval(function(){if($(".payment-group-list-btn").is(":visible")){$(".payment-group-list-btn").prepend(templateBtn);$(".steps-view div:first-child").before(templateSelectWrap);$(".payment-group-list-btn a").each(function(i){let classInfo=$(this).attr("class");let idInfo=$(this).attr("id");if(classInfo.indexOf("faturado")>=0&&idInfo.indexOf("custom201")==-1){let idInfo,textInfo,makeOption,selected=false,paymentSystem=vtexjs.checkout.orderForm.paymentData.payments[0].paymentSystem;idInfo=$(this).attr("id");textInfo=$(this).find(".payment-group-item-text").text();if("payment-group-custom"+paymentSystem+"PaymentGroupPaymentGroup"==textInfo)selected=true;makeOption='<option value="'+idInfo+'">'+textInfo+"</option>";if(selected)$("#faturado-select").val(idInfo);$("#faturado-select").append(makeOption)}if($(".payment-group-list-btn a").length-1==i){setTimeout(function(){actionBtn();selectActions()},500)}});$('#faturado-select option[value="faturado-wrap"]').remove();paymentGroup.map(function(idPayment,i){$("#"+idPayment).hide()});clearInterval(verifyBtn)}},500);function actionBtn(){$(".payment-group-item").on("click",function(evt){let classClick=$(this).attr("class");let returnValidation=paymentGroup.some(validatePaymentGroup);if($(this).hasClass("faturado-btn")){evt.preventDefault();$(".steps-view fieldset").hide();$(".payment-group-item").removeClass("active");$(this).addClass("active");$("#faturado-select option:first-child").attr("selected",true);$(".steps-view .box-payment-group-faturado").show()}else{$(".steps-view .box-payment-group-faturado").hide();$(".faturado-btn").removeClass("active")}if(returnValidation){$(".steps-view .box-payment-group-faturado").show();$(".faturado-btn").addClass("active")}if(classClick.indexOf("faturado")<0){$(".steps-view .box-payment-group-faturado").hide();$(".faturado-btn").removeClass("active")}})}function validatePaymentGroup(idPayment){let itemSelected=$("#faturado-select option:selected").val();if($(".faturado-btn").hasClass("active")){return idPayment===itemSelected}else{return false}}function selectActions(){$("a#payment-group-custom201PaymentGroupPaymentGroup").on("click",function(){$("#faturado-select").hide();$(".payment-group-item.faturado-btn").removeClass("active");$("fieldset.custom201PaymentGroupPaymentGroup").show();Checkout.paymentSystem=201;setTimeout(function(){Checkout.loadingValues();setTimeout(function(){updateValues()},500)},100)});$("a.payment-group-item.faturado-btn").on("click",function(){$("#faturado-select").show()});$("#faturado-select").on("change",function(){if($("#faturado-select option:selected").val()=="")return;let idBtn;idBtn="#"+$("#faturado-select option:selected").val();Checkout.paymentSystem=$("#faturado-select option:selected").val().replace("payment-group-custom","").replace("PaymentGroupPaymentGroup","");$(idBtn).trigger("click");setTimeout(function(){Checkout.loadingValues();setTimeout(function(){updateValues()},500)},100)})}function updateValues(){if(Checkout.paymentSystem==vtexjs.checkout.orderForm.paymentData.payments[0].paymentSystem){Checkout.applyInterest()}else{setTimeout(function(){updateValues()},500)}}},addFields:function(){const templateAnexo='<div class="wrapAnexo">                <p class="titleAnexo">                    Anexo de documentos                </p>                <a href="/" class="link-to-anexo">                    Clique aqui para adicionar OC                </a>                <input id="order-document" type="file"/>            </div>';const templateProposta='<div class="wrapProposta">                <p class="titleProposta">                    Nome da proposta                </p>                <input type="text" name="prop-name" id="nameProposta">                <p class="titleProposta">                    Email para proposta                </p>                <input type="email" name="email" id="emailProposta">                <button class="sendemail">Salvar proposta</button>            </div>';$("#payment-data-submit").before(templateAnexo);$(".payment-confirmation-wrap").after(templateProposta);setTimeout(function(){$("a.link-to-anexo").on("click",function(e){e.preventDefault();$("#order-document:hidden").trigger("click")});$("#order-document:hidden").on("change",function(){var val=$("input#order-document").val().replace(/C:|fakepath|\\/g,"");$("a.link-to-anexo").html("..."+val);setTimeout(function(){sendAttachmentOrderForm(JSON.stringify({orderFormId:vtexjs.checkout.orderForm.orderFormId}))},1e3)});$(".wrapProposta .sendemail").on("click",function(){var txt;var name=$(".wrapProposta #nameProposta").val();var email=$(".wrapProposta #emailProposta").val();var _this=this;if(name.length&&email.length){$(_this).addClass("loadingProposta");vtexjs.checkout.getOrderForm().done(function(orderForm){var customApps=orderForm.customData.customApps;var indexClient=Checkout.__findIndexArray(customApps,"id","client");if(indexClient<0){var email=vtexjs.checkout.orderForm.clientProfileData.email}else{var email=customApps[indexClient].fields.email}var data={orderFormId:vtexjs.checkout.orderForm.orderFormId,email:$("#emailProposta").val(),name:$("#nameProposta").val(),userId:vtexjs.checkout.orderForm.userProfileId};$.ajax({url:"/api/dataentities/OP/documents",type:"POST",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"},data:JSON.stringify(data)}).done(function(res){Proposal.jsonProposal.NomeProjeto=$("#nameProposta").val();Proposal.createNewProposal(res.DocumentId,true)})})}else{if(!name.length&&email.length){$(".wrapProposta #nameProposta").addClass("is--error");$(".wrapProposta #emailProposta").removeClass("is--error")}else{$(".wrapProposta #nameProposta").addClass("is--error");$(".wrapProposta #emailProposta").addClass("is--error")}}})},500);function sendAttachmentOrderForm(jsonValues){$.ajax({url:"/api/dataentities/OA/search?_fields=_all&orderFormId="+vtexjs.checkout.orderForm.orderFormId+"&"+(new Date).getTime(),type:"GET",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"}}).done(function(res){if(res.length>0)$.ajax({url:"/api/dataentities/OA/documents/"+res[0].id,type:"DELETE",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"}})}).then(function(){$.ajax({headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json"},url:"/api/dataentities/OA/documents",type:"POST",data:jsonValues}).done(function(res){var id=res.DocumentId;var formData=new FormData;formData.append("attachment",$("input#order-document")[0].files[0]);$.ajax({url:"/api/dataentities/OA/documents/"+id+"/attachment/attachments",type:"POST",crossDomain:true,data:formData,processData:false,contentType:false,mimeType:"multipart/form-data",headers:{Accept:"application/vnd.vtex.ds.v10+json"}}).done(function(data){})})})}},__toggleModalProps:function(email,name){var modal=document.querySelector("#mz-footer-props");if(modal.classList.contains("is--active")){modal.classList.remove("is--active")}else{modal.classList.add("is--active");document.querySelectorAll(".mz-props-email").forEach(function(el){el.innerHTML=email});document.querySelectorAll(".mz-props-name").forEach(function(el){el.innerHTML=name})}},__sendProps:function(){var email=$(".wrapProposta #emailProposta").val();var name=$(".wrapProposta #nameProposta").val();var data={orderFormId:vtexjs.checkout.orderForm.orderFormId,email:email,name:name,userId:vtexjs.checkout.orderForm.userProfileId};const opts={url:"/api/dataentities/OP/documents",type:"POST",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"},data:JSON.stringify(data)};$.ajax(opts).done(function(orderForm){$.removeCookie("checkout.vtex.com",{domain:".tezgcd.myvtex.com",path:"/"});$.removeCookie("checkout.vtex.com",{domain:"tezgcd.vtexcommercestable.com.br",path:"/"});$.cookie("checkout.vtex.com","",{domain:"tezgcd.vtexcommercestable.com.br",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:".tezgcd.myvtex.com",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});location.href="/";document.querySelector(".mz-footer--props--success").classList.add("is--active");document.querySelector(".mz-footer--props--confirm").classList.add("is--active")})},clearCookie:function(){$.removeCookie("checkout.vtex.com",{domain:".tezgcd.myvtex.com",path:"/"});$.removeCookie("checkout.vtex.com",{domain:"tezgcd.vtexcommercestable.com.br",path:"/"});$.cookie("checkout.vtex.com","",{domain:"tezgcd.vtexcommercestable.com.br",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:".tezgcd.myvtex.com",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});location.href="/"},applyInterest:function(){$("#paymentError").remove();Checkout.priceChange(function(){vtexjs.checkout.getOrderForm().done(function(res){setTimeout(function(){if(Checkout.paymentSystem!="201")if($(".box-payment-option:not(.custom201PaymentGroupPaymentGroup) .installments p span").length)$(".box-payment-option:not(.custom201PaymentGroupPaymentGroup) .installments p span").html($(".box-payment-option:not(.custom201PaymentGroupPaymentGroup) .installments p span").html().replace("Pagamento à vista - ",""));Checkout.loadingValues(true)},100)})})},getCPag:function(){arrayCPag=[];arrayCPag[201]="001";arrayCPag[202]="002";arrayCPag[206]="046";arrayCPag[205]="059";arrayCPag[203]="060";arrayCPag[208]="074";arrayCPag[207]="288";arrayCPag[209]="298";arrayCPag[210]="299";arrayCPag[204]="020";var paymentSystem=vtexjs.checkout.orderForm.paymentData.payments[0].paymentSystem;return arrayCPag[paymentSystem]},priceChange:function(callback){$.ajax({url:"https://test.godigibee.io/pipeline/wdcnet/v1/pricechange/"+vtexjs.checkout.orderForm.orderFormId,type:"POST",headers:{"Content-Type":"application/json",apikey:"xHi4wpiMHgxRyU5z0zh8bU5Iv73Wmopq"},data:JSON.stringify({cTpCalc:1,CPag:Checkout.getCPag(),Nivel:7,CNPJ:vtexjs.checkout.orderForm.clientProfileData.corporateDocument})}).done(function(res){if(!res.data.length)$('<div style="color:tomato" id="paymentError">Método de pagamento não válido</div>').insertAfter("#faturado-select");callback(res);console.log(res,"preço atualizado")}).fail(function(res){$('<div style="color:tomato" id="paymentError">'+JSON.parse(res.responseText).error+"</div>").insertAfter("#faturado-select");setTimeout(function(){Checkout.loadingValues()},100)})},loadingValues:function(action){if($(".loadingPayment").length||action){$(".loadingPayment").removeClass("loadingPayment")}else{$('fieldset.box-payment-group2.box-payment-option[style="display: block;"] .installments').addClass("loadingPayment");$(".totalizers .table tfoot .monetary").addClass("loadingPayment");$(".cart-items").addClass("loadingPayment")}},__findIndexArray:function(array,position,find){function findArray(array){return array[position]==this}return array.indexOf(array.find(findArray,find))},addCompanyData:function(){if($(".client-profile-data .accordion-toggle > span").length==0){setTimeout(function(){Checkout.addCompanyData()},1e3);return}var customApps=vtexjs.checkout.orderForm.customData.customApps;var type=customApps[Checkout.__findIndexArray(customApps,"id","typeoperation")].fields.operation;var name=type=="faturamento direto"?customApps[Checkout.__findIndexArray(customApps,"id","client")].fields.nomefantasia:vtexjs.checkout.orderForm.clientProfileData.tradeName;var tel=type=="faturamento direto"?customApps[Checkout.__findIndexArray(customApps,"id","client")].fields.telcomercial:vtexjs.checkout.orderForm.clientProfileData.corporatePhone;$('<div style="margin-left: 8px;">Dados da Empresa</div>').insertAfter($(".client-profile-data .accordion-toggle > span"));$(' <div class="box-info">                <p>'+name+"</p>                <p>Telefone: "+tel+"</p>            </div>").insertAfter($(".client-profile-data .box-info"));$(".client-profile-data").show()},setActionsWindowProposal:function(){$(".mz-proposal form").on("submit",function(e){e.preventDefault()});$(".sendemail").on("click",function(){})},getCustomPriceSKU:function(skuId,qtd,ean,cd,callback,returnAllinfos){if(vtexjs.checkout.orderForm.clientProfileData==null){callback(0);return}try{if(!vtexjs.checkout.orderForm.clientProfileData.corporateDocument){setTimeout(function(){Common.getCustomPriceSKU(skuId,qtd,ean,cd,callback)},1e3);return}getCustomPrice()}catch(err){console.log(err.message)}function getCustomPrice(){if(Checkout.ajaxFindSku.indexOf("getCustomPriceSKU"+ean)>-1)return;var customApps=vtexjs.checkout.orderForm.customData.customApps;var customPrice=0;if(typeof vtexjs.checkout.orderForm=="undefined"){callback(customPrice);return}if(!vtexjs.checkout.orderForm.loggedIn){callback(customPrice);return}var cProc="";var indexSimulation=Checkout.__findIndexArray(customApps,"id","clientsimulation");var indexTypeOperation=Checkout.__findIndexArray(customApps,"id","typeoperation");if(indexSimulation!=-1){var dataSimulation=customApps[indexSimulation].fields;var params="cTpCalc=1&CPag=001&Nivel=7&cProc="+cProc+"&CD_Origem="+cd+"&cEstado="+dataSimulation.icms+"&cIsICM="+dataSimulation.contribuinte;var url="https://test.godigibee.io/pipeline/wdcnet/v1/price/product/"+ean+"?"+params}else{var params="cTpCalc=1&CPag=001&Nivel=7&cProc="+cProc+"&CD_Origem="+cd+"&CNPJ="+vtexjs.checkout.orderForm.clientProfileData.corporateDocument;var url="https://test.godigibee.io/pipeline/wdcnet/v1/price/product/"+ean+"?"+params}Checkout.ajaxFindSku["getCustomPriceSKU"+ean]=$.ajax({url:url+"&_v="+(new Date).getTime(),method:"GET",headers:{apikey:"xHi4wpiMHgxRyU5z0zh8bU5Iv73Wmopq"}}).done(function(res){if(returnAllinfos)callback(res);else callback(Number(res.preco.replace(",",".")))})}},clearCookie:function(){$.removeCookie("checkout.vtex.com",{domain:".tezgcd.myvtex.com",path:"/"});$.removeCookie("checkout.vtex.com",{domain:"tezgcd.vtexcommercestable.com.br",path:"/"});$.cookie("checkout.vtex.com","",{domain:"tezgcd.vtexcommercestable.com.br",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:".tezgcd.myvtex.com",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});location.href="/"}};$(function(){var body=$(document.body);if(location.pathname.includes("/checkout"))Checkout.init();$(window).load(Checkout.windowOnload());body.addClass("jsFullLoaded")});$(document).ajaxStop(Checkout.ajaxStop());Checkout.run();$(window).on("hashchange",function(e){Checkout.hashChange()});function checkoutSteps(){$(window).on("hashchange",function(e){if(window.location.hash=="#/cart"){$(".mz-header__checkout--steps li").removeClass("active");$("#sacola").addClass("active")}else if(window.location.hash=="#/email"||window.location.hash=="#/profile"){$(".mz-header__checkout--steps li").removeClass("active");$("#identificacao").addClass("active")}else if(window.location.hash=="#/payment"){$(".mz-header__checkout--steps li").removeClass("active");$("#pagamento").addClass("active")}else if(window.location.hash=="/orderPlaced"){$(".mz-header__checkout--steps li").removeClass("active");$("#confirmacao").addClass("active")}})}checkoutSteps();var Proposal={jsonProposal:{Transportadora:"",FormaPagamento:"",DataPTAX:"00/00/0000",CotacaoPTAX:"0,0",ModalidadeContrato:"",EntradaPorcentagem:"",Entrada:"R$ 0,00",QuantidadeParcelas:"",Carencia:"",ValorTotalParcelaMensal:"R$ 0,00",ValorTotalContrato:"R$ 0,00",TotalEquipamentosReferencia:"R$ 0,00",ValorTotalComissaoBruta:"R$ 0,00",ValorTotalComissaoLiquida:"R$ 0,00",NomeArquivoCliente:"Proposta "+(new Date).getTime()+" - ClienteFinal.pdf",NomeArquivoRevenda:"Proposta "+(new Date).getTime()+" - Revenda.pdf",Email:"",Endereco:"",Cliente:"",Telefone:"(00)0000-0000",InscricaoEstadual:"ISENTO",CNPJ:"00.000.000/0001-00",RevendaRazaoSocial:"",NumeroProposta:"519003-1",EnderecoEntrega:"",Vendedor:"",RevendaEmail:"",RevendaTelefone:"(00)0000-0000",RevendaInscricaoEstadual:"",Data:"00/00/0000 00:00",NomeProjeto:"Proposta "+(new Date).getTime(),RevendaCnpj:"00.000.000/0001-00",idCotacao:"0",LocalFaturamento:"LIVETECH DA BAHIA INDUSTRIA E COMERCIO S.A, 05.917.486/0009-06, RUA VEREADOR LAMARTINE JOSE DE OLIVEIRA, 1137, SALA 01, DO RODEIO, EXTREMA, , MG, 37640-000",Produtos:[],IncentivosFiscais:[],DescontosComissoes:[],Contato:"",RevendaContato:"",ValorTotalItens:"R$ 0,00",Frete:"R$ 0,00",ValorTotalProposta:"R$ 0,00",NomeVendedor:"",CargoVendedor:"",Contato2Vendedor:"",EmailVendedor:"",i4d_extensions:"",businessunitid:"",ContatoVendedor:"",Observacoes:""},init:function(){this.__initAfterLoadOrderForm()},__initAfterLoadOrderForm:function(){vtexjs.checkout.getOrderForm().done(function(orderForm){})},ajaxStop:function(){},windowOnload:function(){},getProductsData:function(orderForm,i,callback){if(!orderForm.items.length){callback();return}var item=orderForm.items[i];var cd=item.ean.split("-")[1];var qtd=item.quantity;var ean=item.ean.split("-")[0];var skuId=item.id;Checkout.getCustomPriceSKU(skuId,qtd,ean,cd,function(res){Proposal.jsonProposal.Produtos.push({ValorUnitarioRevenda:0,ValorUnitario:qd_number_format(item.manualPrice/100,2,",","."),ValorTotal:qd_number_format(item.manualPrice*item.quantity/100,2,",","."),Entrega:item.availability=="available"?"Em Estoque":"Sem Estoque",ST:"0,00",ISS:qd_number_format(res.iss*1,2,",","."),IPI:qd_number_format(res.ipi*1,2,",","."),NCM:"0",ICMS:qd_number_format(res.icms*1,2,",","."),PISCofins:qd_number_format((res.pis+res.cofins)*1,2,",","."),Numero:1,Fabricante:item.additionalInfo.brandName,EAN:ean,Descricao:item.skuName,Qtd:item.quantity,ValorUnitarioAlugado:"0,00",ValorTotalAlugado:"0,00"});if(orderForm.items.length==i+1){callback()}else{Proposal.getProductsData(orderForm,i+1,callback)}},true)},getClientContact:function(orderForm,index_client,callback){var email=orderForm.clientProfileData.email;var respondeJson={contatoRevenda:{contactName:"",contactEmail:"",contactPhone:""},contato:{contactName:"",contactEmail:"",contactPhone:""}};if(index_client>-1){API.getContactsInfo(email,function(res){if(res.length){respondeJson.contatoRevenda.contactName=res[0].contactName;respondeJson.contatoRevenda.contactEmail=res[0].contactEmail;respondeJson.contatoRevenda.contactPhone=res[0].contactPhone}var CFclientId=orderForm.customData.customApps[index_client].fields.id;API.getContactsInfoCF(CFclientId,function(res){if(res.length){respondeJson.contato.contactName=res[0].contactName;respondeJson.contato.contactEmail=res[0].contactEmail;respondeJson.contato.contactPhone=res[0].contactPhone}callback(respondeJson)})})}else{API.getContactsInfo(email,function(res){if(res.length){respondeJson.contatoRevenda.contactName=res[0].contactName;respondeJson.contatoRevenda.contactEmail=res[0].contactEmail;respondeJson.contatoRevenda.contactPhone=res[0].contactPhone;respondeJson.contato.contactName=res[0].contactName;respondeJson.contato.contactEmail=res[0].contactEmail;respondeJson.contato.contactPhone=res[0].contactPhone}callback(respondeJson)})}},getClientAddress:function(orderForm,index_client,callback){if(index_client>-1){var CFclientId=orderForm.customData.customApps[index_client].fields.id;API.getAddressCF(CFclientId,function(res){callback({city:res[0].city,complement:res[0].complement,country:"BRA",number:res[0].number,postalCode:res[0].postalCode,reference:res[0].reference,state:res[0].state,street:res[0].street})})}else{callback(orderForm.shippingData.address)}},getProposalData:function(callback){vtexjs.checkout.getOrderForm().done(function(orderForm){Proposal.getProductsData(orderForm,0,function(){var customApps=orderForm.customData.customApps;var index_typeOperation=Checkout.__findIndexArray(customApps,"id","typeoperation");var typeOperation=customApps[index_typeOperation].fields.operation;var index_commission=Checkout.__findIndexArray(customApps,"id","commission");var index_client=Checkout.__findIndexArray(customApps,"id","client");var index_shippingTotalizers=Checkout.__findIndexArray(orderForm.totalizers,"id","Shipping");Proposal.getClientAddress(orderForm,index_client,function(address){Proposal.jsonProposal.Endereco=address.street+" Nº "+address.number+",  "+address.city+" - "+address.state+", "+address.postalCode;Proposal.getClientContact(orderForm,index_client,function(contacts){Proposal.jsonProposal.Contato=contacts.contato.contactName;Proposal.jsonProposal.RevendaContato=contacts.contatoRevenda.contactName;if(orderForm.shippingData.logisticsInfo.length){var transportadoras=[];orderForm.shippingData.logisticsInfo.forEach(function(e){if(jQuery.inArray(e.selectedSla,transportadoras)==-1)transportadoras.push(e.selectedSla)});Proposal.jsonProposal.Transportadora=transportadoras.join(", ")}else{Proposal.jsonProposal.Transportadora="SEM TRANSPORTADORA"}if(orderForm.paymentData.payments.length){var paymentSystem=orderForm.paymentData.payments[0].paymentSystem*1;var paymentSystems=orderForm.paymentData.paymentSystems;var namePaymentSystem=paymentSystems[Checkout.__findIndexArray(paymentSystems,"id",paymentSystem)].name;Proposal.jsonProposal.FormaPagamento=namePaymentSystem}else{Proposal.jsonProposal.FormaPagamento="A VISTA"}if(index_commission>-1){var jsonCommission=JSON.parse(customApps[index_commission].fields.jsonCommission);var somaCommission=0;jsonCommission.forEach(function(e,i){somaCommission+=e.value});Proposal.jsonProposal.ValorTotalComissaoBruta="R$ "+qd_number_format(somaCommission/100,2,",",".");Proposal.jsonProposal.ValorTotalComissaoLiquida="R$ "+qd_number_format(somaCommission/100,2,",",".")}if(index_shippingTotalizers>-1)Proposal.jsonProposal.Frete="R$ "+qd_number_format(orderForm.totalizers[index_shippingTotalizers].value/100,2,",",".");if(orderForm.items.length){var somaTotalItems=0;vtexjs.checkout.orderForm.items.forEach(function(e,i){somaTotalItems+=e.manualPrice*e.quantity});Proposal.jsonProposal.ValorTotalItens="R$ "+qd_number_format(somaTotalItems/100,2,",",".")}if(orderForm.value)Proposal.jsonProposal.ValorTotalContrato="R$ "+qd_number_format((orderForm.value>0?orderForm.value:Proposal.jsonProposal.ValorTotalItens)/100,2,",",".");if(orderForm.value)Proposal.jsonProposal.ValorTotalProposta="R$ "+qd_number_format((orderForm.value>0?orderForm.value:Proposal.jsonProposal.ValorTotalItens)/100,2,",",".");var date=new Date,day=date.getDay()<10?"0"+date.getDay():date.getDay(),month=date.getMonth()+1<10?"0"+(date.getMonth()+1):date.getMonth()+1,year=date.getFullYear(),hour=date.getHours(),min=date.getMinutes();Proposal.jsonProposal.Data=day+"/"+month+"/"+year+" "+hour+":"+min;if(orderForm.shippingData){Proposal.jsonProposal.EnderecoEntrega=orderForm.shippingData.address.street+" Nº "+orderForm.shippingData.address.number+",  "+orderForm.shippingData.address.city+" - "+orderForm.shippingData.address.state+", "+orderForm.shippingData.address.postalCode}if(typeOperation=="faturamento direto"){Proposal.jsonProposal.Cliente=customApps[index_client].fields.nomefantasia;Proposal.jsonProposal.Email=customApps[index_client].fields.email;Proposal.jsonProposal.InscricaoEstadual=customApps[index_client].fields.inscricaoestadual;Proposal.jsonProposal.Telefone=customApps[index_client].fields.telcomercial;Proposal.jsonProposal.CNPJ=customApps[index_client].fields.cnpj}else{Proposal.jsonProposal.Cliente=orderForm.clientProfileData.corporateName;Proposal.jsonProposal.Email=orderForm.clientProfileData.email;Proposal.jsonProposal.InscricaoEstadual=orderForm.clientProfileData.stateInscription;Proposal.jsonProposal.Telefone=orderForm.clientProfileData.phone;Proposal.jsonProposal.CNPJ=orderForm.clientProfileData.corporateDocument}Proposal.jsonProposal.LocalFaturamento=Proposal.jsonProposal.Cliente+", "+Proposal.jsonProposal.CNPJ+", "+Proposal.jsonProposal.Endereco;Proposal.jsonProposal.RevendaEmail=orderForm.clientProfileData.email;Proposal.jsonProposal.RevendaInscricaoEstadual=orderForm.clientProfileData.stateInscription;Proposal.jsonProposal.RevendaCnpj=orderForm.clientProfileData.corporateDocument;Proposal.jsonProposal.RevendaRazaoSocial=orderForm.clientProfileData.tradeName;Proposal.jsonProposal.RevendaTelefone=orderForm.clientProfileData.phone;Proposal.jsonProposal.Vendedor=orderForm.clientProfileData.firstName+" "+orderForm.clientProfileData.lastName;Proposal.jsonProposal.NomeVendedor=orderForm.clientProfileData.firstName+" "+orderForm.clientProfileData.lastName;Proposal.jsonProposal.EmailVendedor=orderForm.clientProfileData.email;callback()})})})})},createNewProposal:function(id,download){Proposal.getProposalData(function(){Proposal.downloadNewProposal(id,download,function(){$.removeCookie("checkout.vtex.com",{domain:".tezgcd.myvtex.com",path:"/"});$.removeCookie("checkout.vtex.com",{domain:"tezgcd.vtexcommercestable.com.br",path:"/"});$.cookie("checkout.vtex.com","",{domain:"tezgcd.vtexcommercestable.com.br",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:".tezgcd.myvtex.com",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});location.href="/"})})},downloadNewProposal:function(id,download,callback){Proposal.jsonProposal.NomeProjeto=$("#nameProposta").val();var json=JSON.stringify(Proposal.jsonProposal);var request=new XMLHttpRequest;request.responseType="blob";request.open("POST","https://app.i4d.com.br/WDC.GeradorPdfHml/Home/VendaBF");request.setRequestHeader("Content-Type","application/json;charset=UTF-8");request.onload=function(){var blobFile=this.response;var formData=new FormData;formData.append("file",blobFile,"proposta.pdf");$.ajax({url:"/api/dataentities/OP/documents/",type:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/vnd.vtex.ds.v10+json"},data:JSON.stringify({id:id,link_file:"http://tezgcd.vtexcommercestable.com.br/api/dataentities/OP/documents/"+id+"/file/attachments/proposta.pdf"})}).done(function(){$.ajax({url:"/api/dataentities/OP/documents/"+id+"/file/attachments",type:"POST",crossDomain:true,data:formData,processData:false,contentType:false,mimeType:"multipart/form-data",headers:{Accept:"application/vnd.vtex.ds.v10+json"}}).done(function(data){if(download){var url=window.URL.createObjectURL(blobFile);var a=document.createElement("a");document.body.appendChild(a);a.href=url;a.download="Proposta WDC";a.click()}setTimeout(function(){callback()},2e3)})})};try{request.onreadystatechange=function(){if(request.status===200){console.log("Proposta criada")}};request.send(json)}catch(err){console.log("ERRO SEnd: "+err.message);debugger}}};function qd_number_format(number,decimals,dec_point,thousands_sep){number=(number+"").replace(/[^0-9+\-Ee.]/g,"");var n=!isFinite(+number)?0:+number,prec=!isFinite(+decimals)?0:Math.abs(decimals),sep=typeof thousands_sep==="undefined"?",":thousands_sep,dec=typeof dec_point==="undefined"?".":dec_point,s="",toFixedFix=function(n,prec){var k=Math.pow(10,prec);return""+Math.round(n*k)/k};s=(prec?toFixedFix(n,prec):""+Math.round(n)).split(".");if(s[0].length>3){s[0]=s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,sep)}if((s[1]||"").length<prec){s[1]=s[1]||"";s[1]+=new Array(prec-s[1].length+1).join("0")}return s.join(dec)}