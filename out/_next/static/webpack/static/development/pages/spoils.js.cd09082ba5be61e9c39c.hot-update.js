webpackHotUpdate("static/development/pages/spoils.js",{

/***/ "./pages/spoils.js":
/*!*************************!*\
  !*** ./pages/spoils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);





var markdownStyles = {
  alignSelf: "center"
};
var pageStyles = {
  alignSelf: "center",
  marginTop: 30
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    style: pageStyles,
    className: "jsx-32141700"
  }, props.router.query.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: markdownStyles,
    className: "jsx-32141700" + " " + "markdown"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, {
    source: props.router.query.source
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Link, null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "32141700"
  }, ".markdown{font-family:'Arial';}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue;}.markdown a:hover{opacity:0.6;}.markdown h3{margin:0;padding:0;text-transform:uppercase;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJkbHlkcml2ZW4vZGV2L3BlcnNvbmFsX3NpdGVzL1BTLU5leHQvcGFnZXMvc3BvaWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVCdUIsQUFHNkIsQUFJQyxBQUlULEFBR0gsU0FDQyxHQUhaLE9BSTJCLENBWDNCLHdCQVlBLE1BVGEsV0FDYiIsImZpbGUiOiIvVXNlcnMvaGFyZGx5ZHJpdmVuL2Rldi9wZXJzb25hbF9zaXRlcy9QUy1OZXh0L3BhZ2VzL3Nwb2lscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcblxuY29uc3QgbWFya2Rvd25TdHlsZXMgPSB7XG4gICAgYWxpZ25TZWxmOiBcImNlbnRlclwiLFxuICAgIFxufVxuXG5jb25zdCBwYWdlU3R5bGVzID0ge1xuICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Ub3A6IDMwXG59XG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKHByb3BzID0+IChcbiAgPExheW91dD5cbiAgICA8aDEgc3R5bGU9e3BhZ2VTdHlsZXN9Pntwcm9wcy5yb3V0ZXIucXVlcnkudGl0bGV9PC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1hcmtkb3duXCIgc3R5bGU9e21hcmtkb3duU3R5bGVzfSA+XG4gICAgICA8TWFya2Rvd25cbiAgICAgICAgc291cmNlPXtwcm9wcy5yb3V0ZXIucXVlcnkuc291cmNlfVxuICAgICAgLz5cbiAgICAgIDxMaW5rPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAubWFya2Rvd24ge1xuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcblxuICAgICAgfVxuICAgICAgLm1hcmtkb3duIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgfVxuICAgICAgLm1hcmtkb3duIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgICAubWFya2Rvd24gaDMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbikpICJdfQ== */\n/*@ sourceURL=/Users/hardlydriven/dev/personal_sites/PS-Next/pages/spoils.js */"));
}));

/***/ })

})
//# sourceMappingURL=spoils.js.cd09082ba5be61e9c39c.hot-update.js.map