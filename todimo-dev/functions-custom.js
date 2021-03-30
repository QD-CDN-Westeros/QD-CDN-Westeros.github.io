//Converte de real para número
const realParaNumber = (texto) => {  
    var compativelComParseFloat = texto.replace("R$ ","");
    compativelComParseFloat = compativelComParseFloat.replace(".","");
    compativelComParseFloat = compativelComParseFloat.replace(",",".");
    var valor = parseFloat(compativelComParseFloat);
    return valor;
}

//Converte de número para real
const numberParaReal = (numero) => {  
    var formatado = "R$ " + numero.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    return formatado;
}

//Verificar usuário logado
const userLogged = () => {
  var userLogged = false;

  // $.ajax({
  //     url: "/no-cache/profileSystem/getProfile",    
  //     type: 'GET',
  //     cache: false,
  //     async: !1,
  //     success: function (data) {
  //       if( data.IsUserDefined ){
  //         userLogged = data.IsUserDefined;
  //       }
  //     },
  //     error: function (data) {
  //       console.log("Erro: ", data);
  //     }
  // }); 

  if( vtexjs.checkout.orderForm.loggedIn ){
    userLogged = true;
  }

  return userLogged;

}

//Converte string para URL válida
const convertStringToURL = (s) => {
  return s.split(' ').join('-').normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

//Primeira letra maiuscula
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

//Adiciona selo dos Produtos
const returnBrandSeal = (productId, target) => {
  var currentPostalCode = getCookieJobspace("jb-zipCodeCurrent");
  $.ajax({
    url: `/api/catalog_system/pub/products/search?fq=productId:${productId}`,
    type: 'GET',
    async: true,
    success: function (res) {
      res = res[0];

      //Exibe Selo de marca
      if(res.brandId != ""){
          let linkBrand = convertStringToURL(res.brand);

          var divBrand = `<div class="product-brand"><a href="/${linkBrand}" title="Ir para Marca ${res.brand}">`;

            if(res.brandImageUrl != null){
              divBrand += `<img src="${res.brandImageUrl}" alt="${res.brand}" title="Ir para Marca ${res.brand}" />`;
            }else{
              // console.log(`Product ${productId} - API Brand - Imagem de marca não cadastrada!`);
              return false;
            }

          divBrand += `</a></div>`;

          $(target).append(divBrand);
      }else{
        // console.log(`Product ${productId} - API Brand - Sem marca cadastrada!`);
        return false;
      }

    },
    error: function (data) {
      console.log("Erro: ", data);
    }
  });

}

const numberParaRealVtex = (valor) => {  

    valor = valor.toString().replace(/\D/g,"");
    valor = valor.toString().replace(/(\d)(\d{8})$/,"$1.$2");
    valor = valor.toString().replace(/(\d)(\d{5})$/,"$1.$2");
    valor = valor.toString().replace(/(\d)(\d{2})$/,"$1,$2");
    return valor  
}

//Adiciona selo dos Produtos
const returnSimuleCartPrice = (productSku, target) => {
  var currentPostalCode = getCookieJobspace("jb-zipCodeCurrent");

  var DataToSend = {
      'items': [{
          'id': productSku,
          'quantity': 1,
          'seller': '1'
      }],
      'postalCode': currentPostalCode,
      'country': 'BRA',
  };

  $.ajax({
      'type': 'POST',
      'dataType': 'json',
      'contentType': 'application/json',
      'url': '/api/checkout/pub/orderForms/simulation/?sc=1',
      'data': JSON.stringify(DataToSend),
      'success': function(result) {
          // console.log(result)

          if( (result.items.length) > 0 && (result.items[0].price != null) ){
            console.log(result.items[0], result.items[0].id + " -- " + result.items[0].availability + " -- " + result.items[0].sellerChain);
            let formattedPrice = numberParaRealVtex(result.items[0].price);
            let formattedListPrice = numberParaRealVtex(result.items[0].listPrice);
            let formattedSellingPrice = numberParaRealVtex(result.items[0].sellingPrice);

            $(target).append(`<span class="best-price-price" data-sellingprice="${formattedSellingPrice}" style="margin-left: 10px;">R$ ${formattedSellingPrice}</span>`);
          }            

          console.log(vtexjs.checkout.orderForm.shippingData)
      },
      'error': function(AjaxError) {
          console.log('Error')
      }
  });
}
function setCookieJobspace(cname, cvalue, exdays) {
    var d = new Date();
    //3days
    var val = 60 * 1000 * 60 * 24 * exdays;
    d.setTime(d.getTime() + (val));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookieJobspace(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function removeCookieJobspace(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function getInfoWhiteLabel() {

    vtexjs.session.setSessionParams().done(function (data) {

        var vtexSegmentToken = data.segmentToken;
        var vtexSessionToken = data.sessionToken;

        $.ajax({
            url: "/api/sessions/" + vtexSessionToken + "?items=*",
            type: 'GET',
            async: true,
            success: function (data) {
                // console.log("Session Token: ", vtexSessionToken);
                console.log(data);
            },
            error: function (data) {
                console.log("Erro: ", data);
            }
        });

        $.ajax({
            url: "/api/segments/" + vtexSegmentToken,
            type: 'GET',
            async: true,
            success: function (data) {
                // console.log("Segment Token: ", vtexSegmentToken);
                console.log(data);
            },
            error: function (data) {
                console.log("Erro: ", data);
            }
        });

    });

}

function changeInfoWhiteLabel(info_session) {

    console.log("CEP enviado para API Whitelabel Vtex: ", info_session)

    vtexjs.session.setSessionParams().done(function (data) {

        var vtexSessionToken = data.sessionToken;

        $.ajax({
            url: "/api/sessions/" + vtexSessionToken,
            type: 'POST',
            contentType: "application/json; charset=utf-8",
            async: true,
            data: JSON.stringify(info_session),
            success: function (data) {
                getInfoWhiteLabel();
                console.log(data);
                console.log("\n\n");

                document.location.reload(true);


                vtexjs.checkout.sendAttachment('shippingData', { address: { postalCode: document.cookie.split('jb-zipCodeCurrent=')[1].split(';')[0], country: 'BRA' } })

            },
            error: function (data) {
                console.log("Erro: ", data);
            }
        });

    });

}

// $(document).ready(function(){

// 	setTimeout(function(){
// 		getInfoWhiteLabel();		
// 	}, 800)

// })


//var info = { "public":{ "country":{ "value":"BRA" }, "postalCode":{ "value":"81570000" } } };
// var info_session = { "profile":{ "priceTables":{ "value":"sul" } } };
//Ordenação
const sortAlphabectMenu = (a,b) => (a.name.localeCompare(b.name));

function sortManualMenu(data, order, key) {

  const map = order.reduce((r, v, i) => ((r[v] = i), r), {})
  data = data.filter( ( elem, index, arr ) => order.indexOf( elem.id ) != -1 )
  data = data.sort((a, b) => map[a[key]] - map[b[key]]);

  return data;
}

var allDptosStore = []

//Funções
function returnChildren(itemChildren, nivel, qtdFilhos, qtdNetos, group, ordenacao){

  var itemChildrenArray = [];

  if(nivel == -1){
    return false;
  }

  //Ordena os filhos por ordem alfabética
  if( ordenacao == "alfabetica" ){
    itemChildren.sort(sortAlphabectMenu);    
  }

  $(itemChildren).each(function(index){
    var item = this;
      
    var navItem = `
      <li>
        <a class="nav-link" href="${item.url}" ${item.hasChildren ?`data-drop="mobile"` : `data-click="goLink"`}>${item.name}</a>

        ${item.hasChildren ?`
          <div class="dropdown-grandChildren">
            <ul class="dropdown-menu-grandChildren">
              ${isMobile() ?`
                <li class="nav-childrenBack">
                    <a href="javascript:void(0);" class="back nav-link">
                        <strong>Menu</strong>
                    </a>
                </li>
                <li><a href="${item.url}" class="nav-link dropdown-menu-featuredLink">Ir para ${item.name}</a></li>
              ` : `
              `}            
              ${returnChildren(item.children, nivel - 1, qtdFilhos, qtdNetos, group, ordenacao)}
            </ul>
          </div>              
            ` : `
          `}
      </li>
    `;

    //Filho
    if(nivel >= 2){
      if(index < qtdFilhos){
        itemChildrenArray.push(navItem);
      }      
    }

    //Neto
    if(nivel == 1){
      if(index < qtdNetos){
        itemChildrenArray.push(navItem);
      }
      if(index == qtdNetos){
        var navItem = `
          <li class="ver-todos"><a href="javascript:void(0)">Ver Todos</a></li>
        `;        
        itemChildrenArray.push(navItem);
      }

    }    
    
  });

  var resultFinal = itemChildrenArray.join("\n");  
  return resultFinal;
}

function returnDptos(options){

  $.ajax({
    url: "/api/catalog_system/pub/category/tree/" + options.nivel,
    async: true,
    crossDomain: true,
    method: "GET",
  }).then(function(data){

    //Ordena os departamentos
    if(options.group == "menu-verTodos"){
      // data.sort(sortAlphabectMenu);
    }else if(options.group == "menu-horizontal"){
      data = sortManualMenu(data, options.departamentos, "id")
    }else if(options.group == "menu-vertical"){
      data = sortManualMenu(data, options.departamentos, "id")
    }

    $(data).each(function(index){
      var item = this;

      var navItem = `
        <li class="nav-item" data-sort='${item.id}' data-name='${item.name}'>
          <a class="nav-link nav-linkSource" href="${item.url}" ${item.hasChildren ?`data-drop="mobile"` : `data-click="goLink"`}>${item.name}</a>

          ${item.hasChildren ?`
            <div class="dropdown-children">
              <ul class="dropdown-menu-children">

                ${isMobile() ?`
                  <li class="nav-childrenBack">
                      <a href="javascript:void(0);" class="back nav-link">
                          <strong>Menu</strong>
                      </a>
                  </li>
                  <li><a href="${item.url}" class="nav-link dropdown-menu-featuredLink">Ir para ${item.name}</a></li>
                ` : `
                `}
                ${returnChildren(item.children, options.nivel, options.qtdFilhos, options.qtdNetos, options.group, options.ordenacao)}
              </ul>
            </div>              
              ` : `
            `}
        </li>
      `;

      $(options.target).append(navItem);
    });

  })  

}

//Ao clicar em Ver Todos, retorna o departamento Pai em questão
$(document).on("click", "#top-menu .ver-todos", function(){
  var linkVerTodos = $(this).parents("li").children("a").attr("href");
  window.location = linkVerTodos;
})


//Esta função é exclusiva para Todimo, para incluir as bolinhas brandas. Para outras lojas, pode ser removido
function addBullet(){
 
  $("#top-menu .menu-dptos .nav-item").each(function(){
    $('<span class="nav-item-dot d-none d-lg-block">•</span>').insertAfter($(this));
  }); 
  $("#top-menu .menu-dptos .nav-item-dot:last-of-type").remove();

};


$(document).ready(function(){

  if(!isMobile()){
    //Quais departamentos quer que apareça

    var idsDepartamentsMenuHorizontal = {
      "departamentos" : [9, 3, 10, 7, 8, 156, 2, 4, 5, 6],
      "nivel" : 2,
      "qtdFilhos": 10,
      "qtdNetos": 5
    };      

    idsDepartamentsMenuHorizontal.target = "#top-menu .menu-dptos";
    idsDepartamentsMenuHorizontal.group = "menu-horizontal";    

    // console.time("Menu Horizontal levou: ");
    returnDptos(idsDepartamentsMenuHorizontal);
    // console.timeEnd("Menu Horizontal levou: ");

    setTimeout(function(){
      addBullet();
    }, 1000);
  }

})

$(document).ready(function(){

  //Cria o Ver Todos do menu horizontal
  let idAllDepartaments = {
    "departamentos": "all",
    "nivel": 2,
    "qtdFilhos": 100,
    "qtdNetos": 100,
    "target": "#top-menu .menu-all-dptos .dropdown-menu-all",
    "group": "menu-verTodos"
  };    
  
  // console.time("Menu Horizontal - Ver Todos - levou: ");
  returnDptos(idAllDepartaments);
  // console.timeEnd("Menu Horizontal - Ver Todos - levou: ");
 
})

/* [MOBILE] */
if(isMobile()){

  //[MOBILE] Ao clicar, abre os filhos
  $(document).on("click", ".recebe-menu-mobile .nav-linkSource[data-drop='mobile'], .dpto-menuNavigator .nav-linkSource[data-drop='mobile']", function(){
      $(this).next('.dropdown-children').addClass("opened")
  });
  //[MOBILE] Ao clicar, fecha os filhos
  $(document).on("click", ".dropdown-menu-children > .nav-childrenBack .back.nav-link", function(){
      $(".dropdown-children").removeClass("opened")
  });

  //[MOBILE] Ao clicar, abre os netos
  $(document).on("click", ".recebe-menu-mobile .dropdown-menu-children > li > .nav-link[data-drop='mobile'], .dpto-menuNavigator .dropdown-menu-children > li > .nav-link[data-drop='mobile']", function(){
      $(this).next('.dropdown-grandChildren').addClass("opened")
  });
  //[MOBILE] Ao clicar, fecha os filhos
  $(document).on("click", ".dropdown-menu-grandChildren > .nav-childrenBack .back.nav-link", function(){
      $(".dropdown-grandChildren").removeClass("opened")
  });

  //[MOBILE] Ao clicar, abre os netos
  $(document).on("click", ".menu-departamento .search-single-navigator h5", function(){
      $(this).next().addClass("opened")
  });

  //[MOBILE] Ao clicar, fecha os filhos
  $(document).on("click", ".menu-departamento .search-single-navigator h5 + ul .back.nav-link", function(){
      $(".menu-departamento .search-single-navigator h5 + ul").removeClass("opened")
  });  

  //[MOBILE]Adiciona loading quando clica em um link do menu lateral
  $(document).on("click", ".nav-item .nav-link[data-click='goLink']", function(){
      $(this).addClass("clicked")
  });

  setTimeout(function(){
    //[MOBILE] Copiar o menu Ver Todos para o mobile
    $(".recebe-menu-mobile").prepend($(".dropdown-menu-all"));

    //[MOBILE] Remove os links dos links que tem filho
    $(".nav-item .nav-link[data-drop='mobile']").each(function(){
      $(this).attr("href", "javascript:void(0)");        
    })      
  }, 2000)

}

/**
 * @example
 *   // Vitrine
 *   <div class="your-classe js--lazyload has--lazyload" data-noscript="">
 *       <noscript>$product.GetImageTag(30)</noscript>
 *   </div>
 *
 *   // Placeholder
 *   <div class="your-class js--lazyload has--lazyload" data-noscript="">
 *       <noscript><vtex:contentPlaceHolder id="Main-Banner" /></noscript>
 *   </div>
 */
(function(window, factory) {
    var lazySizes = factory(window, window.document);
    window.lazySizes = lazySizes;
    if(typeof module == 'object' && module.exports){
        module.exports = lazySizes;
    }
}(window, function l(window, document) {
    'use strict';
    /*jshint eqnull:true */
    if(!document.getElementsByClassName){return;}

    var lazysizes, lazySizesConfig;

    var docElem = document.documentElement;

    var Date = window.Date;

    var supportPicture = window.HTMLPictureElement;

    var _addEventListener = 'addEventListener';

    var _getAttribute = 'getAttribute';

    var addEventListener = window[_addEventListener];

    var setTimeout = window.setTimeout;

    var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

    var requestIdleCallback = window.requestIdleCallback;

    var regPicture = /^picture$/i;

    var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

    var regClassCache = {};

    var forEach = Array.prototype.forEach;

    var hasClass = function(ele, cls) {
        if(!regClassCache[cls]){
            regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        }
        return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
    };

    var addClass = function(ele, cls) {
        if (!hasClass(ele, cls)){
            ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
        }
    };

    var removeClass = function(ele, cls) {
        var reg;
        if ((reg = hasClass(ele,cls))) {
            ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
        }
    };

    var addRemoveLoadEvents = function(dom, fn, add){
        var action = add ? _addEventListener : 'removeEventListener';
        if(add){
            addRemoveLoadEvents(dom, fn);
        }
        loadEvents.forEach(function(evt){
            dom[action](evt, fn);
        });
    };

    var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
        var event = document.createEvent('CustomEvent');

        if(!detail){
            detail = {};
        }

        detail.instance = lazysizes;

        event.initCustomEvent(name, !noBubbles, !noCancelable, detail);

        elem.dispatchEvent(event);
        return event;
    };

    var updatePolyfill = function (el, full){
        var polyfill;
        if( !supportPicture && ( polyfill = (window.picturefill || lazySizesConfig.pf) ) ){
            polyfill({reevaluate: true, elements: [el]});
        } else if(full && full.src){
            el.src = full.src;
        }
    };

    var getCSS = function (elem, style){
        return (getComputedStyle(elem, null) || {})[style];
    };

    var getWidth = function(elem, parent, width){
        width = width || elem.offsetWidth;

        while(width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth){
            width =  parent.offsetWidth;
            parent = parent.parentNode;
        }

        return width;
    };

    var rAF = (function(){
        var running, waiting;
        var firstFns = [];
        var secondFns = [];
        var fns = firstFns;

        var run = function(){
            var runFns = fns;

            fns = firstFns.length ? secondFns : firstFns;

            running = true;
            waiting = false;

            while(runFns.length){
                runFns.shift()();
            }

            running = false;
        };

        var rafBatch = function(fn, queue){
            if(running && !queue){
                fn.apply(this, arguments);
            } else {
                fns.push(fn);

                if(!waiting){
                    waiting = true;
                    (document.hidden ? setTimeout : requestAnimationFrame)(run);
                }
            }
        };

        rafBatch._lsFlush = run;

        return rafBatch;
    })();

    var rAFIt = function(fn, simple){
        return simple ?
            function() {
                rAF(fn);
            } :
            function(){
                var that = this;
                var args = arguments;
                rAF(function(){
                    fn.apply(that, args);
                });
            }
        ;
    };

    var throttle = function(fn){
        var running;
        var lastTime = 0;
        var gDelay = 125;
        var rICTimeout = lazySizesConfig.ricTimeout;
        var run = function(){
            running = false;
            lastTime = Date.now();
            fn();
        };
        var idleCallback = requestIdleCallback && lazySizesConfig.ricTimeout ?
            function(){
                requestIdleCallback(run, {timeout: rICTimeout});

                if(rICTimeout !== lazySizesConfig.ricTimeout){
                    rICTimeout = lazySizesConfig.ricTimeout;
                }
            } :
            rAFIt(function(){
                setTimeout(run);
            }, true)
        ;

        return function(isPriority){
            var delay;

            if((isPriority = isPriority === true)){
                rICTimeout = 33;
            }

            if(running){
                return;
            }

            running =  true;

            delay = gDelay - (Date.now() - lastTime);

            if(delay < 0){
                delay = 0;
            }

            if(isPriority || (delay < 9 && requestIdleCallback)){
                idleCallback();
            } else {
                setTimeout(idleCallback, delay);
            }
        };
    };

    //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
    var debounce = function(func) {
        var timeout, timestamp;
        var wait = 99;
        var run = function(){
            timeout = null;
            func();
        };
        var later = function() {
            var last = Date.now() - timestamp;

            if (last < wait) {
                setTimeout(later, wait - last);
            } else {
                (requestIdleCallback || run)(run);
            }
        };

        return function() {
            timestamp = Date.now();

            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
        };
    };

    (function(){
        var prop;

        var lazySizesDefaults = {
            lazyClass: 'js--lazyload',
            loadedClass: 'is--lazyloaded',
            loadingClass: 'has--lazyloading',
            preloadClass: 'js--lazypreload',
            errorClass: 'has--lazyerror',
            //strictClass: 'lazystrict',
            autosizesClass: 'lazyautosizes',
            srcAttr: 'data-src',
            srcsetAttr: 'data-srcset',
            sizesAttr: 'data-sizes',
            //preloadAfterLoad: false,
            minSize: 40,
            customMedia: {},
            init: true,
            expFactor: 1.5,
            hFac: 0.8,
            // loadMode: 2,
            loadMode: 1,
            loadHidden: true,
            // ricTimeout: 300,
            ricTimeout: 180,
        };

        lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

        for(prop in lazySizesDefaults){
            if(!(prop in lazySizesConfig)){
                lazySizesConfig[prop] = lazySizesDefaults[prop];
            }
        }

        window.lazySizesConfig = lazySizesConfig;

        setTimeout(function(){
            if(lazySizesConfig.init){
                init();
            }
        });
    })();

    var loader = (function(){
        var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

        var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;

        var defaultExpand, preloadExpand, hFac;

        var regImg = /^img$/i;
        var regIframe = /^iframe$/i;

        var supportScroll = ('onscroll' in window) && !(/glebot/.test(navigator.userAgent));

        var shrinkExpand = 0;
        var currentExpand = 0;

        var isLoading = 0;
        var lowRuns = -1;

        var resetPreloading = function(e){
            isLoading--;
            if(e && e.target){
                addRemoveLoadEvents(e.target, resetPreloading);
            }

            if(!e || isLoading < 0 || !e.target){
                isLoading = 0;
            }
        };

        var isNestedVisible = function(elem, elemExpand){
            var outerRect;
            var parent = elem;
            var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';

            eLtop -= elemExpand;
            eLbottom += elemExpand;
            eLleft -= elemExpand;
            eLright += elemExpand;

            while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
                visible = ((getCSS(parent, 'opacity') || 1) > 0);

                if(visible && getCSS(parent, 'overflow') != 'visible'){
                    outerRect = parent.getBoundingClientRect();
                    visible = eLright > outerRect.left &&
                        eLleft < outerRect.right &&
                        eLbottom > outerRect.top - 1 &&
                        eLtop < outerRect.bottom + 1
                    ;
                }
            }

            return visible;
        };

        var checkElements = function() {
            var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;

            var lazyloadElems = lazysizes.elements;

            if((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

                i = 0;

                lowRuns++;

                if(preloadExpand == null){
                    if(!('expand' in lazySizesConfig)){
                        lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
                    }

                    defaultExpand = lazySizesConfig.expand;
                    preloadExpand = defaultExpand * lazySizesConfig.expFactor;
                }

                if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
                    currentExpand = preloadExpand;
                    lowRuns = 0;
                } else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
                    currentExpand = defaultExpand;
                } else {
                    currentExpand = shrinkExpand;
                }

                for(; i < eLlen; i++){

                    if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

                    if(!supportScroll){unveilElement(lazyloadElems[i]);continue;}

                    if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
                        elemExpand = currentExpand;
                    }

                    if(beforeExpandVal !== elemExpand){
                        eLvW = innerWidth + (elemExpand * hFac);
                        elvH = innerHeight + elemExpand;
                        elemNegativeExpand = elemExpand * -1;
                        beforeExpandVal = elemExpand;
                    }

                    rect = lazyloadElems[i].getBoundingClientRect();

                    if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
                        (eLtop = rect.top) <= elvH &&
                        (eLright = rect.right) >= elemNegativeExpand * hFac &&
                        (eLleft = rect.left) <= eLvW &&
                        (eLbottom || eLright || eLleft || eLtop) &&
                        (lazySizesConfig.loadHidden || getCSS(lazyloadElems[i], 'visibility') != 'hidden') &&
                        ((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
                        unveilElement(lazyloadElems[i]);
                        loadedSomething = true;
                        if(isLoading > 9){break;}
                    } else if(!loadedSomething && isCompleted && !autoLoadElem &&
                        isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
                        (preloadElems[0] || lazySizesConfig.preloadAfterLoad) &&
                        (preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto')))){
                        autoLoadElem = preloadElems[0] || lazyloadElems[i];
                    }
                }

                if(autoLoadElem && !loadedSomething){
                    unveilElement(autoLoadElem);
                }
            }
        };

        var throttledCheckElements = throttle(checkElements);

        var switchLoadingClass = function(e){

            let elementCurrent = $(e.target).attr("data-lazytarget");

            // console.groupCollapsed("Lazyload");
            //     console.log("Lazyload - Evento carregado com sucesso: ", elementCurrent);
            // console.groupEnd();

            if( elementCurrent == "bannerslider-desktop" || elementCurrent == "bannerslider-mobile" ){
                slickHome_carousel();
            }

            if( elementCurrent == "navegue-por-categoria" ){
                addNameCatNav();
            }            

            if( elementCurrent == "grandes-marcas"){
                slickHome_grandesMarcas()
            }

            if( elementCurrent == "nossas-lojas" ){
                modalNossasLojas();
            }

            if( elementCurrent == "newsletter" ){
                createFormNewsletter()
            }            

            addClass(e.target, lazySizesConfig.loadedClass);
            removeClass(e.target, lazySizesConfig.loadingClass);
            addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
            triggerEvent(e.target, 'is--lazyloaded');            
        };

        var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
        var rafSwitchLoadingClass = function(e){
            rafedSwitchLoadingClass({target: e.target});
        };

        var changeIframeSrc = function(elem, src){
            try {
                elem.contentWindow.location.replace(src);
            } catch(e){
                elem.src = src;
            }
        };

        var handleSources = function(source){
            var customMedia;

            var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

            if( (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
                source.setAttribute('media', customMedia);
            }

            if(sourceSrcset){
                source.setAttribute('srcset', sourceSrcset);
            }
        };

        var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
            var src, srcset, parent, isPicture, event, firesLoad;

            if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

                if(sizes){
                    if(isAuto){
                        addClass(elem, lazySizesConfig.autosizesClass);
                    } else {
                        elem.setAttribute('sizes', sizes);
                    }
                }

                srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
                src = elem[_getAttribute](lazySizesConfig.srcAttr);

                if(isImg) {
                    parent = elem.parentNode;
                    isPicture = parent && regPicture.test(parent.nodeName || '');
                }

                firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

                event = {target: elem};

                if(firesLoad){
                    addRemoveLoadEvents(elem, resetPreloading, true);
                    clearTimeout(resetPreloadingTimer);
                    resetPreloadingTimer = setTimeout(resetPreloading, 2500);

                    addClass(elem, lazySizesConfig.loadingClass);
                    addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
                }

                if(isPicture){
                    forEach.call(parent.getElementsByTagName('source'), handleSources);
                }

                if(srcset){
                    elem.setAttribute('srcset', srcset);
                } else if(src && !isPicture){
                    if(regIframe.test(elem.nodeName)){
                        changeIframeSrc(elem, src);
                    } else {
                        elem.src = src;
                    }
                }

                if(isImg && (srcset || isPicture)){
                    updatePolyfill(elem, {src: src});
                }
            }

            if(elem._lazyRace){
                delete elem._lazyRace;
            }
            removeClass(elem, lazySizesConfig.lazyClass);

            rAF(function(){
                if( !firesLoad || (elem.complete && elem.naturalWidth > 1)){
                    if(firesLoad){
                        resetPreloading(event);
                    } else {
                        isLoading--;
                    }
                    switchLoadingClass(event);
                }
            }, true);
        });

        var unveilElement = function (elem){
            var detail;

            var isImg = regImg.test(elem.nodeName);

            //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
            var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
            var isAuto = sizes == 'auto';

            if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)){return;}

            detail = triggerEvent(elem, 'lazyunveilread').detail;

            if(isAuto){
                 autoSizer.updateElem(elem, true, elem.offsetWidth);
            }

            elem._lazyRace = true;
            isLoading++;

            lazyUnveil(elem, detail, isAuto, sizes, isImg);
        };

        var onload = function(){
            if(isCompleted){return;}
            if(Date.now() - started < 999){
                setTimeout(onload, 999);
                return;
            }
            var afterScroll = debounce(function(){
                lazySizesConfig.loadMode = 3;
                throttledCheckElements();
            });

            isCompleted = true;

            lazySizesConfig.loadMode = 3;

            throttledCheckElements();

            addEventListener('scroll', function(){
                if(lazySizesConfig.loadMode == 3){
                    lazySizesConfig.loadMode = 2;
                }
                afterScroll();
            }, true);
        };

        return {
            _: function(){
                started = Date.now();

                lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
                preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
                hFac = lazySizesConfig.hFac;

                addEventListener('scroll', throttledCheckElements, true);

                addEventListener('resize', throttledCheckElements, true);

                if(window.MutationObserver){
                    new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
                } else {
                    docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
                    docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
                    setInterval(throttledCheckElements, 999);
                }

                addEventListener('hashchange', throttledCheckElements, true);

                //, 'fullscreenchange'
                ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function(name){
                    document[_addEventListener](name, throttledCheckElements, true);
                });

                if((/d$|^c/.test(document.readyState))){
                    onload();
                } else {
                    addEventListener('load', onload);
                    document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
                    setTimeout(onload, 20000);
                }

                if(lazysizes.elements.length){
                    checkElements();
                    rAF._lsFlush();
                } else {
                    throttledCheckElements();
                }
            },
            checkElems: throttledCheckElements,
            unveil: unveilElement
        };
    })();


    var autoSizer = (function(){
        var autosizesElems;

        var sizeElement = rAFIt(function(elem, parent, event, width){
            var sources, i, len;
            elem._lazysizesWidth = width;
            width += 'px';

            elem.setAttribute('sizes', width);

            if(regPicture.test(parent.nodeName || '')){
                sources = parent.getElementsByTagName('source');
                for(i = 0, len = sources.length; i < len; i++){
                    sources[i].setAttribute('sizes', width);
                }
            }

            if(!event.detail.dataAttr){
                updatePolyfill(elem, event.detail);
            }
        });
        var getSizeElement = function (elem, dataAttr, width){
            var event;
            var parent = elem.parentNode;

            if(parent){
                width = getWidth(elem, parent, width);
                event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

                if(!event.defaultPrevented){
                    width = event.detail.width;

                    if(width && width !== elem._lazysizesWidth){
                        sizeElement(elem, parent, event, width);
                    }
                }
            }
        };

        var updateElementsSizes = function(){
            var i;
            var len = autosizesElems.length;
            if(len){
                i = 0;

                for(; i < len; i++){
                    getSizeElement(autosizesElems[i]);
                }
            }
        };

        var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

        return {
            _: function(){
                autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
                addEventListener('resize', debouncedUpdateElementsSizes);
            },
            checkElems: debouncedUpdateElementsSizes,
            updateElem: getSizeElement
        };
    })();

    var init = function(){
        if(!init.i){
            init.i = true;
            autoSizer._();
            loader._();
        }
    };

    lazysizes = {
        cfg: lazySizesConfig,
        autoSizer: autoSizer,
        loader: loader,
        init: init,
        uP: updatePolyfill,
        aC: addClass,
        rC: removeClass,
        hC: hasClass,
        fire: triggerEvent,
        gW: getWidth,
        rAF: rAF,
    };

    return lazysizes;
}
));

