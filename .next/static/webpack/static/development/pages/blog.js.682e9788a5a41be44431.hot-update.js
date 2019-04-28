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
    className: "jsx-1911761676"
  }, "Links to Blog Posts"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-1911761676"
  }, "Eventually: Links will route to page with post and NOT to Blogger site"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-1911761676"
  }, props.data.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: item.id,
      className: "jsx-1911761676"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: item.url
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-1911761676"
    }, item.title)));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1911761676"
  }, "a.jsx-1911761676{color:purple;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJkbHlkcml2ZW4vZGV2L3BlcnNvbmFsX3NpdGVzL1BTLU5leHQvcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBRzBCLGFBQ1Esa0RBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9oYXJkbHlkcml2ZW4vZGV2L3BlcnNvbmFsX3NpdGVzL1BTLU5leHQvcGFnZXMvYmxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGdldE1hcmt1cCgpe1xuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYmxvZ2dlci92My9ibG9ncy81MjQ3NjI0NjM1MzE4OTIwNjA2L3Bvc3RzP2tleT1BSXphU3lBZWRubVJhLThmNENsMnFDRmFPdnBUR3FhdUd5T29LQ3cnKTtcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbi8vICAgY29uc3QgYmxvZ1Bvc3RUZXN0ID0gIGAke2RhdGEuaXRlbXNbMF0uY29udGVudH1gXG4vLyAgIHJldHVybiB7X19odG1sOiBibG9nUG9zdFRlc3R9O1xuLy8gfVxuXG5jb25zdCBCbG9nID0gKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGgxPkxpbmtzIHRvIEJsb2cgUG9zdHM8L2gxPlxuICAgIDxwPkV2ZW50dWFsbHk6IExpbmtzIHdpbGwgcm91dGUgdG8gcGFnZSB3aXRoIHBvc3QgYW5kIE5PVCB0byBCbG9nZ2VyIHNpdGU8L3A+XG4gICAgey8qIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e2dldE1hcmt1cCgpfT48L2Rpdj4gKi99XG4gICAgPHVsPlxuICAgICAge3Byb3BzLmRhdGEuaXRlbXMubWFwKGl0ZW0gPT4gKFxuICAgICAgICA8bGkga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnVybH0+XG4gICAgICAgICAgICA8YT57aXRlbS50aXRsZX08L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IHB1cnBsZTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBhOmhvdmVyIHtcbiAgICAgICAgLy8gICBjb2xvcjogXCJcbiAgICAgICAgLy8gfVxuICAgICAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKVxuXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jsb2dnZXIvdjMvYmxvZ3MvNTI0NzYyNDYzNTMxODkyMDYwNi9wb3N0cz9rZXk9QUl6YVN5QWVkbm1SYS04ZjRDbDJxQ0ZhT3ZwVEdxYXVHeU9vS0N3Jyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyBnZXRJbml0aWFsUHJvcHMgdG8gQmxvZ2dlclwiLCBkYXRhKVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nIl19 */\n/*@ sourceURL=/Users/hardlydriven/dev/personal_sites/PS-Next/pages/blog.js */"));
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
//# sourceMappingURL=blog.js.682e9788a5a41be44431.hot-update.js.map