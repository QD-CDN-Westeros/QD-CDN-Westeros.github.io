/* PC-QUARTO - 04/09/2020 18:58:27 GMT */
"use strict";function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);if(enumerableOnly)symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable});keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};if(i%2){ownKeys(Object(source),true).forEach(function(key){_defineProperty(target,key,source[key])})}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(target,Object.getOwnPropertyDescriptors(source))}else{ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})}}return target}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true})}else{obj[key]=value}return obj}(function(){try{var Home={init:function init(){Home.applyDepositionsRender();Home.callPosts();Home.applySlickHome();Home.applyMasks();Home.showStudentAlert();Home.submitLeadForm()},ajaxStop:function ajaxStop(){},windowOnload:function windowOnload(){},applySlickHome:function applySlickHome(){$(".slider .slider__slides").slick({dots:true,arrows:false,autoplay:true,autoplaySpeed:7e3,customPaging:function customPaging(slider,i){return"0"+(i+1)}})},applyMasks:function applyMasks(){if(!$.fn.mask){return}var SPMaskBehavior=function SPMaskBehavior(val){return val.replace(/\D/g,"").length===11?"(00) 00000-0000":"(00) 0000-00009"};$('input[name="phone"]').mask(SPMaskBehavior,{onKeyPress:function onKeyPress(val,e,field,options){field.mask(SPMaskBehavior.apply({},arguments),options)}})},submitLeadForm:function submitLeadForm(){if(!$.fn.validate){return}$("#catalead-home-form").validate({rules:{email:{required:true,email:true}},messages:{email:{required:"Preencha o e-mail",email:"E-mail inválido"},name:"Preencha o nome",phone:"Preencha o telefone"},submitHandler:function submitHandler(form,event){event.preventDefault();var $form=$(form);var isValid=$form.valid();if(!isValid){return}var formData=$form.serializeObject();Home.verifyIfAlreadyExists(formData)},errorPlacement:function errorPlacement(error,element){element.closest(".form__controls").append(error)}})},verifyIfAlreadyExists:function verifyIfAlreadyExists(formData){$.ajax({type:"GET",method:"GET",url:"/api/dataentities/CH/search?email="+(formData.email||"")+"&_fields=nome",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"}}).done(function(response){if(response.length){swal("Usuario já cadastrado!");return false}var data={nome:formData.name,email:formData.email,telefone:formData.phone,exaluno:!!formData.isStudent,marca:$.cookie("marcaOrigem")};Home.chaordic.updateUserEmail(formData.name,formData.email);Home.sendMasterData(data,"LP","#catalead-home-form",true)})},sendMasterData:function sendMasterData(sendData,entity,form,persone){var accountName=window.jsnomeLoja!="portalpos2"||window.jsnomeLoja!="portalposqa"?"portalpos2":"portalposqa";$.ajax({url:"/api/dataentities/".concat(entity,"/documents?an=").concat(accountName),type:"PATCH",dataType:"json",headers:{Accept:"application/json","Content-Type":"application/json"},data:JSON.stringify(sendData),success:function success(data){console.log(data)},complete:function complete(jqXHR,textStatus){if(!sendData.isStudent&&persone){Home.sendLeadPersone(sendData)}if(textStatus=="success"){Home.formMessage("Dados enviados com sucesso.","success");$(form).find("input").val("")}else{Home.formMessage("Erro ao enviar dados.","error")}}})},formMessage:function formMessage(message,type){swal({icon:type,text:message,className:"swal-cataleads-"+type})},sendLeadPersone:function sendLeadPersone(prmData){var orderForm=JSON.parse(localStorage.getItem("orderForm"));var lead={f_campoUnico:"email",f_fila:2,f_atualizaRegistro:true,f_campanhaTelemarketing:20,f_cadastraOrigem:true,origem:"PortalPos",f_cadastraCategoria:true,categoria:"Cataleads",f_cadastraTipo:true,tipo:"Lead",nome:prmData.nome,email:prmData.email,celular:Home.normalizeTel(prmData.telefone),observacoes:"Página: "+window.location.href+"\nMarca Site: "+prmData.marca+" \nCatalead: Dúvida sobre o curso"};if(orderForm&&orderForm.marketingData){lead=_objectSpread(_objectSpread({},lead),{},{ext_utmsource:orderForm.marketingData.utmSource,ext_utmmedium:orderForm.marketingData.utmMedium,ext_utmcampaign:orderForm.marketingData.utmCampaign,ext_utmicampaign:orderForm.marketingData.utmiCampaign})}$.ajax({dataType:"json",processData:false,contentType:false,type:"POST",data:Home.getFormData(lead),url:"https://api.goodsales.com.br/contatos/cadastrar_lead",success:function success(prmData){console.log("sucesso")},error:function error(_error){console.log(_error)}})},normalizeTel:function normalizeTel(prmTel){if(prmTel){prmTel=prmTel.match(/\d/g).join("");prmTel=$.trim(prmTel);if(prmTel.indexOf("55")==0){prmTel=prmTel.substring(2)}}return prmTel},getFormData:function getFormData(prmObject){var formData=new FormData;prmObject.token="db40045d1d587c359f587697d2d60dbc";Object.keys(prmObject).map(function(item){formData.append(item,$.trim(prmObject[item]))});return formData},showStudentAlert:function showStudentAlert(){$('input[name="isStudent"]').change(function(){if($(this).is(":checked")){swal({title:"É nosso aluno e está com dúvidas?",icon:"https://portalpos2.vteximg.com.br/arquivos/portalpos2.alert-icon.png",content:$('<p>Consulte o <a href="/perguntas-frequentes">FAQ</a> ou procure sua unidade/polo de apoio para esclarecimentos.</p>')[0],className:"swal-cataleads-aluno",buttons:{close:{text:"",visible:true,className:"swal-close-modal",closeModal:true}}})}})},chaordic:{updateUserEmail:function updateUserEmail(name,email){try{chaordic.push(["updateUserEmail",{email:email,name:name}])}catch(e){console.log("Chaordic updateUserEmail error")}}},applySlickBlog:function applySlickBlog(){if(!$(".mz-iterations__blog--wrapper").length){return}var idCount=0;$(".mz-iterations__blog--wrapper > div").each(function(){var $t=$(this);$t.attr("post-id",idCount);idCount++});if($(window).width()<767){$(".mz-iterations__blog--wrapper > div").each(function(index){var $t=$(this);if(index==0){$('.mz-iterations__blog--wrapper > div[post-id="'+index+'"').appendTo(".mz-iterations__bmobile--1")}else if(index==1){$('.mz-iterations__blog--wrapper > div[post-id="'+index+'"').appendTo(".mz-iterations__bmobile--1")}else if(index==2){$('.mz-iterations__blog--wrapper > div[post-id="'+index+'"').appendTo(".mz-iterations__bmobile--1")}else if(index==3){$('.mz-iterations__blog--wrapper > div[post-id="'+index+'"').appendTo(".mz-iterations__bmobile--2")}else if(index==4){$('.mz-iterations__blog--wrapper > div[post-id="'+index+'"').appendTo(".mz-iterations__bmobile--2")}else if(index==5){$('.mz-iterations__blog--wrapper > div[post-id="'+index+'"').appendTo(".mz-iterations__bmobile--2")}});$(".mz-iterations__blog--mobile").slick({slidesToShow:1,slidesToScroll:1,dots:true,arrows:false,customPaging:function customPaging(slider,i){return"0"+(i+1)}})}},applyBlogRender:function applyBlogRender(){var wrapperToAppend=$(".mz-iterations__blog--wrapper");try{$.ajax({type:"GET",url:"/mz-blog",dataType:"html",success:function success(data){var $data=$(data);var blocks=$data.find(".mz-blog__block");wrapperToAppend.empty();wrapperToAppend.append(blocks);wrapperToAppend.addClass("mz-blog-on")},error:function error(){console.log("Erro na request de [BLOG]")}}).done(function(data){Home.applySlickBlog()})}catch(e){console.log("Erro no Try/Catch de buscar [BLOG]")}},applyDepositionsRender:function applyDepositionsRender(){var wrapperToAppend=$(".mz-iterations__depositions--wrapper");try{$.ajax({type:"GET",url:"/mz-depoimentos",dataType:"html",success:function success(data){var $data=$(data);var blocks=$data.find(".mz-depositions__block");wrapperToAppend.empty();wrapperToAppend.append(blocks);wrapperToAppend.addClass("mz-blog-on")},error:function error(){console.log("Erro na request de [DEPOIMENTOS]")}})}catch(e){console.log("Erro no Try/Catch de buscar [DEPOIMENTOS]")}},callPosts:function callPosts(){$(window).on("brandLoaded",function(){if(Cookies.get("marcaOrigem")!=="lfg"){console.log("Não estou em LFG");Home.bringPosts()}else{console.log("ESTOU EM LFG.");Home.bringPostsLFG()}})},bringPosts:function bringPosts(){$.ajax({type:"GET",method:"GET",url:"https://blog.portalpos.com.br/wp-json/wp/v2/posts/?per_page=8&filter[orderby]=date&order=desc"}).done(function(dataTexts){var dataInfos=dataTexts;$.ajax({type:"GET",method:"GET",url:"https://blog.portalpos.com.br/wp-json/wp/v2/categories"}).done(function(dataBlocks){$(".mz-blogbrand__wrapper").appendTo(".mz-iterations__blog--title");var dataComponents=dataBlocks;$.when(dataInfos.forEach(function(itemInfo){dataComponents.filter(function(itemComp){if(itemInfo.categories[0]==itemComp.id){Home.buildElementPost(itemInfo,itemComp)}})})).then(function(){setTimeout(function(){console.log("Completado! ",$(".mz-iterations__blog--wrapper").children().length)},1e3)})}).fail(function(){console.error("Erro ao buscar posts do Blog!");$(".mz-blogbrand").hide();$(".mz-iterations__blog").hide()})})},bringPostsLFG:function bringPostsLFG(){var wrapper=$(".mz-iterations__blog--wrapper");$.ajax({type:"GET",method:"GET",url:"https://www.lfg.com.br/api/rest/aesa/acontece/post?limit=8",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:'OAuth oauth_consumer_key="372876fcbb76d2ffa4297f7ff9cdc6a8",oauth_token="a11b121e84ce790ce867eb0d5ec3bfe1",oauth_signature_method="PLAINTEXT",oauth_timestamp="1564059147",oauth_nonce="ejeb5",oauth_version="1.0",oauth_signature="8fdcac0acbcff71dac01da7e97a1f5c9%2676c5831c3034235a89d9c49b6e6d071b"'}}).done(function(response){var listLFGblog=response;var block;var logoDefault="https://portalpos2.vteximg.com.br/arquivos/portalpos2.boas-vindas-company-9.png";listLFGblog.forEach(function(post){block='\n                            <div class="mz-blog__block mz-blog__block-integrated">\n                                <a href="'.concat(post.url,'" style="display: block;" target="_blank">\n                                    ').concat(!post.image||post.image=="https://www.lfg.com.br/media/"?'<div class="mz-blog__block--image lfg"><img src="'.concat(logoDefault,'" /></div>'):'<div class="mz-blog__block--image">\n                                            <img src="'.concat(post.image,'" />\n                                        </div>'),'\n                                    <div class="mz-blog__block--text">\n                                        <div class="mz-blog__block--text-title lfg">').concat(post.title,'</div>\n                                        <div class="mz-blog__block--text-date lfg">\n                                            <i class="fas fa-arrow-right"></i>\n                                        </div>\n                                    </div>\n                                </a>\n                            </div>\n                        ');wrapper.append(block);wrapper.addClass("mz-blog-on")})}).fail(function(){console.error("[LFG] Erro ao buscar posts do Blog!");$(".mz-blogbrand").hide();$(".mz-iterations__blog").hide()})},buildElementPost:function buildElementPost(itemInfo,itemComp){var wrapper=$(".mz-iterations__blog--wrapper");var urlPost=itemInfo.link;var namePost=itemInfo.title.rendered;var datePost=moment?moment(itemInfo.date).format("LL"):itemInfo.date;var flag=itemComp.name;var link=itemComp.link;var flagColor=itemComp.slug;var srcImage;$.ajax({async:true,type:"GET",method:"GET",url:"https://blog.portalpos.com.br/wp-json/wp/v2/media/".concat(itemInfo.featured_media)}).done(function(response){srcImage="https://blog.portalpos.com.br/".concat(response.media_details.sizes.thumbnail.source_url);var block='\n                        <div class="mz-blog__block mz-blog__block-integrated">\n                            <a href="'.concat(urlPost,'" style="display: block;" target="_blank" title="').concat(namePost,'">\n                                <div class="mz-blog__block--image">\n                                    <img src="').concat(srcImage,'" />\n                                </div>\n                                <div class="mz-blog__block--text">\n                                    <div class="mz-blog__block--text-flag ').concat(Home.getCategoryClass(flagColor),'">').concat(flag,'</div>\n                                    <div class="mz-blog__block--text-title">').concat(namePost,'</div>\n                                    <div class="mz-blog__block--text-date">\n                                        <span>').concat(datePost,'</span>\n                                        <i class="fas fa-arrow-right"></i>\n                                    </div>\n                                </div>\n                            </a>\n                        </div>\n                    ');wrapper.append(block);wrapper.addClass("mz-blog-on");$(".mz-iterations__blog").addClass("mz-new-layout")})},getCategoryClass:function getCategoryClass(category){switch(category){case"carreiras-e-mercado":return"orange";case"crescimento-pessoal":return"light-green";case"curiosidades":return"purple";case"tendencias-inovacao":return"green";case"voce-na-pos":return"blue";default:return""}}};Home.init()}catch(e){console.log("Erro na instancia [Home]: ",e)}})();