import { api } from './api';
import { favouritesManager } from './favouritesManager.js';
import { popupUI } from './ui.js';
import icons from '../img/icons.svg';
import { handleRatingBtn } from './modal-rating.js';

let isFavorite = false;
let idFavorite;
let currentExercise = null;

const modalExercises = document.querySelector('.exercises-popup');
const overlay = document.querySelector('.overlay');

const listItem = document.querySelector('.exercises-cards-list');

listItem.addEventListener('click', onExercisesCardClick);

async function onExercisesCardClick(event) {
  if (!event.target.closest('.card__btn')) {
    return;
  }

  try {
    const exerciseID = event.target
      .closest('.card__btn')
      .getAttribute('data-id');

    // dummy ID
    // const exerciseID = '64f389465ae26083f39b17a2';

    const exerciseData = await api.getExerciseById(exerciseID);
    currentExercise = exerciseData;
    idFavorite = exerciseID;

    const markup = popupUI.getExerciseDetailsHTML(exerciseData);

    updateModal(markup, exerciseData);
    openModalExercises();

    const btnModalFavorites = document.querySelector(
      '.exercises-modal-favorite-btn'
    );
    btnModalFavorites.addEventListener('click', toggleBtn);

    const ratingBtn = document.querySelector('.rating-btn');

    ratingBtn.addEventListener('click', () => handleRatingBtn(exerciseID));

    const btnModalClose = document.querySelector('.modal-closed-btn');
    btnModalClose.addEventListener('click', closeModalExercises);
  } catch (error) {
    throw new Error(
      'An error occurred during the download. Please try again later.'
    );
  }
}

function openModalExercises() {
  const lockPaddingValue = window.innerWidth - document.body.offsetWidth + 'px';

  modalExercises.classList.remove('hidden');
  overlay.classList.remove('hidden');
  document.body.style.paddingRight = lockPaddingValue;
  document.body.style.overflow = 'hidden';
}

function updateModal(markup, exerciseData) {
  modalExercises.innerHTML = markup;
  toggleFavorites(exerciseData);
}

function toggleFavorites(exerciseData) {
  const btnModalFavorites = document.querySelector(
    '.exercises-modal-favorite-btn'
  );

  isFavorite = favouritesManager.isFavorite(exerciseData._id);

  if (isFavorite) {
    btnModalFavorites.innerHTML = createRemoveFromFavoritesMarkup();
  } else {
    btnModalFavorites.innerHTML = createAddToFavoritesMarkup();
  }
}

function toggleBtn() {
  isFavorite = !favouritesManager.isFavorite(currentExercise._id);
  const btnModalFavorites = document.querySelector(
    '.exercises-modal-favorite-btn'
  );

  const localFavorite = document.querySelector('.fav-list');

  if (isFavorite) {
    btnModalFavorites.innerHTML = createRemoveFromFavoritesMarkup();
    favouritesManager.addExerciseToFavorites(currentExercise);
    hideExerciseCard(currentExercise._id);
    // localFavorite == null
    //   ? console.log('')
    //   : setTimeout(() => {
    //       createMarkupFavorite();
    //     }, 100);
  } else {
    btnModalFavorites.innerHTML = createAddToFavoritesMarkup();
    favouritesManager.removeExerciseFromFavorites(currentExercise._id);
    showExerciseCard(currentExercise._id);
    // localFavorite == null
    //   ? console.log('')
    //   : setTimeout(() => {
    //       createMarkupFavorite();
    //     }, 100);
  }
}

function showExerciseCard(id) {
  const card = [...document.querySelectorAll(`.fav-list .exercise`)].filter(
    e => e.dataset.exerciseId == id
  );
  if (!card || card.length === 0) {
    return;
  }

  card[0].classList.add('hidden');
}

function hideExerciseCard(id) {
  const card = [...document.querySelectorAll(`.fav-list .exercise`)].filter(
    e => e.dataset.exerciseId == id
  );

  if (!card || card.length === 0) {
    return;
  }

  card[0].classList.remove('hidden');
}

function createAddToFavoritesMarkup() {
  return `
  Add to favorites
    <svg
            class='exercises-modal-favorite-icon'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
    <use href='${icons}#icon-heart'></use>
    </svg>`;
}

function createRemoveFromFavoritesMarkup() {
  return `
  Remove from favorites
  <svg
            class='exercises-modal-favorite-icon'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
    <use href='${icons}#icon-trash'></use>
  </svg>`;
}

function closeModalExercises() {
  modalExercises.classList.add('hidden');
  overlay.classList.add('hidden');
  document.body.style.paddingRight = '0px';
  document.body.style.overflow = 'auto';
}

overlay.addEventListener('click', function (event) {
  if (event.target === overlay) {
    closeModalExercises();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalExercises.classList.contains('hidden')) {
    closeModalExercises();
  }
});
