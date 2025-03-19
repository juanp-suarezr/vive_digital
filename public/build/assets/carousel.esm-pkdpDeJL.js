import{d as pa,l as an}from"./logo-lM4P1BV6.js";import{_ as ba,l as rn}from"./logo_white-DE4Vqejm.js";import{o as S,c as I,d as m,H as ha,I as ga,m as ya,g as Et,j as wa,p as xa,i as Jt,Q as te,E as Dn,h as ft,n as W,b as lt,u as q,f as it,G as ut,a as ee,F as Rt,s as Ft,t as Pe,B as ka,D as J,W as on,U as Sa,A as Y,l as sn,C as ln}from"./app-BRQUOElU.js";import{s as Aa}from"./index.esm-CmEzX0dS.js";import{a as Ia,s as Oa,b as _a}from"./index.esm-CZorXKej.js";import{R as Ca}from"./ripple.esm-B9TskgMn.js";import{s as Pa}from"./basecomponent.esm-MYJwcBd8.js";function Ea(t,e){return S(),I("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[m("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z","clip-rule":"evenodd"})])}const un="/build/assets/gobierno-VHX8UfDK.webp";var Rn={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(ha,function(){return function(n){function a(i){if(r[i])return r[i].exports;var o=r[i]={exports:{},id:i,loaded:!1};return n[i].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}var r={};return a.m=n,a.c=r,a.p="dist/",a(0)}([function(n,a,r){function i(k){return k&&k.__esModule?k:{default:k}}var o=Object.assign||function(k){for(var H=1;H<arguments.length;H++){var Q=arguments[H];for(var bt in Q)Object.prototype.hasOwnProperty.call(Q,bt)&&(k[bt]=Q[bt])}return k},l=r(1),s=(i(l),r(6)),u=i(s),f=r(7),c=i(f),d=r(8),p=i(d),x=r(9),O=i(x),C=r(10),h=i(C),y=r(11),A=i(y),T=r(14),N=i(T),L=[],B=!1,E={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},R=function(){var k=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(k&&(B=!0),B)return L=(0,A.default)(L,E),(0,h.default)(L,E.once),L},et=function(){L=(0,N.default)(),R()},w=function(){L.forEach(function(k,H){k.node.removeAttribute("data-aos"),k.node.removeAttribute("data-aos-easing"),k.node.removeAttribute("data-aos-duration"),k.node.removeAttribute("data-aos-delay")})},b=function(k){return k===!0||k==="mobile"&&O.default.mobile()||k==="phone"&&O.default.phone()||k==="tablet"&&O.default.tablet()||typeof k=="function"&&k()===!0},_=function(k){E=o(E,k),L=(0,N.default)();var H=document.all&&!window.atob;return b(E.disable)||H?w():(E.disableMutationObserver||p.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),E.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",E.easing),document.querySelector("body").setAttribute("data-aos-duration",E.duration),document.querySelector("body").setAttribute("data-aos-delay",E.delay),E.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?R(!0):E.startEvent==="load"?window.addEventListener(E.startEvent,function(){R(!0)}):document.addEventListener(E.startEvent,function(){R(!0)}),window.addEventListener("resize",(0,c.default)(R,E.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(R,E.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,h.default)(L,E.once)},E.throttleDelay)),E.disableMutationObserver||p.default.ready("[data-aos]",et),L)};n.exports={init:_,refresh:R,refreshHard:et}},function(n,a){},,,,,function(n,a){(function(r){function i(b,_,k){function H(P){var U=Z,yt=at;return Z=at=void 0,ht=P,$=b.apply(yt,U)}function Q(P){return ht=P,F=setTimeout(It,_),gt?H(P):$}function bt(P){var U=P-G,yt=P-ht,nn=_-U;return st?et(nn,rt-yt):nn}function At(P){var U=P-G,yt=P-ht;return G===void 0||U>=_||U<0||st&&yt>=rt}function It(){var P=w();return At(P)?Qt(P):void(F=setTimeout(It,bt(P)))}function Qt(P){return F=void 0,z&&Z?H(P):(Z=at=void 0,$)}function ke(){F!==void 0&&clearTimeout(F),ht=0,Z=G=at=F=void 0}function Dt(){return F===void 0?$:Qt(w())}function nt(){var P=w(),U=At(P);if(Z=arguments,at=this,G=P,U){if(F===void 0)return Q(G);if(st)return F=setTimeout(It,_),H(G)}return F===void 0&&(F=setTimeout(It,_)),$}var Z,at,rt,$,F,G,ht=0,gt=!1,st=!1,z=!0;if(typeof b!="function")throw new TypeError(d);return _=f(_)||0,l(k)&&(gt=!!k.leading,st="maxWait"in k,rt=st?R(f(k.maxWait)||0,_):rt,z="trailing"in k?!!k.trailing:z),nt.cancel=ke,nt.flush=Dt,nt}function o(b,_,k){var H=!0,Q=!0;if(typeof b!="function")throw new TypeError(d);return l(k)&&(H="leading"in k?!!k.leading:H,Q="trailing"in k?!!k.trailing:Q),i(b,_,{leading:H,maxWait:_,trailing:Q})}function l(b){var _=typeof b>"u"?"undefined":c(b);return!!b&&(_=="object"||_=="function")}function s(b){return!!b&&(typeof b>"u"?"undefined":c(b))=="object"}function u(b){return(typeof b>"u"?"undefined":c(b))=="symbol"||s(b)&&E.call(b)==x}function f(b){if(typeof b=="number")return b;if(u(b))return p;if(l(b)){var _=typeof b.valueOf=="function"?b.valueOf():b;b=l(_)?_+"":_}if(typeof b!="string")return b===0?b:+b;b=b.replace(O,"");var k=h.test(b);return k||y.test(b)?A(b.slice(2),k?2:8):C.test(b)?p:+b}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},d="Expected a function",p=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,y=/^0o[0-7]+$/i,A=parseInt,T=(typeof r>"u"?"undefined":c(r))=="object"&&r&&r.Object===Object&&r,N=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,L=T||N||Function("return this")(),B=Object.prototype,E=B.toString,R=Math.max,et=Math.min,w=function(){return L.Date.now()};n.exports=o}).call(a,function(){return this}())},function(n,a){(function(r){function i(w,b,_){function k(z){var P=nt,U=Z;return nt=Z=void 0,G=z,rt=w.apply(U,P)}function H(z){return G=z,$=setTimeout(At,b),ht?k(z):rt}function Q(z){var P=z-F,U=z-G,yt=b-P;return gt?R(yt,at-U):yt}function bt(z){var P=z-F,U=z-G;return F===void 0||P>=b||P<0||gt&&U>=at}function At(){var z=et();return bt(z)?It(z):void($=setTimeout(At,Q(z)))}function It(z){return $=void 0,st&&nt?k(z):(nt=Z=void 0,rt)}function Qt(){$!==void 0&&clearTimeout($),G=0,nt=F=Z=$=void 0}function ke(){return $===void 0?rt:It(et())}function Dt(){var z=et(),P=bt(z);if(nt=arguments,Z=this,F=z,P){if($===void 0)return H(F);if(gt)return $=setTimeout(At,b),k(F)}return $===void 0&&($=setTimeout(At,b)),rt}var nt,Z,at,rt,$,F,G=0,ht=!1,gt=!1,st=!0;if(typeof w!="function")throw new TypeError(c);return b=u(b)||0,o(_)&&(ht=!!_.leading,gt="maxWait"in _,at=gt?E(u(_.maxWait)||0,b):at,st="trailing"in _?!!_.trailing:st),Dt.cancel=Qt,Dt.flush=ke,Dt}function o(w){var b=typeof w>"u"?"undefined":f(w);return!!w&&(b=="object"||b=="function")}function l(w){return!!w&&(typeof w>"u"?"undefined":f(w))=="object"}function s(w){return(typeof w>"u"?"undefined":f(w))=="symbol"||l(w)&&B.call(w)==p}function u(w){if(typeof w=="number")return w;if(s(w))return d;if(o(w)){var b=typeof w.valueOf=="function"?w.valueOf():w;w=o(b)?b+"":b}if(typeof w!="string")return w===0?w:+w;w=w.replace(x,"");var _=C.test(w);return _||h.test(w)?y(w.slice(2),_?2:8):O.test(w)?d:+w}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},c="Expected a function",d=NaN,p="[object Symbol]",x=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,h=/^0o[0-7]+$/i,y=parseInt,A=(typeof r>"u"?"undefined":f(r))=="object"&&r&&r.Object===Object&&r,T=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,N=A||T||Function("return this")(),L=Object.prototype,B=L.toString,E=Math.max,R=Math.min,et=function(){return N.Date.now()};n.exports=i}).call(a,function(){return this}())},function(n,a){function r(f){var c=void 0,d=void 0;for(c=0;c<f.length;c+=1)if(d=f[c],d.dataset&&d.dataset.aos||d.children&&r(d.children))return!0;return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!i()}function l(f,c){var d=window.document,p=i(),x=new p(s);u=c,x.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function s(f){f&&f.forEach(function(c){var d=Array.prototype.slice.call(c.addedNodes),p=Array.prototype.slice.call(c.removedNodes),x=d.concat(p);if(r(x))return u()})}Object.defineProperty(a,"__esModule",{value:!0});var u=function(){};a.default={isSupported:o,ready:l}},function(n,a){function r(d,p){if(!(d instanceof p))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var o=function(){function d(p,x){for(var O=0;O<x.length;O++){var C=x[O];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(p,C.key,C)}}return function(p,x,O){return x&&d(p.prototype,x),O&&d(p,O),p}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function d(){r(this,d)}return o(d,[{key:"phone",value:function(){var p=i();return!(!l.test(p)&&!s.test(p.substr(0,4)))}},{key:"mobile",value:function(){var p=i();return!(!u.test(p)&&!f.test(p.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();a.default=new c},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(o,l,s){var u=o.node.getAttribute("data-aos-once");l>o.position?o.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!s&&u!=="true")&&o.node.classList.remove("aos-animate")},i=function(o,l){var s=window.pageYOffset,u=window.innerHeight;o.forEach(function(f,c){r(f,u+s,l)})};a.default=i},function(n,a,r){function i(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(a,"__esModule",{value:!0});var o=r(12),l=i(o),s=function(u,f){return u.forEach(function(c,d){c.node.classList.add("aos-init"),c.position=(0,l.default)(c.node,f.offset)}),u};a.default=s},function(n,a,r){function i(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(a,"__esModule",{value:!0});var o=r(13),l=i(o),s=function(u,f){var c=0,d=0,p=window.innerHeight,x={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(x.offset&&!isNaN(x.offset)&&(d=parseInt(x.offset)),x.anchor&&document.querySelectorAll(x.anchor)&&(u=document.querySelectorAll(x.anchor)[0]),c=(0,l.default)(u).top,x.anchorPlacement){case"top-bottom":break;case"center-bottom":c+=u.offsetHeight/2;break;case"bottom-bottom":c+=u.offsetHeight;break;case"top-center":c+=p/2;break;case"bottom-center":c+=p/2+u.offsetHeight;break;case"center-center":c+=p/2+u.offsetHeight/2;break;case"top-top":c+=p;break;case"bottom-top":c+=u.offsetHeight+p;break;case"center-top":c+=u.offsetHeight/2+p}return x.anchorPlacement||x.offset||isNaN(f)||(d=f),c+d};a.default=s},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(i){for(var o=0,l=0;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);)o+=i.offsetLeft-(i.tagName!="BODY"?i.scrollLeft:0),l+=i.offsetTop-(i.tagName!="BODY"?i.scrollTop:0),i=i.offsetParent;return{top:l,left:o}};a.default=r},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(i){return i=i||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(i,function(o){return{node:o}})};a.default=r}])})})(Rn);var Ta=Rn.exports;const Na=ga(Ta);function fn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fn(Object(n),!0).forEach(function(a){V(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ve(t){"@babel/helpers - typeof";return ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ve(t)}function ja(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ma(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function La(t,e,n){return e&&Ma(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ye(t,e){return Da(t)||Fa(t,e)||Fn(t,e)||Ba()}function qt(t){return za(t)||Ra(t)||Fn(t)||Va()}function za(t){if(Array.isArray(t))return Ee(t)}function Da(t){if(Array.isArray(t))return t}function Ra(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Fa(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,l;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(s){i=!0,l=s}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw l}}return a}}function Fn(t,e){if(t){if(typeof t=="string")return Ee(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ee(t,e)}}function Ee(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Va(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ba(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var cn=function(){},He={},Vn={},Bn=null,$n={mark:cn,measure:cn};try{typeof window<"u"&&(He=window),typeof document<"u"&&(Vn=document),typeof MutationObserver<"u"&&(Bn=MutationObserver),typeof performance<"u"&&($n=performance)}catch{}var $a=He.navigator||{},dn=$a.userAgent,mn=dn===void 0?"":dn,xt=He,M=Vn,vn=Bn,ne=$n;xt.document;var pt=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",Yn=~mn.indexOf("MSIE")||~mn.indexOf("Trident/"),ae,re,ie,oe,se,dt="___FONT_AWESOME___",Te=16,Hn="fa",Un="svg-inline--fa",Ct="data-fa-i2svg",Ne="data-fa-pseudo-element",Ya="data-fa-pseudo-element-pending",Ue="data-prefix",We="data-icon",pn="fontawesome-i2svg",Ha="async",Ua=["HTML","HEAD","STYLE","SCRIPT"],Wn=function(){try{return!0}catch{return!1}}(),j="classic",D="sharp",Ke=[j,D];function Xt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[j]}})}var Yt=Xt((ae={},V(ae,j,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),V(ae,D,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ae)),Ht=Xt((re={},V(re,j,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),V(re,D,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),re)),Ut=Xt((ie={},V(ie,j,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),V(ie,D,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ie)),Wa=Xt((oe={},V(oe,j,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),V(oe,D,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),oe)),Ka=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Kn="fa-layers-text",Ga=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,qa=Xt((se={},V(se,j,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),V(se,D,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),se)),Gn=[1,2,3,4,5,6,7,8,9,10],Xa=Gn.concat([11,12,13,14,15,16,17,18,19,20]),Za=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wt=new Set;Object.keys(Ht[j]).map(Wt.add.bind(Wt));Object.keys(Ht[D]).map(Wt.add.bind(Wt));var Qa=[].concat(Ke,qt(Wt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY]).concat(Gn.map(function(t){return"".concat(t,"x")})).concat(Xa.map(function(t){return"w-".concat(t)})),Bt=xt.FontAwesomeConfig||{};function Ja(t){var e=M.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function tr(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(M&&typeof M.querySelector=="function"){var er=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];er.forEach(function(t){var e=Ye(t,2),n=e[0],a=e[1],r=tr(Ja(n));r!=null&&(Bt[a]=r)})}var qn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Hn,replacementClass:Un,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bt.familyPrefix&&(Bt.cssPrefix=Bt.familyPrefix);var Lt=v(v({},qn),Bt);Lt.autoReplaceSvg||(Lt.observeMutations=!1);var g={};Object.keys(qn).forEach(function(t){Object.defineProperty(g,t,{enumerable:!0,set:function(n){Lt[t]=n,$t.forEach(function(a){return a(g)})},get:function(){return Lt[t]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(e){Lt.cssPrefix=e,$t.forEach(function(n){return n(g)})},get:function(){return Lt.cssPrefix}});xt.FontAwesomeConfig=g;var $t=[];function nr(t){return $t.push(t),function(){$t.splice($t.indexOf(t),1)}}var wt=Te,ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ar(t){if(!(!t||!pt)){var e=M.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=M.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return M.head.insertBefore(e,a),t}}var rr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Kt(){for(var t=12,e="";t-- >0;)e+=rr[Math.random()*62|0];return e}function zt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ge(t){return t.classList?zt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Xn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ir(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Xn(t[n]),'" ')},"").trim()}function ge(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function qe(t){return t.size!==ot.size||t.x!==ot.x||t.y!==ot.y||t.rotate!==ot.rotate||t.flipX||t.flipY}function or(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:s,path:u}}function sr(t){var e=t.transform,n=t.width,a=n===void 0?Te:n,r=t.height,i=r===void 0?Te:r,o=t.startCentered,l=o===void 0?!1:o,s="";return l&&Yn?s+="translate(".concat(e.x/wt-a/2,"em, ").concat(e.y/wt-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(e.x/wt,"em), calc(-50% + ").concat(e.y/wt,"em)) "):s+="translate(".concat(e.x/wt,"em, ").concat(e.y/wt,"em) "),s+="scale(".concat(e.size/wt*(e.flipX?-1:1),", ").concat(e.size/wt*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var lr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
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
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
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
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
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
  left: calc(var(--fa-li-width, 2em) * -1);
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
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
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
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
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
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zn(){var t=Hn,e=Un,n=g.cssPrefix,a=g.replacementClass,r=lr;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}var bn=!1;function Se(){g.autoAddCss&&!bn&&(ar(Zn()),bn=!0)}var ur={mixout:function(){return{dom:{css:Zn,insertCss:Se}}},hooks:function(){return{beforeDOMElementCreation:function(){Se()},beforeI2svg:function(){Se()}}}},mt=xt||{};mt[dt]||(mt[dt]={});mt[dt].styles||(mt[dt].styles={});mt[dt].hooks||(mt[dt].hooks={});mt[dt].shims||(mt[dt].shims=[]);var tt=mt[dt],Qn=[],fr=function t(){M.removeEventListener("DOMContentLoaded",t),pe=1,Qn.map(function(e){return e()})},pe=!1;pt&&(pe=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),pe||M.addEventListener("DOMContentLoaded",fr));function cr(t){pt&&(pe?setTimeout(t,0):Qn.push(t))}function Zt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Xn(t):"<".concat(e," ").concat(ir(a),">").concat(i.map(Zt).join(""),"</").concat(e,">")}function hn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ae=function(e,n,a,r){var i=Object.keys(e),o=i.length,l=n,s,u,f;for(a===void 0?(s=1,f=e[i[0]]):(s=0,f=a);s<o;s++)u=i[s],f=l(f,e[u],u,e);return f};function dr(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function je(t){var e=dr(t);return e.length===1?e[0].toString(16):null}function mr(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function gn(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Me(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=gn(e);typeof tt.hooks.addPack=="function"&&!r?tt.hooks.addPack(t,gn(e)):tt.styles[t]=v(v({},tt.styles[t]||{}),i),t==="fas"&&Me("fa",e)}var le,ue,fe,Nt=tt.styles,vr=tt.shims,pr=(le={},V(le,j,Object.values(Ut[j])),V(le,D,Object.values(Ut[D])),le),Xe=null,Jn={},ta={},ea={},na={},aa={},br=(ue={},V(ue,j,Object.keys(Yt[j])),V(ue,D,Object.keys(Yt[D])),ue);function hr(t){return~Qa.indexOf(t)}function gr(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!hr(r)?r:null}var ra=function(){var e=function(i){return Ae(Nt,function(o,l,s){return o[s]=Ae(l,i,{}),o},{})};Jn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){r[s.toString(16)]=o})}return r}),ta=e(function(r,i,o){if(r[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){r[s]=o})}return r}),aa=e(function(r,i,o){var l=i[2];return r[o]=o,l.forEach(function(s){r[s]=o}),r});var n="far"in Nt||g.autoFetchSvg,a=Ae(vr,function(r,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:s}),r},{names:{},unicodes:{}});ea=a.names,na=a.unicodes,Xe=ye(g.styleDefault,{family:g.familyDefault})};nr(function(t){Xe=ye(t.styleDefault,{family:g.familyDefault})});ra();function Ze(t,e){return(Jn[t]||{})[e]}function yr(t,e){return(ta[t]||{})[e]}function _t(t,e){return(aa[t]||{})[e]}function ia(t){return ea[t]||{prefix:null,iconName:null}}function wr(t){var e=na[t],n=Ze("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function kt(){return Xe}var Qe=function(){return{prefix:null,iconName:null,rest:[]}};function ye(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?j:n,r=Yt[a][t],i=Ht[a][t]||Ht[a][r],o=t in tt.styles?t:null;return i||o||null}var yn=(fe={},V(fe,j,Object.keys(Ut[j])),V(fe,D,Object.keys(Ut[D])),fe);function we(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},V(e,j,"".concat(g.cssPrefix,"-").concat(j)),V(e,D,"".concat(g.cssPrefix,"-").concat(D)),e),o=null,l=j;(t.includes(i[j])||t.some(function(u){return yn[j].includes(u)}))&&(l=j),(t.includes(i[D])||t.some(function(u){return yn[D].includes(u)}))&&(l=D);var s=t.reduce(function(u,f){var c=gr(g.cssPrefix,f);if(Nt[f]?(f=pr[l].includes(f)?Wa[l][f]:f,o=f,u.prefix=f):br[l].indexOf(f)>-1?(o=f,u.prefix=ye(f,{family:l})):c?u.iconName=c:f!==g.replacementClass&&f!==i[j]&&f!==i[D]&&u.rest.push(f),!r&&u.prefix&&u.iconName){var d=o==="fa"?ia(u.iconName):{},p=_t(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||p||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Nt.far&&Nt.fas&&!g.autoFetchSvg&&(u.prefix="fas")}return u},Qe());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===D&&(Nt.fass||g.autoFetchSvg)&&(s.prefix="fass",s.iconName=_t(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=kt()||"fas"),s}var xr=function(){function t(){ja(this,t),this.definitions={}}return La(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=v(v({},n.definitions[l]||{}),o[l]),Me(l,o[l]);var s=Ut[j][l];s&&Me(s,o[l]),ra()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],l=o.prefix,s=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(c){typeof c=="string"&&(n[l][c]=u)}),n[l][s]=u}),n}}]),t}(),wn=[],jt={},Mt={},kr=Object.keys(Mt);function Sr(t,e){var n=e.mixoutsTo;return wn=t,jt={},Object.keys(Mt).forEach(function(a){kr.indexOf(a)===-1&&delete Mt[a]}),wn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),ve(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=r[o][l]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){jt[o]||(jt[o]=[]),jt[o].push(i[o])})}a.provides&&a.provides(Mt)}),n}function Le(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=jt[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function Pt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=jt[t]||[];r.forEach(function(i){i.apply(null,n)})}function vt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Mt[t]?Mt[t].apply(null,e):void 0}function ze(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||kt();if(e)return e=_t(n,e)||e,hn(oa.definitions,n,e)||hn(tt.styles,n,e)}var oa=new xr,Ar=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,Pt("noAuto")},Ir={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return pt?(Pt("beforeI2svg",e),vt("pseudoElements2svg",e),vt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,cr(function(){_r({autoReplaceSvgRoot:n}),Pt("watch",e)})}},Or={icon:function(e){if(e===null)return null;if(ve(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:_t(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=ye(e[0]);return{prefix:a,iconName:_t(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(g.cssPrefix,"-"))>-1||e.match(Ka))){var r=we(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||kt(),iconName:_t(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=kt();return{prefix:i,iconName:_t(i,e)||e}}}},X={noAuto:Ar,config:g,dom:Ir,parse:Or,library:oa,findIconDefinition:ze,toHtml:Zt},_r=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?M:n;(Object.keys(tt.styles).length>0||g.autoFetchSvg)&&pt&&g.autoReplaceSvg&&X.dom.i2svg({node:a})};function xe(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return Zt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(pt){var a=M.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Cr(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(qe(o)&&n.found&&!a.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};r.style=ge(v(v({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Pr(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(g.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},r),{},{id:o}),children:a}]}]}function Je(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,l=t.symbol,s=t.title,u=t.maskId,f=t.titleId,c=t.extra,d=t.watchable,p=d===void 0?!1:d,x=a.found?a:n,O=x.width,C=x.height,h=r==="fak",y=[g.replacementClass,i?"".concat(g.cssPrefix,"-").concat(i):""].filter(function(R){return c.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(c.classes).join(" "),A={children:[],attributes:v(v({},c.attributes),{},{"data-prefix":r,"data-icon":i,class:y,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(C)})},T=h&&!~c.classes.indexOf("fa-fw")?{width:"".concat(O/C*16*.0625,"em")}:{};p&&(A.attributes[Ct]=""),s&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(f||Kt())},children:[s]}),delete A.attributes.title);var N=v(v({},A),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:l,styles:v(v({},T),c.styles)}),L=a.found&&n.found?vt("generateAbstractMask",N)||{children:[],attributes:{}}:vt("generateAbstractIcon",N)||{children:[],attributes:{}},B=L.children,E=L.attributes;return N.children=B,N.attributes=E,l?Pr(N):Cr(N)}function xn(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,l=t.watchable,s=l===void 0?!1:l,u=v(v(v({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[Ct]="");var f=v({},o.styles);qe(r)&&(f.transform=sr({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var c=ge(f);c.length>0&&(u.style=c);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function Er(t){var e=t.content,n=t.title,a=t.extra,r=v(v(v({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ge(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ie=tt.styles;function De(t){var e=t[0],n=t[1],a=t.slice(4),r=Ye(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Tr={found:!1,width:512,height:512};function Nr(t,e){!Wn&&!g.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Re(t,e){var n=e;return e==="fa"&&g.styleDefault!==null&&(e=kt()),new Promise(function(a,r){if(vt("missingIconAbstract"),n==="fa"){var i=ia(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ie[e]&&Ie[e][t]){var o=Ie[e][t];return a(De(o))}Nr(t,e),a(v(v({},Tr),{},{icon:g.showMissingIcons&&t?vt("missingIconAbstract")||{}:{}}))})}var kn=function(){},Fe=g.measurePerformance&&ne&&ne.mark&&ne.measure?ne:{mark:kn,measure:kn},Vt='FA "6.5.2"',jr=function(e){return Fe.mark("".concat(Vt," ").concat(e," begins")),function(){return sa(e)}},sa=function(e){Fe.mark("".concat(Vt," ").concat(e," ends")),Fe.measure("".concat(Vt," ").concat(e),"".concat(Vt," ").concat(e," begins"),"".concat(Vt," ").concat(e," ends"))},tn={begin:jr,end:sa},de=function(){};function Sn(t){var e=t.getAttribute?t.getAttribute(Ct):null;return typeof e=="string"}function Mr(t){var e=t.getAttribute?t.getAttribute(Ue):null,n=t.getAttribute?t.getAttribute(We):null;return e&&n}function Lr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(g.replacementClass)}function zr(){if(g.autoReplaceSvg===!0)return me.replace;var t=me[g.autoReplaceSvg];return t||me.replace}function Dr(t){return M.createElementNS("http://www.w3.org/2000/svg",t)}function Rr(t){return M.createElement(t)}function la(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Dr:Rr:n;if(typeof t=="string")return M.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(la(o,{ceFn:a}))}),r}function Fr(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var me={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(la(r),n)}),n.getAttribute(Ct)===null&&g.keepOriginalSource){var a=M.createComment(Fr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~Ge(n).indexOf(g.replacementClass))return me.replace(e);var r=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(l,s){return s===g.replacementClass||s.match(r)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(l){return Zt(l)}).join(`
`);n.setAttribute(Ct,""),n.innerHTML=o}};function An(t){t()}function ua(t,e){var n=typeof e=="function"?e:de;if(t.length===0)n();else{var a=An;g.mutateApproach===Ha&&(a=xt.requestAnimationFrame||An),a(function(){var r=zr(),i=tn.begin("mutate");t.map(r),i(),n()})}}var en=!1;function fa(){en=!0}function Ve(){en=!1}var be=null;function In(t){if(vn&&g.observeMutations){var e=t.treeCallback,n=e===void 0?de:e,a=t.nodeCallback,r=a===void 0?de:a,i=t.pseudoElementsCallback,o=i===void 0?de:i,l=t.observeMutationsRoot,s=l===void 0?M:l;be=new vn(function(u){if(!en){var f=kt();zt(u).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!Sn(c.addedNodes[0])&&(g.searchPseudoElements&&o(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&g.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&Sn(c.target)&&~Za.indexOf(c.attributeName))if(c.attributeName==="class"&&Mr(c.target)){var d=we(Ge(c.target)),p=d.prefix,x=d.iconName;c.target.setAttribute(Ue,p||f),x&&c.target.setAttribute(We,x)}else Lr(c.target)&&r(c.target)})}}),pt&&be.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Vr(){be&&be.disconnect()}function Br(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function $r(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=we(Ge(t));return r.prefix||(r.prefix=kt()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=yr(r.prefix,t.innerText)||Ze(r.prefix,je(t.innerText))),!r.iconName&&g.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Yr(t){var e=zt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return g.autoA11y&&(n?e["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(a||Kt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Hr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function On(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=$r(t),a=n.iconName,r=n.prefix,i=n.rest,o=Yr(t),l=Le("parseNodeAttributes",{},t),s=e.styleParser?Br(t):[];return v({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var Ur=tt.styles;function ca(t){var e=g.autoReplaceSvg==="nest"?On(t,{styleParser:!1}):On(t);return~e.extra.classes.indexOf(Kn)?vt("generateLayersText",t,e):vt("generateSvgReplacementMutation",t,e)}var St=new Set;Ke.map(function(t){St.add("fa-".concat(t))});Object.keys(Yt[j]).map(St.add.bind(St));Object.keys(Yt[D]).map(St.add.bind(St));St=qt(St);function _n(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!pt)return Promise.resolve();var n=M.documentElement.classList,a=function(c){return n.add("".concat(pn,"-").concat(c))},r=function(c){return n.remove("".concat(pn,"-").concat(c))},i=g.autoFetchSvg?St:Ke.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Ur));i.includes("fa")||i.push("fa");var o=[".".concat(Kn,":not([").concat(Ct,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=zt(t.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();var s=tn.begin("onTree"),u=l.reduce(function(f,c){try{var d=ca(c);d&&f.push(d)}catch(p){Wn||p.name==="MissingIcon"&&console.error(p)}return f},[]);return new Promise(function(f,c){Promise.all(u).then(function(d){ua(d,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),s(),f()})}).catch(function(d){s(),c(d)})})}function Wr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ca(t).then(function(n){n&&ua([n],e)})}function Kr(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:ze(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ze(r||{})),t(a,v(v({},n),{},{mask:r}))}}var Gr=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?ot:a,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,c=n.title,d=c===void 0?null:c,p=n.titleId,x=p===void 0?null:p,O=n.classes,C=O===void 0?[]:O,h=n.attributes,y=h===void 0?{}:h,A=n.styles,T=A===void 0?{}:A;if(e){var N=e.prefix,L=e.iconName,B=e.icon;return xe(v({type:"icon"},e),function(){return Pt("beforeDOMElementCreation",{iconDefinition:e,params:n}),g.autoA11y&&(d?y["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(x||Kt()):(y["aria-hidden"]="true",y.focusable="false")),Je({icons:{main:De(B),mask:s?De(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:L,transform:v(v({},ot),r),symbol:o,title:d,maskId:f,titleId:x,extra:{attributes:y,styles:T,classes:C}})})}},qr={mixout:function(){return{icon:Kr(Gr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=_n,n.nodeCallback=Wr,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?M:a,i=n.callback,o=i===void 0?function(){}:i;return _n(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,l=a.prefix,s=a.transform,u=a.symbol,f=a.mask,c=a.maskId,d=a.extra;return new Promise(function(p,x){Promise.all([Re(r,l),f.iconName?Re(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var C=Ye(O,2),h=C[0],y=C[1];p([n,Je({icons:{main:h,mask:y},prefix:l,iconName:r,transform:s,symbol:u,maskId:c,title:i,titleId:o,extra:d,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,l=n.styles,s=ge(l);s.length>0&&(r.style=s);var u;return qe(o)&&(u=vt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Xr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return xe({type:"layer"},function(){Pt("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(qt(i)).join(" ")},children:o}]})}}}},Zr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,l=o===void 0?[]:o,s=a.attributes,u=s===void 0?{}:s,f=a.styles,c=f===void 0?{}:f;return xe({type:"counter",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:a}),Er({content:n.toString(),title:i,extra:{attributes:u,styles:c,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(qt(l))}})})}}}},Qr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?ot:r,o=a.title,l=o===void 0?null:o,s=a.classes,u=s===void 0?[]:s,f=a.attributes,c=f===void 0?{}:f,d=a.styles,p=d===void 0?{}:d;return xe({type:"text",content:n},function(){return Pt("beforeDOMElementCreation",{content:n,params:a}),xn({content:n,transform:v(v({},ot),i),title:l,extra:{attributes:c,styles:p,classes:["".concat(g.cssPrefix,"-layers-text")].concat(qt(u))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,l=null,s=null;if(Yn){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return g.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,xn({content:n.innerHTML,width:l,height:s,transform:i,title:r,extra:o,watchable:!0})])}}},Jr=new RegExp('"',"ug"),Cn=[1105920,1112319];function ti(t){var e=t.replace(Jr,""),n=mr(e,0),a=n>=Cn[0]&&n<=Cn[1],r=e.length===2?e[0]===e[1]:!1;return{value:je(r?e[0]:e),isSecondary:a||r}}function Pn(t,e){var n="".concat(Ya).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=zt(t.children),o=i.filter(function(B){return B.getAttribute(Ne)===e})[0],l=xt.getComputedStyle(t,e),s=l.getPropertyValue("font-family").match(Ga),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!s)return t.removeChild(o),a();if(s&&f!=="none"&&f!==""){var c=l.getPropertyValue("content"),d=~["Sharp"].indexOf(s[2])?D:j,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Ht[d][s[2].toLowerCase()]:qa[d][u],x=ti(c),O=x.value,C=x.isSecondary,h=s[0].startsWith("FontAwesome"),y=Ze(p,O),A=y;if(h){var T=wr(O);T.iconName&&T.prefix&&(y=T.iconName,p=T.prefix)}if(y&&!C&&(!o||o.getAttribute(Ue)!==p||o.getAttribute(We)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);var N=Hr(),L=N.extra;L.attributes[Ne]=e,Re(y,p).then(function(B){var E=Je(v(v({},N),{},{icons:{main:B,mask:Qe()},prefix:p,iconName:A,extra:L,watchable:!0})),R=M.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=E.map(function(et){return Zt(et)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function ei(t){return Promise.all([Pn(t,"::before"),Pn(t,"::after")])}function ni(t){return t.parentNode!==document.head&&!~Ua.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ne)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function En(t){if(pt)return new Promise(function(e,n){var a=zt(t.querySelectorAll("*")).filter(ni).map(ei),r=tn.begin("searchPseudoElements");fa(),Promise.all(a).then(function(){r(),Ve(),e()}).catch(function(){r(),Ve(),n()})})}var ai={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=En,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?M:a;g.searchPseudoElements&&En(r)}}},Tn=!1,ri={mixout:function(){return{dom:{unwatch:function(){fa(),Tn=!0}}}},hooks:function(){return{bootstrap:function(){In(Le("mutationObserverCallbacks",{}))},noAuto:function(){Vr()},watch:function(n){var a=n.observeMutationsRoot;Tn?Ve():In(Le("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Nn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return a.flipX=!0,a;if(o&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(o){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},n)},ii={mixout:function(){return{parse:{transform:function(n){return Nn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Nn(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(s," ").concat(u," ").concat(f)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:l,inner:c,path:d};return{tag:"g",attributes:v({},p.outer),children:[{tag:"g",attributes:v({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:v(v({},a.icon.attributes),p.path)}]}]}}}},Oe={x:0,y:0,width:"100%",height:"100%"};function jn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function oi(t){return t.tag==="g"?t.children:[t]}var si={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?we(r.split(" ").map(function(o){return o.trim()})):Qe();return i.prefix||(i.prefix=kt()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,u=i.width,f=i.icon,c=o.width,d=o.icon,p=or({transform:s,containerWidth:c,iconWidth:u}),x={tag:"rect",attributes:v(v({},Oe),{},{fill:"white"})},O=f.children?{children:f.children.map(jn)}:{},C={tag:"g",attributes:v({},p.inner),children:[jn(v({tag:f.tag,attributes:v(v({},f.attributes),p.path)},O))]},h={tag:"g",attributes:v({},p.outer),children:[C]},y="mask-".concat(l||Kt()),A="clip-".concat(l||Kt()),T={tag:"mask",attributes:v(v({},Oe),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,h]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:oi(d)},T]};return a.push(N,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(y,")")},Oe)}),{children:a,attributes:r}}}},li={provides:function(e){var n=!1;xt.matchMedia&&(n=xt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=v(v({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:v(v({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:v(v({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},ui={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},fi=[ur,qr,Xr,Zr,Qr,ai,ri,ii,si,li,ui];Sr(fi,{mixoutsTo:X});X.noAuto;X.config;X.library;X.dom;var Be=X.parse;X.findIconDefinition;X.toHtml;var ci=X.icon;X.layer;X.text;X.counter;function Mn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function ct(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Mn(Object(n),!0).forEach(function(a){K(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Mn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function di(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function mi(t){var e=di(t,"string");return typeof e=="symbol"?e:e+""}function he(t){"@babel/helpers - typeof";return he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},he(t)}function K(t,e,n){return e=mi(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vi(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function pi(t,e){if(t==null)return{};var n=vi(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},da={exports:{}};(function(t){(function(e){var n=function(h,y,A){if(!u(y)||c(y)||d(y)||p(y)||s(y))return y;var T,N=0,L=0;if(f(y))for(T=[],L=y.length;N<L;N++)T.push(n(h,y[N],A));else{T={};for(var B in y)Object.prototype.hasOwnProperty.call(y,B)&&(T[h(B,A)]=n(h,y[B],A))}return T},a=function(h,y){y=y||{};var A=y.separator||"_",T=y.split||/(?=[A-Z])/;return h.split(T).join(A)},r=function(h){return x(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(y,A){return A?A.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},i=function(h){var y=r(h);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(h,y){return a(h,y).toLowerCase()},l=Object.prototype.toString,s=function(h){return typeof h=="function"},u=function(h){return h===Object(h)},f=function(h){return l.call(h)=="[object Array]"},c=function(h){return l.call(h)=="[object Date]"},d=function(h){return l.call(h)=="[object RegExp]"},p=function(h){return l.call(h)=="[object Boolean]"},x=function(h){return h=h-0,h===h},O=function(h,y){var A=y&&"process"in y?y.process:y;return typeof A!="function"?h:function(T,N){return A(T,h,N)}},C={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(h,y){return n(O(r,y),h)},decamelizeKeys:function(h,y){return n(O(o,y),h,y)},pascalizeKeys:function(h,y){return n(O(i,y),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=C:e.humps=C})(bi)})(da);var hi=da.exports,gi=["class","style"];function yi(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=hi.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function wi(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ma(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(s){return ma(s)}),r=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.class=wi(f);break;case"style":s.style=yi(f);break;default:s.attrs[u]=f}return s},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=pi(n,gi);return xa(t.tag,ct(ct(ct({},e),{},{class:r.class,style:ct(ct({},r.style),o)},r.attrs),l),a)}var va=!1;try{va=!0}catch{}function xi(){if(!va&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function _e(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?K({},t,e):{}}function ki(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},K(K(K(K(K(K(K(K(K(K(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),K(K(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Ln(t){if(t&&he(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Be.icon)return Be.icon(t);if(t===null)return null;if(he(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Ce=ya({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=Et(function(){return Ln(e.icon)}),i=Et(function(){return _e("classes",ki(e))}),o=Et(function(){return _e("transform",typeof e.transform=="string"?Be.transform(e.transform):e.transform)}),l=Et(function(){return _e("mask",Ln(e.mask))}),s=Et(function(){return ci(r.value,ct(ct(ct(ct({},i.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});wa(s,function(f){if(!f)return xi("Could not find one or more icon(s)",r.value,l.value)},{immediate:!0});var u=Et(function(){return s.value?ma(s.value.abstract[0],{},a):null});return function(){return u.value}}}),Si={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Ai={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},Ii={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const Oi={class:"fixed top-64 w-screen",style:{"z-index":"50","pointer-events":"none"}},_i={class:"xl:w-[5%] sm:w-[6%] w-[10%] sm:ml-[95%] ml-[90%]"},Ci={class:"bg-azul w-full py-4 sm:rounded-tl-xl sm:rounded-bl-xl rounded-tl-md rounded-bl-md",style:{"pointer-events":"auto"}},Pi={class:"w-full py-2 ps-8 flex bg-[#3366cc]"},Ei={class:"flex w-5/6 sm:w-[20%] md:w-[10%] z-20",href:"https://www.gov.co/",target:"_blank"},Ti=["src"],Ni={class:"mx-auto px-4 sm:px-6 lg:px-8"},ji={class:"flex w-full justify-between items-center"},Mi={class:"flex-shrink-0 sm:w-1/4 w-3/6 p-4"},Li={href:"/Welcome",class:"text-white text-2xl font-semibold"},zi=["src"],Di=["src"],Ri={class:"hidden md:block"},Fi={class:"flex space-x-4"},Vi=["href"],Bi=["href"],$i=["href"],Yi={class:"md:hidden z-20"},Hi={key:0,class:"md:hidden"},Ui={class:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},Wi=["href"],Ki=["href"],Gi=["href"],qi={class:"flex-1 overflow-y-auto overflow-x-hidden bg-light text-black"},Xi={class:"container mx-auto flex flex-wrap items-center justify-between"},Zi={class:"flex items-center flex-shrink-0 mr-6 w-1/6"},Qi={href:"/Welcome",class:"w-full"},Ji=["src"],to=["src"],eo={class:"flex justify-center items-center space-x-4 text-primary"},no={href:"https://www.instagram.com/alcaldiadepereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},ao={href:"https://www.facebook.com/AlcaldiaDePereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},ro={href:"https://www.youtube.com/channel/UCAFZZcG6RI0gw5DkrT6kMSQ/videos",target:"_blank",class:"hover:text-parrafo transition duration-300"},io={href:"#inicio",class:"text-primary hover:text-parrafo transition duration-300"},oo={class:"container px-4 mt-8"},so={class:"custom-list space-y-2"},lo={class:"w-full py-4 ps-8 flex bg-[#3366cc]"},uo={class:"flex w-5/6 sm:w-[25%] md:w-[15%]",href:"https://www.gov.co/",target:"_blank"},fo=["src"],co={__name:"PageLayout",setup(t){const e=pa.useToast();Na.init();const n=Jt(te().props.accesibilidad.contraste),a=Jt(te().props.accesibilidad.letra),r=Jt(""),i=Jt(!1),o=()=>{n.value=!n.value,te().props.accesibilidad.contraste=n.value},l=(s,u)=>{s>=2?(a.value=2,e.open({message:"Limite de aumento de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):s<=-2?(a.value=-2,e.open({message:"Limite de reducción de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):a.value=s,r.value=u,te().props.accesibilidad.letra=a.value};return(s,u)=>{const f=Dn("tooltip");return S(),I("div",{class:W(["flex flex-col overflow-x-hidden bg-option1",{"!bg-black":n.value}])},[m("div",Oi,[m("div",_i,[m("div",Ci,[ft((S(),I("button",{onClick:o,class:W(["flex w-auto py-2 lg:px-4 px-2",{"bg-[#3366cc]":n.value}])},u[4]||(u[4]=[m("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[m("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512"},[m("path",{d:"M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})])],-1)]),2)),[[f,{value:"Contraste",autoHide:!1},void 0,{center:!0}]]),ft((S(),I("button",{onClick:u[0]||(u[0]=c=>l(a.value-1,"reducir")),class:W(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="reducir"&&!n.value}])},u[5]||(u[5]=[m("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[m("p",{class:"font-extrabold text-xs lg:text-base"},[lt("A"),m("sup",null,"-")])],-1)]),2)),[[f,{value:"Reducir letra",autoHide:!1},void 0,{center:!0}]]),ft((S(),I("button",{onClick:u[1]||(u[1]=c=>l(0,"default")),class:W(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="default"&&!n.value}])},u[6]||(u[6]=[m("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[m("p",{class:"font-extrabold text-xs lg:text-base"},[lt("A"),m("sup",null,"n")])],-1)]),2)),[[f,{value:"Restablecer letra",autoHide:!1},void 0,{center:!0}]]),ft((S(),I("button",{onClick:u[2]||(u[2]=c=>l(a.value+1,"aumentar")),class:W(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="aumentar"&&!n.value}])},u[7]||(u[7]=[m("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[m("p",{class:"font-extrabold text-xs lg:text-base"},[lt("A"),m("sup",null,"+")])],-1)]),2)),[[f,{value:"Aumentar letra",autoHide:!1},void 0,{center:!0}]])])])]),m("header",Pi,[m("a",Ei,[m("figure",null,[m("img",{class:"w-full sm:w-5/6",src:q(un),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,Ti),u[8]||(u[8]=m("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo del gobierno actual de colombia ",-1))])])]),m("nav",{class:W(["w-full h-full bg-option2 py-2 text-xl sm:text-2xl text-parrafo z-20",[{"!text-yellow-200 font-bold !bg-black":n.value},a.value==-2?"!text-base !sm:text-lg":a.value==-1?"!text-lg !sm:text-xl":a.value==1?"!text-2xl !sm:text-4xl":a.value==2?"!text-4xl !sm:text-6xl":""]])},[m("div",Ni,[m("div",ji,[m("div",Mi,[m("a",Li,[m("figure",null,[n.value?(S(),I("img",{key:0,class:"w-full sm:w-5/6",src:q(rn),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,zi)):(S(),I("img",{key:1,class:"w-full sm:w-5/6",src:q(an),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Di)),u[9]||(u[9]=m("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),m("div",Ri,[m("ul",Fi,[m("li",null,[ft((S(),I("a",{href:s.route("capacitaciones.index"),class:W([[{underline:s.route().current("register")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},u[10]||(u[10]=[lt("Capacitaciones")]),10,Vi)),[[f,{value:"Registro de ingreso al punto",autoHide:!1},void 0,{bottom:!0}]])]),m("li",null,[ft((S(),I("a",{href:s.route("register"),class:W([[{underline:s.route().current("register")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},u[11]||(u[11]=[lt("Registro")]),10,Bi)),[[f,{value:"Registro de ingreso al punto",autoHide:!1},void 0,{bottom:!0}]])]),m("li",null,[s.$page.props.auth.user?ft((S(),I("a",{key:0,href:s.route("dashboard"),class:W([[{underline:s.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},u[12]||(u[12]=[lt("Dashboard")]),10,$i)),[[f,{value:"regresar al dashboard",autoHide:!1},void 0,{bottom:!0}]]):it("",!0)])])]),m("div",Yi,[m("button",{class:W(["text-parrafo hover:text-secondary focus:outline-none",[{"!text-yellow-200 font-bold":n.value}]]),onClick:u[3]||(u[3]=c=>i.value=!i.value)},u[13]||(u[13]=[m("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]),2)])])]),i.value?(S(),I("div",Hi,[m("ul",Ui,[m("li",null,[m("a",{href:s.route("capacitaciones.index"),class:W([[{underline:s.route().current("register")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Capacitaciones",10,Wi)]),m("li",null,[m("a",{href:s.route("register"),class:W([[{underline:s.route().current("register")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Registro",10,Ki)]),m("li",null,[s.$page.props.auth.user?(S(),I("a",{key:0,href:s.route("dashboard"),class:W([[{underline:s.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Dashboard",10,Gi)):it("",!0)])])])):it("",!0)],2),m("main",qi,[ut(s.$slots,"default",{},void 0,!0)]),m("footer",{class:W(["px-2 bg-option2/90 text-parrafo flex flex-col py-6",{"!bg-black !text-white":n.value}])},[m("div",Xi,[m("div",Zi,[m("a",Qi,[m("figure",null,[n.value?(S(),I("img",{key:0,class:"w-full",src:q(rn),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Ji)):(S(),I("img",{key:1,class:"w-full",src:q(an),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,to)),u[14]||(u[14]=m("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),m("div",eo,[m("a",no,[ee(q(Ce),{icon:q(Si),size:"xl"},null,8,["icon"])]),m("a",ao,[ee(q(Ce),{icon:q(Ai),size:"xl"},null,8,["icon"])]),m("a",ro,[ee(q(Ce),{icon:q(Ii),size:"xl"},null,8,["icon"])])]),m("div",null,[m("a",io,[ee(q(Ea),{class:"w-12 animate-bounce"})])])]),m("div",oo,[m("ul",so,[(S(!0),I(Rt,null,Ft(s.$page.props.infoPunto,c=>(S(),I("li",{class:"flex text-parrafo",key:c.id},[lt(Pe(c.punto.nombre)+" ",1),u[15]||(u[15]=m("br",null,null,-1)),lt(" "+Pe(c.punto.direccion),1)]))),128))])])],2),m("div",lo,[m("a",uo,[m("figure",null,[m("img",{class:"w-full sm:w-5/6",src:q(un),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,fo),u[16]||(u[16]=m("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo del gobierno actual de colombia ",-1))])])])],2)}}},Fo=ba(co,[["__scopeId","data-v-af647fac"]]);var mo={root:function(e){var n=e.instance;return["p-carousel p-component",{"p-carousel-vertical":n.isVertical(),"p-carousel-horizontal":!n.isVertical()}]},header:"p-carousel-header",content:"p-carousel-content",container:"p-carousel-container",previousButton:function(e){var n=e.instance;return["p-carousel-prev p-link",{"p-disabled":n.backwardIsDisabled}]},previousButtonIcon:"p-carousel-next-icon",itemsContent:"p-carousel-items-content",itemsContainer:"p-carousel-items-container",itemCloned:function(e){var n=e.index,a=e.value,r=e.totalShiftedItems,i=e.d_numVisible;return["p-carousel-item p-carousel-item-cloned",{"p-carousel-item-active":r*-1===a.length+i,"p-carousel-item-start":n===0,"p-carousel-item-end":a.slice(-1*i).length-1===n}]},item:function(e){var n=e.instance,a=e.index;return["p-carousel-item",{"p-carousel-item-active":n.firstIndex()<=a&&n.lastIndex()>=a,"p-carousel-item-start":n.firstIndex()===a,"p-carousel-item-end":n.lastIndex()===a}]},nextButton:function(e){var n=e.instance;return["p-carousel-next p-link",{"p-disabled":n.forwardIsDisabled}]},nextButtonIcon:"p-carousel-prev-icon",indicators:"p-carousel-indicators p-reset",indicator:function(e){var n=e.instance,a=e.index;return["p-carousel-indicator",{"p-highlight":n.d_page===a}]},indicatorButton:"p-link",footer:"p-carousel-footer"},vo=ka.extend({name:"carousel",classes:mo}),po={name:"BaseCarousel",extends:Pa,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},style:vo,provide:function(){return{$parentInstance:this}}};function Tt(t){return yo(t)||go(t)||ho(t)||bo()}function bo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ho(t,e){if(t){if(typeof t=="string")return $e(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $e(t,e)}}function go(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function yo(t){if(Array.isArray(t))return $e(t)}function $e(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var wo={name:"Carousel",extends:po,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(e){e>this.d_page?this.navForward({},e):e<this.d_page&&this.navBackward({},e),this.d_page=e},circular:function(e){this.d_circular=e},numVisible:function(e,n){this.d_numVisible=e,this.d_oldNumVisible=n},numScroll:function(e,n){this.d_oldNumScroll=n,this.d_numScroll=e},value:function(e){this.d_oldValue=e}},mounted:function(){var e=!1;if(this.$el.setAttribute(this.attributeSelector,""),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var n=this.totalShiftedItems;this.d_page===0?n=-1*this.d_numVisible:n===0&&(n=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),n!==this.totalShiftedItems&&(this.totalShiftedItems=n,e=!0)}!e&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var e=this.isCircular(),n=!1,a=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var r=this.d_page;this.totalIndicators!==0&&r>=this.totalIndicators&&(r=this.totalIndicators-1,this.$emit("update:page",r),this.d_page=r,n=!0),a=r*this.d_numScroll*-1,e&&(a-=this.d_numVisible),r===this.totalIndicators-1&&this.remainingItems>0?(a+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,a!==this.totalShiftedItems&&(this.totalShiftedItems=a,n=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(a*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(a*(100/this.d_numVisible),"%, 0, 0)")}e&&(this.d_page===0?a=-1*this.d_numVisible:a===0&&(a=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),a!==this.totalShiftedItems&&(this.totalShiftedItems=a,n=!0)),!n&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:e===this.d_page}}},step:function(e,n){var a=this.totalShiftedItems,r=this.isCircular();if(n!=null)a=this.d_numScroll*n*-1,r&&(a-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{a+=this.d_numScroll*e,this.isRemainingItemsAdded&&(a+=this.remainingItems-this.d_numScroll*e,this.isRemainingItemsAdded=!1);var i=r?a+this.d_numVisible:a;n=Math.abs(Math.floor(i/this.d_numScroll))}r&&this.d_page===this.totalIndicators-1&&e===-1?(a=-1*(this.value.length+this.d_numVisible),n=0):r&&this.d_page===0&&e===1?(a=0,n=this.totalIndicators-1):n===this.totalIndicators-1&&this.remainingItems>0&&(a+=this.remainingItems*-1-this.d_numScroll*e,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&J.removeClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(a*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(a*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=a,this.$emit("update:page",n),this.d_page=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var e=window.innerWidth,n={numVisible:this.numVisible,numScroll:this.numScroll},a=0;a<this.responsiveOptions.length;a++){var r=this.responsiveOptions[a];parseInt(r.breakpoint,10)>=e&&(n=r)}if(this.d_numScroll!==n.numScroll){var i=this.d_page;i=parseInt(i*this.d_numScroll/n.numScroll),this.totalShiftedItems=n.numScroll*i*-1,this.isCircular()&&(this.totalShiftedItems-=n.numVisible),this.d_numScroll=n.numScroll,this.$emit("update:page",i),this.d_page=i}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},navBackward:function(e,n){(this.d_circular||this.d_page!==0)&&this.step(1,n),this.allowAutoplay=!1,e.cancelable&&e.preventDefault()},navForward:function(e,n){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,n),this.allowAutoplay=!1,e.cancelable&&e.preventDefault()},onIndicatorClick:function(e,n){var a=this.d_page;n>a?this.navForward(e,n):n<a&&this.navBackward(e,n)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&J.addClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(e){var n=e.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(e){var n=e.changedTouches[0],a=this.isVertical()?n.pageY-this.startPos.y:n.pageX-this.startPos.x;Math.abs(a)>this.swipeThreshold&&e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var n=e.changedTouches[0];this.isVertical()?this.changePageOnTouch(e,n.pageY-this.startPos.y):this.changePageOnTouch(e,n.pageX-this.startPos.x)},changePageOnTouch:function(e,n){Math.abs(n)>this.swipeThreshold&&(n<0?this.navForward(e):this.navBackward(e))},onIndicatorKeydown:function(e){switch(e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":e.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var e=Tt(J.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===e.length?e.length-1:n+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=Tt(J.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,e.length-1)},onTabKey:function(){var e=Tt(J.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=e.findIndex(function(i){return J.getAttribute(i,"data-p-highlight")===!0}),a=J.findSingle(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=e.findIndex(function(i){return i===a.parentElement});e[r].children[0].tabIndex="-1",e[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var e=Tt(J.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=J.findSingle(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return e.findIndex(function(a){return a===n.parentElement})},changedFocusedIndicator:function(e,n){var a=Tt(J.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));a[e].children[0].tabIndex="-1",a[n].children[0].tabIndex="0",a[n].children[0].focus()},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(n){e.calculatePosition(n)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var e=this;this.interval=setInterval(function(){e.d_page===e.totalIndicators-1?e.step(-1,0):e.step(-1,e.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var e;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",J.setAttribute(this.carouselStyle,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.body.appendChild(this.carouselStyle)}var n=`
                .p-carousel[`.concat(this.attributeSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var a=Tt(this.responsiveOptions),r=on.localeComparator();a.sort(function(l,s){var u=l.breakpoint,f=s.breakpoint;return on.sort(u,f,-1,r)});for(var i=0;i<a.length;i++){var o=a[i];n+=`
                        @media screen and (max-width: `.concat(o.breakpoint,`) {
                            .p-carousel[`).concat(this.attributeSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/o.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=n},isVertical:function(){return this.orientation==="vertical"},isCircular:function(){return this.value&&this.d_circular&&this.value.length>=this.d_numVisible},isAutoplay:function(){return this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},attributeSelector:function(){return Sa()},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var e;return((e=this.$primevue.config)===null||e===void 0||(e=e.locale)===null||e===void 0?void 0:e.emptyMessage)||""}},components:{ChevronRightIcon:Ia,ChevronDownIcon:Aa,ChevronLeftIcon:Oa,ChevronUpIcon:_a},directives:{ripple:Ca}};function Gt(t){"@babel/helpers - typeof";return Gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gt(t)}function zn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function ce(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?zn(Object(n),!0).forEach(function(a){xo(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):zn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function xo(t,e,n){return e=ko(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ko(t){var e=So(t,"string");return Gt(e)=="symbol"?e:String(e)}function So(t,e){if(Gt(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(Gt(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Ao=["aria-live"],Io=["disabled","aria-label"],Oo=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],_o=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],Co=["disabled","aria-label"],Po=["data-p-highlight"],Eo=["tabindex","aria-label","aria-current","onClick"];function To(t,e,n,a,r,i){var o=Dn("ripple");return S(),I("div",Y({class:t.cx("root"),role:"region"},t.ptmi("root")),[t.$slots.header?(S(),I("div",Y({key:0,class:t.cx("header")},t.ptm("header")),[ut(t.$slots,"header")],16)):it("",!0),i.empty?ut(t.$slots,"empty",{key:2},function(){return[lt(Pe(i.emptyMessageText),1)]}):(S(),I("div",Y({key:1,class:[t.cx("content"),t.contentClass]},t.ptm("content")),[m("div",Y({class:[t.cx("container"),t.containerClass],"aria-live":r.allowAutoplay?"polite":"off"},t.ptm("container")),[t.showNavigators?ft((S(),I("button",Y({key:0,type:"button",class:t.cx("previousButton"),disabled:i.backwardIsDisabled,"aria-label":i.ariaPrevButtonLabel,onClick:e[0]||(e[0]=function(){return i.navBackward&&i.navBackward.apply(i,arguments)})},ce(ce({},t.prevButtonProps),t.ptm("previousButton")),{"data-pc-group-section":"navigator"}),[ut(t.$slots,"previousicon",{},function(){return[(S(),sn(ln(i.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),Y({class:t.cx("previousButtonIcon")},t.ptm("previousButtonIcon")),null,16,["class"]))]})],16,Io)),[[o]]):it("",!0),m("div",Y({class:t.cx("itemsContent"),style:[{height:i.isVertical()?t.verticalViewPortHeight:"auto"}],onTouchend:e[2]||(e[2]=function(){return i.onTouchEnd&&i.onTouchEnd.apply(i,arguments)}),onTouchstart:e[3]||(e[3]=function(){return i.onTouchStart&&i.onTouchStart.apply(i,arguments)}),onTouchmove:e[4]||(e[4]=function(){return i.onTouchMove&&i.onTouchMove.apply(i,arguments)})},t.ptm("itemsContent")),[m("div",Y({ref:"itemsContainer",class:t.cx("itemsContainer"),onTransitionend:e[1]||(e[1]=function(){return i.onTransitionEnd&&i.onTransitionEnd.apply(i,arguments)})},t.ptm("itemsContainer")),[i.isCircular()?(S(!0),I(Rt,{key:0},Ft(t.value.slice(-1*r.d_numVisible),function(l,s){return S(),I("div",Y({key:s+"_scloned",class:t.cx("itemCloned",{index:s,value:t.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible})},t.ptm("itemCloned"),{"data-p-carousel-item-active":r.totalShiftedItems*-1===t.value.length+r.d_numVisible,"data-p-carousel-item-start":s===0,"data-p-carousel-item-end":t.value.slice(-1*r.d_numVisible).length-1===s}),[ut(t.$slots,"item",{data:l,index:s})],16,Oo)}),128)):it("",!0),(S(!0),I(Rt,null,Ft(t.value,function(l,s){return S(),I("div",Y({key:s,class:t.cx("item",{index:s}),role:"group","aria-hidden":i.firstIndex()>s||i.lastIndex()<s?!0:void 0,"aria-label":i.ariaSlideNumber(s),"aria-roledescription":i.ariaSlideLabel},t.ptm("item"),{"data-p-carousel-item-active":i.firstIndex()<=s&&i.lastIndex()>=s,"data-p-carousel-item-start":i.firstIndex()===s,"data-p-carousel-item-end":i.lastIndex()===s}),[ut(t.$slots,"item",{data:l,index:s})],16,_o)}),128)),i.isCircular()?(S(!0),I(Rt,{key:1},Ft(t.value.slice(0,r.d_numVisible),function(l,s){return S(),I("div",Y({key:s+"_fcloned",class:t.cx("itemCloned",{index:s,value:t.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible})},t.ptm("itemCloned")),[ut(t.$slots,"item",{data:l,index:s})],16)}),128)):it("",!0)],16)],16),t.showNavigators?ft((S(),I("button",Y({key:1,type:"button",class:t.cx("nextButton"),disabled:i.forwardIsDisabled,"aria-label":i.ariaNextButtonLabel,onClick:e[5]||(e[5]=function(){return i.navForward&&i.navForward.apply(i,arguments)})},ce(ce({},t.nextButtonProps),t.ptm("nextButton")),{"data-pc-group-section":"navigator"}),[ut(t.$slots,"nexticon",{},function(){return[(S(),sn(ln(i.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),Y({class:t.cx("nextButtonIcon")},t.ptm("nextButtonIcon")),null,16,["class"]))]})],16,Co)),[[o]]):it("",!0)],16,Ao),i.totalIndicators>=0&&t.showIndicators?(S(),I("ul",Y({key:0,ref:"indicatorContent",class:[t.cx("indicators"),t.indicatorsContentClass],onKeydown:e[6]||(e[6]=function(){return i.onIndicatorKeydown&&i.onIndicatorKeydown.apply(i,arguments)})},t.ptm("indicators")),[(S(!0),I(Rt,null,Ft(i.totalIndicators,function(l,s){return S(),I("li",Y({key:"p-carousel-indicator-"+s.toString(),class:t.cx("indicator",{index:s})},t.ptm("indicator",i.getIndicatorPTOptions(s)),{"data-p-highlight":r.d_page===s}),[m("button",Y({class:t.cx("indicatorButton"),type:"button",tabindex:r.d_page===s?"0":"-1","aria-label":i.ariaPageLabel(s+1),"aria-current":r.d_page===s?"page":void 0,onClick:function(f){return i.onIndicatorClick(f,s)}},t.ptm("indicatorButton",i.getIndicatorPTOptions(s))),null,16,Eo)],16,Po)}),128))],16)):it("",!0)],16)),t.$slots.footer?(S(),I("div",Y({key:3,class:t.cx("footer")},t.ptm("footer")),[ut(t.$slots,"footer")],16)):it("",!0)],16)}wo.render=To;export{Na as A,Fo as P,wo as s};
