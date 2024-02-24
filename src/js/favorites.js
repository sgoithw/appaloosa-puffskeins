import { favouritesManager } from './favouritesManager';
import { exerciseUI, ExerciseUI } from './ui';
import './header.js';
import './modal.js';

const exercisesContainer = document.querySelector(
  '.favorites .exercises-cards-list'
);
const pagination = document.querySelector('.exs-pagination');
const emptyMessage = document.querySelector('.fav-no-cards');

exercisesContainer.addEventListener('click', ({ target }) => {
  if (target.closest('.js-remove')) {
    const exerciseId = target.closest('.exercise').dataset.exerciseId;
    favouritesManager.removeExerciseFromFavorites(exerciseId);
    renderExercises();
  }
});

renderExercises();

function renderExercises() {
  const exercises = favouritesManager.getFavorites();
  if (!exercises || !exercises.length) {
    exercisesContainer.innerHTML = '';
    emptyMessage.classList.toggle('hidden', false);
    pagination.classList.toggle('hidden', true);
  } else {
    emptyMessage.classList.toggle('hidden', true);
    pagination.classList.toggle('hidden', true);
    const exerciseMarkup = exerciseUI.getExerciseListHTML(
      exercises,
      ExerciseUI.exerciseCardType.FAVORITES
    );
    exercisesContainer.innerHTML = exerciseMarkup;
  }
}
