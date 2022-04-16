"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5777],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=a,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1447:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"faq",title:"Frequently Answered Questions (FAQ)",sidebar_label:"FAQ"},p=void 0,l={unversionedId:"about/faq",id:"about/faq",title:"Frequently Answered Questions (FAQ)",description:"In this page we are going to answer general questions related to the ZIO project.",source:"@site/docs/about/faq.md",sourceDirName:"about",slug:"/about/faq",permalink:"/next/about/faq",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/about/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Answered Questions (FAQ)",sidebar_label:"FAQ"},sidebar:"about-sidebar",previous:{title:"About ZIO",permalink:"/next/about/"},next:{title:"ZIO Coding Guidelines",permalink:"/next/about/coding-guidelines"}},c=[{value:"In ZIO ecosystem, there are lots of data types which they have <code>Z</code> prefix in their names. What this prefix stands for? Does it mean, that data type is effectual?",id:"in-zio-ecosystem-there-are-lots-of-data-types-which-they-have-z-prefix-in-their-names-what-this-prefix-stands-for-does-it-mean-that-data-type-is-effectual",children:[],level:2}],u={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this page we are going to answer general questions related to the ZIO project."),(0,i.kt)("h2",{id:"in-zio-ecosystem-there-are-lots-of-data-types-which-they-have-z-prefix-in-their-names-what-this-prefix-stands-for-does-it-mean-that-data-type-is-effectual"},"In ZIO ecosystem, there are lots of data types which they have ",(0,i.kt)("inlineCode",{parentName:"h2"},"Z")," prefix in their names. What this prefix stands for? Does it mean, that data type is effectual?"),(0,i.kt)("p",null,"No, it doesn't denote that the data type is effectual. Instead, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Z")," prefix is used for two purposes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Polymorphic Version of Another Data Type")," \u2014 The ",(0,i.kt)("inlineCode",{parentName:"p"},"Z")," prefix indicates a more polymorphic version of another data type, not a data type that is effectual. So for example ",(0,i.kt)("inlineCode",{parentName:"p"},"IO")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," are equally effectual but ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," is more polymorphic because it has the additional type parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"R"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Term Disambiguation")," \u2014 There are some cases where the ",(0,i.kt)("inlineCode",{parentName:"p"},"Z")," prefix is used to disambiguate a term that might otherwise be too common and create risk of name conflicts (e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPool"),")."))),(0,i.kt)("p",null,"This convention is true across all ZIO ecosystem. For example, in ZIO Prelude, the ",(0,i.kt)("inlineCode",{parentName:"p"},"ZValidation")," is a more general version of ",(0,i.kt)("inlineCode",{parentName:"p"},"Validation")," that is polymorphic in the log type. ",(0,i.kt)("inlineCode",{parentName:"p"},"ZSet")," is a more polymorphic version of a ",(0,i.kt)("em",{parentName:"p"},"Set")," that is polymorphic in the measure type. ",(0,i.kt)("inlineCode",{parentName:"p"},"ZPure")," is more polymorphic than its type aliases in several ways as represented by its different type parameters and also serves to disambiguate it as ",(0,i.kt)("em",{parentName:"p"},"Pure")," which is too general."))}f.isMDXComponent=!0}}]);