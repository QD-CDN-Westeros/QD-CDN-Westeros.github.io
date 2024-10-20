"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* LAPTOP-KBFKB1T5 - 17/11/2021 14:15:53 GMT */
$(document).ready(function () {
  //validacao de cpf
  setTimeout(function () {
    vtexjs.checkout.getOrderForm().done(function (e) {
      var t = !!e.clientProfileData && e.clientProfileData.document,
          i = !!e.items && e.items;

      var _iterator = _createForOfIteratorHelper(i.entries()),
          _step;

      try {
        var _loop = function _loop() {
          var _step$value = _slicedToArray(_step.value, 2),
              e = _step$value[0],
              s = _step$value[1];

          $.ajax({
            url: "/api/dataentities/OC/documents/".concat(Number(s.productId)).concat(Number(t), "/?_fields=cpf,product&an=ironstudios"),
            type: 'GET',
            headers: {
              Accept: 'application/json; charset=utf-8',
              'Content-Type': 'application/json; charset=utf-8'
            },
            success: function success(t) {
              if (t) {
                var i = [{
                  index: e,
                  quantity: s.quantity
                }];
                vtexjs.checkout.removeItems(i), alert('Esse produto é exclusivo, já existe uma compra feita com o seu CPF!');
              } else console.log('Segue o jogo!');
            }
          });
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }, 2e3);

  function checkoutSteps() {
    $(window).on('hashchange', function (e) {
      if (window.location.hash == '#/cart') {
        $('.mz-header__checkout--steps li').removeClass('active');
        $('#sacola').addClass('active');
      } else if (window.location.hash == '#/email' || window.location.hash == '#/profile') {
        $('.mz-header__checkout--steps li').removeClass('active');
        $('#sacola').addClass('active');
        $('#identificacao').addClass('active');
      } else if (window.location.hash == '#/payment') {
        $('.mz-header__checkout--steps li').removeClass('active');
        $('#sacola').addClass('active');
        $('#identificacao').addClass('active');
        $('#pagamento').addClass('active');
      } else if (window.location.hash == '/orderPlaced') {
        $('.mz-header__checkout--steps li').addClass('active');
      }
    });
  }

  checkoutSteps();
});