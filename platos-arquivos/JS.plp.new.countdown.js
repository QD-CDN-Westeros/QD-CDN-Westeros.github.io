/* PC-QUARTO - 16/10/2020 11:39:55 GMT */
"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}(function(){try{var Countdown={init:function init(){Countdown.bringInfoThisBrand()},bringInfoThisBrand:function bringInfoThisBrand(){if(!$.cookie){return}var wrapper=$(".mz-countdown__wrapper");var brandCoockie=$.cookie("marcaOrigem");var nameBrand=".mz-marca-".concat(brandCoockie);var defaultBrand=".mz-marca-default";var dateBrand=".mz-data-".concat(brandCoockie);var dateDefault=".mz-data-default";var urlCronometro="/mz-cronometro";var urlCronometroData="/mz-cronometro-data";var url=window.location.href;url=url.split("/").pop();if(url=="egressos"){return}try{$.ajax({type:"GET",method:"GET",url:urlCronometro,dataType:"html"}).done(function(response){var $data=$(response);if($data.find(nameBrand).length){wrapper.prepend($data.find(nameBrand))}else if($data.find(defaultBrand).length){wrapper.prepend($data.find(defaultBrand))}else if($data.find(defaultBrand).length==1&&$data.find(nameBrand).length==0){wrapper.prepend($data.find(defaultBrand))}$.ajax({type:"GET",method:"GET",url:urlCronometroData,dataType:"html"}).done(function(responseData){var $date=$(responseData);var dateElement;var wrapperDate=$("#mz-countdown__dates");if($date.find(dateBrand).length){dateElement=$date.find(dateBrand);wrapperDate.append(dateElement)}else{dateElement=$date.find(dateDefault);wrapperDate.append(dateElement)}Countdown.applyCountDown(nameBrand,defaultBrand,dateElement);Countdown.applyCopyCode()})})}catch(e){console.error("[COUNTDOWN] Erro na request de Cronometro: ",e)}},fallbackCopyTextToClipboard:function fallbackCopyTextToClipboard(text){var textArea=document.createElement("textarea");textArea.value=text;textArea.style.top="0";textArea.style.left="0";textArea.style.position="fixed";document.body.appendChild(textArea);textArea.focus();textArea.select();try{var successful=document.execCommand("copy");var msg=successful?"successful":"unsuccessful";console.log("[COUNTDOWN] Fallback: Cópia feita com sucesso! Mensagem: "+msg)}catch(err){console.error("[COUNTDOWN] Fallback: Erro: ",err)}document.body.removeChild(textArea)},copyTextToClipboard:function copyTextToClipboard(text){if(!navigator.clipboard){Countdown.fallbackCopyTextToClipboard(text);return}navigator.clipboard.writeText(text).then(function(){console.log("[COUNTDOWN] Cópia feita com sucesso!")},function(err){console.error("[COUNTDOWN] Erro: ",err)})},applyCopyCode:function applyCopyCode(){$(".mz-countdown__wrapper--info .code a").click(function(e){e.preventDefault();var codeWrapper=$(".mz-countdown__wrapper--info .span-codigo");Countdown.copyTextToClipboard(codeWrapper.text());codeWrapper.parent().addClass("copied")});if($(window).width()<767){$(".mz-countdown__wrapper--info").find("br").remove()}},applyCountDown:function applyCountDown(nameBrand,defaultBrand,dateElement){if(!$(".mz-countdown__wrapper--chronometer").length){return}var dateInit=$("#data_init").text();var dateEnd=$("#data_end").text();Countdown.compareteData(dateInit,dateEnd);if(!Countdown.compareteData(dateInit,dateEnd)){return}dateEnd=Countdown.revertEndDate(dateEnd);var rl=Countdown.regexList();if(dateInit==""){console.log("[COUNTDOWN] Opção Direta ------------------");$(".mz-countdown").removeAttr("style");$(".mz-countdown__wrapper--chronometer").countdown(dateEnd,function(event){$("#mz-date-rendered").text(event.strftime("H{%-I} h MI{%M} min S{%S} sec"));var hours=$("#mz-date-rendered").text().match(rl.regexTime.hours)[0];hours=hours.match(rl.regexDigit)[0];var minutes=$("#mz-date-rendered").text().match(rl.regexTime.minutes)[0];minutes=minutes.match(rl.regexDigit)[0];var seconds=$("#mz-date-rendered").text().match(rl.regexTime.seconds)[0];seconds=seconds.match(rl.regexDigit)[0];$(".mz-chronometer .mz-cr__hours--number").text(hours);$(".mz-chronometer .mz-cr__minu--number").text(minutes);$(".mz-chronometer .mz-cr__seg--number").text(seconds);$(this).on("update.countdown",function(){if($(".mz-cr__mont--number").text()==0){$(".mz-cr__mont--number").parent().hide()}if($(".mz-cr__week--number").text()==0){$(".mz-cr__week--number").parent().hide()}});$(this).on("finish.countdown",function(){$(".mz-countdown").hide()})})}else if(dateInit.length==19&&dateEnd.length==19){console.log("[COUNTDOWN] Opção Agendada ------------------");var currentDate;var formatDtInit=dateInit;formatDtInit=formatDtInit.split(rl.regexTrace);formatDtInit=formatDtInit[1]+"/"+formatDtInit[0]+"/"+formatDtInit[2];var verifyCurrentDate=setInterval(function(){var captureDate=new Date;currentDate=$.format.date(captureDate,"dd/MM/yyyy HH:mm:ss");var rcCurrentDate=currentDate;currentDate=currentDate.split(rl.regexTrace);currentDate=currentDate[1]+"/"+currentDate[0]+"/"+currentDate[2];var dateCurrent=new Date(currentDate);var dateInitial=new Date(formatDtInit);if(dateCurrent<dateInitial){$(".mz-countdown").hide()}else{clearInterval(verifyCurrentDate);$(".mz-countdown").removeAttr("style");$(".mz-countdown").show();$(".mz-countdown__wrapper--chronometer").countdown(dateEnd,function(event){$("#mz-date-rendered").text(event.strftime("H{%-I} h MI{%M} min S{%S} sec"));var hours=$("#mz-date-rendered").text().match(rl.regexTime.hours)[0];hours=hours.match(rl.regexDigit)[0];var minutes=$("#mz-date-rendered").text().match(rl.regexTime.minutes)[0];minutes=minutes.match(rl.regexDigit)[0];var seconds=$("#mz-date-rendered").text().match(rl.regexTime.seconds)[0];seconds=seconds.match(rl.regexDigit)[0];$(".mz-chronometer .mz-cr__hours--number").text(hours);$(".mz-chronometer .mz-cr__minu--number").text(minutes);$(".mz-chronometer .mz-cr__seg--number").text(seconds);$(this).on("update.countdown",function(){if($(".mz-cr__mont--number").text()==0){$(".mz-cr__mont--number").parent().hide()}if($(".mz-cr__week--number").text()==0){$(".mz-cr__week--number").parent().hide()}});$(this).on("finish.countdown",function(){$(".mz-countdown").hide()})})}},1e3)}else{console.error("[COUNTDOWN] Alguma Data na formato errado! Verifique o tamanho.")}},revertEndDate:function revertEndDate(dateEnd){var rl={regexTrace:/\//g,regexDateEnd:/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g};var dateToReverse=dateEnd.match(rl.regexDateEnd)[0];dateToReverse=dateToReverse.split(rl.regexTrace);var dateHours=dateEnd.split(" ")[1];var day=dateToReverse[0];var mont=dateToReverse[1];var year=dateToReverse[2];var dateUnify=year+"/"+mont+"/"+day+" "+dateHours;return dateUnify},compareteData:function compareteData(dateOne,dateTwo){var rl=Countdown.regexList();dateOne=dateOne.split(rl.regexTrace);dateOne=dateOne[1]+"/"+dateOne[0]+"/"+dateOne[2];dateTwo=dateTwo.split(rl.regexTrace);dateTwo=dateTwo[1]+"/"+dateTwo[0]+"/"+dateTwo[2];var formatedDataOne=new Date(dateOne);var formatedDataTwo=new Date(dateTwo);if(formatedDataOne>formatedDataTwo){console.error("[COUNTDOWN] Erro no cadastro, a data agendada é maior que a data de encerramento.");return false}else if(formatedDataOne.length<19&&formatedDataTwo.length<19){console.error("[COUNTDOWN] Erro no cadastro, as datas não estão nos formatos corretos. [length]");return false}else if(formatedDataOne=="Invalid Date"&&formatedDataTwo=="Invalid Date"){console.error("[COUNTDOWN] Erro no cadastro, as datas não estão nos formatos corretos. [invalid]");return false}else{return true}},regexList:function regexList(){var rl={regexDigit:/\d+/g,regexTrace:/\//g,regexDateEnd:/[0-9]{2}\/[0-9]{2}\/[0-9]{4}/g,regexTime:{mont:/MT{[0-9]{1,2}}/g,week:/W{[0-9]{1,2}}/g,day:/D{[0-9]{1,2}}/g,hours:/H{[0-9]{1,3}/g,minutes:/MI{[0-9]{1,2}/g,seconds:/S{[0-9]{2}/}};return rl}};$(document).ready(Countdown.init)}catch(e){console.log("Erro na instancia [Countdown]: ",e)}})();var DateFormat={};!function(e){var I=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],O=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],w=["January","February","March","April","May","June","July","August","September","October","November","December"],a={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},u=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d{0,3}[Z\-+]?(\d{2}:?\d{2})?/;DateFormat.format=function(){function o(e){return a[e]||e}function i(e){var a,r,t,n,s,o=e,i="";return-1!==o.indexOf(".")&&(o=(n=o.split("."))[0],i=n[n.length-1]),3<=(s=o.split(":")).length?(a=s[0],r=s[1],t=s[2].replace(/\s.+/,"").replace(/[a-z]/gi,""),{time:o=o.replace(/\s.+/,"").replace(/[a-z]/gi,""),hour:a,minute:r,second:t,millis:i}):{time:"",hour:"",minute:"",second:"",millis:""}}function D(e,a){for(var r=a-String(e).length,t=0;t<r;t++){e="0"+e}return e}return{parseDate:function parseDate(e){var a,r,t={date:null,year:null,month:null,dayOfMonth:null,dayOfWeek:null,time:null};if("number"==typeof e)return this.parseDate(new Date(e));if("function"==typeof e.getFullYear)t.year=String(e.getFullYear()),t.month=String(e.getMonth()+1),t.dayOfMonth=String(e.getDate()),t.time=i(e.toTimeString()+"."+e.getMilliseconds());else if(-1!=e.search(u))a=e.split(/[T\+-]/),t.year=a[0],t.month=a[1],t.dayOfMonth=a[2],t.time=i(a[3].split(".")[0]);else switch(6===(a=e.split(" ")).length&&isNaN(a[5])&&(a[a.length]="()"),a.length){case 6:t.year=a[5],t.month=o(a[1]),t.dayOfMonth=a[2],t.time=i(a[3]);break;case 2:r=a[0].split("-"),t.year=r[0],t.month=r[1],t.dayOfMonth=r[2],t.time=i(a[1]);break;case 7:case 9:case 10:t.year=a[3];var n=parseInt(a[1]),s=parseInt(a[2]);n&&!s?(t.month=o(a[2]),t.dayOfMonth=a[1]):(t.month=o(a[1]),t.dayOfMonth=a[2]),t.time=i(a[4]);break;case 1:r=a[0].split(""),t.year=r[0]+r[1]+r[2]+r[3],t.month=r[5]+r[6],t.dayOfMonth=r[8]+r[9],t.time=i(r[13]+r[14]+r[15]+r[16]+r[17]+r[18]+r[19]+r[20]);break;default:return null}return t.time?t.date=new Date(t.year,t.month-1,t.dayOfMonth,t.time.hour,t.time.minute,t.time.second,t.time.millis):t.date=new Date(t.year,t.month-1,t.dayOfMonth),t.dayOfWeek=String(t.date.getDay()),t},date:function date(a,e){try{var r=this.parseDate(a);if(null===r)return a;for(var t,n=r.year,s=r.month,o=r.dayOfMonth,i=r.dayOfWeek,u=r.time,c="",h="",l="",m=!1,y=0;y<e.length;y++){var d=e.charAt(y),f=e.charAt(y+1);if(m)"'"==d?(h+=""===c?"'":c,c="",m=!1):c+=d;else switch(l="",c+=d){case"ddd":h+=(S=i,I[parseInt(S,10)]||S),c="";break;case"dd":if("d"===f)break;h+=D(o,2),c="";break;case"d":if("d"===f)break;h+=parseInt(o,10),c="";break;case"D":h+=o=1==o||21==o||31==o?parseInt(o,10)+"st":2==o||22==o?parseInt(o,10)+"nd":3==o||23==o?parseInt(o,10)+"rd":parseInt(o,10)+"th",c="";break;case"MMMM":h+=(M=s,void 0,g=parseInt(M,10)-1,w[g]||M),c="";break;case"MMM":if("M"===f)break;h+=(k=s,void 0,p=parseInt(k,10)-1,v[p]||k),c="";break;case"MM":if("M"===f)break;h+=D(s,2),c="";break;case"M":if("M"===f)break;h+=parseInt(s,10),c="";break;case"y":case"yyy":if("y"===f)break;h+=c,c="";break;case"yy":if("y"===f)break;h+=String(n).slice(-2),c="";break;case"yyyy":h+=n,c="";break;case"HH":h+=D(u.hour,2),c="";break;case"H":if("H"===f)break;h+=parseInt(u.hour,10),c="";break;case"hh":h+=D(t=0===parseInt(u.hour,10)?12:u.hour<13?u.hour:u.hour-12,2),c="";break;case"h":if("h"===f)break;t=0===parseInt(u.hour,10)?12:u.hour<13?u.hour:u.hour-12,h+=parseInt(t,10),c="";break;case"mm":h+=D(u.minute,2),c="";break;case"m":if("m"===f)break;h+=parseInt(u.minute,10),c="";break;case"ss":h+=D(u.second.substring(0,2),2),c="";break;case"s":if("s"===f)break;h+=parseInt(u.second,10),c="";break;case"S":case"SS":if("S"===f)break;h+=c,c="";break;case"SSS":h+=D(u.millis.substring(0,3),3),c="";break;case"a":h+=12<=u.hour?"PM":"AM",c="";break;case"p":h+=12<=u.hour?"p.m.":"a.m.",c="";break;case"E":h+=(b=i,O[parseInt(b,10)]||b),c="";break;case"'":c="",m=!0;break;default:h+=d,c=""}}return h+=l}catch(e){return console&&console.log&&console.log(e),a}var b,k,p,M,g,S},prettyDate:function prettyDate(e){var a,r,t,n,s;if("string"!=typeof e&&"number"!=typeof e||(a=new Date(e)),"object"==_typeof(e)&&(a=new Date(e.toString())),r=((new Date).getTime()-a.getTime())/1e3,t=Math.abs(r),n=Math.floor(t/86400),!isNaN(n))return s=r<0?"from now":"ago",t<60?0<=r?"just now":"in a moment":t<120?"1 minute "+s:t<3600?Math.floor(t/60)+" minutes "+s:t<7200?"1 hour "+s:t<86400?Math.floor(t/3600)+" hours "+s:1===n?0<=r?"Yesterday":"Tomorrow":n<7?n+" days "+s:7===n?"1 week "+s:n<31?Math.ceil(n/7)+" weeks "+s:"more than 5 weeks "+s},toBrowserTimeZone:function toBrowserTimeZone(e,a){return this.date(new Date(e),a||"MM/dd/yyyy HH:mm:ss")}}}()}(),jQuery.format=DateFormat.format;