(function(window, factory) {
    var globalInstall = function(){
        factory(window.lazySizes);
        window.removeEventListener('lazyunveilread', globalInstall, true);
    };

    factory = factory.bind(null, window, window.document);

    if(typeof module == 'object' && module.exports){
        factory(require('lazysizes'));
    } else if(window.lazySizes) {
        globalInstall();
    } else {
        window.addEventListener('lazyunveilread', globalInstall, true);
    }
}(window, function(window, document, lazySizes) {
    /*jshint eqnull:true */
    'use strict';

    var dummyParent = {nodeName: ''};
    var supportPicture = !!window.HTMLPictureElement && ('sizes' in document.createElement('img'));
    var config = (window.lazySizes && lazySizes.cfg) || window.lazySizesConfig;

    var handleLoadingElements = function(e){
        var i, isResponsive, hasTriggered, onload, loading;

        var loadElements = e.target.querySelectorAll('img, iframe');

        for(i = 0; i < loadElements.length; i++){
            isResponsive = loadElements[i].getAttribute('srcset') || (loadElements[i].parentNode || dummyParent).nodeName.toLowerCase() == 'picture';

            if(!supportPicture && isResponsive){
                lazySizes.uP(loadElements[i]);
            }

            if(!loadElements[i].complete && (isResponsive || loadElements[i].src)){
                e.detail.firesLoad = true;

                if(!onload || !loading){
                    loading = 0;
                    /*jshint loopfunc:true */
                    onload = function(evt){
                        loading--;
                        if((!evt || loading < 1) && !hasTriggered){
                            hasTriggered = true;
                            e.detail.firesLoad = false;
                            lazySizes.fire(e.target, '_lazyloaded', {}, false, true);
                        }

                        if(evt && evt.target){
                            evt.target.removeEventListener('load', onload);
                            evt.target.removeEventListener('error', onload);
                        }
                    };

                    setTimeout(onload, 3500);
                }

                loading++;

                loadElements[i].addEventListener('load', onload);
                loadElements[i].addEventListener('error', onload);
            }
        }
    };

    if(!config){
        config = {};
        window.lazySizesConfig = config;
    }

    config.getNoscriptContent =  function(noScript){
        return noScript.textContent || noScript.innerText;
    };

    window.addEventListener('lazybeforeunveil', function(e){
        if(e.detail.instance != lazySizes || e.defaultPrevented || e.target.getAttribute('data-noscript') == null){return;}

        var noScript = e.target.querySelector('noscript, script[type*="html"]') || {};
        var content = config.getNoscriptContent(noScript);

        if(content){
            e.target.innerHTML = content;
            handleLoadingElements(e);
        }
    });
}));
//////////////////////////////////////////INICIO - [FUNCOES]

