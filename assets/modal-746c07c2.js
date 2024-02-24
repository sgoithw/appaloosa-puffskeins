var q=Object.defineProperty;var I=(t,e,s)=>e in t?q(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var E=(t,e,s)=>(I(t,typeof e!="symbol"?e+"":e,s),s),b=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var u=(t,e,s)=>(b(t,e,"read from private field"),s?s.call(t):e.get(t)),y=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},L=(t,e,s,r)=>(b(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s);var M=(t,e,s)=>(b(t,e,"access private method"),s);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=s(i);fetch(i.href,a)}})();class A{constructor(){this.favouritesKey="favouriteExercises"}addExerciseToFavorites(e){const s=this.getFavorites();s.push(e),localStorage.setItem(this.favouritesKey,JSON.stringify(s))}removeExerciseFromFavorites(e){let s=this.getFavorites();s=s.filter(r=>r._id!==e),localStorage.setItem(this.favouritesKey,JSON.stringify(s))}getFavorites(){const e=localStorage.getItem(this.favouritesKey);return e?JSON.parse(e):[]}isFavorite(e){return this.getFavorites().some(r=>r._id===e)}}const f=new A,n="/appaloosa-puffskeins/assets/icons-ff4921fd.svg",S="/appaloosa-puffskeins/assets/modal-exercise-image-9f3efc6c.jpg",H="/appaloosa-puffskeins/assets/modal-exercise-image-9f3efc6c.jpg";class C{getExerciseDetailsHTML({_id:e,bodyPart:s,equipment:r,gifUrl:i,name:a,target:l,description:o,rating:c,burnedCalories:T,time:O,popularity:B,isFavorite:Q}){return`
  <div class='exercises-modal' data-id='${e}'>
  <div class='exercises-container'">
    <div class='exercises-modal-left'>
      <img class='exercises-modal-image'
      ${i?`src=${i}`:`srcset = '${S} 1x,${H} 2x' src = '${S}'`}
      alt='exercise for body-part'  />
    </div>

    <div class='exercises-modal-right'>
      <button class='exercises-modal-close modal-closed-btn'>
            <svg width='24' height='24'>
                <use href='${n}#icon-close-x'></use>
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
            <use href='${n}#icon-star'></use>
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
            <use href='${n}#icon-star'></use>
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
            <use href='${n}#icon-star'></use>
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
            <use href='${n}#icon-star'></use>
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
            <use href='${n}#icon-star'></use>
          </svg>
          </label>
        </fieldset>
      </div>

      <hr class='exercises-modal-line' />

      <ul class='excercises-modal-list'>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Taget</h4>
          <p class='excercises-modal-aftertitle js-target'>${l}</p>
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
          <p class='excercises-modal-aftertitle js-popularity'>${B}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Burned calories</h4>
          <p class='excercises-modal-aftertitle js-burned-calories'>${T}/${O}</p>
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
            <use href='${n}#icon-heart'></use>
          </svg>
        </button>
<!--        <button class="exercises-modal-rating-btn">Give a rating</button>-->
      </div>
  </div>
`}}var g,F;const h=class h{constructor(){y(this,g)}getExerciseListHTML(e,s){if(!h.exerciseCardType[s])return console.error(`Unsupported exercise card type '${s}' when trying to create exercise card.`),"";let r;return s===h.exerciseCardType.FAVORITES&&(r=`
        <button class='js-remove move-to-trash-btn' type='button'>
        <svg class='move-to-trash-icon' width='16' height='16'>
              <use href='${n}#icon-trash'></use>
            </svg>
          </button>`),e.map(i=>(s===h.exerciseCardType.HOME&&(r=`
        <div class='rating'>
        <span class='rating-value'>${i.rating}</span>
        <svg class='rating-icon' width='18' height='18'>
        <use href='${n}#icon-Star'></use>
        </svg>
        </div>`),`
      <li class='exercise' data-exercise-id='${i._id}'>
        <button class='main-action-btn card__btn' data-id='${i._id}' type='button'>
          Start
          <svg class='main-action-arrow-icon' width='16' height='16'>
            <use href='${n}#icon-arrow-right'></use>
          </svg>
        </button>
        <div class='top'>
          <span class='badge'>Workout</span>
          ${r}
        </div>
        <div class='title'>
          <svg class='title-icon' width='14' height='16'>
            <use href='${n}#icon-running-stick-figure-svgrepo-com-1'></use>
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
                  </li>`).join("")}getPaginationHTML(e,s=1,r=9){let i="",a=o=>(o=parseInt(o),isNaN(o)?0:o);e=a(e),s=a(s),r=a(r);const l=M(this,g,F).call(this,e,s,r);return s>1&&(i+=`
        <li class='exs-pagination-item'>
            <a class='exs-pagination-link' data-page='${s-1} '>
                <svg class='icon-pagination-arrow' width='20' height='20'>
                    <use href='${n}#icon-fi-rr-angle-small-left'></use>
                </svg>
            </a>
        </li>`),l.pages.forEach(o=>{i+=`<li class='exs-pagination-item ${l.page==o?"active":""}'><a class='exs-pagination-link' ${o!=="..."?`data-page="${o}"`:""}>${o}</a></li>`}),s<e&&(i+=`
        <li class='exs-pagination-item'>
            <a class='exs-pagination-link' data-page='${s+1} '>
                <svg class='icon-pagination-arrow' width='20' height='20'>
                    <use href='${n}#icon-fi-rr-angle-small-right'></use>
                </svg>
            </a>
        </li>`),i}};g=new WeakSet,F=function(e,s=1,r=9){e=e>1?e:1;let i=[];if(e>4)i=[s===1?1:s<e-2?s-1:e-4,s<e-2?s===1?2:s:e-3,s<e-2?s===1?3:s+1:e-2,s<e-3?"...":e-1,e];else for(let a=1;a<=e;a++)i.push(a);return{pages:i,page:s<=e?s:1,maxPage:e,nextPage:s<e?s+1:e,prevPage:s>1?s-1:1}},E(h,"exerciseCardType",Object.freeze({HOME:"HOME",FAVORITES:"FAVORITES"}));let $=h;const Z=new $,N=new C;function R(){const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),r=document.body,i=()=>{const c=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!c),t.classList.toggle("is-open"),r.classList.toggle("menu-open"),r.classList.contains("menu-open")?l():o()},a=()=>{t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),r.classList.remove("menu-open"),o()},l=()=>{r.style.overflow="hidden"},o=()=>{r.style.overflow="visible"};e.addEventListener("click",i),s.addEventListener("click",i),r.addEventListener("click",c=>{c.target.closest(".js-menu-container")||c.target.closest(".js-open-menu")||t.classList.contains("is-open")&&a()}),window.matchMedia("(min-width: 768px)").addEventListener("change",c=>{c.matches&&a()})}R();const _="https://your-energy.b.goit.study";var d;class D{constructor(e){y(this,d,"");L(this,d,e)}filters(e){const s=new URLSearchParams(e);return fetch(`${u(this,d)}/api/filters?${s}`).then(r=>{if(r.ok)return r.json();throw new Error("Error fetching filters")})}exercises(e){const s=new URLSearchParams(e);return fetch(`${u(this,d)}/api/exercises?${s}`).then(r=>{if(r.ok)return r.json();throw new Error("Error fetching exercises")})}quotes(){return fetch(`${u(this,d)}/api/quote`).then(e=>{if(e.ok)return e.json();throw new Error("Error fetching qoute")})}getExerciseById(e){return fetch(`${u(this,d)}/api/exercises/${e}`).then(s=>{if(s.ok)return s.json();throw new Error("Error fetching exercise by ID")})}patchRating(e,s){return fetch(`${u(this,d)}/api/exercises/${e}/rating`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(r=>{if(r.ok)return r.json();throw new Error("Error patching rating")})}createSubscription(e){return fetch(`${u(this,d)}/api/subscription`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(s=>{if(s.ok)return s.json();switch(s.status){case 409:throw new Error("Email has been already subscribed");default:throw new Error("Error creating subscription")}})}}d=new WeakMap;const J=new D(_);let v=!1,U,p=null;const x=document.querySelector(".exercises-popup"),m=document.querySelector(".overlay"),K=document.querySelector(".exercises-cards-list");K.addEventListener("click",V);async function V(t){if(t.target.closest(".card__btn"))try{const e=t.target.closest(".card__btn").getAttribute("data-id"),s=await J.getExerciseById(e);p=s,U=e;const r=N.getExerciseDetailsHTML(s);z(r,s),W(),document.querySelector(".exercises-modal-favorite-btn").addEventListener("click",Y),document.querySelector(".modal-closed-btn").addEventListener("click",w)}catch(e){console.log(e)}}function W(){const t=window.innerWidth-document.body.offsetWidth+"px";x.classList.remove("hidden"),m.classList.remove("hidden"),document.body.style.paddingRight=t,document.body.style.overflow="hidden"}function z(t,e){x.innerHTML=t,G(e)}function G(t){const e=document.querySelector(".exercises-modal-favorite-btn");v=f.isFavorite(t._id),v?e.innerHTML=k():e.innerHTML=j()}function Y(){v=!f.isFavorite(p._id);const t=document.querySelector(".exercises-modal-favorite-btn");document.querySelector(".fav-list"),v?(t.innerHTML=k(),f.addExerciseToFavorites(p)):(t.innerHTML=j(),f.removeExerciseFromFavorites(p._id))}function j(){return`
  Add to favorites
    <svg
            class="exercises-modal-favorite-icon"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
    <use href="/img/icons.svg#icon-heart"></use>
    </svg>`}function k(){return`
  Remove from favorites
  <svg
            class="exercises-modal-favorite-icon"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
    <use href="/img/icons.svg#icon-trash"></use>
  </svg>`}function w(){x.classList.add("hidden"),m.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}m.addEventListener("click",function(t){t.target===m&&w()});document.addEventListener("keydown",function(t){t.key==="Escape"&&!x.classList.contains("hidden")&&w()});export{$ as E,J as a,Z as e,f};
//# sourceMappingURL=modal-746c07c2.js.map
