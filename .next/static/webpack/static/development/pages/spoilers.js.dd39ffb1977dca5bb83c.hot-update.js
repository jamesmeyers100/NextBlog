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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    style: {
      alignSelf: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/spoils?title=".concat(props.title, "&source=").concat(props.source)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, props.title)));
};

function Spoilers() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
    style: {
      display: "flex",
      flexDirection: "column",
      t: "center",
      backgroundColor: "purple"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Spoilers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    style: {
      listStyleType: "none",
      backgroundColor: "orange",
      justifyContent: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spoils, {
    title: "Harry Potter",
    source: "DUMBLEDORE, DOBBY, AND SERIOUS ALL DIE!"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spoils, {
    title: "Game of Thrones",
    source: "EVERYONE SLEEPS WITH EVERYONE ELSE AND THEY ALL DIE!"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Spoils, {
    title: "Waiting for Godot",
    source: "Godot never comes. Only one guys dies."
  }))));
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
//# sourceMappingURL=spoilers.js.dd39ffb1977dca5bb83c.hot-update.js.map