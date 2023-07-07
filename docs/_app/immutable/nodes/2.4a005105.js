import{s as U,n as L}from"../chunks/scheduler.e108d1fd.js";import{S as w,i as F,g as v,m as M,s as T,h as x,y as B,n as E,c as C,j as k,f as u,k as O,a as r,x as g,z as G,o as R,A as P}from"../chunks/index.06801730.js";function $(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function S(i,e,m){const a=i.slice();return a[3]=e[m],a}function j(i,e,m){const a=i.slice();return a[6]=e[m],a}function D(i){let e,m=i[6]+"",a;return{c(){e=v("td"),a=M(m),this.h()},l(l){e=x(l,"TD",{class:!0});var n=k(e);a=E(n,m),n.forEach(u),this.h()},h(){O(e,"class","svelte-dizbef")},m(l,n){r(l,e,n),g(e,a)},p:L,d(l){l&&u(e)}}}function N(i){let e,m,a=$(i[3].split(",")),l=[];for(let n=0;n<a.length;n+=1)l[n]=D(j(i,a,n));return{c(){e=v("tr");for(let n=0;n<l.length;n+=1)l[n].c();m=T()},l(n){e=x(n,"TR",{});var h=k(e);for(let s=0;s<l.length;s+=1)l[s].l(h);m=C(h),h.forEach(u)},m(n,h){r(n,e,h);for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(e,null);g(e,m)},p(n,h){if(h&4){a=$(n[3].split(","));let s;for(s=0;s<a.length;s+=1){const z=j(n,a,s);l[s]?l[s].p(z,h):(l[s]=D(z),l[s].c(),l[s].m(e,m))}for(;s<l.length;s+=1)l[s].d(1);l.length=a.length}},d(n){n&&u(e),P(l,n)}}}function I(i){let e,m="Equation solvers",a,l,n,h,s,z='<th class="svelte-dizbef"></th> <th colspan="2" class="svelte-dizbef">minterms</th> <th colspan="2" class="svelte-dizbef">maxterms</th>',A,b,d,y,H,q,p=$(i[2].split(`
`)),f=[];for(let t=0;t<p.length;t+=1)f[t]=N(S(i,p,t));return{c(){e=v("h1"),e.textContent=m,a=M(`

vaisakh `),l=M(i[0]),n=T(),h=v("table"),s=v("tr"),s.innerHTML=z,A=T();for(let t=0;t<f.length;t+=1)f[t].c();b=T(),d=v("button"),y=M(i[0]),this.h()},l(t){e=x(t,"H1",{["data-svelte-h"]:!0}),B(e)!=="svelte-6dkxl6"&&(e.textContent=m),a=E(t,`

vaisakh `),l=E(t,i[0]),n=C(t),h=x(t,"TABLE",{class:!0});var o=k(h);s=x(o,"TR",{["data-svelte-h"]:!0}),B(s)!=="svelte-8b3d6t"&&(s.innerHTML=z),A=C(o);for(let _=0;_<f.length;_+=1)f[_].l(o);o.forEach(u),b=C(t),d=x(t,"BUTTON",{});var c=k(d);y=E(c,i[0]),c.forEach(u),this.h()},h(){O(h,"class","svelte-dizbef")},m(t,o){r(t,e,o),r(t,a,o),r(t,l,o),r(t,n,o),r(t,h,o),g(h,s),g(h,A);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(h,null);r(t,b,o),r(t,d,o),g(d,y),H||(q=G(d,"click",i[1]),H=!0)},p(t,[o]){if(o&1&&R(l,t[0]),o&4){p=$(t[2].split(`
`));let c;for(c=0;c<p.length;c+=1){const _=S(t,p,c);f[c]?f[c].p(_,o):(f[c]=N(_),f[c].c(),f[c].m(h,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=p.length}o&1&&R(y,t[0])},i:L,o:L,d(t){t&&(u(e),u(a),u(l),u(n),u(h),u(b),u(d)),P(f,t),H=!1,q()}}}function J(i,e,m){let a=3;function l(){m(0,a++,a)}return[a,l,`xyz,term, designatation,term,designatation
000,x'y'z', m0 , x+y+z    , M0
001,x'y'z , m1 , x+y+z'   , M1
010,x'yz' , m2 , x+y'+z   , M2
011,x'yz  , m3 , x+y'+z'  , M3
100,xy'z' , m4 , x'+y+z   , M4
101,xy'z  , m5 , x'+y+z'  , M5
110,xyz'  , m6 , x'+y'+z  , M6
111,xyz   , m7 , x'+y'+z' , M7 `]}class V extends w{constructor(e){super(),F(this,e,J,I,U,{})}}export{V as component};
