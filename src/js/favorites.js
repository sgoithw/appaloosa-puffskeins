import { favouritesManager  } from "./favouritesManager";
import { exerciseUI, ExerciseUI } from "./ui";


const exercisesContainer = document.querySelector(".favorites .exercises-cards-list");
const pagination = document.querySelector(".exs-pagination");
const emptyMessage = document.querySelector(".fav-no-cards");

exercisesContainer.addEventListener("click", ({target}) => {
  if (target.closest(".js-remove")) {
    console.log("click");
    const exerciseId = target.closest(".exercise").dataset.exerciseId;
    favouritesManager.removeExerciseFromFavorites(exerciseId);
    renderExercises();
    console.log(`removed ${exerciseId}}`);
  }
});

renderExercises();

function renderExercises() {
  const exercises = favouritesManager.getFavorites();
  if (!exercises || !exercises.length) {
    exercisesContainer.innerHTML = "";
    emptyMessage.classList.toggle("hidden", false);
    pagination.classList.toggle("hidden", true);
  } else {
    emptyMessage.classList.toggle("hidden", true);
    pagination.classList.toggle("hidden", true);
    const exerciseMarkup = exerciseUI.getExerciseListHTML(exercises, ExerciseUI.exerciseCardType.FAVORITES);
    exercisesContainer.innerHTML = exerciseMarkup;
  }
}
