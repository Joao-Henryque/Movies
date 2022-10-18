import { useCallback } from 'react';

import toast from 'react-hot-toast';
import GetFavoriteMovies from './getFavoriteMovies';

import { apiFavorites } from '../services/axios';

function RemoveMovieFromFavorites() {
  const { favoriteMovies, setFavoriteMovies, loading } = GetFavoriteMovies();

  const handleRemoveFavoriteMovie = useCallback(
    async (id, title) => {
      await apiFavorites.delete(`favorites/${id}`);

      toast.success(`You don't love ${title} anymore`, {
        icon: '💔',
        style: {
          backgroundColor: '#212121',
          color: '#F2F2F7',
        },
      });

      const updatedFavoriteMovieList = favoriteMovies.filter(
        (movie) => movie.id !== id
      );
      setFavoriteMovies(updatedFavoriteMovieList);
    },
    [favoriteMovies, setFavoriteMovies]
  );

  return { favoriteMovies, handleRemoveFavoriteMovie, loading };
}

export default RemoveMovieFromFavorites;
