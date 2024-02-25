import { api } from './api';
import { exerciseUI, ExerciseUI } from './ui';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const exerciseFilters = {
  muscles: '', bodypart: '', equipment: '', keyword: '', page: 1, limit: 10,
};

const filtersMap = {
  Muscles: 'muscles', 'Body parts': 'bodypart', Equipment: 'equipment',
};

const exerciseContainer = document.querySelector('.exercises-cards-list');
const paginationContainer = document.querySelector('.exs-pagination');
const searchInput = document.querySelector('.filter-search');
const searchForm = document.querySelector('.search-form');
const filterClearIcon = document.querySelector('.filter-clear-icon');
const jsBreadcrumbsTitleLink = document.querySelector('.js-breadcrumbs-title-link');
const breadcrumbs = document.querySelector('#breadcrumbs');

searchInput.addEventListener('change', onSearchChange);
searchForm.addEventListener('submit', onSearchSubmit);
jsBreadcrumbsTitleLink.addEventListener('click', returnBack);
breadcrumbs.addEventListener('click', e => e.preventDefault());
filterClearIcon.addEventListener('click', onFormClear);

// Відрендерити сторінку з категоріями
function returnBack(e) {
  e.preventDefault();
  updateExerciseListAndPagination(currentFilter);
}

function onFormClear() {
  searchForm.reset();
  exerciseFilters.keyword = '';
  displayExercises();
}

// Фільтрація вправ юзером через введення в інпут
function onSearchChange(e) {
  exerciseFilters.keyword = e.target.value.trim();
}

function onSearchSubmit(e) {
  e.preventDefault();
  displayExercises();
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
    //Показуємо плейсхолдери
    removeListeners();
    showCategoryPlaceholders();
    breadcrumbs.classList.add('hidden');
    paginationContainer.innerHTML = '';
    jsBreadcrumbsTitleLink.innerHTML = `<h2 class='title'>Exercises</h2>`;
    // Отримання даних вправ за вказаним фільтром та сторінкою
    const data = await api.filters({ filter, page, limit: 12 });
    const exercises = data.results;
    searchForm.style.display = 'none';
    // Оновлення списку вправ
    exerciseContainer.innerHTML = exerciseUI.getExerciseCategoryListHTML(exercises);

    // Оновлення пагінації
    const totalPages = data.totalPages;
    paginationContainer.innerHTML = exerciseUI.getPaginationHTML(totalPages, page);
    listenClick();
  } catch (error) {
    showNoResultsMessage();
    clearPlaceholders();
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
        // activeItem.classList.remove('active');
        // event.target.parentElement.classList.add('active');
      }
    }
  }
}

// Додаємо обробники подій для фільтрів
const filterItems = document.querySelectorAll('.exercises-item');
filterItems.forEach(item => {
  item.addEventListener('click', function() {
    filterItems.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
    currentFilter = this.textContent; // Оновлюємо поточний фільтр
    // Скидання сторінки на першу при зміні фільтра
    updateExerciseListAndPagination(currentFilter);
  });
});

// видаляемо слухач на момент загрузки
function removeListeners() {
  paginationContainer.removeEventListener('click', onExercisePageClick);
}

// накладаємо прослуховувачі подій до карток категорій
function listenClick() {
  const items = document.querySelectorAll('.exs-card-item');
  items.forEach(item => item.addEventListener('click', handlerClickExercises));
  // Додаємо обробник подій для пагінації
  paginationContainer.addEventListener('click', onExercisePageClick);
}

// Функція виводу вправ в задежності від обраної користувачем категорії
function handlerClickExercises(e) {
  exerciseFilters.muscles = '';
  exerciseFilters.bodypart = '';
  exerciseFilters.equipment = '';
  exerciseFilters.keyword = '';
  exerciseFilters.page = 1;
  exerciseFilters[filtersMap[currentFilter]] = e.currentTarget.dataset.name;
  showBreadcrumbs(e.currentTarget.dataset.name);
  displayExercises();
}

/**
 * Show breadcrumbs
 * @param val
 */
function showBreadcrumbs(val) {

  jsBreadcrumbsTitleLink.innerHTML = `<h2 class='title'>Exercises /</h2>`;
  breadcrumbs.classList.remove('hidden');
  breadcrumbs.innerHTML = `<h3 class='subtitle'>${val.charAt(0).toUpperCase()}${val.slice(1)}</h3>`;

}

