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
/* harmony export */   createEditTodoModal: () => (/* binding */ createEditTodoModal),
/* harmony export */   createProjectOptionsInModal: () => (/* binding */ createProjectOptionsInModal),
/* harmony export */   createProjectsWithDOM: () => (/* binding */ createProjectsWithDOM),
/* harmony export */   createTodosWithDOM: () => (/* binding */ createTodosWithDOM)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/style.css */ "./src/assets/styles/style.css");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! . */ "./src/index.js");






function createProjectsWithDOM(projects) {
    const projectTabs = document.querySelector('.project-tabs');
    const defaultTabs = document.querySelector('.default-tabs');
    const mainContainer = document.querySelector('.main-container');

    defaultTabs.innerHTML = '';

    for (let i = 0; i < 2; i++) {
        const projectTab = document.createElement('div');
        projectTab.className = 'project-tab';
        projectTab.setAttribute('data-project', projects[i].getName());

        const projectTitle = document.createElement('h3');
        projectTitle.className = 'project-sidebar-title';
        projectTitle.textContent = projects[i].getName();

        projectTab.appendChild(projectTitle);
        defaultTabs.appendChild(projectTab);

        projectTab.addEventListener('click', () => {
            projectTabs.querySelectorAll('.project-tab').forEach(tab => {
                tab.classList.remove('current-project', 'active');
            });

            defaultTabs.querySelectorAll('.project-tab').forEach(tab => {
                tab.classList.remove('current-project', 'active');
            });

            projectTab.classList.add('current-project', 'active');

            projects.forEach(otherProject => {
                if (otherProject !== projects[i]) {
                    otherProject.setActive(false);
                }
            });
            projects[i].setActive(true);

            mainContainer.innerHTML = '';

            let contentHeaderContainer = document.createElement('div');
            contentHeaderContainer.classList.add('content-header-container');
            mainContainer.appendChild(contentHeaderContainer);

            let contentTitle = document.createElement('h1');
            contentTitle.classList.add('content-title');
            contentTitle.textContent = projects[i].getName();
            contentHeaderContainer.appendChild(contentTitle);

            let newTodoContainer = document.createElement('div');
            newTodoContainer.classList.add('new-todo-container');
            contentHeaderContainer.appendChild(newTodoContainer);

            let newTodoIcon = document.createElement('i');
            newTodoIcon.classList.add('fa-solid', 'fa-plus', 'fa-lg', 'fa-2x', 'new-todo-button');
            newTodoContainer.appendChild(newTodoIcon);

            let contentHr = document.createElement('hr');
            contentHr.classList.add('content-hr');
            mainContainer.appendChild(contentHr);

            (0,___WEBPACK_IMPORTED_MODULE_3__.createModalForms)();
            createTodosWithDOM(projects[i], mainContainer);
        });
    }

    projects.forEach(project => {
        if (project.getName() !== 'Inbox' && project.getName() !== 'Completed') {
            const projectTab = document.createElement('div');
            projectTab.className = 'project-tab';
            projectTab.setAttribute('data-project', project.getName());
            
            const projectTitle = document.createElement('h3');
            projectTitle.className = 'project-sidebar-title';
            projectTitle.textContent = project.getName();
            
            projectTab.appendChild(projectTitle);
            projectTabs.appendChild(projectTab);
    
            projectTab.addEventListener('click', () => {
                projectTabs.querySelectorAll('.project-tab').forEach(tab => {
                    tab.classList.remove('current-project', 'active');
                });

                defaultTabs.querySelectorAll('.project-tab').forEach(tab => {
                    tab.classList.remove('current-project', 'active');
                });
            
                projectTab.classList.add('current-project', 'active');
    
                projects.forEach(otherProject => {
                    if (otherProject !== project) {
                        otherProject.setActive(false);
                    }
                });
                project.setActive(true);
    
                mainContainer.innerHTML = '';
    
                let contentHeaderContainer = document.createElement('div');
                contentHeaderContainer.classList.add('content-header-container');
                mainContainer.appendChild(contentHeaderContainer);
    
                let contentTitle = document.createElement('h1');
                contentTitle.classList.add('content-title');
                contentTitle.textContent = project.getName();
                contentHeaderContainer.appendChild(contentTitle);
    
                let newTodoContainer = document.createElement('div');
                newTodoContainer.classList.add('new-todo-container');
                contentHeaderContainer.appendChild(newTodoContainer);
    
                let newTodoIcon = document.createElement('i');
                newTodoIcon.classList.add('fa-solid', 'fa-plus', 'fa-lg', 'fa-2x', 'new-todo-button');
                newTodoContainer.appendChild(newTodoIcon);
    
                let contentHr = document.createElement('hr');
                contentHr.classList.add('content-hr');
                mainContainer.appendChild(contentHr);

                (0,___WEBPACK_IMPORTED_MODULE_3__.createModalForms)();
                createTodosWithDOM(project, mainContainer);
            });
        }

        window.onload = function makeInboxProjectActive() {
            const projectTabs = document.querySelectorAll('.project-tab');
            for (const projectTab of projectTabs) {
                const projectName = projectTab.querySelector('.project-sidebar-title').textContent;        
                if (projectName === 'Inbox') {
                    projectTab.classList.add('current-project', 'active');
                    projectTab.click();
                    break;
                }
            }
        }
    });
}

function createTodosWithDOM(project, mainContainer) {
    const todoTabs = document.createElement('div');
    todoTabs.classList.add('todo-tabs');
    mainContainer.appendChild(todoTabs);

    project.todos.forEach((todo, index) => {
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
        todoCompletedCheckbox.dataset.todoId = index;
        todoContentLeft.appendChild(todoCompletedCheckbox)   

        let todoTitle = document.createElement('p')
        todoTitle.classList.add('todo-title')
        todoTitle.classList.add('todo-info')
        todoTitle.textContent = todo.title;
        todoContentLeft.appendChild(todoTitle)

        let todoDueDate = document.createElement('p')
        todoDueDate.classList.add('todo-due-date')
        todoDueDate.classList.add('todo-info')
        todoDueDate.textContent = todo.dueDate;
        todoContentRight.appendChild(todoDueDate)

        let todoIcons = document.createElement('div')
        todoIcons.classList.add('todo-icons');
        todoContentRight.appendChild(todoIcons)

        let todoIconContainerEdit = document.createElement('div')
        todoIconContainerEdit.classList.add('todo-icon-container')
        todoIcons.appendChild(todoIconContainerEdit)

        let todoIconEdit = document.createElement('i')
        todoIconEdit.classList.add('fa-solid', 'fa-pen-to-square', 'todo-icon');
        todoIconContainerEdit.appendChild(todoIconEdit)

        todoIconEdit.addEventListener('click', () => {
            ;(0,___WEBPACK_IMPORTED_MODULE_3__.openEditTodoModal)(project.todos[index], index);
        });

        let todoIconContainerDelete = document.createElement('div')
        todoIconContainerDelete.classList.add('todo-icon-container')
        todoIcons.appendChild(todoIconContainerDelete)

        let todoIconDelete = document.createElement('i')
        todoIconDelete.classList.add('fa-solid', 'fa-trash-can', 'todo-icon');
        todoIconContainerDelete.appendChild(todoIconDelete)
    });
}

