!(function () {
    "use strict";
    const t = function (t) {
        var e = $(t);
        $(document).ready(function () {
            $(this).scrollTop() >= 100 ? e.fadeIn() : e.fadeOut();
        }),
            $(window).scroll(function () {
                $(this).scrollTop() >= 100 ? e.fadeIn() : e.fadeOut();
            }),
            e.click(function () {
                $("html,body").animate({
                    scrollTop: 0
                }, 1e3);
            });
    },
        e = {
            init: function (t) {
                this.renderHtml(t);
            },
            renderHtml: function (t) {
                var e = t.name,
                    a = t.image,
                    i = t.id,
                    o = t.skuId,
                    n = t.brand,
                    r = t.description,
                    s = t.listPrice,
                    l = t.bestPrice,
                    c = t.installmentNumber,
                    u = t.installmentValue,
                    d = '\n                <div class="prateleira-comprejunto1">\n                <a class="prateleira-image js--lazyload has--lazyload" data-target="image">\n                    <img class="prateleira-image__img" src="'
                        .concat(a, '"/>\n                </a>\n    \n                <div class="prateleira-data" data-id="')
                        .concat(i, '" data-id-sku="')
                        .concat(
                            o,
                            '">\n                <div class="product-selos">\n                    <div class="product-selos__mount "></div>\n                </div>\n                <a class="product-name">\n                    <h3 class="prateleira-name__title" data-target="name">\n                        '
                        )
                        .concat(e, '\n                    </h3>\n                </a>\n                <div class="product-brand">\n                    ')
                        .concat(n, '\n                </div>\n                <a class="product-description">\n                    <a class="product-description__text">\n                    ')
                        .concat(
                            r,
                            '\n                    </a>\n                </a>\n    \n                <p class="product-price">\n                    <a class="product-price__content">\n                        <span class="product-price__oldPrice" data-target="listPrice">'
                        )
                        .concat(s, '</span>\n                        <span class="product-price__bestPrice" data-target="bestPrice">')
                        .concat(
                            l,
                            '</span>\n                    </a>\n    \n                    <div class="product-promotion">\n                        <div class="product-promotion__razor">\n    \n                        </div>\n                    </div>\n    \n                    <div class="product-installment">\n                        <span class="product-installment__normal"><span class="product-installment__bold"><span data-target="installmentNumber">'
                        )
                        .concat(c, '</span> <span data-target="installmentValue">')
                        .concat(u, '</span></span>\n                        no cartÇo</span>\n                    </div>\n                </p>\n            </div>\n        <div class="selo-suspenso"></div>\n    </div>\n            ');
                $(".compre-junto__produto-principal").prepend(d);
            },
        },
        a = {
            init: function (t) {
                var e = t.classPrincipalProduct,
                    a = t.classShelfTemplateParent,
                    i = t.classShelfTemplate,
                    o = t.classProductImage,
                    n = t.classProductInformation,
                    r = t.imageWidth,
                    s = t.imageHeight;
                $("".concat(a, " ").concat(i)).length <= 0 ||
                    (this.removeFieldSet(a), this.principalProduct(o, n, r, s), this.getFirstProductsSkuVariation({
                        classPrincipalProduct: e
                    }), this.getSecondProductsSkuVariation({
                        classShelfTemplateParent: a,
                        classShelfTemplate: i
                    }));
            },
            removeFieldSet: function (t) {
                document
                    .querySelector(t)
                    .querySelectorAll("fieldset")
                    .forEach(function (t) {
                        t.parentNode.removeChild(t);
                    });
            },
            principalProduct: function (t, a, i, o) {
                var n = {},
                    r = document.querySelector(a),
                    s = document.querySelector(t);
                (n.name = r.querySelector(".productName").textContent),
                    (n.image = s.querySelector("#image-main").src),
                    (n.id = r.querySelector("#___rc-p-id") ? r.querySelector("#___rc-p-id").value : ""),
                    (n.skuId = r.querySelector("#___rc-p-sku-ids") ? r.querySelector("#___rc-p-sku-ids").value : ""),
                    (n.brand = r.querySelector(".brand") ? r.querySelector(".brand").textContent : ""),
                    (n.description = r.querySelector(".productDescriptionShort") ? r.querySelector(".productDescriptionShort").textContent : ""),
                    (n.listPrice = r.querySelector(".skuListPrice") ? r.querySelector(".skuListPrice").textContent : ""),
                    (n.bestPrice = r.querySelector(".skuBestPrice") ? r.querySelector(".skuBestPrice").textContent : ""),
                    (n.installmentNumber = r.querySelector(".skuBestInstallmentNumber") ? r.querySelector(".skuBestInstallmentNumber").textContent : ""),
                    (n.installmentValue = r.querySelector(".skuBestInstallmentValue") ? r.querySelector(".skuBestInstallmentValue").textContent : ""),
                    e.init(n);
            },
            getFirstProductsSkuVariation: function (t) {
                var e = t.classPrincipalProduct,
                    i = document.querySelector(e).querySelectorAll(".prateleira-data");
                i.forEach(function (t, e) {
                    var o = t.getAttribute("data-id");
                    vtexjs.catalog.getProductWithVariations(o, a.callbackProductsSkuVariation, t).done(function (o) {
                        a.callbackProductsSkuVariation(o, t), i[e + 1] || setTimeout(a.Dropdown, 1e3);
                    });
                });
            },
            getSecondProductsSkuVariation: function (t) {
                var e = t.classShelfTemplateParent,
                    i = (t.classShelfTemplate, document.querySelector(e).querySelectorAll(".prateleira-data"));
                i.forEach(function (e, o) {
                    var n = e.getAttribute("data-id");
                    vtexjs.catalog.getProductWithVariations(n, a.callbackProductsSkuVariation, e).done(function (n) {
                        a.callbackProductsSkuVariation(n, e), i[o + 1] || setTimeout(a.slickCompreJuntoProducts.bind(null, t), 600);
                    });
                });
            },
            callbackProductsSkuVariation: function (t, e) {
                var i = t.skus,
                    o = t.dimensionsMap;
                a.generateSkusOptions(o, e),
                    i.length > 1 &&
                    i.forEach(function (t) {
                        var i = {};
                        (i.name = t.skuname),
                            (i.image = t.image),
                            (i.id = t.sku),
                            (i.listPrice = t.listPrice),
                            (i.bestPrice = t.bestPrice),
                            (i.installmentNumber = t.installments),
                            (i.installmentValue = t.installmentsValue),
                            (i.skusDimensions = t.dimensions),
                            (i.skusVariations = o),
                            a.generateSkusUniqueOptionsData(i, e);
                    });
            },
            generateSkusOptions: function (t, e, a) {
                var i = document.createElement("div");
                i.classList = "sku";
                var o = function () {
                    var e = document.createElement("div");
                    e.classList = "sku__wrapper";
                    var a = document.createElement("h4");
                    (a.textContent = n), (a.classList = "sku__title");
                    var o = document.createElement("div");
                    o.classList = "sku__dropdown";
                    var r = document.createElement("p");
                    (r.textContent = "Selecione uma opÇõÇo"), (r.classList = "sku__label"), r.setAttribute("data-option", 0);
                    var s = document.createElement("ul");
                    (s.classList = "sku__list"),
                        i.appendChild(e),
                        e.appendChild(a),
                        e.appendChild(o),
                        o.appendChild(r),
                        o.appendChild(s),
                        t[n].forEach(function (t, e) {
                            var a = document.createElement("li");
                            (a.textContent = t), (a.classList = "sku__item"), a.setAttribute("data-option", e + 1), a.setAttribute("data-name", t), s.appendChild(a);
                        });
                };
                for (var n in t) o();
                e.appendChild(i);
            },
            generateSkusUniqueOptionsData: function (t, e) {
                var i = t.name,
                    o = t.image,
                    n = t.id,
                    r = t.listPrice,
                    s = t.bestPrice,
                    l = t.installmentNumber,
                    c = t.installmentValue,
                    u = t.skusDimensions;
                if ((t.skusVariations, Object.keys(u).length <= 1)) {
                    var d = e.querySelector('[data-name="'.concat(i, '"]'));
                    d.setAttribute("data-image", o),
                        d.setAttribute("data-id", n),
                        d.setAttribute("data-listPrice", r),
                        d.setAttribute("data-bestPrice", s),
                        d.setAttribute("data-installmentNumber", l),
                        d.setAttribute("data-installmentValue", c);
                } else a.renderNextSkusOptionsData(t, e);
            },
            renderNextSkusOptionsData: function (t, e) {
                var a = e.querySelectorAll(".sku__list"),
                    i = e.querySelectorAll(".sku__wrapper"),
                    o = a[a.length - 1],
                    n = i[i.length - 1],
                    r = document.createElement("ul");
                if (((r.classList = "sku__list-selectable"), e.querySelector('[data-firstOption="'.concat(t.skusDimensions[Object.keys(t.skusDimensions)[0]], '"]')))) {
                    var s = e.querySelector('[data-firstOption="'.concat(t.skusDimensions[Object.keys(t.skusDimensions)[0]], '"]')).children;
                    [].forEach.call(s, function (e) {
                        e.textContent === t.skusDimensions[Object.keys(t.skusDimensions)[1]] &&
                            (e.setAttribute("data-image", t.image),
                                e.setAttribute("data-id", t.id),
                                e.setAttribute("data-listPrice", t.listPrice),
                                e.setAttribute("data-bestPrice", t.bestPrice),
                                e.setAttribute("data-installmentNumber", t.installmentNumber),
                                e.setAttribute("data-installmentValue", t.installmentValue),
                                (e.classList += " active"));
                    });
                } else
                    r.setAttribute("data-firstOption", t.skusDimensions[Object.keys(t.skusDimensions)[0]]),
                        [].forEach.call(o.children, function (e) {
                            var a = e.cloneNode(!0);
                            a.textContent === t.skusDimensions[Object.keys(t.skusDimensions)[Object.keys(t.skusDimensions).length - 1]] &&
                                (a.setAttribute("data-image", t.image),
                                    a.setAttribute("data-id", t.id),
                                    a.setAttribute("data-listPrice", t.listPrice),
                                    a.setAttribute("data-bestPrice", t.bestPrice),
                                    a.setAttribute("data-installmentNumber", t.installmentNumber),
                                    a.setAttribute("data-installmentValue", t.installmentValue),
                                    (a.classList += " active")),
                                r.appendChild(a);
                        }),
                        n.querySelector(".sku__dropdown").appendChild(r);
            },
            Dropdown: function () {
                var t = document.getElementsByClassName("sku");

                function e(t) {
                    t.target.classList.contains("sku__label") &&
                        (t.target.parentNode.children.length <= 2 ?
                            (t.currentTarget.querySelector(".sku__list-selectable.enabled.sku__list--open") && t.currentTarget.querySelector(".sku__list-selectable.enabled.sku__list--open").classList.remove("sku__list--open"),
                                t.target.parentNode.querySelector(".sku__list").classList.toggle("sku__list--open")) :
                            t.currentTarget.querySelector(".sku__list-selectable.enabled") &&
                            (t.currentTarget.querySelector(".sku__list.sku__list--open") && t.currentTarget.querySelector(".sku__list.sku__list--open").classList.remove("sku__list--open"),
                                t.target.parentNode.querySelector(".sku__list-selectable.enabled").classList.toggle("sku__list--open")));
                }

                function i(t) {
                    if (t.target.classList.contains("sku__item")) {
                        var e = t.target.parentNode.parentNode.querySelector(".sku__label"),
                            i = t.target.getAttribute("data-option"),
                            o = t.target.getAttribute("data-name"),
                            n = t.target.getAttribute("data-image"),
                            r = t.target.getAttribute("data-id"),
                            s = t.target.getAttribute("data-listprice"),
                            l = t.target.getAttribute("data-bestprice"),
                            c = t.target.getAttribute("data-installmentnumber"),
                            u = t.target.getAttribute("data-installmentvalue");
                        if (
                            (e.setAttribute("data-option", i),
                                e.setAttribute("data-name", o),
                                e.setAttribute("data-image", n),
                                e.setAttribute("data-id", r),
                                e.setAttribute("data-listprice", s),
                                e.setAttribute("data-bestprice", l),
                                e.setAttribute("data-installmentnumber", c),
                                e.setAttribute("data-installmentvalue", u),
                                !t.target.classList.contains("active") && t.currentTarget.querySelector(".sku__list-selectable"))
                        ) {
                            t.currentTarget.querySelectorAll(".sku__list-selectable").forEach(function (t) {
                                t.classList.remove("enabled");
                            });
                            var d = t.currentTarget.querySelector('[data-firstoption="'.concat(o, '"]')),
                                p = d.parentNode.querySelector(".sku__label"),
                                m = document.createElement("p");
                            (m.textContent = "Selecione uma opÇõÇo"), (m.classList = "sku__label"), d.parentNode.removeChild(p), d.parentNode.append(m), d.classList.add("enabled");
                        }
                        (e.textContent = o),
                            t.currentTarget.querySelector(".sku__list").classList.remove("sku__list--open"),
                            t.currentTarget.querySelector(".sku__list-selectable.enabled") && t.currentTarget.querySelector(".sku__list-selectable.enabled").classList.remove("sku__list--open");
                        var h = (function (t) {
                            var e = {},
                                a = t.parentNode.parentNode;
                            return (
                                (e.name = a.querySelector('[data-target="name"]')),
                                (e.img = a.querySelector('[data-target="image"] img')),
                                (e.listPrice = a.querySelector('[data-target="listPrice"]')),
                                (e.bestPrice = a.querySelector('[data-target="bestPrice"]')),
                                (e.installmentNumber = a.querySelector('[data-target="installmentNumber"]')),
                                (e.installmentValue = a.querySelector('[data-target="installmentValue"]')),
                                e
                            );
                        })(t.currentTarget);
                        o && (h.name.textContent = o),
                            n && (h.img.src = n),
                            s && (h.listPrice.textContent = "R$" + ePlusUtils.Helpers.formatReal(s)),
                            l && (h.bestPrice.textContent = "R$" + ePlusUtils.Helpers.formatReal(l)),
                            c && (h.installmentNumber.textContent = c),
                            u && (h.installmentValue.textContent = "R$" + ePlusUtils.Helpers.formatReal(u)),
                            a.buyButtonShowRule();
                    }
                }
                [].forEach.call(t, function (t) {
                    t.addEventListener("click", e), t.addEventListener("click", i);
                });
            },
            slickCompreJuntoProducts: function (t) {
                var e = t.classShelfTemplateParent,
                    i = t.classShelfTemplate;
                $("".concat(e, " > ").concat(i, " > ul")).slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: !1,
                    arrows: !0
                }), a.slickArrowRule();
            },
            buyButtonShowRule: function () {
                var t = a.checkFirstProductOptions(),
                    e = a.checkSecondProductOptions();
                if (0 === t && 0 === e) {
                    var i = document.querySelector(".compre-junto__total"),
                        o = i.querySelector(".compre-junto__title"),
                        n = i.querySelector(".compre-junto__price"),
                        r = i.querySelector(".compre-junto__btn");
                    o.classList.remove("disabled"), o.classList.add("enabled"), n.classList.remove("disabled"), n.classList.add("enabled"), r.classList.remove("disabled"), r.classList.add("enabled"), a.generateFinalPrice(n);
                } else {
                    var s = document.querySelector(".compre-junto__total"),
                        l = s.querySelector(".compre-junto__title"),
                        c = s.querySelector(".compre-junto__price"),
                        u = s.querySelector(".compre-junto__btn");
                    l.classList.remove("enabled"), l.classList.add("disabled"), c.classList.remove("enabled"), c.classList.add("disabled"), (c.textContent = ""), u.classList.remove("enabled"), u.classList.add("disabled");
                }
            },
            checkFirstProductOptions: function () {
                var t = document.querySelector(".compre-junto__produto-principal"),
                    e = t.querySelector(".sku").children.length,
                    a = t.querySelectorAll(".sku__label"),
                    i = [];
                if (e > 0)
                    for (var o = 0; o < e; o++) a[o].getAttribute("data-id") && i.push(!0);
                return i.length - e;
            },
            checkSecondProductOptions: function () {
                var t = document.querySelector(".compre-junto .slick-active"),
                    e = t.querySelector(".sku").children.length,
                    a = t.querySelectorAll(".sku__label"),
                    i = [];
                if (e > 0)
                    for (var o = 0; o < e; o++) a[o].getAttribute("data-id") && i.push(!0);
                return i.length - e;
            },
            slickArrowRule: function () {
                document.addEventListener("click", function (t) {
                    t.target.classList.contains("slick-arrow") && a.buyButtonShowRule();
                });
            },
            generateFinalPrice: function (t) {
                var e = document.querySelector(".compre-junto__produto-principal"),
                    a = document.querySelector(".compre-junto .slick-active"),
                    i = e.querySelector(".product-price__bestPrice").textContent.split("R$").join("").split(".").join("").split(",").join("."),
                    o = a.querySelector('[data-target="bestPrice"]').textContent.split("R$").join("").split(".").join("").split(",").join("."),
                    n = parseFloat(i) + parseFloat(o);
                t.textContent = "R$ " + n.toFixed(2).split(".").join(",");
            },
        },
        i = {
            init: function () {
                this.pagBusca(), this.filtroCategoria(), this.showDropDownList(), this.changeDropDownLabel(), this.toggleCategorias(), this.trocaNumeroDeResultados();
            },
            trocaNumeroDeResultados: function () {
                var t = $(".main .resultado-busca-numero .value:first").text();
                $(".order-main-container__text").text(t);
            },
            toggleCategorias: function () {
                window.innerWidth <= 1024 &&
                    ($(".search-single-navigator h4").next("ul").hide(),
                        $(document).on("click", ".search-single-navigator h4", function (t) {
                            t.preventDefault(), $(this).next().slideToggle();
                        }));
            },
            showDropDownList: function () {
                $(".order-main-container-right-order__item--label").click(function (t) {
                    $(".order-main-container-right-order-list").slideToggle();
                });
            },
            changeDropDownLabel: function () {
                $(".order-main-container-right-order__item:not(.order-main-container-right-order__item--label)").click(function (t) {
                    var e = t.target.getAttribute("data-id");
                    $(".order-main-container-right-order-list").slideToggle(), (window.location.href = window.location.href.split("?")[0] + "?PS=12&O=" + e);
                });
            },
            pagBusca: function () {
                var t = vtxctx.searchTerm;
                $(".conteudo-categoria .titulo-sessao").append(": " + t), $(".bread ul").append("<li>" + t + "</li>");
            },
            filtroCategoria: function () {
                $(".filtrosDepartamento .search-single-navigator h5, .filtrosDepartamento .search-single-navigator h4").each(function (t) {
                    $(this).next("ul").find("li").length < 1 && ($(this).next("ul").remove(), $(this).remove());
                });
            },
        },
        o = {
            init: function () {
                this.removeHelperComplement(),
                    this.qtdCart(),
                    this.montaSeloPrateleira(),
                    this.corDoSelo(),
                    this.ajustePrecoPrateleira(),
                    this.seloDescontoPrateleira(),
                    this.carrinhoClick(),
                    this.menuMarcas(),
                    this.menuMarcasClick(),
                    this.fechaMenus(),
                    this.itensFooterToggle(),
                    this.menuMobile(),
                    this.marcasMobile(),
                    this.slidePrateleiras(),
                    this.descricaoPrateleiraClick(),
                    this.enviaDados(),
                    this.validate(),
                    this.validateEmail(),
                    this.newsLetter(),
                    this.menuLoginDropdown(),
                    this.precoComDescontoAvista();
            },
            precoComDescontoAvista: function () {
                $(".prateleira-data").each(function (t, e) {
                    var a = $(e).find(".product-price__bestPrice").text().split(" ");
                    if (0 != a) {
                        0 === e.querySelector(".product-promotion__razor").children.length && ($(e).find(".product-promotion__razor").hide(), $(e).find(".product-promotion__valor").hide());
                        var i = a[1].split(".").join("").split(",").join(".");
                        i = parseFloat(i);
                        var o = $(e).find(".product-promotion__razor .flag").text().split(" ")[0].split(""),
                            n = (i * parseFloat(o[0])) / 100;
                        (n = i - n),
                            $(e)
                                .find(".product-promotion__valor")
                                .text("R$ " + n.toFixed(2).split(".").join(","));
                    }
                });
            },
            descricaoPrateleiraClick: function () {
                $(".product-description__link").each(function (t, e) {
                    $(e).parent().attr("href", $(e).text());
                });
            },
            slidePrateleiras: function () {
                if ($('body').is('.black-friday-2020')) {
                    if (window.outerWidth > 1400) {
                        $(".cinquentamais-prateleira-container .cinquentamais-prateleira > ul").slick({
                            lazyLoad: "ondemand",
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            arrows: !0,
                            dots: !0
                        })
                    } else if (window.outerWidth <= 1400 && window.outerWidth > 768) {
                        $(".cinquentamais-prateleira-container .cinquentamais-prateleira > ul").slick({
                            lazyLoad: "ondemand",
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: !0,
                            dots: !0
                        })
                    } else {
                        window.outerWidth <= 768 && $(".cinquentamais-prateleira-container .cinquentamais-prateleira > ul").slick({
                            lazyLoad: "ondemand",
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !0,
                            dots: !0
                        });
                    }

                    $('.cinquentamais-prateleira').each(function () {
                        var $t = $(this);
                        $t.find("h2").addClass('title-section').insertBefore($t.parents('.banner-and-shelf'));
                    });

                    $('h2.title-section:eq(0)').addClass('primeiro');

                } else {
                    window.outerWidth > 1024 ?
                        $(".cinquentamais-prateleira-container .cinquentamais-prateleira > ul").slick({
                            lazyLoad: "ondemand",
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            arrows: !0,
                            dots: !1
                        }) :
                        window.outerWidth <= 1024 && window.outerWidth > 769 ?
                            $(".cinquentamais-prateleira-container .cinquentamais-prateleira > ul").slick({
                                lazyLoad: "ondemand",
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                arrows: !0,
                                dots: !0
                            }) :
                            window.outerWidth > 500 && window.outerWidth <= 768 ?
                                $(".cinquentamais-prateleira-container .cinquentamais-prateleira > ul").slick({
                                    lazyLoad: "ondemand",
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                    arrows: !0,
                                    dots: !0
                                }) :
                                window.outerWidth <= 500 && $(".cinquentamais-prateleira-container .cinquentamais-prateleira > ul").slick({
                                    lazyLoad: "ondemand",
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    arrows: !0,
                                    dots: !0
                                });
                }

            },
            marcasMobile: function () {
                $(".menu-mobile__title").click(function (t) {
                    t.preventDefault(), $(".marcas-hide__ul").fadeToggle();
                });
            },
            menuMobile: function () {
                $(document).on("click", ".header-mobile__icon-menu", function () {
                    $(".menu-mobile").fadeToggle(), $("body").addClass("aberto"), $("#overlay").toggleClass("overlay--open");
                }),
                    $(document).on("click", ".menu-mobile__nav-item", function (t) {
                        t.target.classList.contains("menu-mobile__nav-item") && $(this).children()[0].classList.add("menu-mobile-open");
                    }),
                    $(document).on("click", ".back", function (t) {
                        t.target.classList.contains("back") && $(this).parent().removeClass("menu-mobile-open");
                    }),
                    $(".menu-mobile__fechar").click(function (t) {
                        t.preventDefault(), $(".menu-mobile").hide(), $("#overlay").fadeOut(300), $("body").removeClass("aberto"), $("#overlay").toggleClass("overlay--open");
                    }),
                    $("#overlay").click(function (t) {
                        $("#overlay").fadeOut(300), $(".menu-mobile").hide(), $("body").removeClass("aberto");
                    }),
                    $(document).on("click", ".menu-mobile__nav-item, .menu-mobile-aberto-item", function (t) {
                        $(this).find("displayOf").removeClass("displayOf");
                    });
            },
            itensFooterToggle: function () {
                window.outerWidth <= 1024 &&
                    ($(".footer-links__title").click(function (t) {
                        t.preventDefault(), $(this).next().slideToggle();
                    }),
                        $(".footer-column__title").click(function (t) {
                            t.preventDefault(), $(this).next().slideToggle();
                        }));
            },
            menuLoginDropdown: function () {
                $(document).on("click", ".saudacao-topo__saudacao", function () {
                    $(".login-suspenso").toggleClass("login-suspenso-block"), $("#overlay").fadeIn(300);
                }),
                    $("#overlay").click(function (t) {
                        $(".login-suspenso").removeClass("login-suspenso-block"), $("#overlay").fadeOut(300);
                    });
            },
            fechaMenus: function () {
                $(".todos-departamentos__title").click(function (t) {
                    $(".menu-desktop-aberto-item").removeClass("item-show");
                }),
                    $(".menu-desktop-aberto-item").click(function (t) {
                        $(".todos-departamentos__title").removeClass("item-show-main");
                    });
            },
            menuMarcas: function () {
                marcas.sort(),
                    $.each(marcas, function (t, e) {
                        var a = '<li class="marcas-hide__item"><a class="marcas-hide__link" href="/'.concat(e, '">').concat(e, "</a></li>");
                        $(".marcas-hide__ul").append(a);
                    });
            },
            menuMarcasClick: function () {
                $(document).on("click", ".menu-marcas", function (t) {
                    $("body").toggleClass("aberto"),
                        $(".marcas-hide").toggleClass("block-overlay"),
                        $(".menu-marcas").toggleClass("bg-verde"),
                        $(".marcas__title").toggleClass("fonte-branca"),
                        $("#overlay:visible").length > 0 ? $("#overlay").fadeOut(300) : $("#overlay").fadeIn(300);
                }),
                    $("#overlay").click(function (t) {
                        $("body").removeClass("aberto"),
                            $("#overlay").fadeOut(300),
                            $(".marcas-hide").removeClass("block-overlay"),
                            $("#overlay").removeClass("overlay--open"),
                            $(".menu-marcas").removeClass("bg-verde"),
                            $(".marcas__title").removeClass("fonte-branca");
                    });
            },
            miniCartVazio: function (t) {
                t.items.length <= 0 ?
                    ($(".miniCart__null").css("display", "block"), $(".miniCart__body").hide(), $(".miniCart__footer").hide()) :
                    ($(".miniCart__null").css("display", "none"), $(".miniCart__body").show(), $(".miniCart__footer").show());
            },
            carrinhoClick: function () {
                $(document).on("click", ".carrinho__icon-cart, .carrinho__title-cart, .carrinho__container", function (t) {
                    $("body").toggleClass("aberto"), $(".miniCart").toggleClass("block-overlay"), $("#overlay:visible").length > 0 ? $("#overlay").fadeOut(300) : $("#overlay").fadeIn(300);
                }),
                    $("#overlay, .miniCart__btn-continue").click(function (t) {
                        $("body").removeClass("aberto"), $("#overlay").fadeOut(300), $(".miniCart").removeClass("block-overlay"), $("#overlay").removeClass("overlay--open");
                    });
            },

            seloDescontoPrateleira: function () {
                $(".selo-suspenso").each(function (t, e) {
                    var a = $(e).text();
                    "0" === a && $(e).hide();
                    var i = a.split(" ")[0].split(",").join("."),
                        o = parseFloat(i).toFixed(0),
                        n = o - 2 * o;
                    $(e).text(n + "%");
                });
            },

            ajustePrecoPrateleira: function () {
                $(".product-price__oldPrice").each(function (t, e) {
                    0 === $(e).text().length && $(e).addClass("mrnone");
                });
            },

            montaSeloPrateleira: function () {
                $(".product-selos").each(function (t, e) {
                    var a = $(e).find(".product-selos__cor li").text(),
                        i = $(e).find(".product-selos__selo li").text();

                    $(this).find(".product-selos__mount").text(i), "vermelho" === a ? $(this).addClass("bg-vermelho") : "azul" === a || "Cor do selo" === a ? $(this).addClass("bg-azul") : $(this).addClass("bg-none");

                });
            },

            corDoSelo: function () {
                // Loop por toda a prateleira
                $('.cinquentamais-prateleira li').each(function() {
                    // Verificando qual a classe que está aplicada na div de product-selos
                    if ($(this).find('.product-selos').hasClass('bg-vermelho')) {
                        $(this).find('.selo-suspenso').addClass('bg-vermelho')
                    } else if ($(this).find('.product-selos').hasClass('bg-azul')) {
                        $(this).find('.selo-suspenso').addClass('bg-azul')
                    } else {
                        $(this).find('.selo-suspenso').addClass('bg-none')
                    }
                })
            },


            removeHelperComplement: function () {
                $(".helperComplement").remove();
            },
            getMoney: function (t) {
                return parseInt(t.replace(/[\D]+/g, ""));
            },
            formatReal: function (t) {
                var e = t + "";
                return (e = e.replace(/([0-9]{2})$/g, ",$1")).length > 6 && (e = e.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")), e;
            },
            menuPrincipalDesktop: function () {
                console.log(1)
                $.ajax({
                    url: "/api/catalog_system/pub/category/tree/3/",
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .done(function (t) {
                        var e = $(".menu-desktop__nav"),
                            a = t;
                        $.each(a, function (t, i) {
                            e.append(
                                '<li class="menu-desktop__itemMenu cat' +
                                i.id +
                                " cat-index-" +
                                t +
                                '"><a class="menu-desktop__link" href="' +
                                i.url +
                                '" title="' +
                                i.name +
                                '">' +
                                i.name +
                                '</a><div class="container menu-desktop__subMenu"><ul class="menu-desktop__subCategoria"> </ul></div></li>'
                            ),
                                $(a[t].children).each(function (e, i) {
                                    var o = a[t].children[e].id,
                                        n = a[t].children[e].name,
                                        r = a[t].children[e].url;
                                    $(".cat-index-" + t)
                                        .find(".container-center")
                                        .append('<li id="' + o + '" class="menu-desktop__subItem"><a href="' + r + '" class="menu-desktop__link">' + n + "</a> <ul> </ul></li>"),
                                        $(a[t].children[e].children).each(function (i, n) {
                                            var r = a[t].children[e].children[i].id,
                                                s = a[t].children[e].children[i].name,
                                                l = a[t].children[e].children[i].url;
                                            $(".cat-index-" + t)
                                                .find("#" + o)
                                                .find("ul")
                                                .append('<li id="' + r + '" class="menu-desktop__subItemSub"><a href="' + l + '" class="menu-desktop__link">' + s + "</a></li>");
                                        });
                                });
                            console.log(i)
                        });
                    })
                    .done(function () { });
            },
            menuPrincipalMobile: function () {
                $.ajax({
                    url: "/api/catalog_system/pub/category/tree/3/",
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .done(function (t) {
                        var e = $(".menu-mobile__nav"),
                            a = t;
                        $.each(a, function (t, i) {
                            e.append(
                                '<li class="menu-mobile__itemMenu cat' +
                                i.id +
                                " cat-index-" +
                                t +
                                '"><a class="menu-mobile__link" href="' +
                                i.url +
                                '" title="' +
                                i.name +
                                '">' +
                                i.name +
                                '</a><div class="container menu-mobile__subMenu"><ul class="menu-mobile__subCategoria"> </ul></div></li>'
                            ),
                                $(a[t].children).each(function (e, i) {
                                    var o = a[t].children[e].id,
                                        n = a[t].children[e].name,
                                        r = a[t].children[e].url;
                                    $(".cat-index-" + t)
                                        .find(".container-center")
                                        .append('<li id="' + o + '" class="menu-mobile__subItem"><a href="' + r + '" class="menu-mobile__link">' + n + "</a> <ul> </ul></li>"),
                                        $(a[t].children[e].children).each(function (i, n) {
                                            var r = a[t].children[e].children[i].id,
                                                s = a[t].children[e].children[i].name,
                                                l = a[t].children[e].children[i].url;
                                            $(".cat-index-" + t)
                                                .find("#" + o)
                                                .find("ul")
                                                .append('<li id="' + r + '" class="menu-mobile__subItemSub"><a href="' + l + '" class="menu-mobile__link">' + s + "</a></li>");
                                        });
                                });
                        });
                    })
                    .done(function () { });
            },
            qtdCart: function () {
                vtexjs.checkout.getOrderForm().done(function (t) {
                    var e = t.items.length;
                    $(".header .carrinho .qtd-cart").text(e), o.verificaLogado(t);
                });
            },
            verificaLogado: function (t) {
                if (t.loggedIn) {
                    var e = t.clientProfileData.email;
                    $(".saudacao-topo").css("display", "block"),
                        $(".saudacao-topo").html('Olá­ <span class="saudacao-topo__mail">' + e + '</span><br/><a href="/account" class="saudacao-topo__account"> Minha conta</a><a href="/logout">Sair</a>');
                } else $(".saudacao-topo__saudacao").html('<a href="#"><h2 class="saudacao-topo__cinza">Olá­! entrar na<br /><span class="saudacao-topo__verde">Minha conta</span></h2></a>');
            },
            slickPrateleiraCinquentaMaisRecomenda: function () {
                $(".prateleira-recomenda__nav .cinquentamais-prateleira ul").slick({
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: !0,
                    arrows: !0
                });
            },
            descontoPrat: function () {
                $(".priceLabel").each(function () {
                    var t = $(this).html();
                    (t = t.replace(" %", "").replace(",", ".").replace("<br>", "").replace("OFF", "").replace("%", "")), (t = Number(t)), (t = Math.ceil(t)), $(this).html(t + "%  OFF");
                });
            },
            descontoProd: function () {
                if ($("body").hasClass("produto") && "" != $(".price-list-price .skuListPrice").text()) {
                    var t = o.getMoney($(".price-list-price .skuListPrice").text()),
                        e = o.getMoney($(".price-best-price .skuBestPrice").text()),
                        a = parseFloat((e / t) * 100) - 100;
                    setTimeout(function () {
                        $(".principal_content--left").prepend('<span class="discount-prod">' + a + "% OFF</span>");
                    }, 1500);
                }
            },
            msgProdutoCarrinho: function () {
                $(".msg-compra-externo, .msg-compra .continuar-comprar").click(function () {
                    $(".msg-compra-externo, .msg-compra").fadeToggle();
                });
            },
            qtdProd: function () {
                $(".qtd-prod .add-qtd").click(function () {
                    var t = parseInt($(this).prev(".qtd-valor").val());
                    (t += 1), $(this).prev(".qtd-valor").val(t);
                }),
                    $(".qtd-prod .sub-qtd").click(function () {
                        var t = parseInt($(this).next(".qtd-valor").val());
                        1 == t ? $(this).next(".qtd-valor").val("1") : ((t -= 1), $(this).next(".qtd-valor").val(t));
                    }),
                    $(".loja-prateleira .qtd-prod .qtd-valor").bind("keyup blur focus", function () {
                        $(this).val($(this).val().replace(/[^\d]/g, ""));
                    });
            },
            footerMobile: function () {
                if ($(window).width() < 1e3) {
                    $(".footer-01 .footer-01-02 h3, .footer-01 .footer-01-03 h3").click(function () {
                        $(this).toggleClass("active"), $(this).next("ul").slideToggle();
                    }),
                        $(".footer-02 .footer-02-01 p").click(function () {
                            $(this).toggleClass("active"), $(this).next(".bandeiras").slideToggle();
                        }),
                        $(".footer-02 .footer-02-02 p").click(function () {
                            $(this).next(".letsencrypt").slideToggle(), $(this).toggleClass("active");
                        });
                    var t = $(".direitos-footer .direitos-footer-02").get();
                    $(".info-footer").after(t);
                }
            },
            enviaDados: function (t, e, a, i, o) {
                return $.ajax({
                    accept: "application/vnd.vtex.ds.v10+json",
                    contentType: "application/json; charset=utf-8",
                    crossDomain: !0,
                    data: JSON.stringify(t),
                    type: "POST",
                    url: "/api/dataentities/".concat(e, "/documents"),
                    success: function (t) {
                        $(a).html(i), $(o).remove();
                    },
                    error: function (t) { },
                });
            },
            validateEmail: function (t) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t);
            },
            validate: function (t) {
                return !!o.validateEmail(t);
            },
            newsLetter: function () {
                $(".newsletter-form__btn").click(function (t) {
                    var e = $(".newsletter-form__input").val(),
                        a = '<div class="notification-container-footer">\n                            <p class="notification-text">Preencha os campos corretamente!</p>\n                            </div>';
                    "" != e
                        ?
                        "" != e &&
                        (o.validate(e) ?
                            o.enviaDados({
                                email: e
                            }, "NL", ".newsletter__wrapper", "<div class='container-newsletter-message'><p class='newsletter-message'>VocÇ¦ foi cadastrado na nossa newsletter, obrigado!</p></div>") :
                            $(".newsletter-form").after(a)) :
                        $(".newsletter-form").after(a);
                });
            },
        },
        n = {
            init: function () {
                this.slidePrincipal(), this.slideMarcas(), this.countdownClock(), this.slideInformativos(), this.slideCategoriasEmAlta(), this.slideCategoriasEmDestaque();
            },
            countdownClock: function () {
                var t = $(".countdown-right").html();
                "" != t &&
                    $(".countdown-right").countdown(t, function (t) {
                        $(this).html(
                            t.strftime(
                                '<span class="dias">%D</span><span class="pontos">:</span><span class="horas">%H</span><span class="pontos">:</span><span class="minutos">%M</span><span class="pontos">:</span><span class="segundos">%S</span>'
                            )
                        );
                    });
            },
            slidePrincipal: function () {
                $(".slide-principal").slick({
                    autoplay: !0,
                    autoplaySpeed: 4e3,
                    dots: !0
                });
            },
            slideInformativos: function () {

                if ($('body').is('.black-friday-2020')) {
                    window.outerWidth <= 1024 && window.outerWidth > 769 ?
                        $(".informativos").slick({
                            infinite: !0,
                            lazyLoad: "ondemand",
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            dots: true
                        }) :
                        window.outerWidth <= 768 && $(".informativos").slick({
                            infinite: !0,
                            lazyLoad: "ondemand",
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true
                        });
                } else {
                    window.outerWidth <= 1024 && window.outerWidth > 769 ?
                        $(".informativos").slick({
                            infinite: !0,
                            lazyLoad: "ondemand",
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            autoplay: true,
                            dots: false
                        }) :
                        window.outerWidth <= 768 && $(".informativos").slick({
                            infinite: !0,
                            lazyLoad: "ondemand",
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            dots: false
                        });
                }

            },
            slideMarcas: function () {
                window.outerWidth > 1024 ?
                    $(".slide-marcas__container").slick({
                        lazyLoad: "ondemand",
                        slidesToShow: 5,
                        slidesToScroll: 3,
                        arrows: !0
                    }) :
                    window.outerWidth <= 1024 && window.outerWidth > 600 ?
                        $(".slide-marcas__container").slick({
                            lazyLoad: "ondemand",
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            arrows: !0
                        }) :
                        window.outerWidth <= 600 && $(".slide-marcas__container").slick({
                            lazyLoad: "ondemand",
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            arrows: !0
                        });
            },
            slideCategoriasEmDestaque2: function () {

                if ($('body').is('.black-friday-2020')) {
                    return;
                } else {
                    window.outerWidth > 500 && window.outerWidth <= 1024 ?
                        $(".banner-destaque").slick({
                            lazyLoad: "ondemand",
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            arrows: !1,
                            dots: !0
                        }) :
                        window.outerWidth <= 500 && $(".banner-destaque").slick({
                            lazyLoad: "ondemand",
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !1,
                            dots: !0
                        });
                }
            },
            slideCategoriasEmAlta: function () {
                window.outerWidth > 500 && window.outerWidth <= 1024 ?
                    $(".banner-em-alta").slick({
                        lazyLoad: "ondemand",
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        arrows: !1,
                        dots: !0
                    }) :
                    window.outerWidth <= 500 && $(".banner-em-alta").slick({
                        lazyLoad: "ondemand",
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1,
                        dots: !0
                    });
            },
        },
        r = function (t) {
            var e = t.shelfClass,
                a = t.buttonLoadMoreSelector,
                i = t.callback;
            if ($.fn.QD_infinityScroll) {
                var o = $("[class*='" + e + " n']>ul"),
                    n = $(a);
                $(".searchResultsTime:first-child .resultado-busca-numero .value").text() > 12 && n.addClass("show");
                var r = function () {
                    return !!n.hasClass("noResults") && (n.text("NÇO TEM MAIS PRODUTOS"), n.removeClass("loading"), n.addClass("end"), !0);
                };
                $("." + e + "[id*=ResultItems]").QD_infinityScroll({
                    callback: function () {
                        $(".helperComplement").remove(), $("." + e + "[id*=ResultItems] meta[name=ROBOTS]").remove();
                        var t = $("." + e + "[id*=ResultItems]>div:last-child>ul>li");
                        $("." + e + "[id*=ResultItems]>div+div").remove(), o.append(t), r() || (n.removeClass("loading"), i instanceof Function && i());
                    },
                    paginate: function (t) {
                        n.click(function (e) {
                            if (o.children("li").length % 12 != 0) return e.currentTarget.classList.add("noResults"), void r();
                            t();
                        });
                    },
                }),
                    $(window).on("QuatroDigital.is_noMoreResults", function () {
                        n.addClass("noResults");
                    });
            }
        },
        s = {
            init: function () {
                this.faleConosco(), this.institucional();
            },
            faleConosco: function () {
                $(".enviarForm").click(function () {
                    var t,
                        e,
                        a = $("#fcEmail").val(),
                        i = $("#fcMsg").val(),
                        o = $("#fcNome").val();
                    $(".boxCampo input, .boxCampo textarea").css("border", "1px solid #cccccc"),
                        $(".box-form-msg").css("display", "none"),
                        "" == o ?
                            ($("#fcNome").css("border", "1px solid #d00d0d"), $("#fcNome").before('<div class="box-form-msg">Preencha o campo Nome</div>')) :
                            "" == a ?
                                ($("#fcEmail").css("border", "1px solid #d00d0d"), $("#fcEmail").before('<div class="box-form-msg">Preencha o campo E-mail</div>')) :
                                "" == i ?
                                    ($("#fcMsg").css("border", "1px solid #d00d0d"), $("#fcMsg").before('<div class="box-form-msg">Preencha o campo Mensagem</div>')) :
                                    "" != a &&
                                    ((t = $("#fcEmail").val()),
                                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t) ?
                                            (((e = {}).email = a),
                                                (e.mensagem = i),
                                                (e.nome = o),
                                                $.ajax({
                                                    accept: "application/vnd.vtex.ds.v10+json",
                                                    contentType: "application/json; charset=utf-8",
                                                    crossDomain: !0,
                                                    data: JSON.stringify(e),
                                                    type: "POST",
                                                    url: "/api/dataentities/FC/documents",
                                                    success: function (t) {
                                                        $("#formFC").html("<p id='msgSucesso'>Mensagem enviada com sucesso!</p>");
                                                    },
                                                    error: function (t) { },
                                                })) :
                                            ($("#fcEmail").css("border", "1px solid #d00d0d"), $("#fcEmail").before('<div class="box-form-msg">Preencha um e-mail vÇ­lido</div>')));
                });
            },
            institucional: function () {
                screen < 1e3 &&
                    $(".menu-lateral-institucional h3").click(function () {
                        $(this).toggleClass("aberto"), $(".menu-lateral-institucional ul").slideToggle();
                    });
            },
        },
        l = {
            init: function (t) {
                var e = t.tree,
                    a = t.menuClass;
                this.requestCategoryTree({
                    tree: e,
                    menuClass: a || ".menu-desktop__ul"
                });
            },
            requestCategoryTree: function (t) {
                var e = t.tree,
                    a = t.menuClass,
                    i = new XMLHttpRequest();
                i.onload = function () {
                    return 200 == this.status ? l.menuPrincipalDesktop({
                        menuClass: a,
                        dados: i.response,
                        tree: e
                    }) : "Failed to http request";
                };
                var o = {
                    url: "/api/catalog_system/pub/category/tree/".concat(e, "/"),
                    method: "GET",
                    headers: {
                        "content-type": "application/json"
                    }
                };
                i.open(o.method, o.url, !0), i.setRequestHeader("Content-Type", "application/json"), i.send(null);
            },
            menuPrincipalDesktop: function (t) {
                var e = t.dados,
                    a = t.menuClass,
                    i = document.querySelector(a),
                    o = JSON.parse(e),
                    n = a.split(".").join("");
                this.menuRecursive({
                    array: o,
                    pai: i,
                    classe: n
                });
            },
            menuRecursive: function (t) {
                var e = this,
                    a = t.array,
                    i = t.pai,
                    o = t.classe,
                    n = t.counter,
                    r = void 0 === n ? 0 : n;
                a[0] &&
                    a.map(function (t) {
                        var a = document.createElement("div");
                        a.setAttribute("data-id", t.id), a.classList.add(i.classList + "-sub");
                        var n = document.createElement("span");
                        (n.textContent = "Voltar"), n.classList.add("back");
                        var s = document.createElement("a");
                        (s.textContent = t.name), t.children.length <= 0 && (s.href = t.url), s.classList.add(o + "-item"), s.classList.add(o + "-item" + r);
                        var l = t.children.length > 0 ? "icon-arrow" : "testando";
                        s.classList.add(l);
                        var c = document.createElement("a");
                        (c.textContent = t.name), (c.href = t.url), c.classList.add(o + "-item-main");
                        var u = document.createElement("a");
                        (u.textContent = "Ver todos... "), (u.href = t.url), u.classList.add(o + "-ver-todos");
                        var d = document.createElement("div");
                        d.classList.add(a.classList + "-container");
                        var p = r + 1;
                        i.appendChild(a), a.appendChild(s), s.appendChild(d), d.appendChild(n), d.appendChild(c), d.appendChild(u), t.children.length > 0 && e.menuRecursive({
                            array: t.children,
                            pai: d,
                            classe: o,
                            counter: p
                        });
                    });
            },
        },
        c = {
            init: function (t) {
                void 0 === t && (t = {
                    classes: {}
                });
                var e = {
                    classes: {
                        iconTotalItems: t.classes.iconTotalItems || "miniCart__qtd-cart",
                        miniCartProduct: t.classes.miniCartProduct || "miniCart__product",
                        miniCartTotalPrice: t.classes.miniCartTotalPrice || "miniCart__total-price",
                        productImage: t.classes.productImage || "miniCart__image",
                        productImageWrapper: t.classes.productImageWrapper || "miniCart__product-img",
                        productInfos: t.classes.productInfos || "miniCart__product-infos",
                        productList: t.classes.productList || "miniCart__product-list",
                        productListPrice: t.classes.productListPrice || "miniCart__product-list-price",
                        productName: t.classes.productName || "miniCart__product-name",
                        productPrice: t.classes.productPrice || "miniCart__product-price",
                        productQuantity: t.classes.productQuantity || "miniCart__product-qtd",
                        productQuantityBtn: t.classes.productQuantityBtn || "miniCart__product-qtd-btn",
                        productQuantityMinus: t.classes.productQuantityMinus || "miniCart__product-qtd-btn-minus",
                        productQuantityPlus: t.classes.productQuantityPlus || "miniCart__product-qtd-btn-plus",
                        productQuantityWrapper: t.classes.productQuantityWrapper || "miniCart__product-qtd-wrapper",
                        productRemoveButton: t.classes.productRemoveButton || "miniCart__product-remove-btn",
                    },
                };
                this.main(e), this.btnShelf(e), this.comprarBotao(e), this.comprarBotaoCompreJunto(e);
            },
            main: function (t) {
                var e = this;
                vtexjs.checkout.getOrderForm().done(function (a) {
                    var i = t.classes.productList,
                        n = a.items;
                    o.miniCartVazio(a), $(".".concat(i)).empty(), e.itemsQuantity(n.length, t), e.buildProduct(n, t, e.attachEvents.bind(c));
                });
            },
            validateHasProduct: function (t) {
                return t.length > 0;
            },
            buildProduct: function (t, e, a) {
                var i = e.classes,
                    o = i.productList,
                    n = (i.miniCartTotalPrice, i.miniCartProduct),
                    r = i.productImageWrapper,
                    s = i.productImage,
                    l = i.productInfos,
                    u = i.productName,
                    d = i.productPrice,
                    p = i.productQuantityWrapper,
                    m = i.productQuantity,
                    h = i.productQuantityBtn,
                    f = i.productQuantityPlus,
                    _ = i.productQuantityMinus,
                    v = i.productRemoveButton,
                    b = "";
                t.forEach(function (t, e) {
                    var a = t.id,
                        i = t.imageUrl,
                        o = t.skuName,
                        c = t.quantity,
                        g = t.price,
                        $ =
                            (t.listPrice,
                                "\n                  <li class="
                                    .concat(n, " data-price=")
                                    .concat(g, ' data-sku-id="')
                                    .concat(a, '">\n                      <figure class=')
                                    .concat(r, '>\n                          <img src="')
                                    .concat(i, '" alt="')
                                    .concat(o, '" class=')
                                    .concat(s, " />\n                      </figure>\n                      <div class=")
                                    .concat(l, ">\n                          <div class=")
                                    .concat(u, ">")
                                    .concat(o, "</div>\n                          <div class=")
                                    .concat(d, ">R$ ")
                                    .concat(ePlusUtils.Helpers.formatReal(g), "</div>\n                          <div class=")
                                    .concat(p, " data-index=")
                                    .concat(e, '>\n                              <div class="miniCart__product-qtd-container">\n                                <span class="')
                                    .concat(h, " ")
                                    .concat(_, '" >-</span>\n                                <span class=')
                                    .concat(m, ">")
                                    .concat(c, '</span>\n                                <span class="')
                                    .concat(h, " ")
                                    .concat(f, '">+</span>\n                              </div>\n                              <div class=')
                                    .concat(v, " data-index=")
                                    .concat(e, ">x</div>\n                          </div>\n                      </div>\n                      \n                  </li>\n              "));
                    b += $;
                }),
                    $(".".concat(o)).append(b),
                    a(e),
                    c.calculateTotal(e);
            },
            attachEvents: function (t) {
                var e = t.classes.productRemoveButton;
                this.removeProduct(e, t), this.updateProductQuantity(t);
            },
            removeProduct: function (t, e) {
                $(".".concat(t)).on("click", function () {
                    var t = this,
                        a = $(this).attr("data-index");
                    vtexjs.checkout
                        .getOrderForm()
                        .then(function (t) {
                            var e = [{
                                index: a,
                                quantity: 0
                            }];
                            return vtexjs.checkout.removeItems(e);
                        })
                        .done(function (a) {
                            var i = e.classes.miniCartProduct;
                            $(t).parents(".".concat(i)).remove(), c.updateProductIndex(e), c.calculateTotal(e), c.itemsQuantity(a.items.length, e), o.miniCartVazio(a);
                        });
                });
            },
            updateProductIndex: function (t) {
                var e = t.classes,
                    a = e.productList,
                    i = e.miniCartProduct,
                    o = e.productRemoveButton,
                    n = e.productQuantityWrapper;
                $(".".concat(a))
                    .children(".".concat(i))
                    .each(function (t) {
                        $(this).find(".".concat(o)).attr("data-index", t), $(this).find(".".concat(n)).attr("data-index", t);
                    });
            },
            updateProductQuantity: function (t) {
                var e = t.classes,
                    a = e.productQuantity,
                    i = e.productQuantityBtn,
                    o = e.productQuantityMinus;
                e.miniCartProduct,
                    $(".".concat(i)).on("click", function () {
                        var e = $(this).hasClass("".concat(o)),
                            i = $(this).siblings(".".concat(a)),
                            n = parseInt(i.text());
                        if (!e || 1 !== n) {
                            e ? n-- : n++;
                            var r = $(this).parent().parent().parent().parent().data("sku-id");
                            $.ajax({
                                type: "GET",
                                url: "/produto/sku/" + r,
                                dataType: "json",
                                async: !0,
                                success: function (t) {
                                    n > t[0].SkuSellersInformation[0].AvailableQuantity ? alert("VocÇ¦ atingiu a quantidade mÇ­xima em estoque.") : i.text(n);
                                },
                            });
                            var s = $(this).parent().parent().attr("data-index");
                            vtexjs.checkout
                                .getOrderForm()
                                .then(function (t) {
                                    var e = {
                                        index: s,
                                        quantity: n
                                    };
                                    return vtexjs.checkout.updateItems([e], null, !1);
                                })
                                .done(function (e) {
                                    c.calculateTotal(t);
                                });
                        }
                    });
            },
            calculateTotal: function (t) {
                var e = t.classes,
                    a = e.miniCartProduct,
                    i = e.productPrice,
                    o = e.miniCartTotalPrice,
                    n = e.productQuantity,
                    r = 0;
                $(".".concat(a)).each(function () {
                    var t = $(this).find(".".concat(i)).text(),
                        e = $(this).find(".".concat(n)).text(),
                        a = parseInt(ePlusUtils.Helpers.getMoney(t)) * parseInt(e);
                    r += a;
                }),
                    $(".".concat(o)).text("R$ " + ePlusUtils.Helpers.formatReal(r));
            },
            calculateAndInsertTotalProductPrice: function (t, e, a) {
                var i = a.classes,
                    o = i.miniCartProduct,
                    n = i.productPrice,
                    r = parseInt($(t).parents(".".concat(o)).attr("data-price")) * parseInt(e);
                $(t)
                    .parent()
                    .siblings(".".concat(n))
                    .text("R$ ".concat(ePlusUtils.Helpers.formatReal(r)));
            },
            itemsQuantity: function (t, e) {
                var a = e.classes.iconTotalItems;
                $(".".concat(a)).text(t);
            },
            btnShelf: function (t) {
                $(".product-quant__soma").click(function (t) {
                    t.preventDefault();
                    var e = $(this).parent().parent().parent().data("sku-id"),
                        a = parseInt($(this).siblings(".product-quant__quant").val());
                    a++,
                        $.ajax({
                            type: "GET",
                            url: "/produto/sku/" + e,
                            dataType: "json",
                            async: !0,
                            success: function (e) {
                                a > e[0].SkuSellersInformation[0].AvailableQuantity ? alert("VocÇ¦ atingiu a quantidade mÇ­xima em estoque.") : $(t.target).siblings(".product-quant__quant").val(a);
                            },
                        });
                }),
                    $(".product-quant__subtrai").click(function (t) {
                        t.preventDefault();
                        var e = parseInt($(this).siblings(".product-quant__quant").val());
                        1 != e && (e--, $(this).siblings(".product-quant__quant").val(e));
                    }),
                    $(".product-buy__button").on("click", function () {
                        var e = $(this).parent().parent().data("sku-id"),
                            a = {
                                id: e,
                                seller: "1"
                            },
                            i = $(this).siblings(".product-quant");
                        if (i.hasClass("d-none")) {
                            var o = $(this).parent().siblings(".product-description").attr("href");
                            window.location.href = o;
                        } else
                            (a.quantity = i.children(".product-quant__quant").val()),
                                $.ajax({
                                    type: "GET",
                                    url: "/produto/sku/" + e,
                                    dataType: "json",
                                    async: !0,
                                    success: function (t) {
                                        a.quantity > t[0].SkuSellersInformation[0].AvailableQuantity && alert("NÇo temos essa quantidade em estoque, a quantidade mÇ­xima foi adicionada ao seu carrinho.");
                                    },
                                }),
                                vtexjs.checkout.addToCart([a], null, 1).done(function (e) {
                                    c.main(t), c.itemsQuantity(e.items.length, t), $(".carrinho__icon-cart")[0].click(), $("html, body").animate({
                                        scrollTop: 0
                                    }, "slow");
                                });
                    });
            },
            comprarBotao: function (t) {
                $(".product-quant__subtrai-produto").click(function (t) {
                    t.preventDefault();
                    var e = parseInt($(this).siblings(".product-quant__quant-produto").val());
                    1 != e && (e--, $(this).siblings(".product-quant__quant-produto").val(e));
                }),
                    $(".product-quant__soma-produto").click(function (t) {
                        t.preventDefault();
                        var e = $(this).parent().parent().find(".buy-button.buy-button-ref").attr("href");
                        if ("javascript:alert('Por favor, selecione o modelo desejado.');" !== e) {
                            var a = e.split("=")[1].split("&"),
                                i = parseInt($(this).siblings(".product-quant__quant-produto").val());
                            $.ajax({
                                type: "GET",
                                url: "/produto/sku/" + a[0],
                                dataType: "json",
                                async: !0,
                                success: function (e) {
                                    console.log(e), i > e[0].SkuSellersInformation[0].AvailableQuantity ? alert("VocÇ¦ atingiu a quantidade mÇ­xima em estoque.") : (i++, $(t.target).siblings(".product-quant__quant-produto").val(i));
                                },
                            });
                        } else alert("Por favor, selecione o modelo desejado.");
                    }),
                    $(".produto-direita .buy-button").click(function (e) {
                        var a = $(this).attr("href");
                        if ("javascript:alert('Por favor, selecione o modelo desejado.');" !== a) {
                            e.preventDefault();
                            var i = $(this).siblings(".product-quant").find(".product-quant__quant-produto").val(),
                                o = (a = a.replace("qty=1", "qty=".concat(i))).split("=")[1].split("&");
                            console.log(o[0]),
                                $.ajax({
                                    type: "GET",
                                    url: "/produto/sku/" + o[0],
                                    dataType: "json",
                                    async: !0,
                                    success: function (t) {
                                        i > t[0].SkuSellersInformation[0].AvailableQuantity && alert("NÇo temos essa quantidade em estoque, a quantidade mÇ­xima foi adicionada ao seu carrinho.");
                                    },
                                }),
                                $.ajax({
                                    url: a,
                                    success: function () {
                                        c.main(t), $(".header-principal .carrinho__icon-cart").trigger("click"), ePlusUtils.UI.slideScroll("header");
                                    },
                                });
                        }
                    });
            },
            comprarBotaoCompreJunto: function (t) {
                var e = document.querySelector(".compre-junto__btn");
                e &&
                    e.addEventListener("click", function (e) {
                        if (e.target.classList.contains("enabled")) {
                            e.preventDefault();
                            var a = document.querySelector(".compre-junto__produto-principal .sku__label"),
                                i = document.querySelector(".slick-active .sku__label");
                            if (a && i) {
                                var n,
                                    r,
                                    s = [],
                                    l = document.querySelector(".compre-junto");
                                l.querySelectorAll(".compre-junto__produto-principal .sku__label").forEach(function (t) {
                                    t.getAttribute("data-id") && (n = t.getAttribute("data-id"));
                                }),
                                    l.querySelectorAll(".slick-active .sku__label").forEach(function (t) {
                                        t.getAttribute("data-id") && (r = t.getAttribute("data-id"));
                                    }),
                                    s.push({
                                        id: parseInt(n),
                                        quantity: 1,
                                        seller: "1"
                                    }),
                                    s.push({
                                        id: parseInt(r),
                                        quantity: 1,
                                        seller: "1"
                                    }),
                                    vtexjs.checkout.addToCart(s, null, 1).done(function (e) {
                                        c.main(t), $(".header-principal .carrinho__icon-cart").trigger("click"), ePlusUtils.UI.slideScroll(".carrinho"), o.miniCartVazio(e);
                                    });
                            } else if (a) {
                                var u,
                                    d = [],
                                    p = document.querySelector(".compre-junto"),
                                    m = p.querySelectorAll(".compre-junto__produto-principal .sku__label"),
                                    h = p.querySelector(".compre-junto__produto-compre-junto .slick-active .prateleira-data");
                                m.forEach(function (t) {
                                    t.getAttribute("data-id") && (u = t.getAttribute("data-id"));
                                }),
                                    d.push({
                                        id: parseInt(u),
                                        quantity: 1,
                                        seller: "1"
                                    }),
                                    d.push({
                                        id: parseInt(h.getAttribute("data-sku-id")),
                                        quantity: 1,
                                        seller: "1"
                                    }),
                                    vtexjs.checkout.addToCart(d, null, 1).done(function (e) {
                                        c.main(t), $(".header-principal .carrinho__icon-cart").trigger("click"), ePlusUtils.UI.slideScroll(".carrinho"), o.miniCartVazio(e);
                                    });
                            } else if (i) {
                                var f,
                                    _ = [],
                                    v = document.querySelector(".compre-junto"),
                                    b = v.querySelector(".prateleira-data");
                                v.querySelectorAll(".slick-active .sku__label").forEach(function (t) {
                                    t.getAttribute("data-id") && (f = t.getAttribute("data-id"));
                                }),
                                    _.push({
                                        id: parseInt(b.getAttribute("data-id-sku")),
                                        quantity: 1,
                                        seller: "1"
                                    }),
                                    _.push({
                                        id: parseInt(f),
                                        quantity: 1,
                                        seller: "1"
                                    }),
                                    vtexjs.checkout.addToCart(_, null, 1).done(function (e) {
                                        c.main(t), $(".header-principal .carrinho__icon-cart").trigger("click"), ePlusUtils.UI.slideScroll(".carrinho"), o.miniCartVazio(e);
                                    });
                            } else {
                                var g = [],
                                    k = document.querySelector(".compre-junto"),
                                    y = k.querySelector(".prateleira-data"),
                                    C = k.querySelector(".compre-junto__produto-compre-junto .slick-active .prateleira-data");
                                g.push({
                                    id: parseInt(y.getAttribute("data-id-sku")),
                                    quantity: 1,
                                    seller: "1"
                                }),
                                    g.push({
                                        id: parseInt(C.getAttribute("data-sku-id")),
                                        quantity: 1,
                                        seller: "1"
                                    }),
                                    vtexjs.checkout.addToCart(g, null, 1).done(function (e) {
                                        c.main(t), $(".header-principal .carrinho__icon-cart").trigger("click"), ePlusUtils.UI.slideScroll(".carrinho"), o.miniCartVazio(e);
                                    });
                            }
                        } else e.preventDefault(), alert("selecione uma opÇõÇo de sku dos produtos");
                    });
            },
        },
        u = {
            init: function () {
                this.imgProd(),
                    this.variacaoProd(),
                    this.calcFrete(),
                    this.montaSeloProduto(),
                    this.descricaoLerMais(),
                    this.slickThumbs(),
                    this.cloneInstrucoes(),
                    this.seloDesconto(),
                    this.tamanhoIndisponivel(),
                    this.corIndisponivel(),
                    this.escondeCompreJunto(),
                    this.slickQvvt(),
                    this.selecionaCombinacaoSkus(),
                    this.indisponivel(),
                    this.precoComDescontoAvistaProduto(),
                    this.vaiParaDescricao();
            },
            vaiParaDescricao: function () {
                $(".ler-mais").click(function (t) {
                    t.preventDefault(), ePlusUtils.UI.slideScroll(".detalhes-prod");
                });
            },
            precoComDescontoAvistaProduto: function () {
                var t = document.querySelector(".produto-direita__valor-promocao").children;
                console.log(t), 0 === t.length && ($(".produto-direita__valor-promocao").hide(), $(".produto-direita__promocao").hide());
                var e = $(".skuBestPrice").text().split(" ")[1].split(".").join("").split(",").join(".");
                e = parseFloat(e);
                var a = $(".produto-direita__promocao .flag").text().split(" ")[0].split(""),
                    i = (e * parseFloat(a[0])) / 100;
                (i = e - i), $(".produto-direita__valor-promocao").text("R$ " + i.toFixed(2).split(".").join(","));
            },
            indisponivel: function () {
                $(".notifyme.sku-notifyme:visible").length > 0 == 1 &&
                    ($(".product-quant").hide(), $(".produto-direita__container-mobile").hide(), $(".produto-direita__calc-frete").hide(), $(".btn-ok.sku-notifyme-button-ok.notifyme-button-ok").val("Enviar"));
            },
            selecionaCombinacaoSkus: function () {
                var t = window.document.querySelector(".thumbs").children;
                $(document).on("click", ".produto-direita__variantes-sku span.group_0 label", function () {
                    $(".produto-direita__variantes-sku span.group_0 label").removeClass("seletor-verde"),
                        $(".produto-direita__variantes-sku span.group_1 label").removeClass("seletor-verde"),
                        $(".produto-direita__variantes-sku span.group_1 label").removeClass("indisponivel-icon"),
                        $(this).addClass("seletor-verde"),
                        setTimeout(u.corIndisponivel, 1e3),
                        t.length >= 4 && $(".thumbs").slick("unslick"),
                        setTimeout(u.slickThumbs, 10),
                        setTimeout(u.precoComDescontoAvistaProduto, 10);
                }),
                    $(document).on("click", ".produto-direita__variantes-sku span.group_1 label", function () {
                        $(".produto-direita__variantes-sku span.group_1 label").removeClass("seletor-verde"),
                            $(this).addClass("seletor-verde"),
                            t.length >= 4 && $(".thumbs").slick("unslick"),
                            setTimeout(u.slickThumbs, 10),
                            setTimeout(u.precoComDescontoAvistaProduto, 10);
                    });
            },
            corIndisponivel: function () {
                var t = $(".produto-direita__variantes-sku span.group_1 label");
                $(".produto-direita__variantes-sku span.group_1 label").removeClass("indisponivel-icon"),
                    $.each(t, function (t, e) {
                        !0 === $(e).hasClass("combination_unavaliable") && $(this).addClass("indisponivel-icon");
                    });
            },
            tamanhoIndisponivel: function () {
                var t = $(".produto-direita__variantes-sku span.group_0 label");
                $.each(t, function (t, e) {
                    !0 === $(e).hasClass("item_unavaliable") && ($(this).addClass("indisponivel-icon"), $(this).attr("disabled", !0));
                });
            },
            escondeCompreJunto: function () {
                0 == $(".compre-junto__produto-compre-junto").children().length && $(".compre-junto").hide();
            },
            seloDesconto: function () {
                var t = $(".skuListPrice");
                if (t.length > 0) {
                    var e = t.text().split(" ")[1].split(".").join("").split(","),
                        a = $(".skuBestPrice").text().split(" ")[1].split(".").join("").split(","),
                        i = parseFloat(100 * (a[0] / e[0] - 1));
                    (i = i.toFixed(0)), $(".produto-esquerda__selo-suspenso").append(i + "%"), $(".produto-esquerda__selo-suspenso").addClass("visible-block");
                }
            },
            cloneInstrucoes: function () {
                var t = $("table.group.instrucoes").clone();
                $(".detalhes-prod__descriptions").append(t);
            },
            slickThumbs: function () {
                $(".thumbs").children().length >= 4 && innerWidth >= 1366 ?
                    $(".thumbs").slick({
                        lazyLoad: "ondemand",
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        dots: !1,
                        arrows: !0,
                        vertical: !0
                    }) :
                    innerWidth < 1366 && innerWidth >= 768 ?
                        $(".thumbs").slick({
                            lazyLoad: "ondemand",
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            dots: !1,
                            arrows: !0
                        }) :
                        innerWidth < 768 && $(".thumbs").slick({
                            lazyLoad: "ondemand",
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: !1,
                            arrows: !0
                        });
            },
            slickQvvt: function () {
                window.innerWidth > 1024 ?
                    $(".prateleira-qvvt__prateleira .cinquentamais-prateleira > ul").slick({
                        lazyLoad: "ondemand",
                        slidesToShow: 4,
                        slidesToScroll: 4,
                        arrows: !0,
                        dots: !1
                    }) :
                    window.innerWidth <= 1024 && window.innerWidth > 769 ?
                        $(".prateleira-qvvt__prateleira .cinquentamais-prateleira > ul").slick({
                            lazyLoad: "ondemand",
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            arrows: !1,
                            dots: !0
                        }) :
                        window.innerWidth > 500 && window.innerWidth <= 768 ?
                            $(".prateleira-qvvt__prateleira .cinquentamais-prateleira > ul").slick({
                                lazyLoad: "ondemand",
                                slidesToShow: 2,
                                slidesToScroll: 2,
                                arrows: !1,
                                dots: !0
                            }) :
                            window.innerWidth <= 500 && $(".prateleira-qvvt__prateleira .cinquentamais-prateleira > ul").slick({
                                lazyLoad: "ondemand",
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                arrows: !1,
                                dots: !0
                            });
            },
            descricaoLerMais: function () {
                $(".produto-direita__descricao").children().length > 0 &&
                    ($(".produto-direita__descricao").addClass("ler-mais"),
                        $(".ler-mais").on("click", function () {
                            $(".produto-direita__descricao").toggleClass("ler-menos");
                        }));
            },
            montaSeloProduto: function () {
                var t = $(".value-field.Cor-do-Selo").text(),
                    e = $(".value-field.Selos").text(),
                    a = $(".produto-direita__selo").text(e);
                "vermelho" === t ? a.addClass("bg-vermelho") : "azul" === t || "Cor do selo" === t ? a.addClass("bg-azul") : a.addClass("bg-none");
            },
            imgProd: function () {
                $("#produtoDiv-esquerda .img-produto .thumbs").slick({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    vertical: !0,
                    infinite: !1,
                    responsive: [{
                        breakpoint: 500,
                        settings: {
                            vertical: !1
                        }
                    },
                    {
                        breakpoint: 400,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            vertical: !1
                        }
                    },
                    ],
                }),
                    $(window).load(function () {
                        $("body").hasClass("produto") &&
                            ((window.LoadZoom = function (t) {
                                if (screen > 1640) var e = {
                                    zoomWidth: 640,
                                    zoomHeight: 640,
                                    preloadText: ""
                                };
                                else e = {
                                    zoomWidth: 590,
                                    zoomHeight: 590,
                                    preloadText: ""
                                };
                                screen > 769 && $(".image-zoom").jqzoom(e);
                            }),
                                LoadZoom(0),
                                ImageControl($("ul.thumbs a:first"), 0));
                    });
            },
            variacaoProd: function () {
                $(".sku-selector-container .specification").click(function () {
                    $(this).next().slideToggle(), $(this).toggleClass("active");
                }),
                    $("#produtoDiv-direita .variantes-sku .topic .select.skuList label").click(function () {
                        var t = $(this).text();
                        $("#produtoDiv-direita .variantes-sku .topic .specification").text(t),
                            $(this).parent().parent().slideToggle(),
                            $("#produtoDiv-esquerda .img-produto .thumbs").slick("unslick"),
                            setTimeout(function () {
                                $("#produtoDiv-esquerda .img-produto .thumbs").slick({
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    vertical: !0,
                                    infinite: !1,
                                    responsive: [{
                                        breakpoint: 500,
                                        settings: {
                                            vertical: !1
                                        }
                                    },
                                    {
                                        breakpoint: 400,
                                        settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 2,
                                            vertical: !1
                                        }
                                    },
                                    ],
                                });
                            }, 10);
                    });
            },
            calcFrete: function () {
                $("body").on("keypress", "#produtoDiv-direita .calc-frete #txtCep", function (t) {
                    13 == t.which && $("#produtoDiv-direita .calc-frete #btnFreteSimulacao").trigger("click");
                });
            },
        };
    var d = {
        init: function () {
            this.botaoComprarPrateleira();
        },
        botaoComprarPrateleira: function () {
            $(".cinquentamais-prateleira .prateleira-data").each(function (t, e) {
                $(e).find(".insert-sku-checklist").children().length > 1 ?
                    ($(e).find(".product-quant").addClass("d-none"), $(e).find(".product-description__apartir").show()) :
                    $(e).find(".por").length || $(e).find(".product-price__bestPrice").before("<span class='por teste'>Por: </span>");
            });
        },
    };
    const p = {
        init: function () {
            this.calculaFrete();
        },
        calculaFrete: function () {
            $("#formFrete").submit(function (t) {
                t.preventDefault();
                var e = $(".buy-button.buy-button-ref").attr("href");
                if ("javascript:alert('Por favor, selecione o modelo desejado.');" == e) alert("Por favor, selecione o modelo desejado.");
                else {
                    var a = e.split("&")[0].split("=")[1],
                        i = $(this).find(".cep").val().replace("-", ""),
                        n = [{
                            id: a,
                            quantity: 1,
                            seller: "1"
                        }];
                    new RegExp(/^[0-9]{8}$/).test(i) ?
                        ($(".produto-direita__erro-cep").fadeOut(),
                            vtexjs.checkout.simulateShipping(n, i, "BRA").done(function (t) {
                                t.logisticsInfo.length >= 0 &&
                                    ($(".produto-direita__table-frete").fadeIn(),
                                        $(t.logisticsInfo[0].slas).each(function (e) {
                                            var a = t.logisticsInfo[0].slas[e].name,
                                                i = t.logisticsInfo[0].slas[e].shippingEstimate.replace("bd", " dia(s)"),
                                                n = o.formatReal(t.logisticsInfo[0].slas[e].price);
                                            $(".produto-direita__table-frete tbody").append(
                                                '<tr class="produto-direita__tr-frete"><td class="produto-direita__td-frete">' +
                                                a +
                                                '</td><td class="produto-direita__td-frete">' +
                                                i +
                                                '</td><td class="produto-direita__td-frete"> R$' +
                                                n +
                                                "</td></tr>"
                                            );
                                        }));
                            })) :
                        ($(".produto-direita__erro-cep").fadeIn(), $(".produto-direita__table-frete").fadeOut());
                }
            });
        },
    };
    o.init(),
        window.outerWidth <= 1024 ?
            c.init({
                classes: {
                    iconTotalItems: "carrinho__qtd-cart",
                    miniCartProduct: "miniCart-mobile__product",
                    miniCartTotalPrice: "miniCart-mobile__total-price",
                    productImage: "miniCart-mobile__image",
                    productImageWrapper: "miniCart-mobile__product-img",
                    productInfos: "miniCart-mobile__product-infos",
                    productList: "miniCart-mobile__product-list",
                    productListPrice: "miniCart-mobile__product-list-price",
                    productName: "miniCart-mobile__product-name",
                    productPrice: "miniCart-mobile__product-price",
                    productQuantity: "miniCart-mobile__product-qtd",
                    productQuantityBtn: "miniCart-mobile__product-qtd-btn",
                    productQuantityMinus: "miniCart-mobile__product-qtd-btn-minus",
                    productQuantityPlus: "miniCart-mobile__product-qtd-btn-plus",
                    productQuantityWrapper: "miniCart-mobile__product-qtd-wrapper",
                    productRemoveButton: "miniCart-mobile__product-remove-btn",
                },
            }) :
            c.init({
                classes: {
                    iconTotalItems: "carrinho__qtd-cart"
                }
            }),
        l.init({
            tree: 3,
            menuClass: ".menu-mobile__nav",
            child: "menu-mobile__item"
        }),
        l.init({
            tree: 3,
            menuClass: ".menu-desktop-aberto",
            child: "menu-desktop__item"
        }),
        l.init({
            tree: 3,
            menuClass: ".menu-desktop__nav",
            child: "menu-desktop__item"
        }),
        t(".voltar-topo__botao"),
        d.init(),
        $("body").hasClass("cinquentamais-categoria") &&
        (i.init(),
            r({
                shelfClass: "cinquentamais-prateleira",
                buttonLoadMoreSelector: ".departamento-botao-mais-itens",
                callback: function () {
                    setTimeout(function () {
                        o.removeHelperComplement(), o.seloDescontoPrateleira(), o.ajustePrecoPrateleira(), d.botaoComprarPrateleira(), o.precoComDescontoAvista();
                    }, 1e3);
                },
            })),
        $("body").hasClass("cinquentamais-home") && n.init(),
        $("body").hasClass("inst") && s.init(),
        $("body").hasClass("produto") &&
        (u.init(),
            p.init(),
            a.init({
                classPrincipalProduct: ".compre-junto__produto-principal",
                classShelfTemplateParent: ".compre-junto__produto-compre-junto",
                classShelfTemplate: ".cinquentamais-prateleira",
                classProductImage: ".produto-esquerda",
                classProductInformation: ".produto-direita",
                imageWidth: "292",
                imageHeight: "292",
            }));


})();