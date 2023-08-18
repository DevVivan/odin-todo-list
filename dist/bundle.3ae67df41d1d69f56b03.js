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
	--clr-text-dark: #2F2F2F;
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

.todo-tabs {
	display: flex;
	flex-direction: column;
	margin-top: 5vh;
	gap: 1.5vh;
}

.todo-tab {
    border-radius: 5px;
    background-color: var(--clr-body-gray);
    height: 7vh;
    width: 125vh;
    margin-left: var(--sidebar-left-margin);
    filter: brightness(97%);
    overflow: hidden; 
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;
}

.todo-content-left {
    display: flex;
    align-items: center; 
    gap: 1vh;
    margin-left: 3vh;
}

.todo-content-right {
    display: flex;
    align-items: center; 
    gap: 1vh;
    margin-right: 3vh;
}

.todo-icon {
    color: var(--clr-text-light-gray);
    font-size: 1.05rem;
}

.todo-icons {
    display: flex;
}

.todo-info {
    color: var(--clr-text-dark);
}

.todo-icon-container {
    height: 3.2vh;
    width: 3.2vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}

.todo-icon-container:hover {
    background-color: rgba(0, 0, 0, 0.1);
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
}`, "",{"version":3,"sources":["webpack://./src/assets/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz@8..144&display=swap');\n\n:root {\n\t--clr-accent: #004B8F;\n\t--clr-text-darkest: #1E1E1E;\n\t--clr-text-dark: #2F2F2F;\n\t--clr-white: #FFFFFF;\n\t--clr-body-gray: #EEEEEE;\n\t--clr-text-light-gray: #949494;\n\t--sidebar-left-margin: 6vh;\n\t--sidebar-top-margin: 7vh;\n}\n\n.container {\n\theight: 100vh;\n\tdisplay: grid;\n\tgrid-template-rows: 8vh 1fr;\n\tgrid-template-columns: 1fr 3fr;\n\tfont-family: 'Roboto Flex', sans-serif;\n}\n\n.header {\n\tgrid-row: span 1;\n\tgrid-column: span 2;\n\tbackground-color: var(--clr-accent);\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.project-tab {\n\tmargin-left: var(--sidebar-left-margin);\n\twidth: 35vh;\n\theight: 4vh;\n\tdisplay: flex;\n\talign-items: center;\n\tborder-radius: 5px;\n}\n\n.project-tab:hover {\n\tbackground-color: rgba(0, 0, 0, 0.03);\n}\n\n.project-sidebar-title {\n\tmargin-left: 1vh;\n\tfont-size: 1.2rem;\n\tcolor: var(--clr-text-darkest);\n}\n\n.projects-sidebar-header {\n\tfont-size: 1.5rem;\n\tmargin-left: var(--sidebar-left-margin);\n}\n\n.sidebar-hr {\n\twidth: 35vh;\n\tmargin-left: var(--sidebar-left-margin);\n\toutline: none;\n\tborder: 0.5px solid var(--clr-text-darkest) ;\n}\n\n.current-project {\n\tbackground-color: #D7D7D7;\n\tfont-weight: 700;\n}\n\n.current-project:hover {\n\tbackground-color: #D7D7D7;\n}\n\n.default-tabs {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1vh;\n\tmargin-top: var(--sidebar-top-margin);\n}\n\n.project-tabs {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1vh;\n}\n\n.header-title {\n\tcolor: white;\n\tfont-size: 1.6rem;\n\tmargin-left: var(--sidebar-left-margin);\n}\n\n.sidebar {\n\tgrid-row: 2;\n\tgrid-column: 1;\n\tbackground-color: var(--clr-body-gray);\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1vh;\n\toverflow: scroll;\n}\n\n.new-project-button {\n\tdisplay: flex;\n\theight: 4.5vh;\n\twidth: 35vh;\n\tgap: 2vh;\n\tcolor: var(--clr-text-light-gray);\n\tjustify-content: flex-start;\n\talign-items: center;\n\tfont-size: 1rem;\n\toutline: none;\n\tborder: none;\n\tborder-radius: 5px;\n}\n\n.project-tabs {\n\tmargin-top: 2vh;\n}\n\n.new-project-container {\n\tdisplay: flex;\n\tmargin-left: var(--sidebar-left-margin);\n\theight: 5vh;\n\twidth: 35vh;;\n}\n\n.new-project-button:hover {\n\tbackground-color: rgba(0, 0, 0, 0.05);\n}\n\n.projects-sidebar-container {\n\tmargin-top: 5vh;\n}\n\n.main-container {\n\tgrid-row: 2;\n\tgrid-column: 2;\n\tbackground-color: var(--clr-white);\n\toverflow: scroll;\n}\n\n.content-header-container {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\twidth: 125vh;\n\tmargin-left: var(--sidebar-left-margin);\n\tmargin-top: var(--sidebar-top-margin);\n\talign-items: center;\n}\n\n.content-title {\n\tfont-size: 2rem;\n\tfont-weight: 600;\n}\n\n.content-hr {\n\twidth: 125vh;\n\tmargin-left: var(--sidebar-left-margin);\n\toutline: none;\n\tborder: 0.5px solid var(--clr-text-darkest) ;\n}\n\n.new-todo-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 30px;\n\twidth: 30px;\n\tborder-radius: 5px;\n}\n\n.new-todo-container:hover {\n\tbackground-color: rgba(0, 0, 0, 0.1);\n}\n\n.new-project-modal {\n\theight: 26vh;\n\twidth: 50vh;\n\tz-index: 3;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tbackground-color: var(--clr-white);\n\tborder: none;\n\tborder-radius: 10px;\n\toutline: none;\n}\n\n.new-todo-modal {\n\theight: 60vh;\n\twidth: 50vh;\n\tz-index: 3;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\tbackground-color: var(--clr-white);\n\tborder: none;\n\tborder-radius: 10px;\n\toutline: none;\n}\n\n.new-todo-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1vh;\n\tmargin-top: 1vh;\n}\n\n.modal::backdrop {\n\tbackground-color: rgb(0, 0, 0, 0.5);\n}\n\n.icon-div {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 30px;\n\twidth: 30px;\n\tborder-radius: 5px;\n\tcolor: var(--clr-text-light-gray);\n}\n\n.icon-div:hover {\n\tbackground-color: rgb(0, 0, 0, 0.1);\n}\n\n.modal-header-container {\n\theight: 5vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n.form-input-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 0.7vh;\n\twidth: 100%;\n}\n\n.form-label {\n\tcolor: var(--clr-text-darkest);\n\tfont-size: 1.1rem;\n}\n\n.form-input {\n\theight: 3.8vh;\n\toutline: none;\n\tborder: 1px solid var(--clr-text-darkest);\n\tborder-radius: 5px;\n\tfont-size: 1rem;\n\tcolor: var(--clr-text-darkest);\n\topacity: 0.9;\n\tpadding-left: 1vh;\n}\n\n.form-input-half {\n\twidth: 100%;\n}\n\n.double-form-inputs {\n\tdisplay: flex;\n\tgap: 1vh;\n}\n\n.modal-form {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 2vh;\n\tmargin-top: 3vh;\n}\n\n.create-button {\n\theight: 6vh;\n\tfont-size: 1.2rem;\n\tcolor: var(--clr-white);\n\tbackground-color: var(--clr-accent);\n\toutline: none;\n\tborder: none;\n\tborder-radius: 5px;\n\twidth: 100%;\n}\n\n.modal-title {\n\tfont-size: 1.5rem;\n}\n\n.modal-hr {\n\toutline: none;\n\tborder: 0.5px solid var(--clr-text-light-gray);\n}\n\n.form-input-textarea {\n\toutline: none;\n\tborder: 1px solid var(--clr-text-darkest);\n\tborder-radius: 5px;\n\tfont-size: 1rem;\n\tcolor: var(--clr-text-darkest);\n\topacity: 0.9;\n\tpadding-left: 1vh;\n\tfont-family: 'Roboto Flex', sans-serif;\n\tpadding-top: 1vh;\n}\n\n.form-input-due-date {\n\tfont-family: 'Roboto Flex', sans-serif;\n}\n\n.todo-tabs {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmargin-top: 5vh;\n\tgap: 1.5vh;\n}\n\n.todo-tab {\n    border-radius: 5px;\n    background-color: var(--clr-body-gray);\n    height: 7vh;\n    width: 125vh;\n    margin-left: var(--sidebar-left-margin);\n    filter: brightness(97%);\n    overflow: hidden; \n    display: flex;\n    flex-direction: row;\n    justify-content: space-between; \n    align-items: center;\n}\n\n.todo-content-left {\n    display: flex;\n    align-items: center; \n    gap: 1vh;\n    margin-left: 3vh;\n}\n\n.todo-content-right {\n    display: flex;\n    align-items: center; \n    gap: 1vh;\n    margin-right: 3vh;\n}\n\n.todo-icon {\n    color: var(--clr-text-light-gray);\n    font-size: 1.05rem;\n}\n\n.todo-icons {\n    display: flex;\n}\n\n.todo-info {\n    color: var(--clr-text-dark);\n}\n\n.todo-icon-container {\n    height: 3.2vh;\n    width: 3.2vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 5px;\n}\n\n.todo-icon-container:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n}\n\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}"],"sourceRoot":""}]);
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

            (function createTodos() {
                project.todos.forEach(todo => {
                    let todoTabs = document.querySelector('.todo-tabs');
                    if (!todoTabs) {
                        todoTabs = document.createElement('div');
                        todoTabs.classList.add('todo-tabs');
                        mainContainer.appendChild(todoTabs);
                    }

                    let todoTab = document.createElement('div');
                    todoTab.classList.add('todo-tab');
                    todoTabs.appendChild(todoTab);

                    let todoContentLeft = document.createElement('div')
                    todoContentLeft.classList.add('todo-content-left')
                    todoTab.appendChild(todoContentLeft);

                    let todoContentRight = document.createElement('div')
                    todoContentRight.classList.add('todo-content-right')
                    todoTab.appendChild(todoContentRight);

                    let todoCompletedCheckbox = document.createElement('input');
                    todoCompletedCheckbox.setAttribute('type', 'checkbox')
                    todoCompletedCheckbox.setAttribute('name', 'todo-completed-checkbox')
                    todoCompletedCheckbox.classList.add('todo-completed-checkbox')
                    todoContentLeft.appendChild(todoCompletedCheckbox)   

                    let todoTitle = document.createElement('p')
                    todoTitle.classList.add('todo-title')
                    todoTitle.classList.add('todo-info')
                    todoTitle.textContent = todo.title;
                    todoContentLeft.appendChild(todoTitle)

                    // <p class="todo-due-date todo-info">29/7/2023</p>
                    // <div class="todo-icons">
                    //     <div class="todo-icon-container"><i class="fa-solid fa-pen-to-square todo-icon"></i></div>
                    //     <div class="todo-icon-container"><i class="fa-solid fa-trash-can todo-icon"></i></div>
                    // </div>
                   
                    let todoDueDate = document.createElement('p')
                    todoDueDate.classList.add('todo-due-date')
                    todoDueDate.classList.add('todo-info')
                    todoDueDate.textContent = todo.dueDate;
                    todoContentRight.appendChild(todoDueDate)

                    let todoIcons = document.createElement('div')
                    todoContentRight.appendChild(todoIcons)

                    let todoIconContainerEdit = document.createElement('div')
                    todoIconContainerEdit.classList.add('todo-icon-container')
                    todoIcons.appendChild(todoIconContainerEdit)

                    let todoIconEdit = document.createElement('i')
                    todoIconEdit.classList.add('fa-solid')
                    todoIconEdit.classList.add('fa-pen-to-square')
                    todoIconEdit.classList.add('todo-icon')
                    todoIconContainerEdit.appendChild(todoIconEdit)

                    let todoIconContainerDelete = document.createElement('div')
                    todoIconContainerDelete.classList.add('todo-icon-container')
                    todoIcons.appendChild(todoIconContainerDelete)

                    let todoIconDelete = document.createElement('i')
                    todoIconDelete.classList.add('fa-solid')
                    todoIconDelete.classList.add('fa-trash-can')
                    todoIconDelete.classList.add('todo-icon')
                    todoIconContainerDelete.appendChild(todoIconDelete)
                })
            })()
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





let projects = [new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Web Development'), new _project__WEBPACK_IMPORTED_MODULE_0__.Project('School')];
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
        
        projectTabs.innerHTML = '';
        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.createContentUsingDOM)(projects)
    })
}

projects[0].todos.push(new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo('hi', 'hihihihihi', '2023/8/5', 1, 'hi'), new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo('byebyebye', 'byebyebyebye', '2023/8/7',  'bye'))
 
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjNhZTY3ZGY0MWQxZDY5ZjU2YjAzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixxSUFBcUk7QUFDckk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhGQUE4RixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFB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TDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFPO0FBQ2pDO0FBQ0EsUUFBUSwyREFBcUI7QUFDN0IsS0FBSztBQUNMOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsdUNBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsUUFBUSwyREFBcUI7QUFDN0IsS0FBSztBQUNMOztBQUVBLDJCQUEyQix1Q0FBSSwrQ0FBK0MsdUNBQUk7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBcUI7Ozs7Ozs7Ozs7Ozs7OztBQ25GUzs7QUFFdkI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0Qix1Q0FBSTtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdEJPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3M/YmM0NiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90b2RvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0ZsZXg6b3BzekA4Li4xNDQmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG5cdC0tY2xyLWFjY2VudDogIzAwNEI4Rjtcblx0LS1jbHItdGV4dC1kYXJrZXN0OiAjMUUxRTFFO1xuXHQtLWNsci10ZXh0LWRhcms6ICMyRjJGMkY7XG5cdC0tY2xyLXdoaXRlOiAjRkZGRkZGO1xuXHQtLWNsci1ib2R5LWdyYXk6ICNFRUVFRUU7XG5cdC0tY2xyLXRleHQtbGlnaHQtZ3JheTogIzk0OTQ5NDtcblx0LS1zaWRlYmFyLWxlZnQtbWFyZ2luOiA2dmg7XG5cdC0tc2lkZWJhci10b3AtbWFyZ2luOiA3dmg7XG59XG5cbi5jb250YWluZXIge1xuXHRoZWlnaHQ6IDEwMHZoO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IDh2aCAxZnI7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8gRmxleCcsIHNhbnMtc2VyaWY7XG59XG5cbi5oZWFkZXIge1xuXHRncmlkLXJvdzogc3BhbiAxO1xuXHRncmlkLWNvbHVtbjogc3BhbiAyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2plY3QtdGFiIHtcblx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xuXHR3aWR0aDogMzV2aDtcblx0aGVpZ2h0OiA0dmg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnByb2plY3QtdGFiOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcbn1cblxuLnByb2plY3Qtc2lkZWJhci10aXRsZSB7XG5cdG1hcmdpbi1sZWZ0OiAxdmg7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XG59XG5cbi5wcm9qZWN0cy1zaWRlYmFyLWhlYWRlciB7XG5cdGZvbnQtc2l6ZTogMS41cmVtO1xuXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XG59XG5cbi5zaWRlYmFyLWhyIHtcblx0d2lkdGg6IDM1dmg7XG5cdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KSA7XG59XG5cbi5jdXJyZW50LXByb2plY3Qge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDdEN0Q3O1xuXHRmb250LXdlaWdodDogNzAwO1xufVxuXG4uY3VycmVudC1wcm9qZWN0OmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI0Q3RDdENztcbn1cblxuLmRlZmF1bHQtdGFicyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMXZoO1xuXHRtYXJnaW4tdG9wOiB2YXIoLS1zaWRlYmFyLXRvcC1tYXJnaW4pO1xufVxuXG4ucHJvamVjdC10YWJzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxdmg7XG59XG5cbi5oZWFkZXItdGl0bGUge1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogMS42cmVtO1xuXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XG59XG5cbi5zaWRlYmFyIHtcblx0Z3JpZC1yb3c6IDI7XG5cdGdyaWQtY29sdW1uOiAxO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYm9keS1ncmF5KTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxdmg7XG5cdG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b24ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRoZWlnaHQ6IDQuNXZoO1xuXHR3aWR0aDogMzV2aDtcblx0Z2FwOiAydmg7XG5cdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1saWdodC1ncmF5KTtcblx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRmb250LXNpemU6IDFyZW07XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvamVjdC10YWJzIHtcblx0bWFyZ2luLXRvcDogMnZoO1xufVxuXG4ubmV3LXByb2plY3QtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xuXHRoZWlnaHQ6IDV2aDtcblx0d2lkdGg6IDM1dmg7O1xufVxuXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnByb2plY3RzLXNpZGViYXItY29udGFpbmVyIHtcblx0bWFyZ2luLXRvcDogNXZoO1xufVxuXG4ubWFpbi1jb250YWluZXIge1xuXHRncmlkLXJvdzogMjtcblx0Z3JpZC1jb2x1bW46IDI7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XG5cdG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbi5jb250ZW50LWhlYWRlci1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdHdpZHRoOiAxMjV2aDtcblx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xuXHRtYXJnaW4tdG9wOiB2YXIoLS1zaWRlYmFyLXRvcC1tYXJnaW4pO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudC10aXRsZSB7XG5cdGZvbnQtc2l6ZTogMnJlbTtcblx0Zm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNvbnRlbnQtaHIge1xuXHR3aWR0aDogMTI1dmg7XG5cdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KSA7XG59XG5cbi5uZXctdG9kby1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0aGVpZ2h0OiAzMHB4O1xuXHR3aWR0aDogMzBweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubmV3LXRvZG8tY29udGFpbmVyOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4ubmV3LXByb2plY3QtbW9kYWwge1xuXHRoZWlnaHQ6IDI2dmg7XG5cdHdpZHRoOiA1MHZoO1xuXHR6LWluZGV4OiAzO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0Ym90dG9tOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xuXHRib3JkZXI6IG5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5uZXctdG9kby1tb2RhbCB7XG5cdGhlaWdodDogNjB2aDtcblx0d2lkdGg6IDUwdmg7XG5cdHotaW5kZXg6IDM7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0b3V0bGluZTogbm9uZTtcbn1cblxuLm5ldy10b2RvLWZvcm0ge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDF2aDtcblx0bWFyZ2luLXRvcDogMXZoO1xufVxuXG4ubW9kYWw6OmJhY2tkcm9wIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5pY29uLWRpdiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IDMwcHg7XG5cdHdpZHRoOiAzMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1saWdodC1ncmF5KTtcbn1cblxuLmljb24tZGl2OmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5tb2RhbC1oZWFkZXItY29udGFpbmVyIHtcblx0aGVpZ2h0OiA1dmg7XG5cdHdpZHRoOiAxMDAlO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mb3JtLWlucHV0LWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMC43dmg7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1sYWJlbCB7XG5cdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcblx0Zm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5mb3JtLWlucHV0IHtcblx0aGVpZ2h0OiAzLjh2aDtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XG5cdG9wYWNpdHk6IDAuOTtcblx0cGFkZGluZy1sZWZ0OiAxdmg7XG59XG5cbi5mb3JtLWlucHV0LWhhbGYge1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLmRvdWJsZS1mb3JtLWlucHV0cyB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGdhcDogMXZoO1xufVxuXG4ubW9kYWwtZm9ybSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMnZoO1xuXHRtYXJnaW4tdG9wOiAzdmg7XG59XG5cbi5jcmVhdGUtYnV0dG9uIHtcblx0aGVpZ2h0OiA2dmg7XG5cdGZvbnQtc2l6ZTogMS4ycmVtO1xuXHRjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLm1vZGFsLXRpdGxlIHtcblx0Zm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5tb2RhbC1ociB7XG5cdG91dGxpbmU6IG5vbmU7XG5cdGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tY2xyLXRleHQtbGlnaHQtZ3JheSk7XG59XG5cbi5mb3JtLWlucHV0LXRleHRhcmVhIHtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Zm9udC1zaXplOiAxcmVtO1xuXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XG5cdG9wYWNpdHk6IDAuOTtcblx0cGFkZGluZy1sZWZ0OiAxdmg7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvIEZsZXgnLCBzYW5zLXNlcmlmO1xuXHRwYWRkaW5nLXRvcDogMXZoO1xufVxuXG4uZm9ybS1pbnB1dC1kdWUtZGF0ZSB7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvIEZsZXgnLCBzYW5zLXNlcmlmO1xufVxuXG4udG9kby10YWJzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0bWFyZ2luLXRvcDogNXZoO1xuXHRnYXA6IDEuNXZoO1xufVxuXG4udG9kby10YWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYm9keS1ncmF5KTtcbiAgICBoZWlnaHQ6IDd2aDtcbiAgICB3aWR0aDogMTI1dmg7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xuICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5NyUpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50b2RvLWNvbnRlbnQtbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgICBnYXA6IDF2aDtcbiAgICBtYXJnaW4tbGVmdDogM3ZoO1xufVxuXG4udG9kby1jb250ZW50LXJpZ2h0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIGdhcDogMXZoO1xuICAgIG1hcmdpbi1yaWdodDogM3ZoO1xufVxuXG4udG9kby1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXRleHQtbGlnaHQtZ3JheSk7XG4gICAgZm9udC1zaXplOiAxLjA1cmVtO1xufVxuXG4udG9kby1pY29ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLnRvZG8taW5mbyB7XG4gICAgY29sb3I6IHZhcigtLWNsci10ZXh0LWRhcmspO1xufVxuXG4udG9kby1pY29uLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAzLjJ2aDtcbiAgICB3aWR0aDogMy4ydmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnRvZG8taWNvbi1jb250YWluZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLDJCQUEyQjtDQUMzQix3QkFBd0I7Q0FDeEIsb0JBQW9CO0NBQ3BCLHdCQUF3QjtDQUN4Qiw4QkFBOEI7Q0FDOUIsMEJBQTBCO0NBQzFCLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IsMkJBQTJCO0NBQzNCLDhCQUE4QjtDQUM5QixzQ0FBc0M7QUFDdkM7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLG1DQUFtQztDQUNuQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsdUNBQXVDO0NBQ3ZDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQix1Q0FBdUM7QUFDeEM7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsdUNBQXVDO0NBQ3ZDLGFBQWE7Q0FDYiw0Q0FBNEM7QUFDN0M7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixRQUFRO0NBQ1IscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0NBQ2pCLHVDQUF1QztBQUN4Qzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2Qsc0NBQXNDO0NBQ3RDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsUUFBUTtDQUNSLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixhQUFhO0NBQ2IsV0FBVztDQUNYLFFBQVE7Q0FDUixpQ0FBaUM7Q0FDakMsMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2YsYUFBYTtDQUNiLFlBQVk7Q0FDWixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVDQUF1QztDQUN2QyxXQUFXO0NBQ1gsV0FBVztBQUNaOztBQUVBO0NBQ0MscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxjQUFjO0NBQ2Qsa0NBQWtDO0NBQ2xDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLHVDQUF1QztDQUN2QyxxQ0FBcUM7Q0FDckMsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWix1Q0FBdUM7Q0FDdkMsYUFBYTtDQUNiLDRDQUE0QztBQUM3Qzs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0Msb0NBQW9DO0FBQ3JDOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixTQUFTO0NBQ1Qsa0NBQWtDO0NBQ2xDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixTQUFTO0NBQ1Qsa0NBQWtDO0NBQ2xDLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsYUFBYTtBQUNkOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixRQUFRO0NBQ1IsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLG1DQUFtQztBQUNwQzs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFVBQVU7Q0FDVixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGFBQWE7Q0FDYix5Q0FBeUM7Q0FDekMsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZiw4QkFBOEI7Q0FDOUIsWUFBWTtDQUNaLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixRQUFRO0FBQ1Q7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLFFBQVE7Q0FDUixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsbUNBQW1DO0NBQ25DLGFBQWE7Q0FDYixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYiw4Q0FBOEM7QUFDL0M7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IseUNBQXlDO0NBQ3pDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsOEJBQThCO0NBQzlCLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsc0NBQXNDO0NBQ3RDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLHNDQUFzQztBQUN2Qzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsZUFBZTtDQUNmLFVBQVU7QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsV0FBVztJQUNYLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOzs7QUFHQTs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK0ZsZXg6b3BzekA4Li4xNDQmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcblxcdC0tY2xyLWFjY2VudDogIzAwNEI4RjtcXG5cXHQtLWNsci10ZXh0LWRhcmtlc3Q6ICMxRTFFMUU7XFxuXFx0LS1jbHItdGV4dC1kYXJrOiAjMkYyRjJGO1xcblxcdC0tY2xyLXdoaXRlOiAjRkZGRkZGO1xcblxcdC0tY2xyLWJvZHktZ3JheTogI0VFRUVFRTtcXG5cXHQtLWNsci10ZXh0LWxpZ2h0LWdyYXk6ICM5NDk0OTQ7XFxuXFx0LS1zaWRlYmFyLWxlZnQtbWFyZ2luOiA2dmg7XFxuXFx0LS1zaWRlYmFyLXRvcC1tYXJnaW46IDd2aDtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OiAxMDB2aDtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtcm93czogOHZoIDFmcjtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8gRmxleCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5oZWFkZXIge1xcblxcdGdyaWQtcm93OiBzcGFuIDE7XFxuXFx0Z3JpZC1jb2x1bW46IHNwYW4gMjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRhYiB7XFxuXFx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xcblxcdHdpZHRoOiAzNXZoO1xcblxcdGhlaWdodDogNHZoO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LXRhYjpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcXG59XFxuXFxuLnByb2plY3Qtc2lkZWJhci10aXRsZSB7XFxuXFx0bWFyZ2luLWxlZnQ6IDF2aDtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XFxufVxcblxcbi5wcm9qZWN0cy1zaWRlYmFyLWhlYWRlciB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xcbn1cXG5cXG4uc2lkZWJhci1ociB7XFxuXFx0d2lkdGg6IDM1dmg7XFxuXFx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KSA7XFxufVxcblxcbi5jdXJyZW50LXByb2plY3Qge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNEN0Q3RDc7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmN1cnJlbnQtcHJvamVjdDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0Q3RDdENztcXG59XFxuXFxuLmRlZmF1bHQtdGFicyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXZoO1xcblxcdG1hcmdpbi10b3A6IHZhcigtLXNpZGViYXItdG9wLW1hcmdpbik7XFxufVxcblxcbi5wcm9qZWN0LXRhYnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDF2aDtcXG59XFxuXFxuLmhlYWRlci10aXRsZSB7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGZvbnQtc2l6ZTogMS42cmVtO1xcblxcdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcXG59XFxuXFxuLnNpZGViYXIge1xcblxcdGdyaWQtcm93OiAyO1xcblxcdGdyaWQtY29sdW1uOiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1ib2R5LWdyYXkpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDF2aDtcXG5cXHRvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGhlaWdodDogNC41dmg7XFxuXFx0d2lkdGg6IDM1dmg7XFxuXFx0Z2FwOiAydmg7XFxuXFx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWxpZ2h0LWdyYXkpO1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0LXRhYnMge1xcblxcdG1hcmdpbi10b3A6IDJ2aDtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XFxuXFx0aGVpZ2h0OiA1dmg7XFxuXFx0d2lkdGg6IDM1dmg7O1xcbn1cXG5cXG4ubmV3LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xcbn1cXG5cXG4ucHJvamVjdHMtc2lkZWJhci1jb250YWluZXIge1xcblxcdG1hcmdpbi10b3A6IDV2aDtcXG59XFxuXFxuLm1haW4tY29udGFpbmVyIHtcXG5cXHRncmlkLXJvdzogMjtcXG5cXHRncmlkLWNvbHVtbjogMjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcblxcdG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5jb250ZW50LWhlYWRlci1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdHdpZHRoOiAxMjV2aDtcXG5cXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XFxuXFx0bWFyZ2luLXRvcDogdmFyKC0tc2lkZWJhci10b3AtbWFyZ2luKTtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAycmVtO1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5jb250ZW50LWhyIHtcXG5cXHR3aWR0aDogMTI1dmg7XFxuXFx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KSA7XFxufVxcblxcbi5uZXctdG9kby1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0d2lkdGg6IDMwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubmV3LXRvZG8tY29udGFpbmVyOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5uZXctcHJvamVjdC1tb2RhbCB7XFxuXFx0aGVpZ2h0OiAyNnZoO1xcblxcdHdpZHRoOiA1MHZoO1xcblxcdHotaW5kZXg6IDM7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubmV3LXRvZG8tbW9kYWwge1xcblxcdGhlaWdodDogNjB2aDtcXG5cXHR3aWR0aDogNTB2aDtcXG5cXHR6LWluZGV4OiAzO1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHR0b3A6IDA7XFxuXFx0Ym90dG9tOiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuXFx0b3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm5ldy10b2RvLWZvcm0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDF2aDtcXG5cXHRtYXJnaW4tdG9wOiAxdmg7XFxufVxcblxcbi5tb2RhbDo6YmFja2Ryb3Age1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uaWNvbi1kaXYge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRoZWlnaHQ6IDMwcHg7XFxuXFx0d2lkdGg6IDMwcHg7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1saWdodC1ncmF5KTtcXG59XFxuXFxuLmljb24tZGl2OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLm1vZGFsLWhlYWRlci1jb250YWluZXIge1xcblxcdGhlaWdodDogNXZoO1xcblxcdHdpZHRoOiAxMDAlO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb3JtLWlucHV0LWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMC43dmg7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5mb3JtLWxhYmVsIHtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XFxuXFx0Zm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbi5mb3JtLWlucHV0IHtcXG5cXHRoZWlnaHQ6IDMuOHZoO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XFxuXFx0Ym9yZGVyLXJhZGl1czogNXB4O1xcblxcdGZvbnQtc2l6ZTogMXJlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtZGFya2VzdCk7XFxuXFx0b3BhY2l0eTogMC45O1xcblxcdHBhZGRpbmctbGVmdDogMXZoO1xcbn1cXG5cXG4uZm9ybS1pbnB1dC1oYWxmIHtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRvdWJsZS1mb3JtLWlucHV0cyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRnYXA6IDF2aDtcXG59XFxuXFxuLm1vZGFsLWZvcm0ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRnYXA6IDJ2aDtcXG5cXHRtYXJnaW4tdG9wOiAzdmg7XFxufVxcblxcbi5jcmVhdGUtYnV0dG9uIHtcXG5cXHRoZWlnaHQ6IDZ2aDtcXG5cXHRmb250LXNpemU6IDEuMnJlbTtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbi5tb2RhbC10aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tb2RhbC1ociB7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4uZm9ybS1pbnB1dC10ZXh0YXJlYSB7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcXG5cXHRvcGFjaXR5OiAwLjk7XFxuXFx0cGFkZGluZy1sZWZ0OiAxdmg7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8gRmxleCcsIHNhbnMtc2VyaWY7XFxuXFx0cGFkZGluZy10b3A6IDF2aDtcXG59XFxuXFxuLmZvcm0taW5wdXQtZHVlLWRhdGUge1xcblxcdGZvbnQtZmFtaWx5OiAnUm9ib3RvIEZsZXgnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4udG9kby10YWJzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0bWFyZ2luLXRvcDogNXZoO1xcblxcdGdhcDogMS41dmg7XFxufVxcblxcbi50b2RvLXRhYiB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJvZHktZ3JheSk7XFxuICAgIGhlaWdodDogN3ZoO1xcbiAgICB3aWR0aDogMTI1dmg7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcXG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDk3JSk7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47IFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1jb250ZW50LWxlZnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gICAgZ2FwOiAxdmg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzdmg7XFxufVxcblxcbi50b2RvLWNvbnRlbnQtcmlnaHQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcXG4gICAgZ2FwOiAxdmg7XFxuICAgIG1hcmdpbi1yaWdodDogM3ZoO1xcbn1cXG5cXG4udG9kby1pY29uIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci10ZXh0LWxpZ2h0LWdyYXkpO1xcbiAgICBmb250LXNpemU6IDEuMDVyZW07XFxufVxcblxcbi50b2RvLWljb25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnRvZG8taW5mbyB7XFxuICAgIGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrKTtcXG59XFxuXFxuLnRvZG8taWNvbi1jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDMuMnZoO1xcbiAgICB3aWR0aDogMy4ydmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi50b2RvLWljb24tY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJ1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzJ1xuaW1wb3J0IHsgY3JlYXRlTW9kYWxGb3JtcyB9IGZyb20gJy4nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ29udGVudFVzaW5nRE9NKHByb2plY3RzKSB7XG4gICAgY29uc3QgcHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWJzJyk7XG4gICAgXG4gICAgcHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0VGFiLmNsYXNzTmFtZSA9ICdwcm9qZWN0LXRhYic7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3Qtc2lkZWJhci10aXRsZSc7XG4gICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICBcbiAgICAgICAgcHJvamVjdFRhYi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBwcm9qZWN0VGFicy5hcHBlbmRDaGlsZChwcm9qZWN0VGFiKTtcblxuICAgICAgICBwcm9qZWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKHAgPT4gcC5nZXROYW1lKCkgPT09IHByb2plY3QuZ2V0TmFtZSgpKTtcbiAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2gob3RoZXJQcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXJQcm9qZWN0LmdldE5hbWUoKSAhPT0gY2xpY2tlZFByb2plY3QuZ2V0TmFtZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIG90aGVyUHJvamVjdC5zZXRBY3RpdmUoZmFsc2UpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjbGlja2VkUHJvamVjdC5zZXRBY3RpdmUodHJ1ZSk7XG5cbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnXG5cbiAgICAgICAgICAgIGxldCBjb250ZW50SGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250ZW50SGVhZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtaGVhZGVyLWNvbnRhaW5lcicpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXJDb250YWluZXIpO1xuXG4gICAgICAgICAgICBsZXQgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXRpdGxlJylcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QuZ2V0TmFtZSgpO1xuICAgICAgICAgICAgY29udGVudEhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuXG4gICAgICAgICAgICBsZXQgbmV3VG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbmV3VG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1jb250YWluZXInKVxuICAgICAgICAgICAgY29udGVudEhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgbGV0IG5ld1RvZG9JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgICAgICAgICBuZXdUb2RvSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpXG4gICAgICAgICAgICBuZXdUb2RvSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1wbHVzJylcbiAgICAgICAgICAgIG5ld1RvZG9JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWxnJylcbiAgICAgICAgICAgIG5ld1RvZG9JY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLTJ4JylcbiAgICAgICAgICAgIG5ld1RvZG9JY29uLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLWJ1dHRvbicpXG4gICAgICAgICAgICBuZXdUb2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9JY29uKTtcblxuICAgICAgICAgICAgbGV0IGNvbnRlbnRIciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XG4gICAgICAgICAgICBjb250ZW50SHIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1ocicpXG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRIcik7XG5cbiAgICAgICAgICAgIGNyZWF0ZU1vZGFsRm9ybXMoKTtcblxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBjdXJyZW50LXByb2plY3QgY2xhc3NsaXN0IGZyb20gYWxsIHByb2plY3RzXG4gICAgICAgICAgICAvLyB3aGljaGV2ZXIgcHJvamVjdCB3YXMgY2xpY2tlZCwgYWRkIHRoZSBjbGFzc2xpc3Qgb2YgY3VycmVudC1wcm9qZWN0IHRvIGl0XG5cbiAgICAgICAgICAgIChmdW5jdGlvbiBjcmVhdGVUb2RvcygpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXRhYnMnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0b2RvVGFicykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb1RhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG9UYWJzLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGFicycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvVGFicyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0b2RvVGFiLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGFiJyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9UYWJzLmFwcGVuZENoaWxkKHRvZG9UYWIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB0b2RvQ29udGVudExlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGVudExlZnQuY2xhc3NMaXN0LmFkZCgndG9kby1jb250ZW50LWxlZnQnKVxuICAgICAgICAgICAgICAgICAgICB0b2RvVGFiLmFwcGVuZENoaWxkKHRvZG9Db250ZW50TGVmdCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9Db250ZW50UmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICAgICAgICAgICAgICB0b2RvQ29udGVudFJpZ2h0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGVudC1yaWdodCcpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9UYWIuYXBwZW5kQ2hpbGQodG9kb0NvbnRlbnRSaWdodCk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9Db21wbGV0ZWRDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Db21wbGV0ZWRDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxuICAgICAgICAgICAgICAgICAgICB0b2RvQ29tcGxldGVkQ2hlY2tib3guc2V0QXR0cmlidXRlKCduYW1lJywgJ3RvZG8tY29tcGxldGVkLWNoZWNrYm94JylcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NvbXBsZXRlZENoZWNrYm94LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29tcGxldGVkLWNoZWNrYm94JylcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRlbnRMZWZ0LmFwcGVuZENoaWxkKHRvZG9Db21wbGV0ZWRDaGVja2JveCkgICBcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKCd0b2RvLXRpdGxlJylcbiAgICAgICAgICAgICAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8taW5mbycpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9Db250ZW50TGVmdC5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gPHAgY2xhc3M9XCJ0b2RvLWR1ZS1kYXRlIHRvZG8taW5mb1wiPjI5LzcvMjAyMzwvcD5cbiAgICAgICAgICAgICAgICAgICAgLy8gPGRpdiBjbGFzcz1cInRvZG8taWNvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWljb24tY29udGFpbmVyXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wZW4tdG8tc3F1YXJlIHRvZG8taWNvblwiPjwvaT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxkaXYgY2xhc3M9XCJ0b2RvLWljb24tY29udGFpbmVyXCI+PGkgY2xhc3M9XCJmYS1zb2xpZCBmYS10cmFzaC1jYW4gdG9kby1pY29uXCI+PC9pPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAvLyA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9EdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tZHVlLWRhdGUnKVxuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWluZm8nKVxuICAgICAgICAgICAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IHRvZG8uZHVlRGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRlbnRSaWdodC5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSlcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0ljb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICAgICAgdG9kb0NvbnRlbnRSaWdodC5hcHBlbmRDaGlsZCh0b2RvSWNvbnMpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9JY29uQ29udGFpbmVyRWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9JY29uQ29udGFpbmVyRWRpdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWljb24tY29udGFpbmVyJylcbiAgICAgICAgICAgICAgICAgICAgdG9kb0ljb25zLmFwcGVuZENoaWxkKHRvZG9JY29uQ29udGFpbmVyRWRpdClcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0ljb25FZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9JY29uRWRpdC5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9JY29uRWRpdC5jbGFzc0xpc3QuYWRkKCdmYS1wZW4tdG8tc3F1YXJlJylcbiAgICAgICAgICAgICAgICAgICAgdG9kb0ljb25FZGl0LmNsYXNzTGlzdC5hZGQoJ3RvZG8taWNvbicpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9JY29uQ29udGFpbmVyRWRpdC5hcHBlbmRDaGlsZCh0b2RvSWNvbkVkaXQpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvZG9JY29uQ29udGFpbmVyRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgICAgICAgICAgICAgdG9kb0ljb25Db250YWluZXJEZWxldGUuY2xhc3NMaXN0LmFkZCgndG9kby1pY29uLWNvbnRhaW5lcicpXG4gICAgICAgICAgICAgICAgICAgIHRvZG9JY29ucy5hcHBlbmRDaGlsZCh0b2RvSWNvbkNvbnRhaW5lckRlbGV0ZSlcblxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9kb0ljb25EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICAgICAgICAgICAgICAgICAgdG9kb0ljb25EZWxldGUuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKVxuICAgICAgICAgICAgICAgICAgICB0b2RvSWNvbkRlbGV0ZS5jbGFzc0xpc3QuYWRkKCdmYS10cmFzaC1jYW4nKVxuICAgICAgICAgICAgICAgICAgICB0b2RvSWNvbkRlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWljb24nKVxuICAgICAgICAgICAgICAgICAgICB0b2RvSWNvbkNvbnRhaW5lckRlbGV0ZS5hcHBlbmRDaGlsZCh0b2RvSWNvbkRlbGV0ZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkoKVxuICAgICAgICB9KVxuICAgIH0pO1xufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL3Byb2plY3QnXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJ1xuaW1wb3J0ICcuL2Fzc2V0cy9zdHlsZXMvc3R5bGUuY3NzJ1xuaW1wb3J0IHsgY3JlYXRlQ29udGVudFVzaW5nRE9NIH0gZnJvbSAnLi9kb20nO1xuXG5sZXQgcHJvamVjdHMgPSBbbmV3IFByb2plY3QoJ1dlYiBEZXZlbG9wbWVudCcpLCBuZXcgUHJvamVjdCgnU2Nob29sJyldO1xuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybScpO1xuY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tZm9ybScpO1xuY29uc3QgcHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWJzJyk7XG5jb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtbW9kYWwnKTtcbmNvbnN0IG5ld1RvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdG9kby1tb2RhbCcpO1xuY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhYicpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWxGb3JtcygpIHtcbiAgICAvLyBNb2RhbCBmb3IgbmV3IHByb2plY3RzXG5cbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXByb2plY3QtbW9kYWwnKTtcblxuICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5ld1Byb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcbiAgICB9KVxuXG4gICAgY2xvc2VQcm9qZWN0TW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5ld1Byb2plY3RNb2RhbC5jbG9zZSgpO1xuICAgIH0pXG5cbiAgICAvLyBNb2RhbCBmb3IgbmV3IHRvZG9zXG5cbiAgICBjb25zdCBuZXdUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGNsb3NlVG9kb01vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXRvZG8tbW9kYWwnKTtcbiAgICBjb25zdCBjcmVhdGVUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10b2RvLWJ1dHRvbicpO1xuXG4gICAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmV3VG9kb01vZGFsLnNob3dNb2RhbCgpXG4gICAgfSlcblxuICAgIGNsb3NlVG9kb01vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuZXdUb2RvTW9kYWwuY2xvc2UoKTtcbiAgICB9KVxuXG4gICAgY3JlYXRlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gY3JlYXRlIHRvZG8gYW5kIGFkZCB0byBzcGVjaWZpYyBwcm9qZWN0cyB0b2RvcyBhcnJheS5cbiAgICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMoKSB7XG4gICAgbmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIG5ld1Byb2plY3RNb2RhbC5jbG9zZSgpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtbmFtZVwiKS52YWx1ZTtcbiAgICAgICAgcHJvamVjdHMucHVzaChuZXcgUHJvamVjdChwcm9qZWN0TmFtZSkpXG4gICAgICAgIHByb2plY3RUYWJzLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjcmVhdGVDb250ZW50VXNpbmdET00ocHJvamVjdHMpO1xuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb2RvcygpIHtcbiAgICBuZXdUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbmV3VG9kb01vZGFsLmNsb3NlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGxldCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kdWUtZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1wcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXByb2plY3RcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5hY3RpdmUpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QpIHtcbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3QuYWRkVG9kbyhuZXcgVG9kbyh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgdG9kb1Byb2plY3QpKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcHJvamVjdFRhYnMuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNyZWF0ZUNvbnRlbnRVc2luZ0RPTShwcm9qZWN0cylcbiAgICB9KVxufVxuXG5wcm9qZWN0c1swXS50b2Rvcy5wdXNoKG5ldyBUb2RvKCdoaScsICdoaWhpaGloaWhpJywgJzIwMjMvOC81JywgMSwgJ2hpJyksIG5ldyBUb2RvKCdieWVieWVieWUnLCAnYnllYnllYnllYnllJywgJzIwMjMvOC83JywgICdieWUnKSlcbiBcbmNyZWF0ZU1vZGFsRm9ybXMoKVxuY3JlYXRlUHJvamVjdHMoKVxuY3JlYXRlVG9kb3MoKVxuY3JlYXRlQ29udGVudFVzaW5nRE9NKHByb2plY3RzKTsiLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICBpZiAodG9kbyBpbnN0YW5jZW9mIFRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEFjdGl2ZShhY3RpdmUpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBhY3RpdmU7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBUb2Rve1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB9XG5cbiAgICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB9XG5cbiAgICBzZXRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=