import{a as v,e as d,E as M}from"./assets/dayquote-8e9eb6e1.js";import{i as r}from"./assets/vendor-ad859c2f.js";const g={subscribeForm:document.querySelector("#subscribe-form")};g.subscribeForm.addEventListener("submit",H);function H(e){e.preventDefault();const t=g.subscribeForm.email.value.trim();if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t))g.subscribeForm.reset();else{r.show({position:"center",timeout:5e3,color:"red",message:"Please enter valid email"});return}v.createSubscription({email:t}).then(i=>{const l=i.message;r.show({position:"center",color:"white",message:l.replace(/([^\w!]) /g,"$1<br>")})}).catch(i=>{r.show({position:"center",messageColor:"red",color:"white",message:i.message})}).finally(()=>{})}const n={muscles:"",bodypart:"",equipment:"",keyword:"",page:1,limit:10},S={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},u=document.querySelector(".exercises-cards-list"),a=document.querySelector(".exs-pagination"),C=document.querySelector(".filter-search"),o=document.querySelector(".search-form"),q=document.querySelector(".filter-clear-icon"),f=document.querySelector(".js-breadcrumbs-title-link"),p=document.querySelector("#breadcrumbs");C.addEventListener("change",A);o.addEventListener("submit",B);f.addEventListener("click",P);p.addEventListener("click",e=>e.preventDefault());q.addEventListener("click",()=>{o.reset()});function P(e){e.preventDefault(),m(c)}function A(e){n.keyword=e.target.value}function B(e){e.preventDefault(),L(),o.reset()}function y(){r.error({title:"Повідомлення:",message:"Помилка отримання вправ. Спробуйте ще.",position:"topCenter",color:"white",timeout:5e3})}let c="Muscles";async function m(e,t=1){try{w(),z(),p.classList.add("hidden"),a.innerHTML="",f.innerHTML="<h2 class='title'>Exercises</h2>";const s=await v.filters({filter:e,page:t,limit:12}),i=s.results;o.style.display="none",u.innerHTML=d.getExerciseCategoryListHTML(i);const l=s.totalPages;a.innerHTML=d.getPaginationHTML(l,t),F()}catch(s){y(),h(),console.error("Error fetching exercises:",s)}}m(c);function b(e){if(e.target.tagName==="A"){const t=parseInt(e.target.dataset.page);if(!isNaN(t)){const s=document.querySelector(".exs-pagination-item.active");parseInt(s.textContent)!==t&&m(c,t)}}}const x=document.querySelectorAll(".exercises-item");x.forEach(e=>{e.addEventListener("click",function(){x.forEach(t=>t.classList.remove("active")),this.classList.add("active"),c=this.textContent,m(c)})});function w(){a.removeEventListener("click",b)}function F(){document.querySelectorAll(".exs-card-item").forEach(t=>t.addEventListener("click",I)),a.addEventListener("click",b)}function I(e){n.muscles="",n.bodypart="",n.equipment="",n.keyword="",n.page=1,n[S[c]]=e.currentTarget.dataset.name,D(e.currentTarget.dataset.name),L()}function D(e){f.innerHTML="<h2 class='title'>Exercises /</h2>",p.classList.remove("hidden"),p.innerHTML=`<h3 class='subtitle'>${e.charAt(0).toUpperCase()}${e.slice(1)}</h3>`}function N(e){const t=document.querySelector(".exercises-cards-list");t.innerHTML="";const s=M.exerciseCardType.HOME,i=d.getExerciseListHTML(e.results,s);t.innerHTML=i,document.querySelectorAll(".exs-pagination-link").forEach(k=>k.addEventListener("click",$)),o.style.display="flex"}function $(e){e.preventDefault(),n.page=e.currentTarget.dataset.page,L()}function L(){w(),U(),a.innerHTML="",v.exercises(n).then(e=>{if(e.results.length===0){r.show({title:"Повідомлення",message:"Такої вправи не існує. Спробуйте ще.",position:"topCenter",timeout:5e3,color:"black"}),h();return}a.innerHTML=d.getPaginationHTML(e.totalPages,n.page,n.limit),N(e)}).catch(e=>{y(),h(),console.error("Помилка отримання вправ:",e)})}function z(){u.innerHTML=_(9)}function U(){u.innerHTML=j(10)}function h(){u.innerHTML=""}function _(e){let t="";for(const s=e;e>0;e--)t+=`<li class='exs-card-item exs-card-item-loader' data-name='levator scapulae'>
              <div class='exs-card-img'></div>
              <div class='exs-card-container'>
                <h3 class='exs-card-title'><span class='content-placeholder' style='width:80px;'>&nbsp;</span></h3>
                <p class='exs-card-description'><span class='content-placeholder' style='width:60px;'>&nbsp;</span></p>
              </div>
            </li>`;return t}function j(e){let t="";for(const s=e;e>0;e--)t+=`<li class='exercise' >
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
        </li>`;return t}const E=document.querySelector(".go-to-top");E.addEventListener("click",T);window.addEventListener("scroll",Y);function Y(){const e=window.scrollY,t=document.documentElement.clientHeight;E.classList.toggle("go-to-top--show",e>t)}function T(){window.scrollY>0&&(window.scrollBy(0,-75),requestAnimationFrame(T))}
//# sourceMappingURL=commonHelpers2.js.map