//LOGIN
function atualizaUserLogin() {

    $('.login-header .null-login').remove();

    if (userLogged()) {
        $(".login-form-bts").show();
        $('header .icons-header .welcome').addClass('usuarioLogado');
        $('header .login-header #lnkLogin').remove();
        $('header .login-header svg path').attr('fill', '#007943');
    }

}

function atualizaMiniCart() {

    //Atualiza quantidade
    var qtdeMiniCart = $('.amount-items-em').text();
    $('.mini-cart-qtde').text(qtdeMiniCart);


    //Remove texto extra do preço do produto
    $(".mini-cart .minicart-middle .vtexsc-productList tbody > tr").each(function () {
        $(this).find(".bestPrice").addClass("terste");
        $(this).find(".bestPrice").text($(this).find(".bestPrice").text().split("(")[0].trim());
    });

}

//////////////////////////////////////////FIM - [FUNCOES]


/* [GERAL] */

//[OVERLAY] Alterna entre abrir e fechar
$('.overlay').click(function () {

    $('.overlay').fadeToggle();
    $('.overlay').removeClass('overlayMenu');

    $('.mini-cart').removeClass('minicart-open');

    $('#menu-mobile').removeClass('open-menu-mobile');
    $("#menu-mobile").removeClass("overflowY");

    $('.filters-category').removeClass('open-filters');

    $('html').removeClass("noScroll");
});

