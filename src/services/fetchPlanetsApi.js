const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const fetchPlanetsApi = async () => {
  try {
    const response = await fetch(URL);
    const { results } = await response.json();
    return results;
  } catch (error) {
    return error;
  }
};

export default fetchPlanetsApi;
