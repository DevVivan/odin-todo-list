"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["bundle"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
	--clr-accent: #004B8F;
	--clr-text-darkest: #1E1E1E;
	--clr-white: #FFFFFF;
	--clr-body-gray: #EEEEEE;
	--clr-text-light-gray: #949494;
	--sidebar-left-margin: 6vh;
	--sidebar-top-margin: 7vh;
}

.container {
	height: 100vh;
	display: grid;
	grid-template-rows: 8vh 1fr;
	grid-template-columns: 1fr 3fr;
	font-family: 'Roboto Flex', sans-serif;
}

.header {
	grid-row: span 1;
	grid-column: span 2;
	background-color: var(--clr-accent);
	display: flex;
	align-items: center;
}

.project-tab {
	margin-left: var(--sidebar-left-margin);
	width: 35vh;
	height: 4vh;
	display: flex;
	align-items: center;
	border-radius: 5px;
}

.project-tab:hover {
	background-color: rgba(0, 0, 0, 0.03);
}

.project-sidebar-title {
	margin-left: 1vh;
	font-size: 1.2rem;
	color: var(--clr-text-darkest);
}

.projects-sidebar-header {
	font-size: 1.5rem;
	margin-left: var(--sidebar-left-margin);
}

.sidebar-hr {
	width: 35vh;
	margin-left: var(--sidebar-left-margin);
	outline: none;
	border: 0.5px solid var(--clr-text-darkest) ;
}

.current-project {
	background-color: #D7D7D7;
	font-weight: 700;
}

.current-project:hover {
	background-color: #D7D7D7;
}

.default-tabs {
	display: flex;
	flex-direction: column;
	gap: 1vh;
	margin-top: var(--sidebar-top-margin);
}

.project-tabs {
	display: flex;
	flex-direction: column;
	gap: 1vh;
}

.header-title {
	color: white;
	font-size: 1.6rem;
	margin-left: var(--sidebar-left-margin);
}

.sidebar {
	grid-row: 2;
	grid-column: 1;
	background-color: var(--clr-body-gray);
	display: flex;
	flex-direction: column;
	gap: 1vh;
	overflow: scroll;
}

.new-project-button {
	display: flex;
	height: 4.5vh;
	width: 35vh;
	gap: 2vh;
	color: var(--clr-text-light-gray);
	justify-content: flex-start;
	align-items: center;
	font-size: 1rem;
	outline: none;
	border: none;
	border-radius: 5px;
}

.project-tabs {
	margin-top: 2vh;
}

.new-project-container {
	display: flex;
	margin-left: var(--sidebar-left-margin);
	height: 5vh;
	width: 35vh;;
}

.new-project-button:hover {
	background-color: rgba(0, 0, 0, 0.05);
}

.projects-sidebar-container {
	margin-top: 5vh;
}

.main-container {
	grid-row: 2;
	grid-column: 2;
	background-color: var(--clr-white);
	overflow: scroll;
}

.content-header-container {
	display: flex;
	justify-content: space-between;
	width: 125vh;
	margin-left: var(--sidebar-left-margin);
	margin-top: var(--sidebar-top-margin);
	align-items: center;
}

.content-title {
	font-size: 2rem;
	font-weight: 600;
}

.content-hr {
	width: 125vh;
	margin-left: var(--sidebar-left-margin);
	outline: none;
	border: 0.5px solid var(--clr-text-darkest) ;
}

.new-todo-container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 30px;
	border-radius: 5px;
}

.new-todo-container:hover {
	background-color: rgba(0, 0, 0, 0.1);
}

.new-project-modal {
	height: 26vh;
	width: 50vh;
	z-index: 3;
	position: absolute;
	top: 0;
	bottom: 0;
	background-color: var(--clr-white);
	border: none;
	border-radius: 10px;
	outline: none;
}

.new-todo-modal {
	height: 60vh;
	width: 50vh;
	z-index: 3;
	position: absolute;
	top: 0;
	bottom: 0;
	background-color: var(--clr-white);
	border: none;
	border-radius: 10px;
	outline: none;
}

.new-todo-form {
	display: flex;
	flex-direction: column;
	gap: 1vh;
	margin-top: 1vh;
}

.modal::backdrop {
	background-color: rgb(0, 0, 0, 0.5);
}

.icon-div {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	width: 30px;
	border-radius: 5px;
	color: var(--clr-text-light-gray);
}

.icon-div:hover {
	background-color: rgb(0, 0, 0, 0.1);
}

