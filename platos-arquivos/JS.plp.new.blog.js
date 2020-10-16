/* PC-QUARTO - 16/10/2020 11:25:27 GMT */
"use strict";(function(){try{var Blog={init:function init(){Blog.bringPosts()},bringPosts:function bringPosts(){var urlPosts="https://blog.portalpos.com.br/wp-json/wp/v2/posts/?per_page=8&filter[orderby]=date&order=desc";var urlCategories="https://blog.portalpos.com.br/wp-json/wp/v2/categories?per_page=10";if(window.location.pathname=="/mz-indevelopment"||window.location.pathname=="/blackfriday"){if(window.location.href.indexOf("posanhanguera")>-1){urlPosts="https://blog.portalpos.com.br/wp-json/wp/v2/posts/?per_page=8&filter[orderby]=date&order=desc&tags=213"}else{urlPosts="https://blog.portalpos.com.br/wp-json/wp/v2/posts/?per_page=8&filter[orderby]=date&order=desc&tags=214"}}try{$.ajax({type:"GET",method:"GET",url:urlPosts}).done(function(dataTexts){var dataInfos=dataTexts;$.ajax({type:"GET",method:"GET",url:urlCategories}).done(function(dataBlocks){$(".mz-blogbrand__wrapper").appendTo(".mz-iterations__blog--title");var dataComponents=dataBlocks;dataInfos.forEach(function(itemInfo){dataComponents.filter(function(itemComp){if(itemInfo.categories[0]==itemComp.id){Blog.buildElementPost(itemInfo,itemComp)}})})}).fail(function(){console.error("Erro ao buscar posts do Blog - [2]");$(".mz-blog").hide()})}).fail(function(){console.error("Erro ao buscar posts do Blog - [1]");$(".mz-blog").hide()})}catch(e){$(".mz-blog").hide();console.log("Erro na request do blog: ",e.message)}},buildElementPost:function buildElementPost(itemInfo,itemComp){var wrapper=$(".mz-blog__wrapper");var urlPost=itemInfo.link;var namePost=itemInfo.title.rendered;var datePost=moment?moment(itemInfo.date).format("LL"):itemInfo.date;var flag=itemComp.name;var link=itemComp.link;var flagColor=itemComp.slug;var srcImage;try{$.ajax({async:true,type:"GET",method:"GET",url:"https://blog.portalpos.com.br/wp-json/wp/v2/media/".concat(itemInfo.featured_media,"?per_page=10")}).done(function(response){srcImage="https://blog.portalpos.com.br/".concat(response.media_details.sizes.thumbnail.source_url);var block='\n                            <div class="mz-blog__block mz-blog__block-integrated">\n                                <a href="'.concat(urlPost,'" style="display: block;" target="_blank" title="').concat(namePost,'">\n                                    <div class="mz-blog__block--image">\n                                        <img src="').concat(srcImage,'" style="width: 100%;" />\n                                    </div>\n                                    <div class="mz-blog__block--text">\n                                        <div class="mz-blog__block--text-flag ').concat(Blog.getCategoryClass(flagColor),'">').concat(flag,'</div>\n                                        <div class="mz-blog__block--text-title">').concat(namePost,'</div>\n                                        <div class="mz-blog__block--text-date">\n                                            <span>').concat(datePost,'</span>\n                                            <i class="fas fa-arrow-right"></i>\n                                        </div>\n                                    </div>\n                                </a>\n                            </div>\n                        ');wrapper.append(block);wrapper.addClass("mz-blog-on")}).fail(function(){console.error("[Blog] Imagem do post não encontrada!");var block='\n                            <div class="mz-blog__block mz-blog__block-integrated">\n                                <a href="'.concat(urlPost,'" style="display: block;" target="_blank" title="').concat(namePost,'">\n                                    <div class="mz-blog__block--image no-image">\n                                        <img src="https://portalpos2.vteximg.com.br/arquivos/portalpos-logo-mais-blog.png" />\n                                    </div>\n                                    <div class="mz-blog__block--text">\n                                        <div class="mz-blog__block--text-flag ').concat(Blog.getCategoryClass(flagColor),'">').concat(flag,'</div>\n                                        <div class="mz-blog__block--text-title">').concat(namePost,'</div>\n                                        <div class="mz-blog__block--text-date">\n                                            <span>').concat(datePost,'</span>\n                                            <i class="fas fa-arrow-right"></i>\n                                        </div>\n                                    </div>\n                                </a>\n                            </div>\n                        ');wrapper.append(block);wrapper.addClass("mz-blog-on");$(".mz-iterations__blog").addClass("mz-new-layout")})}catch(e){$(".mz-blog").hide();console.log("Erro na request individual dos posts: ",e.message)}},getCategoryClass:function getCategoryClass(category){switch(category){case"carreiras-e-mercado":return"orange";case"crescimento-pessoal":return"light-green";case"curiosidades":return"purple";case"tendencias-inovacao":return"green";case"voce-na-pos":return"blue";default:return""}}};Blog.init()}catch(e){console.log("Erro na instancia [Blog]: ",e)}})();