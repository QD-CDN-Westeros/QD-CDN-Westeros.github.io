/* eduardo - 01/06/2021 18:40:40 GMT */
"use strict";var checkoutCustom={init:function init(){checkoutCustom.changeLabelName()},stopAjax:function stopAjax(){checkoutCustom.changeLabelName()},changeLabelName:function changeLabelName(){$(".box-client-info-pf .client-first-name label").html("Nome");$(".box-client-info-pf .client-last-name label").html("Sobrenome")}};$(function(){checkoutCustom.init()});$(document).ajaxStop(function(){checkoutCustom.stopAjax()});