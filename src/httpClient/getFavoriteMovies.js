import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import { apiFavorites } from '../services/axios';

function GetFavoriteMovies() {
  const [loading, setLoading] = useState(true);
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiFavorites.get('favorites');

        setFavoriteMovies(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [setFavoriteMovies, apiFavorites]);

  return { favoriteMovies, setFavoriteMovies, loading };
}

export default GetFavoriteMovies;