.modal-header-container {
	height: 5vh;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.form-input-container {
	display: flex;
	flex-direction: column;
	gap: 0.7vh;
	width: 100%;
}

.form-label {
	color: var(--clr-text-darkest);
	font-size: 1.1rem;
}

.form-input {
	height: 3.8vh;
	outline: none;
	border: 1px solid var(--clr-text-darkest);
	border-radius: 5px;
	font-size: 1rem;
	color: var(--clr-text-darkest);
	opacity: 0.9;
	padding-left: 1vh;
}

.form-input-half {
	width: 100%;
}

.double-form-inputs {
	display: flex;
	gap: 1vh;
}

.modal-form {
	display: flex;
	flex-direction: column;
	gap: 2vh;
	margin-top: 3vh;
}

.create-button {
	height: 6vh;
	font-size: 1.2rem;
	color: var(--clr-white);
	background-color: var(--clr-accent);
	outline: none;
	border: none;
	border-radius: 5px;
	width: 100%;
}

.modal-title {
	font-size: 1.5rem;
}

.modal-hr {
	outline: none;
	border: 0.5px solid var(--clr-text-light-gray);
}

.form-input-textarea {
	outline: none;
	border: 1px solid var(--clr-text-darkest);
	border-radius: 5px;
	font-size: 1rem;
	color: var(--clr-text-darkest);
	opacity: 0.9;
	padding-left: 1vh;
	font-family: 'Roboto Flex', sans-serif;
	padding-top: 1vh;
}

.form-input-due-date {
	font-family: 'Roboto Flex', sans-serif;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap');\n\n:root {\n\t--clr-accent: #004B8F;\n\t--clr-text-darkest: #1E1E1E;\n\t--clr-white: #FFFFFF;\n\t--clr-body-gray: #EEEEEE;\n\t--clr-text-light-gray: #949494;\n\t--sidebar-left-margin: 6vh;\n\t--sidebar-top-margin: 7vh;\n}\n\n.container {\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-rows: 8vh 1fr;\n\tgrid-template-columns: 1fr 3fr;\n\tfont-family: 'Roboto Flex', sans-serif;\n}\n\n.header {\n\tgrid-row: span 1;\n\tgrid-column: span 2;\n\tbackground-color: var(--clr-accent);\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.project-tab {\n\tmargin-left: var(--sidebar-left-margin);\n\twidth: 35vh;\n\theight: 4vh;\n\tdisplay: flex;\n\talign-items: center;\n\tborder-radius: 5px;\n}\n\n.project-tab:hover {\n\tbackground-color: rgba(0, 0, 0, 0.03);\n}\n\n.project-sidebar-title {\n\tmargin-left: 1vh;\n\tfont-size: 1.2rem;\n\tcolor: var(--clr-text-darkest);\n}\n\n.projects-sidebar-header {\n\tfont-size: 1.5rem;\n\tmargin-left: var(--sidebar-left-margin);\n}\n\n.sidebar-hr {\n\twidth: 35vh;\n\tmargin-left: var(--sidebar-left-margin);\n\toutline: none;\n\tborder: 0.5px solid var(--clr-text-darkest) ;\n}\n\n.current-project {\n\tbackground-color: #D7D7D7;\n\tfont-weight: 700;\n}\n\n.current-project:hover {\n\tbackground-color: #D7D7D7;\n}\n\n.default-tabs {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1vh;\n\tmargin-top: var(--sidebar-top-margin);\n}\n\n.project-tabs {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1vh;\n}\n\n.header-title {\n\tcolor: white;\n\tfont-size: 1.6rem;\n\tmargin-left: var(--sidebar-left-margin);\n}\n\n.sidebar {\n\tgrid-row: 2;\n\tgrid-column: 1;\n\tbackground-color: var(--clr-body-gray);\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1vh;\n\toverflow: scroll;\n}\n\n.new-project-button {\n\tdisplay: flex;\n\theight: 4.5vh;\n\twidth: 35vh;\n\tgap: 2vh;\n\tcolor: var(--clr-text-light-gray);\n\tjustify-content: flex-start;\n\talign-items: center;\n\tfont-size: 1rem;\n\toutline: none;\n\tborder: none;\n\tborder-radius: 5px;\n}\n\n.project-tabs {\n\tmargin-top: 2vh;\n}\n\n.new-project-container {\n\tdisplay: flex;\n\tmargin-left: var(--sidebar-left-margin);\n\theight: 5vh;\n\twidth: 35vh;;\n}\n\n.new-project-button:hover {\n\tbackground-color: rgba(0, 0, 0, 0.05);\n}\n\n.projects-sidebar-container {\n\tmargin-top: 5vh;\n}\n\n.main-container {\n\tgrid-row: 2;\n\tgrid-column: 2;\n\tbackground-color: var(--clr-white);\n\toverflow: scroll;\n}\n\n.content-header-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 125vh;\n\tmargin-left: var(--sidebar-left-margin);\n\tmargin-top: var(--sidebar-top-margin);\n\talign-items: center;\n}\n\n.content-title {\n\tfont-size: 2rem;\n\tfont-weight: 600;\n}\n\n.content-hr {\n\twidth: 125vh;\n\tmargin-left: var(--sidebar-left-margin);\n\toutline: none;\n\tborder: 0.5px solid var(--clr-text-darkest) ;\n}\n\n.new-todo-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 30px;\n\twidth: 30px;\n\tborder-radius: 5px;\n}\n\n.new-todo-container:hover {\n\tbackground-color: rgba(0, 0, 0, 0.1);\n}\n\n.new-project-modal {\n\theight: 26vh;\n\twidth: 50vh;\n\tz-index: 3;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tbackground-color: var(--clr-white);\n\tborder: none;\n\tborder-radius: 10px;\n\toutline: none;\n}\n\n.new-todo-modal {\n\theight: 60vh;\n\twidth: 50vh;\n\tz-index: 3;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tbackground-color: var(--clr-white);\n\tborder: none;\n\tborder-radius: 10px;\n\toutline: none;\n}\n\n.new-todo-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1vh;\n\tmargin-top: 1vh;\n}\n\n.modal::backdrop {\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 30px;\n\twidth: 30px;\n\tborder-radius: 5px;\n\tcolor: var(--clr-text-light-gray);\n}\n\n.icon-div:hover {\n\tbackground-color: rgb(0, 0, 0, 0.1);\n}\n\n.modal-header-container {\n\theight: 5vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.form-input-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.7vh;\n\twidth: 100%;\n}\n\n.form-label {\n\tcolor: var(--clr-text-darkest);\n\tfont-size: 1.1rem;\n}\n\n.form-input {\n\theight: 3.8vh;\n\toutline: none;\n\tborder: 1px solid var(--clr-text-darkest);\n\tborder-radius: 5px;\n\tfont-size: 1rem;\n\tcolor: var(--clr-text-darkest);\n\topacity: 0.9;\n\tpadding-left: 1vh;\n}\n\n.form-input-half {\n\twidth: 100%;\n}\n\n.double-form-inputs {\n\tdisplay: flex;\n\tgap: 1vh;\n}\n\n.modal-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2vh;\n\tmargin-top: 3vh;\n}\n\n.create-button {\n\theight: 6vh;\n\tfont-size: 1.2rem;\n\tcolor: var(--clr-white);\n\tbackground-color: var(--clr-accent);\n\toutline: none;\n\tborder: none;\n\tborder-radius: 5px;\n\twidth: 100%;\n}\n\n.modal-title {\n\tfont-size: 1.5rem;\n}\n\n.modal-hr {\n\toutline: none;\n\tborder: 0.5px solid var(--clr-text-light-gray);\n}\n\n.form-input-textarea {\n\toutline: none;\n\tborder: 1px solid var(--clr-text-darkest);\n\tborder-radius: 5px;\n\tfont-size: 1rem;\n\tcolor: var(--clr-text-darkest);\n\topacity: 0.9;\n\tpadding-left: 1vh;\n\tfont-family: 'Roboto Flex', sans-serif;\n\tpadding-top: 1vh;\n}\n\n.form-input-due-date {\n\tfont-family: 'Roboto Flex', sans-serif;\n}\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/styles/style.css":
/*!*************************************!*\
  !*** ./src/assets/styles/style.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentUsingDOM: () => (/* binding */ createContentUsingDOM)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/style.css */ "./src/assets/styles/style.css");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");





