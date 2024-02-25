import{a as d,e as a,E as v}from"./assets/dayquote-d2b574a5.js";import{i as r}from"./assets/vendor-ad859c2f.js";const m={subscribeForm:document.querySelector("#subscribe-form")};m.subscribeForm.addEventListener("submit",w);function w(e){e.preventDefault();const t=m.subscribeForm.email.value.trim();if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t))m.subscribeForm.reset();else{r.show({position:"center",timeout:5e3,color:"red",message:"Please enter valid email"});return}d.createSubscription({email:t}).then(i=>{const c=i.message;r.show({position:"center",color:"white",message:c.replace(/([^\w!]) /g,"$1<br>")})}).catch(i=>{r.show({position:"center",messageColor:"red",color:"white",message:i.message})}).finally(()=>{})}const n={muscles:"",bodypart:"",equipment:"",keyword:"",page:1,limit:10},b={Muscles:"muscles","Body parts":"bodypart",Equipment:"equipment"},k=document.querySelector(".exercises-cards-list"),l=document.querySelector(".exs-pagination"),S=document.querySelector(".filter-search"),u=document.querySelector(".search-form");S.addEventListener("change",T);u.addEventListener("submit",q);function T(e){n.keyword=e.target.value}function q(e){e.preventDefault(),p(),u.reset()}function h(){r.error({title:"Повідомлення:",message:"Помилка отримання вправ. Спробуйте ще.",position:"topCenter",color:"white",timeout:5e3})}let o="Muscles";async function g(e,t=1){try{const s=await d.filters({filter:e,page:t,limit:12}),i=s.results;u.style.display="none",k.innerHTML=a.getExerciseCategoryListHTML(i);const c=s.totalPages;l.innerHTML=a.getPaginationHTML(c,t),M()}catch(s){h(),console.error("Error fetching exercises:",s)}}g(o);function L(e){if(e.target.tagName==="A"){const t=parseInt(e.target.dataset.page);if(!isNaN(t)){const s=document.querySelector(".exs-pagination-item.active");parseInt(s.textContent)!==t&&(g(o,t),s.classList.remove("active"),e.target.parentElement.classList.add("active"))}}}l.addEventListener("click",L);const f=document.querySelectorAll(".exercises-item");f.forEach(e=>{e.addEventListener("click",function(){f.forEach(t=>t.classList.remove("active")),this.classList.add("active"),o=this.textContent,g(o)})});function M(){document.querySelectorAll(".exs-card-item").forEach(t=>t.addEventListener("click",C))}function C(e){n.muscles="",n.bodypart="",n.equipment="",n[b[o]]=e.currentTarget.dataset.name,p()}function P(e){const t=document.querySelector(".exercises-cards-list");t.innerHTML="";const s=v.exerciseCardType.HOME,i=a.getExerciseListHTML(e.results,s);t.innerHTML=i,l.removeEventListener("click",L),document.querySelectorAll(".exs-pagination-link").forEach(x=>x.addEventListener("click",H)),u.style.display="flex"}function H(e){e.preventDefault(),n.page=e.currentTarget.dataset.page,p()}function p(){d.exercises(n).then(e=>{if(e.results.length===0){r.show({title:"Повідомлення",message:"Такої вправи не існує. Спробуйте ще.",position:"topCenter",timeout:5e3,color:"black"});return}l.innerHTML=a.getPaginationHTML(e.totalPages,n.page,n.limit),P(e)}).catch(e=>{h(),console.error("Помилка отримання вправ:",e)})}const y=document.querySelector(".go-to-top");y.addEventListener("click",E);window.addEventListener("scroll",A);function A(){const e=window.scrollY,t=document.documentElement.clientHeight;y.classList.toggle("go-to-top--show",e>t)}function E(){window.scrollY>0&&(window.scrollBy(0,-75),requestAnimationFrame(E))}
//# sourceMappingURL=commonHelpers2.js.map
