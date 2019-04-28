webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


// import Link from 'next/link'
// import Layout from '../components/MyLayout.js'
// import Header from "../components/Header"
// const Index = () => (
//     <div>
//         <Layout>
//         <p>Hello Next.js</p>
//         </Layout>
//     </div>
// )
// export default Index
// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'
// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink title="Hello Next.js" />
//         <PostLink title="Learn Next.js is awesome" />
//         <PostLink title="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   )
// }
// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'
// const PostLink = props => (
//   <li>
//     <Link as={`/posts/${props.id}`} href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )
// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         <PostLink id="hello-nextjs" title="Hello Next.js" />
//         <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
//         <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   )
// }
// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
// const Index = (props) => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(show => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// )
// Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()
//   console.log(`Show data fetched. Count: ${data.length}`)
//   return {
//     shows: data.map(entry => entry.show)
//   }
// }
// export default Index



function getPosts() {
  return [{
    id: 'hello-nextjs',
    title: 'Hello Next.js'
  }, {
    id: 'learn-nextjs',
    title: 'Learn Next.js is awesome'
  }, {
    id: 'deploy-nextjs',
    title: 'Deploy apps with ZEIT'
  }];
}

function Blog() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_2__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4221348888"
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-4221348888"
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post.id,
      className: "jsx-4221348888"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: "/p/".concat(post.id),
      href: "/post?title=".concat(post.title)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-4221348888"
    }, post.title)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4221348888"
  }, "h1.jsx-4221348888,a.jsx-4221348888{font-family:'Garamond';}ul.jsx-4221348888{padding:0;}li.jsx-4221348888{list-style:none;margin:5px 0;}a.jsx-4221348888{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-4221348888:hover{opacity:0.6;color:\"yellow\";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJkbHlkcml2ZW4vZGV2L3BlcnNvbmFsX3NpdGVzL1BTLU5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEh3QixBQUlrQyxBQUliLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFlRCxJQVhnQixPQVJmLElBbUJBLEVBVkEscUJBSWEsV0FDYiIsImZpbGUiOiIvVXNlcnMvaGFyZGx5ZHJpdmVuL2Rldi9wZXJzb25hbF9zaXRlcy9QUy1OZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG4vLyBpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiXG5cbi8vIGNvbnN0IEluZGV4ID0gKCkgPT4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICAgIDxMYXlvdXQ+XG5cbi8vICAgICAgICAgPHA+SGVsbG8gTmV4dC5qczwvcD5cbi8vICAgICAgICAgPC9MYXlvdXQ+XG4vLyAgICAgPC9kaXY+XG4vLyApXG5cbi8vIGV4cG9ydCBkZWZhdWx0IEluZGV4XG5cblxuLy8gaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0LmpzJ1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuXG4vLyBjb25zdCBQb3N0TGluayA9IHByb3BzID0+IChcbi8vICAgPGxpPlxuLy8gICAgIDxMaW5rIGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuLy8gICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cbi8vICAgICA8L0xpbms+XG4vLyAgIDwvbGk+XG4vLyApXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxMYXlvdXQ+XG4vLyAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4vLyAgICAgICA8dWw+XG4vLyAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkhlbGxvIE5leHQuanNcIiAvPlxuLy8gICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIiAvPlxuLy8gICAgICAgICA8UG9zdExpbmsgdGl0bGU9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIiAvPlxuLy8gICAgICAgPC91bD5cbi8vICAgICA8L0xheW91dD5cbi8vICAgKVxuLy8gfVxuXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbi8vIGNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuLy8gICA8bGk+XG4vLyAgICAgPExpbmsgYXM9e2AvcG9zdHMvJHtwcm9wcy5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwcm9wcy50aXRsZX1gfT5cbi8vICAgICAgIDxhPntwcm9wcy50aXRsZX08L2E+XG4vLyAgICAgPC9MaW5rPlxuLy8gICA8L2xpPlxuLy8gKVxuXG4vLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxMYXlvdXQ+XG4vLyAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4vLyAgICAgICA8dWw+XG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImhlbGxvLW5leHRqc1wiIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiIC8+XG4vLyAgICAgICAgIDxQb3N0TGluayBpZD1cImxlYXJuLW5leHRqc1wiIHRpdGxlPVwiTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiZGVwbG95LW5leHRqc1wiIHRpdGxlPVwiRGVwbG95IGFwcHMgd2l0aCBaZWl0XCIgLz5cbi8vICAgICAgIDwvdWw+XG4vLyAgICAgPC9MYXlvdXQ+XG4vLyAgIClcbi8vIH1cblxuXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuXG4vLyBjb25zdCBJbmRleCA9IChwcm9wcykgPT4gKFxuLy8gICA8TGF5b3V0PlxuLy8gICAgIDxoMT5CYXRtYW4gVFYgU2hvd3M8L2gxPlxuLy8gICAgIDx1bD5cbi8vICAgICAgIHtwcm9wcy5zaG93cy5tYXAoc2hvdyA9PiAoXG4vLyAgICAgICAgIDxsaSBrZXk9e3Nob3cuaWR9PlxuLy8gICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHtzaG93LmlkfWB9IGhyZWY9e2AvcG9zdD9pZD0ke3Nob3cuaWR9YH0+XG4vLyAgICAgICAgICAgICA8YT57c2hvdy5uYW1lfTwvYT5cbi8vICAgICAgICAgICA8L0xpbms+XG4vLyAgICAgICAgIDwvbGk+XG4vLyAgICAgICApKX1cbi8vICAgICA8L3VsPlxuLy8gICA8L0xheW91dD5cbi8vIClcblxuLy8gSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS50dm1hemUuY29tL3NlYXJjaC9zaG93cz9xPWJhdG1hbicpXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG5cbi8vICAgY29uc29sZS5sb2coYFNob3cgZGF0YSBmZXRjaGVkLiBDb3VudDogJHtkYXRhLmxlbmd0aH1gKVxuXG4vLyAgIHJldHVybiB7XG4vLyAgICAgc2hvd3M6IGRhdGEubWFwKGVudHJ5ID0+IGVudHJ5LnNob3cpXG4vLyAgIH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAgIHsgaWQ6ICdoZWxsby1uZXh0anMnLCB0aXRsZTogJ0hlbGxvIE5leHQuanMnIH0sXG4gICAgICAgIHsgaWQ6ICdsZWFybi1uZXh0anMnLCB0aXRsZTogJ0xlYXJuIE5leHQuanMgaXMgYXdlc29tZScgfSxcbiAgICAgICAgeyBpZDogJ2RlcGxveS1uZXh0anMnLCB0aXRsZTogJ0RlcGxveSBhcHBzIHdpdGggWkVJVCcgfVxuICAgIF1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGgxPk15IEJsb2c8L2gxPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtnZXRQb3N0cygpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBhcz17YC9wLyR7cG9zdC5pZH1gfSBocmVmPXtgL3Bvc3Q/dGl0bGU9JHtwb3N0LnRpdGxlfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnRpdGxlfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGgxLFxuICAgICAgICBhIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dhcmFtb25kJztcbiAgICAgICAgfVxuXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICBjb2xvcjogXCJ5ZWxsb3dcIlxuICAgICAgICB9XG5cbiAgICAgICAgaDEge1xuXG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/hardlydriven/dev/personal_sites/PS-Next/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.bb816e1639a279d5c5d9.hot-update.js.map