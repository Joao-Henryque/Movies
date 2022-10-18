import GetMovies from '../../httpClient/getMovies';
import saveMovieAsFavorite from '../../httpClient/saveMovieAsFavorite';
import MovieCard from '../MovieCard';
import MovieListLoader from '../Skeleton/MovieListLoader';

import { isMovieAlreadyFavorite } from '../../services/isMovieAlreadyFavorite';
import { Container } from './MovieList';

function MovieList(props) {
  const { apiPath } = props;

  const { favoriteMovies, handleSaveMovieAsFavorite } = saveMovieAsFavorite();
  const { movieList, loading } = GetMovies(apiPath);

  return (
    <Container>
      {loading ? (
        <MovieListLoader />
      ) : (
        movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            handleSaveMovieAsFavorite={() =>
              handleSaveMovieAsFavorite(movie.title, movie.id)
            }
            isFavorite={isMovieAlreadyFavorite(favoriteMovies, movie.id)}
          />
        ))
      )}
    </Container>
  );
}

export default MovieList;
