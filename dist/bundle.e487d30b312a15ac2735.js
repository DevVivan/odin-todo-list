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
/* harmony export */   createModalForms: () => (/* binding */ createModalForms)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/style.css */ "./src/assets/styles/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





let projects = [new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Web Development')];

function createModalForms() {
    // Modal for new projects

    const newProjectButton = document.querySelector('.new-project-button');
    const newProjectModal = document.querySelector('.new-project-modal');
    const closeProjectModalButton = document.querySelector('.close-project-modal');
    const createProjectButton = document.querySelector('.create-project-button');

    newProjectButton.addEventListener('click', () => {
        newProjectModal.showModal();
    })

    closeProjectModalButton.addEventListener('click', () => {
        newProjectModal.close();
    })

    createProjectButton.addEventListener('click', () => {
        // create the project and add to array
    })

    // Modal for new todos

    const newTodoButton = document.querySelector('.new-todo-container');
    const newTodoModal = document.querySelector('.new-todo-modal');
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

createModalForms()
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
        this.tasks = [];
    }

    getName() {
        return this.name;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmU0ODdkMzBiMzEyYTE1YWMyNzM1LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixxSUFBcUk7QUFDckk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw4RkFBOEYsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8s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Q0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2JtQztBQUNOO0FBQ0s7O0FBRTNCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQm1DO0FBQ047QUFDSztBQUNZOztBQUU5QyxvQkFBb0IsNkNBQU87O0FBRXBCO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDREQUFxQjs7Ozs7Ozs7Ozs7Ozs7O0FDaERTOztBQUV2QjtBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1hPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3M/YmM0NiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0ZsZXg6b3BzekA4Li4xNDQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG5cdC0tY2xyLWFjY2VudDogIzAwNEI4Rjtcblx0LS1jbHItdGV4dC1kYXJrZXN0OiAjMUUxRTFFO1xuXHQtLWNsci13aGl0ZTogI0ZGRkZGRjtcblx0LS1jbHItYm9keS1ncmF5OiAjRUVFRUVFO1xuXHQtLWNsci10ZXh0LWxpZ2h0LWdyYXk6ICM5NDk0OTQ7XG5cdC0tc2lkZWJhci1sZWZ0LW1hcmdpbjogNnZoO1xuXHQtLXNpZGViYXItdG9wLW1hcmdpbjogN3ZoO1xufVxuXG4uY29udGFpbmVyIHtcblx0aGVpZ2h0OiAxMDB2aDtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA4dmggMWZyO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvIEZsZXgnLCBzYW5zLXNlcmlmO1xufVxuXG4uaGVhZGVyIHtcblx0Z3JpZC1yb3c6IHNwYW4gMTtcblx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9qZWN0LXRhYiB7XG5cdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcblx0d2lkdGg6IDM1dmg7XG5cdGhlaWdodDogNHZoO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9qZWN0LXRhYjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG59XG5cbi5wcm9qZWN0LXNpZGViYXItdGl0bGUge1xuXHRtYXJnaW4tbGVmdDogMXZoO1xuXHRmb250LXNpemU6IDEuMnJlbTtcblx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xufVxuXG4ucHJvamVjdHMtc2lkZWJhci1oZWFkZXIge1xuXHRmb250LXNpemU6IDEuNXJlbTtcblx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xufVxuXG4uc2lkZWJhci1ociB7XG5cdHdpZHRoOiAzNXZoO1xuXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tY2xyLXRleHQtZGFya2VzdCkgO1xufVxuXG4uY3VycmVudC1wcm9qZWN0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0Q3RDdENztcblx0Zm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmN1cnJlbnQtcHJvamVjdDpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNEN0Q3RDc7XG59XG5cbi5kZWZhdWx0LXRhYnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDF2aDtcblx0bWFyZ2luLXRvcDogdmFyKC0tc2lkZWJhci10b3AtbWFyZ2luKTtcbn1cblxuLnByb2plY3QtdGFicyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMXZoO1xufVxuXG4uaGVhZGVyLXRpdGxlIHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDEuNnJlbTtcblx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xufVxuXG4uc2lkZWJhciB7XG5cdGdyaWQtcm93OiAyO1xuXHRncmlkLWNvbHVtbjogMTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJvZHktZ3JheSk7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMXZoO1xuXHRvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcblx0ZGlzcGxheTogZmxleDtcblx0aGVpZ2h0OiA0LjV2aDtcblx0d2lkdGg6IDM1dmg7XG5cdGdhcDogMnZoO1xuXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtbGlnaHQtZ3JheSk7XG5cdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2plY3QtdGFicyB7XG5cdG1hcmdpbi10b3A6IDJ2aDtcbn1cblxuLm5ldy1wcm9qZWN0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcblx0aGVpZ2h0OiA1dmg7XG5cdHdpZHRoOiAzNXZoOztcbn1cblxuLm5ldy1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5wcm9qZWN0cy1zaWRlYmFyLWNvbnRhaW5lciB7XG5cdG1hcmdpbi10b3A6IDV2aDtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcblx0Z3JpZC1yb3c6IDI7XG5cdGdyaWQtY29sdW1uOiAyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xuXHRvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4uY29udGVudC1oZWFkZXItY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR3aWR0aDogMTI1dmg7XG5cdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcblx0bWFyZ2luLXRvcDogdmFyKC0tc2lkZWJhci10b3AtbWFyZ2luKTtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQtdGl0bGUge1xuXHRmb250LXNpemU6IDJyZW07XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5jb250ZW50LWhyIHtcblx0d2lkdGg6IDEyNXZoO1xuXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tY2xyLXRleHQtZGFya2VzdCkgO1xufVxuXG4ubmV3LXRvZG8tY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGhlaWdodDogMzBweDtcblx0d2lkdGg6IDMwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLm5ldy10b2RvLWNvbnRhaW5lcjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm5ldy1wcm9qZWN0LW1vZGFsIHtcblx0aGVpZ2h0OiAyNnZoO1xuXHR3aWR0aDogNTB2aDtcblx0ei1pbmRleDogMztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG4ubmV3LXRvZG8tbW9kYWwge1xuXHRoZWlnaHQ6IDYwdmg7XG5cdHdpZHRoOiA1MHZoO1xuXHR6LWluZGV4OiAzO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0Ym90dG9tOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5uZXctdG9kby1mb3JtIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxdmg7XG5cdG1hcmdpbi10b3A6IDF2aDtcbn1cblxuLm1vZGFsOjpiYWNrZHJvcCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xufVxuXG4uaWNvbi1kaXYge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0aGVpZ2h0OiAzMHB4O1xuXHR3aWR0aDogMzBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtbGlnaHQtZ3JheSk7XG59XG5cbi5pY29uLWRpdjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xufVxuXG4ubW9kYWwtaGVhZGVyLWNvbnRhaW5lciB7XG5cdGhlaWdodDogNXZoO1xuXHR3aWR0aDogMTAwJTtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybS1pbnB1dC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDAuN3ZoO1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tbGFiZWwge1xuXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XG5cdGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uZm9ybS1pbnB1dCB7XG5cdGhlaWdodDogMy44dmg7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xuXHRvcGFjaXR5OiAwLjk7XG5cdHBhZGRpbmctbGVmdDogMXZoO1xufVxuXG4uZm9ybS1pbnB1dC1oYWxmIHtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5kb3VibGUtZm9ybS1pbnB1dHMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRnYXA6IDF2aDtcbn1cblxuLm1vZGFsLWZvcm0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDJ2aDtcblx0bWFyZ2luLXRvcDogM3ZoO1xufVxuXG4uY3JlYXRlLWJ1dHRvbiB7XG5cdGhlaWdodDogNnZoO1xuXHRmb250LXNpemU6IDEuMnJlbTtcblx0Y29sb3I6IHZhcigtLWNsci13aGl0ZSk7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5tb2RhbC10aXRsZSB7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4ubW9kYWwtaHIge1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWxpZ2h0LWdyYXkpO1xufVxuXG4uZm9ybS1pbnB1dC10ZXh0YXJlYSB7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xuXHRvcGFjaXR5OiAwLjk7XG5cdHBhZGRpbmctbGVmdDogMXZoO1xuXHRmb250LWZhbWlseTogJ1JvYm90byBGbGV4Jywgc2Fucy1zZXJpZjtcblx0cGFkZGluZy10b3A6IDF2aDtcbn1cblxuLmZvcm0taW5wdXQtZHVlLWRhdGUge1xuXHRmb250LWZhbWlseTogJ1JvYm90byBGbGV4Jywgc2Fucy1zZXJpZjtcbn1cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtDQUNDLHFCQUFxQjtDQUNyQiwyQkFBMkI7Q0FDM0Isb0JBQW9CO0NBQ3BCLHdCQUF3QjtDQUN4Qiw4QkFBOEI7Q0FDOUIsMEJBQTBCO0NBQzFCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IsMkJBQTJCO0NBQzNCLDhCQUE4QjtDQUM5QixzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLG1DQUFtQztDQUNuQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsdUNBQXVDO0NBQ3ZDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQix1Q0FBdUM7QUFDeEM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsdUNBQXVDO0NBQ3ZDLGFBQWE7Q0FDYiw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixRQUFRO0NBQ1IscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLHVDQUF1QztBQUN4Qzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2Qsc0NBQXNDO0NBQ3RDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsUUFBUTtDQUNSLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IsV0FBVztDQUNYLFFBQVE7Q0FDUixpQ0FBaUM7Q0FDakMsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsYUFBYTtDQUNiLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVDQUF1QztDQUN2QyxXQUFXO0NBQ1gsV0FBVztBQUNaOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2Qsa0NBQWtDO0NBQ2xDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLHVDQUF1QztDQUN2QyxxQ0FBcUM7Q0FDckMsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWix1Q0FBdUM7Q0FDdkMsYUFBYTtDQUNiLDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixTQUFTO0NBQ1Qsa0NBQWtDO0NBQ2xDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixTQUFTO0NBQ1Qsa0NBQWtDO0NBQ2xDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixRQUFRO0NBQ1IsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYix5Q0FBeUM7Q0FDekMsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZiw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFFBQVE7Q0FDUixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsbUNBQW1DO0NBQ25DLGFBQWE7Q0FDYixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4Q0FBOEM7QUFDL0M7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IseUNBQXlDO0NBQ3pDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsc0NBQXNDO0NBQ3RDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHNDQUFzQztBQUN2Qzs7QUFFQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0ZsZXg6b3BzekA4Li4xNDQmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcblxcdC0tY2xyLWFjY2VudDogIzAwNEI4RjtcXG5cXHQtLWNsci10ZXh0LWRhcmtlc3Q6ICMxRTFFMUU7XFxuXFx0LS1jbHItd2hpdGU6ICNGRkZGRkY7XFxuXFx0LS1jbHItYm9keS1ncmF5OiAjRUVFRUVFO1xcblxcdC0tY2xyLXRleHQtbGlnaHQtZ3JheTogIzk0OTQ5NDtcXG5cXHQtLXNpZGViYXItbGVmdC1tYXJnaW46IDZ2aDtcXG5cXHQtLXNpZGViYXItdG9wLW1hcmdpbjogN3ZoO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA4dmggMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90byBGbGV4Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhlYWRlciB7XFxuXFx0Z3JpZC1yb3c6IHNwYW4gMTtcXG5cXHRncmlkLWNvbHVtbjogc3BhbiAyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGFiIHtcXG5cXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XFxuXFx0d2lkdGg6IDM1dmg7XFxuXFx0aGVpZ2h0OiA0dmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3QtdGFiOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xcbn1cXG5cXG4ucHJvamVjdC1zaWRlYmFyLXRpdGxlIHtcXG5cXHRtYXJnaW4tbGVmdDogMXZoO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcXG59XFxuXFxuLnByb2plY3RzLXNpZGViYXItaGVhZGVyIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XFxufVxcblxcbi5zaWRlYmFyLWhyIHtcXG5cXHR3aWR0aDogMzV2aDtcXG5cXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWRhcmtlc3QpIDtcXG59XFxuXFxuLmN1cnJlbnQtcHJvamVjdCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0Q3RDdENztcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uY3VycmVudC1wcm9qZWN0OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDdEN0Q3O1xcbn1cXG5cXG4uZGVmYXVsdC10YWJzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxdmg7XFxuXFx0bWFyZ2luLXRvcDogdmFyKC0tc2lkZWJhci10b3AtbWFyZ2luKTtcXG59XFxuXFxuLnByb2plY3QtdGFicyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXZoO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuXFx0Z3JpZC1yb3c6IDI7XFxuXFx0Z3JpZC1jb2x1bW46IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJvZHktZ3JheSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXZoO1xcblxcdG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiA0LjV2aDtcXG5cXHR3aWR0aDogMzV2aDtcXG5cXHRnYXA6IDJ2aDtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtbGlnaHQtZ3JheSk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3QtdGFicyB7XFxuXFx0bWFyZ2luLXRvcDogMnZoO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcXG5cXHRoZWlnaHQ6IDV2aDtcXG5cXHR3aWR0aDogMzV2aDs7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcblxcbi5wcm9qZWN0cy1zaWRlYmFyLWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luLXRvcDogNXZoO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcblxcdGdyaWQtcm93OiAyO1xcblxcdGdyaWQtY29sdW1uOiAyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuXFx0b3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0d2lkdGg6IDEyNXZoO1xcblxcdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcXG5cXHRtYXJnaW4tdG9wOiB2YXIoLS1zaWRlYmFyLXRvcC1tYXJnaW4pO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNvbnRlbnQtaHIge1xcblxcdHdpZHRoOiAxMjV2aDtcXG5cXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWRhcmtlc3QpIDtcXG59XFxuXFxuLm5ldy10b2RvLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMzBweDtcXG5cXHR3aWR0aDogMzBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uZXctdG9kby1jb250YWluZXI6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW1vZGFsIHtcXG5cXHRoZWlnaHQ6IDI2dmg7XFxuXFx0d2lkdGg6IDUwdmg7XFxuXFx0ei1pbmRleDogMztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5uZXctdG9kby1tb2RhbCB7XFxuXFx0aGVpZ2h0OiA2MHZoO1xcblxcdHdpZHRoOiA1MHZoO1xcblxcdHotaW5kZXg6IDM7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXZoO1xcblxcdG1hcmdpbi10b3A6IDF2aDtcXG59XFxuXFxuLm1vZGFsOjpiYWNrZHJvcCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5pY29uLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMzBweDtcXG5cXHR3aWR0aDogMzBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4uaWNvbi1kaXY6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OiA1dmg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0taW5wdXQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAwLjd2aDtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcm0tbGFiZWwge1xcblxcdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmZvcm0taW5wdXQge1xcblxcdGhlaWdodDogMy44dmg7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcXG5cXHRvcGFjaXR5OiAwLjk7XFxuXFx0cGFkZGluZy1sZWZ0OiAxdmg7XFxufVxcblxcbi5mb3JtLWlucHV0LWhhbGYge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZG91YmxlLWZvcm0taW5wdXRzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXZoO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnZoO1xcblxcdG1hcmdpbi10b3A6IDN2aDtcXG59XFxuXFxuLmNyZWF0ZS1idXR0b24ge1xcblxcdGhlaWdodDogNnZoO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vZGFsLXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm1vZGFsLWhyIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tY2xyLXRleHQtbGlnaHQtZ3JheSk7XFxufVxcblxcbi5mb3JtLWlucHV0LXRleHRhcmVhIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xcblxcdG9wYWNpdHk6IDAuOTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDF2aDtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90byBGbGV4Jywgc2Fucy1zZXJpZjtcXG5cXHRwYWRkaW5nLXRvcDogMXZoO1xcbn1cXG5cXG4uZm9ybS1pbnB1dC1kdWUtZGF0ZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8gRmxleCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCdcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL3RvZG8nXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb250ZW50VXNpbmdET00ocHJvamVjdHMpIHtcbiAgICBjb25zdCBwcm9qZWN0VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhYnMnKTtcbiAgICBcbiAgICBwcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RUYWIuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGFiJztcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIHByb2plY3RUaXRsZS5jbGFzc05hbWUgPSAncHJvamVjdC1zaWRlYmFyLXRpdGxlJztcbiAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgIFxuICAgICAgICBwcm9qZWN0VGFiLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gICAgICAgIHByb2plY3RUYWJzLmFwcGVuZENoaWxkKHByb2plY3RUYWIpO1xuICAgIH0pO1xufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJ1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGVudFVzaW5nRE9NIH0gZnJvbSAnLi9kb20nO1xuXG5sZXQgcHJvamVjdHMgPSBbbmV3IFByb2plY3QoJ1dlYiBEZXZlbG9wbWVudCcpXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGFsRm9ybXMoKSB7XG4gICAgLy8gTW9kYWwgZm9yIG5ldyBwcm9qZWN0c1xuXG4gICAgY29uc3QgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1idXR0b24nKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtbW9kYWwnKTtcbiAgICBjb25zdCBjbG9zZVByb2plY3RNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1wcm9qZWN0LW1vZGFsJyk7XG4gICAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGUtcHJvamVjdC1idXR0b24nKTtcblxuICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5ld1Byb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcbiAgICB9KVxuXG4gICAgY2xvc2VQcm9qZWN0TW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5ld1Byb2plY3RNb2RhbC5jbG9zZSgpO1xuICAgIH0pXG5cbiAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyBjcmVhdGUgdGhlIHByb2plY3QgYW5kIGFkZCB0byBhcnJheVxuICAgIH0pXG5cbiAgICAvLyBNb2RhbCBmb3IgbmV3IHRvZG9zXG5cbiAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IG5ld1RvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kby1tb2RhbCcpO1xuICAgIGNvbnN0IGNsb3NlVG9kb01vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXRvZG8tbW9kYWwnKTtcbiAgICBjb25zdCBjcmVhdGVUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10b2RvLWJ1dHRvbicpO1xuXG4gICAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmV3VG9kb01vZGFsLnNob3dNb2RhbCgpXG4gICAgfSlcblxuICAgIGNsb3NlVG9kb01vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuZXdUb2RvTW9kYWwuY2xvc2UoKTtcbiAgICB9KVxuXG4gICAgY3JlYXRlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gY3JlYXRlIHRvZG8gYW5kIGFkZCB0byBzcGVjaWZpYyBwcm9qZWN0cyB0b2RvcyBhcnJheS5cbiAgICB9KVxufVxuXG5jcmVhdGVNb2RhbEZvcm1zKClcbmNyZWF0ZUNvbnRlbnRVc2luZ0RPTShwcm9qZWN0cyk7IiwiaW1wb3J0IHsgVG9kbyB9IGZyb20gXCIuL3RvZG9cIjtcblxuZXhwb3J0IGNsYXNzIFByb2plY3R7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxuXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGVcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3RcbiAgICB9XG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmR1ZURhdGU7XG4gICAgfVxuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5O1xuICAgIH1cblxuICAgIGdldFByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3Q7XG4gICAgfVxuXG4gICAgc2V0VGl0bGUodGl0bGUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZVxuICAgIH1cblxuICAgIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgIH1cblxuICAgIHNldFByb2plY3QocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgfVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==