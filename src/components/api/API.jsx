import axios from 'axios';

export const API_KEY = 'dd434c778f29331c06da952bd2cda993';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  api_key: `${API_KEY}`,
};

export const getTrendingMovies = async () => {
  try {
    const { data } = await axios.get('trending/movie/day');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchMovies = async query => {
  try {
    const { data } = await axios.get('search/movie', {
      params: {
        query: query,
      },
    });
    console.log(data);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};
