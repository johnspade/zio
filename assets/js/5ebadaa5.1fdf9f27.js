"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2297],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2769:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],s={id:"usecases_scheduling",title:"Scheduling"},l=void 0,c={unversionedId:"usecases/usecases_scheduling",id:"usecases/usecases_scheduling",title:"Scheduling",description:"For scenarios where an action needs to be performed multiple times, Schedule can be used to customize the:",source:"@site/docs/usecases/scheduling.md",sourceDirName:"usecases",slug:"/usecases/usecases_scheduling",permalink:"/next/usecases/usecases_scheduling",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/usecases/scheduling.md",tags:[],version:"current",frontMatter:{id:"usecases_scheduling",title:"Scheduling"},sidebar:"usecases-sidebar",previous:{title:"Retrying",permalink:"/next/usecases/usecases_retrying"},next:{title:"Streaming",permalink:"/next/usecases/usecases_streaming"}},u=[{value:"Retry strategy for HTTP requests",id:"retry-strategy-for-http-requests",children:[],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"For scenarios where an action needs to be performed multiple times, ",(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," can be used to customize the:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"number of repetitions"),(0,o.kt)("li",{parentName:"ul"},"rate of repetition"),(0,o.kt)("li",{parentName:"ul"},"effect performed on each repetition")),(0,o.kt)("h2",{id:"retry-strategy-for-http-requests"},"Retry strategy for HTTP requests"),(0,o.kt)("p",null,"One potential issue when dealing with a 3rd party API is the unreliability of a given endpoint. Since you have no control over the software, you cannot directly improve the reliability. Here's a mock request that has approximately a 70% chance of succeeding:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.Task\nimport java.util.Random\n\nobject API {\n  def makeRequest = Task.attempt {\n    if (new Random().nextInt(10) < 7) "some value" else throw new Exception("hi")\n  }\n}\n')),(0,o.kt)("p",null,"One solution to improve reliability is to retry the request until success. There are many considerations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"What should the maximum number of attempts be?"),(0,o.kt)("li",{parentName:"ul"},"How often should you make the request?"),(0,o.kt)("li",{parentName:"ul"},"Do you want to log attempts?")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Schedule")," can be used to address all of these concerns."),(0,o.kt)("p",null,"If you don't want to retry the request forever, create a schedule that specifies max number of attempts."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.Schedule\n\nSchedule.recurs(4)\n")),(0,o.kt)("p",null,"The above schedule retries immediately after failing.\nTypically, you will want to space out your requests a bit to give the endpoint a chance to stabilize.\nThere are many rates which you can use such as ",(0,o.kt)("inlineCode",{parentName:"p"},"spaced"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"exponential"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fibonacci"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"forever"),". For simplicity, we will retry the request every second."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.durationInt\nimport zio.Schedule\n\nSchedule.spaced(1.second)\n")),(0,o.kt)("p",null,"You can compose the schedules using operators to create a more complex schedule:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.Schedule\n\ndef schedule = Schedule.recurs(4) && Schedule.spaced(1.second)\n")),(0,o.kt)("p",null,"For monitoring purposes, you may also want to log attempts. While this logic can be placed in the request itself, it's more scalable to add that logic to the schedule so it can be reused."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio.Console.printLine\nimport zio.Schedule\nimport zio.Schedule.Decision\n\nobject ScheduleUtil {\n  def schedule[A] = Schedule.spaced(1.second) && Schedule.recurs(4).onDecision({\n    case (_, _, Decision.Done)              => printLine(s"done trying").orDie\n    case (_, attempt, Decision.Continue(_)) => printLine(s"attempt #$attempt").orDie\n  })\n}\n')),(0,o.kt)("p",null,"You've now created a retry strategy that will attempt an effect every second for a maximum of 5 attempts while logging each attempt. The usage of the schedule would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.Console._\nimport API._\n\nobject ScheduleApp extends scala.App {\n  implicit val rt: Runtime[Any] = Runtime.default\n\n  rt.unsafeRun(makeRequest.retry(ScheduleUtil.schedule).foldZIO(\n    ex => printLine("Exception Failed"),\n    v => printLine(s"Succeeded with $v"))\n  )\n}\n')),(0,o.kt)("p",null,"The output of the above program where the request succeeds in time could be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"attempt #1\nattempt #2\nattempt #3\nSucceeded with some value\n")),(0,o.kt)("p",null,"If the server is completely down with no chance of the request succeeding, the output would look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"attempt #1\nattempt #2\nattempt #3\nattempt #4\nException Failed\n")))}d.isMDXComponent=!0}}]);