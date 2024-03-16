import{s as ae,o as se,e as p,a as y,c as h,b as x,g as z,d as $,h as v,i as l,w as le,j as q,k as u,u as ie,q as re,r as ne,m as oe,y as de,t as ce,f as ue}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as me,i as fe,c as N,b as O,m as P,t as H,a as T,d as B}from"../chunks/index.BimWP6M-.js";import{e as Z}from"../chunks/each.D6YF6ztN.js";import{p as pe}from"../chunks/stores.BX7x8xxT.js";import{F as he}from"../chunks/Footer.G9kACOQ1.js";import{S as ve,A as ge}from"../chunks/Ads.CfgPmYK-.js";/* empty css                                    */function ee(m,e,a){const c=m.slice();return c[5]=e[a],c}function _e(m){let e,a,c="Tags",f,o=Z(m[1]),t=[];for(let s=0;s<o.length;s+=1)t[s]=te(ee(m,o,s));return{c(){e=p("ul"),a=p("li"),a.textContent=c,f=y();for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=h(s,"UL",{class:!0});var i=x(e);a=h(i,"LI",{class:!0,"data-svelte-h":!0}),z(a)!=="svelte-slrl5a"&&(a.textContent=c),f=$(i);for(let r=0;r<t.length;r+=1)t[r].l(i);i.forEach(v),this.h()},h(){l(a,"class","menu-title"),l(e,"class","menu menu-horizontal lg:menu-vertical lg:w-56")},m(s,i){q(s,e,i),u(e,a),u(e,f);for(let r=0;r<t.length;r+=1)t[r]&&t[r].m(e,null)},p(s,i){if(i&3){o=Z(s[1]);let r;for(r=0;r<o.length;r+=1){const g=ee(s,o,r);t[r]?t[r].p(g,i):(t[r]=te(g),t[r].c(),t[r].m(e,null))}for(;r<t.length;r+=1)t[r].d(1);t.length=o.length}},d(s){s&&v(e),de(t,s)}}}function te(m){let e,a,c=m[5]+"",f,o,t;return{c(){e=p("li"),a=p("a"),f=ce(c),t=y(),this.h()},l(s){e=h(s,"LI",{});var i=x(e);a=h(i,"A",{"data-sveltekit-reload":!0,href:!0,class:!0});var r=x(a);f=ue(r,c),r.forEach(v),t=$(i),i.forEach(v),this.h()},h(){l(a,"data-sveltekit-reload",""),l(a,"href",`/blog/tag/${m[5].replace(/ /g,"-").toLowerCase()}`),l(a,"class",o=m[5].replace(/ /g,"-").toLowerCase()===m[0].url.pathname.split("/").at(-2)&&"active")},m(s,i){q(s,e,i),u(e,a),u(a,f),u(e,t)},p(s,i){i&1&&o!==(o=s[5].replace(/ /g,"-").toLowerCase()===s[0].url.pathname.split("/").at(-2)&&"active")&&l(a,"class",o)},d(s){s&&v(e)}}}function be(m){let e,a,c,f,o,t,s='<div class="flex items-center gap-3"><a href="/blog" class="inline-block hover:opacity-80"><h1 class="font-title text-base-content text-xl font-extrabold">daisyUI blog</h1></a> <div class="tooltip tooltip-right" data-tip="RSS"><a target="_blank" href="https://daisyui.com/blog/rss.xml" class="hover:text-warning"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path d="M3.75 3a.75.75 0 00-.75.75v.5c0 .414.336.75.75.75H4c6.075 0 11 4.925 11 11v.25c0 .414.336.75.75.75h.5a.75.75 0 00.75-.75V16C17 8.82 11.18 3 4 3h-.25z"></path><path d="M3 8.75A.75.75 0 013.75 8H4a8 8 0 018 8v.25a.75.75 0 01-.75.75h-.5a.75.75 0 01-.75-.75V16a6 6 0 00-6-6h-.25A.75.75 0 013 9.25v-.5zM7 15a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></a></div></div> <p class="text-base-content/60 text-xs italic">Updates, ideas and resources</p>',i,r,g,U,k,Y=`<div class="card-body flex flex-col gap-4"><h2 class="text-xl font-black lg:text-4xl">Don&#39;t miss new posts!</h2> <div><p class="font-bold">Subscribe to daisyUI blog newsletter to get updates on new posts.</p> <p class="text-base-content/60 text-xs">You will only receive a single email when a new blog post is published. No spam. No
                ads.</p></div> <div id="mc_embed_signup"><form action="https://gmail.us8.list-manage.com/subscribe/post?u=42813cff910e47b1bd132369a&amp;id=9fd7333f07&amp;f_id=003d03e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" novalidate=""><input type="checkbox" name="group[347002][4]" value="1" class="hidden" checked=""/> <div class="form-control w-full max-w-sm"><label class="label" for="mce-EMAIL"><span class="label-text">Email Address</span></label> <div class="join"><input type="email" name="EMAIL" class="join-item input input-bordered w-full max-w-sm" id="mce-EMAIL" placeholder="mail@site.com" required=""/> <button name="subscribe" class="join-item btn btn-success">Subscribe</button></div></div> <div aria-hidden="true" class="hidden"><input type="text" name="b_42813cff910e47b1bd132369a_9fd7333f07" tabindex="-1" value=""/></div></form></div></div>`,Q,d,G="",J,R,E,I,F,C,V,L,D,w=m[1].length>0&&_e(m);const K=m[4].default,_=se(K,m,m[3],null);return I=new ve({props:{wrapperClasses:"flex-col sm:flex-row"}}),C=new ge({props:{slot:"carbon2"}}),L=new he({}),{c(){e=p("div"),a=p("div"),c=p("div"),f=p("div"),o=p("div"),t=p("div"),t.innerHTML=s,i=y(),w&&w.c(),r=y(),g=p("div"),_&&_.c(),U=y(),k=p("div"),k.innerHTML=Y,Q=y(),d=p("script"),d.innerHTML=G,R=y(),E=p("div"),N(I.$$.fragment),F=y(),N(C.$$.fragment),V=y(),N(L.$$.fragment),this.h()},l(n){e=h(n,"DIV",{class:!0,dir:!0});var b=x(e);a=h(b,"DIV",{class:!0});var A=x(a);c=h(A,"DIV",{class:!0});var S=x(c);f=h(S,"DIV",{class:!0});var W=x(f);o=h(W,"DIV",{class:!0});var j=x(o);t=h(j,"DIV",{class:!0,"data-svelte-h":!0}),z(t)!=="svelte-10dkcr7"&&(t.innerHTML=s),i=$(j),w&&w.l(j),j.forEach(v),W.forEach(v),r=$(S),g=h(S,"DIV",{class:!0});var M=x(g);_&&_.l(M),U=$(M),k=h(M,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),z(k)!=="svelte-2gn2rs"&&(k.innerHTML=Y),Q=$(M),d=h(M,"SCRIPT",{src:!0,"data-repo":!0,"data-repo-id":!0,"data-category":!0,"data-category-id":!0,"data-strict":!0,"data-reactions-enabled":!0,"data-emit-metadata":!0,"data-input-position":!0,"data-theme":!0,"data-lang":!0,"data-loading":!0,crossorigin:!0,"data-svelte-h":!0}),z(d)!=="svelte-159g2lz"&&(d.innerHTML=G),M.forEach(v),S.forEach(v),R=$(A),E=h(A,"DIV",{class:!0});var X=x(E);O(I.$$.fragment,X),X.forEach(v),A.forEach(v),F=$(b),O(C.$$.fragment,b),b.forEach(v),V=$(n),O(L.$$.fragment,n),this.h()},h(){l(t,"class","mb-8 px-6"),l(o,"class","sticky top-32 mx-auto sm:max-w-none"),l(f,"class","max-w-2xl max-lg:mx-auto max-lg:w-full"),l(k,"id","mc_embed_shell"),l(k,"class","card bg-base-200 my-10"),le(d.src,J="https://giscus.app/client.js")||l(d,"src",J),l(d,"data-repo","daisyui/blog-discussions"),l(d,"data-repo-id","R_kgDOK3Q31Q"),l(d,"data-category","comments"),l(d,"data-category-id","DIC_kwDOK3Q31c4CbliP"),l(d,"data-strict","0"),l(d,"data-reactions-enabled","0"),l(d,"data-emit-metadata","0"),l(d,"data-input-position","top"),l(d,"data-theme","dark_dimmed"),l(d,"data-lang","en"),l(d,"data-loading","lazy"),l(d,"crossorigin","anonymous"),d.async=!0,l(g,"class","mx-auto w-full max-w-2xl"),l(c,"class","flex min-h-[50vh] w-full flex-col justify-center gap-6 p-4 lg:flex-row"),l(E,"class","flex justify-center xl:hidden"),l(a,"class","w-full max-w-none flex-grow pt-10"),l(e,"class","flex flex-col-reverse justify-between gap-6 xl:flex-row"),l(e,"dir","ltr")},m(n,b){q(n,e,b),u(e,a),u(a,c),u(c,f),u(f,o),u(o,t),u(o,i),w&&w.m(o,null),u(c,r),u(c,g),_&&_.m(g,null),u(g,U),u(g,k),u(g,Q),u(g,d),u(a,R),u(a,E),P(I,E,null),u(e,F),P(C,e,null),q(n,V,b),P(L,n,b),D=!0},p(n,[b]){n[1].length>0&&w.p(n,b),_&&_.p&&(!D||b&8)&&ie(_,K,n,n[3],D?ne(K,n[3],b,null):re(n[3]),null)},i(n){D||(H(_,n),H(I.$$.fragment,n),H(C.$$.fragment,n),H(L.$$.fragment,n),D=!0)},o(n){T(_,n),T(I.$$.fragment,n),T(C.$$.fragment,n),T(L.$$.fragment,n),D=!1},d(n){n&&(v(e),v(V)),w&&w.d(),_&&_.d(n),B(I),B(C),B(L,n)}}}function xe(m,e,a){let c;oe(m,pe,i=>a(0,c=i));let{$$slots:f={},$$scope:o}=e,{data:t}=e,{tags:s}=t;return m.$$set=i=>{"data"in i&&a(2,t=i.data),"$$scope"in i&&a(3,o=i.$$scope)},[c,s,t,o,f]}class Ee extends me{constructor(e){super(),fe(this,e,xe,be,ae,{data:2})}}export{Ee as component};
