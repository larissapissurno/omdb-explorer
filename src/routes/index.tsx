import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Movie from '../pages/Movie';
import FavoriteMovies from '../pages/FavoriteMovies';

const Routes: React.FC = () => (
  <Switch>
    <Route path={process.env.PUBLIC_URL + '/'} exact component={Dashboard} />
    <Route
      path={process.env.PUBLIC_URL + '/movies/:imdbID'}
      component={Movie}
    />
    <Route
      path={process.env.PUBLIC_URL + '/favorite-movies'}
      component={FavoriteMovies}
    />
  </Switch>
);

export default Routes;
