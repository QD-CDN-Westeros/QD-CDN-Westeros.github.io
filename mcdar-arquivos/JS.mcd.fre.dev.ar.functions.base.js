/* dan - 20/07/2020 14:38:52 GMT-0300 */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});

/**Funções base */
try {
	/* COMMON */
	var Common = {
    run: function() {
        Common.setShelfQuantity();
        Common.updateShelfQuantity();
    },
    init: function() {
        // Common.deliveryType();
        //google callback is calling deliveryType
        Common.addClickEvent();
        Common.adjustComboOfTheDay();
        Common.vtexBindQuickViewDestroy();
        Common.applyAmazingMenuMobile();
        Common.smartCartGumball();
        Common.itemAddedModal();
        Common.searchModal();
        Common.smartAutoComplete();
        Common.fixPlaceholderSearch();
        Common.applyImageLoad();
        Common.applyCarouselShelf();
        Common.setBreadCrumb();
        //Address.addressSearch();
        Common.menuOverFooter();
        Common.forceAuthentication();
        Common.waitLoadingScripts();
        Common.waitVtexjs();
    },
    ready: function() {},
    ajaxStop: function() {
        Common.addClickEvent();
        Common.setShelfQuantity();
        Common.applyImageLoad();
    },
    windowOnload: function() {
        Common.addQtdProductCart();
        // Common.mcMenuLoading();
    },
    vtexBindQuickViewDestroy: function() {
        window.bindQuickView = function() {};
    },
    smartCartGumball: function () {

        var wrapper = $('.MZsmartCart__m4');
        var scWrapper = wrapper.find(".qd-sc-content");

        // Abrir carrinho
        $('.MZh__n-cart').click(function(e) {
            Common.addQtdProductCart();
            e.preventDefault();
            $(document.body).addClass('sc-qd-cart-opened');

        });

        // Fechar carrinho
        wrapper.click(function(e){
            if($(e.target).is(this)){
                $(document.body).removeClass('sc-qd-cart-opened qd-ddc-product-add-time-v2');
            }
        });

        // Adicionando quantidade de itens ao topo do carrinho
        var itemsQtt = scWrapper.find('.qd-sc-items-quantity');
        $(window).on('orderFormUpdated.vtex', function() {
            var items = vtexjs.checkout.orderForm.items;
            var qtt = 0;
            for(var i = 0; i < items.length; i++)
            qtt += items[i].quantity;
            itemsQtt.html('<span>Artículos:' + qtt + '</span>');
        });

        // Adicionando o total no rodapé do carrinho
        var $total = $('<div class="sc-qd-totalizers"><div class="totalizers-list"></div><a href="/checkout">Cerrar Pedido</a><a href="/mcmenu">Eligir más articulos</a></div>').appendTo(scWrapper).find('div');
        $(window).on('orderFormUpdated.vtex', function(e, orderForm) {
            var subtotal = 0;
            var discount = 0;
            var shipping = 0;
            var total = orderForm.value || 0;

            var totalizers = orderForm.totalizers;

            for(var i = 0; i < totalizers.length; i++) {
                if(totalizers[i].id == "Items") {
                    subtotal = totalizers[i].value;
                }
                if(totalizers[i].id == "Discounts") {
                    discount = totalizers[i].value;
                }
                if(totalizers[i].id == "Shipping") {
                    shipping = totalizers[i].value;
                }
            }

            $total.html('<ul><li>Sub total: <strong>$ ' + qd_number_format(subtotal / 100, 2, ",", ".") + '</strong></li><li style="display:' + (discount < 0 ? 'block;' : 'none;') + '">Desconto: <strong>$ ' + qd_number_format(discount / 100, 2, ",", ".") + '</strong></li><li style="display:' + (shipping !== 0 ? 'block;' : 'none;') + '">Taxa de entrega: <strong>$ ' + qd_number_format(shipping / 100, 2, ",", ".") + '</strong></li><li>Total: <strong>$ ' + qd_number_format(total / 100, 2, ",", ".") + '</strong></li></ul>');
        });

        $.QD_smartCart({
            selector: scWrapper,
            enableNotification: true,
            dropDown: {
                updateOnlyHover: false,
                callback: function() {
                    // Fechar o carrinho
                    wrapper.find('.qd_ddc_lightBoxClose').click(function(){
                        $(document.body).removeClass('sc-qd-cart-opened qd-ddc-product-add-time-v2');
                    });

                    Common.addQtdProductCart();
                },
                callbackProductsList: function() {
                    // Ajustando os wrappers dos itens do carrinho
                    var i = 0;
                    scWrapper.find('.qd-ddc-prodRow').each(function() {
                        var $t = $(this);
                        $t.find('.qd-ddc-prodImg').wrap('<div class="col-xs-3"></div>');
                        $t.find('.qd-ddc-prodName, .qd-ddc-prodPrice, .qd-ddc-prodQtt, .qd-ddc-prodRemove').wrapAll('<div class="col-xs-9"></div>');
                        $t.find('.qd-ddc-prodQtt, .qd-ddc-prodRemove').wrapAll('<div class="pull-right"></div>');
                        $t.find('.qd-ddc-prodPrice').wrapAll('<div class="pull-left"></div>');
                        i++;

                    });

                    setTimeout(function(){Common.addQtdProductCart();}, 550);

                    $('.MZs__buyBtn .add a.loading').removeClass('loading');
                },
                texts:{
                    emptyCart:'Su carrito aún no tiene ningún producto'
                },
            }
        });

    },

    addQtdProductCart:function (){

        if(!window.vtexjs.checkout) return;

        var wrapper = $('.MZsmartCart__m4');

        wrapper.find('.qd-ddc-prodWrapper2').find('.qd_ddc_prodRow').each(function(){

            var t = $(this);

            var itemSku = window.vtexjs.checkout.orderForm.items.find(
                function (e) {
                    return e.id === t.attr('data-sku')
                }
            );

            if(t.find('.MZs__cartCount').length == 0){
                t.find('.qd-ddc-prodImgWrapper').append('<div class="MZs__cartCount" data-qtt="' + itemSku.quantity + '"><span>Anãdido</span></div>');
            }else{
                t.find('.MZs__cartCount').attr('data-qtt', itemSku.quantity);
            }
        });
    },

    addClickEvent:function(){
        // var buyBtn = $('.MZs__buyBtn .add a:not(.has-loading-ev)');
        var buyBtn = $('.MZs__buyBtn a:not(.has-loading-ev)');
        buyBtn.addClass("has-loading-ev");
        buyBtn.on('click', function() {
                $(this).addClass('loading');
        });
    },
    itemAddedModal: function() {
        $(window).on('QuatroDigital.qd_bb_prod_add', function(e, a, sku) {
            var modal = $('.MZitemAddedModal');
            var item = $('#idprod' + sku).closest('.MZshelf');

            if(!item.length || !modal.length)
                return;

            var img = item.find('.MZs__i--img').clone();
            var name = item.find('.MZs__name a').text();
            var price = item.find('.MZs__p--price').text().trim();

            modal.find('.MZi__item--img').html(img);
            modal.find('.MZi__item--details h3').text(name);
            modal.find('.MZi__item--details span').text('Precio ' + price);

            function closeModal(e) {
                if(e && typeof e !== undefined) {
                    e.preventDefault();
                }
                $(document.body).removeClass('qd-ddc-product-add-time-v2');
            }

            modal.on('click', function(e) {
                if($(e.target).is(this)) {
                    closeModal();
                }
            }).find('.MZi__close, a[href="#"]').on('click', closeModal);
        });
    },
    searchModal: function () {
        $('.MZfb__search').click(function () {
            $('.modal-qd-v1-search').modal().addClass('in');
            $('.modal-backdrop').addClass('in');
            return false;
        });
        $('.modal-qd-v1-search').on('click',function(){
            $(this).modal('hide');
            $('.modal-backdrop').remove();
        })
        $('.modal-qd-v1-search').on('show.bs.modal', function () {
            setTimeout(function (){
                $('.fulltext-search-box').focus();
            }, 170); // tempo superior ao transition do fade in do modal do bootstrap
        });
        $('.modal-qd-v1-search-wrap').on('click',function(e){
            e.stopPropagation();
        })
    },
    applyAmazingMenuMobile: function () {
        var wrapper = $('.MZamazingMenuMob');

        // Abrir Amazing Menu Mobile
        $('.MZfb__menu').click(function (e) {
            e.preventDefault();
            $(document.body).toggleClass('am-qd-menu-opened');
            $(document.body).removeClass('am-qd-acm-opened sc-qd-cart-opened mz-wn-on');
        });

        // Fechar Amazing Menu Mobile
        wrapper.click(function(e){
            if($(e.target).is(this)){
                $(document.body).removeClass('am-qd-menu-opened');
            }
        });

        wrapper.QD_amazingMenu({
            callback: function() {
                // Fechar Amazing Menu Mobile
                wrapper.find('.header-qd-v1-user-message').on('click', '#login', function(){
                    $(document.body).removeClass('am-qd-menu-opened');
                });
                wrapper.find('.MZamm__close').click(function(){
                    $(document.body).removeClass('am-qd-menu-opened');
                });

                // Abrir e Fechar dos Níveis do Menu
                var openM = $('<span class="qd-am-dropdown-trigger"><i class="fa fa-plus"></i></span>');
                openM.appendTo('.MZamazingMenuMob .qd-am-has-ul');

                $('.qd-am-dropdown-trigger').click(function () {
                    var $t = $(this);
                    $t.toggleClass('qd-am-active');
                    $t.prev('.qd-am-dropdown, ul.qd-am-level-2').slideToggle();

                    $(document.body).toggleClass('am-qd-dropdown-opened');
                });
            }
        });
    },
    smartAutoComplete: function () {
        var input = $('.fulltext-search-box');
        var btn = $('<button disabled><i class="fas fa-times-circle"></i></button>');

        function disableBtn() {
            btn.attr('disabled', 'disabled');
        }

        function activeBtn() {
            btn.removeAttr('disabled');
        }

        function clearInput() {
            input.val('').focus();
            disableBtn();
        }

        input.on('keyup', function() {
            if ($(this).val().length > 0) {
                activeBtn();
            } else {
                disableBtn();
            }
        });

        btn.on('click', function() {
            clearInput()
        });

        input.parent().append(btn);
        input.QD_smartAutoComplete({
            jqueryUI: {
                appendTo: '.modal-qd-v1-search-wrap',
                maxRows: 6
            }
        });
    },
    fixPlaceholderSearch: function () {
			if (typeof enableFullTextSearchBox == "undefined")
				return;

			var idSearchFilterP = $('.modal-qd-v1-search input[type="text"].fulltext-search-box');

			if (!idSearchFilterP.length)
				return;

			var idSearchFilter = idSearchFilterP.attr('id').replace('ftBox', '');

			enableFullTextSearchBox(
				"ftBox" + idSearchFilter,
				"ftDept" + idSearchFilter,
				"ftIdx" + idSearchFilter,
				"ftBtn" + idSearchFilter,
				"/SEARCHTERM?&utmi_p=_&utmi_pc=BuscaFullText&utmi_cp=SEARCHTERM",
				"Escriba acá"
			);
		},
    applyImageLoad: function() {
        $('.MZshelf').QD_smartImageLoad({
            sizes: {
                width: '124',
                height: '124'
            }
        });
    },
    applyCarouselShelf: function () {
        var wrapper = $('.MZbox .prateleira').not('.slick-initialized');

        if (!wrapper.length)
            return false;

        wrapper.has('h2').each(function () {
            var $t = $(this);
            $t.find('h2').insertBefore($t);
        });

        wrapper.each(function() {
            var $t = $(this);
            $t.slick({
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                draggable: false,
                speed: 700
            });
        });
    },
    setShelfQuantity:function(){
        //verifcando se a prat já foi ajustada
        var shelf= $(".QD.prateleira.row").not(".ready").not("[id*=ResultItems_]");

        if(!window.vtexjs.checkout || !window.vtexjs.checkout.orderForm || !shelf.length){
            return;
        }
        for(var j=0;j<shelf.length;j++){
            // var prodField = shelf.find($(".MZs__productField"));

            //pegando dados para ajustar urls de quantidade na shelf
            var itemsArr = [];
            if(window.vtexjs.checkout.orderForm.items.length){
                var items = window.vtexjs.checkout.orderForm.items;
                var itemsQuantity = {}
                //buscando todos os items e depois adiciona no carrinho, pois como os produtos tem attachment, são inseridos no carrinho como prod diferentes
                for (var k=0;k<items.length;k++){
                    if(!itemsQuantity[items[k].productId]){
                        itemsQuantity[items[k].productId] =items[k].quantity;
                    }else{
                        itemsQuantity[items[k].productId] +=items[k].quantity;
                    }
                }

                Object.keys(itemsQuantity).forEach(function(key){
                    itemsArr.push([key,itemsQuantity[key]]);
                    });
                }
            }

            //setando data-qtt
            if(itemsArr.length){
                for(var n=0; n<itemsArr.length;n++){
                    var li =shelf.find(".qd_productId[value="+itemsArr[n][0]+"]");
                    var count = li.parent().find(".MZs__cartCount");

                    if(count.length){
                        var qtt=itemsArr[n][1];
                        count.attr("data-qtt",qtt);
                        if(li.find(".yes").length){
                            var a = li.find("span.add > a");
                            var href = a.attr("href");
                            a.attr("href",href.replace(/qty=\d+/,"qty="+(parseInt(qtt)+1)));
                        }
                    }
                }
            }
            shelf.addClass("ready");
    },
    updateShelfQuantity:function(){
        $(window).on("orderFormUpdated.vtex",function(e,orderForm){
            //Settando todas as quantidades para 1 novamente sempre que o carrinho atualizar, para garantir que caso o usuário remova o produto do carrinho, o link será gerado com a quantidade certa.
            var allLi = $('li[layout] .yes').closest('li[layout]');
            allLi.each(function(){
                var a = $(this).find('span.add > a');
                var href = a.attr("href");
                a.attr("href",href.replace(/qty=\d+/,"qty=1"));
            });

            $(".MZs__cartCount").attr("data-qtt",0);
            var items = orderForm.items;
            for(var i=0;i<items.length;i++){
                var li = $(".qd_productId[value="+items[i].productId+"]").closest("li[layout]");

                if(!li.length){
                   continue;
                }
                li.find(".MZs__cartCount").attr("data-qtt",items[i].quantity);
                if(li.find(".yes").length){
                    var href = li.find("span.add > a").attr("href");
                    li.find("span.add > a").attr("href",href.replace(/qty=\d+/,"qty="+(parseInt(items[i].quantity)+1)));
                }
            }

        });
    },
    adjustComboOfTheDay:function(){
        if(!window.location.href.includes("mascombos-del-dia")){
            return;
        }
        var day = new Date();
        day = day.getDay();

        var days = ["domingo","Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "sabado"];
        var productId = $(".qd_productId");
        var productOfTheDayId;
        var url = "/api/catalog_system/pub/products/search/mascombos-del-dia/"+days[day]+"?map=c,specificationFilter_20"
        $.ajax({url:url,method:"get"}).done(function(result){
            if(result && result[0] && result[0].productId){

                productOfTheDayId = result[0].productId;
                productId.each(function(el){
                    var $t= $(this);
                    var id=$(this).attr("value");
                    if(id==productOfTheDayId){
                        $t.parent().addClass("is-combo-of-the-day");

                        //Fix para encaixar o menu corretamente nesta página que tem apenas um produto;
                        $(document).trigger("scroll");
                    }
                });
            }

        });

    },
    setBreadCrumb: function() {
        var breadCrumb = $('.bread-crumb');
        breadCrumb.find('li:first').append("<a href='/mcmenu'>McDonald's</a>")
        breadCrumb.show();
    },menuOverFooter:function(){
        if($('body').is(".product") || $('body').is(".pre-home")){
            return
        }
        var scrolling;
        //57 é a altura do menu, o buffer é o padding para ficar corretamente posicionado
        var menuBtn = 57+16;
        // var buyBtn = 16+(57*2)+8
        var offset = $('.footer-qd-v1').offset().top;
        $(document).on('scroll',function(){
            scrolling=true;
        });
        
        setInterval(function(){

            if(scrolling){
                scrolling=false;

                if(offset!=$('.footer-qd-v1').offset().top){
                    offset=$('.footer-qd-v1').offset().top;
                }

                if($('.footer-qd-v1').offset().top<=$(window).scrollTop()+$(window).height()){
                    $('.MZfixedBar').css({top:offset-menuBtn}).addClass('stop-menu');
                }else{
                    $('.MZfixedBar').css({top:'auto'}).removeClass('stop-menu');
                }
            }
        },100);
        //triggando para iniciar posicionamento do menu
        $(document).trigger("scroll");

        var aux=0;
        var positionFix = setInterval(function(){
            if(aux<6){
                aux++;
                $(document).trigger("scroll");
            }else{
                clearInterval(positionFix)
            }
        },250);

    },forceAuthentication:function(){

        //on event or after the event
        if(window.vtexJsReady){
            authAndAddress();
        }

        $(window).on("mzVtexjsReady",function(){
            authAndAddress();
        });


        function authAndAddress(){
            // if(!vtexjs.checkout.orderForm.loggedIn){
                // vtexid.start({locale:'pt-BR',forceReload:false})
            // }else{
                // console.log('ae')
                if(!$('body').is('.pre-home')){
                    if($('body').is('.account,.orders')){
                        Common.adjustOrdersLink();
                        return
                    }
                    //no delivery method
                    if(!$.cookie('MZDeliveryType')){
                        window.location.href='/';
                        return
                    }
                    
                    var deliveryType = $.cookie('MZDeliveryType');
                    
                    //check for pickup selected
                    if(deliveryType=='pickup'){
                        //checking if saleschannel is right
                        if($.cookie('VTEXSC')!='sc=1' && location.search.indexOf('sc=1') <= -1){
                            Common.setSalesChannel(1);
                        }
                        if((!$.cookie('MZSelectedSla') || !$.cookie('MZSelectedAddress'))){
                            //show address modal
                            $('body').addClass('modal-map-active');                        
                            
                        }else{
                            // //if address in cookie, set orderform address
                            // var selectedSla = $.cookie('MZSelectedSla');
                            // var selectedAddress = JSON.parse(decodeURIComponent($.cookie('MZSelectedAddress')));
                            // //make sure orderform is editable
                            // var of = vtexjs.checkout.orderForm;
                            // if(of.canEditData && !of.shippingData || !of.shippingData.address || !of.shippingData.selectedAddresses.length || !of.shippingData.address.geoCoordinates){
                            //     vtexjs.checkout.getOrderForm().done(function(of){
                            //         vtexjs.checkout.sendAttachment("shippingData", {address:selectedAddress}).done(function(){
                            //             Common.setVtexStore(selectedAddress.geoCoordinates);
                            //         });
                            //     });
                            // }
                        }
                    }else if(deliveryType=='delivery'){
                        if($.cookie('VTEXSC')!='sc=2' && location.search.indexOf('sc=2') <= -1){
                            Common.setSalesChannel(2);
                        }
                        if (!$.cookie("mzAddress")){
                            //openModal
                            $('.MZAddressChange').modal().addClass('show-modal-container');
                            $('body').addClass("mz-modal-on");
                            $('.modal-container').addClass('show-inline-block');
                            Utils.animationFunc('.address-change-div-container', 'slide-in-bottom');
                            // Utils.animationFunc('.close-modal', 'slide-in-bottom');
                        }
                        //if delivery is selected
                    }

                    //closed
                    if($.cookie("MZStoreOperationHours")){
                        //everything is right, but store is closed
                        var day = new Date();
                        day = day.getDay();
                        var businessHours = JSON.parse($.cookie("MZStoreOperationHours"));
                        var todayHours;
                        if(businessHours.length==1 && deliveryType=='delivery'){
                            todayHours = businessHours[0]
                        }else{
                            todayHours =businessHours[day];
                        }
                        var aux = Common.getStoreOperation(todayHours);
                        var isClosed = aux[1]
                        if(isClosed){
                            //show store is closed
                            var mza = $('.MZa__closed');
                            mza.find('.opHours').text(todayHours.OpeningTime.slice(0,-3)+"h");
                            mza.find('.clHours').text(todayHours.ClosingTime.slice(0,-3)+"h");
                            mza.show();
                            $(document).trigger("scroll");
                        }
                        //show closed modal home
                        if($('body').is('.pre-home')){
                            Address.closedStoreModal(todayHours)
                        }
                    }
                }
            // }
        }
    },
    getItemsHtml:function(items){
        var html = "";
        for(var i=0;i<items.length;i++){
            var item = items[i];
            var price = items[i].sellingPrice * items[i].quantity;
            price = (price/100).toFixed(2).replace('.',',');
            html+='<li class="mz-orders__item">\
                    <ul>\
                        <li class="mz-orders__img">\
                            <img src="'+item.imageUrl+'" alt="'+item.name+'">\
                        </li>\
                        <li class="mz-orders__name">\
                            <p>'+item.name+'</p>\
                        </li>\
                        <li class="mz-orders__price">\
                        <p>$ '+price+'</p>\
                        </li>\
                    </ul>\
                </li>'
        }
        return html;
    },
    getDualPoint:function(bringgId,orderId,account){
        var request = {
            url:'https://midmc.maeztra.com/bringg/order/prep',
            type:'POST',
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json",
            },
            "data": JSON.stringify({id:orderId,bringg:bringgId,account:account})
        }
        return $.ajax(request)
    },waitLoadingScripts:function(){
        //esperando vtexjs carregar para pegar o userId
        $(window).on("mzVtexjsReady",function(){
            Common.getOrders2();
        });

    },getOrders2:function(){
        //get profile id
        var profileId = vtexjs.checkout.orderForm.userProfileId;
        if(!profileId){
            return
        }

        window.allowedDistance = 250;

        //suppress loading since the requisition is running in background
        $('body').addClass("suppress-loading");

        Common.getOrdersRequest(profileId).done(function(response){
            if(!response || !response.length){
                return
            }
            //showing modal button & close modal button
            $('.MZfixedBar > button').on('click',function(){
                $('body').addClass('modal-orders-active')
            }).show();
            $('.mz-modal--orders .mz-modal__header').on('click',function(){
                $('body').removeClass('modal-orders-active')
            });
            //

            $('.mz-modal--orders .mz-modal__body').html('')
            for(var i=0;i<response.length;i++){
                var order = response[i];

                //status
                if(!window.orderStatuses){
                    window.orderStatuses = [];
                }

                window.orderStatuses[i]= Common.getOrderStatus(order);
                var html = Common.getOrderHtml(order);
                $('.mz-modal--orders .mz-modal__body').append(html);
                Common.updateOrderState(order);
            }
            setTimeout(function(){
                Common.watchPosition();
            },120)

            setInterval(function(){
                if(window.waitingBringg){
                    window.waitingBringg=false;
                }else{
                    if($('body').is('.modal-orders-active')){
                        Common.updateOrders(profileId);
                    }
                }
            },15000);


          }).fail(function(){
              //if fail, try again. In updateOrder this is not needed since update will repeat every x seconds
              Common.getOrders2();
          }).always(function(){
            $('body').removeClass("suppress-loading");
          });

    },
    getOrdersRequest:function(profileId){
        var settings = {
            "url": "https://midmc.maeztra.com/vtex/orders",
            "type": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json",
            },
            "data": JSON.stringify({"param":"userProfileId","value":profileId}),
          };
          return $.ajax(settings);
    },
    mcMenuLoading: function() {
        $('.mz-skeleton').parent().remove();
        $('.MZmenuHome > ul').show();
        $('.MZsearch').show();
    },getOrderStatus:function(order){
        var id = order.id;
        if(order && order.dualPoint){
            return {id:id,status:'ReceivedDualPoint'};
        }else if(order.status=="waiting"){
            return {id:id,status:'waitingDualPoint'};
        }else if(order.bringg){
            return {id:id,status:'isReadyToSend'}
        }else{
            return {id:id,status:'waitingBringg'}
        }
    },updateOrders:function(profileId){
        $('body').addClass("suppress-loading");
        Common.getOrdersRequest(profileId).done(function(response){
            $('body').removeClass("suppress-loading");
            if(!response || !response.length || !window.orderStatuses){
                return
            }
            var checkIFExists = [];

            for(var i=0;i<response.length;i++){
                checkIFExists.push(response[i].id);
            }
            //Se não existir mais no retorno, remove
            $('[data-orderId]').each(function(item,index){
                var orderId = $(this).attr('data-orderId');
                if(checkIFExists.indexOf(orderId)<0){
                    //
                    $(this).remove();
                    for(var i=0;i<window.orderStatuses.length;i++){
                        if(window.orderStatuses[i].id==orderId){
                            window.orderStatuses.splice(i,1);
                        };
                    }
                }
            });

            for(var j=0;j<window.orderStatuses.length;j++){
                for(var k=0;k<response.length;k++){
                    if(window.orderStatuses[j].id==response[k].id){
                        var orderStatus = Common.getOrderStatus(response[k]);
                        if(orderStatus.status!= window.orderStatuses[j].status){
                            window.orderStatuses[j].status=orderStatus.status;
                            Common.updateOrderState(response[k]);
                            // console.log('houve mudança')
                        }else{
                            Common.updateOrderState(response[k]);
                            // console.log('n houve mudança')
                        }
                    }
                }
            }
        })
    },getOrderHtml:function(order){
        var items = JSON.parse(order.itens)
        var itemsHtml = Common.getItemsHtml(items);
        var footerHtml = Common.getOrdersFooterHtml(order);
        var itemHtml='<div class="mz-orders" data-orderId="'+order.id+'">\
                <div class="mz-orders__header">\
                    <h4>Pedidos</h4>\
                    <p class="mz-orders__id">'+order.id+'</p>\
                </div>\
                <ul class="mz-orders__list">'+itemsHtml+'</ul>\
                <div class="mz-orders__footer">'+footerHtml+'</div>\
            </div>';
        return itemHtml

    },getOrdersFooterHtml:function(order){
        var thisStat = Common.getOrderStatus(order).status;
        var bringgId = order.bringg;
        var dualPoint = order.dualPoint; 
        var lastDistance = $.cookie('mzLastDistance')?$.cookie('mzLastDistance'):9999;
        // var status = order.status;
        var footerHtml = '<div class="mz-prepare mz-prepare__initial" '+((thisStat=='waitingBringg' || thisStat=='isReadyToSend')?'style="display:block"':'style="display:none"')+'>\
                            <h5 class="mz-prepare__title">No olvides hacer click en el botón de abajo, que se activa cuando estás a 200 metros del local.</h5>\
                            <button '+(bringgId?'data-bringg="'+bringgId+'"':"")+'class="mz-prepare__button" type="button" '+(thisStat=='isReadyToSend'&&lastDistance<=window.allowedDistance?'false':'disabled="disabled"')+'">Empezar a prepararse</button>\
                        </div>\
                        <div class="mz-prepare mz-prepare--preparing" '+(thisStat=='ReceivedDualPoint'?'style="display:block"':'style="display:none"')+'>\
                            <h5 class="mz-prepare__title">\
                                <img src="/arquivos/icon-prepare.png" alt="Su pedido está siendo preparado">\
                                Su pedido está siendo preparado.\
                            </h5>\
                            <p class="mz-prepare__description">Contraseña de retirada de pedido</p>\
                            <div class="mz-prepare__dual-point">'+(dualPoint?dualPoint:"")+'</div>\
                        </div>\
                        <div class="mz-prepare mz-prepare--pending" '+(thisStat=='waitingDualPoint'?'style="display:block"':'style="display:none"')+'>\
                            <h5 class="mz-prepare__title">\
                                Esperando el restaurante<br> confirma tu pedido.\
                            </h5>\
                            <div class="mz-spinner">\
                                <div class="spinner">\
                                    <div></div>\
                                </div>\
                            </div>\
                        </div>'
        return footerHtml
    },updateOrderState:function(order){
        var orderElement = $('[data-orderId='+order.id+']');
        orderElement.find('.mz-prepare').hide();
        var coords = JSON.parse(order.geoCoordinates);

        //if distance>250 (4km) do not show prepare button
        var distance = 0;
        if(window.userCoords){
            var lat1 = coords[1];
            var lat2 = window.userCoords.latitude
            var lng1 = coords[0];
            var lng2 = window.userCoords.longitude
            var d =Common.getDistance([lat2,lng2],[lat1,lng1]);
            distance = d          
        }else if($.cookie('mzLastDistance')){
            distance = $.cookie('mzLastDistance');
        }
        //last distance
        //expires in 1 minute
        //used only to get a initial state for the button
        $.cookie('mzLastDistance',distance,{path:'/',expires:(1/5760)})
        if(order && order.dualPoint){
            orderElement.find('.mz-prepare--preparing').show();
            orderElement.find('.mz-prepare--preparing').find('.mz-prepare__dual-point').text(order.dualPoint);
        }else if(order.status=="waiting"){
            orderElement.find('.mz-prepare--pending').show();
        }else if(order.bringg && distance<=window.allowedDistance){
            orderElement.find('.mz-prepare__initial').show();
            orderElement.find('.mz-prepare__button').attr('disabled',false);
            orderElement.find('.mz-prepare__button').attr('data-bringg',order.bringg);
            orderElement.find('.mz-prepare__button').off('click').on('click',function(){
                $('body').addClass('modal-prepare-confirmation');
                $('.mz-prepare__button-confirmation').off('click').on('click',function(){
                    $('body').removeClass('modal-prepare-confirmation');
                    window.waitingBringg=true;
                    orderElement.find('.mz-prepare').hide();
                    orderElement.find('.mz-prepare--pending').show();                
                    Common.getDualPoint(order.bringg,order.id,order.account,order.hostname).done(function(){

                    });
                });

            });        

        }else{
            orderElement.find('.mz-prepare__initial').show();
            orderElement.find('.mz-prepare__button').attr('disabled','disabled');
        }

    },modalOverlayClick:function(){
        $('.mz-overlay').click(function(){
            $('body').removeClass('modal-orders-active');
            $('body').removeClass('modal-map-active');
        })
        //closing confirmation overlay
        $('.mz-overlay-confirmation,.mz-prepare__button-cancel,.mz-modal--confirmation .fa-times').click(function(){
            $('body').removeClass('modal-prepare-confirmation');
        })
    },watchPosition:function(){

        if(navigator.geolocation){
            navigator.geolocation.watchPosition(function(pos){
                // console.log('pos watched')
                window.userCoords = pos.coords;
            },function(){
                //if fails
                // console.log('não foi possível recuperar as coordenadas do usuário');
                $.cookie('mzLastDistance',1,{path:'/',expires:(1/5760)});
                window.userCoords="";
            },{
                enableHighAccuracy: true,
                maximumAge:15000  
              });
        }else{
            // console.log('geocoordenadas não habilitadas');
                $.cookie('mzLastDistance',1,{path:'/',expires:(1/5760)});
        }
    },getDistance:function(pos2,pos1){
        // console.log(pos2,pos1)
        var lat1 = pos2[0];
        var lat2 = pos1[0];
        var lng1 = pos2[1];
        var lng2 = pos1[1];
        var phi1 = lat1*Math.PI / 180;
        var phi2 = lat2*Math.PI / 180;
        var dlambda = (lng2-lng1)*Math.PI / 180;
        var R = 6371e3;// aprox diameter of earth/ gives d in meters
        var d = Math.acos(Math.sin(phi1)*Math.sin(phi2) + Math.cos(phi1)*Math.cos(phi2) * Math.cos(dlambda)) * R;
        return d;
    },getDualPoint:function(bringgId,orderId,account,hostname){

        var request = {
            url:'https://midmc.maeztra.com/bringg/order/prep',
            type:'POST',
            "timeout": 0,
            "headers": {
              "Content-Type": "application/json",
            },
            "data": JSON.stringify({id:orderId,bringg:bringgId,account:account,hostname:hostname?hostname:""})
        }
        return $.ajax(request)
    },deliveryType:function(){

        if($('body').is('.pre-home')){
            $('.selectDelivery').on('click',function(){
                Address.init();
                $('.MZph__bc--wrapper-delivery').fadeIn();
                $('.MZSelectDeliveryType').hide();
                localStorage.setItem('activeDeliveryChannel','delivery')
                localStorage.setItem('aditionalShippingData','{"activeTab":"delivery","selectedLeanShippingOption":"CLOSEST","isScheduledDeliveryActive":false,"originComponent":"omnishipping"}')
                
                if($.cookie('MZDeliveryType')&& $.cookie('MZDeliveryType') =='pickup'){
                    //if changing from pickup to delivery, clear cart
                    vtexjs.checkout.removeAllItems()
                }

                $.cookie('MZDeliveryType','delivery',{ path: '/', expires:1});
            });
            $('.selectPickup').on('click',function(){
                Pickup.init();
                $('.MZph__bc--wrapper-pickup').fadeIn();
                $('.MZSelectDeliveryType').hide();
                localStorage.setItem('activeDeliveryChannel','pickup-in-point')
                localStorage.setItem('aditionalShippingData','{"activeTab":"pickup-in-point","selectedLeanShippingOption":"CLOSEST","isScheduledDeliveryActive":false,"originComponent":"omnishipping"}');
                
                if($.cookie('MZDeliveryType')&& $.cookie('MZDeliveryType') =='delivery'){
                    //if changing from delivery to pickup, clear cart
                    vtexjs.checkout.removeAllItems()
                }

                $.cookie('MZDeliveryType','pickup',{ path: '/', expires:1})
            });
            $('.mz-gmap-go-back button, .mz-form-go-back button').on('click',function(){
                $('.MZph__bc--wrapper-pickup').hide();
                $('.MZph__bc--form').hide();
                $('.MZph__bc--wrapper-delivery').hide();
                $('.MZSelectDeliveryType').fadeIn();
                $.cookie('MZDeliveryType','',{ path: '/', expires:1})
            });

        }else{
            if($.cookie('MZDeliveryType')){
                var value = $.cookie('MZDeliveryType')
                if(value=='delivery'){
                    localStorage.setItem('activeDeliveryChannel','delivery')
                    localStorage.setItem('aditionalShippingData','{"activeTab":"delivery","selectedLeanShippingOption":"CLOSEST","isScheduledDeliveryActive":false,"originComponent":"omnishipping"}')
                    Address.init();
                }else{
                    localStorage.setItem('activeDeliveryChannel','pickup-in-point')
                    localStorage.setItem('aditionalShippingData','{"activeTab":"pickup-in-point","selectedLeanShippingOption":"CLOSEST","isScheduledDeliveryActive":false,"originComponent":"omnishipping"}')
                    Pickup.init();
                }
            }else{
                if(!$('body').is('.account,.orders')){
                    document.location.href='/';   
                }
 
            }
        }
    },setVtexStore:function(sc,regionId){
        /**The response should contain a session cookie. Further POST or PATCH requests will edit the existing session rather than creating a new one.
         * All parameters in the body that are not within the public namespace will be ignored.
         * Querystring items will automatically be added to the public namespace.
         * Cookies relevant to the session manager execution are also recorded. */

        var schannel="";
        if(sc){
            schannel="?sc="+sc;
        }
        if(regionId){
            regionId = 'SW#'+regionId
        }else{
            regionId = 'SW#';
        }
        
        vtexjs.session.setParameter('regionId',btoa(regionId)).fail(function(){
            vtexjs.session.setParameter('regionId',btoa(regionId)).always(function(){
                redirect(schannel)
            })
        }).done(function(){
            redirect(schannel)
        })

        function redirect(schannel){
            if($('body').is('.pre-home')){
                window.location.href = "/mcmenu"+schannel;
            }else{
                window.location.reload();
                // window.location.href = window.location.pathname+schannel;
            }
        }
    },getStoreOperation:function(businessHours){
        //Verbose but more organized
        var now = new Date();
        var openHour = new Date();
        var opH = businessHours.OpeningTime.split(':')[0]
        var opM = businessHours.OpeningTime.split(':')[1]
        var opS = businessHours.OpeningTime.split(':')[2]
        openHour.setHours(opH,opM,opS)

        var closeHour = new Date();
        var clH = businessHours.ClosingTime.split(':')[0]
        var clM = businessHours.ClosingTime.split(':')[1]
        var clS = businessHours.ClosingTime.split(':')[2]
        closeHour.setHours(clH,clM,clS)

        if(!(openHour<now && now<closeHour)){
            //closed, return operation hours
            return [[opH+":"+opM,clH+":"+clM],true];
        }else{
            //is open
            return [[opH+":"+opM,clH+":"+clM],false];
        }
    },getWorkingHours:function(storeId){
        //getting from masterdata
        var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        var storeId = 'AB1';
        var todayNumber = (new Date()).getDay();
        var today = days[todayNumber]
        $.ajax({url:'/api/dataentities/RS/search?_where=(dock_id ="'+storeId+'" AND day_week = "'+today+'")&_fields=dock_id,regular_start,regular_end,timezone',headers:{'Content-Type':'application/json'}}).done(function(response){
            var op = response[0].regular_start
            var cl = response[0].regular_end
            // console.log(Common.getStoreOperation({OpeningTime:op+':00',ClosingTime:cl+':00'}));
            // console.log(Common.getStoreOperation({OpeningTime:op+':00',ClosingTime:cl+':00'}));
            var WHCookie = {
                dayOfWeek:todayNumber,
                OpeningTime:op+':00',
                ClosingTime:cl+'00'
            }

            $.cookie('MZStoreOperationHours',JSON.stringify([WHCookie]),{ path: '/', expires:1});
        })
    },waitVtexjs:function(){
        var a =setInterval(function(){
            if(vtexjs && vtexjs.checkout && vtexjs.checkout.orderForm){
                clearInterval(a);
                $(window).trigger('mzVtexjsReady');
                window.vtexJsReady=true;
            }
        },250);
    },adjustOrdersLink:function(){
        if(location.hash.indexOf('fromHome')> -1){
            $('.MZh__n-brand a').attr('href','/');
            $('.vtex-pageHeader-link__container button').on('click',function(){
                window.location.href='/'
            });
        }
    },
    setSalesChannel:function(sc){
        if(location){
                location.search='sc='+sc;
        }
    }
};

	/* HOME */
	var Home = {
    init: function() {},
    ajaxStop: function() {},
    windowOnload: function() {}
};

	/* SEARCH */
	var Search = {
    init: function() {
        Search.openFiltersMenu();
        Search.openOrderBy();
        Search.closeNavigationMenu();
        Search.addOrderBySelect();
        Search.shelfLineFix();
        // Search.applySmartQuantity();
    },
    ajaxStop: function() {},
    windowOnload: function() {},
    openFiltersMenu: function () {
        $('.MZs__f--filterBtn').click(function (e) {
            e.preventDefault();
            $(document.body).addClass('qd-sn-on');
        });
    },
    openOrderBy: function() {
        $('.MZs__f--navBtn > a').click(function (e) {
            e.preventDefault();
            $(document.body).addClass('qd-ob-on');
        });
    },
    closeNavigationMenu: function() {
        $('.MZs__navigation').click(function(e) {
            if($(e.target).is(this)){
                $(document.body).removeClass('qd-sn-on qd-ob-on');
            }
        });

        $('.MZs__n--close').click(function() {
            $(document.body).removeClass('qd-sn-on qd-ob-on');
        });
    },
    addOrderBySelect: function () {
        $('.MZs__orderBy a').click(function (e) {
            e.preventDefault();
            var $t = $(this);
            var value = $t.attr('data-order-parameter');
            location.search = (location.search.replace(/O=[^&]+/g,'') + '&' + value).replace('?&', '?').replace(/&{2,}/g, '&');	
        });

        var orderBy = (location.search.match(/O=[^&]+/g,'') || ['']).pop();
        if (!orderBy.length)
            return;

        $('.MZs__n--box a[data-order-parameter="'+orderBy+'"]').addClass('qd-ob-selected')

        var text = $('.MZs__n--box a[data-order-parameter="'+orderBy+'"]').text().trim();
        $('.MZh__f--navBtn span').text(text);
    },
    shelfLineFix: function () {
        try {
            var exec = function () {
                var curTop;
                var wrapper = $("div[id*='ResultItems_'] >.prateleira:not('.qd-fi-on')").addClass('qd-fi-on');

                var shelf = wrapper.children("ul").removeClass('qd-first-line');
                shelf.first().addClass("qd-first-line");

                var setFirst = function () {
                    shelf.each(function () {
                        var $t = $(this);

                        if ($t.is(".qd-first-line")) {
                            curTop = $t.offset().top;
                            shelf = shelf.not($t);
                            return;
                        }

                        var offsetTop = $t.offset().top;
                        if (offsetTop >= curTop - 10 && offsetTop <= curTop + 10)
                            shelf = shelf.not($t);
                        else {
                            $t.addClass("qd-first-line");
                            return false;
                        }
                    });

                    if (shelf.length)
                        setFirst();
                };
                setFirst();
            };
            exec();

            // Olhando para o Smart Research
            if (!window.qd_shelf_line_fix_) {
                $(window).on("QuatroDigital.sr_shelfCallback", exec);
                window.qd_shelf_line_fix_ = true;
            }
            // Olhando tbm para o Infinity Scroll
            if (!window.qd_shelf_line_fix_is) {
                $(window).on("QuatroDigital.is_Callback", exec);
                window.qd_shelf_line_fix_is = true;
            }

            // Olhando para o evento window resize
            var resize = $._data(window).events.resize;
            var allowResize = true;
            if (resize)
                for (var i = 0; i < resize.length; i++) {
                    if (resize[i].namespace == "qd") {
                        allowResize = false;
                        break;
                    }
                }
            if (allowResize) {
                var timeOut = 0;
                $(window).on("resize.qd", function () {
                    clearTimeout(timeOut);
                    timeOut = setTimeout(function () {
                        $(".qd-first-line").removeClass(".qd-first-line");
                        exec();
                    }, 20);
                });
            }
        }
        catch (e) { (typeof console !== "undefined" && typeof console.error === "function" && console.error("Problemas :( . Detalhes: " + e.message)); }
    },
    applySmartQuantity: function() {
        var wrapper = $("li[layout]:not(.mz-on)");

        if(!wrapper.length)
            return;
            
        wrapper.addClass('mz-on').MZ_smartQuantityV2({
            buyButton: ".btn-add-buy-button-asynchronous",
            btnMore: '.mz-sq-more',

        });
    }
};

	/* LIST */
	var List = {
    run: function() {},
    init: function() {},
    ajaxStop: function() {},
    windowOnload: function() {}
};

	/* INSTITUCIONAL */
	var Institutional = {
    init: function() {},
    ajaxStop: function() {},
    windowOnload: function() {}
};

	/* PRODUCT */
	var Product = {
    run: function () {},
    init: function () {
        // Product.setAvailableBodyClass();
        Product.renderProduct();
        Product.addToCartButton();
        Product.toggleDesc();
        Product.menuOverFooter();
        Product.overrideCarrouselLinks();
        Product.renderSkus();
    },
    ajaxStop: function () {},
    windowOnload: function () {},
    setAvailableBodyClass: function () {
        function checkVisibleNotify(available) {
            if (available)
                $(document.body).addClass('qd-product-available').removeClass('qd-product-unavailable');
            else
                $(document.body).addClass('qd-product-unavailable').removeClass('qd-product-available');
        }

        $(document).on("skuSelected.vtex", function (e, id, sku) {
            checkVisibleNotify(sku.available);
        });
        checkVisibleNotify(skuJson.available);
    },
    renderProduct: function () {
        //desativando botão ao entrar na pag para evitar que o usuário consiga inserir no carrinho antes de selecionar acompanhamentos
        $(".product-price__wrapper .btn").attr("disabled", true);

        //nofinstances será o numero de itens selecionados antes de entrar na pag;
        
        //Carregamento da página
        $('.mz-skeleton--attachments').show();

        var qs = window.location.search.replace("?", "").split("&");
        for (var i = 0; i < qs.length; i++) {
            if (qs[i].includes("qtd=")) {
                this.nOfInstances = qs[i].replace("qtd=", "");
                break;
            }
        }

        if (!this.nOfInstances || isNaN(this.nOfInstances)) {
            this.nOfInstances = 1;
        }
        var attachmentsObj = {}
        Product.getAttachmentsInfo().done(function (result) {
            attachmentsObj.attachments = result[0].items[0].attachments;
            Object.assign(attachmentsObj, {
                nOfInstances: Product.nOfInstances
            });
            Attachments.constructor(attachmentsObj);
        });
    },
    addNamesToInput: function (div) {
        //Altera os nomes dos inputs para que os <form>
        $(div).find("form").each(function () {
            var input = (div).find("input");
            var name = input.attr("name");
            input.attr("name", name + "-" + i);
        });

    },
    getProductGifts: function () {
        //buscando os acompanhamentos do produto, cadastrados como gifts
        var sc = $.cookie('VTEXSC').replace('sc=',"");
        if(!sc){
            sc=($.cookie('MZDeliveryType')&&$.cookie('MZDeliveryType')=='delivery')?2:1;
        }

        return $.ajax({
            method: "GET",
            type: "GET",
            url: "/api/checkout/pub/orderForms/simulation?sc="+sc+"&request.items[0].id=" + window.skuJson.skus[0].sku + "&request.items[0].quantity=1&request.items[0].seller=1",
            dataType: "json"
        });
    },
    addToCartButton: function () {

        //tratamento do evento de clique do botão de adicionar ao carrinho (verificar gifts obrigatórios e enviar attachments)
        $(".buy-button.buy-button-ref").on("click", function (e) {
            e.preventDefault();
            if(!$("[data-mz-category]").length && !$("body").is(".no-attachments")){
                return;
            }

            var products = [];
            var missingGift = [];
            if ($("body").is(".no-attachments")) {
                var id;
                //if multiples skus
                if($('body').is('.sku-list')){
                    var form = $('form.sku-selection');
                    var selectedSku = form.find('input:checked');
                    //if already selected
                    if(selectedSku.length){
                        id = $('.sku-selection').find('input:checked').val();
                    }else{
                        var top = form.offset().top;
                        $("html,body").animate({
                            scrollTop: top - 125
                        }, "slow");
                        return
                    }

                }else{
                    id=vtxctx.skus;
                }
                var data = {
                    id: id,
                    quantity: 1,
                    seller: window.skuJson.skus[0].sellerId,
                }
                var items = window.vtexjs.checkout.orderForm.items;
                for (var i = 0; i < items.length; i++) {
                    if (items[i].id == vtxctx.skus) {
                        data.quantity = items[i].quantity + 1;
                        break;
                    }
                }
                products.push(data);
            } else {

                //slide atual
                var slickWrapper = $(".product-wrapper.swiper-wrapper")
                //slickGoTo para escolher qual lugar ir, será usado para verificar onde que o usuário não selecionou attachments

                $("form.form-required:not(.sku-selection)").each(function () {

                    if (!$(this).find("input[type='radio']").is(":checked")) {
                        var slickIndex = $(this).closest(".slick-slide").attr("data-slick-index");
                        var mzCat = $(this).attr("data-mz-category");
                        missingGift.push(slickIndex, mzCat);

                    }
                });
                //Se estiver faltando algum item obrigatório, direciona para o local
                if (missingGift.length) {

                    slickWrapper.slick("slickGoTo", missingGift[0])
                    var form = $("form[data-mz-category='" + missingGift[1] + "']");
                    var h2 = form.siblings("h2");
                    if (!h2.queue("fx").length) {
                        h2.addClass("not-selected");
                    }
                    setTimeout(function () {
                        h2.removeClass("not-selected");
                    }, 1000);

                    var top = form.offset().top;
                    $("html,body").animate({
                        scrollTop: top - 125
                    }, "slow");
                    return;
                }
                //Gera os JSON dos itens

                for (var i = 0; i < Product.nOfInstances; i++) {
                    var product = Product.parseProductAttachments(i);
                    products.push(product);
                }
            }
            window.vtexjs.checkout.getOrderForm().done(function (orderForm) {
                var sc = $.cookie('VTEXSC').replace('sc=',"");
                if(!sc){
                    sc=($.cookie('MZDeliveryType')&&$.cookie('MZDeliveryType')=='delivery')?2:1;
                }
                vtexjs.checkout.addToCart(products,null,sc).then(function () {}).always(function () {
                    // window.history.back();
                    Product.itemAddedModal();
                    $(window).trigger("productAddedToCart")
                });
            });
        });
    },
    parseProductAttachments: function (index) {

        var attachments = [];

        $(".gifts-container:eq(" + index + ") form").each(function () {
            var gifts = {};
            var checkedItem = $(this).find("input:checked").attr("data-mz-name");
            var catName = $(this).attr("data-mz-category");
            gifts.name = catName;
            gifts.content = {}
            gifts.content[catName] = checkedItem;
            gifts["noSplitItem"] = true;
            attachments.push(gifts);
        });

        $(".attachments-container:eq(" + index + ") form").each(function () {
            var attach = {};
            var name = $(this).attr("data-mz-category");
            attach.name = name;
            attach.content = {};
            attach["noSplitItem"] = true;
            $(this).find("input").each(function () {
                attach.content[$(this).attr("data-attachment-field-name")] = $(this).is(":checked");
            });
            attachments.push(attach);
        });

        var data = {
            id: vtxctx.skus,
            quantity: 1,
            seller: window.skuJson.skus[0].sellerId,
            attachments: attachments
        }
        return data;


    },
    getAttachmentsInfo: function () {
        return Product.productAjax(window.vtxctx.skus);

    },
    productAjax: function (sku) {
        //ajax para buscar o gift (bebida,batata etc);
        var search = "fq=skuId:" + sku
        if(sku.indexOf(';')>-1){
            search = "fq=productId:"+window.skuJson.productId
        }
        return $.ajax({
            method: "GET",
            type: "GET",
            url: "/api/catalog_system/pub/products/search?"+search,
            dataType: "json"
        });
    },
    toggleDesc: function () {
        // Abrir Amazing Menu Mobile
        $('.MZp__content h4').click(function (e) {
            e.preventDefault();
            var $t = $(this);

            $t.toggleClass('mz-on');
            $t.next('.MZp__description, table').toggleClass('mz-on');
        });

    },menuOverFooter:function(){
        var scrolling;
        //57 é a altura do menu, o buffer é o padding para ficar corretamente posicionado
        var menuBtn = 57+16;
        var buyBtn = 16+(57*2)+8
        var offset = $('.footer-qd-v1').offset().top;
        $(document).on('scroll',function(){
            scrolling=true;
        });

        setInterval(function(){
            if(scrolling){
                scrolling=false;

                if(offset!=$('.footer-qd-v1').offset().top){
                    offset=$('.footer-qd-v1').offset().top;
                }

                if($('.footer-qd-v1').offset().top<=$(window).scrollTop()+$(window).height()){
                    $('.MZfixedBar').css({top:offset-menuBtn}).addClass('stop-menu');
                    $('.MZp__fixed').css({top:offset-buyBtn}).addClass('stop-menu');
                }else{
                    $('.MZfixedBar,.MZp__fixed').css({top:'auto'}).removeClass('stop-menu');
                }

            }

        },50);
    },overrideCarrouselLinks:function(){
        $('.MZs__details a ,.MZs__image a').on('click',function(e){
            e.preventDefault();
        })
    },itemAddedModal:function(){
        var modal = $('.MZitemAddedModal');
        $('body').addClass('qd-ddc-product-add-time-v2');

        if(!modal.length){
            return;
        }

        var img = $('#image-main').clone();
        var name = $('.MZp__name .productName').text();
        var price = $('.skuBestPrice').text().trim();

        modal.find('.MZi__item--img').html(img);
        modal.find('.MZi__item--details h3').text(name);
        modal.find('.MZi__item--details span').text('Precio ' + price);

        function closeModal(e) {
            if(e && typeof e !== undefined) {
                e.preventDefault();
            }
            $(document.body).removeClass('qd-ddc-product-add-time-v2');
            //Atualizando carrinho
            // $.fn.simpleCart(true, undefined, false);
        }

        modal.find('.MZi__close').on('click',closeModal)
        modal.find('a[href="#"]').attr({href:'/mcmenu'});
    },
    renderSkus:function(){

        if(window.skuJson && window.skuJson.skus.length>1){
            var htmlArray = []

            $('body').addClass('sku-list')
            var productName= skuJson.name;
            var skus = window.skuJson.skus;
            for(var i=0;i<skus.length;i++){
                var thisSku = skus[i];
                if(!thisSku.available){
                    continue
                }
                var name = thisSku.skuname;
                var imgUrl = thisSku.image;
                var id = thisSku.sku;

                var html = '\
                    <li><input type="radio" class="sku-list-item" name="sku-selection" value="'+id+'" data-mz-name="'+name+'" id="'+name+'">\
                        <label for="'+name+'">\
                            <figure><img src="'+imgUrl+'" width="100"\
                                    height="100" alt="Coca-Coca-" id="">\
                                <figcaption>'+name+'</figcaption>\
                            </figure>\
                        </label>\
                    </li>'
                htmlArray.push($(html));
            }
            $('.form.sku-selection ul').append(htmlArray);
            $('.MZp__sku-selection').show();
        }
    }

};

	/* ATTACHMENTS */
	//Nome da classe é attachments mas é usada para tratar gifts e attachments, sendo gifts obrigatórios e attachments opcionais.
