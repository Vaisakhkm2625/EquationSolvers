var S=Object.defineProperty;var C=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $=(e,t,n)=>(C(e,typeof t!="symbol"?t+"":t,n),n);import{r as m,n as y,h as w,i as T,j as A,k as j,f as b,l as B,m as D,p as N,q as H,v as L,w as q}from"./scheduler.b95eede2.js";let p=!1;function I(){p=!0}function M(){p=!1}function P(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function O(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const s=[];for(let l=0;l<t.length;l++){const o=t[l];o.claim_order!==void 0&&s.push(o)}t=s}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let s=0;s<t.length;s++){const l=t[s].claim_order,o=(r>0&&t[n[r]].claim_order<=l?r+1:P(1,r,_=>t[n[_]].claim_order,l))-1;i[s]=n[o]+1;const f=o+1;n[f]=s,r=Math.max(f,r)}const u=[],a=[];let c=t.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(u.push(t[s-1]);c>=s;c--)a.push(t[c]);c--}for(;c>=0;c--)a.push(t[c]);u.reverse(),a.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<a.length;s++){for(;l<u.length&&a[s].claim_order>=u[l].claim_order;)l++;const o=l<u.length?u[l]:null;e.insertBefore(a[s],o)}}function R(e,t){if(p){for(O(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,n){p&&!n?R(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function z(e){e.parentNode&&e.parentNode.removeChild(e)}function te(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function F(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function ne(){return x(" ")}function ie(){return x("")}function re(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function se(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function le(e){return e.dataset.svelteH}function ae(e){return e===""?null:+e}function V(e){return Array.from(e.childNodes)}function W(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function E(e,t,n,i,r=!1){W(e);const u=(()=>{for(let a=e.claim_info.last_index;a<e.length;a++){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,r||(e.claim_info.last_index=a),c}}for(let a=e.claim_info.last_index-1;a>=0;a--){const c=e[a];if(t(c)){const s=n(c);return s===void 0?e.splice(a,1):e[a]=s,r?s===void 0&&e.claim_info.last_index--:e.claim_info.last_index=a,c}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function G(e,t,n,i){return E(e,r=>r.nodeName===t,r=>{const u=[];for(let a=0;a<r.attributes.length;a++){const c=r.attributes[a];n[c.name]||u.push(c.name)}u.forEach(a=>r.removeAttribute(a))},()=>i(t))}function ue(e,t,n){return G(e,t,n,F)}function J(e,t){return E(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>x(t),!0)}function ce(e){return J(e," ")}function fe(e,t){t=""+t,e.data!==t&&(e.data=t)}function oe(e,t){e.value=t??""}function de(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function _e(e,t,n){for(let i=0;i<e.options.length;i+=1){const r=e.options[i];if(r.__value===t){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function he(e){const t=e.querySelector(":checked");return t&&t.__value}function me(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${e}_END`?(i-=1,n.push(r)):u===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function pe(e,t){return new e(t)}const h=new Set;let d;function $e(){d={r:0,c:[],p:d}}function ye(){d.r||m(d.c),d=d.p}function K(e,t){e&&e.i&&(h.delete(e),e.i(t))}function xe(e,t,n,i){if(e&&e.o){if(h.has(e))return;h.add(e),d.c.push(()=>{h.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function ge(e){e&&e.c()}function ve(e,t){e&&e.l(t)}function Q(e,t,n){const{fragment:i,after_update:r}=e.$$;i&&i.m(t,n),b(()=>{const u=e.$$.on_mount.map(H).filter(A);e.$$.on_destroy?e.$$.on_destroy.push(...u):m(u),e.$$.on_mount=[]}),r.forEach(b)}function U(e,t){const n=e.$$;n.fragment!==null&&(B(n.after_update),m(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function X(e,t){e.$$.dirty[0]===-1&&(L.push(e),q(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function we(e,t,n,i,r,u,a,c=[-1]){const s=D;N(e);const l=e.$$={fragment:null,ctx:[],props:u,update:y,not_equal:r,bound:w(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:w(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};a&&a(l.root);let o=!1;if(l.ctx=n?n(e,t.props||{},(f,_,...g)=>{const v=g.length?g[0]:_;return l.ctx&&r(l.ctx[f],l.ctx[f]=v)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](v),o&&X(e,f)),_}):[],l.update(),o=!0,m(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){I();const f=V(t.target);l.fragment&&l.fragment.l(f),f.forEach(z)}else l.fragment&&l.fragment.c();t.intro&&K(e.$$.fragment),Q(e,t.target,t.anchor),M(),T()}N(s)}class be{constructor(){$(this,"$$");$(this,"$$set")}$destroy(){U(this,1),this.$destroy=y}$on(t,n){if(!A(n))return y;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!j(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Y);export{oe as A,_e as B,re as C,ae as D,he as E,te as F,be as S,ee as a,ye as b,ce as c,K as d,ie as e,z as f,F as g,ue as h,we as i,V as j,se as k,de as l,x as m,J as n,fe as o,$e as p,pe as q,ge as r,ne as s,xe as t,ve as u,Q as v,U as w,me as x,R as y,le as z};
