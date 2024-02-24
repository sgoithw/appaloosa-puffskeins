import { api } from './api';
import { favouritesManager } from './favouritesManager.js';

import image from '../img/modal-exercise-image.jpg';
import imageRetina from '../img/modal-exercise-image@2x.jpg';

let isFavorite = false;
let idFavorite;

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
    console.log(exerciseData);
    idFavorite = exerciseID;

    const markup = createMarkup(exerciseData);

    updateModal(markup, exerciseData);
    openModalExercises();

    const btnModalFavorites = document.querySelector(
      '.exercises-modal-favorite-btn'
    );
    btnModalFavorites.addEventListener('click', toggleBtn);
    const btnModalClose = document.querySelector('.modal-closed-btn');
    btnModalClose.addEventListener('click', closeModalExercises);
  } catch (error) {
    console.log(error);
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

function createMarkup({
  _id,
  bodyPart,
  equipment,
  gifUrl,
  name,
  target,
  description,
  burnedCalories,
  time,
  popularity,
}) {
  const getExerciseGif = getGif(gifUrl);
  function getGif(gifUrl) {
    if (gifUrl === null || !gifUrl) {
      return `srcset = '${image} 1x,${imageRetina} 2x'
      src = '${image}'`;
    }
    return `src="${gifUrl}"`;
  }

  return `
  <div class="exercises-modal" data-id="${_id}">
  <div class="exercises-container"">
    <div class="exercises-modal-left">
      <img class="exercises-modal-image"
      ${getExerciseGif}
      alt="exercise for body-part"  />
    </div>

    <div class="exercises-modal-right">
      <button class="exercises-modal-close modal-closed-btn">
            <svg width="24" height="24">
                <use href="/img/icons.svg#icon-close-x"></use>
            </svg>
      </button>

      <h3 class="exercises-modal-title">${name}</h3>

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
          <p class="excercises-modal-aftertitle js-target">${target}</p>
        </li>
        <li class="excercises-modal-item">
          <h4 class="excercises-modal-title">Body Part</h4>
          <p class="excercises-modal-aftertitle js-body-part">${bodyPart}</p>
        </li>
        <li class="excercises-modal-item">
          <h4 class="excercises-modal-title">Equipment</h4>
          <p class="excercises-modal-aftertitle js-equipment">${equipment}</p>
        </li>
        <li class="excercises-modal-item">
          <h4 class="excercises-modal-title">Popular</h4>
          <p class="excercises-modal-aftertitle js-popularity">${popularity}</p>
        </li>
        <li class="excercises-modal-item">
          <h4 class="excercises-modal-title">Burned calories</h4>
          <p class="excercises-modal-aftertitle js-burned-calories">${burnedCalories}/${time}</p>
        </li>
        <li class="excercises-modal-item">
          <h4 class="excercises-modal-title"></h4>
          <p class="excercises-modal-aftertitle js-burned-calories"></p>
        </li>
      </ul>

      <hr class="exercises-modal-line-second" />

      <p class="exercises-modal-description">${description}</p>


    </div>
    </div>
        <div class="exercises-modal-buttons">
        <button class="exercises-modal-favorite-btn" data-id="${_id}">
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
`;
}

function toggleFavorites(exerciseData) {
  const btnModalFavorites = document.querySelector(
    '.exercises-modal-favorite-btn'
  );
  console.log(exerciseData);
  isFavorite = favouritesManager.isFavorite(exerciseData._id);
  console.log(exerciseData._id);
  console.log(isFavorite);
  if (isFavorite) {
    favouritesManager.removeExerciseFromFavorites(exerciseData._id);
    btnModalFavorites.innerHTML = createRemoveFromFavoritesMarkup();
  } else {
    favouritesManager.addExerciseToFavorites(exerciseData);
    btnModalFavorites.innerHTML = createAddToFavoritesMarkup();
  }
}

function toggleBtn() {
  isFavorite = !isFavorite;
  const btnModalFavorites = document.querySelector(
    '.exercises-modal-favorite-btn'
  );

  const localFavorite = document.querySelector('.fav-list');

  if (isFavorite) {
    btnModalFavorites.innerHTML = createRemoveFromFavoritesMarkup();
    localFavorite == null
      ? console.log('')
      : setTimeout(() => {
          createMarkupFavorite();
        }, 100);
  } else {
    btnModalFavorites.innerHTML = createAddToFavoritesMarkup();
    localFavorite == null
      ? console.log('')
      : setTimeout(() => {
          createMarkupFavorite();
        }, 100);
  }
}

function createAddToFavoritesMarkup() {
  return `
  Add to favorites
    <svg
            class="exercises-modal-favorite-icon"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
    <use href="/img/icons.svg#icon-heart"></use>
    </svg>`;
}

function createRemoveFromFavoritesMarkup() {
  return `
  Remove from favorites
  <svg
            class="exercises-modal-favorite-icon"
            width="20"
            height="20"
            viewBox="0 0 32 32"
          >
    <use href="/img/icons.svg#icon-trash"></use>
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
