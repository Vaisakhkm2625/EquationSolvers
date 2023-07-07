import{s as it,f as tt,n as W,r as _t}from"../chunks/scheduler.b95eede2.js";import{S as at,i as ft,g as C,s as B,m as S,h as b,y as N,c as L,n as U,j as R,f as c,k as w,z as I,a as d,x as O,A as J,B as K,C as ct,D as et,r as rt,u as ht,v as mt,o as lt,d as vt,t as dt,E as pt,w as xt}from"../chunks/index.5d604bea.js";function Q(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ct(e){let s,a="Convert",l,t,n,u,o,P="dec",y,k="bin",h,E="oct",x,M="hex",z,_,T,A="dec",r,i="bin",p,v="oct",g,Y="hex",D,X,F,j,Z="run",G,H,V,$;return{c(){s=C("h2"),s.textContent=a,l=B(),t=C("input"),n=S(`
from

`),u=C("select"),o=C("option"),o.textContent=P,y=C("option"),y.textContent=k,h=C("option"),h.textContent=E,x=C("option"),x.textContent=M,z=S(`
to

`),_=C("select"),T=C("option"),T.textContent=A,r=C("option"),r.textContent=i,p=C("option"),p.textContent=v,g=C("option"),g.textContent=Y,D=B(),X=C("br"),F=B(),j=C("button"),j.textContent=Z,G=B(),H=C("textarea"),this.h()},l(f){s=b(f,"H2",{["data-svelte-h"]:!0}),N(s)!=="svelte-mc6fx3"&&(s.textContent=a),l=L(f),t=b(f,"INPUT",{id:!0,type:!0,name:!0}),n=U(f,`
from

`),u=b(f,"SELECT",{name:!0,id:!0});var m=R(u);o=b(m,"OPTION",{["data-svelte-h"]:!0}),N(o)!=="svelte-gutstf"&&(o.textContent=P),y=b(m,"OPTION",{["data-svelte-h"]:!0}),N(y)!=="svelte-9fpb7j"&&(y.textContent=k),h=b(m,"OPTION",{["data-svelte-h"]:!0}),N(h)!=="svelte-re78pk"&&(h.textContent=E),x=b(m,"OPTION",{["data-svelte-h"]:!0}),N(x)!=="svelte-t3o2mg"&&(x.textContent=M),m.forEach(c),z=U(f,`
to

`),_=b(f,"SELECT",{name:!0,id:!0});var q=R(_);T=b(q,"OPTION",{["data-svelte-h"]:!0}),N(T)!=="svelte-gutstf"&&(T.textContent=A),r=b(q,"OPTION",{["data-svelte-h"]:!0}),N(r)!=="svelte-9fpb7j"&&(r.textContent=i),p=b(q,"OPTION",{["data-svelte-h"]:!0}),N(p)!=="svelte-re78pk"&&(p.textContent=v),g=b(q,"OPTION",{["data-svelte-h"]:!0}),N(g)!=="svelte-t3o2mg"&&(g.textContent=Y),q.forEach(c),D=L(f),X=b(f,"BR",{}),F=L(f),j=b(f,"BUTTON",{id:!0,["data-svelte-h"]:!0}),N(j)!=="svelte-xdj0cy"&&(j.textContent=Z),G=L(f),H=b(f,"TEXTAREA",{}),R(H).forEach(c),this.h()},h(){w(t,"id","inp"),w(t,"type","number"),w(t,"name","input"),o.__value="10",I(o,o.__value),y.__value="2",I(y,y.__value),h.__value="8",I(h,h.__value),x.__value="16",I(x,x.__value),w(u,"name","inp1type"),w(u,"id","inp1type"),e[2]===void 0&&tt(()=>e[5].call(u)),T.__value="10",I(T,T.__value),r.__value="2",I(r,r.__value),p.__value="8",I(p,p.__value),g.__value="16",I(g,g.__value),w(_,"name","inp2type"),w(_,"id","inp2type"),e[3]===void 0&&tt(()=>e[6].call(_)),w(j,"id","run"),H.value=e[0]},m(f,m){d(f,s,m),d(f,l,m),d(f,t,m),I(t,e[1]),d(f,n,m),d(f,u,m),O(u,o),O(u,y),O(u,h),O(u,x),J(u,e[2],!0),d(f,z,m),d(f,_,m),O(_,T),O(_,r),O(_,p),O(_,g),J(_,e[3],!0),d(f,D,m),d(f,X,m),d(f,F,m),d(f,j,m),d(f,G,m),d(f,H,m),V||($=[K(t,"input",e[4]),K(u,"change",e[5]),K(_,"change",e[6])],V=!0)},p(f,[m]){m&2&&ct(t.value)!==f[1]&&I(t,f[1]),m&4&&J(u,f[2]),m&8&&J(_,f[3]),m&1&&(H.value=f[0])},i:W,o:W,d(f){f&&(c(s),c(l),c(t),c(n),c(u),c(z),c(_),c(D),c(X),c(F),c(j),c(G),c(H)),V=!1,_t($)}}}function bt(e,s){let a=s,l="dec:"+e+`
`,t="";for(;e>0;){let n=e%a;e=e-n,t=n+t,l+=a+"|"+(e+n)+" "+n+`
`,l+=`  ---------------
`,e=e/a}return l+="base-"+a+": "+t,l}function yt(e,s){let a=0,l=e.length,t="",n="",u=s;for(let o=l-1;o>=0;o--){let y=Math.pow(u,l-1-o)*e[o];a+=y,t+=u+"^("+o+")*"+e[o]+(o!=0?" + ":""),n+=y+(o!=0?" + ":"")}return t+=`
=`+n,t+=`
=`+a,t}function gt(e,s,a){let l="",t="",n,u;function o(h,E){let x=0,M=h.length;a(0,l=""),output0="";let z=E;for(let _=-1;_>=-M;_--){let T=Math.pow(z,_);val=T*h[-1-_],x+=val,a(0,l+=z+"^("+_+")*"+h[-1-_]+(_!=0?" + ":"")),output0+=val+(_!=0?" + ":"")}return a(0,l+=`
=`+output0),a(0,l+=`
=`+x),l}function P(){t=ct(this.value),a(1,t)}function y(){n=et(this),a(2,n)}function k(){u=et(this),a(3,u)}return e.$$.update=()=>{if(e.$$.dirty&15){let h=t+"",E=h.split(".")[0],x=h.split(".")[1];n==u?a(0,l="both types are same"):n==10?a(0,l=bt(E,u)):u==10?(a(0,l=yt(E,n)),console.log("helo:"+l),x&&(console.log("dotnum:"+x),a(0,l+=`


`+o(x,n)))):a(0,l="not supported yet"),console.log(n),console.log(n),console.log(l)}},[l,t,n,u,P,y,k]}class zt extends at{constructor(s){super(),ft(this,s,gt,Ct,it,{})}}function nt(e,s,a){const l=e.slice();return l[3]=s[a],l}function ot(e,s,a){const l=e.slice();return l[6]=s[a],l}function st(e){let s,a=e[6]+"",l;return{c(){s=C("td"),l=S(a),this.h()},l(t){s=b(t,"TD",{class:!0});var n=R(s);l=U(n,a),n.forEach(c),this.h()},h(){w(s,"class","svelte-dizbef")},m(t,n){d(t,s,n),O(s,l)},p:W,d(t){t&&c(s)}}}function ut(e){let s,a,l=Q(e[3].split(",")),t=[];for(let n=0;n<l.length;n+=1)t[n]=st(ot(e,l,n));return{c(){s=C("tr");for(let n=0;n<t.length;n+=1)t[n].c();a=B()},l(n){s=b(n,"TR",{});var u=R(s);for(let o=0;o<t.length;o+=1)t[o].l(u);a=L(u),u.forEach(c)},m(n,u){d(n,s,u);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(s,null);O(s,a)},p(n,u){if(u&4){l=Q(n[3].split(","));let o;for(o=0;o<l.length;o+=1){const P=ot(n,l,o);t[o]?t[o].p(P,u):(t[o]=st(P),t[o].c(),t[o].m(s,a))}for(;o<t.length;o+=1)t[o].d(1);t.length=l.length}},d(n){n&&c(s),pt(t,n)}}}function Tt(e){let s,a="Equation solvers",l,t,n,u,o,P='<th class="svelte-dizbef"></th> <th colspan="2" class="svelte-dizbef">minterms</th> <th colspan="2" class="svelte-dizbef">maxterms</th>',y,k,h,E,x,M,z,_,T,A=Q(e[2].split(`
`)),r=[];for(let i=0;i<A.length;i+=1)r[i]=ut(nt(e,A,i));return M=new zt({}),{c(){s=C("h1"),s.textContent=a,l=S(`

vaisakh `),t=S(e[0]),n=B(),u=C("table"),o=C("tr"),o.innerHTML=P,y=B();for(let i=0;i<r.length;i+=1)r[i].c();k=B(),h=C("button"),E=S(e[0]),x=B(),rt(M.$$.fragment),this.h()},l(i){s=b(i,"H1",{["data-svelte-h"]:!0}),N(s)!=="svelte-6dkxl6"&&(s.textContent=a),l=U(i,`

vaisakh `),t=U(i,e[0]),n=L(i),u=b(i,"TABLE",{class:!0});var p=R(u);o=b(p,"TR",{["data-svelte-h"]:!0}),N(o)!=="svelte-8b3d6t"&&(o.innerHTML=P),y=L(p);for(let g=0;g<r.length;g+=1)r[g].l(p);p.forEach(c),k=L(i),h=b(i,"BUTTON",{});var v=R(h);E=U(v,e[0]),v.forEach(c),x=L(i),ht(M.$$.fragment,i),this.h()},h(){w(u,"class","svelte-dizbef")},m(i,p){d(i,s,p),d(i,l,p),d(i,t,p),d(i,n,p),d(i,u,p),O(u,o),O(u,y);for(let v=0;v<r.length;v+=1)r[v]&&r[v].m(u,null);d(i,k,p),d(i,h,p),O(h,E),d(i,x,p),mt(M,i,p),z=!0,_||(T=K(h,"click",e[1]),_=!0)},p(i,[p]){if((!z||p&1)&&lt(t,i[0]),p&4){A=Q(i[2].split(`
`));let v;for(v=0;v<A.length;v+=1){const g=nt(i,A,v);r[v]?r[v].p(g,p):(r[v]=ut(g),r[v].c(),r[v].m(u,null))}for(;v<r.length;v+=1)r[v].d(1);r.length=A.length}(!z||p&1)&&lt(E,i[0])},i(i){z||(vt(M.$$.fragment,i),z=!0)},o(i){dt(M.$$.fragment,i),z=!1},d(i){i&&(c(s),c(l),c(t),c(n),c(u),c(k),c(h),c(x)),pt(r,i),xt(M,i),_=!1,T()}}}function Ot(e,s,a){let l=3;function t(){a(0,l++,l)}return[l,t,`xyz,term, designatation,term,designatation
000,x'y'z', m0 , x+y+z    , M0
001,x'y'z , m1 , x+y+z'   , M1
010,x'yz' , m2 , x+y'+z   , M2
011,x'yz  , m3 , x+y'+z'  , M3
100,xy'z' , m4 , x'+y+z   , M4
101,xy'z  , m5 , x'+y+z'  , M5
110,xyz'  , m6 , x'+y'+z  , M6
111,xyz   , m7 , x'+y'+z' , M7 `]}class Nt extends at{constructor(s){super(),ft(this,s,Ot,Tt,it,{})}}export{Nt as component};
