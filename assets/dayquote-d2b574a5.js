var D=Object.defineProperty;var B=(s,e,t)=>e in s?D(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var E=(s,e,t)=>(B(s,typeof e!="symbol"?e+"":e,t),t),y=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var u=(s,e,t)=>(y(s,e,"read from private field"),t?t.call(s):e.get(s)),w=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},L=(s,e,t,r)=>(y(s,e,"write to private field"),r?r.call(s,t):e.set(s,t),t);var S=(s,e,t)=>(y(s,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();class N{constructor(){this.favouritesKey="favouriteExercises"}addExerciseToFavorites(e){const t=this.getFavorites();t.push(e),localStorage.setItem(this.favouritesKey,JSON.stringify(t))}removeExerciseFromFavorites(e){let t=this.getFavorites();t=t.filter(r=>r._id!==e),localStorage.setItem(this.favouritesKey,JSON.stringify(t))}getFavorites(){const e=localStorage.getItem(this.favouritesKey);return e?JSON.parse(e):[]}isFavorite(e){return this.getFavorites().some(r=>r._id===e)}}const p=new N,n="/appaloosa-puffskeins/assets/icons-95a2add5.svg";class R{getExerciseDetailsHTML({_id:e,bodyPart:t,equipment:r,gifUrl:i,name:a,target:o,description:c,rating:l,burnedCalories:j,time:A,popularity:H,isFavorite:oe}){return`
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
                <use href='${n}#icon-close-x'></use>
            </svg>
      </button>

      <h3 class='exercises-modal-title'>${a}</h3>

      <div class='exercises-modal-rating-container'>
        <span class='exercises-modal-rating-value'>${l}</span>
        <fieldset class='exercises-modal-rating'>
          <input
            class='exercises-modal-rating-input'
            type='radio'
            id='star1'
            name='rating'
          />
          <label class='exercises-modal-rating-label' for='star1'>
            <svg
            class='exercises-modal-favorite-icon rating-star ${l>=1?"rated":""}'
            width='20'
            height='20'
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
            class='exercises-modal-favorite-icon rating-star ${l>=2?"rated":""}'
            width='20'
            height='20'
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
            class='exercises-modal-favorite-icon rating-star ${l>=3?"rated":""}'
            width='20'
            height='20'
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
            class='exercises-modal-favorite-icon rating-star ${l>=4?"rated":""}'
            width='20'
            height='20'
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
            class='exercises-modal-favorite-icon rating-star ${l>=5?"rated":""}'
            width='20'
            height='20'
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
          <p class='excercises-modal-aftertitle js-target'>${o}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Body Part</h4>
          <p class='excercises-modal-aftertitle js-body-part'>${t}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Equipment</h4>
          <p class='excercises-modal-aftertitle js-equipment'>${r}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Popular</h4>
          <p class='excercises-modal-aftertitle js-popularity'>${H}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Burned calories</h4>
          <p class='excercises-modal-aftertitle js-burned-calories'>${j}/${A}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'></h4>
          <p class='excercises-modal-aftertitle js-burned-calories'></p>
        </li>
      </ul>

      <hr class='exercises-modal-line-second' />

      <p class='exercises-modal-description'>${c}</p>


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
`}}var b,q;const m=class m{constructor(){w(this,b)}getExerciseListHTML(e,t){if(!m.exerciseCardType[t])return console.error(`Unsupported exercise card type '${t}' when trying to create exercise card.`),"";let r;return t===m.exerciseCardType.FAVORITES&&(r=`
        <button class='js-remove move-to-trash-btn' type='button'>
        <svg class='move-to-trash-icon' width='16' height='16'>
              <use href='${n}#icon-trash'></use>
            </svg>
          </button>`),e.map(i=>(t===m.exerciseCardType.HOME&&(r=`
        <div class='rating'>
        <span class='rating-value'>${i.rating}</span>
        <svg class='rating-icon' width='18' height='18'>
        <use href='${n}#icon-star'></use>
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
      </li>`)).join("")}getExerciseCategoryListHTML(e){return e.map(({filter:t,name:r,imgURL:i})=>`
              <li class='exs-card-item' data-name='${r}'>
                  <img class='exs-card-img' src='${i}' alt='${r}' />
                      <div class='exs-card-container'>
                          <h3 class='exs-card-title'>${r}</h3>
                          <p class='exs-card-description'>${t}</p>
                      </div>
                  </li>`).join("")}getPaginationHTML(e,t=1,r=9){let i="";if(e<1)return i;let a=c=>(c=parseInt(c),isNaN(c)?0:c);e=a(e),t=a(t),r=a(r);const o=S(this,b,q).call(this,e,t,r);return e>5&&t>1&&(i+=`
          <li class='exs-pagination-item circle'>
            <a class='exs-pagination-link ' data-page='1'>
              <svg class='icon-pagination-arrow' width='32' height='32'>
                <use href='${n}#icon-double-arrow-left'></use>
              </svg>
            </a>
          </li>
          <li class='exs-pagination-item circle'>
            <a class='exs-pagination-link ' data-page='${t-1} '>
              <svg class='icon-pagination-arrow' width='20' height='20'>
                <use href='${n}#icon-fi-rr-angle-small-left'></use>
              </svg>
            </a>
          </li>`),o.pages.forEach(c=>{i+=`<li class='exs-pagination-item ${o.page==c?"active":""}'><a class='exs-pagination-link' ${c!=="..."?`data-page="${c}"`:""}>${c}</a></li>`}),e>5&&t<e&&(i+=`
          <li class='exs-pagination-item circle'>
          <a class='exs-pagination-link ' data-page='${t+1} '>
            <svg class='icon-pagination-arrow' width='20' height='20'>
              <use href='${n}#icon-fi-rr-angle-small-right'></use>
            </svg>
            </a>
        </li>
        <li class='exs-pagination-item circle'>
          <a class='exs-pagination-link ' data-page='${e}'>
            <svg class='icon-pagination-arrow' width='32' height='32'>
              <use href='${n}#icon-double-arrow-right'></use>
            </svg>
          </a>
        </li>`),i}};b=new WeakSet,q=function(e,t=1,r=9){e=e>1?e:1;let i=[];if(e>4)i=[t===1?1:t<e-2?t-1:e-4,t<e-2?t===1?2:t:e-3,t<e-2?t===1?3:t+1:e-2,t<e-3?"...":e-1,e];else for(let a=1;a<=e;a++)i.push(a);return{pages:i,page:t<=e?t:1,maxPage:e,nextPage:t<e?t+1:e,prevPage:t>1?t-1:1}},E(m,"exerciseCardType",Object.freeze({HOME:"HOME",FAVORITES:"FAVORITES"}));let $=m;const ce=new $,_=new R;function U(){const s=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),r=document.body,i=()=>{const l=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!l),s.classList.toggle("is-open"),r.classList.toggle("menu-open"),r.classList.contains("menu-open")?o():c()},a=()=>{s.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),r.classList.remove("menu-open"),c()},o=()=>{r.style.overflow="hidden"},c=()=>{r.style.overflow="visible"};e.addEventListener("click",i),t.addEventListener("click",i),r.addEventListener("click",l=>{l.target.closest(".js-menu-container")||l.target.closest(".js-open-menu")||s.classList.contains("is-open")&&a()}),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&a()})}function J(){const s=window.location.pathname,e=[{label:"Home",href:"/index.html",activeOn:"/"},{label:"Favorites",href:"favorites.html",activeOn:"favorites.html"}],t=document.createElement("ul");t.classList.add("header-pages");for(const i of e){const a=document.createElement("li");if(a.classList.add("header-pages-item"),s===i.activeOn||s===i.href||s.endsWith(i.activeOn))a.classList.add("header-pages-active"),a.textContent=i.label;else{a.classList.add("header-inactive");const o=document.createElement("a");o.classList.add("header-item-link"),o.href=i.href,o.textContent=i.label,a.appendChild(o)}t.appendChild(a)}let r=document.querySelector("#header-pages");r.replaceChild(t,r.querySelectorAll("ul")[0]),r=document.querySelector("#header-pages")}function K(){const s=window.location.pathname,e=[{label:"Home",href:"/index.html",activeOn:"/"},{label:"Favorites",href:"favorites.html",activeOn:"favorites.html"}],t=document.createElement("ul");t.classList.add("header-mob-wrap-pages");for(const i of e){const a=document.createElement("li");if(a.classList.add("mob-wrap-item"),s===i.activeOn||s===i.href||s.endsWith(i.activeOn))a.classList.add("mob-wrap-item-active"),a.textContent=i.label;else{const o=document.createElement("a");o.classList.add("mob-wrap-pages"),o.href=i.href,o.textContent=i.label,a.appendChild(o)}t.appendChild(a)}let r=document.querySelector("#header-mob-pages");r.replaceChild(t,r.querySelectorAll("ul")[0]),r=document.querySelector("#header-mob-pages")}window.onload=function(){J(),K()};U();const W="https://your-energy.b.goit.study";var d;class V{constructor(e){w(this,d,"");L(this,d,e)}filters(e){const t=new URLSearchParams(e);return fetch(`${u(this,d)}/api/filters?${t}`).then(r=>{if(r.ok)return r.json();throw new Error("Error fetching filters")})}exercises(e){const t=new URLSearchParams(e);return fetch(`${u(this,d)}/api/exercises?${t}`).then(r=>{if(r.ok)return r.json();throw new Error("Error fetching exercises")})}quotes(){return fetch(`${u(this,d)}/api/quote`).then(e=>{if(e.ok)return e.json();throw new Error("Error fetching qoute")})}getExerciseById(e){return fetch(`${u(this,d)}/api/exercises/${e}`).then(t=>{if(t.ok)return t.json();throw new Error("Error fetching exercise by ID")})}patchRating(e,t){return fetch(`${u(this,d)}/api/exercises/${e}/rating`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(r=>{if(r.ok)return r.json();throw new Error("Error patching rating")})}createSubscription(e){return fetch(`${u(this,d)}/api/subscription`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(t=>{if(t.ok)return t.json();switch(t.status){case 409:throw new Error("Email has been already subscribed");default:throw new Error("Error creating subscription")}})}}d=new WeakMap;const F=new V(W);let g=!1,Q,h=null;const x=document.querySelector(".exercises-popup"),v=document.querySelector(".overlay"),z=document.querySelector(".exercises-cards-list");z.addEventListener("click",G);async function G(s){if(s.target.closest(".card__btn"))try{const e=s.target.closest(".card__btn").getAttribute("data-id"),t=await F.getExerciseById(e);h=t,Q=e;const r=_.getExerciseDetailsHTML(t);X(r,t),Y(),document.querySelector(".exercises-modal-favorite-btn").addEventListener("click",k),document.querySelector(".modal-closed-btn").addEventListener("click",f)}catch{throw new Error("An error occurred during the download. Please try again later.")}}function Y(){const s=window.innerWidth-document.body.offsetWidth+"px";x.classList.remove("hidden"),v.classList.remove("hidden"),document.body.style.paddingRight=s,document.body.style.overflow="hidden",v.addEventListener("click",function(e){e.target===v&&f()}),document.addEventListener("keydown",function(e){e.key==="Escape"&&!x.classList.contains("hidden")&&f()})}function X(s,e){x.innerHTML=s,Z(e)}function Z(s){const e=document.querySelector(".exercises-modal-favorite-btn");g=p.isFavorite(s._id),g?e.innerHTML=O():e.innerHTML=T()}function k(){g=!p.isFavorite(h._id);const s=document.querySelector(".exercises-modal-favorite-btn");document.querySelector(".fav-list"),g?(s.innerHTML=O(),p.addExerciseToFavorites(h),ee(h._id)):(s.innerHTML=T(),p.removeExerciseFromFavorites(h._id),P(h._id))}function P(s){const e=[...document.querySelectorAll(".fav-list .exercise")].filter(t=>t.dataset.exerciseId==s);!e||e.length===0||e[0].classList.add("hidden")}function ee(s){const e=[...document.querySelectorAll(".fav-list .exercise")].filter(t=>t.dataset.exerciseId==s);!e||e.length===0||e[0].classList.remove("hidden")}function T(){return`
  Add to favorites
    <svg
            class='exercises-modal-favorite-icon'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
    <use href='${n}#icon-heart'></use>
    </svg>`}function O(){return`
  Remove from favorites
  <svg
            class='exercises-modal-favorite-icon'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
    <use href='${n}#icon-trash'></use>
  </svg>`}function f(){x.classList.add("hidden"),v.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto",document.querySelector(".modal-closed-btn").removeEventListener("click",f),document.querySelector(".exercises-modal-favorite-btn").removeEventListener("click",k),v.removeEventListener("click",f),document.removeEventListener("keydown",f)}const M={quoteTextEl:document.querySelector(".quote-text"),quoteAuthorEl:document.querySelector(".quote-author")},C=new Date().toDateString(),te=localStorage.getItem("quoteDate");se();function se(){C!==te?ie():ae()}function ie(){F.quotes().then(s=>{I(s.quote,s.author),re(s.quote,s.author,C)})}function I(s,e){M.quoteTextEl.innerHTML=`${s}`,M.quoteAuthorEl.innerHTML=`${e}`}function re(s,e,t){localStorage.setItem("quoteText",s),localStorage.setItem("quoteAuthor",e),localStorage.setItem("quoteDate",t)}function ae(){const s=localStorage.getItem("quoteText"),e=localStorage.getItem("quoteAuthor");I(s,e)}export{$ as E,F as a,ce as e,p as f};
//# sourceMappingURL=dayquote-d2b574a5.js.map
