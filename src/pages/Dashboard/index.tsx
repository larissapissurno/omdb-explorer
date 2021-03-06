import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';

import { Title, Form, Movies, Error, MyFavsButton } from './styles';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
}

interface ResponseDTO {
  Search: Movie[];
  Error: string;
  totalResults: string;
}

const Dashboard: React.FC = () => {
  const [newMovie, setNewMovie] = useState('');
  const [inputError, setInputError] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);

  async function handleSearchMovie(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    try {
      if (!newMovie) {
        setInputError('This field is required.');
        return;
      }

      if (newMovie.length < 3) {
        setInputError('A minimum of 3 characters is required.');
        return;
      }

      const response = await api.get<ResponseDTO>(
        `?apikey=524d16a3&s=${newMovie}&type=movie`,
      );
      const { Search: movies, Error } = response.data;

      if (!!Error) {
        setInputError(Error);
        setMovies([]);
        return;
      }

      setMovies(movies);

      setInputError('');
    } catch (error) {
      setInputError('Error in searching for this movie.');
    }
  }

  return (
    <>
      <Title>Find your Favorite Movie</Title>

      <Link to={`${process.env.PUBLIC_URL}/favorite-movies`}>
        <MyFavsButton>
          <FavoriteIcon color="secondary" />
          <span>My Favs</span>
          <ArrowRightAlt />
        </MyFavsButton>
      </Link>

      <Form hasError={!!inputError} onSubmit={handleSearchMovie}>
        <input
          value={newMovie}
          onChange={(event) => setNewMovie(event.target.value)}
          placeholder="Inform your favorite movie name"
        />
        <button type="submit">Search</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

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
    </>
  );
};

export default Dashboard;
