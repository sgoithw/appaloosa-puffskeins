// Import the YourEnergyAPI class and other necessary dependencies
import { YourEnergyAPI } from '../api'; // Adjust the path accordingly
import { FavouritesManager } from '../favouritesManager';
import { UIManager } from '../ui'; // Import the UIManager class

// Fetch and display favorite exercises
const favList = document.querySelector('.fav-list');
const favouritesManager = new FavouritesManager(); // Instantiate the FavouritesManager class
const uiManager = new UIManager(); // Instantiate the UIManager class

favouritesManager.getFavoriteExercises() // Use the FavouritesManager to get favorite exercises
  .then(favoriteExercises => {
    // Use UIManager to create exercise cards HTML and append them to the list
    const exerciseItemsHtml = uiManager.createExerciseCards(favoriteExercises);
    favList.innerHTML = exerciseItemsHtml;

    // Display no favorite exercises message if the list is empty
    uiManager.toggleNoCardsMessage(favList.children.length === 0);
  })
  .catch(error => console.error(error));

// Implement Exercise Removal
favList.addEventListener('click', event => {
  const deleteButton = event.target.closest('.delete-button');
  if (deleteButton) {
    const exerciseItem = deleteButton.closest('.exercise');
    if (exerciseItem) {
      const exerciseId = exerciseItem.dataset.exerciseId;
      favouritesManager.removeExercise(exerciseId);
      exerciseItem.remove();

      // Display no favorite exercises message if the list is empty
      uiManager.toggleNoCardsMessage(favList.children.length === 0);
    }
  }
});
