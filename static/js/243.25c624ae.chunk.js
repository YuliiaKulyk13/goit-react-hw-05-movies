"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[243],{5243:function(n,t,e){e.d(t,{VF:function(){return u}});var r,i,a=e(2791),o="#4fa94d",s={"aria-busy":!0,role:"status"},c=e(6444),d=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},l=242.776657104492,p=(0,c.F4)(r||(r=d(["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"],["\n  12.5% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  43.75% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n  100% {\n    stroke-dasharray: ","px, ","px;\n    stroke-dashoffset: -","px;\n  }\n"])),.14*l,l,.11*l,.35*l,l,.35*l,.01*l,l,.99*l),h=(c.ZP.path(i||(i=d(["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"],["\n  stroke-dasharray: ","px, ",";\n  stroke-dashoffset: 0;\n  animation: "," ","s linear infinite;\n"])),.01*l,l,p,1.6),function(n){return{display:n?"flex":"none"}}),f=function(){return f=Object.assign||function(n){for(var t,e=1,r=arguments.length;e<r;e++)for(var i in t=arguments[e])Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i]);return n},f.apply(this,arguments)},u=function(n){var t=n.height,e=void 0===t?90:t,r=n.width,i=void 0===r?80:r,c=n.radius,d=void 0===c?12.5:c,l=n.color,p=void 0===l?o:l,u=n.secondaryColor,y=void 0===u?o:u,k=n.ariaLabel,m=void 0===k?"mutating-dots-loading":k,v=n.wrapperStyle,b=n.wrapperClass,g=n.visible,x=void 0===g||g;return a.createElement("div",f({style:f(f({},h(x)),v),className:b,"data-testid":"mutating-dots-loading","aria-label":m},s),a.createElement("svg",{id:"goo-loader",width:i,height:e,"data-testid":"mutating-dots-svg"},a.createElement("filter",{id:"fancy-goo"},a.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),a.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),a.createElement("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})),a.createElement("g",{filter:"url(#fancy-goo)"},a.createElement("animateTransform",{id:"mainAnim",attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 50 50",to:"359 50 50",dur:"1.2s",repeatCount:"indefinite"}),a.createElement("circle",{cx:"50%",cy:"40",r:d,fill:p},a.createElement("animate",{id:"cAnim1",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0;cAnim1.end+0.2s",calcMode:"spline",values:"40;20;40",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})),a.createElement("circle",{cx:"50%",cy:"60",r:d,fill:y},a.createElement("animate",{id:"cAnim2",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0.4s;cAnim2.end+0.2s",calcMode:"spline",values:"60;80;60",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})))))},y=function(n,t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if("undefined"!==typeof e[n])return e[n];if(n&&n.indexOf(".")>0){for(var r=n.split("."),i=r.length,a=e[r[0]],o=1;null!=a&&o<i;)a=a[r[o]],o+=1;if("undefined"!==typeof a)return a}return t}};var k,m,v,b=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},g=(0,c.F4)(k||(k=b(["\n to {\n    transform: rotate(360deg);\n  }\n"],["\n to {\n    transform: rotate(360deg);\n  }\n"])));c.ZP.svg(m||(m=b(["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"],["\n  animation: "," 0.75s steps(12, end) infinite;\n  animation-duration: ","s;\n"])),g,y("speed","0.75")),c.ZP.polyline(v||(v=b(["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"],["\n  stroke-width: ","px;\n  stroke-linecap: round;\n\n  &:nth-child(12n + 0) {\n    stroke-opacity: 0.08;\n  }\n\n  &:nth-child(12n + 1) {\n    stroke-opacity: 0.17;\n  }\n\n  &:nth-child(12n + 2) {\n    stroke-opacity: 0.25;\n  }\n\n  &:nth-child(12n + 3) {\n    stroke-opacity: 0.33;\n  }\n\n  &:nth-child(12n + 4) {\n    stroke-opacity: 0.42;\n  }\n\n  &:nth-child(12n + 5) {\n    stroke-opacity: 0.5;\n  }\n\n  &:nth-child(12n + 6) {\n    stroke-opacity: 0.58;\n  }\n\n  &:nth-child(12n + 7) {\n    stroke-opacity: 0.66;\n  }\n\n  &:nth-child(12n + 8) {\n    stroke-opacity: 0.75;\n  }\n\n  &:nth-child(12n + 9) {\n    stroke-opacity: 0.83;\n  }\n\n  &:nth-child(12n + 11) {\n    stroke-opacity: 0.92;\n  }\n"])),(function(n){return n.width}));var x,w,E,P=function(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n},O=(0,c.F4)(x||(x=P(["\n to {\n    stroke-dashoffset: 136;\n  }\n"],["\n to {\n    stroke-dashoffset: 136;\n  }\n"])));c.ZP.polygon(w||(w=P(["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"],["\n  stroke-dasharray: 17;\n  animation: "," 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;\n"])),O),c.ZP.svg(E||(E=P(["\n  transform-origin: 50% 65%;\n"],["\n  transform-origin: 50% 65%;\n"])))}}]);
//# sourceMappingURL=243.25c624ae.chunk.js.map