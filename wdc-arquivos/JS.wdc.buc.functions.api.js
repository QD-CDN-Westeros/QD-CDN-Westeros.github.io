/* DESKTOP-TON - 17/06/2021 13:11:08 GMT */
var _API={url:location.hostname=="www.wdcnet.store"?"/api/io/_api":"/_api",devUrl:"https://devapi--tezgcd.myvtex.com/_api",ajaxFindSku:[],run:function(){},init:function(){_API.checkDevEnvironment()},initAfterOrderForm:function(orderForm){},ajaxStop:function(){},ready:function(){},windowOnload:function(){},__findIndexArray:function(array,position,find){function findArray(array){return array[position]==this}return array.indexOf(array.find(findArray,find))},getCPag:function(){if(!vtexjs.checkout.orderForm.paymentData){return"001"}else if(!vtexjs.checkout.orderForm.paymentData.payments.length){return"001"}arrayCPag=[];arrayCPag[201]="001";arrayCPag[202]="002";arrayCPag[206]="046";arrayCPag[205]="059";arrayCPag[203]="060";arrayCPag[208]="074";arrayCPag[207]="288";arrayCPag[209]="298";arrayCPag[210]="299";arrayCPag[204]="020";var paymentSystem=vtexjs.checkout.orderForm.paymentData.payments[0].paymentSystem;return arrayCPag[paymentSystem]},checkDevEnvironment:function(){if(location.search.indexOf("dev=1")!=-1)_API.url=_API.devUrl},getPriceSKU:function(ean,cd,callback,returnAllinfos,CPag){if(vtexjs.checkout.orderForm.clientProfileData==null||!vtexjs.checkout.orderForm.loggedIn){callback(0);return}try{if(!vtexjs.checkout.orderForm.clientProfileData.corporateDocument||vtexjs.checkout.orderForm.customData==null){setTimeout(function(){_API.getPriceSKU(ean,cd,callback,returnAllinfos,CPag)},1e3);return}getCustomPrice(vtexjs.checkout.orderForm.clientProfileData.corporateDocument)}catch(err){console.log(err.message)}function getCustomPrice(CNPJ){var CNPJ=CNPJ.replace(/\.|-|\//g,"");var customApps=vtexjs.checkout.orderForm.customData.customApps;var customPrice=0;if(typeof vtexjs.checkout.orderForm=="undefined"){callback(customPrice);return}if(!vtexjs.checkout.orderForm.loggedIn){callback(customPrice);return}var cProc="",params="?",indexSimulation=_API.__findIndexArray(customApps,"id","clientsimulation"),indexTypeOperation=_API.__findIndexArray(customApps,"id","typeoperation");indexClient=_API.__findIndexArray(customApps,"id","client");if(indexClient>-1){if(customApps[indexTypeOperation].fields.operation=="faturamento direto"){CNPJ=customApps[indexClient].fields.cnpj.replace(/\.|-|\//g,"")}}if(indexSimulation!=-1){CNPJ="";params+="ean="+ean;params+="&CNPJ="+CNPJ;params+="&CD_Origem="+cd;params+="&cIsICM="+customApps[indexSimulation].fields.contribuinte;params+="&cEstado="+customApps[indexSimulation].fields.icms;params+="&cProc="+cProc;params+="&cTpCalc=1";params+="&CPag="+(CPag?CPag:"001");params+="&Nivel=7";params+="&Proposta="+vtexjs.checkout.orderForm.orderFormId}else{params+="ean="+ean;params+="&CNPJ="+CNPJ;params+="&CD_Origem="+cd;params+="&cProc="+cProc;params+="&cTpCalc=1";params+="&CPag="+(CPag?CPag:"001");params+="&Nivel=7";params+="&Proposta="+vtexjs.checkout.orderForm.orderFormId}_API.ajaxFindSku["getPriceSKU"+ean]=$.ajax({url:_API.url+"/product/price"+params,method:"GET"}).done(function(res){if(returnAllinfos){callback(res);return}callback(Number(res.preco.replace(",",".")))})}},priceChange:function(callback,_index){if(vtexjs.checkout.orderForm.customData==null||vtexjs.checkout.orderForm.clientProfileData==null||vtexjs.checkout.orderForm.clientProfileData.corporateDocument==null){setTimeout(function(){_API.priceChange(callback,_index)},300);return}var customApps=vtexjs.checkout.orderForm.customData.customApps;var cProc="";var corporateDocument=vtexjs.checkout.orderForm.clientProfileData.corporateDocument.replace(/\.|-|\//g,"");var indexSimulation=_API.__findIndexArray(customApps,"id","clientsimulation");var indexTypeOperation=_API.__findIndexArray(customApps,"id","typeoperation");var indexClient=_API.__findIndexArray(customApps,"id","client");if(indexClient>-1){if(customApps[indexTypeOperation].fields.operation=="faturamento direto"){corporateDocument=customApps[indexClient].fields.cnpj.replace(/\.|-|\//g,"")}}var params={orderFormId:vtexjs.checkout.orderForm.orderFormId,Proposta:vtexjs.checkout.orderForm.orderFormId,cTpCalc:1,CPag:_API.getCPag(),Nivel:7,cProc:"",CNPJ:corporateDocument,cEstado:"",cIsICM:""};if(indexSimulation!=-1){var dataSimulation=customApps[indexSimulation].fields;params.CNPJ="";params.cEstado=dataSimulation.icms;params.cIsICM=dataSimulation.contribuinte}var j=vtexjs.checkout.orderForm.items.length;var k=0;var itemsSuccess=[];if(_index==null){setPriceChange(0,params,callback);return}else{setPriceChange(_index,params,callback);return}function setPriceChange(index,params,callback){if(index>vtexjs.checkout.orderForm.items.length-1){if(itemsSuccess.length==vtexjs.checkout.orderForm.items.length){callback(itemsSuccess);return}else{setTimeout(function(){setPriceChange(index,params,callback)},500);return}}params.index=index;$.ajax({url:_API.url+"/cart/price/v2",type:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(params)}).done(function(res){itemsSuccess.push(res);if(_index!=null){callback(res);return}});if(_index==null)setTimeout(function(){setPriceChange(index+1,params,callback)},500)}},getUserPermissions:function(orderForm,callback){$.ajax({url:_API.url+"/user/permissions?userId="+orderForm.userProfileId,method:"GET"}).done(function(res){callback(res)})},getClient:function(callback){$.ajax({url:_API.url+"/user/client?userId="+vtexjs.checkout.orderForm.userProfileId,method:"GET"}).done(function(res){callback(res)})},getUserIdMaster:function(email,callback){$.ajax({url:_API.url+"/user/userIdMaster?email="+email,method:"GET"}).done(function(res){callback(res)})},getUsers:function(email,callback){$.ajax({url:_API.url+"/users?email="+email,method:"GET"}).done(function(res){callback(res)})},getDeliveryAddress:function(clientId,callback){$.ajax({url:_API.url+"/user/deliveryAddress?clientId="+clientId,method:"GET"}).done(function(res){callback(res)})},getDeliveryAddressCF:function(CFclientId,callback){$.ajax({url:_API.url+"/user/deliveryAddressCF?CFclientId="+CFclientId,method:"GET"}).done(function(res){callback(res)})},getAddressCF:function(CFclientId,callback){$.ajax({url:_API.url+"/client/addressCF?CFclientId="+CFclientId,method:"GET"}).done(function(res){callback(res)})},getClientsFatDireto:function(clientId,callback){$.ajax({url:_API.url+"/client/list?id="+clientId,method:"GET"}).done(function(res){callback(res)})},getClientFatDireto:function(id,callback){$.ajax({url:_API.url+"/client?id="+id,method:"GET"}).done(function(res){callback(res)})},getListClienteFatDireto:function(clientId,callback){$.ajax({url:_API.url+"/client/simpleList?id="+clientId,method:"GET"}).done(function(res){callback(res)})},setClientFatDireto:function(orderFormId,id,callback){$.ajax({url:_API.url+"/customData/client?of="+orderFormId+"&id="+id,type:"PUT"}).done(function(res){callback(res)})},setCommission:function(orderFormId,json,callback){$.ajax({url:_API.url+"/customData/commission?orderFormId="+orderFormId,type:"PUT",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json)}).done(function(res){callback(res)})},delCommision:function(orderFormId,callback){$.ajax({url:_API.url+"/customData/commission?orderFormId="+orderFormId,type:"DELETE",headers:{"Access-Control-Allow-Origin":"*"}}).done(function(res){callback(res)})},setProductsInfo:function(orderFormId,json,callback){$.ajax({url:_API.url+"/customData/products_all?orderFormId="+orderFormId,type:"PUT",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json)}).done(function(res){callback(res)})},createUser:function(json,callback){$.ajax({url:_API.url+"/user/create",type:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json)}).done(function(res){callback(res)})},setTypeUser:function(orderFormId,json,callback){$.ajax({url:_API.url+"/customData/type_user?orderFormId="+orderFormId,type:"PUT",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json),error:function(xhr,status,error){console.log("responseText",xhr.responseText);console.log("status",status);console.log("error",error);location.reload()}}).done(function(res){callback(res)})},setTypeOperation:function(orderFormId,json,callback){$.ajax({url:_API.url+"/customData/typeoperation?orderFormId="+orderFormId,type:"PUT",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json)}).done(function(res){callback(res)})},delClientFatDireto:function(orderFormId,callback){$.ajax({url:_API.url+"/customData/client?of="+orderFormId,type:"DELETE",headers:{"Access-Control-Allow-Origin":"*"}}).done(function(res){callback(res)})},delUserIdMaster:function(orderFormId,callback){$.ajax({url:_API.url+"/customData/userIdMaster?orderFormId="+orderFormId,type:"DELETE",headers:{"Access-Control-Allow-Origin":"*"}}).done(function(res){callback(res)})},getInfoClient:function(email,callback){$.ajax({url:_API.url+"/user/clientInfo?email="+email,type:"GET"}).done(function(res){callback(res)})},getClientCNPJ:function(id,callback){$.ajax({url:_API.url+"/user/cnpj?id="+id,type:"GET"}).done(function(res){callback(res)})},getCompanyData:function(id,callback){$.ajax({url:_API.url+"/user/company?id="+id,type:"GET"}).done(function(res){callback(res)})},getClientAddress:function(clientId,callback){$.ajax({url:_API.url+"/client/address?clientId="+clientId,type:"GET"}).done(function(res){callback(res)})},getContactsInfo:function(email,callback){$.ajax({url:_API.url+"/contacts?email="+email,type:"GET"}).done(function(res){callback(res)})},getClientInfoMaster:function(userIdMaster,email,callback){$.ajax({url:_API.url+"/client/infoMaster?email="+email+"&userIdMaster="+userIdMaster,type:"GET"}).done(function(res){callback(res)})},getContactsInfoCF:function(CFclientId,callback){$.ajax({url:_API.url+"/contactsCF?CFclientId="+CFclientId,type:"GET"}).done(function(res){callback(res)})},getPropostas:function(email,page,limit,valSearch,order,callback){$.ajax({url:_API.url+"/user/propostas?email="+email+"&page="+page+"&pageSize="+limit+"&search="+valSearch+"&order="+order,type:"GET"}).done(function(res){callback(res)})},setSimulation:function(orderFormId,json,callback){$.ajax({url:_API.url+"/customData/simulation?orderFormId="+orderFormId,type:"PUT",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json)}).done(function(res){callback(res)})},delSimulation:function(orderFormId,callback){$.ajax({url:_API.url+"/customData/simulation?orderFormId="+orderFormId,type:"DELETE",headers:{"Access-Control-Allow-Origin":"*"}}).done(function(res){callback(res)})},deleteUser:function(id,callback){$.ajax({url:_API.url+"/user?id="+id,type:"DELETE",headers:{"Access-Control-Allow-Origin":"*"}}).done(function(res){callback(res)})},editUser:function(json,callback){$.ajax({url:_API.url+"/user",type:"PATCH",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json)}).done(function(res){callback(res)})},deleteClient:function(id,callback){$.ajax({url:_API.url+"/client/delete?id="+id,type:"DELETE",headers:{"Access-Control-Allow-Origin":"*"}}).done(function(res){callback(res)})},createAddress:function(json,callback){$.ajax({url:_API.url+"/address",type:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json)}).done(function(res){callback(res)})},editAddress:function(json,callback){$.ajax({url:_API.url+"/address",type:"PATCH",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json)}).done(function(res){callback(res)})},createContact:function(json,callback){$.ajax({url:_API.url+"/contact",type:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json)}).done(function(res){callback(res)})},editContact:function(json,callback){$.ajax({url:_API.url+"/contact",type:"PATCH",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json)}).done(function(res){callback(res)})},verifyCNPJ:function(cnpj,callback){$.ajax({url:_API.url+"/user/verifyCnpj?cnpj="+cnpj,type:"GET"}).done(function(res){callback(res)})},addCFclient:function(json,callback){$.ajax({url:_API.url+"/cf_client",type:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json)}).done(function(res){callback(res)})},editCFclient:function(json,callback){$.ajax({url:_API.url+"/cf_client",type:"PATCH",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},data:JSON.stringify(json)}).done(function(res){callback(res)})},getOrder:function(id,callback){$.ajax({url:_API.url+"/order?id="+id+"&orderFormId="+vtexjs.checkout.orderForm.orderFormId,type:"GET"}).done(function(res){callback(res)})},getOrders:function(options,callback){var params="orderFormId="+vtexjs.checkout.orderForm.orderFormId;if(options.page)params+="&page="+options.page;if(options.limit)params+="&limit="+options.limit;if(options.orderBy)params+="&orderBy="+options.orderBy;if(options.status)params+="&status="+options.status;if(options.user)params+="&user="+options.user;if(options.orderId)params+="&orderId="+options.orderId;if(options.creationDate)params+="&creationDate="+options.creationDate;$.ajax({url:_API.url+"/orders?"+params,type:"GET"}).done(function(res){callback(res)})},getInventory:function(skuId,callback){$.ajax({url:_API.url+"/inventory/sku?id="+skuId,type:"GET"}).done(function(res){callback(res)})},getProposal:function(id,callback){$.ajax({url:_API.url+"/proposal/?id="+id,type:"GET"}).done(function(res,a,b){if(b.status==200){callback(res)}else{setTimeout(function(){_API.getProposal(id,callback)},500)}})},emailHasApproved:function(email,callback){$.ajax({url:_API.url+"/user/hasApproved/?email="+email,type:"GET"}).done(function(res,a,b){callback(res)})}};