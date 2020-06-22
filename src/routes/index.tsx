import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Movie from '../pages/Movie';
import FavoriteMovies from '../pages/FavoriteMovies';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/movies/:imdbID" component={Movie} />
    <Route path="/favorite-movies" component={FavoriteMovies} />
  </Switch>
);

export default Routes;
