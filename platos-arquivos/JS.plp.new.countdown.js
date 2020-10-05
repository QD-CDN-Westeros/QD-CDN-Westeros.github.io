/* PC-QUARTO - 05/10/2020 10:31:29 GMT */
"use strict";(function(){try{var Countdown={init:function init(){Countdown.bringInfoThisBrand()},bringInfoThisBrand:function bringInfoThisBrand(){if(!$.cookie){return}var wrapper=$(".mz-countdown__wrapper");var brandCoockie=$.cookie("marcaOrigem");var nameBrand=".mz-marca-".concat(brandCoockie);var defaultBrand=".mz-marca-default";var dateBrand=".mz-data-".concat(brandCoockie);var dateDefault=".mz-data-default";var urlCronometro="/mz-cronometro";var urlCronometroData="/mz-cronometro-data";var url=window.location.href;url=url.split("/").pop();if(url=="egressos"){console.log("Ajuste técnico feito.");return}else{console.log("Ajuste técnico não feito.")}try{$.ajax({type:"GET",method:"GET",url:urlCronometro,dataType:"html"}).done(function(response){var $data=$(response);if($data.find(nameBrand).length){wrapper.prepend($data.find(nameBrand))}else if($data.find(defaultBrand).length){wrapper.prepend($data.find(defaultBrand))}else if($data.find(defaultBrand).length==1&&$data.find(nameBrand).length==0){wrapper.prepend($data.find(defaultBrand))}else{console.log("Nenhum append feito sobre o cronometro.")}$.ajax({type:"GET",method:"GET",url:urlCronometroData,dataType:"html"}).done(function(responseData){var $date=$(responseData);var dateElement;var wrapperDate=$("#mz-countdown__dates");if($date.find(dateBrand).length){dateElement=$date.find(dateBrand);wrapperDate.append(dateElement)}else{dateElement=$date.find(dateDefault);wrapperDate.append(dateElement)}Countdown.applyCountDown(nameBrand,defaultBrand,dateElement);Countdown.applyCopyCode()})})}catch(e){console.log("Erro na request de Cronometro: ",e)}},fallbackCopyTextToClipboard:function fallbackCopyTextToClipboard(text){var textArea=document.createElement("textarea");textArea.value=text;textArea.style.top="0";textArea.style.left="0";textArea.style.position="fixed";document.body.appendChild(textArea);textArea.focus();textArea.select();try{var successful=document.execCommand("copy");var msg=successful?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+msg)}catch(err){console.error("Fallback: Oops, unable to copy",err)}document.body.removeChild(textArea)},copyTextToClipboard:function copyTextToClipboard(text){if(!navigator.clipboard){Countdown.fallbackCopyTextToClipboard(text);return}navigator.clipboard.writeText(text).then(function(){console.log("Async: Copying to clipboard was successful!")},function(err){console.error("Async: Could not copy text: ",err)})},applyCopyCode:function applyCopyCode(){$(".mz-countdown__wrapper--info .code a").click(function(e){e.preventDefault();var codeWrapper=$(".mz-countdown__wrapper--info .span-codigo");Countdown.copyTextToClipboard(codeWrapper.text());codeWrapper.parent().addClass("copied")});if($(window).width()<767){$(".mz-countdown__wrapper--info").find("br").remove()}},applyCountDown:function applyCountDown(nameBrand,defaultBrand,dateElement){if(!$(".mz-countdown__wrapper--chronometer").length){return}var dateInit=$("#data_init").text();var dateEnd=$("#data_end").text();Countdown.compareteData(dateInit,dateEnd);if(!Countdown.compareteData(dateInit,dateEnd)){return}console.log("Data inicio: ",dateInit);console.log("Ddata final: ",dateEnd);console.log("\n");dateEnd=Countdown.revertEndDate(dateEnd);var rl=Countdown.regexList();if(dateInit==""){console.log("Opção Direta ------------------");$(".mz-countdown").removeAttr("style");$(".mz-countdown__wrapper--chronometer").countdown(dateEnd,function(event){$("#mz-date-rendered").text(event.strftime("H{%-I} h MI{%M} min S{%S} sec"));var hours=$("#mz-date-rendered").text().match(rl.regexTime.hours)[0];hours=hours.match(rl.regexDigit)[0];var minutes=$("#mz-date-rendered").text().match(rl.regexTime.minutes)[0];minutes=minutes.match(rl.regexDigit)[0];var seconds=$("#mz-date-rendered").text().match(rl.regexTime.seconds)[0];seconds=seconds.match(rl.regexDigit)[0];$(".mz-chronometer .mz-cr__hours--number").text(hours);$(".mz-chronometer .mz-cr__minu--number").text(minutes);$(".mz-chronometer .mz-cr__seg--number").text(seconds);$(this).on("update.countdown",function(){if($(".mz-cr__mont--number").text()==0){$(".mz-cr__mont--number").parent().hide()}if($(".mz-cr__week--number").text()==0){$(".mz-cr__week--number").parent().hide()}});$(this).on("finish.countdown",function(){$(".mz-countdown").hide()})})}else if(dateInit.length==19&&dateEnd.length==19){console.log("Opção Agendada ------------------");var currentDate;var formatDtInit=dateInit;formatDtInit=formatDtInit.split(rl.regexTrace);formatDtInit=formatDtInit[1]+"/"+formatDtInit[0]+"/"+formatDtInit[2];var verifyCurrentDate=setInterval(function(){var captureDate=new Date;currentDate=$.format.date(captureDate,"dd/MM/yyyy HH:mm:ss");var rcCurrentDate=currentDate;currentDate=currentDate.split(rl.regexTrace);currentDate=currentDate[1]+"/"+currentDate[0]+"/"+currentDate[2];var dateCurrent=new Date(currentDate);var dateInitial=new Date(formatDtInit);if(dateCurrent<dateInitial){$(".mz-countdown").hide()}else{clearInterval(verifyCurrentDate);$(".mz-countdown").removeAttr("style");$(".mz-countdown").show();$(".mz-countdown__wrapper--chronometer").countdown(dateEnd,function(event){$("#mz-date-rendered").text(event.strftime("H{%-I} h MI{%M} min S{%S} sec"));var hours=$("#mz-date-rendered").text().match(rl.regexTime.hours)[0];hours=hours.match(rl.regexDigit)[0];var minutes=$("#mz-date-rendered").text().match(rl.regexTime.minutes)[0];minutes=minutes.match(rl.regexDigit)[0];var seconds=$("#mz-date-rendered").text().match(rl.regexTime.seconds)[0];seconds=seconds.match(rl.regexDigit)[0];$(".mz-chronometer .mz-cr__hours--number").text(hours);$(".mz-chronometer .mz-cr__minu--number").text(minutes);$(".mz-chronometer .mz-cr__seg--number").text(seconds);$(this).on("update.countdown",function(){if($(".mz-cr__mont--number").text()==0){$(".mz-cr__mont--number").parent().hide()}if($(".mz-cr__week--number").text()==0){$(".mz-cr__week--number").parent().hide()}});$(this).on("finish.countdown",function(){$(".mz-countdown").hide()})})}},1e3)}else{console.log("Alguma Data na formato errado verifique o tamanho.")}},revertEndDate:function revertEndDate(dateEnd){var rl={regexTrace:/\//g,regexDateEnd:/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g};var dateToReverse=dateEnd.match(rl.regexDateEnd)[0];dateToReverse=dateToReverse.split(rl.regexTrace);var dateHours=dateEnd.split(" ")[1];var day=dateToReverse[0];var mont=dateToReverse[1];var year=dateToReverse[2];var dateUnify=year+"/"+mont+"/"+day+" "+dateHours;return dateUnify},compareteData:function compareteData(dateOne,dateTwo){var rl=Countdown.regexList();dateOne=dateOne.split(rl.regexTrace);dateOne=dateOne[1]+"/"+dateOne[0]+"/"+dateOne[2];dateTwo=dateTwo.split(rl.regexTrace);dateTwo=dateTwo[1]+"/"+dateTwo[0]+"/"+dateTwo[2];var formatedDataOne=new Date(dateOne);var formatedDataTwo=new Date(dateTwo);if(formatedDataOne>formatedDataTwo){console.log("Erro no cadastro, a data agendada é maior que a data de encerramento.");return false}else if(formatedDataOne.length<19&&formatedDataTwo.length<19){console.log("Erro no cadastro, as datas não estão nos formatos corretos. [length]");return false}else if(formatedDataOne=="Invalid Date"&&formatedDataTwo=="Invalid Date"){console.log("Erro no cadastro, as datas não estão nos formatos corretos. [invalid]");return false}else{console.log("Data Aceita.");return true}},regexList:function regexList(){var rl={regexDigit:/\d+/g,regexTrace:/\//g,regexDateEnd:/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g,regexTime:{mont:/MT{[0-9]{1,2}}/g,week:/W{[0-9]{1,2}}/g,day:/D{[0-9]{1,2}}/g,hours:/H{[0-9]{1,3}/g,minutes:/MI{[0-9]{1,2}/g,seconds:/S{[0-9]{2}/}};return rl}};Countdown.init()}catch(e){console.log("Erro na instancia [Countdown]: ",e)}})();