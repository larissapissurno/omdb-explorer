(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1423:function(n,e,t){"use strict";t.r(e);var a=t(5),r=t.n(a),i=t(29),o=t.n(i),c=t(23),l=t.n(c),d=t(2),s=t.n(d),u=t(712),p=t.n(u),m=t(713),g=t.n(m),f=t(714),h=t.n(f),x=t(654),b=t(13),v=t(20),w=t(9),y=t.n(w),E=t(17),k=t(10),j=t.n(k),D=t(128),F=t.n(D);function O(){var n=y()(["\n  position: relative;\n  padding: 15px;\n  font-size: 15px;\n  text-align: center;\n  background: ",";\n  color: #222;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: 0.3s ease;\n  align-self: center;\n  margin-top: 35px;\n\n  &:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transform: scale3d(1.06, 1.4, 1);\n    box-shadow: inset 0 0 0 2px ",";\n    border-radius: inherit;\n    transition: 0.35s;\n    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);\n    opacity: 0;\n    visibility: hidden;\n  }\n\n  &:hover {\n    background: transparent;\n    color: #fff;\n\n    &:after {\n      visibility: visible;\n      opacity: 1;\n      transform: scale3d(1, 1, 1);\n    }\n  }\n\n  @media (max-width: 1120px) {\n    margin-top: 30px;\n  }\n"]);return O=function(){return n},n}function T(){var n=y()(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  span {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    border: 2px solid ",";\n    color: ",";\n    font-weight: bold;\n    font-size: 16px;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 145px;\n    margin: 105px 0 55px;\n\n    @media (max-width: 1225px) {\n      margin-top: 95px;\n    }\n\n    @media (max-width: 1120px) {\n      margin: 50px 0 20px;\n      height: auto;\n\n      img {\n        max-width: 90%;\n      }\n    }\n  }\n\n  p {\n    max-width: 270px;\n    text-align: center;\n    color: #87868b;\n    font-size: 16px;\n    line-height: 26px;\n\n    strong {\n      color: ",";\n    }\n\n    @media (max-width: 768px) {\n      font-size: 15px;\n      line-height: 25px;\n    }\n  }\n"]);return T=function(){return n},n}function z(){var n=y()(["\n  position: relative;\n  background: url(",");\n  background-size: cover;\n  border-radius: 8px;\n  transition: 0.2s;\n  padding: 64px;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n  border: 2px solid #0b0a0d;\n\n  @media (max-width: 1225px) {\n    padding: 64px 48px;\n  }\n\n  &:hover {\n    transform: translateY(",");\n    ","\n  }\n\n  ","\n\n  @media (max-width: 1120px) {\n    background-position: center bottom;\n    padding: 48px;\n  }\n\n  @media (max-width: 768px) {\n    padding: 30px;\n  }\n"]);return z=function(){return n},n}function C(){var n=y()(["\n  display: flex;\n"]);return C=function(){return n},n}function G(){var n=y()(["\n  width: 100%;\n  max-width: 1426px;\n  padding: 30px;\n\n  > div {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: minmax(650px, auto);\n    grid-column-gap: 24px;\n    grid-row-gap: 24px;\n\n    @media (max-height: 825px) {\n      grid-template-rows: minmax(600px, auto);\n    }\n  }\n\n  @media (max-width: 1120px) {\n    > div {\n      grid-template-columns: 1fr;\n      grid-template-rows: repeat(3, minmax(300px, auto));\n    }\n  }\n\n  @media (max-width: 768px) {\n    padding: 20px;\n  }\n"]);return G=function(){return n},n}var I=j.a.div(G()),S=j()(E.Link).attrs((function(n){return!n.to&&{as:"div"}}))(C()),q=j.a.div(z(),F.a,(function(n){return n.disabled?"0px":"-7px"}),(function(n){var e=n.disabled,t=n.color;return!e&&"border-color: ".concat(t,";")}),(function(n){return!n.disabled&&"\n      &:active {\n        margin: 2px;\n        border-color: #56458b;\n      }\n  "})),B=j.a.div(T(),(function(n){return n.color}),(function(n){return n.color}),(function(n){return n.color})),P=j.a.a(O(),(function(n){return n.color}),(function(n){return n.color}));e.default=function(){var n=Object(d.useState)([]),e=l()(n,2),t=e[0],a=e[1],i=Object(d.useState)(!0),c=l()(i,2),u=c[0],m=c[1];function f(n){var e="gostack"===n?"bootcamp":n;return t.includes("gostack-11")&&"bootcamp"===e?"/dashboard/gostack-11":t.includes(e)?"/dashboard/".concat(n):null}Object(d.useEffect)((function(){function n(){return(n=o()(r.a.mark((function n(){var e,t,i;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,b.a.get("dashboard");case 3:e=n.sent,t=e.data,a(t),setTimeout((function(){m(!1)}),500),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(0),i=n.t0.response,Object(v.c)(i);case 13:case"end":return n.stop()}}),n,null,[[0,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[]);var w=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(x.b,{screen:"desktop",style:{display:"flex",height:"100%",flexDirection:"column",justifyContent:"space-between",alignItems:"center"}},s.a.createElement(x.a,{type:"image",width:48,height:48}),s.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",marginTop:15}},s.a.createElement(x.a,{type:"image",width:145,height:145}),s.a.createElement(x.a,{type:"title",width:145,height:30})),s.a.createElement("div",{style:{width:"80%"}},s.a.createElement(x.a,{type:"body",lines:3}))),s.a.createElement(x.b,{screen:"mobile",style:{display:"flex",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}},s.a.createElement(x.a,{type:"image",width:36,height:36}),s.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%",marginTop:15}},s.a.createElement(x.a,{type:"image",width:95,height:95}),s.a.createElement(x.a,{type:"title",width:80,height:30})),s.a.createElement("div",{style:{width:"80%"}},s.a.createElement(x.a,{type:"body",lines:2}))))};return s.a.createElement(I,null,s.a.createElement("div",null,s.a.createElement(x.d,{loading:u},s.a.createElement(S,{to:"/journey/starter"},s.a.createElement(q,{disabled:!f("starter"),color:"#7159C1"},s.a.createElement(x.c,{template:w},s.a.createElement(B,{color:"#7159C1"},s.a.createElement("span",null,"01"),s.a.createElement("div",null,s.a.createElement("img",{src:h.a,alt:"Starter Cursos Gratuitos"})),s.a.createElement("p",null,s.a.createElement("strong",null,"Torne-se um programador desejado")," no mercado com esses cursos gratuitos"))))),s.a.createElement(S,{to:f("launchbase")},s.a.createElement(q,{disabled:!f("launchbase"),color:"#FD951F"},s.a.createElement(x.c,{template:w},s.a.createElement(B,{color:"#FD951F"},s.a.createElement("span",null,"02"),s.a.createElement("div",null,s.a.createElement("img",{src:g.a,alt:"LaunchBase Bootcamp"})),s.a.createElement("p",null,s.a.createElement("strong",null,"Domine programação do zero")," e tenha acesso às melhores oportunidades do mercado")),!f("launchbase")&&s.a.createElement(P,{href:"https://rocketseat.com.br/baseweek-1/inscricao",target:"_blank",rel:"noopener noreferrer",color:"#FD951F"},s.a.createElement("strong",null,"Garanta sua vaga")," para a próxima turma!")))),s.a.createElement(S,{to:f("gostack")},s.a.createElement(q,{disabled:!f("gostack"),color:"#04D361"},s.a.createElement(x.c,{template:w},s.a.createElement(B,{color:"#04D361"},s.a.createElement("span",null,"03"),s.a.createElement("div",null,s.a.createElement("img",{src:p.a,alt:"GoStack Bootcamp"})),s.a.createElement("p",null,s.a.createElement("strong",null,"Treinamento imersivo")," nas tecnologias mais modernas de desenvolvimento web e mobile")),!f("gostack")&&s.a.createElement(P,{href:"https://rocketseat.com.br/bootcamp",target:"_blank",rel:"noopener noreferrer",color:"#04D361"},s.a.createElement("strong",null,"Garanta sua vaga")," para a próxima turma!")))))))}},637:function(n,e,t){"use strict";var a=t(7),r=t.n(a),i=t(2),o=t.n(i),c=t(639);function l(n){var e=n.type,t=n.lines,a=n.width,r=n.height;return o.a.createElement(o.a.Fragment,null,function(){for(var n=[],i=1;i<=t;i+=1)n.push(o.a.createElement(c.a,{key:"key-".concat(i),type:e,width:a,height:r}));return n}())}l.propTypes={type:r.a.string,lines:r.a.number,width:r.a.number,height:r.a.number},l.defaultProps={type:"text",lines:1,width:0,height:0},e.a=l},639:function(n,e,t){"use strict";var a=t(9),r=t.n(a),i=t(652),o=t(10),c=t.n(o);function l(){var n=r()(["\n  animation: "," 1.2s ease-in-out infinite;\n  height: 13px;\n\n  background-image: linear-gradient(\n    90deg,\n    rgba(0, 0, 0, 0),\n    ",",\n    rgba(0, 0, 0, 0)\n  );\n\n  background-color: ",";\n  background-size: 200px 100%;\n  background-repeat: no-repeat;\n  border-radius: 3px;\n  display: inline-block;\n  line-height: 1;\n  width: 100%;\n  opacity: 0.1;\n\n  ","\n\n  ","\n\n  ","\n\n  ","\n  ","\n"]);return l=function(){return n},n}function d(){var n=r()(["\n  0% {\n      background-position: -200px 0;\n  }\n  100% {\n      background-position: calc(200px + 100%) 0;\n  }\n"]);return d=function(){return n},n}var s=Object(o.keyframes)(d()),u=c.a.span(l(),s,Object(i.lighten)(1,"#fff"),Object(i.darken)(.3,"#fff"),(function(n){return"image"===n.type&&"\n      height: 60px;\n      width: 60px;\n      border-radius: 150px;\n    "}),(function(n){return"title"===n.type&&"\n      height: 25px;\n      width: 86%;\n      margin: 20px 0;\n\n      @media (max-width: 768px) {\n        width: 50%;\n      }\n    "}),(function(n){return"body"===n.type&&"\n      width: 100%;\n      margin: 3px 0;\n    "}),(function(n){var e=n.width;return e&&"width: ".concat(e,"px;")}),(function(n){var e=n.height;return e&&"height: ".concat(e,"px;")}));e.a=u},654:function(n,e,t){"use strict";t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return l.a})),t.d(e,"c",(function(){return f})),t.d(e,"d",(function(){return x}));var a=t(9),r=t.n(a),i=t(10);function o(){var n=r()(["\n  ","\n\n  ","\n"]);return o=function(){return n},n}var c=t.n(i).a.div(o(),(function(n){return"mobile"===n.screen&&"\n      @media (min-width: 769px) {\n        display: none !important;\n      }\n  "}),(function(n){return"desktop"===n.screen&&"\n      @media (max-width: 768px) {\n        display: none !important;\n      }\n  "})),l=t(637),d=t(7),s=t.n(d),u=t(2),p=t.n(u),m=Object(u.createContext)({loading:!1});function g(n){var e=n.template,t=n.children,a=Object(u.useContext)(m).loading,r=e;return p.a.createElement(p.a.Fragment,null,a?p.a.createElement(p.a.Fragment,null,p.a.createElement(r,null)):p.a.createElement(p.a.Fragment,null,t))}g.propTypes={template:s.a.oneOfType([s.a.element,s.a.func]).isRequired,children:s.a.node.isRequired};var f=g;function h(n){var e=n.children,t=n.loading;return p.a.createElement(m.Provider,{value:{loading:t}},e)}h.propTypes={children:s.a.arrayOf(s.a.element).isRequired,loading:s.a.bool},h.defaultProps={loading:!1};var x=h},712:function(n,e,t){n.exports=t.p+"static/83a178a0653dab1d55e2ed7946465975.svg"},713:function(n,e,t){n.exports=t.p+"static/0828532024cb46921a6b5e941f8d788d.svg"},714:function(n,e,t){n.exports=t.p+"static/64c237ccff807c054339a62d53b4b402.svg"}}]);