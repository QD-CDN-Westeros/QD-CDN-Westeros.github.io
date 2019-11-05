! function (e) {
    var t = {};

    function o(n) {
        if (t[n])
            return t[n].exports;
        var a = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(a.exports, a, a.exports, o),
            a.l = !0,
            a.exports
    }
    o.m = e,
        o.c = t,
        o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                configurable: !1,
                enumerable: !0,
                get: n
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
        o(o.s = 6)
}([function (e, t, o) {
    "use strict";
    o.d(t, "a", function () {
        return n
    });
    var n = function () {
        function e() {}
        /*Usando essa func dá pra verificar se o restaurante está na area de alcance de alguma loja */
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
            e.prototype.number_format = function (e, t, o, n) {
                var a;
                return e = (e + "").replace(/[^0-9+\-Ee.]/g, ""),
                    e = isFinite(+e) ? +e : 0,
                    t = isFinite(+t) ? Math.abs(t) : 0,
                    n = void 0 === n ? "," : n,
                    o = void 0 === o ? "." : o,
                    a = function (e, t) {
                        var o = Math.pow(10, t);
                        return "" + (Math.round(e * o) / o).toFixed(t)
                    },
                    3 < (a = (t ? a(e, t) : "" + Math.round(e)).split("."))[0].length && (a[0] = a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, n)),
                    (a[1] || "").length < t && (a[1] = a[1] || "",
                        a[1] += Array(t - a[1].length + 1).join("0")),
                    a.join(o)
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
                for (var o = document.cookie.split("; "), n = 0; n < o.length; n++)
                    for (var a = String("." + window.location.hostname).split("."); a.length > 0;) {
                        var r = encodeURIComponent(o[n].split(";")[0].split("=")[0]) + "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=" + a.join(".") + " ;path=",
                            i = location.pathname.split("/");
                        for (document.cookie = r + "/",
                            console.log(r + "/"); i.length > 0;)
                            document.cookie = r + i.join("/"),
                            i.pop();
                        a.shift()
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
                for (var t = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;", o = 0, n = t.length; o < n; o++)
                    e = e.replace(new RegExp(t.charAt(o), "g"), "aaaaeeeeiiiioooouuuunc------".charAt(o));
                return e = e.replace(/[^a-z0-9 -]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-")
            },
            e.prototype.formatPrice = function (e) {
                var t = e / 100,
                    o = window.localeInfo.CurrencyLocale.Format.CurrencyDecimalDigits,
                    n = window.localeInfo.CurrencyLocale.Format.CurrencyDecimalSeparator,
                    a = window.localeInfo.CurrencyLocale.Format.CurrencyGroupSeparator;
                o = isNaN(o = Math.abs(o)) ? 2 : o,
                    n = void 0 == n ? "." : n,
                    a = void 0 == a ? "," : a;
                var r, i = t < 0 ? "-" : "",
                    s = String(parseInt(t = Math.abs(Number(t) || 0).toFixed(o)));
                return i + ((r = (r = s.length) > 3 ? r % 3 : 0) ? s.substr(0, r) + a : "") + s.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + a) + (o ? n + Math.abs(t - s).toFixed(o).slice(2) : "")
            },
            e.prototype.setCookie = function (e, t, o, n) {
                void 0 === n && (n = location.hostname);
                var a = new Date;
                a.setTime(a.getTime() + 24 * o * 60 * 60 * 1e3);
                var r = "expires=" + a.toUTCString();
                document.cookie = e + "=" + t + "; Domain=" + n + ";" + r + ";path=/"
            },
            e.prototype.getCookie = function (e) {
                for (var t = e + "=", o = document.cookie.split(";"), n = 0; n < o.length; n++) {
                    for (var a = o[n];
                        " " == a.charAt(0);)
                        a = a.substring(1);
                    if (0 == a.indexOf(t))
                        return a.substring(t.length, a.length)
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
                    n = new Date(t);
                return Math.round((n - o) / 864e5)
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
                    n = o.length;
                return t + ((n = n > 3 ? n % 3 : 0) ? o.substr(0, n) + "." : "") + o.substr(n).replace(/(\d{3})(?=\d)/g, "$1.") + "," + Math.abs(e - parseInt(o)).toFixed(2).slice(2)
            },
            e.prototype.isOrderFormEqual = function (e, t, o) {
                void 0 === o && (o = !1);
                var n = !0;
                if (o)
                    return e === t;
                if (e.length === t.length)
                    for (var a = 0; a < e.length; a++)
                        n && (n = e[a].id === t[a].id && e[a].quantity == e[a].quantity && e[a].sellingPrice === t[a].sellingPrice);
                return n
            },
            e.prototype.insertScript = function (e, t) {
                void 0 === t && (t = "body");
                var o = e,
                    n = document.getElementsByTagName(t)[0],
                    a = setInterval(function () {
                        if (n) {
                            clearInterval(a);
                            for (var e = 0; e < o.length; e++) {
                                var t = document.createElement("script");
                                t.async = !0,
                                    t.src = o[e],
                                    n.appendChild(t)
                            }
                        }
                    }, 300)
            },
            e.prototype.b64toBlob = function (e, t, o) {
                void 0 === t && (t = ""),
                    void 0 === o && (o = 512);
                for (var n = window.atob(e), a = [], r = 0; r < n.length; r += o) {
                    for (var i = n.slice(r, r + o), s = new Array(i.length), d = 0; d < i.length; d++)
                        s[d] = i.charCodeAt(d);
                    var c = new Uint8Array(s);
                    a.push(c)
                }
                return new Blob(a, {
                    type: t
                })
            },
            e.prototype.splitArrayInEqualParts = function (e, t) {
                for (var o = Math.ceil(e.length / t), n = [], a = 0; a < o; a++)
                    n.push(e.slice(a * t, (a + 1) * t));
                return n
            },
            e.prototype.imageToDataURL = function (e, t, o) {
                void 0 === t && (t = function () {}),
                    void 0 === o && (o = "image/png");
                var n = new Image;
                n.crossOrigin = "Anonymous",
                    n.onload = function () {
                        var e, a = document.createElement("canvas"),
                            r = a.getContext("2d");
                        a.height = n.naturalHeight,
                            a.width = n.naturalWidth,
                            r.drawImage(n, 0, 0),
                            e = a.toDataURL(o),
                            t(e)
                    },
                    n.src = e
            },
            e
    }()
}, function (e, t, o) {
    "use strict";
    o.d(t, "a", function () {
        return a
    });
    var n = o(0),
        a = function () {
            function e() {
                this.Utils = new n.a,
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
                                $(".mcd-mobile-header-cart-value").text(o)
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
                    window.vtxctx.categoryName && window.vtxctx.searchTerm ? $(".mcd-mobile-header-title").text(window.vtxctx.searchTerm) : $(".mcd-mobile-header-title").text(window.vtxctx.categoryName)
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
                                document.cookie = "MCD_address=" + escape(window.MCDGlobal.address.formatted_address);
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
                                        n = function (e) {
                                            var t = $(e).find("ul");
                                            window.MCDGlobal.Menu.tree = t[0],
                                                $("body").hasClass("sidecart") ? $(".category-page .container .menu-content").html(t) : $(".category-page .container").html(t),
                                                $(".category-page").length && window.MCDGlobal.Menu.setScrollingMenu()
                                        },
                                        a = "MCD-Menu-" + (o = t < window.MCDGlobal.Menu.breakfestStart || t >= window.MCDGlobal.Menu.breakfestEnds ? "Regular" : "Desayuno"),
                                        r = window.localStorage.getItem(a),
                                        i = function () {
                                            $.ajax({
                                                type: "GET",
                                                url: "/Menu/" + o,
                                                success: function (e) {
                                                    window.localStorage.setItem(a, JSON.stringify({
                                                            ts: (new Date).getTime(),
                                                            res: e
                                                        })),
                                                        n(e)
                                                }
                                            })
                                        };
                                    if (r) {
                                        var s = JSON.parse(r);
                                        s.ts > (new Date).getTime() - 18e5 ? n(s.res) : i()
                                    } else
                                        i()
                                })
                            },
                            init: function () {
                                null !== window.MCDGlobal.address.closest ? window.vtexjs.checkout.getOrderForm().then(function (e) {
                                    if (e.shippingData) {
                                        window.MCDGlobal.dockId = window.MCDGlobal.address.closest ? window.MCDGlobal.address.closest.deliveryIds[0].dockId : null;
                                        var t = window.MCDGlobal.dockId ? window.MCDGlobal.dockId : e.shippingData.logisticsInfo.length && e.shippingData.logisticsInfo[0].slas.length ? e.shippingData.logisticsInfo[0].slas[0].deliveryIds[0].dockId : "GRU";
                                        console.log("dockId A ", t),
                                            window.MCDGlobal.Menu.checkOperation(t)
                                    }
                                }) : window.MCDGlobal.simulate(window.MCDGlobal.address.lng, window.MCDGlobal.address.lat).done(function (e) {
                                    if (window.MCDGlobal.setClosest(e),
                                        void 0 != e.logisticsInfo[0].slas[0]) {
                                        var t = e.logisticsInfo[0].slas[0].id;
                                        console.log("dockId B", t),
                                            window.MCDGlobal.Menu.checkOperation(t)
                                    }
                                });
                                // this.managingAttachments();                
                                this.addProductLine();
                                // window.cart.items.subscribe(console.log("subscribe"));
                                // this.manageAttachments();
                                // this.copyingTable();
                                // this.manageAttachments2();
                            },
                            addProductLine: function () {
                                $(window).on("orderFormUpdated.vtex", function () {
                                    $(".kfc-quantity-price,.kfc-line").remove();
                                    $(".product-item").length && $(".product-item:not(.aaxis-active)").addClass("aaxis-active").each(function () {
                                        $(this).after('<tr class="kfc-quantity-price"> <td colspan="3"> ' + $(this).find(".quantity-price .total-price").text() + " </td> </tr>"),
                                            $(this).before('<tr class="kfc-line"> <td colspan="4"><div></div></td> </tr>')
                                    });
                                });
                            },
                            managingAttachments: function () {
                                var needReload = false;
                                var loading = $(".loading.loading-bg").first().clone();
                                loading.css({
                                    "z-index": 1
                                }).find(".loading-img").css({
                                    height: "300px"
                                });
                                $("table.cart-items").append(loading);
                                $(window).on("orderFormUpdated.vtex", function () {
                                    console.log("mngat");
                                    window.MZTimer = window.performance.now();
                                    if (needReload) {

                                        refreshAttachment();
                                    }
                                });
                                var inter = setInterval(function () {
                                    if (window.performance.now() - window.MZTimer > 1800) {
                                        needReload = true;
                                        refreshAttachment();
                                        clearInterval(inter);
                                    }
                                }, 50);

                                function refreshAttachment() {
                                    setTimeout(function () {
                                        $("tr.item-attachments-content").show();
                                        $("tr.item-attachments-head").hide();
                                        $("table.cart-items").find(".loading.loading-bg").hide();

                                    }, 0);

                                    $(".product-item").length && $(".product-item:not(.aaxis-active)").addClass("aaxis-active").each(function () {
                                        $(this).after('<tr class="kfc-quantity-price"> <td colspan="3"> ' + $(this).find(".quantity-price .total-price").text() + " </td> </tr>"),
                                            $(this).before('<tr class="kfc-line"> <td colspan="4"><div></div></td> </tr>')
                                    });
                                    $(".item-attachment-name-label input[type=checkbox]").each(function () {
                                        var e = $(this);
                                        if (e.attr("checked")) {
                                            e.attr({
                                                disabled: !0
                                            });
                                        } else {
                                            e.parent().parent().hide();
                                        }
                                    });
                                }
                            },
                            checkBreakfestDocks: function (e) {
                                var t = e || !1,
                                    o = window.MCDGlobal.Storage.get("breakfest") || {
                                        start: 9,
                                        ends: 11
                                    },
                                    n = jQuery.Deferred();
                                if (null === window.MCDGlobal.address.closest || null !== o && !0 !== t)
                                    return window.MCDGlobal.Menu.breakfestStart = o.start,
                                        window.MCDGlobal.Menu.breakfestEnds = o.ends,
                                        n.resolve({
                                            start: window.MCDGlobal.Menu.breakfestStart,
                                            ends: window.MCDGlobal.Menu.breakfestEnds
                                        }),
                                        n.promise();
                                if (window.MCDGlobal.address.closest) {
                                    var a = window.MCDGlobal.address.closest.id,
                                        r = {
                                            async: !0,
                                            crossDomain: !0,
                                            url: "/api/dataentities/RS/search?_fields=dock_id,breakfest_start,breakfest_end&_where=dock_id=" + a,
                                            method: "GET",
                                            headers: {
                                                "content-type": "application/json",
                                                accept: "application/vnd.vtex.ds.v10+json",
                                                "rest-range": "resources=0-1000"
                                            }
                                        };
                                    return $.ajax(r).done(function (e) {
                                        $(e).each(function (e, t) {
                                                var o = $(t)[0].dock_id;
                                                a == o && (window.MCDGlobal.Menu.breakfestStart = $(this)[0].breakfest_start.replace(":00", ""),
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
                                return $.ajax({
                                    url: "https://mcdbr.myvtex.com/api/io/checking_hours/checking?restaurant=" + e,
                                    type: "GET",
                                    dataType: "json",
                                    headers: {
                                        Accept: "application/vnd.vtex.ds.v10+json"
                                    }
                                }).done(function (e) {
                                    var t = "Regular";
                                    1 == e.data.operational ? $("body").removeClass("no-working") : ($("body").is(".no-delivery") ? $("body").removeClass("no-working") : $("body").addClass("no-working"),
                                            e.data.operation && ($(".McCheckOperation .mcd-check-operation-start").text(e.data.operation.start),
                                                $(".McCheckOperation .mcd-check-operation-end").text(e.data.operation.end))),
                                        e.data.breakfast && (t = "Desayuno");
                                    var o = function (e) {
                                            var t = $(e).find("ul");
                                            window.MCDGlobal.Menu.tree = t[0],
                                                $("body").hasClass("sidecart") ? $(".category-page .container .menu-content").html(t) : $(".category-page .container").html(t),
                                                $(".category-page").length && window.MCDGlobal.Menu.setScrollingMenu()
                                        },
                                        n = function () {
                                            $.ajax({
                                                type: "GET",
                                                url: "/Menu/" + t,
                                                success: function (e) {
                                                    window.localStorage.setItem(a, JSON.stringify({
                                                            ts: (new Date).getTime(),
                                                            res: e
                                                        })),
                                                        o(e)
                                                }
                                            })
                                        },
                                        a = "MCD-Menu-" + t,
                                        r = window.localStorage.getItem(a);
                                    if (r) {
                                        var i = JSON.parse(r);
                                        i.ts > (new Date).getTime() - 18e5 ? o(i.res) : n()
                                    } else
                                        n()
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
                                            $(".category-page a").each(function (o, n) {
                                                var a = String($(n).text().trim()).toLowerCase();
                                                "desayuno" == a && (a = "desayunos"),
                                                    a !== e && a !== function (e) {
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
                                                    }(e) || (t = n)
                                            }),
                                            $(t).addClass("active"),
                                            Object.keys($(t).offset() || 0).length && $(".category-page").animate({
                                                scrollLeft: $(t).offset().left - 395
                                            }, 500)),
                                        $(".scrolling-menu-wrapper .category-page ul").after('<div id="menu-nav"><button id="left-arrow" class="hideit"></button><button id="right-arrow"></button></div>');
                                    var o = $(".category-page").width(),
                                        n = $(".category-page ul").offset().left;
                                    n >= 0 && $("#left-arrow").fadeOut(),
                                        $("#left-arrow").on("click", function (e) {
                                            n = $(".category-page ul").offset().left,
                                                $(".category-page").animate({
                                                    scrollLeft: -(n + o)
                                                }, 500)
                                        }),
                                        $("#right-arrow").on("click", function (e) {
                                            0 == (n = $(".category-page ul").offset().left) ? ($("#left-arrow").fadeOut(),
                                                $(".category-page").animate({
                                                    scrollLeft: n + o
                                                }, 500)) : $(".category-page").animate({
                                                scrollLeft: -(n - o)
                                            }, 500)
                                        }),
                                        $(".category-page").on("scroll", function (e) {
                                            (n = $(".category-page ul").offset().left) >= 0 ? $("#left-arrow").fadeOut() : $("#left-arrow").fadeIn(),
                                                n - o == -$(".category-page ul").width() ? $("#right-arrow").fadeOut() : $("#right-arrow").fadeIn()
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
        return a
    });
    var n = o(0),
        a = function () {
            function e() {
                if (this.Utils = new n.a,
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

                        //forçando atualizar rua ao buscar novo address
                        $(document).on("addressSearchResult.vtex", function (a, b) {
                            console.log(b);
                            vtexjs.checkout.sendAttachment("shippingData", {
                                address: {
                                    addressType: "residential",
                                    postalCode: b.postalCode,
                                    country: b.country
                                }
                            });
                            // document.location.reload();
                        });

                        //verificando se endereço do orderForm é diferente do que está no topo da tela
                        //se é diferente, ajuste o endereço do topo
                        // localStorage.removeItem("newAddress");

                            $(window).on("orderFormUpdated.vtex", function (a, orderForm) {

                                //verificando se o campo address existe, se está visível, vazio e se há alguma rua para inserir nele
                                if ($("#ship-street").length > 0 && !$("#ship-street").val() && !$("#ship-street").is(".hide") && orderForm.shippingData.address) {
                                    $("#ship-street").val(orderForm.shippingData.address.street).blur();
                                }
                                if (orderForm.shippingData.address) {
                                    if (orderForm.shippingData.address.country.includes("*")) {
                                        return false;
                                    }
                                    var ofAddress = orderForm.shippingData.address;
                                    //formatando novo address
                                    var newAddress = (ofAddress.street ? ofAddress.street + ", " : "") +
                                        (ofAddress.neighborhood ? ofAddress.neighborhood + ", " : "") +
                                        (ofAddress.city ? ofAddress.city + " - " : "") +
                                        (ofAddress.state ? ofAddress.state + ", " : "") +
                                        (ofAddress.postalCode ? ofAddress.postalCode + ", " : "") +
                                        (ofAddress.country == "BRA" ? "Brasil" : ofAddress.country);
                                    window.localStorage.setItem("newAddress", newAddress);
                                    $(".edit-address").length && $(".edit-address .address").html($(".edit-address .address").find("a")).append(localStorage.newAddress);
                                }
                            });
                        
                        $(".edit-address").length && $(".edit-address .address").html($(".edit-address .address").find("a")).append(localStorage.newAddress);


                        $("#autocomplete").length && (window.MCDHome.autocomplete = new window.google.maps.places.Autocomplete(window.document.getElementById("autocomplete"), {
                                    types: ["geocode"]
                                }),
                                window.MCDHome.autocomplete.setComponentRestrictions({
                                    country: ["BR"]
                                }),
                                window.MCDHome.autocomplete.addListener("place_changed", window.MCDHome.fillInAddress),
                                void 0 !== window.MCDHome.address.formatted_address && $("#autocomplete").val(window.MCDHome.address.formatted_address)),
                            void 0 !== window.MCDHome.address.formatted_address && null === window.MCDHome.address.closest && $("body").addClass("no-delivery"),
                            null !== window.MCDHome.address.closest && $("body").addClass("has-delivery"),
                            void 0 === window.MCDHome.address.formatted_address && $(".mcd-home-search-area button").attr({
                                disabled: !0
                            })
                        // ,
                        // $(".edit-address").length && $(".edit-address .address").append(window.MCDHome.address.formatted_address);
                        //mz ajustes address

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
                                    window.MCDHome.checkOperation(t.deliveryIds[0].dockId).then(function (e) {
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
                            var n = t.address_components[o].types[0];
                            if (window.MCDHome.componentForm[n]) {
                                var a = t.address_components[o][window.MCDHome.componentForm[n]];
                                window.MCDHome.address[n] = a
                            }
                        }
                        window.MCDHome.address.formatted_address = t.formatted_address,
                            window.MCDHome.address.lat = t.geometry.location.lat(),
                            window.MCDHome.address.lng = t.geometry.location.lng(),
                            window.MCDHome.address.closest = null,
                            window.localStorage.setItem("address", JSON.stringify(window.MCDHome.address)),
                            window.MCDHome.simulate(window.MCDHome.address.lng, window.MCDHome.address.lat).done(function (e) {
                                window.MCDHome.setClosest(e)
                            }),
                            $(".mcd-home-search-area button").attr({
                                disabled: !1
                            })
                    },
                    this.setAddress = function () {
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
                        window.localStorage.setItem("shippingData", JSON.stringify(e)),
                            $(".mcd-home-search-area button").addClass("loading").attr({
                                disabled: !0
                            }),
                            console.log("E disabled:", !0);
                        var t = function () {
                            $(".mcd-home-search-area button").removeClass("loading").attr({
                                    disabled: !1
                                }),
                                window.location.href = "/mcmenu"
                        };
                        JSON.parse(window.localStorage.getItem("address"));
                        window.vtexjs.checkout.getOrderForm().then(function () {
                            // return window.vtexjs.checkout.sendAttachment("shippingData", e)
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
}, , , , function (e, t, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        o.d(t, "AAXIS", function () {
            return i
        });
    var n = o(1),
        a = o(2),
        r = o(0),
        i = function () {
            function e() {
                this.Global = new n.a,
                    this.Home = new a.a,
                    this.Utils = new r.a,
                    this.clearZero = setInterval(function () {
                        $(".vtexsc-text, .shippingValue, .bestPrice, .tab_desc p, .total-price, .product-price-related, .monetary, .new-product-price, .price").each(function (e, t) {
                            var o = $(t).text(); -
                            1 !== o.indexOf(",00") && $(t).text(o.replace(",00", ""))
                        })
                    }, 200)
                //Ocultando pois fazia o link do masterpass desaparecer
                // ,
                // this.masterpassVerify = setTimeout(function() {
                //     $("#render-checkout-buttons").length && setTimeout(function() {
                //         $(".extensions-checkout-buttons-container").addClass("otherPayment-active").hide()
                //     }, 3e3)
                // }, 300);
                var e = this,
                    t = !1;
                $(document).ready(function () {
                        console.log("DOCUMENT READY");

                        e.header(),
                            e.Global.menu(),
                            e.Home.initAutocomplete()
                        //retirando busca nas pags de checkout
                        $(".mcd-mobile-header-search-btn").hide();

                    }),
                    window.onload = function () {
                        //mz
                        // if (window.location.hash == "#/payment" || window.location.hash == "#/shipping") {
                        //     var timer = setInterval(() => {
                        //         if (!window.vtexjs.checkout.orderForm.canEditData) {
                        //                 if($("#vtexIdContainer").length==0){
                        //                 window.vtexid.start();
                        //             }
                        //         } else {
                        //             this.clearInterval(timer);
                        //         }
                        //     }, 500);
                        // }
                        $(window).on("hashchange", function () {

                            //  Possível fix para erro de UTM onde ao comprar no masterpass, a utm WEB desaparece;
                            // Não há motivo específico para estar aqui
                            window.vtexjs.checkout.getOrderForm().done(function(orderForm){
                                var md=orderForm.marketingData;
                                md.utmSource= "WEB";                                                       
                             window.vtexjs.checkout.sendAttachment("marketingData", md);
                        })
                            //fim utm fix  

                            if (window.location.hash == "#/payment" || window.location.hash == "#/shipping") {
                                var timer = setInterval(function () {
                                    if ($(".modal-backdrop").length) {
                                        $(".modal-backdrop").unbind("click");
                                        clearInterval(timer);
                                    }
                                }, 100);

                            }
                        });
                        //mz

                        var e = window.localStorage.getItem("updateAddress") || !1;
                        e && window.vtexjs && window.vtexjs.checkout && window.vtexjs.checkout.orderForm && window.vtexjs.checkout.orderForm.canEditData &&
                            window.vtexjs.checkout.sendAttachment("shippingData", JSON.parse(e)).then(function () {
                                window.localStorage.removeItem("updateAddress");
                                var e = JSON.parse(window.localStorage.getItem("shippingData"));
                                $(".address-not-filled-verification").text(e.address.addressQuery),
                                    location.href = "/checkout/#/shipping"
                            }),
                            $("#opt-in-newsletter").prop("checked", !1),
                            $("#go-to-shipping").attr("disabled", "true"),
                            $("#shipping-data").on("enable.vtex", function () {
                                var e = setInterval(function () {
                                    var t = $("#ship-street"),
                                        o = $("#ship-state"),
                                        n = $("#ship-city");
                                    t.length && (clearInterval(e),
                                        $(".search-another-address-btn").off("click").attr({
                                            href: "/"
                                        }),
                                        $(".cancel-address-form, #map-canvas").remove(),
                                        "" !== String(t.val()).trim() && t.attr({
                                            readonly: !0
                                        }),
                                        "" !== String(o.val()).trim() && o.attr({
                                            readonly: !0
                                        }),
                                        "" !== String(n.val()).trim() && n.attr({
                                            readonly: !0
                                        }))
                                }, 400)
                            });

                        var t = JSON.parse(window.localStorage.getItem("address")) || !1;
                        t && $.ajax({
                            url: "https://mcdbr.myvtex.com/api/io/checking_hours/checking?restaurant=" + t.closest.id,
                            type: "GET",
                            dataType: "json",
                            headers: {
                                Accept: "application/vnd.vtex.ds.v10+json"
                            }
                        }).done(function (e) {
                            0 == e.data.operational && (window.vtexjs.checkout.removeAllItems(),
                                alert("O restaurante encontra-se fechado nesse momento. Horário de atendimento é de " + e.data.operation.start + "hs até as " + e.data.operation.end + 'hs. \rClique em "OK" para voltar para a home'),
                                location.href = "/")
                        });
                    },
                    $(window).on("orderFormUpdated.vtex", function (o, n) {
                        if (0 === Object.keys(n.items).length && $(document.body).addClass("cart-empty"),
                            setTimeout(function () {
                                // e.cartStructure(),
                                e.readOnly()
                            }, 1e3),
                            !t && !n.canEditData) {
                            t = !0;
                            var a = setInterval(function () {
                                $("#btn-identified-user-button").length && (clearInterval(a),
                                    $('<button class="btn btn-large" id="btnForceLogin">Entrar</button>').insertAfter("#btn-identified-user-button"),
                                    $("#btnForceLogin").on("click", function () {
                                        $(".identified-user-modal").hide(),
                                            window.localStorage.setItem("updateAddress", window.localStorage.getItem("shippingData")),
                                            window.vtexid.start()
                                    }))
                            }, 100);
                            $([document.documentElement, document.body]).animate({
                                scrollTop: 0
                            }, 100)
                        }
                    });
                var o = 0,
                    i = setInterval(function () {
                        window.vtexjs && window.vtexjs.checkout && (clearInterval(i),
                                e.changeFieldOnPayment()),
                            50 === o && clearInterval(i),
                            o++
                    }, 300);
                e.imageSize(),
                    e.hideTotalWhenInputIsFocused(),
                    e.setAddressSearchInput(),
                    e.limitInputCharacter(),
                    e.readOnly(),
                    e.checkCPF(),
                    window.addEventListener("hashchange", function () {
                        e.checkCPF()
                    })
            }
            return e.prototype.cartStructure = function () {
                    $(".product-item").length && $(".product-item:not(.aaxis-active)").addClass("aaxis-active").each(function () {
                        $(this).after('<tr class="kfc-quantity-price"> <td colspan="3"> ' + $(this).find(".quantity-price .total-price").text() + " </td> </tr>"),
                            $(this).before('<tr class="kfc-line"> <td colspan="4"><div></div></td> </tr>')
                    })
                },
                e.prototype.readOnly = function () {
                    // !window.tempvar?window.tempvar=1:window.tempvar+=1;         
                    //     $(".item-attachments-name-acompanhamentos .item-attachment-value, .item-attachment-name-bebidas .item-attachment-value, .item-attachment-name-open-to-extras .item-attachment-value, .item-attachment-name-sobremesas .item-attachment-value").attr({
                    //         readonly: !0
                    //     });

                    // // });
                    // var e = setInterval(function() {
                    //     document.querySelectorAll(".item-attachment-value").length && (clearInterval(e),
                    //     $(".item-attachments-name-acompanhamentos .item-attachment-value, .item-attachment-name-bebidas .item-attachment-value, .item-attachment-name-open-to-extras .item-attachment-value, .item-attachment-name-sobremesas .item-attachment-value").attr({
                    //         readonly: !0
                    //     }),
                    //     $(".item-attachment-name-label input[type=checkbox]").each(function() {
                    //         var e = $(this);
                    //         e.attr("checked") ? e.attr({
                    //             disabled: !0
                    //         }) : e.parent().parent().hide()
                    //     }))
                    // }, 200)
                },
                e.prototype.header = function () {
                    $(".mcd-mobile-header-search-btn").click(function () {
                            $(".mcd-mobile-header-search").show()
                        }),
                        $(".mcd-mobile-header-search-close").click(function () {
                            $(".mcd-mobile-header-search").hide()
                        }),
                        $(window).on("orderFormUpdated.vtex", function (e, t) {
                            var o = 0;
                            t.items.map(function (e) {
                                    o += e.quantity
                                }),
                                1 === o.toString().length && (o = "0" + o),
                                $(".mcd-mobile-header-cart-value").text(o)
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
                e.prototype.imageSize = function () {
                    var e = setInterval(function () {
                        var t = document.querySelectorAll(".cart-items .product-image img");
                        t.length && (clearInterval(e),
                            $(t).each(function (e, t) {
                                var o = t.src;
                                t.src = o.replace("-55-55", "-350-350")
                            }))
                    }, 200)
                },
                e.prototype.addToCart = function (e) {
                    window.vtexjs.checkout.addToCart([{
                        id: e,
                        quantity: 1,
                        seller: 1
                    }]).done(function (e) {
                        window.checkout.update(),
                            $("body").animate({
                                scrollTop: 0
                            }, 500)
                    })
                },
                e.prototype.upSelling = function () {
                    ! function (e, t) {
                        if (-1 !== location.hash.indexOf("#/cart")) {
                            var o = t.getElementsByTagName("div")[0],
                                n = t.createElement("iframe");
                            if (n.src = "/upsell",
                                n.className = "iframe-upsell",
                                n.scrolling = "no",
                                o.parentNode.insertBefore(n, o),
                                navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
                                var a = $(window).width();
                                $(document.getElementsByClassName("iframe-upsell")[0]).css({
                                    width: a + "px"
                                })
                            }
                            setTimeout(function () {
                                $(document.getElementsByClassName("iframe-upsell")[0]).css({
                                    display: "block"
                                })
                            }, 4e3)
                        }
                    }(window, document)
                },
                e.prototype.hideTotalWhenInputIsFocused = function () {
                    void 0 !== window.orientation && $(document.body).on("focus", "textarea, input", function () {
                        $(document.body).addClass("hide-summary")
                    }).on("blur", "textarea, input", function () {
                        $(document.body).removeClass("hide-summary")
                    })
                },
                e.prototype.changeFieldOnPayment = function () {
                    var aaa = this;
                    setTimeout(function () {
                            window.vtexjs.checkout.getOrderForm().then(function (e) {
                                window.vtexjs.checkout.orderForm.openTextField && window.vtexjs.checkout.orderForm.openTextField.value && $("#cart-note").val(window.vtexjs.checkout.orderForm.openTextField.value.replace(/(.*\w+)( \/ Observação: )/gi, ""))
                            })
                        }, 1e3),
                        $(window).on("orderFormUpdated.vtex", function (e, t) {
                            setTimeout(function () {
                                    if (e.currentTarget.paymentData.showPaymentOptions() && Object.keys(e.currentTarget.paymentData.getAllPayments()).length) {
                                        var t = e.currentTarget.paymentData.getAllPayments()[0];
                                        if (201 === t.paymentSystem) {
                                            $("#cambioField ." + t.group).length || ($('<label id="cambioField-Title" for="#cambioField">Troco para quanto?</label><input type="text" id="cambioField" class="cambio-textarea"  maxlength="20"></input>').appendTo("." + t.group),
                                                $("#cambioField, #cart-note").on("blur", function (e) {
                                                    var t = $("#cart-note").val();
                                                    window.vtexjs.checkout.sendAttachment("openTextField", {
                                                        value: "Cliente paga com: " + $("#cambioField").val() + " / Observação: " + $("#cart-note").val()
                                                    }).then(function () {
                                                        $("#cart-note").val(t)
                                                    })
                                                }))
                                        }
                                    }
                                    $(".pg-tarjeta-de-credito").hasClass("active") ? $("#cambioField, #cambioField-Title").fadeOut() : $("#cambioField, #cambioField-Title").fadeIn()
                                }, 500),
                                $("#opt-in-newsletter").bind("change", function (e) {
                                    0 == $(this).prop("checked") ? $("#go-to-shipping").attr("disabled", "true") : $("#go-to-shipping").removeAttr("disabled")
                                })
                        })
                },
                e.prototype.cambioOnTotalizer = function () {
                    setTimeout(function () {
                        $(".cart-template.active .totalizers .totalizers-list .monetary").each(function (e, t) {
                            $(this).html().indexOf("3.800") < 1 ? $(".cart-template.active .totalizers tfoot").before('<tbody class="totalizers-list fakeTotalizer">                 <tr class="Items" style="display: block;">                    <td class="monetary">Frete <span>$ 3.800</span></td>                </tr>            </tbody>') : $(".fakeTotalizer").remove()
                        })
                    }, 2500)
                },
                e.prototype.setAddressSearchInput = function () {
                    var e = function () {
                        switch (document.location.hash) {
                            case "#/shipping":
                                setTimeout(function () {
                                    ! function () {
                                        if (!$("#ship-address-search").val()) {
                                            var e = document.cookie,
                                                t = "MCD_address=",
                                                o = e.indexOf("; " + t);
                                            if (-1 == o) {
                                                if (0 != (o = e.indexOf(t)))
                                                    return null
                                            } else
                                                o += 2;
                                            var n = e.indexOf(";", o); -
                                            1 == n && (n = e.length),
                                                $("#ship-address-search").val(unescape(e.substring(o + t.length, n)))
                                        }
                                    }()
                                }, 1500)
                        }
                    };
                    window.addEventListener("hashchange", e),
                        e()
                },
                e.prototype.phoneValidation = function () {
                    setInterval(function () {
                            $("#client-new-phone").attr("placeholder", "999 99999999")
                        }, 300),
                        document.getElementById("client-new-phone").addEventListener("keyup", function (e) {
                            var t = document.getElementById("client-new-phone");
                            e.which ? e.which : e.keyCode;
                            t.value = function (e) {
                                var t = (e = (e = e.replace(/\D/g, "")).substring(0, 10)).length;
                                return e = 0 == t ? e : t < 3 ? e : e.substring(0, 3) + " " + e.substring(3, 10)
                            }(t.value)
                        });
                    document.getElementById("client-new-phone").addEventListener("blur", function (e) {
                        11 == String($(e.currentTarget).val()).length ? ($(e.currentTarget).addClass("success").next(".error").remove(),
                            $("#go-to-shipping, #go-to-payment").removeAttr("disabled")) : (0 == $(e.currentTarget).next(".error").length && $('<span class="help error" style="">Introduzca un número de teléfono válido, por favor.</span>').insertAfter(e.currentTarget),
                            $(e.currentTarget).removeClass("success"),
                            $("#go-to-shipping, #go-to-payment").attr({
                                disabled: !0
                            }))
                    })
                },
                e.prototype.reloadWindow = function () {
                    window.vtexjs.checkout.getOrderForm().then(function (e) {
                        window.checkout.update(),
                            $("body").animate({
                                scrollTop: 0
                            }, 500)
                    })
                },
                e.prototype.limitInputCharacter = function () {
                    var e = $("#orderForm-clientProfileData-template"),
                        t = $("<div />").html(e.html());
                    t.find("input#client-first-name").attr("maxlength", 50).attr("data-parsley-maxlength", 50),
                        e.html(t.html()),
                        $('[id|="orderForm-shipping-address"]').each(function () {
                            var e = $(this),
                                t = $("<div />").html(e.html());
                            t.find('[name="complement"]').attr("maxlength", 50).attr("data-parsley-maxlength", 50),
                                e.html(t.html())
                        }),
                        $('[name="complement"]').attr("maxlength", 50).attr("data-parsley-maxlength", 50),
                        $("input#client-first-name").attr("maxlength", 50).attr("data-parsley-maxlength", 50),
                        $(window).on("load", function () {
                            $("#shipping-data").on("addressUpdated.vtex", function () {
                                clearTimeout(0);
                                setTimeout(function () {
                                    $('[name="complement"]').attr("maxlength", 50).attr("data-parsley-maxlength", 50),
                                        $("#ship-neighborhood").attr({
                                            maxlength: 50
                                        })
                                }, 300)
                            })
                        })
                },
                e.prototype.removeItem = function (e) {
                    var t = window.vtexjs.checkout.orderForm.items,
                        o = t[e],
                        n = [];
                    if (n.push({
                            index: e,
                            quantity: 0
                        }),
                        o.attachments.length) {
                        var a = o.attachments.findIndex(function (e) {
                            if (-1 !== e.name.toLowerCase().indexOf("extras"))
                                return !0
                        });
                        if (-1 !== a)
                            for (var r = o.attachments[a].content["Open to Extras"].split(", "), i = 0; i < r.length; i++)
                                for (var s = t.length - 1; s >= 0; s--)
                                    t[s].name === r[i] && n.push({
                                        index: s,
                                        quantity: t[s].quantity - 1
                                    })
                    }
                    window.vtexjs.checkout.updateItems(n, null, !1)
                },
                e.prototype.checkCPF = function () {
                    var e = setInterval(function () {
                        var t = $(".payment-confirmation-wrap");
                        if (t.length && window.vtexjs && window.vtexjs.checkout && window.vtexjs.checkout.orderForm) {
                            var o = window.vtexjs.checkout.orderForm.customData && window.vtexjs.checkout.orderForm.customData.customApps && window.vtexjs.checkout.orderForm.customData.customApps.length && window.vtexjs.checkout.orderForm.customData.customApps[0].fields && window.vtexjs.checkout.orderForm.customData.customApps[0].fields.cpfCnpjCupomFiscal ? window.vtexjs.checkout.orderForm.customData.customApps[0].fields.cpfCnpjCupomFiscal : "",
                                n = '<div class="cpf-na-nota"><strong>CPF/CNPJ na nota</strong><input type="tel" id="cpfoucnpj" maxlength="14" value="' + o + '"></div>';
                            clearInterval(e),
                                0 === $(".cpf-na-nota").length && $(n).prependTo(t);
                            var a = $("#cpfoucnpj");
                            a.length && $(a).on("blur", function (e) {
                                var t = !!$(".payment-submit-wrap button:disabled").length,
                                    n = String(e.currentTarget.value).replace(/\D/gi, "");
                                n && (t || $(".payment-submit-wrap button").attr({
                                            disabled: !0
                                        }),
                                        $.ajax({
                                            method: "PUT",
                                            type: "PUT",
                                            headers: {
                                                "Content-Type": "application/json; charset=UTF-8"
                                            },
                                            url: "/api/checkout/pub/orderForm/" + window.vtexjs.checkout.orderFormId + "/customData/profile/cpfCnpjCupomFiscal",
                                            data: JSON.stringify({
                                                value: n
                                            })
                                        }).done(function () {
                                            o = n,
                                                t || $(".payment-submit-wrap button").attr({
                                                    disabled: !1
                                                })
                                        })),
                                    !n && o && (t || $(".payment-submit-wrap button").attr({
                                            disabled: !0
                                        }),
                                        $.ajax({
                                            method: "DELETE",
                                            type: "DELETE",
                                            headers: {
                                                "Content-Type": "application/json; charset=UTF-8"
                                            },
                                            url: "/api/checkout/pub/orderForm/" + window.vtexjs.checkout.orderFormId + "/customData/profile/cpfCnpjCupomFiscal"
                                        }).done(function () {
                                            t || (o = "",
                                                $(".payment-submit-wrap button").attr({
                                                    disabled: !1
                                                }))
                                        }))
                            })
                        }
                    }, 500)
                },
                e.prototype.masterpassFlowValidation = function () {
                    $(window).on("orderFormUpdated.vtex", function (e, t) {
                        if (t && t.paymentData && t.paymentData.payments && t.paymentData.payments.length && !t.paymentData.payments[0].tokenId && "null" != t.marketingData.marketingTags[0])
                            return window.vtexjs.checkout.sendAttachment("marketingData", {
                                // marketingTags: ["null"]
                            })
                    })
                },
                e
        }();
    window.MCD = new this.AAXIS
}]);