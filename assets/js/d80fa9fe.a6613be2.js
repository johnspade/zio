"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9710],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),p=a,f=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4543:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={id:"random",title:"Random"},i=void 0,s={unversionedId:"services/random",id:"version-1.x/services/random",title:"Random",description:"Random service provides utilities to generate random numbers. It's a functional wrapper of scala.util.Random. This service contains various different pseudo-random generators like nextInt, nextBoolean and nextDouble. Each random number generator functions return a URIO[Random, T] value.",source:"@site/versioned_docs/version-1.x/services/random.md",sourceDirName:"services",slug:"/services/random",permalink:"/version-1.x/services/random",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/services/random.md",tags:[],version:"1.x",frontMatter:{id:"random",title:"Random"},sidebar:"services-sidebar",previous:{title:"Clock",permalink:"/version-1.x/services/clock"},next:{title:"Blocking",permalink:"/version-1.x/services/blocking"}},l={},u=[],c={toc:u};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Random service provides utilities to generate random numbers. It's a functional wrapper of ",(0,a.kt)("inlineCode",{parentName:"p"},"scala.util.Random"),". This service contains various different pseudo-random generators like ",(0,a.kt)("inlineCode",{parentName:"p"},"nextInt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nextBoolean")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"nextDouble"),". Each random number generator functions return a ",(0,a.kt)("inlineCode",{parentName:"p"},"URIO[Random, T]")," value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.random._\nimport zio.console._\nfor {\n  randomInt <- nextInt\n  _ <- putStrLn(s"A random Int: $randomInt")\n  randomChar <- nextPrintableChar\n  _ <- putStrLn(s"A random Char: $randomChar")\n  randomDouble <- nextDoubleBetween(1.0, 5.0)\n  _ <- putStrLn(s"A random double between 1.0 and 5.0: $randomDouble")\n} yield ()\n')),(0,a.kt)("p",null,"Random service has a ",(0,a.kt)("inlineCode",{parentName:"p"},"setSeed")," which helps us to alter the state of the random generator. It is useful when writing the test version of Random service when we need a generation of the same sequence of numbers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"for {\n  _ <- setSeed(0)\n  nextInts <- (nextInt zip nextInt)\n} yield assert(nextInts == (-1155484576,-723955400))\n")),(0,a.kt)("p",null,"Also, it has a utility to shuffle a list or generating random samples from Gaussian distribution:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"shuffle")," - Takes a list as an input and shuffles it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"nextGaussian"),' \u2014 Returns the next pseudorandom, Gaussian ("normally") distributed double value with mean 0.0 and standard deviation 1.0.')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"Note"),":")),(0,a.kt)("p",{parentName:"blockquote"},"Random numbers that are generated via Random service are not cryptographically strong. Therefore it's not safe to use the ZIO Random service for security domains where a high level of security and randomness is required, such as password generation.")))}d.isMDXComponent=!0}}]);