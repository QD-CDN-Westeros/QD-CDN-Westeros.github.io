/* Anonymouswill - 14/04/2021 18:17:05 GMT */
(function($){$("a").attr("target","_parent");$(".shelf-qd-v1").each(function(){$(this).find(".btn-add-buy-button-asynchronous").attr("href",$(this).find(".shelf-qd-v1-image-wrapper-link").attr("href"))});var imgWidth=320;var imgHeight=320;var imgWrapper=".qd_sil_img_wrapper";var imgRegex=new RegExp("(ids/[0-9]+-)[0-9-]+","i");$(".prateleira").find(imgWrapper).not(".qd-sil-on").find("img:visible").each(function(){var $t=$(this);var img=$t.clone();img.on("load",function(){$(this).addClass("qd-sil-image-loaded")});img.attr({src:img[0].src.replace(imgRegex,"$1"+imgWidth+"-"+imgHeight),width:imgWidth,height:imgHeight});img.addClass("qd-sil-image").insertAfter($t);img.closest(imgWrapper).addClass("qd-sil-on")});if(!$.fn.slick)return;var wrapper=$(".prateleira").not(".slick-initialized");wrapper.slick({slidesToShow:5,slidesToScroll:5,infinite:true,draggable:false,speed:700,responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:5}},{breakpoint:991,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:550,settings:{slidesToShow:1,slidesToScroll:1}}]});$(".shelf-qd-v1-avaliations-popup-click").click(function(e){var $t=$(this);$t.toggleClass("qd-is-active");$t.next(".shelf-qd-v1-avaliations-popup").toggleClass("qd-is-active")})})(jQuery);(function($){"use strict";function resetIframeSize(useBody){window.parent.postMessage("qd-iframe-cdn|"+($(useBody?document.body:document).height()+5),"*")}$(function(){resetIframeSize(false)});$(window).on("load",function(){resetIframeSize(false)});$(window).scroll(function(){resetIframeSize(false)});$(window).on("QD_manualIframeAdjust",function(e,useBody){resetIframeSize(useBody||false)});$(document).ajaxComplete(function(){resetIframeSize(false)});$(document).ajaxStart(function(){resetIframeSize(false)});var lastWindowSize=$(window).width();var timeout=0;$(window).resize(function(){clearTimeout(timeout);timeout=setTimeout(function(){if(lastWindowSize!=$(window).width()){resetIframeSize(true);lastWindowSize=$(window).width()}},20)})})(jQuery);(function($){$(function(){$("a[href^='#']").click(function(){window.parent.postMessage("qd-iframe-scroll|"+($($(this).attr("href")).first().offset()||{top:0}).top,"*")})})})(jQuery);