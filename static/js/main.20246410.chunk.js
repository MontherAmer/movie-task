(this["webpackJsonpmovie-task"]=this["webpackJsonpmovie-task"]||[]).push([[0],{61:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t),c.d(t,"store",(function(){return w}));var a,n=c(0),i=c(15),s=c.n(i),r=c(10),l=c(17),o=c(3),j=c(5),d=c(11),u=c(18),m=c(14),b=c.n(m),p="//api.themoviedb.org/3/movie/",O="//image.tmdb.org/t/p/w500",h="f1b8d194dba80bd94de376afc7c19763",v=function(e){var t=e.type,c=e.page;return function(e){return b.a.get("".concat(p).concat(t),{params:{api_key:h,page:c||1}}).then((function(t){return console.log(t.data),e({type:"LIST_OF_MOVIES",payload:t.data})}))}},x=function(e){var t=e.query,c=e.page;return function(e){return b.a.get("".concat("//api.themoviedb.org/3/search/movie/"),{params:{api_key:h,query:t,page:c||1}}).then((function(t){return e({type:"LIST_OF_MOVIES",payload:t.data})}))}},g=c(1),f=function(e){var t=e.data,c=Object(n.useState)("red"),a=Object(d.a)(c,2),i=a[0],s=a[1],r=Object(n.useState)(""),l=Object(d.a)(r,2),j=l[0],u=l[1],m=Object(o.f)();Object(n.useEffect)((function(){var e="red";t.vote_average>5&&(e="yellow"),t.vote_average>7&&(e="green"),s(e),u("".concat(O).concat(t.poster_path))}),[t]);return Object(g.jsxs)("div",{className:"d-flex flex-column mb-3 position-relative",children:[Object(g.jsx)("div",{className:"card-rate ".concat(i),children:Object(g.jsx)("p",{className:"m-0",children:parseFloat(t.vote_average).toFixed(1)})}),Object(g.jsx)("img",{onError:function(e){return u("https://via.placeholder.com/350?text=placeholder")},src:j,alt:"poster",className:"pointer",onClick:function(){return m.push("/movie/".concat(t.id))}}),Object(g.jsx)("p",{className:"mt-2 mb-1",children:t.original_title}),Object(g.jsx)("p",{className:"golden",children:t.release_date})]})},N=function(e){var t=e.page,c=e.totalPages,a=e.onChange,i=Object(n.useState)([]),s=Object(d.a)(i,2),r=s[0],l=s[1];Object(n.useEffect)((function(){var e,a;if(t<1?t=1:t>c&&(t=c),c<=10)e=1,a=c;else{var n=Math.floor(5),i=Math.ceil(5)-1;t<=n?(e=1,a=10):t+i>=c?(e=c-10+1,a=c):(e=t-n,a=t+i)}var s=Array.from(Array(a+1-e).keys()).map((function(t){return e+t}));l(s)}),[t]);var o=function(e){return a(e)};return Object(g.jsx)("div",{className:"d-flex justify-content-center",children:Object(g.jsx)("nav",{"aria-label":"Page navigation",children:Object(g.jsxs)("ul",{className:"pagination",children:[Object(g.jsx)("li",{children:Object(g.jsx)("div",{className:"pagination-item",onClick:function(){return o(t-1)},children:Object(g.jsx)("span",{"aria-hidden":"true",children:"\xab"})})}),null===r||void 0===r?void 0:r.map((function(e,c){return Object(g.jsx)("li",{children:Object(g.jsx)("div",{className:"pagination-item ".concat(e===t?"active":""," "),onClick:function(){return o(e)},children:e})})})),Object(g.jsx)("li",{children:Object(g.jsx)("div",{className:"pagination-item",onClick:function(){return o(t+1)},children:Object(g.jsx)("span",{"aria-hidden":"true",children:"\xbb"})})})]})})})},y=(c(61),function(){var e=Object(r.b)(),t=Object(n.useState)({page:1,tab:"upcoming",query:""}),c=Object(d.a)(t,2),a=c[0],i=c[1],s=Object(r.c)((function(e){return e})),l=s.movies,o=s.total_pages;Object(n.useEffect)((function(){e(v({type:"upcoming",page:1}))}),[]);var m=function(t){i(Object(j.a)(Object(j.a)({},a),{},{tab:t,page:1,query:""})),e(v({type:t,page:1}))};return Object(g.jsxs)("div",{className:"container",children:[Object(g.jsxs)("div",{className:"row",children:[Object(g.jsx)("div",{className:"col",children:Object(g.jsx)("h2",{className:"m-0",children:"MOVIES"})}),Object(g.jsx)("div",{className:"col d-flex justify-content-end",children:Object(g.jsxs)("div",{className:"input",children:[Object(g.jsx)(u.b,{className:"icon",size:30}),Object(g.jsx)("input",{placeholder:"Search...",value:a.query,onChange:function(t){i(Object(j.a)(Object(j.a)({},a),{},{query:t.target.value})),e(x({query:t.target.value,page:a.page}))}})]})})]}),Object(g.jsx)("div",{className:"row mt-3",children:Object(g.jsxs)("div",{className:"col d-flex justify-content-start",children:[Object(g.jsx)("h5",{className:"m-0 me-4 pointer ".concat("upcoming"===a.tab?"golden underlined":""),onClick:function(){return m("upcoming")},children:"UPCOMING"}),Object(g.jsx)("h5",{className:"m-0 me-4 pointer ".concat("popular"===a.tab?"golden underlined":""),onClick:function(){return m("popular")},children:"POPULAR"}),Object(g.jsx)("h5",{className:"m-0 me-4 pointer ".concat("top_rated"===a.tab?"golden underlined":""),onClick:function(){return m("top_rated")},children:"TOP RATED"})]})}),Object(g.jsx)("div",{className:"row mt-5",children:l?l.map((function(e,t){return Object(g.jsx)("div",{className:"col-xs-12 col-md-6 col-lg-3",children:Object(g.jsx)(f,{data:e})},t)})):null}),Object(g.jsx)(N,{page:a.page,totalPages:o,onChange:function(t){console.log("ppppp ",t),console.log("sakfdlsadf"),i(Object(j.a)(Object(j.a)({},a),{},{page:t})),a.query.length?e(x({query:a.query,page:t})):e(v({type:a.tab,page:t}))}})]})}),_=function(){var e=Object(o.f)(),t=Object(r.b)(),c=Object(r.c)((function(e){return e})),a=c.movie,i=c.similars;Object(n.useEffect)((function(){console.log("    console.log(history.location.pathname);",e.location.pathname);var c,a=e.location.pathname.split("/")[2];t((c=a,function(e){return b.a.get("".concat(p).concat(c),{params:{api_key:h}}).then((function(t){return e({type:"MOVIE_DETAILS",payload:t.data})}))}))}),[e.location.pathname]),Object(n.useEffect)((function(){var e;(null===a||void 0===a?void 0:a.id)&&t((e=null===a||void 0===a?void 0:a.id,function(t){return b.a.get("".concat(p).concat(e,"/similar"),{params:{api_key:h}}).then((function(e){return t({type:"LIST_MOVIE_SIMILERS",payload:e.data.results})}))}))}),[a]);return a?Object(g.jsxs)("div",{className:"container  position-relative",children:[Object(g.jsx)("div",{className:"row",children:Object(g.jsxs)("div",{className:"col d-flex align-items-center",children:[Object(g.jsx)(u.a,{className:"home-icon",title:"home",onClick:function(){return e.push("/")}}),Object(g.jsx)("h2",{className:"m-0",children:a.original_title})]})}),Object(g.jsxs)("div",{className:"row mt-3",children:[Object(g.jsxs)("div",{className:"col-7 d-flex flex-column",children:[Object(g.jsx)("img",{src:"".concat(O).concat(a.backdrop_path),alt:"image"}),Object(g.jsx)("h4",{children:a.original_title}),Object(g.jsxs)("div",{className:"d-flex",children:[Object(g.jsx)("p",{className:"me-2",children:"Category: "}),Object(g.jsxs)("p",{className:"golden",children:[" ",a.genres.map((function(e,t){return t!==a.genres.length?"".concat(e.name,", "):e.name}))," "]})]}),Object(g.jsxs)("div",{className:"d-flex",children:[Object(g.jsx)("p",{className:"me-2",children:"Languages: "}),Object(g.jsxs)("p",{children:[" ",a.spoken_languages.map((function(e,t){return t!==a.spoken_languages.length?"".concat(e.name,", "):e.name}))," "]})]}),Object(g.jsxs)("div",{className:"d-flex",children:[Object(g.jsx)("p",{className:"me-2",children:"Running Time: "}),Object(g.jsxs)("p",{children:[" ",a.runtime," min "]})]})]}),Object(g.jsx)("div",{className:"col-5",children:Object(g.jsx)("div",{className:"row",children:i?i.map((function(e,t){return Object(g.jsx)("div",{className:"col-xs-12 col-lg-6",children:Object(g.jsx)(f,{data:e})},t)})):null})})]})]}):Object(g.jsx)("div",{children:"no movie"})},k=function(){return Object(g.jsx)("div",{className:"container-fluid pt-4",children:Object(g.jsx)("div",{className:"row",children:Object(g.jsx)("div",{className:"col",children:Object(g.jsx)(l.a,{children:Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"/movie-task/movie/:id",render:function(){return Object(g.jsx)(_,{})},exact:!0}),Object(g.jsx)(o.a,{path:"/movie-task/",render:function(){return Object(g.jsx)(y,{})},exact:!1})]})})})})})},I=c(23),E=c(33),S=(c(62),{moviesList:[],displayedMovie:{},similars:[]}),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0,c=t.type,a=t.payload;switch(c){case"LIST_OF_MOVIES":return console.log("PPPPPPPP ",a),Object(j.a)(Object(j.a)({},e),{},{movies:a.results,total_pages:a.total_pages});case"MOVIE_DETAILS":return Object(j.a)(Object(j.a)({},e),{},{movie:a});case"LIST_MOVIE_SIMILERS":return Object(j.a)(Object(j.a)({},e),{},{similars:a.slice(0,4)});default:return e}},M=Object(I.a)(E.a),C=Object(I.b)(P,M),w=(c(63),{store:C}.store);a=k,s.a.render(Object(g.jsx)(r.a,{store:w,children:Object(g.jsx)(a,{})}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.20246410.chunk.js.map