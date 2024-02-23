import { api } from './api';
import { exerciseUI } from './ui';
// Отримуємо дані про вправи з API за замовчуванням для фільтра "Muscles"
api
  .filters({ filter: 'Muscles', page: 1, limit: 12 })
  .then(data => {
    // Отримуємо масив вправ з результатів запиту
    const exercises = data.results;

    // Отримуємо HTML рядок з картками вправ
    const exercisesHTML = exerciseUI.getExerciseCategoryListHTML(exercises);

    // Додаємо HTML рядок з картками вправ до контейнера на сторінці
    const exerciseContainer = document.querySelector('.exercises-cards-list');
    exerciseContainer.innerHTML = exercisesHTML;

    // Отримуємо список елементів фільтрів
    const filterItems = document.querySelectorAll('.exercises-item');

    // Додаємо обробники подій до кожного елемента фільтра
    filterItems.forEach(item => {
      item.addEventListener('click', async function () {
        // Знімаємо клас 'active' у всіх елементів фільтра
        filterItems.forEach(item => item.classList.remove('active'));

        // Встановлюємо клас 'active' лише обраному елементу
        this.classList.add('active');

        // Отримуємо значення фільтру, який був вибрано
        const selectedFilter = this.textContent;

        try {
          // Отримуємо дані вправ за обраним фільтром
          const data = await api.filters({
            filter: selectedFilter,
            page: 1,
            limit: 12,
          });

          // Отримуємо масив вправ з результатів запиту
          const exercises = data.results;

          // Отримуємо HTML рядок з картками вправ
          const exercisesHTML =
            exerciseUI.getExerciseCategoryListHTML(exercises);

          // Додаємо HTML рядок з картками вправ до контейнера на сторінці
          exerciseContainer.innerHTML = exercisesHTML;
        } catch (error) {
          // Обробляємо помилки, якщо вони виникли під час отримання даних з API
          console.error('Error fetching exercises:', error);
        }
      });
    });
  })
  .catch(error => {
    // Обробляємо помилки, якщо вони виникли під час отримання даних з API
    console.error('Error fetching exercises:', error);
  });
