/* Anonymouswill - 14/04/2021 18:18:05 GMT */
var baseUrl = 'https://www.masrefacciones.mx/';
$(document).ready(function () {
  $('#anchoLlanta').select2({ placeholder: 'Seleccione un ancho' });
  $('#altoLlanta').select2({ placeholder: 'Seleccione un alto' });
  $('#rinLlanta').select2({ placeholder: 'Seleccione un rin' });
  var params = getParameters();
  if (params.hasOwnProperty('ancho'))
    fillAncho(function () {
      $('#anchoLlanta').val(params.ancho).trigger('change.select2');
      if (params.hasOwnProperty('alto')) {
        fillAlto(params.ancho, function () {
          $('#altoLlanta').val(params.alto).trigger('change.select2');
          if (params.hasOwnProperty('rin')) {
            fillRin(params.ancho, params.alto, function () {
              $('#rinLlanta').val(params.rin).trigger('change.select2');
            });
          }
        });
      }
    });
  else fillAncho(function () {});
});
function fillAncho(callback) {
  $('#anchoLlanta').prop('disabled', true);
  $('#altoLlanta').prop('disabled', true);
  $('#rinLlanta').prop('disabled', true);
  var opsAncho = [];
  $.getJSON(
    baseUrl + 'api/catalog_system/pub/products/search?fq=C:10',
    function (productos) {
      console.log(productos);
      for (var i = productos.length - 1; i >= 0; i--) {
        if (opsAncho.indexOf($.trim(productos[i].Ancho[0])) == -1) {
          opsAncho.push(productos[i].Ancho[0]);
        }
        if (i == 0) {
          $('#altoLlanta').html('');
          $('#rinLlanta').html('');
          opsAncho.sort();
          $('#anchoLlanta').prop('disabled', false);
          $('#anchoLlanta').html(
            '<option value=""></option>' + arrToOpt(opsAncho),
          );
          $('#anchoLlanta').change(function () {
            fillAlto(this.value, function () {});
          });
          $('#altoLlanta').change(function () {
            fillRin($('#anchoLlanta').val(), this.value, function () {});
          });
          $('#rinLlanta').change(function () {
            searchLLantas();
          });
          callback();
        }
      }
    },
  );
}
function fillAlto(ancho, callback) {
  $('#altoLlanta').prop('disabled', true);
  $('#rinLlanta').prop('disabled', true);
  var opsAlto = [];
  $.getJSON(
    baseUrl +
      'api/catalog_system/pub/products/search?fq=specificationFilter_307:' +
      ancho,
    function (productos) {
      for (var i = productos.length - 1; i >= 0; i--) {
        if (opsAlto.indexOf($.trim(productos[i].Alto[0])) == -1) {
          opsAlto.push(productos[i].Alto[0]);
        }
        if (i == 0) {
          $('#rinLlanta').html('');
          opsAlto.sort();
          $('#altoLlanta').html(
            '<option value=""></option>' + arrToOpt(opsAlto),
          );
          $('#altoLlanta').prop('disabled', false);
          callback();
        }
      }
      $('#altoLlanta').select2('open');
    },
  );
}
function fillRin(ancho, alto, callback) {
  $('#rinLlanta').html('');
  var opsRin = [];
  $('#rinLlanta').prop('disabled', true);
  $.getJSON(
    baseUrl +
      'api/catalog_system/pub/products/search?fq=specificationFilter_307:' +
      ancho +
      '&specificationFilter_308:' +
      alto,
    function (productos) {
      for (var i = productos.length - 1; i >= 0; i--) {
        if (opsRin.indexOf($.trim(productos[i].Rin[0])) == -1)
          opsRin.push(productos[i].Rin[0]);
        if (i == 0) {
          opsRin.sort();
          $('#rinLlanta').html('<option value=""></option>' + arrToOpt(opsRin));
          $('#rinLlanta').prop('disabled', false);
          callback();
        }
      }
      $('#rinLlanta').select2('open');
    },
  );
}
function searchLLantas() {
  var path = baseUrl + 'llantas/';
  var params = [];
  var cats = [];
  var ancho = $('#anchoLlanta').val();
  var alto = $('#altoLlanta').val();
  var rin = $('#rinLlanta').val();
  if (!ancho || !alto || !rin) {
    $(
      '#filter3 .filter-qd-v1-search2 .select2:not(".select2-container--disabled")',
    )
      .last()
      .prev('select')
      .select2('open');
  } else {
    if (ancho !== null) {
      cats.push(ancho);
      params.push('specificationFilter_307');
    }
    if (alto !== null) {
      cats.push(alto);
      params.push('specificationFilter_308');
    }
    if (rin !== null) {
      cats.push(rin);
      params.push('specificationFilter_309');
    }
    window.location.href =
      path + cats.join('/') + '?map=c,' + params.join(',') + '&PS=50';
  }
}
function arrToOpt(arr) {
  var ops = '';
  for (var i = 0; i < arr.length; i++) {
    ops += '<option value="' + arr[i] + '">' + arr[i] + '</option>';
    if (i == arr.length - 1) {
      return ops;
    }
  }
}
function getParameters() {
  var url = new URL(window.location.href);
  var params = url.search
    .replace(/fq=specificationFilter_307/gi, 'ancho')
    .replace(/fq=specificationFilter_308/gi, 'alto')
    .replace(/fq=specificationFilter_309/gi, 'rin')
    .replace(/\?fq=/gi, '')
    .replace(/=/gi, ':')
    .replace(/:/gi, '":"')
    .split('&');
  if (params.length > 1) {
    return JSON.parse('{"' + params.join('","') + '"}');
  } else return {};
}
