(()=>{"use strict";((e,t)=>{const s=document.querySelectorAll(".feature__link"),c=document.querySelectorAll(".feature-sub");s.forEach(((e,t)=>{e.addEventListener("click",(()=>{var a;e.classList.contains("feature__link_active")?(a=t,e.classList.remove("feature__link_active"),c[a].classList.add("hidden")):((e,t)=>{e.classList.add("feature__link_active"),c[t].classList.remove("hidden")})(e,t),s.forEach(((e,s)=>{t!==s&&e.classList.remove("feature__link_active")})),c.forEach(((e,s)=>{t!==s&&e.classList.add("hidden")}))}))}))})(),((e,t,s)=>{const c=document.querySelector(e),a=document.querySelector(t),l=document.querySelectorAll(s);c.addEventListener("click",(()=>(a.classList.toggle("menu-active"),void c.classList.toggle("hamburger-menu-active")))),l.forEach((e=>{e.addEventListener("click",(()=>(a.classList.remove("menu-active"),void c.classList.remove("hamburger-menu-active"))))}))})(".hamburger-menu",".menu",".menu-list__item"),((e,t)=>{const s=document.querySelector(e),c=document.querySelector(t),a=document.querySelector("body");s.addEventListener("click",(()=>{c.classList.remove("hidden"),a.classList.add("body__locked")})),c.addEventListener("click",(e=>{const t=e.target;(t.classList.contains("overlay")||t.classList.contains("modal__close"))&&(c.classList.add("hidden"),a.classList.remove("body__locked"))}))})(".more",".modal"),(e=>{const t=document.querySelector(e);t.addEventListener("submit",(e=>{e.preventDefault();let s={};for(let{name:e,value:c}of t.elements)e&&(s[e]=c);fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((e=>{if(200===e.status||201===e.status)return e.json();throw new Error(e.status)})).then((e=>{alert("Данные успешно сохранены!"),t.reset()})).catch((e=>{alert("Произошла ошибка, статус "+e.message)}))}))})(".form-test-drive"),((e,t,s)=>{const c=[...document.querySelectorAll(e),document.querySelector(t),document.querySelector(s)];console.log(seamless),c.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.target.getAttribute("href").substring(1);seamless.scrollIntoView(document.getElementById(t),{behavior:"smooth",block:"start",inline:"center"})}))}))})(".menu-list__link",".main__scroll",".main__button"),((e,t,s)=>{const c=document.querySelectorAll(e),a=document.querySelectorAll(t),l=document.querySelectorAll(s);c.forEach(((e,t)=>{e.addEventListener("click",(()=>{c.forEach((e=>e.classList.remove("design-list__item_active"))),e.classList.add("design-list__item_active"),a.forEach((t=>{t.dataset.tabsField===e.dataset.tabsHandler?t.classList.remove("hidden"):t.classList.add("hidden")})),l.forEach(((e,s)=>{e.classList.add("hidden"),t===s&&e.classList.remove("hidden")}))}))}))})("[data-tabs-handler]","[data-tabs-field]",".design__title")})();