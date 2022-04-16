"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[917],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),k=o,f=m["".concat(c,".").concat(k)]||m[k]||u[k]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9832:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"zio-test-akka-http",title:"ZIO Test Akka HTTP"},c=void 0,l={unversionedId:"resources/ecosystem/community/zio-test-akka-http",id:"resources/ecosystem/community/zio-test-akka-http",title:"ZIO Test Akka HTTP",description:"ZIO Test Akka HTTP is an Akka-HTTP Route TestKit for zio-test.",source:"@site/docs/resources/ecosystem/community/zio-test-akka-http.md",sourceDirName:"resources/ecosystem/community",slug:"/resources/ecosystem/community/zio-test-akka-http",permalink:"/next/resources/ecosystem/community/zio-test-akka-http",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/community/zio-test-akka-http.md",tags:[],version:"current",frontMatter:{id:"zio-test-akka-http",title:"ZIO Test Akka HTTP"},sidebar:"resources-sidebar",previous:{title:"ZIO Slick Interop",permalink:"/next/resources/ecosystem/community/zio-slick-interop"},next:{title:"ZIO Compatible Libraries",permalink:"/next/resources/ecosystem/compatible"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/senia-psm/zio-test-akka-http"},"ZIO Test Akka HTTP")," is an Akka-HTTP Route TestKit for zio-test."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,a.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "info.senia" %% "zio-test-akka-http" % "1.0.2"\n')),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"An example of writing Akka HTTP Route test spec:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import akka.http.scaladsl.model.HttpResponse\nimport akka.http.scaladsl.server.Directives.complete\nimport zio.test.Assertion._\nimport zio.test._\nimport zio.test.akkahttp.DefaultAkkaRunnableSpec\n\nobject MySpec extends DefaultAkkaRunnableSpec {\n  def spec =\n    suite("MySpec")(\n      testM("my test") {\n        assertM(Get() ~> complete(HttpResponse()))(\n          handled(\n            response(equalTo(HttpResponse()))\n          )\n        )\n      }\n    )\n}\n')))}m.isMDXComponent=!0}}]);