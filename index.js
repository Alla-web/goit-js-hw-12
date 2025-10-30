import{a as S,i as d,S as x}from"./assets/vendor-C90FnGsu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();S.defaults.baseURL="https://pixabay.com";const M="36451556-b70cce37d343215b637d239eb",m=15;async function w(a,t){try{const{data:r}=await S("/api/",{params:{key:M,q:a,per_page:m,page:t,image_type:"photo",orientation:"horizontal"}});return r}catch(r){d.error({message:`${r.message??String(err)}`,position:"topCenter",timeout:3e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}}const p=document.querySelector(".gallery"),h=document.querySelector(".loading"),u=document.querySelector(".load-more-button");function C(a=[]){return a.map(({tags:t,previewURL:r,largeImageURL:i,views:e,downloads:o,likes:s,comments:b})=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${i}">
                <img class="gallery-image" src="${r}" alt="${t}" loading="lazy" 
                title="Title: ${t.split(",")[0].trim()}  |  
                Views: ${e.toLocaleString()}  | 
                Likes: ${s.toLocaleString()}  |  
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
                    <p class="info-value">${s.toLocaleString()}</p>
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
    `).join("")}function $(){p.innerHTML=""}function E(){h.hidden=!1}function g(){h.hidden=!0}function q(){u.hidden=!1}function n(){u.hidden=!0}const v=new x(".gallery a",{caption:!0,captionDelay:250,captionPosition:"bottom",nav:!0,showCounter:!0,loop:!0}),P="search-queries",y=document.querySelector(".form"),L=y.querySelector(".search-button");let f="",l=0,c=0;y.addEventListener("submit",A);async function A(a){a.preventDefault(),L.disabled=!0;try{if(n(),E(),$(),l=1,c=0,f=a.target.elements["search-text"].value.trim(),!f)throw n(),new Error("Please, type query!");localStorage.setItem(P,f);const{hits:t,totalHits:r}=await w(f,l);if(!t.length)throw n(),new Error("Sorry, there are no images matching your search query. Please try again!");c=Math.ceil(r/m),p.insertAdjacentHTML("beforeend",C(t)),v.refresh(),l<c&&q()}catch(t){d.error({message:`${t.message??String(err)}`,position:"topCenter",timeout:4e3,backgroundColor:"#EF4040",messageColor:"white",close:!1})}finally{g(),a.target.reset(),L.disabled=!1}}u.addEventListener("click",B);async function B(){n(),u.insertAdjacentElement("afterend",h),E();let a=y.elements["search-text"].value.trim(),t=localStorage.getItem(P);if(a!==""&&a!==t){d.info({message:"Please make a new search before loading next page!",position:"topCenter",timeout:4e3,backgroundColor:"#009b18",messageColor:"white",close:!1}),g(),$(),n(),u.disabled=!1;return}try{if(l>=c)throw n(),new Error("We are sorry, but you have reached the end of search results!");l++;const{hits:r,totalHits:i}=await w(t,l);c=Math.ceil(i/m),p.insertAdjacentHTML("beforeend",C(r)),v.refresh();const e=document.querySelector(".gallery-item"),o=e.getBoundingClientRect().height;e&&window.scrollBy({left:0,top:o*2,behavior:"smooth"}),q()}catch(r){d.info({message:`${r.message??String(err)}`,position:"topCenter",timeout:4e3,backgroundColor:"#55a703",messageColor:"white",close:!1})}finally{g()}}
//# sourceMappingURL=index.js.map
