(function(n){function e(e){for(var s,i,_=e[0],a=e[1],d=e[2],o=0,b=[];o<_.length;o++)i=_[o],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&b.push(l[i][0]),l[i]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s]);u&&u(e);while(b.length)b.shift()();return t.push.apply(t,d||[]),c()}function c(){for(var n,e=0;e<t.length;e++){for(var c=t[e],s=!0,_=1;_<c.length;_++){var a=c[_];0!==l[a]&&(s=!1)}s&&(t.splice(e--,1),n=i(i.s=c[0]))}return n}var s={},l={app:0},t=[];function i(e){if(s[e])return s[e].exports;var c=s[e]={i:e,l:!1,exports:{}};return n[e].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=n,i.c=s,i.d=function(n,e,c){i.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:c})},i.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var s in n)i.d(c,s,function(e){return n[e]}.bind(null,s));return c},i.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return i.d(e,"a",e),e},i.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},i.p="/spuse-si-scrise/";var _=window["webpackJsonp"]=window["webpackJsonp"]||[],a=_.push.bind(_);_.push=e,_=_.slice();for(var d=0;d<_.length;d++)e(_[d]);var u=a;t.push([0,"chunk-vendors"]),c()})({0:function(n,e,c){n.exports=c("56d7")},"56d7":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js\nvar es_array_iterator = __webpack_require__("e260");\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js\nvar es_promise = __webpack_require__("e6cf");\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js\nvar es_object_assign = __webpack_require__("cca6");\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.finally.js\nvar es_promise_finally = __webpack_require__("a79d");\n\n// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js\nvar vue_runtime_esm = __webpack_require__("2b0e");\n\n// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2f776ece-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=3af9d2ac&\nvar Appvue_type_template_id_3af9d2ac_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{attrs:{"id":"app"}},[_c(\'div\',{staticClass:"container"},[_c(\'div\',{staticClass:"controls"},[_c(\'div\',{staticClass:"buttons"},[_c(\'button\',{staticClass:"play-btn",on:{"click":_vm.handlePlay}},[_vm._v(_vm._s(_vm.isRunning ? "Stop" : "Start"))]),_c(\'button\',{staticClass:"save-btn",attrs:{"disabled":_vm.isRunning},on:{"click":function($event){$event.preventDefault();return _vm.handleSave($event)}}},[_vm._v("Save")]),_c(\'button\',{staticClass:"clear-btn",on:{"click":function($event){$event.preventDefault();return _vm.handleClear($event)}}},[_vm._v("Clear")])]),_c(\'div\',{staticClass:"dropdown"},[_c(\'select\',{directives:[{name:"model",rawName:"v-model",value:(_vm.currentLang),expression:"currentLang"}],staticClass:"language-select",on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.currentLang=$event.target.multiple ? $$selectedVal : $$selectedVal[0]}}},_vm._l((_vm.languages),function(lang){return _c(\'option\',{key:lang,domProps:{"value":lang}},[_vm._v(_vm._s(lang))])}),0)])]),_c(\'div\',{staticClass:"message"},[_c(\'span\',[_vm._v(_vm._s(_vm.isRunning ? "Te ascult..." : _vm.message))])]),_c(\'div\',{staticClass:"words",attrs:{"contenteditable":""}},[_vm._l((_vm.paragraphs),function(paragraph){return _c(\'p\',{key:paragraph.timestamp,staticClass:"paragraph-text"},[_vm._v(_vm._s(paragraph.text))])}),_c(\'p\',{staticClass:"utterance-text"},[_vm._v(_vm._s(_vm.utterance))])],2)])])}\nvar staticRenderFns = []\n\n\n// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=3af9d2ac&\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js\nvar es_array_from = __webpack_require__("a630");\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.join.js\nvar es_array_join = __webpack_require__("a15b");\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js\nvar es_array_map = __webpack_require__("d81d");\n\n// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js\nvar es_string_iterator = __webpack_require__("3ca3");\n\n// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&\n\n\n\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ var Appvue_type_script_lang_js_ = ({\n  name: "App",\n  mounted: function mounted() {\n    navigator.mediaDevices.getUserMedia({\n      audio: true\n    }).then(function (stream) {\n      console.log("stream", stream);\n    });\n    var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\n    this.recognition = window.recognition = new SpeechRecognition();\n    this.recognition.interimResults = true;\n    this.recognition.continuous = true;\n    this.recognition.lang = this.currentLang;\n    this.recognition.maxAlternatives = 1; // this.handleStart();\n  },\n  data: function data() {\n    return {\n      languages: ["ro-RO", "en-US", "es-MX"],\n      currentLang: "ro-RO",\n      paragraphs: [],\n      utterance: "",\n      isRunning: false,\n      message: "Te ascult"\n    };\n  },\n  computed: {},\n  watch: {\n    currentLang: function currentLang() {\n      this.recognition.stop();\n      this.recognition.lang = this.currentLang; // this.handleStart();\n    }\n  },\n  methods: {\n    handleClear: function handleClear() {\n      this.utterance = \'\';\n      this.paragraphs = [];\n    },\n    handleSave: function handleSave() {},\n    handlePlay: function handlePlay() {\n      this.isRunning ? this.handleStop() : this.handleStart();\n    },\n    handleStop: function handleStop() {\n      this.isRunning = false;\n      this.recognition.stop();\n      this.message = "Apasa start si incepe sa vorbesti";\n      console.log("STOP");\n    },\n    handleStart: function handleStart() {\n      var _this = this;\n\n      this.message = "Te ascult...";\n\n      this.recognition.onstart = function (e) {\n        _this.isRunning = true;\n        _this.message = "";\n      };\n\n      this.recognition.onresult = function (e) {\n        _this.utterance = Array.from(e.results).map(function (result) {\n          return result[0];\n        }).map(function (p) {\n          return p.transcript;\n        }).join("");\n        window.isFinal = Array.from(e.results)[0].isFinal;\n      };\n\n      this.recognition.onend = function (e) {\n        _this.isRunning = false;\n\n        _this.paragraphs.push({\n          text: _this.utterance,\n          timestamp: e.timeStamp\n        });\n\n        _this.utterance = "";\n      };\n\n      this.recognition.onerror = function (e) {\n        console.log("ONERROR", e.error);\n        _this.message = e.error;\n\n        if (e.error === \'no-speech\') {\n          _this.message = "Apasa start si incepe sa vorbesti";\n        } else {\n          _this.message = e.error;\n        }\n      };\n\n      this.recognition.start();\n    }\n  }\n});\n// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&\n /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); \n// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=scss&\nvar Appvue_type_style_index_0_lang_scss_ = __webpack_require__("5c0b");\n\n// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js\nvar componentNormalizer = __webpack_require__("2877");\n\n// CONCATENATED MODULE: ./src/App.vue\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(componentNormalizer["a" /* default */])(\n  src_Appvue_type_script_lang_js_,\n  Appvue_type_template_id_3af9d2ac_render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* harmony default export */ var App = (component.exports);\n// CONCATENATED MODULE: ./src/main.js\n\n\n\n\n\n\nvue_runtime_esm["a" /* default */].config.productionTip = false;\nconsole.log(window.webkitSpeechRecognition);\nnew vue_runtime_esm["a" /* default */]({\n  render: function render(h) {\n    return h(App);\n  }\n}).$mount(\'#app\');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT85ZTYxIiwid2VicGFjazovLy9zcmMvQXBwLnZ1ZT9jNjVkIiwid2VicGFjazovLy8uL3NyYy9BcHAudnVlP2E3ZDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC52dWU/YTkzOCIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcz81NmQ3Il0sIm5hbWVzIjpbIlZ1ZSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJjb25zb2xlIiwibG9nIiwid2luZG93Iiwid2Via2l0U3BlZWNoUmVjb2duaXRpb24iLCJyZW5kZXIiLCJoIiwiQXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSx1Q0FBTSxnQkFBZ0IsYUFBYSwwQkFBMEIsd0JBQXdCLGlCQUFpQixPQUFPLFlBQVksWUFBWSx3QkFBd0IsWUFBWSx1QkFBdUIsWUFBWSxzQkFBc0IsZUFBZSwyQkFBMkIsd0JBQXdCLGtFQUFrRSw4QkFBOEIseUJBQXlCLEtBQUsseUJBQXlCLHdCQUF3QixnQ0FBZ0MsZ0NBQWdDLDRCQUE0Qix5QkFBeUIsd0JBQXdCLGlDQUFpQyxnQ0FBZ0MsdUJBQXVCLGVBQWUsYUFBYSxnRkFBZ0Ysb0NBQW9DLDBCQUEwQixrRkFBa0Ysa0JBQWtCLGtCQUFrQiw2Q0FBNkMsV0FBVyxFQUFFLDZFQUE2RSx1Q0FBdUMsb0JBQW9CLG1CQUFtQixjQUFjLHlCQUF5QixtQkFBbUIsc0JBQXNCLHdGQUF3RiwyQkFBMkIsc0JBQXNCLDhDQUE4QyxlQUFlLHFEQUFxRCxtQ0FBbUMsVUFBVSw2QkFBNkI7QUFDdGtEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tDQTtBQUNBLGFBREE7QUFHQSxTQUhBLHFCQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSxLQUZBO0FBR0EsNEJBQ0EsMERBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQVZBLENBV0E7QUFDQSxHQWZBO0FBaUJBLE1BakJBLGtCQWlCQTtBQUNBO0FBQ0EsNENBREE7QUFFQSwwQkFGQTtBQUdBLG9CQUhBO0FBSUEsbUJBSkE7QUFLQSxzQkFMQTtBQU1BO0FBTkE7QUFRQSxHQTFCQTtBQTRCQSxjQTVCQTtBQTZCQTtBQUNBLGVBREEseUJBQ0E7QUFDQTtBQUNBLCtDQUZBLENBR0E7QUFDQTtBQUxBLEdBN0JBO0FBcUNBO0FBQ0EsZUFEQSx5QkFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBO0FBS0EsY0FMQSx3QkFLQSxFQUxBO0FBT0EsY0FQQSx3QkFPQTtBQUNBO0FBQ0EsS0FUQTtBQVdBLGNBWEEsd0JBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBaEJBO0FBa0JBLGVBbEJBLHlCQWtCQTtBQUFBOztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7O0FBS0E7QUFDQSxnREFDQSxHQURBLENBQ0E7QUFBQTtBQUFBLFNBREEsRUFFQSxHQUZBLENBRUE7QUFBQTtBQUFBLFNBRkEsRUFHQSxJQUhBLENBR0EsRUFIQTtBQUlBO0FBQ0EsT0FOQTs7QUFRQTtBQUNBOztBQUVBO0FBQ0EsK0JBREE7QUFFQTtBQUZBOztBQUtBO0FBQ0EsT0FUQTs7QUFXQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxPQVJBOztBQVlBO0FBQ0E7QUExREE7QUFyQ0EsRzs7QUNuQzhTLENBQWdCLCtGQUFHLEVBQUMsQzs7Ozs7Ozs7QUNBaFA7QUFDM0I7QUFDTDtBQUNjOzs7QUFHaEU7QUFDdUY7QUFDdkYsZ0JBQWdCLDhDQUFVO0FBQzFCLEVBQUUsK0JBQU07QUFDUixFQUFFLHVDQUFNO0FBQ1IsRUFBRSxlQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVlLHlEOzs7Ozs7QUNuQmY7QUFDQTtBQUVBQSxrQ0FBRyxDQUFDQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE1BQU0sQ0FBQ0MsdUJBQW5CO0FBRUEsSUFBSU4sa0NBQUosQ0FBUTtBQUNOTyxRQUFNLEVBQUUsZ0JBQUFDLENBQUM7QUFBQSxXQUFJQSxDQUFDLENBQUNDLEdBQUQsQ0FBTDtBQUFBO0FBREgsQ0FBUixFQUVHQyxNQUZILENBRVUsTUFGViIsImZpbGUiOiI1NmQ3LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtyZXR1cm4gX2MoJ2Rpdicse2F0dHJzOntcImlkXCI6XCJhcHBcIn19LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJjb250YWluZXJcIn0sW19jKCdkaXYnLHtzdGF0aWNDbGFzczpcImNvbnRyb2xzXCJ9LFtfYygnZGl2Jyx7c3RhdGljQ2xhc3M6XCJidXR0b25zXCJ9LFtfYygnYnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJwbGF5LWJ0blwiLG9uOntcImNsaWNrXCI6X3ZtLmhhbmRsZVBsYXl9fSxbX3ZtLl92KF92bS5fcyhfdm0uaXNSdW5uaW5nID8gXCJTdG9wXCIgOiBcIlN0YXJ0XCIpKV0pLF9jKCdidXR0b24nLHtzdGF0aWNDbGFzczpcInNhdmUtYnRuXCIsYXR0cnM6e1wiZGlzYWJsZWRcIjpfdm0uaXNSdW5uaW5nfSxvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnByZXZlbnREZWZhdWx0KCk7cmV0dXJuIF92bS5oYW5kbGVTYXZlKCRldmVudCl9fX0sW192bS5fdihcIlNhdmVcIildKSxfYygnYnV0dG9uJyx7c3RhdGljQ2xhc3M6XCJjbGVhci1idG5cIixvbjp7XCJjbGlja1wiOmZ1bmN0aW9uKCRldmVudCl7JGV2ZW50LnByZXZlbnREZWZhdWx0KCk7cmV0dXJuIF92bS5oYW5kbGVDbGVhcigkZXZlbnQpfX19LFtfdm0uX3YoXCJDbGVhclwiKV0pXSksX2MoJ2Rpdicse3N0YXRpY0NsYXNzOlwiZHJvcGRvd25cIn0sW19jKCdzZWxlY3QnLHtkaXJlY3RpdmVzOlt7bmFtZTpcIm1vZGVsXCIscmF3TmFtZTpcInYtbW9kZWxcIix2YWx1ZTooX3ZtLmN1cnJlbnRMYW5nKSxleHByZXNzaW9uOlwiY3VycmVudExhbmdcIn1dLHN0YXRpY0NsYXNzOlwibGFuZ3VhZ2Utc2VsZWN0XCIsb246e1wiY2hhbmdlXCI6ZnVuY3Rpb24oJGV2ZW50KXt2YXIgJCRzZWxlY3RlZFZhbCA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsZnVuY3Rpb24obyl7cmV0dXJuIG8uc2VsZWN0ZWR9KS5tYXAoZnVuY3Rpb24obyl7dmFyIHZhbCA9IFwiX3ZhbHVlXCIgaW4gbyA/IG8uX3ZhbHVlIDogby52YWx1ZTtyZXR1cm4gdmFsfSk7IF92bS5jdXJyZW50TGFuZz0kZXZlbnQudGFyZ2V0Lm11bHRpcGxlID8gJCRzZWxlY3RlZFZhbCA6ICQkc2VsZWN0ZWRWYWxbMF19fX0sX3ZtLl9sKChfdm0ubGFuZ3VhZ2VzKSxmdW5jdGlvbihsYW5nKXtyZXR1cm4gX2MoJ29wdGlvbicse2tleTpsYW5nLGRvbVByb3BzOntcInZhbHVlXCI6bGFuZ319LFtfdm0uX3YoX3ZtLl9zKGxhbmcpKV0pfSksMCldKV0pLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcIm1lc3NhZ2VcIn0sW19jKCdzcGFuJyxbX3ZtLl92KF92bS5fcyhfdm0uaXNSdW5uaW5nID8gXCJUZSBhc2N1bHQuLi5cIiA6IF92bS5tZXNzYWdlKSldKV0pLF9jKCdkaXYnLHtzdGF0aWNDbGFzczpcIndvcmRzXCIsYXR0cnM6e1wiY29udGVudGVkaXRhYmxlXCI6XCJcIn19LFtfdm0uX2woKF92bS5wYXJhZ3JhcGhzKSxmdW5jdGlvbihwYXJhZ3JhcGgpe3JldHVybiBfYygncCcse2tleTpwYXJhZ3JhcGgudGltZXN0YW1wLHN0YXRpY0NsYXNzOlwicGFyYWdyYXBoLXRleHRcIn0sW192bS5fdihfdm0uX3MocGFyYWdyYXBoLnRleHQpKV0pfSksX2MoJ3AnLHtzdGF0aWNDbGFzczpcInV0dGVyYW5jZS10ZXh0XCJ9LFtfdm0uX3YoX3ZtLl9zKF92bS51dHRlcmFuY2UpKV0pXSwyKV0pXSl9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBpZD1cImFwcFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwbGF5LWJ0blwiIEBjbGljaz1cImhhbmRsZVBsYXlcIj57e2lzUnVubmluZyA/IFwiU3RvcFwiIDogXCJTdGFydFwifX08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwic2F2ZS1idG5cIiBAY2xpY2sucHJldmVudD1cImhhbmRsZVNhdmVcIiA6ZGlzYWJsZWQ9XCJpc1J1bm5pbmdcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNsZWFyLWJ0blwiIEBjbGljay5wcmV2ZW50PVwiaGFuZGxlQ2xlYXJcIj5DbGVhcjwvYnV0dG9uPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiPlxuICAgICAgICAgIDxzZWxlY3QgY2xhc3M9XCJsYW5ndWFnZS1zZWxlY3RcIiB2LW1vZGVsPVwiY3VycmVudExhbmdcIj5cbiAgICAgICAgICAgIDxvcHRpb24gOmtleT1cImxhbmdcIiB2LWZvcj1cImxhbmcgaW4gbGFuZ3VhZ2VzXCIgdi1iaW5kOnZhbHVlPVwibGFuZ1wiPnt7IGxhbmcgfX08L29wdGlvbj5cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2VcIj5cbiAgICAgICAgPHNwYW4+e3sgaXNSdW5uaW5nID8gXCJUZSBhc2N1bHQuLi5cIiA6IG1lc3NhZ2V9fTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwid29yZHNcIiBjb250ZW50ZWRpdGFibGU+XG4gICAgICAgIDxwXG4gICAgICAgICAgY2xhc3M9XCJwYXJhZ3JhcGgtdGV4dFwiXG4gICAgICAgICAgOmtleT1cInBhcmFncmFwaC50aW1lc3RhbXBcIlxuICAgICAgICAgIHYtZm9yPVwicGFyYWdyYXBoIGluIHBhcmFncmFwaHNcIlxuICAgICAgICA+e3twYXJhZ3JhcGgudGV4dH19PC9wPlxuICAgICAgICA8cCBjbGFzcz1cInV0dGVyYW5jZS10ZXh0XCI+e3t1dHRlcmFuY2V9fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQXBwXCIsXG5cbiAgbW91bnRlZCgpIHtcbiAgICBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7IGF1ZGlvOiB0cnVlIH0pLnRoZW4oc3RyZWFtID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwic3RyZWFtXCIsIHN0cmVhbSk7XG4gICAgfSlcbiAgICB2YXIgU3BlZWNoUmVjb2duaXRpb24gPVxuICAgICAgd2luZG93LlNwZWVjaFJlY29nbml0aW9uIHx8IHdpbmRvdy53ZWJraXRTcGVlY2hSZWNvZ25pdGlvbjtcbiAgICB0aGlzLnJlY29nbml0aW9uID0gd2luZG93LnJlY29nbml0aW9uID0gbmV3IFNwZWVjaFJlY29nbml0aW9uKCk7XG4gICAgdGhpcy5yZWNvZ25pdGlvbi5pbnRlcmltUmVzdWx0cyA9IHRydWU7XG4gICAgdGhpcy5yZWNvZ25pdGlvbi5jb250aW51b3VzID0gdHJ1ZTtcbiAgICB0aGlzLnJlY29nbml0aW9uLmxhbmcgPSB0aGlzLmN1cnJlbnRMYW5nO1xuICAgIHRoaXMucmVjb2duaXRpb24ubWF4QWx0ZXJuYXRpdmVzID0gMTtcbiAgICAvLyB0aGlzLmhhbmRsZVN0YXJ0KCk7XG4gIH0sXG5cbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFuZ3VhZ2VzOiBbXCJyby1ST1wiLCBcImVuLVVTXCIsIFwiZXMtTVhcIl0sXG4gICAgICBjdXJyZW50TGFuZzogXCJyby1ST1wiLFxuICAgICAgcGFyYWdyYXBoczogW10sXG4gICAgICB1dHRlcmFuY2U6IFwiXCIsXG4gICAgICBpc1J1bm5pbmc6IGZhbHNlLFxuICAgICAgbWVzc2FnZTogXCJUZSBhc2N1bHRcIlxuICAgIH07XG4gIH0sXG5cbiAgY29tcHV0ZWQ6IHt9LFxuICB3YXRjaDoge1xuICAgIGN1cnJlbnRMYW5nKCkge1xuICAgICAgdGhpcy5yZWNvZ25pdGlvbi5zdG9wKCk7XG4gICAgICB0aGlzLnJlY29nbml0aW9uLmxhbmcgPSB0aGlzLmN1cnJlbnRMYW5nO1xuICAgICAgLy8gdGhpcy5oYW5kbGVTdGFydCgpO1xuICAgIH1cbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgaGFuZGxlQ2xlYXIoKSB7XG4gICAgICB0aGlzLnV0dGVyYW5jZSA9ICcnXG4gICAgICB0aGlzLnBhcmFncmFwaHMgPSBbXTtcbiAgICB9LFxuICAgIGhhbmRsZVNhdmUoKSB7fSxcblxuICAgIGhhbmRsZVBsYXkoKSB7XG4gICAgICB0aGlzLmlzUnVubmluZyA/IHRoaXMuaGFuZGxlU3RvcCgpIDogdGhpcy5oYW5kbGVTdGFydCgpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVTdG9wKCkge1xuICAgICAgdGhpcy5pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVjb2duaXRpb24uc3RvcCgpO1xuICAgICAgdGhpcy5tZXNzYWdlID0gXCJBcGFzYSBzdGFydCBzaSBpbmNlcGUgc2Egdm9yYmVzdGlcIlxuICAgICAgY29uc29sZS5sb2coXCJTVE9QXCIpO1xuICAgIH0sXG5cbiAgICBoYW5kbGVTdGFydCgpIHtcbiAgICAgIHRoaXMubWVzc2FnZSA9IFwiVGUgYXNjdWx0Li4uXCJcblxuICAgICAgdGhpcy5yZWNvZ25pdGlvbi5vbnN0YXJ0ID0gZSA9PiB7XG4gICAgICAgIHRoaXMuaXNSdW5uaW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gXCJcIjtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucmVjb2duaXRpb24ub25yZXN1bHQgPSBlID0+IHtcbiAgICAgICAgdGhpcy51dHRlcmFuY2UgPSBBcnJheS5mcm9tKGUucmVzdWx0cylcbiAgICAgICAgICAubWFwKHJlc3VsdCA9PiByZXN1bHRbMF0pXG4gICAgICAgICAgLm1hcChwID0+IHAudHJhbnNjcmlwdClcbiAgICAgICAgICAuam9pbihcIlwiKTsgIFxuICAgICAgICB3aW5kb3cuaXNGaW5hbCA9IEFycmF5LmZyb20oZS5yZXN1bHRzKVswXS5pc0ZpbmFsO1xuICAgICAgfTtcblxuICAgICAgdGhpcy5yZWNvZ25pdGlvbi5vbmVuZCA9IGUgPT4ge1xuICAgICAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucGFyYWdyYXBocy5wdXNoKHtcbiAgICAgICAgICB0ZXh0OiB0aGlzLnV0dGVyYW5jZSxcbiAgICAgICAgICB0aW1lc3RhbXA6IGUudGltZVN0YW1wXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudXR0ZXJhbmNlID0gXCJcIjtcbiAgICAgIH07XG5cbiAgICAgIHRoaXMucmVjb2duaXRpb24ub25lcnJvciA9IGUgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9ORVJST1JcIiwgZS5lcnJvcik7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGUuZXJyb3I7XG4gICAgICAgIGlmIChlLmVycm9yID09PSAnbm8tc3BlZWNoJykge1xuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IFwiQXBhc2Egc3RhcnQgc2kgaW5jZXBlIHNhIHZvcmJlc3RpXCJcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSBlLmVycm9yXG4gICAgICAgIH1cbiAgICAgIH07XG5cblxuXG4gICAgICB0aGlzLnJlY29nbml0aW9uLnN0YXJ0KCk7XG4gICAgfVxuICB9XG59O1xuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuQGltcG9ydCBcIi4vc3R5bGVzLnNjc3NcIjtcbjwvc3R5bGU+XG5cblxuICA8IS0tIDxidXR0b24gY2xhc3M9XCJzdG9wLWJ0blwiIEBjbGljaz1cImhhbmRsZVN0b3BcIiA6ZGlzYWJsZWQ9XCIhaXNSdW5uaW5nXCI+e3tcIlN0b3BcIn19PC9idXR0b24+IC0tPlxuICAgIDwhLS0gPGF1ZGlvIHJlZj1cImRhbnV0emFcIiBjb250cm9scyBzcmM9XCIuL2Fzc2V0cy9EYW51dHphLm1wM1wiPjwvYXVkaW8+LS0+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEyLTAhLi4vbm9kZV9tb2R1bGVzL3RocmVhZC1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0wLTAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTItMCEuLi9ub2RlX21vZHVsZXMvdGhyZWFkLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTAtMCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2FmOWQyYWMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJ1xuXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuY29uc29sZS5sb2cod2luZG93LndlYmtpdFNwZWVjaFJlY29nbml0aW9uKVxuXG5uZXcgVnVlKHtcbiAgcmVuZGVyOiBoID0+IGgoQXBwKSxcbn0pLiRtb3VudCgnI2FwcCcpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///56d7\n')},"5c0b":function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9c0c");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* unused harmony reexport * */\n /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT9mNDQ2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFtZSxDQUFnQiw4aEJBQUcsRUFBQyIsImZpbGUiOiI1YzBiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tOC1vbmVPZi0xLTAhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOC1vbmVPZi0xLTEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0xLTIhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTgtb25lT2YtMS0zIS4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMC0wIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5c0b\n')},"9c0c":function(module,exports,__webpack_require__){eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvQXBwLnZ1ZT9hNGE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjljMGMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9c0c\n")}});