(function(e){function t(t){for(var r,o,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)o=c[l],a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function c(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"a96b7d05","chunk-1c2dc144":"b643448c","chunk-a446b896":"61efe163"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,"chunk-a446b896":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"0e433876","chunk-1c2dc144":"31d6cfe0","chunk-a446b896":"99d1ef8c"}[e]+".css",a=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.request=r,delete o[e],p.parentNode.removeChild(p),n(i)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=i);var u,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e),u=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,l.appendChild(d)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},3726:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"nav"},[n("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[e._v("Notes")]),n("router-link",{staticClass:"nav-item",attrs:{to:"/add"}},[e._v("✚")])],1),e.loading?n("div",{staticClass:"loading"},[n("div"),n("div"),n("div")]):n("div",[n("router-view")],1),n("button",{staticClass:"floating",on:{click:function(t){e.hint=!e.hint}}},[e._v("☰")]),e.hint?n("div",{staticClass:"hint"},[e._m(0),e._m(1),n("p",[e._v("\n      3 Niech będzie wysławiany Bóg i Ojciec naszego Pana, Jezusa Chrystusa,\n      Ojciec serdecznego współczucia i Bóg wszelkiego pocieszenia.\n      4 On nas pociesza we wszystkich naszych próbach, żebyśmy my mogli pocieszać\n      innych, bez względu na to, jaką próbę przechodzą — żebyśmy nieśli im pocieszenie,\n      które sami otrzymaliśmy od Boga\n    ")]),e._m(2)]):e._e()])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Pytanie: ")]),e._v("Jak sobie radzić po śmierci kogoś bliskiego?\n    ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Werset: ")]),n("a",{attrs:{href:"https://wol.jw.org/pl/wol/b/r12/lp-p/nwt/P/2018/47/1#v=47:1:3-47:1:4",target:"_blank"}},[e._v("\n      2Ko 1:3, 4\n      ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Następnym razem: ")]),e._v("Co się dzieje po śmierci?\n    ")])}],i={computed:{loading:function(){return this.$store.getters.loading}},created:function(){this.$store.dispatch("getData")},data:function(){return{hint:!1}}},c=i,s=(n("5c0b"),n("2877")),u=Object(s["a"])(c,o,a,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,d=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("ul",e._l(e.groups,function(t,r,o){return n("li",{key:o},[n("router-link",{attrs:{to:{name:"group",params:{name:r}}}},[e._v("\n        "+e._s(r)+"\n      ")]),n("router-link",{staticClass:"edit",attrs:{to:{name:"edit",params:{name:r}}}},[e._v("\n        ✎\n      ")])],1)})),n("h2",[e._v("TODO")]),e._m(0)])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[e._v("auth!")]),n("li",[e._v("select zamiast home")]),n("li",[e._v("stats: % enabled etc.")])])}],m={name:"home",computed:{groups:function(){return this.$store.getters.groups}}},g=m,h=(n("bd20"),Object(s["a"])(g,p,f,!1,null,"788297ca",null));h.options.__file="Home.vue";var v=h.exports;r["a"].use(d["a"]);var b=new d["a"]({routes:[{path:"/",name:"home",component:v},{path:"/add",name:"add",component:function(){return n.e("about").then(n.bind(null,"67bf"))}},{path:"/group/:name",name:"group",component:function(){return n.e("chunk-1c2dc144").then(n.bind(null,"4ebe"))}},{path:"/edit/:name",name:"edit",component:function(){return n.e("chunk-a446b896").then(n.bind(null,"1071"))}}]}),y=n("9483");Object(y["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("7f7f");var _=n("2f62"),k=n("59ca"),w=n.n(k),z=(n("66ce"),{apiKey:"AIzaSyAYNJZy-xq_dM6PRQ56KkCpjD9bW2wIwTw",authDomain:"notes-a50d6.firebaseapp.com",databaseURL:"https://notes-a50d6.firebaseio.com",projectId:"notes-a50d6",storageBucket:"",messagingSenderId:"976483206540"});w.a.initializeApp(z);var j={database:w.a.database()};r["a"].use(_["a"]);var O=j.database,C=new _["a"].Store({state:{groups:{},loading:!1},getters:{groups:function(e){return e.groups},group:function(e){return function(t){return e.groups[t]}},loading:function(e){return e.loading}},mutations:{addGroup:function(e,t){r["a"].set(e.groups,t.name,t.data)},setGroups:function(e,t){e.groups=t},setLoading:function(e,t){e.loading=t}},actions:{add:function(e,t){O.ref("groups/".concat(t.name,"/divider")).set(t.divider),O.ref("groups/".concat(t.name,"/dateTaken")).set(t.dateTaken),O.ref("groups/".concat(t.name,"/number")).set(t.number);for(var n=1;n<=t.number;n++){var r={id:n,o:!1,x:!1};O.ref("groups/".concat(t.name,"/items")).push(r)}},update:function(e,t){O.ref("groups/".concat(t.name,"/items/").concat(t.key)).update(t.data)},updateTime:function(e,t){O.ref("groups/".concat(t.name,"/items/").concat(t.key,"/n")).push(t.data)},updateGroup:function(e,t){O.ref("groups/".concat(t.name)).set(t.data)},deleteGroup:function(e,t){O.ref("groups/".concat(t)).remove()},getData:function(e){e.commit("setLoading",!0);try{O.ref("groups").on("value",function(t){e.commit("setGroups",t.val()),e.commit("setLoading",!1)})}catch(t){e.commit("setLoading",!1),console.error(t)}}}});r["a"].config.productionTip=!1,new r["a"]({router:b,store:C,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){},bd20:function(e,t,n){"use strict";var r=n("3726"),o=n.n(r);o.a}});
//# sourceMappingURL=app.daa840dc.js.map