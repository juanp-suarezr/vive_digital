import{c as g,o as c,b as s,A as a,B as R,E as A,a as d,G as w,f as C,h as $,t as y,n as k,l as K,D as z,w as m,R as F,O as M,z as N,T as H,j as T,Q as O,u as i,Z as q,d as U,e as _,F as P,q as j,k as Z}from"./app-Cd37GN7p.js";import{c as G,_ as Q}from"./AuthenticatedLayout-D_viBhgo.js";import{_ as J,a as W}from"./TextInput-79z22Tgi.js";import{_ as S}from"./InputLabel-Dsoo3Zln.js";import{_ as X}from"./PrimaryButton-CTsuUP0p.js";import{s as Y,a as ee}from"./index-Dc4fszNA.js";import{s as te,R as oe}from"./index-CU4NWltC.js";import{s as ne}from"./index-p8KLgnTG.js";import{f as se}from"./index-ZhWAdK_X.js";import"./logo_white-hEdzsGgl.js";import"./AcademicCapIcon-B1PHoduf.js";import"./index-CJ2JCMm-.js";import"./index-DpCoYiaw.js";import"./index-BV2JtLUj.js";import"./index-fEoun3g3.js";import"./index-BhJryOGw.js";var D={name:"PlusIcon",extends:te};function le(e,t,o,r,p,n){return c(),g("svg",a({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),t[0]||(t[0]=[s("path",{d:"M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z",fill:"currentColor"},null,-1)]),16)}D.render=le;var re=`
    .p-fieldset {
        background: dt('fieldset.background');
        border: 1px solid dt('fieldset.border.color');
        border-radius: dt('fieldset.border.radius');
        color: dt('fieldset.color');
        padding: dt('fieldset.padding');
        margin: 0;
    }

    .p-fieldset-legend {
        background: dt('fieldset.legend.background');
        border-radius: dt('fieldset.legend.border.radius');
        border-width: dt('fieldset.legend.border.width');
        border-style: solid;
        border-color: dt('fieldset.legend.border.color');
        padding: dt('fieldset.legend.padding');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend {
        padding: 0;
    }

    .p-fieldset-toggle-button {
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        display: flex;
        gap: dt('fieldset.legend.gap');
        align-items: center;
        justify-content: center;
        padding: dt('fieldset.legend.padding');
        background: transparent;
        border: 0 none;
        border-radius: dt('fieldset.legend.border.radius');
        transition:
            background dt('fieldset.transition.duration'),
            color dt('fieldset.transition.duration'),
            outline-color dt('fieldset.transition.duration'),
            box-shadow dt('fieldset.transition.duration');
        outline-color: transparent;
    }

    .p-fieldset-legend-label {
        font-weight: dt('fieldset.legend.font.weight');
    }

    .p-fieldset-toggle-button:focus-visible {
        box-shadow: dt('fieldset.legend.focus.ring.shadow');
        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');
        outline-offset: dt('fieldset.legend.focus.ring.offset');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover {
        color: dt('fieldset.legend.hover.color');
        background: dt('fieldset.legend.hover.background');
    }

    .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.color');
        transition: color dt('fieldset.transition.duration');
    }

    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {
        color: dt('fieldset.toggle.icon.hover.color');
    }

    .p-fieldset .p-fieldset-content {
        padding: dt('fieldset.content.padding');
    }
`,ie={root:function(t){var o=t.props;return["p-fieldset p-component",{"p-fieldset-toggleable":o.toggleable}]},legend:"p-fieldset-legend",legendLabel:"p-fieldset-legend-label",toggleButton:"p-fieldset-toggle-button",toggleIcon:"p-fieldset-toggle-icon",contentContainer:"p-fieldset-content-container",content:"p-fieldset-content"},de=R.extend({name:"fieldset",style:re,classes:ie}),ae={name:"BaseFieldset",extends:ne,props:{legend:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:de,provide:function(){return{$pcFieldset:this,$parentInstance:this}}},E={name:"Fieldset",extends:ae,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{d_collapsed:this.collapsed}},watch:{collapsed:function(t){this.d_collapsed=t}},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.legend},dataP:function(){return se({toggleable:this.toggleable})}},directives:{ripple:oe},components:{PlusIcon:D,MinusIcon:Y}};function b(e){"@babel/helpers - typeof";return b=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(e)}function B(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),o.push.apply(o,r)}return o}function L(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?B(Object(o),!0).forEach(function(r){ce(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function ce(e,t,o){return(t=pe(t))in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function pe(e){var t=ge(e,"string");return b(t)=="symbol"?t:t+""}function ge(e,t){if(b(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t);if(b(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ue=["data-p"],fe=["data-p"],me=["id"],be=["id","aria-controls","aria-expanded","aria-label"],he=["id","aria-labelledby"];function ye(e,t,o,r,p,n){var v=A("ripple");return c(),g("fieldset",a({class:e.cx("root"),"data-p":n.dataP},e.ptmi("root")),[s("legend",a({class:e.cx("legend"),"data-p":n.dataP},e.ptm("legend")),[w(e.$slots,"legend",{toggleCallback:n.toggle},function(){return[e.toggleable?C("",!0):(c(),g("span",a({key:0,id:e.$id+"_header",class:e.cx("legendLabel")},e.ptm("legendLabel")),y(e.legend),17,me)),e.toggleable?$((c(),g("button",a({key:1,id:e.$id+"_header",type:"button","aria-controls":e.$id+"_content","aria-expanded":!p.d_collapsed,"aria-label":n.buttonAriaLabel,class:e.cx("toggleButton"),onClick:t[0]||(t[0]=function(){return n.toggle&&n.toggle.apply(n,arguments)}),onKeydown:t[1]||(t[1]=function(){return n.onKeyDown&&n.onKeyDown.apply(n,arguments)})},L(L({},e.toggleButtonProps),e.ptm("toggleButton"))),[w(e.$slots,e.$slots.toggleicon?"toggleicon":"togglericon",{collapsed:p.d_collapsed,class:k(e.cx("toggleIcon"))},function(){return[(c(),K(z(p.d_collapsed?"PlusIcon":"MinusIcon"),a({class:e.cx("toggleIcon")},e.ptm("toggleIcon")),null,16,["class"]))]}),s("span",a({class:e.cx("legendLabel")},e.ptm("legendLabel")),y(e.legend),17)],16,be)),[[v]]):C("",!0)]})],16,fe),d(M,a({name:"p-toggleable-content"},e.ptm("transition")),{default:m(function(){return[$(s("div",a({id:e.$id+"_content",class:e.cx("contentContainer"),role:"region","aria-labelledby":e.$id+"_header"},e.ptm("contentContainer")),[s("div",a({class:e.cx("content")},e.ptm("content")),[w(e.$slots,"default")],16)],16,he),[[F,!p.d_collapsed]])]}),_:3},16)],16,ue)}E.render=ye;const ve={class:"grid sm:grid-cols-2 lg:grid-cols-3 gap-4"},we={class:"flex flex-col bg-white border shadow-sm rounded-xl"},_e={class:"bg-gray-100 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5 grid min-[300px]:grid-cols-2 lg:grid-cols-2 gap-4"},Pe={class:"text-right"},ke={class:"p-4 md:p-5"},xe={class:"mx-auto sm:grid sm:grid-cols-1 sm:px-2 lg:px-2 p-4 gap-4"},Ce={class:"mx-2"},$e={class:"sm:mx-2 sm:w-full"},Oe={class:"p-2 text-right"},je={class:"lg:col-span-2 flex flex-col bg-white border shadow-sm rounded-xl"},Se={class:"p-4 md:p-5 grid lg:grid-cols-2 gap-4"},Ue={__name:"Edit",props:{role:{type:Object},permission:Object,rolePermissions:Object},setup(e){const t=N("$swal"),o=e,r=[{url:"/roles",text:"Roles"},{url:"",text:"Editar Rol"}],p=Object.values(o.rolePermissions),n=H({name:o.role.name,permisos:p}),v=()=>{n.patch(route("roles.update",o.role.id),{onSuccess:()=>t({title:"Registro Actualizado",text:"El rol se ha actualizado exitosamente",icon:"success"})})};T(()=>O().props.flash.code,()=>{O().props.flash.code});const V=h=>{const l={};return h.forEach(u=>{const[f]=u.split("-");l[f]||(l[f]=[]),l[f].push(u)}),l},I=h=>({usuarios:"bg-azul text-white",rol:"bg-parrafo text-white",registrados:"bg-primary text-white"})[h]||"bg-gray-200";return(h,l)=>(c(),g(P,null,[d(i(q),{title:"Editar Rol"}),d(Q,{breadCrumbLinks:r},{header:m(()=>[d(i(Z),{class:"text-sky-400 hover:text-sky-600",href:"/roles"},{default:m(()=>l[2]||(l[2]=[_(" Roles ")])),_:1,__:[2]}),_(" / "+y(i(n).name),1)]),default:m(()=>[s("div",ve,[s("div",we,[s("div",_e,[l[3]||(l[3]=s("h3",{class:"mt-1 text-gray-500"},"Editar Rol",-1)),s("div",Pe,[d(G,{class:"text-center"})])]),s("div",ke,[s("form",{onSubmit:U(v,["prevent"])},[s("div",xe,[s("div",Ce,[d(S,{for:"name",value:"Rol"}),d(J,{id:"name",modelValue:i(n).name,"onUpdate:modelValue":l[0]||(l[0]=u=>i(n).name=u),autofocus:"",required:"",type:"text",class:"mt-1 block w-full"},null,8,["modelValue"]),d(W,{message:i(n).errors.name,class:"mt-2"},null,8,["message"])]),s("div",$e,[d(S,{for:"name",value:"Permisos",class:"mb-1"}),d(i(ee),{name:"permisos",modelValue:i(n).permisos,"onUpdate:modelValue":l[1]||(l[1]=u=>i(n).permisos=u),selectedItemsLabel:"{} permisos seleccionados",options:Object.values(e.permission),filter:"",placeholder:"Selecciona los permisos",maxSelectedLabels:7,class:"w-full md:w-20rem",checked:e.permission.id},null,8,["modelValue","options","checked"])]),l[5]||(l[5]=s("div",null,null,-1)),s("div",Oe,[d(X,{disabled:i(n).processing,class:k([{"opacity-25":i(n).processing},"my-2"])},{default:m(()=>l[4]||(l[4]=[s("i",{class:"fa-solid fa-save"},null,-1),_(" Actualizar ")])),_:1,__:[4]},8,["disabled","class"])])])],32)])]),s("div",je,[s("div",Se,[(c(!0),g(P,null,j(V(i(n).permisos),(u,f)=>(c(),g("span",{key:f,class:"mt-2 inline-block"},[d(i(E),{legend:f},{default:m(()=>[(c(!0),g(P,null,j(u,x=>(c(),g("span",{key:x,class:k([I(f),"inline-block mt-1 text-sm font-medium me-2 px-2.5 py-0.5 rounded"])},y(x),3))),128))]),_:2},1032,["legend"])]))),128))])])])]),_:1})],64))}};export{Ue as default};
