import{d as ea,l as qe}from"./logo-DrLGCOAO.js";import{_ as na,i as Ve}from"./logo_white-hEdzsGgl.js";import{o as D,c as F,b as v,H as aa,I as ra,m as ia,g as _t,j as oa,p as sa,i as Ut,Q as Gt,E as la,h as ot,n as B,d as at,u as V,f as ve,G as fa,a as qt,F as ua,s as ca,t as Xe}from"./app-CPaiJ-hM.js";function da(t,e){return D(),F("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon"},[v("path",{"fill-rule":"evenodd",d:"M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm.53 5.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72v5.69a.75.75 0 0 0 1.5 0v-5.69l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z","clip-rule":"evenodd"})])}const Ke="/build/assets/gobierno-VHX8UfDK.webp";var On={exports:{}};(function(t,e){(function(n,a){t.exports=a()})(aa,function(){return function(n){function a(i){if(r[i])return r[i].exports;var o=r[i]={exports:{},id:i,loaded:!1};return n[i].call(o.exports,o,o.exports,a),o.loaded=!0,o.exports}var r={};return a.m=n,a.c=r,a.p="dist/",a(0)}([function(n,a,r){function i(k){return k&&k.__esModule?k:{default:k}}var o=Object.assign||function(k){for(var W=1;W<arguments.length;W++){var Z=arguments[W];for(var dt in Z)Object.prototype.hasOwnProperty.call(Z,dt)&&(k[dt]=Z[dt])}return k},s=r(1),f=(i(s),r(6)),l=i(f),u=r(7),c=i(u),d=r(8),p=i(d),x=r(9),O=i(x),_=r(10),g=i(_),y=r(11),A=i(y),C=r(14),N=i(C),M=[],Y=!1,E={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},L=function(){var k=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(k&&(Y=!0),Y)return M=(0,A.default)(M,E),(0,g.default)(M,E.once),M},J=function(){M=(0,N.default)(),L()},w=function(){M.forEach(function(k,W){k.node.removeAttribute("data-aos"),k.node.removeAttribute("data-aos-easing"),k.node.removeAttribute("data-aos-duration"),k.node.removeAttribute("data-aos-delay")})},b=function(k){return k===!0||k==="mobile"&&O.default.mobile()||k==="phone"&&O.default.phone()||k==="tablet"&&O.default.tablet()||typeof k=="function"&&k()===!0},S=function(k){E=o(E,k),M=(0,N.default)();var W=document.all&&!window.atob;return b(E.disable)||W?w():(E.disableMutationObserver||p.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),E.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",E.easing),document.querySelector("body").setAttribute("data-aos-duration",E.duration),document.querySelector("body").setAttribute("data-aos-delay",E.delay),E.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?L(!0):E.startEvent==="load"?window.addEventListener(E.startEvent,function(){L(!0)}):document.addEventListener(E.startEvent,function(){L(!0)}),window.addEventListener("resize",(0,c.default)(L,E.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(L,E.debounceDelay,!0)),window.addEventListener("scroll",(0,l.default)(function(){(0,g.default)(M,E.once)},E.throttleDelay)),E.disableMutationObserver||p.default.ready("[data-aos]",J),M)};n.exports={init:S,refresh:L,refreshHard:J}},function(n,a){},,,,,function(n,a){(function(r){function i(b,S,k){function W(P){var U=K,pt=et;return K=et=void 0,mt=P,H=b.apply(pt,U)}function Z(P){return mt=P,R=setTimeout(xt,S),vt?W(P):H}function dt(P){var U=P-q,pt=P-mt,Ge=S-U;return it?J(Ge,nt-pt):Ge}function wt(P){var U=P-q,pt=P-mt;return q===void 0||U>=S||U<0||it&&pt>=nt}function xt(){var P=w();return wt(P)?Bt(P):void(R=setTimeout(xt,dt(P)))}function Bt(P){return R=void 0,j&&K?W(P):(K=et=void 0,H)}function me(){R!==void 0&&clearTimeout(R),mt=0,K=q=et=R=void 0}function Tt(){return R===void 0?H:Bt(w())}function tt(){var P=w(),U=wt(P);if(K=arguments,et=this,q=P,U){if(R===void 0)return Z(q);if(it)return R=setTimeout(xt,S),W(q)}return R===void 0&&(R=setTimeout(xt,S)),H}var K,et,nt,H,R,q,mt=0,vt=!1,it=!1,j=!0;if(typeof b!="function")throw new TypeError(d);return S=u(S)||0,s(k)&&(vt=!!k.leading,it="maxWait"in k,nt=it?L(u(k.maxWait)||0,S):nt,j="trailing"in k?!!k.trailing:j),tt.cancel=me,tt.flush=Tt,tt}function o(b,S,k){var W=!0,Z=!0;if(typeof b!="function")throw new TypeError(d);return s(k)&&(W="leading"in k?!!k.leading:W,Z="trailing"in k?!!k.trailing:Z),i(b,S,{leading:W,maxWait:S,trailing:Z})}function s(b){var S=typeof b>"u"?"undefined":c(b);return!!b&&(S=="object"||S=="function")}function f(b){return!!b&&(typeof b>"u"?"undefined":c(b))=="object"}function l(b){return(typeof b>"u"?"undefined":c(b))=="symbol"||f(b)&&E.call(b)==x}function u(b){if(typeof b=="number")return b;if(l(b))return p;if(s(b)){var S=typeof b.valueOf=="function"?b.valueOf():b;b=s(S)?S+"":S}if(typeof b!="string")return b===0?b:+b;b=b.replace(O,"");var k=g.test(b);return k||y.test(b)?A(b.slice(2),k?2:8):_.test(b)?p:+b}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(b){return typeof b}:function(b){return b&&typeof Symbol=="function"&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},d="Expected a function",p=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,_=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,y=/^0o[0-7]+$/i,A=parseInt,C=(typeof r>"u"?"undefined":c(r))=="object"&&r&&r.Object===Object&&r,N=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,M=C||N||Function("return this")(),Y=Object.prototype,E=Y.toString,L=Math.max,J=Math.min,w=function(){return M.Date.now()};n.exports=o}).call(a,function(){return this}())},function(n,a){(function(r){function i(w,b,S){function k(j){var P=tt,U=K;return tt=K=void 0,q=j,nt=w.apply(U,P)}function W(j){return q=j,H=setTimeout(wt,b),mt?k(j):nt}function Z(j){var P=j-R,U=j-q,pt=b-P;return vt?L(pt,et-U):pt}function dt(j){var P=j-R,U=j-q;return R===void 0||P>=b||P<0||vt&&U>=et}function wt(){var j=J();return dt(j)?xt(j):void(H=setTimeout(wt,Z(j)))}function xt(j){return H=void 0,it&&tt?k(j):(tt=K=void 0,nt)}function Bt(){H!==void 0&&clearTimeout(H),q=0,tt=R=K=H=void 0}function me(){return H===void 0?nt:xt(J())}function Tt(){var j=J(),P=dt(j);if(tt=arguments,K=this,R=j,P){if(H===void 0)return W(R);if(vt)return H=setTimeout(wt,b),k(R)}return H===void 0&&(H=setTimeout(wt,b)),nt}var tt,K,et,nt,H,R,q=0,mt=!1,vt=!1,it=!0;if(typeof w!="function")throw new TypeError(c);return b=l(b)||0,o(S)&&(mt=!!S.leading,vt="maxWait"in S,et=vt?E(l(S.maxWait)||0,b):et,it="trailing"in S?!!S.trailing:it),Tt.cancel=Bt,Tt.flush=me,Tt}function o(w){var b=typeof w>"u"?"undefined":u(w);return!!w&&(b=="object"||b=="function")}function s(w){return!!w&&(typeof w>"u"?"undefined":u(w))=="object"}function f(w){return(typeof w>"u"?"undefined":u(w))=="symbol"||s(w)&&Y.call(w)==p}function l(w){if(typeof w=="number")return w;if(f(w))return d;if(o(w)){var b=typeof w.valueOf=="function"?w.valueOf():w;w=o(b)?b+"":b}if(typeof w!="string")return w===0?w:+w;w=w.replace(x,"");var S=_.test(w);return S||g.test(w)?y(w.slice(2),S?2:8):O.test(w)?d:+w}var u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(w){return typeof w}:function(w){return w&&typeof Symbol=="function"&&w.constructor===Symbol&&w!==Symbol.prototype?"symbol":typeof w},c="Expected a function",d=NaN,p="[object Symbol]",x=/^\s+|\s+$/g,O=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,g=/^0o[0-7]+$/i,y=parseInt,A=(typeof r>"u"?"undefined":u(r))=="object"&&r&&r.Object===Object&&r,C=(typeof self>"u"?"undefined":u(self))=="object"&&self&&self.Object===Object&&self,N=A||C||Function("return this")(),M=Object.prototype,Y=M.toString,E=Math.max,L=Math.min,J=function(){return N.Date.now()};n.exports=i}).call(a,function(){return this}())},function(n,a){function r(u){var c=void 0,d=void 0;for(c=0;c<u.length;c+=1)if(d=u[c],d.dataset&&d.dataset.aos||d.children&&r(d.children))return!0;return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!i()}function s(u,c){var d=window.document,p=i(),x=new p(f);l=c,x.observe(d.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function f(u){u&&u.forEach(function(c){var d=Array.prototype.slice.call(c.addedNodes),p=Array.prototype.slice.call(c.removedNodes),x=d.concat(p);if(r(x))return l()})}Object.defineProperty(a,"__esModule",{value:!0});var l=function(){};a.default={isSupported:o,ready:s}},function(n,a){function r(d,p){if(!(d instanceof p))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(a,"__esModule",{value:!0});var o=function(){function d(p,x){for(var O=0;O<x.length;O++){var _=x[O];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(p,_.key,_)}}return function(p,x,O){return x&&d(p.prototype,x),O&&d(p,O),p}}(),s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,f=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function d(){r(this,d)}return o(d,[{key:"phone",value:function(){var p=i();return!(!s.test(p)&&!f.test(p.substr(0,4)))}},{key:"mobile",value:function(){var p=i();return!(!l.test(p)&&!u.test(p.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),d}();a.default=new c},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(o,s,f){var l=o.node.getAttribute("data-aos-once");s>o.position?o.node.classList.add("aos-animate"):typeof l<"u"&&(l==="false"||!f&&l!=="true")&&o.node.classList.remove("aos-animate")},i=function(o,s){var f=window.pageYOffset,l=window.innerHeight;o.forEach(function(u,c){r(u,l+f,s)})};a.default=i},function(n,a,r){function i(l){return l&&l.__esModule?l:{default:l}}Object.defineProperty(a,"__esModule",{value:!0});var o=r(12),s=i(o),f=function(l,u){return l.forEach(function(c,d){c.node.classList.add("aos-init"),c.position=(0,s.default)(c.node,u.offset)}),l};a.default=f},function(n,a,r){function i(l){return l&&l.__esModule?l:{default:l}}Object.defineProperty(a,"__esModule",{value:!0});var o=r(13),s=i(o),f=function(l,u){var c=0,d=0,p=window.innerHeight,x={offset:l.getAttribute("data-aos-offset"),anchor:l.getAttribute("data-aos-anchor"),anchorPlacement:l.getAttribute("data-aos-anchor-placement")};switch(x.offset&&!isNaN(x.offset)&&(d=parseInt(x.offset)),x.anchor&&document.querySelectorAll(x.anchor)&&(l=document.querySelectorAll(x.anchor)[0]),c=(0,s.default)(l).top,x.anchorPlacement){case"top-bottom":break;case"center-bottom":c+=l.offsetHeight/2;break;case"bottom-bottom":c+=l.offsetHeight;break;case"top-center":c+=p/2;break;case"bottom-center":c+=p/2+l.offsetHeight;break;case"center-center":c+=p/2+l.offsetHeight/2;break;case"top-top":c+=p;break;case"bottom-top":c+=l.offsetHeight+p;break;case"center-top":c+=l.offsetHeight/2+p}return x.anchorPlacement||x.offset||isNaN(u)||(d=u),c+d};a.default=f},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(i){for(var o=0,s=0;i&&!isNaN(i.offsetLeft)&&!isNaN(i.offsetTop);)o+=i.offsetLeft-(i.tagName!="BODY"?i.scrollLeft:0),s+=i.offsetTop-(i.tagName!="BODY"?i.scrollTop:0),i=i.offsetParent;return{top:s,left:o}};a.default=r},function(n,a){Object.defineProperty(a,"__esModule",{value:!0});var r=function(i){return i=i||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(i,function(o){return{node:o}})};a.default=r}])})})(On);var ma=On.exports;const va=ra(ma);function Ze(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ze(Object(n),!0).forEach(function(a){$(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ze(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function ie(t){"@babel/helpers - typeof";return ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ie(t)}function pa(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function ba(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function ga(t,e,n){return e&&ba(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Me(t,e){return ya(t)||xa(t,e)||Sn(t,e)||Aa()}function Yt(t){return ha(t)||wa(t)||Sn(t)||ka()}function ha(t){if(Array.isArray(t))return xe(t)}function ya(t){if(Array.isArray(t))return t}function wa(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function xa(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Sn(t,e){if(t){if(typeof t=="string")return xe(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xe(t,e)}}function xe(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function ka(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Aa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qe=function(){},je={},_n={},Pn=null,En={mark:Qe,measure:Qe};try{typeof window<"u"&&(je=window),typeof document<"u"&&(_n=document),typeof MutationObserver<"u"&&(Pn=MutationObserver),typeof performance<"u"&&(En=performance)}catch{}var Oa=je.navigator||{},Je=Oa.userAgent,tn=Je===void 0?"":Je,gt=je,T=_n,en=Pn,Vt=En;gt.document;var ct=!!T.documentElement&&!!T.head&&typeof T.addEventListener=="function"&&typeof T.createElement=="function",Cn=~tn.indexOf("MSIE")||~tn.indexOf("Trident/"),Xt,Kt,Zt,Qt,Jt,lt="___FONT_AWESOME___",ke=16,Nn="fa",In="svg-inline--fa",Ot="data-fa-i2svg",Ae="data-fa-pseudo-element",Sa="data-fa-pseudo-element-pending",ze="data-prefix",Le="data-icon",nn="fontawesome-i2svg",_a="async",Pa=["HTML","HEAD","STYLE","SCRIPT"],Tn=function(){try{return!0}catch{return!1}}(),I="classic",z="sharp",Re=[I,z];function Ht(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[I]}})}var Lt=Ht((Xt={},$(Xt,I,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),$(Xt,z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Xt)),Rt=Ht((Kt={},$(Kt,I,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),$(Kt,z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),Kt)),Dt=Ht((Zt={},$(Zt,I,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),$(Zt,z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Zt)),Ea=Ht((Qt={},$(Qt,I,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),$(Qt,z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Qt)),Ca=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Mn="fa-layers-text",Na=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ia=Ht((Jt={},$(Jt,I,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),$(Jt,z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Jt)),jn=[1,2,3,4,5,6,7,8,9,10],Ta=jn.concat([11,12,13,14,15,16,17,18,19,20]),Ma=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],kt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ft=new Set;Object.keys(Rt[I]).map(Ft.add.bind(Ft));Object.keys(Rt[z]).map(Ft.add.bind(Ft));var ja=[].concat(Re,Yt(Ft),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",kt.GROUP,kt.SWAP_OPACITY,kt.PRIMARY,kt.SECONDARY]).concat(jn.map(function(t){return"".concat(t,"x")})).concat(Ta.map(function(t){return"w-".concat(t)})),jt=gt.FontAwesomeConfig||{};function za(t){var e=T.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function La(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(T&&typeof T.querySelector=="function"){var Ra=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ra.forEach(function(t){var e=Me(t,2),n=e[0],a=e[1],r=La(za(n));r!=null&&(jt[a]=r)})}var zn={styleDefault:"solid",familyDefault:"classic",cssPrefix:Nn,replacementClass:In,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};jt.familyPrefix&&(jt.cssPrefix=jt.familyPrefix);var Nt=m(m({},zn),jt);Nt.autoReplaceSvg||(Nt.observeMutations=!1);var h={};Object.keys(zn).forEach(function(t){Object.defineProperty(h,t,{enumerable:!0,set:function(n){Nt[t]=n,zt.forEach(function(a){return a(h)})},get:function(){return Nt[t]}})});Object.defineProperty(h,"familyPrefix",{enumerable:!0,set:function(e){Nt.cssPrefix=e,zt.forEach(function(n){return n(h)})},get:function(){return Nt.cssPrefix}});gt.FontAwesomeConfig=h;var zt=[];function Da(t){return zt.push(t),function(){zt.splice(zt.indexOf(t),1)}}var bt=ke,rt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Fa(t){if(!(!t||!ct)){var e=T.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=T.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return T.head.insertBefore(e,a),t}}var $a="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function $t(){for(var t=12,e="";t-- >0;)e+=$a[Math.random()*62|0];return e}function It(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function De(t){return t.classList?It(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ln(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ya(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Ln(t[n]),'" ')},"").trim()}function fe(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Fe(t){return t.size!==rt.size||t.x!==rt.x||t.y!==rt.y||t.rotate!==rt.rotate||t.flipX||t.flipY}function Ha(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}function Wa(t){var e=t.transform,n=t.width,a=n===void 0?ke:n,r=t.height,i=r===void 0?ke:r,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Cn?f+="translate(".concat(e.x/bt-a/2,"em, ").concat(e.y/bt-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/bt,"em), calc(-50% + ").concat(e.y/bt,"em)) "):f+="translate(".concat(e.x/bt,"em, ").concat(e.y/bt,"em) "),f+="scale(".concat(e.size/bt*(e.flipX?-1:1),", ").concat(e.size/bt*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Ba=`:root, :host {
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
}`;function Rn(){var t=Nn,e=In,n=h.cssPrefix,a=h.replacementClass,r=Ba;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var an=!1;function pe(){h.autoAddCss&&!an&&(Fa(Rn()),an=!0)}var Ua={mixout:function(){return{dom:{css:Rn,insertCss:pe}}},hooks:function(){return{beforeDOMElementCreation:function(){pe()},beforeI2svg:function(){pe()}}}},ft=gt||{};ft[lt]||(ft[lt]={});ft[lt].styles||(ft[lt].styles={});ft[lt].hooks||(ft[lt].hooks={});ft[lt].shims||(ft[lt].shims=[]);var Q=ft[lt],Dn=[],Ga=function t(){T.removeEventListener("DOMContentLoaded",t),oe=1,Dn.map(function(e){return e()})},oe=!1;ct&&(oe=(T.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(T.readyState),oe||T.addEventListener("DOMContentLoaded",Ga));function qa(t){ct&&(oe?setTimeout(t,0):Dn.push(t))}function Wt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?Ln(t):"<".concat(e," ").concat(Ya(a),">").concat(i.map(Wt).join(""),"</").concat(e,">")}function rn(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var be=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=n,f,l,u;for(a===void 0?(f=1,u=e[i[0]]):(f=0,u=a);f<o;f++)l=i[f],u=s(u,e[l],l,e);return u};function Va(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Oe(t){var e=Va(t);return e.length===1?e[0].toString(16):null}function Xa(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function on(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Se(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=on(e);typeof Q.hooks.addPack=="function"&&!r?Q.hooks.addPack(t,on(e)):Q.styles[t]=m(m({},Q.styles[t]||{}),i),t==="fas"&&Se("fa",e)}var te,ee,ne,Pt=Q.styles,Ka=Q.shims,Za=(te={},$(te,I,Object.values(Dt[I])),$(te,z,Object.values(Dt[z])),te),$e=null,Fn={},$n={},Yn={},Hn={},Wn={},Qa=(ee={},$(ee,I,Object.keys(Lt[I])),$(ee,z,Object.keys(Lt[z])),ee);function Ja(t){return~ja.indexOf(t)}function tr(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ja(r)?r:null}var Bn=function(){var e=function(i){return be(Pt,function(o,s,f){return o[f]=be(s,i,{}),o},{})};Fn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),$n=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Wn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var n="far"in Pt||h.autoFetchSvg,a=be(Ka,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Yn=a.names,Hn=a.unicodes,$e=ue(h.styleDefault,{family:h.familyDefault})};Da(function(t){$e=ue(t.styleDefault,{family:h.familyDefault})});Bn();function Ye(t,e){return(Fn[t]||{})[e]}function er(t,e){return($n[t]||{})[e]}function At(t,e){return(Wn[t]||{})[e]}function Un(t){return Yn[t]||{prefix:null,iconName:null}}function nr(t){var e=Hn[t],n=Ye("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ht(){return $e}var He=function(){return{prefix:null,iconName:null,rest:[]}};function ue(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?I:n,r=Lt[a][t],i=Rt[a][t]||Rt[a][r],o=t in Q.styles?t:null;return i||o||null}var sn=(ne={},$(ne,I,Object.keys(Dt[I])),$(ne,z,Object.keys(Dt[z])),ne);function ce(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},$(e,I,"".concat(h.cssPrefix,"-").concat(I)),$(e,z,"".concat(h.cssPrefix,"-").concat(z)),e),o=null,s=I;(t.includes(i[I])||t.some(function(l){return sn[I].includes(l)}))&&(s=I),(t.includes(i[z])||t.some(function(l){return sn[z].includes(l)}))&&(s=z);var f=t.reduce(function(l,u){var c=tr(h.cssPrefix,u);if(Pt[u]?(u=Za[s].includes(u)?Ea[s][u]:u,o=u,l.prefix=u):Qa[s].indexOf(u)>-1?(o=u,l.prefix=ue(u,{family:s})):c?l.iconName=c:u!==h.replacementClass&&u!==i[I]&&u!==i[z]&&l.rest.push(u),!r&&l.prefix&&l.iconName){var d=o==="fa"?Un(l.iconName):{},p=At(l.prefix,l.iconName);d.prefix&&(o=null),l.iconName=d.iconName||p||l.iconName,l.prefix=d.prefix||l.prefix,l.prefix==="far"&&!Pt.far&&Pt.fas&&!h.autoFetchSvg&&(l.prefix="fas")}return l},He());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===z&&(Pt.fass||h.autoFetchSvg)&&(f.prefix="fass",f.iconName=At(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=ht()||"fas"),f}var ar=function(){function t(){pa(this,t),this.definitions={}}return ga(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=m(m({},n.definitions[s]||{}),o[s]),Se(s,o[s]);var f=Dt[I][s];f&&Se(f,o[s]),Bn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,l=o.icon,u=l[2];n[s]||(n[s]={}),u.length>0&&u.forEach(function(c){typeof c=="string"&&(n[s][c]=l)}),n[s][f]=l}),n}}]),t}(),ln=[],Et={},Ct={},rr=Object.keys(Ct);function ir(t,e){var n=e.mixoutsTo;return ln=t,Et={},Object.keys(Ct).forEach(function(a){rr.indexOf(a)===-1&&delete Ct[a]}),ln.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),ie(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Et[o]||(Et[o]=[]),Et[o].push(i[o])})}a.provides&&a.provides(Ct)}),n}function _e(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Et[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function St(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=Et[t]||[];r.forEach(function(i){i.apply(null,n)})}function ut(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Ct[t]?Ct[t].apply(null,e):void 0}function Pe(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||ht();if(e)return e=At(n,e)||e,rn(Gn.definitions,n,e)||rn(Q.styles,n,e)}var Gn=new ar,or=function(){h.autoReplaceSvg=!1,h.observeMutations=!1,St("noAuto")},sr={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return ct?(St("beforeI2svg",e),ut("pseudoElements2svg",e),ut("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;h.autoReplaceSvg===!1&&(h.autoReplaceSvg=!0),h.observeMutations=!0,qa(function(){fr({autoReplaceSvgRoot:n}),St("watch",e)})}},lr={icon:function(e){if(e===null)return null;if(ie(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:At(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=ue(e[0]);return{prefix:a,iconName:At(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(h.cssPrefix,"-"))>-1||e.match(Ca))){var r=ce(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||ht(),iconName:At(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=ht();return{prefix:i,iconName:At(i,e)||e}}}},X={noAuto:or,config:h,dom:sr,parse:lr,library:Gn,findIconDefinition:Pe,toHtml:Wt},fr=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?T:n;(Object.keys(Q.styles).length>0||h.autoFetchSvg)&&ct&&h.autoReplaceSvg&&X.dom.i2svg({node:a})};function de(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return Wt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(ct){var a=T.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function ur(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(Fe(o)&&n.found&&!a.found){var s=n.width,f=n.height,l={x:s/f/2,y:.5};r.style=fe(m(m({},i),{},{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function cr(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(h.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},r),{},{id:o}),children:a}]}]}function We(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,l=t.maskId,u=t.titleId,c=t.extra,d=t.watchable,p=d===void 0?!1:d,x=a.found?a:n,O=x.width,_=x.height,g=r==="fak",y=[h.replacementClass,i?"".concat(h.cssPrefix,"-").concat(i):""].filter(function(L){return c.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(c.classes).join(" "),A={children:[],attributes:m(m({},c.attributes),{},{"data-prefix":r,"data-icon":i,class:y,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(_)})},C=g&&!~c.classes.indexOf("fa-fw")?{width:"".concat(O/_*16*.0625,"em")}:{};p&&(A.attributes[Ot]=""),f&&(A.children.push({tag:"title",attributes:{id:A.attributes["aria-labelledby"]||"title-".concat(u||$t())},children:[f]}),delete A.attributes.title);var N=m(m({},A),{},{prefix:r,iconName:i,main:n,mask:a,maskId:l,transform:o,symbol:s,styles:m(m({},C),c.styles)}),M=a.found&&n.found?ut("generateAbstractMask",N)||{children:[],attributes:{}}:ut("generateAbstractIcon",N)||{children:[],attributes:{}},Y=M.children,E=M.attributes;return N.children=Y,N.attributes=E,s?cr(N):ur(N)}function fn(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,l=m(m(m({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(l[Ot]="");var u=m({},o.styles);Fe(r)&&(u.transform=Wa({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var c=fe(u);c.length>0&&(l.style=c);var d=[];return d.push({tag:"span",attributes:l,children:[e]}),i&&d.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),d}function dr(t){var e=t.content,n=t.title,a=t.extra,r=m(m(m({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=fe(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ge=Q.styles;function Ee(t){var e=t[0],n=t[1],a=t.slice(4),r=Me(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(h.cssPrefix,"-").concat(kt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(kt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(h.cssPrefix,"-").concat(kt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var mr={found:!1,width:512,height:512};function vr(t,e){!Tn&&!h.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ce(t,e){var n=e;return e==="fa"&&h.styleDefault!==null&&(e=ht()),new Promise(function(a,r){if(ut("missingIconAbstract"),n==="fa"){var i=Un(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&ge[e]&&ge[e][t]){var o=ge[e][t];return a(Ee(o))}vr(t,e),a(m(m({},mr),{},{icon:h.showMissingIcons&&t?ut("missingIconAbstract")||{}:{}}))})}var un=function(){},Ne=h.measurePerformance&&Vt&&Vt.mark&&Vt.measure?Vt:{mark:un,measure:un},Mt='FA "6.5.2"',pr=function(e){return Ne.mark("".concat(Mt," ").concat(e," begins")),function(){return qn(e)}},qn=function(e){Ne.mark("".concat(Mt," ").concat(e," ends")),Ne.measure("".concat(Mt," ").concat(e),"".concat(Mt," ").concat(e," begins"),"".concat(Mt," ").concat(e," ends"))},Be={begin:pr,end:qn},ae=function(){};function cn(t){var e=t.getAttribute?t.getAttribute(Ot):null;return typeof e=="string"}function br(t){var e=t.getAttribute?t.getAttribute(ze):null,n=t.getAttribute?t.getAttribute(Le):null;return e&&n}function gr(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(h.replacementClass)}function hr(){if(h.autoReplaceSvg===!0)return re.replace;var t=re[h.autoReplaceSvg];return t||re.replace}function yr(t){return T.createElementNS("http://www.w3.org/2000/svg",t)}function wr(t){return T.createElement(t)}function Vn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?yr:wr:n;if(typeof t=="string")return T.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(Vn(o,{ceFn:a}))}),r}function xr(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var re={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Vn(r),n)}),n.getAttribute(Ot)===null&&h.keepOriginalSource){var a=T.createComment(xr(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~De(n).indexOf(h.replacementClass))return re.replace(e);var r=new RegExp("".concat(h.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,f){return f===h.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return Wt(s)}).join(`
`);n.setAttribute(Ot,""),n.innerHTML=o}};function dn(t){t()}function Xn(t,e){var n=typeof e=="function"?e:ae;if(t.length===0)n();else{var a=dn;h.mutateApproach===_a&&(a=gt.requestAnimationFrame||dn),a(function(){var r=hr(),i=Be.begin("mutate");t.map(r),i(),n()})}}var Ue=!1;function Kn(){Ue=!0}function Ie(){Ue=!1}var se=null;function mn(t){if(en&&h.observeMutations){var e=t.treeCallback,n=e===void 0?ae:e,a=t.nodeCallback,r=a===void 0?ae:a,i=t.pseudoElementsCallback,o=i===void 0?ae:i,s=t.observeMutationsRoot,f=s===void 0?T:s;se=new en(function(l){if(!Ue){var u=ht();It(l).forEach(function(c){if(c.type==="childList"&&c.addedNodes.length>0&&!cn(c.addedNodes[0])&&(h.searchPseudoElements&&o(c.target),n(c.target)),c.type==="attributes"&&c.target.parentNode&&h.searchPseudoElements&&o(c.target.parentNode),c.type==="attributes"&&cn(c.target)&&~Ma.indexOf(c.attributeName))if(c.attributeName==="class"&&br(c.target)){var d=ce(De(c.target)),p=d.prefix,x=d.iconName;c.target.setAttribute(ze,p||u),x&&c.target.setAttribute(Le,x)}else gr(c.target)&&r(c.target)})}}),ct&&se.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function kr(){se&&se.disconnect()}function Ar(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Or(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=ce(De(t));return r.prefix||(r.prefix=ht()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=er(r.prefix,t.innerText)||Ye(r.prefix,Oe(t.innerText))),!r.iconName&&h.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Sr(t){var e=It(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return h.autoA11y&&(n?e["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(a||$t()):(e["aria-hidden"]="true",e.focusable="false")),e}function _r(){return{iconName:null,title:null,titleId:null,prefix:null,transform:rt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function vn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Or(t),a=n.iconName,r=n.prefix,i=n.rest,o=Sr(t),s=_e("parseNodeAttributes",{},t),f=e.styleParser?Ar(t):[];return m({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:rt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var Pr=Q.styles;function Zn(t){var e=h.autoReplaceSvg==="nest"?vn(t,{styleParser:!1}):vn(t);return~e.extra.classes.indexOf(Mn)?ut("generateLayersText",t,e):ut("generateSvgReplacementMutation",t,e)}var yt=new Set;Re.map(function(t){yt.add("fa-".concat(t))});Object.keys(Lt[I]).map(yt.add.bind(yt));Object.keys(Lt[z]).map(yt.add.bind(yt));yt=Yt(yt);function pn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!ct)return Promise.resolve();var n=T.documentElement.classList,a=function(c){return n.add("".concat(nn,"-").concat(c))},r=function(c){return n.remove("".concat(nn,"-").concat(c))},i=h.autoFetchSvg?yt:Re.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Pr));i.includes("fa")||i.push("fa");var o=[".".concat(Mn,":not([").concat(Ot,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Ot,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=It(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=Be.begin("onTree"),l=s.reduce(function(u,c){try{var d=Zn(c);d&&u.push(d)}catch(p){Tn||p.name==="MissingIcon"&&console.error(p)}return u},[]);return new Promise(function(u,c){Promise.all(l).then(function(d){Xn(d,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),u()})}).catch(function(d){f(),c(d)})})}function Er(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Zn(t).then(function(n){n&&Xn([n],e)})}function Cr(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Pe(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Pe(r||{})),t(a,m(m({},n),{},{mask:r}))}}var Nr=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?rt:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,f=s===void 0?null:s,l=n.maskId,u=l===void 0?null:l,c=n.title,d=c===void 0?null:c,p=n.titleId,x=p===void 0?null:p,O=n.classes,_=O===void 0?[]:O,g=n.attributes,y=g===void 0?{}:g,A=n.styles,C=A===void 0?{}:A;if(e){var N=e.prefix,M=e.iconName,Y=e.icon;return de(m({type:"icon"},e),function(){return St("beforeDOMElementCreation",{iconDefinition:e,params:n}),h.autoA11y&&(d?y["aria-labelledby"]="".concat(h.replacementClass,"-title-").concat(x||$t()):(y["aria-hidden"]="true",y.focusable="false")),We({icons:{main:Ee(Y),mask:f?Ee(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:M,transform:m(m({},rt),r),symbol:o,title:d,maskId:u,titleId:x,extra:{attributes:y,styles:C,classes:_}})})}},Ir={mixout:function(){return{icon:Cr(Nr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=pn,n.nodeCallback=Er,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?T:a,i=n.callback,o=i===void 0?function(){}:i;return pn(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,f=a.transform,l=a.symbol,u=a.mask,c=a.maskId,d=a.extra;return new Promise(function(p,x){Promise.all([Ce(r,s),u.iconName?Ce(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var _=Me(O,2),g=_[0],y=_[1];p([n,We({icons:{main:g,mask:y},prefix:s,iconName:r,transform:f,symbol:l,maskId:c,title:i,titleId:o,extra:d,watchable:!0})])}).catch(x)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,f=fe(s);f.length>0&&(r.style=f);var l;return Fe(o)&&(l=ut("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(l||i.icon),{children:a,attributes:r}}}},Tr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return de({type:"layer"},function(){St("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(h.cssPrefix,"-layers")].concat(Yt(i)).join(" ")},children:o}]})}}}},Mr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,f=a.attributes,l=f===void 0?{}:f,u=a.styles,c=u===void 0?{}:u;return de({type:"counter",content:n},function(){return St("beforeDOMElementCreation",{content:n,params:a}),dr({content:n.toString(),title:i,extra:{attributes:l,styles:c,classes:["".concat(h.cssPrefix,"-layers-counter")].concat(Yt(s))}})})}}}},jr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?rt:r,o=a.title,s=o===void 0?null:o,f=a.classes,l=f===void 0?[]:f,u=a.attributes,c=u===void 0?{}:u,d=a.styles,p=d===void 0?{}:d;return de({type:"text",content:n},function(){return St("beforeDOMElementCreation",{content:n,params:a}),fn({content:n,transform:m(m({},rt),i),title:s,extra:{attributes:c,styles:p,classes:["".concat(h.cssPrefix,"-layers-text")].concat(Yt(l))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,f=null;if(Cn){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();s=u.width/l,f=u.height/l}return h.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,fn({content:n.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},zr=new RegExp('"',"ug"),bn=[1105920,1112319];function Lr(t){var e=t.replace(zr,""),n=Xa(e,0),a=n>=bn[0]&&n<=bn[1],r=e.length===2?e[0]===e[1]:!1;return{value:Oe(r?e[0]:e),isSecondary:a||r}}function gn(t,e){var n="".concat(Sa).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=It(t.children),o=i.filter(function(Y){return Y.getAttribute(Ae)===e})[0],s=gt.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(Na),l=s.getPropertyValue("font-weight"),u=s.getPropertyValue("content");if(o&&!f)return t.removeChild(o),a();if(f&&u!=="none"&&u!==""){var c=s.getPropertyValue("content"),d=~["Sharp"].indexOf(f[2])?z:I,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?Rt[d][f[2].toLowerCase()]:Ia[d][l],x=Lr(c),O=x.value,_=x.isSecondary,g=f[0].startsWith("FontAwesome"),y=Ye(p,O),A=y;if(g){var C=nr(O);C.iconName&&C.prefix&&(y=C.iconName,p=C.prefix)}if(y&&!_&&(!o||o.getAttribute(ze)!==p||o.getAttribute(Le)!==A)){t.setAttribute(n,A),o&&t.removeChild(o);var N=_r(),M=N.extra;M.attributes[Ae]=e,Ce(y,p).then(function(Y){var E=We(m(m({},N),{},{icons:{main:Y,mask:He()},prefix:p,iconName:A,extra:M,watchable:!0})),L=T.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(L,t.firstChild):t.appendChild(L),L.outerHTML=E.map(function(J){return Wt(J)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Rr(t){return Promise.all([gn(t,"::before"),gn(t,"::after")])}function Dr(t){return t.parentNode!==document.head&&!~Pa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ae)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function hn(t){if(ct)return new Promise(function(e,n){var a=It(t.querySelectorAll("*")).filter(Dr).map(Rr),r=Be.begin("searchPseudoElements");Kn(),Promise.all(a).then(function(){r(),Ie(),e()}).catch(function(){r(),Ie(),n()})})}var Fr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=hn,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?T:a;h.searchPseudoElements&&hn(r)}}},yn=!1,$r={mixout:function(){return{dom:{unwatch:function(){Kn(),yn=!0}}}},hooks:function(){return{bootstrap:function(){mn(_e("mutationObserverCallbacks",{}))},noAuto:function(){kr()},watch:function(n){var a=n.observeMutationsRoot;yn?Ie():mn(_e("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},wn=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},Yr={mixout:function(){return{parse:{transform:function(n){return wn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=wn(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),l="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),c={transform:"".concat(f," ").concat(l," ").concat(u)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:c,path:d};return{tag:"g",attributes:m({},p.outer),children:[{tag:"g",attributes:m({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:m(m({},a.icon.attributes),p.path)}]}]}}}},he={x:0,y:0,width:"100%",height:"100%"};function xn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Hr(t){return t.tag==="g"?t.children:[t]}var Wr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?ce(r.split(" ").map(function(o){return o.trim()})):He();return i.prefix||(i.prefix=ht()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,f=n.transform,l=i.width,u=i.icon,c=o.width,d=o.icon,p=Ha({transform:f,containerWidth:c,iconWidth:l}),x={tag:"rect",attributes:m(m({},he),{},{fill:"white"})},O=u.children?{children:u.children.map(xn)}:{},_={tag:"g",attributes:m({},p.inner),children:[xn(m({tag:u.tag,attributes:m(m({},u.attributes),p.path)},O))]},g={tag:"g",attributes:m({},p.outer),children:[_]},y="mask-".concat(s||$t()),A="clip-".concat(s||$t()),C={tag:"mask",attributes:m(m({},he),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,g]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:A},children:Hr(d)},C]};return a.push(N,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(A,")"),mask:"url(#".concat(y,")")},he)}),{children:a,attributes:r}}}},Br={provides:function(e){var n=!1;gt.matchMedia&&(n=gt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:m(m({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=m(m({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:m(m({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:m(m({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:m(m({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:m(m({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Ur={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Gr=[Ua,Ir,Tr,Mr,jr,Fr,$r,Yr,Wr,Br,Ur];ir(Gr,{mixoutsTo:X});X.noAuto;X.config;X.library;X.dom;var Te=X.parse;X.findIconDefinition;X.toHtml;var qr=X.icon;X.layer;X.text;X.counter;function kn(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function st(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?kn(Object(n),!0).forEach(function(a){G(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):kn(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Vr(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var a=n.call(t,e||"default");if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Xr(t){var e=Vr(t,"string");return typeof e=="symbol"?e:e+""}function le(t){"@babel/helpers - typeof";return le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},le(t)}function G(t,e,n){return e=Xr(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Kr(t,e){if(t==null)return{};var n={};for(var a in t)if(Object.prototype.hasOwnProperty.call(t,a)){if(e.indexOf(a)>=0)continue;n[a]=t[a]}return n}function Zr(t,e){if(t==null)return{};var n=Kr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var Qr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Qn={exports:{}};(function(t){(function(e){var n=function(g,y,A){if(!l(y)||c(y)||d(y)||p(y)||f(y))return y;var C,N=0,M=0;if(u(y))for(C=[],M=y.length;N<M;N++)C.push(n(g,y[N],A));else{C={};for(var Y in y)Object.prototype.hasOwnProperty.call(y,Y)&&(C[g(Y,A)]=n(g,y[Y],A))}return C},a=function(g,y){y=y||{};var A=y.separator||"_",C=y.split||/(?=[A-Z])/;return g.split(C).join(A)},r=function(g){return x(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(y,A){return A?A.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var y=r(g);return y.substr(0,1).toUpperCase()+y.substr(1)},o=function(g,y){return a(g,y).toLowerCase()},s=Object.prototype.toString,f=function(g){return typeof g=="function"},l=function(g){return g===Object(g)},u=function(g){return s.call(g)=="[object Array]"},c=function(g){return s.call(g)=="[object Date]"},d=function(g){return s.call(g)=="[object RegExp]"},p=function(g){return s.call(g)=="[object Boolean]"},x=function(g){return g=g-0,g===g},O=function(g,y){var A=y&&"process"in y?y.process:y;return typeof A!="function"?g:function(C,N){return A(C,g,N)}},_={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,y){return n(O(r,y),g)},decamelizeKeys:function(g,y){return n(O(o,y),g,y)},pascalizeKeys:function(g,y){return n(O(i,y),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=_:e.humps=_})(Qr)})(Qn);var Jr=Qn.exports,ti=["class","style"];function ei(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Jr.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function ni(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Jn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return Jn(f)}),r=Object.keys(t.attributes||{}).reduce(function(f,l){var u=t.attributes[l];switch(l){case"class":f.class=ni(u);break;case"style":f.style=ei(u);break;default:f.attrs[l]=u}return f},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Zr(n,ti);return sa(t.tag,st(st(st({},e),{},{class:r.class,style:st(st({},r.style),o)},r.attrs),s),a)}var ta=!1;try{ta=!0}catch{}function ai(){if(!ta&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ye(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?G({},t,e):{}}function ri(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},G(G(G(G(G(G(G(G(G(G(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),G(G(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function An(t){if(t&&le(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Te.icon)return Te.icon(t);if(t===null)return null;if(le(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var we=ia({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=_t(function(){return An(e.icon)}),i=_t(function(){return ye("classes",ri(e))}),o=_t(function(){return ye("transform",typeof e.transform=="string"?Te.transform(e.transform):e.transform)}),s=_t(function(){return ye("mask",An(e.mask))}),f=_t(function(){return qr(r.value,st(st(st(st({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});oa(f,function(u){if(!u)return ai("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var l=_t(function(){return f.value?Jn(f.value.abstract[0],{},a):null});return function(){return l.value}}}),ii={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},oi={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"]},si={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]};const li={class:"fixed top-64 w-screen",style:{"z-index":"50","pointer-events":"none"}},fi={class:"xl:w-[5%] sm:w-[6%] w-[10%] sm:ml-[95%] ml-[90%]"},ui={class:"bg-azul w-full py-4 sm:rounded-tl-xl sm:rounded-bl-xl rounded-tl-md rounded-bl-md",style:{"pointer-events":"auto"}},ci={class:"w-full py-2 ps-8 flex bg-[#3366cc]"},di={class:"flex w-5/6 sm:w-[20%] md:w-[10%] z-20",href:"https://www.gov.co/",target:"_blank"},mi=["src"],vi={class:"mx-auto px-4 sm:px-6 lg:px-8"},pi={class:"flex w-full justify-between items-center"},bi={class:"flex-shrink-0 sm:w-1/4 w-3/6 p-4"},gi={href:"/Welcome",class:"text-white text-2xl font-semibold"},hi=["src"],yi=["src"],wi={class:"hidden md:block"},xi={class:"flex space-x-4"},ki=["href"],Ai=["href"],Oi=["href"],Si=["href"],_i={class:"md:hidden z-20"},Pi={key:0,class:"md:hidden"},Ei={class:"px-2 pt-2 pb-3 space-y-1 sm:px-3"},Ci=["href"],Ni=["href"],Ii=["href"],Ti=["href"],Mi={class:"flex-1 overflow-y-auto overflow-x-hidden bg-light text-black"},ji={class:"container mx-auto flex flex-wrap items-center justify-between"},zi={class:"flex items-center flex-shrink-0 mr-6 w-1/6"},Li={href:"/Welcome",class:"w-full"},Ri=["src"],Di=["src"],Fi={class:"flex justify-center items-center space-x-4 text-primary"},$i={href:"https://www.instagram.com/alcaldiadepereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},Yi={href:"https://www.facebook.com/AlcaldiaDePereira/",target:"_blank",class:"hover:text-parrafo transition duration-300"},Hi={href:"https://www.youtube.com/channel/UCAFZZcG6RI0gw5DkrT6kMSQ/videos",target:"_blank",class:"hover:text-parrafo transition duration-300"},Wi={href:"#inicio",class:"text-primary hover:text-parrafo transition duration-300"},Bi={class:"container px-4 mt-8"},Ui={class:"custom-list space-y-2"},Gi={class:"w-full py-4 ps-8 flex bg-[#3366cc]"},qi={class:"flex w-5/6 sm:w-[25%] md:w-[15%]",href:"https://www.gov.co/",target:"_blank"},Vi=["src"],Xi={__name:"PageLayout",setup(t){const e=ea.useToast();va.init();const n=Ut(Gt().props.accesibilidad.contraste),a=Ut(Gt().props.accesibilidad.letra),r=Ut(""),i=Ut(!1),o=()=>{n.value=!n.value,Gt().props.accesibilidad.contraste=n.value},s=(f,l)=>{f>=2?(a.value=2,e.open({message:"Limite de aumento de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):f<=-2?(a.value=-2,e.open({message:"Limite de reducción de letra alcanzado",type:"warning",position:"top-right",duration:4e3,pauseOnHover:!0})):a.value=f,r.value=l,Gt().props.accesibilidad.letra=a.value};return(f,l)=>{const u=la("tooltip");return D(),F("div",{class:B(["flex flex-col overflow-x-hidden bg-option1",{"!bg-black":n.value}])},[v("div",li,[v("div",fi,[v("div",ui,[ot((D(),F("button",{onClick:o,class:B(["flex w-auto py-2 lg:px-4 px-2",{"bg-[#3366cc]":n.value}])},l[4]||(l[4]=[v("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[v("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 512 512"},[v("path",{d:"M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"})])],-1)]),2)),[[u,{value:"Contraste",autoHide:!1},void 0,{center:!0}]]),ot((D(),F("button",{onClick:l[0]||(l[0]=c=>s(a.value-1,"reducir")),class:B(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="reducir"&&!n.value}])},l[5]||(l[5]=[v("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[v("p",{class:"font-extrabold text-xs lg:text-base"},[at("A"),v("sup",null,"-")])],-1)]),2)),[[u,{value:"Reducir letra",autoHide:!1},void 0,{center:!0}]]),ot((D(),F("button",{onClick:l[1]||(l[1]=c=>s(0,"default")),class:B(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="default"&&!n.value}])},l[6]||(l[6]=[v("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[v("p",{class:"font-extrabold text-xs lg:text-base"},[at("A"),v("sup",null,"n")])],-1)]),2)),[[u,{value:"Restablecer letra",autoHide:!1},void 0,{center:!0}]]),ot((D(),F("button",{onClick:l[2]||(l[2]=c=>s(a.value+1,"aumentar")),class:B(["flex w-full py-2 lg:px-4 px-2",{"bg-[#3366cc]":r.value=="aumentar"&&!n.value}])},l[7]||(l[7]=[v("span",{class:"lg:rounded-lg rounded-md lg:w-5/6 w-full flex justify-center shadow-lg lg:p-2 p-1 text-azul bg-white [&>svg]:w-full"},[v("p",{class:"font-extrabold text-xs lg:text-base"},[at("A"),v("sup",null,"+")])],-1)]),2)),[[u,{value:"Aumentar letra",autoHide:!1},void 0,{center:!0}]])])])]),v("header",ci,[v("a",di,[v("figure",null,[v("img",{class:"w-full sm:w-5/6",src:V(Ke),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,mi),l[8]||(l[8]=v("figcaption",{lang:"es",class:"hidden"}," Esta es una imagen del logo del gobierno actual de colombia ",-1))])])]),v("nav",{class:B(["w-full h-full bg-option2 py-2 text-xl sm:text-2xl text-parrafo z-20",[{"!text-yellow-200 font-bold !bg-black":n.value},a.value==-2?"!text-base !sm:text-lg":a.value==-1?"!text-lg !sm:text-xl":a.value==1?"!text-2xl !sm:text-4xl":a.value==2?"!text-4xl !sm:text-6xl":""]])},[v("div",vi,[v("div",pi,[v("div",bi,[v("a",gi,[v("figure",null,[n.value?(D(),F("img",{key:0,class:"w-full sm:w-5/6",src:V(Ve),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,hi)):(D(),F("img",{key:1,class:"w-full sm:w-5/6",src:V(qe),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,yi)),l[9]||(l[9]=v("figcaption",{lang:"es",class:"hidden"}," Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),v("div",wi,[v("ul",xi,[v("li",null,[ot((D(),F("a",{href:f.route("capacitaciones.index"),class:B([[{underline:f.route().current("register")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},l[10]||(l[10]=[at("Capacitaciones")]),10,ki)),[[u,{value:"Registro de ingreso al punto",autoHide:!1},void 0,{bottom:!0}]])]),v("li",null,[ot((D(),F("a",{href:f.route("register"),class:B([[{underline:f.route().current("register")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},l[11]||(l[11]=[at("Registro")]),10,Ai)),[[u,{value:"Registro de ingreso al punto",autoHide:!1},void 0,{bottom:!0}]])]),v("li",null,[ot((D(),F("a",{href:f.route("formulario-satisfaccion"),class:B([[{underline:f.route().current("formulario-satisfaccion")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},l[12]||(l[12]=[at("Satisfacción")]),10,Oi)),[[u,{value:"formulario satisfacción",autoHide:!1},void 0,{bottom:!0}]])]),v("li",null,[f.$page.props.auth.user?ot((D(),F("a",{key:0,href:f.route("dashboard"),class:B([[{underline:f.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},l[13]||(l[13]=[at("Dashboard")]),10,Si)),[[u,{value:"regresar al dashboard",autoHide:!1},void 0,{bottom:!0}]]):ve("",!0)])])]),v("div",_i,[v("button",{class:B(["text-parrafo hover:text-secondary focus:outline-none",[{"!text-yellow-200 font-bold":n.value}]]),onClick:l[3]||(l[3]=c=>i.value=!i.value)},l[14]||(l[14]=[v("svg",{class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[v("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)]),2)])])]),i.value?(D(),F("div",Pi,[v("ul",Ei,[v("li",null,[v("a",{href:f.route("capacitaciones.index"),class:B([[{underline:f.route().current("register")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Capacitaciones",10,Ci)]),v("li",null,[v("a",{href:f.route("register"),class:B([[{underline:f.route().current("register")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Registro",10,Ni)]),v("li",null,[ot((D(),F("a",{href:f.route("formulario-satisfaccion"),class:B([[{underline:f.route().current("formulario-satisfaccion")},{"!text-yellow-200 font-bold":n.value},{"!text-yellow-200 font-bold":n.value}],"text-parrafo cursor hover:underline border-r-2 border-secondary pe-2"])},l[15]||(l[15]=[at("Satisfacción")]),10,Ii)),[[u,{value:"formulario satisfacción",autoHide:!1},void 0,{bottom:!0}]])]),v("li",null,[f.$page.props.auth.user?(D(),F("a",{key:0,href:f.route("dashboard"),class:B([[{underline:f.route().current("dashboard")},{"!text-yellow-200 font-bold":n.value}],"block text-parrafo hover:underline border-b-2 border-secondary py-2"])},"Dashboard",10,Ti)):ve("",!0)])])])):ve("",!0)],2),v("main",Mi,[fa(f.$slots,"default",{},void 0,!0)]),v("footer",{class:B(["px-2 bg-option2/90 text-parrafo flex flex-col py-6",{"!bg-black !text-white":n.value}])},[v("div",ji,[v("div",zi,[v("a",Li,[v("figure",null,[n.value?(D(),F("img",{key:0,class:"w-full",src:V(Ve),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Ri)):(D(),F("img",{key:1,class:"w-full",src:V(qe),alt:"imagen de logo",title:"Alcaldía de Pereira"},null,8,Di)),l[16]||(l[16]=v("figcaption",{lang:"es",class:"hidden"}," Esta es una imagen del logo de la alcaldía de Pereira ",-1))])])]),v("div",Fi,[v("a",$i,[qt(V(we),{icon:V(ii),size:"xl"},null,8,["icon"])]),v("a",Yi,[qt(V(we),{icon:V(oi),size:"xl"},null,8,["icon"])]),v("a",Hi,[qt(V(we),{icon:V(si),size:"xl"},null,8,["icon"])])]),v("div",null,[v("a",Wi,[qt(V(da),{class:"w-12 animate-bounce"})])])]),v("div",Bi,[v("ul",Ui,[(D(!0),F(ua,null,ca(f.$page.props.infoPunto,c=>(D(),F("li",{class:"flex text-parrafo",key:c.id},[at(Xe(c.punto.nombre)+" ",1),l[17]||(l[17]=v("br",null,null,-1)),at(" "+Xe(c.punto.direccion),1)]))),128))])])],2),v("div",Gi,[v("a",qi,[v("figure",null,[v("img",{class:"w-full sm:w-5/6",src:V(Ke),alt:"imagen de logo",title:"Gobierno colombiano"},null,8,Vi),l[18]||(l[18]=v("figcaption",{lang:"es",class:"hidden"}," Esta es una imagen del logo del gobierno actual de colombia ",-1))])])])],2)}}},Ji=na(Xi,[["__scopeId","data-v-e8234d13"]]);export{va as A,Ji as P};
