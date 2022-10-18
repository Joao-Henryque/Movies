import { useCallback } from 'react';

import toast from 'react-hot-toast';
import GetFavoriteMovies from './getFavoriteMovies';

import { apiFavorites } from '../services/axios';
import { isMovieAlreadyFavorite } from '../services/isMovieAlreadyFavorite';

function SaveMovieAsFavorite() {
  const { favoriteMovies, setFavoriteMovies, loading } = GetFavoriteMovies();

  const handleSaveMovieAsFavorite = useCallback(
    async (title, id) => {
      if (isMovieAlreadyFavorite(favoriteMovies, id)) return;

      await apiFavorites.post('favorites', {
        id,
        title,
      });

      toast.success(`You loved ${title}`, {
        icon: '❤️',
        style: {
          backgroundColor: '#212121',
          color: '#F2F2F7',
        },
      });

      setFavoriteMovies((prevState) => [...prevState, { id, title }]);
    },
    [favoriteMovies, setFavoriteMovies]
  );

  return { favoriteMovies, handleSaveMovieAsFavorite, loading };
}

export default SaveMovieAsFavorite;
