import{d as Qn,l as ze}from"./logo-Bo5sEgQN.js";import{_ as Jn,i as Fe}from"./logo_white-hEdzsGgl.js";import{c as j,o as z,b as p,H as ta,I as ea,m as na,g as kt,j as aa,p as ra,i as Ft,Q as Lt,E as oa,h as at,n as R,e as J,u as $,f as Qt,G as ia,a as Dt,F as sa,q as la,t as Le}from"./app-CVm8LZvq.js";function fa(t,e){return z(),j("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[p("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z","clip-rule":"evenodd"})])}const De="/build/assets/gobierno-VHX8UfDK.webp";var gn={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(ea,function(){return function(n){function a(o){if(r[o])return r[o].exports;var i=r[o]={exports:{},id:o,loaded:!1};return n[o].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}var r={};return a.m=n,a.c=r,a.p="dist/",a(0)}([function(n,a,r){function o(w){return w&&w.__esModule?w:{default:w}}var i=Object.assign||function(w){for(var D=1;D<arguments.length;D++){var X=arguments[D];for(var ft in X)Object.prototype.hasOwnProperty.call(X,ft)&&(w[ft]=X[ft])}return w},l=r(1),f=(o(l),r(6)),s=o(f),u=r(7),d=o(u),m=r(8),y=o(m),k=r(9),_=o(k),S=r(10),h=o(S),v=r(11),O=o(v),I=r(14),M=o(I),F=[],Y=!1,E={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},q=function(){var w=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(w&&(Y=!0),Y)return F=(0,O.default)(F,E),(0,h.default)(F,E.once),F},lt=function(){F=(0,M.default)(),q()},x=function(){F.forEach(function(w,D){w.node.removeAttribute("data-aos"),w.node.removeAttribute("data-aos-easing"),w.node.removeAttribute("data-aos-duration"),w.node.removeAttribute("data-aos-delay")})},g=function(w){return w===!0||w==="mobile"&&_.default.mobile()||w==="phone"&&_.default.phone()||w==="tablet"&&_.default.tablet()||typeof w=="function"&&w()===!0},A=function(w){E=i(E,w),F=(0,M.default)();var D=document.all&&!window.atob;return g(E.disable)||D?x():(E.disableMutationObserver||y.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),E.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",E.easing),document.querySelector("body").setAttribute("data-aos-duration",E.duration),document.querySelector("body").setAttribute("data-aos-delay",E.delay),E.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?q(!0):E.startEvent==="load"?window.addEventListener(E.startEvent,function(){q(!0)}):document.addEventListener(E.startEvent,function(){q(!0)}),window.addEventListener("resize",(0,d.default)(q,E.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(q,E.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)(function(){(0,h.default)(F,E.once)},E.throttleDelay)),E.disableMutationObserver||y.default.ready("[data-aos]",lt),F)};n.exports={init:A,refresh:q,refreshHard:lt}},function(n,a){},,,,,function(n,a){(function(r){function o(g,A,w){function D(P){var W=V,dt=Z;return V=Z=void 0,ct=P,L=g.apply(dt,W)}function X(P){return ct=P,T=setTimeout(vt,A),ut?D(P):L}function ft(P){var W=P-U,dt=P-ct,je=A-W;return nt?lt(je,Q-dt):je}function bt(P){var W=P-U,dt=P-ct;return U===void 0||W>=A||W<0||nt&&dt>=Q}function vt(){var P=x();return bt(P)?zt(P):void(T=setTimeout(vt,ft(P)))}function zt(P){return T=void 0,N&&V?D(P):(V=Z=void 0,L)}function Zt(){T!==void 0&&clearTimeout(T),ct=0,V=U=Z=T=void 0}function _t(){return T===void 0?L:zt(x())}function K(){var P=x(),W=bt(P);if(V=arguments,Z=this,U=P,W){if(T===void 0)return X(U);if(nt)return T=setTimeout(vt,A),D(U)}return T===void 0&&(T=setTimeout(vt,A)),L}var V,Z,Q,L,T,U,ct=0,ut=!1,nt=!1,N=!0;if(typeof g!="function")throw new TypeError(m);return A=u(A)||0,l(w)&&(ut=!!w.leading,nt="maxWait"in w,Q=nt?q(u(w.maxWait)||0,A):Q,N="trailing"in w?!!w.trailing:N),K.cancel=Zt,K.flush=_t,K}function i(g,A,w){var D=!0,X=!0;if(typeof g!="function")throw new TypeError(m);return l(w)&&(D="leading"in w?!!w.leading:D,X="trailing"in w?!!w.trailing:X),o(g,A,{leading:D,maxWait:A,trailing:X})}function l(g){var A=typeof g>"u"?"undefined":d(g);return!!g&&(A=="object"||A=="function")}function f(g){return!!g&&(typeof g>"u"?"undefined":d(g))=="object"}function s(g){return(typeof g>"u"?"undefined":d(g))=="symbol"||f(g)&&E.call(g)==k}function u(g){if(typeof g=="number")return g;if(s(g))return y;if(l(g)){var A=typeof g.valueOf=="function"?g.valueOf():g;g=l(A)?A+"":A}if(typeof g!="string")return g===0?g:+g;g=g.replace(_,"");var w=h.test(g);return w||v.test(g)?O(g.slice(2),w?2:8):S.test(g)?y:+g}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},m="Expected a function",y=NaN,k="[object Symbol]",_=/^\s+|\s+$/g,S=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,v=/^0o[0-7]+$/i,O=parseInt,I=(typeof r>"u"?"undefined":d(r))=="object"&&r&&r.Object===Object&&r,M=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,F=I||M||Function("return this")(),Y=Object.prototype,E=Y.toString,q=Math.max,lt=Math.min,x=function(){return F.Date.now()};n.exports=i}).call(a,function(){return this}())},function(n,a){(function(r){function o(x,g,A){function w(N){var P=K,W=V;return K=V=void 0,U=N,Q=x.apply(W,P)}function D(N){return U=N,L=setTimeout(bt,g),ct?w(N):Q}function X(N){var P=N-T,W=N-U,dt=g-P;return ut?q(dt,Z-W):dt}function ft(N){var P=N-T,W=N-U;return T===void 0||P>=g||P<0||ut&&W>=Z}function bt(){var N=lt();return ft(N)?vt(N):void(L=setTimeout(bt,X(N)))}function vt(N){return L=void 0,nt&&K?w(N):(K=V=void 0,Q)}function zt(){L!==void 0&&clearTimeout(L),U=0,K=T=V=L=void 0}function Zt(){return L===void 0?Q:vt(lt())}function _t(){var N=lt(),P=ft(N);if(K=arguments,V=this,T=N,P){if(L===void 0)return D(T);if(ut)return L=setTimeout(bt,g),w(T)}return L===void 0&&(L=setTimeout(bt,g)),Q}var K,V,Z,Q,L,T,U=0,ct=!1,ut=!1,nt=!0;if(typeof x!="function")throw new TypeError(d);return g=s(g)||0,i(A)&&(ct=!!A.leading,ut="maxWait"in A,Z=ut?E(s(A.maxWait)||0,g):Z,nt="trailing"in A?!!A.trailing:nt),_t.cancel=zt,_t.flush=Zt,_t}function i(x){var g=typeof x>"u"?"undefined":u(x);return!!x&&(g=="object"||g=="function")}function l(x){return!!x&&(typeof x>"u"?"undefined":u(x))=="object"}function f(x){return(typeof x>"u"?"undefined":u(x))=="symbol"||l(x)&&Y.call(x)==y}function s(x){if(typeof x=="number")return x;if(f(x))return m;if(i(x)){var g=typeof x.valueOf=="function"?x.valueOf():x;x=i(g)?g+"":g}if(typeof x!="string")return x===0?x:+x;x=x.replace(k,"");var A=S.test(x);return A||h.test(x)?v(x.slice(2),A?2:8):_.test(x)?m:+x}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(x){return typeof x}:function(x){return x&&typeof Symbol=="function"&&x.constructor===Symbol&&x!==Symbol.prototype?"symbol":typeof x},d="Expected a function",m=NaN,y="[object Symbol]",k=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,S=/^0b[01]+$/i,h=/^0o[0-7]+$/i,v=parseInt,O=(typeof r>"u"?"undefined":u(r))=="object"&&r&&r.Object===Object&&r,I=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,M=O||I||Function("return this")(),F=Object.prototype,Y=F.toString,E=Math.max,q=Math.min,lt=function(){return M.Date.now()};n.exports=o}).call(a,function(){return this}())},function(n,a){function r(u){var d=void 0,m=void 0;for(d=0;d<u.length;d+=1)if(m=u[d],m.dataset&&m.dataset.aos||m.children&&r(m.children))return!0;return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function l(u,d){var m=window.document,y=o(),k=new y(f);s=d,k.observe(m.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function f(u){u&&u.forEach(function(d){var m=Array.prototype.slice.call(d.addedNodes),y=Array.prototype.slice.call(d.removedNodes),k=m.concat(y);if(r(k))return s()})}Object.defineProperty(a,"__esModule",{value:!0});var s=function(){};a.default={isSupported:i,ready:l}},function(n,a){function r(m,y){if(!(m instanceof y))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var i=function(){function m(y,k){for(var _=0;_<k.length;_++){var S=k[_];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(y,S.key,S)}}return function(y,k,_){return k&&m(y.prototype,k),_&&m(y,_),y}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function m(){r(this,m)}return i(m,[{key:"phone",value:function(){var y=o();return!(!l.test(y)&&!f.test(y.substr(0,4)))}},{key:"mobile",value:function(){var y=o();return!(!s.test(y)&&!u.test(y.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),m}();a.default=new d},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(i,l,f){var s=i.node.getAttribute("data-aos-once");l>i.position?i.node.classList.add("aos-animate"):typeof s<"u"&&(s==="false"||!f&&s!=="true")&&i.node.classList.remove("aos-animate")},o=function(i,l){var f=window.pageYOffset,s=window.innerHeight;i.forEach(function(u,d){r(u,s+f,l)})};a.default=o},function(n,a,r){function o(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(a,"__esModule",{value:!0});var i=r(12),l=o(i),f=function(s,u){return s.forEach(function(d,m){d.node.classList.add("aos-init"),d.position=(0,l.default)(d.node,u.offset)}),s};a.default=f},function(n,a,r){function o(s){return s&&s.__esModule?s:{default:s}}Object.defineProperty(a,"__esModule",{value:!0});var i=r(13),l=o(i),f=function(s,u){var d=0,m=0,y=window.innerHeight,k={offset:s.getAttribute("data-aos-offset"),anchor:s.getAttribute("data-aos-anchor"),anchorPlacement:s.getAttribute("data-aos-anchor-placement")};switch(k.offset&&!isNaN(k.offset)&&(m=parseInt(k.offset)),k.anchor&&document.querySelectorAll(k.anchor)&&(s=document.querySelectorAll(k.anchor)[0]),d=(0,l.default)(s).top,k.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=s.offsetHeight/2;break;case"bottom-bottom":d+=s.offsetHeight;break;case"top-center":d+=y/2;break;case"bottom-center":d+=y/2+s.offsetHeight;break;case"center-center":d+=y/2+s.offsetHeight/2;break;case"top-top":d+=y;break;case"bottom-top":d+=s.offsetHeight+y;break;case"center-top":d+=s.offsetHeight/2+y}return k.anchorPlacement||k.offset||isNaN(u)||(m=u),d+m};a.default=f},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(o){for(var i=0,l=0;o&&!isNaN(o.offsetLeft)&&!isNaN(o.offsetTop);)i+=o.offsetLeft-(o.tagName!="BODY"?o.scrollLeft:0),l+=o.offsetTop-(o.tagName!="BODY"?o.scrollTop:0),o=o.offsetParent;return{top:l,left:i}};a.default=r},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(o){return o=o||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(o,function(i){return{node:i}})};a.default=r}])})})(gn);var ca=gn.exports;const ua=ta(ca);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function da(t,e,n){return(e=pa(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Re(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Re(Object(n),!0).forEach(function(a){da(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Re(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ma(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function pa(t){var e=ma(t,"string");return typeof e=="symbol"?e:e+""}const He=()=>{};let Ae={},hn={},bn=null,vn={mark:He,measure:He};try{typeof window<"u"&&(Ae=window),typeof document<"u"&&(hn=document),typeof MutationObserver<"u"&&(bn=MutationObserver),typeof performance<"u"&&(vn=performance)}catch{}const{userAgent:Ye=""}=Ae.navigator||{},pt=Ae,C=hn,We=bn,Rt=vn;pt.document;const st=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",yn=~Ye.indexOf("MSIE")||~Ye.indexOf("Trident/");var ga=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,ha=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,xn={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},ba={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},wn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],H="classic",Gt="duotone",va="sharp",ya="sharp-duotone",kn=[H,Gt,va,ya],xa={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},wa={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},ka=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),Aa={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},Oa=["fak","fa-kit","fakd","fa-kit-duotone"],Be={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},Sa=["kit"],Pa={kit:{"fa-kit":"fak"}},_a=["fak","fakd"],Ea={kit:{fak:"fa-kit"}},Ue={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ht={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ca=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],Na=["fak","fa-kit","fakd","fa-kit-duotone"],Ia={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Ma={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},Ta={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},ie={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},ja=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],se=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...Ca,...ja],za=["solid","regular","light","thin","duotone","brands"],An=[1,2,3,4,5,6,7,8,9,10],Fa=An.concat([11,12,13,14,15,16,17,18,19,20]),La=[...Object.keys(Ta),...za,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ht.GROUP,Ht.SWAP_OPACITY,Ht.PRIMARY,Ht.SECONDARY].concat(An.map(t=>"".concat(t,"x"))).concat(Fa.map(t=>"w-".concat(t))),Da={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const ot="___FONT_AWESOME___",le=16,On="fa",Sn="svg-inline--fa",xt="data-fa-i2svg",fe="data-fa-pseudo-element",Ra="data-fa-pseudo-element-pending",Oe="data-prefix",Se="data-icon",$e="fontawesome-i2svg",Ha="async",Ya=["HTML","HEAD","STYLE","SCRIPT"],Pn=(()=>{try{return!0}catch{return!1}})();function Tt(t){return new Proxy(t,{get(e,n){return n in e?e[n]:e[H]}})}const _n=c({},xn);_n[H]=c(c(c(c({},{"fa-duotone":"duotone"}),xn[H]),Be.kit),Be["kit-duotone"]);const Wa=Tt(_n),ce=c({},Aa);ce[H]=c(c(c(c({},{duotone:"fad"}),ce[H]),Ue.kit),Ue["kit-duotone"]);const Ge=Tt(ce),ue=c({},ie);ue[H]=c(c({},ue[H]),Ea.kit);const Pe=Tt(ue),de=c({},Ma);de[H]=c(c({},de[H]),Pa.kit);Tt(de);const Ba=ga,En="fa-layers-text",Ua=ha,$a=c({},xa);Tt($a);const Ga=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jt=ba,Va=[...Sa,...La],Ct=pt.FontAwesomeConfig||{};function qa(t){var e=C.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Xa(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}C&&typeof C.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[n,a]=e;const r=Xa(qa(n));r!=null&&(Ct[a]=r)});const Cn={styleDefault:"solid",familyDefault:H,cssPrefix:On,replacementClass:Sn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ct.familyPrefix&&(Ct.cssPrefix=Ct.familyPrefix);const St=c(c({},Cn),Ct);St.autoReplaceSvg||(St.observeMutations=!1);const b={};Object.keys(Cn).forEach(t=>{Object.defineProperty(b,t,{enumerable:!0,set:function(e){St[t]=e,Nt.forEach(n=>n(b))},get:function(){return St[t]}})});Object.defineProperty(b,"familyPrefix",{enumerable:!0,set:function(t){St.cssPrefix=t,Nt.forEach(e=>e(b))},get:function(){return St.cssPrefix}});pt.FontAwesomeConfig=b;const Nt=[];function Ka(t){return Nt.push(t),()=>{Nt.splice(Nt.indexOf(t),1)}}const mt=le,tt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Za(t){if(!t||!st)return;const e=C.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;const n=C.head.childNodes;let a=null;for(let r=n.length-1;r>-1;r--){const o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return C.head.insertBefore(e,a),t}const Qa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function It(){let t=12,e="";for(;t-- >0;)e+=Qa[Math.random()*62|0];return e}function Pt(t){const e=[];for(let n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function _e(t){return t.classList?Pt(t.classList):(t.getAttribute("class")||"").split(" ").filter(e=>e)}function Nn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ja(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,'="').concat(Nn(t[n]),'" '),"").trim()}function Vt(t){return Object.keys(t||{}).reduce((e,n)=>e+"".concat(n,": ").concat(t[n].trim(),";"),"")}function Ee(t){return t.size!==tt.size||t.x!==tt.x||t.y!==tt.y||t.rotate!==tt.rotate||t.flipX||t.flipY}function tr(t){let{transform:e,containerWidth:n,iconWidth:a}=t;const r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(l)},s={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:s}}function er(t){let{transform:e,width:n=le,height:a=le,startCentered:r=!1}=t,o="";return r&&yn?o+="translate(".concat(e.x/mt-n/2,"em, ").concat(e.y/mt-a/2,"em) "):r?o+="translate(calc(-50% + ".concat(e.x/mt,"em), calc(-50% + ").concat(e.y/mt,"em)) "):o+="translate(".concat(e.x/mt,"em, ").concat(e.y/mt,"em) "),o+="scale(".concat(e.size/mt*(e.flipX?-1:1),", ").concat(e.size/mt*(e.flipY?-1:1),") "),o+="rotate(".concat(e.rotate,"deg) "),o}var nr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function In(){const t=On,e=Sn,n=b.cssPrefix,a=b.replacementClass;let r=nr;if(n!==t||a!==e){const o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(l,".".concat(a))}return r}let Ve=!1;function te(){b.autoAddCss&&!Ve&&(Za(In()),Ve=!0)}var ar={mixout(){return{dom:{css:In,insertCss:te}}},hooks(){return{beforeDOMElementCreation(){te()},beforeI2svg(){te()}}}};const it=pt||{};it[ot]||(it[ot]={});it[ot].styles||(it[ot].styles={});it[ot].hooks||(it[ot].hooks={});it[ot].shims||(it[ot].shims=[]);var et=it[ot];const Mn=[],Tn=function(){C.removeEventListener("DOMContentLoaded",Tn),Bt=1,Mn.map(t=>t())};let Bt=!1;st&&(Bt=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),Bt||C.addEventListener("DOMContentLoaded",Tn));function rr(t){st&&(Bt?setTimeout(t,0):Mn.push(t))}function jt(t){const{tag:e,attributes:n={},children:a=[]}=t;return typeof t=="string"?Nn(t):"<".concat(e," ").concat(Ja(n),">").concat(a.map(jt).join(""),"</").concat(e,">")}function qe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ee=function(e,n,a,r){var o=Object.keys(e),i=o.length,l=n,f,s,u;for(a===void 0?(f=1,u=e[o[0]]):(f=0,u=a);f<i;f++)s=o[f],u=l(u,e[s],s,e);return u};function or(t){const e=[];let n=0;const a=t.length;for(;n<a;){const r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){const o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function me(t){const e=or(t);return e.length===1?e[0].toString(16):null}function ir(t,e){const n=t.length;let a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Xe(t){return Object.keys(t).reduce((e,n)=>{const a=t[n];return!!a.icon?e[a.iconName]=a.icon:e[n]=a,e},{})}function pe(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=n,r=Xe(e);typeof et.hooks.addPack=="function"&&!a?et.hooks.addPack(t,Xe(e)):et.styles[t]=c(c({},et.styles[t]||{}),r),t==="fas"&&pe("fa",e)}const{styles:Mt,shims:sr}=et,jn=Object.keys(Pe),lr=jn.reduce((t,e)=>(t[e]=Object.keys(Pe[e]),t),{});let Ce=null,zn={},Fn={},Ln={},Dn={},Rn={};function fr(t){return~Va.indexOf(t)}function cr(t,e){const n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!fr(r)?r:null}const Hn=()=>{const t=a=>ee(Mt,(r,o,i)=>(r[i]=ee(o,a,{}),r),{});zn=t((a,r,o)=>(r[3]&&(a[r[3]]=o),r[2]&&r[2].filter(l=>typeof l=="number").forEach(l=>{a[l.toString(16)]=o}),a)),Fn=t((a,r,o)=>(a[o]=o,r[2]&&r[2].filter(l=>typeof l=="string").forEach(l=>{a[l]=o}),a)),Rn=t((a,r,o)=>{const i=r[2];return a[o]=o,i.forEach(l=>{a[l]=o}),a});const e="far"in Mt||b.autoFetchSvg,n=ee(sr,(a,r)=>{const o=r[0];let i=r[1];const l=r[2];return i==="far"&&!e&&(i="fas"),typeof o=="string"&&(a.names[o]={prefix:i,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:i,iconName:l}),a},{names:{},unicodes:{}});Ln=n.names,Dn=n.unicodes,Ce=qt(b.styleDefault,{family:b.familyDefault})};Ka(t=>{Ce=qt(t.styleDefault,{family:b.familyDefault})});Hn();function Ne(t,e){return(zn[t]||{})[e]}function ur(t,e){return(Fn[t]||{})[e]}function yt(t,e){return(Rn[t]||{})[e]}function Yn(t){return Ln[t]||{prefix:null,iconName:null}}function dr(t){const e=Dn[t],n=Ne("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gt(){return Ce}const Wn=()=>({prefix:null,iconName:null,rest:[]});function mr(t){let e=H;const n=jn.reduce((a,r)=>(a[r]="".concat(b.cssPrefix,"-").concat(r),a),{});return kn.forEach(a=>{(t.includes(n[a])||t.some(r=>lr[a].includes(r)))&&(e=a)}),e}function qt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:n=H}=e,a=Wa[n][t];if(n===Gt&&!t)return"fad";const r=Ge[n][t]||Ge[n][a],o=t in et.styles?t:null;return r||o||null}function pr(t){let e=[],n=null;return t.forEach(a=>{const r=cr(b.cssPrefix,a);r?n=r:a&&e.push(a)}),{iconName:n,rest:e}}function Ke(t){return t.sort().filter((e,n,a)=>a.indexOf(e)===n)}function Xt(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:n=!1}=e;let a=null;const r=se.concat(Na),o=Ke(t.filter(d=>r.includes(d))),i=Ke(t.filter(d=>!se.includes(d))),l=o.filter(d=>(a=d,!wn.includes(d))),[f=null]=l,s=mr(o),u=c(c({},pr(i)),{},{prefix:qt(f,{family:s})});return c(c(c({},u),vr({values:t,family:s,styles:Mt,config:b,canonical:u,givenPrefix:a})),gr(n,a,u))}function gr(t,e,n){let{prefix:a,iconName:r}=n;if(t||!a||!r)return{prefix:a,iconName:r};const o=e==="fa"?Yn(r):{},i=yt(a,r);return r=o.iconName||i||r,a=o.prefix||a,a==="far"&&!Mt.far&&Mt.fas&&!b.autoFetchSvg&&(a="fas"),{prefix:a,iconName:r}}const hr=kn.filter(t=>t!==H||t!==Gt),br=Object.keys(ie).filter(t=>t!==H).map(t=>Object.keys(ie[t])).flat();function vr(t){const{values:e,family:n,canonical:a,givenPrefix:r="",styles:o={},config:i={}}=t,l=n===Gt,f=e.includes("fa-duotone")||e.includes("fad"),s=i.familyDefault==="duotone",u=a.prefix==="fad"||a.prefix==="fa-duotone";if(!l&&(f||s||u)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&hr.includes(n)&&(Object.keys(o).find(m=>br.includes(m))||i.autoFetchSvg)){const m=ka.get(n).defaultShortPrefixId;a.prefix=m,a.iconName=yt(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||r==="fa")&&(a.prefix=gt()||"fas"),a}class yr{constructor(){this.definitions={}}add(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];const r=n.reduce(this._pullDefinitions,{});Object.keys(r).forEach(o=>{this.definitions[o]=c(c({},this.definitions[o]||{}),r[o]),pe(o,r[o]);const i=Pe[H][o];i&&pe(i,r[o]),Hn()})}reset(){this.definitions={}}_pullDefinitions(e,n){const a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(r=>{const{prefix:o,iconName:i,icon:l}=a[r],f=l[2];e[o]||(e[o]={}),f.length>0&&f.forEach(s=>{typeof s=="string"&&(e[o][s]=l)}),e[o][i]=l}),e}}let Ze=[],At={};const Ot={},xr=Object.keys(Ot);function wr(t,e){let{mixoutsTo:n}=e;return Ze=t,At={},Object.keys(Ot).forEach(a=>{xr.indexOf(a)===-1&&delete Ot[a]}),Ze.forEach(a=>{const r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(o=>{typeof r[o]=="function"&&(n[o]=r[o]),typeof r[o]=="object"&&Object.keys(r[o]).forEach(i=>{n[o]||(n[o]={}),n[o][i]=r[o][i]})}),a.hooks){const o=a.hooks();Object.keys(o).forEach(i=>{At[i]||(At[i]=[]),At[i].push(o[i])})}a.provides&&a.provides(Ot)}),n}function ge(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return(At[t]||[]).forEach(i=>{e=i.apply(null,[e,...a])}),e}function wt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];(At[t]||[]).forEach(o=>{o.apply(null,n)})}function ht(){const t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ot[t]?Ot[t].apply(null,e):void 0}function he(t){t.prefix==="fa"&&(t.prefix="fas");let{iconName:e}=t;const n=t.prefix||gt();if(e)return e=yt(n,e)||e,qe(Bn.definitions,n,e)||qe(et.styles,n,e)}const Bn=new yr,kr=()=>{b.autoReplaceSvg=!1,b.observeMutations=!1,wt("noAuto")},Ar={i2svg:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return st?(wt("beforeI2svg",t),ht("pseudoElements2svg",t),ht("i2svg",t)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=t;b.autoReplaceSvg===!1&&(b.autoReplaceSvg=!0),b.observeMutations=!0,rr(()=>{Sr({autoReplaceSvgRoot:e}),wt("watch",t)})}},Or={icon:t=>{if(t===null)return null;if(typeof t=="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:yt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){const e=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],n=qt(t[0]);return{prefix:n,iconName:yt(n,e)||e}}if(typeof t=="string"&&(t.indexOf("".concat(b.cssPrefix,"-"))>-1||t.match(Ba))){const e=Xt(t.split(" "),{skipLookups:!0});return{prefix:e.prefix||gt(),iconName:yt(e.prefix,e.iconName)||e.iconName}}if(typeof t=="string"){const e=gt();return{prefix:e,iconName:yt(e,t)||t}}}},G={noAuto:kr,config:b,dom:Ar,parse:Or,library:Bn,findIconDefinition:he,toHtml:jt},Sr=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=C}=t;(Object.keys(et.styles).length>0||b.autoFetchSvg)&&st&&b.autoReplaceSvg&&G.dom.i2svg({node:e})};function Kt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(n=>jt(n))}}),Object.defineProperty(t,"node",{get:function(){if(!st)return;const n=C.createElement("div");return n.innerHTML=t.html,n.children}}),t}function Pr(t){let{children:e,main:n,mask:a,attributes:r,styles:o,transform:i}=t;if(Ee(i)&&n.found&&!a.found){const{width:l,height:f}=n,s={x:l/f/2,y:.5};r.style=Vt(c(c({},o),{},{"transform-origin":"".concat(s.x+i.x/16,"em ").concat(s.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function _r(t){let{prefix:e,iconName:n,children:a,attributes:r,symbol:o}=t;const i=o===!0?"".concat(e,"-").concat(b.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:c(c({},r),{},{id:i}),children:a}]}]}function Ie(t){const{icons:{main:e,mask:n},prefix:a,iconName:r,transform:o,symbol:i,title:l,maskId:f,titleId:s,extra:u,watchable:d=!1}=t,{width:m,height:y}=n.found?n:e,k=_a.includes(a),_=[b.replacementClass,r?"".concat(b.cssPrefix,"-").concat(r):""].filter(M=>u.classes.indexOf(M)===-1).filter(M=>M!==""||!!M).concat(u.classes).join(" ");let S={children:[],attributes:c(c({},u.attributes),{},{"data-prefix":a,"data-icon":r,class:_,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(m," ").concat(y)})};const h=k&&!~u.classes.indexOf("fa-fw")?{width:"".concat(m/y*16*.0625,"em")}:{};d&&(S.attributes[xt]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(s||It())},children:[l]}),delete S.attributes.title);const v=c(c({},S),{},{prefix:a,iconName:r,main:e,mask:n,maskId:f,transform:o,symbol:i,styles:c(c({},h),u.styles)}),{children:O,attributes:I}=n.found&&e.found?ht("generateAbstractMask",v)||{children:[],attributes:{}}:ht("generateAbstractIcon",v)||{children:[],attributes:{}};return v.children=O,v.attributes=I,i?_r(v):Pr(v)}function Qe(t){const{content:e,width:n,height:a,transform:r,title:o,extra:i,watchable:l=!1}=t,f=c(c(c({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});l&&(f[xt]="");const s=c({},i.styles);Ee(r)&&(s.transform=er({transform:r,startCentered:!0,width:n,height:a}),s["-webkit-transform"]=s.transform);const u=Vt(s);u.length>0&&(f.style=u);const d=[];return d.push({tag:"span",attributes:f,children:[e]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function Er(t){const{content:e,title:n,extra:a}=t,r=c(c(c({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Vt(a.styles);o.length>0&&(r.style=o);const i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}const{styles:ne}=et;function be(t){const e=t[0],n=t[1],[a]=t.slice(4);let r=null;return Array.isArray(a)?r={tag:"g",attributes:{class:"".concat(b.cssPrefix,"-").concat(Jt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Jt.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(b.cssPrefix,"-").concat(Jt.PRIMARY),fill:"currentColor",d:a[1]}}]}:r={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:r}}const Cr={found:!1,width:512,height:512};function Nr(t,e){!Pn&&!b.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ve(t,e){let n=e;return e==="fa"&&b.styleDefault!==null&&(e=gt()),new Promise((a,r)=>{if(n==="fa"){const o=Yn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&ne[e]&&ne[e][t]){const o=ne[e][t];return a(be(o))}Nr(t,e),a(c(c({},Cr),{},{icon:b.showMissingIcons&&t?ht("missingIconAbstract")||{}:{}}))})}const Je=()=>{},ye=b.measurePerformance&&Rt&&Rt.mark&&Rt.measure?Rt:{mark:Je,measure:Je},Et='FA "6.7.2"',Ir=t=>(ye.mark("".concat(Et," ").concat(t," begins")),()=>Un(t)),Un=t=>{ye.mark("".concat(Et," ").concat(t," ends")),ye.measure("".concat(Et," ").concat(t),"".concat(Et," ").concat(t," begins"),"".concat(Et," ").concat(t," ends"))};var Me={begin:Ir,end:Un};const Yt=()=>{};function tn(t){return typeof(t.getAttribute?t.getAttribute(xt):null)=="string"}function Mr(t){const e=t.getAttribute?t.getAttribute(Oe):null,n=t.getAttribute?t.getAttribute(Se):null;return e&&n}function Tr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(b.replacementClass)}function jr(){return b.autoReplaceSvg===!0?Wt.replace:Wt[b.autoReplaceSvg]||Wt.replace}function zr(t){return C.createElementNS("http://www.w3.org/2000/svg",t)}function Fr(t){return C.createElement(t)}function $n(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:n=t.tag==="svg"?zr:Fr}=e;if(typeof t=="string")return C.createTextNode(t);const a=n(t.tag);return Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])}),(t.children||[]).forEach(function(o){a.appendChild($n(o,{ceFn:n}))}),a}function Lr(t){let e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Wt={replace:function(t){const e=t[0];if(e.parentNode)if(t[1].forEach(n=>{e.parentNode.insertBefore($n(n),e)}),e.getAttribute(xt)===null&&b.keepOriginalSource){let n=C.createComment(Lr(e));e.parentNode.replaceChild(n,e)}else e.remove()},nest:function(t){const e=t[0],n=t[1];if(~_e(e).indexOf(b.replacementClass))return Wt.replace(t);const a=new RegExp("".concat(b.cssPrefix,"-.*"));if(delete n[0].attributes.id,n[0].attributes.class){const o=n[0].attributes.class.split(" ").reduce((i,l)=>(l===b.replacementClass||l.match(a)?i.toSvg.push(l):i.toNode.push(l),i),{toNode:[],toSvg:[]});n[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",o.toNode.join(" "))}const r=n.map(o=>jt(o)).join(`
`);e.setAttribute(xt,""),e.innerHTML=r}};function en(t){t()}function Gn(t,e){const n=typeof e=="function"?e:Yt;if(t.length===0)n();else{let a=en;b.mutateApproach===Ha&&(a=pt.requestAnimationFrame||en),a(()=>{const r=jr(),o=Me.begin("mutate");t.map(r),o(),n()})}}let Te=!1;function Vn(){Te=!0}function xe(){Te=!1}let Ut=null;function nn(t){if(!We||!b.observeMutations)return;const{treeCallback:e=Yt,nodeCallback:n=Yt,pseudoElementsCallback:a=Yt,observeMutationsRoot:r=C}=t;Ut=new We(o=>{if(Te)return;const i=gt();Pt(o).forEach(l=>{if(l.type==="childList"&&l.addedNodes.length>0&&!tn(l.addedNodes[0])&&(b.searchPseudoElements&&a(l.target),e(l.target)),l.type==="attributes"&&l.target.parentNode&&b.searchPseudoElements&&a(l.target.parentNode),l.type==="attributes"&&tn(l.target)&&~Ga.indexOf(l.attributeName))if(l.attributeName==="class"&&Mr(l.target)){const{prefix:f,iconName:s}=Xt(_e(l.target));l.target.setAttribute(Oe,f||i),s&&l.target.setAttribute(Se,s)}else Tr(l.target)&&n(l.target)})}),st&&Ut.observe(r,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Dr(){Ut&&Ut.disconnect()}function Rr(t){const e=t.getAttribute("style");let n=[];return e&&(n=e.split(";").reduce((a,r)=>{const o=r.split(":"),i=o[0],l=o.slice(1);return i&&l.length>0&&(a[i]=l.join(":").trim()),a},{})),n}function Hr(t){const e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"";let r=Xt(_e(t));return r.prefix||(r.prefix=gt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ur(r.prefix,t.innerText)||Ne(r.prefix,me(t.innerText))),!r.iconName&&b.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Yr(t){const e=Pt(t.attributes).reduce((r,o)=>(r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r),{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return b.autoA11y&&(n?e["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(a||It()):(e["aria-hidden"]="true",e.focusable="false")),e}function Wr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:tt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function an(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:n,prefix:a,rest:r}=Hr(t),o=Yr(t),i=ge("parseNodeAttributes",{},t);let l=e.styleParser?Rr(t):[];return c({iconName:n,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:tt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:l,attributes:o}},i)}const{styles:Br}=et;function qn(t){const e=b.autoReplaceSvg==="nest"?an(t,{styleParser:!1}):an(t);return~e.extra.classes.indexOf(En)?ht("generateLayersText",t,e):ht("generateSvgReplacementMutation",t,e)}function Ur(){return[...Oa,...se]}function rn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!st)return Promise.resolve();const n=C.documentElement.classList,a=u=>n.add("".concat($e,"-").concat(u)),r=u=>n.remove("".concat($e,"-").concat(u)),o=b.autoFetchSvg?Ur():wn.concat(Object.keys(Br));o.includes("fa")||o.push("fa");const i=[".".concat(En,":not([").concat(xt,"])")].concat(o.map(u=>".".concat(u,":not([").concat(xt,"])"))).join(", ");if(i.length===0)return Promise.resolve();let l=[];try{l=Pt(t.querySelectorAll(i))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();const f=Me.begin("onTree"),s=l.reduce((u,d)=>{try{const m=qn(d);m&&u.push(m)}catch(m){Pn||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise((u,d)=>{Promise.all(s).then(m=>{Gn(m,()=>{a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(m=>{f(),d(m)})})}function $r(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;qn(t).then(n=>{n&&Gn([n],e)})}function Gr(t){return function(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:he(e||{});let{mask:r}=n;return r&&(r=(r||{}).icon?r:he(r||{})),t(a,c(c({},n),{},{mask:r}))}}const Vr=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=tt,symbol:a=!1,mask:r=null,maskId:o=null,title:i=null,titleId:l=null,classes:f=[],attributes:s={},styles:u={}}=e;if(!t)return;const{prefix:d,iconName:m,icon:y}=t;return Kt(c({type:"icon"},t),()=>(wt("beforeDOMElementCreation",{iconDefinition:t,params:e}),b.autoA11y&&(i?s["aria-labelledby"]="".concat(b.replacementClass,"-title-").concat(l||It()):(s["aria-hidden"]="true",s.focusable="false")),Ie({icons:{main:be(y),mask:r?be(r.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:m,transform:c(c({},tt),n),symbol:a,title:i,maskId:o,titleId:l,extra:{attributes:s,styles:u,classes:f}})))};var qr={mixout(){return{icon:Gr(Vr)}},hooks(){return{mutationObserverCallbacks(t){return t.treeCallback=rn,t.nodeCallback=$r,t}}},provides(t){t.i2svg=function(e){const{node:n=C,callback:a=()=>{}}=e;return rn(n,a)},t.generateSvgReplacementMutation=function(e,n){const{iconName:a,title:r,titleId:o,prefix:i,transform:l,symbol:f,mask:s,maskId:u,extra:d}=n;return new Promise((m,y)=>{Promise.all([ve(a,i),s.iconName?ve(s.iconName,s.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(k=>{let[_,S]=k;m([e,Ie({icons:{main:_,mask:S},prefix:i,iconName:a,transform:l,symbol:f,maskId:u,title:r,titleId:o,extra:d,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(e){let{children:n,attributes:a,main:r,transform:o,styles:i}=e;const l=Vt(i);l.length>0&&(a.style=l);let f;return Ee(o)&&(f=ht("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),n.push(f||r.icon),{children:n,attributes:a}}}},Xr={mixout(){return{layer(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:n=[]}=e;return Kt({type:"layer"},()=>{wt("beforeDOMElementCreation",{assembler:t,params:e});let a=[];return t(r=>{Array.isArray(r)?r.map(o=>{a=a.concat(o.abstract)}):a=a.concat(r.abstract)}),[{tag:"span",attributes:{class:["".concat(b.cssPrefix,"-layers"),...n].join(" ")},children:a}]})}}}},Kr={mixout(){return{counter(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:n=null,classes:a=[],attributes:r={},styles:o={}}=e;return Kt({type:"counter",content:t},()=>(wt("beforeDOMElementCreation",{content:t,params:e}),Er({content:t.toString(),title:n,extra:{attributes:r,styles:o,classes:["".concat(b.cssPrefix,"-layers-counter"),...a]}})))}}}},Zr={mixout(){return{text(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:n=tt,title:a=null,classes:r=[],attributes:o={},styles:i={}}=e;return Kt({type:"text",content:t},()=>(wt("beforeDOMElementCreation",{content:t,params:e}),Qe({content:t,transform:c(c({},tt),n),title:a,extra:{attributes:o,styles:i,classes:["".concat(b.cssPrefix,"-layers-text"),...r]}})))}}},provides(t){t.generateLayersText=function(e,n){const{title:a,transform:r,extra:o}=n;let i=null,l=null;if(yn){const f=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/f,l=s.height/f}return b.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([e,Qe({content:e.innerHTML,width:i,height:l,transform:r,title:a,extra:o,watchable:!0})])}}};const Qr=new RegExp('"',"ug"),on=[1105920,1112319],sn=c(c(c(c({},{FontAwesome:{normal:"fas",400:"fas"}}),wa),Da),Ia),we=Object.keys(sn).reduce((t,e)=>(t[e.toLowerCase()]=sn[e],t),{}),Jr=Object.keys(we).reduce((t,e)=>{const n=we[e];return t[e]=n[900]||[...Object.entries(n)][0][1],t},{});function to(t){const e=t.replace(Qr,""),n=ir(e,0),a=n>=on[0]&&n<=on[1],r=e.length===2?e[0]===e[1]:!1;return{value:me(r?e[0]:e),isSecondary:a||r}}function eo(t,e){const n=t.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),r=isNaN(a)?"normal":a;return(we[n]||{})[r]||Jr[n]}function ln(t,e){const n="".concat(Ra).concat(e.replace(":","-"));return new Promise((a,r)=>{if(t.getAttribute(n)!==null)return a();const i=Pt(t.children).filter(m=>m.getAttribute(fe)===e)[0],l=pt.getComputedStyle(t,e),f=l.getPropertyValue("font-family"),s=f.match(Ua),u=l.getPropertyValue("font-weight"),d=l.getPropertyValue("content");if(i&&!s)return t.removeChild(i),a();if(s&&d!=="none"&&d!==""){const m=l.getPropertyValue("content");let y=eo(f,u);const{value:k,isSecondary:_}=to(m),S=s[0].startsWith("FontAwesome");let h=Ne(y,k),v=h;if(S){const O=dr(k);O.iconName&&O.prefix&&(h=O.iconName,y=O.prefix)}if(h&&!_&&(!i||i.getAttribute(Oe)!==y||i.getAttribute(Se)!==v)){t.setAttribute(n,v),i&&t.removeChild(i);const O=Wr(),{extra:I}=O;I.attributes[fe]=e,ve(h,y).then(M=>{const F=Ie(c(c({},O),{},{icons:{main:M,mask:Wn()},prefix:y,iconName:v,extra:I,watchable:!0})),Y=C.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=F.map(E=>jt(E)).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function no(t){return Promise.all([ln(t,"::before"),ln(t,"::after")])}function ao(t){return t.parentNode!==document.head&&!~Ya.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(fe)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function fn(t){if(st)return new Promise((e,n)=>{const a=Pt(t.querySelectorAll("*")).filter(ao).map(no),r=Me.begin("searchPseudoElements");Vn(),Promise.all(a).then(()=>{r(),xe(),e()}).catch(()=>{r(),xe(),n()})})}var ro={hooks(){return{mutationObserverCallbacks(t){return t.pseudoElementsCallback=fn,t}}},provides(t){t.pseudoElements2svg=function(e){const{node:n=C}=e;b.searchPseudoElements&&fn(n)}}};let cn=!1;var oo={mixout(){return{dom:{unwatch(){Vn(),cn=!0}}}},hooks(){return{bootstrap(){nn(ge("mutationObserverCallbacks",{}))},noAuto(){Dr()},watch(t){const{observeMutationsRoot:e}=t;cn?xe():nn(ge("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const un=t=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce((n,a)=>{const r=a.toLowerCase().split("-"),o=r[0];let i=r.slice(1).join("-");if(o&&i==="h")return n.flipX=!0,n;if(o&&i==="v")return n.flipY=!0,n;if(i=parseFloat(i),isNaN(i))return n;switch(o){case"grow":n.size=n.size+i;break;case"shrink":n.size=n.size-i;break;case"left":n.x=n.x-i;break;case"right":n.x=n.x+i;break;case"up":n.y=n.y-i;break;case"down":n.y=n.y+i;break;case"rotate":n.rotate=n.rotate+i;break}return n},e)};var io={mixout(){return{parse:{transform:t=>un(t)}}},hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-transform");return n&&(t.transform=un(n)),t}}},provides(t){t.generateAbstractTransformGrouping=function(e){let{main:n,transform:a,containerWidth:r,iconWidth:o}=e;const i={transform:"translate(".concat(r/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),u={transform:"".concat(l," ").concat(f," ").concat(s)},d={transform:"translate(".concat(o/2*-1," -256)")},m={outer:i,inner:u,path:d};return{tag:"g",attributes:c({},m.outer),children:[{tag:"g",attributes:c({},m.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:c(c({},n.icon.attributes),m.path)}]}]}}}};const ae={x:0,y:0,width:"100%",height:"100%"};function dn(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function so(t){return t.tag==="g"?t.children:[t]}var lo={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-mask"),a=n?Xt(n.split(" ").map(r=>r.trim())):Wn();return a.prefix||(a.prefix=gt()),t.mask=a,t.maskId=e.getAttribute("data-fa-mask-id"),t}}},provides(t){t.generateAbstractMask=function(e){let{children:n,attributes:a,main:r,mask:o,maskId:i,transform:l}=e;const{width:f,icon:s}=r,{width:u,icon:d}=o,m=tr({transform:l,containerWidth:u,iconWidth:f}),y={tag:"rect",attributes:c(c({},ae),{},{fill:"white"})},k=s.children?{children:s.children.map(dn)}:{},_={tag:"g",attributes:c({},m.inner),children:[dn(c({tag:s.tag,attributes:c(c({},s.attributes),m.path)},k))]},S={tag:"g",attributes:c({},m.outer),children:[_]},h="mask-".concat(i||It()),v="clip-".concat(i||It()),O={tag:"mask",attributes:c(c({},ae),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,S]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:so(d)},O]};return n.push(I,{tag:"rect",attributes:c({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},ae)}),{children:n,attributes:a}}}},fo={provides(t){let e=!1;pt.matchMedia&&(e=pt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){const n=[],a={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};n.push({tag:"path",attributes:c(c({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const o=c(c({},r),{},{attributeName:"opacity"}),i={tag:"circle",attributes:c(c({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||i.children.push({tag:"animate",attributes:c(c({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:c(c({},o),{},{values:"1;0;1;1;0;1;"})}),n.push(i),n.push({tag:"path",attributes:c(c({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:c(c({},o),{},{values:"1;0;0;0;0;1;"})}]}),e||n.push({tag:"path",attributes:c(c({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:c(c({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:n}}}},co={hooks(){return{parseNodeAttributes(t,e){const n=e.getAttribute("data-fa-symbol"),a=n===null?!1:n===""?!0:n;return t.symbol=a,t}}}},uo=[ar,qr,Xr,Kr,Zr,ro,oo,io,lo,fo,co];wr(uo,{mixoutsTo:G});G.noAuto;G.config;G.library;G.dom;const ke=G.parse;G.findIconDefinition;G.toHtml;const mo=G.icon;G.layer;G.text;G.counter;function mn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function rt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?mn(Object(n),!0).forEach(function(a){B(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):mn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function po(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function go(t){var e=po(t,"string");return typeof e=="symbol"?e:e+""}function $t(t){"@babel/helpers - typeof";return $t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$t(t)}function B(t,e,n){return e=go(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ho(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function bo(t,e){if(t==null)return{};var n=ho(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var vo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Xn={exports:{}};(function(t){(function(e){var n=function(h,v,O){if(!s(v)||d(v)||m(v)||y(v)||f(v))return v;var I,M=0,F=0;if(u(v))for(I=[],F=v.length;M<F;M++)I.push(n(h,v[M],O));else{I={};for(var Y in v)Object.prototype.hasOwnProperty.call(v,Y)&&(I[h(Y,O)]=n(h,v[Y],O))}return I},a=function(h,v){v=v||{};var O=v.separator||"_",I=v.split||/(?=[A-Z])/;return h.split(I).join(O)},r=function(h){return k(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(v,O){return O?O.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},o=function(h){var v=r(h);return v.substr(0,1).toUpperCase()+v.substr(1)},i=function(h,v){return a(h,v).toLowerCase()},l=Object.prototype.toString,f=function(h){return typeof h=="function"},s=function(h){return h===Object(h)},u=function(h){return l.call(h)=="[object Array]"},d=function(h){return l.call(h)=="[object Date]"},m=function(h){return l.call(h)=="[object RegExp]"},y=function(h){return l.call(h)=="[object Boolean]"},k=function(h){return h=h-0,h===h},_=function(h,v){var O=v&&"process"in v?v.process:v;return typeof O!="function"?h:function(I,M){return O(I,h,M)}},S={camelize:r,decamelize:i,pascalize:o,depascalize:i,camelizeKeys:function(h,v){return n(_(r,v),h)},decamelizeKeys:function(h,v){return n(_(i,v),h,v)},pascalizeKeys:function(h,v){return n(_(o,v),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=S:e.humps=S})(vo)})(Xn);var yo=Xn.exports,xo=["class","style"];function wo(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=yo.camelize(n.slice(0,a)),o=n.slice(a+1).trim();return e[r]=o,e},{})}function ko(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Kn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return Kn(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,s){var u=t.attributes[s];switch(s){case"class":f.class=ko(u);break;case"style":f.style=wo(u);break;default:f.attrs[s]=u}return f},{attrs:{},class:{},style:{}});n.class;var o=n.style,i=o===void 0?{}:o,l=bo(n,xo);return ra(t.tag,rt(rt(rt({},e),{},{class:r.class,style:rt(rt({},r.style),i)},r.attrs),l),a)}var Zn=!1;try{Zn=!0}catch{}function Ao(){if(!Zn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function re(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?B({},t,e):{}}function Oo(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},B(B(B(B(B(B(B(B(B(B(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),B(B(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function pn(t){if(t&&$t(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ke.icon)return ke.icon(t);if(t===null)return null;if($t(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var oe=na({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=kt(function(){return pn(e.icon)}),o=kt(function(){return re("classes",Oo(e))}),i=kt(function(){return re("transform",typeof e.transform=="string"?ke.transform(e.transform):e.transform)}),l=kt(function(){return re("mask",pn(e.mask))}),f=kt(function(){return mo(r.value,rt(rt(rt(rt({},o.value),i.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});aa(f,function(u){if(!u)return Ao("Could not find one or more icon(s)",r.value,l.value)},{immediate:!0});var s=kt(function(){return f.value?Kn(f.value.abstract[0],{},a):null});return function(){return s.value}}});/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const So={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Po={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},_o={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},Eo={class:"fixed top-64 w-screen",style:{"z-index":"50","pointer-events":"none"}},Co={class:"xl:w-[5%] sm:w-[6%] w-[10%] sm:ml-[95%] ml-[90%]"},No={class:"bg-azul w-full py-4 sm:rounded-tl-xl sm:rounded-bl-xl rounded-tl-md rounded-bl-md",style:{"pointer-events":"auto"}},Io={class:"w-full py-2 ps-8 flex bg-[#3366cc]"},Mo={class:"flex w-5/6 sm:w-[20%] md:w-[10%] z-20",href:"https://www.gov.co/",target:"_blank"},To=["src"],jo={class:"mx-auto px-4 sm:px-6 lg:px-8"},zo={class:"flex w-full justify-between items-center"},Fo={class:"flex-shrink-0 sm:w-1/4 w-3/6 p-4"},Lo={href:"/Welcome",class:"text-white text-2xl font-semibold"},Do=["src"],Ro=["src"],Ho={class:"hidden md:block"},Yo={class:"flex space-x-4"},Wo=["href"],Bo=["href"],Uo=["href"],$o=["href"],Go={class:"md:hidden z-20"},Vo={key:0,class:"md:hidden"},qo={class:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},Xo=["href"],Ko=["href"],Zo=["href"],Qo=["href"],Jo={class:"flex-1 overflow-y-auto overflow-x-hidden bg-light text-black"},ti={class:"container mx-auto flex flex-wrap items-center justify-between"},ei={class:"flex items-center flex-shrink-0 mr-6 w-1/6"},ni={href:"/Welcome",class:"w-full"},ai=["src"],ri=["src"],oi={class:"flex justify-center items-center space-x-4 text-primary"},ii={href:"https://www.instagram.com/alcaldiadepereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},si={href:"https://www.facebook.com/AlcaldiaDePereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},li={href:"https://www.youtube.com/channel/UCAFZZcG6RI0gw5DkrT6kMSQ/videos",target:"_blank",class:"hover:text-parrafo transition duration-300"},fi={href:"#inicio",class:"text-primary hover:text-parrafo transition duration-300"},ci={class:"container px-4 mt-8"},ui={class:"custom-list space-y-2"},di={class:"w-full py-4 ps-8 flex bg-[#3366cc]"},mi={class:"flex w-5/6 sm:w-[25%] md:w-[15%]",href:"https://www.gov.co/",target:"_blank"},pi=["src"],gi={__name:"PageLayout",setup(t){const e=Qn.useToast();ua.init();const n=Ft(Lt().props.accesibilidad.contraste),a=Ft(Lt().props.accesibilidad.letra),r=Ft(""),o=Ft(!1),i=()=>{n.value=!n.value,Lt().props.accesibilidad.contraste=n.value},l=(f,s)=>{f>=2?(a.value=2,e.open({message:"Limite de aumento de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):f<=-2?(a.value=-2,e.open({message:"Limite de reducción de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):a.value=f,r.value=s,Lt().props.accesibilidad.letra=a.value};return(f,s)=>{const u=oa("tooltip");return z(),j("div",{class:R(["flex flex-col overflow-x-hidden bg-option1",{"!bg-black":n.value}])},[p("div",Eo,[p("div",Co,[p("div",No,[at((z(),j("button",{onClick:i,class:R(["flex w-auto py-2 lg:px-4 px-2",{"bg-[#3366cc]":n.value}])},s[4]||(s[4]=[p("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[p("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512"},[p("path",{d:"M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})])],-1)]),2)),[[u,{value:"Contraste",autoHide:!1},void 0,{center:!0}]]),at((z(),j("button",{onClick:s[0]||(s[0]=d=>l(a.value-1,"reducir")),class:R(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="reducir"&&!n.value}])},s[5]||(s[5]=[p("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[p("p",{class:"font-extrabold text-xs lg:text-base"},[J("A"),p("sup",null,"-")])],-1)]),2)),[[u,{value:"Reducir letra",autoHide:!1},void 0,{center:!0}]]),at((z(),j("button",{onClick:s[1]||(s[1]=d=>l(0,"default")),class:R(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="default"&&!n.value}])},s[6]||(s[6]=[p("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[p("p",{class:"font-extrabold text-xs lg:text-base"},[J("A"),p("sup",null,"n")])],-1)]),2)),[[u,{value:"Restablecer letra",autoHide:!1},void 0,{center:!0}]]),at((z(),j("button",{onClick:s[2]||(s[2]=d=>l(a.value+1,"aumentar")),class:R(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="aumentar"&&!n.value}])},s[7]||(s[7]=[p("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[p("p",{class:"font-extrabold text-xs lg:text-base"},[J("A"),p("sup",null,"+")])],-1)]),2)),[[u,{value:"Aumentar letra",autoHide:!1},void 0,{center:!0}]])])])]),p("header",Io,[p("a",Mo,[p("figure",null,[p("img",{class:"w-full sm:w-5/6",src:$(De),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,To),s[8]||(s[8]=p("figcaption",{lang:"es",class:"hidden"}," Esta es una imagen del logo del gobierno actual de colombia ",-1))])])]),p("nav",{class:R(["w-full h-full bg-option2 py-2 text-xl sm:text-2xl text-parrafo z-20",[{"!text-yellow-200 font-bold !bg-black":n.value},a.value==-2?"!text-base !sm:text-lg":a.value==-1?"!text-lg !sm:text-xl":a.value==1?"!text-2xl !sm:text-4xl":a.value==2?"!text-4xl !sm:text-6xl":""]])},[p("div",jo,[p("div",zo,[p("div",Fo,[p("a",Lo,[p("figure",null,[n.value?(z(),j("img",{key:0,class:"w-full sm:w-5/6",src:$(Fe),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Do)):(z(),j("img",{key:1,class:"w-full sm:w-5/6",src:$(ze),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Ro)),s[9]||(s[9]=p("figcaption",{lang:"es",class:"hidden"}," Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),p("div",Ho,[p("ul",Yo,[p("li",null,[at((z(),j("a",{href:f.route("capacitaciones.index"),class:R([[{underline:f.route().current("register")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},s[10]||(s[10]=[J("Capacitaciones")]),10,Wo)),[[u,{value:"Registro de ingreso al punto",autoHide:!1},void 0,{bottom:!0}]])]),p("li",null,[at((z(),j("a",{href:f.route("register"),class:R([[{underline:f.route().current("register")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},s[11]||(s[11]=[J("Registro")]),10,Bo)),[[u,{value:"Registro de ingreso al punto",autoHide:!1},void 0,{bottom:!0}]])]),p("li",null,[at((z(),j("a",{href:f.route("formulario-satisfaccion"),class:R([[{underline:f.route().current("formulario-satisfaccion")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},s[12]||(s[12]=[J("Satisfacción")]),10,Uo)),[[u,{value:"formulario satisfacción",autoHide:!1},void 0,{bottom:!0}]])]),p("li",null,[f.$page.props.auth.user?at((z(),j("a",{key:0,href:f.route("dashboard"),class:R([[{underline:f.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},s[13]||(s[13]=[J("Dashboard")]),10,$o)),[[u,{value:"regresar al dashboard",autoHide:!1},void 0,{bottom:!0}]]):Qt("",!0)])])]),p("div",Go,[p("button",{class:R(["text-parrafo hover:text-secondary focus:outline-none",[{"!text-yellow-200 font-bold":n.value}]]),onClick:s[3]||(s[3]=d=>o.value=!o.value)},s[14]||(s[14]=[p("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[p("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]),2)])])]),o.value?(z(),j("div",Vo,[p("ul",qo,[p("li",null,[p("a",{href:f.route("capacitaciones.index"),class:R([[{underline:f.route().current("register")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Capacitaciones",10,Xo)]),p("li",null,[p("a",{href:f.route("register"),class:R([[{underline:f.route().current("register")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Registro",10,Ko)]),p("li",null,[at((z(),j("a",{href:f.route("formulario-satisfaccion"),class:R([[{underline:f.route().current("formulario-satisfaccion")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},s[15]||(s[15]=[J("Satisfacción")]),10,Zo)),[[u,{value:"formulario satisfacción",autoHide:!1},void 0,{bottom:!0}]])]),p("li",null,[f.$page.props.auth.user?(z(),j("a",{key:0,href:f.route("dashboard"),class:R([[{underline:f.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Dashboard",10,Qo)):Qt("",!0)])])])):Qt("",!0)],2),p("main",Jo,[ia(f.$slots,"default",{},void 0,!0)]),p("footer",{class:R(["px-2 bg-option2/90 text-parrafo flex flex-col py-6",{"!bg-black !text-white":n.value}])},[p("div",ti,[p("div",ei,[p("a",ni,[p("figure",null,[n.value?(z(),j("img",{key:0,class:"w-full",src:$(Fe),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,ai)):(z(),j("img",{key:1,class:"w-full",src:$(ze),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,ri)),s[16]||(s[16]=p("figcaption",{lang:"es",class:"hidden"}," Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),p("div",oi,[p("a",ii,[Dt($(oe),{icon:$(So),size:"xl"},null,8,["icon"])]),p("a",si,[Dt($(oe),{icon:$(Po),size:"xl"},null,8,["icon"])]),p("a",li,[Dt($(oe),{icon:$(_o),size:"xl"},null,8,["icon"])])]),p("div",null,[p("a",fi,[Dt($(fa),{class:"w-12 animate-bounce"})])])]),p("div",ci,[p("ul",ui,[(z(!0),j(sa,null,la(f.$page.props.infoPunto,d=>(z(),j("li",{class:"flex text-parrafo",key:d.id},[J(Le(d.punto.nombre)+" ",1),s[17]||(s[17]=p("br",null,null,-1)),J(" "+Le(d.punto.direccion),1)]))),128))])])],2),p("div",di,[p("a",mi,[p("figure",null,[p("img",{class:"w-full sm:w-5/6",src:$(De),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,pi),s[18]||(s[18]=p("figcaption",{lang:"es",class:"hidden"}," Esta es una imagen del logo del gobierno actual de colombia ",-1))])])])],2)}}},yi=Jn(gi,[["__scopeId","data-v-e8234d13"]]);export{ua as A,yi as P};
