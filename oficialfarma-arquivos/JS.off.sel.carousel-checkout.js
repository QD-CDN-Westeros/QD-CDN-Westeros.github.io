"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});Array.prototype.indexOf||(Array.prototype.indexOf=function(d,e){var a;if(null==this)throw new TypeError('"this" is null or not defined');var c=Object(this),b=c.length>>>0;if(0===b)return-1;a=+e||0;Infinity===Math.abs(a)&&(a=0);if(a>=b)return-1;for(a=Math.max(0<=a?a:b-Math.abs(a),0);a<b;){if(a in c&&c[a]===d)return a;a++}return-1});function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)}"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});"function"!=typeof String.prototype.capitalize&&(String.prototype.capitalize=function(){return this.charAt(0).toUpperCase()+this.slice(1).toLowerCase()});"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"ç":"c","æ":"ae","œ":"oe","á":"a","é":"e","í":"i","ó":"o","ú":"u","à":"a","è":"e","ì":"i","ò":"o","ù":"u","ä":"a","ë":"e","ï":"i","ö":"o","ü":"u","ÿ":"y","â":"a","ê":"e","î":"i","ô":"o","û":"u","å":"a","ã":"a","ø":"o","õ":"o",u:"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U","Ê":"E","Ô":"O","Ü":"U","Ã":"A","Õ":"O","À":"A","Ç":"C"};return this.replace(/[\u00e0-\u00fa]/gi,function(a){return"undefined"!=typeof b[a]?b[a]:a})});function qd_number_format(b,c,d,e){b=(b+"").replace(/[^0-9+\-Ee.]/g,"");b=isFinite(+b)?+b:0;c=isFinite(+c)?Math.abs(c):0;e="undefined"===typeof e?",":e;d="undefined"===typeof d?".":d;var a="",a=function(a,b){var c=Math.pow(10,b);return""+(Math.round(a*c)/c).toFixed(b)},a=(c?a(b,c):""+Math.round(b)).split(".");3<a[0].length&&(a[0]=a[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,e));(a[1]||"").length<c&&(a[1]=a[1]||"",a[1]+=Array(c-a[1].length+1).join("0"));return a.join(d)}var _0x3735=["installments","changeInstallments","installmentValue",".qd_sp_display_installments",".qd_sp_display_installmentValue",".qd_sp_installments",".qd_saveAmount","append",".qd_saveAmountPercent","prepend","em.economia-de","each","skuSelected.vtex","qd_sp_processedItem","flagElement","call","string","startedByWrapper","not",".qd_productPrice:not(.qd_sp_processedItem)","forcePromotion","style","display:none !important;","body",".produto","function","QD_SmartPrice","error","warn","object","unshift","undefined","alerta","toLowerCase","info","apply","join","text","search","match","[class*='desconto']","auto",".productRightColumn","strong.skuBestPrice","label.skuBestInstallmentNumber","label.skuBestInstallmentValue","strong.skuPrice","svpvnysnezn%25C2%25A8igrkpbzzrepr%25C2%25A8pbz%25C2%25A8oe","no%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe","fromCharCode","toUpperCase","ite","---","erc","indexOf","ทÃѲ √Αℓ¡∂Α∂Ѳ ΡΑ૨Α ૯ઽƬΑ LѲJΑ!","productPage","isProductPage","closest","wrapperElement","filterFlagBy",".qd_sp_on, .qd_sp_ignored","find","skuBestPrice",".qd_active","length","removeClass","qd-active","oneFlagByItem","siblings",".qd_sp_on","addClass","qd_sp_ignored","qd_sp_on","div[skuCorrente]:first","attr","skus","sku","available","getDiscountValue","bestPrice",".qd_productPrice","val","replace","appliedDiscount","listPrice",".qd_productOldPrice","changeNativePrice","trim",".qd_displayPrice",".qd-sp-display-discount","html"];(function(_0x410308,_0x379764){var _0x5ed091=function(_0x28eb6b){while(--_0x28eb6b){_0x410308["push"](_0x410308["shift"]())}};_0x5ed091(++_0x379764)})(_0x3735,301);var _0x11bc=function(_0x5ed25c,_0x20d782){_0x5ed25c=_0x5ed25c-0;var _0xac67cb=_0x3735[_0x5ed25c];return _0xac67cb};(function(_0x34e142){var _0x2f80d1=jQuery;if(_0x11bc("0x0")!==typeof _0x2f80d1["fn"][_0x11bc("0x1")]){var _0x42ca27=function(_0x4f217c,_0x312c29){if("object"===typeof console&&_0x11bc("0x0")===typeof console[_0x11bc("0x2")]&&_0x11bc("0x0")===typeof console["info"]&&"function"===typeof console[_0x11bc("0x3")]){var _0xf53a2f;_0x11bc("0x4")===typeof _0x4f217c?(_0x4f217c[_0x11bc("0x5")]("[Smart Price]\n"),_0xf53a2f=_0x4f217c):_0xf53a2f=["[Smart Price]\n"+_0x4f217c];if(_0x11bc("0x6")===typeof _0x312c29||_0x11bc("0x7")!==_0x312c29[_0x11bc("0x8")]()&&"aviso"!==_0x312c29["toLowerCase"]())if(_0x11bc("0x6")!==typeof _0x312c29&&_0x11bc("0x9")===_0x312c29[_0x11bc("0x8")]())try{console[_0x11bc("0x9")][_0x11bc("0xa")](console,_0xf53a2f)}catch(_0x580a9d){console[_0x11bc("0x9")](_0xf53a2f[_0x11bc("0xb")]("\n"))}else try{console[_0x11bc("0x2")]["apply"](console,_0xf53a2f)}catch(_0xb78550){console[_0x11bc("0x2")](_0xf53a2f[_0x11bc("0xb")]("\n"))}else try{console[_0x11bc("0x3")]["apply"](console,_0xf53a2f)}catch(_0x27f9ba){console[_0x11bc("0x3")](_0xf53a2f[_0x11bc("0xb")]("\n"))}}},_0x22300c=/[0-9]+%/i,_0x4b723f=/[0-9\.]+(?=%)/i,_0x47b10e={isDiscountFlag:function(_0x32fcd0){return-1<_0x32fcd0[_0x11bc("0xc")]()[_0x11bc("0xd")](_0x22300c)?!0:!1},getDiscountValue:function(_0xad8058){return _0xad8058[_0x11bc("0xc")]()[_0x11bc("0xe")](_0x4b723f)},startedByWrapper:!1,flagElement:".flag",wrapperElement:"li",filterFlagBy:_0x11bc("0xf"),forcePromotion:null,appliedDiscount:null,oneFlagByItem:!0,isSmartCheckout:!0,changeInstallments:!1,productPage:{changeNativeSaveAmount:!0,changeNativePrice:!0,changeInstallments:!1,isProductPage:_0x11bc("0x10"),wrapperElement:_0x11bc("0x11"),skuBestPrice:_0x11bc("0x12"),installments:_0x11bc("0x13"),installmentValue:_0x11bc("0x14"),skuPrice:_0x11bc("0x15")}};_0x2f80d1["fn"]["QD_SmartPrice"]=function(){};_0x34e142=function(_0x527e7c){var _0x43106a={b:_0x11bc("0x16"),jj:"j%25C2%25A8bsvpvnysnezn%25C2%25A8pbz%25C2%25A8oe",dqy:_0x11bc("0x17"),dqfr:"yzl%25C2%25A8igrkpbzzreprfgnoyr%25C2%25A8pbz%25C2%25A8oe",dqfry:"zl%25C2%25A8zligrk%25C2%25A8pbz"};return function(_0x9c2d1f){var _0x1420e0=function(_0x15ee05){return _0x15ee05};var _0x2f74eb=["a","e",18,"m","s","k","d","u","g","h","a","g","s","t","z","y","o","u","o","b"];_0x9c2d1f=_0x9c2d1f["d"+_0x2f74eb[16]+"c"+_0x2f74eb[17]+"m"+_0x1420e0(_0x2f74eb[1])+"n"+_0x2f74eb[13]]["l"+_0x2f74eb[18]+"c"+_0x2f74eb[0]+"ti"+_0x1420e0("o")+"n"];var _0x2e0865=function(_0x5a7a0a){return escape(encodeURIComponent(_0x5a7a0a["replace"](/\./g,"¨")["replace"](/[a-zA-Z]/g,function(_0x4e6e2b){return String[_0x11bc("0x18")](("Z">=_0x4e6e2b?90:122)>=(_0x4e6e2b=_0x4e6e2b["charCodeAt"](0)+13)?_0x4e6e2b:_0x4e6e2b-26)})))};var _0x2f80d1=_0x2e0865(_0x9c2d1f[[_0x2f74eb[9],_0x1420e0("o"),_0x2f74eb[12],_0x2f74eb[_0x1420e0(13)]][_0x11bc("0xb")]("")]);_0x2e0865=_0x2e0865((window[["js",_0x1420e0("no"),"m",_0x2f74eb[1],_0x2f74eb[4][_0x11bc("0x19")](),_0x11bc("0x1a")][_0x11bc("0xb")]("")]||_0x11bc("0x1b"))+[".v",_0x2f74eb[13],"e",_0x1420e0("x"),"co",_0x1420e0("mm"),_0x11bc("0x1c"),_0x2f74eb[1],".c",_0x1420e0("o"),"m.",_0x2f74eb[19],"r"][_0x11bc("0xb")](""));for(var _0x4d0f46 in _0x43106a){if(_0x2e0865===_0x4d0f46+_0x43106a[_0x4d0f46]||_0x2f80d1===_0x4d0f46+_0x43106a[_0x4d0f46]){var _0x3498b8="tr"+_0x2f74eb[17]+"e";break}_0x3498b8="f"+_0x2f74eb[0]+"ls"+_0x1420e0(_0x2f74eb[1])}_0x1420e0=!1;-1<_0x9c2d1f[[_0x2f74eb[12],"e",_0x2f74eb[0],"rc",_0x2f74eb[9]][_0x11bc("0xb")]("")][_0x11bc("0x1d")]("qu%E0%B8%84%D1%82%D1%8F%CF%83d%C2%A1g%C2%A1%D1%82%E0%B8%84%C5%82")&&(_0x1420e0=!0);return[_0x3498b8,_0x1420e0]}(_0x527e7c)}(window);if(!eval(_0x34e142[0]))return _0x34e142[1]?_0x42ca27(_0x11bc("0x1e")):!1;var _0x56b4be=function(_0x2def73,_0x14a7c7){var _0x5d654b=function(_0x636e59){var _0x2def73,_0x41862e,_0x5d654b,_0x1c52bc,_0x59c2ff,_0x326ee4,_0x34e142,_0x48a930,_0xd4bac,_0x4d10a9,_0x128dd4=_0x2f80d1(this);_0x636e59=_0x11bc("0x6")===typeof _0x636e59?!1:_0x636e59;var _0x2a59db=_0x14a7c7[_0x11bc("0x1f")][_0x11bc("0x20")]?_0x128dd4[_0x11bc("0x21")](_0x14a7c7["productPage"]["wrapperElement"]):_0x128dd4["closest"](_0x14a7c7[_0x11bc("0x22")]);if(_0x636e59||_0x128dd4["is"](_0x14a7c7[_0x11bc("0x23")])){var _0x3826c1=_0x14a7c7[_0x11bc("0x1f")][_0x11bc("0x20")];if(!_0x128dd4["is"](_0x11bc("0x24"))||_0x3826c1){if(_0x3826c1){var _0x108d55=_0x2a59db[_0x11bc("0x25")](_0x14a7c7["productPage"][_0x11bc("0x26")]);if(_0x108d55["find"](_0x11bc("0x27"))[_0x11bc("0x28")])return;_0x108d55[_0x11bc("0x29")](_0x11bc("0x2a"));_0x2a59db[_0x11bc("0x29")]("qd-sp-active")}if(_0x14a7c7[_0x11bc("0x2b")]&&_0x128dd4[_0x11bc("0x2c")](_0x11bc("0x2d"))["length"])_0x128dd4[_0x11bc("0x2e")](_0x11bc("0x2f"));else if(_0x128dd4["addClass"](_0x11bc("0x30")),_0x14a7c7["isDiscountFlag"](_0x128dd4)){if(_0x3826c1){var _0x58ae37={};if(_0x636e59=parseInt(_0x2f80d1(_0x11bc("0x31"))[_0x11bc("0x32")]("skuCorrente"),10))for(_0x2def73=0;_0x2def73<skuJson[_0x11bc("0x33")]["length"];_0x2def73++){if(skuJson["skus"][_0x2def73][_0x11bc("0x34")]==_0x636e59){_0x58ae37=skuJson[_0x11bc("0x33")][_0x2def73];break}}else for(_0x2def73 in _0x636e59=99999999999999,skuJson[_0x11bc("0x33")])_0x11bc("0x0")!==typeof skuJson["skus"][_0x2def73]&&skuJson[_0x11bc("0x33")][_0x2def73][_0x11bc("0x35")]&&skuJson[_0x11bc("0x33")][_0x2def73]["bestPrice"]<_0x636e59&&(_0x636e59=skuJson[_0x11bc("0x33")][_0x2def73]["bestPrice"],_0x58ae37=skuJson[_0x11bc("0x33")][_0x2def73])}_0x2def73=_0x14a7c7[_0x11bc("0x36")](_0x128dd4);var _0x7c43e=parseFloat(_0x2def73,10);if(isNaN(_0x7c43e))return _0x42ca27(["O valor informado p/ o desconto não é um número.",_0x128dd4],_0x11bc("0x7"));var _0x5856dd=function(_0x4323b9){_0x3826c1?_0x41862e=(_0x4323b9[_0x11bc("0x37")]||0)/100:(_0x34e142=_0x2a59db[_0x11bc("0x25")](_0x11bc("0x38")),_0x41862e=parseFloat((_0x34e142[_0x11bc("0x39")]()||"")[_0x11bc("0x3a")](/[^0-9\.,]+/i,"")[_0x11bc("0x3a")](".","")[_0x11bc("0x3a")](",","."),10));if(isNaN(_0x41862e))return _0x42ca27(["Por alguma razão não consegui obter o preço deste produto :(",_0x128dd4,_0x2a59db]);null!==_0x14a7c7[_0x11bc("0x3b")]&&(_0x48a930=0,isNaN(_0x14a7c7["appliedDiscount"])?(_0xd4bac=_0x2a59db["find"](_0x14a7c7[_0x11bc("0x3b")]),_0xd4bac[_0x11bc("0x28")]&&(_0x48a930=_0x14a7c7[_0x11bc("0x36")](_0xd4bac))):_0x48a930=_0x14a7c7[_0x11bc("0x3b")],_0x48a930=parseFloat(_0x48a930,10),isNaN(_0x48a930)&&(_0x48a930=0),0!==_0x48a930&&(_0x41862e=100*_0x41862e/(100-_0x48a930)));_0x5d654b=_0x3826c1?(_0x4323b9[_0x11bc("0x3c")]||0)/100:parseFloat((_0x2a59db[_0x11bc("0x25")](_0x11bc("0x3d"))["val"]()||"")[_0x11bc("0x3a")](/[^0-9\.,]+/i,"")["replace"](".","")[_0x11bc("0x3a")](",","."),10);isNaN(_0x5d654b)&&(_0x5d654b=.001);_0x1c52bc=(100-_0x7c43e)/100*_0x41862e;_0x3826c1&&_0x14a7c7[_0x11bc("0x1f")][_0x11bc("0x3e")]?(_0x108d55["text"](_0x108d55[_0x11bc("0xc")]()[_0x11bc("0x3f")]()[_0x11bc("0x3a")](/[0-9\.]+,[0-9]+/,qd_number_format(_0x1c52bc,2,",",".")))[_0x11bc("0x2e")]("qd-active"),_0x2a59db["addClass"]("qd-sp-active")):(_0x4d10a9=_0x2a59db[_0x11bc("0x25")](_0x11bc("0x40")),_0x4d10a9[_0x11bc("0xc")](_0x4d10a9["text"]()["replace"](/[0-9\.]+,[0-9]+/i,"")+qd_number_format(_0x1c52bc,2,",",".")));_0x3826c1&&(_0x59c2ff=_0x2a59db[_0x11bc("0x25")](_0x14a7c7[_0x11bc("0x1f")]["skuPrice"]),_0x59c2ff["length"]&&_0x59c2ff[_0x11bc("0xc")](_0x59c2ff[_0x11bc("0xc")]()[_0x11bc("0x3f")]()["replace"](/[0-9\.]+,[0-9]+/,qd_number_format(_0x1c52bc,2,",","."))));var _0x636e59=_0x2a59db[_0x11bc("0x25")](_0x11bc("0x41"));_0x636e59["text"](_0x636e59[_0x11bc("0xc")]()["replace"](/[0-9]+%/i,_0x7c43e+"%"));_0x636e59=function(_0x4c3db9,_0x661eaa,_0x5cf8c4){_0x4c3db9=_0x2a59db["find"](_0x4c3db9);_0x4c3db9[_0x11bc("0x28")]&&_0x4c3db9[_0x11bc("0x42")](_0x4c3db9["html"]()[_0x11bc("0x3f")]()[_0x11bc("0x3a")](/[0-9]{1,2}/,_0x5cf8c4?_0x5cf8c4:_0x4323b9[_0x11bc("0x43")]||0));_0x661eaa=_0x2a59db[_0x11bc("0x25")](_0x661eaa);_0x661eaa["length"]&&_0x661eaa["html"](_0x661eaa[_0x11bc("0x42")]()["trim"]()[_0x11bc("0x3a")](/[0-9\.]+,[0-9]+/,qd_number_format(_0x1c52bc/(_0x5cf8c4?_0x5cf8c4:_0x4323b9[_0x11bc("0x43")]||1),2,",",".")))};_0x3826c1&&_0x14a7c7[_0x11bc("0x1f")][_0x11bc("0x44")]?_0x636e59(_0x14a7c7[_0x11bc("0x1f")]["installments"],_0x14a7c7[_0x11bc("0x1f")][_0x11bc("0x45")]):_0x14a7c7[_0x11bc("0x44")]&&_0x636e59(_0x11bc("0x46"),_0x11bc("0x47"),parseInt(_0x2a59db[_0x11bc("0x25")](_0x11bc("0x48"))[_0x11bc("0x39")]()||1)||1);_0x2a59db[_0x11bc("0x25")](_0x11bc("0x49"))[_0x11bc("0x4a")](qd_number_format(_0x5d654b-_0x1c52bc,2,",","."));_0x2a59db[_0x11bc("0x25")](_0x11bc("0x4b"))[_0x11bc("0x4c")](qd_number_format(100*(_0x5d654b-_0x1c52bc)/_0x5d654b,2,",","."));_0x3826c1&&_0x14a7c7["productPage"]["changeNativeSaveAmount"]&&_0x2f80d1(_0x11bc("0x4d"))[_0x11bc("0x4e")](function(){_0x326ee4=_0x2f80d1(this);_0x326ee4[_0x11bc("0xc")](_0x326ee4[_0x11bc("0xc")]()[_0x11bc("0x3f")]()["replace"](/[0-9\.]+,[0-9]+/,qd_number_format(_0x5d654b-_0x1c52bc,2,",",".")));_0x326ee4[_0x11bc("0x2e")](_0x11bc("0x2a"))})};_0x5856dd(_0x58ae37);if(_0x3826c1)_0x2f80d1(window)["on"](_0x11bc("0x4f"),function(_0x115415,_0x2d29fb,_0x422772){_0x5856dd(_0x422772)});_0x2a59db[_0x11bc("0x2e")](_0x11bc("0x50"));_0x3826c1||_0x34e142["addClass"](_0x11bc("0x50"))}}}else _0x14a7c7[_0x11bc("0x1f")][_0x11bc("0x20")]&&_0x2a59db["is"](_0x14a7c7[_0x11bc("0x1f")][_0x11bc("0x22")])&&(_0x2a59db[_0x11bc("0x25")](_0x14a7c7[_0x11bc("0x1f")][_0x11bc("0x26")])["addClass"](_0x11bc("0x2a")),_0x2a59db[_0x11bc("0x2e")]("qd-sp-active"))};(_0x14a7c7["startedByWrapper"]?_0x2def73[_0x11bc("0x25")](_0x14a7c7[_0x11bc("0x51")]):_0x2def73)[_0x11bc("0x4e")](function(){_0x5d654b[_0x11bc("0x52")](this,!1)});if(_0x11bc("0x53")==typeof _0x14a7c7["forcePromotion"]){var _0x4ad50f=_0x14a7c7[_0x11bc("0x54")]?_0x2def73:_0x2def73[_0x11bc("0x21")](_0x14a7c7[_0x11bc("0x22")]);_0x4ad50f=_0x14a7c7[_0x11bc("0x1f")][_0x11bc("0x20")]?_0x4ad50f["closest"](_0x14a7c7[_0x11bc("0x1f")]["wrapperElement"])[_0x11bc("0x55")](".qd_sp_processedItem"):_0x4ad50f[_0x11bc("0x25")](_0x11bc("0x56"));_0x4ad50f["each"](function(){var _0x15cdaf=_0x2f80d1(_0x14a7c7[_0x11bc("0x57")]);_0x15cdaf[_0x11bc("0x32")](_0x11bc("0x58"),_0x11bc("0x59"));_0x14a7c7[_0x11bc("0x1f")][_0x11bc("0x20")]?_0x2f80d1(this)[_0x11bc("0x4a")](_0x15cdaf):_0x2f80d1(this)["after"](_0x15cdaf);_0x5d654b[_0x11bc("0x52")](_0x15cdaf,!0)})}};_0x2f80d1["fn"][_0x11bc("0x1")]=function(_0x2dc5b5){var _0x38bc2c=_0x2f80d1(this);if(!_0x38bc2c[_0x11bc("0x28")])return _0x38bc2c;_0x2dc5b5=_0x2f80d1["extend"](!0,{},_0x47b10e,_0x2dc5b5);"boolean"!=typeof _0x2dc5b5[_0x11bc("0x1f")][_0x11bc("0x20")]&&(_0x2dc5b5[_0x11bc("0x1f")][_0x11bc("0x20")]=_0x2f80d1(document[_0x11bc("0x5a")])["is"](_0x11bc("0x5b")));_0x56b4be(_0x38bc2c,_0x2dc5b5);return _0x38bc2c}}})(this);(function(x){var d=jQuery;if("function"!==typeof d.fn.QD_smartQuantity){var g=function(d,a){if("object"===typeof console&&"function"===typeof console.error&&"function"===typeof console.info&&"function"===typeof console.warn){var f;"object"===typeof d?(d.unshift("[Quatro Digital - Smart Quantity]\n"),f=d):f=["[Quatro Digital - Smart Quantity]\n"+d];if("undefined"===typeof a||"alerta"!==a.toLowerCase()&&"aviso"!==a.toLowerCase())if("undefined"!==typeof a&&"info"===a.toLowerCase())try{console.info.apply(console,f)}catch(k){console.info(f.join("\n"))}else try{console.error.apply(console,f)}catch(k){console.error(f.join("\n"))}else try{console.warn.apply(console,f)}catch(k){console.warn(f.join("\n"))}}},m={buyButton:".buy-button",qttInput:".qd-sq-quantity",btnMore:".qd-sq-more",btnMinus:".qd-sq-minus",initialValue:1,minimumValue:1,minToBuy:null,setQuantityByUrl:!0},n=function(q,a){function f(c,e,b){a.setQuantityByUrl?c.val(((location.search||"").match(r)||[a.initialValue]).pop()):c.val(a.initialValue);c.change(function(c,b){try{if("qd_ssl_trigger"!=b){var e=d(this),h=parseInt(e.val().replace(u,""));var f=!isNaN(h)&&h>a.minimumValue?h:a.minimumValue;null!=a.minToBuy&&f<a.minToBuy&&f!=a.minimumValue&&(f=a.minToBuy,"qd_ssl_trigger_less"==b&&(f=0));e.val(f);e.trigger("QuatroDigital.sq_change",this)}}catch(v){g(v.message)}});c.focusin(function(){d(this).trigger("QuatroDigital.sq_focusin",this)});e.click(function(b){b.preventDefault();c.val((parseInt(c.val())||a.minimumValue)+1).change()});b.click(function(b){b.preventDefault();b=(parseInt(c.val())||a.minimumValue+1)-1;null!=a.minToBuy&&b<a.minToBuy&&(b=0);c.val(b).change()});c.change()}function k(c,e,b){c.on("QuatroDigital.sq_change",function(){(d(this).val()||0)<=a.minimumValue?(b.addClass("qd-sq-inactive"),e.removeClass("qd-sq-inactive")):(e.addClass("qd-sq-inactive"),b.removeClass("qd-sq-inactive"))})}function m(c){c.one("QuatroDigital.sq_qtt_min_change",function(c,b){a.minToBuy=b;d(this).change()})}function n(c,e){c.on("QuatroDigital.sq_change",function(){try{if(!(e[0].hostname||"").length)return g("A quantidade não foi inserida no bt comprar pois o mesmo não possui uma URL","info");var b=e[0].search||"";-1<b.toLowerCase().indexOf("qty=")?e[0].search=b.replace(p,"qty="+(parseInt(c.val())||("number"==typeof a.minimumValue?a.minimumValue:1))+"&"):e[0].search="qty="+(parseInt(c.val())||("number"==typeof a.minimumValue?a.minimumValue:1))+"&"+(e[0].search||"").replace(p,"");e.not(":first").each(function(){this.href=e[0].href});var d=((e.first().attr("href")||"").match(w)||[""]).pop()+"";c.attr("data-sku-id",d);if(d.length&&"object"===typeof skuJson&&!c.attr("data-sku-price"))for(b=0;b<skuJson.skus.length;b++)skuJson.skus[b].sku==d&&c.attr("data-sku-price",skuJson.skus[b].bestPrice)}catch(l){g(l.message)}})}var u=/[^0-9-]/gi,r=/qty=([0-9]+)/i,w=/sku=([0-9]+)/i,p=/qty=[0-9]+&?/gi;q.each(function(){try{var c=d(this),e=c.find(a.buyButton),b=c.find(a.qttInput),h=c.find(a.btnMore),l=c.find(a.btnMinus);if(!e.length&&null!==a.buyButton||!b.length)return g("O plugin parou por aqui! Não foram encontrados o botão comprar e o campo de quantidade","alerta");if(b.is(".qd-sq-on"))return g(["Execução ignorada pois este input já possui o plugin aplicado. Input: ",b],"info");b.addClass("qd-sq-on");k(b,h,l);m(b);null!==a.buyButton&&n(b,e);f(b,h,l);d(window).on("vtex.sku.selected",function(){b.change()})}catch(t){g(t.message)}})};d.fn.QD_smartQuantity=function(g){var a=d(this);a.qdPlugin=new n(a,d.extend({},m,g));d(window).trigger("QuatroDigital.sq_callback");return a};d(function(){d(".qd_auto_smart_quantity").QD_smartQuantity()})}})(this);(function($){$("a").attr("target","_parent");$(".shelf-qd-v1").each(function(){$(this).find(".buy-button-normal a").attr("href",$(this).find(".shelf-qd-v1-image-wrapper-link").attr("href"))});var imgWidth=300;var imgHeight=300;var imgRegex=new RegExp("(ids/[0-9]+-)[0-9-]+","i");$(".prateleira").find(".qd_sil_img_wrapper").not(".qd-sil-on").find("img:visible").each(function(){var $t=$(this);var img=$t.clone();img.on("load",function(){$(this).addClass("qd-sil-image-loaded")});img.attr({src:img[0].src.replace(imgRegex,"$1"+imgWidth+"-"+imgHeight),width:imgWidth,height:imgHeight});img.addClass("qd-sil-image").insertAfter($t);img.addClass("qd-sil-image-loaded");img.closest(".qd_sil_img_wrapper").addClass("qd-sil-on")});var applyCarouselShelf=function(){if(!$.fn.slick)return;var wrapper=$(".prateleira").not(".slick-initialized");wrapper.slick({slidesToShow:4,slidesToScroll:4,infinite:true,draggable:false,speed:700,responsive:[{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3}},{breakpoint:991,settings:{slidesToShow:2,slidesToScroll:2}},{breakpoint:550,settings:{slidesToShow:1,slidesToScroll:1}}]})};var smartQuantityShelf=function(){$(".shelf-qd-v1:not(.qd-sq-on)").addClass("qd-sq-on").QD_smartQuantity({buyButton:".buy-button-normal a",setQuantityByUrl:false})};var applySmartPrice=function(){var wrapper=$("li[layout]");wrapper.find(".shelf-qd-v1:not(.qd-sp-on)").find(".shelf-qd-v1-price a > .col-md-9").append('<span class="qd-sp-wrap"> <p class="qd_displayPrice shelf-qd-v1-sp-best-price">R$ </p> <span> no boleto</span> </span>');$(".shelf-qd-v1").addClass("qd-sp-on");wrapper.find(".flag").QD_SmartPrice({filterFlagBy:"[class*='boleto']",wrapperElement:wrapper,productPage:{isProductPage:false}})};var saveAmountFix=function(){$(".shelf-qd-v1-highlight-discount-percentage:not(.qd-on)").addClass("qd-on").each(function(){var $t=$(this);$t.text(($t.text().trim().match(/[0-9]+/)||[""]).pop()+"% off")})};applyCarouselShelf();smartQuantityShelf();applySmartPrice();saveAmountFix();$(document).on("ajaxStop",function(){smartQuantityShelf();applySmartPrice()})})(jQuery);(function($){"use strict";function resetIframeSize(useBody){window.parent.postMessage("qd-iframe-cdn|"+($(useBody?document.body:document).height()+5),"*")}$(function(){resetIframeSize(false)});$(window).on("load",function(){resetIframeSize(false)});$(window).scroll(function(){resetIframeSize(false)});$(window).on("QD_manualIframeAdjust",function(e,useBody){resetIframeSize(useBody||false)});$(document).ajaxComplete(function(){resetIframeSize(false)});$(document).ajaxStart(function(){resetIframeSize(false)});var lastWindowSize=$(window).width();var timeout=0;$(window).resize(function(){clearTimeout(timeout);timeout=setTimeout(function(){if(lastWindowSize!=$(window).width()){resetIframeSize(true);lastWindowSize=$(window).width()}},20)})})(jQuery);(function($){$(function(){$("a[href^='#']").click(function(){window.parent.postMessage("qd-iframe-scroll|"+($($(this).attr("href")).first().offset()||{top:0}).top,"*")})})})(jQuery);