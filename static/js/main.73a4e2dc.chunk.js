(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){e.exports=n(31)},23:function(e,t,n){},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),c=n(10),r=n.n(c),l=(n(23),n(3)),i=n(4),s=n(12),u=n(11),d=n(13),f=n(34),h=(n(25),function(e){function t(){var e,n;Object(l.a)(this,t);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={advice:"",textColor:"",bgColor:""},n.fetchAdvice=function(){f.a.get("https://api.adviceslip.com/advice").then(function(e){var t=e.data.slip.advice,o=n.generateRandomColors(),a=o.textColor,c=o.bgColor;n.setState({advice:t,textColor:a,bgColor:c})}).catch(function(e){console.log(e)})},n.generateRandomColors=function(){var e=["#e91e63","#9c27b0","#2196f3","#4caf50","#ff9800","#795548"],t=["#F9EBEA","#E8F8F5","#F4ECF7","#FDEDEC","#FEF9E7","#EAECEE"];return{textColor:e[Math.floor(Math.random()*e.length)],bgColor:t[Math.floor(Math.random()*t.length)]}},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){var e=this.state,t=e.advice,n=e.textColor,o=e.bgColor;return a.a.createElement("div",{className:"app",style:{backgroundColor:o}},a.a.createElement("div",{className:"card",style:{color:n}},a.a.createElement("h1",{className:"heading"},t),a.a.createElement("button",{className:"button",onClick:this.fetchAdvice},a.a.createElement("span",null,"Give Me Advice"))))}}]),t}(a.a.Component)),v=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,33)).then(function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),o(e),a(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null))),v()}},[[14,3,2]]]);
//# sourceMappingURL=main.73a4e2dc.chunk.js.map