import { useInfiniteQuery } from 'react-query';
import getAllMovies from '../API/movieAPI';

const useMovies = () =>
  useInfiniteQuery('movies', getAllMovies, {
    getNextPageParam: (movies) => {
      const hasNextPage = movies.page < movies.total_pages;
      let nextPage = false;
      if (hasNextPage) {
        nextPage = movies.page + 1;
      }

      return nextPage;
    },
  });

export default useMovies;
