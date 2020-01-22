// V_20200122-1840
(function(t) {
    function e(e) {
        for (var i, o, a = e[0], c = e[1], u = e[2], d = 0, p = []; d < a.length; d++) o = a[d], r[o] && p.push(r[o][0]), r[o] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (t[i] = c[i]);
        l && l(e);
        while (p.length) p.shift()();
        return s.push.apply(s, u || []), n()
    }

    function n() {
        for (var t, e = 0; e < s.length; e++) {
            for (var n = s[e], i = !0, a = 1; a < n.length; a++) {
                var c = n[a];
                0 !== r[c] && (i = !1)
            }
            i && (s.splice(e--, 1), t = o(o.s = n[0]))
        }
        return t
    }
    var i = {},
    r = {
        app: 0
    },
    s = [];

    function o(e) {
        if (i[e]) return i[e].exports;
        var n = i[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports
    }
    o.m = t, o.c = i, o.d = function(t, e, n) {
        o.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, o.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, o.t = function(t, e) {
        if (1 & e && (t = o(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) o.d(n, i, function(e) {
                return t[e]
            }.bind(null, i));
        return n
    }, o.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return o.d(e, "a", e), e
    }, o.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, o.p = "/";
    var a = window["webpackJsonp"] = window["webpackJsonp"] || [],
        c = a.push.bind(a);
    a.push = e, a = a.slice();
    for (var u = 0; u < a.length; u++) e(a[u]);
    var l = c;
    s.push([0, "chunk-vendors"]), n()
})({
    0: function(t, e, n) {
        t.exports = n("56d7")
    },
    "345b": function(t, e, n) {
        "use strict";
        var i = n("b5ff"),
            r = n.n(i);
        r.a
    },
    "53d7": function(t, e, n) {
        "use strict";
        var i = n("730d"),
            r = n.n(i);
        r.a
    },
    "56d7": function(t, e, n) {
        "use strict";
        n.r(e);
        n("cadf"), n("551c"), n("f751"), n("097d");
        var i = n("2b0e"),
            r = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    attrs: {
                        id: "app"
                    }
                }, [n("notifications", {
                    attrs: {
                        group: "warning",
                        classes: "alert-warning",
                        position: "top center"
                    }
                }), n("notifications", {
                    attrs: {
                        group: "error",
                        classes: "alert-error",
                        position: "top center"
                    }
                }), n("notifications", {
                    attrs: {
                        group: "success",
                        classes: "alert-success",
                        position: "top center"
                    }
                }), n("notifications", {
                    attrs: {
                        group: "info",
                        classes: "alert-info",
                        position: "top center"
                    }
                }), n("Header"), n("HelloWorld"), n("Footer")], 1)
            },
            s = [],
            o = function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("main", {
                    attrs: {
                        id: "cart-list"
                    }
                }, [t.loading ? n("div", {
                    staticClass: "center mv4 tc loading loading-lg loading-black"
                }) : [t.isEmpty ? n("div", {
                    staticClass: "empty-cart-content tc"
                }, [t._m(0), t._m(1)]) : n("div", {
                    staticClass: "basket-container container"
                }, [n("div", {
                    staticClass: "cf"
                }, [n("div", {
                    staticClass: "fl w-100 relative mv3"
                }, [n("div", {
                    staticClass: "basket fl bg-white w-100"
                }, [n("div", {
                    staticClass: "fl w-100 relative mv3"
                }, t._l(t.wishlist, function(e) {
                    return n("BasketItem", {
                        key: e,
                        attrs: {
                            skuId: e,
                            block: t.actionBlocked,
                            checkedItems: t.checkedItems,
                            availability: t.availability[e]
                        },
                        on: {
                            blocked: t.onBlock
                        }
                    })
                }), 1)]), n("div", {
                    staticClass: "footer-actions fl bg-white w-100"
                }, [n("div", {
                    staticClass: "accept-terms"
                }, [n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.acceptConditions,
                        expression: "acceptConditions"
                    }],
                    attrs: {
                        type: "checkbox",
                        name: "product-checkbox"
                    },
                    domProps: {
                        checked: Array.isArray(t.acceptConditions) ? t.a_i(t.acceptConditions, null) > -1 : t.acceptConditions
                    },
                    on: {
                        click: t.checkCoditions,
                        change: function(e) {
                            var n = t.acceptConditions,
                                i = e.target,
                                r = !!i.checked;
                            if (Array.isArray(n)) {
                                var s = null,
                                    o = t._i(n, s);
                                i.checked ? o < 0 && (t.acceptConditions = n.concat([s])) : o > -1 && (t.acceptConditions = n.slice(0, o).concat(n.slice(o + 1)))
                            } else t.acceptConditions = r
                        }
                    }
                }), n("a", {
                    attrs: {
                        href: "#"
                    }
                }, [t._v(" Li e Aceito as Condições")])]), n("div", {
                    attrs: {
                        id: "add-all-products"
                    }
                }, [n("button", {
                    on: {
                        click: t.addAllFilteredProducts
                    }
                }, [t._v("\n                                Avançar\n                                ")])])])])])])]], 2)
            },
            a = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "empty-cart-message"
                }, [n("p", [t._v("Escolha produtos para continuar comprando")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "clearfix empty-cart-links"
                }, [n("a", {
                    staticClass: "btn btn-large btn-success link-choose-products",
                    attrs: {
                        href: "/",
                        id: "cart-choose-products"
                    }
                }, [t._v("Escolha produtos")])])
            }],
            c = n("f499"),
            u = n.n(c),
            l = (n("a481"), n("28a5"), function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "basket_item__wrapper relative",
                    class: {
                        basketBlock: t.block
                    },
                    attrs: {
                        id: t.skuId
                    }
                }, [t.loading ? n("div", {
                    staticClass: "left-0 top-0 w-100 h-100 center loading loading-lg loading-black",
                    staticStyle: {
                        position: "absolute",
                        "z-index": "10",
                        "background-color": "rgba(255,255,255,0.6)"
                    }
                }) : t._e(), n("div", {
                    staticClass: "basket_item flex flex-wrap flex-nowrap-ns pv3"
                }, [n("div", {
                    staticClass: "list-row"
                }, [n("div", {
                    staticClass: "r-content"
                }, [n("div", {
                    staticClass: "title"
                }, [t._v("\n                    " + t._s(t.product.productName) + "\n                ")]),]), n("div", {
                    staticClass: "l-content"
                }, [n("div", {
                    staticClass: "close"
                }, [n("button", {
                    staticClass: "basket_item__remove pointer bg-white white absolute z-2 top-0 left-0 link p2 fw3 bn",
                    on: {
                        click: function(e) {
                            return t.removeItem(t.skuId)
                        }
                    },
                    staticStyle: {
                        background: "white !important",
                        padding: "0px 0px 0px 77px"
                    }
                }, [n("i", {
                    staticClass: "far fa-trash-alt",
                    staticStyle: {
                        color: "grey",
                        cursor: "pointer"
                    }
                })])])])]), n("div", {
                    staticClass: "two-row"
                }, [n("div", {
                    staticClass: "r-content"
                }, [n("div", {
                    staticClass: "item-image"
                }, [n("img", {
                    attrs: {
                        src: t.item.imageUrl
                    }
                })]), n("div", {
                    staticClass: "p"
                }, [n("span", {
                    staticStyle: {
                        "white-space": "pre-wrap",
                        "word-wrap": "break-word"
                    },
                    domProps: {
                        innerHTML: t._s(t.product.description)
                    }
                })]), n("div", {
                    staticClass: "basket_item__id",
                    staticStyle: {
                        display: "none",
                        visibility: "hidden"
                    }
                }, [t._v(t._s(t.item.itemId))])]), n("div", {
                    staticClass: "l-content"
                })]), n("div", {
                    staticClass: "tree-row"
                }, [0 == t.showStock ? n("div", {
                    staticClass: "available"
                }, [n("div", {
                    staticClass: "l-content"
                }, [t._v("\n                    Total    "), n("strong", [t._v(t._s(t._f("priceFilter")(t.item.sellingPrice)))])])]) : n("div", {
                    staticClass: "unavailable"
                }, [n("div", {
                    staticClass: "first"
                }, [t._v("\n                    Indisponível\n                ")]), n("div", {
                    staticClass: "unavailable-box"
                }, [n("div", {
                    staticClass: "r-content"
                }, [t._v("\n                        Este produto não está disponível em nosso estoque e não será adicionado ao seu carrinho.\n                    ")]), n("div", {
                    staticClass: "l-content"
                }, [n("button", {
                    staticClass: "btn-warn",
                    attrs: {
                        id: "warn" + t.skuId
                    },
                    on: {
                        click: function(e) {
                            return t.warnMe(t.skuId)
                        }
                    }
                }, [t._v("Avise-me quando chegar")]), 0 == t.formSuccess ? n("form", {
                    staticClass: "un-form",
                    attrs: {
                        id: "un-form" + t.skuId
                    }
                }, [n("input", {
                    ref: "sku",
                    attrs: {
                        type: "hidden",
                        name: "sku"
                    },
                    domProps: {
                        value: t.skuId
                    }
                }), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.name,
                        expression: "name"
                    }],
                    ref: "name",
                    attrs: {
                        type: "text",
                        name: "name",
                        placeholder: "Seu nome:",
                        required: "required"
                    },
                    domProps: {
                        value: t.name
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.name = e.target.value)
                        }
                    }
                }), n("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.email,
                        expression: "email"
                    }],
                    ref: "email",
                    attrs: {
                        type: "email",
                        name: "email",
                        required: "required",
                        placeholder: "Seu e-mail:"
                    },
                    domProps: {
                        value: t.email
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.email = e.target.value)
                        }
                    }
                }), n("button", {
                    attrs: {
                        type: "submit"
                    },
                    on: {
                        click: t.submit
                    }
                }, [t._v("Ok")]), t.errors.length ? n("p", {
                    staticClass: "form-error"
                }, [n("b", [t._v("Informações inválidas")])]) : t._e()]) : t._e(), t.formSuccess ? n("p", {
                    staticClass: "form-success"
                }, [n("b", [t._v("Cadastro efetuado com sucesso")])]) : t._e()])])])])])])
            }),
            d = [],
            p = (n("7f7f"), n("51f5")),
            m = n.n(p),
            f = (n("2769"), n("9380"), n("8a30")),
            v = n.n(f),
            h = n("2f62"),
            g = {
                name: "BasketItem",
                components: {},
                props: {
                    block: Boolean,
                    availability: Boolean,
                    checkedItems: Array,
                    skuId: String
                },
                computed: {},
                watch: {
                    doneUpdateItem: function(t) {
                        t && this.item.uniqueId === t.uniqueId && this.item.id === t.id && this.doneUpdating(t)
                    },
                    productClusters: function(t) {
                        t && v()(t, "Catalogo 3x2") && this.item.quantity < 3 && this.messageClusters.push("Catalogo 3x2")
                    },
                    availableQuantity: function(t) {
                        t && t <= 10 && (this.showStock = !0)
                    },
                    "inViewport.now": function(t) {
                        t && this.stockLoaded
                    }
                },
                data: function() {
                    return {
                        itemmodelcheck: null,
                        isTyping: !1,
                        timer: null,
                        hasClickedRemove: !1,
                        lowStock: !1,
                        skuSelected: null,
                        showModal: !1,
                        loading: !1,
                        changingQtd: !1,
                        showStock: !1,
                        stockLoaded: !1,
                        availableQuantity: null,
                        product: [],
                        promotions: [],
                        messageClusters: [],
                        item: Object,
                        sku: "",
                        name: "",
                        email: "",
                        errors: "",
                        formSuccess: !1
                    }
                },
                created: function() {
                    this.getItem()
                },
                methods: {
                    warnMe: function(t) {
                        var e = document.getElementById("warn" + t),
                            n = document.getElementById("un-form" + t);
                        n.style.display = "flex", e.style.display = "none"
                    },
                    submit: function(t) {
                        t.preventDefault();
                        var e = this;
                        this.errors = [];
                        var n = this.$cookie.get("_schools_id"),
                            i = this.$refs.email.value,
                            r = this.$refs.name.value,
                            s = this.$refs.sku.value;
                        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(i) && r) return $.ajax({
                            type: "post",
                            url: "https://servidorlivrofacil.herokuapp.com/api/alerts",
                            data: {
                                email: i,
                                name: r,
                                productId: s,
                                schoolId: n
                            },
                            success: function() {
                                e.formSuccess = !0
                            }
                        }), !0;
                        this.errors.push("Precisamos do seu nome"), r || this.errors.push("Precisamos do seu nome"), i || this.errors.push("Precisamos do seu email")
                    },
                    getItem: function() {
                        var t = this,
                            e = this,
                            n = this.skuId;
                            //mz
                        var sc= $.cookie("VTEXSC")?$.cookie("VTEXSC"):"";
                        window.$.get("/api/catalog_system/pub/products/search?fq=skuId:" + n+"&"+sc).then(function(n) {
                            if(!n[0]) return;

                            t.product = n[0], t.item = n[0].items[0];
                            var i = n[0].items[0];
                            if (t.item.imageUrl = t.item.images[0].imageUrl, e.stockLoaded = !0, i) {
                                var r = i.sellers[0];
                                // fazer verificação do estoque
                                // console.log("comercial offer" + r.commertialOffer.AvailableQuantity)
                                r && (r.commertialOffer.AvailableQuantity <= 0 ? e.showStock = !0 : e.item.sellingPrice = r.commertialOffer.Price)
                            }
                        })
                    },
                    checkItem: function(t) {
                        var e = this.checkedItems,
                            n = t.target.value,
                            i = e.indexOf(n);
                        i > -1 ? e.splice(i, 1) : e.push(n)
                    },
                    removeItem: function(t) {
                        var e = document.getElementById(t);
                        if (e.style.display = "none", !this.hasClickedRemove) {
                            this.hasClickedRemove = !0;
                            var n = this,
                                i = t;
                            i && (n.loading = !0, n.$store.dispatch("addToRequestsQueue", {
                                qtd: 0,
                                item: {
                                    uniqueId: i,
                                    id: n.item.id
                                }
                            }), n.$store.dispatch("removeItem", t))
                        }
                    },
                    showLowStockProductSelection: function() {
                        this.lowStock = !0, this.skuSelected = this.item.id, this.showModal = !0
                    }
                }
            },
            w = g,
            k = (n("c460"), n("2877")),
            b = Object(k["a"])(w, l, d, !1, null, "e2ada9da", null),
            _ = b.exports,
            C = (n("6edf"), n("2657"), n("3dd1")),
            y = n.n(C),
            x = (n("415b"), function(t) {
                for (var e = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                    var r = n[i];
                    while (" " == r.charAt(0)) r = r.substring(1, r.length);
                    if (0 == r.indexOf(e)) return r.substring(e.length, r.length)
                }
                return null
            }),
            I = {
                name: "HelloWorld",
                components: {
                    BasketItem: _
                },
                watch: {},
                data: function() {
                    return {
                        checkedItems: [],
                        wishlist: [],
                        availability: [],
                        loading: !0,
                        actionBlocked: !1,
                        studentData: {
                            _user_email: "",
                            _schools_id: ""
                        },
                        listData: {
                            _user_email: "",
                            _dockid: "1-B",
                            _count_addtocar: 0
                        },
                        conditionValue: !1,
                        acceptConditions: !1
                    }
                },
                computed: {
                    isEmpty: function() {
                        return this.wishlist ? !this.wishlist.length : !this.wishlist
                    }
                },
                created: function() {
                    this.getWishlist()
                },
                methods: {
                    checkCoditions: function(t) {
                        this.conditionValue;
                        var e = t.target.checked;
                        this.conditionValue = e
                    },
                    getWishlist: function() {
                        var t = this,
                            e = x("_list_id");
                        $.ajax({
                            url: "/api/dataentities/LS/documents/" + e + "?_fields=id,skusaprovados,escolaid,serie",
                            type: "GET",
                            headers: {
                                Accept: "application/json",
                                "REST-range": "resources=0-50",
                                "Content-Type": "application/json; charset=utf-8"
                            }
                        }).done(function(e) {
                            if ("null" == e.id) t.wishlist = null;
                            else {
                                var n = e.skusaprovados.split(",");
                                t.wishlist = n
                                window.vtexjs.checkout.getOrderForm().then(function(orderForm) {
                                    var postalCode =  orderForm.shippingData.address ?orderForm.shippingData.address.postalCode :'';
                                    if(!postalCode) {
                                        t.loading = !1;
                                        return;
                                    }

                                    var bodyData = {
                                        'items':[],
                                        "country": "BRA",
                                        "postalCode": postalCode
                                    };
                                    for(var i=0; i<n.length; i++) {
                                        bodyData.items.push({
                                            "id": n[i],
                                            "quantity": 1,
                                            "seller": "1"
                                        });
                                    }
                                    
                                    
                                    $.ajax({
                                        url:"/api/checkout/pub/orderforms/simulation",
                                        type: "POST",
                                        dataType: 'json',
                                        contentType: 'application/json',
                                        data: JSON.stringify(bodyData)
                                    }).then(function(result) {
                                        console.log('result',result);
                                        t.availability = [];
                                        for(var k=0; k<result.items.length; k++) {
                                            t.availability[result.items[k].id] = t.availability[result.items[k].id] && result.items[k].availability=="available";
                                        } 
                                        t.loading = !1
                                    });
                                        
                                })
                            }
                        }).fail(function(t) {
                            console.log(t)
                        })
                    },
                    addAllFilteredProducts: function(t) {
                        if(this.conditionValue==0) {
                            y.a.fire({
                                title: "",
                                text: 'Aceite o termo "Li e Aceito as Condições"',
                                icon: "error",
                                confirmButtonText: "OK"
                            });
                            return;
                        }

                        var items = vtexjs.checkout.orderForm ?vtexjs.checkout.orderForm.items :[];
                        var removeItems = [];
                        //console.log('items', items);
                        for(var i=0; i < items.length; i++) {
                            //console.log('item', items[i]);
                            //console.log(items[i].availability, !(items[i].availability=='available'));
                            if(!(items[i].availability=='available'))
                                removeItems.push({
                                    index: i,
                                    quantity: 0
                                });
                        }
                        //console.log('removeItems', removeItems);
                        if(removeItems.length)
                            vtexjs.checkout.updateItems(removeItems, null, false).done(function() {
                                console.log('itemsAfterRemove', vtexjs.checkout.orderForm.items);
                                window.location.href = "/checkout?listSlas=true"
                            });
                        else {
                            window.location.href = "/checkout?listSlas=true";
                        }
                    },
                    addToCart: function(t) {
                        var e = t.length,
                            n = 0,
                            i = [],
                            r = this,
                            s = [];
                        vtexjs.checkout.getOrderForm().done(function(o) {
                            var a = o.items.length - 1;
                            for (var c = x("_student"), u = x("_school"), l = x("_list_id"), d = (x("_serie") + "º").replace("ºº", "º"), p = x("VTEXSC").replace("sc=", ""), m = 'NomeAluno:"' + c + '"; Escola:"' + u + '"; Serie:"' + d + '";IdLista:"' + l + '"', f = new Array, v = t.length - 1; v >= 0; v--) {
                                var h = t[v];
                                f.push({
                                    dockId: r.listData._dockid,
                                    seller: "1",
                                    quantity: 1,
                                    id: h,
                                    attachments: [{
                                        name: "info",
                                        content: {
                                            aluno: m
                                        },
                                        noSplitItem: !0
                                    }]
                                })
                            }
                            s = {
                                orderItems: f
                            }, r.addToCartRequest(s, i, m, p, e, n)
                        })
                    },
                    addToCartRequest: function(t, e, n, i, r, s) {
                        var o = this;
                        vtexjs.checkout.getOrderForm().done(function(e) {
                            var n = e.orderFormId,
                                r = {
                                    async: !0,
                                    crossDomain: !0,
                                    url: "/api/checkout/pub/orderForm/" + n + "/items?sc=" + i,
                                    type: "POST",
                                    headers: {
                                        Accept: "application/json",
                                        "Content-Type": "application/json",
                                        "Cache-Control": "no-cache"
                                    },
                                    processData: !1,
                                    data: u()(t)
                                };
                            $.ajax(r).done(function(t) {
                                o._marketingData()
                            })
                        })
                    },
                    _marketingData: function() {
                        vtexjs.checkout.getOrderForm().done(function(t) {
                            var e = "";
                            e = x("IPS");
                            var n = "",
                                i = "",
                                r = "",
                                s = "/checkout?listSlas=true";
                            e && (n = e.split("Campanha=")[1].split("&")[0]);
                            var o = (x("ISS") || "").split("InternalCampaign=").pop().split("&").shift();
                            if (n || i || r || o || r) {
                                var a = {
                                    utmCampaign: n || "",
                                    utmMedium: i || "",
                                    utmSource: r || "",
                                    utmiCampaign: o,
                                    utmiPart: r || ""
                                };
                                vtexjs.checkout.sendAttachment("marketingData", a), setTimeout(function() {
                                    window.location.href = s
                                }, 500)
                            } else setTimeout(function() {
                                window.location.href = s
                            }, 500)
                        })
                    },
                    setCookie: function(t, e, n) {
                        var i = new Date;
                        i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
                        var r = "expires=" + i.toUTCString();
                        window.document.cookie = t + "=" + e + ";" + r + ";path=/"
                    },
                    getCookie: function(t) {
                        for (var e = t + "=", n = window.document.cookie.split(";"), i = 0; i < n.length; i++) {
                            var r = n[i];
                            while (" " == r.charAt(0)) r = r.substring(1, r.length);
                            if (0 == r.indexOf(e)) return r.substring(e.length, r.length)
                        }
                        return null
                    },
                    onBlock: function(t) {
                        this.actionBlocked = t
                    }
                }
            },
            S = I,
            q = (n("345b"), Object(k["a"])(S, o, a, !1, null, "0da3d750", null)),
            j = q.exports,
            O = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            P = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "compra"
                }, [n("header", {
                    staticClass: "e-header"
                }, [n("div", {
                    staticClass: "e-center-content"
                }, [n("a", {
                    attrs: {
                        href: "/"
                    }
                }, [n("img", {
                    attrs: {
                        src: "/arquivos/QDf-logo-livrofacil.png",
                        alt: "Logo Livro Fácil"
                    }
                })]), n("p", {
                    staticClass: "e-finish"
                }, [t._v("Revise seus itens antes de seguir")]), n("div", {
                    staticClass: "e-safe-site"
                }, [n("p", [t._v("site seguro")]), n("img", {
                    attrs: {
                        src: "/arquivos/safelock.png",
                        alt: "Cadeado de segurança"
                    }
                })])])]), n("div", {
                    staticClass: "e-product-back"
                }, [t._v("voltar último "), n("br"), t._v(" produto")])])
            }],
            R = (n("a0c6"), {}),
            T = Object(k["a"])(R, O, P, !1, null, "9af8ff98", null),
            F = T.exports,
            E = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            A = [function() {
                var t = this,
                    e = t.$createElement,
                    n = t._self._c || e;
                return n("div", {
                    staticClass: "page"
                }, [n("link", {
                    attrs: {
                        rel: "stylesheet",
                        href: "https://io.vtex.com.br/front-libs/bootstrap/2.3.2/css/bootstrap-responsive.min.css"
                    }
                }), n("footer", {
                    staticClass: "e-footer"
                }, [n("div", {
                    staticClass: "e-center-content"
                }, [n("div", {
                    staticClass: "e-center-content-left"
                }, [n("p", [t._v("formas de pagamento")]), n("div", {
                    staticClass: "e-payment"
                }, [n("ul", [n("li", [n("img", {
                    attrs: {
                        src: "/arquivos/icon-mastercard.png",
                        alt: "Bandeira Mastercard"
                    }
                })]), n("li", [n("img", {
                    attrs: {
                        src: "/arquivos/icon-visa.png",
                        alt: "Bandeira Visa"
                    }
                })]), n("li", [n("img", {
                    attrs: {
                        src: "/arquivos/icon-diners.png",
                        alt: "Bandeira Dinners"
                    }
                })]), n("li", [n("img", {
                    attrs: {
                        src: "/arquivos/icon-boleto.png",
                        alt: "Boleto"
                    }
                })])])])]), n("div", {
                    staticClass: "e-center-content-right"
                }, [n("p", [t._v("segurança")]), n("img", {
                    attrs: {
                        src: "/arquivos/icon-lets.png",
                        alt: "Logo Clear Sale"
                    }
                })])])]), n("div", {
                    staticClass: "x-product__popup",
                    staticStyle: {
                        display: "none"
                    },
                    attrs: {
                        id: "redirectPopup"
                    }
                }, [n("div", {
                    staticClass: "x-product__popup-wrapper"
                }, [n("button", {
                    staticClass: "x-product__popup-close",
                    attrs: {
                        id: "redirectPopupClose"
                    }
                }, [t._v("x")]), n("h4", {
                    staticClass: "x-product__popup-title"
                }, [t._v("Deseja comprar uniformes para o seu filho?")]), n("p", {
                    staticClass: "x-product__popup-sub-title"
                }, [t._v("Selecione Abaixo")]), n("button", {
                    staticClass: "x-product__popup-button",
                    attrs: {
                        id: "cartToOrderformFake"
                    }
                }, [t._v("Fechar Pedido")]), n("a", {
                    staticClass: "x-product__popup-button x-product__popup-button--inverse",
                    attrs: {
                        href: "#",
                        id: "redirectPopupLink"
                    }
                }, [t._v("Ver uniformes")])])])])
            }],
            D = (n("53d7"), {}),
            Q = Object(k["a"])(D, E, A, !1, null, null, null),
            B = Q.exports,
            L = {
                name: "app",
                components: {
                    HelloWorld: j,
                    Header: F,
                    Footer: B
                }
            },
            M = L,
            U = (n("5c0b"), Object(k["a"])(M, r, s, !1, null, null, null)),
            H = U.exports,
            N = (n("55dd"), n("c5f6"), n("795b")),
            V = n.n(N),
            W = (n("96cf"), n("3b8d")),
            z = (n("ac6a"), n("5176")),
            J = n.n(z),
            G = n("a4bb"),
            X = n.n(G),
            K = n("59ad"),
            Y = n.n(K),
            Z = n("e814"),
            tt = n.n(Z),
            et = n("93c6"),
            nt = n.n(et),
            it = n("dd61"),
            rt = n.n(it);
        i["default"].use(h["a"]);
        var st = function(t, e, n) {
                console.log("cvalue", e), console.log("cname", t), sessionStorage.setItem(t, e)
        },
        ot = function(t) {
            for (var e = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
                var r = n[i];
                while (" " == r.charAt(0)) r = r.substring(1, r.length);
                if (0 == r.indexOf(e)) return r.substring(e.length, r.length)
            }
            return null
        },
        at = function(t) {
            return sessionStorage.getItem(t)
        },
        ct = function() {
            var t = ot("VTEXSC");
            return tt()(t ? t.split("=")[1] : 1)
        },
        ut = function(t) {
            var e = "";
            return t && null !== t && "" !== t && (e = t.split("&fq=skuId:").map(function(t) {
                var e = t.split("-");
                if (2 === e.length) {
                    var n = e[0],
                        i = e[1];
                    return !n && /^\s*$/.test(n) || !i && /^\s*$/.test(i) ? null : {
                        sku: n,
                        qty: i
                    }
                }
                return null
            }).filter(function(t) {
                return null !== t
            }).map(function(t) {
                return "&fq=skuId:" + t.sku + "-" + t.qty
            }).join("")), e
        },
        lt = function(t) {
            var e = [];
            return ut(t).split("fq=skuId:").filter(function(t) {
                return "" !== t
            }).map(function(t) {
                var e = t.split("-");
                return e[0] > 0 ? {
                    id: Y()(e[0]),
                    quantity: Y()(e[1]),
                    seller: "1"
                } : null
            }).filter(function(t) {
                return null !== t
            }).reduce(function(t, n) {
                return t[n.id] || (t[n.id] = {
                    quantity: 0,
                    id: n.id,
                    seller: "1"
                }, e.push(t[n.id])), t[n.id].quantity += n.quantity, t
            }, {}), e
        },
        dt = function(t) {
            return t.map(function(t) {
                return "fq=skuId:" + t.id + "-" + t.quantity
            })
        },
        pt = function(t) {
            var e = t.clientProfileData;
            return t.loggedIn ? t.loggedIn : "callCenterOperator" === t.userType && !!e && null !== e && null !== e.email
        },
        mt = new h["a"].Store({
            state: {
                orderForm: null,
                wishlist: null,
                productSwitch: null,
                requestsQueue: [],
                sending: !1,
                doneUpdateItem: null,
                currentRemoving: null
            },
            mutations: {
                saveOrderForm: function(t, e) {
                    e && (t.orderForm = e)
                },
                saveWishlist: function(t, e) {
                    e && (t.wishlist = e)
                },
                saveProductSwitch: function(t, e) {
                    t.productSwitch = e
                },
                switchAll: function(t, e) {
                    var n = t.productSwitch,
                        i = X()(n).reduce(function(t, n) {
                            return t[n] = {
                                substituteType: e
                            }, t
                        }, {});
                    t.productSwitch = i, st("substituicaoProduto", u()(t.productSwitch), {
                        expires: "",
                        path: "/"
                    })
                },
                saveSwitchOption: function(t, e) {
                    var n = X()(e).reduce(function(t, n) {
                            return "sku" !== n && (t[n] = e[n]), t
                        }, {}),
                        i = t.productSwitch,
                        r = X()(i).reduce(function(t, n) {
                            return n !== e.sku && (t[n] = i[n]), t
                        }, {});
                    r[e.sku] = n, t.productSwitch = r, st("substituicaoProduto", u()(t.productSwitch), {
                        expires: "",
                        path: "/"
                    })
                },
                quantityUpdated: function(t, e) {
                    t.doneUpdateItem = e
                },
                addToRequestsQueue: function(t, e) {
                    t.requestsQueue.push(e)
                },
                removeFromRequestsQueue: function(t) {
                    t.requestsQueue.shift()
                },
                requestStarted: function(t) {
                    t.sending = !0
                },
                requestEnded: function(t) {
                    t.sending = !1
                },
                saveCurrentRemoving: function(t, e) {
                    t.currentRemoving = e
                }
            },
            actions: {
                orderItems: function(t, e) {
                    for (var n = t.commit, i = J()({}, e), r = 0; r < i.items.length; r++) i.items[r]["cbyUniqueId"] = r + "+" + i.items[r].uniqueId;
                    var s = i.items,
                        o = JSON.parse(at("itemsOrdination"));
                    if (o) {
                        var a = o.criteria,
                            c = o.ascending;
                        if ("price" === a || "name" === a || "category" === a) {
                            var l = c ? "asc" : "desc",
                                d = "name";
                            "price" === a ? d = "sellingPrice" : "category" === a && (d = "category", s = rt()(s, function(t) {
                                var e = t;
                                return e["category"] = e.productCategories[e.productCategoryIds.split("/")[1]], e
                            })), s = nt()(s, d, l), i.items = s
                        }
                    }
                    var p = sessionStorage.getItem("substituicaoProduto");
                    if (p) m = JSON.parse(p), e.items.forEach(function(t) {
                        var e = m[t.id];
                        e || (m[t.id] = {
                            substituteType: "6"
                        })
                    }), n("saveProductSwitch", m), st("substituicaoProduto", u()(m), {
                        expires: "",
                        path: "/"
                    });
                    else {
                        var m = {};
                        e.items.forEach(function(t) {
                            m[t.id] = {
                                substituteType: "6"
                            }
                        }), n("saveProductSwitch", m), st("substituicaoProduto", u()(m), {
                            expires: "",
                            path: "/"
                        })
                    }
                    if (pt(e)) {
                        var f = e.items.length ? e.items.map(function(t) {
                                return "&fq=skuId:" + t.id + "-" + t.quantity
                            }).join("") : "",
                            v = e.userProfileId;
                        null !== v && (st("carrinho_persistido_id", v, {
                            expires: "",
                            path: "/"
                        }), st("carrinho_persistido_v2", f, {
                            expires: "",
                            path: "/"
                        }), $.ajax({
                            url: "/api/dataentities/CP/documents/" + v,
                            type: "PATCH",
                            data: u()({
                                json_sku: f
                            }),
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json; charset=utf-8"
                            }
                        }))
                    }
                    n("saveOrderForm", i)
                },
                getOrderForm: function() {
                    var t = Object(W["a"])(regeneratorRuntime.mark(function t(e) {
                        var n;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.dispatch, e.commit, t.abrupt("return", new V.a(function(t, e) {
                                        window.vtexjs.checkout.getOrderForm().then(function(e) {
                                            n("orderItems", e), t(e)
                                        }).fail(function(t) {
                                            e(t)
                                        })
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                getWishlist: function() {
                    var t = Object(W["a"])(regeneratorRuntime.mark(function t(e) {
                        var n;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.dispatch, e.commit, t.abrupt("return", new V.a(function(t, e) {
                                        var i = ot("qd_sss_wishlist_id");
                                        $.ajax({
                                            url: "/api/dataentities/wishlist/documents/" + i + "?_schema=qd-sss-wishlist&_fields=items",
                                            type: "GET",
                                            headers: {
                                                Accept: "application/json",
                                                "REST-range": "resources=0-50",
                                                "Content-Type": "application/json; charset=utf-8"
                                            }
                                        }).done(function(e) {
                                            n("wishlistItems", e), t(e), console.log(e)
                                        }).fail(function(t) {
                                            console.log(t)
                                        })
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                syncPersistedCart: function() {
                    var t = Object(W["a"])(regeneratorRuntime.mark(function t(e) {
                        var n;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return n = e.dispatch, e.commit, t.abrupt("return", new V.a(function(t, e) {
                                        vtexjs.checkout.getOrderForm().then(function(i) {
                                            pt(i) ? $.ajax({
                                                url: "/api/dataentities/CP/documents/" + i.userProfileId + "?_fields=json_sku",
                                                type: "GET",
                                                headers: {
                                                    Accept: "application/json",
                                                    "REST-range": "resources=0-50",
                                                    "Content-Type": "application/json; charset=utf-8"
                                                }
                                            }).done(function(r) {
                                                if (r) {
                                                    var s = dt(i.items);
                                                    s = lt(s.join("&")), s = dt(s);
                                                    var o = lt(r.json_sku);
                                                    o = dt(o);
                                                    var a = lt(o.join("&")),
                                                        c = r.json_sku; - 1 !== c.indexOf("clearOrderForm") ? i.items.length && (new Date).toDateString() === new Date(new Number(c.split("-")[1])).toDateString() ? (console.log("CP", "clearOrderForm"), vtexjs.checkout.removeAllItems().done(function(e) {
                                                        $.ajax({
                                                            url: "/api/dataentities/CP/documents/" + e.userProfileId,
                                                            type: "PATCH",
                                                            data: u()({
                                                                json_sku: ""
                                                            }),
                                                            headers: {
                                                                Accept: "application/json",
                                                                "Content-Type": "application/json; charset=utf-8"
                                                            }
                                                        }), n("orderItems", e), t(e)
                                                    })) : (n("orderItems", i), t(i)) : i.items.length ? u()(s.sort()) !== u()(o.sort()) && a.length ? vtexjs.checkout.removeAllItems().done(function(e) {
                                                        vtexjs.checkout.addToCart(a, null, ct()).done(function(e) {
                                                            n("orderItems", e), t(e)
                                                        })
                                                    }).fail(function(t) {
                                                        e(t)
                                                    }) : (n("orderItems", i), t(i)) : a.length ? vtexjs.checkout.addToCart(a, null, ct()).done(function(e) {
                                                        n("orderItems", e), t(e)
                                                    }) : (n("orderItems", i), t(i))
                                                } else n("orderItems", i), t(i)
                                            }).fail(function(t) {
                                                e(t)
                                            }) : (n("orderItems", i), t(i))
                                        }).fail(function(t) {
                                            e(t)
                                        })
                                    }));
                                case 2:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                updateItems: function() {
                    var t = Object(W["a"])(regeneratorRuntime.mark(function t(e, n) {
                        var i;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return i = e.dispatch, e.commit, console.log("Item para remover!", n), t.abrupt("return", new V.a(function(t, e) {
                                        var r = new vtexjs.Checkout;
                                        r.updateItems(n).then(function(e) {
                                            console.log("Item removido!"), i("orderItems", e), t()
                                        }).fail(function(t) {
                                            e(t)
                                        })
                                    }));
                                case 3:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }));

                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                showMessages: function(t, e) {
                    t.dispatch, t.commit;
                    if (e)
                        for (var n = 0; n < e.messages.length; n++) {
                            var r = e.messages[n];
                            r.text && i["default"].notify({
                                group: r.status,
                                text: r.text
                            })
                        }
                },
                removeItem: function() {
                    var t = Object(W["a"])(regeneratorRuntime.mark(function t(e, n) {
                        var i, r, s, o;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, e.commit("requestStarted"), t.next = 4, window.vtexjs.checkout.getOrderForm();
                                case 4:
                                    return i = t.sent, r = m()(i.items, {
                                        id: n
                                    }), s = [{
                                        index: r,
                                        quantity: 0
                                    }], t.next = 9, vtexjs.checkout.removeItems(s);
                                case 9:
                                    o = t.sent, console.log("itemRemoved", o), e.commit("requestEnded"), t.next = 17;
                                    break;
                                case 14:
                                    t.prev = 14, t.t0 = t["catch"](0), console.error(t.t0);
                                case 17:
                                case "end":
                                    return t.stop()
                            }
                        }, t, null, [
                            [0, 14]
                        ])
                    }));

                    function e(e, n) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                addToRequestsQueue: function(t, e) {
                    var n = t.dispatch,
                        i = t.commit;
                    t.state;
                    i("addToRequestsQueue", e), n("start")
                },
                removeFromRequestsQueue: function() {
                    var t = Object(W["a"])(regeneratorRuntime.mark(function t(e) {
                        var n, i, r;
                        return regeneratorRuntime.wrap(function(t) {
                            while (1) switch (t.prev = t.next) {
                                case 0:
                                    return e.dispatch, n = e.commit, i = e.state, r = i.requestsQueue[0], n("removeFromRequestsQueue"), t.abrupt("return", r);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }, t)
                    }));

                    function e(e) {
                        return t.apply(this, arguments)
                    }
                    return e
                }(),
                callRequest: function(t, e) {
                    var n = t.dispatch,
                        i = t.commit,
                        r = t.state,
                        s = e.item,
                        o = (e.qtd, new window.vtexjs.Checkout);
                    n("getWishlist"), o.getOrderForm().then(function(t) {
                        var e = m()(t.items, {
                            uniqueId: s.uniqueId,
                            id: s.id
                        });
                        if (-1 !== e) {
                            var n = {
                                index: e,
                                quantity: 0
                            };
                            return o.removeItems([n])
                        }
                    }).then(function(t) {
                        i("quantityUpdated", s), r.requestsQueue.length ? n("removeFromRequestsQueue").then(function(t) {
                            i("saveCurrentRemoving", t), n("callRequest", t)
                        }) : (i("saveCurrentRemoving", null), i("requestEnded"), n("getOrderForm"), n("start"))
                    }).fail(function(t) {
                        console.error("Removing item: ", items, t), i("requestEnded"), n("start")
                    })
                },
                start: function(t) {
                    var e = t.dispatch,
                        n = t.commit,
                        i = t.state;
                    !i.sending && i.requestsQueue.length && e("removeFromRequestsQueue").then(function(t) {
                        t ? (n("saveCurrentRemoving", t), console.log("%cstarting", "font-size:14px;color:red;", t), n("requestStarted"), e("callRequest", t)) : (console.log("%cempty queue", "font-size:14px;color:red;"), n("requestEnded"))
                    })
                }
            }
        }),
        ft = n("d847"),
        vt = n.n(ft),
        ht = new i["default"];

        function gt(t) {
            vt()(t.prototype, {
                $bus: {
                    get: function() {
                        return ht
                    }
                }
            })
        }
        n("6b54"), n("3b2b"), n("4917");
        var wt = {
                install: function(t, e) {
                    t.prototype.$getSalesChannel = function() {
                        var t = document.cookie.match("(^|;) ?CBYPHSC=([^;]*)(;|$)");
                        return t ? t[2] : 1
                    }, t.mixin({
                        filters: {
                            imageUrl: function(t) {
                                return t.replace(t.match(new RegExp("/ids/[^-]*(.*?)/"))[1], "-310-120")
                            },
                            priceFilter: function(t) {
                                if (void 0 === t || null === t) return "";
                                if (0 === t) return "R$" + t.toLocaleString("pt-br", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                });
                                var e = t.toString();
                                return e = "R$ " + Y()(e).toLocaleString("pt-br", {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2
                                }), e
                            },
                            slugify: function(t) {
                                return t.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                            }
                        }
                    })
                }
        },
        kt = wt,
        bt = n("00e7"),
        _t = n.n(bt),
        Ct = n("ee98"),
        yt = n.n(Ct),
        xt = n("589d"),
        It = n.n(xt);
        i["default"].use(_t.a), i["default"].use(kt), i["default"].use(gt), i["default"].use(yt.a, {
            velocity: It.a
        }), window.console && window.console.log && (window.console.log("%c    ", "font-size: 80px; line-height:50px; background: url(http://codeby.com.br/imagem/cby-logo.png) no-repeat;"), window.console.log(" ")), i["default"].config.productionTip = !1, window["cbySellerName"] = "livrofacil", window.$(window).on({
            load: function() {}
        }), new i["default"]({
            store: mt,
            render: function(t) {
                return t(H)
            }
        }).$mount("#app");
    },
    "5c0b": function(t, e, n) {
        "use strict";
        var i = n("5e27"),
            r = n.n(i);
        r.a
    },
    "5e27": function(t, e, n) {},
    6681: function(t, e, n) {},
    "730d": function(t, e, n) {},
    a0c6: function(t, e, n) {
        "use strict";
        var i = n("a6dc"),
            r = n.n(i);
        r.a
    },
    a6dc: function(t, e, n) {},
    b5ff: function(t, e, n) {},
    c460: function(t, e, n) {
        "use strict";
        var i = n("6681"),
            r = n.n(i);
        r.a
    }
});
//# sourceMappingURL=app.c82530c3.js.map