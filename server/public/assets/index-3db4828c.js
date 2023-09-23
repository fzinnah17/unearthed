(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const E=document.querySelector("header"),a=document.createElement("div");a.className="header-container";const i=document.createElement("div");i.className="header-left";const f=document.createElement("img");f.src="logo.png";const C=document.createElement("h1");C.textContent="UnEarthed";i.appendChild(f);i.appendChild(C);const s=document.createElement("div");s.className="header-right";const l=document.createElement("button");l.textContent="Home";l.addEventListener("click",function(r){window.location.href="/"});s.appendChild(l);a.appendChild(i);a.appendChild(s);E.appendChild(a);const g=async()=>{const r=await(await fetch("/gifts")).json(),c=document.getElementById("main-content");if(r)r.map(n=>{const e=document.createElement("div");e.classList.add("card");const t=document.createElement("div");t.classList.add("top-container"),t.style.backgroundImage=`url(${n.image})`;const o=document.createElement("div");o.classList.add("bottom-container");const p=document.createElement("h3");p.textContent=n.name,o.appendChild(p);const u=document.createElement("p");u.textContent="Price: "+n.pricePoint,o.appendChild(u);const h=document.createElement("p");h.textContent="Great For: "+n.audience,o.appendChild(h);const d=document.createElement("a");d.textContent="Read More >",d.href=`/gifts/${n.id}`,d.setAttribute("role","button"),o.appendChild(d),e.appendChild(t),e.appendChild(o),c.appendChild(e)});else{const n=document.createElement("h2");n.textContent="No Gifts Available 😞",c.appendChild(n)}};g();