var t0;
var t1;
var Attachments = {
    /**
     * Constructor irá analisar os tipos de attachment e gerar seu respectivo html
     * Attachments Object é uma matriz, com cada array tendo todos os attachments do produto. É necessário matriz pois o usuário pode escolher mais de uma unidade do mesmo produto com attachments diferentes
     * Matriz será manipulada para envio ao orderForm
     * @param {Array} arr 
     */
    constructor: function (attachmentsInfo) {
        this.nOfInstances=attachmentsInfo.nOfInstances;
        Product.getProductGifts(window.vtxctx.skus).done(function (result) {
            Attachments.getAttachmentsId(result.selectableGifts,attachmentsInfo);
        });
    },
    getAttachmentsId: function (gifts,attachmentsInfo) {
        var attachments = "";
        for(var i=0;i<gifts.length;i++){
            var gift = gifts[i];
            var availableAtt = gift.availableGifts;
            var name = "";

                var listName = "";
                if ("8aa38612-46a7-4871-97b6-15eb58f3ecbc" == gift.id || "9172e977-b351-4922-9d96-3dbb56923104" == gift.id) {
                    //bebidas mccombo m e g 
                    name = "Bebidas";
                } else if ("a90bffef-a48d-4d34-b893-d0520e6feb53" == gift.id) {
                    //brinquedo notyet
                    name= "Brinquedos McLanche Feliz";
                } else if("ffd52c2c-19cc-40f7-8369-add26ce2f76d" == gift.id || "9a11dc54-aa76-4e6c-9d93-04791191e843" == gift.id){
                    //acompanhamento mccombo m e g 
                    name="Acompañamiento";
                }else if('5f055911-ede4-416a-82f9-9b549a1947ba' == gift.id){
                    //acompanhamento cajita feliz
                    name="Acompañamiento";
                } else if('88311135-3573-44b5-a6a6-ce13bd987aca' == gift.id){
                    //bebidas cajita feliz
                    name="Bebidas";
                }else if('5a289534-dd71-4970-80df-e1a683bef4fb' == gift.id){
                    //postres
                    name="Postres";
                }else if('7c0cfb6a-efa4-4e83-9ade-f94df265c245' == gift.id){
                    name="Acompañamiento 2";
                }else if('be413484-1764-4614-946d-aa8b024e5bc5' == gift.id){
                    name="Acompañamiento";
                }else if('711b7ed4-6c86-4f48-a616-8d7db7fba8b0' == gift.id){
                    name="Acompañamiento 3";
                }else{
                    name="Acompañamiento";
                }
                var attachments = attachmentsInfo.attachments;
                for(var j=0;j<attachmentsInfo.attachments.length;j++){                   
                    if(name==attachments[j].name){
                        attachments[j].availableGifts=availableAtt;
                        delete  attachments[j].domainValues;
                    }
                }
                // div.find("h2").html(listName);            
        }
        //se houver attachments, segue o fluxo normal. Se não houver, o produto pode ser adicionado diretamente ao carrinho, então deve alterar a url para ajustar o contador
        if(attachmentsInfo.attachments){
            Attachments.getAttachmentsFromId(attachmentsInfo);
        }
        else{
            $("body").addClass("no-attachments");
            $('.mz-skeleton--attachments').hide();
        }
},
getAttachmentsFromId:function(attachmentsInfo){

    //Guardandos promises (ajax) em um array para prosseguir apenas após resolver todas
    var promises = [];
    var attachInfo = attachmentsInfo.attachments
     for(var i=0;i<attachInfo.length;i++){

            //pegando os valores do domainValues e colocando eles dentro de availableAtt
        if(attachInfo[i].domainValues){
            attachInfo[i].availableAtt=JSON.parse(attachInfo[i].domainValues)
            delete attachInfo[i].domainValues;
        }
        if(attachInfo[i].availableGifts){
            var gifts = attachInfo[i].availableGifts;
            for(var j=0;j<gifts.length;j++){
                promises.push(Product.productAjax(gifts[j].id));
            }
        }
    }

    $.when.apply($,promises).done(function(){
        if(arguments[1]=='success'){
            var result = [Array.prototype.slice.call(arguments)];
        }else{
            var result = Array.prototype.slice.call(arguments);
        }

        //        
        for(var i=0;i<result.length;i++){
            var attachments=attachmentsInfo.attachments;
            for(var j=0;j<attachments.length;j++){

                if(attachments[j].availableGifts){
                    var avGifts = attachments[j].availableGifts;
                    for(var k=0;k<avGifts.length;k++){

                        if(result[i][0].length){
                            //multiples skus
                            if(result[i][0][0].items.length>1){
                                for(var m=0;m<result[i][0][0].items.length;m++){
                                    if(result[i][0][0].items[m].itemId==avGifts[k].id){

                                        //creating a helper object to send all needed variables
                                        var $t = result[i][0][0].items[m];
                                        var productName = $t.nameComplete;
                                        var productId = $t.itemId;
                                        var imageTag = $t.images[0].imageTag;
                                        var obj = {
                                            productName:productName,
                                            productId:productId,
                                            items:[{images:[{imageTag:imageTag}]}],
                                        }                      
                                        Object.assign(avGifts[k],obj);
                                        continue;
                                    }
                                }
                            //single sku
                            }else{
                                if(result[i][0][0].items[0].itemId==avGifts[k].id){                        
                                    Object.assign(avGifts[k],result[i][0][0]);
                                    continue;
                                }
                            }
                        }
                    }
                }                
            }
        }

        Attachments.renderAttachments(attachmentsInfo); 

    });
    //objetos já tem todas as informaçõs para renderizar e enviar ao cart

},
renderAttachments:function(attachmentsInfo){
    // console.log(attachmentsInfo)
    var attachments = attachmentsInfo.attachments;
    for(var i=0;i<attachments.length;i++){
        if(attachments[i].availableGifts){
            Attachments.showAttachments(attachments[i],"gifts");
        }else if(attachments[i].availableAtt){
            Attachments.showAttachments(attachments[i],"attachments");
        }
    }

    Attachments.cloneProducts();
    //Função que ativa estilo quando input está selecionado
    Attachments.styleInputWhenActive();
    $(".product-price__wrapper .btn").attr("disabled",false);
},
showAttachments:function(attachment,type){
    var form = $("<form class='form'><div><ul></ul></div></form>");
    var headerText = Attachments.getHeaderFormText(attachment.name);
    var li;

    if(type=="gifts"){        
        // headerText= "Selecione "+(attachment.name=="Bebidas" || "Sobremesas"?"Sua ":"Seu ")+attachment.name;
        li = Attachments.makeLi(attachment.availableGifts,type);      
    }else{
        //verificando se é brinquedo para gerar attachments como radio;
        var isMcLunch = (attachment.name =="Juguetes Cajita Feliz"?true:false);
        li = Attachments.makeLi(attachment.availableAtt,type,isMcLunch);    
    }
    form.find("ul").append(li);
    form.attr("data-mz-category",attachment.name);
    
    //se é radio, é obrigatorio
    if(form.find("input").attr("type")=="radio"){
        form.addClass("form-required");
    } 
    var div =$("<div class='arrow-relative'><h2> "+headerText+"</h2></div>");
    
    //colocando elementos no html

    $(div).append($(form));
    $("."+type+"-container").append($(div));
    //fix para posicionar menu

    $(document).trigger("scroll");
    $('.mz-skeleton--attachments').hide();
},
cloneProducts:function(){
    if(Attachments.nOfInstances<=1){
        return;
    }
    var wrapper = $(".product-wrapper.swiper-wrapper");
    var clonedDiv = $(".swiper-slide").first();
    for(var i=1;i<Attachments.nOfInstances;i++){
        var cloneAux= clonedDiv.clone();
        cloneAux.find("input[type=radio]").each(function(){
            var id =$(this).attr("id");
            $(this).attr("id",id+"-"+i);
            $(this).next().attr("for",id+"-"+i);

        });
        wrapper.append(cloneAux);
    }
     //Iniciando slick para efeito de carrossel           
    wrapper.slick({
        arrows: false,
        dots: true,
        fade: false,    
        cssEase: 'linear',
        speed: 500,
        draggable: true,
        infinite:false,
        waitForAnimate:false,
        edgeFriction:1,
        lazyLoad:"progressive",
    });
},
makeLi:function(items,type,isMcLunch){
    var li="";
    for(var i=0;i<items.length;i++){
        var item = items[i];
        if(type=="gifts"){
            if(item.items){
            li+= '<li><input type="radio" class="gift-item" data-mz-name="'+item.productName+'"id="fieldGift_' + item.id + '" name="mz-gifts"/><label for="fieldGift_' + item.id + '">',
            li += "<figure>" + item.items[0].images[0].imageTag.replace("~", "").replace(/#width#/g, "100").replace(/#height#/g, "100") +"<figcaption>" + item.productName + "</figcaption></figure>",
            li += "</label></li>"
            }
        }else{
            var inputType = isMcLunch?"radio":"checkbox";
            var fname = item.FieldName.replace(/ /g,"_");
            li+='<li><label '+(isMcLunch?"class='mcLunchAttachment'":"")+' for="fieldAttachment_' + fname+'"><input id="fieldAttachment_'+fname+'" type="'+inputType+'" class="attachment-item" name="'+(isMcLunch?"mzToyAttachment":"mzAttachments")+'"data-attachment-field-name="'+item.FieldName+'">'+item.FieldName+'</label></li>'
        }        
    }
    return li;
    },
    styleInputWhenActive:function(){
        Attachments.clickAnimation();
        $(".MZp__attachments input[type=checkbox]").on("change",function(){
            $(this).closest("label").toggleClass("mz-on");
        });
        $(".MZp__attachments input[type=radio]").on("change",function(){
            $(this).closest("form").find("label").removeClass("mz-on");
            $(this).closest("label").addClass("mz-on");
        });
    },getHeaderFormText:function(name){
        var headerText;
        if (name=="Bebidas") {
            //bebida
            headerText = "Elige tu bebida";
        } else if (name=="Postres") {
            //sobremesa
            headerText = "Elige tu postre";
        } else if (name=="Juguetes Cajita Feliz") {
            //brinquedo
            headerText= "Juguetes Cajita Feliz";
        } else if (name.includes("Ingredientes")){
            //Ingredientes
            headerText = 'Si prefieres';
        } else if(name =="Acompañamiento"){
            //acompanhamento
            headerText = "Elige tu acompañamiento";
        } else if(name == "Bebidas Cajita Feliz"){
            headerText ="Elige tu bebida";
        }else{
            headerText = "Elige tu acompañamiento";
        }
        return headerText;
    },
    clickAnimation:function(){
        $(".MZp__attachments input[type=checkbox]").on('click',function(){
            var $t=this;
            t=$t.closest('label')
            //Não executar na sa
            if($(t).is('.mz-on')){
                return
            }           
            Utils.animationFunc(t,'jelly',function(){
                $(t).removeClass('jelly')
            })
        });
    }
}



	/* ORDERS */
	var Orders = {
    init: function() {
        Orders.bootstrapCssFix();
    },
    ajaxStop: function() {},
    windowOnload: function() {},
    bootstrapCssFix: function() {
        var styleSheets = document.styleSheets;
        for (var i = 0; i < styleSheets.length; i++) {
            if ((styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap.min.css') > -1 || (styleSheets[i].href || "").indexOf('io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css') > -1) {
                styleSheets[i].disabled = true;
            }
        }
    }
};

	/* ADDRESS */
	// //apenas em teste, remover ao subir
if (window.jsnomeLoja == "devmcdbr")
    window.lojaDev = "https://mcdbr.myvtex.com";
else
    window.lojaDev = "";

var Address = {
    init: function () {
        //using Common.forceAuthentication to verify address
        // Address.checkIfAddressExists();
        if(window.initAddress){
            return
        }
        window.initAddress = true;
        Address.getAddressFromCookie();
        Address.initGoogle();
        Address.setHeaderAddressText();
        Address.addressEvents();
        Address.changeAddressModal();
        Address.animationEvents();
        Address.startGeocoder();
        Address.trimSpaces();
    },
    initGoogle:function(){
        //bias
        var options = {
            bounds:new google.maps.LatLngBounds(new google.maps.LatLng(-34.603722, -58.381592),new google.maps.LatLng(-34.603722, -58.381592)),
            // types:['address'],
            componentRestrictions:{country:'ar'}
        }
        var autocomplete3 = new google.maps.places.Autocomplete(document.getElementById("autocomplete3"),options);
        $('#autocomplete3').on('focus',function(){
            //clear error msgs
            $('.mz-gmap-input-wrap').removeClass('show-number-error show-street-error')
        })
        autocomplete3.addListener('place_changed',function(){

            var place = autocomplete3.getPlace();
            if(!place || !place.geometry){
                return
            }
            var lat = place.geometry.location.lat();
            var lng = place.geometry.location.lng();
            var ac = place.address_components;
            //verify if inserted address have street and
            // var hasNumber = false;
            var hasStreet = false;
            if(ac){
                for(var i=0;i<ac.length;i++){
                    // if(ac[i].types.indexOf('street_number')> -1){
                    //     hasNumber=true;
                    // }
                    if(ac[i].types.indexOf('route')> -1){
                        hasStreet=true;
                    }
                }
            }

            if(!hasStreet){
                $('.mz-gmap-input-wrap').addClass('show-street-error')
                return
            }
            
            // if(!hasNumber){
            //     $('.mz-gmap-input-wrap').addClass('show-number-error')
            //     return
            // }
            
            //switching forms
            Address.buildAddressGoogleResponse(place,[lng,lat]);                
        });

        $('.MZph__f--btnLocalization button').attr('disabled',false);
        $('.MZph__f--btnLocalization button').on('click',function(){
            //Get location btn
            setTimeout(function(){
                Address.getGeolocation();
            },100)
        });

    },
    buildAddressGoogleResponse:function(place,geoCoordinates){
        //always use long_name
        //street_number = number
        //route = street
        //sublocality_level_1 = neighborhood
        //administrative_area_level_2 = city
        //administrative_area_level_1 = state
        //postal_code = postalCode
        var dict = {
            "street_number":"number",
            "route":"street",
            "sublocality_level_1":"neighborhood",
            "administrative_area_level_2":"city",
            "administrative_area_level_1":"state",
            "postal_code":"postalCode"
        }
        var address = {
            street:'',
            number:'',
            neighborhood:'',
            city:'',
            geoCoordinates:geoCoordinates,
            state:'',
            postalCode:'',
            country:'ARG'
        }
        //state and postal code not essential
        console.log(place.address_components)
        for(var i=0;i<place.address_components.length;i++){
            var component = place.address_components[i];
            
            if(component.types[0]){
                var types = component.types;
                for(var k=0;k<types.length;k++){
                    dict[types[k]]?address[dict[types[k]]]=component.long_name:'';
                }
            }
        }

        Address.checkAddressFields(address)

    },
    simulate: function (coordinates,sc) {
        var data = {
            items: [{
                id: 2,
                quantity: 1,
                seller: 1
            }],
            // postalCode: postalCode,
            geoCoordinates: coordinates,
            country: "ARG"
        };
        return $.ajax({
            url: "/api/checkout/pub/orderForms/simulation"+(sc?'?sc='+sc:''),
            type: "POST",
            dataType: "JSON",
            contentType: "application/json",
            data: JSON.stringify(data)
        });
    },
    getMenu: function (period) {
        //atualmente não estão com o breakfast ativo, mas eventualmente podem utilizar
        period = period ? period : "Regular"
        $.ajax({
            type: "GET",
            url: "/Menu/" + period,
            cache: false
        });
    },
    sendAddressToOrderForm: function (address,regionId) {
        address.addressType = address.addressType ? address.addressType : "residential";
        address.number = $(".f-o--inputNumber").val() ? $(".f-o--inputNumber").val() : address.number;
        address.street = $('.f-a--input').val() ? $('.f-a--input').val() : "";
        address.city = $('.f-n--input').val() ? $('.f-n--input').val() : "";
        address.geoCoordinatesIsValid = true;
        address.useGeolocationSearch = true;
        address.isPostalCodeValid = false;

        var complement = $(".f-o--inputComplement").val() ? $(".f-o--inputComplement").val() : "";
        address.complement = complement ? complement : address.complement;
        vtexjs.checkout.getOrderForm().done(function (a) {
            var sp = { address: address }
            vtexjs.checkout.sendAttachment("shippingData", sp);
            // $.cookie('mzAddress', JSON.stringify(address), { path: '/', expires: 1});
            ;
            console.log(Address.setFormattedAddress(address))
            //Se está na prehome redireciona para o menu

            //Escolhendo a loja, para trazer o menu correto
            //delivery is sc=2 
            Common.setVtexStore(2,regionId);

        });
    },
    getAddressInfo: function (address) {
        // Pega informações do endereço baseado no cep e país
        return vtexjs.checkout.getAddressInformation(address);
    },
    checkAddressFields: function (address) {
        //preenche o input com os valores do address
        var formattedAddress = Address.setFormattedAddress(address)
        $(".bc-f--adress").text(formattedAddress);
        if($('.MZAddressChange').is('.show-modal-container') || $('body').is('.pre-home')){
            Address.fullFormTransition();
        }       
        
        $(".MZph__form input").val("");

        $(".f-a--input").val(address.street ? address.street : ""); // Campo Endereço
        $(".f-n--input").val(address.city ? address.city : ""); // Campo Bairro // região administrativa de segundo nível
        $(".f-o--inputNumber").val(address.number ? address.number : ""); // Campo numero
        $(".f-o--inputComplement").val(address.complement ? address.complement : ""); // Campo complemento

        $(".MZph__form input").attr({disabled:false})
        // Verifica se a Rua ou Bairro estão vazios, caso esteja o campo é liberado para o usuario
        $(".MZph__form input").each(function () {
            var $t = $(this);

            if ($t.val() != "" && !$t.is('.f-o--inputNumber') && !$t.is('.f-o--inputComplement')) {
                $t.attr({ disabled: 'disabled' });
            }
        });

        //verifica por campos que a vtex não conseguiu trazer com o cep (ex:número, e algumas vezes rua)
        //e indica ao body;        
        var classes = "";
        Object.entries(address).forEach(function (val, index) {
            if ((val[0] != "reference" && val[0] != "complement") && (!val[1] || val[1] == "")) {
                classes += "mz-no-" + val[0] + " ";
            }
        });
        $("body").addClass(classes);

        $.cookie('mzAddress', JSON.stringify(address), { path: '/', expires: 1})
    },
    setHeaderAddressText: function () {
        if ($.cookie("mzAddress")) {
            $(".MZa__address").find(".address").html(decodeURIComponent($.cookie("mzFormattedAddress")));
        }
    },
    setFormattedAddress: function (address,cookie) {
        //formatando endereço para mostrar no topo da tela
        //verificando se todos os campos estão preenchidos, o que deve acontecer sempre
        var fa = "";
        fa += (address.street ? address.street + ", " : "")
            + (address.number ? address.number + ", " : "")
            + (address.neighborhood ? address.neighborhood + ", " : "")
            + (address.city ? address.city + " - " : "")
            + (address.state ? address.state + ", " : "")
            + (address.postalCode ? address.postalCode + ", " : "")
            + (address.country == "ARG" ? "Argentina" : address.country);
            if(cookie===false){
                $.cookie("mzFormattedAddress", fa, { path: '/', expires: 1});
            }
        return fa;
    },
    addressEvents: function () {

        // Validação do formulario
        var form = $(".MZph__form");
        form.find('input:not(.f-o--inputComplement)').attr({ required: 'required' });
        form.validate({
            messages: {
                inputAddress: "Campo obrigatório",
                inputNeighborhood: "Campo obrigatório",
                inputNumber: "Campo obrigatório"
            },
            errorElement: "span",
            submitHandler: function (form) {
                if (!$(form).valid()) {
                    return
                }

                $('.confirm-address').addClass('loading');
                var formattedAddress = Address.formatAddressToGoogle($('.MZph__form'));
                //Buscar coordenadas
                var config = {
                    address: formattedAddress,
                    componentRestrictions: {
                        country: "AR"
                    }
                }
                window.geocoder.geocode(config, function (result) {

                    if (result && result.length) {
                        var lat = result[0].geometry.location.lat();
                        var lng = result[0].geometry.location.lng();
                        var coordinates = [lng, lat];

                        //updating geocoordinates;
  
                        var addr =  JSON.parse(decodeURIComponent($.cookie("mzAddress")));
                        addr.geoCoordinates = coordinates;
                        $.cookie("mzAddress", JSON.stringify(addr), { path: '/', expires: 1});
                      
                        Address.simulate(coordinates,2).done(function(result){
                            if(!result || !result.logisticsInfo.length || !result.logisticsInfo[0].slas.length){
                                //show no store
                                Address.noStoreModal();
                                return
                            }
                            //store closed
                            var workingHours = Common.getWorkingHours();
                            if(workingHours){
                                Address.closedStoreModal();
                            }
                            //missing yet
                            //buscando regionId
                            var regionId;
                            if(result.purchaseConditions && result.purchaseConditions.itemPurchaseConditions.length){
                                var condition = result.purchaseConditions.itemPurchaseConditions[0];
                                var regionId;
                                for(var i=0;i<condition.sellerChain.length;i++){
                                    //talvez tenha que alterar em alguns países
                                    if(condition.sellerChain[i].indexOf('mcd')> -1){
                                        regionId= condition.sellerChain[i];
                                        break
                                    }
                                }
                            }
                            //everything is right                          
                            Address.sendAddressToOrderForm(addr,regionId)
                        });   
                    }else{
                        Address.noStoreModal();
                    }
                });
            }
        });
        //eventos/animações do modal de mudar endereço
        $('.change-address').on('click', function (e) {
            e.preventDefault();
            var obj = {
                in: '.postal-code-form-body',
                out: '.modal-container',
            }
            //removendo
            $('.confirm-address').removeClass('loading');
            Utils.animationInOut(obj);
        });

        $('.insert-new-address').on('click', function (e) {
            e.preventDefault();
            Address.clearCEPInput();
        });

        $("body:not('.pre-home') .MZph__f--located .bc-f--clear, .insert-new-address").on('click', function () {
            //Animação voltar para o input cep 
            var obj = {
                in: '.postal-code-form-body',
                out: '.address-form-body',
            }
            //removendo loading 
            $('.confirm-address').removeClass('loading');
            Utils.animationInOut(obj, function () {
                $('.MZAddressChange').removeClass('top-5');
            });
        })

        $(".pre-home .bc-f--clear").on('click',function(){
            $(".mz-gmap-input-wrapper").fadeIn('slow');
            $(".MZph__form").hide();
            $('#autocomplete3').val('')

        });

        $('.adress-closed .p-a--newcep').on('click', function () {
            var obj = {
                in: '.postal-code-form-body',
                out: '.adress-closed',
            }
            //removendo loading
            $('.confirm-address').removeClass('loading');
            Utils.animationInOut(obj);
        });

        //Click retornar página anterior no fluxo de cep
        $('.closest-not-found .p-a--newcep').on('click', function () {
            var obj = {
                in: '.postal-code-form-body',
                out: '.closest-not-found',
            }
            //removendo loading
            $('.confirm-address').removeClass('loading');
            Utils.animationInOut(obj);
        });

        //end eventos e animações modal

        // Aplica o Fechar das Modal's
        Address.closeModalEvent();
    },
    getAddressFromCookie: function () {
        //Buscando endereço guardado no cookie        
        if ($.cookie("mzFormattedAddress")) {
            var mzFormattedAddress = decodeURIComponent($.cookie("mzFormattedAddress"));
            $(".address").html(mzFormattedAddress);
        }
        if ($.cookie("mzAddress")){
            var address = JSON.parse(decodeURIComponent($.cookie('mzAddress')));
            Address.checkAddressFields(address)

        } else if (!$('body').is('.pre-home')) {
            // window.location.href = "/"
        }
    },
    closeModalEvent: function () {
        $(".mz-modal__close, .a-c--twobuttons .p-a--newcep").click(function () {
            // algumas alterações só devem ocorrer na pré-home
            if ($('body').is(".pre-home")) {
                $(document.body).removeClass("no-delivery no-working");
                $(".pre-home .MZph__alert").fadeOut(); // Esconde as Modais
                $(".MZph__bgmodal").fadeOut();
                $(".bc-f--input:not(#autocomplete)").val("");
                $(".mz-gmap-input-wrapper").fadeIn('slow');
                $('.MZph__form').hide();                
            }
        });
    },
    changeAddressModal: function () {
        if ($('body').is(".pre-home")) {
            return
        }
        Address.changeAddressBtn();
        //Remover esta chamada de função após passar o HTML do javascript para o template apropriado
        // Address.addressEvents();

    },
    //Permitindo alterar o endereço nas páginas internas do site, não apenas na home;
    changeAddressBtn: function () {
        $(".MZa__address a").on('click', function (e) {
            e.preventDefault();
            $('.MZAddressChange').modal().addClass('show-modal-container');
            $('body').addClass("mz-modal-on");
            $('.modal-container').addClass('show-inline-block');
            Utils.animationFunc('.address-change-div-container', 'slide-in-bottom');
            // Utils.animationFunc('.close-modal', 'slide-in-bottom');
        });
    },
    // checkIfAddressExists: function () {
    //     //Verifica se há algum endereço selecionado, se não houver, retorna para a home
    //     if (!$.cookie("mzAddress") && window.location.pathname != '/') {
    //         window.location.pathname = '/';
    //     }
    // },
    animationEvents: function () {
        //Animação de fechar o modal
        $('.mz-modal__close,.cancel').on('click', function () {
            $('body').removeClass("mz-modal-on");
            Utils.animationFunc('.address-change-div-container', 'slide-out-bottom', function () {
                $('.MZAddressChange').removeClass('top-5').modal('hide');
                $('.address-change-div-container').removeClass('slide-out-bottom').unbind('webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend');
                $('.postal-code-form-body,.address-form-body,.closest-not-found,.adress-closed').removeClass('show-inline-block');
            });
        });
    }, startGeocoder: function () {
        var interval = setInterval(function () {
            if (!window.geocoder) {
                window.geocoder = new window.google.maps.Geocoder();
            } else {
                clearInterval(interval);
            }
        }, 200);

    }, formatAddressToGoogle: function (form) {
        var addressObj = JSON.parse(decodeURIComponent($.cookie('mzAddress')));
        addressObj.street = form.find('input[name=inputAddress]').val()
        addressObj.city = form.find('input[name=inputNeighborhood]').val(); //
        addressObj.number = form.find('input[name=inputNumber]').val();
        return Address.setFormattedAddress(addressObj,false);
    },
    noStoreModal:function(){
        $(".MZph__alert.adress-unavaible").fadeIn();
        $(".MZph__bgmodal").fadeIn();        

        //Animação Não está na área de entrega
        var obj = {
            in: '.closest-not-found',
            out: '.address-form-body',
        }

        Utils.animationInOut(obj, function () {
            $('.MZAddressChange').removeClass('top-5');
        });

    },
    closedStoreModal:function(todayHours){
        $(".MZph__bgmodal").fadeIn();
        $(".MZph__bgmodal").fadeIn();

        //animação fechado
        $('.a-c--hourwork span').text('O hórario de funcionamento ' + todayHours.OpeningTime.slice(0,-3) + 'h às ' + todayHours.ClosingTime.slice(0,-3) + 'h');
        var obj = {
            in: '.adress-closed',
            out: '.address-form-body',
        }

        Utils.animationInOut(obj, function () {
            $('.MZAddressChange').removeClass('top-5');
        });
    },fullFormTransition:function(){
        $(document.body).addClass("has-delivery");
        $(".pre-home .mz-gmap-input-wrapper").hide();
        $(".MZph__form").fadeIn('slow');

        var obj = {
            in: '.address-form-body',
            out: '.postal-code-form-body',
        }
        $('.MZAddressChange').addClass('top-5');
        Utils.animationInOut(obj);
    },getGeolocation:function(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(pos){
                $('.MZph__bc--wrapper-delivery .MZph__f--btnLocalization button').attr('disabled',false);
                var lat =pos.coords.latitude;
                var lng =pos.coords.longitude;
                var newCoords = {lat:lat,lng:lng};
                //keeping because may be useful for the user when switching to pickup
                $.cookie('MZImHereCoordinates',JSON.stringify({lng:lng,lat:lat}),{ path: '/', expires:1});
                Address.coordinatesToAddress(lat,lng);
            },function(err){
                console.log(err)
            },{timeout:10000,enableHighAccuracy: true,maximumAge:30000});
        }
    },coordinatesToAddress:function(lat,lng){
        //no bias, since vtex will return no store found nearby
        var config = {
            location: {lat:lat,lng:lng}
        }
        window.geocoder.geocode(config,function(result){
            if(!result || !result.length){
                Address.noStoreModal();
                return
            }

            Address.buildAddressGoogleResponse(result[0],[lng,lat]);

        });
    },trimSpaces:function(){
        $('input').on('keyup',function(){
            var val = $(this).val();
            val = val.replace(/\s+/g, " ");
            $(this).val(val)
        })
    }
}


	/* PICKUP */
	
