/* Wartotle - 29/05/2019 12:02:15 GMT */
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)}"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)}var _0x37cc=["toLowerCase","apply","join","search","text","[class*='desconto']","auto",".productRightColumn","strong.skuBestPrice","label.skuBestInstallmentNumber","label.skuBestInstallmentValue","strong.skuPrice","svpvnysnezn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe","j%25C2%25A8bsvpvnysnezn%25C2%25A8pbz%25C2%25A8oe","no%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe","replace","ite","---","indexOf","qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82","ทÃѲ √Αℓ¡∂Α∂Ѳ ΡΑ૨Α ૯ઽƬΑ LѲJΑ!","productPage","closest","filterFlagBy",".qd_sp_on, .qd_sp_ignored","find","skuBestPrice",".qd_active","removeClass","qd-active","qd-sp-active","oneFlagByItem","siblings",".qd_sp_on","length","addClass","qd_sp_ignored","qd_sp_on","isDiscountFlag","div[skuCorrente]:first","attr","skuCorrente","skus","sku","bestPrice","getDiscountValue","O valor informado p/ o desconto não é um número.",".qd_productPrice","val","Por alguma razão não consegui obter o preço deste produto :(","appliedDiscount",".qd_productOldPrice","changeNativePrice",".qd_displayPrice","skuPrice","trim",".qd-sp-display-discount","html","installments","installmentValue","changeInstallments",".qd_sp_display_installments",".qd_sp_display_installmentValue",".qd_sp_installments",".qd_saveAmount","append",".qd_saveAmountPercent","prepend","em.economia-de","each","skuSelected.vtex","qd_sp_processedItem","isProductPage","wrapperElement","startedByWrapper","flagElement","call","string","forcePromotion",".qd_sp_processedItem",".qd_productPrice:not(.qd_sp_processedItem)","style","after","boolean",".produto","function","QD_SmartPrice","object","error","info","warn","unshift","[Smart Price]\n","undefined","alerta"];(function(_0x1fb834,_0x4f816b){var _0x39d5c3=function(_0x1f6c67){while(--_0x1f6c67){_0x1fb834["push"](_0x1fb834["shift"]())}};_0x39d5c3(++_0x4f816b)})(_0x37cc,465);var _0x433e=function(_0x2baf65,_0x35cd78){_0x2baf65=_0x2baf65-0;var _0x261c25=_0x37cc[_0x2baf65];return _0x261c25};(function(_0x46f94d){var _0x3d2197=jQuery;if(_0x433e("0x0")!==typeof _0x3d2197["fn"][_0x433e("0x1")]){var _0xa75796=function(_0x324250,_0x397e6d){if(_0x433e("0x2")===typeof console&&_0x433e("0x0")===typeof console[_0x433e("0x3")]&&_0x433e("0x0")===typeof console[_0x433e("0x4")]&&_0x433e("0x0")===typeof console[_0x433e("0x5")]){var _0x16be74;_0x433e("0x2")===typeof _0x324250?(_0x324250[_0x433e("0x6")](_0x433e("0x7")),_0x16be74=_0x324250):_0x16be74=[_0x433e("0x7")+_0x324250];if(_0x433e("0x8")===typeof _0x397e6d||_0x433e("0x9")!==_0x397e6d[_0x433e("0xa")]()&&"aviso"!==_0x397e6d[_0x433e("0xa")]())if(_0x433e("0x8")!==typeof _0x397e6d&&"info"===_0x397e6d[_0x433e("0xa")]())try{console[_0x433e("0x4")][_0x433e("0xb")](console,_0x16be74)}catch(_0x581f4c){console[_0x433e("0x4")](_0x16be74[_0x433e("0xc")]("\n"))}else try{console[_0x433e("0x3")][_0x433e("0xb")](console,_0x16be74)}catch(_0x33e23f){console[_0x433e("0x3")](_0x16be74["join"]("\n"))}else try{console[_0x433e("0x5")][_0x433e("0xb")](console,_0x16be74)}catch(_0x30c287){console[_0x433e("0x5")](_0x16be74[_0x433e("0xc")]("\n"))}}},_0x49cb17=/[0-9]+%/i,_0x3e13cc=/[0-9\.]+(?=%)/i,_0x508cce={isDiscountFlag:function(_0x182a69){return-1<_0x182a69["text"]()[_0x433e("0xd")](_0x49cb17)?!0:!1},getDiscountValue:function(_0x5877d0){return _0x5877d0[_0x433e("0xe")]()["match"](_0x3e13cc)},startedByWrapper:!1,flagElement:".flag",wrapperElement:"li",filterFlagBy:_0x433e("0xf"),forcePromotion:null,appliedDiscount:null,oneFlagByItem:!0,isSmartCheckout:!0,changeInstallments:!1,productPage:{changeNativeSaveAmount:!0,changeNativePrice:!0,changeInstallments:!1,isProductPage:_0x433e("0x10"),wrapperElement:_0x433e("0x11"),skuBestPrice:_0x433e("0x12"),installments:_0x433e("0x13"),installmentValue:_0x433e("0x14"),skuPrice:_0x433e("0x15")}};_0x3d2197["fn"]["QD_SmartPrice"]=function(){};_0x46f94d=function(_0x324032){var _0x86d8e8={b:_0x433e("0x16"),jj:_0x433e("0x17"),dqy:_0x433e("0x18"),dqfr:"yzl%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe",dqfry:"zl%25C2%25A8zligrk%25C2%25A8pbz"};return function(_0x324032){var _0x29282c=function(_0x86d8e8){return _0x86d8e8};var _0x31a7dc=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];_0x324032=_0x324032["d"+_0x31a7dc[16]+"c"+_0x31a7dc[17]+"m"+_0x29282c(_0x31a7dc[1])+"n"+_0x31a7dc[13]]["l"+_0x31a7dc[18]+"c"+_0x31a7dc[0]+"ti"+_0x29282c("o")+"n"];var _0x5c8efb=function(_0x86d8e8){return escape(encodeURIComponent(_0x86d8e8[_0x433e("0x19")](/\./g,"¨")[_0x433e("0x19")](/[a-zA-Z]/g,function(_0x86d8e8){return String["fromCharCode"](("Z">=_0x86d8e8?90:122)>=(_0x86d8e8=_0x86d8e8["charCodeAt"](0)+13)?_0x86d8e8:_0x86d8e8-26)})))};var _0x3d2197=_0x5c8efb(_0x324032[[_0x31a7dc[9],_0x29282c("o"),_0x31a7dc[12],_0x31a7dc[_0x29282c(13)]][_0x433e("0xc")]("")]);_0x5c8efb=_0x5c8efb((window[["js",_0x29282c("no"),"m",_0x31a7dc[1],_0x31a7dc[4]["toUpperCase"](),_0x433e("0x1a")]["join"]("")]||_0x433e("0x1b"))+[".v",_0x31a7dc[13],"e",_0x29282c("x"),"co",_0x29282c("mm"),"erc",_0x31a7dc[1],".c",_0x29282c("o"),"m.",_0x31a7dc[19],"r"][_0x433e("0xc")](""));for(var _0x3a2664 in _0x86d8e8){if(_0x5c8efb===_0x3a2664+_0x86d8e8[_0x3a2664]||_0x3d2197===_0x3a2664+_0x86d8e8[_0x3a2664]){var _0x26c420="tr"+_0x31a7dc[17]+"e";break}_0x26c420="f"+_0x31a7dc[0]+"ls"+_0x29282c(_0x31a7dc[1])}_0x29282c=!1;-1<_0x324032[[_0x31a7dc[12],"e",_0x31a7dc[0],"rc",_0x31a7dc[9]]["join"]("")][_0x433e("0x1c")](_0x433e("0x1d"))&&(_0x29282c=!0);return[_0x26c420,_0x29282c]}(_0x324032)}(window);if(!eval(_0x46f94d[0]))return _0x46f94d[1]?_0xa75796(_0x433e("0x1e")):!1;var _0x192f6f=function(_0x502c42,_0xbebcc0){var _0x1ef824=function(_0x3a3a14){var _0x502c42,_0x2bc9c0,_0x1ef824,_0x2981f2,_0x4b0ea6,_0x4c82a2,_0x46f94d,_0x402ae8,_0x50fc30,_0x45461c,_0x113aad=_0x3d2197(this);_0x3a3a14=_0x433e("0x8")===typeof _0x3a3a14?!1:_0x3a3a14;var _0x15e511=_0xbebcc0[_0x433e("0x1f")]["isProductPage"]?_0x113aad[_0x433e("0x20")](_0xbebcc0["productPage"]["wrapperElement"]):_0x113aad[_0x433e("0x20")](_0xbebcc0["wrapperElement"]);if(_0x3a3a14||_0x113aad["is"](_0xbebcc0[_0x433e("0x21")])){var _0x28f87b=_0xbebcc0["productPage"]["isProductPage"];if(!_0x113aad["is"](_0x433e("0x22"))||_0x28f87b){if(_0x28f87b){var _0x2eec38=_0x15e511[_0x433e("0x23")](_0xbebcc0[_0x433e("0x1f")][_0x433e("0x24")]);if(_0x2eec38[_0x433e("0x23")](_0x433e("0x25"))["length"])return;_0x2eec38[_0x433e("0x26")](_0x433e("0x27"));_0x15e511[_0x433e("0x26")](_0x433e("0x28"))}if(_0xbebcc0[_0x433e("0x29")]&&_0x113aad[_0x433e("0x2a")](_0x433e("0x2b"))[_0x433e("0x2c")])_0x113aad[_0x433e("0x2d")](_0x433e("0x2e"));else if(_0x113aad[_0x433e("0x2d")](_0x433e("0x2f")),_0xbebcc0[_0x433e("0x30")](_0x113aad)){if(_0x28f87b){var _0x4034d0={};if(_0x3a3a14=parseInt(_0x3d2197(_0x433e("0x31"))[_0x433e("0x32")](_0x433e("0x33")),10))for(_0x502c42=0;_0x502c42<skuJson[_0x433e("0x34")][_0x433e("0x2c")];_0x502c42++){if(skuJson["skus"][_0x502c42][_0x433e("0x35")]==_0x3a3a14){_0x4034d0=skuJson["skus"][_0x502c42];break}}else for(_0x502c42 in _0x3a3a14=99999999999999,skuJson[_0x433e("0x34")])_0x433e("0x0")!==typeof skuJson[_0x433e("0x34")][_0x502c42]&&skuJson[_0x433e("0x34")][_0x502c42]["available"]&&skuJson["skus"][_0x502c42][_0x433e("0x36")]<_0x3a3a14&&(_0x3a3a14=skuJson["skus"][_0x502c42][_0x433e("0x36")],_0x4034d0=skuJson[_0x433e("0x34")][_0x502c42])}_0x502c42=_0xbebcc0[_0x433e("0x37")](_0x113aad);var _0x1dc98c=parseFloat(_0x502c42,10);if(isNaN(_0x1dc98c))return _0xa75796([_0x433e("0x38"),_0x113aad],"alerta");var _0x6aee7d=function(_0x502c42){_0x28f87b?_0x2bc9c0=(_0x502c42[_0x433e("0x36")]||0)/100:(_0x46f94d=_0x15e511["find"](_0x433e("0x39")),_0x2bc9c0=parseFloat((_0x46f94d[_0x433e("0x3a")]()||"")[_0x433e("0x19")](/[^0-9\.,]+/i,"")[_0x433e("0x19")](".","")[_0x433e("0x19")](",","."),10));if(isNaN(_0x2bc9c0))return _0xa75796([_0x433e("0x3b"),_0x113aad,_0x15e511]);null!==_0xbebcc0[_0x433e("0x3c")]&&(_0x402ae8=0,isNaN(_0xbebcc0[_0x433e("0x3c")])?(_0x50fc30=_0x15e511[_0x433e("0x23")](_0xbebcc0[_0x433e("0x3c")]),_0x50fc30["length"]&&(_0x402ae8=_0xbebcc0[_0x433e("0x37")](_0x50fc30))):_0x402ae8=_0xbebcc0[_0x433e("0x3c")],_0x402ae8=parseFloat(_0x402ae8,10),isNaN(_0x402ae8)&&(_0x402ae8=0),0!==_0x402ae8&&(_0x2bc9c0=100*_0x2bc9c0/(100-_0x402ae8)));_0x1ef824=_0x28f87b?(_0x502c42["listPrice"]||0)/100:parseFloat((_0x15e511[_0x433e("0x23")](_0x433e("0x3d"))[_0x433e("0x3a")]()||"")[_0x433e("0x19")](/[^0-9\.,]+/i,"")[_0x433e("0x19")](".","")["replace"](",","."),10);isNaN(_0x1ef824)&&(_0x1ef824=.001);_0x2981f2=(100-_0x1dc98c)/100*_0x2bc9c0;_0x28f87b&&_0xbebcc0["productPage"][_0x433e("0x3e")]?(_0x2eec38[_0x433e("0xe")](_0x2eec38["text"]()["trim"]()[_0x433e("0x19")](/[0-9\.]+,[0-9]+/,qd_number_format(_0x2981f2,2,",",".")))["addClass"](_0x433e("0x27")),_0x15e511[_0x433e("0x2d")](_0x433e("0x28"))):(_0x45461c=_0x15e511[_0x433e("0x23")](_0x433e("0x3f")),_0x45461c[_0x433e("0xe")](_0x45461c["text"]()[_0x433e("0x19")](/[0-9\.]+,[0-9]+/i,"")+qd_number_format(_0x2981f2,2,",",".")));_0x28f87b&&(_0x4b0ea6=_0x15e511["find"](_0xbebcc0["productPage"][_0x433e("0x40")]),_0x4b0ea6["length"]&&_0x4b0ea6[_0x433e("0xe")](_0x4b0ea6[_0x433e("0xe")]()[_0x433e("0x41")]()["replace"](/[0-9\.]+,[0-9]+/,qd_number_format(_0x2981f2,2,",","."))));var _0x3a3a14=_0x15e511[_0x433e("0x23")](_0x433e("0x42"));_0x3a3a14[_0x433e("0xe")](_0x3a3a14[_0x433e("0xe")]()[_0x433e("0x19")](/[0-9]+%/i,_0x1dc98c+"%"));_0x3a3a14=function(_0xbebcc0,_0x3a3a14,_0x2bc9c0){_0xbebcc0=_0x15e511["find"](_0xbebcc0);_0xbebcc0[_0x433e("0x2c")]&&_0xbebcc0[_0x433e("0x43")](_0xbebcc0[_0x433e("0x43")]()[_0x433e("0x41")]()[_0x433e("0x19")](/[0-9]{1,2}/,_0x2bc9c0?_0x2bc9c0:_0x502c42[_0x433e("0x44")]||0));_0x3a3a14=_0x15e511[_0x433e("0x23")](_0x3a3a14);_0x3a3a14[_0x433e("0x2c")]&&_0x3a3a14[_0x433e("0x43")](_0x3a3a14[_0x433e("0x43")]()["trim"]()[_0x433e("0x19")](/[0-9\.]+,[0-9]+/,qd_number_format(_0x2981f2/(_0x2bc9c0?_0x2bc9c0:_0x502c42["installments"]||1),2,",",".")))};_0x28f87b&&_0xbebcc0["productPage"]["changeInstallments"]?_0x3a3a14(_0xbebcc0["productPage"]["installments"],_0xbebcc0[_0x433e("0x1f")][_0x433e("0x45")]):_0xbebcc0[_0x433e("0x46")]&&_0x3a3a14(_0x433e("0x47"),_0x433e("0x48"),parseInt(_0x15e511["find"](_0x433e("0x49"))["val"]()||1)||1);_0x15e511[_0x433e("0x23")](_0x433e("0x4a"))[_0x433e("0x4b")](qd_number_format(_0x1ef824-_0x2981f2,2,",","."));_0x15e511[_0x433e("0x23")](_0x433e("0x4c"))[_0x433e("0x4d")](qd_number_format(100*(_0x1ef824-_0x2981f2)/_0x1ef824,2,",","."));_0x28f87b&&_0xbebcc0[_0x433e("0x1f")]["changeNativeSaveAmount"]&&_0x3d2197(_0x433e("0x4e"))[_0x433e("0x4f")](function(){_0x4c82a2=_0x3d2197(this);_0x4c82a2[_0x433e("0xe")](_0x4c82a2[_0x433e("0xe")]()["trim"]()[_0x433e("0x19")](/[0-9\.]+,[0-9]+/,qd_number_format(_0x1ef824-_0x2981f2,2,",",".")));_0x4c82a2["addClass"](_0x433e("0x27"))})};_0x6aee7d(_0x4034d0);if(_0x28f87b)_0x3d2197(window)["on"](_0x433e("0x50"),function(_0xbebcc0,_0x3a3a14,_0x502c42){_0x6aee7d(_0x502c42)});_0x15e511["addClass"](_0x433e("0x51"));_0x28f87b||_0x46f94d[_0x433e("0x2d")]("qd_sp_processedItem")}}}else _0xbebcc0[_0x433e("0x1f")][_0x433e("0x52")]&&_0x15e511["is"](_0xbebcc0[_0x433e("0x1f")][_0x433e("0x53")])&&(_0x15e511[_0x433e("0x23")](_0xbebcc0[_0x433e("0x1f")][_0x433e("0x24")])["addClass"](_0x433e("0x27")),_0x15e511["addClass"](_0x433e("0x28")))};(_0xbebcc0[_0x433e("0x54")]?_0x502c42[_0x433e("0x23")](_0xbebcc0[_0x433e("0x55")]):_0x502c42)["each"](function(){_0x1ef824[_0x433e("0x56")](this,!1)});if(_0x433e("0x57")==typeof _0xbebcc0[_0x433e("0x58")]){var _0x1535fc=_0xbebcc0[_0x433e("0x54")]?_0x502c42:_0x502c42["closest"](_0xbebcc0[_0x433e("0x53")]);_0x1535fc=_0xbebcc0[_0x433e("0x1f")][_0x433e("0x52")]?_0x1535fc["closest"](_0xbebcc0[_0x433e("0x1f")][_0x433e("0x53")])["not"](_0x433e("0x59")):_0x1535fc["find"](_0x433e("0x5a"));_0x1535fc["each"](function(){var _0x44177d=_0x3d2197(_0xbebcc0[_0x433e("0x58")]);_0x44177d[_0x433e("0x32")](_0x433e("0x5b"),"display:none !important;");_0xbebcc0[_0x433e("0x1f")][_0x433e("0x52")]?_0x3d2197(this)[_0x433e("0x4b")](_0x44177d):_0x3d2197(this)[_0x433e("0x5c")](_0x44177d);_0x1ef824[_0x433e("0x56")](_0x44177d,!0)})}};_0x3d2197["fn"][_0x433e("0x1")]=function(_0xae3026){var _0x2c66fb=_0x3d2197(this);if(!_0x2c66fb[_0x433e("0x2c")])return _0x2c66fb;_0xae3026=_0x3d2197["extend"](!0,{},_0x508cce,_0xae3026);_0x433e("0x5d")!=typeof _0xae3026[_0x433e("0x1f")][_0x433e("0x52")]&&(_0xae3026[_0x433e("0x1f")]["isProductPage"]=_0x3d2197(document["body"])["is"](_0x433e("0x5e")));_0x192f6f(_0x2c66fb,_0xae3026);return _0x2c66fb}}})(this);(function(x){var d=jQuery;if("function"!==typeof d.fn.QD_smartQuantity){var g=function(d,a){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var f;"object"===typeof d?(d.unshift("[Quatro Digital - Smart Quantity]\n"),f=d):f=["[Quatro Digital - Smart Quantity]\n"+d];if("undefined"===typeof a||"alerta"!==a.toLowerCase()&&"aviso"!==a.toLowerCase())if("undefined"!==typeof a&&"info"===a.toLowerCase())try{console.info.apply(console,f)}catch(k){console.info(f.join("\n"))}else try{console.error.apply(console,f)}catch(k){console.error(f.join("\n"))}else try{console.warn.apply(console,f)}catch(k){console.warn(f.join("\n"))}}},m={buyButton:".buy-button",qttInput:".qd-sq-quantity",btnMore:".qd-sq-more",btnMinus:".qd-sq-minus",initialValue:1,minimumValue:1,minToBuy:null,setQuantityByUrl:!0},n=function(q,a){function f(c,e,b){a.setQuantityByUrl?c.val(((location.search||"").match(r)||[a.initialValue]).pop()):c.val(a.initialValue);c.change(function(c,b){try{if("qd_ssl_trigger"!=b){var e=d(this),h=parseInt(e.val().replace(u,""));var f=!isNaN(h)&&h>a.minimumValue?h:a.minimumValue;null!=a.minToBuy&&f<a.minToBuy&&f!=a.minimumValue&&(f=a.minToBuy,"qd_ssl_trigger_less"==b&&(f=0));e.val(f);e.trigger("QuatroDigital.sq_change",this)}}catch(v){g(v.message)}});c.focusin(function(){d(this).trigger("QuatroDigital.sq_focusin",this)});e.click(function(b){b.preventDefault();c.val((parseInt(c.val())||a.minimumValue)+1).change()});b.click(function(b){b.preventDefault();b=(parseInt(c.val())||a.minimumValue+1)-1;null!=a.minToBuy&&b<a.minToBuy&&(b=0);c.val(b).change()});c.change()}function k(c,e,b){c.on("QuatroDigital.sq_change",function(){(d(this).val()||0)<=a.minimumValue?(b.addClass("qd-sq-inactive"),e.removeClass("qd-sq-inactive")):(e.addClass("qd-sq-inactive"),b.removeClass("qd-sq-inactive"))})}function m(c){c.one("QuatroDigital.sq_qtt_min_change",function(c,b){a.minToBuy=b;d(this).change()})}function n(c,e){c.on("QuatroDigital.sq_change",function(){try{if(!(e[0].hostname||"").length)return g("A quantidade não foi inserida no bt comprar pois o mesmo não possui uma URL","info");var b=e[0].search||"";-1<b.toLowerCase().indexOf("qty=")?e[0].search=b.replace(p,"qty="+(parseInt(c.val())||("number"==typeof a.minimumValue?a.minimumValue:1))+"&"):e[0].search="qty="+(parseInt(c.val())||("number"==typeof a.minimumValue?a.minimumValue:1))+"&"+(e[0].search||"").replace(p,"");e.not(":first").each(function(){this.href=e[0].href});var d=((e.first().attr("href")||"").match(w)||[""]).pop()+"";c.attr("data-sku-id",d);if(d.length&&"object"===typeof skuJson&&!c.attr("data-sku-price"))for(b=0;b<skuJson.skus.length;b++)skuJson.skus[b].sku==d&&c.attr("data-sku-price",skuJson.skus[b].bestPrice)}catch(l){g(l.message)}})}var u=/[^0-9-]/gi,r=/qty=([0-9]+)/i,w=/sku=([0-9]+)/i,p=/qty=[0-9]+&?/gi;q.each(function(){try{var c=d(this),e=c.find(a.buyButton),b=c.find(a.qttInput),h=c.find(a.btnMore),l=c.find(a.btnMinus);if(!e.length&&null!==a.buyButton||!b.length)return g("O plugin parou por aqui! Não foram encontrados o botão comprar e o campo de quantidade","alerta");if(b.is(".qd-sq-on"))return g(["Execução ignorada pois este input já possui o plugin aplicado. Input: ",b],"info");b.addClass("qd-sq-on");k(b,h,l);m(b);null!==a.buyButton&&n(b,e);f(b,h,l);d(window).on("vtex.sku.selected skuSelected.vtex",function(){b.change()})}catch(t){g(t.message)}})};d.fn.QD_smartQuantity=function(g){var a=d(this);a.qdPlugin=new n(a,d.extend({},m,g));d(window).trigger("QuatroDigital.sq_callback");return a};d(function(){d(".qd_auto_smart_quantity").QD_smartQuantity()})}})(this);(function($){$("a").attr("target","_parent");$(".shelf-qd-v1").each(function(){$(this).find(".btn-add-buy-button-asynchronous").attr("href",$(this).find(".shelf-qd-v1-image-wrapper-link").attr("href"))});var imgWidth=300;var imgHeight=300;var imgRegex=new RegExp("(ids/[0-9]+-)[0-9-]+","i");$(".prateleira").find(".qd_sil_img_wrapper").not(".qd-sil-on").find("img:visible").each(function(){var $t=$(this);var img=$t.clone();img.on("load",function(){$(this).addClass("qd-sil-image-loaded")});img.attr({src:img[0].src.replace(imgRegex,"$1"+imgWidth+"-"+imgHeight),width:imgWidth,height:imgHeight});img.addClass("qd-sil-image").insertAfter($t);img.addClass("qd-sil-image-loaded");img.closest(".qd_sil_img_wrapper").addClass("qd-sil-on")});var applyCarouselShelf=function(){if(!$.fn.slick)return;var wrapper=$(".prateleira").not(".slick-initialized");wrapper.slick({slidesToShow:4,slidesToScroll:4,infinite:true,draggable:false,speed:700,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:550,settings:{slidesToShow:1,slidesToScroll:1}}]})};var smartQuantityShelf=function(){var wrapper=$("li[layout]:not(.qd-on)");wrapper.QD_smartQuantity({buyButton:".btn-add-buy-button-asynchronous",setQuantityByUrl:false});wrapper.addClass("qd-on")};var applySmartPrice=function(){var wrapper=$("li[layout]");wrapper.find(".shelf-qd-v1:not(.qd-sp-on)").find(".shelf-qd-v1-price a > .col-md-9").append('<span class="qd-sp-wrap"> <p class="qd_displayPrice shelf-qd-v1-sp-best-price">R$ </p> <span> no boleto</span> </span>');$(".shelf-qd-v1").addClass("qd-sp-on");wrapper.find(".flag").QD_SmartPrice({filterFlagBy:"[class*='boleto']",wrapperElement:wrapper,productPage:{isProductPage:false}})};var saveAmountFix=function(){$(".shelf-qd-v1-highlight-discount-percentage:not(.qd-on)").addClass("qd-on").each(function(){var $t=$(this);$t.text(($t.text().trim().match(/[0-9]+/)||[""]).pop()+"% off")})};applyCarouselShelf();smartQuantityShelf();applySmartPrice();saveAmountFix();$(document).on("ajaxStop",function(){smartQuantityShelf();applySmartPrice()})})(jQuery);(function($){"use strict";function resetIframeSize(useBody){window.parent.postMessage("qd-iframe-cdn|"+($(useBody?document.body:document).height()+5),"*")}$(function(){resetIframeSize(false)});$(window).on("load",function(){resetIframeSize(false)});$(window).scroll(function(){resetIframeSize(false)});$(window).on("QD_manualIframeAdjust",function(e,useBody){resetIframeSize(useBody||false)});$(document).ajaxComplete(function(){resetIframeSize(false)});$(document).ajaxStart(function(){resetIframeSize(false)});var lastWindowSize=$(window).width();var timeout=0;$(window).resize(function(){clearTimeout(timeout);timeout=setTimeout(function(){if(lastWindowSize!=$(window).width()){resetIframeSize(true);lastWindowSize=$(window).width()}},20)})})(jQuery);(function($){$(function(){$("a[href^='#']").click(function(){window.parent.postMessage("qd-iframe-scroll|"+($($(this).attr("href")).first().offset()||{top:0}).top,"*")})})})(jQuery);