function getSellerNameById(sellerId) {
    var dict = {
        "todimocba": "Todimo Carmindo de Campos Cuiabá-MT",
        "todimovgd": "Todimo Couto Magalhâes Varzea Grande-MT",
        "todimocac": "Todimo Cáceres-MT",
        "todimosnp": "Todimo Sinop-MT",
        "todimocdms": "Todimo CD Joaquim Murtinho Campo Grande-MS",
        "todimornd": "Todimo Rondonópolis-MT",
        "todimocdlnd": "Todimo CD Av Fernando Cerquira C.Coimbra Londrina-PR",
        "todimolnd": "Todimo Av. Tiradentes Londrina-PR",
        "todimosrs": "Todimo Sorriso-MT",
        "todimohc": "Todimo Av. Miguel Sutil Cuiabá-MT",
        "todimocc": "Todimo Saul Elkind Londrina-PR",
        "todimotj": "Todimo Av. Fernado Correa Cuiabá-MT",
        "todimocpa": "Todimo Rua Pará CPA Cuiaba-MT",
        "todimocdmt": "Todimo CD Rod. Palmiro P. de Barros Cuiabá-MT",
        "todimopnt": "Todimo Pontes e Lacerda-MT",
        "todimoarp": "Todimo Arapongas-PR",
        "todimoapc": "Todimo Apucarana-PR",
        "todimopva": "Todimo Primavera do Leste-MT",
        "todimobga": "Todimo Barra do Garças-MT",
        "todimoarn": "Todimo Av. Agrícola Paes de Barros Cuiabá-MT",
        "todimolrv": "Todimo Lucas do Rio Verde-MT",
        "todimotga": "Todimo Tangará da Serra-MT",
        "todimonmt": "Todimo Nova Mutum-MT",
        "todimocgd": "Todimo Min. João Arinos Campo Grande-MS",
        "todimoumu": "Todimo Umuarama-PR",
        "todimogua": "Todimo Guarapuava-PR",
        "todimobnd": "Todimo Av. Bandeirantes Campo Grande-MS",
        "todimojlc": "Todimo Av. Júlio de Castilho Campo Grande-MS",
        "todimodou": "Todimo Dourados-MS"
    }

    return (dict[sellerId] || "Todimo")

}

