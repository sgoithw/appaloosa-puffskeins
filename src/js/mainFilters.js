import { api } from './api';
import { exerciseUI } from './ui';
import { listenClick } from './exercises';

const exerciseContainer = document.querySelector('.exercises-cards-list');
const paginationContainer = document.querySelector('.exs-pagination');

let currentFilter = 'Muscles'; // Зберігаємо поточний фільтр

// Функція для оновлення відображення списку вправ та пагінації
async function updateExerciseListAndPagination(filter, page = 1) {
  try {
    // Отримання даних вправ за вказаним фільтром та сторінкою
    const data = await api.filters({ filter, page, limit: 12 });
    const exercises = data.results;

    // Оновлення списку вправ
    exerciseContainer.innerHTML =
      exerciseUI.getExerciseCategoryListHTML(exercises);

    // Оновлення пагінації
    const totalPages = data.totalPages;
    paginationContainer.innerHTML = exerciseUI.getPaginationHTML(
      totalPages,
      page
    );
    listenClick();
  } catch (error) {
    console.error('Error fetching exercises:', error);
  }
}

// Завантаження списку вправ та пагінації за замовчуванням ("Muscles", сторінка 1)
updateExerciseListAndPagination(currentFilter);

// Додаємо обробник подій для пагінації
paginationContainer.addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    const nextPage = parseInt(event.target.dataset.page);
    if (!isNaN(nextPage)) {
      const activeItem = document.querySelector('.exs-pagination-item.active');
      const currentPage = parseInt(activeItem.textContent);
      if (currentPage !== nextPage) {
        // Оновлення списку вправ та пагінації для нової сторінки
        updateExerciseListAndPagination(currentFilter, nextPage);

        // Позначення активного елемента пагінації
        activeItem.classList.remove('active');
        event.target.parentElement.classList.add('active');
      }
    }
  }
});

// Додаємо обробники подій для фільтрів
const filterItems = document.querySelectorAll('.exercises-item');
filterItems.forEach(item => {
  item.addEventListener('click', function () {
    filterItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    currentFilter = this.textContent; // Оновлюємо поточний фільтр
    // Скидання сторінки на першу при зміні фільтра
    updateExerciseListAndPagination(currentFilter);
  });
});
