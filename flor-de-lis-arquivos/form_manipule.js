/* LAPTOP-T0P1H0OI - 01/06/2021 15:39:46 GMT */
"use strict";function sendAttachment(idDocument){var idUser=idDocument;var data=new FormData;$(".form-attachment").each(function(){data.append("images",$(this)[0].files[0])});$.ajax({headers:{Accept:"application/vnd.vtex.ds.v10+json"},url:"/api/dataentities/MR/documents/"+idUser+"/receita_anexo/attachments",type:"POST",data:data,cache:false,processData:false,contentType:false,success:function success(data,textStatus,request){console.log("Upload de Arquivos enviados com sucesso!!!\n")},error:function error(data,textStatus,request){console.log("Upload de Arquivos falhou!",data)}})}function getDataField(entity,field,fieldValue){var urlSaveDadosUser=window.location.origin+"/api/dataentities/"+entity+"/search?"+field+"="+fieldValue+"&_fields=_all";var result=false;$.ajax({headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json"},async:!1,url:urlSaveDadosUser,type:"GET",success:function success(data){if(data.length!=0){result=data[0]}},error:function error(data){console.log("Ocorreu um erro no retorno dos Dados do Campo: \n",data)}});return result}function clientSaveContact(){var urlSaveDadosUserContact=window.location.origin+"/api/dataentities/MR/documents/";var jsonSaveDadosUserContact={receita_nome:$("#receita_nome").val(),receita_email:$("#receita_email").val(),receita_telefone:$("#receita_telefone").val(),receita_genero:$("#receita_genero").val(),receita_idade:$("#receita_idade").val(),receita_nomeArquivo:$("#receita_nomeArquivo").val(),receita_mensagem:$("#receita_mensagem").val()};$.ajax({headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json"},url:urlSaveDadosUserContact,async:!1,data:JSON.stringify(jsonSaveDadosUserContact),type:"PATCH",success:function success(data,textStatus,xhr){console.log("Dados Pessoais enviados com sucesso!!!\n");if(xhr.status=="200"||xhr.status=="201"){sendAttachment(data.DocumentId);ResetMessages();$("#receita_message_success").show();$("#receita_nome").val("");$("#receita_email").val("");$("#receita_telefone").val("");$("#receita_genero").val("");$("#receita_idade").val("");$("#receita_mensagem").val("");$("#receita_anexo").val("");$("#receita_nomeArquivo").val("");$("#receita_type").val("");$("#receita_description").val("")}},error:function error(data,textStatus,xhr){console.log("Ocorreu um erro no envio dos Dados Pessoais: ",data,data.responseText)}})}function ResetMessages(){$("#receita_message_loading").hide();$("#receita_message_validate").hide();$("#receita_message_success").hide();$("#receita_message_error").hide()}function IsEmail(email){var regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return regex.test(email)}function FormCreateContato(storeName,dataEntity,htmlElementId,messageLoading,messageValidation,messageSuccess,messageError){var htmlContent="";htmlContent+='<div id="receita_message_validate" class="alert alert-warning" style="display:none;">'+messageValidation+"</div>";htmlContent+='<div id="receita_message_success" class="alert alert-success" style="display:none;">'+messageSuccess+"</div>";htmlContent+='<div id="receita_message_error" class="alert alert-danger" style="display:none;">'+messageError+"</div>";htmlContent+='<form id="receita_form" class="w-100" action="javascript:FormValidateContato();" method="post"><div class="row">';htmlContent+='<input type="hidden" id="master_data_store_name" name="master_data_store_name" value="'+storeName+'" />';htmlContent+='<input type="hidden" id="master_data_data_entity" name="master_data_data_entity" value="'+dataEntity+'" />';htmlContent+='<div class="col-12 mb-3"><input type="text" id="receita_nome" class="form-control" placeholder="Nome" required /></div>';htmlContent+='<div class="col-12 mb-3"><input type="email" id="receita_email" class="form-control" placeholder="E-mail" required /></div>';htmlContent+='<div class="col-12 col-lg-4 mb-3"><select id="receita_genero" class="form-control"><option selected disabled>Gênero</option><option value="Feminino">Feminino</option><option value="Masculino">Masculino</option></select></div>';htmlContent+='<div class="col-12 col-lg-4 mb-3"><select id="receita_idade" class="form-control"><option selected disabled>Idade</option><option value="18 à 24 anos">18 à 24 anos</option><option value="25 à 34 anos">25 à 34 anos</option><option value="35 à 59 anos">35 à 59 anos</option><option value="Mais de 60 anos">Mais de 60 anos</option></select></div>';htmlContent+='<div class="col-12 col-lg-4 mb-3"><input type="text" id="receita_telefone" class="form-control" placeholder="Telefone" required /></div>';htmlContent+='<div class="col-12 mb-3"><textarea id="receita_mensagem" rows="5" class="form-control" placeholder="Mensagem" required></textarea></div>';htmlContent+='<div class="col-12 mb-3 text-center text-lg-right"><label for="receita_anexo" class="anexarReceita anime">Anexe sua receita</label><input type="file" accept="Image/*" id="receita_anexo" class="d-none anexoHide form-attachment" /><input type="text" id="receita_nomeArquivo" /></div>';htmlContent+='<div class="col-12 mb-3 text-center text-lg-right"><button type="submit" id="comit" class="btn btn-primary bt-enviarReceita anime">ENVIAR</button></div>';htmlContent+="</div></form>";$("#"+htmlElementId).html(htmlContent)}function FormValidateContato(){var isFormValidateContato=true;if($("#receita_nome").val()==""){isFormValidateContato=false;$("#receita_nome").focus()}if(isFormValidateContato&&$("#receita_email").val()==""){isFormValidateContato=false;$("#receita_email").focus()}if(isFormValidateContato&&!IsEmail($("#receita_email").val())){isFormValidateContato=false;$("#receita_email").val("");$("#receita_email").focus()}if(isFormValidateContato&&$("#receita_telefone").val()==""){isFormValidateContato=false;$("#receita_telefone").focus()}if(isFormValidateContato&&$("#receita_genero").val()==""){isFormValidateContato=false;$("#receita_genero").focus()}if(isFormValidateContato&&$("#receita_idade").val()==""){isFormValidateContato=false;$("#receita_genero").focus()}if(isFormValidateContato&&$("#receita_mensagem").val()==""){isFormValidateContato=false;$("#receita_mensagem").focus()}if(isFormValidateContato&&$("#receita_type").val()==""){isFormValidateContato=false;$("#receita_type").focus()}if(isFormValidateContato){ResetMessages();$("#receita_message_loading").show();clientSaveContact()}else{ResetMessages();$("#receita_message_validate").show()}return false}$(document).on("change",".anexoHide",function(){$(".anexarReceita").html("Arquivo anexado com sucesso");$(".anexarReceita").addClass("active");$(".bt-enviarReceita").addClass("active");var nomeArquivo=$(".anexoHide").val().replace(/\..+$/,"");$("#receita_nomeArquivo").val(nomeArquivo)});