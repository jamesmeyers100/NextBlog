(window.webpackJsonp=window.webpackJsonp||[]).push([["268e"],{BR8T:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){var e=n("YbiN");return{page:e.default||e}}])},YbiN:function(e,t,n){"use strict";n.r(t);var s=n("ln6h"),r=n.n(s),a=n("O40h"),o=n("MX0m"),l=n.n(o),u=n("q1tI"),c=n.n(u),i=n("3Hq7"),p=n("YFqc"),d=n.n(p),f=n("zgjP"),m=n.n(f),w=function(e){return c.a.createElement(i.a,null,c.a.createElement("div",{style:{alignSelf:"center",flex:1},className:"jsx-467826119"},c.a.createElement("div",{className:"jsx-467826119"},c.a.createElement("h1",{className:"jsx-467826119"},"Check Out My [OLD] Blog"),c.a.createElement("p",{className:"jsx-467826119"},"Eventually: Links will route to page with post and NOT to Blogger site")),c.a.createElement("div",{className:"jsx-467826119"},c.a.createElement("ul",{className:"jsx-467826119"},e.data.items.map(function(e){return c.a.createElement("li",{key:e.id,className:"jsx-467826119"},c.a.createElement(d.a,{href:e.url},c.a.createElement("a",{className:"jsx-467826119"},e.title)))})))),c.a.createElement(l.a,{id:"467826119"},["a.jsx-467826119{color:purple;-webkit-text-decoration:none;text-decoration:none;}","a.jsx-467826119:hover{color:purple;opacity:0.5;}"]))};w.getInitialProps=Object(a.default)(r.a.mark(function e(){var t,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m()("https://www.googleapis.com/blogger/v3/blogs/5247624635318920606/posts?key=AIzaSyAednmRa-8f4Cl2qCFaOvpTGqauGyOoKCw");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,console.log("this is getInitialProps to Blogger",n),e.abrupt("return",{data:n});case 8:case"end":return e.stop()}},e)})),t.default=w},"m/Gl":function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,s){var r=new XMLHttpRequest,a=[],o=[],l={},u=function(){return{ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(JSON.parse(r.responseText))},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:u,headers:{keys:function(){return a},entries:function(){return o},get:function(e){return l[e.toLowerCase()]},has:function(e){return e.toLowerCase()in l}}}};for(var c in r.open(t.method||"get",e,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(e,t,n){a.push(t=t.toLowerCase()),o.push([t,n]),l[t]=l[t]?l[t]+","+n:n}),n(u())},r.onerror=s,r.withCredentials="include"==t.credentials,t.headers)r.setRequestHeader(c,t.headers[c]);r.send(t.body||null)})}},zgjP:function(e,t,n){e.exports=window.fetch||(window.fetch=n("m/Gl").default||n("m/Gl"))}},[["BR8T","5d41","9da1"]]]);