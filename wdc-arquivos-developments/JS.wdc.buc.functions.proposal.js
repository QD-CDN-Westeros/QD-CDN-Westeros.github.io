/* Ton-Maeztra - 05/11/2021 10:58:41 GMT */
var Proposal={info:{},typeOperation:"",init:function(){this.__initAfterLoadOrderForm()},__initAfterLoadOrderForm:function(){vtexjs.checkout.getOrderForm().done(function(orderForm){})},ajaxStop:function(){},windowOnload:function(){},createNewProposal:function(id,download){_API.getProposal(id,function(res){Proposal.info=res;Proposal.getProposalData(function(){Proposal.downloadNewProposal(id,download,function(){if(Proposal.typeOperation=="faturamento direto"){Proposal.getProposalDataCF(function(){Proposal.downloadNewProposalCF(id,download,function(){Proposal.enviarEmail(id);$.removeCookie("checkout.vtex.com",{domain:"."+_API.accountName+".myvtex.com",path:"/"});$.removeCookie("checkout.vtex.com",{domain:_API.accountName+".vtexcommercestable.com.br",path:"/"});$.removeCookie("checkout.vtex.com",{domain:".www.wdcnet.store",path:"/"});$.cookie("checkout.vtex.com","",{domain:_API.accountName+".vtexcommercestable.com.br",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:"."+_API.accountName+".myvtex.com",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:".www.wdcnet.store",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});alert("Proposta gerada com sucesso");location.href="/"})})}else{Proposal.enviarEmail(id);$.removeCookie("checkout.vtex.com",{domain:"."+_API.accountName+".myvtex.com",path:"/"});$.removeCookie("checkout.vtex.com",{domain:_API.accountName+".vtexcommercestable.com.br",path:"/"});$.removeCookie("checkout.vtex.com",{domain:".www.wdcnet.store",path:"/"});$.cookie("checkout.vtex.com","",{domain:_API.accountName+".vtexcommercestable.com.br",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:"."+_API.accountName+".myvtex.com",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});$.cookie("checkout.vtex.com","",{domain:".www.wdcnet.store",expires:new Date("Thu, 01 Jan 1970 00:00:01 GMT")});alert("Proposta gerada com sucesso");location.href="/"}})})})},enviarEmail:function(id){$.ajax({url:"/api/dataentities/PP/documents/"+id,type:"PATCH",headers:{"Content-Type":"application/json"},data:JSON.stringify({enviar:true})}).done(function(response){console.log(response)})},getProposalData:function(getProposalData_callback){vtexjs.checkout.getOrderForm().done(function(orderForm){var customApps=orderForm.customData.customApps;Proposal.index_typeOperation=_API.__findIndexArray(customApps,"id","typeoperation");Proposal.typeOperation=customApps[Proposal.index_typeOperation].fields.operation;Proposal.index_commission=_API.__findIndexArray(customApps,"id","commission");Proposal.index_typeUser=_API.__findIndexArray(customApps,"id","type_user");Proposal.index_client=_API.__findIndexArray(customApps,"id","client");Proposal.index_shippingTotalizers=_API.__findIndexArray(orderForm.totalizers,"id","Shipping");if(customApps[Proposal.index_typeUser].fields.type=="master"){Proposal.CL_id=Common.clientID;Proposal.CL_email=orderForm.clientProfileData.email}else{Proposal.CL_id=customApps[Proposal.index_typeUser].fields.userIdMaster;Proposal.CL_email=customApps[Proposal.index_typeUser].fields.email}Proposal.apply_PDF_PAGE_2(orderForm,function(){Proposal.apply_PDF_PAGE_4(orderForm,function(){Proposal.getProductsData(orderForm,0,function(){if(orderForm.items.length){var somaTotalItems=0;vtexjs.checkout.orderForm.items.forEach(function(e,i){somaTotalItems+=e.manualPrice*e.quantity});Proposal.jsonProposal.ValorTotalItens="R$ "+qd_number_format(somaTotalItems/100,2,",",".")}if(Proposal.index_shippingTotalizers>-1)Proposal.jsonProposal.Frete="R$ "+qd_number_format(orderForm.totalizers[Proposal.index_shippingTotalizers].value/100,2,",",".");if(orderForm.value)Proposal.jsonProposal.ValorTotalProposta="R$ "+qd_number_format(orderForm.value/100,2,",",".");if(orderForm.shippingData.logisticsInfo.length){var transportadoras=[];orderForm.shippingData.logisticsInfo.forEach(function(e){if(jQuery.inArray(e.selectedSla,transportadoras)==-1)transportadoras.push(e.selectedSla)});Proposal.jsonProposal.Transportadora=transportadoras.join(", ")}else{Proposal.jsonProposal.Transportadora="SEM TRANSPORTADORA"}if(orderForm.paymentData.payments.length){var paymentSystem=orderForm.paymentData.payments[0].paymentSystem*1;var paymentSystems=orderForm.paymentData.paymentSystems;var namePaymentSystem=paymentSystems[_API.__findIndexArray(paymentSystems,"id",paymentSystem)].name;Proposal.jsonProposal.FormaPagamento=namePaymentSystem}else{Proposal.jsonProposal.FormaPagamento="A VISTA"}Proposal.jsonProposal.DataPTAX=Proposal.getDate();Proposal.jsonProposal.LocalFaturamento=Proposal.jsonProposal.Cliente+", "+Proposal.jsonProposal.CNPJ+", "+Proposal.jsonProposal.Endereco;getProposalData_callback()})})})})},downloadNewProposal:function(id,download,callback){var json=JSON.stringify(Proposal.jsonProposal);var request=new XMLHttpRequest;request.responseType="blob";request.open("POST","https://crmhomolog.wdcnet.com.br:19092/WDC.GeradorPdfHml/Home/FaturamentoDiretoEcommerceRevenda");request.setRequestHeader("Content-Type","application/json;charset=UTF-8");request.onload=function(){var blobFile=this.response;var formData=new FormData;formData.append("file",blobFile,"proposta.pdf");$.ajax({url:"/api/dataentities/PP/documents/"+id,type:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/vnd.vtex.ds.v10+json"},data:JSON.stringify({link_file:"http://"+_API.accountName+".vtexcommercestable.com.br/api/dataentities/PP/documents/"+id+"/file/attachments/proposta.pdf"})}).done(function(){$.ajax({url:"/api/dataentities/PP/documents/"+id+"/file/attachments",type:"POST",crossDomain:true,data:formData,processData:false,contentType:false,mimeType:"multipart/form-data",headers:{Accept:"application/vnd.vtex.ds.v10+json"}}).done(function(data){if(download){var url=window.URL.createObjectURL(blobFile);var a=document.createElement("a");document.body.appendChild(a);a.href=url;a.download="Proposta WDC - "+Proposal.info.name;a.click()}setTimeout(function(){callback()},3e3)})})};try{request.onreadystatechange=function(){if(request.status===200){console.log("Proposta criada")}};request.send(json)}catch(err){console.log("ERRO SEnd: "+err.message);debugger}},apply_PDF_PAGE_2:function(orderForm,apply_PDF_PAGE_2_callback){Proposal.jsonProposal.Cliente=orderForm.clientProfileData.corporateName;Proposal.jsonProposal.NumeroProposta=Proposal.info.name;Proposal.jsonProposal.Vendedor=orderForm.clientProfileData.firstName+" "+orderForm.clientProfileData.lastName;Proposal.jsonProposal.Data=Proposal.getDate();switch(Proposal.typeOperation){case"revenda":Proposal.jsonProposal.ModalidadeContrato="Revenda";break;case"consumo proprio":Proposal.jsonProposal.ModalidadeContrato="Consumo Próprio";break;case"faturamento direto":Proposal.jsonProposal.ModalidadeContrato="Cliente Faturamento Direto";break}_API.getContactsInfo(Proposal.CL_email,function(res){Proposal.jsonProposal.ClienteFinalContato=res.contactName;apply_PDF_PAGE_2_callback()})},apply_PDF_PAGE_4:function(orderForm,apply_PDF_PAGE_4_callback){Proposal.jsonProposal.Cliente=orderForm.clientProfileData.tradeName;Proposal.jsonProposal.CNPJ=orderForm.clientProfileData.corporateDocument.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5");Proposal.jsonProposal.InscricaoEstadual=orderForm.clientProfileData.stateInscription;_API.getContactsInfo(Proposal.CL_email,function(res){addResponseContact(res,function(){_API.getClientAddress(Proposal.CL_id,function(res){var i_address_escritorio=_API.__findIndexArray(res,"addressType","escritorio");var i_address_entrega=_API.__findIndexArray(res,"addressType","entrega");addResponseOfficeAddress(res[i_address_escritorio],function(){addResponseDeliveryAddress(res[i_address_entrega],function(){apply_PDF_PAGE_4_callback()})})})})});function addResponseContact(res,addResponseContact_callback){Proposal.jsonProposal.RevendaContato=res.contactName;Proposal.jsonProposal.Telefone=res.contactPhone;Proposal.jsonProposal.Email=res.contactEmail;addResponseContact_callback()}function addResponseOfficeAddress(res,addResponseOfficeAddress_callback){Proposal.jsonProposal.Endereco=res.street+" Nº "+res.number+",  "+res.city+" - "+res.state+", "+res.postalCode;addResponseOfficeAddress_callback()}function addResponseDeliveryAddress(res,addResponseDeliveryAddress_callback){Proposal.jsonProposal.EnderecoEntrega=res.street+" Nº "+res.number+",  "+res.city+" - "+res.state+", "+res.postalCode;addResponseDeliveryAddress_callback()}},getProposalDataCF:function(getProposalData_callback){vtexjs.checkout.getOrderForm().done(function(orderForm){var customApps=orderForm.customData.customApps;Proposal.index_typeOperation=_API.__findIndexArray(customApps,"id","typeoperation");Proposal.typeOperation=customApps[Proposal.index_typeOperation].fields.operation;Proposal.index_commission=_API.__findIndexArray(customApps,"id","commission");Proposal.index_typeUser=_API.__findIndexArray(customApps,"id","type_user");Proposal.index_client=_API.__findIndexArray(customApps,"id","client");Proposal.index_shippingTotalizers=_API.__findIndexArray(orderForm.totalizers,"id","Shipping");if(customApps[Proposal.index_typeUser].fields.type=="master"){Proposal.CL_id=Common.clientID;Proposal.CL_email=orderForm.clientProfileData.email}else{Proposal.CL_id=customApps[Proposal.index_typeUser].fields.userIdMaster;Proposal.CL_email=customApps[Proposal.index_typeUser].fields.email}Proposal.apply_PDF_PAGE_2_CF(orderForm,function(){Proposal.apply_PDF_PAGE_4_CF(orderForm,function(){if(orderForm.items.length){var somaTotalItems=0;vtexjs.checkout.orderForm.items.forEach(function(e,i){somaTotalItems+=e.manualPrice*e.quantity});Proposal.jsonProposal.ValorTotalItens="R$ "+qd_number_format(somaTotalItems/100,2,",",".")}if(Proposal.index_shippingTotalizers>-1)Proposal.jsonProposal.Frete="R$ "+qd_number_format(orderForm.totalizers[Proposal.index_shippingTotalizers].value/100,2,",",".");if(orderForm.value)Proposal.jsonProposal.ValorTotalProposta="R$ "+qd_number_format(orderForm.value/100,2,",",".");if(orderForm.shippingData.logisticsInfo.length){var transportadoras=[];orderForm.shippingData.logisticsInfo.forEach(function(e){if(jQuery.inArray(e.selectedSla,transportadoras)==-1)transportadoras.push(e.selectedSla)});Proposal.jsonProposal.Transportadora=transportadoras.join(", ")}else{Proposal.jsonProposal.Transportadora="SEM TRANSPORTADORA"}if(orderForm.paymentData.payments.length){var paymentSystem=orderForm.paymentData.payments[0].paymentSystem*1;var paymentSystems=orderForm.paymentData.paymentSystems;var namePaymentSystem=paymentSystems[_API.__findIndexArray(paymentSystems,"id",paymentSystem)].name;Proposal.jsonProposal.FormaPagamento=namePaymentSystem}else{Proposal.jsonProposal.FormaPagamento="A VISTA"}Proposal.jsonProposal.DataPTAX=Proposal.getDate();Proposal.jsonProposal.LocalFaturamento=Proposal.jsonProposal.Cliente+", "+Proposal.jsonProposal.CNPJ+", "+Proposal.jsonProposal.Endereco;getProposalData_callback()})})})},downloadNewProposalCF:function(id,download,callback){var json=JSON.stringify(Proposal.jsonProposal);var request=new XMLHttpRequest;request.responseType="blob";request.open("POST","https://crmhomolog.wdcnet.com.br:19092/WDC.GeradorPdfHml/Home/FaturamentoDiretoEcommerceClienteFinal");request.setRequestHeader("Content-Type","application/json;charset=UTF-8");request.onload=function(){var blobFile=this.response;var formData=new FormData;formData.append("file",blobFile,"propostaClienteFinal.pdf");$.ajax({url:"/api/dataentities/PP/documents/"+id,type:"PATCH",headers:{"Content-Type":"application/json",Accept:"application/vnd.vtex.ds.v10+json"},data:JSON.stringify({link_fileCF:"http://"+_API.accountName+".vtexcommercestable.com.br/api/dataentities/PP/documents/"+id+"/fileCF/attachments/propostaClienteFinal.pdf"})}).done(function(){$.ajax({url:"/api/dataentities/PP/documents/"+id+"/fileCF/attachments",type:"POST",crossDomain:true,data:formData,processData:false,contentType:false,mimeType:"multipart/form-data",headers:{Accept:"application/vnd.vtex.ds.v10+json"}}).done(function(data){if(download){var url=window.URL.createObjectURL(blobFile);var a=document.createElement("a");document.body.appendChild(a);a.href=url;a.download="Proposta Cliente Final WDC - "+Proposal.info.name;a.click()}setTimeout(function(){callback()},3e3)})})};try{request.onreadystatechange=function(){if(request.status===200){console.log("Proposta criada")}};request.send(json)}catch(err){console.log("ERRO SEnd: "+err.message);debugger}},apply_PDF_PAGE_2_CF:function(orderForm,apply_PDF_PAGE_2_CF_callback){Proposal.jsonProposal.Cliente=orderForm.customData.customApps[Proposal.index_client].fields.razaosocial;Proposal.jsonProposal.NumeroProposta=Proposal.info.name;Proposal.jsonProposal.Vendedor=orderForm.clientProfileData.firstName+" "+orderForm.clientProfileData.lastName;Proposal.jsonProposal.Data=Proposal.getDate();switch(Proposal.typeOperation){case"revenda":Proposal.jsonProposal.ModalidadeContrato="Revenda";break;case"consumo proprio":Proposal.jsonProposal.ModalidadeContrato="Consumo Próprio";break;case"faturamento direto":Proposal.jsonProposal.ModalidadeContrato="Cliente Faturamento Direto";break}var CFclientId=orderForm.customData.customApps[Proposal.index_client].fields.id;_API.getContactsInfoCF(CFclientId,function(res){Proposal.jsonProposal.ClienteFinalContato=res.contactName;apply_PDF_PAGE_2_CF_callback()})},apply_PDF_PAGE_4_CF:function(orderForm,apply_PDF_PAGE_4_CF_callback){Proposal.jsonProposal.Cliente=orderForm.customData.customApps[Proposal.index_client].fields.razaosocial;Proposal.jsonProposal.CNPJ=orderForm.customData.customApps[Proposal.index_client].fields.cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,"$1.$2.$3/$4-$5");Proposal.jsonProposal.InscricaoEstadual=orderForm.customData.customApps[Proposal.index_client].fields.inscricaoestadual;var CFclientId=orderForm.customData.customApps[Proposal.index_client].fields.id;_API.getContactsInfoCF(CFclientId,function(res){addResponseContact(res,function(){_API.getAddressCF(CFclientId,function(res){var i_address_escritorio=_API.__findIndexArray(res,"addressType","escritorio");var i_address_entrega=_API.__findIndexArray(res,"addressType","entrega");addResponseOfficeAddress(res[i_address_escritorio],function(){addResponseDeliveryAddress(res[i_address_entrega],function(){apply_PDF_PAGE_4_CF_callback()})})})})});function addResponseContact(res,addResponseContact_callback){Proposal.jsonProposal.RevendaContato=res.contactName;Proposal.jsonProposal.Telefone=res.contactPhone;Proposal.jsonProposal.Email=res.contactEmail;addResponseContact_callback()}function addResponseOfficeAddress(res,addResponseOfficeAddress_callback){Proposal.jsonProposal.Endereco=res.street+" Nº "+res.number+",  "+res.city+" - "+res.state+", "+res.postalCode;addResponseOfficeAddress_callback()}function addResponseDeliveryAddress(res,addResponseDeliveryAddress_callback){Proposal.jsonProposal.EnderecoEntrega=res.street+" Nº "+res.number+",  "+res.city+" - "+res.state+", "+res.postalCode;addResponseDeliveryAddress_callback()}},getProductsData:function(orderForm,i,getProductsData_callback){var stateInscription=orderForm.clientProfileData.stateInscription.toLocaleLowerCase();if(!orderForm.items.length){getProductsData_callback();return}var item=orderForm.items[i];var cd=item.ean.split("-")[1];var ean=item.ean.split("-")[0];var qtd=item.quantity;var skuId=item.id;_API.getPriceSKU(ean,cd,function(res){_API.gerSKUcontext(skuId,function(res_sku){Proposal.jsonProposal.Produtos.push({ValorUnitarioRevenda:0,ValorUnitario:qd_number_format(item.manualPrice/100,2,",","."),ValorTotal:qd_number_format(item.manualPrice*item.quantity/100,2,",","."),Entrega:item.availability=="available"?"Em Estoque":"Sem Estoque",ST:"0,00",ISS:qd_number_format(res.iss*1,2,",","."),IPI:qd_number_format(res.ipi*1,2,",","."),NCM:res_sku.data.TaxCode,ICMS:qd_number_format(res.icms*1,2,",","."),PISCofins:qd_number_format(res.pis*1+res.cofins*1,2,",","."),Numero:1,Fabricante:item.additionalInfo.brandName,EAN:ean,Descricao:item.skuName,Qtd:item.quantity,ValorUnitarioAlugado:"0,00",ValorTotalAlugado:"0,00"});if(Proposal.index_commission>-1){var commissions=JSON.parse(orderForm.customData.customApps[Proposal.index_commission].fields.jsonCommission);var index_product_commission=_API.__findIndexArray(commissions,"id",item.id);if(index_product_commission>-1){var productCommission=commissions[index_product_commission];var ipi=res.ipi*1,icms=res.icms*1,pis=res.pis*1,cofins=res.cofins*1,commission_value=productCommission.value/100;var total_imposto=(icms+pis+cofins+.5)/100;var total_ipi=commission_value/(ipi/100+1);if(stateInscription=="isento"){var comissao_liquida=commission_value-(commission_value*total_imposto+(commission_value-total_ipi))}else{var comissao_liquida=commission_value-(total_ipi*total_imposto+(commission_value-total_ipi))}Proposal.jsonProposal.DescontosComissoes.push({Item:i+1,ComissaoBrutaUnitaria:qd_number_format(commission_value,2,",","."),Ipi:qd_number_format(ipi,2,",","."),Icms:qd_number_format(icms,2,",","."),PisCofins:qd_number_format(pis+cofins,2,",","."),TaxaAdministrativa:qd_number_format(.5,1,",","."),ComissaoLiquidaUnitaria:qd_number_format(comissao_liquida,2,",","."),Quantidade:item.quantity,ComissaoBrutaTotal:qd_number_format(commission_value*item.quantity,2,",","."),ComissaoLiquidaTotal:qd_number_format(comissao_liquida*item.quantity,2,",",".")});Proposal.jsonProposal.ValorTotalComissaoBruta+=commission_value*item.quantity;Proposal.jsonProposal.ValorTotalComissaoLiquida+=comissao_liquida*item.quantity}}if(orderForm.items.length==i+1){Proposal.jsonProposal.ValorTotalComissaoBruta="R$"+qd_number_format(Proposal.jsonProposal.ValorTotalComissaoBruta,2,",",".");Proposal.jsonProposal.ValorTotalComissaoLiquida="R$"+qd_number_format(Proposal.jsonProposal.ValorTotalComissaoLiquida,2,",",".");getProductsData_callback()}else{Proposal.getProductsData(orderForm,i+1,getProductsData_callback)}})},true)},getClientAddress:function(orderForm,index_client,callback){if(Proposal.index_client>-1){var CFclientId=orderForm.customData.customApps[index_client].fields.id;_API.getAddressCF(CFclientId,function(res){callback({city:res[0].city,complement:res[0].complement,country:"BRA",number:res[0].number,postalCode:res[0].postalCode,reference:res[0].reference,state:res[0].state,street:res[0].street})})}else{callback(orderForm.shippingData.address)}},jsonProposal:{Cliente:"",NumeroProposta:"",ClienteFinalContato:"",Contato:"",Vendedor:"",Data:"",NomeProjeto:"",NomeArquivoRevenda:"Proposta "+(new Date).getTime()+" - Revenda.pdf",RevendaContato:"",RevendaRazaoSocial:"",RevendaTelefone:"(00)0000-0000",RevendaEmail:"",RevendaCnpj:"00.000.000/0001-00",RevendaInscricaoEstadual:"",Transportadora:"",FormaPagamento:"",DataPTAX:"00/00/0000",CotacaoPTAX:"0,0",ModalidadeContrato:"",EntradaPorcentagem:"",Entrada:"R$ 0,00",QuantidadeParcelas:"",Carencia:"",ValorTotalParcelaMensal:"R$ 0,00",ValorTotalContrato:"R$ 0,00",TotalEquipamentosReferencia:"R$ 0,00",ValorTotalComissaoBruta:0,ValorTotalComissaoLiquida:0,NomeArquivoCliente:"Proposta "+(new Date).getTime()+" - ClienteFinal.pdf",Email:"",Endereco:"",Telefone:"(00)0000-0000",InscricaoEstadual:"ISENTO",CNPJ:"00.000.000/0001-00",EnderecoEntrega:"",idCotacao:"0",LocalFaturamento:"LIVETECH DA BAHIA INDUSTRIA E COMERCIO S.A, 05.917.486/0009-06, RUA VEREADOR LAMARTINE JOSE DE OLIVEIRA, 1137, SALA 01, DO RODEIO, EXTREMA, , MG, 37640-000",Produtos:[],IncentivosFiscais:[],DescontosComissoes:[],ValorTotalItens:"R$ 0,00",Frete:"R$ 0,00",ValorTotalProposta:"R$ 0,00",NomeVendedor:"",CargoVendedor:"",Contato2Vendedor:"",EmailVendedor:"",i4d_extensions:"",businessunitid:"",ContatoVendedor:"",Observacoes:""},getDate:function(){var date=new Date,day=date.getDate()<10?"0"+date.getDate():date.getDate(),month=date.getMonth()+1<10?"0"+(date.getMonth()+1):date.getMonth()+1,year=date.getFullYear(),hour=date.getHours(),min=date.getMinutes();return day+"/"+month+"/"+year+" "+hour+":"+min}};