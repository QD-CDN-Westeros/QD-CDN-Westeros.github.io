/* Kamity - 10/09/2021 19:16:10 GMT */
"use strict";var idOrder=$("#order-id").text().length>0?$("#order-id").text():Cookies.get("idOrder");var emailOrder=Cookies.get("emailOrder");var skuIdOrder=Cookies.get("skuIdOrder");if(skuIdOrder.indexOf(",")>-1){skuIdOrder=skuIdOrder.split(",");skuIdOrder=skuIdOrder.join(",0");skuIdOrder="0".concat(skuIdOrder);skuIdOrder=skuIdOrder.split(",");$.each(skuIdOrder,function(indexInArray,valueOfElement){$.when($.ajax("/api/dataentities/CP/search?_fields=idSku,statusCupom,id&_where=statusCupom is null AND idSku=".concat(valueOfElement))).then(function(param){var statusCupom="Pendente";var obj_dados={email:emailOrder,orderId:idOrder,statusCupom:statusCupom};var json_dados=JSON.stringify(obj_dados);$.ajax({url:"/api/dataentities/CP/documents/".concat(param[0].id),type:"PATCH",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json"},data:json_dados,success:function success(res){},error:function error(res){console.error(res)}})})})}else{skuIdOrder="0".concat(skuIdOrder);$.when($.ajax("/api/dataentities/CP/search?_fields=idSku,statusCupom,id&_where=statusCupom is null AND idSku=".concat(skuIdOrder))).then(function(param){var statusCupom="Pendente";var obj_dados={email:emailOrder,orderId:idOrder,statusCupom:statusCupom};var json_dados=JSON.stringify(obj_dados);$.ajax({url:"/api/dataentities/CP/documents/".concat(param[0].id),type:"PATCH",dataType:"json",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json"},data:json_dados,success:function success(res){},error:function error(res){console.error(res)}})})}