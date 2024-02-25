import { api } from './api';
import { exerciseUI, ExerciseUI } from './ui';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const exerciseFilters = {
  muscles: '',
  bodypart: '',
  equipment: '',
  keyword: '',
  page: 1,
  limit: 10,
};

const filtersMap = {
  Muscles: 'muscles',
  'Body parts': 'bodypart',
  Equipment: 'equipment',
};

const exerciseContainer = document.querySelector('.exercises-cards-list');
const paginationContainer = document.querySelector('.exs-pagination');
const searchInput = document.querySelector('.filter-search');
const searchForm = document.querySelector('.search-form');

searchInput.addEventListener('change', onSearchChange);
searchForm.addEventListener('submit', onSearchSubmit);

// Фільтрація вправ юзером через введення в інпут
function onSearchChange(e) {
  exerciseFilters.keyword = e.target.value;
}

function onSearchSubmit(e) {
  e.preventDefault();
  displayExercises();
  searchForm.reset();
}

// Функція для виводу помилки при завантаженні даних із сервера
function showNoResultsMessage() {
  iziToast.error({
    title: 'Повідомлення:',
    message: 'Помилка отримання вправ. Спробуйте ще.',
    position: 'topCenter',
    color: 'white',
    timeout: 5000,
  });
}

let currentFilter = 'Muscles'; // фільтр за замовчуванням

// Функція для оновлення відображення списку вправ та пагінації
async function updateExerciseListAndPagination(filter, page = 1) {
  try {
    // Отримання даних вправ за вказаним фільтром та сторінкою
    const data = await api.filters({ filter, page, limit: 12 });
    const exercises = data.results;
    searchForm.style.display = 'none';
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
    showNoResultsMessage();
    console.error('Error fetching exercises:', error);
  }
}

// Завантаження списку вправ та пагінації за замовчуванням ("Muscles", сторінка 1)
updateExerciseListAndPagination(currentFilter);

function onExercisePageClick(event) {
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
}

// Додаємо обробник подій для пагінації
paginationContainer.addEventListener('click', onExercisePageClick);

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

// накладаємо прослуховувачі подій до карток категорій
function listenClick() {
  const items = document.querySelectorAll('.exs-card-item');
  items.forEach(item => item.addEventListener('click', handlerClickExercises));
}

// Функція виводу вправ в задежності від обраної користувачем категорії
function handlerClickExercises(e) {
  exerciseFilters.muscles = '';
  exerciseFilters.bodypart = '';
  exerciseFilters.equipment = '';
  exerciseFilters[filtersMap[currentFilter]] = e.currentTarget.dataset.name;
  displayExercises();
}

// Функція для відмальовування списку вправ у HTML
function renderExerciseList(exercises) {
  const exerciseListElement = document.querySelector('.exercises-cards-list');

  // Очистка списку перед додаванням нових елементів
  exerciseListElement.innerHTML = '';

  // Отримання типу вправ для визначення особливостей карти вправ
  const cardType = ExerciseUI.exerciseCardType.HOME;

  // Отримання HTML-представлення списку вправ з класу ExerciseUI
  const exerciseListHTML = exerciseUI.getExerciseListHTML(
    exercises.results,
    cardType
  );

  // Додавання HTML-представлення вправ до списку на сторінці
  exerciseListElement.innerHTML = exerciseListHTML;
  paginationContainer.removeEventListener('click', onExercisePageClick);
  const paginationLinks = document.querySelectorAll('.exs-pagination-link');
  paginationLinks.forEach(link => link.addEventListener('click', onPageClick));
  searchForm.style.display = 'flex';
}

function onPageClick(e) {
  e.preventDefault();
  exerciseFilters.page = e.currentTarget.dataset.page;
  displayExercises();
}

// Отримання вправ з API та відображення їх на сторінці
function displayExercises() {
  // Отримання вправ з API
  api
    .exercises(exerciseFilters)
    .then(exercises => {
      if (exercises.results.length === 0) {
        // Показуємо повідомлення про відсутність вправ
        iziToast.show({
          title: 'Повідомлення',
          message: 'Такої вправи не існує. Спробуйте ще.',
          position: 'topCenter',
          timeout: 5000,
          color: 'black',
        });
        return;
      }
      // Відображення вправ на сторінці
      paginationContainer.innerHTML = exerciseUI.getPaginationHTML(
        exercises.totalPages,
        exerciseFilters.page,
        exerciseFilters.limit
      );
      renderExerciseList(exercises);
    })
    .catch(error => {
      showNoResultsMessage();
      console.error('Помилка отримання вправ:', error);
    });
}
