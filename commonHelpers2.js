var R=Object.defineProperty;var N=(t,e,s)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s;var $=(t,e,s)=>(N(t,typeof e!="symbol"?e+"":e,s),s),b=(t,e,s)=>{if(!e.has(t))throw TypeError("Cannot "+s)};var d=(t,e,s)=>(b(t,e,"read from private field"),s?s.call(t):e.get(t)),y=(t,e,s)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,s)},T=(t,e,s,i)=>(b(t,e,"write to private field"),i?i.call(t,s):e.set(t,s),s);var q=(t,e,s)=>(b(t,e,"access private method"),s);/* empty css                      */import{i as w}from"./assets/vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();function J(){const t=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),i=document.body,r=()=>{const c=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!c),t.classList.toggle("is-open"),i.classList.toggle("menu-open"),i.classList.contains("menu-open")?a():l()},o=()=>{t.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),i.classList.remove("menu-open"),l()},a=()=>{i.style.overflow="hidden"},l=()=>{i.style.overflow="visible"};e.addEventListener("click",r),s.addEventListener("click",r),i.addEventListener("click",c=>{c.target.closest(".js-menu-container")||c.target.closest(".js-open-menu")||t.classList.contains("is-open")&&o()}),window.matchMedia("(min-width: 768px)").addEventListener("change",c=>{c.matches&&o()})}J();const K="https://your-energy.b.goit.study";var n;class z{constructor(e){y(this,n,"");T(this,n,e)}filters(e){const s=new URLSearchParams(e);return fetch(`${d(this,n)}/api/filters?${s}`).then(i=>{if(i.ok)return i.json();throw new Error("Error fetching filters")})}exercises(e){const s=new URLSearchParams(e);return fetch(`${d(this,n)}/api/exercises?${s}`).then(i=>{if(i.ok)return i.json();throw new Error("Error fetching exercises")})}quotes(){return fetch(`${d(this,n)}/api/quote`).then(e=>{if(e.ok)return e.json();throw new Error("Error fetching qoute")})}getExerciseById(e){return fetch(`${d(this,n)}/api/exercises/${e}`).then(s=>{if(s.ok)return s.json();throw new Error("Error fetching exercise by ID")})}patchRating(e,s){return fetch(`${d(this,n)}/api/exercises/${e}/rating`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}).then(i=>{if(i.ok)return i.json();throw new Error("Error patching rating")})}createSubscription(e){return fetch(`${d(this,n)}/api/subscription`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(s=>{if(s.ok)return s.json();switch(s.status){case 409:throw new Error("Email has been already subscribed");default:throw new Error("Error creating subscription")}})}}n=new WeakMap;const m=new z(K),L={subscribeForm:document.querySelector("#subscribe-form")};L.subscribeForm.addEventListener("submit",P);function P(t){t.preventDefault();const e=L.subscribeForm.email.value.trim();if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e))L.subscribeForm.reset();else{w.show({position:"center",color:"red",message:"Please enter valid email"});return}m.createSubscription({email:e}).then(i=>{const r=i.message;w.show({position:"center",color:"green",message:`${r}`})}).catch(i=>{w.show({position:"center",color:"red",message:i.message})}).finally(()=>{})}const F={quoteTextEl:document.querySelector(".quote-text"),quoteAuthorEl:document.querySelector(".quote-author")},A=new Date().toDateString(),V=localStorage.getItem("quoteDate");G();function G(){A!==V?U():Q()}function U(){m.quotes().then(t=>{H(t.quote,t.author),W(t.quote,t.author,A)})}function H(t,e){F.quoteTextEl.innerHTML=`${t}`,F.quoteAuthorEl.innerHTML=`${e}`}function W(t,e,s){localStorage.setItem("quoteText",t),localStorage.setItem("quoteAuthor",e),localStorage.setItem("quoteDate",s)}function Q(){const t=localStorage.getItem("quoteText"),e=localStorage.getItem("quoteAuthor");H(t,e)}var f,O;const u=class u{constructor(){y(this,f)}getExerciseListHTML(e,s){if(!u.exerciseCardType[s])return console.error(`Unsupported exercise card type '${s}' when trying to create exercise card.`),"";let i;return s===u.exerciseCardType.FAVORITES&&(i=`
        <button class='move-to-trash-btn' type='button'>
        <svg class='move-to-trash-icon' width='16' height='16'>
              <use href='./../../img/icons.svg#icon-trash'></use>
            </svg>
          </button>`),e.map(r=>(s===u.exerciseCardType.HOME&&(i=`
        <div class='rating'>
        <span class='rating-value'>${r.rating}</span>
        <svg class='rating-icon' width='18' height='18'>
        <use href='./../../img/icons.svg#icon-Star'></use>
        </svg>
        </div>`),`
      <li class='exercise' data-exercise-id='${r._id}'>
        <button class='main-action-btn' type='button'>
          Start
          <svg class='main-action-arrow-icon' width='16' height='16'>
            <use href='./../../img/icons.svg#icon-arrow-right'></use>
          </svg>
        </button>
        <div class='top'>
          <span class='badge'>Workout</span>
          ${i}
        </div>
        <div class='title'>
          <svg class='title-icon' width='14' height='16'>
            <use href='./../../img/icons.svg#icon-running-stick-figure-svgrepo-com-1'></use>
          </svg>
          <span class='title-text text-clipped'>${r.name.charAt(0).toUpperCase()+r.name.slice(1)}</span>
        </div>
        <div class='details'>
          <div class='detail'>
            <span class='detail-title'>Burned calories:</span>
            <span class='detail-value text-clipped'>${r.burnedCalories} / ${r.time} min</span>
          </div>
          <div class='detail'>
            <span class='detail-title'>Body part:</span>
            <span class='detail-value text-clipped'>${r.bodyPart}</span>
          </div>
          <div class='detail'>
            <span class='detail-title'>Target:</span>
            <span class='detail-value text-clipped'>${r.target}</span>
          </div>
        </div>
      </li>`)).join("")}getExerciseCategoryListHTML(e){return console.log(e),e.map(({filter:s,name:i,imgURL:r})=>`
              <li class='exs-card-item' data-name='${i}'>
                  <img class='exs-card-img' src='${r}' alt='${i}' />
                      <div class='exs-card-container'>
                          <h3 class='exs-card-title'>${i}</h3>
                          <p class='exs-card-description'>${s}</p>
                      </div>
                  </li>`).join("")}getPaginationHTML(e,s=1,i=9){let r="";const o=q(this,f,O).call(this,e,s,i);return s>1&&(r+=`
        <li class='exs-pagination-item'>
            <a class='exs-pagination-link' href='#' data-page='${s-1} '>
                <svg class='icon-pagination-arrow' width='20' height='20'>
                    <use href='../../img/icons.svg#icon-fi-rr-angle-small-left'></use>
                </svg>
            </a>
        </li>`),o.pages.forEach(a=>{r+=`<li class='exs-pagination-item ${o.page===a?"active":""}'><a class='exs-pagination-link' href='#' ${a!=="..."?`data-page="${a}"`:""}>${a}</a></li>`}),s<e&&(r+=`
        <li class='exs-pagination-item'>
            <a class='exs-pagination-link' href='#' data-page='${s+1} '>
                <svg class='icon-pagination-arrow' width='20' height='20'>
                    <use href='../../img/icons.svg#icon-fi-rr-angle-small-right'></use>
                </svg>
            </a>
        </li>`),r}};f=new WeakSet,O=function(e,s=1,i=9){e=e>1?e:1;let r=[];if(e>4)r=[s===1?1:s<e-2?s-1:e-4,s<e-2?s===1?2:s:e-3,s<e-2?s===1?3:s+1:e-2,s<e-3?"...":e-1,e];else for(let o=1;o<=e;o++)r.push(o);return{pages:r,page:s<=e?s:1,maxPage:e,nextPage:s<e?s+1:e,prevPage:s>1?s-1:1}},$(u,"exerciseCardType",Object.freeze({HOME:"HOME",FAVORITES:"FAVORITES"}));let M=u;const k=new M;m.filters({filter:"Muscles",page:1,limit:12}).then(t=>{const e=t.results,s=k.getExerciseCategoryListHTML(e),i=document.querySelector(".exercises-cards-list");i.innerHTML=s;const r=document.querySelectorAll(".exercises-item");r.forEach(o=>{o.addEventListener("click",async function(){r.forEach(l=>l.classList.remove("active")),this.classList.add("active");const a=this.textContent;try{const c=(await m.filters({filter:a,page:1,limit:12})).results,p=k.getExerciseCategoryListHTML(c);i.innerHTML=p}catch(l){console.error("Error fetching exercises:",l)}})})}).catch(t=>{console.error("Error fetching exercises:",t)});class Z{constructor(){this.favouritesKey="favouriteExercises"}addExerciseToFavorites(e){const s=this.getFavorites();s.push(e),localStorage.setItem(this.favouritesKey,JSON.stringify(s))}removeExerciseFromFavorites(e){let s=this.getFavorites();s=s.filter(i=>i.id!==e),localStorage.setItem(this.favouritesKey,JSON.stringify(s))}getFavorites(){const e=localStorage.getItem(this.favouritesKey);return e?JSON.parse(e):[]}isFavorite(e){return this.getFavorites().some(i=>i._id===e)}}const E=new Z,j="/appaloosa-puffskeins/assets/modal-exercise-image-9f3efc6c.jpg",_="/appaloosa-puffskeins/assets/modal-exercise-image-9f3efc6c.jpg";let g=!1,Y;const v=document.querySelector(".exercises-popup"),h=document.querySelector(".overlay"),X=document.querySelector(".exercises-cards-list");X.addEventListener("click",ee);async function ee(t){try{const e="64f389465ae26083f39b17a2",s=await m.getExerciseById(e);console.log(s),Y=e;const i=ie(s);te(i,s),se(),document.querySelector(".exercises-modal-favorite-btn").addEventListener("click",oe),document.querySelector(".modal-closed-btn").addEventListener("click",S)}catch(e){console.log(e)}}function se(){const t=window.innerWidth-document.body.offsetWidth+"px";v.classList.remove("hidden"),h.classList.remove("hidden"),document.body.style.paddingRight=t,document.body.style.overflow="hidden"}function te(t,e){v.innerHTML=t,re(e)}function ie({_id:t,bodyPart:e,equipment:s,gifUrl:i,name:r,target:o,description:a,burnedCalories:l,time:c,popularity:p}){const C=D(i);function D(x){return x===null||!x?`srcset = '${j} 1x,${_} 2x'
      src = '${j}'`:`src="${x}"`}return`
  <div class="exercises-modal" data-id="${t}">
  <div class="exercises-container"">
    <div class="exercises-modal-left">
      <img class="exercises-modal-image"
      ${C}
      alt="exercise for body-part"  />
    </div>

    <div class="exercises-modal-right">
      <button class="exercises-modal-close modal-closed-btn">
            <svg width="24" height="24">
                <use href="/img/icons.svg#icon-close-x"></use>
            </svg>
      </button>

      <h3 class="exercises-modal-title">${r}</h3>

      <div class="exercises-modal-rating-container">
        <span class="exercises-modal-rating-value">4.0</span>
        <fieldset class="exercises-modal-rating">
          <input
            class="exercises-modal-rating-input"
            type="radio"
            id="star1"
            name="rating"
          />
          <label class="exercises-modal-rating-label" for="star1" data-rate="1">
            <svg
            class="exercises-modal-favorite-icon rating-star rated"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
            <use href="/img/icons.svg#icon-star"></use>
          </svg>
          </label>
          <input
            class="exercises-modal-rating-input"
            type="radio"
            id="star2"
            name="rating"
          />
          <label class="exercises-modal-rating-label" for="star2" data-rate="2">
            <svg
            class="exercises-modal-favorite-icon rating-star rated"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
            <use href="/img/icons.svg#icon-star"></use>
          </svg>
          </label>
          <input
            class="exercises-modal-rating-input"
            type="radio"
            id="star3"
            name="rating"
          />
          <label class="exercises-modal-rating-label" for="star3" data-rate="3">
            <svg
            class="exercises-modal-favorite-icon rating-star rated"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
            <use href="/img/icons.svg#icon-star"></use>
          </svg>
          </label>
          <input
            class="exercises-modal-rating-input"
            type="radio"
            id="star4"
            name="rating"
          />
          <label class="exercises-modal-rating-label" for="star4" data-rate="4">
            <svg
            class="exercises-modal-favorite-icon rating-star rated"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
            <use href="/img/icons.svg#icon-star"></use>
          </svg>
          </label>
          <input
            class="exercises-modal-rating-input"
            type="radio"
            id="star5"
            name="rating"
          />
          <label class="exercises-modal-rating-label" for="star5" data-rate="5">
            <svg
            class="exercises-modal-favorite-icon rating-star"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
            <use href="/img/icons.svg#icon-star"></use>
          </svg>
          </label>
        </fieldset>
      </div>

      <hr class="exercises-modal-line" />

      <ul class="excercises-modal-list">
        <li class="excercises-modal-item">
          <h4 class="excercises-modal-title">Taget</h4>
          <p class="excercises-modal-aftertitle js-target">${o}</p>
        </li>
        <li class="excercises-modal-item">
          <h4 class="excercises-modal-title">Body Part</h4>
          <p class="excercises-modal-aftertitle js-body-part">${e}</p>
        </li>
        <li class="excercises-modal-item">
          <h4 class="excercises-modal-title">Equipment</h4>
          <p class="excercises-modal-aftertitle js-equipment">${s}</p>
        </li>
        <li class="excercises-modal-item">
          <h4 class="excercises-modal-title">Popular</h4>
          <p class="excercises-modal-aftertitle js-popularity">${p}</p>
        </li>
        <li class="excercises-modal-item">
          <h4 class="excercises-modal-title">Burned calories</h4>
          <p class="excercises-modal-aftertitle js-burned-calories">${l}/${c}</p>
        </li>
        <li class="excercises-modal-item">
          <h4 class="excercises-modal-title"></h4>
          <p class="excercises-modal-aftertitle js-burned-calories"></p>
        </li>
      </ul>
      
      <hr class="exercises-modal-line-second" />

      <p class="exercises-modal-description">${a}</p>


    </div>
    </div>
        <div class="exercises-modal-buttons">
        <button class="exercises-modal-favorite-btn" data-id="${t}">
          Add to favorites
          <svg
            class="exercises-modal-favorite-icon"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
            <use href="/img/icons.svg#icon-heart"></use>
          </svg>
        </button>
        <button class="exercises-modal-rating-btn">Give a rating</button>
      </div>
  </div>
