!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);var i=[{product:"手机",region:"华东",sale:[120,100,140,160,180,185,190,210,230,245,255,270]},{product:"手机",region:"华北",sale:[80,70,90,110,130,145,150,160,170,185,190,200]},{product:"手机",region:"华南",sale:[220,200,240,250,260,270,280,295,310,335,355,380]},{product:"笔记本",region:"华东",sale:[50,60,80,110,30,20,70,30,420,30,20,20]},{product:"笔记本",region:"华北",sale:[30,35,50,70,20,15,30,50,710,130,20,20]},{product:"笔记本",region:"华南",sale:[80,120,130,140,70,75,120,90,550,120,110,100]},{product:"智能音箱",region:"华东",sale:[10,30,4,5,6,5,4,5,6,5,5,25]},{product:"智能音箱",region:"华北",sale:[15,50,15,15,12,11,11,12,12,14,12,40]},{product:"智能音箱",region:"华南",sale:[10,40,10,6,5,6,8,6,6,6,7,26]}];const r={region:"地区",product:"商品"},a=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];class o{constructor(t){let e=localStorage.getItem("dataModel");e?this.data=JSON.parse(e):(localStorage.setItem("dataModel",t),this.data=JSON.parse(t))}getOptionsData(){return this.optsObj=this.data.reduce((t,e)=>{for(let n in e)e.hasOwnProperty(n)&&(t.hasOwnProperty(n)?-1===t[n].options.indexOf(e[n])&&t[n].options.push(e[n]):"sale"!==n&&(t[n]={},t[n].options=[e[n]],t[n].title=r[n]?r[n]:""));return t},{}),this.optsObj}searchData(t){let e=this;for(let e in t)if(t.hasOwnProperty(e)&&0===t[e].length)return;return 1===t.region.length?n([e.data,t,["region","product"]]):n([e.data,t,["product","region"]]);function n([t,e,n]){let i={};return i.title=n.reduce((t,e)=>(t.push(r[e]?r[e]:e),t),[]).concat(a),i.body=[],function t({orderIdx:i=0,ctArr:r,data:a}){e[n[i]].forEach(e=>{let o={name:n[i],val:e};if(i===n.length-1){let t=a.find(t=>t[n[i]]===e);o.sale=t.sale,r.push(o)}else{o.options=[],r.push(o);let s=a.filter(t=>t[n[i]]===e);t({orderIdx:i+1,ctArr:o.options,data:s})}})}({ctArr:i.body,data:t}),i}}updateData(t){t.category.reduce((e,n,i)=>{let a;for(let t in r)r.hasOwnProperty(t)&&r[t]===n[0]&&(a=t);if(i!==t.category.length-1)return e.filter(t=>t[a]===n[1]);e.find(t=>t[a]===n[1]).sale=t.chunk.concat()},this.data),localStorage.setItem("dataModel",JSON.stringify(this.data))}}const s={title:"title",checkAll:"check-all",checkAllChosen:"check-all_chosen",option:"option",optionChosen:"option_chosen"};class l{constructor(t){this.$container=document.querySelector(t),this.addEventListener(),this.handler=[]}render(t){this.optsObj=t;for(let n in t)t.hasOwnProperty(n)&&(this.$container.innerHTML+=e(t,n));function e(t,e){return`<div class="${e}">\n\t\t\t\t<p class="${s.title}">${t[e].title}</p>\n\t\t\t\t<a href="javascript:;" class="${s.checkAll}" data-class-trigger="${s.checkAllChosen}">全选</a>\n\t\t\t\t${function(t){return t.reduce((t,e)=>t+`<a href="javascript:;" class="${s.option}" data-class-trigger="${s.optionChosen}">${e}</a>`,"")}(t[e].options)}\n\t\t\t</div>`}}addEventListener(){let t=this;this.$container.addEventListener("click",e=>{let n=e.target;if("A"===n.tagName){let e=n.parentNode,i=n.className;if(-1!==i.indexOf(s.checkAll)){if(i===s.checkAll){let i=e.querySelectorAll("."+s.option);t.triggerButton(n),Array.from(i).forEach(e=>{t.triggerButton(e)}),t.emit("changed",t)}}else if(i===s.optionChosen){let i=e.querySelector("."+s.checkAllChosen);if(1===e.querySelectorAll("."+s.optionChosen).length)return;t.triggerButton(n),i&&t.triggerButton(i),t.emit("changed",t)}else{t.triggerButton(n);let i=e.querySelectorAll("."+s.option),r=e.querySelector("."+s.checkAll);0===i.length&&t.triggerButton(r),t.emit("changed",t)}}})}triggerButton(t){let e=t.dataset.classTrigger;t.dataset.classTrigger=t.className,t.className=e}selectOptions(t,e){let n=this;t.split("&").forEach(t=>{let[e,i]=t.split("="),r=n.$container.querySelector("."+e);if(Array.from(r.children).forEach(t=>{let e=t.innerText.trim();-1!==i.indexOf(e)?t.className===s.option&&n.triggerButton(t):t.className===s.optionChosen&&n.triggerButton(t)}),r.querySelector("."+s.option)){let t=r.querySelector("."+s.checkAllChosen);t&&n.triggerButton(t)}else{let t=r.querySelector("."+s.checkAll);t&&n.triggerButton(t)}}),n.emit("changed",n,e)}getChosenOptionsData(){let t=this.$container.querySelectorAll("div");return Array.from(t).reduce((t,e)=>{let n=e.querySelectorAll("."+s.optionChosen),i=Array.from(n).reduce((t,e)=>(t.push(e.innerText.trim()),t),[]);return t[e.className]=i,t},{})}watch(t,...e){this.handler[t]||(this.handler[t]=[]),this.handler[t].push(...e)}emit(t,...e){this.handler[t]&&this.handler[t].forEach(t=>t(...e))}}class c{constructor(t){this.$container=document.querySelector(t),this.$tips=this.$container.querySelector(".tips"),this.$content=this.$container.querySelector(".wrapper"),this.$tips.innerText="请输入纯数字!!",this.$content.innerHTML="选项不足!",this.handler=[]}render(t){t?(this.$content.innerHTML=`<table>\n        <thead><tr>${function(t){return t.reduce((t,e)=>t+`<th>${e}</th>`,"")}(t.title)}</tr></thead>\n        <tbody>${function(t){return function t({data:e,root:n,head:i}){if(e instanceof Array)return e.reduce((e,r,a)=>e+t({data:r,head:i=!!n||0!==a}),"");if(i){if(e.options instanceof Array)return`<tr><th rowspan="${e.options.length}">${e.val}</th>${t({data:e.options})}</tr>`;if(e.sale instanceof Array)return`<tr><th>${e.val}</th>${e.sale.reduce((t,e)=>`${t}<td><span contentEditable='true'>${e}</span><i class="edit">编辑</i><i class="finish">完成</i></td>`,"")}</tr>`}else{if(e.options instanceof Array)return`<th rowspan="${e.options.length}">${e.val}</th>${t({data:e.options})}`;if(e.sale instanceof Array)return`<th>${e.val}</th>${e.sale.reduce((t,e)=>`${t}<td><span contentEditable='true'>${e}</span><i class="edit">编辑</i><i class="finish">完成</i></td>`,"")}`}}({data:t,root:!0})}(t.body)}</tbody>\n      </table>`,this.$table=this.$content.querySelector("table"),this.emit("rendered",this),this.addEventListener()):this.$content.innerHTML="选项不足!"}addEventListener(){let t,e=this,n=/^[1-9][0-9]*$/;this.$table.addEventListener("mouseover",t=>{e.emit("mouseover",t,e)}),this.$table.addEventListener("mouseout",t=>{e.emit("mouseout",t,e)}),this.$table.addEventListener("click",t=>{if("I"===t.target.tagName){let e=t.target,n=e.parentNode.querySelector("span");e.classList.contains("edit")?n.focus():e.classList.contains("finish_show")&&n.blur()}}),this.$table.addEventListener("focus",e=>{let n=e.target,i=n.parentNode.querySelector("i.finish");i&&(i.classList.remove("finish"),i.classList.add("finish_show")),t=n.innerText.trim()},!0),this.$table.addEventListener("blur",i=>{let r=i.target,a=r.innerText.trim();if(n.test(a)){let n=i.target.parentNode.querySelector("i.finish_show");if(n&&(n.classList.remove("finish_show"),n.classList.add("finish")),t!==r.innerText.trim()){let t=function t(e,n){if(e){if(e.tagName!==n){let i=e.parentNode;return t(i,n)}return e}}(i.target,"TR"),n=e.getRowData(t);e.emit("changed",n,e)}}else r.focus(),this.showTips(3e3)},!0),this.$table.addEventListener("keydown",t=>{if("Enter"===t.key||"Escape"===t.key){t.target.blur(),t.preventDefault()}})}watch(t,...e){this.handler[t]||(this.handler[t]=[]),this.handler[t].push(...e)}emit(t,...e){this.handler[t]&&this.handler[t].forEach(t=>t(...e))}getRowData(t){let e=this,n=t.querySelectorAll("td"),i=function(t){if(t.length)return Array.from(t).reduce((t,e)=>{let n=Number.parseFloat(e.innerText.trim());return t.push(Number.isNaN(n)?0:n),t},[])}(n),r={category:function(t,n){let i=e.$table.querySelectorAll("thead th"),r=i.length,a=t.querySelectorAll("td").length;return function t(e,n,a=[]){let o=e.children.length;if(o>n){let t=o-n;for(let n=1;n<=t;n++)a.unshift(e.children[t-n].innerText.trim())}return r===o?a.reduce((t,e,n)=>{let r=i[n].innerText.trim();return t.push([r,e]),t},[]):t(e.previousElementSibling,o,a)}(t,a)}(t,n.length),chunk:i};return r}getTableData(){let t=this.$table.querySelectorAll("tbody tr");return Array.from(t).map(t=>this.getRowData(t),this)}showTips(t=5e3){let e=this.$tips,n=new Date;return requestAnimationFrame(function i(){let r=1-(new Date-n)/t;"block"!==e.style.display&&(e.style.display="block"),e.style.opacity=r,r<=0?e.style.display="none":requestAnimationFrame(i)})}}let h={axis:{basePoint:[100,350],x:{line:{},text:{}},y:{line:{length:250,partCount:5,distribut:"endpoint"},text:{}}},bar:{width:40},category:{basePoint:[650,40]}};const u=[5,10,20,50,100,200,300];class d{constructor(t,e){this.$container=document.querySelector(t),h=Object.assign(h,e)}render(t){this.evaluat(t),this.$container.innerHTML=`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">\n      ${this.generateAxis(t)}\n      ${this.generateBar(t)}\n      ${this.generateCategory(t)}\n    </svg`}evaluat(t){!function(t){let e=t.chunk.concat().sort((t,e)=>e-t)[0],n=h.axis.y.line.partCount,i=h.axis.y.line.length,r=e/n,a=u.find(t=>r<=t);h.axis.y.line.partScaleLength=a,h.bar.scale=i/n/a}(t),function(t){h.axis.x.line.partCount=t.chunk.length+1,h.axis.x.line.partLength=h.bar.width+10,h.axis.x.line.length=h.axis.x.line.partCount*h.axis.x.line.partLength}(t),function(t){let e={length:t.chunk.length},n=h.axis.x.line.partLength;if(h.axis.x.line.markPoint=Array.from(e).map((t,e)=>[h.axis.basePoint[0]+(e+1)*n,h.axis.basePoint[1]]),"endpoint"===h.axis.y.line.distribut){let t=h.axis.y.line.partCount+1,e={length:t},n=h.axis.y.line.length/h.axis.y.line.partCount;h.axis.y.line.markPoint=Array.from(e).map((t,e)=>{let i=h.axis.basePoint[1]-n*e;return[h.axis.basePoint[0],i]})}}(t),"endpoint"===h.axis.y.line.distribut&&(h.axis.y.line.dashedLine=h.axis.y.line.markPoint.reduce((t,e,n)=>(0!==n&&t.push([...e,h.axis.x.line.length]),t),[])),h.axis.y.text.data=h.axis.y.line.markPoint.map((t,e)=>{let n=h.axis.y.line.partScaleLength*e;return[t[0]-10,t[1]+5,n]}),h.axis.x.text.data=h.axis.x.line.markPoint.map((t,e)=>{let n=e+1+"月";return[t[0],t[1]+30,n]}),function(t){let e=-h.bar.width/2;h.bar.data=t.chunk.map((t,n)=>{let i=h.axis.x.line.markPoint[n],r=h.bar.scale*t,a=i[1]-h.bar.scale*t,o=i[0]+e;return[o,a,r]})}(t),function(t){let e=t.category;h.category.data=e.reduce((t,e,n)=>{let i=h.category.basePoint[0],r=h.category.basePoint[1]+25*n;return t.push([i,r,e]),t},[])}(t)}generateAxis(t){return function(t){let e=`M${h.axis.basePoint.join(" ")}`;return`<path class="axis-line" d="${`${e} v ${-h.axis.y.line.length} ${e} h ${h.axis.x.line.length}`+function(){let t="";return t+=h.axis.y.line.markPoint.reduce((t,e)=>`${t} M${e.join(" ")} h -5`,""),t+=h.axis.x.line.markPoint.reduce((t,e)=>`${t} M${e.join(" ")} v 5`,"")}()}"\n      ></path>${function(){return`<path class="axis-dashed-line" d="${h.axis.y.line.dashedLine.reduce((t,e,n)=>t+=`M${e.slice(0,2).join(" ")} h ${e[2]} `,"")}"></path>`}()}`}()+function(t){return`<text class="x-axis-text">\n        ${h.axis.x.text.data.reduce((t,e)=>`${t}<tspan x="${e[0]}" y="${e[1]}" text-anchor="middle">${e[2]}</tspan>`,"")}\n        </text>`+`<text class="y-axis-text">\n        ${h.axis.y.text.data.reduce((t,e)=>`${t}<tspan x="${e[0]}" y="${e[1]}" text-anchor="end">${e[2]}</tspan>`,"")}\n        </text>`}()}generateBar(){return`<g>\n      ${h.bar.data.reduce((t,e)=>`${t}<rect class="chart-bar" x="${e[0]}" y="${e[1]}" height="${e[2]-.5}" width="${h.bar.width}"></rect>`,"")}\n    </g>`}generateCategory(){return`<text class="category">\n      ${h.category.data.reduce((t,e)=>`${t}<tspan x="${e[0]}" y="${e[1]}" text-anchor="start">${e[2].join(": ")}</tspan>`,"")}\n    </text>`}}const x=800,g=400;let p={axis:{basePoint:[65,350],x:{line:{length:550,partCount:11,distribut:"both"},text:{}},y:{line:{length:250,partCount:5,distribut:"both"},text:{}}},line:{},category:{basePoint:[645,40],attrWidth:75,attrHeight:40,textOffset:-45,colorBoxWidth:20}};const f=[5,10,20,50,100,200,300],y=["IndianRed","LawnGreen","RosyBrown","Chocolate","Maroon","DarkGreen","DarkRed","MediumVioletRed","DarkOrange","DarkCyan","SteelBlue","Magenta","Navy","MediumSlateBlue"];class m{constructor(t){this.$container=document.querySelector(t)}render(t){let e=$(`<canvas class="base-axis" width="${x}" height="${g}"></canvas>`);""!==this.$container.innerHTML&&(this.$container.innerHTML=""),this.$container.appendChild(e),this.ctx=e.getContext("2d"),this.ctx.fillStyle="white",this.ctx.fillRect(0,0,x,g),this.data=t,this.evaluate(t),this.generateAxis(),this.generateLines(),this.generateCategory()}evaluate(t){!function(t){let e=t.map((t,e)=>{let n=t.chunk.concat();return n.sort((t,e)=>e-t),n[0]}).sort((t,e)=>e-t)[0]/p.axis.y.line.partCount,n=f.find(t=>e<t);p.axis.y.line.partScaleLength=n,p.line.scale=p.axis.y.line.length/p.axis.y.line.partCount/n}(t),function(){(function(){if("both"===p.axis.x.line.distribut){let t=p.axis.x.line.partCount+1,e={length:t},n=p.axis.x.line.length/p.axis.x.line.partCount;p.axis.x.line.markPoint=Array.from(e).map((t,e)=>[e*n,0])}})(),function(){if("both"===p.axis.y.line.distribut){let t=p.axis.y.line.partCount+1,e={length:t},n=p.axis.y.line.length/p.axis.y.line.partCount;p.axis.y.line.markPoint=Array.from(e).map((t,e)=>[0,0-e*n])}}()}(),function(t){(function(t){let e=p.axis.x.line,n=0;"both"===e.distribut&&(n=1);p.axis.x.text=e.markPoint.map((t,e)=>{let i=e+n+"月",r=t[0],a=t[1]+30;return[i,r,a]})})(),function(t){let e=p.axis.y.line,n=0;"middle"===e.distribut&&(n=1);p.axis.y.text=e.markPoint.map((t,e)=>{let i=(e+n)*p.axis.y.line.partScaleLength,r=t[0]-10,a=t[1]+5;return[i,r,a]})}()}(),p.axis.y.line.dashedLine=p.axis.y.line.markPoint.reduce((t,e,n)=>{if(0===e[0]&&0===e[1])return t;{let n=[p.axis.x.line.length,e[1]];return t.push([e,n]),t}},[]),function(t){let e=p.axis.x.line.markPoint;t.forEach((t,n)=>{let i=t.chunk;t.chunkPositions=i.map((t,n)=>{let i=e[n][0],r=0-p.line.scale*t;return[i,r]}),t.lineColor=y[n]})}(t),function(t){let e=p.category.attrWidth,n=p.category.attrHeight,i=p.category.textOffset;t.forEach((t,r)=>{let a=r*n,o=[0,a];t.categoryPositions=[[o,t.lineColor]],t.category.forEach((n,r)=>{let o=(r+1)*e+i,s=[o,a];t.categoryPositions.push([s,n[1]])})})}(t)}generateAxis(){let t=this;t.ctx.save(),t.ctx.strokeStyle="#666",t.ctx.lineWidth=1,t.ctx.translate(...p.axis.basePoint),t.ctx.moveTo(p.axis.x.line.length,0),t.ctx.lineTo(0,0),t.ctx.lineTo(0,0-p.axis.y.line.length),t.ctx.stroke(),t.ctx.restore(),function(){t.ctx.save();let e=p.axis.x.line.markPoint,n=p.axis.y.line.markPoint;t.ctx.strokeStyle="#666",t.ctx.lineWidth=1,t.ctx.lineCap="square",t.ctx.translate(...p.axis.basePoint),e.forEach((e,n)=>{t.ctx.moveTo(...e),t.ctx.lineTo(e[0],5)}),t.ctx.stroke(),n.forEach((e,n)=>{t.ctx.moveTo(...e),t.ctx.lineTo(-5,e[1])}),t.ctx.stroke(),t.ctx.restore()}(),function(){let e=p.axis.y.line.dashedLine;t.ctx.save(),t.ctx.translate(...p.axis.basePoint),t.ctx.strokeStyle="#ccc",t.ctx.lineWidth=1,e.forEach((e,n)=>{t.ctx.moveTo(...e[0]),t.ctx.lineTo(...e[1])}),t.ctx.stroke(),t.ctx.restore()}(),function(){let e=p.axis.x.text,n=p.axis.y.text;t.ctx.save(),t.ctx.translate(...p.axis.basePoint),t.ctx.fillStyle="#666",t.ctx.textAlign="center",t.ctx.font="18px sans-serif",e.forEach(e=>t.ctx.fillText(...e)),t.ctx.textAlign="right",n.forEach(e=>t.ctx.fillText(...e)),t.ctx.restore()}()}generateLines(){this.data.forEach(t=>{let e=$(`<canvas width="${x}" height="${g}"></canvas>`);this.$container.appendChild(e),t.element=e,function(t,e){let n=t.getContext("2d");n.save(),n.translate(...p.axis.basePoint),n.strokeStyle=e.lineColor,n.fillStyle="white",e.chunkPositions.forEach((t,e)=>{n.lineTo(...t),0!==e&&(n.moveTo(...t),n.arc(...t,5,0,2*Math.PI,!0)),n.moveTo(...t)}),n.stroke(),n.fill()}(e,t)},this)}generateCategory(t){let e,n=this,i=p.category.colorBoxWidth;if(t)(e=t.getContext("2d")).clearRect(0,0,x,g);else{let t=$(`<canvas class="category" width="${x}" height="${g}"></canvas>`);n.$container.appendChild(t),n.$categoryCanvas=t,e=t.getContext("2d")}e.save(),e.translate(...p.category.basePoint),e.fillStyle="#333",e.font="16px sans-serif",e.strokeStyle="black",e.strokeWidth=1,e.textBaseline="top",n.data.forEach((t,n)=>{"hide"!==t.element.className&&t.categoryPositions.forEach((t,n)=>{0===n?(e.save(),e.fillStyle=t[1],e.fillRect(...t[0],i,i),e.restore()):e.fillText(t[1],...t[0])})}),e.restore()}showSingleLine(t){let e=t.category.sort().toString();this.data.forEach(t=>{let n=t.category.sort().toString();t.element.className=n===e?"":"hide"}),this.generateCategory(this.$categoryCanvas)}showAllLine(){this.data.forEach(t=>{t.element.className=""}),this.generateCategory(this.$categoryCanvas)}}function $(t){let e=document.createElement("div");return e.innerHTML=t,e.children[0]}function b(t,e){if(t){if(t.tagName!==e){return b(t.parentNode,e)}return t}}!function(){let t=new o(JSON.stringify(i)),e=new l(".check-box"),n=new c(".table-box"),r=new d(".bar"),a=new m(".line");function s(t){let e=[];for(let n in t)if(t.hasOwnProperty(n)){let i=`${n}=${t[n].join(",")}`;e.push(i)}let n=encodeURI(e.join("&"));history.pushState({},null,location.href.split("?")[0]+"?"+n)}e.render(t.getOptionsData()),e.watch("changed",(e,i)=>{let r=e.getChosenOptionsData(),a=t.searchData(r);n.render(a),i||s(r)}),n.watch("rendered",t=>{let e=t.getTableData();a.render(e),r.render(e[0])}),n.watch("mouseover",t=>{if(b(t.target,"TBODY")){let e=b(t.target,"TR");if(e){let t=n.getRowData(e);t&&(r.render(t),a.showSingleLine(t))}}}),n.watch("mouseout",t=>{b(t.target,"TBODY")&&a.showAllLine()}),n.watch("changed",(e,n)=>{let i=n.getTableData();t.updateData(e),r.render(e),a.render(i)}),window.addEventListener("popstate",t=>{let n=location.href.split("?")[1];if(n){let t=decodeURI(n);e.selectOptions(t,!0)}}),function(){let t,[n,i]=location.href.split("?");i?(t=i,i=decodeURI(i)):(t=encodeURI("region=华东&product=手机"),i="region=华东&product=手机"),history.replaceState({},null,`${n}?${t}`),e.selectOptions(i,!0)}()}()},function(t,e){}]);