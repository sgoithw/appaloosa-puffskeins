import { api } from './api';
import { exerciseUI } from './ui';
// Отримуємо дані про вправи з API
api
  .filters({ filter: 'Muscles', page: 1, limit: 10 })
  .then(data => {
    const exercises = data.results; // Отримуємо масив вправ з результатів запиту
    // Отримуємо HTML рядок з картками вправ за допомогою методу getExerciseCategoryListHTML
    const exercisesHTML = exerciseUI.getExerciseCategoryListHTML(exercises);

    // Додаємо HTML рядок з картками вправ до контейнера на сторінці
    const exerciseContainer = document.querySelector('.exercises-cards-list');
    exerciseContainer.insertAdjacentHTML('beforeend', exercisesHTML);
  })
  .catch(error => {
    // Обробляємо помилки, якщо вони виникли під час отримання даних з API
    console.error('Error fetching exercises:', error);
  });
