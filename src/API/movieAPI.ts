import axios from 'axios';

const getAllMovies = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_APIKEY}&language=en-US&page=${pageParam}`,
  );

  return data;
};

export default getAllMovies;