function createContentUsingDOM(projects) {
    const projectTabs = document.querySelector('.project-tabs');
    
    projects.forEach(project => {
        const projectTab = document.createElement('div');
        projectTab.className = 'project-tab';
        
        const projectTitle = document.createElement('h3');
        projectTitle.className = 'project-sidebar-title';
        projectTitle.textContent = project.getName();
        
        projectTab.appendChild(projectTitle);
        projectTabs.appendChild(projectTab);

        projectTab.addEventListener('click', () => {
            const clickedProject = projects.find(p => p.getName() === project.getName());
            projects.forEach(otherProject => {
                if (otherProject.getName() !== clickedProject.getName()) {
                    otherProject.setActive(false)
                }
            });
            clickedProject.setActive(true);

            let mainContainer = document.querySelector('.main-container');
            mainContainer.innerHTML = ''

            let contentHeaderContainer = document.createElement('div');
            contentHeaderContainer.classList.add('content-header-container')
            mainContainer.appendChild(contentHeaderContainer);

            let contentTitle = document.createElement('h1');
            contentTitle.classList.add('content-title')
            contentTitle.textContent = project.getName();
            contentHeaderContainer.appendChild(contentTitle);

            let newTodoContainer = document.createElement('div');
            newTodoContainer.classList.add('new-todo-container')
            contentHeaderContainer.appendChild(newTodoContainer);

            let newTodoIcon = document.createElement('i')
            newTodoIcon.classList.add('fa-solid')
            newTodoIcon.classList.add('fa-plus')
            newTodoIcon.classList.add('fa-lg')
            newTodoIcon.classList.add('fa-2x')
            newTodoIcon.classList.add('new-todo-button')
            newTodoContainer.appendChild(newTodoIcon);

            let contentHr = document.createElement('hr');
            contentHr.classList.add('content-hr')
            mainContainer.appendChild(contentHr);

            (0,___WEBPACK_IMPORTED_MODULE_3__.createModalForms)();

            // remove the current-project classlist from all projects
            // whichever project was clicked, add the classlist of current-project to it
        })
    });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createModalForms: () => (/* binding */ createModalForms),
/* harmony export */   createProjects: () => (/* binding */ createProjects),
/* harmony export */   createTodos: () => (/* binding */ createTodos)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/style.css */ "./src/assets/styles/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





let projects = [new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Web Development')];
const newProjectForm = document.querySelector('.new-project-form');
const newTodoForm = document.querySelector('.new-todo-form');
const projectTabs = document.querySelector('.project-tabs');
const newProjectModal = document.querySelector('.new-project-modal');
const newTodoModal = document.querySelector('.new-todo-modal');
const projectTab = document.querySelector('.project-tab');

function createModalForms() {
    // Modal for new projects

    const newProjectButton = document.querySelector('.new-project-button');
    const closeProjectModalButton = document.querySelector('.close-project-modal');

    newProjectButton.addEventListener('click', () => {
        newProjectModal.showModal();
    })

    closeProjectModalButton.addEventListener('click', () => {
        newProjectModal.close();
    })

    // Modal for new todos

    const newTodoButton = document.querySelector('.new-todo-container');
    const closeTodoModalButton = document.querySelector('.close-todo-modal');
    const createTodoButton = document.querySelector('.create-todo-button');

    newTodoButton.addEventListener('click', () => {
        newTodoModal.showModal()
    })

    closeTodoModalButton.addEventListener('click', () => {
        newTodoModal.close();
    })

    createTodoButton.addEventListener('click', () => {
        // create todo and add to specific projects todos array.
    })
}

function createProjects() {
    newProjectForm.addEventListener('submit', (event) => {
        newProjectModal.close();
        event.preventDefault();
        let projectName = document.getElementById("project-name").value;
        projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(projectName))
        projectTabs.innerHTML = '';
        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.createContentUsingDOM)(projects);
    })
}