function createProjectOptionsInModal(projects) {
    let todoProjectOptions = document.querySelector('.todo-project-options');
    
    const filteredProjects = projects.filter(project => project.getName() !== 'Inbox' && project.getName() !== 'Completed');

    filteredProjects.forEach(project => {
        let projectOption = document.createElement('option');
        projectOption.setAttribute('value', project.getName())
        projectOption.textContent = project.getName()
        todoProjectOptions.appendChild(projectOption)
    })
}

// Add this function to create the edit todo modal
function createEditTodoModal() {
    const editTodoModal = document.createElement('dialog');
    editTodoModal.className = 'edit-todo-modal modal';
    editTodoModal.innerHTML = `
        <div class="modal-content edit-todo-modal-content">
            <span class="close-edit-todo-modal close-modal">&times;</span>
            <h2>Edit Todo</h2>
            <form class="edit-todo-form">
                <label for="edit-todo-title">Title:</label>
                <input type="text" id="edit-todo-title" required>

                <label for="edit-todo-description">Description:</label>
                <textarea id="edit-todo-description" rows="3"></textarea>

                <label for="edit-todo-due-date">Due Date:</label>
                <input type="date" id="edit-todo-due-date">

                <label for="edit-todo-priority">Priority:</label>
                <select id="edit-todo-priority">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <button type="submit" class="edit-todo-button">Save Changes</button>
            </form>
        </div>
    `;

    document.body.appendChild(editTodoModal);

    // Close the modal when the close button is clicked
    editTodoModal.querySelector('.close-edit-todo-modal').addEventListener('click', () => {
        editTodoModal.close();
    });
}

// Call the function to create the edit todo modal
createEditTodoModal()


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
/* harmony export */   createTodos: () => (/* binding */ createTodos),
/* harmony export */   openEditTodoModal: () => (/* binding */ openEditTodoModal)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/project.js");
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/style.css */ "./src/assets/styles/style.css");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ "./src/dom.js");







let projects = [new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Inbox'), new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Completed'), new _project__WEBPACK_IMPORTED_MODULE_0__.Project('Web Development')];
const newProjectForm = document.querySelector('.new-project-form');
const newTodoForm = document.querySelector('.new-todo-form');
const projectTabs = document.querySelector('.project-tabs');
const todoTabs = document.querySelector('.todo-tabs');
const newProjectModal = document.querySelector('.new-project-modal');
const newTodoModal = document.querySelector('.new-todo-modal');
const createTodoButton = document.querySelector('.create-todo-button');
const projectTab = document.querySelector('.project-tab');
const mainContainer = document.querySelector('.main-container');
let todoProjectOptions = document.querySelector('.todo-project-options');

function createModalForms() {
    const newProjectButton = document.querySelector('.new-project-button');
    const closeProjectModalButton = document.querySelector('.close-project-modal');

    newProjectButton.addEventListener('click', () => {
        newProjectModal.showModal();
    });

    closeProjectModalButton.addEventListener('click', () => {
        newProjectModal.close();
    });

    const newTodoButton = document.querySelector('.new-todo-container');
    const closeTodoModalButton = document.querySelector('.close-todo-modal');

    newTodoButton.addEventListener('click', () => {
        newTodoModal.showModal();
    });

    closeTodoModalButton.addEventListener('click', () => {
        newTodoModal.close();
    });

    createTodoButton.addEventListener('click', () => {
        // Create todo and add to specific project's todos array.
    });
}

function createProjects() {
    newProjectForm.addEventListener('submit', (event) => {
        newProjectModal.close();
        event.preventDefault();

        let projectName = document.getElementById("project-name").value;
        projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.Project(projectName));

        projectTabs.innerHTML = '';
        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.createProjectsWithDOM)(projects);
        todoProjectOptions.innerHTML = '';
        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.createProjectOptionsInModal)(projects)

        let newProjectTab = document.querySelector(`[data-project="${projectName}"]`);
        if (newProjectTab) {
            newProjectTab.click();
        }
    });
}

function createTodos() {
    newTodoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let todoTitle = document.getElementById("todo-title").value;
        let todoDescription = document.getElementById("todo-description").value;
        let todoDueDate = document.getElementById("todo-due-date").value;
        let todoPriority = document.getElementById("todo-priority").value;
        let todoProject = document.getElementById("todo-project").value;

        let activeProject = projects.find(project => project.isActive());
        let namedProject = projects.find(project => project.getName() === todoProject);
        namedProject.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(todoTitle, todoDescription, todoDueDate, todoPriority, todoProject));

        let projectTabToClick = document.querySelector(`.project-tab[data-project="${todoProject}"]`);
        if (projectTabToClick) {
            projectTabToClick.click();
        }

        projects[0].addTodo(new _todo__WEBPACK_IMPORTED_MODULE_1__.Todo(todoTitle, todoDescription, todoDueDate, todoPriority, todoProject));

        let activeProjectTodoTabs = mainContainer.querySelector('.todo-tabs');
        activeProjectTodoTabs.remove();
        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.createTodosWithDOM)(activeProject, mainContainer);
        newTodoModal.close();   
    });
}

function openEditTodoModal(todo, index) {
    const editTodoModal = document.querySelector('.edit-todo-modal');
    document.getElementById('edit-todo-title').value = todo.title;
    document.getElementById('edit-todo-description').value = todo.description;
    document.getElementById('edit-todo-due-date').value = todo.dueDate;
    document.getElementById('edit-todo-priority').value = todo.priority;
    editTodoModal.querySelector('.edit-todo-form').addEventListener('submit', (event) => {
        event.preventDefault();
        todo.title = document.getElementById('edit-todo-title').value;
        todo.description = document.getElementById('edit-todo-description').value;
        todo.dueDate = document.getElementById('edit-todo-due-date').value;
        todo.priority = document.getElementById('edit-todo-priority').value;
        editTodoModal.close();
        (0,_dom__WEBPACK_IMPORTED_MODULE_3__.createTodosWithDOM)(project, mainContainer);
    });
    editTodoModal.showModal();
}