function infoCarrinho() {

    $('td.cartSkuName h4 a:not(.checked)').each(function (index, element) {

        var items = vtexjs.checkout.orderForm.items;
        var htmlInfoShipping = '';

        $.each(items, function (indexInArray, valueOfElement) {
            if (valueOfElement.skuName == $(element).text()) {
                //console.log('ahoooy2');
                // $('.cartSkuName a').text() o cara que vc vai colocara a classe no parent()
                //console.log(valueOfElement.skuName) //é nome que vai ter no cart
                //console.log(valueOfElement.id)//id que vai ser comparado com o logistic info
                //console.log(vtexjs.checkout.orderForm.shippingData.logisticsInfo)//logistic info

                var logisticInfo = vtexjs.checkout.orderForm.shippingData.logisticsInfo;
                var formOrder = vtexjs.checkout.orderForm;
                //console.log(formOrder, 'ahoy');
                for (j in logisticInfo) {
                    //console.log(logisticInfo[j].itemId, 'idlogis');
                    //console.log(valueOfElement.id, 'idelem');
                    if (logisticInfo[j].itemId == valueOfElement.id) {
                        //console.log(logisticInfo[j].selectedDeliveryChannel, 'teste');


                        $(element).addClass('checked');

                        var slas = logisticInfo[j].slas;
                        var nameShipping = valueOfElement.seller;

                        $(element).parents('tr').addClass(logisticInfo[j].selectedDeliveryChannel).attr('data-indice', j).attr('data-nameSeller', nameShipping);

                        if ($('.title_delivery').length === 0) {
                            $('.mini-cart .minicart-middle .vtexsc-productList tbody').prepend('<tr class="title_delivery"><td><i class="icon-truck-cart" /><strong>Receber em casa</strong></td></tr><tr class="title_pickup-in-point"><td><i class="icon-box-cart" /><strong>Retirar na loja</strong></td></tr>');
                        }

                        // console.log(nameClass);
                        // console.log($(element).parents('tr').html());

                        var selectedSla;
                        for (k in slas) {
                            //console.log(slas[k], 'slas-k');
                            if (logisticInfo[j].selectedSla == slas[k].id && logisticInfo[j].selectedDeliveryChannel == slas[k].deliveryChannel) {
                                selectedSla = slas[k];
                                break;
                            }
                        }
                        if (selectedSla) {
                            var dataEntrega = selectedSla.shippingEstimate;
                            //console.log(dataEntrega);
                            if (dataEntrega.indexOf('bd') > -1) {
                                dataEntrega = dataEntrega.replace('hbd', ' dias').replace('bd', ' dias');
                            } else {
                                dataEntrega = dataEntrega.replace('hbd', ' horas').replace('bd', ' horas');
                            }

                            htmlInfoShipping = '<div class="info-' + logisticInfo[j].selectedDeliveryChannel + '" data-indice="' + j + '"><p><strong>' + getSellerNameById(nameShipping) + '</strong></p><p><strong>Prazo: </strong>' + dataEntrega + ' após pagamento.</p></div>';
                            //console.log($(element).parents('div[data-indice="' + j + '"]'), 'trsss');
                            // if (!$(element).parents('div[data-indice="'+j+'"]').length) {
                            $('div[data-indice="' + j + '"]').remove();
                            $(element).parents('tr[data-indice="' + j + '"]').after(htmlInfoShipping);
                            // }
                        }
                    }
                }
            }
        });
    });

    $('.mini-cart .minicart-middle .vtexsc-productList tbody>tr').each(function (index, element) {
        // element == this
        var elIndex = $(element).attr('data-indice');
        var qlnome = $('.mini-cart .minicart-middle [data-indice="' + elIndex + '"]');
        if ($(element).is('.delivery')) {
            $('.title_delivery').after(qlnome);
        } else if ($(element).is('.title_pickup-in-point')) {
            $('.title_pickup-in-point').after(qlnome);
        }
    });

    if ($('.mini-cart .minicart-middle .vtexsc-productList tbody>tr.delivery').length === 0) {
        $('.mini-cart .minicart-middle .vtexsc-productList tbody>tr.title_delivery').hide();
    } else {
        $('.mini-cart .minicart-middle .vtexsc-productList tbody>tr.title_delivery').show();
    }

    if ($('.mini-cart .minicart-middle .vtexsc-productList tbody>tr.pickup-in-point').length === 0) {
        $('.mini-cart .minicart-middle .vtexsc-productList tbody>tr.title_pickup-in-point').hide();
    } else {
        $('.mini-cart .minicart-middle .vtexsc-productList tbody>tr.title_pickup-in-point').show();
    }
}
function infoCarrinhoQtd() {
    $('.vtexsc-productList tr').each(function (index, element) {
        var cartItem = $(this);
        var cartItemA = $(this).find('td.cartSkuName h4 a');
        var items = vtexjs.checkout.orderForm.items;
        items.forEach(function (item) {
            if (cartItemA.attr('href') == item.detailUrl && item.unitMultiplier != 1) {
                $(cartItem).attr('ItemId', item.id)
                $(cartItem).find('.vtexsc-skuQtt').append(' (' + parseFloat((item.unitMultiplier * item.quantity).toFixed(2)) + 'm²)');
            }
        })
    });
}
$(document).ajaxStop(function () {
    if (vtexjs && $('.vtexsc-productList tr').length > 0) {
        infoCarrinhoQtd();
    }
});

if (window.location.search.indexOf('bf8eaa79-2dd0') > -1) {
    $(document).ajaxStop(function () {
        try {
            if ($('td.cartSkuName h4 a').html().length > 0) {
                infoCarrinho();
            }
        } catch (e) {
            console.warn(e.message);
        }
    });
}

//[TITULOS] Ajuste títulos
$(document).ready(function () {

    //[TITULO - VITRINES] Coloca o título da vitrine dentro de um span
    $(".prateleira > h2").each(function () {
        $(this).html("<span>" + $(this).text() + "</span>");
    });


    //[TITULO - PRODUTO] Coloca o nome do produto dentro de um h2
    $('.box-item b.product-name').replaceWith(function () {
        return $("<h2>" + $(this).html() + "</h2>");
    });
});



//[VOLTAR AO TOPO]
$(document).on("click", ".smoothScroll", function () {
    return $("html, body").animate({ scrollTop: $("body").offset().top - 10 })
});

$(document).ready(function () {
    $("body").append("<div class='backtoTop smoothScroll'>Voltar ao Topo</div>")
});


/* [HEADER] */

//[HEADER] Header Fixo
$(document).ready(function () {
    var throttle = false;
    var nav = $('header.header-container');
    var headDptos = $('.header-dptos');
    $(window).scroll(function () {
        if (!throttle) {
            setTimeout(function () {
                if ($(this).scrollTop() > 80) {
                    nav.addClass("headerFixed");
                    headDptos.addClass("headerFixed");
                } else {
                    nav.removeClass("headerFixed");
                    headDptos.removeClass("headerFixed");
                }
                throttle = false;
            }, 50)
        }
        throttle = true;

    });



});



//[LOGIN] Abre Login
$(document).on("click", "#lnkLogin", function () {
    $('.welcome em a#login').trigger('click');
});



//[MINICART] Abre Modal 
$('#open-minicart').click(function () {
    $('.overlay').fadeToggle();
    $('.mini-cart').addClass('minicart-open');

    $('html').addClass("noScroll");
});

//[MINICART] Fecha Modal 
$('#close-minicart').click(function () {
    $('.overlay').fadeToggle();
    $('.mini-cart').removeClass('minicart-open');

    $('html').removeClass("noScroll");
});


/* [VITRINE/PRODUTO] */

// [VITRINE/PRODUTO] Ajusta preço para Preço à vista
// function priceDiscount(){
//     $(".best-price-price").each(function(){

//         //Preço com Desconto de 5%
//         var price = realParaNumber($(this).attr('data-price'));
//         var priceDiscount = price * 0.05;

//         var priceFinal = price - priceDiscount;

//         $("<div class='best-price-cash'>"+ numberParaReal(priceFinal) +"<small>à vista</small></div>").insertAfter($(this).closest(".best-price"));
//     });
// }

// [VITRINE/PRODUTO] Ajusta preço para Preço à vista - Carregar Página
// $(document).ready(function(){
//   priceDiscount()  
// });

// [VITRINE/PRODUTO] Ajusta preço para Preço à vista - Muda paginação das vitrines
// $(document).on("click", ".page-number", function(){
//   setTimeout(function(){
//     priceDiscount();
//   }, 1000);
// })





/* [INSTITUCIONAIS] */

if (window.location.href.indexOf("institucional") != -1) {
    if ($(".institutional-tit span").height() > 24) {
        $(".institutional-tit").addClass("tit-x2");
    }

    if ($(".institutional-tit span").height() > 48) {
        $(".institutional-tit").addClass("tit-x3");
    }
}

if (window.location.href.indexOf("institucional/duvidas") != -1) {
    $('.faq-item').click(function () {
        $(this).children('.faq-question').toggleClass('active');
        $(this).children('.faq-answer').slideToggle();
    })

}




//////////////////////////////////////////INICIO - [MOBILE]

if (isMobile()) {

    /* [MENU] */

    //[MOBILE - MENU] Abre Modal
    $('.btn-menu-mobile').click(function () {
        $('#menu-mobile').addClass('open-menu-mobile');
        $('.overlay').fadeToggle().addClass('overlayMenu');
        $('html').addClass("noScroll");

        setTimeout(function () {
            $("#menu-mobile").addClass("overflowY");
        }, 500)
    });



    ////[MOBILE - MENU] - Abre ModalPanfleto
    $(document).on("click", ".header-top-link-panfleto", function () {
        $(".overlayMenu").trigger("click")
    });




    /* [BUSCA] */

    //[MOBILE - BUSCA] Move container do resultado de busca
    $(document).ready(function () {
        $('.ui-autocomplete').insertAfter('.search-mobile .busca .btn-buscar');
    });

    //[MOBILE - BUSCA] Abre Busca
    $(".icon-search-container").click(function () {
        $(this).toggleClass("opened");

        $("header.header-container").toggleClass("searchOpened");
        $(".search-mobile").slideToggle().toggleClass("opened");

        setTimeout(function () {
            $(".search-mobile").css("overflow", "initial")
        }, 300)

    });



    /* [RODAPE] */

    //[MOBILE - RODAPE] Dropwdown das colunas do rodape
    $(document).on("click", ".footer-collapse .footer-col-title", function () {

        $(this).closest('.footer-col').toggleClass("opened");
        $(this).closest('.footer-col').find(".footer-col-content").slideToggle();

    });

} else {

    //[DESKTOP - BUSCA] Move container do resultado de busca
    $(document).ready(function () {
        $('.ui-autocomplete').insertAfter('header .busca .btn-buscar');
    });

}

//////////////////////////////////////////FIM - [MOBILE]





/*[VTEX] Watch de Eventos Vtex */
$(window).on('orderFormUpdated.vtex', function (evt, orderForm) {
    // console.log("------------------------------------------------\n\n");
    // console.log('Alguem atualizou o orderForm!\n');
    // console.log(orderForm);
    // console.log("------------------------------------------------\n\n");

    //salvando shippingData atual no localStorage
    let shippingData = orderForm && orderForm.shippingData ? orderForm.shippingData : {}
    localStorage.setItem('shippingData', JSON.stringify(shippingData))
    //Login
    atualizaUserLogin();

    //MiniCart
    atualizaMiniCart()

});

