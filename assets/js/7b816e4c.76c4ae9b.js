"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[636],{3905:function(e,n,t){t.d(n,{Zo:function(){return m},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,v=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return t?a.createElement(v,r(r({ref:n},m),{},{components:t})):a.createElement(v,r({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=d;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,r[1]=p;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3286:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return m}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],p={id:"zenvironment",title:"ZEnvironment"},l=void 0,s={unversionedId:"datatypes/contextual/zenvironment",id:"datatypes/contextual/zenvironment",title:"ZEnvironment",description:"A ZEnvironment[R] is a built-in type-level map for the ZIO data type which is responsible for maintaining the environment of a ZIO effect. The ZIO data type uses this map to maintain all the environmental services and their implementations.",source:"@site/docs/datatypes/contextual/zenvironment.md",sourceDirName:"datatypes/contextual",slug:"/datatypes/contextual/zenvironment",permalink:"/next/datatypes/contextual/zenvironment",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/contextual/zenvironment.md",tags:[],version:"current",frontMatter:{id:"zenvironment",title:"ZEnvironment"},sidebar:"datatypes-sidebar",previous:{title:"Introduction",permalink:"/next/datatypes/contextual/"},next:{title:"ZLayer",permalink:"/next/datatypes/contextual/zlayer"}},m=[{value:"Creation",id:"creation",children:[],level:2},{value:"Operations",id:"operations",children:[],level:2},{value:"Providing Multiple Instance of the Same Interface",id:"providing-multiple-instance-of-the-same-interface",children:[{value:"Multiple Config Example",id:"multiple-config-example",children:[],level:3},{value:"Multiple Database Example",id:"multiple-database-example",children:[],level:3}],level:2}],c={toc:m};function d(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEnvironment[R]")," is a built-in type-level map for the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type which is responsible for maintaining the environment of a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," effect. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," data type uses this map to maintain all the environmental services and their implementations."),(0,o.kt)("p",null,"For example, assume we have written a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEnvironment")," containing all built-in services as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval environment: ZEnvironment[Console & Clock & Random & System] =\n  ZEnvironment[Console, Clock, Random, System](\n    Console.ConsoleLive,\n    Clock.ClockLive,\n    Random.RandomLive,\n    System.SystemLive\n  )\n")),(0,o.kt)("p",null,"This map contains all built-in services and their corresponding implementations. If we evaluate the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEnvironment#toString")," method, we can see the underlying type-level map something like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"ZEnvironment(\n  Map(\n    Console -> (zio.Console$ConsoleLive$@76a3e297, 0),\n    Clock   -> (zio.Clock$ClockLive$@4d3167f4, 1), \n    Random  -> (RandomScala(scala.util.Random$@4eb7f003), 2), \n    System  -> (zio.System$SystemLive$@eafc191, 3)\n  )\n)\n")),(0,o.kt)("p",null,"From a ZIO environment point of view, we can think of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," as the following function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"type ZIO[R, E, A] = ZEnvironment[R] => Either[E, A]\nor \ntype ZIO[R, E, A] = ZEnvironment[R] => IO[E, A]\n")),(0,o.kt)("p",null,"For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO[Console & Random, Throwable, String]")," can be thought of as a function from ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEnvironment[Console & Random]")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"Either[Throwable, String]"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),":"),(0,o.kt)("p",{parentName:"blockquote"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEnvironment")," is useful for manually constructing and combining the ZIO environment. So, in most cases, we do not require working directly with this data type. So you can skip reading this page if you are not an advanced user.")),(0,o.kt)("p",null,"We can eliminate the environment of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO[R, E, A]")," by providing ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEnvironment[R]")," to that effect. "),(0,o.kt)("p",null,"Also, we can access the ",(0,o.kt)("strong",{parentName:"p"},"whole")," environment using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.environment"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._  \nimport java.io.IOException\n\ncase class AppConfig(poolSize: Int)\n\nval myApp: ZIO[AppConfig, IOException, Unit] =\n  ZIO.environment[AppConfig].flatMap { env =>\n    val config  = env.get[AppConfig]\n    Console.printLine(s"Application started with config: $config")\n  }\n\nval eliminated: IO[IOException, Unit] =\n  myApp.provideEnvironment(\n    ZEnvironment(AppConfig(poolSize = 10))\n  )\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": "),(0,o.kt)("p",{parentName:"blockquote"},"In most cases, we do not require using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.environment")," to access the whole environment or the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provideEnvironment")," to provide effect dependencies. Therefore, most of the time, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.service*")," and other ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#provide*")," methods to access a specific service from the environment or provide services to a ZIO effect.")),(0,o.kt)("h2",{id:"creation"},"Creation"),(0,o.kt)("p",null,"To create an empty ZIO environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval empty: ZEnvironment[Any] = ZEnvironment.empty\n")),(0,o.kt)("p",null,"To create a ZIO environment from a simple value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ncase class AppConfig(host: String, port: Int)\nval config: ZEnvironment[AppConfig] = ZEnvironment(AppConfig("localhost", 8080))\n')),(0,o.kt)("h2",{id:"operations"},"Operations"),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"combine")," two or multiple environment we can use ",(0,o.kt)("inlineCode",{parentName:"p"},"union")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"++")," operator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ncase class AppConfig(host: String, port: Int)\n\nval app: ZEnvironment[AppConfig] =\n  ZEnvironment.empty ++ ZEnvironment(AppConfig("localhost", 8080))\n')),(0,o.kt)("p",null,"To ",(0,o.kt)("strong",{parentName:"p"},"add")," a service to an environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ncase class AppConfig(host: String, port: Int)\n\nval app: ZEnvironment[AppConfig] =\n  ZEnvironment.empty.add(AppConfig("localhost", 8080))\n')),(0,o.kt)("p",null,"To retrieve a service from the environment, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ncase class AppConfig(host: String, port: Int)\n\nval app: ZEnvironment[AppConfig] =\n  ZEnvironment.empty.add(AppConfig("localhost", 8080))\n\nval appConfig: AppConfig = app.get[AppConfig]\n')),(0,o.kt)("h2",{id:"providing-multiple-instance-of-the-same-interface"},"Providing Multiple Instance of the Same Interface"),(0,o.kt)("p",null,"We can express an effect's dependency on multiple services of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," which are keyed by type ",(0,o.kt)("inlineCode",{parentName:"p"},"K")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"Map[K, A]"),". For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO[Map[String, Database], Throwable, Unit]")," is an effect that depends on multiple ",(0,o.kt)("inlineCode",{parentName:"p"},"Database")," versions."),(0,o.kt)("p",null,"To access the specified service corresponding to a specific key, we can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.serviceAt[Service](key)")," constructor. For example, to access a ",(0,o.kt)("inlineCode",{parentName:"p"},"Database"),' service which is specified by the "inmemory" key, we can write:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val database: URIO[Map[String, Database], Option[Database]] =\n  ZIO.serviceAt[Database]("inmemory")\n')),(0,o.kt)("p",null,"A service can be updated at the specified key using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#updateServiceAt")," operator."),(0,o.kt)("h3",{id:"multiple-config-example"},"Multiple Config Example"),(0,o.kt)("p",null,"Let's see how we can create a layer comprising multiple instances of ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfig"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ncase class AppConfig(host: String, port: Int)\n\nobject AppConfig {\n  val layer: ULayer[Map[String, AppConfig]] =\n    ZLayer.succeedEnvironment(\n      ZEnvironment(\n        Map(\n          "prod" -> AppConfig("production.myapp", 80),\n          "dev" -> AppConfig("development.myapp", 8080)\n        )\n      )\n    )\n}\n')),(0,o.kt)("p",null,"And here is the application which uses different ",(0,o.kt)("inlineCode",{parentName:"p"},"AppConfig")," from the ZIO environment based on the value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"APP_ENV")," environment variable:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MultipleConfigExample extends ZIOAppDefault {\n\n  val myApp: ZIO[Map[String, AppConfig], String, Unit] = for {\n    env <- System.env("APP_ENV")\n      .flatMap(x => ZIO.fromOption(x))\n      .orElseFail("The environment variable APP_ENV cannot be found.")\n    config <- ZIO.serviceAt[AppConfig](env)\n      .flatMap(x => ZIO.fromOption(x))\n      .orElseFail(s"The $env config cannot be found in the ZIO environment")\n    _ <- ZIO.logInfo(s"Application started with: $config")\n  } yield ()\n\n  def run =\n    myApp.provide(AppConfig.layer)\n\n}\n')),(0,o.kt)("h3",{id:"multiple-database-example"},"Multiple Database Example"),(0,o.kt)("p",null,"Here is an example of providing multiple instances of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Database")," service to the ZIO environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nimport java.nio.charset.StandardCharsets\n\ntrait Database {\n  def add(key: String, value: Array[Byte]): ZIO[Any, Throwable, Unit]\n}\n\nobject Database {\n  val layer: ULayer[Map[String, Database]] = {\n    ZLayer.succeedEnvironment(\n      ZEnvironment(\n        Map(\n          "persistent" -> PersistentDatabase.apply(),\n          "inmemory" -> InmemoryDatabase.apply()\n        )\n      )\n    )\n  }\n}\n\ncase class InmemoryDatabase() extends Database {\n  override def add(key: String, value: Array[Byte]): ZIO[Any, Throwable, Unit] =\n    ZIO.unit <* ZIO.logInfo(s"new $key added to the inmemory database")\n}\n\ncase class PersistentDatabase() extends Database {\n  override def add(key: String, value: Array[Byte]): ZIO[Any, Throwable, Unit] =\n    ZIO.unit <* ZIO.logInfo(s"new $key added to the persistent database")\n}\n\nobject MultipleDatabaseExample extends ZIOAppDefault {\n  val myApp = for {\n    inmemory <- ZIO.serviceAt[Database]("inmemory")\n      .flatMap(x => ZIO.fromOption[Database](x))\n      .orElseFail("failed to find an in-memory database in the ZIO environment")\n    persistent <- ZIO.serviceAt[Database]("persistent")\n      .flatMap(x => ZIO.fromOption[Database](x))\n      .orElseFail("failed to find an persistent database in the ZIO environment")\n    _ <- inmemory.add("key1", "value1".getBytes(StandardCharsets.UTF_8))\n    _ <- persistent.add("key2", "value2".getBytes(StandardCharsets.UTF_8))\n  } yield ()\n\n  def run = myApp.provideLayer(Database.layer)\n}\n')))}d.isMDXComponent=!0}}]);