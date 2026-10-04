(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const m=[{name:"Instagram",url:"https://instagram.com/hhezeki",icon:'<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>'},{name:"Facebook",url:"https://facebook.com/hezeki.hmar",icon:'<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>'},{name:"WhatsApp",url:"https://wa.me/917002454634",icon:'<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>'},{name:"Email",url:"mailto:hezekihmar2@gmail.com",icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'},{name:"About Me",url:"#about",icon:'<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>'}],d=document.getElementById("app");function h(){const o="lastLoadTimestamp",r="loadCount",a=localStorage.getItem(o),t=parseInt(localStorage.getItem(r)||"0",10),e=Date.now();return!a||e-parseInt(a,10)>432e5?(localStorage.setItem(o,e.toString()),localStorage.setItem(r,"1"),!0):t<5?(localStorage.setItem(r,(t+1).toString()),!0):!1}function u(){const r="© 2026 Hezeki Intoate. All rights reserved.".split("").map((t,e)=>{const n=t===" "?"&nbsp;":t;return`<span class="inline-block hover:scale-125 hover:text-white transition-all duration-200 cursor-default" style="transition-delay: ${e*20}ms">${n}</span>`}).join(""),a=m.map((t,e)=>`
    <a
      href="${t.url}"
      ${t.url.startsWith("http")?'target="_blank" rel="noopener noreferrer"':""}
      class="social-pill p-3.5 rounded-full bg-black text-white border border-neutral-800 transition-all duration-300 hover:scale-125 hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-white/20 active:scale-95 animate-slide-up flex items-center justify-center cursor-pointer"
      style="animation-delay: ${.5+e*.08}s"
      title="${t.name}"
      data-name="${t.name}"
    >
      ${t.icon}
    </a>
  `).join("");d.innerHTML=`
    <div class="h-screen w-full bg-black flex items-center justify-center p-4">
      <main class="w-full max-w-md px-4 animate-fade-in">
        <!-- Profile Header -->
        <header class="text-left mb-6">
          <h1 class="text-3xl sm:text-4xl font-bold text-white mb-2 animate-slide-up cursor-default tracking-tight">
            Hezeki Intoate
          </h1>
          <p class="text-gray-300 text-sm leading-relaxed animate-slide-up-delay cursor-default font-normal">
            Civil Engineering &amp; Architecture | Tech enthusiast | ISP Services
          </p>
        </header>

        <!-- Social & Navigation Icons -->
        <nav aria-label="Social and page links" class="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
          ${a}
        </nav>

        <!-- Dynamic Modal Container -->
        <div id="modal-container" class="hidden"></div>

        <!-- Interactive Footer -->
        <footer class="text-left pt-4 border-t border-neutral-800">
          <p class="text-neutral-500 text-xs font-mono select-none">
            ${r}
          </p>
        </footer>
      </main>
    </div>
  `,p()}function p(){const o=document.getElementById("modal-container"),r=(t,e)=>{o.className="my-4 p-5 rounded-2xl border border-neutral-800 bg-neutral-950 text-neutral-200 animate-fade-in shadow-xl",o.innerHTML=`
      <div class="flex items-center justify-between mb-3 border-b border-neutral-800 pb-2">
        <h2 class="text-lg font-bold text-white">${t}</h2>
        <button id="close-modal" class="text-neutral-400 hover:text-white text-xs px-2 py-1 rounded bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors cursor-pointer">
          ✕ Close
        </button>
      </div>
      <div class="text-sm leading-relaxed text-neutral-300 space-y-2">
        ${e}
      </div>
    `,document.getElementById("close-modal")?.addEventListener("click",()=>{o.className="hidden",o.innerHTML="",window.location.hash&&history.replaceState(null,"",window.location.pathname)})},a=()=>{window.location.hash==="#about"&&r("About Hezeki Intoate",`
        <p>Hi there! I'm <strong>Hezeki Intoate</strong>, a civil engineer working on infrastructure projects and community development.</p>
        <p>I work on infrastructure projects including roads, bridges, and residential developments, ensuring they meet safety and regulatory standards.</p>
        <p>I also operate a local ISP service providing high-speed internet connectivity to the <strong>Muolhoi</strong> area in Haflong, Assam.</p>
      `)};window.addEventListener("hashchange",a),a()}function f(){d.innerHTML=`
    <div class="min-h-screen bg-black flex items-center justify-center p-4">
      <div class="text-center">
        <p id="splash-text" class="text-white text-sm font-bold tracking-widest font-mono min-h-[1.5rem]"></p>
      </div>
    </div>
  `;const o=document.getElementById("splash-text"),r="Hey There | Welcome";let a=0;const t=["|","/","-","\\"];let e=0,n=null;function s(){if(a>=r.length){setTimeout(c,350);return}const i=r[a];if(i==="|"){o.textContent="Hey There |",n=window.setInterval(()=>{e=(e+1)%t.length,o.textContent=`Hey There ${t[e]}`},100),setTimeout(()=>{n&&clearInterval(n),o.textContent="Hey There |",a++,s()},1500);return}o.textContent+=i,a++;let l=50;i===" "&&(l=90),i==="e"&&(l=35),setTimeout(s,l)}function c(){const i=o.textContent||"";i.length>0?(o.textContent=i.slice(0,-1),setTimeout(c,50)):setTimeout(u,200)}setTimeout(s,250)}function g(){h()?f():u()}g();
