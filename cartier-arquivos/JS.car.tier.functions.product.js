var Product = {
    run: function() {},
    init: function() {
        Product.setAvailableBodyClass();
        Product.productThumbCarousel();
        Product.toggleDescription();
        Product.fixSKUselect();
        // Product.product360();
        Product.insertDetailsProduct();
        Product.applyMeasureTable();
        Product.handleContactForm();
    },
    ajaxStop: function() {},
    windowOnload: function() {},
    product360: function() {
        var wrapper = $('.qd-v1-product-360-on');

        // var imageClass = '.QDp__image';
        // var stampsClass = '.QDp__stamps';
        // var icon360Class = '.qd-v1-product-360-image';
        
        if(!($('.product-qd-v1-image-sku').hasClass('qd-v1-product-360-on')))
        return;

        // $(window).on('skuSelected.vtex', function(e, id, sku) {
            $('.QDp__image', '.QDp__stamps').show();
            wrapper.removeClass('qd-v1-product-360-show');
            $('.qd-v1-product-360-image').remove();

            if (wrapper.hasClass('qd-image-360-id'+ skuJson.skus[0].sku + '-not-found')){
                $('.qd-v1-product-360-icon').hide();
                return false;
            } else{
                $.ajax({
                    // url: '//cartier.vteximg.com.br/arquivos/' + skuJson.productId + '_' + skuJson.skus[0].sku + '-foto' + totalImages + '.jpg',
                    url: '//cartier.vteximg.com.br/arquivos/1103_6739-foto1.jpg',
                    success: function(response){
                            fn(1103, 6739, response)
                        // fn(skuJson.productId, skuJson.skus[0])
                    },
                    error: function(){
                        $('.qd-v1-product-360-icon').hide();
                        $('.product-qd-v1-image-sku').addClass('qd-image-360-id'+ skuJson.skus[0].sku + '-not-found');
                    }
                });
            }
        // });

        function fn(id, sku) {
            $('.qd-v1-product-360-icon').show();

            if (wrapper.find('.qd-v1-product-360-image').length)
            return

            $('.qd-v1-product-360').off('click'); //O evento click não é sobrescrito por isso é necessário retirá-lo
            $('.qd-v1-product-360').on('click', function(e){
                if (wrapper.find('.qd-v1-product-360-image').length)
                    return

                $('.QDp__image', '.QDp__stamps').hide();
                wrapper.addClass('qd-v1-product-360-show');

                var image360Wrapper = '<div class="qd-v1-product-360-image"> <div class="threesixty"> <div class="spinner"> <span>0%</span> </div> <ol class="threesixty_images"></ol> </div> <div class="qd-v1-product-360-slider"> <i class="qd-v1-product-360-play"></i> <i class="qd-v1-product-360-stop"></i> <div class="slider"></div> <i class="qd-v1-product-360-question"></i> <div class="qd-v1-product-360-text" style="display: none;"> <p>Clique no botão “ARRASTE”  e arraste para visualizar mais detalhes do produto.</p> </div> </div> </div>';

                wrapper.find('.QDp__image').append(image360Wrapper);
                var fnMousemove = true;
                var product360Image = $('.qd-v1-product-360-image .threesixty');
                var spaceLeft = product360Image.offset().left;
                var sizewidth = product360Image.width();

                $(window).resize(function(event) {
                    spaceLeft = product360Image.offset().left;
                    sizewidth = product360Image.width();
                });

                var totalImages = 72;

                product360 = $('.qd-v1-product-360-image .threesixty').ThreeSixty({
                    totalFrames: totalImages,
                    endFrame: totalImages,
                    currentFrame: 1,
                    imgList: '.threesixty_images',
                    progress: '.spinner',
                    imagePath:'//cartier.vteximg.com.br/arquivos/',
                    // filePrefix: id + '_' + sku.sku + '-foto',
                    filePrefix: id + '_' + sku + '-foto',
                    ext: '.jpg',
                    // drag: false,
                    responsive: true,
                    width: 500,
                    navigation: true,
                    height: 500,
                    playSpeed: 100,
                    disableSpin: true,
                    autoplayDirection: -1,
                    onReady: function() {

                        product360Image.mousemove(function(e){
                            if (!fnMousemove)
                            return;

                            x = Math.round((e.pageX - spaceLeft) * totalImages	/ sizewidth);

                            product360.gotoAndPlay(x);
                        });

                    }
                });
                $('.thumbs div').click(function() {

                    wrapper.removeClass('qd-v1-product-360-show');
                    $('.qd-v1-product-360-image').remove();
                    $('.QDp__image', '.QDp__stamps').show();

                });

            })
        }

    },
    setAvailableBodyClass: function() {
        function checkVisibleNotify(available) {
            if (available)
            $(document.body).addClass('qd-product-available').removeClass('qd-product-unavailable');
            else
            $(document.body).addClass('qd-product-unavailable').removeClass('qd-product-available');
        }
        
        $(document).on("skuSelected.vtex", function(e, id, sku) {
            checkVisibleNotify(sku.available);
        });
        
        checkVisibleNotify(skuJson.available);
    },
    productThumbCarousel: function () {
        $('.QDp__thumbsCaroussel').QD_smartPhotoCarousel({
            imageWrapper: '.QDp__image',
            thumbsWrapper: '.QDp__img--thumbs',
            sizes: {
                thumb: '100-100',
                image: '650-650',
                imagezoom: '1000-1000'
            },
            slickOptions: {
                images: {
                    lazyLoad: 'ondemand',
                    infinite: false,
                    arrows: true,
                },
                thumbs: {
                    slidesToShow: 9,
                    slidesToScroll: 1,
                    arrows: false,
                    focusOnSelect: true
                }
            },
        });
    },
    toggleDescription: function () {
        $('.QDp__details').each(function () {
            var t = $(this);
            $('table.group').wrap('<div class="QDp__dtl--group"></div>');
            
            $('h4.group').click(function () {
                var t = $(this);
                t.toggleClass('qd-active').next('.QDp__dtl--description, .QDp__dtl--group').slideToggle();
            });
        });
    },
    fixSKUselect: function() {
        var wrapper = $('.QDp__sku--select .topic');
        
        wrapper.each(function() {
            $t = $(this);
            var value = $t.find('li.specification').text().toUpperCase();
            
            $t.find('select').find('option[value=""]').append(value).attr('value', 'selecione');
        });
    },
    insertDetailsProduct: function () {
        if (!$('td.value-field.Sub-Descricao:first').length)
        return;
        
        var wrapper = $('.QDp__sku--details');
        
        wrapper.removeClass('hidden');
        wrapper.text($('td.value-field.Sub-Descricao:first').text());
    },
    applyMeasureTable: function () {
        var wrapper = $(".QDp__sku--select .sku-selector-container");
        var imgTable = $('.QDp__measure-table').clone();
        var modal = $(".qd-v1-modal").first().clone().appendTo(document.body).addClass('QDmodal__table-measures');
        
        if (imgTable.find('.box-banner').length < 1)
        return;
        
        wrapper.append('<ul class="topic"><li><span class="QDp__measure-link">Guia de Tamanhos</span></li></ul>');
        
        $(".QDp__measure-link").click(function () {
            modal.find('.modal-body').append(imgTable);
            modal.find(imgTable).removeClass('hide');
            modal.modal();
            
            modal.on('hidden.bs.modal', function () {
                modal.remove();
            });
        });
    },
    handleContactForm: function() {
        var modalForm = $('.qd-product-contact-form');
        $('.QDp__c--btnContact').on('click', function(e) {
            e.preventDefault();
            modalForm.modal();
        });

        modalForm.find('.submit-button a').on('click', function(e) {
            e.preventDefault();

            if(!modalForm.find('form')[0].checkValidity()) {
                $('<button type="submit"></button>').appendTo(modalForm.find('form')[0]).click().remove();
                return;
            }

            sendForm();
        });

        function sendForm() {
            var formData = {};

            modalForm.find('form').serializeArray().forEach(function(elem){
                if(elem.name == "g-recaptcha-response" ||   elem.name == "googlecheck")
                    return;

                formData[elem.name] = elem.value;
            });

            $.ajax({
				url: "//api.vtexcrm.com.br/cartier/dataentities/CP/documents",
				type: "PATCH",
				dataType: "json",
				headers: { "Accept": "application/vnd.vtex.ds.v10+json", "Content-Type": "application/json; charset=utf-8" },
				data: JSON.stringify(formData)
            })
            .done(function() {
                var msg = "<h6>SUA MENSAGEM FOI ENVIADA COM SUCESSO</h6>" +
                "<p>SEU PEDIDO FOI ENVIADO PARA O NOSSO CENTRO DE RELAÇÕES COM O CLIENTE. NÓS ENTRAREMOS EM CONTATO ASSIM QUE POSSÍVEL.</p>";
                modalForm.addClass('success').find('.modal-body').html(msg);
            });
        }
    }
};