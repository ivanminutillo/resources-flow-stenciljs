/*! Built with http://stenciljs.com */
(function(Context,appNamespace,hydratedCssClass,publicPath){"use strict";
var s=document.querySelector("script[data-namespace='oce-kanban']");if(s){publicPath=s.getAttribute('data-path');}
(function(n,t,e,o,i){"use strict";function c(n,t,e,o,i,c,f){let r=e.n+(o||W),u=e[r];if(u||(u=e[r=e.n+W]),u){let o=t.t;if(t.e)if(1===e.encapsulation)o=i.shadowRoot;else for(;i=t.o(i);)if(i.host&&i.host.shadowRoot){o=i.host.shadowRoot;break}const c=n.i.get(o)||{};if(!c[r]){f=u.content.cloneNode(!0);const e=o.querySelectorAll("[data-styles]");t.c(o,f,e.length&&e[e.length-1].nextSibling||o.f),c[r]=!0,n.i.set(o,c)}}}function f(n){return{r:n[0],u:n[1],l:!!n[2],s:!!n[3],a:!!n[4]}}function r(n,t){if(S(t)){if(n===Boolean||3===n)return"false"!==t&&(""===t||!!t);if(n===Number||4===n)return parseFloat(t)}return t}function u(n,t,e,o){const i=n.p.get(t);i&&((o=i.$activeLoading)&&((e=o.indexOf(t))>-1&&o.splice(e,1),!o.length&&i.$initLoad()),n.p.delete(t))}function l(n,t,e){let o,i=!1,c=!1;for(var f=arguments.length;f-- >2;)L.push(arguments[f]);for(;L.length;)if((e=L.pop())&&void 0!==e.pop)for(f=e.length;f--;)L.push(e[f]);else"boolean"==typeof e&&(e=null),(c="function"!=typeof n)&&(null==e?e="":"number"==typeof e?e=String(e):"string"!=typeof e&&(c=!1)),c&&i?o[o.length-1].d+=e:void 0===o?o=[c?s(e):e]:o.push(c?s(e):e),i=c;const r=new A;if(r.m=n,r.w=o,t&&(r.y=t,r.v=t.b,r.M=t.ref,t.className&&(t.class=t.className),"object"==typeof t.class)){for(f in t.class)t.class[f]&&L.push(f);t.class=L.join(" "),L.length=0}return r}function s(n){const t=new A;return t.d=n,t}function a(n,t){n.k.has(t)||(n.k.set(t,!0),n.g.add(()=>{(function n(t,e,o,i,c){if(t.k.delete(e),!t.C.has(e)){let f;if(i=t.W.get(e),o=!i){if((c=t.p.get(e))&&!c.$rendered)return void(c.$onRender=c.$onRender||[]).push(()=>{n(t,e)});i=function f(n,t,e,o,i,c){try{(function f(n,t,e,o,i,c){for(c in n.N.set(o,e),n.j.has(e)||n.j.set(e,{}),(i=Object.assign({color:{type:String}},t.properties)).mode={type:String},i)d(n,i[c],e,o,c)})(n,o=n.x(t).S,t,e=new o)}catch(o){e={},n.O(o,7,t,!0)}return n.W.set(t,e),e}(t,e)}f&&f.then?f.then(()=>p(t,e,i,o)):p(t,e,i,o)}})(n,t)}))}function p(n,t,e,o){(function i(n,t,e,o,c){try{const i=t.S.host;if(o.render||o.hostData||i){n.T=!0;const i=o.render&&o.render();let f;n.T=!1;const r=n.A.get(e)||new A;r.L=e,n.A.set(e,n.render(r,l(null,f,i),c,n.P.get(e),n.R.get(e),t.S.encapsulation))}n.q(n,n.B,t,o.mode,e),e.$rendered=!0,e.$onRender&&(e.$onRender.forEach(n=>n()),e.$onRender=null)}catch(t){n.T=!1,n.O(t,8,e,!0)}})(n,n.x(t),t,e,!o);try{o?t.$initLoad():b(n.A.get(t))}catch(e){n.O(e,6,t,!0)}}function d(n,t,e,o,i){if(t.type||t.state){const c=n.j.get(e);if(!t.state){if(t.attr&&(void 0===c[i]||""===c[i])){const o=n.B.D(e,t.attr);null!=o&&(c[i]=r(t.type,o))}e.hasOwnProperty(i)&&(void 0===c[i]&&(c[i]=e[i]),delete e[i])}o.hasOwnProperty(i)&&void 0===c[i]&&(c[i]=o[i]),t.watchCallbacks&&(c[P+i]=t.watchCallbacks.slice()),h(o,i,function c(t){return(t=n.j.get(n.N.get(this)))&&t[i]},function f(e,o){(o=n.N.get(this))&&(t.state||t.mutable)&&m(n,o,i,e)})}}function m(n,t,e,o,i,c,f){(i=n.j.get(t))||n.j.set(t,i={}),o!==i[e]&&(i[e]=o,n.W.get(t)&&(i[P+e],!n.T&&t.$rendered&&a(n,t)))}function h(n,t,e,o){Object.defineProperty(n,t,{configurable:!0,get:e,set:o})}function w(n,t,e,o,i){const c=11===e.L.nodeType&&e.L.host?e.L.host:e.L,f=t&&t.y||E,r=e.y||E;for(i in f)r&&null!=r[i]||null==f[i]||y(n,c,i,f[i],void 0,o);for(i in r)i in f&&r[i]===("value"===i||"checked"===i?c[i]:f[i])||y(n,c,i,f[i],r[i],o)}function y(n,t,e,o,i,c,f,r){if("class"!==e||c)if("style"===e){for(f in o=o||E,i=i||E,o)i[f]||(t.style[f]="");for(f in i)i[f]!==o[f]&&(t.style[f]=i[f])}else if("o"!==e[0]||"n"!==e[1]||e in t)if("list"!==e&&"type"!==e&&!c&&(e in t||-1!==["object","function"].indexOf(typeof i)&&null!==i)){const o=n.x(t);o&&o.H&&o.H[e]?v(t,e,i):"ref"!==e&&(v(t,e,null==i?"":i),null!=i&&!1!==i||t.removeAttribute(e))}else null!=i&&(f=e!==(e=e.replace(/^xlink\:?/,"")),1!==R[e]||i&&"false"!==i?"function"!=typeof i&&(f?t.setAttributeNS(q,O(e),i):t.setAttribute(e,i)):f?t.removeAttributeNS(q,O(e)):t.removeAttribute(e));else e=O(e.substring(2)),i?i!==o&&n.B.F(t,e,i):n.B.z(t,e);else if(o!==i){const n=null==o||""===o?N:o.trim().split(/\s+/),e=null==i||""===i?N:i.trim().split(/\s+/);let c=null==t.className||""===t.className?N:t.className.trim().split(/\s+/);for(f=0,r=n.length;f<r;f++)-1===e.indexOf(n[f])&&(c=c.filter(t=>t!==n[f]));for(f=0,r=e.length;f<r;f++)-1===n.indexOf(e[f])&&(c=[...c,e[f]]);t.className=c.join(" ")}}function v(n,t,e){try{n[t]=e}catch(n){}}function b(n,t){n&&(n.M&&n.M(t?null:n.L),n.w&&n.w.forEach(n=>{b(n,t)}))}function M(n,t,e,o,i){const c=n.I(t);let f,r,u,l;if(i&&1===c){(r=n.D(t,C))&&(u=r.split("."))[0]===o&&((l=new A).m=n.Q(l.L=t),e.w||(e.w=[]),e.w[u[1]]=l,e=l,i=""!==u[2]);for(let c=0;c<t.childNodes.length;c++)M(n,t.childNodes[c],e,o,i)}else 3===c&&(f=t.previousSibling)&&8===n.I(f)&&"s"===(u=n.U(f).split("."))[0]&&u[1]===o&&((l=s(n.U(t))).L=t,e.w||(e.w=[]),e.w[u[2]]=l)}function $(n,t,e,o){e.connectedCallback=function(){(function e(n,t,o){n.C.delete(o),n.G.has(o)||(n.G.set(o,!0),function i(n,t,e){for(e=t;e=n.B.J(e);)if(n.K(e)){n.V.has(t)||(n.p.set(t,e),(e.$activeLoading=e.$activeLoading||[]).push(t));break}}(n,o),n.g.add(()=>{n.X(t,o),n.loadBundle(t,o.mode,()=>a(n,o))},3))})(n,t,this)},e.attributeChangedCallback=function(n,e,o){(function i(n,t,e,o,c,f){if(o!==c&&n)for(f in e=O(e),n)if(n[f].Y===e){t[f]=r(n[f].Z,c);break}})(t.H,this,n,e,o)},e.disconnectedCallback=function(){(function t(n,e,o){!n._&&function i(n,t){for(;t;){if(!n.o(t))return 9!==n.I(t);t=n.o(t)}}(n.B,e)&&(n.C.set(e,!0),u(n,e),b(n.A.get(e),!0),n.B.z(e),n.nn.delete(e))})(n,this)},e.componentOnReady=function(t,e){return t||(e=new Promise(n=>t=n)),function o(n,t,e,i){n.C.has(t)||(n.V.has(t)?e(t):((i=n.tn.get(t)||[]).push(e),n.tn.set(t,i)))}(n,this,t),e},e.$initLoad=function(){(function t(n,e,o,i,c){if(!n.V.has(e)&&n.W.get(e)&&!n.C.has(e)&&(!e.$activeLoading||!e.$activeLoading.length)){delete e.$activeLoading,n.V.set(e,!0);try{b(n.A.get(e)),(c=n.tn.get(e))&&(c.forEach(n=>n(e)),n.tn.delete(e))}catch(t){n.O(t,4,e)}e.classList.add(o),u(n,e)}})(n,this,o)},e.en=function(){a(n,this)},function i(n,t,e){t&&Object.keys(t).forEach(o=>{const i=t[o].on;1===i||2===i?h(e,o,function t(){return(n.j.get(this)||{})[o]},function t(e){m(n,this,o,e)}):6===i&&function c(n,t,e){Object.defineProperty(n,t,{configurable:!0,value:e})}(e,o,T)})}(n,t.H,e)}function k(n,t,e,o){return function(){const i=arguments;return function c(n,t,e){return new Promise(o=>{let i=t[e];i||(i=n.in.querySelector(e)),i||(i=t[e]=n.cn(e),n.fn(n.in,i)),i.componentOnReady(o)})}(n,t,e).then(n=>n[o].apply(n,i))}}const g="data-ssrv",C="data-ssrc",W="$",E={},N=[],j={enter:13,escape:27,space:32,tab:9,left:37,up:38,right:39,down:40},S=n=>void 0!==n&&null!==n,x=n=>void 0===n||null===n,O=n=>n.toLowerCase(),T=()=>{};class A{}const L=[],P="wc-",R={allowfullscreen:1,async:1,autofocus:1,autoplay:1,checked:1,controls:1,disabled:1,enabled:1,formnovalidate:1,hidden:1,multiple:1,noresize:1,readonly:1,required:1,selected:1,spellcheck:1},q="http://www.w3.org/1999/xlink";let B=!1;const D=n[o]=n[o]||{};{const o=function H(t,e,o,i,r,u){const s={html:{}},a={},p=function d(n,t){const e=new WeakMap,o={rn:t.documentElement,t:t.head,in:t.body,un:!1,I:n=>n.nodeType,cn:n=>t.createElement(n),ln:(n,e)=>t.createElementNS(n,e),sn:n=>t.createTextNode(n),an:n=>t.createComment(n),c:(n,t,e)=>n.insertBefore(t,e),pn:n=>n.remove(),fn:(n,t)=>n.appendChild(t),dn:n=>n.childNodes,o:n=>n.parentNode,mn:n=>n.nextSibling,Q:n=>O(n.tagName),U:n=>n.textContent,hn:(n,t)=>n.textContent=t,D:(n,t)=>n.getAttribute(t),wn:(n,t,e)=>n.setAttribute(t,e),yn:(n,t,e,o)=>n.setAttributeNS(t,e,o),vn:(n,t)=>n.removeAttribute(t),bn:(e,i)=>"child"===i?e.firstElementChild:"parent"===i?o.J(e):"body"===i?o.in:"document"===i?t:"window"===i?n:e,F:(n,t,i,c,f,r,u,l)=>{const s=t;let a=n,p=e.get(n);if(p&&p[s]&&p[s](),"string"==typeof r?a=o.bn(n,r):"object"==typeof r?a=r:(l=t.split(":")).length>1&&(a=o.bn(n,l[0]),t=l[1]),!a)return;let d=i;(l=t.split(".")).length>1&&(t=l[0],d=(n=>{n.keyCode===j[l[1]]&&i(n)})),u=o.un?{capture:!!c,passive:!!f}:!!c,a.addEventListener(t,d,u),p||e.set(n,p={}),p[s]=(()=>{a&&a.removeEventListener(t,d,u),p[s]=null})},z:(n,t)=>{const o=e.get(n);o&&(t?o[t]&&o[t]():Object.keys(o).forEach(n=>{o[n]&&o[n]()}))},Mn:(n,t)=>n.attachShadow(t)};return o.e=!!o.rn.attachShadow,o.J=((n,t)=>(t=o.o(n))&&11===o.I(t)?t.host:t),o}(o,i);t.isServer=t.isPrerender=!(t.isClient=!0),t.window=o,t.location=o.location,t.document=i,t.publicPath=r,e.h=l,e.Context=t;const m=o.$definedCmps=o.$definedCmps||{},h={X:function y(n,e){e.mode||(e.mode=p.D(e,"mode")||t.mode),p.D(e,g)||function o(n,t){return n&&1===t.encapsulation}(p.e,n)||function i(n,t,e,o,c,f,r,u,l){for(e.$defaultHolder||t.c(e,e.$defaultHolder=t.an(""),o[0]),l=0;l<o.length;l++)c=o[l],1===t.I(c)&&null!=(f=t.D(c,"slot"))?(u=u||{})[f]?u[f].push(c):u[f]=[c]:r?r.push(c):r=[c];n.P.set(e,r),n.R.set(e,u)}(h,p,e,e.childNodes),p.e||1!==n.encapsulation||(e.shadowRoot=e)},B:p,$n:function v(n,t){if(!m[n.n]){m[n.n]=!0,$(h,n,t.prototype,u);{const e=[];for(const t in n.H)n.H[t].Y&&e.push(n.H[t].Y);t.observedAttributes=e}o.customElements.define(n.n,t)}},kn:t.emit,x:n=>s[p.Q(n)],gn:n=>t[n],isClient:!0,K:n=>!(!m[p.Q(n)]&&!h.x(n)),loadBundle:function b(n,t,e){if(n.S)e();else{const o="string"==typeof n.Cn?n.Cn:n.Cn[t],i=r+o+(function o(n,t){return 2===t.encapsulation||1===t.encapsulation&&!n}(p.e,n)?".sc":"")+".js";import(i).then(t=>{try{n.S=t[(n=>O(n).split("-").map(n=>n.charAt(0).toUpperCase()+n.slice(1)).join(""))(n.n)],function o(n,t,e){const o=e.style;if(o){const i=e.is+(e.styleMode||W);if(!t[i]){const e=n.cn("template");t[i]=e,e.innerHTML=`<style>${o}</style>`,n.fn(n.t,e)}}}(p,n,n.S)}catch(t){n.S=class{}}e()}).catch(n=>void 0)}},O:(n,t,e)=>void 0,Wn:n=>(function t(n,e,o){return{create:k(n,e,o,"create"),componentOnReady:k(n,e,o,"componentOnReady")}})(p,a,n),g:function C(t,e,o){function i(){for(;s.length>0;)s.shift()();e=!1}function c(n){for(n=r(),i();a.length>0&&r()-n<40;)a.shift()();(o=a.length>0)&&u(f)}function f(n){for(i(),n=4+r();a.length>0&&r()<n;)a.shift()();(o=a.length>0)&&u(c)}const r=()=>t.performance.now(),u=t=>n.requestAnimationFrame(t),l=Promise.resolve(),s=[],a=[];return{add:(n,t)=>{3===t?(s.push(n),e||(e=!0,l.then(i))):(a.push(n),o||(o=!0,u(c)))}}}(o),En:n=>(n||[]).map(n=>(function t(n,e,o,i){const c={n:n[0],H:{color:{Y:"color"}}};c.Cn=n[1];const r=n[3];if(r)for(o=0;o<r.length;o++)i=r[o],c.H[i[0]]={on:i[1],Y:"string"==typeof i[2]?i[2]:i[2]?i[0]:0,Z:i[3]};return c.encapsulation=n[4],n[5]&&(c.Nn=n[5].map(f)),e[c.n]=c})(n,s)),p:new WeakMap,i:new WeakMap,P:new WeakMap,G:new WeakMap,nn:new WeakMap,V:new WeakMap,N:new WeakMap,W:new WeakMap,C:new WeakMap,k:new WeakMap,R:new WeakMap,tn:new WeakMap,jn:new WeakMap,A:new WeakMap,j:new WeakMap};h.render=function E(n,t){function e(o,i,f,r,u,l,m,h,y){if("function"==typeof o.m&&(o=o.m(Object.assign({},o.y,{Sn:o.w}))),!p&&"slot"===o.m){if((s||a)&&(d&&t.wn(i,d+"-slot",""),m=o.y&&o.y.name,h=S(m)?a&&a[m]:s,S(h))){for(n._=!0,r=0;r<h.length;r++)l=h[r],t.pn(l),t.fn(i,l),8!==l.nodeType&&(y=!0);!y&&o.w&&c(i,[],o.w),n._=!1}return null}if(S(o.d))o.L=t.sn(o.d);else{u=o.L=t.cn(o.m),w(n,null,o,B),null!==d&&u.xn!==d&&t.wn(u,u.xn=d,"");const i=o.w;if(i)for(r=0;r<i.length;++r)(l=e(i[r],u))&&t.fn(u,l)}return o.L}function o(n,o,i,c,f,r,u){const l=n.$defaultHolder&&t.o(n.$defaultHolder)||n;for(;c<=f;++c)u=i[c],S(u)&&(r=S(u.d)?t.sn(u.d):e(u,n),S(r)&&(u.L=r,t.c(l,r,o)))}function i(n,e,o){for(;e<=o;++e)S(n[e])&&t.pn(n[e].L)}function c(n,c,l){let s,a,p,d,m=0,h=0,w=c.length-1,y=c[0],v=c[w],b=l.length-1,M=l[0],$=l[b];for(;m<=w&&h<=b;)null==y?y=c[++m]:null==v?v=c[--w]:null==M?M=l[++h]:null==$?$=l[--b]:f(y,M)?(u(y,M),y=c[++m],M=l[++h]):f(v,$)?(u(v,$),v=c[--w],$=l[--b]):f(y,$)?(u(y,$),t.c(n,y.L,t.mn(v.L)),y=c[++m],$=l[--b]):f(v,M)?(u(v,M),t.c(n,v.L,y.L),v=c[--w],M=l[++h]):(x(s)&&(s=r(c,m,w)),a=s[M.v],x(a)?(d=e(M,n),M=l[++h]):((p=c[a]).m!==M.m?d=e(M,n):(u(p,M),c[a]=void 0,d=p.L),M=l[++h]),d&&t.c(y.L&&y.L.parentNode||n,d,y.L));m>w?o(n,null==l[b+1]?null:l[b+1].L,l,h,b):h>b&&i(c,m,w)}function f(n,t){return n.m===t.m&&n.v===t.v}function r(n,t,e){const o={};let i,c,f;for(i=t;i<=e;++i)null!=(f=n[i])&&void 0!==(c=f.v)&&(o.On=i);return o}function u(e,f){const r=f.L=e.L,u=e.w,l=f.w;let s;if(x(f.d))"slot"!==f.m&&w(n,e,f,B),S(u)&&S(l)?c(r,u,l):S(l)?(S(e.d)&&t.hn(r,""),o(r,null,l,0,l.length-1)):S(u)&&i(u,0,u.length-1);else if(s=n.P.get(r)){const e=s[0].parentElement;t.hn(e,f.d),n.P.set(r,[e.childNodes[0]])}else e.d!==f.d&&t.hn(r,f.d)}let l,s,a,p,d;return function n(e,o,i,c,f,r,m){return l=i,s=c,a=f,d="scoped"===r||"shadow"===r&&!t.e?"data-"+t.Q(e.L):null,p="shadow"===r&&t.e,l||(p?e.L=t.Mn(e.L,{mode:"open"}):d&&t.wn(e.L,d+"-host","")),u(e,o),o}}(h,p);const N=p.rn;return N.$rendered=!0,N.$activeLoading=[],N.$initLoad=(()=>h.V.set(N,!0)),function T(n,t,e){const o=e.querySelectorAll(`[${g}]`),i=o.length;let c,f,r,u,l,s;if(i>0)for(n.V.set(e,!0),u=0;u<i;u++)for(c=o[u],f=t.D(c,g),(r=new A).m=t.Q(r.L=c),n.A.set(c,r),l=0,s=c.childNodes.length;l<s;l++)M(t,c.childNodes[l],r,f,!0)}(h,p,N),h.q=c,h}(e,D,n,t,i,hydratedCssClass);o.En(D.components).forEach(n=>o.$n(n,class extends HTMLElement{}))}})(window,document,Context,appNamespace,publicPath);
})({},"OceKanban","hydrated","/build/oce-kanban/");