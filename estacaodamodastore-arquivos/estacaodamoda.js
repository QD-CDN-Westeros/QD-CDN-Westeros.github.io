webpackJsonp(
    [0],
    [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var n = function (e) {
                    var t = e,
                        i = { a: /[\xE1-\xE6]/gi, e: /[\xE8-\xEB|\x26]/gi, i: /[\xEC-\xEF]/gi, o: /[\xF2-\xF6]/gi, u: /[\xF9-\xFC]/gi, c: /\xE7/gi, n: /\xF1/gi, "-": /\s/g, y: /\xFD/gi };
                    for (var n in i) {
                        var o = i[n];
                        t = t.replace(o, n);
                    }
                    return t;
                },
                o = function e(t, i) {
                    var n = t.text(),
                        o = n.split("/")[2].toString(),
                        s = n.split("/")[1].toString(),
                        a = n.split("/")[0].toString(),
                        r = new Date(),
                        l = new Date(o, s - 1, a, 0, 0, 0),
                        c = parseInt((l - r) / 1e3),
                        d = parseInt(c / 60),
                        u = parseInt(d / 60),
                        m = parseInt(u / 24);
                    (c -= 60 * d),
                        (d -= 60 * u),
                        (u -= 24 * m),
                        u < 10 && (u = "0" + u),
                        d < 10 && (d = "0" + d),
                        c < 10 && (c = "0" + c),
                        i.find(".days").html(m),
                        i.find(".hours").html(u),
                        i.find(".minutes").html(d),
                        i.find(".seconds").html(c),
                        m + u + d + c > 0
                            ? setTimeout(function () {
                                  e(t, i);
                              }, 1e3)
                            : i.hide();
                },
                s = function (e, t) {
                    if (e.length > t) {
                        t--;
                        for (var i = e.substr(t - 1, 1); " " != i && t > 0; ) t--, (i = e.substr(t - 1, 1));
                        (i = e.substr(t - 2, 1)), (e = "," == i || ";" == i || ":" == i ? e.substr(0, t - 2) + "..." : "." == i || "?" == i || "!" == i ? e.substr(0, t - 1) : e.substr(0, t - 1) + "...");
                    }
                    return e;
                },
                a = function (e) {
                    var t = e;
                    return 0 == t.indexOf("R$") && (t = t.replace("R$", "").trim()), t.indexOf(",") > 0 && (t = t.replace(",", "")), t.indexOf(".") > 0 && (t = t.replace(".", "")), parseInt(t);
                },
                r = function (e) {
                    var t = e + "";
                    return (t = t.replace(/([0-9]{2})$/g, ",$1")), t.length > 6 && (t = t.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")), "R$ " + t;
                },
                l = function (e) {
                    var t = e.replace(/[^0-9]/g, "");
                    return parseInt(t);
                },
                c = function (e, t) {
                    return !window.XDomainRequest ? new XMLHttpRequest() : new window.XDomainRequest();
                };
            (t.RemoveAccents = n), (t.Countdown = o), (t.truncateString = s), (t.formatValue = a), (t.justNumbers = l), (t.createCrossDomainRequest = c), (t.formatCurrency = r);
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Shelf = void 0), i(140), i(141);
            var n = i(142),
                o = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(n),
                s = function () {
                    $(".prateleira .discount-percent").each(function () {
                        if (!$(this).hasClass("active")) {
                            var e = $(this).html();
                            (e = parseInt(e.split("%")[0])),
                                $(this)
                                    .html(e + "<br/>%")
                                    .addClass("active");
                        }
                    });
                };
            t.Shelf = function () {
                (0, o.default)(), s();
            };
        },
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, i) {
            e.exports = i(113);
        },
        function (e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : { default: e };
            }
            i(114), i(115), i(116), i(117);
            var o = i(118),
                s = i(130),
                a = n(s),
                r = i(134),
                l = i(70),
                c = i(144),
                d = i(146),
                u = n(d),
                m = i(148),
                f = i(150),
                h = n(f),
                p = i(152),
                v = i(154);
            i(156);
            var g = i(157),
                b = i(160),
                w = i(162),
                _ = n(w),
                y = i(164),
                C = n(y),
                k = i(166),
                x = n(k),
                T = i(186),
                E = n(T);
            i(194), i(196), i(200), i(202);
            var S = i(46),
                P = n(S);
            P.default.register("locale", "pt-br", { delimiters: { thousands: ".", decimal: "," }, currency: { symbol: "R$ " } }),
                P.default.locale("pt-br"),
                document.addEventListener("DOMContentLoaded", function () {
                    (0, o.Header)();
                }),
                $(document).ready(function () {
                    (0, _.default)(), $("body").hasClass("wishlist") && (0, E.default)(), $("body").hasClass("produto") && (0, m.Product)(), $(".prateleira").length && (0, l.Shelf)();
                }),
                $(window).load(function () {
                    (0, x.default)(),
                        (0, a.default)(),
                        (0, C.default)(),
                        $("body").hasClass("home") && ((0, r.Home)(), (0, v.ShadowBox)()),
                        $("body").hasClass("institutionais") && (0, g.Institucional)(),
                        $("body").hasClass("wholesale") && (0, p.Wholesale)(),
                        $("body").hasClass("look") && (0, h.default)(),
                        $(".section-newsletter").length && (0, b.Newsletter)(),
                        ($("body").hasClass("departamento") || $("body").hasClass("categoria") || $("body").hasClass("resultado-busca")) && (0, c.Department)(),
                        $("body").hasClass("login") &&
                            $(document).on("click", "#vtexIdUI-auth-selector > .modal-header .close", function () {
                                window.history.back();
                            });
                }),
                $(document).ajaxStop(function () {
                    (0, u.default)();
                });
        },
        function (e, t) {},
        function (e, t) {},
        function (e, t) {},
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Header = void 0), i(119), i(120);
            var o = i(121),
                s = i(124),
                a = n(s);
            i(125);
            var r = i(126),
                l = n(r),
                c = i(128),
                d = n(c),
                u = function () {
                    var e = document.querySelector("header"),
                        t = e.offsetHeight + 10;
                    document.querySelector("body").setAttribute("style", "padding-top: " + t + "px"), new a.default(e, { offset: 200, tolerance: 2, classes: { initial: "animated", pinned: "slideDown", unpinned: "slideUp" } }).init();
                };
            t.Header = function () {
                (0, d.default)(), (0, l.default)(), u(), (window.onresize = u), window.requestAnimationFrame(u), (0, o.Menu)();
            };
        },
        function (e, t) {},
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Menu = void 0), i(122), i(123);
            var n = i(12),
                o = function () {
                    $("button.hamburger").on("click", function (e) {
                        e.preventDefault(), $("body").toggleClass("menu-active"), $(this).toggleClass("is-active");
                    }),
                        $("button.close-menu").on("click", function (e) {
                            e.preventDefault(), $("body").toggleClass("menu-active"), $("button.hamburger").toggleClass("is-active");
                        }),
                        $(".main-menu h3").each(function () {
                            $(this).next("ul").is(":empty") || $(this).find("span").show();
                        }),
                        $(".main-menu h3 span").on("click", function (e) {
                            e.preventDefault(), $("body").hasClass("menu-active") && ($(this).closest("h3").toggleClass("is-open"), $(this).closest("h3").next("ul").toggleClass("active"));
                        });
                };
            t.Menu = function () {
                var e = $("#main-menu");
                e.find(".menu-departamento").prependTo(e.find(".wrap")),
                    e.find(".menu-departamento h3 + ul li").each(function () {
                        var t = (0, n.RemoveAccents)($(this).find("a").addClass("menu-item-texto").text());
                        e.find(".menu-departamento").append('<h3 class="' + t.toLowerCase() + '"><span></span>' + $(this).html() + '</h3><ul class="' + t.toLowerCase() + '"></ul>');
                    }),
                    e.find(".estacao-da-moda, .lista-completa").remove(),
                    e
                        .find(".menu-departamento")
                        .menuClickQI({
                            alignWithParent: !0,
                            visibleBrands: !1,
                            itemsPerColumn: 7,
                            callback: function () {
                                $(this).find("h3 a").prepend("<span>");
                            },
                        })
                        .show(),
                    o();
            };
        },
        function (e, t) {},
        function (e, t) {},
        function (e, t, i) {
            var n, o, s;
            /*!
             * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it
             * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
             * License: MIT
             */
            !(function (i, a) {
                "use strict";
                (o = []), (n = a), void 0 !== (s = "function" == typeof n ? n.apply(t, o) : n) && (e.exports = s);
            })(0, function () {
                "use strict";
                function e(e) {
                    (this.callback = e), (this.ticking = !1);
                }
                function t(e) {
                    return e && "undefined" != typeof window && (e === window || e.nodeType);
                }
                function i(e) {
                    if (arguments.length <= 0) throw new Error("Missing arguments in extend function");
                    var n,
                        o,
                        s = e || {};
                    for (o = 1; o < arguments.length; o++) {
                        var a = arguments[o] || {};
                        for (n in a) "object" != typeof s[n] || t(s[n]) ? (s[n] = s[n] || a[n]) : (s[n] = i(s[n], a[n]));
                    }
                    return s;
                }
                function n(e) {
                    return e === Object(e) ? e : { down: e, up: e };
                }
                function o(e, t) {
                    (t = i(t, o.options)),
                        (this.lastKnownScrollY = 0),
                        (this.elem = e),
                        (this.tolerance = n(t.tolerance)),
                        (this.classes = t.classes),
                        (this.offset = t.offset),
                        (this.scroller = t.scroller),
                        (this.initialised = !1),
                        (this.onPin = t.onPin),
                        (this.onUnpin = t.onUnpin),
                        (this.onTop = t.onTop),
                        (this.onNotTop = t.onNotTop),
                        (this.onBottom = t.onBottom),
                        (this.onNotBottom = t.onNotBottom);
                }
                var s = { bind: !!function () {}.bind, classList: "classList" in document.documentElement, rAF: !!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame) };
                return (
                    (window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame),
                    (e.prototype = {
                        constructor: e,
                        update: function () {
                            this.callback && this.callback(), (this.ticking = !1);
                        },
                        requestTick: function () {
                            this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), (this.ticking = !0));
                        },
                        handleEvent: function () {
                            this.requestTick();
                        },
                    }),
                    (o.prototype = {
                        constructor: o,
                        init: function () {
                            if (o.cutsTheMustard) return (this.debouncer = new e(this.update.bind(this))), this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
                        },
                        destroy: function () {
                            var e = this.classes;
                            this.initialised = !1;
                            for (var t in e) e.hasOwnProperty(t) && this.elem.classList.remove(e[t]);
                            this.scroller.removeEventListener("scroll", this.debouncer, !1);
                        },
                        attachEvent: function () {
                            this.initialised || ((this.lastKnownScrollY = this.getScrollY()), (this.initialised = !0), this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
                        },
                        unpin: function () {
                            var e = this.elem.classList,
                                t = this.classes;
                            (!e.contains(t.pinned) && e.contains(t.unpinned)) || (e.add(t.unpinned), e.remove(t.pinned), this.onUnpin && this.onUnpin.call(this));
                        },
                        pin: function () {
                            var e = this.elem.classList,
                                t = this.classes;
                            e.contains(t.unpinned) && (e.remove(t.unpinned), e.add(t.pinned), this.onPin && this.onPin.call(this));
                        },
                        top: function () {
                            var e = this.elem.classList,
                                t = this.classes;
                            e.contains(t.top) || (e.add(t.top), e.remove(t.notTop), this.onTop && this.onTop.call(this));
                        },
                        notTop: function () {
                            var e = this.elem.classList,
                                t = this.classes;
                            e.contains(t.notTop) || (e.add(t.notTop), e.remove(t.top), this.onNotTop && this.onNotTop.call(this));
                        },
                        bottom: function () {
                            var e = this.elem.classList,
                                t = this.classes;
                            e.contains(t.bottom) || (e.add(t.bottom), e.remove(t.notBottom), this.onBottom && this.onBottom.call(this));
                        },
                        notBottom: function () {
                            var e = this.elem.classList,
                                t = this.classes;
                            e.contains(t.notBottom) || (e.add(t.notBottom), e.remove(t.bottom), this.onNotBottom && this.onNotBottom.call(this));
                        },
                        getScrollY: function () {
                            return void 0 !== this.scroller.pageYOffset
                                ? this.scroller.pageYOffset
                                : void 0 !== this.scroller.scrollTop
                                ? this.scroller.scrollTop
                                : (document.documentElement || document.body.parentNode || document.body).scrollTop;
                        },
                        getViewportHeight: function () {
                            return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                        },
                        getElementPhysicalHeight: function (e) {
                            return Math.max(e.offsetHeight, e.clientHeight);
                        },
                        getScrollerPhysicalHeight: function () {
                            return this.scroller === window || this.scroller === document.body ? this.getViewportHeight() : this.getElementPhysicalHeight(this.scroller);
                        },
                        getDocumentHeight: function () {
                            var e = document.body,
                                t = document.documentElement;
                            return Math.max(e.scrollHeight, t.scrollHeight, e.offsetHeight, t.offsetHeight, e.clientHeight, t.clientHeight);
                        },
                        getElementHeight: function (e) {
                            return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
                        },
                        getScrollerHeight: function () {
                            return this.scroller === window || this.scroller === document.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
                        },
                        isOutOfBounds: function (e) {
                            var t = e < 0,
                                i = e + this.getScrollerPhysicalHeight() > this.getScrollerHeight();
                            return t || i;
                        },
                        toleranceExceeded: function (e, t) {
                            return Math.abs(e - this.lastKnownScrollY) >= this.tolerance[t];
                        },
                        shouldUnpin: function (e, t) {
                            var i = e > this.lastKnownScrollY,
                                n = e >= this.offset;
                            return i && n && t;
                        },
                        shouldPin: function (e, t) {
                            var i = e < this.lastKnownScrollY,
                                n = e <= this.offset;
                            return (i && t) || n;
                        },
                        update: function () {
                            var e = this.getScrollY(),
                                t = e > this.lastKnownScrollY ? "down" : "up",
                                i = this.toleranceExceeded(e, t);
                            this.isOutOfBounds(e) ||
                                (e <= this.offset ? this.top() : this.notTop(),
                                e + this.getViewportHeight() >= this.getScrollerHeight() ? this.bottom() : this.notBottom(),
                                this.shouldUnpin(e, i) ? this.unpin() : this.shouldPin(e, i) && this.pin(),
                                (this.lastKnownScrollY = e));
                        },
                    }),
                    (o.options = {
                        tolerance: { up: 0, down: 0 },
                        offset: 0,
                        scroller: window,
                        classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom", initial: "headroom" },
                    }),
                    (o.cutsTheMustard = void 0 !== s && s.rAF && s.bind && s.classList),
                    o
                );
            });
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), i(127);
            var n = i(12),
                o = function () {
                    var e = $(".minicart__toggle"),
                        t = new vtexjs.Checkout(),
                        i = function () {
                            var e,
                                t = 0,
                                i = 0,
                                a = new vtexjs.Checkout();
                            $(".minicart__panel .spinner").length < 1 && $(".minicart__items").before('<span class="spinner"></span>'),
                                a
                                    .getOrderForm()
                                    .then(function (n) {
                                        (i = n.value),
                                            (e = n.items),
                                            $.each(n.items, function (e, i) {
                                                t += i.quantity;
                                            });
                                    })
                                    .done(function () {
                                        1 == t
                                            ? ($(".minicart__panel .minicart__items").hasClass("slick-initialized") && $(".minicart__panel .minicart__items").removeClass("cart-empty").slick("unslick").empty(),
                                              $(".minicart__total-items").html(t + " produto"),
                                              $(".minicart__total").removeClass("is-hidden"))
                                            : ($(".minicart__total-items").html(t + " produtos"),
                                              0 == t &&
                                                  ($(".item__list").length < 1 &&
                                                      $(".minicart__items").html(
                                                          '<li class="item__list minicart__item"><h3><i class="ico ico-cart"></i>Sua sacola estÃƒÂ¡ vazia</h3><p>Continue navegando para adicionar produtos aqui</p><button class="close-minicart">Fechar e navegar</button></li>'
                                                      ),
                                                  $(".minicart__items").addClass("cart-empty").show())),
                                            t > 0
                                                ? ($(".minicart__panel .minicart__items").hasClass("slick-initialized") && $(".minicart__panel .minicart__items").removeClass("cart-empty").slick("unslick").empty(),
                                                  $(".minicart__panel .minicart__item").remove(),
                                                  $.each(e, function (e, t) {
                                                      var i = t.listPrice > t.sellingPrice ? '<p class="item__listprice">' + (0, n.formatCurrency)(t.listPrice) + "</p>" : "";
                                                      $(".minicart__items").append(
                                                          '<li class="item__list"><div class="place__img"><img class="item__image" src="' +
                                                              t.imageUrl.replace("-55-55", "-300-300") +
                                                              '" /></div><div class="place__info"><h4 class="item__name block-with-text">' +
                                                              t.name +
                                                              '</h4><div class="item__price">' +
                                                              i +
                                                              '<p class="item__bestprice">' +
                                                              (0, n.formatCurrency)(t.sellingPrice) +
                                                              '</p></div></div><div class="item__controller"><div class="controller__quantity"><span class="title">Quantidade</span><p class="btn-minus-plus"><button class="btn-minus">-</button><span class="input__quantity" data-index="' +
                                                              e +
                                                              '">' +
                                                              t.quantity +
                                                              '</span<button class="btn-plus">+</button></p></div><button class="item__remove" data-index="' +
                                                              e +
                                                              '" data-quantity="' +
                                                              t.quantity +
                                                              '">remover</button></li>'
                                                      );
                                                  }),
                                                  $(".minicart__total").removeClass("is-hidden"),
                                                  setTimeout(function () {
                                                      $(".minicart__panel .spinner").remove();
                                                  }, 300))
                                                : ($(".minicart__total").addClass("is-hidden"),
                                                  setTimeout(function () {
                                                      $(".minicart__panel .spinner").remove();
                                                  }, 300)),
                                            i > 0 ? $(".minicart__subtotal-value").html((0, n.formatCurrency)(i)) : $(".minicart__subtotal-value").html("R$ 0,00"),
                                            $(".minicart__counter").html("<strong>" + t + "</strong>"),
                                            $(".minicart__backdrop").on("click", function () {
                                                $(".minicart__panel").removeClass("open"), $("body").removeClass("minicart-open"), $(this).remove();
                                            }),
                                            s(),
                                            $(document).on("click", ".minicart__panel .item__remove", function () {
                                                o($(this).data("index"), $(this).data("quantity"));
                                            });
                                    });
                        },
                        o = function (e, t) {
                            var n = new vtexjs.Checkout();
                            n.getOrderForm()
                                .then(function () {
                                    var i = [{ index: e, quantity: t }];
                                    return n.removeItems(i);
                                })
                                .done(function () {
                                    $(".minicart__panel .minicart__items").hasClass("slick-initialized") && $(".minicart__panel .minicart__items").slick("unslick").empty(), i();
                                })
                                .fail(function () {
                                    window.location.reload();
                                });
                        },
                        s = function () {
                            $(".minicart__panel .minicart__items").hasClass("slick-initialized") && $(".minicart__panel .minicart__items").slick("unslick"),
                                $(".minicart__panel .minicart__items").slick({
                                    infinite: !1,
                                    slidesToShow: 4,
                                    slidesToScroll: 1,
                                    responsive: [
                                        { breakpoint: 1201, settings: { slidesToShow: 3 } },
                                        { breakpoint: 981, settings: { slidesToShow: 2 } },
                                        { breakpoint: 767, settings: { slidesToShow: 1 } },
                                    ],
                                }),
                                setTimeout(function () {
                                    $(".minicart__panel .spinner").remove();
                                }, 300);
                        };
                    t.getOrderForm().done(function (e) {
                        var t = 0;
                        $.each(e.items, function (e, i) {
                            t += i.quantity;
                        }),
                            $(".minicart__counter").html("<strong>" + t + "</strong>");
                    }),
                        e.on("click", function () {
                            window.innerWidth > 480
                                ? ($(".minicart__backdrop").length || $("body").prepend('<div class="minicart__backdrop fade in"></div>'),
                                  $("body").hasClass("minicart-open")
                                      ? ($(".minicart__panel .minicart__items").slick("unslick"), $(".minicart__panel").removeClass("open"), $(".minicart__backdrop").remove(), $("body").removeClass("minicart-open"))
                                      : (i(), $(".minicart__panel").addClass("open"), $("body").addClass("minicart-open")))
                                : (window.location.href = "/checkout");
                        }),
                        $(document).on("click", ".minicart__keep-shopping, .close-minicart", function () {
                            $(".minicart__panel").removeClass("open"), $(".minicart__backdrop").remove(), $("body").removeClass("minicart-open");
                        });
                };
            t.default = o;
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), i(129);
            var n = function () {};
            t.default = n;
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), i(131), i(132);
            var n = function () {
                $(".footer .toggle-footer").on("click", function () {
                    $(this).toggleClass("active"), $(".footer .item-hide").toggle();
                });
            };
            t.default = n;
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            i(133);
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Home = void 0), i(135), i(136), i(137), i(138), i(139);
            var n = function () {
                $(".section-brands .container")
                    .slick({
                        slidesToShow: 6,
                        slidesToScroll: 1,
                        responsive: [
                            { breakpoint: 1201, settings: { slidesToShow: 5 } },
                            { breakpoint: 981, settings: { slidesToShow: 4 } },
                            { breakpoint: 768, settings: { slidesToShow: 3 } },
                            { breakpoint: 481, settings: { slidesToShow: 1 } },
                        ],
                    })
                    .show();
            };
            t.Home = function () {
                n();
            };
        },
        function (e, t) {},
        function (e, t) {},
        function (e, t) {},
        function (e, t) {},
        function (e, t) {},
        function (e, t) {},
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), i(143);
            var n = function () {
                var e = $(".carousel").length ? $(".carousel") : null;
                null !== e &&
                    (e.find(".helperComplement").remove(),
                    e
                        .find("ul")
                        .slick({
                            infinite: !1,
                            slidesToShow: 5,
                            slidesToScroll: 1,
                            responsive: [
                                { breakpoint: 1201, settings: { slidesToShow: 4 } },
                                { breakpoint: 767, settings: { slidesToShow: 3 } },
                                { breakpoint: 601, settings: { slidesToShow: 2 } },
                                { breakpoint: 480, settings: { slidesToShow: 1 } },
                            ],
                        })
                        .show());
            };
            t.default = n;
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Department = void 0), i(145);
            var n = i(41),
                o = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(n),
                s = i(70),
                a = i(12),
                r = function () {
                    $(".shelf__orderby a").each(function () {
                        var e = $(this).data("value"),
                            t = new o.default(window.location.href);
                        e == ("" != t.query() ? o.default.parseQuery(t.query()) : "").O && $(this).addClass("active");
                    }),
                        $(".item__orderby").on("click", function (e) {
                            e.preventDefault();
                            var t = $(this).data("value"),
                                i = new o.default(window.location.href),
                                n = i.pathname(),
                                s = "" != i.query() ? o.default.parseQuery(i.query()) : "";
                            "" != s ? ((s.O = t), (s = o.default.buildQuery(s)), (window.location.href = n + "?" + s)) : (window.location.href = n + "?O=" + t);
                        });
                },
                l = function () {
                    var e = $(".sidebar-filters"),
                        t = e.innerHeight(),
                        i = e.css("width"),
                        n = $(".main-shelf").offset().top;
                    e.find("ul.Cor").length &&
                        e.find("ul.Cor li a").each(function () {
                            $(this).addClass((0, a.RemoveAccents)($(this).text().toLowerCase()));
                        }),
                        e.find(".filtro-ativo").each(function () {
                            var e = $(this).closest("ul"),
                                t = e.prev("h5");
                            $('<div class="item-filtered">').append(t, e).appendTo(".sidebar-filters nav");
                        }),
                        $(window).scroll(function () {
                            var o = $(window).scrollTop() + t,
                                s = $(".footer").offset().top;
                            e.css("max-width", i),
                                $(window).scrollTop() > n ? e.addClass("pinned pinned__top") : e.removeClass("pinned pinned__top"),
                                o > s ? e.css({ position: "absolute", top: "initial", bottom: "0" }) : (e.css("bottom", ""), e.css("top", ""), e.css({ position: "", top: "", bottom: "" }));
                        }),
                        $(".open-sidebar__filter").on("click", function () {
                            $("body").addClass("filter-open");
                        }),
                        $(".close-sidebar__filter").on("click", function () {
                            $("body").removeClass("filter-open");
                        }),
                        $(".search-single-navigator ul li").each(function (e) {
                            $(this).html(
                                $(this)
                                    .html()
                                    .replace(/\([0-9]+\)/gi, "")
                            );
                        }),
                        $(".sidebar-filters h4, .sidebar-filters h5").on("click", function () {
                            $(this).toggleClass("active").next("ul").toggleClass("opened");
                        });
                },
                c = function () {
                    $(".prateleira[id*=ResultItems]").QD_infinityScroll({
                        elemLoading: '<span class="spinner"></span>',
                        returnToTop: "",
                        callback: function () {
                            (0, s.Shelf)();
                        },
                    });
                };
            t.Department = function () {
                c(), r(), l();
            };
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), i(147);
            var n = function () {
                var e = $("header").length > 0 ? $("header .busca").width() : "",
                    t = $(".ui-autocomplete");
                $(".pager .page-number").last().addClass("page-number-last"),
                    t.addClass("unstyled").css({ width: e }).perfectScrollbar(),
                    t.is(":visible") && $("header").addClass("result-search-opened"),
                    $("header .fulltext-search-box").on("blur", function () {
                        $("header").removeClass("result-search-opened");
                    }),
                    t.find(".ui-menu-item").each(function () {
                        $(this).find("img").length < 1
                            ? $(this).addClass("no-image")
                            : ($(this).prev("li").addClass("last"),
                              $(this)
                                  .find("img")
                                  .attr({ src: $(this).find("img").attr("src").replace("-25-25", "-65-65"), width: "65", height: "65" }));
                    });
            };
            t.default = n;
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Product = void 0), i(149);
            var n = function (e) {
                    var t = $(".col-image .thumbs");
                    e && t.slick("unslick"), t.slick({ infinite: !0, slidesToShow: 2, slidesToScroll: 1, responsive: [{ breakpoint: 981, settings: { slidesToShow: 1 } }] }).show();
                },
                o = function () {
                    var e = 0,
                        t = 0,
                        i = 0,
                        n = parseInt($("#div_content_rewardValue label").html());
                    $(".skuListPrice").length > 0 &&
                        ((e = l($(".skuListPrice").html())), (t = l($(".skuBestPrice").html())), e > t && ((i = parseInt(100 - (100 * t) / e)), $("#show").append('<p class="flag flag-discount">' + i + " %</p>"))),
                        n > 0 &&
                            $("#div_content_rewardValue")
                                .html('<i class="ico-fidelity"></i><span class="item-text">Este produto vale <strong>' + n + "</strong> pontos de fidelidade</span>")
                                .show(),
                        $("#divCompreJunto").length > 0 && $("#divCompreJunto h4").html("Compre junto para economizar").show(),
                        $("#caracteristicas .Guia-de-Medidas").length > 0 && $('<div class="section-size-guide"><h2>Guia de Tamanhos</h2><div class="inner-content"></div></div>').insertAfter(".section-specification"),
                        $("#caracteristicas td.Guia-de-Medidas table").clone().appendTo(".section-size-guide .inner-content"),
                        $(".section-description h2").on("click", function () {
                            $(this).toggleClass("active"), $(this).next(".productDescription").toggleClass("opened");
                        }),
                        $(".section-size-guide h2").on("click", function () {
                            $(this).toggleClass("active"), $(this).next(".inner-content").toggleClass("opened");
                        }),
                        $("#notifymeButtonOK").val("avise-me");
                },
                s = function () {
                    var e = $(".produto .item-price"),
                        t = $(".produto .skuBestPrice").html(),
                        i = 0,
                        n = 0;
                    (t = l(t)),
                        e.find(".flag").each(function () {
                            /boleto/gi.test($(this).attr("class")) &&
                                $(this).html().indexOf("%") > 0 &&
                                ((i = $(this).html().split("BancÃƒÂ¡rio")[1].split("%")[0]),
                                (n = parseInt((t * (100 - i)) / 100)),
                                $(".produto .skuBestPrice").length &&
                                    $(".produto .plugin-preco").append(
                                        '<div class="info-discount-billet"><strong>' + EMS.common.formatCurrency(n) + "</strong> Ãƒ  vista no boleto - Economia de " + EMS.common.formatCurrency(t - n) + " (" + i + "%)</div>"
                                    ));
                        });
                },
                a = function () {
                    var e = $(".sku-selector-container"),
                        t = e.find(".specification").text();
                    $(".sku-selector-container").on("change", function () {
                        $(".col-image .thumbs").remove("slick-initialized slick-slider"),
                            n(!0),
                            r(),
                            e.removeClass("not-selected").find(".specification").html(t),
                            c({
                                image: ".produto #image-main",
                                name: ".produto .info-name",
                                reference: null,
                                price: ".produto .col-info .plugin-preco .productPrice",
                                skuSelector: ".produto .col-info .sku-selector-container",
                                buttonBuy: $(".produto .col-info .portal-notify-me-ref .notifyme").is(":visible") ? null : ".produto .col-info .buy-button",
                                notifyme: ".produto .col-info .portal-notify-me-ref",
                            });
                    });
                },
                r = function () {
                    window.alert = function (e) {
                        var t = /desejado/gi,
                            i = $(".sku-selector-container");
                        t.test(e) && (i.addClass("not-selected"), i.find(".specification").html("Antes de comprar, selecione o tamanho!"));
                    };
                },
                l = function (e) {
                    var t = e;
                    return /R\$/gi.test(t) && (t = t.replace("R$", "").trim()), /,/gi.test(t) > 0 && (t = t.replace(",", "")), /\./gi.test(t) > 0 && (t = t.replace(".", "")), parseInt(t);
                },
                c = function (e) {
                    $("body").find(".section-floating-buy").remove();
                    var t = $('<div class="section-floating-buy"><div class="container"></div></div>'),
                        i = null != e.image || void 0 != e.image ? $('<div class="place-item place-img"></div>').html($(e.image).clone()) : "",
                        n = null != e.name || void 0 != e.name ? $('<div class="place-item place-name"></div>').html($(e.name).clone()) : "",
                        o = null != e.reference || void 0 != e.reference ? $('<div class="place-reference"></div>').html($(e.reference).clone()) : "",
                        s = (null != e.price || void 0 != e.price) && $(e.price).length > 0 ? $('<div class="place-item place-price"></div>').html($(e.price).clone().html().replace("<br>", " ")) : "",
                        a = null != e.skuSelector || void 0 != e.skuSelector ? $('<div class="place-item place-sku-selection"></div>').html($(e.skuSelector).clone()) : "",
                        r = null != e.buttonBuy || void 0 != e.buttonBuy ? $('<div class="place-item place-buy-button"></div>').html($(e.buttonBuy).clone()) : "",
                        l = null != e.notifyme || void 0 != e.notifyme ? $('<div class="place-item place-notifyme"></div>').html($(e.notifyme).clone()) : "",
                        c = null != e.limitToShow || void 0 != e.limitToShow ? $(e.limitToShow).offset().top : window.innerHeight / 2;
                    t.find(".container").append(i, n, o, s, a, r, l),
                        a.find(".sku-selector-container").is(":empty") && t.addClass("no-sku-selection"),
                        $("body").append(t),
                        $(window).scroll(function () {
                            if ($(window).scrollTop() > c) {
                                t.addClass("active"), $("body").css("padding-bottom", t.height() + 20);
                                var e = $(".section-floating-buy").height();
                                $(".produto .zopim").css("margin-bottom", e);
                            } else t.removeClass("active"), $(".produto .zopim").css("margin-bottom", 0);
                        }),
                        $(window).scroll(function () {
                            var e = function (e) {
                                var t = $(".section-floating-buy").height();
                                $(e).css("margin-bottom", t);
                            };
                            $(window).scrollTop() > c
                                ? (t.addClass("active"),
                                  $('body > div[id*="-14"]').length
                                      ? (e('body > div[id*="-14"] iframe:nth-child(2)'), e('body > div[id*="-14"] iframe:nth-child(4)'))
                                      : $('body > div[id*="-15"]').length
                                      ? (e('body > div[id*="-15"] iframe:nth-child(2)'), e('body > div[id*="-15"] iframe:nth-child(4)'))
                                      : $('body > div[id*="-16"]').length && (e('body > div[id*="-16"] iframe:nth-child(2)'), e('body > div[id*="-16"] iframe:nth-child(4)')))
                                : (t.removeClass("active"),
                                  $('body > div[id*="-14"]').length
                                      ? ($('body > div[id*="-14"] iframe:nth-child(2)').css("margin-bottom", 0), $('body > div[id*="-14"] iframe:nth-child(4)').css("margin-bottom", 0))
                                      : $('body > div[id*="-15"]').length
                                      ? ($('body > div[id*="-15"] iframe:nth-child(2)').css("margin-bottom", 0), $('body > div[id*="-15"] iframe:nth-child(4)').css("margin-bottom", 0))
                                      : $('body > div[id*="-16"]').length && ($('body > div[id*="-16"] iframe:nth-child(2)').css("margin-bottom", 0), $('body > div[id*="-16"] iframe:nth-child(4)').css("margin-bottom", 0)));
                        });
                };
            window.onload = function () {
                $(".section-description h2").trigger("click", function () {
                    $(this).toggleClass("active"), $(this).next(".productDescription").toggleClass("opened");
                });
            };
            t.Product = function () {
                n(),
                    o(),
                    a(),
                    r(),
                    s(),
                    c({
                        image: ".produto #image-main",
                        name: ".produto .info-name",
                        reference: null,
                        price: ".produto .col-info .plugin-preco .productPrice",
                        skuSelector: ".produto .col-info .sku-selector-container",
                        buttonBuy: $(".produto .col-info .portal-notify-me-ref .notifyme").is(":visible") ? null : ".produto .col-info .buy-button",
                        notifyme: ".produto .col-info .portal-notify-me-ref",
                    });
            };
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            i(151);
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Wholesale = void 0), i(153);
            var n = i(12),
                o = function (e) {
                    $("#formRegister").validate({
                        errorClass: "input-error",
                        validClass: "input-success",
                        errorElement: "em",
                        rules: { name: { required: !0 }, lastname: { required: !0 }, email: { required: !0, email: !0 }, telephone: { required: !1 }, cellphone: { required: !0 }, city: { required: !0 }, state: { required: !0 } },
                        messages: {
                            name: { required: "Nos informe seu nome" },
                            lastname: { required: "Nos informe seu sobrenome" },
                            email: { required: "Nos informe seu endereÃƒÂ§o de email!", email: "Insira um endereÃƒÂ§o vÃƒÂ¡lido!" },
                            cellphone: { required: "Nos informe o nÃƒÂºmero de seu celular" },
                            city: { required: "Nos informe sua cidade" },
                            state: { required: "Nos informe seu estado" },
                        },
                        highlight: function (e, t, i) {
                            $(e).closest(".content-input").addClass(t).removeClass(i);
                        },
                        unhighlight: function (e, t, i) {
                            $(e).closest(".content-input").removeClass(t).addClass(i);
                        },
                        errorPlacement: function (e, t) {
                            t.is(":radio") || t.is(":checkbox") ? t.closest(".option-group").append(e) : e.appendTo(t.parent());
                        },
                        submitHandler: function (t) {
                            var i = $("#registerEmail").val();
                            s(i, e);
                        },
                    });
                },
                s = function (e, t) {
                    var i = (0, n.createCrossDomainRequest)(),
                        o = function (e) {
                            if (4 == e.readyState)
                                if (200 == e.status || 204 == e.status) {
                                    var n = JSON.parse(i.responseText);
                                    if ("" == n) {
                                        var o = {
                                            name: $("#registerName").val(),
                                            lastName: $("#registerLastName").val(),
                                            email: $("#registerEmail").val(),
                                            phone: $("#registerTelephone").val(),
                                            cellPhone: $("#registerCellphone").val(),
                                            city: $("#registerCity").val(),
                                            state: $("#registerState").val(),
                                        };
                                        a(o, t);
                                    } else {
                                        var s = { title: "<h3>Temos um problema! =(</h3>", body: "<p>Tente novamente ou insira um e-mail diferente.</p>", button: "<button>voltar</button>" };
                                        $("#wholesaleForm .l-default").hide(),
                                            $("#wholesaleForm").append('<div class="content l-error">' + s.title + s.body + s.button + "</div>"),
                                            $("#wholesaleForm .l-error button").on("click", function () {
                                                $("#wholesaleForm .l-default").show(), $(this).closest(".l-error").remove();
                                            });
                                    }
                                } else alert("Invocation Errors Occured");
                        };
                    i.open("GET", "/api/dataentities/WS/search/?email=" + e + "&_fields=name", !0),
                        i.setRequestHeader("Accept", "application/json"),
                        i.setRequestHeader("Content-Type", "application/json"),
                        i.addEventListener("readystatechange", function () {
                            o(this);
                        }),
                        i.send();
                },
                a = function (e, t) {
                    var i = (0, n.createCrossDomainRequest)(),
                        o = function (e) {
                            200 == e.status || 201 == e.status ? ($("#registerOK").modal("show"), $("#formRegister").resetForm()) : console.log("Invocation Errors Occured");
                        };
                    i
                        ? (i.open("POST", "/api/dataentities/WS/documents/", !0),
                          i.setRequestHeader("Accept", "application/json"),
                          i.setRequestHeader("Content-Type", "application/json"),
                          i.addEventListener("readystatechange", function () {
                              o(this);
                          }),
                          i.send(JSON.stringify(e)))
                        : console.log("No Invocation TookPlace At All");
                };
            t.Wholesale = function () {
                o("estacaodamodastore");
            };
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.ShadowBox = void 0), i(155);
            var n = i(12),
                o = i(74),
                s = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(o),
                a = function () {
                    $("#shadowBox form").validate({
                        errorClass: "state-error",
                        validClass: "state-success",
                        errorElement: "em",
                        rules: { name: { required: !0 }, email: { required: !0, email: !0 } },
                        messages: { name: { required: "Nos informe seu nome" }, email: { required: "Nos informe seu endereÃƒÂ§o de email!", email: "Insira um endereÃƒÂ§o vÃƒÂ¡lido!" } },
                        highlight: function (e, t, i) {
                            $(e).closest(".section-input").addClass(t).removeClass(i), $(e).closest(".row-fluid").find("label .is-error").length && $(e).closest(".row-fluid").find("label .is-error").remove();
                        },
                        unhighlight: function (e, t, i) {
                            $(e).closest(".section-input").removeClass(t).addClass(i);
                        },
                        errorPlacement: function (e, t) {
                            t.is(":radio") || t.is(":checkbox") ? t.closest(".option-group").after(e) : t.closest(".row-fluid").find("label").append(e);
                        },
                        submitHandler: function () {
                            r();
                        },
                    });
                },
                r = function () {
                    var e = $("#shadowBox #input__email").val(),
                        t = vtexid.getAuthData(),
                        i = (0, n.createCrossDomainRequest)(),
                        o = function () {
                            if (4 == i.readyState)
                                if (200 == i.status || 201 == i.status) {
                                    var e = JSON.parse(i.responseText);
                                    "" == e
                                        ? l()
                                        : ($("#shadowBox form")
                                              .hide()
                                              .after(
                                                  '<div class="error-message"><h3>Este endereÃƒÂ§o de e-mail jÃƒÂ¡ estÃƒÂ¡ cadastrado!</h3><p>Volte e insira outro endereÃƒÂ§o, por favor!</p><button class="btn-return">Voltar</button></div>'
                                              ),
                                          c());
                                } else alert("Invocation Errors Occured");
                        };
                    i.open("GET", "/api/dataentities/NW/search?email=" + e + "&_fields=email", !0), (i.onreadystatechange = o), i.send();
                },
                l = function () {
                    var e,
                        t = vtexid.getAuthData(),
                        i = $("#shadowBox #input__name").val(),
                        o = $("#shadowBox #input__email").val(),
                        s = "/api/dataentities/NW/documents/",
                        a = (0, n.createCrossDomainRequest)(),
                        r = function () {
                            var e = $("#shadowBox");
                            4 == a.readyState && (200 == a.status || 201 == a.status ? e.modal("hide") : alert("Invocation Errors Occured"));
                        };
                    (e = JSON.stringify({ name: i, email: o })),
                        a
                            ? (a.open("POST", s, !0), a.setRequestHeader("Accept", "application/json"), a.setRequestHeader("Content-Type", "application/json"), (a.onreadystatechange = r), a.send(e))
                            : console.log("No Invocation TookPlace At All");
                },
                c = function () {
                    $("#shadowBox .btn-return").on("click", function () {
                        $("#shadowBox .error-message").remove(), $("#shadowBox form").show().find("#input__email").val("").focus();
                    });
                },
                d = function () {
                    window.innerWidth > 767 &&
                        ($("body").append(
                            '<div id="shadowBox" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="form-shadowBoxLabel" aria-hidden="true"><div class="modal-body"><div class="col-info"><h6 class="logo-sw"><svg viewBox="0 0 205 80" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><use xlink:href="#a" transform="translate(13.2 27.6)" fill="#EF1C8F"></use><use xlink:href="#b" fill="#434245"></use><use xlink:href="#c" transform="translate(21.9 33.6)" fill="#FFF"></use><use xlink:href="#d" transform="translate(33.6 33.6)" fill="#FFF"></use><use xlink:href="#e" transform="translate(78.1 35)" fill="#434245"></use><use xlink:href="#f" transform="translate(89.2 39.1)" fill="#434245"></use><use xlink:href="#g" transform="translate(97.4 36.8)" fill="#434245"></use><use xlink:href="#h" transform="translate(103.3 39.1)" fill="#434245"></use><use xlink:href="#i" transform="translate(115.5 39)" fill="#434245"></use><use xlink:href="#j" transform="translate(125.6 34.8)" fill="#434245"></use><use xlink:href="#k" transform="translate(137.7 39.2)" fill="#434245"></use><use xlink:href="#l" transform="translate(157.2 34.9)" fill="#434245"></use><use xlink:href="#m" transform="translate(167.4 36.8)" fill="#434245"></use><use xlink:href="#n" transform="translate(173.6 39.2)" fill="#434245"></use><use xlink:href="#o" transform="translate(187.4 39.2)" fill="#434245"></use><g><use xlink:href="#p" transform="translate(194.1 39.2)" fill="#434245"></use></g><defs><path id="a" d="M0 0v31.9c0 10.8 19.9 19.4 19.9 19.4S39.8 41.7 39.8 32V.1H0V0z"></path><path id="b" d="M64.1 58.1c-.7.8-1.4 1.3-2.2 1.3-.3 0-.7-.1-1.1-.4-.4-.2-.7-.4-.8-.4-.5 0-.8.2-.8.5 0 0 .1.2.2.6 0 .1-.1.1-.2.1-.3 0-.5-.2-.8-.5-.3-.3-.4-.6-.4-.8 0 0-.1-.4-.2-1.2-.1-.4-.2-.6-.2-.8-.1-.2-.3-.3-.5-.3-.1 0-.1.1-.3.2l-.3.3c0 .2-.1.3-.1.4-.1.2-.1.3-.3.4-.2-.2-.4-.5-.5-.8-.1-.2-.2-.4-.2-.6 0-.1.1-.4.4-.9.2-.5.4-.9.4-1.2 0-.2-.1-.4-.2-.5-.1-.1-.3-.1-.6-.1-.4 0-.7.1-1 .4-.1 0-.1-.1-.1-.2v-.1c0-.5.4-1.1 1.2-1.7 1-.7 1.8-1.1 2.7-1.1 1 0 1.9.3 2.7.9.8.6 1.1 1.3 1.1 2.1v.5c0 .1-.1.2-.3.4-.2-.4-.4-.6-.7-.6-.7 0-1 .3-1 .9 0 .2.1.4.3.6.2.1.5.2.8.2.4 0 .8-.2 1.1-.6.3-.4.5-.8.5-1.3 0-1-.4-1.9-1.3-2.6-.8-.7-1.9-1.1-3.1-1.1-1.1 0-2 .3-2.9 1-.1-.4-.3-.7-.4-1-.2-.3-.4-.5-.7-.5h-.2c-.1 0-.2-.1-.3-.4-.1-.2-.3-.3-.5-.4v-7.6c.1.3.3.7.5 1.1.5 1 1 1.7 1.5 2.2.5.5 1.1.7 1.8.8.5.1.8.1 1.1.3.4.2.8.6 1 1.2.1.2.3.2.7.2.2 0 .3-.1.5-.2s.2-.2.3-.2c.2 0 .4.2.8.5.5.4.9 1 1.4 1.6.4.5.5.9.5 1.1v.8c0 .1 0 .3.1.4.1.1.1.2.2.2s.2-.1.3-.2c.1-.4.1-.7.1-.7 0-.1 0-.4-.1-.7-.1-.4-.1-.7-.2-1 1.2 1.4 1.8 3.2 1.8 5.3-.3 1.9-.7 3.2-1.5 4.2zm-17-30.8c.4-.1.7-.2 1.1-.3 1.3-.5 2.4-1.1 3.2-1.8.1 1.3.3 2 .6 2.1h-4.9zm4.5 31.9c0 9.3-18.6 18.5-18.6 18.5s-18.6-8.2-18.7-18.5V28.7h37.3v30.5zm-37.2-34c.8.8 1.8 1.4 3.2 1.8.4.1.7.2 1.1.3h-4.9c.3-.2.5-.9.6-2.1zM25.6 27c1.1-.4 2-1.1 3-2.1.6-.7 1.1-1.4 1.4-2.2.4-.2.7-.3.8-.3.7 0 1.1.2 1.1.5 0 .1-.1.3-.4.7-.3.4-.5.7-.5.8 0 .2.1.3.3.5.2.1.4.3.6.5-.2.4-.3.7-.3.7 0 .1.1.2.4.4.3.1.6.2.8.2.3 0 .4-.1.4-.3v-.3-.4c0-.3.2-.5.6-.7v-.1c0-.3-.1-.6-.4-1-.3-.4-.4-.6-.4-.7 0-.2.1-.3.3-.5.2-.1.4-.2.7-.2.1 0 .4.1.8.3.4.2.8.3 1 .3h.2c.3.7.7 1.3 1.2 1.9.9 1 1.9 1.7 3 2.1.2.1.5.2.8.3H24.8c.3-.2.6-.3.8-.4zM12.9 49c-.2.1-.3.3-.4.4-.2.3-.3.4-.3.4H12c-.3 0-.5.2-.7.5-.2.3-.3.7-.4 1-.9-.6-1.8-1-2.9-1-1.2 0-2.2.4-3.1 1.1-1 .7-1.4 1.6-1.4 2.6 0 .5.2.9.5 1.3s.7.6 1.1.6c.3 0 .6-.1.8-.2.2-.1.3-.3.3-.6 0-.6-.3-.9-1-.9-.2 0-.5.2-.7.6-.2-.2-.3-.3-.3-.4v-.2-.3c0-.8.4-1.5 1.1-2.1.8-.5 1.6-.8 2.7-.8.8 0 1.7.4 2.7 1.1.8.6 1.2 1.2 1.2 1.7v.1c0 .1 0 .2-.1.2-.2-.2-.5-.4-1-.4-.3 0-.5 0-.6.1-.2.1-.3.2-.3.5s.1.6.4 1.2c.2.5.4.8.4.9 0 .2-.1.4-.2.6-.1.3-.3.6-.5.8-.1-.1-.2-.2-.3-.4 0-.1-.1-.3-.1-.4 0-.1-.1-.2-.3-.3-.1-.1-.2-.2-.3-.2-.2 0-.4.1-.5.3-.1.1-.2.4-.2.8-.2.5-.3.9-.3.9 0 .2-.1.5-.4.8-.3.3-.6.5-.8.5-.1 0-.2 0-.2-.1.1-.4.2-.6.2-.6 0-.3-.3-.5-.8-.5-.1 0-.4.1-.8.4-.4.2-.8.4-1.1.4-.8 0-1.5-.4-2.2-1.3-.8-1-1.2-2.3-1.2-3.9 0-2.1.6-3.9 1.8-5.3 0 .3-.1.6-.2 1s-.1.6-.1.7c0 0 0 .3.1.7.1.1.2.2.3.2.1 0 .1-.1.2-.2s.1-.3.1-.4v-.4-.4c0-.2.2-.5.5-1.1.4-.6.9-1.1 1.4-1.6.4-.4.7-.5.8-.5 0 0 .1.1.3.2.2.1.3.2.5.2.4 0 .6-.1.7-.2.3-.6.6-1 1-1.2.2-.1.6-.2 1.1-.3.7-.1 1.3-.4 1.8-.8.5-.5 1-1.2 1.5-2.2.2-.3.3-.7.4-1V49zm52.6 2c-.3-1-.9-1.9-1.7-2.7h.5c.2 0 .5-.1.7-.3.3-.2.4-.4.4-.5 0-.2-.1-.3-.3-.3 0 0-.1.1-.3.2-.2.1-.5.2-.8.2-.5 0-1-.1-1.5-.3-.4-.2-.7-.3-1.1-.5-.3-.1-.6-.2-1-.4l-.3-.6c-.1-.3-.4-.4-.8-.4 0 0-.1 0-.3.1-.2.1-.3.1-.4.1h-.1c-.2 0-.3 0-.4-.1-.1-.2-.2-.3-.4-.4.1-.1.2-.2.3-.4.1-.1.2-.2.2-.3 0-.1-.1-.2-.3-.3-.2-.1-.4-.1-.6-.1-.1 0-.2 0-.4.1-.2 0-.4.1-.5.1-.3 0-.8-.3-1.4-.8l.6-.3c.2-.1.3-.2.3-.4s-.2-.5-.5-.7c-.6-.4-1-.7-1.1-.8-.4-.4-.7-1-1.1-2-.2-.5-.3-1-.4-1.5v-3.2c.1-.8.2-1.5.4-2.2.3-1.1.6-1.7.8-1.8v.2l-.2.6c-.1.4-.2.9-.3 1.4-.1.7-.2 1.4-.2 2.2 0 1.8.5 3.6 1.5 5.2.5.7 1.2 1.4 2.3 2 1.1.6 2.1.9 3 .9.5 0 1.2-.2 2-.6.9-.4 1.5-.8 2-1.3.4-.5.8-1.1 1-1.7.2-.6.3-1.1.3-1.6v-.7c0-1.3-.4-2.5-1.3-3.5s-2-1.5-3.2-1.5c-1 0-2 .4-2.8 1.2-.8.8-1.2 1.7-1.2 2.7 0 .7.2 1.3.7 1.8.4.5.9.8 1.5.8s1-.1 1.3-.4c.3-.3.5-.6.5-1 0-.3-.1-.6-.3-.9-.2-.2-.5-.4-.8-.4-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7v.4c0 .1-.1.2-.2.2-.3 0-.5-.2-.7-.6-.2-.4-.3-.7-.3-1 0-.4.1-.9.4-1.3.3-.5.5-.8.9-1 0 .2.1.3.2.4.1.1.3.2.5.2s.5-.2.9-.7c.3-.4.6-.7.9-.7.1 0 .1 0 .2.1-.5.4-.8.7-.8 1 0 .2.1.3.2.4.1.1.3.2.5.2.1 0 .4 0 .7-.1.4-.1.6-.1.8-.1h.1c.3 0 .7.3 1.1.8.5.7.7 1.5.7 2.4 0 .8-.4 1.6-1.1 2.6-.3.5-.9.9-1.7 1.3-.7.4-1.2.6-1.6.6-.1 0-.2 0-.3-.1 0 0 .1-.1.2-.3.1-.2.2-.3.2-.4 0-.1-.1-.3-.3-.4-.2-.1-.5-.2-.7-.2-.2 0-.4.1-.7.2-.3.1-.6.2-.7.2-.3 0-.6-.1-.9-.2-.3-.1-.4-.2-.4-.3 0-.1.2-.2.6-.4.4-.1.6-.3.6-.5 0-.1-.1-.3-.4-.5-.3-.2-.7-.3-1.2-.4-.2 0-.4-.1-.8-.2-.2-.1-.4-.3-.6-.6-.2-.2-.3-.4-.3-.5 0-.1.1-.2.2-.3.1-.1.2-.2.2-.3 0-.1-.1-.3-.3-.6-.2-.3-.4-.6-.5-.9-.2-.5-.3-1-.3-1.6 0-.4.1-.9.2-1.6.2-.7.3-1.2.5-1.6.2-.4.4-.7.6-1.1.2-.3.3-.5.5-.5.4-.2.7-.4.7-.6 0-.2-.3-.4-.9-.4h-.4c-.3 0-.5.1-.8.3-.1.1-.4.5-.8 1.2-.4.5-.6 1.1-.9 1.7v-4H52c.2-.1.3-.2.3-.3 0-.1 0-.3-.1-.5 0-.3-.1-.5-.1-.6 0-.2.1-.5.2-.8.2-.5.3-.8.3-.8.2-1-1.1-1.6-2.5-.7-.2.1-.5.3-.9.4-.4.1-.7.2-1.1.3-.4.1-.7.2-1.1.3-.2.1-.3.2-.3.2 0 .2.2.2.6.2h.2c.4 0 1.3-.2 2.6-.5.1 0 .2 0 .2.1-.1.3-.4.5-.8.8-.8.4-1.6.8-2.6 1.1-.9.2-1.8.4-2.6.4-1.4 0-2.5-.1-3.3-.3-1.2-.3-2.1-.9-2.9-1.6-.7-.7-1.1-1.4-1.1-2.1 0-.2 0-.4.1-.6.2-.2.3-.3.4-.5.1-.2.1-.2.1-.3 0-.1-.1-.1-.2-.1.2-.5.3-.9.3-1.1 0-.2-.1-.4-.4-.5-.3-.1-.4-.2-.4-.4s.2-.5.7-.7c.6-.2 1.1-.4 1.7-.6.8-.3 1.2-.7 1.2-1 0-.5-.3-.9-1-1.1.1-.3.4-.5 1-.5.4 0 .8.1 1.3.4.5.3.9.4 1.2.4.5 0 .9-.2 1-.6 0-.2.1-.4.1-.6 0-.2.2-.3.4-.3.3 0 .6.2 1 .7.5.5.9 1.1 1.2 1.9.2.5.3 1.1.3 1.8 0 1.1-.3 1.9-.9 2.6-.5.6-1.1.9-1.7.9-1.1 0-1.7-.2-1.7-.6 0 0 .2-.2.5-.4.3-.3.5-.6.5-.9 0-.3-.1-.6-.3-.8-.2-.2-.5-.4-.7-.4-.5 0-1 .2-1.3.5-.4.3-.5.7-.5 1.1 0 .7.3 1.2.8 1.6.5.4 1.2.7 2.1.7.4 0 .9-.1 1.4-.3.5-.2 1-.4 1.3-.7.5-.4.8-.9 1.1-1.5.3-.6.4-1.3.4-1.9 0-1.4-.6-2.8-1.8-4.1.1-.1.2-.1.4-.1.1 0 .2 0 .4.1s.3.1.3.1c.6 0 .9-.3 1.1-.9.1-.5-1.3-1-2.4-1-.3 0-.8 0-1.5-.1-.4.1-1 .1-1.4.1-1 0-1.8.1-2.5.4-3.5 1.3-5.3 3.5-5.3 6.6v.4c-.3.1-.7.3-1 .6-.5.5-.9.9-1.3 1l-.1-.3c.6-2.7 1.8-5 3.4-6.7 1-1 1.4-1.5 1.4-1.5 0-.1-.1-.1-.2-.1-.3 0-.7.2-1.3.7-.6.5-1.1.7-1.4.8l-.1-.1.2-.4c.8-.8 1.7-1.6 3-2.3.9-.6 1.3-1 1.3-1.2 0-.6-.4-.9-1.2-.9-.3 0-.5.1-.9.3h-.3c1.1-.7 1.6-1.3 1.6-1.6v-.3c0-.2.1-.4.3-.5.2.2.4.3.6.3.2 0 .5-.1.6-.3.2-.2.3-.4.3-.7 0-.4-.2-.8-.6-1.2-.4-.4-.8-.6-1.2-.6-.5 0-1 .4-1.7 1.1-.8.8-1.5 1.9-2 3.2-.3.7-.6 1.8-.8 3.2-.3 1.2-.5 2.1-.8 2.7-.1-.3-.1-.7-.1-1.1 0 0 .1-1.3.3-3.8.1-2 .3-3.1.4-3.5.2-.7.5-1.6.8-2.5.3-.8.5-1.3.5-1.4 0-.4-.2-.6-.5-.7 0 0-.1.1-.2.1s-.1.1-.1.1c-.5-.6-1-.9-1.7-.9s-1.1.4-1.2 1.3c-.3.2-.5.3-.5.4 0 .1-.1.2-.1.2s.3 1 .9 3.1c.6 2.1.8 4.2.8 6.3v.6c0 .3-.1.5-.2.9-.3-.5-.5-1.3-.6-2.4-.2-1.1-.4-1.9-.6-2.4C29.7 7.3 28.5 6 27.5 6c-.4 0-.8.2-1.1.5-.3.3-.5.7-.5 1 0 .3.2.6.5.7.3.1.7.2 1.1.4.4.1.6.4.8.8-.8.4-1.1.7-1.1 1.1 0 .2.3.5.8.8.9.6 1.4 1 1.7 1.2.7.5 1 1.2 1 1.9l-.1.1c-.2 0-.5-.3-.8-.8-.3-.5-.5-.7-.8-.7-.2 0-.3.1-.3.2l.1.2c2.2 3.1 3.4 5.5 3.4 7.3 0 .6-.2.8-.5.8-.1 0-.4-.2-.8-.5-.1-.1-.3-.2-.4-.3 0-.3.1-.6.1-.9 0-3-1.8-5.2-5.3-6.6-.7-.3-1.5-.4-2.5-.4-.4 0-.9 0-1.6.1-.7.1-1.2.1-1.5.1-1.1 0-2.5.5-2.4 1 .1.6.5.9 1.1.9 0 0 .1 0 .3-.1.2-.1.3-.1.4-.1.1 0 .3 0 .4.1-1.2 1.3-1.8 2.7-1.8 4.1 0 .7.1 1.3.4 1.9.3.6.6 1.1 1.1 1.5.3.3.8.5 1.3.7.5.2 1 .3 1.4.3.9 0 1.6-.2 2.1-.7.5-.4.8-1 .8-1.6 0-.5-.2-.8-.5-1.1-.4-.3-.8-.5-1.3-.5-.3 0-.5.1-.7.4-.2.2-.3.5-.3.8 0 .3.2.6.5.9.3.3.5.4.5.4 0 .4-.6.6-1.7.6-.6 0-1.2-.3-1.7-.9-.6-.7-.9-1.5-.9-2.6 0-.7.1-1.3.3-1.8.3-.8.7-1.4 1.2-1.9.4-.4.8-.7 1.1-.7.2 0 .3.1.4.3 0 .2.1.4.1.6.1.4.4.6 1 .6.3 0 .7-.1 1.2-.4.5-.3 1-.4 1.4-.4.6 0 .9.2 1 .5-.7.2-1 .6-1 1.1 0 .4.4.7 1.2 1 .6.2 1.1.4 1.7.6.5.2.7.4.7.7 0 .1-.1.2-.4.4-.3.1-.4.3-.4.5s.1.6.3 1.2c0 .1.1.2.1.4l-.1.1-.4-.1c-.3-.1-.4-.2-.5-.3 0 .1-.1.1-.1.2 0 .2.2.5.6.8.2.2.4.3.6.4 0 .7-.4 1.4-1.1 2.1-.8.8-1.7 1.3-2.9 1.6-.8.2-1.9.3-3.3.3-.8 0-1.6-.1-2.6-.4-1-.3-1.8-.6-2.6-1.1-.4-.2-.7-.5-.8-.8 0-.1.1-.1.2-.1 1.3.3 2.2.5 2.6.5h.2c.4 0 .6-.1.6-.2s-.1-.2-.3-.2c-.4-.1-.7-.2-1.1-.3-.4-.1-.7-.2-1.1-.3-.4-.1-.7-.2-.9-.4-1.4-.9-2.7-.3-2.5.7 0 0 .1.3.3.8.1.3.2.6.2.8 0 .1 0 .3-.1.6 0 .3-.1.4-.1.5 0 .1.1.2.3.3h-.6v4c-.3-.6-.5-1.2-.9-1.7-.4-.7-.7-1.1-.8-1.2-.2-.2-.5-.3-.8-.3h-.4c-.9 0-1.2.1-1.2.4 0 .2.2.4.7.6.2.1.3.3.5.5.2.4.4.7.6 1.1.2.3.4.9.5 1.6.1.6.2 1.2.2 1.6 0 .6-.1 1.2-.3 1.6-.1.3-.2.6-.5.9-.2.3-.3.5-.3.6 0 .1.1.2.2.3.1.1.2.2.2.3 0 .1-.1.3-.3.5l-.6.6c-.3.1-.6.2-.7.2-.5.1-.9.2-1.2.4-.3.2-.4.3-.4.5s.2.4.6.5c.4.1.6.3.6.4 0 .1-.1.2-.4.3-.3 0-.6.1-.9.1-.1 0-.3-.1-.7-.2-.3-.1-.6-.2-.7-.2-.3 0-.5.1-.7.2-.2.1-.3.2-.3.4 0 .1.1.3.2.4.1.2.2.3.2.3-.2.1-.3.1-.4.1-.3 0-.9-.2-1.6-.6-.8-.4-1.3-.9-1.7-1.3-.7-.9-1.1-1.8-1.1-2.6 0-.9.2-1.7.7-2.4.4-.5.8-.8 1.1-.8h.1c.2 0 .4 0 .8.1s.6.1.7.1c.2 0 .3-.1.5-.2.1-.1.2-.2.2-.4 0-.3-.3-.7-.8-1 .1-.1.1-.1.2-.1.3 0 .6.2.9.7.3.4.6.7.9.7.2 0 .3-.1.5-.2.1-.1.2-.3.2-.4.3.2.6.5.9 1 .2.5.4.9.4 1.3 0 .3-.1.7-.3 1-.2.4-.4.5-.7.6-.1 0-.2-.1-.2-.2v-.2-.2c0-.3-.1-.5-.3-.7-.2-.2-.5-.3-.7-.3-.3 0-.5.1-.8.4-.2.2-.3.5-.3.9s.2.8.5 1c.3.3.8.4 1.3.4.6 0 1.1-.3 1.5-.8.4-.5.7-1.1.7-1.8 0-1-.4-2-1.2-2.7-.8-.8-1.8-1.2-2.8-1.2-1.3 0-2.4.5-3.2 1.5-.9 1-1.3 2.2-1.3 3.5v.7c0 .5.1 1 .3 1.6.3.7.6 1.2 1.1 1.7.4.5 1.1.9 2 1.3.8.4 1.5.6 2 .6.9 0 1.9-.3 3-.9 1.1-.6 1.9-1.3 2.3-2 1-1.6 1.5-3.3 1.5-5.2 0-.8-.1-1.5-.2-2.2-.1-.5-.2-.9-.3-1.4l-.2-.6v-.2c.3.1.5.7.8 1.8.2.7.3 1.3.4 2.1v3.4c-.1.4-.2.9-.3 1.3-.3 1-.7 1.6-1.1 2-.1.1-.5.4-1.1.8-.4.1-.5.4-.5.6 0 .2.1.3.3.4.3.2.5.3.6.3-.7.5-1.2.8-1.5.8-.1 0-.3 0-.5-.1-.2 0-.3-.1-.4-.1-.2 0-.5 0-.6.1-.2.1-.3.2-.3.3 0 .1.1.2.2.3.2.3.3.4.3.5-.1.1-.3.2-.4.4-.1.1-.2.1-.4.1-.1 0-.2 0-.4-.1s-.3-.1-.3-.1c-.4 0-.7.1-.8.4l-.3.6c-.4.2-.7.3-1 .4-.4.2-.7.3-1.1.5-.5.2-1 .3-1.5.3-.3 0-.6-.1-.8-.2-.2-.1-.3-.2-.3-.2-.2 0-.3.1-.3.3 0 .1.1.3.4.5.3.2.5.3.7.3H2C1.4 49.1.8 50 .5 51c-.3.9-.5 2-.5 3.4s.4 2.7 1.1 3.7c.6.8 1.3 1.5 2.2 2 .9.5 1.8.7 2.7.7 1.3 0 2.3-.2 3.2-.7 1.2-.6 2.1-1.3 2.7-2.2.5-.7.8-1.4.8-2 0-.6-.1-1.4-.3-2.3-.2-.9-.3-1.5-.3-1.8 0-.7.2-1.3.7-1.8v9.5c0 11 20.1 19.6 20.1 19.6s20.1-9.8 20-19.6V50c.5.5.7 1.1.7 1.8 0 .3-.1.9-.3 1.8-.2.9-.3 1.6-.3 2.3 0 .6.3 1.3.8 2 .6.9 1.5 1.7 2.7 2.2.9.4 2 .7 3.2.7 1 0 1.9-.2 2.7-.7.9-.5 1.6-1.1 2.2-2 .7-1.1 1.1-2.3 1.1-3.7.2-1.4.1-2.5-.2-3.4zm-35-48.9c.1 0 .4-.1.9-.3.5-.2.9-.3 1.2-.3.3 0 .8.1 1.3.3.5.2.9.3 1 .3.1 0 .3-.1.4-.2.1-.1.2-.3.2-.4 0-.3-.2-.7-.7-1-.5-.3-1-.5-1.7-.5-.9 0-1.6.1-2.2.4-.6.3-.9.6-.9 1 .1.5.3.7.5.7z"></path><path id="c" d="M0 0h9.3v1.4H1.4v25.3h7.9v1.4H0V0zm5.8 20.2c.6 0 .9.3.9.9 0 .6-.3.9-.9.9-.6 0-.9-.3-.9-.9-.1-.6.2-.9.9-.9z"></path><path id="d" d="M7.5 14.8c-2.1 0-3.9-.7-5.3-2.2C.7 11.2 0 9.4 0 7.4s.7-3.8 2.2-5.2C3.6.8 5.4 0 7.4 0s3.8.7 5.2 2.2c1.4 1.4 2.2 3.2 2.2 5.2h-1.4c0-1.6-.6-3-1.8-4.2C10.4 2 9 1.4 7.4 1.4c-1.7 0-3.1.6-4.2 1.8-1.1 1.2-1.8 2.6-1.8 4.2 0 1.7.6 3.1 1.8 4.2 1.2 1.1 2.6 1.8 4.3 1.8 2.1 0 3.8.7 5.2 2.2 1.4 1.4 2.1 3.2 2.1 5.2s-.7 3.8-2.2 5.2c-1.4 1.4-3.2 2.2-5.2 2.2s-3.8-.7-5.2-2.2C.8 24.6 0 22.8 0 20.7h1.4c0 1.7.6 3.1 1.8 4.3 1.2 1.2 2.6 1.8 4.2 1.8s3-.6 4.2-1.7c1.2-1.2 1.8-2.6 1.8-4.2s-.6-3-1.7-4.2c-1.1-1.3-2.5-1.9-4.2-1.9z"></path><path id="e" d="M0 17c.2-2.2.3-5.2.4-8.7C.5 4.8.6 2 .6 0h9.7v.9l-1-.1H1.6l-.3 7.1h8c0 .2-.1.5-.1.8h-8l-.3 7.5h6.5c.5 0 1.3 0 2.2-.1 0 .3-.1.6-.1.9H0z"></path><path id="f" d="M.1 12.6c0-.4 0-.8-.1-1.1.7.3 1.3.5 1.9.6.6.1 1.1.2 1.6.2.6 0 1.2-.1 1.6-.3.5-.2.8-.5 1-.8.2-.3.3-.7.3-1.1 0-.2 0-.3-.1-.5 0-.2-.1-.3-.2-.5s-.2-.3-.3-.4c-.1-.1-.2-.3-.4-.5s-.4-.4-.7-.6c-.2-.2-.6-.5-1.2-1-.5-.4-1-.8-1.3-1.1-.3-.3-.6-.6-.9-1-.2-.3-.4-.6-.5-.9-.1-.3-.1-.6-.1-.8 0-.5.2-.9.5-1.4.3-.5.7-.8 1.3-1C3.1.2 3.8 0 4.7 0c.7 0 1.6.1 2.5.3 0 .4 0 .7.1 1.1-.5-.2-1-.4-1.4-.5C5.5.8 5.1.8 4.6.8s-1 .1-1.5.2c-.5.2-.8.4-1 .7-.2.3-.3.6-.3 1 0 .2 0 .4.1.6 0 .2.1.4.2.5.1.2.2.4.4.5.2.2.4.4.7.6.3.2.7.6 1.2 1s.9.8 1.1 1c.2.2.5.4.6.6.2.2.3.4.5.6.2.2.3.4.4.6.1.2.2.4.2.6 0 .2.1.4.1.6 0 .5-.2 1-.5 1.5s-.8.8-1.3 1.1c-.5.3-1.3.4-2.1.4-.3 0-.7 0-1.2-.1s-.8-.1-1.1-.2c-.2.3-.6.2-1 0z"></path><path id="g" d="M5.9 14.4c-.1.2-.1.5-.1.8-.7.2-1.3.2-1.9.2-.5 0-.9-.1-1.3-.2s-.7-.3-.9-.6c-.2-.3-.4-.6-.5-.9-.1-.3-.1-.7-.1-1.1v-.3-.9l.4-8.2H0c0-.2.1-.4.1-.7h1.5c0-.5.1-1.3.1-2.3.3 0 .6-.1.8-.2-.1 1.3-.1 2.2-.1 2.5h3.7c0 .2-.1.4-.1.7H2.3l-.4 8.5v.5c0 .7.1 1.2.2 1.5.1.3.4.5.7.7.3.1.6.2.9.2.2 0 .5 0 .7-.1.5.2.9.1 1.5-.1z"></path><path id="h" d="M1.7 1.6c.1-.3.1-.6.1-1C2.6.4 3.4.2 4 .1 4.6 0 5.3 0 5.9 0c.7 0 1.4.1 2.1.2.6.1 1.2.3 1.6.6.4.3.7.6.8 1 .1.4.2.8.2 1.2v1.6c0 .7-.1 1.3-.1 2s-.1 1.6-.1 2.7-.1 1.9-.1 2.4v1h-1c.1-1.3.2-2.3.2-3.1 0-.8.1-1.6.1-2.5 0-.9.1-1.8.1-2.5-.3.2-.5.4-.6.5-.1.1-.3.2-.4.3l-.6.3c-.2.1-.4.2-.6.2-.2.1-.7.2-1.4.4s-1.3.3-1.6.4c-.7.2-1.3.5-1.7.7-.4.2-.8.5-1.1.7-.2.2-.4.5-.5.8-.1.3-.2.7-.2 1 0 .5.2 1 .5 1.4.3.4.7.7 1.2.8.5.2 1.1.2 1.8.2.3 0 .7 0 1-.1.3 0 .6-.1.9-.1.3-.1.7-.2 1.2-.4-.1.3-.1.6-.2.9-.7.1-1.2.2-1.6.3-.4 0-.8.1-1.2.1-.7 0-1.3-.1-1.9-.2-.6-.1-1.1-.3-1.5-.6-.4-.3-.7-.7-.9-1.1-.2-.4-.3-.8-.3-1.3 0-.3.1-.7.2-1 .1-.3.3-.6.5-.9.2-.2.5-.5.8-.7.4-.3.8-.5 1.3-.7.5-.2 1.1-.4 1.8-.6.2 0 .9-.2 2.1-.5.5-.1 1-.3 1.5-.5s.9-.5 1.1-.9c.2-.4.4-.8.4-1.1 0-.3-.1-.6-.2-.8-.1-.3-.3-.5-.7-.7-.4-.2-.7-.4-1.2-.5-.5-.1-1-.1-1.5-.1-.6 0-1.2 0-1.7.1s-1 .2-1.3.3c-.4.1-.9.2-1.4.4z"></path><path id="i" d="M9.1 12c-.1.3-.1.7-.2.9-1.1.2-2 .3-3 .3-.9 0-1.7-.1-2.4-.4-.8-.2-1.4-.6-1.9-1.2-.5-.5-.9-1.2-1.2-2C.1 8.8 0 7.9 0 7.1c0-1.2.2-2.4.6-3.5.4-1.1 1.1-2 2-2.6.9-.6 2.1-1 3.7-1 1.1 0 2.2.2 3.2.5 0 .3 0 .6.1.9-.9-.3-1.5-.4-2-.5C7.1.8 6.7.8 6.3.8c-.9 0-1.6.2-2.3.5-.7.3-1.2.8-1.7 1.4-.4.6-.8 1.3-.9 2.1-.1.8-.3 1.5-.3 2.3 0 .8.1 1.6.3 2.3.2.7.5 1.3 1 1.7.5.4 1 .8 1.7 1 .7.2 1.4.4 2.1.4.4 0 .8 0 1.3-.1.3-.1.9-.2 1.6-.4zm-2.6 2.3l-1.5 3H3.4c1.1-1.2 2-2.2 2.6-3h.3.2z"></path><path id="j" d="M1.7 5.9c.1-.3.1-.6.1-1 .8-.2 1.6-.4 2.2-.5.6-.1 1.3-.1 1.9-.1.7 0 1.4.1 2.1.2.6.1 1.2.3 1.6.6.4.3.7.6.8 1 .1.4.2.8.2 1.2v1.6c0 .7-.1 1.3-.1 2s-.1 1.6-.1 2.7-.1 1.9-.1 2.4v1h-1c.1-1.3.2-2.3.2-3.1 0-.8.1-1.6.1-2.5 0-.9.1-1.8.1-2.5-.3.2-.5.4-.6.5-.1.1-.3.2-.4.3l-.6.3c-.2.1-.4.2-.6.2-.2.1-.7.2-1.4.4s-1.3.3-1.6.4c-.7.2-1.3.5-1.7.7-.4.2-.8.5-1.1.7-.2.2-.4.5-.5.8-.1.3-.2.7-.2 1 0 .5.2 1 .5 1.4.3.4.7.7 1.2.8.5.2 1.1.2 1.8.2.3 0 .7 0 1-.1.3 0 .6-.1.9-.1.3-.1.7-.2 1.2-.4-.1.3-.1.6-.2.9-.7.1-1.2.2-1.6.3-.4 0-.8.1-1.2.1-.7 0-1.3-.1-1.9-.2-.6-.1-1.1-.3-1.5-.6-.4-.3-.7-.7-.9-1.1-.2-.4-.3-.8-.3-1.3 0-.3.1-.7.2-1 .1-.3.3-.6.5-.9.2-.2.5-.5.8-.7.4-.3.8-.5 1.3-.7.5-.2 1.1-.4 1.8-.6.2 0 .9-.2 2.1-.5.5-.1 1-.3 1.5-.5s.9-.5 1.1-.9c.2-.4.4-.8.4-1.1 0-.3-.1-.6-.2-.8-.1-.3-.3-.5-.7-.7-.4-.2-.7-.4-1.2-.5-.5-.1-1-.1-1.5-.1-.6 0-1.2 0-1.7.1s-1 .2-1.3.3c-.4.1-.9.2-1.4.4zm1.6-3.4v-.9c0-.2.1-.5.1-.7.1-.2.1-.4.2-.5.1-.1.2-.2.4-.3.2-.1.3-.1.4-.1.2 0 .5.1.8.2.3.1.7.5 1.4 1 .2.1.3.2.5.3.2.1.3.1.4.1.1 0 .3 0 .4-.1.1-.1.2-.2.2-.4.1-.2.1-.5.1-.9h.7c0 .6-.1 1.1-.2 1.4-.1.3-.2.5-.4.7-.2.1-.4.2-.6.2-.2 0-.4 0-.5-.1-.2-.1-.5-.3-.9-.6-.6-.4-1-.7-1.1-.8C5 .9 4.9.9 4.7.9c-.1 0-.2 0-.3.1-.1 0-.2.1-.2.2-.1.1-.1.2-.1.4v.9h-.8z"></path><path id="k" d="M6.3 0c.8 0 1.5.1 2.2.3.7.2 1.4.6 1.9 1.1.6.5 1 1.2 1.3 2 .3.8.4 1.7.4 2.7 0 1-.2 2-.5 2.9-.3.9-.7 1.7-1.3 2.3-.6.6-1.2 1.1-2 1.3-.8.3-1.6.4-2.4.4-.6 0-1.2-.1-1.8-.2-.6-.1-1.1-.4-1.6-.7-.5-.3-.9-.7-1.3-1.3C.8 10.3.5 9.7.3 9 .1 8.3 0 7.6 0 6.8c0-1.3.2-2.6.7-3.7C1.2 2 1.9 1.2 2.9.7 4.1.2 5.2 0 6.3 0zm0 .7c-1 0-1.9.2-2.8.7-.8.5-1.5 1.2-1.9 2.2-.4 1-.6 2.1-.6 3.2 0 .8.1 1.6.3 2.3.2.7.6 1.3 1.1 1.8.5.5 1.1.8 1.6 1 .5.2 1.2.3 1.8.3.7 0 1.4-.1 2.1-.4.6-.2 1.2-.6 1.7-1.2s.9-1.3 1.1-2.1c.2-.8.3-1.7.3-2.6 0-.9-.1-1.7-.3-2.4-.2-.8-.6-1.4-1.1-1.8-.5-.5-1-.8-1.6-1-.4.1-1 0-1.7 0z"></path><path id="l" d="M.1 16.6c0-.3 0-.7-.1-1.1 1.6.7 3 1.1 4.3 1.1.7 0 1.4-.1 2-.4.6-.2 1.1-.6 1.4-1.1.3-.5.5-1 .5-1.6 0-.3-.1-.6-.2-.9-.1-.3-.3-.6-.5-.8-.2-.2-.6-.7-1-1.1-.4-.5-1.2-1.2-2.4-2.1l-1-.8c-.3-.3-.7-.6-1-.9-.3-.3-.6-.6-.8-.9-.2-.3-.4-.5-.5-.7-.1-.2-.2-.5-.2-.7-.1-.3-.1-.5-.1-.8 0-.7.2-1.3.5-1.9.4-.6.9-1 1.6-1.4C3.3.1 4.2 0 5.4 0c.8 0 1.8.1 3 .3 0 .3 0 .7.1 1-.8-.2-1.4-.4-1.9-.5-.5-.1-1-.1-1.4-.1-.8 0-1.5.1-2 .4-.5.3-.9.6-1.2 1.1-.3.5-.4.9-.4 1.4 0 .3 0 .5.1.8.1.3.2.5.4.8.2.3.4.5.8.9L4 7.2c.4.4 1 .9 1.7 1.5S6.9 9.8 7.2 10c.3.3.6.5.8.8.3.3.5.6.6.9.1.3.3.6.4.9.1.3.1.6.1 1 0 .8-.2 1.5-.6 2.1-.4.6-1 1-1.7 1.3-.8.3-1.6.5-2.6.5-.6 0-1.2 0-1.8-.1-.5-.3-1.3-.5-2.3-.8z"></path><path id="m" d="M5.9 14.4c-.1.2-.1.5-.1.8-.7.2-1.3.2-1.9.2-.5 0-.9-.1-1.3-.2s-.7-.3-.9-.6c-.2-.3-.4-.6-.5-.9-.1-.3-.1-.7-.1-1.1v-.3-.9l.4-8.2H0c0-.2.1-.4.1-.7h1.5c0-.5.1-1.3.1-2.3.3 0 .6-.1.8-.2-.1 1.3-.1 2.2-.1 2.5h3.7c0 .2-.1.4-.1.7H2.3l-.4 8.5v.5c0 .7.1 1.2.2 1.5.1.3.4.5.7.7.3.1.6.2.9.2.2 0 .5 0 .7-.1.4.2.8.1 1.5-.1z"></path><path id="n" d="M6.3 0c.8 0 1.5.1 2.2.3.7.2 1.4.6 1.9 1.1.6.5 1 1.2 1.3 2 .3.8.4 1.7.4 2.7 0 1-.2 2-.5 2.9-.3.9-.7 1.7-1.3 2.3-.6.6-1.2 1.1-2 1.3-.8.3-1.6.4-2.4.4-.6 0-1.2-.1-1.8-.2-.6-.1-1.1-.4-1.6-.7-.5-.3-.9-.7-1.3-1.3C.8 10.3.5 9.7.3 9 .1 8.3 0 7.6 0 6.8c0-1.3.2-2.6.7-3.7C1.2 2 1.9 1.2 2.9.7 4.1.2 5.2 0 6.3 0zm0 .7c-1 0-1.9.2-2.8.7-.8.5-1.5 1.2-1.9 2.2-.4 1-.6 2.1-.6 3.2 0 .8.1 1.6.3 2.3.2.7.6 1.3 1.1 1.8.5.5 1.1.8 1.6 1 .5.2 1.2.3 1.8.3.7 0 1.4-.1 2.1-.4.6-.2 1.2-.6 1.7-1.2s.9-1.3 1.1-2.1c.2-.8.3-1.7.3-2.6 0-.9-.1-1.7-.3-2.4-.2-.8-.6-1.4-1.1-1.8-.5-.5-1-.8-1.6-1-.4.1-1 0-1.7 0z"></path><path id="o" d="M0 12.8C.1 11 .2 9 .3 6.6c.1-2.4.1-4.1.1-5.3V.2h1l-.1 2.4c.3-.6.5-1 .8-1.3.2-.3.5-.5.8-.7.3-.2.7-.3 1.1-.4.4-.1.9-.2 1.3-.2.3 0 .7 0 1 .1v.8C5.7.8 5.3.7 4.9.7c-.4 0-.8.1-1.1.2-.3.1-.6.3-.9.5-.3.2-.6.5-.8.9-.2.4-.5.7-.6 1.2-.2.5-.3 1-.3 1.7-.1 1.1-.1 2.3-.2 3.6v4.1H.5c-.1-.1-.3-.1-.5-.1z"></path><path id="p" d="M9.8 11.6c-.1.3-.1.6-.1.9-.7.2-1.3.3-1.9.4-.5.1-1.1.1-1.7.1-1 0-1.9-.1-2.6-.4-.8-.3-1.4-.7-2-1.3C.9 10.7.6 10 .3 9.2.1 8.4 0 7.6 0 6.7c0-1.2.2-2.2.6-3.2.4-1 1.1-1.8 2-2.5.9-.7 2-1 3.4-1 .9 0 1.8.2 2.5.5s1.3.9 1.8 1.7c.4.8.6 1.7.6 2.8v.6H1c0 .5-.1.9-.1 1.2 0 .8.1 1.5.3 2.3.2.7.6 1.4 1.1 1.9.5.5 1 .9 1.7 1.1.7.2 1.4.4 2.1.4 1.1-.2 2.3-.4 3.7-.9zM1.1 4.8H10c0-.6 0-1-.1-1.3l-.3-.9c-.1-.3-.3-.6-.6-.8-.2-.2-.5-.4-.8-.6-.3-.2-.6-.3-1-.4C6.8.7 6.5.7 6.1.7c-.4 0-.9 0-1.3.1s-.8.2-1.2.4c-.3.2-.7.4-1 .7-.3.3-.6.6-.7.9-.1.3-.3.6-.4.9-.2.3-.3.6-.4 1.1z"></path></defs></svg></h6><h5><strong>Cadastre</strong> e receba novidades!</h5><form><fieldset><div class="l-info field field__name"><div class="content-input"><input class="uit-input" type="text" name="name" id="input__name" required="true" /><span class="bar"></span><label for="input__name">Digite seu nome!</label></div></div><div class="l-info field field__email"><div class="content-input"><input class="uit-input" type="text" name="email" id="input__email" required="true" /><span class="bar"></span><label for="input__email">Digite aqui seu melhor e-mail</label></div></div></fieldset><button>Cadastrar</button></form></div><div class="col-banner"><img src="/arquivos/background-shadowbox.jpg?v=' +
                                (function (e, t) {
                                    return (e = Math.ceil(e)), (t = Math.floor(t)), Math.floor(Math.random() * (t - e + 1)) + e;
                                })(1, 1e3) +
                                '" /></div></div><div class="modal-footer"><button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="ico-close-sw"></i><span class="text-close">Ir para a loja</span></button></div></div>'
                        ),
                        $("#shadowBox").modal("show"),
                        a());
                };
            t.ShadowBox = function () {
                $(document).ready(function () {
                    var e = s.default.get("swbx");
                    (null == e || (void 0 == e && window.innerWidth > 767)) && (d(), s.default.set("swbx", "active", { expires: 1, path: "/" }));
                });
            };
        },
        function (e, t) {},
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Institucional = void 0), i(158), i(159);
            var n = function () {
                    var e = window.location.hash;
                    e.length > 0 &&
                        ((e = e.replace("#", "")),
                        $(".institutionais-center ul li").each(function () {
                            $(this).hasClass(e) && $(this).addClass("active");
                        }));
                },
                o = function () {
                    $(".institutionais-center .ico-close").on("click", function () {
                        $(this).closest("li").toggleClass("active");
                    });
                };
            t.Institucional = function () {
                n(), o();
            };
        },
        function (e, t) {},
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), (t.Newsletter = void 0), i(161);
            var n = i(12),
                o = function () {
                    $(".section-newsletter .l-success .btn").on("click", function () {
                        $(".section-newsletter .l-success").addClass("is-hidden"), $("#formNews").removeClass("is-hidden");
                    }),
                        $(".section-newsletter .l-error .btn").on("click", function () {
                            $(".section-newsletter .l-error").addClass("is-hidden"), $("#formNews").removeClass("is-hidden");
                        });
                },
                s = function (e) {
                    $("#formNews").validate({
                        errorClass: "state-error",
                        validClass: "state-success",
                        errorElement: "em",
                        rules: { name: { required: !0 }, email: { required: !0, email: !0 } },
                        messages: { name: { required: "Nos informe seu nome" }, email: { required: "Nos informe seu endereÃƒÂ§o de email", email: "Insira um endereÃƒÂ§o vÃƒÂ¡lido!" } },
                        highlight: function (e, t, i) {
                            $(e).closest(".field").addClass(t).removeClass(i);
                        },
                        unhighlight: function (e, t, i) {
                            $(e).closest(".field").removeClass(t).addClass(i);
                        },
                        errorPlacement: function (e, t) {
                            t.is(":radio") || t.is(":checkbox") ? t.closest(".option-group").after(e) : e.insertAfter(t.parent());
                        },
                        submitHandler: function (t) {
                            var i = $("#newsletterEmail").val();
                            a(i, e);
                        },
                    });
                },
                a = function (e, t) {
                    var i = (0, n.createCrossDomainRequest)(),
                        o = function (e) {
                            if (4 == e.readyState)
                                if (200 == e.status || 204 == e.status) {
                                    var n = JSON.parse(i.responseText);
                                    if ("" == n) {
                                        var o = { name: $("#newsletterName").val(), email: $("#newsletterEmail").val() };
                                        r(o, t);
                                    } else {
                                        var s = { title: "<h3>Erro!</h3>", body: "<p>Tente novamente ou insira um novo e-mail</p>", button: "<button>voltar</button>" };
                                        $(".section-newsletter .l-default").hide(),
                                            $(".section-newsletter .wrapper").append('<div class="content l-error">' + s.title + s.body + s.button + "</div>"),
                                            $(".section-newsletter .l-error button").on("click", function () {
                                                $(".section-newsletter .l-default").show(), $(this).closest(".l-error").remove();
                                            });
                                    }
                                } else alert("Invocation Errors Occured");
                        };
                    i.open("GET", "/api/dataentities/NW/search/?email=" + e + "&_fields=id", !0),
                        i.setRequestHeader("Accept", "application/json"),
                        i.setRequestHeader("Content-Type", "application/json"),
                        i.addEventListener("readystatechange", function () {
                            o(this);
                        }),
                        i.send();
                },
                r = function (e, t) {
                    var i = (0, n.createCrossDomainRequest)(),
                        o = function (e) {
                            if (200 == e.status || 201 == e.status) {
                                var t = { title: "<h3>OK!</h3>", body: "<p>Bem vinda! Em breve vocÃƒÂª receberÃƒÂ¡ nosso melhor conteÃƒÂºdo.</p>", button: "<button>voltar</button>" };
                                $(".section-newsletter .l-default").hide(),
                                    $(".section-newsletter .wrapper .l-success").length < 1 && $(".section-newsletter .wrapper").append('<div class="content l-success">' + t.title + t.body + t.button + "</div>"),
                                    $(".section-newsletter .l-success button").on("click", function () {
                                        $(".section-newsletter .l-default").show(), $(this).closest(".l-success").remove();
                                    }),
                                    $("#formNews")[0].reset();
                            } else console.log("Invocation Errors Occured");
                        };
                    i
                        ? (i.open("POST", "/api/dataentities/NW/documents/", !0),
                          i.setRequestHeader("Accept", "application/json"),
                          i.setRequestHeader("Content-Type", "application/json"),
                          i.addEventListener("readystatechange", function () {
                              o(this);
                          }),
                          i.send(JSON.stringify(e)))
                        : console.log("No Invocation TookPlace At All");
                };
            t.Newsletter = function () {
                o(), s("estacaodamodastore");
            };
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), i(163);
            var n = function () {
                var e = $(".bread-crumb"),
                    t = $(".resultado-busca-numero").first().clone(),
                    i = $('<div class="info-page">');
                1 == t.find(".value").html() ? i.html(t.html(t.find(".value").html() + " produto encontrado")) : i.html(t.html(t.find(".value").html() + " produtos encontrados")),
                    $("body").hasClass("resultado-busca") && i.prepend('<span class="title-search">Resultados da busca</span>'),
                    e.append(i),
                    $("body").hasClass("produto") &&
                        (e.find("li").each(function (e) {
                            0 === e && $(this).find("a").html("Home"), $(this).append('<span class="divider">-</span>');
                        }),
                        e.show());
            };
            t.default = n;
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), i(165);
            var n = function () {
                var e = $(".return-to-top"),
                    t = $(".header").height() + $(".main-menu").height() + 20;
                $(window).scroll(function () {
                    $(window).scrollTop() > t ? (e.addClass("active"), $(window).scrollTop() > t + 20 && e.addClass("visible")) : ($(window).scrollTop() < t + 20 && e.removeClass("visible"), e.removeClass("active"));
                }),
                    e.on("click", function (e) {
                        e.preventDefault(), $("body,html").animate({ scrollTop: 0 }, 700);
                    });
            };
            t.default = n;
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = i(41),
                s = n(o),
                a = i(42),
                r = n(a);
            i(167);
            var l = i(43),
                c = function () {
                    if ($(".btn-wishlist").length || $(".btn-wishlist-product").length) {
                        var e = [];
                        $("body").hasClass("produto") &&
                            vtexjs.catalog.getCurrentProductWithVariations().then(function (e) {
                                $(".other-info .btn-wishlist-product")
                                    .attr("data-id", e.productId)
                                    .on("click", function () {});
                            });
                        var t = function () {
                                vtexjs.checkout.getOrderForm().done(function (t) {
                                    t.loggedIn &&
                                        ($("body")
                                            .attr("data-user", (0, r.default)(t.clientProfileData.email))
                                            .addClass("is-logged"),
                                        l({
                                            method: "get",
                                            url: "/api/dataentities/WT/search?userId=" + (0, r.default)(t.clientProfileData.email) + "&_fields=products",
                                            headers: { "Content-Type": "application/json", Accept: "application/json", "REST-Range": "resources=0-" + (Math.floor(1e3 * Math.random()) + 1) },
                                        }).then(function (t) {
                                            (e = void 0 != t.data[0] && "" != t.data[0].products ? t.data[0].products.match(/\w+/g) : []),
                                                $(".btn-wishlist, .btn-wishlist-product").each(function () {
                                                    if (!$(this).hasClass("selected")) {
                                                        var t = $(this).data("id"),
                                                            i = $(this);
                                                        $(this).addClass("enabled"),
                                                            null != e &&
                                                                e.map(function (e) {
                                                                    return e == t && i.addClass("selected");
                                                                });
                                                    }
                                                });
                                        }));
                                });
                            },
                            i = function () {
                                $(document).on("click", ".btn-wishlist, .btn-wishlist-product", function (t) {
                                    t.preventDefault();
                                    var i = s.default.parse(window.location.href),
                                        n = $(this).data("id"),
                                        o = $("body").data("user"),
                                        a = $(this);
                                    if ($("body").hasClass("is-logged")) {
                                        var r = { id: "", userId: "", products: "" },
                                            c = { method: "patch", url: "/api/dataentities/WT/documents", headers: { "Content-Type": "application/json", Accept: "application/json" }, data: r };
                                        if (a.hasClass("selected")) {
                                            var d = e.indexOf(n + "");
                                            -1 != d && e.splice(d, 1),
                                                (r.id = o),
                                                (r.userId = o),
                                                (r.products = e + ""),
                                                (c.data = r),
                                                console.log(c.data),
                                                l(c),
                                                a.removeClass("selected").siblings(),
                                                $(".btn-wishlist, .btn-wishlist-product")
                                                    .filter(function (e, t) {
                                                        return $(t).data("id") == a.data("id");
                                                    })
                                                    .removeClass("selected");
                                        } else
                                            e.push(n),
                                                (r.id = o),
                                                (r.userId = o),
                                                (r.products = e + ""),
                                                (c.data = r),
                                                console.log(c.data),
                                                l(c),
                                                a.addClass("selected"),
                                                $(".btn-wishlist, .btn-wishlist-product")
                                                    .filter(function (e, t) {
                                                        return $(t).data("id") == a.data("id");
                                                    })
                                                    .addClass("selected");
                                    } else vtexid.start({ returnUrl: void 0 != i.query ? i.path + "?" + i.query : i.path, userEmail: "", locale: "pt-BR", forceReload: !1 });
                                });
                            };
               
                            $(document).ready(function () {
                                t(), i();
                            });
                    }
                };
            t.default = c;
        },
        function (e, t) {},
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = i(2),
                s = n(o),
                a = i(26),
                r = i(191),
                l = n(r);
            i(193);
            var c = function () {
                (0, a.render)(s.default.createElement(l.default, null), document.querySelector("#wishlist"));
            };
            t.default = c;
        },
        ,
        ,
        ,
        ,
        function (e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : { default: e };
            }
            function o(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            function s(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
            }
            function a(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = (function () {
                    function e(e, t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                        }
                    }
                    return function (t, i, n) {
                        return i && e(t.prototype, i), n && e(t, n), t;
                    };
                })(),
                l = i(2),
                c = n(l),
                d = i(42),
                u = n(d),
                m = i(43),
                f = n(m),
                h = i(192),
                p = n(h),
                v = (function (e) {
                    function t() {
                        var e, i, n, a;
                        o(this, t);
                        for (var r = arguments.length, l = Array(r), c = 0; c < r; c++) l[c] = arguments[c];
                        return (
                            (i = n = s(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l)))),
                            (n.state = { emptyList: !1, isLoading: !1, itemsId: [], listProducts: [] }),
                            (n.removeItemList = function (e) {
                                var t = n.state.itemsId,
                                    i = t.indexOf(e),
                                    o = { id: "", userId: "", products: "" },
                                    s = { method: "patch", url: "/api/dataentities/WT/documents", headers: { "Content-Type": "application/json", Accept: "application/json" }, data: o },
                                    a = n;
                                -1 != i && t.splice(i, 1),
                                    (o.id = $("body").data("user")),
                                    (o.userId = $("body").data("user")),
                                    (o.products = t + ""),
                                    (s.data = o),
                                    (0, f.default)(s).then(function (t) {
                                        var i = a.state.listProducts.map(function (t) {
                                            return t.productId == e && (t.itemActive = !1), t;
                                        });
                                        a.setState({
                                            listProducts: i,
                                            emptyList: !(
                                                i.filter(function (e, t) {
                                                    return 1 == e.itemActive;
                                                }).length > 0
                                            ),
                                        });
                                    });
                            }),
                            (a = i),
                            s(n, a)
                        );
                    }
                    return (
                        a(t, e),
                        r(t, [
                            {
                                key: "componentWillMount",
                                value: function () {
                                    var e = this;
                                    vtexjs.checkout.getOrderForm().done(function (t) {
                                        t.loggedIn &&
                                            ($("body")
                                                .attr("data-user", (0, u.default)(t.clientProfileData.email))
                                                .addClass("is-logged"),
                                            (0, f.default)({
                                                method: "get",
                                                url: "/api/dataentities/WT/search?userId=" + (0, u.default)(t.clientProfileData.email) + "&_fields=products",
                                                headers: { "Content-Type": "application/json", Accept: "application/json", "REST-Range": "resources=0-" + (Math.floor(1e3 * Math.random()) + 1) },
                                            }).then(function (t) {
                                                console.log(t);
                                                var i = t.data.length > 0 ? t.data[0].products.match(/\w+/g) : [],
                                                    n =
                                                        null != i
                                                            ? i
                                                                  .map(function (e) {
                                                                      return "productId:" + parseInt(e);
                                                                  })
                                                                  .join(",")
                                                            : [];
                                                e.setState({ itemsId: i, isLoading: !0 }), n.length > 0 ? e.getListProducts(n) : e.setState({ emptyList: !0, isLoading: !1 });
                                            }));
                                    });
                                },
                            },
                            {
                                key: "getListProducts",
                                value: function (e) {
                                    var t = this;
                                    (0, f.default)({ method: "get", url: "/api/catalog_system/pub/products/search?fq=" + e, headers: { "Content-Type": "application/json", Accept: "application/json" } }).then(function (e) {
                                        var i = e.data.map(function (t) {
                                            e.data.map(function (e) {
                                                e.items.map(function (t, i) {
                                                    0 == t.sellers[0].commertialOffer.AvailableQuantity && i + 1 < e.items.length && delete e.items[i],
                                                        (e.items = e.items.filter(function (e) {
                                                            return e;
                                                        }));
                                                });
                                            });
                                            var i = t.items.length > 0 ? t.items[0].sellers[0].commertialOffer.ListPrice : 0,
                                                n = t.items.length > 0 ? t.items[0].sellers[0].commertialOffer.Price : 0,
                                                o = t.items.length > 0 ? t.items[0].sellers[0].commertialOffer.Installments : 0,
                                                s = i > n ? parseInt(((i - n) / i) * 100) : 0,
                                                a = "";
                                            switch (!0) {
                                                case s > 0 && s < 20:
                                                    a = "flag--pelorous";
                                                    break;
                                                case s >= 20 && s < 30:
                                                    a = "flag--tom-thumb";
                                                    break;
                                                case s >= 30 && s < 40:
                                                    a = "flag--copper";
                                                    break;
                                                case s >= 40 && s < 50:
                                                    a = "flag--rouge";
                                                    break;
                                                case s >= 50:
                                                    a = "flag--crown-of-thorns";
                                            }
                                            return {
                                                itemActive: !0,
                                                productName: t.productName,
                                                imageTag: t.items.length > 0 ? t.items[0].images[0].imageTag : "",
                                                imageTagOver:
                                                    t.items.length > 0
                                                        ? t.items[0].images
                                                              .map(function (e) {
                                                                  if ("ImageOver" == e.imageLabel) return e.imageTag;
                                                              })
                                                              .join("")
                                                        : "",
                                                listPrice: i,
                                                price: n,
                                                installments: (function () {
                                                    if (o.length)
                                                        return o.reduce(function (e, t) {
                                                            return t.NumberOfInstallments > e && 0 == t.InterestRate ? t.NumberOfInstallments : e;
                                                        }, o[0].NumberOfInstallments);
                                                })(),
                                                parcelValue: (function () {
                                                    if (o.length)
                                                        return o.reduce(function (e, t) {
                                                            return t.Value < e && 0 == t.InterestRate ? t.Value : e;
                                                        }, o[0].Value);
                                                })(),
                                                discount: s,
                                                flagDiscount: a,
                                                link: t.link,
                                                productId: t.productId,
                                            };
                                        });
                                        t.setState({ listProducts: i, isLoading: !1 });
                                    });
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    return c.default.createElement(p.default, { items: this.state.listProducts, removeItem: this.removeItemList, emptyList: this.state.emptyList, loading: this.state.isLoading });
                                },
                            },
                        ]),
                        t
                    );
                })(l.Component);
            t.default = v;
        },
        function (e, t, i) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : { default: e };
            }
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = i(2),
                s = n(o),
                a = i(46),
                r = n(a),
                l = function (e) {
                    var t = e.items,
                        i = e.removeItem,
                        n = e.loading,
                        o = e.emptyList;
                    return s.default.createElement(
                        "ul",
                        null,
                        1 == n && s.default.createElement("div", { className: "loading-shelf-wt" }),
                        1 == o &&
                            s.default.createElement(
                                "div",
                                { className: "emptyList" },
                                s.default.createElement("h6", null, "VocÃƒÂª nÃƒÂ£o tem nenhum favorito :", "("),
                                s.default.createElement("p", null, "Navegue para adicionar produtos aqui")
                            ),
                        t.map(function (e, t) {
                            return (
                                1 == e.itemActive &&
                                s.default.createElement(
                                    "li",
                                    { key: t },
                                    s.default.createElement("button", {
                                        className: "btn-remove-item",
                                        "aria-label": "Remover da Lista de Desejos",
                                        onClick: function () {
                                            return i(e.productId);
                                        },
                                    }),
                                    s.default.createElement(
                                        "a",
                                        { "data-product-id": e.productId, href: e.link, title: e.productName },
                                        s.default.createElement(
                                            "div",
                                            { className: "shelf-images" },
                                            s.default.createElement(
                                                "div",
                                                { className: "mult-images" },
                                                s.default.createElement("p", {
                                                    className: "image-main",
                                                    dangerouslySetInnerHTML: {
                                                        __html: e.imageTag
                                                            .replace(/\~/, "")
                                                            .replace(/#width#/gi, 331)
                                                            .replace(/#height#/gi, 440),
                                                    },
                                                })
                                            ),
                                            s.default.createElement("div", { className: "btn-buy" }, s.default.createElement("p", { className: "btn-text" }, "Comprar"))
                                        )
                                    ),
                                    s.default.createElement(
                                        "div",
                                        { className: "data" },
                                        s.default.createElement(
                                            "a",
                                            { "data-product-id": e.productId, href: e.link, title: e.productName },
                                            s.default.createElement("div", { className: "item-info" }, s.default.createElement("h3", { className: "product-name" }, e.productName)),
                                            s.default.createElement(
                                                "p",
                                                { className: "product-price" },
                                                e.listPrice > e.price && s.default.createElement("em", { className: "list-price" }, s.default.createElement("strong", null, (0, r.default)(e.listPrice).format("$0,0.00"))),
                                                "0" != e.price && s.default.createElement("em", { className: "best-price" }, s.default.createElement("strong", null, (0, r.default)(e.price).format("$0,0.00"))),
                                                "0" == e.price && s.default.createElement("span", { className: "out-of-stock" }, "Produto Esgotado")
                                            ),
                                            e.installments > 1 &&
                                                s.default.createElement(
                                                    "p",
                                                    { className: "installments" },
                                                    "ou atÃƒÂ©",
                                                    " ",
                                                    s.default.createElement("strong", null, e.installments),
                                                    "x de",
                                                    " ",
                                                    s.default.createElement("strong", null, (0, r.default)(e.parcelValue).format("$0,0.00"))
                                                )
                                        )
                                    ),
                                    s.default.createElement(
                                        "div",
                                        { className: "promo-flags" },
                                        e.discount > 0 && s.default.createElement("p", { className: "flag discount-percent active" }, e.discount, s.default.createElement("br", null), "%")
                                    )
                                )
                            );
                        })
                    );
                };
            t.default = l;
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            i(195);
        },
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            i(197), i(198), i(199);
        },
        function (e, t) {},
        function (e, t) {},
        function (e, t) {},
        function (e, t, i) {
            "use strict";
            i(201);
        },
        function (e, t) {},
        function (e, t) {},
    ],
    [112]
);
