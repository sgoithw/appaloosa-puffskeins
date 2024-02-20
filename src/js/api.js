const BASE_URL = 'https://your-energy.b.goit.study';

class YourEnergyAPI {
  // Private field to store the base URL
  #baseUrl = '';

  /**
   * @param {string} baseUrl  - The base url for the API.
   */

  // Constructor to initialize the base URL
  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

  /**
   * All filters. This endpoint returns all the filters available for the exercise search.
   * @param {Object} query - The parameters for the exercise search.
   * @param {string} query.filter - The filter to apply to the search.
   * @param {number} query.page - The page number of the results to return.
   * @param {number} query.limit - The number of exercises to return.
   * @returns
   */
  // Method to fetch filters from the API
  filters(query) {
    // Convert query parameters to URL search params
    const parameters = new URLSearchParams(query);
    // Fetch filters using the constructed URL
    return fetch(`${this.#baseUrl}/api/filters?${parameters}`).then(
      response => {
        if (response.ok) {
          return response.json(); // Parse response as JSON if successful
        }
        throw new Error('Error fetching filters'); // Throw error if request fails
      }
    );
  }

  /**
   * All exercises. This endpoint returns all the exercises available for the provided.
   * @param {Object} query - The parameters for the exercise search.
   * @param {string} query.bodypart - The filter that is applied to the search.
   * @param {string} query.muscles - The filter that is applied to the search.
   * @param {string} query.equipment - The filter that is applied to the search.
   * @param {string} query.keyword - The keyword for search by exercise name.
   * @param {number} query.page - The page number of the results to return.
   * @param {number} query.limit - The number of exercises to return.
   * @returns
   */
  // Method to fetch exercises from the API
  exercises(query) {
    const parameters = new URLSearchParams(query);
    return fetch(`${this.#baseUrl}/api/exercises?${parameters}`).then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error fetching exercises');
      }
    );
  }

  // Method to fetch quotes from the API. No paramentrs are required
  quotes() {
    return fetch(`${this.#baseUrl}/api/quote`).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error fetching qoute');
    });
  }

  // Method to fetch a specific exercise by its ID.
  //* @param {string} id - Exercise ID.
  getExerciseById(id) {
    return fetch(`${this.#baseUrl}/api/exercises/${id}`).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error fetching exercise by ID');
    });
  }

  // Method to patch (update) the rating of an exercise
  patchRating(id, data) {
    return fetch(`${this.#baseUrl}/api/exercises/${id}/rating`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error patching rating');
    });
  }

  // Method to create a subscription
  createSubscription(data) {
    return fetch(`${this.#baseUrl}/api/subscription`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error creating subscription');
    });
  }
}

// Export an instance of YourEnergyAPI initialized with the base URL
export default new YourEnergyAPI(BASE_URL);
