import React from 'react';
import MovieType from '../../types/MovieType';
import Card from '../Card';

interface CardsProps {
  movies: Array<MovieType>;
}

const Cards: React.FC<CardsProps> = ({ movies }) => (
  <>
    {movies?.map((movie) => (
      <Card movie={movie} key={movie.id} />
    ))}
  </>
);

export default Cards;
