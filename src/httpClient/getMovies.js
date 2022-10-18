import { useEffect, useState } from 'react';

import toast from 'react-hot-toast';

import { APIKey } from '../config/key';
import { apiMovieDb } from '../services/axios';

function GetMovies(apiPath) {
  const [loading, setLoading] = useState(true);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiMovieDb.get(`${apiPath}${APIKey}`);
        const movies = await data.results;

        setMovieList(movies);
      } catch (error) {
        toast.error(error.response.data.status_message);
      } finally {
        setLoading(false);
      }
    })();
  }, [setMovieList, apiPath]);

  return { movieList, loading };
}

export default GetMovies;
