"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[359],{3905:(e,n,r)=>{r.d(n,{Zo:()=>f,kt:()=>m});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},f=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,u=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?t.createElement(u,i(i({ref:n},f),{},{components:r})):t.createElement(u,i({ref:n},f))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},863:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=r(7462),a=(r(7294),r(3905));const o={id:"error-refinement",title:"Error Refinement"},i=void 0,l={unversionedId:"reference/error-management/operations/error-refinement",id:"reference/error-management/operations/error-refinement",title:"Error Refinement",description:"ZIO has some operators useful for converting defects into failures. So we can take part in non-recoverable errors and convert them into the typed error channel and vice versa.",source:"@site/docs/reference/error-management/operations/error-refinement.md",sourceDirName:"reference/error-management/operations",slug:"/reference/error-management/operations/error-refinement",permalink:"/reference/error-management/operations/error-refinement",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/operations/error-refinement.md",tags:[],version:"current",frontMatter:{id:"error-refinement",title:"Error Refinement"},sidebar:"reference-sidebar",previous:{title:"Converting Defects to Failures",permalink:"/reference/error-management/operations/converting-defects-to-failures"},next:{title:"Flattening Optional Error Types",permalink:"/reference/error-management/operations/flattening-optional-error-types"}},p={},s=[{value:"Refining",id:"refining",level:2},{value:"<code>ZIO#refineToOrDie</code>",id:"ziorefinetoordie",level:3},{value:"<code>ZIO#refineOrDie</code>",id:"ziorefineordie",level:3},{value:"<code>ZIO#refineOrDieWith</code>",id:"ziorefineordiewith",level:3},{value:"Unrefining",id:"unrefining",level:2},{value:"<code>ZIO#unrefineTo[E1 &gt;: E]</code>",id:"ziounrefinetoe1--e",level:3},{value:"<code>ZIO#unrefine</code>",id:"ziounrefine",level:3},{value:"<code>ZIO#unrefineWith</code>",id:"ziounrefinewith",level:3}],f={toc:s};function c(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"ZIO has some operators useful for converting defects into failures. So we can take part in non-recoverable errors and convert them into the typed error channel and vice versa."),(0,a.kt)("p",null,"Note that both ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#refine*")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#unrefine*")," do not alter the error behavior, but only change the error model. That is to say, if an effect fails or die, then after ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#refine*")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#unrefine*"),", it will still fail or die; and if an effect succeeds, then after ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#refine*")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#unrefine*"),", it will still succeed; only the manner in which it signals the error will be altered by these two methods:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO#refine*")," pinches off a piece of ",(0,a.kt)("em",{parentName:"li"},"failure")," of type ",(0,a.kt)("inlineCode",{parentName:"li"},"E"),", and converts it into a ",(0,a.kt)("em",{parentName:"li"},"defect"),"."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"ZIO#unrefine*")," pinches off a piece of a ",(0,a.kt)("em",{parentName:"li"},"defect"),", and converts it into a ",(0,a.kt)("em",{parentName:"li"},"failure")," of type ",(0,a.kt)("inlineCode",{parentName:"li"},"E"),".")),(0,a.kt)("h2",{id:"refining"},"Refining"),(0,a.kt)("h3",{id:"ziorefinetoordie"},(0,a.kt)("inlineCode",{parentName:"h3"},"ZIO#refineToOrDie")),(0,a.kt)("p",null,"This operator ",(0,a.kt)("strong",{parentName:"p"},"narrows")," down the type of the error channel from ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"E1"),". It leaves the rest errors untyped, so everything that doesn't fit is turned into a defect. So it makes the error space ",(0,a.kt)("strong",{parentName:"p"},"smaller"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"ZIO[-R, +E, +A] {\n  def refineToOrDie[E1 <: E]: ZIO[R, E1, A]\n}\n")),(0,a.kt)("p",null,"In the following example, we are going to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"parseInt")," by importing ",(0,a.kt)("inlineCode",{parentName:"p"},"String#toInt")," code from the standard scala library using ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#attempt")," and then refining the error channel from ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"NumberFormatException")," error type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ndef parseInt(input: String): ZIO[Any, NumberFormatException, Int] =\n  ZIO.attempt(input.toInt)                 // ZIO[Any, Throwable, Int]\n    .refineToOrDie[NumberFormatException]  // ZIO[Any, NumberFormatException, Int]\n")),(0,a.kt)("p",null,"In this example, if the ",(0,a.kt)("inlineCode",{parentName:"p"},"input.toInt")," throws any other exceptions other than ",(0,a.kt)("inlineCode",{parentName:"p"},"NumberFormatException"),", e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"IndexOutOfBoundsException"),", will be translated to the ZIO defect."),(0,a.kt)("h3",{id:"ziorefineordie"},(0,a.kt)("inlineCode",{parentName:"h3"},"ZIO#refineOrDie")),(0,a.kt)("p",null,"It is the more powerful version of the previous operator. Instead of refining to one specific error type, we can refine to multiple error types using a partial function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def refineOrDie[E1](pf: PartialFunction[E, E1]): ZIO[R, E1, A]\n}\n")),(0,a.kt)("p",null,"In the following example, we excluded the ",(0,a.kt)("inlineCode",{parentName:"p"},"Baz")," exception from recoverable errors, so it will be converted to a defect. In another word, we narrowed ",(0,a.kt)("inlineCode",{parentName:"p"},"DomainError")," down to just ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Bar")," errors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nsealed abstract class DomainError(msg: String)\n  extends Exception(msg)\n    with Serializable\n    with Product\ncase class Foo(msg: String) extends DomainError(msg)\ncase class Bar(msg: String) extends DomainError(msg)\ncase class Baz(msg: String) extends DomainError(msg)\n\nobject MainApp extends ZIOAppDefault {\n  val effect: ZIO[Any, DomainError, Unit] =\n    ZIO.fail(Baz("Oh uh!"))\n\n  val refined: ZIO[Any, DomainError, Unit] =\n    effect.refineOrDie {\n      case foo: Foo => foo\n      case bar: Bar => bar\n    }\n\n  def run = refined.catchAll(_ => ZIO.unit).debug\n}\n')),(0,a.kt)("h3",{id:"ziorefineordiewith"},(0,a.kt)("inlineCode",{parentName:"h3"},"ZIO#refineOrDieWith")),(0,a.kt)("p",null,"In the two previous refine combinators, we were dealing with exceptional effects whose error channel type was ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable")," or a subtype of that. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#refineOrDieWith")," operator is a more powerful version of refining operators. It can work with any exceptional effect whether they are ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable")," or not. When we narrow down the failure space, some failures become defects. To convert those failures to defects, it takes a function from ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def refineOrDieWith[E1](pf: PartialFunction[E, E1])(f: E => Throwable): ZIO[R, E1, A]\n}\n")),(0,a.kt)("p",null,"In the following example, we excluded the ",(0,a.kt)("inlineCode",{parentName:"p"},"BazError")," from recoverable errors, so it will be converted to a defect. In another word, we narrowed the whole space of ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),' errors down to just "FooError" and "BarError":'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def effect(i: String): ZIO[Any, String, Nothing] = {\n    if (i == "foo") ZIO.fail("FooError")\n    else if (i == "bar") ZIO.fail("BarError")\n    else ZIO.fail("BazError")\n  }\n\n  val refined: ZIO[Any, String, Nothing] =\n    effect("baz").refineOrDieWith {\n      case "FooError" | "BarError" => "Oh Uh!"\n    }(e => new Throwable(e))\n\n  def run = refined.catchAll(_ => ZIO.unit)\n}\n')),(0,a.kt)("h2",{id:"unrefining"},"Unrefining"),(0,a.kt)("h3",{id:"ziounrefinetoe1--e"},(0,a.kt)("inlineCode",{parentName:"h3"},"ZIO#unrefineTo[E1 >: E]")),(0,a.kt)("p",null,"This operator ",(0,a.kt)("strong",{parentName:"p"},"broadens")," the type of the error channel from ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"E1")," and embeds some defects into it. So it is going from some fiber failures back to errors and thus making the error type ",(0,a.kt)("strong",{parentName:"p"},"larger"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def unrefineTo[E1 >: E]: ZIO[R, E1, A]\n}\n")),(0,a.kt)("p",null,"In the following example, we are going to implement ",(0,a.kt)("inlineCode",{parentName:"p"},"parseInt")," by importing ",(0,a.kt)("inlineCode",{parentName:"p"},"String#toInt")," code from the standard scala library using ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#succeed")," and then unrefining the error channel from ",(0,a.kt)("inlineCode",{parentName:"p"},"Nothing")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"NumberFormatException")," error type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ndef parseInt(input: String): ZIO[Any, NumberFormatException, Int] =\n  ZIO.succeed(input.toInt)              // ZIO[Any, Nothing, Int]\n    .unrefineTo[NumberFormatException]  // ZIO[Any, NumberFormatException, Int]\n")),(0,a.kt)("h3",{id:"ziounrefine"},(0,a.kt)("inlineCode",{parentName:"h3"},"ZIO#unrefine")),(0,a.kt)("p",null,"It is a more powerful version of the previous operator. It takes a partial function from ",(0,a.kt)("inlineCode",{parentName:"p"},"Throwable")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"E1")," and converts those defects to recoverable errors:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def unrefine[E1 >: E](pf: PartialFunction[Throwable, E1]): ZIO[R, E1, A]\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ncase class Foo(msg: String) extends Throwable(msg)\ncase class Bar(msg: String) extends Throwable(msg)\ncase class Baz(msg: String) extends Throwable(msg)\n\nobject MainApp extends ZIOAppDefault {\n  def unsafeOpThatMayThrows(i: String): String =\n    if (i == "foo")\n      throw Foo("Oh uh!")\n    else if (i == "bar")\n      throw Bar("Oh Error!")\n    else if (i == "baz")\n      throw Baz("Oh no!")\n    else i\n\n  def effect(i: String): ZIO[Any, Nothing, String] =\n    ZIO.succeed(unsafeOpThatMayThrows(i))\n\n  val unrefined: ZIO[Any, Foo, String] =\n    effect("foo").unrefine { case e: Foo => e }\n\n  def run = unrefined.catchAll(_ => ZIO.unit)\n}\n')),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIO#unrefine")," we can have more control to unrefine a ZIO effect that may die because of some defects, for example in the following example we are going to convert both ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Bar")," defects to recoverable errors and remain ",(0,a.kt)("inlineCode",{parentName:"p"},"Baz")," unrecoverable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'val unrefined: ZIO[Any, Throwable, String] =\n  effect("foo").unrefine {\n    case e: Foo => e\n    case e: Bar => e\n  }\n')),(0,a.kt)("h3",{id:"ziounrefinewith"},(0,a.kt)("inlineCode",{parentName:"h3"},"ZIO#unrefineWith")),(0,a.kt)("p",null,"This is the most powerful version of unrefine operators. It takes a partial function, as the previous operator, and then tries to broaden the failure space by converting some of the defects to typed recoverable errors. If it doesn't find any defect, it will apply the ",(0,a.kt)("inlineCode",{parentName:"p"},"f")," which is a function from ",(0,a.kt)("inlineCode",{parentName:"p"},"E")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"E1"),", and map all typed errors using this function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def unrefineWith[E1](pf: PartialFunction[Throwable, E1])(f: E => E1): ZIO[R, E1, A]\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  case class Foo(msg: String) extends Exception(msg)\n  case class Bar(msg: String) extends Exception(msg)\n\n  val effect: ZIO[Any, Foo, Nothing] =\n    ZIO.ifZIO(Random.nextBoolean)(\n      onTrue = ZIO.fail(Foo("Oh uh!")),\n      onFalse = ZIO.die(Bar("Boom!"))\n    )\n\n  val unrefined: ZIO[Any, String, Nothing] =\n    effect\n      .unrefineWith {\n        case e: Bar => e.getMessage\n      }(e => e.getMessage)\n\n  def run = unrefined.cause.debug\n}\n')))}c.isMDXComponent=!0}}]);