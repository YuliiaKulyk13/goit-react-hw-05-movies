"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[267],{130:function(e,t,n){n.d(t,{O:function(){return i}});var r=n(689),a=n(87),u=n(184),i=function(e){var t=e.movies,n=(0,r.TH)();return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"/movies/".concat(e.id),state:{from:n},children:(0,u.jsx)("h3",{children:e.title})})},e.id)}))})})}},588:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(861),a=n(439),u=n(757),i=n.n(u),o=n(174),s=n(537),c=n(130),l=n(184),h=function(e){var t=e.value,n=e.onChange,r=e.onSubmit;return(0,l.jsx)("div",{children:(0,l.jsxs)("form",{onSubmit:r,children:[(0,l.jsx)("input",{type:"text",name:"movieName",autoComplete:"off",value:t,placeholder:"Search movies",onChange:n}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})})},f=n(455),m=n(791),v=n(87),p=n(689),x=function(){var e,t=(0,m.useState)(""),n=(0,a.Z)(t,2),u=n[0],x=n[1],d=(0,m.useState)([]),g=(0,a.Z)(d,2),j=g[0],S=g[1],b=(0,m.useState)(!1),w=(0,a.Z)(b,2),k=w[0],y=w[1],C=(0,m.useState)(null),Z=(0,a.Z)(C,2),q=Z[0],_=Z[1],A=(0,v.lr)(),P=(0,a.Z)(A,2),T=P[0],H=P[1],O=(0,p.TH)(),z=null!==(e=T.get("query"))&&void 0!==e?e:"",D=""!==u?{query:u}:{};return(0,m.useEffect)((function(){if(""!==z){var e=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.prev=1,e.next=4,(0,f.z1)(z);case 4:if(0!==(t=e.sent).length){e.next=7;break}return e.abrupt("return",o.Am.error("Something went wrong.Please try again!"));case 7:S(t),_(null),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),_(e.t0),o.Am.error("Sorry there are no movies matching your request.Please try again!");case 15:return e.prev=15,y(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,11,15,18]])})));return function(){return e.apply(this,arguments)}}();e()}}),[z]),(0,l.jsxs)("main",{children:[(0,l.jsx)(h,{onSubmit:function(e){if(e.preventDefault(),""===u.trim())return o.Am.warn("Please enter a request!");S([]),x(""),H(D)},value:u,onChange:function(e){x(e.currentTarget.value.toLowerCase())}}),j.length>0&&(0,l.jsx)(c.O,{movies:j,location:O}),q&&(0,l.jsx)("p",{children:q.message}),k&&(0,l.jsx)(s.a,{}),(0,l.jsx)(o.Ix,{autoClose:4e3,position:"top-right"})]})}}}]);
//# sourceMappingURL=267.960de6a6.chunk.js.map