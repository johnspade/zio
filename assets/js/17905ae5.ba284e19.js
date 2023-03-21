"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[80197],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){u(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,u=function(e,n){if(null==e)return{};var t,a,u={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(u[t]=e[t]);return u}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(u[t]=e[t])}return u}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,u=e.mdxType,i=e.originalType,o=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=s(t),c=u,f=d["".concat(o,".").concat(c)]||d[c]||m[c]||i;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,u=n&&n.mdxType;if("string"==typeof e||u){var i=t.length,l=new Array(i);l[0]=c;var r={};for(var o in n)hasOwnProperty.call(n,o)&&(r[o]=n[o]);r.originalType=e,r[d]="string"==typeof e?e:u,l[1]=r;for(var s=2;s<i;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},10865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var a=t(87462),u=(t(67294),t(3905));const i={id:"queue",title:"Queue"},l=void 0,r={unversionedId:"datatypes/concurrency/queue",id:"version-1.x/datatypes/concurrency/queue",title:"Queue",description:"Queue is a lightweight in-memory queue built on ZIO with composable and transparent back-pressure. It is fully asynchronous (no locks or blocking), purely-functional and type-safe.",source:"@site/versioned_docs/version-1.x/datatypes/concurrency/queue.md",sourceDirName:"datatypes/concurrency",slug:"/datatypes/concurrency/queue",permalink:"/version-1.x/datatypes/concurrency/queue",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/concurrency/queue.md",tags:[],version:"1.x",frontMatter:{id:"queue",title:"Queue"},sidebar:"datatypes-sidebar",previous:{title:"Promise",permalink:"/version-1.x/datatypes/concurrency/promise"},next:{title:"Hub",permalink:"/version-1.x/datatypes/concurrency/hub"}},o={},s=[{value:"Creating a queue",id:"creating-a-queue",level:2},{value:"Adding items to a queue",id:"adding-items-to-a-queue",level:2},{value:"Consuming Items from a Queue",id:"consuming-items-from-a-queue",level:2},{value:"Shutting Down a Queue",id:"shutting-down-a-queue",level:2},{value:"Transforming queues",id:"transforming-queues",level:2},{value:"ZQueue#map",id:"zqueuemap",level:3},{value:"ZQueue#mapM",id:"zqueuemapm",level:3},{value:"ZQueue#contramapM",id:"zqueuecontramapm",level:3},{value:"ZQueue#bothWith",id:"zqueuebothwith",level:3},{value:"Additional Resources",id:"additional-resources",level:2}],p={toc:s},d="wrapper";function m(e){let{components:n,...t}=e;return(0,u.kt)(d,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("p",null,(0,u.kt)("inlineCode",{parentName:"p"},"Queue")," is a lightweight in-memory queue built on ZIO with composable and transparent back-pressure. It is fully asynchronous (no locks or blocking), purely-functional and type-safe."),(0,u.kt)("p",null,"A ",(0,u.kt)("inlineCode",{parentName:"p"},"Queue[A]")," contains values of type ",(0,u.kt)("inlineCode",{parentName:"p"},"A")," and has two basic operations: ",(0,u.kt)("inlineCode",{parentName:"p"},"offer"),", which places an ",(0,u.kt)("inlineCode",{parentName:"p"},"A")," in the ",(0,u.kt)("inlineCode",{parentName:"p"},"Queue"),", and ",(0,u.kt)("inlineCode",{parentName:"p"},"take")," which removes and returns the oldest value in the ",(0,u.kt)("inlineCode",{parentName:"p"},"Queue"),"."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nval res: UIO[Int] = for {\n  queue <- Queue.bounded[Int](100)\n  _ <- queue.offer(1)\n  v1 <- queue.take\n} yield v1\n")),(0,u.kt)("h2",{id:"creating-a-queue"},"Creating a queue"),(0,u.kt)("p",null,"A ",(0,u.kt)("inlineCode",{parentName:"p"},"Queue")," can be bounded (with a limited capacity) or unbounded."),(0,u.kt)("p",null,"There are several strategies to process new values when the queue is full:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"The default ",(0,u.kt)("inlineCode",{parentName:"li"},"bounded")," queue is back-pressured: when full, any offering fiber will be suspended until the queue is able to add the item;"),(0,u.kt)("li",{parentName:"ul"},"A ",(0,u.kt)("inlineCode",{parentName:"li"},"dropping")," queue will drop new items when the queue is full;"),(0,u.kt)("li",{parentName:"ul"},"A ",(0,u.kt)("inlineCode",{parentName:"li"},"sliding")," queue will drop old items when the queue is full.")),(0,u.kt)("p",null,"To create a back-pressured bounded queue:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val boundedQueue: UIO[Queue[Int]] = Queue.bounded[Int](100)\n")),(0,u.kt)("p",null,"To create a dropping queue:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val droppingQueue: UIO[Queue[Int]] = Queue.dropping[Int](100)\n")),(0,u.kt)("p",null,"To create a sliding queue:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val slidingQueue: UIO[Queue[Int]] = Queue.sliding[Int](100)\n")),(0,u.kt)("p",null,"To create an unbounded queue:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val unboundedQueue: UIO[Queue[Int]] = Queue.unbounded[Int]\n")),(0,u.kt)("h2",{id:"adding-items-to-a-queue"},"Adding items to a queue"),(0,u.kt)("p",null,"The simplest way to add a value to the queue is ",(0,u.kt)("inlineCode",{parentName:"p"},"offer"),":"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val res1: UIO[Unit] = for {\n  queue <- Queue.bounded[Int](100)\n  _ <- queue.offer(1)\n} yield ()\n")),(0,u.kt)("p",null,"When using a back-pressured queue, offer might suspend if the queue is full: you can use ",(0,u.kt)("inlineCode",{parentName:"p"},"fork")," to wait in a different fiber."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val res2: UIO[Unit] = for {\n  queue <- Queue.bounded[Int](1)\n  _ <- queue.offer(1)\n  f <- queue.offer(1).fork // will be suspended because the queue is full\n  _ <- queue.take\n  _ <- f.join\n} yield ()\n")),(0,u.kt)("p",null,"It is also possible to add multiple values at once with ",(0,u.kt)("inlineCode",{parentName:"p"},"offerAll"),":"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val res3: UIO[Unit] = for {\n  queue <- Queue.bounded[Int](100)\n  items = Range.inclusive(1, 10).toList\n  _ <- queue.offerAll(items)\n} yield ()\n")),(0,u.kt)("h2",{id:"consuming-items-from-a-queue"},"Consuming Items from a Queue"),(0,u.kt)("p",null,"The ",(0,u.kt)("inlineCode",{parentName:"p"},"take")," operation removes the oldest item from the queue and returns it. If the queue is empty, this will suspend, and resume only when an item has been added to the queue. As with ",(0,u.kt)("inlineCode",{parentName:"p"},"offer"),", you can use ",(0,u.kt)("inlineCode",{parentName:"p"},"fork")," to wait for the value in a different fiber."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},'val oldestItem: UIO[String] = for {\n  queue <- Queue.bounded[String](100)\n  f <- queue.take.fork // will be suspended because the queue is empty\n  _ <- queue.offer("something")\n  v <- f.join\n} yield v\n')),(0,u.kt)("p",null,"You can consume the first item with ",(0,u.kt)("inlineCode",{parentName:"p"},"poll"),". If the queue is empty you will get ",(0,u.kt)("inlineCode",{parentName:"p"},"None"),", otherwise the top item will be returned wrapped in ",(0,u.kt)("inlineCode",{parentName:"p"},"Some"),"."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val polled: UIO[Option[Int]] = for {\n  queue <- Queue.bounded[Int](100)\n  _ <- queue.offer(10)\n  _ <- queue.offer(20)\n  head <- queue.poll\n} yield head\n")),(0,u.kt)("p",null,"You can consume multiple items at once with ",(0,u.kt)("inlineCode",{parentName:"p"},"takeUpTo"),". If the queue doesn't have enough items to return, it will return all the items without waiting for more offers."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val taken: UIO[List[Int]] = for {\n  queue <- Queue.bounded[Int](100)\n  _ <- queue.offer(10)\n  _ <- queue.offer(20)\n  list  <- queue.takeUpTo(5)\n} yield list\n")),(0,u.kt)("p",null,"Similarly, you can get all items at once with ",(0,u.kt)("inlineCode",{parentName:"p"},"takeAll"),". It also returns without waiting (an empty list if the queue is empty)."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val all: UIO[List[Int]] = for {\n  queue <- Queue.bounded[Int](100)\n  _ <- queue.offer(10)\n  _ <- queue.offer(20)\n  list  <- queue.takeAll\n} yield list\n")),(0,u.kt)("h2",{id:"shutting-down-a-queue"},"Shutting Down a Queue"),(0,u.kt)("p",null,"It is possible with ",(0,u.kt)("inlineCode",{parentName:"p"},"shutdown")," to interrupt all the fibers that are suspended on ",(0,u.kt)("inlineCode",{parentName:"p"},"offer*")," or ",(0,u.kt)("inlineCode",{parentName:"p"},"take*"),". It will also empty the queue and make all future calls to ",(0,u.kt)("inlineCode",{parentName:"p"},"offer*")," and ",(0,u.kt)("inlineCode",{parentName:"p"},"take*")," terminate immediately."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val takeFromShutdownQueue: UIO[Unit] = for {\n  queue <- Queue.bounded[Int](3)\n  f <- queue.take.fork\n  _ <- queue.shutdown // will interrupt f\n  _ <- f.join // Will terminate\n} yield ()\n")),(0,u.kt)("p",null,"You can use ",(0,u.kt)("inlineCode",{parentName:"p"},"awaitShutdown")," to execute an effect when the queue is shut down. This will wait until the queue is shut down. If the queue is already shutdown, it will resume right away."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val awaitShutdown: UIO[Unit] = for {\n  queue <- Queue.bounded[Int](3)\n  p <- Promise.make[Nothing, Boolean]\n  f <- queue.awaitShutdown.fork\n  _ <- queue.shutdown\n  _ <- f.join\n} yield ()\n")),(0,u.kt)("h2",{id:"transforming-queues"},"Transforming queues"),(0,u.kt)("p",null,"A ",(0,u.kt)("inlineCode",{parentName:"p"},"Queue[A]")," is in fact a type alias for ",(0,u.kt)("inlineCode",{parentName:"p"},"ZQueue[Any, Any, Nothing, Nothing, A, A]"),".\nThe signature for the expanded version is:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZQueue[RA, RB, EA, EB, A, B]\n")),(0,u.kt)("p",null,"Which is to say:"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},"The queue may be offered values of type ",(0,u.kt)("inlineCode",{parentName:"li"},"A"),". The enqueueing operations require an environment of type ",(0,u.kt)("inlineCode",{parentName:"li"},"RA")," and may fail with errors of type ",(0,u.kt)("inlineCode",{parentName:"li"},"EA"),";"),(0,u.kt)("li",{parentName:"ul"},"The queue will yield values of type ",(0,u.kt)("inlineCode",{parentName:"li"},"B"),". The dequeueing operations require an environment of type ",(0,u.kt)("inlineCode",{parentName:"li"},"RB")," and may fail with errors of type ",(0,u.kt)("inlineCode",{parentName:"li"},"EB"),".")),(0,u.kt)("p",null,"Note how the basic ",(0,u.kt)("inlineCode",{parentName:"p"},"Queue[A]")," cannot fail or require any environment for any of its operations."),(0,u.kt)("p",null,"With separate type parameters for input and output, there are rich composition opportunities for queues:"),(0,u.kt)("h3",{id:"zqueuemap"},"ZQueue#map"),(0,u.kt)("p",null,"The output of the queue may be mapped:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val mapped: UIO[String] = \n  for {\n    queue  <- Queue.bounded[Int](3)\n    mapped = queue.map(_.toString)\n    _      <- mapped.offer(1)\n    s      <- mapped.take\n  } yield s\n")),(0,u.kt)("h3",{id:"zqueuemapm"},"ZQueue#mapM"),(0,u.kt)("p",null,"We may also use an effectful function to map the output. For example,\nwe could annotate each element with the timestamp at which it was dequeued:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"import java.util.concurrent.TimeUnit\nimport zio.clock._\n\nval currentTimeMillis = currentTime(TimeUnit.MILLISECONDS)\n\nval annotatedOut: UIO[ZQueue[Any, Clock, Nothing, Nothing, String, (Long, String)]] =\n  for {\n    queue <- Queue.bounded[String](3)\n    mapped = queue.mapM { el =>\n      currentTimeMillis.map((_, el))\n    }\n  } yield mapped\n")),(0,u.kt)("h3",{id:"zqueuecontramapm"},"ZQueue#contramapM"),(0,u.kt)("p",null,"Similarly to ",(0,u.kt)("inlineCode",{parentName:"p"},"mapM"),", we can also apply an effectful function to\nelements as they are enqueued. This queue will annotate the elements\nwith their enqueue timestamp:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val annotatedIn: UIO[ZQueue[Clock, Any, Nothing, Nothing, String, (Long, String)]] =\n  for {\n    queue <- Queue.bounded[(Long, String)](3)\n    mapped = queue.contramapM { el: String =>\n      currentTimeMillis.map((_, el))\n    }\n  } yield mapped\n")),(0,u.kt)("p",null,"This queue has the same type as the previous one, but the timestamp is\nattached to the elements when they are enqueued. This is reflected in\nthe type of the environment required by the queue for enqueueing."),(0,u.kt)("p",null,"To complete this example, we could combine this queue with ",(0,u.kt)("inlineCode",{parentName:"p"},"mapM")," to\ncompute the time that the elements stayed in the queue:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.duration._\n\nval timeQueued: UIO[ZQueue[Clock, Clock, Nothing, Nothing, String, (Duration, String)]] =\n  for {\n    queue <- Queue.bounded[(Long, String)](3)\n    enqueueTimestamps = queue.contramapM { el: String =>\n      currentTimeMillis.map((_, el))\n    }\n    durations = enqueueTimestamps.mapM { case (enqueueTs, el) =>\n      currentTimeMillis\n        .map(dequeueTs => ((dequeueTs - enqueueTs).millis, el))\n    }\n  } yield durations\n")),(0,u.kt)("h3",{id:"zqueuebothwith"},"ZQueue#bothWith"),(0,u.kt)("p",null,"We may also compose two queues together into a single queue that\nbroadcasts offers and takes from both of the queues:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-scala"},"val fromComposedQueues: UIO[(Int, String)] = \n  for {\n    q1       <- Queue.bounded[Int](3)\n    q2       <- Queue.bounded[Int](3)\n    q2Mapped =  q2.map(_.toString)\n    both     =  q1.bothWith(q2Mapped)((_, _))\n    _        <- both.offer(1)\n    iAndS    <- both.take\n    (i, s)   =  iAndS\n  } yield (i, s)\n")),(0,u.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://www.slideshare.net/jdegoes/zio-queue"},"ZIO Queue Talk by John De Goes @ ScalaWave 2018")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://www.slideshare.net/wiemzin/psug-zio-queue"},"ZIO Queue Talk by Wiem Zine El Abidine @ PSUG 2018")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://medium.com/@wiemzin/elevator-control-system-using-zio-c718ae423c58"},"Elevator Control System using ZIO")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("a",{parentName:"li",href:"https://blog.softwaremill.com/scalaz-8-io-vs-akka-typed-actors-vs-monix-part-1-5672657169e1"},"Scalaz 8 IO vs Akka (typed) actors vs Monix"))))}m.isMDXComponent=!0}}]);