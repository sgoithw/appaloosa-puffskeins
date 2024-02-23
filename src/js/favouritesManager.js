class FavouritesManager {
  /**
   * FavouritesManager's constructor.
   * initializing new instance with provided parameters.
   */
  constructor() {
    this.favouritesKey = 'favouriteExercises';
  }

  /**
   * add exersice to favourites.
   * @param {object} exercise - exersice object with all parameters.
   */
  addExerciseToFavorites(exercise) {
    const favourites = this.getFavorites();
    favourites.push(exercise);
    localStorage.setItem(this.favouritesKey, JSON.stringify(favourites));
  }

  /**
   * remove exercise from favourites using its ID
   * @param {string} exerciseId - exersice ID.
   */
  removeExerciseFromFavorites(exerciseId) {
    let favourites = this.getFavorites();
    favourites = favourites.filter(exercise => exercise.id !== exerciseId);
    localStorage.setItem(this.favouritesKey, JSON.stringify(favourites));
  }

  /**
   * returns currents list of favourites from localStorage.
   * @returns {Array} - array of exercises's objects.
   */
  getFavorites() {
    const favouritesJSON = localStorage.getItem(this.favouritesKey);
    return favouritesJSON ? JSON.parse(favouritesJSON) : [];
  }

  /**
   * checks if this particular exersice with this ID in favourites.
   * @param {string} exerciseId - exersice ID.
   * @returns {boolean} - true, exersice is in favourites, if not false.
   */
  isFavorite(exerciseId) {
    const favourites = this.getFavorites();
    return favourites.some(exercise => exercise._id === exerciseId);
  }
}

// exporting class FavouritesManager.
export const favouritesManager = new FavouritesManager();
