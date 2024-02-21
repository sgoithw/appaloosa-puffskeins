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

export const popupUI = new PopupUI();