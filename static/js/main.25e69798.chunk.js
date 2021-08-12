(this["webpackJsonpmovie-task"]=this["webpackJsonpmovie-task"]||[]).push([[0],{61:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t),c.d(t,"store",(function(){return w}));var a,n=c(0),s=c(15),i=c.n(s),r=c(10),l=c(17),o=c(3),j=c(5),d=c(11),u=c(18),m=c(14),b=c.n(m),p="https://api.themoviedb.org/3/movie/",O="https://image.tmdb.org/t/p/w500",h="f1b8d194dba80bd94de376afc7c19763",x=function(e){var t=e.type,c=e.page;return function(e){return b.a.get("".concat(p).concat(t),{params:{api_key:h,page:c||1}}).then((function(t){return console.log(t.data),e({type:"LIST_OF_MOVIES",payload:t.data})}))}},g=function(e){var t=e.query,c=e.page;return function(e){return b.a.get("".concat("https://api.themoviedb.org/3/search/movie/"),{params:{api_key:h,query:t,page:c||1}}).then((function(t){return e({type:"LIST_OF_MOVIES",payload:t.data})}))}},v=c(1),f=function(e){var t=e.data,c=Object(n.useState)("red"),a=Object(d.a)(c,2),s=a[0],i=a[1],r=Object(n.useState)(""),l=Object(d.a)(r,2),j=l[0],u=l[1],m=Object(o.f)();Object(n.useEffect)((function(){var e="red";t.vote_average>5&&(e="yellow"),t.vote_average>7&&(e="green"),i(e),u("".concat(O).concat(t.poster_path))}),[t]);return Object(v.jsxs)("div",{className:"d-flex flex-column mb-3 position-relative",children:[Object(v.jsx)("div",{className:"card-rate ".concat(s),children:Object(v.jsx)("p",{className:"m-0",children:parseFloat(t.vote_average).toFixed(1)})}),Object(v.jsx)("img",{onError:function(e){return u("https://via.placeholder.com/350?text=placeholder")},src:j,alt:"poster",className:"pointer",onClick:function(){return m.push("/movie/".concat(t.id))}}),Object(v.jsx)("p",{className:"mt-2 mb-1",children:t.original_title}),Object(v.jsx)("p",{className:"golden",children:t.release_date})]})},N=function(e){var t=e.page,c=e.totalPages,a=e.onChange,s=Object(n.useState)([]),i=Object(d.a)(s,2),r=i[0],l=i[1];Object(n.useEffect)((function(){var e,a;if(t<1?t=1:t>c&&(t=c),c<=10)e=1,a=c;else{var n=Math.floor(5),s=Math.ceil(5)-1;t<=n?(e=1,a=10):t+s>=c?(e=c-10+1,a=c):(e=t-n,a=t+s)}var i=Array.from(Array(a+1-e).keys()).map((function(t){return e+t}));l(i)}),[t]);var o=function(e){return a(e)};return Object(v.jsx)("div",{className:"d-flex justify-content-center",children:Object(v.jsx)("nav",{"aria-label":"Page navigation",children:Object(v.jsxs)("ul",{className:"pagination",children:[Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"pagination-item",onClick:function(){return o(t-1)},children:Object(v.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),null===r||void 0===r?void 0:r.map((function(e,c){return Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"pagination-item ".concat(e===t?"active":""," "),onClick:function(){return o(e)},children:e})})})),Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"pagination-item",onClick:function(){return o(t+1)},children:Object(v.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})})},y=(c(61),function(){var e=Object(r.b)(),t=Object(n.useState)({page:1,tab:"upcoming",query:""}),c=Object(d.a)(t,2),a=c[0],s=c[1],i=Object(r.c)((function(e){return e})),l=i.movies,o=i.total_pages;Object(n.useEffect)((function(){e(x({type:"upcoming",page:1}))}),[]);var m=function(t){s(Object(j.a)(Object(j.a)({},a),{},{tab:t,page:1,query:""})),e(x({type:t,page:1}))};return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col",children:Object(v.jsx)("h2",{className:"m-0",children:"MOVIES"})}),Object(v.jsx)("div",{className:"col d-flex justify-content-end",children:Object(v.jsxs)("div",{className:"input",children:[Object(v.jsx)(u.b,{className:"icon",size:30}),Object(v.jsx)("input",{placeholder:"Search...",value:a.query,onChange:function(t){s(Object(j.a)(Object(j.a)({},a),{},{query:t.target.value})),e(g({query:t.target.value,page:a.page}))}})]})})]}),Object(v.jsx)("div",{className:"row mt-3",children:Object(v.jsxs)("div",{className:"col d-flex justify-content-start",children:[Object(v.jsx)("h5",{className:"m-0 me-4 pointer ".concat("upcoming"===a.tab?"golden underlined":""),onClick:function(){return m("upcoming")},children:"UPCOMING"}),Object(v.jsx)("h5",{className:"m-0 me-4 pointer ".concat("popular"===a.tab?"golden underlined":""),onClick:function(){return m("popular")},children:"POPULAR"}),Object(v.jsx)("h5",{className:"m-0 me-4 pointer ".concat("top_rated"===a.tab?"golden underlined":""),onClick:function(){return m("top_rated")},children:"TOP RATED"})]})}),Object(v.jsx)("div",{className:"row mt-5",children:l?l.map((function(e,t){return Object(v.jsx)("div",{className:"col-xs-12 col-md-6 col-lg-3",children:Object(v.jsx)(f,{data:e})},t)})):null}),Object(v.jsx)(N,{page:a.page,totalPages:o,onChange:function(t){console.log("ppppp ",t),console.log("sakfdlsadf"),s(Object(j.a)(Object(j.a)({},a),{},{page:t})),a.query.length?e(g({query:a.query,page:t})):e(x({type:a.tab,page:t}))}})]})}),_=function(){var e=Object(o.f)(),t=Object(r.b)(),c=Object(r.c)((function(e){return e})),a=c.movie,s=c.similars;Object(n.useEffect)((function(){console.log("    console.log(history.location.pathname);",e.location.pathname);var c,a=e.location.pathname.split("/")[2];t((c=a,function(e){return b.a.get("".concat(p).concat(c),{params:{api_key:h}}).then((function(t){return e({type:"MOVIE_DETAILS",payload:t.data})}))}))}),[e.location.pathname]),Object(n.useEffect)((function(){var e;(null===a||void 0===a?void 0:a.id)&&t((e=null===a||void 0===a?void 0:a.id,function(t){return b.a.get("".concat(p).concat(e,"/similar"),{params:{api_key:h}}).then((function(e){return t({type:"LIST_MOVIE_SIMILERS",payload:e.data.results})}))}))}),[a]);return a?Object(v.jsxs)("div",{className:"container  position-relative",children:[Object(v.jsx)("div",{className:"row",children:Object(v.jsxs)("div",{className:"col d-flex align-items-center",children:[Object(v.jsx)(u.a,{className:"home-icon",title:"home",onClick:function(){return e.push("/")}}),Object(v.jsx)("h2",{className:"m-0",children:a.original_title})]})}),Object(v.jsxs)("div",{className:"row mt-3",children:[Object(v.jsxs)("div",{className:"col-7 d-flex flex-column",children:[Object(v.jsx)("img",{src:"".concat(O).concat(a.backdrop_path),alt:"image"}),Object(v.jsx)("h4",{children:a.original_title}),Object(v.jsxs)("div",{className:"d-flex",children:[Object(v.jsx)("p",{className:"me-2",children:"Category: "}),Object(v.jsxs)("p",{className:"golden",children:[" ",a.genres.map((function(e,t){return t!==a.genres.length?"".concat(e.name,", "):e.name}))," "]})]}),Object(v.jsxs)("div",{className:"d-flex",children:[Object(v.jsx)("p",{className:"me-2",children:"Languages: "}),Object(v.jsxs)("p",{children:[" ",a.spoken_languages.map((function(e,t){return t!==a.spoken_languages.length?"".concat(e.name,", "):e.name}))," "]})]}),Object(v.jsxs)("div",{className:"d-flex",children:[Object(v.jsx)("p",{className:"me-2",children:"Running Time: "}),Object(v.jsxs)("p",{children:[" ",a.runtime," min "]})]})]}),Object(v.jsx)("div",{className:"col-5",children:Object(v.jsx)("div",{className:"row",children:s?s.map((function(e,t){return Object(v.jsx)("div",{className:"col-xs-12 col-lg-6",children:Object(v.jsx)(f,{data:e})},t)})):null})})]})]}):Object(v.jsx)("div",{children:"no movie"})},k=function(){return Object(v.jsx)("div",{className:"container-fluid pt-4",children:Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col",children:Object(v.jsx)(l.a,{children:Object(v.jsxs)(o.c,{children:[Object(v.jsx)(o.a,{path:"/movie/:id",render:function(){return Object(v.jsx)(_,{})},exact:!0}),Object(v.jsx)(o.a,{path:"/",render:function(){return Object(v.jsx)(y,{})},exact:!1})]})})})})})},I=c(23),E=c(33),S=(c(62),{moviesList:[],displayedMovie:{},similars:[]}),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case"LIST_OF_MOVIES":return console.log("PPPPPPPP ",a),Object(j.a)(Object(j.a)({},e),{},{movies:a.results,total_pages:a.total_pages});case"MOVIE_DETAILS":return Object(j.a)(Object(j.a)({},e),{},{movie:a});case"LIST_MOVIE_SIMILERS":return Object(j.a)(Object(j.a)({},e),{},{similars:a.slice(0,4)});default:return e}},M=Object(I.a)(E.a),C=Object(I.b)(P,M),w=(c(63),{store:C}.store);a=k,i.a.render(Object(v.jsx)(r.a,{store:w,children:Object(v.jsx)(a,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.25e69798.chunk.js.map