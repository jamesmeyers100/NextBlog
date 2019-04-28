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
    className: "jsx-2117435333"
  }, "My Blog"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-2117435333"
  }, getPosts().map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: post.id,
      className: "jsx-2117435333"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      as: "/p/".concat(post.id),
      href: "/post?title=".concat(post.title)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2117435333"
    }, post.title)));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2117435333"
  }, "h1.jsx-2117435333,a.jsx-2117435333{font-family:'Garamond';}ul.jsx-2117435333{padding:0;}li.jsx-2117435333{list-style:none;margin:5px 0;}a.jsx-2117435333{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-2117435333:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJkbHlkcml2ZW4vZGV2L3BlcnNvbmFsX3NpdGVzL1BTLU5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEh3QixBQUlrQyxBQUliLEFBSU0sQUFLSyxBQUtULFVBYmQsRUFjQSxJQVZlLE9BUmYsTUFTQSxxQkFJYSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9oYXJkbHlkcml2ZW4vZGV2L3BlcnNvbmFsX3NpdGVzL1BTLU5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbi8vIGltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcblxuLy8gY29uc3QgSW5kZXggPSAoKSA9PiAoXG4vLyAgICAgPGRpdj5cbi8vICAgICAgICAgPExheW91dD5cblxuLy8gICAgICAgICA8cD5IZWxsbyBOZXh0LmpzPC9wPlxuLy8gICAgICAgICA8L0xheW91dD5cbi8vICAgICA8L2Rpdj5cbi8vIClcblxuLy8gZXhwb3J0IGRlZmF1bHQgSW5kZXhcblxuXG4vLyBpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanMnXG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbi8vIGNvbnN0IFBvc3RMaW5rID0gcHJvcHMgPT4gKFxuLy8gICA8bGk+XG4vLyAgICAgPExpbmsgaHJlZj17YC9wb3N0P3RpdGxlPSR7cHJvcHMudGl0bGV9YH0+XG4vLyAgICAgICA8YT57cHJvcHMudGl0bGV9PC9hPlxuLy8gICAgIDwvTGluaz5cbi8vICAgPC9saT5cbi8vIClcbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPExheW91dD5cbi8vICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbi8vICAgICAgIDx1bD5cbi8vICAgICAgICAgPFBvc3RMaW5rIHRpdGxlPVwiSGVsbG8gTmV4dC5qc1wiIC8+XG4vLyAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkxlYXJuIE5leHQuanMgaXMgYXdlc29tZVwiIC8+XG4vLyAgICAgICAgIDxQb3N0TGluayB0aXRsZT1cIkRlcGxveSBhcHBzIHdpdGggWmVpdFwiIC8+XG4vLyAgICAgICA8L3VsPlxuLy8gICAgIDwvTGF5b3V0PlxuLy8gICApXG4vLyB9XG5cbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuLy8gY29uc3QgUG9zdExpbmsgPSBwcm9wcyA9PiAoXG4vLyAgIDxsaT5cbi8vICAgICA8TGluayBhcz17YC9wb3N0cy8ke3Byb3BzLmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Byb3BzLnRpdGxlfWB9PlxuLy8gICAgICAgPGE+e3Byb3BzLnRpdGxlfTwvYT5cbi8vICAgICA8L0xpbms+XG4vLyAgIDwvbGk+XG4vLyApXG5cbi8vIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2coKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPExheW91dD5cbi8vICAgICAgIDxoMT5NeSBCbG9nPC9oMT5cbi8vICAgICAgIDx1bD5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwiaGVsbG8tbmV4dGpzXCIgdGl0bGU9XCJIZWxsbyBOZXh0LmpzXCIgLz5cbi8vICAgICAgICAgPFBvc3RMaW5rIGlkPVwibGVhcm4tbmV4dGpzXCIgdGl0bGU9XCJMZWFybiBOZXh0LmpzIGlzIGF3ZXNvbWVcIiAvPlxuLy8gICAgICAgICA8UG9zdExpbmsgaWQ9XCJkZXBsb3ktbmV4dGpzXCIgdGl0bGU9XCJEZXBsb3kgYXBwcyB3aXRoIFplaXRcIiAvPlxuLy8gICAgICAgPC91bD5cbi8vICAgICA8L0xheW91dD5cbi8vICAgKVxuLy8gfVxuXG5cbi8vIGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vIGltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbi8vIGNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiAoXG4vLyAgIDxMYXlvdXQ+XG4vLyAgICAgPGgxPkJhdG1hbiBUViBTaG93czwvaDE+XG4vLyAgICAgPHVsPlxuLy8gICAgICAge3Byb3BzLnNob3dzLm1hcChzaG93ID0+IChcbi8vICAgICAgICAgPGxpIGtleT17c2hvdy5pZH0+XG4vLyAgICAgICAgICAgPExpbmsgYXM9e2AvcC8ke3Nob3cuaWR9YH0gaHJlZj17YC9wb3N0P2lkPSR7c2hvdy5pZH1gfT5cbi8vICAgICAgICAgICAgIDxhPntzaG93Lm5hbWV9PC9hPlxuLy8gICAgICAgICAgIDwvTGluaz5cbi8vICAgICAgICAgPC9saT5cbi8vICAgICAgICkpfVxuLy8gICAgIDwvdWw+XG4vLyAgIDwvTGF5b3V0PlxuLy8gKVxuXG4vLyBJbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vc2VhcmNoL3Nob3dzP3E9YmF0bWFuJylcbi8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuLy8gICBjb25zb2xlLmxvZyhgU2hvdyBkYXRhIGZldGNoZWQuIENvdW50OiAke2RhdGEubGVuZ3RofWApXG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBzaG93czogZGF0YS5tYXAoZW50cnkgPT4gZW50cnkuc2hvdylcbi8vICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBJbmRleFxuXG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuZnVuY3Rpb24gZ2V0UG9zdHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgeyBpZDogJ2hlbGxvLW5leHRqcycsIHRpdGxlOiAnSGVsbG8gTmV4dC5qcycgfSxcbiAgICAgICAgeyBpZDogJ2xlYXJuLW5leHRqcycsIHRpdGxlOiAnTGVhcm4gTmV4dC5qcyBpcyBhd2Vzb21lJyB9LFxuICAgICAgICB7IGlkOiAnZGVwbG95LW5leHRqcycsIHRpdGxlOiAnRGVwbG95IGFwcHMgd2l0aCBaRUlUJyB9XG4gICAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8aDE+TXkgQmxvZzwvaDE+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAge2dldFBvc3RzKCkubWFwKHBvc3QgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGFzPXtgL3AvJHtwb3N0LmlkfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3Bvc3QudGl0bGV9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Bvc3QudGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDEsXG4gICAgICAgIGEge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2FyYW1vbmQnO1xuICAgICAgICB9XG5cbiAgICAgICAgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=/Users/hardlydriven/dev/personal_sites/PS-Next/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.bd813c618444b7d716eb.hot-update.js.map