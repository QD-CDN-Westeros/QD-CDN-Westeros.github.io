!(function s(r, i, l) {
    function d(o, e) {
        if (!i[o]) {
            if (!r[o]) {
                var a = "function" == typeof require && require;
                if (!e && a) return a(o, !0);
                if (c) return c(o, !0);
                var t = new Error("Cannot find module '" + o + "'");
                throw ((t.code = "MODULE_NOT_FOUND"), t);
            }
            var n = (i[o] = { exports: {} });
            r[o][0].call(
                n.exports,
                function (e) {
                    var a = r[o][1][e];
                    return d(a || e);
                },
                n,
                n.exports,
                s,
                r,
                i,
                l
            );
        }
        return i[o].exports;
    }
    for (var c = "function" == typeof require && require, e = 0; e < l.length; e++) d(l[e]);
    return d;
})(
    {
        1: [
            function (e, a, o) {
                a.exports = { default: e("core-js/library/fn/json/stringify"), __esModule: !0 };
            },
            { "core-js/library/fn/json/stringify": 2 },
        ],
        2: [
            function (e, a, o) {
                var t = e("../../modules/_core"),
                    n = t.JSON || (t.JSON = { stringify: JSON.stringify });
                a.exports = function (e) {
                    return n.stringify.apply(n, arguments);
                };
            },
            { "../../modules/_core": 3 },
        ],
        3: [
            function (e, a, o) {
                var t = (a.exports = { version: "2.5.3" });
                "number" == typeof __e && (__e = t);
            },
            {},
        ],
        4: [
            function (e, a, o) {
                (function (e) {
                    !(function (a) {
                        var r,
                            e,
                            o = (function () {
                                try {
                                    return !!Symbol.iterator;
                                } catch (e) {
                                    return !1;
                                }
                            })(),
                            t = function (a) {
                                var e = {
                                    next: function () {
                                        var e = a.shift();
                                        return { done: void 0 === e, value: e };
                                    },
                                };
                                return (
                                    o &&
                                        (e[Symbol.iterator] = function () {
                                            return e;
                                        }),
                                    e
                                );
                            },
                            n = function (e) {
                                return encodeURIComponent(e).replace(/%20/g, "+");
                            },
                            s = function (e) {
                                return decodeURIComponent(String(e).replace(/\+/g, " "));
                            };
                        (function () {
                            try {
                                var e = a.URLSearchParams;
                                return "a=1" === new e("?a=1").toString() && "function" == typeof e.prototype.set;
                            } catch (e) {
                                return !1;
                            }
                        })() ||
                            (((e = (r = function (e) {
                                Object.defineProperty(this, "_entries", { writable: !0, value: {} });
                                var a = typeof e;
                                if ("undefined" === a);
                                else if ("string" === a) "" !== e && this._fromString(e);
                                else if (e instanceof r) {
                                    var o = this;
                                    e.forEach(function (e, a) {
                                        o.append(a, e);
                                    });
                                } else {
                                    if (null === e || "object" !== a) throw new TypeError("Unsupported input's type for URLSearchParams");
                                    if ("[object Array]" === Object.prototype.toString.call(e))
                                        for (var t = 0; t < e.length; t++) {
                                            var n = e[t];
                                            if ("[object Array]" !== Object.prototype.toString.call(n) && 2 === n.length) throw new TypeError("Expected [string, any] as entry at index " + t + " of URLSearchParams's input");
                                            this.append(n[0], n[1]);
                                        }
                                    else for (var s in e) e.hasOwnProperty(s) && this.append(s, e[s]);
                                }
                            }).prototype).append = function (e, a) {
                                e in this._entries ? this._entries[e].push(String(a)) : (this._entries[e] = [String(a)]);
                            }),
                            (e.delete = function (e) {
                                delete this._entries[e];
                            }),
                            (e.get = function (e) {
                                return e in this._entries ? this._entries[e][0] : null;
                            }),
                            (e.getAll = function (e) {
                                return e in this._entries ? this._entries[e].slice(0) : [];
                            }),
                            (e.has = function (e) {
                                return e in this._entries;
                            }),
                            (e.set = function (e, a) {
                                this._entries[e] = [String(a)];
                            }),
                            (e.forEach = function (e, a) {
                                var o;
                                for (var t in this._entries)
                                    if (this._entries.hasOwnProperty(t)) {
                                        o = this._entries[t];
                                        for (var n = 0; n < o.length; n++) e.call(a, o[n], t, this);
                                    }
                            }),
                            (e.keys = function () {
                                var o = [];
                                return (
                                    this.forEach(function (e, a) {
                                        o.push(a);
                                    }),
                                    t(o)
                                );
                            }),
                            (e.values = function () {
                                var a = [];
                                return (
                                    this.forEach(function (e) {
                                        a.push(e);
                                    }),
                                    t(a)
                                );
                            }),
                            (e.entries = function () {
                                var o = [];
                                return (
                                    this.forEach(function (e, a) {
                                        o.push([a, e]);
                                    }),
                                    t(o)
                                );
                            }),
                            o && (e[Symbol.iterator] = e.entries),
                            (e.toString = function () {
                                var o = [];
                                return (
                                    this.forEach(function (e, a) {
                                        o.push(n(a) + "=" + n(e));
                                    }),
                                    o.join("&")
                                );
                            }),
                            (a.URLSearchParams = r));
                        var i = a.URLSearchParams.prototype;
                        "function" != typeof i.sort &&
                            (i.sort = function () {
                                var o = this,
                                    t = [];
                                this.forEach(function (e, a) {
                                    t.push([a, e]), o._entries || o.delete(a);
                                }),
                                    t.sort(function (e, a) {
                                        return e[0] < a[0] ? -1 : e[0] > a[0] ? 1 : 0;
                                    }),
                                    o._entries && (o._entries = {});
                                for (var e = 0; e < t.length; e++) this.append(t[e][0], t[e][1]);
                            }),
                            "function" != typeof i._fromString &&
                                Object.defineProperty(i, "_fromString", {
                                    enumerable: !1,
                                    configurable: !1,
                                    writable: !1,
                                    value: function (e) {
                                        if (this._entries) this._entries = {};
                                        else {
                                            var o = [];
                                            this.forEach(function (e, a) {
                                                o.push(a);
                                            });
                                            for (var a = 0; a < o.length; a++) this.delete(o[a]);
                                        }
                                        var t,
                                            n = (e = e.replace(/^\?/, "")).split("&");
                                        for (a = 0; a < n.length; a++) (t = n[a].split("=")), this.append(s(t[0]), 1 < t.length ? s(t[1]) : "");
                                    },
                                });
                    })(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this),
                        (function (c) {
                            var a, e, o;
                            if (
                                ((function () {
                                    try {
                                        var e = new c.URL("b", "http://a");
                                        return (e.pathname = "c%20d"), "http://a/c%20d" === e.href && e.searchParams;
                                    } catch (e) {
                                        return !1;
                                    }
                                })() ||
                                    ((a = c.URL),
                                    (o = (e = function (e, a) {
                                        "string" != typeof e && (e = String(e));
                                        var o,
                                            t = document;
                                        if (a && (void 0 === c.location || a !== c.location.href)) {
                                            ((o = (t = document.implementation.createHTMLDocument("")).createElement("base")).href = a), t.head.appendChild(o);
                                            try {
                                                if (0 !== o.href.indexOf(a)) throw new Error(o.href);
                                            } catch (e) {
                                                throw new Error("URL unable to set base " + a + " due to " + e);
                                            }
                                        }
                                        var n = t.createElement("a");
                                        if (((n.href = e), o && (t.body.appendChild(n), (n.href = n.href)), ":" === n.protocol || !/:/.test(n.href))) throw new TypeError("Invalid URL");
                                        Object.defineProperty(this, "_anchorElement", { value: n });
                                        var s = new c.URLSearchParams(this.search),
                                            r = !0,
                                            i = !0,
                                            l = this;
                                        ["append", "delete", "set"].forEach(function (e) {
                                            var a = s[e];
                                            s[e] = function () {
                                                a.apply(s, arguments), r && ((i = !1), (l.search = s.toString()), (i = !0));
                                            };
                                        }),
                                            Object.defineProperty(this, "searchParams", { value: s, enumerable: !0 });
                                        var d = void 0;
                                        Object.defineProperty(this, "_updateSearchParams", {
                                            enumerable: !1,
                                            configurable: !1,
                                            writable: !1,
                                            value: function () {
                                                this.search !== d && ((d = this.search), i && ((r = !1), this.searchParams._fromString(this.search), (r = !0)));
                                            },
                                        });
                                    }).prototype),
                                    ["hash", "host", "hostname", "port", "protocol"].forEach(function (e) {
                                        var a;
                                        (a = e),
                                            Object.defineProperty(o, a, {
                                                get: function () {
                                                    return this._anchorElement[a];
                                                },
                                                set: function (e) {
                                                    this._anchorElement[a] = e;
                                                },
                                                enumerable: !0,
                                            });
                                    }),
                                    Object.defineProperty(o, "search", {
                                        get: function () {
                                            return this._anchorElement.search;
                                        },
                                        set: function (e) {
                                            (this._anchorElement.search = e), this._updateSearchParams();
                                        },
                                        enumerable: !0,
                                    }),
                                    Object.defineProperties(o, {
                                        toString: {
                                            get: function () {
                                                var e = this;
                                                return function () {
                                                    return e.href;
                                                };
                                            },
                                        },
                                        href: {
                                            get: function () {
                                                return this._anchorElement.href.replace(/\?$/, "");
                                            },
                                            set: function (e) {
                                                (this._anchorElement.href = e), this._updateSearchParams();
                                            },
                                            enumerable: !0,
                                        },
                                        pathname: {
                                            get: function () {
                                                return this._anchorElement.pathname.replace(/(^\/?)/, "/");
                                            },
                                            set: function (e) {
                                                this._anchorElement.pathname = e;
                                            },
                                            enumerable: !0,
                                        },
                                        origin: {
                                            get: function () {
                                                var e = { "http:": 80, "https:": 443, "ftp:": 21 }[this._anchorElement.protocol],
                                                    a = this._anchorElement.port != e && "" !== this._anchorElement.port;
                                                return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (a ? ":" + this._anchorElement.port : "");
                                            },
                                            enumerable: !0,
                                        },
                                        password: {
                                            get: function () {
                                                return "";
                                            },
                                            set: function (e) {},
                                            enumerable: !0,
                                        },
                                        username: {
                                            get: function () {
                                                return "";
                                            },
                                            set: function (e) {},
                                            enumerable: !0,
                                        },
                                    }),
                                    (e.createObjectURL = function (e) {
                                        return a.createObjectURL.apply(a, arguments);
                                    }),
                                    (e.revokeObjectURL = function (e) {
                                        return a.revokeObjectURL.apply(a, arguments);
                                    }),
                                    (c.URL = e)),
                                void 0 !== c.location && !("origin" in c.location))
                            ) {
                                var t = function () {
                                    return c.location.protocol + "//" + c.location.hostname + (c.location.port ? ":" + c.location.port : "");
                                };
                                try {
                                    Object.defineProperty(c.location, "origin", { get: t, enumerable: !0 });
                                } catch (e) {
                                    setInterval(function () {
                                        c.location.origin = t();
                                    }, 100);
                                }
                            }
                        })(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : this);
                }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}));
            },
            {},
        ],
        5: [
            function (e, a, o) {
                "use strict";
                Object.defineProperty(o, "__esModule", { value: !0 }),
                    (o.default = {
                        login: {
                            accessKey: $("#loginWithAccessKeyBtn"),
                            forgetPsw: $(".forgot-password"),
                            noPsw: $(".no-password"),
                            emailModal: $(".modal-email"),
                            cancelButton: $(".modal-email-cancel, .x-overlay"),
                            cancelButton2: $(".modal-email-cancel2"),
                            loginForm: $("#user-modal-form"),
                            accessEmail: $("#modal_email"),
                            accessEmailDiv: $("#modal-email-login"),
                            accessKeyPut: $("#modal-access-key"),
                            accessWithPwdEmail: $("#L_email"),
                            accessWithPwdPwd: $("#L_password"),
                            newPswPut: $("#modal-access-pwd"),
                            viewPwd: $(".view-password"),
                            userLoginForm: $("#user-login-form"),
                            userMail: $(".user-email"),
                            sendNewPsw: $("#send_with_password"),
                            sendNewConfPsw: $("#modal-access-conf-pwd"),
                            iptPswOne: $("#modal-access-pwd"),
                            iptPswTwo: $("#modal-access-conf-pwd"),
                            modalFirstStep: $(".modal-first-step"),
                            modalAccessKey: $(".modal-second-step-accesskey"),
                            modalForgetPwd: $(".modal-second-step-pwd"),
                            modalAccessKeyBtn: $(".modal-get-accesskey"),
                            modalPwdBtn: $("#modal-send-pwd"),
                            modalEmailTitle: $(".modal-email-title"),
                            modalEmailSubtitle: $(".modal-email-subtitle"),
                            modalPwdQtd: $(".check-pwd-qtd"),
                            modalPwdNumber: $(".check-pwd-number"),
                            modalPwdUppercase: $(".check-pwd-uppercase"),
                            modalPwdLowercase: $(".check-pwd-lowercase"),
                            modalFormPwd: $("#user-modal-form-confirmation-pwd"),
                            modalConfirmKey: $("#user-modal-form-confirmation-key"),
                            modalEmailError: $(".modal-email-invalid"),
                            modalPwdError: $(".pwd-error"),
                            modalPwdError2: $(".pwd-error2"),
                            newUserError: $("#user-pre-registration-form .lb-error-msg"),
                            pwdLoginError: $(".pwd-login-error"),
                            pwdLoginErrorBkd: $(".pwd-login-error-blocked"),
                            newUserDivIpt: $("#preemail"),
                            newUserIptEmail: $("#PCL_email"),
                            newUserBtn: $("#CL_Enviar_Pre"),
                            newUserEmailInvalid: $(".new-user-email-invalid"),
                            facebookBtn: $("button.facebook-login"),
                            gmailBtn: $("button.gmail-login"),
                        },
                        cadastro: {
                            newUserForm: $(".new-user-form"),
                            email: $("#new-email"),
                            document: $("#new-document"),
                            firstName: $("#new-name"),
                            lastName: $("#new-last-name"),
                            phone: $("#new-phone"),
                            labelEmail: $(".label-email"),
                            labelDocument: $(".label-document"),
                            labelName: $(".label-name"),
                            labelLastName: $(".label-last-name"),
                            labelPhone: $(".label-phone"),
                            emailIpt: $("#email-checkbox"),
                            userMail: $(".user-email"),
                            iptPwd1: $("#ipt-password-1"),
                            iptPwd2: $("#ipt-password-2"),
                            pwd1: $("#new-pwd"),
                            pwd2: $("#new-conf-pwd"),
                            validatePwd: $(".validate-password"),
                            checkPwdQtd: $(".check-pwd-qtd"),
                            checkPwdNumber: $(".check-pwd-number"),
                            checkPwdUppercase: $(".check-pwd-uppercase"),
                            checkPwdLowercase: $(".check-pwd-lowercase"),
                            viewPwd: $(".view-password"),
                            sendBtn: $("#CL_Enviar"),
                            accessKeyPut: $("#modal-access-key"),
                            modalConfirmKey: $("#user-modal-form-confirmation-key"),
                            modalAccessKeyBtn: $(".modal-get-accesskey"),
                            modalAccessKey: $(".modal-step-accesskey"),
                            pwdError: $(".pwd-error"),
                            documentError: $(".document-error"),
                            phoneError: $(".phone-error"),
                            sendError: $(".new-user-send-error"),
                            modalEmail: $(".modal-email"),
                            cancelButton: $(".modal-email-cancel, .x-overlay"),
                            newUserBorder: $(".new-user-div-border"),
                            userDocumentDiv: $(".new-user-get-document"),
                        },
                    });
            },
            {},
        ],
        6: [
            function (e, a, o) {
                "use strict";
                Object.defineProperty(o, "__esModule", { value: !0 });
                var t,
                    n = e("./__cache-selectors"),
                    s = (t = n) && t.__esModule ? t : { default: t };
                e("url-polyfill");
                var r = s.default.login,
                    i = {
                        url: window.location.href,
                        init: function () {
                            i.isUserDefined(), i.modalClick(), i.authProvider(), i.authBegin(), i.loginWithPasswordEvent(), i.authOProvider(), i.newUserForm(), i.validateModalEmail(), i.validateNewUserEmail(), i.showHidePassword();
                        },
                        isUserDefined: function () {
                            $.get("/no-cache/profileSystem/getProfile", function (e) {
                                e.IsUserDefined && (alert("Usuário já está logado."), (location.href = "/"));
                            });
                        },
                        modalClick: function () {
                            r.accessKey.on("click", function () {
                                r.emailModal.addClass("active"),
                                    r.loginForm.addClass("access-key"),
                                    r.modalEmailTitle.html("Por favor, informe<br/>seu e-mail."),
                                    r.modalEmailSubtitle.html("Para receber a chave de acesso rápido<br/>informe seu e-mail e verifique sua caixa de entrada."),
                                    i.accessKeyButton();
                            }),
                                r.forgetPsw.on("click", function () {
                                    r.emailModal.addClass("active"),
                                        r.loginForm.addClass("forget-psw"),
                                        r.modalEmailTitle.html("Esqueceu sua senha?<br/>Informe seu e-mail."),
                                        r.modalEmailSubtitle.html("Não se preocupe, informe o e-mail cadastrado e receba uma e-mail para cadastrar uma nova senha."),
                                        i.accessKeyButton();
                                }),
                                r.noPsw.on("click", function () {
                                    r.modalEmailTitle.html("Cadastre sua senha,<br />informe seu e-mail."),
                                        r.modalEmailSubtitle.html("Já fez uma compra e ainda não cadastrou a sua senha? Informe seu e-mail para receber um link para criá-la agora mesmo.");
                                }),
                                r.cancelButton.on("click", function () {
                                    r.modalFirstStep.addClass("active"),
                                        r.emailModal.add(r.modalAccessKey.add(r.modalForgetPwd)).removeClass("active"),
                                        r.loginForm.removeClass("access-key forget-psw"),
                                        r.modalConfirmKey.removeClass("modal-wrong-key blocked-user"),
                                        r.accessEmail.add(r.accessKeyPut).val(""),
                                        r.accessEmailDiv.removeClass("valid"),
                                        TOKSTOK.body.removeClass("has--no-scroll");
                                }),
                                r.cancelButton2.on("click", function () {
                                    r.modalFirstStep.addClass("active"), r.modalAccessKey.add(r.modalForgetPwd).removeClass("active"), r.accessKeyPut.val("");
                                });
                        },
                        authProvider: function () {
                            var e = -1 !== i.url.indexOf("tokstokhomologacao") ? "tokstokhomologacao" : "tokstok";
                            $.ajax({ async: !0, crossDomain: !0, url: "/api/vtexid/pub/authentication/providers?scope=" + e, type: "GET" });
                        },
                        authBegin: function () {
                            var e = -1 !== i.url.indexOf("tokstokhomologacao"),
                                a = e ? "https://tokstokhomologacao.myvtex.com" : "https://www.tokstok.com.br",
                                o = e ? "tokstokhomologacao" : "tokstok";
                            $.ajax({ async: !0, crossDomain: !0, url: "/api/vtexid/pub/authentication/startlogin?scope=" + o + "&callbackUrl=" + a + "/api/vtexid/pub/authentication/finish&returnUrl=" + a, type: "POST" });
                        },
                        _authAccessKeySend: function () {
                            $.ajax({
                                async: !0,
                                crossDomain: !0,
                                url: "/api/vtexid/pub/authentication/accesskey/send",
                                type: "POST",
                                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                data: { email: r.accessEmail.val() },
                                statusCode: {
                                    401: function () {
                                        alert("Usuário bloqueado no momento, tente mais tarde!"), (location.href = "/");
                                    },
                                },
                            });
                        },
                        _authLoginAccessKey: function (e, a) {
                            $.ajax({
                                async: !0,
                                crossDomain: !0,
                                url: "/api/vtexid/pub/authentication/accesskey/validate",
                                type: "POST",
                                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                data: { login: e, accesskey: a },
                                statusCode: {
                                    401: function () {
                                        alert("Usuário bloqueado no momento, tente mais tarde!"), (location.href = "/");
                                    },
                                },
                            }).done(function (e) {
                                "WrongCredentials" === e.authStatus
                                    ? (r.modalConfirmKey.addClass("modal-wrong-key"),
                                      r.accessKeyPut.on("change keyup", function () {
                                          r.modalConfirmKey.removeClass("modal-wrong-key");
                                      }))
                                    : "BlockedUser" === e.authStatus
                                    ? r.modalConfirmKey.addClass("blocked-user")
                                    : i._redirectUrl();
                            });
                        },
                        _authWithPassword: function (e, a) {
                            $.ajax({
                                async: !0,
                                crossDomain: !0,
                                url: "/api/vtexid/pub/authentication/classic/validate",
                                type: "POST",
                                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                data: { login: e, password: a },
                            }).done(function (e) {
                                "WrongCredentials" === e.authStatus
                                    ? (r.userLoginForm.addClass("wrong-pwd"),
                                      r.pwdLoginError.show(),
                                      setTimeout(function () {
                                          r.pwdLoginError.fadeOut("300");
                                      }, 1500),
                                      r.accessWithPwdEmail.add(r.accessWithPwdPwd).on("keyup", function () {
                                          r.userLoginForm.removeClass("wrong-pwd");
                                      }))
                                    : "BlockedUser" === e.authStatus
                                    ? (r.userLoginForm.addClass("blocked-user"),
                                      r.pwdLoginErrorBkd.show(),
                                      setTimeout(function () {
                                          r.pwdLoginErrorBkd.fadeOut("300");
                                      }, 2e3))
                                    : i._redirectUrl();
                            });
                        },
                        _changePassword: function () {
                            $.ajax({
                                async: !0,
                                crossDomain: !0,
                                url: "/api/vtexid/pub/authentication/classic/setpassword",
                                type: "POST",
                                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                data: { login: r.accessEmail.val(), newPassword: r.newPswPut.val(), accessKey: r.accessKeyPut.val() },
                            }).done(function (e) {
                                "WrongCredentials" === e.authStatus
                                    ? (r.modalConfirmKey.addClass("modal-wrong-key"),
                                      r.accessKeyPut.on("change keyup", function () {
                                          r.modalConfirmKey.removeClass("modal-wrong-key");
                                      }))
                                    : "BlockedUser" === e.authStatus
                                    ? r.modalConfirmKey.addClass("blocked-user")
                                    : i._redirectUrl();
                            });
                        },
                        authOProvider: function () {
                            r.facebookBtn.on("click", function () {
                                i._authFacebookGmail("Facebook");
                            }),
                                r.gmailBtn.on("click", function () {
                                    i._authFacebookGmail("Google");
                                });
                        },
                        _authFacebookGmail: function (e) {
                            var a = "/api/vtexid/pub/authentication/oauth/redirect?providerName=" + e,
                                o = window.open(a, "DescriptiveWindowName", "width=720,height=520,resizable,scrollbars=yes,status=1"),
                                t = window.setInterval(function () {
                                    $.get("/no-cache/profileSystem/getProfile", function (e) {
                                        e.IsUserDefined && (o.close(), clearInterval(t), i._redirectUrl());
                                    });
                                }, 1e3);
                        },
                        loginWithPasswordEvent: function () {
                            r.sendNewPsw.on("click", function (e) {
                                e.preventDefault();
                                var a = r.accessWithPwdEmail.val(),
                                    o = r.accessWithPwdPwd.val();
                                "" == a || "" == o
                                    ? (r.pwdLoginError.show(),
                                      setTimeout(function () {
                                          r.pwdLoginError.fadeOut("300");
                                      }, 1500))
                                    : i._validateEmailWithPwd() && i._authWithPassword(a, o);
                            });
                        },
                        accessKeyButton: function () {
                            var t = $(".access-key #modal-send"),
                                e = $(".forget-psw #modal-send");
                            TOKSTOK.body.addClass("has--no-scroll"),
                                r.modalPwdBtn.on("click", function (e) {
                                    e.preventDefault(),
                                        r.modalFormPwd.hasClass("valid-email pwd-equal")
                                            ? (i._authAccessKeySend(), r.modalForgetPwd.removeClass("active"), r.modalAccessKey.addClass("active"), r.userMail.text(r.accessEmail.val()))
                                            : ("" != r.newPswPut.val() && "" != r.sendNewConfPsw.val()) ||
                                              (r.modalPwdError2.addClass("active"),
                                              setTimeout(function () {
                                                  r.modalPwdError2.removeClass("active");
                                              }, 1500));
                                }),
                                t.off().on("click", function (e) {
                                    e.preventDefault(),
                                        i.validateModalEmail()
                                            ? (i._authAccessKeySend(), r.modalFirstStep.removeClass("active"), r.modalAccessKey.addClass("active"), r.userMail.text(r.accessEmail.val()))
                                            : (r.accessEmailDiv.addClass("invalid").removeClass("valid"),
                                              r.modalEmailError.show(),
                                              setTimeout(function () {
                                                  r.modalEmailError.fadeOut("300");
                                              }, 1e3));
                                }),
                                r.modalAccessKeyBtn.on("click", function (e) {
                                    if ((e.preventDefault(), t.length)) {
                                        var a = r.accessEmail.val(),
                                            o = r.accessKeyPut.val();
                                        6 != o.length
                                            ? (r.modalConfirmKey.addClass("modal-wrong-key"),
                                              r.accessKeyPut.on("change keyup", function () {
                                                  r.modalConfirmKey.removeClass("modal-wrong-key");
                                              }))
                                            : "" != a && "" != o && i._authLoginAccessKey(a, o);
                                    } else "" != r.accessKeyPut.val() && i._changePassword();
                                }),
                                e.off().on("click", function (e) {
                                    e.preventDefault(),
                                        i.validateModalEmail()
                                            ? (r.modalFirstStep.removeClass("active"),
                                              r.modalForgetPwd.addClass("active"),
                                              r.userMail.text(r.accessEmail.val()),
                                              r.newPswPut.keyup(function () {
                                                  7 < r.newPswPut.val().length ? r.modalPwdQtd.addClass("valid").removeClass("invalid") : r.modalPwdQtd.addClass("invalid").removeClass("valid"),
                                                      r.newPswPut.val().match(/\d/) ? r.modalPwdNumber.addClass("valid").removeClass("invalid") : r.modalPwdNumber.addClass("invalid").removeClass("valid"),
                                                      r.newPswPut.val().match(/[A-Z]/) ? r.modalPwdUppercase.addClass("valid").removeClass("invalid") : r.modalPwdUppercase.addClass("invalid").removeClass("valid"),
                                                      r.newPswPut.val().match(/[a-z]/) ? r.modalPwdLowercase.addClass("valid").removeClass("invalid") : r.modalPwdLowercase.addClass("invalid").removeClass("valid"),
                                                      r.modalPwdQtd.hasClass("valid") && r.modalPwdNumber.hasClass("valid") && r.modalPwdUppercase.hasClass("valid") && r.modalPwdLowercase.hasClass("valid")
                                                          ? r.modalFormPwd.addClass("valid-email")
                                                          : r.modalFormPwd.removeClass("valid-email"),
                                                      r.iptPswOne.val() === r.iptPswTwo.val()
                                                          ? (r.modalPwdError.removeClass("active"), r.modalFormPwd.addClass("pwd-equal"))
                                                          : "" != r.iptPswTwo.val() && (r.modalPwdError.addClass("active"), r.modalFormPwd.removeClass("pwd-equal"));
                                              }),
                                              r.sendNewConfPsw.keyup(function () {
                                                  r.modalPwdQtd.hasClass("valid") && r.modalPwdNumber.hasClass("valid") && r.modalPwdUppercase.hasClass("valid") && r.modalPwdLowercase.hasClass("valid")
                                                      ? r.modalFormPwd.addClass("valid-email")
                                                      : r.modalFormPwd.removeClass("valid-email"),
                                                      r.iptPswOne.val() === r.iptPswTwo.val()
                                                          ? (r.modalPwdError.removeClass("active"), r.modalFormPwd.addClass("pwd-equal"))
                                                          : (r.modalPwdError.addClass("active"), r.modalFormPwd.removeClass("pwd-equal"));
                                              }))
                                            : (r.accessEmailDiv.addClass("invalid").removeClass("valid"),
                                              r.modalEmailError.show(),
                                              setTimeout(function () {
                                                  r.modalEmailError.fadeOut("300");
                                              }, 1e3));
                                });
                        },
                        newUserForm: function () {
                            var e;
                            r.newUserIptEmail.on("keyup", function () {
                                clearTimeout(e),
                                    (e = setTimeout(function () {
                                        i.validateNewUserEmail() &&
                                            $.ajax({
                                                async: !0,
                                                crossDomain: !0,
                                                url: "/api/dataentities/CL/search?email=" + encodeURIComponent(r.newUserIptEmail.val()) + "&_fields=id,priceTables",
                                                type: "GET",
                                                headers: { Accept: "application/vnd.vtex.ds.v10+json", "Content-Type": "application/json" },
                                            }).done(function (e) {
                                                1 == e.length
                                                    ? (r.newUserDivIpt.addClass("invalid").removeClass("valid"),
                                                      r.newUserError.show(),
                                                      r.newUserBtn.addClass("btn-block"),
                                                      setTimeout(function () {
                                                          r.newUserError.fadeOut("300");
                                                      }, 2e3))
                                                    : ("empty" != e && 0 != e.length) || (r.newUserBtn.removeClass("btn-block"), r.newUserDivIpt.addClass("valid").removeClass("invalid"));
                                            });
                                    }, 300));
                            }),
                                r.newUserIptEmail.on("keydown", function () {
                                    clearTimeout(e);
                                }),
                                r.newUserBtn.on("click", function (e) {
                                    if ((e.preventDefault(), r.newUserDivIpt.hasClass("valid"))) {
                                        sessionStorage.setItem("newEmail", r.newUserIptEmail.val());
                                        var a = window.location.search,
                                            o = window.location.hash;
                                        -1 != a.toLowerCase().indexOf("returnurl=") ? (window.location.href = "/login/cadastro" + a + o) : (window.location.href = "/login/cadastro");
                                    } else
                                        "" == r.newUserIptEmail.val()
                                            ? (r.newUserDivIpt.removeClass("valid"),
                                              r.newUserEmailInvalid.show(),
                                              r.newUserBtn.addClass("btn-block"),
                                              setTimeout(function () {
                                                  r.newUserEmailInvalid.fadeOut("300");
                                              }, 1500))
                                            : i.validateNewUserEmail();
                                });
                        },
                        _validateEmailWithPwd: function () {
                            if (
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r.accessWithPwdEmail.val()).toLowerCase())
                            )
                                return !0;
                            r.pwdLoginError.show(),
                                setTimeout(function () {
                                    r.pwdLoginError.fadeOut("300");
                                }, 1500);
                        },
                        validateNewUserEmail: function () {
                            if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r.newUserIptEmail.val()).toLowerCase()))
                                return !0;
                            "" != r.newUserIptEmail.val() &&
                                (r.newUserDivIpt.removeClass("valid"),
                                r.newUserEmailInvalid.show(),
                                r.newUserBtn.addClass("btn-block"),
                                setTimeout(function () {
                                    r.newUserEmailInvalid.fadeOut("300");
                                }, 1500));
                        },
                        validateModalEmail: function () {
                            if (
                                (r.accessEmail.on("change", function () {
                                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r.accessEmail.val()).toLowerCase())
                                        ? r.accessEmailDiv.addClass("valid").removeClass("invalid")
                                        : (r.accessEmailDiv.addClass("invalid").removeClass("valid"),
                                          r.modalEmailError.show(),
                                          setTimeout(function () {
                                              r.modalEmailError.fadeOut("300");
                                          }, 2e3));
                                }),
                                r.accessEmailDiv.hasClass("valid"))
                            )
                                return !0;
                        },
                        _redirectUrl: function () {
                            var e = document.referrer.indexOf("login"),
                                a = document.referrer.indexOf("https://www.tokstok.com.br"),
                                o = new URL(window.location.href).searchParams,
                                t = window.location.href,
                                n = "";
                            t.match(/returnUrl/g) ? (n = o.get("returnUrl")) : t.match(/ReturnUrl/g) ? (n = o.get("ReturnUrl")) : t.match(/returnURL/g) && (n = o.get("returnURL")),
                                n ? (window.location.href = "" + decodeURIComponent(n) + window.location.hash) : (location.href = -1 != e ? "/" : -1 != a ? document.referrer : "/");
                        },
                        showHidePassword: function () {
                            r.viewPwd.on("click", function () {
                                var e = document.getElementById("L_password");
                                "password" === e.type ? ((e.type = "text"), e.classList.add("show")) : ((e.type = "password"), e.classList.remove("show"));
                            });
                        },
                    };
                o.default = { init: i.init };
            },
            { "./__cache-selectors": 5, "url-polyfill": 4 },
        ],
        7: [
            function (e, a, o) {
                "use strict";
                Object.defineProperty(o, "__esModule", { value: !0 });
                var t = s(e("babel-runtime/core-js/json/stringify")),
                    n = s(e("./../__cache-selectors"));
                function s(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                e("url-polyfill");
                var r = n.default.cadastro,
                    i = {
                        init: function () {
                            i.modalClick(), i.authProvider(), i.authBegin(), i.emailFromSessionStorage(), i.inputChange(), i.showHidePassword(), i.showValidadePwd();
                        },
                        modalClick: function () {
                            r.sendBtn.on("click", function (e) {
                                e.preventDefault(),
                                    r.labelEmail.hasClass("valid") &&
                                    r.labelDocument.hasClass("valid") &&
                                    r.labelName.hasClass("valid") &&
                                    r.labelLastName.hasClass("valid") &&
                                    r.labelPhone.hasClass("valid") &&
                                    r.newUserForm.hasClass("valid-email pwd-equal")
                                        ? (r.modalEmail.add(r.modalAccessKey).addClass("active"), r.userMail.text(r.email.val()), i.authAccessKeySend())
                                        : (r.sendError.css("display", "block"),
                                          setTimeout(function () {
                                              r.sendError.fadeOut("300");
                                          }, 1500));
                            }),
                                r.modalAccessKeyBtn.on("click", function (e) {
                                    e.preventDefault(), i.masterDataUserInfoInsert();
                                }),
                                r.cancelButton.on("click", function () {
                                    r.modalEmail.removeClass("active");
                                });
                        },
                        authProvider: function () {
                            $.ajax({ async: !0, crossDomain: !0, url: "/api/vtexid/pub/authentication/providers?scope=tokstok", type: "GET" });
                        },
                        authBegin: function () {
                            var e = -1 !== window.location.href.indexOf("homologacao"),
                                a = e ? "tokstokhomologacao.myvtex.com" : "www.toktsok.com.br",
                                o = e ? "tokstokhomologacao" : "tokstok";
                            $.ajax({ async: !0, crossDomain: !0, url: "/api/vtexid/pub/authentication/startlogin?scope=" + o + "&callbackUrl=https://" + a + "/api/vtexid/pub/authentication/finish&returnUrl=https://" + a, type: "POST" });
                        },
                        authAccessKeySend: function () {
                            $.ajax({
                                async: !0,
                                crossDomain: !0,
                                url: "/api/vtexid/pub/authentication/accesskey/send",
                                type: "POST",
                                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                data: { email: r.email.val() },
                                statusCode: {
                                    401: function () {
                                        alert("Usuário bloqueado no momento, tente mais tarde!"), (location.href = document.referrer ? document.referrer : "/");
                                    },
                                },
                            });
                        },
                        masterDataUserInfoInsert: function () {
                            var e = !!r.emailIpt.is(":checked"),
                                a = {
                                    email: r.email.val(),
                                    document: r.document.val().replace(/[.-]/g, ""),
                                    firstName: r.firstName.val(),
                                    lastName: r.lastName.val(),
                                    homePhone: r.phone.val().replace(/[()-]/g, "").replace(" ", ""),
                                    isNewsletterOptIn: e,
                                };
                            $.ajax({
                                headers: { Accept: "application/vnd.vtex.ds.v10+json", "Content-Type": "application/json" },
                                url: "/api/dataentities/CL/documents",
                                async: !0,
                                crossDomain: !0,
                                type: "PATCH",
                                data: (0, t.default)(a),
                            }).done(function () {
                                i.changePassword();
                            });
                        },
                        changePassword: function () {
                            $.ajax({
                                async: !0,
                                crossDomain: !0,
                                url: "/api/vtexid/pub/authentication/classic/setpassword",
                                type: "POST",
                                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                                data: { login: r.email.val(), newPassword: r.pwd1.val(), accessKey: r.accessKeyPut.val() },
                            }).done(function (e) {
                                if ("WrongCredentials" === e.authStatus)
                                    r.modalConfirmKey.addClass("modal-wrong-key"),
                                        r.accessKeyPut.on("change keyup", function () {
                                            r.modalConfirmKey.removeClass("modal-wrong-key");
                                        });
                                else {
                                    i._setDocumentCookie();
                                    var a = document.referrer.indexOf("login"),
                                        o = document.referrer.indexOf("https://www.tokstok.com.br"),
                                        t = window.location.href,
                                        n = new URL(t).searchParams,
                                        s = "";
                                    t.match(/returnUrl/g) ? (s = n.get("returnUrl")) : t.match(/ReturnUrl/g) ? (s = n.get("ReturnUrl")) : t.match(/returnURL/g) && (s = n.get("returnURL")),
                                        s ? (window.location.href = "" + decodeURIComponent(s) + window.location.hash) : (location.href = -1 != a ? "/" : -1 != o ? document.referrer : "/");
                                }
                            });
                        },
                        emailFromSessionStorage: function () {
                            sessionStorage.newEmail && (r.email.val(sessionStorage.newEmail), r.email.attr("readonly", "true"), r.labelEmail.addClass("valid"));
                        },
                        inputChange: function () {
                            r.email.on("change", function () {
                                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(r.email.val()).toLowerCase())
                                    ? r.labelEmail.addClass("valid").removeClass("invalid")
                                    : r.labelEmail.addClass("invalid").removeClass("valid");
                            }),
                                r.document.mask("000.000.000-00"),
                                r.document.on("change", function () {
                                    i.CPFValidade()
                                        ? (r.userDocumentDiv.add(r.labelDocument).addClass("valid").removeClass("invalid"), r.documentError.removeClass("active"))
                                        : (r.userDocumentDiv.add(r.labelDocument).addClass("invalid").removeClass("valid"), r.documentError.addClass("active"));
                                }),
                                r.firstName.add(r.lastName).on("change", function (e) {
                                    var a = e.currentTarget,
                                        o = $(a);
                                    "" != o.val() ? o.prev("label").addClass("valid").removeClass("invalid") : o.prev("label").addClass("invalid").removeClass("valid");
                                }),
                                r.phone.on("focus", function () {
                                    r.phone.mask("00000000000");
                                }),
                                r.phone.on("change", function () {
                                    var e = r.phone.val().replace(/[()-]/g, "").replace(" ", "").length;
                                    11 === e
                                        ? (r.labelPhone.addClass("valid").removeClass("invalid"), r.phone.mask("(00) 00000-0000"), r.phoneError.removeClass("active"))
                                        : 10 === e
                                        ? (r.labelPhone.addClass("valid").removeClass("invalid"), r.phone.mask("(00) 0000-0000"), r.phoneError.removeClass("active"))
                                        : (r.labelPhone.addClass("invalid").removeClass("valid"), r.phoneError.addClass("active"));
                                });
                        },
                        showHidePassword: function () {
                            r.viewPwd.on("click", function () {
                                var e = "new-pwd" === $(this).siblings("input").attr("id") ? document.getElementById("new-pwd") : document.getElementById("new-conf-pwd");
                                "password" === e.type ? ((e.type = "text"), e.classList.add("show")) : ((e.type = "password"), e.classList.remove("show"));
                            });
                        },
                        showValidadePwd: function () {
                            r.pwd1.focus(function () {
                                r.validatePwd.add(r.newUserBorder).addClass("active"),
                                    r.pwd1.on("keyup input propertychange", function () {
                                        7 < r.pwd1.val().length ? r.checkPwdQtd.addClass("valid").removeClass("invalid") : r.checkPwdQtd.addClass("invalid").removeClass("valid"),
                                            r.pwd1.val().match(/\d/) ? r.checkPwdNumber.addClass("valid").removeClass("invalid") : r.checkPwdNumber.addClass("invalid").removeClass("valid"),
                                            r.pwd1.val().match(/[A-Z]/) ? r.checkPwdUppercase.addClass("valid").removeClass("invalid") : r.checkPwdUppercase.addClass("invalid").removeClass("valid"),
                                            r.pwd1.val().match(/[a-z]/) ? r.checkPwdLowercase.addClass("valid").removeClass("invalid") : r.checkPwdLowercase.addClass("invalid").removeClass("valid"),
                                            r.checkPwdQtd.hasClass("valid") && r.checkPwdNumber.hasClass("valid") && r.checkPwdUppercase.hasClass("valid") && r.checkPwdLowercase.hasClass("valid")
                                                ? (r.newUserForm.addClass("valid-email"), r.iptPwd1.removeClass("invalid"))
                                                : (r.newUserForm.removeClass("valid-email"), r.iptPwd1.addClass("invalid")),
                                            r.pwd1.val() === r.pwd2.val() && "" != r.pwd2.val()
                                                ? (r.pwdError.removeClass("active"), r.newUserForm.addClass("pwd-equal"))
                                                : "" != r.pwd2.val() && (r.pwdError.addClass("active"), r.iptPwd2.addClass("invalid"), r.newUserForm.removeClass("pwd-equal"));
                                    }),
                                    r.pwd2.on("keyup input propertychange", function () {
                                        r.checkPwdQtd.hasClass("valid") && r.checkPwdNumber.hasClass("valid") && r.checkPwdUppercase.hasClass("valid") && r.checkPwdLowercase.hasClass("valid")
                                            ? (r.newUserForm.addClass("valid-email"), r.iptPwd2.removeClass("invalid"))
                                            : r.newUserForm.removeClass("valid-email"),
                                            r.pwd1.val() === r.pwd2.val() && "" != r.pwd2.val()
                                                ? (r.iptPwd2.removeClass("invalid"), r.pwdError.removeClass("active"), r.newUserForm.addClass("pwd-equal"))
                                                : (r.pwdError.addClass("active"), r.iptPwd2.addClass("invalid"), r.newUserForm.removeClass("pwd-equal"));
                                    });
                            }),
                                r.pwd1.blur(function () {
                                    r.validatePwd.add(r.newUserBorder).removeClass("active");
                                });
                        },
                        CPFValidade: function () {
                            var e = r.document.attr("value").replace(/[.-]/g, ""),
                                a = 0,
                                o = void 0;
                            if ("00000000000" == e) return !1;
                            for (var t = 1; t <= 9; t++) a += parseInt(e.substring(t - 1, t)) * (11 - t);
                            if (((10 != (o = (10 * a) % 11) && 11 != o) || (o = 0), o != parseInt(e.substring(9, 10)))) return !1;
                            a = 0;
                            for (var n = 1; n <= 10; n++) a += parseInt(e.substring(n - 1, n)) * (12 - n);
                            return (10 != (o = (10 * a) % 11) && 11 != o) || (o = 0), o == parseInt(e.substring(10, 11));
                        },
                        _setDocumentCookie: function () {
                            r.document.val() && Cookies.set("document", r.document.val().replace(/[.-]/g, ""), { path: "", domain: ".tokstok.com.br" });
                        },
                    };
                o.default = { init: i.init };
            },
            { "./../__cache-selectors": 5, "babel-runtime/core-js/json/stringify": 1, "url-polyfill": 4 },
        ],
        8: [
            function (e, a, o) {
                "use strict";
                Object.defineProperty(o, "__esModule", { value: !0 });
                var t = s(e("./_login__main.js")),
                    n = s(e("./cadastro/_cadastro__main.js"));
                function s(e) {
                    return e && e.__esModule ? e : { default: e };
                }
                o.default = {
                    init: function () {
                        "/login" == location.pathname && t.default.init(), "/login/cadastro" == location.pathname && n.default.init();
                    },
                };
            },
            { "./_login__main.js": 6, "./cadastro/_cadastro__main.js": 7 },
        ],
        9: [
            function (e, a, o) {
                "use strict";
                var t,
                    n = e("./modules/Login/login-index.js"),
                    s = (t = n) && t.__esModule ? t : { default: t };
                document.addEventListener("DOMContentLoaded", s.default.init);
            },
            { "./modules/Login/login-index.js": 8 },
        ],
    },
    {},
    [9]
);
