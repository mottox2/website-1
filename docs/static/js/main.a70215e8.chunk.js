(window["webpackJsonpmake-money-ts"]=window["webpackJsonpmake-money-ts"]||[]).push([[0],{22:function(n,e,t){"use strict";t.r(e);var c=t(0),o=t.n(c),r=t(6),u=t.n(r),i=t(4),a=t(2),b=t(1),l=t(8);function s(){var n=Object(a.a)(["\n            font-size: 36px;\n            text-align: center;\n          "]);return s=function(){return n},n}function d(){var n=Object(a.a)(["\n  user-select: none;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return d=function(){return n},n}function j(){var n=Object(a.a)(["\n  ",";\n  color: red;\n  font-weight: bold;\n  border-bottom: 10px red double;\n"]);return j=function(){return n},n}function O(){var n=Object(a.a)(["\n  ",";\n  color: Blue;\n  font-weight: bold;\n  border-bottom: 10px blue double;\n  transition: 0.5s;\n\n  &:hover {\n    color: greenyellow;\n    border-bottom: 10px yellowgreen double;\n  }\n"]);return O=function(){return n},n}function f(){var n=Object(a.a)(["\n  font-size: 9vw;\n"]);return f=function(){return n},n}function v(){var n=Object(a.a)(["\n  body {\n    background: #113130;\n  }\n"]);return v=function(){return n},n}var m=Object(b.b)(v()),w=Object(b.b)(f()),k=Object(b.b)(O(),w),y=Object(b.b)(j(),w),h=Object(b.b)(d()),p=function(n){var e=n.count,t=n.clicked;return e<10?Object(b.c)("div",{css:k},t?"You need Money.":"MakeMoney.TS"):null},g=function(n){var e=n.count;return e>=10?Object(b.c)("div",{css:y},"You clicked too Money.",Object(b.c)("div",{css:Object(b.b)(s())},e," times~!!!")):null},x=function(){var n=Object(c.useState)(!1),e=Object(i.a)(n,2),t=e[0],o=e[1],r=Object(c.useState)(0),u=Object(i.a)(r,2),a=u[0],s=u[1];return Object(b.c)("div",null,Object(b.c)(l.Helmet,null,Object(b.c)("title",null,"MakeMoney.TS")),Object(b.c)(b.a,{styles:m}),Object(b.c)("div",{onClick:function(){o(!t),s(a+1)},css:h,className:"App"},Object(b.c)(p,{count:a,clicked:t}),Object(b.c)(g,{count:a,clicked:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},9:function(n,e,t){n.exports=t(22)}},[[9,1,2]]]);
//# sourceMappingURL=main.a70215e8.chunk.js.map