var Pickup = {
    init: function () {
        Pickup.modalEvents();
        // Address.forcePickUp();
        Pickup.initGoogle();
        Pickup.setFormattedAddress();
    },
    initGoogle:function(){
        //bias
        var options = {
            bounds:new google.maps.LatLngBounds(new google.maps.LatLng(-34.603722, -58.381592),new google.maps.LatLng(-34.603722, -58.381592)),
            // types:['address'],
            componentRestrictions:{country:'ar'}
        }
        //creating autocomplete
        if($("#autocomplete").length){
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById("autocomplete"),options)
        }
        var autocomplete2 = new google.maps.places.Autocomplete(document.getElementById("autocomplete-2"),options);


        //creating mapa (default buenos aires)
        var ba = {lat:-34.603722, lng:-58.381592};
        var mapOptions = {
            zoom:12,
            center:ba,
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_CENTER
            },
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
        }
        var gmap = new google.maps.Map(document.getElementById('google-map'),mapOptions);

        window.gmap = gmap;

        //changing map position and setting markers on place changed
        if(autocomplete){
            autocomplete.addListener('place_changed',function(){
                var place = autocomplete.getPlace();
                if(!place || !place.geometry){
                    return
                }
                var lat = place.geometry.location.lat();
                var lng = place.geometry.location.lng();
                
                $.cookie('MZImHereCoordinates',JSON.stringify({lng:lng,lat:lat}),{ path: '/', expires:1})
                gmap.panTo({lat:lat,lng:lng});
                Pickup.setMarkers([lng,lat])
            });
        }

        autocomplete2.addListener('place_changed',function(){
            var place = autocomplete2.getPlace();
            if(!place || !place.geometry){
                return
            }
            var lat = place.geometry.location.lat();
            var lng = place.geometry.location.lng();

            $.cookie('MZImHereCoordinates',JSON.stringify({lng:lng,lat:lat}),{ path: '/', expires:1})
            gmap.panTo({lat:lat,lng:lng});
            Pickup.setMarkers([lng,lat]);

        });
        $('.MZph__bc--wrapper-pickup .MZph__f--btnConfirm button').attr('disabled',false);
        $('.MZph__bc--wrapper-pickup .MZph__f--btnConfirm button').on('click',function(){
            //Get location btn
            setTimeout(function(){
                Pickup.getGeolocation();
            },100)
            // Address.defaultPosBtn(window.gmap,{lat:lat,lng:lng});
        });
        //creating
        Pickup.currentLocationBtn();
    },
    getGeolocation:function(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(pos){
                //saving cookie because safari
                // localStorage.setItem('GeoAllowed','Allowed');
                $('.MZph__bc--wrapper-pickup .MZph__f--btnConfirm button').attr('disabled',false);
                var lat =pos.coords.latitude;
                var lng =pos.coords.longitude;
                var newCoords = {lat:lat,lng:lng};
                $.cookie('MZImHereCoordinates',JSON.stringify({lng:lng,lat:lat}),{ path: '/', expires:1})
                gmap.panTo(newCoords);
                Pickup.setMarkers([newCoords.lng,newCoords.lat]);
            },function(err){
                console.log(err)
            },{timeout:10000,enableHighAccuracy: true,maximumAge:30000});
        }
    },
    simulate:function(coordinates){
        var request = {
            url:'/api/checkout/pub/pickup-points?geoCoordinates='+coordinates[0]+';'+coordinates[1]+'&page=1&pageSize=100',
            type:"GET"
        }
        return $.ajax(request)
    },
    currentLocationBtn:function(){
        var resetPos = document.createElement('div');
        resetPos.classList.add('reset-position')

        var controlText = document.createElement('div');
        controlText.innerHTML = 'Usar mi ubicación';
        resetPos.appendChild(controlText);
        resetPos.addEventListener('click',function(){
            // window.gmap.panTo(newCoords);
            // Address.setMarkers([newCoords.lng,newCoords.lat]);
            setTimeout(function(){
                Pickup.getGeolocation();
            },100)
        });
        resetPos.index=1;
        window.gmap.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(resetPos);
    },
    setMarkers:function(coordinates,selectedSla){

        //Setting iAmHere marker

        if(window.iamhere){
            window.iamhere.popup.setMap(null);
            window.iamhere.marker.setMap(null);
        }else{
            window.iamhere = {}
        }
        var div = document.createElement('div')
        div.id = 'content'
        div.innerHTML = 'Vos estás acá'
        var userCoordinates = [coordinates[0],coordinates[1]];

        Popup = Pickup.createPopupClass();
        popup = new Popup(
            new google.maps.LatLng(userCoordinates[1], userCoordinates[0]),
            div);
        popup.setMap(gmap);
        window.iamhere.popup=popup;

        var iamhereMarker = new google.maps.Marker({
            position:{lat:coordinates[1], lng:coordinates[0]},
            map:window.gmap,
            title:'',
            zIndex:10000001,
            icon: '/arquivos/mcdar-imhere-v2.png',
        });
        window.iamhere.marker=iamhereMarker
        //End iamhere marker
        $('body').addClass('modal-map-active');

        //date to get working hours
        var day = new Date();
        day = day.getDay();

        //SIMULATE
        $('.mz-skeleton').show();
        $('.mz-sla .mz-sla__list .mz-sla__ul').remove();
        Pickup.simulate(coordinates).done(function(response){
            $('.mz-skeleton').hide();

        window.centerPos = {
            lat:coordinates[1],
            lng:coordinates[0]
        }

        // if(!response || !response.pickupPoints || !response.pickupPoints.length){
        if(!response || !response.items || !response.items.length){
            $('.mz-sla__list mz-sla__ul').html('');
            $('.mz-sla__title').hide();
            $('.mz-skeleton').hide();
            $('.mz-sla__title-unavailable').show();
            return
        }

        var pickupPoints = response.items;
        var infoWindow = new google.maps.InfoWindow({maxWidth:190});

        //helper to keep track of all markers and store information
        Pickup.clearMarkers();
        var markers = {};
        var listItemsArray = [];
        var lastClicked;

        for(var i=0;i<pickupPoints.length;i++){
            var thisPickUp = pickupPoints[i].pickupPoint;
            var pickupCoord = thisPickUp.address.geoCoordinates;
            var addressId = thisPickUp.address.addressId;
            var businessHours = thisPickUp.businessHours[day];
            var iconpath = '/arquivos/mcdar-marker.png';

            if(addressId=='teste'){
                continue
            }

            if(businessHours){
                var aux = Common.getStoreOperation(businessHours)
             }else{
                var aux = [["00:00","00:00"],true]
             }
             var workingHours= aux[0];
             var isClosed = aux[1];
 

            if(isClosed){
                iconpath ='/arquivos/mcdar-marker-disabled.png';
            }
            var marker = new google.maps.Marker({
                position:{lat:pickupCoord[1], lng:pickupCoord[0]},
                map:window.gmap,
                title:thisPickUp.friendlyName,
                icon: iconpath,
                info:addressId,
                zIndex:10000000,
            });

            markers[addressId] = {};
            markers[addressId].marker = marker;
            markers[addressId].infoWindow = thisPickUp;
            markers[addressId].isClosed = isClosed;

            marker.addListener('click',function(){
                infoWindow.setContent(Pickup.getInfoWindowHtml(markers[this.info].infoWindow,markers[this.info].isClosed));
                infoWindow.open(window.gmap,this);
                lastClicked = this;
                if(markers[this.info].isClosed){
                    $(".mz-sla__button button").attr('disabled','disabled');
                }else{
                    $(".mz-sla__button button").attr('disabled',false);
                }
                $('.store-item').removeClass('active');
                var listEl = $('.'+this.info);
                listEl.addClass('active');
                //moving selected sla to the top of the slas list
                var pos =$('.mz-sla__list .mz-sla__ul').position().top;
                var ttop =listEl.position().top;
                $('.mz-sla__list').animate({scrollTop:ttop-pos-15})
            });

            //distance
            //user location and marker location
            var d =Pickup.getDistance(coordinates,markers[addressId]);
            var aproxMeters = Math.round(d/100)*100;

            var dist = "Distância: ";
            if(aproxMeters>=1000){
                dist+=aproxMeters/1000+" km"
            }else{
                dist+=aproxMeters+" m";
            }

            //trigger click on marker when store in div is clicked
            var listItem = $('<li data-store="'+addressId+'" class="'+addressId+' store-item '+(isClosed?'disabled':"")+'"><strong>Restaurante - '+addressId+'</strong><p>'+Pickup.setFormattedAddressFromResponse(markers[addressId].infoWindow.address)+'</p>'+(workingHours?"<p>Horario de atención: "+workingHours[0]+" a "+workingHours[1]+"</p>":"<p class='map-distance'>"+dist+"</p>")+'</li>');
            listItem.on('click',function(){
                var val = $(this).attr('data-store');
                google.maps.event.trigger(markers[val].marker,'click')
            });

            listItemsArray.push([listItem,d]);

        }

        window.allMarkers = markers;
        listItemsArray = Pickup.orderByDistance(listItemsArray);

        var ul =$('<ul class="mz-sla__ul"></ul>')
        $('.mz-sla .mz-sla__list').prepend(ul);
        if(listItemsArray.length){
            for(var i=0;i<listItemsArray.length;i++){
                $('.mz-sla .mz-sla__list .mz-sla__ul').append(listItemsArray[i][0]);
            }
            $('.mz-sla__title').show();
            $('.mz-sla__title-unavailable').hide();
        }

        //button to proceed to mcmenu
        $('.mz-sla__button button').on('click',function(){
            if(lastClicked){
                Pickup.sendAddress(markers[lastClicked.info].infoWindow,'ARG');
            }
        });
        if(selectedSla){
            $('.mz-sla .mz-sla__list').find("[data-store='"+selectedSla+"']").click();
        }
    })

    },getInfoWindowHtml:function(addressInfo,isClosed){

        return "<div class='mz-info-window'><p>"+addressInfo.friendlyName+"<p>"+(isClosed?"<p class='store-closed'>Este local está cerrado para pedir por la app</p>":"")+"</div>";
    },
    sendAddress:function(addressInfo,country){

        //sending address info to vtex and redirecting to mcmenu
        vtexjs.checkout.getOrderForm().done(function(orderForm){
            //building address obj
            var address = {}
            address.geoCoordinatesIsValid = true;
            address.useGeolocationSearch = true;
            address.isPostalCodeValid = false;
            address.geoCoordinates = addressInfo.address.geoCoordinates;
            address.postalCode = addressInfo.address.postalCode;
            address.number = addressInfo.address.number;
            address.street = addressInfo.address.street
            address.neighborhood = addressInfo.address.neighborhood
            address.city = addressInfo.address.city
            address.state = addressInfo.address.state
            address.country = country
            address.addressType = "search"
            // address.addressType = "residential"
            $.cookie('MZFriendlyName',addressInfo.friendlyName,{ path: '/', expires:1});
            $.cookie('MZSelectedSla',addressInfo.address.addressId,{ path: '/', expires:1});
            // var sp = { address: address }
            var sp =
            {
                "clearAddressIfPostalCodeNotFound": false,
                "address":address
            }
            $.cookie('MZSelectedAddress',JSON.stringify(address),{ path: '/', expires:1});
            var bh = addressInfo.businessHours;
            $.cookie('MZStoreOperationHours',JSON.stringify(bh),{ path: '/', expires:1});
            var regionId = addressInfo.id.split('_')[0];
            vtexjs.checkout.sendAttachment("shippingData", sp).done(function(){
                //setting vtex store and redirecting to mchome
                Common.setVtexStore(1,regionId);

            });
        });
    },
    setFormattedAddressFromResponse:function(address){
        return (address.street?address.street:"") +(address.number?", " + address.number:"")+(address.neighborhood?' - '+address.neighborhood:"") +(address.city?", "+address.city:"")+ (address.state?", " +address.state:"")
    },
    setFormattedAddress:function(){
            $(window).on('mzVtexjsReady',function(){
                var address = vtexjs.checkout.orderForm.shippingData.address;
                if(address){
                    var formattedAddress = ($.cookie('MZFriendlyName')?$.cookie('MZFriendlyName')+' - ':"")+(Pickup.setFormattedAddressFromResponse(address))
                    $(".MZa__address").find(".address").html(formattedAddress);
                }
            })            
    },orderByDistance:function(listItemsArray){
        listItemsArray.sort(function(a,b){
            return a[1]-b[1];
        })
        return listItemsArray;

    },createPopupClass:function() {
        /**
         * https://developers.google.com/maps/documentation/javascript/examples/overlay-popup
         * A customized popup on the map.
         * @param {!google.maps.LatLng} position
         * @param {!Element} content The bubble div.
         * @constructor
         * @extends {google.maps.OverlayView}
         */
        function Popup(position, content) {
          this.position = position;

          content.classList.add('popup-bubble');

          // This zero-height div is positioned at the bottom of the bubble.
          var bubbleAnchor = document.createElement('div');
          bubbleAnchor.classList.add('popup-bubble-anchor');
          bubbleAnchor.appendChild(content);

          // This zero-height div is positioned at the bottom of the tip.
          this.containerDiv = document.createElement('div');
          this.containerDiv.classList.add('popup-container');
          this.containerDiv.style.zIndex=-1000;
          this.containerDiv.appendChild(bubbleAnchor);

          // Optionally stop clicks, etc., from bubbling up to the map.
          google.maps.OverlayView.preventMapHitsAndGesturesFrom(this.containerDiv);
        }
        // ES5 magic to extend google.maps.OverlayView.
        Popup.prototype = Object.create(google.maps.OverlayView.prototype);

        /** Called when the popup is added to the map. */
        Popup.prototype.onAdd = function() {
          this.getPanes().floatPane.appendChild(this.containerDiv);
        };

        /** Called when the popup is removed from the map. */
        Popup.prototype.onRemove = function() {
          if (this.containerDiv.parentElement) {
            this.containerDiv.parentElement.removeChild(this.containerDiv);
          }
        };

        /** Called each frame when the popup needs to draw itself. */
        Popup.prototype.draw = function() {
          var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);

          // Hide the popup when it is far out of view.
          var display =
              Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000 ?
              'block' :
              'none';

          if (display === 'block') {
            this.containerDiv.style.left = divPosition.x + 'px';
            this.containerDiv.style.top = divPosition.y + 'px';
          }
          if (this.containerDiv.style.display !== display) {
            this.containerDiv.style.display = display;
          }
        };

        return Popup;
      },clearMarkers:function(){
          if(!window.allMarkers){
              return
          }
          var array = Object.keys(window.allMarkers);
          for(var i=0;i<array.length;i++){
            window.allMarkers[array[i]].marker.setMap(null);
          }
      },modalEvents:function(){
        $('.mz-modal__header').on('click',function(){
            $('body').removeClass('modal-map-active');
            $('#autocomplete,#autocomplete-2').val('');
        });
        $('.MZa__address a').on('click',function(e){
            e.preventDefault();
            Pickup.addressAlreadySelected();
            $('body').addClass('modal-map-active');
        })
    },forcePickUp:function(){
        //sem uso
        $(window).on("mzVtexjsReady productAddedToCart", function () {
            if($('body').is('.pre-home')){
                return
            }
            vtexjs.checkout.getOrderForm().done(function(of){
                var shippingData = of.shippingData;
                if(!of.shippingData){
                    return
                }
                var sla = $.cookie('MZSelectedSla');
                var address = shippingData.address;
                if(!address || !address.addressId){
                    //loja não selecionado
                    return
                }
                var addressId = address.addressId

                if(shippingData && shippingData.logisticsInfo.length){

                    var logisticsInfo = [];
                    var update = false;
                    var selectedSla;
                    for(var i=0;i<shippingData.logisticsInfo.length;i++){
                        var li =shippingData.logisticsInfo;
                        //get sla
                        if(i==0){
                            if(li[i].slas.length){
                                for(var j=0;j<li[i].slas.length;j++){
                                    if(li[i].slas[j].pickupStoreInfo.address.addressId==sla){
                                        selectedSla = li[i].slas[j].id;
                                    }
                                }
                            }
                        }
                        if(!li[i].selectedSla || li[i].selectedSla.indexOf(sla)<=-1){
                            update = true;
                        }
                        var obj = {
                            'addressId':addressId,
                            'itemIndex':i,
                            "selectedSla": selectedSla?selectedSla:"Pickup ("+sla+")",
                            "selectedDeliveryChannel": "pickup-in-point"
                        }
                        logisticsInfo.push(obj);

                    }

                    if(update){
                        vtexjs.checkout.sendAttachment('shippingData',{address:address,logisticsInfo:logisticsInfo})
                    }
                }
            })
        })
    },getDistance:function(coordinates,marker){
        var lat1 = marker.infoWindow.address.geoCoordinates[1];
        var lat2 = coordinates[1];
        var lng1 = marker.infoWindow.address.geoCoordinates[0];
        var lng2 = coordinates[0];
        var phi1 = lat1*Math.PI / 180;
        var phi2 = lat2*Math.PI / 180;
        var dlambda = (lng2-lng1)*Math.PI / 180;
        var R = 6371e3;// aprox diameter of earth/ gives d in meters
        var d = Math.acos(Math.sin(phi1)*Math.sin(phi2) + Math.cos(phi1)*Math.cos(phi2) * Math.cos(dlambda)) * R;
        return d;
    },addressAlreadySelected:function(){
        //endereço já escolhido
        if($.cookie('MZSelectedAddress')){
            var selectedAddress = JSON.parse(decodeURIComponent($.cookie('MZSelectedAddress')));
            var geoCoordinates = selectedAddress.geoCoordinates;
            if(geoCoordinates && geoCoordinates.length){
                var coordinates = [];
                var lat = geoCoordinates[1];
                var lng = geoCoordinates[0];
                coordinates = [lng,lat];
                gmap.panTo({lat:lat,lng:lng});
                if($.cookie('MZImHereCoordinates')){
                    var cookie = JSON.parse(decodeURIComponent($.cookie('MZImHereCoordinates')));
                    coordinates = [cookie.lng,cookie.lat]
                }
                var selectedSla;
                if($.cookie('MZSelectedSla')){
                    var selectedSla=$.cookie('MZSelectedSla');
                }
                Pickup.setMarkers(coordinates,selectedSla)
            }
        }
    }
}

	/* UTILS */
	var Utils = {
    animationFunc:function(el,animationName,callbackFunc){
        if(!callbackFunc){
            callbackFunc = function(){
                $(el).removeClass(animationName)
            }
        }
        $(el).addClass(animationName).one('webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend',callbackFunc);
    },
    animationInOut:function(obj,callbackFunc){
        var aux = 0;
        $(obj.out+","+obj.in).one('webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend',function(){
            console.log('event')
            if(aux>0){
                $(obj.out).removeClass('slide-out-left').removeClass('show-inline-block');
                $(obj.in).removeClass('slide-in-right');
                $(obj.out+","+obj.in).unbind('webkitAnimationEnd oanimationend oAnimationEnd msAnimationEnd animationend');
                if(callbackFunc && typeof callbackFunc === "function"){
                    callbackFunc();
                }
                
                return;
            }
            aux++;
            
        })
        $(obj.out).addClass('slide-out-left show-inline-block');
        setTimeout(function(){
            $(obj.in).addClass('slide-in-right show-inline-block');
        },100)
       
    }
}

}
catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && console.error("Houve um erro nos objetos. Detalhes: " + e.message)); }

