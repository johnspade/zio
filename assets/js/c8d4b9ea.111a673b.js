"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?n.createElement(d,o(o({ref:t},p),{},{components:r})):n.createElement(d,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={id:"index",title:"Introduction"},o=void 0,c={unversionedId:"reference/metrics/index",id:"reference/metrics/index",title:"Introduction",description:"In highly concurrent applications, things are interconnected, so maintaining such setup to run smoothly and without application downtimes is very challenging.",source:"@site/docs/reference/metrics/index.md",sourceDirName:"reference/metrics",slug:"/reference/metrics/",permalink:"/reference/metrics/",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/metrics/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Introduction"},sidebar:"reference-sidebar",previous:{title:"SubscriptionRef",permalink:"/reference/stream/subscription-ref"},next:{title:"Counter",permalink:"/reference/metrics/counter"}},s={},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In highly concurrent applications, things are interconnected, so maintaining such setup to run smoothly and without application downtimes is very challenging. "),(0,a.kt)("p",null,"Imagine we have a complex infrastructure with lots of services. Services are replicated and distributed across our servers. So we have no insight on what happening on the across our services at level of errors, response latency, service uptime, etc. With ZIO Metrics, we can capture these different metrics and provide them to a ",(0,a.kt)("em",{parentName:"p"},"metric service")," for later investigation."),(0,a.kt)("p",null,"ZIO supports 5 types of Metrics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/metrics/counter"},"Counter"))," \u2014 The Counter is used for any value that increases over time like ",(0,a.kt)("em",{parentName:"li"},"request counts"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/metrics/gauge"},"Gauge"))," \u2014 The gauge is a single numerical value that can arbitrary goes up or down over time like ",(0,a.kt)("em",{parentName:"li"},"memory usage"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/metrics/histogram"},"Histogram"))," \u2014 The Histogram is used to track the distribution of a set of observed values across a set of buckets like ",(0,a.kt)("em",{parentName:"li"},"request latencies"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/metrics/summary"},"Summary"))," \u2014 The Summary represents a sliding window of a time series along with metrics for certain percentiles of the time series, referred to as quantiles like ",(0,a.kt)("em",{parentName:"li"},"request latencies"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"/reference/metrics/setcount"},"Frequency"))," \u2014 The Frequency is a metric that counts the number of occurrences of distinct string values.")),(0,a.kt)("p",null,"All ZIO Metrics are defined in the form of ZIO Aspects that can be applied to effects without changing the signature of the effect it is applied to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,a.kt)("p",null,"After adding metrics into our application, whenever we want we can capture snapshot of all metrics recorded by our application:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,a.kt)("p",null,"Also, a ",(0,a.kt)("em",{parentName:"p"},"metric service")," can implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"MetricListener")," interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,a.kt)("p",null,"And then we can install that to our application which will be notified every time a metric is updated:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")))}u.isMDXComponent=!0}}]);