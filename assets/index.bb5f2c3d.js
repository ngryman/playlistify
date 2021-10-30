var t=Object.defineProperty,e=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(e,s,n)=>s in e?t(e,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[s]=n,o=(t,e)=>{for(var s in e||(e={}))a.call(e,s)&&i(t,s,e[s]);if(n)for(var s of n(e))r.call(e,s)&&i(t,s,e[s]);return t},c=(t,n)=>e(t,s(n));import{d as l,r as u,w as m,g as p,S as f,i as d,s as g,e as y,a as h,b as $,c as w,f as k,h as v,j as b,l as P,n as _,k as x,m as S,o as U,p as O,q as L,t as A,u as E,v as j,x as I,y as T,z as D,A as B,B as M,C as R,D as q,E as N,F as z,G as F,H}from"./vendor.e5bd809c.js";let Y;async function C(t,e){await G(`playlists/${e.id}/tracks`,{method:"DELETE",body:{tracks:[{uri:`spotify:track:${t.id}`}]}})}async function G(t,e={}){Y||await async function(){const t=new URLSearchParams(location.search);if(t.has("error"))return void alert(t.get("error"));const e=new URLSearchParams(location.hash.replace("#","?"));if(e.has("access_token")){if(e.get("state")!==localStorage.getItem("classify:state"))return void alert("You're not you!");const t=e.get("access_token");return Y=t,localStorage.removeItem("classify:state"),void history.replaceState({},"","/")}const s=Math.random().toString().slice(2);localStorage.setItem("classify:state",s);const n={client_id:"abb2dad84deb48998ca4f526a7c0cc2f",response_type:"token",redirect_uri:location.origin,state:s,scope:encodeURI("playlist-read-private user-read-playback-state user-modify-playback-state")},a=new URLSearchParams(n).toString();location.replace(`https://accounts.spotify.com/authorize?${a}`)}();const{method:s="GET",search:n={},body:a}=e,r=new URLSearchParams(n).toString(),i=await fetch(`https://api.spotify.com/v1/${t}${r?`?${r}`:""}`,{method:s,headers:{authorization:`Bearer ${Y}`},body:a?JSON.stringify(a):void 0});if(204!==i.status){return await i.json()}}const X=u([],(t=>{!async function(t){const e=await async function(){const{items:t}=await G("me/playlists",{search:{limit:50}});return t.filter((t=>"ngryman"===t.owner.display_name)).map((t=>({id:t.id,name:t.name,description:t.description,imageUrl:t.images.length>0?t.images[Math.min(1,t.images.length-1)].url:"",link:t.href,total_tracks:t.tracks.total})))}();t(e)}(t)})),J=m([],(t=>{X.subscribe((e=>{t(e.filter((t=>"INBOX"!==t.name)))}))})),V=m([]),K=m(-1),Q=l(X,((t,e)=>{const s=t.find((t=>"INBOX"===t.name));s&&e(s)}));function W(t){p(V).find((e=>e.id===t.id))?V.update((e=>e.filter((e=>e.id!==t.id)))):V.update((e=>[...e,t]))}const Z=m([],(t=>{Q.subscribe((async e=>{if(!e)return;const s=await async function(t){const{items:e}=await G(`playlists/${t.id}/tracks`,{search:{fields:"items(track(id,name,href,duration_ms,album(images),artists(name)))"}});return e.map((({track:t})=>({id:t.id,name:t.name,artist:t.artists[0].name,duration_ms:t.duration_ms,imageUrl:t.album.images.length>0?t.album.images[Math.min(1,t.album.images.length-1)].url:"",link:t.href})))}(e);t(s)}))})),tt=m(0),et=l([Z,tt],(([t,e])=>t[e]));async function st(t,e){J.update((t=>t.map((t=>c(o({},t),{total_tracks:e.find((e=>e.id===t.id))?t.total_tracks+1:t.total_tracks})))));const s=p(Q);await Promise.all([...e.map((e=>async function(t,e){await G(`playlists/${e.id}/tracks?position=0&uris=spotify:track:${t.id}`,{method:"POST"})}(t,e))),C(t,s)])}const nt=m(void 0,(t=>{!async function(t){const e=await async function(){const{devices:t}=await G("me/player/devices");return t}();t(e)}(t)}));const at=m({isPlaying:!1,position:0});async function rt(t,e){nt.subscribe((s=>{s&&(0===s.length&&alert("Please start Spotify on your computer"),at.update((t=>c(o({},t),{position:e}))),async function(t,e,s){await G(`me/player/play?device_id=${t.id}`,{method:"PUT",body:{uris:[`spotify:track:${e.id}`],position_ms:s}})}(s[0],t,e))}))}async function it(){nt.subscribe((t=>{t&&(0===t.length&&alert("Please start Spotify on your computer"),async function(t){await G(`me/player/pause?device_id=${t.id}`,{method:"PUT"})}(t[0]))}))}async function ot(t){nt.subscribe((e=>{e&&(0===e.length&&alert("Please start Spotify on your computer"),async function(t,e){await G(`me/player/seek?device_id=${t.id}&position_ms=${Math.round(e)}`,{method:"PUT"})}(e[0],t))}))}function ct(t){let e,s,n,a,r,i,o,c,l,u,m,p,f,d;return{c(){e=y("track-controls"),s=y("progress"),a=h(),r=y("button"),r.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="svelte-s2am86"><use href="#icon-fast-backward" fill="#ccc" class="svelte-s2am86"></use></svg>',i=h(),o=y("button"),c=$("svg"),l=$("use"),m=h(),p=y("button"),p.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="svelte-s2am86"><use href="#icon-fast-forward" fill="#ccc" class="svelte-s2am86"></use></svg>',s.value=t[1],w(s,"max",n=t[2].duration_ms),w(s,"class","svelte-s2am86"),w(r,"class","seek svelte-s2am86"),w(l,"href",u=t[0].isPlaying?"#icon-pause":"#icon-play"),w(l,"fill","#111"),w(l,"class","svelte-s2am86"),w(c,"xmlns","http://www.w3.org/2000/svg"),w(c,"class","svelte-s2am86"),w(o,"class","play svelte-s2am86"),w(p,"class","seek svelte-s2am86"),k(e,"class","svelte-s2am86")},m(n,u){v(n,e,u),b(e,s),b(e,a),b(e,r),b(e,i),b(e,o),b(o,c),b(c,l),b(e,m),b(e,p),f||(d=[P(window,"keydown",t[5]),P(r,"click",t[6]),P(o,"click",t[3]),P(p,"click",t[7])],f=!0)},p(t,[e]){2&e&&(s.value=t[1]),4&e&&n!==(n=t[2].duration_ms)&&w(s,"max",n),1&e&&u!==(u=t[0].isPlaying?"#icon-pause":"#icon-play")&&w(l,"href",u)},i:_,o:_,d(t){t&&x(e),f=!1,S(d)}}}function lt(t,e,s){let n,a,r;U(t,at,(t=>s(0,a=t))),U(t,et,(t=>s(2,r=t)));let i=0,o=0;function c(t){i=requestAnimationFrame(c),0===o&&(o=t),L(at,a.position+=t-o,a),a.position>r.duration_ms&&L(at,a.position=0,a),o=t}function l(){console.log(a.isPlaying),a.isPlaying?it():rt(r,a.position),L(at,a.isPlaying=!a.isPlaying,a),i=requestAnimationFrame(c)}function u(t){L(at,a.position+=1e3*t,a),a.position<0?L(at,a.position=0,a):a.position>r.duration_ms&&L(at,a.position=r.duration_ms,a),ot(a.position)}function m(){!async function(){p(tt)<p(Z).length-1&&tt.update((t=>t+1))}(),a.isPlaying?rt(r,0):L(at,a.position=0,a)}function f(){!async function(){p(tt)>0&&tt.update((t=>t-1))}(),a.isPlaying?rt(r,0):L(at,a.position=0,a)}O((()=>{cancelAnimationFrame(i)}));return t.$$.update=()=>{1&t.$$.dirty&&s(1,n=1e3*Math.floor(a.position/1e3))},[a,n,r,l,u,function(t){switch(t.stopPropagation(),t.key){case"s":l();break;case"a":u(-30);break;case"d":u(30);break;case"w":m();break;case"q":f()}},()=>u(-30),()=>u(30)]}class ut extends f{constructor(t){super(),d(this,t,lt,ct,g,{})}}function mt(t){let e,s,n,a,r,i,o,c,l,u=t[0].name+"",m=t[0].artist+"";return{c(){e=y("track-view"),s=y("img"),a=h(),r=y("strong"),i=A(u),o=h(),c=y("em"),l=A(m),E(s.src,n=t[0].imageUrl)||w(s,"src",n),w(s,"alt",""),w(s,"class","svelte-1ex6vun"),w(c,"class","svelte-1ex6vun"),k(e,"class","svelte-1ex6vun")},m(t,n){v(t,e,n),b(e,s),b(e,a),b(e,r),b(r,i),b(e,o),b(e,c),b(c,l)},p(t,[e]){1&e&&!E(s.src,n=t[0].imageUrl)&&w(s,"src",n),1&e&&u!==(u=t[0].name+"")&&j(i,u),1&e&&m!==(m=t[0].artist+"")&&j(l,m)},i:_,o:_,d(t){t&&x(e)}}}function pt(t,e,s){let{track:n}=e;return t.$$set=t=>{"track"in t&&s(0,n=t.track)},[n]}class ft extends f{constructor(t){super(),d(this,t,pt,mt,g,{track:0})}}function dt(t){let e,s,n,a,r;return s=new ft({props:{track:t[0]}}),a=new ut({}),{c(){e=y("track-item"),I(s.$$.fragment),n=h(),I(a.$$.fragment),k(e,"class","svelte-1crzueq")},m(t,i){v(t,e,i),T(s,e,null),b(e,n),T(a,e,null),r=!0},p(t,[e]){const n={};1&e&&(n.track=t[0]),s.$set(n)},i(t){r||(D(s.$$.fragment,t),D(a.$$.fragment,t),r=!0)},o(t){B(s.$$.fragment,t),B(a.$$.fragment,t),r=!1},d(t){t&&x(e),M(s),M(a)}}}function gt(t,e,s){let{track:n}=e;return t.$$set=t=>{"track"in t&&s(0,n=t.track)},[n]}class yt extends f{constructor(t){super(),d(this,t,gt,dt,g,{track:0})}}function ht(t){let e,s,n=t[0].name+"";return{c(){e=y("x-track"),s=A(n),k(e,"class","svelte-gk7188"),R(e,"current",t[1])},m(t,n){v(t,e,n),b(e,s)},p(t,[a]){1&a&&n!==(n=t[0].name+"")&&j(s,n),2&a&&R(e,"current",t[1])},i:_,o:_,d(t){t&&x(e)}}}function $t(t,e,s){let{track:n}=e,{current:a=!1}=e;return t.$$set=t=>{"track"in t&&s(0,n=t.track),"current"in t&&s(1,a=t.current)},[n,a]}class wt extends f{constructor(t){super(),d(this,t,$t,ht,g,{track:0,current:1})}}function kt(t,e,s){const n=t.slice();return n[3]=e[s],n[5]=s,n}function vt(t){let e,s,n;return s=new yt({props:{track:t[0]}}),{c(){e=y("li"),I(s.$$.fragment),w(e,"class","svelte-wbvhb9")},m(t,a){v(t,e,a),T(s,e,null),n=!0},p(t,e){const n={};1&e&&(n.track=t[0]),s.$set(n)},i(t){n||(D(s.$$.fragment,t),n=!0)},o(t){B(s.$$.fragment,t),n=!1},d(t){t&&x(e),M(s)}}}function bt(t){let e,s,n;return s=new wt({props:{track:t[3],current:t[5]===t[2]}}),{c(){e=y("li"),I(s.$$.fragment),w(e,"class","svelte-wbvhb9")},m(t,a){v(t,e,a),T(s,e,null),n=!0},p(t,e){const n={};2&e&&(n.track=t[3]),4&e&&(n.current=t[5]===t[2]),s.$set(n)},i(t){n||(D(s.$$.fragment,t),n=!0)},o(t){B(s.$$.fragment,t),n=!1},d(t){t&&x(e),M(s)}}}function Pt(t){let e,s,n,a=t[0]&&vt(t),r=t[1],i=[];for(let c=0;c<r.length;c+=1)i[c]=bt(kt(t,r,c));const o=t=>B(i[t],1,1,(()=>{i[t]=null}));return{c(){e=y("ul"),a&&a.c(),s=h();for(let t=0;t<i.length;t+=1)i[t].c();w(e,"class","svelte-wbvhb9")},m(t,r){v(t,e,r),a&&a.m(e,null),b(e,s);for(let s=0;s<i.length;s+=1)i[s].m(e,null);n=!0},p(t,[n]){if(t[0]?a?(a.p(t,n),1&n&&D(a,1)):(a=vt(t),a.c(),D(a,1),a.m(e,s)):a&&(q(),B(a,1,1,(()=>{a=null})),N()),6&n){let s;for(r=t[1],s=0;s<r.length;s+=1){const a=kt(t,r,s);i[s]?(i[s].p(a,n),D(i[s],1)):(i[s]=bt(a),i[s].c(),D(i[s],1),i[s].m(e,null))}for(q(),s=r.length;s<i.length;s+=1)o(s);N()}},i(t){if(!n){D(a);for(let t=0;t<r.length;t+=1)D(i[t]);n=!0}},o(t){B(a),i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)B(i[e]);n=!1},d(t){t&&x(e),a&&a.d(),z(i,t)}}}function _t(t,e,s){let n,a,r;return U(t,et,(t=>s(0,n=t))),U(t,Z,(t=>s(1,a=t))),U(t,tt,(t=>s(2,r=t))),[n,a,r]}class xt extends f{constructor(t){super(),d(this,t,_t,Pt,g,{})}}function St(t){let e,s,n,a,r,i,o,c,l,u,m,p,f,d,g,k,S=t[0].name+"",U=t[0].total_tracks+"";return{c(){e=y("playlist"),s=y("img"),a=h(),r=y("span"),i=A(S),o=h(),c=y("em"),l=A("("),u=A(U),m=A(")"),p=h(),f=$("svg"),d=$("use"),E(s.src,n=t[0].imageUrl||"/assets/playlist.983d7323.svg")||w(s,"src",n),w(s,"alt",""),w(s,"class","svelte-tuu5sk"),w(d,"href","#icon-check"),w(d,"fill","#242424"),w(f,"xmlns","http://www.w3.org/2000/svg"),w(f,"class","svelte-tuu5sk"),w(e,"class","svelte-tuu5sk"),R(e,"checked",t[2]),R(e,"selected",t[1])},m(n,y){v(n,e,y),b(e,s),b(e,a),b(e,r),b(r,i),b(r,o),b(r,c),b(c,l),b(c,u),b(c,m),b(e,p),b(e,f),b(f,d),g||(k=P(e,"click",t[3]),g=!0)},p(t,[a]){1&a&&!E(s.src,n=t[0].imageUrl||"/assets/playlist.983d7323.svg")&&w(s,"src",n),1&a&&S!==(S=t[0].name+"")&&j(i,S),1&a&&U!==(U=t[0].total_tracks+"")&&j(u,U),4&a&&R(e,"checked",t[2]),2&a&&R(e,"selected",t[1])},i:_,o:_,d(t){t&&x(e),g=!1,k()}}}function Ut(t,e,s){let n,a;U(t,V,(t=>s(4,a=t)));let{playlist:r}=e,{selected:i=!1}=e;return t.$$set=t=>{"playlist"in t&&s(0,r=t.playlist),"selected"in t&&s(1,i=t.selected)},t.$$.update=()=>{17&t.$$.dirty&&s(2,n=Boolean(a.find((t=>t.id===r.id))))},[r,i,n,function(){W(r)},a]}class Ot extends f{constructor(t){super(),d(this,t,Ut,St,g,{playlist:0,selected:1})}}const{window:Lt}=F;function At(t,e,s){const n=t.slice();return n[6]=e[s],n[8]=s,n}function Et(t){let e,s;return e=new Ot({props:{playlist:t[6],selected:t[8]===t[1]}}),{c(){I(e.$$.fragment)},m(t,n){T(e,t,n),s=!0},p(t,s){const n={};4&s&&(n.playlist=t[6]),2&s&&(n.selected=t[8]===t[1]),e.$set(n)},i(t){s||(D(e.$$.fragment,t),s=!0)},o(t){B(e.$$.fragment,t),s=!1},d(t){M(e,t)}}}function jt(t){let e,s,n,a,r=t[2],i=[];for(let c=0;c<r.length;c+=1)i[c]=Et(At(t,r,c));const o=t=>B(i[t],1,1,(()=>{i[t]=null}));return{c(){e=y("ul");for(let t=0;t<i.length;t+=1)i[t].c();w(e,"class","svelte-o6orej")},m(r,o){v(r,e,o);for(let t=0;t<i.length;t+=1)i[t].m(e,null);t[5](e),s=!0,n||(a=[P(Lt,"keydown",t[3]),P(Lt,"mousemove",t[4])],n=!0)},p(t,[s]){if(6&s){let n;for(r=t[2],n=0;n<r.length;n+=1){const a=At(t,r,n);i[n]?(i[n].p(a,s),D(i[n],1)):(i[n]=Et(a),i[n].c(),D(i[n],1),i[n].m(e,null))}for(q(),n=r.length;n<i.length;n+=1)o(n);N()}},i(t){if(!s){for(let t=0;t<r.length;t+=1)D(i[t]);s=!0}},o(t){i=i.filter(Boolean);for(let e=0;e<i.length;e+=1)B(i[e]);s=!1},d(s){s&&x(e),z(i,s),t[5](null),n=!1,S(a)}}}function It(t,e,s){let n,a,r;return U(t,K,(t=>s(1,n=t))),U(t,J,(t=>s(2,a=t))),[r,n,a,function(t){const e=window.getComputedStyle(r).getPropertyValue("grid-template-columns").split(" ").length;if("ArrowLeft"===t.key?(t.preventDefault(),t.stopPropagation(),-1===n?L(K,n=0,n):n>0&&L(K,n--,n)):"ArrowRight"===t.key&&(t.preventDefault(),t.stopPropagation(),-1===n?L(K,n=0,n):n<a.length-1&&L(K,n++,n)),"ArrowUp"===t.key?(t.preventDefault(),t.stopPropagation(),-1===n?L(K,n=0,n):n>e-1&&L(K,n-=e,n)):"ArrowDown"===t.key&&(t.preventDefault(),t.stopPropagation(),-1===n?L(K,n=0,n):n+e<a.length&&L(K,n+=e,n))," "===t.key){if(t.preventDefault(),t.stopPropagation(),-1===n)return;W(a[n])}},function(t){let e=t.target;for(;"PLAYLIST"!==e.nodeName&&null!==e.parentElement;)e=e.parentElement;if("PLAYLIST"!==e.nodeName)return;const s=Array.prototype.indexOf.call(e.parentElement.children,e);s!==n&&L(K,n=s,n)},function(t){H[t?"unshift":"push"]((()=>{r=t,s(0,r)}))}]}class Tt extends f{constructor(t){super(),d(this,t,It,jt,g,{})}}function Dt(t){let e,s,n,a,r;return{c(){e=y("button"),s=$("svg"),n=$("use"),w(n,"href","#icon-check"),w(s,"xmlns","http://www.w3.org/2000/svg"),w(s,"class","svelte-w7kwmy"),e.disabled=t[0],w(e,"class","svelte-w7kwmy")},m(i,o){v(i,e,o),b(e,s),b(s,n),a||(r=[P(window,"keydown",t[2]),P(e,"click",t[1])],a=!0)},p(t,[s]){1&s&&(e.disabled=t[0])},i:_,o:_,d(t){t&&x(e),a=!1,S(r)}}}function Bt(t,e,s){let n,a,r,i,o,c;function l(){st(a,o),L(Z,c=c.slice(1),c),L(V,o=[],o),L(K,i=0,i),L(at,r.position=0,r),r.isPlaying&&rt(a,0)}return U(t,et,(t=>s(4,a=t))),U(t,at,(t=>s(5,r=t))),U(t,K,(t=>s(6,i=t))),U(t,V,(t=>s(3,o=t))),U(t,Z,(t=>s(7,c=t))),t.$$.update=()=>{8&t.$$.dirty&&s(0,n=0===o.length)},[n,function(){l()},function(t){"Enter"===t.key&&(t.stopPropagation(),l())},o]}class Mt extends f{constructor(t){super(),d(this,t,Bt,Dt,g,{})}}function Rt(t){let e,s,n,a,r,i,o,c,l;return n=new xt({}),i=new Tt({}),c=new Mt({}),{c(){e=y("main"),s=y("nav"),I(n.$$.fragment),a=h(),r=y("article"),I(i.$$.fragment),o=h(),I(c.$$.fragment),w(s,"class","svelte-89bhp7"),w(r,"class","svelte-89bhp7"),w(e,"class","svelte-89bhp7")},m(t,u){v(t,e,u),b(e,s),T(n,s,null),b(e,a),b(e,r),T(i,r,null),b(r,o),T(c,r,null),l=!0},p:_,i(t){l||(D(n.$$.fragment,t),D(i.$$.fragment,t),D(c.$$.fragment,t),l=!0)},o(t){B(n.$$.fragment,t),B(i.$$.fragment,t),B(c.$$.fragment,t),l=!1},d(t){t&&x(e),M(n),M(i),M(c)}}}new class extends f{constructor(t){super(),d(this,t,null,Rt,g,{})}}({target:document.getElementById("app")});
