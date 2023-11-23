(this["webpackJsonpreact_people-table-advanced"]=this["webpackJsonpreact_people-table-advanced"]||[]).push([[0],{37:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(26),a=n(9),s=(n(35),n(36),n(3)),r=(n(37),n(8)),l=n.n(r),i=n(1),o=function(){return Object(i.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"navbar-brand",children:[Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(i.jsx)(a.c,{className:function(e){var t=e.isActive;return l()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})})},j=n(0),u=function(){return Object(i.jsx)("h1",{className:"title",children:"Home Page"})},d=function(){return Object(i.jsx)("h1",{className:"title",children:"Page not found"})},b=n(5),h=n(4),x=n(7),f="https://mate-academy.github.io/react_people-table/api/people.json";function O(e){return new Promise((function(t){return setTimeout(t,e)}))}function m(){return(m=Object(x.a)(Object(h.a)().mark((function e(){return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",O(500).then((function(){return fetch(f)})).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(39);var p=function(){return Object(i.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(i.jsx)("div",{className:"Loader__content"})})},v=function(e){var t=e.name,n=e.slug,c=e.isActive,s=Object(a.d)(),r=Object(b.a)(s,1)[0];return Object(i.jsx)(a.b,{className:l()({"has-text-danger":c}),to:{pathname:"/people/".concat(n),search:r.toString()},children:t})},N=function(e){var t=e.person,n=t.name,c=t.sex,a=t.born,r=t.died,o=t.fatherName,j=t.motherName,u=t.mother,d=t.father,b=t.slug,h=Object(s.q)().peopleSlug;return Object(i.jsxs)("tr",{"data-cy":"person",className:l()({"has-background-warning":h===b}),children:[Object(i.jsx)("td",{children:Object(i.jsx)(v,{name:n,slug:b,isActive:"f"===c})}),Object(i.jsx)("td",{children:c}),Object(i.jsx)("td",{children:a}),Object(i.jsx)("td",{children:r}),Object(i.jsx)("td",{children:u?Object(i.jsx)(v,{name:u.name,slug:u.slug,isActive:"f"===u.sex}):j||"-"}),Object(i.jsx)("td",{children:d?Object(i.jsx)(v,{name:d.name,slug:d.slug,isActive:"f"===d.sex}):o||"-"})]})};function g(e,t){var n=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(b.a)(e,2),c=t[0],a=t[1];null===a?n.delete(c):Array.isArray(a)?(n.delete(c),a.forEach((function(e){n.append(c,e)}))):n.set(c,a)})),n.toString()}var y=function(e){var t=e.people,n=Object(a.d)(),c=Object(b.a)(n,2),s=c[0],r=c[1];function o(e){var t=g(s,e);r(t)}var j=s.get("sort")||"",u=s.get("order")||"",d=function(e,t){t.preventDefault(),o(j===e&&u?{sort:null,order:null}:j===e?{order:"desc"}:{sort:e,order:null})};return Object(i.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Name",Object(i.jsx)("a",{href:"#/",onClick:function(e){return d("name",e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas",{"fa-sort":"name"!==j,"fa-sort-up":"name"===j&&!u,"fa-sort-down":"name"===j&&u})})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Sex",Object(i.jsx)("a",{href:"#/",onClick:function(e){return d("sex",e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas",{"fa-sort":"sex"!==j,"fa-sort-up":"sex"===j&&!u,"fa-sort-down":"sex"===j&&u})})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Born",Object(i.jsx)("a",{href:"#/",onClick:function(e){return d("born",e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas",{"fa-sort":"born"!==j,"fa-sort-up":"born"===j&&!u,"fa-sort-down":"born"===j&&u})})})})]})}),Object(i.jsx)("th",{children:Object(i.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Died",Object(i.jsx)("a",{href:"#/",onClick:function(e){return d("died",e)},children:Object(i.jsx)("span",{className:"icon",children:Object(i.jsx)("i",{className:l()("fas",{"fa-sort":"died"!==j,"fa-sort-up":"died"===j&&!u,"fa-sort-down":"died"===j&&u})})})})]})}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:t.map((function(e){return Object(i.jsx)(N,{person:e},e.slug)}))})]})},w=n(24);var k=n(10),C=function(){var e=Object(a.d)(),t=Object(b.a)(e,2),n=t[0],c=t[1];function s(e){var t=g(n,e);c(t)}var r=n.get("sex")||"",o=n.get("query")||"",j=n.getAll("century")||[],u=function(e,t){t.preventDefault(),s({sex:e})};return Object(i.jsxs)("nav",{className:"panel",children:[Object(i.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(i.jsxs)("p",{className:"panel-tabs","data-cy":"SexFilter",children:[Object(i.jsx)("a",{className:l()({"is-active":""===r}),href:"#/",onClick:function(e){return u(null,e)},children:"All"}),Object(i.jsx)("a",{className:l()({"is-active":"m"===r}),href:"#/",onClick:function(e){return u("m",e)},children:"Male"}),Object(i.jsx)("a",{className:l()({"is-active":"f"===r}),href:"#/",onClick:function(e){return u("f",e)},children:"Female"})]}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("p",{className:"control has-icons-left",children:[Object(i.jsx)("input",{"data-cy":"NameFilter",type:"search",className:"input",placeholder:"Search",onChange:function(e){s({query:e.target.value})},value:o}),Object(i.jsx)("span",{className:"icon is-left",children:Object(i.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsxs)("div",{className:"level is-flex-grow-1 is-mobile","data-cy":"CenturyFilter",children:[Object(i.jsx)("div",{className:"level-left",children:["16","17","18","19","20"].map((function(e){return Object(i.jsx)("button",{className:l()("button mr-1",{"is-info":j.includes(e)}),"data-cy":"century",onClick:function(){return function(e){s({century:j.includes(e)?j.filter((function(t){return t!==e})):[].concat(Object(k.a)(j),[e])})}(e)},type:"button",children:e},e)}))}),Object(i.jsx)("div",{className:"level-right ml-4",children:Object(i.jsx)("button",{"data-cy":"centuryALL",className:"button is-success is-outlined",onClick:function(){s({century:null})},type:"button",children:"All"})})]})}),Object(i.jsx)("div",{className:"panel-block",children:Object(i.jsx)("button",{className:"button is-link is-outlined is-fullwidth",onClick:function(){s({sex:null,query:null,century:null})},type:"button",children:"Reset all filters"})})]})},S=function(e,t){return null!==e&&e.toLocaleLowerCase().includes(t.toLocaleLowerCase())},A=function(){var e=Object(j.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(j.useState)(!1),r=Object(b.a)(s,2),l=r[0],o=r[1],u=Object(j.useState)(!1),d=Object(b.a)(u,2),h=d[0],x=d[1];Object(j.useEffect)((function(){o(!0),x(!1),function(){return m.apply(this,arguments)}().then((function(e){return c(function(e){return e.map((function(t){var n=e.find((function(e){return e.name===t.motherName})),c=e.find((function(e){return e.name===t.fatherName}));return Object(w.a)(Object(w.a)({},t),{},{mother:n,father:c})}))}(e))})).catch((function(){return x(!0)})).finally((function(){return o(!1)}))}),[]);var f=Object(a.d)(),O=Object(b.a)(f,1)[0],v=function(e,t){var n=t.get("sex")||"",c=t.get("query")||"",a=t.getAll("century")||[],s=t.get("sort")||"",r=t.get("order")?-1:1,l=e.filter((function(e){var t=e.name,s=e.motherName,r=e.fatherName,l=e.born,i=""===n||e.sex===n,o=S(t,c)||S(s,c)||S(r,c);if(!a.length)return i&&o;var j=a.includes(Math.floor(l/100+1).toString());return i&&o&&j}));return s?l.sort((function(e,t){return"name"===s||"sex"===s?r*e[s].localeCompare(t[s]):r*(e[s]-t[s])})):l}(n,O);if(l||h)return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),l&&Object(i.jsx)(p,{}),h&&Object(i.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"})]});var N=O.get("query")?"There are no people matching the current search criteria":"There are no people on the server";return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)("div",{className:"block",children:Object(i.jsxs)("div",{className:"columns is-desktop is-flex-direction-row-reverse",children:[Object(i.jsx)("div",{className:"column is-7-tablet is-narrow-desktop",children:Object(i.jsx)(C,{})}),Object(i.jsx)("div",{className:"column",children:Object(i.jsx)("div",{className:"box table-container",children:v.length?Object(i.jsx)(y,{people:v}):Object(i.jsx)("p",{"data-cy":"noPeopleMessage",children:N})})})]})})]})},L=function(){return Object(i.jsxs)("div",{"data-cy":"app",children:[Object(i.jsx)(o,{}),Object(i.jsx)("main",{className:"section",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsxs)("div",{className:"block",children:["#/home"===window.location.hash&&Object(i.jsx)(s.a,{to:"/",replace:!0}),Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{path:"/",element:Object(i.jsx)(u,{})}),Object(i.jsxs)(s.b,{path:"people/:peopleSlug?",children:[Object(i.jsx)(s.b,{index:!0,element:Object(i.jsx)(A,{})}),Object(i.jsx)(s.b,{path:":peopleSlug",element:Object(i.jsx)(A,{})})]}),Object(i.jsx)(s.b,{path:"*",element:Object(i.jsx)(d,{})})]})]})})})]})};Object(c.createRoot)(document.getElementById("root")).render(Object(i.jsx)(a.a,{children:Object(i.jsx)(L,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.8c9d7505.chunk.js.map