import{f as c,e as n,E as a}from"./assets/dayquote-dcb07f42.js";const t=document.querySelector(".favorites .exercises-cards-list"),r=document.querySelector(".exs-pagination"),i=document.querySelector(".fav-no-cards");t.addEventListener("click",({target:e})=>{if(e.closest(".js-remove")){const s=e.closest(".exercise").dataset.exerciseId;c.removeExerciseFromFavorites(s),o()}});o();function o(){const e=c.getFavorites();if(!e||!e.length)t.innerHTML="",i.classList.toggle("hidden",!1),r.classList.toggle("hidden",!0);else{i.classList.toggle("hidden",!0),r.classList.toggle("hidden",!0);const s=n.getExerciseListHTML(e,a.exerciseCardType.FAVORITES);t.innerHTML=s}}
//# sourceMappingURL=commonHelpers.js.map