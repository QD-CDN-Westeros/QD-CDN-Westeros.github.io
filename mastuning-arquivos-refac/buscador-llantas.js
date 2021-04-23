/* davids - 23/04/2021 10:28:10 GMT-0300 */
var baseUrl="https://www.masrefacciones.mx/";if(window.location.host.indexOf("devmastuning")>-1){var baseUrl="https://devmastuning.vtexcommercestable.com.br/"}$(document).ready(function(){$("#anchoLlanta").select2({placeholder:"Ancho..."});$("#altoLlanta").select2({placeholder:"Alto..."});$("#rinLlanta").select2({placeholder:"Rin..."});var params=getParameters();if(params.hasOwnProperty("ancho"))fillAncho(function(){$("#anchoLlanta").val(params.ancho).trigger("change.select2");if(params.hasOwnProperty("alto")){fillAlto(params.ancho,function(){$("#altoLlanta").val(params.alto).trigger("change.select2");if(params.hasOwnProperty("rin")){fillRin(params.ancho,params.alto,function(){$("#rinLlanta").val(params.rin).trigger("change.select2")})}})}});else fillAncho(function(){})});function fillAncho(callback){$("#anchoLlanta , #altoLlanta , #rinLlanta").prop("disabled",true);var opsAncho=[];$.ajax({url:baseUrl+"llantas?lid=9d70a804-532b-446a-b5bb-a48cc9195efd&map=c",type:"GET",success:function(data){$(data).find("ul.Ancho li a").each(function(){var text=$(this).attr("title");if(opsAncho.indexOf(text)==-1)opsAncho.push(text)});opsAncho.sort(function(a,b){return a-b});$("#altoLlanta , #rinLlanta").html("");$("#anchoLlanta").prop("disabled",false).html('<option value=""></option>'+arrToOpt(opsAncho)).change(function(){fillAlto(this.value,function(){})});$("#rinLlanta").change(function(){searchLLantas()});callback()}})}function fillAlto(ancho,callback){$("#altoLlanta , #rinLlanta").prop("disabled",true);var opsAlto=[];$.ajax({url:baseUrl+"llantas/"+ancho+"?lid=9d70a804-532b-446a-b5bb-a48cc9195efd&map=c,specificationFilter_354",type:"GET",success:function(data){$(data).find("ul.Alto li a").each(function(){var alto=$(this).attr("title");if(opsAlto.indexOf($.trim(alto))==-1){opsAlto.push(alto)}});opsAlto.sort(function(a,b){return a-b});$("#altoLlanta").html('<option value=""></option>'+arrToOpt(opsAlto)).prop("disabled",false).change(function(){fillRin($("#anchoLlanta").val(),this.value,function(){})});$("#rinLlanta").prop("disabled",false);callback();$("#altoLlanta").select2("open")}})}function fillRin(ancho,alto,callback){var opsRin=[];$("#rinLlanta").prop("disabled",true);$.ajax({url:baseUrl+"llantas/"+ancho+"/"+alto+"?lid=9d70a804-532b-446a-b5bb-a48cc9195efd&map=c,specificationFilter_354,specificationFilter_355",type:"GET",success:function(data){$(data).find("ul.Rin li a").each(function(){var alto=$(this).attr("title");if(opsRin.indexOf($.trim(alto))==-1){opsRin.push(alto)}});opsRin.sort(function(a,b){return a-b});$("#rinLlanta").html('<option value=""></option>'+arrToOpt(opsRin)).prop("disabled",false);callback();$("#rinLlanta").select2("open")}})}function searchLLantas(){var path=baseUrl+"llantas/";var params=[];var cats=[];var ancho=$("#anchoLlanta").val();var alto=$("#altoLlanta").val();var rin=$("#rinLlanta").val();if(!ancho||!alto||!rin){$('#filter3 .filter-mz-v1-search2 .select2:not(".select2-container--disabled")').last().prev("select").select2("open")}else{if(ancho!==null){cats.push(ancho)}if(alto!==null){cats.push(alto);params.push("specificationFilter_354")}if(rin!==null){cats.push(rin);params.push("specificationFilter_355")}window.location.href=path+cats.join("/")+"?map=c,"+params.join(",")+"&PS=50"}}function arrToOpt(arr){var ops="";for(var i=0;i<arr.length;i++){ops+='<option value="'+arr[i]+'">'+arr[i]+"</option>";if(i==arr.length-1){return ops}}}function getParameters(){var url=new URL(window.location.href);var params=url.search.replace(/fq=specificationFilter_307/gi,"ancho").replace(/fq=specificationFilter_308/gi,"alto").replace(/fq=specificationFilter_309/gi,"rin").replace(/\?fq=/gi,"").replace(/=/gi,":").replace(/:/gi,'":"').split("&");if(params.length>1){return JSON.parse('{"'+params.join('","')+'"}')}else return{}}