`}function re(t){const e=document.querySelector(".exercises-modal-favorite-btn");console.log(t),g=E.isFavorite(t._id),console.log(t._id),console.log(g),g?(E.removeExerciseFromFavorites(t._id),e.innerHTML=B()):(E.addExerciseToFavorites(t),e.innerHTML=I())}function oe(){g=!g;const t=document.querySelector(".exercises-modal-favorite-btn"),e=document.querySelector(".fav-list");g?(t.innerHTML=B(),e==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100)):(t.innerHTML=I(),e==null?console.log(""):setTimeout(()=>{createMarkupFavorite()},100))}function I(){return`
  Add to favorites
    <svg
            class="exercises-modal-favorite-icon"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
    <use href="/img/icons.svg#icon-heart"></use>
    </svg>`}function B(){return`
  Remove from favorites
  <svg
            class="exercises-modal-favorite-icon"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
    <use href="/img/icons.svg#icon-trash"></use>
  </svg>`}function S(){v.classList.add("hidden"),h.classList.add("hidden"),document.body.style.paddingRight="0px",document.body.style.overflow="auto"}h.addEventListener("click",function(t){t.target===h&&S()});document.addEventListener("keydown",function(t){t.key==="Escape"&&!v.classList.contains("hidden")&&S()});
//# sourceMappingURL=commonHelpers2.js.map