/*[ONLOAD] Watch de Eventos Vtex */
window.onload = function () {
    vtexjs.checkout.getOrderForm();

    if (isMobile()) {
        $(".header-top").appendTo(".recebe-menu-mobile");
    }
}

function downloadPDF(href, name) {
    var req = new XMLHttpRequest();
    req.open("GET", href, true);
    req.responseType = "blob";

    req.onload = function (event) {
        var blob = req.response;
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = name;
        link.click();
    };

    req.send();

}

//passando do functions-home para cá pois algumas vezes o script functions-custom era interpretado antes do home, causando essa função não ser encontrada.
/* Slick Banner Carousel - Home */
function slickHome_carousel() {
    $('.fullbanner').slick({
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
    });
}

//passando do functions-home para cá pois algumas vezes o script functions-custom era interpretado antes do home, causando essa função não ser encontrada.
//Adiciona os nome da Navegação por Categorias
function addNameCatNav() {
    $(".navegacao-categorias .box-banner").each(function () {
        var elemImg = $(this).find("img");
        var nameCat = elemImg.attr("alt");

        $("<h3 class='navegacao-categorias-title'>" + nameCat + "</h3>").insertAfter(elemImg);
    })
}

/* Panfleto */
try {
    $.each(panfleto, function (key, value) {
        let option = `<option value="${key}" data-link="${value[0].arquivo}">${key}</option>`;
        $("#estados").append(option)
    });
} catch (e) {
    console.error(e.message)
}


$(document).on("change", 'select#estados', function () {
    $("#btn-baixar-oferta").text("Baixar");
    let linkCurrent = $(`select#estados option[value="${$(this).val()}"]`).attr('data-link');
    $('#btn-baixar-oferta').attr('href', linkCurrent);
    $('#btn-baixar-oferta').attr('data-name', $(this).val());
    $('#btn-baixar-oferta').show();

    $('#btn-visualizar-oferta').attr('href', linkCurrent);
    $('#btn-visualizar-oferta').show();
});

$(document).on("click", "#btn-baixar-oferta", function (e) {
    e.preventDefault();
    $(this).text("Baixando...")
    setTimeout(function () {
        $("#btn-baixar-oferta").text("Baixar");
    }, 2000)
    let href = $(this).attr("href");
    let name = "panfleto-" + $(this).attr("data-name");
    downloadPDF(href, name)
})

//[PRODUTO] Selo de Marca nas vitrines

function returnBrandSealRepeat(){
  $(".prateleira .box-item").each(function(){
  	let productId = $(this).attr("data-productid");
  	let target = $(this).find(".product-seals-top-right-container");

  	returnBrandSeal(productId, target);
  });	
}

$(document).ready(function(){
	// returnBrandSealRepeat();

})

$(document).on("click", ".pages .page-number, .pages .first, .pages .previous, .pages .next, .pages .last", function(){
  
  setTimeout(function(){
  	// returnBrandSealRepeat();
  }, 1000);

})
function priceDiscountPercentShelf(){
    $(".product-price").each(function(){

        var oldPrice = $(this).find(".old-price-price").attr('data-oldprice');
        var price = $(this).find(".best-price-price").attr('data-price');

        if( (!isNaN(oldPrice) || oldPrice != undefined) || (!isNaN(price) ) ){

          oldPrice = realParaNumber(oldPrice);    
          price = realParaNumber(price);

          // var priceDiscountPercent = Math.round( (price/oldPrice - 1) * 100 );
          var priceDiscountPercent = ((price/oldPrice - 1) * 100 ).toFixed(0);

          let divDiscountPercent = `<div class='best-price-cash-discount'><span>${priceDiscountPercent}%</span><small>OFF</small></div>`;
          $(this).closest(".box-item").find(".product-seals-top-right-container").append(divDiscountPercent)
        }
    });
}

$(document).ready(function(){
  priceDiscountPercentShelf()  
});

$(document).on("click", ".pages .page-number, .pages .first, .pages .previous, .pages .next, .pages .last", function(){
  setTimeout(function(){
    priceDiscountPercentShelf();
  }, 1000);
})
//[PRODUTO] Selo de Marca nas vitrines

function returnSimuleCartPriceRepeat(){
  $(".prateleira .box-item:not(.product-off)").each(function(){
  	let productId = $(this).attr("data-productskuid");
  	let target = $(this).find(".product-info-container .best-price");

  	returnSimuleCartPrice(productId, target);
  });	
}

// $(document).ready(function(){
// 		returnSimuleCartPriceRepeat();
// })

// $(document).on("click", ".pages .page-number, .pages .first, .pages .previous, .pages .next, .pages .last", function(){
  
//   setTimeout(function(){
//   	returnSimuleCartPriceRepeat();
//   }, 1000);

// })
//Modal CEP

var postalCodeSelected = '';
var citySelected = '';

var wl_formChange = `

<fieldset class="form-whitelabel">

  <div class="wl-container">

    <div class="form-box form-state">

    <h2 class="form-box-heading">Por favor, informe sua localização para ter acesso aos produtos e ofertas da sua região</h2>
    <div id='zipCodeWrapper'>
  
    
    <div class="form-item cep">
        <label>Coloque o CEP que deseja receber os produtos:</label>
        <input type="text" class="form-control form-item-select " id="zip-code" name="zip-code" placeholder="Digite o CEP..."  />
    </div>
   
    <div class="form-item  mz-address">
    
    </div>

    <div class='mz-address-warning d-none'>
      <p><strong>Desculpe, no momento não atendemos a sua região. </strong></p>
      <p>As regiões de atuação são:</p>
      <p>- Mato Grosso</p>
      <p>- Mato Grosso do Sul</p>
      <p>- Paraná</p>
    </div>

    
    
    </div>
    <p class='ou'>ou</p>

    <div id='stateCityWrapper'> 
      <label>Selecione o Estado e Cidade:</label>
      <select class="form-item form-item-select form-select-states">
        <option value="">Estado</option>
      </select>

      <select class="form-item form-item-select form-select-city">
          <option value="">Cidade</option>
      </select>

    </div>
     <!--
      <div class="wl-useMyLocation">
        <svg id="place" viewBox="0 0 512 512"> <g> <g> <path d="M425.951,89.021C386.864,32.451,324.917,0,256.006,0S125.148,32.451,86.061,89.021 c-38.895,56.284-47.876,127.541-24.072,190.496c6.367,17.192,16.488,33.895,30.01,49.547l150.378,176.634 c3.401,3.998,8.384,6.302,13.629,6.302c5.245,0,10.228-2.303,13.629-6.302l150.336-176.586 c13.582-15.742,23.69-32.427,30.004-49.481C473.827,216.562,464.846,145.305,425.951,89.021z M416.451,267.093 c-4.869,13.158-12.818,26.167-23.613,38.68c-0.03,0.03-0.06,0.06-0.084,0.096L256.006,466.487L119.174,305.768 c-10.789-12.502-18.738-25.51-23.655-38.794c-19.686-52.065-12.215-110.981,19.991-157.592 c32.307-46.76,83.519-73.578,140.496-73.578c56.976,0,108.182,26.817,140.49,73.578 C428.708,155.993,436.185,214.909,416.451,267.093z"/> </g> </g> <g> <g> <path d="M256.006,106.219c-55.276,0-100.252,44.97-100.252,100.252s44.97,100.252,100.252,100.252s100.252-44.97,100.252-100.252 C356.258,151.195,311.282,106.219,256.006,106.219z M256.006,270.918c-35.536,0-64.448-28.912-64.448-64.448 c0-35.536,28.912-64.448,64.448-64.448c35.536,0,64.448,28.912,64.448,64.448S291.542,270.918,256.006,270.918z"/> </g> </g> </svg>
        <span>Usar minha localização</span>
      </div>
      -->   
      <div class="wl-submit">ok</div>

      <div class="wl-loading"></div>

    </div>                          

  </div>    

</fieldset>

`;

var wl_formChangePostalCode = `

<fieldset class="form-whitelabel">

  <div class="wl-container">

    <div class="form-box form-state">

    <h2 class="form-box-heading">Por favor, informe sua localização para ter acesso aos produtos  e ofertas da sua região</h2>
    <div id='zipCodeWrapper'>
  
    
    <div class="form-item cep">
        <input type="text" class="form-control form-item-select " id="zip-code" name="zip-code" placeholder="Digite o CEP..."  />
        <label>Coloque o CEP que deseja receber os produtos</label>
    </div>
   
    <div class="form-item  mz-address">
    
    </div>

    <div class='mz-address-warning d-none'>
      <p><strong>Desculpe, no momento não atendemos a sua região. </strong></p>
      <p>As regiões de atuação são:</p>
      <p>- Mato Grosso</p>
      <p>- Mato Grosso do Sul</p>
      <p>- Paraná</p>
    </div>

    
    
    </div>
    <p class='ou'>ou</p>

    <div id='stateCityWrapper'> 
    <select class="form-item form-item-select form-select-states">
    <option value="">Estado</option>
  </select>

  <select class="form-item form-item-select form-select-city">
      <option value="">Cidade</option>
  </select>

    </div>
     <!--
      <div class="wl-useMyLocation">
        <svg id="place" viewBox="0 0 512 512"> <g> <g> <path d="M425.951,89.021C386.864,32.451,324.917,0,256.006,0S125.148,32.451,86.061,89.021 c-38.895,56.284-47.876,127.541-24.072,190.496c6.367,17.192,16.488,33.895,30.01,49.547l150.378,176.634 c3.401,3.998,8.384,6.302,13.629,6.302c5.245,0,10.228-2.303,13.629-6.302l150.336-176.586 c13.582-15.742,23.69-32.427,30.004-49.481C473.827,216.562,464.846,145.305,425.951,89.021z M416.451,267.093 c-4.869,13.158-12.818,26.167-23.613,38.68c-0.03,0.03-0.06,0.06-0.084,0.096L256.006,466.487L119.174,305.768 c-10.789-12.502-18.738-25.51-23.655-38.794c-19.686-52.065-12.215-110.981,19.991-157.592 c32.307-46.76,83.519-73.578,140.496-73.578c56.976,0,108.182,26.817,140.49,73.578 C428.708,155.993,436.185,214.909,416.451,267.093z"/> </g> </g> <g> <g> <path d="M256.006,106.219c-55.276,0-100.252,44.97-100.252,100.252s44.97,100.252,100.252,100.252s100.252-44.97,100.252-100.252 C356.258,151.195,311.282,106.219,256.006,106.219z M256.006,270.918c-35.536,0-64.448-28.912-64.448-64.448 c0-35.536,28.912-64.448,64.448-64.448c35.536,0,64.448,28.912,64.448,64.448S291.542,270.918,256.006,270.918z"/> </g> </g> </svg>
        <span>Usar minha localização</span>
      </div>
      -->   
      <div class="wl-submit">ok</div>

      <div class="wl-loading"></div>

    </div>                          

  </div>    

</fieldset>


`;

