var O=Object.defineProperty;var B=(t,e,s)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var E=(t,e,s)=>(B(t,typeof e!="symbol"?e+"":e,s),s),x=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var d=(t,e,s)=>(x(t,e,"read from private field"),s?s.call(t):e.get(t)),b=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},$=(t,e,s,r)=>(x(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var L=(t,e,s)=>(x(t,e,"access private method"),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();class q{constructor(){this.favouritesKey="favouriteExercises"}addExerciseToFavorites(e){const s=this.getFavorites();s.push(e),localStorage.setItem(this.favouritesKey,JSON.stringify(s))}removeExerciseFromFavorites(e){let s=this.getFavorites();s=s.filter(r=>r._id!==e),localStorage.setItem(this.favouritesKey,JSON.stringify(s))}getFavorites(){const e=localStorage.getItem(this.favouritesKey);return e?JSON.parse(e):[]}isFavorite(e){return this.getFavorites().some(r=>r._id===e)}}const g=new q;class A{getExerciseDetailsHTML({_id:e,bodyPart:s,equipment:r,gifUrl:i,name:a,target:n,description:o,rating:c,burnedCalories:j,time:T,popularity:k,isFavorite:z}){return`
  <div class='exercises-modal' data-id='${e}'>
  <div class='exercises-container'">
    <div class='exercises-modal-left'>
      <img class='exercises-modal-image'
      ${i?`src=${i}`:"srcset = '../img/modal-exercise-image.jpg 1x,../img/modal-exercise-image@2x.jpg 2x' src = '../img/modal-exercise-image.jpg'"}
      alt='exercise for body-part'  />
    </div>

    <div class='exercises-modal-right'>
      <button class='exercises-modal-close modal-closed-btn'>
            <svg width='24' height='24'>
                <use href='/img/icons.svg#icon-close-x'></use>
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
            <use href='/img/icons.svg#icon-star'></use>
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
            <use href='/img/icons.svg#icon-star'></use>
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
            <use href='/img/icons.svg#icon-star'></use>
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
            <use href='/img/icons.svg#icon-star'></use>
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
            <use href='/img/icons.svg#icon-star'></use>
          </svg>
          </label>
        </fieldset>
      </div>

      <hr class='exercises-modal-line' />

      <ul class='excercises-modal-list'>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Taget</h4>
          <p class='excercises-modal-aftertitle js-target'>${n}</p>
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
          <p class='excercises-modal-aftertitle js-burned-calories'>${j}/${T}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'></h4>
          <p class='excercises-modal-aftertitle js-burned-calories'></p>
        </li>
      </ul>

      <hr class='exercises-modal-line-second' />

      <p class='exercises-modal-description'>${o}</p>


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
            <use href='/img/icons.svg#icon-heart'></use>
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
          </button>`),e.map(i=>(s===u.exerciseCardType.HOME&&(r=`
        <div class='rating'>
        <span class='rating-value'>${i.rating}</span>
        <svg class='rating-icon' width='18' height='18'>
        <use href='./img/icons.svg#icon-Star'></use>
        </svg>
        </div>`),`
      <li class='exercise' data-exercise-id='${i._id}'>
        <button class='main-action-btn card__btn' data-id='${i._id}' type='button'>
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
          <span class='title-text text-clipped'>${i.name.charAt(0).toUpperCase()+i.name.slice(1)}</span>
        </div>
        <div class='details'>
          <div class='detail'>
            <span class='detail-title'>Burned calories:</span>
            <span class='detail-value text-clipped'>${i.burnedCalories} / ${i.time} min</span>
          </div>
          <div class='detail'>
            <span class='detail-title'>Body part:</span>
            <span class='detail-value text-clipped'>${i.bodyPart}</span>
          </div>
          <div class='detail'>
            <span class='detail-title'>Target:</span>
            <span class='detail-value text-clipped'>${i.target}</span>
          </div>
        </div>
      </li>`)).join("")}getExerciseCategoryListHTML(e){return console.log(e),e.map(({filter:s,name:r,imgURL:i})=>`
              <li class='exs-card-item' data-name='${r}'>
                  <img class='exs-card-img' src='${i}' alt='${r}' />
                      <div class='exs-card-container'>
                          <h3 class='exs-card-title'>${r}</h3>
                          <p class='exs-card-description'>${s}</p>
                      </div>
                  </li>`).join("")}getPaginationHTML(e,s=1,r=9){let i="",a=o=>(o=parseInt(o),isNaN(o)?0:o);e=a(e),s=a(s),r=a(r);const n=L(this,f,M).call(this,e,s,r);return s>1&&(i+=`
        <li class='exs-pagination-item'>
            <a class='exs-pagination-link' data-page='${s-1} '>
                <svg class='icon-pagination-arrow' width='20' height='20'>
                    <use href='./img/icons.svg#icon-fi-rr-angle-small-left'></use>
                </svg>
            </a>
        </li>`),n.pages.forEach(o=>{i+=`<li class='exs-pagination-item ${n.page==o?"active":""}'><a class='exs-pagination-link' ${o!=="..."?`data-page="${o}"`:""}>${o}</a></li>`}),s<e&&(i+=`
        <li class='exs-pagination-item'>
            <a class='exs-pagination-link' data-page='${s+1} '>
                <svg class='icon-pagination-arrow' width='20' height='20'>
                    <use href='./img/icons.svg#icon-fi-rr-angle-small-right'></use>
                </svg>
            </a>
        </li>`),i}};f=new WeakSet,M=function(e,s=1,r=9){e=e>1?e:1;let i=[];if(e>4)i=[s===1?1:s<e-2?s-1:e-4,s<e-2?s===1?2:s:e-3,s<e-2?s===1?3:s+1:e-2,s<e-3?"...":e-1,e];else for(let a=1;a<=e;a++)i.push(a);return{pages:i,page:s<=e?s:1,maxPage:e,nextPage:s<e?s+1:e,prevPage:s>1?s-1:1}},E(u,"exerciseCardType",Object.freeze({HOME:"HOME",FAVORITES:"FAVORITES"}));let y=u;const Y=new y,H=new A;function I(){const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=document.body,i=()=>{const c=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!c),t.classList.toggle("is-open"),r.classList.toggle("menu-open"),r.classList.contains("menu-open")?n():o()},a=()=>{t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),r.classList.remove("menu-open"),o()},n=()=>{r.style.overflow="hidden"},o=()=>{r.style.overflow="visible"};e.addEventListener("click",i),s.addEventListener("click",i),r.addEventListener("click",c=>{c.target.closest(".js-menu-container")||c.target.closest(".js-open-menu")||t.classList.contains("is-open")&&a()}),window.matchMedia("(min-width: 768px)").addEventListener("change",c=>{c.matches&&a()})}I();const C="https://your-energy.b.goit.study";var l;class N{constructor(e){b(this,l,"");$(this,l,e)}filters(e){const s=new URLSearchParams(e);return fetch(`${d(this,l)}/api/filters?${s}`).then(r=>{if(r.ok)return r.json();throw new Error("Error fetching filters")})}exercises(e){const s=new URLSearchParams(e);return fetch(`${d(this,l)}/api/exercises?${s}`).then(r=>{if(r.ok)return r.json();throw new Error("Error fetching exercises")})}quotes(){return fetch(`${d(this,l)}/api/quote`).then(e=>{if(e.ok)return e.json();throw new Error("Error fetching qoute")})}getExerciseById(e){return fetch(`${d(this,l)}/api/exercises/${e}`).then(s=>{if(s.ok)return s.json();throw new Error("Error fetching exercise by ID")})}patchRating(e,s){return fetch(`${d(this,l)}/api/exercises/${e}/rating`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(r=>{if(r.ok)return r.json();throw new Error("Error patching rating")})}createSubscription(e){return fetch(`${d(this,l)}/api/subscription`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(s=>{if(s.ok)return s.json();switch(s.status){case 409:throw new Error("Email has been already subscribed");default:throw new Error("Error creating subscription")}})}}l=new WeakMap;const R=new N(C);let v=!1,_,m=null;const p=document.querySelector(".exercises-popup"),h=document.querySelector(".overlay"),D=document.querySelector(".exercises-cards-list");D.addEventListener("click",J);async function J(t){if(t.target.closest(".card__btn"))try{const e=t.target.closest(".card__btn").getAttribute("data-id"),s=await R.getExerciseById(e);m=s,_=e;const r=H.getExerciseDetailsHTML(s);K(r,s),U(),document.querySelector(".exercises-modal-favorite-btn").addEventListener("click",W),document.querySelector(".modal-closed-btn").addEventListener("click",w)}catch(e){console.log(e)}}function U(){const t=window.innerWidth-document.body.offsetWidth+"px";p.classList.remove("hidden"),h.classList.remove("hidden"),document.body.style.paddingRight=t,document.body.style.overflow="hidden"}function K(t,e){p.innerHTML=t,V(e)}function V(t){const e=document.querySelector(".exercises-modal-favorite-btn");v=g.isFavorite(t._id),v?e.innerHTML=F():e.innerHTML=S()}function W(){v=!g.isFavorite(m._id);const t=document.querySelector(".exercises-modal-favorite-btn");document.querySelector(".fav-list"),v?(t.innerHTML=F(),g.addExerciseToFavorites(m)):(t.innerHTML=S(),g.removeExerciseFromFavorites(m._id))}function S(){return`
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
  </svg>`}function w(){p.classList.add("hidden"),h.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}h.addEventListener("click",function(t){t.target===h&&w()});document.addEventListener("keydown",function(t){t.key==="Escape"&&!p.classList.contains("hidden")&&w()});export{y as E,R as a,Y as e,g as f};
//# sourceMappingURL=modal-51bd5034.js.map
