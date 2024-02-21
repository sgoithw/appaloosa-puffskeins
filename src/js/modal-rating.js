// Відкриття модального вікна при кліці на кнопку рейтингу вправ

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