(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],f=0,p=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={index:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4986:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleSideMenu.apply(null,arguments)}}}),a("v-toolbar-title",[t._v("神奈川県内人口状況")]),a("v-spacer")],1),a("SideNav"),a("v-main",[a("v-container",{attrs:{fluid:"","fill-height":"","align-start":""}},[a("router-view")],1)],1)],1)},o=[],i=a("5530"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:t.$store.state.drawer,callback:function(e){t.$set(t.$store.state,"drawer",e)},expression:"$store.state.drawer"}},[a("v-list",[a("v-list-item",[a("v-app-bar-nav-icon",{on:{click:function(e){return e.stopPropagation(),t.toggleSideMenu.apply(null,arguments)}}}),a("v-list-item-content",[a("v-list-item-title",[t._v("Menu")])],1)],1),a("v-divider"),t._l(t.items,(function(e,n){return a("v-list-item",{key:n,attrs:{to:e.link}},[a("v-list-item-icon",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2)],1)},l=[],c=a("2f62"),u={data:function(){return{items:[{title:"ホーム",icon:"mdi-home",link:{name:"Home"}},{title:"人口一覧",icon:"mdi-table-large",link:{name:"PopList"}},{title:"サイトについて",icon:"mdi-information-outline",link:{name:"About"}}]}},methods:Object(i["a"])({},Object(c["b"])(["toggleSideMenu"]))},f=u,p=a("2877"),v=a("6544"),m=a.n(v),d=a("5bc1"),h=a("ce7e"),_=a("132d"),g=a("8860"),y=a("da13"),b=a("5d23"),x=a("34c3"),w=a("f774"),j=Object(p["a"])(f,s,l,!1,null,null,null),k=j.exports;m()(j,{VAppBarNavIcon:d["a"],VDivider:h["a"],VIcon:_["a"],VList:g["a"],VListItem:y["a"],VListItemContent:b["a"],VListItemIcon:x["a"],VListItemTitle:b["b"],VNavigationDrawer:w["a"]});var C={name:"App",components:{SideNav:k},data:function(){return{}},methods:Object(i["a"])({},Object(c["b"])(["toggleSideMenu"]))},V=C,O=a("7496"),P=a("40dc"),S=a("a523"),M=a("f6c4"),I=a("2fa4"),L=a("2a7f"),$=Object(p["a"])(V,r,o,!1,null,null,null),A=$.exports;m()($,{VApp:O["a"],VAppBar:P["a"],VAppBarNavIcon:d["a"],VContainer:S["a"],VMain:M["a"],VSpacer:I["a"],VToolbarTitle:L["a"]});var E=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("hello-world")},N=[],D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:a("9b19"),contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v(" Welcome to Vuetify ")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),n("br"),t._v("please join our online "),n("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" What's next? ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Important Links ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" Ecosystem ")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,a){return n("a",{key:a,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},H=[],W={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},q=W,B=a("62ad"),F=a("adda"),J=a("0fd9"),z=Object(p["a"])(q,D,H,!1,null,null,null),Q=z.exports;m()(z,{VCol:B["a"],VContainer:S["a"],VImg:F["a"],VRow:J["a"]});var R={name:"Home",components:{HelloWorld:Q}},G=R,K=Object(p["a"])(G,T,N,!1,null,null,null),U=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"PopList"},[a("v-container",{attrs:{"text-xs-center":"","justify-center":""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[t._v("市町村別人口一覧")]),a("div",[t._v("（選択）地域： "),a("span",{staticClass:"select_field"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.select_category,expression:"select_category"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.select_category=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("全域（選択して下さい）")]),t._l(t.area_categories,(function(e){return a("option",{key:e.id,domProps:{value:e.name}},[t._v(" "+t._s(e.name)+" ")])}))],2),a("button",{on:{click:t.clear_category}},[t._v("×(clear)")])])]),t.get_error?a("div",[t._v(" "+t._s(t.err_message)+" ")]):a("div",[a("v-flex",{attrs:{xs12:"","mt-5":"","justify-center":""}},[a("p",[t._v("各市町村の情報（集計年月："+t._s(t.get_month)+"）：")]),a("v-data-table",{staticClass:"city_info",attrs:{headers:t.headers,items:t.search_list,color:"primary",app:"",lighten:""}})],1)],1)])],1)],1)],1)},Y=[],Z=a("b85c"),tt=(a("dca8"),a("498a"),a("4de4"),a("caad"),a("2532"),a("bc3a")),et=a.n(tt),at="https://sgtao.github.io/kanagawa_population_info/01_format_excelfiles/outputs/",nt=Object.freeze({name:"My App",version:"0.0.2",helpers:{filterPrefInfo:function(t){var e,a=[],n=Object(Z["a"])(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;"県全域"==r.area_name&&a.push(r)}}catch(o){n.e(o)}finally{n.f()}return a},filterCityInfo:function(t){var e,a=[],n=Object(Z["a"])(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;r.code>0&&"県全域"!=r.area_name&&"区"!=r.city_type&&a.push(r)}}catch(o){n.e(o)}finally{n.f()}return a}}}),rt={name:"PopList",data:function(){return{get_error:!1,err_message:"データ取得に失敗しました。",get_month:"202108",get_info:[],pref_info:[],city_info:[],headers:[{text:"コード",value:"code",class:"px-0"},{text:"名称",value:"city_name",class:"px-0"},{text:"地域",value:"area_name",class:"px-0"},{text:"世帯数",value:"household",class:"px-0"},{text:"人口",value:"population",class:"px-0"},{text:"人口増減(先月比)",value:"change_pop",class:"px-0"},{text:"１世帯人数",value:"pop_per_house",class:"px-0"},{text:"人口密度",value:"pop_per_area",class:"px-0"}],select_category:"",area_categories:[{id:11,name:"横浜"},{id:12,name:"川崎"},{id:13,name:"県央"},{id:14,name:"横須賀三浦"},{id:15,name:"湘南"},{id:16,name:"県西"}]}},created:function(){var t=this,e=at+"jinkotosetai_"+t.get_month+".json";et.a.get(e).then((function(e){t.get_info=e.data[0],t.pref_info=nt.helpers.filterPrefInfo(t.get_info),console.log(t.pref_info),t.city_info=nt.helpers.filterCityInfo(t.get_info),console.log(t.city_info)})).catch((function(e){console.log(t.err_message,e),t.get_error=!0}))},methods:{clear_category:function(){this.select_category=""}},computed:{search_list:function(){var t=this.select_category.trim();return""===t?this.city_info:this.city_info.filter((function(e){return e.area_name.includes(t)}))}}},ot=rt,it=(a("5db0"),a("8fea")),st=a("0e8f"),lt=a("a722"),ct=Object(p["a"])(ot,X,Y,!1,null,null,null),ut=ct.exports;m()(ct,{VContainer:S["a"],VDataTable:it["a"],VFlex:st["a"],VLayout:lt["a"]});var ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("h1",[t._v("This is an about page")])])}],vt={},mt=Object(p["a"])(vt,ft,pt,!1,null,null,null),dt=mt.exports;n["a"].use(E["a"]);var ht=[{path:"/",name:"Home",component:U},{path:"/PopList",name:"PopList",component:ut},{path:"/about",name:"About",component:dt}],_t=new E["a"]({mode:"history",base:"",routes:ht}),gt=_t;n["a"].use(c["a"]);var yt=new c["a"].Store({state:{drawer:!1},mutations:{toggleSideMenu:function(t){t.drawer=!t.drawer}},actions:{toggleSideMenu:function(t){var e=t.commit;e("toggleSideMenu")}}}),bt=a("f309");n["a"].use(bt["a"]);var xt=new bt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:gt,store:yt,vuetify:xt,render:function(t){return t(A)}}).$mount("#app")},"5db0":function(t,e,a){"use strict";a("4986")},"9b19":function(t,e,a){t.exports=a.p+"img/logo.63a7d78d.svg"}});
//# sourceMappingURL=index.9ab1607f.js.map