try {
	(function() {
		var body, ajaxStop, windowLoad;

		windowLoad = function() {
			Common.windowOnload();
			if (body.is(".home")) Home.windowOnload();
			else if (body.is(".resultado-busca, .departamento, .categoria")) Search.windowOnload();
			else if (body.is(".product")) Product.windowOnload();
			else if (body.is(".listas, .giftlist")) List.windowOnload();
			else if (body.is(".institucional")) Institutional.windowOnload();
			else if (body.is(".orders")) Orders.windowOnload();
		};

		ajaxStop = function() {
			Common.ajaxStop();
			if (body.is(".home")) Home.ajaxStop();
			else if (body.is(".resultado-busca, .departamento, .categoria")) Search.ajaxStop();
			else if (body.is(".product")) Product.ajaxStop();
			else if (body.is(".listas, .giftlist")) List.ajaxStop();
			else if (body.is(".institucional")) Institutional.ajaxStop();
			else if (body.is(".orders")) Orders.ajaxStop();
		};

		$(function() {
			body = $(document.body);
			Common.init();
			if (body.is(".home")) Home.init();
			else if (body.is(".resultado-busca, .departamento, .categoria")){
				Search.isSearch = $(document.body).is('.resultado-busca');
				Search.isDepartament = $(document.body).is('.departamento');
				Search.isCategory = $(document.body).is('.categoria');
				Search.init();
			}
			else if (body.is(".product")) Product.init();
			else if (body.is(".listas, .giftlist")) List.init();
			else if (body.is(".institucional")) Institutional.init();
			else if (body.is(".orders")) Orders.init();
			$(document).ajaxStop(ajaxStop);
			$(window).load(windowLoad);
			body.addClass('jsFullLoaded');
			Common.ready();
		});

		Common.run();
		if (location.pathname.substr(location.pathname.length - 2, 2).toLowerCase() == "/p")
			Product.run();
		else if (location.pathname.search(/^(\/giftlist|\/list\/)/) == 0)
			List.run();
	})();
}
catch (e) {(typeof console !== "undefined" && typeof console.error === "function" && $("body").addClass('jsFullLoaded jsFullLoadedError') && console.error("Houve um erro ao iniciar os objetos. Detalhes: " + e.message)); }

/*FUNÇÕES AUXILIARES*/
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);
/* FUNÇÕES AUXILIARES */
	
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);
/* Quatro Digital - VTEX Checkout Queue // 1.1 //  Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var l=function(a,c){if("object"===typeof console){var d="object"===typeof a;"undefined"!==typeof c&&"alerta"===c.toLowerCase()?d?console.warn("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[QD VTEX Checkout Queue]\n"+a):"undefined"!==typeof c&&"info"===c.toLowerCase()?d?console.info("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[QD VTEX Checkout Queue]\n"+a):d?console.error("[QD VTEX Checkout Queue]\n",a[0],a[1],
a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[QD VTEX Checkout Queue]\n"+a)}},f=null,g={},h={},e={};$.QD_checkoutQueue=function(a,c){if(null===f)if("object"===typeof window.vtexjs&&"undefined"!==typeof window.vtexjs.checkout)f=window.vtexjs.checkout;else return l("N\u00e3o foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a for\u00e7a n\u00e3o esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");var d=$.extend({done:function(){},fail:function(){}},c),
b=a.join(";"),k=function(){g[b].add(d.done);h[b].add(d.fail)};e[b]?k():(g[b]=$.Callbacks(),h[b]=$.Callbacks(),k(),e[b]=!0,f.getOrderForm(a).done(function(a){e[b]=!1;g[b].fire(a)}).fail(function(a){e[b]=!1;h[b].fire(a)}))}})();
/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};


/* Quatro Digital Simple Cart // 4.15 // Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */


(function(){var b=jQuery;if("function"!==typeof b.fn.simpleCart){b(function(){var b=vtexjs.checkout.getOrderForm;vtexjs.checkout.getOrderForm=function(){return b.call()}});try{window.QuatroDigital_simpleCart=window.QuatroDigital_simpleCart||{};window.QuatroDigital_simpleCart.ajaxStopOn=!1;b.fn.simpleCart=function(c,p,g){var d,h,m,l,f,k,q,r,t,n;h=function(a,b){if("object"===typeof console){var e="object"===typeof a;"undefined"!==typeof b&&"alerta"===b.toLowerCase()?e?console.warn("[Simple Cart]\n",
a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[Simple Cart]\n"+a):"undefined"!==typeof b&&"info"===b.toLowerCase()?e?console.info("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[Simple Cart]\n"+a):e?console.error("[Simple Cart]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[Simple Cart]\n"+a)}};d=b(this);"object"===typeof c?p=c:(c=c||!1,d=d.add(b.QD_simpleCart.elements));if(!d.length)return d;b.QD_simpleCart.elements=b.QD_simpleCart.elements.add(d);
g="undefined"===typeof g?!1:g;m={cartQtt:".qd_cart_qtt",cartTotal:".qd_cart_total",itemsText:".qd_items_text",currencySymbol:(b("meta[name=currency]").attr("content")||"R$")+" ",showQuantityByItems:!0,smartCheckout:!0,callback:function(){}};f=b.extend({},m,p);l=b("");d.each(function(){var a=b(this);a.data("qd_simpleCartOpts")||a.data("qd_simpleCartOpts",f)});n=function(a){window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};for(var b=0,e=0,c=0;c<a.totalizers.length;c++)"Shipping"==a.totalizers[c].id&&
(e+=a.totalizers[c].value),b+=a.totalizers[c].value;window._QuatroDigital_CartData.total=f.currencySymbol+qd_number_format(b/100,2,",",".");window._QuatroDigital_CartData.shipping=f.currencySymbol+qd_number_format(e/100,2,",",".");window._QuatroDigital_CartData.allTotal=f.currencySymbol+qd_number_format((b+e)/100,2,",",".");window._QuatroDigital_CartData.qtt=0;if(f.showQuantityByItems)for(c=0;c<a.items.length;c++)window._QuatroDigital_CartData.qtt+=a.items[c].quantity;else window._QuatroDigital_CartData.qtt=
a.items.length||0;try{window._QuatroDigital_CartData.callback&&window._QuatroDigital_CartData.callback.fire&&window._QuatroDigital_CartData.callback.fire()}catch(u){h("Problemas com o callback do Smart Cart")}t(l)};k=function(a,b){1===a?b.hide().filter(".singular").show():b.hide().filter(".plural").show()};r=function(a){1>a?d.addClass("qd-emptyCart"):d.removeClass("qd-emptyCart")};q=function(a,b){var c;c=parseInt(window._QuatroDigital_CartData.qtt,10);b.$this.show();isNaN(c)&&(h("O valor obtido para calcular o plural/singular n\u00e3o \u00e9 um n\u00famero! O valor ser\u00e1 definido para 0.",
"alerta"),c=0);b.cartTotalE.html(window._QuatroDigital_CartData.total);b.cartQttE.html(c);k(c,b.itemsTextE);r(c)};t=function(a){d.each(function(){var d={},e;e=b(this);c&&e.data("qd_simpleCartOpts")&&b.extend(f,e.data("qd_simpleCartOpts"));d.$this=e;d.cartQttE=e.find(f.cartQtt)||l;d.cartTotalE=e.find(f.cartTotal)||l;d.itemsTextE=e.find(f.itemsText)||l;d.emptyElem=e.find(f.emptyCart)||l;q(a,d);e.addClass("qd-sc-populated")})};(function(){if(f.smartCheckout){window._QuatroDigital_DropDown=window._QuatroDigital_DropDown||
{};if("undefined"!==typeof window._QuatroDigital_DropDown.getOrderForm&&(g?g:!c))return n(window._QuatroDigital_DropDown.getOrderForm);if("object"!==typeof window.vtexjs||"undefined"===typeof window.vtexjs.checkout)if("object"===typeof vtex&&"object"===typeof vtex.checkout&&"undefined"!==typeof vtex.checkout.SDK)new vtex.checkout.SDK;else return h("N\u00e3o foi encontrada a biblioteca VTEX.js");b.QD_checkoutQueue(["items","totalizers","shippingData"],{done:function(a){n(a);window._QuatroDigital_DropDown.getOrderForm=
a},fail:function(a){h(["N\u00e3o foi poss\u00edvel obter os dados para o carrinho.",a])}})}else alert("Esta \u00e9 uma fun\u00e7\u00e3o descontinuada =/")})();f.callback();b(window).trigger("simpleCartCallback.quatro_digital");return d};b.QD_simpleCart={elements:b("")};b(function(){var c;"function"===typeof window.ajaxRequestbuyButtonAsynchronous&&(c=window.ajaxRequestbuyButtonAsynchronous,window.ajaxRequestbuyButtonAsynchronous=function(k,g,d,h,m){c.call(this,k,g,d,h,function(){"function"===typeof m&&
m();b.QD_simpleCart.elements.each(function(){var c;c=b(this);c.simpleCart(c.data("qd_simpleCartOpts"))})})})});var k=window.ReloadItemsCart||void 0;window.ReloadItemsCart=function(c){b.fn.simpleCart(!0);"function"===typeof k?k.call(this,c):alert(c)};b(function(){var c=b(".qd_cart_auto");c.length&&c.simpleCart()});b(function(){b(window).bind("productAddedToCart minicartUpdated.vtex cartProductAdded.vtex",function(){b.fn.simpleCart(!0)})})}catch(c){"undefined"!==typeof console&&"function"===typeof console.error&&
console.error("Oooops! ",c)}}})();
/* Quatro Digital - VTEX Checkout Queue // 1.1 //  Carlos Vinicius [ QUATRO DIGITAL ] // Todos os direitos reservados */
(function(){var l=function(a,c){if("object"===typeof console){var d="object"===typeof a;"undefined"!==typeof c&&"alerta"===c.toLowerCase()?d?console.warn("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.warn("[QD VTEX Checkout Queue]\n"+a):"undefined"!==typeof c&&"info"===c.toLowerCase()?d?console.info("[QD VTEX Checkout Queue]\n",a[0],a[1],a[2],a[3],a[4],a[5],a[6],a[7]):console.info("[QD VTEX Checkout Queue]\n"+a):d?console.error("[QD VTEX Checkout Queue]\n",a[0],a[1],
a[2],a[3],a[4],a[5],a[6],a[7]):console.error("[QD VTEX Checkout Queue]\n"+a)}},f=null,g={},h={},e={};$.QD_checkoutQueue=function(a,c){if(null===f)if("object"===typeof window.vtexjs&&"undefined"!==typeof window.vtexjs.checkout)f=window.vtexjs.checkout;else return l("N\u00e3o foi encontrada a biblioteca VTEX.js. Este componente para por aqui, a for\u00e7a n\u00e3o esta mais contigo neste jornada! Para resolver isto inclua a biblioteca VTEX.js");var d=$.extend({done:function(){},fail:function(){}},c),
b=a.join(";"),k=function(){g[b].add(d.done);h[b].add(d.fail)};e[b]?k():(g[b]=$.Callbacks(),h[b]=$.Callbacks(),k(),e[b]=!0,f.getOrderForm(a).done(function(a){e[b]=!1;g[b].fire(a)}).fail(function(a){e[b]=!1;h[b].fire(a)}))}})();
/* Quatro Digital - Smart Buy Button // 2.1 // Carlos Vinicius // Todos os direitos reservados */
(function(u){try{var a=jQuery,r=a({}),n=function(a,d){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){var b;"object"===typeof a?(a.unshift("[Quatro Digital - Buy Button]\n"),b=a):b=["[Quatro Digital - Buy Button]\n"+a];if("undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase())if("undefined"!==typeof d&&"info"===d.toLowerCase())try{console.info.apply(console,b)}catch(h){try{console.info(b.join("\n"))}catch(k){}}else try{console.error.apply(console,
b)}catch(h){try{console.error(b.join("\n"))}catch(k){}}else try{console.warn.apply(console,b)}catch(h){try{console.warn(b.join("\n"))}catch(k){}}}},t={timeRemoveNewItemClass:5E3,isSmartCheckout:!0,buyButton:".productInformationWrapper  a.buy-button",buyQtt:"input.buy-in-page-quantity",selectSkuMsg:"javascript:",autoWatchBuyButton:!0,buyIfQuantityZeroed:!1,fakeRequest:!1,productPageCallback:function(g,d,b){a("body").is(".productQuickView")&&("success"===d?alert("Produto adicionado ao carrinho!"):(alert("Ooops! Algo saiu errado ao tentar adicionar seu produto ao carrinho. \n Vou te redirecionar para o carrinho."),
("object"===typeof parent?parent:document).location.href=b))},isProductPage:function(){return a("body").is("#produto, .produto")},execDefaultAction:function(a){return!1},allowBuyClick:function(){return!0},callback:function(){},asyncCallback:function(){}};a.QD_buyButton=function(g,d,b){function h(a){f.isSmartCheckout?a.data("qd-bb-click-active")||(a.data("qd-bb-click-active",1),a.on("click.qd_bb_buy_sc",function(a){if(!f.allowBuyClick())return!0;if(!0!==m.clickBuySmartCheckout.call(this))return a.preventDefault(),
!1})):alert("M\u00e9todo descontinuado!")}function k(e){e=e||a(f.buyButton);e.each(function(){var c=a(this);c.is(".qd-sbb-on")||(c.addClass("qd-sbb-on"),c.is(".btn-add-buy-button-asynchronous")&&!c.is(".remove-href")||c.data("qd-bb-active")||(c.data("qd-bb-active",1),c.children(".qd-bb-productAdded").length||c.append('<span class="qd-bb-productAdded"><i class="icon-thumbs-up"></i> <span>Produto adicionado</span></span>'),c.is(".buy-in-page-button")&&f.isProductPage()&&l.call(c),h(c)))});f.isProductPage()&&
!e.length&&n("Oooops!\nAparentemente esta \u00e9 uma p\u00e1gina de produto por\u00e9m n\u00e3o encontrei nenhum bot\u00e3o comprar!\nVerifique se \u00e9 este mesmo o seletor: '"+e.selector+"'.","info")}var f=b||f,p=a(g),m=this;window._Quatro_Digital_dropDown=window._Quatro_Digital_dropDown||{};window._QuatroDigital_CartData=window._QuatroDigital_CartData||{};m.prodAdd=function(e,c){p.addClass("qd-bb-itemAddCartWrapper qd-bb-lightBoxProdAdd");a("body").addClass("qd-bb-lightBoxBodyProdAdd");var b=
a(f.buyButton).filter("[href='"+(e.attr("href")||"---")+"']").add(e);b.addClass("qd-bb-itemAddBuyButtonWrapper");setTimeout(function(){p.removeClass("qd-bb-itemAddCartWrapper");b.removeClass("qd-bb-itemAddBuyButtonWrapper")},f.timeRemoveNewItemClass);window._Quatro_Digital_dropDown.getOrderForm=void 0;if("undefined"!==typeof d&&"function"===typeof d.getCartInfoByUrl)return f.isSmartCheckout||(n("fun\u00e7\u00e3o descontinuada"),d.getCartInfoByUrl()),window._QuatroDigital_DropDown.getOrderForm=void 0,
d.getCartInfoByUrl(function(c){window._Quatro_Digital_dropDown.getOrderForm=c;a.fn.simpleCart(!0,void 0,!0)},{lastSku:c});window._Quatro_Digital_dropDown.allowUpdate=!0;a.fn.simpleCart(!0);a(window).trigger("QuatroDigital.qd_sc_prodAdd",[e,c,b])};(function(){if(f.isSmartCheckout&&f.autoWatchBuyButton){var e=a(".btn-add-buy-button-asynchronous");e.length&&k(e)}})();var l=function(){var e=a(this);"undefined"!==typeof e.data("buyButton")?(e.unbind("click"),h(e)):(e.bind("mouseenter.qd_bb_buy_sc",function(c){e.unbind("click");
h(e);a(this).unbind(c)}),a(window).load(function(){e.unbind("click");h(e);e.unbind("mouseenter.qd_bb_buy_sc")}))};m.clickBuySmartCheckout=function(){var e=a(this),c=e.attr("href")||"";if(-1<c.indexOf(f.selectSkuMsg))return!0;c=c.replace(/redirect=(false|true)/ig,"").replace("?","?redirect=false&").replace(/&&/ig,"&");if(f.execDefaultAction(e))return e.attr("href",c.replace("redirect=false","redirect=true")),!0;c=c.replace(/http.?:/i,"");r.queue(function(b){if(!f.buyIfQuantityZeroed&&!/(&|\?)qty=[1-9][0-9]*/ig.test(c))return b();
var d=function(b,d){var g=c.match(/sku=([0-9]+)/ig),h=[];if("object"===typeof g&&null!==g)for(var k=g.length-1;0<=k;k--){var l=parseInt(g[k].replace(/sku=/ig,""));isNaN(l)||h.push(l)}f.productPageCallback.call(this,b,d,c);m.buyButtonClickCallback.call(this,b,d,c,h);m.prodAdd(e,c.split("ku=").pop().split("&").shift());"function"===typeof f.asyncCallback&&f.asyncCallback.call(this);a(window).trigger("productAddedToCart");a(window).trigger("cartProductAdded.vtex")};f.fakeRequest?(d(null,"success"),b()):
a.ajax({url:c,complete:d,mimeType:"text/html"}).always(function(){b()})})};m.buyButtonClickCallback=function(a,c,b,d){try{"success"===c&&"object"===typeof window.parent&&"function"===typeof window.parent._QuatroDigital_prodBuyCallback&&window.parent._QuatroDigital_prodBuyCallback(a,c,b,d)}catch(v){n("Problemas ao tentar comunicar a p\u00e1gina que o produto foi aicionado ao carrinho.")}};k();"function"===typeof f.callback?f.callback.call(this):n("Callback n\u00e3o \u00e9 uma fun\u00e7\u00e3o")};var l=
a.Callbacks();a.fn.QD_buyButton=function(g,d){var b=a(this);"undefined"!==typeof d||"object"!==typeof g||g instanceof a||(d=g,g=void 0);var h;l.add(function(){b.children(".qd-bb-itemAddWrapper").length||b.prepend('<span class="qd-bb-itemAddWrapper"><span class="qd-bb-itemAddIco"></span></span>');h=new a.QD_buyButton(b,g,a.extend({},t,d))});l.fire();a(window).on("QuatroDigital.qd_bb_prod_add",function(a,b,d){h.prodAdd(b,d)});return a.extend(b,h)};var q=0;a(document).ajaxSend(function(a,d,b){-1<b.url.toLowerCase().indexOf("/checkout/cart/add")&&
(q=(b.url.match(/sku=([0-9]+)/i)||[""]).pop())});a(window).bind("productAddedToCart.qdSbbVtex",function(){a(window).trigger("QuatroDigital.qd_bb_prod_add",[new a,q])});a(document).ajaxStop(function(){l.fire()})}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Oooops! ",g)}})(this);
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);
/*PHP JS - Number Format - http://phpjs.org/functions/number_format/*/
function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)};



