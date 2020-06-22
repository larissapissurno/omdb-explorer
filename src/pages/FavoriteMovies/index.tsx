import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Movies, Title } from './styles';
import ButtonBack from '../../components/ButtonBack';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

const FavoriteMovies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const favoriteMovies = getFavoriteMovies();
    setMovies(favoriteMovies);
  }, []);

  return (
    <>
      <Title>My Favorite Movies</Title>

      {!movies.length && (
        <>
          <h4>You don't have any favorite movies yet :(</h4>
          <br />
          <Link to={process.env.PUBLIC_URL + '/'}>
            Let's find your favorite movies!
          </Link>
        </>
      )}

      <Movies>
        {movies &&
          movies.map((movie) => (
            <Link
              to={`${process.env.PUBLIC_URL}/movies/${movie.imdbID}`}
              key={movie.imdbID}
            >
              <img src={movie.Poster} alt={movie.Title} />
              <div>
                <strong>{`${movie.Title} (${movie.Year})`}</strong>
              </div>
            </Link>
          ))}
      </Movies>
      <ButtonBack />
    </>
  );
};

export default FavoriteMovies;

function getFavoriteMovies(): Movie[] {
  const storagedFavoriteMovies =
    window.localStorage.getItem('@omdb-explorer:favorite-movies') || '';
  return storagedFavoriteMovies ? JSON.parse(storagedFavoriteMovies) : [];
}
