var T=Object.defineProperty;var q=(i,e,s)=>e in i?T(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s;var E=(i,e,s)=>(q(i,typeof e!="symbol"?e+"":e,s),s),x=(i,e,s)=>{if(!e.has(i))throw TypeError("Cannot "+s)};var d=(i,e,s)=>(x(i,e,"read from private field"),s?s.call(i):e.get(i)),b=(i,e,s)=>{if(e.has(i))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(i):e.set(i,s)},$=(i,e,s,r)=>(x(i,e,"write to private field"),r?r.call(i,s):e.set(i,s),s);var L=(i,e,s)=>(x(i,e,"access private method"),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();class C{constructor(){this.favouritesKey="favouriteExercises"}addExerciseToFavorites(e){const s=this.getFavorites();s.push(e),localStorage.setItem(this.favouritesKey,JSON.stringify(s))}removeExerciseFromFavorites(e){let s=this.getFavorites();s=s.filter(r=>r._id!==e),localStorage.setItem(this.favouritesKey,JSON.stringify(s))}getFavorites(){const e=localStorage.getItem(this.favouritesKey);return e?JSON.parse(e):[]}isFavorite(e){return this.getFavorites().some(r=>r._id===e)}}const m=new C;class B{getExerciseDetailsHTML({_id:e,bodyPart:s,equipment:r,gifUrl:t,name:a,target:o,description:n,rating:c,burnedCalories:j,time:O,popularity:k,isFavorite:G}){return`
  <div class='exercises-modal' data-id='${e}'>
  <div class='exercises-container'">
    <div class='exercises-modal-left'>
      <img class='exercises-modal-image'
      ${t?`src=${t}`:"srcset = '../img/modal-exercise-image.jpg 1x,../img/modal-exercise-image@2x.jpg 2x' src = '../img/modal-exercise-image.jpg'"}
      alt='exercise for body-part'  />
    </div>

    <div class='exercises-modal-right'>
      <button class='exercises-modal-close modal-closed-btn'>
            <svg width='24' height='24'>
                <use href='./img/icons.svg#icon-close-x'></use>
            </svg>
      </button>

      <h3 class='exercises-modal-title'>${a}</h3>

      <div class='exercises-modal-rating-container'>
        <span class='exercises-modal-rating-value'>${c}</span>
        <fieldset class='exercises-modal-rating'>
          <input
            class='exercises-modal-rating-input'
            type='radio'
            id='star1'
            name='rating'
          />
          <label class='exercises-modal-rating-label' for='star1'>
            <svg
            class='exercises-modal-favorite-icon rating-star ${c>=1?"rated":""}'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
            <use href='./img/icons.svg#icon-star'></use>
          </svg>
          </label>
          <input
            class='exercises-modal-rating-input'
            type='radio'
            id='star2'
            name='rating'
          />
          <label class='exercises-modal-rating-label' for='star2'>
            <svg
            class='exercises-modal-favorite-icon rating-star ${c>=2?"rated":""}'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
            <use href='./img/icons.svg#icon-star'></use>
          </svg>
          </label>
          <input
            class='exercises-modal-rating-input'
            type='radio'
            id='star3'
            name='rating'
          />
          <label class='exercises-modal-rating-label' for='star3'>
            <svg
            class='exercises-modal-favorite-icon rating-star ${c>=3?"rated":""}'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
            <use href='./img/icons.svg#icon-star'></use>
          </svg>
          </label>
          <input
            class='exercises-modal-rating-input'
            type='radio'
            id='star4'
            name='rating'
          />
          <label class='exercises-modal-rating-label' for='star4'>
            <svg
            class='exercises-modal-favorite-icon rating-star ${c>=4?"rated":""}'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
            <use href='./img/icons.svg#icon-star'></use>
          </svg>
          </label>
          <input
            class='exercises-modal-rating-input'
            type='radio'
            id='star5'
            name='rating'
          />
          <label class='exercises-modal-rating-label' for='star5'>
            <svg
            class='exercises-modal-favorite-icon rating-star ${c>=5?"rated":""}'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
            <use href='./img/icons.svg#icon-star'></use>
          </svg>
          </label>
        </fieldset>
      </div>

      <hr class='exercises-modal-line' />

      <ul class='excercises-modal-list'>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Taget</h4>
          <p class='excercises-modal-aftertitle js-target'>${o}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Body Part</h4>
          <p class='excercises-modal-aftertitle js-body-part'>${s}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Equipment</h4>
          <p class='excercises-modal-aftertitle js-equipment'>${r}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Popular</h4>
          <p class='excercises-modal-aftertitle js-popularity'>${k}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Burned calories</h4>
          <p class='excercises-modal-aftertitle js-burned-calories'>${j}/${O}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'></h4>
          <p class='excercises-modal-aftertitle js-burned-calories'></p>
        </li>
      </ul>

      <hr class='exercises-modal-line-second' />

      <p class='exercises-modal-description'>${n}</p>


    </div>
    </div>
        <div class='exercises-modal-buttons'>
        <button class='exercises-modal-favorite-btn' data-id='${e}'>
          Add to favorites
          <svg
            class='exercises-modal-favorite-icon'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
            <use href='./img/icons.svg#icon-heart'></use>
          </svg>
        </button>
<!--        <button class="exercises-modal-rating-btn">Give a rating</button>-->
      </div>
  </div>
`}}var f,M;const u=class u{constructor(){b(this,f)}getExerciseListHTML(e,s){if(!u.exerciseCardType[s])return console.error(`Unsupported exercise card type '${s}' when trying to create exercise card.`),"";let r;return s===u.exerciseCardType.FAVORITES&&(r=`
        <button class='js-remove move-to-trash-btn' type='button'>
        <svg class='move-to-trash-icon' width='16' height='16'>
              <use href='./img/icons.svg#icon-trash'></use>
            </svg>
          </button>`),e.map(t=>(s===u.exerciseCardType.HOME&&(r=`
        <div class='rating'>
        <span class='rating-value'>${t.rating}</span>
        <svg class='rating-icon' width='18' height='18'>
        <use href='./img/icons.svg#icon-Star'></use>
        </svg>
        </div>`),`
      <li class='exercise' data-exercise-id='${t._id}'>
        <button class='main-action-btn card__btn' data-id='${t._id}' type='button'>
          Start
          <svg class='main-action-arrow-icon' width='16' height='16'>
            <use href='./img/icons.svg#icon-arrow-right'></use>
          </svg>
        </button>
        <div class='top'>
          <span class='badge'>Workout</span>
          ${r}
        </div>
        <div class='title'>
          <svg class='title-icon' width='14' height='16'>
            <use href='./img/icons.svg#icon-running-stick-figure-svgrepo-com-1'></use>
          </svg>
          <span class='title-text text-clipped'>${t.name.charAt(0).toUpperCase()+t.name.slice(1)}</span>
        </div>
        <div class='details'>
          <div class='detail'>
            <span class='detail-title'>Burned calories:</span>
            <span class='detail-value text-clipped'>${t.burnedCalories} / ${t.time} min</span>
          </div>
          <div class='detail'>
            <span class='detail-title'>Body part:</span>
            <span class='detail-value text-clipped'>${t.bodyPart}</span>
          </div>
          <div class='detail'>
            <span class='detail-title'>Target:</span>
            <span class='detail-value text-clipped'>${t.target}</span>
          </div>
        </div>
      </li>`)).join("")}getExerciseCategoryListHTML(e){return console.log(e),e.map(({filter:s,name:r,imgURL:t})=>`
              <li class='exs-card-item' data-name='${r}'>
                  <img class='exs-card-img' src='${t}' alt='${r}' />
                      <div class='exs-card-container'>
                          <h3 class='exs-card-title'>${r}</h3>
                          <p class='exs-card-description'>${s}</p>
                      </div>
                  </li>`).join("")}getPaginationHTML(e,s=1,r=9){let t="",a=n=>(n=parseInt(n),isNaN(n)?0:n);e=a(e),s=a(s),r=a(r);const o=L(this,f,M).call(this,e,s,r);return s>1&&(t+=`
        <li class='exs-pagination-item'>
            <a class='exs-pagination-link' data-page='${s-1} '>
                <svg class='icon-pagination-arrow' width='20' height='20'>
                    <use href='./img/icons.svg#icon-fi-rr-angle-small-left'></use>
                </svg>
            </a>
        </li>`),o.pages.forEach(n=>{t+=`<li class='exs-pagination-item ${o.page==n?"active":""}'><a class='exs-pagination-link' ${n!=="..."?`data-page="${n}"`:""}>${n}</a></li>`}),s<e&&(t+=`
        <li class='exs-pagination-item'>
            <a class='exs-pagination-link' data-page='${s+1} '>
                <svg class='icon-pagination-arrow' width='20' height='20'>
                    <use href='./img/icons.svg#icon-fi-rr-angle-small-right'></use>
                </svg>
            </a>
        </li>`),t}};f=new WeakSet,M=function(e,s=1,r=9){e=e>1?e:1;let t=[];if(e>4)t=[s===1?1:s<e-2?s-1:e-4,s<e-2?s===1?2:s:e-3,s<e-2?s===1?3:s+1:e-2,s<e-3?"...":e-1,e];else for(let a=1;a<=e;a++)t.push(a);return{pages:t,page:s<=e?s:1,maxPage:e,nextPage:s<e?s+1:e,prevPage:s>1?s-1:1}},E(u,"exerciseCardType",Object.freeze({HOME:"HOME",FAVORITES:"FAVORITES"}));let y=u;const Q=new y,A=new B;function I(){const i=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=document.body,t=()=>{const c=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!c),i.classList.toggle("is-open"),r.classList.toggle("menu-open"),r.classList.contains("menu-open")?o():n()},a=()=>{i.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),r.classList.remove("menu-open"),n()},o=()=>{r.style.overflow="hidden"},n=()=>{r.style.overflow="visible"};e.addEventListener("click",t),s.addEventListener("click",t),r.addEventListener("click",c=>{c.target.closest(".js-menu-container")||c.target.closest(".js-open-menu")||i.classList.contains("is-open")&&a()}),window.matchMedia("(min-width: 768px)").addEventListener("change",c=>{c.matches&&a()})}function H(){const i=window.location.pathname,e=[{label:"Home",href:"/",activeOn:"/index.html"},{label:"Favorites",href:"favorites.html",activeOn:"favorites.html"}],s=document.createElement("ul");s.classList.add("header-pages");for(const t of e){const a=document.createElement("li");if(a.classList.add("header-pages-item"),i===t.activeOn||i===t.href||i.endsWith(t.activeOn))a.classList.add("header-pages-active"),a.textContent=t.label;else{a.classList.add("header-inactive");const o=document.createElement("a");o.classList.add("header-item-link"),o.href=t.href,o.textContent=t.label,a.appendChild(o)}s.appendChild(a)}let r=document.querySelector("#header-pages");r.replaceChild(s,r.querySelectorAll("ul")[0]),r=document.querySelector("#header-pages")}window.onload=H;I();const N="https://your-energy.b.goit.study";var l;class R{constructor(e){b(this,l,"");$(this,l,e)}filters(e){const s=new URLSearchParams(e);return fetch(`${d(this,l)}/api/filters?${s}`).then(r=>{if(r.ok)return r.json();throw new Error("Error fetching filters")})}exercises(e){const s=new URLSearchParams(e);return fetch(`${d(this,l)}/api/exercises?${s}`).then(r=>{if(r.ok)return r.json();throw new Error("Error fetching exercises")})}quotes(){return fetch(`${d(this,l)}/api/quote`).then(e=>{if(e.ok)return e.json();throw new Error("Error fetching qoute")})}getExerciseById(e){return fetch(`${d(this,l)}/api/exercises/${e}`).then(s=>{if(s.ok)return s.json();throw new Error("Error fetching exercise by ID")})}patchRating(e,s){return fetch(`${d(this,l)}/api/exercises/${e}/rating`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(r=>{if(r.ok)return r.json();throw new Error("Error patching rating")})}createSubscription(e){return fetch(`${d(this,l)}/api/subscription`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(s=>{if(s.ok)return s.json();switch(s.status){case 409:throw new Error("Email has been already subscribed");default:throw new Error("Error creating subscription")}})}}l=new WeakMap;const _=new R(N);let g=!1,D,h=null;const p=document.querySelector(".exercises-popup"),v=document.querySelector(".overlay"),U=document.querySelector(".exercises-cards-list");U.addEventListener("click",J);async function J(i){if(i.target.closest(".card__btn"))try{const e=i.target.closest(".card__btn").getAttribute("data-id"),s=await _.getExerciseById(e);h=s,D=e;const r=A.getExerciseDetailsHTML(s);V(r,s),K(),document.querySelector(".exercises-modal-favorite-btn").addEventListener("click",z),document.querySelector(".modal-closed-btn").addEventListener("click",w)}catch(e){console.log(e)}}function K(){const i=window.innerWidth-document.body.offsetWidth+"px";p.classList.remove("hidden"),v.classList.remove("hidden"),document.body.style.paddingRight=i,document.body.style.overflow="hidden"}function V(i,e){p.innerHTML=i,W(e)}function W(i){const e=document.querySelector(".exercises-modal-favorite-btn");g=m.isFavorite(i._id),g?e.innerHTML=F():e.innerHTML=S()}function z(){g=!m.isFavorite(h._id);const i=document.querySelector(".exercises-modal-favorite-btn");document.querySelector(".fav-list"),g?(i.innerHTML=F(),m.addExerciseToFavorites(h)):(i.innerHTML=S(),m.removeExerciseFromFavorites(h._id))}function S(){return`
  Add to favorites
    <svg
            class="exercises-modal-favorite-icon"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
    <use href="/img/icons.svg#icon-heart"></use>
    </svg>`}function F(){return`
  Remove from favorites
  <svg
            class="exercises-modal-favorite-icon"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
    <use href="/img/icons.svg#icon-trash"></use>
  </svg>`}function w(){p.classList.add("hidden"),v.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}v.addEventListener("click",function(i){i.target===v&&w()});document.addEventListener("keydown",function(i){i.key==="Escape"&&!p.classList.contains("hidden")&&w()});export{y as E,_ as a,Q as e,m as f};
//# sourceMappingURL=modal-aea3e50f.js.map
