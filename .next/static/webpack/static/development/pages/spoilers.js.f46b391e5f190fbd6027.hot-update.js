webpackHotUpdate("static/development/pages/spoilers.js",{

/***/ "./pages/spoilers.js":
/*!***************************!*\
  !*** ./pages/spoilers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var Spoils = function Spoils(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/spoilers?title=".concat(props.title)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, props.title)));
};

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Spoils"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spoils, {
    title: "Hello Next.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spoils, {
    title: "Learn Next.js is awesome"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spoils, {
    title: "Deploy apps with Zeit"
  })));
} // import Layout from "../components/MyLayout";
// import Link from 'next/link';
// export default function Spoilers() {
//     const headerStyle = {
//         alignSelf: "center",
//     }
//     return (
//         <Layout>
//             <div style={headerStyle}>
//                 <h1>Spoilers</h1>
//             </div>
//             <div>
//                 <h2>Harry Potter</h2>
//                 <Link href="/">
//                     <button>Spoil It</button>
//                 </Link>
//             </div>
//             <style jsx>{`
//         a {
//             color: #0d0;
//             text-decoration: none;
//         }
//         `}</style>
//         </Layout>
//     )
// }

/***/ })

})
//# sourceMappingURL=spoilers.js.f46b391e5f190fbd6027.hot-update.js.map