/* Quatro Digital Plus Smart Cart // 7.6 // Carlos Vinicius // Todos os direitos reservados */
var _0x4142=['timeRemoveNewItemClass','\x20para\x20o\x20CEP\x20','stop','simpleCart','clearMessages','toggle','filter','.qd-ddc-cep-tooltip-text','qtt','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','Este\x20método\x20esta\x20descontinuado!','keyCode','load','updateOnlyHover','updateItems','.qd-ddc-infoAllTotal','.qd-ddc-infoTotalItems','outerHeight','Ir\x20ao\x20Carrinho','thumbSize','A\x20biblioteca\x20VTEX.js\x20não\x20foi\x20encontrada.\x20o\x20Script\x20tentará\x20buscar\x20no\x20CDN','addClass','.qd-ddc-checkout','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20carrinho','callback','each','data-sku-index','notification','length','val','mouseleave.qd_ddc_hover','insertProdImg','boolean','name','charCodeAt','renderProductsList','enableNotification','postalCode','allowRecalculate','remove','QD_dropDownCart','aviso','pqne%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','qd-ddc-noItems','attr','off','.qd-ddc-notification','.qd-ddc-wrapper','undefined','Finalizar\x20Compra','.qd-ddc-quantityMore,.qd-ddc-quantityMinus','.qd-ddc-quantity','apply','</div>','getParent','qd-ddc-cart-rendered','https','texts','#total','Não\x20foi\x20possível\x20remover\x20o\x20item\x20do\x20carrinho','click.qd_ddc_scrollDown','insertBefore','.qd_ddc_continueShopping','\x20dias\x20útéis','append','qd-loading','.qd-ddc-scrollDown','replace','getCartInfoByUrl','click','continueShopping','callbackProductsList\x20não\x20é\x20uma\x20função','productCategoryIds','appendTo','warn','keyup.qd_ddc_cep','_QuatroDigital_DropDown','Não\x20foi\x20informada\x20uma\x20URL\x20para\x20a\x20imagem\x20e\x20nem\x20um\x20SKU','<span\x20class=\x22qd-bap-wrapper\x22\x20title=\x22Itens\x20no\x20carrinho\x20para\x20este\x20produto.\x22><span\x20class=\x22qd-bap-wrapper2\x22><span\x20class=\x22qd-bap-qtt\x22></span></span></span>','_QuatroDigital_CartData','focusout.qd_ddc_change','.qd-ddc-quantityMinus','qd-ddc-','fail','.qd-ddc-image','body','.qdDdcContainer','qd-ddc-lastAdded','buyButtonClicked','smartCart','availability','allTotal','seller','buildNotification','Problemas\x20ao\x20tentar\x20definir\x20o\x20CEP\x20com\x20base\x20nos\x20dados\x20do\x20checkout.\x20Detalhes:\x20','avisso','<span\x20class=\x22qd-ddc-infoAllTotal\x22></span>','alerta','message','items','ProdAddTimeV2','parent','target','smartCheckout','prodId','//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js','.qd-ddc-prodQttWrapper:not(.qd_on)','<div\x20class=\x22qd-ddc-prodRow\x20qd_ddc_prodRow\x22><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column1\x20qd-ddc-prodImg\x22><div\x20class=\x22qd-ddc-prodImgWrapper\x22><img\x20src=\x22\x22\x20class=\x22qd-ddc-image\x22\x20/><span\x20class=\x22qd-ddc-imgLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column2\x20qd-ddc-prodName\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column3\x20qd-ddc-prodPrice\x22></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column4\x20qd-ddc-prodQtt\x22><div\x20class=\x22qd-ddc-prodQttWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMinus\x22></a><input\x20type=\x22text\x22\x20class=\x22qd-ddc-quantity\x22\x20/><a\x20href=\x22#\x22\x20class=\x22qd-ddc-quantityMore\x22></a><span\x20class=\x22qd-ddc-qttLoading\x22></span></div></div><div\x20class=\x22qd-ddc-prodCell\x20qd-ddc-column5\x20qd-ddc-prodRemove\x22><div\x20class=\x22qd-ddc-removeWrapper\x20clearfix\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-remove\x22></a><span\x20class=\x22qd-ddc-prodRowLoading\x22></span></div></div></div>','getOrderForm','.qd-ddc-emptyCart\x20p','_QuatroDigital_AmountProduct','forceImageHTTPS','cartContainer','.qd-dd-cep-slas','ite','Não\x20foi\x20possível\x20obter\x20\x27//io.vtex.com.br/vtex.js/1.0.0/vtex.min.js\x27\x20o\x20DropDown\x20não\x20será\x20executado.','qd-ddc-product-add-time','#value','Oooops!\x20','<span\x20class=\x22qd-ddc-infoTotalShipping\x22></span>','error','.qd-bap-wrapper','Não\x20foi\x20possível\x20obter\x20os\x20items\x20da\x20requisição','removeProduct','ajax','<div\x20class=\x22qd-ddc-notification\x22>','checkout','.qd-ddc-shipping\x20input','#items','shippingCalculate','closest','.qd-ddc-quantityMore','shippingEstimate','QD_buyButton','Grátis','qd-ddc-cart-rendered\x20qd-ddc-product-add-time','total','add','qd-bb-lightBoxBodyProdAdd\x20sc-qd-cart-opened\x20qd-ddc-product-add-time-v2','[Quatro\x20Digital\x20-\x20DropDown\x20Cart]\x0a','http','.qd_bap_wrapper_content','prod_','data-sku',',\x20entrega\x20em\x20','qd-loaded','logisticsInfo','.qd-ddc-cep-close','shippingData','tbody','vtexjs','allowUpdate','Callbacks','<span\x20class=\x22qd-ddc-notification-close\x22>X</span><p>#messageText</p>','slas','setOrderForm','.qd-ddc-prodPrice','function','meta[name=currency]','unshift','<span\x20class=\x22qd-ddc-infoTotalItems\x22></span>','mouseenter.qd_ddc_hover','linkCart','changeQantity','cartIsEmpty','extend','Atenção,\x20este\x20método\x20esta\x20descontinuado.','info','clone','.qd-ddc-scrollUp','Não\x20foi\x20possível\x20calcular\x20o\x20frete','imageUrl','.qd-ddc-prodName','emptyCart','selector','.qd-ddc-prodRow','click._QD_DDC_closeShipping','slideUp','click.qd_ddc_more','actionButtons','removeItems','qd-ddc-product-add-time-v2','done','qd_on','.qd-ddc-remove','find','toLowerCase','productId','src','$1-$2$3','object','lastSku','click.qd_ddc_minus','Não\x20foi\x20possível\x20localizar\x20os\x20dados\x20do\x20item.\x20A\x20chave\x20buscada\x20é\x20composta\x20pelo\x20SKU:\x20cItems[','input.qd-productId[value=','fromCharCode','dataOptionsCache','.qd-ddc-infoTotalShipping','qd-bap-item-added','erc','.qd-ddc-notification-close','dropDown','formatCepField','.qd-ddc-cep-btn','calculateShipping','O\x20Smart\x20Cart\x20não\x20é\x20mais\x20iniciado\x20desta\x20forma.\x20A\x20versão\x20que\x20você\x20esta\x20executando\x20tem\x20licença\x20restrita\x20e\x20todos\x20os\x20direitos\x20reservados\x20à\x20Quatro\x20Digital.','.qd_ddc_lightBoxOverlay','html','join','quickViewUpdate','preventDefault','sellingPrice','address','.qd-ddc-viewCart','.qd-ddc-prodWrapper,\x20.qd-ddc-prodWrapper2','content','.qd-ddc-prodWrapper2','exec','qd-bb-lightBoxProdAdd\x20sc-qd-cart-opened\x20qd-ddc-product-add-time-v2','ajaxStop','call','quantity','removeClass','shipping','callbackProductsList','skuName','toUpperCase','.qd-bap-qtt','qd-ddc-lastAddedFixed','scrollCart','totalizers','<span\x20class=\x22qd-ddc-infoTotalValue\x22></span>','productAddedToCart.qdDdcVtex\x20minicartUpdated.vtex.qdDdcVtex','<td>\x20R$\x20','<div\x20class=\x22qd-ddc-wrapper\x20qd-ddc-noItems\x22><div\x20class=\x22qd-ddc-wrapper2\x22><div\x20class=\x22qd_ddc_lightBoxClose\x22></div><div\x20class=\x22qd-ddc-wrapper3\x22><div\x20class=\x22qd-ddc-emptyCart\x22><p></p></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-products\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollUp\x22></a><div\x20class=\x22qd-ddc-prodWrapper\x22>\x20<div\x20class=\x22qd-ddc-prodWrapper2\x22></div>\x20</div><span\x20class=\x22qd-ddc-prodLoading\x22></span><a\x20href=\x22#\x22\x20class=\x22qd-ddc-scrollDown\x22></a></div><div\x20class=\x22qd-ddc-row\x20qd-ddc-info\x22><div\x20class=\x22qd-ddc-shipping\x22></div><div\x20class=\x22qd-ddc-infoTotal\x22></div><div\x20class=\x22qd-ddc-infoBts\x22><a\x20href=\x22/checkout/#/cart\x22\x20class=\x22qd-ddc-viewCart\x22></a><a\x20href=\x22#\x22\x20class=\x22qd_ddc_continueShopping\x22></a><a\x20href=\x22/checkout/#/orderform\x22\x20class=\x22qd-ddc-checkout\x22></a></div></div></div></div></div>','cartTotal','hide','prepend','$1-','qd-ddc-cart-empty','price','animate'];(function(_0x4d71b9,_0x4142d6){var _0x2ae81f=function(_0x1c9819){while(--_0x1c9819){_0x4d71b9['push'](_0x4d71b9['shift']());}};_0x2ae81f(++_0x4142d6);}(_0x4142,0x1a9));var _0x2ae8=function(_0x4d71b9,_0x4142d6){_0x4d71b9=_0x4d71b9-0x0;var _0x2ae81f=_0x4142[_0x4d71b9];return _0x2ae81f;};(function(){try{window[_0x2ae8('0x8a')]=window[_0x2ae8('0x8a')]||{},window[_0x2ae8('0x8a')][_0x2ae8('0x53')]=window[_0x2ae8('0x8a')]['callback']||$[_0x2ae8('0xd3')]();}catch(_0x2e38ec){_0x2ae8('0x6b')!==typeof console&&_0x2ae8('0xd8')===typeof console[_0x2ae8('0xb3')]&&console['error'](_0x2ae8('0xb1'),_0x2e38ec[_0x2ae8('0x9d')]);}}(),function(_0xa916d2){try{var _0x48b0ce=jQuery,_0x21c357=function(_0x27b3db,_0x3144a6){if(_0x2ae8('0x7')===typeof console&&_0x2ae8('0x6b')!==typeof console['error']&&'undefined'!==typeof console[_0x2ae8('0xe2')]&&_0x2ae8('0x6b')!==typeof console[_0x2ae8('0x85')]){var _0x131082;_0x2ae8('0x7')===typeof _0x27b3db?(_0x27b3db[_0x2ae8('0xda')](_0x2ae8('0xc6')),_0x131082=_0x27b3db):_0x131082=[_0x2ae8('0xc6')+_0x27b3db];if(_0x2ae8('0x6b')===typeof _0x3144a6||_0x2ae8('0x9c')!==_0x3144a6['toLowerCase']()&&_0x2ae8('0x64')!==_0x3144a6[_0x2ae8('0x3')]()){if(_0x2ae8('0x6b')!==typeof _0x3144a6&&_0x2ae8('0xe2')===_0x3144a6['toLowerCase']())try{console[_0x2ae8('0xe2')][_0x2ae8('0x6f')](console,_0x131082);}catch(_0x467168){try{console[_0x2ae8('0xe2')](_0x131082[_0x2ae8('0x19')]('\x0a'));}catch(_0x27ee79){}}else try{console[_0x2ae8('0xb3')][_0x2ae8('0x6f')](console,_0x131082);}catch(_0xd4ae0f){try{console[_0x2ae8('0xb3')](_0x131082[_0x2ae8('0x19')]('\x0a'));}catch(_0x13dcd8){}}}else try{console[_0x2ae8('0x85')][_0x2ae8('0x6f')](console,_0x131082);}catch(_0x2dbe5b){try{console[_0x2ae8('0x85')](_0x131082[_0x2ae8('0x19')]('\x0a'));}catch(_0x4fac46){}}}};window[_0x2ae8('0x87')]=window[_0x2ae8('0x87')]||{},window['_QuatroDigital_DropDown'][_0x2ae8('0xd2')]=!0x0,_0x48b0ce[_0x2ae8('0x63')]=function(){},_0x48b0ce['fn'][_0x2ae8('0x63')]=function(){return{'fn':new _0x48b0ce()};};var _0x143002=function(_0x2f8a78){var _0x36cb26={'z':_0x2ae8('0x65'),'zp':'qryvirel%25C2%25A8zpqbanyqf%25C2%25A8pbz%25C2%25A8ne%252F'};return function(_0x4f0aea){var _0x2b192d=function(_0x18f088){return _0x18f088;},_0x4d7b06=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x4f0aea=_0x4f0aea['d'+_0x4d7b06[0x10]+'c'+_0x4d7b06[0x11]+'m'+_0x2b192d(_0x4d7b06[0x1])+'n'+_0x4d7b06[0xd]]['l'+_0x4d7b06[0x12]+'c'+_0x4d7b06[0x0]+'ti'+_0x2b192d('o')+'n'];var _0x206556=function(_0x3bb83a){return escape(encodeURIComponent(_0x3bb83a[_0x2ae8('0x7e')](/\./g,'¨')[_0x2ae8('0x7e')](/[a-zA-Z]/g,function(_0x598cb1){return String[_0x2ae8('0xc')](('Z'>=_0x598cb1?0x5a:0x7a)>=(_0x598cb1=_0x598cb1[_0x2ae8('0x5d')](0x0)+0xd)?_0x598cb1:_0x598cb1-0x1a);})));},_0x339992=_0x206556(_0x4f0aea[[_0x4d7b06[0x9],_0x2b192d('o'),_0x4d7b06[0xc],_0x4d7b06[_0x2b192d(0xd)]][_0x2ae8('0x19')]('')]);_0x206556=_0x206556((window[['js',_0x2b192d('no'),'m',_0x4d7b06[0x1],_0x4d7b06[0x4][_0x2ae8('0x2b')](),_0x2ae8('0xad')][_0x2ae8('0x19')]('')]||'---')+['.v',_0x4d7b06[0xd],'e',_0x2b192d('x'),'co',_0x2b192d('mm'),_0x2ae8('0x10'),_0x4d7b06[0x1],'.c',_0x2b192d('o'),'m.',_0x4d7b06[0x13],'r'][_0x2ae8('0x19')](''));for(var _0xec2f95 in _0x36cb26){if(_0x206556===_0xec2f95+_0x36cb26[_0xec2f95]||_0x339992===_0xec2f95+_0x36cb26[_0xec2f95]){var _0x5d652b='tr'+_0x4d7b06[0x11]+'e';break;}_0x5d652b='f'+_0x4d7b06[0x0]+'ls'+_0x2b192d(_0x4d7b06[0x1]);}return _0x2b192d=!0x1,-0x1<_0x4f0aea[[_0x4d7b06[0xc],'e',_0x4d7b06[0x0],'rc',_0x4d7b06[0x9]]['join']('')]['indexOf']('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x2b192d=!0x0),[_0x5d652b,_0x2b192d];}(_0x2f8a78);}(window);if(!eval(_0x143002[0x0]))return _0x143002[0x1]?_0x21c357(_0x2ae8('0x44')):!0x1;_0x48b0ce['QD_dropDownCart']=function(_0x393325,_0x190a67){var _0x32ed1d=_0x48b0ce(_0x393325);if(!_0x32ed1d[_0x2ae8('0x57')])return _0x32ed1d;var _0xfdf47d=_0x48b0ce[_0x2ae8('0xe0')](!0x0,{},{'updateOnlyHover':!0x0,'texts':{'linkCart':_0x2ae8('0x4d'),'linkCheckout':_0x2ae8('0x6c'),'cartTotal':'<div><span>Itens:\x20#items</span><span>Subtotal:\x20#value</span></div><div><span>Frete:\x20#shipping</span><span>Total:\x20#total</span></div>','emptyCart':'Seu\x20carrinho\x20ainda\x20não\x20tem\x20nenhum\x20produto.','continueShopping':'Continuar\x20Comprando','shippingForm':'<div\x20class=\x22qd-ddc-cep-tooltip\x22><a\x20href=\x22#\x22\x20class=\x22qd-ddc-cep-btn\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</a><div\x20class=\x22qd-ddc-cep-tooltip-text\x22><h4\x20class=\x22qd-ddc-cep-title\x22>Consulte\x20o\x20prazo\x20e\x20o\x20valor\x20do\x20frete</h4><div\x20class=\x22qd-ddc-cep-wrapper\x22><input\x20type=\x22tel\x22\x20class=\x22qd-ddc-cep\x22\x20placeholder=\x22Digite\x20o\x20CEP\x20de\x20entrega\x22><a\x20class=\x22qd-ddc-cep-ok\x22\x20href=\x22#\x22>OK</a></div><a\x20class=\x22qd-ddc-cep-close\x22\x20href=\x22#\x22><i\x20class=\x22fa\x20fa-times\x22\x20aria-hidden=\x22true\x22></i>\x20Fechar</a></div></div>','notification':_0x2ae8('0xd4')},'timeRemoveNewItemClass':0x1388,'forceImageHTTPS':!0x1,'thumbSize':{'w':0x64,'h':0x64},'skuName':function(_0x156869){return _0x156869[_0x2ae8('0x2a')]||_0x156869[_0x2ae8('0x5c')];},'callback':function(){},'callbackProductsList':function(){},'enableNotification':!0x1,'clearNotification':!0x1,'smartCheckout':!0x0},_0x190a67);_0x48b0ce('');var _0x110409=this;if(_0xfdf47d[_0x2ae8('0xa2')]){var _0x266586=!0x1;_0x2ae8('0x6b')===typeof window['vtexjs']&&(_0x21c357(_0x2ae8('0x4f')),_0x48b0ce[_0x2ae8('0xb7')]({'url':_0x2ae8('0xa4'),'async':!0x1,'dataType':'script','error':function(){_0x21c357(_0x2ae8('0xae')),_0x266586=!0x0;}}));if(_0x266586)return _0x21c357('A\x20execução\x20do\x20DropDown\x20pará\x20por\x20aqui!');}if('object'===typeof window[_0x2ae8('0xd1')]&&_0x2ae8('0x6b')!==typeof window[_0x2ae8('0xd1')]['checkout'])var _0x12bd86=window[_0x2ae8('0xd1')]['checkout'];else{if(_0x2ae8('0x7')===typeof vtex&&_0x2ae8('0x7')===typeof vtex[_0x2ae8('0xb9')]&&_0x2ae8('0x6b')!==typeof vtex[_0x2ae8('0xb9')]['SDK'])_0x12bd86=new vtex[(_0x2ae8('0xb9'))]['SDK']();else return _0x21c357('Não\x20foi\x20encontrada\x20a\x20biblioteca\x20VTEX.js');}var _0xa084cc=/^\/|\/$/g,_0x1837ee=/[^0-9]/g,_0x2b4c2a=/([0-9]{5})([0-9])([0-9]{2})?/g,_0x5950c1=/(.{9}).*/g,_0x1a60c9=/(ids\/[0-9]+)[^\/]+/i;_0x110409[_0x2ae8('0xab')]=_0x2ae8('0x33');var _0x4d8942=function(_0x332548){_0x48b0ce(this)[_0x2ae8('0x7b')](_0x332548),_0x332548['find']('.qd_ddc_continueShopping,\x20.qd_ddc_lightBoxClose')[_0x2ae8('0xc4')](_0x48b0ce(_0x2ae8('0x17')))['on']('click.qd_ddc_closeFn',function(){_0x32ed1d[_0x2ae8('0x27')](_0x2ae8('0x23')),_0x48b0ce(document[_0x2ae8('0x90')])[_0x2ae8('0x27')](_0x2ae8('0xc5'));}),_0x48b0ce(document)[_0x2ae8('0x68')]('keyup.qd_ddc_closeFn')['on']('keyup.qd_ddc_closeFn',function(_0x2640d3){0x1b==_0x2640d3[_0x2ae8('0x46')]&&(_0x32ed1d[_0x2ae8('0x27')](_0x2ae8('0x23')),_0x48b0ce(document[_0x2ae8('0x90')])[_0x2ae8('0x27')]('qd-bb-lightBoxBodyProdAdd\x20sc-qd-cart-opened\x20qd-ddc-product-add-time-v2'));});var _0x360312=_0x332548[_0x2ae8('0x2')]('.qd-ddc-prodWrapper');_0x332548['find'](_0x2ae8('0xe4'))['on']('click.qd_ddc_scrollUp',function(){return _0x110409[_0x2ae8('0x2e')]('-',void 0x0,void 0x0,_0x360312),!0x1;}),_0x332548[_0x2ae8('0x2')](_0x2ae8('0x7d'))['on'](_0x2ae8('0x77'),function(){return _0x110409['scrollCart'](void 0x0,void 0x0,void 0x0,_0x360312),!0x1;});var _0x39ba11=_0x332548[_0x2ae8('0x2')](_0x2ae8('0x42')),_0x4cfc7c=_0x332548[_0x2ae8('0x2')]('.qd-ddc-cep'),_0x460528=_0x332548[_0x2ae8('0x2')]('.qd-ddc-cep-ok');_0x4cfc7c[_0x2ae8('0x58')]('')['on'](_0x2ae8('0x86'),function(_0x434826){_0x110409['formatCepField'](_0x48b0ce(this)),0xd==_0x434826[_0x2ae8('0x46')]&&_0x460528[_0x2ae8('0x80')]();}),_0x332548[_0x2ae8('0x2')](_0x2ae8('0x14'))[_0x2ae8('0x80')](function(_0x42de03){_0x42de03['preventDefault'](),_0x332548['find']('.qd-dd-cep-slas')[_0x2ae8('0x57')]&&_0x110409['shippingCalculate'](_0x4cfc7c),_0x39ba11[_0x2ae8('0x40')]();}),_0x332548[_0x2ae8('0x2')]('.qd-ddc-cep-close')[_0x2ae8('0x80')](function(_0xc2054){_0xc2054['preventDefault'](),_0x39ba11[_0x2ae8('0x35')]();}),_0x48b0ce(document)[_0x2ae8('0x68')](_0x2ae8('0xeb'))['on'](_0x2ae8('0xeb'),function(_0x5eafb7){_0x48b0ce(_0x5eafb7[_0x2ae8('0xa1')])[_0x2ae8('0xbd')](_0x332548['find']('.qd-ddc-cep-tooltip'))[_0x2ae8('0x57')]||_0x39ba11['hide']();}),_0x460528['click'](function(_0x4e5624){_0x4e5624[_0x2ae8('0x1b')](),_0x110409[_0x2ae8('0xbc')](_0x4cfc7c);});if(_0xfdf47d[_0x2ae8('0x48')]){var _0x14777d=0x0;_0x48b0ce(this)['on'](_0x2ae8('0xdc'),function(){var _0x5b615e=function(){window[_0x2ae8('0x87')]['allowUpdate']&&(_0x110409[_0x2ae8('0x7f')](),window[_0x2ae8('0x87')][_0x2ae8('0xd2')]=!0x1,_0x48b0ce['fn']['simpleCart'](!0x0),_0x110409[_0x2ae8('0xdf')]());};_0x14777d=setInterval(function(){_0x5b615e();},0x258),_0x5b615e();}),_0x48b0ce(this)['on'](_0x2ae8('0x59'),function(){clearInterval(_0x14777d);});}},_0x347cce=function(_0x4038d6){return _0x4038d6=_0x48b0ce(_0x4038d6),_0xfdf47d[_0x2ae8('0x74')][_0x2ae8('0x34')]=_0xfdf47d[_0x2ae8('0x74')]['cartTotal']['replace'](_0x2ae8('0xb0'),_0x2ae8('0x30')),_0xfdf47d['texts']['cartTotal']=_0xfdf47d[_0x2ae8('0x74')]['cartTotal'][_0x2ae8('0x7e')](_0x2ae8('0xbb'),_0x2ae8('0xdb')),_0xfdf47d[_0x2ae8('0x74')][_0x2ae8('0x34')]=_0xfdf47d[_0x2ae8('0x74')][_0x2ae8('0x34')][_0x2ae8('0x7e')]('#shipping',_0x2ae8('0xb2')),_0xfdf47d[_0x2ae8('0x74')]['cartTotal']=_0xfdf47d[_0x2ae8('0x74')][_0x2ae8('0x34')][_0x2ae8('0x7e')](_0x2ae8('0x75'),_0x2ae8('0x9b')),_0x4038d6[_0x2ae8('0x2')](_0x2ae8('0x1e'))['html'](_0xfdf47d[_0x2ae8('0x74')][_0x2ae8('0xdd')]),_0x4038d6[_0x2ae8('0x2')](_0x2ae8('0x79'))[_0x2ae8('0x18')](_0xfdf47d[_0x2ae8('0x74')][_0x2ae8('0x81')]),_0x4038d6['find'](_0x2ae8('0x51'))[_0x2ae8('0x18')](_0xfdf47d['texts']['linkCheckout']),_0x4038d6[_0x2ae8('0x2')]('.qd-ddc-infoTotal')['html'](_0xfdf47d[_0x2ae8('0x74')]['cartTotal']),_0x4038d6[_0x2ae8('0x2')]('.qd-ddc-shipping')[_0x2ae8('0x18')](_0xfdf47d[_0x2ae8('0x74')]['shippingForm']),_0x4038d6[_0x2ae8('0x2')](_0x2ae8('0xa8'))[_0x2ae8('0x18')](_0xfdf47d[_0x2ae8('0x74')][_0x2ae8('0xe8')]),_0x4038d6;}(this[_0x2ae8('0xab')]),_0x33936e=0x0;_0x32ed1d[_0x2ae8('0x54')](function(){0x0<_0x33936e?_0x4d8942[_0x2ae8('0x25')](this,_0x347cce[_0x2ae8('0xe3')]()):_0x4d8942[_0x2ae8('0x25')](this,_0x347cce),_0x33936e++;}),window[_0x2ae8('0x8a')][_0x2ae8('0x53')][_0x2ae8('0xc4')](function(){_0x48b0ce('.qd-ddc-infoTotalValue')[_0x2ae8('0x18')](window[_0x2ae8('0x8a')][_0x2ae8('0xc3')]||'--'),_0x48b0ce(_0x2ae8('0x4b'))['html'](window[_0x2ae8('0x8a')][_0x2ae8('0x43')]||'0'),_0x48b0ce(_0x2ae8('0xe'))['html'](window[_0x2ae8('0x8a')][_0x2ae8('0x28')]||'--'),_0x48b0ce(_0x2ae8('0x4a'))[_0x2ae8('0x18')](window[_0x2ae8('0x8a')][_0x2ae8('0x96')]||'--');});var _0x23bd53=function(_0x17cc4f,_0x497123){if(_0x2ae8('0x6b')===typeof _0x17cc4f[_0x2ae8('0x9e')])return _0x21c357(_0x2ae8('0xb5'));_0x110409[_0x2ae8('0x5e')]['call'](this,_0x497123);};_0x110409['getCartInfoByUrl']=function(_0x51c2db,_0xdcf9d9){_0x2ae8('0x6b')!=typeof _0xdcf9d9?window[_0x2ae8('0x87')][_0x2ae8('0xd')]=_0xdcf9d9:window[_0x2ae8('0x87')][_0x2ae8('0xd')]&&(_0xdcf9d9=window[_0x2ae8('0x87')][_0x2ae8('0xd')]),setTimeout(function(){window[_0x2ae8('0x87')][_0x2ae8('0xd')]=void 0x0;},_0xfdf47d[_0x2ae8('0x3b')]),_0x48b0ce(_0x2ae8('0x6a'))['removeClass']('qd-ddc-prodLoaded');if(_0xfdf47d['smartCheckout']){var _0x3a25a2=function(_0x2ad8ba){_0x110409[_0x2ae8('0xd6')](_0x2ad8ba),_0x23bd53(_0x2ad8ba,_0xdcf9d9),_0x2ae8('0x6b')!==typeof window[_0x2ae8('0xa9')]&&_0x2ae8('0xd8')===typeof window[_0x2ae8('0xa9')][_0x2ae8('0x22')]&&window[_0x2ae8('0xa9')][_0x2ae8('0x22')][_0x2ae8('0x25')](this),_0x48b0ce(_0x2ae8('0x6a'))['addClass']('qd-ddc-prodLoaded');};'undefined'!==typeof window[_0x2ae8('0x87')][_0x2ae8('0xa7')]?(_0x3a25a2(window['_QuatroDigital_DropDown'][_0x2ae8('0xa7')]),'function'===typeof _0x51c2db&&_0x51c2db(window[_0x2ae8('0x87')][_0x2ae8('0xa7')])):_0x48b0ce['QD_checkoutQueue']([_0x2ae8('0x9e'),_0x2ae8('0x2f'),'shippingData'],{'done':function(_0x496100){_0x3a25a2[_0x2ae8('0x25')](this,_0x496100),_0x2ae8('0xd8')===typeof _0x51c2db&&_0x51c2db(_0x496100);},'fail':function(_0x1edcb5){_0x21c357([_0x2ae8('0x52'),_0x1edcb5]);}});}else alert(_0x2ae8('0x45'));},_0x110409[_0x2ae8('0xdf')]=function(){var _0x40ecfa=_0x48b0ce(_0x2ae8('0x6a'));_0x40ecfa[_0x2ae8('0x2')](_0x2ae8('0xea'))[_0x2ae8('0x57')]?_0x40ecfa[_0x2ae8('0x27')]('qd-ddc-noItems'):_0x40ecfa[_0x2ae8('0x50')](_0x2ae8('0x66'));},_0x110409['renderProductsList']=function(_0x41814a){var _0x2fb83b=_0x48b0ce(_0x2ae8('0x21'));_0x2fb83b['empty'](),_0x2fb83b[_0x2ae8('0x54')](function(){var _0x3a352b=_0x48b0ce(this),_0x29302e,_0x30672d,_0x4bb85b=_0x48b0ce(''),_0x361c4d;for(_0x361c4d in window['_QuatroDigital_DropDown'][_0x2ae8('0xa7')][_0x2ae8('0x9e')])if(_0x2ae8('0x7')===typeof window[_0x2ae8('0x87')][_0x2ae8('0xa7')][_0x2ae8('0x9e')][_0x361c4d]){var _0x144a7f=window['_QuatroDigital_DropDown']['getOrderForm']['items'][_0x361c4d],_0x250724=_0x144a7f[_0x2ae8('0x83')][_0x2ae8('0x7e')](_0xa084cc,'')['split']('/'),_0x2553a1=_0x48b0ce(_0x2ae8('0xa6'));_0x2553a1[_0x2ae8('0x67')]({'data-sku':_0x144a7f['id'],'data-sku-index':_0x361c4d,'data-qd-departament':_0x250724[0x0],'data-qd-category':_0x250724[_0x250724[_0x2ae8('0x57')]-0x1]}),_0x2553a1['addClass'](_0x2ae8('0x8d')+_0x144a7f[_0x2ae8('0x95')]),_0x2553a1[_0x2ae8('0x2')](_0x2ae8('0xe7'))[_0x2ae8('0x7b')](_0xfdf47d['skuName'](_0x144a7f)),_0x2553a1[_0x2ae8('0x2')](_0x2ae8('0xd7'))[_0x2ae8('0x7b')](isNaN(_0x144a7f['sellingPrice'])?_0x144a7f[_0x2ae8('0x1c')]:0x0==_0x144a7f[_0x2ae8('0x1c')]?_0x2ae8('0xc1'):(_0x48b0ce(_0x2ae8('0xd9'))[_0x2ae8('0x67')](_0x2ae8('0x20'))||'R$')+'\x20'+qd_number_format(_0x144a7f['sellingPrice']/0x64,0x2,',','.')),_0x2553a1[_0x2ae8('0x2')](_0x2ae8('0x6e'))['attr']({'data-sku':_0x144a7f['id'],'data-sku-index':_0x361c4d})[_0x2ae8('0x58')](_0x144a7f[_0x2ae8('0x26')]),_0x2553a1['find'](_0x2ae8('0x1'))['attr']({'data-sku':_0x144a7f['id'],'data-sku-index':_0x361c4d}),_0x110409[_0x2ae8('0x5a')](_0x144a7f['id'],_0x2553a1['find'](_0x2ae8('0x8f')),_0x144a7f[_0x2ae8('0xe6')]),_0x2553a1[_0x2ae8('0x2')](_0x2ae8('0x6d'))[_0x2ae8('0x67')]({'data-sku':_0x144a7f['id'],'data-sku-index':_0x361c4d}),_0x2553a1[_0x2ae8('0x84')](_0x3a352b),_0x4bb85b=_0x4bb85b['add'](_0x2553a1);}try{var _0x9c3d83=_0x3a352b[_0x2ae8('0x71')](_0x2ae8('0x6a'))['find'](_0x2ae8('0xba'));_0x9c3d83['length']&&''==_0x9c3d83[_0x2ae8('0x58')]()&&window['_QuatroDigital_DropDown']['getOrderForm'][_0x2ae8('0xcf')][_0x2ae8('0x1d')]&&_0x9c3d83[_0x2ae8('0x58')](window['_QuatroDigital_DropDown'][_0x2ae8('0xa7')][_0x2ae8('0xcf')]['address'][_0x2ae8('0x60')]);}catch(_0x1864b7){_0x21c357(_0x2ae8('0x99')+_0x1864b7[_0x2ae8('0x9d')],'aviso');}_0x110409[_0x2ae8('0xee')](_0x3a352b),_0x110409[_0x2ae8('0xdf')](),_0x41814a&&_0x41814a[_0x2ae8('0x8')]&&function(){_0x30672d=_0x4bb85b[_0x2ae8('0x41')]('[data-sku=\x27'+_0x41814a[_0x2ae8('0x8')]+'\x27]'),_0x30672d[_0x2ae8('0x57')]&&(_0x29302e=0x0,_0x4bb85b[_0x2ae8('0x54')](function(){var _0x37f015=_0x48b0ce(this);if(_0x37f015['is'](_0x30672d))return!0x1;_0x29302e+=_0x37f015[_0x2ae8('0x4c')]();}),_0x110409[_0x2ae8('0x2e')](void 0x0,void 0x0,_0x29302e,_0x3a352b['add'](_0x3a352b[_0x2ae8('0xa0')]())),_0x4bb85b[_0x2ae8('0x27')](_0x2ae8('0x2d')),function(_0x4a93d8){_0x4a93d8[_0x2ae8('0x50')](_0x2ae8('0x92')),_0x4a93d8['addClass']('qd-ddc-lastAddedFixed'),setTimeout(function(){_0x4a93d8['removeClass'](_0x2ae8('0x92'));},_0xfdf47d[_0x2ae8('0x3b')]);}(_0x30672d),'undefined'!==typeof window['_QuatroDigital_DropDown']['ProdAddTimeV2']&&clearTimeout(window[_0x2ae8('0x87')][_0x2ae8('0x9f')]),_0x48b0ce(document[_0x2ae8('0x90')])[_0x2ae8('0x50')](_0x2ae8('0xf0')),window[_0x2ae8('0x87')]['ProdAddTimeV2']=setTimeout(function(){_0x48b0ce(document[_0x2ae8('0x90')])[_0x2ae8('0x27')](_0x2ae8('0xf0'));},_0xfdf47d[_0x2ae8('0x3b')]));}();}),function(){_QuatroDigital_DropDown[_0x2ae8('0xa7')][_0x2ae8('0x9e')][_0x2ae8('0x57')]?(_0x48b0ce('body')[_0x2ae8('0x27')]('qd-ddc-cart-empty')[_0x2ae8('0x50')](_0x2ae8('0xc2')),setTimeout(function(){_0x48b0ce(_0x2ae8('0x90'))[_0x2ae8('0x27')](_0x2ae8('0xaf'));},_0xfdf47d['timeRemoveNewItemClass'])):_0x48b0ce('body')[_0x2ae8('0x27')](_0x2ae8('0x72'))[_0x2ae8('0x50')](_0x2ae8('0x38'));}(),_0x2ae8('0xd8')===typeof _0xfdf47d[_0x2ae8('0x29')]?_0xfdf47d['callbackProductsList'][_0x2ae8('0x25')](this):_0x21c357(_0x2ae8('0x82'));},_0x110409['insertProdImg']=function(_0x300eea,_0x189d98,_0x3cf7ea){function _0x355d70(){_0x3cf7ea=_0x3cf7ea[_0x2ae8('0x7e')](_0x1a60c9,_0x2ae8('0x37')+_0xfdf47d['thumbSize']['w']+'-'+_0xfdf47d[_0x2ae8('0x4e')]['h']),_0xfdf47d[_0x2ae8('0xaa')]&&'string'==typeof _0x3cf7ea&&(_0x3cf7ea=_0x3cf7ea[_0x2ae8('0x7e')](_0x2ae8('0xc7'),_0x2ae8('0x73'))),_0x189d98[_0x2ae8('0x27')](_0x2ae8('0xcc'))[_0x2ae8('0x47')](function(){_0x48b0ce(this)['addClass'](_0x2ae8('0xcc'));})[_0x2ae8('0x67')](_0x2ae8('0x5'),_0x3cf7ea);}_0x3cf7ea?_0x355d70():isNaN(_0x300eea)?_0x21c357(_0x2ae8('0x88'),'alerta'):alert('Atenção\x20este\x20é\x20um\x20método\x20descontinuado.\x20Contacte\x20o\x20SAC.');},_0x110409[_0x2ae8('0xee')]=function(_0x5c0b65){var _0x4065c0=function(_0x5ee6e0,_0x5be6ab){var _0x4ea384=_0x48b0ce(_0x5ee6e0),_0x55b3cc=_0x4ea384[_0x2ae8('0x67')](_0x2ae8('0xca')),_0x3380e9=_0x4ea384[_0x2ae8('0x67')](_0x2ae8('0x55'));if(_0x55b3cc){var _0xe1d91=parseInt(_0x4ea384[_0x2ae8('0x58')]())||0x1;_0x110409['changeQantity']([_0x55b3cc,_0x3380e9],_0xe1d91,_0xe1d91+0x1,function(_0x4443bd){_0x4ea384['val'](_0x4443bd),'function'===typeof _0x5be6ab&&_0x5be6ab();});}},_0x49f71e=function(_0x1626af,_0x9a8261){var _0x2c762f=_0x48b0ce(_0x1626af),_0x1cc213=_0x2c762f[_0x2ae8('0x67')](_0x2ae8('0xca')),_0x30bd41=_0x2c762f[_0x2ae8('0x67')]('data-sku-index');if(_0x1cc213){var _0x5a0e14=parseInt(_0x2c762f[_0x2ae8('0x58')]())||0x2;_0x110409[_0x2ae8('0xde')]([_0x1cc213,_0x30bd41],_0x5a0e14,_0x5a0e14-0x1,function(_0x27320d){_0x2c762f['val'](_0x27320d),_0x2ae8('0xd8')===typeof _0x9a8261&&_0x9a8261();});}},_0x10435f=function(_0x850f06,_0x2d8983){var _0x1fdad9=_0x48b0ce(_0x850f06),_0x4976f2=_0x1fdad9[_0x2ae8('0x67')](_0x2ae8('0xca')),_0x575e63=_0x1fdad9[_0x2ae8('0x67')]('data-sku-index');if(_0x4976f2){var _0x53b201=parseInt(_0x1fdad9[_0x2ae8('0x58')]())||0x1;_0x110409[_0x2ae8('0xde')]([_0x4976f2,_0x575e63],0x1,_0x53b201,function(_0x4fd32e){_0x1fdad9[_0x2ae8('0x58')](_0x4fd32e),_0x2ae8('0xd8')===typeof _0x2d8983&&_0x2d8983();});}},_0x19ef9a=_0x5c0b65[_0x2ae8('0x2')](_0x2ae8('0xa5'));_0x19ef9a[_0x2ae8('0x50')](_0x2ae8('0x0'))['each'](function(){var _0x12ac3a=_0x48b0ce(this);_0x12ac3a['find'](_0x2ae8('0xbe'))['on'](_0x2ae8('0xed'),function(_0x3553be){_0x3553be[_0x2ae8('0x1b')](),_0x19ef9a[_0x2ae8('0x50')]('qd-loading'),_0x4065c0(_0x12ac3a[_0x2ae8('0x2')](_0x2ae8('0x6e')),function(){_0x19ef9a[_0x2ae8('0x27')](_0x2ae8('0x7c'));});}),_0x12ac3a[_0x2ae8('0x2')](_0x2ae8('0x8c'))['on'](_0x2ae8('0x9'),function(_0xd4dbab){_0xd4dbab[_0x2ae8('0x1b')](),_0x19ef9a[_0x2ae8('0x50')](_0x2ae8('0x7c')),_0x49f71e(_0x12ac3a['find']('.qd-ddc-quantity'),function(){_0x19ef9a[_0x2ae8('0x27')](_0x2ae8('0x7c'));});}),_0x12ac3a[_0x2ae8('0x2')](_0x2ae8('0x6e'))['on'](_0x2ae8('0x8b'),function(){_0x19ef9a[_0x2ae8('0x50')](_0x2ae8('0x7c')),_0x10435f(this,function(){_0x19ef9a[_0x2ae8('0x27')](_0x2ae8('0x7c'));});}),_0x12ac3a[_0x2ae8('0x2')](_0x2ae8('0x6e'))['on']('keyup.qd_ddc_change',function(_0x45d01a){0xd==_0x45d01a[_0x2ae8('0x46')]&&(_0x19ef9a['addClass'](_0x2ae8('0x7c')),_0x10435f(this,function(){_0x19ef9a['removeClass'](_0x2ae8('0x7c'));}));});}),_0x5c0b65[_0x2ae8('0x2')](_0x2ae8('0xea'))[_0x2ae8('0x54')](function(){var _0x1cb352=_0x48b0ce(this);_0x1cb352[_0x2ae8('0x2')](_0x2ae8('0x1'))['on']('click.qd_ddc_remove',function(){return _0x1cb352[_0x2ae8('0x50')](_0x2ae8('0x7c')),_0x110409[_0x2ae8('0xb6')](_0x48b0ce(this),function(_0x271eaa){_0x271eaa?_0x1cb352[_0x2ae8('0x3d')](!0x0)[_0x2ae8('0xec')](function(){_0x1cb352[_0x2ae8('0x62')](),_0x110409[_0x2ae8('0xdf')](),window[_0x2ae8('0x87')][_0x2ae8('0xa7')][_0x2ae8('0x9e')][_0x2ae8('0x57')]&&_0x110409['shippingCalculate'](_0x5c0b65[_0x2ae8('0x71')](_0x2ae8('0x6a'))[_0x2ae8('0x2')]('.qd-ddc-cep'));}):_0x1cb352[_0x2ae8('0x27')](_0x2ae8('0x7c'));}),!0x1;});});},_0x110409[_0x2ae8('0x13')]=function(_0x45012b){var _0x3ead41=_0x45012b[_0x2ae8('0x58')]();_0x3ead41=_0x3ead41[_0x2ae8('0x7e')](_0x1837ee,''),_0x3ead41=_0x3ead41['replace'](_0x2b4c2a,_0x2ae8('0x6')),_0x3ead41=_0x3ead41['replace'](_0x5950c1,'$1'),_0x45012b[_0x2ae8('0x58')](_0x3ead41);},_0x110409[_0x2ae8('0xbc')]=function(_0x45eb3e){var _0xb2fd86=(_0x45eb3e[_0x2ae8('0x58')]()||'')['replace'](/[^0-9]/g,'');0x8<=_0xb2fd86[_0x2ae8('0x57')]&&_0x12bd86[_0x2ae8('0x15')]({'postalCode':_0xb2fd86,'country':'BRA'})['done'](function(_0x2a66f7){_0x45eb3e[_0x2ae8('0xbd')]('.qd-ddc-cep-tooltip-text')[_0x2ae8('0x2')](_0x2ae8('0xac'))[_0x2ae8('0x62')](),_0x110409[_0x2ae8('0xd6')](_0x2a66f7),_0x110409[_0x2ae8('0x7f')]();var _0x18c7b6=[],_0x3fb491=_0x2a66f7['shippingData'][_0x2ae8('0xcd')];_0x2a66f7=_0x48b0ce('<table\x20class=\x22table\x20qd-dd-cep-slas\x22><thead><tr><th>Valor</th><th>Disponibilidade</th></tr></thead><tbody></tbody></table>');for(var _0x5d160e=0x0;_0x5d160e<_0x3fb491['length'];_0x5d160e++)for(var _0x40d4c0=_0x3fb491[_0x5d160e][_0x2ae8('0xd5')],_0x509de9=0x0;_0x509de9<_0x40d4c0[_0x2ae8('0x57')];_0x509de9++)_0x18c7b6[_0x509de9]=_0x18c7b6[_0x509de9]||{},_0x18c7b6[_0x509de9][_0x2ae8('0x39')]=(_0x18c7b6[_0x509de9][_0x2ae8('0x39')]||0x0)+_0x40d4c0[_0x509de9][_0x2ae8('0x39')],_0x18c7b6[_0x509de9]['shippingEstimate']=_0x40d4c0[_0x509de9]['shippingEstimate'],_0x18c7b6[_0x509de9][_0x2ae8('0x5c')]=_0x40d4c0[_0x509de9][_0x2ae8('0x5c')];for(_0x3fb491=0x0;_0x3fb491<_0x18c7b6[_0x2ae8('0x57')];_0x3fb491++)_0x5d160e=_0x48b0ce('<tr></tr>'),_0x40d4c0=0x1<_0x18c7b6[_0x3fb491][_0x2ae8('0xbf')]?_0x18c7b6[_0x3fb491][_0x2ae8('0xbf')]['replace']('bd','\x20dia\x20útil'):_0x18c7b6[_0x3fb491][_0x2ae8('0xbf')]['replace']('bd',_0x2ae8('0x7a')),_0x5d160e['append'](_0x2ae8('0x32')+qd_number_format(_0x18c7b6[_0x3fb491][_0x2ae8('0x39')]/0x64,0x2,',','.')+'</td><td>'+_0x18c7b6[_0x3fb491][_0x2ae8('0x5c')]+_0x2ae8('0xcb')+_0x40d4c0+_0x2ae8('0x3c')+_0xb2fd86+'</td>'),_0x5d160e[_0x2ae8('0x84')](_0x2a66f7['find'](_0x2ae8('0xd0')));_0x2a66f7[_0x2ae8('0x78')](_0x45eb3e[_0x2ae8('0xbd')](_0x2ae8('0x42'))[_0x2ae8('0x2')](_0x2ae8('0xce')));})[_0x2ae8('0x8e')](function(_0x2eb518){_0x21c357([_0x2ae8('0xe5'),_0x2eb518]);});},_0x110409[_0x2ae8('0xde')]=function(_0x2f2e3d,_0x24157e,_0xdd8e93,_0x16f8fa){function _0x498331(_0x47ad66){_0x47ad66='boolean'!==typeof _0x47ad66?!0x1:_0x47ad66,_0x110409['getCartInfoByUrl'](),window[_0x2ae8('0x87')][_0x2ae8('0xd2')]=!0x1,_0x110409[_0x2ae8('0xdf')](),'undefined'!==typeof window[_0x2ae8('0xa9')]&&_0x2ae8('0xd8')===typeof window[_0x2ae8('0xa9')][_0x2ae8('0x22')]&&window['_QuatroDigital_AmountProduct']['exec'][_0x2ae8('0x25')](this),_0x2ae8('0xd8')===typeof adminCart&&adminCart(),_0x48b0ce['fn'][_0x2ae8('0x3e')](!0x0,void 0x0,_0x47ad66),_0x2ae8('0xd8')===typeof _0x16f8fa&&_0x16f8fa(_0x24157e);}_0xdd8e93=_0xdd8e93||0x1;if(0x1>_0xdd8e93)return _0x24157e;if(_0xfdf47d[_0x2ae8('0xa2')]){var _0x42556e=window[_0x2ae8('0x87')]['getOrderForm']['items'];if('undefined'===typeof _0x42556e[_0x2f2e3d[0x1]])return _0x21c357(_0x2ae8('0xa')+_0x2f2e3d[0x1]+']'),_0x24157e;_0x12bd86[_0x2ae8('0x49')]([{'id':_0x42556e[_0x2f2e3d[0x1]]['id'],'index':_0x2f2e3d[0x1],'quantity':_0xdd8e93,'seller':_0x42556e[_0x2f2e3d[0x1]][_0x2ae8('0x97')]}],[_0x2ae8('0x9e'),_0x2ae8('0x2f'),'shippingData'],!0x0)[_0x2ae8('0xf1')](function(_0x3dd287){_0x110409['setOrderForm'](_0x3dd287),_0x498331(!0x0);})[_0x2ae8('0x8e')](function(_0xf100dc){_0x21c357(['Não\x20foi\x20possível\x20atualizar\x20a\x20quantidade\x20de\x20itens\x20no\x20carrinho',_0xf100dc]),_0x498331();});}else _0x21c357('atenção\x20esta\x20método\x20esta\x20descontinuado');},_0x110409[_0x2ae8('0xb6')]=function(_0x4f53bf,_0x526378){function _0x44170a(_0x560aa5){_0x560aa5=_0x2ae8('0x5b')!==typeof _0x560aa5?!0x1:_0x560aa5,_0x2ae8('0x6b')!==typeof window[_0x2ae8('0xa9')]&&_0x2ae8('0xd8')===typeof window['_QuatroDigital_AmountProduct']['exec']&&window[_0x2ae8('0xa9')][_0x2ae8('0x22')][_0x2ae8('0x25')](this),'function'===typeof adminCart&&adminCart(),_0x48b0ce['fn'][_0x2ae8('0x3e')](!0x0,void 0x0,_0x560aa5),_0x2ae8('0xd8')===typeof _0x526378&&_0x526378(_0x1cf2ed);}var _0x1cf2ed=!0x1,_0x349d09=_0x48b0ce(_0x4f53bf)[_0x2ae8('0x67')](_0x2ae8('0x55')),_0x9db625=window[_0x2ae8('0x87')][_0x2ae8('0xa7')][_0x2ae8('0x9e')];_0xfdf47d[_0x2ae8('0xa2')]||alert(_0x2ae8('0xe1'));if(_0x2ae8('0x6b')===typeof _0x9db625[_0x349d09])return _0x21c357(_0x2ae8('0xa')+_0x349d09+']'),_0x1cf2ed;_0x12bd86[_0x2ae8('0xef')]([{'index':_0x349d09,'quantity':0x0}])[_0x2ae8('0xf1')](function(_0x31c37){_0x1cf2ed=!0x0,_0x110409['setOrderForm'](_0x31c37),_0x23bd53(_0x31c37),_0x44170a(!0x0);})[_0x2ae8('0x8e')](function(_0x2a9097){_0x21c357([_0x2ae8('0x76'),_0x2a9097]),_0x44170a();});},_0x110409['scrollCart']=function(_0x22a5bb,_0x1b9af6,_0x3e8f55,_0x69f21d){_0x69f21d=_0x69f21d||_0x48b0ce(_0x2ae8('0x1f')),_0x22a5bb=_0x22a5bb||'+',_0x1b9af6=_0x1b9af6||0.9*_0x69f21d['height'](),_0x69f21d['stop'](!0x0,!0x0)[_0x2ae8('0x3a')]({'scrollTop':isNaN(_0x3e8f55)?_0x22a5bb+'='+_0x1b9af6+'px':_0x3e8f55});},_0x110409[_0x2ae8('0xd6')]=function(_0x4a8a7b){window[_0x2ae8('0x87')][_0x2ae8('0xa7')]=_0x4a8a7b,_0x2ae8('0x6b')!=typeof _0x4a8a7b&&_0xfdf47d[_0x2ae8('0x5f')]&&_0x110409[_0x2ae8('0x98')](_0x4a8a7b['messages']||[]);},_0x110409['buildNotification']=function(_0x1c9f64){_0x1c9f64[_0x2ae8('0x57')]&&(_0x1c9f64=_0xfdf47d[_0x2ae8('0x74')][_0x2ae8('0x56')][_0x2ae8('0x7e')]('#messageText',_0x1c9f64[0x0]['text']),_0x32ed1d[_0x2ae8('0x2')]('.qd-ddc-notification')['length']?_0x32ed1d[_0x2ae8('0x2')](_0x2ae8('0x69'))['html'](_0x1c9f64):_0x32ed1d['prepend'](_0x48b0ce(_0x2ae8('0xb8')+_0x1c9f64+_0x2ae8('0x70'))),_0x32ed1d['find'](_0x2ae8('0x11'))['on']('click',function(){_0x32ed1d[_0x2ae8('0x2')](_0x2ae8('0x69'))[_0x2ae8('0x62')](),_0xfdf47d['clearNotification']&&_0x2ae8('0xd8')==typeof vtexjs[_0x2ae8('0xb9')][_0x2ae8('0x3f')]&&vtexjs['checkout'][_0x2ae8('0x3f')]();}));},_0xfdf47d[_0x2ae8('0x48')]||(_0x110409[_0x2ae8('0x7f')](),_0x48b0ce['fn'][_0x2ae8('0x3e')](!0x0)),_0x48b0ce(window)['on'](_0x2ae8('0x31'),function(){try{_0x110409['setOrderForm'](void 0x0),_0x110409[_0x2ae8('0x7f')]();}catch(_0x454565){_0x21c357('Problemas\x20ao\x20atualizar\x20os\x20dados\x20do\x20carrinho\x20a\x20partir\x20do\x20eveento\x20da\x20VTEX.\x20Detalhes:\x20'+_0x454565['message'],_0x2ae8('0x9a'));}}),_0x2ae8('0xd8')===typeof _0xfdf47d[_0x2ae8('0x53')]?_0xfdf47d[_0x2ae8('0x53')][_0x2ae8('0x25')](this):_0x21c357('Callback\x20não\x20é\x20uma\x20função');},_0x48b0ce['fn'][_0x2ae8('0x63')]=function(_0x7bc7a2){var _0x69f135=_0x48b0ce(this);return _0x69f135['fn']=new _0x48b0ce[(_0x2ae8('0x63'))](this,_0x7bc7a2),_0x69f135;};}catch(_0x31523b){_0x2ae8('0x6b')!==typeof console&&_0x2ae8('0xd8')===typeof console[_0x2ae8('0xb3')]&&console['error']('Oooops!\x20',_0x31523b);}}(this),function(_0x3dc69b){try{var _0x239c27=jQuery;window[_0x2ae8('0xa9')]=window[_0x2ae8('0xa9')]||{},window['_QuatroDigital_AmountProduct'][_0x2ae8('0x9e')]={},window[_0x2ae8('0xa9')][_0x2ae8('0x61')]=!0x1,window[_0x2ae8('0xa9')][_0x2ae8('0x93')]=!0x1,window[_0x2ae8('0xa9')][_0x2ae8('0x1a')]=!0x1;var _0xd7520c=function(){if(window[_0x2ae8('0xa9')][_0x2ae8('0x61')]){var _0x511442=!0x1,_0x3ad48c={};window[_0x2ae8('0xa9')][_0x2ae8('0x9e')]={};for(_0x4d1288 in window[_0x2ae8('0x87')][_0x2ae8('0xa7')][_0x2ae8('0x9e')])if(_0x2ae8('0x7')===typeof window[_0x2ae8('0x87')][_0x2ae8('0xa7')]['items'][_0x4d1288]){var _0x2524c0=window[_0x2ae8('0x87')][_0x2ae8('0xa7')]['items'][_0x4d1288];'undefined'!==typeof _0x2524c0[_0x2ae8('0x4')]&&null!==_0x2524c0[_0x2ae8('0x4')]&&''!==_0x2524c0[_0x2ae8('0x4')]&&(window[_0x2ae8('0xa9')][_0x2ae8('0x9e')][_0x2ae8('0xc9')+_0x2524c0[_0x2ae8('0x4')]]=window[_0x2ae8('0xa9')][_0x2ae8('0x9e')][_0x2ae8('0xc9')+_0x2524c0[_0x2ae8('0x4')]]||{},window[_0x2ae8('0xa9')][_0x2ae8('0x9e')][_0x2ae8('0xc9')+_0x2524c0['productId']][_0x2ae8('0xa3')]=_0x2524c0[_0x2ae8('0x4')],_0x3ad48c['prod_'+_0x2524c0[_0x2ae8('0x4')]]||(window[_0x2ae8('0xa9')][_0x2ae8('0x9e')][_0x2ae8('0xc9')+_0x2524c0[_0x2ae8('0x4')]][_0x2ae8('0x43')]=0x0),window[_0x2ae8('0xa9')][_0x2ae8('0x9e')]['prod_'+_0x2524c0[_0x2ae8('0x4')]][_0x2ae8('0x43')]+=_0x2524c0[_0x2ae8('0x26')],_0x511442=!0x0,_0x3ad48c[_0x2ae8('0xc9')+_0x2524c0['productId']]=!0x0);}var _0x4d1288=_0x511442;}else _0x4d1288=void 0x0;window['_QuatroDigital_AmountProduct'][_0x2ae8('0x61')]&&(_0x239c27(_0x2ae8('0xb4'))['remove'](),_0x239c27('.qd-bap-item-added')[_0x2ae8('0x27')](_0x2ae8('0xf')));for(var _0x409cb9 in window[_0x2ae8('0xa9')][_0x2ae8('0x9e')]){_0x2524c0=window['_QuatroDigital_AmountProduct'][_0x2ae8('0x9e')][_0x409cb9];if(_0x2ae8('0x7')!==typeof _0x2524c0)return;_0x3ad48c=_0x239c27(_0x2ae8('0xb')+_0x2524c0[_0x2ae8('0xa3')]+']')[_0x2ae8('0x71')]('li');if(window[_0x2ae8('0xa9')][_0x2ae8('0x61')]||!_0x3ad48c[_0x2ae8('0x2')]('.qd-bap-wrapper')[_0x2ae8('0x57')])_0x511442=_0x239c27(_0x2ae8('0x89')),_0x511442[_0x2ae8('0x2')](_0x2ae8('0x2c'))[_0x2ae8('0x18')](_0x2524c0[_0x2ae8('0x43')]),_0x2524c0=_0x3ad48c['find'](_0x2ae8('0xc8')),_0x2524c0[_0x2ae8('0x57')]?_0x2524c0[_0x2ae8('0x36')](_0x511442)[_0x2ae8('0x50')]('qd-bap-item-added'):_0x3ad48c[_0x2ae8('0x36')](_0x511442);}_0x4d1288&&(window[_0x2ae8('0xa9')][_0x2ae8('0x61')]=!0x1);};window['_QuatroDigital_AmountProduct'][_0x2ae8('0x22')]=function(){window[_0x2ae8('0xa9')][_0x2ae8('0x61')]=!0x0,_0xd7520c[_0x2ae8('0x25')](this);},_0x239c27(document)[_0x2ae8('0x24')](function(){_0xd7520c[_0x2ae8('0x25')](this);});}catch(_0x33052d){'undefined'!==typeof console&&_0x2ae8('0xd8')===typeof console[_0x2ae8('0xb3')]&&console['error']('Oooops!\x20',_0x33052d);}}(this),function(){try{var _0x27766a=jQuery,_0x4c2386,_0x28c915={'selector':_0x2ae8('0x91'),'dropDown':{},'buyButton':{}};_0x27766a['QD_smartCart']=function(_0x27c3c0){var _0x4d00ad={};return _0x4c2386=_0x27766a[_0x2ae8('0xe0')](!0x0,{},_0x28c915,_0x27c3c0),_0x27c3c0=_0x27766a(_0x4c2386[_0x2ae8('0xe9')])['QD_dropDownCart'](_0x4c2386['dropDown']),_0x4d00ad['buyButton']=_0x2ae8('0x6b')!==typeof _0x4c2386[_0x2ae8('0x12')][_0x2ae8('0x48')]&&!0x1===_0x4c2386[_0x2ae8('0x12')]['updateOnlyHover']?_0x27766a(_0x4c2386[_0x2ae8('0xe9')])[_0x2ae8('0xc0')](_0x27c3c0['fn'],_0x4c2386['buyButton']):_0x27766a(_0x4c2386[_0x2ae8('0xe9')])['QD_buyButton'](_0x4c2386['buyButton']),_0x4d00ad[_0x2ae8('0x12')]=_0x27c3c0,_0x4d00ad;},_0x27766a['fn']['smartCart']=function(){_0x2ae8('0x7')===typeof console&&_0x2ae8('0xd8')===typeof console[_0x2ae8('0xe2')]&&console[_0x2ae8('0xe2')](_0x2ae8('0x16'));},_0x27766a[_0x2ae8('0x94')]=_0x27766a['fn'][_0x2ae8('0x94')];}catch(_0x39ed9f){_0x2ae8('0x6b')!==typeof console&&'function'===typeof console[_0x2ae8('0xb3')]&&console[_0x2ae8('0xb3')](_0x2ae8('0xb1'),_0x39ed9f);}}());
/* Quatro Digital Amazing Menu // 2.13 // Carlos Vinicius // Todos os direitos reservados */

/* FUNÇÕES AUXILIARES */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E",
"\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/ig,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
/* $("a").getParent("ul"); // 3 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT */
(function(a){a.fn.getParent=a.fn.closest})(jQuery);
/* Quatro Digital - jQuery Ajax Queue // 4.0 // Carlos Vinicius [ QUATRO DIGITAL ] // MIT <http://pt.wikipedia.org/wiki/Licen%C3%A7a_MIT> */
(function(d){if("function"!==typeof d.qdAjax){var a={};d.qdAjaxQueue=a;150>parseInt((d.fn.jquery.replace(/[^0-9]+/g,"")+"000").slice(0,3),10)&&console&&"function"==typeof console.error&&console.error();d.qdAjax=function(f){try{var b=d.extend({},{url:"",type:"GET",data:"",success:function(){},error:function(){},complete:function(){},clearQueueDelay:5},f),e;e="object"===typeof b.data?JSON.stringify(b.data):b.data.toString();var c=encodeURIComponent(b.url+"|"+b.type+"|"+e);a[c]=a[c]||{};"undefined"==
typeof a[c].jqXHR?a[c].jqXHR=d.ajax(b):(a[c].jqXHR.done(b.success),a[c].jqXHR.fail(b.error),a[c].jqXHR.always(b.complete));a[c].jqXHR.always(function(){isNaN(parseInt(b.clearQueueDelay))||setTimeout(function(){a[c].jqXHR=void 0},b.clearQueueDelay)});return a[c].jqXHR}catch(g){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas no $.qdAjax :( . Detalhes: "+g.message)}};d.qdAjax.version="4.0"}})(jQuery);

var _0x5e82=['.qd-am-collection','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','[QD\x20Amazing\x20Menu]\x0a','ul[itemscope]','fromCharCode','aviso','alerta','data-qdam-value','toLowerCase','hide','getParent','qd-am-first','trigger','qd-am-level-','undefined','charCodeAt','/qd-amazing-menu','qd-am-dropdown-menu','attr','info','UL\x20do\x20menu\x20não\x20encontrada','call',':not(ul)','>li','add','replace','object','qd-am-li-','clone','filter','Não\x20foi\x20possível\x20obter\x20os\x20dados\x20do\x20menu.\x20A\x20url\x20\x27','qd-am-column','parent','qdAmAddNdx','addClass','qd-am-collection-wrapper','qd-amazing-menu','QuatroDigital.am.ajaxCallback','apply','qdAjax','error','.qd_amazing_menu_auto','insertBefore','length','.qd-am-banner','trim','qd-am-dropdown','qd-am-last','QuatroDigital.am.callback','QD_amazingMenu','---','join','first','qd-am-','qd-am-elem-','each','children','ajaxCallback','erc','qryvirel%25C2%25A8zpqbanyqf%25C2%25A8pbz%25C2%25A8ne%252F','[class*=\x27colunas\x27]','qd-am-content-loaded','warn','last','url','text','find','.box-banner','qd-am-has-ul','callback'];(function(_0x3024f4,_0x5e8218){var _0x3069d0=function(_0x4bc2d4){while(--_0x4bc2d4){_0x3024f4['push'](_0x3024f4['shift']());}};_0x3069d0(++_0x5e8218);}(_0x5e82,0x12e));var _0x3069=function(_0x3024f4,_0x5e8218){_0x3024f4=_0x3024f4-0x0;var _0x3069d0=_0x5e82[_0x3024f4];return _0x3069d0;};(function(_0x4198f3){var _0x5967c2,_0x15ea7b=jQuery;if('function'!==typeof _0x15ea7b['fn'][_0x3069('0x1b')]){var _0x5629fd={'url':_0x3069('0x40'),'callback':function(){},'ajaxCallback':function(){}},_0x2382cb=function(_0x47de6d,_0x504b60){if(_0x3069('0x4')===typeof console&&'undefined'!==typeof console['error']&&_0x3069('0x3e')!==typeof console[_0x3069('0x43')]&&'undefined'!==typeof console['warn']){var _0xc76d29;_0x3069('0x4')===typeof _0x47de6d?(_0x47de6d['unshift']('[QD\x20Amazing\x20Menu]\x0a'),_0xc76d29=_0x47de6d):_0xc76d29=[_0x3069('0x32')+_0x47de6d];if('undefined'===typeof _0x504b60||_0x3069('0x36')!==_0x504b60[_0x3069('0x38')]()&&_0x3069('0x35')!==_0x504b60[_0x3069('0x38')]()){if('undefined'!==typeof _0x504b60&&'info'===_0x504b60['toLowerCase']())try{console['info']['apply'](console,_0xc76d29);}catch(_0x48fad0){try{console[_0x3069('0x43')](_0xc76d29[_0x3069('0x1d')]('\x0a'));}catch(_0x42a5d1){}}else try{console[_0x3069('0x12')][_0x3069('0x10')](console,_0xc76d29);}catch(_0x38d934){try{console[_0x3069('0x12')](_0xc76d29[_0x3069('0x1d')]('\x0a'));}catch(_0x4c9b98){}}}else try{console[_0x3069('0x28')][_0x3069('0x10')](console,_0xc76d29);}catch(_0x5b6d28){try{console[_0x3069('0x28')](_0xc76d29[_0x3069('0x1d')]('\x0a'));}catch(_0x3c18cb){}}}};_0x15ea7b['fn'][_0x3069('0xb')]=function(){var _0x3b5c5b=_0x15ea7b(this);return _0x3b5c5b[_0x3069('0x21')](function(_0x596c35){_0x15ea7b(this)[_0x3069('0xc')](_0x3069('0x5')+_0x596c35);}),_0x3b5c5b[_0x3069('0x1e')]()[_0x3069('0xc')](_0x3069('0x3b')),_0x3b5c5b[_0x3069('0x29')]()[_0x3069('0xc')](_0x3069('0x19')),_0x3b5c5b;},_0x15ea7b['fn']['QD_amazingMenu']=function(){},_0x4198f3=function(_0x2f67f9){var _0x256e96={'z':'pqne%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','zp':_0x3069('0x25')};return function(_0x3d8d65){var _0x12bd91=function(_0x44edc8){return _0x44edc8;},_0x23f640=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x3d8d65=_0x3d8d65['d'+_0x23f640[0x10]+'c'+_0x23f640[0x11]+'m'+_0x12bd91(_0x23f640[0x1])+'n'+_0x23f640[0xd]]['l'+_0x23f640[0x12]+'c'+_0x23f640[0x0]+'ti'+_0x12bd91('o')+'n'];var _0x47504e=function(_0x2bd30a){return escape(encodeURIComponent(_0x2bd30a[_0x3069('0x3')](/\./g,'¨')[_0x3069('0x3')](/[a-zA-Z]/g,function(_0x370feb){return String[_0x3069('0x34')](('Z'>=_0x370feb?0x5a:0x7a)>=(_0x370feb=_0x370feb[_0x3069('0x3f')](0x0)+0xd)?_0x370feb:_0x370feb-0x1a);})));},_0x4b8c3a=_0x47504e(_0x3d8d65[[_0x23f640[0x9],_0x12bd91('o'),_0x23f640[0xc],_0x23f640[_0x12bd91(0xd)]][_0x3069('0x1d')]('')]);_0x47504e=_0x47504e((window[['js',_0x12bd91('no'),'m',_0x23f640[0x1],_0x23f640[0x4]['toUpperCase'](),'ite'][_0x3069('0x1d')]('')]||_0x3069('0x1c'))+['.v',_0x23f640[0xd],'e',_0x12bd91('x'),'co',_0x12bd91('mm'),_0x3069('0x24'),_0x23f640[0x1],'.c',_0x12bd91('o'),'m.',_0x23f640[0x13],'r'][_0x3069('0x1d')](''));for(var _0x3570d5 in _0x256e96){if(_0x47504e===_0x3570d5+_0x256e96[_0x3570d5]||_0x4b8c3a===_0x3570d5+_0x256e96[_0x3570d5]){var _0x1d316c='tr'+_0x23f640[0x11]+'e';break;}_0x1d316c='f'+_0x23f640[0x0]+'ls'+_0x12bd91(_0x23f640[0x1])+'';}return _0x12bd91=!0x1,-0x1<_0x3d8d65[[_0x23f640[0xc],'e',_0x23f640[0x0],'rc',_0x23f640[0x9]]['join']('')]['indexOf']('qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82')&&(_0x12bd91=!0x0),[_0x1d316c,_0x12bd91];}(_0x2f67f9);}(window);if(!eval(_0x4198f3[0x0]))return _0x4198f3[0x1]?_0x2382cb(_0x3069('0x31')):!0x1;var _0x5bdbe0=function(_0x3dc5b3){var _0x33dfea=_0x3dc5b3[_0x3069('0x2c')]('.qd_am_code'),_0x1fe45d=_0x33dfea['filter'](_0x3069('0x16')),_0x33d033=_0x33dfea[_0x3069('0x7')](_0x3069('0x30'));if(_0x1fe45d[_0x3069('0x15')]||_0x33d033[_0x3069('0x15')])_0x1fe45d[_0x3069('0xa')]()[_0x3069('0xc')]('qd-am-banner-wrapper'),_0x33d033[_0x3069('0xa')]()['addClass'](_0x3069('0xd')),_0x15ea7b[_0x3069('0x11')]({'url':_0x5967c2['url'],'dataType':'html','success':function(_0x2bc81d){var _0x15735c=_0x15ea7b(_0x2bc81d);_0x1fe45d[_0x3069('0x21')](function(){var _0x56cf03=_0x15ea7b(this),_0x1202b5=_0x15735c[_0x3069('0x2c')]('img[alt=\x27'+_0x56cf03[_0x3069('0x42')](_0x3069('0x37'))+'\x27]');_0x1202b5['length']&&(_0x1202b5[_0x3069('0x21')](function(){_0x15ea7b(this)[_0x3069('0x3a')](_0x3069('0x2d'))[_0x3069('0x6')]()[_0x3069('0x14')](_0x56cf03);}),_0x56cf03['hide']());})[_0x3069('0xc')]('qd-am-content-loaded'),_0x33d033[_0x3069('0x21')](function(){var _0x3e4eb0={},_0x419119=_0x15ea7b(this);_0x15735c[_0x3069('0x2c')]('h2')[_0x3069('0x21')](function(){if(_0x15ea7b(this)[_0x3069('0x2b')]()[_0x3069('0x17')]()[_0x3069('0x38')]()==_0x419119[_0x3069('0x42')](_0x3069('0x37'))[_0x3069('0x17')]()['toLowerCase']())return _0x3e4eb0=_0x15ea7b(this),!0x1;}),_0x3e4eb0[_0x3069('0x15')]&&(_0x3e4eb0[_0x3069('0x21')](function(){_0x15ea7b(this)['getParent'](_0x3069('0x26'))['clone']()[_0x3069('0x14')](_0x419119);}),_0x419119[_0x3069('0x39')]());})[_0x3069('0xc')](_0x3069('0x27'));},'error':function(){_0x2382cb(_0x3069('0x8')+_0x5967c2[_0x3069('0x2a')]+'\x27\x20falho.');},'complete':function(){_0x5967c2[_0x3069('0x23')][_0x3069('0x45')](this),_0x15ea7b(window)[_0x3069('0x3c')](_0x3069('0xf'),_0x3dc5b3);},'clearQueueDelay':0xbb8});};_0x15ea7b[_0x3069('0x1b')]=function(_0x22adcb){var _0x50891a=_0x22adcb[_0x3069('0x2c')](_0x3069('0x33'))[_0x3069('0x21')](function(){var _0xd81cf5=_0x15ea7b(this);if(!_0xd81cf5[_0x3069('0x15')])return _0x2382cb([_0x3069('0x44'),_0x22adcb],'alerta');_0xd81cf5['find']('li\x20>ul')[_0x3069('0xa')]()[_0x3069('0xc')](_0x3069('0x2e')),_0xd81cf5['find']('li')[_0x3069('0x21')](function(){var _0x383c1c=_0x15ea7b(this),_0x4e381e=_0x383c1c[_0x3069('0x22')](_0x3069('0x0'));_0x4e381e['length']&&_0x383c1c['addClass'](_0x3069('0x20')+_0x4e381e[_0x3069('0x1e')]()[_0x3069('0x2b')]()[_0x3069('0x17')]()['replaceSpecialChars']()[_0x3069('0x3')](/\./g,'')['replace'](/\s/g,'-')[_0x3069('0x38')]());});var _0x73a92e=_0xd81cf5[_0x3069('0x2c')](_0x3069('0x1'))[_0x3069('0xb')]();_0xd81cf5[_0x3069('0xc')](_0x3069('0xe')),_0x73a92e=_0x73a92e[_0x3069('0x2c')]('>ul'),_0x73a92e[_0x3069('0x21')](function(){var _0x32d129=_0x15ea7b(this);_0x32d129[_0x3069('0x2c')](_0x3069('0x1'))[_0x3069('0xb')]()[_0x3069('0xc')](_0x3069('0x9')),_0x32d129['addClass'](_0x3069('0x41')),_0x32d129[_0x3069('0xa')]()[_0x3069('0xc')](_0x3069('0x18'));}),_0x73a92e[_0x3069('0xc')]('qd-am-dropdown');var _0x1b6c76=0x0,_0xe9dfbf=function(_0x568cae){_0x1b6c76+=0x1,_0x568cae=_0x568cae['children']('li')[_0x3069('0x22')]('*'),_0x568cae['length']&&(_0x568cae[_0x3069('0xc')](_0x3069('0x3d')+_0x1b6c76),_0xe9dfbf(_0x568cae));};_0xe9dfbf(_0xd81cf5),_0xd81cf5[_0x3069('0x2')](_0xd81cf5['find']('ul'))['each'](function(){var _0x188d40=_0x15ea7b(this);_0x188d40[_0x3069('0xc')](_0x3069('0x1f')+_0x188d40[_0x3069('0x22')]('li')[_0x3069('0x15')]+'-li');});});_0x5bdbe0(_0x50891a),_0x5967c2[_0x3069('0x2f')][_0x3069('0x45')](this),_0x15ea7b(window)['trigger'](_0x3069('0x1a'),_0x22adcb);},_0x15ea7b['fn'][_0x3069('0x1b')]=function(_0x525d91){var _0x32330d=_0x15ea7b(this);if(!_0x32330d[_0x3069('0x15')])return _0x32330d;return _0x5967c2=_0x15ea7b['extend']({},_0x5629fd,_0x525d91),_0x32330d['exec']=new _0x15ea7b[(_0x3069('0x1b'))](_0x15ea7b(this)),_0x32330d;},_0x15ea7b(function(){_0x15ea7b(_0x3069('0x13'))['QD_amazingMenu']();});}}(this));
/**
*  Ajax Autocomplete for jQuery, version 1.4.9
*  (c) 2017 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(a){"use strict";function b(c,d){var e=this;e.element=c,e.el=a(c),e.suggestions=[],e.badQueries=[],e.selectedIndex=-1,e.currentValue=e.element.value,e.timeoutId=null,e.cachedResponse={},e.onChangeTimeout=null,e.onChange=null,e.isLocal=!1,e.suggestionsContainer=null,e.noSuggestionsContainer=null,e.options=a.extend(!0,{},b.defaults,d),e.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},e.hint=null,e.hintValue="",e.selection=null,e.initialize(),e.setOptions(d)}function c(a,b,c){return a.value.toLowerCase().indexOf(c)!==-1}function d(b){return"string"==typeof b?a.parseJSON(b):b}function e(a,b){if(!b)return a.value;var c="("+g.escapeRegExChars(b)+")";return a.value.replace(new RegExp(c,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")}function f(a,b){return'<div class="autocomplete-group">'+b+"</div>"}var g=function(){return{escapeRegExChars:function(a){return a.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},createNode:function(a){var b=document.createElement("div");return b.className=a,b.style.position="absolute",b.style.display="none",b}}}(),h={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40},i=a.noop;b.utils=g,a.Autocomplete=b,b.defaults={ajaxSettings:{},autoSelectFirst:!1,appendTo:"body",serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:e,formatGroup:f,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:i,onSearchComplete:i,onSearchError:i,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:c,paramName:"query",transformResult:d,showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1},b.prototype={initialize:function(){var c,d=this,e="."+d.classes.suggestion,f=d.classes.selected,g=d.options;d.element.setAttribute("autocomplete","off"),d.noSuggestionsContainer=a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),d.suggestionsContainer=b.utils.createNode(g.containerClass),c=a(d.suggestionsContainer),c.appendTo(g.appendTo||"body"),"auto"!==g.width&&c.css("width",g.width),c.on("mouseover.autocomplete",e,function(){d.activate(a(this).data("index"))}),c.on("mouseout.autocomplete",function(){d.selectedIndex=-1,c.children("."+f).removeClass(f)}),c.on("click.autocomplete",e,function(){d.select(a(this).data("index"))}),c.on("click.autocomplete",function(){clearTimeout(d.blurTimeoutId)}),d.fixPositionCapture=function(){d.visible&&d.fixPosition()},a(window).on("resize.autocomplete",d.fixPositionCapture),d.el.on("keydown.autocomplete",function(a){d.onKeyPress(a)}),d.el.on("keyup.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("blur.autocomplete",function(){d.onBlur()}),d.el.on("focus.autocomplete",function(){d.onFocus()}),d.el.on("change.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("input.autocomplete",function(a){d.onKeyUp(a)})},onFocus:function(){var a=this;a.fixPosition(),a.el.val().length>=a.options.minChars&&a.onValueChange()},onBlur:function(){var a=this;a.blurTimeoutId=setTimeout(function(){a.hide()},200)},abortAjax:function(){var a=this;a.currentRequest&&(a.currentRequest.abort(),a.currentRequest=null)},setOptions:function(b){var c=this,d=a.extend({},c.options,b);c.isLocal=Array.isArray(d.lookup),c.isLocal&&(d.lookup=c.verifySuggestionsFormat(d.lookup)),d.orientation=c.validateOrientation(d.orientation,"bottom"),a(c.suggestionsContainer).css({"max-height":d.maxHeight+"px",width:d.width+"px","z-index":d.zIndex}),this.options=d},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var a=this;a.disabled=!0,clearTimeout(a.onChangeTimeout),a.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var b=this,c=a(b.suggestionsContainer),d=c.parent().get(0);if(d===document.body||b.options.forceFixPosition){var e=b.options.orientation,f=c.outerHeight(),g=b.el.outerHeight(),h=b.el.offset(),i={top:h.top,left:h.left};if("auto"===e){var j=a(window).height(),k=a(window).scrollTop(),l=-k+h.top-f,m=k+j-(h.top+g+f);e=Math.max(l,m)===l?"top":"bottom"}if("top"===e?i.top+=-f:i.top+=g,d!==document.body){var n,o=c.css("opacity");b.visible||c.css("opacity",0).show(),n=c.offsetParent().offset(),i.top-=n.top,i.top+=d.scrollTop,i.left-=n.left,b.visible||c.css("opacity",o).hide()}"auto"===b.options.width&&(i.width=b.el.outerWidth()+"px"),c.css(i)}},isCursorAtEnd:function(){var a,b=this,c=b.el.val().length,d=b.element.selectionStart;return"number"==typeof d?d===c:!document.selection||(a=document.selection.createRange(),a.moveStart("character",-c),c===a.text.length)},onKeyPress:function(a){var b=this;if(!b.disabled&&!b.visible&&a.which===h.DOWN&&b.currentValue)return void b.suggest();if(!b.disabled&&b.visible){switch(a.which){case h.ESC:b.el.val(b.currentValue),b.hide();break;case h.RIGHT:if(b.hint&&b.options.onHint&&b.isCursorAtEnd()){b.selectHint();break}return;case h.TAB:if(b.hint&&b.options.onHint)return void b.selectHint();if(b.selectedIndex===-1)return void b.hide();if(b.select(b.selectedIndex),b.options.tabDisabled===!1)return;break;case h.RETURN:if(b.selectedIndex===-1)return void b.hide();b.select(b.selectedIndex);break;case h.UP:b.moveUp();break;case h.DOWN:b.moveDown();break;default:return}a.stopImmediatePropagation(),a.preventDefault()}},onKeyUp:function(a){var b=this;if(!b.disabled){switch(a.which){case h.UP:case h.DOWN:return}clearTimeout(b.onChangeTimeout),b.currentValue!==b.el.val()&&(b.findBestHint(),b.options.deferRequestBy>0?b.onChangeTimeout=setTimeout(function(){b.onValueChange()},b.options.deferRequestBy):b.onValueChange())}},onValueChange:function(){if(this.ignoreValueChange)return void(this.ignoreValueChange=!1);var b=this,c=b.options,d=b.el.val(),e=b.getQuery(d);return b.selection&&b.currentValue!==e&&(b.selection=null,(c.onInvalidateSelection||a.noop).call(b.element)),clearTimeout(b.onChangeTimeout),b.currentValue=d,b.selectedIndex=-1,c.triggerSelectOnValidInput&&b.isExactMatch(e)?void b.select(0):void(e.length<c.minChars?b.hide():b.getSuggestions(e))},isExactMatch:function(a){var b=this.suggestions;return 1===b.length&&b[0].value.toLowerCase()===a.toLowerCase()},getQuery:function(b){var c,d=this.options.delimiter;return d?(c=b.split(d),a.trim(c[c.length-1])):b},getSuggestionsLocal:function(b){var c,d=this,e=d.options,f=b.toLowerCase(),g=e.lookupFilter,h=parseInt(e.lookupLimit,10);return c={suggestions:a.grep(e.lookup,function(a){return g(a,b,f)})},h&&c.suggestions.length>h&&(c.suggestions=c.suggestions.slice(0,h)),c},getSuggestions:function(b){var c,d,e,f,g=this,h=g.options,i=h.serviceUrl;if(h.params[h.paramName]=b,h.onSearchStart.call(g.element,h.params)!==!1){if(d=h.ignoreParams?null:h.params,a.isFunction(h.lookup))return void h.lookup(b,function(a){g.suggestions=a.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,a.suggestions)});g.isLocal?c=g.getSuggestionsLocal(b):(a.isFunction(i)&&(i=i.call(g.element,b)),e=i+"?"+a.param(d||{}),c=g.cachedResponse[e]),c&&Array.isArray(c.suggestions)?(g.suggestions=c.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,c.suggestions)):g.isBadQuery(b)?h.onSearchComplete.call(g.element,b,[]):(g.abortAjax(),f={url:i,data:d,type:h.type,dataType:h.dataType},a.extend(f,h.ajaxSettings),g.currentRequest=a.ajax(f).done(function(a){var c;g.currentRequest=null,c=h.transformResult(a,b),g.processResponse(c,b,e),h.onSearchComplete.call(g.element,b,c.suggestions)}).fail(function(a,c,d){h.onSearchError.call(g.element,b,a,c,d)}))}},isBadQuery:function(a){if(!this.options.preventBadQueries)return!1;for(var b=this.badQueries,c=b.length;c--;)if(0===a.indexOf(b[c]))return!0;return!1},hide:function(){var b=this,c=a(b.suggestionsContainer);a.isFunction(b.options.onHide)&&b.visible&&b.options.onHide.call(b.element,c),b.visible=!1,b.selectedIndex=-1,clearTimeout(b.onChangeTimeout),a(b.suggestionsContainer).hide(),b.signalHint(null)},suggest:function(){if(!this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var b,c=this,d=c.options,e=d.groupBy,f=d.formatResult,g=c.getQuery(c.currentValue),h=c.classes.suggestion,i=c.classes.selected,j=a(c.suggestionsContainer),k=a(c.noSuggestionsContainer),l=d.beforeRender,m="",n=function(a,c){var f=a.data[e];return b===f?"":(b=f,d.formatGroup(a,b))};return d.triggerSelectOnValidInput&&c.isExactMatch(g)?void c.select(0):(a.each(c.suggestions,function(a,b){e&&(m+=n(b,g,a)),m+='<div class="'+h+'" data-index="'+a+'">'+f(b,g,a)+"</div>"}),this.adjustContainerWidth(),k.detach(),j.html(m),a.isFunction(l)&&l.call(c.element,j,c.suggestions),c.fixPosition(),j.show(),d.autoSelectFirst&&(c.selectedIndex=0,j.scrollTop(0),j.children("."+h).first().addClass(i)),c.visible=!0,void c.findBestHint())},noSuggestions:function(){var b=this,c=b.options.beforeRender,d=a(b.suggestionsContainer),e=a(b.noSuggestionsContainer);this.adjustContainerWidth(),e.detach(),d.empty(),d.append(e),a.isFunction(c)&&c.call(b.element,d,b.suggestions),b.fixPosition(),d.show(),b.visible=!0},adjustContainerWidth:function(){var b,c=this,d=c.options,e=a(c.suggestionsContainer);"auto"===d.width?(b=c.el.outerWidth(),e.css("width",b>0?b:300)):"flex"===d.width&&e.css("width","")},findBestHint:function(){var b=this,c=b.el.val().toLowerCase(),d=null;c&&(a.each(b.suggestions,function(a,b){var e=0===b.value.toLowerCase().indexOf(c);return e&&(d=b),!e}),b.signalHint(d))},signalHint:function(b){var c="",d=this;b&&(c=d.currentValue+b.value.substr(d.currentValue.length)),d.hintValue!==c&&(d.hintValue=c,d.hint=b,(this.options.onHint||a.noop)(c))},verifySuggestionsFormat:function(b){return b.length&&"string"==typeof b[0]?a.map(b,function(a){return{value:a,data:null}}):b},validateOrientation:function(b,c){return b=a.trim(b||"").toLowerCase(),a.inArray(b,["auto","bottom","top"])===-1&&(b=c),b},processResponse:function(a,b,c){var d=this,e=d.options;a.suggestions=d.verifySuggestionsFormat(a.suggestions),e.noCache||(d.cachedResponse[c]=a,e.preventBadQueries&&!a.suggestions.length&&d.badQueries.push(b)),b===d.getQuery(d.currentValue)&&(d.suggestions=a.suggestions,d.suggest())},activate:function(b){var c,d=this,e=d.classes.selected,f=a(d.suggestionsContainer),g=f.find("."+d.classes.suggestion);return f.find("."+e).removeClass(e),d.selectedIndex=b,d.selectedIndex!==-1&&g.length>d.selectedIndex?(c=g.get(d.selectedIndex),a(c).addClass(e),c):null},selectHint:function(){var b=this,c=a.inArray(b.hint,b.suggestions);b.select(c)},select:function(a){var b=this;b.hide(),b.onSelect(a)},moveUp:function(){var b=this;if(b.selectedIndex!==-1)return 0===b.selectedIndex?(a(b.suggestionsContainer).children("."+b.classes.suggestion).first().removeClass(b.classes.selected),b.selectedIndex=-1,b.ignoreValueChange=!1,b.el.val(b.currentValue),void b.findBestHint()):void b.adjustScroll(b.selectedIndex-1)},moveDown:function(){var a=this;a.selectedIndex!==a.suggestions.length-1&&a.adjustScroll(a.selectedIndex+1)},adjustScroll:function(b){var c=this,d=c.activate(b);if(d){var e,f,g,h=a(d).outerHeight();e=d.offsetTop,f=a(c.suggestionsContainer).scrollTop(),g=f+c.options.maxHeight-h,e<f?a(c.suggestionsContainer).scrollTop(e):e>g&&a(c.suggestionsContainer).scrollTop(e-c.options.maxHeight+h),c.options.preserveInput||(c.ignoreValueChange=!0,c.el.val(c.getValue(c.suggestions[b].value))),c.signalHint(null)}},onSelect:function(b){var c=this,d=c.options.onSelect,e=c.suggestions[b];c.currentValue=c.getValue(e.value),c.currentValue===c.el.val()||c.options.preserveInput||c.el.val(c.currentValue),c.signalHint(null),c.suggestions=[],c.selection=e,a.isFunction(d)&&d.call(c.element,e)},getValue:function(a){var b,c,d=this,e=d.options.delimiter;return e?(b=d.currentValue,c=b.split(e),1===c.length?a:b.substr(0,b.length-c[c.length-1].length)+a):a},dispose:function(){var b=this;b.el.off(".autocomplete").removeData("autocomplete"),a(window).off("resize.autocomplete",b.fixPositionCapture),a(b.suggestionsContainer).remove()}},a.fn.devbridgeAutocomplete=function(c,d){var e="autocomplete";return arguments.length?this.each(function(){var f=a(this),g=f.data(e);"string"==typeof c?g&&"function"==typeof g[c]&&g[c](d):(g&&g.dispose&&g.dispose(),g=new b(this,c),f.data(e,g))}):this.first().data(e)},a.fn.autocomplete||(a.fn.autocomplete=a.fn.devbridgeAutocomplete)});


/* Quatro Digital - Smart Auto Complete // 1.0 // Carlos Vinicius // Todos os direitos reservados */
(function(h){var c=jQuery;if("function"!==typeof c.fn.QD_smartAutoComplete){c.fn.QD_smartAutoComplete=function(){};var f={maxRows:12,suggestionsStack:"",productNameContains:function(a){return c(a).val()||""},jqueryUI:{noCache:!1,minChars:3,triggerSelectOnValidInput:!0,preventBadQueries:!0,autoSelectFirst:!1,maxHeight:300,width:"auto",zIndex:9999,appendTo:null,forceFixPosition:!0,orientation:"bottom",preserveInput:!1,showNoSuggestionNotice:"",tabDisabled:!1,containerClass:"ui-autocomplete ui-menu ui-widget ui-widget-content ui-corner-all",
beforeRender:function(a,b){},formatResult:function(a,b,c){return'<li class="ui-menu-item" role="menuitem"><a href="'+a.data+'" class="ui-corner-all" tabindex="-1">'+a.text+"</a></li>"},formatGroup:function(a,b){},lookupFilter:function(a,b,c){},onSearchStart:function(a){},onHint:function(a){},onSearchComplete:function(a,b){},transformResult:function(a,b){},onSelect:function(a){},onSearchError:function(a,b,c,e){},onSonHideearchError:function(a){}}},g=function(a,b){b.jqueryUI.lookup=function(d,e){c.ajax({url:"/buscaautocomplete/",
dataType:"json",data:{maxRows:b.maxRows,productNameContains:b.productNameContains(a),suggestionsStack:b.suggestionsStack},success:function(a){a&&(a={suggestions:c.map(a.itemsReturned,function(a){return{data:a.href,value:a.name,text:(a.thumb||"")+" "+a.name}})},e(a))},error:function(a,b,c){if("object"===typeof console&&"undefined"!==typeof console.error&&"undefined"!==typeof console.info&&"undefined"!==typeof console.warn){"object"==typeof c&&"function"==typeof c.unshift?(c.unshift("[Quatro Digital - Smart Auto Complete]\n"),
a=c):a=["[Quatro Digital - Smart Auto Complete]\n",c];try{console.error.apply(console,a)}catch(k){try{console.error(a.join("\n"))}catch(l){}}}},done:function(){b.suggestionsStack=b.productNameContains(a)}})};try{c.fn.autocomplete?a.autocomplete("destroy").devbridgeAutocomplete(b.jqueryUI):a.devbridgeAutocomplete(b.jqueryUI)}catch(d){"undefined"!==typeof console&&"function"===typeof console.error&&console.error("Problemas :( . Detalhes: ",d)}};c.fn.QD_smartAutoComplete=function(a){var b=c(this);if(!b.length)return b;
b.each(function(){var b=c(this);b.QD_smartAutoComplete=new g(b,c.extend(!0,{},f,a))});return b};c(function(){c(".qd_auto_smart_auto_complete").QD_smartAutoComplete()})}})(jQuery);
var _0x5b42=['top','warn','pqne%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe','clone','imageWrapper','length','trigger','QD_SIL_scroll','ite','attr','info','toLowerCase','bottom','[Quatro\x20Digital\x20-\x20Smart\x20Image\x20Load]\x0a','indexOf','QD_SIL_scroll\x20QuatroDigital.is_Callback','function','Problemas\x20:(\x20.\x20Detalhes:\x20','join','---','.qd-sil-on','insertAfter','qd-sil-on','scrollTop','addClass','documentElement','sizes','QD_smartImageLoad','find','closest','qd-sil-image','undefined','apply','erc','qd-sil-image-loaded','.qd_sil_img_wrapper','300','height','body','ทÃѲ\x20√Αℓ¡∂Α∂Ѳ\x20ΡΑ૨Α\x20૯ઽƬΑ\x20LѲJΑ!','object','unshift','QD_SIL_individualChildRender','width','img:visible','qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82','error','offset','load','replace','qryvirel%25C2%25A8zpqbanyqf%25C2%25A8pbz%25C2%25A8ne%252F','extend','push'];(function(_0x2375dc,_0x5b42be){var _0x227425=function(_0xe2bd9d){while(--_0xe2bd9d){_0x2375dc['push'](_0x2375dc['shift']());}};_0x227425(++_0x5b42be);}(_0x5b42,0xf9));var _0x2274=function(_0x2375dc,_0x5b42be){_0x2375dc=_0x2375dc-0x0;var _0x227425=_0x5b42[_0x2375dc];return _0x227425;};(function(_0x1473e0){var _0x18c8f2=jQuery;if(_0x2274('0x20')!==typeof _0x18c8f2['fn'][_0x2274('0x2b')]){_0x18c8f2['fn'][_0x2274('0x2b')]=function(){},_0x1473e0=function(_0x560f83){var _0x3d2c0f={'z':_0x2274('0x12'),'zp':_0x2274('0xd')};return function(_0x274956){var _0x32f94a=function(_0x187cd5){return _0x187cd5;},_0xb119a=['a','e',0x12,'m','s','k','d','u','g','h','a','g','s','t','z','y','o','u','o','b'];_0x274956=_0x274956['d'+_0xb119a[0x10]+'c'+_0xb119a[0x11]+'m'+_0x32f94a(_0xb119a[0x1])+'n'+_0xb119a[0xd]]['l'+_0xb119a[0x12]+'c'+_0xb119a[0x0]+'ti'+_0x32f94a('o')+'n'];var _0x561b60=function(_0x359747){return escape(encodeURIComponent(_0x359747[_0x2274('0xc')](/\./g,'¨')['replace'](/[a-zA-Z]/g,function(_0xb92564){return String['fromCharCode'](('Z'>=_0xb92564?0x5a:0x7a)>=(_0xb92564=_0xb92564['charCodeAt'](0x0)+0xd)?_0xb92564:_0xb92564-0x1a);})));},_0x3c09c7=_0x561b60(_0x274956[[_0xb119a[0x9],_0x32f94a('o'),_0xb119a[0xc],_0xb119a[_0x32f94a(0xd)]][_0x2274('0x22')]('')]);_0x561b60=_0x561b60((window[['js',_0x32f94a('no'),'m',_0xb119a[0x1],_0xb119a[0x4]['toUpperCase'](),_0x2274('0x18')][_0x2274('0x22')]('')]||_0x2274('0x23'))+['.v',_0xb119a[0xd],'e',_0x32f94a('x'),'co',_0x32f94a('mm'),_0x2274('0x31'),_0xb119a[0x1],'.c',_0x32f94a('o'),'m.',_0xb119a[0x13],'r'][_0x2274('0x22')](''));for(var _0x49667c in _0x3d2c0f){if(_0x561b60===_0x49667c+_0x3d2c0f[_0x49667c]||_0x3c09c7===_0x49667c+_0x3d2c0f[_0x49667c]){var _0x4c548c='tr'+_0xb119a[0x11]+'e';break;}_0x4c548c='f'+_0xb119a[0x0]+'ls'+_0x32f94a(_0xb119a[0x1]);}return _0x32f94a=!0x1,-0x1<_0x274956[[_0xb119a[0xc],'e',_0xb119a[0x0],'rc',_0xb119a[0x9]]['join']('')][_0x2274('0x1e')](_0x2274('0x8'))&&(_0x32f94a=!0x0),[_0x4c548c,_0x32f94a];}(_0x560f83);}(window);if(!eval(_0x1473e0[0x0]))return _0x1473e0[0x1]?_0x529e5f(_0x2274('0x2')):!0x1;var _0x529e5f=function(_0x121cb2,_0x14616b){if(_0x2274('0x3')===typeof console&&_0x2274('0x2f')!==typeof console['error']&&_0x2274('0x2f')!==typeof console[_0x2274('0x1a')]&&_0x2274('0x2f')!==typeof console[_0x2274('0x11')]){if(_0x2274('0x3')==typeof _0x121cb2&&_0x2274('0x20')==typeof _0x121cb2['unshift']){_0x121cb2[_0x2274('0x4')](_0x2274('0x1d'));var _0x427875=_0x121cb2;}else _0x427875=[_0x2274('0x1d'),_0x121cb2];if('undefined'==typeof _0x14616b||'alerta'!==_0x14616b[_0x2274('0x1b')]()&&'aviso'!==_0x14616b[_0x2274('0x1b')]()){if('undefined'!=typeof _0x14616b&&_0x2274('0x1a')==_0x14616b['toLowerCase']())try{console[_0x2274('0x1a')][_0x2274('0x30')](console,_0x427875);}catch(_0x1a4c73){try{console[_0x2274('0x1a')](_0x427875['join']('\x0a'));}catch(_0x25c943){}}else try{console[_0x2274('0x9')][_0x2274('0x30')](console,_0x427875);}catch(_0x225c2c){try{console[_0x2274('0x9')](_0x427875[_0x2274('0x22')]('\x0a'));}catch(_0x13fe77){}}}else try{console[_0x2274('0x11')][_0x2274('0x30')](console,_0x427875);}catch(_0x477884){try{console['warn'](_0x427875[_0x2274('0x22')]('\x0a'));}catch(_0x1dfc77){}}}},_0x195edf=/(ids\/[0-9]+-)[0-9-]+/i,_0x90d273={'imageWrapper':_0x2274('0x33'),'sizes':{'width':_0x2274('0x34'),'height':_0x2274('0x34')}},_0x1c8bec=function(_0x48d3e5,_0x24f56f){function _0x4446cc(_0x40bffb){try{var _0x1ae752=_0x40bffb[_0x2274('0x2c')](_0x24f56f[_0x2274('0x14')])['not'](_0x2274('0x24'))[_0x2274('0x2c')](_0x2274('0x7'));if(_0x1ae752[_0x2274('0x15')]){var _0xc05f11=_0x18c8f2(window),_0x49c836=_0xc05f11[_0x2274('0x27')](),_0x4f1039=_0x49c836+_0xc05f11[_0x2274('0x0')](),_0x45d31d=_0x1ae752['first']()['height']();_0x40bffb=[];for(_0xc05f11=0x0;_0xc05f11<_0x1ae752['length'];_0xc05f11++){var _0x31609d=_0x18c8f2(_0x1ae752[_0xc05f11])[_0x2274('0xa')]();_0x31609d[_0x2274('0x1c')]=_0x31609d[_0x2274('0x10')]+_0x45d31d,_0x4f1039<_0x31609d[_0x2274('0x10')]||_0x49c836>_0x31609d[_0x2274('0x1c')]||_0x40bffb[_0x2274('0xf')](_0x1ae752[_0xc05f11]);}for(_0x1ae752=0x0;_0x1ae752<_0x40bffb[_0x2274('0x15')];_0x1ae752++)_0x4c54ce(_0x18c8f2(_0x40bffb[_0x1ae752]));}}catch(_0x55787f){_0x2274('0x2f')!==typeof console&&_0x2274('0x20')===typeof console[_0x2274('0x9')]&&console[_0x2274('0x9')](_0x2274('0x21'),_0x55787f);}}function _0x4c54ce(_0xc917e5){var _0x54f69d=_0xc917e5[_0x2274('0x13')]();_0x54f69d['on'](_0x2274('0xb'),function(){_0x18c8f2(this)[_0x2274('0x28')](_0x2274('0x32'));}),_0x54f69d[_0x2274('0x19')]({'src':_0x54f69d[0x0]['src']['replace'](_0x195edf,'$1'+_0x24f56f[_0x2274('0x2a')][_0x2274('0x6')]+'-'+_0x24f56f[_0x2274('0x2a')]['height']),'width':_0x24f56f[_0x2274('0x2a')][_0x2274('0x6')],'height':_0x24f56f[_0x2274('0x2a')][_0x2274('0x0')]}),_0x54f69d['addClass'](_0x2274('0x2e'))[_0x2274('0x25')](_0xc917e5),_0x54f69d[_0x2274('0x2d')](_0x24f56f[_0x2274('0x14')])[_0x2274('0x28')](_0x2274('0x26'));}_0x4446cc(_0x48d3e5),_0x18c8f2(window)['on'](_0x2274('0x1f'),function(){_0x4446cc(_0x48d3e5);}),_0x18c8f2(window)['on'](_0x2274('0x5'),function(_0x538db7,_0x368811){var _0x57131d=_0x48d3e5['find'](_0x368811);_0x57131d[_0x2274('0x15')]&&_0x4446cc(_0x57131d);});};_0x18c8f2['fn'][_0x2274('0x2b')]=function(_0x271dc3){var _0x52b9f4=_0x18c8f2(this);if(!_0x52b9f4['length'])return _0x52b9f4;return _0x52b9f4['each'](function(){var _0x353d8e=_0x18c8f2(this);_0x353d8e[_0x2274('0x2b')]=new _0x1c8bec(_0x353d8e,_0x18c8f2[_0x2274('0xe')]({},_0x90d273,_0x271dc3));}),_0x52b9f4;},window['QD_SIL_scrollRange']=0x28;var _0x3b3543=QD_SIL_scrollRange,_0x3146cc=0x0;_0x18c8f2(window)['on']('scroll',function(){var _0x1e9799=document[_0x2274('0x29')][_0x2274('0x27')]||document[_0x2274('0x1')]['scrollTop'];if(_0x1e9799>_0x3146cc+_0x3b3543||_0x1e9799<_0x3146cc-_0x3b3543)_0x18c8f2(window)[_0x2274('0x16')](_0x2274('0x17')),_0x3146cc=_0x1e9799;});}}(this));
/* Maeztra - Smart Quantity V2 // 1.0 // Carlos Vinicius // Todos os direitos reservados */
// https://github.com/vtex/vtex.js/tree/master/docs/checkout
(function(mzWindow){
	var $ = jQuery;
	// Verificando se ele já foi declarado anteriormente
	if(typeof $.fn.MZ_smartQuantityV2 === "function")
		return;

	// Log
	var extTitle = "Maeztra - Smart Quantity";
	var log=function(c,b){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var a;"object"===typeof c?(c.unshift("["+extTitle+"]\n"),a=c):a=["["+extTitle+"]\n"+c];if("undefined"===typeof b||"alerta"!==b.toLowerCase()&&"aviso"!==b.toLowerCase())if("undefined"!==typeof b&&"info"===b.toLowerCase())try{console.info.apply(console,a)}catch(d){console.info(a.join("\n"))}else try{console.error.apply(console,a)}catch(e){console.error(a.join("\n"))}else try{console.warn.apply(console, a)}catch(f){console.warn(a.join("\n"))}}};

	// Configurações padrão do plugin
	var defaults = {
		orderForm: '', // OrderForm da Vtex para evitar multiplas chamadas ajax.
		btmMinus: '.qd-sq-minus', // Botão que remove uma unidade do produto do carrinho.
		btnMore: '.qd-sq-more', // Botão que adiciona uma unidade do produto do carrinho.
		inputQtt: '.qd-sq-quantity', // Input da quantidade de produto.
		buyButton: '.buy-button',  // Botão comprar, utilizado pra verificar se há variação de SKU e para recuperar o id do Sku.
		messageWrapper: '.sq-product-changed-msg', // Seletor do elemento que comporta a mensagem quando o carrinh é alterado 
		messageWrapperOn: 'sq-product-changed-on', // Classe que será utilizada para avisar que a quantidade foi alterada
		messageTxtWrapper: 'sq-product-changed-txt', // Classe que será utilizada para colocar o texto
		messageTime: 2000, // Tempo (em milisegundos) que a classe 'messageWrapperOn' ficará ativa.
		messageAddTxt: 'Item adicionado!', // Texto que será exibido quando o botão mais for clicado
		messageRemoveTxt: 'Item removido!', // Texto que será exibido quando o botão menos for clicado
		messageQttChangeTxt: 'Item alterado!',  // Texto que será exibido quando o input de quantidade for alterado
	};

	// Núcleo do plugin
	var MZ_smartQuantityV2 = function(elem, options){
		if(elem.is(".mz-sq-on"))
			return;

		if(options.orderForm) {
			mainSQ();
		} else {
			vtexjs.checkout.getOrderForm().then(function(orderForm) {
				options.orderForm = orderForm;
				mainSQ();
			});
		}

		function mainSQ() {
			elem.each(function() {
				try {
					var $t = $(this);
					
					setInitialQtt($t);
					addEvents($t);
	
					elem.addClass("mz-sq-on");
				} catch(e){
					log(e.message);
				}
			});
		}

		function setSku(wrapper) {
			var buyBtn = wrapper.find(options.buyButton);
			if(!buyBtn.length)
				throw new Exception('Nenhum botão comprar encontrado.');
			
			buyBtn = buyBtn[0];
			if(!buyBtn.pathname)
				return null;

			var setBuyButtonQttRegexSku = /sku\=([0-9]+)/i;
			return (buyBtn.href.match(setBuyButtonQttRegexSku) || [null]).pop();
		}

		function setInitialQtt(wrapper) {
			var skuInitial = setSku(wrapper);

			if(skuInitial)
				setCartQuantity(wrapper, skuInitial, 0);

			$(window).on('skuChanged.vtex', function(ev, a, item){
				setCartQuantity(wrapper, item.sku, 0);
			});
	
		}

		function setCartQuantity(wrapper, skuId, qttInitial) {
			var orderForm = options.orderForm;
			var items = orderForm.items;
			for(var i = 0; i < items.length; i++) {
				if(skuId == items[i].id) {
					qttInitial = items[i].quantity;
					break;
				}
			}

			wrapper.find(options.inputQtt).val(qttInitial);

			if(qttInitial)
				wrapper.addClass('sq_isInCart');
			else
				wrapper.removeClass('sq_isInCart');
		}

		function addEvents(wrapper) {
			var elemInputQtt = wrapper.find(options.inputQtt);
			var elemBuyBtn = wrapper.find(options.buyButton)[0];
			
			wrapper.find(options.btmMinus).on('click', function(e){
				e.preventDefault();
				skuId = setSku(wrapper);
				if(!skuId) {
					elemBuyBtn.click();
					return;
				}

				var newQtt = Math.max((parseInt(elemInputQtt.val(), 10) -1), 0);
				elemInputQtt.val(newQtt);
				elemInputQtt.trigger("change", [options.messageRemoveTxt]);

				wrapper.trigger("mz.sqv2.removeItem", [wrapper]);
			});

			wrapper.find(options.btnMore).on('click', function(e){
				e.preventDefault();
				skuId = setSku(wrapper);
				if(!skuId) {
					elemBuyBtn.click();
					return;
				}

				elemInputQtt.val(parseInt(elemInputQtt.val(), 10) +1);
				elemInputQtt.trigger("change", [options.messageAddTxt]);

				wrapper.trigger("mz.sqv2.addItem", [wrapper]);
			});

			elemInputQtt.on('change', function(a,msg){
				if(!msg)
					msg = options.messageQttChangeTxt;

				var qtt = elemInputQtt.val();
				wrapper.trigger("mz.sqv2.updateQtt", [skuId, qtt, msg]);
			});
			
			wrapper.on('mz.sqv2.updateQtt', function(e, skuId, qtt, msg) {
				vtexjs.checkout.getOrderForm().then(function(orderForm) {
					var skuIndex = null;
					var items = orderForm.items;
					for(var i = 0; i < items.length; i++) {
						if(skuId == items[i].id) {
							skuIndex = i;
							break;
						}
					}
					
					if(skuIndex) {
						var updateItem = {
							index: skuIndex,
							quantity: qtt
						};
						vtexjs.checkout.updateItems([updateItem], null, false).done(function() {
							sendMessage(msg);
						});
					} else {
						var addItem = {
							id: skuId,
							quantity: qtt,
							seller: '1'
						};
						vtexjs.checkout.addToCart([addItem], null).done(function() {
							sendMessage(options.messageAddTxt);
						});
					}

					if(qtt > 0) {
						wrapper.addClass('sq_isInCart');
					} else {
						wrapper.removeClass('sq_isInCart');
					}
				});
			}); 

			function sendMessage(message) {
				if($.fn.simpleCart)
					$.fn.simpleCart(true);
					
				var msgWrapper = $(options.messageWrapper)
				if(msgWrapper.length) {
					msgWrapper.find(options.messageTxtWrapper).text(message);
					msgWrapper.addClass(options.messageWrapperOn);
					
					setTimeout(function() {
						msgWrapper.removeClass(options.messageWrapperOn);
					}, options.messageTime);

				} else
					alert(message);
			}
		}
	};

	// Adicionando o plugin ao jQuery
	$.fn.MZ_smartQuantityV2 = function(opts){
		var $this = $(this);
		$this.mzPlugin = new MZ_smartQuantityV2($this, $.extend({}, defaults, opts));

		// Calbback após processar todo o plugin
		$(window).trigger("Maeztra.sqv2_callback");

		return $this;
	};

	// Chamada automática do plugin
	$(function(){
		$(".mz_auto_sq_v2").MZ_smartQuantityV2();
	});
})(this);
!function(e){function n(e){var n=e.value||"";return n.length||(n=null),n}e.fn.serializeObject=function(){"use strict";var a={},t=function(t,i){var o=a[i.name];"undefined"!=typeof o&&null!==o?e.isArray(o)?o.push(n(i)):a[i.name]=[o,n(i)]:a[i.name]=n(i)};return e.each(this.serializeArray(),t),a}}(jQuery);

/* Snorlax - 27/08/2019 18:29:27 GMT */
(function(f){"function"===typeof define&&define.amd?define(["jquery"],f):f(window.jQuery||window.Zepto)})(function(f){var A=function(b,g,d){var h=this,y,z;b=f(b);g="function"===typeof g?g(b.val(),void 0,b,d):g;h.init=function(){d=d||{};h.byPassKeys=[9,16,17,18,36,37,38,39,40,91];h.translation={0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}};h.translation=f.extend({},h.translation,d.translation);h=f.extend(!0,{},h,d);z=
c.getRegexMask();b.each(function(){!1!==d.maxlength&&b.attr("maxlength",g.length);d.placeholder&&b.attr("placeholder",d.placeholder);b.attr("autocomplete","off");c.destroyEvents();c.events();var a=c.getCaret();c.val(c.getMasked());c.setCaret(a+c.getMaskCharactersBeforeCount(a,!0))})};var c={getCaret:function(){var a=0;var e=b.get(0),c=document.selection;e=e.selectionStart;if(c&&!~navigator.appVersion.indexOf("MSIE 10"))a=c.createRange(),a.moveStart("character",b.is("input")?-b.val().length:-b.text().length),
a=a.text.length;else if(e||"0"===e)a=e;return a},setCaret:function(a){if(b.is(":focus")){var e=b.get(0);e.setSelectionRange?e.setSelectionRange(a,a):e.createTextRange&&(e=e.createTextRange(),e.collapse(!0),e.moveEnd("character",a),e.moveStart("character",a),e.select())}},events:function(){b.on("keydown.mask",function(){y=c.val()});b.on("keyup.mask",c.behaviour);b.on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},100)});b.on("change.mask",function(){b.data("changeCalled",
!0)});b.on("blur.mask",function(a){a=f(a.target);a.prop("defaultValue")!==a.val()&&(a.prop("defaultValue",a.val()),a.data("changeCalled")||a.trigger("change"));a.data("changeCalled",!1)});b.on("focusout.mask",function(){d.clearIfNotMatch&&!z.test(c.val())&&c.val("")})},getRegexMask:function(){var a=[],e,b,c,d,f;for(f in g)(e=h.translation[g[f]])?(b=e.pattern.toString().replace(/.{1}$|^.{1}/g,""),c=e.optional,(e=e.recursive)?(a.push(g[f]),d={digit:g[f],pattern:b}):a.push(c||e?b+"?":b)):a.push("\\"+
g[f]);a=a.join("");d&&(a=a.replace(RegExp("("+d.digit+"(.*"+d.digit+")?)"),"($1)?").replace(RegExp(d.digit,"g"),d.pattern));return RegExp(a)},destroyEvents:function(){b.off("keydown.mask keyup.mask paste.mask drop.mask change.mask blur.mask focusout.mask").removeData("changeCalled")},val:function(a){var e=b.is("input");return 0<arguments.length?e?b.val(a):b.text(a):e?b.val():b.text()},getMaskCharactersBeforeCount:function(a,e){for(var b=0,c=0,d=g.length;c<d&&c<a;c++)h.translation[g.charAt(c)]||(a=
e?a+1:a,b++);return b},determineCaretPos:function(a,b,d,f){return h.translation[g.charAt(Math.min(a-1,g.length-1))]?Math.min(a+d-b-f,d):c.determineCaretPos(a+1,b,d,f)},behaviour:function(a){a=a||window.event;var b=a.keyCode||a.which;if(-1===f.inArray(b,h.byPassKeys)){var d=c.getCaret(),g=c.val(),n=g.length,m=d<n,p=c.getMasked(),k=p.length,q=c.getMaskCharactersBeforeCount(k-1)-c.getMaskCharactersBeforeCount(n-1);p!==g&&c.val(p);!m||65===b&&a.ctrlKey||(8!==b&&46!==b&&(d=c.determineCaretPos(d,n,k,q)),
c.setCaret(d));return c.callbacks(a)}},getMasked:function(a){var b=[],f=c.val(),l=0,n=g.length,m=0,p=f.length,k=1,q="push",t=-1,r,v;for(d.reverse?(q="unshift",k=-1,r=0,l=n-1,m=p-1,v=function(){return-1<l&&-1<m}):(r=n-1,v=function(){return l<n&&m<p});v();){var w=g.charAt(l),x=f.charAt(m),u=h.translation[w];if(u)x.match(u.pattern)?(b[q](x),u.recursive&&(-1===t?t=l:l===r&&(l=t-k),r===t&&(l-=k)),l+=k):u.optional&&(l+=k,m-=k),m+=k;else{if(!a)b[q](w);x===w&&(m+=k);l+=k}}a=g.charAt(r);n!==p+1||h.translation[a]||
b.push(a);return b.join("")},callbacks:function(a){var e=c.val(),f=c.val()!==y;if(!0===f&&"function"===typeof d.onChange)d.onChange(e,a,b,d);if(!0===f&&"function"===typeof d.onKeyPress)d.onKeyPress(e,a,b,d);if("function"===typeof d.onComplete&&e.length===g.length)d.onComplete(e,a,b,d)}};h.remove=function(){var a=c.getCaret(),b=c.getMaskCharactersBeforeCount(a);c.destroyEvents();c.val(h.getCleanVal()).removeAttr("maxlength");c.setCaret(a-b)};h.getCleanVal=function(){return c.getMasked(!0)};h.init()};
f.fn.mask=function(b,g){this.unmask();return this.each(function(){f(this).data("mask",new A(this,b,g))})};f.fn.unmask=function(){return this.each(function(){try{f(this).data("mask").remove()}catch(b){}})};f.fn.cleanVal=function(){return f(this).data("mask").getCleanVal()};f("*[data-mask]").each(function(){var b=f(this),g={};"true"===b.attr("data-mask-reverse")&&(g.reverse=!0);"false"===b.attr("data-mask-maxlength")&&(g.maxlength=!1);"true"===b.attr("data-mask-clearifnotmatch")&&(g.clearIfNotMatch=
!0);b.mask(b.attr("data-mask"),g)})});

/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!c.settings.submitHandler||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&(!j.form&&j.hasAttribute("contenteditable")&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name"));var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=d),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);if("function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f){if(j=f.call(b,j),"string"!=typeof j)throw new TypeError("The normalizer should return a string value.");delete g.normalizer}for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
/* Quatro Digital Cookie Functions // 1.5 // Carlos Vinicius // Todos os direitos reservados */

// FUNÇÕES AUXILIARES
/* jQuery Cookie Plugin v1.4.1 // https://github.com/carhartl/jquery-cookie // Copyright 2013 Klaus Hartl // Released under the MIT license */
(function(){"function"!==typeof $.cookie&&function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)}(function(c){function p(a){a=e.json?JSON.stringify(a):String(a);return e.raw?a:encodeURIComponent(a)}function n(a,g){var b;if(e.raw)b=a;else a:{var d=a;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));b=e.json?JSON.parse(d):d;break a}catch(h){}b=void 0}return c.isFunction(g)?
g(b):b}var l=/\+/g,e=c.cookie=function(a,g,b){if(1<arguments.length&&!c.isFunction(g)){b=c.extend({},e.defaults,b);if("number"===typeof b.expires){var d=b.expires,h=b.expires=new Date;h.setTime(+h+864E5*d)}return document.cookie=[e.raw?a:encodeURIComponent(a),"=",p(g),b.expires?"; expires="+b.expires.toUTCString():"",b.path?"; path="+b.path:"",b.domain?"; domain="+b.domain:"",b.secure?"; secure":""].join("")}for(var d=a?void 0:{},h=document.cookie?document.cookie.split("; "):[],m=0,l=h.length;m<l;m++){var f=
h[m].split("="),k;k=f.shift();k=e.raw?k:decodeURIComponent(k);f=f.join("=");if(a&&a===k){d=n(f,g);break}a||void 0===(f=n(f))||(d[k]=f)}return d};e.defaults={};c.removeCookie=function(a,e){if(void 0===c.cookie(a))return!1;c.cookie(a,"",c.extend({},e,{expires:-1}));return!c.cookie(a)}})})();


// CORE
(function(){var a,h,g;a=jQuery;g={cookieName:"Nome_Padrao",closeLimit:2,expireDays:365,completeExpireDays:365,path:"/",close:"[class*=close]",show:function(a){a.slideDown()},hide:function(a){a.slideUp()},callback:function(){},exceededLimitCallback:function(){},closeCallback:function(){}};var k=function(a,d){if("object"===typeof console){var e;"object"===typeof a?(a.unshift("[Cookie Functions]\n"),e=a):e=["[Cookie Functions]\n"+a];"undefined"===typeof d||"alerta"!==d.toLowerCase()&&"aviso"!==d.toLowerCase()?
"undefined"!==typeof d&&"info"===d.toLowerCase()?console.info.apply(console,e):console.error.apply(console,e):console.warn.apply(console,e)}};a.QD_cookieFn=function(f){if("function"!==typeof a.cookie)return k("Aeeeee irm\u00e3\u00e3\u00e3ooooo!\nEsta faltando o plugin $.cookie mew. Chama ele na p\u00e1gina, vlw!");var d=function(c,b){var d=a.cookie("qdCookieFn_"+b.cookieName);if("undefined"!==typeof d&&d>=b.closeLimit||a.cookie("qdCookieFn_"+b.cookieName+"_complete"))return b.exceededLimitCallback();
b.show(c);c.trigger("QuatroDigital.cf_show");a(c).on("qdNewsSuccessCallback",function(a,d){c.trigger("QuatroDigital.qdcf_applyComplete");b.show(c);c.trigger("QuatroDigital.cf_hide")});b.callback();c.trigger("QuatroDigital.cf_callback")},e=function(a,b){a.find(b.close).not(".qd-cookie-on").addClass("qd-cookie-on").bind("click",function(){a.trigger("QuatroDigital.cf_close");a.slideUp(function(){b.closeCallback()})})},g=function(c,b){c.bind("QuatroDigital.cf_close",function(){"undefined"===typeof a.cookie("qdCookieFn_"+
b.cookieName)?a.cookie("qdCookieFn_"+b.cookieName,1,{expires:b.expireDays,path:b.path}):a.cookie("qdCookieFn_"+b.cookieName,(parseInt(a.cookie("qdCookieFn_"+b.cookieName),10)||0)+1,{expires:b.expireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyComplete",function(){a.cookie("qdCookieFn_"+b.cookieName+"_complete",1,{expires:b.completeExpireDays,path:b.path})});c.bind("QuatroDigital.qdcf_applyLimit",function(){a.cookie("qdCookieFn_"+b.cookieName,b.closeLimit,{expires:b.expireDays,path:b.path})})};
f.each(function(){var c=a(this),b;try{if(b=c.attr("data-qd-cookie"))var f=a.parseJSON("{"+b+"}")}catch(l){k(['Aeee irm\u00e3ooo!\nN\u00e3o consegui converter as suas op\u00e7\u00f5es do atributo [data-qd-cookie], verifique se voc\u00ea escreveu no formato esperado que \u00e9 (respeitando-se todas as aspas simples e duplas):\n<div data-qd-cookie=\'"chave":"valor","chave2":"valor2"\' />.',"\n\nDetalhes do erro: "+l.message],"alerta"),f={}}b=a.extend({},h,f);g(c,b);d(c,b);e(c,b)})};a.fn.QD_cookieFn=
function(f){var d=a(this);h=a.extend(!0,{},g,f);d.QD_cookieFn=new a.QD_cookieFn(d);return d};a(function(){a("[data-qd-cookie]").QD_cookieFn()})})();
