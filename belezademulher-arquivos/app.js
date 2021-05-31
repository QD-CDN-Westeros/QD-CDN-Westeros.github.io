/******/ (function (modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for (; i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
                /******/
            }
/******/ 			installedChunks[chunkId] = 0;
            /******/
        }
/******/ 		for (moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
                /******/
            }
            /******/
        }
/******/ 		if (parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while (resolves.length) {
/******/ 			resolves.shift()();
            /******/
        }
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
        /******/
    };
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for (var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for (var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if (installedChunks[depId] !== 0) fulfilled = false;
                /******/
            }
/******/ 			if (fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
                /******/
            }
            /******/
        }
/******/
/******/ 		return result;
        /******/
    }
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		"app": 0
        /******/
    }
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
        /******/
    };
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId] || chunkId) + ".js"
        /******/
    }
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
            /******/
        }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
            /******/
        };
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
    }
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = { "0": 1, "3": 1, "5": 1, "8": 1, "9": 1, "11": 1, "12": 1 };


/******/ 		if (installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if (installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function (resolve, reject) {
/******/ 				var href = "https://belezademulher.vteximg.com.br/arquivos/" + ({}[chunkId] || chunkId) + ".css";
/******/ 				var fullhref = href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");

/******/ 				for (var i = 0; i < existingLinkTags.length; i++) {

/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if (tag.rel === "preload" && (dataHref === href || dataHref === fullhref)) return resolve();
            /******/
        }
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for (var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if (dataHref === href || dataHref === fullhref) return resolve();
            /******/
        }
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "preload";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function (event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
            /******/
        };
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
        /******/
    }).then(function () {

/******/ 				installedCssChunks[chunkId] = 0;
        /******/
    }));
            /******/
        }
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if (installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if (installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
                /******/
            } else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function (resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
                /******/
            });
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
                    /******/
                }
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if (chunk !== 0) {
/******/ 						if (chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
                            /******/
                        }
/******/ 						installedChunks[chunkId] = undefined;
                        /******/
                    }
                    /******/
                };
/******/ 				var timeout = setTimeout(function () {
/******/ 					onScriptComplete({ type: 'timeout', target: script });
                    /******/
                }, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
                /******/
            }
            /******/
        }
