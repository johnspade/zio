"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[588],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||c;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},133:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var r=n(7462),a=n(3366),c=(n(7294),n(3905)),o=["components"],i={id:"setcount",title:"Frequency"},s=void 0,u={unversionedId:"datatypes/metrics/setcount",id:"datatypes/metrics/setcount",title:"Frequency",description:"A Frequency represents the number of occurrences of specified values. We can think of a Frequency as a set of counters associated with each value except that new counters will automatically be created when new values are observed.",source:"@site/docs/datatypes/metrics/setcount.md",sourceDirName:"datatypes/metrics",slug:"/datatypes/metrics/setcount",permalink:"/next/datatypes/metrics/setcount",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/metrics/setcount.md",tags:[],version:"current",frontMatter:{id:"setcount",title:"Frequency"},sidebar:"datatypes-sidebar",previous:{title:"Summary",permalink:"/next/datatypes/metrics/summary"},next:{title:"MetricLabel",permalink:"/next/datatypes/metrics/metriclabel"}},l=[{value:"API",id:"api",children:[],level:2},{value:"Use Cases",id:"use-cases",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],p={toc:l};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"A ",(0,c.kt)("inlineCode",{parentName:"p"},"Frequency")," represents the number of occurrences of specified values. We can think of a ",(0,c.kt)("inlineCode",{parentName:"p"},"Frequency")," as a set of counters associated with each value except that new counters will automatically be created when new values are observed."),(0,c.kt)("p",null,"Essentially, a ",(0,c.kt)("inlineCode",{parentName:"p"},"Frequency")," is a set of related counters sharing the same name and tags. The counters are set apart from each other by an additional configurable tag. The values of the tag represent the observed distinct values."),(0,c.kt)("h2",{id:"api"},"API"),(0,c.kt)("p",null,"TODO"),(0,c.kt)("h2",{id:"use-cases"},"Use Cases"),(0,c.kt)("p",null,"Sets are used to count the occurrences of distinct string values:"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Tracking number of invocations for each service, for an application that uses logical names for its services."),(0,c.kt)("li",{parentName:"ul"},"Tracking frequency of different types of failures.")),(0,c.kt)("h2",{id:"examples"},"Examples"),(0,c.kt)("p",null,"Create a ",(0,c.kt)("inlineCode",{parentName:"p"},"Frequency")," to observe the occurrences of unique ",(0,c.kt)("inlineCode",{parentName:"p"},"Strings"),". It can be applied to effects yielding a ",(0,c.kt)("inlineCode",{parentName:"p"},"String"),":"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")),(0,c.kt)("p",null,"Now we can generate some keys within an effect and start counting the occurrences for each value:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-scala"},"TODO\n")))}f.isMDXComponent=!0}}]);