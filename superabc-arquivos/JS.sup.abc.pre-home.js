/* DESKTOP-TON - 03/07/2020 09:38:15 GMT */
var preHome={selecionarCidade:function(e){if(e){if(e.value){var modal=document.getElementById("preHome");localStorage.cidadeIndex=e.value;localStorage.cidade=preHome.cidades[e.value].regiao;localStorage.data=(new Date).toJSON();var currentCity=preHome.cidades[e.value];if(!currentCity||!currentCity.pc){localStorage.preHome=3;modal.setAttribute("step",3);return}localStorage.politicaComercial=currentCity.pc||"1";localStorage.preHome=2;modal.setAttribute("step",2);document.getElementById("preHomeLocal").innerText=currentCity.regiao;preHome.searchMasterData(e.value)}}},continuar:function(){var url=window.location.href;var pc=localStorage.politicaComercial||"1";if(!window.location.search.length){url=url+"?sc="+pc}else{url=url+"&sc="+pc}window.location.href=url},instalarApp:function(){window.location.href="http://grupo.superabc.com.br/index.php/grupo-abc/cliente-plus"},abrirOfertas:function(){window.location.href="http://grupo.superabc.com.br/index.php/ofertas"},cidades:{"Araxá":{nome:"Araxá",ecommerce:false,endereco:""},Arcos:{nome:"Arcos",ecommerce:false,endereco:""},Betim:{nome:"Betim",ecommerce:false,endereco:""},"Boa Esperança":{nome:"Boa Esperança",ecommerce:false,endereco:""},"Cambuí":{nome:"Cambuí",ecommerce:false,endereco:""},"Campo Belo":{nome:"Campo Belo",ecommerce:false,endereco:""},"Divinópolis":{nome:"Divinópolis",ecommerce:true,endereco:"Rua Goiás, 1515 - Centro"},Formiga:{nome:"Formiga",ecommerce:false,endereco:""},"Itajubá":{nome:"Itajubá",ecommerce:false,endereco:""},"Itaúna":{nome:"Itaúna",ecommerce:false,endereco:""},Ituiutaba:{nome:"Ituiutaba",ecommerce:false,endereco:""},"Lagoa Da Prata":{nome:"Lagoa Da Prata",ecommerce:false,endereco:""},Lavras:{nome:"Lavras",ecommerce:false,endereco:""},Machado:{nome:"Machado",ecommerce:false,endereco:""},"Nova Serrana":{nome:"Nova Serrana",ecommerce:false,endereco:""},Oliveira:{nome:"Oliveira",ecommerce:false,endereco:""},"Pará De Minas":{nome:"Pará De Minas",ecommerce:false,endereco:""},Passos:{nome:"Passos",ecommerce:false,endereco:""},"Patos De Minas":{nome:"Patos De Minas",ecommerce:false,endereco:""},Piumhi:{nome:"Piumhi",ecommerce:false,endereco:""},"Pouso Alegre":{nome:"Pouso Alegre",ecommerce:false,endereco:""},"Santo Antônio do Monte":{nome:"Santo Antônio do Monte",ecommerce:false,endereco:""},"Três Pontas":{nome:"Três Pontas",ecommerce:false,endereco:""},Uberaba:{nome:"Uberaba",ecommerce:false,endereco:""},"Uberlândia":{nome:"Uberlândia",ecommerce:false,endereco:""},Varginha:{nome:"Varginha",ecommerce:false,endereco:""}},salesChannel:{1:{endereco:"Rua Goiás, 1515 - Centro - Divinópolis/MG"},2:{endereco:"Av. Ernesto Matiolli, 1180 - Santa Efigênia - Lavras/MG"},3:{endereco:"Av. Marechal Castelo Branco, 104 - Centro - Pouso Alegre"},4:{endereco:"Av. Cristiano Machado, 9395 – São Bernardo - Belo Horizonte/MG"},5:{endereco:"Av. Paulo de Brito, 350 - Centro - Formiga/MG"},6:{endereco:"Praça Luiz Ribeiro, 20 - Centro - Itaúna/MG"},7:{endereco:"Rua Mathias Lobato, 100 - Centro - Pará de Minas/MG"},8:{endereco:"Av. Brasil, 861 - Centro - Lagoa da Prata/MG"},9:{endereco:"Alameda Dr. Cícero de Castro Filho, 60 - Centro - Oliveira/MG"},10:{endereco:"Av. Edmeia Mattos Lazzarotti, 335 – Decamão - Betim/MG"},11:{endereco:"Rua Gabriel Penha de Paiva, 715 – Vila Paiva - Varginha/MG"},12:{endereco:"Av. Querobino Mourão Filho, 800 – Bela Vista - Piumhi/MG"},13:{endereco:"Rua São João, 815 – Centro - Campo Belo/MG"},14:{endereco:"Rua São Geraldo, 1.200 - Centro - Arcos/MG"},15:{endereco:"Av. JK, 46 - Centro  - Santo Antônio do Monte/MG"},16:{endereco:"Av. Rosalvo dos Santos, 405 - Bairro Bom Jesus - Araxá/MG"},17:{endereco:"Av. Cel. Pacífico Pinto da Fonseca, 150 - Fausto Pinto Fonseca - Nova Serrana/MG"},18:{endereco:"Av. Arlindo Figueiredo, 610 - Bairro São Francisco  - Passos/MG"},19:{endereco:"Av. Dona Alzira Vieira, 254 - Bairro Neuza - Boa Esperança/MG"},20:{endereco:"Av. Prefeito José Barbosa, 310 - Jardim Ana Maria - Cambuí/MG"},21:{endereco:"Rua Dona Luiza, 1.390 - Bairro Cristo Redentor - Patos de Minas/MG"},22:{endereco:"Av. Poços de Caldas, 475 - Distrito Industrial - Itajubá/MG"},23:{endereco:"Av. Getúlio Vargas, 3997 - Jardim das Palmeiras - Uberlêndia/MG"},24:{endereco:"Av. Monsenhor Eduardo, 1800 - Bairro Marta Helena - Uberlândia/MG"},25:{endereco:"Av. João Naves de Ávila, 317 - Centro - Uberlândia/MG"},26:{endereco:"Av. Barão do Rio Branco, 918 - Bairro São Benedito - Uberaba/MG"},27:{endereco:"Av. Prefeito Nilson Vilela, 1008 - Bairro Esperança - Três Pontas/MG"},28:{endereco:"Av. Professor José Vieira de Mendonça, 2355 - Bairro Alvorada  - Ituiutaba/MG"}},set:function(){if(localStorage){if(!localStorage.preHome||localStorage.preHome==3){var modal=document.createElement("div");var step=localStorage.preHome?localStorage.preHome:1;modal.id="preHome";modal.setAttribute("step",step);var selectCidades='<select id="preHomeCidade" onchange="preHome.selecionarCidade(this)"><option value="">Selecione a cidade</option>';for(var i=0;i<preHome.cidades.length;i++){selectCidades+='<option value="'+i+'">'+preHome.cidades[i].regiao+"</option>"}selectCidades+="</select>";modal.innerHTML='\t\t\t\t\t<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\t\t\t\t\t<div id="step1">\t\t\t\t\t\t<div class="left">\t\t\t\t\t\t\t<img src="//abcemcasa.vteximg.com.br/arquivos/ids/274808/logo-branca.png" />\t\t\t\t\t\t</div>\t\t\t\t\t\t<div class="right">\t\t\t\t\t\t\t<div>Em qual cidade você está?</div>\t\t\t\t\t\t\t<div>'+selectCidades+'</div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t\t<div id="step2">\t\t\t\t\t\t<div class="center">\t\t\t\t\t\t\t<div class="logo"><img src="//abcemcasa.vteximg.com.br/arquivos/ids/274807/logo.png" /></div>\t\t\t\t\t\t\t<div class="texto">Ao terminar de fazer suas compras <br>nós vamos separar o seu pedido. <br>Assim que estiver pronto, <b>você será <br>notificado</b> e poderá buscar no <br>seguinte endereço:</div>\t\t\t\t\t\t\t<div class="endereco">\t\t\t\t\t\t\t\t<div class="botao vermelho"><span class="material-icons icon">location_on</span><span class="texto" id="preHomeLocal"></span></div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t<div class="continuar">\t\t\t\t\t\t\t\t<div class="botao verde" onclick="preHome.continuar()"><span class="material-icons icon">done</span><span class="texto">Continuar</span></div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t\t<div id="step3">\t\t\t\t\t\t<div class="center">\t\t\t\t\t\t\t<div class="logo"><img src="//abcemcasa.vteximg.com.br/arquivos/ids/274807/logo.png" /></div>\t\t\t\t\t\t\t<div class="texto"><b>Em breve</b> nossa loja virtual chegará à sua cidade.</div>\t\t\t\t\t\t\t<div class="texto">Enquanto isso, use nosso aplicativo ou acesse nosso<br> site para ficar por dentro das ofertas!</div>\t\t\t\t\t\t\t<div class="continuar">\t\t\t\t\t\t\t\t<div class="botao verde" onclick="preHome.instalarApp()"><span class="material-icons icon">get_app</span><span class="texto">Instalar aplicativo</span></div>\t\t\t\t\t\t\t\t<div class="botao verde" onclick="preHome.abrirOfertas()"><span class="material-icons icon">attach_money</span><span class="texto">Ver ofertas</span></div>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t</div>\t\t\t\t';document.body.appendChild(modal)}}},check:function(){if(document){if(document.body){if(document.body.onload){preHome.searchMasterData();return true}}}setTimeout(function(){preHome.check()},1e3)},searchMasterData:function(city){$.ajax({url:"/api/dataentities/SC/search?_fields=regiao,pc",type:"GET",headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json"},success:function(data){var modal=document.getElementById("preHome");if(!data.length){localStorage.preHome=3;modal.setAttribute("step",3);return}preHome.cidades=data;preHome.set()}})}};var popupCorona={fechar:function(){localStorage.popupCorona=1;var modal=document.getElementById("popupCorona");modal.setAttribute("done",1)},set:function(){if(localStorage){if(!localStorage.popupCorona){var modal=document.createElement("div");modal.id="popupCorona";modal.setAttribute("onclick","popupCorona.fechar()");modal.innerHTML='\t\t\t\t\t<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\t\t\t\t\t<div class="container" style="background-image: url(\'//abcemcasa.vteximg.com.br/arquivos/ids/274846/AVISO-20200323.jpg\');"></div>\t\t\t\t\t<span class="fechar material-icons" onclick="popupCorona.fechar()">close</span>\t\t\t\t';document.body.appendChild(modal)}}},check:function(){if(document){if(document.body){if(document.body.onload){popupCorona.set();return true}}}setTimeout(function(){popupCorona.check()},1e3)}};var salesChannel={setSalesChannelUrlParameter:function(){var salesChanel=localStorage.politicaComercial;if(location.pathname=="/login"){var url=location.search;if(url.indexOf("sc="+salesChanel)==-1){if(url.indexOf("?")==-1)location.href=location.href+"?sc="+salesChanel;else location.href=location.href+"&sc="+salesChanel}}else{$("a").each(function(i,e){var url=$(e).attr("href").replace(location.hostname,"");if(url.indexOf("sc="+salesChanel)==-1){if(url.indexOf("?")==-1)$(e).attr("href",$(e).attr("href")+"?sc="+salesChanel);else $(e).attr("href",$(e).attr("href")+"&sc="+salesChanel)}})}},setAddressFooter:function(){if(typeof localStorage.politicaComercial!="undefined"){var info=preHome.salesChannel[localStorage.politicaComercial];var text_footer="No momento os pedidos feitos no www.superabc.com.br estão disponíveis apenas para o formato clique e retire, \t\t\t\t\t\t   no Hiper da "+info.endereco+". Em breve este serviço estará disponível para as demais lojas do GRUPO ABC.Devida \t\t\t\t\t\t   alta demanda pedimos até 6 horas para separação do seu pedido, agradecemos sua compreensão.";var text_tipbar="<span>*No momento, vendas online somente no formato Clique e Retire no Hiper da "+info.endereco+"</span>";$("footer .footer__cartoes-text.footer__cartoes-text--pedidos").html(text_footer);$($("header .tipbar .tipbar__item")[0]).html(text_tipbar)}}};window.onload=function(){preHome.check();popupCorona.check();salesChannel.setAddressFooter();salesChannel.setSalesChannelUrlParameter()};