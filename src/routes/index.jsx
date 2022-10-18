import { Route, Routes } from 'react-router-dom';

import FavoriteMovies from '../pages/FavoriteMovies';
import MovieDetails from '../pages/MovieDetails';
import Movies from '../pages/Movies';
import NotFound from '../pages/NotFound';
import TrendingMovies from '../pages/TrendingMovies';

function Pages() {
  return (
    <Routes>
      <Route path='/movies' element={<Movies />} />
      <Route path='/movies/details/:id' element={<MovieDetails />} />
      <Route path='/favorites' element={<FavoriteMovies />} />
      <Route path='/trending' element={<TrendingMovies />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
  );
}

export default Pages;
