"use strict";(self.webpackChunkdumi2_demo=self.webpackChunkdumi2_demo||[]).push([[433,837],{29577:function(T,i,e){e.r(i);var c=e(27424),o=e.n(c),u=e(67294),s=e(37837),a=e(85893),Y=function(){var l=(0,u.useState)((0,s.formatTime)(Date.now(),"YYYY\u5E74MM\u6708DD\u65E5 hh:mm:ss")),v=o()(l,2),M=v[0],F=v[1],y=(0,u.useState)(),f=o()(y,2),E=f[0],h=f[1];(0,u.useEffect)(function(){var r=1673850986e3,t=(0,s.formatTime)(r);h(t)},[]),(0,u.useEffect)(function(){var r=setInterval(function(){var t=Date.now(),n=(0,s.formatTime)(t,"YYYY\u5E74MM\u6708DD\u65E5 hh:mm:ss");F(n)},1e3);return function(){clearInterval(r)}},[]);var D=u.createRef(),m=function(){var t,n=(t=D.current)===null||t===void 0?void 0:t.value;if(n){var d=(0,s.formatTime)(Number(n),"YYYY\u5E74MM\u6708DD\u65E5 hh:mm:ss");h(d)}};return(0,a.jsxs)(a.Fragment,{children:["\u5F53\u524D\u65F6\u95F4\uFF1A",M,(0,a.jsx)("hr",{}),"\u6307\u5B9A\u65F6\u95F4\u8F6C\u6362\uFF1A",(0,a.jsx)("input",{type:"number",ref:D,defaultValue:1673850986e3}),"\xA0",(0,a.jsx)("button",{type:"button",onClick:m,children:"\u8F6C\u6362"}),"\xA0",E]})};i.default=Y},37837:function(T,i,e){e.r(i),e.d(i,{Button:function(){return Y},Foo:function(){return s},PrimaryButton:function(){return E},formatTime:function(){return D}});var c=e(67294),o=e(85893),u=function(r){return(0,o.jsx)("h4",{children:r.title})},s=u,a=function(r){var t=r.type,n=t===void 0?"default":t,d=r.children,P=r.onClick;return(0,o.jsx)("button",{type:"button",className:"dumi-btn ".concat(n?"dumi-btn-"+n:""),onClick:P,children:d})},Y=(0,c.memo)(a),_=e(42122),l=e.n(_),v=e(70215),M=e.n(v),F=e(95988),y=["children"],f=function(r){var t=r.children,n=M()(r,y);return(0,o.jsx)(F.ZP,l()(l()({},n),{},{type:"primary",children:t}))},E=(0,c.memo)(f);function h(m){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"YYYY-MM-DD hh:mm:ss",t=new Date(m),n=t.getFullYear(),d=("0"+(t.getMonth()+1)).slice(-2),P=("0"+t.getDate()).slice(-2),j=("0"+t.getHours()).slice(-2),A=("0"+t.getMinutes()).slice(-2),B=("0"+t.getSeconds()).slice(-2),C={YYYY:String(n),MM:d,DD:P,hh:j,mm:A,ss:B};return r.replace(/YYYY|MM|DD|hh|mm|ss/g,function(g){return C[g]})}var D=h}}]);
