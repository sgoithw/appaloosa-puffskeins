import { api } from './api.js';
import { popupUI } from './ui.js';
//import { FavoritesManager } from './manager.js';
// Відкриття модального вікна при кліці на кнопку рейтингу вправ
const elements = {
  exercisesPopup: document.querySelector('#exercises-popup'),
  modalRating: document.querySelector('#modal-rating'),
  modalExercisesBtnFavorites: document.querySelector('.modal-exercises-btn-favorites'),
  modalExercisesBtnRating: document.querySelector('.modal-exercises-btn-rating'),
  modalClose: document.querySelector('.modal-exercises-btn-close'),
  openExercisePopup: document.querySelectorAll('[data-start-exercise]'),
  ratingForm: document.querySelector('#rating-form'),
  ratingStars: document.querySelectorAll('.rating-label'),
};

//Close modal
function handleCloseModal(e) {
  elements.exercisesPopup.classList.add('hidden');
  elements.modalRating.classList.add('hidden');
}

/**
 * ...
 */
function handleShowRatingPopup() {
  if (!this.dataset.id) {
    return;
  }
  elements.ratingForm.id.value = this.dataset.id;
  elements.exercisesPopup.classList.add('hidden');
  elements.modalRating.classList.remove('hidden');
}

/**
 * ...
 */
function handleSaveToFavorites() {

  if (!this.dataset.id) {
    return;
  }

  api.getExerciseById(this.dataset.startExercise)
    .then(FavoritesManager.addExerciseToFavorites)
    .catch(e => console.error(e));

}
function handleShowPopup(e) {

  if (!this.dataset.startExercise) {
    return;
  }

  api.getExerciseById(this.dataset.startExercise)
    .then((data) => {

      elements.exercisesPopup.innerHTML = popupUI.getExerciseDetailsHTML(data);

    })
    .catch(e => console.error(e));

}

function handleSaveForm(e) {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(elements.ratingForm).entries());

  //todo add validation

  api.patchRating(formData.id, {
    'rate': formData.rate,
    'email': formData.email,
    'review': formData.review.trim(),
  })
    .then(e => {
      //todo open success popup
    })
    .catch(e => console.error(e))
  ;

}

/**
 * ...
 */
function handleRate() {

  if (!this.dataset.rate) {
    return;
  }

  //todo add class which makes stars light

  elements.ratingForm.rate.value = this.dataset.rate;

}

elements.modalClose.addEventListener('click', handleCloseModal);
elements.openExercisePopup.forEach(e => e.addEventListener('click', handleShowPopup));
elements.ratingStars.forEach(e => e.addEventListener('click', handleRate));
elements.modalExercisesBtnFavorites.addEventListener('click', handleSaveToFavorites);
elements.modalExercisesBtnRating.addEventListener('click', handleShowRatingPopup);
elements.ratingForm.addEventListener('submit', handleSaveForm);


// const elements = {
//   modalExercises: document.querySelector('.modal-exercises'),
// }
// //const modalExercises = document.querySelector('.modal-exercises');
// const modalIsOpen = document.querySelector('.modal-rating');
// const btnIsClosed = document.querySelector('.rating-close-btn');
//
// elements.modalExercises.addEventListener('click', onExercisesCardClick);
// btnIsClosed.addEventListener('click', closeModal);
// modalIsOpen.addEventListener('click', closeOverlay);
// document.addEventListener('keydown', onEscClick);
//
// function onExercisesCardClick(event) {
//   if (!event.target.closest('.modal-exercises-btn-rating')) {
//     return;
//   }
//
//   modalIsOpen.classList.remove('is-hidden');
//   elements.modalExercises.classList.add('hidden');
// }
//
// // Закриття модального вікна при кліці на кнопку закриття
//
// function closeModal() {
//   modalIsOpen.classList.add('is-hidden');
//   elements.modalExercises.classList.remove('hidden');
// }
//
// //Закриття модального вікна при кліці на затемнену область
//
// function closeOverlay(event) {
//   if (event.target == modalIsOpen) {
//     closeModal();
//   }
// }
//
// //Закриття модального вікна при натисканні на клавішу Escape
//
// function onEscClick(event) {
//   if (event.key === 'Escape') {
//     closeModal();
//   }
// }




