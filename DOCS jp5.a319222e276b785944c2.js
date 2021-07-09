(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[259],{

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/border.md?vue&type=template&id=91dfe27a

var _hoisted_1 = {
  class: "content element-doc"
};

var _hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<h2 id=\"border\"><a class=\"header-anchor\" href=\"#border\">¶</a> Border</h2><p>ボタンやカード、ポップアップなどで使用できるborderを標準化しています。</p><h3 id=\"border-2\"><a class=\"header-anchor\" href=\"#border-2\">¶</a> Border</h3><p>borderのスタイルはいくつかあります。</p><table class=\"demo-border\"><tbody><tr><td class=\"text\">Name</td><td class=\"text\">Thickness</td><td class=\"line\">Demo</td></tr><tr><td class=\"text\">Solid</td><td class=\"text\">1px</td><td class=\"line\"><div></div></td></tr><tr><td class=\"text\">Dashed</td><td class=\"text\">2px</td><td class=\"line\"><div class=\"dashed\"></div></td></tr></tbody></table><h3 id=\"ban-jing-radius\"><a class=\"header-anchor\" href=\"#ban-jing-radius\">¶</a> 半径(radius)</h3><p>いくつかの半径(radius)のスタイルがあります。</p>", 7);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "title"
}, "No Radius", -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "value"
}, "border-radius: 0px", -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "radius"
}, null, -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "title"
}, "Small Radius", -1);

var _hoisted_13 = {
  class: "value"
};

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "title"
}, "Large Radius", -1);

var _hoisted_15 = {
  class: "value"
};

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "title"
}, "Round Radius", -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "value"
}, "border-radius: 30px", -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "radius radius-30"
}, null, -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("h3", {
  id: "ying"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ying"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 影")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "シャドウスタイルの選択肢はほとんどありません。", -1);

var _hoisted_21 = {
  class: "demo-shadow-text"
};
var _hoisted_22 = {
  class: "demo-shadow-text"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_el_col = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("el-col");

  var _component_el_row = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("el-row");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", _hoisted_1, [_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_el_row, {
    gutter: 12,
    class: "demo-radius"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_el_col, {
        span: 6,
        xs: {
          span: 12
        }
      }, {
        default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
          return [_hoisted_9, _hoisted_10, _hoisted_11];
        }),
        _: 1
      }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_el_col, {
        span: 6,
        xs: {
          span: 12
        }
      }, {
        default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
          return [_hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_13, "border-radius: " + Object(vue_esm_browser_prod["U" /* toDisplayString */])($data.borderRadiusSmall), 1), Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
            class: "radius",
            style: {
              borderRadius: $data.borderRadiusSmall
            }
          }, null, 4)];
        }),
        _: 1
      }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_el_col, {
        span: 6,
        xs: {
          span: 12
        }
      }, {
        default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
          return [_hoisted_14, Object(vue_esm_browser_prod["p" /* createVNode */])("div", _hoisted_15, "border-radius: " + Object(vue_esm_browser_prod["U" /* toDisplayString */])($data.borderRadiusBase), 1), Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
            class: "radius",
            style: {
              borderRadius: $data.borderRadiusBase
            }
          }, null, 4)];
        }),
        _: 1
      }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_el_col, {
        span: 6,
        xs: {
          span: 12
        }
      }, {
        default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
          return [_hoisted_16, _hoisted_17, _hoisted_18];
        }),
        _: 1
      })];
    }),
    _: 1
  }), _hoisted_19, _hoisted_20, Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
    class: "demo-shadow",
    style: {
      boxShadow: $data.boxShadowBase
    }
  }, null, 4), Object(vue_esm_browser_prod["p" /* createVNode */])("span", _hoisted_21, "Basic Shadow box-shadow: " + Object(vue_esm_browser_prod["U" /* toDisplayString */])($data.boxShadowBase), 1), Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
    class: "demo-shadow",
    style: {
      boxShadow: $data.boxShadowLight
    }
  }, null, 4), Object(vue_esm_browser_prod["p" /* createVNode */])("span", _hoisted_22, "Light Shadow box-shadow: " + Object(vue_esm_browser_prod["U" /* toDisplayString */])($data.boxShadowLight), 1), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/border.md?vue&type=template&id=91dfe27a

// EXTERNAL MODULE: ./website/bus.js
var bus = __webpack_require__(47);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/border.md?vue&type=script&lang=js

var varMap = {
  '$--box-shadow-light': 'boxShadowLight',
  '$--box-shadow-base': 'boxShadowBase',
  '$--border-radius-base': 'borderRadiusBase',
  '$--border-radius-small': 'borderRadiusSmall'
};
var original = {
  boxShadowLight: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
  boxShadowBase: '0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)',
  borderRadiusBase: '4px',
  borderRadiusSmall: '2px'
};
/* harmony default export */ var bordervue_type_script_lang_js = ({
  mounted: function mounted() {
    this.setGlobal();
  },
  methods: {
    setGlobal: function setGlobal() {
      if (window.userThemeConfig) {
        this.global = window.userThemeConfig.global;
      }
    }
  },
  data: function data() {
    return {
      global: {},
      boxShadowLight: '',
      boxShadowBase: '',
      borderRadiusBase: '',
      borderRadiusSmall: ''
    };
  },
  watch: {
    global: {
      immediate: true,
      handler: function handler(value) {
        var _this = this;

        Object.keys(varMap).forEach(function (c) {
          if (value[c]) {
            _this[varMap[c]] = value[c];
          } else {
            _this[varMap[c]] = original[varMap[c]];
          }
        });
      }
    }
  }
});
// CONCATENATED MODULE: ./website/docs/jp/border.md?vue&type=script&lang=js
 
// CONCATENATED MODULE: ./website/docs/jp/border.md



bordervue_type_script_lang_js.render = render

/* harmony default export */ var border = __webpack_exports__["default"] = (bordervue_type_script_lang_js);

/***/ })

}]);