function show_loading() {
  $(".wl-loading").addClass("loading");
}

function hide_loading() {
  $(".wl-loading").removeClass("loading");
}

//Busca cep atual e retorna a cidade correspondente
function wl_getCEP(postalCode) {
  var cityFound = false;

  $.ajax({
    url: "https://viacep.com.br/ws/" + postalCode + "/json/?callback=?",
    type: 'GET',
    cache: false,
    async: false,
    contentType: "application/json",
    dataType: "json"
  })
    .done(function (dados) {

      postalCodeSelected = dados.cep;
      citySelected = dados.localidade;

      cityFound = citySelected + " - " + dados.uf;
      $(".header-location-cityCurrent").text(cityFound);
    })

}

//Abre o modal de trocar de whitelabel
function wl_openModal() {
  if ($(".wl-modalOverlay").length == 0) {
    $("html").append("<div class='wl-modalOverlay'></div>");

    // $("html").append(wl_formChangePostalCode).addClass("overlayModal");
    $("html").append(wl_formChange).addClass("overlayModal");

    console.log("Whitelabel - Modal pronto!");
  } else {
    console.log("Whitelabel - Modal já foi criado. Reabrindo...");
    $(".form-whitelabel").fadeIn();
    $(".wl-modalOverlay").show();
    $("html").addClass("overlayModal");
  }
}

//Fecha o modal
function wl_closeModal() {
  $(".form-whitelabel").fadeOut();
  $(".wl-modalOverlay").hide();
  $("html").removeClass("overlayModal");

  $(".header-top .header-top-left").addClass("visible");
}

//Cria botão de fechar o Modal
function wl_btModalClose() {
  $(".form-whitelabel").append(`<div class="wl-modalClose">x</div>`);
}

function findCep() {
  hide_wlSubmit();
  show_loading();

  var stateSelectElem = $(".form-select-states");
  var citySelectElem = $('.form-select-city');

  setTimeout(function () {

    let ufSelected = stateSelectElem.find(':selected').attr('data-uf');
    let stateSelected = encodeURIComponent(stateSelectElem.find(':selected').text());
    citySelected = encodeURIComponent(citySelectElem.find(':selected').text());

    let urlViacep = `https://viacep.com.br/ws/${ufSelected}/${citySelected}/rua/json/`;
    console.log(urlViacep);
    $.ajax({
      url: urlViacep,
      type: "GET",
      async: false
    })
      .then(res => {
        console.log(res);

        if (res.length > 0) {

          $(res).each(function () {
            if (this.logradouro != "") {
              postalCodeSelected = this.cep;
              console.log(`CEP encontrado: ${postalCodeSelected} `, this);
              return false;
            } else {
              console.log("CEP inválido!!! ", this);

              let urlViacep = `https://viacep.com.br/ws/${ufSelected}/${citySelected}/ave/json/`;
              $.ajax({
                url: urlViacep,
                type: "GET",
                async: false
              })
                .then(res => {
                  console.log(res);

                  if (res.length > 0) {

                    $(res).each(function () {
                      postalCodeSelected = this.cep;
                      console.log(`2 - CEP encontrado: ${postalCodeSelected} `, this);
                      return false;
                    });

                  }
                }
                )

            }
          });

        }
      }
      )
      .done(function () {
        console.log(`Finalizado com sucesso. Habilitando botão de envio!`);
        if ($('.form-select-city').val() != '') {
          show_wlSubmit();
        }

        if (changeCityAgain) {
          $(".alertChangeCityAgain").fadeIn();
        }

      })
  }, 300)
}

//Botão Confirmar
function wl_submit(city, postalCode) {

  if (postalCode.indexOf("-") != -1) {
    postalCode = postalCode.replace("-", "")
  }

  //Atualiza cookie com a cidade selecionada
  setCookieJobspace("jb-zipCodeCurrent", postalCode, 30);
  setCookieJobspace("jb-zipLocationCurrent", encodeURI(city), 30);

  console.log("WhiteLabel - Cookie atualizado para: ", city);

  //Troca whitelabel  
  let info = { "public": { "country": { "value": "BRA" }, "postalCode": { "value": postalCode } } };
  changeInfoWhiteLabel(info);
}

function show_wlSubmit() {

  setTimeout(function () {
    hide_loading();
    $(".wl-submit").addClass("visible");
  }, 300)

}

function hide_wlSubmit() {
  $(".wl-submit").removeClass("visible");
}

function postOrderFormPostalCode(postalCode) {

  $.ajax({
    url: '/api/checkout/pub/orderForm/' + vtexjs.checkout.orderFormId + '/attachments/shippingData',
    type: 'POST',
    async: false,
    data: JSON.stringify({
      "attachmentId": "shippingData",
      "address": {
        "postalCode": postalCode,
        "country": "BRA",
        "addressType": "search"
      },
    }),
    success: function (data) {
      console.log("Endereço alterado!!")
    }
  });

}

//Botão Confirmar CEP
$(document).on("click", ".wl-submit", function () {
  $(this).addClass("active");

  wl_submit(citySelected, postalCodeSelected);

});

var changeCityAgain = false;
var messageAlertChangeCityAgain = `
  <div class="alertChangeCityAgain">
    <p class="alertChangeCityAgain-title">ATENÇÃO!!!</p>
    <p class="alertChangeCityAgain-text">Os produtos podem sofrer alterações de estoque, preço e frete, conforme a sua região</p>
  </div>`;

//Botão para alterar whitelabel atual
$(document).on("click", ".header-location-changeCity", function () {
  wl_openModal();
  wl_btModalClose();
  alertChangeCityAgain();
  setStateSelect();
  changeCityAgain = true;
})

function alertChangeCityAgain() {

  if (!changeCityAgain) {
    $(messageAlertChangeCityAgain).insertAfter(".wl-useMyLocation");
  }

}

//Ação de fechar o modal ao clicar no X
$(document).on("click", ".wl-modalClose", function () {
  wl_closeModal();
})

/* GeoLocalizacao*/

//Busca GeoLocalização do usuário
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {

  var geo = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + position.coords.latitude + '%2C' + position.coords.longitude + '&language=pt&key=AIzaSyBMuuJpIYRXnEefe6zRkk_gayR_tHN2cqI';

  $.getJSON(geo).then(function (location) {
    var postalCode = "";
    var result = location.results[0].address_components;

    for (var i = 0; i < result.length; ++i) {
      if (result[i].types[0] == "postal_code") {
        postalCode = result[i].long_name;
      }
    }

    wl_getCEP(postalCode);

    $(".wl-useMyLocation").addClass("hidden");

  }).done(function () {
    setTimeout(function () {
      wl_submit(citySelected, postalCodeSelected);
    }, 800)
  })
}

//Usar localização atual
$(document).on("click", ".wl-useMyLocation", function () {
  show_loading();
  getLocation();
});


//Limpa select de cidades
function resetSelectCity() {
  $(".form-select-city option.optionCity").remove();
}

//Retorna Estados do Brasil
function getState() {
  var estados = [];

  $.ajax({
    url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados",
    async: false,
    type: "GET"
  })
    .then(res => res.filter(function (item) { return item.sigla === 'MT' || item.sigla === 'MS' || item.sigla === 'PR' }))
    .then(res => estados = res)

  return estados;
}

const sortAlphabect = (a, b) => (a.nome.localeCompare(b.nome));

function setStateSelect() {

  var stateArray = getState();

  //Ordena em ordem alfabética
  stateArray.sort(sortAlphabect);

  stateArray.map(function (item) { $(".form-select-states").append(`<option data-uf="${item.sigla}" value="${item.id}">${item.nome}</option>`) })

}

//usando debounce pra nao fazer um monte de requisiçoes
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

