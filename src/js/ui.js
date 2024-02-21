class ExerciseUI {
  getExerciseListHTML(exercises) {
    return exercises
      .map(
        ({
           _id,
           bodyPart,
           burnedCalories,
           description,
           equipment,
           gifUrl,
           name,
           popularity,
           rating,
           target,
           time,
         }) => ` <li class='exercise' data-exercise-id='${_id}'>
                    <button class='main-action-btn' type='button'>
                        Start
                            <svg class='main-action-arrow-icon' width='16' height='16'>
                                <use href='./../img/exercise/sprite.svg#icon-arrow-right'></use>
                            </svg>
                    </button>
                    <div class='top'>
                        <span class='badge'>Workout</span>
                        <span class='rating-value'>${rating}</span>
                        <svg class='rating-icon' width='18' height='18'>
                            <use href='./../img/exercise/sprite.svg#icon-star'></use>
                        </svg>
                        <button class='move-to-trash-btn' type='button'>
                            <svg class='move-to-trash-icon' width='18' height='18'>
                                <use href='./../img/exercise/sprite.svg#icon-trash-bin'></use>
                            </svg>
                        </button>
                    </div>
                    <div class='title'>
                        <svg class='title-icon' width='24' height='24'>
                            <use href='./../img/exercise/sprite.svg#icon-running-figure'></use>
                        </svg>
                        <span class='title-text text-clipped'>${name}</span>
                    </div>
                <div class='details'>
                    <div class='detail'>
                        <span class='detail-title'>Burned calories:</span>
                        <span class='js-burned-calories detail-value text-clipped'>${burnedCalories} / ${time} min</span>
                    </div>
                    <div class='detail'>
                        <span class='detail-title'>Body part:</span>
                        <span class='js-body-part detail-value text-clipped'>${bodyPart}</span>
                    </div>
                    <div class='detail'>
                        <span class='detail-title'>Target:</span>
                        <span class='js-target detail-value text-clipped'>${target}</span>
                    </div>
                </div>
      </li> `
      )
      .join('');
  }
  getExerciseCategoryListHTML(exercises) {
    return exercises
      .map(
        ({ filter, name, imgURL }) => `
              <li class='exs-card-item' data-name=${name}>'
                  <img class="'xs-card-img"'src="${imgURL}" alt="${name}" />
                      <div class="exs-card-container">
                          <h3 class="exs-card-title">${name}</h3>
                          <p class="exs-card-description">${filter}</p>
                      </div>
                  </li>`
      )
      .join('');
  }
  getPaginationHTML(totalPages, page = 1, perPage =9) {
    let paginationHTML = '';
    const paginationData = this.#makePaginationData(totalPages,page, perPage);

    if (page > 1) {
      paginationHTML += `
        <li class="exs-pagination-item">
            <a class="exs-pagination-link" href="#" data-page="${page - 1} ">
                <svg class="icon-pagination-arrow" width="20" height="20">
                    <use href="../../img/icons.svg#icon-fi-rr-angle-small-left"></use>
                </svg>
            </a>
        </li>`;
    }

    paginationData.pages.forEach(page=>{
      paginationHTML += `<li class="exs-pagination-item ${
        paginationData.page === page ? 'active' : ''
      }"><a class="exs-pagination-link" href="#" ${page !== "..." ? `data-page="${page}"` : '' }>${page}</a></li>`;
    })

    // for (let i = 1; i <= totalPages; i++) {
    //   paginationHTML += `<li class="exs-pagination-item ${
    //     i === page ? 'active' : ''
    //   }"><a class="exs-pagination-link" href="#" data-page="${i}">${i}</a></li>`;
    // }

    if (page < totalPages) {
      paginationHTML += `
        <li class='exs-pagination-item'>
            <a class='exs-pagination-link' href='#' data-page='${page + 1} '>
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
        (page === 1 ? 1 : (page < (maxPage - 2) ? page - 1 : maxPage - 4)),
        (page < (maxPage - 2) ? (page === 1 ? 2 : page) : maxPage - 3),
        (page < (maxPage - 2) ? (page === 1 ? 3 : page + 1) : maxPage - 2),
        (page < (maxPage - 3) ? "..." : maxPage - 1),
        maxPage
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
    }

  }
}