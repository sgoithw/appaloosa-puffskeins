import{a as f,e as l,E as M}from"./assets/dayquote-8e9eb6e1.js";import{i as c}from"./assets/vendor-ad859c2f.js";const h={subscribeForm:document.querySelector("#subscribe-form")};h.subscribeForm.addEventListener("submit",H);function H(e){e.preventDefault();const t=h.subscribeForm.email.value.trim();if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t))h.subscribeForm.reset();else{c.show({position:"center",timeout:5e3,color:"red",message:"Please enter valid email"});return}f.createSubscription({email:t}).then(i=>{const o=i.message;c.show({position:"center",color:"white",message:o.replace(/([^\w!]) /g,"$1<br>")})}).catch(i=>{c.show({position:"center",messageColor:"red",color:"white",message:i.message})}).finally(()=>{})}const s={muscles:"",bodypart:"",equipment:"",keyword:"",page:1,limit:10},C={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},p=document.querySelector(".exercises-cards-list"),a=document.querySelector(".exs-pagination"),S=document.querySelector(".filter-search"),u=document.querySelector(".search-form"),q=document.querySelector(".filter-clear-icon"),L=document.querySelector(".js-breadcrumbs-title-link"),d=document.querySelector("#breadcrumbs");S.addEventListener("change",F);u.addEventListener("submit",B);L.addEventListener("click",P);d.addEventListener("click",e=>e.preventDefault());q.addEventListener("click",A);function P(e){e.preventDefault(),m(r)}function A(){u.reset(),s.keyword="",g()}function F(e){s.keyword=e.target.value.trim()}function B(e){e.preventDefault(),g()}function y(){c.error({title:"Повідомлення:",message:"Помилка отримання вправ. Спробуйте ще.",position:"topCenter",color:"white",timeout:5e3})}let r="Muscles";async function m(e,t=1){try{w(),U(),d.classList.add("hidden"),a.innerHTML="",L.innerHTML="<h2 class='title'>Exercises</h2>";const n=await f.filters({filter:e,page:t,limit:12}),i=n.results;u.style.display="none",p.innerHTML=l.getExerciseCategoryListHTML(i);const o=n.totalPages;a.innerHTML=l.getPaginationHTML(o,t),I()}catch(n){y(),v(),console.error("Error fetching exercises:",n)}}m(r);function b(e){if(e.target.tagName==="A"){const t=parseInt(e.target.dataset.page);if(!isNaN(t)){const n=document.querySelector(".exs-pagination-item.active");parseInt(n.textContent)!==t&&m(r,t)}}}const x=document.querySelectorAll(".exercises-item");x.forEach(e=>{e.addEventListener("click",function(){x.forEach(t=>t.classList.remove("active")),this.classList.add("active"),r=this.textContent,m(r)})});function w(){a.removeEventListener("click",b)}function I(){document.querySelectorAll(".exs-card-item").forEach(t=>t.addEventListener("click",D)),a.addEventListener("click",b)}function D(e){s.muscles="",s.bodypart="",s.equipment="",s.keyword="",s.page=1,s[C[r]]=e.currentTarget.dataset.name,N(e.currentTarget.dataset.name),g()}function N(e){L.innerHTML="<h2 class='title'>Exercises /</h2>",d.classList.remove("hidden"),d.innerHTML=`<h3 class='subtitle'>${e.charAt(0).toUpperCase()}${e.slice(1)}</h3>`}function $(e){const t=document.querySelector(".exercises-cards-list");t.innerHTML="";const n=M.exerciseCardType.HOME,i=l.getExerciseListHTML(e.results,n);t.innerHTML=i,document.querySelectorAll(".exs-pagination-link").forEach(k=>k.addEventListener("click",z)),u.style.display="flex"}function z(e){e.preventDefault(),s.page=e.currentTarget.dataset.page,g()}function g(){w(),_(),a.innerHTML="",f.exercises(s).then(e=>{if(e.results.length===0){c.show({title:"Повідомлення",message:"Такої вправи не існує. Спробуйте ще.",position:"topCenter",timeout:5e3,color:"black"}),v();return}a.innerHTML=l.getPaginationHTML(e.totalPages,s.page,s.limit),$(e)}).catch(e=>{y(),v(),console.error("Помилка отримання вправ:",e)})}function U(){p.innerHTML=j(9)}function _(){p.innerHTML=Y(10)}function v(){p.innerHTML=""}function j(e){let t="";for(const n=e;e>0;e--)t+=`<li class='exs-card-item exs-card-item-loader' data-name='levator scapulae'>
              <div class='exs-card-img'></div>
              <div class='exs-card-container'>
                <h3 class='exs-card-title'><span class='content-placeholder' style='width:80px;'>&nbsp;</span></h3>
                <p class='exs-card-description'><span class='content-placeholder' style='width:60px;'>&nbsp;</span></p>
              </div>
            </li>`;return t}function Y(e){let t="";for(const n=e;e>0;e--)t+=`<li class='exercise' >
          <button class='main-action-btn card__btn' type='button'>
            Start
            <svg class='main-action-arrow-icon' width='16' height='16'>
              <use href='/img/icons.svg#icon-arrow-right'></use>
            </svg>
          </button>
          <div class='top'>
            <span class='badge'>Workout</span>

            <div class='rating'>
              <span class='rating-value'><span class='content-placeholder' style='width:10px;'>&nbsp;</span></span>
              <svg class='rating-icon' width='18' height='18'>
                <use href='/img/icons.svg#icon-star'></use>
              </svg>
            </div>
          </div>
          <div class='title'>
            <svg class='title-icon' width='14' height='16'>
              <use href='/img/icons.svg#icon-running-stick-figure-svgrepo-com-1'></use>
            </svg>
            <span class='title-text text-clipped content-placeholder' style='width:100%; min-width: 150px'>&nbsp;</span>
          </div>
          <div class='details'>
            <div class='detail'>
              <span class='detail-title'>Burned calories:</span>
              <span class='detail-value text-clipped'><span class='content-placeholder' style='width:50px;'>&nbsp;</span></span>
            </div>
            <div class='detail'>
              <span class='detail-title'>Body part:</span>
              <span class='detail-value text-clipped'><span class='content-placeholder' style='width:50px;'>&nbsp;</span></span>
            </div>
            <div class='detail'>
              <span class='detail-title'>Target:</span>
              <span class='detail-value text-clipped'><span class='content-placeholder' style='width:50px;'>&nbsp;</span></span>
            </div>
          </div>
        </li>`;return t}const E=document.querySelector(".go-to-top");E.addEventListener("click",T);window.addEventListener("scroll",Z);function Z(){const e=window.scrollY,t=document.documentElement.clientHeight;E.classList.toggle("go-to-top--show",e>t)}function T(){window.scrollY>0&&(window.scrollBy(0,-75),requestAnimationFrame(T))}
//# sourceMappingURL=commonHelpers2.js.map
