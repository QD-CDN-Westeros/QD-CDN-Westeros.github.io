/* Anonymouswill - 09/04/2021 12:01:02 GMT */
/*!  */
function checkStorePartnerV2(){if(localStorage.getItem("usuarioChecado")){var e=localStorage.getItem("storepartner");e?$("body").addClass(e):(localStorage.removeItem("usuarioChecado"),location.reload())}else $(window).on("orderFormUpdated.vtex",(function(e,o){if(vtexjs.checkout.orderForm.loggedIn){var a=localStorage.getItem("storepartner");if(a)$("body").addClass(a);else{var r=vtexjs.checkout.orderForm.clientProfileData.email;$.ajax({url:"/api/dataentities/CL/search?_where=email='"+encodeURIComponent(r)+"'&_fields=partner",type:"GET",dataType:"json",success:function(e){try{if(e.length>0){var o=e[0].partner;$("body").addClass(o),localStorage.setItem("storepartner",o),localStorage.setItem("usuarioChecado",!0)}else console.log("Esse cliente nao possui parceiro")}catch(e){"undefined"!=typeof console&&"function"==typeof console.info&&console.info("Ops, algo saiu errado ao tentar verificar o login.",e.message)}},error:function(){console.log("Ocorreu algum erro ao tentar localizar o cliente na tabela de dados CL")}})}}else localStorage.removeItem("storepartner"),localStorage.removeItem("usuarioChecado")}))}$(document).ready((function(){checkStorePartnerV2()}));