function createTodos() {
    newTodoForm.addEventListener('submit', (event) => {
        newTodoModal.close();
        event.preventDefault();
        let todoTitle = document.getElementById("todo-title").value;
        let todoDescription = document.getElementById("todo-description").value;
        let todoDueDate = document.getElementById("todo-due-date").value;
        let todoPriority = document.getElementById("todo-priority").value;
        let todoProject = document.getElementById("todo-project").value;

        let activeProject = projects.find(project => project.active);
        
        if (activeProject) {
            activeProject.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(todoTitle, todoDescription, todoDueDate, todoPriority, todoProject));
        }
    })
}
 
createModalForms()
createProjects()
createTodos()
;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createContentUsingDOM)(projects);

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Project: () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");


class Project{
    constructor(name) {
        this.name = name;
        this.todos = [];
        this.active = false;
    }

    getName() {
        return this.name;
    }

    addTodo(todo) {
        if (todo instanceof _todo__WEBPACK_IMPORTED_MODULE_0__.Todo) {
            this.todos.push(todo);
        }
    }

    setActive(active) {
        this.active = active;
    }
}

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Todo: () => (/* binding */ Todo)
/* harmony export */ });
class Todo{
    constructor(title, description, dueDate, priority, project) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.project = project
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPriority() {
        return this.priority;
    }

    getProject() {
        return this.project;
    }

    setTitle(title) {
        this.title = title;
    }

    setDescription(description) {
        this.description = description;
    }

    setDueDate(dueDate) {
        this.dueDate = dueDate
    }

    setPriority(priority) {
        this.priority = priority
    }

