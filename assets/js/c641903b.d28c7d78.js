"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[498],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1648:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"zio-ftp",title:"ZIO FTP"},s=void 0,c={unversionedId:"resources/ecosystem/officials/zio-ftp",id:"resources/ecosystem/officials/zio-ftp",title:"ZIO FTP",description:"ZIO FTP is a simple, idiomatic (S)FTP client for ZIO.",source:"@site/docs/resources/ecosystem/officials/zio-ftp.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-ftp",permalink:"/next/resources/ecosystem/officials/zio-ftp",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/officials/zio-ftp.md",tags:[],version:"current",frontMatter:{id:"zio-ftp",title:"ZIO FTP"},sidebar:"resources-sidebar",previous:{title:"ZIO Config",permalink:"/next/resources/ecosystem/officials/zio-config"},next:{title:"ZIO JSON",permalink:"/next/resources/ecosystem/officials/zio-json"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],u={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-ftp"},"ZIO FTP")," is a simple, idiomatic (S)FTP client for ZIO."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-ftp" % "0.3.0" \n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"First we need an FTP server if we don't have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d \\\n    -p 21:21 \\\n    -p 21000-21010:21000-21010 \\\n    -e USERS="one|1234" \\\n    -e ADDRESS=localhost \\\n    delfer/alpine-ftp-server\n')),(0,i.kt)("p",null,"Now we can run the example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.blocking.Blocking\nimport zio.console.putStrLn\nimport zio.ftp.Ftp._\nimport zio.ftp._\nimport zio.stream.{Transducer, ZStream}\nimport zio.{Chunk, ExitCode, URIO, ZIO}\n\nobject ZIOFTPExample extends zio.App {\n  private val settings =\n    UnsecureFtpSettings("127.0.0.1", 21, FtpCredentials("one", "1234"))\n\n  private val myApp = for {\n    _        <- putStrLn("List of files at root directory:")\n    resource <- ls("/").runCollect\n    _        <- ZIO.foreach(resource)(e => putStrLn(e.path))\n    path = "~/file.txt"\n    _ <- upload(\n      path,\n      ZStream.fromChunk(\n        Chunk.fromArray("Hello, ZIO FTP!\\nHello, World!".getBytes)\n      )\n    )\n    file <- readFile(path)\n      .transduce(Transducer.utf8Decode)\n      .runCollect\n    _ <- putStrLn(s"Content of $path file:")\n    _ <- putStrLn(file.fold("")(_ + _))\n  } yield ()\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] = myApp\n    .provideCustom(\n      unsecure(settings) ++ Blocking.live\n    )\n    .exitCode\n}\n')))}f.isMDXComponent=!0}}]);