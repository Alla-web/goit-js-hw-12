import{a as L,i as f,S as x}from"./assets/vendor-9cRawSbk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();L.defaults.baseURL="https://pixabay.com";const M="36451556-b70cce37d343215b637d239eb",S=15;async function w(r,t){try{const{data:a}=await L("/api/",{params:{key:M,q:r,per_page:S,page:t,image_type:"photo",orientation:"horizontal"}});return a}catch(a){f.error({message:`${a.message??String(err)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}}const m=document.querySelector(".gallery"),p=document.querySelector(".loading"),c=document.querySelector(".load-more-button");function C(r=[]){return r.map(({tags:t,previewURL:a,largeImageURL:s,views:e,downloads:o,likes:i,comments:y})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img class="gallery-image" src="${a}" alt="${t}" loading="lazy" 
                title="Title: ${t.split(",")[0].trim()}  |  
                Views: ${e.toLocaleString()}  | 
                Likes: ${i.toLocaleString()}  |  
                Comments: ${y.toLocaleString()}  |
                Downloads: ${o.toLocaleString()}"/>
            </a>
            <ul class="info-container">
                <li class="info-box">
                    <p class="info-title">Views</p>
                    <p class="info-value">${e.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Likes</p>
                    <p class="info-value">${i.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Comments</p>
                    <p class="info-value">${y.toLocaleString()}</p>
                </li>
                 <li class="info-box">
                    <p class="info-title">Downloads</p>
                    <p class="info-value">${o.toLocaleString()}</p>
                </li>
            </ul>
        </li>
    `).join("")}function $(){m.innerHTML=""}function E(){p.hidden=!1}function g(){p.hidden=!0}function P(){c.hidden=!1}function n(){c.hidden=!0}const q=new x(".gallery a",{caption:!0,captionDelay:250,captionPosition:"bottom",nav:!0,showCounter:!0,loop:!0}),v="search-queries",h=document.querySelector(".form"),b=h.querySelector(".search-button");let u="",l=32,d=0;h.addEventListener("submit",A);async function A(r){r.preventDefault(),b.disabled=!0;try{if(n(),E(),$(),u=r.target.elements["search-text"].value.trim(),!u)throw n(),new Error("Please, type query!");localStorage.setItem(v,u);const{hits:t}=await w(u,l);if(!t.length)throw n(),new Error("Sorry, there are no images matching your search query. Please try again!");m.insertAdjacentHTML("beforeend",C(t)),q.refresh(),P()}catch(t){f.error({message:`${t.message??String(err)}`,position:"topCenter",timeout:4e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}finally{g(),r.target.reset(),b.disabled=!1}}c.addEventListener("click",B);async function B(){n(),c.insertAdjacentElement("afterend",p),E();let r=h.elements["search-text"].value.trim();const t=localStorage.getItem(v);if(r!==""&&r!==t){f.info({message:"Please make a new search before loading next page!",position:"topCenter",timeout:4e3,backgroundColor:"#009b18",messageColor:"white",close:!1}),g(),$(),n(),c.disabled=!1;return}l++;try{const{hits:a,totalHits:s}=await w(t,l);if(d=Math.ceil(s/S),console.log("page:",l),console.log("totalPages: ",d),l>=d)throw n(),new Error("We are sorry, but you have reached the end of search results!");m.insertAdjacentHTML("beforeend",C(a)),q.refresh();const e=document.querySelector(".gallery-item"),o=e.getBoundingClientRect().height;e&&window.scrollBy({left:0,top:o*2,behavior:"smooth"}),P()}catch(a){f.info({message:`${a.message??String(err)}`,position:"topCenter",timeout:4e3,backgroundColor:"#55a703",messageColor:"white",close:!1})}finally{g()}}
//# sourceMappingURL=index.js.map
