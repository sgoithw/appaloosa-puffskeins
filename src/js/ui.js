/**
 * ...
 */
class PopupUI {
  /**
   * Returns exercise details
   * html string
   *
   * @param exercise
   */
  getExerciseDetailsHTML({
                           _id,
                           bodyPart,
                           equipment,
                           gifUrl,
                           name,
                           target,
                           description,
                           rating,
                           burnedCalories,
                           time,
                           popularity,
                           isFavorite,
                         }) {
    return `
  <div class='exercises-modal' data-id='${_id}'>
  <div class='exercises-container'">
    <div class='exercises-modal-left'>
      <img class='exercises-modal-image'
      ${gifUrl ? `src=${gifUrl}` : `srcset = '../img/modal-exercise-image.jpg 1x,../img/modal-exercise-image@2x.jpg 2x' src = '../img/modal-exercise-image.jpg'`}
      alt='exercise for body-part'  />
    </div>

    <div class='exercises-modal-right'>
      <button class='exercises-modal-close modal-closed-btn'>
            <svg width='24' height='24'>
                <use href='./img/icons.svg#icon-close-x'></use>
            </svg>
      </button>

      <h3 class='exercises-modal-title'>${name}</h3>

      <div class='exercises-modal-rating-container'>
        <span class='exercises-modal-rating-value'>${rating}</span>
        <fieldset class='exercises-modal-rating'>
          <input
            class='exercises-modal-rating-input'
            type='radio'
            id='star1'
            name='rating'
          />
          <label class='exercises-modal-rating-label' for='star1'>
            <svg
            class='exercises-modal-favorite-icon rating-star ${rating >= 1 ? 'rated' : ''}'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
            <use href='./img/icons.svg#icon-star'></use>
          </svg>
          </label>
          <input
            class='exercises-modal-rating-input'
            type='radio'
            id='star2'
            name='rating'
          />
          <label class='exercises-modal-rating-label' for='star2'>
            <svg
            class='exercises-modal-favorite-icon rating-star ${rating >= 2 ? 'rated' : ''}'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
            <use href='./img/icons.svg#icon-star'></use>
          </svg>
          </label>
          <input
            class='exercises-modal-rating-input'
            type='radio'
            id='star3'
            name='rating'
          />
          <label class='exercises-modal-rating-label' for='star3'>
            <svg
            class='exercises-modal-favorite-icon rating-star ${rating >= 3 ? 'rated' : ''}'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
            <use href='./img/icons.svg#icon-star'></use>
          </svg>
          </label>
          <input
            class='exercises-modal-rating-input'
            type='radio'
            id='star4'
            name='rating'
          />
          <label class='exercises-modal-rating-label' for='star4'>
            <svg
            class='exercises-modal-favorite-icon rating-star ${rating >= 4 ? 'rated' : ''}'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
            <use href='./img/icons.svg#icon-star'></use>
          </svg>
          </label>
          <input
            class='exercises-modal-rating-input'
            type='radio'
            id='star5'
            name='rating'
          />
          <label class='exercises-modal-rating-label' for='star5'>
            <svg
            class='exercises-modal-favorite-icon rating-star ${rating >= 5 ? 'rated' : ''}'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
            <use href='./img/icons.svg#icon-star'></use>
          </svg>
          </label>
        </fieldset>
      </div>

      <hr class='exercises-modal-line' />

      <ul class='excercises-modal-list'>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Taget</h4>
          <p class='excercises-modal-aftertitle js-target'>${target}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Body Part</h4>
          <p class='excercises-modal-aftertitle js-body-part'>${bodyPart}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Equipment</h4>
          <p class='excercises-modal-aftertitle js-equipment'>${equipment}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Popular</h4>
          <p class='excercises-modal-aftertitle js-popularity'>${popularity}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'>Burned calories</h4>
          <p class='excercises-modal-aftertitle js-burned-calories'>${burnedCalories}/${time}</p>
        </li>
        <li class='excercises-modal-item'>
          <h4 class='excercises-modal-title'></h4>
          <p class='excercises-modal-aftertitle js-burned-calories'></p>
        </li>
      </ul>

      <hr class='exercises-modal-line-second' />

      <p class='exercises-modal-description'>${description}</p>


    </div>
    </div>
        <div class='exercises-modal-buttons'>
        <button class='exercises-modal-favorite-btn' data-id='${_id}'>
          Add to favorites
          <svg
            class='exercises-modal-favorite-icon'
            width='20'
            height='20'
            viewBox='0 0 32 32'
          >
            <use href='./img/icons.svg#icon-heart'></use>
          </svg>
        </button>
<!--        <button class="exercises-modal-rating-btn">Give a rating</button>-->
      </div>
  </div>
`;
  }
}

export class ExerciseUI {
  /**
   * * Type of exercise card.
   * Different features may be added to a card with different type.
   *
   * Ad hoc Enum use:
   * Object.freeze - freezes the object and makes it Read-Only (writes will cause an error).
   * Symbol() - makes each item unique.
   */
  static exerciseCardType = Object.freeze({
    HOME: 'HOME',
    FAVORITES: 'FAVORITES',
  });