// Функція для відмальовування списку вправ у HTML
function renderExerciseList(exercises) {
  const exerciseListElement = document.querySelector('.exercises-cards-list');

  // Очистка списку перед додаванням нових елементів
  exerciseListElement.innerHTML = '';

  // Отримання типу вправ для визначення особливостей карти вправ
  const cardType = ExerciseUI.exerciseCardType.HOME;

  // Отримання HTML-представлення списку вправ з класу ExerciseUI
  const exerciseListHTML = exerciseUI.getExerciseListHTML(exercises.results, cardType);

  // Додавання HTML-представлення вправ до списку на сторінці
  exerciseListElement.innerHTML = exerciseListHTML;
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
  //Показуєм контент плейсхолдери
  removeListeners();
  showCardPlaceholders();
  paginationContainer.innerHTML = '';
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
        clearPlaceholders();
        return;
      }
      // Відображення вправ на сторінці
      paginationContainer.innerHTML = exerciseUI.getPaginationHTML(exercises.totalPages, exerciseFilters.page, exerciseFilters.limit);
      renderExerciseList(exercises);
    })
    .catch(error => {
      showNoResultsMessage();
      clearPlaceholders();
      console.error('Помилка отримання вправ:', error);
    });
}

/**
 * Show content placeholders
 */
function showCategoryPlaceholders() {

  exerciseContainer.innerHTML = getCategoryPlaceholdersHTML(9);

}

/**
 * Show content placeholders
 */
function showCardPlaceholders() {

  exerciseContainer.innerHTML = getCardPlaceholderHTML(10);

}

function clearPlaceholders() {
  exerciseContainer.innerHTML = '';
}

/**
 * Returns Category placeholder
 * li html
 * @param count
 * @returns {string}
 */
function getCategoryPlaceholdersHTML(count) {
  let html = '';

  for (const i = count; count > 0; count--) {

    html += `<li class='exs-card-item exs-card-item-loader' data-name='levator scapulae'>
              <div class='exs-card-img'></div>
              <div class='exs-card-container'>
                <h3 class='exs-card-title'><span class='content-placeholder' style='width:80px;'>&nbsp;</span></h3>
                <p class='exs-card-description'><span class='content-placeholder' style='width:60px;'>&nbsp;</span></p>
              </div>
            </li>`;

  }

  return html;
}

/**
 * Returns cards placeholders
 * @param count
 */
function getCardPlaceholderHTML(count) {

  let html = '';

  for (const i = count; count > 0; count--) {
    html += `<li class='exercise' >
          <button class='main-action-btn card__btn' type='button'>
            Start
            <svg class='main-action-arrow-icon' width='16' height='16'>
              <use href='/img/icons.svg#icon-arrow-right'></use>
            </svg>
          </button>
          <div class='top'>
            <span class='badge'>Workout</span>

            <div class='rating'>
              <span class='rating-value'><span class='content-placeholder' style='width:10px;'>&nbsp;</span></span>
              <svg class='rating-icon' width='18' height='18'>
                <use href='/img/icons.svg#icon-star'></use>
              </svg>
            </div>
          </div>
          <div class='title'>
            <svg class='title-icon' width='14' height='16'>
              <use href='/img/icons.svg#icon-running-stick-figure-svgrepo-com-1'></use>
            </svg>
            <span class='title-text text-clipped content-placeholder' style='width:100%; min-width: 150px'>&nbsp;</span>
          </div>
          <div class='details'>
            <div class='detail'>
              <span class='detail-title'>Burned calories:</span>
              <span class='detail-value text-clipped'><span class='content-placeholder' style='width:50px;'>&nbsp;</span></span>
            </div>
            <div class='detail'>
              <span class='detail-title'>Body part:</span>
              <span class='detail-value text-clipped'><span class='content-placeholder' style='width:50px;'>&nbsp;</span></span>
            </div>
            <div class='detail'>
              <span class='detail-title'>Target:</span>
              <span class='detail-value text-clipped'><span class='content-placeholder' style='width:50px;'>&nbsp;</span></span>
            </div>
          </div>
        </li>`;

  }

  return html;
}