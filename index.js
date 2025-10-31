import{a as w,i as d,S as x}from"./assets/vendor-C90FnGsu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();w.defaults.baseURL="https://pixabay.com";const M="36451556-b70cce37d343215b637d239eb",m=200;async function S(a,t){try{const{data:r}=await w("/api/",{params:{key:M,q:a,per_page:m,page:t,image_type:"photo",orientation:"horizontal"}});return r}catch(r){d.error({message:`${r.message??String(err)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}}const h=document.querySelector(".gallery"),p=document.querySelector(".loading"),u=document.querySelector(".load-more-button");function C(a=[]){return a.map(({tags:t,previewURL:r,largeImageURL:n,views:e,downloads:o,likes:l,comments:b})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${n}">
                <img class="gallery-image" src="${r}" alt="${t}" loading="lazy" 
                title="Title: ${t.split(",")[0].trim()}  |  
                Views: ${e.toLocaleString()}  | 
                Likes: ${l.toLocaleString()}  |  
                Comments: ${b.toLocaleString()}  |
                Downloads: ${o.toLocaleString()}"/>
            </a>
            <ul class="info-container">
                <li class="info-box">
                    <p class="info-title">Views</p>
                    <p class="info-value">${e.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${l.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${b.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${o.toLocaleString()}</p>
                </li>
            </ul>
        </li>
    `).join("")}function E(){h.innerHTML=""}function $(){p.hidden=!1}function g(){p.hidden=!0}function v(){u.hidden=!1}function s(){u.hidden=!0}const P=new x(".gallery a",{caption:!0,captionDelay:250,captionPosition:"bottom",nav:!0,showCounter:!0,loop:!0}),q="search-queries",y=document.querySelector(".form"),L=y.querySelector(".search-button");let f="",i=0,c=0;y.addEventListener("submit",A);async function A(a){a.preventDefault(),L.disabled=!0;try{if(s(),$(),E(),i=1,c=0,f=a.target.elements["search-text"].value.trim(),!f)throw s(),new Error("Please, type query!");localStorage.setItem(q,f);const{hits:t,totalHits:r}=await S(f,i);if(!t.length)throw s(),new Error("Sorry, there are no images matching your search query. Please try again!");if(c=Math.ceil(r/m),h.insertAdjacentHTML("beforeend",C(t)),P.refresh(),i<c)v();else throw s(),new Error("We are sorry, but you have reached the end of search results!")}catch(t){d.error({message:`${t.message??String(err)}`,position:"topCenter",timeout:4e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}finally{g(),a.target.reset(),L.disabled=!1}}u.addEventListener("click",B);async function B(){s(),u.insertAdjacentElement("afterend",p),$();let a=y.elements["search-text"].value.trim(),t=localStorage.getItem(q);if(a!==""&&a!==t){d.info({message:"Please make a new search before loading next page!",position:"topCenter",timeout:4e3,backgroundColor:"#009b18",messageColor:"white",close:!1}),g(),E(),s(),u.disabled=!1;return}try{i++;const{hits:r,totalHits:n}=await S(t,i);c=Math.ceil(n/m),console.log("page: ",i),console.log("totalPagest: ",c),h.insertAdjacentHTML("beforeend",C(r)),P.refresh();const e=document.querySelector(".gallery-item"),o=e.getBoundingClientRect().height;if(e&&window.scrollBy({left:0,top:o*2,behavior:"smooth"}),i<c)v();else throw s(),new Error("We are sorry, but you have reached the end of search results!")}catch(r){d.info({message:`${r.message??String(err)}`,position:"topCenter",timeout:4e3,backgroundColor:"#55a703",messageColor:"white",close:!1})}finally{g()}}
//# sourceMappingURL=index.js.map
