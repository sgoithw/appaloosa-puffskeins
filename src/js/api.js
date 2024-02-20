const BASE_URL = 'https://your-energy.b.goit.study';

class YourEnergyAPI {
  // Private field to store the base URL
  #baseUrl = '';

  // Constructor to initialize the base URL
  constructor(baseUrl) {
    this.#baseUrl = baseUrl;
  }

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

  // Method to fetch quotes from the API
  quotes(query) {
    const parameters = new URLSearchParams(query);
    return fetch(`${this.#baseUrl}/api/quote?${parameters}`).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error fetching qoute');
    });
  }

  // Method to fetch a specific exercise by its ID
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
