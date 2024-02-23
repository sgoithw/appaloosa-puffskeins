// Import the YourEnergyAPI class and other necessary dependencies
import {YourEnergyAPI} from `./api`;// Adjust the path accordingly
import { favouritesManager } from './favouritesManager';

  // Fetch and display favorite exercises
  const favList = document.querySelector('.fav-list');
  api.getFavoriteExercises()
    .then(favoriteExercises => {
      favoriteExercises.forEach(exercise => {
        const exerciseItem = document.createElement('li');
        exerciseItem.textContent = exercise.name;  // Replace with the actual property names from your API
        favList.appendChild(exerciseItem);
      });
    })
    .catch(error => console.error(error));
  // Implement Exercise Removal
  favList.addEventListener('click', event => {
    const exerciseItem = event.target.closest('.exercise');
    if (exerciseItem) {
      const exerciseId = exerciseItem.dataset.exerciseId;
      favoritesManager.removeExercise(exerciseId);
      exerciseItem.remove();
      // Display no favorite exercises message if the list is empty
      const favNoCards = document.querySelector('.fav-no-cards');
      favNoCards.style.display = favList.children.length === 0 ? 'block' : 'none';
    }
  });