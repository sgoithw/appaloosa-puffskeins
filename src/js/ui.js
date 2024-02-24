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
  }) {
    return `
  <div class="modal-exercises">
        <div class="modal-exersises-container">
            <button class="modal-exercises-btn-close">
                <svg class="modal-exersises-btn-icon" width="28" height="28">
                    <use href="./img/icons.svg#icon-close-X"></use>
                  </svg>
            </button>
            <img
            class="modal-exercises-img"
            alt="Exercise image"
            loading="lazy"
          />
           <div class="modal-exsercises-card">
               <!-- <h2 class="modal-exercises-name">Air Bake</h2>   -->
               <fieldset class="modal-fieldset">
                <legend class="modal-exercises-name">Alternate heel touchers</legend>

                <p class="rating-value">4.0</p>
               <div class="modal-exercises-rating">
                <input class="rating-input" type="ratio" id="star1" name="rating" />
                <label class="rating-label" for="star1">
                  <svg
                    class="rating-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                      fill="#EEA10C"
                      fill-opacity="0.2"
                    />
                  </svg>
                </label>
                <input class="rating-input" type="ratio" id="star2" name="rating" />
                <label class="rating-label" for="star2">
                  <svg
                    class="rating-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M9.04894 0.927052C9.3483 0.00574112 10.6517 0.00573993 10.9511 0.927051L12.4697 5.60081C12.6035 6.01284 12.9875 6.2918 13.4207 6.2918H18.335C19.3037 6.2918 19.7065 7.53141 18.9228 8.10081L14.947 10.9894C14.5966 11.244 14.4499 11.6954 14.5838 12.1074L16.1024 16.7812C16.4017 17.7025 15.3472 18.4686 14.5635 17.8992L10.5878 15.0106C10.2373 14.756 9.7627 14.756 9.41221 15.0106L5.43648 17.8992C4.65276 18.4686 3.59828 17.7025 3.89763 16.7812L5.41623 12.1074C5.55011 11.6954 5.40345 11.244 5.05296 10.9894L1.07722 8.10081C0.293507 7.53141 0.696283 6.2918 1.66501 6.2918H6.57929C7.01252 6.2918 7.39647 6.01284 7.53035 5.60081L9.04894 0.927052Z"
                      fill="#EEA10C"
                      fill-opacity="0.2"
                    />
                  </svg>
                </label>
                <input class="rating-input" type="ratio" id="star3" name="rating" />
                <label class="rating-label" for="star3">
                  <svg
                    class="rating-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M13.826 3.262c.684-2.106 3.663-2.106 4.348 0l1.932 5.945a2.285 2.285 0 0 0 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674a2.286 2.286 0 0 0-.83 2.556l1.931 5.945c.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674a2.286 2.286 0 0 0-2.687 0l-5.057 3.674c-1.791 1.302-4.202-.45-3.517-2.555l1.932-5.945a2.287 2.287 0 0 0-.83-2.556l-5.057-3.674c-1.791-1.302-.871-4.135 1.344-4.135h6.251c.99 0 1.868-.638 2.174-1.579l1.932-5.945z"
                      fill="#EEA10C"
                      fill-opacity="0.2"
                    />
                  </svg>
                </label>
                <input class="rating-input" type="ratio" id="star4" name="rating" />
                <label class="rating-label" for="star4">
                  <svg
                    class="rating-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M13.826 3.262c.684-2.106 3.663-2.106 4.348 0l1.932 5.945a2.285 2.285 0 0 0 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674a2.286 2.286 0 0 0-.83 2.556l1.931 5.945c.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674a2.286 2.286 0 0 0-2.687 0l-5.057 3.674c-1.791 1.302-4.202-.45-3.517-2.555l1.932-5.945a2.287 2.287 0 0 0-.83-2.556l-5.057-3.674c-1.791-1.302-.871-4.135 1.344-4.135h6.251c.99 0 1.868-.638 2.174-1.579l1.932-5.945z"
                      fill="#EEA10C"
                      fill-opacity="0.2"
                    />
                  </svg>
                </label>
                <input class="rating-input" type="ratio" id="star5" name="rating" />
                <label class="rating-label" for="star5">
                  <svg
                    class="rating-star"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <path
                      d="M13.826 3.262c.684-2.106 3.663-2.106 4.348 0l1.932 5.945a2.285 2.285 0 0 0 2.174 1.579h6.251c2.214 0 3.135 2.833 1.344 4.135l-5.057 3.674a2.286 2.286 0 0 0-.83 2.556l1.931 5.945c.684 2.106-1.726 3.857-3.517 2.555l-5.057-3.674a2.286 2.286 0 0 0-2.687 0l-5.057 3.674c-1.791 1.302-4.202-.45-3.517-2.555l1.932-5.945a2.287 2.287 0 0 0-.83-2.556l-5.057-3.674c-1.791-1.302-.871-4.135 1.344-4.135h6.251c.99 0 1.868-.638 2.174-1.579l1.932-5.945z"
                      fill="#EEA10C"
                      fill-opacity="0.2"
                    />
                  </svg>
                </label>
               </div>
               </fieldset>
                <!-- <h2 class="modal-exercises-name">${name}</h2>   -->
                <!-- <div class="modal-exercises-rating"> ${ratingStarsHTML}</div> -->

                <div class="modal-exercises-block">
                    <li class="modal-exercises-item">
                        <h3 class="modal-exercises-subtitle">Target</h3>
                        <p class="modal-exercises-text">Abs</p>
                    </li>
                    <li class="modal-exercises-item">
                        <h3 class="modal-exercises-subtitle">Body Part</h3>
                        <p class="modal-exercises-text">waist</p>
                    </li>
                    <li class="modal-exercises-item">
                        <h3 class="modal-exercises-subtitle">Equipment</h3>
                        <p class="modal-exercises-text">body weight</p>
                    </li>
                    <li class="modal-exercises-item">
                        <h3 class="modal-exercises-subtitle">Popular</h3>
                        <p class="modal-exercises-text">4911</p>
                    </li>
                    <li class="modal-exercises-item">
                        <h3 class="modal-exercises-subtitle">Burned calories</h3>
                        <p class="modal-exercises-text">116/3</p>
                    </li>

                    <p class="modal-exercises-description">This refers to your core muscles, which include the rectus abdominis, obliques, and transverse abdominis. They're essential for maintaining posture, stability, and generating force in many movements. Exercises that target the abs include crunches, leg raises, and planks.</p>
                </div>
            </div>

        </div>

        <div class="modal-exercises-btn-container">
            <button class="modal-exercises-btn-favorites modal-exercises-btn" type="button" data-id="${_id}">
             "Add to favorites"
             <svg class="btn-favorites-icon">
                <use href="./img./icons.svg#icon-heart"></use>
             </svg>
            </button>

            <button class="modal-exercises-btn-rating modal-exercises-btn" type="button" data-id="${_id}">
                "Give a rating"
               </button>
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
        `Unsupported exercise card type \'${cardType}\' when trying to create exercise card.`
      );
      return '';
    }

    let featureMarkup;

    if (cardType === ExerciseUI.exerciseCardType.FAVORITES) {
      featureMarkup = `
        <button class='move-to-trash-btn' type='button'>
        <svg class='move-to-trash-icon' width='16' height='16'>
              <use href='./../../img/icons.svg#icon-trash'></use>
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
        <use href='./../../img/icons.svg#icon-Star'></use>
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
            <use href='./../../img/icons.svg#icon-arrow-right'></use>
          </svg>
        </button>
        <div class='top'>
          <span class='badge'>Workout</span>
          ${featureMarkup}
        </div>
        <div class='title'>
          <svg class='title-icon' width='14' height='16'>
            <use href='./../../img/icons.svg#icon-running-stick-figure-svgrepo-com-1'></use>
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
    console.log(exercises);
    return exercises
      .map(
        ({ filter, name, imgURL }) => `
              <li class='exs-card-item' data-name='${name}'>
                  <img class='exs-card-img' src='${imgURL}' alt='${name}' />
                      <div class='exs-card-container'>
                          <h3 class='exs-card-title'>${name}</h3>
                          <p class='exs-card-description'>${filter}</p>
                      </div>
                  </li>`
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
                    <use href='../../img/icons.svg#icon-fi-rr-angle-small-left'></use>
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
                    <use href='../../img/icons.svg#icon-fi-rr-angle-small-right'></use>
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
