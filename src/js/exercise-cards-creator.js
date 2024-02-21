export default class ExerciseCardsCreator{

  /**
   * * Type of exercise card.
   * Different features may be added to a card with different type.
   * 
   * Ad hoc Enum use:
   * Object.freeze - freezes the object and makes it Read-Only (writes will cause an error).
   * Symbol() - makes each item unique. 
   */
  static exerciseCardType = Object.freeze({
    HOME: "HOME",
    FAVORITES: "FAVORITES",
  });

  /**
   * * Creates markup of the exercise cards list items of a specific exercise card type.
   * Depending on card type, adds additional card feature (rating | move to trash button).
   * @param {object[]} arr Array of exercise card objects of a specific 'exerciseCardType' type.
   * @param {string (ExerciseCardCreator.exerciseCardType)} cardType On of the exercise card types.
   * @returns {string} Exercise card list HTML representation.
   */
  generateExerciseListMarkup(arr, cardType) {
    if(!ExerciseCardsCreator.exerciseCardType[cardType]) {
      console.error(`Unsupported exercise card type \'${cardType}\' when trying to create exercise card.`);
      return "";
    }
    
    let featureMarkup;

    if (cardType === ExerciseCardsCreator.exerciseCardType.FAVORITES) {
      featureMarkup = `
        <button class="move-to-trash-btn" type="button">
        <svg class="move-to-trash-icon" width="16" height="16">
              <use href="./../../img/icons.svg#icon-trash"></use>
            </svg>
          </button>`;
    }

    return arr.map((el) => {
      if (cardType === ExerciseCardsCreator.exerciseCardType.HOME) {
        featureMarkup = `
        <div class="rating">
        <span class="rating-value">${el.rating}</span>
        <svg class="rating-icon" width="18" height="18">
        <use href="./../../img/icons.svg#icon-Star"></use>
        </svg>
        </div>`
      }

      return `
      <li class="exercise" data-exercise-id="${el._id}">
        <button class="main-action-btn" type="button">
          Start
          <svg class="main-action-arrow-icon" width="16" height="16">
            <use href="./../../img/icons.svg#icon-arrow-right"></use>
          </svg>
        </button>
        <div class="top">
          <span class="badge">Workout</span>
          ${featureMarkup}
        </div>
        <div class="title">
          <svg class="title-icon" width="14" height="16">
            <use href="./../../img/icons.svg#icon-running-stick-figure-svgrepo-com-1"></use>
          </svg>
          <span class="title-text text-clipped">${el.name.charAt(0).toUpperCase() + el.name.slice(1)}</span>
        </div>
        <div class="details">
          <div class="detail">
            <span class="detail-title">Burned calories:</span>
            <span class="detail-value text-clipped">${el.burnedCalories} / ${el.time} min</span>
          </div>
          <div class="detail">
            <span class="detail-title">Body part:</span>
            <span class="detail-value text-clipped">${el.bodyPart}</span>
          </div>
          <div class="detail">
            <span class="detail-title">Target:</span>
            <span class="detail-value text-clipped">${el.target}</span>
          </div>
        </div>
      </li>`
    }).join("");
  };
}