import React from 'react';
import { Link } from 'react-router-dom';

function MovieList({ movies }) {
  return (
    <div className='movie-list'>
      {movies.map(movie => (
        <Link className="movie" key={movie.id} to={'/movie/' + movie.id}>
          <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="imagen" />
          <div className="movie-description">
            <p>{movie.title}</p>
            <p>{movie.release_date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieList