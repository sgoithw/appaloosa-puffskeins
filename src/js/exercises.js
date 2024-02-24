// import { api } from './api';
// import { exerciseUI, ExerciseUI } from './ui';

// export const exerciseFilters = {
//   muscles: '',
//   bodypart: '',
//   equipment: '',
//   keyword: '',
//   page: 1,
//   limit: 10,
// };

// export function listenClick() {
//   console.log('listenClick func');
//   const items = document.querySelectorAll('.exs-card-item');
//   console.log(items);
//   items.forEach(item => item.addEventListener('click', handlerClickExercises));
// }

// function handlerClickExercises(e) {
//   e.target.dataset.name
//   displayExercises();
// }

// // Функція для відмальовування списку вправ у HTML
// function renderExerciseList(exercises) {
//   const exerciseListElement = document.querySelector('.exercises-cards-list');

//   // Очистка списку перед додаванням нових елементів
//   exerciseListElement.innerHTML = '';

//   // Отримання типу вправ для визначення особливостей карти вправ
//   const cardType = ExerciseUI.exerciseCardType.HOME;

//   // Отримання HTML-представлення списку вправ з класу ExerciseUI
//   const exerciseListHTML = exerciseUI.getExerciseListHTML(
//     exercises.results,
//     cardType
//   );

//   // Додавання HTML-представлення вправ до списку на сторінці
//   exerciseListElement.innerHTML = exerciseListHTML;
// }

// // Отримання вправ з API та відображення їх на сторінці
// function displayExercises() {
//   // Отримання вправ з API
//   api
//     .exercises(exerciseFilters)
//     .then(exercises => {
//       // Відображення вправ на сторінці
//       console.log(exercises, 'bla');
//       renderExerciseList(exercises);
//     })
//     .catch(error => {
//       console.error('Помилка отримання вправ:', error);
//     });
// }
