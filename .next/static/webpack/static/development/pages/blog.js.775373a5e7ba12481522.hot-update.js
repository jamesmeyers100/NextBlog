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
    className: "jsx-3013984925"
  }, "Links to Blog Posts"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
    className: "jsx-3013984925"
  }, "Eventually: Links will route to page with post and NOT to Blogger site"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", {
    className: "jsx-3013984925"
  }, props.data.items.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
      key: item.id,
      className: "jsx-3013984925"
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: item.url
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
      className: "jsx-3013984925"
    }, item.title)));
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3013984925"
  }, "a.jsx-3013984925{color:#222'            text-decoration: none;        };}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJkbHlkcml2ZW4vZGV2L3BlcnNvbmFsX3NpdGVzL1BTLU5leHQvcGFnZXMvYmxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBTVMsdURBQUMiLCJmaWxlIjoiL1VzZXJzL2hhcmRseWRyaXZlbi9kZXYvcGVyc29uYWxfc2l0ZXMvUFMtTmV4dC9wYWdlcy9ibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0TWFya3VwKCl7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9ibG9nZ2VyL3YzL2Jsb2dzLzUyNDc2MjQ2MzUzMTg5MjA2MDYvcG9zdHM/a2V5PUFJemFTeUFlZG5tUmEtOGY0Q2wycUNGYU92cFRHcWF1R3lPb0tDdycpO1xuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuLy8gICBjb25zdCBibG9nUG9zdFRlc3QgPSAgYCR7ZGF0YS5pdGVtc1swXS5jb250ZW50fWBcbi8vICAgcmV0dXJuIHtfX2h0bWw6IGJsb2dQb3N0VGVzdH07XG4vLyB9XG5cbmNvbnN0IEJsb2cgPSAocHJvcHMpID0+IChcbiAgPExheW91dD5cbiAgICA8aDE+TGlua3MgdG8gQmxvZyBQb3N0czwvaDE+XG4gICAgPHA+RXZlbnR1YWxseTogTGlua3Mgd2lsbCByb3V0ZSB0byBwYWdlIHdpdGggcG9zdCBhbmQgTk9UIHRvIEJsb2dnZXIgc2l0ZTwvcD5cbiAgICB7LyogPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17Z2V0TWFya3VwKCl9PjwvZGl2PiAqL31cbiAgICA8dWw+XG4gICAgICB7cHJvcHMuZGF0YS5pdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9PlxuICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0udXJsfT5cbiAgICAgICAgICAgIDxhPntpdGVtLnRpdGxlfTwvYT5cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzIyMidcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKVxuXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Jsb2dnZXIvdjMvYmxvZ3MvNTI0NzYyNDYzNTMxODkyMDYwNi9wb3N0cz9rZXk9QUl6YVN5QWVkbm1SYS04ZjRDbDJxQ0ZhT3ZwVEdxYXVHeU9vS0N3Jyk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIGNvbnNvbGUubG9nKFwidGhpcyBpcyBnZXRJbml0aWFsUHJvcHMgdG8gQmxvZ2dlclwiLCBkYXRhKVxuXG4gIHJldHVybiB7XG4gICAgZGF0YSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nIl19 */\n/*@ sourceURL=/Users/hardlydriven/dev/personal_sites/PS-Next/pages/blog.js */"));
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
//# sourceMappingURL=blog.js.775373a5e7ba12481522.hot-update.js.map