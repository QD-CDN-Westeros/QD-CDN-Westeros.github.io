/* DESKTOP-TON - 27/05/2021 15:59:49 GMT */
var API={url:"https://tezgcd.myvtex.com/_api",devUrl:"https://devapi--tezgcd.myvtex.com/_api",ajaxFindSku:[],run:function(){},init:function(){API.checkDevEnvironment()},initAfterOrderForm:function(orderForm){},ajaxStop:function(){},ready:function(){},windowOnload:function(){},checkDevEnvironment:function(){if(location.search.indexOf("dev=1")!=-1)API.url=API.devUrl},getPriceSKU:function(ean,cd,callback,returnAllinfos){if(vtexjs.checkout.orderForm.clientProfileData==null){callback(0);return}try{if(!vtexjs.checkout.orderForm.clientProfileData.corporateDocument){setTimeout(function(){API.getPriceSKU(ean,cd,callback)},1e3);return}getCustomPrice(vtexjs.checkout.orderForm.clientProfileData.corporateDocument)}catch(err){console.log(err.message)}function getCustomPrice(CNPJ){var CNPJ=CNPJ.replace(/\.|-|\//g,"");var customApps=vtexjs.checkout.orderForm.customData.customApps;var customPrice=0;if(typeof vtexjs.checkout.orderForm=="undefined"){callback(customPrice);return}if(!vtexjs.checkout.orderForm.loggedIn){callback(customPrice);return}var cProc="",params="?",indexSimulation=Common.__findIndexArray(customApps,"id","clientsimulation");if(indexSimulation!=-1){params+="ean="+ean;params+="&CNPJ="+CNPJ;params+="&CD_Origem="+cd;params+="&cIsICM="+customApps[indexSimulation].fields.contribuinte;params+="&cEstado="+customApps[indexSimulation].fields.icms;params+="&cProc="+cProc;params+="&cTpCalc=1";params+="&CPag=001";params+="&Nivel=7"}else{params+="ean="+ean;params+="&CNPJ="+CNPJ;params+="&CD_Origem="+cd;params+="&cProc="+cProc;params+="&cTpCalc=1";params+="&CPag=001";params+="&Nivel=7"}API.ajaxFindSku["getPriceSKU"+ean]=$.ajax({url:API.url+"/product/price"+params,method:"GET"}).done(function(res){if(returnAllinfos){callback(res);return}callback(Number(res.preco.replace(",",".")))})}},priceChange:function(callback){if(vtexjs.checkout.orderForm.customData==null||vtexjs.checkout.orderForm.clientProfileData==null||vtexjs.checkout.orderForm.clientProfileData.corporateDocument==null){setTimeout(function(){API.priceChange(callback)},300);return}var customApps=vtexjs.checkout.orderForm.customData.customApps;var cProc="";var indexSimulation=Common.__findIndexArray(customApps,"id","clientsimulation");var corporateDocument=vtexjs.checkout.orderForm.clientProfileData.corporateDocument.replace(/\.|-|\//g,"");var params={orderFormId:vtexjs.checkout.orderForm.orderFormId,cTpCalc:1,CPag:"001",Nivel:7,cProc:"",CNPJ:corporateDocument,cEstado:"",cIsICM:""};if(indexSimulation!=-1){var dataSimulation=customApps[indexSimulation].fields;params.cEstado=dataSimulation.icms;params.cIsICM=dataSimulation.contribuinte}$.ajax({url:API.url+"/cart/price",type:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(params)}).done(function(res){callback(res)})},getUserPermissions:function(orderForm,callback){$.ajax({url:API.url+"/user/permissions?userId="+orderForm.userProfileId,method:"GET"}).done(function(res){callback(res)})},getClient:function(callback){$.ajax({url:API.url+"/user/client?userId="+vtexjs.checkout.orderForm.userProfileId,method:"GET"}).done(function(res){callback(res)})},getUserIdMaster:function(email,callback){$.ajax({url:API.url+"/user/userIdMaster?email="+email,method:"GET"}).done(function(res){callback(res)})},getUsers:function(email,callback){$.ajax({url:API.url+"/users?email="+email,method:"GET"}).done(function(res){callback(res)})},getDeliveryAddress:function(clientId,callback){$.ajax({url:API.url+"/user/deliveryAddress?clientId="+clientId,method:"GET"}).done(function(res){callback(res)})},getDeliveryAddressCF:function(CFclientId,callback){$.ajax({url:API.url+"/user/deliveryAddressCF?CFclientId="+CFclientId,method:"GET"}).done(function(res){callback(res)})},getAddressCF:function(CFclientId,callback){$.ajax({url:API.url+"/client/addressCF?CFclientId="+CFclientId,method:"GET"}).done(function(res){callback(res)})},getClientsFatDireto:function(clientId,callback){$.ajax({url:API.url+"/client/list?id="+clientId,method:"GET"}).done(function(res){callback(res)})},getClientFatDireto:function(id,callback){$.ajax({url:API.url+"/client?id="+id,method:"GET"}).done(function(res){callback(res)})},getListClienteFatDireto:function(clientId,callback){$.ajax({url:API.url+"/client/simpleList?id="+clientId,method:"GET"}).done(function(res){callback(res)})},setClientFatDireto:function(orderFormId,id,callback){$.ajax({url:API.url+"/customData/client?of="+orderFormId+"&id="+id,type:"PUT"}).done(function(res){callback(res)})},delClientFatDireto:function(orderFormId,callback){$.ajax({url:API.url+"/customData/client?of="+orderFormId,type:"DELETE"}).done(function(res){callback(res)})},getInfoClient:function(email,callback){$.ajax({url:API.url+"/user/clientInfo?email="+email,type:"GET"}).done(function(res){callback(res)})},getClientCNPJ:function(id,callback){$.ajax({url:API.url+"/user/cnpj?id="+id,type:"GET"}).done(function(res){callback(res)})},getCompanyData:function(id,callback){$.ajax({url:API.url+"/user/company?id="+id,type:"GET"}).done(function(res){callback(res)})},getClientAddress:function(clientId,callback){$.ajax({url:API.url+"/client/address?clientId="+clientId,type:"GET"}).done(function(res){callback(res)})},getContactsInfo:function(email,callback){$.ajax({url:API.url+"/contacts?email="+email,type:"GET"}).done(function(res){callback(res)})},getClientInfoMaster:function(userIdMaster,email,callback){$.ajax({url:API.url+"/client/infoMaster?email="+email+"&userIdMaster="+userIdMaster,type:"GET"}).done(function(res){callback(res)})},getContactsInfoCF:function(CFclientId,callback){$.ajax({url:API.url+"/contactsCF?CFclientId="+CFclientId,type:"GET"}).done(function(res){callback(res)})},getPropostas:function(email,page,limit,valSearch,order,callback){$.ajax({url:API.url+"/user/propostas?email="+email+"&page="+page+"&pageSize="+limit+"&search="+valSearch+"&order="+order,type:"GET"}).done(function(res){callback(res)})},setSimulation:function(orderFormId,json,callback){$.ajax({url:API.url+"/simulation?orderFormId="+orderFormId,type:"PUT",headers:{"Content-Type":"application/json"},data:JSON.stringify(json)}).done(function(res){callback(res)})},deleteUser:function(id,callback){$.ajax({url:API.url+"/user?id="+id,type:"DELETE"}).done(function(res){callback(res)})},editUser:function(json,callback){$.ajax({url:API.url+"/user",type:"PATCH",headers:{"Content-Type":"application/json"},data:JSON.stringify(json)}).done(function(res){callback(res)})},deleteClient:function(id,callback){$.ajax({url:API.url+"/client/delete?id="+id,type:"DELETE"}).done(function(res){callback(res)})},createAddress:function(json,callback){$.ajax({url:API.url+"/address",type:"POST",headers:{"Content-Type":"application/json"},data:JSON.stringify(json)}).done(function(res){callback(res)})},editAddress:function(json,callback){$.ajax({url:API.url+"/address",type:"PATCH",headers:{"Content-Type":"application/json"},data:JSON.stringify(json)}).done(function(res){callback(res)})},editContact:function(json,callback){$.ajax({url:API.url+"/contact",type:"PATCH",headers:{"Content-Type":"application/json"},data:JSON.stringify(json)}).done(function(res){callback(res)})},verifyCNPJ:function(cnpj,callback){$.ajax({url:API.url+"/user/verifyCnpj?cnpj="+cnpj,type:"GET"}).done(function(res){callback(res)})}};