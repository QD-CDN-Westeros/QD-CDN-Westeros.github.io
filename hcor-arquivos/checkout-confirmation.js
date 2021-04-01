/* MacBook-Pro-de-erick.local - 01/04/2021 12:10:29 GMT */
"use strict";!function(g){"function"==typeof define&&define.amd?define(["jquery"],g):g(window.jQuery||window.Zepto)}(function(g){function z(b,f,d){var x,y,l=this;b=g(b),f="function"==typeof f?f(b.val(),void 0,b,d):f,l.init=function(){d=d||{},l.byPassKeys=[9,16,17,18,36,37,38,39,40,91],l.translation={0:{pattern:/\d/},9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}},l.translation=g.extend({},l.translation,d.translation),l=g.extend(!0,{},l,d),y=c.getRegexMask(),b.each(function(){!1!==d.maxlength&&b.attr("maxlength",f.length),d.placeholder&&b.attr("placeholder",d.placeholder),b.attr("autocomplete","off"),c.destroyEvents(),c.events();var a=c.getCaret();c.val(c.getMasked()),c.setCaret(a+c.getMaskCharactersBeforeCount(a,!0))})};var c={getCaret:function(){var a=0,e=b.get(0),c=document.selection,e=e.selectionStart;return c&&!~navigator.appVersion.indexOf("MSIE 10")?((a=c.createRange()).moveStart("character",b.is("input")?-b.val().length:-b.text().length),a=a.text.length):!e&&"0"!==e||(a=e),a},setCaret:function(a){var e;b.is(":focus")&&((e=b.get(0)).setSelectionRange?e.setSelectionRange(a,a):e.createTextRange&&((e=e.createTextRange()).collapse(!0),e.moveEnd("character",a),e.moveStart("character",a),e.select()))},events:function(){b.on("keydown.mask",function(){x=c.val()}),b.on("keyup.mask",c.behaviour),b.on("paste.mask drop.mask",function(){setTimeout(function(){b.keydown().keyup()},100)}),b.on("change.mask",function(){b.data("changeCalled",!0)}),b.on("blur.mask",function(a){(a=g(a.target)).prop("defaultValue")!==a.val()&&(a.prop("defaultValue",a.val()),a.data("changeCalled")||a.trigger("change")),a.data("changeCalled",!1)}),b.on("focusout.mask",function(){d.clearIfNotMatch&&!y.test(c.val())&&c.val("")})},getRegexMask:function(){var e,b,c,d,k,a=[];for(k in f)(e=l.translation[f[k]])?(b=e.pattern.toString().replace(/.{1}$|^.{1}/g,""),c=e.optional,(e=e.recursive)?(a.push(f[k]),d={digit:f[k],pattern:b}):a.push(c||e?b+"?":b)):a.push("\\"+f[k]);return a=a.join(""),d&&(a=a.replace(RegExp("("+d.digit+"(.*"+d.digit+")?)"),"($1)?").replace(RegExp(d.digit,"g"),d.pattern)),RegExp(a)},destroyEvents:function(){b.off("keydown.mask keyup.mask paste.mask drop.mask change.mask blur.mask focusout.mask").removeData("changeCalled")},val:function(a){var e=b.is("input");return 0<arguments.length?e?b.val(a):b.text(a):e?b.val():b.text()},getMaskCharactersBeforeCount:function(a,e){for(var b=0,c=0,d=f.length;c<d&&c<a;c++)l.translation[f.charAt(c)]||(a=e?a+1:a,b++);return b},determineCaretPos:function(a,b,d,h){return l.translation[f.charAt(Math.min(a-1,f.length-1))]?Math.min(a+d-b-h,d):c.determineCaretPos(a+1,b,d,h)},behaviour:function(a){var b=(a=a||window.event).keyCode||a.which;if(-1===g.inArray(b,l.byPassKeys)){var d=c.getCaret(),f=c.val(),n=f.length,k=d<n,p=c.getMasked(),m=p.length,q=c.getMaskCharactersBeforeCount(m-1)-c.getMaskCharactersBeforeCount(n-1);return p!==f&&c.val(p),!k||65===b&&a.ctrlKey||(8!==b&&46!==b&&(d=c.determineCaretPos(d,n,m,q)),c.setCaret(d)),c.callbacks(a)}},getMasked:function(a){for(var r,b=[],g=c.val(),h=0,n=f.length,k=0,p=g.length,m=1,q="push",s=-1,u=d.reverse?(q="unshift",m=-1,r=0,h=n-1,k=p-1,function(){return-1<h&&-1<k}):(r=n-1,function(){return h<n&&k<p});u();){var v=f.charAt(h),w=g.charAt(k),t=l.translation[v];t?(w.match(t.pattern)?(b[q](w),t.recursive&&(-1===s?s=h:h===r&&(h=s-m),r===s&&(h-=m)),h+=m):t.optional&&(h+=m,k-=m),k+=m):(a||b[q](v),w===v&&(k+=m),h+=m)}return a=f.charAt(r),n!==p+1||l.translation[a]||b.push(a),b.join("")},callbacks:function(a){var e=c.val(),g=c.val()!==x;!0==g&&"function"==typeof d.onChange&&d.onChange(e,a,b,d),!0==g&&"function"==typeof d.onKeyPress&&d.onKeyPress(e,a,b,d),"function"==typeof d.onComplete&&e.length===f.length&&d.onComplete(e,a,b,d)}};l.remove=function(){var a=c.getCaret(),b=c.getMaskCharactersBeforeCount(a);c.destroyEvents(),c.val(l.getCleanVal()).removeAttr("maxlength"),c.setCaret(a-b)},l.getCleanVal=function(){return c.getMasked(!0)},l.init()}g.fn.mask=function(b,f){return this.unmask(),this.each(function(){g(this).data("mask",new z(this,b,f))})},g.fn.unmask=function(){return this.each(function(){try{g(this).data("mask").remove()}catch(b){}})},g.fn.cleanVal=function(){return g(this).data("mask").getCleanVal()},g("*[data-mask]").each(function(){var b=g(this),f={};"true"===b.attr("data-mask-reverse")&&(f.reverse=!0),"false"===b.attr("data-mask-maxlength")&&(f.maxlength=!1),"true"===b.attr("data-mask-clearifnotmatch")&&(f.clearIfNotMatch=!0),b.mask(b.attr("data-mask"),f)})}),function(a){a.extend(a.fn,{validate:function(b){if(this.length){var c=a.data(this[0],"validator");return c||(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(b.target).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d;return!c.settings.submitHandler||(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),!1)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?!(c.formSubmitted=!0):d():(c.focusInvalid(),!1)})),c)}b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing.")},valid:function(){var b,c;return a(this[0]).is("form")?b=this.validate().form():(b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b})),b},removeAttrs:function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},rules:function(g,c){var d,e,f,h,i,j=this[0];if(g)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),g){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(b,c){i[c]=f[c],delete f[c],"required"===c&&a(j).removeAttr("aria-required")}),i):(delete e[j.name],f)}return(g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j)).required&&(h=g.required,delete g.required,g=a.extend({required:h},g),a(j).attr("aria-required","true")),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}),a.extend(a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){return!!a.trim(""+a(b).val())},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:((c=2<arguments.length&&c.constructor!==Array?a.makeArray(arguments).slice(1):c).constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(a)).hide())},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(a,b){9===b.which&&""===this.elementValue(a)||!(a.name in this.submitted||a===this.lastElement)||this.element(a)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){("radio"===b.type?this.findByName(b.name):a(b)).addClass(c).removeClass(d)},unhighlight:function(b,c,d){("radio"===b.type?this.findByName(b.name):a(b)).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!this.is(e.ignore)&&e[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",b).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c=this.clean(b),d=this.validationTargetFor(c),e=!0;return void 0===(this.lastElement=d)?delete this.invalid[c.name]:(this.prepareElement(d),this.currentElements=a(d),(e=!1!==this.check(d))?delete this.invalid[d.name]:this.invalid[d.name]=!0),a(b).attr("aria-invalid",!e),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),e},showErrors:function(b){if(b){for(var c in a.extend(this.errorMap,b),this.errorList=[],b)this.errorList.push({message:b[c],element:this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)c++;return c},hideErrors:function(){this.addWrapper(this.toHide).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),!(this.name in c||!b.objectLength(a(this).rules()))&&(c[this.name]=!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(e){var c=a(e),e=c.attr("type");return"radio"===e||"checkbox"===e?a("input[name='"+c.attr("name")+"']:checked").val():"string"==typeof(c=c.val())?c.replace(/\r/g,""):c},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f=a(b).rules(),g=a.map(f,function(a,b){return b}).length,h=!1,i=this.elementValue(b);for(d in f){e={method:d,parameters:f[d]};try{if("dependency-mismatch"===(c=a.validator.methods[d].call(this,i,b,e.parameters))&&1===g){h=!0;continue}if(h=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(j){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",j),j}}if(!h)return this.objectLength(f)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c[0].toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(c,b){c=this.settings.messages[c];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},formatAndAdd:function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({message:d,element:b,method:c.method}),this.errorMap[b.name]=d,this.submitted[b.name]=d},addWrapper:function(a){return a=this.settings.wrapper?a.add(a.parent(this.settings.wrapper)):a},defaultShowErrors:function(){for(var b,c,a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d=this.errorsFor(b);d.length?(d.removeClass(this.settings.validClass).addClass(this.settings.errorClass),d.html(c)):(d=a("<"+this.settings.errorElement+">").attr("for",this.idOrName(b)).addClass(this.settings.errorClass).html(c||""),this.settings.wrapper&&(d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b))),!c&&this.settings.success&&(d.text(""),"string"==typeof this.settings.success?d.addClass(this.settings.success):this.settings.success(d,b)),this.toShow=this.toShow.add(d)},errorsFor:function(b){var c=this.idOrName(b);return this.errors().filter(function(){return a(this).attr("for")===c})},idOrName:function(a){return this.groups[a.name]||!this.checkable(a)&&a.id||a.name},validationTargetFor:function(a){return a=this.checkable(a)?this.findByName(a.name).not(this.settings.ignore)[0]:a},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+b+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{boolean:function(a){return a},string:function(b,c){return!!a(b,c.form).length},function:function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(d){var c={},d=a(d).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d="required"===c?(d=b.getAttribute(c),""===d&&(d=!0),!!d):f.attr(c),/min|max/.test(c)&&(null===g||/number|range|text/.test(g))&&(d=Number(d)),d||0===d?e[c]=d:g===c&&"range"!==g&&(e[c]=!0);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule"+c[0].toUpperCase()+c.substring(1).toLowerCase()),void 0!==d&&(e[c]=d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return c=d.settings.rules?a.validator.normalizeRule(d.settings.rules[b.name])||{}:c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(!1!==e){if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:delete b[d]}}else delete b[d]}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(b.min&&b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),b.minlength&&b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){var c;return"string"==typeof b&&(c={},a.each(b.split(/\s/),function(){c[this]=!0}),b=c),b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,e,d){if(!this.depend(d,e))return"dependency-mismatch";if("select"!==e.nodeName.toLowerCase())return this.checkable(e)?0<this.getLength(b,e):0<a.trim(b).length;e=a(e).val();return e&&0<e.length},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)},number:function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},creditcard:function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c,d,e=0,f=0,g=!1;if((a=a.replace(/\D/g,"")).length<13||19<a.length)return!1;for(c=a.length-1;0<=c;c--)d=a.charAt(c),f=parseInt(d,10),g&&9<(f*=2)&&(f-=9),e+=f,g=!g;return e%10==0},minlength:function(e,c,d){e=a.isArray(e)?e.length:this.getLength(a.trim(e),c);return this.optional(c)||d<=e},maxlength:function(e,c,d){e=a.isArray(e)?e.length:this.getLength(a.trim(e),c);return this.optional(c)||e<=d},rangelength:function(e,c,d){e=a.isArray(e)?e.length:this.getLength(a.trim(e),c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||c<=a},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},equalTo:function(b,c,e){e=a(e);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e,f,g=this.previousValue(c);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),g.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=g.message,d="string"==typeof d?{url:d}:d,g.old===b?g.valid:(g.old=b,(e=this).startRequest(c),(f={})[c.name]=b,a.ajax(a.extend(!0,{url:d,mode:"abort",port:"validate"+c.name,dataType:"json",data:f,context:e.currentForm,success:function(h){var f,j=!0===h||"true"===h;e.settings.messages[c.name].remote=g.originalMessage,j?(f=e.formSubmitted,e.prepareElement(c),e.formSubmitted=f,e.successList.push(c),delete e.invalid[c.name],e.showErrors()):(f={},h=h||e.defaultMessage(c,"remote"),f[c.name]=g.message=a.isFunction(h)?h(b):h,e.invalid[c.name]=!0,e.showErrors(f)),g.valid=j,e.stopRequest(c,j)}},d)),"pending")}}}),a.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."}}(jQuery),function(a){var b,c={};a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(f){var e=("mode"in f?f:a.ajaxSettings).mode,f=("port"in f?f:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)})}(jQuery),function(a){a.extend(a.fn,{validateDelegate:function(b,c,d){return this.bind(c,function(e){e=a(e.target);return e.is(b)?d.apply(e,arguments):void 0})}})}(jQuery),$.validator.addMethod("cpf",function(value,element){return function(cpf){if(cpf.length<11)return!1;for(var numeros=cpf.substring(0,9),digitos=cpf.substring(9),soma=0,i=10;1<i;i--)soma+=numeros.charAt(10-i)*i;if((soma%11<2?0:11-soma%11)!=digitos.charAt(0))return!1;for(numeros=cpf.substring(0,10),soma=0,i=11;1<i;i--)soma+=numeros.charAt(11-i)*i;return(soma%11<2?0:11-soma%11)==digitos.charAt(1)}(value.replace(/[^0-9]/gi,""))},"Informe um CPF válido."),function(e){function n(n){n=n.value||"";return n=!n.length?null:n}e.fn.serializeObject=function(){var a={};return e.each(this.serializeArray(),function(t,i){var o=a[i.name];null!=o?e.isArray(o)?o.push(n(i)):a[i.name]=[o,n(i)]:a[i.name]=n(i)}),a}}(jQuery);var CheckoutConfirmation={init:function(){this.__wrapperForm()},__wrapperForm:function(){$("#app-top, #checkout-confirmation-top").wrapAll('<div class="mz-wrapper"></div>')}};$(document).ready(function(){CheckoutConfirmation.init()});