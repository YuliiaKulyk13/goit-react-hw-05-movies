"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{3961:function(n,t,e){e.d(t,{O:function(){return l}});var r,a,c=e(7689),u=e(168),o=e(1087),s=e(6444),i=s.ZP.ul(r||(r=(0,u.Z)(["\n  padding: 10px;\n  line-height: 1.3;\n  list-style: none;\n"]))),p=(0,s.ZP)(o.rU)(a||(a=(0,u.Z)(["\n  font-size: 15px;\n  color: #5098ea;\n  text-decoration: none;\n  &:hover,\n  &:focus {\n    color: #dfd357;\n  }\n"]))),f=e(184),l=function(n){var t=n.movies,e=(0,c.TH)();return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(i,{children:t.map((function(n){return(0,f.jsx)("li",{children:(0,f.jsx)(p,{to:"/movies/".concat(n.id),state:{from:e},children:(0,f.jsx)("h3",{children:n.title})})},n.id)}))})})}},6277:function(n,t,e){e.d(t,{Df:function(){return s},IQ:function(){return f},Jh:function(){return l},eO:function(){return p},z1:function(){return i}});var r=e(5861),a=e(7757),c=e.n(a),u=e(1243),o="dd434c778f29331c06da952bd2cda993";u.Z.defaults.baseURL="https://api.themoviedb.org/3/",u.Z.defaults.headers.common.Authorization=o,u.Z.defaults.params={api_key:"".concat(o)};var s=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("trending/movie/day");case 3:return t=n.sent,e=t.data,n.abrupt("return",e);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("search/movie",{params:{query:t}});case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("movie/".concat(t));case 3:return e=n.sent,r=e.data,n.abrupt("return",r);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("movie/".concat(t,"/credits"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.get("movie/".concat(t,"/reviews"));case 3:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(t){return n.apply(this,arguments)}}()},5415:function(n,t,e){e.r(t);var r=e(5861),a=e(9439),c=e(7757),u=e.n(c),o=e(3961),s=e(2791),i=e(6277),p=e(7689),f=e(184);t.default=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),e=t[0],c=t[1],l=(0,p.TH)();return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Df)();case 3:t=n.sent,e=t.results,c(e),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()})),(0,f.jsxs)("main",{children:[(0,f.jsx)("h2",{children:"Trending today \ud83c\udfac "}),e.length>0&&(0,f.jsx)(o.O,{movies:e,location:l})]})}}}]);
//# sourceMappingURL=415.57c94e9d.chunk.js.map