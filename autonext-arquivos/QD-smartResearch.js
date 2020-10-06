/* davids - 02/10/2020 13:53:12 GMT-0300 */
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")});(function(a){a.fn.getParent=a.fn.closest})(jQuery);(function($){"use strict";if(typeof $.fn.QD_SmartResearch==="function")return;var extTitle="Smart Research";var log=function(c,b){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var a;"object"===typeof c?(c.unshift("["+extTitle+"]\n"),a=c):a=["["+extTitle+"]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,a)}catch(d){try{console.info(a.join("\n"))}catch(e){}}else try{console.error.apply(console,a)}catch(f){try{console.error(a.join("\n"))}catch(g){}}else try{console.warn.apply(console,a)}catch(h){try{console.warn(a.join("\n"))}catch(k){}}}};window._QuatroDigital_InfinityScroll=window._QuatroDigital_InfinityScroll||{};var $infScroll=window._QuatroDigital_InfinityScroll;window._QuatroDigital_SmartResearch=window._QuatroDigital_SmartResearch||{};var $smartResearch=window._QuatroDigital_SmartResearch;var $empty=$("");var _document=$(document);var _html=$("html,body");var body=$("body");$.fn.QD_SmartResearch=function(opts){"use strict";var $this=$(this);var defaults={loadContent:".prateleira[id^=ResultItems]",shelfClass:".prateleira",filtersMenu:".search-multiple-navigator",linksMenu:".search-single-navigator",menuDepartament:".navigation-tabs .menu-departamento",mergeMenu:true,insertMenuAfter:".search-multiple-navigator h3:first",emptySearchElem:$('<div class="vtexsr-emptySearch"></div>'),elemLoading:'<div id="scrollLoading">Carregando ... </div>',emptySearchMsg:"<h3>Esta combinação de filtros não retornou nenhum resultado!</h3>",filterErrorMsg:"Houve um erro ao tentar filtrar a página!",usePopup:false,showLinks:true,mergeMenuList:true,popupAutoCloseSeconds:3,isSmartCheckout:true,invertOrder:false,filterScrollTop:function(shelfOffset){return shelfOffset.top-20},callback:function(){},shelfCallback:function(){},ajaxCallback:function(){},emptySearchCallback:function(){},authorizeUpdate:function(){return true},labelCallback:function(data){},initChangeCallback:function(event){},endChangeCallback:function(event){}};var options=$.extend({},defaults,opts);var elemLoading=$(options.elemLoading);var currentPage=2;var moreResults=true;var currentSearchUrl="";var urlFilters="";var searchUrl="";var animatingFilter=false;var loadContentE=$(options.loadContent);var filtersMenuE=$(options.filtersMenu);var labelCallbackData={};var ajaxCallbackObj={requests:0,filters:0,isEmpty:false};$smartResearch.ajaxCallbackObj=ajaxCallbackObj;var getSearchUrl=function(){var url,content,preg;$("script:not([src])").each(function(){content=$(this)[0].innerHTML;preg=/\/buscapagina\?.+&PageNumber=/i;if(content.search(/\/buscapagina\?/i)>-1){url=preg.exec(content);return false}});if(typeof url!=="undefined"&&typeof url[0]!=="undefined")return url[0];else{log("Não foi possível localizar a url de busca da página.\n Tente adicionar o .js ao final da página. \n[Método: getSearchUrl]");return""}};$infScroll.searchUrl=$infScroll.searchUrl||getSearchUrl();if($this.length<1){log("Nenhuma opção de filtro encontrada","Aviso");if(options.showLinks)$(options.linksMenu).css("visibility","visible").show();if(typeof $infScroll.buttonToTop==="object"&&$infScroll.buttonToTop instanceof $)$infScroll.buttonToTop.trigger("click");return $this}if(loadContentE.length<1){log("Elemento para destino da requisição não foi encontrado \n ("+loadContentE.selector+")");return false}if(filtersMenuE.length<1)log("O menu de filtros não foi encontrado \n ("+filtersMenuE.selector+")");var currentUrl=document.location.href;var linksMenuE=$(options.linksMenu);var prodOverlay=$('<div class="vtexSr-overlay"></div>');var departamentE=$(options.menuDepartament);var loadContentOffset=loadContentE.offset();var shelfJqxhr=null;var pageJqxhr=null;options.emptySearchElem.append(options.emptySearchMsg);loadContentE.before(prodOverlay);function exec(){setFilterMenu();fieldsetFormat();$this.each(function(){var _this=$(this);var label=_this.parent();if(!label.is("label")){label=_this.siblings("[for='"+(_this.attr("id")||(log("O input não possui ID")||""))+"']")}if(_this.is(":checked")){urlFilters+="&"+(_this.attr("rel")||"");label.addClass("sr_selected");_this.addClass("qd_sr_selected")}adjustText(_this);label.append('<span class="sr_box"></span><span class="sr_box2"></span>');_this.bind("change.qd_sr_change",function(event){if(options.initChangeCallback.call(this,event)===false)return false;inputAction.call(this);if(_this.is(":checked"))addFilter(_this);else removeFilter(_this);ajaxCallbackObj.filters=$this.filter(":checked").length;options.endChangeCallback.call(this,event)})});if(""!==urlFilters)addFilter($empty,true)}function mergeMenuSmartCheckout(){if(!options.mergeMenu)return false;var elem=linksMenuE;elem.insertAfter(options.insertMenuAfter)}function mergeMenu(){if(!options.mergeMenu)return false;var elem=departamentE;elem.insertAfter(options.insertMenuAfter);departamentMenuFormat(elem)}function mergeMenuList(){if(!options.mergeMenuList)return;var i=0;filtersMenuE.find("h3,h4").each(function(){var ul=linksMenuE.find("h3,h4").eq(i).next("ul");ul.insertAfter($(this));departamentMenuFormat(ul);i++})}function departamentMenuFormat(elem){elem.find("a").each(function(){var a=$(this);a.text(removeCounter(a.text()))})}function fieldsetClass(input){var fieldset=input.getParent("fieldset");var wrapper=fieldset.parent();if(fieldset.find("input:checked").length){fieldset.addClass("qd-sr-filtered");wrapper.addClass("qd-sr-on-"+fieldset.attr("data-qd-class"))}else{fieldset.removeClass("qd-sr-filtered");wrapper.removeClass("qd-sr-on-"+fieldset.attr("data-qd-class"))}}function fieldsetFormat(){labelCallbackData.fieldsetCount=0;labelCallbackData.tmpCurrentLabel={};filtersMenuE.find("fieldset").each(function(){var $t=$(this);var label=$t.find("label");var _class=($t.find("h5:first").text()||"").toLowerCase().replaceSpecialChars().replace(/\s/g,"-");var fieldsetClass="filtro_"+_class;labelCallbackData[fieldsetClass]={};if(label.length<1){$t.hide();return}if($t.find("a.ver-filtros").length)$t.addClass("qd-sr-show-more-results");$t.addClass(fieldsetClass).attr("data-qd-class",_class);label.each(function(ndx){var t=$(this);var v=t.find("input").val()||t.siblings("input#"+(t.attr("for")||(log("O label não tem 'for'","alerta")||"_"))).val()||"";var labelClass="sr_"+v.toLowerCase().replaceSpecialChars().replace(/\s/g,"-");labelCallbackData.tmpCurrentLabel={fieldsetParent:[$t,fieldsetClass],elem:t};labelCallbackData[fieldsetClass][ndx.toString()]={className:labelClass,title:v};t.addClass(labelClass).attr({title:v,index:ndx});options.labelCallback(labelCallbackData)});labelCallbackData.fieldsetCount++})}function inputAction(){if(null!==pageJqxhr)pageJqxhr.abort();if(null!==shelfJqxhr)shelfJqxhr.abort();$infScroll.currentPage=2;$infScroll.pages=9999999999999;$infScroll.moreResults=true}function addFilter(input,startedChecked){fieldsetClass(input);if(startedChecked)var filter=urlFilters;else var filter="&"+(input.attr("rel")||"");prodOverlay.fadeTo(300,.6);$infScroll.searchUrl=$infScroll.searchUrl+filter;$infScroll.searchUrl=$infScroll.searchUrl.replace(/PageNumber=[0-9]*/,"PageNumber=1");$infScroll.currentStatus=false;if((input.attr("data-sr-exec-ajax")||"")!="false")shelfJqxhr=$.ajax({url:$infScroll.searchUrl,success:filterAjaxSuccess,error:filterAjaxError});var label,labelFor;label=input.parent();if(!label.is("label")){labelFor=input.attr("id")||(log("O input não possui ID")||"");label=input.siblings("[for='"+labelFor+"']")}label.addClass("sr_selected");input.addClass("qd_sr_selected")}function removeFilter(input){fieldsetClass(input);var url=input.attr("rel")||"";prodOverlay.fadeTo(300,.6);$infScroll.searchUrl=$infScroll.searchUrl.replace("&"+url,"");$infScroll.searchUrl=$infScroll.searchUrl.replace(/PageNumber=[0-9]*/,"PageNumber=1");$infScroll.currentStatus=false;if((input.attr("data-sr-exec-ajax")||"")!="false")shelfJqxhr=$.ajax({url:$infScroll.searchUrl,success:filterAjaxSuccess,error:filterAjaxError});input.parent().removeClass("sr_selected");input.removeClass("qd_sr_selected")}function filterAjaxSuccess(data){prodOverlay.fadeTo(300,0,function(){$(this).hide()});updateContent($(data));ajaxCallbackObj.requests++;options.ajaxCallback(ajaxCallbackObj);_html.animate({scrollTop:options.filterScrollTop(loadContentOffset||{top:0,left:0})},500,function(){if(!animatingFilter)$infScroll.currentStatus=true})}function filterAjaxError(jqxhr,textStatus){if(textStatus==="abort")return;prodOverlay.fadeTo(300,0,function(){$(this).hide()});alert(options.filterErrorMsg);log("Houve um erro ao tentar fazer a requisição da página com filtros.");$infScroll.currentStatus=true}function updateContent($data){animatingFilter=true;if(!options.authorizeUpdate(ajaxCallbackObj))return false;var shelf=$data.filter(options.shelfClass);var shelfPage=loadContentE.find(options.shelfClass);(shelfPage.length>0?shelfPage:options.emptySearchElem).slideUp(600,function(){$(this).remove();if(options.usePopup)$(".boxPopUp2").vtexPopUp2();else options.emptySearchElem.remove();if(shelf.length>0){shelf.hide();loadContentE.append(shelf);options.shelfCallback();$(window).trigger("QuatroDigital.sr_insertedCallback");shelf.slideDown(600,function(){animatingFilter=false;$infScroll.currentStatus=true;$(window).trigger("QuatroDigital.sr_shelfCallback")});ajaxCallbackObj.isEmpty=false;body.removeClass("qd-sr-empty-search")}else{ajaxCallbackObj.isEmpty=true;if(options.usePopup)options.emptySearchElem.addClass("freeContent autoClose ac_"+options.popupAutoCloseSeconds).vtexPopUp2().stop(true).show();else{loadContentE.append(options.emptySearchElem);options.emptySearchElem.show().css("height","auto").fadeTo(300,.2,function(){options.emptySearchElem.fadeTo(300,1)})}options.emptySearchCallback(ajaxCallbackObj);body.addClass("qd-sr-empty-search")}})}function adjustText(input){var label,text,labelFor,labelIsSiblings;label=input.parent();labelIsSiblings=false;if(!label.is("label")){labelFor=input.attr("id")||""+log("O input não possui ID");label=input.siblings("[for='"+labelFor+"']");labelIsSiblings=true}text=label.text();text=removeCounter(text);if(labelIsSiblings)label.text(text);else label.text(text).prepend(input)}function removeCounter(text){return text.replace(/\([0-9]+\)/gi,function(a){return""})}function setFilterMenu(){if(!filtersMenuE.length)return;if(options.invertOrder)linksMenuE.insertBefore(filtersMenuE);else{linksMenuE.hide();filtersMenuE.show()}}if(!options.isSmartCheckout){if(body.hasClass("departamento"))mergeMenu();else if(body.hasClass("categoria")||body.hasClass("resultado-busca"))mergeMenuList()}else{mergeMenuSmartCheckout()}exec();options.callback();filtersMenuE.css("visibility","visible")}})(jQuery);