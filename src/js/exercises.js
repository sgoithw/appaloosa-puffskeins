import { api } from './api';
import { exerciseUI } from './ui';

export function listenClick() {
  console.log('listenClick func');
  const items = document.querySelector('.exs-card-item');
  console.log(items);
  items.addEventListener('click', handlerClickExercises);
}

function handlerClickExercises() {
  displayExercises();
}

// Функція для відмальовування списку вправ у HTML
function renderExerciseList(exercises) {
  const exerciseListElement = document.querySelector('.exercises-cards-list');

  // Очистка списку перед додаванням нових елементів
  exerciseListElement.innerHTML = '';

  // Отримання типу вправ для визначення особливостей карти вправ
  const cardType = exerciseUI.exerciseCardType.FAVORITES;

  // Отримання HTML-представлення списку вправ з класу ExerciseUI
  const exerciseListHTML = exerciseUI.getExerciseListHTML(exercises, cardType);

  // Додавання HTML-представлення вправ до списку на сторінці
  exerciseListElement.innerHTML = exerciseListHTML;
}

// Отримання вправ з API та відображення їх на сторінці
function displayExercises() {
  // Отримання вправ з API
  api
    .exercises({ page: 1, limit: 10 })
    .then(exercises => {
      // Відображення вправ на сторінці
      renderExerciseList(exercises);
    })
    .catch(error => {
      console.error('Помилка отримання вправ:', error);
    });
}
