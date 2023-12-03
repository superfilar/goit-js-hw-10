import axios from '/node_modules/axios';
axios.defaults.headers.common['x-api-key'] =
  'live_NFci2mdelk4wk322NSAznAb5K07VXJbWiCQuCZFEL6DLjdrZCrE6WZZVCimwKQ95';

const url = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/breeds`)
      .then(response => {
        resolve(response.data);
      })
      .catch(response => {
        reject(response);
      });
  });
}

function fetchCatByBreed(breedId) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${url}/images/search`, {
        params: {
          breed_ids: breedId,
        },
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(response => {
        reject(response);
      });
  });
}

export { fetchBreeds, fetchCatByBreed };
