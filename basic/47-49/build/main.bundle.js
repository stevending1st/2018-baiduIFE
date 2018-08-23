!function(e){var t={};function s(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=t,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=17)}([function(e,t,s){var r={"./chef.png":1,"./customer1.jpg":2,"./customer10.jpg":3,"./customer11.jpg":4,"./customer12.jpg":5,"./customer13.jpg":6,"./customer14.jpg":7,"./customer2.jpg":8,"./customer3.jpg":9,"./customer4.jpg":10,"./customer5.jpg":11,"./customer6.jpg":12,"./customer7.jpg":13,"./customer8.jpg":14,"./customer9.jpg":15,"./waiter.png":16};function a(e){var t=i(e);return s(t)}function i(e){var t=r[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=0},function(e,t,s){e.exports=s.p+"./images/chef.png"},function(e,t,s){e.exports=s.p+"./images/customer1.jpg"},function(e,t,s){e.exports=s.p+"./images/customer10.jpg"},function(e,t,s){e.exports=s.p+"./images/customer11.jpg"},function(e,t,s){e.exports=s.p+"./images/customer12.jpg"},function(e,t,s){e.exports=s.p+"./images/customer13.jpg"},function(e,t,s){e.exports=s.p+"./images/customer14.jpg"},function(e,t,s){e.exports=s.p+"./images/customer2.jpg"},function(e,t,s){e.exports=s.p+"./images/customer3.jpg"},function(e,t,s){e.exports=s.p+"./images/customer4.jpg"},function(e,t,s){e.exports=s.p+"./images/customer5.jpg"},function(e,t,s){e.exports=s.p+"./images/customer6.jpg"},function(e,t,s){e.exports=s.p+"./images/customer7.jpg"},function(e,t,s){e.exports=s.p+"./images/customer8.jpg"},function(e,t,s){e.exports=s.p+"./images/customer9.jpg"},function(e,t,s){e.exports=s.p+"./images/waiter.png"},function(e,t,s){"use strict";s.r(t);const r={waiter:{toTable:[[60.3,75]],toKitchen:[60.3,10]},customer:{initial:[-10,8],enter:[3.3,8],toSeat:[[46.5,88]],toExit:[100,88],toLine:[[3.3,88],[3.3,76],[3.3,64],[3.3,52],[3.3,40],[3.3,28]]},chef:{toKitchen:[73,10]}},a={customer:{enter:.5,toLine:[1.5,1.25,1,.75,.5,.25],toNext:.2,toSeat:[1],toExit:1,order:3,eat:3},waiter:{toKitchen:1.5,toTable:[1.5]},msgTime:1.5},i={waiter:{greet:"欢迎光临!",checkout:"一共收您",served:"亲，这是您的"},chef:{remind:"做好了！"},customer:{chat:["屏幕对面的你在干嘛？","下班吃饭，单身狗日常。","这家店的东西不错，但就是得排队！","今天你那边下雨了吗？","一一得一，一二得二，二二得三...","排队真烦"],order:["我要","我要吃","我点"]}};function n(e,t){let s=t-e;return e+Math.round(s*Math.random())}let o=n.bind(null,1e7,99999999);function u(e){let t=document.createElement("div");return t.innerHTML=e,t.children[0]}class c{constructor(e,t){this.timeScale=t,this.$container=document.querySelector(e),this.$cashNum=this.$container.querySelector(".cash-bar .count"),this.$cookList=this.$container.querySelector(".kitchen .cookList ul"),this.$cookState=this.$container.querySelector(".kitchen .state"),this.$orderedList=this.$container.querySelector(".table .list"),this.$customerCt=this.$container.querySelector(".man .customers"),this.$employeeCt=this.$container.querySelector(".man .employees");let s=getComputedStyle(this.$container).width,a=getComputedStyle(this.$container).height;!function(e,t,s){t=parseFloat(t),s=parseFloat(s),function e(r){if(Array.isArray(r))!function e(r){r.forEach((a,i)=>{Array.isArray(a)?e(a):"number"==typeof a&&(0===i?r[i]=t*a/100:1===i&&(r[i]=s*a/100))})}(r);else for(let t in r)r.hasOwnProperty(t)&&e(r[t])}(e)}(r,s,a),this.initialCookState()}setCash(e){this.$cashNum&&(this.$cashNum.innerText=e)}initialCookState(){this.$cookState.innerHTML='<span class="thing">空闲</span><span class="time"></span>'}addCustomer(e){let[t,s]=r.customer.initial,a=u(`<div class="customer" style="background-image: url(${e.avatarUrl}); left: ${t}px; top: ${s}px;"></div>`);e.element=a,this.$customerCt.appendChild(a)}moveToQueue(e,t){let s=this;return new Promise((t,i)=>{let n=a.customer.enter*s.timeScale,o=r.customer.enter;l(e.element,o,n,t)}).then(()=>{let n=t.getQueue().indexOf(e);if(-1!==n){let t=a.customer.toLine[n]*s.timeScale,i=r.customer.toLine[n];return new Promise((s,r)=>{l(e.element,i,t,s)})}{let t=a.customer.enter*s.timeScale,n=r.customer.initial;l(e.element,n,t,i)}});function i(t){let r=s.$customerCt.children;-1!==Array.from(r).indexOf(e.element)&&s.$customerCt.removeChild(e.element)}}addWord(e,t){let s=a.msgTime*this.timeScale;!function(e,t,s){let r=new Date;e.style.zIndex=1,requestAnimationFrame(function a(){let i=new Date-r;e.innerHTML=`<div class="msg">${t}</div>`,i<s?requestAnimationFrame(a):(e.innerHTML="",e.style.zIndex=0)})}(e,t=t.trim(),s)}orderFood(e){let t=a.customer.order*this.timeScale;return new Promise((s,r)=>{setTimeout(()=>{s(e.element)},t)})}addWaiter(e){let[t,s]=r.waiter.toTable[0],a=u(`<div class="waiter" style="background-image: url(${e.avatarUrl}); left: ${t}px; top: ${s}px;"></div>`);e.element=a,this.$employeeCt.appendChild(a)}addChef(e){let[t,s]=r.chef.toKitchen,a=u(`<div class="chef" style="background-image: url(${e.avatarUrl}); left: ${t}px; top: ${s}px;"></div>`);e.element=a,this.$employeeCt.appendChild(a)}updateCookList(e){this.$cookList.innerHTML="";let t=e.reduce((e,t)=>e+`<li>${t.name}</li>`,"");this.$cookList.innerHTML=t}moveToSeat(e,t){let s=this.timeScale*a.customer.toSeat[t],i=r.customer.toSeat[t];return new Promise((t,r)=>{l(e,i,s,t)})}moveToKitchen(e){if("kitchen"===e.position)return Promise.resolve();{let t=this.timeScale,s=a.waiter.toKitchen*t,i=r.waiter.toKitchen;return new Promise((t,r)=>{let a=function(t,s){e.position=s,t()}.bind(this,t,"kitchen");l(e.element,i,s,a)})}}moveToTable(e,t){let s="table"+t;if(s===e.position)return Promise.resolve();{let i=this.timeScale,n=a.waiter.toTable[t]*i,o=r.waiter.toTable[t];return new Promise((t,r)=>{let a=function(t,s){e.position=s,t()}.bind(this,t,s);l(e.element,o,n,a)})}}moveToExit(e){let t=this,s=this.timeScale,i=a.customer.toExit*s,n=r.customer.toExit;new Promise((t,s)=>{l(e.element,n,i,t)}).then(()=>{let s=t.$customerCt.children,r=Array.from(s).indexOf(e.element);-1!==r&&t.$customerCt.removeChild(s[r])})}updateQueue(e){let t=this.timeScale;!function s(i){let n=e.getQueue();let o=n[i];new Promise((u,c)=>{let m=a.customer.toNext,h=m*t,d=r.customer.toLine[i];function p(){n[i+1]&&s(i+1),u()}l(o.element,d,h,function p(){n[i+1]&&function s(i){let n=e.getQueue();let o=n[i];new Promise((e,u)=>{let c=a.customer.toNext,m=c*t,h=r.customer.toLine[i];function d(){n[i+1]&&s(i+1),e()}l(o.element,h,m,d)})}(i+1);u()})})}(0)}updataOrdered(e){let t=e.reduce((e,t)=>"serving"===t.state?e+`<li class="serving"><span>${t.name}</span><i>正在做</i></li>`:"served"===t.state?e+`<li class="served"><span>${t.name}</span><i>已上菜</i></li>`:"eated"===t.state?e+`<li class="eated"><span>${t.name}</span><i>已吃完</i></li>`:void 0,"");this.$orderedList.innerHTML=t}removeOrderedList(){this.$orderedList.innerHTML=""}updateCookState(e){let t=this.$cookState,s=e.cookTime*this.timeScale;return new Promise((r,a)=>{!function(r){let a=new Date;requestAnimationFrame(function i(){let n=new Date,o=n-a,u=`<span class="thing">正在做：${e.name}</span><span class="time">${function(e){let t=[Math.floor(e/1e3/60%60),Math.floor(e/1e3%60)];return(t=t.reduce((e,t)=>(t<0&&(t=0),1===(t=t.toString()).length&&(t="0"+t),e.push(t),e),[])).join(":")}(s-o)}</span>`;t.innerHTML=u,o<s?requestAnimationFrame(i):r()})}(r)})}eating(e){let t=a.customer.eat*this.timeScale;return new Promise((e,s)=>{setTimeout(()=>{e()},t)})}}function l(e,t,s,r){let a=new Date,i=parseFloat(getComputedStyle(e).left),n=parseFloat(getComputedStyle(e).top),o=t[0]-i,u=t[1]-n;return requestAnimationFrame(function t(){let c=(new Date-a)/s,l=i+o*c,m=n+u*c;e.style.left=l+"px",e.style.top=m+"px",c<1?requestAnimationFrame(t):r&&r()})}class m{constructor({name:e,salary:t,avatarUrl:s}){this.name=e,this.salary=t,this.avatarUrl=s,this.taskStack=[],this.state="waiting"}entry(e){this.restaurant=e,this.$restaurantView=e.$view}quit(){this.restaurant=null,this.$restaurantView=null}waiting(){this.state="waiting"}working(){this.state="working"}addTask(e,...t){"cook"===e&&Array.isArray(t[0])?t[0].forEach(t=>{this.taskStack.push([e,[t]])}):this.taskStack.push([e,t]),this.do()}do(){}}class h extends m{constructor(e){super(e),this.id=o(),this.position="table0"}say(e,...t){let s,r=this.$restaurantView;"greet"===e?s=i.waiter.greet:"served"===e?s=i.waiter.served+t[0]:"getmoney"===e&&(s=i.waiter.checkout+t[0]),s&&r.addWord(this.element,s)}deliverMenu(e){let t=this,s=t.restaurant,r=t.$restaurantView,a=s.seats.getTableIndex(e);return r.moveToTable(t,a).then(()=>r.moveToKitchen(t).then(()=>(s.emit("delivered",e.ordered),r.moveToTable(t,a))))}serveFood(e){let t=this,s=t.restaurant,r=e.customer,a=t.$restaurantView;return a.moveToKitchen(t).then(()=>{let i=s.seats.getTableIndex(r);return a.moveToTable(t,i).then(()=>(e.served(),a.updataOrdered(r.ordered),e))})}checkout(e){let t=this.restaurant,s=e.ordered.reduce((e,t)=>e+=t.sale,0);this.say("getmoney",s),t.cash.increase(s)}do(){let e=this,t=e.restaurant;if("waiting"===e.state&&e.taskStack.length>0){e.working();let[s,r]=e.taskStack.shift();"greet"===s?(e.say(s),e.waiting(),e.do()):"delivermenu"===s?e.deliverMenu(...r).then(()=>{e.waiting(),e.do()}):"serve"===s?e.serveFood(...r).then(s=>{e.say("served",s.name),e.waiting(),t.emit("served",s),e.do()}):"checkout"===s&&(e.checkout(...r),e.waiting(),t.emit("checkout",...r),e.do())}}}class d extends m{constructor(e){super(e),this.id=o()}cook(e){let t=this,s=t.$restaurantView,r=t.taskStack.reduce((e,t)=>("cook"===t[0]&&e.push(t[1][0]),e),[]);return s.updateCookList(r),s.updateCookState(e).then(()=>{let r=e.name+i.chef.remind;return s.addWord(t.element,r),e})}do(){let e=this,t=e.restaurant;if("waiting"===e.state&&e.taskStack.length>0){e.working();let[s,r]=e.taskStack.shift();"cook"===s&&e.cook(...r).then(s=>{e.waiting(),e.$restaurantView.initialCookState(),t.emit("cooked",s),e.do()})}}}const[p,g,f]=[0,1,2];let w;class k{constructor({name:e,cost:t,sale:s,time:r}){this.name=e,this.cost=t,this.sale=s,this.cookTime=n(1,10),this.customer,this.state="serving"}serving(){this.state="serving"}served(){this.state="served"}eated(){this.state="eated"}}s(18);var v=s(0);v.keys().map(v);const y=[{name:"鱼香肉丝",cost:15,sale:30},{name:"红烧排骨",cost:25,sale:50},{name:"宫保鸡丁",cost:20,sale:40},{name:"烧鸭",cost:20,sale:40},{name:"白切鸡",cost:20,sale:40},{name:"番茄炒鸡蛋",cost:10,sale:20},{name:"番茄鸡蛋汤",cost:10,sale:20},{name:"水煮鱼",cost:25,sale:50},{name:"清蒸金枪鱼",cost:25,sale:50},{name:"卤猪脚",cost:20,sale:40},{name:"苦瓜炒鸡蛋",cost:10,sale:20},{name:"炒芥兰",cost:10,sale:20},{name:"炒空心菜",cost:10,sale:20},{name:"香菇炒鸡肉",cost:20,sale:40},{name:"卤鸭",cost:20,sale:40},{name:"红萝卜炒肉",cost:15,sale:30},{name:"紫菜肉沫汤",cost:15,sale:30},{name:"红烧牛肉",cost:25,sale:50}];let S=["./images/customer1.jpg","./images/customer2.jpg","./images/customer3.jpg","./images/customer4.jpg","./images/customer5.jpg","./images/customer6.jpg","./images/customer7.jpg","./images/customer8.jpg","./images/customer9.jpg","./images/customer10.jpg","./images/customer11.jpg","./images/customer12.jpg","./images/customer13.jpg","./images/customer14.jpg"],T=new class{constructor({cash:e,seatAmount:t,timeScale:s,elementId:r}){this.$view=w=new c(r,s),this.handler=[],this.timeScale=s,this.state=p,this.cash=function(e){return w.setCash(e),{getBalance:()=>e,increase:t=>{if("number"==typeof t)return e+=t,w.setCash(e),e},decrease:t=>{if("number"==typeof t)return e-=t,w.setCash(e),e}}}(e),this.queue=function(e){let t=Array.from({length:e}).map(e=>null);return{queueUp:e=>{let s=t.indexOf(null);return-1!==s?(t[s]=e,s):s},dequeue:()=>{let e=t.shift();return t[t.length]=null,e},getLength:()=>t.filter(e=>null!==e).length,getQueue:()=>t}}(6),this.menu=function(){let e=[];return{addFood(t){t.constructor===k&&e.push(t)},getMenu:()=>e.concat()}}(),this.staff=function(e){let t=[];return{hire:s=>{let r;t.length>0&&(r=t.find(e=>e.constructor===s.constructor)),r||(s.entry(e),t.push(s),s.constructor===h?w.addWaiter(s):s.constructor===d&&w.addChef(s))},fire:e=>{t.length>0&&t.forEach((s,r)=>{s===e&&(e.quit(),t.splice(r,1))})},getStaff:()=>t.concat(),getChef:()=>t.find(e=>e.constructor===d),getWaiter:()=>t.find(e=>e.constructor===h)}}(this),this.seats=function(e){let t=Array.from({length:e}).map(e=>null);return{sit:(e,s)=>{t[e]=s},leave:e=>{t[e]=null},getEmptySeatIndex:()=>t.indexOf(null),getTableIndex:e=>t.indexOf(e)}}(t),this.addListener(),this.emit("becreated",this)}addTask(e,...t){let s=this.staff.getWaiter(),r=this.staff.getChef();"greet"===e?s.addTask(e,...t):"delivermenu"===e?s.addTask(e,...t):"cook"===e?r.addTask(e,...t):"serve"===e?s.addTask(e,...t):"checkout"===e&&s.addTask(e,...t)}addListener(){let e=this;this.watch("queueup",()=>{let t=e.seats.getEmptySeatIndex();-1!==t&&this.emit("hasemptyseat",t)}),this.watch("hasemptyseat",t=>{if(e.queue.getLength()>0){let t=e.queue.dequeue(),s=e.seats.getEmptySeatIndex();e.seats.sit(s,t),t.addTask("toseat",s)}}),this.watch("sitin",t=>{t.addTask("order"),e.addTask("greet")}),this.watch("ordered",t=>{e.addTask("delivermenu",t)}),this.watch("delivered",t=>{e.addTask("cook",t)}),this.watch("cooked",t=>{e.addTask("serve",t)}),this.watch("served",e=>{e.customer.addTask("eat",e)}),this.watch("eaten",t=>{let s=t.ordered,r=s.find(e=>"served"===e.state),a=s.find(e=>"serving"===e.state);r||a||e.emit("eatenfoods",t)}),this.watch("eatenfoods",t=>{e.addTask("checkout",t)}),this.watch("checkout",e=>{e.addTask("leave")}),this.watch("left",t=>{let s=e.seats.getEmptySeatIndex();-1!==s&&e.emit("hasemptyseat",s)})}addCustomer(e){w.addCustomer(e),e.addTask("queueup",this)}watch(e,t){this.handler[e]||(this.handler[e]=[]),this.handler[e].push(t)}emit(e,t){this.handler[e]&&this.handler[e].forEach(e=>e(t))}start(){let e=this.staff.getChef(),t=this.staff.getWaiter(),s=this.menu.getMenu();return e?t?0===s.length?new Error("The restaurant did not have food menu!"):void(this.state!==g&&(this.state=g,-1!==this.seats.getEmptySeatIndex()&&this.emit("hasemptyseat"))):new Error("The restaurant did not hire the waiter!"):new Error("The restaurant did not hire the chef!")}}({cash:1e4,seatAmount:1,timeScale:1e3,elementId:".container"}),$=new h({name:"Hinako",salary:3e3,avatarUrl:"./images/waiter.png"}),x=new d({name:"Alice",salary:1e4,avatarUrl:"./images/chef.png"});for(let e=0;e<y.length;e++){new k(y[e])}y.forEach(e=>{let t=new k(e);T.menu.addFood(t)}),T.staff.hire(x),T.staff.hire($),T.start();let j,b=0;j=n(3e3,8e3);setInterval(()=>{let e=new class{constructor(e){this.id=o(),this.ordered=[],this.taskStack=[],this.avatarUrl=e,this.state="waiting"}say(e,...t){let s,r=this.$restaurantView;if("order"===e){let e=i.customer.order,r=n(0,e.length-1);e[r]&&(s=e[r]+t[0])}else if("chat"===e){let e=i.customer.chat;s=e[n(0,e.length-1)]}s&&r.addWord(this.element,s)}randomSpeak(){let e=this.restaurant.queue,t=n(0,e.getLength()),s=e.getQueue()[t];s&&s.say("chat")}queueUp(e){let t=this;this.restaurant=e;let s=this.$restaurantView=e.$view;return new Promise((r,a)=>{e.queue.queueUp(t),s.moveToQueue(t,e.queue).then(()=>{t.randomSpeak(),r()})})}toSeat(e){let t=this,s=this.$restaurantView,r=t.restaurant;return new Promise((a,i)=>{r.queue.getLength()>0&&s.updateQueue(r.queue),s.moveToSeat(t.element,e).then(()=>{a(t)})})}leave(){let e=this.$restaurantView,t=this.restaurant,s=t.seats.getTableIndex(this);e.removeOrderedList(),t.seats.leave(s),e.moveToExit(this)}order(){let e=this,t=this.$restaurantView,s=e.restaurant.menu.getMenu();return new Promise((r,a)=>{let i=n(1,4);for(let t=0;t<i;t++){let r=n(0,s.length-1),a=s[r];if(e.ordered.some(e=>e.name===a.name))t-=1;else{let t=o(a);t.customer=e,e.ordered.push(t)}}function o(e){let t=Object.getPrototypeOf(e);return Object.assign(Object.create(t),e)}t.orderFood(e).then(()=>{let s=e.ordered.map(e=>e.name);e.say("order",s.join("，")),t.updataOrdered(e.ordered),r(e)})})}eat(e){let t=this,s=this.$restaurantView;return new Promise((r,a)=>{s.eating(t).then(()=>{e.eated(),s.updataOrdered(t.ordered),r(e)})})}working(){this.state="working"}waiting(){this.state="waiting"}addTask(e,...t){this.taskStack.push([e,t]),this.do()}do(){let e=this;if("waiting"===e.state&&e.taskStack.length>0){e.working();let[t,s]=e.taskStack.shift();if("queueup"===t)e.queueUp(...s).then(()=>{e.waiting(),e.restaurant.emit("queueup"),e.do()});else{if("toseat"===t)return e.toSeat(...s).then(e=>{e.waiting(),e.restaurant.emit("sitin",e),e.do()});if("order"===t)return e.order(...s).then(e=>{e.waiting(),e.restaurant.emit("ordered",e),e.do()});if("eat"===t)return e.eat(...s).then(t=>{e.waiting(),e.restaurant.emit("eaten",e),e.do()});"leave"===t&&(e.leave(...s),e.restaurant.emit("left",e))}}}}(S[b%=S.length]);T.addCustomer(e),b+=1,j=n(3e3,8e3)},j)},function(e,t){}]);