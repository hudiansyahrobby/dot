import React from 'react';
import MovieType from '../../types/MovieType';
import './index.scss';

interface CardProps {
  movie: MovieType;
}

const Card: React.FC<CardProps> = ({ movie }) => {
  const { title, overview, poster_path: posterPath } = movie;

  const imageUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

  return (
    <div className="card">
      <div className="card-header">
        <img className="card-image" src={imageUrl} alt={title} />
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-subtitle">{overview}</h2>
        {/* <h2 className="card-rating">
            <i className="fas fa-star"></i>
            {{ vote_average }}
          </h2>  */}
        {/* <Button title="Check Movie" /> */}
        <div className="card-btn" />
      </div>
    </div>
  );
};

export default Card;
