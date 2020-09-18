/* MEWTWO - 18/09/2020 10:58:39 GMT */
"use strict";function _typeof(obj){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj}}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj}}return _typeof(obj)}(function(){try{var LFGHome={init:function init(){LFGHome.bringPostsLFG();LFGHome.applyCarrousselBanners();LFGHome.applyValidateNewsletter()},bringPostsLFG:function bringPostsLFG(){var wrapper=$(".mz-iterations__blog--wrapper, .mz-blog__wrapper");$.ajax({type:"GET",method:"GET",url:"https://www.lfg.com.br/api/rest/aesa/acontece/post?limit=8",headers:{"Content-Type":"application/json;charset=utf-8",Authorization:'OAuth oauth_consumer_key="372876fcbb76d2ffa4297f7ff9cdc6a8",oauth_token="a11b121e84ce790ce867eb0d5ec3bfe1",oauth_signature_method="PLAINTEXT",oauth_timestamp="1564059147",oauth_nonce="ejeb5",oauth_version="1.0",oauth_signature="8fdcac0acbcff71dac01da7e97a1f5c9%2676c5831c3034235a89d9c49b6e6d071b"'}}).done(function(response){var listLFGblog=response;var block;var logoDefault="https://portalpos2.vteximg.com.br/arquivos/portalpos2.boas-vindas-company-9.png";listLFGblog.forEach(function(post){block='\n                            <div class="mz-blog__block mz-blog__block-integrated">\n                                <a href="'.concat(post.url,'" style="display: block;" target="_blank">\n                                    ').concat(!post.image||post.image=="https://www.lfg.com.br/media/"?'<div class="mz-blog__block--image lfg"><img src="'.concat(logoDefault,'" /></div>'):'<div class="mz-blog__block--image">\n                                            <img src="'.concat(post.image,'" />\n                                        </div>'),'\n                                    <div class="mz-blog__block--text">\n                                        <div class="mz-blog__block--text-title lfg">').concat(post.title,'</div>\n                                        <div class="mz-blog__block--text-date lfg">\n                                            <i class="fas fa-arrow-right"></i>\n                                        </div>\n                                    </div>\n                                </a>\n                            </div>\n                        ');wrapper.append(block);wrapper.addClass("mz-blog-on")})}).fail(function(){console.error("[LFG] Erro ao buscar posts do Blog!");$(".mz-blogbrand").hide();$(".mz-iterations__blog").hide()})},buildElementPost:function buildElementPost(itemInfo,itemComp){var wrapper=$(".mz-iterations__blog--wrapper, .mz-blog__wrapper");var urlPost=itemInfo.link;var namePost=itemInfo.title.rendered;var datePost=moment?moment(itemInfo.date).format("LL"):itemInfo.date;var flag=itemComp.name;var link=itemComp.link;var flagColor=itemComp.slug;var srcImage;$.ajax({async:true,type:"GET",method:"GET",url:"https://blog.portalpos.com.br/wp-json/wp/v2/media/".concat(itemInfo.featured_media,"?per_page=10")}).done(function(response){srcImage="https://blog.portalpos.com.br/".concat(response.media_details.sizes.thumbnail.source_url);var block='\n                        <div class="mz-blog__block mz-blog__block-integrated">\n                            <a href="'.concat(urlPost,'" style="display: block;" target="_blank" title="').concat(namePost,'">\n                                <div class="mz-blog__block--image">\n                                    <img src="').concat(srcImage,'" />\n                                </div>\n                                <div class="mz-blog__block--text">\n                                    <div class="mz-blog__block--text-flag ').concat(Home.getCategoryClass(flagColor),'">').concat(flag,'</div>\n                                    <div class="mz-blog__block--text-title">').concat(namePost,'</div>\n                                    <div class="mz-blog__block--text-date">\n                                        <span>').concat(datePost,'</span>\n                                        <i class="fas fa-arrow-right"></i>\n                                    </div>\n                                </div>\n                            </a>\n                        </div>\n                    ');wrapper.append(block);wrapper.addClass("mz-blog-on");$(".mz-iterations__blog").addClass("mz-new-layout")})},getCategoryClass:function getCategoryClass(category){switch(category){case"carreiras-e-mercado":return"orange";case"crescimento-pessoal":return"light-green";case"curiosidades":return"purple";case"tendencias-inovacao":return"green";case"voce-na-pos":return"blue";default:return""}},applyCarrousselBanners:function applyCarrousselBanners(){var wrapper=$(".mz-banners__wrapper.desktop, .mz-banners__wrapper.mobile, .mz-bgnanner .desktop, .mz-bgnanner .mobile");if(!wrapper.children().length){return}$(".mz-shelf").find("h2").appendTo($(".mz-shelf__title"));wrapper.slick({prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-arrow-left"></i></button>',nextArrow:'<button type="button" class="slick-next"><i class="fas fa-arrow-right"></i></button>',slidesToShow:1,slidesToScroll:1,infinite:true,dots:true,arrows:true,speed:700});wrapper.each(function(){$(this).find(".slick-arrow").wrapAll('<div class="slick-nav" />')})},applyValidateNewsletter:function applyValidateNewsletter(){var formNewsletter=$(".mz-newsletter form");formNewsletter.on("submit",function(event){event.preventDefault();event.stopPropagation();formNewsletter.addClass("was-validated");if(formNewsletter[0].checkValidity()){var dataJson=formNewsletter.serializeObject();LFGHome.sendDataToMD(dataJson)}if($('.form-textsfields input[name="nome"]').val()==""||$('.form-textsfields input[name="email"]').val()==""){$(".invalid-feedback").show()}return false})},sendDataToMD:function sendDataToMD(dataJson){dataJson=JSON.stringify(dataJson);try{$.ajax({headers:{Accept:"application/vnd.vtex.ds.v10+json","Content-Type":"application/json; charset=utf-8"},url:"https://www.portalpos.com.br/api/dataentities/newsletter/documents?_schema=mz-body",type:"POST",dataType:"json",contentType:"application/json",data:dataJson}).done(function(data){swal({title:"Dados cadastrados!",icon:"success"}).then(function(){location.reload()})}).fail(function(){swal({title:"Falha no envio.",text:"Erro ao dispar os dados, tente novamente mais tarde.",icon:"error"})})}catch(e){console.log("Erro no envio de dados do form. ",e)}}};LFGHome.init()}catch(e){console.log("Erro na instancia [LFGHome]: ",e)}})();!function(a){a.extend(a.fn,{validate:function validate(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function valid(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function removeAttrs(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function rules(b,c){var d,e,f,g,h,i,j=this[0];if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function blank(b){return!a.trim(""+a(b).val())},filled:function filled(b){return!!a.trim(""+a(b).val())},unchecked:function unchecked(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function onfocusin(a){this.lastActive=a,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(a)).hide())},onfocusout:function onfocusout(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function onkeyup(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},onclick:function onclick(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function highlight(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function unhighlight(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function setDefaults(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function init(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",b).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function form(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function checkForm(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++){this.check(b[a])}return this.valid()},element:function element(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return this.lastElement=d,void 0===d?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),e=this.check(d)!==!1,e?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function showErrors(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b){this.errorList.push({message:b[c],element:this.findByName(c)[0]})}this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function resetForm(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function numberOfInvalids(){return this.objectLength(this.invalid)},objectLength:function objectLength(a){var b,c=0;for(b in a){c++}return c},hideErrors:function hideErrors(){this.addWrapper(this.toHide).hide()},valid:function valid(){return 0===this.size()},size:function size(){return this.errorList.length},focusInvalid:function focusInvalid(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function findLastActive(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function elements(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},clean:function clean(b){return a(b)[0]},errors:function errors(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function reset(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function prepareForm(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function prepareElement(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function elementValue(b){var c,d=a(b),e=d.attr("type");return"radio"===e||"checkbox"===e?a("input[name='"+d.attr("name")+"']:checked").val():(c=d.val(),"string"==typeof c?c.replace(/\r/g,""):c)},check:function check(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if(c=a.validator.methods[d].call(this,i,b,e.parameters),"dependency-mismatch"===c&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function customDataMessage(b,c){return a(b).data("msg"+c[0].toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function customMessage(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function findDefined(){for(var a=0;a<arguments.length;a++){if(void 0!==arguments[a])return arguments[a]}return void 0},defaultMessage:function defaultMessage(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function formatAndAdd(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function addWrapper(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function defaultShowErrors(){var a,b,c;for(a=0;this.errorList[a];a++){c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++){this.showLabel(this.successList[a])}if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++){this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass)}this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function validElements(){return this.currentElements.not(this.invalidElements())},invalidElements:function invalidElements(){return a(this.errorList).map(function(){return this.element})},showLabel:function showLabel(b,c){var d=this.errorsFor(b);d.length?(d.removeClass(this.settings.validClass).addClass(this.settings.errorClass),d.html(c)):(d=a("<"+this.settings.errorElement+">").attr("for",this.idOrName(b)).addClass(this.settings.errorClass).html(c||""),this.settings.wrapper&&(d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b))),!c&&this.settings.success&&(d.text(""),"string"==typeof this.settings.success?d.addClass(this.settings.success):this.settings.success(d,b)),this.toShow=this.toShow.add(d)},errorsFor:function errorsFor(b){var c=this.idOrName(b);return this.errors().filter(function(){return a(this).attr("for")===c})},idOrName:function idOrName(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function validationTargetFor(a){return this.checkable(a)&&(a=this.findByName(a.name).not(this.settings.ignore)[0]),a},checkable:function checkable(a){return/radio|checkbox/i.test(a.type)},findByName:function findByName(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function getLength(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function depend(a,b){return this.dependTypes[_typeof(a)]?this.dependTypes[_typeof(a)](a,b):!0},dependTypes:{boolean:function boolean(a){return a},string:function string(b,c){return!!a(b,c.form).length},function:function _function(a,b){return a(b)}},optional:function optional(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function startRequest(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function stopRequest(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function previousValue(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function addClassRules(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function classRules(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function attributeRules(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods){"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0)}return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function dataRules(b){var c,d,e={},f=a(b);for(c in a.validator.methods){d=f.data("rule"+c[0].toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d)}return e},staticRules:function staticRules(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function normalizeRules(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(_typeof(e.depends)){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(b.min&&b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),b.minlength&&b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function normalizeRule(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function addMethod(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function required(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},email:function email(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function url(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function date(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function dateISO(a,b){return this.optional(b)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)},number:function number(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function digits(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function creditcard(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if(a=a.replace(/\D/g,""),a.length<13||a.length>19)return!1;for(c=a.length-1;c>=0;c--){d=a.charAt(c),f=parseInt(d,10),g&&(f*=2)>9&&(f-=9),e+=f,g=!g}return e%10===0},minlength:function minlength(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d},maxlength:function maxlength(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||d>=e},rangelength:function rangelength(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function min(a,b,c){return this.optional(b)||a>=c},max:function max(a,b,c){return this.optional(b)||c>=a},range:function range(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function equalTo(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function remote(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d&&{url:d}||d,g.old===b?g.valid:(g.old=b,e=this,this.startRequest(c),f={},f[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function success(d){var f,h,i,j=d===!0||"true"===d;e.settings.messages[c.name].remote=g.originalMessage,j?(i=e.formSubmitted,e.prepareElement(c),e.formSubmitted=i,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=d||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."}}(jQuery),function(a){var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})}(jQuery),function(a){a.extend(a.fn,{validateDelegate:function validateDelegate(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})}(jQuery);$.validator.addMethod("cpf",function(value,element){function valida_cpf(cpf){if(cpf.length<11)return false;var numeros,digitos,soma,i,resultado;numeros=cpf.substring(0,9);digitos=cpf.substring(9);soma=0;for(i=10;i>1;i--){soma+=numeros.charAt(10-i)*i}resultado=soma%11<2?0:11-soma%11;if(resultado!=digitos.charAt(0))return false;numeros=cpf.substring(0,10);soma=0;for(i=11;i>1;i--){soma+=numeros.charAt(11-i)*i}resultado=soma%11<2?0:11-soma%11;if(resultado!=digitos.charAt(1))return false;return true}return valida_cpf(value.replace(/[^0-9]/gi,""))},"Informe um CPF válido.");!function(e){function n(e){var n=e.value||"";return n.length||(n=null),n}e.fn.serializeObject=function(){"use strict";var a={},t=function t(_t,i){var o=a[i.name];"undefined"!=typeof o&&null!==o?e.isArray(o)?o.push(n(i)):a[i.name]=[o,n(i)]:a[i.name]=n(i)};return e.each(this.serializeArray(),t),a}}(jQuery);