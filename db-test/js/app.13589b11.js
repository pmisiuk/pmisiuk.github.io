(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)o=s[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2a6df72f","chunk-0678":"07eab872"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1,"chunk-0678":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"6061c4cc","chunk-0678":"6061c4cc"}[t]+".css",o=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],c=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===r||c===o))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],c=s.getAttribute("data-href");if(c===r||c===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.request=r,n(a)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=i);var c,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=s(t),c=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:f})},12e4);f.onerror=f.onload=c,l.appendChild(f)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1914:function(t,e,n){},"21bb":function(t,e,n){"use strict";var r=n("1914"),o=n.n(r);o.a},2856:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("nav",{staticClass:"nav"},[n("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{staticClass:"nav-item",attrs:{to:"/new"}},[t._v("Add new")])],1),n("router-view"),n("vue-snotify")],1)},a=[],i=(n("5c0b"),n("2877")),s={},u=Object(i["a"])(s,o,a,!1,null,null,null);u.options.__file="App.vue";var c=u.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"items"},[n("table",[t._m(0),t._l(t.items,function(t,e){return n("OneItem",{key:t.id,attrs:{item:t,index:e}})})],2)])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("th",[t._v("Name")]),n("th",[t._v("Email")]),n("th",[t._v("Date")]),n("th"),n("th")])}],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticClass:"item"},[n("td",[t._v("\n    "+t._s(t.item.name)+"\n  ")]),n("td",[t._v("\n    "+t._s(t.item.email)+"\n  ")]),n("td",[t._v("\n    "+t._s(t.item.date)+"\n  ")]),n("td",[n("a",{staticClass:"link",on:{click:t.edit}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])])]),n("td",[n("a",{staticClass:"link",on:{click:t.remove}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}),n("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])])])])},p=[],h={name:"OneItem",props:{item:Object,index:String},data:function(){return{}},methods:{edit:function(){this.$router.push("/edit/"+this.index)},remove:function(){var t=this;this.$snotify.confirm("Do you want to permanently delete item?","Are you sure?",{buttons:[{text:"Yes",action:function(e){t.$store.dispatch("remove",{index:t.index,vm:t}),t.$snotify.remove(e.id)},bold:!1},{text:"No",action:function(e){return t.$snotify.remove(e.id)}}]})}}},v=h,b=(n("dd13"),Object(i["a"])(v,m,p,!1,null,null,null));b.options.__file="OneItem.vue";var g=b.exports,y={name:"home",components:{OneItem:g},data:function(){return{}},computed:{items:function(){return this.$store.getters.items}},created:function(){this.$store.dispatch("getFirebaseData")}},_=y,w=(n("21bb"),Object(i["a"])(_,f,d,!1,null,null,null));w.options.__file="Home.vue";var x=w.exports;r["a"].use(l["a"]);var O=new l["a"]({routes:[{path:"/",name:"home",component:x},{path:"/edit/:index",name:"editItem",component:function(){return n.e("chunk-0678").then(n.bind(null,"4047"))}},{path:"/new",name:"add-new",component:function(){return n.e("about").then(n.bind(null,"6104"))}}]}),j=n("2f62"),k=n("8aa5"),$={apiKey:"AIzaSyB7dFbPGdaLJO4m_nubCiS3jdtsL6j5MYQ",authDomain:"db-test-42870.firebaseapp.com",databaseURL:"https://db-test-42870.firebaseio.com",projectId:"db-test-42870",storageBucket:"db-test-42870.appspot.com",messagingSenderId:"855074086130"};Object(k["initializeApp"])($);var E={database:Object(k["database"])()};r["a"].use(j["a"]);var I=E.database,A=new j["a"].Store({state:{items:{}},getters:{items:function(t){return t.items},item:function(t){return function(e){return t.items[e]}}},mutations:{setItems:function(t,e){t.items=e}},actions:{add:function(t,e){I.ref("items/").push(e.data).then(function(t){e.vm.$snotify.success("Item added","All right!")}).catch(function(t){e.vm.$snotify.error(t,"Error"),console.error(t)})},change:function(t,e){var n=e.index,r=e.data;I.ref("items/"+n).update(r).then(function(t){e.vm.$snotify.success("Item changed","All right!")}).catch(function(t){e.vm.$snotify.error(t,"Error"),console.error(t)})},remove:function(t,e){I.ref("items/"+e.index).remove().then(function(t){e.vm.$snotify.success("Item removed","All right!")}).catch(function(t){e.vm.$snotify.error(t,"Error"),console.error(t)})},getFirebaseData:function(t,e){I.ref("items").on("value",function(e){t.commit("setItems",e.val())})}}}),C=n("f213");r["a"].use(C["a"]),r["a"].config.productionTip=!1,new r["a"]({router:O,store:A,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("2856"),o=n.n(r);o.a},8134:function(t,e,n){},dd13:function(t,e,n){"use strict";var r=n("8134"),o=n.n(r);o.a}});
//# sourceMappingURL=app.13589b11.js.map