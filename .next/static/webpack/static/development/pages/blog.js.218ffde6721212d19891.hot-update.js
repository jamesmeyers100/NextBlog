webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);






 // async function getMarkup(){
//   const res = await fetch('https://www.googleapis.com/blogger/v3/blogs/5247624635318920606/posts?key=AIzaSyAednmRa-8f4Cl2qCFaOvpTGqauGyOoKCw');
//   const data = await res.json()
//   const blogPostTest =  `${data.items[0].content}`
//   return {__html: blogPostTest};
// }

var Blog = function Blog(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("h1", {
    className: "jsx-3179473796"
  }, "Links to Blog Posts"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-3179473796"
  }, "Eventually: Links will route to page with post and NOT to Blogger site"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-3179473796"
  }, props.data.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: item.id,
      className: "jsx-3179473796"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: item.url
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-3179473796"
    }, item.title)));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3179473796"
  }, "a.jsx-3179473796{color:\"purple\";-webkit-text-decoration:none;text-decoration:none;}a.jsx-3179473796:hover{color:\"        };}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJkbHlkcml2ZW4vZGV2L3BlcnNvbmFsX3NpdGVzL1BTLU5leHQvcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBRzRCLEFBTW5CLGVBTHlCLEVBS3hCLGdEQUpEIiwiZmlsZSI6Ii9Vc2Vycy9oYXJkbHlkcml2ZW4vZGV2L3BlcnNvbmFsX3NpdGVzL1BTLU5leHQvcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldE1hcmt1cCgpe1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYmxvZ2dlci92My9ibG9ncy81MjQ3NjI0NjM1MzE4OTIwNjA2L3Bvc3RzP2tleT1BSXphU3lBZWRubVJhLThmNENsMnFDRmFPdnBUR3FhdUd5T29LQ3cnKTtcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbi8vICAgY29uc3QgYmxvZ1Bvc3RUZXN0ID0gIGAke2RhdGEuaXRlbXNbMF0uY29udGVudH1gXG4vLyAgIHJldHVybiB7X19odG1sOiBibG9nUG9zdFRlc3R9O1xuLy8gfVxuXG5jb25zdCBCbG9nID0gKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPkxpbmtzIHRvIEJsb2cgUG9zdHM8L2gxPlxuICAgIDxwPkV2ZW50dWFsbHk6IExpbmtzIHdpbGwgcm91dGUgdG8gcGFnZSB3aXRoIHBvc3QgYW5kIE5PVCB0byBCbG9nZ2VyIHNpdGU8L3A+XG4gICAgey8qIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2dldE1hcmt1cCgpfT48L2Rpdj4gKi99XG4gICAgPHVsPlxuICAgICAge3Byb3BzLmRhdGEuaXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnVybH0+XG4gICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IFwicHVycGxlXCI7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgY29sb3I6IFwiXG4gICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbilcblxuQmxvZy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ibG9nZ2VyL3YzL2Jsb2dzLzUyNDc2MjQ2MzUzMTg5MjA2MDYvcG9zdHM/a2V5PUFJemFTeUFlZG5tUmEtOGY0Q2wycUNGYU92cFRHcWF1R3lPb0tDdycpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBjb25zb2xlLmxvZyhcInRoaXMgaXMgZ2V0SW5pdGlhbFByb3BzIHRvIEJsb2dnZXJcIiwgZGF0YSlcblxuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZyJdfQ== */\n/*@ sourceURL=/Users/hardlydriven/dev/personal_sites/PS-Next/pages/blog.js */"));
};

Blog.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()('https://www.googleapis.com/blogger/v3/blogs/5247624635318920606/posts?key=AIzaSyAednmRa-8f4Cl2qCFaOvpTGqauGyOoKCw');

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          console.log("this is getInitialProps to Blogger", data);
          return _context.abrupt("return", {
            data: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=blog.js.218ffde6721212d19891.hot-update.js.map