var N=Object.defineProperty;var _=(s,e,t)=>e in s?N(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var q=(s,e,t)=>(_(s,typeof e!="symbol"?e+"":e,t),t),E=(s,e,t)=>{if(!e.has(s))throw TypeError("Cannot "+t)};var h=(s,e,t)=>(E(s,e,"read from private field"),t?t.call(s):e.get(s)),S=(s,e,t)=>{if(e.has(s))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(s):e.set(s,t)},F=(s,e,t,r)=>(E(s,e,"write to private field"),r?r.call(s,t):e.set(s,t),t);var M=(s,e,t)=>(E(s,e,"access private method"),t);import{i as C}from"./vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();class U{constructor(){this.favouritesKey="favouriteExercises"}addExerciseToFavorites(e){const t=this.getFavorites();t.push(e),localStorage.setItem(this.favouritesKey,JSON.stringify(t))}removeExerciseFromFavorites(e){let t=this.getFavorites();t=t.filter(r=>r._id!==e),localStorage.setItem(this.favouritesKey,JSON.stringify(t))}getFavorites(){const e=localStorage.getItem(this.favouritesKey);return e?JSON.parse(e):[]}isFavorite(e){return this.getFavorites().some(r=>r._id===e)}}const x=new U,n="/appaloosa-puffskeins/assets/icons-95a2add5.svg";class V{getExerciseDetailsHTML({_id:e,bodyPart:t,equipment:r,gifUrl:i,name:a,target:o,description:l,rating:d,burnedCalories:H,time:D,popularity:B,isFavorite:Ee}){return`
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

      <h3 class='exercises-modal-title'>${a.charAt(0).toUpperCase()+a.slice(1)}</h3>

      <div class='exercises-modal-rating-container'>
        <span class='exercises-modal-rating-value'>${d.toFixed(1)}</span>
        <fieldset class='exercises-modal-rating'>
          <input
            class='exercises-modal-rating-input'
            type='radio'
            id='star1'
            name='rating'
          />
          <label class='exercises-modal-rating-label' for='star1'>
            <svg
            class='exercises-modal-favorite-icon rating-star ${d>=1?"rated":""}'
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
            class='exercises-modal-favorite-icon rating-star ${d>=2?"rated":""}'
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
            class='exercises-modal-favorite-icon rating-star ${d>=3?"rated":""}'
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
            class='exercises-modal-favorite-icon rating-star ${d>=4?"rated":""}'
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
            class='exercises-modal-favorite-icon rating-star ${d>=5?"rated":""}'
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
          <p class='excercises-modal-aftertitle js-popularity'>${B}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Burned calories</h4>
          <p class='excercises-modal-aftertitle js-burned-calories'>${H}/${D} min</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'></h4>
          <p class='excercises-modal-aftertitle js-burned-calories'></p>
        </li>
      </ul>

      <hr class='exercises-modal-line-second' />

      <p class='exercises-modal-description'>${l}</p>


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
        <button class='exercises-modal-favorite-btn rating-btn'>Give a rating</button>
      </div>
  </div>
`}}var y,A;const p=class p{constructor(){S(this,y)}getExerciseListHTML(e,t){if(!p.exerciseCardType[t])return console.error(`Unsupported exercise card type '${t}' when trying to create exercise card.`),"";let r;return t===p.exerciseCardType.FAVORITES&&(r=`
        <button class='js-remove move-to-trash-btn' type='button'>
        <svg class='move-to-trash-icon' width='16' height='16'>
              <use href='${n}#icon-trash'></use>
            </svg>
          </button>`),e.map(i=>(t===p.exerciseCardType.HOME&&(r=`
        <div class='rating'>
        <span class='rating-value'>${i.rating.toFixed(1)}</span>
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
          <span class='title-text text-clipped'>
            ${i.name.charAt(0).toUpperCase()+i.name.slice(1)}
          </span>
        </div>
        <div class='details'>
          <div class='detail'>
            <span class='detail-title'>Burned calories:</span>
            <span class='detail-value text-clipped'>${i.burnedCalories} / ${i.time} min</span>
          </div>
          <div class='detail'>
            <span class='detail-title'>Body part:</span>
            <span class='detail-value text-clipped'>
              ${i.bodyPart.charAt(0).toUpperCase()+i.bodyPart.slice(1)}
              </span>
          </div>
          <div class='detail'>
            <span class='detail-title'>Target:</span>
            <span class='detail-value text-clipped'>
              ${i.target.charAt(0).toUpperCase()+i.target.slice(1)}
            </span>
          </div>
        </div>
      </li>`)).join("")}getExerciseCategoryListHTML(e){return e.map(({filter:t,name:r,imgURL:i})=>`
              <li class='exs-card-item' data-name='${r}'>
                  <img class='exs-card-img' src='${i}' alt='${r}' />
                      <div class='exs-card-container'>
                          <h3 class='exs-card-title'>${r}</h3>
                          <p class='exs-card-description'>${t}</p>
                      </div>
                  </li>`).join("")}getPaginationHTML(e,t=1,r=9){let i="";if(e<1)return i;let a=l=>(l=parseInt(l),isNaN(l)?0:l);e=a(e),t=a(t),r=a(r);const o=M(this,y,A).call(this,e,t,r);return e>5&&t>1&&(i+=`
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
          </li>`),o.pages.forEach(l=>{i+=`<li class='exs-pagination-item ${o.page==l?"active":""}'><a class='exs-pagination-link' ${l!=="..."?`data-page="${l}"`:""}>${l}</a></li>`}),e>5&&t<e&&(i+=`
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
        </li>`),i}};y=new WeakSet,A=function(e,t=1,r=9){e=e>1?e:1;let i=[];if(e>4)i=[t===1?1:t<e-2?t-1:e-4,t<e-2?t===1?2:t:e-3,t<e-2?t===1?3:t+1:e-2,t<e-3?"...":e-1,e];else for(let a=1;a<=e;a++)i.push(a);return{pages:i,page:t<=e?t:1,maxPage:e,nextPage:t<e?t+1:e,prevPage:t>1?t-1:1}},q(p,"exerciseCardType",Object.freeze({HOME:"HOME",FAVORITES:"FAVORITES"}));let L=p;const $e=new L,J=new V;function P(){const s=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),r=document.body,i=()=>{const d=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!d),s.classList.toggle("is-open"),r.classList.toggle("menu-open"),r.classList.contains("menu-open")?o():l()},a=()=>{s.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),r.classList.remove("menu-open"),l()},o=()=>{r.style.overflow="hidden"},l=()=>{r.style.overflow="visible"};e.addEventListener("click",i),t.addEventListener("click",i),r.addEventListener("click",d=>{d.target.closest(".js-menu-container")||d.target.closest(".js-open-menu")||s.classList.contains("is-open")&&a()}),window.matchMedia("(min-width: 768px)").addEventListener("change",d=>{d.matches&&a()})}function z(){const s=window.location.pathname,e=[{label:"Home",href:"index.html",activeOn:"index.html"},{label:"Favorites",href:"favorites.html",activeOn:"favorites.html"}],t=document.createElement("ul");t.classList.add("header-pages");for(const i of e){const a=document.createElement("li");if(a.classList.add("header-pages-item"),s===i.activeOn||s===i.href||s.endsWith(i.activeOn))a.classList.add("header-pages-active"),a.textContent=i.label;else{a.classList.add("header-inactive");const o=document.createElement("a");o.classList.add("header-item-link"),o.href=i.href,o.textContent=i.label,a.appendChild(o)}t.appendChild(a)}let r=document.querySelector("#header-pages");r.replaceChild(t,r.querySelectorAll("ul")[0]),r=document.querySelector("#header-pages")}function K(){const s=window.location.pathname,e=[{label:"Home",href:"index.html",activeOn:"index.html"},{label:"Favorites",href:"favorites.html",activeOn:"favorites.html"}],t=document.createElement("ul");t.classList.add("header-mob-wrap-pages");for(const i of e){const a=document.createElement("li");if(a.classList.add("mob-wrap-item"),s===i.activeOn||s===i.href||s.endsWith(i.activeOn))a.classList.add("mob-wrap-item-active"),a.textContent=i.label;else{const o=document.createElement("a");o.classList.add("mob-wrap-pages"),o.href=i.href,o.textContent=i.label,a.appendChild(o)}t.appendChild(a)}let r=document.querySelector("#header-mob-pages");r.replaceChild(t,r.querySelectorAll("ul")[0]),r=document.querySelector("#header-mob-pages")}window.onload=function(){z(),K()};P();const W="https://your-energy.b.goit.study";var u;class Q{constructor(e){S(this,u,"");F(this,u,e)}filters(e){const t=new URLSearchParams(e);return fetch(`${h(this,u)}/api/filters?${t}`).then(r=>{if(r.ok)return r.json();throw new Error("Error fetching filters")})}exercises(e){const t=new URLSearchParams(e);return fetch(`${h(this,u)}/api/exercises?${t}`).then(r=>{if(r.ok)return r.json();throw new Error("Error fetching exercises")})}quotes(){return fetch(`${h(this,u)}/api/quote`).then(e=>{if(e.ok)return e.json();throw new Error("Error fetching qoute")})}getExerciseById(e){return fetch(`${h(this,u)}/api/exercises/${e}`).then(t=>{if(t.ok)return t.json();throw new Error("Error fetching exercise by ID")})}patchRating(e,t){return fetch(`${h(this,u)}/api/exercises/${e}/rating`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(r=>r.ok?r.json():r.json().then(i=>{throw new Error(i.message)}))}createSubscription(e){return fetch(`${h(this,u)}/api/subscription`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(t=>{if(t.ok)return t.json();switch(t.status){case 409:throw new Error("Email has been already subscribed");default:throw new Error("Error creating subscription")}})}}u=new WeakMap;const $=new Q(W),c={exercisesPopup:document.querySelector("#exercises-popup"),modalRating:document.querySelector("#modal-rating"),openExercisePopup:document.querySelectorAll("[data-start-exercise]"),ratingForm:document.querySelector("#rating-form"),ratingStars:document.querySelectorAll(".rating-label"),ratingValue:document.querySelector(".js-modal-rate"),closeModalBtn:document.querySelector(".rating-close-btn")};document.addEventListener("keydown",ne);c.ratingForm.addEventListener("submit",function(s){te(s,this.id.value)});function Z(){re(),c.closeModalBtn.addEventListener("click",w),c.modalRating.addEventListener("click",oe),G()}function G(){c.ratingStars.forEach(s=>{s.addEventListener("click",Y)})}function Y(){const s=parseInt(this.dataset.rate);X(s),ee(c.ratingStars,s)}function X(s){c.ratingForm.rate.value=s,c.ratingValue.textContent=s.toFixed(1)}function ee(s,e){s.forEach((t,r)=>{const i=r<e?"#EEA10C":"#F4F4F4",a=r<e?"1":"0.2";t.querySelector(".rating-star>path").style.fill=i,t.querySelector(".rating-star>path").style.fillOpacity=a})}function te(s,e){s.preventDefault();const t=Object.fromEntries(new FormData(c.ratingForm).entries());t.id=e;const r=t.email.trim();if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(r))se(t);else{C.error({position:"center",timeout:5e3,color:"red",message:"Please enter valid email"});return}}function se(s){$.patchRating(s.id,{rate:Number(s.rate),email:s.email,review:s.review.trim()}).then(()=>{w(),ie()}).catch(e=>ae(e))}function ie(){c.ratingForm.reset(),c.ratingStars.forEach(s=>{s.querySelector(".rating-star>path").style.fill="#F4F4F4",s.querySelector(".rating-star>path").style.fillOpacity="0.2"}),c.ratingValue.textContent="0.0"}function w(){c.exercisesPopup.classList.remove("hidden"),c.modalRating.classList.add("hidden")}function re(){c.exercisesPopup.classList.add("hidden"),c.modalRating.classList.remove("hidden")}function ae(s){C.error({title:"Повідомлення",message:s.message,position:"topCenter",color:"white",timeout:5e3})}function oe(s){s.target==c.modalRating&&w()}function ne(s){s.key==="Escape"&&w()}let b=!1,ce,g=null;const v=document.querySelector(".exercises-popup"),f=document.querySelector(".overlay"),le=document.querySelector("#rating-form"),de=document.querySelector(".exercises-cards-list");de.addEventListener("click",ue);async function ue(s){if(s.target.closest(".card__btn"))try{const e=s.target.closest(".card__btn").getAttribute("data-id"),t=await $.getExerciseById(e);g=t,ce=e;const r=J.getExerciseDetailsHTML(t);he(r,t),me(),document.querySelector(".exercises-modal-favorite-btn").addEventListener("click",O);const a=document.querySelector(".rating-btn");le.id.value=e,a.addEventListener("click",Z),document.querySelector(".modal-closed-btn").addEventListener("click",m)}catch{throw new Error("An error occurred during the download. Please try again later.")}}function me(){const s=window.innerWidth-document.body.offsetWidth+"px";v.classList.remove("hidden"),f.classList.remove("hidden"),document.body.style.paddingRight=s,document.body.style.overflow="hidden",f.addEventListener("click",function(e){e.target===f&&m()}),document.addEventListener("keydown",function(e){e.key==="Escape"&&!v.classList.contains("hidden")&&m()})}function he(s,e){v.innerHTML=s,fe(e)}function fe(s){const e=document.querySelector(".exercises-modal-favorite-btn");b=x.isFavorite(s._id),b?e.innerHTML=j():e.innerHTML=T()}function O(){b=!x.isFavorite(g._id);const s=document.querySelector(".exercises-modal-favorite-btn");document.querySelector(".fav-list"),b?(s.innerHTML=j(),x.addExerciseToFavorites(g),pe(g._id)):(s.innerHTML=T(),x.removeExerciseFromFavorites(g._id),ge(g._id))}function ge(s){const e=[...document.querySelectorAll(".fav-list .exercise")].filter(t=>t.dataset.exerciseId==s);!e||e.length===0||e[0].classList.add("hidden")}function pe(s){const e=[...document.querySelectorAll(".fav-list .exercise")].filter(t=>t.dataset.exerciseId==s);!e||e.length===0||e[0].classList.remove("hidden")}function T(){return`
  Add to favorites
    <svg
            class='exercises-modal-favorite-icon'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
    <use href='${n}#icon-heart'></use>
    </svg>`}function j(){return`
  Remove from favorites
  <svg
            class='exercises-modal-favorite-icon'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
    <use href='${n}#icon-trash'></use>
  </svg>`}function m(){v.classList.add("hidden"),f.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto",document.querySelector(".modal-closed-btn").removeEventListener("click",m),document.querySelector(".exercises-modal-favorite-btn").removeEventListener("click",O),f.removeEventListener("click",m),document.removeEventListener("keydown",m)}f.addEventListener("click",function(s){s.target===f&&m()});document.addEventListener("keydown",function(s){s.key==="Escape"&&!v.classList.contains("hidden")&&m()});const k={quoteTextEl:document.querySelector(".quote-text"),quoteAuthorEl:document.querySelector(".quote-author")},I=new Date().toDateString(),ve=localStorage.getItem("quoteDate");xe();function xe(){I!==ve?be():we()}function be(){$.quotes().then(s=>{R(s.quote,s.author),ye(s.quote,s.author,I)})}function R(s,e){k.quoteTextEl.innerHTML=`${s}`,k.quoteAuthorEl.innerHTML=`${e}`}function ye(s,e,t){localStorage.setItem("quoteText",s),localStorage.setItem("quoteAuthor",e),localStorage.setItem("quoteDate",t)}function we(){const s=localStorage.getItem("quoteText"),e=localStorage.getItem("quoteAuthor");R(s,e)}export{L as E,$ as a,$e as e,x as f};
//# sourceMappingURL=dayquote-8e9eb6e1.js.map
