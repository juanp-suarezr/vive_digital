import{d as ha,l as rn}from"./logo-BsPmQXbA.js";import{_ as ba,l as on}from"./logo_white-DE4Vqejm.js";import{o as S,c as A,d as m,J as ga,K as ya,m as wa,g as Tt,j as xa,p as ka,i as te,Q as ee,H as Rn,h as ct,n as W,u as q,b as ft,f as it,I as ut,a as ne,F as Ft,s as Vt,t as Ee,A as Sa,B as _a,C as Aa,D as J,Y as sn,V as Ia,E as Y,l as ln,G as un}from"./app--X--H_kx.js";import{s as Oa}from"./index.esm-Xx4epfmb.js";import{a as Ca,s as Pa,b as Ea}from"./index.esm-BbJLiEYi.js";import{R as Ta}from"./ripple.esm-LeTUZWQc.js";import{s as Na}from"./basecomponent.esm-dhtAHV7q.js";function ja(t,e){return S(),A("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[m("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z","clip-rule":"evenodd"})])}const cn="/build/assets/gobierno-VHX8UfDK.webp";var Fn={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(ga,function(){return function(n){function a(i){if(r[i])return r[i].exports;var o=r[i]={exports:{},id:i,loaded:!1};return n[i].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}var r={};return a.m=n,a.c=r,a.p="dist/",a(0)}([function(n,a,r){function i(k){return k&&k.__esModule?k:{default:k}}var o=Object.assign||function(k){for(var H=1;H<arguments.length;H++){var Q=arguments[H];for(var bt in Q)Object.prototype.hasOwnProperty.call(Q,bt)&&(k[bt]=Q[bt])}return k},l=r(1),s=(i(l),r(6)),u=i(s),c=r(7),f=i(c),d=r(8),p=i(d),x=r(9),I=i(x),C=r(10),b=i(C),y=r(11),_=i(y),T=r(14),N=i(T),L=[],B=!1,E={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},R=function(){var k=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(k&&(B=!0),B)return L=(0,_.default)(L,E),(0,b.default)(L,E.once),L},et=function(){L=(0,N.default)(),R()},w=function(){L.forEach(function(k,H){k.node.removeAttribute("data-aos"),k.node.removeAttribute("data-aos-easing"),k.node.removeAttribute("data-aos-duration"),k.node.removeAttribute("data-aos-delay")})},h=function(k){return k===!0||k==="mobile"&&I.default.mobile()||k==="phone"&&I.default.phone()||k==="tablet"&&I.default.tablet()||typeof k=="function"&&k()===!0},O=function(k){E=o(E,k),L=(0,N.default)();var H=document.all&&!window.atob;return h(E.disable)||H?w():(E.disableMutationObserver||p.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),E.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",E.easing),document.querySelector("body").setAttribute("data-aos-duration",E.duration),document.querySelector("body").setAttribute("data-aos-delay",E.delay),E.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?R(!0):E.startEvent==="load"?window.addEventListener(E.startEvent,function(){R(!0)}):document.addEventListener(E.startEvent,function(){R(!0)}),window.addEventListener("resize",(0,f.default)(R,E.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(R,E.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(L,E.once)},E.throttleDelay)),E.disableMutationObserver||p.default.ready("[data-aos]",et),L)};n.exports={init:O,refresh:R,refreshHard:et}},function(n,a){},,,,,function(n,a){(function(r){function i(h,O,k){function H(P){var U=Z,wt=at;return Z=at=void 0,gt=P,$=h.apply(wt,U)}function Q(P){return gt=P,F=setTimeout(It,O),yt?H(P):$}function bt(P){var U=P-G,wt=P-gt,an=O-U;return lt?et(an,rt-wt):an}function At(P){var U=P-G,wt=P-gt;return G===void 0||U>=O||U<0||lt&&wt>=rt}function It(){var P=w();return At(P)?Jt(P):void(F=setTimeout(It,bt(P)))}function Jt(P){return F=void 0,z&&Z?H(P):(Z=at=void 0,$)}function Se(){F!==void 0&&clearTimeout(F),gt=0,Z=G=at=F=void 0}function Rt(){return F===void 0?$:Jt(w())}function nt(){var P=w(),U=At(P);if(Z=arguments,at=this,G=P,U){if(F===void 0)return Q(G);if(lt)return F=setTimeout(It,O),H(G)}return F===void 0&&(F=setTimeout(It,O)),$}var Z,at,rt,$,F,G,gt=0,yt=!1,lt=!1,z=!0;if(typeof h!="function")throw new TypeError(d);return O=c(O)||0,l(k)&&(yt=!!k.leading,lt="maxWait"in k,rt=lt?R(c(k.maxWait)||0,O):rt,z="trailing"in k?!!k.trailing:z),nt.cancel=Se,nt.flush=Rt,nt}function o(h,O,k){var H=!0,Q=!0;if(typeof h!="function")throw new TypeError(d);return l(k)&&(H="leading"in k?!!k.leading:H,Q="trailing"in k?!!k.trailing:Q),i(h,O,{leading:H,maxWait:O,trailing:Q})}function l(h){var O=typeof h>"u"?"undefined":f(h);return!!h&&(O=="object"||O=="function")}function s(h){return!!h&&(typeof h>"u"?"undefined":f(h))=="object"}function u(h){return(typeof h>"u"?"undefined":f(h))=="symbol"||s(h)&&E.call(h)==x}function c(h){if(typeof h=="number")return h;if(u(h))return p;if(l(h)){var O=typeof h.valueOf=="function"?h.valueOf():h;h=l(O)?O+"":O}if(typeof h!="string")return h===0?h:+h;h=h.replace(I,"");var k=b.test(h);return k||y.test(h)?_(h.slice(2),k?2:8):C.test(h)?p:+h}var f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(h){return typeof h}:function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},d="Expected a function",p=NaN,x="[object Symbol]",I=/^\s+|\s+$/g,C=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,y=/^0o[0-7]+$/i,_=parseInt,T=(typeof r>"u"?"undefined":f(r))=="object"&&r&&r.Object===Object&&r,N=(typeof self>"u"?"undefined":f(self))=="object"&&self&&self.Object===Object&&self,L=T||N||Function("return this")(),B=Object.prototype,E=B.toString,R=Math.max,et=Math.min,w=function(){return L.Date.now()};n.exports=o}).call(a,function(){return this}())},function(n,a){(function(r){function i(w,h,O){function k(z){var P=nt,U=Z;return nt=Z=void 0,G=z,rt=w.apply(U,P)}function H(z){return G=z,$=setTimeout(At,h),gt?k(z):rt}function Q(z){var P=z-F,U=z-G,wt=h-P;return yt?R(wt,at-U):wt}function bt(z){var P=z-F,U=z-G;return F===void 0||P>=h||P<0||yt&&U>=at}function At(){var z=et();return bt(z)?It(z):void($=setTimeout(At,Q(z)))}function It(z){return $=void 0,lt&&nt?k(z):(nt=Z=void 0,rt)}function Jt(){$!==void 0&&clearTimeout($),G=0,nt=F=Z=$=void 0}function Se(){return $===void 0?rt:It(et())}function Rt(){var z=et(),P=bt(z);if(nt=arguments,Z=this,F=z,P){if($===void 0)return H(F);if(yt)return $=setTimeout(At,h),k(F)}return $===void 0&&($=setTimeout(At,h)),rt}var nt,Z,at,rt,$,F,G=0,gt=!1,yt=!1,lt=!0;if(typeof w!="function")throw new TypeError(f);return h=u(h)||0,o(O)&&(gt=!!O.leading,yt="maxWait"in O,at=yt?E(u(O.maxWait)||0,h):at,lt="trailing"in O?!!O.trailing:lt),Rt.cancel=Jt,Rt.flush=Se,Rt}function o(w){var h=typeof w>"u"?"undefined":c(w);return!!w&&(h=="object"||h=="function")}function l(w){return!!w&&(typeof w>"u"?"undefined":c(w))=="object"}function s(w){return(typeof w>"u"?"undefined":c(w))=="symbol"||l(w)&&B.call(w)==p}function u(w){if(typeof w=="number")return w;if(s(w))return d;if(o(w)){var h=typeof w.valueOf=="function"?w.valueOf():w;w=o(h)?h+"":h}if(typeof w!="string")return w===0?w:+w;w=w.replace(x,"");var O=C.test(w);return O||b.test(w)?y(w.slice(2),O?2:8):I.test(w)?d:+w}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},f="Expected a function",d=NaN,p="[object Symbol]",x=/^\s+|\s+$/g,I=/^[-+]0x[0-9a-f]+$/i,C=/^0b[01]+$/i,b=/^0o[0-7]+$/i,y=parseInt,_=(typeof r>"u"?"undefined":c(r))=="object"&&r&&r.Object===Object&&r,T=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,N=_||T||Function("return this")(),L=Object.prototype,B=L.toString,E=Math.max,R=Math.min,et=function(){return N.Date.now()};n.exports=i}).call(a,function(){return this}())},function(n,a){function r(c){var f=void 0,d=void 0;for(f=0;f<c.length;f+=1)if(d=c[f],d.dataset&&d.dataset.aos||d.children&&r(d.children))return!0;return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!i()}function l(c,f){var d=window.document,p=i(),x=new p(s);u=f,x.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function s(c){c&&c.forEach(function(f){var d=Array.prototype.slice.call(f.addedNodes),p=Array.prototype.slice.call(f.removedNodes),x=d.concat(p);if(r(x))return u()})}Object.defineProperty(a,"__esModule",{value:!0});var u=function(){};a.default={isSupported:o,ready:l}},function(n,a){function r(d,p){if(!(d instanceof p))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var o=function(){function d(p,x){for(var I=0;I<x.length;I++){var C=x[I];C.enumerable=C.enumerable||!1,C.configurable=!0,"value"in C&&(C.writable=!0),Object.defineProperty(p,C.key,C)}}return function(p,x,I){return x&&d(p.prototype,x),I&&d(p,I),p}}(),l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function d(){r(this,d)}return o(d,[{key:"phone",value:function(){var p=i();return!(!l.test(p)&&!s.test(p.substr(0,4)))}},{key:"mobile",value:function(){var p=i();return!(!u.test(p)&&!c.test(p.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();a.default=new f},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(o,l,s){var u=o.node.getAttribute("data-aos-once");l>o.position?o.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!s&&u!=="true")&&o.node.classList.remove("aos-animate")},i=function(o,l){var s=window.pageYOffset,u=window.innerHeight;o.forEach(function(c,f){r(c,u+s,l)})};a.default=i},function(n,a,r){function i(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(a,"__esModule",{value:!0});var o=r(12),l=i(o),s=function(u,c){return u.forEach(function(f,d){f.node.classList.add("aos-init"),f.position=(0,l.default)(f.node,c.offset)}),u};a.default=s},function(n,a,r){function i(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(a,"__esModule",{value:!0});var o=r(13),l=i(o),s=function(u,c){var f=0,d=0,p=window.innerHeight,x={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(x.offset&&!isNaN(x.offset)&&(d=parseInt(x.offset)),x.anchor&&document.querySelectorAll(x.anchor)&&(u=document.querySelectorAll(x.anchor)[0]),f=(0,l.default)(u).top,x.anchorPlacement){case"top-bottom":break;case"center-bottom":f+=u.offsetHeight/2;break;case"bottom-bottom":f+=u.offsetHeight;break;case"top-center":f+=p/2;break;case"bottom-center":f+=p/2+u.offsetHeight;break;case"center-center":f+=p/2+u.offsetHeight/2;break;case"top-top":f+=p;break;case"bottom-top":f+=u.offsetHeight+p;break;case"center-top":f+=u.offsetHeight/2+p}return x.anchorPlacement||x.offset||isNaN(c)||(d=c),f+d};a.default=s},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(i){for(var o=0,l=0;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);)o+=i.offsetLeft-(i.tagName!="BODY"?i.scrollLeft:0),l+=i.offsetTop-(i.tagName!="BODY"?i.scrollTop:0),i=i.offsetParent;return{top:l,left:o}};a.default=r},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(i){return i=i||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(i,function(o){return{node:o}})};a.default=r}])})})(Fn);var Ma=Fn.exports;const La=ya(Ma);function fn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fn(Object(n),!0).forEach(function(a){V(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function pe(t){"@babel/helpers - typeof";return pe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pe(t)}function za(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Da(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Ra(t,e,n){return e&&Da(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function V(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function He(t,e){return Va(t)||$a(t,e)||Vn(t,e)||Ha()}function Xt(t){return Fa(t)||Ba(t)||Vn(t)||Ya()}function Fa(t){if(Array.isArray(t))return Te(t)}function Va(t){if(Array.isArray(t))return t}function Ba(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $a(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,l;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(s){i=!0,l=s}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw l}}return a}}function Vn(t,e){if(t){if(typeof t=="string")return Te(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Te(t,e)}}function Te(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Ya(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ha(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dn=function(){},Ue={},Bn={},$n=null,Yn={mark:dn,measure:dn};try{typeof window<"u"&&(Ue=window),typeof document<"u"&&(Bn=document),typeof MutationObserver<"u"&&($n=MutationObserver),typeof performance<"u"&&(Yn=performance)}catch{}var Ua=Ue.navigator||{},mn=Ua.userAgent,vn=mn===void 0?"":mn,kt=Ue,M=Bn,pn=$n,ae=Yn;kt.document;var ht=!!M.documentElement&&!!M.head&&typeof M.addEventListener=="function"&&typeof M.createElement=="function",Hn=~vn.indexOf("MSIE")||~vn.indexOf("Trident/"),re,ie,oe,se,le,mt="___FONT_AWESOME___",Ne=16,Un="fa",Wn="svg-inline--fa",Pt="data-fa-i2svg",je="data-fa-pseudo-element",Wa="data-fa-pseudo-element-pending",We="data-prefix",Ke="data-icon",hn="fontawesome-i2svg",Ka="async",Ga=["HTML","HEAD","STYLE","SCRIPT"],Kn=function(){try{return!0}catch{return!1}}(),j="classic",D="sharp",Ge=[j,D];function Zt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[j]}})}var Ht=Zt((re={},V(re,j,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),V(re,D,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),re)),Ut=Zt((ie={},V(ie,j,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),V(ie,D,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),ie)),Wt=Zt((oe={},V(oe,j,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),V(oe,D,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),oe)),qa=Zt((se={},V(se,j,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),V(se,D,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),se)),Xa=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Gn="fa-layers-text",Za=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Qa=Zt((le={},V(le,j,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),V(le,D,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),le)),qn=[1,2,3,4,5,6,7,8,9,10],Ja=qn.concat([11,12,13,14,15,16,17,18,19,20]),tr=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Kt=new Set;Object.keys(Ut[j]).map(Kt.add.bind(Kt));Object.keys(Ut[D]).map(Kt.add.bind(Kt));var er=[].concat(Ge,Xt(Kt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ot.GROUP,Ot.SWAP_OPACITY,Ot.PRIMARY,Ot.SECONDARY]).concat(qn.map(function(t){return"".concat(t,"x")})).concat(Ja.map(function(t){return"w-".concat(t)})),$t=kt.FontAwesomeConfig||{};function nr(t){var e=M.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ar(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(M&&typeof M.querySelector=="function"){var rr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];rr.forEach(function(t){var e=He(t,2),n=e[0],a=e[1],r=ar(nr(n));r!=null&&($t[a]=r)})}var Xn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Un,replacementClass:Wn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$t.familyPrefix&&($t.cssPrefix=$t.familyPrefix);var zt=v(v({},Xn),$t);zt.autoReplaceSvg||(zt.observeMutations=!1);var g={};Object.keys(Xn).forEach(function(t){Object.defineProperty(g,t,{enumerable:!0,set:function(n){zt[t]=n,Yt.forEach(function(a){return a(g)})},get:function(){return zt[t]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(e){zt.cssPrefix=e,Yt.forEach(function(n){return n(g)})},get:function(){return zt.cssPrefix}});kt.FontAwesomeConfig=g;var Yt=[];function ir(t){return Yt.push(t),function(){Yt.splice(Yt.indexOf(t),1)}}var xt=Ne,ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function or(t){if(!(!t||!ht)){var e=M.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=M.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return M.head.insertBefore(e,a),t}}var sr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Gt(){for(var t=12,e="";t-- >0;)e+=sr[Math.random()*62|0];return e}function Dt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function qe(t){return t.classList?Dt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Zn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function lr(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Zn(t[n]),'" ')},"").trim()}function ye(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Xe(t){return t.size!==ot.size||t.x!==ot.x||t.y!==ot.y||t.rotate!==ot.rotate||t.flipX||t.flipY}function ur(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),s={transform:"".concat(i," ").concat(o," ").concat(l)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:s,path:u}}function cr(t){var e=t.transform,n=t.width,a=n===void 0?Ne:n,r=t.height,i=r===void 0?Ne:r,o=t.startCentered,l=o===void 0?!1:o,s="";return l&&Hn?s+="translate(".concat(e.x/xt-a/2,"em, ").concat(e.y/xt-i/2,"em) "):l?s+="translate(calc(-50% + ".concat(e.x/xt,"em), calc(-50% + ").concat(e.y/xt,"em)) "):s+="translate(".concat(e.x/xt,"em, ").concat(e.y/xt,"em) "),s+="scale(".concat(e.size/xt*(e.flipX?-1:1),", ").concat(e.size/xt*(e.flipY?-1:1),") "),s+="rotate(".concat(e.rotate,"deg) "),s}var fr=`:root, :host {
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
}`;function Qn(){var t=Un,e=Wn,n=g.cssPrefix,a=g.replacementClass,r=fr;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(a))}return r}var bn=!1;function _e(){g.autoAddCss&&!bn&&(or(Qn()),bn=!0)}var dr={mixout:function(){return{dom:{css:Qn,insertCss:_e}}},hooks:function(){return{beforeDOMElementCreation:function(){_e()},beforeI2svg:function(){_e()}}}},vt=kt||{};vt[mt]||(vt[mt]={});vt[mt].styles||(vt[mt].styles={});vt[mt].hooks||(vt[mt].hooks={});vt[mt].shims||(vt[mt].shims=[]);var tt=vt[mt],Jn=[],mr=function t(){M.removeEventListener("DOMContentLoaded",t),he=1,Jn.map(function(e){return e()})},he=!1;ht&&(he=(M.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(M.readyState),he||M.addEventListener("DOMContentLoaded",mr));function vr(t){ht&&(he?setTimeout(t,0):Jn.push(t))}function Qt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Zn(t):"<".concat(e," ").concat(lr(a),">").concat(i.map(Qt).join(""),"</").concat(e,">")}function gn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ae=function(e,n,a,r){var i=Object.keys(e),o=i.length,l=n,s,u,c;for(a===void 0?(s=1,c=e[i[0]]):(s=0,c=a);s<o;s++)u=i[s],c=l(c,e[u],u,e);return c};function pr(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Me(t){var e=pr(t);return e.length===1?e[0].toString(16):null}function hr(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function yn(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Le(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=yn(e);typeof tt.hooks.addPack=="function"&&!r?tt.hooks.addPack(t,yn(e)):tt.styles[t]=v(v({},tt.styles[t]||{}),i),t==="fas"&&Le("fa",e)}var ue,ce,fe,jt=tt.styles,br=tt.shims,gr=(ue={},V(ue,j,Object.values(Wt[j])),V(ue,D,Object.values(Wt[D])),ue),Ze=null,ta={},ea={},na={},aa={},ra={},yr=(ce={},V(ce,j,Object.keys(Ht[j])),V(ce,D,Object.keys(Ht[D])),ce);function wr(t){return~er.indexOf(t)}function xr(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!wr(r)?r:null}var ia=function(){var e=function(i){return Ae(jt,function(o,l,s){return o[s]=Ae(l,i,{}),o},{})};ta=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var l=i[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){r[s.toString(16)]=o})}return r}),ea=e(function(r,i,o){if(r[o]=o,i[2]){var l=i[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){r[s]=o})}return r}),ra=e(function(r,i,o){var l=i[2];return r[o]=o,l.forEach(function(s){r[s]=o}),r});var n="far"in jt||g.autoFetchSvg,a=Ae(br,function(r,i){var o=i[0],l=i[1],s=i[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(r.names[o]={prefix:l,iconName:s}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:l,iconName:s}),r},{names:{},unicodes:{}});na=a.names,aa=a.unicodes,Ze=we(g.styleDefault,{family:g.familyDefault})};ir(function(t){Ze=we(t.styleDefault,{family:g.familyDefault})});ia();function Qe(t,e){return(ta[t]||{})[e]}function kr(t,e){return(ea[t]||{})[e]}function Ct(t,e){return(ra[t]||{})[e]}function oa(t){return na[t]||{prefix:null,iconName:null}}function Sr(t){var e=aa[t],n=Qe("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function St(){return Ze}var Je=function(){return{prefix:null,iconName:null,rest:[]}};function we(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?j:n,r=Ht[a][t],i=Ut[a][t]||Ut[a][r],o=t in tt.styles?t:null;return i||o||null}var wn=(fe={},V(fe,j,Object.keys(Wt[j])),V(fe,D,Object.keys(Wt[D])),fe);function xe(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},V(e,j,"".concat(g.cssPrefix,"-").concat(j)),V(e,D,"".concat(g.cssPrefix,"-").concat(D)),e),o=null,l=j;(t.includes(i[j])||t.some(function(u){return wn[j].includes(u)}))&&(l=j),(t.includes(i[D])||t.some(function(u){return wn[D].includes(u)}))&&(l=D);var s=t.reduce(function(u,c){var f=xr(g.cssPrefix,c);if(jt[c]?(c=gr[l].includes(c)?qa[l][c]:c,o=c,u.prefix=c):yr[l].indexOf(c)>-1?(o=c,u.prefix=we(c,{family:l})):f?u.iconName=f:c!==g.replacementClass&&c!==i[j]&&c!==i[D]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var d=o==="fa"?oa(u.iconName):{},p=Ct(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||p||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!jt.far&&jt.fas&&!g.autoFetchSvg&&(u.prefix="fas")}return u},Je());return(t.includes("fa-brands")||t.includes("fab"))&&(s.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===D&&(jt.fass||g.autoFetchSvg)&&(s.prefix="fass",s.iconName=Ct(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||o==="fa")&&(s.prefix=St()||"fas"),s}var _r=function(){function t(){za(this,t),this.definitions={}}return Ra(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=v(v({},n.definitions[l]||{}),o[l]),Le(l,o[l]);var s=Wt[j][l];s&&Le(s,o[l]),ia()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],l=o.prefix,s=o.iconName,u=o.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[l][f]=u)}),n[l][s]=u}),n}}]),t}(),xn=[],Mt={},Lt={},Ar=Object.keys(Lt);function Ir(t,e){var n=e.mixoutsTo;return xn=t,Mt={},Object.keys(Lt).forEach(function(a){Ar.indexOf(a)===-1&&delete Lt[a]}),xn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),pe(r[o])==="object"&&Object.keys(r[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=r[o][l]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Mt[o]||(Mt[o]=[]),Mt[o].push(i[o])})}a.provides&&a.provides(Lt)}),n}function ze(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Mt[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function Et(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Mt[t]||[];r.forEach(function(i){i.apply(null,n)})}function pt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Lt[t]?Lt[t].apply(null,e):void 0}function De(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||St();if(e)return e=Ct(n,e)||e,gn(sa.definitions,n,e)||gn(tt.styles,n,e)}var sa=new _r,Or=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,Et("noAuto")},Cr={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ht?(Et("beforeI2svg",e),pt("pseudoElements2svg",e),pt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,vr(function(){Er({autoReplaceSvgRoot:n}),Et("watch",e)})}},Pr={icon:function(e){if(e===null)return null;if(pe(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Ct(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=we(e[0]);return{prefix:a,iconName:Ct(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(g.cssPrefix,"-"))>-1||e.match(Xa))){var r=xe(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||St(),iconName:Ct(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=St();return{prefix:i,iconName:Ct(i,e)||e}}}},X={noAuto:Or,config:g,dom:Cr,parse:Pr,library:sa,findIconDefinition:De,toHtml:Qt},Er=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?M:n;(Object.keys(tt.styles).length>0||g.autoFetchSvg)&&ht&&g.autoReplaceSvg&&X.dom.i2svg({node:a})};function ke(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return Qt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(ht){var a=M.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Tr(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Xe(o)&&n.found&&!a.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};r.style=ye(v(v({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Nr(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(g.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},r),{},{id:o}),children:a}]}]}function tn(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,l=t.symbol,s=t.title,u=t.maskId,c=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,x=a.found?a:n,I=x.width,C=x.height,b=r==="fak",y=[g.replacementClass,i?"".concat(g.cssPrefix,"-").concat(i):""].filter(function(R){return f.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(f.classes).join(" "),_={children:[],attributes:v(v({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(I," ").concat(C)})},T=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(I/C*16*.0625,"em")}:{};p&&(_.attributes[Pt]=""),s&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(c||Gt())},children:[s]}),delete _.attributes.title);var N=v(v({},_),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:l,styles:v(v({},T),f.styles)}),L=a.found&&n.found?pt("generateAbstractMask",N)||{children:[],attributes:{}}:pt("generateAbstractIcon",N)||{children:[],attributes:{}},B=L.children,E=L.attributes;return N.children=B,N.attributes=E,l?Nr(N):Tr(N)}function kn(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,l=t.watchable,s=l===void 0?!1:l,u=v(v(v({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});s&&(u[Pt]="");var c=v({},o.styles);Xe(r)&&(c.transform=cr({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var f=ye(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function jr(t){var e=t.content,n=t.title,a=t.extra,r=v(v(v({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ye(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Ie=tt.styles;function Re(t){var e=t[0],n=t[1],a=t.slice(4),r=He(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(Ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Mr={found:!1,width:512,height:512};function Lr(t,e){!Kn&&!g.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Fe(t,e){var n=e;return e==="fa"&&g.styleDefault!==null&&(e=St()),new Promise(function(a,r){if(pt("missingIconAbstract"),n==="fa"){var i=oa(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Ie[e]&&Ie[e][t]){var o=Ie[e][t];return a(Re(o))}Lr(t,e),a(v(v({},Mr),{},{icon:g.showMissingIcons&&t?pt("missingIconAbstract")||{}:{}}))})}var Sn=function(){},Ve=g.measurePerformance&&ae&&ae.mark&&ae.measure?ae:{mark:Sn,measure:Sn},Bt='FA "6.5.2"',zr=function(e){return Ve.mark("".concat(Bt," ").concat(e," begins")),function(){return la(e)}},la=function(e){Ve.mark("".concat(Bt," ").concat(e," ends")),Ve.measure("".concat(Bt," ").concat(e),"".concat(Bt," ").concat(e," begins"),"".concat(Bt," ").concat(e," ends"))},en={begin:zr,end:la},me=function(){};function _n(t){var e=t.getAttribute?t.getAttribute(Pt):null;return typeof e=="string"}function Dr(t){var e=t.getAttribute?t.getAttribute(We):null,n=t.getAttribute?t.getAttribute(Ke):null;return e&&n}function Rr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(g.replacementClass)}function Fr(){if(g.autoReplaceSvg===!0)return ve.replace;var t=ve[g.autoReplaceSvg];return t||ve.replace}function Vr(t){return M.createElementNS("http://www.w3.org/2000/svg",t)}function Br(t){return M.createElement(t)}function ua(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Vr:Br:n;if(typeof t=="string")return M.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(ua(o,{ceFn:a}))}),r}function $r(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ve={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(ua(r),n)}),n.getAttribute(Pt)===null&&g.keepOriginalSource){var a=M.createComment($r(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~qe(n).indexOf(g.replacementClass))return ve.replace(e);var r=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(l,s){return s===g.replacementClass||s.match(r)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(l){return Qt(l)}).join(`
`);n.setAttribute(Pt,""),n.innerHTML=o}};function An(t){t()}function ca(t,e){var n=typeof e=="function"?e:me;if(t.length===0)n();else{var a=An;g.mutateApproach===Ka&&(a=kt.requestAnimationFrame||An),a(function(){var r=Fr(),i=en.begin("mutate");t.map(r),i(),n()})}}var nn=!1;function fa(){nn=!0}function Be(){nn=!1}var be=null;function In(t){if(pn&&g.observeMutations){var e=t.treeCallback,n=e===void 0?me:e,a=t.nodeCallback,r=a===void 0?me:a,i=t.pseudoElementsCallback,o=i===void 0?me:i,l=t.observeMutationsRoot,s=l===void 0?M:l;be=new pn(function(u){if(!nn){var c=St();Dt(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!_n(f.addedNodes[0])&&(g.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&g.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&_n(f.target)&&~tr.indexOf(f.attributeName))if(f.attributeName==="class"&&Dr(f.target)){var d=xe(qe(f.target)),p=d.prefix,x=d.iconName;f.target.setAttribute(We,p||c),x&&f.target.setAttribute(Ke,x)}else Rr(f.target)&&r(f.target)})}}),ht&&be.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Yr(){be&&be.disconnect()}function Hr(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],l=i.slice(1);return o&&l.length>0&&(a[o]=l.join(":").trim()),a},{})),n}function Ur(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=xe(qe(t));return r.prefix||(r.prefix=St()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=kr(r.prefix,t.innerText)||Qe(r.prefix,Me(t.innerText))),!r.iconName&&g.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Wr(t){var e=Dt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return g.autoA11y&&(n?e["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(a||Gt()):(e["aria-hidden"]="true",e.focusable="false")),e}function Kr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function On(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Ur(t),a=n.iconName,r=n.prefix,i=n.rest,o=Wr(t),l=ze("parseNodeAttributes",{},t),s=e.styleParser?Hr(t):[];return v({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:o}},l)}var Gr=tt.styles;function da(t){var e=g.autoReplaceSvg==="nest"?On(t,{styleParser:!1}):On(t);return~e.extra.classes.indexOf(Gn)?pt("generateLayersText",t,e):pt("generateSvgReplacementMutation",t,e)}var _t=new Set;Ge.map(function(t){_t.add("fa-".concat(t))});Object.keys(Ht[j]).map(_t.add.bind(_t));Object.keys(Ht[D]).map(_t.add.bind(_t));_t=Xt(_t);function Cn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ht)return Promise.resolve();var n=M.documentElement.classList,a=function(f){return n.add("".concat(hn,"-").concat(f))},r=function(f){return n.remove("".concat(hn,"-").concat(f))},i=g.autoFetchSvg?_t:Ge.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Gr));i.includes("fa")||i.push("fa");var o=[".".concat(Gn,":not([").concat(Pt,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Pt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=Dt(t.querySelectorAll(o))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();var s=en.begin("onTree"),u=l.reduce(function(c,f){try{var d=da(f);d&&c.push(d)}catch(p){Kn||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){ca(d,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),s(),c()})}).catch(function(d){s(),f(d)})})}function qr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;da(t).then(function(n){n&&ca([n],e)})}function Xr(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:De(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:De(r||{})),t(a,v(v({},n),{},{mask:r}))}}var Zr=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?ot:a,i=n.symbol,o=i===void 0?!1:i,l=n.mask,s=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,p=n.titleId,x=p===void 0?null:p,I=n.classes,C=I===void 0?[]:I,b=n.attributes,y=b===void 0?{}:b,_=n.styles,T=_===void 0?{}:_;if(e){var N=e.prefix,L=e.iconName,B=e.icon;return ke(v({type:"icon"},e),function(){return Et("beforeDOMElementCreation",{iconDefinition:e,params:n}),g.autoA11y&&(d?y["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(x||Gt()):(y["aria-hidden"]="true",y.focusable="false")),tn({icons:{main:Re(B),mask:s?Re(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:L,transform:v(v({},ot),r),symbol:o,title:d,maskId:c,titleId:x,extra:{attributes:y,styles:T,classes:C}})})}},Qr={mixout:function(){return{icon:Xr(Zr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Cn,n.nodeCallback=qr,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?M:a,i=n.callback,o=i===void 0?function(){}:i;return Cn(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,l=a.prefix,s=a.transform,u=a.symbol,c=a.mask,f=a.maskId,d=a.extra;return new Promise(function(p,x){Promise.all([Fe(r,l),c.iconName?Fe(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(I){var C=He(I,2),b=C[0],y=C[1];p([n,tn({icons:{main:b,mask:y},prefix:l,iconName:r,transform:s,symbol:u,maskId:f,title:i,titleId:o,extra:d,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,l=n.styles,s=ye(l);s.length>0&&(r.style=s);var u;return Xe(o)&&(u=pt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Jr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return ke({type:"layer"},function(){Et("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(l){Array.isArray(l)?l.map(function(s){o=o.concat(s.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(Xt(i)).join(" ")},children:o}]})}}}},ti={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,l=o===void 0?[]:o,s=a.attributes,u=s===void 0?{}:s,c=a.styles,f=c===void 0?{}:c;return ke({type:"counter",content:n},function(){return Et("beforeDOMElementCreation",{content:n,params:a}),jr({content:n.toString(),title:i,extra:{attributes:u,styles:f,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(Xt(l))}})})}}}},ei={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?ot:r,o=a.title,l=o===void 0?null:o,s=a.classes,u=s===void 0?[]:s,c=a.attributes,f=c===void 0?{}:c,d=a.styles,p=d===void 0?{}:d;return ke({type:"text",content:n},function(){return Et("beforeDOMElementCreation",{content:n,params:a}),kn({content:n,transform:v(v({},ot),i),title:l,extra:{attributes:f,styles:p,classes:["".concat(g.cssPrefix,"-layers-text")].concat(Xt(u))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,l=null,s=null;if(Hn){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,s=c.height/u}return g.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,kn({content:n.innerHTML,width:l,height:s,transform:i,title:r,extra:o,watchable:!0})])}}},ni=new RegExp('"',"ug"),Pn=[1105920,1112319];function ai(t){var e=t.replace(ni,""),n=hr(e,0),a=n>=Pn[0]&&n<=Pn[1],r=e.length===2?e[0]===e[1]:!1;return{value:Me(r?e[0]:e),isSecondary:a||r}}function En(t,e){var n="".concat(Wa).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=Dt(t.children),o=i.filter(function(B){return B.getAttribute(je)===e})[0],l=kt.getComputedStyle(t,e),s=l.getPropertyValue("font-family").match(Za),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(o&&!s)return t.removeChild(o),a();if(s&&c!=="none"&&c!==""){var f=l.getPropertyValue("content"),d=~["Sharp"].indexOf(s[2])?D:j,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Ut[d][s[2].toLowerCase()]:Qa[d][u],x=ai(f),I=x.value,C=x.isSecondary,b=s[0].startsWith("FontAwesome"),y=Qe(p,I),_=y;if(b){var T=Sr(I);T.iconName&&T.prefix&&(y=T.iconName,p=T.prefix)}if(y&&!C&&(!o||o.getAttribute(We)!==p||o.getAttribute(Ke)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);var N=Kr(),L=N.extra;L.attributes[je]=e,Fe(y,p).then(function(B){var E=tn(v(v({},N),{},{icons:{main:B,mask:Je()},prefix:p,iconName:_,extra:L,watchable:!0})),R=M.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(R,t.firstChild):t.appendChild(R),R.outerHTML=E.map(function(et){return Qt(et)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function ri(t){return Promise.all([En(t,"::before"),En(t,"::after")])}function ii(t){return t.parentNode!==document.head&&!~Ga.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(je)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Tn(t){if(ht)return new Promise(function(e,n){var a=Dt(t.querySelectorAll("*")).filter(ii).map(ri),r=en.begin("searchPseudoElements");fa(),Promise.all(a).then(function(){r(),Be(),e()}).catch(function(){r(),Be(),n()})})}var oi={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Tn,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?M:a;g.searchPseudoElements&&Tn(r)}}},Nn=!1,si={mixout:function(){return{dom:{unwatch:function(){fa(),Nn=!0}}}},hooks:function(){return{bootstrap:function(){In(ze("mutationObserverCallbacks",{}))},noAuto:function(){Yr()},watch:function(n){var a=n.observeMutationsRoot;Nn?Be():In(ze("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},jn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],l=i.slice(1).join("-");if(o&&l==="h")return a.flipX=!0,a;if(o&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(o){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},n)},li={mixout:function(){return{parse:{transform:function(n){return jn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=jn(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},s="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(s," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:l,inner:f,path:d};return{tag:"g",attributes:v({},p.outer),children:[{tag:"g",attributes:v({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:v(v({},a.icon.attributes),p.path)}]}]}}}},Oe={x:0,y:0,width:"100%",height:"100%"};function Mn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ui(t){return t.tag==="g"?t.children:[t]}var ci={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?xe(r.split(" ").map(function(o){return o.trim()})):Je();return i.prefix||(i.prefix=St()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,l=n.maskId,s=n.transform,u=i.width,c=i.icon,f=o.width,d=o.icon,p=ur({transform:s,containerWidth:f,iconWidth:u}),x={tag:"rect",attributes:v(v({},Oe),{},{fill:"white"})},I=c.children?{children:c.children.map(Mn)}:{},C={tag:"g",attributes:v({},p.inner),children:[Mn(v({tag:c.tag,attributes:v(v({},c.attributes),p.path)},I))]},b={tag:"g",attributes:v({},p.outer),children:[C]},y="mask-".concat(l||Gt()),_="clip-".concat(l||Gt()),T={tag:"mask",attributes:v(v({},Oe),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,b]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:ui(d)},T]};return a.push(N,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(y,")")},Oe)}),{children:a,attributes:r}}}},fi={provides:function(e){var n=!1;kt.matchMedia&&(n=kt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=v(v({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:v(v({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:v(v({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},di={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},mi=[dr,Qr,Jr,ti,ei,oi,si,li,ci,fi,di];Ir(mi,{mixoutsTo:X});X.noAuto;X.config;X.library;X.dom;var $e=X.parse;X.findIconDefinition;X.toHtml;var vi=X.icon;X.layer;X.text;X.counter;function Ln(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function dt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ln(Object(n),!0).forEach(function(a){K(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ln(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function pi(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function hi(t){var e=pi(t,"string");return typeof e=="symbol"?e:e+""}function ge(t){"@babel/helpers - typeof";return ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ge(t)}function K(t,e,n){return e=hi(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function bi(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function gi(t,e){if(t==null)return{};var n=bi(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ma={exports:{}};(function(t){(function(e){var n=function(b,y,_){if(!u(y)||f(y)||d(y)||p(y)||s(y))return y;var T,N=0,L=0;if(c(y))for(T=[],L=y.length;N<L;N++)T.push(n(b,y[N],_));else{T={};for(var B in y)Object.prototype.hasOwnProperty.call(y,B)&&(T[b(B,_)]=n(b,y[B],_))}return T},a=function(b,y){y=y||{};var _=y.separator||"_",T=y.split||/(?=[A-Z])/;return b.split(T).join(_)},r=function(b){return x(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(y,_){return _?_.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},i=function(b){var y=r(b);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(b,y){return a(b,y).toLowerCase()},l=Object.prototype.toString,s=function(b){return typeof b=="function"},u=function(b){return b===Object(b)},c=function(b){return l.call(b)=="[object Array]"},f=function(b){return l.call(b)=="[object Date]"},d=function(b){return l.call(b)=="[object RegExp]"},p=function(b){return l.call(b)=="[object Boolean]"},x=function(b){return b=b-0,b===b},I=function(b,y){var _=y&&"process"in y?y.process:y;return typeof _!="function"?b:function(T,N){return _(T,b,N)}},C={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(b,y){return n(I(r,y),b)},decamelizeKeys:function(b,y){return n(I(o,y),b,y)},pascalizeKeys:function(b,y){return n(I(i,y),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=C:e.humps=C})(yi)})(ma);var wi=ma.exports,xi=["class","style"];function ki(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=wi.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function Si(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function va(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(s){return va(s)}),r=Object.keys(t.attributes||{}).reduce(function(s,u){var c=t.attributes[u];switch(u){case"class":s.class=Si(c);break;case"style":s.style=ki(c);break;default:s.attrs[u]=c}return s},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,l=gi(n,xi);return ka(t.tag,dt(dt(dt({},e),{},{class:r.class,style:dt(dt({},r.style),o)},r.attrs),l),a)}var pa=!1;try{pa=!0}catch{}function _i(){if(!pa&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ce(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?K({},t,e):{}}function Ai(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},K(K(K(K(K(K(K(K(K(K(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),K(K(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function zn(t){if(t&&ge(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if($e.icon)return $e.icon(t);if(t===null)return null;if(ge(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Pe=wa({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=Tt(function(){return zn(e.icon)}),i=Tt(function(){return Ce("classes",Ai(e))}),o=Tt(function(){return Ce("transform",typeof e.transform=="string"?$e.transform(e.transform):e.transform)}),l=Tt(function(){return Ce("mask",zn(e.mask))}),s=Tt(function(){return vi(r.value,dt(dt(dt(dt({},i.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});xa(s,function(c){if(!c)return _i("Could not find one or more icon(s)",r.value,l.value)},{immediate:!0});var u=Tt(function(){return s.value?va(s.value.abstract[0],{},a):null});return function(){return u.value}}}),Ii={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Oi={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},Ci={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const st=t=>(Sa("data-v-af647fac"),t=t(),_a(),t),Pi={class:"fixed top-64 w-screen",style:{"z-index":"50","pointer-events":"none"}},Ei={class:"xl:w-[5%] sm:w-[6%] w-[10%] sm:ml-[95%] ml-[90%]"},Ti={class:"bg-azul w-full py-4 sm:rounded-tl-xl sm:rounded-bl-xl rounded-tl-md rounded-bl-md",style:{"pointer-events":"auto"}},Ni=st(()=>m("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[m("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512"},[m("path",{d:"M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})])],-1)),ji=[Ni],Mi=st(()=>m("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[m("p",{class:"font-extrabold text-xs lg:text-base"},[ft("A"),m("sup",null,"-")])],-1)),Li=[Mi],zi=st(()=>m("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[m("p",{class:"font-extrabold text-xs lg:text-base"},[ft("A"),m("sup",null,"n")])],-1)),Di=[zi],Ri=st(()=>m("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[m("p",{class:"font-extrabold text-xs lg:text-base"},[ft("A"),m("sup",null,"+")])],-1)),Fi=[Ri],Vi={class:"w-full py-2 ps-8 flex bg-[#3366cc]"},Bi={class:"flex w-5/6 sm:w-[20%] md:w-[10%] z-20",href:"https://www.gov.co/",target:"_blank"},$i=["src"],Yi=st(()=>m("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo del gobierno actual de colombia ",-1)),Hi={class:"mx-auto px-4 sm:px-6 lg:px-8"},Ui={class:"flex w-full justify-between items-center"},Wi={class:"flex-shrink-0 sm:w-1/4 w-3/6 p-4"},Ki={href:"/Welcome",class:"text-white text-2xl font-semibold"},Gi=["src"],qi=["src"],Xi=st(()=>m("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo de la alcaldía de Pereira ",-1)),Zi={class:"hidden md:block"},Qi={class:"flex space-x-4"},Ji=["href"],to=["href"],eo=["href"],no={class:"md:hidden z-20"},ao=st(()=>m("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[m("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)),ro=[ao],io={key:0,class:"md:hidden"},oo={class:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},so=["href"],lo=["href"],uo=["href"],co={class:"flex-1 overflow-y-auto overflow-x-hidden bg-light text-black"},fo={class:"container mx-auto flex flex-wrap items-center justify-between"},mo={class:"flex items-center flex-shrink-0 mr-6 w-1/6"},vo={href:"/Welcome",class:"w-full"},po=["src"],ho=["src"],bo=st(()=>m("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo de la alcaldía de Pereira ",-1)),go={class:"flex justify-center items-center space-x-4 text-primary"},yo={href:"https://www.instagram.com/alcaldiadepereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},wo={href:"https://www.facebook.com/AlcaldiaDePereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},xo={href:"https://www.youtube.com/channel/UCAFZZcG6RI0gw5DkrT6kMSQ/videos",target:"_blank",class:"hover:text-parrafo transition duration-300"},ko={href:"#inicio",class:"text-primary hover:text-parrafo transition duration-300"},So={class:"container px-4 mt-8"},_o={class:"custom-list space-y-2"},Ao=st(()=>m("br",null,null,-1)),Io={class:"w-full py-4 ps-8 flex bg-[#3366cc]"},Oo={class:"flex w-5/6 sm:w-[25%] md:w-[15%]",href:"https://www.gov.co/",target:"_blank"},Co=["src"],Po=st(()=>m("figcaption",{lang:"es",class:"hidden"},"Esta es una imagen del logo del gobierno actual de colombia ",-1)),Eo={__name:"PageLayout",setup(t){const e=ha.useToast();La.init();const n=te(ee().props.accesibilidad.contraste),a=te(ee().props.accesibilidad.letra),r=te(""),i=te(!1),o=()=>{n.value=!n.value,ee().props.accesibilidad.contraste=n.value},l=(s,u)=>{s>=2?(a.value=2,e.open({message:"Limite de aumento de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):s<=-2?(a.value=-2,e.open({message:"Limite de reducción de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):a.value=s,r.value=u,ee().props.accesibilidad.letra=a.value};return(s,u)=>{const c=Rn("tooltip");return S(),A("div",{class:W(["flex flex-col overflow-x-hidden bg-option1",{"!bg-black":n.value}])},[m("div",Pi,[m("div",Ei,[m("div",Ti,[ct((S(),A("button",{onClick:o,class:W(["flex w-auto py-2 lg:px-4 px-2",{"bg-[#3366cc]":n.value}])},ji,2)),[[c,{value:"Contraste",autoHide:!1},void 0,{center:!0}]]),ct((S(),A("button",{onClick:u[0]||(u[0]=f=>l(a.value-1,"reducir")),class:W(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="reducir"&&!n.value}])},Li,2)),[[c,{value:"Reducir letra",autoHide:!1},void 0,{center:!0}]]),ct((S(),A("button",{onClick:u[1]||(u[1]=f=>l(0,"default")),class:W(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="default"&&!n.value}])},Di,2)),[[c,{value:"Restablecer letra",autoHide:!1},void 0,{center:!0}]]),ct((S(),A("button",{onClick:u[2]||(u[2]=f=>l(a.value+1,"aumentar")),class:W(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="aumentar"&&!n.value}])},Fi,2)),[[c,{value:"Aumentar letra",autoHide:!1},void 0,{center:!0}]])])])]),m("header",Vi,[m("a",Bi,[m("figure",null,[m("img",{class:"w-full sm:w-5/6",src:q(cn),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,$i),Yi])])]),m("nav",{class:W(["w-full h-full bg-option2 py-2 text-xl sm:text-2xl text-parrafo z-20",[{"!text-yellow-200 font-bold !bg-black":n.value},a.value==-2?"!text-base !sm:text-lg":a.value==-1?"!text-lg !sm:text-xl":a.value==1?"!text-2xl !sm:text-4xl":a.value==2?"!text-4xl !sm:text-6xl":""]])},[m("div",Hi,[m("div",Ui,[m("div",Wi,[m("a",Ki,[m("figure",null,[n.value?(S(),A("img",{key:0,class:"w-full sm:w-5/6",src:q(on),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Gi)):(S(),A("img",{key:1,class:"w-full sm:w-5/6",src:q(rn),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,qi)),Xi])])]),m("div",Zi,[m("ul",Qi,[m("li",null,[ct((S(),A("a",{href:s.route("capacitaciones.index"),class:W([[{underline:s.route().current("register")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},[ft("Capacitaciones")],10,Ji)),[[c,{value:"Registro de ingreso al punto",autoHide:!1},void 0,{bottom:!0}]])]),m("li",null,[ct((S(),A("a",{href:s.route("register"),class:W([[{underline:s.route().current("register")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},[ft("Registro")],10,to)),[[c,{value:"Registro de ingreso al punto",autoHide:!1},void 0,{bottom:!0}]])]),m("li",null,[s.$page.props.auth.user?ct((S(),A("a",{key:0,href:s.route("dashboard"),class:W([[{underline:s.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},[ft("Dashboard")],10,eo)),[[c,{value:"regresar al dashboard",autoHide:!1},void 0,{bottom:!0}]]):it("",!0)])])]),m("div",no,[m("button",{class:W(["text-parrafo hover:text-secondary focus:outline-none",[{"!text-yellow-200 font-bold":n.value}]]),onClick:u[3]||(u[3]=f=>i.value=!i.value)},ro,2)])])]),i.value?(S(),A("div",io,[m("ul",oo,[m("li",null,[m("a",{href:s.route("capacitaciones.index"),class:W([[{underline:s.route().current("register")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Capacitaciones",10,so)]),m("li",null,[m("a",{href:s.route("register"),class:W([[{underline:s.route().current("register")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Registro",10,lo)]),m("li",null,[s.$page.props.auth.user?(S(),A("a",{key:0,href:s.route("dashboard"),class:W([[{underline:s.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Dashboard",10,uo)):it("",!0)])])])):it("",!0)],2),m("main",co,[ut(s.$slots,"default",{},void 0,!0)]),m("footer",{class:W(["px-2 bg-option2/90 text-parrafo flex flex-col py-6",{"!bg-black !text-white":n.value}])},[m("div",fo,[m("div",mo,[m("a",vo,[m("figure",null,[n.value?(S(),A("img",{key:0,class:"w-full",src:q(on),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,po)):(S(),A("img",{key:1,class:"w-full",src:q(rn),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,ho)),bo])])]),m("div",go,[m("a",yo,[ne(q(Pe),{icon:q(Ii),size:"xl"},null,8,["icon"])]),m("a",wo,[ne(q(Pe),{icon:q(Oi),size:"xl"},null,8,["icon"])]),m("a",xo,[ne(q(Pe),{icon:q(Ci),size:"xl"},null,8,["icon"])])]),m("div",null,[m("a",ko,[ne(q(ja),{class:"w-12 animate-bounce"})])])]),m("div",So,[m("ul",_o,[(S(!0),A(Ft,null,Vt(s.$page.props.infoPunto,f=>(S(),A("li",{class:"flex text-parrafo",key:f.id},[ft(Ee(f.punto.nombre)+" ",1),Ao,ft(" "+Ee(f.punto.direccion),1)]))),128))])])],2),m("div",Io,[m("a",Oo,[m("figure",null,[m("img",{class:"w-full sm:w-5/6",src:q(cn),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,Co),Po])])])],2)}}},as=ba(Eo,[["__scopeId","data-v-af647fac"]]);var To={root:function(e){var n=e.instance;return["p-carousel p-component",{"p-carousel-vertical":n.isVertical(),"p-carousel-horizontal":!n.isVertical()}]},header:"p-carousel-header",content:"p-carousel-content",container:"p-carousel-container",previousButton:function(e){var n=e.instance;return["p-carousel-prev p-link",{"p-disabled":n.backwardIsDisabled}]},previousButtonIcon:"p-carousel-next-icon",itemsContent:"p-carousel-items-content",itemsContainer:"p-carousel-items-container",itemCloned:function(e){var n=e.index,a=e.value,r=e.totalShiftedItems,i=e.d_numVisible;return["p-carousel-item p-carousel-item-cloned",{"p-carousel-item-active":r*-1===a.length+i,"p-carousel-item-start":n===0,"p-carousel-item-end":a.slice(-1*i).length-1===n}]},item:function(e){var n=e.instance,a=e.index;return["p-carousel-item",{"p-carousel-item-active":n.firstIndex()<=a&&n.lastIndex()>=a,"p-carousel-item-start":n.firstIndex()===a,"p-carousel-item-end":n.lastIndex()===a}]},nextButton:function(e){var n=e.instance;return["p-carousel-next p-link",{"p-disabled":n.forwardIsDisabled}]},nextButtonIcon:"p-carousel-prev-icon",indicators:"p-carousel-indicators p-reset",indicator:function(e){var n=e.instance,a=e.index;return["p-carousel-indicator",{"p-highlight":n.d_page===a}]},indicatorButton:"p-link",footer:"p-carousel-footer"},No=Aa.extend({name:"carousel",classes:To}),jo={name:"BaseCarousel",extends:Na,props:{value:null,page:{type:Number,default:0},numVisible:{type:Number,default:1},numScroll:{type:Number,default:1},responsiveOptions:Array,orientation:{type:String,default:"horizontal"},verticalViewPortHeight:{type:String,default:"300px"},contentClass:String,containerClass:String,indicatorsContentClass:String,circular:{type:Boolean,default:!1},autoplayInterval:{type:Number,default:0},showNavigators:{type:Boolean,default:!0},showIndicators:{type:Boolean,default:!0},prevButtonProps:{type:null,default:null},nextButtonProps:{type:null,default:null}},style:No,provide:function(){return{$parentInstance:this}}};function Nt(t){return Do(t)||zo(t)||Lo(t)||Mo()}function Mo(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Lo(t,e){if(t){if(typeof t=="string")return Ye(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ye(t,e)}}function zo(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Do(t){if(Array.isArray(t))return Ye(t)}function Ye(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var Ro={name:"Carousel",extends:jo,inheritAttrs:!1,emits:["update:page"],isRemainingItemsAdded:!1,data:function(){return{remainingItems:0,d_numVisible:this.numVisible,d_numScroll:this.numScroll,d_oldNumScroll:0,d_oldNumVisible:0,d_oldValue:null,d_page:this.page,totalShiftedItems:this.page*this.numScroll*-1,allowAutoplay:!!this.autoplayInterval,d_circular:this.circular||this.allowAutoplay,swipeThreshold:20}},watch:{page:function(e){e>this.d_page?this.navForward({},e):e<this.d_page&&this.navBackward({},e),this.d_page=e},circular:function(e){this.d_circular=e},numVisible:function(e,n){this.d_numVisible=e,this.d_oldNumVisible=n},numScroll:function(e,n){this.d_oldNumScroll=n,this.d_numScroll=e},value:function(e){this.d_oldValue=e}},mounted:function(){var e=!1;if(this.$el.setAttribute(this.attributeSelector,""),this.createStyle(),this.calculatePosition(),this.responsiveOptions&&this.bindDocumentListeners(),this.isCircular()){var n=this.totalShiftedItems;this.d_page===0?n=-1*this.d_numVisible:n===0&&(n=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),n!==this.totalShiftedItems&&(this.totalShiftedItems=n,e=!0)}!e&&this.isAutoplay()&&this.startAutoplay()},updated:function(){if(!this.empty){var e=this.isCircular(),n=!1,a=this.totalShiftedItems;if(this.autoplayInterval&&this.stopAutoplay(),this.d_oldNumScroll!==this.d_numScroll||this.d_oldNumVisible!==this.d_numVisible||this.d_oldValue.length!==this.value.length){this.remainingItems=(this.value.length-this.d_numVisible)%this.d_numScroll;var r=this.d_page;this.totalIndicators!==0&&r>=this.totalIndicators&&(r=this.totalIndicators-1,this.$emit("update:page",r),this.d_page=r,n=!0),a=r*this.d_numScroll*-1,e&&(a-=this.d_numVisible),r===this.totalIndicators-1&&this.remainingItems>0?(a+=-1*this.remainingItems+this.d_numScroll,this.isRemainingItemsAdded=!0):this.isRemainingItemsAdded=!1,a!==this.totalShiftedItems&&(this.totalShiftedItems=a,n=!0),this.d_oldNumScroll=this.d_numScroll,this.d_oldNumVisible=this.d_numVisible,this.d_oldValue=this.value,this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(a*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(a*(100/this.d_numVisible),"%, 0, 0)")}e&&(this.d_page===0?a=-1*this.d_numVisible:a===0&&(a=-1*this.value.length,this.remainingItems>0&&(this.isRemainingItemsAdded=!0)),a!==this.totalShiftedItems&&(this.totalShiftedItems=a,n=!0)),!n&&this.isAutoplay()&&this.startAutoplay()}},beforeUnmount:function(){this.responsiveOptions&&this.unbindDocumentListeners(),this.autoplayInterval&&this.stopAutoplay()},methods:{getIndicatorPTOptions:function(e){return{context:{highlighted:e===this.d_page}}},step:function(e,n){var a=this.totalShiftedItems,r=this.isCircular();if(n!=null)a=this.d_numScroll*n*-1,r&&(a-=this.d_numVisible),this.isRemainingItemsAdded=!1;else{a+=this.d_numScroll*e,this.isRemainingItemsAdded&&(a+=this.remainingItems-this.d_numScroll*e,this.isRemainingItemsAdded=!1);var i=r?a+this.d_numVisible:a;n=Math.abs(Math.floor(i/this.d_numScroll))}r&&this.d_page===this.totalIndicators-1&&e===-1?(a=-1*(this.value.length+this.d_numVisible),n=0):r&&this.d_page===0&&e===1?(a=0,n=this.totalIndicators-1):n===this.totalIndicators-1&&this.remainingItems>0&&(a+=this.remainingItems*-1-this.d_numScroll*e,this.isRemainingItemsAdded=!0),this.$refs.itemsContainer&&(!this.isUnstyled&&J.removeClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(a*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(a*(100/this.d_numVisible),"%, 0, 0)"),this.$refs.itemsContainer.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=a,this.$emit("update:page",n),this.d_page=n},calculatePosition:function(){if(this.$refs.itemsContainer&&this.responsiveOptions){for(var e=window.innerWidth,n={numVisible:this.numVisible,numScroll:this.numScroll},a=0;a<this.responsiveOptions.length;a++){var r=this.responsiveOptions[a];parseInt(r.breakpoint,10)>=e&&(n=r)}if(this.d_numScroll!==n.numScroll){var i=this.d_page;i=parseInt(i*this.d_numScroll/n.numScroll),this.totalShiftedItems=n.numScroll*i*-1,this.isCircular()&&(this.totalShiftedItems-=n.numVisible),this.d_numScroll=n.numScroll,this.$emit("update:page",i),this.d_page=i}this.d_numVisible!==n.numVisible&&(this.d_numVisible=n.numVisible)}},navBackward:function(e,n){(this.d_circular||this.d_page!==0)&&this.step(1,n),this.allowAutoplay=!1,e.cancelable&&e.preventDefault()},navForward:function(e,n){(this.d_circular||this.d_page<this.totalIndicators-1)&&this.step(-1,n),this.allowAutoplay=!1,e.cancelable&&e.preventDefault()},onIndicatorClick:function(e,n){var a=this.d_page;n>a?this.navForward(e,n):n<a&&this.navBackward(e,n)},onTransitionEnd:function(){this.$refs.itemsContainer&&(!this.isUnstyled&&J.addClass(this.$refs.itemsContainer,"p-items-hidden"),this.$refs.itemsContainer.style.transition="",(this.d_page===0||this.d_page===this.totalIndicators-1)&&this.isCircular()&&(this.$refs.itemsContainer.style.transform=this.isVertical()?"translate3d(0, ".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0)"):"translate3d(".concat(this.totalShiftedItems*(100/this.d_numVisible),"%, 0, 0)")))},onTouchStart:function(e){var n=e.changedTouches[0];this.startPos={x:n.pageX,y:n.pageY}},onTouchMove:function(e){var n=e.changedTouches[0],a=this.isVertical()?n.pageY-this.startPos.y:n.pageX-this.startPos.x;Math.abs(a)>this.swipeThreshold&&e.cancelable&&e.preventDefault()},onTouchEnd:function(e){var n=e.changedTouches[0];this.isVertical()?this.changePageOnTouch(e,n.pageY-this.startPos.y):this.changePageOnTouch(e,n.pageX-this.startPos.x)},changePageOnTouch:function(e,n){Math.abs(n)>this.swipeThreshold&&(n<0?this.navForward(e):this.navBackward(e))},onIndicatorKeydown:function(e){switch(e.code){case"ArrowRight":this.onRightKey();break;case"ArrowLeft":this.onLeftKey();break;case"Home":this.onHomeKey(),e.preventDefault();break;case"End":this.onEndKey(),e.preventDefault();break;case"ArrowUp":case"ArrowDown":case"PageUp":case"PageDown":e.preventDefault();break;case"Tab":this.onTabKey();break}},onRightKey:function(){var e=Nt(J.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,n+1===e.length?e.length-1:n+1)},onLeftKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,e-1<=0?0:e-1)},onHomeKey:function(){var e=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(e,0)},onEndKey:function(){var e=Nt(J.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=this.findFocusedIndicatorIndex();this.changedFocusedIndicator(n,e.length-1)},onTabKey:function(){var e=Nt(J.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=e.findIndex(function(i){return J.getAttribute(i,"data-p-highlight")===!0}),a=J.findSingle(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]'),r=e.findIndex(function(i){return i===a.parentElement});e[r].children[0].tabIndex="-1",e[n].children[0].tabIndex="0"},findFocusedIndicatorIndex:function(){var e=Nt(J.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]')),n=J.findSingle(this.$refs.indicatorContent,'[data-pc-section="indicator"] > button[tabindex="0"]');return e.findIndex(function(a){return a===n.parentElement})},changedFocusedIndicator:function(e,n){var a=Nt(J.find(this.$refs.indicatorContent,'[data-pc-section="indicator"]'));a[e].children[0].tabIndex="-1",a[n].children[0].tabIndex="0",a[n].children[0].focus()},bindDocumentListeners:function(){var e=this;this.documentResizeListener||(this.documentResizeListener=function(n){e.calculatePosition(n)},window.addEventListener("resize",this.documentResizeListener))},unbindDocumentListeners:function(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)},startAutoplay:function(){var e=this;this.interval=setInterval(function(){e.d_page===e.totalIndicators-1?e.step(-1,0):e.step(-1,e.d_page+1)},this.autoplayInterval)},stopAutoplay:function(){this.interval&&clearInterval(this.interval)},createStyle:function(){if(!this.carouselStyle){var e;this.carouselStyle=document.createElement("style"),this.carouselStyle.type="text/css",J.setAttribute(this.carouselStyle,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.body.appendChild(this.carouselStyle)}var n=`
                .p-carousel[`.concat(this.attributeSelector,`] .p-carousel-item {
                    flex: 1 0 `).concat(100/this.d_numVisible,`%
                }
            `);if(this.responsiveOptions&&!this.isUnstyled){var a=Nt(this.responsiveOptions),r=sn.localeComparator();a.sort(function(l,s){var u=l.breakpoint,c=s.breakpoint;return sn.sort(u,c,-1,r)});for(var i=0;i<a.length;i++){var o=a[i];n+=`
                        @media screen and (max-width: `.concat(o.breakpoint,`) {
                            .p-carousel[`).concat(this.attributeSelector,`] .p-carousel-item {
                                flex: 1 0 `).concat(100/o.numVisible,`%
                            }
                        }
                    `)}}this.carouselStyle.innerHTML=n},isVertical:function(){return this.orientation==="vertical"},isCircular:function(){return this.value&&this.d_circular&&this.value.length>=this.d_numVisible},isAutoplay:function(){return this.autoplayInterval&&this.allowAutoplay},firstIndex:function(){return this.isCircular()?-1*(this.totalShiftedItems+this.d_numVisible):this.totalShiftedItems*-1},lastIndex:function(){return this.firstIndex()+this.d_numVisible-1},ariaSlideNumber:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slideNumber.replace(/{slideNumber}/g,e):void 0},ariaPageLabel:function(e){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.pageLabel.replace(/{page}/g,e):void 0}},computed:{totalIndicators:function(){return this.value?Math.max(Math.ceil((this.value.length-this.d_numVisible)/this.d_numScroll)+1,0):0},backwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&this.d_page===0},forwardIsDisabled:function(){return this.value&&(!this.circular||this.value.length<this.d_numVisible)&&(this.d_page===this.totalIndicators-1||this.totalIndicators===0)},ariaSlideLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.slide:void 0},ariaPrevButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.prevPageLabel:void 0},ariaNextButtonLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.nextPageLabel:void 0},attributeSelector:function(){return Ia()},empty:function(){return!this.value||this.value.length===0},emptyMessageText:function(){var e;return((e=this.$primevue.config)===null||e===void 0||(e=e.locale)===null||e===void 0?void 0:e.emptyMessage)||""}},components:{ChevronRightIcon:Ca,ChevronDownIcon:Oa,ChevronLeftIcon:Pa,ChevronUpIcon:Ea},directives:{ripple:Ta}};function qt(t){"@babel/helpers - typeof";return qt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qt(t)}function Dn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function de(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Dn(Object(n),!0).forEach(function(a){Fo(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Dn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Fo(t,e,n){return e=Vo(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Vo(t){var e=Bo(t,"string");return qt(e)=="symbol"?e:String(e)}function Bo(t,e){if(qt(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(qt(a)!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var $o=["aria-live"],Yo=["disabled","aria-label"],Ho=["data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],Uo=["aria-hidden","aria-label","aria-roledescription","data-p-carousel-item-active","data-p-carousel-item-start","data-p-carousel-item-end"],Wo=["disabled","aria-label"],Ko=["data-p-highlight"],Go=["tabindex","aria-label","aria-current","onClick"];function qo(t,e,n,a,r,i){var o=Rn("ripple");return S(),A("div",Y({class:t.cx("root"),role:"region"},t.ptmi("root")),[t.$slots.header?(S(),A("div",Y({key:0,class:t.cx("header")},t.ptm("header")),[ut(t.$slots,"header")],16)):it("",!0),i.empty?ut(t.$slots,"empty",{key:2},function(){return[ft(Ee(i.emptyMessageText),1)]}):(S(),A("div",Y({key:1,class:[t.cx("content"),t.contentClass]},t.ptm("content")),[m("div",Y({class:[t.cx("container"),t.containerClass],"aria-live":r.allowAutoplay?"polite":"off"},t.ptm("container")),[t.showNavigators?ct((S(),A("button",Y({key:0,type:"button",class:t.cx("previousButton"),disabled:i.backwardIsDisabled,"aria-label":i.ariaPrevButtonLabel,onClick:e[0]||(e[0]=function(){return i.navBackward&&i.navBackward.apply(i,arguments)})},de(de({},t.prevButtonProps),t.ptm("previousButton")),{"data-pc-group-section":"navigator"}),[ut(t.$slots,"previousicon",{},function(){return[(S(),ln(un(i.isVertical()?"ChevronUpIcon":"ChevronLeftIcon"),Y({class:t.cx("previousButtonIcon")},t.ptm("previousButtonIcon")),null,16,["class"]))]})],16,Yo)),[[o]]):it("",!0),m("div",Y({class:t.cx("itemsContent"),style:[{height:i.isVertical()?t.verticalViewPortHeight:"auto"}],onTouchend:e[2]||(e[2]=function(){return i.onTouchEnd&&i.onTouchEnd.apply(i,arguments)}),onTouchstart:e[3]||(e[3]=function(){return i.onTouchStart&&i.onTouchStart.apply(i,arguments)}),onTouchmove:e[4]||(e[4]=function(){return i.onTouchMove&&i.onTouchMove.apply(i,arguments)})},t.ptm("itemsContent")),[m("div",Y({ref:"itemsContainer",class:t.cx("itemsContainer"),onTransitionend:e[1]||(e[1]=function(){return i.onTransitionEnd&&i.onTransitionEnd.apply(i,arguments)})},t.ptm("itemsContainer")),[i.isCircular()?(S(!0),A(Ft,{key:0},Vt(t.value.slice(-1*r.d_numVisible),function(l,s){return S(),A("div",Y({key:s+"_scloned",class:t.cx("itemCloned",{index:s,value:t.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible})},t.ptm("itemCloned"),{"data-p-carousel-item-active":r.totalShiftedItems*-1===t.value.length+r.d_numVisible,"data-p-carousel-item-start":s===0,"data-p-carousel-item-end":t.value.slice(-1*r.d_numVisible).length-1===s}),[ut(t.$slots,"item",{data:l,index:s})],16,Ho)}),128)):it("",!0),(S(!0),A(Ft,null,Vt(t.value,function(l,s){return S(),A("div",Y({key:s,class:t.cx("item",{index:s}),role:"group","aria-hidden":i.firstIndex()>s||i.lastIndex()<s?!0:void 0,"aria-label":i.ariaSlideNumber(s),"aria-roledescription":i.ariaSlideLabel},t.ptm("item"),{"data-p-carousel-item-active":i.firstIndex()<=s&&i.lastIndex()>=s,"data-p-carousel-item-start":i.firstIndex()===s,"data-p-carousel-item-end":i.lastIndex()===s}),[ut(t.$slots,"item",{data:l,index:s})],16,Uo)}),128)),i.isCircular()?(S(!0),A(Ft,{key:1},Vt(t.value.slice(0,r.d_numVisible),function(l,s){return S(),A("div",Y({key:s+"_fcloned",class:t.cx("itemCloned",{index:s,value:t.value,totalShiftedItems:r.totalShiftedItems,d_numVisible:r.d_numVisible})},t.ptm("itemCloned")),[ut(t.$slots,"item",{data:l,index:s})],16)}),128)):it("",!0)],16)],16),t.showNavigators?ct((S(),A("button",Y({key:1,type:"button",class:t.cx("nextButton"),disabled:i.forwardIsDisabled,"aria-label":i.ariaNextButtonLabel,onClick:e[5]||(e[5]=function(){return i.navForward&&i.navForward.apply(i,arguments)})},de(de({},t.nextButtonProps),t.ptm("nextButton")),{"data-pc-group-section":"navigator"}),[ut(t.$slots,"nexticon",{},function(){return[(S(),ln(un(i.isVertical()?"ChevronDownIcon":"ChevronRightIcon"),Y({class:t.cx("nextButtonIcon")},t.ptm("nextButtonIcon")),null,16,["class"]))]})],16,Wo)),[[o]]):it("",!0)],16,$o),i.totalIndicators>=0&&t.showIndicators?(S(),A("ul",Y({key:0,ref:"indicatorContent",class:[t.cx("indicators"),t.indicatorsContentClass],onKeydown:e[6]||(e[6]=function(){return i.onIndicatorKeydown&&i.onIndicatorKeydown.apply(i,arguments)})},t.ptm("indicators")),[(S(!0),A(Ft,null,Vt(i.totalIndicators,function(l,s){return S(),A("li",Y({key:"p-carousel-indicator-"+s.toString(),class:t.cx("indicator",{index:s})},t.ptm("indicator",i.getIndicatorPTOptions(s)),{"data-p-highlight":r.d_page===s}),[m("button",Y({class:t.cx("indicatorButton"),type:"button",tabindex:r.d_page===s?"0":"-1","aria-label":i.ariaPageLabel(s+1),"aria-current":r.d_page===s?"page":void 0,onClick:function(c){return i.onIndicatorClick(c,s)}},t.ptm("indicatorButton",i.getIndicatorPTOptions(s))),null,16,Go)],16,Ko)}),128))],16)):it("",!0)],16)),t.$slots.footer?(S(),A("div",Y({key:3,class:t.cx("footer")},t.ptm("footer")),[ut(t.$slots,"footer")],16)):it("",!0)],16)}Ro.render=qo;export{La as A,as as P,Ro as s};
