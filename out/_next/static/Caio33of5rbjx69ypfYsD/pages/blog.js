(window.webpackJsonp=window.webpackJsonp||[]).push([["268e"],{BR8T:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){var e=n("YbiN");return{page:e.default||e}}])},YbiN:function(e,t,n){"use strict";n.r(t);var r=n("ln6h"),o=n.n(r),s=n("O40h"),a=n("q1tI"),u=n.n(a),l=n("3Hq7"),i=n("YFqc"),c=n.n(i),p=n("zgjP"),f=n.n(p),d=function(e){return u.a.createElement(l.a,null,u.a.createElement("h1",null,"Links to Blog Posts"),u.a.createElement("p",null,"Eventually: Links will route to page with post and NOT to Blogger site"),u.a.createElement("ul",null,e.data.items.map(function(e){return u.a.createElement("li",{key:e.id},u.a.createElement(c.a,{href:e.url},u.a.createElement("a",null,e.title)))})))};d.getInitialProps=Object(s.default)(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()("https://www.googleapis.com/blogger/v3/blogs/5247624635318920606/posts?key=AIzaSyAednmRa-8f4Cl2qCFaOvpTGqauGyOoKCw");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log("this is getInitialProps to Blogger",n),e.abrupt("return",{data:n});case 8:case"end":return e.stop()}},e)})),t.default=d},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest,s=[],a=[],u={},l=function(){return{ok:2==(o.status/100|0),statusText:o.statusText,status:o.status,url:o.responseURL,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(JSON.parse(o.responseText))},blob:function(){return Promise.resolve(new Blob([o.response]))},clone:l,headers:{keys:function(){return s},entries:function(){return a},get:function(e){return u[e.toLowerCase()]},has:function(e){return e.toLowerCase()in u}}}};for(var i in o.open(t.method||"get",e,!0),o.onload=function(){o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){s.push(t=t.toLowerCase()),a.push([t,n]),u[t]=u[t]?u[t]+","+n:n}),n(l())},o.onerror=r,o.withCredentials="include"==t.credentials,t.headers)o.setRequestHeader(i,t.headers[i]);o.send(t.body||null)})}},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["BR8T","5d41","9da1"]]]);