  /**
   * * Creates markup of the exercise cards list items of a specific exercise card type.
   * Depending on card type, adds additional card feature (rating | move to trash button).
   * @param {object[]} arr Array of exercise card objects of a specific 'exerciseCardType' type.
   * @param {string (ExerciseUI.exerciseCardType)} cardType On of the exercise card types.
   * @returns {string} Exercise card list HTML representation.
   */
  getExerciseListHTML(arr, cardType) {
    if (!ExerciseUI.exerciseCardType[cardType]) {
      console.error(
        `Unsupported exercise card type \'${cardType}\' when trying to create exercise card.`,
      );
      return '';
    }

    let featureMarkup;

    if (cardType === ExerciseUI.exerciseCardType.FAVORITES) {
      featureMarkup = `
        <button class='js-remove move-to-trash-btn' type='button'>
        <svg class='move-to-trash-icon' width='16' height='16'>
              <use href='./img/icons.svg#icon-trash'></use>
            </svg>
          </button>`;
    }

    return arr
      .map(el => {
        if (cardType === ExerciseUI.exerciseCardType.HOME) {
          featureMarkup = `
        <div class='rating'>
        <span class='rating-value'>${el.rating}</span>
        <svg class='rating-icon' width='18' height='18'>
        <use href='./img/icons.svg#icon-Star'></use>
        </svg>
        </div>`;
        }

        return `
      <li class='exercise' data-exercise-id='${el._id}'>
        <button class='main-action-btn card__btn' data-id='${
          el._id
        }' type='button'>
          Start
          <svg class='main-action-arrow-icon' width='16' height='16'>
            <use href='./img/icons.svg#icon-arrow-right'></use>
          </svg>
        </button>
        <div class='top'>
          <span class='badge'>Workout</span>
          ${featureMarkup}
        </div>
        <div class='title'>
          <svg class='title-icon' width='14' height='16'>
            <use href='./img/icons.svg#icon-running-stick-figure-svgrepo-com-1'></use>
          </svg>
          <span class='title-text text-clipped'>${
          el.name.charAt(0).toUpperCase() + el.name.slice(1)
        }</span>
        </div>
        <div class='details'>
          <div class='detail'>
            <span class='detail-title'>Burned calories:</span>
            <span class='detail-value text-clipped'>${el.burnedCalories} / ${
          el.time
        } min</span>
          </div>
          <div class='detail'>
            <span class='detail-title'>Body part:</span>
            <span class='detail-value text-clipped'>${el.bodyPart}</span>
          </div>
          <div class='detail'>
            <span class='detail-title'>Target:</span>
            <span class='detail-value text-clipped'>${el.target}</span>
          </div>
        </div>
      </li>`;
      })
      .join('');
  }

  getExerciseCategoryListHTML(exercises) {
    return exercises
      .map(
        ({ filter, name, imgURL }) => `
              <li class='exs-card-item' data-name='${name}'>
                  <img class='exs-card-img' src='${imgURL}' alt='${name}' />
                      <div class='exs-card-container'>
                          <h3 class='exs-card-title'>${name}</h3>
                          <p class='exs-card-description'>${filter}</p>
                      </div>
                  </li>`,
      )
      .join('');
  }

  getPaginationHTML(totalPages, page = 1, perPage = 9) {
    let paginationHTML = '';
    let toNumber = e => {
      e = parseInt(e);
      return isNaN(e) ? 0 : e;
    };
    totalPages = toNumber(totalPages);
    page = toNumber(page);
    perPage = toNumber(perPage);
    const paginationData = this.#makePaginationData(totalPages, page, perPage);

    if (page > 1) {
      paginationHTML += `
        <li class='exs-pagination-item'>
            <a class='exs-pagination-link' data-page='${page - 1} '>
                <svg class='icon-pagination-arrow' width='20' height='20'>
                    <use href='./img/icons.svg#icon-fi-rr-angle-small-left'></use>
                </svg>
            </a>
        </li>`;
    }

    paginationData.pages.forEach(page => {
      paginationHTML += `<li class='exs-pagination-item ${
        paginationData.page == page ? 'active' : ''
      }'><a class='exs-pagination-link' ${
        page !== '...' ? `data-page="${page}"` : ''
      }>${page}</a></li>`;
    });

    if (page < totalPages) {
      paginationHTML += `
        <li class='exs-pagination-item'>
            <a class='exs-pagination-link' data-page='${page + 1} '>
                <svg class='icon-pagination-arrow' width='20' height='20'>
                    <use href='./img/icons.svg#icon-fi-rr-angle-small-right'></use>
                </svg>
            </a>
        </li>`;
    }
    return paginationHTML;
  }

  /**
   * Returns object with pagination data.
   *
   * @param maxPage
   * @param page
   * @param perPage
   * @returns {{pages: *, nextPage: *, prevPage: number, page: (*|number), maxPage: *}}
   */
  #makePaginationData(maxPage, page = 1, perPage = 9) {
    maxPage = maxPage > 1 ? maxPage : 1;

    let pagesArr = [];

    if (maxPage > 4) {
      pagesArr = [
        page === 1 ? 1 : page < maxPage - 2 ? page - 1 : maxPage - 4,
        page < maxPage - 2 ? (page === 1 ? 2 : page) : maxPage - 3,
        page < maxPage - 2 ? (page === 1 ? 3 : page + 1) : maxPage - 2,
        page < maxPage - 3 ? '...' : maxPage - 1,
        maxPage,
      ];
    } else {
      for (let i = 1; i <= maxPage; i++) {
        pagesArr.push(i);
      }
    }

    return {
      pages: pagesArr,
      page: page <= maxPage ? page : 1,
      maxPage: maxPage,
      nextPage: page < maxPage ? page + 1 : maxPage,
      prevPage: page > 1 ? page - 1 : 1,
    };
  }
}

export const exerciseUI = new ExerciseUI();
export const popupUI = new PopupUI();
