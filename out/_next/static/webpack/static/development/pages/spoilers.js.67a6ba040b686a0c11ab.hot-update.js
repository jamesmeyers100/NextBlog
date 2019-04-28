webpackHotUpdate("static/development/pages/spoilers.js",{

/***/ "./pages/spoilers.js":
/*!***************************!*\
  !*** ./pages/spoilers.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spoilers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var Spoils = function Spoils(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/spoils?title=".concat(props.title, "&source=").concat(props.source)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, props.title)));
};

var sources = "blah";
function Spoilers() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Spoilers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spoils, {
    title: "Harry Potter",
    source: "DUMBLEDORE,  DIES"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spoils, {
    title: "Game of Thrones"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spoils, {
    title: "Waiting for Godot"
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
//# sourceMappingURL=spoilers.js.67a6ba040b686a0c11ab.hot-update.js.map