import { api } from './api.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Відкриття модального вікна при кліці на кнопку рейтингу вправ

const elements = {
  exercisesPopup: document.querySelector('#exercises-popup'),
  modalRating: document.querySelector('#modal-rating'),
  openExercisePopup: document.querySelectorAll('[data-start-exercise]'),
  ratingForm: document.querySelector('#rating-form'),
  ratingStars: document.querySelectorAll('.rating-label'),
  ratingValue: document.querySelector('.rating-value'),
  closeModalBtn: document.querySelector('.rating-close-btn'),
};
document.addEventListener('keydown', onEscClick);

export function handleRatingBtn(id) {
  handleShowRatingPopup();
  elements.closeModalBtn.addEventListener('click', handleCloseModal);
  elements.modalRating.addEventListener('click', closeOverlay);
  handleStarClick();
  elements.ratingForm.addEventListener('submit', function (event) {
    handleSaveForm(event, id);
  });
}

// Add lisneter-click for each star
function handleStarClick() {
  elements.ratingStars.forEach(starItem => {
    starItem.addEventListener('click', handleStarItemClick);
  });
}
function handleStarItemClick() {
  const rate = parseInt(this.dataset.rate);
  setRatingValue(rate);
  colorizeStar(elements.ratingStars, rate);
}
function setRatingValue(rate) {
  elements.ratingForm.rate.value = rate;
  elements.ratingValue.textContent = rate.toFixed(1);
}
// colorize stars
function colorizeStar(stars, rate) {
  stars.forEach((star, index) => {
    const fill = index < rate ? '#EEA10C' : '#F4F4F4';
    const fillOpacity = index < rate ? '1' : '0.2';

    star.querySelector('.rating-star>path').style.fill = fill;
    star.querySelector('.rating-star>path').style.fillOpacity = fillOpacity;
  });
}

function handleSaveForm(e, id) {
  e.preventDefault();

  const formData = Object.fromEntries(
    new FormData(elements.ratingForm).entries()
  );
  formData.id = id;

  const email = formData.email.trim();
  const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!emailPattern.test(email)) {
    iziToast.error({
      position: 'center',
      timeout: 5000,
      color: 'red',
      message: `Please enter valid email`,
    });

    return;
  } else {
    patchRatingData(formData);
  }
}

function patchRatingData(formData) {
  api
    .patchRating(formData.id, {
      rate: Number(formData.rate),
      email: formData.email,
      review: formData.review.trim(),
    })
    .then(() => {
      handleCloseModal();
      clearRatingForm();
    })
    .catch(error => showMessage(error));
}

function clearRatingForm() {
  elements.ratingForm.reset();
  elements.ratingStars.forEach(star => {
    star.querySelector('.rating-star>path').style.fill = '#F4F4F4';
    star.querySelector('.rating-star>path').style.fillOpacity = '0.2';
  });
  elements.ratingValue.textContent = '0.0';
}

//Close modal
function handleCloseModal() {
  elements.exercisesPopup.classList.remove('hidden');
  elements.modalRating.classList.add('hidden');
}
// open modal
function handleShowRatingPopup() {
  elements.exercisesPopup.classList.add('hidden');
  elements.modalRating.classList.remove('hidden');
}
//show message
function showMessage(error) {
  iziToast.error({
    title: 'Повідомлення',
    message: error.message,
    position: 'topCenter',
    color: 'white',
    timeout: 5000,
  });
}

//close on overlay click
function closeOverlay(event) {
  if (event.target == elements.modalRating) {
    handleCloseModal();
  }
}
// close on Escape
function onEscClick(event) {
  if (event.key === 'Escape') {
    handleCloseModal();
  }
}