(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createProjectOptionsInModal)(projects)
;(0,_dom__WEBPACK_IMPORTED_MODULE_3__.createProjectsWithDOM)(projects);
createModalForms();
createProjects();
createTodos();


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

    setActive(isActive) {
        this.active = isActive;
    }

    isActive() {
        return this.active;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLjZiNjU5NzgwODFkYmQzZTYzNTc1LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDakI7QUFDL0YsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixxSUFBcUk7QUFDckk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDhGQUE4RixZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxpQkFBaUIsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFB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QUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLHVDQUFJOztBQUVyQyxxRkFBcUYsWUFBWTtBQUNqRztBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLHVDQUFJOztBQUVwQztBQUNBO0FBQ0EsUUFBUSx3REFBa0I7QUFDMUI7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdEQUFrQjtBQUMxQixLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBMkI7QUFDM0IsNERBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIOEI7O0FBRXZCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsdUNBQUk7QUFDaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQk87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcz9iYzQ2Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rRmxleDpvcHN6QDguLjE0NCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcblx0LS1jbHItYWNjZW50OiAjMDA0QjhGO1xuXHQtLWNsci10ZXh0LWRhcmtlc3Q6ICMxRTFFMUU7XG5cdC0tY2xyLXRleHQtZGFyazogIzJGMkYyRjtcblx0LS1jbHItd2hpdGU6ICNGRkZGRkY7XG5cdC0tY2xyLWJvZHktZ3JheTogI0VFRUVFRTtcblx0LS1jbHItdGV4dC1saWdodC1ncmF5OiAjOTQ5NDk0O1xuXHQtLXNpZGViYXItbGVmdC1tYXJnaW46IDZ2aDtcblx0LS1zaWRlYmFyLXRvcC1tYXJnaW46IDd2aDtcbn1cblxuLmNvbnRhaW5lciB7XG5cdGhlaWdodDogMTAwdmg7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogOHZoIDFmcjtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuXHRmb250LWZhbWlseTogJ1JvYm90byBGbGV4Jywgc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRlciB7XG5cdGdyaWQtcm93OiBzcGFuIDE7XG5cdGdyaWQtY29sdW1uOiBzcGFuIDI7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvamVjdC10YWIge1xuXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XG5cdHdpZHRoOiAzNXZoO1xuXHRoZWlnaHQ6IDR2aDtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucHJvamVjdC10YWI6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xufVxuXG4ucHJvamVjdC1zaWRlYmFyLXRpdGxlIHtcblx0bWFyZ2luLWxlZnQ6IDF2aDtcblx0Zm9udC1zaXplOiAxLjJyZW07XG5cdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcbn1cblxuLnByb2plY3RzLXNpZGViYXItaGVhZGVyIHtcblx0Zm9udC1zaXplOiAxLjVyZW07XG5cdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcbn1cblxuLnNpZGViYXItaHIge1xuXHR3aWR0aDogMzV2aDtcblx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWRhcmtlc3QpIDtcbn1cblxuLmN1cnJlbnQtcHJvamVjdCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNEN0Q3RDc7XG5cdGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5jdXJyZW50LXByb2plY3Q6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDdEN0Q3O1xufVxuXG4uZGVmYXVsdC10YWJzIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAxdmg7XG5cdG1hcmdpbi10b3A6IHZhcigtLXNpZGViYXItdG9wLW1hcmdpbik7XG59XG5cbi5wcm9qZWN0LXRhYnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDF2aDtcbn1cblxuLmhlYWRlci10aXRsZSB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxLjZyZW07XG5cdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcbn1cblxuLnNpZGViYXIge1xuXHRncmlkLXJvdzogMjtcblx0Z3JpZC1jb2x1bW46IDE7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1ib2R5LWdyYXkpO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRnYXA6IDF2aDtcblx0b3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLm5ldy1wcm9qZWN0LWJ1dHRvbiB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGhlaWdodDogNC41dmg7XG5cdHdpZHRoOiAzNXZoO1xuXHRnYXA6IDJ2aDtcblx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWxpZ2h0LWdyYXkpO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMXJlbTtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wcm9qZWN0LXRhYnMge1xuXHRtYXJnaW4tdG9wOiAydmg7XG59XG5cbi5uZXctcHJvamVjdC1jb250YWluZXIge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XG5cdGhlaWdodDogNXZoO1xuXHR3aWR0aDogMzV2aDs7XG59XG5cbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4ucHJvamVjdHMtc2lkZWJhci1jb250YWluZXIge1xuXHRtYXJnaW4tdG9wOiA1dmg7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG5cdGdyaWQtcm93OiAyO1xuXHRncmlkLWNvbHVtbjogMjtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcblx0b3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmNvbnRlbnQtaGVhZGVyLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0d2lkdGg6IDEyNXZoO1xuXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XG5cdG1hcmdpbi10b3A6IHZhcigtLXNpZGViYXItdG9wLW1hcmdpbik7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LXRpdGxlIHtcblx0Zm9udC1zaXplOiAycmVtO1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4uY29udGVudC1ociB7XG5cdHdpZHRoOiAxMjV2aDtcblx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWRhcmtlc3QpIDtcbn1cblxuLm5ldy10b2RvLWNvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRoZWlnaHQ6IDMwcHg7XG5cdHdpZHRoOiAzMHB4O1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uZXctdG9kby1jb250YWluZXI6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5uZXctcHJvamVjdC1tb2RhbCB7XG5cdGhlaWdodDogMjZ2aDtcblx0d2lkdGg6IDUwdmg7XG5cdHotaW5kZXg6IDM7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0b3V0bGluZTogbm9uZTtcbn1cblxuLm5ldy10b2RvLW1vZGFsIHtcblx0aGVpZ2h0OiA2MHZoO1xuXHR3aWR0aDogNTB2aDtcblx0ei1pbmRleDogMztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRvdXRsaW5lOiBub25lO1xufVxuXG4ubmV3LXRvZG8tZm9ybSB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGdhcDogMXZoO1xuXHRtYXJnaW4tdG9wOiAxdmg7XG59XG5cbi5tb2RhbDo6YmFja2Ryb3Age1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC41KTtcbn1cblxuLmljb24tZGl2IHtcblx0ZGlzcGxheTogZmxleDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGhlaWdodDogMzBweDtcblx0d2lkdGg6IDMwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWxpZ2h0LWdyYXkpO1xufVxuXG4uaWNvbi1kaXY6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm1vZGFsLWhlYWRlci1jb250YWluZXIge1xuXHRoZWlnaHQ6IDV2aDtcblx0d2lkdGg6IDEwMCU7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZvcm0taW5wdXQtY29udGFpbmVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAwLjd2aDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWxhYmVsIHtcblx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xuXHRmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLmZvcm0taW5wdXQge1xuXHRoZWlnaHQ6IDMuOHZoO1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRmb250LXNpemU6IDFyZW07XG5cdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcblx0b3BhY2l0eTogMC45O1xuXHRwYWRkaW5nLWxlZnQ6IDF2aDtcbn1cblxuLmZvcm0taW5wdXQtaGFsZiB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uZG91YmxlLWZvcm0taW5wdXRzIHtcblx0ZGlzcGxheTogZmxleDtcblx0Z2FwOiAxdmg7XG59XG5cbi5tb2RhbC1mb3JtIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0Z2FwOiAydmg7XG5cdG1hcmdpbi10b3A6IDN2aDtcbn1cblxuLmNyZWF0ZS1idXR0b24ge1xuXHRoZWlnaHQ6IDZ2aDtcblx0Zm9udC1zaXplOiAxLjJyZW07XG5cdGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiBub25lO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4ubW9kYWwtdGl0bGUge1xuXHRmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLm1vZGFsLWhyIHtcblx0b3V0bGluZTogbm9uZTtcblx0Ym9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1saWdodC1ncmF5KTtcbn1cblxuLmZvcm0taW5wdXQtdGV4dGFyZWEge1xuXHRvdXRsaW5lOiBub25lO1xuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRmb250LXNpemU6IDFyZW07XG5cdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcblx0b3BhY2l0eTogMC45O1xuXHRwYWRkaW5nLWxlZnQ6IDF2aDtcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8gRmxleCcsIHNhbnMtc2VyaWY7XG5cdHBhZGRpbmctdG9wOiAxdmg7XG59XG5cbi5mb3JtLWlucHV0LWR1ZS1kYXRlIHtcblx0Zm9udC1mYW1pbHk6ICdSb2JvdG8gRmxleCcsIHNhbnMtc2VyaWY7XG59XG5cbi50b2RvLXRhYnMge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRtYXJnaW4tdG9wOiA1dmg7XG5cdGdhcDogMS41dmg7XG59XG5cbi50b2RvLXRhYiB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1ib2R5LWdyYXkpO1xuICAgIGhlaWdodDogN3ZoO1xuICAgIHdpZHRoOiAxMjV2aDtcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XG4gICAgZmlsdGVyOiBicmlnaHRuZXNzKDk3JSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRvZG8tY29udGVudC1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxuICAgIGdhcDogMXZoO1xuICAgIG1hcmdpbi1sZWZ0OiAzdmg7XG59XG5cbi50b2RvLWNvbnRlbnQtcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgZ2FwOiAxdmg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzdmg7XG59XG5cbi50b2RvLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1jbHItdGV4dC1saWdodC1ncmF5KTtcbiAgICBmb250LXNpemU6IDEuMDVyZW07XG59XG5cbi50b2RvLWljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udG9kby1pbmZvIHtcbiAgICBjb2xvcjogdmFyKC0tY2xyLXRleHQtZGFyayk7XG59XG5cbi50b2RvLWljb24tY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDMuMnZoO1xuICAgIHdpZHRoOiAzLjJ2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4udG9kby1pY29uLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvYXNzZXRzL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsMkJBQTJCO0NBQzNCLHdCQUF3QjtDQUN4QixvQkFBb0I7Q0FDcEIsd0JBQXdCO0NBQ3hCLDhCQUE4QjtDQUM5QiwwQkFBMEI7Q0FDMUIseUJBQXlC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QjtBQUNyQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7OztBQUdBOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rRmxleDpvcHN6QDguLjE0NCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuXFx0LS1jbHItYWNjZW50OiAjMDA0QjhGO1xcblxcdC0tY2xyLXRleHQtZGFya2VzdDogIzFFMUUxRTtcXG5cXHQtLWNsci10ZXh0LWRhcms6ICMyRjJGMkY7XFxuXFx0LS1jbHItd2hpdGU6ICNGRkZGRkY7XFxuXFx0LS1jbHItYm9keS1ncmF5OiAjRUVFRUVFO1xcblxcdC0tY2xyLXRleHQtbGlnaHQtZ3JheTogIzk0OTQ5NDtcXG5cXHQtLXNpZGViYXItbGVmdC1tYXJnaW46IDZ2aDtcXG5cXHQtLXNpZGViYXItdG9wLW1hcmdpbjogN3ZoO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiA4dmggMWZyO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDNmcjtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90byBGbGV4Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmhlYWRlciB7XFxuXFx0Z3JpZC1yb3c6IHNwYW4gMTtcXG5cXHRncmlkLWNvbHVtbjogc3BhbiAyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdGFiIHtcXG5cXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XFxuXFx0d2lkdGg6IDM1dmg7XFxuXFx0aGVpZ2h0OiA0dmg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3QtdGFiOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xcbn1cXG5cXG4ucHJvamVjdC1zaWRlYmFyLXRpdGxlIHtcXG5cXHRtYXJnaW4tbGVmdDogMXZoO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcXG59XFxuXFxuLnByb2plY3RzLXNpZGViYXItaGVhZGVyIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG5cXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XFxufVxcblxcbi5zaWRlYmFyLWhyIHtcXG5cXHR3aWR0aDogMzV2aDtcXG5cXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWRhcmtlc3QpIDtcXG59XFxuXFxuLmN1cnJlbnQtcHJvamVjdCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI0Q3RDdENztcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uY3VycmVudC1wcm9qZWN0OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRDdEN0Q3O1xcbn1cXG5cXG4uZGVmYXVsdC10YWJzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAxdmg7XFxuXFx0bWFyZ2luLXRvcDogdmFyKC0tc2lkZWJhci10b3AtbWFyZ2luKTtcXG59XFxuXFxuLnByb2plY3QtdGFicyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXZoO1xcbn1cXG5cXG4uaGVhZGVyLXRpdGxlIHtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0Zm9udC1zaXplOiAxLjZyZW07XFxuXFx0bWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuXFx0Z3JpZC1yb3c6IDI7XFxuXFx0Z3JpZC1jb2x1bW46IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWJvZHktZ3JheSk7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXZoO1xcblxcdG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b24ge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0aGVpZ2h0OiA0LjV2aDtcXG5cXHR3aWR0aDogMzV2aDtcXG5cXHRnYXA6IDJ2aDtcXG5cXHRjb2xvcjogdmFyKC0tY2xyLXRleHQtbGlnaHQtZ3JheSk7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnByb2plY3QtdGFicyB7XFxuXFx0bWFyZ2luLXRvcDogMnZoO1xcbn1cXG5cXG4ubmV3LXByb2plY3QtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcXG5cXHRoZWlnaHQ6IDV2aDtcXG5cXHR3aWR0aDogMzV2aDs7XFxufVxcblxcbi5uZXctcHJvamVjdC1idXR0b246aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcblxcbi5wcm9qZWN0cy1zaWRlYmFyLWNvbnRhaW5lciB7XFxuXFx0bWFyZ2luLXRvcDogNXZoO1xcbn1cXG5cXG4ubWFpbi1jb250YWluZXIge1xcblxcdGdyaWQtcm93OiAyO1xcblxcdGdyaWQtY29sdW1uOiAyO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci13aGl0ZSk7XFxuXFx0b3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmNvbnRlbnQtaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0d2lkdGg6IDEyNXZoO1xcblxcdG1hcmdpbi1sZWZ0OiB2YXIoLS1zaWRlYmFyLWxlZnQtbWFyZ2luKTtcXG5cXHRtYXJnaW4tdG9wOiB2YXIoLS1zaWRlYmFyLXRvcC1tYXJnaW4pO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDJyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmNvbnRlbnQtaHIge1xcblxcdHdpZHRoOiAxMjV2aDtcXG5cXHRtYXJnaW4tbGVmdDogdmFyKC0tc2lkZWJhci1sZWZ0LW1hcmdpbik7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWRhcmtlc3QpIDtcXG59XFxuXFxuLm5ldy10b2RvLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMzBweDtcXG5cXHR3aWR0aDogMzBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uZXctdG9kby1jb250YWluZXI6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LW1vZGFsIHtcXG5cXHRoZWlnaHQ6IDI2dmg7XFxuXFx0d2lkdGg6IDUwdmg7XFxuXFx0ei1pbmRleDogMztcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0dG9wOiAwO1xcblxcdGJvdHRvbTogMDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRib3JkZXItcmFkaXVzOiAxMHB4O1xcblxcdG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5uZXctdG9kby1tb2RhbCB7XFxuXFx0aGVpZ2h0OiA2MHZoO1xcblxcdHdpZHRoOiA1MHZoO1xcblxcdHotaW5kZXg6IDM7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHRvcDogMDtcXG5cXHRib3R0b206IDA7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXdoaXRlKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMTBweDtcXG5cXHRvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubmV3LXRvZG8tZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMXZoO1xcblxcdG1hcmdpbi10b3A6IDF2aDtcXG59XFxuXFxuLm1vZGFsOjpiYWNrZHJvcCB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5pY29uLWRpdiB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGhlaWdodDogMzBweDtcXG5cXHR3aWR0aDogMzBweDtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWxpZ2h0LWdyYXkpO1xcbn1cXG5cXG4uaWNvbi1kaXY6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwLCAwLjEpO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyLWNvbnRhaW5lciB7XFxuXFx0aGVpZ2h0OiA1dmg7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmZvcm0taW5wdXQtY29udGFpbmVyIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0Z2FwOiAwLjd2aDtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZvcm0tbGFiZWwge1xcblxcdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcXG5cXHRmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuLmZvcm0taW5wdXQge1xcblxcdGhlaWdodDogMy44dmg7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItdGV4dC1kYXJrZXN0KTtcXG5cXHRvcGFjaXR5OiAwLjk7XFxuXFx0cGFkZGluZy1sZWZ0OiAxdmg7XFxufVxcblxcbi5mb3JtLWlucHV0LWhhbGYge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZG91YmxlLWZvcm0taW5wdXRzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGdhcDogMXZoO1xcbn1cXG5cXG4ubW9kYWwtZm9ybSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGdhcDogMnZoO1xcblxcdG1hcmdpbi10b3A6IDN2aDtcXG59XFxuXFxuLmNyZWF0ZS1idXR0b24ge1xcblxcdGhlaWdodDogNnZoO1xcblxcdGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcdGNvbG9yOiB2YXIoLS1jbHItd2hpdGUpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHR3aWR0aDogMTAwJTtcXG59XFxuXFxuLm1vZGFsLXRpdGxlIHtcXG5cXHRmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm1vZGFsLWhyIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tY2xyLXRleHQtbGlnaHQtZ3JheSk7XFxufVxcblxcbi5mb3JtLWlucHV0LXRleHRhcmVhIHtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xcblxcdGJvcmRlci1yYWRpdXM6IDVweDtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0Y29sb3I6IHZhcigtLWNsci10ZXh0LWRhcmtlc3QpO1xcblxcdG9wYWNpdHk6IDAuOTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDF2aDtcXG5cXHRmb250LWZhbWlseTogJ1JvYm90byBGbGV4Jywgc2Fucy1zZXJpZjtcXG5cXHRwYWRkaW5nLXRvcDogMXZoO1xcbn1cXG5cXG4uZm9ybS1pbnB1dC1kdWUtZGF0ZSB7XFxuXFx0Zm9udC1mYW1pbHk6ICdSb2JvdG8gRmxleCcsIHNhbnMtc2VyaWY7XFxufVxcblxcbi50b2RvLXRhYnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRtYXJnaW4tdG9wOiA1dmg7XFxuXFx0Z2FwOiAxLjV2aDtcXG59XFxuXFxuLnRvZG8tdGFiIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYm9keS1ncmF5KTtcXG4gICAgaGVpZ2h0OiA3dmg7XFxuICAgIHdpZHRoOiAxMjV2aDtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpZGViYXItbGVmdC1tYXJnaW4pO1xcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTclKTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWNvbnRlbnQtbGVmdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgICBnYXA6IDF2aDtcXG4gICAgbWFyZ2luLWxlZnQ6IDN2aDtcXG59XFxuXFxuLnRvZG8tY29udGVudC1yaWdodCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IFxcbiAgICBnYXA6IDF2aDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzdmg7XFxufVxcblxcbi50b2RvLWljb24ge1xcbiAgICBjb2xvcjogdmFyKC0tY2xyLXRleHQtbGlnaHQtZ3JheSk7XFxuICAgIGZvbnQtc2l6ZTogMS4wNXJlbTtcXG59XFxuXFxuLnRvZG8taWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4udG9kby1pbmZvIHtcXG4gICAgY29sb3I6IHZhcigtLWNsci10ZXh0LWRhcmspO1xcbn1cXG5cXG4udG9kby1pY29uLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogMy4ydmg7XFxuICAgIHdpZHRoOiAzLjJ2aDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnRvZG8taWNvbi1jb250YWluZXI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVNb2RhbEZvcm1zIH0gZnJvbSAnLic7XG5pbXBvcnQgeyBvcGVuRWRpdFRvZG9Nb2RhbCB9IGZyb20gJy4nO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHNXaXRoRE9NKHByb2plY3RzKSB7XG4gICAgY29uc3QgcHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWJzJyk7XG4gICAgY29uc3QgZGVmYXVsdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVmYXVsdC10YWJzJyk7XG4gICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuXG4gICAgZGVmYXVsdFRhYnMuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHByb2plY3RUYWIuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGFiJztcbiAgICAgICAgcHJvamVjdFRhYi5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvamVjdCcsIHByb2plY3RzW2ldLmdldE5hbWUoKSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmNsYXNzTmFtZSA9ICdwcm9qZWN0LXNpZGViYXItdGl0bGUnO1xuICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5nZXROYW1lKCk7XG5cbiAgICAgICAgcHJvamVjdFRhYi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICBkZWZhdWx0VGFicy5hcHBlbmRDaGlsZChwcm9qZWN0VGFiKTtcblxuICAgICAgICBwcm9qZWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdFRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGFiJykuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LXByb2plY3QnLCAnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZGVmYXVsdFRhYnMucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtdGFiJykuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICAgICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50LXByb2plY3QnLCAnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LXByb2plY3QnLCAnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2gob3RoZXJQcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAob3RoZXJQcm9qZWN0ICE9PSBwcm9qZWN0c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBvdGhlclByb2plY3Quc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2plY3RzW2ldLnNldEFjdGl2ZSh0cnVlKTtcblxuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAgICAgbGV0IGNvbnRlbnRIZWFkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnRlbnRIZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGVudC1oZWFkZXItY29udGFpbmVyJyk7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXJDb250YWluZXIpO1xuXG4gICAgICAgICAgICBsZXQgY29udGVudFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXRpdGxlJyk7XG4gICAgICAgICAgICBjb250ZW50VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c1tpXS5nZXROYW1lKCk7XG4gICAgICAgICAgICBjb250ZW50SGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRUaXRsZSk7XG5cbiAgICAgICAgICAgIGxldCBuZXdUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBuZXdUb2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ25ldy10b2RvLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgY29udGVudEhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUb2RvQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgbGV0IG5ld1RvZG9JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgbmV3VG9kb0ljb24uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtcGx1cycsICdmYS1sZycsICdmYS0yeCcsICduZXctdG9kby1idXR0b24nKTtcbiAgICAgICAgICAgIG5ld1RvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0ljb24pO1xuXG4gICAgICAgICAgICBsZXQgY29udGVudEhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgICAgICAgICAgIGNvbnRlbnRIci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWhyJyk7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRIcik7XG5cbiAgICAgICAgICAgIGNyZWF0ZU1vZGFsRm9ybXMoKTtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG9zV2l0aERPTShwcm9qZWN0c1tpXSwgbWFpbkNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LmdldE5hbWUoKSAhPT0gJ0luYm94JyAmJiBwcm9qZWN0LmdldE5hbWUoKSAhPT0gJ0NvbXBsZXRlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NOYW1lID0gJ3Byb2plY3QtdGFiJztcbiAgICAgICAgICAgIHByb2plY3RUYWIuc2V0QXR0cmlidXRlKCdkYXRhLXByb2plY3QnLCBwcm9qZWN0LmdldE5hbWUoKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUuY2xhc3NOYW1lID0gJ3Byb2plY3Qtc2lkZWJhci10aXRsZSc7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJvamVjdFRhYi5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgcHJvamVjdFRhYnMuYXBwZW5kQ2hpbGQocHJvamVjdFRhYik7XG4gICAgXG4gICAgICAgICAgICBwcm9qZWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb2plY3RUYWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRhYicpLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtcHJvamVjdCcsICdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGRlZmF1bHRUYWJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRhYicpLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2N1cnJlbnQtcHJvamVjdCcsICdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wcm9qZWN0JywgJ2FjdGl2ZScpO1xuICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2gob3RoZXJQcm9qZWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG90aGVyUHJvamVjdCAhPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3RoZXJQcm9qZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnNldEFjdGl2ZSh0cnVlKTtcbiAgICBcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50SGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29udGVudEhlYWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWhlYWRlci1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnRIZWFkZXJDb250YWluZXIpO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgY29udGVudFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5nZXROYW1lKCk7XG4gICAgICAgICAgICAgICAgY29udGVudEhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCBuZXdUb2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbmV3VG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCduZXctdG9kby1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBjb250ZW50SGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RvZG9Db250YWluZXIpO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCBuZXdUb2RvSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICAgICAgICAgICAgICBuZXdUb2RvSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1wbHVzJywgJ2ZhLWxnJywgJ2ZhLTJ4JywgJ25ldy10b2RvLWJ1dHRvbicpO1xuICAgICAgICAgICAgICAgIG5ld1RvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQobmV3VG9kb0ljb24pO1xuICAgIFxuICAgICAgICAgICAgICAgIGxldCBjb250ZW50SHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICAgICAgICAgICAgICAgIGNvbnRlbnRIci5jbGFzc0xpc3QuYWRkKCdjb250ZW50LWhyJyk7XG4gICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50SHIpO1xuXG4gICAgICAgICAgICAgICAgY3JlYXRlTW9kYWxGb3JtcygpO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG9zV2l0aERPTShwcm9qZWN0LCBtYWluQ29udGFpbmVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uIG1ha2VJbmJveFByb2plY3RBY3RpdmUoKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0VGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LXRhYicpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBwcm9qZWN0VGFiIG9mIHByb2plY3RUYWJzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0VGFiLnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXNpZGViYXItdGl0bGUnKS50ZXh0Q29udGVudDsgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJ0luYm94Jykge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0VGFiLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtcHJvamVjdCcsICdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFRhYi5jbGljaygpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvZG9zV2l0aERPTShwcm9qZWN0LCBtYWluQ29udGFpbmVyKSB7XG4gICAgY29uc3QgdG9kb1RhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b2RvVGFicy5jbGFzc0xpc3QuYWRkKCd0b2RvLXRhYnMnKTtcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9UYWJzKTtcblxuICAgIHByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICAgICAgbGV0IHRvZG9UYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdG9kb1RhYi5jbGFzc0xpc3QuYWRkKCd0b2RvLXRhYicpO1xuICAgICAgICB0b2RvVGFicy5hcHBlbmRDaGlsZCh0b2RvVGFiKTtcblxuICAgICAgICBsZXQgdG9kb0NvbnRlbnRMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kb0NvbnRlbnRMZWZ0LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29udGVudC1sZWZ0JylcbiAgICAgICAgdG9kb1RhYi5hcHBlbmRDaGlsZCh0b2RvQ29udGVudExlZnQpO1xuXG4gICAgICAgIGxldCB0b2RvQ29udGVudFJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kb0NvbnRlbnRSaWdodC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbnRlbnQtcmlnaHQnKVxuICAgICAgICB0b2RvVGFiLmFwcGVuZENoaWxkKHRvZG9Db250ZW50UmlnaHQpO1xuXG4gICAgICAgIGxldCB0b2RvQ29tcGxldGVkQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0b2RvQ29tcGxldGVkQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcbiAgICAgICAgdG9kb0NvbXBsZXRlZENoZWNrYm94LnNldEF0dHJpYnV0ZSgnbmFtZScsICd0b2RvLWNvbXBsZXRlZC1jaGVja2JveCcpXG4gICAgICAgIHRvZG9Db21wbGV0ZWRDaGVja2JveC5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbXBsZXRlZC1jaGVja2JveCcpXG4gICAgICAgIHRvZG9Db21wbGV0ZWRDaGVja2JveC5kYXRhc2V0LnRvZG9JZCA9IGluZGV4O1xuICAgICAgICB0b2RvQ29udGVudExlZnQuYXBwZW5kQ2hpbGQodG9kb0NvbXBsZXRlZENoZWNrYm94KSAgIFxuXG4gICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3RvZG8tdGl0bGUnKVxuICAgICAgICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZCgndG9kby1pbmZvJylcbiAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgdG9kb0NvbnRlbnRMZWZ0LmFwcGVuZENoaWxkKHRvZG9UaXRsZSlcblxuICAgICAgICBsZXQgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0LmFkZCgndG9kby1kdWUtZGF0ZScpXG4gICAgICAgIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8taW5mbycpXG4gICAgICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICAgICAgICB0b2RvQ29udGVudFJpZ2h0LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKVxuXG4gICAgICAgIGxldCB0b2RvSWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0b2RvSWNvbnMuY2xhc3NMaXN0LmFkZCgndG9kby1pY29ucycpO1xuICAgICAgICB0b2RvQ29udGVudFJpZ2h0LmFwcGVuZENoaWxkKHRvZG9JY29ucylcblxuICAgICAgICBsZXQgdG9kb0ljb25Db250YWluZXJFZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kb0ljb25Db250YWluZXJFZGl0LmNsYXNzTGlzdC5hZGQoJ3RvZG8taWNvbi1jb250YWluZXInKVxuICAgICAgICB0b2RvSWNvbnMuYXBwZW5kQ2hpbGQodG9kb0ljb25Db250YWluZXJFZGl0KVxuXG4gICAgICAgIGxldCB0b2RvSWNvbkVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICAgICAgdG9kb0ljb25FZGl0LmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXBlbi10by1zcXVhcmUnLCAndG9kby1pY29uJyk7XG4gICAgICAgIHRvZG9JY29uQ29udGFpbmVyRWRpdC5hcHBlbmRDaGlsZCh0b2RvSWNvbkVkaXQpXG5cbiAgICAgICAgdG9kb0ljb25FZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgb3BlbkVkaXRUb2RvTW9kYWwocHJvamVjdC50b2Rvc1tpbmRleF0sIGluZGV4KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHRvZG9JY29uQ29udGFpbmVyRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdG9kb0ljb25Db250YWluZXJEZWxldGUuY2xhc3NMaXN0LmFkZCgndG9kby1pY29uLWNvbnRhaW5lcicpXG4gICAgICAgIHRvZG9JY29ucy5hcHBlbmRDaGlsZCh0b2RvSWNvbkNvbnRhaW5lckRlbGV0ZSlcblxuICAgICAgICBsZXQgdG9kb0ljb25EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJylcbiAgICAgICAgdG9kb0ljb25EZWxldGUuY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtdHJhc2gtY2FuJywgJ3RvZG8taWNvbicpO1xuICAgICAgICB0b2RvSWNvbkNvbnRhaW5lckRlbGV0ZS5hcHBlbmRDaGlsZCh0b2RvSWNvbkRlbGV0ZSlcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RPcHRpb25zSW5Nb2RhbChwcm9qZWN0cykge1xuICAgIGxldCB0b2RvUHJvamVjdE9wdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1wcm9qZWN0LW9wdGlvbnMnKTtcbiAgICBcbiAgICBjb25zdCBmaWx0ZXJlZFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5nZXROYW1lKCkgIT09ICdJbmJveCcgJiYgcHJvamVjdC5nZXROYW1lKCkgIT09ICdDb21wbGV0ZWQnKTtcblxuICAgIGZpbHRlcmVkUHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgcHJvamVjdE9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgcHJvamVjdC5nZXROYW1lKCkpXG4gICAgICAgIHByb2plY3RPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0LmdldE5hbWUoKVxuICAgICAgICB0b2RvUHJvamVjdE9wdGlvbnMuYXBwZW5kQ2hpbGQocHJvamVjdE9wdGlvbilcbiAgICB9KVxufVxuXG4vLyBBZGQgdGhpcyBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIGVkaXQgdG9kbyBtb2RhbFxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVkaXRUb2RvTW9kYWwoKSB7XG4gICAgY29uc3QgZWRpdFRvZG9Nb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgIGVkaXRUb2RvTW9kYWwuY2xhc3NOYW1lID0gJ2VkaXQtdG9kby1tb2RhbCBtb2RhbCc7XG4gICAgZWRpdFRvZG9Nb2RhbC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50IGVkaXQtdG9kby1tb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlLWVkaXQtdG9kby1tb2RhbCBjbG9zZS1tb2RhbFwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8aDI+RWRpdCBUb2RvPC9oMj5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZWRpdC10b2RvLWZvcm1cIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZWRpdC10b2RvLXRpdGxlXCI+VGl0bGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImVkaXQtdG9kby10aXRsZVwiIHJlcXVpcmVkPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXQtdG9kby1kZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZWRpdC10b2RvLWRlc2NyaXB0aW9uXCIgcm93cz1cIjNcIj48L3RleHRhcmVhPlxuXG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImVkaXQtdG9kby1kdWUtZGF0ZVwiPkR1ZSBEYXRlOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJlZGl0LXRvZG8tZHVlLWRhdGVcIj5cblxuICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJlZGl0LXRvZG8tcHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJlZGl0LXRvZG8tcHJpb3JpdHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJlZGl0LXRvZG8tYnV0dG9uXCI+U2F2ZSBDaGFuZ2VzPC9idXR0b24+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVkaXRUb2RvTW9kYWwpO1xuXG4gICAgLy8gQ2xvc2UgdGhlIG1vZGFsIHdoZW4gdGhlIGNsb3NlIGJ1dHRvbiBpcyBjbGlja2VkXG4gICAgZWRpdFRvZG9Nb2RhbC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtZWRpdC10b2RvLW1vZGFsJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGVkaXRUb2RvTW9kYWwuY2xvc2UoKTtcbiAgICB9KTtcbn1cblxuLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBlZGl0IHRvZG8gbW9kYWxcbmNyZWF0ZUVkaXRUb2RvTW9kYWwoKVxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0c1dpdGhET00gfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBjcmVhdGVUb2Rvc1dpdGhET00gfSBmcm9tICcuL2RvbSc7XG5pbXBvcnQgeyBjcmVhdGVQcm9qZWN0T3B0aW9uc0luTW9kYWwgfSBmcm9tICcuL2RvbSc7XG5cbmxldCBwcm9qZWN0cyA9IFtuZXcgUHJvamVjdCgnSW5ib3gnKSwgbmV3IFByb2plY3QoJ0NvbXBsZXRlZCcpLCBuZXcgUHJvamVjdCgnV2ViIERldmVsb3BtZW50JyldO1xuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtZm9ybScpO1xuY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tZm9ybScpO1xuY29uc3QgcHJvamVjdFRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC10YWJzJyk7XG5jb25zdCB0b2RvVGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXRhYnMnKTtcbmNvbnN0IG5ld1Byb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1tb2RhbCcpO1xuY29uc3QgbmV3VG9kb01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10b2RvLW1vZGFsJyk7XG5jb25zdCBjcmVhdGVUb2RvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZS10b2RvLWJ1dHRvbicpO1xuY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRhYicpO1xuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xubGV0IHRvZG9Qcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLXByb2plY3Qtb3B0aW9ucycpO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kYWxGb3JtcygpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0LWJ1dHRvbicpO1xuICAgIGNvbnN0IGNsb3NlUHJvamVjdE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXByb2plY3QtbW9kYWwnKTtcblxuICAgIG5ld1Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5ld1Byb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcbiAgICB9KTtcblxuICAgIGNsb3NlUHJvamVjdE1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuZXdQcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG5ld1RvZG9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRvZG8tY29udGFpbmVyJyk7XG4gICAgY29uc3QgY2xvc2VUb2RvTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtdG9kby1tb2RhbCcpO1xuXG4gICAgbmV3VG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbmV3VG9kb01vZGFsLnNob3dNb2RhbCgpO1xuICAgIH0pO1xuXG4gICAgY2xvc2VUb2RvTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5ld1RvZG9Nb2RhbC5jbG9zZSgpO1xuICAgIH0pO1xuXG4gICAgY3JlYXRlVG9kb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy8gQ3JlYXRlIHRvZG8gYW5kIGFkZCB0byBzcGVjaWZpYyBwcm9qZWN0J3MgdG9kb3MgYXJyYXkuXG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0cygpIHtcbiAgICBuZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbmV3UHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWU7XG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3IFByb2plY3QocHJvamVjdE5hbWUpKTtcblxuICAgICAgICBwcm9qZWN0VGFicy5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgY3JlYXRlUHJvamVjdHNXaXRoRE9NKHByb2plY3RzKTtcbiAgICAgICAgdG9kb1Byb2plY3RPcHRpb25zLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBjcmVhdGVQcm9qZWN0T3B0aW9uc0luTW9kYWwocHJvamVjdHMpXG5cbiAgICAgICAgbGV0IG5ld1Byb2plY3RUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wcm9qZWN0PVwiJHtwcm9qZWN0TmFtZX1cIl1gKTtcbiAgICAgICAgaWYgKG5ld1Byb2plY3RUYWIpIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3RUYWIuY2xpY2soKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9kb3MoKSB7XG4gICAgbmV3VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGxldCB0b2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgIGxldCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1kdWUtZGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHRvZG9Qcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby1wcmlvcml0eVwiKS52YWx1ZTtcbiAgICAgICAgbGV0IHRvZG9Qcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXByb2plY3RcIikudmFsdWU7XG5cbiAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5pc0FjdGl2ZSgpKTtcbiAgICAgICAgbGV0IG5hbWVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gdG9kb1Byb2plY3QpO1xuICAgICAgICBuYW1lZFByb2plY3QuYWRkVG9kbyhuZXcgVG9kbyh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgdG9kb1Byb2plY3QpKTtcblxuICAgICAgICBsZXQgcHJvamVjdFRhYlRvQ2xpY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdC10YWJbZGF0YS1wcm9qZWN0PVwiJHt0b2RvUHJvamVjdH1cIl1gKTtcbiAgICAgICAgaWYgKHByb2plY3RUYWJUb0NsaWNrKSB7XG4gICAgICAgICAgICBwcm9qZWN0VGFiVG9DbGljay5jbGljaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvamVjdHNbMF0uYWRkVG9kbyhuZXcgVG9kbyh0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbiwgdG9kb0R1ZURhdGUsIHRvZG9Qcmlvcml0eSwgdG9kb1Byb2plY3QpKTtcblxuICAgICAgICBsZXQgYWN0aXZlUHJvamVjdFRvZG9UYWJzID0gbWFpbkNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudG9kby10YWJzJyk7XG4gICAgICAgIGFjdGl2ZVByb2plY3RUb2RvVGFicy5yZW1vdmUoKTtcbiAgICAgICAgY3JlYXRlVG9kb3NXaXRoRE9NKGFjdGl2ZVByb2plY3QsIG1haW5Db250YWluZXIpO1xuICAgICAgICBuZXdUb2RvTW9kYWwuY2xvc2UoKTsgICBcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5FZGl0VG9kb01vZGFsKHRvZG8sIGluZGV4KSB7XG4gICAgY29uc3QgZWRpdFRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXRvZG8tbW9kYWwnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZWRpdC10b2RvLXRpdGxlJykudmFsdWUgPSB0b2RvLnRpdGxlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRvZG8tZGVzY3JpcHRpb24nKS52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1kdWUtZGF0ZScpLnZhbHVlID0gdG9kby5kdWVEYXRlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRvZG8tcHJpb3JpdHknKS52YWx1ZSA9IHRvZG8ucHJpb3JpdHk7XG4gICAgZWRpdFRvZG9Nb2RhbC5xdWVyeVNlbGVjdG9yKCcuZWRpdC10b2RvLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdG9kby50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRvZG8tdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgdG9kby5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LXRvZG8tZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgdG9kby5kdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1kdWUtZGF0ZScpLnZhbHVlO1xuICAgICAgICB0b2RvLnByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtdG9kby1wcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBlZGl0VG9kb01vZGFsLmNsb3NlKCk7XG4gICAgICAgIGNyZWF0ZVRvZG9zV2l0aERPTShwcm9qZWN0LCBtYWluQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgICBlZGl0VG9kb01vZGFsLnNob3dNb2RhbCgpO1xufVxuXG5jcmVhdGVQcm9qZWN0T3B0aW9uc0luTW9kYWwocHJvamVjdHMpXG5jcmVhdGVQcm9qZWN0c1dpdGhET00ocHJvamVjdHMpO1xuY3JlYXRlTW9kYWxGb3JtcygpO1xuY3JlYXRlUHJvamVjdHMoKTtcbmNyZWF0ZVRvZG9zKCk7XG4iLCJpbXBvcnQgeyBUb2RvIH0gZnJvbSBcIi4vdG9kb1wiO1xuXG5leHBvcnQgY2xhc3MgUHJvamVjdHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudG9kb3MgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH1cblxuICAgIGFkZFRvZG8odG9kbykge1xuICAgICAgICBpZiAodG9kbyBpbnN0YW5jZW9mIFRvZG8pIHtcbiAgICAgICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEFjdGl2ZShpc0FjdGl2ZSkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGlzQWN0aXZlO1xuICAgIH1cblxuICAgIGlzQWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmU7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBUb2Rve1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgfVxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmlvcml0eTtcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xuICAgIH1cblxuICAgIHNldFRpdGxlKHRpdGxlKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB9XG5cbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcbiAgICB9XG5cbiAgICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHlcbiAgICB9XG5cbiAgICBzZXRQcm9qZWN0KHByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=