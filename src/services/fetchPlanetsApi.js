const URL = 'https://swapi.dev/api/planets';

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