    setProject(project) {
        this.project = project
    }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjU5ZjgyNmU1ZmMwOGQyOWMyNWEyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixxSUFBcUk7QUFDckk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw4RkFBOEYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8s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LDREQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FDOUVTOztBQUV2QjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLHVDQUFJO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Qk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcz9iYzQ2Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rRmxleDpvcHN6QDguLjE0NCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcblx0LS1jbHItYWNjZW50OiAjMDA0QjhGO1xuXHQtLWNsci10ZXh0LWRhcmtlc3Q6ICMxRTFFMUU7XG5cdC0tY2xyLXdoaXRlOiAjRkZGRkZGO1xuXHQtLWNsci1ib2R5LWdyYXk6ICNFRUVFRUU7XG5cdC0tY2xyLXRleHQtbGlnaHQtZ3JheTogIzk0OTQ5NDtcblx0LS1zaWRlYmFyLWxlZnQtbWFyZ2luOiA2dmg7XG5cdC0tc2lkZWJhci10b3AtbWFyZ2luOiA3dmg7XG59XG5cbi5jb250YWluZXIge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDh2aCAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8gRmxleCcsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuXHRncmlkLXJvdzogc3BhbiAxO1xuXHRncmlkLWNvbHVtbjogc3BhbiAyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtdGFiIHtcblx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xuXHR3aWR0aDogMzV2aDtcblx0aGVpZ2h0OiA0dmg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2plY3QtdGFiOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbn1cblxuLnByb2plY3Qtc2lkZWJhci10aXRsZSB7XG5cdG1hcmdpbi1sZWZ0OiAxdmg7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XG59XG5cbi5wcm9qZWN0cy1zaWRlYmFyLWhlYWRlciB7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XG59XG5cbi5zaWRlYmFyLWhyIHtcblx0d2lkdGg6IDM1dmg7XG5cdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KSA7XG59XG5cbi5jdXJyZW50LXByb2plY3Qge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDdEN0Q3O1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG4uY3VycmVudC1wcm9qZWN0OmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0Q3RDdENztcbn1cblxuLmRlZmF1bHQtdGFicyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMXZoO1xuXHRtYXJnaW4tdG9wOiB2YXIoLS1zaWRlYmFyLXRvcC1tYXJnaW4pO1xufVxuXG4ucHJvamVjdC10YWJzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxdmg7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XG59XG5cbi5zaWRlYmFyIHtcblx0Z3JpZC1yb3c6IDI7XG5cdGdyaWQtY29sdW1uOiAxO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYm9keS1ncmF5KTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxdmg7XG5cdG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b24ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRoZWlnaHQ6IDQuNXZoO1xuXHR3aWR0aDogMzV2aDtcblx0Z2FwOiAydmg7XG5cdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1saWdodC1ncmF5KTtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LXNpemU6IDFyZW07XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvamVjdC10YWJzIHtcblx0bWFyZ2luLXRvcDogMnZoO1xufVxuXG4ubmV3LXByb2plY3QtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xuXHRoZWlnaHQ6IDV2aDtcblx0d2lkdGg6IDM1dmg7O1xufVxuXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnByb2plY3RzLXNpZGViYXItY29udGFpbmVyIHtcblx0bWFyZ2luLXRvcDogNXZoO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuXHRncmlkLXJvdzogMjtcblx0Z3JpZC1jb2x1bW46IDI7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XG5cdG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5jb250ZW50LWhlYWRlci1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHdpZHRoOiAxMjV2aDtcblx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xuXHRtYXJnaW4tdG9wOiB2YXIoLS1zaWRlYmFyLXRvcC1tYXJnaW4pO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudC10aXRsZSB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbnRlbnQtaHIge1xuXHR3aWR0aDogMTI1dmg7XG5cdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KSA7XG59XG5cbi5uZXctdG9kby1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0aGVpZ2h0OiAzMHB4O1xuXHR3aWR0aDogMzBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubmV3LXRvZG8tY29udGFpbmVyOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubmV3LXByb2plY3QtbW9kYWwge1xuXHRoZWlnaHQ6IDI2dmg7XG5cdHdpZHRoOiA1MHZoO1xuXHR6LWluZGV4OiAzO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0Ym90dG9tOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5uZXctdG9kby1tb2RhbCB7XG5cdGhlaWdodDogNjB2aDtcblx0d2lkdGg6IDUwdmg7XG5cdHotaW5kZXg6IDM7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0b3V0bGluZTogbm9uZTtcbn1cblxuLm5ldy10b2RvLWZvcm0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDF2aDtcblx0bWFyZ2luLXRvcDogMXZoO1xufVxuXG4ubW9kYWw6OmJhY2tkcm9wIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5pY29uLWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IDMwcHg7XG5cdHdpZHRoOiAzMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1saWdodC1ncmF5KTtcbn1cblxuLmljb24tZGl2OmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5tb2RhbC1oZWFkZXItY29udGFpbmVyIHtcblx0aGVpZ2h0OiA1dmg7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtLWlucHV0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC43dmg7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1sYWJlbCB7XG5cdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcblx0Zm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5mb3JtLWlucHV0IHtcblx0aGVpZ2h0OiAzLjh2aDtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XG5cdG9wYWNpdHk6IDAuOTtcblx0cGFkZGluZy1sZWZ0OiAxdmg7XG59XG5cbi5mb3JtLWlucHV0LWhhbGYge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmRvdWJsZS1mb3JtLWlucHV0cyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMXZoO1xufVxuXG4ubW9kYWwtZm9ybSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMnZoO1xuXHRtYXJnaW4tdG9wOiAzdmg7XG59XG5cbi5jcmVhdGUtYnV0dG9uIHtcblx0aGVpZ2h0OiA2dmg7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsLXRpdGxlIHtcblx0Zm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5tb2RhbC1ociB7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tY2xyLXRleHQtbGlnaHQtZ3JheSk7XG59XG5cbi5mb3JtLWlucHV0LXRleHRhcmVhIHtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XG5cdG9wYWNpdHk6IDAuOTtcblx0cGFkZGluZy1sZWZ0OiAxdmg7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvIEZsZXgnLCBzYW5zLXNlcmlmO1xuXHRwYWRkaW5nLXRvcDogMXZoO1xufVxuXG4uZm9ybS1pbnB1dC1kdWUtZGF0ZSB7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvIEZsZXgnLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLDJCQUEyQjtDQUMzQixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCLDhCQUE4QjtDQUM5QiwwQkFBMEI7Q0FDMUIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYiwyQkFBMkI7Q0FDM0IsOEJBQThCO0NBQzlCLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsbUNBQW1DO0NBQ25DLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyx1Q0FBdUM7Q0FDdkMsV0FBVztDQUNYLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLHVDQUF1QztBQUN4Qzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCx1Q0FBdUM7Q0FDdkMsYUFBYTtDQUNiLDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFFBQVE7Q0FDUixxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFFBQVE7QUFDVDs7QUFFQTtDQUNDLFlBQVk7Q0FDWixp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c0NBQXNDO0FBQ3ZDOztBQUVBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rRmxleDpvcHN6QDguLjE0NCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuXFx0LS1jbHItYWNjZW50OiAjMDA0QjhGO1xcblxcdC0tY2xyLXRleHQtZGFya2VzdDogIzFFMUUxRTtcXG5cXHQtLWNsci13aGl0ZTogI0ZGRkZGRjtcXG5cXHQtLWNsci1ib2R5LWdyYXk6ICNFRUVFRUU7XFxuXFx0LS1jbHItdGV4dC1saWdodC1ncmF5OiAjOTQ5NDk0O1xcblxcdC0tc2lkZWJhci1sZWZ0LW1hcmdpbjogNnZoO1xcblxcdC0tc2lkZWJhci10b3AtbWFyZ2luOiA3dmg7XFxufVxcblxcbi5jb250YWluZXIge1xcblxcdGhlaWdodDogMTAwdmg7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLXJvd3M6IDh2aCAxZnI7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvIEZsZXgnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG5cXHRncmlkLXJvdzogc3BhbiAxO1xcblxcdGdyaWQtY29sdW1uOiBzcGFuIDI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10YWIge1xcblxcdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcXG5cXHR3aWR0aDogMzV2aDtcXG5cXHRoZWlnaHQ6IDR2aDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC10YWI6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XFxufVxcblxcbi5wcm9qZWN0LXNpZGViYXItdGl0bGUge1xcblxcdG1hcmdpbi1sZWZ0OiAxdmg7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xcbn1cXG5cXG4ucHJvamVjdHMtc2lkZWJhci1oZWFkZXIge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcblxcdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcXG59XFxuXFxuLnNpZGViYXItaHIge1xcblxcdHdpZHRoOiAzNXZoO1xcblxcdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tY2xyLXRleHQtZGFya2VzdCkgO1xcbn1cXG5cXG4uY3VycmVudC1wcm9qZWN0IHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDdEN0Q3O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5jdXJyZW50LXByb2plY3Q6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNEN0Q3RDc7XFxufVxcblxcbi5kZWZhdWx0LXRhYnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDF2aDtcXG5cXHRtYXJnaW4tdG9wOiB2YXIoLS1zaWRlYmFyLXRvcC1tYXJnaW4pO1xcbn1cXG5cXG4ucHJvamVjdC10YWJzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxdmg7XFxufVxcblxcbi5oZWFkZXItdGl0bGUge1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRmb250LXNpemU6IDEuNnJlbTtcXG5cXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XFxufVxcblxcbi5zaWRlYmFyIHtcXG5cXHRncmlkLXJvdzogMjtcXG5cXHRncmlkLWNvbHVtbjogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYm9keS1ncmF5KTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxdmg7XFxuXFx0b3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRoZWlnaHQ6IDQuNXZoO1xcblxcdHdpZHRoOiAzNXZoO1xcblxcdGdhcDogMnZoO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1saWdodC1ncmF5KTtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ucHJvamVjdC10YWJzIHtcXG5cXHRtYXJnaW4tdG9wOiAydmg7XFxufVxcblxcbi5uZXctcHJvamVjdC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xcblxcdGhlaWdodDogNXZoO1xcblxcdHdpZHRoOiAzNXZoOztcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG59XFxuXFxuLnByb2plY3RzLXNpZGViYXItY29udGFpbmVyIHtcXG5cXHRtYXJnaW4tdG9wOiA1dmg7XFxufVxcblxcbi5tYWluLWNvbnRhaW5lciB7XFxuXFx0Z3JpZC1yb3c6IDI7XFxuXFx0Z3JpZC1jb2x1bW46IDI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG5cXHRvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uY29udGVudC1oZWFkZXItY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHR3aWR0aDogMTI1dmg7XFxuXFx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xcblxcdG1hcmdpbi10b3A6IHZhcigtLXNpZGViYXItdG9wLW1hcmdpbik7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQtdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMnJlbTtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uY29udGVudC1ociB7XFxuXFx0d2lkdGg6IDEyNXZoO1xcblxcdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tY2xyLXRleHQtZGFya2VzdCkgO1xcbn1cXG5cXG4ubmV3LXRvZG8tY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdHdpZHRoOiAzMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm5ldy10b2RvLWNvbnRhaW5lcjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtbW9kYWwge1xcblxcdGhlaWdodDogMjZ2aDtcXG5cXHR3aWR0aDogNTB2aDtcXG5cXHR6LWluZGV4OiAzO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm5ldy10b2RvLW1vZGFsIHtcXG5cXHRoZWlnaHQ6IDYwdmg7XFxuXFx0d2lkdGg6IDUwdmg7XFxuXFx0ei1pbmRleDogMztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5uZXctdG9kby1mb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxdmg7XFxuXFx0bWFyZ2luLXRvcDogMXZoO1xcbn1cXG5cXG4ubW9kYWw6OmJhY2tkcm9wIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmljb24tZGl2IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0aGVpZ2h0OiAzMHB4O1xcblxcdHdpZHRoOiAzMHB4O1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtbGlnaHQtZ3JheSk7XFxufVxcblxcbi5pY29uLWRpdjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5tb2RhbC1oZWFkZXItY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6IDV2aDtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybS1pbnB1dC1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDAuN3ZoO1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZm9ybS1sYWJlbCB7XFxuXFx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xcblxcdGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG4uZm9ybS1pbnB1dCB7XFxuXFx0aGVpZ2h0OiAzLjh2aDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xcblxcdG9wYWNpdHk6IDAuOTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDF2aDtcXG59XFxuXFxuLmZvcm0taW5wdXQtaGFsZiB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5kb3VibGUtZm9ybS1pbnB1dHMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0Z2FwOiAxdmg7XFxufVxcblxcbi5tb2RhbC1mb3JtIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAydmg7XFxuXFx0bWFyZ2luLXRvcDogM3ZoO1xcbn1cXG5cXG4uY3JlYXRlLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiA2dmg7XFxuXFx0Zm9udC1zaXplOiAxLjJyZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ubW9kYWwtdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ubW9kYWwtaHIge1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1saWdodC1ncmF5KTtcXG59XFxuXFxuLmZvcm0taW5wdXQtdGV4dGFyZWEge1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XFxuXFx0b3BhY2l0eTogMC45O1xcblxcdHBhZGRpbmctbGVmdDogMXZoO1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvIEZsZXgnLCBzYW5zLXNlcmlmO1xcblxcdHBhZGRpbmctdG9wOiAxdmg7XFxufVxcblxcbi5mb3JtLWlucHV0LWR1ZS1kYXRlIHtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90byBGbGV4Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0J1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kbydcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcydcbmltcG9ydCB7IGNyZWF0ZU1vZGFsRm9ybXMgfSBmcm9tICcuJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnRVc2luZ0RPTShwcm9qZWN0cykge1xuICAgIGNvbnN0IHByb2plY3RUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFicycpO1xuICAgIFxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdFRhYi5jbGFzc05hbWUgPSAncHJvamVjdC10YWInO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LXNpZGViYXItdGl0bGUnO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RUYWIuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgcHJvamVjdFRhYnMuYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XG5cbiAgICAgICAgcHJvamVjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChwID0+IHAuZ2V0TmFtZSgpID09PSBwcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKG90aGVyUHJvamVjdCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG90aGVyUHJvamVjdC5nZXROYW1lKCkgIT09IGNsaWNrZWRQcm9qZWN0LmdldE5hbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICBvdGhlclByb2plY3Quc2V0QWN0aXZlKGZhbHNlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2xpY2tlZFByb2plY3Quc2V0QWN0aXZlKHRydWUpO1xuXG4gICAgICAgICAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJ1xuXG4gICAgICAgICAgICBsZXQgY29udGVudEhlYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29udGVudEhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWhlYWRlci1jb250YWluZXInKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50SGVhZGVyQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgbGV0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICBjb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZCgnY29udGVudC10aXRsZScpXG4gICAgICAgICAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgICAgIGNvbnRlbnRIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcblxuICAgICAgICAgICAgbGV0IG5ld1RvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIG5ld1RvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnbmV3LXRvZG8tY29udGFpbmVyJylcbiAgICAgICAgICAgIGNvbnRlbnRIZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0NvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGxldCBuZXdUb2RvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICAgICAgICAgICAgbmV3VG9kb0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKVxuICAgICAgICAgICAgbmV3VG9kb0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtcGx1cycpXG4gICAgICAgICAgICBuZXdUb2RvSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1sZycpXG4gICAgICAgICAgICBuZXdUb2RvSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS0yeCcpXG4gICAgICAgICAgICBuZXdUb2RvSWNvbi5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1idXR0b24nKVxuICAgICAgICAgICAgbmV3VG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvSWNvbik7XG5cbiAgICAgICAgICAgIGxldCBjb250ZW50SHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgICAgICAgICAgY29udGVudEhyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtaHInKVxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50SHIpO1xuXG4gICAgICAgICAgICBjcmVhdGVNb2RhbEZvcm1zKCk7XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudC1wcm9qZWN0IGNsYXNzbGlzdCBmcm9tIGFsbCBwcm9qZWN0c1xuICAgICAgICAgICAgLy8gd2hpY2hldmVyIHByb2plY3Qgd2FzIGNsaWNrZWQsIGFkZCB0aGUgY2xhc3NsaXN0IG9mIGN1cnJlbnQtcHJvamVjdCB0byBpdFxuICAgICAgICB9KVxuICAgIH0pO1xufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJ1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGVudFVzaW5nRE9NIH0gZnJvbSAnLi9kb20nO1xuXG5sZXQgcHJvamVjdHMgPSBbbmV3IFByb2plY3QoJ1dlYiBEZXZlbG9wbWVudCcpXTtcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWZvcm0nKTtcbmNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvLWZvcm0nKTtcbmNvbnN0IHByb2plY3RUYWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtdGFicycpO1xuY29uc3QgbmV3UHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBuZXdUb2RvTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tbW9kYWwnKTtcbmNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWInKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGFsRm9ybXMoKSB7XG4gICAgLy8gTW9kYWwgZm9yIG5ldyBwcm9qZWN0c1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1idXR0b24nKTtcbiAgICBjb25zdCBjbG9zZVByb2plY3RNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wcm9qZWN0LW1vZGFsJyk7XG5cbiAgICBuZXdQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuZXdQcm9qZWN0TW9kYWwuc2hvd01vZGFsKCk7XG4gICAgfSlcblxuICAgIGNsb3NlUHJvamVjdE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuZXdQcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICB9KVxuXG4gICAgLy8gTW9kYWwgZm9yIG5ldyB0b2Rvc1xuXG4gICAgY29uc3QgbmV3VG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kby1jb250YWluZXInKTtcbiAgICBjb25zdCBjbG9zZVRvZG9Nb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS10b2RvLW1vZGFsJyk7XG4gICAgY29uc3QgY3JlYXRlVG9kb0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtdG9kby1idXR0b24nKTtcblxuICAgIG5ld1RvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5ld1RvZG9Nb2RhbC5zaG93TW9kYWwoKVxuICAgIH0pXG5cbiAgICBjbG9zZVRvZG9Nb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmV3VG9kb01vZGFsLmNsb3NlKCk7XG4gICAgfSlcblxuICAgIGNyZWF0ZVRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vIGNyZWF0ZSB0b2RvIGFuZCBhZGQgdG8gc3BlY2lmaWMgcHJvamVjdHMgdG9kb3MgYXJyYXkuXG4gICAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzKCkge1xuICAgIG5ld1Byb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICBuZXdQcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWU7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QocHJvamVjdE5hbWUpKVxuICAgICAgICBwcm9qZWN0VGFicy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY3JlYXRlQ29udGVudFVzaW5nRE9NKHByb2plY3RzKTtcbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kb3MoKSB7XG4gICAgbmV3VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG5ld1RvZG9Nb2RhbC5jbG9zZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXRpdGxlXCIpLnZhbHVlO1xuICAgICAgICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBsZXQgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZHVlLWRhdGVcIikudmFsdWU7XG4gICAgICAgIGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tcHJpb3JpdHlcIikudmFsdWU7XG4gICAgICAgIGxldCB0b2RvUHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1wcm9qZWN0XCIpLnZhbHVlO1xuXG4gICAgICAgIGxldCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QuYWN0aXZlKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0LmFkZFRvZG8obmV3IFRvZG8odG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb24sIHRvZG9EdWVEYXRlLCB0b2RvUHJpb3JpdHksIHRvZG9Qcm9qZWN0KSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuIFxuY3JlYXRlTW9kYWxGb3JtcygpXG5jcmVhdGVQcm9qZWN0cygpXG5jcmVhdGVUb2RvcygpXG5jcmVhdGVDb250ZW50VXNpbmdET00ocHJvamVjdHMpOyIsImltcG9ydCB7IFRvZG8gfSBmcm9tIFwiLi90b2RvXCI7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0e1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgYWRkVG9kbyh0b2RvKSB7XG4gICAgICAgIGlmICh0b2RvIGluc3RhbmNlb2YgVG9kbykge1xuICAgICAgICAgICAgdGhpcy50b2Rvcy5wdXNoKHRvZG8pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlKGFjdGl2ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3Q7XG4gICAgfVxuXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIH1cblxuICAgIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIH1cblxuICAgIHNldFByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==