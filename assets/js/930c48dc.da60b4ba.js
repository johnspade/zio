"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,y=u["".concat(p,".").concat(f)]||u[f]||m[f]||s;return n?r.createElement(y,i(i({ref:t},c),{},{components:n})):r.createElement(y,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const s={id:"system",title:"TestSystem"},i=void 0,a={unversionedId:"reference/test/environment/system",id:"reference/test/environment/system",title:"TestSystem",description:"TestSystem supports deterministic testing of effects involving system properties.",source:"@site/docs/reference/test/environment/system.md",sourceDirName:"reference/test/environment",slug:"/reference/test/environment/system",permalink:"/reference/test/environment/system",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/test/environment/system.md",tags:[],version:"current",frontMatter:{id:"system",title:"TestSystem"},sidebar:"reference-sidebar",previous:{title:"TestRandom",permalink:"/reference/test/environment/random"},next:{title:"Live",permalink:"/reference/test/environment/live"}},p={},l=[],c={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TestSystem")," supports deterministic testing of effects involving system properties. "),(0,o.kt)("p",null,"With the increased usage of containers and runtimes like Kubernetes, more and more applications are being configured by means of environment variables. It is important to test this logic just like other parts of an application."),(0,o.kt)("p",null,"For this purpose ZIO Test exposes ",(0,o.kt)("inlineCode",{parentName:"p"},"TestSystem")," module. Additionally, to setting the ",(0,o.kt)("em",{parentName:"p"},"environment variables"),". It also allows for setting ",(0,o.kt)("em",{parentName:"p"},"JVM system properties")," like in the code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.test._\nimport zio.test.Assertion._\n\nfor {\n  _      <- TestSystem.putProperty("java.vm.name", "VM")\n  result <- System.property("java.vm.name")\n} yield assertTrue(result == Some("VM"))\n')),(0,o.kt)("p",null,"Internally, ",(0,o.kt)("inlineCode",{parentName:"p"},"TestSystem")," maintains mappings of environment variables and system properties that can be set and accessed. It is worth noticing that no actual environment variables or system properties will be accessed or set as a result of these actions. So there will be no impact on other parts of the system."))}m.isMDXComponent=!0}}]);