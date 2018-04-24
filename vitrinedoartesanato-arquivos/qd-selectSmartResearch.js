/*Quatro Digital - Select Smart Research // 2.1 // Carlos Vinicius // Todos os direitos reservados*/
(function(){
	$(function(){
		try{
			var menu;

			// Obtendo os dados do menu
			menu = $(".qd_select_smart_research .menu-departamento");
			// Removendo as categorias de acessórios e outlet
			menu.find(".acessorios, .outlet").remove();
			// Obtendo as montadoras
			window.qd_ssr_maker = [];
			menu.find("h3").each(function(ndx){
				var $t = $(this);
				var items = [];

				$t.next("ul").find("a").each(function(ndx){
					var $this = $(this);
					items.push({ id: ndx, text: $this.text(), href: $this.attr("href")});
				});

				window.qd_ssr_maker.push({ id: ndx + 1, text: $t.text(), href: $t.find("a").attr("href"), items: items });
			});

			// Informação padrão para o carro
			window.qd_ssr_car = [{text: "Selecione a montadora ..."}];
			// Informação padrão para o ano
			window.qd_ssr_year = [{text: "Selecione o carro ..."}];
		}
		catch(e){
			if(typeof console === "object" && typeof console.error === "function")
				console.error("Erro tratado: ", e);
		}
	});

	
	(function(){
		"use strict";
		
		var extTitle = "QD Select Smart Research";
		var log=function(a,b){if("object"===typeof console){var c="object"===typeof a;"undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase()?"undefined"!==typeof b&&"info"===b.toLowerCase()?c?console.info("["+extTitle+"]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("["+extTitle+"]\n"+a):c?console.error("["+extTitle+"]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.error("["+extTitle+"]\n"+a):c?console.warn("["+extTitle+"]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("["+extTitle+"]\n"+a)}};
		
		// Função para obter os dados do contexto de busca (buscapagina)
		var getSearchQuery, searchQuery = ""
		getSearchQuery = function(){
			var out = "";

			$("script:not([src])").each(function(){
				var txt = $(this)[0].innerHTML;
				
				if(txt.indexOf("buscapagina") < 0)
					return;

				var query = txt.match(/(buscapagina.*)&PageNumber=/i);

				if(!(typeof query === "object" && typeof query[1] === "string")){
					log("Não foi possível obter os dados do contexto de busca.");
					return false;
				}

				out = query[1].split("?").pop().replace(/(&?sl=[a-z0-9-]+|&?cc=[0-9]+|&?sm=[0-9]+|&?ps=[0-9]+)/gi, "");

				out = out.replace(/\+/g, " ");

				return false;
			});

			return out;
		};
		// Obtendo o contexto de busca
		$(function(){
			searchQuery = getSearchQuery();
		});

		// Função que obtem apenas o pathname de uma URL
		var getUrlPathName = function(url) {
			var out;

			var protocol = (url.match(/^(https?:)?\/\//) || [""])[0];
			var urlDirs = url.trim().replace(protocol, "").replace(/\/$/, "").split("/");
			var host = urlDirs.shift();

			return urlDirs.join("/");
		};
		// Criando objetos para organizar os dados do mapa e assim remover itens duplicados
		var mapRemoveDuplicates = function(urlParameters, mapKeys){
			var out = [];
			var urlPath = getUrlPathName(urlParameters);
			var values = urlPath.split("/");
			var mapKeysArray = mapKeys.split("=");
			var keys = mapKeysArray[1].split(",");
			var parameters = {};
			var currentKey;

			for(var i = values.length - 1; i > -1; i--){
				currentKey = keys[i] || i;
				currentKey = currentKey.toString().toLowerCase() === "c" ? "|" + currentKey.toLowerCase() + "|_" + i : currentKey;
				parameters[currentKey] = values[i];
			};

			// Gerando as novas chaves e valores
			var newValues = [];
			var newKeys = [];
			for(var k in parameters){
				if(typeof parameters[k] === "function")
					continue;

				newValues.unshift(parameters[k]);
				if(isNaN(k))
					newKeys.unshift(k.replace(/\|c\|_[0-9]+/i, "c"));
			};

			// Gerando a saída
			mapKeysArray[1] = newKeys.join(",");
			out.push(urlParameters.replace(urlPath, newValues.join("/")));
			out.push(mapKeysArray.join("="));

			return out;
		};
		// Função para converter uma querystring em mapa VTEX
		var queryStringToMap = function(url, queryString) {
			var uri = [];
			var map = [];
			var query = "";
			var mapItem;
			var out = [];

			// A partir da query string (que são os novos parametros a serem adicionados a URL) montamos a estrutura em VTEX Map
			var queryArray = queryString.trim().split("&");
			for(var i in queryArray){
				if(typeof queryArray[i] === "function")
					continue;

				query = decodeURIComponent(queryArray[i]);

				if(query.toLowerCase().indexOf("ft=") > -1){
					mapItem = query.split("=");
					map.push(mapItem[0]);
					uri.push(mapItem[1] || "");
				}
				else{
					mapItem = query.split("=").pop().split(":");
					for(var l = 0; l<mapItem.length; l = l +2){
						if(mapItem[l].toLowerCase().trim() === "c")
							continue;

						map.push(mapItem[l]);
						uri.push(mapItem[l+1] || "");
					}
				}
			};


			// Com os dados do mapa gerado pela query string mesclamos com os já existentes
			var urlArray = url.split("?");
			var mapArray = [];
			var hashArray = [];
			var mapParameters;
			var mapKeys;
			if(urlArray.length <2)
				return;
			
			// Mesclando os dados da URL com a query
			urlArray[0] = urlArray[0].substr(-1,1) === "/" ? urlArray[0] : urlArray[0] + "/";
			mapParameters = urlArray[0] + uri.join("/");

			// Mesclando os dados do Map com a query
			hashArray = urlArray[1].split("#");
			mapArray = hashArray[0].split("&");
			for(var k=0; k<mapArray.length; k++){
				if(mapArray[k].toLowerCase().indexOf("map=") > -1)
					break;
			}
			mapArray[k] = (mapArray[k].substr(-1,1) === "," ? mapArray[k] : mapArray[k] + ",") + map.join(",");
			mapKeys = mapArray[k];
			
			// Removendo duplicados			
			var removedDuplicate = mapRemoveDuplicates(mapParameters, mapKeys);

			// Unindo a query string com os dados de hash
			hashArray[0] = removedDuplicate[1];

			// Gerando saída
			out.push(removedDuplicate[0]);
			out.push(hashArray.join("#"));
			return out.join("?");
		};
		// Função para tratar URLs
		var mergeQueryString = function(url, queryString){
			var out = "";
			var hash = url.split("#");

			out = hash.shift();
			if(url.toLowerCase().indexOf("map=") > -1)
				out = queryStringToMap(url, queryString);
			else
				out = out + ( out.indexOf("?") > -1 ? "&" + queryString.replace("?", "") : "?" + queryString.replace("?", ""));
			out = out + "#" + hash.join("#");

			return out;
		};

		var QD_selectSmartResearch = function(){
			var selectLoading, jqXHR,  autoSelectOptions;


			// Variável de data do plugin
			var pluginData = {};
			pluginData.qd_ssr_car = {};
			pluginData.qd_ssr_year = {};
			pluginData.qd_ssr_maker = {};
			// Configurações
			pluginData.qd_ssr_maker.allowAutoSelect = true;
			pluginData.qd_ssr_year.allowAutoSelect = true;

			// Função que exibe uma mensagem de carregando
			selectLoading = function(elem, windowKey){
				var i = 0, text, interval;

				interval = setInterval(function(){
					if(i == 4)
						i = 0;

					window[windowKey] = [{ id: 0, text: text[i] }];
					elem.select2("val", 0);

					i++;
				}, 200);

				// Carregando os dados básicos
				text = ["Carregando", "Carregando .", "Carregando ..", "Carregando ..."];
				window[windowKey] = [{ id: 0, text: text[0] }];
				elem.select2("val", 0);

				return interval;
			};

			// Criando o select da montadora
			pluginData.qd_ssr_maker.elem = $(".qd_ssr_maker").select2({
				placeholder: "Selecione ...",
				data: function() { return {results: qd_ssr_maker}; }
			}).select2("data", null).on("select2-selecting", function(e, data){
				window.qd_ssr_car = (e.object || data.object).items;

				// if(pluginData.qd_ssr_maker.allowAutoSelect){
					// var itemNdx = typeof data !== "undefined" && (typeof data.catIndex === "number" || typeof data.catIndex === "string") ? data.catIndex : 0;

					// pluginData.qd_ssr_car.elem.select2("val", itemNdx);
					// pluginData.qd_ssr_car.elem.trigger("select2-selecting", {object: window.qd_ssr_car[itemNdx]});
				// }

				if(typeof e.object !== "undefined"){
					// Resetando o carro
					pluginData.qd_ssr_car.elem.select2("data", -1).select2("data", null);
					
					// Resetando o ano
					if(typeof jqXHR !== "undefined" && typeof jqXHR.abort === "function")
						jqXHR.abort();
					pluginData.qd_ssr_year.elem.select2("data", -1).select2("data", null);
				}

				if(typeof data !== "undefined" && typeof data.catIndex !== "undefined"){
					pluginData.qd_ssr_car.elem.select2("val", data.catIndex);
					pluginData.qd_ssr_car.elem.trigger("select2-selecting", {object: window.qd_ssr_car[data.catIndex]});
				}
			});

			// Criando o select do carro
			pluginData.qd_ssr_car.elem = $(".qd_ssr_car").select2({ 
				placeholder: "Selecione ...",
				data: function() { return {results: window.qd_ssr_car}; }
			}).select2("data", -1).select2("data", null).on("select2-selecting", function(e, data){
				// Verificando se existem dados para gerar a URL
				var obj = (e.object || data.object);
				if(typeof obj === "undefined" || obj == null)
					return;

				var loading = selectLoading(pluginData.qd_ssr_year.elem, "qd_ssr_year");

				// Buscando os dados de ano via AJax
				var url = obj.href.indexOf("?") > -1 ? (e.object || data.object).href + "&lid=cc31ec67-dab5-49b4-be87-a6ce7953b115" : (e.object || data.object).href + "?lid=cc31ec67-dab5-49b4-be87-a6ce7953b115";
				
				if(typeof jqXHR !== "undefined" && typeof jqXHR.abort === "function")
					jqXHR.abort();

				jqXHR = $.ajax({
					url: url,
					dataType: "html",
					success: function(data){
						clearInterval(loading);

						var items = [];
						$(data).find(".Ano.do[class*='culo'] a").each(function(ndx){
							var $this = $(this);
							items.push({ id: ndx, text: $this.text().replace(/\s\([0-9]+\)/ig,""), href: $this.attr("href")});
						});

						window.qd_ssr_year = items;
						// if(pluginData.qd_ssr_year.allowAutoSelect)
							// pluginData.qd_ssr_year.elem.select2("val", 0);
						// else
							pluginData.qd_ssr_year.elem.select2("data", -1).select2("data", null);
					},
					error: function( jqXHR, textStatus, errorThrown){
						clearInterval(loading);

						if(textStatus != "abort")
							alert("Desculpe não foi possível buscar as informações de ano. Por favor recarregue a página.");
					}
				});
			});

			// Criando o select do carro
			pluginData.qd_ssr_year.elem = $(".qd_ssr_year").select2({ 
				placeholder: "Selecione ...",
				data: function() { return {results: window.qd_ssr_year}; }
			}).select2("data", -1).select2("data", null).on("select2-selecting", function(e){
				if(typeof e.object === "object")
					$(".qd_ssr_go").trigger("click", (e.object || ""));
			});

			// Botão de buscar
			$(".qd_ssr_go").click(function(e, data){
				try{
					// console.debug(mergeQueryString((data || pluginData.qd_ssr_year.elem.select2("data")).href, searchQuery));
					window.location.href = mergeQueryString((data || pluginData.qd_ssr_year.elem.select2("data")).href, searchQuery);
				}catch(error){
					window.alert("Preencha todos os campos.");
					log([error], "alerta");
				}
			});

			// Definindo o departamento corrente
			autoSelectOptions = function(){
				var myVtxctx = $.extend({}, vtxctx || {});
				var categoryUri;

				if(!(typeof myVtxctx === "object" && typeof myVtxctx.departmentName === "string")){
					// Tentando encontrar o <h3> com o nome do departamento
					var h3 = $($("#qd_select_smart_research").val()).find(".search-single-navigator h3");
					if(typeof myVtxctx.searchTerm === "string" && h3.length === 1){
						// Definindo dados para o departamento e ficticios para os demais	
						myVtxctx.departmentName = myVtxctx.categoryName = h3.text();
						// myVtxctx.departmentName = myVtxctx.categoryName = "teste";
						myVtxctx.departmentyId = myVtxctx.categoryId = 0;

						// Verificando se todos os links do departamento possuem a mesma categoria
						var equalsUrisCount = 0;
						var itemsElem = h3.find("+ul a");
						var linksArray;
						var lastItemText = -999;
						itemsElem.each(function(){
							var links = $(this).attr("href");
							if(links){
								linksArray = links.split("//").pop().split("/",3);
								if(linksArray.length === 3){
									// Verificando se o item que estamos contando tem o mesmo texto do item anterior
									if(lastItemText === linksArray[2] || lastItemText === -999)
										equalsUrisCount = equalsUrisCount + 1;
									else
										return false;
									
									// Definindo o último texto do link para verificar se não estamos contando links diferentes
									lastItemText = linksArray[2] || "";
								}
							}
						});
						if(equalsUrisCount !== 0 && itemsElem.length === equalsUrisCount){
							categoryUri = "//" + linksArray.join("/");
							myVtxctx.categoryName = "";
							myVtxctx.categoryId = -1;
						}
					}
					else
						return;
				}

				var deptId = null;
				var catIndex = null;

				// Procurando o id do departamento corrente no select
				for(var i in window.qd_ssr_maker){
					if(typeof window.qd_ssr_maker[i] === "function")
						continue;

					if(window.qd_ssr_maker[i].text.toLowerCase().trim() === myVtxctx.departmentName.toLowerCase().trim()){
						deptId = window.qd_ssr_maker[i].id;
						break;
					}
				}

				if(deptId !== null){
					// Procurando o ID da categoria
					if(myVtxctx.departmentName != myVtxctx.categoryName && myVtxctx.departmentyId != myVtxctx.categoryId){
						for(var k in window.qd_ssr_maker[i].items){
							if(typeof window.qd_ssr_maker[i].items[k] === "function")
								continue;
							if(typeof categoryUri === "string" && window.qd_ssr_maker[i].items[k].href.toLowerCase().trim().indexOf(categoryUri) > -1){
								catIndex = k;
								break;
							}
							else if(window.qd_ssr_maker[i].items[k].text.toLowerCase().trim() === myVtxctx.categoryName.toLowerCase().trim()){
								catIndex = k;
								break;
							}
						}

						// Informando que não é para selecionar o ano
						pluginData.qd_ssr_year.allowAutoSelect = false;	
					}
					else
						// Informando que não é para selecionar o modelo automaticamente
						pluginData.qd_ssr_maker.allowAutoSelect = false;

					pluginData.qd_ssr_maker.elem.select2("val", deptId);
					pluginData.qd_ssr_maker.elem.trigger("select2-selecting", {object: window.qd_ssr_maker[i], catIndex: catIndex});
				}
			};
			autoSelectOptions();
		};

		$(function(){
			try{
				QD_selectSmartResearch();
			}
			catch(e){
				log(["Ooops algo saiu errado!", e]);
			}
		});
	})();
})();