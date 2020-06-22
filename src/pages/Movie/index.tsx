import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Rating from 'react-rating';
import { BsStarFill, BsStar, BsClock } from 'react-icons/bs';
import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';

import api from '../../services/api';

import {
  Container,
  Header,
  Genre,
  HeaderMainData,
  HeaderDescription,
} from './styles';
import InfoTabs from '../../components/InfoTabs';
import ButtonBack from '../../components/ButtonBack';

interface MovieParams {
  imdbID: string;
}

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Genre: string;
  Poster: string;
  Actors: string;
  Director: string;
  Plot: string;
  Runtime: string;
  Ratings: any[];
  imdbRating: string;
}

const Movie: React.FC = () => {
  const [movie, setMovie] = useState<Movie>();
  const [favoriteMovie, setFavoriteMovie] = useState(false);
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState<string[]>([]);

  const { params } = useRouteMatch<MovieParams>();

  useEffect(() => {
    api.get<Movie>(`?apikey=524d16a3&i=${params.imdbID}`).then((response) => {
      const movie = response.data;

      setMovie(movie);

      if (movie.imdbRating) {
        setRating((+movie.imdbRating * 5) / 10);
      }

      if (movie.Genre) {
        setGenres(movie.Genre.split(', '));
      }

      const favoriteMovies = getFavoriteMovies().map(
        (movie: Movie) => movie.imdbID,
      );
      setFavoriteMovie(favoriteMovies.includes(params.imdbID));
    });
  }, [params.imdbID]);

  function handleClickFavorite() {
    const favorite = !favoriteMovie;
    setFavoriteMovie(favorite);

    if (favorite) {
      addFavoriteMovie(movie);
    } else {
      removeFavoriteMovie(params.imdbID);
    }
  }

  return (
    <>
      {movie && (
        <Container>
          <Fab
            aria-label="like"
            color={favoriteMovie ? 'secondary' : 'default'}
            onClick={handleClickFavorite}
          >
            <FavoriteIcon />
          </Fab>
          <Header>
            <HeaderMainData>
              <img src={movie.Poster} alt={movie.Title}></img>

              <div>
                <h1>{`${movie.Title} (${movie.Year})`}</h1>

                <span>
                  <Rating
                    initialRating={rating}
                    emptySymbol={<BsStar />}
                    fullSymbol={<BsStarFill />}
                    readonly
                  />
                  <BsClock /> {movie.Runtime}
                </span>

                <p>
                  {genres.length &&
                    genres.map((genre) => <Genre key={genre}>{genre}</Genre>)}
                </p>
              </div>
            </HeaderMainData>

            <HeaderDescription>{movie.Plot}</HeaderDescription>
          </Header>

          <InfoTabs
            actors={movie.Actors.split(', ')}
            directors={movie.Director.split(', ')}
            ratings={movie.Ratings}
          />
        </Container>
      )}

      <ButtonBack />
    </>
  );
};

function addFavoriteMovie(favoriteMovie: Movie | undefined) {
  if (!favoriteMovie) {
    return;
  }

  const favoriteMovies = getFavoriteMovies();

  if (favoriteMovies.find((movie) => movie.imdbID === favoriteMovie.imdbID)) {
    return;
  }

  favoriteMovies.push(favoriteMovie);

  window.localStorage.setItem(
    '@omdb-explorer:favorite-movies',
    JSON.stringify(favoriteMovies),
  );
}

function getFavoriteMovies(): Movie[] {
  const storagedFavoriteMovies =
    window.localStorage.getItem('@omdb-explorer:favorite-movies') || '';
  return storagedFavoriteMovies ? JSON.parse(storagedFavoriteMovies) : [];
}

function removeFavoriteMovie(favoriteMovieId: string) {
  const favoriteMovies = getFavoriteMovies();

  const index = favoriteMovies.findIndex(
    (movie) => movie.imdbID === favoriteMovieId,
  );

  favoriteMovies.splice(index, 1);

  window.localStorage.setItem(
    '@omdb-explorer:favorite-movies',
    JSON.stringify(favoriteMovies),
  );
}

export default Movie;