/******/ 		return Promise.all(promises);
        /******/
    };
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
        /******/
    };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
        /******/
    };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/arquivos/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function (err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js", "vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
    /******/
})
/************************************************************************/
/******/({

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

            var map = {
                "./af": "./node_modules/moment/locale/af.js",
                "./af.js": "./node_modules/moment/locale/af.js",
                "./ar": "./node_modules/moment/locale/ar.js",
                "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
                "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
                "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
                "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
                "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
                "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
                "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
                "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
                "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
                "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
                "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
                "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
                "./ar.js": "./node_modules/moment/locale/ar.js",
                "./az": "./node_modules/moment/locale/az.js",
                "./az.js": "./node_modules/moment/locale/az.js",
                "./be": "./node_modules/moment/locale/be.js",
                "./be.js": "./node_modules/moment/locale/be.js",
                "./bg": "./node_modules/moment/locale/bg.js",
                "./bg.js": "./node_modules/moment/locale/bg.js",
                "./bm": "./node_modules/moment/locale/bm.js",
                "./bm.js": "./node_modules/moment/locale/bm.js",
                "./bn": "./node_modules/moment/locale/bn.js",
                "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
                "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
                "./bn.js": "./node_modules/moment/locale/bn.js",
                "./bo": "./node_modules/moment/locale/bo.js",
                "./bo.js": "./node_modules/moment/locale/bo.js",
                "./br": "./node_modules/moment/locale/br.js",
                "./br.js": "./node_modules/moment/locale/br.js",
                "./bs": "./node_modules/moment/locale/bs.js",
                "./bs.js": "./node_modules/moment/locale/bs.js",
                "./ca": "./node_modules/moment/locale/ca.js",
                "./ca.js": "./node_modules/moment/locale/ca.js",
                "./cs": "./node_modules/moment/locale/cs.js",
                "./cs.js": "./node_modules/moment/locale/cs.js",
                "./cv": "./node_modules/moment/locale/cv.js",
                "./cv.js": "./node_modules/moment/locale/cv.js",
                "./cy": "./node_modules/moment/locale/cy.js",
                "./cy.js": "./node_modules/moment/locale/cy.js",
                "./da": "./node_modules/moment/locale/da.js",
                "./da.js": "./node_modules/moment/locale/da.js",
                "./de": "./node_modules/moment/locale/de.js",
                "./de-at": "./node_modules/moment/locale/de-at.js",
                "./de-at.js": "./node_modules/moment/locale/de-at.js",
                "./de-ch": "./node_modules/moment/locale/de-ch.js",
                "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
                "./de.js": "./node_modules/moment/locale/de.js",
                "./dv": "./node_modules/moment/locale/dv.js",
                "./dv.js": "./node_modules/moment/locale/dv.js",
                "./el": "./node_modules/moment/locale/el.js",
                "./el.js": "./node_modules/moment/locale/el.js",
                "./en-au": "./node_modules/moment/locale/en-au.js",
                "./en-au.js": "./node_modules/moment/locale/en-au.js",
                "./en-ca": "./node_modules/moment/locale/en-ca.js",
                "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
                "./en-gb": "./node_modules/moment/locale/en-gb.js",
                "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
                "./en-ie": "./node_modules/moment/locale/en-ie.js",
                "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
                "./en-il": "./node_modules/moment/locale/en-il.js",
                "./en-il.js": "./node_modules/moment/locale/en-il.js",
                "./en-in": "./node_modules/moment/locale/en-in.js",
                "./en-in.js": "./node_modules/moment/locale/en-in.js",
                "./en-nz": "./node_modules/moment/locale/en-nz.js",
                "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
                "./en-sg": "./node_modules/moment/locale/en-sg.js",
                "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
                "./eo": "./node_modules/moment/locale/eo.js",
                "./eo.js": "./node_modules/moment/locale/eo.js",
                "./es": "./node_modules/moment/locale/es.js",
                "./es-do": "./node_modules/moment/locale/es-do.js",
                "./es-do.js": "./node_modules/moment/locale/es-do.js",
                "./es-mx": "./node_modules/moment/locale/es-mx.js",
                "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
                "./es-us": "./node_modules/moment/locale/es-us.js",
                "./es-us.js": "./node_modules/moment/locale/es-us.js",
                "./es.js": "./node_modules/moment/locale/es.js",
                "./et": "./node_modules/moment/locale/et.js",
                "./et.js": "./node_modules/moment/locale/et.js",
                "./eu": "./node_modules/moment/locale/eu.js",
                "./eu.js": "./node_modules/moment/locale/eu.js",
                "./fa": "./node_modules/moment/locale/fa.js",
                "./fa.js": "./node_modules/moment/locale/fa.js",
                "./fi": "./node_modules/moment/locale/fi.js",
                "./fi.js": "./node_modules/moment/locale/fi.js",
                "./fil": "./node_modules/moment/locale/fil.js",
                "./fil.js": "./node_modules/moment/locale/fil.js",
                "./fo": "./node_modules/moment/locale/fo.js",
                "./fo.js": "./node_modules/moment/locale/fo.js",
                "./fr": "./node_modules/moment/locale/fr.js",
                "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
                "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
                "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
                "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
                "./fr.js": "./node_modules/moment/locale/fr.js",
                "./fy": "./node_modules/moment/locale/fy.js",
                "./fy.js": "./node_modules/moment/locale/fy.js",
                "./ga": "./node_modules/moment/locale/ga.js",
                "./ga.js": "./node_modules/moment/locale/ga.js",
                "./gd": "./node_modules/moment/locale/gd.js",
                "./gd.js": "./node_modules/moment/locale/gd.js",
                "./gl": "./node_modules/moment/locale/gl.js",
                "./gl.js": "./node_modules/moment/locale/gl.js",
                "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
                "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
                "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
                "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
                "./gu": "./node_modules/moment/locale/gu.js",
                "./gu.js": "./node_modules/moment/locale/gu.js",
                "./he": "./node_modules/moment/locale/he.js",
                "./he.js": "./node_modules/moment/locale/he.js",
                "./hi": "./node_modules/moment/locale/hi.js",
                "./hi.js": "./node_modules/moment/locale/hi.js",
                "./hr": "./node_modules/moment/locale/hr.js",
                "./hr.js": "./node_modules/moment/locale/hr.js",
                "./hu": "./node_modules/moment/locale/hu.js",
                "./hu.js": "./node_modules/moment/locale/hu.js",
                "./hy-am": "./node_modules/moment/locale/hy-am.js",
                "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
                "./id": "./node_modules/moment/locale/id.js",
                "./id.js": "./node_modules/moment/locale/id.js",
                "./is": "./node_modules/moment/locale/is.js",
                "./is.js": "./node_modules/moment/locale/is.js",
                "./it": "./node_modules/moment/locale/it.js",
                "./it-ch": "./node_modules/moment/locale/it-ch.js",
                "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
                "./it.js": "./node_modules/moment/locale/it.js",
                "./ja": "./node_modules/moment/locale/ja.js",
                "./ja.js": "./node_modules/moment/locale/ja.js",
                "./jv": "./node_modules/moment/locale/jv.js",
                "./jv.js": "./node_modules/moment/locale/jv.js",
                "./ka": "./node_modules/moment/locale/ka.js",
                "./ka.js": "./node_modules/moment/locale/ka.js",
                "./kk": "./node_modules/moment/locale/kk.js",
                "./kk.js": "./node_modules/moment/locale/kk.js",
                "./km": "./node_modules/moment/locale/km.js",
                "./km.js": "./node_modules/moment/locale/km.js",
                "./kn": "./node_modules/moment/locale/kn.js",
                "./kn.js": "./node_modules/moment/locale/kn.js",
                "./ko": "./node_modules/moment/locale/ko.js",
                "./ko.js": "./node_modules/moment/locale/ko.js",
                "./ku": "./node_modules/moment/locale/ku.js",
                "./ku.js": "./node_modules/moment/locale/ku.js",
                "./ky": "./node_modules/moment/locale/ky.js",
                "./ky.js": "./node_modules/moment/locale/ky.js",
                "./lb": "./node_modules/moment/locale/lb.js",
                "./lb.js": "./node_modules/moment/locale/lb.js",
                "./lo": "./node_modules/moment/locale/lo.js",
                "./lo.js": "./node_modules/moment/locale/lo.js",
                "./lt": "./node_modules/moment/locale/lt.js",
                "./lt.js": "./node_modules/moment/locale/lt.js",
                "./lv": "./node_modules/moment/locale/lv.js",
                "./lv.js": "./node_modules/moment/locale/lv.js",
                "./me": "./node_modules/moment/locale/me.js",
                "./me.js": "./node_modules/moment/locale/me.js",
                "./mi": "./node_modules/moment/locale/mi.js",
                "./mi.js": "./node_modules/moment/locale/mi.js",
                "./mk": "./node_modules/moment/locale/mk.js",
                "./mk.js": "./node_modules/moment/locale/mk.js",
                "./ml": "./node_modules/moment/locale/ml.js",
                "./ml.js": "./node_modules/moment/locale/ml.js",
                "./mn": "./node_modules/moment/locale/mn.js",
                "./mn.js": "./node_modules/moment/locale/mn.js",
                "./mr": "./node_modules/moment/locale/mr.js",
                "./mr.js": "./node_modules/moment/locale/mr.js",
                "./ms": "./node_modules/moment/locale/ms.js",
                "./ms-my": "./node_modules/moment/locale/ms-my.js",
                "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
                "./ms.js": "./node_modules/moment/locale/ms.js",
                "./mt": "./node_modules/moment/locale/mt.js",
                "./mt.js": "./node_modules/moment/locale/mt.js",
                "./my": "./node_modules/moment/locale/my.js",
                "./my.js": "./node_modules/moment/locale/my.js",
                "./nb": "./node_modules/moment/locale/nb.js",
                "./nb.js": "./node_modules/moment/locale/nb.js",
                "./ne": "./node_modules/moment/locale/ne.js",
                "./ne.js": "./node_modules/moment/locale/ne.js",
                "./nl": "./node_modules/moment/locale/nl.js",
                "./nl-be": "./node_modules/moment/locale/nl-be.js",
                "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
                "./nl.js": "./node_modules/moment/locale/nl.js",
                "./nn": "./node_modules/moment/locale/nn.js",
                "./nn.js": "./node_modules/moment/locale/nn.js",
                "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
                "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
                "./pa-in": "./node_modules/moment/locale/pa-in.js",
                "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
                "./pl": "./node_modules/moment/locale/pl.js",
                "./pl.js": "./node_modules/moment/locale/pl.js",
                "./pt": "./node_modules/moment/locale/pt.js",
                "./pt-br": "./node_modules/moment/locale/pt-br.js",
                "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
                "./pt.js": "./node_modules/moment/locale/pt.js",
                "./ro": "./node_modules/moment/locale/ro.js",
                "./ro.js": "./node_modules/moment/locale/ro.js",
                "./ru": "./node_modules/moment/locale/ru.js",
                "./ru.js": "./node_modules/moment/locale/ru.js",
                "./sd": "./node_modules/moment/locale/sd.js",
                "./sd.js": "./node_modules/moment/locale/sd.js",
                "./se": "./node_modules/moment/locale/se.js",
                "./se.js": "./node_modules/moment/locale/se.js",
                "./si": "./node_modules/moment/locale/si.js",
                "./si.js": "./node_modules/moment/locale/si.js",
                "./sk": "./node_modules/moment/locale/sk.js",
                "./sk.js": "./node_modules/moment/locale/sk.js",
                "./sl": "./node_modules/moment/locale/sl.js",
                "./sl.js": "./node_modules/moment/locale/sl.js",
                "./sq": "./node_modules/moment/locale/sq.js",
                "./sq.js": "./node_modules/moment/locale/sq.js",
                "./sr": "./node_modules/moment/locale/sr.js",
                "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
                "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
                "./sr.js": "./node_modules/moment/locale/sr.js",
                "./ss": "./node_modules/moment/locale/ss.js",
                "./ss.js": "./node_modules/moment/locale/ss.js",
                "./sv": "./node_modules/moment/locale/sv.js",
                "./sv.js": "./node_modules/moment/locale/sv.js",
                "./sw": "./node_modules/moment/locale/sw.js",
                "./sw.js": "./node_modules/moment/locale/sw.js",
                "./ta": "./node_modules/moment/locale/ta.js",
                "./ta.js": "./node_modules/moment/locale/ta.js",
                "./te": "./node_modules/moment/locale/te.js",
                "./te.js": "./node_modules/moment/locale/te.js",
                "./tet": "./node_modules/moment/locale/tet.js",
                "./tet.js": "./node_modules/moment/locale/tet.js",
                "./tg": "./node_modules/moment/locale/tg.js",
                "./tg.js": "./node_modules/moment/locale/tg.js",
                "./th": "./node_modules/moment/locale/th.js",
                "./th.js": "./node_modules/moment/locale/th.js",
                "./tk": "./node_modules/moment/locale/tk.js",
                "./tk.js": "./node_modules/moment/locale/tk.js",
                "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
                "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
                "./tlh": "./node_modules/moment/locale/tlh.js",
                "./tlh.js": "./node_modules/moment/locale/tlh.js",
                "./tr": "./node_modules/moment/locale/tr.js",
                "./tr.js": "./node_modules/moment/locale/tr.js",
                "./tzl": "./node_modules/moment/locale/tzl.js",
                "./tzl.js": "./node_modules/moment/locale/tzl.js",
                "./tzm": "./node_modules/moment/locale/tzm.js",
                "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
                "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
                "./tzm.js": "./node_modules/moment/locale/tzm.js",
                "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
                "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
                "./uk": "./node_modules/moment/locale/uk.js",
                "./uk.js": "./node_modules/moment/locale/uk.js",
                "./ur": "./node_modules/moment/locale/ur.js",
                "./ur.js": "./node_modules/moment/locale/ur.js",
                "./uz": "./node_modules/moment/locale/uz.js",
                "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
                "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
                "./uz.js": "./node_modules/moment/locale/uz.js",
                "./vi": "./node_modules/moment/locale/vi.js",
                "./vi.js": "./node_modules/moment/locale/vi.js",
                "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
                "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
                "./yo": "./node_modules/moment/locale/yo.js",
                "./yo.js": "./node_modules/moment/locale/yo.js",
                "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
                "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
                "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
                "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
                "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
                "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
                "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
                "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
            };


            function webpackContext(req) {
                var id = webpackContextResolve(req);
                return __webpack_require__(id);
            }
            function webpackContextResolve(req) {
                if (!__webpack_require__.o(map, req)) {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                }
                return map[req];
            }
            webpackContext.keys = function webpackContextKeys() {
                return Object.keys(map);
            };
            webpackContext.resolve = webpackContextResolve;
            module.exports = webpackContext;
            webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

            /***/
        }),

    /***/ "./src/components/account/index.js":
    /*!*****************************************!*\
      !*** ./src/components/account/index.js ***!
      \*****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.styl */ "./src/components/account/index.styl");
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/account/index.styl":
    /*!*******************************************!*\
      !*** ./src/components/account/index.styl ***!
      \*******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/banner/index.js":
    /*!****************************************!*\
      !*** ./src/components/banner/index.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.styl */ "./src/components/banner/index.styl");
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/banner/index.styl":
    /*!******************************************!*\
      !*** ./src/components/banner/index.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/blackfriday/index.js":
    /*!*********************************************!*\
      !*** ./src/components/blackfriday/index.js ***!
      \*********************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.styl */ "./src/components/blackfriday/index.styl");
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/blackfriday/index.styl":
    /*!***********************************************!*\
      !*** ./src/components/blackfriday/index.styl ***!
      \***********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/brands/index.js":
    /*!****************************************!*\
      !*** ./src/components/brands/index.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/brands/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);

                $('.brands__list').slick({
                    slidesToShow: 8,
                    slidesToScroll: 8,
                    infinite: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    responsive: [{
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 6,
                            slidesToScroll: 6
                        }
                    }, {
                        breakpoint: 1100,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4
                        }
                    }, {
                        breakpoint: 992,
                        settings: "unslick"
                    }]
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/brands/style.styl":
    /*!******************************************!*\
      !*** ./src/components/brands/style.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/breadcrumb/index.js":
    /*!********************************************!*\
      !*** ./src/components/breadcrumb/index.js ***!
      \********************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/breadcrumb/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/breadcrumb/style.styl":
    /*!**********************************************!*\
      !*** ./src/components/breadcrumb/style.styl ***!
      \**********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/button/index.js":
    /*!****************************************!*\
      !*** ./src/components/button/index.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/button/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);

                var body = document.querySelector('body');
                var buttonMenu = document.querySelector('.button__menu');
                var menu = document.querySelector('#menu');

                if (buttonMenu) {
                    buttonMenu.addEventListener('click', function () {
                        menuAction();
                    });
                }

                if (menu) {
                    menu.addEventListener('click', function (evt) {
                        if (evt.target.classList.contains('menu') || evt.target.classList.contains('menu--mobile')) {
                            menuAction();
                        }
                    });
                }

                function menuAction() {
                    if (body.classList.contains('is-menu')) {
                        body.classList.remove('is-menu');
                        buttonMenu.classList.remove('button__menu--close');
                    } else {
                        body.classList.add('is-menu');
                        buttonMenu.classList.add('button__menu--close');
                    }
                }

                var buttonCart = document.querySelector('.button__minicart');
                var minicart = document.querySelector('#minicart');

                if (buttonCart) {
                    buttonCart.addEventListener('click', function () {
                        cartAction();
                    });
                }

                if (minicart) {
                    minicart.addEventListener('click', function (evt) {
                        if (evt.target.classList.contains('minicart')) {
                            cartAction();
                        }
                    });
                }

                function cartAction() {
                    body.classList.toggle('is-minicart');
                } // NotificaÃ§Ã£o basica do carrinho


                setTimeout(function () {
                    $vtex('.showcase__buy').click(function () {
                        $vtex('.button__minicart-qty').on("DOMNodeInserted", function (event) {
                            if (!$vtex('.button__minicart .notification').length >= 1) {
                                var notification = $vtex(this).text();
                                $vtex(this).after($vtex('<div class="notification"><span>' + notification + '</span> no carrinho!</div>'));
                            }

                            setTimeout(function () {
                                $vtex('.button__minicart .notification').remove();
                            }, 3000);
                        });
                    });
                }, 2000);
                $('body').append("<button class=\"back-top\"><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1024\" height=\"1024\" viewBox=\"0 0 1024 1024\"><path d=\"M1024 512c0-282.315-229.683-512-512-512-282.315 0-512 229.685-512 512 0 282.317 229.685 512 512 512 282.317 0 512-229.683 512-512zM66.303 512c0-245.761 199.946-445.697 445.697-445.697s445.699 199.935 445.699 445.697c0 245.761-199.948 445.699-445.699 445.699s-445.697-199.938-445.697-445.699zM575.606 760.631v-336.464c0 0 81.573 81.563 132.075 132.086 21.58 21.569 56.567 21.569 78.15 0 3.556-3.559 7.15-7.161 10.708-10.719 21.58-21.569 21.58-56.556 0-78.138-66.117-66.126-197.351-197.349-243.112-243.099-10.352-10.365-24.41-16.188-39.063-16.188h-4.73c-14.641 0-28.697 5.823-39.063 16.188-45.748 45.75-176.984 176.973-243.099 243.099-21.58 21.582-21.58 56.569 0 78.138 3.548 3.559 7.161 7.161 10.708 10.719 21.58 21.569 56.556 21.569 78.136 0 50.512-50.523 132.086-132.086 132.086-132.086v336.464c0 30.521 24.743 55.253 55.253 55.253h16.697c30.521 0 55.253-24.732 55.253-55.253z\"></path></svg></div>");
                $(".back-top").click(function () {
                    $('html,body').animate({
                        scrollTop: $("body").offset().top
                    }, 'slow');
                });
                $(window).scroll(function () {
                    if ($(window).scrollTop() > 400) {
                        $('.back-top').fadeIn();
                    } else {
                        $('.back-top').fadeOut();
                    }
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/button/style.styl":
    /*!******************************************!*\
      !*** ./src/components/button/style.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/buytobether/index.js":
    /*!*********************************************!*\
      !*** ./src/components/buytobether/index.js ***!
      \*********************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/buytobether/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);

                var buytobether = $('.buytobether');

                if (buytobether.length) {
                    var container = $('<div class="buytobether__container actived">');
                    var button = $('<button type="button" class="buytobether__close">Close</button>');
                    var table = buytobether.find('table');
                    var title = buytobether.find('h4#divTitulo');
                    container.prepend(button);
                    title.click(function (evt) {
                        return $(evt.target).closest('.buytobether').toggleClass('on');
                    });
                    button.click(function (evt) {
                        return $(evt.target).closest('.buytobether').removeClass('on');
                    });

                    if (table) {
                        container.append(table);
                        buytobether.append(container);
                    }
                }
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/buytobether/style.styl":
    /*!***********************************************!*\
      !*** ./src/components/buytobether/style.styl ***!
      \***********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/category/index.js":
    /*!******************************************!*\
      !*** ./src/components/category/index.js ***!
      \******************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/category/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);

                var body = $('body'); // destaque na categoria em navegaÃ§ao

                $(window).on('load', function () {
                    if (body.hasClass('categoria') || body.hasClass('departmento') || body.hasClass('marca') || body.hasClass('resultado-busca')) {
                        var catNavigation = $('.bread-crumb .last').text();
                        $('.search-single-navigator h4').each(function (i, e) {
                            if ($(e).find('a').attr('title') == catNavigation) {
                                $(e).addClass('featured-Category');
                            }
                        });
                    }
                });

                if (body.hasClass('category') || body.hasClass('department') || body.hasClass('brand') || body.hasClass('resultado-busca')) {
                    var sub = $('.sub');
                    var resultTimer = $('.searchResultsTime');
                    sub.first().append($('.pager.top')).prepend(resultTimer.first());
                    sub.last().append($('.pager.bottom')).prepend(resultTimer.last());
                }

                $('.category__showcase .tags__filter').appendTo('.category__showcase .main');
                var url = window.location.origin + window.location.pathname;
                $('.tags__filter-list li').each(function () {
                    var paramUrl = $(this).find('a').attr('href');
                    var newUrl = url + '?' + paramUrl;
                    $(this).find('a').attr('href', newUrl);
                });
                $('.title__seoCategory').appendTo('.main .sub');
                $('.textoSeo__topo').click('click', function () {
                    $(this).toggleClass('active__div');
                });

                if ($('.textoSeo__inferior').text().length > 0) {
                    $('.textoSeo__inferior').click('click', function () {
                        $(this).toggleClass('active__div');
                    });
                } else {
                    $('.textoSeo__inferior').addClass('off');
                } // add active on tags filter selected


                $('ul.tags__filter-list li').each(function () {
                    if ($(this).find('a').attr('href') == window.location.href) {
                        $(this).addClass('active');
                    }
                }); // Insere H1 na categoria

                var last = $('.bread-crumb ul li.last').text();
                $('.bread-crumb ul li.last').html("<h1>".concat(last, "</h1>")); // Oculta caso na tiver cadastro

                if (!$('.bannersMarcas .box-banner').length) {
                    $('.bannersMarcas').hide();
                }

                if ($('.textoSeo__topo p').text() == '') {
                    $('.textoSeo__topo').hide();
                }

                if ($('.marca__text .textoSeo__topo p').text() == '') {
                    $('.marca__text').hide();
                }

                if ($('.linhas__category div').html() == '') {
                    $('.linhas__category').hide();
                }

                if (!$('.showcase.destaques-category .showcase__item').length) {
                    $('.showcase.destaques-category').hide();
                }

                if ($('.search-single-navigator h4').length == 1) {
                    $('.search-single-navigator h4 + ul').show();
                }

                var elementSelectFilter = $('.resultado-busca-filtro .orderBy select');
                var valueSelectedFilter = elementSelectFilter.val();
                $('.tags__filter-list a').click(function (event) {
                    event.preventDefault();
                    var typeFilterSelect = $(this).data('type');
                    elementSelectFilter.val(typeFilterSelect).trigger('change');
                });

                if (valueSelectedFilter) {
                    var defaultSelectedFilter = $('.tags__filter-list a[data-type=' + valueSelectedFilter + ']');
                    if (defaultSelectedFilter.length) defaultSelectedFilter.closest('li').addClass('active');
                }

                var sidebarButton = $('.sidebar__button');

                if (sidebarButton.length) {
                    var wrapActionsMobile = $('<div class="category__actions-mobile"></div>');
                    var buttonOrderMobile = $('<button class="button-order-mobile"><span>Ordenar</span></button>');
                    sidebarButton.after(wrapActionsMobile);
                    wrapActionsMobile.prepend(buttonOrderMobile).append(sidebarButton);
                    buttonOrderMobile.click(function () {
                        $('body').toggleClass('order-mobile-show');
                    });
                }
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/category/style.styl":
    /*!********************************************!*\
      !*** ./src/components/category/style.styl ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/contact/index.js":
    /*!*****************************************!*\
      !*** ./src/components/contact/index.js ***!
      \*****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/contact/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/contact/style.styl":
    /*!*******************************************!*\
      !*** ./src/components/contact/style.styl ***!
      \*******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/copyright/index.js":
    /*!*******************************************!*\
      !*** ./src/components/copyright/index.js ***!
      \*******************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/copyright/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/copyright/style.styl":
    /*!*********************************************!*\
      !*** ./src/components/copyright/style.styl ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/countdown/index.js":
    /*!*******************************************!*\
      !*** ./src/components/countdown/index.js ***!
      \*******************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
    /* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var Core_plugins_countdown_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Core/plugins/countdown.min.js */ "./src/core/plugins/countdown.min.js");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.styl */ "./src/components/countdown/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_2__);



                $('.banner--full img[alt*="Countdown"').each(function () {
                    var _$$attr$split = $(this).attr('alt').split(','),
                        _$$attr$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_$$attr$split, 3),
                        _ = _$$attr$split2[0],
                        date = _$$attr$split2[1],
                        time = _$$attr$split2[2];

                    var _date$split = date.split('-'),
                        _date$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_date$split, 3),
                        day = _date$split2[0],
                        month = _date$split2[1],
                        year = _date$split2[2];

                    var _time$split = time.split(':'),
                        _time$split2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_time$split, 3),
                        h = _time$split2[0],
                        m = _time$split2[1],
                        s = _time$split2[2];

                    var timeoutPromotion = new Date(year, month, day, h, m, s);
                    var elementCountdown = $('<div class="countdown"></div>');
                    var days = $("<div class=\"countdown__item countdown__days\"></div>");
                    var hours = $("<div class=\"countdown__item countdown__hours\"></div>");
                    var minutes = $("<div class=\"countdown__item countdown__minutes\"></div>");
                    var seconds = $("<div class=\"countdown__item countdown__seconds\"></div>");
                    elementCountdown.append(days).append(hours).append(minutes).append(seconds);
                    $(this).after(elementCountdown);
                    setInterval(function () {
                        var timeout = Object(Core_plugins_countdown_min_js__WEBPACK_IMPORTED_MODULE_1__["default"])(timeoutPromotion);
                        updateCountdown(timeout);
                    }, 1000);

                    function updateCountdown(timer) {
                        days.html("\n            <div class=\"countdown__border\">\n                <span class=\"countdown__text\">".concat(timer.days, "</span>\n                <span class=\"countdown__label\">Dias</span>\n            </div>\n        "));
                        hours.html("\n            <div class=\"countdown__border\">\n                <span class=\"countdown__text\">".concat(timer.hours, "</span>\n                <span class=\"countdown__label\">Horas</span>\n            </div>\n        "));
                        minutes.html("\n            <div class=\"countdown__border\">\n                <span class=\"countdown__text\">".concat(timer.minutes, "</span>\n                <span class=\"countdown__label\">Min</span>\n            </div>\n        "));
                        seconds.html("\n            <div class=\"countdown__border\">\n                <span class=\"countdown__text\">".concat(timer.seconds, "</span>\n                <span class=\"countdown__label\">Seg</span>\n            </div>\n        "));
                    }
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/countdown/style.styl":
    /*!*********************************************!*\
      !*** ./src/components/countdown/style.styl ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/empty/index.js":
    /*!***************************************!*\
      !*** ./src/components/empty/index.js ***!
      \***************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/empty/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/empty/style.styl":
    /*!*****************************************!*\
      !*** ./src/components/empty/style.styl ***!
      \*****************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/faq/index.js":
    /*!*************************************!*\
      !*** ./src/components/faq/index.js ***!
      \*************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/faq/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);

                $('.faq__sac--buttons-chat').on('click', function () {
                    $('#img-widget').trigger('click');
                }); // TABS

                $('.faq__tabs a').click(function (e) {
                    e.preventDefault();
                    var tab_id = $(this).attr('data-id');
                    $('.faq__tabs a').removeClass('active');
                    $('.faq_tab--item').hide();
                    $(this).addClass('active');
                    $(".faq_tab--item#" + tab_id).fadeIn();
                }); // ACCORDEON

                $('.list-item').each(function () {
                    var _this = $(this);

                    var _trigger = _this.find('.list-title');

                    var _content = _this.find('.item-content');

                    _trigger.each(function () {
                        $(this).append("\n        <svg width=\"23px\" height=\"13px\" viewBox=\"0 0 23 13\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <g id=\"Home\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"faq-belezademulher\" transform=\"translate(-1121.000000, -757.000000)\" fill=\"#44444D\" fill-rule=\"nonzero\">\n                <g id=\"meio\" transform=\"translate(314.000000, 210.000000)\">\n                    <g id=\"d\xFAvidas\" transform=\"translate(0.000000, 222.000000)\">\n                        <g id=\"Group-9\" transform=\"translate(1.000000, 46.000000)\">\n                            <g id=\"left-arrow-(1)-copy\" transform=\"translate(817.000000, 285.000000) scale(-1, 1) translate(-817.000000, -285.000000) translate(805.000000, 278.000000)\">\n                                <g id=\"left-arrow-(1)\" transform=\"translate(11.972414, 7.189024) rotate(-90.000000) translate(-11.972414, -7.189024) translate(5.472414, -4.310976)\">\n                                    <path d=\"M4.16619512,11.0322483 L12.0222439,2.78110345 C12.238561,2.55445517 12.357561,2.25142069 12.357561,1.92830345 C12.357561,1.6050069 12.238561,1.30215172 12.0222439,1.07514483 L11.3338537,0.352524138 C11.117878,0.125158621 10.8291707,0 10.5215122,0 C10.2138537,0 9.9254878,0.125158621 9.70934146,0.352524138 L0.355463415,10.1762207 C0.138463415,10.4039448 0.0196341463,10.7082345 0.0204878049,11.0317103 C0.0196341463,11.3566207 0.138292683,11.6605517 0.355463415,11.8884552 L9.70063415,21.7026483 C9.91678049,21.9300138 10.2051463,22.0551724 10.5129756,22.0551724 C10.8206341,22.0551724 11.109,21.9300138 11.3253171,21.7026483 L12.0135366,20.9800276 C12.4613659,20.5096966 12.4613659,19.7440414 12.0135366,19.2738897 L4.16619512,11.0322483 Z\" id=\"Path\"></path>\n                                </g>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </svg>\n        ");
                    });

                    _trigger.on('click', function () {
                        _trigger.toggleClass('active');

                        _content.toggle('400');
                    });
                });

                if ($('body#faq-page').length) {
                    var origin = window.location.search;

                    if (origin != '') {
                        origin = origin.replace('?', '');
                        $('.faq__tabs li a').each(function () {
                            //    console.log(origin, $(this).attr('data-id'))
                            if (origin == $(this).attr('data-id')) {
                                $(this).click();
                            }
                        });
                    }
                }
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/faq/style.styl":
    /*!***************************************!*\
      !*** ./src/components/faq/style.styl ***!
      \***************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/footer/index.js":
    /*!****************************************!*\
      !*** ./src/components/footer/index.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/footer/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);

                $('.footer__list-item.chat').on('click', function () {
                    $('#img-widget').trigger('click');
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/footer/style.styl":
    /*!******************************************!*\
      !*** ./src/components/footer/style.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/head-nav/index.js":
    /*!******************************************!*\
      !*** ./src/components/head-nav/index.js ***!
      \******************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var Core_plugins_jquery_observe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Core/plugins/jquery.observe */ "./src/core/plugins/jquery.observe.js");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.styl */ "./src/components/head-nav/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_1__);


                $('.head-nav').observe('childlist', '.ajax-content-loader', function (record) {
                    var logout = record.target.querySelector('[href*=logout]');

                    if (logout) {
                        $('body').addClass('logout').removeClass('login');
                    } else {
                        $('body').addClass('login').removeClass('logout');
                    }
                });
                $('.head-nav__item a[href*=account]').click(function (event) {
                    if ($('body').hasClass('login')) {
                        event.preventDefault();
                        vtexid.start();
                    }
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/head-nav/style.styl":
    /*!********************************************!*\
      !*** ./src/components/head-nav/style.styl ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/header/index.js":
    /*!****************************************!*\
      !*** ./src/components/header/index.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.styl */ "./src/components/header/index.styl");
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/header/index.styl":
    /*!******************************************!*\
      !*** ./src/components/header/index.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/index.js":
    /*!*********************************!*\
      !*** ./src/components/index.js ***!
      \*********************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _reset_index_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset/index.styl */ "./src/components/reset/index.styl");
    /* harmony import */ var _reset_index_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reset_index_styl__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _sumoselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sumoselect */ "./src/components/sumoselect/index.js");
    /* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ "./src/components/layout/index.js");
    /* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product */ "./src/components/product/index.js");
    /* harmony import */ var _buytobether__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buytobether */ "./src/components/buytobether/index.js");
    /* harmony import */ var _slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slick */ "./src/components/slick/index.js");
    /* harmony import */ var _wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wrapper */ "./src/components/wrapper/index.js");
    /* harmony import */ var _account__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account */ "./src/components/account/index.js");
    /* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header */ "./src/components/header/index.js");
    /* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logo */ "./src/components/logo/index.js");
    /* harmony import */ var _banner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner */ "./src/components/banner/index.js");
    /* harmony import */ var _brands__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./brands */ "./src/components/brands/index.js");
    /* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./search */ "./src/components/search/index.js");
    /* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./main */ "./src/components/main/index.js");
    /* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./button */ "./src/components/button/index.js");
    /* harmony import */ var _head_nav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./head-nav */ "./src/components/head-nav/index.js");
    /* harmony import */ var _review__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./review */ "./src/components/review/index.js");
    /* harmony import */ var _breadcrumb__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./breadcrumb */ "./src/components/breadcrumb/index.js");
    /* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact */ "./src/components/contact/index.js");
    /* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./social */ "./src/components/social/index.js");
    /* harmony import */ var _showcase__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./showcase */ "./src/components/showcase/index.js");
    /* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./footer */ "./src/components/footer/index.js");
    /* harmony import */ var _copyright__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./copyright */ "./src/components/copyright/index.js");
    /* harmony import */ var _payment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./payment */ "./src/components/payment/index.js");
    /* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./security */ "./src/components/security/index.js");
    /* harmony import */ var _partners__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./partners */ "./src/components/partners/index.js");
    /* harmony import */ var _labels__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./labels */ "./src/components/labels/index.js");
    /* harmony import */ var _news_rulers__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./news-rulers */ "./src/components/news-rulers/index.js");
    /* harmony import */ var _rulers__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./rulers */ "./src/components/rulers/index.js");
    /* harmony import */ var _prices__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./prices */ "./src/components/prices/index.js");
    /* harmony import */ var _kits_gift__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./kits-gift */ "./src/components/kits-gift/index.js");
    /* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages */ "./src/components/pages/index.js");
    /* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./sidebar */ "./src/components/sidebar/index.js");
    /* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./category */ "./src/components/category/index.js");
    /* harmony import */ var _empty__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./empty */ "./src/components/empty/index.js");
    /* harmony import */ var _faq__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./faq */ "./src/components/faq/index.js");
    /* harmony import */ var _tb__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./tb */ "./src/components/tb/index.js");
    /* harmony import */ var _quickview__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./quickview */ "./src/components/quickview/index.js");
    /* harmony import */ var _page_conselheiro__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./page-conselheiro */ "./src/components/page-conselheiro/index.js");
    /* harmony import */ var _instagram__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./instagram */ "./src/components/instagram/index.js");
    /* harmony import */ var _qtds__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./qtds */ "./src/components/qtds/index.js");
    /* harmony import */ var _blackfriday__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./blackfriday */ "./src/components/blackfriday/index.js");
    /* harmony import */ var _countdown__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./countdown */ "./src/components/countdown/index.js");
    /* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./schema */ "./src/components/schema/index.js");
    /* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_schema__WEBPACK_IMPORTED_MODULE_43__);
    /* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./login */ "./src/components/login/index.js");
            // Reset CSS
            // Sumoselect

            // Layout

            // product

            //buytobether

            // SlickJS

            // Wrapper

            // Account

            // Header

            // Logo

            // Banner

            // Brands

            // Search

            // Main

            // Button

            // head-nav

            // Review

            // breadcrumb

            // Contact

            // Social

            // Showcase

            // Footer

            // Copyright

            // Payment

            // Security

            // Partners

            // labels

            // News Rulers

            // Rulers

            // prices

            // Kits & Gift

            // Pages

            // Sidebar

            // Category

            // Empty

            // Faq

            // tb

            // quickview

            // conselheiro

            // Instagram








            /***/
        }),

    /***/ "./src/components/instagram/index.js":
    /*!*******************************************!*\
      !*** ./src/components/instagram/index.js ***!
      \*******************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/instagram/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);
            // import 'slick-carousel';
            // plugin instagram
            // var instagramUserId = "2714372314"
            // var instagramToken = "2714372314.1677ed0.785f54fc338142c2afd8bc69c44a3c88"
            // var galleryFeed = new Instafeed({
            //     get: "user",
            //     userId: instagramUserId,
            //     accessToken: instagramToken,
            //     resolution: "standard_resolution",
            //     useHttp: "true",
            //     limit: 8,
            //     links: "true",
            //     template: '<div class="img-featured-container instafeed__item">' +
            //         '<a href="{{link}}" class="instafeed__link" target="_blank">' +
            //         '<img src="{{image}}" class="instafeed__image img-responsive">' +
            //         '</a>' +
            //         '</div>',
            //     target: "instafeed-gallery-feed",
            //     after: function () {
            //         // disable button if no more results to load
            //         if (!this.hasNext()) {
            //             if (btnInstafeedLoad)
            //                 btnInstafeedLoad.setAttribute('disabled', 'disabled');
            //         }
            //         // end instagram carousel
            //     }
            // });
            // if($('body.home').length) {
            //     // galleryFeed.run();
            // }

            /***/
        }),

    /***/ "./src/components/instagram/style.styl":
    /*!*********************************************!*\
      !*** ./src/components/instagram/style.styl ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/kits-gift/index.js":
    /*!*******************************************!*\
      !*** ./src/components/kits-gift/index.js ***!
      \*******************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/kits-gift/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/kits-gift/style.styl":
    /*!*********************************************!*\
      !*** ./src/components/kits-gift/style.styl ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/labels/index.js":
    /*!****************************************!*\
      !*** ./src/components/labels/index.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/labels/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var Core_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Core/functions */ "./src/core/functions/index.js");


            Object(Core_functions__WEBPACK_IMPORTED_MODULE_1__["ajustPercent"])();
            $vtex(document).ajaxComplete(function () {
                Object(Core_functions__WEBPACK_IMPORTED_MODULE_1__["ajustPercent"])();
            });

            /***/
        }),

    /***/ "./src/components/labels/style.styl":
    /*!******************************************!*\
      !*** ./src/components/labels/style.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/layout/index.js":
    /*!****************************************!*\
      !*** ./src/components/layout/index.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/layout/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/layout/style.styl":
    /*!******************************************!*\
      !*** ./src/components/layout/style.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/login/index.js":
    /*!***************************************!*\
      !*** ./src/components/login/index.js ***!
      \***************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/login/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);

                $(window).on('load', function () {
                    $('.vtexIdUI-close').click(function () {
                        window.location.href = '/';
                    });
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/login/style.styl":
    /*!*****************************************!*\
      !*** ./src/components/login/style.styl ***!
      \*****************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/logo/index.js":
    /*!**************************************!*\
      !*** ./src/components/logo/index.js ***!
      \**************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/logo/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/logo/style.styl":
    /*!****************************************!*\
      !*** ./src/components/logo/style.styl ***!
      \****************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/main/index.js":
    /*!**************************************!*\
      !*** ./src/components/main/index.js ***!
      \**************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/main/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/main/style.styl":
    /*!****************************************!*\
      !*** ./src/components/main/style.styl ***!
      \****************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/news-rulers/index.js":
    /*!*********************************************!*\
      !*** ./src/components/news-rulers/index.js ***!
      \*********************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/news-rulers/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);

                $("#newsletterButtonOK").attr("value", "Eu quero!");
                $('.newsletter').append('<span class="title__aux"><a href="institucional/regras">CONFIRA AS REGRAS</a></span>');
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/news-rulers/style.styl":
    /*!***********************************************!*\
      !*** ./src/components/news-rulers/style.styl ***!
      \***********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/page-conselheiro/index.js":
    /*!**************************************************!*\
      !*** ./src/components/page-conselheiro/index.js ***!
      \**************************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _styles_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.styl */ "./src/components/page-conselheiro/styles.styl");
    /* harmony import */ var _styles_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styl__WEBPACK_IMPORTED_MODULE_0__);

            var bannerConselheiro = document.querySelector('.page-conselheiro__banner');

            if (bannerConselheiro) {
                var name = 'Visitante';

                if (sessionStorage.getItem('conselheiro.name')) {
                    name = sessionStorage.getItem('conselheiro.name');
                }

                bannerConselheiro.insertAdjacentHTML('beforeend', "\n            <div class=\"page-conselheiro__title-result\">\n                <h2>Diagn\xF3stico do seu cabelo</h2>\n                <h3><span>".concat(name, "</span>, de acordo com os seus resultados, esses s\xE3o os produtos que voc\xEA precisa!</h3>\n            </div>\n        "));
            }

            /***/
        }),

    /***/ "./src/components/page-conselheiro/styles.styl":
    /*!*****************************************************!*\
      !*** ./src/components/page-conselheiro/styles.styl ***!
      \*****************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/pages/index.js":
    /*!***************************************!*\
      !*** ./src/components/pages/index.js ***!
      \***************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/pages/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);

                $('[data-toggle=modal]').click(function () {
                    var id = $(this).attr('href');
                    modal($(id));
                });

                function modal(element) {
                    var hide = element.attr('aria-hidden');
                    if (hide == 'true') element.attr('aria-hidden', false); else element.attr('aria-hidden', true);
                }

                document.getElementsByClassName("fulltext-search-box").placeholder = "Estou procurando por...";
                $('body.Fale.Conosco').removeClass('login');
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/pages/style.styl":
    /*!*****************************************!*\
      !*** ./src/components/pages/style.styl ***!
      \*****************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/partners/index.js":
    /*!******************************************!*\
      !*** ./src/components/partners/index.js ***!
      \******************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/partners/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/partners/style.styl":
    /*!********************************************!*\
      !*** ./src/components/partners/style.styl ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/payment/index.js":
    /*!*****************************************!*\
      !*** ./src/components/payment/index.js ***!
      \*****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/payment/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/payment/style.styl":
    /*!*******************************************!*\
      !*** ./src/components/payment/style.styl ***!
      \*******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/prices/index.js":
    /*!****************************************!*\
      !*** ./src/components/prices/index.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/prices/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


                function checkTicket() {
                    var labels = $('.labels [class*=desconto-a-vista]:not(.on)');
                    var numberPattern = /\D/g;
                    labels.each(function () {
                        var label = $(this);
                        var showcase = label.closest('.showcase__item');
                        var discount = $.trim(label.text().replace(numberPattern, ''));
                        var price = $.trim($('.valor-por', showcase).text().replace('R$', '').replace(',', '.'));
                        var total = price * ((100 - discount) / 100);
                        var html = "<div class=\"prices__discount\"><span class=\"price\">R$ ".concat(total.toFixed(2).replace('.', ','), "</span>  \xE1 vista com desconto</div>");
                        $('.showcase__prices', showcase).append(html);
                        label.addClass('on');
                    });
                }

                checkTicket();
                $vtex(document).ajaxComplete(function () {
                    checkTicket();
                });
                $('.product__btn-other-payment').on("click", function () {
                    $(this).parent().toggleClass('on-payment');
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/prices/style.styl":
    /*!******************************************!*\
      !*** ./src/components/prices/style.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/product/alert-boleto.js":
    /*!************************************************!*\
      !*** ./src/components/product/alert-boleto.js ***!
      \************************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var Core_polyfill_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Core/polyfill/format */ "./src/core/polyfill/format.js");
    /* harmony import */ var Core_polyfill_format__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Core_polyfill_format__WEBPACK_IMPORTED_MODULE_0__);

                var elDiscountOnBoleto = $('.product__labels [class*=desconto-avista-]');

                if (elDiscountOnBoleto.length) {
                    var percentDiscountBoleto = elDiscountOnBoleto.text().split('-').pop();
                    var htmlProductAlertBoleto = String.format($('#ah-utils .product-alert-boleto').html(), "".concat(percentDiscountBoleto, "%"));
                    $('.product__extra-more-info').append($('<div class="product-alert-boleto"></div>').append(htmlProductAlertBoleto)).addClass('has-alert-boleto');
                }
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/product/attr.jsx":
    /*!*****************************************!*\
      !*** ./src/components/product/attr.jsx ***!
      \*****************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
    /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
    /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
    /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
    /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
    /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
    /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var Core_getProductById__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Core/getProductById */ "./src/core/getProductById.js");
    /* harmony import */ var Core_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Core/functions */ "./src/core/functions/index.js");









            function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

            function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })); return true; } catch (e) { return false; } }





            var Attr = /*#__PURE__*/function (_Component) {
                _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Attr, _Component);

                var _super = _createSuper(Attr);

                function Attr(props) {
                    var _this;

                    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Attr);

                    _this = _super.call(this, props);
                    _this.toggleClass = _this.toggleClass.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
                    _this.state = {
                        product: {},
                        attrs: []
                    };
                    return _this;
                }

                _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Attr, [{
                    key: "toggleClass",
                    value: function toggleClass(evt) {
                        evt.currentTarget.closest('div').classList.toggle('on__text');
                    }
                }, {
                    key: "componentDidMount",
                    value: function () {
                        var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee() {
                            var name, current, product, attrs;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            name = this.props.name;
                                            _context.next = 3;
                                            return vtexjs.catalog.getCurrentProductWithVariations();

                                        case 3:
                                            current = _context.sent;
                                            _context.next = 6;
                                            return Object(Core_getProductById__WEBPACK_IMPORTED_MODULE_9__["default"])(current.productId);

                                        case 6:
                                            product = _context.sent;
                                            attrs = [];
                                            if (product[name]) product[name].forEach(function (item) {
                                                var newItem = {};
                                                newItem.label = item;
                                                var value = '';
                                                product[item].forEach(function (val) {
                                                    return value += val;
                                                });
                                                newItem.value = value;
                                                attrs.push(newItem);
                                            });
                                            this.setState({
                                                product: product,
                                                attrs: attrs
                                            });

                                        case 10:
                                        case "end":
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));

                        function componentDidMount() {
                            return _componentDidMount.apply(this, arguments);
                        }

                        return componentDidMount;
                    }()
                }, {
                    key: "render",
                    value: function render() {
                        var _this2 = this;

                        var name = this.props.name;
                        var _this$state = this.state,
                            attrs = _this$state.attrs,
                            active = _this$state.active;
                        if (!attrs.length) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null);
                        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "product__attrs attrs"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "attrs__header"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
                            className: "attrs__title"
                        }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "attrs__container"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "attrs__case"
                        }, attrs.map(function (attr, attrIndex) {
                            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                                className: 'product__attr product__attr--' + Object(Core_functions__WEBPACK_IMPORTED_MODULE_10__["slug"])(attr.label),
                                key: attrIndex
                            }, attr.value.toLowerCase() == 'sim' || attr.value.toLowerCase() == 'nÃ£o' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, attr.value.toLowerCase() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
                                className: "product__attr-label"
                            }, attr.label)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
                                className: "product__attr-label"
                            }, attr.label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
                                className: "product__attr-div"
                            }, ":"), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
                                onClick: _this2.toggleClass,
                                className: "product__attr-value"
                            }, attr.value)));
                        })))));
                    }
                }]);

                return Attr;
            }(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

    /* harmony default export */ __webpack_exports__["default"] = (Attr);

            /***/
        }),

    /***/ "./src/components/product/frete.styl":
    /*!*******************************************!*\
      !*** ./src/components/product/frete.styl ***!
      \*******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/product/index.js":
    /*!*****************************************!*\
      !*** ./src/components/product/index.js ***!
      \*****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
    /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./attr */ "./src/components/product/attr.jsx");
    /* harmony import */ var Core_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Core/functions */ "./src/core/functions/index.js");
    /* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
    /* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
    /* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var _zoom_styl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./zoom.styl */ "./src/components/product/zoom.styl");
    /* harmony import */ var _zoom_styl__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_zoom_styl__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./style.styl */ "./src/components/product/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var _notifyme_styl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./notifyme.styl */ "./src/components/product/notifyme.styl");
    /* harmony import */ var _notifyme_styl__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_notifyme_styl__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var _frete_styl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./frete.styl */ "./src/components/product/frete.styl");
    /* harmony import */ var _frete_styl__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_frete_styl__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var _jquery_scrolltofixed_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jquery-scrolltofixed.js */ "./src/components/product/jquery-scrolltofixed.js");
    /* harmony import */ var _jquery_scrolltofixed_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_jquery_scrolltofixed_js__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */ var Core_functions_zoom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Core/functions/zoom */ "./src/core/functions/zoom.js");
    /* harmony import */ var Core_getProductById__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! Core/getProductById */ "./src/core/getProductById.js");
    /* harmony import */ var object_observe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! object.observe */ "./node_modules/object.observe/dist/object-observe.js");
    /* harmony import */ var object_observe__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(object_observe__WEBPACK_IMPORTED_MODULE_15__);
    /* harmony import */ var _alert_boleto__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./alert-boleto */ "./src/components/product/alert-boleto.js");

















                Object(Core_functions__WEBPACK_IMPORTED_MODULE_5__["buttonBuy"])('.product__buy-qtds', '.buy-button', '.qtds__input');
                var body = $vtex('body');
                var attrs = Array.from(document.querySelectorAll('[data-attr]'));
                attrs.forEach(function (attr) {
                    var name = attr.getAttribute('data-attr');
                    react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_attr__WEBPACK_IMPORTED_MODULE_4__["default"], {
                        name: name
                    }), attr);
                }); // Function set SKU code, show in tag HTML code

                var setSkuID = function setSkuID(sku) {
                    var code = $vtex('.product__code');

                    if (code.length) {
                        code.html('SKU: ' + sku).addClass('product__code--show');
                    }
                };

                $('#calculoFrete').click(function () {
                    $('.freight-values', this).hide();
                }); // Check page product

                if (body.attr('id') == 'product-page') {
                    $(document).ready(function () {
                        return ShippingValue();
                    }); // CorreÃ§Ã£o para o zoom

                    Object(Core_functions_zoom__WEBPACK_IMPORTED_MODULE_13__["default"])(); // desconto %

                    var precoDe = $('strong.skuListPrice').first().text().replace('R$ ', '').replace(',', '.');
                    parseFloat(precoDe).toFixed(2);
                    var precoPor = $('strong.skuBestPrice').first().text().replace('R$ ', '').replace(',', '.');
                    parseFloat(precoPor).toFixed(2);
                    $('.descricao-preco').append("\n        <span class=\"percent-discount\">- ".concat(Object(Core_functions__WEBPACK_IMPORTED_MODULE_5__["percentDiscount"])(precoDe, precoPor), "%</span>\n    "));
                    $('.product__variants').on('click', function () {
                        $('.product__variations').addClass('on');

                        if ($(window).width() > 991) {
                            if ($('body').hasClass('quickview')) {
                                $('html,body').animate({
                                    scrollTop: $('.product__variations').offset().top
                                }, 1000);
                            } else {
                                $('html,body').animate({
                                    scrollTop: $('.product__variations').offset().top - $('.wrapper__container > .header').outerHeight()
                                }, 1000);
                            }
                        }
                    });
                    $('.product__variations').click(function (evt) {
                        if (evt.target.classList.contains('product__variations')) evt.target.classList.remove('on');
                    });
                    $('#popupCalculoFreteWrapper').on('click', function () {
                        $('.product__shipping').addClass('on');
                    });
                    $('#calculoFrete').on('click', function (evt) {
                        if ($(evt.target).attr('id') == 'calculoFrete') $('.product__shipping').removeClass('on');
                    });
                    $('.product__description .product__title').click(function () {
                        $(this).closest('.product__description').addClass('on');
                    });
                    $('.description-product__content').click(function (evt) {
                        if ($(evt.target).hasClass('description-product__content')) {
                            $(this).closest('.product__description').removeClass('on');
                        }
                    });
                    $('.product__specification').on('click', '.attrs__title', function () {
                        $(this).closest('.product__specification').addClass('on');
                    });
                    $('.product__specification').on('click', '.attrs__container', function (evt) {
                        if ($(evt.target).hasClass('attrs__container')) {
                            $(this).closest('.product__specification').removeClass('on');
                        }
                    }); // AtuazaÃ§Ã£o do Sku do produto

                    $vtex(window).on('skuSelected.vtex', function (evt, productId, sku) {
                        setSkuID(sku.sku);
                    }); // Quando carrega o produto pega o sku

                    vtexjs.catalog.getCurrentProductWithVariations().done(function (product) {
                        setSkuID(product.skus[0].sku);
                        initProduct(product.productId);
                    });

                    function initProduct(_x) {
                        return _initProduct.apply(this, arguments);
                    }

                    function _initProduct() {
                        _initProduct = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(id) {
                            var product, video, src, _id, image, idProduto, urlPage, urlApi;

                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            _context.next = 2;
                                            return Object(Core_getProductById__WEBPACK_IMPORTED_MODULE_14__["default"])(id);

                                        case 2:
                                            product = _context.sent;
                                            // thumbs Video
                                            video = product.Video;

                                            if (video) {
                                                src = $(video[0]).attr('src');
                                                _id = src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();
                                                $('.thumbs').append("<li class=\"video\"><img src=\"//img.youtube.com/vi/".concat(_id, "/0.jpg\" /></li>"));
                                                $('.thumbs .video').on('click', function () {
                                                    $('#include').toggleClass('on-play');
                                                });
                                                $('.thumbs li:not(.video)').on('click', function () {
                                                    $('#include').removeClass('on-play');
                                                });
                                            }

                                            $('#include').append($('<div id="yotubeplay">').append(video)); // thumbsCarousel();
                                            // Imagem descriÃ§Ã£o

                                            image = product.Imagem;
                                            idProduto = '';
                                            vtexjs.catalog.getCurrentProductWithVariations().done(function (product) {
                                                idProduto = product.productId;
                                            });
                                            urlPage = window.location.host;
                                            urlApi = 'http://' + urlPage + '/api/catalog_system/pub/products/search?fq=productId:' + idProduto;
                                            $.get(urlApi).done(function (data) {
                                                var video = data[0].iframe;

                                                if (video) {
                                                    var _src = $(video[0]).attr('src');

                                                    var _id2 = _src.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/).pop();

                                                    $('.thumbs').append("<li class=\"video\"><img src=\"//img.youtube.com/vi/".concat(_id2, "/0.jpg\" /></li>"));
                                                }

                                                $('#include').append($('<div id="yotubeplay">').append(video));
                                            });
                                            thumbsCarousel(); // Imagem descriÃ§Ã£o
                                            // const image = product.Imagem;

                                            if (image) {
                                                $('.product__specification-image').append($('<div class="product__image-extra">').append("<img src=\"".concat(image, "\" />")));
                                            }

                                        case 14:
                                        case "end":
                                            return _context.stop();
                                    }
                                }
                            }, _callee);
                        }));
                        return _initProduct.apply(this, arguments);
                    }

                    $('.product__brinde #product-gift-wrapper > ul').slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: true,
                        vertical: false,
                        infinite: false
                    });

                    function thumbsCarousel() {
                        // Carousel das miniaturas do produto
                        $('.thumbs').slick({
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            vertical: true,
                            infinite: false,
                            responsive: [{
                                breakpoint: 992,
                                settings: {
                                    vertical: false,
                                    slidesToShow: 1,
                                    arrows: true,
                                    dots: true
                                }
                            }, {
                                breakpoint: 500,
                                settings: {
                                    vertical: false,
                                    slidesToShow: 1,
                                    arrows: true,
                                    dots: true
                                }
                            }]
                        });
                    }

                    $('.product').on('click', '.showcase__title', function () {
                        $(this).closest('.showcase').addClass('on');
                    });
                    $('.product').on('click', '.showcase__container > div > ul', function (evt) {
                        if ($(evt.target).hasClass('slick-slider')) {
                            $(this).closest('.showcase').removeClass('on');
                        }
                    });
                    var buytobether = $('#divCompreJunto');

                    if (buytobether.length) {
                        var htmlBuyToBether = $.trim(buytobether.html());

                        if (htmlBuyToBether != '') {
                            buytobether.closest('.product__buytobether').addClass('buytobether--actived');
                        }
                    }

                    $('.product__link-more').click(function (evt) {
                        var top = $('.product__title--description').offset().top - $('#header').outerHeight();
                        $('body,html').animate({
                            scrollTop: top
                        }, 1000);
                        evt.preventDefault();
                    });

                    function checkProduct() {
                        $('body').removeClass('product--availabled');

                        if ($('.notifyme.sku-notifyme').attr('style').indexOf('none') != -1) {
                            $('body').addClass('product--availabled');
                        }

                        setTimeout(function () {
                            $('.video').on('click', function () {
                                $('#include').toggleClass('on-play');
                            });
                            $('li:not(.video)').on('click', function () {
                                $('#include').removeClass('on-play');
                            });
                        }, 1000);
                    }

                    checkProduct();

                    function checkTicketProduct() {
                        var discount = $('.product__image .labels [class*=desconto-a-vista]:not(.on)');
                        var numberPattern = /\D/g;

                        if (!$('.product__right--colunm:not([wholesale-prices]) .productPrice').hasClass('on')) {
                            var percent = $.trim(discount.text().replace(numberPattern, ''));
                            var price = $.trim($('.product__prices .price-best-price .skuBestPrice').text().replace('R$', '').replace(',', '.'));
                            var total = price * ((100 - percent) / 100);
                            var html = "<div class=\"prices__discount\"><span class=\"price\">R$ ".concat(total.toFixed(2).replace('.', ','), "</span>  \xE1 vista com desconto</div>");
                            $('.product__right--colunm:not([wholesale-prices]) .productPrice').append(html).addClass('on');
                        }
                    } //checkTicketProduct();


                    var discountDefault = 0;

                    function discountProgressive(qtd) {
                        var label = $('.product__image .labels [class*=desconto-progressivo]');

                        if (label) {
                            var discount = $.trim(label.text().split('-')[1]).split(' ');
                            $.each(discount, function (index, item) {
                                var productDiscount = item.split('/');

                                if (qtd < parseInt(productDiscount[0])) {
                                    if (discountDefault != parseInt(productDiscount[0])) {
                                        discountDefault = parseInt(productDiscount[0]);
                                        renderProgressiveHtml(productDiscount[0], productDiscount[1]);
                                    }

                                    return false;
                                }
                            });
                        }
                    }

                    function renderProgressiveHtml(qtd, percent) {
                        var HTML = "<div class=\"progressive\">\n            <div class=\"progressive__container\">\n                <h3 class=\"progressive__title\">Desconto Progressivo</h3>\n                <p>Compre <strong>".concat(qtd, " UNIDADES</strong></p>\n                <p>Ganhe <strong>").concat(percent, "% DE DESCONTO</strong></p>\n            </div>\n        </div>");
                        $('.progressive').remove();
                        $('.product__actions--button').before(HTML);
                    }

                    $('.qtds__input').on('qtds.change', function (evt, qtd) {
                        var qtds = parseInt(qtd) || 1;
                        discountProgressive(qtds);
                    });
                    $(document).ajaxComplete(function () {
                        checkTicketProduct();
                        checkProduct();
                    }); //funcao foto na marca

                    if ($('.brandName > a').length) {
                        var brandName = $('.brandName > a').html();
                        var newName = Object(Core_functions__WEBPACK_IMPORTED_MODULE_5__["slug"])(brandName);
                        var urlImg = '/arquivos/' + newName + '.png';
                        $('.brandName > a ').append('<img src="' + urlImg + '" alt="' + brandName + '"/>');
                    } // funcao foto na variacao


                    if ($('.SelecioneacorD .item-dimension-SelecioneacorD span label').length) {
                        $('.SelecioneacorD .item-dimension-SelecioneacorD span label').each(function () {
                            var variableName = $(this).html();
                            var namevariableNew = 'color-' + Object(Core_functions__WEBPACK_IMPORTED_MODULE_5__["slug"])(variableName) + '.jpg';
                            var urlImage = '/arquivos/' + namevariableNew;
                            $(this).css('background-image', 'url(' + urlImage + ')');
                        });
                    }

                    if ($('.bread-crumb > ul').length) {
                        $('.bread-crumb > ul').clone().appendTo('.item__extra .categorias');
                    }

                    if ($('.brandName > a').length) {
                        $('.brandName > a').clone().appendTo('.item__extra .marca');
                    }

                    function getAttributeProdutct() {
                        var idProduto = '';
                        vtexjs.catalog.getCurrentProductWithVariations().done(function (product) {
                            idProduto = product.productId;
                        });
                        var urlApi = '/api/catalog_system/pub/products/search?fq=productId:' + idProduto;
                        $.get(urlApi).done(function (data) {
                            var catFilter = data[0]['categories'][2];
                            var arrayTamanho = data[0]['Tamanho'];

                            if (arrayTamanho != null) {
                                arrayTamanho.forEach(function (itemRetorno) {
                                    var urlFilter = catFilter + itemRetorno + '?map=c,specificationFilter_18';
                                    $('li.tamanho ul').append('<li><a href="' + urlFilter + '">' + itemRetorno + '</a></li>');
                                });
                            } else {
                                $('li.tamanho').hide();
                            }

                            var arrayCondicao = data[0]['CondiÃ§Ã£o dos Fios'];

                            if (arrayCondicao != null) {
                                arrayCondicao.forEach(function (itemRetorno) {
                                    var urlFilter = catFilter + itemRetorno + '?map=c,specificationFilter_18';
                                    $('.item__extra .condicao ul').append('<li><a href="' + urlFilter + '">' + itemRetorno + '</a></li>');
                                });
                            } else {
                                $('.item__extra .condicao').hide();
                            }

                            var arrayDesejo = data[0]['Desejo de Beleza'];

                            if (arrayDesejo != null) {
                                arrayDesejo.forEach(function (itemRetorno) {
                                    var urlFilter = catFilter + itemRetorno + '?map=c,specificationFilter_18';
                                    $('.item__extra .desejo ul').append('<li><a href="' + urlFilter + '">' + itemRetorno + '</a></li>');
                                });
                            } else {
                                $('.item__extra .desejo').hide();
                            }

                            var arrayLinha = data[0]['Linha'];

                            if (arrayLinha != null) {
                                arrayLinha.forEach(function (itemRetorno) {
                                    var urlFilter = catFilter + itemRetorno + '?map=c,specificationFilter_18';
                                    $('.item__extra .linha ul').append('<li><a href="' + urlFilter + '">' + itemRetorno + '</a></li>');
                                });
                            } else {
                                $('.item__extra .linha').hide();
                            }
                        });
                        $('.fake__variations > div > ul li').each(function () {
                            var itemAdd = $(this).find('article a');
                            var idProdutoSimilar = $(this).find('article').attr('produto');

                            if (idProdutoSimilar) {
                                var urlApiSimilar = '/api/catalog_system/pub/products/search?fq=productId:' + idProdutoSimilar;
                                $.get(urlApiSimilar).done(function (data) {
                                    var arrayUrl = data[0]['link'];
                                    var arrayTamanho = data[0]['Tamanho'];

                                    if (arrayTamanho != null) {
                                        arrayTamanho.forEach(function (itemRetorno) {
                                            $(itemAdd).html(itemRetorno);
                                            $(itemAdd).attr('href', arrayUrl);
                                        });
                                    }
                                });
                            }
                        });
                    }

                    getAttributeProdutct();

                    if ($(window).width() < 992) {
                        $('.productDescription').on('click', function () {
                            $(this).toggleClass('on__text');
                        });
                    }

                    function imagesThumb() {
                        var thumbs = $('#show .thumbs:not(clone)');

                        if (thumbs) {
                            setTimeout(function () {
                                return thumbsCarousel();
                            }, 600);
                        }
                    }

                    var objectThumbs = document.querySelector('.thumbs');
                    Object.observe(objectThumbs, function () {
                        imagesThumb();
                    });
                    imagesThumb();
                    $('#show').on('click', '.thumbs-two a', function () {
                        console.log('a');
                        var index = parseInt($(this).closest('.slick-slide').attr('data-slick-index')) + 1;
                        $("#show .thumbs li:nth-child(".concat(index, ") a")).trigger('click');
                    });
                }

                if (!$('.product__prices .product__description--short .productDescriptionShort').length) {
                    $('.product__prices .product__description--short .description-title').hide();
                } // if ($(window).width() < 992) {
                //     $('.produto main').append('<div class="btn-flutuante-comprar"></div>')
                //     $('.product__actions.product__actions--button').first()
                //         .clone()
                //         .addClass('flutuante')
                //         .appendTo('.btn-flutuante-comprar')
                // }


                $(document).ajaxComplete(function () {
                    $('.fake__variations > div > ul > li').each(function () {
                        var selectVariation = $(this).find('.product__similiar-link').html();
                        var selectedVariation = $(this).find('.product__similiar-link');
                        var trueVariation = $('.fake__variations ul.item__attr-tamanho li a').html();

                        if (trueVariation == selectVariation) {
                            $(selectedVariation).parent().parent().addClass('active__variations');
                        }
                    });
                }); //remove frase "veja os produtos desse kit"

                if ($('.product__kit [class*=colunas]').text() == '') {
                    $('.product__kit').hide();
                }

                if ($('#product-page .labels-featured .frete-gratis').length) {
                    $('a.buy-button.buy-button-ref').addClass('freeShipping');
                    $('a.buy-button.buy-button-ref').text('Comprar com Frete GrÃ¡tis');
                }

                if ($('#product-page').length) {
                    $('#btnFreteSimulacao').val('CALCULAR');
                }

                $(window).scroll(function () {
                    if ($(window).width() <= 991) {
                        if ($(window).scrollTop() > 500) {
                            $('.float__product').fadeIn();
                        } else {
                            $('.float__product').fadeOut();
                        }
                    }
                });

                function selected() {
                    var data = false;

                    if ($('.buy-button.buy-button-ref').is(':visible') == true) {
                        data = true;
                    }

                    return data;
                }

                setTimeout(function () {
                    $('#product-page .product__container').attr('data-status', selected());
                }, 3000);

                if ($('#product-page').length) {
                    var idProduto;
                    vtexjs.catalog.getCurrentProductWithVariations().done(function (product) {
                        idProduto = product.productId;
                    });
                    $('span.buy-button__fake').on('click', function () {
                        var item = {
                            id: idProduto,
                            quantity: 1,
                            seller: '1'
                        };
                        vtexjs.checkout.addToCart([item], null, 1).done(function (orderForm) {
                            $('.button__minicart').trigger('click');
                        });
                    });
                }

                var elementJoinBuy = $('.see__too .showcase__container');

                if (elementJoinBuy) {
                    var isJoinBuy = !elementJoinBuy.empty();

                    if (isJoinBuy) {
                        $('.see__too').addClass('on');
                    }
                }
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/product/jquery-scrolltofixed.js":
    /*!********************************************************!*\
      !*** ./src/components/product/jquery-scrolltofixed.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function (jQuery) {/*
     * ScrollToFixed
     * https://github.com/bigspotteddog/ScrollToFixed
     *
     * Copyright (c) 2011 Joseph Cava-Lynch
     * MIT license
     */
                (function ($) {
                    $.isScrollToFixed = function (el) {
                        return !!$(el).data('ScrollToFixed');
                    };

                    $.ScrollToFixed = function (el, options) {
                        // To avoid scope issues, use 'base' instead of 'this' to reference this
                        // class from internal events and functions.
                        var base = this; // Access to jQuery and DOM versions of element.

                        base.$el = $(el);
                        base.el = el; // Add a reverse reference to the DOM object.

                        base.$el.data('ScrollToFixed', base); // A flag so we know if the scroll has been reset.

                        var isReset = false; // The element that was given to us to fix if scrolled above the top of
                        // the page.

                        var target = base.$el;
                        var position;
                        var originalPosition;
                        var originalFloat;
                        var originalOffsetTop;
                        var originalZIndex; // The offset top of the element when resetScroll was called. This is
                        // used to determine if we have scrolled past the top of the element.

                        var offsetTop = 0; // The offset left of the element when resetScroll was called. This is
                        // used to move the element left or right relative to the horizontal
                        // scroll.

                        var offsetLeft = 0;
                        var originalOffsetLeft = -1; // This last offset used to move the element horizontally. This is used
                        // to determine if we need to move the element because we would not want
                        // to do that for no reason.

                        var lastOffsetLeft = -1; // This is the element used to fill the void left by the target element
                        // when it goes fixed; otherwise, everything below it moves up the page.

                        var spacer = null;
                        var spacerClass;
                        var className; // Capture the original offsets for the target element. This needs to be
                        // called whenever the page size changes or when the page is first
                        // scrolled. For some reason, calling this before the page is first
                        // scrolled causes the element to become fixed too late.

                        function resetScroll() {
                            // Set the element to it original positioning.
                            target.trigger('preUnfixed.ScrollToFixed');
                            setUnfixed();
                            target.trigger('unfixed.ScrollToFixed'); // Reset the last offset used to determine if the page has moved
                            // horizontally.

                            lastOffsetLeft = -1; // Capture the offset top of the target element.

                            offsetTop = target.offset().top; // Capture the offset left of the target element.

                            offsetLeft = target.offset().left; // If the offsets option is on, alter the left offset.

                            if (base.options.offsets) {
                                offsetLeft += target.offset().left - target.position().left;
                            }

                            if (originalOffsetLeft == -1) {
                                originalOffsetLeft = offsetLeft;
                            }

                            position = target.css('position'); // Set that this has been called at least once.

                            isReset = true;

                            if (base.options.bottom != -1) {
                                target.trigger('preFixed.ScrollToFixed');
                                setFixed();
                                target.trigger('fixed.ScrollToFixed');
                            }
                        }

                        function getLimit() {
                            var limit = base.options.limit;
                            if (!limit) return 0;

                            if (typeof limit === 'function') {
                                return limit.apply(target);
                            }

                            return limit;
                        } // Returns whether the target element is fixed or not.


                        function isFixed() {
                            return position === 'fixed';
                        } // Returns whether the target element is absolute or not.


                        function isAbsolute() {
                            return position === 'absolute';
                        }

                        function isUnfixed() {
                            return !(isFixed() || isAbsolute());
                        } // Sets the target element to fixed. Also, sets the spacer to fill the
                        // void left by the target element.


                        function setFixed() {
                            // Only fix the target element and the spacer if we need to.
                            if (!isFixed()) {
                                //get REAL dimensions (decimal fix)
                                //Ref. http://stackoverflow.com/questions/3603065/how-to-make-jquery-to-not-round-value-returned-by-width
                                var dimensions = target[0].getBoundingClientRect(); // Set the spacer to fill the height and width of the target
                                // element, then display it.

                                spacer.css({
                                    'display': target.css('display'),
                                    'width': dimensions.width,
                                    'height': dimensions.height,
                                    'float': target.css('float')
                                }); // Set the target element to fixed and set its width so it does
                                // not fill the rest of the page horizontally. Also, set its top
                                // to the margin top specified in the options.

                                var cssOptions = {
                                    'z-index': base.options.zIndex,
                                    'position': 'fixed',
                                    'top': base.options.bottom == -1 ? getMarginTop() : '',
                                    'bottom': base.options.bottom == -1 ? '' : base.options.bottom,
                                    'margin-left': '0px'
                                };

                                if (!base.options.dontSetWidth) {
                                    cssOptions['width'] = target.css('width');
                                }

                                ;
                                target.css(cssOptions);
                                target.addClass(base.options.baseClassName);

                                if (base.options.className) {
                                    target.addClass(base.options.className);
                                }

                                position = 'fixed';
                            }
                        }

                        function setAbsolute() {
                            var top = getLimit();
                            var left = offsetLeft;

                            if (base.options.removeOffsets) {
                                left = '';
                                top = top - offsetTop;
                            }

                            var cssOptions = {
                                'position': 'absolute',
                                'top': top,
                                'left': left,
                                'margin-left': '0px',
                                'bottom': ''
                            };

                            if (!base.options.dontSetWidth) {
                                cssOptions['width'] = target.css('width');
                            }

                            ;
                            target.css(cssOptions);
                            position = 'absolute';
                        } // Sets the target element back to unfixed. Also, hides the spacer.


                        function setUnfixed() {
                            // Only unfix the target element and the spacer if we need to.
                            if (!isUnfixed()) {
                                lastOffsetLeft = -1; // Hide the spacer now that the target element will fill the
                                // space.

                                spacer.css('display', 'none'); // Remove the style attributes that were added to the target.
                                // This will reverse the target back to the its original style.

                                target.css({
                                    'z-index': originalZIndex,
                                    'width': '',
                                    'position': originalPosition,
                                    'left': '',
                                    'top': originalOffsetTop,
                                    'margin-left': ''
                                });
                                target.removeClass('scroll-to-fixed-fixed');

                                if (base.options.className) {
                                    target.removeClass(base.options.className);
                                }

                                position = null;
                            }
                        } // Moves the target element left or right relative to the horizontal
                        // scroll position.


                        function setLeft(x) {
                            // Only if the scroll is not what it was last time we did this.
                            if (x != lastOffsetLeft) {
                                // Move the target element horizontally relative to its original
                                // horizontal position.
                                target.css('left', offsetLeft - x); // Hold the last horizontal position set.

                                lastOffsetLeft = x;
                            }
                        }

                        function getMarginTop() {
                            var marginTop = base.options.marginTop;
                            if (!marginTop) return 0;

                            if (typeof marginTop === 'function') {
                                return marginTop.apply(target);
                            }

                            return marginTop;
                        } // Checks to see if we need to do something based on new scroll position
                        // of the page.


                        function checkScroll() {
                            if (!$.isScrollToFixed(target) || target.is(':hidden')) return;
                            var wasReset = isReset;
                            var wasUnfixed = isUnfixed(); // If resetScroll has not yet been called, call it. This only
                            // happens once.

                            if (!isReset) {
                                resetScroll();
                            } else if (isUnfixed()) {
                                // if the offset has changed since the last scroll,
                                // we need to get it again.
                                // Capture the offset top of the target element.
                                offsetTop = target.offset().top; // Capture the offset left of the target element.

                                offsetLeft = target.offset().left;
                            } // Grab the current horizontal scroll position.


                            var x = $(window).scrollLeft(); // Grab the current vertical scroll position.

                            var y = $(window).scrollTop(); // Get the limit, if there is one.

                            var limit = getLimit(); // If the vertical scroll position, plus the optional margin, would
                            // put the target element at the specified limit, set the target
                            // element to absolute.

                            if (base.options.minWidth && $(window).width() < base.options.minWidth) {
                                if (!isUnfixed() || !wasReset) {
                                    postPosition();
                                    target.trigger('preUnfixed.ScrollToFixed');
                                    setUnfixed();
                                    target.trigger('unfixed.ScrollToFixed');
                                }
                            } else if (base.options.maxWidth && $(window).width() > base.options.maxWidth) {
                                if (!isUnfixed() || !wasReset) {
                                    postPosition();
                                    target.trigger('preUnfixed.ScrollToFixed');
                                    setUnfixed();
                                    target.trigger('unfixed.ScrollToFixed');
                                }
                            } else if (base.options.bottom == -1) {
                                // If the vertical scroll position, plus the optional margin, would
                                // put the target element at the specified limit, set the target
                                // element to absolute.
                                if (limit > 0 && y >= limit - getMarginTop()) {
                                    if (!wasUnfixed && (!isAbsolute() || !wasReset)) {
                                        postPosition();
                                        target.trigger('preAbsolute.ScrollToFixed');
                                        setAbsolute();
                                        target.trigger('unfixed.ScrollToFixed');
                                    } // If the vertical scroll position, plus the optional margin, would
                                    // put the target element above the top of the page, set the target
                                    // element to fixed.

                                } else if (y >= offsetTop - getMarginTop()) {
                                    if (!isFixed() || !wasReset) {
                                        postPosition();
                                        target.trigger('preFixed.ScrollToFixed'); // Set the target element to fixed.

                                        setFixed(); // Reset the last offset left because we just went fixed.

                                        lastOffsetLeft = -1;
                                        target.trigger('fixed.ScrollToFixed');
                                    } // If the page has been scrolled horizontally as well, move the
                                    // target element accordingly.


                                    setLeft(x);
                                } else {
                                    // Set the target element to unfixed, placing it where it was
                                    // before.
                                    if (!isUnfixed() || !wasReset) {
                                        postPosition();
                                        target.trigger('preUnfixed.ScrollToFixed');
                                        setUnfixed();
                                        target.trigger('unfixed.ScrollToFixed');
                                    }
                                }
                            } else {
                                if (limit > 0) {
                                    if (y + $(window).height() - target.outerHeight(true) >= limit - (getMarginTop() || -getBottom())) {
                                        if (isFixed()) {
                                            postPosition();
                                            target.trigger('preUnfixed.ScrollToFixed');

                                            if (originalPosition === 'absolute') {
                                                setAbsolute();
                                            } else {
                                                setUnfixed();
                                            }

                                            target.trigger('unfixed.ScrollToFixed');
                                        }
                                    } else {
                                        if (!isFixed()) {
                                            postPosition();
                                            target.trigger('preFixed.ScrollToFixed');
                                            setFixed();
                                        }

                                        setLeft(x);
                                        target.trigger('fixed.ScrollToFixed');
                                    }
                                } else {
                                    setLeft(x);
                                }
                            }
                        }

                        function getBottom() {
                            if (!base.options.bottom) return 0;
                            return base.options.bottom;
                        }

                        function postPosition() {
                            var position = target.css('position');

                            if (position == 'absolute') {
                                target.trigger('postAbsolute.ScrollToFixed');
                            } else if (position == 'fixed') {
                                target.trigger('postFixed.ScrollToFixed');
                            } else {
                                target.trigger('postUnfixed.ScrollToFixed');
                            }
                        }

                        var windowResize = function windowResize(event) {
                            // Check if the element is visible before updating it's position, which
                            // improves behavior with responsive designs where this element is hidden.
                            if (target.is(':visible')) {
                                isReset = false;
                                checkScroll();
                            } else {
                                // Ensure the spacer is hidden
                                setUnfixed();
                            }
                        };

                        var windowScroll = function windowScroll(event) {
                            !!window.requestAnimationFrame ? requestAnimationFrame(checkScroll) : checkScroll();
                        }; // From: http://kangax.github.com/cft/#IS_POSITION_FIXED_SUPPORTED


                        var isPositionFixedSupported = function isPositionFixedSupported() {
                            var container = document.body;

                            if (document.createElement && container && container.appendChild && container.removeChild) {
                                var el = document.createElement('div');
                                if (!el.getBoundingClientRect) return null;
                                el.innerHTML = 'x';
                                el.style.cssText = 'position:fixed;top:100px;';
                                container.appendChild(el);
                                var originalHeight = container.style.height,
                                    originalScrollTop = container.scrollTop;
                                container.style.height = '3000px';
                                container.scrollTop = 500;
                                var elementTop = el.getBoundingClientRect().top;
                                container.style.height = originalHeight;
                                var isSupported = elementTop === 100;
                                container.removeChild(el);
                                container.scrollTop = originalScrollTop;
                                return isSupported;
                            }

                            return null;
                        };

                        var preventDefault = function preventDefault(e) {
                            e = e || window.event;

                            if (e.preventDefault) {
                                e.preventDefault();
                            }

                            e.returnValue = false;
                        }; // Initializes this plugin. Captures the options passed in, turns this
                        // off for devices that do not support fixed position, adds the spacer,
                        // and binds to the window scroll and resize events.


                        base.init = function () {
                            // Capture the options for this plugin.
                            base.options = $.extend({}, $.ScrollToFixed.defaultOptions, options);
                            originalZIndex = target.css('z-index'); // Turn off this functionality for devices that do not support it.
                            // if (!(base.options && base.options.dontCheckForPositionFixedSupport)) {
                            //     var fixedSupported = isPositionFixedSupported();
                            //     if (!fixedSupported) return;
                            // }
                            // Put the target element on top of everything that could be below
                            // it. This reduces flicker when the target element is transitioning
                            // to fixed.

                            base.$el.css('z-index', base.options.zIndex); // Create a spacer element to fill the void left by the target
                            // element when it goes fixed.

                            spacer = $('<div />');
                            position = target.css('position');
                            originalPosition = target.css('position');
                            originalFloat = target.css('float');
                            originalOffsetTop = target.css('top'); // Place the spacer right after the target element.

                            if (isUnfixed()) base.$el.after(spacer); // Reset the target element offsets when the window is resized, then
                            // check to see if we need to fix or unfix the target element.

                            $(window).bind('resize.ScrollToFixed', windowResize); // When the window scrolls, check to see if we need to fix or unfix
                            // the target element.

                            $(window).bind('scroll.ScrollToFixed', windowScroll); // For touch devices, call checkScroll directlly rather than
                            // rAF wrapped windowScroll to animate the element

                            if ('ontouchmove' in window) {
                                $(window).bind('touchmove.ScrollToFixed', checkScroll);
                            }

                            if (base.options.preFixed) {
                                target.bind('preFixed.ScrollToFixed', base.options.preFixed);
                            }

                            if (base.options.postFixed) {
                                target.bind('postFixed.ScrollToFixed', base.options.postFixed);
                            }

                            if (base.options.preUnfixed) {
                                target.bind('preUnfixed.ScrollToFixed', base.options.preUnfixed);
                            }

                            if (base.options.postUnfixed) {
                                target.bind('postUnfixed.ScrollToFixed', base.options.postUnfixed);
                            }

                            if (base.options.preAbsolute) {
                                target.bind('preAbsolute.ScrollToFixed', base.options.preAbsolute);
                            }

                            if (base.options.postAbsolute) {
                                target.bind('postAbsolute.ScrollToFixed', base.options.postAbsolute);
                            }

                            if (base.options.fixed) {
                                target.bind('fixed.ScrollToFixed', base.options.fixed);
                            }

                            if (base.options.unfixed) {
                                target.bind('unfixed.ScrollToFixed', base.options.unfixed);
                            }

                            if (base.options.spacerClass) {
                                spacer.addClass(base.options.spacerClass);
                            }

                            target.bind('resize.ScrollToFixed', function () {
                                spacer.height(target.height());
                            });
                            target.bind('scroll.ScrollToFixed', function () {
                                target.trigger('preUnfixed.ScrollToFixed');
                                setUnfixed();
                                target.trigger('unfixed.ScrollToFixed');
                                checkScroll();
                            });
                            target.bind('detach.ScrollToFixed', function (ev) {
                                preventDefault(ev);
                                target.trigger('preUnfixed.ScrollToFixed');
                                setUnfixed();
                                target.trigger('unfixed.ScrollToFixed');
                                $(window).unbind('resize.ScrollToFixed', windowResize);
                                $(window).unbind('scroll.ScrollToFixed', windowScroll);
                                target.unbind('.ScrollToFixed'); //remove spacer from dom

                                spacer.remove();
                                base.$el.removeData('ScrollToFixed');
                            }); // Reset everything.

                            windowResize();
                        }; // Initialize the plugin.


                        base.init();
                    }; // Sets the option defaults.


                    $.ScrollToFixed.defaultOptions = {
                        marginTop: 0,
                        limit: 0,
                        bottom: -1,
                        zIndex: 1000,
                        baseClassName: 'scroll-to-fixed-fixed'
                    }; // Returns enhanced elements that will fix to the top of the page when the
                    // page is scrolled.

                    $.fn.scrollToFixed = function (options) {
                        return this.each(function () {
                            new $.ScrollToFixed(this, options);
                        });
                    };
                })(jQuery);
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/product/notifyme.styl":
    /*!**********************************************!*\
      !*** ./src/components/product/notifyme.styl ***!
      \**********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/product/style.styl":
    /*!*******************************************!*\
      !*** ./src/components/product/style.styl ***!
      \*******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/product/zoom.styl":
    /*!******************************************!*\
      !*** ./src/components/product/zoom.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/qtds/index.js":
    /*!**************************************!*\
      !*** ./src/components/qtds/index.js ***!
      \**************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/qtds/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);

                $('.qtds').each(function () {
                    var more = $('.qtds__button--more', this);
                    var less = $('.qtds__button--less', this);
                    var input = $('.qtds__input', this);
                    var valueDefault = 1;
                    input.val(valueDefault);
                    input.trigger('qtds.change', [valueDefault]).change(function (evt) {
                        var value = parseInt(evt.target.value) || 0;

                        if (value <= 0) {
                            input.val(valueDefault);
                            input.trigger('qtds.change', [valueDefault]);
                        }
                    }).keyup(function () {
                        input.trigger('qtds.change', [input.val()]);
                    });
                    more.click(function (evt) {
                        evt.preventDefault();
                        var value = parseInt(input.val()) || 0;
                        input.val(++value);
                        input.trigger('qtds.change', [value]);
                    });
                    less.click(function (evt) {
                        evt.preventDefault();
                        var value = parseInt(input.val()) || 0;

                        if (value - 1 > 0) {
                            input.val(--value);
                            input.trigger('qtds.change', [value]);
                        }
                    });
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/qtds/style.styl":
    /*!****************************************!*\
      !*** ./src/components/qtds/style.styl ***!
      \****************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/quickview/index.js":
    /*!*******************************************!*\
      !*** ./src/components/quickview/index.js ***!
      \*******************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.styl */ "./src/components/quickview/index.styl");
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_0__);

                var body = $vtex('body');

                if (body.hasClass('quickview')) {
                    var linkProduct = sessionStorage.getItem('linkProduct');
                    $('.product__content-inner').append("<a class=\"product__more-link\" href=\"".concat(linkProduct, "\">Veja o Produto</a>"));
                    $('.fake__variations a').click(function (event) {
                        event.preventDefault();
                        window.parent.location.href = $(this).attr('href');
                    });
                }

                $('.showcase__quickview a').click(function () {
                    var link = $(this).closest('.showcase__item').find('.showcase__link');
                    sessionStorage.setItem('linkProduct', '');

                    if (link.length) {
                        sessionStorage.setItem('linkProduct', link.attr('href'));
                    }
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/quickview/index.styl":
    /*!*********************************************!*\
      !*** ./src/components/quickview/index.styl ***!
      \*********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/reset/index.styl":
    /*!*****************************************!*\
      !*** ./src/components/reset/index.styl ***!
      \*****************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/review/index.js":
    /*!****************************************!*\
      !*** ./src/components/review/index.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var Core_jquery_observe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Core/jquery.observe */ "./src/core/jquery.observe.js");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.styl */ "./src/components/review/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_1__);


                $(document).ready(function () {
                    var ratingTop = $('#spnRatingProdutoTop');

                    if (ratingTop.length) {
                        ratingTop.next().append(ratingTop.text());
                    }

                    ;
                    $('.product__review').on('click', '.product__title', function () {
                        $(this).closest('.product__review').addClass('on');
                    });
                    $('.product__review').on('click', '#resenha', function (evt) {
                        if ($(evt.target).attr('id') == 'resenha') $(this).closest('.product__review').removeClass('on');
                    });
                    $('.product__review').on('click', '#opcoes-avalie label', function () {
                        $(this).prev().each(function () {
                            this.click();
                        });
                    });
                    $('.product__review').on('click', '#lnkPubliqueResenha', function () {
                        $(this).closest('.product__review').addClass('review--publish');

                        if ($(window).width() > 991) {// $('html,body').animate({
                            //     scrollTop: $('#publishUserReview').offset().top - $('.wrapper__container > .header').outerHeight()
                            // }, 1000);
                        } else {
                            $('#opiniao_de_usuario').animate({
                                scrollTop: $('#publishUserReview').offset().top - $('.wrapper__container > .header').outerHeight()
                            }, 1000);
                        }
                    });
                    $('.product__review').on('click', '.formUserComment > h2', function () {
                        $(this).closest('.product__review').removeClass('review--publish');
                    });
                    $vtex(document).ajaxComplete(function (event, xhr, settings) {
                        if (settings.url.indexOf('publishuserreviewcomment') !== -1) {
                            var form = $('.formUserComment');
                            form.observe('childlist subtree', function (record) {
                                $('.product__review').removeClass('review--publish');
                            });
                        }
                    });
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/review/style.styl":
    /*!******************************************!*\
      !*** ./src/components/review/style.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/rulers/index.js":
    /*!****************************************!*\
      !*** ./src/components/rulers/index.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/rulers/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/rulers/style.styl":
    /*!******************************************!*\
      !*** ./src/components/rulers/style.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/schema/index.js":
    /*!****************************************!*\
      !*** ./src/components/schema/index.js ***!
      \****************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

    /* WEBPACK VAR INJECTION */(function ($) {
                function breadcrumb() {
                    var obj = [],
                        data = [],
                        url,
                        name;
                    $('.breadcrumb li').each(function (i) {
                        name = $(this).text();
                        url = $(this).find('a').attr('href');

                        if (!i == 0) {
                            if (url == undefined) {
                                url = window.location.href;
                            }

                            obj[i] = {
                                "@type": "ListItem",
                                "position": i + 1,
                                "item": {
                                    "@id": url,
                                    "name": name
                                }
                            };
                        } else {
                            obj[i] = {
                                "@type": "ListItem",
                                "position": 1,
                                "item": {
                                    "@id": url,
                                    "name": name
                                }
                            };
                        }
                    });
                    data = {
                        "@context": "http://schema.org",
                        "@type": "BreadcrumbList",
                        "name": "Beleza de Mulher",
                        "itemListElement": obj
                    };
                    var s = document.createElement("script");
                    var r = JSON.stringify(data);
                    s.type = "application/ld+json";
                    $(s).append(r);
                    document.body.appendChild(s);
                    return obj;
                }

                function product(data) {
                    // console.log(data);
                    var obj = [],
                        review = [],
                        revAuthor,
                        revDatePublished,
                        revDescription,
                        revName,
                        revBestRating,
                        revRatingValue,
                        revWorstRating,
                        name = data.name,
                        description = $('.productDescription').text(),
                        image = data.skus[0].image,
                        url = window.location.href,
                        offers,
                        aggregateRating,
                        ratingValue = 5,
                        reviewCount = 100,
                        installments = data.skus[0].installments,
                        highPrice = data.skus[0].listPrice,
                        lowPrice = data.skus[0].bestPrice;
                    aggregateRating = {
                        "@type": "AggregateRating",
                        "ratingValue": ratingValue,
                        "reviewCount": reviewCount
                    };
                    offers = {
                        "@type": "AggregateOffer",
                        "highPrice": highPrice,
                        "lowPrice": lowPrice,
                        "offerCount": installments,
                        "offers": {
                            "@type": "Offer",
                            "availability": "http://schema.org/InStock",
                            "price": lowPrice,
                            "priceCurrency": "BRL",
                            "url": url
                        }
                    }; // $('#yv-reviews .yv-row > meta').each(function (i) {
                    //     revAuthor = $j(this).find('+ .yv-col-md-2 strong[itemprop="reviewer"]').text();
                    //     revDatePublished = $j(this).find('~ .yv-col-md-8 meta[itemprop*="dtreviewed"]').attr('content');
                    //     revDescription = $j(this).find('~ .yv-col-md-8 p[itemprop="description"]').text();
                    //     revName = $j(this).find('~ .yv-col-md-8 .yv-row .yv-col-md-3:nth-child(3) div').html();
                    //     revBestRating = $j(this).find('~ .yv-col-md-8 meta[itemprop="rating"]').attr('content');
                    //     $j(this).find('~ .yv-col-md-8 .yv-row .yv-col-md-3:nth-child(1) i.fa-star').each(function (i) {
                    //         revRatingValue = i;
                    //     });
                    //     $j(this).find('~ .yv-col-md-8 .yv-row .yv-col-md-3:nth-child(1) i.fa-star').each(function (i) {
                    //         revWorstRating = i;
                    //     });
                    //     revRatingValue = revRatingValue + 1;
                    //     revWorstRating = revWorstRating + 1;
                    //     if (revAuthor != "") {
                    //         review[i] = {
                    //             "@type": "Review",
                    //             "author": revAuthor,
                    //             "datePublished": revDatePublished,
                    //             "description": revDescription,
                    //             "name": revName,
                    //             "reviewRating": {
                    //                 "@type": "Rating",
                    //                 "bestRating": revBestRating,
                    //                 "ratingValue": revRatingValue,
                    //                 "worstRating": revWorstRating
                    //             }
                    //         }
                    //     }
                    // });

                    obj = {
                        "@type": "Product",
                        "aggregateRating": aggregateRating,
                        "description": description,
                        "name": name,
                        "image": image,
                        "url": url,
                        "offers": offers // "review": review

                    };
                    var i = obj;
                    var s = document.createElement("script");
                    var r = JSON.stringify(i);
                    s.type = "application/ld+json";
                    $(s).append(r);
                    document.body.appendChild(s); // console.log(data)
                }

                function viewAction() {
                    var obj = {
                        "@context": "http://schema.org",
                        "@type": "ViewAction",
                        "name": "Beleza de Mulher",
                        "agent": {
                            "@type": "Person",
                            "name": "Beleza de Mulher"
                        },
                        "object": {
                            "@type": "Painting",
                            "name": "Loja de CosmÃ©ticos"
                        }
                    };
                    var i = obj;
                    var s = document.createElement("script");
                    var r = JSON.stringify(i);
                    s.type = "application/ld+json";
                    $(s).append(r);
                    document.body.appendChild(s);
                }

                viewAction();

                function home() {
                    var obj = {
                        "@context": "http://schema.org/",
                        "@type": "WebSite",
                        "name": "Beleza de Mulher",
                        "alternateName": "Beleza de Mulher: Loja de CosmÃ©ticos",
                        "url": "https://www.belezademulher.com.br/"
                    };
                    var i = obj;
                    var s = document.createElement("script");
                    var r = JSON.stringify(i);
                    s.type = "application/ld+json";
                    $(s).append(r);
                    document.body.appendChild(s);
                }

                function category() {
                    var page = '';

                    if (dataLayer[0].pageCategory == "InternalSiteSearch") {
                        page = dataLayer[0].siteSearchTerm;
                    }

                    if (dataLayer[0].pageCategory == "Category" || dataLayer[0].pageCategory == "Department") {
                        page = dataLayer[0].categoryName;
                    }

                    var obj = {
                        "@context": "http://schema.org/",
                        "@type": "WebSite",
                        "name": "Beleza de Mulher",
                        "alternateName": "Beleza de Mulher CosmÃ©ticos",
                        "url": window.location.hostname,
                        "potentialAction": {
                            "@type": "SearchAction",
                            "name": document.title,
                            "target": window.location.href,
                            "query-input": "required name=" + page
                        }
                    };
                    var i = obj;
                    var s = document.createElement("script");
                    var r = JSON.stringify(i);
                    s.type = "application/ld+json";
                    $(s).append(r);
                    document.body.appendChild(s);
                }

                if ($('body#home').length) {
                    home();
                }

                if ($('body#category').length) {
                    breadcrumb();
                    category();
                }

                if ($('body#product-page').length) {
                    breadcrumb();
                    vtexjs.catalog.getCurrentProductWithVariations().done(function (data) {
                        product(data);
                    });
                }
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/search/index.js":
    /*!****************************************!*\
      !*** ./src/components/search/index.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.styl */ "./src/components/search/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _core_functions_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/functions/index */ "./src/core/functions/index.js");



                var arrCategory = [];

                function categorysList() {
                    var list = '',
                        name = '',
                        names = '';
                    $(arrCategory).each(function (i, e) {
                        var expr = /[/]/g;
                        name = e.replace(expr, '>');
                        name = name.substr(1);
                        name = name.substring(0, name.length - 1);
                        names += name;
                        list += "\n            <li class=\"search__sugestion-item\">\n                <a href=\"".concat(e, "\">\n                    <span class=\"search__product-item-content\">\n                        <span>").concat(name, "</span>\n                    </span>\n                </a>\n            </li>\n        ");
                    });
                    $('#search__result .search__sugestion-list-02').html(list);
                } // CONSTRUCT SEARCH


                function productsList(product) {
                    var name = product[0].items[0].name,
                        link = product[0].link,
                        image = product[0].items[0].images[0].imageUrl,
                        price = product[0].items[0].sellers[0].commertialOffer.Price.toFixed(2),
                        realPrice = price != 0 ? "<strong search__price>".concat(Object(_core_functions_index__WEBPACK_IMPORTED_MODULE_2__["currency"])(price), "</strong>") : "<strong search__price>Esgotado</strong>",
                        categorys = product[0].categories;
                    arrCategory = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(arrCategory), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(categorys));
                    arrCategory = Array.from(new Set(arrCategory));
                    var list = '';
                    list += "\n        <li class=\"search__product-item\">\n            <a href=\"".concat(link, "\" title=\"").concat(name, "\">\n                <img src=\"").concat(image, "\" alt=\"").concat(name, "\">\n                <span class=\"search__product-item-content\">\n                    <span>").concat(name, "</span>\n                    ").concat(realPrice, "\n                </span>\n            </a>\n        </li>\n    ");
                    $('#search__result .search__product-list').append(list);
                    $('#search__input').removeClass('loading');
                    categorysList();
                } //SUGESTIONS


                function sugestionList(sugestion) {
                    var list = '',
                        name = '',
                        link = '';
                    $(sugestion).each(function (i, e) {
                        name = e.name;
                        link = e.link;
                        list += "\n            <li class=\"search__sugestion-item\">\n                <a href=\"".concat(link, "\" title=\"").concat(name, "\">\n                    <span class=\"search__product-item-content\">\n                        <span>").concat(name, "</span>\n                    </span>\n                </a>\n            </li>\n        ");
                    });
                    $('#search__result .search__sugestion-list-01').append(list);
                    $('#search__input').removeClass('loading');
                } // FILTER PRODUCT ID


                function productSplit(data) {
                    var list = data.itemsReturned,
                        sku = [],
                        sugestion = [];
                    arrCategory = [];
                    $(list).each(function (i, e) {
                        if (e.items != '') {
                            sku[i] = e.items[0].productId;
                            $.getJSON('/api/catalog_system/pub/products/search?fq=skuId:' + e.items[0].productId, function (data) {
                                productsList(data);
                            });
                        } else {
                            sugestion[i] = {
                                name: e.name,
                                link: e.href
                            };
                        }
                    });
                    $('.search__product-list, .search__sugestion-list').html('');
                    sugestionList(sugestion);
                    categorysList();
                } // SEARCH GET AUTOCOMPLETE


                function searchGET(data) {
                    var settings = {
                        url: '/buscaautocomplete/?maxRows=8&productNameContains=' + data,
                        method: 'GET',
                        timeout: 0
                    };
                    $.ajax(settings).done(function (response) {
                        $('.search__product-list, .search__sugestion-list').html('');

                        if (response.itemsReturned[0] != undefined) {
                            productSplit(response);
                        } else {
                            $('.search__product-list, .search__sugestion-list').html('');
                            $('#search__result').removeClass('active');
                            $('#search__input').removeClass('loading');
                        }
                    });
                } // CHANGE INPUT SEARCH


                var typingTimer; //timer identifier

                var doneTypingInterval = 100; //time in ms, 1 second for example

                $('[data-search="true"] #search__input').keyup(function () {
                    clearTimeout(typingTimer);
                    var text = $(this).val();

                    if (text.length >= 1) {
                        $(this).closest('.search__container').addClass('active');
                    } else {
                        $(this).closest('.search__container').removeClass('active');
                    }

                    if (text.length >= 1) {
                        $(this).addClass('loading');
                        typingTimer = setTimeout(function () {
                            doneTyping(text);
                            $('#search__result').addClass('active');
                        }, doneTypingInterval);
                    } else {
                        $('.search__product-list, .search__sugestion-list').html('');
                        $('#search__input').removeClass('loading');
                        $('#search__result').removeClass('active');
                    }
                }); //user is "finished typing," do something

                function doneTyping(data) {
                    $('.search__product-list, .search__sugestion-list').html('');

                    if (!$('#search__result').length) {
                        $('[data-search="true"]').after("\n            <div id=\"search__result\">\n                <div class=\"search__content\">\n                    <div class=\"search__sugestion\">\n                        <h4 class=\"search__title\">Sugest\xF5es</h4>\n                        <ul class=\"search__sugestion-list search__sugestion-list-01\"></ul>\n                    </div>\n                    <div class=\"search__product\">\n                        <h4 class=\"search__title\">Produto</h4>\n                        <ul class=\"search__product-list\"></ul>\n                    </div>\n                </div>\n                <button class=\"search__button\" type=\"button\">ver mais produtos</button>\n            </div>");
                        $('.search__button').click(function (e) {
                            e.preventDefault();
                            var val = $('#search__input').val();
                            postSearchUrl(val);
                        });
                    }

                    searchGET(data);
                }

                $('.search__container').click(function (e) {
                    if ($(e.target).hasClass('search__container')) {
                        $('#search__result').removeClass('active');
                        $('.search__container').removeClass('active');
                    }
                });
                $('#search__button').click(function (e) {
                    var val = $('#search__input').val();
                    postSearchUrl(val);
                });
                $(document).keypress(function (event) {
                    var keycode = event.keyCode ? event.keyCode : event.which;

                    if (keycode == '13') {
                        if ($('.search__container.active')) {
                            var val = $('#search__input').val();
                            postSearchUrl(val);
                        }
                    }
                });

                function postSearchUrl(val) {
                    window.location.href = '/' + val;
                }
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/search/style.styl":
    /*!******************************************!*\
      !*** ./src/components/search/style.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/security/index.js":
    /*!******************************************!*\
      !*** ./src/components/security/index.js ***!
      \******************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/security/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/security/style.styl":
    /*!********************************************!*\
      !*** ./src/components/security/style.styl ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/showcase/index.js":
    /*!******************************************!*\
      !*** ./src/components/showcase/index.js ***!
      \******************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/showcase/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);

                $('.showcase').each(function () {
                    var title = $(this).find('h2');

                    if (title.length) {
                        var text = title.text().split('-');

                        if (text.length > 1) {
                            title.html("<strong>".concat(text[0], "</strong> ").concat(text[1]));
                        }
                    }

                    title.addClass('showcase__title').addClass('showcase__title--actived');
                });
                $(".showcase-tabs__tabs-item").click(function () {
                    $(".showcase-tabs__tabs-item").removeClass("showcase-tabs__tabs-item--active");
                    $(this).addClass("showcase-tabs__tabs-item--active");
                    var showcase = "." + $(this).attr("data-showcase");
                    $(".showcase-tabs__showcase .showcase").removeClass("showcase--active");
                    $(showcase).addClass("showcase--active");
                });

                if ($('body').hasClass('quickview')) {
                    var linkProduct = sessionStorage.getItem('linkProduct');
                    $("div.product__page>a").attr("href", linkProduct);
                }

                $('.showcase').on('click', '.showcase__quickview', function () {
                    var link = $(this).closest('.showcase__item').find('.showcase__link');
                    sessionStorage.setItem('linkProduct', '');

                    if (link.length) {
                        sessionStorage.setItem('linkProduct', link.attr('href'));
                    }

                    $(this).find('a').trigger('click');
                });
                $('.brand__list').slick({
                    infinite: true,
                    arrows: true,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    dots: false,
                    responsive: [{
                        breakpoint: 991,
                        settings: 'unslick'
                    }]
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/showcase/style.styl":
    /*!********************************************!*\
      !*** ./src/components/showcase/style.styl ***!
      \********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/sidebar/index.js":
    /*!*****************************************!*\
      !*** ./src/components/sidebar/index.js ***!
      \*****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.styl */ "./src/components/sidebar/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var Core_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Core/functions */ "./src/core/functions/index.js");




                var body = $('body');
                var cores = $('.sidebar .Cores a');
                var h5 = $('.sidebar h5');
                $('.sidebar__button--open').click(function () {
                    body.addClass('sidebar--open');
                });
                $('.sidebar__button--close').click(function () {
                    body.removeClass('sidebar--open');
                });
                $('.sidebar__container').click(function (evt) {
                    if ($(evt.target).hasClass('sidebar__container')) {
                        body.removeClass('sidebar--open');
                    }
                });

                _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!cores.length) {
                                        _context.next = 3;
                                        break;
                                    }

                                    _context.next = 3;
                                    return cores.each(function () {
                                        var _this = this;

                                        var url = '/arquivos/' + Object(Core_functions__WEBPACK_IMPORTED_MODULE_3__["slug"])($(this).attr('title')) + '.jpg';
                                        var image = new Image();
                                        var text = $(this).text();
                                        $(this).html('');
                                        $(this).prepend("<span>".concat(text, "</span>"));

                                        image.onload = function () {
                                            $(_this).prepend(image);
                                            $(_this).closest('li').addClass('thumb');
                                        };

                                        image.onerror = function () {
                                            $(_this).closest('li').addClass('not-thumb');
                                        };

                                        image.src = url;
                                    });

                                case 3:
                                    if (!h5.length) {
                                        _context.next = 6;
                                        break;
                                    }

                                    _context.next = 6;
                                    return h5.each(function () {
                                        var fieldset = $(this).closest('fieldset');
                                        fieldset.find('label').each(function () {
                                            var text = $(this).text();
                                            $(this).html($(this).html().replace(text, ''));
                                            $(this).append($('<span>').append(text));
                                        });

                                        if ($(this).text() == 'Cores') {
                                            $(this).next().addClass('fields-thumbs');
                                            fieldset.find('label:not(.thumb) input').each(function () {
                                                var url = '/arquivos/' + Object(Core_functions__WEBPACK_IMPORTED_MODULE_3__["slug"])($(this).val()) + '.jpg';
                                                var image = new Image();
                                                var html = $(this).closest('label');

                                                image.onload = function () {
                                                    html.find('input').after($('<span class="image">').append(image));
                                                    html.addClass('thumb');
                                                };

                                                image.onerror = function () {
                                                    html.addClass('not-thumb');
                                                };

                                                image.src = url;
                                            });
                                        }
                                    });

                                case 6:
                                    $('.fields-thumbs .filtro-ativo').each(function () {
                                        var _this2 = this;

                                        var url = '/arquivos/' + Object(Core_functions__WEBPACK_IMPORTED_MODULE_3__["slug"])($(this).text()) + '.jpg';
                                        var image = new Image();
                                        var text = $(this).text();
                                        $(this).html($(this).html().replace(text, ''));
                                        $(this).append("<span>".concat(text, "</span>"));

                                        image.onload = function () {
                                            $(_this2).append(image);
                                            $(_this2).addClass('thumb');
                                        };

                                        image.src = url;
                                    });
                                    $('.search-multiple-navigator .fields-thumbs .ver-filtros').not('.thumb').not('.not-thumb').each(function () {
                                        var label = $(this).closest('.fields-thumbs').find('label');
                                        var url = '/arquivos/' + Object(Core_functions__WEBPACK_IMPORTED_MODULE_3__["slug"])(label.text()) + '.jpg';
                                        var image = new Image();

                                        image.onload = function () {
                                            label.append(image);
                                            label.addClass('thumb');
                                        };

                                        image.src = url;
                                    });

                                case 8:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee);
                }))();

                $('.search-single-navigator h5').on('click', function () {
                    $(this).toggleClass('open__nav');
                });
                var allproducts = $("h3.conselheiro + ul.productClusterSearchableIds a[title='All products']");

                if (allproducts) {
                    if (allproducts.text().indexOf('All products') !== -1) {
                        var total = allproducts.text().split(' ')[2];
                        allproducts.attr('title', 'Todos produtos');
                        allproducts.text("Todos produtos ".concat(total));
                    }
                }
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/sidebar/style.styl":
    /*!*******************************************!*\
      !*** ./src/components/sidebar/style.styl ***!
      \*******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/slick/index.js":
    /*!***************************************!*\
      !*** ./src/components/slick/index.js ***!
      \***************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
    /* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
    /* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.styl */ "./src/components/slick/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_2__);




                if ($('#blackfriday-page')) {
                    $('.helperComplement').remove();
                }

                $('.banner--category .banner__container').slick({
                    infinite: false,
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                });
                $('#blackfriday-page .products_showcase > div > ul').slick({
                    infinite: true,
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2
                        }
                    }]
                });
                $('.showcase-tabs__showcase .showcase__container > div > ul').slick({
                    infinite: false,
                    arrows: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: false,
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 4,
                            dots: true
                        }
                    }, {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            arrows: false,
                            dots: true
                        }
                    }, {
                        breakpoint: 520,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            arrows: false,
                            dots: true
                        }
                    }]
                });
                $('[data-carousel]').each(function () {
                    var type = $(this).attr('data-carousel');
                    var config = {};

                    switch (type) {
                        case 'one':
                            config.autoplay = true;
                            config.autoplaySpeed = 5000;
                            config.responsive = [{
                                breakpoint: 992,
                                settings: {
                                    dots: true,
                                    arrows: false
                                }
                            }];
                            break;

                        case 'three':
                            config.variableWidth = true;
                            config.responsive = [{
                                breakpoint: 992,
                                settings: {
                                    centerMode: true
                                }
                            }];
                            break;

                        case 'duo':
                            config.slidesToShow = 2;
                            config.slidesToScroll = 2;
                            break;

                        case 'showcase':
                            config.slidesToShow = 5;
                            config.slidesToScroll = 5;
                            config.arrows = true;
                            config.dots = false;
                            config.responsive = [{
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: 4,
                                    slidesToScroll: 4
                                }
                            }, {
                                breakpoint: 991,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    arrows: false,
                                    dots: true
                                }
                            }, {
                                breakpoint: 520,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                    arrows: false,
                                    dots: true
                                }
                            }];
                            break;

                        case 'miniBanner':
                            config.slidesToShow = 4;
                            config.slidesToScroll = 4;
                            config.arrows = false;
                            config.dots = false;
                            config.responsive = [{
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                    dots: true
                                }
                            }, {
                                breakpoint: 720,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                    dots: true
                                }
                            }];
                            break;

                        case 'miniVal':
                            config.slidesToShow = 4;
                            config.slidesToScroll = 4;
                            config.arrows = true;
                            config.dots = false;
                            config.responsive = [{
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            }, {
                                breakpoint: 425,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }];
                            break;

                        case 'gift':
                            config.slidesToShow = 1;
                            config.slidesToScroll = 1;
                            config.dots = false;
                            config.responsive = [{
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3
                                }
                            }, {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2
                                }
                            }, {
                                breakpoint: 425,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }];
                            break;
                    }

                    if ($.inArray(type, ['showcase', 'gift']) != -1) {
                        $(this).find('.helperComplement').remove();
                        $(this).find('> div > ul').slick(config);
                    } else if (type == 'buytobether') { } else {
                        $(this).slick(config);
                    }
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/slick/style.styl":
    /*!*****************************************!*\
      !*** ./src/components/slick/style.styl ***!
      \*****************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/social/index.js":
    /*!****************************************!*\
      !*** ./src/components/social/index.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.styl */ "./src/components/social/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/social/style.styl":
    /*!******************************************!*\
      !*** ./src/components/social/style.styl ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/sumoselect/index.js":
    /*!********************************************!*\
      !*** ./src/components/sumoselect/index.js ***!
      \********************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var sumoselect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sumoselect */ "./node_modules/sumoselect/jquery.sumoselect.js");
    /* harmony import */ var sumoselect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sumoselect__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var sumoselect_sumoselect_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sumoselect/sumoselect.css */ "./node_modules/sumoselect/sumoselect.css");
    /* harmony import */ var sumoselect_sumoselect_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sumoselect_sumoselect_css__WEBPACK_IMPORTED_MODULE_1__);


                $(document).ready(function () {
                    if ($.fn.SumoSelect) $('.orderBy select').SumoSelect();
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/components/tb/index.js":
    /*!************************************!*\
      !*** ./src/components/tb/index.js ***!
      \************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.styl */ "./src/components/tb/index.styl");
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/tb/index.styl":
    /*!**************************************!*\
      !*** ./src/components/tb/index.styl ***!
      \**************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/components/wrapper/index.js":
    /*!*****************************************!*\
      !*** ./src/components/wrapper/index.js ***!
      \*****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.styl */ "./src/components/wrapper/index.styl");
    /* harmony import */ var _index_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_styl__WEBPACK_IMPORTED_MODULE_0__);


            /***/
        }),

    /***/ "./src/components/wrapper/index.styl":
    /*!*******************************************!*\
      !*** ./src/components/wrapper/index.styl ***!
      \*******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/core/config.json":
    /*!******************************!*\
      !*** ./src/core/config.json ***!
      \******************************/
    /*! exports provided: host, debug, scrollTop, wishlist, seller, default */
    /***/ (function (module) {

            module.exports = JSON.parse("{\"host\":\"https://wawcadeiras.vtexcommercestable.com.br\",\"debug\":false,\"scrollTop\":{\"debug\":true,\"enabled\":true,\"scrollingTop\":true,\"scrollingDown\":true},\"wishlist\":{\"enabled\":true},\"seller\":{\"id\":\"1\",\"name\":\"wawcadeiras\",\"channel\":\"1\"}}");

            /***/
        }),

    /***/ "./src/core/functions/descount.js":
    /*!****************************************!*\
      !*** ./src/core/functions/descount.js ***!
      \****************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/core/functions/index.js");
                /**
                 * Desconto no Boleto
                 */


                function descount() {
                    var labels = Array.from(document.querySelectorAll('.showcase__item [class*=desconto-avista-]'));
                    labels.forEach(function (label) {
                        var item = label.closest('.showcase__item');

                        if (!item.classList.contains('has--discount')) {
                            var percent = Object(_index__WEBPACK_IMPORTED_MODULE_0__["onlyFloat"])(label.innerHTML);
                            var price = Object(_index__WEBPACK_IMPORTED_MODULE_0__["onlyFloat"])(item.querySelector('.valor-por').innerHTML);
                            item.querySelector('.price__in-cash').innerHTML = '<strong>' + Object(_index__WEBPACK_IMPORTED_MODULE_0__["percentPrice"])(price, percent) + '</strong> Ã  vista no boleto';
                            item.classList.add('has--discount');
                        }
                    });
                }

                document.addEventListener('DOMContentLoaded', function () {
                    descount();
                });
                $(document).ajaxStop(function () {
                    descount();
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/core/functions/index.js":
    /*!*************************************!*\
      !*** ./src/core/functions/index.js ***!
      \*************************************/
    /*! exports provided: log, scrollTop, slug, currency, onlyFloat, params, percentPrice, percentDiscount, buttonBuy, buttonMoreLess, onlyNumber, ajustPercent */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function () { return log; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTop", function () { return scrollTop; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slug", function () { return slug; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currency", function () { return currency; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyFloat", function () { return onlyFloat; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "params", function () { return params; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentPrice", function () { return percentPrice; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentDiscount", function () { return percentDiscount; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonBuy", function () { return buttonBuy; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonMoreLess", function () { return buttonMoreLess; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlyNumber", function () { return onlyNumber; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ajustPercent", function () { return ajustPercent; });
    /* harmony import */ var _descount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./descount */ "./src/core/functions/descount.js");
    /* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.json */ "./src/core/config.json");
                var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config.json */ "./src/core/config.json", 1);


                /**
                 * Console Log
                 * @param msg
                 * @param debug
                 */

                function log(msg) {
                    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    if (_config_json__WEBPACK_IMPORTED_MODULE_1__.debug && debug) console.log(msg);
                }
                /**
                 * ScrollTop
                 * - Adiciona class no body na movimentaÃ§Ã£o do scroll da pagina
                 */

                function scrollTop() {
                    var currentScrollTop = 0;

                    var scrolling = function scrolling() {
                        var body = $('body');
                        var scrollTop = $(window).scrollTop();
                        var startTop = $('#header').outerHeight();
                        log(['// ---- Scrolling Active Start ---- //'], _config_json__WEBPACK_IMPORTED_MODULE_1__.scrollTop.debug);
                        if (scrollTop > startTop) body.addClass('scrolling'); else body.removeClass('scrolling');
                        log(['Scrolling Top: ', _config_json__WEBPACK_IMPORTED_MODULE_1__.scrollTop.scrollingTop], _config_json__WEBPACK_IMPORTED_MODULE_1__.scrollTop.debug);
                        if (_config_json__WEBPACK_IMPORTED_MODULE_1__.scrollTop.scrollingTop) if (scrollTop < currentScrollTop && scrollTop > 0) {
                            body.addClass('scrolling--top');
                            log(['Scrolling Top Add '], _config_json__WEBPACK_IMPORTED_MODULE_1__.scrollTop.debug);
                        } else {
                            body.removeClass('scrolling--top');
                            log(['Scrolling Top Remove '], _config_json__WEBPACK_IMPORTED_MODULE_1__.scrollTop.debug);
                        }
                        if (_config_json__WEBPACK_IMPORTED_MODULE_1__.scrollTop.scrollingDown) if (scrollTop > currentScrollTop && scrollTop > 0) {
                            body.addClass('scrolling--down');
                            log(['Scrolling Down Add '], _config_json__WEBPACK_IMPORTED_MODULE_1__.scrollTop.debug);
                        } else {
                            body.removeClass('scrolling--down');
                            log(['Scrolling Down Remove '], _config_json__WEBPACK_IMPORTED_MODULE_1__.scrollTop.debug);
                        }
                        currentScrollTop = scrollTop;
                        log(['Scrolling Current: ', currentScrollTop], _config_json__WEBPACK_IMPORTED_MODULE_1__.scrollTop.debug);
                        log(['// ---- Scrolling Active End ---- //'], _config_json__WEBPACK_IMPORTED_MODULE_1__.scrollTop.debug);
                    };

                    $(window).scroll(scrolling);
                    scrolling();
                }
                /**
                 * Slug
                 * - Troca caracteres especiais
                 * @param str
                 * @returns {*}
                 */

                function slug(str) {
                    str = str.toString();
                    str = str.replace(/^\s+|\s+$/g, '');
                    str = str.toLowerCase();
                    var from = "Ã Ã¡Ã¤Ã¢Ã£Ã¨Ã©Ã«ÃªÃ¬Ã­Ã¯Ã®ÃµÃ²Ã³Ã¶Ã´Ã¹ÃºÃ¼Ã»Ã±Ã§Â·/_,:;";
                    var to = "aaaaaeeeeiiiiooooouuuunc------";

                    for (var i = 0, l = from.length; i < l; i++) {
                        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
                    }

                    str = str.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
                    return str;
                }
                /**
                 * Currency
                 * - Transforma o valor em moeda
                 * @param value
                 * @returns {string}
                 */

                function currency(value) {
                    var tmp = value.toString().replace(/[^0-9]/g, '');
                    tmp = tmp.replace(/([0-9]{2})$/g, ",$1");

                    if (tmp.length > 6) {
                        tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
                    }

                    return 'R$ ' + tmp;
                }
                /**
                 * Only Float
                 * - em uma string pega o valor e transforma em float
                 * @param string
                 * @returns {number}
                 */

                function onlyFloat(string) {
                    string = string.toString().replace(/[^0-9]/g, '').replace(/([0-9]{2})$/g, ",$1");
                    if (string.length > 6) string = string.replace(/([0-9]{3}),([0-9]{2}$)/g, "$1.$2");
                    return parseFloat(string.match(/\d+/g)[0] + '.' + string.match(/\d+/g)[1]);
                }
                /**
                 * Params
                 * - Retorna um objeto com os valores do parametros de uma url
                 * @param url
                 * @returns {{}}
                 */

                function params(url) {
                    var vars = {};
                    url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
                        vars[key] = value;
                    });
                    return vars;
                }
                /**
                 * urlParameter
                 * - Troca o valor do parametro da url
                 * @param url
                 * @param paramName
                 * @param paramValue
                 * @returns {string}
                 */

                function urlParameter(url, paramName, paramValue) {
                    var hash = location.hash;
                    url = url.replace(hash, '');
                    if (typeof url !== 'string') return url;

                    if (url.indexOf(paramName + "=") >= 0) {
                        var prefix = url.substring(0, url.indexOf(paramName));
                        var suffix = url.substring(url.indexOf(paramName));
                        suffix = suffix.substring(suffix.indexOf("=") + 1);
                        suffix = suffix.indexOf("&") >= 0 ? suffix.substring(suffix.indexOf("&")) : "";
                        url = prefix + paramName + "=" + paramValue + suffix;
                    } else {
                        if (url.indexOf("?") < 0) url += "?" + paramName + "=" + paramValue; else url += "&" + paramName + "=" + paramValue;
                    }

                    return url + hash;
                }
                /**
                 * Percent Price
                 * - Retorna o valor calculado de acordo com a porcentagem passada
                 * @param price
                 * @param percent
                 * @returns {string}
                 */


                function percentPrice(price, percent) {
                    var perc = 100 - percent;
                    var priceNew = (price * perc / 100).toFixed(2);
                    return currency(priceNew);
                }
                /**
                 * Calc Percent
                 * - Retorna o valor do desconto em percent
                 */

                function percentDiscount(priceDe, pricePor) {
                    var discount = pricePor * 100 / priceDe;
                    discount = 100 - discount;
                    return parseInt(discount);
                }
                /**
                 * Buy Button
                 * - BotÃ£o de compra
                 */

                function buttonBuy() {
                    var buttonsClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.product__left';
                    var buyClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".buy-button";
                    var inputClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.buy-button__input';
                    var buttons = Array.from(document.querySelectorAll(buttonsClass));
                    var body = document.querySelector('body');
                    buttons.forEach(function (box) {
                        var button = box.querySelector(buyClass);
                        var qtd = box.querySelector(inputClass);

                        if (button) {
                            button.addEventListener('click', function (e) {
                                if (button.getAttribute('href').indexOf('javascript') === -1) {
                                    e.preventDefault();
                                    var href = urlParameter(button.getAttribute('href'), 'qty', qtd.value ? qtd.value : 1);
                                    if (body.classList.contains('quickview')) window.parent.location.href = href; else window.location.href = href;
                                }
                            });
                        }
                    });
                }
                /**
                 *  buttonMoreLess
                 *  - BotÃ£o de Quantidade Mais e Menos
                 */

                function buttonMoreLess() {
                    var boxClass = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ".buy-button__qtd";
                    var inputClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.buy-button__input';
                    var moreClass = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.buy-button__more';
                    var lessClass = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '.buy-button__less';
                    var buttons = Array.from(document.querySelectorAll(boxClass));
                    buttons.forEach(function (box) {
                        var qtd = box.querySelector(inputClass);
                        var more = box.querySelector(moreClass);
                        var less = box.querySelector(lessClass);
                        onlyNumber(qtd);
                        more.addEventListener('click', function () {
                            qtd.value++;
                            $(qtd).trigger('input');
                        });
                        less.addEventListener('click', function () {
                            if (qtd.value > 1) qtd.value--;
                            $(qtd).trigger('input');
                        });
                    });
                }
                /**
                 *  Only Number
                 */

                function onlyNumber(input) {
                    input.addEventListener('keydown', function (e) {
                        if (!(Number.isInteger(parseInt(e.key)) || [8, 37, 38, 39, 40].indexOf(e.keyCode) !== -1)) e.preventDefault();
                    });
                    input.addEventListener('change', function () {
                        if (input.value.trim() == '' || input.value.trim() < 1) input.value = 1;
                        $(input).trigger('input');
                    });
                }
                function ajustPercent() {
                    $('.labels__item--percent:not(.on)').each(function () {
                        $(this).addClass('on');
                        var perc = $.trim($(this).text());
                        perc = perc.replace('%', '').replace(',', '.');

                        if (perc) {
                            perc = parseInt(perc);

                            if (perc) {
                                $(this).html(perc + '%');
                            }
                        }
                    });
                }
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/core/functions/zoom.js":
    /*!************************************!*\
      !*** ./src/core/functions/zoom.js ***!
      \************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony default export */ __webpack_exports__["default"] = (function () {
                if (typeof $vtex == 'function') {
                    var $ = $vtex;

                    if ($('.image-zoom').length) {
                        var resetZoom = function resetZoom() {
                            window.LoadZoom = function () {
                                var optionsZoom = {
                                    zoomType: 'innerzoom',
                                    zoomWidth: $vtex('.image-zoom').width(),
                                    zoomHeight: $vtex('.image-zoom').height()
                                };
                                $(".image-zoom").jqzoom(optionsZoom);
                            };

                            LoadZoom(0);
                        };

                        resetZoom();
                        $(window).resize(function () {
                            return resetZoom();
                        });
                    }
                }
            });

            /***/
        }),

    /***/ "./src/core/getProductById.js":
    /*!************************************!*\
      !*** ./src/core/getProductById.js ***!
      \************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return getProductById; });
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



            var SESSION_PRODUCTS_ALL = 'SESSION_PRODUCTS_ALL-OLD';
            function getProductById(_x) {
                return _getProductById.apply(this, arguments);
            }

            function _getProductById() {
                _getProductById = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(id) {
                    var products, product, request, item;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    _context.prev = 0;
                                    products = JSON.parse(JSON.parse(JSON.stringify(sessionStorage.getItem(SESSION_PRODUCTS_ALL)))) || [];
                                    product = products.filter(function (p) {
                                        return p.id == id;
                                    }).map(function (p) {
                                        return p.product;
                                    });

                                    if (!product.length) {
                                        _context.next = 5;
                                        break;
                                    }

                                    return _context.abrupt("return", product[0]);

                                case 5:
                                    _context.next = 7;
                                    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/api/catalog_system/pub/products/search/?fq=productId:".concat(id, "&").concat(Math.floor(100000 + Math.random() * 900000)));

                                case 7:
                                    request = _context.sent;

                                    if (!(request.data.length === 0)) {
                                        _context.next = 10;
                                        break;
                                    }

                                    return _context.abrupt("return", null);

                                case 10:
                                    item = {};
                                    item.id = id;
                                    item.product = request.data[0];
                                    products.push(item);
                                    sessionStorage.setItem(SESSION_PRODUCTS_ALL, JSON.stringify(products));
                                    return _context.abrupt("return", item.product);

                                case 18:
                                    _context.prev = 18;
                                    _context.t0 = _context["catch"](0);
                                    throw 'Erro na RequisiÃ§Ã£o';

                                case 21:
                                case "end":
                                    return _context.stop();
                            }
                        }
                    }, _callee, null, [[0, 18]]);
                }));
                return _getProductById.apply(this, arguments);
            }

            /***/
        }),

    /***/ "./src/core/index.js":
    /*!***************************!*\
      !*** ./src/core/index.js ***!
      \***************************/
    /*! exports provided: isMobile */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function () { return isMobile; });
    /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ "./src/core/functions/index.js");
    /* harmony import */ var _polyfill_addeventlistener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfill/addeventlistener */ "./src/core/polyfill/addeventlistener.js");
    /* harmony import */ var _polyfill_addeventlistener__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polyfill_addeventlistener__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _polyfill_closest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./polyfill/closest */ "./src/core/polyfill/closest.js");
    /* harmony import */ var _polyfill_closest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_polyfill_closest__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var _polyfill_padStart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./polyfill/padStart */ "./src/core/polyfill/padStart.js");
    /* harmony import */ var _polyfill_padStart__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_polyfill_padStart__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var _polyfill_format__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./polyfill/format */ "./src/core/polyfill/format.js");
    /* harmony import */ var _polyfill_format__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_polyfill_format__WEBPACK_IMPORTED_MODULE_4__);




            // import './firebase';
            // Scroll Top

            Object(_functions__WEBPACK_IMPORTED_MODULE_0__["scrollTop"])();
            $vtex(document).ajaxComplete(function (evt, xhr, set) {
                if (set.url.indexOf('/frete/calcula') !== -1) {
                    $vtex(document).trigger('[SHIPPING]');
                }
            });
            var isMobile = function isMobile() {
                if (window.innerWidth < 992) return true; else return false;
            };

            /***/
        }),

    /***/ "./src/core/jquery.observe.js":
    /*!************************************!*\
      !*** ./src/core/jquery.observe.js ***!
      \************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function (jQuery) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
    /* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


                (function (d) {
                    d.Observe = {};
                })(jQuery);

                (function (d, q) {
                    var r = function r(e, f) {
                        f || (f = e, e = window.document);
                        var m = [];
                        d(f).each(function () {
                            for (var l = [], g = d(this), h = g.parent(); h.length && !g.is(e); h = h.parent()) {
                                var f = g.get(0).tagName.toLowerCase();
                                l.push(f + ":eq(" + h.children(f).index(g) + ")");
                                g = h;
                            }

                            (h.length || g.is(e)) && m.push("> " + l.reverse().join(" > "));
                        });
                        return m.join(", ");
                    };

                    q.path = {
                        get: r,
                        capture: function capture(e, f) {
                            f || (f = e, e = window.document);
                            var m = [];
                            d(f).each(function () {
                                var l = -1,
                                    g = this;
                                if (this instanceof Text) for (var g = this.parentNode, h = g.childNodes, f = 0; f < h.length; f++) {
                                    if (h[f] === this) {
                                        l = f;
                                        break;
                                    }
                                }
                                var k = r(e, g),
                                    n = d(e).is(g);
                                m.push(function (e) {
                                    e = n ? e : d(e).find(k);
                                    return -1 === l ? e : e.contents()[l];
                                });
                            });
                            return function (e) {
                                e = e || window.document;
                                return m.reduce(function (d, f) {
                                    return d.add(f(e));
                                }, d([]));
                            };
                        }
                    };
                })(jQuery, jQuery.Observe);

                (function (d, q) {
                    var r = function r(e) {
                        this.original = d(e);
                        this.root = this.original.clone(!1, !0);
                    };

                    r.prototype.find = function (d) {
                        return q.path.capture(this.original, d)(this.root);
                    };

                    q.Branch = r;
                })(jQuery, jQuery.Observe);

                (function (d, q) {
                    var r = function r(a, b) {
                        var c = {};
                        a.forEach(function (a) {
                            (a = b(a)) && (c[a[0]] = a[1]);
                        });
                        return c;
                    },
                        e = r("childList attributes characterData subtree attributeOldValue characterDataOldValue attributeFilter".split(" "), function (a) {
                            return [a.toLowerCase(), a];
                        }),
                        f = r(Object.keys(e), function (a) {
                            if ("attributefilter" !== a) return [e[a], !0];
                        }),
                        m = r(["added", "removed"], function (a) {
                            return [a.toLowerCase(), a];
                        }),
                        l = d([]),
                        g = function g(a) {
                            if ("object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a)) return a;
                            a = a.split(/\s+/);
                            var b = {};
                            a.forEach(function (a) {
                                a = a.toLowerCase();
                                if (!e[a] && !m[a]) throw Error("Unknown option " + a);
                                b[e[a] || m[a]] = !0;
                            });
                            return b;
                        },
                        h = function h(a) {
                            return "[" + Object.keys(a).sort().reduce(function (b, c) {
                                var d = a[c] && "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a[c]) ? h(a[c]) : a[c];
                                return b + "[" + JSON.stringify(c) + ":" + d + "]";
                            }, "") + "]";
                        },
                        t = window.MutationObserver || window.WebKitMutationObserver,
                        k = function k(a, b, c, s) {
                            this._originalOptions = d.extend({}, b);
                            b = d.extend({}, b);
                            this.attributeFilter = b.attributeFilter;
                            delete b.attributeFilter;
                            c && (b.subtree = !0);
                            b.childList && (b.added = !0, b.removed = !0);
                            if (b.added || b.removed) b.childList = !0;
                            this.target = d(a);
                            this.options = b;
                            this.selector = c;
                            this.handler = s;
                        };

                    k.prototype.is = function (a, b, c) {
                        return h(this._originalOptions) === h(a) && this.selector === b && this.handler === c;
                    };

                    k.prototype.match = function (a) {
                        var b = this.options,
                            c = a.type;
                        if (!this.options[c]) return l;
                        if (this.selector) switch (c) {
                            case "attributes":
                                if (!this._matchAttributeFilter(a)) break;

                            case "characterData":
                                return this._matchAttributesAndCharacterData(a);

                            case "childList":
                                if (a.addedNodes && a.addedNodes.length && b.added && (c = this._matchAddedNodes(a), c.length)) return c;
                                if (a.removedNodes && a.removedNodes.length && b.removed) return this._matchRemovedNodes(a);
                        } else {
                            var s = a.target instanceof Text ? d(a.target).parent() : d(a.target);
                            if (!b.subtree && s.get(0) !== this.target.get(0)) return l;

                            switch (c) {
                                case "attributes":
                                    if (!this._matchAttributeFilter(a)) break;

                                case "characterData":
                                    return this.target;

                                case "childList":
                                    if (a.addedNodes && a.addedNodes.length && b.added || a.removedNodes && a.removedNodes.length && b.removed) return this.target;
                            }
                        }
                        return l;
                    };

                    k.prototype._matchAttributesAndCharacterData = function (a) {
                        return this._matchSelector(this.target, [a.target]);
                    };

                    k.prototype._matchAddedNodes = function (a) {
                        return this._matchSelector(this.target, a.addedNodes);
                    };

                    k.prototype._matchRemovedNodes = function (a) {
                        var b = new q.Branch(this.target),
                            c = Array.prototype.slice.call(a.removedNodes).map(function (a) {
                                return a.cloneNode(!0);
                            });
                        a.previousSibling ? b.find(a.previousSibling).after(c) : a.nextSibling ? b.find(a.nextSibling).before(c) : (this.target === a.target ? b.root : b.find(a.target)).empty().append(c);
                        return this._matchSelector(b.root, c).length ? d(a.target) : l;
                    };

                    k.prototype._matchSelector = function (a, b) {
                        var c = a.find(this.selector);
                        b = Array.prototype.slice.call(b);
                        return c = c.filter(function () {
                            var a = this;
                            return b.some(function (b) {
                                return b instanceof Text ? b.parentNode === a : b === a || d(b).has(a).length;
                            });
                        });
                    };

                    k.prototype._matchAttributeFilter = function (a) {
                        return this.attributeFilter && this.attributeFilter.length ? 0 <= this.attributeFilter.indexOf(a.attributeName) : !0;
                    };

                    var n = function n(a) {
                        this.patterns = [];
                        this._target = a;
                        this._observer = null;
                    };

                    n.prototype.observe = function (a, b, c) {
                        var d = this;
                        this._observer ? this._observer.disconnect() : this._observer = new t(function (a) {
                            a.forEach(function (a) {
                                d.patterns.forEach(function (b) {
                                    var c = b.match(a);
                                    c.length && c.each(function () {
                                        b.handler.call(this, a);
                                    });
                                });
                            });
                        });
                        this.patterns.push(new k(this._target, a, b, c));

                        this._observer.observe(this._target, this._collapseOptions());
                    };

                    n.prototype.disconnect = function (a, b, c) {
                        var d = this;
                        this._observer && (this.patterns.filter(function (d) {
                            return d.is(a, b, c);
                        }).forEach(function (a) {
                            a = d.patterns.indexOf(a);
                            d.patterns.splice(a, 1);
                        }), this.patterns.length || this._observer.disconnect());
                    };

                    n.prototype.disconnectAll = function () {
                        this._observer && (this.patterns = [], this._observer.disconnect());
                    };

                    n.prototype.pause = function () {
                        this._observer && this._observer.disconnect();
                    };

                    n.prototype.resume = function () {
                        this._observer && this._observer.observe(this._target, this._collapseOptions());
                    };

                    n.prototype._collapseOptions = function () {
                        var a = {};
                        this.patterns.forEach(function (b) {
                            var c = a.attributes && a.attributeFilter;
                            if (!c && a.attributes || !b.attributeFilter) c && b.options.attributes && !b.attributeFilter && delete a.attributeFilter; else {
                                var e = {},
                                    f = [];
                                (a.attributeFilter || []).concat(b.attributeFilter).forEach(function (a) {
                                    e[a] || (f.push(a), e[a] = 1);
                                });
                                a.attributeFilter = f;
                            }
                            d.extend(a, b.options);
                        });
                        Object.keys(m).forEach(function (b) {
                            delete a[m[b]];
                        });
                        return a;
                    };

                    var p = function p(a) {
                        this.patterns = [];
                        this._paused = !1;
                        this._target = a;
                        this._events = {};
                        this._handler = this._handler.bind(this);
                    };

                    p.prototype.NS = ".jQueryObserve";

                    p.prototype.observe = function (a, b, c) {
                        a = new k(this._target, a, b, c);
                        d(this._target);
                        a.options.childList && (this._addEvent("DOMNodeInserted"), this._addEvent("DOMNodeRemoved"));
                        a.options.attributes && this._addEvent("DOMAttrModified");
                        a.options.characterData && this._addEvent("DOMCharacerDataModified");
                        this.patterns.push(a);
                    };

                    p.prototype.disconnect = function (a, b, c) {
                        var e = d(this._target),
                            f = this;
                        this.patterns.filter(function (d) {
                            return d.is(a, b, c);
                        }).forEach(function (a) {
                            a = f.patterns.indexOf(a);
                            f.patterns.splice(a, 1);
                        });
                        var g = this.patterns.reduce(function (a, b) {
                            b.options.childList && (a.DOMNodeInserted = !0, a.DOMNodeRemoved = !0);
                            b.options.attributes && (a.DOMAttrModified = !0);
                            b.options.characterData && (a.DOMCharacerDataModified = !0);
                            return a;
                        }, {});
                        Object.keys(this._events).forEach(function (a) {
                            g[a] || (delete f._events[a], e.off(a + f.NS, f._handler));
                        });
                    };

                    p.prototype.disconnectAll = function () {
                        var a = d(this._target),
                            b;

                        for (b in this._events) {
                            a.off(b + this.NS, this._handler);
                        }

                        this._events = {};
                        this.patterns = [];
                    };

                    p.prototype.pause = function () {
                        this._paused = !0;
                    };

                    p.prototype.resume = function () {
                        this._paused = !1;
                    };

                    p.prototype._handler = function (a) {
                        if (!this._paused) {
                            var b = {
                                type: null,
                                target: null,
                                addedNodes: null,
                                removedNodes: null,
                                previousSibling: null,
                                nextSibling: null,
                                attributeName: null,
                                attributeNamespace: null,
                                oldValue: null
                            };

                            switch (a.type) {
                                case "DOMAttrModified":
                                    b.type = "attributes";
                                    b.target = a.target;
                                    b.attributeName = a.attrName;
                                    b.oldValue = a.prevValue;
                                    break;

                                case "DOMCharacerDataModified":
                                    b.type = "characterData";
                                    b.target = d(a.target).parent().get(0);
                                    b.attributeName = a.attrName;
                                    b.oldValue = a.prevValue;
                                    break;

                                case "DOMNodeInserted":
                                    b.type = "childList";
                                    b.target = a.relatedNode;
                                    b.addedNodes = [a.target];
                                    b.removedNodes = [];
                                    break;

                                case "DOMNodeRemoved":
                                    b.type = "childList", b.target = a.relatedNode, b.addedNodes = [], b.removedNodes = [a.target];
                            }

                            for (a = 0; a < this.patterns.length; a++) {
                                var c = this.patterns[a],
                                    e = c.match(b);
                                e.length && e.each(function () {
                                    c.handler.call(this, b);
                                });
                            }
                        }
                    };

                    p.prototype._addEvent = function (a) {
                        this._events[a] || (d(this._target).on(a + this.NS, this._handler), this._events[a] = !0);
                    };

                    q.Pattern = k;
                    q.MutationObserver = n;
                    q.DOMEventObserver = p;

                    d.fn.observe = function (a, b, c) {
                        b ? c || (c = b, b = null) : (c = a, a = f);
                        return this.each(function () {
                            var e = d(this),
                                f = e.data("observer");
                            f || (f = t ? new n(this) : new p(this), e.data("observer", f));
                            a = g(a);
                            f.observe(a, b, c);
                        });
                    };

                    d.fn.disconnect = function (a, b, c) {
                        a && (b ? c || (c = b, b = null) : (c = a, a = f));
                        return this.each(function () {
                            var e = d(this),
                                f = e.data("observer");
                            f && (a ? (a = g(a), f.disconnect(a, b, c)) : (f.disconnectAll(), e.removeData("observer")));
                        });
                    };
                })(jQuery, jQuery.Observe);
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/core/lazy.js":
    /*!**************************!*\
      !*** ./src/core/lazy.js ***!
      \**************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

            function CreateImage(src) {
                var img = new Image();
                img.setAttribute('data-src', src);
                return img;
            }

            function LazyCreateImage(noscript) {
                var img = CreateImage(noscript.textContent.match(/src="(.*?)"/)[1]);
                noscript.before(img);
                return img;
            }

            function LazyLoad() {
                return [].slice.call(document.querySelectorAll('.showcase__lazy noscript')).map(function (noscript) {
                    return LazyCreateImage(noscript);
                });
            }

            function Lazy() {
                var lazyImages = LazyLoad();

                if ('IntersectionObserver' in window) {
                    var lazyImageObserver = new IntersectionObserver(function (entries, _) {
                        entries.forEach(function (entry) {
                            if (entry.isIntersecting) {
                                var lazyImage = entry.target;
                                lazyImage.src = lazyImage.dataset.src;
                                lazyImageObserver.unobserve(lazyImage);
                            }
                        });
                    });
                    lazyImages.forEach(function (lazyImage) {
                        lazyImageObserver.observe(lazyImage);
                    });
                } else {
                    ;
                    [].forEach.call(lazyImages, function (lazyImage) {
                        lazyImage.src = lazyImage.dataset.src;
                    });
                }
            }

            document.addEventListener('DOMContentLoaded', function () {
                Lazy();
            });
            $vtex(document).ajaxComplete(function (evt, xhref, settings) {
                if (settings.url.indexOf('buscapagina') !== -1) {
                    Lazy();
                }
            });

            /***/
        }),

    /***/ "./src/core/plugins/countdown.min.js":
    /*!*******************************************!*\
      !*** ./src/core/plugins/countdown.min.js ***!
      \*******************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function (module) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
    /* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


                /*global window */

                /**
                 * @license countdown.js v2.6.0 http://countdownjs.org
                 * Copyright (c)2006-2014 Stephen M. McKamey.
                 * Licensed under The MIT License.
                 */

                /*jshint bitwise:false */

                /**
                 * API entry
                 * @public
                 * @param {function(Object)|Date|number} start the starting date
                 * @param {function(Object)|Date|number} end the ending date
                 * @param {number} units the units to populate
                 * @return {Object|number}
                 */
                var countdown =
                    /**
                    * @param {Object} module CommonJS Module
                    */
                    function (module) {
                        /*jshint smarttabs:true */
                        'use strict';
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var MILLISECONDS = 0x001;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var SECONDS = 0x002;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var MINUTES = 0x004;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var HOURS = 0x008;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var DAYS = 0x010;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var WEEKS = 0x020;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var MONTHS = 0x040;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var YEARS = 0x080;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var DECADES = 0x100;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var CENTURIES = 0x200;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var MILLENNIA = 0x400;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var DEFAULTS = YEARS | MONTHS | DAYS | HOURS | MINUTES | SECONDS;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var MILLISECONDS_PER_SECOND = 1000;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var SECONDS_PER_MINUTE = 60;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var MINUTES_PER_HOUR = 60;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var HOURS_PER_DAY = 24;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var MILLISECONDS_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var DAYS_PER_WEEK = 7;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var MONTHS_PER_YEAR = 12;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var YEARS_PER_DECADE = 10;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var DECADES_PER_CENTURY = 10;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var CENTURIES_PER_MILLENNIUM = 10;
                        /**
                         * @private
                         * @param {number} x number
                         * @return {number}
                         */

                        var ceil = Math.ceil;
                        /**
                         * @private
                         * @param {number} x number
                         * @return {number}
                         */

                        var floor = Math.floor;
                        /**
                         * @private
                         * @param {Date} ref reference date
                         * @param {number} shift number of months to shift
                         * @return {number} number of days shifted
                         */

                        function borrowMonths(ref, shift) {
                            var prevTime = ref.getTime(); // increment month by shift

                            ref.setMonth(ref.getMonth() + shift); // this is the trickiest since months vary in length

                            return Math.round((ref.getTime() - prevTime) / MILLISECONDS_PER_DAY);
                        }
                        /**
                         * @private
                         * @param {Date} ref reference date
                         * @return {number} number of days
                         */


                        function daysPerMonth(ref) {
                            var a = ref.getTime(); // increment month by 1

                            var b = new Date(a);
                            b.setMonth(ref.getMonth() + 1); // this is the trickiest since months vary in length

                            return Math.round((b.getTime() - a) / MILLISECONDS_PER_DAY);
                        }
                        /**
                         * @private
                         * @param {Date} ref reference date
                         * @return {number} number of days
                         */


                        function daysPerYear(ref) {
                            var a = ref.getTime(); // increment year by 1

                            var b = new Date(a);
                            b.setFullYear(ref.getFullYear() + 1); // this is the trickiest since years (periodically) vary in length

                            return Math.round((b.getTime() - a) / MILLISECONDS_PER_DAY);
                        }
                        /**
                         * Applies the Timespan to the given date.
                         *
                         * @private
                         * @param {Timespan} ts
                         * @param {Date=} date
                         * @return {Date}
                         */


                        function addToDate(ts, date) {
                            date = date instanceof Date || date !== null && isFinite(date) ? new Date(+date) : new Date();

                            if (!ts) {
                                return date;
                            } // if there is a value field, use it directly


                            var value = +ts.value || 0;

                            if (value) {
                                date.setTime(date.getTime() + value);
                                return date;
                            }

                            value = +ts.milliseconds || 0;

                            if (value) {
                                date.setMilliseconds(date.getMilliseconds() + value);
                            }

                            value = +ts.seconds || 0;

                            if (value) {
                                date.setSeconds(date.getSeconds() + value);
                            }

                            value = +ts.minutes || 0;

                            if (value) {
                                date.setMinutes(date.getMinutes() + value);
                            }

                            value = +ts.hours || 0;

                            if (value) {
                                date.setHours(date.getHours() + value);
                            }

                            value = +ts.weeks || 0;

                            if (value) {
                                value *= DAYS_PER_WEEK;
                            }

                            value += +ts.days || 0;

                            if (value) {
                                date.setDate(date.getDate() + value);
                            }

                            value = +ts.months || 0;

                            if (value) {
                                date.setMonth(date.getMonth() + value);
                            }

                            value = +ts.millennia || 0;

                            if (value) {
                                value *= CENTURIES_PER_MILLENNIUM;
                            }

                            value += +ts.centuries || 0;

                            if (value) {
                                value *= DECADES_PER_CENTURY;
                            }

                            value += +ts.decades || 0;

                            if (value) {
                                value *= YEARS_PER_DECADE;
                            }

                            value += +ts.years || 0;

                            if (value) {
                                date.setFullYear(date.getFullYear() + value);
                            }

                            return date;
                        }
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */


                        var LABEL_MILLISECONDS = 0;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var LABEL_SECONDS = 1;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var LABEL_MINUTES = 2;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var LABEL_HOURS = 3;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var LABEL_DAYS = 4;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var LABEL_WEEKS = 5;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var LABEL_MONTHS = 6;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var LABEL_YEARS = 7;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var LABEL_DECADES = 8;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var LABEL_CENTURIES = 9;
                        /**
                         * @private
                         * @const
                         * @type {number}
                         */

                        var LABEL_MILLENNIA = 10;
                        /**
                         * @private
                         * @type {Array}
                         */

                        var LABELS_SINGLUAR;
                        /**
                         * @private
                         * @type {Array}
                         */

                        var LABELS_PLURAL;
                        /**
                         * @private
                         * @type {string}
                         */

                        var LABEL_LAST;
                        /**
                         * @private
                         * @type {string}
                         */

                        var LABEL_DELIM;
                        /**
                         * @private
                         * @type {string}
                         */

                        var LABEL_NOW;
                        /**
                         * Formats a number & unit as a string
                         *
                         * @param {number} value
                         * @param {number} unit
                         * @return {string}
                         */

                        var formatter;
                        /**
                         * Formats a number as a string
                         *
                         * @private
                         * @param {number} value
                         * @return {string}
                         */

                        var formatNumber;
                        /**
                         * @private
                         * @param {number} value
                         * @param {number} unit unit index into label list
                         * @return {string}
                         */

                        function plurality(value, unit) {
                            return formatNumber(value) + (value === 1 ? LABELS_SINGLUAR[unit] : LABELS_PLURAL[unit]);
                        }
                        /**
                         * Formats the entries with singular or plural labels
                         *
                         * @private
                         * @param {Timespan} ts
                         * @return {Array}
                         */


                        var formatList;
                        /**
                         * Timespan representation of a duration of time
                         *
                         * @private
                         * @this {Timespan}
                         * @constructor
                         */

                        function Timespan() { }
                        /**
                         * Formats the Timespan as a sentence
                         *
                         * @param {string=} emptyLabel the string to use when no values returned
                         * @return {string}
                         */


                        Timespan.prototype.toString = function (emptyLabel) {
                            var label = formatList(this);
                            var count = label.length;

                            if (!count) {
                                return emptyLabel ? '' + emptyLabel : LABEL_NOW;
                            }

                            if (count === 1) {
                                return label[0];
                            }

                            var last = LABEL_LAST + label.pop();
                            return label.join(LABEL_DELIM) + last;
                        };
                        /**
                         * Formats the Timespan as a sentence in HTML
                         *
                         * @param {string=} tag HTML tag name to wrap each value
                         * @param {string=} emptyLabel the string to use when no values returned
                         * @return {string}
                         */


                        Timespan.prototype.toHTML = function (tag, emptyLabel) {
                            tag = tag || 'span';
                            var label = formatList(this);
                            var count = label.length;

                            if (!count) {
                                emptyLabel = emptyLabel || LABEL_NOW;
                                return emptyLabel ? '<' + tag + '>' + emptyLabel + '</' + tag + '>' : emptyLabel;
                            }

                            for (var i = 0; i < count; i++) {
                                // wrap each unit in tag
                                label[i] = '<' + tag + '>' + label[i] + '</' + tag + '>';
                            }

                            if (count === 1) {
                                return label[0];
                            }

                            var last = LABEL_LAST + label.pop();
                            return label.join(LABEL_DELIM) + last;
                        };
                        /**
                         * Applies the Timespan to the given date
                         *
                         * @param {Date=} date the date to which the timespan is added.
                         * @return {Date}
                         */


                        Timespan.prototype.addTo = function (date) {
                            return addToDate(this, date);
                        };
                        /**
                         * Formats the entries as English labels
                         *
                         * @private
                         * @param {Timespan} ts
                         * @return {Array}
                         */


                        formatList = function formatList(ts) {
                            var list = [];
                            var value = ts.millennia;

                            if (value) {
                                list.push(formatter(value, LABEL_MILLENNIA));
                            }

                            value = ts.centuries;

                            if (value) {
                                list.push(formatter(value, LABEL_CENTURIES));
                            }

                            value = ts.decades;

                            if (value) {
                                list.push(formatter(value, LABEL_DECADES));
                            }

                            value = ts.years;

                            if (value) {
                                list.push(formatter(value, LABEL_YEARS));
                            }

                            value = ts.months;

                            if (value) {
                                list.push(formatter(value, LABEL_MONTHS));
                            }

                            value = ts.weeks;

                            if (value) {
                                list.push(formatter(value, LABEL_WEEKS));
                            }

                            value = ts.days;

                            if (value) {
                                list.push(formatter(value, LABEL_DAYS));
                            }

                            value = ts.hours;

                            if (value) {
                                list.push(formatter(value, LABEL_HOURS));
                            }

                            value = ts.minutes;

                            if (value) {
                                list.push(formatter(value, LABEL_MINUTES));
                            }

                            value = ts.seconds;

                            if (value) {
                                list.push(formatter(value, LABEL_SECONDS));
                            }

                            value = ts.milliseconds;

                            if (value) {
                                list.push(formatter(value, LABEL_MILLISECONDS));
                            }

                            return list;
                        };
                        /**
                         * Borrow any underflow units, carry any overflow units
                         *
                         * @private
                         * @param {Timespan} ts
                         * @param {string} toUnit
                         */


                        function rippleRounded(ts, toUnit) {
                            switch (toUnit) {
                                case 'seconds':
                                    if (ts.seconds !== SECONDS_PER_MINUTE || isNaN(ts.minutes)) {
                                        return;
                                    } // ripple seconds up to minutes


                                    ts.minutes++;
                                    ts.seconds = 0;

                                /* falls through */

                                case 'minutes':
                                    if (ts.minutes !== MINUTES_PER_HOUR || isNaN(ts.hours)) {
                                        return;
                                    } // ripple minutes up to hours


                                    ts.hours++;
                                    ts.minutes = 0;

                                /* falls through */

                                case 'hours':
                                    if (ts.hours !== HOURS_PER_DAY || isNaN(ts.days)) {
                                        return;
                                    } // ripple hours up to days


                                    ts.days++;
                                    ts.hours = 0;

                                /* falls through */

                                case 'days':
                                    if (ts.days !== DAYS_PER_WEEK || isNaN(ts.weeks)) {
                                        return;
                                    } // ripple days up to weeks


                                    ts.weeks++;
                                    ts.days = 0;

                                /* falls through */

                                case 'weeks':
                                    if (ts.weeks !== daysPerMonth(ts.refMonth) / DAYS_PER_WEEK || isNaN(ts.months)) {
                                        return;
                                    } // ripple weeks up to months


                                    ts.months++;
                                    ts.weeks = 0;

                                /* falls through */

                                case 'months':
                                    if (ts.months !== MONTHS_PER_YEAR || isNaN(ts.years)) {
                                        return;
                                    } // ripple months up to years


                                    ts.years++;
                                    ts.months = 0;

                                /* falls through */

                                case 'years':
                                    if (ts.years !== YEARS_PER_DECADE || isNaN(ts.decades)) {
                                        return;
                                    } // ripple years up to decades


                                    ts.decades++;
                                    ts.years = 0;

                                /* falls through */

                                case 'decades':
                                    if (ts.decades !== DECADES_PER_CENTURY || isNaN(ts.centuries)) {
                                        return;
                                    } // ripple decades up to centuries


                                    ts.centuries++;
                                    ts.decades = 0;

                                /* falls through */

                                case 'centuries':
                                    if (ts.centuries !== CENTURIES_PER_MILLENNIUM || isNaN(ts.millennia)) {
                                        return;
                                    } // ripple centuries up to millennia


                                    ts.millennia++;
                                    ts.centuries = 0;

                                /* falls through */
                            }
                        }
                        /**
                         * Ripple up partial units one place
                         *
                         * @private
                         * @param {Timespan} ts timespan
                         * @param {number} frac accumulated fractional value
                         * @param {string} fromUnit source unit name
                         * @param {string} toUnit target unit name
                         * @param {number} conversion multiplier between units
                         * @param {number} digits max number of decimal digits to output
                         * @return {number} new fractional value
                         */


                        function fraction(ts, frac, fromUnit, toUnit, conversion, digits) {
                            if (ts[fromUnit] >= 0) {
                                frac += ts[fromUnit];
                                delete ts[fromUnit];
                            }

                            frac /= conversion;

                            if (frac + 1 <= 1) {
                                // drop if below machine epsilon
                                return 0;
                            }

                            if (ts[toUnit] >= 0) {
                                // ensure does not have more than specified number of digits
                                ts[toUnit] = +(ts[toUnit] + frac).toFixed(digits);
                                rippleRounded(ts, toUnit);
                                return 0;
                            }

                            return frac;
                        }
                        /**
                         * Ripple up partial units to next existing
                         *
                         * @private
                         * @param {Timespan} ts
                         * @param {number} digits max number of decimal digits to output
                         */


                        function fractional(ts, digits) {
                            var frac = fraction(ts, 0, 'milliseconds', 'seconds', MILLISECONDS_PER_SECOND, digits);

                            if (!frac) {
                                return;
                            }

                            frac = fraction(ts, frac, 'seconds', 'minutes', SECONDS_PER_MINUTE, digits);

                            if (!frac) {
                                return;
                            }

                            frac = fraction(ts, frac, 'minutes', 'hours', MINUTES_PER_HOUR, digits);

                            if (!frac) {
                                return;
                            }

                            frac = fraction(ts, frac, 'hours', 'days', HOURS_PER_DAY, digits);

                            if (!frac) {
                                return;
                            }

                            frac = fraction(ts, frac, 'days', 'weeks', DAYS_PER_WEEK, digits);

                            if (!frac) {
                                return;
                            }

                            frac = fraction(ts, frac, 'weeks', 'months', daysPerMonth(ts.refMonth) / DAYS_PER_WEEK, digits);

                            if (!frac) {
                                return;
                            }

                            frac = fraction(ts, frac, 'months', 'years', daysPerYear(ts.refMonth) / daysPerMonth(ts.refMonth), digits);

                            if (!frac) {
                                return;
                            }

                            frac = fraction(ts, frac, 'years', 'decades', YEARS_PER_DECADE, digits);

                            if (!frac) {
                                return;
                            }

                            frac = fraction(ts, frac, 'decades', 'centuries', DECADES_PER_CENTURY, digits);

                            if (!frac) {
                                return;
                            }

                            frac = fraction(ts, frac, 'centuries', 'millennia', CENTURIES_PER_MILLENNIUM, digits); // should never reach this with remaining fractional value

                            if (frac) {
                                throw new Error('Fractional unit overflow');
                            }
                        }
                        /**
                         * Borrow any underflow units, carry any overflow units
                         *
                         * @private
                         * @param {Timespan} ts
                         */


                        function ripple(ts) {
                            var x;

                            if (ts.milliseconds < 0) {
                                // ripple seconds down to milliseconds
                                x = ceil(-ts.milliseconds / MILLISECONDS_PER_SECOND);
                                ts.seconds -= x;
                                ts.milliseconds += x * MILLISECONDS_PER_SECOND;
                            } else if (ts.milliseconds >= MILLISECONDS_PER_SECOND) {
                                // ripple milliseconds up to seconds
                                ts.seconds += floor(ts.milliseconds / MILLISECONDS_PER_SECOND);
                                ts.milliseconds %= MILLISECONDS_PER_SECOND;
                            }

                            if (ts.seconds < 0) {
                                // ripple minutes down to seconds
                                x = ceil(-ts.seconds / SECONDS_PER_MINUTE);
                                ts.minutes -= x;
                                ts.seconds += x * SECONDS_PER_MINUTE;
                            } else if (ts.seconds >= SECONDS_PER_MINUTE) {
                                // ripple seconds up to minutes
                                ts.minutes += floor(ts.seconds / SECONDS_PER_MINUTE);
                                ts.seconds %= SECONDS_PER_MINUTE;
                            }

                            if (ts.minutes < 0) {
                                // ripple hours down to minutes
                                x = ceil(-ts.minutes / MINUTES_PER_HOUR);
                                ts.hours -= x;
                                ts.minutes += x * MINUTES_PER_HOUR;
                            } else if (ts.minutes >= MINUTES_PER_HOUR) {
                                // ripple minutes up to hours
                                ts.hours += floor(ts.minutes / MINUTES_PER_HOUR);
                                ts.minutes %= MINUTES_PER_HOUR;
                            }

                            if (ts.hours < 0) {
                                // ripple days down to hours
                                x = ceil(-ts.hours / HOURS_PER_DAY);
                                ts.days -= x;
                                ts.hours += x * HOURS_PER_DAY;
                            } else if (ts.hours >= HOURS_PER_DAY) {
                                // ripple hours up to days
                                ts.days += floor(ts.hours / HOURS_PER_DAY);
                                ts.hours %= HOURS_PER_DAY;
                            }

                            while (ts.days < 0) {
                                // NOTE: never actually seen this loop more than once
                                // ripple months down to days
                                ts.months--;
                                ts.days += borrowMonths(ts.refMonth, 1);
                            } // weeks is always zero here


                            if (ts.days >= DAYS_PER_WEEK) {
                                // ripple days up to weeks
                                ts.weeks += floor(ts.days / DAYS_PER_WEEK);
                                ts.days %= DAYS_PER_WEEK;
                            }

                            if (ts.months < 0) {
                                // ripple years down to months
                                x = ceil(-ts.months / MONTHS_PER_YEAR);
                                ts.years -= x;
                                ts.months += x * MONTHS_PER_YEAR;
                            } else if (ts.months >= MONTHS_PER_YEAR) {
                                // ripple months up to years
                                ts.years += floor(ts.months / MONTHS_PER_YEAR);
                                ts.months %= MONTHS_PER_YEAR;
                            } // years is always non-negative here
                            // decades, centuries and millennia are always zero here


                            if (ts.years >= YEARS_PER_DECADE) {
                                // ripple years up to decades
                                ts.decades += floor(ts.years / YEARS_PER_DECADE);
                                ts.years %= YEARS_PER_DECADE;

                                if (ts.decades >= DECADES_PER_CENTURY) {
                                    // ripple decades up to centuries
                                    ts.centuries += floor(ts.decades / DECADES_PER_CENTURY);
                                    ts.decades %= DECADES_PER_CENTURY;

                                    if (ts.centuries >= CENTURIES_PER_MILLENNIUM) {
                                        // ripple centuries up to millennia
                                        ts.millennia += floor(ts.centuries / CENTURIES_PER_MILLENNIUM);
                                        ts.centuries %= CENTURIES_PER_MILLENNIUM;
                                    }
                                }
                            }
                        }
                        /**
                         * Remove any units not requested
                         *
                         * @private
                         * @param {Timespan} ts
                         * @param {number} units the units to populate
                         * @param {number} max number of labels to output
                         * @param {number} digits max number of decimal digits to output
                         */


                        function pruneUnits(ts, units, max, digits) {
                            var count = 0; // Calc from largest unit to smallest to prevent underflow

                            if (!(units & MILLENNIA) || count >= max) {
                                // ripple millennia down to centuries
                                ts.centuries += ts.millennia * CENTURIES_PER_MILLENNIUM;
                                delete ts.millennia;
                            } else if (ts.millennia) {
                                count++;
                            }

                            if (!(units & CENTURIES) || count >= max) {
                                // ripple centuries down to decades
                                ts.decades += ts.centuries * DECADES_PER_CENTURY;
                                delete ts.centuries;
                            } else if (ts.centuries) {
                                count++;
                            }

                            if (!(units & DECADES) || count >= max) {
                                // ripple decades down to years
                                ts.years += ts.decades * YEARS_PER_DECADE;
                                delete ts.decades;
                            } else if (ts.decades) {
                                count++;
                            }

                            if (!(units & YEARS) || count >= max) {
                                // ripple years down to months
                                ts.months += ts.years * MONTHS_PER_YEAR;
                                delete ts.years;
                            } else if (ts.years) {
                                count++;
                            }

                            if (!(units & MONTHS) || count >= max) {
                                // ripple months down to days
                                if (ts.months) {
                                    ts.days += borrowMonths(ts.refMonth, ts.months);
                                }

                                delete ts.months;

                                if (ts.days >= DAYS_PER_WEEK) {
                                    // ripple day overflow back up to weeks
                                    ts.weeks += floor(ts.days / DAYS_PER_WEEK);
                                    ts.days %= DAYS_PER_WEEK;
                                }
                            } else if (ts.months) {
                                count++;
                            }

                            if (!(units & WEEKS) || count >= max) {
                                // ripple weeks down to days
                                ts.days += ts.weeks * DAYS_PER_WEEK;
                                delete ts.weeks;
                            } else if (ts.weeks) {
                                count++;
                            }

                            if (!(units & DAYS) || count >= max) {
                                //ripple days down to hours
                                ts.hours += ts.days * HOURS_PER_DAY;
                                delete ts.days;
                            } else if (ts.days) {
                                count++;
                            }

                            if (!(units & HOURS) || count >= max) {
                                // ripple hours down to minutes
                                ts.minutes += ts.hours * MINUTES_PER_HOUR;
                                delete ts.hours;
                            } else if (ts.hours) {
                                count++;
                            }

                            if (!(units & MINUTES) || count >= max) {
                                // ripple minutes down to seconds
                                ts.seconds += ts.minutes * SECONDS_PER_MINUTE;
                                delete ts.minutes;
                            } else if (ts.minutes) {
                                count++;
                            }

                            if (!(units & SECONDS) || count >= max) {
                                // ripple seconds down to milliseconds
                                ts.milliseconds += ts.seconds * MILLISECONDS_PER_SECOND;
                                delete ts.seconds;
                            } else if (ts.seconds) {
                                count++;
                            } // nothing to ripple milliseconds down to
                            // so ripple back up to smallest existing unit as a fractional value


                            if (!(units & MILLISECONDS) || count >= max) {
                                fractional(ts, digits);
                            }
                        }
                        /**
                         * Populates the Timespan object
                         *
                         * @private
                         * @param {Timespan} ts
                         * @param {?Date} start the starting date
                         * @param {?Date} end the ending date
                         * @param {number} units the units to populate
                         * @param {number} max number of labels to output
                         * @param {number} digits max number of decimal digits to output
                         */


                        function populate(ts, start, end, units, max, digits) {
                            var now = new Date();
                            ts.start = start = start || now;
                            ts.end = end = end || now;
                            ts.units = units;
                            ts.value = end.getTime() - start.getTime();

                            if (ts.value < 0) {
                                // swap if reversed
                                var tmp = end;
                                end = start;
                                start = tmp;
                            } // reference month for determining days in month


                            ts.refMonth = new Date(start.getFullYear(), start.getMonth(), 15, 12, 0, 0);

                            try {
                                // reset to initial deltas
                                ts.millennia = 0;
                                ts.centuries = 0;
                                ts.decades = 0;
                                ts.years = end.getFullYear() - start.getFullYear();
                                ts.months = end.getMonth() - start.getMonth();
                                ts.weeks = 0;
                                ts.days = end.getDate() - start.getDate();
                                ts.hours = end.getHours() - start.getHours();
                                ts.minutes = end.getMinutes() - start.getMinutes();
                                ts.seconds = end.getSeconds() - start.getSeconds();
                                ts.milliseconds = end.getMilliseconds() - start.getMilliseconds();
                                ripple(ts);
                                pruneUnits(ts, units, max, digits);
                            } finally {
                                delete ts.refMonth;
                            }

                            return ts;
                        }
                        /**
                         * Determine an appropriate refresh rate based upon units
                         *
                         * @private
                         * @param {number} units the units to populate
                         * @return {number} milliseconds to delay
                         */


                        function getDelay(units) {
                            if (units & MILLISECONDS) {
                                // refresh very quickly
                                return MILLISECONDS_PER_SECOND / 30; //30Hz
                            }

                            if (units & SECONDS) {
                                // refresh every second
                                return MILLISECONDS_PER_SECOND; //1Hz
                            }

                            if (units & MINUTES) {
                                // refresh every minute
                                return MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE;
                            }

                            if (units & HOURS) {
                                // refresh hourly
                                return MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR;
                            }

                            if (units & DAYS) {
                                // refresh daily
                                return MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY;
                            } // refresh the rest weekly


                            return MILLISECONDS_PER_SECOND * SECONDS_PER_MINUTE * MINUTES_PER_HOUR * HOURS_PER_DAY * DAYS_PER_WEEK;
                        }
                        /**
                         * API entry point
                         *
                         * @public
                         * @param {Date|number|Timespan|null|function(Timespan,number)} start the starting date
                         * @param {Date|number|Timespan|null|function(Timespan,number)} end the ending date
                         * @param {number=} units the units to populate
                         * @param {number=} max number of labels to output
                         * @param {number=} digits max number of decimal digits to output
                         * @return {Timespan|number}
                         */


                        function countdown(start, end, units, max, digits) {
                            var callback; // ensure some units or use defaults

                            units = +units || DEFAULTS; // max must be positive

                            max = max > 0 ? max : NaN; // clamp digits to an integer between [0, 20]

                            digits = digits > 0 ? digits < 20 ? Math.round(digits) : 20 : 0; // ensure start date

                            var startTS = null;

                            if ('function' === typeof start) {
                                callback = start;
                                start = null;
                            } else if (!(start instanceof Date)) {
                                if (start !== null && isFinite(start)) {
                                    start = new Date(+start);
                                } else {
                                    if ('object' === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(startTS)) {
                                        startTS =
                                            /** @type{Timespan} */
                                            start;
                                    }

                                    start = null;
                                }
                            } // ensure end date


                            var endTS = null;

                            if ('function' === typeof end) {
                                callback = end;
                                end = null;
                            } else if (!(end instanceof Date)) {
                                if (end !== null && isFinite(end)) {
                                    end = new Date(+end);
                                } else {
                                    if ('object' === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(end)) {
                                        endTS =
                                            /** @type{Timespan} */
                                            end;
                                    }

                                    end = null;
                                }
                            } // must wait to interpret timespans until after resolving dates


                            if (startTS) {
                                start = addToDate(startTS, end);
                            }

                            if (endTS) {
                                end = addToDate(endTS, start);
                            }

                            if (!start && !end) {
                                // used for unit testing
                                return new Timespan();
                            }

                            if (!callback) {
                                return populate(new Timespan(),
                                    /** @type{Date} */
                                    start,
                                    /** @type{Date} */
                                    end,
                                    /** @type{number} */
                                    units,
                                    /** @type{number} */
                                    max,
                                    /** @type{number} */
                                    digits);
                            } // base delay off units


                            var delay = getDelay(units),
                                timerId,
                                fn = function fn() {
                                    callback(populate(new Timespan(),
                                        /** @type{Date} */
                                        start,
                                        /** @type{Date} */
                                        end,
                                        /** @type{number} */
                                        units,
                                        /** @type{number} */
                                        max,
                                        /** @type{number} */
                                        digits), timerId);
                                };

                            fn();
                            return timerId = setInterval(fn, delay);
                        }
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */


                        countdown.MILLISECONDS = MILLISECONDS;
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */

                        countdown.SECONDS = SECONDS;
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */

                        countdown.MINUTES = MINUTES;
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */

                        countdown.HOURS = HOURS;
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */

                        countdown.DAYS = DAYS;
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */

                        countdown.WEEKS = WEEKS;
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */

                        countdown.MONTHS = MONTHS;
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */

                        countdown.YEARS = YEARS;
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */

                        countdown.DECADES = DECADES;
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */

                        countdown.CENTURIES = CENTURIES;
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */

                        countdown.MILLENNIA = MILLENNIA;
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */

                        countdown.DEFAULTS = DEFAULTS;
                        /**
                         * @public
                         * @const
                         * @type {number}
                         */

                        countdown.ALL = MILLENNIA | CENTURIES | DECADES | YEARS | MONTHS | WEEKS | DAYS | HOURS | MINUTES | SECONDS | MILLISECONDS;
                        /**
                         * Customize the format settings.
                         * @public
                         * @param {Object} format settings object
                         */

                        var setFormat = countdown.setFormat = function (format) {
                            if (!format) {
                                return;
                            }

                            if ('singular' in format || 'plural' in format) {
                                var singular = format.singular || [];

                                if (singular.split) {
                                    singular = singular.split('|');
                                }

                                var plural = format.plural || [];

                                if (plural.split) {
                                    plural = plural.split('|');
                                }

                                for (var i = LABEL_MILLISECONDS; i <= LABEL_MILLENNIA; i++) {
                                    // override any specified units
                                    LABELS_SINGLUAR[i] = singular[i] || LABELS_SINGLUAR[i];
                                    LABELS_PLURAL[i] = plural[i] || LABELS_PLURAL[i];
                                }
                            }

                            if ('string' === typeof format.last) {
                                LABEL_LAST = format.last;
                            }

                            if ('string' === typeof format.delim) {
                                LABEL_DELIM = format.delim;
                            }

                            if ('string' === typeof format.empty) {
                                LABEL_NOW = format.empty;
                            }

                            if ('function' === typeof format.formatNumber) {
                                formatNumber = format.formatNumber;
                            }

                            if ('function' === typeof format.formatter) {
                                formatter = format.formatter;
                            }
                        };
                        /**
                         * Revert to the default formatting.
                         * @public
                         */


                        var resetFormat = countdown.resetFormat = function () {
                            LABELS_SINGLUAR = ' millisecond| second| minute| hour| day| week| month| year| decade| century| millennium'.split('|');
                            LABELS_PLURAL = ' milliseconds| seconds| minutes| hours| days| weeks| months| years| decades| centuries| millennia'.split('|');
                            LABEL_LAST = ' and ';
                            LABEL_DELIM = ', ';
                            LABEL_NOW = '';

                            formatNumber = function formatNumber(value) {
                                return value;
                            };

                            formatter = plurality;
                        };
                        /**
                         * Override the unit labels.
                         * @public
                         * @param {string|Array=} singular a pipe ('|') delimited list of singular unit name overrides
                         * @param {string|Array=} plural a pipe ('|') delimited list of plural unit name overrides
                         * @param {string=} last a delimiter before the last unit (default: ' and ')
                         * @param {string=} delim a delimiter to use between all other units (default: ', ')
                         * @param {string=} empty a label to use when all units are zero (default: '')
                         * @param {function(number):string=} formatNumber a function which formats numbers as a string
                         * @param {function(number,number):string=} formatter a function which formats a number/unit pair as a string
                         * @deprecated since version 2.6.0
                         */


                        countdown.setLabels = function (singular, plural, last, delim, empty, formatNumber, formatter) {
                            setFormat({
                                singular: singular,
                                plural: plural,
                                last: last,
                                delim: delim,
                                empty: empty,
                                formatNumber: formatNumber,
                                formatter: formatter
                            });
                        };
                        /**
                         * Revert to the default unit labels.
                         * @public
                         * @deprecated since version 2.6.0
                         */


                        countdown.resetLabels = resetFormat;
                        resetFormat();

                        if (module && module.exports) {
                            module.exports = countdown;
                        } else if (typeof window.define === 'function' && typeof window.define.amd !== 'undefined') {
                            window.define('countdown', [], function () {
                                return countdown;
                            });
                        }

                        return countdown;
                    }(module);

    /* harmony default export */ __webpack_exports__["default"] = (countdown);
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

            /***/
        }),

    /***/ "./src/core/plugins/jquery.observe.js":
    /*!********************************************!*\
      !*** ./src/core/plugins/jquery.observe.js ***!
      \********************************************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function (jQuery) {/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
    /* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


                (function (d) {
                    d.Observe = {};
                })(jQuery);

                (function (d, q) {
                    var r = function r(e, f) {
                        f || (f = e, e = window.document);
                        var m = [];
                        d(f).each(function () {
                            for (var l = [], g = d(this), h = g.parent(); h.length && !g.is(e); h = h.parent()) {
                                var f = g.get(0).tagName.toLowerCase();
                                l.push(f + ":eq(" + h.children(f).index(g) + ")");
                                g = h;
                            }

                            (h.length || g.is(e)) && m.push("> " + l.reverse().join(" > "));
                        });
                        return m.join(", ");
                    };

                    q.path = {
                        get: r,
                        capture: function capture(e, f) {
                            f || (f = e, e = window.document);
                            var m = [];
                            d(f).each(function () {
                                var l = -1,
                                    g = this;
                                if (this instanceof Text) for (var g = this.parentNode, h = g.childNodes, f = 0; f < h.length; f++) {
                                    if (h[f] === this) {
                                        l = f;
                                        break;
                                    }
                                }
                                var k = r(e, g),
                                    n = d(e).is(g);
                                m.push(function (e) {
                                    e = n ? e : d(e).find(k);
                                    return -1 === l ? e : e.contents()[l];
                                });
                            });
                            return function (e) {
                                e = e || window.document;
                                return m.reduce(function (d, f) {
                                    return d.add(f(e));
                                }, d([]));
                            };
                        }
                    };
                })(jQuery, jQuery.Observe);

                (function (d, q) {
                    var r = function r(e) {
                        this.original = d(e);
                        this.root = this.original.clone(!1, !0);
                    };

                    r.prototype.find = function (d) {
                        return q.path.capture(this.original, d)(this.root);
                    };

                    q.Branch = r;
                })(jQuery, jQuery.Observe);

                (function (d, q) {
                    var r = function r(a, b) {
                        var c = {};
                        a.forEach(function (a) {
                            (a = b(a)) && (c[a[0]] = a[1]);
                        });
                        return c;
                    },
                        e = r("childList attributes characterData subtree attributeOldValue characterDataOldValue attributeFilter".split(" "), function (a) {
                            return [a.toLowerCase(), a];
                        }),
                        f = r(Object.keys(e), function (a) {
                            if ("attributefilter" !== a) return [e[a], !0];
                        }),
                        m = r(["added", "removed"], function (a) {
                            return [a.toLowerCase(), a];
                        }),
                        l = d([]),
                        g = function g(a) {
                            if ("object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a)) return a;
                            a = a.split(/\s+/);
                            var b = {};
                            a.forEach(function (a) {
                                a = a.toLowerCase();
                                if (!e[a] && !m[a]) throw Error("Unknown option " + a);
                                b[e[a] || m[a]] = !0;
                            });
                            return b;
                        },
                        h = function h(a) {
                            return "[" + Object.keys(a).sort().reduce(function (b, c) {
                                var d = a[c] && "object" === _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a[c]) ? h(a[c]) : a[c];
                                return b + "[" + JSON.stringify(c) + ":" + d + "]";
                            }, "") + "]";
                        },
                        t = window.MutationObserver || window.WebKitMutationObserver,
                        k = function k(a, b, c, s) {
                            this._originalOptions = d.extend({}, b);
                            b = d.extend({}, b);
                            this.attributeFilter = b.attributeFilter;
                            delete b.attributeFilter;
                            c && (b.subtree = !0);
                            b.childList && (b.added = !0, b.removed = !0);
                            if (b.added || b.removed) b.childList = !0;
                            this.target = d(a);
                            this.options = b;
                            this.selector = c;
                            this.handler = s;
                        };

                    k.prototype.is = function (a, b, c) {
                        return h(this._originalOptions) === h(a) && this.selector === b && this.handler === c;
                    };

                    k.prototype.match = function (a) {
                        var b = this.options,
                            c = a.type;
                        if (!this.options[c]) return l;
                        if (this.selector) switch (c) {
                            case "attributes":
                                if (!this._matchAttributeFilter(a)) break;

                            case "characterData":
                                return this._matchAttributesAndCharacterData(a);

                            case "childList":
                                if (a.addedNodes && a.addedNodes.length && b.added && (c = this._matchAddedNodes(a), c.length)) return c;
                                if (a.removedNodes && a.removedNodes.length && b.removed) return this._matchRemovedNodes(a);
                        } else {
                            var s = a.target instanceof Text ? d(a.target).parent() : d(a.target);
                            if (!b.subtree && s.get(0) !== this.target.get(0)) return l;

                            switch (c) {
                                case "attributes":
                                    if (!this._matchAttributeFilter(a)) break;

                                case "characterData":
                                    return this.target;

                                case "childList":
                                    if (a.addedNodes && a.addedNodes.length && b.added || a.removedNodes && a.removedNodes.length && b.removed) return this.target;
                            }
                        }
                        return l;
                    };

                    k.prototype._matchAttributesAndCharacterData = function (a) {
                        return this._matchSelector(this.target, [a.target]);
                    };

                    k.prototype._matchAddedNodes = function (a) {
                        return this._matchSelector(this.target, a.addedNodes);
                    };

                    k.prototype._matchRemovedNodes = function (a) {
                        var b = new q.Branch(this.target),
                            c = Array.prototype.slice.call(a.removedNodes).map(function (a) {
                                return a.cloneNode(!0);
                            });
                        a.previousSibling ? b.find(a.previousSibling).after(c) : a.nextSibling ? b.find(a.nextSibling).before(c) : (this.target === a.target ? b.root : b.find(a.target)).empty().append(c);
                        return this._matchSelector(b.root, c).length ? d(a.target) : l;
                    };

                    k.prototype._matchSelector = function (a, b) {
                        var c = a.find(this.selector);
                        b = Array.prototype.slice.call(b);
                        return c = c.filter(function () {
                            var a = this;
                            return b.some(function (b) {
                                return b instanceof Text ? b.parentNode === a : b === a || d(b).has(a).length;
                            });
                        });
                    };

                    k.prototype._matchAttributeFilter = function (a) {
                        return this.attributeFilter && this.attributeFilter.length ? 0 <= this.attributeFilter.indexOf(a.attributeName) : !0;
                    };

                    var n = function n(a) {
                        this.patterns = [];
                        this._target = a;
                        this._observer = null;
                    };

                    n.prototype.observe = function (a, b, c) {
                        var d = this;
                        this._observer ? this._observer.disconnect() : this._observer = new t(function (a) {
                            a.forEach(function (a) {
                                d.patterns.forEach(function (b) {
                                    var c = b.match(a);
                                    c.length && c.each(function () {
                                        b.handler.call(this, a);
                                    });
                                });
                            });
                        });
                        this.patterns.push(new k(this._target, a, b, c));

                        this._observer.observe(this._target, this._collapseOptions());
                    };

                    n.prototype.disconnect = function (a, b, c) {
                        var d = this;
                        this._observer && (this.patterns.filter(function (d) {
                            return d.is(a, b, c);
                        }).forEach(function (a) {
                            a = d.patterns.indexOf(a);
                            d.patterns.splice(a, 1);
                        }), this.patterns.length || this._observer.disconnect());
                    };

                    n.prototype.disconnectAll = function () {
                        this._observer && (this.patterns = [], this._observer.disconnect());
                    };

                    n.prototype.pause = function () {
                        this._observer && this._observer.disconnect();
                    };

                    n.prototype.resume = function () {
                        this._observer && this._observer.observe(this._target, this._collapseOptions());
                    };

                    n.prototype._collapseOptions = function () {
                        var a = {};
                        this.patterns.forEach(function (b) {
                            var c = a.attributes && a.attributeFilter;
                            if (!c && a.attributes || !b.attributeFilter) c && b.options.attributes && !b.attributeFilter && delete a.attributeFilter; else {
                                var e = {},
                                    f = [];
                                (a.attributeFilter || []).concat(b.attributeFilter).forEach(function (a) {
                                    e[a] || (f.push(a), e[a] = 1);
                                });
                                a.attributeFilter = f;
                            }
                            d.extend(a, b.options);
                        });
                        Object.keys(m).forEach(function (b) {
                            delete a[m[b]];
                        });
                        return a;
                    };

                    var p = function p(a) {
                        this.patterns = [];
                        this._paused = !1;
                        this._target = a;
                        this._events = {};
                        this._handler = this._handler.bind(this);
                    };

                    p.prototype.NS = ".jQueryObserve";

                    p.prototype.observe = function (a, b, c) {
                        a = new k(this._target, a, b, c);
                        d(this._target);
                        a.options.childList && (this._addEvent("DOMNodeInserted"), this._addEvent("DOMNodeRemoved"));
                        a.options.attributes && this._addEvent("DOMAttrModified");
                        a.options.characterData && this._addEvent("DOMCharacerDataModified");
                        this.patterns.push(a);
                    };

                    p.prototype.disconnect = function (a, b, c) {
                        var e = d(this._target),
                            f = this;
                        this.patterns.filter(function (d) {
                            return d.is(a, b, c);
                        }).forEach(function (a) {
                            a = f.patterns.indexOf(a);
                            f.patterns.splice(a, 1);
                        });
                        var g = this.patterns.reduce(function (a, b) {
                            b.options.childList && (a.DOMNodeInserted = !0, a.DOMNodeRemoved = !0);
                            b.options.attributes && (a.DOMAttrModified = !0);
                            b.options.characterData && (a.DOMCharacerDataModified = !0);
                            return a;
                        }, {});
                        Object.keys(this._events).forEach(function (a) {
                            g[a] || (delete f._events[a], e.off(a + f.NS, f._handler));
                        });
                    };

                    p.prototype.disconnectAll = function () {
                        var a = d(this._target),
                            b;

                        for (b in this._events) {
                            a.off(b + this.NS, this._handler);
                        }

                        this._events = {};
                        this.patterns = [];
                    };

                    p.prototype.pause = function () {
                        this._paused = !0;
                    };

                    p.prototype.resume = function () {
                        this._paused = !1;
                    };

                    p.prototype._handler = function (a) {
                        if (!this._paused) {
                            var b = {
                                type: null,
                                target: null,
                                addedNodes: null,
                                removedNodes: null,
                                previousSibling: null,
                                nextSibling: null,
                                attributeName: null,
                                attributeNamespace: null,
                                oldValue: null
                            };

                            switch (a.type) {
                                case "DOMAttrModified":
                                    b.type = "attributes";
                                    b.target = a.target;
                                    b.attributeName = a.attrName;
                                    b.oldValue = a.prevValue;
                                    break;

                                case "DOMCharacerDataModified":
                                    b.type = "characterData";
                                    b.target = d(a.target).parent().get(0);
                                    b.attributeName = a.attrName;
                                    b.oldValue = a.prevValue;
                                    break;

                                case "DOMNodeInserted":
                                    b.type = "childList";
                                    b.target = a.relatedNode;
                                    b.addedNodes = [a.target];
                                    b.removedNodes = [];
                                    break;

                                case "DOMNodeRemoved":
                                    b.type = "childList", b.target = a.relatedNode, b.addedNodes = [], b.removedNodes = [a.target];
                            }

                            for (a = 0; a < this.patterns.length; a++) {
                                var c = this.patterns[a],
                                    e = c.match(b);
                                e.length && e.each(function () {
                                    c.handler.call(this, b);
                                });
                            }
                        }
                    };

                    p.prototype._addEvent = function (a) {
                        this._events[a] || (d(this._target).on(a + this.NS, this._handler), this._events[a] = !0);
                    };

                    q.Pattern = k;
                    q.MutationObserver = n;
                    q.DOMEventObserver = p;

                    d.fn.observe = function (a, b, c) {
                        b ? c || (c = b, b = null) : (c = a, a = f);
                        return this.each(function () {
                            var e = d(this),
                                f = e.data("observer");
                            f || (f = t ? new n(this) : new p(this), e.data("observer", f));
                            a = g(a);
                            f.observe(a, b, c);
                        });
                    };

                    d.fn.disconnect = function (a, b, c) {
                        a && (b ? c || (c = b, b = null) : (c = a, a = f));
                        return this.each(function () {
                            var e = d(this),
                                f = e.data("observer");
                            f && (a ? (a = g(a), f.disconnect(a, b, c)) : (f.disconnectAll(), e.removeData("observer")));
                        });
                    };
                })(jQuery, jQuery.Observe);
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/core/polyfill/addeventlistener.js":
    /*!***********************************************!*\
      !*** ./src/core/polyfill/addeventlistener.js ***!
      \***********************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

            (function () {
                if (!Event.prototype.preventDefault) {
                    Event.prototype.preventDefault = function () {
                        this.returnValue = false;
                    };
                }

                if (!Event.prototype.stopPropagation) {
                    Event.prototype.stopPropagation = function () {
                        this.cancelBubble = true;
                    };
                }

                if (!Element.prototype.addEventListener) {
                    var eventListeners = [];

                    var addEventListener = function addEventListener(type, listener
                        /*, useCapture (will be ignored) */
                    ) {
                        var self = this;

                        var wrapper = function wrapper(e) {
                            e.target = e.srcElement;
                            e.currentTarget = self;

                            if (typeof listener.handleEvent != 'undefined') {
                                listener.handleEvent(e);
                            } else {
                                listener.call(self, e);
                            }
                        };

                        if (type == "DOMContentLoaded") {
                            var wrapper2 = function wrapper2(e) {
                                if (document.readyState == "complete") {
                                    wrapper(e);
                                }
                            };

                            document.attachEvent("onreadystatechange", wrapper2);
                            eventListeners.push({
                                object: this,
                                type: type,
                                listener: listener,
                                wrapper: wrapper2
                            });

                            if (document.readyState == "complete") {
                                var e = new Event();
                                e.srcElement = window;
                                wrapper2(e);
                            }
                        } else {
                            this.attachEvent("on" + type, wrapper);
                            eventListeners.push({
                                object: this,
                                type: type,
                                listener: listener,
                                wrapper: wrapper
                            });
                        }
                    };

                    var removeEventListener = function removeEventListener(type, listener
                        /*, useCapture (will be ignored) */
                    ) {
                        var counter = 0;

                        while (counter < eventListeners.length) {
                            var eventListener = eventListeners[counter];

                            if (eventListener.object == this && eventListener.type == type && eventListener.listener == listener) {
                                if (type == "DOMContentLoaded") {
                                    this.detachEvent("onreadystatechange", eventListener.wrapper);
                                } else {
                                    this.detachEvent("on" + type, eventListener.wrapper);
                                }

                                eventListeners.splice(counter, 1);
                                break;
                            }

                            ++counter;
                        }
                    };

                    Element.prototype.addEventListener = addEventListener;
                    Element.prototype.removeEventListener = removeEventListener;

                    if (HTMLDocument) {
                        HTMLDocument.prototype.addEventListener = addEventListener;
                        HTMLDocument.prototype.removeEventListener = removeEventListener;
                    }

                    if (Window) {
                        Window.prototype.addEventListener = addEventListener;
                        Window.prototype.removeEventListener = removeEventListener;
                    }
                }
            })();

            /***/
        }),

    /***/ "./src/core/polyfill/array.range.js":
    /*!******************************************!*\
      !*** ./src/core/polyfill/array.range.js ***!
      \******************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

            Array.range = function (start, end) {
                return Array.from({
                    length: end - start
                }, function (v, k) {
                    return k + start;
                });
            };

            /***/
        }),

    /***/ "./src/core/polyfill/closest.js":
    /*!**************************************!*\
      !*** ./src/core/polyfill/closest.js ***!
      \**************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

            if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
            if (!Element.prototype.closest) Element.prototype.closest = function (s) {
                var el = this;
                if (!document.documentElement.contains(el)) return null;

                do {
                    if (el.matches(s)) return el;
                    el = el.parentElement;
                } while (el !== null);

                return null;
            };

            /***/
        }),

    /***/ "./src/core/polyfill/format.js":
    /*!*************************************!*\
      !*** ./src/core/polyfill/format.js ***!
      \*************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

            if (!String.format) {
                String.format = function (format) {
                    var args = Array.prototype.slice.call(arguments, 1);
                    return format.replace(/{(\d+)}/g, function (match, number) {
                        return typeof args[number] != 'undefined' ? args[number] : match;
                    });
                };
            }

            /***/
        }),

    /***/ "./src/core/polyfill/hasAttribute.js":
    /*!*******************************************!*\
      !*** ./src/core/polyfill/hasAttribute.js ***!
      \*******************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

            ;

            (function (prototype) {
                prototype.hasAttribute = prototype.hasAttribute || function (name) {
                    return !!(this.attributes[name] && this.attributes[name].specified);
                };
            })(Element.prototype);

            /***/
        }),

    /***/ "./src/core/polyfill/padStart.js":
    /*!***************************************!*\
      !*** ./src/core/polyfill/padStart.js ***!
      \***************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

            if (!String.prototype.padStart) {
                String.prototype.padStart = function padStart(targetLength, padString) {
                    targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;

                    padString = String(typeof padString !== 'undefined' ? padString : ' ');

                    if (this.length >= targetLength) {
                        return String(this);
                    } else {
                        targetLength = targetLength - this.length;

                        if (targetLength > padString.length) {
                            padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
                        }

                        return padString.slice(0, targetLength) + String(this);
                    }
                };
            }

            /***/
        }),

    /***/ "./src/core/polyfill/reduce.js":
    /*!*************************************!*\
      !*** ./src/core/polyfill/reduce.js ***!
      \*************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {

            // Etapas de produÃ§Ã£o para o ECMA-262, Edition 5, 15.4.4.21
            // Referencia: http://es5.github.io/#x15.4.4.21
            if (!Array.prototype.reduce) {
                Array.prototype.reduce = function (callback
                    /*, valorInicial*/
                ) {
                    'use strict';

                    if (this == null) {
                        throw new TypeError('Array.prototype.reduce chamado Ã© nulo (null) ou indefinido (undefined)');
                    }

                    if (typeof callback !== 'function') {
                        throw new TypeError(callback + ' nÃ£o Ã© uma funÃ§Ã£o');
                    }

                    var t = Object(this),
                        len = t.length >>> 0,
                        k = 0,
                        value;

                    if (arguments.length == 2) {
                        value = arguments[1];
                    } else {
                        while (k < len && !(k in t)) {
                            k++;
                        }

                        if (k >= len) {
                            throw new TypeError('Reduce possui um array vazio sem um valor inicial');
                        }

                        value = t[k++];
                    }

                    for (; k < len; k++) {
                        if (k in t) {
                            value = callback(value, t[k], k, t);
                        }
                    }

                    return value;
                };
            }

            /***/
        }),

    /***/ "./src/index.js":
    /*!**********************!*\
      !*** ./src/index.js ***!
      \**********************/
    /*! no exports provided */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* WEBPACK VAR INJECTION */(function ($) {/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
    /* harmony import */ var Core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Core */ "./src/core/index.js");
    /* harmony import */ var Core_lazy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Core/lazy */ "./src/core/lazy.js");
    /* harmony import */ var Core_lazy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(Core_lazy__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
    /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
    /* harmony import */ var _react_store_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./react/store/configureStore */ "./src/react/store/configureStore.js");
    /* harmony import */ var Core_getProductById__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! Core/getProductById */ "./src/core/getProductById.js");
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */ var Core_polyfill_hasAttribute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Core/polyfill/hasAttribute */ "./src/core/polyfill/hasAttribute.js");
    /* harmony import */ var Core_polyfill_hasAttribute__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(Core_polyfill_hasAttribute__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */ var Core_polyfill_array_range__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Core/polyfill/array.range */ "./src/core/polyfill/array.range.js");
    /* harmony import */ var Core_polyfill_array_range__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(Core_polyfill_array_range__WEBPACK_IMPORTED_MODULE_12__);
    /* harmony import */ var Core_polyfill_reduce__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Core/polyfill/reduce */ "./src/core/polyfill/reduce.js");
    /* harmony import */ var Core_polyfill_reduce__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(Core_polyfill_reduce__WEBPACK_IMPORTED_MODULE_13__);
    /* harmony import */ var react_redux_toastr_lib_css_react_redux_toastr_min_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux-toastr/lib/css/react-redux-toastr.min.css */ "./node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css");
    /* harmony import */ var react_redux_toastr_lib_css_react_redux_toastr_min_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr_lib_css_react_redux_toastr_min_css__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */ var _react_components_Countdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./react/components/Countdown */ "./src/react/components/Countdown/index.js");
    /* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-redux-toastr */ "./node_modules/react-redux-toastr/lib/index.js");
    /* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_16__);
    /* harmony import */ var _react_components_WishList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./react/components/WishList */ "./src/react/components/WishList/index.jsx");


                // Import Componete CSS







                var store = Object(_react_store_configureStore__WEBPACK_IMPORTED_MODULE_8__["default"])();


                //Polyfill





                var config = {
                    menu: true,
                    minicart: true,
                    buybutton: true,
                    giftlist: false,
                    contact: true,
                    relatedSearch: true,
                    wishlist: true,
                    comprarDicas: true,
                    giftToast: true
                }; // Load Order Form
                // store.dispatch(fetchOrderForm());

                Object(_react_components_Countdown__WEBPACK_IMPORTED_MODULE_15__["default"])();

                var rootToastr = document.querySelector('[data-component=toastr]');
                if (rootToastr) react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
                    store: store
                }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux_toastr__WEBPACK_IMPORTED_MODULE_16___default.a, {
                    timeOut: 5000,
                    newestOnTop: false,
                    preventDuplicates: true,
                    position: "top-right",
                    transitionIn: "fadeIn",
                    transitionOut: "fadeOut",
                    progressBar: true,
                    closeOnToastrClick: true
                })), rootToastr);
                var Wholesale = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
                    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, /*! ./react/components/Wholesale */ "./src/react/components/Wholesale/index.jsx"));
                });

                if (window.skuJson) {
                    initWholesales();
                }

                function initWholesales() {
                    return _initWholesales.apply(this, arguments);
                }

                function _initWholesales() {
                    _initWholesales = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                        var current, product, body, rootWholesales;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                            while (1) {
                                switch (_context.prev = _context.next) {
                                    case 0:
                                        _context.next = 2;
                                        return vtexjs.catalog.getCurrentProductWithVariations();

                                    case 2:
                                        current = _context.sent;
                                        _context.next = 5;
                                        return Object(Core_getProductById__WEBPACK_IMPORTED_MODULE_9__["default"])(current.productId);

                                    case 5:
                                        product = _context.sent;
                                        body = document.querySelector('body');

                                        if (product['Atacado']) {
                                            if (product['Atacado'] == 'Ativo') {
                                                rootWholesales = Array.from(document.querySelectorAll('[data-component=wholesale]'));

                                                if (rootWholesales.length) {
                                                    body.classList.add('wholesale-page');
                                                    rootWholesales.forEach(function (rootWholesale) {
                                                        react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
                                                            store: store
                                                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
                                                            fallback: ""
                                                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Wholesale, {
                                                            product: product,
                                                            sc: current.salesChannel
                                                        }))), rootWholesale);
                                                    });
                                                } else body.classList.add('not-wholesale');
                                            } else body.classList.add('not-wholesale');
                                        } else body.classList.add('not-wholesale');

                                    case 8:
                                    case "end":
                                        return _context.stop();
                                }
                            }
                        }, _callee);
                    }));
                    return _initWholesales.apply(this, arguments);
                }

                var WholesalePrices = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
                    return __webpack_require__.e(/*! import() */ 14).then(__webpack_require__.bind(null, /*! ./react/components/Wholesale/wholesalePrice */ "./src/react/components/Wholesale/wholesalePrice.jsx"));
                });
                var rootWholesalePrices = Array.from(document.querySelectorAll('[data-component=wholesale-prices]'));

                if (rootWholesalePrices.length) {
                    rootWholesalePrices.forEach(function (rootWholesalePrice) {
                        react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
                            store: store
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
                            fallback: ""
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(WholesalePrices, null))), rootWholesalePrice);
                    });
                }

                var Kit = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
                    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, /*! ./react/components/kit */ "./src/react/components/kit/index.jsx"));
                });
                var rootKit = Array.from(document.querySelectorAll('[data-component=kits]'));

                if (rootKit.length) {
                    rootKit.forEach(function (kit) {
                        var title = kit.querySelector('h2') ? kit.querySelector('h2').innerHTML : '';
                        var rate = [];
                        var ids = [];
                        Array.from(kit.querySelectorAll('[data-id]')).forEach(function (id) {
                            ids.push(id.getAttribute('data-id'));
                            rate.push(id.querySelector('.rate').innerHTML);
                        });
                        react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
                            store: store
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
                            fallback: ""
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Kit, {
                            ids: ids,
                            rate: rate,
                            title: title
                        }))), kit);
                    });
                }

                var Menu = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
                    return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./react/components/Menu */ "./src/react/components/Menu/index.js"));
                });

                if (config.menu) {
                    var rootMenu = document.querySelector('#menu');

                    if (rootMenu) {
                        var socials = document.querySelector('#footer .footer__social-list'); // Render Menu

                        react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
                            store: store
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
                            fallback: ""
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Menu, {
                            socials: socials
                        }))), rootMenu);
                    }
                } // Minicart


                var Minicart = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
                    return Promise.all(/*! import() */[__webpack_require__.e(1), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, /*! ./react/components/Minicart */ "./src/react/components/Minicart/index.js"));
                });

                if (config.minicart) {
                    var rootMinicart = document.querySelector('#minicart');

                    if (rootMinicart) {
                        var valorFrete = 0;
                        if (document.querySelector('#valorFreteGratis')) valorFrete = document.querySelector('#valorFreteGratis').innerHTML;
                        react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
                            store: store
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
                            fallback: ""
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Minicart, {
                            frete: valorFrete
                        }))), rootMinicart);
                    }
                }

                function addBuyButton() {
                    var rootBuyButtom = document.querySelectorAll('.showcase__buy:not(.on)');
                    Array.from(rootBuyButtom).forEach(function (root) {
                        var id = root.getAttribute('data-id');
                        var title = root.innerHTML;
                        root.classList.add('on');
                        react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
                            store: store
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
                            fallback: ""
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(BuyButton, {
                            id: id,
                            title: title
                        }))), root);
                    });
                }

                var BuyButton = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
                    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, /*! ./react/components/BuyButton */ "./src/react/components/BuyButton/index.jsx"));
                });

                if (config.buybutton) {
                    addBuyButton();
                } // Brinde showcase


                var GiftToast = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
                    return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! ./react/components/GiftToast */ "./src/react/components/GiftToast/index.js"));
                });

                if (config.giftToast) {
                    addGiftToast();
                }

                function addGiftToast() {
                    var rootGiftToast = document.querySelectorAll('.showcase__giftToast:not(.on)');
                    Array.from(rootGiftToast).forEach(function (root) {
                        var id = root.getAttribute('data-id');
                        root.classList.add('on');
                        react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
                            store: store
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
                            fallback: ""
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(GiftToast, {
                            id: id
                        }))), root);
                    });
                } // Brinde showcase - fim


                function addComprarDicasBtn() {
                    var rootProducts = document.querySelectorAll('.video__showcase [class*="produtos-para-cabelo-tratamento-profissional"]');
                    var arrayProd = [];
                    var root = document.querySelector('.add__product-list');
                    Array.from(rootProducts).forEach(function (item) {
                        arrayProd.push(item.querySelector('article.showcase__item').getAttribute('data-sku'));
                    });
                    react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
                        store: store
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
                        fallback: ""
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ComprarDicas, {
                        skus: arrayProd
                    }))), root);
                }

                var ComprarDicas = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
                    return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./react/components/ComprarDicas */ "./src/react/components/ComprarDicas/index.js"));
                });
                var home = document.getElementsByClassName('home');

                if (home.length) {
                    addComprarDicasBtn();
                }

                $vtex(document).ajaxComplete(function (evt, xhref, settings) {
                    if (config.buybutton) {
                        addBuyButton();
                    }

                    if (settings.url.indexOf('buscapagina') !== -1) {
                        Object(_react_components_Countdown__WEBPACK_IMPORTED_MODULE_15__["default"])();
                    }
                }); // Contato

                var Contact = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
                    return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./react/components/Contact */ "./src/react/components/Contact/index.js"));
                });

                if (config.contact) {
                    var rootContact = document.querySelector('[data-component=contact]');

                    if (rootContact) {
                        react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
                            store: store
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
                            fallback: ""
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Contact, null))), rootContact);
                    }
                }



                if (config.wishlist) {
                    Object(_react_components_WishList__WEBPACK_IMPORTED_MODULE_17__["default"])();
                } // O Conselheiro


                var Advisor = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_5__["lazy"])(function () {
                    return Promise.all(/*! import() */[__webpack_require__.e(2), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, /*! ./react/components/Advisor */ "./src/react/components/Advisor/index.jsx"));
                });
                var rootAdvisor = document.querySelector('[data-component=advisor]');

                if (rootAdvisor) {
                    react_dom__WEBPACK_IMPORTED_MODULE_6___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5__["Suspense"], {
                        fallback: ""
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Advisor, null)), rootAdvisor);
                }
                /**
                 * Function Flag Redirect
                 */


                ;

                (function () {
                    var flags = document.querySelectorAll('.labels--collection .flag');

                    function redirectFlag(flags, label) {
                        var id = Object.keys(flags).filter(function (key) {
                            return flags[key] === label;
                        })[0];
                        location.href = "/busca/?fq=H:".concat(id);
                    }

                    flags.forEach(function (flag) {
                        flag.addEventListener('click', function (evt) {
                            var _this = evt.currentTarget;

                            var skuID = _this.closest('.showcase__item').getAttribute('data-sku');

                            var label = _this.innerHTML;
                            axios__WEBPACK_IMPORTED_MODULE_10___default.a.get("/api/catalog_system/pub/products/search?fq=skuId:".concat(skuID)).then(function (data) {
                                return data.data;
                            }).then(function (data) {
                                return data[0].clusterHighlights;
                            }).then(function (flags) {
                                return redirectFlag(flags, label);
                            });
                        });
                    });
                })();

                $('body').append('<div class="continuar-comprando"></div>');
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

            /***/
        }),

    /***/ "./src/react/actions/wishlist.js":
    /*!***************************************!*\
      !*** ./src/react/actions/wishlist.js ***!
      \***************************************/
    /*! exports provided: wishlist, wishlistOrderForm, wishlistLogin, wishlistRemove, wishlistAdd, isLoadWishlist, loadWishlist, create, isCreating, isRemoving, remove, update, products, buy */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlist", function () { return wishlist; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistOrderForm", function () { return wishlistOrderForm; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistLogin", function () { return wishlistLogin; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistRemove", function () { return wishlistRemove; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistAdd", function () { return wishlistAdd; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadWishlist", function () { return isLoadWishlist; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadWishlist", function () { return loadWishlist; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function () { return create; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCreating", function () { return isCreating; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRemoving", function () { return isRemoving; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function () { return remove; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function () { return update; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function () { return products; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buy", function () { return buy; });
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
    /* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var Core_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Core/config */ "./src/core/config.json");
            var Core_config__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! Core/config */ "./src/core/config.json", 1);
    /* harmony import */ var _components_WishList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WishList */ "./src/react/components/WishList/index.jsx");


            var HOST = '/api';

            function randomNumber() {
                return Math.floor(Math.random() * 5 + 1) + new Date().getTime();
            }

            function wishlist(products) {
                return {
                    type: 'WISHLIST',
                    products: products
                };
            }
            function wishlistOrderForm(orderForm) {
                return {
                    type: 'WISHLIST_ORDERFORM',
                    orderForm: orderForm
                };
            }

            function wishlistLogin() {
                return function (dispatch) {
                    return vtexjs.checkout.getOrderForm().done(function (orderForm) {
                        if (!orderForm.loggedIn) {
                            vtexid.start({
                                returnUrl: '',
                                userEmail: '',
                                locale: 'pt-BR',
                                forceReload: false
                            });
                        } else {
                            dispatch(wishlistOrderForm(orderForm));
                            Object(_components_WishList__WEBPACK_IMPORTED_MODULE_2__["default"])(orderForm);
                        }
                    });
                };
            }
            function wishlistRemove(id) {
                return {
                    type: 'WISHILIST_REMOVE',
                    id: id
                };
            }
            function wishlistAdd(id) {
                return {
                    type: 'WISHILIST_ADD',
                    id: id
                };
            }
            function isLoadWishlist(loadding) {
                return {
                    type: 'IS_LOAD_WISHLIST',
                    loadding: loadding
                };
            }
            function loadWishlist(_id_) {
                return function (dispatch) {
                    var request = axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(HOST, "/dataentities/LD/search/?idCliente=").concat(_id_, "&_fields=id,idCliente,products&").concat(randomNumber()));
                    dispatch(isLoadWishlist(true));
                    return request.then(function (data) {
                        data = data.data;
                        var idCliente = _id_;
                        var _products = [];
                        var _dataTMP = {
                            idCliente: idCliente,
                            products: _products
                        };

                        if (data.length) {
                            _dataTMP.id = data[0].id;
                            _dataTMP.products = JSON.parse(data[0].products);

                            if (_dataTMP.products.length) {
                                var count = 0;
                                var total = _dataTMP.products.length;

                                _dataTMP.products.forEach(function (id) {
                                    var request = fetchProduct(id);
                                    request.then(function (data) {
                                        return data.data;
                                    }).then(function (data) {
                                        if (data.length) {
                                            var product = maskProduct(data[0]);
                                            dispatch(products(product));
                                        }

                                        if (++count == total) {
                                            dispatch(isLoadWishlist(false));
                                        }

                                        return null;
                                    }).catch(function () {
                                        dispatch(isLoadWishlist(false));
                                    });
                                });
                            } else dispatch(isLoadWishlist(false));
                        } else {
                            dispatch(isLoadWishlist(false));
                        }

                        dispatch(wishlist(_dataTMP));
                        return null;
                    }).catch(function (err) {
                        return dispatch(isLoadWishlist(false));
                    });
                };
            }

            function fetchProduct(id) {
                return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("".concat(HOST, "/catalog_system/pub/products/search?fq=productId:").concat(id, "&").concat(Math.floor(Math.random() * 5 + 1)));
            }

            function maskProduct(data) {
                return {
                    id: parseInt(data.productId),
                    name: data.productName,
                    link: data.link,
                    image: {
                        url: data.items[0].images[0].imageUrl,
                        label: data.items[0].images[0].imageText
                    },
                    skuID: parseInt(data.items[0].itemId)
                };
            }

            function create(id) {
                return function (dispatch) {
                    var request = fetchProduct(id);
                    return request.then(function (data) {
                        return data.data;
                    }).then(function (data) {
                        if (data.length) {
                            var product = maskProduct(data[0]);
                            dispatch(products(product));
                        }

                        return null;
                    });
                };
            }
            function isCreating(creating) {
                return {
                    type: 'WISHLIST_IS_CREATING',
                    creating: creating
                };
            }
            function isRemoving(removing) {
                return {
                    type: 'WISHLIST_IS_REMOVING',
                    removing: removing
                };
            }
            function remove(id) {
                return {
                    type: 'WISHLIST_DELETE',
                    id: id
                };
            }
            function update(id) {
                return function (dispatch, getState) {
                    var wishlist = getState().wishlist;
                    var index = wishlist.products.indexOf(id);
                    var addFlag = false;
                    var _wishlist = {
                        id: wishlist.id,
                        idCliente: wishlist.idCliente,
                        products: []
                    };
                    if (wishlist.id == 0) delete _wishlist.id;

                    if (index != -1) {
                        wishlist.products.splice(index, 1);
                        dispatch(isRemoving(true));
                        dispatch(remove(id));
                    } else {
                        wishlist.products.push(id);
                        dispatch(isCreating(true));
                        dispatch(create(id));
                        addFlag = true;
                    }

                    _wishlist.products = JSON.stringify(wishlist.products);
                    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch("".concat(HOST, "/dataentities/LD/documents/"), _wishlist).then(function () {
                        if (!_wishlist.id) {
                            vtexjs.checkout.getOrderForm().done(function (orderForm) {
                                _wishlist.id = orderForm.clientProfileData.email;
                                dispatch(wishlist(_wishlist));
                            });
                        }

                        if (addFlag) {
                            dispatch(isCreating(false));
                            dispatch(wishlistAdd(id));
                        } else {
                            dispatch(isRemoving(false));
                            dispatch(wishlistRemove(id));
                        }

                        return null;
                    }).catch(function (err) {
                        if (addFlag) {
                            dispatch(isCreating(false));
                            dispatch(remove(id));
                        } else {
                            dispatch(isRemoving(false));
                            dispatch(create(id));
                        }
                    });
                };
            }
            function products(products) {
                return {
                    type: 'WISHLIST_PRODUCTS',
                    products: products
                };
            }
            function buy(products) {
                return function (dispatch) {
                    var items = [];
                    products.forEach(function (product) {
                        var item = {
                            id: product.skuID,
                            quantity: product.quantity || 1,
                            seller: Core_config__WEBPACK_IMPORTED_MODULE_1__.seller.id
                        };
                        items.push(item);
                    });
                    return vtexjs.checkout.addToCart(items, null, Core_config__WEBPACK_IMPORTED_MODULE_1__.seller.channel).done(function (orderForm) {
                        orderForm.items.forEach(function (item) {
                            var removeProduct = products.filter(function (prod) {
                                return prod.id == parseInt(item.productId);
                            });
                            removeProduct.forEach(function (prod) {
                                return dispatch(update(prod.id));
                            });
                        });
                        return orderForm;
                    });
                };
            }

            /***/
        }),

    /***/ "./src/react/components/Countdown/CountDown.jsx":
    /*!******************************************************!*\
      !*** ./src/react/components/Countdown/CountDown.jsx ***!
      \******************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return CountDown; });
    /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
    /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
    /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
    /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
    /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
    /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var react_countdown_now__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-countdown-now */ "./node_modules/react-countdown-now/dist/index.es.js");






            function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

            function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })); return true; } catch (e) { return false; } }




            var Completionist = function Completionist() {
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", null, "You are good to go!");
            };

            var renderer = function renderer(_ref) {
                var days = _ref.days,
                    hours = _ref.hours,
                    minutes = _ref.minutes,
                    seconds = _ref.seconds,
                    completed = _ref.completed;

                if (completed) {
                    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Completionist, null);
                } else {
                    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
                        className: "countdown"
                    }, days > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                        className: "countdown__item countdown__item--days"
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                        className: "countdown__number"
                    }, days), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                        className: "countdown__label"
                    }, "dias")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                        className: "countdown__item countdown__item--hours"
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                        className: "countdown__number"
                    }, String(hours).padStart(2, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                        className: "countdown__label"
                    }, "Horas")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                        className: "countdown__item countdown__item--minutes"
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                        className: "countdown__number"
                    }, String(minutes).padStart(2, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                        className: "countdown__label"
                    }, "Minutos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                        className: "countdown__item countdown__item--seconds"
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                        className: "countdown__number"
                    }, String(seconds).padStart(2, '0')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                        className: "countdown__label"
                    }, "Segundos")));
                }
            };

            var CountDown = /*#__PURE__*/function (_Component) {
                _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(CountDown, _Component);

                var _super = _createSuper(CountDown);

                function CountDown() {
                    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CountDown);

                    return _super.apply(this, arguments);
                }

                _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CountDown, [{
                    key: "render",
                    value: function render() {
                        var valid = this.props.valid;
                        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_countdown_now__WEBPACK_IMPORTED_MODULE_6__["default"], {
                            date: valid,
                            renderer: renderer
                        }));
                    }
                }]);

                return CountDown;
            }(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



            /***/
        }),

    /***/ "./src/react/components/Countdown/index.js":
    /*!*************************************************!*\
      !*** ./src/react/components/Countdown/index.js ***!
      \*************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
    /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var _CountDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CountDown */ "./src/react/components/Countdown/CountDown.jsx");
    /* harmony import */ var Core_getProductById__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Core/getProductById */ "./src/core/getProductById.js");
    /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
    /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);






     // buscapagina

    /* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
                var countDown, pageProductCountdown, product, id, prod;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                countDown = Array.from(document.querySelectorAll('.showcase__item:not(.showcase__item--countdown) .product_field_27 .sim'));
                                countDown.forEach(function (root) {
                                    var id = root.closest('[data-sku]').getAttribute('produto');
                                    var elRoot = root.closest('.showcase__item');

                                    if (id && root) {
                                        renderCountDown(id, elRoot);
                                    }
                                });
                                pageProductCountdown = document.querySelector('[data-component=countdown]');

                                if (!pageProductCountdown) {
                                    _context.next = 12;
                                    break;
                                }

                                _context.next = 6;
                                return vtexjs.catalog.getCurrentProductWithVariations();

                            case 6:
                                product = _context.sent;
                                id = product.productId;
                                _context.next = 10;
                                return Object(Core_getProductById__WEBPACK_IMPORTED_MODULE_5__["default"])(id);

                            case 10:
                                prod = _context.sent;

                                if (prod.countdown) {
                                    if (prod.countdown.filter(function (item) {
                                        return item === 'Sim';
                                    })) {
                                        renderCountDown(id, pageProductCountdown);
                                    }
                                }

                            case 12:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee);
            })));

            function renderCountDown(_x, _x2) {
                return _renderCountDown.apply(this, arguments);
            }

            function _renderCountDown() {
                _renderCountDown = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(id, root) {
                    var data, item, seller, Price, PriceWithoutDiscount, dateValid, div;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                        while (1) {
                            switch (_context2.prev = _context2.next) {
                                case 0:
                                    _context2.prev = 0;
                                    _context2.next = 3;
                                    return Object(Core_getProductById__WEBPACK_IMPORTED_MODULE_5__["default"])(id);

                                case 3:
                                    data = _context2.sent;

                                    if (data) {
                                        item = data.items[0];
                                        seller = item.sellers[0];
                                        Price = seller.commertialOffer.ListPrice;
                                        PriceWithoutDiscount = seller.commertialOffer.Price;
                                        dateValid = new Date(seller.commertialOffer.PriceValidUntil);
                                        div = document.createElement('div');
                                        root.appendChild(div);
                                        root.setAttribute('data-countdown', 'true');

                                        if (PriceWithoutDiscount && dateValid && moment__WEBPACK_IMPORTED_MODULE_6___default()(dateValid).isAfter(new Date()) && Price !== PriceWithoutDiscount) {
                                            react_dom__WEBPACK_IMPORTED_MODULE_3___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CountDown__WEBPACK_IMPORTED_MODULE_4__["default"], {
                                                valid: dateValid
                                            }), div);
                                        }
                                    }

                                    _context2.next = 10;
                                    break;

                                case 7:
                                    _context2.prev = 7;
                                    _context2.t0 = _context2["catch"](0);
                                    console.log('[COUNTDOWN]: Error', _context2.t0);

                                case 10:
                                case "end":
                                    return _context2.stop();
                            }
                        }
                    }, _callee2, null, [[0, 7]]);
                }));
                return _renderCountDown.apply(this, arguments);
            }

            /***/
        }),

    /***/ "./src/react/components/WishList/heart.jsx":
    /*!*************************************************!*\
      !*** ./src/react/components/WishList/heart.jsx ***!
      \*************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
    /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
    /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
    /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
    /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
    /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
    /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
    /* harmony import */ var _actions_wishlist__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/wishlist */ "./src/react/actions/wishlist.js");








            function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, result); }; }

            function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })); return true; } catch (e) { return false; } }






            var heart = /*#__PURE__*/function (_Component) {
                _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(heart, _Component);

                var _super = _createSuper(heart);

                function heart() {
                    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, heart);

                    return _super.apply(this, arguments);
                }

                _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(heart, [{
                    key: "handle",
                    value: function () {
                        var _handle = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.mark(function _callee() {
                            var _this$props, id, orderForm, wishlist, update;

                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_6___default.a.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            _context.next = 2;
                                            return this.props.login();

                                        case 2:
                                            _this$props = this.props, id = _this$props.id, orderForm = _this$props.orderForm, wishlist = _this$props.wishlist, update = _this$props.update;

                                            if (!orderForm.loggedIn) {
                                                _context.next = 7;
                                                break;
                                            }

                                            _context.next = 6;
                                            return update(parseInt(id), wishlist);

                                        case 6:
                                            this.forceUpdate();

                                        case 7:
                                        case "end":
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));

                        function handle() {
                            return _handle.apply(this, arguments);
                        }

                        return handle;
                    }()
                }, {
                    key: "render",
                    value: function render() {
                        var _this = this;

                        var _this$props2 = this.props,
                            removing = _this$props2.removing,
                            creating = _this$props2.creating,
                            wishlist = _this$props2.wishlist;
                        var disabled = true;
                        var selected = false;
                        var index = -1;
                        if (wishlist.products) index = wishlist.products.findIndex(function (id) {
                            return id == _this.props.id;
                        });
                        if (index > -1) selected = true;
                        if (!removing && !creating) disabled = false;
                        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
                            disabled: disabled,
                            "aria-selected": selected,
                            onClick: this.handle.bind(this),
                            className: "c-wishlist__button c-wishlist__button--heart",
                            type: "button"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("svg", {
                            width: "99px",
                            height: "12px",
                            viewBox: "0 0 99 12",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
                            id: "Home",
                            stroke: "none",
                            fill: "none"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
                            id: "layout-belezademulher",
                            transform: "translate(-973.000000, -1896.000000)"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
                            id: "hover-prod",
                            transform: "translate(843.000000, 1431.000000)"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
                            id: "Group-50"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
                            id: "Group-116",
                            transform: "translate(11.000000, 412.000000)"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
                            id: "Group-9",
                            transform: "translate(2.000000, 51.000000)"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
                            id: "Group-118",
                            transform: "translate(117.000000, 0.000000)"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("text", {
                            id: "Lista-de-desejos"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tspan", {
                            x: "15",
                            y: "11"
                        }, "Lista de desejos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
                            id: "Group-117",
                            transform: "translate(0.000000, 2.000000)"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
                            id: "e-commerce-like-heart",
                            transform: "translate(6.000000, 5.600000) scale(-1, 1) translate(-6.000000, -5.600000) "
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("g", {
                            id: "Shape"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("path", {
                            d: "M11.8116245,2.27291041 C11.6202367,1.72358791 11.2840898,1.22804591 10.8395143,0.839855543 C10.3945224,0.451307951 9.85929796,0.186408735 9.2917102,0.0738219485 C9.07786531,0.0313986562 8.85798367,0.00989137738 8.63818776,0.00989137738 C7.9969102,0.00989137738 7.37321633,0.192309071 6.83456327,0.53743561 C6.51029388,0.745203807 6.22544082,1.00579171 5.99079184,1.30711534 C5.75620408,1.00637066 5.47154694,0.746275476 5.14762041,0.538913774 C4.60922449,0.194292273 3.98595918,0.0121332587 3.34517143,0.0121332587 C3.34513469,0.0121332587 3.34518367,0.0121332587 3.34515918,0.0121332587 C2.81123265,0.0121332587 2.27535918,0.144798432 1.79561633,0.395753639 C1.31622857,0.646524076 0.900465306,1.0113841 0.593314286,1.45089138 C0.278595918,1.90120157 0.0868897959,2.40544009 0.0235102041,2.94958903 C-0.0319836735,3.42613662 0.0108734694,3.93770437 0.150918367,4.47007727 C0.428338776,5.52468533 1.04238367,6.48662486 1.50865714,7.10788466 C2.52247347,8.45866741 3.9164449,9.68476708 5.77022449,10.8562732 L5.99167347,10.996206 L6.21313469,10.8562732 C8.4933551,9.41528555 10.0849224,7.89391041 11.0787429,6.20519485 C11.6503102,5.23399216 11.9480571,4.3687738 11.9890653,3.5601075 C12.011902,3.10942777 11.9521959,2.6763505 11.8116245,2.27291041 Z M5.99169796,10.0052945 C4.33553878,8.93244345 3.08478367,7.81778499 2.17317551,6.60315342 C1.75186531,6.04180851 1.1986898,5.17890594 0.955861224,4.25580515 C0.842657143,3.82545017 0.807208163,3.41878275 0.850506122,3.04706159 C0.8976,2.6427346 1.04022857,2.26779843 1.27446122,1.9326495 C1.50520408,1.60248936 1.81825714,1.32801904 2.17975102,1.13892497 C2.54137959,0.949756999 2.94437143,0.849771557 3.34517143,0.849771557 C3.82733878,0.849771557 4.29603673,0.986661814 4.70058367,1.24562374 C5.09491837,1.49804479 5.41193878,1.85412206 5.61733469,2.2753617 L5.99152653,3.04267637 L6.36505714,2.27504143 C6.57026939,1.85329675 6.88727755,1.4967514 7.28185714,1.24396081 C7.68663673,0.984617021 8.15562857,0.847541993 8.63818776,0.847541993 C8.80403265,0.847541993 8.96970612,0.863727884 9.13062857,0.895643897 C9.55600408,0.980022396 9.9582,1.17947592 10.2937224,1.47244793 C10.6291102,1.76529675 10.8822612,2.13790482 11.0258449,2.54997984 C11.130502,2.85035498 11.1747918,3.17587122 11.1574776,3.51746249 C11.1235347,4.18730459 10.8633918,4.92689138 10.3622449,5.77847368 C9.4694449,7.29550056 8.03824898,8.68001008 5.99169796,10.0052945 Z"
                        })))))))))))));
                    }
                }]);

                return heart;
            }(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

            heart.propTypes = {
                wishlist: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired,
                removing: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
                creating: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
                orderForm: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object.isRequired
            };

            var mapStateToProps = function mapStateToProps(state) {
                return {
                    wishlist: state.wishlist,
                    removing: state.isRemoving,
                    creating: state.isCreating,
                    orderForm: state.wishlistOrderForm
                };
            };

            var mapDispatchToProps = function mapDispatchToProps(dispatch) {
                return {
                    update: function update(id, wishlist) {
                        return dispatch(Object(_actions_wishlist__WEBPACK_IMPORTED_MODULE_10__["update"])(id, wishlist));
                    },
                    login: function login() {
                        return dispatch(Object(_actions_wishlist__WEBPACK_IMPORTED_MODULE_10__["wishlistLogin"])());
                    }
                };
            };

    /* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(heart));

            /***/
        }),

    /***/ "./src/react/components/WishList/index.jsx":
    /*!*************************************************!*\
      !*** ./src/react/components/WishList/index.jsx ***!
      \*************************************************/
    /*! exports provided: load, loadHeart, default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function () { return load; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadHeart", function () { return loadHeart; });
    /* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
    /* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
    /* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
    /* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/configureStore */ "./src/react/store/configureStore.js");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.styl */ "./src/react/components/WishList/style.styl");
    /* harmony import */ var _style_styl__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_styl__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var _painel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./painel */ "./src/react/components/WishList/painel.jsx");
    /* harmony import */ var _heart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heart */ "./src/react/components/WishList/heart.jsx");






            var store = Object(_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"])();


            function load(orderForm) {
                console.log('[ WISHLIST ] Loading...', orderForm);
                var rootPainel = document.querySelector('[data-component=wishlist]');

                if (rootPainel) {
                    react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
                        store: store
                    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_painel__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        orderForm: orderForm,
                        id: orderForm.clientProfileData.email
                    })), rootPainel);
                }
            }
            function loadHeart() {
                var rootHearts = Array.from(document.querySelectorAll('[data-component=wishlist-add]:not(actived)'));

                if (rootHearts.length) {
                    rootHearts.forEach(function (rootHeart) {
                        var id = rootHeart.getAttribute('data-id');
                        rootHeart.classList.add('actived');
                        react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
                            store: store
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_heart__WEBPACK_IMPORTED_MODULE_7__["default"], {
                            id: id
                        })), rootHeart);
                    });
                }
            }
            $vtex(document).ajaxComplete(function () {
                loadHeart();
            });
    /* harmony default export */ __webpack_exports__["default"] = (function () {
                if ((typeof vtexjs === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(vtexjs)) == 'object') {
                    vtexjs.checkout.getOrderForm().done(function (orderForm) {
                        if (orderForm.loggedIn) load(orderForm);
                    });
                }

                loadHeart();
            });

            /***/
        }),

    /***/ "./src/react/components/WishList/painel.jsx":
    /*!**************************************************!*\
      !*** ./src/react/components/WishList/painel.jsx ***!
      \**************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
    /* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
    /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
    /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
    /* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
    /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
    /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
    /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
    /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
    /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
    /* harmony import */ var _actions_wishlist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../actions/wishlist */ "./src/react/actions/wishlist.js");
    /* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product */ "./src/react/components/WishList/product.jsx");
    /* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index */ "./src/react/components/WishList/index.jsx");
    /* harmony import */ var _reducers_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../reducers/core */ "./src/react/reducers/core.js");









            function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, result); }; }

            function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })); return true; } catch (e) { return false; } }









            var painel = /*#__PURE__*/function (_Component) {
                _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(painel, _Component);

                var _super = _createSuper(painel);

                function painel(props) {
                    var _this;

                    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, painel);

                    _this = _super.call(this, props);
                    _this.state = {
                        open: false,
                        product: [],
                        products: [],
                        eventID: 1,
                        show: true,
                        time: 3,
                        checked: true,
                        purchase: [],
                        isBuyAll: false
                    };
                    _this.handle = _this.handle.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
                    _this.selectALL = _this.selectALL.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
                    _this.buyALL = _this.buyALL.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
                    _this.checkedBuyAll = _this.checkedBuyAll.bind(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3___default()(_this));
                    return _this;
                }

                _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(painel, [{
                    key: "checkedBuyAll",
                    value: function checkedBuyAll() {
                        var checkedAll = Array.from(document.querySelectorAll('.c-wishlist__checkbox:checked'));
                        var isBuyAll = false;
                        if (checkedAll.length) isBuyAll = true;
                        this.setState({
                            isBuyAll: isBuyAll
                        });
                    }
                }, {
                    key: "buy",
                    value: function buy(product) {
                        var _this2 = this;

                        var purchase = this.state.purchase;
                        purchase.push(product);
                        this.props.buy(purchase).done(function (orderForm) {
                            orderForm.items.forEach(function (item) {
                                purchase = purchase.filter(function (purch) {
                                    return purch.id != item.productId;
                                });

                                _this2.setState({
                                    purchase: purchase
                                });
                            });
                        });
                    }
                }, {
                    key: "buyALL",
                    value: function buyALL(event) {
                        event.preventDefault();
                        this.checkedBuyAll();

                        if (this.state.isBuyAll) {
                            var form = event.target; // let data = new FormData(form);

                            var ids = Array.from(document.querySelectorAll('.c-wishlist__checkbox:checked')).map(function (checkbox) {
                                return parseInt(checkbox.value);
                            });
                            var _this$props = this.props,
                                products = _this$props.products,
                                _buy = _this$props.buy;
                            var buyProducts = products.filter(function (p) {
                                return ids.indexOf(p.id) != -1 ? true : false;
                            });
                            if (buyProducts) _buy(buyProducts);
                        }
                    }
                }, {
                    key: "selectALL",
                    value: function selectALL() {
                        var _this3 = this;

                        var radios = Array.from(document.querySelectorAll('.c-wishlist__checkbox'));
                        var isBuyAll = false;
                        radios.forEach(function (radio) {
                            if (_this3.state.checked) radio.checked = true; else radio.checked = false;
                        });
                        if (radios.filter(function (radio) {
                            return radio.checked;
                        }).length) isBuyAll = true;
                        this.setState({
                            checked: !this.state.checked,
                            isBuyAll: isBuyAll
                        });
                    }
                }, {
                    key: "handle",
                    value: function handle() {
                        if (!this.state.open) document.querySelector('body').classList.add('is-wishlist'); else document.querySelector('body').classList.remove('is-wishlist');
                        this.setState({
                            open: !this.state.open
                        });
                        var radios = Array.from(document.querySelectorAll('.c-wishlist__checkbox'));
                        radios.forEach(function (radio) {
                            return radio.checked = false;
                        });
                        this.setState({
                            checked: true
                        });
                    }
                }, {
                    key: "deleteEvent",
                    value: function deleteEvent(product) {
                        // window.setTimeout(function(){
                        var products = this.state.product;
                        var index = products.map(function (p) {
                            return p.eventID;
                        }).indexOf(product.eventID);
                        products = products.filter(function (p, i) {
                            return i != index;
                        });
                        this.setState({
                            product: products
                        }); // }.bind(this), 1000);
                    }
                }, {
                    key: "remove",
                    value: function () {
                        var _remove = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee(product) {
                            var products, index;
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee$(_context) {
                                while (1) {
                                    switch (_context.prev = _context.next) {
                                        case 0:
                                            products = this.state.product;
                                            index = products.map(function (p) {
                                                return p.eventID;
                                            }).indexOf(product.eventID);

                                            if (!(index != -1)) {
                                                _context.next = 7;
                                                break;
                                            }

                                            products[index].show = false;
                                            this.setState({
                                                product: products
                                            });
                                            _context.next = 7;
                                            return this.deleteEvent(product);

                                        case 7:
                                        case "end":
                                            return _context.stop();
                                    }
                                }
                            }, _callee, this);
                        }));

                        function remove(_x) {
                            return _remove.apply(this, arguments);
                        }

                        return remove;
                    }()
                }, {
                    key: "componentDidMount",
                    value: function () {
                        var _componentDidMount = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee2() {
                            var _this4 = this;

                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee2$(_context2) {
                                while (1) {
                                    switch (_context2.prev = _context2.next) {
                                        case 0:
                                            _context2.next = 2;
                                            return this.props.load(this.props.id);

                                        case 2:
                                            Array.from(document.querySelectorAll('.head-nav__link--wishlist')).forEach(function (link) {
                                                return link.addEventListener('click', function (event) {
                                                    event.preventDefault();

                                                    _this4.handle();
                                                });
                                            });

                                        case 3:
                                        case "end":
                                            return _context2.stop();
                                    }
                                }
                            }, _callee2, this);
                        }));

                        function componentDidMount() {
                            return _componentDidMount.apply(this, arguments);
                        }

                        return componentDidMount;
                    }()
                }, {
                    key: "componentWillReceiveProps",
                    value: function componentWillReceiveProps(nextProps) {
                        var products = this.props.products;

                        if (products != nextProps.products && !this.props.loadding) {
                            var product = this.state.product;
                            var productClone = {};
                            var flag = false;
                            var eventID = this.state.eventID;

                            if (nextProps.products.length > products.length) {
                                var _product = nextProps.products.filter(function (product) {
                                    return products.filter(function (_prod) {
                                        return product.id == _prod.id;
                                    }).length == 0;
                                });

                                if (_product.length) {
                                    productClone = JSON.parse(JSON.stringify(_product[0]));
                                    productClone.action = 'creating';
                                    productClone.eventID = eventID;
                                }

                                flag = true;
                            } else {
                                var _product2 = products.filter(function (product) {
                                    return nextProps.products.filter(function (_prod) {
                                        return product.id == _prod.id;
                                    }).length == 0;
                                });

                                if (_product2.length) {
                                    productClone = JSON.parse(JSON.stringify(_product2[0]));
                                    productClone.action = 'removing';
                                    productClone.eventID = eventID;
                                }

                                flag = true;
                            }

                            if (flag && Object.keys(productClone).length) {
                                productClone.show = true;
                                product.push(productClone);
                                this.setState({
                                    product: product,
                                    show: product.length ? false : true,
                                    eventID: eventID + 1
                                });
                                window.setTimeout(function () {
                                    this.remove(productClone);
                                }.bind(this), 1000 * this.state.time);
                            }
                        }
                    }
                }, {
                    key: "update",
                    value: function () {
                        var _update = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.mark(function _callee3(id) {
                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.wrap(function _callee3$(_context3) {
                                while (1) {
                                    switch (_context3.prev = _context3.next) {
                                        case 0:
                                            _context3.next = 2;
                                            return this.props.update(id, this.props.wishlist);

                                        case 2:
                                            this.forceUpdate();

                                        case 3:
                                        case "end":
                                            return _context3.stop();
                                    }
                                }
                            }, _callee3, this);
                        }));

                        function update(_x2) {
                            return _update.apply(this, arguments);
                        }

                        return update;
                    }()
                }, {
                    key: "render",
                    value: function render() {
                        var _this5 = this;

                        var _this$state = this.state,
                            show = _this$state.show,
                            product = _this$state.product,
                            checked = _this$state.checked,
                            purchase = _this$state.purchase;
                        var _this$props2 = this.props,
                            loadding = _this$props2.loadding,
                            removing = _this$props2.removing,
                            creating = _this$props2.creating,
                            products = _this$props2.products;
                        var flagShow = true;
                        var isLoadding = true;
                        var total = products.length;
                        if (!loadding && !removing && !creating) isLoadding = false;
                        if (products.length) flagShow = false;
                        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            id: "c-wishilist",
                            "data-loadding": isLoadding,
                            className: "c-wishlist",
                            "aria-hidden": flagShow,
                            "aria-expanded": this.state.open
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "c-wishlist__container"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: 'c-wishlist__events',
                            "aria-hidden": show
                        }, product.map(function (product, index) {
                            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                                "data-eventid": product.eventID,
                                key: index,
                                "aria-hidden": !product.show,
                                className: 'c-wishlist__events-item c-wishlist__events-item--' + product.action
                            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                                className: "c-wishlist__event-header"
                            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
                                className: "c-wishlist__event-title"
                            }, ' ', product.action == 'creating' ? 'Produto Adicionado' : 'Produto Removido', ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
                                type: "button",
                                onClick: function onClick() {
                                    return _this5.remove(product);
                                },
                                className: "c-wishlist__button c-wishlist__button--events-close"
                            }, "Close")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                                className: "c-wishlist__event-content"
                            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_product__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                product: product
                            })));
                        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "c-wishlist__header"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
                            onClick: this.handle,
                            className: "c-wishlist__button c-wishlist__button--open"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
                            className: "c-wishlist__qtd"
                        }, total), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
                            width: "24",
                            height: "20",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 50 50"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
                            d: "M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543 c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503 c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"
                        })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "c-wishlist__main"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
                            type: "button",
                            className: "c-wishlist__button c-wishlist__button--bg",
                            onClick: this.handle
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", null, "Close")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("form", {
                            id: "c-wishlist__form",
                            onSubmit: this.buyALL,
                            action: "#"
                        }, products.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "c-wishlist__content"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
                            type: "button",
                            className: "c-wishlist__button c-wishlist__button--close",
                            onClick: this.handle
                        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "c-wishlist__content-header"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "c-wishlist__content-title"
                        }, "Minha Lista de Desejos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
                            type: "button",
                            onClick: this.selectALL,
                            className: "c-wishlist__button c-wishlist__button--all"
                        }, checked ? 'Selecionar Todos' : 'Deselecionar Todos')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "c-wishlist__content-list"
                        }, products.map(function (product, index) {
                            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                                className: 'c-wishlist__content-item ' + (purchase.findIndex(function (p) {
                                    return p.id == product.id;
                                }) != -1 ? 'c-wishlist__content-item--adding' : ''),
                                key: index
                            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("label", {
                                className: "c-wishlist__content-label"
                            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                                className: "c-wishlist__checkbox-box"
                            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("input", {
                                onClick: _this5.checkedBuyAll,
                                value: product.id,
                                type: "checkbox",
                                className: "c-wishlist__checkbox",
                                name: "c-wishlist__checkbox[]"
                            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
                                className: "c-wishlist__checkbox-span"
                            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
                                width: "20",
                                height: "20",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 26 26"
                            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
                                d: "m.3,14c-0.2-0.2-0.3-0.5-0.3-0.7s0.1-0.5 0.3-0.7l1.4-1.4c0.4-0.4 1-0.4 1.4,0l.1,.1 5.5,5.9c0.2,0.2 0.5,0.2 0.7,0l13.4-13.9h0.1v-8.88178e-16c0.4-0.4 1-0.4 1.4,0l1.4,1.4c0.4,0.4 0.4,1 0,1.4l0,0-16,16.6c-0.2,0.2-0.4,0.3-0.7,0.3-0.3,0-0.5-0.1-0.7-0.3l-7.8-8.4-.2-.3z"
                            })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_product__WEBPACK_IMPORTED_MODULE_12__["default"], {
                                product: product
                            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                                className: "c-wishlist__actions"
                            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
                                type: "button",
                                className: "c-wishlist__button c-wishlist__button--remove",
                                onClick: function onClick() {
                                    return _this5.update(product.id);
                                }
                            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
                                width: "15",
                                height: "15",
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 512 512"
                            }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("polygon", {
                                points: "404.176,0 256,148.176 107.824,0 0,107.824 148.176,256 0,404.176 107.824,512 256,363.824 404.176,512 512,404.176 363.824,256 512,107.824 "
                            }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
                                onClick: function onClick() {
                                    return _this5.buy(product);
                                },
                                type: "button",
                                className: "c-wishlist__button c-wishlist__button--buy"
                            }, "Comprar"))));
                        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "c-wishlist__content-footer"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
                            onClick: this.buyALL.bind(this),
                            disabled: !this.state.isBuyAll,
                            type: "submit",
                            className: "c-wishlist__button c-wishlist__button--buy"
                        }, "Comprar Selecionados"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "c-wishlist__content c-wishlist__content--empty"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
                            type: "button",
                            className: "c-wishlist__button c-wishlist__button--close",
                            onClick: this.handle
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("svg", {
                            width: "20",
                            height: "20",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 512 512"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
                            d: "M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249 C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306 C514.019,27.23,514.019,14.135,505.943,6.058z"
                        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("path", {
                            d: "M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636 c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"
                        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "c-wishlist__content-header"
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "c-wishlist__content-title"
                        }, "Minha Lista de Desejos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
                            className: "c-wishlist__content-empty"
                        }, "Lista de Desejo vazia."))))));
                    }
                }]);

                return painel;
            }(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

            painel.propTypes = {
                wishlist: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired,
                loadding: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
                products: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array.isRequired,
                removing: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
                creating: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool.isRequired,
                orderForm: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.object.isRequired
            };

            var mapStateToProps = function mapStateToProps(state) {
                return {
                    wishlist: state.wishlist,
                    loadding: state.isLoadWishlist,
                    products: state.products,
                    removing: state.isRemoving,
                    creating: state.isCreating,
                    orderForm: state.wishlistOrderForm
                };
            };

            var mapDispatchToProps = function mapDispatchToProps(dispatch) {
                return {
                    load: function load(id) {
                        return dispatch(Object(_actions_wishlist__WEBPACK_IMPORTED_MODULE_11__["loadWishlist"])(id));
                    },
                    update: function update(id, wishlist) {
                        return dispatch(Object(_actions_wishlist__WEBPACK_IMPORTED_MODULE_11__["update"])(id, wishlist));
                    },
                    buy: function buy(product) {
                        return dispatch(Object(_actions_wishlist__WEBPACK_IMPORTED_MODULE_11__["buy"])(product));
                    }
                };
            };

    /* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(painel));

            /***/
        }),

    /***/ "./src/react/components/WishList/product.jsx":
    /*!***************************************************!*\
      !*** ./src/react/components/WishList/product.jsx ***!
      \***************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
    /* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
    /* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
    /* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
    /* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
    /* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);






            function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

            function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })); return true; } catch (e) { return false; } }



            var product = /*#__PURE__*/function (_Component) {
                _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(product, _Component);

                var _super = _createSuper(product);

                function product() {
                    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, product);

                    return _super.apply(this, arguments);
                }

                _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(product, [{
                    key: "render",
                    value: function render() {
                        var _this$props = this.props,
                            _product = _this$props.product,
                            className = _this$props.className;
                        className = className || 'c-product';
                        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
                            className: className
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
                            className: className + '__container'
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("figure", {
                            className: className + '__figure'
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
                            className: className + '__link',
                            href: _product.link
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
                            className: className + '__image',
                            src: _product.image.url,
                            alt: _product.image.label
                        }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
                            className: className + '__content'
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("a", {
                            className: className + '__link',
                            href: _product.link
                        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
                            className: className + '__name'
                        }, _product.name)))));
                    }
                }]);

                return product;
            }(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

    /* harmony default export */ __webpack_exports__["default"] = (product);

            /***/
        }),

    /***/ "./src/react/components/WishList/style.styl":
    /*!**************************************************!*\
      !*** ./src/react/components/WishList/style.styl ***!
      \**************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {

            // extracted by mini-css-extract-plugin

            /***/
        }),

    /***/ "./src/react/reducers/core.js":
    /*!************************************!*\
      !*** ./src/react/reducers/core.js ***!
      \************************************/
    /*! exports provided: firstSku, orderForm */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstSku", function () { return firstSku; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderForm", function () { return orderForm; });
            function firstSku() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'FIRST_ID_SKU':
                        return action.idFirstSku;

                    default:
                        return state;
                }
            }
            function orderForm() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'ORDER_FORM':
                        return action.orderForm;

                    default:
                        return state;
                }
            }

            /***/
        }),

    /***/ "./src/react/reducers/giftlist.js":
    /*!****************************************!*\
      !*** ./src/react/reducers/giftlist.js ***!
      \****************************************/
    /*! exports provided: giftlist */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "giftlist", function () { return giftlist; });
            function giftlist() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'GIFTLIST':
                        return action.giftlist;

                    default:
                        return state;
                }
            }

            /***/
        }),

    /***/ "./src/react/reducers/index.js":
    /*!*************************************!*\
      !*** ./src/react/reducers/index.js ***!
      \*************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
    /* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/react/reducers/menu.js");
    /* harmony import */ var _minicart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./minicart */ "./src/react/reducers/minicart.js");
    /* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core */ "./src/react/reducers/core.js");
    /* harmony import */ var _giftlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./giftlist */ "./src/react/reducers/giftlist.js");
    /* harmony import */ var _relatedSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./relatedSearch */ "./src/react/reducers/relatedSearch.js");
    /* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wishlist */ "./src/react/reducers/wishlist.js");
    /* harmony import */ var _wholesale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wholesale */ "./src/react/reducers/wholesale.js");
    /* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux-toastr */ "./node_modules/react-redux-toastr/lib/index.js");
    /* harmony import */ var react_redux_toastr__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux_toastr__WEBPACK_IMPORTED_MODULE_8__);









    /* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
                toastr: react_redux_toastr__WEBPACK_IMPORTED_MODULE_8__["reducer"],
                orderForm: _core__WEBPACK_IMPORTED_MODULE_3__["orderForm"],
                firstSku: _core__WEBPACK_IMPORTED_MODULE_3__["firstSku"],
                giftlist: _giftlist__WEBPACK_IMPORTED_MODULE_4__["giftlist"],
                menu: _menu__WEBPACK_IMPORTED_MODULE_1__["menu"],
                menuHasErrored: _menu__WEBPACK_IMPORTED_MODULE_1__["menuHasErrored"],
                menuIsLoading: _menu__WEBPACK_IMPORTED_MODULE_1__["menuIsLoading"],
                menuExpanded: _menu__WEBPACK_IMPORTED_MODULE_1__["menuExpanded"],
                minicart: _minicart__WEBPACK_IMPORTED_MODULE_2__["minicart"],
                minicartHasErrored: _minicart__WEBPACK_IMPORTED_MODULE_2__["minicartHasErrored"],
                minicartIsLoading: _minicart__WEBPACK_IMPORTED_MODULE_2__["minicartIsLoading"],
                minicartQtd: _minicart__WEBPACK_IMPORTED_MODULE_2__["minicartQtd"],
                minicartExpanded: _minicart__WEBPACK_IMPORTED_MODULE_2__["minicartExpanded"],
                minicartItems: _minicart__WEBPACK_IMPORTED_MODULE_2__["minicartItems"],
                minicartIsRemove: _minicart__WEBPACK_IMPORTED_MODULE_2__["minicartIsRemove"],
                minicartIsUpdate: _minicart__WEBPACK_IMPORTED_MODULE_2__["minicartIsUpdate"],
                relateds: _relatedSearch__WEBPACK_IMPORTED_MODULE_5__["relateds"],
                paginateRelateds: _relatedSearch__WEBPACK_IMPORTED_MODULE_5__["paginateRelateds"],
                loadingRelateds: _relatedSearch__WEBPACK_IMPORTED_MODULE_5__["loadingRelateds"],
                searchRelateds: _relatedSearch__WEBPACK_IMPORTED_MODULE_5__["searchRelateds"],
                errorRelateds: _relatedSearch__WEBPACK_IMPORTED_MODULE_5__["errorRelateds"],
                wishlist: _wishlist__WEBPACK_IMPORTED_MODULE_6__["wishlist"],
                isLoadWishlist: _wishlist__WEBPACK_IMPORTED_MODULE_6__["isLoadWishlist"],
                products: _wishlist__WEBPACK_IMPORTED_MODULE_6__["products"],
                isCreating: _wishlist__WEBPACK_IMPORTED_MODULE_6__["isCreating"],
                isRemoving: _wishlist__WEBPACK_IMPORTED_MODULE_6__["isRemoving"],
                wishlistOrderForm: _wishlist__WEBPACK_IMPORTED_MODULE_6__["wishlistOrderForm"],
                wholesale: _wholesale__WEBPACK_IMPORTED_MODULE_7__["wholesale"]
            }));

            /***/
        }),

    /***/ "./src/react/reducers/menu.js":
    /*!************************************!*\
      !*** ./src/react/reducers/menu.js ***!
      \************************************/
    /*! exports provided: menuHasErrored, menuIsLoading, menuExpanded, menu */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuHasErrored", function () { return menuHasErrored; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuIsLoading", function () { return menuIsLoading; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuExpanded", function () { return menuExpanded; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function () { return menu; });
            function menuHasErrored() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'MENU_HAS_ERRORED':
                        return action.hasErrored;

                    default:
                        return state;
                }
            }
            function menuIsLoading() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'MENU_IS_LOADING':
                        return action.isLoading;

                    default:
                        return state;
                }
            }
            function menuExpanded() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'MENU_EXPANDED':
                        return action.expanded;

                    default:
                        return state;
                }
            }
            function menu() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'MENU_FETCH_DATA_SUCCESS':
                        return action.items;

                    default:
                        return state;
                }
            }

            /***/
        }),

    /***/ "./src/react/reducers/minicart.js":
    /*!****************************************!*\
      !*** ./src/react/reducers/minicart.js ***!
      \****************************************/
    /*! exports provided: minicartHasErrored, minicartIsLoading, minicartIsRemove, minicartIsUpdate, minicartQtd, minicart, minicartItems, minicartExpanded */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minicartHasErrored", function () { return minicartHasErrored; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minicartIsLoading", function () { return minicartIsLoading; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minicartIsRemove", function () { return minicartIsRemove; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minicartIsUpdate", function () { return minicartIsUpdate; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minicartQtd", function () { return minicartQtd; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minicart", function () { return minicart; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minicartItems", function () { return minicartItems; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minicartExpanded", function () { return minicartExpanded; });
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

            function minicartHasErrored() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'MINICART_HAS_ERRORED':
                        return action.hasErrored;

                    default:
                        return state;
                }
            }
            function minicartIsLoading() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'MINICART_IS_LOADING':
                        return action.isLoading;

                    default:
                        return state;
                }
            }
            function minicartIsRemove() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'MINICART_IS_REMOVE':
                        return action.isRemoved;

                    default:
                        return state;
                }
            }
            function minicartIsUpdate() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'MINICART_IS_UPDATE':
                        return action.isUpdated;

                    default:
                        return state;
                }
            }
            function minicartQtd() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'MINICART_QTD':
                        return action.amount;

                    default:
                        return state;
                }
            }
            function minicart() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'MINICART_FETCH_DATA_SUCCESS':
                        return action.minicart;

                    default:
                        return state;
                }
            }
            function minicartItems() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'MINICART_ITEMS':
                        var items = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state), [action.item]);
                        return items;

                    case 'MINICART_CLEAN':
                        return action.item;

                    default:
                        return state;
                }
            }
            function minicartExpanded() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'MINICART_EXPANDED':
                        return action.expanded;

                    default:
                        return state;
                }
            }

            /***/
        }),

    /***/ "./src/react/reducers/relatedSearch.js":
    /*!*********************************************!*\
      !*** ./src/react/reducers/relatedSearch.js ***!
      \*********************************************/
    /*! exports provided: relateds, paginateRelateds, loadingRelateds, searchRelateds, errorRelateds */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relateds", function () { return relateds; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paginateRelateds", function () { return paginateRelateds; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingRelateds", function () { return loadingRelateds; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchRelateds", function () { return searchRelateds; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorRelateds", function () { return errorRelateds; });
            function relateds() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'RELATED_PRODUCTS':
                        return action.relateds;

                    default:
                        return state;
                }
            }
            function paginateRelateds() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                    page: 1,
                    total: 0
                };
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'RELATED_PAGINATE':
                        return action.paginate;

                    default:
                        return state;
                }
            }
            function loadingRelateds() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'RELATED_LOADING':
                        return action.loading;

                    default:
                        return state;
                }
            }
            function searchRelateds() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'RELATED_SEARCH':
                        return action.search;

                    default:
                        return state;
                }
            }
            function errorRelateds() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'RELATED_ERROR':
                        return action.error;

                    default:
                        return state;
                }
            }

            /***/
        }),

    /***/ "./src/react/reducers/wholesale.js":
    /*!*****************************************!*\
      !*** ./src/react/reducers/wholesale.js ***!
      \*****************************************/
    /*! exports provided: wholesale */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wholesale", function () { return wholesale; });
            var INIT_WHOLESALE = {
                items: [],
                quantity: 0
            };
            function wholesale() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_WHOLESALE;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'WHOLESALES':
                        var quantity = action.wholesales.map(function (item) {
                            return item.quantity;
                        }).reduce(function (a, b) {
                            return a + b;
                        });
                        return {
                            items: action.wholesales,
                            quantity: quantity
                        };

                    default:
                        return state;
                }
            }

            /***/
        }),

    /***/ "./src/react/reducers/wishlist.js":
    /*!****************************************!*\
      !*** ./src/react/reducers/wishlist.js ***!
      \****************************************/
    /*! exports provided: wishlist, isLoadWishlist, products, isRemoving, isCreating, wishlistOrderForm */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlist", function () { return wishlist; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoadWishlist", function () { return isLoadWishlist; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "products", function () { return products; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRemoving", function () { return isRemoving; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCreating", function () { return isCreating; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wishlistOrderForm", function () { return wishlistOrderForm; });
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
    /* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);

            var INIT_WISHLIST = {
                id: 0,
                products: []
            };
            function wishlist() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_WISHLIST;
                var action = arguments.length > 1 ? arguments[1] : undefined;
                var products = state.products;
                var wishlist = state;

                switch (action.type) {
                    case 'WISHLIST':
                        return action.products;

                    case 'WISHILIST_ADD':
                        if (state.products.indexOf(action.id) == -1) products = state.products.push(action.id);
                        wishlist = {
                            id: state.id,
                            idCliente: state.idCliente,
                            products: products
                        };
                        return wishlist;

                    case 'WISHILIST_REMOVE':
                        products = state.products.filter(function (id) {
                            return id != action.id;
                        });
                        wishlist = {
                            id: state.id,
                            idCliente: state.idCliente,
                            products: products
                        };
                        return wishlist;

                    default:
                        return state;
                }
            }
            function isLoadWishlist() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'IS_LOAD_WISHLIST':
                        return action.loadding;

                    default:
                        return state;
                }
            }
            var INIT_WISHLIST_PRODUCT = [];
            function products() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INIT_WISHLIST_PRODUCT;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'WISHLIST_PRODUCTS':
                        return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(state), [action.products]);

                    case 'WISHLIST_DELETE':
                        var _products = state.filter(function (product) {
                            return product.id != action.id;
                        });

                        return _products;

                    default:
                        return state;
                }
            }
            function isRemoving() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'WISHLIST_IS_REMOVING':
                        return action.removing;

                    default:
                        return state;
                }
            }
            function isCreating() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'WISHLIST_IS_CREATING':
                        return action.creating;

                    default:
                        return state;
                }
            }
            function wishlistOrderForm() {
                var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
                    loggedIn: false
                };
                var action = arguments.length > 1 ? arguments[1] : undefined;

                switch (action.type) {
                    case 'WISHLIST_ORDERFORM':
                        return action.orderForm;

                    default:
                        return state;
                }
            }

            /***/
        }),

    /***/ "./src/react/store/configureStore.js":
    /*!*******************************************!*\
      !*** ./src/react/store/configureStore.js ***!
      \*******************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return configureStore; });
    /* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
    /* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
    /* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/react/reducers/index.js");



            function configureStore(initialState) {
                return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
            }

            /***/
        })

    /******/
});
    //# sourceMappingURL=app.js.map