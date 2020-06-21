import React, { useState, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Rating from 'react-rating';
import { BsStarFill, BsStar, BsClock, BsChevronLeft } from 'react-icons/bs';
import { Button } from '@material-ui/core';

import api from '../../services/api';

import {
  Container,
  Header,
  Genre,
  HeaderMainData,
  HeaderDescription,
  Content,
  ButtonBack
} from './styles';

interface MovieParams {
  imdbID: string;
}

interface Movie {
  Title: string;
  Year: string;
  Genre: string;
  Poster: string;
  Actors: string;
  Plot: string;
  Runtime: string;
  imdbRating: string;
}
const Movie: React.FC = () => {
  const [movie, setMovie] = useState<Movie>();
  const [rating, setRating] = useState(0);
  const [genres, setGenres] = useState<string[]>([]);

  const { params } = useRouteMatch<MovieParams>();

  useEffect(() => {
    api.get<Movie>(`?apikey=524d16a3&i=${params.imdbID}`).then((response) => {
      const movie = response.data;

      setMovie(movie);

      if (movie.imdbRating) {
        setRating(+movie.imdbRating * 5 / 10);
      }

      if (movie.Genre) {
        setGenres(movie.Genre.split(', '));
      }
    });
  }, [params.imdbID]);

  return (
    <>
      <ButtonBack color="primary" onClick={() => window.history.back()}><BsChevronLeft />Go back</ButtonBack>
      {movie &&
        <Container>
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
                  {genres.length && genres.map((genre => (<Genre>{genre}</Genre>)))}
                </p>
              </div>
            </HeaderMainData>

            <HeaderDescription>{movie.Plot}</HeaderDescription>
          </Header>

          <Content>

          </Content>

        </Container>
      }
    </>
  )
}

export default Movie;