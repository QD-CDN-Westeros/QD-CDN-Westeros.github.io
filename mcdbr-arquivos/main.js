! function (e) {
    var t = {};

    function o(a) {
        if (t[a])
            return t[a].exports;
        var n = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(n.exports, n, n.exports, o),
            n.l = !0,
            n.exports
    }
    o.m = e,
        o.c = t,
        o.d = function (e, t, a) {
            o.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: a
            })
        },
        o.n = function (e) {
            var t = e && e.__esModule ? function () {
                    return e.default
                } :
                function () {
                    return e
                };
            return o.d(t, "a", t),
                t
        },
        o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        o.p = "",
        o(o.s = 3)
}([function (e, t, o) {
    "use strict";
    o.d(t, "a", function () {
        return a
    });
    var a = function () {
        function e() {}
        return e.prototype.simulate = function (e, t) {
                var o = {
                    items: [{
                        id: 26,
                        quantity: 1,
                        seller: 1
                    }],
                    postalCode: null,
                    geoCoordinates: [e, t],
                    country: "BRA"
                };
                return $.ajax({
                    url: "/api/checkout/pub/orderForms/simulation",
                    type: "POST",
                    dataType: "JSON",
                    contentType: "application/json",
                    data: JSON.stringify(o)
                })
            },
            e.prototype.number_format = function (e, t, o, a) {
                var n;
                return e = (e + "").replace(/[^0-9+\-Ee.]/g, ""),
                    e = isFinite(+e) ? +e : 0,
                    t = isFinite(+t) ? Math.abs(t) : 0,
                    a = void 0 === a ? "," : a,
                    o = void 0 === o ? "." : o,
                    n = function (e, t) {
                        var o = Math.pow(10, t);
                        return "" + (Math.round(e * o) / o).toFixed(t)
                    },
                    3 < (n = (t ? n(e, t) : "" + Math.round(e)).split("."))[0].length && (n[0] = n[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, a)),
                    (n[1] || "").length < t && (n[1] = n[1] || "",
                        n[1] += Array(t - n[1].length + 1).join("0")),
                    n.join(o)
            },
            e.prototype.getParameter = function (e, t) {
                if (void 0 === e)
                    return "";
                var o = e.match("[?&]" + t + "=([^&]+)");
                return o ? o[1] : null
            },
            e.prototype.getUrlParameter = function (e) {
                return decodeURIComponent((new RegExp("[?|&]" + e + "=([^&;]+?)(&|#|;|$)").exec(window.location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null
            },
            e.prototype.logout = function () {
                for (var e = ["VtexIdclientAutCookie", "vtex-current-user", "vtex.segment", "vtex.segment.manager", "vtex.session", "vtex.session.manager", "vtex_segment", "vtex_session"], t = 0; t < e.length; t++)
                    document.cookie = e[t] + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT;domain=" + window.location.hostname + ";path=/";
                for (var o = document.cookie.split("; "), a = 0; a < o.length; a++)
                    for (var n = String("." + window.location.hostname).split("."); n.length > 0;) {
                        var i = encodeURIComponent(o[a].split(";")[0].split("=")[0]) + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=" + n.join(".") + " ;path=",
                            r = location.pathname.split("/");
                        for (document.cookie = i + "/",
                            console.log(i + "/"); r.length > 0;)
                            document.cookie = i + r.join("/"),
                            r.pop();
                        n.shift()
                    }
                $.get(window.vtexjs.checkout.getLogoutURL()),
                    $.get("/no-cache/user/logout"),
                    window.vtexjs.checkout.removeAllItems(),
                    setTimeout(function () {
                        window.location.replace("/Sistema/401")
                    }, 500)
            },
            e.prototype.slugify = function (e) {
                e = (e = e.replace(/^\s+|\s+$/g, "")).toLowerCase();
                for (var t = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;", o = 0, a = t.length; o < a; o++)
                    e = e.replace(new RegExp(t.charAt(o), "g"), "aaaaeeeeiiiioooouuuunc------".charAt(o));
                return e = e.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")
            },
            e.prototype.formatPrice = function (e) {
                var t = e / 100,
                    o = window.localeInfo.CurrencyLocale.Format.CurrencyDecimalDigits,
                    a = window.localeInfo.CurrencyLocale.Format.CurrencyDecimalSeparator,
                    n = window.localeInfo.CurrencyLocale.Format.CurrencyGroupSeparator;
                o = isNaN(o = Math.abs(o)) ? 2 : o,
                    a = void 0 == a ? "." : a,
                    n = void 0 == n ? "," : n;
                var i, r = t < 0 ? "-" : "",
                    s = String(parseInt(t = Math.abs(Number(t) || 0).toFixed(o)));
                return r + ((i = (i = s.length) > 3 ? i % 3 : 0) ? s.substr(0, i) + n : "") + s.substr(i).replace(/(\d{3})(?=\d)/g, "$1" + n) + (o ? a + Math.abs(t - s).toFixed(o).slice(2) : "")
            },
            e.prototype.setCookie = function (e, t, o, a) {
                void 0 === a && (a = location.hostname);
                var n = new Date;
                n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3);
                var i = "expires=" + n.toUTCString();
                document.cookie = e + "=" + t + "; Domain=" + a + ";" + i + ";path=/"
            },
            e.prototype.getCookie = function (e) {
                for (var t = e + "=", o = document.cookie.split(";"), a = 0; a < o.length; a++) {
                    for (var n = o[a];
                        " " == n.charAt(0);)
                        n = n.substring(1);
                    if (0 == n.indexOf(t))
                        return n.substring(t.length, n.length)
                }
                return ""
            },
            e.prototype.removeCookie = function (e, t) {
                void 0 === t && (t = location.hostname),
                    document.cookie = e + "=; Path=/; Domain=" + t + "; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
            },
            e.prototype.now = function () {
                return (new Date).toISOString()
            },
            e.prototype.dateDiff = function (e, t) {
                var o = new Date(e),
                    a = new Date(t);
                return Math.round((a - o) / 864e5)
            },
            e.prototype.daysInMonth = function (e, t) {
                return new Date(t, e, 0).getDate()
            },
            e.prototype.dateFormat = function (e) {
                var t;
                return -1 !== e.indexOf("/") ? (t = e.split("/"))[2] + "-" + t[1] + "-" + t[0] : -1 !== e.indexOf("T") ? (t = e.split("T"))[0] : ""
            },
            e.prototype.currencyFormat = function (e) {
                var t = e < 0 ? "-" : "",
                    o = String(parseInt(e = Math.abs(Number(e) || 0).toFixed(2))),
                    a = o.length;
                return t + ((a = a > 3 ? a % 3 : 0) ? o.substr(0, a) + "." : "") + o.substr(a).replace(/(\d{3})(?=\d)/g, "$1.") + "," + Math.abs(e - parseInt(o)).toFixed(2).slice(2)
            },
            e.prototype.isOrderFormEqual = function (e, t, o) {
                void 0 === o && (o = !1);
                var a = !0;
                if (o)
                    return e === t;
                if (e.length === t.length)
                    for (var n = 0; n < e.length; n++)
                        a && (a = e[n].id === t[n].id && e[n].quantity == e[n].quantity && e[n].sellingPrice === t[n].sellingPrice);
                return a
            },
            e.prototype.insertScript = function (e, t) {
                void 0 === t && (t = "body");
                var o = e,
                    a = document.getElementsByTagName(t)[0],
                    n = setInterval(function () {
                        if (a) {
                            clearInterval(n);
                            for (var e = 0; e < o.length; e++) {
                                var t = document.createElement("script");
                                t.async = !0,
                                    t.src = o[e],
                                    a.appendChild(t)
                            }
                        }
                    }, 300)
            },
            e.prototype.b64toBlob = function (e, t, o) {
                void 0 === t && (t = ""),
                    void 0 === o && (o = 512);
                for (var a = window.atob(e), n = [], i = 0; i < a.length; i += o) {
                    for (var r = a.slice(i, i + o), s = new Array(r.length), d = 0; d < r.length; d++)
                        s[d] = r.charCodeAt(d);
                    var c = new Uint8Array(s);
                    n.push(c)
                }
                return new Blob(n, {
                    type: t
                })
            },
            e.prototype.splitArrayInEqualParts = function (e, t) {
                for (var o = Math.ceil(e.length / t), a = [], n = 0; n < o; n++)
                    a.push(e.slice(n * t, (n + 1) * t));
                return a
            },
            e.prototype.imageToDataURL = function (e, t, o) {
                void 0 === t && (t = function () {}),
                    void 0 === o && (o = "image/png");
                var a = new Image;
                a.crossOrigin = "Anonymous",
                    a.onload = function () {
                        var e, n = document.createElement("canvas"),
                            i = n.getContext("2d");
                        n.height = a.naturalHeight,
                            n.width = a.naturalWidth,
                            i.drawImage(a, 0, 0),
                            e = n.toDataURL(o),
                            t(e)
                    },
                    a.src = e
            },
            e
    }()
}, function (e, t, o) {
    "use strict";
    o.d(t, "a", function () {
        return n
    });
    var a = o(0),
        n = function () {
            function e() {
                this.Utils = new a.a,
                    this.Storage = {
                        set: function (e, t) {
                            return window.sessionStorage.setItem(e, JSON.stringify(t)),
                                t
                        },
                        get: function (e) {
                            return "undefined" !== window.sessionStorage.getItem(e) ? JSON.parse(window.sessionStorage.getItem(e)) : null
                        },
                        remove: function (e) {
                            return window.sessionStorage.removeItem(e)
                        }
                    },
                    window.MCDGlobal = window.MCDGlobal || {},
                    window.MCDGlobal.simulate = this.Utils.simulate,
                    window.MCDGlobal.dockId = window.localStorage.getItem("dockId") || "",
                    window.MCDGlobal.address = JSON.parse(window.localStorage.getItem("address") || "{}"),
                    window.MCDGlobal.setClosest = this.setClosest,
                    window.MCDGlobal.Storage = this.Storage
            }
            return e.prototype.header = function () {
                    var e = $('<span class="mcd-mobile-header-search-close"><img src="/arquivos/xAmarillo.png" alt="Botão fechar"></span>');
                    $(".mcd-mobile-header-search-btn").click(function () {
                            $(".mcd-mobile-header-search").show()
                        }),
                        e.click(function () {
                            $(".mcd-mobile-header-search").hide()
                        }),
                        setTimeout(function () {
                            $(".mcd-mobile-header-search fieldset").append(e)
                        }, 2e3),
                        $(".mcd-mobile-header-cart-btn").click(function () {
                            window.location.href = "/checkout/#cart"
                        }),
                        $(window).on("orderFormUpdated.vtex", function (e, t) {
                            var o = 0;
                            t.items.map(function (e) {
                                    o += e.quantity
                                }),
                                1 === o.toString().length && (o = "0" + o),
                                $(".mcd-mobile-header-cart-value").text(o);
                            var a = JSON.parse(window.localStorage.getItem("shippingData"));
                            try {
                                (t.items.length && t.shippingData && t.shippingData.logisticsInfo && t.shippingData.logisticsInfo.length && t.shippingData.logisticsInfo[0].selectedSla && t.shippingData.logisticsInfo[0].selectedSla !== a.logisticsInfo[0].selectedSla || t.items.length && (!t.shippingData || !t.shippingData.logisticsInfo.length)) && window.vtexjs.checkout.sendAttachment("shippingData", a)
                            } catch (e) {
                                console.log(e)
                            }
                        }),
                        window.vtexjs.checkout.getOrderForm().done(function (e) {
                            var t = 0;
                            e.items.map(function (e) {
                                    t += e.quantity
                                }),
                                1 === t.toString().length && (t = "0" + t),
                                $(".mcd-mobile-header-cart-value").text(t)
                        })
                },
                e.prototype.changeHeader = function () {
                    // window.vtxctx.categoryName && window.vtxctx.searchTerm ? $(".mcd-mobile-header-title").text(window.vtxctx.searchTerm) : $(".mcd-mobile-header-title").text(window.vtxctx.categoryName)
                    var headerText = "";
                    if ($("body").is("#mcmenu-page")) {
                        headerText = "McMenu";
                        $(".mcd-mobile-header-title").text(headerText);
                        $(".mcd-mobile-header-title").show();
                    } else if ($("body").is(".resultado-busca")) {
                        headerText = "Busca"
                        $(".mcd-mobile-header-title").text(headerText);
                        $(".mcd-mobile-header-title").show();
                    } else if (window.vtxctx.categoryName) {
                        headerText = window.vtxctx.categoryName;
                        $(".mcd-mobile-header-title").text(headerText);
                        $(".mcd-mobile-header-title").show();
                    } else {
                        $.ajax({
                                url: "/menu/regular",
                                method: "get"
                            })
                            .done(function (response) {
                                var ul = $(response).find("ul");
                                if (ul.length) {
                                    $(ul[0].children).each(function () {
                                        if (window.location.pathname == this.children[0].attributes[0].nodeValue.split("?")[0]) {
                                            headerText = this.children[0].children[0].children[0].innerText;
                                            $(".mcd-mobile-header-title").text(headerText);
                                            $(".mcd-mobile-header-title").show();
                                        }
                                    });
                                }
                            });
                    }

                },
                e.prototype.shippingOnCart = function () {
                    var e = this;
                    ($(".cartFooter .cartTotal .shippingTotal").length < 1 || $(".product-price__wrapper .shippingTotal").length < 1) && $('<div class="shippingTotal"></div>').insertBefore(".cartFooter .cartTotal, .product-price__wrapper .product-price"),
                        $(window).on("orderFormUpdated.vtex", function (t, o) {
                            $(o.totalizers).each(function () {
                                    if ("Shipping" == $(this)[0].id) {
                                        var t = $(this)[0].value;
                                        setTimeout(function () {
                                            $(".cartFooter .shippingTotal, .product-price__wrapper .shippingTotal").html('<span class="shippingText">Frete<span class="shippingValue">R$ ' + e.Utils.number_format(t / 100, 2, ",", ".") + "</span></span>")
                                        }, 500)
                                    }
                                }),
                                $(".portal-minicart-ref").addClass("cart-loading"),
                                setTimeout(function () {
                                    $(".vtexsc-text").each(function (t, o) {
                                            $(this).text("R$ " + e.Utils.number_format(window.vtexjs.checkout.orderForm.value / 100, 2, ",", "."))
                                        }),
                                        $('<div class="shippingTotal"></div>').insertBefore(".cartFooter .cartTotal")
                                }, 50),
                                setTimeout(function () {
                                    $(".portal-minicart-ref").removeClass("cart-loading")
                                }, 500),
                                document.cookie = "MCD_address=" + escape(window.MCDGlobal.address.formatted_address)
                        })
                },
                e.prototype.menu = function () {
                    window.MCDGlobal.Menu = {
                            tree: null,
                            breakfestStart: "",
                            breakfestEnds: "",
                            checkBreakFest: function () {
                                window.MCDGlobal.Menu.checkBreakfestDocks().done(function (e) {
                                    var t = (new Date).getHours(),
                                        o = "",
                                        a = function (e) {
                                            window.MCDGlobal.Menu.tree = e[0],
                                                $("body").hasClass("sidecart") ? $(".category-page .container .menu-content").html(e) : $(".category-page .container").html(e),
                                                $(".category-page").length && window.MCDGlobal.Menu.setScrollingMenu()
                                        },
                                        n = "MCD-Menu-" + (o = t < window.MCDGlobal.Menu.breakfestStart || t >= window.MCDGlobal.Menu.breakfestEnds ? "Regular" : "Desayuno"),
                                        i = window.localStorage.getItem(n),
                                        r = function () {
                                            $.ajax({
                                                type: "GET",
                                                url: "/Menu/" + o,
                                                cache: !1,
                                                success: function (e) {
                                                    var t = $(e).find("ul");

                                                    t.length ? (window.localStorage.setItem(n, JSON.stringify({
                                                                ts: (new Date).getTime(),
                                                                res: e
                                                            })),
                                                            a(t)) :
                                                        setTimeout(function () {
                                                            r()
                                                        }, 1e3)
                                                }
                                            })
                                        };
                                    if (i) {
                                        var s = JSON.parse(i);
                                        s.ts > (new Date).getTime() - 18e5 ? a(s.res) : r()
                                    } else
                                        r()
                                })
                            },
                            init: function () {

                                null !== window.MCDGlobal.address.closest ? window.vtexjs.checkout.getOrderForm().then(function (e) {
                                    if (e.shippingData) {
                                        window.MCDGlobal.dockId = window.MCDGlobal.address.closest ? window.MCDGlobal.address.closest.deliveryIds[0].dockId : null;
                                        var t = window.MCDGlobal.dockId ? window.MCDGlobal.dockId : e.shippingData.logisticsInfo.length && e.shippingData.logisticsInfo[0].slas.length ? e.shippingData.logisticsInfo[0].slas[0].deliveryIds[0].dockId : "GRU";
                                        console.log("dockId A ", t),
                                            window.MCDGlobal.Menu.checkOperation(t);
                                    }
                                }) : window.MCDGlobal.simulate(window.MCDGlobal.address.lng, window.MCDGlobal.address.lat).done(function (e) {
                                    // if (window.MCDGlobal.setClosest(e),
                                    //     void 0 != e.logisticsInfo[0].slas[0]) {
                                    //     var t = e.logisticsInfo[0].slas[0].id;
                                    //     console.log("dockId B", t),
                                    //         window.MCDGlobal.Menu.checkOperation(t)
                                    // }
                                    if (void 0 != e.logisticsInfo[0].slas[0]) {
                                        var t = e.logisticsInfo[0].slas[0].id;
                                        console.log("dockId B", t),
                                            window.MCDGlobal.Menu.checkOperation(t)
                                    }
                                });
                                //Forçando reset do localStorage na pagina inicial (Evitar bug de quando usuário não digitar nenhum endereço, o ultimo endereço seja usado)
                                if ($("body.home").length > 0) {
                                    console.log(">0")
                                    var e = Object.getOwnPropertyNames(window.localStorage);
                                    e.length && e.forEach(function (e) {
                                        window.localStorage.removeItem(e);
                                    });
                                    $(".mcd-home-search-area button").attr({
                                        disabled: !0
                                    });
                                }
                            },
                            checkBreakfestDocks: function (e) {
                                var t = e || !1,
                                    o = window.MCDGlobal.Storage.get("breakfest") || {
                                        start: 9,
                                        ends: 11
                                    },
                                    a = jQuery.Deferred();
                                if (null === window.MCDGlobal.address.closest || null !== o && !0 !== t)
                                    return window.MCDGlobal.Menu.breakfestStart = o.start,
                                        window.MCDGlobal.Menu.breakfestEnds = o.ends,
                                        a.resolve({
                                            start: window.MCDGlobal.Menu.breakfestStart,
                                            ends: window.MCDGlobal.Menu.breakfestEnds
                                        }),
                                        a.promise();
                                if (window.MCDGlobal.address.closest) {
                                    var n = window.MCDGlobal.address.closest.id,
                                        i = {
                                            async: !0,
                                            crossDomain: !0,
                                            url: "/api/dataentities/RS/search?_fields=dock_id,breakfest_start,breakfest_end&_where=dock_id=" + n,
                                            method: "GET",
                                            headers: {
                                                "content-type": "application/json",
                                                accept: "application/vnd.vtex.ds.v10+json",
                                                "rest-range": "resources=0-1000"
                                            }
                                        };
                                    return $.ajax(i).done(function (e) {
                                        $(e).each(function (e, t) {
                                                var o = $(t)[0].dock_id;
                                                n == o && (window.MCDGlobal.Menu.breakfestStart = $(this)[0].breakfest_start.replace(":00", ""),
                                                    window.MCDGlobal.Menu.breakfestEnds = $(this)[0].breakfest_end.replace(":00", ""))
                                            }),
                                            window.MCDGlobal.Storage.set("breakfest", {
                                                start: window.MCDGlobal.Menu.breakfestStart,
                                                ends: window.MCDGlobal.Menu.breakfestEnds
                                            })
                                    })
                                }
                            },
                            checkOperation: function (e) {
                                console.log("Regular");
                                return $.ajax({
                                    url: "https://mcdbr.myvtex.com/api/io/checking_hours/checking?restaurant=" + e,
                                    type: "GET",
                                    dataType: "json",
                                    headers: {
                                        Accept: "application/vnd.vtex.ds.v10+json"
                                    }
                                }).done(function (e) {
                                    var t = "Regular";
                                    //mz
                                    window.localStorage.setItem("isOpen", e.data.operational);
                                    1 == e.data.operational ? $("body").removeClass("no-working") : ($("body").is(".no-delivery") ? $("body").removeClass("no-working") : $("body").addClass("no-working"),
                                            e.data.operation && ($(".McCheckOperation .mcd-check-operation-start").text(e.data.operation.start),
                                                $(".McCheckOperation .mcd-check-operation-end").text(e.data.operation.end))),
                                        e.data.breakfast && (t = "Desayuno");
                                    var o = function (e) {
                                            var t = $(e).find("ul");

                                            /*MZ menuFIx */
                                            var length = t.find("li").length;
                                            var menuFix = $('<li><a><figure><figcaption></figcaption></figure></a></li>').css({
                                                display: "none"
                                            });
                                            menuFix.find("a").css({
                                                opacity: 0,
                                                cursor: "default"
                                            });
                                            if ($(window).width() < 975) {
                                                if (length % 2 != 0) {
                                                    menuFix.css({
                                                        display: "list-item"
                                                    });
                                                }
                                            } else {
                                                if (length % 3 != 0) {
                                                    menuFix.css({
                                                        display: "list-item"
                                                    });
                                                }
                                            }

                                            window.MCDGlobal.Menu.tree = t[0],
                                                $("body").hasClass("sidecart") ? $(".category-page .container .menu-content").html(t.append(menuFix)) : $(".category-page .container").html(t.append(menuFix)),
                                                $(".category-page").length && window.MCDGlobal.Menu.setScrollingMenu();
                                        },
                                        a = function () {
                                            $.ajax({
                                                type: "GET",
                                                url: "/Menu/" + t,
                                                success: function (e) {
                                                    window.localStorage.setItem(n, JSON.stringify({
                                                            ts: (new Date).getTime(),
                                                            res: e
                                                        })),
                                                        o(e);
                                                }
                                            })
                                        },
                                        n = "MCD-Menu-" + t,
                                        i = window.localStorage.getItem(n);
                                    if (i) {
                                        var r = JSON.parse(i);
                                        r.ts > (new Date).getTime() - 18e5 ? o(r.res) : a()
                                    } else
                                        a()
                                })
                            },
                            build: function () {
                                var e = window.MCDGlobal.Menu.tree;
                                $(".category-page").length && ($(".category-page").html(e),
                                    window.MCDGlobal.Menu.setScrollingMenu())
                            },
                            setScrollingMenu: function () {
                                if ($("body#plp, body.product").length) {
                                    var e = window.vtxctx.categoryName || window.vtxctx.searchTerm,
                                        t = null;
                                    $(".scrolling-menu-wrapper .category-page").width();
                                    $(".category-page a").removeClass("active"),
                                        void 0 !== e && (e = $.trim(e.toLowerCase()),
                                            $(".category-page a").each(function (o, a) {
                                                var n = String($(a).text().trim()).toLowerCase();
                                                "desayuno" == n && (n = "desayunos"),
                                                    n !== e && n !== function (e) {
                                                        var t = null;
                                                        switch (e) {
                                                            case "mclanche feliz":
                                                                t = "mclanche feliz®";
                                                                break;
                                                            case "frango-crocante":
                                                                t = "frango";
                                                                break;
                                                            case "mcofertas-do-dia":
                                                                t = "mcoferta do dia"
                                                        }
                                                        return t
                                                    }(e) || (t = a)
                                            }),
                                            $(t).addClass("active"),
                                            Object.keys($(t).offset() || 0).length && $(".category-page").animate({
                                                scrollLeft: $(t).offset().left - 395
                                            }, 500)),
                                        $(".scrolling-menu-wrapper .category-page ul").after('<div id="menu-nav"><button id="left-arrow" class="hideit"></button><button id="right-arrow"></button></div>');
                                    var o = $(".category-page").width(),
                                        a = $(".category-page ul").offset().left;
                                    a >= 0 && $("#left-arrow").fadeOut(),
                                        $("#left-arrow").on("click", function (e) {
                                            a = $(".category-page ul").offset().left,
                                                $(".category-page").animate({
                                                    scrollLeft: -(a + o)
                                                }, 500)
                                        }),
                                        $("#right-arrow").on("click", function (e) {
                                            0 == (a = $(".category-page ul").offset().left) ? ($("#left-arrow").fadeOut(),
                                                $(".category-page").animate({
                                                    scrollLeft: a + o
                                                }, 500)) : $(".category-page").animate({
                                                scrollLeft: -(a - o)
                                            }, 500)
                                        }),
                                        $(".category-page").on("scroll", function (e) {
                                            (a = $(".category-page ul").offset().left) >= 0 ? $("#left-arrow").fadeOut() : $("#left-arrow").fadeIn(),
                                                a - o == -$(".category-page ul").width() ? $("#right-arrow").fadeOut() : $("#right-arrow").fadeIn()
                                        })
                                }
                            }
                        },
                        window.MCDGlobal.Menu.init()
                },
                e.prototype.setClosest = function (e) {
                    $("body").removeClass("no-delivery"),
                        window.MCDHome.address.closest = null,
                        e.items ? e.messages.length ? ($("body").removeClass("no-working"),
                            $("body").addClass("no-delivery"),
                            window.MCDHome.addressModal.modal()) : (window.MCDHome.address.closest = e.logisticsInfo,
                            window.localStorage.setItem("address", JSON.stringify(window.MCDHome.address)),
                            window.MCDHome.Menu.checkBreakfestDocks(!0)) : ($("body").removeClass("no-working"),
                            $("body").addClass("no-delivery"),
                            window.MCDHome.addressModal.modal()),
                        null !== window.MCDHome.address.closest && $("body").addClass("has-delivery")
                },
                e
        }()
}, function (e, t, o) {
    "use strict";
    o.d(t, "a", function () {
        return n
    });
    var a = o(0),
        n = function () {
            function e() {
                if (this.Utils = new a.a,
                    this.clearSession = function () {
                        window.vtexjs.checkout.removeAllItems(),
                            window.localStorage.removeItem("address"),
                            window.localStorage.removeItem("dockId"),
                            window.MCDHome.address = {},
                            window.MCDHome.dockId = "",
                            window.MCDHome.address = JSON.parse(window.localStorage.getItem("address") || "{}"),
                            $.get(window.vtexjs.checkout.getLogoutURL()),
                            $.get("/no-cache/user/logout"),
                            $("#autocomplete").val(""),
                            $("#city option:selected").removeAttr("selected"),
                            $(".mcd-home-search-area button").attr({
                                disabled: !0
                            }),
                            window.MCDHome.closeModal()
                    },
                    this.closeModal = function () {
                        $(".modal-callcenter").fadeOut()
                    },
                    this.initAutocomplete = function () {
                        
                        //verificando se endereço do orderForm é diferente do que está no topo da tela
                        //se é diferente, ajuste o endereço do topo
                        // localStorage.removeItem("newAddress");
                        if (window.localStorage.shippingData) {
                            console.log("hueheuheue");
                            var sp = JSON.parse(window.localStorage.shippingData);
                            if (sp.address.street.includes("undefined")) {
                                window.vtexjs.checkout.getOrderForm().done(function (orderForm) {
                                    var ofAddress = orderForm.shippingData.address;
                                    //formatando novo address
                                    var newAddress = (ofAddress.street ? ofAddress.street + ", " : "") +
                                        (ofAddress.neighborhood ? ofAddress.neighborhood + ", " : "") +
                                        (ofAddress.city ? ofAddress.city + " - " : "") +
                                        (ofAddress.state ? ofAddress.state + ", " : "") +
                                        (ofAddress.postalCode ? ofAddress.postalCode + ", " : "") +
                                        (ofAddress.country == "BRA" ? "Brasil" : ofAddress.country);
                                    window.localStorage.setItem("newAddress", newAddress);
                                    $(".edit-address").length && $(".edit-address .address").append(newAddress);
                                });                                
                            } else{
                                $(".edit-address").length && $(".edit-address .address").append(window.MCDHome.address.formatted_address);
                            }
                        }else {
                            $(".edit-address").length && $(".edit-address .address").append(window.MCDHome.address.formatted_address);
                        }

                        //iniciado em toda pagina
                        $("#autocomplete").length && (window.MCDHome.autocomplete = new window.google.maps.places.Autocomplete(window.document.getElementById("autocomplete"), {
                                    types: ["geocode"]
                                }),
                                window.MCDHome.autocomplete.setComponentRestrictions({
                                    country: ["BR"]
                                }),
                                window.MCDHome.autocomplete.addListener("place_changed", window.MCDHome.fillInAddress),
                                void 0 !== window.MCDHome.address.formatted_address
                                //Desativando repreencher o endereço com os dados salvos quando voltar a pag inicial
                                &&
                                $("#autocomplete").val(window.MCDHome.address.formatted_address)
                            ),
                            void 0 !== window.MCDHome.address.formatted_address && null === window.MCDHome.address.closest && $("body").addClass("no-delivery"),
                            null !== window.MCDHome.address.closest && $("body").addClass("has-delivery"),
                            void 0 === window.MCDHome.address.formatted_address && $(".mcd-home-search-area button").attr({
                                disabled: !0
                            })
                        //mudando pra dentro da verificação do endereço
                        // ,
                        // $(".edit-address").length && $(".edit-address .address").append(window.MCDHome.address.formatted_address);
                        var e = document.getElementById("autocomplete"),
                            t = function () {
                                $(".pac-container").css({
                                    marginTop: "-" + ($(".pac-container").height() + $("#autocomplete").height()) + "px"
                                })
                            };
                        if (e) {
                            e.addEventListener("blur", function (e) {
                                    setTimeout(function () {
                                        ! function (e, t) {
                                            console.log("el", $(e.currentTarget).val()),
                                                console.log("window.MCDHome.address.formatted_address", t.formatted_address),
                                                console.log("typeof", void 0 === t.formatted_address, !t.formatted_address),
                                                "" !== $(e.currentTarget).val() && void 0 === t.formatted_address && (0 === $(".pac-container .warning").length && $(".pac-container").prepend('<div class="pac-item warning">Por favor, escolha o endereço da lista, sem o complemento</div>'),
                                                    setTimeout(function () {
                                                        $(".pac-container").show(),
                                                            $(e.currentTarget).focus()
                                                    }, 300),
                                                    console.log("Não selecionou o endereço na lista"))
                                        }(e, window.MCDHome.address)
                                    }, 700)
                                }, !1),
                                $(window).width() <= 768 && (e.addEventListener("focus", t, !1),
                                    e.addEventListener("keyup", t, !1),
                                    e.addEventListener("keydown", t, !1))
                        }
                        $("#mcd-address-modal .McEntregaUnavailable-back").click(function () {
                                $("#mcd-address-modal").modal("hide"),
                                    $("#autocomplete").val("").trigger("change").next().attr({
                                        disabled: !0
                                    })
                            }),
                            $(".mcd-home-search-area button").off("click").on("click", function (e) {
                                e.preventDefault(),
                                    window.MCDHome.setAddress()
                            })
                    },
                    this.setClosest = function (e) {
                        if ($("body").removeClass("no-delivery"),
                            window.MCDHome.address.closest = null,
                            e.items)
                            if (e.messages.length)
                                $("body").removeClass("no-working"),
                                $("body").addClass("no-delivery"),
                                window.MCDHome.addressModal.modal();
                            else {
                                var t = e.logisticsInfo[0].slas[0];
                                e.logisticsInfo[0].slas && e.logisticsInfo[0].slas.length && e.logisticsInfo[0].slas.length > 1 && (t = e.logisticsInfo[0].slas[Math.floor(Math.random() * e.logisticsInfo[0].slas.length)]),
                                    window.MCDHome.address.closest = t,
                                    window.localStorage.setItem("address", JSON.stringify(window.MCDHome.address)),
                                    //settando address aqui para evitar bug de quando a loja estiver fechada, atrapalhar comportamento do modal
                                    window.MCDHome.setAddress(false),
                                    /**MZ window.MCDHome.checkOperation */
                                    window.MCDGlobal.Menu.checkOperation(t.deliveryIds[0].dockId).then(function (e) {
                                        e.data.operational || window.MCDHome.addressModal.modal()
                                    })
                            }
                        else
                            $("body").removeClass("no-working"),
                            $("body").addClass("no-delivery"),
                            window.MCDHome.addressModal.modal();
                        null !== window.MCDHome.address.closest && $("body").addClass("has-delivery")
                    },
                    this.fillInAddress = function () {
                        var e = Object.getOwnPropertyNames(window.localStorage);
                        e.length && e.forEach(function (e) {
                            window.localStorage.removeItem(e)
                        });
                        var t = window.MCDHome.autocomplete.getPlace();
                        $(".pac-container").hide(),
                            console.log("fillInAddress", t),
                            window.MCDHome.address = {};
                        for (var o = 0; o < t.address_components.length; o++) {
                            var a = t.address_components[o].types[0];
                            if (window.MCDHome.componentForm[a]) {
                                var n = t.address_components[o][window.MCDHome.componentForm[a]];
                                window.MCDHome.address[a] = n
                            }
                        }
                        window.MCDHome.address.formatted_address = t.formatted_address,
                            window.MCDHome.address.lat = t.geometry.location.lat(),
                            window.MCDHome.address.lng = t.geometry.location.lng(),
                            window.MCDHome.address.closest = null,
                            window.localStorage.setItem("address", JSON.stringify(window.MCDHome.address)),
                            window.MCDHome.simulate(window.MCDHome.address.lng, window.MCDHome.address.lat).done(function (e) {
                                window.MCDHome.setClosest(e)
                            })
                            // ,
                            // $(".mcd-home-search-area button").attr({
                            //     disabled: !1
                            // })

                    },
                    this.setAddress = function (goToMenu=true) {
                        //Com CEP e País, é possível retornar a rua
                        var e = {
                            address: {
                                street: window.MCDHome.address.route + " " + String(window.MCDHome.address.formatted_address),
                                state: window.MCDHome.address.administrative_area_level_1,
                                city: function (e) {
                                    switch (e) {
                                        case "SP":
                                            return "São Paulo";
                                        case "RJ":
                                            return "Rio de Janeiro"
                                    }
                                    return e
                                }(window.MCDHome.address.locality || window.MCDHome.address.administrative_area_level_1),
                                geoCoordinates: [window.MCDHome.address.lng, window.MCDHome.address.lat],
                                country: "BRA",
                                addressQuery: window.MCDHome.address.formatted_address,
                                neighborhood: window.MCDHome.address.neighborhood,
                                isPostalCodeValid: !!window.MCDHome.address.postal_code,
                                geoCoordinatesIsValid: !0,
                                useGeolocationSearch: !0,
                                addressType: "residential",
                                complement: "",
                                reference: null,
                                number: window.MCDHome.address.street_number ? window.MCDHome.address.street_number : "",
                                receiverName: null,
                                postalCode: window.MCDHome.address.postal_code
                            },
                            logisticsInfo: [{
                                itemIndex: 0,
                                selectedSla: window.MCDHome.address.closest.id,
                                selectedDeliveryChannel: window.MCDHome.address.closest.deliveryChannel
                            }]
                        };
                        window.localStorage.setItem("shippingData", JSON.stringify(e))
                        // ,
                        //     $(".mcd-home-search-area button").addClass("loading").attr({
                        //         disabled: !0
                        //     }),
                            console.log("E disabled:", !0);
                        var t = function () {
                            $(".mcd-home-search-area button").removeClass("loading").attr({
                                    disabled: !1
                                })
                                ,
                               window.localStorage.isOpen&&goToMenu?
                                window.location.href = "/mcmenu":""
                        };
                        JSON.parse(window.localStorage.getItem("address"));
                        window.vtexjs.checkout.getOrderForm().then(function () {
                            return delete e.logisticsInfo, window.vtexjs.checkout.sendAttachment("shippingData", e)
                        }).then(function () {
                            t()
                        }).fail(function () {
                            t()
                        })
                    },
                    this.geolocate = function () {
                        navigator.geolocation && navigator.geolocation.getCurrentPosition(function (e) {
                            var t = {
                                    lat: e.coords.latitude,
                                    lng: e.coords.longitude
                                },
                                o = new window.google.maps.Circle({
                                    center: t,
                                    radius: e.coords.accuracy
                                });
                            window.MCDHome.autocomplete.setBounds(o.getBounds())
                        })
                    },
                    this.Storage = {
                        set: function (e, t) {
                            return window.sessionStorage.setItem(e, JSON.stringify(t)),
                                t
                        },
                        get: function (e) {
                            return "undefined" !== window.sessionStorage.getItem(e) ? JSON.parse(window.sessionStorage.getItem(e)) : null
                        },
                        remove: function (e) {
                            return window.sessionStorage.removeItem(e)
                        }
                    },
                    window.MCDHome = window.MCDHome || {},
                    window.MCDHome.componentForm = {
                        street_number: "short_name",
                        route: "long_name",
                        locality: "long_name",
                        administrative_area_level_1: "short_name",
                        country: "short_name",
                        neighborhood: "long_name",
                        postal_code: "short_name"
                    },
                    window.MCDHome.dockId = window.localStorage.getItem("dockId") || "",
                    window.MCDHome.address = JSON.parse(window.localStorage.getItem("address") || "{}"),
                    -1 !== document.cookie.indexOf("vtex-current-user") && document.querySelectorAll("body.home").length)
                    if ($(".modal-callcenter").length)
                        $(".modal-callcenter").show();
                    else {
                        $('<div class="modal-background modal-callcenter"><div class="modal-body modal-callcenter"><h2>Começar novo pedido?<small>Isso subistuirá seu pedido antigo</small></h2><button class="btn btn-default btn-primary yes" accesskey="s" title="ALT+S" onClick="window.MCDHome.clearSession()">Sim</button><button class="btn btn-default btn-primary no" accesskey="n" title="ALT+N" onClick="window.MCDHome.closeModal()">Não</button></div></div>').appendTo("body")
                    }
                window.MCDHome.clearSession = this.clearSession,
                    window.MCDHome.closeModal = this.closeModal,
                    window.MCDHome.initAutocomplete = this.initAutocomplete,
                    window.MCDHome.simulate = this.Utils.simulate,
                    window.MCDHome.setClosest = this.setClosest,
                    window.MCDHome.fillInAddress = this.fillInAddress,
                    window.MCDHome.setAddress = this.setAddress,
                    window.MCDHome.geolocate = this.geolocate,
                    window.MCDHome.checkOperation = this.checkOperation,
                    window.MCDHome.addressModal = $("#mcd-address-modal")
            }
            return e.prototype.checkOperation = function (e) {
                    return $.ajax({
                        url: "https://mcdbr.myvtex.com/api/io/checking_hours/checking?restaurant=" + e,
                        type: "GET",
                        dataType: "json",
                        headers: {
                            Accept: "application/vnd.vtex.ds.v10+json"
                        }
                    })
                },
                e
        }()
}, function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        o.d(t, "AAXIS", function () {
            return s
        });
    var a = o(1),
        n = o(2),
        i = o(4),
        r = o(5),
        s = function () {
            return function (e) {
                this.Global = new a.a,
                    this.Products = new r.a,
                    this.Home = new n.a,
                    this.Category = new i.a,
                    this.Global.changeHeader(),
                    this.Global.header(),
                    this.Global.menu(),
                    $(document.body).is(".departamento") && this.Category.init(),
                    $(document.body).is(".product") && this.Products.init(),
                    this.Global.shippingOnCart();

            }
        }();
    window.MCD = new this.AAXIS
}, function (e, t, o) {
    "use strict";
    o.d(t, "a", function () {
        return i
    });
    var a = o(0),
        n = o(1),
        i = function () {
            function e() {
                this.Utils = new a.a,
                    this.Global = new n.a,
                    window.vtxctx.categoryName && window.vtxctx.searchTerm ? this.currKey = "MCD-Search-" + window.vtxctx.categoryName + "-" + window.vtxctx.searchTerm : this.currKey = "MCD-Category-" + (window.vtxctx.categoryName ? this.Utils.slugify(window.vtxctx.categoryName) : window.vtxctx.searchTerm ? window.vtxctx.searchTerm : "")
            }
            return e.prototype.buildItems = function (e) {
                    for (var t = "<ul>", o = 0; o < e.length; o++) {
                        var a = window.vtex.i18n.getCurrency() + (e[o].oldPrice ? this.Utils.formatPrice(100 * e[o].oldPrice) : "--");
                        0 !== e[o].price && (a = window.vtex.i18n.getCurrency() + (e[o].price ? this.Utils.formatPrice(100 * e[o].price) : "--")),
                            t += '<li><div class="view view-first productModel" data-productid="' + e[o].productId + '" data-productqtd="0"><a class="productImage" title="' + e[o].productName + '" href="' + e[o].link + '"><img src="' + e[o].image + '"></a><div class="tab_desc"><h3><a href="' + e[o].link + '">' + e[o].productName + "</a></h3><p>" + a + '</p></div><div class="qtd-selector"><a class="minus"><img src="/arquivos/gddsIconSecondary10Less.png" class="minus-btn"></a><span class="productCounter">0</span><a class="plus"><img src="/arquivos/gddsIconSecondary11More.png" class="plus-btn"></a></div><a href="' + e[o].link + '" class="personalizar-product-link"><span class="personalizar-product">Comprar</span></a></div></li>'
                    }
                    return t + "</ul>"
                },
                e.prototype.callback = function (e) {
                    var t = $(".mcd-plp-content .prateleira");
                    t.length && e.data.length && (t.html(this.buildItems(e.data)).find(".productModel .qtd-selector"),
                            this.updateQtd()),
                        t.length && !e.data.length && t.html('<p class="text-center" style="margin-top:10%;">Este restaurante não possui este menu</p>')
                },
                e.prototype.request = function () {
                    var e, t = this,
                        o = this,
                        a = JSON.parse(window.localStorage.getItem("address")),
                        n = this.Utils.getUrlParameter("utm_campaign") ? this.Utils.getUrlParameter("utm_campaign") : this.Utils.getCookie("IPS") ? this.Utils.getCookie("IPS").split("=")[1] : "";
                    if (window.vtxctx.categoryName && window.vtxctx.searchTerm)
                        e = "https://mcdbr.myvtex.com/api/io/query/combos-of-the-day-seller?categorySlug=" + this.Utils.slugify(window.vtxctx.categoryName) + "&searchTerm=" + window.vtxctx.searchTerm + "&utm=" + n + "&lng=" + a.lng + "&lat=" + a.lat + "&dockId=" + a.closest.deliveryIds[0].dockId + "&workspace=master";
                    else {
                        var i = window.vtxctx.categoryName ? "?categorySlug=" + this.Utils.slugify(window.vtxctx.categoryName) : window.vtxctx.searchTerm ? "?searchTerm=" + window.vtxctx.searchTerm : "";
                        e = "https://mcdbr.myvtex.com/api/io/query/combos-of-the-day-seller" + i + (i ? "&utm=" + n : "") + "&lng=" + a.lng + "&lat=" + a.lat + "&dockId=" + a.closest.deliveryIds[0].dockId + "&workspace=master"
                    }
                    var r = $(".mcd-plp-content .prateleira");
                    $.ajax({
                        url: e,
                        success: function (e) {
                            window.localStorage.setItem(o.currKey, JSON.stringify({
                                    ts: (new Date).getTime(),
                                    res: e
                                })),
                                t.callback(e)
                        },
                        error: function () {
                            setTimeout(function () {
                                return t.request()
                            }, 1e3)
                        },
                        beforeSend: function () {
                            $(r).html('<img src="/arquivos/loading.gif" style="margin-top: 10%;margin-left: auto;margin-right: auto;display: block;">')
                        }
                    })
                },
                e.prototype.updateQtd = function () {
                    var e = function (e, t) {
                        var o = $(".personalizar-product-link", e).attr("href"),
                            a = "";
                        0 === t && (t = 1),
                            a = o.indexOf("qtd=") >= 0 ? o.replace(/\qtd=[0-9]*/g, "qtd=" + t) : o + "?qtd=" + t,
                            $(".personalizar-product-link", e).attr("href", a)
                    };
                    $.each($(".mcd-plp-content .prateleira li"), function (t, o) {
                        var a = $(this).find(".productModel"),
                            n = parseInt(a.data("productqtd"));
                        $(".minus", o).on("click", function () {
                                n > 0 && (n--,
                                    a.data("productqtd", n),
                                    $(".productCounter", o).text(n),
                                    e(a, n))
                            }),
                            $(".plus", o).on("click", function () {
                                n++,
                                a.data("productqtd", n),
                                    $(".productCounter", o).text(n),
                                    e(a, n)
                            })
                    })
                },
                e.prototype.init = function () {
                    var e = window.localStorage.getItem(this.currKey);
                    if (e) {
                        var t = JSON.parse(e);
                        t.ts > (new Date).getTime() - 18e5 ? this.callback(t.res) : this.request()
                    } else
                        this.request()
                },
                e
        }()
}, function (e, t, o) {
    "use strict";
    o.d(t, "a", function () {
        return n
    });
    var a = o(0),
        n = function () {
            function e() {
                var e = this;
                this.Utils = new a.a;
                var t = this;
                window.MCDProduct = {
                    setPrice: function () {
                        $(".tota-price").text(t.Utils.number_format(window.MCDProduct.totalPrice / 100, 2, ",", "."))
                    },
                    product: null,
                    price: 0,
                    totalPrice: 0,
                    attachments: [],
                    gifts: [],
                    addWithAttachments: function () {
                        var e = !1;
                        console.log("addWithAttachments"),
                            console.log("attachents", window.MCDProduct.attachments),
                            $(".product-price__wrapper a").attr({
                                disabled: !0
                            }).addClass("btn-loading");
                        var o = $(".gift-item:checked").length,
                            a = $(".product-item").length;
                        if (window.MCDProduct.gifts.length !== o / a)
                            $(".product-item").each(function (t, o) {
                                e || window.MCDProduct.gifts.length === $(".gift-item:checked", o).length ? ($(".gifts-container .warning").length || ($('<span class="warning">Selecione sua bebida e seu acompanhamento</span>').prependTo($(".gifts-container", o)),
                                            setTimeout(function () {
                                                $(".warning").remove()
                                            }, 15e3)),
                                        $("html, body").animate({
                                            scrollTop: $(".gifts-container").first().offset().top
                                        }, 500)) : (e = !0,
                                        $(".product-item").length > 1 && window.MCDProduct.swiper.slideTo(t),
                                        $(".gifts-container .warning").length || ($('<span class="warning">Selecione sua bebida e seu acompanhamento</span>').prependTo($(".gifts-container", o)),
                                            setTimeout(function () {
                                                $(".warning").remove()
                                            }, 15e3)),
                                        $("html, body").animate({
                                            scrollTop: $(".gifts-container").first().offset().top
                                        }, 500)),
                                    $(".product-price__wrapper a").attr({
                                        disabled: !1
                                    }).removeClass("btn-loading")
                            });
                        else {
                            if (!!window.MCDProduct.attachments && -1 !== window.MCDProduct.attachments.findIndex(function (e, t) {
                                    return "Brinquedos McLanche Feliz" === e.name
                                }) && $("input[name=fieldAttachment_18]:checked").length !== $(".product-item").length)
                                $('<span class="warning">Escolha o seu brinquedo</span>').insertBefore($("form[name=formAttachment_18-0]").prev()),
                                $("html, body").animate({
                                    scrollTop: $(".attachments-container").first().offset().top
                                }, 500),
                                setTimeout(function () {
                                    $(".attachments-container .warning").remove()
                                }, 15e3),
                                e = !0;
                            else {
                                var n = t.Utils.getParameter(window.location.href, "qtd");
                                n = parseInt(null !== n ? n : 1);
                                var i = [],
                                    r = [],
                                    s = {},
                                    d = {};
                                $(".product-item").each(function (e, t) {
                                    var o = "";
                                    if (d[e] = {
                                            adiciones: "",
                                            gifts: {},
                                            cambios: {}
                                        },
                                        $(".insert-sku-checkbox:checked", t).each(function (e, t) {
                                            var a = $(t).attr("rel");
                                            console.log(s, a, s[a]),
                                                void 0 === s[a] ? s[a] = 1 : s[a] = s[a] + 1,
                                                o += (e ? ", " : "") + $(t).next().attr("title")
                                        }),
                                        "" !== o && (d[e].adiciones = o),
                                        r = Object.getOwnPropertyNames(s),
                                        console.log("extrasList", o),
                                        o)
                                        for (var a = 0; a < r.length; a++)
                                            i.push({
                                                id: r[a],
                                                quantity: s[r[a]],
                                                seller: 1
                                            });
                                    $(".formGifts", t).each(function (t, o) {
                                            var a = $(o),
                                                n = "";
                                            n = -1 !== ["c3f6d965-a4d6-413b-9cb5-f6780e093c9c", "aca014be-08c7-478d-8e4b-b083603c788a"].indexOf($(a).data("giftlistId")) ? "Bebidas" : "60c55829-746e-4979-9c84-f067afcebc2a" == $(a).data("giftlistId") ? "Sobremesas" : "Acompanhamentos",
                                                $(".gift-item:checked", a).each(function (t, o) {
                                                    d[e].gifts[n] = $("figcaption", $(o).parent()).text()
                                                })
                                        }),
                                        $(".formAttachments", t).each(function (t, o) {
                                            var a = $(o).data("attachmentName");
                                            d[e].cambios[a] = {},
                                                $(".attachment-item", o).each(function (t, o) {
                                                    console.log(">>>>>", String(!!$($(o).get(0)).attr("checked"))),
                                                        d[e].cambios[a][$(o).data("attachmentFieldName")] = "checkbox" === $($(o).get(0)).attr("type") || "radio" === $($(o).get(0)).attr("type") ? String(!!$($(o).get(0)).attr("checked")) : $(o).val()
                                                })
                                        })
                                });
                                for (var c = function (e) {
                                        var t, o = [],
                                            a = d[e];
                                        if (a.cambios && (t = Object.getOwnPropertyNames(a.cambios)).length)
                                            for (var n = 0; n < t.length; n++)
                                                o.push({
                                                    name: t[n],
                                                    content: a.cambios[t[n]],
                                                    noSplitItem: !0
                                                });
                                        if (a.gifts && (t = Object.getOwnPropertyNames(a.gifts)).length)
                                            for (n = 0; n < t.length; n++) {
                                                var i = {};
                                                i[t[n]] = a.gifts[t[n]],
                                                    o.push({
                                                        name: t[n],
                                                        content: i,
                                                        noSplitItem: !0
                                                    })
                                            }
                                        return a.adiciones && o.push({
                                                name: "Open to Extras",
                                                content: {
                                                    "Open to Extras": a.adiciones
                                                },
                                                noSplitItem: !0
                                            }),
                                            o
                                    }, l = 0; l < n; l++)
                                    i.push({
                                        id: window.MCDProduct.product.skus[0].sku,
                                        quantity: 1,
                                        seller: 1,
                                        attachments: c(l)
                                    });
                                window.vtexjs.checkout.getOrderForm().then(function (e) {
                                    if (e.items.length && r.length)
                                        for (var t = function (t) {
                                                for (var o = function (o) {
                                                        String(e.items[o].id) === String(r[t]) && (i = i.map(function (a) {
                                                            return String(a.id) === String(r[t]) ? {
                                                                id: a.id,
                                                                quantity: s[r[t]] + e.items[o].quantity,
                                                                seller: e.salesChannel
                                                            } : a
                                                        }))
                                                    }, a = 0; a < e.items.length; a++)
                                                    o(a)
                                            }, o = 0; o < r.length; o++)
                                            t(o);
                                    console.log("addToCart", i),
                                        console.log(JSON.stringify(i)),
                                        console.log("Attachments", d),
                                        i.sort(function (e) {
                                            return e.attachments && e.attachments.length ? 0 : 1
                                        });
                                    var a = 0;
                                    for (o = 0; o < i.length; o++)
                                        i[o].attachments && !i[o].attachments.length && (i[o].quantity = i[o].quantity + a,
                                            a++);
                                    window.vtexjs.checkout.addToCart(i).then(function (e) {
                                        window.MCDProduct.callbackAddToCart()
                                    })
                                })
                            }
                            e && ($(document.body).removeClass("adding-attachments"),
                                $(".product-price__wrapper a").attr({
                                    disabled: !1
                                }).removeClass("btn-loading"))
                        }
                    },
                    addWithoutAttachments: function () {
                        console.log("addWithoutAttachments");
                        var t = e.Utils.getParameter(window.location.href, "qtd"),
                            o = t = parseInt(t || 1);
                        console.log("qtd", t),
                            window.vtexjs.checkout.getOrderForm().then(function (e) {
                                if (e.items.length)
                                    for (var t = 0; t < e.items.length; t++)
                                        String(e.items[t].id) === String(window.vtxctx.skus) && (o += e.items[t].quantity);
                                console.log("newQtd", o),
                                    window.vtexjs.checkout.addToCart([{
                                        id: String(window.vtxctx.skus),
                                        quantity: o,
                                        seller: e.salesChannel
                                    }]).then(function (e) {
                                        window.MCDProduct.callbackAddToCart()
                                    })
                            })
                    },
                    callbackAddToCart: function () {
                        if (!window.vtexjs.checkout.orderForm.marketingData) {
                            var e = {
                                utmSource: -1 !== document.cookie.indexOf("vtex-current-user") ? "CALL" : "WEB"
                            };
                            window.vtexjs.checkout.sendAttachment("marketingData", e)
                        }
                        setTimeout(function () {
                            window.vtexjs.checkout.getOrderForm().done(function () {
                                $("#successMSG").fadeIn(),
                                    $(document.body).removeClass("adding-attachments"),
                                    $(".product-price__wrapper a").attr({
                                        disabled: !1
                                    }).removeClass("btn-loading"),
                                    setTimeout(function () {
                                        $("#successMSG").fadeOut(),
                                            window.location.href = "/mcmenu"
                                    }, 1500)
                            })
                        }, 2e3)
                    },
                    addToCart: function () {
                        $(".product-price__wrapper a").attr({
                                disabled: !0
                            }).addClass("btn-loading"),
                            window.MCDProduct.attachments ? window.MCDProduct.addWithAttachments() : window.MCDProduct.addWithoutAttachments()
                    },
                    setScrollOnDrinks: function () {
                        var e = $(".arrow-relative").find("form ul").offset().left;
                        $(".arrow-relative").each(function () {
                            var e = $(this),
                                t = e.find("form").width();
                            e.find("form ul").width() > t && e.find("form ul").after('<div class="menu-nav"><button class="left-arrow-pdp" href="#" class="hideit"></button><button class="right-arrow-pdp" href="#"></button></div>'),
                                e.find(".left-arrow-pdp").addClass("hideit")
                        });
                        var t = function (t) {
                            $(t).parents(".formGifts").on("scroll", function (o) {
                                var a = $(t).parents(".arrow-relative"),
                                    n = a.find("ul").offset().left - e,
                                    i = (a.find("ul").width(),
                                        a.find("form").width());
                                0 == n ? a.find(".left-arrow-pdp").addClass("hideit") : a.find(".left-arrow-pdp").removeClass("hideit"),
                                    i - (n + a.find("ul").outerWidth()) >= 0 ? a.find(".right-arrow-pdp").addClass("hideit") : a.find(".right-arrow-pdp").removeClass("hideit")
                            })
                        };
                        $(document).on("click", ".right-arrow-pdp", function (e) {
                                e.preventDefault();
                                var o = $(this).parents(".arrow-relative").find("ul").offset().left,
                                    a = $(this).parents(".arrow-relative").find("form").width();
                                $(this).parents(".arrow-relative").find(".formGifts").animate({
                                        scrollLeft: a - o
                                    }, 500),
                                    t($(this))
                            }),
                            $(document).on("click", ".left-arrow-pdp", function (o) {
                                o.preventDefault();
                                var a = -$(this).parents(".arrow-relative").find("ul").offset().left + e,
                                    n = $(this).parents(".arrow-relative").find("form").width();
                                $(this).parents(".arrow-relative").find(".formGifts").animate({
                                        scrollLeft: -(n - a)
                                    }, 500),
                                    t($(this))
                            })
                    }
                }
            }
            return e.prototype.loadProduct = function () {
                    var e = this.Utils.getParameter(window.location.href, "qtd");
                    if (null !== e && e > 1) {
                        for (var t = $(".product-item").css({
                                width: window.innerWidth + "px"
                            }), o = 1; o < e; o++)
                            t.clone(!0, !0).appendTo(".product-wrapper");
                        window.MCDProduct.swiper = new window.Swiper(".swiper-container", {
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: !0,
                                    renderBullet: function (e, t) {
                                        return '<span class="' + t + '">' + (e + 1) + "</span>"
                                    }
                                }
                            }),
                            setTimeout(function () {
                                $(".swiper-wrapper").animate({
                                    duration: 500,
                                    easing: "swing",
                                    queue: !1,
                                    complete: function () {
                                        $(".swiper-wrapper").animate({
                                            duration: 500,
                                            easing: "swing",
                                            queue: !1
                                        }, "swing")
                                    }
                                }, "swing")
                            }, 300)
                    }
                    this.loadPrice()
                },
                e.prototype.loadPrice = function () {
                    var e = this;
                    $("#product-gift-wrapper li").length && $("#product-gift-wrapper").show();
                    var t = e.Utils.getParameter(window.location.href, "qtd");
                    t = parseInt(null !== t ? t : 1),
                        window.vtexjs.catalog.getCurrentProductWithVariations().done(function (o) {
                            window.MCDProduct.product = o,
                                window.MCDProduct.price = o.skus[0].bestPrice,
                                window.MCDProduct.totalPrice = window.MCDProduct.price * t,
                                e.loadAttachments(),
                                e.loadGifts(),
                                window.MCDProduct.setPrice()
                        }),
                        $(".adiciones-item").each(function (t, o) {
                            var a = $(".insert-sku-checkbox", o).attr("rel"),
                                n = $("input[rel=" + a + "].buy-product-checkbox").attr("price");
                            $('<span class="product-price-related">+ R$ ' + e.Utils.number_format(n / 100, 2, ",", ".") + '</span><span class="product-added-related"></span>').insertAfter($(".insert-sku-name", o))
                        }),
                        $(".adiciones li").each(function (e, t) {
                            var o = $("label", t).attr("for") + "-" + e;
                            $("label", t).attr("for", o),
                                $(".insert-sku-checkbox", t).attr("id", o)
                        }),
                        $(".insert-sku-checkbox").on("change", function (e) {
                            var t = $(e.currentTarget),
                                o = t.attr("rel"),
                                a = parseInt($("input[rel=" + o + "].buy-product-checkbox").attr("price"));
                            t.attr("checked") ? window.MCDProduct.totalPrice = window.MCDProduct.totalPrice + a : window.MCDProduct.totalPrice = window.MCDProduct.totalPrice - a,
                                window.MCDProduct.setPrice()
                        }),
                        // $(".product-price__wrapper a.btn").on("activateButton",function(){

                        $(".product-price__wrapper a.btn").on("click", function (e) {
                            e.preventDefault(),
                                window.MCDProduct.addToCart()
                            // });
                        }),
                        $(".must-login").show()
                },
                e.prototype.buildAttachments = function () {
                    var e = window.MCDProduct.attachments;
                    $(".product-item").each(function (t, o) {
                        $(".attachments-container", o).each(function (a, n) {
                            for (var i = "", r = 0; r < e.length; r++)
                                if (-1 === [2, 3, 4, 28].indexOf(e[r].id)) {
                                    i += "<h2>" + e[r].name + '</h2><form name="formAttachment_' + e[r].id + "-" + a + "_" + t + '" data-attachment-name="' + e[r].name + '" class="formAttachments"><ul>';
                                    for (var s = JSON.parse(e[r].domainValues), d = 0; d < s.length; d++)
                                        i += '<li><label for="fieldAttachment_' + e[r].id + "_" + d + "-" + a + "_" + t + '">',
                                        -1 !== s[d].DomainValues.toLowerCase().indexOf("true") ? i += '<input type="checkbox" class="attachment-item" data-attachment-field-name="' + s[d].FieldName + '" value="true" id="fieldAttachment_' + e[r].id + "_" + d + "-" + a + "_" + t + '" name="fieldAttachment_' + e[r].id + '"/><span class="checkFake"></span><span class="fieldName ' + s[d].FieldName + " " + e[r].id + '">' + s[d].FieldName + "</span>" : i += '<input type="text" class="attachment-item" id="fieldAttachment_' + e[r].id + "_" + d + "-" + a + "_" + t + '" data-attachment-field-name="' + s[d].FieldName + '" name="fieldAttachment_' + e[r].id + '"/>',
                                        i += "</label></li>";
                                    i += "</ul></form>"
                                }
                            $(".attachments-container h2", o).each(function () {
                                    if ("Brinquedos McLanche Feliz" == $(this).text()) {
                                        var e = $(this),
                                            t = $(this).next();
                                        $(e).add(t).prependTo(".attachments-container")
                                    }
                                }),
                                $(n).html(i).show(),
                                $("input[name=fieldAttachment_18]", o).each(function (e, t) {
                                    var o = $(t).clone();
                                    $(t).replaceWith(o.attr("type", "radio"))
                                })
                            // ,
                            // $(".product-price__wrapper a.btn").trigger("activateButton");
                        })
                    })
                },
                e.prototype.loadAttachments = function () {
                    var e = this,
                        t = setInterval(function () {
                            window.MCDProduct.product.skus && (clearInterval(t),
                                $.ajax({
                                    method: "GET",
                                    type: "GET",
                                    url: "/api/catalog_system/pub/products/search?fq=skuId:" + String(window.MCDProduct.product.skus[0].sku),
                                    dataType: "json",
                                    xhrFields: {
                                        withCredentials: !1
                                    }
                                }).done(function (t) {
                                    window.MCDProduct.attachments = t[0].items[0].attachments,
                                        void 0 != window.MCDProduct.attachments && e.buildAttachments()
                                }))
                        }, 200)
                },
                e.prototype.loadGiftProduct = function (e, t, o) {
                    var a = "";
                    $.ajax({
                        method: "GET",
                        type: "GET",
                        url: "/api/catalog_system/pub/products/search?fq=skuId:" + String(e),
                        dataType: "json"
                    }).done(function (n) {
                        if (n.length) {
                            var i = n[0];
                            a += '<li><input type="radio" class="gift-item" data-giftlist-id="' + t + '" value="' + e + '" id="fieldGift_' + i.productId + "-" + o + '" name="fieldGift_' + t + '"/><label for="fieldGift_' + i.productId + "-" + o + '">',
                                a += "<figure>" + i.items[0].images[0].imageTag.replace("~", "").replace(/#width#/g, "100").replace(/#height#/g, "100") + "<figcaption>" + i.productName + "</figcaption></figure>",
                                a += "</label></li>",
                                $(a).appendTo("." + t + "-" + o)
                        }
                    })
                },
                e.prototype.buildGifts = function () {
                    var e = this,
                        t = window.MCDProduct.gifts;
                    $(".gifts-container").each(function (o, a) {
                            for (var n = "", i = "", r = "", s = 0; s < t.length; s++)
                                if ("aca014be-08c7-478d-8e4b-b083603c788a" == t[s].id || "c3f6d965-a4d6-413b-9cb5-f6780e093c9c" == t[s].id) {
                                    n += '<div class="arrow-relative"><h2>Selecione sua bebida</h2><form name="formGift_' + t[s].id + "-" + o + '" data-giftlist-id="' + t[s].id + '" class="formGifts"><div class="container"><ul id="' + t[s].id + "-" + o + '" class="' + t[s].id + "-" + o + '">';
                                    for (var d = 0; d < t[s].availableGifts.length; d++)
                                        e.loadGiftProduct(t[s].availableGifts[d].id, t[s].id, o);
                                    n += "</ul></div></form></div>"
                                } else if ("60c55829-746e-4979-9c84-f067afcebc2a" == t[s].id) {
                                i += '<div class="arrow-relative"><h2>Selecione sua sobremesa</h2><form name="formGift_' + t[s].id + "-" + o + '" data-giftlist-id="' + t[s].id + '" class="formGifts"><div class="container"><ul id="' + t[s].id + "-" + o + '" class="' + t[s].id + "-" + o + '">';
                                for (d = 0; d < t[s].availableGifts.length; d++)
                                    e.loadGiftProduct(t[s].availableGifts[d].id, t[s].id, o);
                                i += "</ul></div></form></div>"
                            } else if ("a90bffef-a48d-4d34-b893-d0520e6feb53" == t[s].id) {
                                r += '<div class="arrow-relative"><h2>Selecione seu brinquedo</h2><form name="formGift_' + t[s].id + "-" + o + '" data-giftlist-id="' + t[s].id + '" class="formGifts"><div class="container"><ul id="' + t[s].id + "-" + o + '" class="' + t[s].id + "-" + o + '">';
                                for (d = 0; d < t[s].availableGifts.length; d++)
                                    e.loadGiftProduct(t[s].availableGifts[d].id, t[s].id, o);
                                r += "</ul></div></form></div>"
                            } else {
                                r += '<div class="arrow-relative"><h2>Selecione seu acompanhamento</h2><form name="formGift_' + t[s].id + "-" + o + '" data-giftlist-id="' + t[s].id + '" class="formGifts"><div class="container"><ul id="' + t[s].id + "-" + o + '" class="' + t[s].id + "-" + o + '">';
                                for (d = 0; d < t[s].availableGifts.length; d++)
                                    e.loadGiftProduct(t[s].availableGifts[d].id, t[s].id, o);
                                r += "</ul></div></form></div>"
                            }
                            $(a).append(n).append(r).append(i).show()
                        }),
                        setTimeout(function () {
                            window.MCDProduct.setScrollOnDrinks()
                        }, 1e3)
                },
                e.prototype.loadGifts = function () {
                    var e = this,
                        t = setInterval(function () {
                            window.MCDProduct.product.skus && (clearInterval(t),
                                $.ajax({
                                    method: "GET",
                                    type: "GET",
                                    url: "/api/checkout/pub/orderForms/simulation?sc=1&request.items[0].id=" + String(window.MCDProduct.product.skus[0].sku) + "&request.items[0].quantity=1&request.items[0].seller=1",
                                    dataType: "json"
                                }).done(function (t) {
                                    window.MCDProduct.gifts = t.selectableGifts,
                                        console.log("loadGifts", t),
                                        window.MCDProduct.gifts.length && e.buildGifts()
                                }))
                        }, 200)
                },
                e.prototype.init = function () {
                    this.loadProduct();
                },
                e
        }()
}]);

/**
 * Anotações
 */

/**
 * O app está usando o localstorage.address.closest para verificar (front side) se há algum restaurante na região do cep;
 * O app valida geocoordinate do endereço e retorna se há um ou mais restaurantes próximos a coordenada enviada;
 * Usa sendAttachment para sobrescrever LogisticInfo do orderForm, passando geocoordenadas, restaurantes e outros;
 * No checkout, quando o usuário entra com e-mail, mas não se loga (apenas busca informações de endereço e as mostra com *** para privacidade),
 * o sendAttachment não funciona pois a informação está linkada com um email, e ela é privada;
 * 
 */