//função com debounce
var zipcodeModal = debounce(function () {
  var postalCode = $(this).val().replace('-', '')
  if ($(this).val().length == 9) {
    $.ajax({
      url: "https://viacep.com.br/ws/" + postalCode + "/json/?callback=?",
      type: 'GET',
      cache: false,
      async: false,
      contentType: "application/json",
      dataType: "json"
    })
      .done(function (dados) {
        // console.log('dados', dados)
        var warning = function () {
          $('.mz-address').html('').removeClass('mz-address-on');
          $('.wl-submit').removeClass('visible');
          $('.mz-address-warning').removeClass('d-none');
          $('#zip-code').addClass('error');
        }
        if (dados.erro == true || !dados.uf) {
          console.log('cep invalido')
          $('.mz-address-warning').addClass('invalid');
          warning();
        }
        else if (['mt', 'ms', 'pr'].indexOf(dados.uf.toLowerCase()) >= 0) {
          $('.mz-address').html(
            '<p><strong>' + dados.logradouro + ' - ' + dados.bairro + '</strong></p>\
          <p>'+ dados.localidade + ' - ' + dados.uf + '</p>'
          ).addClass('mz-address-on');
          postalCodeSelected = dados.cep;
          citySelected = dados.localidade;
          $('.wl-submit').addClass('visible');
          $('.mz-address-warning').addClass('d-none');
          $('#zip-code').removeClass('error');
        } else {
          $('.mz-address-warning').removeClass('invalid');
          warning();
          // alert('Atenção, não atendemos a sua região! (' + dados.uf + ') Por Favor escolha uma região pertencente aos estados mato grosso, mato grosso do sul ou parana')
        }
      })
  }
  if ($(this).val().length == 0) {
    $('.mz-address-warning').addClass('d-none');
    $('#zip-code').removeClass('error');
    $('.mz-address').html('').removeClass('mz-address-on');
    $('.wl-submit').removeClass('visible');
    $('#stateCityWrapper').removeAttr('disable').attr('style', '');
  } else {
    $('#stateCityWrapper').attr('disable', 'disable').attr('style', 'pointer-events: none;opacity:.3;');
    $(".form-select-states").val('')
  };
}, 500);
//chamando a funçãp com debounce
$(document).on("keyup", "#zip-code", zipcodeModal);

$(document).on("change", ".form-select-states", function () {


  if ($(this).val() != '') {
    $('#zipCodeWrapper').attr('disable', 'disable').attr('style', 'pointer-events: none;opacity:.3;');
    // $('.form-item.cep').hide();
  } else {
    $('#zipCodeWrapper').removeAttr('disable').attr('style', '');
    // $('.form-item.cep').show();

  }
  $('#zip-code').val('');


  let idSelected = this.value;

  resetSelectCity();
  hide_wlSubmit();

  show_loading();

  setTimeout(function () {

    $.ajax({
      url: "https://servicodados.ibge.gov.br/api/v1/localidades/estados/" + idSelected + "/municipios",
      async: true,
      type: "GET"
    })
      .then(res => res.map(function (cityArray) { return cityArray }))
      .done(cityArray => {
        cityArray.sort(sortAlphabect);
        cityArray.map(function (item, index) { $(".form-select-city").append(`<option value="${item.id}" class="optionCity">${item.nome}</option>`) })
        // if (idSelected === '50') {
        //   $(".form-whitelabel .form-state .form-select-city").prop('selectedIndex', 20);
        // } else if (idSelected === '51') {
        //   $(".form-whitelabel .form-state .form-select-city").prop('selectedIndex', 38);
        // } else if (idSelected === '41') {
        //   $(".form-whitelabel .form-state .form-select-city").prop('selectedIndex', 193);
        // }
        findCep();
        hide_loading();
      });

  }, 300);

});

$(document).on("change", ".form-select-city", function () {

  hide_wlSubmit();
  show_loading();

  var stateSelectElem = $(".form-select-states");
  var citySelectElem = $(this);

  setTimeout(function () {

    let ufSelected = stateSelectElem.find(':selected').attr('data-uf');
    let stateSelected = encodeURIComponent(stateSelectElem.find(':selected').text());
    citySelected = encodeURIComponent(citySelectElem.find(':selected').text());

    let urlViacep = `https://viacep.com.br/ws/${ufSelected}/${citySelected}/rua/json/`;
    console.log(urlViacep);
    $.ajax({
      url: urlViacep,
      type: "GET",
      async: false
    })
      .then(res => {
        console.log(res);

        if (res.length > 0) {

          $(res).each(function () {
            if (this.logradouro != "") {
              postalCodeSelected = this.cep;
              console.log(`CEP encontrado: ${postalCodeSelected} `, this);
              return false;
            } else {
              console.log("CEP inválido!!! ", this);

              let urlViacep = `https://viacep.com.br/ws/${ufSelected}/${citySelected}/ave/json/`;
              $.ajax({
                url: urlViacep,
                type: "GET",
                async: false
              })
                .then(res => {
                  console.log(res);

                  if (res.length > 0) {

                    $(res).each(function () {
                      postalCodeSelected = this.cep;
                      console.log(`2 - CEP encontrado: ${postalCodeSelected} `, this);
                      return false;
                    });

                  }
                }
                )

            }
          });

        }
      }
      )
      .done(function () {
        console.log(`Finalizado com sucesso. Habilitando botão de envio!`);
        show_wlSubmit();

        if (changeCityAgain) {
          $(".alertChangeCityAgain").fadeIn();
        }

      })
  }, 300)
})


//Busca cep e retorna a cidade correspondente
function wl_buscaCEP(zipcode) {

  //Nova variável "cep" somente com dígitos.
  var cep = zipcode;

  //Verifica se campo cep possui valor informado.
  if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {

      //Preenche os campos com "..." enquanto consulta webservice.
      $("#wl-city").val("...");

      //Consulta o webservice viacep.com.br/
      $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

        if (!("erro" in dados)) {
          //Atualiza os campos com os valores da consulta.
          $("#wl-city").val(dados.localidade + " - " + dados.uf);
          $(".form-item-city").addClass("visible");
          $(".wl-submit").addClass("visible");

          postalCodeSelected = zipcode;
          citySelected = dados.localidade;

          $(".form-whitelabel .form-item-cep").removeClass("loading");

          if (changeCityAgain) {
            $(".alertChangeCityAgain").fadeIn();
          }
        } //end if.
        else {
          //CEP pesquisado não foi encontrado.
          wl_limpa_formulario_cep()
          alert("CEP não encontrado.");
        }
      });
    } //end if.
    else {
      //cep é inválido.
      wl_limpa_formulario_cep();
      alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    wl_limpa_formulario_cep();
  }
}

//Valida CEP digitado e exibe botão de confirmação
$(document).on("keyup", "#wl-postalCode", function () {

  var cepDigit = $(this).val().replace("-", "");

  $(this).attr("data-value", cepDigit);

  if (cepDigit.length == 8) {
    $(".form-item-cep").addClass("loading");

    setTimeout(function () {
      wl_buscaCEP(cepDigit);
    }, 300)

  } else if (cepDigit.length < 8) {
    $(".form-item-cep").removeClass("loading");
    $(".form-item-city").removeClass("visible");
    $(".wl-submit").removeClass("visible");
  }

});


//Funcões de inicio de página
$(document).ready(function () {

  $("#zip-code").mask("99999-999");

  //Captura qual whitelabel esta salvo em cookie
  var currentPostalCode = getCookieJobspace("jb-zipCodeCurrent");

  //Atualiza whitelabel
  if (currentPostalCode != "") {

    // wl_getCEP(currentPostalCode);
    var cityCurrent = getCookieJobspace("jb-zipLocationCurrent");
    var zipcodeCurrent = getCookieJobspace("jb-zipCodeCurrent");
    //para adicionar o cep no topo do site
    //'Cep: ' + decodeURI(zipcodeCurrent).replace(/(\d{5})(\d{3})/, "$1-$2") + ' ' +
    $(".header-location-cityCurrent").text(decodeURI(cityCurrent));

    $(".header-top .header-top-left").addClass("visible");
    // jb-zipCodeCurrent

    // vtexjs.checkout.sendAttachment('shippingData', { address: { postalCode: document.cookie.split('jb-zipCodeCurrent=')[1].split(';')[0], country: 'BRA' } })
    console.log(`WhiteLabel - Cidade atualizada com sucesso!`);

    // setTimeout(function(){
    //   postOrderFormPostalCode(currentPostalCode);
    // }, 1500)

  } else {
    wl_openModal();
    setStateSelect();

    console.log(`WhiteLabel - Cookie esta vazio!`);
  }

  // setTimeout(function(){
  //   console.log(vtexjs.checkout.orderForm.clientProfileData);
  //   console.log(vtexjs.checkout.orderForm.messages);
  //   console.log(vtexjs.checkout.orderForm.sellers);
  //   console.log(vtexjs.checkout.orderForm.shippingData);  
  // }, 2000)


  $.ajax({
    type: 'GET',
    method: 'GET',
    url: "/api/sessions?items=checkout.regionId,checkout.cartId,public.country,public.postalCode",
    dataType: 'json',
    headers: {
      "Accept": "application/vnd.vtex.ds.v10+json",
      "Content-Type": "application/json; charset=utf-8"
    }
  }).done(function (data) {
    console.log(data);
    // RegionId tem região?
    if (data.namespaces != null && data.namespaces.checkout != null && data.namespaces.checkout.regionId.value.length > 0) {
      console.log('Tem Região!')
      console.log(atob(data.namespaces.checkout.regionId.value))
      if (data.namespaces.public.postalCode.value) {
        // Tem endereço ou CEP salvo?
        //Desidentificar o usuário e envia CEP para Vtex
        // Envia CEP/endereço ao regionId
        console.log('Tem CEP!')
      } else {
        //Abre modal de escolha de endereço/CEP
        console.log('Abrir Modal');
        setCookieJobspace("jb-zipCodeCurrent", '', '');
        setCookieJobspace("jb-zipLocationCurrent", '', '');
        wl_openModal()
      }
    } else {
      console.log('Abrir Modal');
      setCookieJobspace("jb-zipCodeCurrent", '', '');
      setCookieJobspace("jb-zipLocationCurrent", '', '');
      wl_openModal()
    }
  });
});






